# Lauryn Isford - 双语对照

This is the complete bilingual transcript for Lenny's Podcast featuring Lauryn Isford.

---

### [00:00:00] Lauryn Isford

**English:**
An activation rate that falls in a lower percentage range, maybe for most companies five to 15%, is better than one that falls in a higher percentage range because it means that there's likely much higher correlation with long-term retention and you're really working hard to get most of your users to reach a state that they're not reaching today.

**中文翻译:**
激活率（Activation rate）处于较低的百分比范围（对大多数公司来说可能是 5% 到 15%）其实比处于较高范围要好。因为这意味着该指标可能与长期留存（long-term retention）有更强的相关性，而且你正在努力让大多数用户达到一个他们目前尚未达到的理想状态。

---

### [00:00:24] Lenny

**English:**
Welcome to Lenny's Podcast where I interview world-class product leaders and growth experts to help you get better at the craft of building and growing products. Today my guest is Lauryn Isford. Lauryn was most recently head of growth at Airtable. Before that, she was a product growth lead at Facebook, working on user growth, internet.org, and growth of Facebook at India. Before that, interestingly, she led growth for Blue Bottle's e-commerce business. In our conversation, we dive deep into Lauryn's favorite topic, onboarding, why it's one of the biggest and most undervalued growth levers, what she's learned about optimizing onboarding flow through her work redoing Airtable's onboarding flow, what she's seen work and common pitfalls around onboarding, plus a ton of advice around figuring out your activation metric. I could talk all day with Lauryn about growth, but we had to cut this off to keep this to a reasonable length. Enjoy my conversation with Lauryn Isford after a short word from our wonderful sponsors.

**中文翻译:**
欢迎来到 Lenny 的播客。在这里，我采访世界级的产品领导者和增长专家，帮助你提升构建和增长产品的能力。今天的嘉宾是 Lauryn Isford。Lauryn 最近担任 Airtable 的增长负责人。在此之前，她是 Facebook 的产品增长主管，负责用户增长、internet.org 以及 Facebook 在印度市场的增长。有趣的是，在那之前，她还领导过 Blue Bottle 咖啡电商业务的增长。在我们的对话中，我们将深入探讨 Lauryn 最喜欢的话题：新用户引导（Onboarding）。我们将讨论为什么它是最大且最被低估的增长杠杆之一，她在重新设计 Airtable 引导流程中学到的优化经验，她所见证的成功案例和常见陷阱，以及关于确定激活指标（activation metric）的大量建议。关于增长，我可以和 Lauryn 聊上一整天，但为了保持合理的时长，我们不得不有所取舍。在听完赞助商的简短介绍后，请欣赏我与 Lauryn Isford 的对话。

---

### [00:01:19] Lenny (Sponsor: public.com)

**English:**
This episode is brought to you by public.com, who want to tell you about their new treasury accounts which earn a 4.8% yield on your cash. That is higher than a high yield savings account while still being backed by the full faith and credit of the US government. Treasure yields are at a 15-year high, but buying US Treasuries is super complicated if you go to a bank or navigate an ancient government website, or at least that was the case. Now you can move your cash into US Treasuries with the flexibility of a bank account, you can access your cash whenever you want, even before your Treasury bills hit maturity. There are no hold periods, no settlement days, just a safe place to park your cash and earn a reliable yield. Public will automatically reinvest your Treasury bills at maturity so you don't have to do anything to continue growing your yield, and you can manage your treasuries alongside stocks, ETFs, crypto, and any alternative assets. Do all your investing in one place and earn 4.8%, a higher yield than a high yield savings account only with a Treasury account at public.com/lenny.

**中文翻译:**
本期节目由 public.com 赞助。他们想向你介绍全新的国债账户，现金收益率高达 4.8%。这比高收益储蓄账户还要高，同时还有美国政府的全面信誉担保。国债收益率正处于 15 年来的高点，但如果你去银行或浏览古老的政府网站，购买美国国债会非常复杂——至少以前是这样。现在，你可以像使用银行账户一样灵活地将现金转入美国国债，你可以随时提取现金，甚至在国债到期之前。没有持有期限制，没有结算日，只是一个存放现金并赚取可靠收益的安全场所。Public 会在国债到期时自动重新投资，因此你无需任何操作即可持续获得收益。你还可以将国债与股票、ETF、加密货币和任何替代资产一起管理。在 public.com/lenny 开设国债账户，一站式投资并赚取 4.8% 的收益，这比高收益储蓄账户还要划算。

---

### [00:02:24] Lenny (Sponsor: Miro)

**English:**
Today's episode is brought to you by Miro, an online visual whiteboard that's designed specifically for teams like yours and mine. I have a quick request, head on over to my board at miro.com/lenny and let me know which guest you'd love for me to have on in 2023, and while you're on the Miro board, feel free to play around with the tool. It's a great shared space to work closely with your colleagues to capture ideas, get feedback, and iterate quickly and easily on anything you're working on. For example, in Miro, you can build out your product strategy by brainstorming with sticky notes, comments, live reactions, voting tool, even an estimation app to scope out your team sprints. Your whole distributed team can come together around a wireframe and draw ideas with a pen tool or even put mocks right into the Miro board. And with one of Miro's ready-made template, you can go from discovery and research to product roadmap to customer journey flows, final mocks, you get the picture. Head on over to miro.com/lenny to leave your suggestions. That's M-I-R-O.com/lenny.

**中文翻译:**
今天的节目由 Miro 赞助。Miro 是一款专为你我这样的团队设计的在线视觉白板。我有一个小请求，请访问我在 miro.com/lenny 上的看板，告诉我你希望我在 2023 年邀请哪位嘉宾。当你访问 Miro 看板时，可以尽情体验这个工具。这是一个绝佳的共享空间，可以与同事紧密协作、捕捉创意、获取反馈，并对任何工作内容进行快速迭代。例如，在 Miro 中，你可以通过便签、评论、实时互动、投票工具，甚至是一个用于规划团队冲刺（sprints）的估算应用来构建你的产品策略。你的整个分布式团队可以围绕一个线框图聚集在一起，用画笔工具勾勒想法，甚至直接将原型图（mocks）放入 Miro 看板。利用 Miro 现成的模板，你可以完成从发现与研究到产品路线图、客户旅程图以及最终原型的全过程。请访问 miro.com/lenny 留下你的建议。

---

### [00:03:27] Lenny

**English:**
Lauryn, welcome to the podcast.

**中文翻译:**
Lauryn，欢迎来到播客。

---

### [00:03:28] Lauryn Isford

**English:**
Thank you. I'm so excited to be here.

**中文翻译:**
谢谢。我非常高兴能来到这里。

---

### [00:03:31] Lenny

**English:**
We've chatted a bunch over Slacks, like all these different Slacks we're in and Twitter and emails, but we've never actually chatted real time, and so I have a million questions that I want to ask you. So, thank you again for being here.

**中文翻译:**
我们在 Slack 频道、Twitter 和邮件里聊过很多次，但我们从未真正实时交流过。所以我有一大堆问题想问你。再次感谢你的到来。

---

### [00:03:42] Lauryn Isford

**English:**
We have never chatted real time, so everybody's getting the first conversation and I'm really looking forward to it.

**中文翻译:**
我们确实从未实时聊过，所以大家听到的是我们的第一次对话，我非常期待。

---

### [00:03:48] Lenny

**English:**
I know that you have this pretty spicy contrarian take on experimentation and that I think you believe people run experiments too often and maybe not everything should be an experiment. Can you talk about that?

**中文翻译:**
我知道你对“实验”（experimentation）有一个相当犀利且反传统的观点。我觉得你认为人们做实验太频繁了，也许并不是所有事情都应该通过实验来决定。你能谈谈这个吗？

---

### [00:04:00] Lauryn Isford

**English:**
Yes. So, experimentation is a really big part, growth culture, growth hacking culture, PLG culture, growth marketing culture, any kind of growth, at least in my sphere, and sometimes teams can be really, really dependent on experimentation when trying to grow a business. A great example of this would be consumer growth at scale. Think your classic big social company. I worked at one of them. I am a former employee of Meta back when it was called Facebook. When you're at scale trying to grow a social app, experimenting can feel second nature. It can feel like a necessary step in your product development process that you want to drive more signups or you want to drive better activation with new customers. So, you change some buttons, change a design, and A/B test it, and then see if numbers go up or down, and then make your ship decision based on it.
(00:04:56):
I find that there's generally two reasons why a grow team wants to experiment, and one of them is to understand more precisely the metric impact of what they're building and what they're putting in front of customers, and the other is risk mitigation where you're making so many big dramatic changes that there's some risk that while this could be really great for the business, it could also be really bad and it would be good to understand that before everybody's experiencing that in production. So, with that framework in mind, sometimes you don't need to experiment. Sometimes if the business, let's say activation, right, activation rates go up 6% versus 7%, that precision actually doesn't help all that much beyond being able to say in your performance review, "Hey, I increased activation by 7%." So, it also is expensive to have folks on the ground, be it engineers, analysts, product managers, spending time understanding the results of an experiment that could otherwise be spent on road mapping, on foundational analysis, on shipping things. So, experiments can be expensive.
(00:06:09):
So, with all that said, generally my advice is to experiment when you need to and to primarily see it as a risk mitigation tactic when you're making dramatic changes and to let the product development process do more work. So, spend more time with customers, be more rigorous in understanding precisely what problem you're solving, get mocks in front of people and see how they react, and hopefully have more conviction than you otherwise would when you ship something that it's okay if every customer sees it tomorrow and that the experiment doesn't actually matter as much.

**中文翻译:**
是的。实验是增长文化、增长黑客文化、PLG（产品驱动增长）文化、增长营销文化中非常重要的一部分——至少在我的领域是这样。有时团队在尝试业务增长时会过度依赖实验。一个典型的例子是大规模的消费级增长，比如那些大型社交公司。我曾在其中一家工作过，我是 Meta（当时还叫 Facebook）的前员工。当你试图扩大社交应用的规模时，做实验就像是本能。它看起来像是产品开发过程中必不可少的一步：你想增加注册量或提高新客户的激活率，于是你改动一些按钮、调整设计，然后进行 A/B 测试，观察数据上升还是下降，最后根据结果决定是否发布。

我发现增长团队想要做实验通常有两个原因：一是更精确地了解所构建内容对指标的影响；二是风险缓解（risk mitigation），当你进行重大改动时，虽然可能对业务大有裨益，但也存在风险，最好在全量上线前了解情况。基于这个框架，有时你并不需要实验。比如激活率，增长 6% 还是 7%，这种精确度除了让你在绩效评估时说“嘿，我把激活率提高了 7%”之外，其实没多大帮助。而且，让工程师、分析师、产品经理花时间去分析实验结果是很昂贵的，这些时间本可以花在规划路线图、基础分析或交付产品上。所以，实验是有成本的。

总而言之，我的建议是：在必要时才做实验，并主要将其视为重大改动时的风险缓解手段。让产品开发过程承担更多工作：多花时间与客户沟通，更严谨地理解你到底在解决什么问题，把原型展示给用户看他们的反应。希望你在发布产品时能比以往更有信心，即使明天所有客户都看到它也没关系，实验本身其实没那么重要。

---

### [00:06:44] Lenny

**English:**
It's so interesting hearing that from a head of growth person. Working at Airbnb for a long time, and you talked about this, there's so much value put into the amount your experiment moves the metric is so important to, like you said, your performance review, your team's status, your team's ability to show they were successful. People look at like, you drove this metric 14%, which oftentimes you add up from experiments you've ran. How do you work in a culture like that, or is it just in that culture you may as well run experiments because that's the only way you get credit for the work you do, or is there a way to just be like, "Wow, that is how we measure it, but it's still maybe not worth running everything as an experiment"? How do you kind of find that balance?

**中文翻译:**
从一位增长负责人口中听到这些真有意思。我在 Airbnb 工作了很长时间，正如你所说，公司非常看重实验对指标的推动程度，这关系到绩效评估、团队地位以及证明团队成功的能力。人们会看你把指标提升了 14%，而这通常是多次实验累加的结果。在那种文化中你如何工作？或者说，在那种文化里你是不是只能不停地做实验，因为那是获得认可的唯一途径？还是说有办法既承认这种衡量方式，又坚持“也许没必要把每件事都当成实验”？你如何找到这种平衡？

---

### [00:07:29] Lauryn Isford

**English:**
It feels to me like that is the default culture, especially as growth teams become organizations and as those organizations grow with companies into growth stage public company territory and beyond. However, I do think you can build a different culture, and the only way to escape the trap of experimenting everything is to have a very intentional culture about doing right by customers and doing the right thing for the business. A growth team or a growth org exists in service of improving the business and delivering results for the business, and whether or not you measure those precisely in an A/B test, you still shipped them or you didn't.
(00:08:09):
So, the rigor around your process was either there or it wasn't. This means though that there have to be other ways to motivate, reward, retain, and develop really good talent. So, a culture around the impact you had on customers as measured by qualitative feedback or as measured by deals that were closed or deals that weren't lost, or other kinds of indicators that you did the right thing for customers is important and there shouldn't be, especially in engineering within the world of growth, a culture around having to point to numbers to demonstrate your impact because if there is, then the team will biased experiments all the time, and that's not necessarily the right thing for the business. It's a very expensive cost.

**中文翻译:**
我觉得这确实是默认的文化，尤其是当增长团队演变成庞大的组织，并随着公司进入增长期、上市甚至更远阶段时。然而，我认为你可以建立一种不同的文化。逃离“万物皆实验”陷阱的唯一方法，是建立一种非常有意识的文化，即“为客户做正确的事”和“为业务做正确的事”。增长团队的存在是为了改进业务并交付成果，无论你是否通过 A/B 测试精确测量，你最终要么交付了产品，要么没有。

所以，你流程中的严谨性要么存在，要么不存在。这意味着必须有其他方式来激励、奖励、留住和培养优秀人才。例如，建立一种关注客户影响力的文化，通过定性反馈、成交订单量、未流失订单量或其他指标来衡量你是否为客户做了正确的事。尤其是在增长领域的工程团队中，不应该形成一种必须靠数字来证明影响力的文化。因为如果这样，团队就会时刻倾向于做实验，而这对业务来说未必是好事，成本非常高昂。

---

### [00:08:50] Lenny

**English:**
Wow. It's so wild hearing this from, again, a head of growth, someone that's so analytical like you. Is there an example of something you launched that maybe most people would've run an experiment and you decided not to for one of these reasons?

**中文翻译:**
哇。再次感叹，从你这样一位如此理性、分析能力极强的增长负责人嘴里听到这些，真是太不可思议了。有没有什么例子，是你发布了某个东西，而大多数人可能会选择做实验，但你出于上述原因决定不做的？

---

### [00:09:01] Lauryn Isford

**English:**
There is a feature, a product really, that Airtable offers called Airtable Forms. It's possible you've used it. I'm not sure if you have, but-

**中文翻译:**
Airtable 提供一个功能，或者说是一个产品，叫 Airtable Forms（表单）。你可能用过，我不确定，但是——

---

### [00:09:10] Lenny

**English:**
No, I don't think so, but I will go check it out.

**中文翻译:**
不，我觉得我没用过，但我会去看看。

---

### [00:09:12] Lauryn Isford

**English:**
You can check it out. There are some new features I'm about to tell you about, so maybe that will entice you.

**中文翻译:**
你可以去看看。我正要告诉你一些新功能，也许会吸引你。

---

### [00:09:16] Lenny

**English:**
There we go. Scoops.

**中文翻译:**
太好了，独家消息。

---

### [00:09:18] Lauryn Isford

**English:**
So, Airtable Forms is much like other forms products. You can create a form and then send it to anybody to submit. The people who submit your form don't need to be a user of Airtable.

**中文翻译:**
Airtable Forms 和其他表单产品很像。你可以创建一个表单，然后发送给任何人填写。填写表单的人不需要是 Airtable 的用户。

---

### [00:09:30] Lenny

**English:**
Oh yeah, I have used that. Okay. It's just like the turn an Airtable into a form. Yes, I've used it. Okay.

**中文翻译:**
噢，是的，我用过。就是把 Airtable 表格变成表单。是的，我用过。

---

### [00:09:35] Lauryn Isford

**English:**
Exactly. So, something we noticed is that there was a gap in feature parity for Airtable Forms where the submitter could not request a copy of their submission. So, I might send my T-shirt size to Lenny for a form around ordering swag for the company and then I might want to remember which T-shirt size that I ordered and get a copy of that in my email. We created that feature which as a result was gated on creating an account with Airtable, and we just turned it on and wanted to see what would happen because we knew from rigor of a wonderful product team doing robust customer analysis and also doing the data work that this is something that people wanted, that it was a feature that would bring value to customers, and that even if it didn't move certain metrics like a signup percentage, even if it might affect the mix shift of activation rate from folks who signed up, it would be net good for customers who were using forms and who were submitting them.
(00:10:35):
So, we did roll that one out without an A/B test. It did have a big enough impact on our signup metrics that we saw at top line and didn't need the A/B test to see what was happening. And we also were able to use attribution to make some analysis possible after we rolled it out so we could learn from what was happening to the base afterward.

**中文翻译:**
没错。我们注意到 Airtable Forms 在功能对等（feature parity）上有一个缺失：提交者无法索取他们提交内容的副本。比如，我填写了 Lenny 发来的公司礼品尺码表单，之后我可能想记住我订了什么尺码，并希望在邮件里收到一份副本。我们开发了这个功能，但前提是提交者需要创建一个 Airtable 账户。我们直接上线了这个功能，想看看会发生什么。因为我们知道，经过优秀产品团队严谨的客户分析和数据研究，这是用户想要的东西，是能带来价值的功能。即使它没有显著提升注册率等特定指标，或者影响了注册用户的激活率构成，但对于使用和提交表单的客户来说，它绝对是有益的。

所以，我们没有进行 A/B 测试就发布了。它对我们的注册指标产生了足够大的影响，我们在顶层数据中就能直接看到，不需要 A/B 测试。发布后，我们还利用归因分析（attribution）进行了后续研究，从而了解这一变动对用户群的影响。

---

### [00:11:15] Lenny

**English:**
Fascinating. That's a really good example, and I imagine that helps a lot when the head of growth is encouraging the team not to run as an experiment versus a PM on a subteam, like, "Nah, we don't need to run this as an experiment," because in that case you're already acknowledging that team, "You did a great job, look at this metric. Clearly this one moved. Clearly customers want it." So, to your point, basically this kind of stuff has to come top down probably for it to work well.

**中文翻译:**
太有意思了。这是一个很好的例子。我想，如果增长负责人鼓励团队不要做实验，效果会比某个子团队的 PM 说“不，我们不需要做实验”要好得多。因为在这种情况下，你已经认可了团队：“你们做得很好，看这个指标，显然它提升了，显然客户需要它。”所以正如你所说，这类事情基本上需要自上而下地推动才能取得好效果。

---

### [00:11:33] Lauryn Isford

**English:**
I think it does, and it also cannot be an excuse for rigor around building well and being precise in what customers need, but overall, if you can be a results-oriented organization that just wants to do the right thing and move with urgency, then in my opinion, that's the way that you can have the most impact.

**中文翻译:**
我认为确实如此。但这不能成为忽视严谨性、不认真打磨产品或不精准把握客户需求的借口。总的来说，如果你能建立一个以结果为导向、坚持做正确的事并保持紧迫感的组织，那么在我看来，这就是产生最大影响力的方法。

---

### [00:11:33] Lenny

**English:**
Cool. Okay. I didn't expect to spend that much time on that question, but there's so much there. That was really interesting. What I want to spend the bulk of our time on is onboarding. Something that I found myself, and I think you agree with a lot of this but I'll confirm, is that I've done a lot of research into the growth stories of the most successful startups, and what I find, one, is that retention ends up being the thing you got to crack. If you can't crack retention, nothing else matters. And then, two, more interestingly, onboarding ends up being one of the biggest levers to increasing retention which basically A then B equal C, onboarding ends up being one of the biggest areas of opportunity for growth teams both early on and late stage. And so, I guess the first question, would you agree with that general sentiment that onboarding is this huge opportunity and often undervalued?

**中文翻译:**
太棒了。我没指望在这个问题上花这么多时间，但内容确实很丰富。接下来我想把大部分时间花在“新用户引导”（Onboarding）上。我通过研究最成功的初创公司的增长故事发现了一些规律，我想你也会同意：第一，留存（retention）是核心，如果解决不了留存，其他一切都无济于事；第二，更有趣的是，引导流程往往是提高留存的最大杠杆之一。基本上 A 推导 B，B 推导 C，引导流程成了增长团队（无论是早期还是后期）最大的机会点。所以第一个问题是，你是否同意“引导流程是一个巨大且常被低估的机会”这一普遍观点？

---

### [00:12:22] Lauryn Isford

**English:**
Yes, I definitely agree. It depends of course on the shape of business. Not every business should prioritize onboarding first, but if you have some sort of self-serve element of your product, if someone can give your product a try, maybe you have a playground or a sandbox demo, if there's a premium element to your pricing scheme, if you maybe offer things totally for free and don't even have monetization yet, onboarding is that first really important choke point that from which downstream of onboarding so many important metrics and results flow for the business, from converting someone to a paid customer to closing a deal to growing, how many people in an organization are using your product. So, all that really comes back to onboarding and if you can get that right, lots of good things will follow.

**中文翻译:**
是的，我完全同意。当然，这取决于业务形态。并非每家公司都应优先考虑引导流程，但如果你的产品包含自助服务（self-serve）元素，如果用户可以试用产品（比如有沙盒演示），如果你的定价方案中有高级付费项，或者你目前完全免费甚至还没开始变现，那么引导流程就是第一个极其重要的关卡。从转化付费客户、达成交易到扩大组织内的使用人数，下游的所有重要指标和结果都源于此。所以，一切最终都回到了引导流程，如果你能把它做好，后续就会有很多好事发生。

---

### [00:13:13] Lenny

**English:**
Okay, great. I'm glad we agreed. I already know this, but you spent a lot of time on Airtable's onboarding flow.

**中文翻译:**
太好了，很高兴我们达成共识。我知道你在 Airtable 的引导流程上花了很多时间。

---

### [00:13:20] Lauryn Isford

**English:**
Yes.

**中文翻译:**
是的。

---

### [00:13:21] Lenny

**English:**
And so, I'm curious just to learn about what did you do over the time that you spent optimizing Airtable's onboarding experience, what kind of impact did you see through the work that you did there, and then just any big kind of general takeaways that either you think people should know or that you'll take with you to future opportunities around optimizing an onboarding experience?

**中文翻译:**
所以我很好奇，在你优化 Airtable 引导体验的过程中，你具体做了什么？你看到了什么样的影响？以及有哪些重大的通用经验，是你认为大家应该知道的，或者是你会带到未来工作中去的？

---

### [00:13:43] Lauryn Isford

**English:**
We could talk about onboarding all day. This is one of my favorite things to chat about recently. So, we did have a wonderful activation team rebuild Airtable's onboarding flow over the past 12 to 18 months. This included many projects, including several big ones. So, what you've probably experienced if you signed up for Airtable recently or what you might experience if you create a new account soon is we've built an immersive wizard that we called Guided Onboarding that helped guide you through setting up your first workflow on Airtable, and in doing that reduced the cognitive load of getting started, helped you make more progress faster, and created scaffolding that more than 90% of customers would benefit from to be able to get up and running on a product that's pretty complicated. That was the first piece.
(00:14:39):
We also then introduced some personalization to use case on top of that. So, instead of helping you build something generic, having you build something that's relevant to you. And then we also worked on ongoing education. So, once you're in a workflow, once you've built something, how do we help you level it up to go from beginner to intermediate to advanced? One funny anecdote about this is that we actually called that project The Mole, M-O-L-E, because the design pattern in product looks like a mole. It pops up from the bottom of the screen and gives you tips as you're exploring. So, those are some of the biggest changes we made. We did retire a bunch of our tooltips which were a big part of onboarding for a really long time. So, happy to chat more about that, and then also did a bunch of more incremental optimizations as well. In general, tried to take a portfolio approach to what we did.

**中文翻译:**
关于引导流程，我们可以聊上一整天，这是我最近最喜欢的话题之一。在过去的 12 到 18 个月里，我们有一个非常棒的激活团队重构了 Airtable 的引导流程。这包括许多项目，其中有几个大动作。如果你最近注册过 Airtable，或者即将创建新账户，你可能会体验到我们构建的一个沉浸式向导，我们称之为“引导式入职”（Guided Onboarding）。它会引导你完成在 Airtable 上的第一个工作流设置。通过这种方式，我们降低了上手的认知负荷（cognitive load），帮助用户更快地取得进展，并为超过 90% 的客户提供了受益的脚手架（scaffolding），让他们能在这个相当复杂的产品上快速跑起来。这是第一部分。

在此基础上，我们还引入了基于使用场景的个性化。与其帮你构建一个通用的东西，不如让你构建一个与你相关的。接着，我们还致力于“持续教育”。一旦你进入工作流并构建了东西，我们如何帮助你从初级进阶到中级、高级？关于这一点有个有趣的轶事，我们把那个项目叫做“鼹鼠”（The Mole），因为它的产品设计模式就像一只鼹鼠，从屏幕底部弹出并在你探索时提供提示。这些是我们做出的一些重大改变。我们还停用了一大堆工具提示（tooltips），它们在很长一段时间内曾是引导流程的重要组成部分。我很乐意多聊聊这个。此外，我们还做了一系列增量优化。总的来说，我们尝试用“组合拳”的方式来开展工作。

---

### [00:15:36] Lenny

**English:**
Cool. Okay. A few questions real quick. What were the three buckets real quick? So personalization, ongoing education, what was the first one?

**中文翻译:**
太酷了。快速问几个问题。那三个部分分别是什么？个性化、持续教育，第一个是什么？

---

### [00:15:38] Lauryn Isford

**English:**
The first one was guided onboarding.

**中文翻译:**
第一个是引导式入职（Guided Onboarding）。

---

### [00:15:46] Lenny

**English:**
What was the impact of this work, just to give people a sense of the kind of impact you can have on conversion and then whatever other metrics you looked at there?

**中文翻译:**
这项工作的成效如何？为了让大家对转化率或其他指标的影响有个概念。

---

### [00:15:53] Lauryn Isford

**English:**
We were working on activation for a few years before I arrived at Airtable. There was already an awesome activation team, hard at work. Overall, the investments we made in onboarding over about a six to eight month period that included the wizard, The Mole with ongoing education, and also some personalization together drove a 20% lift in activation rate for Airtable.

**中文翻译:**
在我加入 Airtable 之前，激活团队已经努力工作了好几年。总的来说，我们在大约 6 到 8 个月的时间里对引导流程进行的投资——包括向导、“鼹鼠”持续教育以及个性化——共同推动了 Airtable 激活率 20% 的提升。

---

### [00:16:20] Lenny

**English:**
Wow. That sounds quite impactful, especially at a company at that scale.

**中文翻译:**
哇。这影响相当大，尤其是对于这种规模的公司来说。

---

### [00:16:24] Lauryn Isford

**English:**
It's awesome. I would say celebrate any clear statistical significant improvement in activation rate. It's a big victory, and credit goes to the team that really spent many, many hours with customers and designing precisely to build something that could have that big of an impact. I think it speaks to the importance of really understanding what a user needs to be onboarded well, which is not the same as what your business wants the user to be onboarded to. So, delineating those and building carefully is really what made it successful.

**中文翻译:**
确实很棒。我想说，激活率任何明显的统计学显著提升都值得庆祝。这是一次巨大的胜利，功劳属于那个花大量时间与客户沟通、精准设计并打造出如此影响力产品的团队。我认为这说明了真正理解用户“需要什么引导”的重要性，这与业务“想让用户接受什么引导”是不一样的。区分这两者并精心构建，才是成功的关键。

---

### [00:17:05] Lenny

**English:**
Which of these three buckets would you say had the biggest impact? Because I want to kind of get a couple levels deeper to get to what exactly did you do that worked really well.

**中文翻译:**
这三个部分中，你认为哪一个影响最大？我想再深入了解一下，看看你们到底做了什么才取得了这么好的效果。

---

### [00:17:14] Lauryn Isford

**English:**
I would say that the guided onboarding wizard which is the immersive wizard that helps you figure out how to get started was the most impactful thing we did.

**中文翻译:**
我会说是“引导式入职向导”，也就是那个帮助你弄清楚如何开始的沉浸式向导，它是我们做的最有影响力的事情。

---

### [00:17:26] Lenny

**English:**
And it's interesting that you had tooltips and this feels like a tooltip-y thing. What is it conceptually? What's the simple way to think about the onboarding wizard versus a bunch of tooltips telling you like, "Hey, Lauryn, click here, next go here, and then check this thing out"?

**中文翻译:**
很有意思，你们以前用工具提示（tooltips），而这个向导听起来也像是一种提示类的东西。从概念上讲，它是什么？如何简单地理解“入职向导”与“一堆告诉你‘嘿，Lauryn，点这里，下一步去那里，然后看看这个’的工具提示”之间的区别？

---

### [00:17:26] Lauryn Isford

**English:**
Totally. Imagine being in a step-by-step guide where you are asked question, for example, pick which kind of project you're working on, pick what kinds of things you'd like to track for this project, and then as you select from beautiful, easy-to-click buttons that require very little work on your part, something is visualized for you on the right half of the screen. So, you can see your workflow visually come to light as you do the work on the left half of the screen, and all of this is done for you in a very guided and instructive way.

**中文翻译:**
完全不同。想象一下进入一个分步指南，它会问你问题，比如：选择你正在处理的项目类型，选择你想在这个项目中跟踪的内容。当你点击那些精美、易操作且几乎不需要费力的按钮时，屏幕右侧会实时呈现可视化效果。所以，当你在左侧操作时，你可以看到你的工作流在右侧逐渐成型。这一切都是以一种极具引导性和启发性的方式为你完成的。

---

### [00:18:18] Lenny

**English:**
Are there any generalized learnings from that experience of just how to do a great onboarding experience? It sounds like probably avoid tooltips, instead just kind of ask questions and show them progress as they're going through it in kind of like an immersive experience versus here's the product, check out all the cool features.

**中文翻译:**
从那次经历中，有没有关于如何打造出色引导体验的通用经验？听起来像是：尽量避免工具提示，而是通过提问并展示进度，让用户在沉浸式体验中前进，而不是直接把产品丢给他们说“看，这些功能多酷”。

---

### [00:18:18] Lauryn Isford

**English:**
I think there is something to be said for reducing reliance on tooltips, but I'm not sure I would go so far as to say the tooltip is dead, as much as I maybe would like to because there are too many of them out there. The reason for this is that I do believe Airtable's customers had a very specific need which was that the effort required to build basic scaffolding was too much and they needed more support, guardrails, bumpers to help them through that, and this kind of guided or immersive wizard was the best mechanism we could come up with to reduce that effort required and to make them feel more supported in their journey. I'm not sure that this pattern is one that works for every product. I think it's one that works well for a complicated product, where figuring out where to go next and how to get started is actually very challenging or has a high cognitive load.
(00:19:14):
So, I would keep that in mind, but in this case, it did work really well for us. I have seen some other products in the wild adopt similar patterns which gives me confidence that it is transferrable beyond Airtable and that there's probably something to it. That's definitely a big learning. I think one other big learning for us was that we had to meet users where they are. We have some awesome advanced features of really cool stuff you can do with Airtable, automations being a great example. However, users don't necessarily need to get that started on day one. They don't need to learn about the advanced stuff when they haven't even looked at a workflow before. So, we really worked hard to prioritize what the user actually needed and to consider what was necessary education versus what could be ongoing education and building it up.

**中文翻译:**
我认为减少对工具提示的依赖是有道理的，但我不敢说“工具提示已死”，尽管我很想这么说，因为现在到处都是工具提示。原因是，我确信 Airtable 的客户有一个非常具体的需求：构建基础架构所需的精力太多了，他们需要更多的支持、护栏和缓冲来帮助他们度过难关。这种引导式或沉浸式向导是我们能想到的减少精力消耗、让用户在旅程中感到更多支持的最佳机制。我不确定这种模式是否适用于所有产品。我认为它非常适合复杂的产品，因为在这些产品中，弄清楚下一步该做什么以及如何开始确实非常具有挑战性，认知负荷很高。

所以，我会记住这一点，但在我们的案例中，它确实效果很好。我也看到其他一些产品采用了类似的模式，这让我相信这种经验是可以从 Airtable 迁移出去的。这绝对是一个重大发现。另一个重大经验是，我们必须“在用户所在的地方与他们相遇”。Airtable 有很多非常酷的高级功能，比如自动化（automations）。然而，用户并不一定需要在第一天就开始使用这些。当他们连工作流都没看过时，不需要学习高级功能。所以，我们努力优先考虑用户的实际需求，区分什么是“必要教育”，什么是可以后续进行的“持续教育”。

---

### [00:20:06] Lenny

**English:**
Can you talk a bit more about what that was? What did you actually do to understand the type of user, and then what did you change for them? Because we actually did something like this at Airbnb, and it was a tiny bit successful for host onboarding but it wasn't anything big. And so, I'm curious what it is you specifically did. Did you ask them a few questions and then grouped them in a group and then changed the way the rest of the flow went, or, yeah, what'd you do there?

**中文翻译:**
你能再多谈谈吗？你具体是怎么了解用户类型的？然后你为他们改变了什么？因为我们在 Airbnb 也做过类似的事情，在房东引导方面取得了一点点成功，但并不显著。所以我很好奇你具体是怎么做的。是问几个问题然后分组，再改变后续流程吗？

---

### [00:20:31] Lauryn Isford

**English:**
Good question. So, at the very, very beginning, we sort of said new users broadly need help. Who are they? What do we know about them? How can we help them? We spoke to a bunch of customers and also watched them get started and looked for patterns in behavior and also clusters. So, someone who is familiar with databases, somewhat technical and prefers to and has experience in building things might have a different need from onboarding than someone who is exploring a tool that was recommended to them for a project minute. With that in mind, there were some clear segments of personas or buckets of users that we could split out to give different experiences. Now that said, when we rolled out the guided onboarding wizard, it was actually just one generic onboarding that was one-size-fits-all, and while escape patches are great, we felt like we could solve, as I think I referenced earlier, more than 90% of use cases or users needs with one generic onboarding to start and then we could personalize from there.
(00:21:34):
When we started to personalize, generally we found bucketing customers by their learning style and their building style was more effective than more classic segmentation, like do you work in marketing, do you work in product management, do you work in operation. The reason for this is that there are many different types of building or workflows that are possible in Airtable. Some are sophisticated for use at work, some are simple for use at work, some are somewhere in between and are for a hobby use case or a consulting use case. Knowing how someone would go about building was more effective than what do you actually want to see on the other side.
(00:22:19):
This means that something like a template which can give you an example of how to build a use case for project management can be helpful for inspiration but might not actually be the best way to teach you how to use a product like Airtable, when instead, we could learn that you're someone who needs more familiarity with databases to be able to get to the next level, or who might need a more visual learning experience instead of a more data-forward learning experience. So, we tried to segment the experience that way and found that that yielded better results on activation than some of the more traditional segments.

**中文翻译:**
好问题。在最开始，我们认为新用户普遍需要帮助。但他们是谁？我们对他们了解多少？如何帮助他们？我们访谈了大量客户，观察他们如何开始使用，并寻找行为模式和集群。例如，一个熟悉数据库、有一定技术背景且喜欢亲手构建东西的人，其引导需求与一个仅仅因为别人推荐而尝试工具的人是不同的。基于此，我们划分出了一些清晰的用户画像（personas）或用户群组，以提供不同的体验。不过，当我们最初推出引导向导时，它其实是一个通用的“一刀切”方案。虽然提供退出路径（escape patches）很好，但我们觉得先用一个通用引导解决 90% 以上的场景，然后再进行个性化。

当我们开始个性化时，我们发现根据用户的“学习风格”和“构建风格”进行分类，比传统的细分（如：你是做营销的、做产品管理的还是做运营的）更有效。原因在于 Airtable 可以实现多种不同类型的构建或工作流。有些是复杂的办公用途，有些是简单的办公用途，有些则是介于两者之间的业余爱好或咨询案例。了解一个人“如何构建”比了解他“想看到什么结果”更有效。

这意味着，像模板（template）这种展示项目管理案例的东西可能对激发灵感有用，但未必是教你使用 Airtable 的最佳方式。相反，如果我们知道你是一个需要更多数据库基础知识才能进阶的人，或者是一个需要视觉化学习体验而非数据导向学习体验的人，效果会更好。所以我们尝试按这种方式细分体验，发现这在激活率上的效果优于传统细分。

---

### [00:22:52] Lenny

**English:**
And how did you decide which segment that a user was in? Was it a question you asked them right at the beginning?

**中文翻译:**
那你怎么判断用户属于哪个细分群体呢？是在最开始问他们一个问题吗？

---

### [00:22:57] Lauryn Isford

**English:**
We had a really awesome research team that would do some surveys and conversations with customers away from our production experience and away from individual projects. So, we had a really robust read going in to the project of who these different personas were, different building types, different learning types. That said, we do also ask folks when they sign up some questions and depending on who you are or what we might think we know about you or want to know about you, we might ask you different questions and that's in service of helping you get started.
(00:23:27):
I had some big ideas for how we might bring this to life even further that might come to life in the future, such as if somebody's there to just help out, if they're may be a teammate rather than a builder, if they're just there to work with someone else because Lenny invited Lauryn to work on her table because he needed Lauryn to do something or update a sprint, whatever. Lauryn needs really different onboarding than Lenny. So, actually getting that data in the flow is really useful because then we can route customers to a fully different experience. It's amazing how much low-hanging fruit there is to personalize and segment that onboarding experience in so many products that are out there. You just need to be really detail-oriented and precise on who you're working with.

**中文翻译:**
我们有一个非常棒的研究团队，他们会在生产环境之外通过调研和访谈与客户交流。所以在项目开始前，我们就对这些不同的画像、构建类型和学习类型有了深入的了解。当然，我们在注册时也会问一些问题，根据你是谁，或者我们想了解你什么，我们会问不同的问题，这一切都是为了帮你快速上手。

我还有一些更宏大的想法，未来可能会实现。比如，如果某人只是来帮忙的，他可能只是个“队友”而不是“构建者”，他只是因为 Lenny 邀请 Lauryn 协作更新一个冲刺计划才进来的。Lauryn 需要的引导与 Lenny 完全不同。所以，在流程中获取这些数据非常有用，因为我们可以将客户引导至完全不同的体验。在很多产品中，个性化和细分引导流程其实有很多“低垂的果实”（low-hanging fruit）可以采摘。你只需要非常注重细节，并精准把握你的用户是谁。

---

### [00:24:11] Lenny

**English:**
You talked about this experience as activation, and so just digging a little bit further into that idea. One of the important kind of metrics, milestones you got to figure out when you're working on onboarding is what is an activated user, what's the activation milestone, what's the activation metric. I know you have some strong opinions and some really interesting insights into activation milestones based on your experience at Airtable. Can you chat a bit about that and just share what Airtable's activation metric ended up being?

**中文翻译:**
你把这种体验称为“激活”（activation），让我们深入探讨一下。在做引导流程时，必须确定的重要指标或里程碑之一就是：什么是“已激活用户”？激活里程碑是什么？激活指标是什么？我知道你根据在 Airtable 的经验，对激活里程碑有一些强烈的观点和有趣的见解。你能聊聊这个，并分享一下 Airtable 最终确定的激活指标是什么吗？

---

### [00:24:37] Lauryn Isford

**English:**
Yes. So, overall, every growth team needs a north star metric. It's so important to have singular focus on what the business results are that you are working to drive in your team. On our activation team, which as I mentioned focused on onboarding, though in theory there could be other ways that you want to focus on driving activation, we had one north star metric which was what we called our team activation metric. So, this representative, a team of people were activated on Airtable's product and using it in a way that suggested they would be long-term retained. For us, that was week four, multi-user, meaning in the fourth week, more than one person on that team is active and contributing to a workflow on Airtable.
(00:25:23):
This metric is something that our wonderful analytics team determined to be highly correlated with long-term retention. It's also a metric that holds a relatively high bar, so it requires a number of things to be true, that something of substance has been built, that people persist and continue to collaborate, that they're collaborating on a weekly cadence, and also holds a relatively high bar on exactly how they're contributing, meaning that the sum total of this is somewhat hard to achieve which means that we have a hard job and also a high bar as an activation team to achieve that for as many customers as possible.
(00:25:58):
In general, I think an activation rate that falls in a lower percentage range, maybe for most companies five to 15%, is better than one that falls in a higher percentage range because it means that there's likely much higher correlation with long-term retention and you're really working hard to get most of your users to reach a state that they're not reaching today.

**中文翻译:**
是的。总的来说，每个增长团队都需要一个“北极星指标”（north star metric）。专注于团队努力推动的业务结果至关重要。在我们的激活团队中（如前所述，我们专注于引导流程，尽管激活还有其他驱动方式），我们有一个北极星指标，我们称之为“团队激活指标”。它代表一个团队在 Airtable 产品上被激活，并且其使用方式预示着他们会长期留存。对我们来说，这个指标是“第四周多用户活跃”（week four, multi-user active），意味着在第四周，该团队中有一个以上的人在 Airtable 上活跃并为工作流做出贡献。

我们的分析团队确定该指标与长期留存高度相关。这也是一个门槛相对较高的指标，它要求满足几个条件：已经构建了实质性的内容、用户持续协作、保持每周的协作节奏，并且对贡献的具体方式也有较高要求。这意味着总的来说这个目标很难达成，也意味着我们激活团队的任务很艰巨，我们要努力让尽可能多的客户达到这个高标准。

通常，我认为激活率处于较低范围（比如 5% 到 15%）比处于高范围要好。因为这意味着该指标与长期留存的相关性可能更高，而且你是在真正努力让用户达到一个他们目前尚未达到的理想状态。

---

### [00:26:22] Lenny

**English:**
I really like that heuristic. So, the idea there is when you're picking an activation metric, you want it to be in the single digits potentially because you're saying that's more likely to be correlated with retention because retention's probably pretty low long term. Is that kind of the rough idea?

**中文翻译:**
我很喜欢这个启发式方法。所以你的意思是，在选择激活指标时，你可能希望它是个位数，因为你认为这更有可能与留存相关，毕竟长期留存率通常比较低。是这个意思吗？

---

### [00:26:38] Lauryn Isford

**English:**
That's a rough idea. Of course, the metric should be correlated with retention no matter what, but if 40% of your customers are still active at week four maybe with a metric that would be week four active rate, then only a fraction of those are still going to be active in month 12, in month 18, and month 24, and I would much prefer to pick a more specific, more precise metric that maybe only 5% of users reach, but know that those 5% of users will be with us for the long haul, and if we could get that 5% even to 6% or 7%, it would have huge downstream effects on long-term metrics for the business. So, that's why I would opt for a more specific metric.

**中文翻译:**
大致是这样。当然，无论如何指标都应该与留存相关。但如果 40% 的客户在第四周仍然活跃（假设指标只是简单的第四周活跃率），那么到第 12、18 或 24 个月时，可能只有一小部分人还活跃。我更倾向于选择一个更具体、更精准的指标，哪怕只有 5% 的用户能达到，但只要知道这 5% 的用户会长期陪伴我们，如果我们能把这 5% 提高到 6% 或 7%，就会对业务的长期指标产生巨大的下游效应。这就是为什么我选择更具体的指标。

---

### [00:27:22] Lenny

**English:**
Okay. So, this activation metric, week four multi-user active is a really interesting metric. Can you talk a bit about how you actually operationalize this and put this to work on your team to help people understand what to work on and make sure they're moving the right sorts of numbers?

**中文翻译:**
好的。这个“第四周多用户活跃”的激活指标确实很有趣。你能谈谈你具体是如何将其付诸实践的吗？你是如何让团队理解该做什么，并确保他们在推动正确的数字？

---

### [00:27:39] Lauryn Isford

**English:**
Totally. So, one of the first things that we did when me and my team started to revisit week four multi-user active right before we started to rebuild onboarding is break that metric down into all of its component. So, if you really think about what goes into that number, how many teams sign up as a team versus as an individual, how many of them make it to week four, how many of them have more than two people invited versus more than two people who've ever been active, versus more than two people who were active in the fourth week, maybe they have one person active in the fourth week, and then what does active mean, and what are the different kinds of behaviors that constitute contribution or being active. Doing that really detailed work on the metric helped us understand what levers we could pull to have a really big impact on activation overall.
(00:28:34):
Additionally, we actually started using more metrics. So, we didn't just use our activation rate metric week four multi-user active to make all of our decisions. We introduced a few more, and one of them with purely a retention metric for an individual. Are you week two retained? Are you week four retained? The other was what we called Build with a capital B, and this was roughly a sophistication score. So, for someone who's building something, have they reached sort of intermediate levels of use of Airtable? The reason why we added these metrics is we were building new mechanisms for onboarding that were helping users build more effectively and find more value in Airtable, but sometimes those treatments helped users become more sophisticated but didn't help them invite more teammates, or sometimes those new mechanisms made someone more interested in giving us a shot for a few more weeks, but what they built was actually not any more impressive than if they had done it on their own.
(00:29:38):
So, this group of metrics actually really set us free. It gave us those constraints where we could actually measure success in a few different ways and think about activation as being more complicated than just a single metric and celebrate anything we could do to help on a couple of dimensions. So, I know it's a little unconventional to have a few metrics that you work with, but we did find that that was really helpful when we were making big changes.

**中文翻译:**
当然。在开始重构引导流程之前，我和团队做的第一件事就是将“第四周多用户活跃”这个指标拆解成所有组成部分。如果你仔细思考这个数字背后的含义：有多少团队是以团队形式注册的，有多少是以个人形式注册的？其中有多少坚持到了第四周？有多少邀请了两个以上的人？有多少是两个以上的人曾经活跃过，而又有多少是两个以上的人在第四周仍然活跃？也许他们第四周只有一个人活跃。还有，“活跃”的定义是什么？哪些行为构成了“贡献”或“活跃”？对指标进行如此细致的拆解，帮助我们理解了可以拉动哪些杠杆来对整体激活产生重大影响。

此外，我们实际上开始使用更多的指标。我们不只靠“第四周多用户活跃”来做所有决定。我们引入了几个新指标，其中一个是纯粹针对个人的留存指标：你是否在第二周留存？第四周呢？另一个我们称之为“大写的 Build”（构建），这大致是一个“成熟度评分”。对于正在构建东西的用户，他们是否达到了 Airtable 的中级使用水平？我们增加这些指标的原因是，我们正在构建新的引导机制，帮助用户更有效地构建并发现价值。但有时这些手段让用户变得更专业了，却没能让他们邀请更多队友；或者有时这些机制让用户愿意多试用几周，但他们构建的东西其实并不比自己摸索时更出色。

所以，这组指标实际上解放了我们。它给了我们约束，让我们能从几个不同的维度衡量成功，将激活视为比单一指标更复杂的事情，并为我们在多个维度上取得的进展感到自豪。我知道同时使用多个指标有点不寻常，但我们发现这在进行重大变革时非常有帮助。

---

### [00:30:04] Lenny

**English:**
That is actually really interesting. So, it makes it feel like the core activation metric you talked about was more of an output metric and you kind of realized here's the things we could actually be moving directly. Is that roughly how you thought about it?

**中文翻译:**
这确实很有趣。听起来你提到的核心激活指标更像是一个“产出指标”（output metric），而你意识到还有一些可以直接推动的因素。大致是这样想的吗？

---

### [00:30:15] Lauryn Isford

**English:**
Exactly. It also helped us grapple with some of the tensions we felt which I know a lot of teams working on activation and onboarding feel, which is picking one metric doesn't paint the whole picture of what you're trying to achieve when you help a user onboard to your product and when you educate them about what's possible. So, in having sophistication and retention and an element of team use all as part of the fabric of how we talked about activation, it made us much more well-rounded as a team.

**中文翻译:**
没错。这还帮我们处理了一些紧张关系。我知道很多负责激活和引导的团队都有这种感觉：只选一个指标无法描绘出你引导用户、教育用户了解产品潜力的全貌。通过将成熟度、留存和团队使用元素都纳入我们讨论激活的体系中，我们的团队变得更加全面。

---

### [00:30:46] Lenny

**English:**
That connects a bit to, so we worked on this post together about how to choose an activation metric and you shared part of this story for that post, and there's a little bit of a debate amongst folks that contributed their opinion on how to decide an activation metric, where it's a debate between is it okay to have a workspace activation metric where it's like how many boards somebody creates, how many Airtables somebody has created versus a user action, like user has created 10 tables or user using it two times a week. I think you're on the side of workspace is maybe a more interesting metric for a collaboration tool, and it's interesting that you end up with both in the end which I think is kind of where folks landed. You probably look at how's the company using this tool and then per user, are they using it consistently. So, I guess the question is just what's your take on user specific activation metric versus workspace level activation metric?

**中文翻译:**
这让我想起我们一起写的那篇关于如何选择激活指标的文章。在投稿的人群中存在一些争论：是使用“工作区激活指标”（比如创建了多少个看板或表格）好，还是使用“用户行为指标”（比如用户创建了 10 个表格或每周使用两次）好？我觉得你倾向于认为对于协作工具来说，工作区指标更有趣。有趣的是，你最终两者都用了，这似乎也是大家的共识：既要看公司如何使用工具，也要看每个用户是否持续使用。所以，我想问你对“用户特定激活指标”与“工作区级别激活指标”的看法是什么？

---

### [00:31:39] Lauryn Isford

**English:**
I really like this question. I agree it is a great debate. I'm not sure there's a clear answer because it does depend on your product. In the case of Airtable, which is a product that has seat-based pricing and generally horizontal adoption, it totally makes sense to have a workspace activation measure because you want to understand in an account, in an organization how many folks are actually using a product and finding value. That can be different for tools that might look like Airtable but have different mechanisms for growth or different pricing or different vertical personas that tend to adopt it. So, I do think there is some variance. I do have a reaction to share with you that's a little spicy-
(00:32:19):
... is that it's important that growth teams are agile and this means that north stars, key metrics, focus metrics will change, and if you're working on the same metric forever, there's probably some inefficiency in actually chasing the biggest impact for the business. So, I would be open-minded about if a workspace or team or account activation metric is always the right thing to focus on. Team activation looks really healthy because your growth team did some really amazing work on it, maybe user retention is the right place to focus next year. Maybe it's more about conversion. Maybe it's more about some other signal for long-term retention, and I would be open to being dynamic and changing that metric over time. Stability in metric is great, it helps with momentum, it helps with building expertise, but sometimes we overfocus on picking the perfect north star metric and by the time you feel like you've found the perfect one, it's actually time to move on to something different and work on a different opportunity.

**中文翻译:**
我很喜欢这个问题。我同意这是一个精彩的辩论。我不确定是否有明确答案，因为这取决于你的产品。以 Airtable 为例，它采用按席位计费（seat-based pricing）且具有通用性（horizontal adoption），因此衡量工作区激活完全合理，因为你想了解在一个账户或组织中，有多少人真正在使用产品并发现价值。但对于那些看起来像 Airtable 但增长机制、定价或目标垂直画像不同的工具来说，情况可能不同。所以我认为确实存在差异。

不过，我有一个稍微有点“辛辣”的观点想分享：增长团队必须保持敏捷，这意味着北极星指标、关键指标和核心指标是会改变的。如果你永远只盯着同一个指标，那么在追求业务最大影响力方面可能存在低效。所以，对于“工作区、团队或账户激活指标是否永远是正确的关注点”，我持开放态度。如果团队激活看起来很健康，那是因为增长团队做得很好，也许明年该关注用户留存了，或者关注转化率，亦或是关注其他长期留存的信号。我倾向于保持动态，随着时间的推移更改指标。指标的稳定性固然好，有助于保持势头和积累专业知识，但有时我们过于纠结于寻找“完美”的北极星指标，等你好不容易找到了，其实已经到了该转向新机会的时候了。

---

### [00:33:24] Lenny (Sponsor: Eppo)

**English:**
This episode is brought to you by Eppo. Eppo is a next generation A/B testing platform built by Airbnb alums for modern growth teams. Companies like Netlify, Contentful, and Cameo rely on Eppo to power their experiments. Wherever you work, running experiments is increasingly essential, but there are no commercial tools that integrate with a modern grow team stack. This leads to wasted time building internal tools or trying to run your experiments through a clunky marketing tool. When I was at Airbnb, one of the things that I loved about our experimentation platform was being able to easily slice results by device, by country, and by user stage. Eppo does all that and more, delivering results quickly, avoiding annoying prolonged analytics cycles, and helping you easily get to the root cause of any issue you discover. Eppo lets you go beyond basic click-through metrics and then set you to north star metrics, like activation, retention, subscriptions, and payments, and Eppo supports test on the front end, the back end, email marketing, and even machine learning clients. Check out Eppo at geteppo.com, get E-P-P-O.com and 10x your experiment velocity.

**中文翻译:**
本期节目由 Eppo 赞助。Eppo 是由 Airbnb 校友为现代增长团队打造的下一代 A/B 测试平台。Netlify、Contentful 和 Cameo 等公司都依赖 Eppo 来驱动他们的实验。无论你在哪里工作，运行实验都变得越来越重要，但目前还没有能与现代增长团队技术栈集成的商业工具。这导致人们要么浪费时间构建内部工具，要么试图通过笨重的营销工具运行实验。当我在 Airbnb 时，我最喜欢我们的实验平台的一点就是能够轻松地按设备、国家和用户阶段对结果进行切片分析。Eppo 不仅能做到这些，还能快速交付结果，避免烦人的漫长分析周期，并帮你轻松找到问题的根源。Eppo 让你超越基础的点击率指标，设定激活、留存、订阅和支付等北极星指标。Eppo 支持前端、后端、邮件营销甚至机器学习客户端的测试。请访问 geteppo.com（G-E-T-E-P-P-O.com），让你的实验速度提升 10 倍。

---

### [00:34:34] Lenny

**English:**
Is there an example of that that comes to mind when you talk about being a little stuck on a metric? Is that something you went through at Airtable or anywhere else you worked?

**中文翻译:**
当你谈到“被某个指标困住”时，有没有想到什么例子？这是你在 Airtable 或其他地方经历过的事情吗？

---

### [00:34:43] Lauryn Isford

**English:**
I've gone through it plenty of times. We actually at the organizational level on the Airtable growth award changed our north star metric a couple times which is a big deal that manifests for several teams. Roughly the arc of that change for us was shifting from being a growth org focused on revenue to a growth organization focused on user growth and customer growth. This for us was a really important moment where we decided that it was most essential in our work to grow the business to bring millions more people onto the platform, using the product and finding value in the product, because we were taking a decade's long view that they could always become monetized or converted customers later, and there wasn't really a rush. We felt that focusing on revenue led us to make some decisions that were a bit more short-term oriented than would be ideal.
(00:35:39):
There's also a dynamic here where in the world of enterprise SaaS, the world of B2B SaaS, there's a new theme called product-led sales that's very hot right now, and this means that often in a PLG company there's some ideal end goal of handing off certain customers to have a sales conversation or to close an enterprise contract. In that case, you might actually prefer to delay revenue for months or quarters or years to manifest it later, and when that's the case, your growth team should be fully aligned in lockstep with sales and with go-to-market team and focusing on user growth is actually the right call. So, that's an example of a big pivot that we made, and in doing that, we felt more strategic clarity and were able to move faster.

**中文翻译:**
我经历过很多次。在 Airtable 增长部门的组织层面，我们实际上几次更改了北极星指标，这对多个团队来说都是大事。对我们来说，这种转变的大致轨迹是从一个“关注收入”的增长组织转变为一个“关注用户增长和客户增长”的组织。这是一个非常重要的时刻，我们决定业务增长最核心的任务是让数百万人进入平台、使用产品并发现价值。因为我们持有长达十年的愿景，认为他们以后总能变现或转化，没必要急于一时。我们觉得，过于关注收入会导致我们做出一些比理想情况更短视的决策。

此外，在企业级 SaaS 或 B2B SaaS 领域，现在有一个非常热门的主题叫“产品驱动销售”（product-led sales）。这意味着在 PLG 公司中，理想的终极目标往往是将某些客户移交给销售进行洽谈或签署企业合同。在这种情况下，你可能宁愿推迟几个月、几个季度甚至几年的收入，以便以后实现更大的爆发。如果是这样，增长团队应该与销售和进入市场（GTM）团队完全步调一致，而专注于用户增长才是正确的选择。这就是我们经历的一次重大转型，通过这样做，我们的战略更加清晰，行动也更加迅速。

---

### [00:36:25] Lenny

**English:**
That is an awesome story. How long did that process take and any advice for folks that might be going through a similar journey of maybe we should rethink our north star metric not and not be revenue? Any advice there?

**中文翻译:**
这个故事太棒了。这个过程花了多长时间？对于那些可能正在经历类似历程、考虑重新思考北极星指标（而不是仅仅盯着收入）的人，你有什么建议吗？

---

### [00:36:36] Lauryn Isford

**English:**
In general, I would say having stability in north star metric for at least six months feels like table stakes to me and that's for the reasons that I cited before, for building momentum, for building domain expertise, and also for compounding impact in areas where you see success, where you notice growth flywheels that you can optimize. However, if you're reaching a point where that north star metric feels like it's old news, maybe you're outgrowing it, maybe you want to work on different things, I think that's great. Be open-minded about changing it up. I would generally try to start with the mechanics of the business and what you think you might be able to drive in terms of metric impact with the resources you have on your growth team. That can look different for every growth team because some of them have marketing, some are more product and engineering, some are kind of a mix of both or even something different than that.
(00:37:27):
So, I would start with what impact do we think we could have? Where do we think the biggest opportunity is to chase? You can literally draw a funnel on a whiteboard and map it out and brainstorm together, do some analysis on the side, and when you see what opportunity feels like the most important thing to chase, try to build a north star metric that reflects the output of that work, rather than drives all of your decision-making from the beginning. A north star metric should really be a measure of what you plan to do, the strategy you plan to deliver is delivering results for the business on the other side, rather than the other way around.

**中文翻译:**
总的来说，我认为北极星指标至少保持六个月的稳定性是基本要求。原因如前所述：为了积累势头、建立领域专业知识，并在你看到成功的领域（即你可以优化的增长飞轮）产生复利影响。然而，如果你到了一个阶段，觉得北极星指标已经过时了，或者公司已经超越了它，或者你想尝试不同的方向，那也没问题。对改变持开放态度。

我通常建议从业务机制出发，思考利用增长团队现有的资源，你能在指标影响方面推动什么。每个增长团队的情况都不同，有的包含营销，有的偏重产品和工程，有的则是混合型。所以，先问问：我们认为能产生什么影响？最大的机会在哪里？你可以在白板上画一个漏斗，把它勾勒出来并一起头脑风暴，同时做一些侧面分析。当你看到哪个机会最值得追求时，尝试建立一个能反映这项工作产出的北极星指标，而不是让指标从一开始就主导你所有的决策。北极星指标应该是衡量你计划实施的战略是否在另一端为业务带来了结果，而不是反过来。

---

### [00:38:05] Lenny

**English:**
So, you mentioned trials and freemium at one point and I want to spend a little time on this, and I know you also have some strong opinions about this kind of debate. Another debate people have, there's always debates in growth, between offering a trial or offering a freemium product, self-serve, and I think your perspective is you should do both, and I think maybe you call it a reverse trial because I was doing some research. So, I guess is that true?, Is that how you see the world, and then just generally, why do you believe that that is the right approach?

**中文翻译:**
你刚才提到了试用（trials）和免费增值（freemium），我想聊聊这个。我知道你对这类争论也有强烈的观点。增长领域总是有各种争论，比如是提供试用期还是提供自助服务的免费版产品。我觉得你的观点是两者都应该做，我查资料发现你可能把它叫做“逆向试用”（reverse trial）。这是真的吗？你是这么看的吗？为什么你认为这是正确的方法？

---

### [00:38:31] Lauryn Isford

**English:**
What is it about all these growth people with their strong opinion? I guess I have so many of them. You're educating me on my own perspectives today. Freemium and free trials. So, to get on the same page with definitions for all of our wonderful listeners, a free trial is when you can use the product for free for a limited time and then your only option beyond that limited time is to pay for use of the product. Freemium would be when there are multiple options for how to use the product and one of those options is an infinitely free version of the product. So, you can use Airtable for free forever or you can pay some amount and have access to premium features.
(00:39:14):
So, with all that mind, personally I'm in the camp of offering a reverse trial. Funky name, but what that means is offer a trial but also offer freemium. Do both. The reason why I like this is you get an opportunity when somebody shows up and says, "Hey, I'm going to give your product a try today," to show them everything that's possible. Onboarding is a huge component of that. Help somebody get started, have those aha moments and experience initial value, but also this is your moment to showcase everything that can be done with your really cool product, and you have some limited number of days, maybe seven days, 14 days, 30 days, to showcase all of the cool things that your company is building for your customers. That is the beauty of a free trial. It's not just that someone can try your product without paying. It's that they can try even more of the product, all of the premium, amazing advanced offerings that could be possible if they decide they want to settle on a premium plan.
(00:40:17):
When you are deciding if this is something you want to do, I would actually take a big step back from looking at competitive pricing pages and getting into the details and reading blogs and just think about what your philosophy is as a business on monetizing customers. The reason for this is generally the reason to offer a free plan or a free trial but really a free plan, the freemium type of pricing model is if you value letting millions, tens of millions of customers give your product a try, even if they never pay you a dollar. That shows to me prioritization and value of user grab, brand awareness, and exposure of your product more than just revenue. And if that's the case, a freemium pricing structure can be really great for your product, and it give you the space to see if your product can become that household name that everybody is familiar with and can give a try and get some early value and even experience some aha moments.
(00:41:24):
On top of that, you can offer a free trial to show what's possible with premium value and then that really can just be focused space for you to say, "Hey, look what's possible if you pay us $5 a month, $10 a month," and you might even get some extra conversion out of that and some more paid customers. So, in general, that's how I think about it. I like the reverse trial because user growth is important and if you're in a long game where you're trying to grow a business for a decade or more, ideally you're trying to get millions of people onto your product and you can always have that monetization conversation later, but you only get a couple moments where you can say, "Hey, pull out your credit card or let's get on the phone and talk about an enterprise contract," with a customer before you lose trust or lose patience. And so, that focus on helping them discover value and build loyalty to you is much more important.

**中文翻译:**
增长领域的人怎么都有这么多强烈的观点？我想我也一样，你今天是在帮我梳理我自己的观点。关于免费增值（Freemium）和免费试用（Free Trial），为了让听众达成共识，我们先统一定义：免费试用是指你可以限时免费使用产品，到期后唯一的选择就是付费；免费增值是指有多种使用选项，其中之一是永久免费版。比如你可以永远免费使用 Airtable，也可以付费获得高级功能。

基于此，我个人属于“逆向试用”（reverse trial）阵营。名字很怪，但意思就是：既提供试用，也提供免费版。两者都做。我喜欢这种方式的原因是，当有人过来说“嘿，我今天想试试你的产品”时，你有一个机会向他们展示所有的可能性。引导流程是其中的关键。帮助他们上手，体验“惊喜时刻”（aha moments）和初始价值。但这也是你展示这款酷产品所有功能的时刻。你有有限的天数（比如 7 天、14 天或 30 天）来展示公司为客户构建的所有好东西。这就是免费试用的魅力：不仅是让人不花钱试用，更是让他们尝试产品的更多部分，即如果他们决定订阅高级方案所能获得的所有高级、惊艳的功能。

当你决定是否要这样做时，我建议你从研究竞品定价页、细节和博客中抽身出来，思考一下你公司的变现哲学。通常，提供免费计划（Freemium 模式）的原因是，你重视让数百万、数千万客户尝试你的产品，即使他们永远不付一分钱。这对我来说意味着你优先考虑用户获取、品牌知名度和产品曝光，而不仅仅是收入。如果是这样，免费增值定价结构对你的产品会非常好，它让你有空间观察产品是否能成为家喻户晓的名字，让每个人都能尝试并获得早期价值。

在此基础上，你可以提供免费试用来展示高级价值的可能性。这可以作为一个专注的窗口，告诉用户：“嘿，如果你每月付 5 美元或 10 美元，看看能实现什么。”你甚至可能因此获得额外的转化和更多付费客户。所以总的来说，这就是我的想法。我喜欢逆向试用，因为用户增长很重要。如果你在玩一场十年以上的长线游戏，理想情况下你想吸引数百万人使用产品，变现可以以后再谈。但在失去客户信任或耐心之前，你只有几次机会对客户说“嘿，掏出信用卡”或“我们电话聊聊企业合同”。因此，专注于帮助他们发现价值并建立忠诚度要重要得多。

---

### [00:42:13] Lenny

**English:**
I really like this concept, a super cool name too. I'm also thinking back to some of the SaaS tools I've used that have had this where I go straight into the pro plan and then I'm like, "Oh, I don't want to lose all these features," and then I actually end up buying it. So, when I'm hearing this, it sounds to me like it's a better version of the freemium approach. I imagine there's still many SaaS tools that are very enterprise-y, take handholding, maybe this goes away. I know Elena Verna who's been on the podcast is just a huge proponent of everyone will be product-led, self-serve eventually, but until that day they're still like, I don't know, I think of Retool I think is very hands-on, handhold-y, front I think is like that. There's all these tools that people don't get really quickly.
(00:42:57):
And so, I guess do you still think there's a need for some of these tools that need sales and customer success involvement to stick with just trial at least for now, or do you think they should all kind of find a way to get to self-serve and a reverse trial?

**中文翻译:**
我很喜欢这个概念，名字也很酷。我也回想起我用过的一些 SaaS 工具，它们就是这样：我直接进入专业版计划，然后心想“噢，我不想失去这些功能”，最后我真的买了。所以听起来，这像是免费增值模式的一个升级版。但我猜仍有很多非常“企业级”的 SaaS 工具需要人工引导，也许这种模式不适用。我知道上过播客的 Elena Verna 是“万物皆可 PLG/自助服务”的坚定拥护者，但在那一天到来之前，像 Retool 或 Front 这种工具似乎还需要很多手把手的指导。人们无法很快理解这些工具。

所以，你认为那些需要销售和客户成功团队介入的工具，目前是否仍有必要坚持仅限试用（Trial）模式？还是说它们都应该想办法转向自助服务和逆向试用？

---

### [00:43:12] Lauryn Isford

**English:**
I do really agree with what Elena said. I really look forward to the day when self-serve and freemium are possible for every product, but I also recognize that that can be really expensive to build and implement and is not for everyone. So, that's cool too. There are other options. In general, I think freemium and also free trials tend to be most effective when there's something that the person who signed up can actually do on their own without being handheld. It doesn't have to be full functionality. It can be exploring a sandbox or a demo or something they can poke around in and experience value, see that aha moment. That's great. That's a moment where you can give value to that person who's chosen to spend time with your product. If that's not possible, there are different ways to be creative that don't require having premium pricing. You can think about how to use concepts related to PLG and related to top of funnel adoption in different ways.
(00:44:16):
So, maybe you can create custom landing pages or experiences that help showcase value without a full signup or free plan or free trial experience. Maybe you give folks the ability to sign up and while they've sort of signed up as an interested customer, they're not fully experiencing things, they might not even have the option to pay for something yet, but they can learn. There's some resources. There's some education for them to experience. Or, maybe you can think about top of funnel adoption or traffic as being most helpful for extension within customers you already. So, if you've signed contracts with a couple really large Fortune 500 companies and somebody wants to join and signs up on your website from the same email domain, then you can provide an experience for them that might feel like it helps them learn the mechanics that's actually only available to folks who are part of organizations that already have contracts with you.
(00:45:19):
It's a different way of thinking about PLG and not necessarily something you would offer for free, they're already an enterprise customer, but some of those concepts can still have a lot of value and help you grow the footprint of an account in an organization, and those are definitely awesome things to try if you can't offer something self-serve.

**中文翻译:**
我非常同意 Elena 的观点。我也期待着每个产品都能实现自助服务和免费增值的那一天。但我同时也意识到，构建和实施这些功能的成本可能非常高，并不适合所有人。所以这也没关系，还有其他选择。总的来说，我认为当注册用户可以在没有人工指导的情况下独立完成某些操作时，免费增值和免费试用最有效。不一定要是全部功能，可以是探索沙盒、演示版，或者任何他们可以随意尝试并体验到价值、看到“惊喜时刻”的东西。这很好，是你向愿意花时间体验你产品的人提供价值的时刻。

如果这行不通，还有其他创意方式，不一定非要涉及免费增值定价。你可以思考如何以不同方式利用 PLG 相关概念和漏斗顶端（top of funnel）的获客。比如，你可以创建自定义落地页或体验，在无需完整注册、免费计划或试用的情况下展示价值。或者，你可以让人们注册为“意向客户”，虽然他们还不能完整体验，甚至还没有付费选项，但他们可以学习，有一些资源和教育内容供他们体验。

或者，你可以将漏斗顶端的流量视为在现有客户内部进行扩张（extension）的手段。比如，如果你已经和几家财富 500 强公司签了合同，而有人用相同的公司邮箱域名在你的网站注册，你可以为他们提供一种学习机制的体验，这种体验实际上只开放给那些已经与你签有合同的组织成员。这是一种思考 PLG 的不同方式，不一定是免费提供（因为他们已经是企业客户了），但这些概念仍有很大价值，能帮你扩大账户在组织内的足迹。如果你无法提供完全的自助服务，这些绝对是值得尝试的绝佳方案。

---

### [00:45:36] Lenny

**English:**
So, what I'm hearing is find ways to make things some component of it self-serve so that you don't need to necessarily talk to someone immediately. They can start to understand some element of it on maybe an interactive planning page or some very simple part of the product.

**中文翻译:**
所以我的理解是：想办法让产品的某些部分实现自助化，这样用户就不必立刻与人交谈。他们可以通过交互式页面或产品的简单部分开始理解其中的某些元素。

---

### [00:45:50] Lauryn Isford

**English:**
Exactly. I think the key is to figure out what it would be like for someone to experience value when there's no human sitting next to them, and that value doesn't have to be full functionality of the product.

**中文翻译:**
没错。关键在于弄清楚，在没有人在旁指导的情况下，一个人如何能体验到价值。而且这种价值不一定要涵盖产品的全部功能。

---

### [00:46:02] Lenny

**English:**
Awesome. Coming back to onboarding, and this is my last onboarding question, I have another topic I wanted to touch on. Do you have any just general pieces of advice, either probably this will work if you're working on onboarding/things that probably won't work and are common traps that people fall into when they're trying to optimize onboarding activation flows in general?

**中文翻译:**
太棒了。回到引导流程，这是我最后一个关于引导的问题，之后我还有一个话题想聊。你有没有什么通用的建议？比如在优化引导和激活流程时，哪些做法通常有效，哪些做法行不通，或者人们常掉进哪些陷阱？

---

### [00:46:26] Lauryn Isford

**English:**
I do see a very common trap that I would love to caution against, which is that employees of a company build onboarding for customers, but they build what they think customers want rather than what customers actually want, and that manifests in an onboarding experience that's not very helpful. So, there are two patterns that I typically see. One is naming features. So, imagine you're using Airtable for the first time and you see a tooltip and it says, "This is automations," and it explains what automations is to you. That's not that useful for a user who doesn't really know what's going on yet because they aren't sure if automations are relevant to them, if they're suited to their use case, what exactly the word automation entails. We've named a feature, but it's really sort of an announcement of something awesome that Airtable built, rather than an application that can help educate the user on how they'll receive more value from that feature. Try not to name features. It can be very tempting in practice, even though it sounds easy in theory.

**中文翻译:**
我确实看到了一个非常普遍的陷阱，我想提醒大家注意：公司的员工在为客户构建引导流程时，往往是根据“他们认为客户想要的”来构建，而不是根据“客户真正想要的”。这会导致引导体验没什么帮助。我通常会看到两种模式。

第一种是“命名功能”。想象一下你第一次使用 Airtable，看到一个工具提示说“这是自动化（Automations）”，然后向你解释什么是自动化。对于一个还不知道发生了什么的用户来说，这没什么用，因为他们不确定自动化是否与他们相关，是否适合他们的场景，甚至不明白“自动化”这个词到底意味着什么。我们只是命名了一个功能，这更像是宣布 Airtable 做了一个很酷的东西，而不是在教育用户如何从该功能中获得更多价值。尽量不要只给功能命名。虽然理论上听起来很简单，但在实践中却非常有诱惑力。

---

### [00:47:32] Lenny

**English:**
Before you move on, what have you learned about how to actually name things in such a way people understand? Is there some you do there?

**中文翻译:**
在你继续之前，关于如何以人们能理解的方式命名，你学到了什么？有什么技巧吗？

---

### [00:47:39] Lauryn Isford

**English:**
Ooh, naming things in a way people understand.

**中文翻译:**
噢，以人们能理解的方式命名。

---

### [00:47:41] Lenny

**English:**
Versus the feature name, like you just said.

**中文翻译:**
而不是像你刚才说的，只用功能名称。

---

### [00:47:43] Lauryn Isford

**English:**
So, instead of that, I think what would be more useful, given the constraints of using a tooltip that's pushing someone to try an automation would be to explain how the automation is relevant to them, or even better, to enable a one-touch turn-on of the automation feature or set up an automation to complete your workflow where we actually do some of the work and if you click into here, we will show you what value is possible and help you get it to the finish line. So, really focusing on that contextual application or helping to drive towards an outcome, rather than just educating on a name.

**中文翻译:**
与其那样，我认为更有用的做法（考虑到使用工具提示引导用户尝试自动化的限制）是解释自动化与他们的关系。或者更好的是，提供一个“一键开启”自动化功能，或者设置一个自动化来完成你的工作流。我们实际上承担了一部分工作，如果你点击这里，我们会向你展示可能的价值，并帮你完成最后一步。所以，要真正专注于“上下文应用”或“推动结果”，而不是仅仅教育用户一个名字。

---

### [00:48:23] Lenny

**English:**
And there's an element of smart defaulting, just like starting to do it for them versus do you want this or not.

**中文翻译:**
这其中包含了“智能默认”（smart defaulting）的元素，就像是直接帮他们开始做，而不是问“你要不要这个”。

---

### [00:48:29] Lauryn Isford

**English:**
Exactly. There's also an element here of segmentation or personalization where you should be sensible about if everybody needs to know what an automation is or if there are only certain folks who actually need to learn about it and others might not need to know.

**中文翻译:**
没错。这里还有一个细分或个性化的元素：你应该理智地判断，是每个人都需要知道什么是自动化，还是只有特定的人需要学习它，而其他人可能根本不需要知道。

---

### [00:48:42] Lenny

**English:**
Awesome. All right. Back to your other suggestions.

**中文翻译:**
太棒了。好的，回到你的其他建议。

---

### [00:48:46] Lauryn Isford

**English:**
Oh yes, there is one other suggestion which is if you're working on a SaaS product, especially a freemium product, there's probably some pricing and packaging scheme that explains which features are available for free, which features are not, how many you get, and sort of maps out usage of the product, both for free users if you offer a free plan, and then for premium users if you offer premium plans. I find sometimes teams working on onboarding will map onboarding to that pricing or packaging. So, for example, maybe automations, to use the same example of the same feature, is something that's generally premium, that if somebody uses automations they're more likely to be a paying customer. It can be tempting then for an onboarding team to try to push automations to people when they're getting started because of course, we'd prefer if customers use premium features because then they might be more likely to become premium customers, but that is not in the best interest of educating a user on how to get started.
(00:49:44):
So, I do think it's very important to be careful that you are rooted in the customer need and rooted in helping that customer achieve maximum value, rather than sitting in the priors of what your packaging scheme might suggest or what might be in the best interest of the company.

**中文翻译:**
噢是的，还有一个建议：如果你在做 SaaS 产品，尤其是免费增值产品，通常会有一套定价和包装方案，规定哪些功能免费、哪些收费、额度是多少。我发现有时负责引导的团队会将引导流程与定价或包装挂钩。例如，还是以自动化功能为例，它通常是高级功能，如果有人使用它，就更有可能成为付费客户。于是，引导团队可能会在用户刚开始使用时就拼命推销自动化功能，因为我们当然希望客户使用高级功能，从而转化为付费客户。但这并不符合“教育用户如何开始使用”的最佳利益。

所以我认为非常重要的一点是：要确保你植根于客户需求，植根于帮助客户实现最大价值，而不是受困于定价方案的预设，或者仅仅考虑公司利益最大化。

---

### [00:50:02] Lenny

**English:**
As a growth leader, how do you operationalize that? Is it set some drag metrics? Is it just philosophically, let's make sure we're optimizing the right metric? What's worked to actually avoid that problem?

**中文翻译:**
作为增长领导者，你如何落实这一点？是设置一些反向指标（drag metrics）吗？还是仅仅从哲学层面强调“我们要确保优化正确的指标”？实际操作中，什么方法能有效避免这个问题？

---

### [00:50:15] Lauryn Isford

**English:**
I think north star metrics help because a team can be singularly focused on the most important result for their roadmap and their charter. However, guardrail metrics are equally important. So, an onboarding team that builds amazing onboarding that causes a 10% drop in revenue would need some sort of guardrails to make sure that they knew that that might not be the right trade for the business, and importantly, should have the rigor and passion to go deep and understand what caused that drop in revenue and figure out what it was about that onboarding that ultimately caused a guardrail metric to suffer. So, with that in mind, I think guardrail metrics can be very useful and are important to choose wisely. I love working with strong analytics partners on a growth team because rigor and education around how to think about guardrail metrics is something that we should always be thinking about, whether you are a data analyst in functional specialty or a PM or an engineer or a designer.
(00:51:19):
So, that's how I kind of like to think about it. I do think guardrail metrics help and then just being well reasoned and thinking about what's best for the business and speaking about your work as being what's best for the business and the customer overall, rather than being too narrow in your own swim lanes of what you work on.

**中文翻译:**
我认为北极星指标很有帮助，因为它让团队能专注于路线图和职责中最核心的结果。然而，“护栏指标”（guardrail metrics）同样重要。比如，一个引导团队打造了极棒的引导流程，却导致收入下降了 10%，那就需要护栏指标来提醒他们，这可能不是一笔划算的交易。更重要的是，团队应该有严谨的态度和热情去深入研究导致收入下降的原因，弄清楚引导流程中的哪个环节损害了护栏指标。

基于此，我认为护栏指标非常有用，且必须明智地选择。我喜欢在增长团队中与强大的分析伙伴合作，因为无论你是数据分析师、PM、工程师还是设计师，严谨地思考护栏指标都是我们应该始终坚持的事情。这就是我的想法。护栏指标很有帮助，此外还要保持理性，思考什么对业务最好，并将你的工作定位为对业务和客户整体都有利，而不是局限于自己负责的那一小块领域。

---

### [00:51:35] Lenny

**English:**
Great advice. I want to shift to a different topic and this will be much shorter. You have this really cool framework for thinking about the PLG funnel, product-led growth, and interestingly kind of trickles down to the team you build, metrics you choose, and things like that. So, can you just briefly talk about just this framework that you use to think about PLG growth in the PLG funnel?

**中文翻译:**
非常棒的建议。我想转到一个不同的、更简短的话题。你有一套非常酷的 PLG（产品驱动增长）漏斗框架。有趣的是，它会影响到你组建团队的方式、选择的指标等等。你能简要谈谈你用来思考 PLG 增长和漏斗的这个框架吗？

---

### [00:51:55] Lauryn Isford

**English:**
When I think about how to grow with PLG in a business that has some element of PLG, self-server, freemium, I usually start with a funnel that roughly maps to the same scaffolding, regardless of business. Whether I've worked on the business, whether I'm supporting the business as an advisor, I love starting with this framework. The first step is join, the second is evaluate, the third is upgrade, and the fourth is expand. This funnel represents the journey of a customer in a PLG product as they advance and develop in their lifetime of using the product. It starts with becoming a part of the account that's using the product or signing up, and you might join because you found Airtable on Twitter or you might join because Lenny invited you to use Airtable. So, there are different ways that you can join that product in the first place.
(00:52:55):
Then importantly, you evaluate if it's right for you, and that word choice of evaluate is deliberately not onboard or activate because it's about what the user needs to see that they are going to get the value that they want in using your product and in building a habit around it. Next is upgrade. Ideally, someone has gone from beginner to intermediate or even advanced in their ongoing education and in getting to know your product over some amount of time and they see premium value and raise their hand and say, "I will convert to it." Now if you offer self-serve premium plans, that's awesome. They can do it with a credit card right in the product. Sometimes this means raising their hand to talk to sales and that's great too, but they upgrade to some sort of premium experience or to more value than what they have when they got started.
(00:53:43):
And finally expand, and vertical says this can be nuanced but with more horizontal tools. Ideally, a few folks, maybe one, maybe a few are using a tool in an organization and then many more adopt it over time, and that expansion drives net dollar retention, it drives brand awareness, it drives more usage in more pockets of the company, it is awesome for renewal rates if you're working with enterprise contracts, and ultimately then also brings new referrals into the product that loop all the way back to the beginning at join.

**中文翻译:**
当我思考如何在具有 PLG、自助服务或免费增值元素的业务中实现增长时，我通常会从一个通用的漏斗框架开始。无论是我亲自负责的业务，还是作为顾问支持的业务，我都喜欢用这个框架。

第一步是“加入”（Join），第二步是“评估”（Evaluate），第三步是“升级”（Upgrade），第四步是“扩张”（Expand）。这个漏斗代表了客户在 PLG 产品生命周期中的进阶过程。

首先是“加入”，即成为使用该产品账户的一部分或直接注册。你可能因为在 Twitter 上看到 Airtable 而加入，也可能因为 Lenny 邀请你而加入。

接着是“评估”，即评估产品是否适合你。我特意选择“评估”这个词，而不是“引导”或“激活”，因为这关乎用户需要看到什么，才能确认他们能通过使用你的产品并建立习惯来获得想要的价值。

下一步是“升级”。理想情况下，用户在一段时间的持续教育和产品了解后，从初级进阶到中级甚至高级，他们看到了高级价值并主动表示“我要转化”。如果你提供自助付费方案，那太棒了，他们可以直接在产品里刷卡。有时这意味着他们想找销售聊聊，这也很好。总之，他们升级到了某种高级体验，获得了比刚开始时更多的价值。

最后是“扩张”。对于通用型工具，理想情况是组织内最初只有几个人使用，随着时间推移，越来越多的人开始采用。这种扩张推动了净金额留存（NDR）、品牌知名度以及公司内部更多部门的使用。如果你签的是企业合同，这对续约率非常有好处，并最终为产品带来新的推荐，从而形成闭环，回到最初的“加入”阶段。

---

### [00:54:19] Lenny

**English:**
I love it. And what's cool is upgrade and expansion kind of bake in retention. You're not going to upgrade, you're not going to expand if you're not retained. Can you talk a little bit about how you use this framework? Do you bucket? Do you have these four teams on your growth team that focus on each of these stages? Is it more of a conceptual framework? Do you come up with KPIs for each of these steps? How do you actually operationalize this concept?

**中文翻译:**
我太喜欢这个了。而且很酷的一点是，“升级”和“扩张”其实已经包含了“留存”。如果不留存，用户就不会升级或扩张。你能聊聊你如何使用这个框架吗？你是把增长团队分成这四个小组吗？它更多是一个概念框架吗？你会为每一步设定 KPI 吗？你如何实际操作这个概念？

---

### [00:54:40] Lauryn Isford

**English:**
I think this framework is a step to abstract to represent exactly how you should structure your teams or to be represented with four metrics, for KPIs. However, it's a really good conceptual way of grounding your team or your organization in the mechanics of how machine that is the business you work on run. From there, it can become much easier to communicate with each other on where you see opportunity on specific pockets of the product that might be impactful. So, for example, you might be working on a strategy related to landing pages and be able to name that that's going to help drive joins in new organization, and that's a really awesome way to communicate why you might invest there versus investing in something related to onboarding that would help with evaluate.
(00:55:32):
So, I love this framework because it helps everyone communicate clearly and also you can derive from it more specifically what are the opportunities that are relevant to us with this framework in mind, and then revisit it over time to gut check if you feel like maybe what you're investing in now is a bit outdated and needs a refresh, or if there are other pockets of the business that need more attention that you might be able to work.

**中文翻译:**
我认为这个框架有点过于抽象，不足以直接决定团队结构或对应四个 KPI 指标。然而，它是一个非常好的概念工具，能让你的团队或组织立足于业务运作的底层逻辑。有了它，团队成员之间就能更容易地沟通在产品的哪些特定环节看到了机会。例如，如果你正在制定落地页策略，你可以明确指出这将有助于推动新组织的“加入”，这是一种非常棒的沟通方式，能解释为什么我们要投资这里，而不是投资于有助于“评估”的引导流程。

所以我喜欢这个框架，因为它能让大家沟通清晰。你可以根据这个框架推导出与我们相关的具体机会，并随着时间的推移重新审视它，以检查当前的投入是否过时、是否需要更新，或者业务中是否有其他更需要关注的环节。

---

### [00:55:58] Lenny

**English:**
Can you talk a bit about how you structured the growth team potentially based on this framework and just generally how you thought about building the growth team at Airtable?

**中文翻译:**
你能谈谈你是如何（可能基于这个框架）组建增长团队的吗？以及你对在 Airtable 构建增长团队的总体想法？

---

### [00:56:06] Lauryn Isford

**English:**
We had what I think is a pretty relevant set of teams. If you're thinking about building out a few in your own product or organization that focuses on sort of a PLG shape of business, we had one team working on acquisition and they were really responsible for the join. So, they mapped actually really well to this funnel. One team working on activation and they mapped pretty closely to evaluate. It wasn't a full representation of what's possible in evaluate. We were pretty focused on the self-serve business and that was different than, for example, helping an enterprise customer evaluate the right offering for them, but that activation team was most closely tied to that second step in the funnel.
(00:56:50):
And then we had a monetization team that worked on monetization and pricing and they mapped really closely to the upgrade part of the funnel. They did touch some other things as well. So, they worked on churn prevention and downgrades. They worked on some billing related projects, but in general, they were most thematically aligned with that upgrade step of the funnel. One area that is more emerging that's interesting is expand. So, when we got started on Airtable growth, we didn't have a team dedicated to that expand piece and it became increasingly interesting to us over time as we started to notice that larger companies were using the product. This meant that there was a bigger opportunity than there had been before to really help drive expansion and get more folks using the product in those accounts. That's an area that emerged later. That's a really good example of revisiting your priors and being resilient or agile in your org structure because it wasn't something we set out to work on initially, but it became a really clear opportunity later.

**中文翻译:**
我们有一套我认为非常合理的团队设置。如果你正考虑在自己的产品或组织中建立专注于 PLG 模式的团队，可以参考我们的做法：我们有一个负责“获客”（Acquisition）的团队，他们主要负责“加入”环节，这与漏斗匹配得很好。一个负责“激活”（Activation）的团队，他们与“评估”环节紧密相关。虽然他们不能代表“评估”的所有可能性（我们主要关注自助服务业务，这与帮助企业客户评估方案不同），但激活团队与漏斗的第二步联系最紧密。

然后我们有一个“变现”（Monetization）团队，负责变现和定价，他们与漏斗的“升级”部分高度契合。他们也负责其他事务，如防止流失、降级处理和计费项目，但总体上与“升级”步调一致。

一个更有趣的新兴领域是“扩张”（Expand）。当我们刚开始做 Airtable 增长时，并没有专门负责扩张的团队。但随着时间推移，我们注意到越来越多的大型公司在使用产品，这意味着通过推动扩张让这些账户中的更多人使用产品，存在着比以往更大的机会。这是一个后来才出现的领域，也是一个“重新审视预设”并保持组织结构弹性和敏捷性的好例子——这不是我们最初计划的工作，但后来变成了一个非常清晰的机会。

---

### [00:57:53] Lenny

**English:**
You mentioned that Airtable is thinking a little bit more about B2B growth versus just kind of B2C where I think it's been historically. Can you talk about that and just how you're thinking about that?

**中文翻译:**
你提到 Airtable 正在更多地思考 B2B 增长，而不仅仅是它历史上偏向的 B2C 模式。你能谈谈你是怎么想的吗？

---

### [00:58:04] Lauryn Isford

**English:**
B2B growth is an emerging space for growth practitioners and hobbyists like me because the playbook hasn't been written the same way that B2C growth or consumer social growth has been. It's a new space, and there are quite a few companies that are really excited about exploring B2B growth and how to apply the DNA and the mechanics of a growth organization to more of that B2B motion or to working with more upmarket customers or enterprise customers. So, it's very top of mind for me. It's a active conversation in the growth community, especially in San Francisco. Overall, I'm really excited to see what we can do by applying this approach to growing businesses, to new types of businesses. It will require some differences in execution model. So, in B2C or in consumer social as two examples, you can experiment at large volumes or you can make changes that impact thousands or millions of people pretty easily.
(00:59:15):
In B2B growth, generally you're working with a much smaller set of customers and also the risk profile can be very different because smaller numbers of customers that represent larger percentages of your company's total revenue must be treated with absolute care, as opposed to a world where you might have millions of folks coming through your product every day and small changes might not have as big of an impact. In an enterprise organization, it's important to be very careful and rigorous and to prioritize that customer's needs all the time. This means that rigor, that customer conversations, that beta testing, that live prototypes and demos are significantly more important and that face time with the customer is significantly more important than it is in B2C growth. So, we'll see what happens. I'm really excited to see more folks who have given growth a try in B2C or in consumer spaces try applying it to B2B because it will become increasingly common in the industry.

**中文翻译:**
对于像我这样的增长从业者和爱好者来说，B2B 增长是一个新兴领域，因为它的玩法还没有像 B2C 增长或消费社交增长那样形成固定的剧本。这是一个新空间，很多公司都对探索 B2B 增长以及如何将增长组织的基因和机制应用于 B2B 流程、高端客户或企业客户感到兴奋。这是我目前最关注的事情，也是增长社区（尤其是旧金山）的热门话题。

总的来说，我很期待看到将这种方法应用于新型业务增长所能产生的效果。这需要执行模式上的一些差异。例如，在 B2C 或消费社交领域，你可以进行大规模实验，或者轻松做出影响数千甚至数百万人的改变。但在 B2B 增长中，你面对的客户群体通常要小得多，而且风险状况完全不同。因为少数客户可能占据了公司总收入的很大比例，必须极其谨慎地对待。相比之下，在每天有数百万人使用产品的世界里，微小的变化可能影响没那么大。在企业级组织中，保持严谨并始终优先考虑客户需求至关重要。这意味着严谨性、客户访谈、Beta 测试、现场原型演示比在 B2C 增长中重要得多，与客户面对面交流的时间也重要得多。我们会拭目以待。我很高兴看到更多在 B2C 或消费领域尝试过增长的人开始将其应用于 B2B，因为这在行业中将变得越来越普遍。

---

### [01:00:19] Lenny

**English:**
Well, with that, we have reached our very exciting lightning round. I've got six questions for you. I'll go through it pretty fast. Are you ready?

**中文翻译:**
好了，现在进入我们非常精彩的闪电问答环节。我有六个问题要问你，我会问得很快。准备好了吗？

---

### [01:00:27] Lauryn Isford

**English:**
I'm ready.

**中文翻译:**
准备好了。

---

### [01:00:28] Lenny

**English:**
All right. First question, what are two or three books that you recommend most to other people?

**中文翻译:**
好的。第一个问题：你最推荐给别人的两三本书是什么？

---

### [01:00:34] Lauryn Isford

**English:**
Ride of a Lifetime by Bob Iger. I give this to new reports on my team. Great book to read when you're thinking about your leadership style, and Rocket Men, really fun story. I love a good story about ambition and achieving awesome things.

**中文翻译:**
Bob Iger 的《一生的旅程》（Ride of a Lifetime）。我会把它送给团队的新成员。当你思考领导风格时，这是一本必读好书。还有《火箭人》（Rocket Men），非常有趣的故事。我喜欢关于雄心壮志和成就伟业的故事。

---

### [01:00:50] Lenny

**English:**
What's a favorite other podcast, other than the one you're currently on?

**中文翻译:**
除了你现在参加的这个，你最喜欢的播客是什么？

---

### [01:00:54] Lauryn Isford

**English:**
I like Fifth & Mission which is a local San Francisco podcast on local politics.

**中文翻译:**
我喜欢《Fifth & Mission》，这是一个关于旧金山当地政治的本地播客。

---

### [01:01:01] Lenny

**English:**
Favorite recent movie or TV show that you have watched that you've really enjoyed?

**中文翻译:**
最近看过的、非常喜欢的电影或电视剧？

---

### [01:01:05] Lauryn Isford

**English:**
I really like the White Lotus Season 2. White Lotus was very fun to watch. I also, on the movie front, I'm in a habit of watching Best Picture nominees every year and last year there were a couple movies I really enjoyed, one of them was Belfast.

**中文翻译:**
我很喜欢《白莲花度假村》（White Lotus）第二季，非常好看。电影方面，我有每年观看奥斯卡最佳影片提名作品的习惯，去年有几部我很喜欢，其中一部是《贝尔法斯特》（Belfast）。

---

### [01:01:22] Lenny

**English:**
Oh man, that was an intense movie. I watched that recently. And also, if we should turn this into a drinking game, every time someone mentions White Lotus, we drink. It's an amazing show, but it's definitely comes up often. So interesting.

**中文翻译:**
噢天哪，那部电影很震撼，我最近刚看。另外，我们应该玩个喝酒游戏：每当有人提到《白莲花度假村》，我们就喝一杯。那是一部很棒的剧，但确实经常被提起。真有意思。

---

### [01:01:35] Lauryn Isford

**English:**
Comes up too much.

**中文翻译:**
被提起的次数太多了。

---

### [01:01:37] Lenny

**English:**
It deserves to come up often. I love it.

**中文翻译:**
它值得被经常提起，我也很喜欢。

---

### [01:01:39] Lauryn Isford

**English:**
That's true.

**中文翻译:**
确实。

---

### [01:01:41] Lenny

**English:**
It's great, but that'd be okay. We're going to do a drinking game from now on and I'll have a shot here. Love White Lotus. Favorite interview question that you like to ask people?

**中文翻译:**
太棒了，没关系。从现在起我们要玩喝酒游戏了，我先来一杯。我也爱《白莲花度假村》。你最喜欢问别人的面试问题是什么？

---

### [01:01:50] Lauryn Isford

**English:**
Tell me about a time that you delivered something that was impactful.

**中文翻译:**
请讲讲你曾经交付过的一件具有影响力的事情。

---

### [01:01:58] Lenny

**English:**
What do you look for in an answer when you ask that question? What's your kind of a good sign and what's maybe a bad sign?

**中文翻译:**
当你问这个问题时，你希望听到什么样的答案？什么是好的信号，什么可能是坏的信号？

---

### [01:02:02] Lauryn Isford

**English:**
I'm looking for someone to help me understand how they define impact and what it means to them. I think a good answer for growth practitioner is intrinsic motivation about having an impact on the business.

**中文翻译:**
我想通过回答了解他们如何定义“影响力”，以及这对他们意味着什么。我认为对于增长从业者来说，一个好的回答应该体现出对“对业务产生影响”的内在动力。

---

### [01:02:19] Lenny

**English:**
Hear, hear. What are five SaaS products that you use day to day, and you can't say Airtable?

**中文翻译:**
完全同意。你日常使用的五款 SaaS 产品是什么？不能说 Airtable。

---

### [01:02:25] Lauryn Isford

**English:**
Figma, Miro, Slack, Gmail, and my fifth one, I need to think about it.

**中文翻译:**
Figma、Miro、Slack、Gmail，第五个……我得想想。

---

### [01:02:36] Lenny

**English:**
It's because I cut out Airtable. I got you.

**中文翻译:**
因为我把 Airtable 排除在外了，难住你了。

---

### [01:02:39] Lauryn Isford

**English:**
I know, I always say Airtable. Airtable's definitely number five.

**中文翻译:**
我知道，我总是说 Airtable。Airtable 绝对是第五个。

---

### [01:02:42] Lenny

**English:**
Okay. Probably number one. Okay, final question. Speaking of Airtable, what's the coolest use of Airtable you've seen?

**中文翻译:**
好吧，它可能是第一名。最后一个问题：说到 Airtable，你见过的最酷的用法是什么？

---

### [01:02:48] Lauryn Isford

**English:**
There was a great embedded view, which is the internal term for when you put Airtable on your website in an embedded way so people can check out cool stuff, related to finding COVID vaccine when they came out, which was really awesome. I also appreciated that a similar use of Airtable has become quite popular this year in support of facilitating folks who've been laid off to help them find new opportunities.

**中文翻译:**
有一个非常棒的“嵌入视图”（embedded view，这是内部术语，指将 Airtable 嵌入到网站中供人查看），是关于在新冠疫苗刚上市时寻找疫苗接种点的，非常了不起。我还很欣赏今年变得非常流行的一种用法：利用 Airtable 帮助被裁员的人寻找新的工作机会。

---

### [01:03:15] Lauryn Isford

**English:**
Lauryn, this was amazing. I learned a ton. We got through everything I was hoping to get through which I did not expect. Two final questions, where can folks find you online if they want to reach out and learn more and to reach out to you, and then two, how can listeners be useful to you?

**中文翻译:**
Lauryn，这太精彩了。我学到了很多。我们聊完了我希望涵盖的所有内容，这超出了我的预期。最后两个问题：如果大家想联系你或了解更多信息，可以在哪里找到你？第二，听众可以为你提供什么帮助？

---

### [01:03:28] Lauryn Isford

**English:**
You all can find me on Twitter. I'm @laurynisford. I love hearing about how folks with all different kinds of cool products are thinking about growth. In general, I find all of us are better at growing businesses when we study the awesome wins and learnings of others. So, please, my DMs are open. Send me cool things you're working on. I'd love to learn about it.

**中文翻译:**
大家可以在 Twitter 上找到我，账号是 @laurynisford。我喜欢听各种酷产品的开发者分享他们对增长的看法。总的来说，当我们学习他人的成功经验和教训时，我们都能更好地推动业务增长。所以，我的私信是开放的，欢迎发给我你们正在做的酷东西，我很乐意学习。

---

### [01:03:51] Lenny

**English:**
Amazing. Lauryn, thank you. Let's go drive some growth.

**中文翻译:**
太棒了。Lauryn，谢谢你。让我们去推动增长吧。

---

### [01:03:54] Lauryn Isford

**English:**
All right.

**中文翻译:**
好的。

---

### [01:03:57] Lenny

**English:**
Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
非常感谢您的收听。如果您觉得本期节目有价值，可以在 Apple Podcasts、Spotify 或您喜欢的播客应用中订阅。此外，请考虑给我们评分或留下评论，这能极大地帮助其他听众发现这个播客。您可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目再见。