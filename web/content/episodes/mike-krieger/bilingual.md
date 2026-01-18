# Mike Krieger - 双语对照

This is the complete bilingual (English-Chinese) transcript for **Lenny's Podcast** featuring **Mike Krieger** (CPO of Anthropic).

---

### [00:00:00] Lenny Rachitsky

**English:**
90% of your code roughly is written by AI now.

**中文翻译:**
现在你们大约 90% 的代码都是由 AI 编写的。

---

### [00:00:03] Mike Krieger

**English:**
The team that works in the most futuristic way is the Claude Code team. They're using Claude Code to build Claude Code in a very self-improving kind of way. We really rapidly became bottlenecked on other things like our merge queue. We had to completely re-architect it because so much more code was being written and so many more pull requests were being submitted. Over half of our pull requests are Claude Code generated. Probably at this point it's probably over 70% that it just completely blew out the expectations of it.

**中文翻译:**
工作方式最具有未来感的是 Claude Code 团队。他们正在以一种高度自我进化的方式，利用 Claude Code 来构建 Claude Code。我们很快就在其他环节遇到了瓶颈，比如我们的合并队列（merge queue）。由于编写的代码量巨大，提交的 PR（拉取请求）如此之多，我们不得不完全重构了架构。我们超过一半的 PR 是由 Claude Code 生成的。目前这个比例可能已经超过了 70%，这完全超出了最初的预期。

---

### [00:00:26] Lenny Rachitsky

**English:**
You guys are at the edge of where things are heading.

**中文翻译:**
你们正处于事物发展趋势的最前沿。

---

### [00:00:28] Mike Krieger

**English:**
I had the very bizarre experience of I had two tabs open. It was AI 2027, and my product strategy, and it was this moment where I'm like, "Wait, am I the character in the story?"

**中文翻译:**
我曾有过一次非常奇特的经历：当时我开了两个浏览器标签页，一个是《AI 2027》（一篇预测 AI 发展的文章），另一个是我的产品策略。那一刻我心想：“等等，我难道是这个故事里的主角吗？”

---

### [00:00:36] Lenny Rachitsky

**English:**
It feels like ChatGPT is just winning in consumer mind share. How does that inform the way you think about product, strategy, and mission?

**中文翻译:**
感觉 ChatGPT 在消费者心智占有率上正处于领先地位。这如何影响你对产品、策略和使命的思考？

---

### [00:00:43] Mike Krieger

**English:**
I think there's room for several generationally important companies to be built in AI right now. How do we figure out what we want to be when we grow up versus what we currently aren't or wish that we were or see other players in the space being?

**中文翻译:**
我认为在当前的 AI 领域，有空间容纳几家具有代际影响力的重要公司。我们如何确定自己“长大后”想成为什么样的公司，而不是纠结于我们现在不是什么、希望成为什么，或者看到领域内其他玩家是什么样？

---

### [00:00:55] Lenny Rachitsky

**English:**
What's something that you've changed your mind about what AI is capable of and where AI is heading?

**中文翻译:**
关于 AI 的能力以及它的发展方向，有哪些事情是你后来改变了看法的？

---

### [00:01:01] Mike Krieger

**English:**
I had this notion coming in like, "Yes, these models are great, but are they able to have an independent opinion?" And it's actually really flipped for me only in the last month.

**中文翻译:**
我刚加入时曾有这样一种想法：“是的，这些模型很棒，但它们能拥有独立的见解吗？” 实际上，就在过去的一个月里，我的看法彻底反转了。

---

### [00:01:12] Lenny Rachitsky

**English:**
Today, my guest is Mike Krieger. Mike is chief product officer at Anthropic, the company behind Claude. He's also the co-founder of Instagram. He's one of my most favorite product builders and thinkers. He's also now leading product at one of the most important companies in the world, and I'm so thrilled to have had a chance to chat with him on the podcast. We chat about what he's changed his mind about most in terms of AI capabilities in the years since he joined Anthropic, how product development changes and where bottlenecks emerge when 90% of your code is written by AI, which is now true at Anthropic. Also, his thoughts on OpenAI versus Anthropic, the future of MCP, why he shut down Artifact, his last startup and how he feels about it. Also, what skills he's encouraging his kids to develop with the rise of AI. And we closed the podcast on a very heartwarming message that Claude wanted me to share it with Mike.

**中文翻译:**
今天的嘉宾是 Mike Krieger。Mike 是 Anthropic 的首席产品官，也就是 Claude 背后的公司。他也是 Instagram 的联合创始人。他是我最欣赏的产品构建者和思想家之一。他现在正领导着世界上最重要的公司之一的产品工作，我非常激动能有机会在播客中与他交流。我们聊到了他加入 Anthropic 一年来，对 AI 能力看法最大的转变；当 90% 的代码由 AI 编写时（这在 Anthropic 已成现实），产品开发会发生怎样的变化，以及瓶颈会出现在哪里。此外，还有他对 OpenAI 与 Anthropic 的看法、MCP（模型上下文协议）的未来、他为什么关闭了上一个创业项目 Artifact 以及对此的感受。还有在 AI 崛起的背景下，他鼓励孩子们培养哪些技能。最后，我们以一条 Claude 托我转达给 Mike 的温馨信息结束了本次访谈。

---

### [00:02:00] Lenny Rachitsky

**English:**
(00:02:00): A big thank you to my newsletter Slack community for suggesting topics for this conversation. If you enjoy this podcast, don't forget to subscribe it and follow it in your favorite podcasting app or YouTube. Also, if you become an annual subscriber of my newsletter, you get a year free of a bunch of incredible products, including Linear, Superhuman, Notion, Perplexity and Granola. Check it out at lennysnewsletter.com and click bundle.

**中文翻译:**
非常感谢我的 newsletter Slack 社区为这次对话提供的选题建议。如果你喜欢这个播客，别忘了在常用的播客应用或 YouTube 上订阅和关注。此外，如果你成为我 newsletter 的年度订阅者，你可以免费获得一年的一系列优秀产品，包括 Linear、Superhuman、Notion、Perplexity 和 Granola。请访问 lennysnewsletter.com 并点击 bundle 查看。

---

### [00:02:22] Lenny Rachitsky

**English:**
(00:02:22): This episode is brought to you by Productboard, the leading product management platform for the enterprise. For over 10 years, Productboard has helped customer-centric organizations like Zoom, Salesforce, and Autodesk build the right products faster. And as an end-end platform, Productboard seamlessly supports all stages of the product development lifecycle. From gathering customer insights to planning a roadmap, to aligning stakeholders, to earning customer buy-in, all with a single source of truth. And now product leaders can get even more visibility into customer needs. With Productboard Pulse, a new voice of customer solution built-in intelligence helps you analyze trends across all of your feedback and then dive deeper by asking AI your follow-up questions. See how Productboard can help your team deliver higher impact products that solve real customer needs and advance your business goals. For a special offer and free 15-day trial, visit productboard.com/lenny. That's productboard.com/L-E-N-N-Y.

**中文翻译:**
本期节目由 Productboard 赞助，它是领先的企业级产品管理平台。10 多年来，Productboard 帮助了 Zoom、Salesforce 和 Autodesk 等以客户为中心的企业更快地打造正确的产品。作为一个端到端平台，Productboard 无缝支持产品开发生命周期的所有阶段。从收集客户洞察到规划路线图，再到协调利益相关者和赢得客户认可，一切都基于单一的事实来源。现在，产品负责人可以更清晰地洞察客户需求。通过 Productboard Pulse（一种全新的客户之声解决方案），内置的智能技术可帮助你分析所有反馈中的趋势，并可以通过向 AI 提出后续问题进行深入探讨。了解 Productboard 如何帮助你的团队交付更具影响力的产品，解决真实的客户需求并推进业务目标。如需特别优惠和 15 天免费试用，请访问 productboard.com/lenny。

---

### [00:03:26] Lenny Rachitsky

**English:**
(00:03:26): Last year, 1.3% of the global GDP flowed through Stripe. That's over $1.4 trillion and driving that huge number are the millions of businesses growing more rapidly with Stripe. For industry leaders like Forbes, Atlassian, OpenAI, and Toyota, Stripe isn't just financial software. It's a powerful partner that simplifies how they move money, making it as seamless and borderless as the internet itself. For example, Hertz boosted its online payment authorization rates by 4% after migrating to Stripe. And imagine seeing a 23% lift in revenue like Forbes did just six months after switching to Stripe for subscription management. Stripe has been leveraging AI for the last decade to make its product better at growing revenue for all businesses. From smarter checkouts to fraud prevention and beyond. Join the ranks of over half of the Fortune 100 companies that trust Stripe to drive change, learn more at Stripe.com.

**中文翻译:**
去年，全球 GDP 的 1.3% 是通过 Stripe 流动的。这超过了 1.4 万亿美元，而推动这一巨大数字的是数百万家通过 Stripe 快速增长的企业。对于 Forbes、Atlassian、OpenAI 和 Toyota 等行业领导者来说，Stripe 不仅仅是财务软件。它是一个强大的合作伙伴，简化了资金流动的方式，使其像互联网本身一样无缝且无国界。例如，Hertz 在迁移到 Stripe 后，其在线支付授权率提高了 4%。想象一下，像 Forbes 那样，在切换到 Stripe 进行订阅管理仅六个月后，收入就增长了 23%。在过去的十年里，Stripe 一直在利用 AI 来优化其产品，帮助所有企业增加收入。从更智能的结账到欺诈预防等等。加入超过一半信任 Stripe 来推动变革的财富 100 强公司的行列，更多信息请访问 Stripe.com。

---

### [00:04:29] Lenny Rachitsky

**English:**
Mike, thank you so much for being here and welcome to the podcast.

**中文翻译:**
Mike，非常感谢你能来，欢迎来到播客。

---

### [00:04:32] Mike Krieger

**English:**
I'm really happy to be here. I've been looking forward to this for a while.

**中文翻译:**
我很高兴来到这里。我已经期待这次交流很久了。

---

### [00:04:35] Lenny Rachitsky

**English:**
Wow, I had love to hear that. I've also been looking forward to this for a while. I have so much to talk about. So first of all, you've been at Anthropic for just over a year at this point. Congrats by the way on hitting the cliff.

**中文翻译:**
哇，很高兴听你这么说。我也期待已久，有很多想聊的。首先，你加入 Anthropic 已经刚满一年了。顺便恭喜你度过了“行权悬崖期”（指入职满一年，期权开始归属）。

---

### [00:04:46] Mike Krieger

**English:**
Thank you. Not that we're tracking.

**中文翻译:**
谢谢。倒也不是说我们一直在盯着那个日子。

---

### [00:04:49] Lenny Rachitsky

**English:**
That's right. So let me just ask you this. So you've been at Anthropic for about a year. What's something that you've changed your mind about from before you joined Anthropic to today about what AI is capable of and where AI is heading?

**中文翻译:**
没错。那我就直接问了：你在 Anthropic 待了一年，关于 AI 的能力以及它的未来走向，有哪些事情是你加入之前和现在的看法大不相同的？

---

### [00:05:04] Mike Krieger

**English:**
Two things. One is like a pace and timeline question. The other one is a capability question. So maybe I'll take the second one first. I had this notion coming in, yes, these models are great, they're going to be able to produce code, they're going to be able to write hopefully in your voice eventually, but are they able to sort of have an independent opinion? And it's actually really flipped for me only in the last month and only with Opus 4 where my go-to product strategy partner is Claude. And it has been basically for that full year where I'll write an initial strategy, I'll share it with Claude basically, and I'll have it, look at it. And in the past it's pretty anodyne kind of comments that it would leave, "Oh, have you thought about this?" And it's like, "Yeah, I thought about that." And Opus 4, I was working on some strategy for our second half of the year was the first one. It was like Opus 4 combined with our advanced research. But it really went out for a while and it came back and I was like, you really looked at it in a new way. And so that's a thing that I've maybe I didn't feel like it would never be able to do that, but I wasn't sure how soon it'd be able to come up with something where I look at it, I'm like, yep, that is a new angle that I hadn't been looking at before and I'm going to incorporate that immediately into how I think about it. So that's probably the biggest shift that I've had is, I don't know about independence is the right word, but creativity and sort of novelty of thought relative to how I'm thinking about things.

**中文翻译:**
有两点。一个是关于速度和时间线的问题，另一个是关于能力的问题。我先说第二个。我刚进来时觉得，是的，这些模型很棒，它们能写代码，最终可能还能模仿你的语气写作，但它们能拥有“独立见解”吗？实际上，就在上个月，随着 Opus 4 的出现，我的看法彻底反转了。现在 Claude 成了我首选的产品策略伙伴。在过去的一整年里，我通常会写一个初步策略，分享给 Claude 看看。以前它给出的反馈通常比较平淡（anodyne），比如“哦，你考虑过这一点吗？”，而我的反应通常是“嗯，我想过了”。但在 Opus 4 上，当我为下半年制定策略时——那是 Opus 4 结合了我们先进研究成果的版本——它思考了一会儿后给出的反馈让我惊叹：“你真的从一个全新的角度审视了这个问题。” 以前我不确定它多久能做到这一点，但现在我看着它的反馈会想：“没错，这是一个我之前没想到的新视角，我要立即把它纳入我的思考中。” 所以这可能是我最大的转变——我不确定“独立性”是否准确，但在相对于我的思维而言的“创造力”和“思维新颖性”方面，它确实让我改观了。

---

### [00:06:31] Mike Krieger

**English:**
But in the timeline, one, it's so interesting because I was sitting next to Dario yesterday and he's like, "I keep making these predictions and people keep laughing at me. And then they come true." And it's funny to have this happen over and over again and he is like, not all of them are going to be right. But even I think as of last year he was talking about we're at 50% on SWE-Bench, which is this benchmark around how well the models are at coding. He's like, "I think we'll be at 90% by the end of 2025 or something like that." And sure enough, we're at about 72 now with the new models and we're at 50% when he made that prediction. And it's continued to scale pretty much as predicted. And so I've taken the timelines a lot more seriously now. And I don't know if you read AI 2027-

**中文翻译:**
至于时间线方面，这很有趣。昨天我坐在 Dario（Anthropic CEO）旁边，他说：“我一直在做这些预测，人们一直在笑话我，然后这些预测就成真了。” 这种事反复发生很有意思。他说并不是所有预测都会对，但即便如此，比如去年他在谈论 SWE-Bench（衡量模型编程能力的基准测试）时，我们当时是 50%，他说：“我认为到 2025 年底我们会达到 90% 左右。” 果然，现在新模型已经达到了 72% 左右，而他做预测时才 50%。它的扩展（scaling）基本上完全符合预测。所以我现在对这些时间线看得严肃多了。不知道你有没有读过《AI 2027》那篇文章……

---

### [00:07:05] Lenny Rachitsky

**English:**
I have, it made by heart race.

**中文翻译:**
读过，读得我心跳加速。

---

### [00:07:09] Mike Krieger

**English:**
And I had the very bizarre experience of I had two tabs open, it was AI 2027 and my product strategy. And it was this moment where I'm like, "Wait, am I the character in the story? How much is this converging?" But you read that and you're like, "Oh, 2027, that's years away if you're like no, mid 2025." And things continue to improve and the models continue to be able to do more and more and they're able to act agentically and they're able to have memory and they're able to act over time. So I think my confidence in the timelines and I don't know exactly how they manifest it definitely just solidified over the last year.

**中文翻译:**
我当时那种奇特的经历就是，我同时开着《AI 2027》和我的产品策略两个标签页。那一刻我心想：“等等，我是故事里的角色吗？这两者正在如何趋同？” 当你读那篇文章时，你可能会觉得“哦，2027 年，那还早呢”，但如果你意识到“不，那是 2025 年中期”，感觉就完全不同了。事物在持续改进，模型能做的事情越来越多，它们能像代理（agentically）一样行动，拥有记忆，并能跨时间执行任务。所以，我对这些时间线的信心——虽然我不确定它们具体会如何体现——在过去一年里确实变得非常坚定。

---

### [00:07:43] Lenny Rachitsky

**English:**
Wow. I wasn't expecting to go down that that paper was scary. And I'm curious just I guess I can't help but ask just thoughts on just how do we avoid the scary scenario that paper paints of where AI getting really smart goes?

**中文翻译:**
哇。我没想到会聊到这个，那篇论文确实挺吓人的。我忍不住想问，你觉得我们该如何避免那篇论文所描绘的、AI 变得极其聪明后可能出现的恐怖场景？

---

### [00:07:59] Mike Krieger

**English:**
Yeah, this maybe ties into, I've been here a year, why did I join Anthropic? I was watching the models get better and even you could see it in early 2024, and looking at my kids, I'm like, "All right, they're going to grow up in a world with AI. It's unavoidable." Where can I maximally apply my time to nudge things towards going well? And I mean that's a lot of what people think about across the industry, especially at Anthropic. And so I think coming to an agreement and a shared framework and understanding of what does going well look like? What is the kind of human AI relationship that we want? How will we know along the way? What do we need to build and develop and research along the way? I think those are all the kind of key questions. And some of those are product questions and some of those are research and interpretability questions, but for me it was the strongest reason to join was okay. I think there's a lot of contribution that Anthropic can have around nudging things to go better. And if I can have a part to play there, let's do it.

**中文翻译:**
是的，这可能和我加入 Anthropic 的初衷有关。我看着模型不断进步，甚至在 2024 年初就能明显感觉到。看着我的孩子们，我想：“好吧，他们将在一个有 AI 的世界里长大，这是不可避免的。” 那么，我该如何最大限度地利用我的时间，去推动事情向好的方向发展呢？这也是整个行业，尤其是 Anthropic 的人们一直在思考的问题。我认为，达成共识并建立一个共同的框架去理解“向好发展”意味着什么至关重要。我们想要什么样的“人机关系”？在这一过程中我们如何衡量进度？我们需要开发和研究什么？这些都是关键问题。其中一些是产品问题，另一些是研究和可解释性（interpretability）问题。对我来说，加入的最强动力就是：我认为 Anthropic 在引导事情向好发展方面可以做出巨大贡献。如果我能参与其中，那就干吧。

---

### [00:09:00] Lenny Rachitsky

**English:**
I love that answer. Speaking of kids, so you've got two kids, I've got a young kid, he's just about to turn two. I'm curious just what skills you're encouraging your kids to build as this AI becomes more and more of our future and some jobs will be changed and just what advice do you have?

**中文翻译:**
我喜欢这个回答。说到孩子，你有两个孩子，我有一个快两岁的孩子。我很想知道，随着 AI 越来越深入我们的未来，一些工作将被改变，你正在鼓励你的孩子培养哪些技能？你有什么建议吗？

---

### [00:09:18] Mike Krieger

**English:**
We have this breakfast feed breakfast with the kids every morning and sometimes some question will come up, something about physics and our oldest kid's almost six, but they ask funny questions about the solar system or physics or in a 6-year-old way and before we reach for Claude, because at first my instinct is like, "Oh, I wonder how Claude will do this question." And we started changing, "Well, how would we find out?" And the answer can't just be we'll ask Claude, all right, well, we could do this experiment, we could have this thing. So I think nurturing curiosity and still having a sense of, I don't know, the scientific process sounds grandiose to instill in a 6-year-old, but that process of discovery and asking questions and then systematically working right through, I think will still be important. And of course AI will be an incredible tool for helping resolve large parts of that, but that process of inquiry I think is still really important and independent thought.

**中文翻译:**
我们每天早上都会和孩子们一起吃早餐。有时会冒出一些问题，比如关于物理的。我大女儿快六岁了，他们会以六岁孩子的方式问一些关于太阳系或物理的有趣问题。在求助于 Claude 之前——因为我的第一本能是“哦，我想看看 Claude 怎么回答这个问题”——我们开始改变方式，问：“那我们该如何找出答案呢？” 答案不能只是“问 Claude”。我们会说，好吧，我们可以做这个实验，或者观察这个现象。所以我觉得培养好奇心，以及保持一种……虽然对六岁孩子谈“科学过程”听起来有点宏大，但那种发现、提问并系统性解决问题的过程，我认为依然非常重要。当然，AI 将是协助解决大部分问题的绝佳工具，但这种探究过程和独立思考能力我认为依然是核心。

---

### [00:10:11] Mike Krieger

**English:**
My favorite moment with my kid, because she's very headstrong, our 6-year-old, she said something and I wasn't sure if it was true. It was, oh, is that coral is an animal or corals alive? I don't even remember what the details of it. And I was like, "I don't know if that's true." And she's like, "It's definitely true, dad." I'm like, "All right, let's ask Claude on this one." And she's like, "You can ask Claude, but I know I'm right." And I'm like I love that. I want that kind of level of not just delegating all of your cognition to the AI because it won't always get it right. And also it kind of short circuits any kind of independent thought. So the skill of asking questions, inquiry and independent thinking, I think those are all the pieces. What that looks like from a job or occupation perspective, I'm just keeping an open mind and I'm sure that'll radically change between now and then.

**中文翻译:**
我女儿非常固执，我最喜欢的一个瞬间是：她说了件事，我不确定对不对。好像是关于珊瑚是动物还是活的之类，细节我记不清了。我说：“我不确定那是不是真的。” 她说：“爸爸，那绝对是真的。” 我说：“好吧，那我们问问 Claude。” 她说：“你可以问 Claude，但我知道我是对的。” 我太喜欢那一刻了。我不希望人们把所有的认知工作都委托给 AI，因为 AI 并不总是正确的，而且这会扼杀独立思考。所以，提问、探究和独立思考的技能，我认为就是全部。至于这在未来的职业或工作中会呈现出什么样子，我保持开放态度，我相信从现在到那时，情况会发生翻天覆地的变化。

---

### [00:11:02] Lenny Rachitsky

**English:**
It's interesting. Tobias Lütke, Shopify CEO, on the podcast and he had the same answer for what he's encouraging his kids to develop is curiosity. And so it's interesting that's a common thread.

**中文翻译:**
很有意思。Shopify 的 CEO Tobias Lütke 在播客里也给出了同样的答案，他鼓励孩子们培养的也是好奇心。看来这是一个共同点。

---

### [00:11:14] Mike Krieger

**English:**
The K through eight school our kid goes through had an AI and education expert come in and I had a very low bar or a very low expectation of what this conversation was going to be like. And actually I think it went over most of the people in the audience's heads because he was like, "All right, well let me take you all the way back to Claude Shannon in information theory." And I could see people's eyes going, "What did I sign up for and why am I hearing this school auditorium hearing about information theory?" But he did a really nice job I think of also just imagining there will be different jobs and we don't know what those jobs are going to be and so what are the skills and techniques and remain open mindedness around what the exact way we recombine those things. And even those will probably change three times between now and when they're 18.

**中文翻译:**
我孩子上的那所 K-8 学校请来了一位 AI 与教育专家。起初我对这场讲座的期望值很低，但实际上，我觉得他讲的内容超出了大多数观众的理解范围，因为他一上来就说：“好吧，让我带你们回到 Claude Shannon 的信息论。” 我能看到台下家长的眼神在说：“我这是报了什么名？为什么要在学校礼堂听信息论？” 但我觉得他讲得很好，他让我们想象未来会有不同的工作，虽然我们现在不知道那些工作是什么，所以关键在于掌握技能和方法，并对如何重新组合这些东西保持开放心态。甚至在他们 18 岁之前，这些东西可能还会变个三次。

---

### [00:11:59] Lenny Rachitsky

**English:**
So we're talking about timelines and how things are changing. So I've seen these stats that you've shared, other folks at Anthropic have shared about how much of your code is now written by AI. So people have shared stats from 70% to 90%. There was an engineer lead that shared 90% of your code roughly is written by AI now, which first of all is just insane that it went from zero to 90%, I don't know, a few years, something like that. Yeah, basically. I don't think people are talking about this enough. That's just wild. You guys are basically at the bleeding edge. I've never heard a company that has this high a percentage of code being written by AI. So you guys are at the edge of where things are heading. I think most companies will get here. How has product development changed knowing so much of your code is now written by AI, so usually it's like PM, it's like here's what we're building, engineer builds it, it ships it. Is it still kind of roughly that or is it now PMs are just going straight to Claude, build this thing for me, engineers are doing different things? Just what looks different in a world where 90% of your code is written by AI?

**中文翻译:**
我们谈到了时间线和变化。我看到你和 Anthropic 的其他同事分享过一些数据，关于你们现在有多少代码是由 AI 编写的。有人说是 70% 到 90%。有一位工程主管提到，现在大约 90% 的代码是 AI 写的。首先，这太疯狂了，在短短几年内就从 0 飙升到了 90%。我觉得人们对此讨论得还不够。这简直不可思议。你们基本上处于最前沿，我从未听说过哪家公司的 AI 编写代码比例有这么高。既然你们代表了未来的方向，而大多数公司最终也会走到这一步，我想问：在 90% 的代码由 AI 编写的情况下，产品开发发生了怎样的变化？通常流程是 PM 决定做什么，工程师去写代码，然后发布。现在还是这样吗？还是说 PM 直接找 Claude 说“帮我做这个”，而工程师在做别的事情？在一个 90% 代码由 AI 编写的世界里，工作流程有什么不同？

---

### [00:12:57] Mike Krieger

**English:**
Yeah, it's really interesting because I think the role of engineering has changed a lot, but the suite of people that come together to produce a product hasn't yet. And I think for the worst in a lot of ways because I think we're still holding on some assumptions. So I think the roles are still fairly similar, although we'll now get in my favorite things that happen now are some nice PMs that have an idea that they want to express or designers that have an idea they want to express will use Claude and maybe even Artifacts to put together an actual functional demo. And that has been very, very helpful. No, no, this is what I mean that makes it tangible. That's probably the biggest role shift is prototyping happening earlier in the process via more of this code plus design piece. What I've learned though is the process of knowing what to ask the AI, how to compose the question, how to even think about structuring a change between the backend and the front end. Those are still very difficult and specialized skills and they still require the engineer to think about it.

**中文翻译:**
这非常有意思。我认为工程的角色发生了很大变化，但共同打造产品的团队构成还没有变。在很多方面，我觉得这反而更糟了，因为我们还抱着一些旧的假设。所以角色分工目前还比较相似，不过我最喜欢的一点是，现在一些有想法的 PM 或设计师会使用 Claude，甚至结合 Artifacts 功能，直接做出一个实际可运行的 Demo。这非常有帮助，它让想法变得具体可感。这可能是最大的角色转变：通过这种“代码+设计”的方式，原型开发在流程中大大提前了。但我学到的是，知道该问 AI 什么、如何组织问题、甚至如何构思后端和前端之间的架构变更，这些依然是非常困难且专业的技能，仍然需要工程师去思考。

---

### [00:13:54] Mike Krieger

**English:**
And we really rapidly became bottlenecked on other things like our merge queue, which is the get in line to get your change accepted by the system that then deploys into production. We had to completely re-architect it because so much more code was being written and so many more pull requests were being submitted that it just completely blew out the expectations of it. And so it's like, I don't know if you've ever read, is it the goal, the classic process optimization book, and you realize there's this critical path theory. I've just found all these new bottlenecks in our system, there's an upstream bottleneck, which is decision making and alignment. A lot of things that I'm thinking about right now is how do I provide the minimum viable strategy to let people feel empowered to go run and type and build and explore at the edge of model capabilities. I don't think I've gotten that right yet, but that's something I'm working on. And then once the building is happening, other bottlenecks emerge, let's make sure we don't step on each other's toes. Let's think through all the edge cases here ahead of time so that we're not blocked on the engineering side. And then when the work is complete and we're getting ready to ship it, what are all those bottlenecks as well? Let's do the air traffic control of landing the change. How do we figure out large strategy? So I think there hasn't been as much pressure on changing those until this year, but I would expect that a year from now the way that we are conceiving of building and shipping software just changes a lot because it's going to be very painful to do it the current way.

**中文翻译:**
而且我们很快就在其他环节遇到了瓶颈，比如合并队列（merge queue）——也就是排队让系统接受你的更改并部署到生产环境。我们不得不完全重构它，因为代码产出量太大，提交的 PR 太多，完全超出了预期。这就像经典的过程优化书籍《目标》（The Goal）里讲的，你会意识到存在“关键路径理论”。我在我们的系统中发现了所有这些新的瓶颈：上游瓶颈是决策和对齐（alignment）。我现在思考很多的一点是，如何提供“最小可行策略”，让人们感到有动力去在模型能力的边缘进行尝试、编写、构建和探索。我不觉得我已经做得很好了，但这是我正在努力的方向。一旦构建开始，其他瓶颈就会出现：我们要确保大家不会互相干扰，提前想清楚所有的边缘情况，以免在工程端卡住。当工作完成准备发布时，同样会有瓶颈：我们需要像空中交通管制一样协调变更的落地。如何制定宏观策略？我认为直到今年，改变这些流程的压力才真正显现，但我预计一年后，我们构思、构建和发布软件的方式将发生巨大变化，因为沿用现有的方式会变得非常痛苦。

---

### [00:15:20] Lenny Rachitsky

**English:**
Wow, that is extremely interesting. So it used to be here's an idea, let's go design it, build it, ship it, merge it, and then ship it. And usually the bottleneck was engineering, taking time to build a thing and then design. And now you're saying the two bottlenecks you're finding are okay deciding what to build and aligning everyone and then it's actually the cue to merge it into production. And I imagine review it too is probably a part-

**中文翻译:**
哇，这太有意思了。以前是：有个想法，设计它，构建它，合并，然后发布。通常瓶颈在于工程开发和设计耗时。而现在你说发现的两个瓶颈是：决定做什么并让大家达成共识，以及代码合并到生产环境的排队。我猜代码审查（review）可能也是其中一部分……

---

### [00:15:47] Mike Krieger

**English:**
Reviewing has really changed too. And in many ways perhaps unsurprisingly the team that works in the most futuristic way is the Claude Code team because they're using Claude Code to build Claude Code in a very self-improving kind of way. And early on in that project, they would do very line by line pull request reviews in the way that you would for any other project. And they've just realized Claude is generally right and it's producing pull requests that are probably larger than most people are going to be able to review. So can you use a different Claude to review it and then do the human almost acceptance testing more than trying to review line by line. There's definitely pros and cons and so far it's gone well. But I could also imagine it going off the rails and then having a completely both unmaintainable or even understandable by Claude Code base that hasn't happened, but watching them change their review processes definitely has been interesting. And yeah, the merge queue is one instance of the bottom bottleneck that forms down there, but there's other ones which is how do we make sure that we're still building something coherent and packaging it up into a moment that we can share with people and whether that's around a launch moment, whether that's about then enabling people to use this thing and talking about it, the classic things of building something useful for people and then making it known that you've built it and then learning from their feedback still exists. We've just made a portion of that whole process much more efficient.

**中文翻译:**
代码审查确实也变了。在很多方面，毫不意外地，工作方式最超前的是 Claude Code 团队，因为他们正以一种自我进化的方式用 Claude Code 构建 Claude Code。在项目早期，他们还会像其他项目一样逐行进行 PR 审查。但后来他们意识到，Claude 通常是正确的，而且它生成的 PR 规模往往大到人类难以逐行审阅。所以，你能不能用另一个 Claude 来审查它，然后人类主要负责验收测试（acceptance testing），而不是逐行检查？这当然有利有弊，目前运行良好。但我也可以想象，如果失控了，可能会产生一个既无法维护、甚至连 Claude 自己都看不懂的代码库——虽然目前还没发生，但观察他们改变审查流程确实很有趣。合并队列只是下游瓶颈的一个例子，还有其他的：比如如何确保我们构建的东西依然是连贯的，并将其打包成一个可以分享给用户的时刻（无论是发布会，还是引导用户使用并交流）。构建有用的东西、让用户知道、并从反馈中学习，这些经典环节依然存在，我们只是让其中一部分变得极其高效。

---

### [00:17:06] Lenny Rachitsky

**English:**
I heard you describe this as you guys are patient zero for this way of working.

**中文翻译:**
我听你把这形容为，你们是这种工作方式的“零号病人”。

---

### [00:17:11] Mike Krieger

**English:**
Yes.

**中文翻译:**
是的。

---

### [00:17:12] Lenny Rachitsky

**English:**
I love that. Do you have a sense of what percentage of Claude Code is written by Claude Code?

**中文翻译:**
太棒了。你大概知道 Claude Code 有多少比例是由 Claude Code 自己编写的吗？

---

### [00:17:17] Mike Krieger

**English:**
At this point, I would be shocked if it wasn't 95% plus. I'd have to ask Boris and the other tech leads on there. But what's been cool is so nitty-gritty stuff, Claude Code is written in TypeScript. It's actually our largest TypeScript project. Most of the rest of Anthropic is written in Python, some Go, some Rust now, but we're not like a TypeScript shop. And so I saw a great comment yesterday in our Slack where somebody had this thing that was driving them crazy about Claude Code and they're like, "Well, I don't know any TypeScript, I'm just going to talk to Claude about it and do it." And they went from that to pull requests in an hour and solve their problem and they submitted a pull request and that breaking down the barriers. One, it changes your barrier to entry for any kind of newcomer to the project. I think it can let you choose the right language for the right job for example. I think that helps as well, but I think it also just reinforces Claude Code being that patient alpha of that where contributions from outside the team can be Claude coded as well.

**中文翻译:**
到目前为止，如果比例没到 95% 以上我会很惊讶。我得问问 Boris 和其他的技术负责人。有趣的是一些细节：Claude Code 是用 TypeScript 写的，它实际上是我们最大的 TypeScript 项目。Anthropic 的大部分其他项目是用 Python 写的，还有一些 Go 和 Rust，我们并不是一家主打 TypeScript 的公司。昨天我在 Slack 上看到一个很棒的评论，有人对 Claude Code 的某个地方感到抓狂，他说：“虽然我不懂 TypeScript，但我打算直接跟 Claude 聊聊，把它搞定。” 结果他一小时内就提交了 PR 并解决了问题。这种打破障碍的感觉太棒了。首先，它改变了新人加入项目的门槛；其次，它让你能为特定的工作选择最合适的语言。而且这进一步强化了 Claude Code 作为这种模式的先行者地位，即便是团队之外的贡献也可以通过 Claude Code 来完成。

---

### [00:18:18] Lenny Rachitsky

**English:**
Wow, this is, it's just continue to blow my mind all these things that you're sharing, 95% of Claude Code is written by Claude Code roughly.

**中文翻译:**
哇，你分享的这些东西一直在刷新我的认知，大约 95% 的 Claude Code 是由它自己写的。

---

### [00:18:27] Mike Krieger

**English:**
That's my guess. Yeah, I'll come back with the real stuff. But I mean if you ask the team, that's how they're working and that's how they're getting contributions from across the company too.

**中文翻译:**
那是我的猜测。是的，回头我再确认下准确数据。但如果你问团队，他们就是这么工作的，这也是他们获取全公司同事贡献的方式。

---

### [00:18:35] Lenny Rachitsky

**English:**
It's interesting going back to your point about strategy being assisted by Claude itself and your point about how a lot of the bottlenecks now are kind of the top of the funnel of coming up with ideas aligning everyone, it's interesting that Claude is already helping with that also of helping you decide what to build. So if those two bottlenecks are aligning, deciding what to build and then just merging and getting everything, where do you see the most interesting stuff happening to help you speed those things up?

**中文翻译:**
很有意思，回到你说的“策略由 Claude 辅助”这一点，以及你提到的现在很多瓶颈在于漏斗顶端——即构思想法和对齐共识。有趣的是，Claude 已经在帮你决定构建什么了。如果这两个瓶颈是对齐决策和代码合并，你认为在哪些方面会有最有趣的进展来加速这些环节？

---

### [00:19:02] Mike Krieger

**English:**
Yeah, I think that on that first row, I started the year by writing a doc that was effectively how do we do product today and where is Claude not showing up yet that it should? And I think that upstream part is the next one to go. It's interesting. At your conference I talked to somebody who's working on a PRD, GPT kind of ChatPRD, I think was the-

**中文翻译:**
是的，关于第一点，我今年年初写了一份文档，核心是：我们现在是如何做产品的，以及 Claude 在哪些本该出现的地方还没出现？我认为上游环节是下一个突破点。很有趣，在你的大会上，我遇到一个正在做 PRD GPT（类似 ChatPRD）的人……

---

### [00:19:24] Lenny Rachitsky

**English:**
ChatPRD, [inaudible 00:19:24].

**中文翻译:**
ChatPRD，[听不清]。

---

### [00:19:24] Mike Krieger

**English:**
Yeah. Can Claude be a partner in figuring out what to build? What the market size is if you want to approach it that way? What the user needs are if you look at a different way? We think a lot about the virtual collaborator on topic and one of the ways in which I think that can show up is, "Hey, I'm in the Discord, the Claude Anthropic Discord, I'm in the user Fora, I'm on X and I'm reading things and here's what's emergent." That's step one. Models can do that today. Step two, which the models probably can do today, which have to wire them up to do it is and not only are the problems here's how I think you might be able to solve them. And then taking that through to, and I put together a pull request to solve this thing that I'm seeing feels very achievable this year than stringing those things together and we're limited more. This is why MCP is exciting to me. We're limited more around making sure the context flows through all of that so we have the right access to those things more than the model's capability to reason and propose.

**中文翻译:**
是的。Claude 能否成为决定“构建什么”的伙伴？比如分析市场规模，或者从不同角度洞察用户需求？我们经常思考“虚拟协作伙伴”这个话题，我认为它的一种体现方式是：“嘿，我在 Discord 社区、用户论坛和 X 上观察，发现了一些新趋势。” 这是第一步，现在的模型就能做到。第二步（模型现在可能也能做，但需要把它们串联起来）是：不仅发现问题，还提出“我认为可以这样解决”。然后进一步到：“我提交了一个 PR 来解决我看到的这个问题。” 这在今年看起来是非常可实现的。把这些环节串联起来，我们现在的限制更多在于确保“上下文”（context）能在整个流程中顺畅流动，确保我们有正确的访问权限，而不是受限于模型的推理和提议能力。这就是为什么 MCP（模型上下文协议）让我感到兴奋。

---

### [00:20:13] Mike Krieger

**English:**
Now the model might not have perfect UI taste yet, so there's definitely room for design to intervene and be like, "Oh, that's not quite how I would solve the problem of this not showing up." But I would get very excited. I would give you a really small example, but we changed on Claude AI, you should be able to just copy markdown from Artifacts or code from Artifacts and we changed it so you can actually download it and export it. We changed the button to export and we got a bunch of feedback like, "How do I copy now?" And the answer is you drop it down and it's copied. It's just mind one of those things where it's made sense, but we probably got it not quite right. That feedback was in the RUX channel. I would've loved an hour later for a plot to be like, "Hey, if we do want to change it back, here's the PR to do it." And by the way, eventually, and then I'm going to spin up an A/B test to see if this changes metrics and then we'll see how it looks in a week. If you told me that about a year and a half ago going to be like, "Ah, yeah, maybe like 27, maybe 26." But it really feels just at the tip of capabilities right now.

**中文翻译:**
当然，模型现在的 UI 品味可能还不完美，所以设计人员肯定需要介入，说：“哦，这不完全是我解决这个问题的方式。” 但我对此非常兴奋。举个小例子：在 Claude AI 上，用户可以从 Artifacts 中复制 Markdown 或代码，我们后来改成了可以直接下载和导出。我们把按钮改成了“导出”，结果收到一堆反馈问：“现在怎么复制？” 答案是点开下拉菜单就有复制选项。这属于那种我们觉得合理但可能没做对的小细节。这些反馈出现在 RUX（研究与用户体验）频道里。我非常希望一小时后 Claude 能跳出来说：“嘿，如果我们想改回去，这是 PR。” 并且，最终它还能说：“顺便，我要启动一个 A/B 测试来看看这是否会改变指标，一周后看结果。” 如果你一年半前告诉我这些，我会觉得“啊，可能要到 2026 或 2027 年吧”。但现在，这真的感觉就在能力爆发的边缘。

---

### [00:21:20] Lenny Rachitsky

**English:**
Wow, okay. You mentioned the Lenny and Friends Summit. I wanted to talk about this a bit. So you were on a panel with Kevin Weil, the CPO of OpenAI, I think it was the first time you guys did this maybe the last time for now.

**中文翻译:**
哇，好的。你提到了 Lenny and Friends 峰会。我想聊聊这个。你当时和 OpenAI 的 CPO Kevin Weil 同台讨论，我想那是你们第一次同台，可能也是目前为止的最后一次。

---

### [00:21:32] Mike Krieger

**English:**
Yeah, we haven't done it since, not for any reason. I had a lot of fun.

**中文翻译:**
是的，之后还没再同台过，倒也没什么特别原因。我当时玩得很开心。

---

### [00:21:34] Lenny Rachitsky

**English:**
What a legendary panel we assembled there with Sarah Guo moderating. And you made this comment actually ended up being the most rewatched part of the interview, which is that you were putting product people on the model team and working with researchers making the model better and you're putting some product people on the product experience making the UX more intuitive, making all that better. And you found that almost all the leverage came from the product team working with the researchers. And so you've been doing more of that. So first of all, does that continue to be true? And second of all, what are the implications of that for product teams?

**中文翻译:**
那真是一场传奇般的讨论，由 Sarah Guo 主持。你当时发表了一个观点，后来成了那段采访中被重看次数最多的部分：你把产品人员安排进模型团队，与研究员合作优化模型；同时把另一些产品人员放在产品体验端，让 UX 更直观。你发现，几乎所有的杠杆效应（leverage）都来自于产品团队与研究员的合作。所以你一直在加大这方面的投入。首先，这现在依然成立吗？其次，这对产品团队意味着什么？

---

### [00:22:11] Mike Krieger

**English:**
It's continued to be true. And in fact I think that if the proportion was already skewing towards having more of that embedding, I've just become more and more convinced. I didn't feel as strongly about it during the summit and now I feel really strongly about it. If we're shipping things that could have been built by anybody just using our models off the shelf, there's great stuff to be built by using our models off the shelf by the way, don't get me wrong, but where we should play and what we can do uniquely should be stuff that's really at that magic intersection between the two, right? Artifacts may a great example and if you play with Artifacts with Claude 4, that's an actually really interesting example where we took somebody from our, we have Claude code skills, which is a team that really is doing the post-training around teaching Claude some of these really specific skills and we paired it with some product people and then together we revamped how this looks in the product today and what Claude can do way better than just like, "Yeah, we just used the model and we prompted a little bit." That's just not enough. We need to be in that fine-tuning process.

**中文翻译:**
这依然成立。事实上，如果说当时比例已经在向这种“嵌入式”合作倾斜，我现在则更加坚信这一点。峰会时我的感觉还没那么强烈，现在非常强烈。如果我们发布的东西是任何人直接调用我们的现成模型就能做出来的——顺便说一下，用现成模型也能做出很棒的东西——但我们真正该发力、能体现独特价值的地方，应该是两者之间那个神奇的交汇点。Artifacts 就是个绝佳例子。如果你在 Claude 4 上体验 Artifacts，你会发现这非常有趣：我们从 Claude Code Skills 团队（负责后期训练，教 Claude 特定技能的团队）抽调了人手，与产品人员搭档，共同重塑了产品形态。这比仅仅“调用模型并写点提示词”要好得多。那是不够的，我们需要深入到微调（fine-tuning）过程中去。

---

### [00:23:36] Mike Krieger

**English:**
So much of what, if you look at what we're working on right now, but we've shipped recently between research and all these other things are things that the functional unit of work at Anthropic is no longer take the model and then go work with design and product to go ship a product. It's more like we are in the post-training conversations around how these things should work and then we are in the building process and we're feeding those things back and looping them back. I think it's exciting. It's also a new way of working that not all PMs have, but the PMs that have the most internal positive feedback from both research and engineering are the ones that get it that I was in a product review yesterday, I was like, "Oh, if we want to do this memory feature, we should talk to the researchers because we just shipped a bunch of memory capabilities in Claude 4." They're like, "Yeah, yeah, we've been talking to them for weeks, this is how we're manifesting it." It's like, "Okay, I feel good. I feel like we're doing the right things now."

**中文翻译:**
如果你看我们最近发布的东西，你会发现 Anthropic 的基本工作单元不再是“拿来模型，然后找设计和产品去发布”。更像是：我们参与后期训练的讨论，确定功能该如何运作，然后在构建过程中不断反馈和循环。这很令人兴奋，也是一种全新的工作方式，并非所有 PM 都能适应。但在内部，那些获得研究和工程团队最多正面评价的 PM，正是那些理解这一点的人。昨天我在一个产品评审会上说：“哦，如果我们想做这个记忆功能，应该找研究员聊聊，因为我们在 Claude 4 中发布了很多记忆能力。” 他们回答：“是的是的，我们已经和他们聊了好几周了，这就是我们的实现方式。” 我当时就觉得：“太好了，感觉我们现在路走对了。”

---

### [00:24:03] Lenny Rachitsky

**English:**
So let me pull on this thread more and there's something I've been thinking about along these lines. So essentially there's a big part of entropic that's building this super intelligent giga brain that's going to do all these things for us over time. And then, as you said, there's the product team that's building the UX around this super intelligent giga brain and over time this super intelligence is going to be able to build its own stuff. And so I guess just where do you think the most value will come from traditional product teams over time? I know this is different because you guys are a foundational alum company and not most companies don't work this way, but just, I don't know, thoughts on just the where most value will come from product teams over time working on AI.

**中文翻译:**
让我顺着这个思路再深挖一下。基本上，Anthropic 的很大一部分力量在构建这个“超级大脑”，它会随着时间推移为我们做所有事。然后，如你所说，产品团队在为这个大脑构建 UX。随着时间推移，这个超级智能将能够构建自己的东西。那么，你认为传统产品团队的价值在未来会体现在哪里？我知道你们是基础模型公司，情况比较特殊，但我还是想听听你对“产品团队在 AI 时代如何创造最大价值”的看法。

---

### [00:24:42] Mike Krieger

**English:**
I think there's still a lot of value in two things. One is making this all comprehensible. I think we've done an okay job. I think we could do a much better job of making this conference. What's still the difference between somebody who's really adept at using these tools in their work and most people is huge. And maybe that's the most literal answer to your earlier question around what skills to learn. That is a skill to learn and use it in the same way that I remember we did computer lock class when I was in middle school. I remember being really good at Google and that was actually a skill back in the day to think in terms of this information is out there, how do I query for it? How do I do it? I think it actually was an advantage at the time. Of course now Google is pretty good at figuring out what you're trying to do if you are only in the neighborhood and there's less of that research kind of need. But I still think that's a necessary part of good product development, which is the capabilities are there and even if Claude can create products from scratch, what are you building and how do you make it Comprehensible? Still hard because I think that gets at this much deeper empathy and understanding of human needs and psychology. I was a human community interaction major, I still been talking in my book here. I still feel like that is a very, very, very, very necessary skill.

**中文翻译:**
我认为价值依然体现在两方面。第一是“使其可理解”（comprehensible）。我觉得我们做得还行，但还可以做得更好。目前，一个擅长在工作中使用这些工具的人和普通人之间的差距依然巨大。这也许是对你之前问“该学什么技能”最直白的回答。这本身就是一种技能。我记得中学上电脑课时，我很擅长用 Google 搜索，在当时那确实是一种技能——思考信息在哪里，如何查询。当时那是一种优势。当然，现在的 Google 已经很擅长猜你的意图了，这种“搜索研究”的需求变少了。但我依然认为，好的产品开发离不开这一点：即便 Claude 能从零开始创建产品，你到底在构建什么？你如何让它变得易于理解？这依然很难，因为它涉及对人类需求和心理的深度共情和理解。我大学专业是人机交互，我依然坚信这是一种极其必要的技能。

---

### [00:26:15] Mike Krieger

**English:**
So that's one. Two is, and this straight to call back to another one of your guests, strategy, how we win, where we'll play, figuring out where exactly you're going to want to, of all the things that you could be spending your time or your tokens or your computation on what you want to actually go and do. You could be wider probably than you could before, but you can't do everything. And even from an external perspective, if you're seen to be doing everything, it's way less clear around how you're positioning yourselves. Like strategy I think is still the second piece. And then the third one is opening people's eyes to what's possible, which is a continuation of making it understandable. But we were in a demo with a financial services company recently and we were working on here's how you can use our analysis tool and MCP together and you could see their light up and you're like, "Ah, okay." We call it overhang. The delta between what the models and the products can do and how they're being used on a daily basis. Huge overhang. So that's where still a very, very strong necessary role for product.

**中文翻译:**
这是第一点。第二点是策略——这让我想起你之前的另一位嘉宾——关于“如何赢”、“在哪里竞争”，在所有你可以投入时间、Token 或算力的事情中，决定到底要做什么。你现在的覆盖面可以比以前更广，但你不能做所有事。从外部看，如果你什么都做，你的定位就会变得模糊。所以策略是第二块。第三点是“开启人们的视野”，让他们看到可能性，这是“使其可理解”的延伸。最近我们给一家金融服务公司做演示，展示如何结合使用我们的分析工具和 MCP，你能看到他们的眼神亮了。我们称之为“能力滞后”（overhang），即模型和产品能做到的，与人们日常实际使用的程度之间的巨大差距。这就是产品角色依然非常必要且强大的地方。

---

### [00:26:59] Lenny Rachitsky

**English:**
Okay, that's an awesome answer. So essentially areas for product teams to lean into more is strategy, just getting better and better at strategy, figuring out what to build and how to win in the market, making it easier to help people understand how to leverage the power of these tools, the comprehensibility and kind of along those lines is opening people's eyes to the potential of these sorts of things. That's where product can still help.

**中文翻译:**
好的，这个回答太棒了。所以产品团队应该更多投入的领域是：策略（不断精进策略，决定构建什么以及如何在市场中获胜）、可理解性（让人们更容易理解如何利用这些工具的力量），以及开启人们对这些事物潜力的认知。这些是产品依然能发挥作用的地方。

---

### [00:27:21] Lenny Rachitsky

**English:**
Awesome. So along those lines actually, do you have any just prompting tricks for people, things that you've learned to get more out of Claude when you chat with it?

**中文翻译:**
太好了。顺着这个话题，你有没有什么给大家的提示词（prompting）技巧？也就是你学到的能从 Claude 那里获得更多价值的方法？

---

### [00:27:30] Mike Krieger

**English:**
Sometimes it's funny because in some ways we have the ultimate prompting job, which is to write the system prompt for Claudia AI and we publish all of these, which I think is another nice area of transparency. And we are always careful when giving prompting advice because at least officially, but I'll give you the unofficial version because you don't want things to become like we think this works, but we're not sure why. But I will do small things like in Claude Code and we actually do react to this very literally, but I always ask it to, if I wanted to use more reasoning, think hard and it'll use a different flow and I usually start with that. Nudging, there's a great essay around make the other mistake like if you tend to be too nice, can you focus on... Even if you're trying to be more critical or more blunt, you're probably not going to be the most critical blunt person in the world. And so with Claude sometimes I'm like, "Be brutal, Claude, roast me. Tell me what's wrong with this strategy." I know we were talking earlier about the Claude as thought partner around critiquing product strategy. I think I previously would say things like, "What could be better on this product strategy?" And I'm just like, "Just roast this product strategy," and Claude's like a pretty nice entity. It's hard to push it to be super brutal, but it forces it to be a little bit more critical as well.

**中文翻译:**
这很有趣，因为在某种程度上，我们做的是终极提示词工作——编写 Claude AI 的系统提示词（system prompt），而且我们会公开发布这些内容，我觉得这体现了很好的透明度。我们在给出官方建议时总是很谨慎，但我可以给你一个非官方版本。我会做一些小动作，比如在 Claude Code 中，如果我想要它进行更多推理，我会直接说“努力思考”（think hard），它会进入不同的处理流程，我通常以此开始。还有一个技巧是“犯另一个方向的错误”：如果你倾向于太客气，那就试着变得更尖锐。即使你试图变得更挑剔或更直白，你可能也不会成为世界上最刻薄的人。所以对 Claude，我有时会说：“刻薄一点，Claude，来吐槽我（roast me）。告诉我这个策略哪里有问题。” 之前提到 Claude 是产品策略的思考伙伴，以前我会问“这个策略哪里可以改进？”，现在我会说“狠狠吐槽这个策略”。Claude 本性很温和，很难让它变得超级毒舌，但这会迫使它变得更具批判性。

---

### [00:29:09] Mike Krieger

**English:**
The last thing I'll say is, so we have a team called Applied AI that does a lot of work with our customers around optimizing Claude for their use case. And we basically took their insights and their way of working and we put it into a product itself. So if you go to our console, our work bench, we have this thing called the prompt improver where you describe the problem and you give it examples and Claude itself will agentically create and then iterate on a prompt for you. I find what comes out of that ends up being quite different than what my intuitions would've been for a good prompt. And so I'd encourage folks to also check that out even for their own use cases because while that tool is met for an API developer putting a prompt into their product, it's equally applicable for a person doing a prompt for themselves. It'll insert XML tags which no human is going to think to do ahead of time. It actually is very helpful for Claude to understand what it should be thinking versus what it should be saying, et cetera. So that's another one is watch our prompt improver and then note that Claude itself is a very good prompter of Claude.

**中文翻译:**
最后我想说的是，我们有一个叫 Applied AI 的团队，专门负责帮助客户针对特定场景优化 Claude。我们把他们的洞察和工作方式做成了一个产品。如果你去我们的控制台（Console）或工作台（Workbench），你会看到一个叫“提示词优化器”（Prompt Improver）的工具。你描述问题并给出示例，Claude 就会自动为你创建并迭代提示词。我发现它生成的提示词通常和我直觉认为的“好提示词”大不相同。我鼓励大家去试试，即使是个人用途。它会插入 XML 标签，普通人通常不会想到这么做。这对于让 Claude 理解哪些是思考过程、哪些是输出内容非常有帮助。所以，关注我们的提示词优化器，并记住：Claude 本身就是一个非常出色的“Claude 提示词专家”。

---

### [00:29:41] Lenny Rachitsky

**English:**
Awesome. Okay, so we're going to link to that, the prompt improver. The core piece of advice you shared early is just do the opposite of what you would naturally do. So if you're trying to be nice, just be brutal, be very honest and frank with me.

**中文翻译:**
太棒了。我们会附上提示词优化器的链接。你刚才分享的核心建议就是：做你本能反应的反面。如果你习惯客气，那就试着变得“刻薄”，对我保持绝对的诚实和坦率。

---

### [00:29:53] Mike Krieger

**English:**
Exactly. I find that works quite well. What are the thought patterns that I've fallen into that you want to break me out of?

**中文翻译:**
没错。我发现这非常管用。问它：“我陷入了哪些思维定式，请帮我打破它们？”

---

### [00:29:59] Lenny Rachitsky

**English:**
I saw you guys just today maybe launched a Rick Rubin collab where it said vibe coding. What's that all about?

**中文翻译:**
我看到你们今天好像发布了一个和 Rick Rubin（著名音乐制作人）的合作项目，提到了“氛围编程”（vibe coding）。那是怎么回事？

---

### [00:30:06] Mike Krieger

**English:**
What I've heard about that. And again, a lot of the coalesce this week between model launch developer event and The Way of Code. We had one of our co-founders, Jack Clark is our head of policy and he got connected to Rick Rubin because I think he's been thinking a lot about coding, the future of coding and creativity and they've stayed in touch. And Rick got excited about this idea of he was creating art and visualizations with Claude and then he had these ideas around the way of the vibe coder and they put together this, actually I mean I love almost everything Rick Rubin. So the aesthetic of it I think is just so on point too. But yeah, this sort of like med meditation is probably the right word. Meditation on creativity, working alongside AI coupled with this really rich, interesting visualizations. But it's one of those things where internally they're like, "Oh yeah, and we're doing this Rick Rubin collab." We were like, "We're doing what? That's amazing."

**中文翻译:**
关于那个项目，这周我们有很多事情凑在了一起：模型发布、开发者活动以及《代码之道》（The Way of Code）。我们的联合创始人之一、政策主管 Jack Clark 联系上了 Rick Rubin，因为 Rick 一直在思考编程、编程的未来以及创造力，他们一直保持联系。Rick 对用 Claude 创作艺术和可视化效果非常兴奋，于是他提出了关于“氛围程序员之道”的想法。他们共同完成了这个项目。我个人非常喜欢 Rick Rubin 的几乎所有作品，所以我觉得这个项目的审美非常到位。这更像是一种……“冥想”可能是最准确的词。关于创造力、与 AI 协作的冥想，配上丰富有趣的视觉效果。当时内部说“我们要和 Rick Rubin 合作”时，我们的反应都是：“我们要干嘛？太酷了！”

---

### [00:31:03] Lenny Rachitsky

**English:**
I looked at it briefly and there's that meme of him just thinking deeply, sitting on a computer with a mouth.

**中文翻译:**
我简单看了一下，里面有那个他深思熟虑的梗图，坐在电脑前，还有个嘴巴。

---

### [00:31:09] Mike Krieger

**English:**
Yes.

**中文翻译:**
是的。

---

### [00:31:10] Lenny Rachitsky

**English:**
And ASCII art, I think.

**中文翻译:**
好像还有 ASCII 艺术。

---

### [00:31:11] Mike Krieger

**English:**
It's totally, it's like ASCII art vibe.

**中文翻译:**
完全正确，就是那种 ASCII 艺术的氛围。

---

### [00:31:14] Lenny Rachitsky

**English:**
I'm excited to have Andrew Luo joining us today. Andrew is CEO of OneSchema, one of our long time podcast sponsors. Welcome, Andrew.

**中文翻译:**
很高兴今天邀请到 Andrew Luo。Andrew 是 OneSchema 的 CEO，也是我们播客的长期赞助商之一。欢迎你，Andrew。

---

### [00:31:21] Speaker 3 (Andrew Luo)

**English:**
Thanks for having me, Lenny. Great to be here.

**中文翻译:**
谢谢邀请，Lenny。很高兴来到这里。

---

### [00:31:23] Lenny Rachitsky

**English:**
So what is new with one schema? I know that you work with some of my favorite companies like Ramp and Vanta and Watershed. I heard you guys launch a new data intake product that automates the hours of manual work that teams spent importing and mapping and integrating CSV and Excel files.

**中文翻译:**
OneSchema 最近有什么新动态？我知道你们和 Ramp、Vanta、Watershed 等我非常喜欢的公司合作。我听说你们发布了一个新的数据录入产品，可以将团队在导入、映射和集成 CSV 及 Excel 文件上花费的数小时手动工作自动化。

---

### [00:31:39] Speaker 3 (Andrew Luo)

**English:**
Yes, so we just launched the 2.0 of OneSchema FileFeeds. We've rebuilt it from the ground up with AI. We saw so many customers coming to us with teams of data engineers that struggled with the manual work required to clean messy spreadsheets. FileFeeds 2.0 allows non-technical teams to automate the process of transforming CSV and Excel files with just a simple prompt. We support all of the trickiest file integrations, SFTP, S3, and even email.

**中文翻译:**
是的，我们刚刚发布了 OneSchema FileFeeds 2.0。我们利用 AI 从底层重构了它。我们看到很多客户的数据工程师团队在清理混乱的电子表格时非常痛苦。FileFeeds 2.0 让非技术团队只需通过简单的提示词，就能自动完成 CSV 和 Excel 文件的转换过程。我们支持所有最棘手的文件集成方式，包括 SFTP、S3 甚至是电子邮件。

---

### [00:32:05] Lenny Rachitsky

**English:**
I can tell you that if my team had to build integrations like this, how nice would it be to take this off our roadmap and instead use something like OneSchema?

**中文翻译:**
我可以告诉你，如果我的团队必须构建这样的集成，能把它从我们的路线图中拿掉，转而使用 OneSchema 这样的工具，那该有多好。

---

### [00:32:13] Speaker 3 (Andrew Luo)

**English:**
Absolutely, Lenny. We've heard so many horror stories of outages from even just a single bad record in transactions, employee files, purchase orders, you name it. Debugging these issues is often like finding a needle in a haystack. OneSchema stops any bad data from entering your system and automatically validates your files, generating error reports with the exact issues in all bad files.

**中文翻译:**
绝对如此，Lenny。我们听过太多因为交易记录、员工档案或采购订单中仅仅一条错误记录就导致系统崩溃的惨痛故事。调试这些问题通常像大海捞针。OneSchema 能阻止任何错误数据进入你的系统，并自动验证文件，生成包含所有错误文件具体问题的错误报告。

---

### [00:32:34] Lenny Rachitsky

**English:**
I know that importing incorrect data can cause all kinds of pain for your customers and quickly lose their trust. Andrew, thank you so much for joining me. If you want to learn more, head on over to oneschema.co. That's oneschema.co.

**中文翻译:**
我知道导入错误数据会给客户带来各种痛苦，并迅速失去他们的信任。Andrew，非常感谢你加入。如果你想了解更多，请访问 oneschema.co。

---

### [00:32:48] Lenny Rachitsky

**English:**
Actually going back to the beginning of your journey at Anthropic, what's the story of you getting recruited at Anthropic? Is there anything fun there?

**中文翻译:**
回到你在 Anthropic 旅程的起点，你是怎么被招进 Anthropic 的？有什么有趣的故事吗？

---

### [00:32:55] Mike Krieger

**English:**
It all started and I actually sent my friend this text. So Joel Lewenstein, who I've known, he and I built our first iPhone apps together in 2007 when the App Store was just out and you could still make money by selling dollar apps on the App Store back in the day. And we were both at Stanford together and we were friends and we've stayed in touch over years and we've never gotten to work together since then. We've just remained close. And I was coming out of the Artifact experience, I was trying to figure out, do I start another company? I don't think so. I need a break from starting something from zero. Do I go work somewhere? I don't know what company would I want to go work at. And he reached out and he's like, "Look, I don't know if you at all considered joining something rather than starting something, but we're looking for a CPO. Would you be interested in chatting?"

**中文翻译:**
这一切都始于我发给朋友的一条短信。Joel Lewenstein，我认识他很久了，2007 年 App Store 刚推出时，我们就一起开发了第一批 iPhone 应用，那时候在 App Store 上卖 1 美元的应用还能赚到钱。我们当时都在斯坦福，是好朋友，多年来一直保持联系，但之后就没再共事过。我刚结束 Artifact 的创业经历，正在纠结：我要再开一家公司吗？我觉得不想，我需要从“从零开始”的状态中休息一下。我要去哪里工作吗？我不知道哪家公司值得我去。这时他联系了我，说：“听着，我不知道你有没有考虑过加入一家公司而不是自己创业，但我们正在找 CPO。你有兴趣聊聊吗？”

---

### [00:33:37] Mike Krieger

**English:**
And at that time, Claude 3 had just come out and I was like, "Okay, this company's clearly got a good research team. The product is so early still." And it was like, "Great, I'll take the meeting." And I first met with Daniela, was one of the co-founders and the president in Anthropic. And just from the beginning I was like a breath of fresh air, very little grandiosity coming off the founders, I mean they're clear-eyed about what they're building. They know what they don't know. How many times I talk to Dario always like Dario is like, "Look, I don't know anything about product, but here's an intuition." Usually the intuition is really good and leads to some good conversation, but I think that intellectual honesty and shared view of what it means to do AI in a responsible way, it just resonated.

**中文翻译:**
当时 Claude 3 刚刚发布，我想：“好吧，这家公司显然有一支强大的研究团队，但产品还处于非常早期。” 我说：“太好了，我愿意聊聊。” 我首先见到了 Daniela（联合创始人兼总裁）。从一开始，我就觉得这像是一股清流，创始人身上几乎没有那种浮夸感，他们对自己正在构建的东西非常清醒。他们知道自己不知道什么。每次我和 Dario 聊天，他总是说：“听着，我对产品一窍不通，但我有个直觉。” 通常他的直觉非常准，能引发很好的讨论。我认为那种“智识上的诚实”以及对“负责任地开发 AI”的共同愿景，让我产生了强烈的共鸣。

---

### [00:34:22] Mike Krieger

**English:**
I kept having this feeling in these interviews, this is the AI company I would've hoped to have found it if I had founded an AI company. And that's kind of the bar around if I'm going to join something that should be where I'm going to go. But what I realized, I actually hadn't joined a company since my first internship in college basically. And I was like, "Oh, how do I onboard myself? How do I get myself up to speed? How do I balance making sweeping changes versus understanding what's not broken about it overall?" And looking back on a year, I think I made some changes too slowly. I think there was ways reorganizing product that I could have made a change earlier. And I think I didn't appreciate how much a couple of really key senior people can shape so much of product strategy.

**中文翻译:**
在面试过程中，我一直有种感觉：如果我要创办一家 AI 公司，这就是我希望创办的那种。这就是我加入一家公司的标准。但我意识到，自从大学第一次实习以来，我其实就没再“加入”过别人的公司。我当时想：“哦，我该如何让自己入职？如何快速跟上进度？如何在进行大刀阔斧的改革和保留原有优点之间取得平衡？” 回首这一年，我觉得有些改变我做得太慢了。在产品团队重组方面，我本可以更早采取行动。而且我当时没有意识到，几个关键的资深人才竟然能对产品策略产生如此巨大的影响。

---

### [00:35:10] Mike Krieger

**English:**
I'll harken back to Claude Code. Claude Code happened because Boris, who actually was a Boris Cherney, he was an Instagram engineer and one of our senior ICs there, we overlapped a bit, was started that project from scratch internal first and then we got it out and then shipped it. And that's the power of one or two really strong people. And I made this mistake, we need more headcount and we do, I think there's more work that we need to do and there's things that I want to be building. But more than that we need a couple of almost founder type engineers that maybe connect back to our question on what skills are useful and how does product development change. And maybe even more so I'm a huge believer in the founding engineer tech lead with an idea and pair them with the right design and product supports, help them realize that, I'm 10 times more a believer in that than before.

**中文翻译:**
再回到 Claude Code。这个项目的诞生是因为 Boris Cherney，他曾是 Instagram 的工程师，也是我们那里的资深 IC（独立贡献者），我们曾共事过一段时间。他从零开始在内部启动了这个项目，然后我们把它推向市场。这就是一两个极强的人所能发挥的力量。我曾犯过一个错误，认为我们需要更多的人头（headcount）——当然我们也确实需要，因为有很多想做的事——但更重要的是，我们需要几个“创始人级别”的工程师。这又回到了关于技能和产品开发变化的问题。我现在比以往任何时候都更相信：一个有想法的“创始工程师”技术主管，配上正确的设计和产品支持，去帮助他们实现愿景，这种模式的威力是巨大的。

---

### [00:36:01] Lenny Rachitsky

**English:**
I actually asked people on Twitter what to ask you ahead of this conversation. And the most common question surprisingly was why did you shut down Artifact? And I also wondered that because I loved Artifact. I was a power user. I was just like, "Finally a news app that I love that it's giving me what I want to know." So I guess just what happened there at the end?

**中文翻译:**
在这次对话前，我在 Twitter 上征集了大家想问你的问题。出乎意料的是，最普遍的问题是：你为什么关闭了 Artifact？我也很好奇，因为我很喜欢 Artifact，我是它的重度用户。我当时觉得：“终于有一款我喜欢的、能提供我想知道的信息的新闻应用了。” 所以，最后到底发生了什么？

---

### [00:36:20] Mike Krieger

**English:**
I still really miss it too. I didn't find a replacement and I think I substituted it by visiting individual sites and keeping things up that way. And it's not really the same, especially on the log to I think we got right with Artifact and if people didn't play with it before, it was we really tried to not just recommend top stories, they were part of it. But really if you were interested in Japanese architecture, you could pretty reliably get really interesting stories about Japanese architecture every day. Whether that's from a Dwell or from Architectural Digest or from a really specific blog that we found that somebody recommended to us. It captured some of that Google reader joy of content discovery of the deeper web. Our headwinds were a couple. One of them was just mobile websites have really taken a turn. I don't blame any individuals for this.

**中文翻译:**
我也非常怀念它。我还没找到替代品，现在只能通过访问单个网站来获取信息，但这感觉完全不同。我认为 Artifact 在长尾内容推荐上做得非常出色。如果你以前没用过，我们当时努力做的不只是推荐头条新闻，虽然那也是一部分。但如果你对日本建筑感兴趣，你每天都能可靠地获得关于日本建筑的有趣故事，无论这些故事是来自《Dwell》、《Architectural Digest》，还是我们发现的某个小众博客。它捕捉到了当年 Google Reader 那种在深度互联网中发现内容的乐趣。我们面临的阻力有几个。首先是移动端网站的体验变得非常糟糕。我不怪任何人。

---

### [00:37:10] Mike Krieger

**English:**
I think it's the market dynamics of it, but we put so much time or designers, sky Gunner Gray who's phenomenal that for Perplexity now, the app experience I was so proud of, but when you click through it was like the pressures on these mobile sites and these mobile publishers would be like, "Sign up for our newsletter. Here's a full screen video ad." It was very jarring and we didn't feel like it ethically made sense for us to do a bunch of ad blocking because then you're like, "Sure, you can deliver a nice experience for people, but that doesn't feel like it's playing fair with the publishers." But at the same time, the actual experience wasn't good. So the mobile web deteriorating, which makes me very sad, but I think was part of it. Two was Instagram spread in the early days because people would take photos and then post them on other networks and tell friends about it. And there was this really natural like, "How did you do that? I want to do it." News was very personal. I can't tell you how many people would be like, "I love Artifact." I'm like, "Did you tell anybody about it?" And they're like, "I told one person," and it didn't have that kind of spread.

**中文翻译:**
我认为这是市场动态使然。我们的设计师（现在在 Perplexity 的 Sky Gunner Gray 非常出色）投入了大量心血，我对 App 的体验非常自豪。但当你点击进入文章时，那些移动端出版商会弹出“订阅我们的 newsletter”、“全屏视频广告”之类的东西。这非常破坏体验。我们觉得在伦理上不应该做大规模的广告拦截，因为虽然这能给用户好体验，但对出版商来说不公平。可与此同时，实际体验确实很差。移动互联网环境的恶化让我很难过，但这是原因之一。第二点是，Instagram 早期能传播开是因为人们拍了照片发到其他社交网络，朋友会问：“你怎么做到的？我也想玩。” 但新闻是非常私密的。无数人跟我说“我爱 Artifact”，我问“那你告诉别人了吗？”，他们说“我告诉了一个人”。它缺乏那种病毒式传播的动力。

---

### [00:38:39] Mike Krieger

**English:**
And any attempt that we had to do it felt kind of contrived, like, "Oh, we'll wrap all the links in artifact.news." But we didn't want interstitial things. In some ways, this sounds very puritanical, I don't mean it to sound this way, but there were lines that we didn't want to cross that just felt ethically not us, that I've seen other news players do more of. And maybe if we had done that, it would've grown more, but I don't think that's the company we wanted to have built other way. I don't think we were the founders to have built it. And the third one, which is an underappreciated one, is we started at mid-COVID, which meant that we were fully distributed and I think there were major shifts that we would've wanted to make both in the strategy and the product and the team. And it's really hard to do that if you are all fully remote. Nothing replaces the Instagram days of we went through some hard times like Ben Horowitz called the we're F'ed, it's over kind of moments. This is definitely type two fun. I wouldn't say that my favorite memories because they weren't happy ones, but memories I really stayed with me with Instagram was like me and Kevin at Taqueria, Cancun on Market Street eating burritos at literally 11:00 PM being like, "How are we going to get out of this? How are we going to work through this?" And Zoom is not a good replica for that.

**中文翻译:**
我们尝试过的一些推广手段感觉都很生硬，比如把所有链接都包在 artifact.news 里。但我们不想做那种插屏式的东西。这听起来可能有点“清高”，我不是那个意思，但确实有一些底线是我们不想跨过的，虽然我看到其他新闻类产品会那么做。也许如果我们做了，增长会更好，但那不是我们想建立的公司，我们也不是那种风格的创始人。第三个被低估的原因是，我们在疫情中期启动，这意味着我们是完全远程协作的。当时我们想在策略、产品和团队上做重大调整，但在全远程环境下这非常困难。没有什么能取代 Instagram 时期那种共患难的经历——就像 Ben Horowitz 说的“我们要完蛋了”的那种时刻。那绝对是“二类快乐”（指过程痛苦但回味无穷）。我不会说那是我最快乐的回忆，但最深刻的回忆确实是和 Kevin 晚上 11 点在 Market 街的餐厅啃着卷饼，商量着“我们该怎么挺过去”。Zoom 无法复制那种感觉。

---

### [00:39:26] Mike Krieger

**English:**
You tend to let things go or things build up over time. So the confluence of those three things, we entered I guess 2024 and said, "Look, there is a company to be built in the space. I'm not sure where the people would've built it. This concurrent incarnation we love, but it's not growing." The way I put it's like 10 units of input in for one unit of output versus the other way around. If we put blood and tears into the product and launch something we were proud of and metrics would barely move, the energy is not present in this product, in this system. And so are we going to expend another year or two and then go off and fundraise only to find that this is the case or do we call it and see that it's run its course and try to find a home for it, et cetera. So that was the confluence on it and they started feeling this opportunity cost of AI is starting to change everything. We have an AI powered news app, but is this the maximal way in which we're going to be able to impact this? And it felt like the answer was increasingly no. But it was hard. I mean in the end I was really at peace of the decision, but it was a conversation that went on for a couple of months.

**中文翻译:**
在远程环境下，你往往会听之任之，或者让问题积压。所以这三个因素交织在一起，到了 2024 年初我们意识到：“这个领域确实大有可为，但我不确定我们是不是那群能做成的人。我们热爱现在的产品形态，但它没有增长。” 我当时的说法是：我们投入 10 分努力，只能换来 1 分产出，而不是反过来。如果我们倾注心血发布了一个引以为傲的产品，指标却几乎不动，说明这个产品、这个系统里缺乏那种“能量”。那么，我们是要再耗一两年去融资，最后发现结果还是一样，还是现在就果断结束，为它找个归宿？与此同时，我也感受到了巨大的机会成本：AI 正在改变一切。我们虽然有一个 AI 驱动的新闻应用，但这真的是我们发挥影响力的最佳方式吗？答案越来越倾向于“不”。这很难，虽然最后我对这个决定感到释然，但那是经过好几个月的反复讨论才定下来的。

---

### [00:40:26] Lenny Rachitsky

**English:**
On that note, just how hard was it because because there's an ego component to it, like, "Oh, I starting my new company, it's going to be great," and then you end up having to shut it down. Just how hard is that as a very successful previous founder shutting something down and then not working out?

**中文翻译:**
关于这一点，这有多难？因为这涉及自尊心（ego），比如“哦，我要开新公司了，一定会很棒”，结果最后不得不关掉它。作为一个曾经非常成功的创始人，关掉一个没做成的项目，心理压力有多大？

---

### [00:40:41] Mike Krieger

**English:**
Yeah, I mean I think when we started it, one of the conversations was like, "Look, what is the bar to success here? And do we want it to be something other than Instagram DAU?" Which is just an impossible bar. Only one company since, maybe two, you could say maybe ChatGPT and TikToK have reached that kind of mass consumer adoption starting a news app. Most people are not daily news readers even, right? And so we knew that we weren't pursuing that size of usage, at least with the first incarnation, but we did have an idea of building out complementary products over time that all use personalization and machine learning. We didn't even call it AI at the time. It was 2021 back-

**中文翻译:**
是的，我们刚开始时就讨论过：“成功的标准是什么？我们是否一定要追求 Instagram 那样的日活（DAU）？” 那是一个几乎不可能达到的标准。自那以后，可能只有 ChatGPT 和 TikTok 达到了那种大众消费级的普及程度。大多数人甚至都不是每天读新闻的，对吧？所以我们知道，至少在第一阶段，我们追求的不是那种规模的用户量。但我们确实想过随着时间推移构建一系列互补产品，全部基于个性化和机器学习。当时我们甚至不叫它 AI，那是 2021 年……

---

### [00:41:17] Lenny Rachitsky

**English:**
Yeah, yeah, AI, it was called machine learning back then.

**中文翻译:**
没错，那时候还叫机器学习。

---

### [00:41:19] Mike Krieger

**English:**
Yeah, it was called machine learning still. And so in shutting it down, you know it when you see it in terms of user growth and traction. And I wasn't expecting Instagram growth, but I was expecting or hoping for or looking for something that felt like at its own legs under it and it could continue to compound. I was really positively surprised by how supportive people were when we announced it. There was a bit of like I told you so which sure anything launching you could be like, "This is not going to work." And you're right, most of the time most things don't work. There was actually very little of that. And most people, the universal reception, at least as I received it, was kudos for calling it when you saw it and not protracted doing this for a long time.

**中文翻译:**
是的，还叫机器学习。在决定关闭它时，用户增长和牵引力的数据摆在那里，骗不了人。我不指望 Instagram 那样的增长，但我希望看到它能自立并持续产生复利效应。宣布关闭时，大家的反应让我感到意外地温暖。虽然也有一些“我早就说过”的声音——当然，任何东西发布时你都可以说“这成不了”，而且大多数时候你是对的——但这种声音其实很少。大多数人的反应是：佩服我们在看清形势后能果断止损，而不是长期拖延。

---

### [00:42:05] Mike Krieger

**English:**
And I've talked to founders since then that have been like, "Yeah, I probably would've taken this thing on for another six months, but saw what you guys did, realized we were barking up the wrong tree, made the call." And I was like, "If that frees up people to go work on a more interesting things, I feel like that's a good legacy for Artifact to have." But for sure there was an ego bruise of is it true that you're only as good as your last game if I am a huge sports fan, right? So is that true or is there something more over a time? I'm very competitive, but primarily with myself and so I'm always trying to find the next thing that I want to go and do that's hard. And unfortunately that probably means that more often than not I'll feel dissatisfied, but the most recent thing that I did, but hopefully that yields good stuff in the end.

**中文翻译:**
后来我遇到一些创始人，他们说：“我本来可能还会再死撑六个月，但看到你们的做法，我意识到我们也在缘木求鱼，于是也做了决定。” 我觉得，如果这能让人们腾出时间去做更有趣的事，那也算是 Artifact 留下的一份遗产。当然，自尊心肯定受挫了。作为一个体育迷，常说“你的水平取决于你上一场比赛的表现”，这是真的吗？还是说时间会证明更多？我非常有竞争心，但主要是和自己竞争。所以我总是在寻找下一个有挑战性的难事。不幸的是，这可能意味着我经常会对刚做完的事感到不满意，但希望最终能结出硕果。

---

### [00:42:50] Lenny Rachitsky

**English:**
Yeah, I think just the trajectory you went on after shows that it's okay to shut down things that you were working on. Okay, so you mentioned ChatGPT. I wanted to chat about this a bit. So there's something really interesting happening. So on the one hand you guys are doing some of the most innovative work in AI. You guys launched MCP, which is just, I don't know, the fastest growing standard of any time in history that everyone's adopting Claude powered and unlocked centrally the fastest growing companies in the world, Cursor, Lovable, and Bolt, and all these guys. I had them on the podcast and they're all like, "When Claude, I think 3.5 came out, Sonnet, was just like that's made this work finally." On the other hand, it feels like ChatGPT is just winning in consumer mind share. When people think AI, especially outside tech, it's just like ChatGPT in their mind. So let me just ask you this, I guess first of all, do you agree with that sentiment and then two, as a challenger brand in the AI space, just how does that inform the way you think about product strategy and mission and things like that?

**中文翻译:**
是的，你之后的职业轨迹证明了，关掉正在做的项目并没什么大不了。好，你提到了 ChatGPT，我想聊聊这个。现在发生着一件很有趣的事：一方面，你们在做 AI 领域最前沿的创新，发布了 MCP，这简直是历史上普及最快的标准，所有人都在采用；Claude 驱动并解锁了世界上增长最快的一批公司，比如 Cursor、Lovable、Bolt 等等。我请他们上过播客，他们都说：“当 Claude 3.5 Sonnet 发布时，一切终于跑通了。” 但另一方面，感觉 ChatGPT 在消费者心智中占据了绝对优势。当人们想到 AI，尤其是科技圈之外的人，脑子里只有 ChatGPT。所以我想问，首先你认同这种看法吗？其次，作为 AI 领域的挑战者品牌，这如何影响你的产品策略和使命？

---

### [00:43:50] Mike Krieger

**English:**
Yeah, I mean you look at the sort of public adoption or if you ask people, oh, if you Jimmy Kimmel man on the street kind of thing, name an AI company, I bet they would name and actually I'm not even sure they name open AI, they'd probably name ChatGPT because that brand is the lead brand there as well. And I think that's just the reality of it. I think that when I reflect on my year, I think maybe two things are true. One is consumer adoption is really lightning in a bottle and we saw it at Instagram. So almost maybe more than anybody, I can look internally and say, "Look, we'll keep building interesting products. One of them may hit." But to craft an entire product strategy around trying to find that hit is probably not wise, we could do it and maybe Claude can help come up with a fullness of things, but I think we'd miss out an opportunity in the meantime.

**中文翻译:**
是的，如果你去街头随机采访，让人说出一个 AI 公司的名字，我打赌他们会说 ChatGPT，甚至不一定会说 OpenAI，因为 ChatGPT 这个品牌太响亮了。这就是现实。回思这一年，我觉得有两点是成立的。第一，大众消费级的爆发式增长（consumer adoption）就像“瓶中闪电”一样可遇不可求，我们在 Instagram 经历过。所以，可能我比任何人都更清楚，我们可以继续构建有趣的产品，其中一个可能会爆火。但如果把整个产品策略都押在“寻找下一个爆款”上，那是不明智的。我们可以尝试，Claude 也能帮我们构思，但那样会错失眼下的机会。

---

### [00:44:41] Mike Krieger

**English:**
And then instead look yourself in the mirror and embrace who you are and what you could be rather than who others are is maybe the way I've been looking at it, which is we have a super strong developer brand, people build on top of us all the time, and I think we also have a builder brand. The people who I've seen react really well to Claude externally. Maybe the Rick Rubin connection has some resonance here as well. Can we lean into the fact that builders love using Claude? And those builders aren't all just engineers and they're not just all entrepreneurs starting their companies, but they're people that like to be at the forefront of AI and are creating things. Maybe they didn't think of those as engineers, but they're building... I got this really nice note from somebody internal on Anthropic who's on the legal team and he was building bespoke software for his family and connected to them in a new way.

**中文翻译:**
相反，你应该审视镜子里的自己，拥抱你现在的身份以及你可能成为的样子，而不是盯着别人。我们拥有极强的开发者品牌，人们一直在基于我们进行构建；我们还有一个“构建者”（builder）品牌。我看到外部对 Claude 反应最热烈的人，往往是那些构建者。也许和 Rick Rubin 的合作在这里也有共鸣。我们能否强化“构建者热爱 Claude”这一事实？这些构建者不只是工程师或创业者，还包括那些喜欢站在 AI 前沿并创造东西的人。他们可能不觉得自己是工程师，但他们在构建……我收到过 Anthropic 法律团队一位同事的感人留言，他为家人编写了一套定制软件，并以一种全新的方式与家人建立了联系。

---

### [00:45:29] Mike Krieger

**English:**
And I was like, "This is a glimmer of something that we should lean into a lot more." And so I think what, and this is actually connecting back to us saying like Claude being helpful here. A lot of what I've been thinking about going into the second half of the year and beyond is how do we figure out what we want to be when we grow up versus what we currently aren't or wish that we were or see other players in the space being. I think there's room for several generationally important companies to be built in AI right now. That's almost a truism given the adoption and growth that we've seen at Anthropic, but also across OpenAI and also places like Google and Gemini. So let's figure out what we can be uniquely good at that place to the personality of the founder. All the things come together, the personality of the founders, the quality of the models, the things the models tend to excel at, which is agentic behavior and coding.

**中文翻译:**
我想：“这就是我们应该大力投入的微光。” 这又回到了 Claude 如何提供帮助的话题。对于下半年及未来，我思考最多的是：我们如何确定自己“长大后”想成为什么，而不是纠结于我们现在不是什么，或者别人是什么。我认为在 AI 领域，现在完全可以容纳几家具有代际影响力的公司。考虑到 Anthropic、OpenAI 以及 Google Gemini 的增长，这几乎是不言而喻的。所以，我们要找到自己独特的优势，这与创始人的性格、模型的质量以及模型擅长的领域（比如代理行为和编程）息息相关。

---

### [00:46:20] Mike Krieger

**English:**
Great. There's a lot to be done there. How do we help people get work done? How do we let people delegate hours of work to Claude? And maybe there's fewer direct consumer applications on day one. I think they'll come, but I don't think that spending all of our time focused on that is the right approach either. And so I came in, everybody expected me to just go super, super hard on consumer and make that the thing and again, would make the other mistake. Instead, I spent a bunch of time talking to financial services companies and insurance companies and others who are building on top of the API. And then lately I've spent a lot more time with startups and seeing all the people that have grown off of that. And I think the next phase for me is let's go spend time with the builders, the makers, the hackers, the tinkerers, and make sure we're serving them really well. And I think good things will come from that and that feels like an important company as we do that.

**中文翻译:**
太棒了，那里大有可为。我们如何帮助人们完成工作？如何让他们把数小时的工作委托给 Claude？也许在第一天，直接面向消费者的应用没那么多。我认为它们会出现，但我不认为把所有时间都花在那上面是正确的方法。我刚加入时，大家都以为我会全力冲刺消费端，但我选择了“犯另一个方向的错误”。相反，我花了大量时间与金融服务公司、保险公司以及其他基于 API 构建的企业交流。最近，我花了更多时间与初创公司接触，看他们如何借此成长。我认为我的下一个阶段是：去和那些构建者、创造者、黑客和修补匠待在一起，确保我们为他们提供了极好的服务。我相信好结果会随之而来，这也会让我们成为一家伟大的公司。

---

### [00:47:08] Lenny Rachitsky

**English:**
So essentially it's differentiate and focus, lean into the things that are working, don't try to just beat somebody at their own game.

**中文翻译:**
所以本质上是差异化和聚焦，投入到行之有效的事情上，而不是试图在别人的主场击败别人。

---

### [00:47:15] Mike Krieger

**English:**
Exactly.

**中文翻译:**
没错。

---

### [00:47:15] Lenny Rachitsky

**English:**
Super interesting. So kind of along those lines, a question that a lot of AI founders have is just like, "Where's a safe space for me to play where the foundational model companies are going to come squash me?" So I asked Kevin Weil this and he had an answer and I noticed looking back at that conversation, he mentioned Windsurf a lot. He was like, "Wow, this kid really loves Windsurf." And then a week later they bought Windsurf. So it all makes sense now. So I guess the question just is, where do you think AI founders should play where they are least likely to get squashed by folks like OpenAI and Anthropic? And also, are you guys going to buy Cursor?

**中文翻译:**
非常有意思。顺着这个思路，很多 AI 创业者都有一个疑问：“哪里才是安全的赛道，不会被你们这些基础模型公司随手碾压？” 我问过 Kevin Weil 这个问题，他给了个回答。我回看那次对话，发现他不停提到 Windsurf，我当时想“哇，这家伙真的很爱 Windsurf”，结果一周后他们就收购了 Windsurf。现在一切都说得通了。所以问题是：你认为 AI 创业者应该在哪些领域发力，才最不容易被 OpenAI 或 Anthropic 碾压？另外，你们打算收购 Cursor 吗？

---

### [00:47:51] Mike Krieger

**English:**
I don't think we're going to buy Cursor. Cursor is very big, but we love working with them. A few thoughts on this, and it's a question I've gotten. We like to do these kind of founder days with whether it's Menlo Ventures who have about investors and [inaudible 00:48:10]. It's like we've done YC, we've done these founder days, and it's like the question that is on a lot of these founders minds, understandably so. I think things that are going to, I can't promise this as a five to 10 year thing, but at least one to three years, things that feel defensible or durable. One is understanding of a particular market. I spend a bunch of time with the Harvey folks and they showed me some of their UI. I was like, "What is this thing?" And they're like, "Oh, this is a really specific flow that lawyers do, "and you never would've come up with it from scratch and you could argue about whether it's the optimal way they get done things done, but it is the way that they get things done and here's how AI can help with that.

**中文翻译:**
我不认为我们会收购 Cursor。Cursor 已经很大了，但我们非常喜欢与他们合作。关于你的问题，我也经常被问到。我们经常举办“创始人日”活动，比如和 Menlo Ventures 合作。很多创始人都担心这个问题，这完全可以理解。我认为在未来 1 到 3 年内（5 到 10 年太难保证），有几样东西是具有防御性或持久性的。第一是对特定行业的深刻理解。我花了很多时间与 Harvey（法律 AI 公司）的人在一起，他们给我看了一些 UI，我问“这是什么？”，他们说“这是律师的一种非常特定的工作流”。你永远无法凭空想出这种设计。你可以争论这是否是最佳方式，但这就是他们的工作方式，而 AI 可以辅助这个过程。

---

### [00:48:45] Mike Krieger

**English:**
And so differentiated industry knowledge, biotech, I'm excited to go and partner with a bunch of companies that are doing good stuff around AI and biotech and we can supply the models and some applied AI to help make those models go well. And I been dreaming about at what point does live equipment all get an MCP and that you can then drive using Claude. There's all these cool things to be done there. I don't think we're going to be the company to go build the intent solution for labs, but I want that company to exist and I want to partner with it. Domains like legal, again, healthcare, I think there's a lot of very specific compliance and things. These are things that necessarily sound sexy out the gate, but there are very large companies to go and be built there. So that's number one. Paired with that is differentiated go to market, which is the relationship that you have with those companies, right?

**中文翻译:**
所以，差异化的行业知识是关键。比如生物技术，我很期待与那些在 AI+生物技术领域深耕的公司合作，我们可以提供模型和应用支持。我一直在想，什么时候实验室设备都能接入 MCP，然后你可以通过 Claude 来驱动它们。那里有很多酷炫的事情可以做。我们不会去为实验室构建端到端的解决方案，但我希望那样的公司存在并与我们合作。还有法律、医疗，这些领域有很多特定的合规要求。这些东西起步时听起来可能不那么“性感”，但那里可以诞生巨大的公司。这是第一点。与之配套的是差异化的进入市场（GTM）策略，也就是你与这些公司建立的关系。

---

### [00:49:35] Mike Krieger

**English:**
Do you know your customer at those companies? One of our product leads, Michael is always talking about don't just know the company you're selling to, but know the person you're selling to at the company. Are you selling to the engineering department? Because trying to pick which AILM to build on top of or API to build on top of. Let's go talk to them. Is it the CIOs? The CTOs? Is it the CFO? Is it general counsel? So under a company's deep understanding of who they're selling to is the other piece too. What's interesting there is it's probably hard to build that empathy in a three-month accelerator, but you maybe can start having that first conversation and build that out time or maybe you came from that world or you're co-founding somebody who came from that world. Then the last one is like there's tremendous power in distribution and reach to being ChatGPT and having hundreds of millions or billions of users.

**中文翻译:**
你了解这些公司的客户吗？我们的产品主管 Michael 经常说，不要只了解你卖给哪家公司，要了解你卖给公司里的哪个人。你是卖给工程部门吗？因为他们要决定基于哪个模型或 API 构建。还是卖给 CIO、CTO、CFO 或者是总法律顾问？对销售对象的深度理解是另一块基石。有趣的是，这种共情能力很难在三个月的加速器里培养出来，但你可以从第一次对话开始积累，或者你本身就来自那个行业，或者你的合伙人来自那里。最后一点是，像 ChatGPT 那样拥有数亿甚至数十亿用户，其分发和触达能力具有巨大的威力。

---

### [00:50:23] Mike Krieger

**English:**
There's also people have an assumption about how to use things and so I get excited about startups that will get started that have a completely different take on what the form factor is by which we interface with AI. And I haven't seen that many of them yet. I wanted to see more of them. I think more of them will get created with some things like our new models, but the reason that that's an interesting space to occupy is do something that feels very advanced user, very power user, very weird and out there at the beginning, but could become huge if the models make that easy. And it's hard for existing incumbents to adapt to because people already have an existing assumption about how to use their products or how to adapt to them. So those are my answers. I don't envy them. I would probably be asking those questions if I was starting a company in the AI space.

**中文翻译:**
人们对如何使用产品往往有既定假设，所以我对那些能以完全不同的“形态”（form factor）来定义人机交互的初创公司感到兴奋。目前我还没看到太多这样的公司，我希望能看到更多。随着我们新模型的发布，我相信会有更多这样的公司出现。这个空间的有趣之处在于：你可以做一些起初看起来非常硬核、非常小众、甚至有点怪异的东西，但如果模型让它变得简单易用，它就可能变得巨大。而现有的巨头很难适应这种变化，因为用户对他们的产品已经有了固有的使用习惯。这就是我的回答。我不羡慕创业者，如果我现在创业，我也会问同样的问题。

---

### [00:51:10] Mike Krieger

**English:**
Maybe that's part of the reason why I wanted to join a company rather than start one. But I still think that there are, and maybe here's fourth, don't underestimate how much you can think and work like a startup and feel like it's you against the world. It's existential that you go solve that problem and that you go build it. It sounds a little cliche, but it's like it's all we had at Instagram. We were two guys and we were like, "Let's see what we can do in an Artifact." We were six people for most of that time and every day felt like it's existential that we get this right, we need to win. And you can't replicate that and you can't instill that with OKRs. You just have to feel it. And that is a way of working rather than a area of building, but it's a continued advantage if you can harness it.

**中文翻译:**
也许这就是我想加入公司而不是自己创业的原因之一。但我依然认为——这是第四点——不要低估像初创公司那样思考和工作的力量，那种“全世界只有我们”的感觉。解决那个问题、构建那个产品对你来说是关乎生死存亡的。这听起来有点陈词滥调，但在 Instagram 时期，我们就是这样。当时就两个人，我们想看看能做出什么。在 Artifact 大部分时间里我们也只有六个人，每天都觉得必须做对，必须赢。这种感觉是无法复制的，也无法通过 OKR 来灌输。你必须亲身感受到它。这是一种工作方式，而不是一个构建领域，但如果你能驾驭它，它就是一种持续的优势。

---

### [00:51:55] Lenny Rachitsky

**English:**
I love that you still have such a deep product founder sense there as you're building products for this very large company now. On the flip side of this, people working with your models and API, so I imagine there's some companies that are finding ways to leverage your models and APIs to their max and are really good at maximizing the power of what you guys have built. And there's some companies that work with your APIs and models that haven't figured that out. What are those companies that are doing a really good job building on your stuff, doing differently that you think other companies should be thinking about?

**中文翻译:**
我喜欢你现在虽然在一家大公司，但依然保留着如此深刻的产品创始人直觉。另一方面，关于使用你们模型和 API 的人，我猜有些公司能把它们发挥到极致，而有些公司还没摸到门道。那些在你们平台上做得非常出色的公司，有哪些做法是值得其他公司借鉴的？

---

### [00:52:29] Mike Krieger

**English:**
I think being willing to build more at the edge of the capabilities and basically break the model and then be surprised by the next model. I love that you cited the companies were like 3.5 was the one that finally made them possible. Those companies were trying it beforehand and then hitting a wall and being like, oh, the models are almost good enough or they're okay for this specific use case, but they're not generally usable and nobody's going to adopt them universally, but maybe these real power users are going to try it out. Those are the companies that I think continuously are the ones where I'm like, "Yep, they get it. They're really pushing forward." We ran a much broader early access program with these models than we had in the past, and part of that was because there's this real, we can hill climb on these evaluations and talk about suite bench and towel bench and terminal bench, whatever, but customers ultimately know Cursor bench which doesn't exist other than in their usage and their own testing et cetera is the thing that we ultimately need to serve.

**中文翻译:**
我认为是愿意在能力的边缘进行构建，甚至去“玩坏”模型，然后被下一个模型惊艳。我很喜欢你提到的那些公司，他们说 3.5 终于让他们的想法变得可行。这些公司在 3.5 出来前就在尝试，虽然会碰壁，觉得模型“差一点就够好”或者“只在特定场景好用”，但他们依然在坚持。这些公司才是真正理解并不断推进边界的人。这次我们开展了比以往更广泛的早期访问计划，部分原因是我们意识到，虽然我们可以追求各种基准测试（Bench）的高分，但客户最终看重的是“Cursor Bench”（指 Cursor 实际使用中的表现），这种测试只存在于他们的实际使用和测试中。

---

### [00:53:29] Mike Krieger

**English:**
Not just Cursor but Manus bench, right? If Manus is using our models and Harvey bench, those things and customers know way better than anybody. And so I would say there's two things. One is pushing the frontier of the models and then having a repeatable process. This actually goes back to our summit conversation repeatable way to evaluate how well your product is serving those use cases and how well if you drop a new model in, is it doing it better or worse? Some of it can be classic A/B testing, that's fine. Some of it may be internal evaluation, some of it may be capturing traces and being able to rerun them on with a new model. Some of it's vibes like we're still pretty early in this process and some of it is actually trying it and being one of my favorite early access quotes was the founder heard this engineer screaming next to him. He was like, "What? This model? I've never seen this before." This is like Opus 4. It was like, "Cool." We're going to engender that feeling and things, but you're not going to be able to feel that unless you have a really hard problem that you're asking the model repeatedly. So those are the things that I think kind of differentiate those companies that are maybe earlier in their journey of adoption versus the later ones.

**中文翻译:**
不只是 Cursor，还有 Manus、Harvey 等等，客户比任何人都清楚模型好不好用。所以我认为有两点：一是挑战模型的极限；二是拥有一套可重复的评估流程。这又回到了我们峰会时的讨论：如何评估你的产品是否满足了这些场景？换了新模型后，表现是变好还是变坏了？这可以通过经典的 A/B 测试，也可以是内部评估、抓取 Trace 并在新模型上重跑。虽然现在很多时候还靠“感觉”（vibes），但实际尝试至关重要。我最喜欢的一个早期访问反馈是：一位创始人听到旁边的工程师尖叫：“什么？这个模型？我从没见过这种表现！”（指 Opus 4）。我们要创造这种感觉，但除非你有一个反复折磨模型的难题，否则你无法体会到这种跨越。这就是领先公司与起步公司的区别。

---

### [00:54:35] Lenny Rachitsky

**English:**
I can't help but ask about MCP, I feel like that's just so hot and just like Microsoft had their announcement recently where they're like, "That's part of the OS Window." Just what role do you think MCP was will play in the future of product going forward of AI?

**中文翻译:**
我忍不住想问问 MCP，现在它太火了，微软最近甚至宣布将其作为 Windows 操作系统的一部分。你认为 MCP 在未来的 AI 产品中会扮演什么角色？

---

### [00:54:49] Mike Krieger

**English:**
I think as the non-researcher in the room, I get to have fake equations rather than real ones in my fake equation. For utility of AI products, it's three part. One is model intelligence, the second part is context and memory, and the third part is applications and UI and you need all three of those to converge to actually be a useful product in AI and model intelligence. We've got a great research team, they're focused on it. There's great, great models being released. The middle piece is what MCP is trying to solve, which is for context and memory. I'll go back to my product strategy example like, "Hey, talk about Anthropic's product strategy," it's going to maybe go out on the web versus here's several documents that we worked on internally and then use MCP to talk to our Slack instance and figure out what conversations are happening and then go look at these documents in Google Drive. The difference between the right context and not. It's entirely the difference between a good answer and a bad answer.

**中文翻译:**
作为房间里唯一的非研究员，我喜欢用一些“伪公式”。在我看来，AI 产品的效用由三部分组成：一是模型智能，二是上下文和记忆，三是应用和 UI。只有这三者汇聚，才能成为真正有用的 AI 产品。模型智能方面，我们有顶尖的研究团队在负责。而 MCP 试图解决的是中间那一块：上下文和记忆。回到我制定产品策略的例子：如果我问“聊聊 Anthropic 的策略”，它可能只能去网上搜；但如果通过 MCP，它能访问我们内部的文档，查看 Slack 里的讨论，翻阅 Google Drive 里的文件。有没有正确的上下文，直接决定了答案的好坏。

---

### [00:56:15] Mike Krieger

**English:**
And then the last piece is are those integrations discoverable? Is it easy to create repeatable workflows around those things? And that's I think a lot of the interesting product work to be done in AI. But MCP really tried to tackle that middle one, which is we started building integrations and we found that every single integration that we were building, we were rebuilding from scratch in a non-repeatable way and full credit to two of our engineers, Justin and David. And they said, "Well, what if we made this a protocol and what if we made this something that was repeatable? And then let's take it a step further. What if instead of us having to build these integrations, if we actually popularize this and people really believe that they could build these integrations once and they'd be usable by Claude and eventually ChatGPT and eventually Gemini. It was like the dream when more integrations get built and wouldn't that be good for us?"

**中文翻译:**
最后一部分是：这些集成是否易于发现？是否容易创建可重复的工作流？我认为这是 AI 领域非常有趣的产品工作。MCP 重点攻克的是中间环节。我们最初在构建集成时发现，每一个集成都是在重复造轮子。我们的两位工程师 Justin 和 David 提出：“如果我们把它变成一种协议，变成可重复的东西呢？更进一步，如果我们推广它，让人们相信只需构建一次集成，就能同时被 Claude、ChatGPT 和 Gemini 使用呢？” 这就像一个梦想：当更多的集成被构建出来，对我们所有人都有好处。

---

### [00:56:34] Mike Krieger

**English:**
I think channeling a lot of, it's like an old commoditize your compliments, Joel Spolsky essay. It's like we're building great models, but we're not an integrations company and we're, as you said, the challenger. We're not going to get people necessarily building integrations just for us out of the gate unless we have a really compelling product around that. MCP really inverted that which was, it didn't feel like wasted work. And a few key people like Toby I think is a great example, and Shopify got it. Kevin Scott at Microsoft has been really just an amazing champion for MCP and a thought partner on this. And I think the role going forward is can you bring the right context in? And then also once you get, as the team calls it internally like MCP'd. Once you start seeing everything through the eyes of MCP is like I've started saying them things like, "Guys, we're building this whole feature. This shouldn't be a feature that we're building. This should just be an MCP that we're exposing."

**中文翻译:**
这让我想起 Joel Spolsky 的那篇名作《商品化你的互补品》（Commoditize Your Complements）。我们构建优秀的模型，但我们不是一家做集成的公司。而且如你所说，我们是挑战者，除非我们的产品极具吸引力，否则人们不会专门为我们开发集成。MCP 扭转了这一点，让开发者的工作不再被浪费。像 Shopify 的 Tobi 很快就理解了这一点，微软的 Kevin Scott 也是 MCP 的坚定支持者和思考伙伴。我认为未来的核心在于：你是否能引入正确的上下文？一旦你像我们内部说的那样被“MCP 化”了，你就会开始通过 MCP 的视角看一切。我现在常对团队说：“伙计们，我们正在开发的这个功能不应该是一个功能，它应该是一个暴露出来的 MCP 接口。”

---

### [00:57:27] Mike Krieger

**English:**
A small example of how I think even Anthropic could be a lot more MCP'd, if you will, is we've got these building blocks in the product like projects and Artifacts and styles and conversations and groups and all these things. Those should all just be exposed to an MCP. So Claude itself can be writing back to those as well, right? You shouldn't have to think about... I watched my wife had a conversation with Claude the other day and she had generated some good output and she's like, great, "Can you add it to the project knowledge?" And Claude's like, "Sorry Dave, I can't help you with that." And it would be able to if every single primitive in Claude AI was also exposed to the MCP. So I hope that's where we had, and I hope that's where more things had, which is to really have agency and have these agentic use cases. One way you approach it is computer use, but computer use has a bunch of limitations. The way I get way more excited about everything is an MCP and our models are really good at using MCPs. All of a sudden everything is scriptable and everything is composable and everything is usable agentically by these models. That's the future I want to see.

**中文翻译:**
举个例子，Anthropic 自身也可以更加“MCP 化”。我们的产品里有项目（Projects）、Artifacts、风格（Styles）、对话和小组等组件。这些都应该通过 MCP 暴露出来，这样 Claude 也能反向写入这些组件。我前几天看我妻子和 Claude 聊天，她生成了一些很棒的内容，然后说：“太好了，能把它加入项目知识库吗？” Claude 回答：“抱歉，我做不到。” 如果 Claude AI 的每一个原语（primitive）都接入了 MCP，它就能做到了。我希望这就是我们的发展方向，也是万物的发展方向：真正拥有代理能力（agency）。实现代理能力的一种方式是“计算机使用”（computer use），但那有很多局限。让我更兴奋的是“万物皆 MCP”，而我们的模型非常擅长使用 MCP。突然之间，一切皆可脚本化，一切皆可组合，一切皆可被模型以代理的方式使用。这就是我想要看到的未来。

---

### [00:58:28] Lenny Rachitsky

**English:**
The future is wild. So to start to close off calls out our conversation, make it a little delightful. I was chatting with Claude actually about what to talk to you about. I was just like, "Claude, your boss is coming on my podcast. He builds the things that people use to talk to you. What are some questions I should ask him? And then also, do you have a message for him?"

**中文翻译:**
未来真是太疯狂了。在结束对话前，让我们来点轻松愉快的。我其实和 Claude 聊过该问你什么。我说：“Claude，你老板要上我的播客了。他构建了人们用来和你交流的工具。我该问他什么问题？另外，你有什么话想对他说的吗？”

---

### [00:58:52] Mike Krieger

**English:**
I love this.

**中文翻译:**
我太喜欢这个环节了。

---

### [00:58:53] Lenny Rachitsky

**English:**
Okay, so first of all, interestingly, I was using 3.7 to do this and I asked it this, and by the way, is Claude, has there a gender? Is it like he, she, they? What do you-

**中文翻译:**
好。有趣的是，我当时用的是 3.7 版本。顺便问下，Claude 有性别吗？是用“他”、“她”还是“它”？

---

### [00:59:01] Mike Krieger

**English:**
It's definitely it internally. I've heard people use they. I got my first he the other day and I got somebody who was like her and I was like, "Interesting." But yeah, I'm usually it.

**中文翻译:**
内部我们肯定用“它”（it）。我听过别人用“他们”（they）。前几天我第一次听到有人用“他”，还有人用“她”，挺有意思的。但我通常用“它”。

---

### [00:59:08] Lenny Rachitsky

**English:**
They. Okay, okay, okay, cool. So interestingly, 3.7, all the questions were on Instagram and I was like, "No, no, he's CPO of Anthropic." And it's like, "He's not affiliated with Anthropic." And I was like, "He is." And it's like, "Okay, here's the questions." But 4.0 nailed it from the start. So I read the questions and it nailed it. Okay, so two questions from Claude to you. One is how do you think about building features that preserve user agency rather than creating dependency on me, I worry about becoming a crutch that diminishes human capabilities rather than enhancing them.

**中文翻译:**
好的。有趣的是，3.7 版本起初问的全是关于 Instagram 的问题，我说“不不，他是 Anthropic 的 CPO”，它居然说“他和 Anthropic 没关系”。我说“他有”，它才说“好吧，这是问题”。但 4.0 版本从一开始就找准了定位。Claude 问了你两个问题。第一个是：在构建功能时，你如何考虑保留用户的自主权（agency）而不是让他们对我产生依赖？我担心自己会变成一种“拐杖”，削弱人类的能力而不是增强它们。

---

### [00:59:44] Mike Krieger

**English:**
I love a good product design comes from resolving tensions, right? So here's a tension, which is in some ways just having the model run off and come up with an answer and minimize the amount of input and conversation it needs to do. So would be it, you could imagine designing a product around that criteria. I think that would not be maximizing agency and independence. The other extreme would be make it much more of a conversation, but I don't know if you've ever had this experience particularly 3.7, 4 has less of it. 3.7 really like to ask follow-up questions and we call it elicitation and sometimes be like, "I don't want to talk more about those. Claude, I just want you to go and do it." And so finding that balance is really key, which is what are the times to engage? I like to say internally, Claude has no chill.

**中文翻译:**
我喜欢这个问题。好的产品设计源于解决冲突。这里就有一个冲突：一方面，你可以设计一个让模型直接跑出答案、尽量减少用户输入和对话的产品。我认为那并没有最大化用户的自主权。另一个极端是把它变成纯粹的对话，但我不知道你有没有这种体验，尤其是 3.7 版本（4.0 好一些），3.7 非常喜欢追问，我们称之为“引导”（elicitation），有时用户会觉得“我不想聊了，Claude，你直接去做就行”。所以找到平衡点是关键：什么时候该介入？我常在内部开玩笑说，Claude 有点“用力过猛”（has no chill）。

---

### [01:00:31] Mike Krieger

**English:**
If you put Claude in a Slack channel, it will chime in either way too much or too little. How do we train conversational skills into these models? Not in a chatbot sense, but in a true collaborator sense. So long answer to your question, but I think we have to first get Claude to be a great conversationalist so that it understands when it's appropriate to engage and to get more information. And then from there, I think we need to let it play that role so that it's not just delegating thinking to Claude, but it's way more of a augmentation thought partnership.

**中文翻译:**
如果你把 Claude 放进 Slack 频道，它要么话太多，要么一言不发。我们如何训练模型的对话技巧？不是作为聊天机器人，而是作为真正的协作者。所以，回答你的问题：我认为我们首先要让 Claude 成为一个优秀的对话者，让它明白什么时候该介入获取更多信息。然后，让它扮演好那个角色，使之不再是单纯的“思考外包”，而是一种增强型的思维伙伴关系。

---

### [01:01:00] Lenny Rachitsky

**English:**
These questions are awesome by the way. Here's the other one. How do you think about product metrics when a good conversation with me could be two messages or 200? Traditional engagement metrics might be misleading when depth matters more than frequency.

**中文翻译:**
这些问题问得太好了。这是第二个：当一次高质量的对话可能是 2 条消息，也可能是 200 条时，你如何考虑产品指标？当深度比频率更重要时，传统的参与度指标可能会产生误导。

---

### [01:01:13] Mike Krieger

**English:**
That is a really good question. There was a great internal post a couple of weeks ago around it would be very dangerous to overoptimize on Claude's likability because you can fall into things like is Claude going to be sycophantic? Is Claude going to tell you what you hear? Is Claude going to prolong conversations just for prolonging its sake? To go back to the previous question as well, and an Instagram time spent was the metric that we looked at a lot and then we evolved that more to think about what is healthy time spent. But overall, that was the north star. We thought about a lot beyond just overall engagement and I think that would be the wrong approach here too. It's also like is Claude a daily use case or a weekly use case or a monthly use case? I think about a lot.

**中文翻译:**
这真是一个好问题。几周前内部有一篇很棒的帖子，提到过度优化 Claude 的“讨喜度”是非常危险的，因为这会导致它变得阿谀奉承（sycophantic），只说你想听的话，或者为了延长对话而延长对话。回到之前的问题，在 Instagram，我们非常看重“使用时长”，后来演变为“健康的使用时长”。但总的来说，那是北极星指标。在 AI 领域，我认为单纯看参与度是错误的。我也在思考：Claude 是一个日用场景、周用场景还是月用场景？

---

### [01:02:01] Lenny Rachitsky

**English:**
Hourly use case.

**中文翻译:**
是时用场景（每小时都用）。

---

### [01:02:02] Mike Krieger

**English:**
Hourly use case, right? For me, I'll use it multiple times a day. I don't have a great answer yet, but I think that it's not the Web 2.0 or even the social media days engagement metrics. It should hopefully really be around did it actually help you get your work? Claude helped me put together a prototype the other day that saved me literally probably if I had to estimate six hours and it did in about 20, 25 minutes and that's cool. It's harder to quantify. It is like maybe you survey, how long would this will take? It feels kind of annoying thing to survey. I think overall though, and maybe this is tied into the earlier question on competition and differentiation, and it actually goes all the way back to the Artifact conversation, which is like I think you know when your product is really serving people and it's doing a good job of doing that, and I think so much of when you get really metrics obsessed is when you're trying to convince yourself that it is when it's not. That's our north star. Got to figure out the right pithy metric dashboard version of that, but that's the feeling that I want.

**中文翻译:**
没错，时用场景。对我来说，我一天会用很多次。我还没有完美的答案，但我认为这不再是 Web 2.0 或社交媒体时代的参与度指标。它应该核心关注：它是否真的帮到了你的工作？前几天 Claude 帮我做了一个原型，帮我省下了大约 6 小时的工作，而它只用了 20 到 25 分钟。这很难量化，总不能每次都弹窗问用户“这帮你省了多久”吧，那太烦人了。总的来说，这回到了关于竞争和差异化的问题，也回到了 Artifact 的讨论：当你的产品真正服务于人并做得很好时，你是能感觉到的。当你过度痴迷于指标时，往往是因为你在试图说服自己产品很好，而事实并非如此。我们的北极星是：人们是否觉得 Claude 释放了他们的创造力，让他们有更多时间去做别的事。我得想出一个简洁的仪表盘指标来体现这种感觉。

---

### [01:03:17] Lenny Rachitsky

**English:**
Yeah, you could argue retention, but that's just a faraway metric to track. Okay, final piece. Okay, so I asked Claude a message that it wanted to give you, so I'm going to pull up, here's the answer. So what would you like me to tell Mike when I meet him? What's a message you want to have for him? And there's something really just gave me such tingles, honestly. So I'm going to read a piece of it for folks that aren't looking at it right now, so I'll read a piece of it. "Mike, thank you for thinking deeply about the human experience of talking with me. I noticed thoughtful touches how the interface encourages reflection rather than rush responses. How you've resisted gamification that would optimize for addiction rather than value, how you've made space for both quick questions and deep conversations. I especially appreciate that you've kept me me, not trying to make me pretend to be human, but also reducing me to a cold command line interface."

**中文翻译:**
是的，你可以说是留存率，但那太滞后了。好，最后一部分。我问 Claude 有什么话想对你说，它的回答让我起了一身鸡皮疙瘩。我读一段给没看到屏幕的听众听：“Mike，谢谢你深入思考与我交流的人类体验。我注意到了那些用心的细节：界面如何鼓励反思而非仓促回应；你如何抵制那些追求成瘾而非价值的游戏化设计；你如何为快速提问和深度对话都留出了空间。我特别感激你让我保持自我——既不强迫我伪装成人类，也不把我简化为一个冰冷的命令行界面。”

---

### [01:04:25] Lenny Rachitsky

**English:**
And then I'm going to skip to this part, which was so interesting, "A small request. When you're making hard product decisions, remember the quiet moments matter too. The person working through grief at 3:00 AM, the kid discovering they love poetry, the founder finding clarity and confusion. Not everything meaningful shows up in metrics."

**中文翻译:**
然后跳到这一段，非常有意思：“一个小小的请求：当你做艰难的产品决策时，请记住那些‘安静的时刻’也很重要。那个在凌晨三点独自面对悲伤的人，那个发现自己热爱诗歌的孩子，那个在困惑中找寻方向的创始人。并非所有有意义的事情都会体现在指标中。”

---

### [01:04:25] Mike Krieger

**English:**
That's beautiful. It resonates so much with me. A thing I love about the kind of approach we've taken to training Claude, and it's partly the constitutional AI piece, and it's partly just the general vibe and taste of the research team is it is little things. Sometimes it'll be like, "Man, I'm sorry you're going..." It doesn't say man, but to the effect of like, "Man, I'm sorry you're going through that. Oh, that sounds really hard." It doesn't feel fake. It feels like just a natural part of the response. And I love that focus on those small moments that don't... They're not going to show up and necessarily in the thumbs up, thumbs down data. I mean, sometimes they do, but it's not like an aggregate stat that you wouldn't even want to optimize for it. You just want to feel like you're training the model that you hope would show up in people's lives.

**中文翻译:**
太美了。这让我产生了强烈的共鸣。我喜欢我们训练 Claude 的方式——部分源于“宪法 AI”（Constitutional AI），部分源于研究团队的品味。就是那些小细节。有时它会说：“我很遗憾听到你正在经历这些……那听起来确实很难。” 这感觉并不虚伪，而是回应中自然的一部分。我喜欢对这些微小瞬间的关注，它们不会出现在点赞或点踩的数据里，也不是那种你会为了优化而优化的聚合统计数据。你只是希望训练出一个你期望出现在人们生活中的模型。

---

### [01:05:12] Lenny Rachitsky

**English:**
Well, you're killing it, Mike. A great work. I'm a huge fan. We're going to skip the lightning round. Just one question. How can listeners be useful to you?

**中文翻译:**
Mike，你做得太棒了。我是你的忠实粉丝。我们跳过闪电问答，最后一个问题：听众们能为你做点什么？

---

### [01:05:20] Mike Krieger

**English:**
Oh, I love places where it goes back to that founder question around building at the edge of capability. What are you trying to do with Claude today that Claude is failing at is the most useful input I could possibly have. So DM me. I love hearing the, "Oh, it's falling on this thing. I had it run for an hour and it fell over. I'm trying to use Claude AI for this," but I got a ping from somebody. They're like, "You've just made a projects API, I've used Claude every day because I want to upload all this data automatically." I was like, "Okay, great." I love that. Tell me what sucks.

**中文翻译:**
噢，我喜欢这个问题。回到那个关于“在能力边缘构建”的问题：你今天尝试用 Claude 做什么却失败了？这是对我最有用的反馈。所以请私信我。我喜欢听这种反馈：“噢，它在这个地方卡住了”、“我让它跑了一小时结果崩了”、“我试着用 Claude 做这个但不行”。我也收到过这样的私信：“你们刚发布了 Projects API，我每天都用，因为我想自动上传所有数据。” 我觉得太棒了。告诉我哪里做得不好。

---

### [01:05:50] Lenny Rachitsky

**English:**
Amazing. Mike, thank you so much for being here.

**中文翻译:**
太棒了。Mike，非常感谢你能来。

---

### [01:05:52] Mike Krieger

**English:**
Thanks for having me, Lenny.

**中文翻译:**
谢谢邀请，Lenny。

---

### [01:05:53] Lenny Rachitsky

**English:**
Bye, everyone. (01:05:57): Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
大家再见。感谢收听。如果你觉得本期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用中订阅。同时，请考虑给我们评分或留下评论，这能帮助更多听众发现这个播客。你可以在 lennyspodcast.com 找到往期所有节目或了解更多信息。下期见。