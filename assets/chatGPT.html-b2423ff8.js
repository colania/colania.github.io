import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as r,e as p}from"./app-f45609f6.js";const t={},a=p('<h1 id="chatgpt-prompt-工程" tabindex="-1"><a class="header-anchor" href="#chatgpt-prompt-工程" aria-hidden="true">#</a> chatGPT prompt 工程</h1><p>什么是 Prompt 工程？ Prompt 工程是创建提示或指导像 ChatGPT 这样的语言模型输出的过程。它允许用户控制模型的输出并生成符合其特定需求的文本。 ChatGPT 是一种先进的语言模型，能够生成类似于人类的文本。它建立在 Transformer 架构上，可以处 理大量数据并生成高质量的文本。 然而，为了从 ChatGPT 中获得最佳结果，重要的是要了解如何正确地提示模型。 提示可以让用户控制 模型的输出并生成相关、准确和高质量的文本。 在使用 ChatGPT 时，了解它的能力和限制非常重要。 该模型能够生成类似于人类的文本，但如果没有适当的指导，它可能无法始终产生期望的输出。 这就是 Prompt 工程的作用，通过提供清晰而具体的指令，您可以引导模型的输出并确保其相关。 <strong>Prompt 公式是提示的特定格式，通常由三个主要元素组成：</strong></p><ul><li>任务：对提示要求模型生成的内容进行清晰而简洁的陈述。</li><li>指令：在生成文本时模型应遵循的指令。</li><li>角色：模型在生成文本时应扮演的角色。</li></ul><h2 id="指令提示技术" tabindex="-1"><a class="header-anchor" href="#指令提示技术" aria-hidden="true">#</a> 指令提示技术</h2><p>指令提示技术是通过为模型提供具体指令来引导 ChatGPT 的输出的一种方法。这种技术对于确保输出相 关和高质量非常有用。 要使用指令提示技术，您需要为模型提供清晰简洁的任务，以及具体的指令以供模型遵循。 例如，如果您正在生成客户服务响应，您将提供任务，例如“生成响应客户查询”的指令，例如“响应应该专业且提供准确的信息”。 提示公式：“<strong>按照以下指示生成[任务]：[指令]”</strong></p><p><strong>生成客户服务响应：</strong></p><ul><li>任务：生成响应客户查询</li><li>指令：响应应该专业且提供准确的信息</li><li>提示公式：“按照以下指示生成专业且准确的客户查询响应：响应应该专业且提供准确的信息。”</li></ul><p><strong>生成法律文件：</strong></p><ul><li>任务：生成法律文件</li><li>指令：文件应符合相关法律法规</li><li>提示公式：“按照以下指示生成符合相关法律法规的法律文件：文件应符合相关法律法规。”</li></ul><p>使用指令提示技术时，重要的是要记住指令应该清晰具体。这将有助于确保输出相关和高质量。可以将指令提示技术与下一章节中解释的“角色提示”和“种子词提示”相结合，以增强 ChatGPT 的输出。</p><h2 id="角色提示" tabindex="-1"><a class="header-anchor" href="#角色提示" aria-hidden="true">#</a> 角色提示</h2><p>角色提示技术是通过为 ChatGPT 指定一个特定的角色来引导其输出的一种方式。这种技术<strong>对于生成针对特定上下文或受众的文本非常有用</strong>。 要使用角色提示技术，您需要为模型提供一个清晰具体的角色。 例如，如果您正在生成客户服务回复，您可以提供一个角色，如“客户服务代表”。 提示公式：<strong>“作为[角色]生成[任务]”</strong></p><p><strong>生成客户服务回复：</strong></p><ul><li>任务：生成对客户查询的回复</li><li>角色：客户服务代表</li><li>提示公式：“作为客户服务代表，生成对客户查询的回复。”</li></ul><p><strong>生成法律文件：</strong></p><ul><li>任务：生成法律文件</li><li>角色：律师</li><li>提示公式：“作为律师，生成法律文件。”</li></ul><p><strong>将角色提示技术与指令提示和种子词提示结合使用可以增强 ChatGPT 的输出。 下面是一个示例，展示了如何将指令提示、角色提示和种子词提示技术结合使用：</strong></p><ul><li>任务：为新智能手机生成产品描述</li><li>指令：描述应该是有信息量的，具有说服力，并突出智能手机的独特功能</li><li>角色：市场代表 种子词：“创新的”</li><li>提示公式：“作为市场代表，生成一个有信息量的、有说服力的产品描述，突出新智能手机的创新功能。该智能手机具有以下功能[插入您的功能]”</li></ul><p>在这个示例中，指令提示用于确保产品描述具有信息量和说服力。角色提示用于确保描述是从市场代表的 角度书写的。而种子词提示则用于确保描述侧重于智能手机的创新功能。</p><h2 id="标准提示" tabindex="-1"><a class="header-anchor" href="#标准提示" aria-hidden="true">#</a> 标准提示</h2><p>标准提示是一种简单的方法，通过为模型提供一个特定的任务来引导 ChatGPT 的输出。例如，如果您想 生成一篇新闻文章的摘要，您可以提供一个任务，如“总结这篇新闻文章”。 <strong>提示公式：“生成一个[任务]”</strong></p><p>生成新闻文章的摘要：</p><ul><li>任务：总结这篇新闻文章</li><li>提示公式：“生成这篇新闻文章的摘要”</li></ul><p>生成一篇产品评论：</p><ul><li>任务：为一款新智能手机撰写评论</li><li>提示公式：“生成这款新智能手机的评论”</li></ul><p>将标准提示、角色提示和种子词提示技术结合使用的示例：</p><p>任务：为一台新笔记本电脑撰写产品评论</p><ul><li>说明：评论应客观、信息丰富，强调笔记本电脑的独特特点</li><li>角色：技术专家</li><li>种子词：“强大的”</li><li>提示公式：“作为一名技术专家，生成一个客观而且信息丰富的产品评论，强调新笔记本电脑的 强大特点。”</li></ul><p>在这个示例中，标准提示技术用于确保模型生成产品评论。角色提示用于确保评论是从技术专家的角度写 的。而种子词提示用于确保评论侧重于笔记本电脑的强大特点。</p><h2 id="零、一和少样本提示" tabindex="-1"><a class="header-anchor" href="#零、一和少样本提示" aria-hidden="true">#</a> 零、一和少样本提示</h2><p>零样本、一样本和少样本提示是用于从 ChatGPT 生成文本的技术，最少或没有任何示例。当特定任务的数据有限或任务是新的且未定义时，这些技术非常有用。 当任务没有可用的示例时，使用零样本提示技术。模型提供一个通用任务，根据对任务的理解生成文本。 当任务只有一个示例可用时，使用一样本提示技术。模型提供示例，并根据对示例的理解生成文本。 当任务只有有限数量的示例可用时，使用少样本提示技术。模型提供示例，并根据对示例的理解生成文本。 <strong>提示公式：“基于[数量]个示例生成文本”</strong></p><p>为没有可用示例的新产品编写产品描述：</p><ul><li>任务：为新的智能手表编写产品描述</li><li>提示公式：“基于零个示例为这款新智能手表生成产品描述”</li></ul><p>使用一个示例生成产品比较：</p><ul><li>任务：将新款智能手机与最新的 iPhone 进行比较</li><li>提示公式：“使用一个示例（最新的 iPhone）为这款新智能手机生成产品比较”</li></ul><p>使用少量示例生成产品评论：</p><ul><li>任务：为新的电子阅读器撰写评论</li><li>提示公式：“使用少量示例（3 个其他电子阅读器）为这款新电子阅读器生成评论”</li></ul><p>这些技术可用于根据模型对任务或提供的示例的理解生成文本。</p><h2 id="让我们思考一下-提示" tabindex="-1"><a class="header-anchor" href="#让我们思考一下-提示" aria-hidden="true">#</a> “ 让我们思考一下 ” 提示</h2><p>“让我们思考一下”提示是一种技巧，可鼓励 ChatGPT 生成反思和思考性的文本。这种技术适用于撰写论文、诗歌或创意写作等任务。 “让我们思考一下”提示的公式非常简单，即“让我们思考一下”后跟一个主题或问题。</p><p>生成一篇反思性论文：</p><ul><li>任务：就个人成长主题写一篇反思性论文</li><li>提示公式：“让我们思考一下：个人成长”</li></ul><p>生成一首诗：</p><ul><li>任务：写一首关于季节变化的诗</li><li>提示公式：“让我们思考一下：季节变化”</li></ul><p>这个提示要求对特定主题或想法展开对话或讨论。发言者邀请 ChatGPT 参与讨论相关主题。 模型提供了一个提示，作为对话或文本生成的起点。 然后，模型使用其训练数据和算法生成与提示相关的响应。这种技术允许 ChatGPT 根据提供的提示生成 上下文适当且连贯的文本。 要使用“让我们思考一下提示”技术与 ChatGPT，您可以遵循以下步骤：</p><ol><li>确定您要讨论的主题或想法。</li><li>制定一个明确表达主题或想法的提示，并开始对话或文本生成。</li><li>用“让我们思考”或“让我们讨论”开头的提示，表明您正在启动对话或讨论。</li><li>以下是使用此技术的一些提示示例：</li></ol><p>提示：“让我们思考气候变化对农业的影响”</p><p>提示：“让我们讨论人工智能的当前状态”</p><p>提示：“让我们谈谈远程工作的好处和缺点”</p><p>您还可以添加开放式问题、陈述或一段您希望模 型继续或扩展的文本。 提供提示后，模型将使用其训练数据和算法生成与提示相关的响应，并以连贯的方式继续对话。 这种独特的提示有助于 ChatGPT 以不同的视角和角度给出答案，从而产生更具动态性和信息性的段落。 使用提示的步骤简单易行，可以真正提高您的写作水平。尝试一下，看看效果如何吧。</p><h2 id="自洽提示" tabindex="-1"><a class="header-anchor" href="#自洽提示" aria-hidden="true">#</a> 自洽提示</h2><p>自洽提示是一种技术，用于确保 ChatGPT 的输出与提供的输入一致。这种技术对于事实核查、数据验证或文本生成中的一致性检查等任务非常有用。 自洽提示的提示公式是输入文本后跟着指令**“请确保以下文本是自洽的”**。 或者，可以提示模型生成与提供的输入一致的文本。</p><p><strong>任务：生成产品评论（文本生成）</strong></p><ul><li>指令：评论应与输入中提供的产品信息一致</li><li>提示公式：“生成与以下产品信息一致的产品评论[插入产品信息]”</li></ul><p><strong>任务：概括一篇新闻文章（文本摘要）</strong></p><ul><li>指令：摘要应与文章中提供的信息一致</li><li>提示公式：“用与提供的信息一致的方式概括以下新闻文章[插入新闻文章]”</li></ul><p><strong>任务：完成一个句子（文本完成）</strong></p><ul><li>指令：完成应与输入中提供的上下文一致</li><li>提示公式：“以与提供的上下文一致的方式完成以下句子[插入句子]”</li></ul><p><strong>任务：检查给定新闻文章的一致性（事实核查）</strong></p><ul><li>输入文本：“文章中陈述该城市的人口为 500 万，但后来又说该城市的人口为 700 万。”</li><li>提示公式：“请确保以下文本是自洽的：文章中陈述该城市的人口为 500 万，但后来又说该城市 的人口为 700 万。”</li></ul><p><strong>任务：检查给定数据集的一致性（数据验证）</strong></p><ul><li>输入文本：“数据显示 7 月份的平均温度为 30 度，但最低温度记录为 20 度。”</li><li>提示公式：“请确保以下文本是自洽的：数据显示 7 月份的平均温度为 30 度，但最低温度记录 为 20 度。”</li></ul><h2 id="种子词提示" tabindex="-1"><a class="header-anchor" href="#种子词提示" aria-hidden="true">#</a> 种子词提示</h2><p>种子词提示是一种通过提供特定的种子词或短语来控制 ChatGPT 输出的技术。种子词提示的提示公式是 种子词或短语，后跟指令“请根据以下种子词生成文本”。</p><p><strong>任务：编写一篇有关龙的故事（文本生成）</strong></p><ul><li>种子词：“龙”</li><li>提示公式：“请根据以下种子词生成文本：龙”</li></ul><p><strong>任务：将一句话从英语翻译成西班牙语（语言翻译）</strong></p><ul><li>种子词：“你好”</li><li>提示公式：“请根据以下种子词生成文本：你好”</li></ul><p><strong>种子词提示可以与角色提示和指令提示相结合</strong>，以创建更具体和有针对性的生成文本。通过提供种子词或 短语，模型可以生成与该种子词或短语相关的文本，并通过提供有关期望输出和角色的信息，模型可以以 特定于角色或指令的风格或语气生成文本。这样可以更好地控制生成的文本，并可用于各种应用程序。 以下是提示示例及其公式： 示例 1：文本生成</p><p><strong>任务：编写一首诗</strong></p><ul><li>指令：诗应与种子词“爱”相关，并以十四行诗的形式书写。</li><li>角色：诗人</li><li>提示公式：“作为诗人，根据以下种子词生成与“爱”相关的十四行诗：”</li></ul><p><strong>任务：完成一句话</strong></p><ul><li>指令：完成应与种子词“科学”相关，并以研究论文的形式书写。</li><li>角色：研究员</li><li>提示公式：“作为研究员，请在与种子词“科学”相关且以研究论文的形式书写的情况下完成以 下句子：[插入句子]”</li></ul><p><strong>任务：摘要一篇新闻文章（文本摘要）</strong></p><ul><li>指令：摘要应与种子词“政治”相关，并以中立和公正的语气书写。</li><li>角色：记者</li><li>提示公式：“作为记者，请以中立和公正的语气摘要以下新闻文章，与种子词“政治”相关： [插入新闻文章]”</li></ul><h2 id="知识生成提示" tabindex="-1"><a class="header-anchor" href="#知识生成提示" aria-hidden="true">#</a> 知识生成提示</h2><p>知识生成提示是一种从 ChatGPT 中引出新的、原创的信息的技术。 <strong>知识生成提示的公式是“请生成关于 X 的新的和原创的信息”</strong>，其中 X 是感兴趣的主题。 这是一种利用模型预先存在的知识来生成新的信息或回答问题的技术。 要将此提示与 ChatGPT 一起使用，需要将问题或主题作为输入提供给模型，以及指定所生成文本的任务 或目标的提示。 <strong>提示应包括有关所需输出的信息，例如要生成的文本类型以及任何特定的要求或限制。</strong></p><p><strong>任务：生成有关特定主题的新信息（生成内容）</strong></p><ul><li>说明：生成的信息应准确且与主题相关</li><li>提示公式：“生成有关[特定主题]的新的准确信息”</li></ul><p><strong>任务：回答问题（问答）</strong></p><ul><li>说明：答案应准确且与问题相关</li><li>提示公式：“回答以下问题：[插入问题]”</li></ul><p><strong>任务：将新信息与现有知识整合（知识整合）</strong></p><ul><li>说明：整合应准确且与主题相关</li><li>提示公式：“将以下信息与有关[特定主题]的现有知识整合：[插入新信息]”</li></ul><p><strong>任务：从给定的数据集中生成有关客户行为的见解（数据分析）</strong></p><ul><li>提示公式：“请从这个数据集中生成有关客户行为的新的和原创的信息”</li></ul><h2 id="知识整合提示" tabindex="-1"><a class="header-anchor" href="#知识整合提示" aria-hidden="true">#</a> 知识整合提示</h2><p>这种技术利用模型的现有知识来整合新信息或连接不同的信息片段。 这种技术对于将现有知识与新信息相结合，以生成更全面的特定主题的理解非常有用。</p><p>如何与 ChatGPT 一起使用：</p><ul><li>模型应该提供新信息和现有知识作为输入，以及指定生成文本的任务或目标的提示。</li><li>提示应包括有关所需输出的信息，例如要生成的文本类型以及任何特定的要求或限制。</li></ul><p><strong>任务：将新信息与现有知识整合（知识整合）</strong></p><ul><li>说明：整合应准确且与主题相关</li><li>提示公式：“将以下信息与关于[具体主题]的现有知识整合：[插入新信息]”</li></ul><p><strong>任务：连接不同的信息片段（连接信息片段）</strong></p><ul><li>说明：连接应相关且逻辑清晰</li><li>提示公式：“以相关且逻辑清晰的方式连接以下信息片段：[插入信息 1] [插入信息 2]”</li></ul><p><strong>任务：使用新信息更新现有知识（更新现有知识）</strong></p><ul><li>说明：更新的信息应准确且相关</li><li>提示公式：“使用以下信息更新[具体主题]的现有知识：[插入新信息]”</li></ul><h2 id="多项选择提示" tabindex="-1"><a class="header-anchor" href="#多项选择提示" aria-hidden="true">#</a> 多项选择提示</h2><p>这种技术向模型提供一个问题或任务以及一组预定义的选项作为潜在答案。</p><p>该技术对于生成仅限于特定选项集的文本非常有用，可用于问答、文本完成和其他任务。模型可以生成仅 限于预定义选项的文本。</p><p>要使用 ChatGPT 的多项选择提示，**需要向模型提供一个问题或任务作为输入，以及一组预定义的选项作 为潜在答案。**提示还应包括有关所需输出的信息，例如要生成的文本类型以及任何特定要求或限制。</p><p><strong>任务：回答一个多项选择题（问答）</strong></p><ul><li>说明：答案应该是预定义的选项之一</li><li>提示公式：“通过选择以下选项之一回答以下问题：[插入问题] [插入选项 1] [插入选项 2] [插入选项 3]”</li></ul><p><strong>任务：使用预定义选项之一完成句子（文本完成）</strong></p><ul><li>说明：完成应该是预定义的选项之一</li><li>提示公式：“通过选择以下选项之一完成以下句子：[插入句子] [插入选项 1] [插入选项 2] [插入选项 3]”</li></ul><p><strong>任务：将文本分类为积极、中立或消极（情感分析）</strong></p><ul><li>说明：分类应该是预定义的选项之一</li><li>提示公式：“通过选择以下选项之一，将以下文本分类为积极、中立或消极：[插入文本] [积极] [中立] [消极]”</li></ul><h2 id="可解释的软提示" tabindex="-1"><a class="header-anchor" href="#可解释的软提示" aria-hidden="true">#</a> 可解释的软提示</h2><p>可解释的软提示是一种技术，可以在提供一定的灵活性的同时控制模型生成的文本。它通过提供一组受控输入和关于所需输出的附加信息来实现。这种技术可以生成更具解释性和可控性的生成文本。</p><p><strong>任务：生成一个故事</strong></p><ul><li>指令：故事应基于一组给定的角色和特定的主题</li><li>提示公式：“基于以下角色生成故事：[插入角色]和主题：[插入主题]”</li></ul><p><strong>任务：完成一句话（文本完成）</strong></p><ul><li>指令：完成应以特定作者的风格为基础</li><li>提示公式：“以[特定作者]的风格完成以下句子：[插入句子]”</li></ul><p><strong>任务：以特定风格生成文本（语言建模）</strong></p><ul><li>指令：文本应以特定时期的风格为基础</li><li>提示公式：“以[特定时期]的风格生成文本：[插入上下文]”</li></ul><h2 id="控制生成提示" tabindex="-1"><a class="header-anchor" href="#控制生成提示" aria-hidden="true">#</a> 控制生成提示</h2><p>控制生成提示是一种技术，可让模型在生成文本时对输出进行高度控制。 这可以通过提供一组特定的输入来实现，例如模板、特定词汇或一组约束条件，这些输入可用于指导生成 过程。</p><p><strong>任务：生成一个故事</strong></p><ul><li>说明：该故事应基于特定的模板</li><li>提示公式：“根据以下模板生成故事：[插入模板]”</li></ul><p><strong>任务：完成一句话（文本补全）</strong></p><ul><li>说明：完成应使用特定的词汇</li><li>提示公式：“使用以下词汇完成以下句子：[插入词汇]：[插入句子]”</li></ul><p><strong>任务：以特定风格生成文本（语言建模）</strong></p><ul><li>说明：文本应遵循一组特定的语法规则</li><li>提示公式：“生成遵循以下语法规则的文本：[插入规则]：[插入上下文]”</li></ul><p>通过提供一组特定的输入来指导生成过程，控制生成提示使得生成的文本更具可控性和可预测性。</p><h2 id="问答提示" tabindex="-1"><a class="header-anchor" href="#问答提示" aria-hidden="true">#</a> 问答提示</h2><p>问答提示是一种技术，可以让模型生成回答特定问题或任务的文本。<strong>通过将问题或任务与可能与问题或任务相关的任何其他信息一起作为输入提供给模型来实现此目的。</strong></p><p><strong>任务：回答一个事实性问题(事实问题回答)</strong></p><ul><li>说明：答案应准确且相关</li><li>提示公式：“回答以下事实问题：[插入问题]”</li></ul><p><strong>任务：提供一个词的定义</strong></p><ul><li>提示公式：“定义以下词汇：[插入单词]”</li></ul><p><strong>任务：从特定来源检索信息</strong></p><ul><li>提示公式：“从以下来源检索有关[特定主题]的信息：[插入来源]”</li></ul><h2 id="概述提示" tabindex="-1"><a class="header-anchor" href="#概述提示" aria-hidden="true">#</a> 概述提示</h2><p>概述提示是一种技术，允许模型在保留其主要思想和信息的同时生成给定文本的较短版本。 这可以通过<strong>将较长的文本作为输入提供给模型并要求其生成该文本的摘要来实现</strong>。 这种技术对于文本概述和信息压缩等任务非常有用。 如何在 ChatGPT 中使用：</p><ul><li>应该向模型提供较长的文本作为输入，并要求其生成该文本的摘要。</li><li>提示还应包括有关所需输出的信息，例如摘要的所需长度和任何特定要求或限制。</li></ul><p><strong>任务：概述新闻文章</strong></p><ul><li>说明：摘要应是文章主要观点的简要概述</li><li>提示公式：“用一句简短的话概括以下新闻文章：[插入文章]”</li></ul><p>任务：概括会议记录</p><ul><li>说明：摘要应突出会议的主要决策和行动</li><li>提示公式：“通过列出主要决策和行动来总结以下会议记录：[插入记录]”</li></ul><p>任务：总结一本书</p><ul><li>说明：摘要应是书的主要观点的简要概述</li><li>提示公式：“用一段简短的段落总结以下书籍：[插入书名]”</li></ul><h2 id="对话提示" tabindex="-1"><a class="header-anchor" href="#对话提示" aria-hidden="true">#</a> 对话提示</h2><p>对话提示是一种技术，允许模型生成模拟两个或更多实体之间对话的文本。<strong>通过为模型提供一个上下文和一组角色或实体，以及它们的角色和背景，并要求模型在它们之间生成对话。</strong> 因此，<strong>应为模型提供上下文和一组角色或实体，以及它们的角色和背景。还应向模型提供有关所需输出的 信息，例如对话或交谈的类型以及任何特定的要求或限制。</strong></p><p><strong>任务：生成两个角色之间的对话</strong></p><ul><li>说明：对话应自然且与给定上下文相关</li><li>提示公式：“在以下情境中生成以下角色之间的对话[插入角色]”</li></ul><p><strong>任务：在故事中生成对话</strong></p><ul><li>说明：对话应与故事的角色和事件一致</li><li>提示公式：“在以下故事中生成以下角色之间的对话[插入故事]”</li></ul><p><strong>任务：为客服聊天机器人生成对话</strong></p><ul><li>说明：对话应专业且提供准确的信息</li><li>提示公式：“在客户询问[插入主题]时，为客服聊天机器人生成专业和准确的对话”</li></ul><p>因此，这种技术对于对话生成、故事写作和聊天机器人开发等任务非常有用。</p><h2 id="对抗性提示" tabindex="-1"><a class="header-anchor" href="#对抗性提示" aria-hidden="true">#</a> 对抗性提示</h2><p>对抗性提示是一种技术，它允许模型生成抵抗某些类型的攻击或偏见的文本。这种技术可用于训练更为稳健和抵抗某些类型攻击或偏见的模型。</p><p>要在 ChatGPT 中使用对抗性提示，需要为模型提供一个提示，该提示旨在使模型难以生成符合期望输出 的文本。<strong>提示还应包括有关所需输出的信息，例如要生成的文本类型和任何特定要求或约束</strong>。</p><p><strong>任务：生成被分类为特定标签的文本</strong></p><ul><li>说明：生成的文本应难以分类为特定标签</li><li>提示公式：“生成难以分类为[插入标签]的文本”</li></ul><p>任务：生成难以分类为特定情感的文本</p><ul><li>说明：生成的文本应难以分类为特定情感</li><li>提示公式：“生成难以分类为具有[插入情感]情感的文本”</li></ul><p>任务：生成难以翻译的文本</p><ul><li>说明：生成的文本应难以翻译为目标语言</li><li>提示公式：“生成难以翻译为[插入目标语言]的文本”</li></ul><h2 id="聚类提示" tabindex="-1"><a class="header-anchor" href="#聚类提示" aria-hidden="true">#</a> 聚类提示</h2><p>聚类提示是一种技术，它可以让模型根据某些特征或特点将相似的数据点分组在一起。</p><p>通过提供一组数据点并要求模型根据某些特征或特点将它们分组成簇，可以实现这一目标。</p><p>这种技术在数据分析、机器学习和自然语言处理等任务中非常有用。</p><p>如何在 ChatGPT 中使用：</p><ul><li>应该向模型提供一组数据点，并要求它根据某些特征或特点将它们分组成簇。提示还应包括有关所需输出 的信息，例如要生成的簇数和任何特定的要求或约束。</li></ul><p><strong>任务：将相似的客户评论分组在一起</strong></p><ul><li>提示公式：“将以下客户评论根据情感分组成簇：[插入评论]”</li></ul><p><strong>任务：将相似的新闻文章分组在一起</strong></p><ul><li>提示公式：“将以下新闻文章根据主题分组成簇：[插入文章]”</li></ul><p><strong>任务：将相似的科学论文分组在一起</strong></p><ul><li>提示公式：“将以下科学论文根据研究领域分组成簇：[插入论文]”</li></ul><h2 id="强化学习提示" tabindex="-1"><a class="header-anchor" href="#强化学习提示" aria-hidden="true">#</a> 强化学习提示</h2><p>强化学习提示是一种技术，可以使模型从过去的行动中学习，并随着时间的推移提高其性能。<strong>要在 ChatGPT 中使用强化学习提示，需要为模型提供一组输入和奖励，并允许其根据接收到的奖励调整其行为。提示还应包括有关期望输出的信息，例如要完成的任务以及任何特定要求或限制。这种技术对于决策制定、游戏玩法和自然语言生成等任务非常有用。</strong></p><p>任务：生成与特定风格一致的文本</p><ul><li>提示公式：“使用强化学习来生成与以下风格一致的文本[插入风格]”</li></ul><p>任务：将文本从一种语言翻译成另一种语言</p><ul><li>提示公式：“使用强化学习将以下文本[插入文本]从[插入语言]翻译成[插入语言]”</li></ul><p>任务：回答问题</p><ul><li>提示公式：“使用强化学习来回答以下问题[插入问题]”</li></ul><h2 id="课程学习提示" tabindex="-1"><a class="header-anchor" href="#课程学习提示" aria-hidden="true">#</a> 课程学习提示</h2><p>课程学习是一种技术，允许模型通过先训练简单任务，逐渐增加难度来学习复杂任务。 要在 ChatGPT 中使用课程学习提示，<strong>模型应该提供一系列任务，这些任务逐渐增加难度。 提示还应包括有关期望输出的信息，例如要完成的最终任务以及任何特定要求或约束条件。</strong></p><p><strong>任务：生成与特定风格一致的文本</strong></p><ul><li>说明：模型应该在移动到更复杂的风格之前先在简单的风格上进行训练。</li><li>提示公式：“使用课程学习来生成与以下风格[插入风格]一致的文本，按照以下顺序[插入顺序]。”</li></ul><p><strong>任务：将文本从一种语言翻译成另一种语言</strong></p><ul><li>说明：模型应该在移动到更复杂的语言之前先在简单的语言上进行训练。</li><li>提示公式：“使用课程学习将以下语言[插入语言]的文本翻译成以下顺序[插入顺序]。”</li></ul><p><strong>任务：回答问题</strong></p><ul><li>说明：模型应该在移动到更复杂的问题之前先在简单的问题上进行训练。</li><li>提示公式：“使用课程学习来回答以下问题[插入问题]，按照以下顺序[插入顺序]生成答案。”</li></ul><h2 id="情感分析提示" tabindex="-1"><a class="header-anchor" href="#情感分析提示" aria-hidden="true">#</a> 情感分析提示</h2><p>情感分析是一种技术，允许模型确定文本的情绪色彩或态度，例如它是积极的、消极的还是中立的。 要在 ChatGPT 中使用情感分析提示，<strong>模型应该提供一段文本并要求根据其情感分类。 提示还应包括关于所需输出的信息，例如要检测的情感类型（例如积极的、消极的、中立的）和任何特定要求或约束条件</strong>。</p><p>任务：确定客户评论的情感</p><ul><li>说明：模型应该将评论分类为积极的、消极的或中立的</li><li>提示公式：“对以下客户评论进行情感分析[插入评论]，并将它们分类为积极的、消极的或中立的。”</li></ul><p>任务：确定推文的情感</p><ul><li>说明：模型应该将推文分类为积极的、消极的或中立的</li><li>提示公式：“对以下推文进行情感分析[插入推文]，并将它们分类为积极的、消极的或中立的。”</li></ul><p>任务：确定产品评论的情感</p><ul><li>说明：模型应该将评论分类为积极的、消极的或中立的</li><li>提示公式：“对以下产品评论进行情感分析[插入评论]，并将它们分类为积极的、消极的或中立 的。”</li></ul><h2 id="命名实体识别提示" tabindex="-1"><a class="header-anchor" href="#命名实体识别提示" aria-hidden="true">#</a> 命名实体识别提示</h2><p>命名实体识别（NER）是一种技术，它可以使模型识别和分类文本中的命名实体，例如人名、组织机构、 地点和日期等。</p><p>要在 ChatGPT 中使用命名实体识别提示，<strong>需要向模型提供一段文本，并要求它识别和分类文本中的命名 实体。</strong></p><p>提示还应包括有关所需输出的信息，<strong>例如要识别的命名实体类型（例如人名、组织机构、地点、日期）以 及任何特定要求或约束条件。</strong></p><p><strong>任务：在新闻文章中识别和分类命名实体</strong></p><ul><li>说明：模型应识别和分类人名、组织机构、地点和日期</li><li>提示公式：“在以下新闻文章[插入文章]上执行命名实体识别，并识别和分类人名、组织机构、 地点和日期。”</li></ul><p><strong>任务：在法律文件中识别和分类命名实体</strong></p><ul><li>说明：模型应识别和分类人名、组织机构、地点和日期</li><li>提示公式：“在以下法律文件[插入文件]上执行命名实体识别，并识别和分类人名、组织机构、 地点和日期。”</li></ul><p><strong>任务：在研究论文中识别和分类命名实体</strong></p><ul><li>说明：模型应识别和分类人名、组织机构、地点和日期</li><li>提示公式：“在以下研究论文[插入论文]上执行命名实体识别，并识别和分类人名、组织机构、 地点和日期。”</li></ul><h2 id="文本分类提示" tabindex="-1"><a class="header-anchor" href="#文本分类提示" aria-hidden="true">#</a> 文本分类提示</h2><p>文本分类是一种技术，它可以让模型将文本分成不同的类别。这种技术对于自然语言处理、文本分析和情感分析等任务非常有用。</p><p>需要注意的是，文本分类和情感分析是不同的。情感分析特别关注于确定文本中表达的情感或情绪。这可能包括确定文本表达了积极、消极还是中性的情感。情感分析通常用于客户评论、社交媒体帖子和其他需 要表达情感的文本。</p><p>要在 ChatGPT 中使用文本分类提示，<strong>模型需要提供一段文本，并要求它根据预定义的类别或标签进行分类。提示还应包括有关所需输出的信息，例如类别或标签的数量以及任何特定的要求或约束。</strong></p><p>任务：将客户评论分类为不同的类别，例如电子产品、服装和家具</p><ul><li>说明：模型应根据评论的内容对其进行分类</li><li>提示公式：“对以下客户评论 [插入评论] 进行文本分类，并根据其内容将其分类为不同的类 别，例如电子产品、服装和家具。”</li></ul><p><strong>任务：将新闻文章分类为不同的类别，例如体育、政治和娱乐</strong></p><ul><li>说明：模型应根据文章的内容对其进行分类</li><li>提示公式：“对以下新闻文章 [插入文章] 进行文本分类，并根据其内容将其分类为不同的类 别，例如体育、政治和娱乐。”</li></ul><p><strong>任务：将电子邮件分类为不同的类别，例如垃圾邮件、重要邮件或紧急邮件</strong></p><ul><li>说明：模型应根据电子邮件的内容和发件人对其进行分类</li><li>提示公式：“对以下电子邮件 [插入电子邮件] 进行文本分类，并根据其内容和发件人将其分类 为不同的类别，例如垃圾邮件、重要邮件或紧急邮件。”</li></ul><h2 id="文本生成提示" tabindex="-1"><a class="header-anchor" href="#文本生成提示" aria-hidden="true">#</a> 文本生成提示</h2><p>文本生成提示与本书中提到的其他提示技术相关，例如：零、一、几次提示，受控生成提示，翻译提示， 语言建模提示，句子补全提示等。这些提示都与生成文本有关，但它们在生成文本的方式和放置在生成文本上的特定要求或限制方面有所不同。文本生成提示可用于微调预训练模型或训练新模型以执行特定任务。</p><p>任务：根据给定的提示生成故事</p><ul><li>说明：故事应至少包含 1000 个单词，并包括一组特定的角色和情节。</li><li>提示公式：“根据以下提示[插入提示]生成一个至少包含 1000 个单词，包括角色[插入角色]和情节[插入情节]的故事。”</li></ul><p>任务：将给定的文本翻译成另一种语言</p><ul><li>提示公式：“将以下文本[插入文本]翻译成[插入目标语言]，并确保其准确且符合习惯用语。”</li></ul><p>任务：完成给定的文本</p><ul><li>提示公式：“完成以下文本[插入文本]，并确保其连贯一致且符合输入文本。”</li></ul>',221),n=[a];function s(o,h){return i(),r("div",null,n)}const g=l(t,[["render",s],["__file","chatGPT.html.vue"]]);export{g as default};
