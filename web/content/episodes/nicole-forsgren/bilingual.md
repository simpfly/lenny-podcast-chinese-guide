# Nicole Forsgren - 双语对照

# Lenny's Podcast: Nicole Forsgren | Bilingual Transcript (English-Chinese)

---

### [00:00:00] Nicole Forsgren

**English:**
Starting with what is your problem or what is your goal? I would say this is a bigger challenge than most people recognize or realize. 80% of the folks that I work with, this is their biggest problem. Even at executive levels, teams will have gone off for several months, and they're tackling something, and they'll come back with uncertainty, and they'll say like, "Well, you told me to improve developer experience."

**中文翻译:**
首先要问的是：你的问题是什么，或者你的目标是什么？我会说，这是一个比大多数人意识到或承认的还要大的挑战。在我合作的人中，80% 的人的最大问题就在这里。即使在管理层，团队可能已经忙活了几个月去解决某个问题，但回来时却带着不确定性说：“你看，你告诉我要提高开发者体验。”

---

### [00:00:20] Nicole Forsgren

**English:**
I'm like, "Okay, what do you mean by this? Are you talking about inner and outer loop? Are you talking about friction? Are you talking about culture? But if you're talking about culture, this is totally different than if you're talking about friction in toolchains. If you're on different pages, you're heading in completely different directions."

**中文翻译:**
我会问：“好吧，你指的到底是什么？你是在谈论内环和外环（开发循环）吗？你是在谈论摩擦力吗？还是在谈论文化？如果你谈论的是文化，那与谈论工具链中的摩擦力是完全不同的。如果大家的理解不在一个频道上，你们前进的方向就会南辕北辙。”

---

### [00:00:37] Lenny

**English:**
Welcome to Lenny's Podcast where I interview world-class product leaders and growth experts to learn from their hardware experiences, building and growing today's most successful products. Today my guest is Nicole Forsgren. This is actually my first recording back since going on pat leave for the past couple months, and what an awesome episode to get back into the swing of things. Nicole is the developer productivity expert, having written the award-winning book Accelerate, and she's been the co-author of the State of DevOps Report year after year.

**中文翻译:**
欢迎来到 Lenny 的播客。在这里，我采访世界级的产品领导者和增长专家，学习他们构建和增长当今最成功产品的实战经验。今天的嘉宾是 Nicole Forsgren。这实际上是我休了几个月陪产假回来后的第一次录音，能以这么棒的一集回到工作状态真是太好了。Nicole 是开发者生产力方面的专家，她撰写了屡获殊荣的著作《加速》（Accelerate），并且多年来一直是《DevOps 现状报告》（State of DevOps Report）的共同作者。

---

### [00:01:06] Lenny

**English:**
She's currently a partner at Microsoft Research, leading developer productivity, research, and strategy, and she's helped some of the biggest companies in the world move faster, improved product quality, and transform their cultures. In our conversation, we get into the weeds of how to go about measuring and improving your engineering team's productivity and experience. We talk about the DORA framework and the SPACE framework and how to actually implement them to understand how your engineering team is doing.

**中文翻译:**
她目前是微软研究院（Microsoft Research）的合伙人，领导开发者生产力、研究和战略工作。她曾帮助世界上一些最大的公司加快速度、提高产品质量并转型企业文化。在我们的对话中，我们将深入探讨如何衡量和提高工程团队的生产力和体验。我们会讨论 DORA 框架和 SPACE 框架，以及如何实际应用它们来了解工程团队的现状。

---

### [00:01:32] Lenny

**English:**
Nicole also shares benchmarks for what elite companies are at. We talk about why moving faster turns out to be one of the best ways to improve quality and stability. Plus, pitfalls you want to avoid, and also a preview of a new book that she's working on, and so much more. Enjoy this episode with Nicole Forsgren after a short word from our sponsors. Today's entire episode is brought to you by DX, a platform for measuring and improving developer productivity. DX is designed by the researchers behind frameworks such as DORA SPACE and DevX, including Nicole Forsgren, who is my guest for this very episode.

**中文翻译:**
Nicole 还分享了精英公司的基准数据。我们讨论了为什么“跑得更快”反而是提高质量和稳定性的最佳途径之一。此外，还有你想要避免的陷阱，以及她正在撰写的新书预告等等。在听完赞助商的简短介绍后，请欣赏本期与 Nicole Forsgren 的对话。今天的整集节目由 DX 赞助，这是一个衡量和提高开发者生产力的平台。DX 由 DORA、SPACE 和 DevX 等框架背后的研究人员设计，其中就包括本期嘉宾 Nicole Forsgren。

---

### [00:02:09] Lenny

**English:**
If you've tried measuring developer productivity, you know that there are a lot of basic metrics out there and a lot of ways to do this wrong, and getting that full view of productivity is still really hard. DX tackles this problem by combining qualitative and quantitative insights based on the very research Nicole and her team have done, giving you full clarity into how your developers are doing. DX is used by both startups and Fortune 500 companies, including companies like Twilio, Amplitude, eBay, Brex, Toast, Pfizer, and Procter & Gamble. To learn more about DX and get a demo of their product, visit their website at getdx.com/lenny. That's getdx.com/lenny. Nicole, welcome to the podcast.

**中文翻译:**
如果你尝试过衡量开发者生产力，你就会知道市面上有很多基础指标，也有很多错误的做法，而要获得生产力的全貌仍然非常困难。DX 通过结合定性和定量的洞察力来解决这个问题，这些洞察力基于 Nicole 及其团队所做的研究，让你清晰地了解开发者的工作状态。DX 被初创公司和财富 500 强公司广泛使用，包括 Twilio、Amplitude、eBay、Brex、Toast、辉瑞和宝洁等。要了解更多关于 DX 的信息并获取产品演示，请访问他们的网站 getdx.com/lenny。Nicole，欢迎来到本播客。

---

### [00:02:54] Nicole Forsgren

**English:**
Thank you so much. I'm excited to be here.

**中文翻译:**
非常感谢。很高兴能来到这里。

---

### [00:02:56] Lenny

**English:**
I'm excited to have you here. I actually skip this question usually with guests, but I thought it'd be actually really valuable to spend a little time on your background. You have such a unique role and unique set of experiences. Could you just talk briefly about the things you've been up to in your career, where you've worked, and then what you've up to now and what you focus on these days?

**中文翻译:**
很高兴你能来。通常我会跳过这个问题，但我认为花点时间了解你的背景非常有价值。你的角色和经历都非常独特。你能简要谈谈你的职业生涯、工作过的地方，以及你现在在做什么，目前关注的重点是什么吗？

---

### [00:03:15] Nicole Forsgren

**English:**
Sure, and I appreciate the question because you're right. I sort of had this choose your own adventure background. So I started as a software engineer at IBM. I was writing software for large enterprise systems, which meant I ended up running them. So I was also a CIS admin. I was racking the stacking. I was running these really, really large labs, and then I kind of stumbled into this seven-day march for several years, and I was like, "There has to be a better way." And we're hearing rumors of it, but management was not buying in. And so I decided to win this battle with data, and I was like, "I should go do a Ph.D."

**中文翻译:**
当然可以，我很感谢你问这个问题，因为你说得对，我的背景有点像“选择你自己的冒险”。我的职业生涯始于 IBM 的软件工程师。我当时在为大型企业系统编写软件，这意味着我最后也要负责运行它们。所以我当时也是一名系统管理员（CIS admin）。我负责上架服务器，运行这些非常庞大的实验室。然后我有几年时间陷入了这种“一周七天连轴转”的状态，我当时想：“一定有更好的方法。”我们听到了一些传闻，但管理层并不买账。于是我决定用数据来赢得这场战斗，我想：“我应该去读个博士。”

---

### [00:03:55] Nicole Forsgren

**English:**
And so ended up kind of taking a slight pivot into Ph.D. and management information systems, which some people are less familiar with, but it's basically a cross between tech and business. And I ended up getting a fairly technical Ph.D. So I went to a school, I went to University of Arizona, which has a very, very technical degree, but I liked that it crossed with business because then I had the ability to make these strong business case statements, right. So it was like, how is or is the way that we develop and deliver software tied to outcomes at the individual level, right?

**中文翻译:**
于是我转向了管理信息系统（MIS）的博士学位，有些人可能不太熟悉这个领域，但它基本上是技术和业务的交叉。我最终获得了一个技术含量相当高的博士学位。我去了亚利桑那大学，那里的学位非常注重技术，但我喜欢它与业务的结合，因为这样我就有能力做出强有力的业务案例陈述。比如：我们开发和交付软件的方式是否与个人层面的成果挂钩？

---

### [00:04:33] Nicole Forsgren

**English:**
Can I be more productive? Can I have better work-life balance? And the team level, is the team more productive? Is the team more efficient? And the organizational level, right. This is what I was really interested in originally. Do I see better ROI? Do I see better efficiency because then I could sell it to people, right. And so that was really kind of what I originally went into. And then I was a professor for a handful of years because if you're doing research, traditionally, that's the job in academia. I also had a master's in accounting because that really helped me make that kind of financial tie and understanding financial statements.

**中文翻译:**
我能更有生产力吗？我能有更好的工作生活平衡吗？在团队层面，团队是否更有生产力、更高效？还有组织层面，这正是我最初真正感兴趣的。我能看到更好的投资回报率（ROI）吗？我能看到更高的效率吗？因为有了这些，我才能说服别人。这就是我最初的研究方向。之后我当了几年教授，因为如果你做研究，传统上学术界就是你的去处。我还拿到了会计学硕士学位，因为这确实能帮我建立财务联系并理解财务报表。

---

### [00:05:07] Nicole Forsgren

**English:**
And then, after a handful of years kind of walked away from tenure because academia was not convinced that DevOps was a thing, right, that DevOps wasn't real, and State of DevOps Report who I was doing with DORA, DevOps research and assessment in collaboration with Jez Humble and Gene Kim. And we started that work with Puppet. So shout out to Alanna Brown for starting that, and Nigel Kersten and the team there. We kind of pivoted away. And Chef, that little configuration management startup at the time, hired me, and they're like, "We'll give you halftime to do research and halftime to help our engineering practices improve."

**中文翻译:**
几年后，我放弃了终身教职，因为当时学术界并不相信 DevOps 是个真实存在的东西。那时我正通过 DORA（DevOps 研究与评估机构）与 Jez Humble 和 Gene Kim 合作编写《DevOps 现状报告》。我们最初是和 Puppet 合作开始这项工作的，这里要感谢 Alanna Brown、Nigel Kersten 及其团队。后来我们转向了。当时那家名为 Chef 的小型配置管理初创公司聘用了我，他们说：“我们会给你一半时间做研究，一半时间帮助我们改进工程实践。”

---

### [00:05:45] Lenny

**English:**
That's cool.

**中文翻译:**
那太酷了。

---

### [00:05:46] Nicole Forsgren

**English:**
Yeah. I mean, they were incredible because what startup is going to be like, "Yeah, do research." So I was there for a year and a half and then left to do DORA full-time. We actually had a SaaS offering, so we continued the State of DevOps Report just under the DORA banner, and we had a SaaS offering because so many large companies were like, "I want my own customized measurement, reading, and report." And then the joke there when we met with Gartner, they were like, "Your superpower here was that you tricked people into strategy," which was not only how do I benchmark? That was kind of our top-of-the-funnel. Everyone wants to know how they compare.

**中文翻译:**
是的，他们真的很了不起，因为哪有初创公司会说“去搞研究吧”。我在那里待了一年半，然后离开去全职经营 DORA。我们当时有一个 SaaS 产品，所以我们在 DORA 的旗帜下继续发布《DevOps 现状报告》。我们之所以做 SaaS，是因为很多大公司说：“我想要自己定制的衡量标准、解读和报告。”当时和 Gartner 会面时有个笑话，他们说：“你的超能力在于你诱导人们进入了战略层面。”这不仅仅是“我如何做基准测试”，那只是我们漏斗的最顶端，每个人都想知道自己和别人比起来怎么样。

---

### [00:06:22] Nicole Forsgren

**English:**
But the important thing is what should you do next? What's the most important next step? So it's how do I measure? What do I do next? And that gave me this incredible view into advising large organizations into this transformation journey. And then, we built out this amazing partner network. We weren't actually consulting. We just had this SaaS piece, but then how do you act on it? We were then acquired by Google, so I was CEO. And so I kind of led that acquisition and then the integration and building out these teams in Google. And after that point, I joined GitHub, which is the largest developer network.

**中文翻译:**
但最重要的事情是：你下一步该做什么？最重要的下一步是什么？所以问题变成了：我如何衡量？我下一步该做什么？这让我拥有了为大型组织提供转型建议的绝佳视角。然后，我们建立了惊人的合作伙伴网络。我们实际上不直接做咨询，我们只有 SaaS 部分，但关键在于你如何根据结果采取行动。后来我们被谷歌收购了，当时我是 CEO。我领导了那次收购以及随后的整合，并在谷歌建立了这些团队。在那之后，我加入了 GitHub，那是最大的开发者网络。

---

### [00:07:01] Nicole Forsgren

**English:**
So I had this amazing opportunity to do more grounded and applied research again. I was VP of research and strategy and then went over to MSR, where I kind of wear a couple of hats. So right now, I have a research lab there with an incredible team. It's the developer experience lab where we do a bunch of work across productivity, community, and wellbeing. And then I also help with Microsoft's kind of cross company effort to improve their developer infrastructure. So it's sort of this round effort into how do I really remain engaged in measuring, applying, thinking about this work, both in very applied concrete pieces and incredibly forward-looking work with MSR.

**中文翻译:**
所以我又获得了一个绝佳的机会，可以再次进行更接地气的应用研究。我曾担任研究与战略副总裁，然后去了 MSR（微软研究院），在那里我身兼数职。目前，我在那里有一个研究实验室，带着一支优秀的团队。那是“开发者体验实验室”，我们开展一系列涉及生产力、社区和福祉的工作。同时，我也协助微软全公司范围内的努力，以改进他们的开发者基础设施。所以这是一种全方位的尝试，让我能持续参与到衡量、应用和思考这些工作中，既包括非常具体的应用部分，也包括在 MSR 进行的极具前瞻性的工作。

---

### [00:07:48] Lenny

**English:**
Amazing. And just to clarify, MSR, is that Microsoft? That's a division-

**中文翻译:**
太棒了。澄清一下，MSR 是指微软吗？那是微软的一个部门……

---

### [00:07:52] Nicole Forsgren

**English:**
Ah. Yeah. Thank you. Yeah, MSR is Microsoft Research.

**中文翻译:**
啊，是的。谢谢。是的，MSR 就是微软研究院。

---

### [00:07:54] Lenny

**English:**
Okay, cool. So you've shared a couple of these terms, DevOps, developer productivity. I'm curious what the term you like to use for this area you focus on. Developer productivity, developer experience, DevOps, what's kind of the way the best way to think about this?

**中文翻译:**
好的。你分享了几个术语：DevOps、开发者生产力。我很好奇你喜欢用哪个词来描述你关注的这个领域？开发者生产力、开发者体验、DevOps，思考这个问题的最佳方式是什么？

---

### [00:08:10] Nicole Forsgren

**English:**
I really love that you asked this question because I think they're very related concepts that people sometimes conflate, but I see them as being different. So related, but different. So productivity, I think, is basically how much we can get done and how much we can do over time. And I think that's why it's so important to have this holistic measure because we can't just brute force it, right. And so that's why when my team and a bunch of my peers study productivity, we include this community effect because software is a team sport. We joke, right.

**中文翻译:**
我很喜欢你问这个问题，因为我认为它们是非常相关的概念，人们有时会混为一谈，但我认为它们是不同的。相关，但不同。我认为生产力基本上是指我们在一段时间内能完成多少工作。这就是为什么拥有这种整体衡量标准如此重要，因为我们不能只靠蛮力。这就是为什么当我的团队和同行研究生产力时，我们会把“社区效应”包含进来，因为软件是一项团队运动，我们常开这个玩笑。

---

### [00:08:40] Nicole Forsgren

**English:**
And also why wellbeing is so important, right. Because we see that when you do productivity the right way, we see sustainability, we see wellbeing, we see reductions in burnout. Now, developer experience is very related and very tied to this, and it contributes to productivity. But developer experiences, if you think about who your users are, developers really are you your users in this software engineering, in the software development piece. And so developer experience is sort of like what is it like to write software? Is this a friction-free process? Is this a very predictable and certain experience? Can we reduce this uncertainty and increase the predictability here to contribute to productivity?

**中文翻译:**
这也是为什么“福祉”（wellbeing）如此重要的原因。因为我们发现，当你以正确的方式提高生产力时，我们会看到可持续性、看到福祉、看到职业倦怠的减少。而开发者体验（DevEx）与此密切相关，它有助于提高生产力。如果你思考谁是你的用户，在软件工程和开发环节中，开发者实际上就是你的用户。所以开发者体验就像是：编写软件的感觉如何？这是一个无摩擦的过程吗？这是一种非常可预测且确定的体验吗？我们能否减少这种不确定性并增加可预测性，从而为生产力做出贡献？

---

### [00:09:31] Lenny

**English:**
And then how does DevOps fit into that just so that we kind of have the mental model of these terms?

**中文翻译:**
那么 DevOps 是如何融入其中的呢？这样我们就能对这些术语建立一个心智模型。

---

### [00:09:31] Nicole Forsgren

**English:**
People have sort of co-opted the term. So some people name their tools DevOps. I'm maybe a little more old school. So when I was doing a bunch of my DevOps research, it was the capabilities and tools and processes that we can use to improve our software development and delivery end to end so that it's faster and it is more reliable. So DevOps was kind of this technical, architectural, cultural practices that enable us to do this work better so that it is, yes, more productive, we have a better developer experience. It was kind of, again, this very holistic picture.

**中文翻译:**
人们有点“挪用”了这个词。有些人把他们的工具命名为 DevOps。我可能稍微守旧一点。当我进行 DevOps 研究时，它指的是我们用来端到端改进软件开发和交付的能力、工具和流程，使其更快、更可靠。所以 DevOps 是一种技术、架构和文化实践，使我们能够更好地完成这项工作，从而提高生产力，获得更好的开发者体验。这同样是一个非常整体的图景。

---

### [00:10:06] Lenny

**English:**
So what I love about this topic is that I've never met a founder or a leader who is not thinking, "We need to move faster. We need our engineers to be more productive. We need to get things out the door quicker. We want engineers to be happier." Nobody doesn't want that. And so that's why I'm excited to dig into a lot of these things. Is that roughly what you find as well, that nobody's ever like, "We're good. We don't need any of this. We don't need to focus on this area?"

**中文翻译:**
我喜欢这个话题的原因是，我从未见过哪个创始人或领导者不这么想：“我们需要跑得更快。我们需要工程师更有生产力。我们需要更快地交付产品。我们希望工程师更快乐。”没有人不想要这些。这就是为什么我很兴奋能深入探讨这些内容。你发现的情况也是这样吗？从来没有人会说：“我们很好，我们不需要这些，我们不需要关注这个领域。”

---

### [00:10:32] Nicole Forsgren

**English:**
You know what, I'll say yes and, right. So and it kind of goes back to why I got into this because, on the one hand, you won't say anyone who's saying, "Uh, we don't really need to go faster. Everything's fine." But at the same time, very often, I will come into scenarios where I'll find myself in scenarios where people are like, "I mean, it would be nice if we were going faster, but do we really need to. Show me the business case. What's the ROI?" Or if we go too fast, we'll have an instability, right. What are our safety measures? Are we going to lose reliability? What is happening?

**中文翻译:**
你知道吗，我会说“是的，但是”。这又回到了我为什么进入这个领域的原因。一方面，你确实听不到有人说：“呃，我们真的不需要跑得更快，一切都很好。”但与此同时，我经常会遇到这样的场景，人们会说：“我的意思是，如果能跑得更快当然好，但我们真的需要吗？给我看看业务案例，投资回报率是多少？”或者，“如果我们跑得太快，系统会不稳定，对吧？我们的安全措施是什么？我们会失去可靠性吗？到底会发生什么？”

---

### [00:11:13] Nicole Forsgren

**English:**
And when I first started ITIL and ITSM, right, the old school kind of change management processes, the common knowledge was that you had to have at least a two-week wait for change approvals in order to get that stability. Turns out that's not right. It was just kind of an old wives' tale, right. And so we kind of have this weird balance of I want to move faster, but is it worth the investment? What am I going to get for it? Are you sure this is the priority? Or I've been in meetings where it's like, "Oh yes, absolutely, right. This is a priority, but it's the lowest priority."

**中文翻译:**
当我刚开始接触 ITIL 和 ITSM（那些老派的变更管理流程）时，当时的常识是，你必须至少等待两周的变更审批才能获得稳定性。结果证明那是错的，那只是某种“老生常谈”。所以我们处于一种奇怪的平衡中：我想跑得更快，但值得投入吗？我能得到什么？你确定这是优先级吗？或者我参加过一些会议，会上说：“哦是的，绝对的，这是一个优先级，但它是最低的优先级。”

---

### [00:12:00] Nicole Forsgren

**English:**
And I'm like... Right. So then what we want to do is we want to have these kind of pointed conversations or these kind of Socratic type questions and conversations where it's like, "Help me understand more what your concerns are. Are your concerns around reliability when you move faster?" We're not just trying to all the guardrails down and sprint for no purpose of sprinting. And this is where kind of the DORA and DevOps research program comes into play where it's we don't just want to move fast and take all guardrails down.

**中文翻译:**
我就想……好吧。所以我们想做的是进行这种有针对性的对话，或者苏格拉底式的提问和对话，比如：“帮我进一步了解你的顾虑是什么。你的顾虑是跑得太快会影响可靠性吗？”我们并不是要拆掉所有的护栏，为了冲刺而冲刺。这就是 DORA 和 DevOps 研究计划发挥作用的地方：我们不只是想跑得快并拆掉所有护栏。

---

### [00:12:33] Nicole Forsgren

**English:**
We want to implement good technical practices like automated testing, good architectural practices so that when you move fast, you are also more stable, right. We want to be thinking about improving the developer experience so that when we are faster, we are also saving time. And then, we can highlight a handful of statistics. Like, what is your typical time for feature delivery? What is your typical time to first PR? What is your typical time to steady state productivity?

**中文翻译:**
我们想要实施良好的技术实践（如自动化测试）和良好的架构实践，这样当你跑得快时，你也会更稳定。我们希望考虑改进开发者体验，这样当我们变快时，我们也在节省时间。然后，我们可以强调一些统计数据。比如：你交付功能的典型时间是多少？提交第一个 PR（拉取请求）的典型时间是多少？达到稳定生产力状态的典型时间是多少？

---

### [00:13:04] Nicole Forsgren

**English:**
What is your typical time for code review and PR process? And if we are to do back-of-the-napkin math, what sorts of time are you spending here? And if we do a rough look at industry, what are your peers spending here? And are we losing time, right? And if we could turn this into a value calculation, what does that look like? So that we can think about the priority and the strategy here. And I think that's where it becomes a more focused conversation.

**中文翻译:**
代码审查和 PR 流程的典型时间是多少？如果我们做个简单的估算，你在这里花费了多少时间？如果我们粗略地看一下行业情况，你的同行在这里花费了多少时间？我们是不是在浪费时间？如果我们能把这转化成价值计算，那会是什么样子？这样我们就能思考这里的优先级和战略。我认为这就是对话变得更聚焦的地方。

---

### [00:13:43] Lenny

**English:**
This is a great segue too, something I was going to get to a little bit later, but let's just get into it, which is the DORA framework, and then there's also the SPACE framework. Could you just talk about what these two are when you use one versus the other, and then how that essentially helps you measure and then improve productivity and developer experience?

**中文翻译:**
这是一个很好的过渡，我本来打算稍后再谈，但现在就切入正题吧，那就是 DORA 框架，还有 SPACE 框架。你能谈谈这两个框架分别是什么，什么时候用哪一个，以及它们如何从本质上帮助你衡量并改进生产力和开发者体验吗？

---

### [00:14:01] Nicole Forsgren

**English:**
Sure, sure. Absolutely. And I'm so glad you brought this up. So DORA is, it's an entire research program. Now, many people, when they hear DORA now they think of the Four Keys or the DORA four or the four metrics, and I think that's what the research program and the company ended up becoming most known for. And so that was the software delivery performance metrics, and those are, there's two speed and two stability metrics. So the speed metrics are lead time, so how long does it take to get from code committed to code running in production? Deployment frequency. How often do you deploy code?

**中文翻译:**
当然可以。我很高兴你提到这个。DORA 是一个完整的研究项目。现在很多人听到 DORA 就会想到“四大关键指标”（Four Keys）或 DORA 四项指标，我想这就是该研究项目和公司最终最出名的地方。那是软件交付性能指标，包括两项速度指标和两项稳定性指标。速度指标是：交付周期（Lead time），即从代码提交到代码在生产环境中运行需要多长时间？部署频率（Deployment frequency），即你多久部署一次代码？

---

### [00:14:40] Nicole Forsgren

**English:**
And then the stability metrics are MTTR, mean time to restore. So if something happens, how long does it take you to come back? And then change fail rate. For every change that is pushed, what's the rough percentage of incidents or that require human intervention, right? Now the thing that was really interesting is when we started measuring these, we found that they move in tandem now with very strong significance from a statistical standpoint. Now what this means is now, we say speed and stability move together.

**中文翻译:**
稳定性指标是：MTTR（平均恢复时间），如果发生故障，你需要多长时间恢复？还有变更失败率（Change fail rate），在推送的每一次变更中，导致事故或需要人工干预的大致百分比是多少？非常有趣的一点是，当我们开始衡量这些指标时，我们发现它们在统计学上具有非常显著的相关性，是同步变动的。这意味着，我们现在说速度和稳定性是并驾齐驱的。

---

### [00:15:19] Nicole Forsgren

**English:**
Most people only think about this from the speed standpoint, which means when you move faster, you are more stable, which means you're pushing smaller changes more often, right. Because if you're pushing all the time, it's going to be very, very small changes, which means you have a smaller blast radius, which means when you push, you have an error in production. It's going to be easier to debug, right. It's going to be much easier to figure all of that out your mean time to restore and mitigate. It's going to be much faster.

**中文翻译:**
大多数人只从速度的角度考虑，但这意味着当你跑得更快时，你反而更稳定，因为这意味着你更频繁地推送更小的变更。如果你一直在推送，变更就会非常小，这意味着你的“爆炸半径”更小。也就是说，当你推送并在生产中出现错误时，调试会更容易，弄清楚如何恢复和缓解也会快得多。

---

### [00:15:44] Nicole Forsgren

**English:**
But that also means is the reverse. When you push changes less frequently, you will have more unstable systems because when you push less frequency, you will have very, very large batch changes, which means you'll have a very high, very large blast radius, which means when you do have a resulting bug error, you will have to disentangle this big ball of mud and figure out which piece actually caused the error, figure all of that out. That ended up being a big surprise because, refer to my prior comment about ITIL and ITSM, if you're forcing a two-week pause for change approvals, you're causing this batching up of changes.

**中文翻译:**
但这也意味着反面情况：当你推送变更的频率较低时，你的系统会更不稳定。因为推送频率低意味着你会进行非常大批量的变更，这意味着爆炸半径非常大。当出现 Bug 或错误时，你必须理清这一大团乱麻，找出到底是哪一部分导致了错误。这最终成了一个巨大的惊喜，因为正如我之前提到的 ITIL 和 ITSM，如果你强制要求两周的变更审批停顿，你实际上是在导致变更的堆积。

---

### [00:16:36] Nicole Forsgren

**English:**
And sometimes people were waiting, "If two weeks is good, a month must be better, or three months must be better, or six months must be better." And I mean, just think about the merge conflicts you're causing, right. You're just causing so many challenges in figuring out how to push this code into production. So many people think of those four metrics, one, because we found that speed and stability move together, and two because we started publishing benchmarks on what this looks like for low, medium, high, and then elite performers for many times.

**中文翻译:**
有时人们会等，“如果两周好，那一个月肯定更好，或者三个月、六个月更好。”我的意思是，想想你造成的合并冲突吧。在弄清楚如何将代码推送到生产环境时，你制造了太多的挑战。所以很多人想到这四个指标，一是因为我们发现速度和稳定性是同步的，二是因为我们开始发布针对低、中、高以及精英表现者的基准数据。

---

### [00:17:06] Nicole Forsgren

**English:**
This, I believe, may have been interesting. I'm not sure if it was useful or helpful, but I think it was interesting because it gave people at least something to shoot for, something to aim for. I will definitely say what's most important is knowing where you are and the progress that you're making, right. It doesn't matter if, frankly, you're a high performer or you're an elite performer. It matters that where you are and you're making progress, right. Can you push daily or on demand, or is your only technical capability that you can push twice a year, right? Just know where you are, and is it a business decision or a technical capability? That's basically what it comes down to.

**中文翻译:**
我相信这可能很有趣。我不确定它是否真的有用或有帮助，但我认为它很有趣，因为它至少给了人们一个奋斗的目标。我肯定会说，最重要的是知道你现在在哪里，以及你正在取得的进展。坦白说，你是高表现者还是精英表现者并不重要。重要的是你所处的位置以及你在进步。你能每天推送或按需推送吗？还是说你的技术能力只能让你一年推送两次？弄清楚你的现状，以及这是一个业务决策还是技术能力限制。这基本上就是核心所在。

---

### [00:17:47] Lenny

**English:**
I'm going to jump in real quick just to highlight what you're talking... what you just said, which I think is extremely important and powerful, and people might kind of move on too quickly. I also want to ask you what actual benchmarks are, if you can share those, whatever you want to share there. But before I ask that, essentially, what you're sharing right now is just I feel like the 64,000 dollar question of this episode is just how do I move faster as a team? And what I'm hearing is essentially it's ship smaller things is kind of at the core of it. And also, if we're... if quality is low, you're also saying the answer is ship more often, ship smaller things. Is that roughly the message?

**中文翻译:**
我想快速插一句话，强调一下你刚才说的话，我认为这极其重要且有力，人们可能会听得太快而忽略掉。我还想问你具体的基准数据是什么，如果你能分享的话。但在那之前，本质上，你现在分享的内容我觉得就是本集节目的核心问题：作为一个团队，我如何跑得更快？我听到的是，核心在于“交付更小的东西”。而且，如果我们的质量很低，你也在说答案是“更频繁地交付，交付更小的东西”。大致是这个意思吗？

---

### [00:18:26] Nicole Forsgren

**English:**
Yes, absolutely. It ends up being much, much safer.

**中文翻译:**
是的，绝对是。这样做最终会安全得多。

---

### [00:18:29] Lenny

**English:**
Amazing. So I think that's an extremely important takeaway that I think people would... I don't know. That's surprising to me to hear that it's quality comes from shipping faster and then also to ship faster, and move... help your team move faster. It's ship smaller things and just deploys more often.

**中文翻译:**
太棒了。我认为这是一个极其重要的收获。对我来说，听到“质量来自于更快的交付”，以及“为了跑得更快、帮助团队加速，就要交付更小的东西并更频繁地部署”，这真的很令人惊讶。

---

### [00:18:47] Nicole Forsgren

**English:**
Yep.

**中文翻译:**
没错。

---

### [00:18:48] Lenny

**English:**
Amazing. Okay, great. I know we'll talk more about this, but let me go back to the question I was going to ask is are there benchmarks you can share just right now that you think would be useful to people? I know you said it was interesting and maybe not as useful to people as you mentioned.

**中文翻译:**
太好了。我知道我们会再深入讨论这个，但让我回到刚才想问的问题：有没有你现在可以分享的、你认为对大家有用的基准数据？我知道你说过这很有趣，但可能不像你提到的那样对所有人都有用。

---

### [00:19:00] Nicole Forsgren

**English:**
Yeah. So I will admit I only have the 2019 benchmarks top of mind. The team at Google has continued that work since I left. It's been led by Dr. Dustin Smith. Nathen Harvey continues the work, so huge shout out to that team. Many others participate. You can go to dora.dev and find all of the continued reports. They've integrated all of this work. But I will say they've remained fairly consistent. So really quickly, I'll share the elite performance. So deployment frequency, you can deploy on-demand, lead time for changes takes less than a day. Time to restore is less than an hour, and your change fail rate is between zero and 15%.

**中文翻译:**
是的。我承认我脑子里只有 2019 年的基准数据。自从我离开后，谷歌的团队一直在继续这项工作，由 Dustin Smith 博士领导，Nathen Harvey 也在继续这项工作，向那个团队致敬。还有很多人参与其中。你可以去 dora.dev 找到所有后续报告，他们整合了所有这些工作。但我要说的是，这些数据一直保持得相当一致。我快速分享一下“精英表现者”的数据：部署频率是按需部署；变更交付周期少于一天；恢复时间少于一小时；变更失败率在 0% 到 15% 之间。

---

### [00:19:44] Lenny

**English:**
Amazing. Okay, I'm writing these down. These are extremely valuable.

**中文翻译:**
太棒了。好的，我把这些记下来。这些非常有价值。

---

### [00:19:48] Nicole Forsgren

**English:**
And I will mention people will say, "Well, this is kind of a chunk of time, right. It's not super precise." Precision isn't really super important here, right. It doesn't really matter if your lead time is... If it's less than a day, it's less than a day, right. That's fine from a business perspective. It doesn't matter if it's four hours or four hours and two minutes. Right. General categories are fine. Now I will say the next category for lead time for changes by the day is if lead time is between a day and a week.

**中文翻译:**
我要提一下，人们会说：“嗯，这只是一个时间段，对吧？不是特别精确。”在这里，精确度其实并不那么重要。如果你的交付周期少于一天，那就是少于一天，从业务角度来看这就足够了。是 4 小时还是 4 小时 2 分钟并不重要。大类别的划分就很好。我要说的是，交付周期的下一个级别（高表现者）是介于一天到一周之间。

---

### [00:20:28] Lenny

**English:**
And this is for good.

**中文翻译:**
这是针对“良好”级别的。

---

### [00:20:29] Nicole Forsgren

**English:**
For high between elite and high. Elite is less than a day, and high is between a day and a week. And then it goes between a week and a month and between a month and six months, right. So you can ask people, and they can tell you, right. They can kind of hunch it.

**中文翻译:**
是介于“精英”和“高”之间。精英是少于一天，高是介于一天到一周之间。然后是介于一周到一个月之间，以及一个月到六个月之间。所以你可以问问大家，他们能告诉你，他们能凭直觉估算出来。

---

### [00:20:44] Lenny

**English:**
Mm-hmm. And this is from committing code into the repo and it going out into production.

**中文翻译:**
嗯。这是指从代码提交到仓库到它发布到生产环境的时间。

---

### [00:20:51] Nicole Forsgren

**English:**
Mm-hmm. To about ring zero. So you don't... Don't worry if it's like, "Oh, well, now we need to think about the global deploy and which is the final endpoint." And it's like, how long does it take to get through your deployment pipeline? Because are you going to be surprised? Do you have fast feedback loops? How does your deployment pipeline work? Does your deployment pipeline work, right? Or are you going to commit code? Are you going to wait for that final review for about three months?

**中文翻译:**
嗯，大约到“零号环”（ring zero）。所以你不用担心，“哦，现在我们需要考虑全球部署，哪个才是最终端点。”关键是：通过你的部署流水线需要多长时间？因为你会感到意外吗？你有快速反馈循环吗？你的部署流水线是如何运作的？它真的有效吗？还是说你提交了代码，然后要等大约三个月才能进行最终审查？

---

### [00:21:27] Nicole Forsgren

**English:**
Is something going to happen or break? And when it comes back to the developer because something happened or broke because that kind of happens, are they going to have to insert themselves back in the code, re-review all the things that happened three months ago, all... so many other things happened that's incredibly difficult. Which to your prior question, this is how it relates to the developer experience. If something happened less than a day and it's a surprise, and it's not great, but whatever, something happened downstream, and I got to fix it, I'm still sitting in my code in my head.

**中文翻译:**
会不会发生什么事或者出故障？当问题反馈给开发者时（因为出事或故障总会发生），他们是否必须重新钻进代码里，重新审查三个月前发生的所有事情？期间发生了太多其他事情，这变得极其困难。回到你之前的问题，这就是它与开发者体验的关系。如果事情发生在不到一天内，虽然是个意外，虽然不太好，但无论如何，下游出了事，我得去修，我的脑子里还装着那些代码。

---

### [00:22:01] Nicole Forsgren

**English:**
I've got that mental model. I know what happened. Maybe it's not great, but it's fine. If it happened three months ago and I get interrupted. First of all, interruptions suck. That's not fun. Second of all, now I've got to re-remember, reread all of this code, maybe reload an entire new workspace and set up libraries and everything because I... maybe it's a whole quarter ago, and we thought we were done, and I got to do the whole thing all over.

**中文翻译:**
我有那个心智模型。我知道发生了什么。也许不太妙，但还好。如果事情发生在三个月前，而我被打断了。首先，被打断的感觉很糟糕，一点也不好玩。其次，现在我必须重新记忆、重新阅读所有这些代码，可能还要重新加载一个全新的工作区，设置库和所有东西，因为那可能是一个季度前的事了，我们本以为已经完工了，结果我得全部重来一遍。

---

### [00:22:33] Lenny

**English:**
If a listener is working at a startup, I imagine they're hearing this, and they're like, "Takes a day to ship that. We ship it all day, a thousand times a day." I imagine these benchmarks are more valuable for larger companies. Is there kind of buckets you think about for here's the size of company this is meant for? And then, do you think about anything differently for a startup, say, I don't know 10 people?

**中文翻译:**
如果听众在初创公司工作，我猜他们听到这些会想：“交付要花一天？我们整天都在交付，一天一千次。”我猜这些基准对大公司更有价值。你是否对这些指标适用的公司规模有分类？对于一家初创公司，比如只有 10 个人的公司，你的看法会有所不同吗？

---

### [00:22:55] Nicole Forsgren

**English:**
If anyone is only listening to this? I just got the biggest smile because we saw no statistical significance between small companies and large companies. The only statistically significant difference was with retail. I'll come back to that. It's so funny because large companies would say, "Oh, but this isn't fair for us. We have more complex code bases. We have so many things to do. Small companies just don't have to deal with this." Small companies would come to me, and they would say, "Oh, but this isn't fair. Large companies have so much money. They have so many resources. They don't have to deal with all the things. This doesn't apply to me."

**中文翻译:**
如果有人只是在听播客（看不到我的表情）？我刚才露出了灿烂的笑容，因为我们发现小公司和大公司之间没有统计学上的显著差异。唯一的显著差异是在零售业。我稍后会谈到这个。这很有趣，因为大公司会说：“哦，这对我们不公平。我们的代码库更复杂，我们要处理的事情太多了。小公司根本不需要处理这些。”而小公司会跑来跟我说：“哦，这不公平。大公司有那么多钱，那么多资源。他们不需要处理这些琐事。这不适用于我。”

---

### [00:23:30] Lenny

**English:**
Wow.

**中文翻译:**
哇。

---

### [00:23:30] Nicole Forsgren

**English:**
So it's either way. And on days when I was feeling real snarky, I'd be like, "Pick your excuse. You've got your dropdown." Now when I say, "Retail was a bit of an outlier," they had a statistically significant difference. Their difference was that they were actually better. Why? Now, I can't tell you why. I can... In a research paper, we'd have a discussion section, and this is where you get to guess. I would surmise, and we do this in the report, that it's probably because retail went through the retail apocalypse, right.

**中文翻译:**
所以两边都一样。在我感觉特别毒舌的时候，我会说：“选一个你的借口吧，下拉菜单里都有。”当我提到“零售业是一个离群值”时，他们确实有统计学上的显著差异。他们的差异在于，他们实际上表现得更好。为什么？我现在不能告诉你确切原因。在研究论文中，我们会有一个讨论环节，那是你可以进行推测的地方。我推测（我们在报告中也这么写了），这可能是因为零售业经历了“零售业大灾难”。

---

### [00:24:09] Nicole Forsgren

**English:**
If you didn't survive, if you weren't just killing it, you did not survive. So many retail firms just did not make it through. You had to be at the top of your game. There was no such... Black Friday, there's no such thing as not having systems that are performing incredibly well. There's no such thing as not being in the cloud because if you cannot make it through bursting on demand, bursting like magic, sometimes I joke, right, you're not going to make it. And so I suspect if I were to guess, if you're not already a high performer in the retail space, natural selection got rid of you.

**中文翻译:**
如果你没能生存下来，如果你表现得不够出色，你就被淘汰了。很多零售公司都没能挺过来。你必须处于顶尖水平。没有什么……在“黑色星期五”，绝不允许系统表现不佳。绝不允许不使用云服务，因为如果你不能应对按需爆发的流量（像变魔术一样爆发，我有时开玩笑说），你就撑不下去。所以我怀疑，如果我没猜错的话，如果你在零售领域还不是一个高表现者，自然选择已经把你淘汰了。

---

### [00:24:53] Lenny

**English:**
That is really interesting. That makes a lot of sense. So I'm looking at these thresholds again, and I'm thinking from the perspective of a founder who's just like, "I wish my engineering team would faster." Essentially you're saying if deploy times... if they deploy more than once a day if their deploy frequencies on demand or I think it was hourly was kind of the other bucket, was that part of it?

**中文翻译:**
这真的很有趣。非常有道理。所以我再次审视这些阈值，我从一个创始人的角度在想：“我希望我的工程团队能更快。”本质上你是说，如果部署时间……如果他们每天部署超过一次，如果他们的部署频率是按需的，或者我记得另一个类别是按小时部署，是这样吗？

---

### [00:25:14] Nicole Forsgren

**English:**
Mm-hmm.

**中文翻译:**
嗯。

---

### [00:25:14] Lenny

**English:**
Yeah. And then, their mean time to their fail rate is less than 10%, and their mean time to recovery is less than an hour. Basically you're doing great. That's kind of the message of this framework, at least.

**中文翻译:**
是的。如果他们的变更失败率低于 10%，平均恢复时间少于一小时，基本上你就做得非常出色了。至少这是这个框架传达的信息。

---

### [00:25:29] Nicole Forsgren

**English:**
And if you're not doing it through brute force and killing yourself. Now can I jump in here, please? Because then people are like, "But how do I do this?" So let's say that you're not in that category, and you're like because this is the next... this is the piece of criticism I'll get about DORA, right. People are like, "Well, all you've done is make me feel bad. You gave me these metrics. You've judged me. Now I feel bad." And then I'm like, "So there's DORA there." I wrote a book called Accelerate, which is the first four years of the research compiled and put together and expanded in a few things.

**中文翻译:**
而且前提是你不是靠蛮力和拼命才做到的。现在我能插句话吗？因为人们会问：“但我该怎么做呢？”假设你不在那个精英类别里，你会觉得（这是我收到的关于 DORA 的下一波批评）：“你所做的只是让我感觉很糟。你给了我这些指标，你评判了我，现在我很难受。”然后我会说：“DORA 就在那里。”我写了一本书叫《加速》（Accelerate），那是前四年的研究成果汇编、整理并进行了一些扩展。

---

### [00:26:06] Nicole Forsgren

**English:**
And I'll joke, "There's a whole rest of the book, right." DORA is best known for the four metrics, but there's an entire research program supporting it. So it's not just these four metrics. What we find is that if you improve a set of capabilities... I loved your question around what is DevOps? DevOps is not a toolchain you buy. Marketing teams labeled toolchains DevOps because they wanted your money. DevOps is a set of capabilities. They're technical capabilities. They're architectural capabilities.

**中文翻译:**
我会开玩笑说：“书里还有剩下的内容呢。”DORA 最出名的是那四个指标，但背后有一个完整的研究项目在支撑。所以不仅仅是这四个指标。我们发现，如果你改进一系列能力……我很喜欢你刚才问的“什么是 DevOps”。DevOps 不是你买来的工具链。营销团队把工具链贴上 DevOps 的标签是因为他们想赚你的钱。DevOps 是一系列能力。它们是技术能力、架构能力。

---

### [00:26:34] Nicole Forsgren

**English:**
They're cultural capabilities. They are lean management practices that predict speed and stability. And then speed and stability gives you money, right, because it's your ability to create these features that give you money. So when you work backwards, if you want money, you get the features fast. If you want the features fast and stable, you do the things. And the things are technical capabilities like automated testing, CI/CD.

**中文翻译:**
它们是文化能力。它们是预测速度和稳定性的精益管理实践。而速度和稳定性会为你带来收益，因为那是你创造能赚钱的功能的能力。所以倒推回来，如果你想要收益，你就要快速交付功能。如果你想要功能交付得既快又稳，你就要做那些事。而那些事就是技术能力，比如自动化测试、CI/CD。

---

### [00:27:04] Lenny

**English:**
And CI/CD is continuous integration/continuous deployment, is that right?

**中文翻译:**
CI/CD 是指持续集成/持续部署，对吗？

---

### [00:27:08] Nicole Forsgren

**English:**
Yes. Mm-hmm. Trunk based development using a version control system, right. So do you have good technical practices? Do you have good architectural practices? Do you have a loosely coupled system? Are you using the cloud? Or if you're not in the cloud for whatever reason, are you using the underlying architectural pieces that enable good cloud to do the cloud, right? Or if you're in the cloud and you're not realizing benefits, is it because doing the cloud wrong, right? Do you have a good culture?

**中文翻译:**
是的。嗯。还有使用版本控制系统的基于主干的开发（Trunk-based development）。所以，你有良好的技术实践吗？你有良好的架构实践吗？你有一个松耦合的系统吗？你在使用云吗？或者如果你因为某种原因没用云，你是否使用了那些能让云发挥作用的底层架构组件？或者如果你在云端却没看到收益，是不是因为用云的方式不对？你有良好的文化吗？

---

### [00:27:48] Nicole Forsgren

**English:**
So you don't just magically go fast and have stability. So working backwards, which pieces are you struggling on? Now you kind of noted down the benchmarks. If you go to dora.dev, the team at Google was lovely. We worked really closely with the team, and they're keeping this updated. You can take a quick check. There's a button there that says, "Quick check." And you can plug in where you kind of think you are.

**中文翻译:**
所以你不会魔术般地突然变快并保持稳定。倒推回来，你在哪些环节挣扎？刚才你记下了基准数据。如果你去 dora.dev，谷歌的团队非常棒，我们与他们密切合作，他们一直在更新。你可以做一个“快速检查”（Quick check）。那里有一个按钮，你可以输入你认为自己所处的位置。

---

### [00:28:13] Nicole Forsgren

**English:**
Like I said, you can hunch it, and it'll tell you where you are in the benchmarks today and what industry you're in. And then the cool part is it'll say... Now you'll want to ask yourself, "Where am I struggling?" But it'll say, "For your performance profile and for the industry that you're in, statistically over the last several years, these are probably your constraints, AKA, these are probably the things that you're struggling in right now." For people in finance who are high performers, they tend to struggle with these four things, whether it's like culture or continuous integration or whatever.

**中文翻译:**
就像我说的，你可以凭直觉填，它会告诉你你在今天的基准中处于什么位置，以及你所在的行业。最酷的部分是它会说……现在你想问自己：“我在哪里挣扎？”它会说：“根据你的表现概况和你所在的行业，从过去几年的统计数据来看，这些可能是你的瓶颈，也就是说，这些可能是你目前正在挣扎的事情。”对于金融行业的高表现者，他们往往在文化或持续集成等四件事上遇到困难。

---

### [00:28:54] Lenny

**English:**
I love that you're getting tactical with how to actually improve these already, which is the bread and butter of this podcast.

**中文翻译:**
我喜欢你已经开始讨论如何实际改进这些的战术细节了，这正是本播客的核心内容。

---

### [00:28:59] Lenny

**English:**
And so we'll link to this quick check. [inaudible 00:29:02] dora.dev/quickcheck.

**中文翻译:**
我们会附上这个快速检查的链接：dora.dev/quickcheck。

---

### [00:29:03] Nicole Forsgren

**English:**
And by the way, they do not collect your name. They do not collect your info. There's no lead, lead gen, anything. Everything's just there. And then, there's deep dives into every single one of the capabilities.

**中文翻译:**
顺便说一下，他们不收集你的姓名，不收集你的信息。没有潜在客户开发（lead gen）之类的东西。一切都在那里。而且，还有对每一项能力的深入探讨。

---

### [00:29:15] Lenny

**English:**
Amazing. And also your book talks about all these things. So people should go check out the book. Obviously it's on Amazon. Search Accelerate. Is that right?

**中文翻译:**
太棒了。你的书也讨论了所有这些事情。所以大家应该去看看那本书。显然亚马逊上就有，搜索《Accelerate》（加速），对吗？

---

### [00:29:22] Nicole Forsgren

**English:**
Yep.

**中文翻译:**
没错。

---

### [00:29:23] Lenny

**English:**
Okay. So we were talking about DORA. This may be a good time to talk about SPACE, which I think is a different framework you recommend. What is that all about?

**中文翻译:**
好的。我们刚才在聊 DORA。现在可能是聊聊 SPACE 的好时机，我想这是你推荐的另一个框架。那是关于什么的？

---

### [00:29:31] Nicole Forsgren

**English:**
Okay, so SPACE is a way to measure, we say productivity, developer productivity, but it's a little bit more than that. SPACE is a good way to measure any type of complex creative work. Now, how do they relate? Let's say you go through the quick check. It points out four things, and you decide you want to improve continuous integration and culture, right. Well, now you're like, "Cool, but how am I going to actually measure them?" This is where SPACE comes in because SPACE helps you figure out SPACE gives you a framework to pick the right metrics.

**中文翻译:**
好的，SPACE 是一种衡量方式，我们说是衡量生产力、开发者生产力，但它不止于此。SPACE 是衡量任何类型的复杂创意工作的有效方法。那么它们是如何关联的呢？假设你做了快速检查，它指出了四件事，你决定要改进持续集成和文化。现在你会想：“太好了，但我该如何实际衡量它们呢？”这就是 SPACE 发挥作用的地方，因为它为你提供了一个选择正确指标的框架。

---

### [00:30:12] Nicole Forsgren

**English:**
Now some people are like, "Well, SPACE you didn't give me the exact metrics." People love DORA because it's like, "Here's the exact four you need." Well, SPACE is like when you want to measure something that's complex, creative work, maybe like developer productivity. There's also an example at the bottom for incident management. When you have something you want to measure, it says, "Within your context, within the metrics you have available to you, here's how to pick."

**中文翻译:**
现在有些人会说：“但是 SPACE，你没给我具体的指标啊。”人们喜欢 DORA 是因为它是：“这就是你需要的具体的四个指标。”而 SPACE 则是，当你想要衡量复杂的创意工作（比如开发者生产力）时，它会告诉你：“在你的背景下，利用你现有的指标，你应该这样选。”在 SPACE 的底部还有一个关于事故管理的例子。

---

### [00:30:40] Nicole Forsgren

**English:**
That's what SPACE is good for. Now we called it SPACE because it stands for the five dimensions that you want to measure. So S is satisfaction and wellbeing. So satisfaction wellbeing is kind of self-explanatory. Now, some people might jump in here and say, "Oh, well, you're just touchy-feely." This actually matters because we find that satisfaction wellbeing ends up being incredibly highly correlated with all of the other dimensions of productivity and doing things well.

**中文翻译:**
这就是 SPACE 的用武之地。我们之所以叫它 SPACE，是因为它代表了你想要衡量的五个维度。S 代表满意度与福祉（Satisfaction and wellbeing）。这很好理解。有些人可能会跳出来说：“哦，你这太感性了。”但这真的很重要，因为我们发现满意度和福祉最终与生产力的所有其他维度以及把事情做好有着极高的相关性。

---

### [00:31:09] Nicole Forsgren

**English:**
And as soon as satisfaction and wellbeing, things like sustainability, if you're satisfied, as soon as that starts falling off, other things start to break. So this can be an incredibly strong and important signal. P is performance. This is going to be the outcome of a process. So reliability within DORA, the MTTM or change fail rate. Those are both performance metrics.

**中文翻译:**
一旦满意度和福祉（比如可持续性）开始下降，其他事情也会开始崩溃。所以这可以是一个极其强烈且重要的信号。P 代表性能/表现（Performance）。这是流程的结果。比如 DORA 中的可靠性、MTTR 或变更失败率，这些都是性能指标。

---

### [00:31:34] Lenny

**English:**
And so you pick one to kind of measure as performance.

**中文翻译:**
所以你会选一个来作为性能的衡量标准。

---

### [00:31:37] Nicole Forsgren

**English:**
Yep. A is activity. Anytime you have a count or a number of something. And these we see all the time because they're super easy to instrument and automate, right. Number of pull requests, number of check-ins, number of something, that's A. C is communication and collaboration. This can be how people work and talk together. It can be meetings. It can be collaboration. It can also be how our systems communicate together. It can be the searchability of a code base. And then ease efficiency and flow. So this is going to be the flow through the system.

**中文翻译:**
是的。A 代表活动（Activity）。任何时候你对某样东西进行计数或统计数量。这些指标我们经常见到，因为它们非常容易通过工具实现自动化。比如 PR 的数量、签入的数量、某样东西的数量，这就是 A。C 代表沟通与协作（Communication and collaboration）。这可以是人们如何一起工作和交谈，可以是会议，可以是协作。也可以是我们的系统如何相互通信，可以是代码库的可搜索性。最后是 E，代表效率与流程（Efficiency and flow）。这是指系统中的流动。

---

### [00:32:11] Nicole Forsgren

**English:**
It can be the time through the system. If we think about SRE or incident management, it can be the number of hops a ticket takes until it reaches the right person. Now, to use SPACE correctly, we want to use at least three dimensions at a time because that helps us balance. Turns out DORA is actually implementation of SPACE. So DORA would be SPACE for mostly that outer loop. So again, once you've found something that you want to improve, find the metrics that make sense to you, try to have them be in balance or intention so you don't throw something out of whack, but pick three.

**中文翻译:**
它可以是穿过系统的时间。如果我们考虑 SRE 或事故管理，它可以是一个工单到达正确的人手中所经过的跳转次数。为了正确使用 SPACE，我们建议一次至少使用三个维度，因为这有助于我们保持平衡。事实证明，DORA 实际上是 SPACE 的一种实现。DORA 主要是针对“外环”的 SPACE 实现。所以，一旦你找到了想要改进的地方，找到对你有意义的指标，尽量让它们保持平衡或存在一定的张力，这样你就不会让某一方面失衡，但记得选三个。

---

### [00:32:52] Lenny

**English:**
So when you say DORA is an implementation of SPACE, one has five buckets, one has four. How do you actually think about that?

**中文翻译:**
当你说 DORA 是 SPACE 的一种实现时，一个有五个维度，一个有四个指标。你具体是怎么看的？

---

### [00:32:59] Nicole Forsgren

**English:**
So SPACE is there to help you think about how you want to pick metrics, right. So a lot of time I see people... So [inaudible 00:33:06] half step back. I used to advise people on how to pick metrics. For years people would pull me in to advise on DORA or Accelerate. They would ask me questions, but it ended up being metrics questions a lot. "How do I pick the right metrics to improve what I'm doing?" Like I said, they had the DORA numbers. They would pick their constraints, and they wanted to improve.

**中文翻译:**
SPACE 是为了帮助你思考如何选择指标。很多时候我看到人们……让我退后半步。我以前经常建议人们如何选择指标。多年来，人们请我为 DORA 或《加速》提供建议，他们会问我问题，但最后往往变成了很多关于指标的问题：“我该如何选择正确的指标来改进我的工作？”就像我说的，他们有了 DORA 的数据，他们选出了瓶颈，他们想要改进。

---

### [00:33:29] Nicole Forsgren

**English:**
"But how do I improve? How do I measure this? How do I show improvement?" And so we would start thinking really critically about which metrics were the right metrics to pick. And I would always say make sure you pick balanced metrics. Make sure you pick metrics that are intention. And I could say it, but people have a hard time wrapping that around their heads because they kept picking things like number of lines of code, never picked number of lines of code.

**中文翻译:**
“但我该如何改进？我该如何衡量？我该如何展示进步？”于是我们会开始非常批判性地思考哪些指标才是正确的选择。我总是会说，确保你选择了平衡的指标，确保你选择的指标之间存在张力。虽然我这么说，但人们很难理解，因为他们总是在选诸如“代码行数”之类的东西——千万别选代码行数。

---

### [00:33:58] Lenny

**English:**
Oh, wow.

**中文翻译:**
噢，哇。

---

### [00:34:00] Nicole Forsgren

**English:**
Number of... Still every month I get email about this. Number of pull requests, number of commits. And I was like, "These are all activity metrics." And so finally I pulled a few of my friends together and I was like, "Let's come up with a framework to help people think about it." And so there are five broad categories, pick three because that will help force you through the mental exercise of, "What could I possibly pick?" You don't need all five, right. This isn't... We're not playing bingo. We're not playing blackout bingo. You don't need all of them but try to have at least three across different dimensions.

**中文翻译:**
还有……直到现在每个月我还会收到关于这个的邮件。PR 数量、提交数量。我会说：“这些全是活动指标。”所以最后我召集了几个朋友，我说：“让我们想出一个框架来帮助人们思考这个问题。”于是就有了这五个大类，选三个，因为这会迫使你进行思考：“我到底能选什么？”你不需要全部五个。这不是在玩宾果游戏，你不需要全部，但尽量在不同维度上至少选三个。

---

### [00:34:48] Nicole Forsgren

**English:**
Now one example here. I was working with a group that wanted to improve their pull requests very generally. They just said improve pull requests. So they were thinking about pinging someone every 15 minutes, and I was like, "Oh, this is going to be bad." Because we know from other literature and research like nursing, you'll get alert fatigue, where people will just start tuning out alerts. Either they'll turn them off, or they will just stop hearing them. So number of alerts, right. They're like, "Let's just think about number of alerts." And I said, "Well, but if we think about efficiency and flow, how much time do you have to work on your coding?" So those two are balanced. So we need to protect time to work as well as code review time.

**中文翻译:**
举个例子。我曾与一个想要改进 PR 流程的团队合作。他们只是笼统地说要改进 PR。所以他们考虑每 15 分钟提醒一次相关人员，我说：“噢，这会很糟糕。”因为我们从护理等其他领域的文献和研究中知道，你会产生“警报疲劳”，人们会开始屏蔽警报。要么关掉它们，要么干脆听而不闻。所以关于警报数量，他们说：“让我们只考虑警报数量。”我说：“好吧，但如果我们考虑效率和流程，你有多少时间专注于编写代码？”所以这两个是平衡的。我们需要保护编写代码的时间，也要保护代码审查的时间。

---

### [00:35:39] Lenny

**English:**
How do you go about actually capturing and measuring the say satisfaction?

**中文翻译:**
你如何实际捕捉和衡量所谓的满意度？

---

### [00:35:43] Nicole Forsgren

**English:**
So for satisfaction, I would generally ask, right. Go ahead and ask now the ones that you instrument, you can instrument and pull out of systems all the time, right. Go ahead and grab that string. For satisfaction metric, I would only pull that periodically once every few months.

**中文翻译:**
对于满意度，我通常会直接问。那些你可以通过工具测量的指标，你可以随时从系统中提取。但对于满意度指标，我只会每隔几个月定期提取一次。

---

### [00:36:01] Lenny

**English:**
Like a survey to your engineering team.

**中文翻译:**
比如对工程团队进行调查。

---

### [00:36:02] Nicole Forsgren

**English:**
Like a survey. Yep, absolutely.

**中文翻译:**
是的，调查问卷，绝对是。

---

### [00:36:04] Lenny

**English:**
Awesome.

**中文翻译:**
太棒了。

---

### [00:36:05] Nicole Forsgren

**English:**
And don't discount what people say, right. Sometimes I hear... Actually not sometimes. A lot of times, I hear people say, "Oh, but people lie." First of all, what is their incentive to lie? Why would they lie about having a bad system? Because it's bad, and they want it fixed, right. If it's absolutely a hostile work environment, they might lie and then tell you it's good. Then you have bigger problems, right. Also, do we ever see bad data from our systems or incomplete data from our systems? That's a lie, but we find ways to deal with it. We see it. We acknowledge it. We look for holes in our system data.

**中文翻译:**
不要轻视人们说的话。有时我听到……实际上不是有时，是很多时候，我听到人们说：“哦，但人们会撒谎。”首先，他们撒谎的动机是什么？他们为什么要谎称系统很好？如果系统很烂，他们肯定想修好它。如果工作环境极其恶劣，他们可能会撒谎说很好，但那样的话你就有更大的问题了。另外，我们难道没见过系统产生的错误数据或不完整数据吗？那也是一种“谎言”，但我们会想办法处理它。我们看到它，承认它，寻找系统数据中的漏洞。

---

### [00:36:46] Nicole Forsgren

**English:**
We try to deal with it, right. That's also a lie. So I think there are better ways to think about and deal with that and then try to work with it because and I wrote a paper with Mik Kersten on this several years ago on how data from people and data from systems are really important compliments because we can get certain insights from people that we'll never get from systems. Let's look at lead time from changes, for example, from commit to deploy. The speed might be fine, but people might tell you it's taking absolute heroics. It's some ridiculous Rube Goldberg machine.

**中文翻译:**
我们会尝试处理它，对吧？那也是谎言。所以我认为有更好的方式来思考和处理这些，并尝试与之共存。几年前我和 Mik Kersten 写过一篇论文，讨论人的数据和系统的数据是如何互补的，因为我们可以从人那里获得一些系统永远无法提供的洞察。以变更交付周期为例，从提交到部署，速度可能看起来没问题，但人们可能会告诉你，这需要付出英雄般的努力，整个过程就像一个荒谬的鲁布·戈德堡机械（复杂且低效）。

---

### [00:37:27] Nicole Forsgren

**English:**
The system will never tell you that. Or you could get data on your version control system. I worked with a company several years ago, and we found out that there was a significant portion of code that was just not going into any version control system. You're never going to find that out from your systems because it's not in the systems, and it was mission-critical.

**中文翻译:**
系统永远不会告诉你这些。或者你可以获取版本控制系统的数据。几年前我曾与一家公司合作，我们发现有相当大一部分代码根本没有进入任何版本控制系统。你永远无法从系统中发现这一点，因为它不在系统里，而它却是任务关键型的。

---

### [00:37:52] Lenny

**English:**
I can see why people come to you asking for advice on metrics because you have this framework of, "Here's the type of metrics you want." And then I think, and especially from an engineering team, there's going to be this like, "How do I optimize and make sure I'm doing the right thing and measuring the right things." For someone that wants to do this, and an hour long podcast isn't going to give them all the answers, what do you recommend they go read or go do or look at to help them figure that out?

**中文翻译:**
我明白为什么人们会找你咨询指标方面的建议了，因为你有这个框架：“这就是你想要的指标类型。”而且我认为，特别是在工程团队中，总会有这种想法：“我该如何优化并确保我做的是正确的事，衡量的是正确的东西。”对于想要这样做的人，一小时的播客无法给他们所有答案，你建议他们去读什么、做什么或看什么来帮助他们弄清楚？

---

### [00:38:17] Nicole Forsgren

**English:**
One, I hate to be this person, but I'll point to a few of my papers. I will say I write things down because I get asked them so often, and I want to make sure it is broadly applicable or broadly available, I guess. This SPACE paper, for sure. It's an ACM, and I think the year we published, it was the most read paper at ACMQueue. Yeah. So we tried to make it as readable as possible. So the SPACE paper is nice because it outlines this framework and it gives examples of metrics in every single category. And so hopefully people can look at this and they can [inaudible 00:38:54], "Okay, here's an example to use here, right. Here are some of the things that I could possibly use."

**中文翻译:**
首先，我不想自卖自夸，但我会推荐我的几篇论文。我写下来是因为经常有人问我，我想确保这些内容具有广泛的适用性或可获得性。SPACE 论文肯定要读。它发表在 ACM 上，我想在我们发表的那一年，它是 ACMQueue 上阅读量最高的论文。是的，我们尽量让它通俗易懂。SPACE 论文很好，因为它概述了这个框架，并给出了每个类别的指标示例。希望人们看了之后能说：“好吧，这里有一个可以用的例子，这些是我可能用到的东西。”

---

### [00:39:00] Nicole Forsgren

**English:**
And we're seeing that SPACE is being used lots and lots of different places. Another good one could be the paper that I mentioned with Mik Kersten, and it was about... we talked about using data from people and data from systems. We wrote it up in the DevOps context. I want to say this was written in 2016 or 2017 or something. But it helps you think through what types of data are good in which situations because you will never find yourself in a situation when you don't want both types of data. Even teams that I've worked with that are the most advanced. They have absolute instrumentation in every possible scenario.

**中文翻译:**
我们看到 SPACE 正在被越来越多的地方使用。另一篇不错的论文是我提到的与 Mik Kersten 合作的那篇，关于使用人的数据和系统的数据。我们是在 DevOps 的背景下写的，大概是 2016 或 2017 年。它能帮你思考在哪些情况下哪种类型的数据更好，因为你永远不会遇到只需要一种数据的情况。即使是我合作过的最先进的团队，他们在每一个可能的场景中都有极其完备的测量手段。

---

### [00:39:46] Nicole Forsgren

**English:**
In the most detailed way, they will still survey their developers at least once a year because you can get new insights, right. One book that I love. It's a little dense, but it's really interesting that I love is How to Measure Anything. And it's by Hubbard, and there are parts of it that are real stats heavy, but he has this portion in the front that's in covering intangibles. So it's like, what happens when you don't have data? You have no data. You're starting from nothing. What are good ways to hunch data? And I really love that because he covers some really good ground there.

**中文翻译:**
即使是最细致的团队，他们仍然会每年至少调查一次开发者，因为你可以获得新的洞察。我喜欢的一本书是《如何衡量一切》（How to Measure Anything），作者是 Hubbard。虽然有点深奥，但非常有趣。书中有些部分统计学内容很重，但他在前面有一部分专门讲如何衡量无形资产。比如，当你没有数据时该怎么办？你从零开始，有哪些好的方法可以凭直觉估算数据？我非常喜欢那部分，因为他讲得非常透彻。

---

### [00:40:34] Lenny

**English:**
Today's entire episode is brought to you by DX, a platform for measuring and improving developer productivity. DX is designed by the researchers behind frameworks such as DORA, SPACE, and DevX, including Nicole Forsgren, who is my guest for this very episode. If you've tried measuring developer productivity, you know that there are a lot of basic metrics out there and a lot of ways to do this wrong, and getting that full view of productivity is still really hard.

**中文翻译:**
今天的整集节目由 DX 赞助，这是一个衡量和提高开发者生产力的平台。DX 由 DORA、SPACE 和 DevX 等框架背后的研究人员设计，其中就包括本期嘉宾 Nicole Forsgren。如果你尝试过衡量开发者生产力，你就会知道市面上有很多基础指标，也有很多错误的做法，而要获得生产力的全貌仍然非常困难。

---

### [00:40:59] Lenny

**English:**
DX tackles this problem by combining qualitative and quantitative insights based on the very research Nicole and her team have done, giving you full clarity into how your developers are doing. DX is used by both startups and Fortune 500 companies, including companies like Twilio, Amplitude, eBay, Brex, Toast, Pfizer, and Procter & Gamble. To learn more about DX and get a demo of their product, visit their website at getdx.com/lenny. That's getdx.com/lenny. You also mentioned offline that you might be working on a book that will answer a lot of these questions. Is that something you're up for chatting about?

**中文翻译:**
DX 通过结合定性和定量的洞察力来解决这个问题，这些洞察力基于 Nicole 及其团队所做的研究，让你清晰地了解开发者的工作状态。DX 被初创公司和财富 500 强公司广泛使用，包括 Twilio、Amplitude、eBay、Brex、Toast、辉瑞和宝洁等。要了解更多关于 DX 的信息并获取产品演示，请访问他们的网站 getdx.com/lenny。你在私下也提到你可能正在写一本能回答很多这些问题的书。你愿意聊聊这个吗？

---

### [00:41:36] Nicole Forsgren

**English:**
Yeah, absolutely. So as I mentioned, I tend to write things down when I get asked questions on it a lot. And so this is one in particular. So we'll be covering... I'm starting to go through, and I'm covering some of these, and I think some of the important topics in particular are starting with what is your problem or what is your goal and being super, super crisp on it, right. What is it that we're trying to answer? And I would say this is a bigger challenge than most people recognize or realize.

**中文翻译:**
当然可以。正如我提到的，当被问到很多次同一个问题时，我倾向于把它写下来。这就是其中之一。我们将涵盖……我正开始梳理其中的一些内容，我认为特别重要的一些主题包括：从你的问题或目标开始，并且要非常、非常清晰。我们试图回答的是什么？我会说，这是一个比大多数人意识到或承认的还要大的挑战。

---

### [00:42:11] Nicole Forsgren

**English:**
I'm making this set up, right. 80% of the folks that I work with, this is their biggest problem. Even at executive levels, they'll ask their team, or teams will come back with uncertainty, and they'll say like, "Well, you told me to improve developer experience." I'm like, "Okay, great. What do you mean by that?" And then teams will have gone off for several months, and they're tackling something, and they'll come back, and they'll be like, "Oh, well, wasn't what I meant."

**中文翻译:**
我正在构建这个体系。在我合作的人中，80% 的人的最大问题就在这里。即使在管理层，他们会要求团队改进，或者团队带着不确定性回来，说：“你看，你告诉我要提高开发者体验。”我会问：“好极了，你指的到底是什么？”然后团队会忙活好几个月去解决某个问题，回来后管理层却说：“哦，那不是我的意思。”

---

### [00:42:38] Nicole Forsgren

**English:**
And I'm like, "Okay, what do you mean by this? Are you talking about inner and outer loop? Are you talking about friction? Are you talking about culture?" Because sometimes they're talking about culture. "And if you're talking about culture, this is an incredibly valid answer. But if you're talking about culture, this is totally different than if you're talking about friction in toolchains, right. And if you're on different pages, you're heading in completely different directions."

**中文翻译:**
我会问：“好吧，你指的到底是什么？你是在谈论内环和外环吗？你是在谈论摩擦力吗？还是在谈论文化？”因为有时他们谈论的是文化。“如果你谈论的是文化，这是一个非常有效的答案。但如果你谈论的是文化，这与谈论工具链中的摩擦力是完全不同的。如果大家的理解不在一个频道上，你们前进的方向就会南辕北辙。”

---

### [00:43:05] Nicole Forsgren

**English:**
So that's one thing we cover, which seems obvious, but trust me, it's not. And then even how do you... We're going to do kind of a rough version of how do you start measuring from nothing and also the measurement journey, right. How do you think about the trade-offs between and the proportion of measurement between subjective data, right, data from people. So you have Azure interviews, and you have surveys and objective data, stuff you get from systems. Because when you first start off, you'll be relying much more on data from people.

**中文翻译:**
这是我们要涵盖的一件事，看起来显而易见，但相信我，事实并非如此。然后还有……我们将做一个初步版本，关于如何从零开始衡量，以及衡量的历程。你如何思考主观数据（来自人的数据，比如访谈和调查）与客观数据（来自系统的数据）之间的权衡和比例。因为当你刚开始时，你会更多地依赖来自人的数据。

---

### [00:43:42] Nicole Forsgren

**English:**
You can get a relatively quickly. But as you kind of transition through this measurement journey, you'll get more and more data from your systems because it's scalable. It can be engineered. You can be doing much more with it. And also, you should be thinking about, "Don't let the perfect be the enemy of the good." So how do we think about this very, very strategically? How do we transition through this? How do we think about what each piece of data is for?

**中文翻译:**
你可以相对快速地获得这些数据。但随着你在这个衡量历程中转型，你会从系统中获得越来越多数据，因为它是可扩展的，是可以工程化的，你可以用它做更多事情。此外，你应该记住：“不要让完美成为优秀的敌人。”所以我们如何从战略角度思考这个问题？我们如何完成这个转型？我们如何思考每一份数据的用途？

---

### [00:44:09] Nicole Forsgren

**English:**
And also lots and lots of examples. So I have included example interview scripts. How do you select people? How do you screen people? Example survey scripts. What are some of the analyses we should do? And trying to make this incredibly accessible, so basically anyone can do this. So you do not need to be a data scientist, but if you have one on staff, you can hand them some of this and just let them run.

**中文翻译:**
书中还有大量的例子。我包含了访谈脚本示例、如何选人、如何筛选人、调查问卷脚本示例，以及我们应该做哪些分析。我试图让这些内容变得极其易懂，基本上任何人都能上手。你不需要成为数据科学家，但如果你手下有数据科学家，你可以把这些交给他们，让他们去执行。

---

### [00:44:32] Lenny

**English:**
I think this book is going to do extremely well. Definitely come back on when it is out. I think you said maybe year-ish kind of timeframe?

**中文翻译:**
我认为这本书会卖得非常好。书出版的时候一定要再来节目。我想你说的期限大概是一年左右？

---

### [00:44:39] Nicole Forsgren

**English:**
Yeah, probably about a year by the time we get all the way through.

**中文翻译:**
是的，等全部完成大概需要一年时间。

---

### [00:44:41] Lenny

**English:**
If people want to be notified when it's out, can they sign up on your site for newsletter or anything like that? Is there any way to be in the loop as it approaches?

**中文翻译:**
如果大家想在书出版时收到通知，可以在你的网站上订阅时事通讯之类的吗？有什么办法可以随时了解进度吗？

---

### [00:44:49] Nicole Forsgren

**English:**
Oh, yeah, absolutely. Yeah, I'll add a link for that. Also, if anyone is doing some of this work now, if they have major questions that they would love to [inaudible 00:45:00] me to answer if they have success stories, if they have case studies, if they have anything that they would love to be included. I remember when I wrote Accelerate before, there were a couple folks that reached out after, and they were like, "Oh, I wanted to have something included." Now I've learned. Today I've learned, right. If there's anything that folks would love to be in discussion with me about, I'm always eager to chat and nerd out about DevX and especially measurement and measurement journeys.

**中文翻译:**
噢，当然可以。我会加一个链接。另外，如果有人现在正在做这方面的工作，如果有重大问题想让我回答，或者有成功案例、案例研究，或者任何想被收录进书里的内容，都可以联系我。我记得写《加速》时，后来有几个人联系我说：“噢，我本来想把某某内容放进去的。”现在我吸取教训了。如果大家有什么想和我讨论的，我总是很乐意聊聊 DevX，尤其是衡量标准和衡量历程。

---

### [00:45:28] Lenny

**English:**
Awesome. I usually ask this at the end, and I have more questions, but while we're here, how would people reach out to you? What's the best way to contact you?

**中文翻译:**
太棒了。我通常在最后问这个，我还有更多问题，但既然聊到这了，大家该如何联系你？联系你的最佳方式是什么？

---

### [00:45:35] Nicole Forsgren

**English:**
On my website, I've got info.nicolefv@gmail [inaudible 00:45:40]-

**中文翻译:**
在我的网站上，我有 info.nicolefv@gmail……

---

### [00:45:40] Lenny

**English:**
Awesome. Okay, a few more questions.

**中文翻译:**
太好了。好的，还有几个问题。

---

### [00:45:42] Nicole Forsgren

**English:**
Awesome. Thanks.

**中文翻译:**
太棒了，谢谢。

---

### [00:45:43] Lenny

**English:**
What are the most common pitfalls that companies run into when they're trying to roll out any sort of developer experience, developer productivity, system measurements, improvements?

**中文翻译:**
公司在尝试推行任何形式的开发者体验、开发者生产力、系统衡量或改进时，最常见的陷阱是什么？

---

### [00:45:53] Nicole Forsgren

**English:**
I think one I just mentioned, right. Not being clear or not understanding what it is that they're looking for because then you can have a thousand flowers bloom, and everyone's kind of running in a different direction. I think another one is not pursuing this in both a top-down and a bottom-up structure, right. And I think that can really help drive success, and having good communication throughout is super, super important, right.

**中文翻译:**
我想其中一个就是我刚才提到的：不清晰或不理解他们到底在寻找什么。因为那样会导致“百花齐放”，每个人都朝着不同的方向跑。我认为另一个陷阱是没有同时采用自上而下和自下而上的结构。我认为这真的能帮助推动成功，而且全程保持良好的沟通极其重要。

---

### [00:46:26] Nicole Forsgren

**English:**
So getting your ICs bought in and helping them understand that this is for them. We want to understand what they're doing. Knowing what vocabulary they use, what terminology they use is super important. And then chatting with leaders and understanding what their motivations are or helping them understand what the motivations could be. This kind of hearkens back to one of our earliest chats on why I even got into this and how I see two different sides to the conversation on why is DevOps even a thing? Why should we even ship faster?

**中文翻译:**
要让你的个人贡献者（IC）认同并帮助他们理解这是为了他们好。我们想了解他们在做什么。了解他们使用的词汇和术语非常重要。然后与领导者交谈，了解他们的动机，或者帮助他们理解可能的动机是什么。这又回到了我们最早聊到的：我为什么进入这个领域，以及我如何看待关于“为什么 DevOps 会存在？为什么我们要交付得更快？”这两个不同层面的对话。

---

### [00:47:03] Nicole Forsgren

**English:**
There are so many people that I talk to that are super passionate about DevX right now, and they're like, "How can I convince my executive team this is important?" Because their developers are just completely burning out, or they use computers and anger every day. And so it's like, "How can we have the right tools to socialize this to our leaders as well?" Because this should be a priority. This needs to be a strategic piece, and how can we help pull together the right value points to communicate this and to understand what their priorities are so that we can see how this fits in, right.

**中文翻译:**
我接触过很多人，他们现在对 DevX 非常有激情，他们会问：“我该如何说服我的执行团队这很重要？”因为他们的开发者已经完全精疲力竭了，或者他们每天都在愤怒中操作电脑。所以问题是：“我们如何拥有正确的工具来向领导层宣传这一点？”因为这应该是一个优先级，这需要成为战略的一部分。我们如何帮助整合正确的价值点来传达这一点，并了解他们的优先级，从而看清这如何融入其中。

---

### [00:47:43] Lenny

**English:**
You've been working in this space for a long time, probably longer than anyone that has ever worked on this area of developer experience productivity. What have you seen change most from the time you started working in the space to today? What kind of progress has been made?

**中文翻译:**
你在这个领域工作了很长时间，可能比任何人都久。从你开始进入这个领域到今天，你看到最大的变化是什么？取得了什么样的进展？

---

### [00:47:58] Nicole Forsgren

**English:**
We have these increasingly large complex systems, right. So 10 or 15 years ago, the internet was around, but things were really different. Now, almost every company has a really large complex system, right. We also have a shortage of developers, or at least a reported perceived shortage of developers. More companies are technology-driven, or at least they understand they're technology driven. It's like I understand a handful... I remember a handful of years ago when I met with a financial institution whose CTO insisted to me that he was not a tech company like that. That's not real anymore. That doesn't happen anymore, at least very, very rarely.

**中文翻译:**
我们现在的系统越来越庞大且复杂。10 或 15 年前，互联网已经存在，但情况完全不同。现在，几乎每家公司都有一个非常庞大复杂的系统。我们还面临开发者短缺，或者至少是报道中感知的短缺。更多的公司是由技术驱动的，或者至少他们意识到自己是技术驱动的。我记得几年前我遇到一家金融机构，其 CTO 向我坚称他们不是那样的技术公司。现在这种说法已经不复存在了，至少非常罕见。

---

### [00:48:39] Nicole Forsgren

**English:**
So all of these things come together, and suddenly, many more companies are like, "We have to be better at this." And that was not always the case five to 10 years ago. I used to have to really explain why this was a pressing concern and why it would continue to be a oppressing concern. And now, in the last six to nine to 12 months, we have this AI moment happening, and it just poured gas on top of everything because now what's important... We've always said that [inaudible 00:49:14] execution's important, but now this is absolutely true because it's not just about what it is that you build.

**中文翻译:**
所有这些因素交织在一起，突然间，越来越多的公司意识到：“我们必须在这方面做得更好。”五到十年前情况并非总是如此。我以前不得不费力解释为什么这是一个紧迫的问题，以及为什么它会持续紧迫。而在过去的 6 到 12 个月里，我们迎来了 AI 时刻，这就像火上浇油一样，因为现在最重要的是……我们一直说执行力很重要，但现在这绝对是真理，因为这不仅仅关乎你构建了什么。

---

### [00:49:23] Nicole Forsgren

**English:**
It's about creating absolutely novel, incredibly new experiences and doing them at a speed that no one has seen before. And the only way to do this is to have this software pipeline that is fast and is safe and is stable, and is reliable. And that's where we're seeing this really interesting convergence, and pressure isn't quite the right word, but it's really forcing the discussion and strategy and prioritization, right.

**中文翻译:**
它关乎创造绝对新颖、令人惊叹的新体验，并以一种前所未有的速度去实现。而实现这一点的唯一方法就是拥有一条快速、安全、稳定且可靠的软件流水线。这就是我们看到的非常有趣的融合点。用“压力”这个词可能不太准确，但它确实在迫使人们进行讨论、制定战略并确定优先级。

---

### [00:50:07] Lenny

**English:**
I'm glad you touched on AI. That was actually exactly where I was going to go next.

**中文翻译:**
很高兴你提到了 AI。这正是我接下来想聊的话题。

---

### [00:50:11] Nicole Forsgren

**English:**
Perfect.

**中文翻译:**
太好了。

---

### [00:50:12] Lenny

**English:**
Yeah, obviously productivity, AI, engineering, something that's top of mind for a lot of people. There's a lot of layoffs that have been happening. There's a lot of talk of we don't need as many engineers. I actually had dinner not too long ago with few, I'd say 10 X engineers, and those are folks that people sometimes say they don't need Copilot. They're not going to use any of these tools. They're already amazing. And they were the opposite. They're like, "This is making me 100% more effective and efficient and I love it."

**中文翻译:**
是的，显然生产力、AI、工程是很多人关注的焦点。最近发生了很多裁员，也有很多关于“我们不需要那么多工程师”的讨论。不久前我和几个（我称之为）“10 倍速工程师”一起吃晚饭，有些人常说这些人不需要 Copilot，他们不会用这些工具，因为他们已经很牛了。但事实恰恰相反。他们说：“这让我效率提高了一倍，我太爱它了。”

---

### [00:50:34] Lenny

**English:**
So clearly good things are happening there. I don't know what the question is specifically, but I guess have you seen the impact of AI on engineering productivity? And has that shifted how you think about developer experience and productivity beyond what you already just shared?

**中文翻译:**
所以显然那里正在发生好事。我不知道具体该怎么问，但我猜，你是否看到了 AI 对工程生产力的影响？除了你刚才分享的内容，这是否改变了你对开发者体验和生产力的看法？

---

### [00:50:54] Nicole Forsgren

**English:**
Absolutely. So yes and, right. I think this is a super interesting open question. So can I answer it just with a whole bunch of questions?

**中文翻译:**
绝对的。我会说“是的，而且”。我认为这是一个非常有趣的开放性问题。我能用一堆问题来回答吗？

---

### [00:51:03] Lenny

**English:**
Absolutely.

**中文翻译:**
当然可以。

---

### [00:51:04] Nicole Forsgren

**English:**
We're absolutely seeing an impact, and we continue to explore this. So I have an interesting question to see how it'll change the SPACE framework. What's open here? I think a few things will remain, right? Satisfaction's still going to be there, performance is still going to be there, activity's still going to be there. How you communicate with people and with the tool efficiency and flow is still going to be there. I believe it will change and add a dimension like trust or reliability. How do I rely? Can I rely on it?

**中文翻译:**
我们绝对看到了影响，并且正在继续探索。我有一个有趣的问题：它将如何改变 SPACE 框架？哪些部分是开放的？我认为有些东西会保留，对吧？满意度依然存在，性能依然存在，活动依然存在。你如何与人沟通、如何与工具沟通，效率和流程依然存在。我相信它会改变并增加一个维度，比如“信任”或“可靠性”。我该如何依赖它？我能依赖它吗？

---

### [00:51:35] Nicole Forsgren

**English:**
Will I have an over-reliance on it? And what we're seeing is that, probably unsurprisingly, people really fundamentally shift the way they work when they work with an AI-enabled tool like GitHub, Copilot, or Tabnine or others because now, instead of just writing code or having a short auto-complete, you spend more time reviewing code than writing code, right. There's this wonderful paper out that uses the Cups model. I'll share it with you. A team at MSR did it. Defines it, "About 50% of your time now is spent reviewing versus writing."

**中文翻译:**
我会过度依赖它吗？我们看到的是（可能并不令人意外），当人们使用 GitHub Copilot、Tabnine 等 AI 工具时，他们的工作方式发生了根本性的转变。因为现在，你不再只是编写代码或使用简短的自动补全，你花在审查代码上的时间比编写代码的时间更多。有一篇很棒的论文使用了 Cups 模型，我会分享给你，是 MSR 的一个团队做的。它定义为：“现在你大约 50% 的时间花在审查上，而不是编写上。”

---

### [00:52:20] Nicole Forsgren

**English:**
But it'll be interesting to see how that changes things longitudinally, right. Because other... Some of my colleagues also did a paper that showed that you can do certain tasks, like build an HTTP server 50% faster, but I don't think that's what productivity's about when you're using an AI tool, frankly. Anyone who's looking at that and dear CEOs or whoever who are like, "Now I can lay off half my workforce." That's not what this is about, right. It's not about taking a task and cutting your time in half because now what've enabled is your ability to do certain things faster and then free up some of your cognitive space so that you can do harder things with this new co-pilot sidecar or something, right.

**中文翻译:**
但从长远来看，这将如何改变现状会很有趣。因为我的一些同事也发表了一篇论文，显示你可以更快地完成某些任务（比如构建 HTTP 服务器的速度提高了 50%），但坦率地说，我不认为这就是使用 AI 工具时生产力的核心。任何看到这一点并心想“现在我可以裁掉一半员工”的 CEO 或其他人，都想错了。这不是关于把一项任务的时间减半，而是关于让你能够更快地完成某些事情，从而释放出一些认知空间，让你能利用这个新的“副驾驶”去处理更困难的事情。

---

### [00:53:03] Nicole Forsgren

**English:**
But also, because now you're accepting text and then reviewing it, we've changed what your mental model is. So we've changed the friction model that you expect. We've changed the cognitive load of what you expect. We're changing reliance on code. So what does this mean for reliance or overreliance? What does this mean for learning? What does this mean for novices versus experts? How do we measure productivity, right? There are a handful of us that are having these discussions on what does this mean and how do we communicate it thoughtfully?

**中文翻译:**
而且，因为你现在是接受文本然后进行审查，我们改变了你的心智模型。我们改变了你预期的摩擦模型，改变了你预期的认知负荷。我们正在改变对代码的依赖。那么，这对依赖或过度依赖意味着什么？对学习意味着什么？对新手和专家意味着什么？我们该如何衡量生产力？我们中的一些人正在讨论这意味着什么，以及我们如何深思熟虑地传达这一点。

---

### [00:53:35] Nicole Forsgren

**English:**
Again, we really need to have these kind of holistic, balanced metrics because if it's an oversimplification, we really risk losing the forest for the trees, right. But it's also super interesting and super compelling, I think. How can we think about learning or onboarding to new code bases or new languages for folks who already know computational learning? I think it's also very different for folks who are just learning programming languages and don't already know things like computational thinking.

**中文翻译:**
再次强调，我们真的需要这种整体的、平衡的指标，因为如果过于简化，我们真的面临“只见树木不见森林”的风险。但我认为这也非常有趣且引人入胜。对于已经具备计算思维的人，我们如何思考学习或上手新的代码库或新语言？我认为对于那些刚开始学习编程语言、还不具备计算思维的人来说，情况会非常不同。

---

### [00:54:05] Lenny

**English:**
If someone was excited to kind of go down this road of, "We're going to focus on developer experience. We're going to focus on helping our engineers be more productive," what are the next step or two that they should take in your opinion just broadly knowing that you don't know any specifics about, say, the company that's thinking about this right now?

**中文翻译:**
如果有人很兴奋地想走这条路，比如“我们要关注开发者体验，我们要帮助工程师提高生产力”，在你看来，他们应该采取的一两个步骤是什么？（考虑到你并不了解这家公司的具体情况）。

---

### [00:54:22] Nicole Forsgren

**English:**
I think if you're walking away from this podcast and you're like, "I'm already working on this, or I think this is a thing that's happening," I would say just go check your work basically, right. Has this been written down? Is there a clearly defined challenge, problem, something? Start there. Absolutely because that is going to be the thing that reduces confusion the best, right. Absolutely. And then see if there's any data. And data can be very loosely defined, right. Is there any signal that is related to the problem? I'd start there. And you can do that. You can do that in a week. You can hunt something down.

**中文翻译:**
我想如果你听完这个播客，觉得“我已经在做这个了，或者我觉得这正在发生”，我会说，基本上就是去检查一下你的工作。这些东西写下来了吗？是否有一个清晰定义的挑战、问题或目标？从那里开始。绝对要这样做，因为那是减少困惑的最佳方式。然后看看是否有任何数据。数据的定义可以很宽泛，是否有任何与问题相关的信号？我会从那里开始。你可以在一周内完成，总能找点东西出来。

---

### [00:55:09] Lenny

**English:**
Sounds like something you could do in a day.

**中文翻译:**
听起来是一天就能完成的事。

---

### [00:55:10] Nicole Forsgren

**English:**
Yeah. Well, depending. Depending on how scattered things are.

**中文翻译:**
是的。嗯，取决于情况，取决于事情有多分散。

---

### [00:55:16] Lenny

**English:**
Are there any companies that you look at as good models of, "They do this really well."

**中文翻译:**
有没有哪些公司是你心目中“做得非常好”的典范？

---

### [00:55:20] Nicole Forsgren

**English:**
I think Google does this incredibly well, and sometimes I hesitate to mention Google because they're like... some people are like, "Well, we can't be Google, and we aren't really advanced." But the thing I love about Google's approach is that they've really taken kind of this measurement phase approach to things, even when they roll it out in new places. They're very systematic in how they measure things. They have incredible telemetry and tooling and instrumentation, and they continue to invest time in developer experience surveys and they triangulate them.

**中文翻译:**
我认为谷歌做得非常好。有时我不太敢提谷歌，因为有些人会说：“嗯，我们成不了谷歌，我们没那么先进。”但我喜欢谷歌方法的一点是，他们真的采取了这种“分阶段衡量”的方法，即使是在新地方推行也是如此。他们在衡量事物方面非常系统。他们拥有惊人的遥测、工具和测量手段，并且持续投入时间进行开发者体验调查，并对数据进行交叉验证。

---

### [00:56:11] Nicole Forsgren

**English:**
And one thing that I also love being able to point out here is if there is ever a disagreement between the surveys and the instrumentation, which is incredibly advanced, almost every time, every that I've ever heard of the surveys are correct and not the instrumentation.

**中文翻译:**
还有一点我也很想指出：如果调查结果和测量工具（即使是非常先进的工具）之间出现了分歧，几乎每一次，据我所知，调查结果才是正确的，而不是测量工具。

---

### [00:56:11] Lenny

**English:**
Amazing. I have just a couple more questions unrelated to this topic. Is there anything else that you thought you think would be useful to share or leave people with around this general space?

**中文翻译:**
太神奇了。我还有几个与此话题无关的问题。关于这个领域，你觉得还有什么有用的东西可以分享或留给大家的吗？

---

### [00:56:22] Nicole Forsgren

**English:**
I would say that thinking about what it is you want to do is always important, right. Like getting crisp, the ability to communicate clearly is always one of the best things. I think one of my superpowers and one of the things that I've been working with my teams on doing and kind of teaching them is, and one of the things that's really leveled up our work in general, is making your work incredibly accessible.

**中文翻译:**
我会说，思考你到底想做什么总是很重要的。比如变得清晰，清晰沟通的能力永远是最棒的事情之一。我认为我的超能力之一，也是我一直带着团队在做并教给他们的，以及真正提升我们整体工作水平的一点，就是让你的工作变得极其易于理解（accessible）。

---

### [00:56:49] Nicole Forsgren

**English:**
And accessible, not necessarily in the accessibility definition of the word, but making it very easy to understand what you're doing for your key audiences. And so thinking about doing that for anything that... anyone who's listening for all of your work is super important, right. So who is it that your audience is? What's their role? What words resonate with them? And then always being able to translate your work into a few sentences or a paragraph or left... or less.

**中文翻译:**
这里的“易于理解”不一定是无障碍定义的那个词，而是让你的核心受众非常容易理解你在做什么。对于正在听播客的各位，在你们的所有工作中考虑这一点都非常重要。你的受众是谁？他们的角色是什么？哪些词能引起他们的共鸣？然后始终能够将你的工作转化为几句话、一个段落或更少的内容。

---

### [00:57:21] Lenny

**English:**
I love it. A lot of the listeners of this podcast are product managers, and this is so core to the work of a PM, so I think this is [inaudible 00:57:28]- speaking verily directly to a lot of the listeners. Okay. So just a couple more questions. Before this podcast, I asked you a few questions, including just like what are people asking you for advice often around, and are there any other frameworks that you find really useful? And so there's a couple of things I just want to touch on, see if there's something interesting there. The first is you have this framework that you call the four-box framework. I'm curious what that is and what it's all about.

**中文翻译:**
我太喜欢这个了。本播客的很多听众都是产品经理，而这正是 PM 工作的核心，所以我认为这直接触及了很多听众的心声。好的，最后几个问题。在播客开始前，我问了你几个问题，包括人们经常向你咨询什么建议，以及你是否觉得还有其他非常有用的框架？有几件事我想聊聊，看看有没有什么有趣的。第一个是你有一个叫“四格框架”（four-box framework）的东西。我很好奇那是什么，它是关于什么的？

---

### [00:57:53] Nicole Forsgren

**English:**
Yes. I love this four-box framework. I've used it for years. I actually pulled it out first when I was a professor, and I still to this day get LinkedIn messages from my students saying that it's like the most useful thing they've ever used. So here's what it is. I literally pull this out on napkins, at bars, at conferences to this day. So here we go. Draw four boxes on a piece of paper, two on the top, two on the bottom. So they'll be kind of aligned. The first two to the left of them write the word words. And below them, write the word data and then between the two on the top, draw an arrow between them. So it'll say words, box, arrow, box, right. Is that making sense?

**中文翻译:**
是的。我非常喜欢这个四格框架。我已经用了好多年了。我最早是在当教授时提出的，直到今天我还会收到学生的 LinkedIn 消息，说这是他们用过的最有用的东西。它是这样的（直到今天我还会把它画在酒吧的餐巾纸上或会议上）：在纸上画四个格子，上面两个，下面两个，对齐。在上面两个格子的左边写上“词语”（words），在下面两个格子的左边写上“数据”（data）。然后在上面两个格子之间画一个箭头。所以上面是：词语、格子、箭头、格子。明白了吗？

---

### [00:58:12] Lenny

**English:**
Mm-hmm.

**中文翻译:**
嗯。

---

### [00:58:42] Nicole Forsgren

**English:**
And then on the bottom it'll say data, box, arrow, box.

**中文翻译:**
然后在下面是：数据、格子、箭头、格子。

---

### [00:58:46] Lenny

**English:**
Mm-hmm.

**中文翻译:**
嗯。

---

### [00:58:47] Nicole Forsgren

**English:**
Okay. So on the top half, this is where, if you want to think about measuring something or testing something, you have to start with words. So as an example, let's just say, I think that customer satisfaction gets us more money or customer satisfaction gets us return customers. Let's do customer satisfaction. So the first box, you'll put customer satisfaction inside the box, and you'll put return customers in the second box. Now always start with words. You do not start with data. You always start with words.

**中文翻译:**
好。在上半部分，如果你想衡量某事或测试某事，你必须从“词语”开始。举个例子，假设我认为“客户满意度会带来更多收益”或者“客户满意度会带来回头客”。让我们用客户满意度。在第一个格子里写“客户满意度”，在第二个格子里写“回头客”。永远从词语开始，不要从数据开始。

---

### [00:59:22] Nicole Forsgren

**English:**
And then you'll go around to a couple of people, stakeholders, managers, others, and you'll say, "Do you agree with this? Is this actually what we're doing?" And it can turn into a sentence. And then, in the boxes below it, this is your data. How are we going to measure customer satisfaction? It could be a survey. And so this is where you'll go, and you'll say, "What data points do we have that could proxy for? What could be our data points for customer satisfaction?" And this is where it gets tricky. You could say, "Well, customer satisfaction could be return customers. But we think it leads to return customers, so we can't use that here." But return customers could be... So that's where you kind of roll this out. So how else would we measure customer satisfaction? I made this hard on myself.

**中文翻译:**
然后你去问几个人，利益相关者、经理或其他，问他们：“你同意这个吗？这真的是我们在做的吗？”这可以变成一个句子。然后，在下面的格子里，就是你的“数据”。我们如何衡量客户满意度？可以是调查问卷。这就是你寻找可以作为“代理指标”的数据点的地方。这里会变得棘手。你可能会说：“嗯，客户满意度可以是回头客。”但我们认为它“导致”了回头客，所以我们不能在这里用它。那么我们还能如何衡量客户满意度？我把自己难住了。

---

### [01:00:10] Lenny

**English:**
Like a CSAT score or NPS score.

**中文翻译:**
比如 CSAT 分数或 NPS 分数。

---

### [01:00:10] Nicole Forsgren

**English:**
CSAT. Yeah. CSAT, NPS. We could say the amount of money that they spent. It's a stretch.

**中文翻译:**
CSAT，是的。CSAT、NPS。或者我们可以说他们花的钱。这有点牵强。

---

### [01:00:20] Lenny

**English:**
Mm-hmm.

**中文翻译:**
嗯。

---

### [01:00:21] Nicole Forsgren

**English:**
Okay. Now, return customers. Let's go to the next box. How are we going to measure return customers? Depending on our context, let's say that this is an online business. We could say that it's return customers as measured through the website. We could say that it's returned customers. We could just ask them, right. Maybe we have a follow-up survey. Return customers. Maybe we're going to do a stretch here. Maybe we say it's a referral link. This helps us get super clear on what it is we're going to measure.

**中文翻译:**
好。现在看“回头客”，进入下一个格子。我们如何衡量回头客？根据我们的背景，假设这是一家在线业务。我们可以说它是通过网站衡量的重复购买客户。我们可以直接问他们，对吧？也许我们有一个后续调查。或者我们再牵强一点，说它是推荐链接。这有助于我们非常清晰地确定我们要衡量什么。

---

### [01:01:00] Nicole Forsgren

**English:**
Now, the reason I like this is because if some of our... Now this data analysis. We'll just do correlations here, right. If we have longitudinal overtime, that's fine. You can hand this to a data scientist. You can hand this to someone and you can say, "What data do we have? Let's go run this." If something here falls apart, now you can point to the data boxes, and we can get mad about the things in the data boxes, and we can say, "What's wrong? Is the data poor quality? Are we missing data? Was this a bad proxy?" Proxy stands in for something else. "Was this ridiculous?" One of the things I made up. It was just a bad idea.

**中文翻译:**
我喜欢这个的原因是，如果我们的……现在是数据分析。我们在这里只做相关性分析。如果我们有长期的纵向数据，那就太好了。你可以把它交给数据科学家，说：“我们有什么数据？去跑一下。”如果这里出了问题，你可以指向数据格子，我们可以针对数据格子里面的东西发火，我们可以问：“哪里错了？是数据质量差吗？我们缺数据吗？这是一个糟糕的代理指标吗？”（代理指标代表其他东西）。“这很荒谬吗？”比如我刚才编的一个，那可能就是个坏主意。

---

### [01:01:32] Nicole Forsgren

**English:**
Instead of getting mad at Lenny for his really stupid idea or getting mad at Nicole because this was a really bad idea, we can say, "This was problematic. What's wrong here?" Or we can go back up to the words at the top, and we can say, "This is not actually something that is probably going to hold, or this is not something we want to test right now, or this is something instead..." And it makes things incredibly clear. It helps you communicate what it is you want to do fairly quickly.

**中文翻译:**
与其因为 Lenny 的愚蠢想法而对他发火，或者因为 Nicole 的坏主意而对她发火，我们可以说：“这个环节有问题，哪里错了？”或者我们可以回到上面的词语，说：“这实际上可能站不住脚，或者这不是我们现在想测试的东西，或者应该是别的什么……”这让事情变得极其清晰。它能帮你快速沟通你想做的事情。

---

### [01:02:04] Lenny

**English:**
I love it. [inaudible 01:02:05]. I'll check it out. It's ugly.

**中文翻译:**
我喜欢。我会去看看。虽然画出来可能有点丑。

---

### [01:02:08] Nicole Forsgren

**English:**
Nice.

**中文翻译:**
挺好的。

---

### [01:02:08] Lenny

**English:**
I'll Zoom in, right. Okay.

**中文翻译:**
我会放大看，好的。

---

### [01:02:10] Nicole Forsgren

**English:**
Now I will say advanced mode. You can start with the same four-box framework and you can say, "What data do we have available? What do we think the relationships are?" But then you have to go back up to words and then say, "For these data points..." And we think that they represent something, and we think this is the relationship between them. "What do they represent? If I turn this into a sentence, what do they represent?"

**中文翻译:**
现在我要说一下“进阶模式”。你可以从同样的四格框架开始，问：“我们有哪些可用数据？我们认为它们之间有什么关系？”但随后你必须回到上面的“词语”，然后说：“对于这些数据点……”我们认为它们代表了某些东西，我们认为这是它们之间的关系。“它们代表什么？如果我把这变成一个句子，它们代表什么？”

---

### [01:02:39] Nicole Forsgren

**English:**
And then you want to double check because spurious correlation's one of my favorite websites instead of charts. So you'll want to go chat with someone, interview, make sure things are actually right. But the challenge is I will see people run every correlation they could think of, but they haven't turned it into a word or a sentence that you can communicate to someone else. They don't do the check, and they don't do that before... one, before running the correlations. And two, if it's there, right. All of our data is so interrelated that we quite often will find spurious correlations.

**中文翻译:**
然后你要反复检查，因为“伪相关”（spurious correlation）是我最喜欢的网站之一。所以你想去和某人聊聊，做个访谈，确保事情真的是对的。但挑战在于，我看到人们跑了所有能想到的相关性分析，但他们没有把它转化成一个可以传达给别人的词或句子。他们没有做检查，而且在跑相关性分析之前没做。我们的所有数据都是如此相互关联，以至于我们经常会发现伪相关。

---

### [01:03:01] Nicole Forsgren

**English:**
But it can be really helpful just to have that laid out, even if it's just on a post-it, to say, "What are the things I expect to see? What is this actually testing? What relationship do I suspect is there?"

**中文翻译:**
但即使只是在便利贴上把这些列出来，也会非常有帮助，问问自己：“我期望看到什么？这实际上在测试什么？我怀疑存在什么样的关系？”

---

### [01:03:27] Lenny

**English:**
Mm-hmm. Amazing. There's actually... I have a newsletter post, a guest post on how to do a correlation analysis and a regression analysis so folks can [inaudible 01:03:36]- templates and plug and play, all kinds of... makes it easy for you. So what I'm take away from this is an awesome framework, especially for thinking about a hypothesis you may have. In this case, it's like, "Customer satisfaction's going to lead to more return customers. Here's how we're going to measure it." And then you basically run the test and see if it's true. And if it's not, maybe you need to pick different metrics. Maybe you need to pick a different conclusion.

**中文翻译:**
嗯。太棒了。实际上，我有一篇时事通讯文章，是关于如何做相关性分析和回归分析的客座文章，大家可以参考模板，即插即用，非常方便。所以我学到的是，这是一个很棒的框架，特别是对于思考你可能拥有的假设。在这个例子中，就是：“客户满意度将导致更多回头客。这就是我们要衡量它的方式。”然后你基本上运行测试，看看是否属实。如果不是，也许你需要选择不同的指标，或者得出不同的结论。

---

### [01:03:59] Nicole Forsgren

**English:**
And within the DORA framework, we would say, "If we want to improve our speed and stability, we think improving build time would help. And then how would I measure build time?" These are the data points that I have available to us. Yep, to circle back.

**中文翻译:**
在 DORA 框架内，我们会说：“如果我们想提高速度和稳定性，我们认为缩短构建时间会有所帮助。那么我该如何衡量构建时间？”这些就是我们可用的数据点。是的，绕回来了。

---

### [01:04:10] Lenny

**English:**
Makes them circle back. I love it. It's all connected. Okay. And then, last question. I asked you what advice people often ask you for, and you said that it's around making decisions. And I'm curious, what advice do you give people about making decisions?

**中文翻译:**
让他们绕回来。我喜欢这个，一切都是相连的。好。最后一个问题。我问你人们经常向你咨询什么建议，你说过是关于做决定。我很想知道，关于做决定，你给人们什么建议？

---

### [01:04:28] Nicole Forsgren

**English:**
Yes. So this one comes up in business but also comes up personally and among my mentees. So many times, it starts with being very crisp about your objectives and definitions, but then it comes down to really clearly defining what your criteria is. What's important, and then among that criteria what's most important. Some of my friends know I have a decision-making spreadsheet that I have shared out with a handful of friends on should you take a job? Where should you move?

**中文翻译:**
是的。这个问题在业务中会出现，在个人生活和我的学生中也会出现。很多时候，它始于对目标和定义的非常清晰的把握，但随后归结为非常明确地定义你的标准是什么。什么是重要的，在这些标准中，什么是最重要的。我的一些朋友知道我有一个“决策电子表格”，我曾分享给几个朋友，用于决定：你应该接受这份工作吗？你应该搬到哪里？

---

### [01:05:03] Nicole Forsgren

**English:**
What are the different things you should do. It is. Well, it's funny, though, because what's interesting is many times I will... I'll share it with someone, and I've got a couple that are just funny, right. But walking through the spreadsheet is often all you need to do in order to know what the decision is. And by that, I mean, so we walked through the decision. I had one where it was like, "Where should I move next, or what job should I take?" So when I started DORA, I did this. Starting DORA, I thought, was my lowest. Once I walked through the spreadsheet, it became my high.

**中文翻译:**
你应该做的各种事情。这很有趣，因为很多时候我会把它分享给别人。但通常你只需要过一遍这个电子表格，就能知道决定是什么。我的意思是，我们梳理了决策。我曾经有一个决策是：“我下一步该搬到哪里，或者我该接受什么工作？”当我开始创办 DORA 时，我也做了这个。起初我认为创办 DORA 是我的最低优先级，但一旦我过了一遍电子表格，它就变成了最高优先级。

---

### [01:05:45] Nicole Forsgren

**English:**
So what you do is you outline of all of your options. What do you want to do? And then you say, "What are the criteria that are important to me?" So if it's for a job, is it something like total comp, cash money, prestige, team, job predictability, work-life balance. Identify the criteria that are most important to you. Now it's really interesting because sometimes I will only get that far when I'm working with someone I'm mentoring or coaching, and they will say, "I know what my answer is." We don't even get to the next step.

**中文翻译:**
所以你要做的是列出你所有的选项。你想做什么？然后你说：“对我来说重要的标准是什么？”如果是为了找工作，标准可能是总薪酬、现金、声望、团队、工作的可预测性、工作生活平衡。确定对你最重要的标准。有趣的是，有时当我辅导别人时，刚进行到这一步，他们就会说：“我知道答案了。”我们甚至还没进入下一步。

---

### [01:06:02] Nicole Forsgren

**English:**
But just identifying the criteria that are important is it... Now, when I was thinking about where I wanted to move next, it was proximity to an airport, the relative tech scene, the food scene. That was real high for me, a handful of things that was important. Now the next thing I do is, for each criteria, what's their relative weight, what's their importance? And I make it add up to 100%. And then I... This is the easy part, right. You just put it in a little spreadsheet, and then I give everything [inaudible 01:06:51] score, and I just multiply it out. Now this is where I'm data informed, and I'm not data driven.

**中文翻译:**
但仅仅确定重要的标准就足够了。当我考虑搬到哪里时，标准是离机场的距离、当地的技术氛围、美食氛围。对我来说这些很重要。接下来的步骤是，对于每个标准，它们的相对权重是多少？重要性是多少？我让总和等于 100%。然后……这是简单的部分，你只需把它放进一个小电子表格，然后给每项打分，最后相乘。这就是我所说的“数据参考”（data informed）而非“数据驱动”（data driven）。

---

### [01:06:56] Nicole Forsgren

**English:**
There have been times I make a decision where the whole flip a coin and whatever it's... wherever it lands on, what your reaction is tells you what it should actually be. There have been times where I multiply it out, and then I'll actually fudge the numbers to get what I want, but it's still slightly off. That's per your data informed. Same thing in business. There are many times where you actually run the numbers, and it'll give you a class or a category of things, and then you choose.

**中文翻译:**
有些时候我做决定就像抛硬币，硬币落地那一刻你的反应会告诉你真正的答案。有些时候我算出了结果，然后我会为了得到我想要的结果而修改数字，但它还是有点偏差。这就是“数据参考”。在业务中也一样。很多时候你跑了数据，它会给你一个类别或范围，然后由你来选择。

---

### [01:07:40] Nicole Forsgren

**English:**
Now this is where one of my favorite quotes I heard somewhere about strategy comes into play and that's that, "The key to having a good strategy is knowing what not to do." And the key to executing a good strategy is actually not doing it. So you can have many options, right. As a leader and as an executive, we have many options, and we only fund some of them. If you fund everything, things are going to fail. So being able to think through and identify what your criteria are, identifying that criteria, what's your selection criteria, what's your evaluative criteria, ranking them, and then deciding what the cutoff is is important. You can't fund everything. You don't get to pick everything.

**中文翻译:**
这就是我听过的关于战略的最喜欢的名言之一发挥作用的地方：“拥有好战略的关键在于知道‘不做什么’。”而执行好战略的关键在于真的不去碰那些事。你可以有很多选择。作为领导者和高管，我们有很多选择，但我们只资助其中一部分。如果你资助所有事情，事情就会失败。所以，能够深入思考并确定你的标准（选择标准、评估标准），对它们进行排名，然后决定截止线在哪里，这非常重要。你不能资助所有事，你不能全选。

---

### [01:08:19] Lenny

**English:**
Amazing. I love the spreadsheet idea. I've made versions of it, but it's always... I think, like you said, a lot of times, the exercise is just tell you what you already think and just gives you like- "... All right, you're right. You probably should just do that thing you already thought you should do."

**中文翻译:**
太棒了。我喜欢电子表格的主意。我也做过类似的版本，但正如你所说，很多时候这个练习只是告诉你你已经想好的答案，给你一个心理暗示：“好吧，你是对的，你可能就应该去做你已经想做的那件事。”

---

### [01:08:32] Nicole Forsgren

**English:**
Yep.

**中文翻译:**
没错。

---

### [01:08:33] Lenny

**English:**
Have you thought about making a public template of this spreadsheet? Even though it is simple, I bet it would be really helpful to people.

**中文翻译:**
你有没有想过做一个这个电子表格的公开模板？虽然它很简单，但我打赌它会对人们非常有帮助。

---

### [01:08:39] Nicole Forsgren

**English:**
I have, and this actually might be a good forcing function. Maybe [inaudible 01:08:42]-

**中文翻译:**
我想过，这实际上可能是一个很好的推动力。也许……

---

### [01:08:42] Lenny

**English:**
Okay, awesome. So if you do it, I'll put in the show notes. It'll probably be near the bottom at the end of the episode, but that'd be awesome.

**中文翻译:**
好的，太棒了。如果你做了，我会把它放在节目笔记里。可能会在剧集结束时的底部，那会很棒。

---

### [01:08:50] Nicole Forsgren

**English:**
Perfect.

**中文翻译:**
完美。

---

### [01:08:50] Lenny

**English:**
Is there anything else that you want to share before we get to our very exciting lightning round?

**中文翻译:**
在进入我们非常令人兴奋的闪电轮问答之前，你还有什么想分享的吗？

---

### [01:08:55] Nicole Forsgren

**English:**
No, I think that's it.

**中文翻译:**
没有了，我想就这些。

---

### [01:08:56] Lenny

**English:**
Well, welcome to our very exciting lightning round. I've got six questions for you. Are you ready?

**中文翻译:**
好，欢迎来到我们非常令人兴奋的闪电轮。我有六个问题要问你。准备好了吗？

---

### [01:09:01] Nicole Forsgren

**English:**
Absolutely.

**中文翻译:**
当然。

---

### [01:09:03] Lenny

**English:**
All right. First question, what are two or three books that you've recommended most to other people?

**中文翻译:**
好的。第一个问题，你向别人推荐最多的两三本书是什么？

---

### [01:09:08] Nicole Forsgren

**English:**
We actually had the perfect segue because the book I've recommended absolutely the most is called Good Strategy Bad Strategy by Richard Rumelt. Another one is Designing Your Life by Bill Burnett and Dave Abbott... Dave Evans. And the last one is probably Ender's Game, Orson Scott Card. No comment right now on some of his political commentary, but I used to have extra copies in my office when I was a professor and I would just hand it out to my students. It's a fun, just easy nonsense read, but...

**中文翻译:**
我们刚才其实有一个完美的过渡，因为我推荐最多的一本书是 Richard Rumelt 的《好战略，坏战略》（Good Strategy Bad Strategy）。另一本是 Bill Burnett 和 Dave Evans 的《设计你的生活》（Designing Your Life）。最后一本可能是 Orson Scott Card 的《安德的游戏》（Ender's Game）。现在不对他的政治言论发表评论，但我当教授时办公室里总有几本备用的，我会直接发给我的学生。这是一本有趣、轻松的读物，但是……

---

### [01:09:41] Lenny

**English:**
I absolutely love it. Such a good pick. Haven't read in a long time. And are they making [inaudible 01:09:48] show of that at all? That'd be something.

**中文翻译:**
我太喜欢了。非常棒的选择。好久没读了。他们有把它拍成剧吗？那肯定很有看头。

---

### [01:09:49] Nicole Forsgren

**English:**
They made a movie, and I was afraid I wasn't going to like it, so I just didn't read it. I didn't want it to ruin the book, but at least Harrison Ford was in it.

**中文翻译:**
他们拍了一部电影，我担心我不喜欢，所以我就没看。我不想让它毁了原著，但至少哈里森·福特参演了。

---

### [01:09:58] Lenny

**English:**
Okay. I'm not going to check it out. They're making a movie of Three-Body Problem. I don't know if you've read that, but that is... I'm really excited for that.

**中文翻译:**
好吧，那我也不去看了。他们正在拍《三体》的电影（或剧集）。不知道你读过没，但我非常期待。

---

### [01:10:03] Nicole Forsgren

**English:**
It's on my list.

**中文翻译:**
在我的书单上。

---

### [01:10:05] Lenny

**English:**
Oh, man. Best sci-fi ever. Next question actually very correlated. What is a favorite recent movie or TV show?

**中文翻译:**
噢，天哪。史上最棒的科幻小说。下一个问题其实非常相关：你最近最喜欢的电影或电视节目是什么？

---

### [01:10:13] Nicole Forsgren

**English:**
I think going through some real just easy, fun watches lately. I'm rewatching Suits again, but Ted Lasso is a favorite, and I just tore through Never Have I Ever, which is fun because John McEnroe narrates it, which is hilarious.

**中文翻译:**
我想最近看了一些非常轻松有趣的片子。我正在重看《金装律师》（Suits），但《泰德·拉索》（Ted Lasso）是我的最爱。我刚一口气看完《好想做一次》（Never Have I Ever），很有趣，因为是约翰·麦肯罗旁白的，简直太搞笑了。

---

### [01:10:30] Lenny

**English:**
John McEnroe, the tennis player?

**中文翻译:**
约翰·麦肯罗，那个网球运动员？

---

### [01:10:31] Nicole Forsgren

**English:**
Yeah. It's a riot. Yeah, it's so funny.

**中文翻译:**
是的，非常逗，真的很有趣。

---

### [01:10:35] Lenny

**English:**
I love it. Next question, what's a favorite interview question that you like to ask people when you're interviewing them?

**中文翻译:**
我喜欢。下一个问题，你在面试别人时最喜欢问的问题是什么？

---

### [01:10:42] Nicole Forsgren

**English:**
I love questions that I can kind of spin around hard decisions that people have had to make and how they made them. I love hearing their thought process. And I get a little nervous when people just [inaudible 01:10:54] and shoot from the hip constantly.

**中文翻译:**
我喜欢围绕人们不得不做出的艰难决定以及他们是如何做出的决定来提问。我喜欢听他们的思考过程。如果有人总是凭直觉、随口乱说，我会感到有点不安。

---

### [01:10:56] Lenny

**English:**
So what is it you look for there that gives you a sense that they're someone you may want to hire or work with?

**中文翻译:**
那么你在那里寻找什么，能让你觉得他们是你想要雇佣或共事的人？

---

### [01:11:01] Nicole Forsgren

**English:**
I just hearing if they have some sort of process, right. If they have some kind of decision-making process, if they have criteria, if they have... How do they do evaluation?

**中文翻译:**
我只是想听听他们是否有一套流程。他们是否有一套决策流程，是否有标准，他们如何进行评估？

---

### [01:11:11] Lenny

**English:**
What is a favorite product you've recently discovered that you love?

**中文翻译:**
你最近发现并喜爱的产品是什么？

---

### [01:11:14] Nicole Forsgren

**English:**
I have a big one and a little one. My big one is probably Sleep Eight. So I live in Arizona. It gets hot here sometimes.

**中文翻译:**
我有一个大的和一个小的。大的可能是 Eight Sleep（智能床垫）。我住在亚利桑那州，这里有时很热。

---

### [01:11:21] Lenny

**English:**
Oh, Eight Sleep.

**中文翻译:**
噢，Eight Sleep。

---

### [01:11:23] Nicole Forsgren

**English:**
Or yeah, Eight Sleep. Yeah, the other way around.

**中文翻译:**
是的，Eight Sleep。名字说反了。

---

### [01:11:24] Lenny

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:11:25] Nicole Forsgren

**English:**
Yeah, so one's fun because it makes the bed cold and also gives me some data, which is probably a little bit off, but in the approximation's fun. And then Korean face masks. They're just fun. Yeah. And you can get some pretty good ones for just a couple dollars, and that's always fun. Self-care.

**中文翻译:**
是的，这个很有趣，因为它能让床变凉快，还能给我一些数据（虽然可能有点偏差，但看个大概也很有趣）。小的是韩国面膜。它们很有趣，几美元就能买到很不错的，这总是很有趣。自我护理嘛。

---

### [01:11:44] Lenny

**English:**
Wow. First mention of that one, of Korean face masks.

**中文翻译:**
哇。第一次有人提到这个，韩国面膜。

---

### [01:11:47] Nicole Forsgren

**English:**
Right. Listen, everyone get on board.

**中文翻译:**
没错。听着，大家都该试试。

---

### [01:11:50] Lenny

**English:**
I just did the TikTok. There's a filter now where you could see how you look when you age, and I'm not happy with how it turned out. And so I might look into this.

**中文翻译:**
我刚玩了 TikTok。现在有一个滤镜可以看到你老了之后的样子，我对结果不太满意。所以我可能会研究一下这个。

---

### [01:12:00] Nicole Forsgren

**English:**
I had some basal cell cancer on my forehead a few years ago, and so I am much more careful with my skin, and you can get... One of my favorites is COSRX. You can get 10 for like $15. So it's fun to just chill at the end of the day with a good face mask.

**中文翻译:**
几年前我额头上得过基底细胞癌，所以我现在对皮肤非常小心。你可以买……我最喜欢的一个品牌是 COSRX。15 美元能买 10 片。在一天结束时敷个面膜放松一下很有趣。

---

### [01:12:15] Lenny

**English:**
I was going to ask you for a specific pick, and so we got one.

**中文翻译:**
我正想问你具体的推荐，现在我们有了一个。

---

### [01:12:18] Nicole Forsgren

**English:**
Yep.

**中文翻译:**
没错。

---

### [01:12:19] Lenny

**English:**
Amazing. This next question I ask everyone, and it's especially appropriate to you, but I don't know if you'll have an answer. What's something relatively minor you've changed in your product development process that has had a big impact on your team's ability to execute? And I feel like you have a big perspective on this, so I'm curious what you have as an answer.

**中文翻译:**
太棒了。下一个问题我问过所有人，对你来说尤其合适，但我不知道你是否会有答案：在你的产品开发过程中，你做过什么相对较小的改变，却对团队的执行能力产生了巨大影响？我觉得你在这个问题上有很深刻的见解，所以我很好奇你的答案。

---

### [01:12:38] Nicole Forsgren

**English:**
I think I alluded to this earlier. I would say that it's helping everyone. So I've done this before, but I think it's helping everyone to ask who's our audience and how will we share this now. And it's sort of interesting because, right now, I'm wearing two hats. One is at MSR, Microsoft Research. We lead very ambitious research, right. So like H2, H3.

**中文翻译:**
我想我之前提到过。我会说，那是帮助每一个人。我以前做过这个，但我认为帮助每个人去问“我们的受众是谁，我们现在将如何分享这个”是非常有用的。这很有趣，因为我现在身兼两职。一个是 MSR（微软研究院），我们领导非常宏大的研究，比如 H2、H3 级别的。

---

### [01:13:03] Lenny

**English:**
I mean, what is H3? The third half?

**中文翻译:**
H3 是什么意思？第三个半年？

---

### [01:13:06] Nicole Forsgren

**English:**
Oh, Horizon 3. And so it's supposed to be five to 10 years out, which right now is like, who even knows, right?

**中文翻译:**
噢，是 Horizon 3（第三地平线）。它应该是针对 5 到 10 年后的研究，但在现在这个时代，谁知道呢？

---

### [01:13:10] Lenny

**English:**
Got it. And we're going to be in computers, living [inaudible 01:13:16]-

**中文翻译:**
明白了。到那时我们可能都生活在电脑里了……

---

### [01:13:16] Nicole Forsgren

**English:**
Yeah. AI has completely upended how we kind of think of Horizons. And so when we're thinking really ambitiously and very, very, very forward-looking, what's our check-in? How do we evaluate this? And then how can we easily communicate it to our core audience? And so here, who's our audience, and how do we bring the far near?

**中文翻译:**
是的。AI 完全颠覆了我们对“地平线”的看法。所以当我们进行非常宏大、非常前瞻性的思考时，我们的检查点是什么？我们如何评估它？然后我们如何轻松地将其传达给我们的核心受众？所以在这里，问题是：我们的受众是谁，我们如何将遥远的未来带到眼前？

---

### [01:13:37] Nicole Forsgren

**English:**
And then for the other hat I'm wearing, I'm working with OCTO kind of across all of Microsoft to take a data-informed approach to really improve and uplevel our central developer infrastructure. And so, as we're thinking very, very tactically, what is our long-term vision, and how do we align with several of our broad stakeholders? And so there it's who's our audience, and how do we bring the near, far?

**中文翻译:**
至于我的另一个身份，我正在与 OCTO 合作，跨越整个微软，采取数据参考的方法来真正改进和提升我们的核心开发者基础设施。所以，当我们进行非常战术性的思考时，我们的长期愿景是什么，我们如何与广泛的利益相关者保持一致？在那里，问题是：我们的受众是谁，我们如何将眼前的事物推向远方？

---

### [01:14:04] Lenny

**English:**
I love that. Final question. What is one tactical piece of advice that listeners can do this week to help improve their developer productivity or developer experience and move it in the right direction?

**中文翻译:**
我喜欢这个。最后一个问题：听众本周可以采取哪项战术性建议，来帮助提高他们的开发者生产力或开发者体验，并使其朝着正确的方向发展？

---

### [01:14:17] Nicole Forsgren

**English:**
If you walk away from this podcast right now, you could take a look at what's happening in your org today. Is it written down? Is it clear? Do you have any existing data and efforts? And if not, go find a handful of developers and ask them how they feel about their work tools and their work process and what the biggest barriers to their productivity are.

**中文翻译:**
如果你现在听完播客，你可以看看你现在的组织里发生了什么。它被记录下来了吗？清晰吗？你有现成的数据和努力吗？如果没有，去找几个开发者，问问他们对工作工具和工作流程的感觉，以及他们生产力的最大障碍是什么。

---

### [01:14:41] Lenny

**English:**
Also, pick up a copy of Accelerate on Amazon or your local retail establishment. Nicole, this was amazing. I think we're going to help a lot of companies move faster, have better and happier engineers, which is going to create infinite value in the world. Thank you so much for being here. Two final questions. Where can folks find you online if they want to reach out, and how can listeners be useful to you?

**中文翻译:**
另外，去亚马逊或当地书店买一本《加速》。Nicole，这太棒了。我认为我们将帮助很多公司跑得更快，拥有更好、更快乐的工程师，这将为世界创造无限价值。非常感谢你能来。最后两个问题：如果大家想联系你，可以在哪里找到你？听众可以为你做些什么？

---

### [01:15:02] Nicole Forsgren

**English:**
I am on Twitter and Bluesky, Nicolefv. And my website is nicolefv.com, and my... all my contact information is there. And as we mentioned previously, I'm working on a new project and a new book digging into exactly these ideas, right. How can we measure better? How can we improve? And what does that measurement process look like? Both for kind of one time, really quick unofficial measurement pieces, and if we want to do kind of very formal longer term measurement pieces. So if anyone is interested in that or has any success stories they'd love to share, I would love to hear more about it. So please reach out and share. I'd love to hear more.

**中文翻译:**
我在 Twitter 和 Bluesky 上，账号是 Nicolefv。我的网站是 nicolefv.com，我所有的联系方式都在那里。正如我们之前提到的，我正在做一个新项目和一本新书，深入探讨这些想法：我们如何更好地衡量？我们如何改进？衡量的过程是什么样的？无论是那种一次性的、快速的非正式衡量，还是我们想要进行的非常正式的长期衡量。所以，如果有人对此感兴趣，或者有任何想分享的成功案例，我很想听听。请联系我并分享，我很期待。

---

### [01:15:44] Lenny

**English:**
Awesome. Nicole, thank you again for being here.

**中文翻译:**
太棒了。Nicole，再次感谢你的到来。

---

### [01:15:47] Nicole Forsgren

**English:**
Okay, thank you Lenny.

**中文翻译:**
好的，谢谢 Lenny。

---

### [01:15:49] Lenny

**English:**
Bye, everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
再见，各位。非常感谢收听。如果你觉得这期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用上订阅。此外，请考虑给我们评分或留下评论，因为这真的能帮助其他听众找到这个播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目见。