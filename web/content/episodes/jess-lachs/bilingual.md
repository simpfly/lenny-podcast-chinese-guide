# Jess Lachs - 双语对照

This is the complete bilingual transcript for Lenny's Podcast featuring Jessica Lachs, VP of Analytics and Data Science at DoorDash.

---

### (00:00:00) Lenny Rachitsky

**English:**
So you've built one of the largest and most respected data teams in all of tech.

**中文翻译:**
你建立并领导了整个科技界规模最大、最受推崇的数据团队之一。

---

### (00:00:05) Jessica Lachs

**English:**
For me, analytics is a business impact driving function and not purely a service function, not just answering the why, but answering the, "What do we do now that we know this?"

**中文翻译:**
对我来说，分析是一个驱动业务影响的职能部门，而不仅仅是一个服务职能。它不只是回答“为什么”，还要回答“既然我们知道了这一点，现在该怎么办？”

---

### (00:00:15) Lenny Rachitsky

**English:**
One of your colleagues told me that you are incredibly good at defining metrics.

**中文翻译:**
你的一位同事告诉我，你非常擅长定义指标。

---

### (00:00:19) Jessica Lachs

**English:**
Retention is a terrible thing to goal on. It's almost impossible to drive in a meaningful way in a short term. Ultimately, you want to find a short-term metric you can measure that drives a long-term output.

**中文翻译:**
把“留存率”作为目标是很糟糕的。在短期内几乎不可能以有意义的方式去推动它。最终，你需要找到一个可以衡量的短期指标，来驱动长期的产出。

---

### (00:00:32) Lenny Rachitsky

**English:**
You mentioned the early team. I felt extreme ownership.

**中文翻译:**
你提到了早期的团队。我感受到了极强的主人翁意识（Extreme Ownership）。

---

### (00:00:34) Jessica Lachs

**English:**
Yes, you are a data scientist, but your goal is to figure out what's happening. And if that means that you're going to pick up the phone and call customers, then that is what you're going to do to roll up your sleeves.

**中文翻译:**
是的，你是一名数据科学家，但你的目标是弄清楚发生了什么。如果这意味着你需要拿起电话给客户打电话，那么你就要卷起袖子去干。

---

### (00:00:48) Lenny Rachitsky

**English:**
Today my guest is Jessica Lachs. Jessica is Vice President of Analytics and Data Science at DoorDash, which has built one of the biggest and most impactful data teams in tech. She's been at DoorDash for over 10 years and was the first GM at DoorDash responsible for launching new markets. Previously, Jessica founded GiftSimple, a social gifting startup and began her career in investment banking at Lehman Brothers.

(00:01:11):
In our conversation, we go deep on how to build and scale your data org, including why a centralized org model is so effective. What to look for when hiring data people, how to pick the right metrics for teams to align incentives and drive the right sorts of outcomes. Examples of how the data team at DoorDash has helped the business make better decisions, a bunch of great stories about the early days of DoorDash and a ton more. If you enjoy this podcast, don't forget to subscribe and follow it in your favorite podcasting app or YouTube. It's the best way to avoid missing feature episodes and helps the podcast tremendously.

(00:01:44):
With that, I bring you Jessica Lachs. Jessica, thank you so much for being here and welcome to the podcast.

**中文翻译:**
今天的嘉宾是 Jessica Lachs。Jessica 是 DoorDash 的分析与数据科学副总裁，DoorDash 建立了科技界规模最大、影响力最强的数据团队之一。她在 DoorDash 工作了 10 多年，是 DoorDash 的第一位总经理（GM），负责开拓新市场。在此之前，Jessica 创立了社交礼品初创公司 GiftSimple，并在雷曼兄弟（Lehman Brothers）开始了她的投资银行生涯。

(00:01:11):
在我们的对话中，我们将深入探讨如何构建和扩展数据组织，包括为什么集中式组织模型如此有效。招聘数据人才时看重什么，如何为团队选择正确的指标以对齐激励措施并推动正确的结果。DoorDash 数据团队如何帮助业务做出更好决策的案例，关于 DoorDash 早期的一系列精彩故事，以及更多内容。如果你喜欢这个播客，别忘了在常用的播客应用或 YouTube 上订阅和关注。这是避免错过未来节目的最好方式，也对播客有很大帮助。

(00:01:44):
现在，让我们欢迎 Jessica Lachs。Jessica，非常感谢你能来，欢迎来到本播客。

---

### (00:01:55) Jessica Lachs

**English:**
Thank you so much for having me. I'm very excited to be here.

**中文翻译:**
非常感谢邀请我。我很高兴能来到这里。

---

### (00:01:58) Lenny Rachitsky

**English:**
So you've built one of the largest and most respected data teams in all of tech. I've heard from a number of people that look to you for advice when they're trying to build and scale their data teams. And then DoorDash in particular is an incredibly complex business. There's three or maybe even four sites to the marketplace. There's this operational element. From the outside, it just feels extremely complicated and wild. I imagine from the inside it's even more wild. Let's talk about some of the things you've learned about building and scaling the team. You have a fairly contrarian perspective on how to structure data teams. This was referenced when we had Elizabeth Stone on the podcast too. She approaches data the same way. So I'd love to hear just your take on how to structure data teams within companies.

(00:02:42):
This episode is brought to you by Webflow. We're all friends here, so let's be real for a second. We all know that your website shouldn't be a static asset. It should be a dynamic part of your strategy that drives conversions. That's business 101. But here's a number for you. 54% of leaders say web updates take too long. That's over half of you listening right now. That's where Webflow comes in. Their visual-first platform allows you to build, launch, and optimize webpages fast. That means you can set ambitious business goals and your site can rise to the challenge. Learn how teams like Dropbox, IDEO, and Orangetheory trust Webflow to achieve their most ambitious goals today at webflow.com.

(00:03:30):
This episode is brought to you by Anvil. Their document SDK helps product teams build and launch software for documents fast. Companies like Carta and Vouch Insurance use Anvil to accelerate the development of their document workflows. Getting to market fast is a top priority for product teams, and the last thing that you or your developers want is to build document workflows from scratch. It's time-consuming, expensive, and distracts from core work. You could stitch together multiple tools and manage those integrations or you can use an all-in-one document SDK.

(00:04:04):
Most product managers will tell you, "Paperwork sucks." Anvil's document SDK helps teams get to market fast, incorporate your brand's style, and give you back time to focus on your company's core differentiated features. For your users paperwork often starts with an AI-powered web form styled and embedded in your application. From there, you can route data to your backend systems and to the correct fields in your PDFs via API. Complete the process with a white labeled e-signature. The best part about Anvil is the level of customization their SDK provides. Non-technical folks love Anvil's drag-and-drop builder and developers love their flexible APIs and easy-to-understand documentation.

(00:04:46):
Build documents software fast with Anvil, that's useanvil.com/Lenny to learn more or start a free trial. That's useanvil.com/Lenny.

**中文翻译:**
你建立了科技界规模最大、最受推崇的数据团队之一。我听很多人说，当他们试图建立和扩展数据团队时，都会向你寻求建议。DoorDash 本身是一个极其复杂的业务。这个市场有三个甚至四个维度。还有运营层面的因素。从外部看，它感觉非常复杂且疯狂。我猜从内部看肯定更疯狂。让我们谈谈你在建立和扩展团队方面学到的一些东西。关于如何构建数据团队，你有一个相当“反直觉”的观点。我们邀请 Elizabeth Stone 上节目时也提到过这一点，她处理数据的方式也是一样的。所以我想听听你对公司内部如何构建数据团队的看法。

(00:02:42):
本集节目由 Webflow 赞助。大家都是朋友，咱们实话实说。我们都知道网站不应该是一个静态资产，它应该是你驱动转化的战略中动态的一部分。这是商业常识。但这里有一个数据：54% 的领导者表示网页更新耗时太长。这超过了现在正在收听节目的一半人。这就是 Webflow 大显身手的地方。他们的视觉优先平台允许你快速构建、发布和优化网页。这意味着你可以设定宏伟的业务目标，而你的网站能够应对挑战。访问 webflow.com，了解 Dropbox、IDEO 和 Orangetheory 等团队如何信任 Webflow 来实现他们最宏伟的目标。

(00:03:30):
本集节目由 Anvil 赞助。他们的文档 SDK 帮助产品团队快速构建和发布文档软件。Carta 和 Vouch Insurance 等公司使用 Anvil 来加速其文档工作流的开发。快速进入市场是产品团队的首要任务，你或你的开发人员最不想做的就是从头开始构建文档工作流。这既费时又昂贵，还会分散核心工作的精力。你可以拼凑多个工具并管理这些集成，也可以使用一体化的文档 SDK。

(00:04:04):
大多数产品经理都会告诉你，“文书工作很糟糕”。Anvil 的文档 SDK 帮助团队快速进入市场，融入你的品牌风格，并让你有更多时间专注于公司的核心差异化功能。对于你的用户来说，文书工作通常始于一个嵌入在应用程序中的 AI 驱动的网页表单。从那里，你可以通过 API 将数据路由到后端系统和 PDF 中的正确字段。通过白标电子签名完成整个过程。Anvil 最棒的地方在于其 SDK 提供的定制化程度。非技术人员喜欢 Anvil 的拖放式构建器，开发人员则喜欢他们灵活的 API 和易于理解的文档。

(00:04:46):
使用 Anvil 快速构建文档软件，访问 useanvil.com/Lenny 了解更多信息或开始免费试用。

---

### (00:04:59) Jessica Lachs

**English:**
There's two main things that I think are important when you're structuring a team. The first is I believe that analytics should have a seat at the table just like engineering and product and the business folks, the operators. For me, analytics is a business impact driving function and not purely a service function. I think there are analytics teams at other companies where they are answering people's questions, maybe even through Jira tickets, we're building dashboards. That was never really of interest to me. That wasn't the team that I wanted to build.

(00:05:35):
For me, it's about finding opportunities, about having a point of view on the decisions that we should make, not just answering the why but answering the so what. "So what do we do now that we know this?" And so that's definitely one thing as far as my point of view on building a data team. I think the second thing which may be a little more contrarian is I think there are people out there who think that analytics should be embedded into business units. I strongly disagree. I believe a central model, a center of excellence is superior and I'm happy to talk about why, but that's something that I feel quite strongly about. We've tried it or I shouldn't... well, we've experimented in the past with the alternative, so putting it into a business unit and it's just much more problematic and I think the value you get from a central model is far greater than some of the things that you might lose.

**中文翻译:**
在构建团队时，我认为有两件事非常重要。第一，我相信分析团队应该在决策桌上占有一席之地，就像工程、产品和业务运营人员一样。对我来说，分析是一个驱动业务影响的职能，而不仅仅是一个纯粹的服务职能。我知道有些公司的分析团队只是在回答别人的问题，甚至是通过 Jira 工单来处理，或者只是在做仪表盘。我对这些从来不感兴趣，那不是我想建立的团队。

(00:05:35):
对我来说，分析是关于发现机会，关于对我们应该做出的决策持有观点，不仅是回答“为什么”，还要回答“那又怎样”。“既然我们知道了这一点，那我们该怎么办？”这是我关于建立数据团队的第一个观点。第二点可能更具争议性：有些人认为分析人员应该嵌入到各个业务部门（Business Units）中。我强烈反对。我认为集中式模型（Central Model），即“卓越中心”（Center of Excellence），是更优越的。我很乐意谈谈原因，但我对此感受非常强烈。我们过去尝试过——或者说实验过——另一种方案，即把分析人员放入业务部门，结果问题多得多。我认为从集中式模型中获得的价值远大于你可能失去的东西。

---

### (00:06:36) Lenny Rachitsky

**English:**
Yeah, let's definitely talk about it. And just to make sure people understand, when you say central versus embedded, is that in terms of reporting lines, in terms of their goals?

**中文翻译:**
是的，我们一定要聊聊这个。为了确保大家理解，当你提到“集中式”与“嵌入式”时，是指汇报关系（Reporting Lines）还是指他们的目标？

---

### (00:06:44) Jessica Lachs

**English:**
It's a great question. So mostly it's in terms of reporting lines because I think on the goal side, that is something where we have the same goals that our partner teams have, and I think that that's actually an important part of a successful central model. So when I say central model, it just means that for marketing analytics, marketing analytics is part of the broader analytics team. It does not sit and report in through marketing. Just to clarify.

**中文翻译:**
问得好。主要是在汇报关系方面。因为在目标方面，我们与合作伙伴团队的目标是一致的，我认为这实际上是成功的集中式模型的重要组成部分。所以当我提到集中式模型时，它的意思是，比如市场分析（Marketing Analytics），它是整个大分析团队的一部分，而不是直接向市场部门汇报。

---

### (00:07:13) Lenny Rachitsky

**English:**
Got it. So the reporting functions at some companies, there's the head of marketing or some partners to the head of marketing where the data, say, analyst or biz ops people or data scientists would report potentially to them and that's it. And they're not as connected to the core, to the rest of the data team, the rest of the analytics team versus-

**中文翻译:**
明白了。在某些公司，汇报职能是这样的：市场总监或其合伙人，数据分析师、业务运营人员或数据科学家可能会直接向他们汇报。这样他们与核心数据团队或其他分析团队的联系就不那么紧密了，而相比之下——

---

### (00:07:30) Jessica Lachs

**English:**
Exactly. Yeah.

**中文翻译:**
没错。

---

### (00:07:31) Lenny Rachitsky

**English:**
Yeah.

**中文翻译:**
是的。

---

### (00:07:31) Jessica Lachs

**English:**
So you'd have a bunch of smaller, of course, data teams that sit embedded within the functions. And I understand why business leaders like that. You're embedded within the function, so you're a part of the team. That ownership, that camaraderie that comes with that, I think you can solve for that. But I do understand that that is a benefit. I think the other benefit of course is the business leaders control the roadmaps so they get to dictate the work. They know that they have help and resources in that area when they need them. So that certainty, that control, I totally understand the value there, but I think that those are two things that you can solve for if you know that those are the biggest issues with a central team. So for us, we have a central analytics team, but we are divided up into pods that map perfectly with how product engineering, operations marketing are structured as well.

(00:08:33):
And so our team de facto has these folks embedded with our partner teams, even though the reporting structure is up through a central org through me. And that helps the team to feel like they are one team, both in terms of the analytics team feeling like it's one team, but also to use the marketing example, the marketing folks are one team and because the analytics shares the same goals as the marketing leaders, your incentives are aligned to work on the most important things and your success is their success and vice versa. So I think that that's been really a happy medium, but still preserves all the benefits of a central org. And there are a lot of them.

**中文翻译:**
所以你会有一堆散落在各个职能部门的小型数据团队。我理解为什么业务领导喜欢这种模式。你嵌入在职能部门中，所以你是团队的一员。那种归属感和随之而来的战友情，我认为是可以解决的，但我确实理解那是它的一个优点。另一个优点当然是业务领导可以控制路线图（Roadmaps），所以他们可以决定工作内容。他们知道在需要时在该领域有现成的帮助和资源。这种确定性和控制力，我完全理解其价值。但如果你知道这些是集中式团队最大的问题，你是可以解决它们的。对我们来说，我们有一个集中的分析团队，但我们被分成了一个个小分队（Pods），这些小分队与产品工程、运营、市场营销的结构完美对应。

(00:08:33):
因此，我们的团队在事实上（de facto）是嵌入在合作伙伴团队中的，尽管汇报结构是向上通过集中组织汇报给我。这有助于团队感觉到他们是一个整体——既让分析团队感到是一个整体，又以市场营销为例，让市场人员感到是一个整体。因为分析人员与市场领导者共享相同的目标，你的激励机制是对齐的，大家都在做最重要的事情，你的成功就是他们的成功，反之亦然。所以我认为这是一种非常理想的折中方案，同时保留了集中式组织的所有好处。而且好处非常多。

---

### (00:09:23) Lenny Rachitsky

**English:**
I want to hear about them, but I think something that some people may think when you say essential org is like a silo data team that sits there and they're like a service org a little bit within the company. It's like, "Hey, I need some data help." And you try to convince that, "Hey, I need some help on this thing." And that's not what you're saying.

**中文翻译:**
我想听听这些好处。但我认为当你说“集中式组织”时，有些人可能会想到一个孤立的数据团队，坐在那里，有点像公司内部的服务机构。就像是，“嘿，我需要一些数据方面的帮助”，然后你得去说服他们，“嘿，我在这件事上需要帮忙”。但你说的并不是这种模式。

---

### (00:09:41) Jessica Lachs

**English:**
Oh, no. No, no, no. That job seems terrible. I don't want that job. No, to the earlier point, we have a seat at the table. We are business partners, we are thought partners with our product counterparts, with our engineering counterparts, with our ops counterparts, and we again, share the same goals and have the same initiatives that they do. And it's just our job to come at it from a data-driven place. We bring to the table insights on things that we've noticed, deep dives that we do to understand the problems that we're trying to solve better. If we need to grow, what are the most efficient ways to grow? What are the trade-offs that we have to make? Where are their pockets of opportunity? That is what I expect my team to be able to bring to that table, the proverbial table, that we want to see that. And in order to earn their spot, that's the deal. We get the seat at the table and we need to earn it by bringing opportunities that we all can go and go after.

**中文翻译:**
噢，不。不，不，不。那份工作听起来太糟糕了，我可不想做。不，回到刚才那点，我们在决策桌上占有一席之地。我们是业务伙伴，是产品、工程、运营同事的思考伙伴。再说一次，我们共享相同的目标，拥有相同的倡议。我们的工作只是从数据驱动的角度出发。我们带来我们观察到的洞察，通过深度挖掘（Deep Dives）来更好地理解我们要解决的问题。如果我们需要增长，最有效的方式是什么？我们需要做出哪些权衡？机会点在哪里？这就是我期望我的团队能带到那张“决策桌”上的东西。为了赢得那个席位，这就是交易：我们获得了席位，但我们需要通过带来大家可以共同追求的机会来证明自己的价值。

---

### (00:10:52) Lenny Rachitsky

**English:**
Awesome. So in a sense, it is embedded. They're embedded in cross-functional teams across the org, but they report up to essential org to you essentially in the end?

**中文翻译:**
太棒了。所以从某种意义上说，它是嵌入式的。他们嵌入在整个组织的跨职能团队中，但最终汇报给集中式组织，也就是汇报给你？

---

### (00:11:01) Jessica Lachs

**English:**
Yeah.

**中文翻译:**
是的。

---

### (00:11:02) Lenny Rachitsky

**English:**
Cool. What are some of the benefits of this approach?

**中文翻译:**
酷。这种方法有哪些好处？

---

### (00:11:05) Jessica Lachs

**English:**
Oh, there's so many. Okay, so the first thing is a consistent and high talent bar. I think this is something I saw when we would have some pockets of analytics folks embedded is having a consistent bar for talent in terms of what we're looking for, what are the technical skills, what are the soft skills? And being able to evaluate candidates with that same bar, using our same rubric. You just get more consistent and higher talent in my opinion. I think that's number one. Number two is actually growth opportunities. So if you're siloed, you may be the most senior data person within... I keep picking on marketing. But you might be the most senior data scientist within marketing. Where do you go from there? I think when you have the central org, you're able to see if there are growth opportunities in other areas within the company.

(00:12:04):
And so that really helps folks to stay engaged because they can look at new problems if the problems they've been working on for several years are getting maybe boring and they want something new, there's an opportunity, move from marketing over to merchant analytics. And then I think similarly, if there isn't a promotion or room to grow, if you want to be a people manager and there just isn't a people management role within your functional area, well, you've got 10 other ones to look at and maybe there is that opportunity. So I think it helps with the growth opportunities for the team, which helps to retain talent. So that's a second thing. The third thing is just consistency of methodologies and metrics. So you don't have sales that was as defined by one team and sales as defined by another team. You just have sales and everybody is using the same metrics, the same methodologies, and you're able to improve your methodologies with input from more people.

(00:13:10):
And rather than recreating the wheel, building the same churn prediction model on six different teams. You can instead build one and have the input of six different teams. I think that's definitely another benefit. Also helps you just scale because you start to see the same problems across teams and so you're like, "Ooh, this is an issue that we need to get ahead of. This is something we need to automate," or, "This is something that we need to improve upon," or, "a problem that is going to grow as our business, as our teams scales." So I think it helps you see around corners a little bit more.

(00:13:45):
And then just lastly, there's a team culture brand. I think that's really important, not just externally for recruiting top talent, but the team is really proud to be members of the analytics team. We have a unique culture of learning, of sharing. You have someone you can go to talk about your challenges. You have someone who can peer review your work. I think just having that team culture that we have is really important. And it's a lot harder to get when you have the individual silos, particularly in an earlier stage when it's a smaller team, you just don't have as many people around. Everybody wants to have friends at work and we're creating an environment where they can find like-minded data nerds.

**中文翻译:**
噢，太多了。首先是统一且高标准的人才门槛。我发现当分析人员散落在各处时，很难保持一致的人才标准——包括我们寻找什么样的特质、技术技能和软技能。通过集中管理，我们可以用同样的标准和评估表来评估候选人。在我看来，这样你能获得更一致、更高素质的人才。这是第一点。第二点是成长机会。如果你被孤立在某个部门，你可能是市场部（我老拿市场部举例）里最资深的数据人员了，接下来你还能去哪？而在集中式组织中，你可以看到公司内其他领域的成长机会。

(00:12:04):
这有助于保持员工的参与度，因为如果他们处理了几年同样的问题觉得无聊了，想要尝试新东西，他们可以从市场分析转到商户分析。同样，如果没有晋升空间，或者你想做管理但你所在的职能领域没有管理岗位，你还有其他 10 个领域可以看，也许那里就有机会。所以这有助于团队的职业成长，从而留住人才。第三点是方法论和指标的一致性。你不会遇到一个团队定义的“销售额”和另一个团队定义的完全不同的情况。全公司只有一个“销售额”定义，大家使用相同的指标和方法论，并且你可以通过更多人的输入来改进这些方法论。

(00:13:10):
与其在六个不同的团队里重复造轮子、建立六个相同的流失预测模型，不如建立一个，并集合六个团队的智慧。这绝对是另一个好处。这也有助于规模化，因为你开始在不同团队中看到相同的问题，你会意识到：“噢，这是一个我们需要提前解决的问题，这是我们需要自动化的东西”，或者“这是随着业务和团队规模扩大而会变得严重的问题”。所以它能帮你更早地预见未来的挑战。

(00:13:45):
最后一点是团队文化品牌。我认为这非常重要，不仅是对外招聘顶尖人才，团队成员也会为自己是分析团队的一员而感到自豪。我们有一种独特的学习和分享文化。你有可以倾诉挑战的对象，有可以帮你进行同行评审（Peer Review）的人。拥有这种团队文化非常重要。而当你处于孤立状态时，这很难实现，尤其是在早期团队规模较小时，你周围没有那么多人。每个人都想在工作中有朋友，我们创造了一个环境，让他们能找到志同道合的“数据宅”。

---

### (00:14:33) Lenny Rachitsky

**English:**
It makes me think about Airbnb's first data team. I don't know if you know Riley Newman well, but he built Airbnb's first data team and it was actually an analytics team. They called themselves the 'A-Team' on the point of culture, and that always felt a lot of fun and they loved being part of that team.

**中文翻译:**
这让我想起了 Airbnb 的第一支数据团队。我不知道你是否熟悉 Riley Newman，他建立了 Airbnb 的第一支数据团队，实际上那是一支分析团队。在文化方面，他们称自己为“A-Team”，这听起来总是很有趣，他们也很喜欢成为那个团队的一员。

---

### (00:14:33) Jessica Lachs

**English:**
Yeah. We have the same, but now I feel a lot less special for coming up with that name.

**中文翻译:**
是的。我们也一样，但现在我觉得起这个名字没那么特别了（笑）。

---

### (00:14:55) Lenny Rachitsky

**English:**
Oh, you called it A-Team also?

**中文翻译:**
噢，你们也叫 A-Team？

---

### (00:14:56) Jessica Lachs

**English:**
Yeah, we got the A-Team, yeah.

**中文翻译:**
是的，我们也有 A-Team。

---

### (00:14:59) Lenny Rachitsky

**English:**
And then I think they moved away from it when there was a push. Now we're data scientists, we're not analytics or analysts. And that was like, I don't know, 10 year ago, like [inaudible 00:15:08] data science. We're data scientists.

**中文翻译:**
后来我想他们放弃了这个称呼，因为当时有一股潮流，大家都说“我们是数据科学家，不是分析师”。那是大约 10 年前的事了，大家都想叫数据科学家。

---

### (00:15:09) Jessica Lachs

**English:**
We'll always be the A-Team.

**中文翻译:**
我们永远都是 A-Team。

---

### (00:15:11) Lenny Rachitsky

**English:**
There's so many threads I want to follow here, one that's a tangent, but something that I think a lot of people struggle with is you talked about how you want your data team, your analytics team to be proactive, to find opportunities, to give you ideas, to help you figure out what to build, not just answer questions. At the same time, there are many questions that teams need to get answered. Do you have any advice for just how to set up a team where they both find time to explore, dig, show opportunities and come up with big ideas and also, "Hey, we just need to figure out the funnel conversion on this thing," or "Hey, what do you think? What's happening in China right now?" Thoughts there?

**中文翻译:**
这里有很多我想深入探讨的话题。有一个题外话，但我认为很多人都在为此挣扎：你提到你希望你的数据团队、分析团队是主动的，去发现机会，提供想法，帮助确定要构建什么，而不仅仅是回答问题。但与此同时，团队确实有很多问题需要回答。你对于如何组建一个团队有什么建议，让他们既能腾出时间去探索、挖掘、展示机会并提出大想法，又能兼顾“嘿，我们需要弄清楚这个东西的漏斗转化率”或者“嘿，你觉得中国现在发生了什么”这类日常需求？

---

### (00:15:47) Jessica Lachs

**English:**
Yeah, such a good question. I think it's something that never gets easier. You have to be very intentional to carve out time for exploratory work for deep dives because as you mentioned, there are always more questions and more work to be done than hours in the day. And so I think being intentional about it and setting goals for your team around finding these insights through self-directed work is an important mechanism for holding ourselves accountable to that goal because it tends to be the first thing that goes when you get a lot of inbounds, you're like, "All right, well, let's deep dive on something that I don't know if it's really something. It could be high ROI, it could be low ROI, I don't know." So the expected value is lower than this known thing that I can deliver and make someone happy.

(00:16:42):
So I think to prevent that time from just slipping away, you really have to be intentional. We would do hackathons for our team to carve out days to just go and look into these really interesting things and find opportunities. And I think we have the support of our business partners because so many great insights have come from these deep dives and it really has been some of the work that drives future roadmaps. So they're always really great at allowing us to have this time and actually encourage us often to have this time for some self-directed work, to go find the next big opportunity.

**中文翻译:**
是的，问得太好了。我认为这永远不会变得容易。你必须非常有意识地为探索性工作和深度挖掘留出时间，因为正如你所说，问题和工作永远比时间多。因此，我认为有意识地为此设定目标，让团队通过自主工作去发现洞察，是让我们对该目标负责的重要机制。因为当你收到大量需求时，探索性工作往往是第一个被牺牲的。你会想：“好吧，让我们深入研究一下这个我不确定是否有价值的东西。它的投资回报率（ROI）可能很高，也可能很低，我不知道。”所以它的预期价值看起来比那些能立刻交付并让人满意的已知任务要低。

(00:16:42):
为了防止这些时间白白溜走，你必须非常有意识。我们会为团队举办黑客松（Hackathons），专门腾出几天时间去研究那些非常有趣的事情并寻找机会。我们得到了业务合作伙伴的支持，因为许多伟大的洞察都源自这些深度挖掘，而且这些工作确实驱动了未来的路线图。所以他们总是很支持我们拥有这段时间，甚至经常鼓励我们进行自主研究，去寻找下一个大机会。

---

### (00:17:23) Lenny Rachitsky

**English:**
If there's no answer that comes to mind, that's totally cool. But is there an example of one of these insights that someone on the data team came up with that led to something big for DoorDash that you're able to share?

**中文翻译:**
如果一时想不起来也没关系。但有没有这样一个例子：数据团队的某个人提出了一个洞察，最终为 DoorDash 带来了重大影响？

---

### (00:17:35) Jessica Lachs

**English:**
So one interesting example was from a hackathon we did a couple of years ago where we were looking at referral as a channel for consumer acquisition. And when you compare that channel to others, it was below average in terms of the engagement you'd see from consumers who came through that channel and the payback period. And rather than just lowering spend on referrals and moving right along, we really wanted to understand what was happening. And so during the hackathon, we did a deep dive into referral. We actually tried referring each other. We tried committing referral fraud, creating new accounts to get around rules. And we uncovered a lot of fraudulent behavior through this deep dive. We ordered so many cupcakes to the office. I remember using referral credits because you had to place an order to be able to get the referral bonus. So we would create the account, place the orders, and we just kept ordering cupcakes.

(00:18:39):
And what we noticed was that referral as a channel was a bit misleading when you would look at the average in terms of payback and that it was really a bimodal distribution and you had one group of really great consumers who were referring other really great consumers, and the payback on those consumers was really strong. In fact, if that's all you saw, you would spend a lot more on that channel.

(00:19:08):
And then what was happening was you had this other group of consumers that were not as good people who were posting referral codes online and getting people who were just in it to get free discounts and credits. And we had at that point in time, pretty lax fraud rules. And we didn't have caps on these things. All of which came about from this deep dive where we found that this group of consumers was really a drag on the efficiency of this marketing channel. And so I think that's an example of a few things that we like to do at DoorDash. One being these deep dives and taking the time to really understand the problem and then ultimately make a bunch of recommendations for what we should do, including better fraud checks, caps on referrals, et cetera, et cetera. But also how the average can be incredibly misleading. And so looking at distributions and trying to break down what you're seeing to find ways that you can optimize in ways that you can gain in efficiencies.

**中文翻译:**
一个有趣的例子来自几年前我们举办的一次黑客松。当时我们在研究“推荐”（Referral）作为获取消费者渠道的效果。与其他渠道相比，通过推荐渠道进入的消费者的参与度和回本周期（Payback Period）都低于平均水平。我们没有简单地削减推荐预算然后了事，而是非常想了解发生了什么。所以在黑客松期间，我们对推荐渠道进行了深度挖掘。我们甚至尝试互相推荐，尝试进行推荐欺诈，创建新账户来绕过规则。通过这次深挖，我们发现了大量的欺诈行为。我们往办公室订了超级多纸杯蛋糕。我记得当时为了获得推荐奖励必须下单，所以我们创建账户、下单，然后不停地订纸杯蛋糕。

(00:18:39):
我们注意到，如果只看回本周期的平均值，推荐渠道的数据是具有误导性的。它实际上是一个双峰分布（Bimodal Distribution）：有一群非常优秀的消费者在推荐其他优秀的消费者，这部分人的回本周期非常短。事实上，如果你只看到这部分数据，你会往这个渠道投入更多资金。

(00:19:08):
而另一群消费者则没那么好，他们把推荐码发到网上，吸引那些只想薅羊毛、拿免费折扣和积分的人。当时我们的反欺诈规则比较松，也没有设上限。所有这些发现都源于那次深挖，我们发现这部分消费者严重拖累了该营销渠道的效率。我认为这是一个很好的例子，展示了我们在 DoorDash 喜欢做的几件事：一是进行深度挖掘并花时间真正理解问题，最终提出一系列建议（包括更好的欺诈检查、推荐上限等）；二是意识到平均值可能极具误导性。因此，要观察分布情况，并尝试拆解你所看到的数据，以找到优化和提高效率的方法。

---

### (00:20:21) Lenny Rachitsky

**English:**
That's an awesome story, great memory to come up with that one. So this is a really good example of a way to carve out time for the data team to think long-term, think look for opportunities, find big ideas. So the hackathon is one idea. Imagine many data people are struggling often to push back on asks that are just like, "h, we need to know. We just need this one thing. Here's a question, just answer this one question part." Do you have any advice to data to get better at pushing back? Sounds like a bit of cultural like, "We have time, we need to work on these bigger things." But just any advice for data leaders or data ICs to find time for these sorts of things?

**中文翻译:**
这个故事太棒了，亏你能记得这么清楚。这是一个为数据团队腾出时间思考长期问题、寻找机会和重大想法的绝佳例子。黑客松是一个主意。我猜很多数据人员经常在拒绝需求时感到挣扎，比如别人说：“噢，我们需要知道这个。我们就需要这一件事。这有个问题，帮我回答一下。”你对数据人员如何更好地拒绝需求有什么建议吗？听起来这有点像文化层面的，比如“我们有时间，我们需要处理这些更大的事情”。但对于数据领导者或数据个人贡献者（IC）来说，有什么建议能帮他们为这类事情腾出时间吗？

---

### (00:20:59) Jessica Lachs

**English:**
Yeah, saying no to someone is never fun. I think as a self-proclaimed people-pleaser, you don't want to say no, especially when it's something you can do and you know that you can very easily with maybe an hour's work, make someone happy. I think it's really important to establish a culture and for leadership to really establish the rules of working and that operating model so that some of the junior folks aren't forced to always have to say no. And I think one of the ways we do that is through our goaling. So because our goals are the same as our business partners, we're able to pretty easily say, "Hey, we've got a limited amount of time. These are our goals. What are the most important things that we are going to work on this week or this month in order for both of us to hit our goals?"

(00:21:49):
And so when something comes up to be able to say, "Hey, this data poll that you want me to do, is this more important than these other three things that I was going to be working on? Yes or no?" And I think sometimes people don't necessarily realize the trade-offs, and when you make them apparent and you put them front and center, they realize that, "Oh, actually, you know what? That asset's not important. That can wait." So I think that that's definitely something I would recommend, which is always share the trade-offs. Don't suffer in silence with, "How am I going to do all four of these things?" Bring it up and say, "Hey, this is what I was planning to do. If you want me to do this extra new thing, then one of these other things is going to have to drop.

(00:22:36):
I personally don't think that your ask is more important than these three things, but maybe there's new information, maybe there's context I don't have, so let's talk about it." Rather than just being like, "No, I won't do that." That's not a great approach either. I think having the conversation and constantly reevaluating your prioritization to make sure you're working on the most important things or your team is working on the most important things is really good hygiene to have with your business partner. So some teams do that through a weekly standup like, "Here's what we're going to do this week. Do we like this prioritization? Do we not?" Some folks do it less formally than that. I think you got to figure out what works for you. But to the earlier point, it's a conversation with your engineering partner, your product partner, your ops partner, you're all on the same team, you're all trying to achieve the same goals and you're all incentivized to have your analytics team working on the most impactful things.

**中文翻译:**
是的，拒绝别人从来不是件愉快的事。作为一个自认的“讨好型人格”，你不想说不，尤其是当那是你能做到的事情，而且你知道只要花一个小时就能让别人开心时。我认为建立一种文化非常重要，领导层需要建立工作规则和运营模式，这样初级员工就不必被迫总是说不。我们实现这一点的方法之一是通过设定目标。因为我们的目标与业务合作伙伴的目标一致，我们可以很轻松地说：“嘿，我们的时间有限。这些是我们的目标。为了让我们双方都能达成目标，这周或这个月我们要做的最重要的事情是什么？”

(00:21:49):
所以当有新需求出现时，你可以问：“嘿，你想要我做的这个数据提取，是否比我原计划要做的另外三件事更重要？是还是不是？”我认为有时人们并没有意识到其中的权衡（Trade-offs），当你把这些权衡摆在台面上时，他们会意识到：“噢，其实那个需求没那么重要，可以等等。”所以我绝对推荐的一点是：永远分享权衡。不要一个人默默承受“我该怎么把这四件事都做了”的压力。把它提出来并说：“嘿，这是我原计划要做的。如果你想让我做这件额外的新事，那么原计划中的某件事就得放下。

(00:22:36):
我个人认为你的需求没有这三件事重要，但也许有我不知道的新信息或背景，所以我们聊聊吧。”这比直接说“不，我不做”要好得多。我认为通过对话并不断重新评估优先级，以确保你或你的团队在做最重要的事情，是与业务伙伴保持良好关系的“卫生习惯”。有些团队通过每周站会来做这件事，比如：“这是我们本周要做的，这个优先级大家认可吗？”有些人则没那么正式。你需要找到适合自己的方式。但回到刚才那点，这是与工程、产品、运营伙伴的对话，你们在同一个团队，目标一致，大家都有动力让分析团队去做最有影响力的事情。

---

### (00:23:32) Lenny Rachitsky

**English:**
This advice is great for any role basically. And if I were to summarize it to a couple words, it's just prioritize and communicate what your priorities are and then align on the trade-offs of shifting your priorities.

**中文翻译:**
这个建议基本上适用于任何职位。如果我用几个词来总结，那就是：确定优先级，沟通你的优先级，然后就改变优先级所带来的权衡达成一致。

---

### (00:23:45) Jessica Lachs

**English:**
Every once in a while you just throw one over and say, "You know what? This is quick. I'll do it." At least I do. I think sometimes just knock it out, build some goodwill. I think that that's also important. But usually it's not something you can do in five minutes and in that case it's that ruthless prioritization for sure.

**中文翻译:**
偶尔你也可以破例说：“你知道吗？这个很快，我顺手做了。”至少我会这么做。我认为有时顺手完成一些小事能建立好感，这也很重要。但通常情况下，事情不是五分钟就能搞定的，那种情况下就必须进行冷酷的优先级排序。

---

### (00:24:05) Lenny Rachitsky

**English:**
And then there's also the side that you talked about of just show that you can provide value doing these things that are longer term, like prove your worth. "Hey, look at all these opportunities I found for our team over time, I should keep spending time on these other areas," versus the on fire stuff.

**中文翻译:**
还有你提到的另一面，就是展示你在做这些长期事情时能提供价值，证明你的价值。比如：“嘿，看我这段时间为团队发现的所有这些机会，我应该继续在这些领域投入时间”，而不是只处理那些火烧眉毛的急事。

---

### (00:24:18) Jessica Lachs

**English:**
Exactly.

**中文翻译:**
没错。

---

### (00:24:19) Lenny Rachitsky

**English:**
When you're hiring people for your team, I'm curious what you look for and you think is incredibly important that maybe other people aren't prioritizing as much. What do you focus on when you're hiring?

**中文翻译:**
当你为团队招聘人才时，我很想知道你看重什么，以及你认为哪些特质非常重要但别人可能没那么重视。你招聘时的重点是什么？

---

### (00:24:31) Jessica Lachs

**English:**
Yeah. So everybody needs to have a certain set of technical skills. I think that's a non-starter. We have a technical bar, we do a technical screen. So I think that's table stakes. There's some really unique characteristics that I've noticed when I look at some of the top talent that I've had on the team or have on the team. I think the first thing is just curiosity. You can't teach curiosity, or at least I haven't found a way to do it. If somebody else knows how, please let me know. Somebody who is just self-motivated to pull on the threads when they find them. So they don't just answer a question. They're like, "Hmm, this thing seems a little odd. I'm going to dig in and look. Even though I could say I'm done, I answered the question, I did the thing I was going to do." The person that has that curiosity, something seems off, something doesn't really make sense and goes and proactively looks into what that is. That is just so valuable. So I really look for that curiosity and that self-motivation to do it without being told.

**中文翻译:**
是的。每个人都需要具备一定的技术技能，这是基础。我们有技术门槛，会进行技术筛选，这是“入场券”。但在我观察团队中一些顶尖人才时，我发现了一些非常独特的特质。我认为第一点就是好奇心。好奇心是教不出来的，至少我还没找到方法。如果有人知道怎么教，请告诉我。我想要的是那种发现线索后会自觉顺藤摸瓜的人。他们不只是回答一个问题，他们会想：“嗯，这件事看起来有点奇怪，我要深挖一下。虽然我可以就此打住说我做完了，但我还是想看看。”那种拥有好奇心、觉得哪里不对劲、逻辑不通就主动去探究的人，简直太宝贵了。所以我非常看重这种好奇心和不待扬鞭自奋蹄的主动性。

---

### (00:25:39) Lenny Rachitsky

**English:**
How do you test for that? How do you do that in an interview and get a sense of if they're good at that?

**中文翻译:**
你如何测试这一点？在面试中如何感知他们是否擅长这个？

---

### (00:25:43) Jessica Lachs

**English:**
One way you can do it through the questions you ask is have something that is not quite right within the case that you're presenting and see if people notice first and foremost. And even if they don't, if you point it out like, "Where do they go with that?" I think that that's something that you can test for. I think you can also ask for examples that for these folks typically will highlight this, they'll talk about, "I noticed this thing, and so we decided to investigate." So I think that there are ways that you can get that signal through the interview process, but it's really hard. I think testing for hard skills is a lot easier than testing for soft skills. And I think in some of the questions we ask, we'll ask a question with the idea that we're assessing something separate than what the question is necessarily asking. And I think that this is one example of where that really works.

**中文翻译:**
一种方法是在你展示的案例中加入一些不太对劲的地方，看看对方是否首先能注意到。即使他们没注意到，当你指出来时，看他们会如何反应。我认为这是可以测试的。你也可以让他们举例，这类人通常会提到：“我注意到了这件事，所以我们决定调查一下。”我认为在面试过程中有办法获得这种信号，但这确实很难。测试硬技能比测试软技能容易得多。在我们问的一些问题中，我们会带着评估某种特质的目的去提问，而那个问题本身问的可能并不是那件事。我认为这就是一个非常有效的例子。

---

### (00:26:47) Lenny Rachitsky

**English:**
You said that you give them a case. What does that look like? What is the actual approach to how you do this interview?

**中文翻译:**
你说你会给他们一个案例。那是什么样的？你做这种面试的具体方法是什么？

---

### (00:26:52) Jessica Lachs

**English:**
Our interview process has in the early stages a coding exercise. So we do our technical screen and a shortened version of a business case. So real world problem solving. Typically, it's something actually from DoorDash history, like a real problem that we had to see how people can problem solve on the fly. I think that that's an important skill to be able to have, which is, how do you take a problem, break it down, talk through it. A little bit like some of those consulting cases that you hear about, but something that's really rooted in real problems. And I think you can learn a lot from those types of cases where, yes, you get to see how people handle ambiguity and structured problem solving, but ultimately most people get something wrong. They make an assumption that's wrong because well, I would hope that the interviewer knows the business better than the interviewee.

(00:27:56):
And seeing how people react to being told they're wrong is a really important signal in my opinion. Seeing how people respond, how they're able to take new information and pivot, how they're able to make a decision. So that's another thing that I like to see in cases where, hey, you may not know the real right decision. You might say, "Hey, I could see it going one way, I could see it going the other way." But I always push people to say, "If you had to make a call right now, what would it be?" So are people able to have a point of view without full information because that's life. Sometimes you have to just pick a direction and make a decision even though you don't have perfect information. So I like to see some of these softer skills and how they manifest throughout a case interview, even if it's not specifically what I'm asking with the literal problem we're solving in the case.

**中文翻译:**
我们的面试流程在早期阶段有一个编程练习。我们会进行技术筛选，以及一个缩减版的业务案例分析。也就是解决现实世界的问题。通常是 DoorDash 历史上真实发生过的问题，以此观察人们如何即兴解决问题。我认为这是一项重要的技能：如何拿出一个问题，将其拆解并清晰地论述。有点像你听到的那些咨询公司的案例面试，但它是深深植根于真实问题的。我认为你可以从这类案例中学到很多：你可以看到人们如何处理模糊性（Ambiguity）和进行结构化的问题解决。但最终，大多数人都会犯错，他们会做出错误的假设，因为我希望面试官比应聘者更了解业务。

(00:27:56):
在我看来，观察人们在被告知出错时的反应是一个非常重要的信号。看他们如何回应，如何吸收新信息并调整方向，以及如何做出决策。这是我在案例中喜欢看到的另一件事：嘿，你可能不知道真正正确的决定，你可能会说：“我觉得可以往这边走，也可以往那边走。”但我总是会逼问：“如果你现在必须做决定，你会选哪个？”人们是否能在信息不完全的情况下持有观点？因为这就是生活。有时你必须在没有完美信息的情况下选择一个方向并做出决定。所以我喜欢观察这些软技能在案例面试中是如何体现的，即使这并不是我在解决那个具体字面问题时直接问的内容。

---

### (00:28:57) Lenny Rachitsky

**English:**
Along these lines, but in a different direction. You don't actually have a deep data science data background before you got into this stuff. I know you had some art background, you had an art portfolio back in school, and I think a lot of people wouldn't imagine that for someone being head of analytics for a company like DoorDash. I don't exactly know the question, but I guess is there anything there that you think would be interesting for people to know or hear?

**中文翻译:**
顺着这个话题，但换个方向。在进入这个领域之前，你实际上并没有深厚的数据科学背景。我知道你有一些艺术背景，在学校时还有艺术作品集。我想很多人无法想象像 DoorDash 这样公司的分析负责人会有这样的背景。我不知道该怎么问，但我想知道关于这一点，有没有什么你觉得值得大家了解或听听的内容？

---

### (00:29:24) Jessica Lachs

**English:**
Yeah, it's funny. I joke that I have a job I'd never be hired for because I don't have a traditional data science background. And I know that Elizabeth Stone on her podcast with you talked a lot about her non-traditional background for a CTO. So hey, maybe there's something to it. But I became a data scientist out of necessity. I completely self-taught in terms of SQL and Python and I did it because there was a need at DoorDash for someone to help figure out what the right goals were, how we set those goals, how we were performing different markets early in the DoorDash story, so 10 years ago at this point. And I think I just gravitated towards that type of work and Tony recognized that superpower in me even though I don't have that formal training. So yeah, I'm a bit of an artist for fun, but I guess a data scientist in practice or for career.

(00:30:31):
But I think that that non-traditional background has been a great thing because I'm able to hire people who have the technical skills that I don't have, the folks with PhDs in statistics and the data scientists, machine learning and otherwise. I am able to hire those folks and yet keep them really focused on driving business impact because my background was on the finance side, and so I've always been a pragmatist. And for me, the purpose of our team is to drive business impact. And so the mix between the technical skills of the smarter people that I've hired, the smarter than myself, and my grounding in driving business impact has been a really great partnership.

**中文翻译:**
是的，很有趣。我常开玩笑说，如果我去应聘我现在这份工作，我肯定不会被录用，因为我没有传统的数据科学背景。我知道 Elizabeth Stone 在你的播客中也谈到了她作为 CTO 的非传统背景。所以，嘿，也许这其中确实有些门道。我是出于需要才成为数据科学家的。我的 SQL 和 Python 完全是自学的，我这么做是因为当时 DoorDash 需要有人来弄清楚正确的目标是什么、如何设定这些目标、以及我们在不同市场的表现如何。那是 10 年前 DoorDash 刚起步的时候。我想我只是被这类工作吸引了，而 Tony（DoorDash CEO）在我身上发现了这种超能力，尽管我没有接受过正式培训。所以，是的，我业余是个艺术家，但在实践和职业生涯中是个数据科学家。

(00:30:31):
但我认为这种非传统背景是一件好事，因为我能够雇佣那些拥有我所不具备的技术技能的人，比如统计学博士、机器学习数据科学家等。我能雇佣这些人，同时让他们专注于驱动业务影响，因为我的背景是金融方面的，所以我一直是个务实主义者。对我来说，团队存在的目的就是驱动业务影响。因此，我雇佣的那些比我更聪明的技术人才，与我专注于驱动业务影响的务实态度相结合，形成了一种非常棒的合作关系。

---

### (00:31:21) Lenny Rachitsky

**English:**
That's quite an inspiring story for someone that is just starting out and doesn't necessarily have a lot of experience in data, but also just generally. I think this is a really cool example. You could be successful in a field that you don't have a ton of background in. I'm curious what you think it was in you that allowed you to succeed in this and get to where you are today. What do you think you did right or what is some habits or ways of thinking that you think helped you achieve that?

**中文翻译:**
对于那些刚起步、不一定有很多数据经验的人，甚至对所有人来说，这都是一个非常励志的故事。这是一个非常酷的例子：你可以在一个你没有深厚背景的领域取得成功。我很想知道，你认为自己身上具备什么特质让你能在这个领域取得成功并走到今天？你觉得你做对了什么，或者有哪些习惯或思维方式帮助你实现了这一目标？

---

### (00:31:52) Jessica Lachs

**English:**
First off, I have imposter syndrome like everybody else. So it's not like I have this crazy sense of confidence of like, "Oh, I can do anything." I definitely have the same doubts that others have. I think part of it was probably not even realizing what I was doing. When you're at a startup and things are moving quickly and you see a problem, and I've always liked solving problems, so I was like, "All right, how do I solve this problem?" It was like, "Oh, well, I need access to the data. I don't have access to the data. All right, I'll ask an engineer to get me the data. Well, this isn't going to scale. I can't always bother an engineer, so how do I figure out how to get the data myself? Well, let's learn Python." So I think it happened organically and I don't think I realized at the time what I was even doing.

(00:32:41):
And then I think if you think about things from first principles about what you need right now in front of you to unblock yourself or solve a problem, and you just focus on that instead of thinking about a global org that you're trying to build. I think that that helps. So for me, it was always about solving the problem in front of me the best way I could. And if that meant I needed to hire an engineer to report into me through the finance org, then that was what we were going to do and nobody was going to tell me I couldn't do it. So I think it's a belief in yourself, and ultimately it's just my desire to solve problems and figure out what has to get done is, I think, ultimately how it came about.

**中文翻译:**
首先，我和其他人一样也有“冒名顶替综合征”（Imposter Syndrome）。我并不是那种有着疯狂自信、觉得“噢，我无所不能”的人。我绝对也有和别人一样的自我怀疑。我认为部分原因可能是我当时甚至没意识到自己在做什么。当你在一家初创公司，事情发展得很快，你看到了一个问题，而我一直喜欢解决问题，所以我会想：“好吧，我该怎么解决这个问题？”然后发现：“噢，我需要访问数据。我没有权限。好吧，我找个工程师帮我拿数据。但这不可持续，我不能总麻烦工程师，所以我怎么才能自己拿到数据？好吧，学学 Python 吧。”所以这一切都是自然而然发生的，我想我当时甚至没意识到自己在做什么。

(00:32:41):
我认为，如果你从第一性原理（First Principles）出发，思考你现在需要什么来扫清障碍或解决问题，并专注于此，而不是去想你要建立一个什么样的全球组织，这会有所帮助。对我来说，重点始终是用我能想到的最好方式解决眼前的问题。如果这意味着我需要雇佣一名工程师并在财务组织下向我汇报，那我们就这么做，没人能告诉我不能这么做。所以，这是一种对自己的信心，归根结底，是我解决问题和弄清楚必须完成什么的渴望，促成了这一切。

---

### (00:33:30) Lenny Rachitsky

**English:**
I love that so much. There's so many elements there that I think a lot of people can learn from. I feel like there's also this underlying current of you're just motivated for this to work. You wanted DoorDash to succeed, and you're just like, "I will do what I need to do to make this happen. I need to solve these problems. I'm not going to overthink. Do I have the skills necessarily to do these things [inaudible 00:33:48]?"

**中文翻译:**
我太喜欢这段话了。这里有很多值得学习的元素。我感觉还有一种潜在的动力，就是你非常希望这件事能成。你希望 DoorDash 成功，所以你会想：“我会尽一切努力让它实现。我需要解决这些问题。我不会过度思考我是否具备做这些事的技能。”

---

### (00:33:48) Jessica Lachs

**English:**
Yeah, I think I'm competitive. I think that a trait that you find in a lot of early DoorDash folks and current DoorDash folks, to be honest, just wanting to win and being willing to do whatever you need to win. So roll up your sleeves, do something that's not your job. I think back to early days of taking out the garbage on Saturday nights because it needed to get done. I think that that was something that is ingrained in our culture from Tony Xu, from our founder and CEO, and I think that really resonated with me, and I feel like I've always operated that way as well. And I think that that helped me in my career to be able to do what I've done without really thinking about it too much.

**中文翻译:**
是的，我觉得我很有竞争意识。说实话，这是你在很多早期 DoorDash 员工和现在的员工身上都能看到的特质：就是想赢，并且愿意为了赢去做任何需要做的事。所以卷起袖子，做一些不是你本职工作的事。我回想起早期周六晚上去倒垃圾，因为垃圾满了得有人倒。我认为这是从我们的创始人兼 CEO Tony Xu 那里根植于我们文化中的东西，这让我产生了共鸣，我觉得我也一直是这样行事的。我认为这在我的职业生涯中帮助了我，让我能够不假思索地完成我所做的一切。

---

### (00:34:40) Lenny Rachitsky

**English:**
Are there any other memories or stories of the early days of DoorDash that would be fun to share? Something that sticks with you of like, "Wow, I can't believe that's what it was like?"

**中文翻译:**
还有什么关于 DoorDash 早期的回忆或故事可以分享吗？有没有什么让你觉得“哇，真不敢相信当时是那样的”？

---

### (00:34:49) Jessica Lachs

**English:**
Oh man, there's so many, including so many mistakes that we've made. But I think something that really stands out to me is before I moved to the analytics area, I was actually a GM. I was the first GM at DoorDash and I was in Boston in 2014 launching the city of Boston when nobody knew who we were. And we would wake up early in the morning, 5 A.M. and we would go out, it was the winter of 2014. We'd go out and we'd hand out promo codes consumers outside of the [inaudible 00:35:30] in Boston, and these promo cards would be attached to kind bars so people would take them. And the whole team, it was a small team, there were four of us, but the whole team would go out in the morning to do this. And I think back to our sales guy, shout out to Joey G. So Joe Graccio is our sales guy in Boston-

(00:35:47):
[inaudible 00:35:47] Joey G.

(00:35:51):
And he was gold on signing merchants on the platform. That was how he was gold. His compensation was tied to that. And yet in the morning when we would go out, he was with us handing out promo codes because he was part of the team because he wanted to win. We wanted to grow the business. And I think that that is just a great example of the culture that Tony and the early employees and Stanley and Andy, other co-founders really instilled in all of us early in those days. So I think that that ownership, that extreme ownership of the outcome is definitely one of the things.

(00:36:32):
I think the other is just being very customer first. And I say customer, I mean consumers, dashers and merchants as all being our customers. And the first time I ever went to the office headquarters in Palo Alto, which at the time was in an animal hospital. The first time I went there, there was a huge site outage and the whole company, it was like 20 people at the time, the whole company jumped online to do customer support, to answer the phones, to make sure that folks were getting refunds for orders that weren't going through, make sure the orders that were out there were getting delivered, just dropped everything and hopped on to do support.

(00:37:15):
And I was brand new, didn't really know how to use the tools, and so it was like, "How can I be useful?" And so back in those days, we used to order dinner to the office using DoorDash. And so in order to preserve about three dashers who would've had to deliver food to us, I was like, "I'm going to go out, go out dashing, go get everyone pizza so that we could feed the masses doing credits and refunds and do what we had to to make sure that we were serving our customers well." And I think that night was one of the largest refunds as a percent of our bank account that we had ever given out. And I think Tony, there were two examples that he's talked about where we just gave a lot of money back to customers because it was the right thing to do because our service failed and we wanted to do right by them.

(00:38:06):
So I think that those are two stories that stick out in my mind and really highlight culturally what makes DoorDash unique and what I think has been a really important part of our success.

**中文翻译:**
噢天哪，太多了，包括我们犯过的很多错误。但让我印象最深的一件事是，在我转到分析领域之前，我实际上是一名总经理（GM）。我是 DoorDash 的第一位 GM，2014 年我在波士顿负责开城，当时没人知道我们是谁。我们会清晨 5 点起床，那是 2014 年的冬天，我们会出去给波士顿的消费者发优惠码。这些优惠码贴在 Kind 能量棒上，这样人们才会拿。整个团队——当时只有四个人——每天早上都会全员出动去做这件事。我想起了我们的销售员，向 Joey G（Joe Graccio）致敬，他是我们在波士顿的销售员。

(00:35:51):
他的考核指标（Goal）是签约商户入驻平台。他的薪酬是与此挂钩的。然而每天早上我们出去时，他都会和我们在一起发优惠码，因为他是团队的一员，因为他想赢。我们想让业务增长。我认为这就是 Tony、早期员工以及 Stanley、Andy 等联合创始人当时植根于我们所有人身上的文化的绝佳例子。这种对结果的“极致责任感”（Extreme Ownership）绝对是关键之一。

(00:36:32):
另一件事就是“客户至上”。我说的客户包括消费者、外卖员（Dashers）和商户。我第一次去帕洛阿尔托的总部办公室时，那里当时还在一家动物医院里。我第一次去的时候，网站发生了大面积故障，当时全公司大约 20 个人，所有人立刻上线做客服，接电话，确保没成交的订单能退款，确保外卖员手里的订单能送达。大家放下手里的一切去支援客服。

(00:37:15):
我当时是新人，不太会用那些工具，所以我想：“我怎么才能帮上忙？”那时候我们习惯用 DoorDash 往办公室订晚餐。为了省下那三个本来要给我们送餐的外卖员，我说：“我要出去跑单（Dashing），去给大家买披萨。”这样大家就能一边处理退款一边吃上饭，我们也能确保服务好客户。我记得那天晚上我们发出的退款金额占我们银行账户余额的比例是历史上最高的之一。Tony 曾提到过两个例子，我们为了做正确的事给客户退了很多钱，因为我们的服务失败了，我们想补偿他们。

(00:38:06):
这两个故事一直印在我的脑海里，它们突显了 DoorDash 在文化上的独特性，我认为这也是我们成功的关键部分。

---

### (00:38:20) Lenny Rachitsky

**English:**
It reminds me of the story that Tony and all the early employees, and I imagine you did this just like, "We're dashers," it's like a rotation where you dash for a while. Is that part of the culture?

**中文翻译:**
这让我想起了一个故事，Tony 和所有早期员工，我想你也做过，就是“全员跑单”。这是一种轮岗制度，大家都要去送一段时间外卖。这是文化的一部分吗？

---

### (00:38:32) Jessica Lachs

**English:**
Yeah, so we have a program, a WeDash program, and Keith Yandell, who's our chief business officer, did your podcast last year and he talked about this. But four times a year all the employees go out and go dashing or do customer support, and it's part of our culture that I love. I actually go pair dashing, so I go together with one of my colleagues. We've done it for years now, and it's a fun thing that we do together four times a year. Actually, usually more than that. And it's important because you get to use the product, you build empathy with all the audiences. I think all of us order DoorDash a lot, so we've built empathy with consumers. But being able to go and understand what it's like to go out dashing and when you're in the restaurant going and talking with merchants and seeing the experience from their point of view, I think it's just incredibly important. And of course we find a lot of bugs like, "Hmm, this doesn't work the way it should, let me report this." So I think it's also just great for catching bugs in the product.

**中文翻译:**
是的，我们有一个叫 WeDash 的项目。我们的首席业务官 Keith Yandell 去年上你的播客时也提到过。每年四次，所有员工都要出去跑单或者做客服，这是我非常喜欢的文化。我实际上是“结伴跑单”，我和一位同事搭档。我们已经坚持好几年了，每年四次（通常更多）一起去跑单是一件很有趣的事。这很重要，因为你可以亲自使用产品，与所有受众建立同理心。我想我们所有人都会经常订 DoorDash，所以我们对消费者很有同理心。但能够去了解跑单是什么感觉，去餐厅和商户聊天，从他们的角度看体验，我认为这极其重要。当然，我们也会发现很多 Bug，比如：“嗯，这个功能没按预期工作，我要上报一下。”所以这对发现产品 Bug 也很有帮助。

---

### (00:39:43) Lenny Rachitsky

**English:**
This episode is brought to you by Attio, a radically new type of CRM. There's a world where your CRM is powerful, easily configured, and deeply intuitive. Attio makes that a reality. Attio is built specifically for the next era of companies. It syncs with your data sources, easily configures to their unique structures and works for any go-to-market motion from self-serve to sales led. Attio automatically enriches your contacts, syncs your e-mail and calendar, gives you powerful reports and lets you quickly build Zapier style automations.

(00:40:17):
The next era of companies deserves more than an inflexible one-size-fits-all CRM. Join modal, replicate 11 labs and more, and scale your startup to the next level. Head to at attio.com/Lenny and you'll get 15% off your first year. That's attio.com/Lenny.

**中文翻译:**
本集节目由 Attio 赞助，这是一种全新的 CRM（客户关系管理系统）。在理想的世界里，你的 CRM 应该是功能强大、易于配置且极具直觉的。Attio 让这成为了现实。Attio 专为下一代公司打造。它能与你的数据源同步，轻松配置以适应独特的结构，并适用于从自助服务到销售主导的任何进入市场（GTM）模式。Attio 会自动丰富你的联系人信息，同步你的电子邮件和日历，提供强大的报告，并让你快速构建 Zapier 风格的自动化流程。

(00:40:17):
下一代公司不应该受困于僵化的、通用的 CRM。加入 Modal、Replicate、11 Labs 等公司的行列，将你的初创公司提升到新的水平。访问 attio.com/Lenny，首年可享受 15% 的折扣。

---

### (00:40:39) Lenny Rachitsky

**English:**
I want to come back to a thread, something you mentioned where you and a lot of the early team had felt extreme ownership over the company and that's why a lot of this stuff happened. For people, every founder, every product team, they're going to like, "Yes, we need that. Let's make sure everyone on the team feels extreme ownership." Is there anything that you think that the early team did to create that or is it hiring, just pick people that will have that feeling already, or is cultural?

**中文翻译:**
我想回到刚才的一个话题。你提到你和很多早期团队成员对公司都有“极致责任感”，这就是为什么发生了这么多感人的故事。对于每个创始人、每个产品团队来说，他们都会想：“是的，我们需要这个。让我们确保团队中的每个人都有极致责任感。”你认为早期团队做了什么来创造这种氛围？是靠招聘（只选那些已经具备这种特质的人），还是靠文化建设？

---

### (00:41:05) Jessica Lachs

**English:**
I think it's both. It's definitely cultural. I think it comes from the top and I think that Tony exhibits this extreme ownership and looks for it in others. So I think that helps. But I think even today I expect of my team that same extreme ownership over the outcomes. And so I'm more interested in our team figuring out how to solve a problem than the box that someone fits in like, "I'm a data scientist and so I only do these things." Right? It's like, "No. I mean, yes, you are a data scientist, but your goal is to figure out what's happening, and if that means that you're going to pick up the phone and call customers, then that is what you're going to do." And I think that expecting that and setting that as the norm for the team, this ownership of the outcome is something that we continue to do at DoorDash and instill in everyone whether you were early or just joined last month.

**中文翻译:**
我认为两者兼有。这绝对是文化层面的。我认为它源自高层，Tony 展现了这种极致责任感，并在他人身上寻找这种特质。这很有帮助。但即使在今天，我仍然期望我的团队对结果负有同样的极致责任感。我更感兴趣的是我们的团队如何想办法解决问题，而不是某人被框在某个职位里，比如“我是数据科学家，所以我只做这些事”。不，虽然你确实是数据科学家，但你的目标是弄清楚发生了什么，如果这意味着你需要拿起电话给客户打电话，那你就得这么做。我认为，将这种对结果的责任感作为团队的规范和期望，是我们在 DoorDash 持续在做的事情，并灌输给每一个人，无论你是早期员工还是上个月刚入职。

---

### (00:42:16) Lenny Rachitsky

**English:**
Is there an example of that that comes to mind of someone practicing extreme ownership, like a data scientist calling someone or something along those lines?

**中文翻译:**
有没有什么例子让你印象深刻？比如某个数据科学家通过打电话或其他方式践行极致责任感的例子？

---

### (00:42:16) Jessica Lachs

**English:**
Yeah, so I actually had a meeting yesterday morning with the team that's working on some of our affordability initiatives and we had shipped something that we expected to work, and it didn't. And instead of, "You can dig into the data," to understand the segments of consumers that you would expect it to work with and those that it wouldn't, of course we did that. But ultimately it was like, "I don't know why." And that's where qualitative research is superior to quantitative research, it's asking for the context, to actually talking to people to figure out what was the motivation, what worked, what didn't for them. And so the team, data scientists included, just sat and made phone calls. And so they were talking about what they found from those phone calls and that's going to inform future decisions. And I think rather than saying, "Well, that's what the qualitative research team is supposed to do," it's like, "No, no, no, that is what our team, anyone's team is supposed to do because that's what's needed to unblock us from this next test that we want to run because we need to know what we are testing."

(00:43:23):
So I think that it happens every day. I think I really love when I see team members go outside the traditional bounds of what a data science role might be and do some product management work, do some engineering work. I think that that's part of what keeps the job interesting. I think it's part of what makes our team special is that that is not only allowed, it's encouraged, and probably also a reason why we've had folks who've gone from my team to the product org and to the ops org and to the finance org is because they get to do and experience parts of that job and get a good sense for what that's like and then realize it's something that they love. So I think it's definitely something we encourage at DoorDash.

**中文翻译:**
有的。实际上昨天早上我刚和负责“可负担性”（Affordability）倡议的团队开过会。我们上线了一个功能，原本预期会奏效，结果却没有。除了挖掘数据来了解哪些消费者群体有效、哪些无效（我们当然做了这些），最终我们还是会面临“我不知道为什么”的困惑。这就是定性研究（Qualitative Research）优于定量研究的地方：询问背景，真正与人交谈，弄清楚他们的动机是什么，什么对他们有用，什么没用。于是整个团队，包括数据科学家，就坐在那里打电话。他们讨论了从电话中发现的情况，这将为未来的决策提供参考。我认为，与其说“那是定性研究团队该做的事”，不如说“不，那是我们团队、任何团队都该做的事”，因为这是为了扫清我们下一个测试的障碍，我们需要知道我们在测试什么。

(00:43:23):
我认为这种情况每天都在发生。我非常喜欢看到团队成员跳出数据科学角色的传统界限，去做一些产品管理或工程方面的工作。我认为这正是让工作保持有趣的原因。这也是我们团队特别的地方：这不仅是被允许的，而且是被鼓励的。这可能也是为什么我们有很多成员从我的团队转到了产品、运营或财务部门，因为他们有机会体验这些工作的一部分，了解那是什么感觉，然后意识到那是他们热爱的事情。所以这绝对是我们在 DoorDash 鼓励的事情。

---

### (00:44:17) Lenny Rachitsky

**English:**
I love that. I want to move in a slightly different direction. One of your colleagues told me that you are incredibly good at defining metrics, which is so important to get right for a business, especially when it's complex at DoorDash. And I hear you're especially good at finding the right metric to drive the right incentive, especially when the business is really messy and things like that. So I'm just curious what you've learned about how to pick good metrics and align incentives well.

**中文翻译:**
我太喜欢这个了。我想换个方向。你的一位同事告诉我，你非常擅长定义指标，这对于业务（尤其是像 DoorDash 这样复杂的业务）来说至关重要。我听说你特别擅长在业务非常混乱的情况下找到正确的指标来驱动正确的激励。所以我很好奇，关于如何选择好的指标并对齐激励措施，你学到了什么？

---

### (00:44:45) Jessica Lachs

**English:**
I've learned a lot of things about metrics, mostly from bad metrics. I actually think you learn a lot from picking the wrong metric. Ultimately, you want to find a short-term metric you can measure that drives a long-term output. So people always talk about, "Oh, we want to drive an improvement in retention." Retention is a terrible thing to goal on because it's almost impossible to drive in a meaningful way in the short term, and yet you want to be able to experiment and iterate quickly. So what are the things that drive retention? What are the inputs? So I think it's really important to find the right inputs, and then through experimentation test whether or not those short-term inputs are driving the long-term output that you're looking for. I think that's one thing. I think keeping things simple is another thing I've learned over the years, maybe it's data scientists, but they tend to love these composite metrics with a coefficient.

(00:45:44):
"We're going to wait this input at X and this input at X+2." And then you end up with a metric that nobody really understands that doesn't actually mean anything. And you're like, "I don't know if a 0.1 increase is it a lot? Is it good? Is it bad?" So they're just hard to work with.

(00:46:07):
And so I always encourage folks, just pick something simple, even if it's not perfect and your composite would be more perfect. If people understand it, if they have an intuition around it, if it's something that people can talk about across the company, it's going to be a much better metric in terms of driving real outcomes than your made up composite score that nobody understands. So I think keeping things simple is also really important. And then I think the last thing I'll say is it's important to understand how metrics across the company equate to one another.

(00:46:43):
And so we spend a lot of time quantifying things in terms of a common currency. So for example, if I were to lower price by a dollar, what would I get in terms of, we'll say, volume? Well, what if I lowered delivery times by a minute? What do I get for that in terms of volume? And so now you can make trade-offs between maybe your marketing team and your logistics team because you have this common currency that everyone can talk about. And so we've done that. We've tried to quantify all of the levers of our business, price, selection, quality in common terms, so that if we have, say, a dollar to spend, we know what we get depending on where we put it, over what timeframe. I think that that helps us make decisions more quickly because we know what our options are. We know we have our inventory of things that we can do, short-term, long-term, and what we get for it. So it definitely helps us to make decisions more quickly and hopefully better decisions.

**中文翻译:**
关于指标，我学到了很多，大部分是从糟糕的指标中学到的。实际上，我认为从选错指标中学到的东西更多。最终，你想要找到一个可以衡量的短期指标，它能驱动长期的产出。人们总是说：“噢，我们想提高留存率。”留存率是一个很糟糕的目标，因为在短期内几乎不可能以有意义的方式去推动它，而你又希望能快速实验和迭代。那么，驱动留存的因素是什么？输入（Inputs）是什么？我认为找到正确的输入非常重要，然后通过实验测试这些短期输入是否真的在驱动你想要的长期产出。这是第一点。第二点是保持简单。这些年来我发现，也许是数据科学家的天性，他们喜欢带有系数的复合指标（Composite Metrics）。

(00:45:44):
比如：“我们要给这个输入 X 的权重，给那个输入 X+2 的权重。”最后你得到一个没人能真正理解、也没有实际意义的指标。你会想：“增加 0.1 算多吗？是好还是坏？”这种指标很难应用。

(00:46:07):
所以我总是鼓励大家：选个简单的，哪怕它不完美，哪怕你的复合指标理论上更完美。如果人们能理解它，对它有直觉，如果它是全公司都能讨论的东西，那么在驱动实际结果方面，它会比没人理解的复合分数有效得多。所以保持简单非常重要。最后一点是，理解全公司不同指标之间是如何等价的。

(00:46:43):
我们花了很多时间用“通用货币”来量化事物。例如，如果我降价 1 美元，我能获得多少订单量？如果我把配送时间缩短 1 分钟，又能获得多少订单量？现在，你就可以在市场团队和物流团队之间进行权衡，因为你有了大家都能讨论的通用货币。我们已经做到了这一点：尝试用通用术语量化业务的所有杠杆——价格、选择、质量。这样如果我们有 1 美元预算，我们知道把它投在不同地方、不同时间段会得到什么。这有助于我们更快地做出决策，因为我们知道所有的选项，知道我们能做的短期和长期事情的清单，以及回报是什么。这确实能帮我们做出更快、更好的决策。

---

### (00:47:56) Lenny Rachitsky

**English:**
I could see as you talk about this why this is so important in a marketplace, especially a multi-sided marketplace where there's always trade-off decisions between supply investment and demand growth and dasher growth. I don't even know, my brain would explode trying to think about all these things, so I get exactly why this is so important to business. Okay. And then in terms of the simple recommendation, I think when people hear like, "Yeah, keep it simple," they're like, "Yeah, yeah, we're going to keep it simple." What are some things that point to, "This is not simple," that tell you like, "No, this is way too complicated. You should try to simplify this metric even though it's not ideal. It's not the perfect metric, but it needs to be simpler."

**中文翻译:**
听你这么说，我能理解为什么这在双边市场（Marketplace）中如此重要，尤其是一个多边市场，总是在供应投入、需求增长和外卖员增长之间做权衡。光是想想这些我的大脑都要爆炸了，所以我完全理解为什么这对业务如此重要。关于“保持简单”的建议，我想当人们听到“保持简单”时，他们会说：“行行行，我们会保持简单的。”但有哪些迹象会让你觉得“这不简单”，或者让你说“不，这太复杂了，你应该简化这个指标，即使它不理想、不完美，但它必须更简单”？

---

### (00:50:56) Jessica Lachs

**English:**
Yeah. So we had a score for merchant health, which we tried experimenting with, which was a combination of factors that we had found would lead to a merchant being on the platform and getting an order. So we wanted to make sure that the merchant had active hours on the platform and had images and had a full menu that was accurate and robust. A number of different inputs. And we created a composite that weighted all of these different inputs. And then we were like, "What is our merchant health score?" And you were like, "It's 0.35. It's not 35%. So what is that, that 0.35? I don't know what it is." So instead of that, we said, "What are the most important factors in order... First, let's measure how many of the new merchants are getting an order within their first, say, seven days on the platform.

(00:51:57):
And then let's look at how many of our merchants are doing these things we know are important. So these inputs. So let's goal our team on getting merchant photo coverage up. Let's goal the team on making sure that we have open hours, accurate hours." So yes, someone might say it's simpler to have a composite metric, but it was so hard to understand what it was and how to move it that it became meaningless. And ultimately moving to something that was simpler to understand, even if it meant having three metrics instead of one, it ultimately was better for the team because folks knew what they were trying to move. And so yeah, maybe we missed number four, five and six on the list of things, but you got one through three and that's 95% of it anyway. So once we get success with that 95, then let's talk about figuring out the other 5%.

**中文翻译:**
是的。我们曾尝试实验一个“商户健康分”（Merchant Health Score），它是我们发现的能让商户留在平台并获得订单的各种因素的组合。我们想确保商户在平台上有活跃时长、有图片、有准确且丰富的完整菜单。这是一堆不同的输入。我们创建了一个加权所有这些输入的复合指标。然后我们问：“我们的商户健康分是多少？”得到的回答是：“0.35。”它不是 35%，所以这 0.35 到底是什么？我不知道。于是我们改变了做法，我们说：“最重要的因素是什么……首先，让我们衡量有多少新商户在入驻平台的前 7 天内获得了订单。

(00:51:57):
然后，让我们看看有多少商户在做那些我们认为重要的事情，也就是那些输入。让我们把团队的目标设定为提高商户照片覆盖率，设定为确保营业时间准确。”虽然有人会说拥有一个复合指标更简单，但因为它太难理解、太难被推动，它就变得毫无意义。最终，转向更容易理解的东西——即使这意味着有三个指标而不是一个——对团队来说反而更好，因为大家知道自己要推动什么。是的，也许我们漏掉了列表上的第 4、5、6 项，但如果你抓住了前 3 项，那就已经涵盖了 95% 的影响。一旦我们在那 95% 上取得了成功，再去讨论剩下的 5% 也不迟。

---

### (00:52:55) Lenny Rachitsky

**English:**
It's so funny because this is exactly what we went through at Airbnb, we had, we call that a healthy host. I led the host quality team for a while and we came up with this healthy host metric that was six factors of a host, like the cancellation rate, the review rate, their response rate and things like that. And then we're just like, "Cool, let's move this, let make more hosts healthy." And then you end up like, "Okay, which one do we focus on?," And, "Oh, what about all these others?" And we ended up basically focusing on one at a time. And so let's just make that the goal for now and then rotate through the different biggest [inaudible 00:53:28] opportunities to move. [inaudible 00:53:30].

**中文翻译:**
这太有趣了，因为这正是我们在 Airbnb 经历过的。我们当时有一个叫“健康房东”的指标。我领导过一段时间的房东质量团队，我们提出了这个由六个因素组成的健康房东指标，比如取消率、评价率、回复率等等。然后我们想：“酷，让我们推动这个指标，让更多房东变得健康。”结果最后变成：“好吧，我们该专注于哪一个？”以及“噢，那其他那些因素怎么办？”最后我们基本上变成了每次只专注于一个因素。我们就把那个设为当前目标，然后轮换处理不同的最大机会点。

---

### (00:53:30) Jessica Lachs

**English:**
Exactly. I think in hindsight for the example you give, which of those six things are actually the most important? And if you're able to then quantify which one matters most, you work on that one first and you materially move that one and then you work on the next one. You want to move them all. But being able to prioritize and know what you're going to get for a 20% improvement in, say, your cancellation rate, that's where analytics I think can add a lot of value. Because yes, ultimately you'll get to all of them, but the way you do that and the time can have a meaningful impact on your growth. If you can target the most problematic things first and solve those, you get more bang for your buck and that compounds over time. And so doing the things that matter first and most quickly is a competitive advantage in my opinion.

**中文翻译:**
没错。事后看来，在你举的例子中，那六件事里哪一件才是最重要的？如果你能量化哪一个最重要，你就先攻克那一个，取得实质性进展，然后再攻克下一个。你当然想推动所有的指标，但能够确定优先级，并知道取消率提高 20% 能带来什么，这正是分析团队能发挥巨大价值的地方。因为虽然你最终会处理所有问题，但处理的方式和时机对增长有重大影响。如果你能先瞄准最成问题的事情并解决它们，你的投入产出比会更高，而且这种效果会随时间产生复利。在我看来，先做、快做那些最重要的事情，就是一种竞争优势。

---

### (00:54:21) Lenny Rachitsky

**English:**
The other thing we found along those same lines is rotating between different metrics is so not efficient because you get good at, "We're going to move this metric." And your team's like, "Cool, we totally understand this lever," like cancellation rate. We become really smart at cancellation rate and then three months later, you need to switch to response rate and they have to learn a whole new paradigm of how to think about it. And it's just super inefficient. So we found basically, just keep a team on the metric until there's no more opportunities and give another team one of these other metrics.

**中文翻译:**
我们发现的另一件事是，在不同指标之间轮换是非常低效的。因为当你擅长“推动这个指标”时，团队会觉得：“酷，我们完全理解这个杠杆（比如取消率）。”我们对取消率变得非常精通，但三个月后，你需要切换到回复率，团队就必须学习一套全新的思维模式。这效率极低。所以我们发现，基本上应该让一个团队死磕一个指标，直到没有更多提升空间，然后再把其他指标交给别的团队。

---

### (00:54:50) Jessica Lachs

**English:**
Yeah.

**中文翻译:**
是的。

---

### (00:54:52) Lenny Rachitsky

**English:**
So many lessons. Okay. And the first thing you said on how to pick a good metric about this idea of short-term metrics that have long-term impact. How did you phrase that again?

**中文翻译:**
这么多教训。好的。你说的关于如何选择好指标的第一点，是关于具有长期影响的短期指标。你刚才又是怎么表述的？

---

### (00:55:02) Jessica Lachs

**English:**
Yeah, so we find proxy metrics for long-term outcomes.

**中文翻译:**
是的，我们寻找长期结果的代理指标（Proxy Metrics）。

---

### (00:55:05) Lenny Rachitsky

**English:**
Awesome. It's similar to the simple metric, and it all comes down to, again, just like the metric should be something probably, you can move, you can understand, that's close enough to this ideal, perfect metric, but isn't necessarily the entire ideal. Okay, awesome. Anything else along these lines of just picking metrics, working with metrics that you've learned that would be worth [inaudible 00:55:28]?

**中文翻译:**
太棒了。这与简单指标类似，归根结底还是：指标应该是你能推动、能理解的，它足够接近那个理想的、完美的指标，但不一定非得是那个完美的理想本身。太好了。关于选择指标和应用指标，还有什么你学到的值得分享的吗？

---

### (00:55:27) Jessica Lachs

**English:**
With metrics, we are often looking at the average, and I think we talked about this a little bit earlier, but making sure that you're looking at the edge cases and your fail states is also really important. And so we often will set goals actually and create metrics around those edge cases. So like the disaster deliveries, the ones that go terribly wrong. So we have this concept of Never Delivered, which is orders that are never delivered. We're really great at naming things at DoorDash, and they're very rare. And so if you were just looking at the average effect or the average consumer experience, it would never come up. If you were just measuring quality based on average values of delivery times and lateness [inaudible 00:56:18], these wouldn't show up because they are so rare, but they're terrible. They're terrible experiences for consumers. They lead to churn.

(00:56:27):
They're incredibly expensive because you're refunding an order or repurchasing food and having to send another dasher to deliver that repurchased food. So they're very expensive, they're costly from a consumer experience standpoint. And I think if you're not looking for these fail states, they are often missed. So I think when you're picking metrics, yes, you want to improve engagement and you want to improve conversion, and there's a lot of things that are averages overall that you want to move, but it's so important to find these edge cases in these fail states and actually set concrete goals around eliminating them because it can be really powerful.

**中文翻译:**
对于指标，我们经常看平均值，我们之前也聊过这一点。但确保你关注极端情况（Edge Cases）和失败状态（Fail States）也非常重要。因此，我们实际上经常围绕这些极端情况设定目标并创建指标。比如那些糟糕透顶的配送。我们有一个概念叫“从未送达”（Never Delivered），即订单从未送到。我们在 DoorDash 非常擅长起名（笑）。这种情况非常罕见，所以如果你只看平均效应或平均消费者体验，它永远不会显现出来。如果你只根据配送时间和延迟的平均值来衡量质量，这些问题就不会出现，因为它们太稀少了。但它们太糟糕了，对消费者来说是极差的体验，会导致用户流失。

(00:56:27):
而且它们的代价极其昂贵，因为你要退款，或者重新买一份食物，还得再派一个外卖员去送。从消费者体验的角度来看，它们的成本很高。我认为如果你不主动寻找这些失败状态，它们往往会被忽略。所以当你选择指标时，是的，你想提高参与度和转化率，有很多整体平均值需要推动，但找到这些极端情况和失败状态并围绕消除它们设定具体目标，是非常重要的，因为这会产生巨大的力量。

---

### (00:57:11) Lenny Rachitsky

**English:**
So the tip here is actually make that a goal like, never deliver at some team, just keep cutting that down?

**中文翻译:**
所以这里的建议是，实际上把这个设为一个目标，比如让某个团队负责“从未送达”，不断降低这个数值？

---

### (00:57:17) Jessica Lachs

**English:**
Exactly. So we have part of our quality analytics team and we have product engineering and ops on it as well. Their goal is to eradicate Never Delivered. And in order to do that, you have to understand why they happen. Sometimes it's human error, sometimes it's fraud. And then figure out ways that you can prevent them, that you can fix them while it's happening and ultimately just get rid of them from the system. And you're never going to completely get rid of them, but you can make a meaningful impact to make them even more rare than a fraction of a percent.

**中文翻译:**
没错。我们的质量分析团队中有一部分人，还有产品、工程和运营人员参与其中。他们的目标就是根除“从未送达”。为了做到这一点，你必须理解为什么会发生这种情况。有时是人为错误，有时是欺诈。然后想办法预防它们，在发生时修复它们，并最终将它们从系统中清除。你永远无法完全消除它们，但你可以产生实质性的影响，让它们比百分之零点几还要罕见。

---

### (00:58:00) Lenny Rachitsky

**English:**
Yeah. And I feel like people may be hearing this and like, "Of course, why would you not focus on terrible work experiences?" But I think in most companies, they look at the big numbers, they look at the averages as you said like, "Oh, it almost never happens. Why do we even spend any time on this?" And your point is, you should actually spend time on these really terrible experiences, even if it's a tiny portion of your business. I guess maybe share why that's important. Is it just because that has trickle-down effects on the brand?

**中文翻译:**
是的。我觉得人们听到这里可能会想：“当然了，为什么不关注那些糟糕的体验呢？”但在大多数公司，他们只看大数，看平均值，就像你说的：“噢，这几乎从不发生，我们为什么要在这上面花时间？”而你的观点是，即使这只占业务的极小部分，你也应该在这些极其糟糕的体验上投入时间。你能分享一下为什么这很重要吗？仅仅是因为它对品牌有连锁反应吗？

---

### (00:58:27) Jessica Lachs

**English:**
Yeah, I think it's a couple of things. So just because something doesn't happen frequently doesn't mean that it's not important. So the Never Delivered example is a great one in that this is leading directly to churn and it's also costing a lot of money far more than its frequency would suggest. And I think the fact of the matter is is when you have things that cause churn, you're losing all of that consumer's subsequent orders, and that is not necessarily observed. You're just seeing one bad experience, you're not seeing all of the lost orders because they're lost. And so I think that sometimes this is an area where the data doesn't show you the full picture. And being able to quantify the impact on engagement, on profitability, will make it stand out as something that really, that you would maybe miss if you weren't really looking for it.

(00:59:25):
And then I think the other thing is with something like login errors, sometimes you don't see it in the data because people can't even get into the data. If you're not able to log in, you're not making any purchases, you're not ordering, and so you may not see it in the data that you're looking at. And so that's also something that I think is important for data folks to think about, which is what data don't we have? What data might we be missing? Where might there be opportunities and things that we actually need to identify and fix that we may not see? Because in this case, with login failures, they're not able to log in. They're not in the denominator, and so we're missing out on them from the data set entirely.

**中文翻译:**
是的，我认为有几点原因。首先，某件事发生频率不高并不代表它不重要。“从未送达”就是一个很好的例子，它直接导致用户流失，而且造成的金钱损失远超其发生频率所暗示的。事实是，当某些事情导致流失时，你失去的是该消费者后续所有的订单，而这在数据中不一定能被观察到。你只看到了一次糟糕的体验，却没看到所有那些因为流失而消失的订单。所以我认为有时在这些领域，数据并没有向你展示全貌。能够量化其对参与度和盈利能力的影响，会让它脱颖而出，成为你如果不刻意寻找就会错过的关键点。

(00:59:25):
另一件事是像登录错误。有时你在数据中看不到它，因为人们甚至无法进入系统产生数据。如果你无法登录，你就不会购买，不会下单，所以你在观察的数据中可能根本看不到这些用户。这也是我认为数据人员需要思考的重要一点：我们没有哪些数据？我们可能遗漏了哪些数据？有哪些我们实际上需要识别和修复的机会或问题，是我们看不见的？因为在登录失败的情况下，他们无法登录，就不在分母里，所以我们完全从数据集中错失了他们。

---

### (01:00:15) Lenny Rachitsky

**English:**
Just a couple of more questions. There's one that I skipped that I'm just going to come back to. It's completely out of nowhere, but I think it might be interesting is about a global data org. So you run a global data org, you have data scientists and analysts and biz ops people all over the world, not just the US. I'm curious just how is it different managing data people in different countries versus just the US? What's a big difference?

**中文翻译:**
还有最后几个问题。有一个我跳过的，现在想绕回来。这有点突然，但我认为关于全球数据组织的话题会很有趣。你管理着一个全球数据组织，你的数据科学家、分析师和业务运营人员遍布世界各地，而不仅仅是在美国。我很想知道，管理不同国家的数据人员与只管理美国的人员有什么不同？最大的区别是什么？

---

### (01:00:37) Jessica Lachs

**English:**
Everyone always asks about the differences. What I am surprised by is how similar things are, how similar people are, the data scientists themselves, but also consumers and dashers and couriers, as we call them at Volt. There's a lot more similarities than differences. I do think that when you built a business in the US and then you introduce new countries, having different currencies and different languages adds complexity that you weren't necessarily familiar with. I think similarly in EU countries versus non-EU countries in Europe, there's different regulation. So that adds a fun layer of complexity. So I do think that it adds complexity to the problem set, but ultimately so many of the problems are the same. It feels a little bit like going into a test having seen the answer key. And so for me, there are problems we've encountered at Volt through Volt analytics where I'm like, "Oh, we've had a similar problem.

(01:01:49):
I have an instinct for what the answer might be. Let's still test because there could be differences cultural or otherwise, but I feel like I know where we're going to end." And then sometimes there are problems where it's new for one reason or another, and it's exciting because you're like, "All right, let's see if things are different here." Let's see what ideas might work in a Volt country that don't work in a DoorDash country and vice versa. So I think I tend to focus more on what's the same, and then I'm pleasantly surprised when I find things that are different because that keeps you on your toes and keeps things interesting.

**中文翻译:**
每个人都会问区别。让我惊讶的是，事情竟然如此相似，人也如此相似——无论是数据科学家本身，还是消费者、外卖员（在 Wolt 我们称之为配送员）。相似之处远多于差异。我确实认为，当你在美国建立业务然后引入新国家时，不同的货币和语言会增加你之前不一定熟悉的复杂性。同样，在欧洲，欧盟国家与非欧盟国家的法规也不同。这增加了一层有趣的复杂性。所以我认为这增加了问题的复杂程度，但归根结底，很多问题都是一样的。这感觉有点像带着答案去参加考试。对我来说，在 Wolt 分析中遇到的问题，我会想：“噢，我们遇到过类似的问题。”

(01:01:49):
我对答案可能是什么有一种直觉。我们仍然会测试，因为可能存在文化或其他方面的差异，但我感觉我知道结果会是什么。有时也会遇到因为某种原因而全新的问题，这很令人兴奋，因为你会想：“好吧，让我们看看这里是否有所不同。”看看哪些在 Wolt 国家行得通的想法在 DoorDash 国家行不通，反之亦然。所以我倾向于更多地关注相同点，当我发现不同点时，我会感到惊喜，因为这能让你保持警觉，让事情变得有趣。

---

### (01:02:31) Lenny Rachitsky

**English:**
I'm going to take us to AI Corner. This is a segment we have in the podcast where I try to understand how people are using AI in their day-to-day and in their business. I'm curious if you've found some really interesting way of using AI ideally in... you can go in either one of these directions, and how you or your team work day-to-day using AI tools to make you more efficient, or integrating AI into your product, making DoorDash better.

**中文翻译:**
现在进入“AI 角落”。这是我们播客的一个环节，我试图了解人们在日常生活和业务中是如何使用 AI 的。我很想知道你是否发现了一些非常有趣的 AI 使用方式。你可以从两个方向谈：你或你的团队日常如何使用 AI 工具来提高效率，或者如何将 AI 集成到产品中让 DoorDash 变得更好。

---

### (01:02:59) Jessica Lachs

**English:**
Yeah, I think that there are opportunities in both. I think one of the things I'm really excited about is actually the former. So in helping to make the team more productive, we do something called Office Hours at DoorDash, the analytics team. And it's something that we started eight years ago, and it was a way to provide support for teams that at the time we just didn't have the bandwidth to support. So we would go, in the early days, we'd go sit in a room and we'd say, "Come on in and we'll help you with anything you need help with. We'll help teach you SQL. We'll help look at some of your work. We'll be a thought partner. You could just come learn what we're working on." Whatever it was. We would do two hours every week of Office Hours at different times to be friendly to different time zones.

(01:03:52):
And I think one of the things I'm excited about is being able to really empower some of the folks that are still coming to Office Hours for one thing or another to be able to use AI to help edit queries on their own for example, to be able to say, "Here's a query. I want to make this. Please adjust this to our grocery business so that I can see the GOV for grocery." And so working to build these tools that will help not just our team in terms of time saving, and also to be honest, folks are going to use it on our team, but really to be able to empower non-technical users to be able to do things on their own and not have to take up bandwidth for the analytics team.

**中文翻译:**
是的，我认为这两个方向都有机会。我非常兴奋的一点实际上是前者，即帮助提高团队生产力。在 DoorDash 分析团队，我们有一个叫“办公时间”（Office Hours）的传统。这是我们八年前开始做的，当时是为了给那些我们没有足够带宽去支持的团队提供帮助。早期我们会坐在一个房间里说：“进来吧，我们可以帮你解决任何问题。我们可以教你 SQL，帮你看工作成果，做你的思考伙伴，或者你只是来了解我们在做什么。”每周我们会安排两个小时，在不同时间段以照顾不同时区。

(01:03:52):
让我兴奋的是，我们能够赋能那些因为各种原因来参加“办公时间”的人，让他们能利用 AI 自己修改查询语句。例如，他们可以说：“这是我的查询语句，我想实现这个功能，请帮我把它调整到杂货业务（Grocery Business），这样我就能看到杂货的 GOV（总订单价值）。”所以，我们正在构建这些工具，不仅能帮我们团队节省时间（老实说，我们团队的人也会用），更重要的是能赋能非技术用户，让他们能独立完成任务，而不必占用分析团队的带宽。

---

### (01:04:40) Lenny Rachitsky

**English:**
So essentially it's a chatbot that anyone in the company can talk to you to get advice on how to write SQL queries, query data and things like that?

**中文翻译:**
所以本质上它是一个聊天机器人，公司里的任何人都可以通过它获得关于如何编写 SQL 查询、查询数据等方面的建议？

---

### (01:04:47) Jessica Lachs

**English:**
Yeah.

**中文翻译:**
是的。

---

### (01:04:49) Lenny Rachitsky

**English:**
Is there a clever name for this chatbot per chance?

**中文翻译:**
这个机器人有没有什么俏皮的名字？

---

### (01:04:51) Jessica Lachs

**English:**
So it's not clever. It's called Ask Data AI, and that's named for our internal Slack channel that used to be the open Q&A for people to ask data. So it's not at all clever.

**中文翻译:**
一点也不俏皮。它叫 Ask Data AI，是以我们内部的一个 Slack 频道命名的，那个频道以前就是大家问数据问题的公开问答区。所以它一点也不花哨。

---

### (01:04:51) Lenny Rachitsky

**English:**
But it's clear.

**中文翻译:**
但它很清晰。

---

### (01:05:07) Jessica Lachs

**English:**
But again, it goes with the theme of very, very specific naming conventions that we have at DoorDash; Never Delivered and Ask Data AI.

**中文翻译:**
再次强调，这符合 DoorDash 非常、非常直白的命名传统，比如“从未送达”和“Ask Data AI”。

---

### (01:05:18) Lenny Rachitsky

**English:**
I love it. Just clarity above all else. That's something I've learned from an editor that I work with. Jess, is there anything else that you want to share or leave listeners with? For folks that are trying to build their data teams, make their data teams more efficient, is there any final wisdom nugget you'd want to share?

**中文翻译:**
我喜欢这个。清晰高于一切。这是我从一位合作的编辑那里学到的。Jess，还有什么你想分享或留给听众的吗？对于那些试图建立数据团队、提高数据团队效率的人，你有什么最后的智慧锦囊吗？

---

### (01:05:39) Jessica Lachs

**English:**
I think the only thing that I want to reiterate is that you don't necessarily need a formal training in whatever it is you're building. And I think that also goes towards the folks that you hire onto the team. And so I mentioned earlier that we've had a lot of folks go to product or go to ops from the team. What I didn't mention is how many folks we've actually had join the analytics team from partner teams. So whether that was from engineering or from our ops team or marketing or finance, we are a net importer of talent as opposed to a net exporter of talent. And I think that that's because my own experience coming over from operations, from being a GM and making that transition into analytics, I find that I'm drawn to other folks who want to make a similar transition.

(01:06:39):
Now again, you have to have the technical skills, and most of these folks have acquired these skills on the job, whatever job they are doing at DoorDash before they transition to the analytics team, or they had maybe some formal training in school. But I love seeing the folks that make that transition and actually want to join the analytics team, even if they're not a career or data scientist. I think it creates a really unique environment where you have folks on the team from different backgrounds with different expertise who can teach each other things. So I can teach you how to build a discounted cash flow model in Excel, and I can learn how to make kick-ass slides from someone who has a background in consulting. And I can learn about common gotchas in statistics from someone who comes to us with a Master's or a PhD in statistics, and we've got our econometrics folks and we've got our economists. We just have a group of people with different backgrounds who can all teach each other how to be better. And we're not all carbon copies of each other.

**中文翻译:**
我想重申的一点是：你并不一定需要对你正在构建的东西接受过正式培训。我认为这也适用于你雇佣的团队成员。我之前提到过，我们有很多成员转到了产品或运营部门。但我没提到的是，实际上有多少人从合作伙伴团队加入了分析团队。无论是来自工程、运营、市场还是财务，我们是人才的“净进口国”，而不是“净出口国”。我认为这是因为我自己的经历——从运营、从 GM 转行到分析领域，我发现我会被那些想要进行类似转型的伙伴所吸引。

(01:06:39):
当然，你必须具备技术技能，而这些人中的大多数是在 DoorDash 的岗位上习得这些技能的，或者他们在学校接受过一些正式培训。但我喜欢看到那些完成转型并真心想加入分析团队的人，即使他们不是职业数据科学家。我认为这创造了一个非常独特的环境，团队成员拥有不同的背景和专长，可以互相学习。比如，我可以教你如何在 Excel 中建立现金流折现模型，我可以从有咨询背景的人那里学习如何制作超赞的幻灯片，我可以从统计学硕士或博士那里学习统计学中的常见陷阱。我们还有计量经济学专家和经济学家。我们就是这样一群背景各异的人，互相教导如何变得更好。我们不是彼此的复印件。

---

### (01:07:55) Lenny Rachitsky

**English:**
What I'm hearing is you try to optimize almost for a lot of different complementary skills and very different backgrounds almost.

**中文翻译:**
我听到的是，你几乎是在优化各种不同的互补技能和非常不同的背景。

---

### (01:08:02) Jessica Lachs

**English:**
Exactly. And also people who have experience at different size companies. I think I love folks from startups who have that hustle and grit, but I also love folks who've seen what scale looks like and can help us see around corners as far as what problems we will encounter as the business is growing. And I think it is not just about a diversity of skill and a diversity of background, it's also diversity of prior company and stage. That can be really a unique way to think about structuring your team so that you get the best of both worlds.

**中文翻译:**
没错。还有在不同规模公司工作过的人。我喜欢来自初创公司、拥有那股拼劲和韧劲的人，但我也喜欢那些见过规模化运作的人，他们能帮我们预见业务增长过程中会遇到的问题。我认为这不仅是技能和背景的多样性，也是之前公司经历和阶段的多样性。这是一种构建团队的独特方式，让你能兼收并蓄。

---

### (01:08:40) Lenny Rachitsky

**English:**
Amazing. Well, just when you thought we were done, we reached our very exciting lightning round. Are you ready?

**中文翻译:**
太棒了。就在你以为我们要结束的时候，我们进入了非常刺激的闪电轮环节。准备好了吗？

---

### (01:08:47) Jessica Lachs

**English:**
I am. Let's do it.

**中文翻译:**
准备好了，开始吧。

---

### (01:08:48) Lenny Rachitsky

**English:**
Let's do it. Okay. First question, what are two or three books that you've recommended most to other people?

**中文翻译:**
好。第一个问题，你向别人推荐最多的两三本书是什么？

---

### (01:08:55) Jessica Lachs

**English:**
I tend to read fiction, particularly historical fiction, and I love spy novels. So I think my brain is always in problem-solving mode even when reading. A recent book that I read that I enjoyed was The Rose Code by Kate Quinn, and it's about women code breakers in World War II, and I really enjoyed that. But rather than recommending a book... I guess I did just recommend a book, but rather than recommending another book, I am going to recommend the Libby app and supporting your local public library because I love the library and I love Libby, so I'll give that as my other recommendation.

**中文翻译:**
我倾向于读小说，尤其是历史小说，我也喜欢间谍小说。我想即使在阅读时，我的大脑也处于解决问题的模式。我最近读过并很喜欢的一本书是 Kate Quinn 的《玫瑰密码》（The Rose Code），讲的是二战期间的女性破译员，我非常喜欢。但是，与其推荐另一本书……虽然我刚刚确实推荐了一本，但我还要推荐 Libby 这个应用，并支持你当地的公共图书馆。因为我热爱图书馆，也热爱 Libby，所以这是我的另一个推荐。

---

### (01:09:37) Lenny Rachitsky

**English:**
Beautiful. Very on brand with sharing economy, company stuff. Libby. Cool. Okay, next question. Favorite recent movie or TV show?

**中文翻译:**
太棒了。这非常符合共享经济公司的风格。Libby，酷。好，下一个问题。最近最喜欢的电影或电视节目？

---

### (01:09:46) Jessica Lachs

**English:**
Yeah, another one. I don't actually watch a lot of TV, definitely don't watch a lot of movies. In fact, haven't seen some of the movie greats. I get yelled at a lot by my friend. "I can't believe you haven't seen that." I tend to re-watch things, so series from the past, over and over again. I think it's just like how I shut my brain off. So I've recently re-watched The West Wing, which is one of my favorite shows of all time, probably for the 50th time.

(01:10:15):
And Alias, which was a Jennifer Garner series from the early 2000s. Also, Spy. So I'm noticing a theme. I think I really love the spy genre. But yeah, I've watched those. They're both great, but not at all current.

**中文翻译:**
又是另一个。我其实不怎么看电视，更不怎么看电影。事实上，很多经典的电影大片我都没看过。我经常被朋友吼：“真不敢相信你竟然没看过那个！”我倾向于重温旧剧，一遍又一遍地看过去的剧集。我想这可能是我关闭大脑思考的方式。我最近重看了《白宫风云》（The West Wing），这是我最喜欢的剧之一，大概看了 50 遍了。

(01:10:15):
还有《双面女间谍》（Alias），那是 2000 年代初期 Jennifer Garner 主演的剧。也是间谍题材。所以我发现了一个规律，我真的很喜欢间谍类作品。是的，我看了这些，它们都很棒，但一点也不新。

---

### (01:10:33) Lenny Rachitsky

**English:**
Perfect. Perfectly acceptable. Do you have a favorite product that you recently discovered that you really love?

**中文翻译:**
没问题，完全可以接受。你最近有没有发现什么非常喜爱的产品？

---

### (01:10:39) Jessica Lachs

**English:**
This is a bit of a curveball. So Korean sunscreens. So I burn really easily, so I have to wear sunscreen and I love Korean sunscreens. I was introduced to them by a friend of mine, and they're just far superior to what we have in the US. So I highly recommend people give Korean sunscreens a try, particularly there's a Beauty of Joseon on branded sunscreen. It's just amazing and is delightful to wear, which is important when you have to wear it every day.

**中文翻译:**
这个有点出人意料：韩国防晒霜。我皮肤很容易晒伤，所以我必须涂防晒霜，我非常喜欢韩国的防晒霜。是一个朋友介绍给我的，它们真的比我们在美国能买到的好太多了。所以我强烈建议大家试试韩国防晒霜，特别是一个叫“朝鲜美女”（Beauty of Joseon）的品牌。它太棒了，涂抹感非常愉悦，这对于每天都要涂的人来说很重要。

---

### (01:11:09) Lenny Rachitsky

**English:**
I've been trying to wear more sunscreen as I age, and so this is a really good tip. Was that a brand you recommended?

**中文翻译:**
随着年龄增长，我也在尝试多涂防晒霜，所以这是一个非常好的建议。你推荐的那个品牌叫什么？

---

### (01:11:15) Jessica Lachs

**English:**
Yeah. So Beauty of Joseon is the brand.

**中文翻译:**
是的，品牌叫 Beauty of Joseon。

---

### (01:11:15) Lenny Rachitsky

**English:**
Beauty of Joseon.

**中文翻译:**
Beauty of Joseon。

---

### (01:11:18) Jessica Lachs

**English:**
There's another brand, Isntree, which also has a great sunscreen. But I'll be honest, almost every Korean sunscreen I've tried is great.

**中文翻译:**
还有一个品牌叫 Isntree，防晒霜也很棒。但说实话，我试过的几乎所有韩国防晒霜都很出色。

---

### (01:11:28) Lenny Rachitsky

**English:**
Okay. I'm Googling this as soon as we get off. Do you have a favorite life motto that you often come back to and share and or share with family and friends even more [inaudible 01:11:39]?

**中文翻译:**
好，我一录完就去搜。你有没有什么经常想起并分享给家人朋友的人生座右铭？

---

### (01:11:40) Jessica Lachs

**English:**
I do. So there's a John Steinbeck quote, which I'm not big on quotes, but I like this one, which is that, "It's a common experience that a problem difficult at night is resolved in the morning after the committee of sleep has worked on it." I find that that's something I really live by. First off, I love sleep and I try to get as much of it as possible. But the other thing is that if I'm stuck on a problem or if I am writing a response to something like a tense issue or an emotional issue, often I find that if I put down my thoughts, go to sleep, check it in the morning, I end up with a better outcome. So all of a sudden you have a new perspective and clarity on a problem you were stuck on, or you realize that you weren't clear in the way you were communicating your thoughts because you were emotional about something and you're able to put together a much better response to an e-mail or to whatever problem you're handling. So sleep can solve lots of problems.

**中文翻译:**
有的。约翰·斯坦贝克（John Steinbeck）有一句话，我不怎么迷信名言，但我很喜欢这一句：“一个普遍的经验是，晚上难以解决的问题，在‘睡眠委员会’工作过后的第二天早上往往能迎刃而解。”我发现我确实是这样生活的。首先，我热爱睡眠，并尽可能多睡。其次，如果我被某个问题困住了，或者我要回复一些紧张或情绪化的问题，我通常会发现，如果我放下思绪去睡觉，第二天早上再看，结果会更好。突然之间，你对那个困扰你的问题有了新的视角和清晰度，或者你意识到之前因为情绪激动而表达得不够清晰，从而能对邮件或任何问题做出更好的回应。所以，睡眠能解决很多问题。

---

### (01:12:46) Lenny Rachitsky

**English:**
I love sleep as well. I'm always telling my wife, "Let's go to sleep." Like, "Okay, I'll be there soon." I love that advice. Okay, two more questions. Who's influenced you most in your career? Is there someone that comes to mind?

**中文翻译:**
我也热爱睡眠。我总是跟我妻子说：“咱们睡觉吧。”我喜欢这个建议。好，最后两个问题。谁对你的职业生涯影响最大？有想到谁吗？

---

### (01:13:00) Jessica Lachs

**English:**
So I think two answers, a multi-part answer. So I think first my career has been in male-dominated industries and I've worked with just some incredible women who've really influenced me. When I was a banker, there were two senior bankers, Vanessa Roberts and Gina Tarone at Lehman Brothers where I worked. And they were just so incredible. They were just so good at their jobs and I found that really inspiring.

(01:13:29):
And at DoorDash, Tia Sherringham, who is our GC, and Liz Jarvis-Shean, who leads comms, are just dominant in their fields. And I think that that's really empowering and have been big influences on me to just see strong, powerful women kicking ass and that helps me believe that I can do the same. So that's one answer.

(01:13:54):
And then the other answer, sort of cliche, but my parents. My mom was a statistician at the UN before she got married, and she actually chose to stay home and raise three children, so I'm the youngest. And when I was in, I think it was elementary school, decided to go back to school, switch careers and become a nurse. And so the fact that she embarked on this completely new career in her forties after 15 years as a stay-at-home mom and my father supported this. I think that that was really, really influential and was probably the first time I saw that you can do whatever you put your mind to, no matter your age, no matter your circumstances. So that was really influential and I don't think I've ever told her that. So hi, Mom.

**中文翻译:**
我有两个答案。首先，我的职业生涯一直处于男性主导的行业，我曾与一些非常了不起的女性共事，她们深深影响了我。当我在雷曼兄弟做银行家时，有两位资深银行家 Vanessa Roberts 和 Gina Tarone，她们非常出色，工作能力极强，这让我深受启发。

(01:13:29):
在 DoorDash，我们的总法律顾问（GC）Tia Sherringham 和负责公关的 Liz Jarvis-Shean 在各自领域都非常卓越。看到这些强大、有能力的女性大放异彩，这给了我很大的力量，让我相信我也能做到。这是第一个答案。

(01:13:54):
另一个答案可能有点老生常谈，那就是我的父母。我妈妈结婚前是联合国的统计学家，后来她选择留在家抚养三个孩子，我是最小的。在我上小学的时候，她决定重返校园，转行成为一名护士。她在做了 15 年家庭主妇后，在 40 多岁时开启了全新的职业生涯，而我父亲非常支持她。我认为这对我影响极大，这可能是我第一次意识到，无论年龄大小，无论处境如何，只要下定决心，你就能做成任何事。这对我影响深远，我想我从未告诉过她。所以，嗨，妈妈。

---

### (01:14:44) Lenny Rachitsky

**English:**
Hi Mom. Thank you, mom.

**中文翻译:**
嗨，妈妈。谢谢你，妈妈。

---

### (01:14:45) Jessica Lachs

**English:**
Yeah, I think that was influential for my career. Definitely.

**中文翻译:**
是的，这绝对影响了我的职业生涯。

---

### (01:14:49) Lenny Rachitsky

**English:**
That's a beautiful answer. Fun fact, I worked with Liz at Airbnb. Your person you just mentioned in the comms team.

**中文翻译:**
这是一个很美的回答。顺便说一下，我以前在 Airbnb 和 Liz 共事过，就是你刚才提到的公关团队的那位。

---

### (01:14:57) Jessica Lachs

**English:**
[inaudible 01:14:57]. She is great.

**中文翻译:**
她非常棒。

---

### (01:14:58) Lenny Rachitsky

**English:**
She's amazing. Final question. So when you joined DoorDash, imagine it wasn't obvious that it was going to work. I imagine it was still like, "This was a crazy idea. Maybe it'll work, maybe not." Is there a moment you recall where you're like, "I think this is going to be a big success? I think this is actually going to work out?"

**中文翻译:**
她确实很棒。最后一个问题。当你加入 DoorDash 时，我想当时并不确定它一定会成功。我猜当时大家还会觉得“这是一个疯狂的主意，也许行，也许不行”。你是否记得有那么一个时刻，让你觉得“我认为这会取得巨大的成功，我认为这真的能成”？

---

### (01:15:14) Jessica Lachs

**English:**
To be honest, I went into DoorDash because I wanted to learn for the experience. I thought it was interesting, problems with interesting people. I never thought too much about whether it would work. I of course wanted it to work and was very competitive and wanted to win. I think there's two moments that stand out. One was when the third party market share data showed that we had become the number one player after, I think we started at number four or five. And I think that that was really exciting to see the trajectory and to see us gain in category share. That was exciting. I probably didn't see it until months after it had happened because we don't spend a ton of time focusing on it, but I do remember somebody wanted to include the graph in some presentation, some sales material, and we're like, "Oh, we're number one. That's incredible. We used to be number five." So I'd say that that was one.

(01:16:17):
The other one that stands out was, the first talk I gave in a lot of these startup talks in the early days in Boston, and I'd asked the audience, "How many of you have used DoorDash?" And there'd be like three people who would raise their hand. And then it was a few years ago, maybe 2018, 2019, and I was giving a talk and I asked the audience, "How many of you have used DoorDash?" And almost everyone's hands went up. And that was actually pretty memorable for me because in my mind, we were still the small startup that no one had heard of where I had to over enunciate the D's in DoorDash. So people didn't think I worked for Jordash, the nineties' denim company. And so that was pretty meaningful to me when just so many people had used the product or were consumers of DoorDash. It was pretty exciting. And I still get excited. I saw DoorDash mentioned in a book recently that I was reading. It was like, "We're in the book." So those little things when you become part of the cultural lingo that I think are really, really special.

**中文翻译:**
老实说，我加入 DoorDash 是为了学习经验。我觉得很有趣，能和有趣的人一起解决问题。我从未过多考虑它是否会成功。我当然希望它成功，我很有竞争意识，我想赢。有两个时刻让我印象深刻。一个是当第三方市场份额数据显示我们成为第一名的时候，我记得我们刚开始时排在第四或第五。看到那个增长轨迹以及我们在品类份额上的提升，真的很令人兴奋。我可能是在事情发生几个月后才看到的，因为我们不会花大量时间关注这个。但我记得有人想在某个演示文稿或销售材料中加入那个图表，我们当时想：“噢，我们是第一了。太不可思议了，我们以前可是第五。”这是其中一个时刻。

(01:16:17):
另一个时刻是，早期我在波士顿参加很多初创公司讲座，我问观众：“你们中有多少人查用过 DoorDash？”当时大概只有三个人举手。然后几年前，大概是 2018 或 2019 年，我在做演讲时问观众：“你们中有多少人查用过 DoorDash？”几乎所有人都举起了手。那对我来说非常难忘，因为在我的脑海里，我们仍然是那个没人听说过的小初创公司，我甚至得特意加强 DoorDash 中 D 的发音，以免别人以为我在那家 90 年代的牛仔裤公司 Jordash 工作。所以当看到这么多人使用我们的产品，成为 DoorDash 的消费者时，对我来说意义重大。我到现在仍然会感到兴奋。最近我在读的一本书里提到了 DoorDash，我想：“哇，我们进书里了。”当你成为文化语言的一部分时，那些小细节真的非常特别。

---

### (01:17:33) Lenny Rachitsky

**English:**
Well, I'm a very happy customer of DoorDash. I've never had a Never Deliver. It's always there, sometimes a little late. Usually it's perfect. Thank you for everything you do. Go team DoorDash.

(01:17:44):
Two final questions. Where can folks find you online if they want to follow stuff that you do? I know you've been doing more writing on LinkedIn and things like that, so just help people understand where to find you and how can listeners be useful to you?

**中文翻译:**
我也是 DoorDash 的忠实客户。我从未遇到过“从未送达”。它总能送到，有时晚一点，但通常很完美。感谢你们所做的一切。DoorDash 团队加油！

(01:17:44):
最后两个问题。如果大家想关注你的动态，可以在哪里找到你？我知道你最近在 LinkedIn 上写了很多东西，所以请告诉大家在哪里可以找到你，以及听众可以为你做些什么？

---

### (01:17:55) Jessica Lachs

**English:**
Yeah, so as you mentioned, to find me LinkedIn, I don't have a huge social presence, but I am on LinkedIn and I am currently writing a series of blog posts about my experience building a global analytics org at DoorDash. Some of the lessons I've learned over the last 10 years. So definitely check those out.

(01:18:16):
And as far as your second question of how listeners can be useful to me, I guess read the post on LinkedIn and I'd love to hear what people think, whether you agree with my point of view or not. That being said, be nice. I want honest feedback, but I want kindness as well. So yeah, just engage with the content and let me know what y'all think. I think I do have a broader ask, which is just to encourage folks listening to TruthSeek, something I take seriously at DoorDash. It's a company value. But there's a lot of misinformation out there and it's often up to us as individuals to figure out what's fact and what's fiction. So I have a plea for folks to do your best, to search for the truth and speak the truth, and I think we'll all be better off for it. And of course, use DoorDash.

**中文翻译:**
是的，正如你提到的，可以在 LinkedIn 上找我。我没有太多的社交媒体账号，但我活跃在 LinkedIn 上。我目前正在写一系列博客文章，关于我在 DoorDash 建立全球分析组织的经验，以及过去 10 年学到的一些教训。大家一定要去看看。

(01:18:16):
至于听众能为我做什么，我想就是去读读那些 LinkedIn 文章，我很想听听大家的想法，无论你是否同意我的观点。不过，请保持友善。我想要诚实的反馈，但也希望大家能友善交流。所以，请多互动，让我知道你们的想法。我还有一个更广泛的请求，就是鼓励听众去“寻真”（TruthSeek），这是我在 DoorDash 非常看重的一个公司价值观。现在外面有很多虚假信息，往往需要我们个人去辨别真伪。所以我恳请大家尽力去寻找真相、说出真相，我想我们都会因此变得更好。当然，还有就是多用 DoorDash。

---

### (01:19:13) Lenny Rachitsky

**English:**
Of course.

**中文翻译:**
那是当然。

---

### (01:19:14) Jessica Lachs

**English:**
Yes, there are three things that listeners can do.

**中文翻译:**
是的，听众可以做这三件事。

---

### (01:19:18) Lenny Rachitsky

**English:**
You're at DoorDash.com. That was awesome. I love that last point as well in addition, to use DoorDash. Jessica, thank you so much for being here.

**中文翻译:**
就在 DoorDash.com。太棒了。除了用 DoorDash，我也非常喜欢你最后那一点。Jessica，非常感谢你能来。

---

### (01:19:27) Jessica Lachs

**English:**
Thank you for having me. It was a lot of fun.

**中文翻译:**
谢谢邀请我，聊得很开心。

---

### (01:19:29) Lenny Rachitsky

**English:**
Same for me. Bye, everyone.

(01:19:32):
Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcast, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
我也是。大家再见。

(01:19:32):
非常感谢收听。如果你觉得本期节目有价值，可以在 Apple Podcast、Spotify 或你喜欢的播客应用中订阅。此外，请考虑给我们评分或留下评论，这能极大地帮助其他听众发现这个播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目见。