---
title: Spring-session线上问题复盘
date: 2023-03-18 11:07:04
category:
	- coding
tag:
    - 故障复盘
---

## spring-session线上问题复盘

### 发现问题流程
1. 基础服务的CPU告警，当时对基础服务进行了重启操作，重启之后负载下降暂时恢复。
2. 10时50分dba查看到redis 实时连接数有点高超过2500，还有一些慢查询，后面redis也开始告警
3. 打印服务出现异常的网络连接，立即对服务器进行了重启操作。
4. 基础服务出现CPU告警，然后又对相关的基础服务进行重启操作。
5. 打印服务负载情况大家认为是打印服务导致了整个系统缓慢，紧急对打印服务进行了节点扩展，结果是11时30几分反馈系统能使用，整体操作上比较卡。
6. redis 服务CPU告警
7. 14时12分又开始收到用户反馈系统卡，无法正常打开页面访问，其他服务都出现相同情况，当时的现象是出现redis 的QPS急速飙升高峰到80000+
8. 根据当时的现象表现整个系统很卡，redis 的QPS很高是平时的好几倍，redis的连接数也很高快到达了5000，日志上也有出现各种redis连接超时，甚至有出现redis oom 等报错。当时大家都比较怀疑是redis出现了问题，导致系统变慢变卡，然后对redis的存储对象进行了排查，没有发现特别大的存储key，又对存储的key数量进行了排查（思路是查找出key前缀相同排名前几的key，然后去分析具体是什么操作引起的）。经过dba 的查看分析发现 spring:session:sessions 开头的key占用了将近600万，这个key主要是spring session使用redis存储产生的，非常的异常，为什么会产生这么多。

> 当时情况是有两个系统都是使用了相同的redis，没有分离业务存储和登录信息存储，提出的解决方案。
>
> 1. 将两种存储分离，使用不同的redis进行存储，减轻同个redis的链接操作压力。
> 2. 引入redis集群模式，来分散登录存储redis 的服务器压力。一方面进行分离方案的进行，另一方面继续排查redis引起的问题原因。
> 3. 在分离redis过程中也对redis配置进行了优化，增加了连接池、最大连接数、超时时间等配置。

9. 改完代码和配置后在测试环境验证，发现一个奇怪的现象，新增的redis出现了大量的**spring:session:sessions key**, 没一会功夫redis出现了差不多18万的key，这个异常的情况大家讨论出各个系统使用了spring session redis来进行存储登录信息，应该是内网调用产生了大量无用key） ，spring session会在请求进来时候获取请求头COOKIE里面的**SESSION**，假如不存在对应的key，就会自动生成三条key的存储.每一个session，Redis实际缓存的数据如下：

   ```
   spring:session:sessions:0704a610-7941-4fc7-9379-7fc3ad4ce8d0     
   spring:session:sessions:expires:0704a610-7941-4fc7-9379-7fc3ad4ce8d0
   spring:session:expirations:1557389100000
   ```

   > Redis过期键有三种删除策略，分别是定时删除，惰性删除，定期删除。
   >
   > 1.定时删除：通过维护一个定时器，过期马上删除，是最有效的，但是也是最浪费cpu时间的。
   >
   > 2.惰性删除：程序在取出键时才判断它是否过期，过期才删除，这个方法对cpu时间友好，对内存不友好。
   >
   > 3.定期删除：每隔一定时间执行一次删除过期键的操作，并限制每次删除操作的执行时长和频率，是一种折中。
   >
   > Redis采用了惰性删除和定期删除的策略。由此可见依赖 Redis 的过期策略实时删除过期key是不可靠的。



## 产生原因

问题找到了，需要定位产生问题的原因。产生该问题的原因有两个：

1. 引入了外部的jar包，由于引入的包又不干净，间接的引入了大量的依赖包，触发了spring session redis存储功能
2. spring redis配置不合理刚好开启了开关，另外配置没有进行redis连接池化

定位到是引入的一个日志包附带引入了spring-session-core 和 spring-session-data-redis这个包,（原先系统是没有这些包依赖的，所以即使配置配了实际也没有生效），引入之后加上配置本身存在，默认启用了spring redis session，最终出现了feign调用和内网调用会产生大量的spring session，存储到redis中。

```
getSession方法默认create为true，所以根本原因是，服务间的feign接口，以及其他所有请求到云记账的内部http接口，request对象中没有sessionId

导致spring session一直在创建session并保存到redis中，且这些session是无用的，随着请求的积累，redis压力越来越大
```



## 解决方式

目前不需要共享session，所以无需spring-session