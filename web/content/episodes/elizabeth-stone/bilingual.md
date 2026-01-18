# Elizabeth Stone - 双语对照

This is the complete bilingual transcript of Lenny’s Podcast featuring Elizabeth Stone, CTO of Netflix.

---

### [00:00:00] Elizabeth Stone

**English:**
We can't really have any of the other aspects of the culture, including candor, learning, seeking excellence in improvement, freedom and responsibility if you don't start with high talent density. And in some ways, it's very reflective of Reed Hastings as founder of Netflix. So when he founded Netflix and grew the company over time, it was with a belief that there could be a different approach to building a company that would make it a place that people thrived in and loved being and would feel different than other places, both in the quality of that talent density, but even more importantly, the excellence and the outcomes. And that that's where people would derive a lot of sense of fulfillment. So it is very deeply seated at Netflix from its original days. And in order to do that, you have to really hold yourself to a lot of stuff that doesn't feel like natural human behavior.

**中文翻译:**
如果不从高人才密度（High Talent Density）开始，我们就无法真正拥有企业文化的其他方面，包括坦诚、学习、追求卓越的进步、自由与责任。在某种程度上，这非常体现了 Netflix 创始人里德·哈斯廷斯（Reed Hastings）的理念。当他创立 Netflix 并随着时间的推移发展公司时，他坚信可以有一种不同的方式来建立公司，让它成为一个人们能够蓬勃发展、热爱身处其中、并且感觉与众不同的地方。这种不同不仅体现在人才密度的质量上，更重要的是体现在卓越的成果上。他认为这才是人们获得巨大成就感的地方。因此，这种理念自 Netflix 创立之初就根深蒂固。而为了做到这一点，你必须在很多方面严格要求自己，而这些要求往往并不符合人类的自然本能。

---

### [00:01:06] Lenny

**English:**
Today my guest is Elizabeth Stone. Elizabeth is chief technology officer at Netflix, and as far as I can tell, the first economist to ever be named CTO at a Fortune 500 company. Prior to this role, Elizabeth was vice president of Data and Insights. Before Netflix, she was vice president of science at Lyft, COO at Nuna, a trader at Merrill Lynch, and an economist at Analyst Group. In our conversation, we cover a lot of ground. We talk about how an economics background has helped Elizabeth in her career and why she expects to see more economists rise in the ranks of tech companies. She shares some of her secret sauce for rising so quickly at so many companies so consistently. We delve into Netflix's very unique culture of high talent density, radical candor, and freedom and responsibility. We also talk about the structure that Netflix has for their data and user research teams, which she believes is a part of Netflix's secret to success. We also get into what biking and triathlons have taught Elizabeth about life and how she brings that into her work and so much more.

**中文翻译:**
今天的嘉宾是伊丽莎白·斯通（Elizabeth Stone）。伊丽莎白是 Netflix 的首席技术官（CTO），据我所知，她是首位被任命为财富 500 强公司 CTO 的经济学家。在担任此职位之前，伊丽莎白曾任数据与洞察副总裁。在加入 Netflix 之前，她曾担任 Lyft 的科学副总裁、Nuna 的首席运营官（COO）、美林证券（Merrill Lynch）的交易员以及 Analysis Group 的经济学家。在我们的对话中，我们涉及了广泛的话题。我们讨论了经济学背景如何帮助伊丽莎白的职业生涯，以及为什么她预计会看到更多经济学家在科技公司晋升。她分享了自己在多家公司如此快速且持续晋升的一些“秘诀”。我们深入探讨了 Netflix 非常独特的文化：高人才密度、激进坦诚（Radical Candor）以及自由与责任。我们还谈到了 Netflix 数据和用户研究团队的架构，她认为这是 Netflix 成功的秘诀之一。我们还聊到了骑行和铁人三项给伊丽莎白带来的生活启示，以及她如何将这些启示融入工作，还有更多精彩内容。

---

### [00:02:08] Lenny

**English:**
A huge thank you to Ali Rao for introducing me to Elizabeth. If you enjoy this podcast, don't forget to subscribe and follow this podcast in your favorite podcasting app or YouTube. This helps tremendously and I really appreciate it. With that, I bring you Elizabeth Stone after a short word from our sponsors.
(00:02:26):
This episode is brought to you by Vanta. When it comes to ensuring your company as top-notch security practices, things get complicated fast. Now you can assess risk, secure the trust of your customers, and automate compliance for SOC 2, ISO 27001, HIPAA and more with a single platform, Vanta. Vanta's market leading trust management platform helps you continuously monitor compliance alongside reporting and tracking risks. Plus, you can save hours by completing security questionnaires with Vanta AI. Join thousands of global companies that use Vanta to automate evidence collection, unify risk management, and streamline security reviews. Get $1,000 off Vanta when you go to vanta.com/lenny. That's V-A-N-T-A.com/lenny.
(00:03:18):
Let me tell you about our product called Sendbird, the all-in-one communications API platform designed for both web and mobile apps. In a world saturated with multi-channel communication, product teams are discovering the effectiveness of in-app communication. With Sendbird, businesses can elevate their in-app experience with decluttered and branded communication featuring AI powered chatbots, one-way messages, chat, video calls and livestream capabilities all tailored for commerce, marketing, and top tier support. Forward-thinking companies such as Hinge, Patreon, Yahoo!, Accolade and more use Sendbird to build in-app communication experiences that drive engagement, conversion and retention. In-app communication has the highest conversion, highest engagement, and highest satisfaction of any communication channel. And when it comes to investing in this channel, trust Sendbird to take your in-app communication experience to the next level. Start today with Sendbird's free plan. And as a listener of Lenny's Podcast, you'll get an additional two months of unlimited usage and access to all premium features including creating your very own generative AI chatbot. Visit sendbird.com/lenny to begin your free journey. That's sendbird.com/lenny.
(00:04:36):
Elizabeth, thank you so much for being here and welcome to the podcast.

**中文翻译:**
非常感谢 Ali Rao 把伊丽莎白介绍给我。如果你喜欢这个播客，别忘了在你最喜欢的播客应用或 YouTube 上订阅和关注。这对我有很大帮助，非常感谢。在听完赞助商的简短介绍后，我将为你带来伊丽莎白·斯通的访谈。
(00:02:26):
本期节目由 Vanta 赞助。当涉及到确保公司拥有顶级的安全实践时，事情会迅速变得复杂。现在，你可以通过 Vanta 这一个平台来评估风险、赢得客户信任，并自动完成 SOC 2、ISO 27001、HIPAA 等合规认证。Vanta 市场领先的信任管理平台可帮助你持续监控合规性，同时报告和跟踪风险。此外，你还可以通过 Vanta AI 完成安全问卷，节省数小时的时间。加入全球数千家公司的行列，使用 Vanta 自动收集证据、统一风险管理并简化安全审查。访问 vanta.com/lenny 即可享受 1,000 美元的优惠。
(00:03:18):
让我向你介绍我们的产品 Sendbird，这是一个专为 Web 和移动应用设计的一站式通信 API 平台。在多渠道通信饱和的世界中，产品团队正在发现应用内通信的有效性。借助 Sendbird，企业可以通过整洁且带有品牌标识的通信提升应用内体验，功能包括 AI 驱动的聊天机器人、单向消息、聊天、视频通话和直播功能，全部为商业、营销和顶级支持量身定制。Hinge、Patreon、Yahoo!、Accolade 等前瞻性公司都使用 Sendbird 构建应用内通信体验，以推动参与度、转化率和留存率。在所有通信渠道中，应用内通信的转化率、参与度和满意度都是最高的。在投资这一渠道时，请信任 Sendbird，将你的应用内通信体验提升到新水平。今天就开始使用 Sendbird 的免费计划。作为 Lenny's Podcast 的听众，你将获得额外两个月的无限使用权，并可以使用所有高级功能，包括创建你自己的生成式 AI 聊天机器人。访问 sendbird.com/lenny 开始你的免费旅程。
(00:04:36):
伊丽莎白，非常感谢你能来到这里，欢迎来到本播客。

---

### [00:04:41] Elizabeth Stone

**English:**
Thank you. Thank you for having me.

**中文翻译:**
谢谢。谢谢你邀请我。

---

### [00:04:43] Lenny

**English:**
So when we booked this conversation, you are VP of data in Netflix. And since then you got a promotion, you're now the CTO of Netflix, which feels significantly more fancy. Question for you, what is life like now that you are CTO versus VP of data? How is it most different? I'm imagining more meetings.

**中文翻译:**
当我们预约这次谈话时，你还是 Netflix 的数据副总裁。从那以后你升职了，现在是 Netflix 的 CTO，这听起来要高级得多。问你个问题，现在担任 CTO 和之前担任数据副总裁相比，生活有什么变化？最大的不同是什么？我猜会议肯定变多了。

---

### [00:05:01] Elizabeth Stone

**English:**
I would say the biggest thing that changed is probably the amount of context switching and the degree to which I feel behind or I have a lot to learn. And I felt like I had a lot to learn in the VP of data and insights role that I was in before in part because we cover a lot of different areas of the business and there's always people to learn from, but the engineering organization just takes that to 100 basically. So more people to get to know, more problem spaces, aspects of technical expertise that I'm just not as deeply familiar with. And yeah, a lot more meetings.

**中文翻译:**
我想说最大的变化可能是上下文切换（Context Switching）的频率，以及我感到落后或需要学习的东西之多。在之前担任数据与洞察副总裁时，我就觉得有很多东西要学，部分原因是我们要涵盖业务的许多不同领域，总有可以学习的人，但工程组织基本上把这种学习强度提升到了 100 倍。有更多的人需要去认识，更多的问领域，以及我不那么深入熟悉的各种技术专业领域。当然，会议也确实多了很多。

---

### [00:05:41] Lenny

**English:**
I imagine many higher stakes meetings as well.

**中文翻译:**
我猜也有很多风险更高、更重要的会议。

---

### [00:05:44] Elizabeth Stone

**English:**
Yes. So thankfully not a lot of meetings that Netflix feel like now you're really in this scary room, but it does feel like the role has more consequence, which is actually an exciting thing.

**中文翻译:**
是的。幸好在 Netflix，并没有多少会议让你觉得像是进了一个恐怖的房间，但确实能感觉到这个角色承担的责任更重、影响更大，这实际上是一件令人兴奋的事情。

---

### [00:05:57] Lenny

**English:**
Kind along the lines of what you just talked about being a CTO. Your background is actually unusual. You're a trained economist, you got a PhD in economics. And from what I can tell, you're the first CTO of Fortune 500 company that is an economist trained in economics. First of all, is that true? I don't know if I think that's true, but you tell me.

**中文翻译:**
顺着你刚才提到的 CTO 话题。你的背景其实很不寻常。你是一名受过训练的经济学家，拥有经济学博士学位。据我所知，你是财富 500 强公司中第一位受过经济学训练的 CTO。首先，这是真的吗？我不确定这是否属实，你来告诉我。

---

### [00:06:16] Elizabeth Stone

**English:**
I have not checked the list. That was one of the things I did not do after getting the title. It might be unusual. I've heard a lot of feedback on that, so I don't know if I'm the one and only, but I will definitely say it's probably unusual.

**中文翻译:**
我还没查过名单。拿到这个头衔后，我没去做这件事。这可能确实很不寻常。我听到了很多关于这方面的反馈，所以我不知道我是否是唯一的一个，但我肯定会说这确实很少见。

---

### [00:06:30] Lenny

**English:**
Yeah. So I guess the question is just, do you think this is an anomaly and going to continue to be really rare? Do you think this some are going to see more at tech companies? And generally do you think tech companies should hire more economists?

**中文翻译:**
是的。所以我猜问题在于，你认为这是一个特例并会继续罕见下去吗？你认为未来在科技公司会看到更多这样的情况吗？总的来说，你认为科技公司应该雇佣更多的经济学家吗？

---

### [00:06:41] Elizabeth Stone

**English:**
Yes to the last question. That's the easiest of it. But one of the things I observed even with the focus on data science where I've been deeper for a period of time is that economics is a flavor of data science. So it is a set of technical skills for sure. It's a way of framing certain problems or solving challenges.
(00:07:06):
And so when I was first switching from economics into tech, it was before there was a lot of sort of the frenzy around data science that we've seen more recently and it was harder to make that argument that economics is a flavor of data science and maybe complimentary to other versions of data science. And I feel more strongly about that now that I've seen it up close. And so maybe by extension I would say just like I think data science can be helpful for a lot of different problems that you might not immediately think, "Oh, this is something that we should bring data to," I think that economics is generally valuable for a lot of different challenges and it's a useful perspective to add to things, especially in a business context and especially in how we want to simplify problems in a way that makes them feel tractable.
(00:08:00):
So I feel like that's been a benefit to me to have had that type of formal training and then bring that perspective or way of thinking to different roles. And so I don't know that many people at Netflix think of me as an economist, but I find it comes out in the way I think about things. So to the extent that that's true generally, I think it's useful in a lot of companies. And I feel like even since I made the switch towards tech, I've seen it become much, much more common to think about the value of having economists on teams.

**中文翻译:**
最后一个问题的答案是肯定的。那是其中最简单的部分。但我观察到的一点是，即使在我深耕了一段时间的数据科学领域，经济学其实也是数据科学的一种“风味”。它确实是一套技术技能，是一种界定问题或解决挑战的方式。
(00:07:06):
所以当我最初从经济学转向科技行业时，当时还没有像最近这样对数据科学如此狂热，那时很难证明经济学是数据科学的一种，或者说它是对其他版本数据科学的补充。在近距离观察之后，我现在对此深有感触。因此，或许可以延伸一下，就像我认为数据科学可以帮助解决很多你可能不会立即想到“哦，这应该用数据来解决”的问题一样，我认为经济学对于许多不同的挑战通常也很有价值。它是一个非常有用的视角，尤其是在商业背景下，以及在我们想要简化问题使其变得易于处理（Tractable）时。
(00:08:00):
所以我觉得接受过这种正式训练，然后将这种视角或思维方式带入不同的角色，对我来说是一种优势。我不确定 Netflix 有多少人把我当成经济学家，但我发现这种背景会体现在我思考问题的方式中。如果这种普遍性成立，我认为它对很多公司都有用。而且我感觉到，自从我转向科技行业以来，考虑在团队中引入经济学家的价值已经变得越来越普遍了。

---

### [00:08:32] Lenny

**English:**
Just to pull on that thread a little bit more, is there something very tactical or concrete that you can share that you find helpful with that background that you found helpful in your career?

**中文翻译:**
再深入探讨一下，有没有什么非常具体或实操性的东西，是你觉得这种背景在你的职业生涯中非常有帮助的？

---

### [00:08:42] Elizabeth Stone

**English:**
Other than the dismal dry science of it all? So one example would probably be in an understanding incentives and thinking about unintended consequences. I think that that is true both in terms of internal leadership, so being part of a management team that's thinking about how do we clarify priorities or motivate a company or define the problems we want to solve. And then part of it is more externally oriented. How do we want to think about what Netflix is to consumers and how we want to think about competition?
(00:09:24):
There can be a rational way of thought, which is one version of economics of shouldn't rational intelligent people behave in the following way. And then there's the, well, if given certain incentives, what might you see that we didn't think was optimal or we weren't expecting to happen but could be a consequence or repercussion here? And so I think that that type of framing, I don't know if it's unique to economics in a way because it has elements of psychology to it as well and planning ahead has become really useful for thinking through cause and effect. So that has come up in a lot of different spaces in Netflix and in other roles I've been in.

**中文翻译:**
除了它那“忧郁且枯燥的科学”本质之外？一个例子可能是对激励机制（Incentives）的理解以及对意外后果（Unintended Consequences）的思考。我认为这在内部领导力方面非常适用，比如作为管理团队的一员，思考如何明确优先级、激励公司或定义我们要解决的问题。另一部分则更偏向外部，比如我们如何看待 Netflix 对消费者的意义，以及我们如何看待竞争。
(00:09:24):
有一种理性的思维方式，这是经济学的一个版本，即“理性且聪明的人难道不应该以如下方式行事吗？”然后还有另一种情况，即在特定的激励下，你可能会看到哪些我们认为不是最优的、或者我们没预料到会发生但可能产生的后果或反响？我认为这种思维框架——虽然我不确定它是否仅限于经济学，因为它也包含心理学元素——对于深思熟虑因果关系变得非常有用。这在 Netflix 的许多不同领域以及我担任过的其他角色中都经常出现。

---

### [00:10:08] Lenny

**English:**
I was looking at your LinkedIn and looking at your career over the years. It seems like you've had a meteoric rise at four different companies. And I'll just walk through them briefly. So at your first job, you went from associate to vice president in three years. At the next company, Nuna, you went from manager of data science to COO in two years. At Netflix you went from VP to CTO in three years. I think that's really rare. I'm curious what is your secret sauce to being so successful at so many places and especially in the context of what advice can you share with folks earlier in their career?

**中文翻译:**
我看了你的 LinkedIn，回顾了你这些年的职业生涯。看起来你在四家不同的公司都经历了流星般的快速晋升。我简单梳理一下：在你的第一份工作中，你在三年内从 Associate 升到了副总裁。在下一家公司 Nuna，你在两年内从数据科学经理升到了 COO。在 Netflix，你在三年内从副总裁升到了 CTO。我认为这非常罕见。我很想知道你在这么多地方都能如此成功且持续晋升的“秘诀”是什么？特别是对于那些处于职业生涯早期的人，你有什么建议可以分享？

---

### [00:10:46] Elizabeth Stone

**English:**
This is one of those questions that sparks the reflection that I wouldn't normally do, so that's great. I really don't think of it as a secret sauce, but maybe I can walk through some of the things that I think have been instrumental. As you listed that out, it sounds like the two to three year point is the real sweet spot, so maybe there's something about that timeline. But I think some things almost feel trite in how I would say them, which is I'm very dedicated to the work and to the teams I'm part of. It's been part who I am for a long time that I give everything I've got to the job that I'm in. And I think that dedication and that I get joy out of that has mattered. It matters because I enjoy what I'm doing. I do the best work I possibly can, less so for myself and my own ambition and more so because I think of myself as being part of a team and so I really need to deliver for that team.
(00:11:52):
I think that framing in my mind and that motivation has helped me in a few fronts, which is the way in which I build partnerships with people I work with that I really care about setting other people up for success and being someone that people want to work with, so I learn from them, they learn from me, and we get better outcomes for the business together, I have found that part of that is being someone that people can leverage to translate from technical to non-technical and non-technical to technical. So that I do think has been a relative advantage in my role. So while I was often sitting in more technically-oriented teams, a lot of the advancement in my career was to roles that required that type of communication fluency. It grew out of being able to partner with people across the businesses who didn't necessarily have the same background, but where we needed to really connect spaces so that we could be more effective.
(00:12:57):
That was something that I think really the training for that came from analysis group where it was a very quantitative set of work that we had to find a way to communicate to judges and juries for economic cases. So that was something that was trained in other roles and I think I've been able to leverage. I'm a relatively introverted only child, so I observe a lot, which means that I learned from other people. And in each of these roles I have tried really hard to watch what other people are doing, think about how could I learn something from them, whether it's the thing that I want to be able to do myself or it's the thing that I think, "Oh, that doesn't quite fit or feel authentic with my style." And I do a lot of that introspection. So I have been surrounded by amazing people in all these roles and I have a feeling that I learned a lot by osmosis and observation and then have been able to leverage that to be stronger in the roles I was sitting in.

**中文翻译:**
这是一个能引发我平时不会做的反思的问题，这很好。我真的不认为有什么“秘诀”，但也许我可以梳理一下我认为起到关键作用的几件事。正如你列出的那样，两到三年似乎是一个“甜蜜点”，所以也许这个时间线里有些门道。但我认为有些事情说出来可能显得有些陈词滥调，那就是我对工作和所属团队非常投入。长期以来，我性格的一部分就是会对当下的工作倾尽所有。我认为这种投入以及我从中获得的快乐非常重要。这很重要，因为我热爱我所做的事情。我尽我所能做到最好，与其说是为了我自己和我的野心，不如说是由于我把自己看作团队的一员，所以我必须为团队交出答卷。
(00:11:52):
我认为这种思维框架和动力在几个方面帮助了我：一是我与同事建立合作伙伴关系的方式，我真的很在意成就他人，并努力成为一个大家愿意共事的人，这样我向他们学习，他们也向我学习，我们共同为业务取得更好的成果。我发现其中一部分是成为一个能够被他人倚重的人，去进行技术与非技术之间的“翻译”。我认为这在我担任的角色中是一个相对优势。虽然我经常身处技术导向的团队，但我职业生涯中的许多晋升都是到了那些需要这种沟通流畅度的角色。这源于能够与业务中背景完全不同的人合作，我们需要连接不同的领域以提高效率。
(00:12:57):
我认为这种能力的训练真正来自于 Analysis Group，那里有一套非常量化的工作，我们必须找到一种方式将其传达给经济案件的法官和陪审团。这种能力在其他角色中也得到了锻炼，我想我能够很好地利用它。我是一个相对内向的独生子女，所以我观察很多，这意味着我向他人学习。在每一个角色中，我都非常努力地观察别人的做法，思考我可以从他们身上学到什么，无论是我自己想做的事，还是我觉得“哦，那不太适合我或感觉不符合我的风格”的事。我做了很多这样的内省。在所有这些角色中，我身边都是优秀的人，我觉得我通过潜移默化和观察学到了很多，然后能够利用这些在我的职位上变得更强。

---

### [00:14:00] Lenny

**English:**
I took a few notes here. A few things you mentioned is just like, dedication, essentially working really hard and taking your work seriously, being part of a team and setting other people up for success, translating complex tech language and problems to non-tech people, and then being really good at observing and learning from other people around you. Is there an example or two that you could share of some of these to make it even more concrete for people? Like dedication. Is that just like working many hours, being part of a team? Anything along those lines to share a story maybe to help people put this into practice.

**中文翻译:**
我在这里做了一些笔记。你提到的几点包括：投入（Dedication），本质上是努力工作并认真对待工作；作为团队的一员并成就他人；将复杂的技术语言和问题翻译给非技术人员；以及非常擅长观察和向周围的人学习。你能不能分享一两个例子，让这些点对大家来说更具体一些？比如“投入”，这仅仅是指工作时间长吗？还是作为团队一员的某种表现？有没有类似的故事可以帮助大家把这些付诸实践？

---

### [00:14:35] Elizabeth Stone

**English:**
No, and it's a good clarification because the dedication piece really isn't about long working hours. It's more about how much I care about excellence, I guess. So giving it my best in those situations. And that might not mean that I work really wild hours or I work weekends or I'm the one who's willing to sacrifice the vacation. I've actually tried to avoid setting that as an expectation, but more that I hold myself to a very high standard.
(00:15:13):
So an example would be, especially as I've gotten more senior in roles, there can be an expectation that it's okay for other people to wait on me. So whether it's the timing for a meeting or providing input on something or reviewing a document or following through on something I said that I was going to do, and I really try to avoid that, which means that if someone sends me something, I try to be very responsive about it. If I know that I said I'm going to do something, I follow through on it in the timeline that I said I was going to do. If I have a meeting, I try to be on time to that meeting.
(00:16:01):
Those are all flavors of dedication to the work that show up in, "Oh, it seems like Elizabeth works really hard," but the motivation factor is other people are relying on me and I want to show up for them. And so that's when I say dedication and it's related to the second point around showing up well for the team, those would all be examples of I feel urgency in responding to people and doing high quality work.
(00:16:27):
For the other parts of technical to non-technical, I think a great example is actually a very timely one at Netflix, which is, we are making strides to offer live content types. So live events, live TV shows. We announced this week that we're going to be hosting WWE starting later this year and early next year, 2025. That is easier said than done. I know that there's a lot of entertainment companies that have live content. But Netflix has really been in the streaming content business, so live content is something new for us and it's something that's going to require a really close partnership between our content organization and our products and technology organization because there's a content strategy to it, there's a business strategy, there's a technology strategy to it. A big part of my role is, can I explain how we're going to approach those technical problems in a way that builds competence with the content team? Can I try to understand their content strategy in a way that sets the technical teams up for success and we understand what we need to be able to deliver on here in terms of requirements.
(00:17:46):
I don't think I'd be able to do my current role well if I wasn't able to do that type of translation for something that's going to be a big bet for the business and something we want to invest in jointly. And then to set my partners up for success in that. So I am going to do everything I can to make sure we deliver well for my content partners because I feel like that's what's best for Netflix in the business.

**中文翻译:**
不，这是一个很好的澄清，因为“投入”真的不是指长时间工作。我想，它更多地关乎我对追求卓越的在意程度。也就是在那些情况下尽我最大的努力。这可能并不意味着我要疯狂加班，或者周末工作，或者我是那个愿意牺牲假期的人。我实际上一直试图避免将这些设定为预期，更多的是我对自己要求非常高。
(00:15:13):
举个例子，尤其是当我职位越来越高时，可能会有一种预期，觉得让别人等我是理所当然的。无论是会议的时间，还是对某事提供意见，或者审阅文档，或者履行我承诺要做的事，我都会努力避免让别人等。这意味着如果有人给我发了东西，我会尽量快速响应。如果我知道我承诺了要做某事，我会按照承诺的时间表去完成。如果有会议，我会尽量准时参加。
(00:16:01):
这些都是对工作投入的表现，体现为“哦，伊丽莎白看起来工作非常努力”，但动力因素是别人在依赖我，我想为他们负责。所以当我谈到投入时，它与第二点——为团队表现出色——有关，这些都是我在响应他人和完成高质量工作时感到紧迫感的例子。
(00:16:27):
至于技术与非技术之间的转换，我认为一个非常及时的例子就是 Netflix。我们正在努力提供直播内容类型，比如直播活动、直播电视节目。我们本周宣布，将从今年晚些时候和明年年初（2025 年）开始承办 WWE。这说起来容易做起来难。我知道有很多娱乐公司都有直播内容，但 Netflix 一直专注于流媒体点播业务，所以直播内容对我们来说是新鲜事物。这需要我们的内容部门与产品及技术部门之间建立非常紧密的合作，因为这涉及内容策略、业务策略和技术策略。我角色的很大一部分是：我能否解释我们将如何处理这些技术问题，从而建立内容团队的信心？我能否尝试理解他们的内容策略，从而让技术团队做好准备，并让我们明白在需求方面我们需要交付什么。
(00:17:46):
如果我不能为这种业务上的重大赌注和我们想要共同投资的项目做好这种“翻译”工作，我想我无法胜任目前的角色。然后在这个过程中成就我的合作伙伴。因此，我会尽一切努力确保我们为内容合作伙伴提供良好的交付，因为我觉得这对 Netflix 的业务是最好的。

---

### [00:18:09] Lenny

**English:**
Amazing examples. In terms of life content, I think about the Love is Blind. I think it was for premier, whatever, reunion that we got sucked into that show. So good job. And I think there were some issues with that, right? That reunion streak.

**中文翻译:**
很棒的例子。说到直播内容，我想到了《盲婚试爱》（Love is Blind）。我想那是首映还是重聚特辑来着，我们都被那个节目吸引了。干得好。不过我记得当时出了一些问题，对吧？那个重聚特辑的直播。

---

### [00:18:24] Elizabeth Stone

**English:**
Well, yeah, that was about a little less than a year ago now. So the amazing thing about failure is you learn a lot. We learned a lot. We've taken notes on it and we had a couple successful events after that, including the Netflix Cup last October. And we've got some exciting events coming up. So I think that's something that strengthened us, but did reveal that we're tackling a hard problem.

**中文翻译:**
嗯，是的，那是大约不到一年前的事了。失败最奇妙的地方在于你能学到很多。我们学到了很多，做了记录，在那之后我们举办了几次成功的活动，包括去年 10 月的 Netflix 杯。我们还有一些令人兴奋的活动即将到来。所以我认为那件事让我们变得更强大了，但也确实揭示了我们正在解决一个难题。

---

### [00:18:50] Lenny

**English:**
Yeah, the Twitter feeds during that, Love is Blind premiere were hilarious. People are pissed.
(00:18:57):
Okay. And then in terms of the, keeping a high bar for yourself, I love that. I think about a quote that... There's a VC, Ann Miura-Ko, at Floodgate and she did this interview with Tim Ferris. She shared that her dad always asked her, "Are you doing a World-class job with this? Are you doing a world-class job with your homework? Are you doing a world-class job with your piano recital?" And that's the bar that he always had for her. And I feel like that's a really good way to think about work and life in general if you can.

**中文翻译:**
是的，当时《盲婚试爱》首映期间的 Twitter 动态太搞笑了，人们都气炸了。
(00:18:57):
好。关于为自己设定高标准，我很喜欢这一点。我想起了一句话……Floodgate 的风险投资人 Ann Miura-Ko 在接受 Tim Ferris 采访时分享过，她父亲总是问她：“你在这件事上做得是世界级的吗？你的作业做得是世界级的吗？你的钢琴演奏是世界级的吗？”那是他一直为她设定的标准。我觉得如果可以的话，这是思考工作和生活的绝佳方式。

---

### [00:19:28] Elizabeth Stone

**English:**
Yeah, my mother used to describe to me, probably still does, though it required more repeating when I was younger, that the last 5% is the 5% that really mattered. And so it is that framing of the extra effort you put into something to make it world-class or to make it excellent. And so I do like to push myself that way and I hope it sets a good example for other people too. It's very consistent with especially the company cultures that I tend to thrive in where that's the general expectation of the culture. So you don't feel like you're doing it alone, because then I think you can start to feel frustrated by that.

**中文翻译:**
是的，我母亲以前常对我描述——现在可能还在说，虽然我小时候需要她重复更多次——最后那 5% 才是真正起决定作用的 5%。这就是为了让某件事达到世界级或卓越水平而付出的额外努力。我确实喜欢这样鞭策自己，我也希望这能为他人树立榜样。这与我倾向于在其中发展的公司文化非常一致，因为那是文化的普遍预期。这样你就不会觉得是孤军奋战，否则我认为你可能会因此感到沮丧。

---

### [00:20:15] Lenny

**English:**
I know that this is a big part of Netflix culture and I want to get into it. But before that, I'm curious just what that looks like with people that report to you. How do you help them level up in this skill of having a really high bar? And an example I'll give as you think about maybe an example is the way I described this to my PMs was, you want to have this aura that you've got this that, "If you give Lenny something, he's got this. He's going to follow up, he's going to close the loop, he's going to get it done. If he can't get it done, he'll tell me, I feel like this thread will not disappear. He won't drop this ball." Is there anything that you've learned as a good way to help someone learn this kind of skill, understand why this is so important?

**中文翻译:**
我知道这是 Netflix 文化的重要组成部分，我想深入探讨一下。但在此之前，我很想知道这在你下属身上是如何体现的。你如何帮助他们提升这种“设定极高标准”的技能？当你思考例子时，我给你举个我自己的例子：我以前对我的产品经理（PM）是这样描述的，你要有一种“交给我没问题”的气场，即“如果你把某件事交给 Lenny，他能搞定。他会跟进，会闭环，会把它做完。如果他做不到，他会告诉我，我觉得这件事不会石沉大海，他不会掉链子。”你有没有学到什么好方法，能帮助别人习得这种技能，并理解为什么这如此重要？

---

### [00:20:53] Elizabeth Stone

**English:**
It shows up for the people who report to me, is one part example setting. So if I don't do it, why would they do it? I treat that very seriously that we should all be held to the same standards.
(00:21:12):
And as a second thing, I give feedback when it's not up to the standard. So I think one of the things I've observed especially with people on my teams is that the expectations aren't always clear and you can't assume that they're clear if you don't share them. When something's not meeting expectations or really showing up as excellence, I think it's a combination of both giving the feedback on that and being direct about it and being specific about what would it take to get this to the bar that I am expecting or to show up in the way that I'm expecting.
(00:21:55):
And then the third and probably most important thing is help them fill that gap. So that would mean... Let's take an example. It certainly has happened frequently in many jobs. A document is okay, it's not great, it's not going to be easy for people to follow, it's not as crisp as it could be. There's things that would strengthen it. I can both give the feedback on that to make sure like, yes, it's going to take another round of iteration, yes, we're going to have to work another week on this and not be done with it, but pushing people to get there, and then jumping into the document and helping.
(00:22:32):
So I feel very strongly about, and that's kind of what I mean by setting an example of like, "Let's work on this together," and then through that, help people uplevel themselves so the next time around they know the expectations and they've had help getting there in the past. So that's probably happened a thousand times in my career where I jump in with both feet because something needs to be better and I think the teams are better for it afterwards, or I hope they are.

**中文翻译:**
对于向我汇报的人来说，这体现在几个方面。第一是树立榜样。如果我不这样做，他们为什么要这样做？我非常认真地对待这一点，即我们都应该遵守相同的标准。
(00:21:12):
第二点是，当工作达不到标准时，我会提供反馈。我观察到的一点是，尤其是在我团队的人身上，预期并不总是清晰的，如果你不分享你的预期，你就不能假设它是清晰的。当某件事没有达到预期或没有表现出卓越时，我认为应该结合两点：一是提供反馈并保持直率，二是具体说明需要做什么才能达到我期望的标准，或者以我期望的方式呈现。
(00:21:55):
第三点，也是最重要的一点，是帮助他们填补差距。这意味着……举个例子，这在很多工作中都经常发生：一份文档还可以，但不够出色，不容易让人理解，不够精炼。有些东西可以加强它。我可以提供反馈，确保“是的，这需要再进行一轮迭代，是的，我们还得再花一周时间，不能就这样结束”，在推动人们达到目标的同时，亲自参与到文档中去提供帮助。
(00:22:32):
我对此深有感触，这就是我所说的树立榜样的意思，比如“让我们一起完成这个”，然后通过这个过程，帮助人们提升自己，这样下次他们就知道预期是什么，并且以前也得到过达到预期的帮助。在我的职业生涯中，这种情况可能发生过一千次，我全身心投入其中，因为某些东西需要变得更好，我认为团队之后会因此变得更好，或者我希望如此。

---

### [00:23:00] Lenny

**English:**
I think that's such a good framework just to kind of mirror back what you said, "Set expectations that the bar is going to be really high and here's what I'm expecting from you." Give them very specific feedback on where the gap is and then help them fill that gap. I think a lot of people may feel this and hear this and they're like, "Oh man, I don't want a manager that's like this high of an expectation person and it just feels really stressful." But I've had these managers and I feel like that's when I've learned the most and leveled up the most, is having someone that had really high expectations and then helped me understand, "Here's where you're not doing as well as you can. I know you can do better. Go back and work on this." I know that sounds annoying, but I think in practice it ends up helping you most in your career. I imagine you've seen a similar result.

**中文翻译:**
我觉得这是一个非常好的框架，就像你说的：“设定标准会非常高的预期，并告诉他们我的期望。”给他们非常具体的反馈，指出差距在哪里，然后帮助他们填补差距。我想很多人听到这里可能会觉得：“天哪，我可不想要一个期望值这么高的经理，这压力太大了。”但我曾有过这样的经理，我觉得那是我学到最多、提升最快的时候——有一个期望很高的人，然后他帮我理解：“这里你做得还不够好。我知道你能做得更好。回去再改改。”我知道这听起来很烦人，但我认为在实践中，这最终对你的职业生涯帮助最大。我想你也看到了类似的结果。

---

### [00:23:45] Elizabeth Stone

**English:**
I think so. I mean you'd have to ask some of the people on my team. So I might look at it differently that they look at it.

**中文翻译:**
我想是的。不过你得问问我团队里的人。我看到的可能和他们看到的不一样。

---

### [00:23:51] Lenny

**English:**
[inaudible 00:23:52] differences.

**中文翻译:**
（听不清）差异。

---

### [00:23:53] Elizabeth Stone

**English:**
It's a hard skill because it's not always easy to give feedback, especially if you feel like you know someone's put a lot of effort into something. And so I give a lot of thought to how I deliver that feedback so it feels like we're on the same team and I'm trying to help them be successful, not to help encourage failure. And that's where I think that third piece of the framework of jumping in to help can make people feel like, "I'm in a safe space. My manager wants me to be successful. My manager's helping me here." I do often do that behind the scenes. So maybe that's another flavor of this, which is, I don't do it live in the big meeting in front of all the people where the presentation doesn't go very well. I do it afterwards where it feels like a safer space to say, "Here's a way this could have gone better. Let's think about this differently next time." So it gives people a little grace and a little bit of an ability to absorb that feedback without feeling like it's kind of on a stage.

**中文翻译:**
这是一项很难的技能，因为提供反馈并不总是容易的，尤其是当你觉得某人已经付出了很多努力时。所以我花了很多心思去思考如何传达反馈，让对方觉得我们是在同一个团队，我是在努力帮助他们成功，而不是在助长失败。这就是我认为框架中第三部分——亲自参与提供帮助——的作用，它能让人们觉得：“我处于一个安全的环境中。我的经理希望我成功，我的经理正在帮我。”我经常在幕后这样做。所以这可能是另一种风格，即我不会在所有人都在场的大型会议上，当演示进行得不顺利时当众指出。我会在事后去做，在一个感觉更安全的地方说：“这里有一种可以做得更好的方式。下次让我们换个思路。”这样能给人们留一点体面，让他们有能力吸收反馈，而不会觉得像是在众目睽睽之下被审判。

---

### [00:25:02] Lenny

**English:**
Another thing someone may be feeling when they're hearing this is like, "Oh my god, it's going to take me so many hours to just get it to a place Elizabeth is happy with." And I know you said that this doesn't mean necessarily many hours. Do you have any advice or thoughts on just how to avoid burnout and working all the time, but also keeping this really high bar and high expectations?

**中文翻译:**
听了这些，人们可能还会有的另一种感觉是：“天哪，要达到伊丽莎白满意的程度，我得花多少个小时啊。”我知道你说过这不一定意味着要花很多时间。关于如何避免职业倦怠和无休止的工作，同时又能保持极高的标准和期望，你有什么建议或想法吗？

---

### [00:25:21] Elizabeth Stone

**English:**
It truly is not about time. I even found myself in a meeting earlier today saying, "If we're clear on the objectives of something, it might be that the last 20% of polish on the document is a really bad use of time. So if we're going to come together to talk through..." Like quarterly business review was the example, what were the highlights? What were the low lights? What were the learnings from the quarter? Where are there places of misalignment? The reason we're doing the quarterly business review is to have a really candid conversation about how we think things are going, to have a debate about things where maybe we're stuck. It's not to have a perfectly polished document for that conversation.
(00:26:08):
So my feedback in that instance would be, I would much rather have someone spend the time thinking about what's the conversation we really want to have? "How do I tee that up?" Not, "Could I spend another 20 hours to make it look like everything's perfect in this document?" And so I think in that sense it's not just excellence, like you wrote the perfect document, I should probably be careful to not use that as the only example, but instead we really got to the outcome we wanted to get to because we were thoughtful about it and we put a lot of energy and time and iteration into making sure we got to that outcome.

**中文翻译:**
这真的与时间无关。我今天早些时候甚至在一次会议上说：“如果我们对某件事的目标很明确，那么文档最后 20% 的润色可能是在浪费时间。如果我们聚在一起讨论……”以季度业务回顾（QBR）为例，亮点是什么？不足是什么？本季度的收获是什么？哪里存在分歧？我们进行季度业务回顾的原因是就现状进行坦诚的对话，对我们可能卡住的地方进行辩论。而不是为了那次谈话准备一份完美润色的文档。
(00:26:08):
所以在那种情况下，我的反馈会是：我宁愿有人花时间思考“我们真正想进行的对话是什么？我该如何引导？”而不是“我能不能再花 20 个小时让这份文档看起来完美无缺？”所以我认为，从这个意义上说，卓越不仅仅是写出一份完美的文档——我应该小心，不要把它作为唯一的例子——而是因为我们深思熟虑，投入了大量的精力、时间和迭代，确保我们真正达到了想要的结果。

---

### [00:26:43] Lenny

**English:**
And is this an example where you gave someone feedback that they spent too much time on the polish or is this earlier? And to give the pyramid of this framework you kind of shared of set expectations, give specific feedback, help them fill the gap and then do it in private, is this the expectation setting in this example or is this feedback you spend too much time on this?

**中文翻译:**
这是一个你给别人反馈说他们在润色上花了太多时间的例子，还是更早阶段的沟通？按照你分享的那个框架金字塔：设定预期、给出具体反馈、帮助填补差距、私下进行，在这个例子中，这是属于“设定预期”，还是“你在这上面花太多时间了”的反馈？

---

### [00:27:01] Elizabeth Stone

**English:**
This is expectation setting. So one of the things in my new role is that there's some practices that the team has had where they're trying to understand, Are we still going to have those practices? What's going to be the same versus different about those things?" and get an understanding of my expectations. So it's great that people ask that question so that I can be clear about, "Oh wait, if you're on the last 20% of this polishing the dock, I'd rather spend time over here. And here's how I would like the conversation to go so we all get something out of it instead of it feeling like it's just a leadership reviewer on my behalf." So in this specific situation, it was setting expectations ahead of time so that we can set everyone up for success.

**中文翻译:**
这是设定预期。在我担任新角色后，团队过去有一些习惯做法，他们想了解：“我们还会保留这些做法吗？哪些会保持不变，哪些会有所不同？”并了解我的预期。所以大家问这个问题很好，这样我就可以明确：“哦等等，如果你在做文档最后 20% 的润色，我宁愿把时间花在别处。我希望对话这样进行，这样我们都能有所收获，而不是感觉这只是代表我进行的领导层审查。”所以在这种特定情况下，是提前设定预期，以便让每个人都能成功。

---

### [00:27:44] Lenny

**English:**
Awesome. Okay. So we've kind of been talking around this, but this is an important part of the Netflix culture. Just broadly, Netflix has a really special and unique culture. Even though it's been around for I think over 25 years now, it feels like the culture has come up many times. There's that initial culture deck that came out that blew everyone's minds. There's a recent book, No Rules Rules I think it's called. And it feels like Netflix has done a great job at maintaining its culture.
(00:28:10):
It feels to me there's these three important elements, and maybe there's more. One is very high talent density and a focus on high performers. Two is candor and being really direct. And then three is giving people freedom and responsibility and getting rid of useless processes like vacation time and things like that. So maybe just to dive into that first one of high talent density and this focus on high performance. I guess the question there is just like, what does this look like in Netflix? And I imagine part of it is hiring, part of it is performance reviews. And then just why is it so important? Why is this such a focus on Netflix? What happens when you have such a high talent density?

**中文翻译:**
太棒了。好，我们一直在围绕这个话题转，但这是 Netflix 文化的重要组成部分。总的来说，Netflix 有一种非常特别且独特的文化。尽管它已经存在了 25 年多，但这种文化似乎被多次提及。最初那份让所有人大开眼界的文化 PPT（Culture Deck），还有最近那本叫《不拘一格》（No Rules Rules）的书。感觉 Netflix 在维持其文化方面做得非常好。
(00:28:10):
在我看来，有三个重要的元素，也许还有更多。一是极高的人才密度和对高绩效者的关注。二是坦诚和直接。三是赋予人们自由与责任，并取消休假时间之类的无用流程。那么，让我们先深入探讨第一点：高人才密度和对高绩效的关注。我想问的是，这在 Netflix 具体是什么样的？我猜一部分是招聘，一部分是绩效评估。为什么这如此重要？为什么 Netflix 如此关注这一点？当你拥有如此高的人才密度时会发生什么？

---

### [00:28:51] Elizabeth Stone

**English:**
It's just so intrinsic to who Netflix is as a company. And in some ways, it's very reflective of Reed Hastings as founder of Netflix. So when he founded Netflix and grew the company over time, it was with a belief that there could be a different approach to building a company that would make it a place that people thrived in and loved being and would feel different than other places, both in the quality of that talent density, but even more importantly, the excellence and the outcomes and that that's where people would derive a lot of sense of fulfillment. So it is very deeply seated at Netflix from its original days.
(00:29:37):
A big piece of that talent density is definitely hiring. So who are the people coming in and joining the team? But a lot of it is, we can't really have any of the other aspects of the culture, including candor, learning, seeking excellence and improvement, freedom and responsibility if you don't start with high talent density.
(00:30:03):
And so in some ways it's not the end, it's the means to the end in what Reed and the rest of the leadership team has been trying to build. And so in order to do that, you have to really hold yourself to a lot of stuff that doesn't feel like natural human behavior. What I mean by that is giving the feedback, this gets into the second bucket. So giving feedback, being candid around your expectations when they're not being met, what could be better in helping people improve, and be able to receive that type of feedback yourself in order to keep talent density high? Because no one comes to Netflix as a perfect human being and stays a perfect human being the whole time. We all have ways that we could grow and improve. And so in order to keep that bar high, you have to be willing to have those types of very uncomfortable conversations. It's an uncomfortable amount of candor and feedback in order to keep that bar high.
(00:31:10):
And then the other piece of it is another thing that doesn't come naturally to humans, which is making a call in pretty timely fashion if someone's not able to meet the bar, and to say either, "I don't think the role you're sitting in is the right role, or I don't think that Netflix is the right place for you," and to make that something that is part of best practice to get to a point where you could make that decision. And that's where we refer to the keepers test, which is really just a mental framing to make sure we hold ourselves accountable for this. Where if I'm asking myself the question, "If this person on my team came to me and said, 'I'm leaving today. I have a different opportunity and I would like to take it,' would I do everything I could to keep them at Netflix?" If not, then I should be having that tough conversation about, "Should you really be here? Are you in the right role?", if I might be a little bit relieved if you said you were leaving.
(00:32:20):
The reason the keeper test and that question is useful is because no one wants to think that way. It's very hard to say to someone, "I think this isn't the right fit. I think you should move on from the company." So we have to introduce some of those reflections in order to encourage the behavior. And we also then want to get to a place where when you're having that tough conversation, people aren't surprised by it. That is easier said than done. But you can only get to that conversation around, "I don't think Netflix and you are the right fit for one another" if you've been giving feedback along the way. And so it feels like in its most ideal state, it's a mutual observation. In practice, it's not always that smooth. Obviously we are humans. But that all feeds on itself in order to make sure that we're really holding ourselves to what we say our behavioral norms as part of the culture.

**中文翻译:**
这正是 Netflix 作为一家公司的本质所在。在某种程度上，它非常体现了创始人里德·哈斯廷斯的理念。当他创立 Netflix 并随时间发展公司时，他坚信可以有一种不同的方式来建立公司，让它成为一个人们能够蓬勃发展、热爱身处其中、并且感觉与众不同的地方。这种不同不仅体现在人才密度的质量上，更重要的是体现在卓越的成果上，他认为这才是人们获得巨大成就感的地方。因此，这种理念自 Netflix 创立之初就根深蒂固。
(00:29:37):
人才密度的很大一部分当然是招聘。即什么样的人进入并加入团队？但很大程度上，如果不从高人才密度开始，我们就无法真正拥有企业文化的其他方面，包括坦诚、学习、追求卓越和进步、自由与责任。
(00:30:03):
所以在某种程度上，它不是终点，而是里德和领导团队试图构建的目标的手段。为了做到这一点，你必须在很多方面严格要求自己，而这些要求往往并不符合人类的自然本能。我的意思是提供反馈，这涉及到了第二个范畴。为了保持高人才密度，你需要提供反馈，当预期未达到时保持坦诚，指出哪些方面可以改进以帮助人们提高，并且你自己也要能够接受这种反馈。因为没有人是以完美的人进入 Netflix 并一直保持完美的。我们都有成长和进步的空间。因此，为了保持高标准，你必须愿意进行那些非常不舒服的对话。为了保持高标准，需要达到一种“令人不适”的坦诚和反馈程度。
(00:31:10):
另一部分也是人类不擅长的事情，那就是如果有人无法达到标准，要及时做出决定，并说：“我认为你现在的职位不合适”，或者“我认为 Netflix 不适合你”。要让这种做法成为最佳实践的一部分，从而能够做出这样的决定。这就是我们所说的“留任测试”（Keeper Test），它实际上只是一种思维框架，以确保我们对此负责。我会问自己一个问题：“如果我团队中的这个人来找我说，‘我今天要离职了，我有了另一个机会，我想去试试’，我会竭尽全力挽留他留在 Netflix 吗？”如果答案是否定的，那么我就应该进行那次艰难的对话：“你真的应该留在这里吗？你的职位合适吗？”——如果听到你说要走，我反而感到一点解脱的话。
(00:32:20):
“留任测试”和那个问题之所以有用，是因为没有人愿意那样思考。对某人说“我觉得这不合适，我觉得你应该离开公司”是非常困难的。所以我们必须引入这些反思来鼓励这种行为。我们也希望达到这样一种状态：当你进行那次艰难的对话时，对方并不会感到意外。这说起来容易做起来难。但只有当你一路上都在提供反馈时，你才能进行“我认为 Netflix 和你不合适”这样的对话。所以，在最理想的状态下，这是一种双方共同的观察。在实践中，它并不总是那么顺利，毕竟我们是人类。但这一切都是相辅相成的，以确保我们真正遵守我们作为文化一部分的行为准则。

---

### [00:33:17] Lenny

**English:**
How is that operationalized? Is that just mental model that you should have in mind? Or is it like every quarter you should go through this exercise? Is it part of the performance review process? How does that actually operationalize at Netflix?

**中文翻译:**
这是如何操作化的？这只是你应该记在脑子里的思维模型吗？还是说每个季度你都应该进行一次这样的练习？它是绩效评估过程的一部分吗？在 Netflix 到底是如何运作的？

---

### [00:33:29] Elizabeth Stone

**English:**
It's definitely a mental model. So when we talk to managers about what does it mean to be a manager at Netflix, it would mean you should be with some frequency asking yourself this about the people on your team. People ask me frequently, "Am I passing your keeper test?" So it becomes part of a regular manager direct report, one on one. And it is just another way of saying, "Am I meeting your expectations? What's going well? What's not going well? How are you thinking about things?" And that can sometimes be a very awkward conversation to have. So in the middle of a lot of like, "We have to talk about this project or that deliverable or this thing that's happening," to take the time to step back and just say, "How am I doing?", can feel loaded sometimes. And the keeper test, while it feels like a very heavy concept, creates a lightness around being able to have that conversation regularly. So we do operationalize it. A point that you made, I'll just clarify, we don't have performance reviews.

**中文翻译:**
这绝对是一个思维模型。所以当我们和经理们谈论在 Netflix 当经理意味着什么时，这意味着你应该经常问自己关于团队成员的这个问题。经常有人问我：“我通过你的留任测试了吗？”所以它成了经理和下属之间定期 1 对 1 沟通的一部分。这只是另一种说法，意思是：“我达到你的预期了吗？哪些做得好？哪些做得不好？你是怎么想的？”这有时可能是一个非常尴尬的对话。在讨论“我们要谈谈这个项目、那个交付物或正在发生的这件事”的过程中，花时间退一步问一句“我表现得怎么样？”，有时会让人觉得压力很大。而“留任测试”虽然听起来是一个很沉重的概念，但它为定期进行这种对话创造了一种轻松感。所以我们确实在操作它。关于你提到的一点，我澄清一下：我们没有绩效评估（Performance Reviews）。

---

### [00:34:33] Lenny

**English:**
Oh, wow.

**中文翻译:**
噢，哇。

---

### [00:34:34] Elizabeth Stone

**English:**
So we don't have a practice that a lot of other companies do where we would think about reflecting on a rating of how things are going. We do have an annual cycle of 360 feedback where you request and receive feedback from a lot of people, but it's not an input to some output, it's just for the value of the feedback and to make sure we're keeping that muscle. And we have an annual compensation cycle where we reflect on how are people doing? And so you think about performance as part of both promotions and as part of compensation, but in that way it has to be part of the day-to-day and part of the operating rhythm because we don't create a process where that would come to the surface.

**中文翻译:**
所以我们没有像很多其他公司那样的做法，即反思并给出一个评分。我们确实有一个年度 360 度反馈周期，你会向很多人请求并接收反馈，但这并不是为了产生某种结果的输入，而仅仅是为了反馈本身的价值，并确保我们保持这种习惯。我们还有一个年度薪酬周期，我们会反思大家的表现。因此，你会将绩效作为晋升和薪酬的一部分来考虑，但通过这种方式，它必须成为日常生活和运营节奏的一部分，因为我们没有创建一个专门让绩效浮出水面的流程。

---

### [00:35:20] Lenny

**English:**
Interesting. I didn't know that. So the idea there is just ongoing, like the whole... So what many people dream of, no performance reviews, we'll give you ongoing real-time feedback. We don't have to wait six months. I feel like people talk about this but rarely do this, but that's how you guys operate.

**中文翻译:**
很有趣。我以前不知道。所以这里的理念就是持续的，就像很多人梦想的那样：没有绩效评估，我们会给你持续的实时反馈。我们不需要等六个月。我觉得人们常说这个，但很少有人真的这么做，但你们就是这样运作的。

---

### [00:35:36] Elizabeth Stone

**English:**
In ideal.

**中文翻译:**
在理想情况下。

---

### [00:35:37] Lenny

**English:**
In ideal, yeah.

**中文翻译:**
在理想情况下，是的。

---

### [00:35:38] Elizabeth Stone

**English:**
In practice. It's like you have to keep reminding yourself, "This is our ideal" because it's really easy to rely on the annual 360 cycle. And all of a sudden I do get about 300 pieces of feedback. And some of those things are on things that happened six months ago and I think, "Oh, I wish you had told me this at the time, that would've been more living the Netflix culture." So we have to push ourselves to do it that way. But yeah, that is if working well, it's very timely direct feedback. The 360 site goal is sort of the annual check-in on, "Let me get the full picture. Let me be able to distill some themes. Let me tee it up for a conversation with my manager." And then it does remove the sort of crutch of an every six month performance review or something like that.

**中文翻译:**
在实践中，你必须不断提醒自己：“这是我们的理想状态”，因为很容易就会依赖年度 360 度反馈周期。突然之间，我确实收到了大约 300 条反馈。其中有些是关于六个月前发生的事情，我会想：“噢，我真希望你当时就告诉我，那才更符合 Netflix 的文化。”所以我们必须强迫自己以这种方式行事。但是，是的，如果运作良好，它就是非常及时的直接反馈。360 度反馈的目标更像是年度检查：“让我了解全局。让我能够提炼出一些主题。让我为与经理的对话做好准备。”然后它确实移除了每六个月一次绩效评估之类的“拐杖”。

---

### [00:36:31] Lenny

**English:**
When you talked about this example of someone asking you often, "Am I meeting your keeper test?", it makes me feel like someone's just super nervous. They're like, "Am I passing your keeper test?" And it makes me feel like it could create a culture of just like a lot of stress and worry and this hunger games mentality of like, "I got to compete and worry and I might die or get fired any day." I'm guessing the solution to that is partly cultural. This is just the way we work. You don't need to stress all the time, but you may be let go if you're not meeting this keeper test. How do you avoid this just constant worry that you might be fired any day and that you may not be hitting the bar?

**中文翻译:**
当你谈到有人经常问你“我通过你的留任测试了吗？”这个例子时，我觉得那个人肯定超级紧张。这让我觉得可能会产生一种充满压力和担忧的文化，一种“饥饿游戏”的心态，比如“我必须竞争和担心，我可能随时会‘死’掉或被解雇”。我猜解决方案一部分在于文化：这就是我们的工作方式。你不需要一直感到压力，但如果你达不到留任测试的要求，你可能会被辞退。你如何避免这种“随时可能被解雇”以及“可能达不到标准”的持续担忧？

---

### [00:37:08] Elizabeth Stone

**English:**
In my personal experience, I have felt a lot more at ease by having these conversations than by not having them. So in many roles I've had, I haven't been sure how I was doing or things I could be doing better on, and I didn't quite know how to get that information. And that made me feel much more stressed or nervous or at risk than having it be part of the culture to have those conversations.
(00:37:45):
So the thing that I think can be nerve wracking, and I feel it myself, is the high bar for excellence at Netflix and if we're doing this while you're surrounded by amazing people. And that can feed a sense of, "Am I doing well enough compared to how everyone else is doing? I know the bar's high." For the most part, that can drive people and in a good way, but in some ways it makes people nervous. And that's where I think it's helpful to know we expect to have these conversations so you can just kind of let your shoulders relax a little bit of, "Yes, the expectations are high, but my manager says I'm doing a great job, or my manager says I'm not doing a great job, but they gave me concrete things that I could do better." And so I think knowing is better than not. And so in that sense, it's the culture combined with the conversations around performance I hope take a little bit of that stress out of it. But I've certainly heard it a lot that without that conversation, people can be nervous.

**中文翻译:**
就我个人经验而言，进行这些对话比不进行这些对话让我感到轻松得多。在我担任过的许多角色中，我不确定自己表现如何，或者哪些方面可以做得更好，我也不太清楚如何获取这些信息。这让我感到比把这些对话作为文化的一部分更加压力巨大、紧张或充满危机感。
(00:37:45):
我认为真正让人紧张的——我自己也有这种感觉——是 Netflix 对卓越的高标准，尤其是当你身边都是极其优秀的人时。这可能会滋生一种感觉：“和别人相比，我做得够好吗？我知道标准很高。”在大多数情况下，这能以一种好的方式驱动人们，但在某些方面也会让人紧张。这就是为什么我认为知道“我们预期会有这些对话”是有帮助的，这样你就可以稍微放松一下肩膀：“是的，预期很高，但我的经理说我做得很好，或者我的经理说我做得不够好，但他们给了我具体的改进建议。”所以我认为知道总比不知道好。从这个意义上说，文化结合关于绩效的对话，我希望能减轻一些压力。但我确实经常听到，如果没有这种对话，人们会感到紧张。

---

### [00:38:49] Lenny

**English:**
That's such a good point and such a good example that I feel like every company wants to have a high bar and have only high performers and keep the bar really high for every person they hire. I'm curious, I know this could be its own podcast and book, but just in terms of hiring people that are amazing and keeping this bar of excellence, is there anything you can point out that might be helpful to other companies hiring to help identify amazing people and make sure that bar stays high? One thing I know is you guys pay a top market for salary. I think that's one unique thing about Netflix, is we just pay people. So maybe that's an part of this answer, but just what advice do you have for people to keep a really high bar in their talent?

**中文翻译:**
这是一个很好的观点和例子。我觉得每家公司都想设定高标准，只招募高绩效人才，并对每个雇佣的人保持极高的要求。我很想知道——我知道这本身就可以做成一期播客或写成一本书——在招聘优秀人才并保持卓越标准方面，你有没有什么可以指出的、对其他公司招聘有帮助的建议，以帮助识别优秀人才并确保标准不降低？我知道的一点是，你们支付市场顶级的薪水。我认为这是 Netflix 的独特之处，就是给钱大方。所以这可能是答案的一部分，但对于如何保持人才的高标准，你还有什么建议？

---

### [00:39:33] Elizabeth Stone

**English:**
Yeah, I mean on the compensation point, we pay what we call personal top of market, meaning we want to be highly competitive in the pay, but we don't want pay to be like the golden handcuffs of Netflix sets market rather than paying people a strongly competitive compensation. So I think that that is important for attracting and retaining talent and has been a big part of the culture, but almost more importantly, we hope we don't have to rely on that to want people to want to be at Netflix or for us to be able to assess whether people are going to thrive at Netflix.
(00:40:20):
The way that I've thought about hiring with that context is we know we're going to offer you very highly competitive compensation, but are you going to come to Netflix and help us identify the right problems to solve or new ways to solve existing problems? And that's a different way of hiring than you might think about, especially at scale where you're saying, "Does this person have this skill, this skill, this skill? Check they're going to fit in this box and they're going to deliver this work that I need them to do." I'm being intentionally simplistic. I recognize a lot of people don't hire actually that way. But at Netflix we try really hard to say we're looking for the new perspective or the person who's actually going to make us stronger as a team. So thinking about additive skills, additive perspectives, people who are going to push our thinking on something. That tends to help us with thinking about talent density because you're constantly introducing people to the team who uplevel.
(00:41:25):
So then the questions you have to ask in an interview might be different because yes, we're trying to assess do you have the baseline skills to be successful here, but we're also looking for the things that make people exceptional or even stronger than the team we've got. And then you think about making the magical teams comprised of all those amazing minds and what can you get out of that. And that feels like more that the talent density and practice.

**中文翻译:**
是的，关于薪酬，我们支付的是我们所谓的“个人市场最高价”（Personal Top of Market），这意味着我们希望薪酬极具竞争力，但我们不希望薪酬变成 Netflix 设定的某种“金手铐”，而是支付具有强竞争力的报酬。我认为这对于吸引和留住人才非常重要，也是文化的重要组成部分。但更重要的是，我们希望不必仅仅依赖薪酬来吸引人们加入 Netflix，或者以此来评估人们是否能在 Netflix 蓬勃发展。
(00:40:20):
在这种背景下，我思考招聘的方式是：我们知道会为你提供极具竞争力的薪酬，但你是否会来到 Netflix 并帮助我们识别出正确的问题，或者找到解决现有问题的新方法？这与你可能想到的招聘方式不同，尤其是在大规模招聘时，你可能会说：“这个人有这项技能、那项技能吗？检查一下，他们是否符合这个框框，是否能完成我需要他们做的工作。”我这是故意简化了，我知道很多人实际上并不那样招聘。但在 Netflix，我们非常努力地寻找新的视角，或者那些真正能让我们团队变得更强大的人。所以我们会考虑“加法技能”（Additive Skills）、“加法视角”，以及那些能推动我们思考的人。这往往有助于我们提升人才密度，因为你不断地向团队引入能提升整体水平的人。
(00:41:25):
因此，你在面试中需要问的问题可能会有所不同，因为虽然我们要评估你是否具备在这里成功的基准技能，但我们也在寻找那些让人出类拔萃、甚至比我们现有团队更强的东西。然后你会考虑由所有这些奇思妙想组成的梦幻团队，以及你能从中得到什么。这感觉更像是实践中的人才密度。

---

### [00:41:50] Lenny

**English:**
Got it. So the advice there essentially is, don't look for someone just simply great. Look for someone that raises the bar for the whole team, brings in a whole new perspective.

**中文翻译:**
明白了。所以建议本质上是：不要只找一个优秀的人，要找一个能提高整个团队标准、带来全新视角的人。

---

### [00:41:58] Elizabeth Stone

**English:**
Yes. That's a great way to say it. Yeah, it's a good way to say it.

**中文翻译:**
是的。这种说法很棒。是的，总结得很好。

---

### [00:42:00] Lenny

**English:**
I think what's great about this idea of just maintaining excellence consistently is that the best people want to work with the best people. And as soon as there's one person that sucks and the company allows for that, it just brings everyone down because they know, "Hey, we can be okay. We'll stick or no one's going to do anything about it." And when you make it clear, we only want the best and only hire the best and only keep the best, it keeps the best there, right? I imagine that's part of the strategy.

**中文翻译:**
我认为这种持续保持卓越的理念最棒的地方在于，最优秀的人想和最优秀的人一起工作。一旦出现一个表现糟糕的人而公司又允许其存在，就会把所有人都拉下水，因为他们会觉得：“嘿，我们表现平平也可以，反正没人会管。”当你明确表示我们只要最好的、只招最好的、只留最好的时，就能留住那些最优秀的人，对吧？我猜这是战略的一部分。

---

### [00:42:29] Elizabeth Stone

**English:**
Yeah. It's definitely the goal. And I think understanding that having gaps in the team and people's skillsets or their behavior can be really toxic for other people on the team. So it's a cost.

**中文翻译:**
是的。这绝对是目标。而且我认为要意识到，团队中存在的技能差距或行为偏差对团队其他成员来说可能是非常有毒的。这是一种成本。

---

### [00:42:42] Lenny

**English:**
This episode is brought to you by Xplo, a game changer for customer facing analytics and data reporting. Are your users craving more dashboards, reports, and analytics within your product? Are you tired of trying to build it yourself? As a product leader, you probably have these requests on your roadmap, but the struggle to prioritize them is real.
(00:43:01):
Building analytics from scratch can be time-consuming, expensive, and a really challenging process. Enter Xplo. Xplo is a fully white labeled embedded analytics solution designed entirely with your user in mind. Getting started is easy. Xplo connects to any relational database or warehouse. And with its low-code functionality, you can build and style dashboards in minutes. Once you're ready, simply embed the dashboard or report into your application with a tiny code snippet. The best part? Your end users can use Xplo's AI features for their own report and dashboard generation, eliminating customer data requests for your support team. Build and embed a fully white labeled analytics experience in days. Try it for free at xplo.co/lenny. That's E-X-P-L-O.co/lenny.

**中文翻译:**
本期节目由 Xplo 赞助，它是面向客户的分析和数据报告领域的游戏规则改变者。你的用户是否渴望在你的产品中看到更多的仪表板、报告和分析？你是否厌倦了尝试自己构建这些功能？作为产品负责人，你的路线图中可能有很多此类请求，但优先排序确实很困难。
(00:43:01):
从头开始构建分析功能可能既耗时又昂贵，而且是一个极具挑战性的过程。Xplo 应运而生。Xplo 是一个完全白标（White Labeled）的嵌入式分析解决方案，完全以用户为中心设计。入门非常简单：Xplo 可以连接到任何关系型数据库或仓库。凭借其低代码功能，你可以在几分钟内构建并设计仪表板样式。准备就绪后，只需通过一小段代码片段将仪表板或报告嵌入到你的应用程序中即可。最棒的部分是？你的最终用户可以使用 Xplo 的 AI 功能生成自己的报告和仪表板，从而消除对支持团队的客户数据请求。在几天内构建并嵌入完全白标的分析体验。访问 xplo.co/lenny 即可免费试用。

---

### [00:43:54] Lenny

**English:**
So I asked on Twitter what questions to ask you. And there's a great question that came in from Nan Yu. He's the head of product for Linear and he asks, "What practices does Netflix do that other companies should not attempt to do because their talent level is so much higher than other companies?"

**中文翻译:**
我在 Twitter 上征集了要问你的问题。Nan Yu 提了一个非常棒的问题，他是 Linear 的产品负责人，他问：“Netflix 的哪些做法是其他公司不应该尝试模仿的，因为 Netflix 的人才水平比其他公司高得多？”

---

### [00:44:15] Elizabeth Stone

**English:**
That is freedom and responsibility in a nutshell. So let me explain that. It's a good question. It's kind of related to what I was saying earlier, that talent density is a prerequisite for a lot of the other ways we operate. So if we want to create a work environment where we are not prescriptive about how people solve problems or the scope of problems that they could tackle, assuming they're highly impactful for the business, and we don't have a lot of process around that work, so think about being able to make large innovations to our engineering systems or introducing new ways to think about metrics and experimentation, we get a lot of those things because we give people the freedom and the space to explore and question things and experiment in a way with solutions. I think that that would be very hard if not dangerous if we didn't have a high talent density.
(00:45:32):
It's really not a top down do A, then B, then C. Even in how we go through some of our planning processes or thinking about how we think about priorities, there is a lot of room for contribution across all levels of the team and that requires talent density. And then there's things like you have to have amazing people if you're not going to have really strict guardrails that would influence the consumer experience or business stakeholders experience. We do give people a lot of responsibility on those things. So I think the lack of process and prescriptiveness is all hinging on we've got amazing people who are smart, but even better have strong judgment.

**中文翻译:**
简而言之，就是“自由与责任”。让我解释一下。这是一个好问题。这与我之前说的有关，即人才密度是我们许多其他运作方式的前提。如果我们想创造一个工作环境，不对人们如何解决问题或他们可以处理的问题范围做规定（假设这些问题对业务有重大影响），并且在这些工作周围没有很多流程——比如对我们的工程系统进行重大创新，或者引入思考指标和实验的新方法——我们之所以能得到这些，是因为我们给了人们自由和空间去探索、质疑并尝试解决方案。我认为如果没有高人才密度，这即使不危险，也会非常困难。
(00:45:32):
这真的不是那种自上而下的“先做 A，再做 B，然后做 C”。即使在我们的规划过程或思考优先级的方式中，团队各级都有很大的贡献空间，而这需要人才密度。此外，如果你不打算设置严格的护栏来影响消费者体验或业务利益相关者的体验，你就必须拥有优秀的人才。我们在这些事情上赋予了人们很大的责任。所以我认为，缺乏流程和规定性完全取决于我们拥有一群聪明、且更重要的是拥有强大判断力的人才。

---

### [00:46:18] Lenny

**English:**
This is kind of what you always hear from people giving founders advice is, "Just hire amazing people, get out of their way and let them do their job," which is often not a successful experience. What are examples that either things that came out of this freedom, I don't know, products or features or ideas that came out of this or policies or processes you don't have that everyone else might have? So I know there's no vacation time, there's unlimited vacation time, I assume. Is that still a thing? Unlimited vacation time?

**中文翻译:**
这有点像人们给创始人的建议：“只管雇佣优秀的人，别挡他们的路，让他们做自己的工作”，但这往往不是一个成功的经验。有没有一些例子，是源于这种自由而产生的？比如产品、功能或想法，或者是你们没有但其他公司都有的政策或流程？我知道你们没有固定的休假时间，我猜是无限期休假？现在还是这样吗？无限期休假？

---

### [00:46:48] Elizabeth Stone

**English:**
Yeah.

**中文翻译:**
是的。

---

### [00:46:49] Lenny

**English:**
Okay, cool. All right, great. And I know performance reviews, you talked about that. So I guess in either direction, is there an example of something that came out of this freedom or some process that which surprised people that you don't have or a framework or system?

**中文翻译:**
好的，酷。太棒了。我知道绩效评估，你刚才谈到了。所以我猜，无论从哪个方向看，有没有什么例子是源于这种自由，或者是你们没有的某种流程、框架或系统让人们感到惊讶？

---

### [00:47:05] Elizabeth Stone

**English:**
We've been able to deliver... I'll speak to my own team around innovations in our content delivery network or innovations in encoding or innovations in discovery and personalization. We're not driven by some leader saying, "I think this is a priority." They were driven in many cases by individual contributors who had great ideas for innovation. So a lot of the stuff that Netflix has succeeded in, came from creating space for people on the team. So there's probably thousands of examples of product features and things like that that came out of creating this space. And right now, the trick is finding the sweet spot so that we can operate efficiently at this type of scale without snuffing out some of that, what was kind of the core beauty of the culture.

**中文翻译:**
我们已经能够交付……以我自己的团队为例，在内容分发网络（CDN）、编码创新或搜索与个性化创新方面。我们不是由某个领导说“我认为这是优先级”来驱动的。在许多情况下，它们是由具有伟大创新想法的个人贡献者（IC）驱动的。所以 Netflix 成功的很多东西都源于为团队成员创造空间。可能有成千上万个产品功能之类的例子是源于这种空间的创造。而现在，诀窍在于找到一个平衡点，使我们能够在这种规模下高效运作，同时又不扼杀文化中那些核心的美好特质。

---

### [00:47:55] Lenny

**English:**
Maybe a last question around just the culture. We talked about candor a bit. I'm just curious if there's an example that comes to mind of an example of candor that you recently saw or had to be the candid person that might be interesting to share where it's like, "Oh wow, that's what you mean when you say a culture of candor."

**中文翻译:**
关于文化最后一个问题。我们谈到了坦诚。我很好奇你脑海中是否有一个最近看到的、或者你不得不表现得坦诚的例子，分享出来可能会很有趣，让大家觉得：“噢哇，这就是你所说的坦诚文化的意思。”

---

### [00:48:15] Elizabeth Stone

**English:**
There's a couple things that come to mind. I am generally a transparent leader, meaning I share information freely and openly. It's part of the culture to context, not control, which means part of my job is to make sure that people have the context they need to do their jobs well. And in practice, that means I take notes in leadership meetings and I share those notes with the whole organization. And that is sometimes it includes candor around reflections on things that aren't going well or problems we need to solve. Sometimes it's just letting people know, "Here's what leadership's talking about so that they have a sense of what's top of mind." But it's a version of transparency that I feel strongly about, doesn't exist a lot of other places. I think it's a version of candor too in being able to share... I can't always share every detail of everything that we're talking about, but I do try to share things that probably push the boundary a little bit in the team, feeling like they understand what's happening across the company and what I'm thinking about.
(00:49:22):
And then there's a second example that comes to mind, which is, until two years ago, individual contributors didn't have levels at Netflix. So all engineers were just senior engineers, all data scientists were senior data scientists, and we did not have a leveling system. We introduced IC levels two years ago almost exactly. And it was a big, big, big shift because it was seen as something that was sort of sacred of it. A lot of people came to Netflix because we didn't have it. We didn't have process around promotions. This is probably part of why we never had performance reviews, because promotions really weren't at play. And it gave people a sense of freedom of not having to worry about that type of structure. But when you get to a scale of an organization, we needed some type of scaffolding to say, "We want to talk about how we compose teams. When do we need the person who has 30 years of experience? When do we want to have a new grad?" Because that's what the work requires. We didn't have a language for it.
(00:50:27):
So I introduced Levels a couple of years ago and we had quite a change rollercoaster is the only way I can describe how it went.

**中文翻译:**
我想到了几件事。我通常是一个透明的领导者，这意味着我自由、公开地分享信息。文化的一部分是“提供背景，而非控制”（Context, not Control），这意味着我工作的一部分是确保人们拥有做好工作所需的背景信息。在实践中，这意味着我会记录领导层会议的笔记，并与整个组织分享这些笔记。有时这包括对进展不顺利的事情或我们需要解决的问题的坦诚反思。有时只是让大家知道：“这是领导层正在讨论的内容，这样他们就能感觉到什么是重中之重。”这是一种我深有感触的透明度，在很多其他地方并不存在。我认为这也是一种坦诚，能够分享……我不能总是分享我们讨论的每一个细节，但我确实尝试分享一些可能会稍微突破边界的东西，让团队觉得他们了解公司正在发生的事情以及我在思考什么。
(00:49:22):
我想到的第二个例子是，直到两年前，Netflix 的个人贡献者（IC）还没有职级。所有的工程师都只是“高级工程师”，所有的数据科学家都是“高级数据科学家”，我们没有职级系统。我们几乎就在两年前引入了 IC 职级。这是一个非常、非常大的转变，因为这被视为某种神圣不可侵犯的东西。很多人来 Netflix 就是因为我们没有职级。我们没有关于晋升的流程。这可能也是我们从未有过绩效评估的部分原因，因为晋升真的不在考虑范围内。这给人们一种自由感，不必担心那种结构。但当组织达到一定规模时，我们需要某种脚手架来讨论：“我们想谈谈如何组建团队。我们什么时候需要一个有 30 年经验的人？我们什么时候想要一个应届生？”因为这是工作所要求的。我们当时没有这种语言来描述。
(00:50:27):
所以我在几年前引入了职级，我们经历了一场巨大的变革——“过山车”是描述那个过程的唯一方式。

---

### [00:50:38] Lenny

**English:**
That's a good phrase.

**中文翻译:**
这个词用得好。

---

### [00:50:40] Elizabeth Stone

**English:**
Yeah, it was sort of like being the tumble dry machine for a few months, and so really talking through it with the team. That's just context and backdrop. For an example of candor recently, which is, we had kind of a postmortem or a retro on how has it gone with IC levels. So it's kind like wells, not wells. And I would normally think in a lot of cultures it would be like, "Well, we got past that change. We're living that change." Don't reflect on it. Because that kind of opened some of that early debate. And I felt differently about it. I think it's a good example of being candid about, this was a big change for us. It hasn't all gone perfectly. There's a lot that we can do better in how we implement levels at Netflix. And I would rather share that information than pretend it's all gone swimmingly and we achieved every objective. So I think that I try to build examples like that because I do think that level of candor and reflection helps build the sense of community and trust across the team.

**中文翻译:**
是的，那几个月就像是在滚筒烘干机里一样，要和团队深入沟通。这只是背景。关于最近坦诚的一个例子是，我们对 IC 职级的实施情况进行了一次“复盘”或“回顾”。就像是分析哪些做得好，哪些做得不好。在很多文化中，人们通常会想：“好吧，我们已经度过了那个变革，我们正在适应它。”不要再去反思它了，因为那可能会重新引发早期的争论。但我有不同的看法。我认为这是一个坦诚的好例子：这对我们来说是一个巨大的变化，它并非完美无缺。在 Netflix 如何实施职级方面，我们还有很多可以做得更好的地方。我宁愿分享这些信息，也不愿假装一切进展顺利并实现了所有目标。我尝试树立这样的榜样，因为我认为这种程度的坦诚和反思有助于在整个团队中建立社区感和信任感。

---

### [00:51:44] Lenny

**English:**
That's an awesome example. Kind along the lines of that, but also this category of freedom and responsibility, something Netflix innovated long ago, and I'm curious if this is still a thing, is this idea of Chaos Monkeys, which essentially are a program that runs on your infrastructure that just kills random processes and things and just to see what breaks and make sure things are stable when things actually start falling apart. Is Chaos Monkeys... Was that what it's called? And then is that still a thing? Is there still some Chaos Monkeys running around the servers?

**中文翻译:**
这是一个很棒的例子。顺着这个思路，也属于“自由与责任”范畴，Netflix 很久以前创新了一样东西，我很想知道现在是否还在用，那就是“混沌猴子”（Chaos Monkeys）。它本质上是一个在你的基础设施上运行的程序，随机杀掉进程和东西，只是为了看看哪里会出故障，并确保当事情真的开始崩溃时系统是稳定的。是叫“混沌猴子”吗？现在还有吗？服务器里还有“混沌猴子”在乱跑吗？

---

### [00:52:19] Elizabeth Stone

**English:**
Not unbridled Chaos Monkeys. No.

**中文翻译:**
不是那种不受控制的“混沌猴子”了。没有。

---

### [00:52:22] Lenny

**English:**
Okay. Contains chaos and niche.

**中文翻译:**
好吧。受控的混沌。

---

### [00:52:24] Elizabeth Stone

**English:**
Bur no, we carry too much responsibility, speaking of freedom and responsibility for the member experience to inject pain, though we do do a lot of experiments to test resilience, and that does probably mean injecting things that we're not quite sure whether A is better than B. And so that happens across engineering systems really at scale. But it is not for pure chaos, it's for intentional learning and so we can avoid making bigger mistakes. And then as we go into new efforts like cloud games, we have a beta that's out now, Live would be another example. We do try to come up with intentionally low profile examples where we can test the bounds of our systems in a way that's unlikely to damage the member experience. But that's less randomness, more by design. And so we're doing that in a few places that feels mostly good engineering practice so we can understand when it's really showtime and we're going to really test our systems, will they be able to perform like we want them to.

**中文翻译:**
不，说到自由与责任，我们对会员体验承担了太多的责任，不能随便注入痛苦。虽然我们确实做了很多实验来测试韧性（Resilience），这可能意味着注入一些我们不确定 A 是否比 B 更好的东西。这在整个工程系统中是大规模进行的。但这并不是为了纯粹的混乱，而是为了有意识的学习，从而避免犯更大的错误。当我们进入云游戏（目前正在测试中）或直播等新领域时，我们会尝试设计一些低调的案例，在不太可能损害会员体验的情况下测试系统的边界。但这减少了随机性，更多是设计好的。我们在一些地方这样做，这感觉更像是良好的工程实践，这样我们就能明白，当真正进入“表演时间”并考验系统时，它们是否能如我们所愿地运行。

---

### [00:53:42] Lenny

**English:**
RIP Chaos Monkey.

**中文翻译:**
愿“混沌猴子”安息。

---

### [00:53:45] Elizabeth Stone

**English:**
Yeah.

**中文翻译:**
是的。

---

### [00:53:47] Lenny

**English:**
So kind along these lines of data, so data itself has always been at the heart of Netflix. My understanding is the way the data team and the insights team is structured has been one of the reasons Netflix has been so successful. And that's the team you led before you moved into this new role. Can you just talk about how these teams are structured and why this structure is so effective?

**中文翻译:**
顺着数据这个话题，数据本身一直是 Netflix 的核心。我的理解是，数据团队和洞察团队的架构方式是 Netflix 如此成功的原因之一。那是你在转入新职位之前领导的团队。你能谈谈这些团队是如何构架的，以及为什么这种架构如此有效吗？

---

### [00:54:14] Elizabeth Stone

**English:**
Yeah. I certainly like to think of it as being special. It's unusual. I can explain why. So the scale of company that Netflix now is very often data oriented teams are embedded in other parts of the business. So it could either be they're embedded in a business line like ads or games, or they are organized more functionally separating data engineers from data scientists, from analytics engineers, from consumer researchers. We've resisted that and kept a centralized team that is both functionally diverse. So across all those types of functions that I just described and works on nearly every area of the business from within the team. I sort of understand why a lot of companies move away from this because it really does require basically extraordinary partnership that we would have people working on data problems that don't report into the teams that are relying on them.
(00:55:30):
But the benefit we get is we get to think about our functional expertise. So are we really world's best data engineers, world's best data scientists? And how do we continue to be ever better from a functional and technical perspective? It gives people better career paths because there's more mobility across the teams. It feels like a team that has a functional expertise with a lot of different problems to solve. And so I think it enables more cross-pollination of ideas in a way.
(00:56:03):
It also allows us to be really objective. That is probably the most important thing, that our job is not to tell the story that someone wants to hear with the data or to solve the problem that someone thinks is most important. It's for us to have our own perspective about things. I think that that uplevels the whole organization because it means that we're able to be truth tellers or to be curious in a way that might not fit if we had a different organizational structure. We have to balance, that would be a good partner, deliver on the things we agreed were priorities, be flexible with how we're spending our time, but it gives us agency and responsibility beyond that. And I feel like the team takes that very seriously. So I've seen examples of that in how we bring data to a lot of spaces, including how we partner with engineering on data-related topics or how we partner with content that I'm not sure we would've gotten to if not for having that kernel that's sort of a center of excellence around it.

**中文翻译:**
是的。我当然喜欢认为它是特别的。它很不寻常，我可以解释原因。在 Netflix 现在的规模下，通常数据导向的团队会被嵌入到业务的其他部分。要么嵌入到广告或游戏等业务线中，要么按职能组织，将数据工程师、数据科学家、分析工程师和消费者研究人员分开。我们抵制了这种做法，保持了一个职能多样化的中心化团队。也就是说，涵盖了我刚才描述的所有职能，并从团队内部为几乎每个业务领域提供服务。我有点理解为什么很多公司不再采用这种模式，因为这确实需要非凡的合作伙伴关系——让处理数据问题的人不向依赖他们的团队汇报。
(00:55:30):
但我们获得的好处是，我们可以专注于我们的职能专业知识。比如，我们真的是世界上最好的数据工程师、最好的数据科学家吗？我们如何从职能和技术角度持续变得更好？它为人们提供了更好的职业路径，因为团队之间有更多的流动性。这感觉就像一个拥有专业职能知识、需要解决许多不同问题的团队。因此，我认为它在某种程度上促进了思想的“跨界交流”（Cross-pollination）。
(00:56:03):
它还允许我们保持真正的客观。这可能是最重要的一点：我们的工作不是用数据讲出别人想听的故事，也不是去解决别人认为最重要的问题。而是让我们对事物有自己的见解。我认为这提升了整个组织的水平，因为这意味着我们能够成为“真相的诉说者”，或者以一种如果采用不同组织结构可能就不适用的方式保持好奇心。我们必须平衡：做一个好的合作伙伴，交付我们商定的优先级任务，灵活安排时间，但除此之外，它还赋予了我们自主权和责任。我觉得团队非常认真地对待这一点。我在很多领域都看到了这种例子，包括我们如何就数据相关话题与工程部门合作，或者我们如何与内容部门合作。如果不拥有这样一个作为“卓越中心”的核心团队，我不确定我们是否能做到这些。

---

### [00:57:10] Lenny

**English:**
And it's Data and Insights, that was the team that you ran. Insights, is that describing user research or what does that have function actually?

**中文翻译:**
那是你之前领导的“数据与洞察”团队。这里的“洞察”（Insights）是指用户研究吗？这个职能具体是做什么的？

---

### [00:57:19] Elizabeth Stone

**English:**
So part of Data and Insights is a Consumer Insights team that includes a lot of different flavors of research really. So in some ways, consumer is even a misnomer because there's parts of the team that do internal research, for example, on tools and products for our studio productions. So that's more of a user research-oriented versus consumer. And then the parts of that team that are consumer-oriented do things all the way from content screenings to make titles the best version of themselves before they're on the service to more traditional UX research to think about how can we deliver the best title discovery experience or how can we think about things that improve accessibility? And then that team has a global remit. So there's also teams that are more local or regional expertise in understanding consumer needs and entertainment.
(00:57:12):
So Consumer Insights and a team, formerly known as still kind of known as a shorthand, data science and engineering, combined together to create data and insights probably about two years ago. That's another piece that's unusual. It becomes truly a full-stack data and research expertise. And so we could tackle a problem like, what's the right way to think about recommendations and how best to surface them in a way that combines attitudinal research, qualitative and quantitative with behavioral research on more of the data science, data engineering analytics side.

**中文翻译:**
“数据与洞察”团队的一部分是“消费者洞察”团队，它实际上包含了许多不同类型的研究。在某种程度上，“消费者”这个词甚至有点误导，因为团队的一部分负责内部研究，例如针对我们制片工具和产品的研究。所以那更偏向于用户研究而非消费者研究。而团队中面向消费者的部分，工作内容涵盖了从内容放映（在上线前让作品达到最佳状态）到更传统的用户体验（UX）研究，思考如何提供最佳的作品发现体验，或者如何提高易用性。此外，该团队具有全球职能，也有一些团队拥有理解当地或区域消费者娱乐需求的专业知识。
(00:57:12):
大约两年前，消费者洞察团队与以前被称为（现在仍被简称为）“数据科学与工程”的团队合并，组成了“数据与洞察”团队。这是另一个不寻常的地方。它变成了一个真正的全栈数据和研究专业团队。因此，我们可以处理像“思考推荐的正确方式以及如何最好地呈现它们”这样的问题，将定性和定量的态度研究与数据科学、数据工程分析方面的行为研究结合起来。

---

### [00:58:51] Lenny

**English:**
It's super cool because I think it's really rare that what people think of user research is within the data org. And I think that might be a solution to some of the backlash a lot of user research teams get where they're like, I don't know, what are you guys doing all this anecdotal evidence if it's under the same org. I feel like that leads to a lot more credibility and avoids this like, "Oh, data's telling me this thing. This user research team is telling me this thing. What should we do?"

**中文翻译:**
这超级酷，因为我认为人们通常认为的用户研究很少会放在数据部门内。我认为这可能是解决许多用户研究团队面临的负面反馈的一种方案——人们有时会质疑：“我不知道，你们搞这些轶事证据（Anecdotal Evidence）是在干什么？”如果它们在同一个部门下，我觉得这会带来更高的可信度，并避免出现“哦，数据告诉我这件事，而用户研究团队告诉我那件事，我们该听谁的？”这种困惑。

---

### [00:59:17] Elizabeth Stone

**English:**
Yeah, I mean, Consumer Insights is one of the newer teams for me; it wasn't in my background to lead a team like that and not in my individual training, but they are critical for making sure we keep a consumer orientation, a member orientation on things. I have loved to watch the teams collaborate on problems because we talk about it as a superpower internally in combining those skill sets. So I think the Consumer Insights team at Netflix has had a lot of credibility in a certain area of expertise and we took it to the next level by combining it with other functional expertise. So it's not required in every problem space. So we try not to overdo it and say we need to be collaborating everywhere because that just feels like the wrong expectation, but we try to make the most of it in spaces where we really benefit. So yeah, it's worked out really well.

**中文翻译:**
是的，消费者洞察团队对我来说是比较新的团队；领导这样的团队并不在我的背景或个人训练中，但他们对于确保我们保持以消费者为导向、以会员为导向至关重要。我非常喜欢观察团队如何协作解决问题，因为在内部，我们将这种技能组合称为一种“超能力”。我认为 Netflix 的消费者洞察团队在特定专业领域已经拥有很高的可信度，而我们通过将其与其他职能专业知识结合，将其提升到了一个新的水平。当然，并不是每个问题领域都需要这种结合。所以我们尽量不过度，不要求在每个地方都协作，因为那感觉是不切实际的预期，但我们尝试在真正受益的领域充分利用它。所以，是的，效果非常好。

---

### [01:00:12] Lenny

**English:**
Awesome. Okay. I want to ask two more questions before we get to our very exciting lightning around. And they're both skills that [inaudible 01:00:08] have told me you're very good at. One is that you are very intentional and thoughtful about staying close to individual teams and individuals within the company, even though you're higher and higher in the org. I'm curious how you do that, how you actually practice this skill of staying really close to teams at the bottom of the ladder and individuals that are working on things on the ground basically?

**中文翻译:**
太棒了。在进入令人兴奋的闪电轮环节之前，我还想问两个问题。这两个技能都是别人告诉我你非常擅长的。一是尽管你在组织中的职位越来越高，但你非常用心且周到地与公司内的各个团队和个人保持联系。我很想知道你是如何做到的，你如何练习这种与基层团队和一线工作人员保持紧密联系的技能？

---

### [01:00:45] Elizabeth Stone

**English:**
A lot of it is how I spend my time and fighting to preserve opportunities to connect with people. So examples would be, I still have biweekly office hours, people sign up for slots. It can feel a little like speed dating for 20 minute slots, but I get to meet a whole bunch of people and hear about work, hear what's top of mind. People book them out many months ahead and it's just an opportunity to stay in touch. And then I do Ask Me Anything sessions with teams of different sizes depending on how intimate we want it to feel, but truly anything is fair game as a way to get to know me as a person, for me to hear questions, to try to be candid about what I can answer or can't answer. And so those things have helped me maintain connection, but both of those examples are about making the time for it.
(01:01:50):
So what I have found as my role has changed is that it just wouldn't happen if I didn't make it a priority. And then through those types of sessions, I do think I become or I hope to become more approachable so people know, "You can send me a Slack message, you can send me an email. Like I mentioned earlier, I'm going to respond to you as quickly as I can because I want to hold myself to that bar." And so that builds a flow of communication between me and the team that I really value... I don't think I would want to do my job if I didn't have those points of connection, so that helps too.

**中文翻译:**
很大程度上取决于我如何分配时间，以及努力争取与人交流的机会。例如，我仍然保留着每两周一次的“办公时间”（Office Hours），大家可以预约时段。这感觉有点像 20 分钟一轮的“快速约会”，但我能见到很多人，听听他们的工作，了解他们最关心的事情。人们会提前好几个月预约，这只是一个保持联系的机会。此外，我还会根据亲密程度的需求，与不同规模的团队进行“有问必答”（AMA）环节。真的是任何问题都可以问，这是了解我这个人的方式，也让我能听到问题，并尝试坦诚地回答我能回答或不能回答的内容。这些事情帮助我保持联系，但这两个例子都关乎“挤出时间”。
(01:01:50):
我发现随着角色的变化，如果我不把它作为优先级，这种联系就不会发生。通过这些环节，我觉得自己变得——或者我希望变得——更加平易近人，这样大家就知道：“你可以给我发 Slack 消息，可以给我发邮件。就像我之前提到的，我会尽快回复你，因为我想达到那个标准。”这在我与团队之间建立了一种我非常看重的沟通流。如果没有这些连接点，我想我不会想做这份工作，所以这也有帮助。

---

### [01:02:24] Lenny

**English:**
And you also send that email to everyone after every leadership meeting, so they're like, "Oh yeah, Elizabeth."

**中文翻译:**
而且你每次领导层会议后都会给所有人发邮件，所以大家会觉得：“噢对，是伊丽莎白。”

---

### [01:02:28] Elizabeth Stone

**English:**
Yeah, they hear from me. Yeah.

**中文翻译:**
是的，他们能听到我的声音。

---

### [01:02:31] Lenny

**English:**
Kind of related to this, so we have a mutual friend, that's how we got connected. Ali Rao, she was a data scientist at Airbnb, now she's at Uber. She had a question that she wanted me to ask, and it's about how good you are at being present. So her question is something she's noticed about. "Something I've noticed about her is how 100% present she is no matter who she talks to. Do you have any advice for people to get better at this? Because it's so hard in the day of email and iPhones and Slack." Her questions like, "When does she respond to stuff if not sometimes in meetings?"

**中文翻译:**
与此相关，我们有一个共同的朋友，也是她把我们联系在一起的。Ali Rao，她曾是 Airbnb 的数据科学家，现在在 Uber。她有一个问题想让我问你，是关于你如何做到如此专注（Being Present）的。她的问题是：“我注意到她的一点是，无论和谁交谈，她都能做到 100% 的专注。对于如何在这方面做得更好，你有什么建议吗？因为在电子邮件、iPhone 和 Slack 充斥的时代，这太难了。”她的疑问是：“如果不在会议中抽空回复，她什么时候回复消息呢？”

---

### [01:03:05] Elizabeth Stone

**English:**
I actually think I'm the most present when I'm having conversations like this one. I do preserve a lot of time to have one-on-one conversations where I'm genuinely curious about how someone's doing, how I can help them, what they're excited about that's authentic. And so while my EA would probably cringe at saying I like to spend time doing a lot of those one-on-ones, it is relatively easier for me to say the human connection is part of what I enjoy about this. I think that that's true for a lot of people in what we get out of work and life, but I try to live that in those meetings. I'm probably not as good when we're talking about meetings of 30 people and I'm multitasking, so I'll admit to doing that for sure. But I think the one-on-one conversations I treat as being pretty sacred.
(01:04:09):
One of the things I've noticed that helps me continue to invest in that and maybe is helpful for other people is some of my greatest friends and connections, including people like Ali, are people I met along the way professionally. So I worked very closely with Ally's husband, Keith Henwood, at multiple places, both Analysis Group and at Lyft. And that means that it's created opportunities and it's been points of connection. And so you get back what you give basically.
(01:04:45):
There are people in my life who are part of my life because I worked with them or because I crossed paths. And I like to think that if I can make a positive mark on them, it'll come back and be at some point too. So I think to distill that is that I truly enjoy it. It's what I get out of especially work. And then it's my community. And that's served me really well over time. And so I have given people advice of, "This is a small community, think about what you're investing in other people because that will matter down the line for yourself too" and I try to live that myself.

**中文翻译:**
实际上，我觉得在进行像现在这样的对话时，我是最专注的。我确实保留了很多时间进行 1 对 1 的交谈，在交谈中我真诚地好奇对方过得怎么样，我能如何帮助他们，以及他们对什么感到兴奋。虽然我的行政助理（EA）听到我说喜欢花时间做这么多 1 对 1 可能会感到头疼，但对我来说，人与人之间的连接是我享受这份工作的一部分。我认为这对很多人来说都是如此，这是我们从工作和生活中获得的东西，我努力在这些会议中践行这一点。当会议有 30 个人而我在多任务处理时，我可能做得没那么好，我承认我确实会那样做。但我把 1 对 1 的谈话看得很神圣。
(01:04:09):
我注意到有一点能帮助我持续投入，也许对其他人也有帮助，那就是我一些最好的朋友和人脉（包括像 Ali 这样的人）都是我在职业生涯中结识的。我曾与 Ali 的丈夫 Keith Henwood 在 Analysis Group 和 Lyft 紧密共事。这意味着它创造了机会，成为了连接点。基本上，你付出什么就会得到什么。
(01:04:45):
我生命中的一些人之所以成为我生活的一部分，是因为我曾与他们共事或有过交集。我喜欢认为，如果我能给他们留下积极的印记，这种积极也会在某个时刻回馈给我。所以总结一下，我真的很享受这个过程。这是我从工作中获得的东西，也是我的社区。随着时间的推移，这对我非常有益。所以我给人们的建议是：“这是一个很小的圈子，想想你在别人身上投入了什么，因为这最终对你自己也很重要。”我也在努力践行这一点。

---

### [01:05:22] Lenny

**English:**
Yeah, that's such good advice. There's kind of two things that come to mind there. One is treat people the way you want to be treated. Someone once said that maybe. And I think you've come back to this a couple times, this idea of just pay attention to what gives you energy and that you're good at and just almost double down on that. Just make that more and more of a superpower.

**中文翻译:**
是的，这建议太棒了。我想到了两点。一是像你希望被对待那样对待别人，可能有人说过这话。而且我觉得你已经多次提到这一点，即关注那些能给你能量且你擅长的事情，然后加倍投入。让它越来越成为你的超能力。

---

### [01:05:41] Elizabeth Stone

**English:**
Yeah, that last part resonates. It's been a big part of my personal and professional practice to reflect on how I'm feeling, what I'm excited about, what I'm enjoying. I do think it helps me be more grounded, which maybe helps me be more present or helps me be a better manager or leader. That might be part of the secret sauce too, but it is part of my practice.

**中文翻译:**
是的，最后一部分引起了我的共鸣。反思自己的感受、兴奋点和乐趣，一直是我个人和职业实践的重要组成部分。我确实认为这有助于我更加脚踏实地，这也许能让我更加专注，或者帮助我成为更好的经理或领导者。这可能也是“秘诀”的一部分，但它确实是我实践的一部分。

---

### [01:06:11] Lenny

**English:**
I can't help but ask, is this an actual practice? Do you do this on a regular basis or is this just something you think about like, "I should reflect back"?

**中文翻译:**
我忍不住想问，这是一种实际的练习吗？你会定期这样做，还是只是偶尔想到“我应该反思一下”？

---

### [01:06:18] Elizabeth Stone

**English:**
I wish I was so advanced to say I meditate and I create all this structure. It's more that I think I mentioned maybe I'm an introvert, so I do spend some time alone. That's how I recharge. And early mornings, especially people who know me sometimes are horrified at the time of day I send emails, but early mornings are a quiet time for me where I do try to have a daily check-in of just how are things going, why am I feeling anxious, why am I feeling excited. And it's kind of a muscle you build. So while I don't write in a journal, I don't have a meditation practice, I do have a time of day when I try to keep it protected from other things so that I can think for a second.

**中文翻译:**
我希望我能高级到说我会冥想并建立了所有这些结构。更多的是，正如我提到的，我可能是一个内向的人，所以我确实会花时间独处，这是我充电的方式。清晨——尤其是认识我的人有时会被我发邮件的时间吓到——清晨对我来说是安静的时光，我会尝试进行每日自我检查：事情进展如何？我为什么感到焦虑？我为什么感到兴奋？这就像是你锻炼出来的肌肉。虽然我不写日记，也没有冥想习惯，但我确实每天有一段时间会尽量不受干扰，这样我就可以思考片刻。

---

### [01:07:05] Lenny

**English:**
What I think about there is Jeff Bezos has this approach in the morning. He just calls, he putters around. He has no meetings until I think 10:10 or something. He just wants to putter around, read the newspaper, see what's going on in email, which I'm trying to do. I really like that. That feels really good. I'm just going to putter around. I have no responsibilities in the morning.

**中文翻译:**
我想到了杰夫·贝佐斯（Jeff Bezos）早上的做法。他称之为“闲逛”（Puttering around）。他在 10 点 10 分左右之前不安排任何会议。他只想闲逛，读读报纸，看看邮件里发生了什么。我也在尝试这样做。我真的很喜欢那样，感觉非常好。我只是在闲逛，早上没有任何责任。

---

### [01:07:22] Elizabeth Stone

**English:**
I've never heard that. I'm going to adopt that language.

**中文翻译:**
我还没听说过这个说法。我要借用这个词。

---

### [01:07:27] Lenny

**English:**
I'm just puttering and puttering. Elizabeth, is there anything else you wanted to touch on or leave listeners with before we get to our very exciting lightning round?

**中文翻译:**
我只是在闲逛，闲逛。伊丽莎白，在进入我们非常精彩的闪电轮环节之前，你还有什么想补充或留给听众的吗？

---

### [01:07:38] Elizabeth Stone

**English:**
No, I'm ready for the exciting lightning round.

**中文翻译:**
没有，我准备好进入精彩的闪电轮了。

---

### [01:07:40] Lenny

**English:**
Well, with that, we've reached our very exciting lightning round. First question, what are two or three books that you've recommended most to other people?

**中文翻译:**
好，那么我们进入了非常精彩的闪电轮。第一个问题：你向别人推荐最多的两三本书是什么？

---

### [01:07:50] Elizabeth Stone

**English:**
It's probably a little recency bias, but I've been recommending What I Talk About When I Talk About Running by Murakami, which talks about introspection about the similarities between running and writing as sort of flow states and very meditative things. So I had read some of his fiction books and the autobiographical reflection on these types of either professions or hobbies I think is very insightful. So that's one. And then one of my longtime favorite books is A Fine Balance by Mistry. And that is just a great story of human complexity and challenge and relationships. So I'm drawn to both books and TV and film that are about humans.

**中文翻译:**
可能有一点“近因偏差”，但我最近一直在推荐村上春树的《当我谈跑步时我谈些什么》。书中谈到了对跑步和写作之间相似之处的反思，认为它们都是某种“心流”状态，是非常具有冥想色彩的事情。我读过他的一些小说，我觉得这种对职业或爱好的自传式反思非常有见地。这是第一本。另一本我长期以来最喜欢的书是罗辛顿·米斯特里（Mistry）的《微妙的平衡》（A Fine Balance）。那是一个关于人类复杂性、挑战和关系的伟大故事。我很容易被关于“人”的书籍、电视和电影所吸引。

---

### [01:08:43] Lenny

**English:**
Speaking of TV and film, this is maybe a high stakes question for someone that works in Netflix, do you have a favorite recent movie or TV show?

**中文翻译:**
说到电视和电影，对于在 Netflix 工作的人来说，这可能是一个风险很高的问题：你最近有最喜欢的电影或电视节目吗？

---

### [01:08:52] Elizabeth Stone

**English:**
I'm not going to name all Netflix. That feels too much like an advertisement. Film, Triangle of Sadness is phenomenal if you haven't seen it. And then I'll go Netflix for TV, Beef was I thought hysterical. I'm an Ali Wong fan, but also just a pretty unique storyline.

**中文翻译:**
我不会全说 Netflix 的作品，那感觉太像广告了。电影方面，《悲情三角》（Triangle of Sadness）非常出色，如果你还没看过的话。电视方面我选 Netflix 的，《怒呛人生》（Beef）我觉得非常滑稽。我是黄阿丽（Ali Wong）的粉丝，而且故事情节也非常独特。

---

### [01:09:18] Lenny

**English:**
And I think they just won a bunch of Emmys.

**中文翻译:**
我想他们刚拿了一堆艾美奖。

---

### [01:09:20] Elizabeth Stone

**English:**
They did.

**中文翻译:**
是的。

---

### [01:09:21] Lenny

**English:**
Amazing. Good picks. Next question. Do you have a favorite interview question that you like to ask candidates that you are interviewing?

**中文翻译:**
太棒了，选得好。下一个问题：在面试候选人时，你有没有最喜欢问的问题？

---

### [01:09:29] Elizabeth Stone

**English:**
High talent density. I'm usually looking for the person who would be better in my role than I am in my role. So I often ask people what would their priorities be, what would they do differently if they had my job.

**中文翻译:**
考虑到高人才密度，我通常在寻找那些在我的职位上能做得比我更好的人。所以我经常问人们：如果他们处于我的位置，他们的优先级会是什么，他们会做出哪些不同的尝试。

---

### [01:09:45] Lenny

**English:**
Next question, do you have a favorite product that you recently discovered that you really like?

**中文翻译:**
下一个问题：你最近有没有发现什么非常喜欢的、心头好的产品？

---

### [01:09:52] Elizabeth Stone

**English:**
So while I carry the CTO title, I live a pretty analog life. So my most recent product is a Fellow pour-over coffee maker, which is actually part of my morning ritual, which I'll now call puttering around, where I take great lengths in my coffee-making process because I find it calming. And then it's not a recent find, but I have to shout out that my Peloton is probably the favorite product I own.

**中文翻译:**
虽然我挂着 CTO 的头衔，但我过着相当“模拟”（Analog）的生活。我最近买的产品是一个 Fellow 手冲咖啡壶，它实际上是我早晨仪式的一部分——我现在称之为“闲逛”——我会花很长时间冲咖啡，因为我觉得这能让我平静。另外，虽然不是最近发现的，但我必须提一下，Peloton 动感单车可能是我拥有的最喜欢的产品。

---

### [01:10:22] Lenny

**English:**
The bike or the treadmill?

**中文翻译:**
是单车还是跑步机？

---

### [01:10:24] Elizabeth Stone

**English:**
Bike. I'm a recovering outdoor cyclist, so it's also kind of questionable if I can even admit to this, but that's why I would admit to I love the Peloton despite being ideally an outdoor cyclist.

**中文翻译:**
单车。我是一个正在恢复中的户外骑行者，所以承认这一点甚至有点让人怀疑，但这就是为什么我会承认我喜欢 Peloton，尽管理想情况下我更喜欢户外骑行。

---

### [01:10:39] Lenny

**English:**
I have questions about your cycling, but before that question, do you have a favorite life motto that you often come back to or share with friends or family that you find useful either in work or in life?

**中文翻译:**
关于你的骑行我还有问题，但在那之前，你有没有最喜欢的人生格言，是你经常想起或与亲友分享，且觉得在工作或生活中很有用的？

---

### [01:10:50] Elizabeth Stone

**English:**
My mom said something to me that has stuck with me. I don't know if I live it very well, but the phrase was, "Something good happens every day." And the reason she said it was because she was encouraging me to be more mindful about enjoying the small things in the day-to-day rather than letting myself get caught up in the busyness.

**中文翻译:**
我妈妈对我说过一句话，一直印在我的脑海里。我不知道我是否践行得很好，那句话是：“每天都有好事发生。”她之所以这么说，是因为她在鼓励我更加留心享受日常生活中的小事，而不是让自己陷入忙碌之中。

---

### [01:11:13] Lenny

**English:**
Beautiful. Final question. You're a big biker and triathlete. I am curious what that sport and time has given you in your career or in life. What benefits have you found from spending so much time and energy, running, biking, being an athlete?

**中文翻译:**
太美了。最后一个问题。你是一个资深的骑行者和铁人三项运动员。我很想知道这项运动和投入的时间给你的职业生涯或生活带来了什么。从投入这么多精力和时间去跑步、骑行、做一名运动员中，你获得了什么好处？

---

### [01:11:32] Elizabeth Stone

**English:**
Certainly by mental resilience. So while those sound like physical strength, I've found especially endurance sports are much more mental and how you go through the highs and lows and sustain and then coming back from challenge. So those sports have had their highs and lows and from the lows I've really learned how to recover and bounce back. So those feel like universally applicable skills.

**中文翻译:**
当然是心理韧性（Mental Resilience）。虽然这些听起来像是体力活，但我发现尤其是耐力运动，更多的是心理上的博弈，关乎你如何度过高潮和低谷、如何坚持，以及如何从挑战中恢复。这些运动也有起起落落，从低谷中我真正学会了如何恢复和反弹。我觉得这些是普遍适用的技能。

---

### [01:12:04] Lenny

**English:**
You have such an interesting mix of athleticism and then Netflix, what a good balance for life. This is going to give me permission to go watch Netflix recording this on Friday afternoon. Elizabeth, you're awesome. Thank you so much for being here. Two final questions. Where can folks find you online if they want to reach out and maybe follow up on things? And how can listeners be useful to you?

**中文翻译:**
你拥有如此有趣的运动能力和 Netflix 工作的结合，真是完美的生活平衡。这给了我周五下午录完节目去刷 Netflix 的理由。伊丽莎白，你太棒了。非常感谢你能来。最后两个问题：如果大家想联系你或跟进一些事情，可以在哪里找到你？听众们能为你做些什么？

---

### [01:12:24] Elizabeth Stone

**English:**
You can always find me on LinkedIn, so definitely reach out or ping me if you have questions or comments. I think the way the listeners can be useful to me is being maybe curious about how they can show up even better in their lives now that we've done this reflection on Netflix culture and how we show up for other people. I would like to ask listeners to pay that forward to people that they're working with and how they show up for them.

**中文翻译:**
你总是可以在 LinkedIn 上找到我，所以如果有问题或评论，尽管联系我。我认为听众能帮到我的方式是，既然我们已经对 Netflix 文化以及我们如何对待他人进行了反思，那么也许可以好奇一下如何在自己的生活中表现得更好。我想请听众们把这种精神传递给他们的同事，思考如何更好地为他人提供支持。

---

### [01:13:02] Lenny

**English:**
Amazing. I love that. If you end up doing this and you're listening, maybe leave a comment on YouTube or in Substack with something that you haven't covered about yourself. Elizabeth, thank you so much for being here.

**中文翻译:**
太棒了。我喜欢这个建议。如果你真的这么做了并且正在收听，也许可以在 YouTube 或 Substack 上留言，分享一些你还没提到的关于你自己的事情。伊丽莎白，非常感谢你能来。

---

### [01:13:16] Elizabeth Stone

**English:**
Thank you, Lenny. I hope you have a great weekend.

**中文翻译:**
谢谢你，Lenny。祝你周末愉快。

---

### [01:13:18] Lenny

**English:**
Same. Bye everyone.
(01:13:20):
Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
我也一样。大家再见。
(01:13:20):
非常感谢收听。如果你觉得这期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用上订阅本节目。此外，请考虑给我们评分或留下评论，这能极大地帮助其他听众发现本播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目见。