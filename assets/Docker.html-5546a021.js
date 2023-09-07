const e=JSON.parse('{"key":"v-8090df1e","path":"/code/services/Docker.html","title":"Docker","lang":"zh-CN","frontmatter":{"article":true,"title":"Docker","order":4,"description":"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。 Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 NAS 上搭建 Docker。","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/services/Docker.html"}],["meta",{"property":"og:site_name","content":"田野梦呓"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。 Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 NAS 上搭建 Docker。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-07T05:36:53.000Z"}],["meta",{"property":"article:author","content":"田野"}],["meta",{"property":"article:modified_time","content":"2023-09-07T05:36:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-07T05:36:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"田野\\",\\"url\\":\\"https://colania.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Docker 命令","slug":"docker-命令","link":"#docker-命令","children":[]},{"level":2,"title":"定制 Docker 镜像","slug":"定制-docker-镜像","link":"#定制-docker-镜像","children":[]},{"level":2,"title":"管理 Docker 数据库","slug":"管理-docker-数据库","link":"#管理-docker-数据库","children":[]},{"level":2,"title":"其他使用","slug":"其他使用","link":"#其他使用","children":[{"level":3,"title":"Windows Docker","slug":"windows-docker","link":"#windows-docker","children":[]},{"level":3,"title":"宝塔镜像","slug":"宝塔镜像","link":"#宝塔镜像","children":[]}]}],"git":{"createdTime":1694053460000,"updatedTime":1694065013000,"contributors":[{"name":"edy","email":"weiwei@wjinfo.cn","commits":2}]},"readingTime":{"minutes":4.94,"words":1481},"filePathRelative":"code/services/Docker.md","localizedDate":"2023年9月7日","excerpt":"<p>Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。</p>\\n<p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 <a href=\\"/code/services/NAS.html#nas-docker\\" target=\\"blank\\">NAS 上搭建 Docker</a>。</p>","autoDesc":true}');export{e as data};
