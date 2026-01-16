# Brian Tolkin - 双语对照

# Lenny's Podcast: Brian Tolkin (Bilingual Transcript)

---

### [00:00:00] Lenny Rachitsky

**English:**
You've worked at two businesses that have done incredibly well combining product in ops.

**中文翻译:**
你曾在两家非常成功的公司工作过，它们在结合产品（Product）和运营（Ops）方面做得非常出色。

---

### [00:00:03] Brian Tolkin

**English:**
Uber always has this mentality and Opendoor does two of the product operations, twin turbine jet plane where you can fly the plane on one engine for a little bit if you need to, but it's operating most efficiently and effectively if both are working together.

**中文翻译:**
Uber 一直秉持这种理念，Opendoor 也是如此。产品和运营就像是双涡轮喷气式飞机的两个引擎，如果需要，你可以靠一个引擎飞行一会，但只有当两者协同工作时，飞机的运行效率和效果才是最高的。

---

### [00:00:17] Lenny Rachitsky

**English:**
What has having been in ops done to make you a better product leader?

**中文翻译:**
在运营部门工作的经历，是如何让你成为一个更好的产品领导者的？

---

### [00:00:21] Brian Tolkin

**English:**
Gave a really deep understanding of how the business actually works. It's a pretty good foundation for them going on to say, okay, what do we actually want to build in a more scalable technology way.

**中文翻译:**
它让我对业务的实际运作方式有了非常深刻的理解。这为之后思考“好，我们究竟想以一种更具扩展性的技术方式构建什么”打下了非常坚实的基础。

---

### [00:00:31] Lenny Rachitsky

**English:**
Something else I've heard that you're very good at is staying very calm under pressure.

**中文翻译:**
我还听说你非常擅长的一点是，在压力下保持极度的冷静。

---

### [00:00:34] Brian Tolkin

**English:**
I've slept on the floor in China before launching uberPOOL, and when you reflect the stress onto your teams, everybody tenses out. It counterintuitively doesn't produce better outcomes.

**中文翻译:**
在推出 uberPOOL 之前，我曾在中国的办公室睡过地板。当你把压力传递给团队时，每个人都会变得紧张。这在直觉上似乎有用，但实际上并不会产生更好的结果。

---

### [00:00:51] Lenny Rachitsky

**English:**
Today my guest is Brian Tolkin. Brian is currently head of product and design at Opendoor. Before that, he spent nearly five years at Uber where he joined as employee 100. Before Uber had UberX or uberPOOL or any shared rides, he actually started on the ops team at Uber, moved into product, ended up leading product and launch of uberPOOL, and then taking it global. He also started the product operations function at Uber. Before that function was really even a thing, which I didn't know until the chat that we had. In our conversation, Brian shares a ton of lessons about building products with a heavy operational component. Also, how to run great product reviews, how he implements the jobs to be done, framework and Opendoor's successfully.

**中文翻译:**
今天的嘉宾是 Brian Tolkin。Brian 目前是 Opendoor 的产品与设计负责人。在此之前，他在 Uber 工作了近五年，是公司的第 100 号员工。在 Uber 推出 UberX、uberPOOL 或任何拼车服务之前，他其实是从 Uber 的运营团队开始的，后来转到产品部门，最终领导了 uberPOOL 的产品开发和发布，并将其推向全球。他还在 Uber 创立了产品运营（Product Operations）职能，而在那之前，这个职能甚至还不存在，直到我们聊天我才知道这一点。在我们的对话中，Brian 分享了大量关于构建具有重度运营成分的产品的经验。此外，他还分享了如何进行出色的产品评审（Product Review），以及他如何在 Opendoor 成功实施“待办任务”（Jobs to be Done）框架。

---

### [00:01:32] Lenny Rachitsky

**English:**
The story behind Zillow trying to compete with Opendoor failing and then partnering instead. Plus a ton of great stories from the early days of Uber and Opendoor, and so much more. If you enjoy this podcast, don't forget to subscribe and follow it in your favorite podcasting app or YouTube. It's the best way to avoid missing feature episodes and it helps the podcast tremendously. With that, I bring you Brian Tolkin. Brian, thank you so much for being here and welcome to the podcast.

**中文翻译:**
我们还会聊到 Zillow 试图与 Opendoor 竞争但失败，最后转而合作背后的故事。此外还有许多来自 Uber 和 Opendoor 早期阶段的精彩故事，以及更多内容。如果你喜欢这个播客，别忘了在常用的播客应用或 YouTube 上订阅和关注。这是避免错过未来节目的最好方式，也对本节目有巨大的帮助。现在，让我们欢迎 Brian Tolkin。Brian，非常感谢你能来，欢迎来到本播客。

---

### [00:02:00] Brian Tolkin

**English:**
Thank you, appreciate it. Thanks for having me.

**中文翻译:**
谢谢，非常感谢。谢谢你邀请我。

---

### [00:02:02] Lenny Rachitsky

**English:**
First of all, just a huge thank you to Kayvon Beykpour for connecting us, introducing us. He said all kinds of amazingly nice things about you. He also gave me some very hard questions to ask you. I hope you've come prepared.

**中文翻译:**
首先，非常感谢 Kayvon Beykpour 为我们牵线搭桥。他对你赞不绝口。他还给了我一些非常刁钻的问题来问你，希望你已经准备好了。

---

### [00:02:12] Brian Tolkin

**English:**
Terrific. Put me in my hot seat.

**中文翻译:**
太棒了，让我坐上“火山口”吧。

---

### [00:02:14] Lenny Rachitsky

**English:**
Okay, I want to spend a bunch of time talking about product and ops. You started your career in operations. At Uber you actually started on the ops team and you moved into product. You've also worked at both Uber and at Opendoor, which have both huge operational components. I think it's really rare that people, one, see a company scale to the heights of Uber and Opendoor with such a heavy operational component that are still tech companies and also it's really where someone starts an ops and then moves into product and ends up where you are, where your chief product officer, really successful company. So I have a bunch of questions here. Maybe the first is just what has having been in ops done to make you a better product leader? How does that change the way that you operate as a product leader?

**中文翻译:**
好的，我想花点时间聊聊产品和运营。你的职业生涯始于运营。在 Uber，你最初在运营团队，后来转到了产品部门。你工作的 Uber 和 Opendoor 都有极重的运营成分。我觉得这很罕见：第一，看到一家拥有如此重度运营成分的公司能像 Uber 和 Opendoor 那样规模化，且依然保持科技公司的属性；第二，很少有人从运营起步，转到产品，最后达到你现在的高度——成为一家非常成功的公司的首席产品官。所以我有很多问题。第一个问题是：在运营部门的经历如何让你成为一个更好的产品领导者？它如何改变了你作为产品领导者的运作方式？

---

### [00:02:58] Brian Tolkin

**English:**
Starting on the operations side gave a really deep understanding of how the business actually works. You are truly operating it day in and day out and the success of the city is in large part driven by the inputs that you are putting into it every single day on the ground and whether or not there was rain that weekend, which was a nice driver of metrics, but talking to customers every single day like one-on-one onboarding drivers responding to support tickets, there's no centralized support team, there was no closer to the customer, right? And so I think that foundation actually for really understanding what moves the business and being super close to the customer actually is a pretty good foundation for them going on to say, okay, what do we actually want to build in a more scalable technology way?

**中文翻译:**
从运营端开始让我对业务的实际运作有了极深的理解。你真的是日复一日地在操作它，一个城市的成功在很大程度上取决于你每天在地面上的投入，甚至取决于那个周末有没有下雨（下雨是指标增长的一个动力）。每天都要和客户交流，比如一对一地引导司机入驻、回复支持工单。当时没有集中的支持团队，没有人比运营更接近客户了。所以，这种真正理解业务驱动力并极度贴近客户的基础，实际上为后来思考“好，我们究竟想以一种更具扩展性的技术方式构建什么”提供了一个非常好的基石。

---

### [00:03:52] Lenny Rachitsky

**English:**
This episode is brought to you by Pendo, the only all-in-one product experience platform for any type of application. Tired of bouncing around multiple tools to uncover what's really happening inside your product? With all the tools you need in one simple to use platform, Pendo makes it easy to answer critical questions about how users are engaging with your product and then turn those insights into action. Also, you can get your users to do what you actually want them to do. First, Pendo is built around product analytics, seeing what your users are actually doing in your apps so that you can optimize their experience. Next, Pendo lets you deploy in-app guides that lead users through the actions that matter most.

**中文翻译:**
本集节目由 Pendo 赞助。Pendo 是唯一一款适用于任何类型应用程序的全方位产品体验平台。厌倦了在多个工具之间切换来发现产品内部的真实情况吗？Pendo 将你所需的所有工具整合到一个易于使用的平台中，让你轻松回答关于用户如何与产品互动的关键问题，并将这些洞察转化为行动。此外，你还可以引导用户完成你期望的操作。首先，Pendo 围绕产品分析构建，查看用户在应用中的实际行为，以便优化他们的体验。其次，Pendo 允许你部署应用内指南，引导用户完成最重要的操作。

---

### [00:04:31] Lenny Rachitsky

**English:**
Then Pendo integrates user feedback so that you can capture and analyze what people actually want. And the new thing in Pendo, session replays. A very cool way to visualize user sessions. I'm not surprised at all that over 10,000 companies use it today. Visit pendo.io/lenny to create your free Pendo account today and start building better experiences across every corner of your product. PS, you want to take your product led knowhow a step further? Check out Pendo's lineup of free certification courses led by talk product experts and designed to help you grow and advance in your career. Learn more and experience the power of the Pendo platform today at pendo.io/lenny.

**中文翻译:**
接着，Pendo 整合了用户反馈，以便你捕捉和分析人们的真实需求。Pendo 还有一个新功能：会话重播（Session Replays），这是一种非常酷的可视化用户会话的方式。今天有超过 10,000 家公司在使用它，我一点也不觉得奇怪。访问 pendo.io/lenny 立即创建你的免费 Pendo 账户，开始在产品的每个角落构建更好的体验。另外，如果你想进一步提升以产品驱动（Product-led）的专业知识，请查看 Pendo 的一系列免费认证课程，这些课程由顶级产品专家授课，旨在帮助你在职业生涯中成长和进步。立即访问 pendo.io/lenny 了解更多并体验 Pendo 平台的强大功能。

---

### [00:05:09] MUSIC

**English:**
Pendo.

**中文翻译:**
Pendo。

---

### [00:05:15] Lenny Rachitsky

**English:**
This episode is brought to you by Explo, a game changer for customer facing analytics and data reporting. Are your users craving more dashboards, reports and analytics within your product? Are you tired of trying to build it yourself? As a product leader, you probably have these requests in your roadmap, but the struggle to prioritize them is real. Building analytics from scratch can be time-consuming, expensive, and a really challenging process. Enter Explo. Explo is a fully white labeled embedded analytics solution designed entirely with your user in mind. Getting started is easy. Explo connects to any relational database or warehouse and with its low-code functionality, you can build and style dashboards in. Once you're ready, simply embed the dashboard or report into your application with a tiny code snippet. The best part, your end users can use Explo's AI features for their own report and dashboard generation eliminating customer data requests for your support team. Build and embed a fully white labeled analytics experience in days.

**中文翻译:**
本集节目由 Explo 赞助，它是面向客户的分析和数据报告领域的游戏规则改变者。你的用户是否渴望在你的产品中看到更多的仪表板、报告和分析功能？你是否厌倦了尝试自己构建这些功能？作为产品领导者，你的路线图中可能有很多这类需求，但优先级的排序确实很困难。从头开始构建分析功能既耗时又昂贵，而且过程极具挑战性。Explo 应运而生。Explo 是一款完全白标（White-labeled）的嵌入式分析解决方案，完全从用户的角度设计。上手非常简单：Explo 可以连接到任何关系型数据库或仓库，通过其低代码功能，你可以快速构建和美化仪表板。准备就绪后，只需通过一小段代码将仪表板或报告嵌入到你的应用程序中即可。最棒的是，你的最终用户可以使用 Explo 的 AI 功能生成自己的报告和仪表板，从而消除对支持团队的客户数据请求。在几天内即可构建并嵌入完全白标的分析体验。

---

### [00:06:18] Lenny Rachitsky

**English:**
Try it for free at explo.co/lenny. That's E-X-P-L-O/lenny. I've seen that a lot of companies, and this was definitely true to Airbnb, where the product team looks down a little bit on the ops team where they're like, "oh, we're doing things that are going to scale to millions of users. We're doing these things that are going to apply to everyone." There's this ops team over there doing a few things that are going to not scale. They keep asking us for things to build for their one-off ideas. What do you think that product teams often maybe miss or don't understand about the ops teams that would help them see them in a different light?

**中文翻译:**
在 explo.co/lenny 免费试用。我看到很多公司——Airbnb 绝对也是如此——产品团队会有点看不起运营团队，他们觉得：“哦，我们做的事情是要扩展到数百万用户的，我们要做的东西适用于所有人。”而那边的运营团队在做一些无法规模化的事情，还一直要求我们为他们那些一次性的想法开发功能。你认为产品团队通常忽略了或不理解运营团队的哪些方面，如果理解了，能让他们以不同的眼光看待运营？

---

### [00:06:56] Brian Tolkin

**English:**
Yeah, it's a great question and I think Uber always had this mentality and OpenDoor does too of like a twin turbine jet plane where you can fly the plane on one engine for a little bit if you need to, but it's operating most efficiently and effectively if both are working together, and I think that's really true, right? The reality is operations teams, local teams, can iterate faster, can scale talking to customers really much more efficiently, have great qualitative insights, and so if it's seen more as a harmony instead of a competition, I think that's really, really helpful where it's like, okay, how do we get the insights that are happening day in and day out in the field, on the ground, whatever that may be, and help us build better products because of that, right?

**中文翻译:**
这是一个很好的问题。我认为 Uber 一直有这种心态，Opendoor 也是，就像我说的双涡轮喷气式飞机：必要时你可以靠一个引擎飞一会儿，但只有两者协同，效率才最高。事实确实如此。现实情况是，运营团队、本地团队迭代速度更快，与客户沟通的效率更高，拥有极佳的定性见解。所以，如果把这看作是一种和谐共生而不是竞争，会非常有帮助。关键在于：我们如何获取那些每天在实地、在现场产生的见解，并利用它们来构建更好的产品？

---

### [00:07:50] Brian Tolkin

**English:**
Like a PM sitting in San Francisco can't be in Opendoor's case 50 markets, walking houses every single day in Uber's case, whatever, a thousand cities understanding the nuances of safety in South America and it's just not possible, but what you can do is foster a really good relationship and a really good feedback loop of how people who do deeply understand those things can help give insights. Now is actually the birth of product operations was that insight as well.

**中文翻译:**
比如一个坐在旧金山的产品经理，不可能像 Opendoor 那样每天在 50 个市场里实地看房，也不可能像 Uber 那样在几千个城市里理解南美洲安全问题的细微差别，这根本不现实。但你能做的是培养良好的关系和反馈闭环，让那些深度了解这些情况的人提供见解。事实上，“产品运营”（Product Operations）这一职能的诞生正是基于这种洞察。

---

### [00:08:22] Lenny Rachitsky

**English:**
Can you say more on that?

**中文翻译:**
能多讲讲这个吗？

---

### [00:08:23] Brian Tolkin

**English:**
Yeah, sure. So, sorry, I should probably define what product operations was. At Uber it was basically this notion that we had centralized, this was later in my career at Uber, but we had a centralized product team building stuff mostly in San Francisco, not strictly through the Ross, but at this point around the world, but mostly in San Francisco and then we had a very globally distributed operations team, and there was a bidirectional feedback loop that wasn't super strong and that feedback loop was basically when the EPD teams in San Francisco built new features, how do we effectively put it in global markets and then how do we effectively get input from global markets to better build features. And so one solution to that problem, our solution at the time was to start up a new function called product operations who had accountability and reported into operations but physically sat with and operated much like a member of the product team to help solve that.

**中文翻译:**
好的。抱歉，我应该先定义一下什么是产品运营。在 Uber，这基本上是这样一种概念：我们有一个集中的产品团队（这是在我 Uber 生涯的后期），主要在旧金山构建产品；同时我们有一个分布在全球的运营团队。当时双向反馈闭环并不强。这个闭环的核心是：当旧金山的 EPD（工程、产品、设计）团队开发新功能时，我们如何有效地将其推向全球市场？反过来，我们如何有效地从全球市场获取反馈以更好地构建功能？为了解决这个问题，我们当时的方案是成立一个名为“产品运营”的新职能，他们向运营部门汇报并负责，但在物理位置上与产品团队坐在一起，运作方式也像产品团队成员一样。

---

### [00:09:23] Lenny Rachitsky

**English:**
Is that maybe the first time there's a... Did you invent product operations as a function?

**中文翻译:**
这难道是第一次……是你发明了“产品运营”这个职能吗？

---

### [00:09:28] Brian Tolkin

**English:**
I don't think so because at the time, I believe Google had a function, I can't remember what Google called it was something slightly different, but I met with a few folks who had been in similar type roles at Google and a couple other places, so I don't take credit for certainly for inventing IT and other people have actually dabbled in this model at Uber before me there was just a formalization of it and our actual building out of the organization, et cetera.

**中文翻译:**
我不这么认为。因为当时我相信 Google 已经有类似的职能了，我不记得 Google 怎么称呼它，可能略有不同。我见过几个在 Google 和其他地方担任类似角色的人。所以我肯定不会把发明它的功劳据为己有。在 Uber，我之前也有人尝试过这种模式，我只是将其正式化并真正建立起了这个组织。

---

### [00:09:54] Lenny Rachitsky

**English:**
Did none of that. Sounds like you basically helped make it a thing. I know you're being very modest, I think. Coming back to your point about decentralized operations teams, something I've read is that search pricing came out of one GM and a market just testing, emailing all the drivers, hey, we're going to give you extra if you drive on Saturday night. Is that true?

**中文翻译:**
听起来你基本上是促成这件事的人。我觉得你太谦虚了。回到你关于去中心化运营团队的观点，我读到过一件事：动态定价（Surge Pricing）源于一个城市的总经理（GM）在市场中做测试，他给所有司机发邮件说：“嘿，如果你周六晚上出来开车，我们会给你额外奖励。”这是真的吗？

---

### [00:10:15] Brian Tolkin

**English:**
That would've been probably a little bit before my time, but that being said, one thing that is true is that surge pricing for actually quite sometimes all of 2012, certainly 2013 probably, I don't know when we necessarily switched, was very much a human in the loop system or a very manual system where GMs in every city would control basically the parameters in which surge would operate and so much of the time that would need, for example, Monday through Friday, there would be no search, it couldn't flip on, and then Friday nights and Saturday nights it would flip on from whatever you set, 7:00 PM to 3:00 AM and the cap was X, whatever the cap was. And then within those parameters the algorithm would optimize for what the price was. But yeah, GMs controlled whether it was on or off and what geographies were surging.

**中文翻译:**
那可能是在我加入之前的事了。但有一点是真的：在相当长的一段时间里（整个 2012 年，肯定也包括 2013 年的大部分时间，我不确定具体什么时候切换的），动态定价在很大程度上是一个“人工干预”的系统，或者说非常手动的系统。每个城市的总经理基本上控制着动态定价运行的参数。例如，周一到周五不开启；周五和周六晚上从晚上 7 点到凌晨 3 点开启，上限设为 X。在这些参数范围内，算法会优化具体价格。但是，开关以及哪些地理区域开启动态定价，是由总经理控制的。

---

### [00:11:25] Lenny Rachitsky

**English:**
Wow, I didn't know that. Was that out of we believe we are better than the algorithms or we just don't have time to make them amazing yet, so we're just going to help them along?

**中文翻译:**
哇，我以前不知道。这是因为我们觉得自己比算法更聪明，还是因为我们还没时间把算法做得足够完美，所以只能先人工辅助一下？

---

### [00:11:25] Brian Tolkin

**English:**
Yeah, I think it was probably a function of a bunch of stuff, one of which is like, hey, this is a fairly new concept and it's powerful and dangerous and so let's make sure we understand what's happening. The second is this belief that local city teams know their cities best and so you might know that an event is happening, a baseball game gets out and it's like, oh, I know that this baseball game's going to get out at 10:00 PM so I'm going to set surge at 9:45 and the algorithm may not be able to pick that up. And then the third is the technical constraint of nowadays clearly it's all automated, but it's really hard to build a fully dynamic, always on geospatially aware pricing system and not just a little bit of time.

**中文翻译:**
我觉得是多种因素共同作用的结果。首先，这是一个相当新的概念，它既强大又危险，所以我们要确保理解发生了什么。其次，我们相信本地城市团队最了解自己的城市。你可能知道有个活动，比如一场棒球赛要结束了，你知道晚上 10 点散场，所以你在 9:45 设置动态定价，而算法当时可能捕捉不到这种信息。第三是技术限制，虽然现在全是自动化的，但在当时，要构建一个完全动态、始终开启且具备地理空间感知能力的定价系统是非常困难的，需要大量时间。

---

### [00:12:17] Lenny Rachitsky

**English:**
That makes sense. I feel like you're full of wild stories from your time at Uber. Is there one that comes to mind of just, I think you helped scale in China, uberPOOL?

**中文翻译:**
明白了。我觉得你在 Uber 的那段日子一定有很多疯狂的故事。有没有哪个故事让你印象深刻？我记得你曾帮助在中国推广 uberPOOL？

---

### [00:12:17] Brian Tolkin

**English:**
Yeah.

**中文翻译:**
是的。

---

### [00:12:29] Lenny Rachitsky

**English:**
Maybe that's the one. I don't know. Can you share wild story from early Uber days?

**中文翻译:**
也许就是那个故事。你能分享一个 Uber 早期的疯狂故事吗？

---

### [00:12:31] Brian Tolkin

**English:**
Yeah, so in the early days of Uber, one fun story is obviously UberX is a random mainstream product but has a funny, silly name, UberX. This product in the early days was going to be all hybrid and had a bunch of different potential names. I was not personally driving this, this was someone else on the operations team, but they built the model for what this product could be and there's no name for it yet, so it was going to be a placeholder. So what do you put in some placeholder? X. So UberX and then the company was moving quickly enough, the product got the green light, it launched, and here we are, I don't know, 12 years later, 11 years later, whatever it is and UberX is the name that stuck.

**中文翻译:**
好的。在 Uber 早期，一个有趣的故事是关于 UberX 的。它现在是一个主流产品，但名字有点奇怪，叫 UberX。在早期，这个产品计划全部使用混合动力车，当时有很多备选名字。我个人没有参与这个决策，是运营团队的另一个人做的。他们构建了这个产品的模型，但还没想好名字，所以用了一个占位符。占位符用什么呢？X。于是就叫 UberX。后来公司发展太快，产品获批并发布了，结果 11、12 年后的今天，UberX 这个名字就这么沿用下来了。

---

### [00:13:21] Lenny Rachitsky

**English:**
That is hilarious. I love it. So it was a placeholder. It's like many products start that way where they're like, this is just the temporary name, and they're like, okay, I guess everyone just knows it this way now we're going to stick with it.

**中文翻译:**
太搞笑了。我喜欢这个故事。原来只是个占位符。很多产品都是这样开始的，原本只是个临时名称，结果大家都习惯了，就这么定下来了。

---

### [00:13:31] Brian Tolkin

**English:**
Exactly. It's too expensive to change and rebrand at this point.

**中文翻译:**
没错。到现在这个阶段，更改名字和重新品牌化的成本太高了。

---

### [00:13:34] Lenny Rachitsky

**English:**
That's an awesome story.

**中文翻译:**
这故事太棒了。

---

### [00:13:36] Brian Tolkin

**English:**
One that is good about scaling Uber uberPOOL in China is we were launching Uber pool in China and this was going to be, China at the time was pretty big for Uber, but uberPOOL was not there yet, and so we were going to launch. And myself and a few other folks were in Chengdu China, which is the first Chinese market that we were launching uberPOOL in and we were going to be on the ground took to launch. We wanted to go live at, I believe it was 6:00 AM for rush hour on, I don't remember the day, but whatever, Monday morning, and so we're there over the weekend getting ready to set up and at the same time we were doing some data center testing. And so we flipped on all the testing infrastructure and thought it was going to work and nothing works, and the matching algorithm just isn't working and we're like, oh my god, now it's whatever, 5:00 PM the day before we're supposed to go live, 6:00 PM, 7:00 PM okay, let's get on the phone with the US, try and figure out what's going on.

**中文翻译:**
关于在中国推广 uberPOOL，有一个很好的故事。当时我们要在中国推出 uberPOOL，中国市场对 Uber 来说已经很大了，但还没有拼车服务。我和其他几个人在成都，那是我们推出 uberPOOL 的第一个中国城市。我们计划在周一早上 6 点的高峰时段上线。我们周末就在那里准备，同时进行数据中心测试。我们开启了所有的测试基础设施，以为没问题，结果什么都不行，匹配算法根本不工作。我们当时想：“天哪，现在已经是上线前一天的下午 5 点、6 点、7 点了。”于是我们赶紧给美国总部打电话，试图弄清楚发生了什么。

---

### [00:14:43] Brian Tolkin

**English:**
I remember I slept about 30 minutes that night between 2:00 and 3:00 AM being like, okay, well, we have to go live at 6:00 AM I think there was some press around it. We were planning on going live and I think we got everything finally working at probably about five 30 or six in the morning and launched just in the nick of time. And I'll never forget, we launched, it was great, we monitored, everything was good, and then we walked out for breakfast at 7:30 in the morning. Everyone sleep depressed, no one slept all night and we got these pancakes street food things and I have to imagine they were not that good, but in my mind it was the best meal I've ever had in my life.

**中文翻译:**
我记得那天晚上我只在凌晨 2 点到 3 点之间睡了 30 分钟。我想：“好吧，我们必须在早上 6 点上线。”当时还有媒体关注。我们最终在早上 5:30 或 6:00 左右让一切恢复正常，在最后一刻成功上线。我永远不会忘记，上线后一切顺利，我们监控了一会儿，然后在早上 7:30 出去吃早餐。每个人都极度缺觉，整晚没睡。我们买了些路边的煎饼，我想象中它们可能没那么好吃，但在我当时的脑海里，那是这辈子吃过最美味的一餐。

---

### [00:15:25] Lenny Rachitsky

**English:**
It's like a meal after a marathon or a big hike.

**中文翻译:**
就像跑完马拉松或长途跋涉后的那一餐。

---

### [00:15:31] Brian Tolkin

**English:**
Exactly. Yeah, exactly.

**中文翻译:**
没错，正是如此。

---

### [00:15:32] Lenny Rachitsky

**English:**
Everything's so delicious. This comes up a lot of just these moments that are so incredibly stressful and hard and leap deprived end up being the best memories and the best stories to tell and things you look back at fondly. It's so weird how human nature is like that.

**中文翻译:**
一切都那么美味。这种情况经常发生：那些极度压力、艰难、睡眠不足的时刻，最终反而成了最好的回忆和最精彩的故事，让你日后深情回味。人性就是这么奇怪。

---

### [00:15:46] Brian Tolkin

**English:**
Yeah, I mean another one more recent for Opendoor was when COVID hit, physically we buy and sell homes, and so we were physically going into people's homes and suddenly March 2020 going into people's homes was not something people were comfortable with. And you look at the real estate data coming out of China at the time and it looked like coming to a standstill, and so we actually turned off the core business and we stopped buying homes for a few months. hey, we can't go in and we don't know if anyone's going to be buying any homes, and so what do we do? And we took those few months and then came out the other side and had virtualized the whole process. Then it was pretty stressful, right, because looking at a business that relies on going into people's homes and suddenly you can't do that anymore, what do you do? So, again, a fond memory to look back on a very stressful time in the moment where it feels very, very difficult.

**中文翻译:**
是的。最近在 Opendoor 也有一个例子。新冠疫情爆发时，我们的业务是实地买卖房屋，这意味着我们要进入人们的家中。突然间，在 2020 年 3 月，人们不再愿意让陌生人进屋了。看看当时中国的房地产数据，整个行业似乎都停滞了。所以我们实际上关闭了核心业务，停止买房好几个月。我们不能进屋，也不知道是否还有人买房，该怎么办？我们利用那几个月的时间，最终实现了整个流程的虚拟化。当时压力非常大，因为你的业务依赖于进入实地，突然间行不通了。所以，这又是一个如今回想起来很美好，但在当时感觉极其艰难的时刻。

---

### [00:16:51] Lenny Rachitsky

**English:**
Just since you mentioned Opendoor, I think many people have heard of Opendoor. Maybe just give a quick explanation of what Opendoor does for people that aren't exactly sure.

**中文翻译:**
既然你提到了 Opendoor，我想很多人都听说过它。能不能为那些不太确定的听众简单解释一下 Opendoor 是做什么的？

---

### [00:16:58] Brian Tolkin

**English:**
So we're a digital platform to buy and sell real estate. The core product today is a seller focused product where people can go online, enter some information about their home, and we'll make an all cash offer to be able to sell simplicity and certainty. So the product really works for people who want something that is certain and simple and easy. I don't know if you've ever sold a home, but it can be a very, very, very successful difficult process with showings and open houses and how to price it and will it sell and all of that stuff. And so we offer basically a way to skip the whole process.

**中文翻译:**
我们是一个买卖房地产的数字平台。目前的核心产品是面向卖家的：人们可以在线输入房屋信息，我们会提供全现金报价，从而提供简单性和确定性。所以这个产品非常适合那些追求确定、简单和便捷的人。我不知道你有没有卖过房子，但那可能是一个非常艰难的过程，涉及带看、开放日、定价、是否卖得掉等等。我们基本上提供了一种跳过整个繁琐流程的方法。

---

### [00:17:41] Lenny Rachitsky

**English:**
So you basically sell your house to Opendoor and it's just like, cool, done, move on.

**中文翻译:**
所以你基本上是把房子卖给 Opendoor，然后就搞定了，直接搬走。

---

### [00:17:45] Brian Tolkin

**English:**
You picked your closing date, you move out when you want. Yeah, there's no hassle.

**中文翻译:**
你自己选成交日期，想什么时候搬走就什么时候搬走。是的，没有任何麻烦。

---

### [00:17:53] Lenny Rachitsky

**English:**
Sounds amazing. I want that. Coming back to ops and product, just to close this thread again, you've worked at two businesses that have done incredibly well combining product and ops. Are there any just broad lessons you've taken away from how to make these two teams and functions work well together and to build a business that's very ops heavy but also offer driven?

**中文翻译:**
听起来太棒了，我也想要。回到运营和产品的话题，为了结束这个话题，你曾在两家将产品和运营结合得极好的公司工作过。关于如何让这两个团队和职能良好协作，以及如何构建一个运营极重但又由产品驱动的业务，你有什么普适的经验吗？

---

### [00:18:15] Brian Tolkin

**English:**
The first one we touched on, which is a, there's just got to be mutual respect. Both functions have their time and their place and their skillsets, and you just don't build big businesses of this type without respecting the fact that that both need to exist. The second, particularly on the product and engineering side, is really understanding where and how the technology leverage comes from the business and then being really focused on making sure generally, especially in the earlier days, you are more limited on the technical resourcing side than you might be on the operational resourcing side. And so how do you be really focused on where to invest your time, effort, and energy technically, which is why most of the engineering effort for Uber was on the dispatching system and the pricing system. That's just where the leverage was at the time, given the scarcity of resources.

**中文翻译:**
第一点我们提到过，就是必须相互尊重。两个职能都有其存在的时机、地位和技能要求。如果不尊重两者必须共存的事实，你就无法建立这种类型的大型业务。第二点，特别是对于产品和工程端，要真正理解技术的杠杆作用（Leverage）在业务的哪个环节，然后保持专注。通常，尤其是在早期，技术资源比运营资源更稀缺。所以，你必须非常专注于在技术上投入时间、精力和能量的地方。这就是为什么 Uber 早期大部分工程力量都花在派单系统和定价系统上，因为在资源匮乏的情况下，那是杠杆作用最大的地方。

---

### [00:19:11] Brian Tolkin

**English:**
And so I think the second one is being really intentional about where those techs are and then being really forthcoming and saying, hey, that means all these other places where yes, it can make things easier, more efficient, et cetera, et cetera. We are okay not investing in right now, and that needs to be an explicit decision and very transparent. But then the last bit I would say is a deep understanding that the real world has entropy and it's hard and it's messy for us at Opendoor, we go into homes, someone may not be home, scheduling may be off, at Uber the driver may cancel the radio GPS. All these things happen, right? Computers are deterministic, but humans aren't, right? And so building products that have a little bit more flex or a little bit more fail safes in case those things happen becomes a little bit more of a paramount.

**中文翻译:**
所以第二点是，要有意识地决定技术投入点，并坦诚地沟通：这意味着其他地方虽然也可以变得更简单、更高效，但我们现在决定不投入。这必须是一个明确且透明的决定。最后一点是，要深刻理解现实世界是有“熵”的，它是困难且混乱的。在 Opendoor，我们进屋时可能主人不在家，预约可能出错；在 Uber，司机可能取消订单，GPS 可能失灵。这些都会发生。计算机是确定性的，但人类不是。因此，构建具有更多灵活性或更多故障保险（Fail-safes）的产品，以应对这些意外情况，就变得至关重要。

---

### [00:20:08] Brian Tolkin

**English:**
One other thing, the last thing I would say is I think that the companies evolve as well. So what I talked about at the beginning of Uber being very focused from an engineering and product side on the dispatching system and the pricing system, obviously over time not to evolve now it centralized all of these functions as the company got bigger and more mature and scale and optimization started to be more important and expansion and that Petri dish of trying new stuff and the tools got better and the tech got easier and there was more internal infrastructure. And so over time things can start one way and shift over time as the business needs.

**中文翻译:**
还有一点，我想说公司也是在进化的。我刚才提到 Uber 早期在工程和产品上非常专注于派单和定价系统，但随着公司变大、变熟，规模化和优化变得更重要，这些职能显然会演变并趋于集中。随着扩张，尝试新事物的“培养皿”变多，工具变好，技术变简单，内部基础设施也更完善。所以，事情可能以一种方式开始，并随着业务需求随时间而转变。

---

### [00:20:52] Lenny Rachitsky

**English:**
Let's actually spend more time there. You keep saying things that make me want to dig deeper. So at Airbnb we went through the same thing where there was all these local ops teams driving supply, finding homes, bringing out the platform, and then there's this tipping point where the product in organic growth or word of mouth ended up driving more and then orders of magnitude more. So there was no need for these folks to spend time doing these things. Can you just maybe share an example, either we Opendoor, when you talk about there's a time and a place and a skillset for ops, how that evolved? What was the team doing initially and then what did they end up doing as things grew?

**中文翻译:**
让我们在这里多花点时间。你说的内容总让我忍不住想深挖。在 Airbnb，我们也经历过同样的过程：最初有很多本地运营团队在驱动供应、寻找房源、推广平台。然后到了一个临界点，产品本身的有机增长或口碑传播开始带来更多流量，甚至是几个数量级的增长。于是，就不再需要这些人花时间做那些事了。你能分享一个例子吗？比如在 Opendoor，当你谈到运营有其时机和技能要求时，它是如何演变的？团队最初在做什么，随着业务增长，他们最终又转去做什么了？

---

### [00:21:25] Brian Tolkin

**English:**
Yeah, I mean, maybe a very easy good example to pick just one part of the Uber process in the early days is at small scale, actually back when it was Uber black drivers, every driver was individually onboarded in a 90 minute to a two-hour in-person in the office onboarding with deep setting of expectations. The next version of that... So that's obviously very ops driven. The next version of that is a small classroom type setting of three or five or six drivers at a given time. Also, very ops driven. And then as we got into more mass market products like Uber Taxi or UberX, it was like, okay, maybe 20 or 30 at a time. So now it's a little bit bigger classroom setting. And we said, okay, let's make a video. Instead of giving verbally the same presentation, let's just make an onboarding video and that was the next set of scale, but now suddenly we have a different problem, which is okay, you have to validate all of these credentials.

**中文翻译:**
好的。一个非常简单且典型的例子是 Uber 早期的司机入驻流程。在规模较小时，也就是只有 Uber Black 司机的时代，每个司机都要在办公室接受 90 分钟到两小时的一对一入驻培训，深度设定预期。这显然是纯运营驱动的。下一个版本是小班制，一次培训 3 到 6 名司机，依然是运营驱动。当我们进入 Uber Taxi 或 UberX 等大众市场产品时，一次可能要培训 20 或 30 人，教室变大了。接着我们想：“好，我们拍个视频吧。”与其口头重复同样的演示，不如做个入驻视频。这是规模化的下一步。但突然间我们遇到了新问题：你必须验证所有这些证件。

---

### [00:22:32] Brian Tolkin

**English:**
So most driver's license who they are, all that stuff at one person, easy at three to four at a time, easy, 10 at a time, a little more challenging but fine. At 20 at a time, okay, you're starting to run up onto it now you fast-forward six months and you're doing a thousand a week or whatever, suddenly your system breaks and it's like, okay, we have reached the point where operational system improvements is no longer viable. So, you say, okay, we have gone from the iteration stage to the scale stage and technology is uniquely good at scaling. So now we say, okay, instead of having a bunch of folks around the world taking pictures of driver's licenses and validating and doing all that stuff, how do we integrate with some type of OCR technology or auto recognition of driver's licenses that feeds to a system that knows what a driver's license is or can do automatic validation and suddenly you've done two things.

**中文翻译:**
验证驾照、身份信息等，一个人时很简单，三四个人也行，10 个人有点挑战但还凑合。20 个人时就开始吃力了。快进六个月，如果你每周要处理一千人，系统就会崩溃。这时你会意识到：运营层面的改进已经行不通了。于是你说：“好，我们已经从迭代阶段进入了规模化阶段，而技术在规模化方面具有独特优势。”现在我们不再让全球各地的员工去拍驾照照片并人工验证，而是集成某种 OCR（光学字符识别）技术或驾照自动识别技术，将其接入一个能识别驾照并自动验证的系统。突然间，你完成了两件事。

---

### [00:23:27] Brian Tolkin

**English:**
One, you've scaled your system, and two, you've just created a ton of time for what at the time was probably dozens if not hundreds of people running these onboarding sessions all over the country, the world at the time to do other stuff. And so now you can level that up and say, okay, do we do more analytics? Do we do more figure out the next process that needs optimization or whatever the case may be in that virtuous cycle just continues.

**中文翻译:**
第一，你实现了系统的规模化；第二，你为当时全国乃至全球成百上千名负责入驻培训的员工节省了大量时间，让他们可以去做别的事。现在你可以提升层次，比如：“我们是否可以做更多分析？我们是否可以找出下一个需要优化的流程？”这种良性循环就这样持续下去。

---

### [00:23:53] Lenny Rachitsky

**English:**
The way I like to think about this is do things that don't scale and then scale the things that you're doing. That's the phrase I always come back to.

**中文翻译:**
我喜欢这样思考：先做那些无法规模化的事（Do things that don't scale），然后再把你正在做的事规模化。这是我经常提到的一句话。

---

### [00:23:58] Brian Tolkin

**English:**
Exactly.

**中文翻译:**
没错。

---

### [00:24:00] Lenny Rachitsky

**English:**
This reminds me of a hot take that previous podcast guest shared in a newsletter post Casey Winters. He talked about that operations is usually, and it's a hot take, that operations is a sign of inefficiency and over time your job is to squeeze that away and make it product software as much as possible. Doesn't mean you always get there. Thoughts?

**中文翻译:**
这让我想起之前的一位嘉宾 Casey Winters 在通讯文章中分享的一个犀利观点。他说运营通常是低效的标志，随着时间的推移，你的工作就是尽可能地消除运营，将其转化为产品软件。虽然不一定总能完全实现。你怎么看？

---

### [00:24:23] Brian Tolkin

**English:**
Yeah, I actually don't. Fundamentally, it depends on what the operations is, but I don't fundamentally disagree, but I think that the right lens to think about it is... And then those folks can move on to the next challenge. And so there's always another hill to climb. And so I think that was one of the things at Uber and Opendoor where there's this culture of on the ground experimentation that's really helpful where we were just talking about driver onboarding may now be solved with technology so you have a few extra hours a day. How do we get better at optimizing the UberX system? How do you start tinkering with food delivery? How do you start thinking about higher capacity vehicles? How do you think about better feedback loop for those manual surge pricing toggles that we talked about? So I generally agree it just generally free across and solve more problems.

**中文翻译:**
其实我并不完全反对。从根本上说，这取决于运营的具体内容，但我认为正确的视角是……让这些人能够转向下一个挑战。总有另一座山要爬。我认为在 Uber 和 Opendoor，有一种非常有益的“实地实验”文化。就像我们刚才说的，司机入驻现在可以用技术解决了，所以你每天多出了几个小时。那么，我们如何更好地优化 UberX 系统？如何开始尝试外卖业务？如何考虑高容量载具？如何为我们讨论过的手动动态定价开关建立更好的反馈闭环？所以我大体上同意，这通常是为了释放资源去解决更多问题。

---

### [00:25:21] Lenny Rachitsky

**English:**
It feels like a big part of this is making sure the operations teams understand there's more opportunity, even if this ends up being automated, your job is not going to go away. We're going to find something new to try and experiment and do things that don't skip.

**中文翻译:**
感觉很大一部分工作是确保运营团队明白，即使某些环节被自动化了，机会依然很多，你的工作不会消失。我们会寻找新的事物去尝试、去实验，去做那些无法规模化的事。

---

### [00:25:34] Brian Tolkin

**English:**
Yep.

**中文翻译:**
是的。

---

### [00:25:34] Lenny Rachitsky

**English:**
Awesome. Okay. Going a completely different direction.

**中文翻译:**
太棒了。好，我们换个完全不同的方向。

---

### [00:25:37] Brian Tolkin

**English:**
Great.

**中文翻译:**
好的。

---

### [00:25:38] Lenny Rachitsky

**English:**
I hear you're very good at product reviews.

**中文翻译:**
我听说你非常擅长主持产品评审（Product Reviews）。

---

### [00:25:40] Brian Tolkin

**English:**
Okay.

**中文翻译:**
好吧。

---

### [00:25:41] Lenny Rachitsky

**English:**
A few people told me this. I'm curious how you set up a product review and any things you've learned, any tips for how to run an effective product review?

**中文翻译:**
好几个人跟我提过。我很好奇你是如何设置产品评审的，你学到了什么，或者有什么运行高效产品评审的技巧？

---

### [00:25:48] Brian Tolkin

**English:**
That's very whoever mentioned that. But yes, big fan of doing them actually in particular to maybe bridge the conversations in companies that have ops driven cadences or start out very ops driven because the cadences can sometimes be different. And so the operational cadences that you might have something like a WVRA weekly business review may not be conducive to always picking your head up and saying like, Hey, where's the product going on a slightly longer timeframe. And so I think product reviews in general for all companies are probably really helpful, but actually in particular for some of the product and operations led companies. In terms of things I've learned, I think being really intentional about what the goals are, I think it's okay to say that there are two goals, a goal of accountability and inform to an audience.

**中文翻译:**
感谢提到这件事的人。是的，我非常推崇产品评审，特别是在那些运营驱动或以运营起家的公司里，因为运营的节奏和产品的节奏往往不同。运营节奏（比如 WBR 周度业务回顾）可能不利于你抬起头来思考：“嘿，从稍长的时间跨度来看，产品的发展方向是什么？”所以我认为产品评审对所有公司都有帮助，尤其是对产品和运营并重的公司。至于我学到的东西，我认为明确目标非常重要。我认为可以有两个目标：一是问责（Accountability），二是向受众通报信息。

---

### [00:26:43] Brian Tolkin

**English:**
But also most importantly, I think this is the primary goal is to help make the product better, to help the teams think through a problem and to have that, again, back to our earliest conversation, be a very intellectual conversation about the work and how to make the product better and not super scary. Product reviews hopefully are not feeling like firing squads. That's a scary environment to be in and not necessarily one that's conducive to how do we make the product better. Obviously sometimes the conversations have to get a little intense, but in general that's what we're shooting for is something that helps the team go back and think through how to make the product better.

**中文翻译:**
但最重要的是，我认为首要目标是帮助把产品做得更好，帮助团队深入思考问题。回到我们最初的谈话，这应该是一场关于工作以及如何改进产品的极具智力深度的对话，而不是让人感到害怕。希望产品评审不要让人觉得像是在面对“行刑队”。那种恐惧的环境不利于思考如何改进产品。当然，有时对话必须变得激烈一点，但总的来说，我们的目标是帮助团队回去思考如何让产品变得更好。

---

### [00:27:24] Lenny Rachitsky

**English:**
So the two goals you try to communicate for your product reviews, accountability slash informing people what's happening, but also just like we are here to make the product better and setting that context. Yep. Is there anything you'd do specifically to make it not feel like a firing squad? Like you're coming in here to be attacked and criticized? Do you set context at the beginning of the meeting? Is this just a part of the culture?

**中文翻译:**
所以你试图传达的两个目标是：问责/通报进展，以及“我们是为了让产品更好”。为了让它不像“行刑队”（即感觉被攻击和批评），你会做些什么特别的事吗？比如在会议开始时设定背景？还是说这纯粹是文化的一部分？

---

### [00:27:43] Brian Tolkin

**English:**
Yeah, I think definitely part of the culture, but also I am a firm believer in general that the people closest to the problems also have the best context to solve that problem. And so as a more senior voice in the room, often the job is probing, asking questions, throwing out ideas in a way that says like, hey, this is an idea. This is not a mandate, this is a thought. And if there's context missing that would inform the product direction, then providing that context in not a question asking sense, but hey, this is context that you might not be aware of. And so I think it's all in how you show up as a leader and what that looks like in terms of probing and pushing the team on dimensions that they may not be thinking about. And then understanding that the team is bringing a perspective that you don't have, which is they think about this problem 40, 50, 60 hours a week, and you might think about this problem three hours a week. So you bring them a breath, the team brings a depth in haven't been there yet.

**中文翻译:**
是的，这绝对是文化的一部分。但我坚信，最接近问题的人通常拥有解决该问题的最佳背景信息。因此，作为房间里资历较深的人，我的工作通常是探究、提问、抛出想法，并明确表示：“嘿，这只是个想法，不是指令。”如果缺失了某些影响产品方向的背景信息，我会提供这些信息，不是以提问的方式，而是说：“嘿，这是你可能不知道的一些背景。”所以，这取决于你作为领导者如何表现，如何探究并推动团队去思考他们可能忽略的维度。同时要意识到，团队带来了你所不具备的视角：他们每周花 40、50 甚至 60 小时思考这个问题，而你可能每周只花 3 小时。你带来的是广度，团队带来的是深度。

---

### [00:28:49] Lenny Rachitsky

**English:**
I don't know if you heard Dharmesh Shah's episode or his thing on flash tags. Have you seen this?

**中文翻译:**
我不知道你有没有听过 Dharmesh Shah 的那一集，或者他关于“闪存标签”（Flash Tags）的理论？你看过吗？

---

### [00:28:54] Brian Tolkin

**English:**
I have not, no.

**中文翻译:**
没有，还没看过。

---

### [00:28:55] Lenny Rachitsky

**English:**
Okay. He has a whole system. So you talked about how as a leader you want people to not take everything you tell them as feedback as I need to do this. So he has a whole set of hashtags that communicate how important this is to him from hashtag FYI to suggestion, to a plea.

**中文翻译:**
好。他有一套完整的系统。你刚才提到，作为领导者，你不希望人们把你说的每一句话都当成“我必须这么做”的反馈。所以他有一整套标签来传达重要程度，从 #仅供参考（FYI）到 #建议（Suggestion），再到 #恳求（Plea）。

---

### [00:29:13] Brian Tolkin

**English:**
Yes.

**中文翻译:**
是的。

---

### [00:29:14] Lenny Rachitsky

**English:**
A plea to you.

**中文翻译:**
对你的恳求。

---

### [00:29:17] Brian Tolkin

**English:**
This was actually explained to me. I don't think I've seen the original source, so I'll go back and watch it, but this was explained to me as I'm actually a big fan. I think that's great.

**中文翻译:**
其实有人跟我解释过这个。虽然我没看过原始出处（我会回去看的），但我非常喜欢这个主意。我觉得太棒了。

---

### [00:29:26] Lenny Rachitsky

**English:**
Yeah, just get everyone on the same page. Okay. Maybe one last question here. Who do you try to invite to product reviews? Do you have any frameworks and ways of thinking of who to invite, who not to invite?

**中文翻译:**
是的，就是让大家达成共识。好，关于这个话题最后一个问题：你通常会邀请谁参加产品评审？你有什么框架或思考方式来决定邀请谁、不邀请谁吗？

---

### [00:29:36] Brian Tolkin

**English:**
Yeah, good question. We, I would say have oscillated over time, but in general, big subscribers of the best conversations happen when they're relatively small, so try and keep it under 10. Could be wide distribution of the document. The artifacts created are actually really powerful and they're powerful for the whole team to understand. And secret power is they're very powerful for new people who are onboarding to be like, here are the last 20 product reviews, you'll get a pretty good idea of what's going on. But generally the conversation itself try and be relatively tight. We try to keep it under 10.

**中文翻译:**
好问题。我们的做法随时间有所波动，但总的来说，我们坚信最好的对话发生在规模较小的群体中，所以尽量控制在 10 人以下。文档可以广泛分发。评审产生的“产出物”（Artifacts）其实非常强大，有助于整个团队理解。还有一个隐藏的好处：对于新入职的人来说，看一看过去 20 次产品评审记录，就能很快了解现状。但对话本身，我们尽量保持精简，控制在 10 人以内。

---

### [00:30:15] Lenny Rachitsky

**English:**
And these artifacts, you mean the recordings of the meeting that people can watch or?

**中文翻译:**
你说的这些“产出物”，是指会议录像还是？

---

### [00:30:20] Brian Tolkin

**English:**
Yeah. Or just the document depends on what the company culture is, whether you want to record it or just have the document either way.

**中文翻译:**
是的，或者是文档。这取决于公司文化，是想录音录像还是只保留文档，两种方式都可以。

---

### [00:30:26] Lenny Rachitsky

**English:**
And then is there some specific cadence you operate on? Is it like a weekly product review that people can sign up for? Does every team, how do you like to set this up the cadence?

**翻译:**
那么有没有特定的节奏？是每周一次、大家可以报名的产品评审吗？每个团队都要参加吗？你喜欢如何设置这种节奏？

---

### [00:30:35] Brian Tolkin

**English:**
Yeah, obviously it scales are with the size of the company. For us right now, what's working well is signup cadence. We have two slots a week that anyone can sign up for as their product area needs it. And then if there's something that we would love to see that we haven't seen in a bit, we do a little bit of all in telling to make sure that the work is generally cycling through on a quarterly basis.

**中文翻译:**
是的，这显然会随公司规模而变化。对我们目前来说，效果很好的是“报名制”。我们每周有两个时段，任何人都可以根据其产品领域的需求报名。如果我们有一段时间没看到某个项目，我们会主动要求一下，以确保所有工作基本上每季度都能轮转评审一次。

---

### [00:30:59] Lenny Rachitsky

**English:**
This episode is brought to you by Attio. A radically new type of CRM. There's a world where your CRM is powerful, easily configured, and deeply intuitive. Attio makes that a reality. Attio is built specifically for the next era of companies. It syncs with your data sources, easily configures to their unique structures and works for any go-to-market motion from self-serve to sales led. Attio automatically enriches your contacts, syncs your email and calendar, gives you powerful reports and lets you quickly build Zapier style automations. The next era of companies deserves more than an inflexible one size fits all CRM. Join modal, replicate 11 labs, and more, and scale your startup to the next level. Head to attio.com/lenny and you'll get 15% off your first year. That's A-T-T-I-O.com/lenny.

**中文翻译:**
本集节目由 Attio 赞助。Attio 是一种全新的 CRM（客户关系管理系统）。在理想世界中，你的 CRM 应该是功能强大、易于配置且极具直觉性的。Attio 让这成为了现实。Attio 专为下一代公司构建。它可以与你的数据源同步，轻松配置以适应独特的结构，并适用于从自助服务到销售驱动的任何进入市场（GTM）模式。Attio 会自动丰富你的联系人信息，同步你的电子邮件和日历，提供强大的报告，并让你快速构建 Zapier 风格的自动化流程。下一代公司值得拥有比僵化的“一刀切”CRM 更好的选择。加入 Modal、Replicate、11 Labs 等公司的行列，将你的初创公司提升到新的水平。访问 attio.com/lenny，第一年可享受 15% 的折扣。

---

### [00:31:54] Lenny Rachitsky

**English:**
Adjacent topic. I hear you're a big fan of drops to be done, which is okay, so it's a fun recurring topic on this podcast. We've had many people that love it, many people that hate it. I love seeing both sides of it. I love that you find it helpful and you implement it at Opendoor. I'd love to hear just how you actually apply it at Opendoor, what you've learned about how to apply jobs to be done effectively.

**中文翻译:**
相关话题。我听说你是“待办任务”（Jobs to be Done，简称 JTBD）框架的忠实粉丝。这是本播客中一个有趣的经常性话题。我们遇到过很多热爱它的人，也有很多讨厌它的人。我喜欢看到两方的观点。我很高兴你觉得它有用并在 Opendoor 实施了它。我很想听听你具体是如何在 Opendoor 应用它的，以及关于如何有效应用 JTBD，你学到了什么。

---

### [00:32:17] Brian Tolkin

**English:**
Yeah. I think like all frameworks, the right answer is to pick your set of frameworks, have more tools in your toolbox, and then actually understand when and how to apply them. So we try to avoid being a hammer and everything's a nail. We try to for course the framework if it's not working. But I think what I really like about it is it forces you to put yourself in the customer's shoes. I think in a slightly deeper way and be a little bit more empathetic when I think about building at Opendoor versus say building at Uber or when you are building at Airbnb is we are not... Most people at Opendoor, we don't have homes to sell every week or every month, nor do we buy homes every week or every month. On average in the US is something people do once every seven years.

**中文翻译:**
是的。我认为就像所有框架一样，正确的做法是选择一套适合你的框架，让工具箱里有更多工具，并真正理解何时以及如何应用它们。我们尽量避免成为“手里拿着锤子，看什么都像钉子”的人。如果框架不奏效，我们不会强行套用。但我真正喜欢 JTBD 的一点是，它迫使你站在客户的角度思考。我认为这是一种更深层次的共情。当我在 Opendoor 构建产品，对比在 Uber 或 Airbnb 时，情况是不同的：在 Opendoor，我们大多数人并不会每周或每月卖房，也不会每周或每月买房。在美国，人们平均每七年才做一次这件事。

---

### [00:33:10] Brian Tolkin

**English:**
I'm sure the average at Opendoor is something similar, and so it's a little bit harder to be a customer. I took Uber every day. You probably use Airbnb a number of times a year. And so in some sense for some of those companies, you can bill for yourself, you would intuit the job to be done because you're just doing it for yourself. We don't necessarily have that context. And so a framework that forces us to be really thoughtful and intentional about how a customer might perceive our product is really helpful. The other thing that I like about it is the canonical version of it encourages you to think about the context in which the user's operating or the other things outside of your product that they might be going through.

**中文翻译:**
我相信 Opendoor 员工的平均情况也差不多，所以很难亲身体验当客户的感觉。我以前每天都打 Uber，你可能一年也会用几次 Airbnb。在某种程度上，在那些公司你可以为自己构建产品，凭直觉就能感知“待办任务”，因为你自己就是用户。但在 Opendoor，我们不一定有那种背景。因此，一个迫使我们深思熟虑、有意识地思考客户如何看待我们产品的框架就非常有帮助。我喜欢的另一地是，它的经典版本鼓励你思考用户所处的环境，或者他们在你的产品之外可能正在经历的其他事情。

---

### [00:33:59] Brian Tolkin

**English:**
In our case, the home buying or selling journey often is a certainly multi-week, if not multi-month or multi quarter journey with a lot of complexity and a lot of conversations outside of our product. You may be talking to an agent, you may be talking to a friend, you may be driving around the city trying to find a house, and the framework is very flexible and encouraging of saying what is actually the job to be done of this user when they're thinking about our product and what is the context in which they're operating.

**中文翻译:**
在我们的案例中，买房或卖房的过程通常持续数周，甚至数月或数个季度，充满复杂性，且有很多发生在产品之外的对话。你可能在和经纪人聊天，可能在和朋友商量，可能正开车在城里转悠找房子。这个框架非常灵活，它鼓励我们去问：当用户考虑我们的产品时，他们真正的“待办任务”是什么？他们所处的背景环境又是怎样的？

---

### [00:34:29] Lenny Rachitsky

**English:**
I'd love to go one level deeper to talk about how you actually implement it. Do you have templates of, you have a startup project as a blank, I blank, blank, blank? How do you...

**中文翻译:**
我想再深入一层，聊聊你具体是如何实施它的。你有模板吗？比如“作为一个 [身份]，我想要 [动作]，以便 [目标]”这种？你是如何……

---

### [00:34:40] Brian Tolkin

**English:**
I would say we're medium rigorous on template standardization or adherence. So we do have a template, the standard product review template talks about jobs to be done and has a section for what is the problem statement and what are the jobs to be done.

**中文翻译:**
我会说我们在模板标准化或执行方面属于“中等严格”。我们确实有一个模板，标准的产品评审模板中会提到 JTBD，并有一个章节专门写“问题陈述”和“待办任务是什么”。

---

### [00:34:58] Brian Tolkin

**English:**
Correct, pre-filling it up, sorry, pre-filling it out. And again, I think we are not sticklers about always using that template, but I think the beauty of a template is yes, it sets expectations of what you expect, but it's also just easier often for people to be able to work off something. And so yeah, it's part of our product review template and then part of our planning process as well. Because we've used it for a while. I think there's been an internalization of the culture where people will also just start commenting about it or writing about it and saying, hey, what is the job to be done here? Or what is the user trying to do? Which is maybe another colloquial phrase in it. And so, yeah, I think there's a cultural seeping that has happened.

**中文翻译:**
是的，预先填好。再次强调，我们并不死板地要求必须使用那个模板，但我认为模板的妙处在于：它设定了预期，同时也让人们更容易上手。所以，它是我们产品评审模板的一部分，也是我们规划流程的一部分。因为我们已经用了一段时间，这种文化已经内化了，人们会开始评论或写道：“嘿，这里的待办任务是什么？”或者“用户到底想做什么？”（这可能是另一种通俗的说法）。所以，我认为这种文化已经渗透进去了。

---

### [00:35:49] Lenny Rachitsky

**English:**
From memory, just what is in this template. So what's the phrasing that you try to use for setting up a problem?

**中文翻译:**
凭记忆说一下，这个模板里都有什么？你通常用什么样的措辞来设定一个问题？

---

### [00:35:55] Brian Tolkin

**English:**
Yeah, yeah. I mean, the specific framing, I would have to go remind myself on the template itself, but generally it looks like context, problem, potential solution, risks, risks/premortal and measurement of success. And then we also try to bucket our product reviews by stage. So you could be in the ideation stage, which might look very different than at the very end of the process. Like, Hey, we're getting ready to ship speak now forever hold your piece. Those two artifacts will also be very different.

**中文翻译:**
具体的框架我得回去看一眼模板，但通常包括：背景、问题、潜在解决方案、风险（以及“事前剖析”/Pre-mortem）、成功衡量标准。此外，我们还会按阶段对产品评审进行分类。你可能处于构思阶段，这与流程最后阶段（比如“我们要发布了，有意见现在提，否则就永远保持沉默”）的评审看起来会非常不同。这两类产出物也会有很大差异。

---

### [00:36:52] Lenny Rachitsky

**English:**
Okay, awesome. Any other tips or lessons about just working well with this concept of jobs to be done? Maybe when you come into Opendoor and like, hey everyone, we're going to be thinking this way. Is there anything there that would be useful to people if they're trying to operate this way?

**中文翻译:**
太棒了。关于如何运用好 JTBD 这个概念，还有什么其他的技巧或教训吗？比如当你加入 Opendoor 时说：“嘿大家，我们要开始用这种方式思考了。”对于那些也想尝试这种运作方式的人，有什么建议吗？

---

### [00:37:06] Brian Tolkin

**English:**
Recognizing that correctly implementing a framework, any framework, but if you don't in particular, we can talk about takes a little bit of time and getting used to and understanding. And so I don't think you can just like, okay, we're going to make the template and then that makes the content better. That just takes people's content and they wedge it into the template. It's actually the cultural internalization of like, hey, this might be phrased as the job to be done, but is this actually the job to be done? Let's talk about why the customer might be in that situation or not be in that situation. Or I think the job to be done might actually be something else.

**中文翻译:**
要意识到，正确实施一个框架（任何框架，尤其是 JTBD）需要时间去适应和理解。我不认为仅仅做一个模板就能让内容变好，那只是让人们把原有的内容硬塞进模板里。真正的关键是文化的内化，比如大家会问：“嘿，这虽然被表述为待办任务，但它真的是吗？让我们聊聊为什么客户会处于那种境地，或者为什么不在那种境地。或者我认为真正的待办任务其实是别的。”

---

### [00:37:43] Brian Tolkin

**English:**
Or you might say, hey, the job to be done is maybe an early day version would be the job to be done is to get an offer from Opendoor. And it's like, well kind of, but the broader job to be done might be price discovery for the customer. And so you can have a rich conversation where it's like, well, one might be a little bit influenced by our business goals. I don't think you just run around and people are like, yeah, I'm going to sell my house, but my goal is to get an offer from Opendoor. And so that's like, okay, the template might be the same, but it's actually the content that takes a little bit of cultural instantiation.

**中文翻译:**
或者你可能会说，早期版本的待办任务可能是“从 Opendoor 获得报价”。但其实，客户更广泛的待办任务可能是“价格发现”（Price Discovery）。这样你就能展开深入的对话：其中一个可能受我们业务目标的影响。我不认为人们会到处说：“是的，我要卖房，我的目标是拿到 Opendoor 的报价。”所以，模板可能是一样的，但内容需要文化的沉淀和实例化。

---

### [00:38:21] Lenny Rachitsky

**English:**
Got it. And it sounds like people talk from what is the job to be done that feels like a core part of the way you think about it. What is the job to be done? Just that language alone feels really powerful. Is there a resource or a book that you point people to help your team learn about the jobs to be done work? Is there one thing you find useful?

**中文翻译:**
明白了。听起来“待办任务是什么”已经成了你们思考方式的核心部分。仅仅是这句话本身就很有力量。有没有什么资源或书是你推荐给团队学习 JTBD 的？有没有你觉得特别有用的东西？

---

### [00:38:38] Brian Tolkin

**English:**
Not about jobs to be done. I do a lot more pointing people towards internal examples of where I saw other PMs maybe do as well or blogs and stuff. But your blog is a column when we pass around, not about jobs to done, but just about many topics.

**中文翻译:**
关于 JTBD 本身的倒没有。我更多是引导大家看内部的优秀案例，看看其他产品经理是怎么做的，或者看一些博客。顺便说一下，你的博客是我们经常传阅的专栏，虽然不全是关于 JTBD，但涵盖了很多主题。

---

### [00:38:56] Lenny Rachitsky

**English:**
I'm flattered. Thank you.

**中文翻译:**
受宠若惊，谢谢。

---

### [00:38:58] Brian Tolkin

**English:**
Yes.

**中文翻译:**
是的。

---

### [00:38:58] Lenny Rachitsky

**English:**
I really appreciate that. I was also thinking as you were talking, you're friends with Kayvon and jobs to be done on Twitter was quite the journey for them, traumatic for a lot of people. I think it went very far to the extreme of the-

**中文翻译:**
非常感谢。我刚才还在想，你是 Kayvon 的朋友，而 JTBD 在 Twitter 上对他们来说是一段相当曲折的经历，对很多人来说甚至有点“创伤性”。我觉得它走向了一个极端……

---

### [00:39:11] Brian Tolkin

**English:**
Yeah. I think they're more dogmatic about it.

**中文翻译:**
是的，我觉得他们在那方面有点教条主义。

---

### [00:39:13] Lenny Rachitsky

**English:**
Very dramatic. And so I guess it's a lesson here, maybe don't take it that far.

**中文翻译:**
非常戏剧化。所以我想这里的教训是，也许不要走得那么远。

---

### [00:39:19] Brian Tolkin

**English:**
Yeah. And I think it probably, and I don't know if Kayvon would agree with this, I imagine he would, the generalized version of you pick the right framework for the right job and if you say there's one framework to rule them all and this is the only framework that works and then of course every problem into it, then we chop.

**中文翻译:**
是的。我想（我不确定 Kayvon 是否同意，但我猜他会同意）普适的版本应该是：为正确的工作选择正确的框架。如果你说有一个框架可以统治所有框架，这是唯一有效的框架，然后强行把每个问题都塞进去，那就会出问题。

---

### [00:39:38] Lenny Rachitsky

**English:**
The way I think about jobs to be done is exactly the way you're describing it where it's just think from the lens of the job to be done for our customers. So for my newsletter, what is the job to be done of my newsletter to help you become better at your job as a product person building product. And that actually ends up being really helpful. And it feels like that's the way you guys think about it at opening.

**中文翻译:**
我对 JTBD 的理解正是你描述的那样：从客户的“待办任务”视角去思考。比如对于我的通讯（Newsletter），它的待办任务是什么？是帮助你作为一个构建产品的产品人，在工作中变得更出色。这样思考确实非常有帮助。感觉这正是你们在 Opendoor 的思考方式。

---

### [00:39:57] Brian Tolkin

**English:**
Yeah, absolutely. And you're crushing it by the way.

**中文翻译:**
没错，绝对是。顺便说一下，你做得非常棒。

---

### [00:40:00] Lenny Rachitsky

**English:**
Thank you. So are you. You talked about, I'm going to go into another question to deflect your compliment. You mentioned that Uber, there's a million transactions happening every second, it's massive scale. Opendoor is completely different. You have very few very large transactions. Yeah. I'm curious how you do experiments, if you do experiments, do you do A/B tests? What have you learned about just how to think through low sample sizes plus A/B testing?

**中文翻译:**
谢谢，你也是。为了避开你的赞美，我要问下一个问题。你提到 Uber 每秒有数百万次交易，规模巨大。而 Opendoor 完全不同，交易量很少但单笔金额巨大。我很好奇你们如何做实验？你们做 A/B 测试吗？关于如何在低样本量的情况下思考 A/B 测试，你学到了什么？

---

### [00:40:29] Brian Tolkin

**English:**
Yeah, very hot topic of conversation. We do A/B test. It is obviously the gold standard. And so we do as much as we can. Of A/B testing there are parts of our funnel and flow that have more volume than others. So top of quality testing easier than down funnels, A/B testing purely product or tech features easier than A/B testing processes, operational processes. But you're totally right. We are not doing hundreds of millions of transactions a year. And so experimentation can be more challenging. And so I think one way to think about it is A, acknowledge the problem, which just to say don't, and we've made this mistake many, many times, but don't just force yourself into A/B testing without running the power analysis and say like, hey, are we going to get results? What is the size that will detect and what is the runtime of that experiment?

**中文翻译:**
是的，这是一个非常热门的话题。我们确实做 A/B 测试，它显然是金标准。所以我们尽可能多地去做。在我们的漏斗和流程中，有些环节的流量比其他环节大。所以漏斗顶端的测试比底端容易；纯产品或技术功能的 A/B 测试比运营流程的 A/B 测试容易。但你完全正确，我们每年没有数亿次交易，所以实验更具挑战性。我认为一种思考方式是：首先，承认这个问题。不要（我们犯过很多次这种错误）在没做功效分析（Power Analysis）的情况下就强行做 A/B 测试。要问：“嘿，我们能得到结果吗？能检测到的效应量是多少？实验需要运行多久？”

---

### [00:41:39] Brian Tolkin

**English:**
And be honest, is that acceptable? A second lesson here, is there certain experiments that are important enough and it's hard to triangulate signal in any other way that you may say a six-month runtime is an acceptable outcome and we are going to start it in June and we will be smarter for it for 2025 planning and we're going to set it and forget it and we're grateful we did, and that's okay. But the only mistake here is thinking you'll get an answer in a month when you won't, and then pretending you do and then waking up a month later and being like, "Well, it was insignificant and this and that." We could have known that. And then the third thing is, and experimentation is all about increasing your conviction in the problem or the solution. So the generalized version of the statement is, if there are parts of your funnel or flow that are low end and you can't run a canonical A/B test, how might you otherwise increase your conviction in the solution that you're building?

**中文翻译:**
要诚实地面对：这个时间成本可以接受吗？第二个教训是：有些实验足够重要，且很难通过其他方式交叉验证信号，你可能会说“运行六个月是可以接受的结果”。我们 6 月开始，为了 2025 年的规划变得更聪明，我们设置好就不管它了，最后我们会庆幸自己这么做了。这没问题。唯一的错误是：明明一个月拿不到结果，却以为能拿到，然后假装拿到了，结果一个月后醒悟过来发现“结果不显著”等等。其实我们本来可以预见到的。第三点是：实验的本质是增加你对问题或解决方案的信心（Conviction）。所以普适的说法是：如果你的漏斗某些环节样本量太小，无法进行标准的 A/B 测试，你还能通过什么方式增加对所构建方案的信心？

---

### [00:42:47] Brian Tolkin

**English:**
And there turns out there are a decent number of other ways to do that. The first best, most obvious is talk to more customers. But there are other statistical techniques that again, aren't as rigorous or good, but may be possible. You may be able to use observational data, you review with diff and diff, you may be able to look at sister cities or twin cities. You may be able to segment by geo, you may be able to reduce your power and say, hey, we're going to run at 80% confidence for all of our experiments instead of this traditional 95% because that's a worthy trade-off. And if we're wrong one more time out of 10, that's okay.

**中文翻译:**
事实证明，还有很多其他方法。第一种最好、最明显的方法是：多和客户聊聊。此外还有一些统计技术，虽然不如标准测试严谨，但也是可行的。你可以使用观察数据，使用双重差分法（Diff-in-Diff），可以观察“姐妹城市”或“双胞胎城市”。你可以按地理区域细分，或者降低统计功效，比如：“嘿，我们将所有实验的置信度设为 80%，而不是传统的 95%”，因为这是一个值得的权衡。如果 10 次里多错一次，也没关系。

---

### [00:43:28] Brian Tolkin

**English:**
You can do a long-term holdout to match your intuition. And so there's a lot of other techniques to hone your intuition. There's a lot of other techniques to build conviction and confidence. And so we try to be very creative on doing that. And then the last bit I would say is if you're not going to get significance, if there's no other techniques at your disposal, then sometimes you just got to trust your intuition and ship it. And if that's what you believe, then that's what you believed and you shouldn't spend time trying to get false precision.

**中文翻译:**
你可以做一个长期留存组（Holdout）来验证你的直觉。有很多技术可以磨练直觉，也有很多技术可以建立信心。所以我们尝试在这些方面发挥创意。最后我想说的是，如果你无法获得显著性，且没有其他技术可用，那么有时你只能相信直觉并发布它。如果你坚信这一点，那就去做，不要浪费时间去追求虚假的精确度。

---

### [00:44:01] Lenny Rachitsky

**English:**
I want to spend more time on that last point, but real quick, the power analysis you talked about, there's people, don't know, there's calculators out there that you could just plug in, here's how much traffic I'm getting, here's how much of an impact difference I want to see, here's how long it'll take to find out.

**中文翻译:**
我想在最后一点上多花点时间，但先插一句：关于你提到的功效分析，有些人可能不知道，网上有很多计算器，你只需输入流量、预期的影响差异，它就会告诉你需要多长时间才能得出结论。

---

### [00:44:17] Brian Tolkin

**English:**
Yep, exactly. Totally. And some of the calculators are great where you can also plug in the traffic and your acceptable runtime and it will tell you the minimum detectable impact and then you can gut check your own intuition. So you can play around with that.

**中文翻译:**
没错，完全正确。有些计算器非常棒，你还可以输入流量和可接受的运行时间，它会告诉你“最小可检测影响”（MDE），然后你可以据此校准自己的直觉。你可以去试一试。

---

### [00:44:31] Lenny Rachitsky

**English:**
Awesome. We'll try to link to one of those in the show notes. So, on the intuition piece, is there anything more there? Just like how you think about when you run the product team, just how you recommend people leverage intuition versus not. Because some companies are like, we're just going to trust the data. I don't really trust your opinion. You don't know this customer exactly. You talked about Opendoor, I'm not buying houses myself, so I don't know how much I can trust my intuition. Just what's your general advice to your product team of how to think about their intuition and when to rely on it versus not?

**中文翻译:**
太好了，我们会尝试在节目介绍里放一个链接。关于直觉，还有什么要补充的吗？比如当你领导产品团队时，你如何建议大家平衡直觉和数据？因为有些公司会说：“我们只相信数据，我不相信你的个人意见，你并不完全了解客户。”你提到在 Opendoor，你自己并不常买房，所以不知道该多大程度上相信直觉。你对产品团队关于如何思考直觉、何时依赖直觉有什么普遍建议吗？

---

### [00:45:06] Brian Tolkin

**English:**
So, at Opendoor, for example, I'd say on the relative spectrum, we're quite data-driven. And then it's when we come into this challenge where we say, okay, that is another technique or tool in the toolbox. I think the generalized version of that is customers, products, people can surprise you. And so this happens all the time for people who build products. I'm sure you've got great stories from Airbnb where you saw something, put it out there just was very-

**中文翻译:**
在 Opendoor，我认为在相对光谱上，我们是非常数据驱动的。当我们遇到挑战时，我们会把直觉看作工具箱里的另一种技术或工具。我认为普适的说法是：客户、产品和人总会给你惊喜。对于构建产品的人来说，这种情况经常发生。我相信你在 Airbnb 一定有很多精彩的故事，关于你看到某些东西，发布出去，结果却非常……

---

### [00:45:35] Lenny Rachitsky

**English:**
All the time.

**中文翻译:**
经常发生。

---

### [00:45:36] Brian Tolkin

**English:**
All the time. And so I think there's definitely a humility to say if you can, if it's relatively easy to test your assumptions or test your hypotheses. That is always better to gut check yourself. And that takes a little bit of humility to say that, but we've all been wrong plenty of times. But if that's just not on the table, I think the reality is you can't pretend it is. And sometimes you got to use taste and judgment and then you say, okay, what is my conviction level and do I have just medium, low or high conviction? And if I have anything low or medium conviction and it's a decision of consequence, I should talk to more customers, check it with another person and see if their intuition matches. Something that gets me personally to the high bucket category.

**中文翻译:**
经常发生。所以我认为必须保持谦逊：如果可以，如果测试假设或猜想相对容易，那么通过测试来校准直觉总是更好的。承认这一点需要谦逊，因为我们都错过很多次。但如果测试不可行，现实就是你不能假装它可行。有时你必须运用品味和判断力，然后问自己：“我的信心水平是多少？是低、中还是高？”如果信心是低或中，且这是一个重大决策，我就应该多和客户聊聊，或者找另一个人核对一下，看看他们的直觉是否一致。这能帮我把信心提升到“高”的范畴。

---

### [00:46:27] Brian Tolkin

**English:**
And then I think the last part, which is some part of experimentation is if you just ship something because it's your intuition or it's where you want to see the product go, do you have a reasonable feedback loop to understand whether or not you are correct? So that could be customer support or ticket volume or feature adoption, whatever the case is, it may not be an output metric in the traditional A/B test, but some more rigorous system that says, hey, I had this hypothesis, we just shipped it for x, y, z constraint reason for red.

**中文翻译:**
最后一部分是，如果你仅仅因为直觉或产品愿景而发布了某些东西，你是否有合理的反馈闭环来了解你是否正确？这可能是客户支持、工单量或功能采用率。无论情况如何，它可能不是传统 A/B 测试中的产出指标，但需要一个更严谨的系统来告诉你：“嘿，我之前有这个假设，因为 X、Y、Z 的限制原因我们发布了它，结果是这样的。”

---

### [00:47:04] Lenny Rachitsky

**English:**
I think that's awesome advice. I agree with everything you're saying. You mentioned this word humility, and it is a good segue to something I want to talk about, which is Zillow. One of the most interesting things that's happened in your space is Zillow basically decided, hey, we're just going to do what Opendoor is doing, they launched it, you're basically frenemies for a while, and then they're like, no, it's not working. Now you partner and now you work with Zillow on this stuff. So are you able to share what went down there with the story of what happened, how it went, and where things are at now?

**中文翻译:**
我觉得这是非常棒的建议。我完全同意你的看法。你提到了“谦逊”这个词，这正好可以引出我想聊的话题：Zillow。在你们这个领域，最有趣的事情之一就是 Zillow 基本上决定：“嘿，我们要直接做 Opendoor 正在做的事。”他们上线了该功能，你们当了一段时间的“亦敌亦友”，然后他们发现：“不行，这行不通。”现在你们成了合作伙伴，在这些业务上与 Zillow 合作。你能分享一下当时发生了什么吗？故事的经过如何，现在的情况又是怎样的？

---

### [00:47:36] Brian Tolkin

**English:**
Yeah, I mean we do partner with Zillow. Zillow's been a fantastic partner for us and we've really enjoyed a working relationship with them. I think when you think about it, they have tremendous amount of reach and audience and all these online platforms have tremendous reach and audience. And we happen to have a fairly unique selling solution. And so there's a nice, not to use a business school word, but there's a nice synergy so to speak, between a high intended audience who's doing a lot of browsing and searching and discovery and starting their process on one of these online platforms and what we offer, which we transaction services that allow people to actually move particularly on the seller side. And so there's just a pretty nice symbiotic relationship there with the Zillow's and the regimens of the world. And so both of those have been great partners for us.

**中文翻译:**
是的，我们确实在和 Zillow 合作。Zillow 一直是我们极好的合作伙伴，我们非常享受与他们的合作关系。当你思考这件事时，你会发现他们拥有巨大的触达能力和受众，所有这些在线平台都是如此。而我们恰好拥有一种相当独特的销售解决方案。所以，用一个商学院的词来说，这之间有一种很好的“协同效应”：一方是正在进行大量浏览、搜索和探索，并在这些平台上开始流程的高意向受众；另一方是我们提供的交易服务，能让人们真正完成搬迁（特别是卖方）。所以，我们与 Zillow 以及 Redfin 这样的公司之间存在着非常好的互利共生关系。这两家公司都是我们伟大的合作伙伴。

---

### [00:48:43] Lenny Rachitsky

**English:**
What do you think Zillow maybe underestimated or didn't get about the space that made it harder than they anticipated? That seems obvious. Of course, let's go down funnel, let's just do it all. And they're like, "Oh, shit, not working." What do you think they didn't get or what do you think they missed?

**中文翻译:**
你认为 Zillow 可能低估了什么，或者对这个领域有什么误解，导致事情比他们预想的要难？这看起来很明显：当然要向下游漏斗延伸，把所有环节都做了。结果他们发现：“噢，该死，行不通。”你觉得他们哪里没搞懂，或者错过了什么？

---

### [00:48:58] Brian Tolkin

**English:**
I guess continuing on the humility point, I won't necessarily pretend to be in their shoes, but I will say the business is challenging and it's complex from a number of different dimensions. It's not a traditional software only product, but you have to be really good at pricing. You have to be really good at product, you have to be really good at the operations. You have to be really disciplined at risk. You have to be really good in the capital markets. And so you have to put all of these functions together to build a vertically integrated product. And that's the reality. And so that is something that's been in Opendoor's DNA from day one because we started with a vertically integrated product. And so we can't deliver unless we have all of those things. Right? And so I think that's something that continues to help us to this day, is that vertical integration requires all of those pieces coming together.

**中文翻译:**
继续秉持谦逊的态度，我不会假装了解他们的处境，但我可以说，这项业务在多个维度上都极具挑战性和复杂性。它不是传统的纯软件产品。你必须非常擅长定价，必须非常擅长产品，必须非常擅长运营。你必须在风险控制上极其自律，还必须在资本市场游刃有余。你必须把所有这些职能整合在一起，构建一个垂直整合的产品。这就是现实。这是 Opendoor 从第一天起就融入基因的东西，因为我们就是从垂直整合产品开始的。除非具备所有这些要素，否则我们无法交付。我认为直到今天，这依然在帮助我们：垂直整合要求所有这些环节紧密结合。

---

### [00:49:53] Lenny Rachitsky

**English:**
That makes a lot of sense, and I think it's a good reminder of there are adjacent markets and businesses that always feel like, "Oh, we could expand to that someday." Such a big opportunity, this business could be so much bigger. And then you realize your business is completely not set up to operate this way. Zillow is very software driven, just I am not going to simplify what they do, but it's a website, very software. And obviously as we talked about Opendoor, a huge operational component. And then as you said, the pricing piece and the debt stuff.

**中文翻译:**
非常有道理。这很好地提醒了我们：总有一些相邻的市场和业务让你觉得“哦，我们总有一天可以扩张到那里”。机会巨大，业务规模可以翻倍。但随后你会发现，你的公司完全不是为了那种运作方式而设计的。Zillow 是非常软件驱动的（我不想简化他们的工作，但它本质上是个网站，非常软件化）。而正如我们讨论的，Opendoor 有巨大的运营成分，还有你提到的定价环节和债务/资本运作。

---

### [00:50:24] Brian Tolkin

**English:**
Yeah. Yeah, totally. Yeah.

**中文翻译:**
是的，完全正确。

---

### [00:50:26] Lenny Rachitsky

**English:**
Yeah. So I think it's a really good reminder that just when you're taking on something completely different, it may not fit into the way your company operates and partnering makes sense. Anything else there that's interesting to share around the Zillow thing? I guess one is maybe it was just like, I imagine it was very stressful. Zillow's getting into it. "Oh, shit what are we going to do? They got all the traffic." Yeah, anything there?

**中文翻译:**
是的。所以这是一个很好的提醒：当你尝试完全不同的事物时，它可能不符合你公司的运作方式，这时合作才是明智的。关于 Zillow 的事，还有什么有趣的可以分享吗？我猜当时一定压力很大。Zillow 进场了，“噢该死，我们该怎么办？流量全在他们手里。”当时有什么故事吗？

---

### [00:50:46] Brian Tolkin

**English:**
Yeah. I mean, it's certainly stressful. I think in general we try to live by whether Zillow or anybody else being competition aware, but not necessarily competition focused. And the reality is vast, vast in our space. A vast majority of people still move the traditional way. And so this isn't something where it's like the size of the prize isn't particularly large enough short or anything like that. The reality is it's the largest asset classroom in the United States, and if we just stay super focused on, hey, who are the customers that we serve really well that we talk to every day, there's a little bit of confidence that comes from being able to stay focused on that regardless of the competitive environment, again, because it's not like the market is fully saturated.

**中文翻译:**
是的，压力确实很大。我认为总的来说，无论是面对 Zillow 还是其他人，我们都遵循“关注竞争，但不以竞争为中心”的原则。现实情况是，在我们这个领域，绝大多数人仍然以传统方式搬家。所以这并不是一个“奖池不够大”的问题。事实上，房地产是美国最大的资产类别。如果我们能保持超级专注，思考“我们每天交流的、服务得很好的客户是谁”，那么无论竞争环境如何，这种专注都会带给你信心。再次强调，因为市场还远未饱和。

---

### [00:51:40] Brian Tolkin

**English:**
This is the same thing back in the Uber days as well. It's like transportation is almost infinitely large. And so, yes, it feels like there's heated competition between Uber and Lester or whatever back in the day, but the reality is there's plenty of trips that happens and people need to get around sitting in plenty of different ways. That's neither Uber and more Lyft. And staying focused on how you can develop for your customer, I think is the best way to focus.

**中文翻译:**
这和当年在 Uber 的情况一样。交通市场几乎是无限大的。所以，虽然当时感觉 Uber 和 Lyft（或者其他公司）之间竞争激烈，但现实是每天有大量的出行需求，人们有各种各样的出行方式，既不是 Uber 也不是 Lyft。我认为，专注于如何为你的客户进行开发，是最好的专注方式。

---

### [00:52:11] Lenny Rachitsky

**English:**
There's a podcast that will come out before this episode with Jeff Weinstein from Stripe who's building Stripe Atlas. They had a similar experience with AngelList launched a direct competitor to Atlas, and then they realized Atlas is so much better. Forget it. We're just going to send everyone to Atlas.

**中文翻译:**
在本集节目之前会播出一期与 Stripe 的 Jeff Weinstein 的对话，他负责构建 Stripe Atlas。他们也有类似的经历：AngelList 推出了 Atlas 的直接竞争产品，但后来他们意识到 Atlas 做得好得多，于是说：“算了，我们直接把人都引流到 Atlas 去吧。”

---

### [00:52:29] Brian Tolkin

**English:**
Really?

**中文翻译:**
真的吗？

---

### [00:52:30] Lenny Rachitsky

**English:**
Yes. And I think it's the same exact lesson that if you just stay focused on jobs to be done, let's say, of what is the job to be done and do the best possible job, and knowing that the market is much bigger, that you're not really competing with someone else, another company, it's the default behavior in your case. It's like people are just buying their house the old-fashioned way. That's the actual competition.

**中文翻译:**
是的。我认为教训是一样的：如果你专注于“待办任务”，尽力做到最好，并意识到市场足够大，你真正的竞争对手其实不是另一家公司，而是用户的“默认行为”。在你们的案例中，就是人们用老办法买卖房子。那才是真正的竞争。

---

### [00:52:51] Brian Tolkin

**English:**
Exactly. Yep.

**中文翻译:**
没错。

---

### [00:52:53] Lenny Rachitsky

**English:**
Yeah. Okay. So, along these lines, something else I've heard that you're very good at is staying very calm under pressure and staying very levelheaded when things are really crazy. This is something that a lot of people are not good at, especially leaders. They stress everyone out things. You go crazy, they don't create a good vibe. And then two, something people want to get better. Leaders and non-leader are like any lessons, anything you've learned about just how to develop this skill?

**中文翻译:**
好的。顺着这个思路，我还听说你非常擅长在压力下保持冷静，在情况疯狂时保持清醒。这是很多人（尤其是领导者）不擅长的。他们会让每个人都感到压力，自己变得疯狂，破坏团队氛围。无论是领导者还是普通员工都想在这方面做得更好。关于如何培养这项技能，你有什么经验或教训吗？

---

### [00:53:18] Brian Tolkin

**English:**
I think part of this may have been sharpened in the early days of Uber. Everything felt like a fire drill all the time. So the only way to operate, but I think you almost hit the nail on the head in the question, which is a little bit of an intellectual answer of when you reflect the stress onto your teams, everybody tenses up and tightens up. And so it counterintuitively doesn't produce better outcomes. And so I think the other reality to remind ourselves, and these are a bunch of mantras that just are helpful in these moments, is you're never as good as you think you are. You're never as bad as you think you are. And so that more even keeled demeanor, I think allows you to have a clearer head when you're operating under the pressure and to think more clearly.

**中文翻译:**
我想这部分能力是在 Uber 早期磨练出来的，当时感觉每件事都像紧急火警。那是唯一的生存方式。但你在问题中几乎说中了要点，这是一个偏理性的答案：当你把压力反映到团队身上时，每个人都会变得紧绷。这在直觉上似乎有用，但实际上并不会产生更好的结果。我认为另一个需要提醒自己的现实（这些是在这种时刻非常有用的格言）是：你永远没有你想象的那么好，也永远没有你想象的那么糟。这种更平稳的心态能让你在压力下保持清醒的头脑，思考得更清楚。

---

### [00:54:14] Brian Tolkin

**English:**
I think one of the maybe least helpful answers, but unfortunately, the reality is you got to be in some stressful situations to also have the perspective that cycles past the things past. And that remaining calm is what matters. And so maybe the advice there is reflecting on one of these situations happen, exposing yourself to them, not running from them and then learning from them so that the next time it comes around you can say, Hey, I've been here before. I've slept on the floor in China before launching uberPOOL and thinking we're going to miss a launch deadline. And what were the tools in my toolbox and my toolkit that showed me that in terms of getting it done or not, and what were the lessons?

**中文翻译:**
这可能是一个听起来最没用的答案，但不幸的现实是：你必须经历过一些极具压力的情境，才能拥有那种“一切都会过去”的视角，并意识到保持冷静才是最重要的。所以建议可能是：当这些情况发生时，反思它们，让自己暴露在压力中而不是逃避，并从中学习。这样下次再遇到时，你可以说：“嘿，我以前经历过。我在中国睡过地板，当时也以为 uberPOOL 赶不上发布期限了。”当时我的工具箱里有哪些工具帮我搞定了（或没搞定）？教训是什么？

---

### [00:55:06] Lenny Rachitsky

**English:**
I love that. So part of it is just go through this experience many times and you'll start to realize, okay, it's not actually going to be as bad as people may think. You mentioned this toolkit instead of tools. Is there anything else there that you come back to that ends up being helpful? You mentioned this mantra of it's never as bad as people think it is, it is never great as people think it is.

**中文翻译:**
我喜欢这个观点。所以部分原因就是多次经历这种事，然后你会意识到：好吧，情况其实不会像人们想象的那么糟。你提到了“工具箱”而不是单一工具。还有什么你经常回顾且非常有用的东西吗？你提到了那句格言：“事情永远没有人们想的那么糟，也永远没有人们想的那么好。”

---

### [00:55:23] Brian Tolkin

**English:**
Yeah, I mean, I think exposing yourself to other people's stories or however you may learn is really, really helpful. So again, whether it's your podcast or books or biographies or one of the podcasts that I love is Founders Podcast, which talks about historical famous entrepreneurs. And obviously these are elevating very famous people already, but there's a lot to learn from a lot of these stories as well and understanding that the journey in pack is nonlinear, it never is for anybody. And so I think being able to expose yourself to other stories that even may if you don't have those personal experiences and then understanding how others navigate.

**中文翻译:**
是的。我认为让自己接触别人的故事或通过各种方式学习是非常有帮助的。无论是听你的播客，还是看书、看传记。我喜欢的播客之一是《Founders Podcast》，它讲述历史上著名企业家的故事。显然，这些故事是在赞美那些已经成名的人，但从这些故事中可以学到很多，比如理解成功的路径是非线性的，对任何人来说都是如此。即使你没有那些亲身经历，通过了解别人的故事，理解他们是如何应对困境的，也很有帮助。

---

### [00:56:11] Lenny Rachitsky

**English:**
Got it. So just hearing of other people's crazy experiences and building on this muscle of like, okay, they've gone through crazy stuff, things work out.

**中文翻译:**
明白了。就是通过听别人的疯狂经历，来锻炼自己的“肌肉”：好吧，他们经历过这么疯狂的事，最后都解决了。

---

### [00:56:18] Brian Tolkin

**English:**
Yeah, totally.

**中文翻译:**
是的，完全正确。

---

### [00:56:20] Lenny Rachitsky

**English:**
We'll make it through. Okay. I have this note here that I think either someone mentioned about you or you may have mentioned that product is finding the kernel of truth in a sea of ambiguity and signals. Does that mean anything to you?

**中文翻译:**
我们会挺过去的。好。我这里有一条笔记，可能是别人提到的，也可能是你自己说过的：产品工作就是在模糊和信号的海洋中寻找“事实的核心”（Kernel of Truth）。这对你有什么特殊含义吗？

---

### [00:56:33] Brian Tolkin

**English:**
Yeah, absolutely. I mean, I think in most organizations and to do the job effectively, you're going to get signals from everywhere and good ideas come from everywhere. It may be your CS team or CX team. It may be a customer directly. It may be a conversation you had. It may be a YouTube video you watched that sparked an idea. It may be feedback from an executive, it may be whatever. You went out and did a field visit. You are going to get a lot of inputs around what people think about your product, what people think you should do next. And I think that the core job is to understand what really matters, right? What is noise? What is a good idea, what is a suggestion and what is back to the jobs to be done for what is really going to move the customer forward?

**中文翻译:**
是的，绝对有。我的意思是，在大多数组织中，为了有效地开展工作，你会从各处接收到信号，好主意也来自各处。可能是客服团队（CS）或客户体验团队（CX），可能是客户直接反馈，可能是你的一次谈话，也可能是你看的一段激发灵感的 YouTube 视频。可能是高管的反馈，也可能是你实地考察的结果。你会收到大量关于人们如何看待你的产品、认为你下一步该做什么的输入。我认为核心工作是理解什么才是真正重要的。什么是噪音？什么是好主意？什么是建议？回到“待办任务”，什么才是真正能推动客户前进的东西？

---

### [00:57:24] Brian Tolkin

**English:**
And unfortunately that means saying no to maybe what sounds like some good ideas along the way, but if you can really figure out this is really what matters, that's the core part of the job. It dovetails even back to our earlier conversation. In the early days of building tech and ops companies is where's the tech leverage? Same question, where's the kernel of what really matters that tech can uniquely solve? And let's go do that and be comfortable with other fires maybe burning. That's what really, really, really matters. It's a hard discipline.

**中文翻译:**
不幸的是，这意味着在过程中要对一些听起来不错的主意说“不”。但如果你能真正弄清楚“这才是最重要的”，那就是工作的核心。这甚至能衔接到我们之前的谈话：在构建技术+运营公司的早期，技术的杠杆作用在哪里？同样的问题：什么是真正重要的核心，且技术能独特地解决它？让我们去做那件事，并接受其他地方可能还在“着火”。这才是真正、真正、真正重要的。这是一种很难坚持的纪律。

---

### [00:58:02] Lenny Rachitsky

**English:**
I love that. If there's not an example, that's totally fine, but when you talk about this finding this kernel where tech could be highly leveraged, is there any example that comes to mind of that working out really well?

**中文翻译:**
我喜欢这个观点。如果没有具体的例子也没关系，但当你谈到寻找技术可以发挥巨大杠杆作用的核心时，有没有哪个例子让你觉得效果特别好？

---

### [00:58:13] Brian Tolkin

**English:**
I mean, I think back in the Uber days, I think it was like, hey, we're not going to build sophisticated tooling infrastructure. We're not going to build a centralized growth team. We're not going to build any of that. Because if you think about the early Uber network from the simplest form, you've got a rider and a driver and you need to connect them, price the transaction and issue some receipts probably and collect payment. So it's like, okay, do we do that really well? And until we do that really well, all the other stuff is noise. It's immaterial how efficiently we answer support tickets. That's not critical. And so now it's super critical, but in the early days it's not that critical. And even the customer acquisition costs may not be super critical, in this case it's growing rapidly on the things. And so pouring fuel on the fire may not be super efficient there.

**中文翻译:**
回想 Uber 早期，我们当时决定：不构建复杂的工具基础设施，不建立集中的增长团队，这些都不做。因为如果你从最简单的形式思考早期的 Uber 网络，你有一个乘客和一个司机，你需要连接他们，为交易定价，可能还要开收据并收款。所以问题是：我们能把这件事做得非常好吗？在做到这一点之前，其他一切都是噪音。我们回复支持工单的效率如何并不重要，那不是关键。虽然现在它极其关键，但在早期没那么重要。甚至获客成本（CAC）在当时也不是最关键的，因为业务本身就在飞速增长。所以在那个阶段，火上浇油可能并不是最高效的。

---

### [00:59:13] Brian Tolkin

**English:**
So I think that's a very good generalized example. One other tip that maybe is helpful that I frankly constantly work on and try to get better at is all these ideas and feedback that comes from everywhere, make sure it's written down for a number of reasons. One, you can then go reference it, but two, part of the job is making sure the people who present those ideas are heard and respected and know that it's at least somewhere where it was considered. And then you can look at it all and say, okay, but what actually really, really, really, really matters here? And yeah, that's another tip.

**中文翻译:**
我认为这是一个很好的普适例子。另一个可能很有帮助的技巧（坦白说我一直在努力改进）是：确保将来自各处的想法和反馈都记录下来。原因有几点：第一，你以后可以查阅；第二，工作的一部分是确保提出这些想法的人感到被倾听和被尊重，知道他们的想法至少被考虑过。然后你可以审视所有这些，问：“好，但这里真正、真正、真正重要的是什么？”是的，这是另一个技巧。

---

### [00:59:55] Lenny Rachitsky

**English:**
When you say written down, is there tools you find really helpful here? Is it just put it in a big doc that we're keeping? Is there anything you find to actually operationalize that?

**中文翻译:**
当你提到“记录下来”时，有什么你觉得特别好用的工具吗？是放在一个大文档里吗？你有什么具体的方法来落实这一点吗？

---

### [01:00:03] Brian Tolkin

**English:**
I've seen different companies do it differently, but wherever you tend to try and keep a backlog, whether that's a Google sheet or your actual backlog in Jira, whatever you use, but at least it feels like, okay, the context was captured, and the idea is there.

**中文翻译:**
我见过不同的公司有不同的做法。无论你习惯把待办事项（Backlog）放在哪，是 Google 表格还是 Jira，只要能让人感觉到“背景被捕捉到了，想法就在那里”就行。

---

### [01:00:19] Lenny Rachitsky

**English:**
Awesome. I'm going to take us to a recurring segment on this podcast called Failure Corner.

**中文翻译:**
太棒了。现在进入本播客的一个固定环节：失败角落（Failure Corner）。

---

### [01:00:25] Brian Tolkin

**English:**
Okay.

**中文翻译:**
好的。

---

### [01:00:26] Lenny Rachitsky

**English:**
Is there a story you can share of a time you failed in your career had a big failure, and how that experience made you better?

**中文翻译:**
你能分享一个你职业生涯中失败的故事吗？一个重大的失败，以及那次经历如何让你变得更好？

---

### [01:00:35] Brian Tolkin

**English:**
We can talk about the very early days of uberPOOL, and the first launch, if you will in San Francisco. So, carpooling product, multiple riders in a Mercedes car. And we had this idea that it would be effective for commuters, this was very, very early days. And so part of the launch was, okay, we're going to beta it with just some popular commuting corridors with specific companies or maybe the marina to Google or whatever and try and match people according to what their companies and that's how we'll drive liquidity. And we very quickly realized that back to what the kernel of truth is here is liquidity is the only thing that matters. And there just wasn't enough. There was never going to be enough to do this company based thing. That wasn't the strategy that was going towards from us.

**中文翻译:**
我们可以聊聊 uberPOOL 极早期在旧金山的第一次发布。那是一个拼车产品，一辆奔驰车里坐多个乘客。我们当时有个想法，认为它对通勤者会很有效（那是很早很早以前）。所以发布计划的一部分是：我们只在一些热门通勤路线上针对特定公司进行测试，比如从 Marina 区到 Google 总部，尝试根据公司来匹配乘客，以此驱动流动性（Liquidity）。但我们很快意识到（回到“事实的核心”）：流动性才是唯一重要的东西。而当时根本没有足够的量，靠这种基于公司的方式永远无法产生足够的流动性。那并不是我们应该追求的战略。

---

### [01:01:52] Brian Tolkin

**English:**
And the reason I don't know if it's a full failure is maybe this is true all failures, you learn from it, you pivot and you go on to the next thing. And obviously we did that and then spent a lot of our time and effort trying to say, okay, what are the bounds of liquidity and driving liquidity that we can do to understand what the most important or what the limits of the product are. So as an example, we launched and maybe people in San Francisco. Remember this $5 anywhere in San Francisco, we work for promotion, which is obviously a great deal, obviously costs a lot of money, but the whole idea here is like, oh, okay, if liquidity is what really matters, if we were to juice that and really drive liquidity, how high can our metrics get? And then we can go chase more sustainable ways to do that. But it was a interesting fail case from launching and learning to say, hey, this initial strategy just isn't going to work, we got to go. And any part of it was a hedging strategy where with a small audience and there'll be a beta population, it's like, well, this one you just got to go.

**中文翻译:**
我不确定这算不算彻底的失败，也许所有失败都是如此：你从中学习，然后转型，继续做下一件事。显然我们就是这么做的。后来我们花了大量精力和时间去探索流动性的边界，以及如何驱动流动性，以理解产品最核心的部分或极限在哪里。举个例子，我们后来推出了一个活动（旧金山的人可能还记得）：旧金山市内任何地方只要 5 美元。这显然非常划算，但也非常烧钱。但核心思路是：如果流动性最重要，如果我们通过补贴来强力驱动流动性，我们的指标能达到多高？然后我们再去寻找更可持续的方式。这是一个有趣的失败案例，通过发布和学习意识到：嘿，最初的战略行不通，我们得换个法子。当时那种针对小众受众的对冲策略（Beta 测试）在这种情况下根本行不通，你必须全力以赴。

---

### [01:02:51] Lenny Rachitsky

**English:**
I think a lesson there is also don't overthink it, don't try to get too cute. Just like we're trying to make a perfect beta test versus realizing, okay, we just need a lot more people in it. Also, your $5 promotion made me think of the early promotions of the ice cream and the bunnies delivery and all that stuff.

**中文翻译:**
我想其中的教训还有：不要想太多，不要试图做得太“精巧”。比如试图做一个完美的 Beta 测试，而没有意识到我们其实只需要更多的人参与。此外，你提到的 5 美元促销让我想起了早期送冰淇淋、送兔子之类的促销活动。

---

### [01:03:13] Brian Tolkin

**English:**
Yeah. That was by the way, a example of fully distributed, the benefit of having those early Petri dishes. Someone a local marketing manager like, Hey, this would be fun. Yeah, that would be really fun. The platform can support it. And those promotions were fantastic. And it started out, I can't remember if the first one was ice cream or puppies, I think it was ice cream. But yeah, branched into all sorts of stuff. Boats, ice cream, puppies, kittens, I think, and all credit goes to local ideas of inspiration just being focused on trying to grow within.

**中文翻译:**
是的。顺便说一下，那是“完全去中心化”的一个例子，也是早期那些“培养皿”的好处。某个本地营销经理说：“嘿，这应该挺好玩的。”“是的，确实好玩，平台也支持。”那些促销活动棒极了。我不记得第一个是送冰淇淋还是送小狗了，好像是冰淇淋。后来扩展到了各种东西：船、冰淇淋、小狗、小猫。所有的功劳都归功于那些专注于本地增长的灵感。

---

### [01:03:56] Lenny Rachitsky

**English:**
I love that we've circled back to the beginning of our conversation, product and ops working together, the benefits of both. Before we get to a very exciting lightning round, is there anything else that you wanted to share? Any last nuggets of wisdom that you think might be useful to people when they're trying to build product companies teams?

**中文翻译:**
我喜欢我们又绕回了谈话的起点：产品和运营的协作及其各自的优势。在进入令人兴奋的闪电轮（Lightning Round）之前，还有什么想分享的吗？对于那些正在构建产品公司或团队的人，还有什么最后的建议吗？

---

### [01:04:13] Brian Tolkin

**English:**
This was great. We covered quite a bit of ground. I think the only, I don't know if this is a generalized wisdom, but something I've been thinking about as my career has progressed a little bit, especially building out proper organizations, especially as more tools come online, it's very clear that there's different types of PMs and we spent a lot of time talking about once we can operate in the physical and the digital or the product and operations worlds. But even within that, there's more technical PMs who grew up in minute engineering discipline. There are people who came from ops and there are people who came from design and grew up in a more user experience background.

**中文翻译:**
这太棒了，我们聊了很多。我不知道这算不算普适的智慧，但随着职业生涯的发展，特别是在构建正规组织的过程中，我一直在思考一件事：随着更多工具的出现，很明显存在不同类型的 PM（产品经理）。我们花了很多时间讨论那些能跨越物理和数字世界、或产品和运营世界的 PM。但即便在其中，也有更偏技术的 PM（出身于工程学科），有出身于运营的 PM，还有出身于设计、有更深用户体验背景的 PM。

---

### [01:05:01] Brian Tolkin

**English:**
And one thing that I've been moved on as is build out the team is thinking similar to a product roadmap is it's not really about is this person good or bad or whatever, it's is this person's skillset and context to the problem that is really needed. And so back to that conversation on, hey, where do we get tech leverage? It's like, Hey, is this person who has this unique skillset as a PM for this problem type? I don't know if that's helpful, but it's something I've been spending a lot of time thinking about, especially this view job posting niche view product manager. Or it's actually like, well, how can we be a little bit more thoughtful about what the actual skillset needs off this type of team?

**中文翻译:**
在组建团队时，我学到的一点是（类似于思考产品路线图）：这不在于这个人是好是坏，而在于这个人的技能组合和背景是否正是解决该问题所需要的。回到关于“技术杠杆在哪里”的讨论，关键在于：“对于这种类型的问题，这个拥有独特技能组合的 PM 是合适的人选吗？”我不知道这是否有用，但我确实花了很多时间思考这个问题，尤其是现在很多招聘启事都在找“垂直领域”的产品经理。实际上，我们应该更深入地思考：这个团队真正需要的技能组合是什么？

---

### [01:05:47] Lenny Rachitsky

**English:**
Awesome. It's like a person product fit.

**中文翻译:**
太棒了。这就像是“人与产品的匹配”（Person-Product Fit）。

---

### [01:05:50] Brian Tolkin

**English:**
There you go.

**中文翻译:**
没错。

---

### [01:05:50] Lenny Rachitsky

**English:**
And I think it's because a lot of companies hire generalists and they're just like, we'll hire someone smart, ambitious, and with experience and general experience and then we'll put them on different things. So I think these are two different philosophies and it probably makes a lot of sense for an Opendoor with very unique type of business, with very specific skills that are necessary to be really good there. Okay, amazing. Brian, with this, we've reached our very exciting lightning round. Are you ready?

**中文翻译:**
我想这是因为很多公司倾向于招聘“全才”（Generalists），他们觉得只要招到聪明、有野心、有通用经验的人，然后把他们放在不同的岗位上就行。我认为这是两种不同的哲学。对于 Opendoor 这种业务类型非常独特、需要特定技能才能做好的公司来说，你的这种思考方式非常有意义。好，太棒了。Brian，现在进入我们非常精彩的闪电轮。准备好了吗？

---

### [01:06:16] Brian Tolkin

**English:**
Let's do it. Can't wait.

**中文翻译:**
开始吧，等不及了。

---

### [01:06:17] Lenny Rachitsky

**English:**
Let's do it. First question, what are two or three books that you've recommended most to other people?

**中文翻译:**
好。第一个问题：你向别人推荐最多的两三本书是什么？

---

### [01:06:23] Brian Tolkin

**English:**
Shoe dog, Black Swan, Design of Everyday Things, and for a fun one, Shawn Theron.

**中文翻译:**
《鞋狗》（Shoe Dog）、《黑天鹅》（Black Swan）、《设计心理学》（Design of Everyday Things），还有一本有趣的《Shawn Theron》（注：此处可能指某本特定传记或书籍）。

---

### [01:06:36] Lenny Rachitsky

**English:**
Amazing. Four books for the price of two to three. I love it.

**中文翻译:**
太棒了，两三本书的价格给了四本。我喜欢。

---

### [01:06:40] Brian Tolkin

**English:**
Apologies. I'll stick to the rules.

**中文翻译:**
抱歉，我会遵守规则的。

---

### [01:06:42] Lenny Rachitsky

**English:**
No, no, there's no rules. There are no rules.

**中文翻译:**
不不，没有规则，这里没有规则。

---

### [01:06:45] Brian Tolkin

**English:**
There you go.

**中文翻译:**
那就好。

---

### [01:06:46] Lenny Rachitsky

**English:**
Next question, do you have a favorite recent movie or TV show that you've really enjoyed?

**中文翻译:**
下一个问题：最近有没有你非常喜欢的电影或电视剧？

---

### [01:06:50] Brian Tolkin

**English:**
I like the sports docu ones on Netflix, so Full Swing, Drive to Survive, Break Points, tennis, golf, F1, all of them.

**中文翻译:**
我喜欢 Netflix 上的体育纪录片，比如《全力挥杆》（Full Swing）、《极速求生》（Drive to Survive）、《破发点》（Break Point），网球、高尔夫、F1，所有的我都爱看。

---

### [01:07:02] Lenny Rachitsky

**English:**
And wasn't there that Nike documentary recently with Ben Affleck?

**中文翻译:**
最近是不是还有一部本·阿弗莱克演的关于耐克的纪录片（电影《Air》）？

---

### [01:07:05] Brian Tolkin

**English:**
There is, which I have not seen. So if it's good, I don't know if that's a recommendation or just an acknowledgement.

**中文翻译:**
是的，但我还没看。如果它好看的话，我不知道这算推荐还是仅仅是确认。

---

### [01:07:12] Lenny Rachitsky

**English:**
It's worth watching. If you like Shoe Dog, I feel like you'd enjoy it. It was entertaining Michael Jordan, things like that. Next question, do you have a favorite product that you have recently discovered that you really love?

**中文翻译:**
值得一看。如果你喜欢《鞋狗》，我觉得你会喜欢的。它很有趣，讲了迈克尔·乔丹之类的事。下一个问题：你最近发现并非常喜爱的产品是什么？

---

### [01:07:24] Brian Tolkin

**English:**
So we just got a puppy and we are about to have our first child. And so all of my purchases recently are puppies and children focused. My buddy gifted us the Phi collar for our dog, and so we've been really enjoying that. Another one as I'm getting busier for news and stuff is Particle, which is a great news aggravation tool, AI news tool.

**中文翻译:**
我们刚养了一只小狗，而且我们的第一个孩子快出生了。所以我最近买的所有东西都围绕着狗和孩子。我朋友送了我们一个 Phi 狗狗项圈，我们用得很开心。另一个是因为我最近看新闻越来越忙，我发现 Particle 很好用，它是一个很棒的 AI 新闻聚合工具。

---

### [01:07:54] Lenny Rachitsky

**English:**
Cavan's wife's business. I am a huge fan, actually I think it just came out of beta and now it's like a full app that anyone can download. I just actually installed it yesterday again and I love it. I get these pushes every few... I don't know, it's like a couple of times a day of just like, here's what's happening. Also, congratulations I should have said on your pending child.

**中文翻译:**
那是 Kayvon 妻子的公司。我是它的忠实粉丝，实际上它刚结束测试，现在是一个任何人都可以下载的完整应用了。我昨天刚重新安装，非常喜欢。我每天会收到几次推送，告诉我发生了什么。另外，我应该先祝贺你即将迎来孩子。

---

### [01:08:16] Brian Tolkin

**English:**
Thank you.

**中文翻译:**
谢谢。

---

### [01:08:17] Lenny Rachitsky

**English:**
Lucky for you. I have a newsletter post with all the products you should buy, it's called New Parent Gift Guide for Product Managers.

**中文翻译:**
你很幸运。我有一篇通讯文章，列出了你应该买的所有产品，叫《产品经理新手父母礼物指南》。

---

### [01:08:24] Brian Tolkin

**English:**
Love it. I will definitely probably buy all of them.

**中文翻译:**
太棒了，我大概会把它们全买了。

---

### [01:08:30] Lenny Rachitsky

**English:**
If you don't already have them all. And now everyone's probably sending you their spreadsheets of all their favorite stuff there.

**中文翻译:**
如果你还没买齐的话。现在估计每个人都在给你发他们最爱用的育儿产品清单表格。

---

### [01:08:30] Brian Tolkin

**English:**
Exactly.

**中文翻译:**
没错。

---

### [01:08:35] Lenny Rachitsky

**English:**
Okay, next question. Do you have a favorite life motto that you often come back to share with people either in work or life?

**中文翻译:**
好，下一个问题。你有没有最喜欢的人生格言，经常在工作或生活中与人分享？

---

### [01:08:41] Brian Tolkin

**English:**
Well, mostly just stay curious.

**中文翻译:**
嗯，主要是“保持好奇心”。

---

### [01:08:44] Lenny Rachitsky

**English:**
Stay curious. I love it. Two more questions. Who has most influenced you in the course of your career?

**中文翻译:**
保持好奇心，我喜欢。最后两个问题。在你的职业生涯中，谁对你的影响最大？

---

### [01:08:54] Brian Tolkin

**English:**
One of the people who inspired me very early on in my product journey. I've been fortunate to have a number of very good mentors and obviously we talked about earlier while I was founders of books or me a lot from other people's journey. But one person who was personally important to me early in my product journey and very supportive of this guy named Jeff Holden, who was the chief product officer at Uber back in the day, and is like a young PM transferring into product really took me under his wing. And I think I'm forever grateful for that, for Jeff, for helping grow my career, but also try to pay it forward a little bit in terms of people who are going in the career. That was really meaningful for me.

**中文翻译:**
在我产品生涯的早期，有一个人给了我很大启发。我很幸运有很多优秀的导师，当然我们也聊过那些书里的创始人故事。但对我个人来说，早期非常重要且支持我的人是 Jeff Holden，他是当时的 Uber 首席产品官。作为一个刚转行做产品的年轻 PM，他真的非常关照我。我永远感激 Jeff 对我职业生涯的提拔，我也在努力把这种精神传递下去，去帮助那些刚起步的人。那对我来说意义重大。

---

### [01:09:42] Lenny Rachitsky

**English:**
Last question. I hear that your interview at Uber was pretty wild. Can you tell that story?

**中文翻译:**
最后一个问题。我听说你在 Uber 的面试经历非常疯狂。能讲讲那个故事吗？

---

### [01:09:48] Brian Tolkin

**English:**
Yeah, I can. So, long story short, I was starting a company my senior spring before graduation and we had to go our separate ways. So I hadn't done traditional recruiting ever. And my buddy called me up and was like, "Hey, we're looking for smart, hardworking people at this Uber thing. Are you interested?" And quick side note, I had actually done some very early diligence work on these taxi apps back in 2011, looking at the time was Uber Cab and Cabilis and Taxi Manage can probably names nothing these days. And so I knew what Uber was and so I said, "Yeah, sure, I would love to." And so I had the first round of interview went well, and they said, great. And at that stage is come on onsite, the full enchilada one works, and this was post-graduation and was helping out some companies but didn't have a full-time job.

**中文翻译:**
好的。长话短说，我大四毕业前的那个春天正在创业，后来合伙人分道扬镳了。所以我从来没参加过传统的校招。我朋友给我打电话说：“嘿，Uber 这边在招聪明、勤奋的人，你有兴趣吗？”顺便提一下，我其实在 2011 年就对这些打车软件做过一些早期的尽职调查，当时看了 Uber Cab、Cabilis 和 Taxi Manage（这些名字现在估计没人知道了）。所以我知道 Uber 是什么，我说：“好啊，我很乐意。”第一轮面试很顺利，他们说太好了，接下来是全天的现场面试（Onsite）。当时我已经毕业了，正在帮几家公司做事，但还没有全职工作。

---

### [01:10:51] Brian Tolkin

**English:**
So I said, hey, I'm pretty flexible. How about next Tuesday? I said, great. So we scheduled it and then on Friday or Saturday or over the weekend I looked, I'm like, oh, Tuesday's, July 4th. I scheduled my interview for July 4th. And so I called my buddy and I'm like, hey, I am so sorry. I don't want to make people in on July 4th. Should I cancel? Should I reach out? Everyone's accepted. Whatever you do, do not cancel your interview. Like, okay, I'll be there on July 4th. And so I went in to the office on July 4th and there was a very small handful of people there. It was actually launching that day, was launching Uber's second ever product type, which was Uber SUV. And I had this, I think it was probably five hour gauntlet interview on July 4th from noon to five and missed my July 4th barbecue. And it was quite the experience, but I think maybe set the stage for some of the early days chaos. I'm very glad I didn't cancel the interview.

**中文翻译:**
我说：“嘿，我的时间很灵活，下周二怎么样？”他们说太好了。于是我们定好了时间。结果周五或周六的时候我一看日历：“噢，周二是 7 月 4 日（美国独立日假期）。”我竟然把面试定在了 7 月 4 日。我赶紧给朋友打电话：“嘿，真抱歉，我不想让大家在 7 月 4 日还跑来面试。我该取消吗？该联系他们吗？”他说：“大家都接受邀请了。无论如何，千万不要取消面试。”我说好吧，那我就 7 月 4 日去。那天我去了办公室，只有寥寥几个人。那天其实是 Uber 发布第二个产品类型 Uber SUV 的日子。我在 7 月 4 日那天从中午 12 点到下午 5 点进行了一场长达 5 小时的“车轮战”面试，错过了国庆烧烤。那真是一次难忘的经历，但也为早期的混乱局面定下了基调。我很庆幸当时没取消面试。

---

### [01:11:58] Lenny Rachitsky

**English:**
And was Travis involved in that interview or is it just-

**中文翻译:**
Travis（Uber 创始人）参与了那次面试吗？还是只是……

---

### [01:11:59] Brian Tolkin

**English:**
Travis was involved in the interview. She was one of the... I think there were four or five people, and the two who were generally guiding my interview process and Travis and one other person starting that day. And part of the gauntlet interview was a simulation of the job, if you will. And so some of that was building some novels on the computers and some of it was writing potential emails to drivers and if she had the driver come in and you did chat, so I was in this room by myself typing away on the first part, which was building the model. And I hear him knock on the door and Travis comes in and he just sits down and says, "Hi, I'm Travis." I don't know who you are, but I'm Brian, and we have a 45-minute chat, or maybe it's been about half hour, 45 minutes. And clearly I'm not producing the work that I'm supposed to of the interview.

**中文翻译:**
Travis 参与了。当时大概有四五个人面试我，其中两个主要负责流程，还有 Travis 和另一个当天入职的人。面试的一部分是“工作模拟”。有些是在电脑上建模，有些是给司机写邮件，或者模拟司机进来和你聊天。我当时一个人在房间里敲键盘做第一部分（建模）。我听到敲门声，Travis 走了进来，坐下说：“嗨，我是 Travis。”我说：“我不知道你是谁，我是 Brian。”然后我们聊了大概 30 到 45 分钟。显然，我当时并没有在做面试要求的那些工作。

---

### [01:12:59] Brian Tolkin

**English:**
I'm supposed to be building this model. I'm supposed to email it back to the person who sent it to me. Clearly I've done nothing chatting with the CEO. And I hear a knock on the door and the door opens and the person sees that I'm talking to Travis, "Oh, continue, continue" and it was very good. Also, pretty intense conversation with Travis that definitely set the expectations working there.

**中文翻译:**
我本该在建模，然后发邮件给面试官。结果我啥也没干，光顾着跟 CEO 聊天了。这时有人敲门，门开了，那人看到我在跟 Travis 聊天，就说：“噢，你们继续，继续。”那次谈话很棒，但也非常激烈，确实让我对在那儿工作的预期有了底。

---

### [01:13:24] Lenny Rachitsky

**English:**
And clearly worked out. And Travis was happy. Is what-

**中文翻译:**
显然结果很好，Travis 也很满意。

---

### [01:13:28] Brian Tolkin

**English:**
I hope so.

**中文翻译:**
希望如此。

---

### [01:13:28] Lenny Rachitsky

**English:**
... I imagine.

**中文翻译:**
我想是的。

---

### [01:13:30] Brian Tolkin

**English:**
Yes.

**中文翻译:**
是的。

---

### [01:13:30] Lenny Rachitsky

**English:**
Amazing. Brian, thank you so much for being here. We went through everything that I was hoping to get through. Two final questions. Where can folks find you online, and is there anything you want them to check out that you might be up to? And how can listeners be useful to you?

**中文翻译:**
太棒了。Brian，非常感谢你能来。我们聊完了所有我希望能涵盖的话题。最后两个问题：大家可以在哪里在线找到你？有什么你想让大家关注的动态吗？听众们能为你提供什么帮助吗？

---

### [01:13:44] Brian Tolkin

**English:**
Super kind. They can find me online on Twitter, LinkedIn, both just Brian Tolkin, my name. In terms of being useful, if you have a home to sell, feel free to go on to Opendoor. More importantly, if you have feedback on the product, but would love to hear it. Otherwise, any feedback on what people liked or would love to learn more about from what we chatted about would be super great. So I'd love to hear from you.

**中文翻译:**
你太客气了。大家可以在 Twitter 和 LinkedIn 上找到我，直接搜我的名字 Brian Tolkin 即可。至于帮助，如果你有房子要卖，欢迎去 Opendoor。更重要的是，如果你对产品有任何反馈，我很乐意倾听。另外，如果大家对我们今天聊的内容有什么喜欢的地方，或者想了解更多，也请告诉我。我很期待听到你们的声音。

---

### [01:14:09] Lenny Rachitsky

**English:**
Brian, thank you so much for being here.

**中文翻译:**
Brian，非常感谢你能来。

---

### [01:14:12] Brian Tolkin

**English:**
Lenny, I really appreciate it. This was great. Bye everyone.

**中文翻译:**
Lenny，非常感谢。这次谈话很棒。大家再见。

---

### [01:14:16] Lenny Rachitsky

**English:**
Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
非常感谢您的收听。如果您觉得本期节目有价值，可以在 Apple Podcasts、Spotify 或您喜欢的播客应用中订阅。此外，请考虑给我们评分或留下评论，这能极大地帮助其他听众发现本播客。您可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目再见。