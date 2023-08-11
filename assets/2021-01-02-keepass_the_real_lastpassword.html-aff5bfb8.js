import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as h,c as i,a as e,b as t,d as s,e as o}from"./app-0f24d921.js";const l={},d=e("p",null,"用了 5 年的 Lastpass，但随着网站密码的增加，遇到的 bug 也越来越多。有次误操作，合并了 Lastpass 密码库，丢失了一大批密码，对云端密码库的信任度直接降为零。",-1),c=e("p",null,[t("之后，尝试了 1Password、Bitwarden、Enpass、Remembear 多种密码管理软件，最终选择"),e("strong",null,"开源免费且自动填充超强"),t("的 KeePass。")],-1),p=e("p",null,[t("KeePass 的密码保存在本地的 "),e("code",null,".kdbx"),t(" 数据库中，让你真正掌握自己的账号密码。搭配坚果云或同步盘的 KeePass，能实现密码多端同步，让手机与电脑使用同一密码库。")],-1),_={href:"https://keepass.info/download.html",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"Keepass2Android",-1),u=e("code",null,"Strongbox",-1),g=e("code",null,"KeePassium",-1),b=o('<p>接着我会逐步介绍 KeePass 的配置和插件，也可以直接拖到文章底部，下载懒人包，开箱即用。</p><h2 id="keepass-设置" tabindex="-1"><a class="header-anchor" href="#keepass-设置" aria-hidden="true">#</a> KeePass 设置</h2><h3 id="选项设置" tabindex="-1"><a class="header-anchor" href="#选项设置" aria-hidden="true">#</a> 选项设置</h3><p>点击菜单栏上的「工具」&gt;「选项」&gt;「外观」，在「主窗口」中勾选「最小化到系统托盘（而不是任务栏）」和「关闭按钮 [X] 最小化主窗口，而不是退出程序」。</p><p>然后从「选项」中选择「集成」，将「全局自动输入」设为 Ctrl+Alt+A，「全局自动输入（仅密码）」设为 Ctrl+Alt+Shift+A。</p><h3 id="自动输入规则" tabindex="-1"><a class="header-anchor" href="#自动输入规则" aria-hidden="true">#</a> 自动输入规则</h3><p>选中左侧的数据库，右键单击「编辑群组」&gt;「自动输入」，替换默认规则为 <code>^{SPACE}{DELAY 100}{CLEARFIELD}{USERNAME}{TAB}{PASSWORD}{DELAY 100}{ENTER}^{SPACE}</code>。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p><code>^{SPACE}</code> 即 <code>Ctrl+Space</code>，该热键能关闭或启用当前输入法。关闭输入法后，默认为美式键盘输入。</p><p><code>Ctrl+Space</code> 需在输入法编辑状态下才能生效，而密码区都禁用输入法编辑。因此，输入密码完成后，可能输入法并未重置，要按 <code>Ctrl+Space</code> 才能正常启用输入法。</p><h3 id="匹配多个网址" tabindex="-1"><a class="header-anchor" href="#匹配多个网址" aria-hidden="true">#</a> 匹配多个网址</h3><p>KeePass 不能在一个条目填写多个匹配网址，但不同条目可以共享用户名、密码等字段数据，并且通过更改被引用的数据条目，所有其他条目也会同步使用更新值。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>比如 <code>163.com</code> 和 <code>youdao.com</code> 都使用网易账户，账号密码相同，根据网址建立了 2 个条目。首先，在 163 条目输入实际的账户密码，将其作为网易账户的主条目。然后，双击进入 youdao 条目，点击 Edit Entry 界面左下角的「工具」&gt;「插入字段引用」&gt;「在用户名/密码字段」，选中需要引用的条目。设置好后，字段旁边会出现分享符，表明这是引用字段，该字段数值会跟随主条目更新。引用字段的实际内容类似 <code>{REF:P@I:8CC19B988F0F9D499459B741753BEE5F}</code>，更改账户密码只能在主条目上进行。</p><figure><img src="https://img.newzone.top/2022-10-18-11-41-15.png" alt="" tabindex="0" loading="lazy"><figcaption>引用字段设置步骤</figcaption></figure><h2 id="必备插件" tabindex="-1"><a class="header-anchor" href="#必备插件" aria-hidden="true">#</a> 必备插件</h2><p>KeePass 需要配置插件，才能实现密码自动输入。下载插件并放入指定文件夹 <code>\\Plugins</code>，重启 KeePass 即可使插件生效。</p><h3 id="keepasshttp" tabindex="-1"><a class="header-anchor" href="#keepasshttp" aria-hidden="true">#</a> KeePassHttp</h3>',16),k={href:"https://github.com/pfn/keepasshttp",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"如果网页有不能被识别用户名或密码框，可使用 KeePassHttp-Connector 的「Choose own credential fields for this page」功能。",-1),K=e("h3",{id:"kpenhancedentryview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kpenhancedentryview","aria-hidden":"true"},"#"),t(" KPEnhancedEntryView")],-1),m={href:"https://keepass.info/plugins.html#kpenhentryview",target:"_blank",rel:"noopener noreferrer"},y=e("ul",null,[e("li",null,"在主界面中点击「显示」>「窗口布局」>「平铺」；"),e("li",null,"在主界面中点击「显示」>「列设置」，只选择：「标题」>「确定」。大家也可以按自己要求选择。")],-1),w=e("h3",{id:"autotypesearch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#autotypesearch","aria-hidden":"true"},"#"),t(" AutoTypeSearch")],-1),x={href:"https://keepass.info/plugins.html#atsearch",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"Ctrl+Shift+A",-1),E=e("figure",null,[e("img",{src:"https://img.newzone.top/20191013083950.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"AutoTypeSearch 通用设置")],-1),T=e("h3",{id:"kp-entry-templates",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kp-entry-templates","aria-hidden":"true"},"#"),t(" KP Entry Templates")],-1),A={href:"https://github.com/mitchcapper/KPEntryTemplates",target:"_blank",rel:"noopener noreferrer"},S=e("ol",null,[e("li",null,"点击 KeePass 主界面的「文件」>「数据库设置」>「高级」，在「模板记录组」中选择一个群组，点击「确定」；"),e("li",null,"返回主界面，点击步骤 1 中选择的群组，按 Ctrl+I（或点击上方工具栏的钥匙图标）添加记录；"),e("li",null,[t("点击「自动输入」，勾选「双通道自动输入混淆」（"),e("strong",null,"以后用模板添加记录时就不需要再勾选，一劳永逸"),t("）；")]),e("li",null,"点击最左边的「Template」>「Init As Template」，配置好所需模板，点击「确定」。")],-1),v=e("h3",{id:"kpsourceforgeupdatechecker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kpsourceforgeupdatechecker","aria-hidden":"true"},"#"),t(" KPSourceForgeUpdateChecker")],-1),B={href:"https://sourceforge.net/projects/kpsfupdatechecker/reviews",target:"_blank",rel:"noopener noreferrer"},F=e("h2",{id:"可选插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#可选插件","aria-hidden":"true"},"#"),t(" 可选插件")],-1),N=e("h3",{id:"keetraytotp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#keetraytotp","aria-hidden":"true"},"#"),t(" KeeTrayTOTP")],-1),H={href:"https://github.com/victor-rds/KeeTrayTOTP/releases/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.cnblogs.com/tielemao/p/9613839.html",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"webautotype",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webautotype","aria-hidden":"true"},"#"),t(" WebAutoType")],-1),O={href:"https://keepass.info/plugins.html#webautotype",target:"_blank",rel:"noopener noreferrer"},R=e("h3",{id:"yet-another-favicon-downloader",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yet-another-favicon-downloader","aria-hidden":"true"},"#"),t(" Yet Another Favicon Downloader")],-1),I={href:"https://keepass.info/plugins.html#yafd",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"hibp-offline-check",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hibp-offline-check","aria-hidden":"true"},"#"),t(" HIBP Offline Check")],-1),M={href:"https://github.com/mihaifm/HIBPOfflineCheck",target:"_blank",rel:"noopener noreferrer"},V={href:"https://haveibeenpwned.com/",target:"_blank",rel:"noopener noreferrer"},U=e("h3",{id:"keepassrpc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#keepassrpc","aria-hidden":"true"},"#"),t(" KeePassRPC")],-1),W={href:"https://github.com/kee-org/keepassrpc/releases/",target:"_blank",rel:"noopener noreferrer"},j=e("strong",null,"自动填充密码并登录",-1),X=e("p",null,"其他插件不能自动登录，只有 Kee 能做到该功能。使用 Kee 的自动登录功能后，少数页面会出现循环登录，需暂停 Kee 扩展来停止循环错误。",-1),Y=e("figure",null,[e("img",{src:"https://img.newzone.top/2022-05-05-14-29-32.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Kee 设置")],-1),q=e("h3",{id:"keepassnatmsg",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#keepassnatmsg","aria-hidden":"true"},"#"),t(" KeePassNatMsg")],-1),G=e("p",null,"浏览器插件 KeePassHttp-Connector 已不再更新，有段时间甚至不兼容新版 KeePass。",-1),J={href:"https://github.com/smorks/keepassnatmsg",target:"_blank",rel:"noopener noreferrer"},Z=o('<blockquote><p>如果报错「proxy download error」，备份并删除文件夹 C:\\Users%Username%\\AppData\\Local\\KeePassNatMsg，然后重新加载 Native Messaging Host。</p></blockquote><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="多账户排序" tabindex="-1"><a class="header-anchor" href="#多账户排序" aria-hidden="true">#</a> 多账户排序</h3><p>同一网址有多个账户密码时，无将其中一个账户密码默认置顶。通过插件 KeePassHttp 和 KeePassNatMsg，能按 username 或 title 对账户进行排序。</p><h3 id="为什么不选-keepassxc" tabindex="-1"><a class="header-anchor" href="#为什么不选-keepassxc" aria-hidden="true">#</a> 为什么不选 KeepassXC</h3><p>KeepassXC 基于 KeePass 开发，界面更美观，应用设置更简单，并开发了专属的浏览器插件。</p><p>入门 KeepassXC 也比 KeePass 来得轻松，但 KeePass 操控和定制性更强。密码库的使用是以年为单位，比起节约一两天的时间，个人推荐使用 KeePass 原版定制你自己的密码库。</p><h2 id="keepass-懒人包" tabindex="-1"><a class="header-anchor" href="#keepass-懒人包" aria-hidden="true">#</a> KeePass 懒人包</h2>',8),Q={href:"https://wwz.lanzouy.com/iJ6yA0bve7wb",target:"_blank",rel:"noopener noreferrer"},$={href:"https://pan.baidu.com/s/1dm0djnDGq8SOsTPy3jByZg?pwd=nrwj",target:"_blank",rel:"noopener noreferrer"},ee=o('<p>KeePass 懒人包为绿色版，集成了常用插件，建立数据库即可使用 KeePass。</p><p><strong>建立数据库：</strong></p><ol><li><p>解压懒人包，打开程序 <code>KeePass.exe</code>。</p></li><li><p>屏幕右下角托盘处，打开 KeePass。</p></li><li><p>菜单栏上点击「文件」&gt;「新建」，建立属于你的密码数据库。</p><figure><img src="https://img.newzone.top/KeePass_new_kdbx.gif?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>KeePass 懒人包设置</figcaption></figure></li></ol><p>懒人包集成插件：AutoTypeSearch，Entry Templates，KeePassHttp，KeePassNatMsg，KeePassRpc，KeeTrayTOTP，KPEnhancedEntryView，SourceForgeUpdateChecker，WebAutoType。</p><hr class="footnotes-sep">',5),te={class:"footnotes"},ae={class:"footnotes-list"},se={id:"footnote1",class:"footnote-item"},oe={href:"https://blog.csdn.net/SingWarm/article/details/90669580",target:"_blank",rel:"noopener noreferrer"},re=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),ne={id:"footnote2",class:"footnote-item"},he={href:"https://keepass.info/help/base/fieldrefs.html",target:"_blank",rel:"noopener noreferrer"},ie=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function le(de,ce){const a=n("ExternalLinkIcon");return h(),i("div",null,[d,c,p,e("p",null,[t("KeePass 官网下载（Windows）："),e("a",_,[t("https://keepass.info/download.html"),s(a)]),t("。安卓推荐 "),f,t("，iOS/Mac 推荐 "),u,t(" 或 "),g,t("。")]),b,e("p",null,[e("a",k,[t("KeePassHttp"),s(a)]),t(" 是 Keepass 的连接核心，搭配浏览器插件 KeePassHttp-Connector，可以实现浏览器自动填充密码效果。")]),P,K,e("p",null,[e("a",m,[t("KPEnhancedEntryView"),s(a)]),t(" 增强视觉效果，为达到最佳显示效果，按以下配置：")]),y,w,e("p",null,[e("a",x,[t("AutoTypeSearch"),s(a)]),t(" 提供全局框，输入热键 "),C,t(" 后，搜索关键词输入密码。")]),E,T,e("p",null,[e("a",A,[t("KP Entry Templates"),s(a)]),t(" 可以设置保存模板，配置方法如下：")]),S,v,e("p",null,[e("a",B,[t("KPSourceForgeUpdateChecker"),s(a)]),t(" 可以帮助检查 KeePass 及其插件是否有更新，功能从菜单栏上点击「帮助」>「检查更新」进入，会使用 SourceForge 上的插件更新信息。")]),F,N,e("p",null,[t("如果你有更高安全要求，"),e("a",H,[t("KeeTrayTOTP"),s(a)]),t(" 能增加二次动态验证，使用参考"),e("a",z,[t("使用 KeePass 管理两步验证"),s(a)]),t("。")]),D,e("p",null,[e("a",O,[t("WebAutoType"),s(a)]),t(" 是很多人的推荐插件，启动密码热键后会自动匹配当前网址、标题。这对于已经有大量密码的人来说，并不实用，可不安装。")]),R,e("p",null,[e("a",I,[t("Yet Another Favicon Downloader"),s(a)]),t(" 插件能自动匹配下载网站图标，但会大幅增加数据库的大小。不在意界面美观度的话，无需安装 Yet Another Favicon Downloader。")]),L,e("p",null,[e("a",M,[t("HIBP Offline Check"),s(a)]),t(" 可以使用 "),e("a",V,[t("have i been pwned?"),s(a)]),t(" 在线检查密码库，也能使用本地数据库离线检查。")]),U,e("p",null,[e("a",W,[t("KeePassRPC"),s(a)]),t(" 搭配浏览器插件 Kee，能实现"),j,t("。")]),X,Y,q,G,e("p",null,[t("如果遇到不兼容，可使用 "),e("a",J,[t("KeePassNatMsg"),s(a)]),t(" 和 KeePassXC-Browser 连接浏览器，本方案不支持搜狗浏览器。")]),Z,e("p",null,[t("2022.09.17 更新懒人包："),e("a",Q,[t("蓝奏云"),s(a)]),t("，"),e("a",$,[t("百度云盘"),s(a)]),t(" 提取码：nrwj。")]),ee,e("section",te,[e("ol",ae,[e("li",se,[e("p",null,[e("a",oe,[t("Keepass 教程之二——完美的通用自动输入规则"),s(a)]),t(),re])]),e("li",ne,[e("p",null,[e("a",he,[t("Field References-KeePass"),s(a)]),t(),ie])])])])])}const fe=r(l,[["render",le],["__file","2021-01-02-keepass_the_real_lastpassword.html.vue"]]);export{fe as default};
