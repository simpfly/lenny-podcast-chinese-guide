# Logan Kilpatrick - 双语对照

这是一份关于《Lenny's Podcast》采访 OpenAI 开发者关系负责人 Logan Kilpatrick 的完整双语对照文档。

---

### [00:00:00] Logan Kilpatrick

**English:**
Finding people who are high agency and work with urgency, if I was hiring five people today, those are some of the top two characteristics that I would look for in people because you can take on the world if you have people who have high agency and not needing to get 50 people's different consensus. They hear something from our customers about a challenge that they're having, and they're already pushing on what the solution for them is and not waiting for all the other things to happen that... People just go and do it and solve the problem, and I love that. It's so fun to be able to be a part of those situations.

**中文翻译:**
寻找那些具有“高自主性”（High Agency）且工作有“紧迫感”（Urgency）的人，如果我今天要雇佣五个人，这两点是我最看重的特质。因为如果你拥有一群极具主观能动性、不需要征求 50 个人意见就能行动的人，你就能征服世界。他们听到客户反馈的挑战，就会立刻着手推动解决方案，而不是等待其他流程到位……大家直接上手解决问题，我非常喜欢这种氛围。能参与到这样的环境中真的很有趣。

---

### [00:00:36] Lenny

**English:**
Today my guest is Logan Kilpatrick. Logan is head of developer relations at OpenAI, where he supports developers building on open AI's, APIs and ChatGPT. Before OpenAI, Logan was a machine learning engineer at Apple and advised NASA on their open source policy. If you can believe it, ChatGPT launched just over a year ago and transformed the way that we think about AI and what it means for our products and our lives. Logan has been at the front lines of this change, and every day is helping developers and companies figure out how to leverage these new AI superpowers.

**中文翻译:**
今天的嘉宾是 Logan Kilpatrick。Logan 是 OpenAI 的开发者关系负责人，负责支持在 OpenAI API 和 ChatGPT 上进行开发的开发者们。在加入 OpenAI 之前，Logan 曾是苹果公司的机器学习工程师，并曾就开源政策为美国国家航空航天局（NASA）提供咨询。难以置信的是，ChatGPT 发布仅一年多，就彻底改变了我们对 AI 的看法，以及它对我们的产品和生活的意义。Logan 一直处于这场变革的最前线，每天都在帮助开发者和公司探索如何利用这些全新的 AI 超能力。

---

### [00:01:10] Lenny

**English:**
In our conversation, we dig into examples of how people are using ChatGPT and the new GPTs and other open AI APIs in their work and their life. Logan shares some really interesting advice on how to get better at prompt engineering. We also get into how OpenAI operates internally, how they ship so quickly, and the two key attributes they look for in the people that they hire, plus, where Logan sees the biggest opportunities for new products and new startups building on their APIs.

**中文翻译:**
在我们的对话中，我们深入探讨了人们在工作和生活中使用 ChatGPT、新款 GPTs 以及其他 OpenAI API 的案例。Logan 分享了一些关于如何提升“提示词工程”（Prompt Engineering）水平的有趣建议。我们还聊到了 OpenAI 的内部运作机制、他们如何保持如此快的发布节奏、招聘时看重的两项关键特质，以及 Logan 认为基于他们的 API 构建新产品和初创公司的最大机会在哪里。

---

### [00:01:38] Lenny

**English:**
We also get a little bit into the very dramatic weekend that OpenAI had with the board and Sam Altman and all of that, and so much more. A huge thank you to Dan Shipper and Dennis Ing for some great questions, suggestions. With that, I bring you Logan Kilpatrick after a short word from our sponsors.

**中文翻译:**
我们还聊到了 OpenAI 那个充满戏剧性的周末——关于董事会、Sam Altman 以及后续的一切。非常感谢 Dan Shipper 和 Dennis Ing 提供的精彩问题和建议。在听完赞助商的简短介绍后，让我们正式开始与 Logan Kilpatrick 的对话。

---

### [00:01:56] Lenny (Sponsor: Hex)

**English:**
This episode is brought to you by Hex. If you're a data person, you probably have to jump between different tools to run queries, build visualizations, write Python, and send around a lot of screenshots and CSV files. Hex brings everything together. Its powerful Notebook UI lets you analyze data in SQL, Python or no code in any combination and work together with live multiplayer and version control. And now Hex's AI tools can generate queries and code, create visualizations, and even kickstart a whole analysis for you, all from natural language prompts. It's like having an analytics copilot built right into where you're already doing your work.

**中文翻译:**
本期节目由 Hex 赞助。如果你是数据从业者，你可能需要在不同的工具之间切换来运行查询、构建可视化、编写 Python，并发送大量的截图和 CSV 文件。Hex 将这一切整合在了一起。它强大的 Notebook 界面允许你以 SQL、Python 或无代码的任何组合方式分析数据，并支持实时多人协作和版本控制。现在，Hex 的 AI 工具可以根据自然语言提示生成查询和代码、创建可视化，甚至为你启动整个分析过程。这就像在你的工作流程中内置了一个分析副驾驶（Copilot）。

---

### [00:02:34] Lenny (Sponsor: Hex continued)

**English:**
Then, when you're ready to share, you can use Hex's drag and drop app builder to configure beautiful reports or dashboards that anyone can use. Join the hundreds of data teams like Notion, All Trails, Loom, Mixpanel, and Algolia using Hex every day to make their work more impactful. Sign up today at hex.tech/lenny to get a 60-day free trial of the Hex team plan. That's hex.tech/lenny.

**中文翻译:**
当你准备好分享时，可以使用 Hex 的拖拽式应用构建器来配置精美的报告或仪表盘。加入 Notion、All Trails、Loom、Mixpanel 和 Algolia 等数百个数据团队的行列，每天使用 Hex 让工作更具影响力。立即访问 hex.tech/lenny 注册，即可获得 Hex 团队版 60 天免费试用。网址是 hex.tech/lenny。

---

### [00:02:59] Lenny (Sponsor: Whimsical)

**English:**
This episode is brought to you by Whimsical, the iterative product workspace. Whimsical helps product managers build clarity and shared understanding faster with tools designed for solving product challenges. With Whimsical, you can easily explore new concepts using drag and drop wire frame and diagram components, create rich product briefs that show and sell your thinking, and keep your team aligned with one source of truth for all of your build requirements. Whimsical also has a library of easy-to-use templates from product leaders like myself, including a project proposal one pager and a go to market worksheet. Give them a try and see how fast and easy it is to build clarity with whimsical. Sign up at whimsical.com/lenny for 20% off a Whimsical Pro plan. That's whimsical.com/lenny.

**中文翻译:**
本期节目由迭代式产品协作空间 Whimsical 赞助。Whimsical 通过专为解决产品挑战而设计的工具，帮助产品经理更快地建立清晰的思路和共识。使用 Whimsical，你可以通过拖拽线框图和流程图组件轻松探索新概念，创建丰富的、能展示并推销你想法的产品简报，并通过统一的信息源确保团队在所有开发需求上保持一致。Whimsical 还有一个由像我这样的产品领导者提供的易用模板库，包括项目提案单页和进入市场（GTM）工作表。试用一下，看看用 Whimsical 建立清晰思路是多么快速和简单。在 whimsical.com/lenny 注册，可享受 Whimsical 专业版八折优惠。

---

### [00:03:52] Lenny

**English:**
Logan, thank you so much for being here and welcome to the podcast.

**中文翻译:**
Logan，非常感谢你能来，欢迎来到本播客。

---

### [00:03:55] Logan Kilpatrick

**English:**
Thanks for having me, Lenny. I'm super excited.

**中文翻译:**
谢谢邀请，Lenny。我非常兴奋。

---

### [00:03:57] Lenny

**English:**
I want to start with the elephant in the room, which I think the elephant is actually leaving the room because I think this is months ago at this point, but I'm still just really curious. What was it like on the inside of OpenAI during the very dramatic weekend with the board and Sam and all those things? What was it like? And is there a story maybe you could share that maybe people haven't heard about what it was like on the inside, what was going on?

**中文翻译:**
我想从那个“房间里的大象”（显而易见却被回避的问题）开始聊起，虽然我觉得这头大象其实已经快离开房间了，毕竟那是几个月前的事了，但我还是很想知道：在那个关于董事会、Sam 以及所有那些戏剧性事件的周末，OpenAI 内部是什么样子的？当时发生了什么？有没有什么大家还没听过的内部故事可以分享？

---

### [00:04:20] Logan Kilpatrick

**English:**
Yeah, it was definitely a very stressful Thanksgiving week. I think in broad context, OpenAI had been pushing for a really long time, since ChatGPT came out, and that was supposed to be one of the first weeks that the whole company had taken time away to actually reset and have a break. So very selfishly, I was super excited to spend time with my family, all that stuff. And then, yeah, Friday afternoon we got the message that all of the changes were happening, and I think it was super shocking because I think, and this is a perspective a lot of folks share, everybody had and continues to have such deep trust in Sam and Greg and our leadership team that it was just very surprising. And we're also a very, as far as company cultures go, very transparent and very open. So when there's problems or there's things going on, we tend to hear about them. And again, it was the first time that a lot of us had heard some of the things that were happening between the board and the leadership team, so very, very surprising.

**中文翻译:**
是的，那绝对是一个压力巨大的感恩节周。从大背景来看，自 ChatGPT 发布以来，OpenAI 已经全速冲刺了很长时间，那周本应是全公司第一次集体休假、调整状态和休息的时间。所以从私心来说，我当时非常期待和家人共度时光。结果，周五下午我们收到了所有变动发生的消息。这非常令人震惊，因为正如许多人所共有的看法，大家对 Sam、Greg 和我们的领导团队有着极深的信任，所以这件事太意外了。而且在公司文化方面，我们非常透明和开放。通常有任何问题或动向，我们都会听说。但那是我们很多人第一次听说董事会和领导层之间发生的那些事，所以非常、非常意外。

---

### [00:05:20] Logan Kilpatrick

**English:**
I think my being someone who's not based in San Francisco, I was, again, very selfishly kind of happy that it happened over the Thanksgiving break because a lot of folks actually had gone home to different places. So it felt like I had a little bit of comfort knowing I wasn't the only one not in San Francisco, because everybody was meeting up in person to do a bunch of stuff and be together during that time. So it was nice to know that there was a few other folks who were sort of out of the loop with me.
(00:05:51):
I think the thing that surprised me the most was just how quickly everybody got back to business. I flew to San Francisco the next week after Thanksgiving, which I wasn't planning to do, to deal with the team in person and seeing, literally Monday morning, I was walking into the office being, like expecting, I don't know, something weird to be going on or happening. And really it was like people laser focused and back to work, and I think that speaks to the caliber of our team and everybody who's just so excited about building towards the mission that we're building towards. So I think that was, yeah, that was the most surprising thing of the whole incident. I think a lot of companies would've had the potential to truly be derailed for some non-trivial amount of time by this, and everybody was just right back to it, which I love.

**中文翻译:**
作为一个不在旧金山办公的人，我（再次出于私心）有点庆幸这件事发生在感恩节假期，因为很多人其实都回老家了。这让我感到一点安慰，知道自己不是唯一一个不在旧金山的人，因为当时大家都在线下见面处理事情。所以知道还有几个人和我一样处于“状况外”，感觉还不错。
最让我惊讶的是大家恢复工作的速度。感恩节后的那一周我飞去了旧金山（原本没计划去），为了和团队面对面交流。周一早上我走进办公室，本来以为会看到什么奇怪的景象，结果大家都在全神贯注地工作。我认为这体现了我们团队的素质，以及每个人对实现公司使命的热情。这是整个事件中最令我惊讶的一点。换做很多其他公司，可能会因此停摆相当长一段时间，但我们每个人都立刻回到了岗位，我非常喜欢这一点。

---

### [00:06:40] Lenny

**English:**
I feel like it also maybe brought the team closer together. It feels like it was this kind of traumatic experience that may bring folks together because it was something they all shared. Is there anything along those lines that's like, "Wow, things are a little different now?"

**中文翻译:**
我觉得这可能也让团队更紧密了。这种共同经历的“创伤性”体验往往能把大家凝聚在一起。有没有什么细节让你觉得“哇，现在的情况确实不一样了”？

---

### [00:06:52] Logan Kilpatrick

**English:**
One of my takeaways was I'm actually very grateful that this happened when it happened. I think today the stakes are... They're still relatively high. People have built their businesses on top of OpenAI. We have tons of customers who love ChatGPT, so if something bad happens to us, we definitely impact our customers. But on the world scale, somebody else will build a model if OpenAI disappeared and continue towards this progress of general intelligence. I think fast-forward five or 10 years, if something like this would've happened and we hadn't gone through the hopeful upcoming work transformation and all those changes that are going to happen, I think it would've been a little bit, or potentially much worse, of an outcome. So I'm glad that things happened when the stakes are a little bit lower.

**中文翻译:**
我的感悟之一是，其实我很庆幸这件事发生在那个时间点。虽然现在的赌注已经很高了——很多人在 OpenAI 之上建立了业务，我们有大量热爱 ChatGPT 的客户，如果我们出事，肯定会影响他们。但在全球范围内，如果 OpenAI 消失了，别人也会构建模型并继续朝着通用智能（AGI）的目标迈进。我想，如果快进到 5 年或 10 年后才发生这种事，而我们还没经历过即将到来的工作转型和变革，后果可能会糟糕得多。所以我很高兴它发生在赌注相对较低的时候。

---

### [00:07:39] Logan Kilpatrick

**English:**
And I totally agree with you. It's like the team has been growing so rapidly over the last year since I joined. It's been crazy to think about how many new folks there are, and I really think that this really brought people together because most folks, historically, many of the folks when I joined, what kind of banded us all together was the launch of ChatGPT, the launch of GPT-4, and for folks who weren't around for some of those launches, it was perhaps step day. For folks who are on for dev day, it was probably this event. So I think we've had these events that have really brought the company together cross-functionally, so hopefully all the future ones will be really exciting things like GPT five, whenever that comes, and stuff like that.

**中文翻译:**
我完全同意你的看法。自我加入以来，团队在过去一年里增长得非常快，新成员的数量惊人。我真的认为这件事让大家团结在了一起。历史上，当我加入时，把大家凝聚在一起的是 ChatGPT 和 GPT-4 的发布；对于那些没赶上这些发布的员工，可能是开发者大会（Dev Day）；而对于参加了开发者大会的人，可能就是这次事件。这些跨职能的重大事件真正凝聚了公司。希望未来的凝聚点会是像 GPT-5 发布这样令人兴奋的事情。

---

### [00:08:20] Lenny

**English:**
Awesome. We're going to talk about GPT-5. Going in a totally different direction, what is the most mind-blowing or surprising thing that you've seen AI do recently?

**中文翻译:**
太棒了。我们待会儿会聊聊 GPT-5。换个完全不同的方向：你最近看到的 AI 做出的最让你感到震撼或惊讶的事情是什么？

---

### [00:08:31] Logan Kilpatrick

**English:**
The things that are getting me most excited are these new interfaces around AI, like the Rabbit R-1. I don't know if you've seen that, but consumer hardware device, this company called TL Draw. I don't know if you've seen TL Draw.

**中文翻译:**
最让我兴奋的是围绕 AI 出现的新交互界面，比如 Rabbit R-1（一款消费级硬件设备）。还有一家叫 tldraw 的公司，不知道你有没有见过。

---

### [00:08:44] Lenny

**English:**
I think. You sketch something and then it makes it as a website?

**中文翻译:**
我想过。就是你画个草图，它就能把它变成一个网站？

---

### [00:08:48] Logan Kilpatrick

**English:**
And that's only a small piece of what TL Draw is actually working on, but there's all of these new interfaces to interact with AI, and I think I was having a conversation with the TL Draw folks a couple of days ago, really blows my mind to think about how chat is the predominant way that folks are using AI today. And I actually think, and this is my bulk case for the folks at TL Draw, I'm super excited for them to build what they're building, but they're sort of building this infinite canvas experience and you can imagine how, as you're interacting with an AI on a daily basis, you might want to jump over to your infinite canvas, which the AI has filled in all the details and you might see a reference to a file and to a video and all of these different things.

**中文翻译:**
那只是 tldraw 正在做的一小部分。现在出现了很多与 AI 交互的新界面。几天前我和 tldraw 的人聊天时就在想，现在大家主要通过“聊天”来使用 AI，这其实挺局限的。我非常看好 tldraw 的方向，他们正在构建一种“无限画布”（Infinite Canvas）的体验。你可以想象，在日常与 AI 交互时，你可能想跳转到无限画布上，AI 已经在上面填满了细节，你可以看到文件引用、视频等各种内容。

---

### [00:09:30] Logan Kilpatrick

**English:**
And it's such a cool way. It actually makes a lot more sense for us as humans to see stuff in that type of format than, I think, just listing out a bunch of stuff in chat. So I'm really, really excited to see more people. I think 2024 is the year of multimodal AI, but it's also the year that people really push the boundaries of some of these new UX paradigms around AI.

**中文翻译:**
这是一种非常酷的方式。对于人类来说，以这种格式查看信息比在聊天框里列出一堆东西要合理得多。所以我非常期待看到更多尝试。我认为 2024 年不仅是多模态 AI 之年，也是人们真正突破 AI 相关 UX（用户体验）范式边界的一年。

---

### [00:09:53] Lenny

**English:**
It's funny. I feel like Chatbots, as a PM for many years, it feels like every brainstorming session we had about new features, it's like, "Hey, we should have built a Chatbot to solve this problem." It's like the perennial like, "Oh, Chatbot," or, "Someone's going to suggest we do a Chatbot," and now they're actually useful and working and everyone's building Chatbots, a lot of them based on OpenAI APIs.
(00:10:12):
There's not really a question there, but maybe the question, I was going to get to this later, is just when people are thinking about building a product like, say, TL Draw, what should they think about? Where OpenAI is not going to go versus here's what OpenAI is going to do for us. We shouldn't worry about them building a version of TL Draw in the future. What's the way to think about where you won't be disrupted essentially by OpenAI, knowing also they may change their mind?

**中文翻译:**
很有趣。作为多年的产品经理（PM），我感觉以前每次头脑风暴新功能时，总有人会说：“嘿，我们应该做一个聊天机器人来解决这个问题。”这就像是个老梗。而现在，聊天机器人真的变得有用且可行了，每个人都在构建聊天机器人，其中很多是基于 OpenAI 的 API。
这其实不算个问题，但我原本想晚点问的是：当人们考虑构建像 tldraw 这样的产品时，应该如何思考“OpenAI 不会涉足的领域”与“OpenAI 会为我们做的事情”？我们不应该担心 OpenAI 未来会做一个 tldraw 的版本吗？在明知 OpenAI 可能会改变主意的情况下，如何思考哪些领域不会被 OpenAI 颠覆？

---

### [00:10:36] Logan Kilpatrick

**English:**
That's a great question. I think we're deeply focused on these very, very general use cases like the general reasoning capabilities, the general coding, the general writing abilities. I think where you start to get into some of these very vertical applications... And I think a great example of this is actually Harvey. I don't know if you've seen Harvey, but it's this legal AI use case where they're building custom models and tools to help lawyers and people at legal firms and stuff like that. And that's a great example of our models are probably never going to be as capable as some of the things that Harvey's doing because our goal and our mission is really to solve this very general use case and then people can do things like fine-tuning and build all their own custom UI and product features on top of that.

**中文翻译:**
这是个好问题。我认为我们深度专注于非常通用的用例，比如通用推理能力、通用编程和通用写作能力。而当你进入一些非常垂直的应用领域时……一个很好的例子是 Harvey。不知道你有没有听说过 Harvey，这是一个法律 AI 用例，他们构建定制模型和工具来帮助律师和律所。这是一个极佳的例子，我们的模型可能永远不会像 Harvey 的某些功能那样专业，因为我们的目标和使命是解决非常通用的用例，然后让人们在此基础上进行微调（Fine-tuning），并构建自己的定制 UI 和产品功能。

---

### [00:11:17] Logan Kilpatrick

**English:**
I have a lot of empathy and a lot of excitement for people who are building these very general products today. I talk to a lot of developers who are building just general purpose assistants and general purpose agents and stuff like that. I think it's cool and it's a good idea. I think the challenge for them is they are going to end up directly competing against us in those spaces and I think there's enough room for a lot of people to be successful, but to me you shouldn't be surprised when we end up launching some general purpose agent product because, again, we're sort of building that with GPTs today and versus we're not going to launch some of these varied verticalized products. We're not going to launch an AI sales agent. That's just not what we're building towards. And companies who are and have some domain specific knowledge and they're really excited about that problem space, they can go into that and leverage our models and end up continuing to be on the cutting edge without having to do all that R&D effort themselves.

**中文翻译:**
对于那些正在构建通用产品的人，我既感同身受又感到兴奋。我接触过很多开发通用助手和通用智能体（Agents）的开发者。我觉得这很酷，也是个好主意。但挑战在于，他们最终会在这些领域与我们直接竞争。虽然我认为市场足够大，可以让很多人成功，但如果你看到我们发布了某种通用智能体产品，不应该感到意外，因为我们现在的 GPTs 就在往这个方向走。相比之下，我们不会发布各种垂直化产品，比如我们不会做一个 AI 销售代理。那不是我们的目标。而那些拥有特定领域知识并对该领域充满热情的公司，可以深耕其中并利用我们的模型，从而在无需承担全部研发压力的情况下保持领先。

---

### [00:12:16] Lenny

**English:**
Got it. So the advice I'm hearing is get specific about use cases, and that could be either models that are tuned to be especially useful for a use case like sales or make an interface or experience solving a more specific problem.

**中文翻译:**
明白了。所以你的建议是：专注于具体的用例。这可以是针对特定用例（如销售）进行调优的模型，也可以是解决更具体问题的界面或体验。

---

### [00:12:30] Logan Kilpatrick

**English:**
And I think if you're going to try and solve this very general, if you're going to try to build the next general assistant to compete with something like ChatGPT, it has to be so radically different. People have to really be like, "Wow, this is solving these 10 problems that I have with ChatGPT, and therefore I'm going to go and try your new thing." Otherwise we're just putting a ton of engineering efforts and research effort into making that an incredible product, and it's just going to be the normal challenges of building companies. It's just hard to compete against something like that.

**中文翻译:**
而且我认为，如果你想解决非常通用的问题，想构建下一个通用助手来与 ChatGPT 竞争，它必须有彻底的不同。人们必须觉得：“哇，这解决了我在 ChatGPT 上遇到的 10 个问题，所以我愿意尝试你的新产品。”否则，我们正在投入海量的工程和研究力量来打造一个顶尖产品，在这种情况下竞争会非常艰难。

---

### [00:12:59] Lenny

**English:**
Awesome. Okay, that's great. I was going to get to that later, but I'm glad we touched on that. I imagine that's on the minds of many developers and founders. Kind of along the same lines, there's a lot of talk about how ChatGPT and GPTs and many of the tools you guys offer are going to make a company much more efficient. They don't need as many engineers, data scientists, PMs, things like that, but I think it's also hard for companies to think about what can we actually do to make our company more efficient. I'm curious if there's any examples that you can share of how companies have taken built a, say, a GPT internally to do something so that they don't have to spend engineering hours on it or generally just used OpenAI tooling to make their business internally more efficient?

**中文翻译:**
太棒了。很高兴我们聊到了这个，我想很多开发者和创始人都在思考这个问题。顺着这个思路，现在有很多关于 ChatGPT 和 GPTs 如何提高公司效率的讨论——比如不再需要那么多工程师、数据科学家或 PM。但我认为公司很难具体想到“我们到底能做些什么来提高效率”。你能不能分享一些例子，比如公司如何在内部构建 GPT 来完成某项工作，从而节省工程时间，或者仅仅是利用 OpenAI 的工具让内部业务更高效？

---

### [00:13:42] Logan Kilpatrick

**English:**
Yeah, that's a great question. I wonder if you can put this in the show notes or something like that, but there's a really great Harvard Business School study about... And I forgot which consulting firm they did it with. Maybe it was like Boston Consulting or something like that, but it might've been one of the other ones. And they talk about the order of magnitude of efficiency gain for those folks who are using AI tools, I think it was chat GPT specifically in those use cases that they were using, comparatively against folks who aren't using AI. I'm really excited, also, just as just more time passes between the release of this technology, for us to get more empirical studies. I feel just for myself, as somebody who's an engineer today, I use ChatGPT and I can ship things way faster than I would be able to.

**中文翻译:**
是的，这是个好问题。你可以把这个放在节目介绍里：哈佛商学院有一项非常棒的研究（可能是和波士顿咨询公司 BCG 合作的），探讨了使用 AI 工具（特别是 ChatGPT）的人与不使用 AI 的人相比，效率提升的数量级。随着技术发布的时间越来越长，我也很期待看到更多的实证研究。就我个人而言，作为一名工程师，我使用 ChatGPT 发布产品的速度比以前快得多。

---

### [00:14:26] Logan Kilpatrick

**English:**
I don't have any good metrics for myself to put a specific number on it, but I'm guessing people are working on those studies right now. I think engineering is actually one of the highest leverage things that you could be using AI to do today and really unlocking, probably on the order of at least a 50% improvement, especially for some of the lower hanging fruit software engineering tasks. The models are just so capable at doing that work. And it's crazy to think... And I'm guessing, actually, GitHub probably has a bunch of really great studies they publish around copilots and you could use those as an analogy for what people are getting from ChatGPT as well. But those are probably the highest leverage things.

**中文翻译:**
我没有具体的量化指标，但我猜现在肯定有人在做相关研究。我认为工程开发是目前使用 AI 杠杆率最高的领域之一，尤其是在一些基础的软件工程任务上，效率提升可能至少在 50% 左右。模型处理这些工作的能力非常强。GitHub 可能也发布过关于 Copilot 的研究，你可以把那些作为参考。这些可能是目前杠杆率最高的事情。

---

### [00:15:07] Logan Kilpatrick

**English:**
I think now with GPTs, people are able to go in and solve some of these more tactical problems. I think one of the general challenges with ChatGPT is it gives a decent answer for a lot of different use cases, but oftentimes it's not particular enough to the voice of your company or the nuance of the work that you're doing. And I think now with GPTs and people who are using the teams in ChatGPT and Enterprise in ChatGPT, they can actually build those things, incorporate the nuance of their own company, and make solving those tasks much, much more domain specific. So we literally just launched GPTs a couple of months ago, so I don't think there's been any good public success stories, but I'm guessing that success is happening right now at companies, and hopefully we'll hear more about that in the months to come as folks get super excited about sharing those case studies.

**中文翻译:**
有了 GPTs，人们现在可以解决一些更具战术性的问题。ChatGPT 的一个普遍挑战是，它能为很多用例提供不错的答案，但往往不够贴合公司的特定语调或工作的细微差别。现在通过 GPTs，以及 ChatGPT 团队版和企业版，用户可以构建融入公司特色的工具，使任务处理更加专业化。GPTs 才发布几个月，目前可能还没有太多公开的成功案例，但我猜很多公司内部已经在发生变革了，希望未来几个月能听到更多分享。

---

### [00:15:58] Lenny

**English:**
I'll share an example. So I have this good friend, his name's Dennis Yang, he works at Chime, and he told me about two things that they're doing at Chime that seem to be providing value. One is he built a GPT that helps write ads for Facebook and Google just gives you ideas for ads to run, and so that takes a little load off the marketing team or the growth team. And then he built another GPT that delivers experiment results, kind of like a data scientist, with here's the result of this experiment. And then you could talk to it and ask for like, "Hey, how much longer do you think we should run this for," or, "What might this imply about our product," and things like that. And I think it's really-

**中文翻译:**
我分享一个例子。我有个好朋友叫 Dennis Yang，他在 Chime 工作。他告诉我 Chime 正在做的两件事非常有价值。一是构建了一个 GPT 来帮助编写 Facebook 和 Google 广告，提供广告创意，减轻了营销和增长团队的负担。二是构建了一个能交付实验结果的 GPT，就像数据科学家一样，告诉你实验结果，然后你可以问它：“你觉得这个实验还要跑多久？”或者“这对我们的产品意味着什么？”之类的问题。我觉得这非常——

---

### [00:16:35] Logan Kilpatrick

**English:**
I love that.

**中文翻译:**
我太喜欢这个了。

---

### [00:16:35] Lenny

**English:**
Like you said. Is there anything else that comes to mind? Just things you've heard people do just like, "Wow, that was a really smart way of... " So I get there's engineering, co-piloting type tooling. Is there anything else that comes to mind? Just to give people a little inspiration of like, "Wow, that's an interesting way I should be thinking about using some of these tools."

**中文翻译:**
就像你说的。还有什么让你印象深刻的例子吗？就是那种你听完会觉得“哇，这真是个聪明的办法”的事情。除了工程辅助工具，还有什么能给听众带来启发的有趣用法吗？

---

### [00:16:50] Logan Kilpatrick

**English:**
I've seen some interesting GPTs around the planning use cases, like you want to do OKR planning for your team or something like that. I just actually saw somebody tweet it literally yesterday. I've seen some cool venture capital ones of doing diligence on a deal flow, which is kind of interesting, and getting some different perspectives. I think all of those horizontal use cases where you can bring in a different personality and get perspective on different things I think is really cool. I've personally used a GPT, the private GPT that I use myself that helps with some of the planning stuff for different quarters, and just making sure that I'm being consistent in how I'm framing things like driving back to individual metrics, stuff that, when people do planning, they often miss in our data, and then it's been super helpful for me to have a GPT to force me to think about some of those things.

**中文翻译:**
我看到过一些关于规划（Planning）的有趣 GPTs，比如做团队的 OKR 规划。我昨天刚在推特上看到有人分享。还有一些很酷的风险投资 GPTs，用于对项目流进行尽职调查，提供不同的视角。我觉得这些横向用例非常酷，你可以引入不同的“人格”来获取不同角度的看法。我个人也在用一个私有的 GPT，帮我做季度规划，确保我在描述目标时保持一致性，比如如何对应到具体指标上。人们在做规划时经常会忽略数据中的某些细节，GPT 能强迫我去思考这些问题，这对我非常有帮助。

---

### [00:17:43] Lenny

**English:**
Wait, can you talk more about this? What does this GPT do for you and what do you feed it?

**中文翻译:**
等等，能多聊聊这个吗？这个 GPT 具体为你做什么？你给它喂什么数据？

---

### [00:17:48] Logan Kilpatrick

**English:**
Yeah, I forgot what article I saw online, but it was some article that was talking about what are the best ways to set yourself up for success in planning. And I took a bunch of the... I'll see if I can make it public after this and send you a link, but took a bunch of the examples from that and went in and put some of those suggestions into the GPT, and then now when I do any of my planning of I want to build this thing, I put it through and have it generate a timeline, generate all the specifics of what are the metrics and success that I'm looking for, who might be some important cross-functional stakeholders to include in the planning process, all that stuff, and it's been helpful.

**中文翻译:**
是的，我忘了是在哪篇文章里看到的，那是关于如何做好规划的建议。我把其中的一些核心建议放进了 GPT 里。我会看看之后能不能把它公开并给你发个链接。现在当我计划要做某件事时，我会把它丢给 GPT，让它生成时间表、具体的衡量指标、成功的定义，以及在规划过程中需要涉及哪些重要的跨职能利益相关者。这些都非常有用。

---

### [00:18:25] Lenny

**English:**
Wow, that is very cool. That would be awesome if you made it public. And if you do, we'll link to it and we'll make it the number one most popular GPT in the store.

**中文翻译:**
哇，那太酷了。如果你能公开就太棒了。如果你公开了，我们会放上链接，让它成为商店里最受欢迎的 GPT。

---

### [00:18:35] Logan Kilpatrick

**English:**
I love it.

**中文翻译:**
太好了。

---

### [00:18:35] Lenny

**English:**
Going in a slightly different direction, there's this whole genre of prompt engineering. It feels like it's one of these really emerging skills. I actually saw a startup hiring a prompt engineer, one of the startups I've invested in, and I think that's going to blow a lot of people's minds that there's this new job that's emerging. And I know the idea is this won't last forever, that in theory AI will be so smart you don't need to really think about how to be smart about asking it for things you need it to do. But can you just describe this idea of what is prompt engineering, this term that people might be hearing? And then even more interestingly, just what advice do you have for people to get better at writing prompts for, say, ChatGPT or through the API in general?

**中文翻译:**
换个话题，关于“提示词工程”（Prompt Engineering）。这感觉像是一项新兴技能。我投资的一家初创公司甚至在招聘提示词工程师，这可能会让很多人感到惊讶——居然出现了一种新职业。我知道有一种观点认为这不会长久，理论上 AI 会变得足够聪明，你不需要费心思考如何提问。但你能描述一下什么是提示词工程吗？更重要的是，对于想要在 ChatGPT 或 API 中写出更好提示词的人，你有什么建议？

---

### [00:19:13] Logan Kilpatrick

**English:**
Yeah, this is such an interesting space, and I think it's another space where I'm excited for people to do more scientific empirical studies about, because there's so much gut feeling, best practices that maybe aren't actually true in a certain way. I think the reason that prompt engineering exists and comes up at all is because the models are so inclined, because of the way that they're trained, to give you just an answer to the question that you ask. Crap in crap out. If you ask a pretty basic question, you're going to get a pretty basic response. And actually the same thing is true for humans, and you can think of a great example of this. When I go to another human and I ask, "How's your day going," they say, "It's going pretty good."

**中文翻译:**
是的，这是一个非常有趣的领域。我期待看到更多科学的实证研究，因为现在有很多所谓的“最佳实践”其实是基于直觉的，未必完全准确。提示词工程之所以存在，是因为模型受训练方式的影响，倾向于直接回答你提出的问题。“垃圾进，垃圾出”。如果你问一个非常基础的问题，你就会得到一个非常基础的回答。其实人类也是如此。举个例子，当我问另一个人“今天过得怎么样”时，他们通常会说“挺好的”。

---

### [00:19:53] Logan Kilpatrick

**English:**
Literally, absolutely zero detail, no nuance, not very interesting at all versus, again, if you have some context with a person, if you have a personal relationship with them and I ask you, "Hey Lenny, how's your day going? How did the last podcast go," et cetera, et cetera, you just have a little bit more context and agency to go and answer my question. I think this is prompt engineering.
(00:20:13):
My whole position on this is prompt engineering is a very human thing. When we want to get some value out of a human, we do this prompt engineering. We try to effectively communicate with that human in order to get the best output. And the same thing is true of models. And I think it's like, again, because we're using a system that appears to be really smart, we assume that it has all this context, but it's really like imagine a human level intelligence but literally no context. It has no idea what you're going to ask it. It's never met you before. It has no idea who you are, what you do, what your goals are. And it's the reason that you get super generic responses sometimes is because people forget they need to put that context in the model.

**中文翻译:**
完全没有细节，没有起伏，一点也不有趣。但如果你和某人有交情，我问：“嘿 Lenny，今天怎么样？上一期播客录得如何？”等等，你就有了更多的上下文和动力来回答我的问题。我认为这就是提示词工程。
我的观点是，提示词工程是非常人性化的。当我们想从另一个人那里获得价值时，我们也会进行这种“提示词工程”——尝试有效地沟通以获得最佳结果。模型也是一样。因为我们使用的系统看起来非常聪明，我们往往假设它拥有所有背景信息，但实际上它就像一个拥有人类智力却完全没有背景信息的人。它不知道你会问什么，没见过你，不知道你是谁，做什么，目标是什么。你之所以有时会得到非常平庸的回答，是因为人们忘记了需要把背景信息输入给模型。

---

### [00:20:57] Logan Kilpatrick

**English:**
So I think the thing that is going to help solve this problem, and we already kind of do this in the context of Dali, so when you go to the image generation model that we have, Dali, and you say, "I want a picture of a turtle," what it does is it actually takes that description. It says, "I want a picture of a turtle," and it changes it into this high fidelity, like generate a picture of a turtle with a shell, with a green background and lily pads in the water and all this other. It adds all this fidelity because that's the way that the model is trained. It's trained on examples with super high fidelity. This will happen with text models.

**中文翻译:**
我认为解决这个问题的方法（我们已经在 DALL-E 中这么做了）是：当你对图像生成模型 DALL-E 说“我想要一张乌龟的照片”时，它实际上会接过这个描述，并将其转化为高保真的描述，比如“生成一张带有龟壳的乌龟照片，背景是绿色的，水里有睡莲”等等。它增加了这些细节，因为模型是基于高保真示例训练的。文本模型也会发生同样的变化。

---

### [00:21:35] Logan Kilpatrick

**English:**
You can imagine a world where you go into ChatGPT and you say, "Write me a blog post about AI." It automatically will go and be like, "Let me generate a much higher fidelity description of what this person really wants, which is generate me a blog post about AI that talks about the trade-offs between these different techniques and some example use cases and references some of the latest papers," and it does all that for you, and then you at the user will hopefully be able to be like, "Yep, this is kind of what I wanted. Let me edit this. Let me edit this here."
(00:22:02):
And again, the inherent problem is we're lazy as humans. We don't want to type all... We don't really want to type what we mean, and I think AI systems are actually going to help solve some of that problem.

**中文翻译:**
你可以想象这样一个世界：你进入 ChatGPT 说“给我写一篇关于 AI 的博客”。它会自动识别并生成一个更高保真的描述，比如“帮我写一篇关于 AI 的博客，讨论不同技术之间的权衡，列举一些用例并引用最新的论文”。它为你做好了这一切，然后你作为用户只需说：“对，这就是我想要的，我再改改这里。”
归根结底，固有的问题是人类是懒惰的。我们不想打那么多字，不想详细说明我们的真实意图，而我认为 AI 系统实际上会帮助解决这个问题。

---

### [00:22:12] Lenny

**English:**
So until that day, what can people do better when they're prompting, say ChatGPT? And I'll give you an example. Tim Ferris suggested this really good idea that I've been stealing, which is when you're preparing for an interview, you go to chat GPT. And so I did this for you. I was like, "Hey, I'm interviewing Logan Kilpatrick, he is head of developer relations at OpenAI, on my podcast. Give me 10 questions to ask him in the style of Tyler Cowen," who I think is the best interviewer. He is so good at just very pointed original questions. So what advice would you have for me to improve on that prompt to have better results? The questions were fine. They're great. They're interesting enough, but they weren't like, "Holy, these are incredible." So I guess what advice would you give me in that example?

**中文翻译:**
那么在那一天到来之前，人们在给 ChatGPT 写提示词时能做些什么来改进呢？我举个例子。Tim Ferriss 提过一个很好的主意，我一直在借用：准备面试时去问 ChatGPT。我也为你做了这件事。我说：“嘿，我要在我的播客上采访 Logan Kilpatrick，他是 OpenAI 的开发者关系负责人。请以 Tyler Cowen 的风格给我 10 个问题。”我觉得 Tyler Cowen 是最棒的面试官，他非常擅长提出尖锐且原创的问题。那么，你对我改进这个提示词有什么建议？生成的问题还行，挺有趣的，但还没到“天哪，这太不可思议了”的程度。

---

### [00:22:57] Logan Kilpatrick

**English:**
Yeah, that's a great example where thinking in context of who it is that you're asking questions about. I'm probably not somebody who has enough information about me on the internet where the model actually has been trained and knows the nuances of my background. I think there's probably much more famous guests where it might be that there's enough context on the internet to answer the questions. You actually have to do some of that work. You need to, say if you're using browse with Bing, for example, you could say, "Here's a link to Logan's blog and some of the things that he's talked about. Here's a link to his Twitter. Go through some of his tweets, go through some of his blogs and see what his interesting perspectives are that we might want to surface on the blog," or something like that.

**中文翻译:**
这是一个很好的例子。要考虑你提问对象的背景。我可能不是那种在互联网上有足够多信息让模型训练并了解我背景细节的人。如果是更出名的嘉宾，互联网上的上下文可能足够回答问题。但对于我，你可能需要做一些额外工作。比如，如果你使用“Bing 联网搜索”功能，你可以说：“这是 Logan 博客的链接，这是他的推特链接。去浏览一下他的推文和博客，看看他有哪些有趣的观点是我们可以在播客中挖掘的。”

---

### [00:23:36] Logan Kilpatrick

**English:**
It's, again, giving the model enough context to answer the question. I think, again, that prompt actually might work really well for somebody who has it, if you were interviewing Tom Cruise or something like that, somebody who has a lot of information about them on the internet. It probably works a little bit better.

**中文翻译:**
这又是“给模型提供足够上下文”的问题。如果你采访的是汤姆·克鲁斯这样在网上有海量信息的人，你之前的那个提示词可能效果会好得多。

---

### [00:23:52] Lenny

**English:**
So the advice there is just give more context. It doesn't tell you, "Hey, I don't actually know that much about Logan, so give me some more information." It's just like, "Here you go. Here's a bunch of good questions."

**中文翻译:**
所以建议就是提供更多背景。它不会主动告诉你：“嘿，其实我对 Logan 了解不多，再给我点信息吧。”它只会直接说：“给，这是一堆不错的问题。”

---

### [00:24:00] Logan Kilpatrick

**English:**
Exactly. It wants to. It so deeply wants to answer your question. It doesn't care that it doesn't have enough context. It's the most eager person in the world you could imagine to answer the question, and without that context it's just hard to do, to give anything a value. If we got t-shirts printed, they should say, "Context is all you need. Context is the only thing that matters." It's such an important piece of getting a language model to do anything for you.

**中文翻译:**
没错。它太想回答你的问题了。它不在乎自己是否缺乏背景信息。它是你所能想象的世界上最渴望回答问题的人，但没有背景，它很难提供真正有价值的东西。如果我们印 T 恤，上面应该写着：“背景就是你所需的一切（Context is all you need）。背景是唯一重要的事情。”这是让语言模型为你工作的关键。

---

### [00:24:26] Lenny

**English:**
Any other tips? Just as people are sitting there, maybe they have ChatGPT open right now as they're crafting a prompt, is there anything else that you'd say would help them have better results?

**中文翻译:**
还有其他技巧吗？当人们现在正开着 ChatGPT 构思提示词时，还有什么能帮他们获得更好结果的建议？

---

### [00:24:37] Logan Kilpatrick

**English:**
We actually have a prompt engineering guide, which folks should go and check out. It has some of the examples. It depends on the order of magnitude of how much performance increase you can get. There's a lot of really small silly things, like adding a smiley face, increases the performance of the model. I'm sure folks have seen a lot of these silly examples, but telling the model to take a break and then answer the question, all these kinds of things. And again, if you think about it, it's because the corpus of information that's trained these models is the same things that humans have sent back and forth to each other. So you telling a human, "When I go take a break and then I come back to work, I'm fresher and I'm able to answer questions better and do work better," so very similar things are true for these models. And again, when I see a smiley face at the end of someone's message, I feel empowered that this is going to be a positive interaction and I should be more inclined to give them a great answer and spend more effort on the thing that they asked me for.

**中文翻译:**
我们其实有一份《提示词工程指南》，大家可以去看看。里面有很多例子。性能提升的程度取决于具体情况。有很多看似愚蠢的小技巧，比如加一个笑脸符号，就能提高模型的表现。我敢肯定大家见过很多这类例子，比如告诉模型“先休息一下再回答问题”之类的。如果你仔细想想，这是因为训练这些模型的语料库就是人类互相发送的信息。你告诉一个人“休息一下再回来工作会更清醒，能更好地回答问题”，这对模型也同样适用。同样，当我看到信息末尾有个笑脸时，我会觉得这是一次积极的互动，从而更倾向于给出一个好的回答并投入更多精力。

---

### [00:25:34] Lenny

**English:**
Wow, wait. So that's a real thing. If you had a smiley face, it might give you better results.

**中文翻译:**
哇，等等。这是真的吗？加个笑脸真的会有更好的结果？

---

### [00:25:39] Logan Kilpatrick

**English:**
Again, it's like the challenge with all this stuff is it's very nuanced and it's also it's a small jump in performance. You could imagine on the order of one or 2%, which for a few sentence answer might not even be a discernible difference. Again, if you're generating an entire saga of texts, the smiley face could actually make a material difference for you, but for something small and textual it might not.

**中文翻译:**
还是那句话，这些东西非常微妙，性能提升幅度很小。你可以想象大约是 1% 或 2% 的提升，对于几句话的回答可能根本看不出区别。但如果你在生成长篇大论，笑脸可能真的会产生实质性的影响；对于短文本，可能就不明显。

---

### [00:26:03] Lenny

**English:**
Okay, good tip. Amazing. Okay, we've talked about GPTs I think maybe might be helpful to describe what is this new thing that you guys launched, GPTs, and I'm curious just how it's going. This is a really big change and element of OpenAI now with this idea that you could build your own mini, and I'm almost explaining it, your mini open ChatGPT and then people can... I think you can pay for it. You can charge for your own GPT or is it all free right now?

**中文翻译:**
好的，很有用的技巧。太棒了。我们聊聊 GPTs 吧。也许先描述一下你们推出的这个新东西 GPTs 是什么会很有帮助。我很想知道进展如何。这是 OpenAI 的一个重大变化，即你可以构建自己的“迷你版”ChatGPT。我记得人们可以……是可以付费使用吗？你可以为自己的 GPT 收费吗，还是现在都是免费的？

---

### [00:26:29] Logan Kilpatrick

**English:**
It's ll free right now. It's all free.

**中文翻译:**
现在全是免费的。

---

### [00:26:31] Lenny

**English:**
Okay. In the future I imagine people will be able to charge. So there's this whole store now. Basically it's the whole app store that you guys have launched. How's it going? What's happening? What surprised you there? What should people know?

**中文翻译:**
好的。我想未来人们应该可以收费。现在有了这个商店，基本上就是你们推出的“应用商店”。目前情况如何？发生了什么？有什么让你惊讶的事情？大家应该了解些什么？

---

### [00:26:42] Logan Kilpatrick

**English:**
Yeah, it's going great, and again, historically the thing that you would have to do, let's say for example, you have a really cool ChatGPT use case, what you would have to do to share it with somebody else is actually go in and start the conversation with the model, prompt it to do the things that you wanted to, and then you would share that link with somebody else before the action has actually happened and be like, here now you can essentially finish this conversation with ChatGPT that I started.
(00:27:08):
So GPT kind of changes this where you take all that important context, you put it into the model to begin with, and then people can go and chat with essentially a custom version of ChatGPT. And the thing that's really interesting is you can upload files, you can give it custom instructions, you can add all these different tools. Like a code interpreter is built in, which allows you to do math. Essentially you have browsing built in, image generation built in. You can also, for more advanced use cases if you're a developer, you can connect it to external APIs so you can connect it to the Notion API or Gmail or all these different things, and have it actually take actions on your behalf.

**中文翻译:**
进展非常顺利。以前如果你有一个很酷的 ChatGPT 用例想分享给别人，你得先开始一段对话，引导模型做你想让它做的事，然后在动作发生前分享链接，告诉对方：“给，你可以接着我开始的这段对话继续聊。”
GPTs 改变了这一点。你可以预先将所有重要的背景信息放入模型中，然后人们就可以与这个定制版的 ChatGPT 聊天。最有趣的是你可以上传文件、提供自定义指令、添加各种工具。比如内置了代码解释器（Code Interpreter）来做数学运算，还有联网搜索、图像生成功能。对于开发者等高级用户，你还可以连接外部 API，比如 Notion 或 Gmail，让它代表你执行操作。

---

### [00:27:44] Logan Kilpatrick

**English:**
So there's so many cool things that people are unlocking. And what's been most exciting to me, actually, is the non-developer persona is now empowered to go and solve these really, really, really more challenging problems by giving the model enough context on what that problem is to be able to solve it. Going back to context is all you need, this is very true in the context of GPTs, and if you give it enough context, you can solve much more interesting problems.

**中文翻译:**
人们正在解锁很多酷炫的功能。最让我兴奋的是，非开发者群体现在也被赋能去解决那些极具挑战性的问题，只需给模型提供足够的背景信息即可。回到“背景就是你所需的一切”，这在 GPTs 中体现得淋漓尽致。

---

### [00:28:11] Logan Kilpatrick

**English:**
There's so many things that I'm excited about with this. I think monetization, when it comes to the store later this quarter, I think is going to be extremely exciting when people can get paid based on who's using their GPT. That's going to be a huge unlock and open a lot of people's eyes to the opportunity here. I also think continuing to push on making more capabilities accessible to GPTs for people who can't code is really exciting. Even for me as someone who is a software engineer, it's not super easy to connect the Notion API or the Gmail API to my GPT, and really I'd love to just be able to one click sign in with Gmail and then all of a sudden it's like my Gmail is accessible, or someone else can sign in with their Gmail and make it accessible. So I think over time all those types of things will come, but today it's really custom prompts is essentially one of the biggest value adds with GPTs.

**中文翻译:**
我对此有很多期待。本季度晚些时候商店开启变现功能后，人们可以根据 GPT 的使用情况获得报酬，这会非常令人兴奋，也会让更多人看到这里的机会。我还希望能让不懂代码的人也能更轻松地使用 GPTs 的高级功能。即使对我这个软件工程师来说，连接 Notion 或 Gmail API 也不是那么容易。我希望能实现一键登录 Gmail，然后我的 GPT 就能访问邮件。随着时间推移，这些功能都会实现，但目前 GPTs 最大的价值还是在于自定义提示词。

---

### [00:29:03] Lenny

**English:**
Awesome. I have it pulled up here on different monitor and Canva has the top GPT currently, and I was trying to play with it as you're chatting just to see. I was going to make a big banner that said, "It's the context stupid," and it doesn't. I'm not doing something right, but I'm not paying that much attention to it because we're talking, but this is very cool. Just maybe a final question there. Is there a GPT that you saw someone built that was like, "Wow, that's amazing. That's so cool," something that surprised you? And I'll share one that was very cool, but is there anything that comes to mind when I ask that?

**中文翻译:**
太棒了。我正在另一个屏幕上看，目前排名第一的是 Canva 的 GPT。刚才你说话时我试了一下，想做一个写着“笨蛋，关键是背景”的大横幅，但没成功。可能是我操作不对，毕竟我还在跟你聊天。这真的很酷。关于这个的最后一个问题：有没有哪个别人做的 GPT 让你觉得“哇，太神奇了，太酷了”？有没有什么让你惊讶的作品？我待会儿也会分享一个我觉得很酷的。

---

### [00:29:33] Logan Kilpatrick

**English:**
I think my instinct is the Zapier. All of the stuff that Zapier has done with GPTs is the most useful stuff that you could imagine. You can go so far with what... And I don't know how it's packaged for Zapier's GPT right now, but you can actually, as a third party developer, integrate Zapier without knowing how to code into your GPT. So they're pushing a lot of this stuff, and then basically all 5,000 connections that are possible with Zapier today, you can bring into your GPT and essentially enable it to do anything. So I'm incredibly excited for Zapier and for people who are building with them so many things that you can unlock using that platform. So I think that's probably the most exciting thing to me for people who aren't developers.

**中文翻译:**
我的直觉是 Zapier。Zapier 在 GPTs 上做的所有尝试都是你能想象到的最实用的东西。你可以走得很远……我不知道现在 Zapier 的 GPT 是如何封装的，但作为第三方开发者，你甚至可以在不懂代码的情况下将 Zapier 集成到你的 GPT 中。他们正在大力推动这件事，基本上 Zapier 目前支持的 5000 多种连接都可以引入你的 GPT，让它几乎能做任何事。我为 Zapier 以及使用该平台的人感到兴奋。对于非开发者来说，这可能是最令人兴奋的事情。

---

### [00:30:20] Lenny

**English:**
Awesome. Zapier's always in there, getting in there connecting things.

**中文翻译:**
太棒了。Zapier 总是无处不在，连接万物。

---

### [00:30:23] Logan Kilpatrick

**English:**
Yeah, they're great.

**中文翻译:**
是的，他们很棒。

---

### [00:30:25] Lenny

**English:**
So the one that I had in mind, so I had a buddy of mine, [inaudible 00:30:28], who's the CEO of a company called Runway built this thing called Universal Primer which helps you learn. It's described as, "Learn everything about anything," and basically, I think, it's kind of this Socratic method of helping you learn stuff. So it's like, "Explain how transformers work in LMs," and then it just kind goes through stuff and then asks you questions, I think, and helps you learn new concepts. And I think it's the number two education GPT.

**中文翻译:**
我想到的那个是我的一位朋友（Runway 的 CEO）做的，叫 Universal Primer。它旨在帮助你学习，号称能“学习关于任何事的一切”。它基本上是采用苏格拉底式教学法来帮你掌握知识。比如你说“解释一下大语言模型中 Transformer 的工作原理”，它会讲解一番，然后反问你问题，帮你巩固新概念。它目前好像是教育类 GPT 的第二名。

---

### [00:30:53] Logan Kilpatrick

**English:**
I love that. [inaudible 00:30:53] is incredible, so...

**中文翻译:**
我喜欢这个。[某人] 确实很厉害……

---

### [00:30:54] Lenny (Sponsor: Arcade)

**English:**
Yes, it's true. Let me tell you about a product called Arcade. Arcade is an interactive demo platform that enables teams to create polished, on-brand demos in minutes. Telling the story of your product is hard and customers want you to show them your product, not just talk about it or gate it. That's why Product Four teams such as Atlassian, Carta and Retool use Arcade to tell better stories within their homepages, product change logs, emails and documentation.

**中文翻译:**
是的，没错。让我给你介绍一款叫 Arcade 的产品。Arcade 是一个交互式演示平台，能让团队在几分钟内创建出精美且符合品牌调性的演示。讲述产品故事很难，而客户希望看到真实的产品，而不仅仅是听你吹嘘或被挡在注册墙外。这就是为什么 Atlassian、Carta 和 Retool 等团队使用 Arcade 在首页、产品更新日志、邮件和文档中讲述更好的故事。

---

### [00:31:23] Lenny (Sponsor: Arcade continued)

**English:**
But don't just take my word for it. Quantum Metric, the leading digital analytics platform created an interactive product tour library to drive more prospects. With Arcade, they achieved a 2X higher conversion rate for demos and saw five times more engagement than videos. On top of that, they built the demo 10 times faster than before. Creating a product demo has never been easier. With browser-based recording Arcade is the no-code solution for building personalized demos at scale.

**中文翻译:**
别只听我的一面之词。领先的数字分析平台 Quantum Metric 创建了一个交互式产品导览库来吸引更多潜在客户。通过 Arcade，他们的演示转换率提高了 2 倍，互动率是视频的 5 倍。最重要的是，他们构建演示的速度比以前快了 10 倍。创建产品演示从未如此简单。通过基于浏览器的录制，Arcade 是大规模构建个性化演示的无代码解决方案。

---

### [00:31:50] Lenny (Sponsor: Arcade continued)

**English:**
Arcade offers product customization options, designer approved editing tools and rich insights about how your viewers engage every step of the way. Ready to tell more engaging product stories that drive results? Head to arcade.software/lenny and get 50% off your first three months. That's arcade.software/lenny.

**中文翻译:**
Arcade 提供产品定制选项、设计师认可的编辑工具，以及关于观众每一步参与情况的丰富洞察。准备好讲述更动人、更能转化客户的产品故事了吗？访问 arcade.software/lenny，前三个月可享受五折优惠。

---

### [00:32:11] Lenny

**English:**
I want to talk about just what it's like to work at OpenAI and how the product team operates and how the company operates. So you worked at... Your two previous companies were Apple and NASA, which are not known for moving fast. And now you're at OpenAI, which is known for moving very fast, maybe too fast for some people's taste, as we saw it with the whole board thing. And so what I'm curious is just what is it that OpenAI does so well that allows them to build and ship so quickly and at such a high bar? Is there a process or a way of working that you've seen that you think other companies should try to move more quickly and ship better stuff?

**中文翻译:**
我想聊聊在 OpenAI 工作是什么感觉，以及产品团队和公司是如何运作的。你之前的两家公司是苹果和 NASA，它们并不以“快”著称。而现在的 OpenAI 以极速前进闻名，甚至对某些人来说可能太快了（就像我们在董事会事件中看到的那样）。我很好奇，OpenAI 到底做对了什么，能让他们在保持高标准的同时如此迅速地构建和发布产品？有没有什么流程或工作方式是你认为其他公司应该借鉴，从而加快速度并发布更好产品的？

---

### [00:32:48] Logan Kilpatrick

**English:**
Yeah, there's so many interesting trade-offs and all of this tension around how quickly companies can move. I think for us, again, if you think about Apple as an example, if you think about NASA as an example, just older institutions, lots of... Over time, the tendency is things slow down. There's additional checks and balances that are put in place, which drags things down a little bit. So we're young and a new company, so we don't have a lot of that institutional legacy barriers that have been put in place.

**中文翻译:**
是的，关于公司移动速度的问题有很多有趣的权衡和张力。以苹果或 NASA 为例，它们是老牌机构，随着时间的推移，事物往往会变慢。会有额外的制衡机制，这会拖慢进度。而我们是一家年轻的新公司，没有那么多制度性的历史包袱。

---

### [00:33:18] Logan Kilpatrick

**English:**
I think the biggest thing, and there's a good Sam tweet somewhere in the ether about this from, I think, 2022 or something like that, but finding people who are high agency and work with urgency is one of the most... If I was hiring five people today, those are some of the top two characteristics that I would look for in people because you can take on the world if you have people who have high agency and not needing to either get 50 people's different consensus, because you have people who you trust with high agency and they can just go and do the thing, I think, is one of the most... It is the most important thing, I'm pretty sure, if you were to distill it down.

**中文翻译:**
我认为最关键的一点（Sam 在 2022 年左右发过一条相关的推特）是：寻找那些具有“高自主性”且工作有“紧迫感”的人。如果我今天要招五个人，这是我最看重的两项特质。因为如果你拥有一群你信任的、具有高自主性的人，他们不需要征求 50 个人的共识就能直接行动，你就能征服世界。如果非要总结，这绝对是最重要的事情。

---

### [00:34:04] Logan Kilpatrick

**English:**
And I see this in folks that I work with. Folks are so high agency. They see a problem and they go and tackle it. They hear something from our customers about a challenge that they're having and they're already pushing on what the solution for them is and not waiting for all the other things to happen that I think traditional companies are stuck behind because they're like, "Oh, let's check with all these seven different departments to try to get feedback on this." People just go and do it and solve the problem. And I love that. It's so fun to be able to be a part of those situations.

**中文翻译:**
我在同事身上也看到了这一点。大家的主观能动性极强。看到问题就去解决。听到客户反馈挑战，他们已经在推动解决方案了，而不是等待传统公司里那种“哦，让我们先去问问这七个不同部门的意见”的流程。大家直接上手解决问题。我非常喜欢这种氛围，参与其中非常有趣。

---

### [00:34:35] Lenny

**English:**
That is so cool. I really like these two characteristics because I haven't heard this before. Those are the two, maybe the two most important things you guys look for, high agency, high urgency. To give people a clear sense of what these actually look like when you're hiring, you shared maybe this example of customer service. Someone's hearing a bug and then going to fix it. Is there anything else that can illustrate what that looks like, high agency? And then a similar question on urgency other than just move, move, move, ship, ship, ship.

**中文翻译:**
太酷了。我很喜欢这两个特质，以前没听过这种说法。高自主性、高紧迫感。为了让大家更清楚招聘时这些特质具体表现为什么样，你刚才举了客户服务的例子（听到 Bug 就去修）。还有什么能体现“高自主性”的例子吗？另外关于“紧迫感”，除了“冲冲冲、发发发”之外，还有什么具体的表现？

---

### [00:35:01] Logan Kilpatrick

**English:**
I think the assistants API that we released for dev day, we continue to get this feedback from developers that people wanted these higher levels of abstraction on top of our existing APIs, and a bunch of folks on the team just came together and were like, "Hey, let's put together what the plan would look like to build something like this," And then very quickly came together and actually built the actual API that now powers so many people's assistant applications that are out there. And I think that's a great example of it wasn't this top down, oh, someone's sitting there being like, "Oh, let's do these five things," and then like, "Okay, team, go and do that." It's like people really seeing these problems that are coming up and knowing that they can come together as a team and solve these problems really quickly. And I think the assistants API, and there's like 1,001 other examples of teams taking agency and doing this, but I think that's a great one at the top of my head

**中文翻译:**
我想到了我们在开发者大会上发布的 Assistants API。我们一直收到开发者的反馈，希望在现有 API 之上提供更高层次的抽象。团队里的一群人自发聚在一起说：“嘿，让我们制定一个计划来构建这样的东西。”然后他们迅速行动，真的开发出了这个 API，现在它支撑着市面上许多助手类应用。这是一个很好的例子，它不是自上而下的——不是某人坐在那里说“去做这五件事”，然后团队去执行。而是大家看到了出现的问题，并意识到可以组队快速解决。Assistants API 就是团队发挥自主性的一个绝佳案例，类似的例子还有成千上万个。

---

### [00:35:55] Lenny

**English:**
That makes me want to ask. Just how does planning work at OpenAI? So in this example is just like, "Hey, we think we need to build this. Let's just go and build it." I imagine there's still a roadmap and priorities and goals and things that that team had. How does road mapping and prioritization and all of that generally work to allow for something like that?

**中文翻译:**
这让我想问：OpenAI 的规划工作是如何进行的？在刚才的例子中，大家觉得“我们需要做这个，那就去做吧”。但我猜团队应该还是有路线图、优先级和目标的。你们的路线图制定和优先级排序是如何运作的，才能允许这种自发行为的发生？

---

### [00:36:14] Logan Kilpatrick

**English:**
I think this is one of the more challenging pieces at OpenAI. There's so many. Everyone wants everything from us, and today, especially, in the world of ChatGPT and how large and well-used our API is, people will just come to us and say, "Hey, we want all of these things." I think there's a bunch of core guiding principles that we look at. One, going back to the mission, is this actually going to help us get to AGI? So there's a huge focus on there's this potential shiny reward right in front of us, which is optimize user engagement, or whatever it is. And is that really the thing? Maybe the answer is yes. Maybe that is what is going to help us get to AGI sooner, but looking at it through that lens I think is always the first step of deciding any of these problems.

**中文翻译:**
我认为这是 OpenAI 最具挑战性的部分之一。每个人都想从我们这里得到一切，尤其是在 ChatGPT 如此普及、API 被广泛使用的今天。人们会跑来跟我们说：“嘿，我们想要所有这些功能。”我们有一系列核心指导原则。第一，回到使命：这是否真的有助于我们实现 AGI（通用人工智能）？虽然眼前可能有很多诱人的短期目标，比如优化用户参与度之类的，但我们会问：这真的是关键吗？也许答案是肯定的，也许这能帮我们更快实现 AGI，但通过这个视角审视问题始终是决策的第一步。

---

### [00:37:03] Logan Kilpatrick

**English:**
I think, on the developer side, there's also these core tenets of reliability like, "Hey, it would be awesome if we had additional APIs that did all these cool things like new endpoints, new modalities, new abstractions, but are we giving customers a robust and reliable experience on our API?" And that's often the first question. And I think there have been times where we've fallen short on that, and there was a bunch of other things that we've been thinking about doing and really bringing the focus and priority back to that reliability piece because, at the end of the day, nobody cares if you have something great if they can't use it robust and reliably.

**中文翻译:**
在开发者端，我们还有关于可靠性的核心准则。比如：“嘿，如果我们有能做各种酷炫事情的新 API 固然很好，但我们是否为客户提供了稳健可靠的 API 体验？”这通常是首要问题。我认为我们有时在这方面做得不够好，虽然有很多想做的新功能，但必须把重点和优先级拉回到可靠性上。因为归根结底，如果产品不够稳健可靠，没人会在乎它有多强大。

---

### [00:37:37] Logan Kilpatrick

**English:**
So there's these core tenets. And I think, again, we have very, other than all the principles about how we're making the decision, I think the actual planning process is pretty standard. We come together. There's H1 Q1 goals. We all sprint on those. I think the real interesting thing is how stuff changes over time. You think we're going to do these very high level things and new models, new modalities, whatever it is. And then as time goes on, there's all of this turmoil and change, and it's interesting to have mechanisms to be like, "Hey, how do we update our understanding of the world and our goals as everything the ground changes underneath of us as is happening in the craziness of the AI space today?"

**中文翻译:**
所以有这些核心准则。除了决策原则外，实际的规划过程其实挺标准的。我们会聚在一起，制定上半年（H1）和第一季度（Q1）的目标，然后全力冲刺。真正有趣的是事情随时间变化的方式。你原本计划做一些高大上的新模型、新模态，但随着时间推移，会出现各种动荡和变化。在如今疯狂的 AI 领域，如何根据脚下不断变化的土地来更新我们对世界的理解和目标，这套机制非常有趣。

---

### [00:38:22] Lenny

**English:**
It's interesting that it sounds a lot like most other companies. There's H1 planning. There's Q1 planning. Are there metrics and goals like that that you guys have OKRs or anything like that? Or is it just, Here we're going to launch these products?"

**中文翻译:**
很有趣，听起来和大多数公司差不多。有半年规划，有季度规划。你们有 OKR 之类的指标和目标吗？还是仅仅是“我们要发布这些产品”？

---

### [00:38:33] Logan Kilpatrick

**English:**
I think it's much higher level. I actually don't think OpenAI is a big OKR company. I don't think teams do OKRs today and I don't have a good understanding of why that's the case, whether or not. I don't even know if OKRs are still the industry. You're probably talking to a lot more folks about who are making those decisions. So I'm curious. Is that something that you're seeing from folks? Is it still common for people to do OKRs?

**中文翻译:**
我觉得我们的目标更宏观。实际上我不认为 OpenAI 是一家重度依赖 OKR 的公司。据我所知，现在的团队并不怎么做 OKR，我也不太清楚具体原因。我甚至不知道 OKR 是否还是行业标准。你可能接触过更多做决策的人，我也很好奇：你现在看到的大家还在普遍使用 OKR 吗？

---

### [00:38:55] Lenny

**English:**
Yeah, absolutely. Many companies use OKRs, love OKRs. Many companies hate OKRs. I'm not surprised that OpenAI is not an OKR driven company. Along those lines, I don't know how much you can share about all this stuff, but how do you measure success for things that you launch? I know there's this ultimate goal, AGI. Is there some way to track we're getting closer? What else do you guys look at when you launch, say DPT Store or assistants or anything that's like, "Cool, that was exactly what we're hoping for." Is it just adoption?

**中文翻译:**
是的，绝对是。很多公司在使用 OKR，有的很爱，有的很恨。OpenAI 不是一家 OKR 驱动的公司，我并不感到意外。顺着这个话题，我不知道你能透露多少，但你们如何衡量发布产品的成功？我知道终极目标是 AGI，但有没有办法追踪我们是否离它更近了？当你们发布 GPT 商店或助手功能时，除了“采用率”（Adoption），你们还会看什么指标来确认“这就是我们想要的”？

---

### [00:39:20] Logan Kilpatrick

**English:**
Yeah, adoption is a great one. I think there's a bunch of metrics around revenue, number of developers that are building on our platform, all those things. And a lot of these, and I don't want to dive... I'll let Sam or someone else on our leadership team go more into details, but I think a lot of these are actual abstractions towards something else. Even if revenue is a goal, it's like revenue is not actually the goal. Revenue is a proxy for getting more compute, which is then actually what helps us get towards getting more GPUs so that we can train better models and actually get to the goal. So there's all these intermediate layers where even if we say something is the goal, and you hear that in a vacuum and you're like, "Oh, well OpenAI just wants to make money," and it's like, "Well, really money is the mechanism to get better models so that we can achieve our mission." And I think there's a bunch of interesting angles like that as well.

**中文翻译:**
采用率是一个重要指标。此外还有收入、平台上的开发者数量等。我不想深入细节，这留给 Sam 或其他领导层去说，但我认为很多指标其实是其他目标的“抽象”。即使收入是一个目标，它也不是终极目标。收入是获取更多算力的代理指标，而算力能帮我们获得更多 GPU，从而训练更好的模型，最终实现目标。所以有很多中间层。如果你脱离背景听到某个目标，可能会觉得“OpenAI 只是想赚钱”，但实际上钱是获取更好模型以实现使命的手段。

---

### [00:40:12] Lenny

**English:**
I don't know if I've heard of a more ambitious vision for a company, to build artificial general intelligence. I love that. I imagine many companies are like, "What's our version of that?" Before we leave this topic, is there anything else that you've seen OpenAI do really well that allows it to move this fast and be this successful? You talked about hiring people with higher agency and high urgency. Is there anything else that's just like, "Oh wow, that's a really good way of operating?" I imagine part of it's just hiring incredibly smart people. I think that's probably an unsaid thing, but yeah, anything else?

**中文翻译:**
我还没听过比“构建通用人工智能”更宏大的公司愿景了。我喜欢这个。我想很多公司都在想：“我们的 AGI 版本是什么？”在结束这个话题前，除了招聘高自主性和高紧迫感的人，你还看到 OpenAI 在哪些方面做得特别好，从而能跑得这么快、这么成功？除了“雇佣极其聪明的人”这个不言而喻的事实外，还有什么让你觉得“哇，这种运作方式真棒”的吗？

---

### [00:40:45] Logan Kilpatrick

**English:**
I think there's a non-trivial benefit to using Slack, and I think maybe that's controversial and maybe some people don't like Slack, but OpenAI has such a slack heavy culture and it really... The instantaneous real time communication on Slack is so crucial. And I just love being able to tag in different people from different teams and get everybody coalesced. So everybody is always on Slack, so even if you're remote or you're on a different team or in a different office, so much of the company culture is ingrained in Slack, and it allows us to really quickly coordinate where it's actually faster to send someone a Slack message sometimes than it would be to walk over to their desk because they're on Slack and they're going to be using it.

**中文翻译:**
我认为使用 Slack 带来了不可忽视的好处。这可能有争议，有些人不喜欢 Slack，但 OpenAI 有着非常浓厚的 Slack 文化。Slack 上的即时实时沟通至关重要。我非常喜欢能够随时艾特（tag）不同团队的人并让大家凝聚在一起。每个人都时刻在线，无论你是远程办公还是在不同办公室，公司文化都深深植根于 Slack。这让我们能极速协调，有时候发条 Slack 消息比走到别人桌子旁还快，因为大家都在用它。

---

### [00:41:27] Logan Kilpatrick

**English:**
I saw, if you saw, the recent Sam and Bill Gates interview, but Sam was talking about how Slack is his number one most used app on his phone and, "I don't even look at the time thing on my phone anymore because I don't want to know how long I'm using Slack," but I'm sure the Salesforce people are looking at the numbers and they're like, "This is exactly what we wanted."

**中文翻译:**
如果你看了最近 Sam 和比尔·盖茨的访谈，Sam 提到 Slack 是他手机上使用频率最高的 App。他说他甚至不再看手机上的屏幕使用时间了，因为他不想知道自己在 Slack 上花了多少时间。我敢肯定 Salesforce（Slack 的母公司）的人看到这些数据一定会觉得：“这正是我们想要的。”

---

### [00:41:46] Lenny

**English:**
I also love Slack. I'm a big promoter Slack. I think there's a lot of Slack hate, but such a good product. I've tried so many alternatives and nothing compares. I think what's interesting about Slack for you guys is one of the... You don't know if someone in there is just an AGI, that is not actually a person that's just there working at the company.

**中文翻译:**
我也喜欢 Slack，我是它的忠实拥趸。虽然有很多人讨厌它，但它确实是个好产品。我试过很多替代品，没一个能打的。对你们来说，Slack 最有趣的一点可能是：你根本不知道频道里的某个人是不是其实是一个 AGI，而不是真正的员工。

---

### [00:42:01] Logan Kilpatrick

**English:**
I know there are real people. There is no AGIs yet. But I think, yeah, even Slack is building a bunch of really cool AI tools, which I'm excited to... And that's why there's so much cool AI progress. And at the end of the day, it's so exciting, from being a consumer of all these new AI products. Google's a great example. I'm so happy that Google is doing really cool AI stuff because I'm a Google Docs customer and I love using Google Docs. I like a bunch of their other products, and it's awesome that people are building such useful things around these models.

**中文翻译:**
我知道里面都是真人，目前还没有 AGI。不过 Slack 也在构建很多酷炫的 AI 工具。这就是为什么现在的 AI 进展如此令人兴奋。作为这些新 AI 产品的消费者，我也很开心。Google 就是个好例子，我很高兴 Google 在做很酷的 AI 功能，因为我是 Google Docs 的忠实用户。看到人们围绕这些模型构建如此有用的东西，真的很棒。

---

### [00:42:33] Lenny

**English:**
How big is the OpenAI team at this point, whatever you can share? Just to give people a sense of the scale.

**中文翻译:**
OpenAI 现在团队规模有多大？在可以分享的范围内，给大家一个规模感。

---

### [00:42:38] Logan Kilpatrick

**English:**
Yeah, I think the last public number was something around like 750 near the end of last year, 780 or something like that near the end of last year. And we're still growing so quickly, so I won't be the messenger to share the specific updated numbers, but the team is growing like crazy and we're also hiring across all of our engineering teams and PM teams, so folks who are interested, would love to hear from folks who are curious about joining.

**中文翻译:**
去年年底公开的数据大约是 750 到 780 人左右。我们现在依然增长得非常快，所以我不会给出具体的更新数字，但团队确实在疯狂扩张。我们所有的工程团队和 PM 团队都在招人，感兴趣的朋友欢迎联系。

---

### [00:43:03] Lenny

**English:**
Maybe one last question here. So you're growing, maybe getting to 1,000 people, clearly still very innovative and moving incredibly fast. Is there anything you've seen about what OpenAI does well to enable innovation and not slow down new big ideas?

**中文翻译:**
关于这个话题的最后一个问题。你们正在成长，可能快到 1000 人了，但显然依然极具创新力且速度惊人。你有没有发现 OpenAI 在促进创新、不让新想法变慢方面有什么秘诀？

---

### [00:43:19] Logan Kilpatrick

**English:**
Yeah, there's a couple of things, one of which is the actual research team, who seed most of the innovation that happens at OpenAI, is intentionally small. Most of the growth that OpenAI has seen is around our customer facing roles, our engineering roles to provide the infrastructure for ChatGPT and things like that. The research team is, again, intentionally kept small and there's all of this talk. And it's really interesting. I just saw this thread from one of our research folks who was talking about how in a world where you're constrained by the amount of GPU capacity that you have as a researcher, which is the case for open AI researchers, but also researchers everywhere else, each new researcher that you add is actually a net productivity loss for the research group unless that person is up-leveling everyone else in such a profound way that it increases the efficiency.

**中文翻译:**
有几点。首先，作为 OpenAI 创新源泉的研究团队（Research Team）被刻意保持在较小的规模。OpenAI 的大部分增长集中在面向客户的角色，以及为 ChatGPT 提供基础设施的工程角色。研究团队规模很小，这很有趣。我刚看到一位研究员发的帖子，说在 GPU 算力受限的情况下（这对 OpenAI 和其他地方的研究员都一样），每增加一名新研究员，实际上是对研究小组生产力的净损失，除非那个人能以极其深刻的方式提升其他所有人的效率。

---

### [00:44:12] Logan Kilpatrick

**English:**
If you just add somebody who's going to go and tackle some completely different research direction, you now have to share your GPUs with that person and everyone else is now slower on their experiments. So it's a really interesting trade-off that research folks have that I don't think product folks... If I add another engineer to our API team or to some of the ChatGPT teams, you can actually write more code and do more. And that's actually a net beneficial improvement for everybody. And that's always not the case in the case of researchers, which is interesting, in A GPU constrained world, which hopefully we won't always be in.

**中文翻译:**
如果你只是增加一个去研究完全不同方向的人，你就必须分出 GPU 给那个人，导致其他人的实验变慢。这是研究人员面临的一个非常有趣的权衡，而产品团队则不同——如果我给 API 团队或 ChatGPT 团队增加一名工程师，他们能写更多代码，做更多事，这对大家都是净收益。但在 GPU 受限的世界里，研究团队的情况并非总是如此。希望我们不会永远处于算力受限的状态。

---

### [00:44:46] Lenny

**English:**
I want to zoom out a bit and then there's going to be a couple follow-up questions here. Where are things heading with OpenAI? What's in the near future of what people should expect from the tools that you guys are going to have in launch?

**中文翻译:**
我想把视角放大一点。OpenAI 的未来走向如何？在不久的将来，人们可以期待你们发布什么样的工具？

---

### [00:44:58] Logan Kilpatrick

**English:**
Yeah, new modalities. I think ChatGPT continuing to push all of the different experiences that are going to be possible. Today, ChatGPT is really just text in, text out or, I guess three months ago, it was just text in, text out. We started to change that with now you can do the voice mode and now you can generate images and now you can take pictures. So I think continuing to expand the way in which you interface with AI through ChatGPT is coming.

**中文翻译:**
是的，新模态。我认为 ChatGPT 会继续推动各种可能的体验。三个月前，ChatGPT 基本上还是“文本进，文本出”。我们已经开始改变这一点，现在有了语音模式、图像生成和拍照功能。未来将继续扩展你通过 ChatGPT 与 AI 交互的方式。

---

### [00:45:24] Logan Kilpatrick

**English:**
I think GPTs is our first step towards the agent future. Again, today when you use A GPT, it's really you send a message, you get an answer back almost right away, and that's kind of the end of your interaction. I think as GPTs continue to get more robust, you'll actually be able to say, "Hey, go and do this thing and just let me know when you're done. I don't need the answer right now. I want you to really spend time and be thoughtful about this."

**中文翻译:**
我认为 GPTs 是我们迈向“智能体”（Agent）未来的第一步。目前你使用 GPT 时，通常是发条消息，几乎立刻得到回复，交互就结束了。随着 GPTs 变得更强大，你将能够说：“嘿，去处理这件事，做完了告诉我。我不需要立刻得到答案，我希望你花时间仔细思考。”

---

### [00:45:48] Logan Kilpatrick

**English:**
And again, if you think back to all these human analogies, that's what we do as humans. I don't expect somebody, when I ask them to do something meaningful for me, to do it right away and give me the answer back right away. So I think pushing more towards those experiences is what is going to unlock so much more value for people.

**中文翻译:**
回到人类的类比，这就是我们人类做事的方式。当我请某人为我做一件有意义的事时，我不指望他立刻就能完成并给我结果。我认为推动这种体验将为人们释放巨大的价值。

---

### [00:46:06] Logan Kilpatrick

**English:**
And I think the last thing is GPTs as this mechanism to get the next few hundred million people into ChatGPT and into AI. So I think if you've had conversations with people who aren't close to the AI space, oftentimes you talk about, even if they've heard of ChatGPT... A lot of people haven't heard of ChatGPT, but if they have, they show up in ChatGPT and they're like, "I don't really know what I'm supposed to do with this blank slate. I can kind of do anything. It's not super clear how this solves my specific problem."

**中文翻译:**
最后一点是，GPTs 是吸引下几亿人进入 ChatGPT 和 AI 世界的机制。如果你和那些不熟悉 AI 的人聊天，即使他们听说过 ChatGPT（很多人其实没听过），他们打开 ChatGPT 看到一个空白界面时也会想：“我该用这个空白框做什么？它好像什么都能做，但我不知道它怎么解决我的具体问题。”

---

### [00:46:35] Logan Kilpatrick

**English:**
But I think the cool thing about GPTs is you can package down like, "Here's this one very specific problem that AI can solve for you and do it really well," and I can share that experience with you and now you can go and try that GPT, have it actually solve the problem and be like, "Wow, it did this thing for me. I should probably spend the time to investigate these five other problems that I have to see if AI can also be a solution to those." So I think so many more people are going to come online and start using these tools because very narrow vertical tools are what's going to be a huge unlock for them.

**中文翻译:**
但 GPTs 的酷炫之处在于，你可以把它封装成：“这是一个 AI 能为你解决的非常具体的问题，而且做得很好。”我可以把这个体验分享给你，你去试用，它真的解决了问题，你会觉得：“哇，它帮我搞定了。我应该再看看我其他的五个问题，看看 AI 是不是也能解决。”所以，非常垂直、具体的工具将成为巨大的突破口，吸引更多人开始使用这些工具。

---

### [00:47:07] Lenny

**English:**
So in that last case, a classic horizontal product problem where it does so many things and people don't know what exactly it should do for them. So that makes a ton of sense. Just being a lot more template oriented, use case specific, helping people onboard makes tons of sense. A common problem for so many SaaS products out there. The other ones you mentioned, which was really interesting, basically more interfaces to more easily interact with OpenAI voice. You mentioned audio and things like that. That makes tons of sense. And then this agents piece where the idea is, instead of just it's a chat, it's like, "Hey, go do this thing for me."

**中文翻译:**
所以最后那个例子是一个经典的横向产品问题——功能太多，用户不知道它能为自己做什么。这非常有道理。变得更具模板化、针对具体用例、帮助用户上手，这在 SaaS 产品中很常见。你提到的其他点也很有趣，比如更多易于交互的界面（语音、音频等），以及“智能体”部分——不再仅仅是聊天，而是“嘿，去帮我把这事办了”。

---

### [00:47:42] Lenny

**English:**
Kind of along those lines, GPT-5, we touched on this a bit. There's a lot of speculation about the much better version. People just have these wild expectations, I think, for where GPT is going. GPT-5 is going to solve all the world's problems. I know you're not going to tell me when it's launching and what it's going to do, but I heard from a friend that there's kind of this tip that when you're building products today, you should build towards a GPT-5 future, not based on limitations of GPT-4 today. So to help people do that, what should people think about that might be better in a world of GPT-5? Is it just faster? It's just smarter? Is there anything else that might be like, "Oh wow, I should really rethink how I'm approaching my product?"

**中文翻译:**
顺着这个思路，聊聊 GPT-5。大家对这个更强大的版本有很多猜测，甚至有各种疯狂的期待，觉得 GPT-5 能解决世界上所有问题。我知道你不会告诉我发布时间或具体功能，但我听朋友说有一个建议：现在构建产品时，应该面向 GPT-5 的未来，而不是基于目前 GPT-4 的局限性。为了帮助大家做到这一点，你认为在 GPT-5 的世界里，哪些方面会变得更好？只是更快、更聪明吗？还有什么会让人们觉得“哇，我真的该重新思考我的产品方案了”？

---

### [00:48:22] Logan Kilpatrick

**English:**
If folks have looked through the GPT-4 technical report that we released back in March when GPT-4 came out, GPT-4 was the first model that we trained where we could reliably predict the capabilities of that model beforehand based on the amount of computes that we were going to put into it. We did a scientific study to show like, "Hey, this is what we predicted and here is what the actual outcome was." So it'll be, one I think, just as somebody who's interested in technology, but interesting to see does that continue to hold for GPT-5, and hopefully we'll some of that information whenever that model comes out.

**中文翻译:**
如果大家看过我们去年 3 月发布的 GPT-4 技术报告，你会发现 GPT-4 是我们训练的第一个可以根据投入算力提前可靠预测其能力的模型。我们做了一项科学研究来展示：“嘿，这是我们的预测，这是实际结果。”作为一个对技术感兴趣的人，我很想看看这种预测能力在 GPT-5 上是否依然成立，希望模型发布时我们能分享相关信息。

---

### [00:48:56] Logan Kilpatrick

**English:**
I also think you can probably draw a few observations. One of them, which is GPT-4 came out. The consensus from the world is, "Everything is different. All of a sudden everything is different. This changes the world. This changes everything." And then slowly but surely, we come back to reality of like, "This is a really effective tool and it's going to help solve my problems more effectively."

**中文翻译:**
你也可以观察到一些现象。比如 GPT-4 发布时，全世界的共识是：“一切都变了，世界被改变了。”但随后，大家慢慢回归现实，意识到：“这是一个非常有效的工具，它能帮我更高效地解决问题。”

---

### [00:49:21] Logan Kilpatrick

**English:**
And I think that is the, undoubtedly, the lens in which people should look at all of these model advancements, like GPT-5 is surely going to be extremely useful and solve some whole new echelon of problems. Hopefully it'll be faster. Hopefully It'll be better in all these ways, but fundamentally, the same problems that exists in the world are still going to be the same problems. You now just have a better tool to solve those problems.

**中文翻译:**
我认为人们应该通过这个视角来看待所有的模型进步。GPT-5 肯定会非常有用，能解决全新层级的问题。它可能会更快、更好，但从根本上说，世界上存在的问题依然是那些问题，只是你现在有了一个更好的工具去解决它们。

---

### [00:49:44] Logan Kilpatrick

**English:**
And I think going back to vertical use cases, I think people who are solving very specific use cases are just now going to be able to do that much more effectively. I don't think that's going to... People have these unrealistic expectations that GPT-5 is going to be doing back flips in the background in my bedroom while it also writes all my code for me and talks on the phone with my mom or something like that.
(00:50:06):
I'm like, "That's not the case." It's just going to be this very effective tool, very similar to GPT-4, and it's also going to be become very normal very quickly. And I think that is actually a really interesting piece. If you can plan for the world where people become very used to these tools very quickly, I actually think that's an edge, and assuming that this thing is going to absolutely change everything, and in many ways I think it's actually a downside, is the wrong mental framing to have of these tools as they come out.

**中文翻译:**
回到垂直用例，专注于特定领域的人将能更有效地开展工作。我不认为……人们有些不切实际的幻想，觉得 GPT-5 会在卧室里翻跟头，同时帮我写代码，还能跟我妈通电话。
事实并非如此。它将是一个非常有效的工具，类似于 GPT-4，而且它会很快变得“常态化”。如果你能预见到人们会迅速习惯这些工具并为此做准备，那才是一种优势。如果假设它会绝对地改变一切，在很多方面反而可能是一种误导，这并非看待新工具发布的正确思维框架。

---

### [00:50:39] Lenny

**English:**
Kind of along these lines, you guys are investing a lot into B2B offerings. I think half the revenue, last I heard, was B2B and then half is B2C. I don't know if that's true, but that's something I heard. What is it that you get if you work with opening AI as a company, as a business? What does it unlock? Is it just called OpenAI Enterprise? What's it called and what do you get as a part of that?

**中文翻译:**
顺着这个话题，你们在 B2B 业务上投入了很多。我听说你们的收入一半来自 B2B，一半来自 B2C。作为一家公司，如果与 OpenAI 合作，能获得什么？它能解锁什么功能？是叫 OpenAI 企业版吗？具体包含什么？

---

### [00:51:01] Logan Kilpatrick

**English:**
Yeah, so I think a lot of our B2B customers are using the API to build stuff. So I think that's one angle of it. I think if you're a ChatGPT B2B customer, we sell Teams, which is the ability to get multiple subscriptions of ChatGPT packaged together. We also have an enterprise version of ChatGPT. There's a bunch of enterprise-y things that enterprise companies want, around SSO and stuff like that, related to ChatGPT Enterprise.

**中文翻译:**
是的，很多 B2B 客户使用 API 来构建产品。这是其中一个维度。如果你是 ChatGPT 的 B2B 客户，我们提供团队版（Teams），可以将多个订阅打包。我们还有企业版（Enterprise），包含大公司需要的 SSO（单点登录）等企业级功能。

---

### [00:51:25] Logan Kilpatrick

**English:**
I think the coolest thing is actually being able to share some of these prompt templates and GPTs internally. So again, you can make custom things that work really well for your company with all of the information that's relevant to solving problems at your company and share those internally. And to me, that's like you want to be able to collaborate with your teammates on the cool things you create using AI. So that's a huge unlock for companies. I think that those are the two biggest value adds. There's higher limits and stuff like that on some of those models, but I think being able to share your very domain specific applications is the most useful thing.

**中文翻译:**
我认为最酷的功能是可以在内部共享提示词模板和 GPTs。你可以根据公司的特定信息构建定制工具，并在内部共享。能够与同事协作使用你用 AI 创造的酷炫工具，这对公司来说是一个巨大的提升。除了更高的使用限额，这种共享领域特定应用的能力是最有用的。

---

### [00:52:00] Lenny

**English:**
I think if you're a company listening and you think a lot of employees are using ChatGPT, basically the simplest thing you could do is just roll it up into a business account with single sign-on and that probably saves you money and makes it easier to coordinate and administer.

**中文翻译:**
如果你是一家公司的管理者，发现很多员工都在用 ChatGPT，最简单的做法就是把他们整合进一个带 SSO 的商业账户，这可能会省钱，也更方便协调和管理。

---

### [00:52:14] Logan Kilpatrick

**English:**
Yeah, there's also a bunch of security stuff too, like if you want to control. You don't want people to use certain GPTs from the GPT store because you're worried about security or privacy and stuff like that. You don't want your private data going in places. It makes a lot of sense to sign up for that so that you have a little bit more control over what's happening.

**中文翻译:**
是的，还有安全方面的考虑。比如你可能想控制员工不使用 GPT 商店里的某些 GPT，因为担心安全或隐私问题，不希望私有数据流向外部。注册企业账户能让你对这些情况有更多的控制权。

---

### [00:52:29] Lenny

**English:**
Okay, got it. There's a launch happening tomorrow, I think, after we're recording this. Can you talk about what is new, what's coming out? I think this is going to come out a couple weeks after recording, but just what should people know that's new that's coming out from OpenAI tomorrow in our world?

**中文翻译:**
明白了。我想在我们录音后的明天会有一个发布。你能聊聊有什么新东西吗？虽然这期播客会在录音几周后发布，但大家应该了解明天（相对于录音时间）OpenAI 会发布什么吗？

---

### [00:52:45] Logan Kilpatrick

**English:**
Yeah, updated, so there's a few different things. A couple of quick ones are updated GPT-4 Turbo model, updated the preview model that we released that dev day. There's an updated version of that. It fixes this, if folks have seen online people talking about this sort of laziness phenomenon in the model. We improve on that and it fixes a lot of the cases where that was the case. So hopefully the model will be a little bit less lazy. The big thing is the third generation embeddings model. So we were talking off-camera before recording about all of the cool use cases for embedding. So if folks have used embeddings before, it's essentially the technology that powers many of these question and answering with your own documentation or your own corpus of knowledge. And like you were saying, you actually have a website where people can ask questions about recordings of the podcast.

**中文翻译:**
是的，有几样新东西。首先是更新了 GPT-4 Turbo 模型，也就是我们在开发者大会上发布的预览版模型的更新版。它修复了大家在网上讨论的“模型变懒”的问题。我们对此进行了改进，修复了大部分变懒的情况。所以希望模型会变得勤快一点。重头戏是第三代嵌入（Embeddings）模型。录音前我们还聊到了嵌入技术的酷炫用例。如果你用过嵌入，它基本上是支持“基于自有文档或知识库进行问答”的核心技术。就像你提到的，你有一个网站可以让人们针对播客录音提问。

---

### [00:53:34] Lenny

**English:**
Lennybot.com. Check it out.

**中文翻译:**
Lennybot.com，大家可以去看看。

---

### [00:53:35] Logan Kilpatrick

**English:**
Yeah, lennybot.com. And my assumption was that lennybot.com is actually powered by embedding. So you take all of the corpus of knowledge. You take all the recordings, your blog post. You embed them, and then when people ask questions, you can actually go in and see the similarity between the question and the corpus of knowledge and then provide an answer to somebody's question and reference an empirical fact, something that's true from your knowledge base. And this is super useful and people are doing a ton of this. It's like trying to ground these models in reality, in what they know to be true. We know all the things from your podcast to be at least something that you've said before and to be true in that sense, and we can bring them into the answer that the model is actually generating in response to a question. So that'll be super cool.

**中文翻译:**
是的，lennybot.com。我猜它就是由嵌入技术驱动的。你把所有的知识库、录音、博客文章进行“嵌入”（向量化），当人们提问时，系统会查找问题与知识库之间的相似性，然后根据你知识库中的事实提供答案。这非常有用，很多人都在这么做。这就像是让模型“落地”（Grounding），让它基于已知的事实说话。我们知道你播客里的内容是你亲口说的，是真实存在的，我们可以把这些内容引入模型生成的回答中。这非常酷。

---

### [00:54:20] Logan Kilpatrick

**English:**
And these new V3 embeddings models, again, state-of-the-art performance, the cool thing is actually the non-English performance has increased super significantly. I think historically, people really were only using embeddings for... It only worked really well for English, and I think now you can use it across so many new languages because it's just so much more performant across those languages and it's five times cheaper as well, which is wonderful. There's no better feeling than making things cheaper for people. I love it. I think now it's like you can embed, I'm pretty sure, it was like 62,000 pages of text for $1, which is very, very cheap. So lots of really cool things that you can do with embeddings and exciting to see people invent more stuff.

**中文翻译:**
这些新的 V3 嵌入模型具有顶尖的性能，最酷的是非英语性能得到了显著提升。以前大家主要在英语环境使用嵌入，现在它在多种语言上的表现都非常好，而且价格便宜了 5 倍。没有什么比让产品更便宜更让人开心的了。现在 1 美元大约可以嵌入 62,000 页文本，非常便宜。嵌入技术有很多酷炫的玩法，期待看到大家的创新。

---

### [00:55:07] Lenny

**English:**
What a deal. Final question before we get to a very exciting lightning round. Say you're a product manager at a big company, or even a founder, what do you think are the biggest opportunities for them to leverage the tech that you guys are building, GPT-4, all the other APIs? How should people be thinking about, "Here's how we should really think about leveraging this power in our existing product," or new product, whichever direction you want to go.

**中文翻译:**
真划算。在进入激动人心的闪电轮问答之前，最后一个问题：如果你是大公司的产品经理，或者是创始人，你认为利用你们构建的技术（GPT-4 及其他 API）的最大机会在哪里？人们应该如何思考“在现有产品或新产品中利用这种力量”？

---

### [00:55:34] Logan Kilpatrick

**English:**
Yeah, I think going back to this theme of new experiences is really exciting to me. I think consumers are just going to be... You are going to have an edge on other people if you're providing AI that's not accessible in a Chatbot. People are using a ton of chat and it's a really valuable service area. It's clearly valuable because people are using it. But I think products that move beyond this chat interface really are going to have such an advantage. And also, thinking about how to take your use case to the next level. I've tried a ton of chat examples that are very, very basic and providing a little bit of value to me, but I'm like, "Really this should go much further and actually build your core experience from the ground up."

**中文翻译:**
回到“新体验”这个主题，这让我非常兴奋。如果你提供的 AI 体验不仅仅是一个聊天机器人，你就会拥有竞争优势。虽然聊天界面很有价值且用户众多，但超越聊天界面的产品将具有巨大优势。此外，要思考如何将你的用例提升到新高度。我试过很多非常基础的聊天用例，虽然有点用，但我觉得应该更进一步，从头开始构建核心体验。

---

### [00:56:20] Logan Kilpatrick

**English:**
I've used this product that allows you to essentially manage or view the conversations that are happening online around certain topics and stuff like that. So I can go and look online. What are people saying about GPT-4? And what I just said out loud, "What are people saying about GPT-4," is the actual question that I have. And in a normal product experience today, I have to go into a bunch of dashboards and change a bunch of filters and stuff like that. And what I really want is just ask my question. What are people doing? What are people saying about GPT-4? Get an answer to that question in a very data grounded way.

**中文翻译:**
我用过一个产品，它可以让你查看网上关于某些话题的讨论。我想知道“人们对 GPT-4 的评价是什么？”在传统产品中，我得去翻各种仪表盘、调各种过滤器。但我真正想要的是直接问出这个问题，并得到一个基于数据的、扎实的回答。

---

### [00:56:55] Logan Kilpatrick

**English:**
And I've seen people solve part of this problem where, oh, they'll be like, "Oh, well here's a few examples of what people are saying and, well, that's not really what I want. I want this summary of what's happening." And I think it just takes a little bit more engineering effort to make that happen. But I think it's like that is the magical unlock of like, "Wow, this is an incredible product that I'm going to continue to use," instead of like, "Yeah, this is kind of useful, but I really want more."

**中文翻译:**
我见过一些人解决了部分问题，比如列出几个例子，但这不完全是我想要的，我想要的是对现状的总结。这只需要多一点点工程投入就能实现。这就是那种让人惊叹“哇，这是一个我会一直用下去的神奇产品”与“嗯，有点用，但我还想要更多”之间的区别。

---

### [00:57:21] Lenny

**English:**
Awesome. I'll give a shout-out to a product. I'm not an investor, but I know the founder, called visualelectric.com, which I think is doing exactly this. It's basically a tool specifically built for creatives, I think specifically graphic design, to help them create imagery. So there's like Dali, obviously, but this takes it to a whole new level where it's kind of this canvas, infinite canvas, that you could just generate images, edit, tweak them, and continue to rate until you have the thing that you need. Visualelectric.com.

**中文翻译:**
太棒了。我想推荐一个产品，我不是投资人，但我认识创始人，叫 visualelectric.com。我觉得它做的正是你说的。它是一个专为创意人士（特别是平面设计）打造的工具，帮助他们创作图像。虽然有 DALL-E，但它将其提升到了一个新高度——它是一个无限画布，你可以在上面生成图像、编辑、微调，直到得到你想要的东西。

---

### [00:57:48] Logan Kilpatrick

**English:**
I'm going to try that out. Is it similar to Canva?

**中文翻译:**
我会去试试。它和 Canva 类似吗？

---

### [00:57:50] Lenny

**English:**
It's even more niche, I think, for more sophisticated graphic design, I think, is the use case. But I'm not a designer, so I'm not the target customer. But I will say my wife is a graphic designer. She had never used AI tools. I showed her this and she got hooked on it. She paid for it without even telling me that she was going to become a paid customer, and she created imagery of our dog and all this art. And now it's like on our TV. The art she created is now sitting... It's like we have a frame TV, and that's the image on our TV. So anyway...

**中文翻译:**
我觉得它更小众一些，针对的是更高级的平面设计。我不是设计师，不是目标客户，但我妻子是平面设计师。她以前从没用过 AI 工具，我给她看了这个后她就着迷了。她甚至没告诉我直接就订阅了。她为我们的狗创作了图像和各种艺术品。现在那些作品就在我们的电视上（我们用的是 Frame TV 画壁电视）。

---

### [00:58:21] Logan Kilpatrick

**English:**
I love that. What was it called again?

**中文翻译:**
太棒了。叫什么名字来着？

---

### [00:58:23] Lenny

**English:**
Visualelectric.com. Anyway, anything else you wanted to touch on or share before we get to a very exciting lightning round?

**中文翻译:**
Visualelectric.com。总之，在进入闪电轮之前，还有什么想分享的吗？

---

### [00:58:31] Logan Kilpatrick

**English:**
I've made this statement a few times online and other places, but for people who have cool ideas that they should build with AI, this is the moment. There are so many cool things that need to be built for the world using AI. And again, if I or other folks on the team at OpenAI can be helpful in getting you over the hump of starting that journey of building something really cool, please reach out. The world needs more cool solutions using these tools, and would love to hear about the awesome stuff that people are building.

**中文翻译:**
我在网上说过几次：如果你有想用 AI 实现的酷想法，现在就是最好的时机。世界上有很多酷炫的东西需要用 AI 来构建。如果我或 OpenAI 的同事能帮你开启这段旅程，请随时联系。世界需要更多基于这些工具的酷炫解决方案，我很期待听到大家正在构建的东西。

---

### [00:59:01] Lenny

**English:**
I would've asked you this at the end, but how would people reach out? What's the best way to actually do that?

**中文翻译:**
我本来想最后问的，但人们该如何联系你？最好的方式是什么？

---

### [00:59:06] Logan Kilpatrick

**English:**
Twitter, LinkedIn. My email should be findable somewhere. I don't want to say it and then get slammed with a bunch of email. You should be able to sign my email, if you need it, online somewhere. But yeah, Twitter and LinkedIn is usually the easiest place.

**中文翻译:**
推特（Twitter）、领英（LinkedIn）。我的邮箱在网上应该能搜到，但我不想直接在这里说，怕被邮件淹没。推特和领英通常是最方便的地方。

---

### [00:59:18] Lenny

**English:**
And how do they find you on Twitter?

**中文翻译:**
在推特上怎么搜你？

---

### [00:59:21] Logan Kilpatrick

**English:**
It's just Logan Kilpatrick, or I think my name shows up as Logan.GPT or-

**中文翻译:**
直接搜 Logan Kilpatrick，或者我的显示名可能是 Logan.GPT。

---

### [00:59:21] Lenny

**English:**
Logan.GPT?

**中文翻译:**
Logan.GPT?

---

### [00:59:26] Logan Kilpatrick

**English:**
Or official Logan K.

**中文翻译:**
或者是 official Logan K。

---

### [00:59:28] Lenny

**English:**
Yeah. Awesome. And we'll link into it in the show notes. Amazing. Well Logan, with that, we've reached a very exciting lightning round. Are you ready?

**中文翻译:**
好的，太棒了。我们会把链接放在节目介绍里。那么 Logan，我们进入激动人心的闪电轮问答。准备好了吗？

---

### [00:59:34] Logan Kilpatrick

**English:**
I'm ready.

**中文翻译:**
准备好了。

---

### [00:59:35] Lenny

**English:**
First question, what are two or three books that you've recommended most to other people?

**中文翻译:**
第一个问题：你向别人推荐最多的两三本书是什么？

---

### [00:59:39] Logan Kilpatrick

**English:**
I think the first one is one that I read a long time ago and came back to recently, is the One Room Schoolhouse by Sal Khan. Incredible. Yeah, I don't want... It's the lightning round so I won't say too much, but incredible story and AI is what is going to enable Sal Khan's vision of a teacher per student to actually happen. So I'm really excited about that. And the other one is, that I always come back to, is Why We Sleep. Sleep science are so cool. If you don't care about your sleep, it's one of the biggest up-levels that you can do for yourself.

**中文翻译:**
第一本是我很久以前读过、最近又重读的，萨尔·曼·可汗（Sal Khan）的《一个房间的学校》（The One World Schoolhouse）。非常精彩。既然是闪电轮我就不多说了，但这个故事很棒，AI 将让萨尔·曼·可汗“每个学生配一名老师”的愿景成为现实。另一本我经常翻阅的是《我们为什么要睡觉》（Why We Sleep）。睡眠科学太酷了，关注睡眠是提升自我最有效的方式之一。

---

### [01:00:14] Lenny

**English:**
What is a favorite recent movie or TV show that you really enjoyed?

**中文翻译:**
最近你非常喜欢的电影或电视剧是什么？

---

### [01:00:18] Logan Kilpatrick

**English:**
I'm a sucker for a good inspirational human story. So I watched, with my family recently over the holidays, this Gran Turismo movie, and it's a story about someone who, a kid from London, who grew up doing SIM racing, which is a virtual race car, and did this competition, ended up becoming a real professional race car driver through some competition. And it's just really cool to see someone go from driving a virtual car to driving a real car and competing in the 24-hour Le Mans and all that stuff.

**中文翻译:**
我特别喜欢励志的人类故事。最近假期我和家人看了《 GT 赛车：极速狂飙》（Gran Turismo）。讲的是一个伦敦小孩，从小玩模拟赛车，最后通过比赛成为真正的职业赛车手，还参加了勒芒 24 小时耐力赛。看到有人从开虚拟赛车变成开真赛车，真的很酷。

---

### [01:00:50] Lenny

**English:**
I used to play that game and it was a lot of fun, but I don't think I have any clue how to drive a real car, race car. So that's inspiring. Do you have a favorite interview question that you'd like to ask candidates that you're interviewing?

**中文翻译:**
我以前也玩那个游戏，很有趣，但我完全不知道怎么开真正的赛车。这确实很励志。你面试候选人时最喜欢问的问题是什么？

---

### [01:01:03] Logan Kilpatrick

**English:**
Yeah, I'm always curious to hear what people's... The thing that they so strongly believe that people disagree with them on.

**中文翻译:**
我总是很好奇：“你有哪些深信不疑、但大多数人并不认同的观点？”

---

### [01:01:12] Lenny

**English:**
What do you look for in an answer that seems like, Wow, that's a really good signal?"

**中文翻译:**
什么样的回答会让你觉得“哇，这是一个非常好的信号”？

---

### [01:01:17] Logan Kilpatrick

**English:**
Oftentimes, it's just an entertaining question to ask in some sense, but it's also... It's interesting to see what somebody's deeply held strong belief is, I think. And not to judge whether or not I believe in that, but just curious to see why people feel that way.

**中文翻译:**
通常这只是一个很有趣的问题，但看到一个人深信不疑的东西很有意思。我不是要判断我是否认同，只是好奇他们为什么会有那种感觉。

---

### [01:01:35] Lenny

**English:**
What is a favorite product that you've recently discovered that you really like?

**中文翻译:**
你最近发现并非常喜欢的某个产品是什么？

---

### [01:01:38] Logan Kilpatrick

**English:**
On the narrative of sleep, I have this really nice sleep mask from this company called... Not being paid. I just say this, but it's called Manta Sleep or something like that. It's a weighted sleep mask and it feels incredible when I... I don't know. Maybe I just have a heavy head or something like that, but it feels good to wear a weighted sleep mask at night. I really appreciate it.

**中文翻译:**
说到睡眠，我买了一个非常好用的眼罩，公司叫 Manta Sleep。这不是广告，它是一个加重眼罩，戴着感觉非常棒。可能是我头比较重吧，晚上戴着这种有重量感的眼罩感觉很舒服。

---

### [01:02:01] Lenny

**English:**
I have a competing sleep mask that I highly recommend. I'm trying to find it. I've emailed people about it a couple of times in my newsletter for gift guides.

**中文翻译:**
我也有一个强烈推荐的眼罩。我找找，我在新闻通讯的礼品指南里推荐过好几次。

---

### [01:02:09] Logan Kilpatrick

**English:**
Yeah.

**中文翻译:**
好啊。

---

### [01:02:09] Lenny

**English:**
Okay. My favorite is called the Waoaw Sleep Mask, W-A-O-A-

**中文翻译:**
我最喜欢的是 Waoaw 眼罩，W-A-O-A-

---

### [01:02:15] Logan Kilpatrick

**English:**
What do you like about it?

**中文翻译:**
你喜欢它哪一点？

---

### [01:02:16] Lenny

**English:**
W-A-O-A-W. I'll link to it in the show notes. It makes a lot of room. It's very large and there's space for your eyes, so your eyelashes and whatever eyes aren't pressed on, and it just fits really nicely around the head. And my wife, we both wear eye masks at night. It just, speaking of sleep, really helps us sleep. [inaudible 01:02:37] It doesn't have the weight-ness piece, so it might be worth trying, but everyone I've recommended this to is like, "That changed my life. Thank you for helping me sleep better." And so we'll link to [inaudible 01:02:51].

**中文翻译:**
W-A-O-A-W。我会把链接放上去。它的空间很大，不会压迫眼睛和睫毛，而且非常贴合头部。我和妻子晚上都戴眼罩，这真的很有助于睡眠。它没有加重功能，但值得一试。每个被我推荐的人都说“这改变了我的生活”。

---

### [01:02:17] Logan Kilpatrick

**English:**
Look at that.

**中文翻译:**
真不错。

---

### [01:02:50] Lenny

**English:**
Look at us. So adult. Two more questions. Do you have a favorite life motto that you often come back to share with friends or family, either in work or in life?

**中文翻译:**
看看我们，聊得真成熟。最后两个问题。你有没有什么经常分享给朋友或家人的座右铭，无论是工作还是生活中的？

---

### [01:02:58] Logan Kilpatrick

**English:**
Yeah, I've got it. It's on a Post-It note that I... Right behind my camera and it's "Measure in hundreds." I love this idea of measuring things in hundreds, and it's for folks who are at the beginning of some journey. I talk to people all the time, they're like, "Yeah, I've tried this thing and it hasn't worked." And if your mental model is to measure in hundreds, "I measure in hundreds," the five times that you failed at something, you failed and tried zero times. And I love that. It's such a great reminder that everything in life is built on compounding and multiple attempts at stuff. And if you don't try enough times, you're never going to be successful at it.

**中文翻译:**
有的。就在我相机后面的便利贴上，写着“以百为单位衡量”（Measure in hundreds）。我非常喜欢这个想法，特别是对于刚开始某段旅程的人。我经常听人说：“我试过了，但没成功。”如果你以百为单位来衡量，那么失败了 5 次其实相当于你还没开始尝试。我喜欢这个观点，它提醒我们生活是建立在复利和多次尝试之上的。如果你尝试的次数不够多，你永远不会成功。

---

### [01:03:38] Lenny

**English:**
I love that. I could see why you are successful at OpenAI and why you're a good fit there. Final question. So I asked ChatGPT for a very silly question. "Give me a bunch of silly questions to ask Logan Kilpatrick, head of developer relations at OpenAI," and I went through a bunch. I have three here, but I'm going to pick one. If an AI started doing standup comedy, what do you think would be its go-to joke or funny observation about humans?

**中文翻译:**
我喜欢这个。我能理解你为什么在 OpenAI 这么成功了。最后一个问题。我让 ChatGPT 给我提供了一些问你的傻问题。我选了一个：如果 AI 开始说脱口秀，你觉得它最拿手的笑话或对人类的幽默观察会是什么？

---

### [01:04:06] Logan Kilpatrick

**English:**
I think today, I think if you were to do this, I think the go-to question would be something along the, "So an AI walks into a bar," and likely because, again, it's trained on some distribution of training data, and that's the most common joke that comes up, and that's probably... I wonder if you came up with a joke right now, whether or not that would show up in one of the examples.

**中文翻译:**
我觉得现在它最拿手的可能是那种“一个 AI 走进一家酒吧……”开头的笑话。因为它是在现有的训练数据分布上训练的，而这是最常见的笑话套路。

---

### [01:04:31] Lenny

**English:**
I love it. What would be the joke though? We need the joke. We need the punchline. I'm just joking. I know you can't come up with amazing-

**中文翻译:**
我喜欢。但笑话内容是什么？我们需要那个梗（Punchline）。开玩笑的，我知道你没法立刻想出惊人的——

---

### [01:04:37] Logan Kilpatrick

**English:**
That's what we have ChatGPT for.

**中文翻译:**
那正是我们需要 ChatGPT 的地方。

---

### [01:04:41] Lenny

**English:**
We're already irrelevant. Amazing. Logan, thank you so much for being here. Two final questions, even though you've already shared this information, but just for folks to remind them. Where can folks find you if they want to reach out and ask you more questions? And how can listeners be useful to you?

**中文翻译:**
我们已经变得无关紧要了（笑）。太棒了。Logan，非常感谢你能来。最后两个问题，虽然你已经提过了，但还是提醒一下大家：如果大家想联系你或问更多问题，可以在哪里找到你？听众们能为你做些什么？

---

### [01:04:55] Logan Kilpatrick

**English:**
Yeah, Twitter and LinkedIn, Logan Kilpatrick or Logan.GPT on Twitter. Please shoot me messages. I get a ton of DMs from people and it's always really, really interesting stuff. I think the thing that I would love to have help on is if people find bugs and things that don't work well in ChatGPT, I oftentimes see people be like, "This thing didn't work really well." And the key, and I think we as OpenAI need to do a better job of messaging this to people, but having shared chats or actual, tangible, reproducible examples, are the two things that we need in order to actually fix the problems that people have.

**中文翻译:**
推特和领英，搜 Logan Kilpatrick 或推特上的 Logan.GPT。请给我发私信，我经常收到很有趣的消息。我最希望得到的帮助是：如果大家发现 ChatGPT 的 Bug 或不好用的地方，请告诉我。关键在于（OpenAI 也需要更好地向用户传达这一点）：我们需要“共享聊天链接”或“实际可复现的示例”，这样我们才能真正修复问题。

---

### [01:05:38] Logan Kilpatrick

**English:**
The model laziness was a good example where it was hard to figure out what was going on because people would be like, "Oh, the model's lazier," but it's hard to figure out what were the prompts they were using. What was the examples, all that stuff? So send those examples as you come up on things that don't work well and we'll make stuff better for you.

**中文翻译:**
“模型变懒”就是一个很好的例子。当时很难弄清楚发生了什么，因为人们只是说“模型变懒了”，但很难知道他们用了什么提示词、具体的例子是什么。所以，当你遇到不好用的情况时，请把这些例子发给我们，我们会为你改进。

---

### [01:05:49] Lenny

**English:**
Amazing. And I'll also just remind people, if you're listening to this and you're like, "Oh, okay, cool. A lot of cool ideas for OpenAI and ChatGPT," what you need to do is actually just go to chat.openai.com and try this stuff out. There's a lot of just theorizing, but I think once you actually start doing it, you start to see things a little differently. And at this point, every day I'm in there doing something, like asking for ideas for questions, doing research on a newsletter post, and it's just a tab I'm always coming back to. And I know there's a lot of people just talking about this sort of thing, and I just want to remind people. Just go. Sign in. Play with it. Ask it questions on something you're working on and just see how it goes and keep coming back to it. Is there anything else you want to share along those lines to inspire people to give this a shot?

**中文翻译:**
太棒了。我也想提醒大家：如果你听完觉得“哇，OpenAI 和 ChatGPT 有很多酷点子”，你真正该做的是去 chat.openai.com 亲自动手试试。理论研究很多，但只有当你开始使用时，你才会看到不一样的世界。我现在每天都在用它，比如寻找问题灵感、为新闻通讯做调研，它是我一直开着的标签页。我想提醒大家：去登录，去玩，问它关于你正在做的事情的问题，看看效果如何。关于鼓励大家尝试，你还有什么想分享的吗？

---

### [01:06:34] Logan Kilpatrick

**English:**
I love it. I think the phrase of people being worried about humans being replaced by AI, and I've seen this narrative online, that it's not AI that's going to replace humans. It's other humans that are being augmented and using AI tools that are going to be more competitive in a job market and stuff like that. So go and try these AI tools. This is the best time to learn. You're going to be more productive and empowered in your job and the things that you're excited about. So yeah, excited to see what people use ChatGPT for.

**中文翻译:**
说得好。我常在网上看到人们担心 AI 会取代人类。但有一种说法是：取代人类的不是 AI，而是那些使用了 AI 工具、能力得到增强的人，他们在就业市场等方面会更有竞争力。所以，去尝试这些 AI 工具吧。现在是学习的最佳时机。你会变得更高效，在工作和热爱的事情上获得更多赋能。我很期待看到大家用 ChatGPT 做些什么。

---

### [01:07:01] Lenny

**English:**
And then you can expense your account. I think it's 10 or 20 bucks a month. A lot of companies are paying for this for you, so ask your boss if you can just have it expensed and make sure you use the latest version. Anyway, Logan, thank you again so much for being here.

**中文翻译:**
而且你还可以报销账号费用。每月 10 到 20 美元，很多公司都愿意为此买单，所以去问问你的老板。记得使用最新版本。总之，Logan，再次感谢你的到来。

---

### [01:07:16] Logan Kilpatrick

**English:**
This is awesome, Lenny. Thanks for having me in. Thoughtful questions. Hopefully those weren't all from ChatGPT.

**中文翻译:**
这太棒了，Lenny。谢谢邀请。你的问题很有深度，希望不全是 ChatGPT 写的（笑）。

---

### [01:07:20] Lenny

**English:**
Nope, only the last one. I did have a bunch of others I had in the belt or in the pocket. I don't know what the metaphor is. In the back pocket, that's the metaphor, but I did not get to them because we had enough great stuff. So no, that was all me. Human AI.

**中文翻译:**
不，只有最后一个是。我其实还有一堆备用问题，但因为我们聊的内容已经够精彩了，就没用上。所以，那些都是我本人——“人类 AI”想出来的。

---

### [01:07:35] Logan Kilpatrick

**English:**
Thank you.

**中文翻译:**
谢谢。

---

### [01:07:36] Lenny

**English:**
Thanks, Logan.

**中文翻译:**
谢谢，Logan。

---

### [01:07:37] Logan Kilpatrick

**English:**
Lenny.ai.

**中文翻译:**
Lenny.ai。

---

### [01:07:39] Lenny

**English:**
I love it. Lennybot.com, check it out. Okay, thanks Logan. Bye everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
我喜欢这个。大家去看看 lennybot.com。好的，谢谢 Logan。大家再见。非常感谢大家的收听。如果你觉得本期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用上订阅。另外，请考虑给我们评分或留下评论，这能帮助更多听众发现我们。你可以在 lennyspodcast.com 找到往期所有节目或了解更多信息。下期见。