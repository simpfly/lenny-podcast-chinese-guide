# Christine Itwaru - 双语对照

This is the complete bilingual transcript of Lenny’s Podcast featuring Christine Itwaru on the topic of Product Operations (Product Ops).

---

### [00:00:00] [Christine Itwaru]

**English:**
Speaking as a former PM, I would not ever give up spending time with customers and watching their pain. That's how I fell in love with product was I saw my internal customer 12 years back now fighting with the keyboard, fighting with the mouse, and I was just like, "Oh, my gosh. What's this guy doing?"

**中文翻译:**
作为一名前产品经理（PM），我永远不会放弃花时间与客户相处并观察他们的痛苦。这就是我爱上产品的原因——12年前，我看到我的内部客户在跟键盘和鼠标“搏斗”，我当时就在想：“天哪，这家伙在干什么？”

---

### [00:00:23] [Lenny]

**English:**
Welcome to Lenny's Podcast where I interview world-class product leaders and growth experts to learn from their hard won experiences building and growing today's most successful products. Today, my guest is Christine Itwaru. Christine is a long-time product ops leader at Pendo, a role that she transitioned into from product management. I've been hearing more and more about the rise of product ops and I've never really understood what the role was until I have this conversation with Christine.

**中文翻译:**
欢迎来到 Lenny 的播客。在这里，我会采访世界级的产品领袖和增长专家，学习他们在构建和增长当今最成功产品过程中辛苦换来的经验。今天的嘉宾是 Christine Itwaru。Christine 是 Pendo 资深的产品运营（Product Ops）负责人，她是从产品管理岗位转型到这个角色的。我越来越多地听到关于“产品运营”兴起的消息，但在与 Christine 交流之前，我从未真正理解这个角色到底是做什么的。

---

### [00:00:49] [Lenny]

**English:**
We dig into what product ops people do day to day, where the line is between their role and product management, whether you should consider getting into the role, whether your company would benefit from product ops. We also have an interesting discussion around whether ops roles in general are a sign of inefficiency at your company. I learned a ton from this conversation and Christine is awesome. So, with that, I bring you Christine Itwaru after a short word from our wonderful sponsors.

**中文翻译:**
我们深入探讨了产品运营人员的日常工作、他们与产品管理之间的界限、你是否应该考虑进入这个领域，以及你的公司是否能从产品运营中获益。我们还进行了一场有趣的讨论：运营类角色（Ops roles）的出现是否通常意味着公司效率低下。我从这次对话中学到了很多，Christine 非常棒。在听完赞助商的简短介绍后，让我们正式开始与 Christine Itwaru 的对话。

---

### [00:01:15] [Lenny]

**English:**
This episode is brought to you by Amplitude. If you're setting up your analytics stack but not using Amplitude, what are you doing? Anyone can sell you analytics while Amplitude unlocks the power of your product and guides you every step of the way. Get the right data, ask the right questions, get the right answers, and make growth happen. To get started with Amplitude for free, visit amplitude.com. Amplitude, power to your products. 

Are you hiring or on the flip side, are you looking for a new opportunity? Well, either way, check out lennysjobs.com/talent. If you're a hiring manager, you can sign up and get access to hundreds of hand curated people who are open to new opportunities. Thousands of people apply to join this collective and I personally review and accept just about 10% of them. You won't find a better place to hire product managers and growth leaders. Join almost 100 other companies who are actively hiring through this collective. If you're looking around for a newer opportunity, actively or passively, join the collective. It's free. You can be anonymous and you can even hide yourself from specific companies. You can also leave any anytime and you'll only hear from companies that you want to hear from. Check out lennysjobs.com/talent. Christine, welcome to the podcast.

**中文翻译:**
本期节目由 Amplitude 赞助。如果你正在搭建分析技术栈却没用 Amplitude，你在想什么呢？谁都能卖给你分析工具，但 Amplitude 能解锁你产品的力量，并指引你走的每一步。获取正确的数据，提出正确的问题，得到正确的答案，让增长发生。免费开始使用 Amplitude，请访问 amplitude.com。Amplitude，为你的产品赋能。

你是在招聘，还是在寻找新机会？无论哪种情况，请查看 lennysjobs.com/talent。如果你是招聘经理，你可以注册并接触到数百名经过人工筛选、正在寻找新机会的优秀人才。成千上万的人申请加入这个人才库，而我个人只审核通过其中约 10% 的人。你找不到比这更好的地方来招聘产品经理和增长领袖了。加入近 100 家正通过该人才库积极招聘的公司吧。如果你正在主动或被动地寻找新机会，请加入这个人才库。它是免费的，你可以保持匿名，甚至可以对特定公司隐藏自己。你也可以随时退出，并且只会收到你感兴趣的公司的消息。请访问 lennysjobs.com/talent。Christine，欢迎来到播客。

---

### [00:02:37] [Christine Itwaru]

**English:**
Thank you. I'm so happy to be here, Lenny.

**中文翻译:**
谢谢。Lenny，我很高兴能来到这里。

---

### [00:02:39] [Lenny]

**English:**
First of all, I just wanted to give a big thank you to Ben Williams who is a previous guest on this podcast who suggested you join this podcast and who connected us. We were chatting earlier and you said you have a story about Ben. So, what is that?

**中文翻译:**
首先，我要衷心感谢 Ben Williams，他是本播客之前的嘉宾，是他建议你参加节目并撮合了我们。我们刚才聊天时，你说你有一个关于 Ben 的故事。那是什么故事？

---

### [00:02:51] [Christine Itwaru]

**English:**
I do. Absolute thanks to Ben for connecting us. So, when he made the intro, I was super excited, one because it's you, and two, because I love hearing from Ben. I was like, "Oh, great, he's doing all these wonderful things and whatnot." I just remember in that moment, my first conversation with Ben, which was really early in the days of starting product operations at Pendo and we were going through all these just really crazy things that he was going through and his team was a customer of Pendo at the time. He's sitting there just staring and I was like, "Oh, you're okay?" He was like, "Yeah, I'm fine. I thought that I was just throwing them off at every return."

**中文翻译:**
是的。非常感谢 Ben 的引荐。当他介绍我们认识时，我超级兴奋，一是因为是你（Lenny），二是因为我喜欢听 Ben 的见解。我当时想：“太好了，他正在做这么多精彩的事情。”我记得那一刻，我与 Ben 的第一次谈话，那是 Pendo 刚开始建立产品运营职能的早期。当时我们正在讨论他经历的那些疯狂的事情，他的团队当时是 Pendo 的客户。他坐在那儿盯着看，我问：“哦，你还好吗？”他说：“嗯，我没事。我以为我每次反馈都在给他们添乱。”

---

### [00:03:28] [Christine Itwaru]

**English:**
He said to me, "I bet you I'm not the only person who has these questions and I bet you I'm not the only person that's thinking about all these problems that probably seem very normal and natural." I don't know. All of us are going through this. This is why I'm building product ops here. But what he said and he was just like, "I really think there are a lot more people that you need to talk to about this stuff." It's just full circle. I think he connected us and he was one of the reasons I started to say... One of the best things that my first boss product always told me was, "You have to find a way to give back." When he said that to me, I was like, "I wonder if this is one of the ways that I can start to give back to the product community."

**中文翻译:**
他对我说：“我敢打赌，我不是唯一一个有这些疑问的人，我也敢打赌，我不是唯一一个在思考这些看似非常正常和自然的问题的人。”我当时想，确实，我们所有人都在经历这些，这就是我在这里建立产品运营的原因。但他接着说：“我真的认为你需要和更多的人聊聊这些东西。”这就像是一个圆满的循环。我觉得他连接了我们，他也是我开始思考的原因之一……我第一任产品主管告诉我的最棒的一句话就是：“你必须找到回馈的方式。”当他对我这么说时，我想：“我好奇这是否是我开始回馈产品社区的方式之一。”

---

### [00:04:08] [Lenny]

**English:**
Awesome. Well, here we are, and obviously, we're going to be talking about product ops. You've been in the product ops role for seemingly feels like as long as the role has existed. I'd love to know when you think the role actually and we're going to talk about just when this spurred happened in product ops. I hate this term, but it feels like you're a thought leader in the product ops space. I've never actually worked with anyone in product ops. I've never had a product ops team, so I have a ton of questions. I imagine many people listening also have and are also just curious about this emerging role.

**中文翻译:**
太棒了。那么，我们今天显然要聊聊产品运营（Product Ops）。你担任这个角色似乎已经和这个角色存在的时间一样长了。我很想知道你认为这个角色究竟是什么时候出现的，我们稍后会讨论产品运营领域的爆发式增长。虽然我讨厌这个词，但感觉你就是产品运营领域的“思想领袖”。我实际上从未与产品运营人员合作过，也从未有过产品运营团队，所以我有很多问题。我想很多听众也有同样的疑问，并且对这个新兴角色感到好奇。

---

### [00:04:38] [Lenny]

**English:**
So, what I'm hoping we do with our chat is to help people understand, "Do they need a product ops team? Would that be beneficial to their company? Whether people should be consider moving into product ops, whether they're in PM or something else right now, and then just generally helping people understand this emerging role of product ops." Does that sound good?

**中文翻译:**
所以，我希望通过我们的聊天，能帮助大家理解：“他们是否需要一个产品运营团队？这对他们的公司有好处吗？人们是否应该考虑转向产品运营（无论他们现在是 PM 还是其他职位）？以及总体上帮助大家理解产品运营这个新兴角色。”听起来可以吗？

---

### [00:04:56] [Christine Itwaru]

**English:**
Yes, thank you, number one. That was really kind. Two, yeah, I'm happy to dive in. Yeah.

**中文翻译:**
是的，首先谢谢你，你太客气了。其次，我很乐意深入探讨。

---

### [00:05:01] [Lenny]

**English:**
Okay, sweet. So, I think we have to start with the basics. What's just the simplest way to understand the role of product ops, especially in relation to product management?

**中文翻译:**
好的，太棒了。我想我们得从基础开始。理解产品运营角色最简单的方式是什么，特别是它与产品管理（Product Management）的关系？

---

### [00:05:11] [Christine Itwaru]

**English:**
I've had many ways of describing this in the past and it generally centered around the ladder of what I'm going to tell you or the second part of this, but I'm breaking it down now into two simple things. One is it is a thing you do. Product operations for a VP or a head of product or a product manager is the creation of some system that allows you to thrive or allows your team to thrive in product management. The second is what we've seen more of over the last couple years, and it's the more common definition.

**中文翻译:**
过去我有很多种描述方式，通常围绕着我接下来要说的第二部分，但我现在把它分解为两个简单的方面。第一，它是一件“你做的事”。对于副总裁、产品负责人或产品经理来说，产品运营是创建某种系统，让你或你的团队在产品管理中能够蓬勃发展。第二，是我们在过去几年中看到的更多情况，也是更常见的定义。

---

### [00:05:44] [Christine Itwaru]

**English:**
The emergence of the role itself is why it's so common. It's a person or the people, the group of individuals who are strong partners to the product manager and then for more mature product ops teams end up people being more strategic advisors to the head of products. So, your CPO or your VP again. When it comes to data, qualitative, quantitative, anything that they feel can help the CPO or the head of product make more strategic decisions and well-informed decisions.

**中文翻译:**
这个角色本身的出现就是它如此普遍的原因。它是一个人或一群人，他们是产品经理的强大伙伴；对于更成熟的产品运营团队，这些人最终会成为产品负责人（如 CPO 或 VP）的战略顾问。涉及到数据、定性分析、定量分析，以及任何他们认为能帮助 CPO 或产品负责人做出更具战略性、更明智决策的信息。

---

### [00:06:11] [Lenny]

**English:**
Got it. It feels like there's been this big inflection and emergence of the role in the past couple years, past few years. I'm curious what you think triggered that and if that's true, if it feels like it's just emerged in the last couple years and then just like why do you think that has happened?

**中文翻译:**
明白了。感觉在过去的几年里，这个角色出现了一个巨大的拐点和爆发。我很好奇你认为是什么触发了这一点？如果这确实是近几年才出现的，你认为为什么会发生这种情况？

---

### [00:06:28] [Christine Itwaru]

**English:**
This is interesting, because as a former product manager and product leader, I don't think that things are new. Absolutely. When I go back to the story about Ben, I'm like, "No, none of this stuff feels really interesting and it's just stuff that we had to deal with in product." So, the problems have always been there. I think maybe that is because I have a product background. So, I felt that pain very acutely, but I will say for the majority of people I always speak to who don't have that product background, they're coming from consulting or from technical success or from some other group marketing maybe, it does feel relatively new because they're starting to dive into that space a little bit.

**中文翻译:**
这很有趣，因为作为一名前产品经理和产品领导者，我不认为这些事情是全新的。绝对不是。当我回想起 Ben 的故事时，我觉得：“不，这些东西其实并不新鲜，只是我们在产品工作中必须处理的事情。”所以，问题一直存在。我想这可能是因为我有产品背景，所以我非常敏锐地感受到了那种痛苦。但对于我经常交谈的大多数没有产品背景的人来说——他们可能来自咨询、技术成功（Technical Success）或其他部门（如市场营销）——这确实感觉相对较新，因为他们才刚刚开始涉足这个领域。

---

### [00:07:06] [Christine Itwaru]

**English:**
But I will say that for me in particular at Pendo, it was the summer of 2019 that this really picked up and I remember a colleague of mine, shout out to Shannon. He's no longer with us, but he is one of the original people on the Pendo product team. He said, "I think this is the summer of the birth of product ops." I just started laughing and he was like, "I'm telling you, it's everywhere." All of a sudden, everybody's just like, "We need something. We need to make product better." I thought that was awesome because we had already started talking about it.

**中文翻译:**
但我要说，对我个人而言，特别是在 Pendo，是在 2019 年的夏天，这个角色真正开始火起来。我记得我的一位同事，向 Shannon 致敬（他已经不在 Pendo 了，但他是 Pendo 产品团队的元老之一），他说：“我认为这是‘产品运营诞生之夏’。”我听了就开始大笑，他说：“我告诉你，到处都是。”突然之间，每个人都在说：“我们需要一些东西，我们需要让产品变得更好。”我觉得这太棒了，因为我们之前已经开始讨论这件事了。

---

### [00:07:44] [Christine Itwaru]

**English:**
So, it took me a bit to understand what was going on across tech that was making this thing so big. I'm very grateful because we have so many great customers that reach out and say, "Help us understand how you're doing this." I'm like, "Well, help me understand what's going on." So, for me, it went beyond the problems that we would solve as a product team with the Pendo product. It went into, "How can we help you as an organization solve pain that you're feeling within your product team that trickles out to the business?"

**中文翻译:**
所以我花了一点时间去理解整个科技行业发生了什么，让这件事变得如此重要。我非常感激，因为我们有很多优秀的客户联系我们说：“帮我们理解你们是怎么做产品运营的。”我会说：“那也请帮我理解你们那边发生了什么。”所以，对我来说，这超出了我们作为产品团队使用 Pendo 产品所解决的问题。它延伸到了：“我们如何帮助你们作为一个组织，解决产品团队内部感受到的、并最终波及到业务层面的痛苦？”

---

### [00:08:07] [Lenny]

**English:**
That's interesting. That was the summer of product ops. What happened there? Why was there a summer of product ops? Why was everyone starting to get excited and creating product ops teams?

**中文翻译:**
很有趣。那是“产品运营之夏”。当时发生了什么？为什么会出现这样一个夏天？为什么每个人都开始兴奋并创建产品运营团队？

---

### [00:08:17] [Christine Itwaru]

**English:**
Yeah, I'll dive in. The customers started to come up and we started to feel it a bit more and I felt like there was this huge need for a voice of customer management and synthesis of both this qualitative and quantitative data as a theme that I saw arising across our customer base or even just folks that were reaching out about this role as they saw Pendo was putting it down. There was a lot of pain around internal alignment in general, transparency to stakeholders up across your revenue team members. Then for a lot of people during this time, growth was a massive propeller of the need for product ops. I remember just sitting here in this office and getting these random...

**中文翻译:**
好的，我来深入讲讲。客户开始提出需求，我们也开始更强烈地感受到这一点。我感觉到，在我们的客户群中，甚至在那些看到 Pendo 实践该角色后联系我们的人中，出现了一个共同的主题：对“客户之声”（Voice of Customer）管理以及定性和定量数据综合分析的巨大需求。普遍存在着关于内部对齐（Alignment）、对利益相关者（Stakeholders）以及整个营收团队（Revenue team）成员的透明度方面的痛苦。此外，对当时很多人来说，“增长”是产品运营需求的巨大推动力。我记得就坐在这个办公室里，收到这些随机的……

---

### [00:08:58] [Christine Itwaru]

**English:**
Every industry almost was like, "Yeah, I'm thinking about doing this and I really need to do this, the pandemic, blah, blah, blah." Because it was growth during the pandemic, especially within industries such as home furnishings and making their living space a whole lot better. All of a sudden, we started to see that rise, but we were all experiencing this massive amount of growth across some of these startups and really rapidly growing companies. We're also moving more towards these product-led tactics, product-led growth. All of these things I feel like made this perfect storm for product operations to come in and start calming things down.

**中文翻译:**
几乎每个行业都在说：“是的，我正在考虑做这个，我真的需要做这个，因为疫情等等原因。”因为疫情期间出现了增长，特别是在家居装饰等让居住空间变得更好的行业。突然之间，我们开始看到这种增长，但我们所有的初创公司和快速成长的公司都在经历这种爆发式增长。我们也更多地转向产品驱动策略（Product-led tactics）和产品驱动增长（PLG）。我觉得所有这些因素共同构成了这场“完美风暴”，让产品运营得以介入并开始理顺局面。

---

### [00:09:34] [Christine Itwaru]

**English:**
I personally believe there's this natural evolution that happens at any mature function when it starts to grow in an industry and across an organization. So, think about marketing or sales. This just started to happen with product managers. For me, I was sitting there going, "Well, you can appoint a PM to liaise with other ops teams and the business, but at what risk?" Their product portfolio, the growth and adoption of their product, all these goals that they have to hit today in order to build a better tomorrow for their customers. So, I feel like that was the moment to say, "Okay, how do we give them the structure that they needed to thrive?" Because the CPO is in charge of so much more than product people have historically been in charge of, right?

**中文翻译:**
我个人认为，任何成熟的职能部门在行业和组织中开始发展时，都会经历这种自然演变。想想市场营销或销售。产品经理也开始经历这个过程。对我来说，我当时坐在那里想：“你可以指派一名 PM 来负责与其他运营团队和业务部门联络，但风险是什么？”风险是他们的产品组合、产品的增长和采用，以及他们为了给客户创造更美好的明天而必须在今天达成的所有目标。所以，我觉得那是时候说：“好吧，我们如何给他们提供蓬勃发展所需的结构？”因为现在的 CPO 负责的事情比历史上产品人负责的要多得多，对吧？

---

### [00:10:17] [Christine Itwaru]

**English:**
I'll probably talk about Marty Cagan several times here. I really do admire and respect him, and I think one of the things that he always talks about is future teams versus high performing teams and focusing on outcomes. CPOs went from deliver, deliver, deliver to really increased business metrics or just help drive the bottom line versus just really look at the product. You really have to figure out what that means for the product team at large.

**中文翻译:**
我可能会在这里多次提到 Marty Cagan。我非常钦佩和尊重他，我认为他经常谈论的一件事是“功能团队”（Feature teams）与“高绩效团队”的区别，以及对“结果”（Outcomes）的关注。CPO 的职责从单纯的“交付、交付、再交付”转变为真正提升业务指标，或者帮助推动利润增长，而不仅仅是盯着产品看。你必须弄清楚这对整个产品团队意味着什么。

---

### [00:10:45] [Lenny]

**English:**
Got it. So, the way to think about this role, because I imagine most people haven't ever had a product ops person in their company is there's a slice of the PM role that companies are finding is valuable to put on a different person that has different skillsets that can take this endless load that PMs have. PMs have so many things to do and their job is so full of responsibilities that there's a sliver of stuff that a product ops person can take off. I'd be curious too and feel free to comment on that, but I'm also curious, you mentioned a few specific things that the product ops folks do.

**中文翻译:**
明白了。所以，理解这个角色的方式（因为我想大多数人的公司里从未有过产品运营人员）是：公司发现，将 PM 角色中的一部分切分出来，交给具有不同技能组合的另一个人是很有价值的，这样可以减轻 PM 身上无止境的负担。PM 有太多的事情要做，职责如此繁重，以至于有一小部分工作可以由产品运营人员来分担。我也很好奇，欢迎对此发表评论，你刚才提到了产品运营人员做的几件具体事情。

---

### [00:11:19] [Lenny]

**English:**
It'd be cool to just go through a bullet list of just those sorts of things, like you said, responsible for voice of the customer, pieces, alignment across stakeholders, whatever. If you could just go through some of those, that makes it really concrete I think for people to understand wow, this person that could have someone do all these for me, that'd be amazing.

**中文翻译:**
如果能列出一个清单就太酷了，就像你说的，负责“客户之声”、利益相关者对齐等等。如果你能详细列举一些，我想这会让大家有非常具体的认识，意识到：“哇，如果有人能帮我做这些事，那就太棒了。”

---

### [00:11:37] [Christine Itwaru]

**English:**
In some ways, I've got this question a lot from product managers who are concerned about the rise of this role or product leaders who are concerned that it was going to create some controversy or friction between product ops people and product managers. The way I've coached people to get around that is really, "What are your people responsible for? What are you holding them accountable to? Are you holding the product manager accountable to elevating these strategic insights so that they are going to elevate it to everyone else and then everyone else is going to go out there and build thing and drive the value or are you holding them accountable to truly understanding the customer in whatever way possible?"

**中文翻译:**
在某种程度上，我经常从产品经理那里听到这个问题，他们担心这个角色的兴起；或者产品领导者担心这会在产品运营人员和产品经理之间产生争议或摩擦。我指导人们解决这个问题的方法是问：“你的员工负责什么？你让他们对什么负责？你是让产品经理负责提升这些战略洞察力，以便他们将其传达给其他人，然后其他人去构建产品并驱动价值；还是你让他们负责以任何可能的方式真正理解客户？”

---

### [00:12:15] [Christine Itwaru]

**English:**
Especially going on and talking to the customer, please don't let anybody ever take that for granted. Really spending time with their engineers and the customers in order to drive a better experience. So, if they've got to spend all this time, which is our most valuable asset with those two entities, everything else still has to give. So, I think that yes, there was a point of friction, but I feel like now it's been a nice change where I'm seeing people in products saying, "No, I want to do product ops now," who was a former product manager. The second part of that, you said, let's go through the list of tactical things. Yes, voice of customer management is definitely one of the things that we're seeing more...

**中文翻译:**
特别是去和客户交谈，请永远不要让任何人认为这是理所当然的。真正花时间与工程师和客户在一起，以驱动更好的体验。如果他们必须把我们最宝贵的资产——时间——花在这两个群体上，那么其他事情就必须让位。所以，我认为是的，曾经有过摩擦点，但我觉得现在发生了一个很好的变化，我看到产品领域的人（以前是 PM）会说：“不，我现在想做产品运营。”关于你说的第二部分，让我们过一下战术层面的清单。是的，“客户之声”管理绝对是我们看到的越来越多的……

---

### [00:12:54] [Christine Itwaru]

**English:**
I don't want to say mature because then I feel like I'm seeing mature of your peak, but the ones who have matured a bit, I feel like they are focusing more on the voice of customer elements. So, quantitative analysis, qualitative, bringing all of these different inputs that would traditionally be handled by product manager through looking across the aisle at their PM or looking at different data sources to the surface when they're going through their product development lifecycle planning, and really figuring out too what that balance is. I think there's an art. You can do voice of customer in two ways.

**中文翻译:**
我不想用“成熟”这个词，因为那感觉像是在评价巅峰状态，但那些已经有一定积累的团队，我觉得他们更多地关注“客户之声”的要素。包括定量分析、定性分析，整合所有这些传统上由产品经理处理的不同输入——通过跨部门观察 PM 或查看不同的数据源，在进行产品开发生命周期（PDLC）规划时将这些信息浮出水面，并真正弄清楚平衡点在哪里。我认为这是一种艺术。你可以通过两种方式来处理“客户之声”。

---

### [00:13:27] [Christine Itwaru]

**English:**
You can do it one in this process way where you're feeding it to a really mature longstanding product team who has switchboard product or you have this voice of customer thing that you have to do for teams that are actually building something new. They're really trying to move fast, so how do you really get them what they need in order to experiment and iterate on the next thing that they're doing? That's one aspect. Another one is tooling. We see this more for folks who don't yet have tools under control in their product org. I'm not saying everybody has this, right? We had someone at one point handle whatever tools connected to Pendo and make sure that those systems are set up for maximum outcomes for the product manager.

**中文翻译:**
一种是流程化的方式，你将信息反馈给一个非常成熟、长期存在的产品团队；另一种是针对正在构建新事物的团队。他们真的想跑得很快，所以你如何真正为他们提供实验和迭代下一步工作所需的信息？这是其中一个方面。另一个方面是工具体系（Tooling）。我们看到这更多地发生在那些产品组织内部工具尚未得到有效控制的公司。我不是说每个人都有这个问题，对吧？我们曾专门派人处理与 Pendo 连接的所有工具，并确保这些系统的设置能为产品经理带来最大的产出。

---

### [00:14:10] [Christine Itwaru]

**English:**
So, Pendo's connected to Salesforce. We're connected to Looker. We're connected to all these different. So, what does the product manager need to achieve out of all those things that ultimately drives our experience for Pendo ourselves? We get very meta here. That person was responsible for that. That's all also a part of the data component. The other things that we're seeing are more of along the lines of content strategy and being really intentional about making content and education a part of the product process and the delivery process. So, taking a look at how they maximize the outcomes from the outcome that the product manager is driving so that they can help increase retention, growth, and all of that good stuff for the product.

**中文翻译:**
比如，Pendo 连接了 Salesforce，连接了 Looker，连接了所有这些不同的系统。那么，产品经理需要从这些工具中获得什么，从而最终驱动我们 Pendo 自身的体验？这听起来很“元”（meta）。那个人就负责这些。这也是数据组件的一部分。我们看到的其他事情更多是关于内容策略，并且非常有意识地将内容和教育作为产品流程和交付流程的一部分。因此，研究他们如何从产品经理驱动的结果中最大化产出，从而帮助提高产品的留存、增长以及所有这些好指标。

---

### [00:14:57] [Christine Itwaru]

**English:**
So, those are some of the things that we're seeing. Then there's also this component that happens or this piece of it that happens in the beginning when you're standing a product ops for a product team that does not have much process in and that's the process piece. That's the bit that's a bit controversial, because folks are like, "Is this just program management? Is this just a different flavor of agile?"

**中文翻译:**
所以，这些是我们看到的一些事情。此外，还有一个组成部分，或者说在为一个没有太多流程的产品团队建立产品运营初期会发生的事情，那就是“流程”部分。这是有点争议的部分，因为人们会问：“这不就是项目管理（Program Management）吗？这不就是另一种形式的敏捷（Agile）吗？”

---

### [00:15:20] [Christine Itwaru]

**English:**
So, what we're seeing is this, what are these folks doing? Are they managing and facilitating the product development lifecycle? Are they doing things with the rest of the organization? So I feel like this one's a little bit up in the air. Some are actually agile facilitators as well, but I am seeing emergence of some companies that have the program management team under the product's umbrella to help with this massive amount of things that they have to manage across the board.

**中文翻译:**
所以，我们看到的是：这些人到底在做什么？他们是在管理和促进产品开发生命周期吗？他们是在与组织的其余部分协作吗？我觉得这一点还有点不确定。有些人实际上也是敏捷促进者（Agile facilitators），但我看到一些公司开始将项目管理团队放在产品部门的伞下，以帮助处理他们必须全面管理的海量事务。

---

### [00:15:49] [Lenny]

**English:**
Oh, that's a really interesting point on the last piece. I want to dig in on that a little bit just to summarize what you shared. So, some of the key roles of a product ops person, there's this voice of customer element and just to understand what you mean by that. The team is aggregating feedback from customers and feedback from the customer support and sales and things like that and sharing it with the product manager to give them clear conclusions and takeaways so that the PM doesn't have to sit there and filter their data. Is that a way to think about it?

**中文翻译:**
哦，最后一点非常有趣。我想深入探讨一下，顺便总结一下你分享的内容。所以，产品运营人员的一些关键职责包括：首先是“客户之声”要素。为了理解你的意思，这个团队是否在汇总来自客户、客户支持、销售等渠道的反馈，并将其分享给产品经理，提供清晰的结论和要点，这样 PM 就不必亲自坐在那里过滤数据了？可以这样理解吗？

---

### [00:16:19] [Christine Itwaru]

**English:**
That's one part of it. We actually developed this really cool way of doing it here at Pendo, which is the transparency is a word that we love here. What we found that there was just not this need for the revenue org to be transparent and say, "Hey, this is what we're hearing. Product people, please listen," or vice versa. Here's what we're doing for your customer. There was this interesting moment where we realized that our sales team was screaming for something and our success team was screaming for something else, but [inaudible 00:16:46] looking at something else. So, they're all wonderful relevant things that our customers wanted, but we were like, "What if they're aware that they've got all these amazing things and they're talking about it separately?"

**中文翻译:**
这只是其中一部分。我们在 Pendo 开发了一种非常酷的方法，“透明度”是我们这里非常喜欢的一个词。我们发现，营收部门（Revenue org）过去并不觉得有必要保持透明并说：“嘿，这是我们听到的反馈，产品部的同事请听一下”；反之亦然，“这是我们为你们的客户所做的”。有一个有趣的时刻，我们意识到销售团队在呼吁某件事，成功团队（Success team）在呼吁另一件事，而产品部却在关注别的事情。这些都是客户想要的、非常棒且相关的事情，但我们想：“如果他们意识到自己手里有这么多好东西，却在分开讨论，那该怎么办？”

---

### [00:16:59] [Christine Itwaru]

**English:**
Our PMs, they would get the whole readout with us, but we brought those folks in a room together. It was really cool because I think our head of professional services team at one point was like, "Whoa, this could truly impact what we do from an onboarding perspective and now we have this data. Then how do we then strengthen this area and the product?" So, it wasn't just about the components. So, I don't know if other companies are doing it like that, but I was very proud of the way we ended up doing that here. But the PM got risk data, high-priority deals, feedback from our feedback product. What are we hearing from prospects versus paying customers. What segments are saying what?

**中文翻译:**
我们的 PM 会和我们一起听取完整的汇报，但我们将这些人聚在一个房间里。这真的很酷，因为我记得我们的专业服务团队负责人曾感叹：“哇，这真的会影响我们从入职培训（Onboarding）角度所做的工作，现在我们有了这些数据。那么我们该如何加强产品中的这个领域呢？”所以，这不仅仅是关于各个组件。我不知道其他公司是否也这样做，但我对我们最终在这里实现的方式感到非常自豪。PM 得到了风险数据、高优先级订单、来自我们反馈产品的反馈。我们从潜在客户和付费客户那里分别听到了什么？不同的细分市场在说什么？

---

### [00:17:35] [Christine Itwaru]

**English:**
All that stuff got fed over to the PM and then validated through our research team or disputed through our research team, which was really cool. This is a really good partnership with our research team. But on the other side, what was really nice too was we were able to educate our revenue team on behalf of the product team and say, "Guys, not everything requires a product change." So if you're saying there's customers that have friction around this one area of this product, maybe it's enabling. Maybe it's something that we need to help you guys understand a little bit better so that you can make their experience better or maybe we need to help update. It's just very simple things like that that just ended up coming up this voice of customer process.

**中文翻译:**
所有这些信息都反馈给了 PM，然后通过我们的研究团队进行验证或质疑，这非常酷。这是与我们研究团队的一次非常好的合作。但另一方面，非常棒的一点是，我们能够代表产品团队去教育我们的营收团队，告诉他们：“伙计们，并不是所有事情都需要修改产品。”所以，如果你说客户在产品的某个领域遇到了阻碍，也许这只是赋能（Enabling）的问题。也许我们需要帮你们更好地理解某些东西，这样你们就能改善他们的体验；或者也许我们需要更新文档。在“客户之声”流程中，最终出现的就是这类非常简单的事情。

---

### [00:18:15] [Lenny]

**English:**
So essentially, it's just finding ways to make the PM more focused and allow them to focus on the things they want to focus on and reduce workload. On the user research piece, so it feels like there's user research coming in. PMs are involved, user research. There's a research team. Where does the product ops team fit in there or is it focused on internal alignment, stakeholder feedback more versus external customer feedback?

**中文翻译:**
所以本质上，就是寻找方法让 PM 更加专注，让他们能够专注于自己想做的事情并减轻工作量。关于用户研究（User Research）部分，感觉会有用户研究数据进来，PM 会参与其中，还有一个专门的研究团队。那么产品运营团队在其中扮演什么角色？它是更侧重于内部对齐和利益相关者反馈，还是更侧重于外部客户反馈？

---

### [00:18:41] [Christine Itwaru]

**English:**
Yeah. Again, I'll say these probably several times. Every company's doing it in their own little bit of flavor. I'll tell you that here and from a couple companies that I'm seeing outside of Pendo, our user research team sits with our UX team. They report into our head of UX and they are responsible for proactive research and making sure that we are aligning to our strategy and saying, "Okay, here's what our folks are saying. Here's why we're going after this market or this new thing that we're doing. Let's start going out there and validating or checking with some of these key personas and what we need to do." Then they are also a part of the ongoing development process or product development process.

**中文翻译:**
是的。我可能会多次提到这一点：每家公司都有自己的特色。在 Pendo 以及我在外面看到的几家公司中，我们的用户研究团队与 UX（用户体验）团队坐在一起。他们向 UX 负责人汇报，负责主动研究，确保我们与战略保持一致，并说：“好吧，这是大家在说的。这是我们为什么要进军这个市场或做这件新事的原因。让我们开始去验证，或者找一些关键画像（Personas）核实一下我们需要做什么。”然后，他们也是持续开发流程或产品开发流程的一部分。

---

### [00:19:21] [Christine Itwaru]

**English:**
So, testing stuff out, making sure that they're doing user interviews, and all that good stuff. So, they sit as a partner to us. We work very closely together. Again, I'll give you that example of voice of customer, which is we have all of this input coming in from our customer success or post-sales teams and we know we're about to invest in our guides area of the product. We have all of these. What do we do with it? Well, we couple that with I'm personal responsible for NPS or I was for a very long time. I'm seeing a lot of noise around guides.

**中文翻译:**
比如测试产品，确保进行用户访谈等等。所以，他们是我们的合作伙伴，我们合作非常紧密。再举那个“客户之声”的例子：我们收到了来自客户成功或售后团队的所有这些输入，而我们知道我们即将投资产品的“指南”（Guides）功能区。我们有了这些信息，该怎么办？我们会将其与 NPS（净推荐值）结合起来——我个人负责 NPS 已经很长时间了。我看到很多关于“指南”功能的反馈噪音。

---

### [00:19:52] [Christine Itwaru]

**English:**
So, I take all of that, we pull it all together, and we give it to our head of research and say, "All right. Let's all make sense of all this together. Is this something that is in line with the direction that the product team is going, the guides team, or is this something that we're going to need to dig a little bit more into to see if their efforts right now where they're growing are not where there should be going?"

**中文翻译:**
所以我把所有这些信息汇总起来，交给我们的研究负责人说：“好了，让我们一起来理清这些。这是否符合产品团队（指南团队）的发展方向？还是说我们需要进一步挖掘，看看他们目前的增长努力是否偏离了应有的轨道？”

---

### [00:20:10] [Lenny]

**English:**
The other two bullet points, just to make sure I totally understand, you help with tooling. The product ops teams help, just optimize the tooling to build product. Is that a simple way to think about it, just make sure the product development process is efficient?

**中文翻译:**
另外两个要点，为了确保我完全理解：你们协助工具体系（Tooling）。产品运营团队帮助优化构建产品的工具。可以简单地理解为，确保产品开发流程是高效的吗？

---

### [00:20:24] [Christine Itwaru]

**English:**
Yeah, we partner with the program management team and the tools that they use for product development stuff. I would say it's more, "What are the things that the product manager needs in order to be successful?" So, we look at Pendo, right? We do use our own product like I mentioned quite a lot. Salesforce is another thing, so how does that all plug into our own product and what data are we looking to get out of there? So, our PMs have a complete picture in Pendo. Tray is another one I mentioned. Zapier was another one that we had used. So, it's more about the PM's tool stack versus the PM's planning tool stack if you want to draw that distinction.

**中文翻译:**
是的，我们与项目管理团队合作，协助他们用于产品开发的工具。我会说这更多是关于：“产品经理为了成功需要哪些东西？”所以，我们看 Pendo，对吧？正如我提到的，我们经常使用自己的产品。Salesforce 是另一个工具，那么它如何接入我们自己的产品，我们想从中获取什么数据？这样我们的 PM 就能在 Pendo 中看到全貌。Tray 是我提到的另一个，Zapier 也是我们用过的。所以，如果你想做区分的话，这更多是关于“PM 的工具栈”，而不是“PM 的规划工具栈”。

---

### [00:20:59] [Lenny]

**English:**
Got it. Okay. That is helpful. Then content strategy, by that, you mean internal documentation to train sales and customer support or is there also help the product team build out product marketing content and things like that?

**中文翻译:**
明白了。这很有帮助。关于“内容策略”，你是指用于培训销售和客户支持的内部文档，还是也包括帮助产品团队构建产品市场营销（Product Marketing）内容之类的事情？

---

### [00:21:13] [Christine Itwaru]

**English:**
Neither or a bit. I guess what we have done is fed into both of those technical documentation. We use Zendesk as another tool, so we use Zendesk as another part of our tool stack to support our customers. So, a brand new feature comes out. Natural thing to do, let's write up this thing in Zendesk, but it's also about how we weave education into the product and we use Pendo again. Sorry, that's all right. It's actually really good tool. So, we do use Pendo guides and we just release our NPS themes. So, a pain in my team's butt has been manual labor around NPS themes and qualitative data. So, we designed this experience for customers who are in this beta. So, that they can in the product understand what it is.

**中文翻译:**
两者都不是，或者说都有一点。我想我们所做的是为这两类技术文档提供输入。我们使用 Zendesk 作为另一个工具，它是我们支持客户的工具栈的一部分。当一个全新的功能发布时，很自然地，我们会在 Zendesk 中写好说明。但这也关乎我们如何将教育内容织入产品中，这里我们又用到了 Pendo（抱歉，但这确实是个好工具）。我们使用 Pendo 的“指南”功能，我们刚刚发布了 NPS 主题。我团队的一个痛点一直是围绕 NPS 主题和定性数据的手工劳动。所以，我们为参与测试的客户设计了这种体验，让他们在产品内部就能理解这是什么。

---

### [00:21:59] [Christine Itwaru]

**English:**
Then if they really need more, they can go out to the technical documentation, but it's about the education for the customer. I mentioned earlier treating content is a part of the development lifecycle process. You really want to treat it as a part of definition of done. When you think about product-led growth and the emergence of that in particular over the last couple years, it's all about creating that experience and keeps people in and helps them upgrade. So, they work alongside product marketing to develop these playbooks for what they're doing in app to create less friction and drive more engagement.

**中文翻译:**
如果他们真的需要更多信息，可以去查阅技术文档，但核心是针对客户的教育。我之前提到过，要将内容视为开发生命周期流程的一部分。你真的应该把它看作“完成的定义”（Definition of Done）的一部分。当你想到产品驱动增长（PLG）以及它在过去几年的兴起时，核心就是创造那种能留住用户并帮助他们升级的体验。因此，产品运营会与产品市场营销（PMM）合作，制定应用内操作的“剧本”（Playbooks），以减少摩擦并驱动更多参与。

---

### [00:22:36] [Lenny]

**English:**
Got it. Okay, that makes a lot more sense. Would it be safe to say that product ops is essentially for B2B companies where there's all these internal stakeholders, sales, customer support, marketing, things like that and that's the work that you can take off the product manager's plate?

**中文翻译:**
明白了。好，这更有道理了。是否可以认为，产品运营本质上是为 B2B 公司准备的？因为 B2B 公司有这么多内部利益相关者（销售、客户支持、市场等），而这些正是你可以从产品经理手中接管的工作？

---

### [00:22:53] [Christine Itwaru]

**English:**
My personal experience and I think a lot of people would agree with me has led me to believe that's not accurate. It's emerged a lot more in B2B or I think we've seen it a lot more in B2B or at least people talking about it. I'm curious as to why and I wonder if it's because we're sharing because we're all trying to go through this thing together serving each other and then the other is serving the customer. So, it's not like, "Hey, you helped me figure this thing out." I understand I was so lucky and I still am so lucky to work with so many people in my network, in our customer base to help them understand the role or determine whether they even needed this thing or not.

**中文翻译:**
我的个人经验（我想很多人也会同意我的看法）让我相信这种说法并不准确。它在 B2B 领域出现得更多，或者说我们看到更多 B2B 的人在讨论它。我很好奇为什么，我在想是不是因为我们在分享经验，因为我们都在尝试一起经历这件事，互相服务，同时也服务于客户。这不只是“嘿，你帮我搞定了这件事”。我很幸运，现在依然很幸运能与我的人脉网和客户群中的这么多人合作，帮助他们理解这个角色，或者判断他们是否真的需要这个东西。

---

### [00:23:28] [Christine Itwaru]

**English:**
Without calling out names, there were some really big companies in retail and finance and some industries that you would not expect who are B2C, larger, well established companies who we all know and love and maybe not even love. Maybe the experience is bad for us. So, they also do have a lot more cross-functional engagement internally than we would even think of. So, I don't know if it's because we're used to this world and we haven't thought about that side of it, but it's really interesting. I think the common thread is the cross-functional transparency and then transparency out to the customer.

**中文翻译:**
不点名地说，零售、金融以及一些你意想不到的行业中，有一些非常大的 B2C 公司，那些我们熟知且喜爱的（或者可能并不喜爱，体验很差的）大型老牌公司。他们内部的跨职能互动也比我们想象的要多得多。所以我不知道是不是因为我们习惯了 B2B 这个圈子，而没有考虑到那一面，但这真的很有趣。我认为共同点是“跨职能的透明度”，以及对客户的透明度。

---

### [00:24:04] [Christine Itwaru]

**English:**
So, I mentioned transparency is a big word for us, but readiness is another one and so readiness means a lot. You have your teams you need to get ready internally, but you really need to get customers ready for something new as well and everybody needs to feel aligned. So, it plays a massive part in what the product manager and the product team needs to consider, advocate for, deliver, and communicate about, I feel like no matter the size or industry.

**中文翻译:**
所以我提到“透明度”对我们来说是个大词，但“就绪度”（Readiness）是另一个。就绪度意义重大。你需要让内部团队做好准备，但也真的需要让客户为新事物做好准备，每个人都需要感到步调一致。所以我觉得，无论公司规模或行业如何，这在产品经理和产品团队需要考虑、倡导、交付和沟通的事情中都占有举足轻重的地位。

---

### [00:24:28] [Lenny]

**English:**
I imagine a lot of PMs listening to this have this two minded view right now of on the one hand, somebody could take all his work off my plate. That's awesome. On the other, it's like, "Oh, okay, there's another stakeholder that have loop into every meeting and they're going to be doing this work that's cool and important that I'm not going to get to do anymore." That's weird. What have you found is the best way to convince a PM to this is like, "Wow, this would make your life so much better"?

**中文翻译:**
我能想象很多听众中的 PM 现在可能有两种心态：一方面，有人能把我所有的这些琐事接过去，太棒了；另一方面，又觉得“哦，好吧，又多了一个利益相关者要拉进每个会议，而且他们要做这些很酷、很重要、但我以后再也不能亲手做的工作了”。这感觉怪怪的。你发现说服 PM 接受“哇，这会让你的生活变得更好”的最佳方式是什么？

---

### [00:24:54] [Christine Itwaru]

**English:**
Yeah, I go back to that question that I have asked leaders when helping them stand this up, which is what are you looking at your PMs to drive and how are you measuring their success? That generally just helps everybody get on the same page really quickly. I've had customers or I've had folks come to me in the product community that say, "I've tried this and it's just not going anywhere." There's resistance to the role because they feel like it's stepping on too many toes and whatnot. Generally, I will tell you it's because they still have a bit of buying in the top to get done.

**中文翻译:**
是的，我回到了我在帮助领导者建立这个职能时问过的问题：你希望你的 PM 驱动什么？你如何衡量他们的成功？这通常能帮助每个人迅速达成共识。我遇到过客户或产品社区的人对我说：“我尝试过这个，但毫无进展。”人们对这个角色有抵触情绪，因为他们觉得这踩到了太多的地盘等等。通常，我会告诉你，这是因为他们仍然需要获得高层的认可。

---

### [00:25:32] [Christine Itwaru]

**English:**
I'm seeing that the most successful ones that are drawing the lines and showing that this role is valuable are the people that have their buy-in from their CEO or CPO at that level or their head of product and saying, "Hey, this is what this role means for you." So, I don't know if it's because we're used to this world and we haven't thought about that side of it, but it's really interesting. I think the common thread is the cross-functional transparency and then transparency out to the customer.

**中文翻译:**
我看到那些最成功的、能够划清界限并展示该角色价值的人，都是那些获得了 CEO、CPO 或产品负责人认可的人，他们会说：“嘿，这个角色对你意味着什么。”所以，我不知道是不是因为我们习惯了这个圈子而没考虑那一面，但这很有趣。我认为共同点是跨职能的透明度，以及对客户的透明度。

---

### [00:26:17] [Lenny]

**English:**
What are a couple bullet points that are most effective to convince a product leader product op is going to make a big impact and benefit you and then just an ICPM who's like, "I don't want this person on my team"? What actually works there to get buy-in?

**中文翻译:**
有哪些要点最能有效说服产品领导者“产品运营将产生巨大影响并让你受益”？以及如何说服一个觉得“我不想要这个人加入我团队”的普通 PM（ICPM）？到底什么方法能获得他们的认可？

---

### [00:26:31] [Christine Itwaru]

**English:**
Yeah. Number one, do you want your PMs to constantly be fielding questions from your revenue team when they could be spending time with customers? Yeah, you're shaking your head. That one seems to be the one.

**中文翻译:**
好的。第一，你是否希望你的 PM 总是忙于回答营收团队的问题，而本可以把这些时间花在客户身上？看，你在摇头。这一条似乎最管用。

---

### [00:26:43] [Lenny]

**English:**
Yeah. Yeah, that's a good one.

**中文翻译:**
是的，没错，这很有说服力。

---

### [00:26:44] [Christine Itwaru]

**English:**
Yeah, I can count on one hand the companies who have blocked their product managers from speaking to customers and those companies are not product companies. I mean they do not believe in product management. They might say they do, but they don't. So, that's number one. Number two is how are you measuring your outcomes and where are you making this all transparent? Is this happening consistently across the board? So, one probably seeing product teams across so many different places is you might have somebody who's really passionate and really good at doing this stuff for their own vertical and then it doesn't scale.

**中文翻译:**
是的，我一只手就能数出那些阻止产品经理与客户交谈的公司，而那些公司根本不是“产品型公司”。我的意思是，他们不相信产品管理。他们可能口头上说相信，但实际上并不。所以这是第一点。第二点是，你如何衡量你的结果，以及你在哪里让这一切变得透明？这在整个公司范围内是否一致？你在很多地方都能看到产品团队的情况是：你可能有一个人对自己的垂直领域非常有激情且擅长做这些事，但这种做法无法规模化。

---

### [00:27:20] [Christine Itwaru]

**English:**
So, how are you doing this at scale so that your stakeholders are building this trust in you and making sure that they get the best out of the product team at any given turn? I say those are the two bullet points that seem to stick the most is that quality time, giving the PM what they need, which is their time to be able to drive the outcomes for the customer.

**中文翻译:**
那么，你如何规模化地做到这一点，以便你的利益相关者建立对你的信任，并确保他们在任何时候都能从产品团队那里获得最佳产出？我说这两点似乎最能打动人：一是保证高质量的时间，二是给 PM 他们最需要的东西——也就是让他们有时间去为客户驱动结果。

---

### [00:27:41] [Lenny]

**English:**
What is it that you think a PM will never offload, if that makes sense? In your perspective, what's like the core of a PM's role versus maybe product ops for now and then maybe potentially other roles that take off some of the stuff on their plate?

**中文翻译:**
你认为 PM 永远不会卸下的工作是什么？在你的观点中，PM 角色的核心是什么？相比之下，产品运营（以及未来可能出现的其他角色）会分担哪些工作？

---

### [00:27:57] [Christine Itwaru]

**English:**
Speaking as a former PM, I would not ever give up spending time with customers and watching their pain. That sounds really bad to customers. I'm sorry. That's how I fell in love with product was I saw my internal customer 10, 12 years back now fighting with the keyboard, fighting with the mouse. I was just like, "Oh, my gosh. What's this guy doing?"

**中文翻译:**
作为一名前 PM，我永远不会放弃花时间与客户相处并观察他们的痛苦。这对客户来说听起来可能不太好，抱歉。但我就是这样爱上产品的——10、12 年前，我看到我的内部客户在跟键盘和鼠标“搏斗”。我当时想：“天哪，这家伙在干什么？”

---

### [00:28:23] [Christine Itwaru]

**English:**
I think it was an experience that some people might say, "Oh, I never want to be in that situation again because it made me feel very uncomfortable that my product is not doing for this person what it needs to," but for me, it was, "How do I make this thing do what it needs to for this gentleman? How do I make this thing better?" I cannot see product managers saying, "I don't want to be a part of that conversation." Then you know what? I'm going to say it then don't be in product.

**中文翻译:**
我想那次经历可能会让某些人觉得：“哦，我再也不想陷入那种境地了，因为看到我的产品没能满足那个人的需求让我感到非常不舒服。”但对我来说，那是：“我该如何让这个东西满足这位先生的需求？我该如何让它变得更好？”我无法想象产品经理会说：“我不想参与那样的对话。”如果是那样，那我就直说了：那就别做产品了。

---

### [00:28:50] [Lenny]

**English:**
Love it. Yeah. I'm so curious what parts of the role get sliced off over time because I love that. That's the core of it is just build great products that your customers want and use and want to pay for. Then what else can people help you with along the side? Because yeah, PM role is just crazy. There's so many things going on.

**中文翻译:**
太赞了。我很想知道随着时间的推移，这个角色的哪些部分会被切分出去。我喜欢你说的核心：就是构建客户想要、会使用并愿意付费的伟大产品。除此之外，别人还能在旁边帮你做些什么？因为 PM 这个角色确实太疯狂了，有太多的事情在同时发生。

---

### [00:29:06] [Christine Itwaru]

**English:**
It's crazy how this article that I wrote, I dug into the history of product management and it's like 100 years old not in its current form, but it's about 100 years old and just the evolution of what product managers have historically been responsible for. Then if you think about just really sit down and think about what the world has turned into today and how much noise we have coming at us. We talked about put yourself onto not disturb mode and I learned a long time ago, put myself onto disturb mode. So, imagine having a partner that helps you filter that noise.

**中文翻译:**
这很疯狂。我写过一篇文章，挖掘了产品管理的历史，它大约有 100 年的历史了（虽然不是现在的形式），以及产品经理在历史上负责内容的演变。如果你真的坐下来思考一下当今世界变成了什么样子，以及我们面临着多少噪音。我们谈到过让自己进入“免打扰模式”，而我很久以前就学会了把自己调成“免打扰”。所以，想象一下有一个伙伴能帮你过滤掉那些噪音。

---

### [00:29:44] [Lenny]

**English:**
Yeah, quite useful. Along those lines, I was going to go in a different direction, but as you mentioned that, there's all these roles adjacent to PM. There's program managers, project managers, agile product owners, and all and then now product ops. I guess before team has product ops, let me just ask this one straightforward question. Which of those roles generally does the thing that product ops can do for you? Is it the PM or is it one of these other roles?

**中文翻译:**
是的，非常有用。顺着这个思路，我本来想换个方向，但既然你提到了，PM 周边有很多角色：项目经理（Program Manager）、项目经理（Project Manager）、敏捷产品负责人（Agile Product Owner）等等，现在又有了产品运营。我想在团队拥有产品运营之前，让我问一个直接的问题：通常是哪个角色在做产品运营能为你做的事？是 PM 还是其他角色之一？

---

### [00:30:11] [Christine Itwaru]

**English:**
It's a PM. It's PM. Yeah, it's a PM and then I would say, because what I'm seeing in less mature product orgs who first bring in product ops, the first thing they ask them to do is streamline the planning process. So, I would say it's a PM and maybe the agile. That's probably what it is today. I feel like program management and agile are starting to get a little bit close to each other in what they do. So, it's most of the PM stuff because we're doing elements of their job that they have off to the side versus being able to focus on. But again, in lesser mature orgs, the first thing is, "How do I actually just get the people to plan the same way and give me the thing that they're planning and doing?"

**中文翻译:**
是 PM。没错，就是 PM。然后我会说，因为我在那些刚引入产品运营的、不太成熟的产品组织中看到，他们要求产品运营做的第一件事就是简化规划流程。所以，我会说是 PM，可能还有敏捷教练。目前的情况大概就是这样。我觉得项目管理和敏捷在职责上开始变得有点接近。所以，大部分是 PM 的工作，因为我们在做他们原本不得不分心去做的那些边缘工作，好让他们能专注核心。但再说一次，在不太成熟的组织中，首要任务是：“我如何让大家以同样的方式进行规划，并把他们正在规划和执行的东西交给我？”

---

### [00:31:07] [Lenny]

**English:**
That's interesting, what you said there, that maybe often a wedge to a product ops person joining their company maybe as a first product ops person is the planning, helping with the planning process. Is that what you find?

**中文翻译:**
很有趣，你刚才说，产品运营人员加入公司（可能是作为第一个产品运营人员）的切入点通常是规划，即协助规划流程。这是你的发现吗？

---

### [00:31:20] [Christine Itwaru]

**English:**
It could be. The only thing that distinguishes product operations folks from program managers and agile is that product operations people know, understand the product, the customer, and the inner workings of the business.

**中文翻译:**
可能是这样。将产品运营人员与项目经理或敏捷教练区分开来的唯一一点是：产品运营人员了解并理解产品、客户以及业务的内部运作机制。

---

### [00:31:54] [Lenny]

**English:**
Cool. Yeah, Marty Cagan has some hot takes there about how product owners are never going to be great product managers. They don't really understand the customer needs and building product in any way. That's a whole other topic. I want to talk about the career path, but before we get there, I want to go in a spicy direction. So, Casey Winners, he is a guest on this podcast at one point. He wrote this hot take many years ago about this premise that operations in general often is a Band-Aid for inefficiency at a company.

**中文翻译:**
酷。是的，Marty Cagan 对此有一些激进的看法，比如产品负责人（Product Owners）永远不会成为伟大的产品经理，因为他们并不真正理解客户需求和产品构建。那是另一个话题了。我想聊聊职业路径，但在那之前，我想聊个劲爆点的话题。Casey Winters 曾是本播客的嘉宾，他多年前写过一篇犀利的文章，前提是：通常情况下，运营（Operations）往往是公司效率低下的“创可贴”。

---

### [00:32:41] [Christine Itwaru]

**English:**
Yes, I remember this. I'll address that inefficiency comment first, right? I mentioned a little bit earlier as roles in any industry or I guess any role matures like marketing or sales, this ops thing ends up being this natural progression. It's not just because the role itself is maturing. It's also because the org is maturing. So, what I found and what I'm finding with customers is that ops alignment across companies is what often ends up keeping the companies moving and keeping everybody aligned. So, to say ops teams are generally a sign of inefficiency or the need for them is a sign of inefficiency is not always accurate, it's generally a sign of growth and opportunity.

**中文翻译:**
是的，我记得这个。我先回应一下关于“效率低下”的评论。我之前提到过，随着任何行业中角色的成熟（比如市场或销售），“运营”职能的出现是一种自然演进。这不仅是因为角色本身在成熟，也是因为组织在成熟。我发现，并且在客户身上也看到，公司内部的运营对齐往往是维持公司运转并让每个人保持步调一致的关键。所以，说运营团队通常是效率低下的标志，或者对它们的需求是效率低下的标志，并不总是准确的。这通常是增长和机遇的标志。

---

### [00:33:21] [Christine Itwaru]

**English:**
People are really just trying to stay in aligned and do the best for the people that are doing the thing, the product managing, the marketing, the selling within that org. Overall though, I will say I will agree with his points about getting in and maybe giving it off and using humans for other things. I wrote something recently and I highlighted something that he mentions here in this article and what he mentioned on your podcast, which is we as product ops want to and should be standing up whatever processes or systems are needed and then get out of the way so we can focus on driving more strategic value.

**中文翻译:**
人们只是想保持一致，并为组织中那些真正做事的人（做产品管理、做市场、做销售的人）提供最好的支持。不过总的来说，我同意他的观点，即进入某个领域，建立系统，然后放手，让人力去处理其他事情。我最近写了一篇文章，强调了他在文章中以及在你的播客中提到的一点：作为产品运营，我们想要并且应该建立起所需的任何流程或系统，然后“功成身退”，这样我们才能专注于驱动更多的战略价值。

---

### [00:33:58] [Christine Itwaru]

**English:**
I keep mentioning that more mature product ops folks end up being a very good strategic advisor to leaders in product and to the product teams and that continues to be my belief. From day one, this has been my own personal goal for myself and for my team. I myself recently switched roles here at Pendo because I did what I said I was going to do, which was stand up the system, stand up the things that we knew we needed to do that were going to either be given off to another team or automated and then get the rest of the humans that are here to do the other strategic things for the product team.

**中文翻译:**
我一直提到，更成熟的产品运营人员最终会成为产品领导者和产品团队非常优秀的战略顾问，这一直是我的信念。从第一天起，这就是我个人以及我团队的目标。我本人最近在 Pendo 调换了角色，因为我已经完成了我承诺要做的事：建立系统，建立那些我们知道必须做的事情（这些事情要么移交给另一个团队，要么被自动化），然后让剩下的同事去为产品团队做其他战略性的事情。

---

### [00:34:34] [Christine Itwaru]

**English:**
Some of those are, "How do we increase retention? Like I mentioned, how do we focus on growth in this one area? How do we make the experience better in app? How do we do a better voice of customer management?" My energy now at Pendo is I'm able to now go towards more impactful things for not just the product team and the product community, but for our customers at large. So, I'm basically saying, "Look, I did what I needed to do and I'm ready to go."

**中文翻译:**
其中一些事情包括：“我们如何提高留存？正如我提到的，我们如何专注于这一个领域的增长？我们如何改善应用内体验？我们如何更好地进行‘客户之声’管理？”我现在在 Pendo 的精力能够投入到对产品团队、产品社区乃至广大客户更有影响力的事情上。所以，我基本上是在说：“看，我已经完成了我该做的事，我准备好迎接下一步了。”

---

### [00:34:56] [Christine Itwaru]

**English:**
So I think that's something though that people need to be very, very comfortable with, very comfortable with. If you change course and change your tune two, three years into doing this and you built this team, you're like, "Here's what you're doing, manage this process," people are going to lose their mind. Change is constant, but telling someone, "I no longer need you to do that," it makes them a little bit nervous. So, for years when I was interviewing folks from my team, I made that one point abundantly clear to them, get into this role if you're comfortable letting go of things and moving on to something that is well worth your time. The company's going to change.

**中文翻译:**
所以我认为，这是人们需要非常、非常适应的一点。如果你在做了两三年之后改变航向和基调，你建立了这个团队，然后说：“这就是你们要做的，管理这个流程”，人们会疯掉的。变化是常态，但告诉某人“我不再需要你做那件事了”，会让他们感到紧张。所以，多年来我在面试团队成员时，都会向他们明确说明一点：如果你能坦然放下旧事务并转向更值得投入时间的新事物，那么就进入这个角色。公司是会改变的。

---

### [00:35:36] [Christine Itwaru]

**English:**
Our process is going to need to be tweaked. The company is going to change. Something's going to need to be automated. We're going to need to cut something else. Maybe ChatGPT is going to make things very clear that humans are not always going to be doing the same things and we need to focus our energy elsewhere, but people do need to get comfortable with that role.

**中文翻译:**
我们的流程需要调整。公司会改变。有些东西需要自动化。我们需要削减其他一些东西。也许 ChatGPT 会让事情变得非常清晰——人类不会永远重复同样的工作，我们需要将精力集中在其他地方。但人们确实需要适应这种角色定位。

---

### [00:35:54] [Lenny]

**English:**
I love that take. Generally, I think it aligns with what Casey's saying. What I'm hearing is you may be a product person today doing a bunch of stuff. Your job in a sense should be to automate as much of that as you can and find more strategic higher level things you could be doing instead of sitting there connecting Salesforce to Zendesk and maintaining that. It'd be great in customer feedback in theory. That could be a tool that could do that for you. That's part of the job. Is that roughly what you're saying?

**中文翻译:**
我喜欢这个观点。总的来说，我认为这与 Casey 的说法是一致的。我的理解是：你今天可能是一个做着一堆杂事的产品人，从某种意义上说，你的工作应该是尽可能地将这些事情自动化，并寻找你可以做的更具战略性、更高层次的事情，而不是坐在那里连接 Salesforce 和 Zendesk 并维护它。理论上，处理客户反馈应该很棒，但那应该是工具帮你做的事。这是工作的一部分。你大概是这个意思吗？

---

### [00:36:24] [Christine Itwaru]

**English:**
That's exactly what I'm saying.

**中文翻译:**
正是如此。

---

### [00:36:24] [Lenny]

**English:**
This episode is brought to you by Vanta, helping you streamline your security compliance to accelerate growth. If your business stores any data in the cloud, then you've likely been asked or you're going to be asked about your SOC 2 compliance. SOC 2 is a way to prove your company's taking proper security measures to protect customer data and builds trust with customers and partners, especially those with serious security requirements. Also, if you want to sell to the enterprise, proving security is essential. SOC 2 can either open the door for bigger and better deals or it can put your business on hold. If you don't have a SOC 2, there's a good chance you won't even get a seat at the table.

**中文翻译:**
本期节目由 Vanta 赞助，帮助你简化安全合规流程以加速增长。如果你的业务在云端存储任何数据，那么你很可能被问到或即将被问到 SOC 2 合规性。SOC 2 是证明你的公司采取了适当安全措施来保护客户数据的一种方式，它能建立客户和合作伙伴的信任，尤其是那些有严格安全要求的客户。此外，如果你想向企业销售产品，证明安全性至关重要。SOC 2 既能为你打开更大、更好交易的大门，也可能让你的业务停滞不前。如果你没有 SOC 2，很有可能你连谈判桌都上不了。

---

### [00:37:03] [Lenny]

**English:**
Beginning a SOC 2 report can be a huge burden, especially for startups. It's time-consuming, tedious, and expensive. Enter Vanta. Over 3,000 fast-growing, companies use Vanta to automate up to 90% of the work involved with SOC 2. Vanta can get you ready for security audits in weeks instead of months, less than a third of the time that it usually takes. For a limited time, Lenny's Podcast listeners get $1,000 off Vanta. Just go to vanta.com/lenny. That's V-A-N-T-A.com/lenny to learn more and to claim your discount. Get started today.

**中文翻译:**
开始一份 SOC 2 报告可能是一个巨大的负担，尤其是对于初创公司。它耗时、乏味且昂贵。Vanta 应运而生。超过 3000 家快速增长的公司使用 Vanta 来自动化高达 90% 的 SOC 2 相关工作。Vanta 可以在几周内而不是几个月内让你做好安全审计准备，耗时不到通常时间的三分之一。在限定时间内，Lenny 播客的听众可以享受 Vanta 1000 美元的优惠。只需访问 vanta.com/lenny。即 V-A-N-T-A.com/lenny 了解更多信息并领取折扣。今天就开始吧。

---

### [00:37:40] [Lenny]

**English:**
Zooming out a little bit and building on the stuff we've been just talking about, what would you say are just signs that your company would benefit from a product ops team and that you're a fit for building a product ops team?

**中文翻译:**
稍微放大一点视角，基于我们刚才讨论的内容，你认为哪些迹象表明公司能从产品运营团队中获益，以及你适合组建产品运营团队？

---

### [00:37:51] [Christine Itwaru]

**English:**
I touched on this quite a bit, but that lack of transparency in many directions across, down. Sometimes people are on very transparent about, "Hey, this came up in planning and here's what we need to do." So it's relevant for stakeholder management, getting stuck out to customers, internal teams, and making sure they're aligned, revenue teams in particular.

**中文翻译:**
我之前提到过不少，但主要是各个方向（横向、纵向）缺乏透明度。有时大家在沟通“嘿，规划中出现了这个情况，这是我们需要做的”时不够透明。所以这与利益相关者管理、向客户交付、确保内部团队（特别是营收团队）步调一致息息相关。

---

### [00:38:11] [Christine Itwaru]

**English:**
That was the first thing we focused on at Pendo was really aligning our success org and our sales org to the product team. We monitored success just within... I think a quarter was the time-bound space that we had it in on quality of inbound to the product team. So, that was really cool. It was just more thematic questions around tell us what you guys do because our customers would benefit from this versus teach me how to do this thing.

**中文翻译:**
我们在 Pendo 关注的第一件事就是真正让我们的成功部门和销售部门与产品团队对齐。我们监控了成功指标……我想我们设定的时间范围是一个季度，重点是进入产品团队的信息质量。这真的很酷。更多的是围绕“告诉我们你们在做什么，因为我们的客户会从中受益”这类主题性问题，而不是“教我怎么做这件事”。

---

### [00:38:36] [Lenny]

**English:**
I wanted to dig into the transparency piece. Is that the same point as the transparency piece or are those two different heuristics?

**中文翻译:**
我想深入探讨一下透明度。这和之前说的透明度是同一个点，还是两个不同的启发式标准？

---

### [00:38:42] [Christine Itwaru]

**English:**
That's transparency. Yeah, so what happened was we realized that we share this story actually quite openly and I'll share it here again, which is one of the things that kicked off products for us was we had a really bad launch, a really, really bad launch. It was a moment in company history where we realized that there was not transparency across the aisle and there was this lack of readiness across the organization and out to customers for what was coming. It wasn't this piece that folks say, "Oh, well, they didn't know this was coming." Well, there's two things. There's the knowing something's coming and then there's the knowing what to do with it.

**中文翻译:**
那就是透明度。是的，我们其实非常公开地分享过这个故事，我在这里再分享一次：促使我们启动产品运营的事情之一是，我们经历了一次非常糟糕的发布，真的非常非常糟糕。那是公司历史上的一刻，我们意识到部门之间缺乏透明度，整个组织以及客户对即将到来的东西缺乏准备。这不只是人们说的“哦，他们不知道这东西要来”。其实有两件事：一是知道某样东西要来，二是知道该拿它怎么办。

---

### [00:39:18] [Christine Itwaru]

**English:**
You can use just some status keeping thing to say, "This is coming in Q4 and as we get closer, here's the date," but it's what to do with it and how to position it and how to talk about it and all the things that was missing from it. It was really bad and it was my fifth week here. It was a moment of, "Well, I promised myself I'm going to let this happen." That was one of the things where I said, "I'm going to start to focus a little bit more on product ops within this director position I had just as director of product." Then I spun off and I think we need to do this thing and make it a bit more formal.

**中文翻译:**
你可以只用一些状态跟踪工具说：“这东西 Q4 要发布，随着时间临近，这是具体日期”，但缺失的是如何处理它、如何定位它、如何谈论它等等。当时情况非常糟糕，那是我入职的第五周。那一刻我想：“好吧，我对自己承诺过，我会让这种改变发生。”那是我说“我要在产品总监这个职位上开始更多地关注产品运营”的契机之一。然后我独立出来，觉得我们需要把这件事做得更正式一点。

---

### [00:39:53] [Lenny]

**English:**
Just to dig it on a story a little bit, so I didn't know this, so you were a product manager at Pendo. There was this bad launch and you recognize there's this gap that maybe I could fill, that somebody needs to fill and that you want to take that on. Can you talk a bit more about that? It's really interesting.

**中文翻译:**
稍微挖掘一下这个故事，我之前不知道这个：你当时是 Pendo 的产品经理，发生了一次糟糕的发布，你意识到有一个空缺需要填补，而你想承担起这个责任。你能多聊聊吗？这很有趣。

---

### [00:40:12] [Christine Itwaru]

**English:**
Yeah. They brought me in as their first director level. So, I was doing a bit of director plus a little bit of IC stuff because we were starting to build up our product team. Yes, that launch happened and the product area was under development for about eight months from what I can remember. I came in with the assumption and also knowing fully well that I'm a brand new leader in this product team and product people want ownership. They crave autonomy, they crave trust, and all of that good stuff. I know that firsthand. I did not want to jump in and say, "Have you done X, Y, and Z?", especially in the first four weeks of me being there. Yeah, it did not go very well.

**中文翻译:**
是的。他们聘请我作为第一位总监级员工。所以当时我既做总监的工作，也做一些个人贡献者（IC）的工作，因为我们刚开始组建产品团队。是的，那次发布发生了，据我记忆，那个产品领域已经开发了大约八个月。我入职时的假设是，并且我也深知，我是这个产品团队的新领导，而产品人想要所有权。他们渴望自主权，渴望信任，以及所有这些好东西。我有第一手经验。我不想一进去就问：“你做过 X、Y、Z 了吗？”，尤其是在我入职的前四周。结果，那次发布确实进行得不顺利。

---

### [00:40:54] [Christine Itwaru]

**English:**
So, we recognized that we had more opportunity that we should have grabbed onto to test more with customers, to find feedback loops that were going to be healthy for the team and for our customers, to stand up ways for us to measure changes and impact of changes that this thing was making to our customers. This was the biggest launch in our company history since the launch of the product. So, it was a moment where we all sat down very openly and shared with each other what we all could have done better. It wasn't just the product team.

**中文翻译:**
所以，我们意识到我们本应抓住更多机会去与客户进行更多测试，去寻找对团队和客户都有益的反馈循环，去建立衡量这些变化及其对客户影响的方法。那是自产品问世以来，我们公司历史上规模最大的一次发布。所以，那是我们所有人坐下来，非常坦诚地互相分享我们本可以做得更好的地方的一刻。这不仅仅是产品团队的问题。

---

### [00:41:25] [Christine Itwaru]

**English:**
So, I truly believe with a really healthy product operations person or team, you have that ability to impact change across the company. So, yes, we look at that story. I remember us sitting there and being, "One day, we're going to look back at this story and we're going to say, 'Oh, yeah, I remember that.'" We do now four years later or four and a half years later, but yes, I felt really passionate about making sure that that didn't happen.

**中文翻译:**
所以我坚信，拥有一个非常健康的产品运营人员或团队，你就拥有了影响整个公司变革的能力。所以，是的，我们回顾那个故事。我记得我们坐在那里说：“总有一天，我们会回顾这个故事并说：‘哦，是的，我记得那件事。’”四年或四年半后的今天，我们确实在回顾了。但是，是的，我当时非常有激情去确保那种事不再发生。

---

### [00:41:48] [Lenny]

**English:**
The gaps you found are there's just like this lack of internal alignment. Sales didn't know what was going on. Customer support didn't know what was going on. That felt like that's where the gap was because that's what led to this product ops opportunity, right?

**中文翻译:**
你发现的差距就是缺乏内部对齐。销售不知道发生了什么，客户支持也不知道发生了什么。感觉那就是差距所在，因为正是这一点带来了产品运营的机会，对吧？

---

### [00:42:00] [Christine Itwaru]

**English:**
Yes. There was a lack of alignment across again, they knew it was coming, they just didn't know the extent of what to expect and how to prepare customers or prospects or the change the way that we should have. There was definitely training. There was stuff being done. It just could have been a whole lot better. So, there were gaps there. One more point was the piece after that was I love people. I love managing people. I love healthy team environment and dynamics.

**中文翻译:**
是的。再次强调，缺乏对齐——他们知道它要来，只是不知道预期的程度，不知道如何准备客户或潜在客户，也不知道如何以应有的方式应对变化。当时确实有培训，也有人在做事，但本可以做得更好。所以那里存在差距。还有一点是，在那之后，我意识到我热爱人，热爱管理，热爱健康的团队环境和动态。

---

### [00:42:32] [Christine Itwaru]

**English:**
As a product person, it means a lot to have that, because if you have direct reports, you obviously want them to be happy and healthy, but as a product person, you have this system around you even if you're not having people that report into you where you feel ownership to make sure these people are healthy. I remember even in my early days of being a PM, I wanted my engineers to be super happy. I wanted them to be proud of work that they were doing and I wanted them to be comfortable letting go of things that we no longer needed.

**中文翻译:**
作为一个产品人，拥有这些意义重大。因为如果你有直接下属，你显然希望他们快乐健康；但作为一个产品人，即使没有人向你汇报，你周围也有一个系统，你会感到有责任确保这些人是健康的。我记得甚至在我做 PM 的早期，我就希望我的工程师们超级开心。我希望他们为自己所做的工作感到自豪，并希望他们在放弃我们不再需要的东西时感到坦然。

---

### [00:42:58] [Christine Itwaru]

**English:**
I remember that moment looking around and looking at our engineers and seeing that they were like, "Hold on. What? Where do we go now? What do we do right now?" We wanted to take that moment and make it less about firefighting and more about being responsible and really customer obsessed. So, that was our moment or one of our moments for thinking about, "Okay, we might need product operations formalized here."

**中文翻译:**
我记得那一刻，我环顾四周看着我们的工程师，看到他们一脸茫然：“等等，什么？我们现在该往哪走？我们现在该做什么？”我们想抓住那一刻，让工作不再仅仅是“救火”，而是变得更负责任、更真正以客户为中心。所以，那是我们考虑“好吧，我们可能需要在这里正式建立产品运营”的时刻之一。

---

### [00:43:24] [Lenny]

**English:**
It's interesting that your mind went to product ops, because I think most companies would be like, "Oh, the product manager of this product screwed up. They didn't communicate enough to ensure sales. They didn't set up the marketing material well." It often falls on the product team and the product manager. What made you realize, "Oh, this is a product ops role and I need to move into that role versus here we are"?

**中文翻译:**
很有趣，你的想法转向了产品运营。因为我想大多数公司会觉得：“哦，这个产品的 PM 搞砸了。他们沟通不够，没能确保销售知情；他们没准备好营销材料。”责任通常落在产品团队和 PM 身上。是什么让你意识到：“哦，这是一个产品运营的角色，我需要转向那个角色，而不是维持现状”？

---

### [00:43:46] [Christine Itwaru]

**English:**
Yeah, I didn't say in that moment we need a product ops role. All I said in that moment was we need to create a system so that this doesn't happen again. That goes back to my definition of what product ops is. It's a thing and it is also a person or a group of people. It could be one or the other. So, I want to make sure we decouple that. It does not have to be humans. It can be that there's a system being created that is from a strong product person who knows how to get this team to be healthy.

**中文翻译:**
是的，我当时并没说我们需要一个产品运营岗位。我当时只说我们需要建立一个系统，让这种事不再发生。这回到了我对产品运营的定义：它是一件“事”，也是一个“人”或“一群人”。它可以是其中之一。所以我想确保我们将两者解耦。它不一定非得是人，也可以是由一个懂如何让团队保持健康的高级产品人创建的一套系统。

---

### [00:44:12] [Lenny]

**English:**
That's a really good way of thinking about it. That clarifies it in a big way. Thank you. You were talking about transparency and just like a sign that maybe you need product ops. I think the thing that stuck with me there is just the quality of questions the product team gets from sales, right?

**中文翻译:**
这是一个非常好的思考方式，极大地澄清了概念。谢谢。你刚才谈到透明度，以及可能需要产品运营的迹象。我想让我印象深刻的是产品团队从销售那里收到的问题的质量，对吧？

---

### [00:44:27] [Christine Itwaru]

**English:**
Yeah. I get a lot of questions around, "I'm investing in this. How do I measure the effectiveness of the team, all of these things?" It's really not easy to measure this in a quantitative measure just yet. Maybe one day, right? Actually, yes. Now one day, I feel like it might be coming sooner than we think. So, what we did was we looked at that transparency problem. We sent out this survey across both product managers and the sales and success teams and we said, "Where's your time going, PMs? How much time are you giving on average to the revenue team to firefight? How much time do you with customers that's quality time."

**中文翻译:**
是的。我收到很多问题，比如：“我正在投资这个。我该如何衡量团队的有效性，以及所有这些事情？”目前要用定量指标来衡量这些确实不容易。也许有一天可以吧？事实上，是的，我觉得那一天可能比我们想象的来得更早。所以，我们所做的是审视那个透明度问题。我们向产品经理、销售和成功团队发送了一份调查问卷，问：“PM 们，你们的时间都花在哪了？你们平均花多少时间帮营收团队‘救火’？你们花多少高质量的时间与客户在一起？”

---

### [00:45:18] [Christine Itwaru]

**English:**
Then on the flip side to the revenue team, how many times do you find yourself asking questions? We gave all of these one to five and blah, blah, blah, those sorts of things, so that we can figure out where to place our energy. We came up with this, "Okay, well, it seems like there's a lack of transparency across the two groups. Let's start with getting data out or information out to the revenue team from the product org." We created this product digest. It's like today and it's matured quite a bit, but I go back to this whole people can know when they're coming, but they need to know what it is they need to do with it. So, this thing was less about this thing's coming next quarter, go tell your customers.

**中文翻译:**
反过来，我们也问营收团队：“你们发现自己问了多少次问题？”我们给这些选项打 1 到 5 分等等，以便弄清楚该把精力放在哪里。我们得出的结论是：“好吧，看来这两个群体之间缺乏透明度。让我们先从产品部门向营收团队输出数据或信息开始。”我们创建了这个“产品摘要”（Product Digest）。它现在已经相当成熟了，但我还是回到那句话：人们可以知道某样东西什么时候发布，但他们需要知道该拿它怎么办。所以，这个摘要不仅仅是说“下季度要发布这个，去告诉你的客户”。

---

### [00:45:43] [Christine Itwaru]

**English:**
It's more about here's how you get ready for it, here's how you get jazzed about, and then the handoff, which is probably the question you're going to have at some point, which is, "What's your line between PMM and products?" The handoff is that we don't teach them to sell. We don't teach them to position, but we know that the product intimately enough to help them understand the new value, to help them understand how to use the thing and to make sure that they're hitting the ground.

**中文翻译:**
它更多是关于：这是你如何为此做准备，这是你如何为此感到兴奋，然后是交接——这可能是你稍后会问的问题，即“产品运营和产品市场营销（PMM）之间的界限在哪里？”交接点在于：我们不教他们如何销售，不教他们如何定位，但我们对产品足够了解，可以帮助他们理解新价值，帮助他们理解如何使用这个东西，并确保他们能快速上手。

---

### [00:46:08] [Lenny]

**English:**
Let's ask that question. If there's anything more, what is that line between product ops and product marketing?

**中文翻译:**
那我们就问这个问题吧。除了刚才说的，产品运营和产品市场营销之间的界限到底在哪里？

---

### [00:46:13] [Christine Itwaru]

**English:**
Yeah, I always say this and it and it's worked. I haven't seen anybody dispute it yet, but product marketing positions help the revenue team sell their lead gen for all of the outbound and the campaigns that they're running. They are marketing. They're helping you at the end of the day make this thing sound amazing and do the right things with it. For us, it's about educating and it's about helping our internal folks, our internal revenue team understand, "What is the added value? How do you now do this thing? How does this impact your role?"

**中文翻译:**
是的，我总是这么说，而且很管用，目前还没人反驳过。产品市场营销（PMM）负责定位，帮助营收团队进行销售，负责所有的外发获客（Lead gen）和正在运行的营销活动。他们是“市场”。归根结底，他们是帮你把这个东西描述得很棒，并引导正确的用途。而对于我们（产品运营）来说，核心是教育，是帮助我们的内部同事、内部营收团队理解：“增加的价值是什么？你现在该怎么操作？这如何影响你的角色？”

---

### [00:46:48] [Christine Itwaru]

**English:**
We focus a bit on the customer success persona, for example, on Pendo. Customer success managers can go in. They can see their account health and what's going on and blah, blah, blah. How does this impact you as a customer success rep and how do you then help your customers understand the value? Not hey, can you help us upsell this thing and here's how you do it.

**中文翻译:**
例如，在 Pendo，我们比较关注客户成功（Customer Success）这个角色。客户成功经理可以登录系统，查看账户健康状况等等。这作为一名客户成功代表对你有什么影响？你随后如何帮助你的客户理解其价值？而不是说：“嘿，你能帮我们追加销售（Upsell）这个东西吗？这是方法。”

---

### [00:47:06] [Lenny]

**English:**
Great answer. Makes a lot of sense to me. Final topic, the career path of a product ops person. A lot of people listening to this podcast are either PMs today or I want to be PMs or thinking about becoming product manager, because PM can mean a lot of things. It's interesting, there's this new path that people can explore, product ops. I'm curious who you think might be a fit for the product ops role versus the product manager role. Someone deciding, "Oh, man, maybe I should go down this other route." What do you think are just signs that maybe you'd be a better fit where you enjoy that route better?

**中文翻译:**
很棒的回答，对我来说非常有意义。最后一个话题：产品运营人员的职业路径。听这个播客的很多人要么现在是 PM，要么想成为 PM，或者正在考虑成为产品经理，因为 PM 可以代表很多东西。有趣的是，现在人们可以探索这条新路径——产品运营。我很好奇你认为谁适合产品运营角色，而不是产品经理角色？对于那些在纠结“天哪，也许我该走另一条路”的人，你认为有哪些迹象表明你可能更适合或更喜欢这条路？

---

### [00:47:41] [Christine Itwaru]

**English:**
Yeah, I love that question because it makes me feel that this role has become embraced a bit more. What I hear questions like in the past, it was, "Do we need this role and how do we help get the buy-in?" Now it's more the acceptance from a product manager to maybe want to even become this. I'm seeing more PMs, like I said, go into the space. So, it's no longer being seen so much as a threat. It's being seen as this partner. So, just one, I'll say that I think if you're someone like me who absolutely loves and I mentioned the story about the engineers and the team health and stuff, if you love creating that healthy team environment and one where there's cross-functional collaboration and it fuels you to empower the team more, it's a wonderful fit for you.

**中文翻译:**
是的，我喜欢这个问题，因为它让我觉得这个角色已经得到了更多的认可。过去我听到的问题是：“我们需要这个角色吗？我们如何获得认可？”现在更多是产品经理开始接受，甚至想成为这个角色。正如我所说，我看到越来越多的 PM 进入这个领域。所以它不再被视为一种威胁，而被视为一种伙伴关系。首先，我要说，如果你像我一样，绝对热爱（正如我提到的关于工程师和团队健康的故事）创造健康的团队环境和跨职能协作，并且这种赋能团队的过程能给你动力，那么这个角色非常适合你。

---

### [00:48:22] [Christine Itwaru]

**English:**
Again, I was a PM for years and I felt that pain so much and how much we had to do in order to make this small change and then figure out whether it's valuable. I knew that there had to be a better way to get better outcomes to happen, but I also know that better outcomes don't just mean for the product. It means better outcomes for the entire product team, for the customer experience at large, and ultimately for the business. So, I think that that's one thing. If you're curious and you really want to learn more about that side of the house, one of the beautiful things I saw was one of my products managers fall more in love with understanding the business as she was starting to assure in her product ops career. I thought that was really cool.

**中文翻译:**
再说一次，我做了多年的 PM，我深切地感受到了那种痛苦——为了做一个小小的改动我们要付出多少努力，然后还要弄清楚它是否有价值。我知道一定有更好的方法来获得更好的结果，但我也知道，更好的结果不仅仅是指产品，它还意味着整个产品团队、整体客户体验以及最终业务的更好结果。所以，这是一点。如果你很好奇，并且真的想了解业务的另一面，我看到的一件很棒的事情是，我的一位产品经理在开始她的产品运营生涯时，变得更加热爱理解业务。我觉得这非常酷。

---

### [00:49:04] [Christine Itwaru]

**English:**
She had already had product background and she was like, "I want to understand the inner workings here so that I know how to help these people." So the other thing is if you're a PM having issues with the role that you're currently in, I think you need to remember that you are there to solve problems. That's a very simple thing that we talked about. What are the things that PMs won't shed and shouldn't shed and that go and talk to customers? We get to talk to customers in order to solve the problems, figure out the right problems to solve. You do that in product ops as well. You don't have to go out to customers externally, but my customers and the people I speak to are internally. They are helping me understand the pain that the product team is tied to.

**中文翻译:**
她已经有了产品背景，她说：“我想了解这里的内部运作机制，这样我就知道如何帮助这些人。”另一件事是，如果你是一名 PM，并且对目前的角色感到困扰，我认为你需要记住，你的职责是解决问题。这是我们谈过的非常简单的事情。PM 不会也不应该放弃的事情是什么？是去和客户交谈。我们与客户交谈是为了解决问题，找出正确的问题去解决。在产品运营中，你也要做同样的事。你不必去接触外部客户，但我的“客户”和我交谈的人是内部的。他们在帮助我理解产品团队所面临的痛苦。

---

### [00:49:47] [Christine Itwaru]

**English:**
So, if you don't love solving problems through building brand new features and building a product, then how can you help contribute to solving other ones? If you're a true problem solver, think about whether you want to do that. So, if you know the pain, what can you do to build a better experience overall? You can ultimately impact your business.

**中文翻译:**
所以，如果你不喜欢通过构建全新功能和构建产品来解决问题，那么你如何能为解决其他问题做出贡献呢？如果你是一个真正的“问题解决者”，考虑一下你是否想做这件事。如果你了解那种痛苦，你能做些什么来构建一个更好的整体体验？你最终可以影响你的业务。

---

### [00:50:03] [Lenny]

**English:**
Do you find most product ops people, at least at this point, are former product managers? What would be the pie chart of last job was product manager versus not of existing product ops people?

**中文翻译:**
你是否发现大多数产品运营人员（至少目前如此）都是前产品经理？在现有的产品运营人员中，上一份工作是产品经理和不是产品经理的比例大概是多少？

---

### [00:50:13] [Christine Itwaru]

**English:**
I got to put on a new survey. I do. I really have to put on a new survey. Initially, I saw a lot more folks moving in from management consulting, from customer success, from technical success. I haven't seen anyone from sales move in yet, and I have seen a couple PMs. Now, that's the day-to-day product ops manager. I will tell you that the people who are standing up the product ops orgs and being the first product ops hire at the leadership level are former product people.

**中文翻译:**
我得做一个新的调查，真的。最初，我看到更多的人来自管理咨询、客户成功、技术成功。我还没见过从销售转过来的，但我见过几个 PM。现在，那是日常的产品运营经理。但我可以告诉你，那些建立产品运营组织并在领导层担任首位产品运营聘用人员的人，都是前产品人。

---

### [00:50:45] [Christine Itwaru]

**English:**
I strongly advocate for product ops leaders to have done that role, to have actually had hands-on product experience building and understanding customer problems and feeling that pain, because you very quickly realize where to place your efforts and where your team's efforts should go. That helps you from an efficiency perspective and the business knows you're not just dilly-dallying.

**中文翻译:**
我强烈主张产品运营领导者应该担任过 PM 角色，真正拥有构建产品、理解客户问题并感受过那种痛苦的实战经验。因为这样你就能很快意识到该把精力放在哪里，以及你的团队应该往哪使劲。从效率的角度来看，这很有帮助，而且业务部门也知道你不是在磨洋工。

---

### [00:51:11] [Lenny]

**English:**
That's really interesting. That makes a lot of sense. Just the roles you named again, where product op people come from. You said customer success. What are the others again?

**中文翻译:**
这很有趣，非常有道理。再重复一下你提到的那些产品运营人员的来源角色。你说了客户成功，其他的还有哪些？

---

### [00:51:19] [Christine Itwaru]

**English:**
I have seen technical success. I've seen management consulting. The management consulting piece makes a ton of sense to me. I think there's that data piece that they really like to lean into and advisory, and then the leadership ones coming in from product to leader roles. That's been a happy change too, seeing a director say, "I now want to move into a position to coach the teams and to help build a stronger product team overall. I don't feel like building product."

**中文翻译:**
我见过技术成功、管理咨询。管理咨询背景对我来说非常有意义，我想是因为他们非常喜欢深入研究数据和提供咨询建议。然后是领导层，他们从产品岗位转向领导岗位。这也是一个令人欣喜的变化，看到一位总监说：“我现在想转向一个能够指导团队并帮助建立更强大整体产品团队的职位，我不想再亲手构建产品了。”

---

### [00:51:46] [Lenny]

**English:**
Fascinating. For someone that's like, "Wow, I want to do this job. This sounds rad," what advice would you give for people to pursue this role and get a gig in product ops?

**中文翻译:**
太迷人了。对于那些觉得“哇，我想做这份工作，听起来太酷了”的人，你会给他们什么建议去追求这个角色并在产品运营领域找到工作？

---

### [00:51:58] [Christine Itwaru]

**English:**
Well, one, it's a good thing that there's no shortage of these roles. I would say that there are a lot of these roles open out in the industry. Be intentional about what you want to do, because right now, it's still in a bit of, "Well, what are we doing in product operations as a product management community?" There's no consistency industry to industry, size to size, team to team. It is very different. So, really think about your strengths. Do you love data? Are you a person who thrives on being able to make beauty out of this mess that you're seeing and advise people and help them understand maybe this is a direction that we should be going in?

**中文翻译:**
首先，好消息是这类岗位并不短缺。我会说行业中有很多这类职位的空缺。要有意识地思考你想做什么，因为目前作为产品管理社区，大家对“产品运营到底在做什么”还处于摸索阶段。不同行业、不同规模、不同团队之间都没有统一的标准，差异非常大。所以，好好想想你的优势。你热爱数据吗？你是否擅长从眼前的混乱中理出头绪，并为人们提供建议，帮助他们理解“也许这才是我们应该走的方向”？

---

### [00:52:40] [Christine Itwaru]

**English:**
Are you technical where you're like, "No, I actually really enjoy doing the quantitative side of things," and you truly enjoy working with data science teams and you really like to bring that data aspect to the product teams? You could probably find a mix of both. There are people who do like doing both of those things. Generally, I mentioned this and I keep saying it, standing up that system because you know that if you had it, you would've been a better PM.

**中文翻译:**
你是否偏向技术型，觉得“不，我其实非常喜欢做定量分析”，并且你真心喜欢与数据科学团队合作，喜欢把数据维度带给产品团队？你可能会找到两者的结合点。确实有人喜欢同时做这两件事。通常，正如我提到并一直强调的，建立那个系统是因为你知道，如果你以前有那个系统，你会成为一名更好的 PM。

---

### [00:53:05] [Christine Itwaru]

**English:**
I think that that's a big thing there. If people realize that there's a better way to do it and they no longer have to do it all but they can do a slice of it in order to drive efficiency for the organization, then start thinking about going out there and doing it. The other thing too is look at those roles and make sure that you fine-tooth comb those job descriptions. Some of them are very vague because they're trying to figure it out on their own as well. So, the more you know what you want to do as a product person, the more you know what to lead out from these roles.

**中文翻译:**
我认为那是件大事。如果人们意识到有更好的方法，而且他们不再需要承担所有工作，而是可以只做其中一部分以提高组织效率，那么就开始考虑去付诸行动吧。另一件事是，审视那些职位，确保你仔细研读了职位描述。有些描述非常模糊，因为他们自己也在摸索。所以，你作为产品人越清楚自己想做什么，你就越知道能从这些角色中带出什么。

---

### [00:53:36] [Lenny]

**English:**
Are there red flags when you're looking at a product job description of, "Hmm, this isn't really the role you want"?

**中文翻译:**
当你查看产品职位描述时，有没有什么“红旗”（警示信号）让你觉得“嗯，这并不是你真正想要的角色”？

---

### [00:53:43] [Christine Itwaru]

**English:**
I think this is a red flag for any role. I mentioned that it's really hard right now to put a number to the success of the role or on the success of the role, but if there's no, "This is how you will be measured or this is what we're looking at as a successful outcome for this person in this role," I would say that's probably a red flag. That's table stakes people need to have on their job descriptions.

**中文翻译:**
我认为这对任何角色来说都是红旗。我提到过，目前很难给这个角色的成功定一个具体的数字，但如果没有说明“我们将如何衡量你的表现，或者我们认为这个角色取得成功的标志是什么”，我会说那可能是一个红旗。这是人们在职位描述中必须具备的基本要素。

---

### [00:54:06] [Lenny]

**English:**
Final question. Something I try to get to with people from new companies that I haven't talked to before is just to get a general sense of how the product org is structured at the company. Just because people are always curious, how do you structure product teams? So I guess broadly I'd love to hear just how is the Pendo team product team structured? What are the buckets? Then also, is their product ops person integrated into each cross-functional product team?

**中文翻译:**
最后一个问题。我尝试向来自新公司的嘉宾了解的一件事是，公司产品组织的结构大致是怎样的。因为大家总是很好奇：你们是如何构建产品团队的？所以我想听听 Pendo 的产品团队是如何构成的？有哪些部门？此外，产品运营人员是否整合到了每个跨职能产品团队中？

---

### [00:54:31] [Christine Itwaru]

**English:**
Yeah, I too love to learn about this. We're broken into major areas of the business or revenue streams and we have general managers over those. The GMs actually sit in the product team, which is nice. All have PM background, all really, really experienced and incredible. We also have a head of growth, so there's that component to it as well. Then you've generally got the senior directors. There are teams of product managers who are responsible for different areas in the product. So, we've got one product that's our core product and very mature, broken down into different components there. We have a newer product where that's just one straight product team versus having many different directors.

**中文翻译:**
是的，我也很喜欢了解这个。我们按主要业务领域或营收流进行划分，并设有总经理（GM）负责。这些 GM 实际上就在产品团队中，这很棒。他们都有 PM 背景，都非常有经验且出色。我们还有一位增长负责人，所以也有增长这个组成部分。然后通常会有高级总监。还有负责产品不同领域的产品经理团队。我们有一个核心产品，非常成熟，被分解成不同的组件。我们还有一个较新的产品，那只是一个直接的产品团队，而不是有很多不同的总监。

---

### [00:55:06] [Christine Itwaru]

**English:**
We do have a product ops person integrated into these teams. I'd say probably all of them at this point, but the key thing here is they share themselves across two or three teams. Something going through listeners' minds right now is, "Christine, is there a ratio of product ops people to the team?" I would say that at one point, I felt like there might have been and I don't think that's the case anymore. Again, based on my experience and what I'm learning, we operate pretty lean and a lot of people are having to operate very lean right now. So, every few quarters, we look at our goals. We determine who or what goals need a product ops person and for what reason. We're really intentional about it.

**中文翻译:**
我们确实有产品运营人员整合到这些团队中。我想目前可能所有团队都有，但关键点在于，他们会在两到三个团队之间共享。听众脑子里现在肯定在想：“Christine，产品运营人员与团队的比例是多少？”我会说，曾经我觉得可能有一个比例，但现在我不这么认为了。再次根据我的经验和所学，我们运作得非常精简，而且现在很多人都不得不精简运作。所以，每隔几个季度，我们会审视目标。我们决定谁或哪些目标需要产品运营人员，以及原因是什么。我们对此非常有意识。

---

### [00:55:44] [Christine Itwaru]

**English:**
As an example, I use this saying respect the hustle with my team a little bit for the newer product that's still finding its way. The last thing you want to do as a product, which for somebody who I had a legacy product in my last job, one that I was building from the ground up and one that I was just responsible for getting out the door, sun setting at some point, you don't want anyone stifling creativity with any process or some time bound this or anything like that. So, the last thing you want to do is introduce something in there that feels like that you want them to hit the ground running.

**中文翻译:**
举个例子，对于还在摸索阶段的新产品，我会对团队说“尊重这种拼劲”（respect the hustle）。作为产品人，你最不希望看到的就是有人用流程或时间限制来扼杀创造力。在我上一份工作中，我负责过老旧产品，也负责过从零开始构建的产品，还有只负责发布或下线的产品。所以，你最不想做的就是在那里引入一些让人感觉束手束脚的东西，你希望他们能快速起步。

---

### [00:56:18] [Christine Itwaru]

**English:**
So, we don't over-index on things like a certain planning process or you need to get this to us because the other teams have. We need to know this thing by this timeframe. We'll do what we need to do from there. That's it. We're also quicker with the data. Voice of customer stuff takes a little bit longer for a more mature product team or this is more like, "What are we learning right now and how quickly can we communicate this over to that team so they can iterate really quickly?"

**中文翻译:**
所以，我们不会过度强调诸如“特定的规划流程”或“因为其他团队交了，所以你也得交”之类的事情。我们只需要在某个时间段知道这件事，然后从那里开始做我们需要做的事。就这样。我们在处理数据方面也更快。对于成熟的产品团队，“客户之声”的工作可能需要更长时间；而对于新产品，这更像是：“我们现在学到了什么？我们能多快把这些传达给那个团队，以便他们快速迭代？”

---

### [00:56:47] [Lenny]

**English:**
Awesome. To come back to the structure just briefly, so you have GMs, business units. Within the business units, you have directors of product that report up to the GM within each and the directors or product have cross-functional product team that they operate that builds specific features and elements of the larger product. Then there's a product ops person supporting some of these teams and they're shared across teams. Got it.

**中文翻译:**
太棒了。简要回顾一下结构：你们有 GM 和业务单元。在业务单元内部，有向 GM 汇报的产品总监，这些总监管理着跨职能产品团队，负责构建大产品的特定功能和元素。然后有产品运营人员支持其中一些团队，并且是在团队间共享的。明白了。

---

### [00:57:14] [Christine Itwaru]

**English:**
You've got everybody rolls up to a CPO. CPO's got all of this.

**中文翻译:**
没错，所有人最终都向 CPO 汇报。CPO 统揽全局。

---

### [00:57:15] [Lenny]

**English:**
Christine, with that, we've reached our very exciting lightning round. I've got six questions for you. I'm going to just fire them away. Does that sound good?

**中文翻译:**
Christine，说到这，我们进入了非常令人兴奋的闪电问答环节。我有六个问题要问你，我会直接抛出来。听起来可以吗？

---

### [00:57:23] [Christine Itwaru]

**English:**
Yes, let's do it.

**中文翻译:**
好的，开始吧。

---

### [00:57:24] [Lenny]

**English:**
Let's do it. Two or three books that you recommend most to other people.

**中文翻译:**
开始。你最推荐给别人的两三本书。

---

### [00:57:28] [Christine Itwaru]

**English:**
Classic is Inspired by Marty Cagan. It's one of the reasons I really fell in love with the product. It's inspirational. Leaders Eat Last, Simon Sinek. I really like that book too. That's more leadership style and making sure you putting in your team first, which is something I strongly believe in. This is a plug, but I also really like the book and it's very practical so it falls in that category, which is the Product-Led Organization by our CEO Todd Olsen. Really good book for right now, especially with people really going through this transformation.

**中文翻译:**
经典之作是 Marty Cagan 的《启示录》（Inspired）。这是我真正爱上产品的原因之一，非常有启发性。还有 Simon Sinek 的《领导者最后用餐》（Leaders Eat Last），我也非常喜欢那本书，它更多关于领导风格以及确保你把团队放在首位，这是我坚信的理念。顺便植入一个广告，我也非常喜欢我们 CEO Todd Olsen 写的《产品驱动型组织》（The Product-Led Organization），它非常实用，非常适合当下，尤其是对于那些正在经历转型的人。

---

### [00:58:00] [Christine Itwaru]

**English:**
There's an old book that I have that's sitting on that shelf. It's Product Roadmaps Relaunched. It is really old. I mean I don't want to date myself, but it's almost 20 years old when I was in college. But it's really, really valuable and I can reference it just for a quick yeah, I forgot about that from a communication perspective for a roadmap. This is really cool.

**中文翻译:**
我书架上还有一本老书，叫《产品路线图重塑》（Product Roadmaps Relaunched）。它真的很老了，我不想暴露年龄，但那是我上大学时的事了，快 20 年了。但它真的非常有价值，我可以随时翻阅它，快速回顾一下关于路线图沟通方面的知识。这真的很酷。

---

### [00:58:21] [Lenny]

**English:**
Favorite other podcast?

**中文翻译:**
你最喜欢的其他播客？

---

### [00:58:22] [Christine Itwaru]

**English:**
The Product Experience Podcast from Mind the Product. I really like that one. A little bit similar to this other favorite one I'm on right now, but lots of really good product people and just very practical advice too. For leadership, I like HBR IdeaCast. Again, I like to balance the business side and the people side of leaderships.

**中文翻译:**
Mind the Product 出品的《产品体验播客》（The Product Experience Podcast）。我非常喜欢那个，和我现在参加的这个最喜欢的播客有点像，有很多非常优秀的产品人，还有非常实用的建议。关于领导力，我喜欢《哈佛商业评论》的 IdeaCast。再次强调，我喜欢平衡领导力中的业务面和人性面。

---

### [00:58:44] [Lenny]

**English:**
Favorite recent movie or TV show?

**中文翻译:**
最近最喜欢的电影或电视剧？

---

### [00:58:46] [Christine Itwaru]

**English:**
Because I have kids, my brain is flooded generally with kid shows. I would say this year, it was between the new Matilda movie, which is based on the Broadway production, which was based on the old Matilda movie, but it's really, really good. Really well done. Then there's this movie. I think it's called Rise. Have you seen it? It's about the Giannis... I cannot say, forgive me, his last name, but he's on the Milwaukee Bucks, basketball player. It's about overcoming adversity and just struggle and really pushing through and giving it your all. I think that one is really good. Add it to your list if you haven't. It's called RISE. TV, I have Food. I don't have a favorite TV show. I've just finished watching White Lotus if that's qualified.

**中文翻译:**
因为我有孩子，我的大脑通常被儿童节目占据。我会说今年是在新的《玛蒂尔达》（Matilda）电影（基于百老汇剧目，而剧目又基于老版电影）和另一部电影之间。那部电影叫《崛起》（Rise），你看过吗？是关于扬尼斯（Giannis）……原谅我不会读他的姓，他是密尔沃基雄鹿队的篮球运动员。它是关于克服逆境、奋斗、坚持到底并全力以赴的故事。我觉得那部非常好，如果你还没看，把它加入清单吧。至于电视剧，我喜欢美食节目，没有特别固定的。我刚看完《白莲花度假村》（White Lotus），如果那也算的话。

---

### [00:59:33] [Lenny]

**English:**
It's the most popular mentioned TV show on this podcast.

**中文翻译:**
那是本播客中被提到次数最多的电视剧。

---

### [00:59:40] [Christine Itwaru]

**English:**
Yeah, I would say for TV in general, you give me anything food. I love cooking. I'll cook an entire massive meal, three course, whatever, sit down, and eat it while I'm watching. Yeah.

**中文翻译:**
是的，对于电视节目，只要是关于美食的就行。我热爱烹饪。我会做一顿丰盛的大餐，三道菜之类的，然后坐下来边看边吃。

---

### [00:59:53] [Lenny]

**English:**
Yum. Favorite interview question that you like to ask when you're interviewing people?

**中文翻译:**
听起来很香。你面试别人时最喜欢问的问题是什么？

---

### [00:59:58] [Christine Itwaru]

**English:**
If you could choose any career outside of what you're doing, what would it be and why?

**中文翻译:**
如果你可以从目前从事的工作之外选择任何职业，你会选什么，为什么？

---

### [01:00:04] [Lenny]

**English:**
What do you look for in an answer there that tells you that this is a strong candidate versus not?

**中文翻译:**
你从回答中寻找什么信息来判断这是一个优秀的候选人？

---

### [01:00:08] [Christine Itwaru]

**English:**
There are skills that are a part of that other role that I would lean into. So, if somebody were to ask me that question, I would tell you a chef. It's about experience and it's about constantly refining your craft and it's about constantly looking to delight. I think that speaks to my love for product. It's all about that end state for the customer. So, I always ask that question and I look to see, "What is it? Are they looking for fame? Are they looking for the temporary role?" It's really telling. You dig into the qualities of what makes a good candidate for the other thing. You can figure out a lot.

**中文翻译:**
我会关注那个职业中包含的、我可以借鉴的技能。所以，如果有人问我这个问题，我会说是厨师。因为厨师关乎体验，关乎不断精进手艺，关乎不断寻求带给别人愉悦。我认为这体现了我对产品的热爱——一切都为了客户的最终状态。所以我总是问这个问题，我想看看：“那是什么？他们是在追求名声吗？他们是在寻找一个临时的角色吗？”这非常能说明问题。你挖掘出使某人成为另一个领域优秀候选人的品质，就能发现很多东西。

---

### [01:00:47] [Lenny]

**English:**
Fascinating. If they're watching this and learning the secret, that's a good sign too. They're doing the research.

**中文翻译:**
很有意思。如果他们正在看这个节目并学到了这个秘诀，那也是个好迹象，说明他们做了功课。

---

### [01:00:52] [Christine Itwaru]

**English:**
Yeah.

**中文翻译:**
没错。

---

### [01:00:53] [Lenny]

**English:**
Top five SaaS products that you love, use at work other than Pendo.

**中文翻译:**
除了 Pendo 之外，你在工作中喜欢并使用的前五个 SaaS 产品。

---

### [01:00:53] [Christine Itwaru]

**English:**
I got to say Pendo.

**中文翻译:**
我必须得说 Pendo。

---

### [01:00:59] [Lenny]

**English:**
We already know. We already know that's on the list.

**中文翻译:**
我们已经知道了，那肯定在名单上。

---

### [01:01:01] [Christine Itwaru]

**English:**
Yeah, I love Miro. I love Miro so much. During the pandemic, this became an essential tool for so many teams. I brought it into our company and I was a big advocate, part of my last one as well, just the collaboration and connection. Figma along the same lines, I think Figma is really great at that for our design team and the rest of products. So, that one's been really good. Seismic is one that I really like as well. That's the content management system for our go-to-market teams. So, it really plays well into how do we make sure we give them what they need and the tool that they need to be in.

**中文翻译:**
是的，我爱 Miro，非常爱。在疫情期间，它成了许多团队的必备工具。我把它引入了我们公司，我是它的忠实拥趸，在上一家公司也是，它非常利于协作和连接。Figma 也是如此，我认为 Figma 对我们的设计团队和产品其他部门来说非常棒。所以那个也很好。Seismic 也是我非常喜欢的一个，它是我们进入市场（Go-to-market）团队的内容管理系统。它在确保我们为他们提供所需内容以及他们所需的工具方面发挥了很大作用。

---

### [01:01:36] [Christine Itwaru]

**English:**
Gong is another one. I think Gong's really great. I've watched them go from the early days and I think we were an early customer or we were using it early on. I think they've pivoted at some point or they've definitely updated messaging on the coaching for their teams and us being able to dig into the qualitative insights that we get on those calls of people is really good too. So, yeah.

**中文翻译:**
Gong 是另一个。我觉得 Gong 真的很棒。我看着他们从早期发展起来，我想我们是早期客户，或者很早就开始使用了。我想他们在某个时间点进行了转型，或者肯定更新了关于团队指导的信息，我们能够挖掘那些通话中获得的定性洞察，这真的非常好。

---

### [01:02:01] [Lenny]

**English:**
Great list. Ones that people haven't mentioned before, so that's always fun. Final question, what's something relatively minor that you've changed in Pendo's product development process that has had a tremendous impact on the way that you build product?

**中文翻译:**
很棒的名单。有些是之前没人提到过的，这很有趣。最后一个问题：你在 Pendo 的产品开发流程中做了哪些相对较小的改动，却对你们构建产品的方式产生了巨大的影响？

---

### [01:02:15] [Christine Itwaru]

**English:**
This one's going to sound really elementary or for some people really elementary, but for some people, they're going to be like, "Uh-huh, I totally feel that." Early on, we started bringing in engineers to customer meetings more and more and you don't want to typecast or profile an engineer, but generally, they're not raising their hand and being like, "Yeah, I'm going to come and join, blah, blah, blah." They want to make sure they're doing their job and building the experience, but it's so simple and it's so effective. When we started doing it, the response from the engineering team was great and then also it helped us dig into a different side of the customer while we were on call sometimes. Some of them were flies on the walls.

**中文翻译:**
这个听起来可能非常基础，甚至对某些人来说太基础了，但对另一些人来说，他们会说：“嗯，我完全感同身受。”早期，我们开始越来越多地带工程师参加客户会议。你不想给工程师贴标签，但通常他们不会主动举手说：“好啊，我要参加，等等。”他们想确保自己在履行职责、构建体验，但这（带他们开会）非常简单且有效。当我们开始这样做时，工程团队的反应非常好，而且这还帮助我们在通话中挖掘出客户的另一面。有些工程师只是旁听。

---

### [01:02:52] [Christine Itwaru]

**English:**
Some of them were actually engaging with the engineers and help them increase their confidence in speaking to customers. So, I don't know. I feel like that just ended up changing a lot of the way that we started planning and making sure that their voice had a certain amount of weight or even more weight than it did before in the product development lifecycle. We respect their time. I remember some were very nervous and be like, "Oh, I got to do all this other stuff," but they're like, "Okay, I'll try it."

**中文翻译:**
有些工程师实际上会与对方互动，这帮助他们增加了与客户交谈的信心。所以我不知道该怎么说，我觉得这最终改变了我们开始规划的很多方式，并确保他们的声音在产品开发生命周期中具有一定的权重，甚至比以前更有分量。我们尊重他们的时间。我记得有些工程师当时非常紧张，说：“哦，我还有所有这些其他事情要做”，但后来他们说：“好吧，我试试。”

---

### [01:03:21] [Christine Itwaru]

**English:**
Then all of a sudden, they're like, "Whoa, I really want to do this more and more." But it's just really being able to see that pain for them firsthand from a customer or the delight and frustration was very impactful. So, that's my answer and I feel like if you're not doing that as a product manager or product leader, then you better get on that train real fast because it's life changing for the entire team.

**中文翻译:**
然后突然之间，他们会说：“哇，我真的越来越想做这件事了。”能够亲眼看到客户的痛苦、喜悦或挫折，对他们来说非常有冲击力。所以，这就是我的答案。我觉得如果你作为产品经理或产品领导者还没这样做，那你最好赶快行动起来，因为这会改变整个团队的命运。

---

### [01:03:42] [Lenny]

**English:**
That is an awesome answer. This is the first time I've asked this question. I think I'm going to make it a standard question now because I feel like we're going to get all kinds of cool nuggets. So, thank you for starting it off with a bang. Christine, thank you so much for joining me. I learned more about product ops in an hour than I've learned in years and years of reading about it online.

**中文翻译:**
这是一个非常棒的回答。这是我第一次问这个问题，我想我会把它作为一个标准问题，因为我觉得我们会得到各种酷炫的干货。谢谢你开了一个好头。Christine，非常感谢你参加我的节目。我在这一小时内学到的关于产品运营的知识，比我多年来在网上读到的还要多。

---

### [01:04:02] [Christine Itwaru]

**English:**
Thank you.

**中文翻译:**
谢谢。

---

### [01:04:02] [Lenny]

**English:**
So, thanks for making the time. Thanks for sharing all your wisdom. Two final questions. Where can folks find you online if they want to reach out, learn more, maybe ask you some questions about product ops and then how can listeners be useful to you?

**中文翻译:**
感谢你抽时间参加，感谢分享你的智慧。最后两个问题：如果大家想联系你、了解更多信息，或者问你一些关于产品运营的问题，可以在哪里找到你？以及，听众可以为你做些什么？

---

### [01:04:13] [Christine Itwaru]

**English:**
They can connect with me on LinkedIn. You'll put that up, I'm sure. Twitter, same. I've got my own site, so the productcraft.com. I started posting on product management products. I'm going to start doing some stuff on careers, all that good stuff. How can they be useful? So don't laugh at me, people. I needed a Twitter reset and so I had that for 13 years and then I no longer did and now I took it. So, just help me rebuild over there and just get back on that site. That's more immediate, but I would say help me understand what's going on in product and product ops. I will continue to do things like this and share more about what I'm learning, but I need to learn more from other people as well. That's an amazing, incredible part of my job that I'm about to do.

**中文翻译:**
他们可以在 LinkedIn 上联系我，我相信你会把链接放上去的。Twitter 也是一样。我有自己的网站 productcraft.com。我开始发布关于产品管理的内容，接下来会开始做一些关于职业生涯的东西。听众可以怎么帮我？大家别笑话我，我需要重置一下 Twitter，我用了 13 年，后来不用了，现在又重新开始了。所以，帮我在那里重建关注，重新回到那个平台。这是比较直接的。但我想说，请帮我理解产品和产品运营领域正在发生的事情。我会继续做这类分享，分享我的所学，但我也需要从别人那里学习。这是我即将开始的工作中非常精彩、不可思议的一部分。

---

### [01:05:00] [Christine Itwaru]

**English:**
There's just like a lot of pain right now all around us in the tech industry. I think about today and probably the next year or so. For people who are really questioning their next steps in their product careers, whether they stay in it, whether they move into something adjacent or relevant, they're looking to sharpen their skills, maybe make a site pivot to ops, whatever it is. I'm really interested to just gather more data on this and see how it all plays out while also trying to see if I can make some connections. So, I've been able to do that. Full circle back to Ben, Ben did this for me and you. I think that it's really important that the product community is smaller than we think. It's large and it feels expansive, but it's smaller than we think.

**中文翻译:**
现在科技行业到处都是痛苦。考虑到现在以及未来一年左右的情况，对于那些真正质疑自己产品职业生涯下一步的人——是留下来，还是转向相邻或相关的领域，是磨练技能，还是转向运营——无论是什么，我都非常有兴趣收集更多关于这方面的数据，看看事情会如何发展，同时也尝试建立一些连接。我已经能做到这一点了。回到 Ben 的话题，Ben 为我和你建立了连接。我认为产品社区比我们想象的要小，这一点非常重要。它很大，感觉很广阔，但其实比我们想象的要小。

---

### [01:05:43] [Christine Itwaru]

**English:**
I think we're all facing an interesting time where people may be, again, questioning that next move or struggling. It would just be amazing for us to share. So, cheesy as it may sound, product ops for me was an easy way to be able to connect the dot and be that partner, right? Talk about the transparency and alignment. If there's a way that this community can help empower me to do more of that for all of you, I think that that would be incredibly helpful.

**中文翻译:**
我认为我们都面临着一个有趣的时期，人们可能再次质疑下一步行动或陷入挣扎。如果我们能互相分享，那就太棒了。所以，尽管听起来有点俗气，但产品运营对我来说是连接点并成为那个伙伴的一种简单方式，对吧？谈论透明度和对齐。如果这个社区有办法赋能我，让我为你们大家做更多这样的事，我认为那将非常有帮助。

---

### [01:06:06] [Lenny]

**English:**
What a beautiful way to end it. Christine, thank you again for being here.

**中文翻译:**
多么完美的结尾。Christine，再次感谢你的到来。

---

### [01:06:10] [Christine Itwaru]

**English:**
Thank you. This was so fun.

**中文翻译:**
谢谢，这非常有趣。

---

### [01:06:12] [Lenny]

**English:**
So much fun. Bye, everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcast, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
非常有趣。大家再见。非常感谢收听。如果你觉得这期节目有价值，可以在 Apple Podcast、Spotify 或你喜欢的播客应用上订阅本节目。此外，请考虑给我们评分或留下评论，这能真正帮助其他听众找到这个播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目见。