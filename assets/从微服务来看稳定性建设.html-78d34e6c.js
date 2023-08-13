import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as o,e as t}from"./app-c97a4cd2.js";const i={},r=t('<h1 id="从微服务看稳定性建设" tabindex="-1"><a class="header-anchor" href="#从微服务看稳定性建设" aria-hidden="true">#</a> 从微服务看稳定性建设</h1><p>本文主要依据微服务，从&quot;防范稳定性风险&quot;和&quot;降低故障影响&quot;两个方面简单介绍了稳定性建面临的常见问题。</p><h2 id="_1-防范稳定性风险" tabindex="-1"><a class="header-anchor" href="#_1-防范稳定性风险" aria-hidden="true">#</a> 1.防范稳定性风险</h2><p>微服务架构让微服务的功能更加内聚，迭代速度更快，但是呢，增加了服务依赖复杂性，进而增大了稳定性建设难度。尽管其依赖关系复杂，但可抽象为上游服务、自身服务、下游服务三者的关系，稳定性风险防范的主要思路是防范三者的风险。</p><figure><img src="https://bard-note.oss-cn-hangzhou.aliyuncs.com/img/上中下.png" alt="上中下" tabindex="0" loading="lazy"><figcaption>上中下</figcaption></figure><h3 id="_1-1-防范上游风险" tabindex="-1"><a class="header-anchor" href="#_1-1-防范上游风险" aria-hidden="true">#</a> 1.1 防范上游风险</h3><blockquote><p>限流，输入校验。</p></blockquote><p>防范上游风险常见的是防范**&quot;流量增加&quot;<strong>和</strong>&quot;输入错误&quot;**风险。预期的流量增加可以提前容量评估并做好相关应对方案；对于非预期的流量增加，依赖提前设置好的限流预案。</p><p>限流的目的是自保或隔离影响，核心流量限流后可评估影响后扩容或临时调整限流阀值。</p><p>&quot;输入错误&quot;常见的是范围参数没有限制，比如预期只查询1天的数据，但请求参数传了查询1个月，因为接口没有限制，导致数据库抗不住压力而 down 机。</p><h3 id="_1-2-防范下游风险" tabindex="-1"><a class="header-anchor" href="#_1-2-防范下游风险" aria-hidden="true">#</a> 1.2 防范下游风险</h3><blockquote><p>解除强依赖，降级、放火验证弱依赖，切流预案。</p></blockquote><p>业内定义，**异常发生时，不影响核心业务流程，不影响系统可用性的依赖称作弱依赖，反之为强依赖。**解除下游风险最直接的方法就是解除下游强依赖。</p><ol><li>在系统设计时要全面分析系统的强弱依赖关系，在系统上线后可以通过工具采集线上流量进一步分析依赖关系。</li><li>需要对历史业务进行改造，并在功能、体验和稳定性方面进行取舍。为了保障稳定性，实现最小化强依赖下游的系统，非核心功能在下游依赖故障时进行功能裁剪，确保核心功能一直可用。</li></ol><p>弱依赖需要建设降级预案。可以使用Sentinel等多种开源流量治理组件。为了保障预案的执行效率，更推荐的做法是业务代码容错+自动熔断功能。</p><p>降级方式的选择与业务降级影响相关性较大，一般降级之后影响较大的使用手动降级，而对于降级之后影响较小或后期能快速自动修复的功能可考虑自动降级。</p><p>需要经常去验证强弱依赖治理情况。如果接口、服务等比较简单，可以使用单测方式进行验证。如果服务多且复杂的话，需要通过<strong>故障演练</strong>定期排查。</p><p>对于无法解除的强依赖，我们可以考虑一些降低风险的方法，提高稳定性，保障不出大事。</p><ol><li>mysql 可以增加足够多的分片来降低单个分片挂掉带来的影响。</li><li>制定良好的应急预案进行兜底，同时应该提供良好的用户体验。</li><li>单机房故障优先考虑切流止损。</li></ol><h3 id="_1-3-防范自身风险" tabindex="-1"><a class="header-anchor" href="#_1-3-防范自身风险" aria-hidden="true">#</a> 1.3 防范自身风险</h3><blockquote><p>架构风险、容量风险，切流预案，线上变更规范，研发和测试质量保障。</p></blockquote><p>比较基本的是通过冗余布署、多活切流来规避单点故障；使用弹性云、自动扩容来减少容量风险。周期性的哨兵压测、全链路压测、模块级的压测进行容量评估。<br> 从经常引发线上事故的原因中，代码变更和配置变动占极大多数；因此提高研发和测试质量，严守线上变更规范是防范自身风险的重点。</p><p>提高研发质量，这里主要是从稳定性角度看，需要研发的同学有写自动化 case 的意识；虽然短期来看写 case 会增加研发的时间成本，但是 case 可以大大提高后期迭代的测试效率和代码质量；对于核心业务系统，不断迭代是必然的，因此从长远来看写 case 的成本应该是可接受的。</p><h2 id="_2-降低故障影响" tabindex="-1"><a class="header-anchor" href="#_2-降低故障影响" aria-hidden="true">#</a> 2. 降低故障影响</h2><p>是人就会犯错，因此故障是不可避免的。我们除了防范风险外，还需要一些措施来降低故障带来的影响。</p><h3 id="_2-1-自身接口降级" tabindex="-1"><a class="header-anchor" href="#_2-1-自身接口降级" aria-hidden="true">#</a> 2.1 自身接口降级</h3><blockquote><p>理清核心链路的上游依赖，接口能力降级。</p></blockquote><p>作为业务链路的一部份，需要明确我们的服务在上游核心链路的强弱依赖关系。若上游弱依赖我们的服务，我们需要保障被依赖的接口支持接口能力降级；若上游强依赖我们的服务，则需要考虑推动上游解除对我们服务的强依赖关系，若不能解除的，则需要考虑建设备用的通道或其它能降低上游影响的方案，比如面向用户的故障引导文案、公告等。</p><p>总之，我们不仅需要关注自身服务的稳定性，还需要关注上游对我们服务的依赖关系并建设预案，以此来降低自身服务故障对上游的影响。请注意，这里的接口能力降级与上文的依赖降级是不同的，此处的接口能力降级是自身服务能力降级，目的是减少对上游服务影响；而上文的依赖降级是熔断下游降级，目的是减少自身服务受下游故障影响，这是服务处于不同层级时的不同预案。</p><h3 id="_2-2-故障感知和定位" tabindex="-1"><a class="header-anchor" href="#_2-2-故障感知和定位" aria-hidden="true">#</a> 2.2 故障感知和定位</h3><blockquote><p>监控报警，故障根因定位，应急响应流程。</p></blockquote><p>核心的服务指标、业务指标的监控和报警尽量100%覆盖，覆盖率是一方面，报警的时效和准确性也是非常关建的。做好链路可观测、日志可追溯、服务器性能可视化，都是故障感知和根因定位的有效工具。</p><p>建设指标时，可以考虑 metric 指标标准化，其不但能降低理解成本，提高问题定位效率。</p><p>在提高核心指标的报警时效和准确性方面，可以考虑从某一个方向重点监控，减少维护的成本，推荐从业务结果指标进行监控（过程指标可用于协助定位问题）。其原因是，业务过程指标多且变更频繁，还可能跨多个系统，较为分散，而其结果往往是收敛的。</p>',34),h=[r];function p(c,n){return a(),o("div",null,h)}const s=e(i,[["render",p],["__file","从微服务来看稳定性建设.html.vue"]]);export{s as default};
