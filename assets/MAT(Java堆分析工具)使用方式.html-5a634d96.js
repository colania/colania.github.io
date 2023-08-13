import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as l,a,b as i,d as t,e as o}from"./app-c97a4cd2.js";const d={},c=o('<h1 id="mat-java堆分析工具-使用方式" tabindex="-1"><a class="header-anchor" href="#mat-java堆分析工具-使用方式" aria-hidden="true">#</a> MAT(Java堆分析工具)使用方式</h1><p>最近在整理笔记，发现之前在分析JAVA内存问题时写的Mat工具文档还是蛮清晰的，现重新整理一下，分享出来。</p><h2 id="mat是个啥" tabindex="-1"><a class="header-anchor" href="#mat是个啥" aria-hidden="true">#</a> MAT是个啥</h2><p>MAT 全称 <code>Eclipse Memory Analysis Tools</code> 是一个分析 Java堆数据的专业工具，可以计算出内存中对象的实例数量、占用空间大小、引用关系等，看看是谁阻止了垃圾收集器的回收工作，从而定位内存泄漏的原因。</p><h2 id="什么时候会用到" tabindex="-1"><a class="header-anchor" href="#什么时候会用到" aria-hidden="true">#</a> 什么时候会用到</h2><ul><li>OutOfMemoryError的时候，触发full gc，但空间却回收不了，引发内存泄露</li><li>java服务器系统异常，比如load飙高，io异常，或者线程死锁等，都可能通过分析堆中的内存对象来定位原因</li></ul><h2 id="怎么安装" tabindex="-1"><a class="header-anchor" href="#怎么安装" aria-hidden="true">#</a> 怎么安装</h2>',7),g={href:"https://www.eclipse.org/mat/downloads.php",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.eclipse.org/mat/previousReleases.php",target:"_blank",rel:"noopener noreferrer"},h=o(`<p>比较重要的是MAT的版本是和JAVA版本有关的，如果下载的话，需要考虑是否支持本地的 JAVA 版本 。</p><p>我用的是MAC Intel 版本，所以下载的是 <code>MemoryAnalyzer-1.12.0.20210602-macosx.cocoa.x86_64</code> 。当前最新的 <code>Memory Analyzer 1.14.0 Release</code> 需要Java 17+。</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329152800939.png" alt="image-20230329152800939" tabindex="0" loading="lazy"><figcaption>image-20230329152800939</figcaption></figure><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><p>首先，MAT是用来分析JAVA堆数据的专业工具，那如何才能获取到JAVA堆数据呢。</p><h3 id="分析文件生成方式" tabindex="-1"><a class="header-anchor" href="#分析文件生成方式" aria-hidden="true">#</a> 分析文件生成方式</h3><ol><li>自动生成，jvm启动参数里添加下面配置，当发生OutOfMemoryError时，虚拟机会自动dump内存快照</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=$LOG_DIR/java.hprof&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>手动生成，通过执行jdk自带命令</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jmap -dump:format=b,file=heap.bin  &lt;pid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Arthas heapdump命令</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>heapdump xxxxxx.hprof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下就可以用 MAT打开转换后的.hprof文件</p><p><strong><span style="color:red;">（！我这里只是介绍使用方式，并不是arthas有问题，这个dump文件只是随手生成的一份）</span></strong></p><h3 id="使用mat" tabindex="-1"><a class="header-anchor" href="#使用mat" aria-hidden="true">#</a> 使用MAT</h3><p>打开后的首页，里面是一些堆的基本概要信息，比如空间大小、类的数量、对象实例数量、类加载器等等</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329153514976.png" alt="image-20230329153514976" tabindex="0" loading="lazy"><figcaption>image-20230329153514976</figcaption></figure><h2 id="mat功能" tabindex="-1"><a class="header-anchor" href="#mat功能" aria-hidden="true">#</a> MAT功能</h2><p>MAT的核心功能有三类：</p><ul><li>Actions： <ul><li><strong>Histogram 列出每个类所对应的对象个数，以及所占用的内存大小；</strong></li><li><strong>Dominator Tree 以占用总内存的百分比的方式来列举出所有的实例对象，注意这个地方是直接列举出的对应的对象而不是类，这个视图是用来发现大内存对象的</strong></li><li>Top Consumers：按照类和包分组的方式展示出占用内存最大的一个对象</li><li>Duplicate Classes：检测由多个类加载器所加载的类信息（用来查找重复的类）</li></ul></li><li>Reports： <ul><li><strong>Leak Suspects：通过MAT自动分析当前内存泄露的主要原因</strong></li><li>Top Components：Top组件，列出大于总堆1%的组件的报告</li></ul></li><li>Step By Step： <ul><li>Component Report：组件报告,分析属于公共根包或类加载器的对象；</li></ul></li></ul><p>下面列举一些会用到的功能。</p><h3 id="histogram" tabindex="-1"><a class="header-anchor" href="#histogram" aria-hidden="true">#</a> Histogram</h3><p>列出每个类所对应的对象个数，以及所占用的内存大小。</p><p>选中一个ClassName单击后，通过左上角Inspector可以看到当前类的回收情况，内存地址，等</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329154124926.png" alt="image-20230329154124926" tabindex="0" loading="lazy"><figcaption>image-20230329154124926</figcaption></figure><h3 id="dominator-tree" tabindex="-1"><a class="header-anchor" href="#dominator-tree" aria-hidden="true">#</a> Dominator Tree</h3><p>以占用总内存的百分比的方式来列举出所有的实例对象，注意这个地方是直接列举出的对应的对象而不是类，这个视图是用来发现大内存对象的</p><ul><li><p>通过<code>Dominator Tree</code> 可以轻松看到那些对象占据了大量堆空间，也就可以断定，当前问题出自于哪个对象。</p></li><li><p>再根据该对象的生成方式，去判断出问题的代码在哪里。</p></li></ul><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329154234980.png" alt="image-20230329154234980" tabindex="0" loading="lazy"><figcaption>image-20230329154234980</figcaption></figure><p>由上图可看到<code>com.taobao.arthas.core.server.ArthasBootstrap @ 0x7ba601258</code>占用了32.97%的内存</p><p><strong>那么当我们需要查看，当前该ArthasBootstrap @ 0x7ba601258对象都引用了那些数据，以及当前该对象是被那几个对象所引用的，如何查看？</strong></p><p>在当前所要查看的对象右键，点击List Objects可以看到分别提供了：<code>with outgoing references（查看当前该对象的所有的引用信息）</code> 和 <code>with incoming references（查看当前该对象是被那几个对象所引用的）</code> ；</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329154846899.png" alt="image-20230329154846899" tabindex="0" loading="lazy"><figcaption>image-20230329154846899</figcaption></figure><p>快速找出某个实例没被释放的原因，可以右健 Path to GC Roots–&gt;exclude all phantom/weak/soft etc. references</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329155941552.png" alt="image-20230329155941552" tabindex="0" loading="lazy"><figcaption>image-20230329155941552</figcaption></figure><h3 id="leak-suspects" tabindex="-1"><a class="header-anchor" href="#leak-suspects" aria-hidden="true">#</a> Leak Suspects</h3><p>通过MAT自动分析当前内存问题的主要原因</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329154945313.png" alt="image-20230329154945313" tabindex="0" loading="lazy"><figcaption>image-20230329154945313</figcaption></figure><p>可以看到，当前给出的主要原因是：<code>**com.taobao.arthas.core.server.ArthasBootstrap**</code> 实例占据<strong>8,392,160 (32.97%)</strong> bytes ， 是由<code> **com.taobao.arthas.agent.ArthasClassloader @ 0x7ba556870**</code>加载的。</p><p>还给出了关键字：</p><p><strong>Keywords</strong></p><ul><li>com.taobao.arthas.core.server.ArthasBootstrap</li><li>com.taobao.arthas.agent.ArthasClassloader @ 0x7ba556870</li><li>com.taobao.arthas.core.shell.term.impl.http.api.HttpApiHandler</li></ul><p>点击detail的话，会有更详细的内容</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329155356140.png" alt="image-20230329155356140" tabindex="0" loading="lazy"><figcaption>image-20230329155356140</figcaption></figure><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329155424428.png" alt="image-20230329155424428" tabindex="0" loading="lazy"><figcaption>image-20230329155424428</figcaption></figure><h3 id="thread-overview" tabindex="-1"><a class="header-anchor" href="#thread-overview" aria-hidden="true">#</a> Thread_Overview</h3><p>用来查看当前进程dump时的所有线程的堆栈信息，通过分析下面所对应的堆栈信息，可以很快速的定位到对应的线程所执行的方法等层级关系，以此来定位对应的异常问题；</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329155550728.png" alt="image-20230329155550728" tabindex="0" loading="lazy"><figcaption>image-20230329155550728</figcaption></figure><h3 id="heap-dump-overview" tabindex="-1"><a class="header-anchor" href="#heap-dump-overview" aria-hidden="true">#</a> Heap Dump Overview</h3><p>查看全局的内存占用信息</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/image-20230329155637605.png" alt="image-20230329155637605" tabindex="0" loading="lazy"><figcaption>image-20230329155637605</figcaption></figure>`,51);function m(u,f){const e=n("ExternalLinkIcon");return s(),l("div",null,[c,a("p",null,[a("a",g,[i("MAT最新下载版本"),t(e)])]),a("p",null,[a("a",p,[i("MAT历史版本"),t(e)])]),h])}const v=r(d,[["render",m],["__file","MAT(Java堆分析工具)使用方式.html.vue"]]);export{v as default};
