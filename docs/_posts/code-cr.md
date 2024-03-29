---
title: 代码CR模板
date: 2023-04-02 00:34:27
category:
    - 工作心得
---

# 代码CR模板

## 基础篇

1. 编码风格遵循阿里巴巴Java开发手册

2. 大型复杂流程程序必须提供流程图、时序图

   1. 被cr同学在cr开始需简单叙述项目大小及其背景，复杂流程需要cr实现逻辑是否match技术方案，减少实现跟技术方案的gap

3. 业务逻辑划分是否合理,是否耦合

   1. 业务逻辑涉及领域的逻辑，明显或耦合的业务逻辑建议拆分

4. 代码编码逻辑是否清晰

   1. 被cr同学需要讲清楚主干逻辑

5. 合理有效的注释

   1. 逻辑复杂的代码或cr有疑问的逻辑,要求补充合理有效的注释

6. 是否存在冗余代码

   1. 多余或者没有引用的代码建议删除

7. 是否存在潜在NPE

   1. > NPE是日常工作必出现的bug
      >
      > 上下文字段使用不判空，getXX()操作，基本类型拆箱，需要防御式判断或Optional

8. 日志打印规范

   1. 强制使用占位符进行日志打印，因为字符串拼接会使用 StringBuilder 的 append() 方式,有一定的性能损耗

      > logger.info("are u ok : oid 1", oid);
      > logger.info("are u ok : oid 1", oid);

9. 有没有maven依赖冲突

   * 很多时候诡异的运行时bug，往往由于依赖冲突导致，cr建议确认是否有pom变更

10. 资源释放

    * 无论是网络io还是文件io、资源释放的逻辑需要被cr到

11. 统一错误码

    * 禁止统一返回-1、500等错误码，最好定义枚举，方便追溯问题

12. 异常的处理

    * 出现异常的地方需要确认是否需要进行一下操作：直接返回、抛出异常、重试处理、恢复处理、熔断处理、降级处理、关闭业务

## 初级篇

1. 数据库索引设计是否合理、是否生效
   * 被cr同学要讲清楚设计索引的原因以及效果
2. 代码是否可以使用设计模式或者设计模式是否过度设计
   * if/else 过多或者场景分发类逻辑，建议采用策略模式
   * 不建议小的需求、进行复杂的继承抽象逻辑，良好的设计是模型的合理
   * 不建议引入复杂的框架解决简单问题，有些同学热衷于一个框架搞定所有架构(比如ddd cola)， 毕竟代码的历史性、复杂度框架是评估不了的、好的业务框架脚手架更倾向于用这种思想解决问题，而非照搬
3. 中间件使用是否最佳实践
   * 比如mq消费是否正确ack、还是需要重试、还是丢弃
   * 比如redis是否存在大key设计、需要进行合理设计
   * 比如es查询是否设置合理超时时间
4. 线程池使用、参数是否正确、是否业务隔离
   * 是否使用公司框架或jdk自带带参线程池构建方法
   * 线程数、队列大小是否配置合理
   * 多业务或调用方、是否配置隔离线程池
5. 如果使用锁，锁范围、粒度是否合适
   * 分布式锁的锁区间需要check是否影响其他
6. 事务处理：是否需要事务，事务是否生效
   * 持久化操作是否没有加事务
   * 类内部调用是否导致事务没生效

## 进阶篇

### 性能优化

1. 需要缓存的地方是否添加缓存
   * 比如依赖的外部接口性能差、添加合适的缓存解决查询问题
2. 乐观锁代替悲观锁
3. 多接口聚合采用多线程加速

### 一致性

### 幂等性

1. 基于状态的幂等
   * 基于状态，也就是是说调用该接口，会导致状态变化，如果状态已经发生变化，那么就直接返回
     之前的结果即可
2. 基于某个key的幂等
   * 通常使用单独的字段来绑定或者日志表来记录，如果存在，直接返回

### 重试

1. 接口调用失败重试
   1. 存在写操作的的外部接口建议不重试、让外部重新发起请求如果需要发起重试、
   2. check提供的接口支持幂等返回
