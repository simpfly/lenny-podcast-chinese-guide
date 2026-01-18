# Geoff Charles - 双语对照

This is the complete bilingual transcript for **Lenny’s Podcast** featuring **Geoff Charles**, VP of Product at **Ramp**.

---

### [00:00:00] Geoff Charles

**English:**
So when I joined, we were about 10-ish folks, about eight engineers, and in three months, we built a competitor to Amex. Six months after that, we built a competitor to Expensify, both publicly traded companies. We hit a hundred million in annual revenue. I think we were under at that point, 50 total in the R&D department, less than four engineers and three PMs. And then we started expanding into accounts payable. It was three engineers, one designer, one PM three months, and they hit out of the park. And that product is moving in billions of dollars a year. I think the recipe for all this is ...

**中文翻译:**
当我加入时，我们大约只有 10 个人，其中有 8 名工程师。在三个月内，我们开发出了一个能与美国运通（Amex）竞争的产品。六个月后，我们又开发出了一个能与 Expensify 竞争的产品，而这两家都是上市公司。我们的年营收达到了 1 亿美元。我想当时我们的研发部门总人数还不到 50 人，具体到项目上不到 4 名工程师和 3 名产品经理（PM）。接着我们开始进军应付账款（AP）领域。当时只有 3 名工程师、1 名设计师和 1 名 PM，用了三个月时间，他们表现得极其出色。现在那个产品每年的交易额高达数十亿美元。我认为这一切的秘诀在于……

---

### [00:00:32] Lenny

**English:**
Welcome to Lenny's Podcast, where I interview world-class product leaders and growth experts to learn from their hard-won experiences building and growing today's most successful products. Today, my guest is Geoff Charles, who is VP of Product at Ramp. This episode is a unique glimpse into a startup and an approach to product that optimizes for moving quickly, thinking from first principles, and empowering individual team members. If you're not familiar with Ramp, they're the fastest growing SaaS business in history, getting to over $100 million in annual run rate in two years, which is just wild. And as you'll hear in this episode, they did this with 50 people. In our conversation, Geoff shares how they operationalize a culture of velocity, how they do a lot with few people, how they organize planning, how they define strategy, how they interview product managers and keep a very high bar for talent, plus also avoid burnout in a very fast moving culture and so much more.

**中文翻译:**
欢迎来到 Lenny 的播客。在这里，我会采访世界级的产品领导者和增长专家，学习他们在构建和发展当今最成功产品过程中积累的宝贵经验。今天的嘉宾是 Geoff Charles，他是 Ramp 的产品副总裁。本期节目将带你深入了解一家初创公司，以及一种旨在优化移动速度、从第一性原理（First Principles）出发思考并赋能团队成员的产品方法。如果你还不了解 Ramp，他们是历史上增长最快的 SaaS 企业，在短短两年内年化营收（ARR）就突破了 1 亿美元，这简直不可思议。正如你在本集中听到的，他们仅靠 50 人就做到了这一点。在我们的对话中，Geoff 分享了他们如何运作“速度文化”、如何以少胜多、如何组织规划、如何定义战略、如何面试产品经理并保持极高的人才标准，以及如何在快节奏的文化中避免职业倦怠等等。

---

**English:**
(00:01:25): My advice is to seriously study how Ramp operates because there's a lot to learn from their success and their approach to product. Enjoy this episode with Geoff Charles after a short word from our sponsors.

**中文翻译:**
(00:01:25): 我的建议是认真研究 Ramp 的运作方式，因为他们的成功和产品方法论中有很多值得学习的地方。在听完赞助商的简短介绍后，请欣赏与 Geoff Charles 的精彩对话。

---

### [00:01:38] Sponsor: Ezra

**English:**
This episode is brought to you by Ezra, the leading full-body cancer screening company. I actually used Ezra earlier this year unrelated to this podcast, completely on my own dime because my wife did one and loved it. And I was super curious to see if there's anything that I should be paying attention to in my body as I get older. The way it works is you book an appointment, you come in, you put on some very cool silky pajamas that they give you that you get to keep afterwards. You go into an MRI machine for 30 to 45 minutes, and then about a week later, you get this detailed report sharing what they found in your body.

**中文翻译:**
本期节目由 Ezra 赞助，它是领先的全身癌症筛查公司。实际上，我在今年早些时候就自费使用了 Ezra 的服务，这与播客无关，纯粹是因为我妻子做了一次并觉得非常好。随着年龄增长，我也很好奇身体里是否有需要注意的地方。它的运作方式是：你预约时间，到场后换上他们提供的非常酷的丝绸睡衣（之后你可以带走）。你在核磁共振（MRI）机器里待 30 到 45 分钟，大约一周后，你会收到一份详细的报告，告知他们在你体内发现的情况。

---

**English:**
(00:02:14): Luckily, I had what they called an unremarkable screening, which means they didn't find anything cancerous, but they did find some issues in my back, which I'm getting checked out at a physical next month probably because I spend so much time sitting in front of a computer. Half of all men will have cancer at some point in their lives, as will one-third of women. Half of all of them will detect it late. According to the American Cancer Society, early cancer detection has an 80% survival rate compared to less than 20% for late stage cancer. The Ezra team has helped 13% of their customers identify potential cancer early and 50% of them identify other clinically significant issues such as aneurysms, disc herniations, which maybe is what I have, or fatty liver disease. Ezra scans for cancer and 500 other conditions in 13 organs using a full-body MRI powered by AI and just launched the world's only 30-minute full-body scan, which is also their most affordable. Their scans are non-invasive and radiation free. And Ezra is offering listeners $150 off their first scan with code Lenny150. Book your scan at ezra.com/lenny. That's E-Z-R-A.com/lenny.

**中文翻译:**
(00:02:14): 幸运的是，我的筛查结果是“无异常（unremarkable）”，这意味着没发现癌症迹象，但确实发现了我背部的一些问题，我下个月体检时会去检查一下，大概是因为我坐在电脑前的时间太长了。一半的男性和三分之一的女性在生命中的某个阶段会患上癌症，而其中一半的人发现时已是晚期。根据美国癌症协会的数据，癌症早期发现的存活率为 80%，而晚期则不到 20%。Ezra 团队已帮助 13% 的客户早期发现了潜在癌症，并帮助 50% 的客户发现了其他具有临床意义的问题，如动脉瘤、椎间盘突出（可能就是我的问题）或脂肪肝。Ezra 利用 AI 驱动的全身 MRI 扫描 13 个器官中的癌症及其他 500 种疾病，并刚刚推出了全球唯一的 30 分钟全身扫描，这也是他们最实惠的项目。扫描是非侵入性且无辐射的。Ezra 为听众提供首航扫描 150 美元的优惠，优惠码为 Lenny150。请在 ezra.com/lenny 预约。

---

### [00:03:30] Sponsor: Coda

**English:**
This episode is brought to you by Coda. You've heard me talk about how Coda is the doc that brings it together and how can help your team run smoother and be more efficient. I know this firsthand because Coda does that for me. I use Coda every day to wrangle my newsletter content calendar, my interview notes for podcasts, and to coordinate my sponsors. More recently, I actually wrote a whole post on how Coda's product team operates, and within that post, they shared a dozen templates that they use internally to run their product team, including managing the roadmap, their OKR process, getting internal feedback, and essentially their whole product development process is done within Coda.

**中文翻译:**
本期节目由 Coda 赞助。你听我多次提到过 Coda 是一个能将所有内容整合在一起的文档工具，它能让你的团队运行得更顺畅、更高效。我有切身体会，因为 Coda 就在帮我处理这些。我每天都用 Coda 来管理我的时事通讯内容日历、播客采访笔记以及协调赞助商。最近，我写了一篇关于 Coda 产品团队如何运作的文章，在文章中，他们分享了十几个内部使用的模板，包括路线图管理、OKR 流程、收集内部反馈等，基本上他们的整个产品开发流程都是在 Coda 中完成的。

---

**English:**
(00:04:08): If your team's work is spread out across different documents and spreadsheets and a stack of workflow tools, that's why you need Coda. Coda puts data in one centralized location regardless of format, eliminating roadblocks that can slow your team down. Coda allows your team to operate on the same information and collaborate in one place. Take advantage of this special limited-time offer just for startups. Sign up today at coda.io/lenny and get a thousand dollars startup credit on your first statement. That's C-O-D-A.io/lenny to sign up and get a startup credit of $1,000, coda.io/lenny.

**中文翻译:**
(00:04:08): 如果你团队的工作分散在不同的文档、表格和一堆工作流工具中，那你正需要 Coda。Coda 将数据集中在一个地方，无论格式如何，消除了可能拖慢团队进度的障碍。Coda 让你的团队在同一信息基础上进行协作。现在有专门针对初创公司的限时优惠：立即在 coda.io/lenny 注册，首张账单可获得 1000 美元的初创公司抵用金。

---

### [00:04:49] Lenny

**English:**
Geoff, thank you so much for being here. Welcome to the podcast.

**中文翻译:**
Geoff，非常感谢你能来。欢迎来到我们的播客。

---

### [00:04:53] Geoff Charles

**English:**
Thanks, Lenny, it's great to be here.

**中文翻译:**
谢谢 Lenny，很高兴来到这里。

---

### [00:04:54] Lenny

**English:**
So you are head of product at Ramp. For people not familiar with Ramp, could you just give us a brief overview of what it is that Ramp does?

**中文翻译:**
你是 Ramp 的产品负责人。对于那些不熟悉 Ramp 的人，你能简要介绍一下 Ramp 是做什么的吗？

---

### [00:05:04] Geoff Charles

**English:**
Yeah, Ramp is a finance automation platform and corporate card solution for small and medium-sized businesses. So we help businesses essentially automate most things across expense management, card payments, bill payments, and accounting. And we've helped 15,000 of such businesses automate a lot of their back office to focus on what truly matters, which is growing their company and providing value to their customers.

**中文翻译:**
好的，Ramp 是一个面向中小企业的财务自动化平台和企业卡解决方案。我们帮助企业自动化处理报销管理、卡片支付、账单支付和会计核算等大部分事务。我们已经帮助 1.5 万家此类企业实现了后台办公的自动化，让他们能够专注于真正重要的事情，即发展公司并为客户提供价值。

---

### [00:05:26] Lenny

**English:**
Okay. So what you didn't mention is some of the most interesting stats about Ramp and the business and the growth story of Ramp. So could you just also share some stats about just the success of Ramp and a sense of just how rare the story of Ramp has been?

**中文翻译:**
好的。不过你还没提到 Ramp 一些最引人注目的数据，以及公司的成长故事。你能分享一些关于 Ramp 成功的数据，让我们感受一下 Ramp 的故事有多么罕见吗？

---

### [00:05:42] Geoff Charles

**English:**
Yeah. I mean, we were one of the fastest growing FinTech and B2B SaaS companies of all time. I think we've hit a hundred million in annual revenue for the first two years and we've continued to grow significantly since then. I think every day, about a thousand users join our platform. And this year, we've grown and hit 600 million in savings, 8.5 million in hours saved for our customers by controlling spend and automating a lot of the manual tasks. So we're continuing to grow fast, and in terms of just raw transaction volume, we have crossed 10 billion in [inaudible 00:06:17] spending on the platform and just getting started.

**中文翻译:**
是的。我们是有史以来增长最快的金融科技（FinTech）和 B2B SaaS 公司之一。我们在前两年就达到了 1 亿美元的年营收，此后一直保持大幅增长。我想每天大约有 1000 名用户加入我们的平台。今年，通过控制支出和自动化大量手动任务，我们为客户节省了 6 亿美元的资金和 850 万小时的时间。我们仍在快速增长，就原始交易额而言，平台上的支出已突破 100 亿美元，而这仅仅是个开始。

---

### [00:06:20] Lenny

**English:**
You've glossed over that stat of just Ramp is essentially known as the fastest growing SaaS business in history and also FinTech business. In two categories, the fastest Ramp to $200 million in run rate.

**中文翻译:**
你刚才轻描淡写地带过了那个数据，Ramp 基本上被公认为历史上增长最快的 SaaS 企业，也是增长最快的金融科技企业。在两个类别中，它是最快达到 2 亿美元年化营收规模的公司。

---

### [00:06:34] Geoff Charles

**English:**
Yeah.

**中文翻译:**
是的。

---

### [00:06:34] Lenny

**English:**
Okay. So for that reason and many other reasons, there's a lot of interest in just how Ramp operates and how you all approach product and we actually previously collaborated on a newsletter post on how Ramp builds product. And that newsletter post is now the eighth most popular post on my newsletter across hundreds of posts that are ever written and even more than how Figma builds product and how Snowflake builds product and all these other incredible companies. And so, clearly, there's a lot of interest in how you operate. So I'm really excited to get into the meat of how you all work. And if anyone read this post and has any sense of just how you all operate, there's this one word that immediately comes to mind when people think of how Ramp operates and that word is velocity. So I want to start there. Can you just talk about how important velocity is to how you work and where that came from and how that actually looks day to day working at Ramp?

**中文翻译:**
好的。正因如此以及其他许多原因，人们对 Ramp 的运作方式以及你们的产品方法论非常感兴趣。我们之前曾合作过一篇关于“Ramp 如何构建产品”的通讯文章。那篇文章现在是我数百篇文章中排名第八的热门文章，甚至超过了关于 Figma 和 Snowflake 等优秀公司如何构建产品的文章。显然，大家对你们的运作方式非常好奇。所以我很兴奋能深入探讨你们工作的核心。如果有人读过那篇文章，对你们的运作方式有所了解，那么想到 Ramp 时，脑海中立刻会浮现出一个词：速度（Velocity）。所以我想从这里开始。你能谈谈“速度”对你们的工作有多重要，它源自何处，以及在 Ramp 的日常工作中它是如何体现的吗？

---

### [00:07:27] Geoff Charles

**English:**
Yeah, absolutely. So you mentioned it, you nailed it. Velocity is everything at Ramp. It's how we design our product development process. It's how we incentivize teams, it's who we want to hire, it's who we want to promote, and it's everything around how we make decisions and how we organize the organization.
(00:07:43): I think it came from the fact that during the pandemic, we started with a very small team and there was a huge market opportunity ahead of us and it wasn't so much which path we wanted to pick, but rather how fast we were able to execute on that path. And so velocity was ingrained from the early days on just building, shipping, and iterating. And I think it's a decent metric for how companies and teams perform. You might say, "Well, what's the impact of that velocity?" But realistically, teams that have high velocity are able to actually get to that impact over time by iterating. It's also a great way to have positive selection in terms of talent because talent wants to join companies that ship fast. And a lot of people who join Ramp, I ask them, "Why are you interested in joining the company?" And they often say, "Well, it's because you guys are actually building things and shipping things and I want to know what that feels like." And it's also a great way just de-risk decisions and decision making. If the cost of that decision is really low, then you're able to essentially simplify a lot of decisions.

**中文翻译:**
是的，完全正确。你抓住了重点。在 Ramp，速度就是一切。它是我们设计产品开发流程的基础，是我们激励团队的方式，是我们招聘和晋升的标准，也是我们做决策和组织架构的核心。
(00:07:43): 我认为这源于一个事实：在疫情期间，我们刚开始时团队非常小，而面前有巨大的市场机会。当时的问题不在于选择哪条路，而在于我们能在这条路上执行得多快。因此，从早期开始，速度就植根于构建、发布和迭代之中。我认为速度是衡量公司和团队表现的一个很好的指标。你可能会问：“速度的影响力体现在哪？”但实际上，拥有高速度的团队能够通过不断迭代最终产生影响力。这也是一种很好的人才筛选机制，因为优秀的人才想加入那些发布产品速度快的公司。很多加入 Ramp 的人，当我问他们为什么感兴趣时，他们常说：“因为你们真的在做东西、发东西，我想体验那种感觉。”此外，速度也是降低决策风险的好方法。如果决策的（纠错）成本很低，你就能简化很多决策过程。

---

### [00:08:44] Lenny

**English:**
To build on that, there's a lot of companies that say they move fast, that talk about moving fast, that say velocity is really important, moving fast is really important to us, but I feel like Ramp is very different from that, where it's actually incredibly, incredibly fast and it's actually something you come back to again and again, this idea of, how do we move faster? Can you just share an example or two of what velocity actually looks like at Ramp and what the reality of that is?

**中文翻译:**
补充一点，很多公司都说自己动作快，口头上强调速度很重要，但我觉得 Ramp 与众不同，你们是真的非常、非常快，而且你们会反复思考“我们如何能更快？”。你能分享一两个例子，说明 Ramp 的速度具体是什么样的，现实情况又是如何吗？

---

### [00:09:12] Geoff Charles

**English:**
Yeah. So when I joined, we were about 10-ish folks, about eight engineers, and in three months, we built a competitor to Amex. Six months after that, we built a competitor to Expensify, both publicly traded companies. We hit a hundred million in annual revenue. I think we were under at that point 50 total in the R&D department, less than four engineers and three PMs. And then we started expanding into accounts payable. We basically gave a team goal of building a competitor, Bill.com. It was three engineers, one designer, one PM three months, and they hit out of the park. And that product is moving in billions of dollars a year.
(00:09:49): And I think the recipe for all this is constantly small teams have a single-threaded focus, give them the resources they need to execute big lofty goals, very tight timelines, and then shield them from the chaos that is the rest of the organization. So basically don't bother them and don't even tell the rest of the company that you're doing these things until they find product market fit, until they actually find that early traction and then they can bring in more resources. So it's like gravity and you need gravitational pull to this thing.

**中文翻译:**
好的。当我加入时，我们大约有 10 个人，其中 8 名工程师。在三个月内，我们做出了一个能与美国运通竞争的产品。六个月后，我们做出了能与 Expensify 竞争的产品，而这两家都是上市公司。当时我们的年营收达到了 1 亿，研发部门总人数不到 50 人，具体到项目上不到 4 名工程师和 3 名 PM。接着我们开始扩展到应付账款领域。我们给团队定了一个目标：做一个 Bill.com 的竞争产品。当时只有 3 名工程师、1 名设计师和 1 名 PM，用了三个月时间，他们大获全胜。现在那个产品每年的交易额达数十亿美元。
(00:09:49): 我认为这一切的秘诀在于：始终保持小团队规模，让他们进行“单线程聚焦（single-threaded focus）”，给他们执行宏大目标所需的资源，设定非常紧迫的时间表，然后保护他们免受组织其他部分混乱的干扰。基本上就是不要打扰他们，甚至在他们找到产品市场契合点（PMF）或获得早期增长势头之前，都不要告诉公司其他人他们在做什么，之后再投入更多资源。这就像引力一样，你需要为这个项目创造引力。

---

### [00:10:25] Lenny

**English:**
Okay. I want to double click on some of these points you just made. So what you find is important to help teams and people move fast within Ramp is you talked about single-threaded teams, shielding them from other people, trying to pull them in different directions, lofty goals. There's a couple more things. Let's talk about the single-threaded piece a little bit. What does actually mean? What does that look like?

**中文翻译:**
好的，我想深入探讨一下你刚才提到的几点。你发现帮助 Ramp 团队快速行动的关键是：单线程团队、保护他们免受干扰、宏大目标。还有几件事，我们先聊聊“单线程”这个概念。它具体是什么意思？实际运作起来是什么样的？

---

### [00:10:47] Geoff Charles

**English:**
There are very few people who are able to execute extremely well in more than one thing, and it's especially true for individual contributors. And so what I mean by single threaded is there's only one goal, one thread, that they're waking up in the morning to focus on. And in order to remove that, you basically need to remove anything else that they're being asked to do to just focus on that thing, whether it's any type of research or any type of production engineering or any type of process that's outside of that single goal. And it almost goes as far as just saving a room in the office just for them and they are just in that room all day every day just working on that one thing.

**中文翻译:**
很少有人能同时在多件事上表现得极其出色，对于个人贡献者（IC）来说尤其如此。我所说的“单线程”是指，他们早上醒来只需要关注一个目标、一条线索。为了实现这一点，你基本上需要移除所有其他要求他们做的事情，让他们只专注于那一件事，无论是任何类型的调研、生产工程还是该目标之外的任何流程。甚至可以夸张到在办公室专门为他们留一个房间，他们每天整天都在那个房间里只做那一件事。

---

### [00:11:30] Lenny

**English:**
What's an example of that? Either maybe someone's working on it now or in the past that's a good example of a single-threaded goal or team.

**中文翻译:**
能举个例子吗？无论是现在正在进行的还是过去的，一个关于单线程目标或团队的好例子。

---

### [00:11:37] Geoff Charles

**English:**
Yeah. So, for example, we launched a flex product over the last summer, that was a single-threaded team just focused on eCommerce companies and their needs with more cash flow conversion and cash flow smoothing. And so we kept that team again just purely focused on just shipping that product and hitting that goal. And if they were ever distracted by something else, I don't think we would've hit it.

**中文翻译:**
好的。例如，去年夏天我们推出了一个 Flex 产品，那是一个单线程团队，专门针对电子商务公司及其在现金流转化和现金流平滑方面的需求。我们让那个团队纯粹专注于发布该产品并达成目标。如果他们被其他事情分心，我认为我们不可能完成。

---

### [00:12:02] Lenny

**English:**
How do you, as a leader, avoid distracting them knowing there's so many things you need to do and there's constantly this like, "Oh, if we just fix this one bug, this one customer is going to be so happy," and, "Okay, if I just ask this one PM to work on this for a day?" I know there's not going to be like, "Here's the rule of step one, two, three, but how do you actually approach shielding teams from things that just are constantly on fire?

**中文翻译:**
作为领导者，你如何避免分散他们的注意力？毕竟有那么多事情要做，总会有这种想法：“噢，如果我们修好这个 Bug，那个客户会很高兴”，或者“好吧，我能不能只让这个 PM 帮我处理这件事一天？”我知道这没有固定的“第一、二、三步”规则，但你具体是如何保护团队免受那些“救火”事务干扰的？

---

### [00:12:25] Geoff Charles

**English:**
So, for example, on bugs or issues like that, we have individuals that are protecting those teams from those issues. So we have a rotational program on production engineering, for example, where engineers are protecting the core team from escalations, from bugs, from issues. We have product operators that are protecting the PM from the chaos that is documentation and escalations and release management and enablement customer requests. So we have layers of protective tissue to core teams, but I would say for any of these big bets, you basically have to pull folks from different teams and reorganize a sub-team. And that team typically doesn't have responsibility on any existing product because these are all fairly new products. I think it gets more challenging when you go from one to two rather than zero to one.

**中文翻译:**
例如，对于 Bug 或类似问题，我们有专门的人员来保护这些团队。比如在生产工程方面，我们有一个轮岗计划，由工程师负责处理升级、Bug 和故障，从而保护核心团队。我们还有产品运营人员（Product Operators），他们负责处理文档、问题升级、发布管理、赋能和客户需求，从而将 PM 从这些混乱中解脱出来。所以我们为核心团队建立了多层“保护组织”。但我想说，对于任何重大赌注，你基本上必须从不同团队抽调人员并重组一个小分队。这个团队通常不负责任何现有产品，因为这些都是全新的产品。我认为从 1 到 2 比从 0 到 1 更有挑战性。

---

### [00:13:15] Lenny

**English:**
You also mentioned this idea of lofty goals and that's something I've seen a lot. At Airbnb, there was a ... It is very known for lofty goals. Brian was famous for going to meetings where people present their goals and their plans and he's like, "How do we 10X that? What do you need in order to 10X that goal?" And then that ends up being your goal and often works shockingly, sometimes burnt a lot of people out. How do you think about for just finding that balance and, I don't know, is there an example of just like, "Here's a really ambitious goal?" Or maybe the question is just, how do you find the balance of ambitious but not just impossible?

**中文翻译:**
你还提到了“宏大目标”，这也是我经常见到的。在 Airbnb，公司以宏大目标著称。Brian Chesky（Airbnb CEO）在会议上听取目标和计划时，最出名的一句话就是：“我们如何把它扩大 10 倍？你需要什么才能实现 10 倍的目标？”然后那真的成了你的目标，而且往往效果惊人，虽然有时会让很多人精疲力竭。你如何寻找平衡点？有没有一个“这是一个非常雄心勃勃的目标”的例子？或者说，你如何平衡“雄心勃勃”与“并非不可能”？

---

### [00:13:46] Geoff Charles

**English:**
Yeah. So the first thing is we have market comparables, which is very exciting for us. So when you look at Bill.com, they're a publicly traded company, Expensify, publicly traded, or Concur or Coupa, these are all large players that are actually very motivating and largely de-risk some of the business decisions you're making. That's existing markets. We've also been able to create markets. Spend management was an actual market before we and other competitors jump into it.
(00:14:18): So that's motivating. Go attack that market and go drive that revenue is very motivating. We also use designs as a way to motivate teams. So we spend a lot time with designers crafting out what the future of this thing could look like and that's also extremely motivating. So we constantly go back to these cornerstone, Loom walkthroughs of Figma prototypes that the design spend a lot of time talking through and I think that's a big part of the motivation. And so both of those things combined, I think, helps us stay motivated. I think there's a constant pushback to like, "Okay, what can we actually achieve?" But you're able to move super, super fast if you have those two things in mind, the market and the revenue goal, because very revenue driven as a company and the designs that can really keep you anchored on what this could look like.

**中文翻译:**
好的。首先，我们有市场参照物，这让我们很兴奋。当你看到 Bill.com、Expensify、Concur 或 Coupa 这些上市公司时，这些大玩家的存在本身就很能激励人心，并在很大程度上降低了业务决策的风险。这是针对现有市场的。我们也能够创造市场，在我和其他竞争对手进入之前，支出管理（Spend Management）就已经是一个真实存在的市场了。
(00:14:18): 所以这很有动力。去进攻那个市场并推动营收增长是非常鼓舞人心的。我们还利用设计来激励团队。我们会花很多时间与设计师一起构思这个产品的未来形态，这同样极具激励作用。我们经常回顾那些核心的 Figma 原型和 Loom 演示视频，设计师们花了很多时间讲解，我认为这是动力的重要来源。将这两者结合——明确的市场/营收目标（因为我们是一家非常看重营收的公司）和能让你看清未来的设计方案——你就能行动得超级快。虽然团队内部也会有“我们到底能实现什么”的博弈，但这两点能让你保持专注。

---

### [00:15:11] Lenny

**English:**
I know another important ingredient to how you all operate is you really like to empower product teams and give them a lot of control over how they operate and what they build and how they set goals and things like that versus micromanaging them. I think you have this concept of context over control. I'm curious how you actually operationalize that. A lot of people love the idea of empowering their teams and then they do that and then they do the wrong thing or they take too long or they set the wrong goals. So how do you actually make that work and create empowerment within your teams?

**中文翻译:**
我知道你们运作方式的另一个重要成分是：你们非常喜欢赋能产品团队，给他们很大的控制权，让他们决定如何运作、构建什么以及如何设定目标，而不是微观管理。我想你们有“提供背景信息而非控制（Context over Control）”的概念。我很好奇你具体是如何落实这一点的。很多人喜欢赋能团队的想法，但一旦放权，团队可能会做错事、耗时太长或设定错误的目标。你如何确保赋能真正奏效？

---

### [00:15:43] Geoff Charles

**English:**
Yeah, it was one of the biggest cultural differences, I think, in Ramp versus other companies that were as a part of where my boss, the CTO, Karim, was extremely hands-off in terms of the actual pride decisions because we were extremely aligned on the goals themselves. And so that's where you really just start alignment is, what is the goal that you're going after? What is the hypothesis that you have to reach that goal? What is the data by which you're coming up with that hypothesis? And then what is the potential solution to test that hypothesis? And oftentimes, more junior leaders, and I was certainly in that camp earlier on, kept focusing on the solutions and debating the right solution when in fact you should really be debating upstream of that. You should be debating the interpretation of data, you should be debating the hypotheses and the different ideas that you have there as to what's really going on or you should be debating the goals themselves.
(00:16:39): And so whenever things went wrong at Ramp, it was when I was being prescriptive with regards to the solution without actually explaining and aligning upstream on the goal, the hypothesis, and the data. And if you do that, you realize that the solutions actually can come much better from teams that are much closer to the ground. I think that's the biggest goal that I have now in my role is to continue giving context so that teams focus on the right goals, come up with the right hypotheses and focus on the right data points. And I spent most of my time just repeating myself, most of my time just sharing the context that I think they might be missing, especially given that I'm in certain meetings or certain groups in certain forms that they're not a part of and my responsibility to represent them and then share back the context for them to make better decisions over time.

**中文翻译:**
是的，我认为这是 Ramp 与我待过的其他公司最大的文化差异之一。我的老板、首席技术官（CTO）Karim 在具体的产品决策上非常放手，因为我们在目标本身上达成了高度一致。对齐（Alignment）应该从这里开始：你要追求的目标是什么？你实现该目标的假设是什么？你得出该假设的数据依据是什么？最后才是测试该假设的潜在解决方案是什么。通常，初级领导者（我早期也是如此）会一直盯着解决方案，争论哪个方案是对的，但事实上你应该争论的是上游环节。你应该争论对数据的解读、争论假设、争论到底发生了什么，或者争论目标本身。
(00:16:39): 在 Ramp，每当事情出错，通常是因为我对解决方案指手画脚，而没有在目标、假设和数据这些上游环节进行解释和对齐。如果你做好了上游对齐，你会发现最前线的团队往往能给出更好的解决方案。我认为我现在角色的最大目标就是不断提供背景信息，让团队专注于正确的目标、提出正确的假设并关注正确的数据点。我大部分时间都在重复自己，分享我认为他们可能遗漏的背景信息，特别是因为我会参加一些他们没参加的会议或小组，我的责任是代表他们，然后把背景带回来，让他们能随着时间的推移做出更好的决策。

---

### [00:17:27] Lenny

**English:**
That touches on a phrase that's come up a couple times on this podcast that a leader's job, you're essentially the repeater in chief, reminding people of strategy, vision, things like that. It feels like to move fast, you need to do what you're talking about, which is empower your teams to just move, otherwise, it's not scalable. And I'm curious just to make it even more real. Either ... Is there an version of something you did at your previous work versus at Ramp that just shows what that looks like when you're empowering your team and not in the weeds? What's most different there? Is it the product reviews, you're not as involved in design iterations? Where do you come in to actually give feedback? How does that actually look like working at a Ramp versus another company?

**中文翻译:**
这涉及到一个在本播客中出现过几次的说法：领导者的工作本质上是“首席重复官”，不断提醒大家战略、愿景之类的事情。感觉为了快速行动，你必须像你说的这样赋能团队，否则规模化是不可能的。为了让这个概念更具体，你能对比一下你在前任公司和在 Ramp 的做法吗？当你在赋能团队而不是陷入细节时，具体是什么样的？最大的区别在哪？是产品评审吗？你是不是不怎么参与设计迭代？你具体在什么时候介入并给出反馈？在 Ramp 工作与在其他公司相比，这方面有什么不同？

---

### [00:18:12] Geoff Charles

**English:**
I think that the contract between me and the team is really their strategy and their roadmap. And as long as we are aligned on the strategy, and we can get into that, and aligned on the roadmap and the timing, that's their contract. And so then at that point, my goal is to continue to give them context to execute on that and to coach them through that by getting firsthand data on how things are going that they might be missing. And their role is to highlight risks and highlight one-way decisions that they need my input on. And, again, it didn't use to start that way. I mean, when we first started, it was just me and another PM. I was fairly micromanaging in some areas. I think you build trust over time and you start having these contracts. And so as, I suppose, good more senior, they're basically publishing out the API by which they interact with me and we basically align on what's most important on each one on one.
(00:19:09): So I basically have teams ... All my directs post their goals every week first thing Monday. The goal there is to also have them review each other's goals. I have a one-on-one template that I basically use to keep on track of how progress is being made, but I certainly don't spend the time in the one on one going into that. I spend the one on one just focusing on what they need from me. And then on a biweekly basis, I have a team-wide meeting where I share context that everyone is missing and we go deep on the most important topics of the day.

**中文翻译:**
我认为我和团队之间的“契约”就是他们的战略和路线图。只要我们在战略（我们可以深入聊聊这个）以及路线图和时间节点上达成一致，那就是他们的契约。在那之后，我的目标就是不断提供背景信息帮助他们执行，并通过获取他们可能遗漏的一手数据来指导他们。而他们的角色是指出风险，并指出那些需要我参与的“单向决策（不可逆决策）”。当然，刚开始并不是这样的。刚开始只有我和另一个 PM，我在某些领域管得很细。我认为信任是随着时间建立的，然后你们开始有了这些契约。随着团队变得更资深，他们基本上发布了一个与我交互的“API”，我们在每次一对一（1:1）会议上对齐最重要的事项。
(00:19:09): 我要求所有直属下属在周一早上发布他们本周的目标。这样做的目的是让他们也能互相查看目标。我有一个 1:1 模板来跟踪进度，但我绝不会在 1:1 会议上花时间对进度。我会把 1:1 的时间花在他们需要我提供什么帮助上。然后每两周，我会开一次全团队会议，分享大家可能遗漏的背景信息，并深入探讨当天最重要的课题。

---

### [00:19:44] Lenny

**English:**
What about the product experience itself? Is there design review that happens? How do you stay on top of just like, "I'm proud of this product that we're shipping as a team?"

**中文翻译:**
那产品体验本身呢？会有设计评审吗？你如何确保自己能说出“我为团队发布的这款产品感到自豪”？

---

### [00:19:52] Geoff Charles

**English:**
I'd say we're iterating. I think when the first couple of years, it was more asynchronous and ad hoc process. And once you hit 10, 15 PMs and 20 or 30 different mini pods shipping constantly, I think you need a bit more of a process by which you have high-risk decisions that are being surfaced. So we're iterating. I think we're relating now is any large rock that we have on the roadmap needs to be brought into the product review process, where myself and the head of design are present and giving feedback, but it needs to be structured in a way where you are asking specifically for what type of feedback you need and you're highlighting the key risks and tradeoffs that you're making implicitly in that review.
(00:20:38): So that's one way we're able to scale, but I would say largely people ship and it's the difference between a beta and the GA, that's where we really get plugged in. When we make the decision to go live to the rest of the customer base and asking sales to start selling, that's where I'll really come in and stress test the hypotheses and the decisions. It's further downstream so it's more risky, but because we move so fast, you don't waste that much time if you have to pull it back.

**中文翻译:**
我想说我们也在不断迭代流程。在前几年，更多是异步和随机的流程。但当你有了 10 到 15 名 PM，以及 20 到 30 个不同的小分队（Pods）在不断发布产品时，你需要一个更规范的流程来让高风险决策浮出水面。我们现在的做法是：路线图上的任何“大石头（重大项目）”都需要进入产品评审流程，我和设计负责人会出席并给出反馈。但这种评审必须是结构化的，你需要明确说明你需要哪种类型的反馈，并指出你在评审中隐含的关键风险和权衡。
(00:20:38): 这是我们实现规模化的一种方式。但我想说，大部分情况下大家都在发布产品，真正的分水岭在于 Beta 版和正式发布（GA）之间。当我们决定向所有客户开放并让销售开始售卖时，我会介入并对假设和决策进行压力测试。虽然这在流程中比较靠后，风险较高，但因为我们行动极快，即使需要撤回，也不会浪费太多时间。

---

### [00:21:07] Lenny

**English:**
Yeah, that came up actually. I just had a chat with Nicole Forsgren, who's world expert on developer productivity and developer experience, and they've done all this research on quality and speed of engineering and the engineering team. And they find that quality goes up as your product velocity goes up. You'd think it'd be the opposite. The faster you move, the lower quality ends up being. But exactly to your point, because you can fix things really quickly and you can get things out the door and there's not this huge chunk you have to wait for people to review and release and break things, ends up being higher quality. So it's very much aligned with our experience.

**中文翻译:**
是的，这确实是个有趣的观点。我刚和 Nicole Forsgren 聊过，她是开发者生产力和体验方面的世界级专家。他们对工程团队的质量和速度做了大量研究，发现随着产品速度的提升，质量反而会提高。人们通常认为情况相反：动作越快，质量越差。但正如你所说，因为你可以快速修复、快速发布，不需要等待漫长的评审和发布周期，也不会一次性发布导致大规模崩溃的大块代码，最终质量反而更高。这与我们的经验非常吻合。

---

### [00:21:45] Geoff Charles

**English:**
Yeah. And you have to create a system by which those folks are getting that feedback. And so we've really focused on what are the control mechanisms that ensure that your high velocity doesn't tank the business. And so examples of that is we have a voice of customer processes where every single negative review that is shared to our products is shared back to the tech lead, the PM and the designer on a monthly basis. We report back NPS and CSAT. We report back operational overhead, meaning the percentage of tickets that come from your product area normalized by the number of users that are using that product. And that's a core contract that the team has to maintain a low or lower part of operational burden. We also have bugs and issues being directly assigned to the engineer that's on call. So they feel that pain and then they can continue, to your point, leveraging velocity to solve those problems. Velocity is just a magnitude, it's not necessarily a specific direction.

**中文翻译:**
是的。你必须建立一个让大家能获得反馈的系统。我们非常关注那些能确保高速度不会搞垮业务的控制机制。例如，我们有“客户之声”流程，每个月都会将针对产品的每一条负面评价反馈给技术负责人、PM 和设计师。我们会报告 NPS（净推荐值）和 CSAT（客户满意度）。我们还会报告运营开销，即来自你产品领域的工单比例（根据用户数进行标准化处理）。这是团队的一项核心契约：必须保持较低的运营负担。我们还会将 Bug 和故障直接分配给值班工程师。这样他们能感受到痛苦，然后正如你所说，利用速度去解决这些问题。速度只是一个量级，它本身并不代表特定的方向。

---

### [00:22:55] Lenny

**English:**
With these bugs that are coming in and quality issues versus a team's goal and their KPIs that they're trying to hit, how do you recommend teams balance those two things?

**中文翻译:**
面对不断涌入的 Bug 和质量问题，以及团队试图达成的目标和 KPI，你建议团队如何平衡这两者？

---

### [00:23:06] Geoff Charles

**English:**
We don't have a bug backlog. We fix every bug once they're surfaced almost.

**中文翻译:**
我们没有 Bug 积压（Backlog）。Bug 一旦出现，我们几乎立刻就会修复。

---

### [00:23:13] Lenny

**English:**
Okay.

**中文翻译:**
好的。

---

### [00:23:13] Geoff Charles

**English:**
So it's part of the production engineer's job really just to fix those things. I think where we get to nuances, like user experience improvements, the metric there that I really look at is how many support tickets come in that were due to a customer being confused. So we track that. And if that number is slightly elevated, we're basically saying, "You can't ship any new features, you need to fix these things." And so, yeah, there's just these types of controls, but basically trying to standardize across the teams. This is your percentage of operational burden, this is your CSAT, this is your NPS, and this is the number of customers that are confused. As long as you maintain those metrics, you can do whatever you want. But the moment that these things are under the red, you can't ship new features and you need to revert back to the [inaudible 00:24:03].

**中文翻译:**
所以修复这些问题就是生产工程师工作的一部分。我认为细微差别在于用户体验的改进，我非常看重的一个指标是：有多少支持工单是因为客户感到困惑而产生的。我们会跟踪这个指标。如果这个数字略有上升，我们基本上会说：“你不能发布任何新功能，你得先把这些问题修好。”所以，就是通过这类控制手段，试图在各团队间建立标准。这是你的运营负担比例，这是你的 CSAT，这是你的 NPS，这是感到困惑的客户数量。只要你维持好这些指标，你想做什么都行。但一旦这些指标变红，你就不能发新功能，必须回头去处理。

---

### [00:24:03] Lenny

**English:**
Something funny that happened after our post on how Ramp builds product came out, someone on LinkedIn, a product manager, posted half-jokingly that her CEO came to her and every PM CEO came to them after that post. And they're just like, "How do we prioritize velocity? How do we move faster? Look at this, this culture of velocity that Ramp's got, why don't we have that? What do we need to create this culture of velocity?" And I worried a little bit because it creates this additional pressure on product managers that already have a really hard job with already a lot of pressure. So I was like, "Oh, man, we're creating this new pressure that this one company is doing things really well and now everyone has to do it this way." So I guess my question is just, what's your advice to product managers who are getting this push from leaders to move faster as a result of how you guys operate?

**中文翻译:**
在我们那篇关于“Ramp 如何构建产品”的文章发布后，发生了一件有趣的事。领英上有一位产品经理半开玩笑地发帖说，她的 CEO 在看完文章后找了她，估计每个 PM 的 CEO 都找了他们。CEO 们会问：“我们如何优先考虑速度？我们如何跑得更快？看看 Ramp 的这种速度文化，为什么我们没有？我们需要什么才能创造这种文化？”我有点担心，因为这给本就压力巨大的产品经理们增加了额外的负担。我当时想：“天哪，我们制造了一种新压力，就因为有一家公司做得特别好，现在每个人都得这么做。”所以我的问题是，对于那些因为你们的运作方式而受到领导层施压、要求跑得更快的 PM 们，你有什么建议？

---

### [00:24:49] Geoff Charles

**English:**
Yeah. Well, one, I'm sorry. It goes without saying. PMs, we can't do anything by ourselves. We're very useless. We're force multiplier. So the one thing that I'll highlight is behind Ramp's velocity is a lot less the culture that I try to amplify, but a lot more the quality of the engineering and design talent candidly. And so I'm just standing really on their shoulders here. And so advice number one is ensure that from the top down there's an investment in R&D as a first-class citizen that you're paying upmarket, that you're hiring the best, that you're focusing on your engineering and tech brand, that you're bringing people who want to work there because they want to be empowered. And then you have a culture of empowerment. And what that means is ... And it's hard to get right. What that means is the CEO has less say in the product that is built and the engineers have a lot more say into it.
(00:25:48): And so it's something that I've seen done really, really well at Ramp where the CEO sets the vision but is much less opinionated about the specific sequence by which we get there and trusts a tech organization that is radically empowered. The second thing that I would say is the biggest waste of time is meetings and status updates. And I think that oftentimes CEOs would say, or leaders would say, "Hey, we've got increased velocity, therefore let's just add these status meetings and let's add all this process and all these documents and all these ways to hold teams accountable." And that's just a huge way to demotivate people. And so I've never had a status meeting. I've never scheduled a status meeting. Statuses are done async. They are done in the systems by which they operate and largely they should be in real time. And meetings should be all about collaboration, ideation, decision-making, et cetera. So just look at your calendar and just kill as many things as possible and kill just unimportant process.
(00:26:56): And the last thing that I would say is oftentimes leaders say, "I want to move super fast," but they'll say, "I want everything under the sun. I want this and that and that." An example of that at Ramp is always like the debate between adding more products to one segment or going to a different segment, SME versus mid-market versus enterprise. And you ask the CEO, "Hey, which one should we do?" And they would say, "All of it," because they think that the more goals you have, the faster you'll be able to execute. And I think there's just a limitation to that.
(00:27:29): So the thing I would amplify is be very clear with the tradeoffs that you need to make and present those tradeoffs back to your leadership team. So here's what we're doing and here's what we're not doing and why and which one would you pick? Give them a menu of items. And you'll see that you're able to execute much, much faster on four things rather than eight at the same time. That's your job. Your job is to basically communicate those tradeoffs that oftentimes are not well communicated to executives out of fear of looking like you're pushing back. You're actually not pushing back, you're increasing velocity.

**中文翻译:**
好的。首先，我很抱歉。不用说，PM 靠自己什么也做不了，我们是“无用”的，我们只是力量倍增器。我要强调的一点是，Ramp 速度背后的原因，坦白说，与其说是我试图推广的文化，不如说是工程和设计人才的高质量。我真的是站在他们的肩膀上。所以第一个建议是：确保从上到下都将研发（R&D）视为一等公民进行投资，支付市场顶尖的薪水，聘请最优秀的人才，专注于你的工程和技术品牌，吸引那些因为渴望被赋能而想来这里工作的人。然后你才会有赋能文化。这意味着——这很难做到——CEO 在产品构建上的发言权变小，而工程师的发言权变大。
(00:25:48): 我在 Ramp 看到这一点做得非常好：CEO 设定愿景，但对于实现愿景的具体顺序不怎么固执己见，并且信任一个被彻底赋能的技术组织。第二点我想说的是，最大的时间浪费是会议和进度汇报（Status updates）。通常 CEO 或领导者会说：“嘿，我们要提高速度，所以让我们增加进度会，增加流程、文档和各种考核团队的方式。”这只会极大地挫伤积极性。我从未开过进度会，也从未安排过。进度汇报是异步完成的，在系统里实时体现。会议应该全部用于协作、构思和决策。所以，看看你的日历，尽可能删掉那些东西，删掉不重要的流程。
(00:26:56): 最后一点是，领导者常说“我想跑得超级快”，但同时又说“我什么都要”。在 Ramp，一个典型的例子是关于增加产品功能还是进军不同细分市场（中小企业 vs 中型市场 vs 大企业）的争论。如果你问 CEO：“我们该做哪一个？”他们会说：“全部都要”，因为他们认为目标越多，执行就越快。我认为这是有极限的。
(00:27:29): 所以我要强调的是：要非常清楚你需要做的权衡（Tradeoffs），并将这些权衡呈报给领导团队。告诉他们：“这是我们要做的，这是我们不做的，原因是什么，你会选哪一个？”给他们一个选项菜单。你会发现，同时做 4 件事比同时做 8 件事要快得多。这就是你的工作：沟通那些权衡。通常 PM 因为害怕看起来像是在推脱而不敢与高管沟通权衡。其实你不是在推脱，你是在提高速度。

---

### [00:28:02] Lenny

**English:**
What I'm hearing from a meta point you're making is use that ask as leverage to change the way things are operating. Is that right?

**中文翻译:**
我从你所说的更高层面理解到的是：利用领导层“要求提速”的这个契机，作为杠杆去改变现有的运作方式。对吗？

---

### [00:28:09] Geoff Charles

**English:**
100%. You can't ask for velocity and not have empowerment and not trust and not eliminate process and not increase the focus. And that requires some serious tradeoffs that oftentimes leaders, especially those coming from more traditional industries, are not comfortable with. And it was the biggest breath of fresh air when I joined Ramp was how committed the team was.
(00:28:33): The last thing I'll say is there's nothing more motivating than a leader just commenting, "This is awesome," on a random project channel at a random design crit. I know that our founders are just reading the projects that they actually care a lot about and the engineers know that. And so there's just a general excitement on just building great cool shit. And engineers just feel that and they're also highly motivated by that. So that's another piece of advice is just being able to stay plugged in to give engineers the opportunity to present to those leaders present in the all hands. That's also a great way to amplify the culture.

**中文翻译:**
100% 正确。你不能既要求速度，又不给赋能、不给信任、不消除流程、不增加聚焦。这需要一些严肃的权衡，而领导者（尤其是来自传统行业的领导者）往往对此感到不适。当我加入 Ramp 时，最让我感到耳目一新的就是团队对此的坚定承诺。
(00:28:33): 最后我想说，没有什么比领导在某个项目频道或设计评审中随口评论一句“这太棒了”更具激励作用的了。我知道我们的创始人一直在关注他们关心的项目，工程师们也知道这一点。因此，大家对于“做出很酷的东西”有一种普遍的兴奋感。工程师能感受到这种关注，并因此备受鼓舞。所以另一个建议是：保持参与感，给工程师向领导层展示的机会，让他们在全员大会上露面。这也是放大这种文化的绝佳方式。

---

### [00:29:17] Lenny

**English:**
It's a good segue to this idea of burnout. Hearing a team operate incredibly fast and velocity, velocity, velocity makes you think about, are people burning out? Are they enjoying their work? How are they sustainably going to last at Ramp? I'm curious just what that's like and how you think about avoiding burnout for folks that are just constantly shipping, shipping, shipping.

**中文翻译:**
这正好引出了关于“职业倦怠（Burnout）”的话题。听到一个团队以惊人的速度运作，满脑子都是“速度、速度、速度”，难免会让人担心：大家会倦怠吗？他们享受工作吗？他们如何在 Ramp 持续待下去？我很想知道实际情况是怎样的，以及你如何考虑为那些不断发布产品的员工避免倦怠。

---

### [00:29:38] Geoff Charles

**English:**
I think the debate around working hard and burnout misses a key point, which is all about how much impact and how good you feel about the work that you're doing. And I think that for me, when I felt burnout, it was actually at the time where I had the lowest amount of velocity. But it was when I felt like I was putting a lot of effort into things that weren't actually moving. And so I actually think velocity is a way to potentially avoid burnout. I'm not asking people to work endless hours a week. I'm asking people to get out of their own way and to focus on what truly matters, which is building great products for our customers. And I think you do that if you get into a flow state, if you get into a cadence where everything becomes easier, where work can really become thrilling.
(00:30:28): And I think sometimes organizations, especially as they grow, make that really hard. They make it really hard to just be in that flow state with a ton of distractions, a ton of meetings, a ton of cross-functional teams that are all asking for your attention and grabbing for attention. Another parallel of this is running. The best runners are the ones that love running and they feel like running isn't a chore, work isn't a chore. And I think as a runner, I try to evaluate that whenever we're doing something hard, that's challenging, that's exhausting. If you love what you do, you feel much better about the amount of effort you're putting into it. And work doesn't feel like work.

**中文翻译:**
我认为关于“努力工作”和“倦怠”的争论忽略了一个关键点：即你产生了多少影响力，以及你对所做工作的自我感觉如何。对我来说，我感到倦怠的时候，反而是我速度最慢的时候。那是因为我觉得自己投入了巨大努力，但事情却毫无进展。所以我实际上认为，速度是避免倦怠的一种潜在方式。我并不是要求人们每周无休止地工作，我是要求人们扫清障碍，专注于真正重要的事情——为客户构建伟大的产品。如果你能进入“心流（Flow）”状态，进入一种让一切变得更容易的节奏，工作就会变得令人兴奋。
(00:30:28): 我认为有时组织（尤其是随着规模扩大）会让这种状态变得很难实现。大量的分心、会议和跨职能团队都在争夺你的注意力。这就像跑步一样：最好的跑者是那些热爱跑步的人，他们不觉得跑步是苦差事。作为一名跑者，每当我们做一些困难、具有挑战性且令人疲惫的事情时，我都会去评估这一点。如果你热爱你所做的事，你对所付出的努力感觉会好得多，工作也就不再像工作了。

---

### [00:31:08] Lenny

**English:**
I find the same thing. I find that when I think back to the times that had the best experience, the most fulfilling work that I've done, it's often I was working insane hours. It was just like this very long stressful project but ends up ... Looking back, you're always like, "Wow, that was so much, that was so cool. I learned so much. We shipped so much interesting stuff, made so much impact." I think the key is what you said is that you have to actually be proud of it and it has to be something that's meaningful to you because you could work long hours on something that you have no interest in and that does not help and that does lead to burnout. So that's the key.

**中文翻译:**
我也有同感。回想起我体验最好、最有成就感的工作时光，往往是我工作时间最长的时候。那可能是一个漫长且压力巨大的项目，但回过头看，你总会觉得：“哇，那太酷了，我学到了这么多，发布了这么多有趣的东西，产生了这么大的影响。”我认为关键在于你说的：你必须真的为此感到自豪，它必须对你有意义。因为如果你在毫无兴趣的事情上长时间工作，那确实会导致倦怠。所以这是关键。

---

### [00:31:42] Geoff Charles

**English:**
And you said something there, which is meaningful to you. So not meaningful to your boss or your boss's boss's boss, but meaningful to you. And I think that that's the role of management is to make everyone on your team feel like it's their goal. And the way to do that is to, again, align on that goal and give it to them and to problems to solve. If everyone feels like it's their team, it's their company, their mini company, then they will radically avoid burnout. But if they feel like the work is being pushed onto them, they feel like they're not aligned on the goal or they don't feel empowered with the solution, then the burnout will absolutely happen.

**中文翻译:**
你提到了一点：对“你”有意义。不是对你的老板或老板的老板有意义，而是对你自己。我认为管理者的角色就是让团队中的每个人都觉得那是“他们”的目标。实现这一点的方法还是对齐目标，并把目标和要解决的问题交给他们。如果每个人都觉得这是他们自己的团队、自己的公司（微型公司），他们就能从根本上避免倦怠。但如果他们觉得工作是被强加的，觉得目标不对齐，或者在解决方案上没有自主权，那么倦怠绝对会发生。

---

### [00:32:22] Lenny

**English:**
One of my favorite quotes that you have shared is, any second you spend planning is a second you don't spend doing. And on the one hand, I love that because the more you do, the more things happen, the more you get done, everything's happening. On the other hand, it also feels a bit chaotic and I'm curious how you find that balance between, "Okay, we're not going to spend all this time planning, we're just going to go, go, go, go, go." And just how you think about that balance and how it actually ends up working out at Ramp sounds like not spending a ton of time planning.

**中文翻译:**
你分享过的一句我最喜欢的话是：“你花在计划上的每一秒，都是你没有花在执行上的每一秒。”一方面，我很喜欢这句话，因为做得越多，发生的就越多，完成的也越多。但另一方面，这听起来也有点混乱。我很好奇你如何平衡“不花大量时间计划，只管往前冲”和“实际效果”之间的关系。在 Ramp，不花大量时间计划是如何最终取得好结果的？

---

### [00:32:54] Geoff Charles

**English:**
Yeah. I would say when new joiners come at Ramp, I intro myself and I talk about our product strategy. And in the meeting with an apology, I say, "You signed an implicit contract joining Ramp. It's one where we prioritize velocity over almost everything else. What that means is it'll be somewhat chaotic. We'll ship things that don't work. We will change our products without necessarily fully enabling you and you'll have to constantly be on your toes whenever you load up a demo instance." And I think that it's an expectation and people are welcoming of that because they understand that the tradeoff is that we don't move forward, that we don't actually innovate, that we don't continue to provide value for our customers.
(00:33:41): I think there's certain things that we plan for. And so the question really is because accuracy has cost, make sure that you're only increasing the accuracy of planning for the things that have high value of that accuracy.
(00:33:56): And so those things for us are large market moments where we have products, marketing, and sales all coordinating these big moments. And those typically happen maybe once a quarter, once every six months. It's basically your marketing calendar. We need a plan for that, for sure, but it's oftentimes a low percentage of our total R&D focus. And so it's totally fine for each team to be somewhat autonomous, somewhat chaotic within their pod. They're extremely clear, but for the outside in, it might be very chaotic. But be very accurate on the things that truly, truly matter. The rest actually doesn't matter. You don't need a lot of accuracy and confidence on when specifically certain features will be live. It's much better to spend whatever time you would spend trying to create accuracy and creating velocity.

**中文翻译:**
是的。当新员工加入 Ramp 时，我会做自我介绍并谈论我们的产品战略。在会议中我会先道个歉，然后说：“加入 Ramp 意味着你签署了一份隐含契约，即我们把速度置于几乎一切之上。这意味着过程会有些混乱。我们会发布行不通的东西。我们可能会在没有完全做好赋能培训的情况下更改产品，每次你打开演示实例时都得保持警惕。”我认为这是一种预期管理，大家都很欢迎，因为他们明白，如果不接受这种权衡，我们就无法前进、无法创新、无法持续为客户提供价值。
(00:33:41): 当然，有些事情我们是会计划的。关键在于，因为“准确性”是有成本的，所以要确保你只在那些“准确性具有高价值”的事情上提高计划的准确性。
(00:33:56): 对我们来说，这些事情包括重大的“市场时刻（Market moments）”，即产品、市场和销售需要协同配合的大动作。这些通常每季度或每半年发生一次，基本上就是你的营销日历。对于这些，我们肯定需要计划，但这通常只占我们总研发精力的很小一部分。因此，每个小分队（Pod）在内部保持某种程度的自主和混乱是完全没问题的。对他们内部来说很清晰，但对外部来说可能很乱。但在真正重要的事情上要非常准确。剩下的其实不重要，你不需要对某个功能具体什么时候上线有极高的准确度和信心。与其花时间去追求那种准确度，不如把时间花在创造速度上。

---

### [00:34:48] Lenny

**English:**
I love that you set expectations very clearly upfront. That seems really important to be successful at a company like that. It also just makes me remember every successful startup is extremely chaotic. As much as it may not feel like that on the outside, it's insanely chaotic. Things are constantly changing. I was at a fireside chat with Sheryl Sandberg once at Airbnb and somebody asked her just like, "How do we deal with change? Things are just ... We're reorging every six months. People are leaving and coming and teams are shifting and priorities are always adjusting." And she's just like, "This is the problem you want, you want to be going through this because that means you're growing and you're going through hypergrowth because the alternative is much worse where you're not growing and that's much more painful." So I think it's just a good reminder that if you're working at a place that's chaotic, it's often a good thing.

**中文翻译:**
我很喜欢你预先明确设定预期这一点。在这样的公司里，这对于成功至关重要。这也让我想起，每一家成功的初创公司内部都是极其混乱的。尽管外人可能感觉不到，但内部确实混乱不堪。事情一直在变。我曾在 Airbnb 参加过 Sheryl Sandberg 的炉边谈话，有人问她：“我们该如何应对变化？每六个月就重组一次，人员进进出出，团队在变，优先级总在调整。”她回答说：“这正是你想要的问题。你希望经历这些，因为这意味着你在成长，正处于高速增长期。另一种情况糟糕得多，那就是不增长，那才更痛苦。”所以，这提醒了我们，如果你在一个混乱的地方工作，这通常是件好事。

---

### [00:35:37] Geoff Charles

**English:**
I would say so. I mean, oftentimes, people use that excuse to not have a very strong strategy. And I think that for us, we've always been, from the start, the spend management platform that helps you spend less. Our strategy ... I share an annual newsletter around what we did and what we're going to do next year. And it's oftentimes pretty spot on in terms of the goals. Again, the goals and the value and the problem and the vision, that's consistent. The specifics, the timing, the quarterly scopes, all these things, yes, it changes, but what you want to avoid is the thrash of people waking up and feeling like they're working at a different company or that leaders are constantly changing their minds. We've been extremely consistent from the start and I think most of the products that we build, most of the code that we written, is in the customer's hands and hasn't been ripped away. And I think that speaks a lot to velocity, too.

**中文翻译:**
我也这么认为。不过，人们常以此为借口而不去制定强有力的战略。对我们来说，从一开始我们就定位为“帮你花钱更少”的支出管理平台。我们的战略……我会发一份年度通讯，总结我们做了什么以及明年要做什么。在目标方面，它通常非常准确。再次强调，目标、价值、问题和愿景是一致的。具体的细节、时间、季度范围，这些确实会变。但你要避免的是那种让员工醒来觉得自己在另一家公司工作，或者领导层朝令夕改的剧烈动荡。我们从一开始就极其一致，我认为我们构建的大部分产品、编写的大部分代码都在客户手中发挥作用，没有被推倒重来。我认为这也极大地促进了速度。

---

### [00:36:33] Lenny

**English:**
Awesome. That was a good addition. I didn't mean to say if your place is chaotic, it's no problem. It's that side effect of growth and hypergrowth as things are going to be pretty chaotic.

**中文翻译:**
太棒了，这个补充很好。我不是说混乱没问题，而是说混乱是增长和高速增长的副作用。

---

### [00:36:45] Sponsor: Attio

**English:**
This episode is brought to you by Attio, a new type of CRM that's powerful, flexible, and built around your data. Traditional CRMs were built for a different era with totally different speed, scale, and data demands. Attio is different. It allows you to quickly build a CRM that matches your unique workflows and data structures. Within minutes of connecting your email and calendar, you'll have a CRM that's already set up complete with customer profiles and automatic data enrichment. You'll also have real-time dynamic reporting at your fingertips. No more slow deployments, outdated user experiences or tedious manual data input. With Attio, you can build and adapt your CRM on the fly no matter your business model or company stage. Attio is the CRM for fast-growing startups. Get started today and get 15% off your first year at attio.com/lenny. That's A-T-T-I-O.com/lenny.

**中文翻译:**
本期节目由 Attio 赞助。Attio 是一种新型 CRM，它功能强大、灵活，且围绕你的数据构建。传统的 CRM 是为另一个时代构建的，其速度、规模和数据需求完全不同。Attio 则不同，它允许你快速构建一个匹配你独特工作流和数据结构的 CRM。在连接邮箱和日历后的几分钟内，你就能拥有一个设置好的 CRM，包含完整的客户档案和自动数据增强功能。你还能随手获得实时的动态报告。不再有缓慢的部署、过时的用户体验或繁琐的手动数据录入。无论你的业务模式或公司阶段如何，你都可以随时构建和调整你的 CRM。Attio 是为高速增长的初创公司准备的 CRM。今天就开始使用，首年可享受 15% 的优惠，访问 attio.com/lenny。

---

### [00:37:42] Lenny

**English:**
So you've talked about strategy a couple of times and I want to dig into that a little bit. So there's maybe a couple directions we can go. One is you talked about this contract you create with teams of a strategy. So maybe let's just go there. What does that actually look like? What's part of this contract? And is there a document you put together to lay this out?

**中文翻译:**
你几次提到了战略，我想深入探讨一下。我们可以从几个方向切入。一是你提到的与团队建立的关于战略的“契约”。那具体是什么样的？契约包含哪些内容？你会准备一份文档来陈述这些吗？

---

### [00:37:58] Geoff Charles

**English:**
Strategy means a lot of different things. In my mind, strategy is about how do we get to our goals? And it's not a roadmap and it's not a vision, it's something right in between that. So the first thing you need to do is align on what are the goals, what do you want to see in the world? Then the hypothesis, why do you think this will work? Figure out why we're uniquely positioned as a company to get after that goal. Figure out the metrics by which you would measure whether we reach that goal and then talk about the initiatives, talk about the risks, and talk about the long-term outcomes.

**中文翻译:**
战略有很多不同的含义。在我看来，战略是关于“我们如何达成目标”。它不是路线图，也不是愿景，而是介于两者之间。所以你首先需要对齐的是：目标是什么？你想在世界上看到什么变化？然后是假设：为什么你认为这行得通？弄清楚为什么我们公司在追求这个目标上具有独特优势。确定衡量目标是否达成的指标，然后讨论具体举措、风险以及长期结果。

---

### [00:38:31] Lenny

**English:**
So these are the bullet points of the contract essentially of a strategy document?

**中文翻译:**
所以这些基本上就是战略文档或契约的要点？

---

### [00:38:35] Geoff Charles

**English:**
Correct. And now every pod basically spends time writing that doc for themselves. So the pods are basically organized against outcomes, so they should be very clear on their goals and they publish these things out. And then what I typically do is take all these documents and make sure that they're aligned with our high-level product strategy, which is a bit more long-term thinking than the individual pods, and that they are also aligned with our financial strategy, which we can get into. But that's a little bit of how you also create a culture of empowerment where each team is thinking about these things thinking like you. And the more that, as a leader, you make teams think like you, the more leverage you get over time and the more you can start thinking ahead on other ways of operating.

**中文翻译:**
没错。现在每个小分队（Pod）基本上都会花时间为自己编写这份文档。小分队是根据产出结果（Outcomes）组织的，所以他们应该非常清楚自己的目标并发布出来。我通常做的是收集所有这些文档，确保它们与我们的高层产品战略对齐（高层战略比单个小分队的思考更长远），并确保它们与我们的财务战略对齐。这就是你创造赋能文化的方式——让每个团队都像你一样思考。作为领导者，你越能让团队像你一样思考，你获得的杠杆作用就越大，你也就越能开始思考其他的运作方式。

---

### [00:39:25] Lenny

**English:**
How long does planning roughly take and how often do you do this strategy rethink?

**中文翻译:**
规划大约需要多长时间？你们多久进行一次战略反思？

---

### [00:39:30] Geoff Charles

**English:**
We've gone through iterations, good and bad, I think. For a period of time at Ramp, we created OKRs with financial goals and quotas to some extent for different teams. And that led to just taking a long time to plan because people were trying to make sure there was the right metric, trying to make sure that it was achievable. And it became very political, very annoying. And largely, our entire R&D team was like, "Look, we're just going to execute on the roadmap, screw the OKRs." And so we moved from quarterly, very expensive quarterly planning, which took one month every three months, so basically 33% of the time was planning, to a biannual one-pager on, these are the company priorities and it's much more smooth and much faster. Related to that, though, we have a strong financial plan that we execute on and each row or lever of that financial plan has an owner. Oftentimes it's marketing and sales. For anything that's product led, it's product. So that's one contract. And then we have our roadmap, that's the second contract.

**中文翻译:**
我们经历过好坏参半的迭代。在 Ramp 的一段时间里，我们为不同团队制定了带有财务目标和配额的 OKR。这导致规划时间变得很长，因为大家都在试图确保指标正确、确保目标可达成。这变得非常政治化，非常烦人。基本上，我们的整个研发团队都觉得：“听着，我们只想执行路线图，去他的 OKR。”于是，我们从昂贵的季度规划（每三个月就要花一个月规划，相当于 33% 的时间在做计划）转变为每半年一次的一页纸文档，列出公司的优先级，这变得顺畅且快速得多。不过，与之相关的是，我们有一个强有力的财务计划在执行，财务计划中的每一行或每一个杠杆都有负责人。通常是市场和销售，对于任何产品驱动的项目，负责人就是产品部。所以财务计划是一份契约，路线图是第二份契约。

---

### [00:40:43] Lenny

**English:**
One of the bullet points you mentioned is this idea of being, what are we uniquely positioned to do? Can you talk a bit more about that and maybe what's an example of something you worked on, how you described why you're uniquely positioned to win at that?

**中文翻译:**
你提到的要点之一是“我们具有哪些独特优势”。你能多谈谈这一点吗？能不能举个例子，说明你在某个项目上是如何描述“为什么你们具有赢得该领域的独特优势”的？

---

### [00:40:55] Geoff Charles

**English:**
One of the biggest values, I think, of software is how do you reuse the components that you've built to increase, again, velocity and impact. So why we were interested in bill payments as an expansion of our corporate card platform was we saw a bill as just an invoice to the company. And an expense was an invoice to the employee. And so there was a lot of parallels between these two things. It was all about having a liability. It was all about processing that liability in terms of the financial event and moving the money, moving the money either between the company, between the company and the employee or between two companies.
(00:41:38): So we believed that we were uniquely positioned to get after that space because we already had money movement. We already had some type of liability. We already integrated with accounting systems and we had a pretty strong risk process that can govern all that. And the employees that were requesting to pay these bills were already on the platform. So that's an example of a right to win. And I think that if you continue to focus on where you're uniquely positioned to win, you'll increase velocity because you already have a lot of the components of the expertise.

**中文翻译:**
我认为软件最大的价值之一在于如何复用已构建的组件，从而再次提高速度和影响力。我们之所以对“账单支付（Bill Payments）”感兴趣，并将其作为企业卡平台的扩展，是因为我们认为账单只是发给公司的发票，而报销（Expense）是发给员工的发票。这两者之间有很多相似之处：核心都是产生负债，然后处理该负债相关的财务事件并进行资金移动——无论是在公司内部、公司与员工之间，还是两家公司之间。
(00:41:38): 我们相信我们在该领域具有独特优势，因为我们已经有了资金移动能力，已经处理过负债，已经与会计系统集成，并且有一套强大的风险流程来管理这一切。而且，申请支付这些账单的员工已经在我们的平台上了。这就是“获胜权（Right to win）”的一个例子。我认为如果你持续关注自己具有独特优势的领域，你的速度会更快，因为你已经拥有了大部分组件和专业知识。

---

### [00:42:12] Lenny

**English:**
I love that. It's not something you really see in teams' docs of just why we have the right to win this. So I think that's a really interesting element. By the way, I should mention we'll link to a template of your planning approach in the show notes, which we also had in the post that we worked on. So folks are trying to write down notes of all these little bullet points. We'll link to a doc that has all these things.
(00:42:34): What do you think of OKRs and how do you approach OKRs as a part of this planning?

**中文翻译:**
我很喜欢这一点。在团队文档中很少见到“为什么我们有权赢得这个领域”这种描述。这非常有意思。顺便提一下，我会在节目介绍中链接你们规划方法的模板。
(00:42:34): 你对 OKR 怎么看？在规划中你如何处理 OKR？

---

### [00:42:39] Geoff Charles

**English:**
I largely stay away from OKRs from a product perspective.

**中文翻译:**
从产品的角度来看，我基本上远离 OKR。

---

### [00:42:39] Lenny

**English:**
Go on.

**中文翻译:**
请继续。

---

### [00:42:44] Geoff Charles

**English:**
I think that, again, strategy, financial plan, roadmap. I think where we landed on with OKRs were really around more cross-functional things in nature. So, for example, we'll have an OKR around winning a specific market and we'll have OKRs that are cross-functional across different teams. But, again, an OKR is just a method to measure an objective with metrics and you can use them at various levels of granularity. I stay away from them from a product perspective because, again, I want to focus on velocity, which is just output, which is your roadmap, but they're pretty strong at more of the cross-functional side of things as well as the financial side of things.

**中文翻译:**
我还是坚持：战略、财务计划、路线图。我认为 OKR 最终适用的场景是那些跨职能的事务。例如，我们会有一个关于“赢得特定市场”的 OKR，这涉及多个团队的协作。但归根结底，OKR 只是用指标衡量目标的一种方法，你可以在不同粒度上使用它。我从产品角度远离它，是因为我想专注于速度，而速度体现为产出，也就是路线图。但在跨职能和财务方面，OKR 确实很有效。

---

### [00:43:30] Lenny

**English:**
I don't even know what separates an OKR from not an OKR. I feel like OKRs are just a goal with some high-level statements of things we're trying to accomplish. I don't even understand when people say they use OKRs or don't, what that even means anymore. There's a recurring point on this podcast and other posts of just people are weary of just being obsessed with, "Here's the metric that we're going to hit and that's all that matters." And there's a fear they lose sight of the bigger picture, what they're trying to accomplish. But I think in the end, it's just like, "Here's what we're trying to do. Here's some goals, we're going to hit it," because I don't know care, I don't know.

**中文翻译:**
我甚至不知道 OKR 和非 OKR 的区别在哪。我觉得 OKR 就是一个目标加上一些关于我们要完成什么的陈述。当人们说他们用或不用 OKR 时，我都不太明白那意味着什么了。本播客和文章中经常出现的一个观点是：人们厌倦了过度痴迷于“我们要达到的指标，那是唯一重要的事”。大家担心会因此忽略大局。但归根结底，不就是“这是我们要做的，这是目标，我们要达成它”吗？

---

### [00:44:02] Geoff Charles

**English:**
I think that's right. I think that's right. And at the end of the day, again, the contract is your product roadmap and that's the contract you have, the sales organization. Marketing can take that product roadmap and create market moments. And ultimately, if your product roadmap doesn't actually hit the goals of the company, then I'm accountable because I've created a system by which I've aligned with each team on why the roadmap is going to hit the goals. And so you essentially need to point back to the leader in that regard. But I can't ask every team to try to manipulate OKRs to fit their roadmaps. That's just completely exhausting. We've aligned on what we need to do, let's get it done.

**中文翻译:**
没错。归根结底，契约就是你的产品路线图，那是你与销售组织的契约。市场部可以根据路线图创造市场时刻。最终，如果路线图没能达成公司目标，那就是我的责任，因为我建立了一套系统，并与每个团队对齐了路线图为何能达成目标。所以这种情况下你应该找领导负责。但我不能要求每个团队都去操纵 OKR 来迎合他们的路线图，那太让人心累了。既然我们已经对齐了要做什么，那就去做吧。

---

### [00:44:41] Lenny

**English:**
Something that comes across pretty clearly in the way you think and the way Ramp operates is this idea of thinking from first principles. And it's a cliche term, feels like everyone's always trying to talk about how they're thinking from first principles and it's important to their culture to think from first principles, but it feels like you guys actually do it. And so I am curious just where that emerged for you or for Ramp. And is there an example of something that emerged within Ramp, a new product or an idea, that was very clearly from first principles?

**中文翻译:**
在你的思维方式和 Ramp 的运作方式中，有一点非常明确，那就是“从第一性原理出发思考”。虽然这是个陈词滥调，好像每个人都在谈论它，但感觉你们是真的在践行。我很想知道这种思维方式对你或 Ramp 来说是从哪产生的？有没有一个 Ramp 内部产生的例子——一个新产品或一个想法——是非常明显地源自第一性原理的？

---

### [00:45:10] Geoff Charles

**English:**
The most important thing to talk about here is that Ramp is a very unique business. I mean, we're a credit card company, which is all about risk management and underwriting. We're also a payments company because we move money between businesses. We're also a software company because we deal with spend management and expense management, accounting. We're building for SMEs. So we have PLG, but we're also building for enterprise. So we are sales driven, we're everything.
(00:45:40): And so it's really important when you're dealing with something that hasn't been done before to think from first principles. And what I mean by that is you don't pattern match from your past experience, but you go back to the fundamentals of what we're trying to do and you think through them very, very deeply. And that means you need to hire people who can think from first principles and be okay putting aside their experience. And that's a tough pill to swallow for some folks who will come in and will say, "I'm the subject matter expert on X, Y, Z and I know what's best." And they come in and they get a reality check about the complexity of our business. And how also you can't influence teams by saying, "I've seen this before." That's just like an anti-pattern. You can't say, "My past company, X, Y, Z."

**中文翻译:**
这里最重要的一点是，Ramp 是一家非常独特的企业。我们既是信用卡公司（涉及风险管理和承保），又是支付公司（在企业间移动资金），还是软件公司（处理支出管理、报销和会计）。我们为中小企业构建产品（PLG 模式），也为大企业构建产品（销售驱动模式）。我们几乎涵盖了所有类型。
(00:45:40): 所以当你处理从未有人做过的事情时，从第一性原理出发思考就至关重要。我的意思是，你不要从过去的经验中进行“模式匹配”，而是回到我们要做的基本面上，进行非常深入的思考。这意味着你需要招聘那些能够从第一性原理出发思考，并愿意放下过去经验的人。对于一些人来说，这很难接受，他们会说：“我是某某领域的专家，我知道什么是最好的。”但进来后，他们会发现我们业务的复杂性超乎想象。而且，你不能通过说“我以前见过这个”来影响团队，这是一种反模式。你不能说“在我之前的公司 X、Y、Z 是怎么做的”。

---

### [00:46:32] Lenny

**English:**
No one wants to hear that.

**中文翻译:**
没人想听那个。

---

### [00:46:32] Geoff Charles

**English:**
No one wants to hear that. And surely, I thought I was coming into Ramp and I was going to apply the best product [inaudible 00:46:39] process, and I had to shift that process entirely because the process was predicated on a B-plus engineering team, and I was faced with an A-plus engineering team. And so my entire ... I had to go back to first principles around how products should be developed and built. So, again, all the advice I'm sharing here, don't just take it and map it and copy paste. Start from the first principles that we're sharing.
(00:47:00): An example of that is our support team. So support reports into me. And the first principle there was saying, "Well, every support ticket is a failure of our product." We literally have that as a quote just posted on all those channels. It's a failure. And if the product works perfectly, no one should ever have to contact our support team. And what better way of holding the product team accountable for support other than having support report into product.
(00:47:30): And the second piece was that we believe that a lot of our value to our customers were because it was going to come from deeply understanding them, deeply listening to them, and moving on that feedback. And so instead of hiring people who were focused just on resolving the ticket, we incentivized people to actually decrease number of tickets over time and decrease deflection or increase deflection. And that required hiring a different breed of people that then became leaders in different parts of the organization as well.
(00:48:03): So, again, we could have easily just pattern matched, look at comparables, hired people who've scaled large support teams, and just used benchmarks in the industry, but we've started from first principles. And the outcome of that is we have an extremely low contact rate. We have over 400,000 users on our platform and a team of agents that's under 30. And it's a pretty crazy ratio to think about.

**中文翻译:**
没人想听。我刚来 Ramp 时，也以为我会应用一套最好的产品流程，但我不得不彻底改变那套流程，因为那套流程是基于“B+ 级工程团队”设计的，而我面对的是一支“A+ 级工程团队”。所以我必须回到关于“产品应该如何开发和构建”的第一性原理上。所以，我分享的所有建议，请不要直接复制粘贴，要从我们分享的第一性原理出发。
(00:47:00): 一个例子是我们的支持（Support）团队。支持团队向我汇报。我们的第一性原理是：“每一张支持工单都是产品的失败。”我们真的把这句话贴在了所有频道上。如果产品完美运行，没人需要联系支持团队。那么，还有什么比让支持团队向产品部汇报更能让产品团队对支持负责的方法呢？
(00:47:30): 第二点是，我们相信为客户创造的价值源于深入理解他们、倾听他们并根据反馈采取行动。因此，我们没有招聘那些只关注“解决工单”的人，而是激励大家去减少工单数量、增加自助解决率（Deflection）。这需要招聘一种完全不同的人才，他们后来也成为了组织各部分的领导者。
(00:48:03): 同样，我们本可以进行模式匹配，参考同行，聘请那些管理过大型支持团队的人，并使用行业基准。但我们从第一性原理出发，结果是：我们的客户联系率极低。我们平台上有超过 40 万用户，而人工支持团队不到 30 人。这是一个非常惊人的比例。

---

### [00:48:30] Lenny

**English:**
That's wild. I missed this nuance. So the support team reports into you and the product team?

**中文翻译:**
太疯狂了。我漏掉了这个细节：支持团队向你和产品团队汇报？

---

### [00:48:37] Geoff Charles

**English:**
Yes.

**中文翻译:**
是的。

---

### [00:48:38] Lenny

**English:**
Wow, I've never heard of that. That's cool. Okay.
(00:48:42): So I'm going to change course a little bit and I'm going to talk about writing. So we worked on this post together on how Ramp operates. And I was just incredibly impressed with your attention to detail, your ability to articulate, your approach to product. And as we were working on this, you mentioned that writing is really important to you as a way of figuring out what you think and to solve and crystallize problems, which is exactly how it works for me. And that's how this whole newsletter started. It was just trying to crystallize what I remembered and did so that I can remember it and share with people. So I'd love to just hear your insights and take on just what writing does for you and maybe what you'd recommend listeners do with this approach of writing, helping them think.

**中文翻译:**
哇，我从未听说过这种架构。太酷了。
(00:48:42): 接下来我想换个话题，聊聊“写作”。我们一起合作了那篇关于 Ramp 运作的文章，你对细节的关注、表达能力以及产品方法论给我留下了深刻印象。在合作过程中，你提到写作对你非常重要，它是你理清思路、解决问题和提炼想法的方式。这和我完全一样。我的这份通讯也是这样开始的：试图提炼我的记忆和做法，以便记住并分享。我很想听听你对写作的见解，它为你带来了什么？你会建议听众如何利用写作来辅助思考？

---

### [00:49:25] Geoff Charles

**English:**
Throughout the years at Ramp, I was often faced with a problem or a question that I couldn't answer off the bat, and I had to go back to first principles. And the best way of doing that is to shut down your laptop, take out a piece of paper, write the question as simply as possible at the top of the paper, and just spend time just thinking about how to answer that question. And there were a ton of questions over time. For example, how do we ... And it was all scalability problems that few companies have actually done successfully. And so you have to start with your own thinking, how do we scale decision making? How do we incentivize teams to work together? How do we do headcount planning? How do we allocate headcount in a fair way? How do we avoid politics as firsthand data goes away? How do we make decisions on doubling down versus pivoting?
(00:50:24): All these things are really tough. And I found myself ... You could read things and that's helpful, but I don't think that reading makes you necessarily think better. It makes you more wise, but the best way to increase your capacity to think is to actually do the thinking. And so that's where I see writing. If you're able to write things clearly, you're able to think through things clearly. It was also a way for me to effectively communicate, especially during COVID, where we largely grew up during COVID, where everything was written, and it was also a way for me to get content out there to increase my brand and Ramp's brand in terms of the space that then led us to hire better people over time. So all these things worked out, but it does require you to block out time and to, again, focus on how you think about problems rather than try to Google the answer. After you thought through it, then go out and read and you'll fine-tune your thinking and you'll identify new questions to ask yourself afterwards.

**中文翻译:**
在 Ramp 的这些年里，我经常遇到无法立刻回答的问题，必须回到第一性原理。最好的方法就是合上电脑，拿出一张纸，在纸的最上方写下一个尽可能简单的问题，然后花时间思考如何回答。这类问题有很多，通常是很少有公司能成功解决的规模化问题。你必须从自己的思考开始：我们如何规模化决策？我们如何激励团队协作？我们如何进行人员编制规划？如何公平分配名额？当一手数据消失时，如何避免办公室政治？如何决定是加倍投入还是转型？
(00:50:24): 这些事都很难。我发现，阅读虽然有帮助，但阅读不一定能让你思考得更好。阅读让你更睿智，但提高思考能力的最好方法是“去思考”。这就是写作的作用：如果你能写得清楚，你就能想得清楚。这也是一种有效的沟通方式，尤其是在疫情期间，Ramp 大部分时间是在疫情中成长起来的，当时一切都是书面的。写作也让我能发布内容，提升我和 Ramp 在该领域的品牌，从而帮我们招到更好的人才。所以这一切都奏效了，但它确实需要你拨出专门的时间，专注于“你”如何思考问题，而不是去 Google 答案。在你思考清楚之后，再去阅读，你会微调你的想法，并发现新的问题。

---

### [00:51:34] Lenny

**English:**
I love this advice. You mentioned earlier that PMs can't really do much on their own, but I think this is the thing PMs can do is PMs have the time to think and to plan and think ahead because they're not required to build code all day and design. This is the advantage you have as a PM. I always think that PMs often don't really have any special unique skills. They just have the time to do the things that nobody else wants to do or doesn't have the time to do or doesn't want to do. And just this really important point of just spending the time to think and not just constantly try to discuss things in meetings or, like you said, just Google around for answers. That ends up being incredibly important. And I just love this framework of just starting a doc with a little question at the top and just sit there and try to answer the question on your own before doing anything. I think that's a really good approach.
(00:52:26): I want to ask how you actually do that. How do you actually create these blocks of time? There's this concept of deep work and how valuable that is to creative work and knowledge work. How do you do that for yourself? How do you block out time and not get bugged all day?

**中文翻译:**
我很喜欢这个建议。你之前提到 PM 靠自己做不了太多事，但我认为这就是 PM 能做的事：PM 有时间去思考、计划和前瞻，因为他们不需要整天写代码或做设计。这是 PM 的优势。我总觉得 PM 往往没有什么特别独特的技能，他们只是有时间去做别人不想做、没时间做或不愿做的事。花时间思考，而不是总在会议中讨论或 Google 答案，这一点极其重要。我非常喜欢在文档顶端写个小问题，然后坐在那尝试独立回答的框架。
(00:52:26): 我想问你具体是怎么做的？你如何创造这些大块的时间？这就是“深度工作（Deep Work）”的概念，它对创造性工作和知识工作非常有价值。你如何为自己留出时间而不被打扰？

---

### [00:52:39] Geoff Charles

**English:**
Because we're really anti-meeting at Ramp, I had time in my calendar. And so what I would basically do is the Friday before I clocked out, I would look at the next week, I would look at the top questions that I needed to spend time thinking about, and I would block out that time. I also work on one day of the weekend in terms of deep work. I find that hanging out outside and doodling on my piece of paper, some thoughts is actually really refreshing because it doesn't feel like work. It feels like just me just philosophizing about something. And so, yeah, blocking out that time, finding a space where things are less busy, where you're not in a critical path either early mornings or later afternoons or a day on the weekend is the best path for it.

**中文翻译:**
因为在 Ramp 我们非常反对开会，所以我的日历里有空余时间。我通常的做法是：在周五下班前，我会看下周的安排，列出我需要思考的核心问题，并在日历上把那段时间锁死。我也会在周末抽一天进行深度工作。我发现待在户外，在纸上涂涂画画一些想法其实很提神，因为那感觉不像在工作，更像是在进行某种哲学思考。所以，锁死时间，找一个不那么忙碌、你不在关键路径上的空间（比如清晨、傍晚或周末的一天）是最好的方法。

---

### [00:53:34] Lenny

**English:**
What do you do if someone wants to actually schedule a meeting with you or reach out or put someone on your calendar? Do you have a policy there to protect that time?

**中文翻译:**
如果有人想找你开会，或者想在你的日历上加东西，你该怎么办？你有什么政策来保护那段时间吗？

---

### [00:53:41] Geoff Charles

**English:**
I think that I should never really be in the critical path of anything. So largely, I'm not available, but if they really need to get to me, they have my phone number.

**中文翻译:**
我认为我不应该处于任何事情的关键路径上。所以大部分时间我都是“不可用”状态，但如果他们真的急需找我，他们有我的电话号码。

---

### [00:53:53] Lenny

**English:**
Cool. The thing that I found really valuable is just on Wednesday mornings and Friday mornings, I just have this huge block called deep work time. If you book a time during this time, I'll slap you. And I don't know if I'm allowed to put that into meeting calendar invites anymore, but that actually worked really well. Nobody really booked meetings in that slot.

**中文翻译:**
酷。我发现非常有价值的一点是，在周三上午和周五上午，我会留出一大块叫“深度工作时间”的区域。如果你在那段时间约我，我会“扇你”（开玩笑）。虽然我不知道现在还能不能在日历邀请里写这种话，但效果确实很好，没人会在那个时段约会。

---

### [00:54:11] Geoff Charles

**English:**
I didn't know Zoom had a slot feature that's coming handy.

**中文翻译:**
我不知道 Zoom 还有这种“扇人”功能，挺好用的。

---

### [00:54:15] Lenny

**English:**
It was a Google, it was in the calendar. It was like the calendar invite. And I also worked usually at least one day a week and I found that to be really effective and I know a lot of people don't want to be doing that, but I found that really important to have great success.
(00:54:30): One other question along these lines around just optimizing for processing and getting stuff done and deep work time, do you have any other best practices for just being organized and staying on top of stuff, knowing there's just stuff coming at you all day every day?

**中文翻译:**
那是 Google 日历里的功能。我通常每周至少工作六天，我发现这非常有效。我知道很多人不想这么做，但我发现这对取得巨大成功非常重要。
(00:54:30): 沿着这个思路，关于优化处理流程、完成任务和深度工作时间，你还有什么其他的最佳实践吗？面对每天接踵而至的事务，你如何保持条理并掌控全局？

---

### [00:54:46] Geoff Charles

**English:**
If you're a manager and, like me, you're in back-to-back meetings from 10:00 to 6:00, it's very easy to be completely overwhelmed with a sheer amount of stuff you need to do. And so I've invested over time in just a very robust but fairly simple task management process, which is, at the end of every meeting, I would write down the tasks that I owe and the tasks that someone else owes and I would write them down to as clearly as possible, not some vague thing, but a very clear thing and just when I need to get this done by. I don't spend time just grooming. So at the end of the day, I use notes. I have just a page-long thing of all the things I need to get done, all the things people need to get done for me. And then I spend time grooming, which is basically just trying to group things together in logical chunks, grouping the tactical versus the strategic, the important versus the less important.
(00:55:40): I group also what other people owe me and I Slack them what they owe me and I put a reminder on Slack for when they owe it to me by. And that way, it's just out of sight, out of mind. I think that the high-level theme is I try to create or free up headspace for processing, not memory. And so I just basically spend very little time memorizing anything and I write everything down. That is hard when you're trying to remember a specific date or remember something that someone said, but you have a system by which you can pull these things up very, very quickly. In the Google Space, you can pull up any document and search a bunch of documents very, very quickly. So that's what I would do is just spend a lot more time on the processing, be extremely good at just task management, and then grouping things, and then the next day, creating your calendar aligned to the goals that you've set for yourself the day before in terms of the tactical, where you group those tactical tasks together and then the more strategic deep thinking, walking out that additional space.

**中文翻译:**
如果你是一名管理者，像我一样从上午 10 点到下午 6 点会议不断，很容易被海量事务淹没。因此，我投入时间建立了一套稳健但简单的任务管理流程：在每次会议结束时，我会写下我欠别人的任务和别人欠我的任务，写得尽可能清晰，不是模糊的描述，而是非常明确的事情以及截止日期。我不会在会议中整理。在一天结束时，我会用笔记软件列出长长的一页待办事项。然后我花时间“整理（Grooming）”，也就是把事情按逻辑分组：战术性的 vs 战略性的，重要的 vs 不那么重要的。
(00:55:40): 我还会把别人欠我的事情分组，然后在 Slack 上发给他们，并设置 Slack 提醒。这样我就能“眼不见心不烦”。核心主题是：我试图腾出大脑空间用于“处理”，而不是“记忆”。我基本不花时间记任何事，而是把一切都写下来。虽然记住特定日期或某人说的话很难，但如果你有一套系统能快速调取这些信息（比如 Google Workspace 的搜索），那就没问题。所以，我会花更多时间在处理上，精通任务管理和分组，然后第二天根据前一天设定的目标来安排日历，把战术任务聚在一起处理，并为战略性的深度思考留出空间。

---

### [00:56:40] Lenny

**English:**
I feel like you and I are very aligned on a lot of things. That's exactly how I approach priorities. Have you read Getting Things Done by David Allen?

**中文翻译:**
我觉得我们在很多事情上都非常一致。这正是我处理优先级的方式。你读过 David Allen 的《搞定》（Getting Things Done）吗？

---

### [00:56:47] Geoff Charles

**English:**
I don't read a lot of nonfiction actually.

**中文翻译:**
其实我不怎么读非虚构类书籍。

---

### [00:56:50] Lenny

**English:**
Okay, because what you're describing is very aligned with this approach to processing and taking to-dos, and it's what I built my approach on. And so you naturally merged out of your head. I love it.
(00:57:03): Let's move on to talking a little bit about your team and hiring and things like that. And there's just going to be a grab bag set of questions. What is your current PM team look like, either number wise or just ratio and just a PM wise?

**中文翻译:**
好吧，因为你描述的非常符合那套处理待办事项的方法，我的方法也是基于此建立的。看来你是自然而然悟出来的，太棒了。
(00:57:03): 让我们聊聊你的团队和招聘。这里有一堆零散的问题。你现在的 PM 团队是什么样的？人数是多少，或者说 PM 与工程师的比例是多少？

---

### [00:57:17] Geoff Charles

**English:**
We have about 13 PMs at Ramp and probably over a hundred engineers. So I try to keep basically one to eight to one to 15 depending on the team. Obviously, B2B is slightly more complex because you're dealing with pretty strong marketing team and pretty strong sales team and pretty demanding customers that you have relationships with. So I've seen ratios be a bit lower than the B2C space. But, yeah, that's a little bit of the team today. And they're organized by those teams, by those customer pain points.

**中文翻译:**
Ramp 现在大约有 13 名 PM，工程师可能超过 100 名。所以我尽量保持 1:8 到 1:15 的比例，具体取决于团队。显然，B2B 业务稍微复杂一些，因为你要应对强大的市场和销售团队，以及要求很高的客户。所以我看到的比例通常比 B2C 领域要低一些。这就是目前团队的情况，他们按客户痛点划分的小组进行组织。

---

### [00:57:47] Lenny

**English:**
And I have this note from before, you said that you reached a hundred million ARR, and that's a run rate, not recurring revenue at that point, I imagine, right?

**中文翻译:**
我记得你之前说过，你们达到了 1 亿 ARR，我猜那是年化营收（Run rate），而不是当时的经常性收入（Recurring revenue），对吧？

---

### [00:57:55] Geoff Charles

**English:**
Yep.

**中文翻译:**
是的。

---

### [00:57:56] Lenny

**English:**
With 50 people, which is incredible. And so just on that point, how do you do so much with so few PMs, especially? Do you have anything that you figured out that ends up being really important there?

**中文翻译:**
只有 50 个人，这太不可思议了。就这一点来说，你们是如何用这么少的 PM 完成这么多工作的？你有没有发现什么特别重要的秘诀？

---

### [00:58:06] Geoff Charles

**English:**
I think that by eliminating or reducing the size of the team, we've forced other people in the company to think like PMs and I think it's been a huge value add to our culture. When I say product, often people think about product management, but I actually think product is anyone that actually reports into our CTO, and that's product engineering, product design, product managers, product data scientists. So making everyone feel like a PM is a great way to get leverage as a PM, and that means basically empowering the designer to think about the actual specs and priorities and scopes more than you or empower the engineer to take something that's fairly lightweight in terms of a spec or direction and actually think through it deeply and come back with some great questions that the PM hasn't thought through. So that's one thing.
(00:58:58): The second is that we invested early on in product operations, which was a team that also reports to me that basically focuses on the operational functions of product that's everything around whether it's project management or issue management or release management or enablement and content beta and customer research. They basically are tasked with a lot of the work that needs to get done to continue shipping products and scaling product development.
(00:59:29): And then lastly, just cutting as much of the low-leverage work that PMs often get sucked into. So, for example, we never write a ticket. We don't spend much time in linear, which is our ticket management system. Basically, our contract is the vision and the priority and a very high-level spec and everything else is pushed on the engineering teams. And I think that's when engineers actually are also able to move even faster because they can create whatever tickets they want, they can break down the work that they want, they are accountable for the projects that they're driving, and that increases trust and moves things faster as well.

**中文翻译:**
我认为通过精简团队规模，我们迫使公司里的其他人也像 PM 一样思考，这对我们的文化是一个巨大的加分。当我提到“产品”时，人们常想到产品管理，但我认为“产品”是指所有向 CTO 汇报的人，包括产品工程、产品设计、产品经理和产品数据科学家。让每个人都觉得自己是 PM 是获得杠杆效应的好方法。这意味着赋能设计师去思考具体的规格、优先级和范围，甚至比你思考得还多；或者赋能工程师，让他们拿到一份简略的规格或方向后，能深入思考并提出 PM 没想到的好问题。这是第一点。
(00:58:58): 第二点是，我们很早就投资了产品运营（Product Ops）团队，他们也向我汇报。他们专注于产品的运营职能，包括项目管理、故障管理、发布管理、赋能培训、Beta 测试内容和客户调研。他们承担了大量为了持续发布产品和规模化产品开发所必须完成的工作。
(00:59:29): 最后，就是砍掉 PM 经常陷入的低杠杆工作。例如，我们从不写工单（Ticket）。我们不怎么花时间在 Linear（我们的工单管理系统）上。基本上，我们的契约就是愿景、优先级和一份高层规格说明，剩下的全部推给工程团队。我认为这反而让工程师跑得更快，因为他们可以创建自己想要的工单，拆解自己想要的工作，并对他们驱动的项目负责。这增加了信任，也加快了速度。

---

### [01:00:09] Lenny

**English:**
That makes a ton of sense. Basically, you distribute the PM job that other companies put on the PM across other team members. So if you had to think about just what is the core product manager job at Ramp at this point, I imagine from what I've been hearing, it's strategy, vision, aligning the team. What else plays into that, just bullet point wise? A few things that come to mind.

**中文翻译:**
这非常有道理。基本上，你把其他公司压在 PM 身上的工作分摊给了其他团队成员。那么，如果你必须总结一下目前 Ramp 产品经理的核心工作，我想应该是战略、愿景和对齐团队。除此之外还有什么？能列举几个你想到的要点吗？

---

### [01:00:32] Geoff Charles

**English:**
Team building. So building a culture within the pod because oftentimes your managers are no longer in your team, right? Engineers might report to different people, designers might report to different people. PMs might report to different people. So actually building a team culture within the pod is really, really important. And oftentimes it falls on the PM to create those offsites or to create those ideation sessions or to find ways to have fun as a team.
(01:01:00): The second is making sure that the team is humming in terms of the actual focus areas and then protecting the team from stakeholders that might want to have an opinion or want to have an update or want to schedule certain meetings. So protecting that core team from that chaos and then being the central point of contact if someone has a question or needs something, and then being able to bring in the right person at the right time. So those are the different things that is also really important to mention.

**中文翻译:**
团队建设。在小分队（Pod）内部建立文化，因为通常你的经理并不在你的小分队里，对吧？工程师、设计师和 PM 可能分别向不同的人汇报。所以在小分队内部建立团队文化非常重要。通常由 PM 负责组织团建、构思会议或寻找让团队开心工作的方法。
(01:01:00): 第二是确保团队在核心关注领域高效运转，并保护团队免受那些想要发表意见、想要进度更新或想要约会的利益相关者的干扰。保护核心团队免受这些混乱的影响，成为有人提问或有需求时的中心联系点，并能在正确的时间引入正确的人。这些也是非常重要的职责。

---

### [01:01:34] Lenny

**English:**
Coming back to a note that I made earlier, you talked about how a lot of this advice you're sharing in the approach to product at Ramp is assuming that the team is A plus, the engineers are A plus, the designers A plus. For somebody listening to this that may be wondering, "Are my engineers A plus or not?", what comes to mind as ways that you could get a sense of this is a team that can operate in this way versus, no, we're never going to work in this way and maybe we should shift the way we work or I should get work somewhere else?

**中文翻译:**
回到我之前记下的一个点：你提到 Ramp 的产品方法论是基于团队是 A+ 级的，工程师和设计师都是 A+ 级的。对于正在听节目的观众，如果他们想知道“我的工程师是不是 A+ 级”，你认为有哪些方法可以判断一个团队是否能以这种方式运作？或者如果不行，我们是否应该改变工作方式，或者我该换个地方工作？

---

### [01:02:06] Geoff Charles

**English:**
Great question. Yeah, it's very hard to identify. A few things. One is, does the engineer want to win in the market? Does the engineer really care about winning against competitors, winning the hearts and minds of the customer? Do they understand the business context in which they operate by which they need to do that? Are they curious about how the company makes money, about what customers love and don't love, about what the most important project is and why it's important? They're asking you questions about the business outside of just the engineering domains. Are they able to execute on what they said they were going to execute without your help or do you actually feel like you need to be behind them? Are they the one actually setting the pace, asking you to keep up with your specs, keep up with your decisions, respond more quickly to the things that are blocking them, bringing more PMs or more designers to do more things?
(01:03:14): Are they being proactive in different channels where you think it's actually your job, but actually they'll jump in anyways? For example, we have different Slack channels with a bunch of people sometimes asking questions or raising issues or having blockers. And you have engineers who are just jumping in and explaining how a feature works, getting the feedback and fixing a bug proactively. And you may think, "Well, that's not the priority. I need to control what the engineers are doing." That's not your job actually, that's not your job. Your job is to make sure that they're aligned with the long-term vision and that they can deliver what they've committed to, but on top of that, they can do whatever the hell they want. And if they're taking on something that puts the things that they committed to at risk, they'll communicate that. So, again, that proactiveness, that desire to help, that desire to improve that accountability on their product.
(01:04:03): If their product isn't performing, if their product has feedback, are they doing it themselves or they need you to push them? So those are all mentality and culture aspects. I'm not even getting into the technical rigor and the quality of their systems and the velocity of code because I'm not a good judge of that. That's not really my role. But those are the things that I would immediately look at that, I think, is just fundamentally different in the engineering team that we built at Ramp versus others. And it's just a big part of the culture shift and the culture that we've been able to build.

**中文翻译:**
好问题。确实很难识别。有几点：第一，工程师是否渴望在市场上获胜？他们是否真的在乎击败竞争对手、赢得客户的心？他们是否理解业务背景？他们是否好奇公司如何赚钱、客户喜欢什么、不喜欢什么、最重要的项目是什么以及为什么重要？如果他们会问你工程领域之外的业务问题，那就是个好信号。第二，他们能否在没有你帮助的情况下完成承诺的任务，还是你需要一直盯着他们？他们是否在主动带节奏，催促你跟上规格说明、跟上决策，要求你更快响应阻碍他们进度的事，甚至要求引入更多 PM 或设计师来做更多事？
(01:03:14): 他们是否在一些你认为该由你负责的频道里表现积极？比如在 Slack 频道里，当有人提问或反馈 Bug 时，工程师是否会主动跳出来解释功能、收集反馈并修复 Bug？你可能会想：“那不是优先级，我得控制工程师在做什么。”其实那不是你的工作。你的工作是确保他们与长期愿景对齐，并能交付承诺的东西。除此之外，他们想干什么都行。如果他们做的事会影响承诺的交付，他们会沟通。所以，这种主动性、帮助他人的欲望、改进产品的责任感非常关键。
(01:04:03): 如果产品表现不佳或有负面反馈，他们是自发去处理，还是需要你推着走？这些都是心态和文化层面的。我甚至还没谈到技术严谨性、系统质量或代码速度，因为我不是这方面的专家。但我会立即观察这些点，我认为这是 Ramp 工程团队与其他团队本质上的不同。这是我们文化转型和构建的核心。

---

### [01:04:36] Lenny

**English:**
That was an awesome answer. And I think as a PM, you often don't want your engineers and designers to have such strong opinions and to be so on top of everything because there's just like, "Oh, no. Okay, here's what I think we should actually do," but engineers have all these opinions. And what you're saying is that's what you want to lean into, assuming you trust that they know what they're doing and can actually get things done. And so it's like a catchment to you a little bit, but I think that's a really unique culture and approach. And so that's an awesome answer.

**中文翻译:**
这个回答太棒了。作为 PM，有时你可能不希望工程师和设计师有太强的意见或管得太宽，因为你会觉得：“噢不，这是我想做的，但工程师有一堆意见。”而你所说的是，你应该倾向于接受这一点，前提是你信任他们的能力。这虽然对 PM 来说有点挑战，但确实是一种非常独特的文化和方法。

---

### [01:05:05] Geoff Charles

**English:**
And, look, there's drawbacks to that culture where you get to a radically empowered engineering team that thinks that they know the product better than the designer or the PM and they push back on the designs or they disagree with the PM, but I'll take that culture any day compared to a culture where they're just taking things at face value and not challenging the thinking and not actually thinking from their own perspectives. And it is like I'll take someone on my team any day that challenges what I tell them to do or what I think is important and is maybe a bit harder to manage, but it'll make me think way deeper about what I'm asking them and what I think is important. And I'll grow as a manager much faster because of that.

**中文翻译:**
看，这种文化也有缺点。当你拥有一支被彻底赋能的工程团队时，他们可能会觉得自己比设计师或 PM 更懂产品，从而抵制设计方案或反对 PM。但比起那种只会听命行事、从不挑战权威、没有独立思考的文化，我宁愿选择前者。我宁愿要一个会挑战我、虽然有点难管，但能迫使我更深入思考的人。作为管理者，我也会因此成长得更快。

---

### [01:05:45] Lenny

**English:**
I love it. Two final questions, one around hiring. When you're interviewing people, what do you look for and what does Ramp look for that maybe other companies don't value as much as they should or maybe overvalue? What do you look for that you think is unique that helps you hire this A-plus team?

**中文翻译:**
太棒了。最后两个问题，一个是关于招聘。面试时你最看重什么？Ramp 看重哪些其他公司可能忽视或过度看重的东西？你认为哪些独特的特质能帮你招到 A+ 级团队？

---

### [01:06:02] Geoff Charles

**English:**
We look for people who have a very strong desire to have impact. And the best way to assess that is the impact that they've had or the reason why they are switching jobs. So, again, it goes back to what I was mentioning earlier in the chat, which was velocity leads to people wanting to join because they want to have velocity. And the best signal that is, I'm leaving because things got too slow, things got too bureaucratic. I missed the old days where we were just building and shipping and launching. I look for people who can think deeply, so I'll go super deep into a decision, a tradeoff that they had to make. And I'll really just scratch at that until I get to a deep understanding of how they make decisions and how deep they think about things.
(01:06:57): And in general, we tend to overemphasize those two skills rather than necessarily experience because experience ... Again, to the point around Ramp is a unique business, it matters a lot less. You can have a lot less impact than your ability to be hungry and your ability to think deeply.

**中文翻译:**
我们寻找那些对产生影响力有极强渴望的人。评估这一点最好的方法是看他们过去产生的影响力，或者他们跳槽的原因。这又回到了我之前说的：速度吸引那些渴望速度的人。最好的信号是：“我离开是因为前公司太慢了、太官僚了，我怀念以前那种只管构建、发布和上线的日子。”我还会寻找能深入思考的人，我会针对他们做过的一个决策或权衡进行刨根问底，直到我深入了解他们如何做决策以及思考得有多深。
(01:06:57): 总的来说，我们倾向于过度强调这两项技能（渴望影响力和深度思考），而不是经验。因为 Ramp 业务很独特，经验的重要性相对较低。比起经验，保持饥渴和深度思考的能力能产生更大的影响。

---

### [01:07:20] Lenny

**English:**
Final question. A lot of people listening to this want to get into product management. What's your advice? I'm sure you get asked this a lot. How do you break into product management? What do you tell people?

**中文翻译:**
最后一个问题。很多听众想进入产品管理领域。你有什么建议？我敢肯定很多人问过你这个问题。如何进入 PM 行业？你通常怎么跟他们说？

---

### [01:07:30] Geoff Charles

**English:**
Yeah. So for me, I went from college to consulting to my four into tech was really into more like solutions analyst, I think that was my title. I was basically trying to implement a large B2B software in national banks. And how I got into product management was really around understanding deeply the customer and understanding deeply the product and being able to show impact on the combination of these two things. Typically, the folks that join product teams are the highest performers outside of product that either understand the customer really well and can advise product or understand the product very well and can serve customers.
(01:08:12): And so my advice is for folks that want to break into that is to find a role that is adjacent to product that enables you to have those experiences and to prove yourself. So, for example, product operations is a good one. Business operations is a good one. More consulting sales engineering or solution engineering is a good one. There are designers and engineers that can become PMs as well. Typically, it's folks that can do the job as well as the PM. And what we typically do is we give those PMs a shot or those folks a shot. So we'd give them like six months to go into a new area and try it out. And then we basically have the engineers they work with and designers they work with actually make the call as to whether or not they would want this PM versus another PM on the team.

**中文翻译:**
好的。对我来说，我从大学毕业后先做咨询，然后进入科技行业，当时的头衔好像是“解决方案分析师”。我当时在为国家银行实施大型 B2B 软件。我进入产品管理领域是因为我深入理解客户、深入理解产品，并能展示这两者结合所产生的影响力。通常，加入产品团队的人是产品部门之外表现最优秀的人，他们要么非常懂客户并能给产品提建议，要么非常懂产品并能服务客户。
(01:08:12): 所以我的建议是：找一个与产品相邻的职位，让你积累经验并证明自己。例如，产品运营、业务运营、咨询、销售工程或解决方案工程都是不错的选择。设计师和工程师也可以转岗。通常是那些能像 PM 一样完成工作的人。我们通常会给这些人一个机会，比如给他们六个月时间去尝试一个新领域。最后，我们会让与他们合作的工程师和设计师来决定，是否想要这个人作为团队的 PM。

---

### [01:09:05] Lenny

**English:**
Is there anything else you want to share before we get to our very exciting lightning round?

**中文翻译:**
在进入激动人心的闪电轮问答之前，你还有什么想分享的吗？

---

### [01:09:09] Geoff Charles

**English:**
Yeah. I mean, first, think from first principles, don't take everything I'm saying at face value. And second is back to talent, that a huge part of our success was the early team that Karim built on the tech side. And so I can write blogs all day on how we increased velocity, but if there's one thing to take away from this is that empowered and talented engineers and designers are the biggest reason why Ramp was so successful and it's something that requires a ton of focus. I mean, early on for the first year at Ramp, Karim, our CTO, was only focused on that. It was hiring the best talent. He was a lot less interested or focused on our product strategy, our product market fit, or even our revenue. It was all about bringing in the best engineers and the best designers and that has had compounding effects on the company and the team.

**中文翻译:**
有的。第一，从第一性原理出发思考，不要全盘接受我说的每一句话。第二，回到人才上，我们成功的很大一部分归功于 Karim 在技术端建立的早期团队。我可以整天写博客谈论我们如何提高速度，但如果说有什么值得借鉴的，那就是：被赋能且才华横溢的工程师和设计师是 Ramp 成功的最大原因。这需要极大的专注。在 Ramp 的第一年，我们的 CTO Karim 只关注这一件事：招聘最优秀的人才。他当时对产品战略、PMF 甚至营收都不太感兴趣，他只在乎招到最好的工程师和设计师，这为公司和团队带来了复利效应。

---

### [01:10:09] Lenny

**English:**
And I think an important element there is the initial people you hire end up impacting the next batch and the next set because they see, "Wow, this person is working at Ramp. That's incredible. I got to look at that." So there's an early compounding effect, too, that happens.

**中文翻译:**
我认为其中一个重要因素是，你最初招的人会影响下一批人，因为大家会觉得：“哇，那个人在 Ramp 工作，太不可思议了，我也得去看看。”所以早期就产生了复利效应。

---

### [01:10:24] Geoff Charles

**English:**
Exactly.

**中文翻译:**
没错。

---

### [01:10:25] Lenny

**English:**
Well, with that, we've reached our very exciting lightning round. I've got six questions for you. Are you ready?

**中文翻译:**
好了，现在进入闪电轮问答。我有六个问题，准备好了吗？

---

### [01:10:32] Geoff Charles

**English:**
Yes.

**中文翻译:**
准备好了。

---

### [01:10:34] Lenny

**English:**
What are two or three books you've recommended most to other people?

**中文翻译:**
你向别人推荐最多的两三本书是什么？

---

### [01:10:40] Geoff Charles

**English:**
Because I work a lot, I try to read things that are completely outside of work. I don't think I can get through any fiction or nonfiction book that's often recommended. So anything that will pull on your heartstrings and try to make you more human. When Breath Becomes Air is a really good one that I often recommend.

**中文翻译:**
因为我工作很多，所以我尽量读一些完全与工作无关的东西。那些经常被推荐的虚构或非虚构类书籍我通常读不下去。我喜欢那些能触动心弦、让你更有“人情味”的书。《当呼吸化为空气》（When Breath Becomes Air）是我经常推荐的一本好书。

---

### [01:10:59] Lenny

**English:**
Amazing. Love that one. Favorite recent movie or TV show?

**中文翻译:**
太棒了，我也喜欢那本。最近喜欢的电影或电视剧？

---

### [01:11:03] Geoff Charles

**English:**
I started watching The Bear a few weeks ago. I think it's a great show around leadership around how a different industry operates, the restaurant industry. My dad owned a restaurant so I got a little bit into that and all about teamwork and quality versus velocity [inaudible 01:11:24] of personal and professional stress. So I thought it was a really good learning.

**中文翻译:**
几周前我开始看《熊家餐馆》（The Bear）。我认为这是一部关于领导力、关于不同行业（餐饮业）运作的绝佳剧集。我父亲开过餐馆，所以我很有共鸣。它涉及团队合作、质量与速度的博弈，以及个人与职业压力的平衡。我觉得很有启发。

---

### [01:11:29] Lenny

**English:**
Wow, that show makes me really think of Ramp. That makes a lot of sense. It feels very ... Everything's just crazy moving fast. I'm just so stressed watching that show. I haven't watched the second season yet.

**中文翻译:**
哇，那部剧确实让我想起 Ramp。很有道理，感觉一切都在疯狂运转。看那部剧让我压力很大，我还没看第二季。

---

### [01:11:41] Geoff Charles

**English:**
You should come to our office, probably very similar.

**中文翻译:**
你应该来我们办公室看看，可能非常像。

---

### [01:11:44] Lenny

**English:**
Just delicious food, sandwiches and the velocity. Favorite interview question you'd like to ask candidates?

**中文翻译:**
美味的食物、三明治和极高的速度。你最喜欢问应聘者的面试问题是什么？

---

### [01:11:52] Geoff Charles

**English:**
I ask, what's the hardest thing you've ever done? And I ask that because working at Ramp is hard. I want to understand what hard means for them. I want to understand why it was hard. I want to understand how they overcame that difficulty, how they worked with other people to overcome that difficulty, and how much agency they had in overcoming that. So it's a really good sign around what is difficult to them and how much work they put into overcoming that.

**中文翻译:**
我会问：“你做过最难的事情是什么？”我问这个是因为在 Ramp 工作很难。我想了解“难”对他们意味着什么，为什么难，他们如何克服困难，如何与他人合作克服困难，以及他们在其中发挥了多少主观能动性。这能很好地反映出他们的抗压能力和解决问题的决心。

---

### [01:12:23] Lenny

**English:**
What is a favorite product you've recently discovered that you really like?

**中文翻译:**
你最近发现并非常喜欢的某个产品是什么？

---

### [01:12:28] Geoff Charles

**English:**
So my partner bought me this WHOOP recently. Wearing it now. It gives you this real-time stress signal. [inaudible 01:12:36] that's pretty helpful. But I think it's a great product in terms of just actual insights. It's very data-driven, so it'll tell you ... You have a daily journal of all the things you did that day and it'll correlate what you did that day to your recovery score or how healthy you are for that day.
(01:12:55): And so it'll give you insights around how certain actions you take will have impact on your next day's health, which is all about heart rate variability. I thought it was just a great way to continue to focus on your health. I think running a team has a huge impact on your physical health, on your mental health, and I think you are an athlete at a high growth startup or even a small business or a large company. And focusing on that health is really, really important. So any tools like the WHOOP to invest into that is great.

**中文翻译:**
我伴侣最近给我买了这个 WHOOP（运动健康手环）。我现在就戴着它。它能给你实时的压力信号，非常有帮助。我认为它在提供洞察方面做得很好。它是数据驱动的，会记录你当天的所有活动，并将其与你的恢复评分或健康状况联系起来。
(01:12:55): 它会告诉你某些行为如何影响你第二天的健康（主要是心率变异性）。我认为这是关注健康的一种极好方式。管理团队对身心健康有巨大影响，在高速增长的初创公司工作，你就像一名运动员。关注健康至关重要，所以像 WHOOP 这样的工具很棒。

---

### [01:13:30] Lenny

**English:**
That was a really good pitch for the WHOOP. I have never wanted one, but now I do. Okay, next question. What is something relatively minor you've changed in your product development process that has had a big impact on your team's ability to execute?

**中文翻译:**
你给 WHOOP 做的广告太到位了，我以前不想要，现在想要了。好，下一个问题：在产品开发流程中，你做了哪些相对较小但对团队执行力产生重大影响的改变？

---

### [01:13:42] Geoff Charles

**English:**
It's not something I've changed, it's more something that our head of design, Diego, has changed. Basically having designers spend more time creating more visionary prototypes and then sharing those out in videos. It just has just huge impact on how exciting work is and how excited the team are. And so just providing that clarity is massive. And I think just, again, Figma and Loom and prototypes that actually are interactive so people can actually play around with it is a huge way to unlock velocity.

**中文翻译:**
这不是我改的，而是我们的设计负责人 Diego 改的。基本上是让设计师花更多时间创建更具远见的原型，然后通过视频分享出来。这极大地提高了工作的趣味性和团队的兴奋度。提供这种清晰度影响巨大。再次强调，Figma、Loom 以及可交互的原型是释放速度的重要手段。

---

### [01:14:18] Lenny

**English:**
Final question. I've already asked you about this a couple of times, but I'm curious if there's any other productivity tip or tool that you'd recommend to listeners that you haven't mentioned yet.

**中文翻译:**
最后一个问题。虽然我已经问过几次了，但我还是很好奇，你还有没有其他还没提到的生产力技巧或工具可以推荐给听众？

---

### [01:14:29] Geoff Charles

**English:**
Turn off notifications. Quit Slack when you're doing deep work. Check your emails once a day and just literally go through them in five minutes. Oftentimes, most of them use lists. Check Slack only at the top of the hour. Use Slack snooze or reminders. I mean, there's a whole other podcast we can talk about over Slack channels and how to organize that, but just get really good at the tools you're using. I think the first year of consulting, we just got really good at Excel and Excel shortcuts, and it was a big part of our training. And so just train yourself and train your teams on how to use their tools, how to use your calendar, how to use Slack, how to use email, whatever the tool you've designed as the right tool for you. Be dogmatic. I mean, what Ramp is, is a tool at the end of the day and we're helping finance teams more efficient, so let's dock through that and do that with our own tools.

**中文翻译:**
关掉通知。深度工作时退出 Slack。每天只查一次邮件，并在五分钟内处理完。每小时整点才查一次 Slack。使用 Slack 的勿扰模式或提醒功能。关于如何组织 Slack 频道，我们可以再录一期播客，但关键是精通你使用的工具。在做咨询的第一年，我们练就了极强的 Excel 技能和快捷键，那是培训的重要部分。所以，训练你自己和你的团队如何使用工具——日历、Slack、邮件，无论你选择什么工具。要有一种近乎教条的坚持。毕竟 Ramp 本身就是一个工具，旨在帮助财务团队提高效率，所以我们也应该用自己的工具做到这一点。

---

### [01:15:27] Lenny

**English:**
I think we've had just enough velocity in our chat. I think we're going to hit a hundred million downloads. I think we built an A-plus team here. Geoff, thank you so much for doing this. Two final questions. Where can folks find you online if they want to ask you any other questions? And second question, how can listeners be useful to you?

**中文翻译:**
我想我们的聊天速度已经足够快了。我觉得我们的下载量会突破一亿次，我们在这里组建了一支 A+ 团队。Geoff，非常感谢你参加节目。最后两个问题：如果大家想问你其他问题，可以在哪里找到你？第二，听众能为你做些什么？

---

### [01:15:44] Geoff Charles

**English:**
You can find me on Twitter and LinkedIn. Twitter is geoffintech. How can they be useful? Honestly, your attention is a gift. If you're interested in joining us here at Ramp, we're obviously hiring incredible people. So if anything that I shared resonates with you and if you want to join the team, and we're hiring across product engineering design, but most importantly, be kind to yourself. I think I've been a huge listener to this podcast. It's an honor to be here. I know very little. Hopefully some of what I shared was meaningful to you. But keep the growth mindset. Keep thinking from first principles. Keep investing in that growth and be patient. It takes a lot of time.

**中文翻译:**
你可以在 Twitter 和 LinkedIn 上找到我。Twitter 账号是 geoffintech。听众能帮我什么？坦白说，你们的关注就是最好的礼物。如果你对加入 Ramp 感兴趣，我们正在招聘优秀的人才。如果我分享的内容引起了你的共鸣，欢迎加入我们的产品、工程或设计团队。但最重要的是，对自己好一点。我是这个播客的忠实听众，很荣幸能来到这里。我所知有限，希望我分享的内容对你有意义。保持增长心态，坚持从第一性原理出发思考，持续投资于成长，并保持耐心。这需要很长时间。

---

### [01:16:24] Lenny

**English:**
What a beautiful way to end it. Geoff, thank you again so much for being here.

**中文翻译:**
多么完美的结尾。Geoff，再次感谢你的到来。

---

### [01:16:28] Geoff Charles

**English:**
Thanks a lot, Lenny. This was a lot of fun.

**中文翻译:**
非常感谢，Lenny。这很有趣。

---

### [01:16:30] Lenny

**English:**
Same. Bye, everyone.
(01:16:34): Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
我也是。大家再见。
(01:16:34): 非常感谢收听。如果你觉得有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用上订阅。此外，请考虑给我们评分或留下评论，这能帮助其他听众发现这个播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目见。