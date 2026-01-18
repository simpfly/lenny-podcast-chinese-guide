# Itamar Gilad - 双语对照

This is the complete bilingual transcript for Lenny's Podcast featuring Itamar Gilad.

---

### [00:00:00] Itamar Gilad

**English:**
You fake it, you do a fake door test, you do a smoke test, Wizard of Oz tests. We used a lot of those in the tabbed inbox by the way, one of the first early versions was actually we showed the tabbed inbox working to people. But it wasn't really Gmail, it was just a facade of HTML and behind the scenes and according to the permissions that the users gave us some of us moved just the subject and the sender into the right place. So initially the interviewer kind of distracted them and then showed them their inbox and then the top 50 messages were sorted to the right place more or less if we got it right. And people were like, "Wow, this is actually very cool." But it gave us some evidence to go and say, "Hey, we should try and build this thing."

**中文翻译:**
你可以“造假”，比如做虚假门测试（Fake Door Test）、冒烟测试（Smoke Test）或者绿野仙踪测试（Wizard of Oz Test，指前端看起来是自动的，后端其实是人工操作）。顺便说一下，我们在做 Gmail 分类收件箱（Tabbed Inbox）时大量使用了这些方法。最初的早期版本之一，实际上是我们向用户展示了一个正在运行的分类收件箱。但那并不是真正的 Gmail，只是一个 HTML 的外壳，在后台根据用户授予我们的权限，我们中的一些人手动将邮件主题和发件人移动到正确的位置。所以最初，访客谈话员会分散他们的注意力，然后向他们展示收件箱，如果操作正确的话，前 50 条消息会大致被分类到正确的地方。人们的反应是：“哇，这真的很酷。”这给了我们证据去说：“嘿，我们应该尝试真正开发这个功能。”

---

### [00:00:43] Lenny

**English:**
Welcome to Lenny's Podcast where I interview world-class product leaders and growth experts to learn from their hard won experiences, building and growing today's most successful products. Today my guest is Itamar Gilad. Itamar, is a product coach, author, speaker and former longtime product manager at Google where you worked on Gmail, identity and YouTube. He also just published an awesome new book called Evidence-Guided: Creating High-Impact Products in the Face of Uncertainty. Itamar, has an important perspective on why and also how you can push your team and organization from an opinion-based decision-making process to a more evidence guided approach. In our conversation, Itamar, shares a number of very practical and handy frameworks that do just that including the confidence meter, metrics trees, GIST and the GIST board, plus his take on how people often misuse ICE for prioritizing ideas. Also, how you could make your OKRs more effective and so much more. Enjoy this episode with Itamar Gilad, after a short word from our sponsors. This episode is brought to you by Ezra, the leading full body cancer screening company.

**中文翻译:**
欢迎来到 Lenny 的播客。在这里，我会采访世界级的跨国产品领导者和增长专家，学习他们通过艰辛努力换来的经验，了解他们是如何打造和增长当今最成功产品的。今天的嘉宾是 Itamar Gilad。Itamar 是一位产品教练、作家、演讲者，曾长期在 Google 担任产品经理，负责过 Gmail、身份认证（Identity）和 YouTube。他刚刚出版了一本非常棒的新书，名为《证据导向：在不确定性中创造高影响力的产品》（Evidence-Guided: Creating High-Impact Products in the Face of Uncertainty）。Itamar 对于为什么要推动、以及如何推动你的团队和组织从“基于意见”的决策过程转向“基于证据”的方法有着深刻的见解。在我们的对话中，Itamar 分享了许多非常实用且便捷的框架，包括信心指数（Confidence Meter）、指标树（Metrics Trees）、GIST 模型和 GIST 看板，此外他还谈到了人们在对想法进行优先级排序时经常误用 ICE 模型的情况。还有如何让你的 OKR 更有效等等。在听完赞助商的简短介绍后，请欣赏本期与 Itamar Gilad 的对话。本集由领先的全身癌症筛查公司 Ezra 赞助。

---

### [00:01:49] Lenny (Sponsorships)

**English:**
I actually used Ezra, earlier this year unrelated to this podcast completely on my own dime because my wife did one and loved it and I was super curious to see if there's anything that I should be paying attention to in my body as I get older. The way it works is you book an appointment, you come in, you put on some very cool silky pajamas that they give you that you get to keep afterwards. You go into an MRI machine for 30 to 45 minutes and then about a week later you get this detailed report sharing what they found in your body. Luckily, I had what they called an unremarkable screening which means they didn't find anything cancerous. But they did find some issues in my back which I'm getting checked out at a physical next month probably because I spend so much time sitting in front of a computer. Half of all men will have cancer at some point in their lives, as will one third of women. Half of all of them will detect it late.

**中文翻译:**
今年早些时候，我实际上完全自费使用了 Ezra 的服务，这与播客无关。因为我妻子做了一次并觉得非常好，我也非常好奇随着年龄增长，我的身体里是否有什么需要注意的地方。它的工作流程是：你预约时间，到场后换上他们提供的非常酷的丝绸睡衣（之后你可以带走）。你在核磁共振（MRI）机器里待 30 到 45 分钟，大约一周后，你会收到一份详细的报告，分享他们在你体内发现的情况。幸运的是，我的筛查结果被他们称为“无异常”（unremarkable），这意味着他们没有发现任何癌症迹象。但他们确实发现了我背部的一些问题，我下个月会在体检中进一步检查，这可能是因为我坐在电脑前的时间太长了。一半的男性和三分之一的女性在生命中的某个阶段会患上癌症。而其中一半的人发现时已经太晚了。

---

### [00:02:40] Lenny (Sponsorships Continued)

**English:**
According to the American Cancer Society, early cancer detection has an 80% survival rate compared to less than 20% for late stage cancer. The Ezra, team has helped 13% of their customers identify potential cancer early and 50% of them identify other clinically significant issues such as aneurysms, disc herniations, which may be is what I have or fatty liver disease. Ezra, scans for cancer and 500 other conditions in 13 organs using a full body MRI powered by AI and just launched the world's only 30-minute full body scan which is also their most affordable. Their scans are non-invasive and radiation free and Ezra, is offering listeners $150 off their first scan with code Lenny150. Book your scan at ezra.com/lenny. That's E-Z-R-A.com/lenny. This episode is brought to you by Vanta, helping you streamline your security compliance to accelerate your growth. Thousands of fast-growing companies like Gusto, Quorum, Quora and Modern Treasury, trust Vanta to help build, scale, manage and demonstrate their security and compliance programs and get ready for audits in weeks not months. By offering the most in-demand security and privacy frameworks such as SOC 2, ISO 27001, GDPR, HIPAA, and many more.

**中文翻译:**
根据美国癌症协会的数据，癌症早期发现的存活率为 80%，而晚期则不到 20%。Ezra 团队已帮助 13% 的客户及早发现了潜在癌症，并帮助 50% 的客户发现了其他具有临床意义的问题，如动脉瘤、椎间盘突出（这可能就是我的问题）或脂肪肝。Ezra 使用由 AI 驱动的全身 MRI 扫描 13 个器官中的癌症和其他 500 种疾病，并刚刚推出了全球唯一的 30 分钟全身扫描，这也是他们最实惠的项目。他们的扫描是非侵入性且无辐射的。Ezra 为听众提供首检 150 美元的优惠，优惠码为 Lenny150。请在 ezra.com/lenny 预约。这就是 E-Z-R-A.com/lenny。本集由 Vanta 赞助，帮助你简化安全合规流程，加速增长。数千家快速增长的公司，如 Gusto、Quorum、Quora 和 Modern Treasury，都信任 Vanta 来帮助构建、扩展、管理和展示其安全合规计划，并在几周而非几个月内准备好审计。Vanta 提供最受需求的各种安全和隐私框架，如 SOC 2、ISO 27001、GDPR、HIPAA 等。

---

### [00:04:02] Lenny (Sponsorships Continued)

**English:**
Vanta, helps companies obtain the reports they need to accelerate growth, build efficient compliance processes, mitigate risks to their businesses and build trust with external stakeholders. Over 5,000 fast-growing companies use Vanta to automate up to 90% of the work involved with SOC 2 and these other frameworks. For a limited time Lenny's Podcast listeners get $1,000 off Vanta. Go to vanta.com/lenny, that's V-A-N-T-A.com/lenny to learn more and to claim your discounts get started today. Itamar, thank you so much for being here. Welcome to the podcast.

**中文翻译:**
Vanta 帮助公司获得加速增长所需的报告，建立高效的合规流程，降低业务风险，并与外部利益相关者建立信任。超过 5,000 家快速增长的公司使用 Vanta 将 SOC 2 等框架涉及的工作自动化程度提高到 90%。在限定时间内，Lenny 播客的听众可以享受 Vanta 1,000 美元的优惠。访问 vanta.com/lenny，即 V-A-N-T-A.com/lenny，了解更多信息并领取折扣，今天就开始吧。Itamar，非常感谢你能来到这里。欢迎来到本播客。

---

### [00:04:40] Itamar Gilad

**English:**
It's a pleasure being here, thank you for inviting me.

**中文翻译:**
很高兴来到这里，谢谢你的邀请。

---

### [00:04:42] Lenny

**English:**
It's my pleasure. I thought we'd start with the story of your work on Google+ and Gmail and how those experiences formed your perspective on how to build a successful product. Can you share that story?

**中文翻译:**
这是我的荣幸。我想我们可以从你在 Google+ 和 Gmail 的工作经历开始聊起，以及这些经历是如何塑造你对如何打造成功产品的看法的。你能分享一下那个故事吗？

---

### [00:04:57] Itamar Gilad

**English:**
Google+ was my first experience at Gmail, I joined Gmail in August 2011 and the first thing they asked me is, "Let's connect Gmail with Google+." If you're hazy about the story, back then Facebook was massive. It's still massive but then it was growing like mushrooms, people were spending hours. That really freaked out Google and the obvious solution was to launch a social network of Google called Google+ and we all believe in this thing, it really caught on very well initially we all used it, we all believed in it. So our mission was to build this thing and Google really cut no costs. It created a whole new division within Google and it created a whole strategy around Google+ and we had to connect Gmail and YouTube and search to Google+ to make them more personalized in a sense and more social. So that was the idea and we went on and we launched a series of features in Gmail for a couple of years, honestly and Google+ itself became this massive project, very feature rich and with a lot of redesigns and iterations and none of it worked.

**中文翻译:**
Google+ 是我在 Gmail 的第一段经历。我是在 2011 年 8 月加入 Gmail 的，他们对我说的第一件事就是：“让我们把 Gmail 和 Google+ 连接起来。”如果你对那段历史不太清楚，当时 Facebook 非常庞大。它现在依然庞大，但当时它正像雨后春笋般增长，人们在上面花费数小时。这真的让 Google 感到恐慌，显而易见的解决方案就是推出 Google 自己的社交网络，名为 Google+。我们当时都相信这个东西，最初它确实很受欢迎，我们都在用，也都深信不疑。所以我们的使命就是打造这个产品，Google 真的不计成本。它在 Google 内部创建了一个全新的部门，并围绕 Google+ 制定了完整的战略。我们必须将 Gmail、YouTube 和搜索连接到 Google+，从某种意义上说，是为了让它们更具个性化和社交性。这就是当时的初衷。我们持续了几年，在 Gmail 中推出了一系列功能，而 Google+ 本身也变成了一个庞大的项目，功能非常丰富，经历了大量的重新设计和迭代，但最终都没有奏效。

---

### [00:06:09] Itamar Gilad (Continued)

**English:**
It turned out people actually didn't need another social network, people didn't love it, people didn't use it. Eventually in Gmail we rolled back all the Google+ integration a few years later and Google+ itself was shut down in 2019. So putting aside all the tremendous waste that went into this, all the millions of person hours and personal weeks. In hindsight, not only did Google bet on the wrong thing it missed much easier opportunities. So just not far from Google's headquarters there was WhatsApp, not very famous in the US but they actually created massive impact. Hundreds of millions of people were using their stuff and they became a threat to Facebook much more than Google was. So Google missed the opportunity of social mobile apps like WhatsApp, like Snapchat, etc and for me this story kind of was the epitome of what I call today, opinion-based development. We come up with an idea, we believe in it, all the indications show it's good.

**中文翻译:**
事实证明，人们其实并不需要另一个社交网络，人们不喜欢它，也不使用它。最终，几年后我们在 Gmail 中撤回了所有的 Google+ 集成，而 Google+ 本身也在 2019 年关闭了。撇开投入其中的巨大浪费不谈——那可是数百万的人时和人周。事后看来，Google 不仅赌错了方向，还错过了更容易成功的机会。就在离 Google 总部不远的地方，有 WhatsApp，当时在美国不太出名，但他们实际上创造了巨大的影响力。数亿人在使用他们的产品，他们对 Facebook 的威胁远比 Google 大。所以 Google 错过了像 WhatsApp、Snapchat 等社交移动应用的机会。对我来说，这个故事就是我今天所说的“基于意见的开发”（opinion-based development）的缩影。我们想出一个主意，我们相信它，所有的迹象都表明它很好。

---

### [00:07:13] Itamar Gilad (Continued)

**English:**
Maybe the early tests show it's good, then we just go all in and we try to implement it and I made this very mistake many times as the product manager, I was the guy pushing for the ideas. So for me, this was kind of a turning point I felt we need to adopt a different system.

**中文翻译:**
也许早期测试显示它不错，然后我们就全力以赴尝试去实现它。作为产品经理，我多次犯过这个错误，我就是那个推动这些想法的人。所以对我来说，这是一个转折点，我觉得我们需要采用一套不同的系统。

---

### [00:07:32] Lenny

**English:**
And just before you move on to the next story, how big was the team? Roughly how many years was spent on this area? Just to give people a sense of the waste as you said.

**中文翻译:**
在你讲下一个故事之前，那个团队有多大？大约在这个领域花了多少年？只是为了让大家对你所说的“浪费”有个直观的感受。

---

### [00:07:41] Itamar Gilad

**English:**
So there was a tremendous earthquake inside Google to create the Google+ team, teams and the entire divisions were kind of thrown apart and reformatted and I think at its peak it was about 1000 people inside-

**中文翻译:**
为了创建 Google+ 团队，Google 内部发生了一场巨大的“地震”，团队和整个部门都被拆散并重新格式化。我想在巅峰时期，内部大约有 1000 人——

---

### [00:07:55] Lenny

**English:**
Wow, [inaudible 00:07:56].

**中文翻译:**
哇，（听不清）。

---

### [00:07:56] Itamar Gilad

**English:**
It was a division the size of Android and Docs and a really sizable thing, they're under their own buildings. It's taken from the playbook of Steve Jobs, create this whole secretive project inside and just run like hell.

**中文翻译:**
那是一个规模相当于 Android 和 Google Docs 的部门，非常庞大，他们有自己的办公楼。这借鉴了史蒂夫·乔布斯的剧本：在内部创建一个完全保密的秘密项目，然后拼命奔跑。

---

### [00:08:13] Lenny

**English:**
Yeah. I remember though Facebook was really scared, I remember they shut everything down. It as like a code DEFCON one situation too, so it really scared Facebook at the same time.

**中文翻译:**
是的。但我记得当时 Facebook 真的很害怕，我记得他们关闭了所有其他事务（全力应对）。那就像是进入了“一级战备”（DEFCON 1）状态，所以当时它确实也吓到了 Facebook。

---

### [00:08:22] Itamar Gilad

**English:**
Yeah, it's true. But at the end of the day, neither Google's advertising revenue was affected, neither was Facebook affected. So it turned out this idea was not that necessary after all.

**中文翻译:**
是的，没错。但归根结底，Google 的广告收入没有受到影响，Facebook 也没有受到影响。所以事实证明，这个想法终究没那么必要。

---

### [00:08:35] Lenny

**English:**
Yeah, okay. So that's an example of something that didn't work because it was opinion based software, I think the phrase you used and then there's a different experience with tabs I think with Gmail.

**中文翻译:**
好。那是一个因为“基于意见的软件开发”（你用的这个词）而失败的例子。然后我记得在 Gmail 的分类标签（Tabs）上有一段不同的经历。

---

### [00:08:47] Itamar Gilad

**English:**
That's right. So Google, is a very successful company. It's not for me to criticize it or to in hindsight kind of say you guys need to be better and some of the people that were behind Google+ was some of the smartest leaders and I still think they are despite this story. If you look back at the history of Google, how things started in the first decade or so. Google, was what I call an evidence guided company. So essentially it put a high premium on focusing on customers, coming up with a lot of ideas on looking at the data, looking at how these ideas actually worked out. They weren't shy about launching betas and things that were very rough and incomplete and learning from that and then they expected people to take action based on the results. So fail fast is a very famous paradigm and so you had to kill your project or pivot it seriously if it didn't work out and I think had we kept fail fast it would've really have helped Google+, if we had this mentality.

**中文翻译:**
没错。Google 是一家非常成功的公司。我无意批评它，或者事后诸葛亮地说你们应该做得更好。Google+ 背后的一些人曾是最聪明的领导者，尽管发生了这个故事，我依然这么认为。如果你回顾 Google 的历史，看看它在前十年左右是如何起步的。Google 曾是我所说的“证据导向型”公司。本质上，它非常重视关注客户，提出大量想法，观察数据，看这些想法实际效果如何。他们不避讳发布 Beta 版以及非常粗糙、不完整的东西，并从中学习，然后他们期望人们根据结果采取行动。“快速失败”（Fail fast）是一个非常著名的范式，如果项目行不通，你就必须砍掉它或进行重大转型。我认为如果我们保持这种“快速失败”的心态，真的会对 Google+ 有很大帮助。

---

### [00:09:56] Itamar Gilad (Continued)

**English:**
But for some reason with Google+, Google put this playbook aside and used a different playbook which I call plan and execute essentially. But I think inside Google the DNA still existed. So inside Gmail, the next project after Google+ was the tabbed inbox. So it was kind of the reverse of Google+, it started as a very small idea that no one believed in and we started looking what's behind the city? What's the goal? What's the problem actually we're trying to solve? It turned out that a lot of people were receiving social notifications and promotions, etc, and most of them were very passive. They weren't clearing their inbox, they were just living in this world of clutter and I came up with an idea how to fix this. I was sure it was great, I wanted to push it, plan and execute, but my colleagues were like, "Hold on, we actually tried this. We have a bunch of ideas to help people organize their inbox, they're not using it. Why is your idea good?"

**中文翻译:**
但出于某种原因，在 Google+ 上，Google 把这套剧本搁置一旁，使用了另一套我称之为“计划并执行”的剧本。但我认为在 Google 内部，那种 DNA 依然存在。在 Gmail 内部，Google+ 之后的下一个项目就是分类收件箱。它有点像 Google+ 的反面：它始于一个没人相信的小想法，我们开始研究这背后的本质是什么？目标是什么？我们到底在尝试解决什么问题？结果发现，很多人会收到社交通知、促销信息等，而大多数人对此非常被动。他们不去清理收件箱，只是生活在这一堆杂乱中。我提出了一个解决办法。我确信它很棒，我想推动它，“计划并执行”，但我的同事们说：“等等，我们其实尝试过这个。我们有很多帮助人们整理收件箱的想法，但他们不用。为什么你的主意就好呢？”

---

### [00:10:57] Itamar Gilad (Continued)

**English:**
So that sent us, kind of me and my team into researching these users into establishing a goal that was much more user-centric and then thinking of other ideas. And then we started testing them much more rigorously and basically we started testing on our own inboxes and then we recruited other dog footers, other Googlers to test the same inbox, then we put it outside for external testers. We did usability studies, we did data, we built a whole data mining team and a whole machine learning team to build the right categorization and we ended up with a solution that turned out to be very successful for a lot of these passive users. This was a surprise to a lot of people because most of my colleagues and most of the people I talk with actually know how to manage their inbox. So for them that solution makes complete nonsense, like splitting promotions and social to the side sounds like the stupidest idea. But there's about 85% of the population, 85 to 88% that absolutely love it and today Gmail has about 1.8 billion active users according to Gmail.

**中文翻译:**
这促使我和我的团队去研究这些用户，建立一个更以用户为中心的目标，然后思考其他的点子。接着我们开始更严格地测试它们。基本上，我们先在自己的收件箱上测试，然后招募其他“吃狗粮”的人（内部试用者），即其他 Google 员工来测试同样的收件箱，接着我们把它推给外部测试者。我们做了可用性研究，分析了数据，建立了一个完整的数据挖掘团队和机器学习团队来构建正确的分类。最终我们得到了一个对大量被动用户非常成功的解决方案。这让很多人感到意外，因为我的大多数同事和我交流的大多数人实际上都知道如何管理自己的收件箱。对他们来说，那个解决方案完全没意义，比如把促销和社交邮件分到一边听起来像是最愚蠢的主意。但大约有 85% 到 88% 的人群绝对喜欢它。根据 Gmail 的数据，今天 Gmail 拥有约 18 亿活跃用户。

---

### [00:12:14] Itamar Gilad (Continued)

**English:**
Most of these users are using this feature, so it was a pretty high impact feature as well.

**中文翻译:**
大多数用户都在使用这个功能，所以它也是一个影响力非常大的功能。

---

### [00:12:20] Lenny

**English:**
And the feature specifically, just in case people aren't totally getting it is the promotions folder and the social I think and then the regular.

**中文翻译:**
这个具体的功能，以防大家还没完全明白，就是“促销”文件夹、“社交”文件夹，然后是“主要”邮件。

---

### [00:12:27] Itamar Gilad

**English:**
Yeah, there are a couple more that you can enable in settings if you like.

**中文翻译:**
是的，如果你愿意，还可以在设置中启用更多分类。

---

### [00:12:30] Lenny

**English:**
Yeah, I use it, I love it. Except it puts my newsletter in people's promotions folder, who do I talk to about that?

**中文翻译:**
是的，我在用，我很喜欢。除了它会把我的新闻通讯（Newsletter）放进人们的促销文件夹，我该找谁反映这个问题？

---

### [00:12:36] Itamar Gilad

**English:**
Yeah. Newsletters are a very complicated scenario for the categorization engine.

**中文翻译:**
哈哈，对于分类引擎来说，新闻通讯确实是一个非常复杂的场景。

---

### [00:12:41] Lenny

**English:**
Yeah. We just need an exception for my newsletter and then we're good. Okay, but go on.

**中文翻译:**
是的，我们只需要给我的新闻通讯设个例外就行了。好，请继续。

---

### [00:12:45] Itamar Gilad

**English:**
So in hindsight I was asking and saying, "Why was this project so different?" And I think the reason is that we didn't have that much confidence in our opinions. We had opinions, we had ideas but we didn't just go all in and just let's build it. We actually used an evidence guided system and I think that's not unique just to Google. I think every successful product company out there that you look at Amazon, Airbnb, anyone you will check, at least in their best periods they found a way to balance human judgment with evidence. They didn't try to obliterate human judgment and opinion just to supercharge them with evidence and they came up with very different models. Apple, is another example but the principle still holds in all of these companies.

**中文翻译:**
事后看来，我一直在问：“为什么这个项目如此不同？”我认为原因是，我们对自己的意见并没有那么大的信心。我们有意见，有想法，但我们没有直接全力投入去开发。我们实际上使用了一套证据导向的系统。我认为这不仅仅是 Google 特有的。如果你观察任何一家成功的公司，亚马逊、Airbnb，你会发现，至少在它们最辉煌的时期，它们都找到了一种平衡人类判断与证据的方法。它们并没有试图抹杀人类的判断和意见，而是用证据来增强它们。它们提出了非常不同的模型。苹果是另一个例子，但这一原则在所有这些公司中依然适用。

---

### [00:13:33] Lenny

**English:**
Awesome. So you took that experience and all the experience you've had from coaching product leaders working with companies and you wrote this book called Evidence-Guided, which people on YouTube could see sitting there behind you. So I want to talk through some of these stories and then some of these other lessons and frameworks that emerged. But maybe just to start, what's the elevator pitch for this book?

**中文翻译:**
太棒了。所以你带着那段经历，以及你后来辅导产品领导者、与各公司合作的所有经验，写了这本名为《证据导向》（Evidence-Guided）的书，YouTube 上的观众可以看到它就在你身后。我想聊聊其中的一些故事，以及由此产生的一些教训和框架。但也许我们可以先从这本书的“电梯演讲”（简短介绍）开始？

---

### [00:14:23] Itamar Gilad

**English:**
So this is a book for people like us, product people who want to bring evidence guided thinking or modern product management if you like into their organizations. There's a lot of challenges, it's not simple, we all read the books, we all know the theory, we all know some parts of the system. It tries to give you a system how to do that, it's a meta framework that kind of helps you lift your organization in the direction of evidence guidance if that's what you want to do.

**中文翻译:**
这本书是写给像我们这样的人的——那些想要将证据导向思维（或者如果你愿意，称之为现代产品管理）引入自己组织的产品人。这其中有很多挑战，并不简单。我们都读过书，知道理论，了解系统的某些部分。这本书试图为你提供一套如何实现这一目标的系统。它是一个元框架（meta framework），如果你想这样做的话，它可以帮助你引导组织朝着证据导向的方向提升。

---

### [00:15:01] Lenny

**English:**
So going back to the story briefly before we get into the frameworks and lessons of the book. In the first example of Google+, basically it came top down, "Hey, we need to build a social network, go build it." Obviously that happens at a lot of companies, I don't know if there's an easy answer to this. But are there cases where it does make sense to approach it that way? Obviously Apple is a classic example of Steve Jobs, is like we need to build an iPhone. I don't know if that's exactly how it went. But are there instances where it is worth just approaching new product ideas that way based on the experience and creativity and insights of the founder? Or is your thinking it should always come from this evidence-based approach?

**中文翻译:**
在深入探讨书中的框架和教训之前，简短地回到那个故事。在 Google+ 的第一个例子中，基本上是自上而下的：“嘿，我们需要建立一个社交网络，去开发吧。”显然这在很多公司都会发生，我不知道这是否有简单的答案。但在某些情况下，以这种方式处理是否有意义？显然苹果是一个经典的例子，史蒂夫·乔布斯说我们需要造一部 iPhone。我不知道具体过程是否如此。但在某些情况下，仅仅基于创始人的经验、创造力和洞察力来处理新产品想法是否值得？还是说你认为应该始终采用这种基于证据的方法？

---

### [00:15:01] Itamar Gilad

**English:**
I think the founders are very important, especially in the startup and scale-ups phase. They come up with many of the most important ideas and it's super important that they have the space to express and to push the organization to look at those. However, it's not about shutting them down it's about looking at them critically. You need to create the environment in the organization where the leader comes and says, "You know what? I talked to these three customers, I figured it out. Here's what we need to do in the next five years." And you need to ask, "Where's your evidence?" And by the way, the example you give that's a classic example. Steve Jobs, he just brainstorm in his kitchen the iPhone and then just told the team to build it. That's the story Steve Jobs, told but it's not the real story at all. Now we know what actually happened and the iPhone has actually a story of discovery, of trial and error, multiple projects to do it, multitouch with phones, most of them failed.

**中文翻译:**
我认为创始人非常重要，特别是在初创和规模化阶段。他们提出了许多最重要的想法，让他们有空间表达并推动组织去关注这些想法是至关重要的。然而，这并不是要让他们闭嘴，而是要批判性地看待这些想法。你需要在组织中创造一种环境，当领导者过来说：“你知道吗？我跟这三个客户聊过了，我搞明白了。这就是我们未来五年需要做的。”这时你需要问：“你的证据在哪里？”顺便说一下，你举的例子很经典。史蒂夫·乔布斯，他在厨房里构思了 iPhone，然后就告诉团队去造。这是乔布斯讲的故事，但根本不是真实的故事。现在我们知道实际发生了什么，iPhone 实际上是一个关于探索、试错的故事，有多个项目在做，包括带手机功能的多点触控，其中大部分都失败了。

---

### [00:16:02] Itamar Gilad (Continued)

**English:**
Steve Jobs, was the architect. He kind of managed to connect the dots and eventually come up with this perfect device but he wasn't actually the creator, it wasn't his brainchild. He was actually against it for a while but over time as he saw the evidence, as he saw what this thing can do, as he saw the demos he was able to piece together something that was very useful.

**中文翻译:**
史蒂夫·乔布斯是架构师。他设法将这些点连接起来，最终构思出了这个完美的设备，但他实际上并不是创造者，这不完全是他一个人的主意。他实际上曾反对过一段时间，但随着时间的推移，当他看到证据，看到这东西能做什么，看到演示时，他能够拼凑出一些非常有用的东西。

---

### [00:16:26] Lenny

**English:**
That's really important insight. People that are hearing this might feel like I like this idea of pushing back and encouraging the founders to make it more evidence guided. In the case of say Google+, was it even possible? Could you have come to Larry and Sergey and be like, "Here's all this data I've gathered that tells us this is not going to work?" Do you have any advice for how to push back and encourage the founders and execs to really take the counterpoint seriously or really kind of vet their idea?

**中文翻译:**
这是非常重要的见解。听到这些的人可能会觉得，我喜欢这种“推回去”并鼓励创始人更加以证据为导向的想法。但在 Google+ 的案例中，这真的可能吗？你能去找拉里（Larry Page）和谢尔盖（Sergey Brin）说：“这是我收集的所有数据，显示这行不通”吗？对于如何推回去并鼓励创始人及高管认真对待反对意见，或者真正审查他们的想法，你有什么建议吗？

---

### [00:16:58] Itamar Gilad

**English:**
So another nice thing about Google is that it's a very open culture and people are not shy to tell even Sergey and Larry that they are wrong and they do this all the time. In certain forms, right? You need to know the right channels. But there was a very big discussion about Google+ and whether it's the right thing to create a clone of Facebook, there was a very public internal discussion. I think what I would change is not have this discussion based on opinions, because when you have the discussion you come with your own opinions usually the most senior person's opinions will win. That's just the way it is. If we had come with hard data and we said, "Listen, things are not actually panning out the way you guys are expecting. What can we do? Should we continue? Should we pivot this?" I think the discussion would've done better. Now I'm doing a huge disservice, I was not in all the discussions. I know probably in Google+, there were very serious discussions happening along these lines.

**中文翻译:**
Google 的另一个优点是它有一种非常开放的文化，人们甚至不避讳告诉谢尔盖和拉里他们错了，而且他们经常这么做。当然是在某些形式下，对吧？你需要知道正确的渠道。关于 Google+ 以及创建一个 Facebook 的克隆版是否正确，当时有过非常激烈的讨论，那是一场非常公开的内部讨论。我想我会改变的是，不要基于意见进行这种讨论。因为当你讨论时，如果你带着自己的意见，通常职位最高的人的意见会胜出。事实就是这样。如果我们带着硬数据来，说：“听着，事情并没有像你们预期的那样发展。我们能做什么？应该继续吗？应该转型吗？”我认为讨论的效果会更好。当然，我这么说可能不太公平，我并没有参与所有的讨论。我知道在 Google+ 项目中，可能确实发生过很多基于这些思路的严肃讨论。

---

### [00:18:02] Itamar Gilad (Continued)

**English:**
But it's just as a general trend, I find that evidence is very empowering for us smaller people in the organization or mid-level managers to be empowered to challenge the opinions.

**中文翻译:**
但就总体趋势而言，我发现证据对于组织中的普通员工或中层管理人员来说是非常有力量的，它能赋予我们挑战权威意见的权力。

---

### [00:18:15] Lenny

**English:**
Is there anything tactically you found to be useful and effective in giving people, say they don't work at Google. They work at companies where founders and bosses and execs are not as open to challenge. [inaudible 00:18:26] any tactically found about how to present a counter proposal or like, "Hey, I have this data that we should really pay attention to?"

**中文翻译:**
在战术上，你有没有发现什么对那些不在 Google 工作的人有用且有效的方法？比如他们在那些创始人、老板和高管不那么乐于接受挑战的公司工作。在如何提出反对方案，或者说“嘿，我有这些数据，我们真的应该关注一下”方面，有什么战术心得吗？

---

### [00:18:33] Itamar Gilad

**English:**
I think if you come with data, if you run a secret experiment and you come back and you show them you usually get one of two results. Either they get extremely mad at you and they tell you to get back to work and to do what you were told and in that case, probably you need to start polishing your resume and look for another place either inside the organization or outside it because that person is not being reasonable to be honest. But the more common case is they're pleasantly surprised and that's what happened with Steve Jobs, as well. He was against phones but then people showed him all sorts of evidence that Apple can make a phone. He was against multitouch initially but then he changed his mind, there was a lot of back and forth. So even, Steve Jobs, given evidence was willing to flip and I say this in many organizations. So evidence is so powerful, that's why this is the principle I based the book on.

**中文翻译:**
我认为如果你带着数据来，如果你运行了一个秘密实验，然后回来展示给他们看，通常会得到两种结果之一。要么他们对你大发雷霆，让你回去工作，按吩咐办事——在这种情况下，你可能需要开始润色简历，在组织内部或外部寻找另一个去处了，因为老实说，那个人并不讲理。但更常见的情况是，他们会感到惊喜。史蒂夫·乔布斯也是如此。他曾反对做手机，但后来人们向他展示了各种证据，证明苹果可以做手机。他最初反对多点触控，但后来改变了主意，中间有很多反复。所以即使是史蒂夫·乔布斯，在看到证据后也愿意转变立场。我在很多组织中都看到了这一点。所以证据是如此强大，这就是我写这本书所基于的原则。

---

### [00:19:28] Lenny

**English:**
You have this concept of being evidence guided. People listening may feel like, "Hey, we're evidence guided, we're in experiments, we make decisions using data." Oftentimes they aren't actually and so what are signs that maybe you're not actually that evidence guided or as evidence guided as you think you are?

**中文翻译:**
你提出了“证据导向”这个概念。听众可能会觉得：“嘿，我们就是证据导向的，我们做实验，我们用数据做决策。”但通常他们实际上并不是。那么，有哪些迹象表明你可能并没有你想象中那么以证据为导向？

---

### [00:19:45] Itamar Gilad

**English:**
I think there's a few telltale signs that I look for, first the goals are very unclear. Either there are many or they're very kind of obscure and vague or they are about output, there's misalignment. So the goals part is not there, usually this goes hand in hand with metrics. Missing metrics or just using revenue and business metric but there's no user facing metrics. So that's another telltale sign, then there's a lot of time and effort spent on planning especially on road mapping. Creating the perfect roadmap which really can consume a lot of time of the top management and PMs, etc. Then as you go down you see there's not a lot of experimentation and if there is experimentation there's not a lot of learning and finally another telltale sign is that the team is disengaged. So the engineers are kind of getting the signal that what they need to do is deliver, they're focused on output, that's what they're measured on. So they're kind of disengaged, they're disengaged from the users, from the business, they don't care that much.

**中文翻译:**
我认为我会寻找几个明显的迹象。首先，目标非常不明确。要么目标太多，要么非常晦涩模糊，或者目标是关于“产出”（output）的，存在错位。所以目标部分缺失了，这通常与指标挂钩。缺失指标，或者只使用收入和业务指标，而没有面向用户的指标。这是另一个迹象。然后，在计划上花费了大量的时间和精力，特别是路线图（roadmapping）。试图创建完美的路线图，这真的会消耗高层管理人员和 PM 大量的时间。再往下看，你会发现实验并不多，即使有实验，学习（learning）也不多。最后，另一个迹象是团队缺乏参与感。工程师们收到的信号是他们只需要交付，他们专注于产出，因为那是衡量他们的标准。所以他们有点脱节，与用户脱节，与业务脱节，他们并不那么在乎。

---

### [00:20:57] Itamar Gilad (Continued)

**English:**
It's usually something that you can fix by adopting a more evidence guided system.

**中文翻译:**
这些通常是可以通过采用更具证据导向的系统来解决的问题。

---

### [00:21:05] Lenny

**English:**
Okay. So let's dive into your approach to becoming more evidence guided. In the book, you share this model that you call the GIST model which is kind of this overarching approach to building a product that almost forces you to be more evidence guided. So let's just start with what's the simplest way to understand this GIST model?

**中文翻译:**
好。那让我们深入探讨一下你成为证据导向的方法。在书中，你分享了一个你称之为 GIST 的模型，这是一种打造产品的全局方法，几乎能迫使你变得更加以证据为导向。那么，理解这个 GIST 模型最简单的方法是什么？

---

### [00:21:26] Itamar Gilad

**English:**
With your permission, I can show a few slides.

**中文翻译:**
如果允许的话，我可以展示几张幻灯片。

---

### [00:21:28] Lenny

**English:**
Oh, let's do it.

**中文翻译:**
噢，来吧。

---

### [00:21:29] Itamar Gilad

**English:**
And maybe that will help. All right, you're seeing this? So this is the GIST model, goals, ideas, steps and tasks, and essentially it's tries to break the change which is a really big change for a lot of companies into four slightly more manageable parts. They're still big but each one you can tackle on its own and that's kind of the reason I kind of split it, and goals are about defining what we're trying to achieve, ideas are hypothetical ways to achieve the goals, steps are ways to implement the idea and validate it at the same time. So essentially build, measure learn loops and tasks are the things we manage in Kanban and Jira and all these good tools. These are the things that your development team is usually very focused on and just listening to this, a lot of this will sound familiar to you because GIST is not a brand new invention. It's a meta framework that puts in place a lot of existing methodologies. It's based on lean startup, on design thinking, product discovery, growth, There's a lot of all of these things here. It just tries to put them all into one framework or one model.

**中文翻译:**
也许这会有所帮助。好，看到了吗？这就是 GIST 模型：目标（Goals）、想法（Ideas）、步骤（Steps）和任务（Tasks）。本质上，它试图将这种对很多公司来说非常巨大的变革分解为四个稍微容易管理的部分。它们依然很大，但每一个你都可以独立应对，这就是我拆分它的原因。**目标**是定义我们要实现什么；**想法**是实现目标的假设性方案；**步骤**是实施想法并同时进行验证的方法，本质上就是“构建-衡量-学习”的循环；**任务**则是我们在看板、Jira 和所有这些好工具中管理的事情。这些是你的开发团队通常非常关注的事情。听完这些，你会觉得很多内容都很熟悉，因为 GIST 并不是一个全新的发明。它是一个元框架，整合了许多现有的方法论。它基于精益创业（Lean Startup）、设计思维（Design Thinking）、产品探索（Product Discovery）、增长（Growth）等。这里包含了很多这些东西。它只是试图将它们全部放入一个框架或模型中。

---

### [00:22:43] Lenny

**English:**
So what's the simplest way to think about what this model is meant for? Is this how you think about your roadmap? Is this how you plan? What is this trying to tell people to do differently in the way they build product broadly?

**中文翻译:**
那么，思考这个模型用途的最简单方式是什么？这是你思考路线图的方式吗？这是你计划的方式吗？它试图告诉人们在广泛的产品构建方式上要做哪些不同的改变？

---

### [00:22:56] Itamar Gilad

**English:**
I would say these are four areas that you need to look at and ask, are we doing the right thing in each? In each you may need to change or even transform and as I go and explain each one of those I'll give you basically three things. In each chapter in the book I try to touch on three things. The principles behind them, the frameworks or models that implement the principles and then process and the process honestly is the most brittle part and the one that you would need to change and adapt to your company. Because not two companies are exactly the same, and it's very tempting when you write a book not to give any process but that's the part that people actually want the most. So it's included as well, but just be aware that you will have to change this process.

**中文翻译:**
我会说这是你需要审视的四个领域，并问自己：我们在每个领域做的事情对吗？在每个领域，你可能需要改变甚至转型。在我解释每一个领域时，我基本上会给你三样东西。在书的每一章中，我试图涉及三件事：背后的**原则**、实现这些原则的**框架或模型**，以及**流程**。老实说，流程是最脆弱的部分，也是你需要根据公司情况进行改变和调整的部分。因为没有两家公司是完全相同的。写书时很容易诱惑自己不提供任何流程，但那恰恰是人们最想要的部分。所以流程也包含在内，但请意识到你必须调整这个流程。

---

### [00:23:44] Lenny

**English:**
Awesome. Okay, so we're going to talk about each of these four layers. Before we do that, where do vision and strategy fit into this? Do they bucket into one of these four layers and how do you think about strategy and vision?

**中文翻译:**
太棒了。好，我们将讨论这四个层级中的每一个。在此之前，愿景（Vision）和战略（Strategy）在这个模型中处于什么位置？它们属于这四个层级中的某一个吗？你是如何看待战略和愿景的？

---

### [00:23:55] Itamar Gilad

**English:**
That's a great question, so there's this whole strategic context that is outside of GIST. GIST, is not trying to tackle that, it assumes it's in place, there's another huge blob which is research. GIST, is not about research it's more about discovery and delivery. But strategy is extremely important and you can use some of the tools we will talk about to develop your strategy as well. In many companies the strategy is just a roadmap on steroids, it's small plan and execute just on a grand scale and Google+ again, was a strategic choice actually if you think about it. So in the book there is a chapter where I touch on strategy and I explain how the same evidence guided methods are being used by companies to develop their strategy as well.

**中文翻译:**
这是一个好问题。在 GIST 之外，存在着整个战略背景。GIST 并不试图解决那个问题，它假设战略已经就位。还有另一个巨大的领域是研究（Research）。GIST 不关乎研究，它更多关乎探索（Discovery）和交付（Delivery）。但战略极其重要，你可以使用我们将要讨论的一些工具来制定你的战略。在许多公司，战略只是“加强版”的路线图，本质上是大规模的“计划并执行”。如果你仔细想想，Google+ 实际上也是一个战略选择。所以在书中有一章我涉及了战略，并解释了公司如何使用同样的证据导向方法来制定战略。

---

### [00:24:43] Lenny

**English:**
Awesome, maybe one last context question. So people might be seeing this and thinking okay cool, I have goals, I have ideas steps, I have tasks, I'm already doing this. What is this kind of a counter or reaction to? What are people probably missing when they're seeing this and they're like, "Oh, I see. This is like what we're not doing and this is the most important, this is something we should probably change." And we'll go through these in detail too.

**中文翻译:**
太棒了，也许最后一个背景问题。人们看到这个可能会想：好吧，我有目标，我有想法、步骤，我有任务，我已经在这么做了。这个模型是对什么的“反击”或反应？当人们看到这个并意识到“噢，我明白了，这就是我们没在做的，这才是最重要的，这是我们可能应该改变的地方”时，他们通常遗漏了什么？我们也会详细讨论这些。

---

### [00:25:09] Itamar Gilad

**English:**
I think talking about each one will help. But we can talk about in each level what's actually being done. So when people say I have goals, usually they take the goals layer and use it as a planning session. They talk about what shall we build by when, what are the resources? And that's actually not goals at all, that's planning work.

**中文翻译:**
我认为逐一讨论会有所帮助。但我们可以谈谈在每个层级实际上在做什么。当人们说“我有目标”时，通常他们把“目标层”当作一个计划会议。他们讨论我们要什么时候造出什么，资源是什么？那实际上根本不是目标，那是计划工作。

---

### [00:25:26] Lenny

**English:**
Cool, let's talk about goals and I know part of this is OKRs related too, so I'm excited to hear your take on OKRs.

**中文翻译:**
酷，那我们来谈谈目标。我知道这部分也和 OKR 有关，所以我很期待听到你对 OKR 的看法。

---

### [00:25:33] Itamar Gilad

**English:**
Oh, that's a whole different discussion. You had, Christina, the real expert over there so I doubt I can add more to that. But it's true OKR is all part of it, but let's start with goals. What's our goals supposed to be? Goals are supposed to paint the end state to define where we want to end up and the evidence will not guide you unless you know where you want to go, and in many companies what you have is goals at the top for revenue, market share, whatever it is, and then a bunch of siloed goals for each department. There's engineering goals, there's design goals, there's marketing goals, etc, and that actually pushes people into different vectors and it's really hard to decide. I would argue that in evidence guided companies, and you've worked for a few so probably you've seen this. They use models in order to construct overarching goals for the entire organization. One of the models I show in the chapter about goals is the value exchange loop.

**中文翻译:**
噢，那是另一个完全不同的讨论了。你请过 Christina（Wodtke），她是真正的专家，我怀疑我能不能补充更多。但确实，OKR 是其中的一部分。让我们从目标开始。我们的目标应该是怎样的？目标应该是描绘最终状态，定义我们想要达到的终点。除非你知道要去哪里，否则证据无法引导你。在许多公司，你看到的是顶层的收入、市场份额等目标，然后是每个部门的一堆孤立目标。有工程目标、设计目标、营销目标等，这实际上把人们推向了不同的方向，很难做决定。我认为在证据导向的公司中——你曾在几家这样的公司工作过，所以可能见过——他们使用模型来构建整个组织的全局目标。我在关于目标的章节中展示的模型之一是“价值交换循环”（Value Exchange Loop）。

---

### [00:26:34] Itamar Gilad (Continued)

**English:**
Where basically the organization is trying to deliver as much value as it can to the market and to capture as much value back, and by creating a feedback loop between these two you are actually able to grow very fast. Now, I would argue that you want to measure both of these and to put a metric on each and the metric we usually use to measure value delivered is called the North Star metric. I know you wrote an article, a very good article about it. And in it you listed dozens and dozens of companies, like leading companies and what they considered the North Star metric is super interesting. I would argue that what they told you is what is the most important metrics we measure? What is the number one metric for us? But it's not what I call the North Star metric, the North Star metric measures how much value we create for the market. For example, let's take WhatsApp. WhatsApp for a very long time measured messages sent because every message sent is a little incremental of value for the sender, the receiver, it's free, it's rich media, you can send it for anywhere in the world, compared to SMS that's huge value.

**中文翻译:**
基本上，组织试图向市场交付尽可能多的价值，并捕捉尽可能多的价值回报。通过在这两者之间建立反馈循环，你实际上能够实现快速增长。现在，我认为你应该同时衡量这两者，并为每一个设定指标。我们通常用来衡量交付价值的指标被称为“北极星指标”（North Star Metric）。我知道你写过一篇关于它的文章，写得非常好。在文章中，你列出了几十家领先公司，以及他们认为的北极星指标是什么，这超级有趣。但我认为，他们告诉你的是“我们衡量的最重要的指标是什么？”“对我们来说排名第一的指标是什么？”但这并不是我所说的北极星指标。北极星指标衡量的是我们为市场创造了多少价值。例如，以 WhatsApp 为例。WhatsApp 在很长一段时间内衡量的是“发送的消息数”，因为每发送一条消息，对发送者和接收者来说都是一点增量价值。它是免费的、富媒体的、可以从世界任何地方发送，与短信相比，这是巨大的价值。

---

### [00:27:55] Lenny

**English:**
In Airbnb, I think one of your key metrics or the real North Star metric was nights booked. I don't know if it was still the case while you were there?

**中文翻译:**
在 Airbnb，我认为你们的关键指标之一，或者说真正的北极星指标，是“预订间夜数”。不知道你在那里的时候是否依然如此？

---

### [00:27:55] Lenny

**English:**
Yeah, absolutely.

**中文翻译:**
是的，绝对是。

---

### [00:27:56] Itamar Gilad

**English:**
And there are examples like this in Amplitude for example, they measure active learning users or weekly active learning users. Which are users that found in the tool some insight that was so important that they shared it with at least two other users and they consume it. So it's a very powerful thing to point at this metric and say, "This is the most important metric combined with the value metric that we want to capture, revenue, market share, whatever it is." Once you have these two, you can further break them down into what I call metrics trees. So there's a metric three for the North Star metric and there's the metric three for the top KPI, the top business metric which you see here on the left side in blue and usually they overlap. So you might find in the middle some metrics that are super, super important because moving them actually moves the needle on everything else.

**中文翻译:**
还有像 Amplitude 这样的例子，他们衡量“活跃学习用户”或“周活跃学习用户”。这些用户在工具中发现了一些非常重要的洞察，以至于他们将其分享给至少另外两个用户，并且这些用户也消费了这些内容。所以，指向这个指标并说“这是最重要的指标，结合我们想要捕捉的价值指标（收入、市场份额等）”是非常有力量的。一旦你有了这两个指标，你可以进一步将它们分解为我所说的“指标树”（Metrics Trees）。北极星指标有一棵指标树，顶级 KPI（即你在左侧蓝色部分看到的顶级业务指标）也有一棵指标树，通常它们会有重叠。所以你可能会在中间发现一些超级、超级重要的指标，因为推动它们实际上会带动其他所有指标。

---

### [00:29:02] Lenny

**English:**
Can you clarify again the difference between what you call this top KPI versus North Star metric?

**中文翻译:**
你能再澄清一下你所说的“顶级 KPI”与“北极星指标”之间的区别吗？

---

### [00:29:02] Itamar Gilad

**English:**
So the North Star metric is measuring how much value we're creating for the user, the core value that they're getting. In this case this is some productivity suite, so this is number of documents created per month for example. Because we think that every document created maybe it's a small document, I don't know. AI is in fashion now, is a little incremental value, so that's the number we're trying to grow. The top KPI is what we expect to get, it should be revenue or profit.

**中文翻译:**
北极星指标衡量的是我们为用户创造了多少价值，即他们获得的核心价值。在这个例子中，假设是一个办公套件，那么指标可能是“每月创建的文档数”。因为我们认为每创建一个文档（也许是一个小文档，我不知道，现在 AI 很流行），都是一点增量价值，所以这是我们试图增长的数字。而顶级 KPI 是我们期望获得的回报，它应该是收入或利润。

---

### [00:29:31] Lenny

**English:**
I see, this is the value exchange. I see, one is what users are getting, one is what you're getting back from them.

**中文翻译:**
我明白了，这就是价值交换。一个是用户得到的，一个是你们从他们那里拿回来的。

---

### [00:29:36] Itamar Gilad

**English:**
Exactly.

**中文翻译:**
正是如此。

---

### [00:29:37] Lenny

**English:**
Basically how the business is benefiting. Awesome. I think this is a really important concept, the metric tree. I think a lot of people think they have something like this in mind where they're just like, "Cool, here's our North Star Metric, here's the levers and things that we can work on to move that." But I think actually mapping it out the way you have it here where it kind of goes layers and layers deep to all of the different variables that impact this metric. Not only is it a way to think about impact and goals and things like that, but also helps you estimate the impact of the experiment you're potentially thinking about running. So if you're going to work on something at the bottom here like activation rate, say you move that 10%. How much is that going to impact this global metric? It's probably a very small amount.

**中文翻译:**
基本上就是业务如何获益。太棒了。我认为指标树是一个非常重要的概念。我想很多人觉得自己脑子里有类似的东西，他们会说：“酷，这是我们的北极星指标，这些是我们可以用来推动它的杠杆和事情。”但我认为，像你这样把它画出来，层层深入到影响这个指标的所有不同变量，不仅是一种思考影响力和目标的方式，还能帮助你估算你可能正在考虑运行的实验的影响力。所以，如果你要处理底部的一些东西，比如激活率，假设你将其提升了 10%，这会对全局指标产生多大影响？可能是一个非常小的量。

---

### [00:30:19] Itamar Gilad

**English:**
This is a very important one and we'll talk about impact assessment shortly, this helps with it. It also helps with alignment because the entire organization is trying to move these two metrics, it's the two sides of our mission essentially. We have the mission that's the top objective of the company and these are the two top most key results if you like, the top most things. So when you go and work with another team and you say, "Hey, why don't you work on my project?" They might say, "This idea actually might move the North Star metric model in your idea." And that helps you guys align and I've seen cases where team B put aside their own ideas to jump on the ideas of team A, because of this model. It also creates an opportunity to give some sub metrics to teams to own on an ongoing basis, so it creates a little sense of ownership as well and mission within the tree.

**中文翻译:**
这是一个非常重要的点，我们稍后会讨论影响力评估，指标树对此很有帮助。它还有助于对齐（alignment），因为整个组织都在努力推动这两个指标，这本质上是我们使命的两面。我们有使命，那是公司的最高目标，而这两个就是最高级别的关键结果（Key Results），最高级别的事情。所以当你去找另一个团队说：“嘿，你为什么不参与我的项目？”他们可能会说：“这个想法实际上可能比你的想法更能推动北极星指标模型。”这有助于你们对齐。我见过 B 团队放下自己的想法去支持 A 团队的想法，就是因为这个模型。它还创造了一个机会，可以将一些子指标交给团队持续负责，从而在指标树中建立起一种所有权感和使命感。

---

### [00:31:10] Lenny

**English:**
It also helps you figure out what teams you should have, which teams have the biggest potential to impact the metric.

**中文翻译:**
它还能帮你弄清楚你应该拥有什么样的团队，哪些团队最有潜力影响该指标。

---

### [00:31:18] Itamar Gilad

**English:**
Another thing that happens in a lot of organizations, the team topology reflects the structure of the software or some hierarchical model where we want to organize the organization in a particular way. But if you start with a metrics tree, you can try to arrange the topology around goals and sometimes you need to readjust. It's not a constant reorg but from time to time you will realize the goals have changed and we need to reorganize, so the tree helps visualize that as well.

**中文翻译:**
在很多组织中还会发生另一件事：团队拓扑结构反映了软件结构或某种层级模型，我们想以特定的方式组织机构。但如果你从指标树开始，你可以尝试围绕目标来安排拓扑结构。有时你需要重新调整。这不是持续的重组，但你会不时意识到目标已经改变，我们需要重新组织，指标树也有助于将这一点可视化。

---

### [00:31:49] Lenny

**English:**
I think for people that are listening to this and thinking about this, I think the simplest way to even think about this is basically there's a math formula that equals your North Star metric or your revenue or whatever you're trying to do and if you don't have some ideally really clear sense of what that math formula is you should work on that. Because that will inform so much of how you think about where to invest, what teams to have, where to invest more resources, less resources.

**中文翻译:**
对于正在听播客并思考这个问题的人，我认为最简单的思考方式是：基本上有一个数学公式等于你的北极星指标或收入，或者任何你试图实现的目标。如果你还没有一个理想且清晰的数学公式概念，你应该去研究它。因为它会极大地影响你如何思考在哪里投资、建立什么样的团队、在哪里投入更多或更少的资源。

---

### [00:32:13] Itamar Gilad

**English:**
Right.

**中文翻译:**
没错。

---

### [00:32:15] Lenny (Sponsorships)

**English:**
Imagine a place where you can find all your potential customers and get your message in front of them in a cost-efficient way. If you're a B2B business, that place exists and it's called LinkedIn. LinkedIn Ads allows you to build the right relationships, drive results, and reach your customers in a respectful environment. Two of my portfolio companies Webflow and Census are LinkedIn success stories. Census had a 10x increase in pipeline with the LinkedIn startup team, for Webflow after ramping up on LinkedIn in Q4 they had the highest marketing source revenue quarter to date. With LinkedIn Ads, you'll have direct access to and can build relationships with decision makers including 950 million members, 180 million senior execs and over 10 million C-level executives. You'll be able to drive results with targeting and measurement tools built specifically for B2B. In tech LinkedIn, generated two to five X higher return on ad spend than any other social media platforms. Audiences on LinkedIn, have two times the buying power of the average web audience and you'll work with a partner who respects the B2B world you operate in.

**中文翻译:**
想象一下，有一个地方你可以找到所有潜在客户，并以高成本效益的方式将你的信息展示在他们面前。如果你是一家 B2B 企业，那个地方确实存在，它叫 LinkedIn。LinkedIn 广告允许你在尊重的环境中建立正确的关系、推动结果并触达客户。我的两家投资组合公司 Webflow 和 Census 都是 LinkedIn 的成功案例。Census 通过 LinkedIn 创业团队实现了销售线索（pipeline）10 倍的增长；Webflow 在第四季度加大 LinkedIn 投入后，创下了迄今为止最高的营销来源收入季度记录。通过 LinkedIn 广告，你可以直接接触并与决策者建立关系，包括 9.5 亿会员、1.8 亿高级管理人员和超过 1,000 万 C 级高管。你将能够使用专为 B2B 构建的定位和衡量工具来推动结果。在科技领域，LinkedIn 产生的广告支出回报率（ROAS）比任何其他社交媒体平台高出 2 到 5 倍。LinkedIn 上的受众购买力是平均网络受众的两倍，而且你将与一个尊重你所处 B2B 世界的伙伴合作。

---

### [00:33:20] Lenny (Sponsorships Continued)

**English:**
Make B2B marketing everything it can be and get $100 credit on your next campaign, just go to linkedin.com/podlenny to claim your credit. That's linkedin.com/podlenny, terms and conditions apply. Okay. So metrics trees, what comes next?

**中文翻译:**
让 B2B 营销发挥最大潜力，并在下一次活动中获得 100 美元的抵用金，只需访问 linkedin.com/podlenny 即可领取。这就是 linkedin.com/podlenny，适用条款和条件。好，指标树讲完了，接下来是什么？

---

### [00:33:39] Itamar Gilad

**English:**
All right. So next we need to go to the ideas layer and the ideas layer is there to help us sort through the many ideas we might encounter and they may come from as you said the founders, the managers, the stakeholders, from the team, from research, from competitors. We're flooded with ideas, and what usually happens inside organization is some sort of battle of opinions or some sort of politics sometimes or highest paid person's opinion. You had, Ronny Kohavi, who invented this term in your show. What doesn't happen is very rational, logical decisions these are the best ideas, because it's really, really hard to predict honestly. There is so much uncertainty in the needs of the users, in the changes in the market, in our technology, in our product, in our own organization. It's almost impossible to say this idea is going to be the best, but we do say this because we have cognitive biases that kind of convince us that this idea is far superior to anything else and it's definitely the right choice.

**中文翻译:**
好的。接下来我们需要进入“想法层”（Ideas layer）。想法层的作用是帮助我们筛选可能遇到的众多想法，正如你所说，这些想法可能来自创始人、经理、利益相关者、团队、研究或竞争对手。我们被想法淹没了。组织内部通常发生的是某种意见之争，有时是某种政治斗争，或者是“高薪人士的意见”（HiPPO）。你曾在节目中请过 Ronny Kohavi，他发明了这个词。通常不会发生的是非常理性、逻辑化的决策，即“这些是最好的想法”，因为老实说，预测真的非常、非常难。用户需求、市场变化、我们的技术、我们的产品、我们自己的组织中存在着太多的不确定性。几乎不可能说这个想法一定会是最好的，但我们确实会这么说，因为我们有认知偏差，让我们相信这个想法远优于其他任何想法，绝对是正确的选择。

---

### [00:34:48] Itamar Gilad (Continued)

**English:**
In order to avoid this, what we want to do is to evaluate the ideas in a much more objective and consistent and transparent way. In the book I suggest using ICE, impact, confidence and ease. I think I have a slide coming on this. So impact, confidence and ease which is basically a way to assign three values to each idea. The impact tries to assess how much impact it'll have on the goals and that's why it's so important that we have very clear goals and not many. How we are measuring the ideas on the North Star metric, on the top business KPI, on a local metric of the team. Whatever it is, let's be clear about it and then let's evaluate the ideas against this thing. Ease, is basically the opposite of effort. How easy or hard it's going to be, but both of those are guesstimates, both of those are things we need to estimate. I would argue that just by breaking the question to these two questions we usually have a slightly better discussion than just my idea is better than yours.

**中文翻译:**
为了避免这种情况，我们希望以一种更加客观、一致且透明的方式来评估想法。在书中，我建议使用 ICE 模型：影响力（Impact）、信心（Confidence）和易用性/简易度（Ease）。我想我有一张关于这个的幻灯片。ICE 基本上是为每个想法分配三个数值的方法。**影响力**试图评估它对目标的影响有多大，这就是为什么拥有清晰且不多的目标如此重要。无论我们是在北极星指标、顶级业务 KPI 还是团队的局部指标上衡量想法，让我们明确这一点，然后根据它来评估想法。**简易度**基本上是“努力程度”（effort）的反面，即这件事做起来有多容易或多难。但这两者都是“盲估”（guesstimates），都是我们需要估计的东西。我认为，仅仅通过将问题分解为这两个问题，我们通常就能进行比“我的主意比你的好”稍微好一点的讨论。

---

### [00:35:52] Itamar Gilad (Continued)

**English:**
But then there's the third element which is confidence, which tries to assess how sure are we or should we be about our first guesstimates about the impact and the ease.

**中文翻译:**
但接着还有第三个要素，即**信心**，它试图评估我们对关于影响力和简易度的初步盲估有多大把握，或者应该有多大把握。

---

### [00:36:03] Lenny

**English:**
It's interesting you use the word ease, because I think it's usually effort. You kind of make it positive, is that an intentional tweak you made?

**中文翻译:**
很有趣你用了“简易度”（Ease）这个词，因为我认为通常大家用的是“努力程度”（Effort）。你把它变成了积极的词，这是你刻意做的调整吗？

---

### [00:36:12] Itamar Gilad

**English:**
I'm using the definitions of, Sean Ellis. Sean, invented ICE. You know Sean, I don't know if you've had him yet? But he's-

**中文翻译:**
我使用的是 Sean Ellis 的定义。Sean 发明了 ICE。你认识 Sean，我不知道你有没有请过他？但他——

---

### [00:36:21] Lenny

**English:**
I haven't had him on yet.

**中文翻译:**
我还没请过他。

---

### [00:36:23] Itamar Gilad

**English:**
Yeah. For the people who don't know him, Sean, is amazing. He's like one of the fathers of the growth movement, he coined the term growth hacking and he popularized the concept of product market fit. He created ICE, he created a bunch of things that we use in product that we don't even know.

**中文翻译:**
是的。对于不认识他的人来说，Sean 非常了不起。他是增长运动的教父之一，他创造了“增长黑客”（growth hacking）这个词，并推广了“产品市场匹配”（PMF）的概念。他创造了 ICE，他创造了一堆我们在产品中使用的东西，而我们甚至都不知道是他创造的。

---

### [00:36:40] Lenny

**English:**
Wow, I didn't know he came up with ICE. Okay, cool. So the original version of ICE is ease instead of effort.

**中文翻译:**
哇，我不知道是他提出了 ICE。好，酷。所以 ICE 的原始版本是“简易度”而不是“努力程度”。

---

### [00:36:45] Itamar Gilad

**English:**
Exactly, yeah.

**中文翻译:**
没错，是的。

---

### [00:36:45] Lenny

**English:**
Fun fact.

**中文翻译:**
冷知识。

---

### [00:36:47] Itamar Gilad

**English:**
A lot of your viewers are wondering where's the R because there's another variant of this culture. RICE, where there's rich as well. I prefer ICE because I prefer to fold the rich into the I for various reasons but both are valid, both are equivalent in a sense.

**中文翻译:**
你的很多观众可能在想“R”去哪了，因为还有另一个变体叫 RICE，其中包含了“触达范围”（Reach）。我更喜欢 ICE，因为出于各种原因，我更喜欢把触达范围折叠进“影响力”（I）中，但两者都是有效的，在某种意义上是等效的。

---

### [00:37:04] Lenny

**English:**
I'm in your boat, that's exactly how I think about it. I think people over complicate this stuff and try to get so many math formulas involved with estimating impact, and I feel like these are just simple heuristics to kind of bubble the best ideas to the top. It doesn't have to be a perfect estimate of impact and confidence and all those things, so I think the simpler is better and it always ends up being a spreadsheet. People always have these tools to estimate these things but it's like a spreadsheet, Google Sheets. Great.

**中文翻译:**
我赞同你的观点，我也是这么想的。我认为人们把这些东西搞得太复杂了，试图在估算影响力时引入太多的数学公式。我觉得这些只是简单的启发式方法，用来让最好的想法浮出水面。它不需要是对影响力、信心和所有这些东西的完美估算，所以我认为越简单越好。最终它总是变成一个电子表格。人们总是有这些工具来估算这些东西，但它就像一个电子表格，Google Sheets。太棒了。

---

### [00:37:28] Itamar Gilad

**English:**
So yeah, you're actually leading me to my next point. So when you come to estimate impact you will realize it's the hardest part. So sometimes it's just a gut feeling and it's a guess and sometimes it's based on some spreadsheet or some analysis and the back of envelope calculation you've done and I think that's legitimate. Sometimes these things do show you some things you didn't think of and sometimes the best case it's based on tests. You actually tested it, you interviewed 12 customers, you show them the thing and out of those only one actually liked it. You should reduce your impact based on that usually, or you do other types of tests. We'll talk about testing in a second. What happens is that people tend to just go with gut instinct and then give themselves a high confidence. They say it's an eight and I'm pretty convinced, so it's eight for confidence and I found this a bit disturbing because it kind of subverts the whole system.

**中文翻译:**
是的，你实际上引出了我的下一个观点。当你开始估算影响力时，你会意识到这是最难的部分。有时它只是一种直觉，是一个猜测；有时它基于某些电子表格或分析，以及你做的粗略计算（back of envelope calculation），我认为这是合理的。有时这些东西确实能向你展示一些你没想到的事情。而最好的情况是，它基于测试。你实际测试过了，你采访了 12 个客户，向他们展示了产品，结果其中只有一个真正喜欢。通常你应该据此降低你的影响力评分。或者你做其他类型的测试。我们稍后会讨论测试。现在的情况是，人们倾向于只凭直觉，然后给自己一个很高的信心分。他们说影响力是 8 分，而且我非常确信，所以信心也是 8 分。我发现这有点令人不安，因为它在某种程度上破坏了整个系统。

---

### [00:38:22] Itamar Gilad (Continued)

**English:**
So I wanted to help people realize when they have strong evidence in support of their guesses and when it's weak evidence, how to calculate confidence in a sense. For that I created a tool called the confidence meter, which you can see here this colorful thing and should I go and explain it?

**中文翻译:**
所以我想要帮助人们意识到，什么时候他们有强有力的证据支持他们的猜测，什么时候证据很弱，即在某种意义上如何计算信心。为此，我创建了一个名为“信心指数”（Confidence Meter）的工具，就是你在这里看到的这个五颜六色的东西。我应该解释一下吗？

---

### [00:38:41] Lenny

**English:**
Yeah, let's do it. And then again, if you're just listening to this you can check this out on YouTube and you can see the actual slide.

**中文翻译:**
好，来吧。再次提醒，如果你只是在听音频，可以去 YouTube 上查看实际的幻灯片。

---

### [00:38:47] Itamar Gilad

**English:**
All right, awesome. So basically I constructed it a bit like a thermo meter. It goes from very low confidence which is the blue area or the upper right, all the way to high confidence which is the red area and you can see the numbers going from zero to 10. Where zero is very low confidence, we don't know basically anything we're just guessing in the dark and 10 is full confidence. You know for sure this thing is a success, no doubt about it and across the circle I put various classes of evidence you might find along the way. So for example, starting at the top right, all of these blue areas about opinions. It could be your own self-confidence in the idea, your self conviction, you feel it's a great idea. Guess what? Behind every terrible idea that was ever someone thought it was great, that gives you 0.01 out of 10. Maybe you created a shiny pitch deck or a six-page document that explains in detail why this is a great idea. Slightly harder to do but still very low confidence, maybe you connected it to some theme, it's about the blockchain... Well sorry, the blockchain is out of fashion. What's hot right now?

**中文翻译:**
好的，太棒了。基本上我把它构造得有点像温度计。它从极低信心（蓝色区域或右上角）一直延伸到高信心（红色区域），你可以看到数字从 0 到 10。0 代表信心极低，我们基本上什么都不知道，只是在黑暗中盲目猜测；10 代表完全有信心，你确信这东西会成功，毫无疑问。在圆圈周围，我放了你在过程中可能发现的各种证据类别。例如，从右上角开始，所有这些蓝色区域都是关于**意见**的。它可能是你对想法的自我感觉良好，你的自我信念，你觉得这是一个伟大的主意。猜猜怎么着？每一个糟糕的主意背后，都曾有人认为它很伟大。这只能给你 0.01 分（满分 10 分）。也许你制作了一个精美的演示文稿或一份六页的文档，详细解释了为什么这是一个好主意。这稍微难一点，但信心依然很低。也许你把它与某个主题联系起来，比如区块链……噢抱歉，区块链已经过时了。现在流行什么？

---

### [00:39:59] Lenny

**English:**
AI.

**中文翻译:**
AI。

---

### [00:40:04] Itamar Gilad

**English:**
Exactly, AI. It's about AI, that makes it a good idea? Absolutely not. Or the strategy of the company, that's another thematic support. Thousands and thousands of terrible ideas are being implemented right now as we speak based on these themes. So all these things combined can give you a maximum 0.1 out of 10 according to the tool, if you follow it then we move into slightly harder tests. One is reviewing it with your colleagues, your managers, your stakeholders the idea. They don't know it either, they don't have a crystal ball, they're usually not the users, they cannot predict. But they can evaluate it in a slightly more objective way and maybe find flaws in your idea. On the other hand groups tend to have biases too, politics group thing. So groups can actually arrive sometimes with worse decisions than individuals, there's some research to that. Next, our estimates and plans. So you may do some sort of back of the envelope calculation or your colleagues might go out and try to evaluate the ease a little bit better.

**中文翻译:**
没错，AI。因为它和 AI 有关，它就是一个好主意吗？绝对不是。或者是公司的战略，那是另一种主题支持。就在我们说话的时候，成千上万个糟糕的想法正基于这些主题被实施。所以根据这个工具，所有这些东西加起来最多只能给你 0.1 分。如果你继续往下走，我们会进入稍微难一点的测试。一个是与你的同事、经理、利益相关者一起评审这个想法。他们其实也不知道，他们没有水晶球，他们通常不是用户，无法预测。但他们可以以稍微客观一点的方式评估它，也许能发现你想法中的缺陷。另一方面，群体也往往会有偏见，比如办公室政治、群体思维。所以群体有时做出的决策甚至比个人更糟，这方面是有研究支持的。接下来是我们的**估算和计划**。你可能会做一些粗略的计算，或者你的同事可能会去尝试更好地评估简易度。

---

### [00:41:07] Itamar Gilad (Continued)

**English:**
That gives you a little bit more confidence, but still we're at the level of guesswork at this point. Next we're moving to data and data could be anecdotal. So you find a few data points dotted across your data or you talk to a handful of customers or maybe one competitor has that same idea. In many companies I meet, if the leading competitor has this feature and we think it's a good idea validation is done. Let's launch it, that's it. It's a great idea, we need to do it. It never works honestly, you should not assume that your competitor actually knows what they're doing anymore than you do. Data could be also what I call market data. That comes from surveys, from assessing a lot of your data by doing a deep competitive analysis and there are other methods where you create a larger dataset and you contrast your idea against it. Finally, to gain medium and high confidence you really need to build your idea and test it and that's where the red area is.

**中文翻译:**
这会给你多一点信心，但此时我们仍处于猜测阶段。接下来我们转向**数据**，数据可能是轶事性的（anecdotal）。比如你在数据中发现了几点零星的证据，或者你和几个客户聊过，或者可能某个竞争对手也有同样的想法。在我遇到的许多公司中，如果领先的竞争对手有这个功能，而我们也觉得这是个好主意，那么验证就完成了。发布吧，就这样。这是个好主意，我们必须做。老实说，这从来行不通。你不应该假设你的竞争对手比你更清楚自己在做什么。数据也可以是我所说的“市场数据”。这来自调查，来自通过深入的竞争分析评估你的大量数据，还有其他方法可以创建更大的数据集并将你的想法与之对比。最后，为了获得中等和高信心，你真的需要构建你的想法并进行测试，这就是红色区域所在。

---

### [00:42:11] Itamar Gilad (Continued)

**English:**
So there's various forms of tests, we'll talk about them if we have time and they give you various levels of confidence.

**中文翻译:**
所以有各种形式的测试，如果有时间我们会讨论它们，它们会给你不同程度的信心。

---

### [00:42:19] Lenny

**English:**
Awesome, this is a very cool visual. We'll link to a image of this in the show notes too if people want to check it out. I think what's awesome about this is you could just use this as a little tool on your team of just like where are we along the spectrum? We think the impact of this is very high. But we're probably in this blue area of confidence and so let's just make sure we understand that and it's really clear language to help people understand. I see if we had this, it'd be a lot more confident.

**中文翻译:**
太棒了，这是一个非常酷的视觉图。我们也会在节目笔记中链接这张图片，方便大家查看。我认为这个工具最棒的地方在于，你可以把它当作团队中的一个小工具：我们在这个光谱的哪个位置？我们认为这个影响很大，但我们可能处于信心的蓝色区域，所以让我们确保大家都明白这一点。这种清晰的语言能帮助人们理解：我明白了，如果我们有了这个证据，信心就会大得多。

---

### [00:42:45] Itamar Gilad

**English:**
So you can also tie your investment into the idea based on the level of confidence you had found essentially, so early on you want to do the cheap stuff just to gain more confidence and then you can go and invest more. If it's a really cheap idea, you can jump to a high confidence idea, you can test, you can do an AB experiment. Early adopter program, whatever it is and then launch it. Some ideas you don't need to test, sometimes the expert opinion is enough. If you're just changing the order of the settings, no one sees this or no one will be impacted. The risk is low, you can launch it without testing. So part of the trick is also knowing when to stop, not just trying to force your way all the way up when you don't have to.

**中文翻译:**
所以你也可以根据你发现的信心水平来决定对该想法的投入。本质上，早期你想做一些廉价的事情来获得更多信心，然后你可以投入更多。如果这是一个非常廉价的想法，你可以直接跳到高信心阶段，你可以测试，做 AB 实验、早期采用者计划等等，然后发布。有些想法你不需要测试，有时专家意见就足够了。如果你只是更改设置的顺序，没人会注意到或者没人会受到影响。风险很低，你可以在不测试的情况下发布。所以，技巧之一也在于知道什么时候停止，而不仅仅是在没必要的时候强行向上攀爬。

---

### [00:43:31] Lenny

**English:**
That's a really important point. The other important point here is just a big part of a PM's job is to say no and to stop stupid shit from happening and this is an awesome tool to help you do that. To be like, okay, here's this idea you have, just like let's just be real, how confident are we in this? And, okay, it's going to take us three months to do this. Maybe we should think about something different, maybe we should work up the confidence meter before we actually commit to this.

**中文翻译:**
这是一个非常重要的点。另一个重点是，PM 工作的一大部分就是说“不”，并阻止愚蠢的事情发生，而这是一个帮助你做到这一点的绝佳工具。你可以说：好吧，这是你的想法，让我们现实一点，我们对此有多大信心？而且，做这个需要三个月。也许我们应该考虑一些不同的东西，或者在我们真正投入之前，也许我们应该先提升一下信心指数。

---

### [00:43:56] Itamar Gilad

**English:**
Yeah. This is a real world usage that I hear about a lot, some people use this to kind of do... An objective way to say no and gently. Or to say we'll think about it but look at these other ideas we have and how their impacting is and confidence stack up.

**中文翻译:**
是的。这是我经常听到的现实应用，有些人用它来……以一种客观且温和的方式说“不”。或者说“我们会考虑的，但看看我们拥有的这些其他想法，以及它们的影响力和信心是如何排列的”。

---

### [00:44:12] Lenny

**English:**
Classic PM move, just like that was a great idea but what about this better idea? Coming back to something that we talked a bit about at the beginning, say you have a founder who's actually very smart and experienced. Say even at a startup where you don't really have the time to build tons of evidence for ideas. Do you have a different perspective on how much time to spend building confidence in ideas versus just like cool, they actually have really good ideas let's just see what happens?

**中文翻译:**
经典的 PM 招式：“那是个好主意，但这个更好的主意怎么样？”回到我们开头谈到的一点，假设你有一个非常聪明且经验丰富的创始人。甚至是在一家初创公司，你真的没有时间为想法建立大量的证据。对于花多少时间建立对想法的信心，还是直接说“酷，他们确实有很好的主意，让我们看看会发生什么”，你是否有不同的看法？

---

### [00:44:41] Itamar Gilad

**English:**
So there's always like a trade-off between speed of delivery and speed of discovery, and that actually leads to the next layer of how do we combine the two? Because people tend to think it's an either/or. Either we are building very fast or we are learning and then we're building very slow, but I think we're using the wrong metric. The metric is not how fast can we get the bits into production, when there's a lot of uncertainty and we all face uncertainty and startup especially. It's not about getting the bits to production, it's about getting the right bits to production. It's about creating the outcomes that you need, the impact, and so it's about time to outcomes and I would argue that the evidence guided method is far more impactful. It's far faster, it's far more resource efficient than the opinion-based method. Because opinion-based methods tend to waste a lot more of your resources, building the wrong things or discovering, learning too late. Well, evidence guided helps you learn earlier.

**中文翻译:**
在交付速度和探索速度之间总是存在权衡，这实际上引出了下一层：我们如何将两者结合起来？因为人们倾向于认为这是非此即彼的。要么我们构建得非常快，要么我们在学习然后构建得非常慢。但我认为我们使用了错误的衡量标准。衡量标准不是我们能多快把代码（bits）推向生产环境，特别是在存在大量不确定性时（我们都面临不确定性，尤其是初创公司）。关键不在于把代码推向生产，而在于把**正确**的代码推向生产。关键在于创造你需要的成果（outcomes）和影响力，所以关键在于“达成成果的时间”（time to outcomes）。我认为证据导向的方法远比基于意见的方法更有影响力。它更快，资源效率更高。因为基于意见的方法往往会浪费更多的资源去构建错误的东西，或者发现和学习得太晚。而证据导向能帮助你更早地学习。

---

### [00:45:50] Itamar Gilad (Continued)

**English:**
Plus it is a fallacy that if you learn you don't build, good teams know how to do both at the same time and that's actually what the steps layer is meant to teach you or to help you do.

**中文翻译:**
此外，认为“如果你在学习就不在构建”是一个谬论。优秀的团队知道如何同时进行这两项工作，而这正是“步骤层”（Steps layer）旨在教你或帮助你做的事情。

---

### [00:46:03] Lenny

**English:**
Awesome. So let's keep going.

**中文翻译:**
太棒了。那我们继续。

---

### [00:46:23] Itamar Gilad

**English:**
Absolutely. I think the concept we talked about of the North Star metric, the value created versus the value captured is very important in every company. Building your entire metrics trees, maybe overkill, doing heavy weighted OKRs may be overkill for early stage. Early stage companies even don't know how they create value, so they need to iterate and their goals is really to find product market fit. Beyond that, what happens is that you need to start building your business model. So that's your goal and you iterate towards that and you need to put metrics on that and then when you move into scale, you need to try to create order because when you scale up... And all of this is covered in the book, there's a special chapter just about these questions. When you scale up, you get a lot of people and a lot of money and everything is happening at the same time. So there you need a order of evaluating ideas in a very systematic way. In a company like Netflix, by the way I don't know if they need this specific method. They're very-

**中文翻译:**
当然。我认为我们谈到的北极星指标概念，即创造的价值与捕捉的价值，在每家公司都非常重要。对于早期阶段来说，构建完整的指标树可能有点过头，做沉重的 OKR 可能也过头了。早期公司甚至不知道自己是如何创造价值的，所以他们需要迭代，他们的目标实际上是找到产品市场匹配（PMF）。除此之外，接下来发生的是你需要开始构建你的业务模型。所以那是你的目标，你朝着它迭代，你需要为此设定指标。然后当你进入规模化阶段，你需要尝试建立秩序，因为当你规模化时……所有这些在书中都有涵盖，有一章专门讨论这些问题。当你规模化时，你会有很多人、很多钱，所有事情都在同时发生。所以在那时，你需要一套非常系统化的评估想法的秩序。顺便说一下，像 Netflix 这样的公司，我不知道他们是否需要这种特定的方法。他们非常——

---

### [00:47:27] Lenny

**English:**
Yeah, maybe that was a bad example. They're probably doing things pretty well.

**中文翻译:**
是的，也许那是个坏例子。他们可能已经做得非常好了。

---

### [00:47:30] Itamar Gilad

**English:**
One thing I discovered by the way, there's two types of companies that really benefit from this technique. One is those companies that are kind of emerging into modern product development. They have product teams, they have product managers, they have OKRs, they're starting to do Agile. But they're starting to do experimentation, but they're struggling to put it all together. Every CPO is building their own little framework and the other type is those companies that used to be evidence guided and they regressed and that happens way too often. Change of management, change of culture, and then all of a sudden they need to rediscover, to rekindle that spirit that was lost along Google+. So some of the people that actually respond to the strongest are actually surprisingly in these companies.

**中文翻译:**
顺便说一下，我发现有两类公司能从这种技术中获益匪浅。一类是那些正在向现代产品开发转型的公司。他们有产品团队、产品经理、OKR，开始做敏捷开发。但他们开始做实验时，却很难把所有东西整合在一起。每个 CPO 都在构建自己的小框架。另一类是那些曾经是证据导向但后来退步了的公司，这种情况发生得太频繁了。管理层变动、文化变迁，然后突然之间，他们需要重新发现、重新点燃在 Google+ 过程中丢失的那种精神。所以，一些反应最强烈的人出人意料地来自这些公司。

---

### [00:48:19] Lenny

**English:**
What I love about your frameworks and kind of all these things we're talking about is these are just a... You can almost think of them as a grab bag set of tools to make you more evidence guided as a company. You could start with thinking about the confidence meter, you could start using ICE more. You could start using the metrics tree and all these things just push you closer and closer to being more evidence guided, you don't have to adopt this whole thing all at once.

**中文翻译:**
我喜欢你的框架以及我们讨论的所有这些东西的一点是，它们就像是……你可以把它们看作是一袋子工具，用来让你的公司变得更加以证据为导向。你可以从思考信心指数开始，可以开始更多地使用 ICE。你可以开始使用指标树，所有这些事情都会把你推向更接近证据导向的状态，你不需要一次性采用全部内容。

---

### [00:48:41] Itamar Gilad

**English:**
Absolutely. I would recommend that you don't try because if the transformation is way too big, you will get fatigued and you will just create a lot of process for a lot of people and you would not see the results and after a quarter you'll give up. So exactly what you suggested is the right approach.

**中文翻译:**
绝对是。我建议你不要尝试一次性全盘接收，因为如果转型规模太大，你会感到疲惫，你只会为很多人创造很多流程，却看不到结果，一个季度后你就会放弃。所以你建议的方法正是正确的途径。

---

### [00:48:57] Lenny

**English:**
What would be the first thing you'd suggest if people were trying to move closer to being less opinion oriented and more evidence-based? Which of these frameworks or models would you recommend first?

**中文翻译:**
如果人们试图减少对意见的依赖，增加对证据的依赖，你建议的第一件事是什么？你会首先推荐这些框架或模型中的哪一个？

---

### [00:49:06] Itamar Gilad

**English:**
I recommend that they discuss internally where is the biggest problem that they're facing. If the goals are unclear, there's misalignment, we keep chasing the wrong things, start at the goals layer. Try to establish your North Star metric, your top business metric, your metrics trees, start assigning teams with their own area of responsibility. If you're spending a lot of time in debates and you're constantly fighting and changing your mind. Start with the ideas there and establish impact is confidence or whatever prioritization model you like, but involve evidence in it. I think the confidence meter is a good tool to use irrespective. If you're building too much and you're not learning enough, start adopting the steps layer which we haven't seen yet and if your team is very disengaged. You have one of these teams where the developers are very into Agile, very into quality, very into launching things, start working on the tasks there.

**中文翻译:**
我建议他们内部讨论一下目前面临的最大问题是什么。如果目标不明确、存在错位、我们一直在追求错误的东西，那就从**目标层**开始。尝试建立你的北极星指标、顶级业务指标、指标树，开始为团队分配各自的职责范围。如果你花了很多时间在辩论上，经常争吵并改变主意，那就从**想法层**开始，建立影响力、信心等优先级模型，但要把证据纳入其中。我认为无论如何，信心指数都是一个好工具。如果你构建得太多而学习得不够，那就开始采用我们还没看到的**步骤层**。如果你的团队非常缺乏参与感，比如你有一个开发人员非常热衷于敏捷、质量和发布，但对业务不关心的团队，那就从**任务层**开始工作。

---

### [00:50:13] Itamar Gilad

**English:**
All right, so steps. Steps are about kind of helping us learn and build at the same time as we said and one of the patterns I see is that organizations don't know that they can actually learn at a much lower cost. They believe they need to build this elaborate MVP which is not minimal in any way and then launch it and then they will discover it and basically it's what we used to call beta 20 years ago but just with a different name. What I'm trying to do here in the steps layer is to help companies realize there's a gamut of ways to validate your ideas or more specifically to validate the assumptions in your idea and I created a little model for this, it's called after assessment fact finding, tests, experiments and release results. But again, it's just putting together things that much smarter people invented. So in assessment you have very easy things, things that don't require a lot of work. You check if it aligns with the goals, this idea that you have in your hand.

**中文翻译:**
好的，接下来是**步骤（Steps）**。正如我们所说，步骤是关于帮助我们同时学习和构建的。我看到的一个模式是，组织不知道他们实际上可以以更低的成本进行学习。他们认为需要构建一个复杂的 MVP（最小可行产品）——而那一点也不“最小”——然后发布，接着他们才会去发现。这基本上就是我们 20 年前称之为 Beta 版的东西，只是换了个名字。我在步骤层试图做的是帮助公司意识到，验证想法（更具体地说是验证想法中的假设）有各种各样的方法。我为此创建了一个小模型，包括：评估（Assessment）、事实调查（Fact finding）、测试（Tests）、实验（Experiments）和发布结果（Release results）。但同样，这只是把更聪明的人发明的东西整合在一起。在评估中，你有一些非常简单、不需要太多工作的事情。比如检查你手头的这个想法是否与目标一致。

---

### [00:51:14] Itamar Gilad (Continued)

**English:**
You do maybe some business modeling, you do ICE analysis, you do Assumption Mapping which is great tool by, David J. Blend, or you talk to your stakeholders one-on-one just to see if there are any risks, etc. These are usually not expensive things and they can teach you an awful lot about the impact and the ease of your idea. The next step is to dig data and usually that goes hand in hand with this. So you can find data in your data analysis through surveys, through competitive analysis, through user interviews and through field research, observing your users. Obviously these last two are pretty expensive, so it's often good not to wait until you have the idea and then start doing your research. It's best to keep doing your research ongoing and then you have some sort of data to lie on and to compare your idea against. But until now we didn't build anything, now you're ready to start testing, building versions of the product and putting them in front of users and measuring the results. But initially you don't build anything, you fake it.

**中文翻译:**
你可能会做一些业务建模，做 ICE 分析，做假设映射（Assumption Mapping，这是 David J. Bland 开发的一个很棒的工具），或者与利益相关者进行一对一交谈，看看是否存在任何风险等。这些通常不是昂贵的事情，它们可以让你对想法的影响力和简易度有非常深入的了解。下一步是挖掘数据，通常这与评估同步进行。你可以通过数据分析、调查、竞争分析、用户访谈和实地研究（观察用户）来寻找数据。显然，最后两项相当昂贵，所以通常最好不要等到有了想法才开始做研究。最好是持续进行研究，这样你就有了可以依赖的数据来对比你的想法。但到目前为止，我们还没有构建任何东西。现在你准备好开始测试了，构建产品的各个版本，把它们放在用户面前并衡量结果。但最初你什么都不构建，你“造假”。

---

### [00:52:18] Itamar Gilad (Continued)

**English:**
You do a fake door test, you do a smoke test, Wizard of Oz test, a concierge test, usability test. We used a lot of those in the tabbed inbox by the way, one of the first early versions was actually we showed the tabbed inbox working to people. But it wasn't really Gmail, it was just a facade of HTML and behind the scenes and according to the permissions that the users gave us. Some of us moved just the subject and the sender into the right place. So initially the interviewer distracted them and then showed them their inbox and in it the top 50 messages were sorted to the right place, more or less if we got it right and people were like, "Wow, this is actually very cool." And that gave us a lot of evidence.

**中文翻译:**
你做虚假门测试、冒烟测试、绿野仙踪测试、礼宾测试（Concierge test）、可用性测试。顺便说一下，我们在做分类收件箱时大量使用了这些方法。最初的早期版本之一，实际上是我们向用户展示了一个正在运行的分类收件箱。但那并不是真正的 Gmail，只是一个 HTML 的外壳，在后台根据用户授予我们的权限，我们中的一些人手动将邮件主题和发件人移动到正确的位置。所以最初，访客谈话员分散了他们的注意力，然后向他们展示收件箱，如果操作正确的话，前 50 条消息会大致被分类到正确的地方。人们的反应是：“哇，这真的很酷。”这给了我们大量的证据。

---

### [00:53:02] Lenny

**English:**
That's an awesome story. So that was in the user research, it wasn't rolled out to people? It was a manual individual?

**中文翻译:**
这是一个很棒的故事。所以那是在用户研究中做的，并没有向大众发布？是手动针对个人的？

---

### [00:53:08] Itamar Gilad

**English:**
There wasn't a single line of code written, this was just cooked up by the researchers and our designers. But it gave us some evidence to go and say, we should try and build this thing.

**中文翻译:**
当时一行代码都没写，这只是由研究人员和我们的设计师构思出来的。但它给了我们一些证据去说，我们应该尝试开发这个东西。

---

### [00:53:19] Lenny

**English:**
Love that.

**中文翻译:**
太棒了。

---

### [00:53:21] Itamar Gilad

**English:**
So initially you fake it, mid-level tests are about building a rough version of it, it's not complete, it's not polished, it's not scalable, but it's good enough to give to users to start using. So those are early adopter programs, alphas, longitudinal user studies and fish food. Fish food is testing on your own team.

**中文翻译:**
所以最初你“造假”，中级测试则是构建一个粗糙的版本，它不完整、不精美、不可扩展，但足以交给用户开始使用。这些包括早期采用者计划、Alpha 测试、纵向用户研究和“鱼食”（fish food）。“鱼食”就是在你自己的团队中进行测试。

---

### [00:53:40] Lenny

**English:**
Fish food? I haven't heard that term before. So it's dog fooding, but more local to your team.

**中文翻译:**
鱼食（Fish food）？我以前没听过这个词。所以它就是“吃狗粮”（dogfooding），但范围更局限于你的团队。

---

### [00:53:46] Itamar Gilad

**English:**
I think it's a Googly thing, but some people told me that they use fish food as well in their company the name. So I'm using it, I don't know if there's a better name for it.

**中文翻译:**
我想这是 Google 内部的说法，但有些人告诉我，他们在公司里也用“鱼食”这个名字。所以我一直在用它，我不知道是否有更好的名字。

---

### [00:53:54] Lenny

**English:**
I wonder why it's called fish food, because it's like little? It's like little gentle little clicks?

**中文翻译:**
我在想为什么叫鱼食，是因为它很小吗？就像轻柔的小点击？

---

### [00:53:58] Itamar Gilad

**English:**
It could be. Yeah, I don't know.

**中文翻译:**
可能是吧。我也说不准。

---

### [00:54:00] Lenny

**English:**
Wow. Okay, super cool. I'm learning a lot here.

**中文翻译:**
哇。好，超级酷。我学到了很多。

---

### [00:54:03] Itamar Gilad

**English:**
So the next stage is to actually build a kind of more complete version of this and then you can dog food it, then you can give this to your users internally. When I joined Microsoft many years ago, the first thing I noticed was that Outlook was very buggy and I asked people what's going on? And they told me we are all dog fooding the next version of Outlook that hasn't come out yet and that's a very common practice in Silicon Valley. You can do previews, you can do betas, you can do labs, so those are tests. Now, there's a special class of tests which are experiments because they have a control element. So AB tests, multivariate tests, those are all experiments. I'm using the word experiment the way data scientists use it, although people tend to call experiments to everything that you see here and finally, even the release you can do stage release, you can do percent launches, you can do hold backs. All of these things help you further validate your assumptions. Sometimes you need to roll back and change things, but it's another opportunity to learn.

**中文翻译:**
下一阶段是实际构建一个更完整的版本，然后你可以“吃狗粮”，把它交给内部用户。多年前我加入微软时，注意到的第一件事就是 Outlook 有很多 Bug，我问大家怎么回事？他们告诉我，我们都在“吃狗粮”，试用还没发布的下一个版本的 Outlook。这是硅谷非常普遍的做法。你可以做预览版、Beta 版、实验室版，这些都是测试。现在，有一类特殊的测试叫**实验**，因为它们包含对照组。所以 AB 测试、多变量测试，这些都是实验。我是在数据科学家使用的意义上使用“实验”这个词的，尽管人们倾向于把你在这里看到的所有东西都称为实验。最后，甚至是发布，你可以做分阶段发布、百分比发布、留存测试（hold backs）。所有这些都有助于你进一步验证假设。有时你需要回滚并更改，但这是另一个学习的机会。

---

### [00:55:06] Itamar Gilad (Continued)

**English:**
So the key point is you don't have to start at the right-hand side, which is expensive. You can start early on and that leads to poking a lot of ideas very quickly. You realize they're not as good as you thought, and then you can invest more effort into the good ideas. If they generate positive evidence, you can go further and further until that point where you feel you're ready for delivery.

**中文翻译:**
所以关键点在于，你不需要从右侧（昂贵的部分）开始。你可以从早期开始，这能让你快速筛选大量想法。你会意识到它们并没有你想象的那么好，然后你可以把更多的精力投入到好的想法中。如果它们产生了积极的证据，你可以走得越来越远，直到你觉得准备好交付为止。

---

### [00:55:29] Lenny

**English:**
Okay. So we've talked about goals, we've talked about ideas, we're talking about steps here. Is there anything else along steps? And then next I know comes tasks.

**中文翻译:**
好。我们讨论了目标、想法，现在讨论了步骤。关于步骤还有什么要补充的吗？我知道接下来是任务。

---

### [00:55:37] Itamar Gilad

**English:**
No, this is it for steps. There's a lot more with this, we will not go into all of it.

**中文翻译:**
不，关于步骤就讲这么多。这里面还有很多内容，我们就不一一深入了。

---

### [00:55:42] Lenny

**English:**
Okay, that sounds good. Let's talk about tasks and what you mean there.

**中文翻译:**
好，听起来不错。让我们谈谈任务，以及你指的是什么。

---

### [00:55:46] Itamar Gilad

**English:**
All right, awesome. So in many organizations there's these two worlds. There's the planning world where basically you have the managers, the stakeholders, some of the PMs really sit and think about what we need to launch and that's where we create the strategies and the roadmaps and the projects. But guess who is not invited to the party? The people who are actually doing the work. They live in Agile world, they're very focused on moving tickets to the done state, on completing burning story points, pushing stuff into production and there's a big gap between these two worlds. They don't understand each other, they don't see eye to eye, there's a lot of mistrust being built sometimes against the plans or the managers feels that the teams are just not being very effective. We've seen all of this and the solution, the stop gap is to put a PM in the middle. The PM is supposed to make all of this work, deliver on the roadmap like a project manager, feed the Agile machine with perfectly prioritized product backlogs and stories and it just doesn't work honestly.

**中文翻译:**
好的，太棒了。在许多组织中存在着两个世界。一个是“计划世界”，基本上是经理、利益相关者和一些 PM 坐在一起思考我们需要发布什么，我们在那里制定战略、路线图和项目。但猜猜谁没被邀请参加这个聚会？是那些实际动手工作的人。他们生活在“敏捷世界”里，非常专注于将工单（tickets）移动到“已完成”状态，完成故事点，将东西推向生产。这两个世界之间存在巨大的鸿沟。他们互不理解，见解不一，有时会对计划产生很多不信任，或者经理觉得团队效率不高。我们见过所有这些情况。而解决方案，或者说权宜之计，就是把 PM 放在中间。PM 应该让这一切运转起来，像项目经理一样交付路线图，用完美排序的产品待办列表和故事来喂养敏捷机器。老实说，这行不通。

---

### [00:56:50] Itamar Gilad (Continued)

**English:**
And the PMs I meet are very tired and they have to spend so much time in planifications and roadmap discussions and they're very busy, they don't have time to do research or to test ideas. So I suggest changing this and bringing the developers a little bit out of their Agile cage if you like and no disrespect to Agile, it's a great thing but let's let them do more than just develop. Let's let them discover as well and one of the tools I suggest and again this is a process is what I call the GIST board. So it's basically the top three layers of GIST. The goals are on the right, these are just the key results usually per team I suggest not more than four. So you create a GIST board per team, then the ideas we're working on right now sometimes with our ICE scores and then the next few steps that we might want to pursue in order to validate these ideas and this is a very dynamic thing.

**中文翻译:**
我遇到的 PM 都非常疲惫，他们不得不花大量时间在计划和路线图讨论上，他们非常忙，没有时间做研究或测试想法。所以我建议改变这种状况，把开发人员从他们的“敏捷牢笼”里带出来一点（无意冒犯敏捷，它是个好东西），但让我们让他们做的不仅仅是开发。让我们让他们也参与探索。我建议的工具之一（同样，这是一个流程）是我称之为 **GIST 看板**的东西。它基本上涵盖了 GIST 的前三层。目标在右侧，通常是每个团队的关键结果（KR），我建议不超过四个。所以你为每个团队创建一个 GIST 看板，然后是我们目前正在处理的想法（有时带有 ICE 评分），接着是我们为了验证这些想法可能想要执行的后续几个步骤。这是一个非常动态的过程。

---

### [00:57:48] Itamar Gilad (Continued)

**English:**
It changes all the time, the team leads need to update it and the team needs to meet around it at least once every other week to think to talk about what's going on. Are we still following the right ideas? How are we doing on the goals? What are the next steps? What's blocking us from completing the most important steps? And this is a discussion that is not happening today, because most of the discussion happens at the roadmap level and then there's a lot of discussion at the task level. But this middle layer of what actually are we trying to achieve and how well are we doing on it doesn't exist. If you do have this, you create a lot more context in the minds of your team and then they need to ask you fewer questions. You need to tell them less what to do. They know what's success and they are able to actually do a lot more on their own.

**中文翻译:**
它一直在变化，团队负责人需要更新它，团队需要至少每两周围绕它开一次会，讨论进展情况。我们还在追求正确的想法吗？目标进展如何？下一步是什么？什么阻碍了我们完成最重要的步骤？这种讨论在今天并没有发生，因为大多数讨论发生在路线图级别，然后是任务级别的讨论。但中间这一层——我们到底在尝试实现什么，以及我们做得怎么样——并不存在。如果你有了这个，你就在团队成员的脑海中创造了更多的上下文（context），然后他们需要问你的问题就少了。你需要告诉他们该做什么的情况也少了。他们知道什么是成功，并且能够独立完成更多工作。

---

### [00:58:37] Lenny

**English:**
Is the way to think about the GIST board as the way you should be road roadmapping or is this more of a strategy framework to think about why you should be prioritizing broadly?

**中文翻译:**
是将 GIST 看板看作你应该进行路线图规划的方式，还是说它更多是一个战略框架，用来思考为什么要进行广泛的优先级排序？

---

### [00:58:48] Itamar Gilad

**English:**
The way I say this is at the beginning of the quarter, the team defines its goals. The leads of the team define the goals, but they review it with the team, they review it with the managers, of course with the stakeholders. Everyone's in agreement, these are the maximum four key results and the one or two objectives you guys need to work on, teams cannot deliver on more than that. You copy these key results into the GIST board, then you start looking at your idea bank or you start generating ideas and say, how can we achieve these key results?

**中文翻译:**
我的说法是，在季度开始时，团队定义其目标。团队负责人定义目标，但他们会与团队、经理，当然还有利益相关者一起评审。大家达成一致：这就是你们需要努力的最多四个关键结果（KR）以及一两个目标（Objectives），团队无法交付更多。你将这些关键结果复制到 GIST 看板中，然后开始查看你的想法库，或者开始产生想法并问：我们如何实现这些关键结果？

---

### [00:59:18] Lenny

**English:**
And to clarify the thing you copy is the key result as the goal?

**中文翻译:**
澄清一下，你复制的是作为目标的“关键结果”？

---

### [00:59:22] Itamar Gilad

**English:**
Yes, exactly. You can write the objectives alongside that to remind people what are we trying to achieve, but the key results are the thing we show here. Then you pick some ideas, the ones that look most promising and as unintuitive as it sounds or counterintuitive as this sounds I would recommend that you let the team pick these ideas. The manager of the stakeholders can propose the ideas, everyone can propose, but the team should use the ICE process to kind of... And especially the product manager is very important here to choose which ideas to test first. Then the team together needs to develop which steps should we run, how can we validate this? Some of the steps will be done by the PM, some by the data analyst, some by the user researcher. But some will involve the team, there'll be some coding, there'll be some running of experiments and so there's some ownership around the steps. A sub team owns each one of these steps and we will change the board very actively.

**中文翻译:**
是的，没错。你可以在旁边写上目标，以提醒大家我们要实现什么，但关键结果是我们在这里展示的核心。然后你挑选一些想法，那些看起来最有希望的想法。尽管这听起来可能不符合直觉或反直觉，但我建议你让团队来挑选这些想法。经理或利益相关者可以提出想法，每个人都可以提，但团队应该使用 ICE 流程来……特别是产品经理在这里非常重要，决定先测试哪些想法。然后团队需要共同制定：我们应该运行哪些步骤？我们如何验证这一点？有些步骤将由 PM 完成，有些由数据分析师完成，有些由用户研究员完成。但有些会涉及整个团队，会有一些编码工作，会有一些实验运行，因此步骤周围会有一些所有权。一个子团队负责其中每一个步骤，我们会非常积极地更改看板。

---

### [01:00:24] Itamar Gilad (Continued)

**English:**
So if an idea turns out to be bad we will take it off the board and put another idea in this place or maybe we achieve the goal, we don't need to work on this anymore, we can focus something else. So it's a project management tool in a sense.

**中文翻译:**
所以如果一个想法被证明是糟糕的，我们会把它从看板上拿掉，换上另一个想法；或者如果我们实现了目标，就不需要再做这个了，可以专注于其他事情。所以从某种意义上说，它是一个项目管理工具。

---

### [01:00:36] Lenny

**English:**
Awesome. So I'm looking at it and I think maybe the most important piece of this is that steps aren't just like a project, like launch a better onboarding or add the step to onboarding. It's you want to emphasize the steps that you're going to take to get to more and more confidence essentially, and more and more evidence guided thinking versus just, "Well, let's figure out how to launch this feature idea."

**中文翻译:**
太棒了。我看着它，我觉得其中最重要的部分是：步骤不仅仅像是一个项目，比如“发布更好的新手引导”或“在新手引导中添加步骤”。你是想强调为了获得越来越高的信心，你本质上将采取的那些步骤，以及越来越多的证据导向思维，而不是仅仅说“好吧，让我们想办法发布这个功能想法”。

---

### [01:01:03] Itamar Gilad

**English:**
Exactly. It's not a engineering milestone or a design milestone, it's a learning milestone. So we build something and along the way we actually grow the scope of what we build. We are building the product in the process and we learn, so the two have to come hand in hand.

**中文翻译:**
没错。它不是工程里程碑或设计里程碑，它是**学习里程碑**。所以我们构建一些东西，在此过程中我们实际上扩大了构建的范围。我们在过程中构建产品并学习，所以这两者必须齐头并进。

---

### [01:01:20] Lenny

**English:**
And for folks that aren't watching this on YouTube, just to walk through an example, we'll do it real quick. So one of your goals here is average onboarding time, you want your goal to be the average onboarding time less than two days, currently five and a half days. An idea there is an onboarding wizard, and then the steps are a usability test with mockups and then a usability test as a prototype and then an AB test?

**中文翻译:**
对于没在 YouTube 上看视频的朋友，我们快速过一个例子。比如你的一个目标是“平均新手引导时间”，你希望目标是少于两天，目前是五天半。一个想法是“新手引导向导”，然后步骤是“使用模型（mockups）进行可用性测试”，接着是“作为原型的可用性测试”，最后是“AB 测试”？

---

### [01:01:42] Itamar Gilad

**English:**
Yeah, basically, and you can alter this as you go along. Sometimes you can run multiple steps in parallel it's not always sequential. But that's basically the process, yeah.

**中文翻译:**
是的，基本上是这样，你可以随进随改。有时你可以并行运行多个步骤，不一定总是顺序执行的。但流程基本上就是这样。

---

### [01:01:53] Lenny

**English:**
Awesome. So again, what you're trying to emphasize here as a team is just we're not just going to launch this onboarding wizard and we're not going to figure it out later. It's like let's be upfront about the steps we're going to take to build more and more confidence. This is something we should keep investing more and more in, which is really interesting.

**中文翻译:**
太棒了。所以，作为一个团队，你在这里试图强调的是：我们不只是要发布这个新手引导向导，也不是以后再去解决问题。而是我们要预先明确我们将采取哪些步骤来建立越来越多的信心。这是一个我们应该持续投入越来越多的事情，这真的很有趣。

---

### [01:02:09] Itamar Gilad

**English:**
Yeah, and another interesting thing that happens every time you run a step if it's successful you have evidence and you can go back to the managers and tell them and share and say, "With this idea we thought it was great, but we got this result. What do you think that means?" And sometimes that manager that propose it would say, "I think the test failed, let's rerun it." Or sometimes they will say, "Maybe it's not as strong as I thought. The discussion just becomes that much more nuanced and objective if you like.

**中文翻译:**
是的，另一件有趣的事情是，每当你运行一个步骤，如果它成功了，你就有了证据，你可以回到经理那里分享并说：“关于这个想法，我们曾认为它很棒，但我们得到了这个结果。你觉得这意味着什么？”有时提出这个想法的经理会说：“我认为测试失败了，让我们重新运行一下。”或者有时他们会说：“也许它没有我想象的那么强。”如果你愿意，讨论就会变得更加细致和客观。

---

### [01:02:42] Lenny

**English:**
Maybe just to close out this framework. How does this relate to a roadmap that they may have in a spreadsheet or in Jira or in Asana or something like that. Does this sit on top of that? Is this replacing a roadmap somewhere else?

**中文翻译:**
也许我们可以结束这个框架的讨论。这与他们可能在电子表格、Jira 或 Asana 中拥有的路线图有什么关系？它是凌驾于其上的吗？还是它取代了其他地方的路线图？

---

### [01:02:54] Itamar Gilad

**English:**
I would say that release roadmaps where you are just saying by Q3 we want to launch this or by October we have to launch that, they're kind of competing with this. If you're doing that and people know that the goal is to launch that thing by October, forget about learning, forget about evidence guided, I recommend using outcome roadmaps saying by October we want to achieve this outcome. By Q4 we want to launch in another three countries, or we want to grow our usage in India by that much, by this time we need to tackle the problem of churn and how we achieve this. Sometimes we know we have a concrete idea that is high confidence that we already tested, we switch into delivery, then we can put it on the roadmap and say, "Yeah, we're going to build this thing and we'll aim for October." But otherwise you want to keep it open and the roadmaps can kind of suffocate this process if you decide upfront with low confidence that this particular idea must be launched.

**中文翻译:**
我会说，那些只是说“到第三季度我们要发布这个”或“到十月我们必须发布那个”的发布路线图，与这个模型是竞争关系。如果你在做那种路线图，而且大家都知道目标是在十月发布那个东西，那就忘掉学习吧，忘掉证据导向。我建议使用“成果路线图”（outcome roadmaps），说“到十月我们要实现这个成果”。“到第四季度我们要进入另外三个国家”，或者“我们要将印度的使用量增加这么多”，“到这个时候我们需要解决流失问题”。至于我们如何实现这些，有时我们知道我们有一个已经测试过的高信心具体想法，我们转向交付，然后我们可以把它放在路线图上说：“是的，我们要构建这个东西，目标是十月。”但除此之外，你应该保持开放。如果你在信心很低的情况下就预先决定必须发布某个特定想法，路线图可能会扼杀这个过程。

---

### [01:04:04] Lenny

**English:**
Okay. So you're proposing people switch the roadmapping practice to this, which is very ambitious. I love it.

**中文翻译:**
好。所以你是在建议人们将路线图实践转向这种方式，这非常有野心。我喜欢。

---

### [01:04:10] Itamar Gilad

**English:**
Well, this is not a roadmap. This is just a tool for the team to manage the project, but I have a proposal for outcome roadmaps inside the book.

**中文翻译:**
嗯，这本身不是路线图。这只是团队管理项目的工具，但我在书中有关于成果路线图的提案。

---

### [01:04:20] Lenny

**English:**
Okay, awesome. Okay. So I was going to ask if people wanted to try this approach, the book is the best way to fully understand the framework and how implement it.

**中文翻译:**
好，太棒了。我正想问，如果人们想尝试这种方法，书是不是全面理解该框架及其实现方式的最佳途径？

---

### [01:04:30] Itamar Gilad

**English:**
That's one way. I have articles, I have resources on my site, but I try to condense much of what we just discussed in a lot more nuance in the book. So if you are interested in that, I would give it a go.

**中文翻译:**
那是途径之一。我的网站上有文章和资源，但我试图在书中以更细腻的方式浓缩我们刚才讨论的大部分内容。所以如果你对此感兴趣，可以尝试读读。

---

### [01:04:45] Lenny

**English:**
Awesome. Maybe just on the topic of OKRs real quick. How do OKRs connect to all this? It sounds like broadly you kind of assume people will keep working on here's our metric or key results or objectives and then that plugs into this kind of GIST framework.

**中文翻译:**
太棒了。也许我们可以快速聊聊 OKR。OKR 是如何与这一切联系起来的？听起来，你大致假设人们会继续致力于“这是我们的指标、关键结果或目标”，然后将其接入这个 GIST 框架。

---

### [01:05:01] Itamar Gilad

**English:**
So the metrics trees, plus your mission, plus the individual missions of the teams give you most of what you need to populate your OKRs. There's of course a process of alignment, top down, bottom up, side to side, which I talk a little bit about as well. OKRs is a very rich topic, but those things are usually the core. There's usually some other OKRs that's about the health of the company, the health of the product, etc. Those are called supplementary OKRs, I talk about those as well. So yeah, I think OKRs are a helpful tool if you like them.

**中文翻译:**
指标树，加上你的使命，再加上团队各自的使命，为你提供了填充 OKR 所需的大部分内容。当然还有一个对齐的过程，包括自上而下、自下而上、横向对齐，我也稍微谈到了这一点。OKR 是一个非常丰富的话题，但这些通常是核心。通常还有一些关于公司健康、产品健康等的其他 OKR，这些被称为“补充 OKR”，我也谈到了它们。所以，如果你喜欢 OKR，我认为它们是一个有用的工具。

---

### [01:05:37] Lenny

**English:**
And just zooming out again. Basically you don't need to take all of these ideas and lump them all together and change the way you work as a business. You can start with picking some of these ideas and starting to become more and more evidence guided. It sounds like this GIST board isn't where you probably want to start, but maybe it's once you have more and more experience using some of these tools or you tell me. Do you sometimes go straight to this way of thinking about the roadmap and the plan?

**中文翻译:**
再次放大来看。基本上，你不需要把所有这些想法打包在一起，然后彻底改变企业的运作方式。你可以从挑选其中一些想法开始，逐渐变得越来越以证据为导向。听起来 GIST 看板可能不是你开始的地方，也许是在你有了越来越多使用这些工具的经验之后。或者你告诉我，你有时会直接进入这种思考路线图和计划的方式吗？

---

### [01:06:04] Itamar Gilad

**English:**
So it might not be the full board because you're missing some of the pieces, maybe your goals are not as good or your idea prioritization isn't as good. But if your team is very, very delivery focused and sometimes it's also the opposite. The managers are telling them how to build and you want to break this kind of dynamic, you want to create a step backlog. So instead of a product backlog, let's create a backlog of steps which are just validation steps, betas and previews, etc, and that changes the dynamic pretty strongly.

**中文翻译:**
所以可能不是完整的看板，因为你可能缺少一些环节，比如你的目标不够好，或者你的想法优先级排序不够好。但如果你的团队非常、非常专注于交付，或者有时情况相反——经理在告诉他们如何构建，而你想打破这种动态——你可以创建一个“步骤待办列表”（step backlog）。所以，与其创建一个产品待办列表，不如创建一个包含验证步骤、Beta 测试和预览等的步骤待办列表，这会非常强烈地改变团队动态。

---

### [01:06:39] Lenny

**English:**
So by the time this podcast comes out, the book will be out. What is the best place to find the book?

**中文翻译:**
到这期播客发布时，书应该已经出版了。哪里是找这本书最好的地方？

---

### [01:06:44] Itamar Gilad

**English:**
Hopefully on Amazon, you can search for it. You can go to my site, itamargilad.com and it'll be presented prominently there and there's also the book landings page where you'll find everything you need to know about the book, evidenceguided.com.

**中文翻译:**
希望在亚马逊上能搜到。你可以去我的网站 itamargilad.com，书会在显眼位置展示。还有一个专门的图书落地页 evidenceguided.com，你可以在那里找到关于这本书的所有信息。

---

### [01:06:59] Lenny

**English:**
Well, with that we've reached our very exciting lightning round. Are you ready?

**中文翻译:**
好，接下来进入我们非常激动人心的闪电轮问答。准备好了吗？

---

### [01:07:03] Itamar Gilad

**English:**
Yes, let's go.

**中文翻译:**
准备好了，开始吧。

---

### [01:07:04] Lenny

**English:**
What are two or three books you've recommended most to other people?

**中文翻译:**
你向别人推荐最多的两三本书是什么？

---

### [01:07:07] Itamar Gilad

**English:**
So I'm going to cheat, I'm going to recommend a series of books so two series. One is the-

**中文翻译:**
我要耍个赖，我要推荐一系列书，也就是两个系列。一个是——

---

### [01:07:12] Lenny

**English:**
Cheating is allowed.

**中文翻译:**
允许耍赖。

---

### [01:07:13] Itamar Gilad

**English:**
All right, cool. One, and those are obvious one. One is the series published by SVPG, Silicon Valley Product Group. So INSPIRED, EMPOWERED, now I think TRANSFORMED has come out, I haven't read it yet but I'm sure it's amazing. So this is Marty Cagan and his colleagues, they write some tremendous books and every product manager should read them. The other series, a bit older, this is the Lean series, The Lean Startup, Lean Enterprise, Lean Analytics, there's gold in all these books, Lean UX, really, really important books and I think they're not as appreciated as they should. Running Lean, that's another example.

**中文翻译:**
好，酷。第一个是很显而易见的，就是 SVPG（硅谷产品集团）出版的系列丛书。包括《启示录》（INSPIRED）、《赋能》（EMPOWERED），现在我想《转型》（TRANSFORMED）也出版了，我还没读过，但我确信它很棒。这是 Marty Cagan 和他的同事们写的，他们写了一些非常了不起的书，每个产品经理都应该读读。另一个系列稍微老一点，是“精益”系列：《精益创业》、《精益企业》、《精益数据分析》，这些书里到处是金子，还有《精益 UX》，都是非常、非常重要的书，我觉得它们没有得到应有的重视。还有《精益运行》（Running Lean）也是一个例子。

---

### [01:07:54] Lenny

**English:**
What is a favorite recent movie or TV show?

**中文翻译:**
最近最喜欢的电影或电视节目是什么？

---

### [01:07:57] Itamar Gilad

**English:**
I'm not really a big TV or movie buff, I just put on whatever comes up. I'm discovering that YouTube is actually becoming one of my sources of information entertainment. I'm learning a lot of Spanish recently, so I discovered this channel called Dreaming Spanish which is if you're learning Spanish it's incredible. So that's my recommendation.

**中文翻译:**
我其实不是个电视或电影迷，我只是随便看。我发现 YouTube 实际上正成为我获取信息和娱乐的来源之一。我最近在学西班牙语，所以我发现了一个叫 Dreaming Spanish 的频道，如果你在学西班牙语，那真的太棒了。这就是我的推荐。

---

### [01:08:19] Lenny

**English:**
That's a unique choice, I love it. Favorite interview question you like to ask candidates.

**中文翻译:**
这是一个独特的选择，我喜欢。你最喜欢问应聘者的面试问题是什么？

---

### [01:08:24] Itamar Gilad

**English:**
I like to ask them to design something for a niche audience. So a navigation system for elderly people or some sort of laptop for people with vision impairment, etc. So those are good questions to see their customer empathy, their creativity, their ability to evaluate multiple ideas, their ability to find flaws in their own ideas. So there's a lot of room to dig in there and kind of see how this person is thinking as a product person.

**中文翻译:**
我喜欢让他们为特定受众设计一些东西。比如为老年人设计导航系统，或者为视力障碍人士设计某种笔记本电脑等。这些问题很好，可以考察他们的客户同理心、创造力、评估多个想法的能力，以及发现自己想法缺陷的能力。所以有很多空间可以挖掘，看看这个人作为产品人是如何思考的。

---

### [01:08:57] Lenny

**English:**
What is a favorite product you recently discovered that you love?

**中文翻译:**
你最近发现并喜爱的产品是什么？

---

### [01:09:00] Itamar Gilad

**English:**
It's a cliche, but it's AI. There's a company called ElevenLabs, that do voices and the best voices, synthetic voices you heard, but they can also replicate your own voice so you can create a voice signature. If you're American you can use their kind of default free version or cheap version to replicate your own voice and that could be pretty useful if you need to narrate an audiobook or do some online course. So I'm finding this service very interesting.

**中文翻译:**
虽然有点老生常谈，但还是 AI。有一家叫 ElevenLabs 的公司，他们做语音合成，那是你听过的最好的合成语音。而且他们还可以复制你自己的声音，这样你就可以创建一个语音签名。如果你是美国人，你可以使用他们的默认免费版或廉价版来复制自己的声音，如果你需要朗读有声读物或制作在线课程，这会非常有用。我觉得这项服务非常有趣。

---

### [01:09:36] Lenny

**English:**
This is all part of my big retirement plan, find all of these components together that can replace me eventually. You got AI generating content, we'll have this voice thing. I love it, it's all happening.

**中文翻译:**
这都是我宏大退休计划的一部分：找到所有这些组件，最终取代我。你有 AI 生成内容，我们还会有这个语音工具。我喜欢，这一切都在发生。

---

### [01:09:45] Itamar Gilad

**English:**
There's an AI version of you, right? I can ask you questions now with-

**中文翻译:**
已经有一个 AI 版的你了，对吧？我现在就可以问你问题——

---

### [01:09:48] Lenny

**English:**
Oh, there is lennybot.com.

**中文翻译:**
噢，确实有，lennybot.com。

---

### [01:09:50] Itamar Gilad

**English:**
Right.

**中文翻译:**
对。

---

### [01:09:51] Lenny

**English:**
It's all part of the plan. Okay. What is a favorite life motto that you repeat most to yourself that you share with others?

**中文翻译:**
这都是计划的一部分。好。你最常对自己重复并分享给他人的座右铭是什么？

---

### [01:09:59] Itamar Gilad

**English:**
That's a big one. Albert Einstein I think said, "Strive not to be a success, but to be of value." And I think that's a great motto for people and for companies. It's something that kind of guides me and this whole concept of the value exchange, etc, is kind of loosely connected to that.

**中文翻译:**
这是一个宏大的话题。我想阿尔伯特·爱因斯坦曾说过：“不要为成功而努力，而要为做一个有价值的人而努力。”我认为这对个人和公司来说都是一个伟大的座右铭。这是引导我的东西，而整个价值交换的概念等，也与此有着松散的联系。

---

### [01:10:19] Lenny

**English:**
I love that, that's such a important point for people putting out content online. So many people are just like, I just want to be successful, get followers, here's all these things I'm tweeting and showing and the thing that actually works is deliver value, create valuable stuff that people really value and want. I find the signal for that is, do you find it interesting and valuable? If you're like, "Oh wow, that's really interesting." Oftentimes other people are going to find it interesting. So I love that, great choice, I'm going to look at that one up. Two more questions. What's the most valuable lesson you learned from your mom or your dad?

**中文翻译:**
我喜欢这个，对于在网上发布内容的人来说，这是一个非常重要的点。很多人只是想：“我只想成功，获得粉丝，这是我推特和展示的所有东西。”但真正起作用的是交付价值，创造人们真正看重和需要的有价值的东西。我发现衡量这个的信号是：你觉得它有趣且有价值吗？如果你觉得“哇，这真的很有趣”，通常其他人也会觉得有趣。所以我喜欢这个，很棒的选择，我会去查查这句话。还有两个问题。你从父母那里学到的最宝贵的教训是什么？

---

### [01:10:53] Itamar Gilad

**English:**
I think both of them in their own way, they had relatively modest jobs, teaching or doing other things, but they always strived again to be the best they can and to deliver the most value they can. So it's very connected somehow, maybe I'm seeing the world through this lens. But they kind of taught me to strive to be the best I can at what I do.

**中文翻译:**
我想他们两人都以自己的方式——他们从事着相对平凡的工作，教学或做其他事情——但他们总是努力做到最好，并交付最大的价值。所以这在某种程度上是紧密相连的，也许我是透过这个镜头看世界的。他们教会了我努力在所做的事情上做到最好。

---

### [01:11:19] Lenny

**English:**
The final question, you're Israeli for folks that can't tell. What is your favorite Israeli food that people should definitely check out or I try to get whenever they can?

**中文翻译:**
最后一个问题，对于看不出来的人，你是以色列人。你最喜欢的以色列食物是什么？人们一定要尝试一下，或者我应该尽可能去吃。

---

### [01:11:29] Itamar Gilad

**English:**
When I arrive in Israel I usually go for shawarma, which is like döner kebab if you know it, it's just better. So if you're in Israel, if you go visit Haifa, which is the city where I grew up definitely check out the shawarma.

**中文翻译:**
当我回到以色列时，我通常会去吃沙瓦玛（shawarma），如果你知道土耳其烤肉（döner kebab）的话，它很像，但更好吃。所以如果你在以色列，如果你去海法（我成长的城市），一定要尝尝那里的沙瓦玛。

---

### [01:11:44] Lenny

**English:**
Awesome. Itamar, I hope people got the gist of your book from our conversation. What's the best way to find it? What's the best way to learn about you and reach out if they want to ask any questions? And then also, how can listeners be useful to you?

**中文翻译:**
太棒了。Itamar，我希望大家能从我们的谈话中领会你书中的要旨（gist）。找到它的最好方式是什么？了解你并在有问题时联系你的最好方式是什么？此外，听众可以如何帮助你？

---

### [01:11:56] Itamar Gilad

**English:**
To find it you can go to itamargilad.com or to evidenceguided.com, and you'll find a book and you'll find me. Best value to me, try it out, just take some of these ideas, bring them back to your office, talk with your colleagues, say what do you think we should do about this? Just give it a go and reach back to me, tell me I'm easy to find in my website. Tell me what happened I'm really interested.

**中文翻译:**
要找到它，你可以访问 itamargilad.com 或 evidenceguided.com，你会找到书，也会找到我。对我来说最大的价值就是：去尝试一下。把这些想法带回你的办公室，和你的同事聊聊，问问“你觉得我们该怎么处理这个？”去尝试一下，然后反馈给我。在我的网站上很容易找到我。告诉我发生了什么，我真的很感兴趣。

---

### [01:12:22] Lenny

**English:**
Amazing. Itamar, thank you again so much for being here.

**中文翻译:**
太棒了。Itamar，再次感谢你能来到这里。

---

### [01:12:25] Itamar Gilad

**English:**
Thank you.

**中文翻译:**
谢谢。

---

### [01:12:26] Lenny

**English:**
Bye everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
大家再见。非常感谢大家的收听。如果你觉得这期节目有价值，可以在 Apple Podcasts、Spotify 或你最喜欢的播客应用上订阅本节目。此外，请考虑给我们评分或留下评论，这能真正帮助其他听众发现本播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目见。