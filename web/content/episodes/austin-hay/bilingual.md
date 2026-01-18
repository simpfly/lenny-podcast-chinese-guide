# Austin Hay - 双语对照

This is the complete bilingual transcript for Lenny's Podcast featuring Austin Hay.

---

### (00:00:00) Austin Hay

**English:**
From 2010 to 2020, we had the golden years of deterministic matching where it was very easy to run an ad and understand with precision who installed the app. Maybe you didn't know their name, but you actually would know their IDFA and you could tie that to their PII. You can't do that anymore. So, what that means is these ad networks are becoming more complex, sophisticated, and interesting, right at the same time that it's harder for marketers to really understand how they're spending money. And so I am paying a lot of attention to how marketers make decisions with probabilistic data because most of the work that I'm doing now is actually saying, well, given that we don't have determinist data about a per certain audience or where somebody came from, how can I find other information that will create a model for 30% of the population and we can use that to extrapolate to a hundred.

**中文翻译:**
从 2010 年到 2020 年，我们经历了“确定性匹配”（deterministic matching）的黄金十年。在那段时间，投放广告并精确了解是谁安装了应用非常容易。也许你不知道他们的名字，但你确实知道他们的 IDFA（广告标识符），并且可以将其与他们的 PII（个人身份信息）关联起来。现在你不能再这么做了。这意味着，就在营销人员越来越难真正理解钱是怎么花掉的同时，这些广告网络正变得更加复杂、精细且有趣。因此，我正密切关注营销人员如何利用“概率性数据”（probabilistic data）做出决策。因为我现在的大部分工作实际上是在思考：既然我们没有关于特定受众或来源的确定性数据，我该如何找到其他信息，为 30% 的人群建立模型，然后将其推演到 100% 的人群中。

---

### (00:00:52) Lenny

**English:**
Welcome to Lenny's Podcast, where I interview you world-class product leaders and growth experts to learn from their hardwood experiences building and growing today's most successful products. Today my guest is Austin Hay. Austin is one of the smartest people in the world on the field of MarTech, aka Marketing Technology. He's advised companies like Notion, Airbnb, Walmart, Postmates, Robinhood, even Pete's Coffee and Mars on their MarTech strategy and tactics. He's currently head of marketing technology at Ramp. Before that, he was VP of business operations at Runway. Before that, he was VP of growth at mParticle and the fourth employee at the Unicorn Branch Metrics. He's also a teacher at Reforge on this very topic of MarTech. In our conversation, Austin explains what exactly is MarTech, how it fits into your growth organization when you need to hire a MarTech person and what to look for plus his favorite interview questions.

**中文翻译:**
欢迎来到 Lenny 的播客。在这里，我会采访世界级的跨国产品负责人和增长专家，从他们构建和增长当今最成功产品的实战经验中学习。今天的嘉宾是 Austin Hay。Austin 是全球营销技术（MarTech）领域最聪明的人之一。他曾为 Notion、Airbnb、沃尔玛、Postmates、Robinhood，甚至皮爷咖啡（Pete's Coffee）和玛氏（Mars）提供过 MarTech 战略和战术方面的咨询。他目前是 Ramp 的营销技术负责人。在此之前，他是 Runway 的业务运营副总裁。更早之前，他是 mParticle 的增长副总裁，也是独角兽公司 Branch Metrics 的第四号员工。他还是 Reforge 平台上专门讲授 MarTech 课题的讲师。在我们的对话中，Austin 解释了究竟什么是 MarTech，它如何融入你的增长团队，你什么时候需要雇佣一名 MarTech 专家，以及招聘时该看重什么，此外他还分享了他最喜欢的面试问题。

---

### (00:01:43) Lenny (Continued)

**English:**
Also, his favorite tools, frameworks, team structures, and emerging platforms that he's most excited about. This episode is for anyone who's responsible for growth and is curious about ways to optimize your approach and how marketing technology fits into that. Enjoy this episode with Austin Hay after a short word from our sponsors. Today's episode is brought to you by OneSchema, the embeddable CSV importer for SaaS. Customers always seem to want to give you their data in the messiest possible CSV file. And building a spreadsheet importer becomes a never ending sync for your engineering and support resources. You keep adding features to your spreadsheet importer, but customers keep running into issues. Six months later, you're fixing yet another date conversion edge case bug. Most tools aren't built for handling messy data, but OneSchema is.

**中文翻译:**
此外，他还分享了他最喜欢的工具、框架、团队结构以及他最看好的新兴平台。这一集适合任何负责增长、并好奇如何优化方法以及营销技术如何发挥作用的人。在听完赞助商的简短介绍后，请欣赏与 Austin Hay 的对话。本集节目由 OneSchema 为您呈现，它是面向 SaaS 的可嵌入式 CSV 导入器。客户似乎总是想把数据放在最乱的 CSV 文件里给你。而构建一个电子表格导入器会变成工程和支持资源无休止的消耗。你不断给导入器增加功能，但客户还是会遇到问题。六个月后，你还在修复另一个日期转换的边缘案例 Bug。大多数工具都不是为了处理乱七八糟的数据而设计的，但 OneSchema 是。

---

### (00:02:28) Lenny (Continued)

**English:**
Companies like Scale AI and PAVE are using OneSchema to make it fast and easy to launch delightful spreadsheet import experiences from embeddable CSV import to importing CSVs from an SFTP folder on a recurring basis. Spreadsheet import is such an awful experience in so many products. Customers get frustrated by useless messages like error on line 53 and never end up getting started with your product. OneSchema intelligently corrects messy data so that your customers don't have to spend hours in Excel just to get started with your product.

**中文翻译:**
像 Scale AI 和 PAVE 这样的公司正在使用 OneSchema，快速轻松地推出令人愉悦的电子表格导入体验——从可嵌入的 CSV 导入到定期从 SFTP 文件夹导入 CSV。在许多产品中，电子表格导入体验都非常糟糕。客户会被像“第 53 行错误”这样无用的提示搞得很沮丧，最终根本没法开始使用你的产品。OneSchema 能智能地纠正混乱的数据，这样你的客户就不必为了开始使用你的产品而在 Excel 中耗费数小时。

---

### (00:02:59) Lenny (Continued)

**English:**
For listeners of this podcast, OneSchema is offering a $1,000 discount. Learn more at oneschema.co/lenny. This episode is brought to you by Mixpanel. Get deep insights into what your users are doing at every stage of the funnel at a fair price that scales as you grow. Mixpanel gives you quick answers about your users from awareness to acquisition through retention, and by capturing website activity, ad data, and multi-touch attribution, right in Mixpanel, you can improve every aspect of the full user funnel. Powered by first party behavioral data instead of third party cookies. Mixpanel is built to be more powerful and easier to use than Google Analytics. Explore plans for teams of every size and see what Mixpanel can do for you at mixpanel.com/friends/lenny. And while you're at it, they're also hiring. So, check it out at mixpanel.com/friends/lenny. Austin, thank you so much for being here. Welcome to the podcast.

**中文翻译:**
对于本播客的听众，OneSchema 提供 1,000 美元的折扣。欲了解更多信息，请访问 oneschema.co/lenny。本集节目由 Mixpanel 为您呈现。以公平的价格深入洞察用户在漏斗每个阶段的行为，并随您的增长而扩展。Mixpanel 能为您提供关于用户的快速答案，从认知、获取到留存。通过在 Mixpanel 中直接捕捉网站活动、广告数据和多触点归因（multi-touch attribution），您可以改善整个用户漏斗的方方面面。Mixpanel 由第一方行为数据而非第三方 Cookie 驱动，其设计比 Google Analytics 更强大且更易用。在 mixpanel.com/friends/lenny 探索适合各种规模团队的方案，看看 Mixpanel 能为您做些什么。顺便提一下，他们也在招聘，请访问 mixpanel.com/friends/lenny 查看。Austin，非常感谢你能来，欢迎来到本播客。

---

### (00:04:03) Austin Hay

**English:**
Lenny. Thank you so much for having me.

**中文翻译:**
Lenny，非常感谢你邀请我。

---

### (00:04:04) Lenny

**English:**
We are going to get super nerdy today and we're going to dive deep into the very cool field of MarTech. How excited are you about us chatting about MarTech?

**中文翻译:**
我们今天会聊得非常“极客”（nerdy），深入探讨 MarTech 这个非常酷的领域。对于我们要聊 MarTech 这件事，你有多兴奋？

---

### (00:04:21) Austin Hay

**English:**
I'm so excited. Because it seems like you might be one of the first people in product and growth to talk about MarTech.

**中文翻译:**
我太兴奋了。因为你似乎是产品和增长领域中，最早开始讨论 MarTech 的人之一。

---

### (00:04:21) Lenny

**English:**
Wow, okay. That makes me even more excited. Yeah, it's something that I haven't fully understood and so I'm excited to dig real deep. So, let's start with just the basics. What exactly is MarTech and then what does someone who is in MarTech do?

**中文翻译:**
哇，好吧。这让我更兴奋了。是的，这是我还没有完全理解的领域，所以我很期待能深入挖掘。那么，让我们从最基础的开始。究竟什么是 MarTech？在 MarTech 领域工作的人具体是做什么的？

---

### (00:04:35) Austin Hay

**English:**
Such a good question. Because marketing technology is like this very amorphous, cross-functional discipline that lives at the crossroads of product and growth and engineering and marketing. It brings together processes and systems from a wide range of disciplines. And I think really the way to think about marketing technology is it's a product manager whose specific role and focus is the system or the third party or first party platform because marketing technology can mean a collection of third party tools, which is a lot of people think, but as a company scales and grows actually it could include a collection of first party homegrown solutions that you build yourself with or in addition to third party. So, I like to think about marketing technology more as one piece is people and process and the other is the system and the platform. And that probably sounds pretty familiar to what a lot of product people think about their world as, and that's how I define MarTech.

**中文翻译:**
问得太好了。因为营销技术（MarTech）就像是一个非常模糊、跨职能的学科，它处于产品、增长、工程和营销的交汇点。它汇集了来自广泛学科的流程和系统。我认为理解营销技术最贴切的方式是：它就像是一个产品经理，其特定的角色和关注点是系统，或者是第三方或第一方平台。很多人认为 MarTech 只是第三方工具的集合，但随着公司规模的扩大，它实际上可能包括你自己构建的一系列第一方自研解决方案，用来配合或补充第三方工具。所以，我倾向于将营销技术看作两部分：一部分是人员和流程，另一部分是系统和平台。这听起来可能和很多产品人对自己领域的定义很像，这就是我定义 MarTech 的方式。

---

### (00:05:31) Austin Hay (Continued)

**English:**
And then you asked this other question around what exactly the role of somebody in MarTech, and maybe we'll talk about this a little later, but it's such a function of the size and the stage of the company that you're at. At Airbnb, I would say Dmitri who you might've worked with was the MarTech guide. He managed a lot of our Airbnb's, the first and third party tools. Airbnb at that size was, I don't know, maybe 800 people or so. And so it makes sense to have a function with product and engineering resources. A small startup for example, when I was working with Siqi, we were just talking about this at Runway, there was no such thing as MarTech. There was me and Tanner and Siqi standing up tools and using them because you just have to use the tools to get the job done. And so I would say on the spectrum of what is MarTech, you really have to look at the size and the stages of the company and as you grow you start to see it become more refined or pronounced.

**中文翻译:**
关于 MarTech 人员的具体职责，我们稍后可能会详细聊，但这很大程度上取决于公司规模和所处的阶段。在 Airbnb，我想你可能共事过的 Dmitri 就是 MarTech 的领路人。他管理着 Airbnb 的许多第一方和第三方工具。当时 Airbnb 的规模大概有 800 人左右，所以拥有一个配备产品和工程资源的职能部门是合理的。但在小型初创公司，比如我和 Siqi Chen 在 Runway 共事时，根本没有 MarTech 这个说法。只有我、Tanner 和 Siqi 在搭建和使用工具，因为你必须使用工具才能完成工作。所以，在 MarTech 的光谱上，你必须看公司的规模和阶段；随着公司的成长，你会看到这个职能变得越来越精细和显著。

---

### (00:06:17) Lenny

**English:**
So, if someone listening to this that has done growth or has a growth PM may be like, oh, but this is sort of what I do. What is the difference between someone that just runs growth or has a growth team versus someone that's specifically a MarTech person?

**中文翻译:**
所以，如果听众里有人做过增长，或者本身就是增长产品经理（Growth PM），他们可能会觉得：“噢，这不就是我做的事吗？”那么，一个仅仅负责增长或领导增长团队的人，与一个专门的 MarTech 专家之间有什么区别？

---

### (00:06:30) Austin Hay

**English:**
At some levels there's maybe no difference. There's a lot of startups I would say are 30 people or less where you have a growth team and your growth acquisition person is using a CDP to send data to their ad network to run their ads because that's part of their job and maybe they are the MarTech person. And actually you find a lot of people who consider themselves MarTech professionals now having started in growth or user acquisition roles because they had to just use tools in order to get their jobs done. But what I would say is as a company grows and scales, it moves from being a community or village driven aspect of your products to being something that's centrally owned. If you're a startup, again, like 30 to 40 people, everybody might chip in to manage your CDP or use Amplitude or build a first party solution on top of those.

**中文翻译:**
在某些层面上，可能确实没有区别。在很多 30 人以下的初创公司，增长团队里的获客人员会使用 CDP（客户数据平台）将数据发送到广告网络来投放广告，因为这是他们工作的一部分，这时他们可能就是那个 MarTech 负责人。事实上，你会发现很多现在的 MarTech 专业人士最初都是从增长或用户获取（UA）岗位开始的，因为他们必须使用这些工具才能完成工作。但我想说的是，随着公司的成长和规模化，它会从产品中一个由“社区”或“村庄”驱动的部分，转变为由中心化部门拥有的东西。如果你是一家 30 到 40 人的初创公司，每个人都可能参与管理 CDP、使用 Amplitude 或在这些工具之上构建第一方解决方案。

---

### (00:07:16) Austin Hay (Continued)

**English:**
It's a mixture of first and third party tools and engineering and product and marketing all work together on it. That doesn't scale though. As you cross a hundred to 200 people, somebody has to be responsible for knowing how data flows through tools, how it's worked, what's the schema. And that's not even considering procurement and legal stuff. You have infinite liability if you don't manage your contracts well. And so usually around I would call it a hundred to 150 people is the critical mass where you can't just have a village approach to systems and tools much like in the IT org, if it was a village approach to SSO businesses would be in a lot of danger. That's where you typically start to see the question of, all right, we need a systems and tools person. We need somebody to manage these systems and manage that platform.

**中文翻译:**
这是第一方和第三方工具的混合体，工程、产品和营销部门都在协作。但这种模式无法规模化。当你的人数超过 100 到 200 人时，必须有人负责了解数据如何在工具间流动、如何运作、Schema（数据模式）是什么。这还没考虑到采购和法律事务。如果你不管理好合同，你将面临无限的责任风险。因此，通常在 100 到 150 人左右是一个临界点，你不能再用这种“全村出动”的方式来管理系统和工具了。就像在 IT 部门，如果用这种方式管理 SSO（单点登录），企业会面临巨大危险。这就是你通常开始看到这种需求的时候：我们需要一个专门负责系统和工具的人，需要有人来管理这些系统和平台。

---

### (00:08:01) Austin Hay (Continued)

**English:**
And there's a variety of ways it can go. I've seen it go just into pure product that's with a product operations org and a product ops person actually will manage a lot of third and first party tools. I've seen it go into the IT org, Walmart for example, at a really big scale. They had a MarProd function which was marketing products. It was product within the marketing function or product that was designed to serve marketing. And then of course you can have more traditional routes like you can have marketing technology as a single standalone unit or business technology as a standalone unit. Some of this depends too on whether the business is B2C versus B2B. Classically in a B2B business you see it in rev ops or some types of systems role because you have to serve not only users coming into your funnel, but then the businesses that you're serving afterwards.

**中文翻译:**
这有多种发展路径。我见过它归入纯产品部门，由产品运营（Product Ops）组织管理，产品运营人员实际上会管理大量的第三方和第一方工具。我也见过它归入 IT 部门，比如规模巨大的沃尔玛。他们有一个 MarProd 职能，即“营销产品”。它是营销职能内部的产品团队，或者是专门为营销服务的产品团队。当然，你也可以走更传统的路线，比如将营销技术作为一个独立的单元，或者将业务技术（BizTech）作为一个独立单元。这在一定程度上也取决于业务是 B2C 还是 B2B。在典型的 B2B 业务中，你会看到它存在于营收运营（RevOps）或某种系统角色中，因为你不仅要服务于进入漏斗的用户，还要服务于后续对接的企业客户。

---

### (00:08:46) Austin Hay (Continued)

**English:**
That's also where you typically see tools like Salesforce coming into play and more advanced CRMs. In a B2C business, your user funnel is actually really simple acquiring users and you're getting them into your product and then product is taking them over. There's no additional CRM, so usually your CDP is the source of truth and that's where you might actually see marketing technology fit in with growth a lot more. Just some examples like at Postmates, I worked for them for a long time as a consultant. Marketing technology was just part of growth. We had a director of growth even before that, Siqi Chen who's the CEO of runway, and I guess you were his first manager as I just learned, he was the first VP of growth and marketing technology was just part of growth and product owned that as a system.

**中文翻译:**
这也是 Salesforce 等工具和更高级的 CRM（客户关系管理）发挥作用的地方。在 B2C 业务中，用户漏斗其实非常简单：获取用户，引导他们进入产品，然后由产品团队接手。通常没有额外的 CRM，所以你的 CDP 就是“事实来源”（source of truth），在这种情况下，你会看到营销技术更多地与增长团队结合。举几个例子，比如在 Postmates，我作为顾问为他们工作了很长时间，营销技术就是增长的一部分。在那之前，我们有一位增长总监，也就是 Runway 的 CEO Siqi Chen（我刚得知你曾是他的第一任经理），他是第一任增长副总裁，营销技术当时只是增长的一部分，由产品团队作为系统来拥有。

---

### (00:09:30) Austin Hay (Continued)

**English:**
As a different example though, at Ramp we're big enough and we're a B2B company, but we have a B2C top of funnel where we try to acquire users and get them to fill out our application to get a credit card. We have a distinct revenue operations team that's broken into business technology and marketing technology. So, there's lots of flavors of how it can exist. I think that's kind of the interesting and fun part of Marketing Tech is that it's not just one single version of the world that you apply to many companies, there's like a million variations that I've seen and they all kind of look to solve the same problem.

**中文翻译:**
再举个不同的例子，在 Ramp，我们的规模已经足够大，而且我们是一家 B2B 公司，但我们有一个 B2C 式的漏斗顶端，我们会尝试获取用户并让他们填写申请表以获得信用卡。我们有一个专门的营收运营团队，分为业务技术和营销技术。所以，MarTech 的存在形式有很多种。我认为这就是营销技术有趣的地方——它不是一个可以套用到所有公司的单一模式，我见过上百万种变体，但它们本质上都在试图解决相同的问题。

---

### (00:10:00) Lenny

**English:**
So, to make it even more specific and really simple for people to think about what someone in MarTech does, essentially it's using technology and tools to drive growth. Is that a simple way of thinking about this one specific roles?

**中文翻译:**
所以，为了让大家更具体、更简单地理解 MarTech 人员的工作，本质上就是利用技术和工具来驱动增长。这是理解这个特定角色的一种简单方式吗？

---

### (00:10:11) Austin Hay

**English:**
Totally. That's exactly right. And I have this adage I always say, which is tools are just meant to solve problems. And the problem set for marketing technologists and business technologists is you focus on the tools.

**中文翻译:**
完全正确。我有一句常说的话：工具只是为了解决问题而存在的。而营销技术专家和业务技术专家要解决的问题集，就是专注于这些工具。

---

### (00:10:24) Lenny

**English:**
And so when someone currently say listening doesn't have a MarTech person and they're thinking about, hey, is this a gap we have? What is that slice of work that a MarTech person would take if they currently have say a growth team or a growth PM that's leading growth and a growth team around them?

**中文翻译:**
那么，如果现在有听众的公司还没有 MarTech 专员，他们正在想：“嘿，这是我们的短板吗？”如果他们目前已经有一个增长团队，或者有一个增长产品经理在领导增长工作，那么 MarTech 专员会接手哪一部分工作呢？

---

### (00:10:40) Austin Hay

**English:**
This comes up all the time, by the way, I talk to businesses every year that have this problem of we have a growth team, we're growing pretty fast. We have a guy that we hired, usually an engineer who stood up all these tools for us. Or it could be gal too just to be clear, but this person has been here for two years and knows all of our systems really well, but now they're becoming overwhelmed. They don't have enough time. The systems are too complex. This is the flavor of story that I hear so often around startups who have hired a great growth person and managed tools and systems, but at some point they reach that point in time where it's no longer manageable by one person or even a set of people. And that slice of works looks like setting up new tools, building new tools on top of them because a lot of times you'll take a third party tool, call it like a segment or an amplitude, and you'll build tooling in your own stack behind it to power something much more advanced.

**中文翻译:**
顺便说一下，这种情况经常发生。我每年都会和一些面临这种问题的企业交流：我们有一个增长团队，增长很快。我们雇了一个人，通常是工程师，他帮我们搭建了所有这些工具。这个人可能已经在这儿干了两年，对我们的系统了如指掌，但现在他们开始不堪重负了。他们没有足够的时间，系统也变得太复杂了。这是我在初创公司中经常听到的故事：他们雇了一个很棒的增长人员来管理工具和系统，但到了某个阶段，这些东西不再是单个人甚至一小组人能应付得了的。那部分工作包括：设置新工具，在现有工具之上构建新工具。因为很多时候你会采用第三方工具（比如 Segment 或 Amplitude），然后在你自己的技术栈中构建后端工具来驱动更高级的功能。

---

### (00:11:35) Austin Hay (Continued)

**English:**
And everybody thinks that marketing technology is just the third party tools, but actually it's designing, architecting and building that stuff on top of your third party tools. That's how you actually have a lot of velocity is thinking about not just build versus buy. It's build and buy now. So, you buy the tool to get 90% of the way there and then you build the cool thing on top with the other 10%. And so that architecting decision usually falls on this person. The one really unsexy part of it, which I tend to love because it's really high leverage is the contract part. When you start out as a business, you sign any contract you want with a third party because you're just trying to get going. You have much bigger problems, product market fit, staying alive, runway. But at some point as you scale and you're starting to make money, now you start to care more about not just how much money you're making but how much money you're losing usually from contrasting SaaS tools.

**中文翻译:**
大家都以为营销技术只是关于第三方工具，但实际上它是关于在第三方工具之上进行设计、架构和构建。这就是你获得高速度的方式：不要只考虑“自研还是购买”（build vs buy），现在是“自研加购买”（build and buy）。你购买工具来完成 90% 的基础工作，然后用剩下的 10% 精力在上面构建酷炫的功能。这种架构决策通常由这个人负责。还有一个非常“不性感”的部分，但我个人很喜欢，因为它的杠杆率很高，那就是合同部分。当你刚开始创业时，你会为了快速起步而签署任何第三方合同。你有更大的问题要解决：产品市场匹配（PMF）、生存、现金流。但当你规模扩大并开始赚钱时，你不仅关心赚了多少，还开始关心亏了多少——通常是由于各种 SaaS 工具合同造成的。

---

### (00:12:24) Austin Hay (Continued)

**English:**
And so that's where you start to have more scrutiny around what types of deals are we signing, what are the terms? Do we have liability exposure? What's it going to cost us if we actually scale? And it's great that we have this cool rate at 500 MTUs, what happens when we have a million MPUs? So, I worked at mParticle, which was a CDP provider for a long time and I was their VP of growth and part of their SaaS vendor strategy is like, how can we design these cost structures in a way so that at the company scales we make more money? That's just part of the business. And so if you have that mindset of, well, I'm looking out for the business not just now, but two 30 years in the future, that's where you can also have a lot of value from a systems or marketing technologist.

**中文翻译:**
这时你开始更严格地审查：我们签的是什么样的协议？条款是什么？我们有责任风险吗？如果我们真的规模化了，成本会是多少？现在 500 个 MTU（每月追踪用户）的价格很划算，但当我们有 100 万个 MTU 时会发生什么？我曾在 CDP 供应商 mParticle 工作了很长时间，担任增长副总裁。他们 SaaS 供应商策略的一部分就是：我们如何设计这些成本结构，以便在公司规模扩大时我们能赚更多钱？这就是商业逻辑。所以，如果你有这种心态——不仅看现在，还看未来两三十年的业务——那么作为一名系统或营销技术专家，你就能创造巨大的价值。

---

### (00:13:05) Lenny

**English:**
Maybe a sign that you should start thinking about a MarTech person on a growth team is what I'm hearing is you're starting to accumulate all these different tools and maybe there's a sense that you could be a lot more efficient in connecting data and the backend infrastructure for how you think about growth and how you drive growth and measure growth.

**中文翻译:**
听起来，如果你开始积累各种不同的工具，并且感觉到在连接数据、构建增长底层架构、驱动增长以及衡量增长方面可以变得更高效，这可能就是一个信号，表明你应该考虑在增长团队中引入一名 MarTech 专员了。

---

### (00:13:24) Austin Hay

**English:**
Yeah, efficiency and pain. I would say pain drives people more. It's like, hey, we can't do something because nobody knows this thing. We can't do something because we don't know the best way to set up these tools or to change these tools or we can't even move forward where a business plan because we're worried that changing our tools might have an impact. And usually this is related to email marketing tools and data tools, so like CDPs and folks like Braze interval and just because a lot of times your email is the thing driving recurring customers to come back to your product and use it. So, you can't actually sometimes make the changes you want without understanding how something was set up in the first place.

**中文翻译:**
是的，效率和痛苦。我会说“痛苦”更能驱动人们。比如：“嘿，我们没法做某件事，因为没人懂这个东西。”或者“我们没法做某事，因为我们不知道设置或更改这些工具的最佳方式。”甚至“我们没法推进业务计划，因为我们担心更改工具会产生负面影响。”通常这与邮件营销工具和数据工具（如 CDP、Braze 等）有关。因为很多时候，邮件是驱动老客户回流并使用产品的关键。所以，如果你不了解最初是怎么设置的，有时你根本无法进行想要的更改。

---

### (00:14:03) Lenny

**English:**
You talked about where this person would live in the organization. There's all these different places. I talked about revenue team, maybe the ops team, maybe growth team, marketing team. What's your general advice for who should lead the hiring of this role and also just roughly who should they report to?

**中文翻译:**
你提到了这个人在组织中应该处于什么位置。有很多不同的选择：营收团队、运营团队、增长团队、营销团队。你对于谁应该主导这个角色的招聘，以及他们大致应该向谁汇报，有什么普遍的建议吗？

---

### (00:14:21) Austin Hay

**English:**
So, I have not to shamelessly plug my Reforge course in the fall, but I'm going to be shamelessly plug my Reforge course in the fall. We have this awesome matrix that we built that shows where this person should live, what they do, who they should report into, and it's all part of the fall course if you want like the deep dive into it. There's going to be a section on it, but just the gist of it is I first like to break it down into two dimensions. First is a B2C company or B2B company. And then the second dimension is how important is it to you that this person report into a specific function or not? So, first with B2C and really maybe a simpler version of that is centralized versus decentralized. So, we have B2C, B2B, centralized, decentralized. In a B2C organization I think actually thinks it's quite simple.

**中文翻译:**
虽然我不想厚着脸皮推销我秋季的 Reforge 课程，但我还是要推销一下。我们建立了一个非常棒的矩阵，展示了这个人应该在什么位置、做什么、向谁汇报。如果你想深入了解，秋季课程里会有一个专门的章节。但核心要点是，我喜欢先从两个维度来拆解。第一是 B2C 公司还是 B2B 公司。第二是：让这个人向特定职能部门汇报对你来说有多重要？首先看 B2C，更简单的版本是“中心化”还是“去中心化”。所以我们有 B2C、B2B、中心化、去中心化这几种组合。在 B2C 组织中，我认为其实挺简单的。

---

### (00:15:08) Austin Hay (Continued)

**English:**
Most of the time your tools, your marketing tools are intended to help the growth team. The growth team has a job to be done, which is to spur user growth and tools are just meant to solve the problem. So, marketing technology's job is to serve the growth team. Now it obviously serves product and analytics and data, but its key stakeholder and customer is the marketing or growth function. And so I think it makes a lot of sense that if you're designing an org under a CMO or a marketing person, you put marketing technology alongside your head of growth or maybe reporting into your head of growth depending on the seniority of the person. And that works quite well. The key thing there is you just want to make sure that this marketing technology person is a really strong technical architect or some type of technical operator because they're going to be your representation to the product in engineering orgs.

**中文翻译:**
大多数时候，你的营销工具是为了帮助增长团队。增长团队的任务是刺激用户增长，而工具只是为了解决这个问题。所以，营销技术的职责是服务于增长团队。虽然它显然也服务于产品、分析和数据部门，但其核心利益相关者和客户是营销或增长职能。因此我认为，如果你在 CMO 或营销负责人下设计组织架构，将营销技术放在增长负责人旁边，或者根据资历向增长负责人汇报，是非常合理的。这种模式运作得很好。关键在于，你要确保这个 MarTech 人员是一个非常强大的技术架构师或技术运营者，因为他们将是你与产品和工程部门沟通的代表。

---

### (00:15:53) Austin Hay (Continued)

**English:**
Now, some people take a little bit of a slight twist on that. They say, hey, I have a product manager who manages growth that comes from the PM side. You could have a platform PM that serves the same thing in MarTech and they're responsible for all internal platform systems. And then you get into questions of does that belong in product ops or not? And I'm not going to go there. But for B2C, that's the centralized function. For B2C decentralized, what you do instead is you just say like, hey, we're going to have one of these systems, people in every org. Product is going to have a product ops person and growth is going to have a growth ops person, engineering will have engineering ops, and then we kind of divide the lines based on what tools they're managing. I generally don't see that working very well just because as you add more operational people, it just creates more systems.

**中文翻译:**
现在，有些人会稍微变通一下。他们会说：“嘿，我有一个负责增长的产品经理，他是从 PM 体系出来的。”你也可以有一个平台 PM，在 MarTech 领域做同样的事，负责所有内部平台系统。然后就会涉及到这是否属于产品运营（Product Ops）的问题，我就不细说了。对于 B2C，这是中心化职能。至于 B2C 的去中心化模式，做法是：在每个部门都安排一个这样负责系统的人。产品部有产品运营，增长部有增长运营，工程部有工程运营，然后根据他们管理的工具来划分界限。我通常觉得这种模式效果不好，因为你增加的运营人员越多，创造的系统就越多。

---

### (00:16:39) Austin Hay (Continued)

**English:**
And so unless you're a massive company where you need that type of scale, I think most startups should avoid that decentralized model. And then for B2B, I think B2B is really messy because not only do you have pure B2B where you're only selling to enterprises, but you have this concept of B2B2C, which is where you're actually selling to users and to businesses sometimes at the top of the funnel and the bottom, but also sometimes at the same time like notion. Notion sells to users so, they have a little growth acquisition funnel at the top, but then they also sell to businesses. I find there's really, again, there's two ways decentralized or centralized actually at Ramp we've gone back and forth between the two models. We started centralized with the Rev ops group, we decentralized it and put marketing technology into the CMO org and now we're rolling it back into the revenue operations org Largely has to do with who is our customer?

**中文翻译:**
所以，除非你是一家需要那种规模的大型公司，否则我认为大多数初创公司应该避免这种去中心化模式。至于 B2B，我认为 B2B 真的很乱，因为你不仅有纯粹卖给企业的 B2B，还有 B2B2C 的概念——即你有时在漏斗顶端卖给用户，在底端卖给企业，或者像 Notion 那样同时进行。Notion 卖给个人用户，所以漏斗顶端有一个增长获客环节，但他们也卖给企业。我发现还是有两种方式：去中心化或中心化。实际上在 Ramp，我们在这两种模式之间反复跳跃。我们最开始是在营收运营（RevOps）组下实行中心化，后来去中心化把营销技术放到了 CMO 组织里，现在我们又把它调回了营收运营组织。这很大程度上取决于：谁是我们的客户？

---

### (00:17:28) Austin Hay (Continued)

**English:**
Whose problems are we solving and where are resources allocated? Because if you have a decentralized model, then you run the risk of having to have lots of resources decentralized across the team. And the question is, can that function actually get work done or resources spread too thin and the priorities on align that it makes it challenging to get work done. And yeah, I would just say especially on B2B, for people out there listening, there is no right answer. And I even think that marketing technology could live in product, it could also live in engineering. Some of this has to do with who is the leader of this function. If it blends more towards ops, meaning managing processes and systems, then yeah, maybe you want to decentralize it and keep it in its representative function. If you have a really technical leader who was an architect or a PM that might indicate where that person should actually be leading their team. So, it's very case specific, which I know is a terrible answer, but it's the way it is.

**中文翻译:**
我们在解决谁的问题？资源分配在哪里？因为如果你采用去中心化模式，你就会面临资源分散在各个团队的风险。问题是，这个职能真的能完成工作吗？还是资源被摊得太薄，优先级不一致，导致工作难以推进。所以我想说，特别是在 B2B 领域，对于正在听节目的各位，没有标准答案。我甚至认为营销技术可以放在产品部，也可以放在工程部。这在一定程度上取决于这个职能的领导者是谁。如果它更偏向运营（Ops），即管理流程和系统，那么也许你想让它去中心化，留在各自的职能部门。如果你有一个非常懂技术的领导者，他曾是架构师或 PM，那可能预示着他应该在哪里领导团队。所以这非常看具体情况，我知道这个答案很糟糕，但事实就是这样。

---

### (00:18:25) Lenny

**English:**
Makes total sense. If someone were to hire someone like in Austin, are you doing the work yourself? Are you an IC for quite a while or do you end up building a team, say engineers that are building some of this infrastructure, how does that usually play out?

**中文翻译:**
完全理解。如果有人雇佣像 Austin 这样的人，你是亲自动手做吗？你会做很长一段时间的个人贡献者（IC），还是最终会组建一个团队，比如招募工程师来构建这些基础设施？通常情况是怎样的？

---

### (00:18:38) Austin Hay

**English:**
I think all marketing technologists at some level are ICs. I think it's a great job personally, because I get to be an IC and a manager. You have to be an IC in that, you are the most senior technical expert on all first party and third party systems. So, you have to know really well how third party tools work and you don't know that without doing the work yourself. So, I do find that some of the best marketing technologists have at least at some point in the last five years, been an operator and expert managing tools and systems. And then usually the teams are small and super cross-functional.

**中文翻译:**
我认为所有的营销技术专家在某种程度上都是 IC。我个人觉得这是一份很棒的工作，因为我可以既是 IC 又是管理者。你必须是 IC，因为你是所有第一方和第三方系统中最资深的技术专家。你必须非常了解第三方工具是如何运作的，如果不亲自动手，你是无法掌握这些的。所以我发现，一些最优秀的营销技术专家在过去五年中，至少在某个阶段曾是管理工具和系统的实操者和专家。通常这类团队规模较小，且具有极强的跨职能属性。

---

### (00:19:10) Austin Hay (Continued)

**English:**
So, what I would say is more important to look for than how many people has this person managed is how well can they manage upward, laterally and downward because they're going to have to go talk to the head of rev ops if they want to change something in Salesforce, they're going to have to talk to the VP of product if they want to make a big platform change that touches something else. They're going to be relying constantly on data resources from their head of data. So, I think that this person, the secret sauce is more of how good of a cross-functional team player are they. I almost view them like a true quarterback every [inaudible 00:19:41] says people are quarterbacks. But really marketing technology because it lives between so many departments, it plays that role of having to call plays and pull on different departments.

**中文翻译:**
所以我想说，相比于这个人管理过多少人，更重要的是看他们向上、横向和向下管理的能力。因为如果他们想更改 Salesforce 里的东西，就得去和营收运营负责人谈；如果他们想做一个涉及其他环节的重大平台变更，就得去和产品副总裁谈。他们还会不断依赖数据负责人提供的数据资源。所以我觉得这个人的“秘密武器”更多在于他们是否是一个优秀的跨职能团队协作参与者。我几乎把他们看作真正的“四分卫”（quarterback）——虽然每个人都爱说自己是四分卫，但营销技术因为处于这么多部门之间，确实扮演了那个发号施令并调动不同部门的角色。

---

### (00:19:50) Lenny

**English:**
And because it sounds like you don't have a team to do some of these things and you need to convince people to help you out.

**中文翻译:**
而且听起来，因为你没有专门的团队来做这些事，所以你需要说服别人来帮你。

---

### (00:19:56) Austin Hay

**English:**
Totally. Yeah. It's a game of persuasion and salesmanship. You have to convince people why the problems are big and especially as you get bigger, a lot of the decisions or problems of marketing technology are not about rapidly making a huge transformation. It's slow transformation that can have big implications. I'll just give you one example. Like lots of big companies I talked to have two CDPs or two attribution tools and it's like there's the cost problem. How do we get rid of this secondary tool to reduce the cost? Maybe it's a million dollars, but there's also the complexity and decision-making problem. How do we make people move and work faster by not having the complexity of asking, which tool do I use in such a simple decision?

**中文翻译:**
完全正确。这是一场说服和推销的博弈。你必须让人们相信这些问题很严重。特别是随着公司规模变大，营销技术的许多决策或问题并不是关于快速进行巨大的转型，而是关于那些可能产生重大影响的缓慢转型。举个例子：我聊过的很多大公司都有两套 CDP 或两套归因工具。这不仅是成本问题——如何去掉第二个工具来节省可能高达一百万美元的费用——还是复杂性和决策问题。我们如何通过消除“在这么简单的决策中我该用哪个工具”这种复杂性，让人们行动和工作得更快？

---

### (00:20:39) Austin Hay (Continued)

**English:**
And then you get to a really big scale at Walmart where your problem isn't even. How do we consolidate the stack and make it so tools that are helpful for people, but how do we prevent from getting back to that state? How do we put safeguards in place to make sure people actually have access to the tools that they want and can solve their problems? But we're not introducing duplicative tech into our organization because a really well-known, sorry to put SaaS vendors on the spot here, but well-known SaaS vendor plays the land and expand motion. You get in small and then you grow your business. Well, that's a distinct problem for businesses that are trying to control costs and simplify the way the world works.

**中文翻译:**
当你达到像沃尔玛那样的超大规模时，问题甚至不再是“我们如何整合技术栈并让工具对人有用”，而是“我们如何防止回到那种混乱状态？”我们如何建立保障机制，确保人们既能获得想要的工具来解决问题，又不会在组织中引入重复的技术？因为很多知名的 SaaS 供应商（抱歉在这里点名了）玩的是“先进入再扩张”（land and expand）的策略。他们先从小规模切入，然后不断扩大业务。对于那些试图控制成本并简化运作方式的企业来说，这是一个非常突出的问题。

---

### (00:21:15) Lenny

**English:**
I want to talk about tools that you recommend and use most often, but I'm thinking maybe we start with a different question, which is around just what does your day look like as a MarTech person? What are you doing day to day and from the lens of your growth PM listening or a leader listening and what could this person do for me and how much leverage can I get if I were to find a MarTech person?

**中文翻译:**
我想聊聊你最推荐和最常用的工具，但我在想也许我们可以先从另一个问题开始：作为一名 MarTech 专员，你的一天是怎样的？你每天都在做什么？从听节目的增长 PM 或领导者的角度来看，这个人能为我做什么？如果我找一个 MarTech 专员，我能获得多大的杠杆效应？

---

### (00:21:37) Austin Hay

**English:**
There's half of marketing technology, which I would call somewhat administrative and high leverage. It's managing PI requests and PI technology, managing administrative stuff like contracts and admittance to tools and permissions. This is all at a big company scale. You probably don't do this when you're a small company, but that stuff matters because give you an example, you give edit access to somebody who wants HubSpot and they send a fake email test to a million people and now you're on Twitter being embarrassed as a company. It's like-

**中文翻译:**
营销技术有一半的工作，我会称之为某种行政性但高杠杆的工作。比如管理 PII（个人身份信息）请求和相关技术，管理像合同、工具准入和权限之类的行政事务。这通常是在大公司规模下。你在小公司可能不用做这些，但这些事很重要。举个例子：你给了一个想要 HubSpot 权限的人编辑权限，结果他给一百万人发了一封测试邮件，现在你们公司在 Twitter 上丢尽了脸。就像——

---

### (00:22:12) Lenny

**English:**
Does that happen to you?

**中文翻译:**
这发生在你身上过吗？

---

### (00:22:13) Austin Hay

**English:**
It hasn't happen to me. But I've gotten the emails from certain companies where it's like, this is a test and it came from an intern.

**中文翻译:**
没发生在我身上。但我收到过某些公司的邮件，内容写着“这是一个测试”，而且是实习生发的。

---

### (00:22:20) Lenny

**English:**
Yeah, same.

**中文翻译:**
是的，我也收到过。

---

### (00:22:20) Austin Hay

**English:**
You're like, that's just permissioning gone wrong. So, I think a big part of the role is designing systems that are automated to handle that stuff because ideally you don't want to be sitting around in your computer all day clicking one conductor request to approve permissions. You should look at the role, look at the experience of tenure and department and make a decision about which accesses you get. So, automating that is a big part of my job. The manual part of my job, which I feel like is actually really fun, is again the designing systems and contracts for the future. So, it's about how do we design a system and create a vision and persuade people about what our system technology can look like over the course of one to two years, the time span that I usually look at. And then how do you change state from then to now? Some of that has to bring in financials and contracts. That's where this plays a role. What are our contract terms today? What's the price we're paying? What is our growth going to be?

**中文翻译:**
你会觉得，那纯粹是权限管理出了问题。所以我认为这个角色的很大一部分是设计自动化系统来处理这些事。因为理想情况下，你不想整天坐在电脑前点击审批权限的请求。你应该根据角色、入职年限和部门来决定获得哪些访问权限。所以，自动化这些流程是我工作的重要部分。而我工作中手动的部分，我觉得其实很有趣，那就是为未来设计系统和合同。这关乎我们如何设计一个系统，建立愿景，并说服人们相信我们的系统技术在未来一到两年（这是我通常关注的时间跨度）会是什么样子。然后，你如何从现状过渡到那个状态？这其中有些必须涉及财务和合同。这就是它的作用所在：我们今天的合同条款是什么？我们支付的价格是多少？我们的增长预期是多少？

---

### (00:23:12) Austin Hay (Continued)

**English:**
Can we build a financial model to show how much it's going to cost us both in terms of operational efficiency and actual real fixed and variable costs to end up in that state? And then how do I create a graceful argument to persuade people that we should spend engineering time and resources? And usually it nets out pretty clear. It's like if it's less than a certain amount, how do you justify spending any engineering time on it? You have to wait for the problem to become big enough. But then back to your other point around how do I give growth managers out there something useful. I would say the big thing that people forget in an early stage of a company's lifetime is that the company will outlast you, hopefully. You will not be the last growth manager unless the company fails. So, I tend to take a little bit of a different approach than most, which is like I think you should always be thinking about the future.

**中文翻译:**
我们能否建立一个财务模型，展示为了达到那个状态，我们在运营效率以及实际的固定和变动成本上要投入多少？然后，我该如何提出一个优雅的论点，说服大家我们应该投入工程时间和资源？通常结果很明确：如果成本低于某个数额，你很难证明投入工程时间的合理性。你必须等到问题变得足够大。但回到你关于如何给增长经理提供有用建议的问题，我想说，在公司早期阶段，人们最容易忘记的一点是：公司（希望）会比你待得更久。除非公司倒闭，否则你不会是最后一任增长经理。所以我倾向于采取一种与众不同的方法，那就是：我认为你应该始终考虑未来。

---

### (00:24:02) Austin Hay (Continued)

**English:**
That doesn't necessarily mean you should make design choices that over index towards the future so much that you miss product market fit or you make poor product decisions. But when you set up tools and you pick tools and you implement them, you should be thinking, what's going to happen a year from now if I don't change anything? And is this going to be a catastrophic situation or not? And then try to take actions to mitigate that risk. Some examples are like if it's $2,000 to get SSO and two days to set it up and that prevents you from having a security problem where somebody downloads all your users, it seems like a great investment.

**中文翻译:**
这并不意味着你应该做出过度倾向未来的设计选择，以至于错失产品市场匹配（PMF）或做出糟糕的产品决策。但是，当你设置、选择并实施工具时，你应该思考：如果我不做任何改变，一年后会发生什么？这会是一个灾难性的局面吗？然后尝试采取行动来降低风险。举个例子：如果花 2000 美元搞定 SSO 并花两天时间设置，能防止出现有人下载你所有用户数据的安全问题，那这看起来就是一笔伟大的投资。

---

### (00:24:37) Austin Hay (Continued)

**English:**
And guess what? Over time, if you don't do that, you're going to eventually have to hire an IT person to go and set up SSF for all your tools. So, some of this is more of just being a good steward about managing first and third party tools with an eye towards the future. It's always a trade-off, right? Because the more time you spend when you're building product early in a company's lifetime, that time could be spent on other things. So, if you waste it managing third party tools or setting up correctly, then maybe you miss out on a key product feature. So, I think it is a tough balance to strike.

**中文翻译:**
而且你猜怎么着？随着时间的推移，如果你现在不这么做，你最终还是得雇一个 IT 人员来为所有工具设置 SSO。所以，这在很大程度上只是作为一个好的“管家”，以长远的眼光管理第一方和第三方工具。这总是一种权衡，对吧？因为在公司早期构建产品时，你花的时间越多，就意味着不能把时间花在其他事情上。如果你把时间浪费在管理第三方工具或正确设置上，也许你就会错过一个关键的产品功能。所以我认为这是一个很难达到的平衡。

---

### (00:25:06) Lenny

**English:**
Coming back to the different kind of roles within the growth umbrella, if someone has someone leading paid growth let's say, and they're just like a paid growth person, do you also find a MarTech person to work alongside this person? How connected would you be to someone that's just responsible for paid growth?

**中文翻译:**
回到增长体系下的不同角色。如果有人负责付费增长（Paid Growth），他们就是一个纯粹的付费增长人员，你会找一个 MarTech 专员和这个人搭档吗？你与一个专门负责付费增长的人之间的联系会有多紧密？

---

### (00:25:24) Austin Hay

**English:**
Maybe a key differentiator too. We didn't talk about this in the beginning, but there's marketing technology and marketing operations. So, in my mind, this is just my own kind of mental framework is marketing technology has tech in it. So, it's usually an engineer or somebody with an engineering background doing that function. Marketing operations is usually not always technical. Maybe a systems analyst or business analyst could be somebody really, really smart, but they may not have an engineering background. So, I think that's a key distinction too. And you typically see that in B2B where you'll have mar ops function, which is setting up campaigns, sending email blasts, debugging, doing analytics work, SQL queries, all semi-technical work but not engineering based. So, in my mind when we talk about marketing technology, I'm really thinking it as an engineering based role and even by background, I'm not a software engineer, but I was a civil engineer and I learned how to program and I went through a bunch of coding to get there.

**中文翻译:**
这里可能还有一个关键的区别。我们一开始没提到，那就是“营销技术”（Marketing Technology）和“营销运营”（Marketing Operations）。在我的思维框架里，营销技术里包含“技术”。所以，通常是由工程师或有工程背景的人来承担这个职能。而营销运营通常（并不总是）不那么偏技术。可能是一个系统分析师或业务分析师，他们可能非常聪明，但不一定有工程背景。我认为这是一个关键区别。你通常在 B2B 中看到营销运营职能，负责设置活动、发送群发邮件、调试、做分析工作、写 SQL 查询等。这些都是半技术性的工作，但不是基于工程的。所以，当我谈论营销技术时，我真的把它看作一个基于工程的角色。甚至从背景来看，我不是软件工程师出身，我是土木工程师，但我自学了编程，通过大量的编码实践才走到今天。

---

### (00:26:21) Austin Hay (Continued)

**English:**
So, that's my way into the engineering world. And you typically find that a lot with marketing technologists in particular is they either are software engineers or they've gotten enough experience to moonlight as software engineers. And so we get to this problem set of a user acquisition person. How would they rely on a marketing technologist? Well, I think the most superhuman user acquisition people out there are engineers and they don't need a marketing technologist because they set up the tool themself. They know how the paid campaign runs and they just do it all. And you'll typically find these super humans at small startups where the engineer is just told by the co-founder, hey, go figure out how Facebook ads work. And superhuman is born. More often though that doesn't happen. Or those people once they do it once, they never want to do it again. So, you'll typically find the role split and that's the natural thing that happens.

**中文翻译:**
这就是我进入工程世界的方式。你会发现，特别是在营销技术专家中，他们要么本身就是软件工程师，要么已经积累了足够的经验可以兼职做软件工程师。那么回到用户获取（UA）人员的问题：他们如何依赖营销技术专家？我认为，最顶尖的 UA 人员本身就是工程师，他们不需要营销技术专家，因为他们自己就能设置工具。他们知道付费活动如何运作，能搞定一切。你通常会在小型初创公司发现这些“超人”，工程师被联合创始人告知：“嘿，去搞清楚 Facebook 广告是怎么回事。”于是超人诞生了。但更多时候，这种情况不会发生。或者那些人做过一次后，就再也不想做了。所以，你通常会看到角色分拆，这是自然而然发生的。

---

### (00:27:13) Austin Hay (Continued)

**English:**
As you scale, you divide responsibility and you'll see you'll have the person who's responsible for bidding and acquiring users and paying down those campaign costs. Then you have the person who's in charge of how does it all work? How do we get this thing to actually run? And that's very similar to what we have at Ramp. We have an amazing user acquisition team. I know Sri Batchu was on here a while back. He hired a guy named Cody Morgan at Ramp who has a user acquisition team. And the way to think of it is, my job is to help support them in running all their campaign needs and when they have a directive from the CEO that says we need to improve CAC or change any of our metrics, it's my job to partner with them to help them do that. And actually one of the coolest and most fun projects that we worked on early when I joined Ramped is we were optimizing.

**中文翻译:**
随着规模扩大，你会划分职责：你会有一个负责出价、获取用户和支付活动成本的人；然后会有另一个人负责“这一切是如何运作的？我们如何让这套东西真正跑起来？”这和我们在 Ramp 的情况非常相似。我们有一个很棒的 UA 团队。我知道 Sri Batchu 不久前也来过这里，他在 Ramp 雇了一个叫 Cody Morgan 的人，Cody 领导着 UA 团队。你可以这样理解：我的工作是支持他们运行所有的活动需求。当 CEO 下达指令说我们需要改善 CAC（获客成本）或更改任何指标时，我的工作就是与他们合作，帮助他们实现目标。实际上，我加入 Ramp 早期参与的最酷、最有趣的项目之一就是优化。

---

### (00:27:55) Austin Hay (Continued)

**English:**
We're trying to get top of funnel data all the way down to the bottom of the funnel and tie it with opportunity data so we could send that back to the ad network so that rather than optimizing your campaign off of when a user clicks a button on the website, you're actually optimizing it off of did the opportunity occur and what was the kind of ideal value for that opportunity? And you're sending that data as a synthetic event back to Facebook and all those guys. So, it can be really cool and super advanced stuff depending how deep on the funnel you get and how complex your business is.

**中文翻译:**
我们试图将漏斗顶端的数据一直贯穿到漏斗底端，并将其与“商机”（opportunity）数据关联起来，然后发回给广告网络。这样一来，你就不再是根据用户点击网站按钮来优化活动，而是根据商机是否产生以及该商机的理想价值来优化。你会将这些数据作为“合成事件”（synthetic event）发回给 Facebook 等平台。这可以是非常酷且超级先进的东西，取决于你对漏斗的挖掘深度以及业务的复杂程度。

---

### (00:28:25) Lenny

**English:**
So, you're generally not running campaigns of your own unsafe Facebook or AdWords. You're mostly as a MarTech person supporting people who are doing that.

**中文翻译:**
所以，你通常不会自己在 Facebook 或 AdWords 上跑广告活动。作为 MarTech 专员，你主要是支持那些跑活动的人。

---

### (00:28:34) Austin Hay

**English:**
Yeah.

**中文翻译:**
是的。

---

### (00:28:35) Lenny

**English:**
Awesome.

**中文翻译:**
太棒了。

---

### (00:28:35) Austin Hay

**English:**
Helping them use tools and technologies to do it.

**中文翻译:**
帮助他们利用工具和技术来实现目标。

---

### (00:28:38) Lenny

**English:**
Great. Do people give you goals? Are you responsible for growth goals of your own? And in general, are MarTech people, should they have goals and growth goals on their plate or are they just there to support people who do?

**中文翻译:**
太好了。别人会给你设定目标吗？你自己负责增长目标吗？总的来说，MarTech 人员应该承担增长目标吗？还是说他们只是为了支持那些有目标的人？

---

### (00:28:52) Austin Hay

**English:**
Oh, that's a great question and I would like, maybe this is at the end of the podcast, we ask people about this because I would love to know what is a better version of goaling? So, there's two ways that I've thought of it. One is my goals are directly tied to the people I'm serving. So, if user acquisition has, I mean we do, we have a growth goal and we have a CAC goal at Ramp. So, my goals are tied to them, so I'm going to help make sure that that is achieved, but then there's also a cost and efficiency goal that I internally think is valuable. Whether or not the business thinks it is valuable, it doesn't really matter. I come from a sales background and I like to run lean and efficient teams, and so I'm always thinking to myself, how much were the tools when I came in, how much are they now?

**中文翻译:**
噢，这是一个好问题。也许在播客结束时我们可以问问听众，因为我也想知道更好的目标设定版本是什么。我有两种思考方式。第一种是：我的目标直接与我服务的人挂钩。比如 UA 团队有目标——在 Ramp，我们确实有增长目标和 CAC 目标。所以我的目标是和他们绑定的，我要确保这些目标达成。但除此之外，还有我个人认为有价值的成本和效率目标。无论公司是否认为这有价值，这都不重要。我有销售背景，喜欢运行精简高效的团队，所以我总是在想：我刚来时工具花了多少钱，现在花了多少钱？

---

### (00:29:34) Austin Hay (Continued)

**English:**
Have I set us up for success so that as we grow, our cost per user or cost per seat comes down and how much more efficient are we because of that? The ideal world is that you actually are growing as a business making more money, hiring more people, acquiring more users, and your total cost of tooling per person goes down. That's like the dream. And there's lots of ways you can build that financial model, but I mean that's what I think most marketing technology leaders should strive for is to make sure that they're controlling costs over time because most businesses don't. There can be some goals that are discreet in nature that are not cost-efficient, but more like net capability related. So, it's like, hey, we want to design a first party system that's world-class that achieves these three goals, right? Maybe you want to incorporate artificial intelligence into some part of our product platform and incorporate third party tools.

**中文翻译:**
我是否为成功打下了基础，以便随着我们的增长，人均用户成本或人均席位成本能降下来？我们因此提高了多少效率？理想的情况是：业务在增长，赚更多的钱，雇更多的人，获取更多的用户，而人均工具总成本却在下降。这就是梦想。你可以通过很多方式建立这种财务模型，但我认为大多数营销技术领导者应该努力确保随着时间的推移控制住成本，因为大多数企业做不到这一点。当然，也可能有一些不以成本效率为核心、而更偏向“净能力”的离散目标。比如：“嘿，我们要设计一个世界级的第一方系统，实现这三个目标。”或者你想在产品平台的某些部分引入人工智能，并整合第三方工具。

---

### (00:30:25) Austin Hay (Continued)

**English:**
And those are more like discrete product goals. In the same way that a business might launch an external product goal to launch a feature, they sometimes also might have internal product goals, clean up our revenue operations systems, make our email marketing system better. In particular, email marketing is one I see come often a lot with small businesses and even medium-sized businesses where they'll have picked a tool at the start of the company's lifecycle and as the company has grown, they've outgrown that tool. They need to move to a Braze or Marketo. And so there'll be a big six-month initiative to say, we just got to switch. That's the goal. We have to safely get off this small tool to a much bigger, more complex tool that's going to cost us more. It's a lot more complex, but we need to do it without losing money. That's usually the job of a MarTech person in some type of change transformation effort.

**中文翻译:**
这些更像是离散的产品目标。就像企业会为了发布某个功能而设定外部产品目标一样，他们有时也会有内部产品目标：清理营收运营系统，优化邮件营销系统。特别是邮件营销，我经常在小型甚至中型企业中看到这种情况：他们在公司成立初期选了一个工具，随着公司成长，那个工具已经不够用了。他们需要迁移到 Braze 或 Marketo。于是会有一个为期六个月的重大项目：“我们必须切换工具。”这就是目标。我们要安全地从这个小工具迁移到一个更大、更复杂、成本更高的工具。这非常复杂，但我们需要在不损失收入的情况下完成。这通常是 MarTech 人员在某种变革转型工作中的职责。

---

### (00:31:14) Lenny

**English:**
Perfect segue to where I wanted to go, which is tooling and your recommendations and favorite tools. And so maybe we start with just what do you find as a good starting tool stack for people starting to think about MarTech and basically growth, and then what does it end up being generally?

**中文翻译:**
这完美地过渡到了我想聊的话题：工具、你的推荐以及你最喜欢的工具。那么，我们先从这里开始：对于刚开始考虑 MarTech 和增长的人来说，你认为什么是好的入门级工具栈？而随着发展，它通常最终会变成什么样？

---

### (00:31:32) Austin Hay

**English:**
In terms of stack, again, we think about B2B and B2C. B2C I would say the stack was largely solved from 2017 to 2020. We've had like a renaissance of the data architecture, so what I'm going to do is I'm dig through B2C then and now and then we can go B2B then and now.

**中文翻译:**
关于工具栈，我们还是要分 B2B 和 B2C。对于 B2C，我会说工具栈在 2017 年到 2020 年间已经基本解决了。我们经历了一场数据架构的复兴。所以我打算先梳理一下 B2C 的过去和现在，然后再聊 B2B 的过去和现在。

---

### (00:31:52) Lenny

**English:**
Great.

**中文翻译:**
太好了。

---

### (00:31:52) Austin Hay

**English:**
Okay. So, B2C, if you back up to 2016, 2017, you have segment and the rise of the CDP. Consumer based businesses have to collect a user and tie a bunch of data to them and then track their actions to send it out to performance ad networks and email marketing tools and product analytics tools. And so you would see this very commoditized stack. It would be like CDP in the middle bunch of tools connected. The promise of the CDP was you integrate one SDK, your engineers don't hate you send all the data to the other tools you can create audiences.

**中文翻译:**
好。对于 B2C，如果你回到 2016、2017 年，你会看到 Segment 和 CDP 的崛起。面向消费者的业务必须收集用户信息，将一堆数据与之关联，然后追踪他们的行为，并将其发送到效果广告网络、邮件营销工具和产品分析工具。所以你会看到这种非常标准化的工具栈：CDP 位于中心，连接着一堆工具。CDP 的承诺是：你只需集成一个 SDK，你的工程师就不会讨厌你，然后把所有数据发送到其他工具，你就可以创建受众群体了。

---

### (00:32:26) Austin Hay (Continued)

**English:**
Great. Lasted for a long time. The thing about it though that I think really changed around 2020 is that the cost of ownership of warehousing became much cheaper. And 2021, you start getting to the place where it actually makes a lot of sense and is really easy to store all your data in a warehouse model all your data in the warehouse, and to do it without needing a vast data team. I would say Airbnb was probably doing all this well before anybody else was, but they had the main advantage of a lot of money and a lot of resources. So, now come 2020, it's cost-efficient to have a data team with your own warehouse and to manage data centrally in something like Snowflake. So, now this question is like, okay, well we got to get data into the warehouse, but how do we move data around is totally different.

**中文翻译:**
太棒了，这套模式持续了很久。但我认为在 2020 年左右发生了一个重大变化：拥有数据仓库（warehousing）的成本变得便宜得多。到了 2021 年，将所有数据存储在仓库中、在仓库中建模，并且不需要庞大的数据团队就能实现，这变得非常有意义且容易。我会说 Airbnb 可能比任何人都早就在做这些，但他们有钱和资源的巨大优势。到了 2020 年，拥有自己的仓库和数据团队，并在像 Snowflake 这样的平台上集中管理数据，已经变得具有成本效益。所以现在的问题变成了：好吧，我们要把数据存进仓库，但如何移动数据则完全不同了。

---

### (00:33:11) Austin Hay (Continued)

**English:**
And that's what really led to the rise of reverse ETLs. So, now you can actually build your own CDP and lots of businesses already have, I'm consulting with a well known financial trading platform a couple of months back, and they have a CDP, they have all this internal data in their warehouse, but they have not been able to activate it because it's pretty old architecture. Everything's batch based end of the day. What they need is a reverse ETL. They don't need to take that data and just get it out into the world. So, they need the reverse ETL component or the transformation component of a CDP. And so I'd say now today when we think about B2C businesses, you can either go to the traditional route, buy CDP, hook up all your tools, third party.

**中文翻译:**
这就是促使“反向 ETL”（reverse ETL）崛起的原因。现在你实际上可以构建自己的 CDP，很多企业已经这么做了。几个月前我为一家知名的金融交易平台提供咨询，他们有 CDP，仓库里有所有这些内部数据，但他们一直无法激活这些数据，因为架构太老了。所有东西都是基于每天结束时的批处理。他们需要的是反向 ETL。他们需要把数据推向外部世界。所以他们需要 CDP 的反向 ETL 组件或转换组件。因此我会说，今天当我们考虑 B2C 业务时，你可以走传统路线：购买 CDP，连接所有第三方工具。

---

### (00:33:52) Austin Hay (Continued)

**English:**
I think that's a great move if you do not have a lot of engineering resources because you're not spending a ton of time and energy on a warehouse and all the modeling that comes with it, you're just spending time to implement one SDK. I think if simplicity is the name of the game for your business, CDP, Centralized Stack, great move. If you are an advanced engineering culture and you are cutting edge and you're going to do a bunch of modeling in DBT and you already have Snowflake, you should move towards a model of using a reverse ETL. What it means is that there's a way to get your data into the warehouse and then how you activate it is completely independent from the CDP. And so what that means is actually you can have lots of different variations of the stack.

**中文翻译:**
如果你没有太多的工程资源，我认为这是一个很好的选择，因为你不需要在仓库和建模上花费大量时间和精力，你只需要花时间集成一个 SDK。如果你的业务追求简单，那么 CDP 加中心化工具栈是明智之举。但如果你拥有先进的工程文化，处于技术前沿，并且打算在 DBT 中进行大量建模，而且已经有了 Snowflake，那么你应该转向使用反向 ETL 的模式。这意味着你有一种方式将数据存入仓库，而你如何激活数据则完全独立于 CDP。这意味着你的工具栈可以有很多不同的变体。

---

### (00:34:31) Austin Hay (Continued)

**English:**
You could use Amplitude as your CDP, collect all your data, stream it into Snowflake. They actually now have an integration with Snowflake that lets you feed data directly out of Snowflake, and then you could use a reverse ETL to just pipe that data wherever you want. There's a really good section though, again, sorry to self aggrandize, but there's a really good section in the Reforge module this fall that talks about what happens when you have multiple ways to move data. You buy amplitude for your CDP and you're moving data to your warehouse. Amplitude is a bunch of integrations, but you also have reverse ETL and you can move data out of your warehouse.

**中文翻译:**
你可以把 Amplitude 当作你的 CDP，收集所有数据并流向 Snowflake。他们现在实际上与 Snowflake 有集成，允许你直接从 Snowflake 提取数据，然后你可以使用反向 ETL 将数据输送到任何你想去的地方。不过，在今年秋季的 Reforge 模块中有一个非常棒的章节（再次抱歉自夸一下），讨论了当你有多条数据移动路径时会发生什么。你买了 Amplitude 作为 CDP，并将数据移至仓库。Amplitude 有很多集成，但你也有反向 ETL，可以从仓库移出数据。

---

### (00:35:05) Austin Hay (Continued)

**English:**
Where do you choose? And I would say a lot of businesses get in trouble when they don't have a methodology or a system for how and when to move data from one place to the other, so they just do it haphazardly, right? And the key in systems management is you want to design a process for doing it some type of waterfall or mental model for when it makes sense to move data directly from Amplitude, which is the ingestion point of your data stream or from the warehouse where you can model it and make it better. I think the key is just having a philosophy and approach. There's not really one answer, but that's all B2C. So, B2B I would say ... Yeah, go ahead.

**中文翻译:**
你该选哪条路？我会说，很多企业之所以陷入困境，是因为他们没有一套方法论或系统来决定何时以及如何将数据从一处移到另一处，所以他们只是随性而为。系统管理的关键在于，你要设计一个流程，某种“瀑布流”或思维模型，来判断什么时候直接从 Amplitude（数据流的摄入点）移动数据更有意义，什么时候从仓库（你可以在那里建模并优化数据）移动数据更有意义。我认为关键在于拥有一套哲学和方法。没有唯一的答案。以上就是 B2C 的部分。至于 B2B，我想说……是的，请讲。

---

### (00:35:40) Lenny

**English:**
Before we move on to that one, you mentioned reverse ETLs. What are some examples of products that are reverse ETLs so that people can look them up?

**中文翻译:**
在我们继续之前，你提到了反向 ETL。有哪些反向 ETL 产品的例子，好让大家去查一下？

---

### (00:35:47) Austin Hay

**English:**
Yeah, I personally think the reverse ETL is a capability. It's the ability to move data from a warehouse to a tool. So, technically speaking, you'll find reverse ETLs in CDPs and as standalone products. Segment has a reverse ETL function they just launched, and Particle has a reverse ETL function they just launched. Rudder Stack, which is a CDP has always had a reverse ETL function where you can take warehouse data and move it to different cloud infrastructure. Then there are distinct standalone products. Census, which was back Bay 16Z and Hightouch are the two standalone reverse ETLs. And like I said, I'm an investor in Hightouch, love their work, we use them at Ramp. At the end of the day, you should pick tools because they help solve problems, not because of anything else. So, we can come back to that if you want.

**中文翻译:**
是的，我个人认为反向 ETL 是一种“能力”，即把数据从仓库移动到工具的能力。所以从技术上讲，你会在 CDP 中发现反向 ETL 功能，也有独立的产品。Segment 刚推出了反向 ETL 功能，mParticle 也刚推出了。RudderStack 作为一个 CDP，一直都有反向 ETL 功能，可以将仓库数据移动到不同的云基础设施。此外还有专门的独立产品：Census（由 a16z 支持）和 Hightouch 是两个独立的反向 ETL 工具。正如我所说，我是 Hightouch 的投资者，很喜欢他们的产品，我们在 Ramp 也在用。归根结底，你应该因为工具能解决问题而选择它，而不是因为别的。如果你愿意，我们可以回头再聊这个。

---

### (00:36:32) Lenny

**English:**
Wonderful. Great, great. Yeah, that was perfect. Keep going.

**中文翻译:**
太棒了，非常完美。请继续。

---

### (00:36:35) Austin Hay

**English:**
Okay. Yeah, so we talked about B2B, or sorry, B2C. B2B, I probably don't have as much history as say people who survived the dot-com crash in 2008. I started really my career in B2B in 2014, so I'll share a little bit of my experience and I'm just hopefully just saying this because listeners may chime in and be like, oh man, this guy doesn't know what the hell he's talking about, which is totally fair game. So, 2014 though, I remember working at Branch, I was working for our COO Mike Molinet, who's now at this really cool company called Thena, but at the time I was working for Mike, and as we talked about before, oftentimes growth stacks just appear because you're given a challenge. I remember sitting in this tiny room with Mike. We were over in Palo Alto, right off the fills in Palo Alto in this tiny room.

**中文翻译:**
好。我们聊完了 B2C。关于 B2B，我的资历可能没有那些经历过 2008 年互联网泡沫破裂的人那么深。我真正的 B2B 生涯是从 2014 年开始的，所以我分享一下我的经验。希望听众们如果觉得“这家伙根本不知道自己在说什么”可以随时指正，这完全没问题。我记得 2014 年在 Branch 工作时，我为首席运营官 Mike Molinet 效力（他现在在一家叫 Thena 的酷公司）。正如我们之前聊过的，增长工具栈往往是因为面临挑战而产生的。我记得和 Mike 坐在帕洛阿尔托（Palo Alto）的一个小房间里，就在菲尔兹咖啡（Philz Coffee）旁边。

---

### (00:37:27) Austin Hay (Continued)

**English:**
It was boiling in the room like so hot we were sweating and we were mapping out on a whiteboard how we would design our first version of our system, like how we capture leads, how we get them into Salesforce, how we would email them with a little tool called Outreach at the time, that was still a startup. And I'll send it to you after this if you want to show them to viewers, but it's so MVP, but it still models what a lot of people have today. There's some ingestion point for your data. There's Salesforce, there's some type of outbounding tool, there's an enrichment tool, and then a lot of other Jerry rig stuff hooked up to Salesforce. And for the most part, that's how B2B still exists today as you have Salesforce and then the whole world and the universe revolves around Salesforce. You just have more advanced tools, you have Gom and stuff like that.

**中文翻译:**
房间里热得要命，我们满头大汗，在白板上勾勒我们系统的第一个版本：我们如何捕捉线索（leads），如何把它们存入 Salesforce，如何用当时还是一家初创公司的 Outreach 给他们发邮件。如果你想展示给观众看，我之后可以发给你，它非常 MVP（最小可行性产品），但它仍然是今天很多人使用的模型的雏形。有一个数据摄入点，有 Salesforce，有某种外呼工具，有数据丰富（enrichment）工具，还有一堆临时拼凑的东西挂在 Salesforce 上。在很大程度上，这就是今天 B2B 的现状：你拥有 Salesforce，然后整个世界和宇宙都围绕着 Salesforce 转。你只是有了更先进的工具，比如 Gong 之类的。

---

### (00:38:12) Austin Hay (Continued)

**English:**
I think the big change though, and what is really fascinating and has been fun to watch is in the last two, three years, you now have this whole rise of B2B2C, which takes all the complexity of the top of funnel user acquisition system and stuffs it right alongside your CRM and how you build an elegant system there in that space, I think is one of the most complicated and intricate pieces of being a MarTech person today. And some of it just has to do with the data language. Like all these B2C tools were designed with two objects, a user and an event. And so if you're not a technologist, it's like object orientation is how you kind of think about the world. There's only two concepts for the world in a user acquisition based system. A user who's a person either anonymous or known coming into your website and the things that they do on your website or application, and you use all that data to acquire them or model them.

**中文翻译:**
我认为重大的变化，也是过去两三年里非常迷人且有趣的一点，是 B2B2C 的兴起。它把漏斗顶端用户获取系统的所有复杂性，直接塞进了你的 CRM 旁边。如何在那个领域构建一个优雅的系统，我认为是当今 MarTech 人员面临的最复杂、最微妙的任务之一。这在一定程度上与数据语言有关。比如，所有这些 B2C 工具都是围绕两个对象设计的：用户（User）和事件（Event）。如果你不是技术人员，可以理解为“面向对象”是你思考世界的方式。在基于用户获取的系统中，世界只有两个概念：进入你网站的用户（匿名的或已知的），以及他们在你网站或应用上做的事情。你利用所有这些数据来获取他们或为他们建模。

---

### (00:39:03) Austin Hay (Continued)

**English:**
In a B2B business you have all that complexity, but at the end of the day, you might not really need it if all the person is doing is it's just the company is signing the contract and then you don't really care what happens afterwards. You might track users and events inside your application, but it's not for the acquisition, it's for the retention of the user. B2B2C is fascinating because you have all the complexity at the top, but then how and when do you tie a user to a company or some type of entity object, and what tools do you need to do that and where do they live in the system? And do those tools actually have competing priorities? Let me give you the greatest example of this that happened at Notion when I was consulting to them at Chris when I was consulting to them and at Ramp is having both HubSpot and Salesforce.

**中文翻译:**
在 B2B 业务中，你也有这些复杂性，但归根结底，如果只是公司签了合同，你可能并不真的需要这些，因为你不太关心之后发生了什么。你可能会在应用内部追踪用户和事件，但那不是为了获客，而是为了留存。B2B2C 之所以迷人，是因为你在顶端有所有的复杂性，但随后你如何以及何时将用户与公司或某种实体对象关联起来？你需要什么工具来实现这一点？它们在系统中处于什么位置？这些工具之间是否存在优先级冲突？让我给你举个最好的例子，这在我为 Notion、Chris 咨询时以及在 Ramp 都发生过，那就是同时拥有 HubSpot 和 Salesforce。

---

### (00:39:45) Austin Hay (Continued)

**English:**
Both are CRMs, both have the ability to track users and companies, neither are CDPs. And how you actually map the data from HubSpot to Salesforce kind of determines how much hell you're in, and there's really no good solution. It's just like you have to figure out for yourself, how do you want to acquire use at the top of the funnel? How do you merge them into the bottom of the funnel of the Salesforce? And again, there are lots of options or versions of the world. You could use Amplitude only and collect all your user and event data and then merge that into Salesforce directly. You could collect all your data in Amplitude or Segment and then post that to HubSpot, which then posts that to Salesforce. But of course, as you make these decisions, your systems becomes more complicated and more than one person can manage. So, there's this trade-off between complexity and resources that you always have to juggle.

**中文翻译:**
两者都是 CRM，都能追踪用户和公司，但两者都不是 CDP。你如何将数据从 HubSpot 映射到 Salesforce，基本上决定了你会陷入多大的麻烦，而且真的没有完美的解决方案。你必须自己想清楚：你想如何在漏斗顶端获取用户？如何将他们合并到 Salesforce 的漏斗底端？同样，这有很多种选择或版本。你可以只用 Amplitude 收集所有用户和事件数据，然后直接合并到 Salesforce。你也可以在 Amplitude 或 Segment 中收集数据，然后发给 HubSpot，再由 HubSpot 发给 Salesforce。当然，随着你做出这些决定，你的系统会变得越来越复杂，不再是单个人能管理的。所以，你必须始终在复杂性和资源之间进行权衡。

---

### (00:40:33) Lenny

**English:**
Today's episode is brought to you by Brave Search and their newest product, the Brave Search API, an independent global search index you can use to power your search or AI apps. If your work involves AI, then you know how important new data is to train your LLMs and to power your AI applications. You might be building an incredible AI product, but if you're using the same data sets as your competitors to train your models, you don't have much of an advantage. Brave Search is the fastest growing search engine since Bing, and it's 100% independent from the big tech companies. Its index features billions of pages of high quality data from real humans, and it's constantly updated thanks to being the default search engine in the Brave browser. If you're building products with search capabilities, you're probably experiencing soaring API costs or lack of viable global alternatives to Bing or Google.

**中文翻译:**
本集节目由 Brave Search 及其最新产品 Brave Search API 为您呈现。这是一个独立的全球搜索索引，可用于驱动您的搜索或 AI 应用。如果您的工作涉及 AI，那么您一定知道新数据对于训练大语言模型（LLM）和驱动 AI 应用有多重要。您可能正在构建一款了不起的 AI 产品，但如果您使用与竞争对手相同的数据集来训练模型，您就不会有太大优势。Brave Search 是自 Bing 以来增长最快的搜索引擎，并且 100% 独立于大型科技公司。它的索引包含数十亿页来自真实人类的高质量数据，并且由于是 Brave 浏览器的默认搜索引擎，它会不断更新。如果您正在构建具有搜索功能的产品，您可能正面临 API 成本飙升，或者缺乏除 Bing 或 Google 之外可行的全球替代方案。

---

### (00:41:23) Lenny (Continued)

**English:**
It's only going to become harder to afford these challenges. The Brave Search API gives you access to its novel web scale data with competitive features, intuitive structuring and affordable costs. AI devs will particularly benefit from data containing thorough coverage of recent events. Lenny's Podcast listeners can get started testing the API for free at brave.com/lenny. That's brave.com/lenny. There's this big question within B2B and B2C around how to do attribution. Well, it's a never ending struggle. I'm curious if you have any pro-tips or best practices or tools that you use to improve the way attribution happens at a company.

**中文翻译:**
应对这些挑战只会变得越来越难。Brave Search API 让您能够访问其新颖的网络规模数据，具有竞争力的功能、直观的结构和实惠的价格。AI 开发者将特别受益于涵盖近期事件的详尽数据。Lenny 的播客听众可以在 brave.com/lenny 免费开始测试该 API。地址是 brave.com/lenny。在 B2B 和 B2C 领域，关于如何做好“归因”（attribution）有一个大问题。这是一场永无止境的斗争。我很好奇你是否有任何专业建议、最佳实践或工具，可以用来改善公司的归因方式。

---

### (00:42:09) Austin Hay

**English:**
Actually, I listened to your pod on multi-touch attribution. I'm forgetting who you were with at this point, but it was like I was loving it because it talked about MMM and MTA specifically.

**中文翻译:**
实际上，我听过你关于“多触点归因”（multi-touch attribution）的那期播客。我忘了你当时是和谁聊的，但我非常喜欢，因为它专门讨论了 MMM 和 MTA。

---

### (00:42:19) Lenny

**English:**
Yeah, that was a newsletter post actually, not even a podcast.

**中文翻译:**
是的，那其实是一篇邮件通讯（newsletter）文章，甚至不是播客。

---

### (00:42:22) Austin Hay

**English:**
Yes. So, back to our conversation around division of responsibility. I'm not always the person you should talk to create an MMM model. I'm not a data scientist. I know how to make MMM models and I know what they are.

**中文翻译:**
没错。回到我们关于职责划分的讨论。我并不总是那个你应该找来创建 MMM 模型的人。我不是数据科学家。我知道如何制作 MMM 模型，也知道它们是什么。

---

### (00:42:36) Lenny

**English:**
Can you explain MMM briefly?

**中文翻译:**
你能简要解释一下 MMM 吗？

---

### (00:42:38) Austin Hay

**English:**
Mixed Media Modeling. And MTA stands for Multi-touch Attribution and it's these two ways of measuring the world and marketing to understand how you should allocate resources to campaign spend. MTA and MMM though are both underpinned by how you collect data. They're both informed by the user object and the event objects that you collect on your website or your application that then lead to the data that data scientists use for MTA and MMM. That's the connection between data and MarTech is often the tools and systems that we build and stand up and manage are what are used for these very complicated growth, experimentation and attribution results at the end of it. And one of the most discreet things you can do for MTA, because I get this question all the time around, hey, do we need MTA?

**中文翻译:**
MMM 代表营销组合模型（Marketing Mix Modeling）。MTA 代表多触点归因（Multi-touch Attribution）。这是衡量世界和营销的两种方式，旨在了解你应该如何分配活动预算。不过，MTA 和 MMM 都以你收集数据的方式为基础。它们都受到你在网站或应用上收集的用户对象和事件对象的影响，这些对象随后产生了数据科学家用于 MTA 和 MMM 的数据。这就是数据与 MarTech 之间的联系：我们构建、搭建和管理的工具和系统，往往就是最终用于这些非常复杂的增长、实验和归因结果的基础。关于 MTA，你可以做的最具体的一件事（因为我经常被问到：嘿，我们需要 MTA 吗？）。

---

### (00:43:21) Austin Hay (Continued)

**English:**
What should I do first touch or last touch? Should I do both? And there's actually really, I can send you this guide, but there's six or seven things you can do to basically futureproof yourself from needing either one. Because most businesses either start with first touch or last touch and then eventually want to move to a multi-touch attribution model. And for those who don't know what that is, first touch is where you kind of collect the data about where somebody first came from. Last touch is where you collect the data about where the person last came from. So, an example, would this be like if I went to Lenny's Newsletter from a Google ad and that's all he has? That would be my first touch and my last touch. If I first came from a Google ad to Lenny's Podcast, but then later I came from a Facebook ad or I don't know direct, then that would be my last touch.

**中文翻译:**
“我该用首触点（first touch）还是末触点（last touch）？还是两个都用？”实际上，我可以发给你一份指南，里面有六七件事可以让你在未来不需要纠结于其中任何一个。因为大多数企业要么从首触点开始，要么从末触点开始，最终都想转向多触点归因模型。对于那些不知道这是什么的人：首触点是指你收集关于某人最初来源的数据。末触点是指你收集关于某人最后来源的数据。举个例子：如果我通过 Google 广告进入了 Lenny 的 Newsletter，且这是唯一的路径，那它既是我的首触点也是末触点。如果我先通过 Google 广告来到 Lenny 的播客，后来又通过 Facebook 广告或直接访问进入，那么后者就是我的末触点。

---

### (00:44:06) Austin Hay (Continued)

**English:**
And so it's this question of does the Google original first Google Channel get credit or does the second one the Facebook or direct get credit? And the first touch attribution model, a hundred percent goes to the first channel and the last touch attribution model, a hundred percent credit goes to the last touch. And a mixed attribution model or multi-touch attribution model, you're trying to figure out how to split the difference. And usually the evolution for businesses is they start with first touch or last touch, then they go to splitting it literally 50/50. And then somebody gets angry because they're not getting enough credit and they say, we've got to go to MTA. And there are both first party solutions for that and third party solutions for MTA. But back to the main thing, the main point is if you think about what you're collecting, this is for website businesses, you're collecting the referrer, like in the URL where the person's coming from, and you need any UTMs associated with that person.

**中文翻译:**
所以问题在于：是最初的 Google 渠道获得功劳，还是第二个 Facebook 或直接访问获得功劳？在首触点归因模型中，100% 的功劳归于第一个渠道；在末触点归因模型中，100% 的功劳归于最后一个触点。而在混合归因模型或多触点归因模型中，你试图找出如何分配这些功劳。通常企业的演进过程是：先从首触点或末触点开始，然后变成简单的 50/50 分成。接着有人会因为没得到足够的功劳而生气，于是说：“我们必须搞 MTA。”针对 MTA，既有第一方解决方案，也有第三方解决方案。但回到核心点：如果你考虑你正在收集的内容（针对网站业务），你正在收集引荐来源（referrer），比如 URL 中显示的来源，以及与该用户关联的任何 UTM 参数。

---

### (00:44:58) Austin Hay (Continued)

**English:**
And you also need any parameters from the advertising networks that might give them the ability to counter a conversion. Every ad network out there has little things they stuff into your URL that tell you that you came from them. Facebook has FVP, FPID, they sometimes encode it. Google has this thing called Google Click ID, which is just a really long string of characters that don't matter unless you know how to decode it. But all advertisers, and for the longest time advertising worked by putting parameters in URLs, pushing somebody through to your website, collecting those parameters and then passing it back to the ad network so they could get credit for it. And so in my mind, the best practice that everybody should stand up from day one is to basically design the system for MTA and then use whatever makes sense as you grow.

**中文翻译:**
你还需要来自广告网络的任何参数，这些参数能让他们计算转化。每个广告网络都会在你的 URL 中塞进一些小东西，告诉系统你来自他们。Facebook 有 FVP、FPID，有时还会加密。Google 有一个叫 Google Click ID（GCLID）的东西，就是一长串字符，除非你知道如何解码，否则它们毫无意义。但长期以来，广告运作的方式就是：在 URL 中放入参数，引导某人进入你的网站，收集这些参数，然后传回给广告网络，这样他们就能获得功劳。所以在我的观念里，每个人从第一天起就应该建立的最佳实践是：基本上按照 MTA 的要求来设计系统，然后随着你的成长，使用任何当时合理的模型。

---

### (00:45:45) Austin Hay (Continued)

**English:**
And so the way that I typically recommend to people is like imagine when a user comes to your website, you collect the URL, collect the referring URL, collect all the additional marketing parameters that you might want, [inaudible 00:45:57], TikTok ID, Microsoft ID, you should just make a list of them. And if you don't have that list, I can give them to you. And then you should collect all UTMs. So, in the URL, you're going to have UTM campaign, UTM medium. Most marketers use this to note what the campaign type was. Now the thing is that UTM is only going to be specific to the moment in time that the person came to your website. So, back to example about Lenny's podcast. If I come to LE's podcast and I came from a Google ad, then my UTM is only for that Google ad.

**中文翻译:**
我通常推荐给人们的方式是：想象当一个用户来到你的网站，你收集 URL、引荐 URL，以及你可能想要的所有额外营销参数（比如 TikTok ID、微软 ID 等，你应该列个清单，如果没有我可以给你）。然后你应该收集所有的 UTM 参数。在 URL 中，你会有 UTM campaign（活动）、UTM medium（媒介）。大多数营销人员用这些来记录活动类型。问题在于，UTM 只针对该用户来到你网站的那一刻。回到 Lenny 播客的例子：如果我通过 Google 广告来到播客，那么我的 UTM 只记录那个 Google 广告。

---

### (00:46:28) Austin Hay (Continued)

**English:**
So, I have a Google Click ID and I have a UTM. So, what you're got to do is you've got to store those parameters locally on the device. Either was a browser or whatever. You got to store it as UTM first campaign, UTM last campaign. And what you do is every single time that a person comes, you replace the last campaign or the last value with the one that's there. So, say the last one was Facebook and then I come later from a direct mailer ad you replace the UTM last medium with the new one. Now what's happening if you're using third party tools is that you're collecting this user information when the person's on the website, you're going to collect it both as a user attribute and as an event that way. What's going to happen on the backend for your data warehouse team is they're going to see a user profile that has both the first attribution information and the last attribution information.

**中文翻译:**
所以我有一个 Google Click ID 和一个 UTM。那么你要做的就是，把这些参数本地存储在设备上（浏览器或其他地方）。你要把它存为“UTM 首个活动”和“UTM 最近活动”。做法是：每当一个人访问时，你就用当前的参数替换“最近活动”的值。比如，上一次是 Facebook，后来我通过直邮广告进来，你就把“UTM 最近媒介”替换成新的。如果你使用第三方工具，当用户在网站上时，你会同时将其作为“用户属性”和“事件”来收集。对于后端的数据仓库团队来说，他们会看到一个用户画像，其中既包含首次归因信息，也包含末次归因信息。

---

### (00:47:20) Austin Hay (Continued)

**English:**
And then for all the stuff in the middle, you're firing off a page view event with first and last, where the last might deviate if there were multiple steps in the middle. So, what they can do is they can just coalesce over all the last UTMs they've seen on all your events by user to get both their first one, all the ones in the middle and the last. And so this isn't actually that complicated to set up. Most people just don't do the work early on. And then when they want to go back later and have MTA results, they don't have the data to do it. So, one of the things I tell people who are debating this is let's just get the infrastructure right from the beginning.

**中文翻译:**
至于中间的所有环节，你会触发一个带有“首个”和“最近”参数的页面浏览事件，如果中间有很多步骤，“最近”参数会不断变化。这样，数据团队就可以通过用户的所有事件，汇总他们见过的所有“最近 UTM”，从而获得首个、中间所有触点以及最后一个触点的信息。这其实设置起来并不复杂。大多数人只是在早期没做这项工作。等他们以后想要 MTA 结果时，才发现没有数据支持。所以我告诉那些纠结于此的人：让我们从一开始就把基础设施搞对。

---

### (00:47:55) Austin Hay (Continued)

**English:**
Let's set up so that you have users, you have user attributes, you're collecting first and last UTM on users. You're firing events with all those. There's some other more complex things you can do too. You can set them in first party cookies and you can also set them in your third party cookies for your tooling vendors. At the end of the day though, what matters is you just are collecting this information from the beginning. That way when you actually want to progress your attribution model, you don't have to wait a really long time to start gathering that data.

**中文翻译:**
让我们设置好用户和用户属性，收集用户的首个和末个 UTM。用这些信息触发事件。你还可以做一些更复杂的事，比如把它们存入第一方 Cookie，或者存入工具供应商的第三方 Cookie。但归根结底，重要的是你从一开始就在收集这些信息。这样，当你真正想要升级你的归因模型时，你就不必为了收集数据而等待很长时间。

---

### (00:48:24) Lenny

**English:**
Amazing. I love the details that you're sharing. I don't know where else people can find this sort of advice. It sounds like a core part of this is one, just having a data warehouse where you just throw all this data into, and two, having a taxonomy that you can rely on and do multiple things with down the road. Is that roughly right?

**中文翻译:**
太棒了。我非常喜欢你分享的这些细节。我不知道人们还能从哪儿听到这种建议。听起来核心部分有两点：第一，拥有一个可以把所有数据扔进去的数据仓库；第二，拥有一套可以依赖的分类法（taxonomy），以便日后进行多种操作。大致是这样吗？

---

### (00:48:42) Austin Hay

**English:**
Yeah, I think that's right. The taxonomy though, I think what's interesting is it's very much guided by your third party tools. And again, that's the reason why I think companies often miss the mark here is because they're not thinking about what can my tool actually allow me to put into it in the first place.

**中文翻译:**
是的，我认为没错。不过关于分类法，有趣的是它在很大程度上受限于你的第三方工具。这也是为什么我认为很多公司会在这里失策的原因——因为他们一开始就没考虑过：“我的工具到底允许我往里塞什么数据？”

---

### (00:48:59) Lenny

**English:**
Just to make sure I understand what you're saying there, you're saying generally maybe third party tools limit what you can do, which set you up for hardship later. And maybe what you're saying is do that yourself, that tracking piece, is that roughly what you're saying?

**中文翻译:**
为了确保我理解了你的意思：你是说通常第三方工具会限制你的操作，这会给以后埋下隐患。所以你的意思是，自己来做那部分追踪工作，是这个意思吗？

---

### (00:49:14) Austin Hay

**English:**
Yeah, I think that's right. The way to think of it is if you build your own data warehouse, your schema is unlimited. You can do whatever you want. You can design product schema, you can design user schema and event schema, but most third party B2C tools don't allow you to control the schema. There's only one CDP I know that does that, that's Snowplow. The rest are there's a user object and an event object. So, you can either stuff data as a user property onto the user object or you can stuff data into the event and fire it off as an event, but that's what you're working with. So, what I'm saying is most people just don't think about the object orientation of the third party tools they think about and they don't design their website traffic or their app traffic. We didn't talk about app, which is a whole different slew because doing attribution with Iowas 14 is much more difficult.

**中文翻译:**
是的，我认为没错。你可以这样想：如果你构建自己的数据仓库，你的 Schema（数据模式）是无限的。你可以随心所欲，设计产品 Schema、用户 Schema 和事件 Schema。但大多数第三方 B2C 工具不允许你控制 Schema。我所知道的唯一能做到这一点的 CDP 是 Snowplow。其他的通常只有“用户对象”和“事件对象”。所以你只能要么把数据作为用户属性塞进用户对象，要么把数据塞进事件并触发。这就是你的限制。所以我的意思是，大多数人根本没考虑过第三方工具的“面向对象”逻辑，也没有针对性地设计他们的网站流量或应用流量。我们还没聊到 App，那是另一回事，因为在 iOS 14 之后做归因要困难得多。

---

### (00:50:07) Austin Hay (Continued)

**English:**
But even in the website version of the world, people will often just collect UTMs and think that their job is done and it's like actually it's more complex. You have to think about first and last, think about the steps in the middle, design it so that you're putting it on the user profile and in the event. And so this goes back to the main thing that we were talking about earlier, whereas the job of a marketing technologist is to think often one to two years down the road about what we're going to need to solve for and design systems in an elegant way, not to break the bank, but to at least be the minimum viable product to actually get there. And a lot of my job, and I think the job of marketing technologists is trying to preserve that future state in the most minimally invasive engineering and resource way possible.

**中文翻译:**
即使在网站端，人们也常常只是收集一下 UTM 就觉得大功告成了，但实际上它更复杂。你必须考虑首个和末个触点，考虑中间的步骤，设计好系统以便将数据同时放入用户画像和事件中。这又回到了我们之前讨论的核心：营销技术专家的职责是预见未来一到两年的需求，并以优雅的方式设计系统——不一定要花大钱，但至少要是一个能达到目标的“最小可行性产品”。我的很多工作，以及我认为营销技术专家的职责，就是尝试以对工程和资源侵入性最小的方式，来保留那种未来的扩展性。

---

### (00:50:48) Lenny

**English:**
You've talked a bit about thinking ahead and a bunch of tools and platforms, and I'm wondering are there any new and emerging tools, platforms or even growth channels that you're keeping an eye on or excited about or finding more and more useful?

**中文翻译:**
你聊了很多关于前瞻性思考以及各种工具和平台的内容。我想知道，有没有什么新兴的工具、平台，甚至是增长渠道，是你正在关注、感到兴奋，或者觉得越来越有用的？

---

### (00:51:02) Austin Hay

**English:**
I'd be remiss if we didn't talk about Threads, right? Threads is super interesting. The question will be how quickly can they stand up an API for advertising and what does that look like or do they just blind it in with the existing meta and Facebook architecture? One of the caveats that I'm sure a lot of performance marketers out there will agree with is Facebook has a conflict of interest in reporting, right? They want you to spend money, so obviously they want to report the best results. And that's the reason why attribution parties like Branch and AppsFlyer exist is to somewhat curtail that conflict of interest. And so I'll be really interested just to see how attribution works, especially when you're moving from Instagram to Threads, from Facebook to Threads. Will it be the same architecture, will be the same advertising platform? Will they try to do something new?

**中文翻译:**
如果不聊聊 Threads 就太失职了，对吧？Threads 非常有趣。问题在于他们能多快建立起广告 API，那会是什么样子？还是说他们直接把它并入现有的 Meta 和 Facebook 架构中？我相信很多效果营销人员都会同意的一点是：Facebook 在报告中存在利益冲突，对吧？他们想让你花钱，所以显然他们想报告最好的结果。这就是为什么像 Branch 和 AppsFlyer 这样的归因服务商存在的原因——为了在一定程度上遏制这种利益冲突。所以我非常有兴趣看看归因将如何运作，特别是当你从 Instagram 转向 Threads，或者从 Facebook 转向 Threads 时。会是同样的架构吗？会是同样的广告平台吗？他们会尝试一些新东西吗？

---

### (00:51:52) Austin Hay (Continued)

**English:**
So, I'm keeping my eyes on that. Reddit is also a very interesting place to convert now. They're opening up their conversions API, and I'm seeing a lot more investment in Reddit just because you can have embedded ads now that almost look like they can be posts that you can comment on. I think it just speaks to the maturity of the advertising business. What's happening in the background of all this is ad attribution from apps has become a lot more difficult and mostly aggregate. From 2010 to 2020, we had the golden years of deterministic matching where it was very easy to run an ad and understand with precision who installed the app. Maybe you didn't know their name, but you actually would know their IDFA and you could tie that to their PI. You can't do that anymore. It's very challenging.

**中文翻译:**
所以我正关注着。Reddit 现在也是一个非常有趣的转化阵地。他们正在开放转化 API，我看到对 Reddit 的投入越来越多，因为你现在可以投放嵌入式广告，看起来几乎就像可以评论的帖子。我认为这体现了广告业务的成熟。在这一切的背后，App 端的广告归因变得困难得多，而且大多是聚合数据。从 2010 年到 2020 年，我们经历了确定性匹配的黄金时代，投放广告并精确了解谁安装了 App 非常容易。也许你不知道他们的名字，但你知道他们的 IDFA，并能将其与 PII 关联。现在你做不到了，这非常有挑战性。

---

### (00:52:35) Austin Hay (Continued)

**English:**
Even when you can do it, the results that you would get are pretty low because nobody's going to be opting into giving you their IDFA. So, what that means is these ad networks are becoming more complex, sophisticated, and interesting right at the same time that it's harder for marketers to really understand how they're spending money. And so I'm paying a lot of attention to how marketers make decisions with probabilistic data because most of the work that I'm doing now is actually saying, well, given that we don't have determinist data about a certain audience or where somebody came from, how can I find other information that will create a model for 30% of the population and we can use that to extrapolate to a hundred. So, probabilistic matching and probabilistic attribution I feel like is a skillset that more marketing technologists and marketers should just get familiar with the way that we make decisions today.

**中文翻译:**
即使你能做到，得到的结果也非常有限，因为没人会主动选择把 IDFA 给你。这意味着，就在营销人员越来越难理解钱是怎么花掉的同时，广告网络正变得更复杂、更精细。因此，我非常关注营销人员如何利用“概率性数据”做决策。我现在的很多工作实际上是：既然我们没有关于特定受众或来源的确定性数据，我该如何找到其他信息，为 30% 的人群建立模型，并以此推演到 100%。我觉得“概率性匹配”和“概率性归因”是更多营销技术专家和营销人员应该熟悉的技能，这是我们今天做决策的方式。

---

### (00:53:27) Lenny

**English:**
Wow, I hadn't heard of this concept before. And that's how people are starting, or at least you're suggesting that's how people should start thinking about growth results and impact is less, here's how much this ad drove, the likelihood that this ad did this had this sort of impact.

**中文翻译:**
哇，我以前没听过这个概念。所以人们开始——或者至少你建议人们应该开始——这样思考增长结果和影响：不再是“这个广告带来了多少转化”，而是“这个广告产生这种影响的可能性是多少”。

---

### (00:53:46) Austin Hay

**English:**
And it's not the case with all channels, but it's specific for apps that have mobile apps, they're going to be impacted by it because they just aren't going to be able to discreetly identify one-to-one the person that came from a campaign. They'll know that a group of people came from a campaign, but they won't be able to make measurement with those people alongside other attributes. For website, it's not the same, but there are lots of things that are making it more challenging. One is browsers now are stripping out those URLs we talked about. So, you're just seeing a bigger and bigger percentage of people being counted as organic that actually came from a paid advertisement because when they got redirected to your website, the browser truncated all those URL parameters. The second thing is cookie blockers. We talk about all these third parties before.

**中文翻译:**
并非所有渠道都如此，但对于拥有移动 App 的业务，他们会受到很大影响，因为他们无法再一对一地精确识别出哪个用户来自哪个活动。他们会知道有一群人来自某个活动，但无法将这些人与其他属性结合起来进行衡量。对于网站来说情况有所不同，但也有很多因素让它变得更具挑战性。一是浏览器现在会剥离我们提到的那些 URL 参数。所以你会看到越来越高比例的人被计入“自然流量”（organic），而实际上他们来自付费广告，只是在跳转到你网站时，浏览器截断了所有 URL 参数。第二是 Cookie 拦截器。我们之前聊过那些第三方工具。

---

### (00:54:30) Austin Hay (Continued)

**English:**
The way that third parties often collect information is they drop a cookie in your browser that tracks you, if you've heard of Segment, which is one of the most well-known CDPs of the last few years, is they implant a little third party cookie on the site that contains an anonymous user ID and all of your attributes as you're navigating the site. And then once you log in, they convert that to a known or non-anonymous user ID. Usually that's tied to some type of entity ID or a user record. And at that moment in time, if you come back and they see your cookie, they kind of know who you are. Now, if you're blocking cookies, that means you're basically remaining anonymous throughout the entire user journey until you log in. Not to mention a lot of people have lead funnels where you need that information to actually understand what the user is doing before they convert. So, if you're blocking third party cookies before they even get a chance to convert, you have no information about where the person came from. You just saw that they signed up, and so it might as well be organic.

**中文翻译:**
第三方收集信息的方式通常是在你的浏览器中植入一个追踪你的 Cookie。如果你听过 Segment（过去几年最著名的 CDP 之一），他们会在网站上植入一个小小的第三方 Cookie，其中包含一个匿名用户 ID，记录你在浏览网站时的所有属性。一旦你登录，他们就会将其转换为已知的或非匿名的用户 ID，通常与某种实体 ID 或用户记录绑定。那一刻，如果你再次访问且他们看到了你的 Cookie，他们就知道你是谁。现在，如果你拦截了 Cookie，意味着你在整个用户旅程中基本保持匿名，直到登录。更不用说很多人有“线索漏斗”（lead funnels），你需要这些信息来了解用户在转化前做了什么。如果你在他们转化前就拦截了第三方 Cookie，你就完全不知道这个人从哪儿来。你只看到他们注册了，所以看起来就像是自然流量。

---

### (00:55:26) Lenny

**English:**
So, you talked about how many people are trying to get used to this new world of ATT and much harder to measure attribution and all that. Is there anything you've learned that has worked well to help you recover from that a little bit in terms of measuring what's happening? Is there any tips you can share or anything you've seen work?

**中文翻译:**
你谈到了很多人正在努力适应 ATT（应用追踪透明度）带来的新世界，归因变得难得多。关于如何衡量正在发生的事情，你有没有学到什么行之有效的方法，能帮大家挽回一点损失？有什么秘诀或你见过的成功案例可以分享吗？

---

### (00:55:44) Austin Hay

**English:**
Yeah, I mean I think a lot of people are just gravitating towards MMM now without really understanding when MMM is useful or not. I don't know if there's a company called Recast. I think you're an investor. Am I crazy?

**中文翻译:**
是的，我的意思是，我觉得现在很多人都在盲目转向 MMM，而没有真正理解 MMM 什么时候有用。我不知道你听过 Recast 这家公司吗？我觉得你是他们的投资者，我没记错吧？

---

### (00:55:57) Lenny

**English:**
I am. And that's who wrote that article that you mentioned actually.

**中文翻译:**
我是。你提到的那篇文章其实就是他们写的。

---

### (00:56:01) Austin Hay

**English:**
That's right. It's Michael and it was somebody else, I can't remember the name besides-

**中文翻译:**
没错。是 Michael 和另一个人，除了他我记不清名字了——

---

### (00:56:04) Lenny

**English:**
It was another Mike Taylor.

**中文翻译:**
是另一个 Mike Taylor。

---

### (00:56:06) Austin Hay

**English:**
I'm not an expert on MMM, so I'm not going to be able to comment to quite the degree that they have. But when I spoke with Michael, and when I think about MMM, a lot of my conversation is this actually really realistic for our business right now? Do we have the data to run an MMM model and how is it going to change or chart the course of our performance ad marketing business in light of having this information? And when I think about it through those lens, most of the time businesses are not ready for MMM. They actually just be an MTA and they need better probabilistic modeling. And I know that's not a super spicy take, but I'd just say at least at Ramp and what I'm seeing at other businesses right now that are operating, it's much more of like we're going back to the days where we understand in broad strokes how much each of our campaigns is driving in advertising revenue.

**中文翻译:**
我不是 MMM 专家，所以我无法像他们那样深入评论。但当我与 Michael 交流以及我自己思考 MMM 时，我经常会问：这对我们现在的业务真的现实吗？我们有运行 MMM 模型的数据吗？有了这些信息后，它将如何改变或规划我们效果广告业务的航向？从这个角度看，大多数时候企业还没准备好迎接 MMM。他们其实只需要 MTA 和更好的概率建模。我知道这不算什么惊人的见解，但我只能说，至少在 Ramp 以及我看到的其他正在运营的业务中，情况更像是：我们回到了那个只能大致了解每个活动带来多少广告收入的时代。

---

### (00:57:00) Austin Hay (Continued)

**English:**
We're not able to tie that discreetly with the user journey. And we know that some percentage of this user base might have been lost or organic. So, in light of those, how do we make spend? And then also you can be pretty smart. You can do, for example, geo-based testing on billboards. Try to isolate that as a factor if you withhold all other confounding factors so you can be smart. Coordinating these types of campaigns though is really challenging, especially if you're a really big business, let's say runs online advertising throughout the US and you're trying to do targeted billboard tests in an isolated number of cities across the states coordinating to turn off demographics, make sure there's not isolating factors. It can be really challenging. So, there's not a silver bullet right now I don't think.

**中文翻译:**
我们无法将其与用户旅程精确关联。我们知道这部分用户中一定比例可能是流失的或自然的。在这种情况下，我们该如何投放？此外，你也可以做得很聪明。例如，你可以针对广告牌进行基于地理位置的测试。如果你能排除所有其他干扰因素，尝试将其作为一个独立因素来隔离。不过，协调这类活动非常具有挑战性，特别是如果你是一家在全美投放在线广告的大型企业，你想在全美少数几个孤立的城市进行针对性的广告牌测试，协调关闭特定人群的线上广告，确保没有干扰因素。这可能非常困难。所以我认为目前还没有万灵药。

---

### (00:57:42) Lenny

**English:**
Awesome. Just a few more questions and then a broader question I want to ask. So, say you want to start hiring the next Austin, first of all, what do you look for in the person? What are signs that they're probably going to be worth chatting with? And then what are some interview questions you'd like to ask to get a sense of how strong they are?

**中文翻译:**
太棒了。还有最后几个问题，然后我想问一个更广泛的问题。假设你想开始招聘下一个 Austin，首先，你在候选人身上看重什么？哪些迹象表明他们值得一谈？你会问哪些面试问题来了解他们的实力？

---

### (00:58:02) Austin Hay

**English:**
So, the first thing that I always gravitate towards is just intellectual curiosity. And I know that's very, maybe a little bit overrated, but I think you can tell pretty quickly if somebody's just interested in the world and learning things. And the thing about third party tools is you are constantly learning. You'll never be an expert in everything because there's way too many tools to be an expert on, I forgot what publication, I think it's MarTech editor in chief or something. There's a publication that I subscribed to and everything is classified as MarTech and the diagram is huge, like cover a wall. Now I don't believe everything like that is MarTech, but even if a fraction is, there are way too many tools in technology to ever be an expert. So, you have to be both very interested in learning and very willing to quickly learn if you want to be in the space.

**中文翻译:**
我最看重的第一点就是“求知欲”（intellectual curiosity）。我知道这听起来可能有点陈词滥调，但我认为你可以很快判断出一个人是否对世界充满兴趣并热爱学习。关于第三方工具的一点是：你必须不断学习。你永远不可能成为所有领域的专家，因为工具实在太多了。我忘了是哪份刊物了，好像是《MarTech 总编》之类的，我订阅了一份刊物，里面把所有东西都归类为 MarTech，那张图表巨大无比，能贴满一面墙。虽然我不认为图上所有东西都是 MarTech，但即使只有一小部分，技术工具也多到让你无法成为全才。所以，如果你想在这个领域立足，你必须既对学习感兴趣，又愿意快速学习。

---

### (00:58:50) Austin Hay (Continued)

**English:**
And so I generally look for intellectual curiosity as the first sign. The second thing that I think helps people a lot who have intellectual curiosity is they're scrappy in engineering. They might not be the best engineer possible, but they know how to get around. They know JavaScript, they know Python, they can read API documentation and make an API request. They have enough base knowledge to basically understand how to solve a problem that an engineer might do even if they themselves are not an engineer. Now obviously you can get lucky sometimes and you'll find the engineer who never wants to be an engineer again and decides to move into something less technical. And in those cases they're super powerful, but I haven't met a lot of those people in my life. And also there's just some business dynamics to it. You could probably make more as a backend engineer than as a MarTech guy.

**中文翻译:**
所以我通常把求知欲作为第一个信号。第二点我认为对有求知欲的人很有帮助的是“工程上的灵活应变能力”（scrappy in engineering）。他们可能不是顶尖的工程师，但他们知道如何解决问题。他们懂 JavaScript，懂 Python，能读懂 API 文档并发送 API 请求。他们有足够的基础知识，即使自己不是工程师，也能理解如何解决工程师会遇到的问题。当然，有时你可能会走运，遇到一个再也不想当工程师、决定转行做不那么技术性工作的工程师。在这种情况下，他们会非常强大，但我这辈子没见过几个这样的人。而且这还涉及到商业动态：作为后端工程师赚的钱可能比做 MarTech 专家多。

---

### (00:59:41) Austin Hay (Continued)

**English:**
So, you probably just pursue the pathway that makes more money. It's like a little bit of a utility function. So, I look for intellectual curiosity. I look for basic engineering scrappiness. And as a side note, I would say lots of people out there, the advice that I give them is you don't have to go get a software engineering degree. You can teach yourself, I am self-taught. You can take a coding academy online. I think you get enough knowledge through being able to do web programming or some type of backend programming. So, I would say it's not more than a six-month investment for anybody to really get the skillset that's needed. Obviously once you get the skillset, you can build upon it with years of experience afterwards. But if you're new to the space and you're in marketing ops and you want to get more technical, or if you're a user acquisition manager who did paid performance, but you're like, I really want do things end to end.

**中文翻译:**
所以你可能会选择那条更赚钱的路，这就像是一个效用函数。因此，我寻找求知欲，寻找基础的工程应变能力。顺便说一下，我给很多人的建议是：你不需要去拿一个软件工程学位。你可以自学，我就是自学的。你可以参加在线编程学院。我认为通过学习网页编程或某种后端编程，你就能获得足够的知识。我会说，任何人只要投入不超过六个月的时间，就能掌握所需的技能。当然，一旦你掌握了技能，以后可以通过多年的经验来积累。但如果你是这个领域的新人，在做营销运营并想变得更懂技术，或者你是一个做付费效果的 UA 经理，但你想做端到端的事情。

---

### (01:00:33) Austin Hay (Continued)

**English:**
You can just go pick up some software skills and you probably are going to be pretty dangerous from that. And so those are the two things I gravitate towards. There's obviously many more, but those are the first two. The questions that I like to ask is what does I like to ask people how they prepared for the interview. This is not, I can't take credit for this. My wife told me about, gave me this idea and I loved it. I think it was a16z partner. But I love the question because when you ask, hey, how did you prepare? You're really asking how does the person think? How did they plan? How did they take things seriously or not? What did they read? What did they do? And if you have to prompt them to tell you all the things they did, then they're just not a systems thinker.

**中文翻译:**
你只需要去学一些软件技能，你就会变得非常有竞争力。这就是我最看重的两点。当然还有很多其他的，但这是前两名。我喜欢问的问题是：我喜欢问人们是如何准备面试的。这不是我的原创，是我妻子给我的主意，我非常喜欢。我想这最初来自一位 a16z 的合伙人。我喜欢这个问题，因为当你问“你是如何准备的？”时，你实际上是在问：这个人是如何思考的？他们如何计划？他们对待事情是否认真？他们读了什么？做了什么？如果你必须提示他们才能说出他们做过的事，那他们就不是一个系统思考者。

---

### (01:01:17) Austin Hay (Continued)

**English:**
But if they're like, hey, actually I read these things, I did this. I woke up, I went for a run. The more interesting complex the answer, the more interesting complex the candidate. And so I love the question because it just gives you a really good understanding of the person on a whole, like right out the gate. And then the other question I like to ask is I like to ask, so you're coming in tomorrow to our marketing tech system and by Friday you have to write up a report on all the things we should change. What do you do? And I like to ask that question because it pretty much signals out people who are biased versus not. People who have tooling biases will immediately just like, we should implement this tool because I used it before and I really like to hire people who are not tool specific, who are more tool agnostic and they think about tools as being things to solve problems as opposed to tools being things that you just solve because you've already solved it one way.

**中文翻译:**
但如果他们说：“嘿，实际上我读了这些资料，做了这些调研，我早上起来跑了个步……”答案越有趣、越复杂，候选人就越有趣、越复杂。我喜欢这个问题，因为它能让你从一开始就对这个人有一个全面的了解。另一个我喜欢问的问题是：“假设你明天进入我们的营销技术系统，到周五你必须写一份报告，列出所有我们应该更改的地方。你会怎么做？”我喜欢这个问题，因为它能识别出一个人是否有偏见。有工具偏见的人会立刻说：“我们应该实施这个工具，因为我以前用过。”而我非常喜欢雇佣那些不局限于特定工具、对工具持中立态度的人。他们把工具看作解决问题的手段，而不是因为以前用过某种方式解决问题就非要重复使用。

---

### (01:02:12) Austin Hay (Continued)

**English:**
This isn't a gripe and it's certainly not intended to slice at PMs, but one of my observations of a lot of PMs is they just pick the tools they've already used before because it's easy and it's a shortcut for them, which I understand, but problems are not always the same. So, tools shouldn't always be the same. So, I like to pick people who think about the problem set and the solution space more and they ask questions about what problems you're trying to solve, which I think is much more of an actual PM mindset of trying to work backward from the problem as opposed to just taking the problem and regurgitating stuff that you already know.

**中文翻译:**
这不是在抱怨，也绝对不是在针对 PM，但我对很多 PM 的观察是：他们只是选择以前用过的工具，因为这很容易，是捷径。我理解这一点，但问题并不总是相同的，所以工具也不应该总是一样。因此，我喜欢选择那些更多思考“问题集”和“解决方案空间”的人，他们会询问你要解决什么问题。我认为这才是真正的 PM 思维——尝试从问题出发倒推，而不是直接拿过问题，然后机械地重复你已经知道的东西。

---

### (01:02:45) Lenny

**English:**
Are there any flags you look for that tell you maybe this person isn't someone you want to be working with?

**中文翻译:**
有没有什么“红旗”（危险信号）会让你觉得：“也许这个人不是我想共事的人”？

---

### (01:02:51) Austin Hay

**English:**
I answer that question on two spectrums. One is if I'm hiring as somebody who's hiring an IC versus I'm getting hired. So, one of the red flags whenever I'm approaching a company to work for them is I'll ask for their company financials and a company that's not willing to divulge their financials to a director level or above person, I don't want to do business with because that means they're hiding something. Or they have a culture where they don't trust the most senior leaders of the organization. Either is a bad choice in my perspective. So, that's one of the questions I always ask when I'm going up for a job, when I'm hiring somebody. Red flags, I feel like one of the false flags not a red flag is more like when there's a gap in somebody's job resume, everybody gravitates towards that and it's often really explainable.

**中文翻译:**
我从两个维度来回答。一是我作为招聘者招 IC，二是我作为应聘者。当我考虑去一家公司工作时，一个红旗信号是：我会要求看公司的财务报表。如果一家公司不愿意向总监级及以上的人透露财务状况，我就不想和他们共事，因为这意味着他们在隐瞒什么，或者他们的文化不信任组织的高层领导。在我看来，这两种情况都很糟糕。所以这是我求职时必问的问题。至于我招聘别人时的红旗，我觉得有一种“假红旗”（误导性信号），比如简历上的职业空白期。大家总是盯着这个看，但其实通常都是可以解释的。

---

### (01:03:39) Austin Hay (Continued)

**English:**
A good example is I was hiring somebody once who had a two-year gap in their resume. We didn't end up hiring the person, but they went through all the stages and we didn't hire them, not because of them, but because the job got removed and this person took two years to get a philosophy degree or maybe it was a poetry degree and then also taught himself to program. So, it was a really enriching two years and there were lots of ways that I could see them bringing their past experience and the way that they took time off together to be a really well-rounded candidate.

**中文翻译:**
举个好例子：我曾经面试过一个人，他的简历上有两年的空白期。我们最终没有录用他，但他通过了所有面试阶段。没录用不是因为他，而是因为那个岗位被取消了。这个人花了两年时间去拿了一个哲学学位（也可能是诗歌学位），同时还自学了编程。所以那是极其充实的两年。我能看到他如何将过去的经验与这段休息时间结合起来，成为一个非常全面的候选人。

---

### (01:04:12) Austin Hay (Continued)

**English:**
So, I would say I look less for red flags and more for false identifiers on the resume application that may shortcut me towards the decision. Another one is just school people just look at your school where you went to undergrad or grad and they kind of make a decision one way or the other. And I feel like that's also can be a really bad shortcut because there's some amazing founders, for example, who went to school as you maybe had never heard of. Yeah, I know that's not a good way to answer the question, but I don't have a good way of looking for red flags, but I do tend to spend a lot of time on netting out of false flags.

**中文翻译:**
所以我会说，我不太寻找红旗，更多是寻找简历中那些可能让我草率做决定的“假标识”。另一个例子是学校——人们往往只看你本科或研究生在哪儿读的，然后就据此做判断。我觉得这也是一个非常糟糕的捷径，因为有很多了不起的创始人，他们上的学校你可能听都没听过。是的，我知道这不是回答这个问题的最佳方式，我确实没有一套寻找红旗的标准方法，但我确实会花很多时间去排除那些误导性的负面信号。

---

### (01:04:49) Lenny

**English:**
That was a great way to answer the question. I want to move on to something totally different, and this isn't something I've been asking people, but I'm curious if there's something here then maybe if there is, I'll start asking this more regularly. I'm curious if there's just any frameworks that you've found especially useful in your work or even life. Does anything come to mind?

**中文翻译:**
这个回答很棒。我想转到一个完全不同的点上。这不是我经常问别人的问题，但我很好奇这里是否有什么值得挖掘的，如果有，我以后会经常问。我想知道，在你的工作甚至生活中，有没有什么你觉得特别有用的框架？能想到什么吗？

---

### (01:05:07) Austin Hay

**English:**
One thing that I want to build, so if I ever build this, maybe it'll be a newsletter for you, is just a one-page doc of the most useful life frameworks and they're just the words, and so you obviously have to know them, but I feel like I come across really good frameworks all the time and then I forget them. So, I just want a one pager of Lenny's Life frameworks.

**中文翻译:**
我一直想做一件事，如果我真的做成了，也许可以作为你的一期 Newsletter，那就是一份关于最有用生活框架的一页纸文档。上面只写关键词，你当然得知道它们的意思。我觉得我总能遇到很棒的框架，但转头就忘了。所以我想要一份“Lenny 的生活框架”一页纸。

---

### (01:05:07) Lenny

**English:**
Okay, we're starting this right now.

**中文翻译:**
好，我们现在就开始。

---

### (01:05:30) Austin Hay

**English:**
Okay, great.

**中文翻译:**
太好了。

---

### (01:05:31) Lenny

**English:**
We'll have number one.

**中文翻译:**
我们来列第一个。

---

### (01:05:31) Austin Hay

**English:**
All right.

**中文翻译:**
没问题。

---

### (01:05:31) Lenny

**English:**
I like this.

**中文翻译:**
我喜欢这个主意。

---

### (01:05:34) Austin Hay

**English:**
Okay, so I've already said this and you've promised to put this at the top of the list, so I'm really excited. It's just tools are meant to solve problems and I tell that to every person I hire. I repeat it consistently at Ramp and all of my consulting gigs. And it's not just the words, it's the spirit of it. Tools are really just meant to solve problems. You don't have to buy a tool to solve the problem. You also don't have to buy a specific tool to solve the problem. And I think it embodies so much of what marketing technology is trying to do. It's trying to help people understand their problems and then actually take action on them using tools and technology that are most first party and third party. And most people just focus on the tool part and focus on the buying and integration part.

**中文翻译:**
好，我已经说过这个了，你也答应把它放在清单首位，所以我很兴奋。那就是：“工具是为了解决问题而存在的。”我对我雇佣的每一个人都这么说。我在 Ramp 以及我所有的咨询工作中都不断重复这句话。这不仅仅是字面意思，更是一种精神。工具真的只是为了解决问题。你不需要为了解决问题而买工具，也不需要买特定的工具。我认为这体现了营销技术的核心：帮助人们理解他们的问题，然后利用第一方和第三方工具及技术采取行动。而大多数人只关注工具本身，关注购买和集成。

---

### (01:06:16) Austin Hay (Continued)

**English:**
And so I think if you consistently remind yourself that tools are just meant to solve problems, then you really get into a space where you as a systems' person can be an advocate for your marketer or your product people. I think sometimes there is a little bit of a tendency for people to think that people who manage and set up tools are just interested in managing and setting up tools, but really at the end of the day, we're trying to help people actually do stuff. Then there's this PPS framework that I talk about a lot, which is problem, people and system. So, whenever there's a challenge that comes up like at Ramp or in a consulting gig, I like to first say what's the problem? Who are the people involved and what system does it impact? Usually because people just jump straight to the system. They're like, hey, there's this problem, I just need to solve it with the tool. Hey, I'm trying to do X, Y, and Z. Can you just give me admin permission straight to the system?

**中文翻译:**
所以我觉得，如果你不断提醒自己工具只是为了解决问题，那么作为一个系统负责人，你就能真正成为营销人员或产品人员的拥护者。我认为有时人们倾向于认为，管理和设置工具的人只对管理和设置工具感兴趣，但实际上，归根结底，我们是在帮助人们完成工作。然后是我经常提到的 PPS 框架，即：问题（Problem）、人员（People）和系统（System）。每当在 Ramp 或咨询工作中遇到挑战时，我喜欢先问：问题是什么？涉及哪些人？它影响什么系统？因为通常人们会直接跳到系统层面。他们会说：“嘿，有个问题，我只需要用这个工具解决。”或者“嘿，我想做 X、Y、Z，你能直接给我系统的管理员权限吗？”

---

### (01:07:07) Austin Hay (Continued)

**English:**
So, if you back up though first you understand the problem like, hey, what is this person trying to solve? What is their discreet issue? A great example is I'm a sales manager and I want to make it so that every time I hire somebody, I don't have to go through this really tough process of onboarding my staff. All right, so that's the problem. Who are the people that involves, does the sales manager need permission from the CRO? Do the sellers need to be trained? Is there some other confounding factor that we're not aware of why we don't want to just automate this thing? Once you have an understanding of the people and the problems that you're trying to solve, then it's really, really easy to design the system to solve that. And so that's my number one framework for technologists in particular is like don't just jump to the system, think backwards, start with the people and the problem and then move to the system solution.

**中文翻译:**
但如果你退一步，先理解问题：嘿，这个人想解决什么？他们具体遇到了什么麻烦？一个很好的例子是：我是一个销售经理，我想让每次招人时的入职流程不再那么痛苦。好，这就是问题。涉及哪些人？销售经理需要首席营收官（CRO）的许可吗？销售人员需要培训吗？有没有什么我们不知道的干扰因素，导致我们不想直接自动化这件事？一旦你理解了人员和要解决的问题，设计系统来解决它就变得非常非常容易。所以这是我给技术人员的第一号框架：不要直接跳到系统，要倒过来思考，从人员和问题开始，然后再转向系统解决方案。

---

### (01:07:52) Austin Hay (Continued)

**English:**
And then another one that I've already mentioned too is it's B and B as opposed to BVB. So, build and buy as opposed to build versus buy. People all the time just think the second that you're talking about implementing a tool or procuring a solution, it's, Hey, I want to build this thing or I want to buy this really expensive thing. Build versus buy is a very narrowly constricting decision tree. If it's only build versus buy, then you've already made the decision that you can only do one or the other, which means you're already fighting somebody at your organization. Build and buy means that both of you can win and you can actually create a solution that is not only unique but saves the company time and resources and makes everybody happy. It's more of a consensus driven approach. Whenever I hear in a meeting or a call or some discussion about how we have a tool and it's really expensive and we want to build in herself, I try to just use the build and buy framework to tee people up and say, what about the problem?

**中文翻译:**
另一个我已经提到过的是“B 加 B”而不是“B 对 B”，即“自研加购买”（build and buy）而不是“自研还是购买”（build versus buy）。人们总觉得一旦谈到实施工具或采购方案，要么是“我想自己造”，要么是“我想买这个很贵的东西”。“自研还是购买”是一个非常狭隘的决策树。如果只有这两个选项，你就已经预设了只能二选一，这意味着你已经在和组织里的某人对抗了。“自研加购买”意味着双赢，你可以创造一个既独特又能节省公司时间和资源、让大家都开心的方案。这是一种更偏向共识的方法。每当我在会议或讨论中听到有人说“我们有个工具太贵了，想自己造”时，我就会尝试用“自研加购买”框架来引导大家：关于这个问题，哪些部分可以买？

---

### (01:08:59) Austin Hay (Continued)

**English:**
Can we buy? What about the problem can we build? And where does it make sense to invest our resources and our people accordingly to get the optimal outcome? A great example is a company that I was consulting for was thinking about building their own AB testing tool. And actually we had the same problem at Ramp recently, and they're like, well, we just think we should build ourself. This is core to our technology. We have the engineering resources to do it. And they were evaluating it to build the entire system themselves or buy a third party, I think it was split.io or something like that. And the entire engagement was basically designing a financial model to show them that they could make a lot more money, save money, move faster if they just bought the third party tool at the lowest possible cost and spent all of their resources that they were going to spend building it, building around it and making it their own. And there's lots of, I hate the word synergy, it's just so yucky.

**中文翻译:**
哪些部分可以自研？在哪里投入资源和人力才能获得最优结果？一个很好的例子是：我咨询过的一家公司想自己开发 A/B 测试工具。最近在 Ramp 我们也遇到了同样的问题。他们觉得：“我们应该自己造，这是我们的核心技术，我们有工程资源。”他们当时在评估是全自研还是买第三方的（好像是 split.io 之类的）。整个咨询过程基本上就是设计一个财务模型，向他们展示：如果他们以最低成本购买第三方工具，并把原本打算用于自研的所有资源都花在围绕该工具进行二次开发、使其适配自身需求上，他们能赚更多钱、省更多钱、跑得更快。这有很多……我讨厌“协同效应”（synergy）这个词，太恶心了。

---

### (01:09:54) Lenny

**English:**
I don't mind it. I think it communicates what you want to communicate, and I feel like people don't say it as often anymore, so maybe it's okay.

**中文翻译:**
我不介意。我觉得它能传达你想表达的意思，而且现在人们不怎么常说了，所以也许没关系。

---

### (01:10:00) Austin Hay

**English:**
Yeah, because they're afraid. There are mutual benefits is a better way of saying it, if you build a tool custom to yourself when you've bought a tool because the vendor at that point is committed to you and they want you to be successful, so you often can get accelerated outcomes if you build on top of a third party than if you just build it yourself. A great example is say you buy one of these AB testing tools and you build around it and you're a large customer of them, but you've invested a lot of your own engineering resources to make this solution your own.

**中文翻译:**
是的，因为人们害怕这个词。“互利互惠”是更好的说法。如果你在购买工具的基础上进行定制化开发，因为那时供应商已经和你绑定了，他们希望你成功，所以比起全自研，在第三方基础上构建往往能让你更快获得成果。一个好例子是：你买了一个 A/B 测试工具并围绕它构建，你是他们的大客户，但你投入了大量自己的工程资源让这个方案变成你专属的。

---

### (01:10:31) Austin Hay (Continued)

**English:**
If they know that and they care about you, they're going to be willing to actually make you happy in the moments where you need a change from them, say some SDK change or a new feature or something like that. A framework that I talk a lot about in my Reforge course is about building a stack. Everybody asks, hey, how do I build my stack? What should I do? What tool should I use? Even you earlier were like, what's the golden stack? Tell me what five tools should I get?

**中文翻译:**
如果他们知道这一点并且在意你，当你需要他们做出改变（比如 SDK 变更或新功能）时，他们会更愿意配合你。我在 Reforge 课程中经常谈到的一个框架是关于“构建工具栈”。每个人都会问：“嘿，我该怎么构建工具栈？我该怎么做？该用什么工具？”甚至你刚才也在问：“什么是黄金工具栈？告诉我该买哪五个工具？”

---

### (01:10:57) Lenny

**English:**
Just tell me.

**中文翻译:**
快告诉我吧。

---

### (01:10:58) Austin Hay

**English:**
Yeah, yeah. I'll tell you at the very end, I got to hold out. Otherwise, you'll ditch this podcast.

**中文翻译:**
哈哈，我会最后再告诉你，我得留个悬念，否则你就不听这期播客了。

---

### (01:11:04) Lenny

**English:**
That's right. Yeah. Wait until the end. Is there anything else you want to share before we get to our very exciting lightning round?

**中文翻译:**
没错。好，等到最后。在进入非常精彩的闪电轮提问之前，你还有什么想分享的吗？

---

### (01:11:14) Austin Hay

**English:**
The only thing I had wanted to fit in, which I feel like is maybe a framework or maybe just a really good decision-making philosophy is this concept of thinking gray. Have you heard of it before?

**中文翻译:**
我唯一想补充的一点，我觉得它可能是一个框架，或者只是一个非常好的决策哲学，那就是“灰色思考”（thinking gray）的概念。你以前听过吗？

---

### (01:11:26) Lenny

**English:**
No. Go on.

**中文翻译:**
没有，请讲。

---

### (01:11:27) Austin Hay

**English:**
Okay. So, Steven B. Sample is a professor at USC. He wrote a book called The Contrarian's Guide to Leadership, really great book. It's one of his principles. There's actually a lot of great principles in the book, but this is the one that I think has stuck with me the most in my career. And the concept of thinking gray is so often in life and in our jobs, we are forced to make decisions very quickly. We have to think black or white about a problem set or a solution, and then decide. One of his tactics is this concept of thinking gray, which is actually to not decide for as long as you possibly can before you have to decide. It's really challenging because it involves this little thing called patience, which I do not have a lot of, most of the time, and I know most people don't as well.

**中文翻译:**
好。Steven B. Sample 是南加州大学（USC）的一位教授，他写了一本书叫《领导者的逆向思维指南》（The Contrarian's Guide to Leadership），非常棒的一本书。这是他的原则之一。书中有很多伟大的原则，但这是在我的职业生涯中对我影响最深的一个。“灰色思考”的概念是：在生活和工作中，我们经常被迫快速做出决定。我们必须对问题或方案进行非黑即白的思考，然后拍板。他的策略之一就是“灰色思考”，即在必须做出决定之前，尽可能长时间地不去做决定。这非常有挑战性，因为它涉及到一个叫“耐心”的小东西，而我大部分时间都没有多少耐心，我知道大多数人也是。

---

### (01:12:30) Austin Hay (Continued)

**English:**
But it's particularly really relevant in systems thinking and product because so often we believe that we have to make a decision because our boss is telling us because there's an OPR, because we feel the pain because somebody's complaining to me. But actually in reality, you don't have to make a decision at all. You can just let it sit for a while. And this also applies to, I think, how you move through the world and view people. A lot of times we will meet somebody in a company setting or in a business setting, and we are quick to make decisions about them. We even asked me questions about how I hire people very quickly. We're looking for shortcuts to make decisions about evaluating people. One of the best pieces of advice though about thinking gray is it gives you the grace to not decide about people until you have to decide. So, obviously for an interview decision, you have to decide.

**中文翻译:**
但在系统思维和产品工作中，这尤其相关。因为我们经常认为必须做决定，是因为老板在催，是因为有 OKR，是因为我们感到了痛苦，或者有人在向我抱怨。但实际上，你根本不需要立刻做决定，你可以让它先放一放。我认为这也适用于你如何处世和看人。很多时候我们在公司或商务场合遇到某人，会很快对他们下定论。你刚才甚至问我如何快速招聘。我们总是在寻找评估人的捷径。关于“灰色思考”最好的建议之一是：它给了你一种优雅，让你在必须做决定之前，不对人下定论。当然，对于面试决策，你必须做决定。

---

### (01:13:05) Austin Hay (Continued)

**English:**
You have to decide yes or no. But so often you'll come across people and you'll meet them once or twice. And I feel like there's this tendency in the back of everybody's brain to be like, do I like this person? Do I want to work with them? And the question often is not that it's do you have to even make a decision right now? And by leaving yourself to have space to decide, you actually open up the possibility that in the future you'll make a better decision. So, I think that's a really good lesson for systems, and it's obviously a lesson that you can apply to the rest of your life too.

**中文翻译:**
你必须决定录用还是不录用。但很多时候你会遇到一些人，只见过一两次面。我觉得每个人的脑海深处都有一种倾向：“我喜欢这个人吗？我想和他们共事吗？”但问题往往不在于此，而在于：你现在真的需要做决定吗？通过给自己留出决策空间，你实际上开启了未来做出更好决定的可能性。所以我认为这对系统构建是一个很好的教训，显然也是一个可以应用到生活其他方面的教训。

---

### (01:13:37) Lenny

**English:**
Austin, that was awesome. And with that, we've reached our very exciting lightning round. I've got six questions for you. Are you ready?

**中文翻译:**
Austin，太棒了。至此，我们进入了非常精彩的闪电轮提问。我有六个问题要问你，准备好了吗？

---

### (01:13:43) Austin Hay

**English:**
I'm so ready, Lenny.

**中文翻译:**
准备好了，Lenny。

---

### (01:13:45) Lenny

**English:**
What are two or three books that you've recommended most to other people?

**中文翻译:**
你向别人推荐最多的两三本书是什么？

---

### (01:13:49) Austin Hay

**English:**
So, first book I already mentioned, but say it again. It's The Contrarians Guide to Leadership awesome book. Second book that would be really good is the Art and Adventure of Leadership by a guy name Warren Bennis. And these are more philosophically leadership books. They're less about technical specs on how to run a business. So, you have to be into that.

**中文翻译:**
第一本我已经提过了，再说一遍：《领导者的逆向思维指南》，非常棒。第二本是 Warren Bennis 写的《领导力的艺术与冒险》（The Art and Adventure of Leadership）。这些更偏向领导力哲学，而不是关于如何经营业务的技术规范。所以你得对这类话题感兴趣。

---

### (01:14:10) Lenny

**English:**
Favorite recent movie or TV show.

**中文翻译:**
最近最喜欢的电影或电视剧。

---

### (01:14:12) Austin Hay

**English:**
I'm currently watching for the first time Suits, which I'd never seen before, which I think is pretty good because the story arc of every Suits episode is that there's a problem. Then they solve the problem and then the problem is solved at the end. So, it's very gratifying for anybody out there who's a high anxiety person who just wants to have this story arc resolved at the end of the episode. But if that's not your jam and you like excitement, also watching Silo, Witcher. For comic relief, there's Our Flag Means Death, which is hilarious. Have you seen that show?

**中文翻译:**
我最近第一次看《金装律师》（Suits），以前没看过，我觉得挺不错的。因为每一集的剧情走向都是：出现一个问题，然后他们解决问题，最后问题圆满解决。对于那些高焦虑、只想在剧集结束时看到问题解决的人来说，这非常解压。但如果你不喜欢这种，而是喜欢刺激的，我也在看《羊毛战记》（Silo）和《猎魔人》（Witcher）。至于喜剧，有一部叫《海盗旗升起》（Our Flag Means Death），非常搞笑。你看过吗？

---

### (01:14:44) Lenny

**English:**
No, not Our Flag Means Death.

**中文翻译:**
没看过《海盗旗升起》。

---

### (01:14:46) Austin Hay

**English:**
Now you need to go watch it. It's about black beard and gay pirate captain. So, strongly recommend that. And then for just really dumb comedy, What We Do in the Shadows is hilarious.

**中文翻译:**
那你一定要去看。讲的是黑胡子和一个同性恋海盗船长的故事。强烈推荐。还有一部纯粹的无厘头喜剧，《吸血鬼生活》（What We Do in the Shadows），也非常搞笑。

---

### (01:14:59) Lenny

**English:**
What was that? What We Do in the Shadows?

**中文翻译:**
那是什么？《吸血鬼生活》？

---

### (01:15:01) Austin Hay

**English:**
Yeah.

**中文翻译:**
是的。

---

### (01:15:02) Lenny

**English:**
Okay. Wow, a lot of recommendations. Thank you for that. What is a favorite interview question you like to ask candidates?

**中文翻译:**
好。哇，推荐真多，谢谢。你最喜欢问候选人的面试问题是什么？

---

### (01:15:09) Austin Hay

**English:**
So, I talked about what you did to prepare, but the other one that I think is really good because it forces people to get vulnerable is tell me about the most difficult or challenging thing you've overcome in the last year in your life. It doesn't have to be work related, it could be personal. And I think it's a great way to just reset the atmosphere, make people dig a little bit deeper into who they are and be more vulnerable. And I find usually it also helps calm them down because if they shared them one of the most challenging, difficult, and hard parts of their life, then all the other questions just are pretty easy. So, that's one of my favorites.

**中文翻译:**
我提过“你是如何准备的”，但另一个我认为非常棒的问题（因为它迫使人们展现脆弱的一面）是：“告诉我过去一年里，你在生活中克服的最困难或最具挑战性的事情是什么？”不一定要和工作有关，也可以是私事。我认为这是一个重塑氛围的好方法，让人们深入挖掘自我并展现真实的一面。我发现这通常也能帮他们冷静下来，因为如果他们已经分享了生活中最艰难的部分，那么剩下的问题就显得容易多了。这是我最喜欢的之一。

---

### (01:15:43) Lenny

**English:**
What is a favorite product that you've recently discovered that you really like?

**中文翻译:**
你最近发现并非常喜欢的某个产品是什么？

---

### (01:15:46) Austin Hay

**English:**
This sounds super dumb. It's called cal.com, and I'll tell you the story first. I've been a big Calendly user for a long time, but Calendly is pretty expensive. If Calendly is listening, you want to give me promo, cool. But it's very expensive. And then I also just found that it is not always graceful at syncing multiple calendars from both businesses and consulting gigs and personal, and I had trouble remembering my Calendly link. I don't know. The interface is like circa 2016. So, really looking for something a little bit more notion like with a Command K interface and just integrations that work. And cal.com has not failed me. It has been awesome. So, if people are looking for new Calendly tools, strongly recommend.

**中文翻译:**
这听起来可能很傻。它叫 cal.com。我先讲讲背景：我长期以来一直是 Calendly 的重度用户，但 Calendly 挺贵的（如果 Calendly 的人在听，想给我优惠码，那太好了）。它真的很贵。而且我发现它在同步来自公司、咨询工作和个人的多个日历时并不总是那么优雅，我也很难记住我的 Calendly 链接。而且它的界面感觉像是 2016 年的产物。所以我一直在寻找更像 Notion、有 Command+K 快捷界面且集成良好的工具。cal.com 没让我失望，非常棒。如果大家在找 Calendly 的替代品，强烈推荐。

---

### (01:16:30) Lenny

**English:**
Wow, never heard of this. What a great domain, cal.com.

**中文翻译:**
哇，没听过这个。域名真棒，cal.com。

---

### (01:16:32) Austin Hay

**English:**
I know, right. Killer.

**中文翻译:**
是吧，绝了。

---

### (01:16:34) Lenny

**English:**
What is a favorite life motto that you often repeat to yourself or share with other people, either in work or in life?

**中文翻译:**
在工作或生活中，你经常对自己重复或与他人分享的人生格言是什么？

---

### (01:16:42) Austin Hay

**English:**
I just think a lot about the power of appreciation, and one thing that I've just been thinking a lot about recently is the challenge that people might be facing in their daily lives. I actually was recently listening to another podcast by Adam Fishman, and he had Brian Balfour on. And Adam's basically just interviewing a bunch of dads, which is cool. But the nice thing about being a little bit older in your life being a dad is that you maybe have seen hardship before. And this podcast is great at just exploring the stories of people who I really admire and go through their hardship. And in that it's been a very profound experience, understanding the type of challenges that people have gone through in their lives, people who have lost mothers and fathers early in life, people who have lost children. I myself, my wife and I lost her dad last year.

**中文翻译:**
我经常思考“感激”的力量。最近我一直在想人们在日常生活中可能面临的挑战。我最近听了 Adam Fishman 的另一档播客，嘉宾是 Brian Balfour。Adam 基本上是在采访一群当了爸爸的人，这很酷。作为父亲，当你年纪稍长，你可能已经见识过生活的艰辛。那档播客非常擅长挖掘那些我非常钦佩的人背后的故事，以及他们经历的苦难。这是一种非常深刻的体验，去理解人们经历过的各种挑战——那些早年丧父丧母的人，那些失去孩子的人。我自己和妻子去年也失去了她的父亲。

---

### (01:17:35) Austin Hay (Continued)

**English:**
We lost two grandparents to COVID, we lost our dog. So, I think that the way that it ties to appreciation is if you can understand what people are going through and you start to view them a little bit more as a human and understand what's beneath the surface of work, who are they? What do they care about? What are the things that are driving their life forward? It just makes you so much more appreciative for what you have and the good moments when they're actually there. And this doesn't just apply to life. It's also like business too. It makes winning a lot more fun when you know the hell that people have gone through. That's just something I like to talk a lot about with people, especially folks who are younger in their careers who maybe have only seen wins describing what the losses look like so they can picture in their mind and then have some experience when they go through it. It's a big part of my shtick.

**中文翻译:**
我们因为新冠失去了两位祖父母，还失去了我们的爱犬。我认为这与“感激”的联系在于：如果你能理解人们正在经历什么，开始更多地把他们看作一个完整的人，去理解工作表象之下的他们是谁、在意什么、是什么在驱动他们的生活，这会让你更加感激你所拥有的一切，以及那些真实存在的时刻。这不仅适用于生活，也适用于商业。当你了解人们经历过的磨难时，胜利会变得更有趣。这是我喜欢和人聊的话题，特别是对那些职业生涯早期、可能只见过胜利的年轻人，向他们描述失败的样子，让他们在脑海中有所准备，这样当他们经历失败时就能更有经验。这是我个人风格的重要部分。

---

### (01:18:23) Lenny

**English:**
What an excellent answer. I am definitely going to keep asking this question. For people who are still listening here is the promised Golden Stack.

**中文翻译:**
多么精彩的回答。我肯定会继续问这个问题。对于还在听的各位，这就是承诺过的“黄金工具栈”。

---

### (01:18:32) Austin Hay

**English:**
Okay, so Golden Stack. If I was a B2C business, I'd buy Amplitude for my CDP, I'd buy customer IO and maybe I'd upgrade to Braze in the future. I put everything in Snowflake, I'd buy high touch to reverse ETL, all that data out to my ad networks. For attribution, probably AppsFlyer from a mobile app, if not Branch, but it'd probably be AppsFlyer first. So, that gets you, you got AppsFlyer, Amplitude as your CDP and product analytics, Customer IO for email. Snowflake for your data warehouse, Hightouch for streaming all the data tools. That's like golden stack today if I were implementing it for a B2C business. For B2B, roughly the same, Amplitude. If you need an attribution tool, if it's B2B, actually, if it's a web only business, probably we use Branch because Branch is better for web.

**中文翻译:**
好，黄金工具栈。如果我是一家 B2C 企业，我会买 Amplitude 作为我的 CDP，买 Customer.io（未来可能会升级到 Braze）。我会把所有数据存入 Snowflake，买 Hightouch 做反向 ETL，把数据推送到广告网络。归因方面，如果是移动 App，可能会选 AppsFlyer，或者 Branch，但首选可能是 AppsFlyer。所以总结一下：AppsFlyer、Amplitude（作为 CDP 和产品分析）、Customer.io（邮件）、Snowflake（数据仓库）、Hightouch（数据流转）。这就是我今天会为 B2C 企业实施的黄金栈。对于 B2B，大致相同：Amplitude。如果需要归因工具且是纯网页业务，可能会用 Branch，因为 Branch 在网页端更强。

---

### (01:19:23) Austin Hay (Continued)

**English:**
So, you have Branch, Amplitude, connect all the data to Salesforce. Hopefully at some point in time somebody builds a better Salesforce. That'll be for our next podcast though, Lenny, can't cover that today. And then reverse ETL is Hightouch. So, very similar except the only difference is what do you do for an email tool? A lot of people use HubSpot. I would try to go away with Customer IO as long as I could and then I'd move to Braze afterwards. So, a big difference is just Braze versus Customer IO for B2B.

**中文翻译:**
所以你有 Branch、Amplitude，把所有数据连接到 Salesforce。希望有一天有人能造出一个更好的 Salesforce，不过那是我们下期播客的话题了，Lenny，今天聊不完。反向 ETL 还是 Hightouch。所以非常相似，唯一的区别是邮件工具。很多人用 HubSpot，但我会尽可能长时间地坚持使用 Customer.io，然后再迁移到 Braze。所以 B2B 的主要区别在于 Braze 还是 Customer.io。

---

### (01:19:49) Lenny

**English:**
Final question for you. I heard that you're a drone pilot and I'm curious, what is the coolest place you've flown your drone or the coolest thing that's happened with your drone?

**中文翻译:**
最后一个问题。我听说你是一名无人机飞行员，我很好奇，你飞过最酷的地方是哪儿？或者你的无人机发生过什么最酷的事？

---

### (01:19:57) Austin Hay

**English:**
So, this actually gets back to our intellectual curiosity thing. Maybe I just search for weird people when I hire because I just love when people do interesting things that are unrelated to work. And the story is during COVID, I didn't really want to just better myself online through a bunch of educational platforms. I just felt like it would be a little bit soul crushing to sit in front of my computer screen and learn how to do statistics or whatever. So, I was trying to look for things that were interesting, niche, outside of my domain knew nothing about. And the three that I came up with were, I learned to fly a drone. I became a CFP, certified financial planner and I became a notary. And it's just because they seemed really useful things that had nothing to do with my work and would learn about something completely interesting and different.

**中文翻译:**
这又回到了我们说的“求知欲”。也许我招聘时就在找那些“怪人”，因为我喜欢人们做一些与工作无关的趣事。故事是这样的：在新冠期间，我不想只是通过一堆在线教育平台来提升自己。我觉得整天坐在电脑前学统计学之类的太折磨人了。所以我尝试寻找一些有趣的、小众的、我完全不了解的领域。我最后选了三件事：学习飞无人机、考取 CFP（注册理财规划师）证书，以及成为一名公证员。纯粹是因为它们看起来很有用，且与我的工作毫无关系，能让我学到完全不同且有趣的东西。

---

### (01:20:46) Austin Hay (Continued)

**English:**
So, those are the three that I chose. The drone stuff, it actually was funny. I started flying here in DC. I live in Virginia, but maybe a mile outside of Washington DC and around DC there's a restricted air zone. And so after I did my FA drone pilot license and I became a certified drone pilot, I really went down the rabbit hole of trying to figure out how to fly a drone in DC, because I've seen them around, but obviously it's a national security and I'm probably dramatically mutilating the exact experience. But as I went to do this, it was very complicated, archaic, but also funny because it was all online. You have to go file out a form, you get a letter from a local representative who says you're in good standing. So, we found a councilman that I just knew. And then you have to fill out all the stuff.

**中文翻译:**
这就是我选的三件事。无人机那件事其实挺逗的。我开始在华盛顿特区（DC）附近飞。我住在弗吉尼亚州，距离 DC 大约一英里，而 DC 周边是禁飞区。在我拿到 FAA 无人机飞行执照并成为认证飞行员后，我钻进了研究如何在 DC 飞无人机的“兔子洞”。因为我见过有人飞，但显然这涉及国家安全。过程非常复杂且陈旧，但也很有趣，因为全是线上的。你得填表，得从当地代表那里拿一封证明你表现良好的信。于是我找了一个认识的议员。然后你得填完所有资料。

---

### (01:21:39) Austin Hay (Continued)

**English:**
This paperwork, the site looks like it's from 1994. There's an office literally in DC where a person approves you. Then you have to let go and get a police officer to effectively babysit you while you fly this drone. And so I did all that and I got to the point where I was going to get babysat and I called our local police department and I was like, yeah. So, I talked to the office, I just need an officer to come out and meet at this time. And they just laughed me off the phone. They're like, we're not going to send a police officer to watch you fly a drone. And I just thought the thing was really funny because yeah, it makes sense. Why would they waste taxpayer dollars to have me fly a drone? But it was a requirement. So, I ended up not being able to fly this drone in DC. But if anybody's listening and they know how to fly a drone and they want to fly, I would be totally down. I have two drones. I have a Mavic Air 2 and a Skydio Enterprise, which Skydio is a really cool company as well if people are looking for drones.

**中文翻译:**
那些文书工作，网站看起来像是 1994 年的。DC 真的有一个办公室，有人专门负责审批。然后你还得找一名警察在旁边“监护”你飞无人机。我把这一切都搞定了，到了要找警察监护的那一步，我给当地警察局打电话说：“我已经和办公室谈过了，我需要一名警官在某个时间出来见我。”结果他们在电话那头笑喷了。他们说：“我们不会派警察去看你飞无人机的。”我觉得这事儿特别滑稽，因为确实，为什么要浪费纳税人的钱看我飞无人机呢？但那是规定。所以最终我没能在 DC 飞成。但如果听众里有人会飞无人机并想一起飞，我非常乐意。我有两架无人机：一架 Mavic Air 2 和一架 Skydio Enterprise。如果你在找无人机，Skydio 也是一家非常酷的公司。

---

### (01:22:33) Lenny

**English:**
Okay, so you're saying if people have an awesome drone and they live in Virginia, they should come contact you and fly some drones together?

**中文翻译:**
好，所以你是说如果有人有很酷的无人机且住在弗吉尼亚州，他们应该联系你一起飞？

---

### (01:22:38) Austin Hay

**English:**
Yeah, exactly. Exactly. But just not in DC.

**中文翻译:**
没错，正是如此。但千万别在 DC 飞。

---

### (01:22:42) Lenny

**English:**
All right. Well, Austin, I think we delivered on the promise of making this extremely nerdy and in the weeds, and I think we've solved a lot of people's problems. I feel a lot of gratitude for you, and I feel like we taught a lot of people about MarTech, which was my goal. So, thank you again for being here. Two final questions. Where can folks find you online if they want to ask you more questions? And how can listeners be useful to you other than coming to fly drones with you?

**中文翻译:**
好。Austin，我想我们兑现了把这期节目做得非常“极客”且深入细节的承诺，我想我们解决了很多人的问题。我非常感激你，我觉得我们让很多人了解了 MarTech，这也是我的目标。再次感谢你的到来。最后两个问题：如果大家想问你更多问题，可以在哪里找到你？除了找你飞无人机，听众还能为你做些什么？

---

### (01:23:05) Austin Hay

**English:**
So, first find me online LinkedIn. Threads, I actually have Threads. I don't have Twitter, like hot take, I think Twitter ruins people's careers. I've already seen multiple careers ruined by Twitter. Some people just don't know how to shut their mouth. So, I'm not on Twitter, but I am on Threads and I'm trying to figure it out. So, if you want to document Threads, you can. I'm on LinkedIn and then I have my email address on LinkedIn too, and I'm always willing to talk to people.

**中文翻译:**
首先，可以在 LinkedIn 上找我。还有 Threads，我确实有 Threads 账号。我没有 Twitter，说个劲爆的观点：我觉得 Twitter 会毁掉人的职业生涯。我已经见过好几个人因为 Twitter 毁了前程，有些人就是不知道什么时候该闭嘴。所以我不在 Twitter 上，但在 Threads 上，我还在摸索怎么用。如果你想在 Threads 上找我，可以去。我在 LinkedIn 上，上面也有我的邮箱，我总是很乐意与人交流。

---

### (01:23:28) Austin Hay (Continued)

**English:**
Yes. I have a marketing technology course coming out with Reforge in the fall. If you're a practitioner of MarTech or you're interested in MarTech, would totally love for you to take the course, would love to your feedback in particular. I love to stand on this podcast and act like I know a lot about MarTech, but I'm still learning. And so I think it would be awesome to just get feedback from the community about what was interesting and helpful, what wasn't there, and we can improve upon. And then the other thing is, if you're ever looking for MarTech help and you want to reach out, that's great.

**中文翻译:**
是的。我秋季会在 Reforge 推出一门营销技术课程。如果你是 MarTech 从业者或对此感兴趣，我非常希望你能来听课，特别希望能听到你的反馈。虽然我在这期播客里表现得好像很懂 MarTech，但我其实也还在学习。所以，如果能从社区获得反馈，了解哪些内容有趣且有用，哪些内容缺失了，我们可以据此改进，那就太棒了。另外，如果你需要 MarTech 方面的帮助并想联系我，也非常欢迎。

---

### (01:24:02) Lenny

**English:**
Amazing. Austin, thank you again so much for being here.

**中文翻译:**
太棒了。Austin，再次感谢你能来。

---

### (01:24:04) Austin Hay

**English:**
Thank you for having me, Lenny. It was a pleasure.

**中文翻译:**
谢谢你邀请我，Lenny。这是我的荣幸。

---

### (01:24:07) Lenny

**English:**
The pleasure was all mine. Bye everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
荣幸之至。大家再见。非常感谢收听。如果你觉得这期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用上订阅。此外，请考虑给我们评分或留下评论，这能极大地帮助其他听众发现这个播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目再见。