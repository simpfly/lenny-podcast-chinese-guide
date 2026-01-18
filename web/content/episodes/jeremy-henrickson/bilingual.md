# Jeremy Henrickson - 双语对照

This is the complete bilingual (English-Chinese) transcript for Lenny's Podcast featuring Jeremy Henrickson.

---

### (00:00:00) Jeremy Henrickson

**English:**
It's very, very tempting to float up here as a leader and say, "Hey, you take that hill over there. You guys do this over here." When in fact, where you really learn where the challenges are, or the problems or the successes is by just being there with the people in the trenches on one of the things, whichever one seems hardest or most complicated. And so I try to do that as often as I can, and I found that I always learn a lot by going through that detailed exercise.

**中文翻译:**
作为一名领导者，很容易产生一种诱惑，就是让自己“浮”在上面发号施令：“嘿，你去拿下那座山头。你们在那边负责这个。”但事实上，你真正了解挑战、问题或成功之处的方法，是亲自深入第一线（in the trenches），参与到那些看起来最困难或最复杂的事情中去。因此，我尽可能频繁地这样做，我发现通过这种细节化的实践，我总能学到很多东西。

---

### (00:00:32) Lenny

**English:**
Welcome to Lenny's Podcast, for interview world-class product leaders and growth experts, to learn from their hard-won experiences building and growing today's most successful products. Today my guest is Jeremy Henrickson. Jeremy is senior vice president of product at Rippling, where he leads the product and design teams. Previously, he was chief product officer at Coinbase where he oversaw 10 x growth of the product and engineering organizations and helped scale Coinbase during one of the craziest times in the crypto markets. In our conversation, Jeremy shares his lessons about maintaining velocity at scale, creating a culture of fast decision-making, the importance of product leaders going deep on a problem, and becoming world experts at their domain. What to look for in product managers you're interviewing, why relying on frameworks can be so detrimental to your success, why you may want to avoid MVPs and instead designed for the most complex use cases first, and tons more. Enjoy this episode with Jeremy Henrickson after a short word from our sponsors.

**中文翻译:**
欢迎来到 Lenny 的播客。在这里，我们采访世界级的产品领导者和增长专家，学习他们在构建和发展当今最成功产品过程中辛苦换来的宝贵经验。今天的嘉宾是 Jeremy Henrickson。Jeremy 是 Rippling 的产品高级副总裁，负责领导产品和设计团队。此前，他曾担任 Coinbase 的首席产品官，在那里他监督了产品和工程团队 10 倍的增长，并帮助 Coinbase 在加密货币市场最疯狂的时期之一实现了规模化。在我们的对话中，Jeremy 分享了关于在规模化过程中保持速度、建立快速决策文化、产品领导者深入研究问题的重要性，以及如何成为所在领域的全球专家。此外，他还谈到了面试产品经理时应看重什么，为什么依赖框架可能对成功有害，为什么你可能想要避免 MVP（最小可行性产品）转而先为最复杂的用例进行设计，以及更多精彩内容。在听完赞助商的简短介绍后，请欣赏本期与 Jeremy Henrickson 的对话。

---

### (00:01:27) Lenny (Sponsor Break)

**English:**
Today's episode is brought to you by Miro, an online collaborative whiteboard that's designed specifically for teams like yours. The best way to see what Miro's all about and how we can help your team collaborate better is not to listen to me talk about it, but to go check it out for yourself, go to miro.com/lenny. With the help of the Miro team, I created a super cool Miro board with two of my own favorite templates, my one-pager template and my managing up template that you can plug and play and start using immediately with your team. I've also embedded a handful of my favorite templates that other people have published in the Miro verse. When you get to the board, you can also leave suggestions for the podcast, answer a question that I have for you, and generally just play around to get a sense of how it all works. Miro is a killer tool for brainstorming with your team, laying out your strategy, sharing user research findings, capturing ideas, giving feedback on wireframes, and generally just collaborating with your colleagues. I actually used Miro to collaborate with the Miro team on creating my own board, and it was super fun and super easy. Go check it out at miro.com/lenny. That's miro.com/lenny.

**中文翻译:**
本期节目由 Miro 赞助。Miro 是一款专为像你们这样的团队设计的在线协作白板。了解 Miro 的功能以及它如何帮助你的团队更好协作的最佳方式，不是听我在这里说，而是亲自去体验一下，请访问 miro.com/lenny。在 Miro 团队的帮助下，我创建了一个非常酷的 Miro 画板，里面包含了我最喜欢的两个模板：我的“一页纸（one-pager）”模板和我的“向上管理”模板，你可以即插即用，立即与你的团队开始使用。我还嵌入了一些其他人发布在 Miroverse 中的我最喜欢的模板。当你进入画板时，你还可以为播客留下建议，回答我为你准备的问题，或者只是随便逛逛，感受一下它是如何运作的。Miro 是一个非常棒的工具，适用于团队头脑风暴、制定战略、分享用户研究结果、捕捉创意、对线框图提供反馈，以及与同事进行日常协作。实际上，我就是用 Miro 与 Miro 团队协作创建了我自己的画板，过程非常有趣且简单。快去 miro.com/lenny 看看吧。

---

### (00:02:11) Lenny (Sponsor Break Continued)

**English:**
This episode is brought to you by Mixpanel. Get deep insights into what your users are doing at every stage of the funnel at a fair price that scales as you grow. Mixpanel gives you quick answers about your users from awareness to acquisition through retention, and by capturing website activity, add data, and multi-touch attribution, right in Mixpanel, you can improve every aspect of the full user funnel. Powered by first-party behavioral data instead of third party cookies, Mixpanel is built to be more powerful and easier to use than Google Analytics. Explore plans for teams of every size and see what Mixpanel can do for you at mixpanel.com/friends/lenny. And while you're at it, they're also hiring. So check it out at mixpanel.com/friends/lenny. Jeremy, welcome to the podcast.

**中文翻译:**
本期节目由 Mixpanel 赞助。以随着业务增长而扩展的公平价格，深入洞察用户在漏斗每个阶段的行为。Mixpanel 为你提供关于用户的快速答案，从认知、获取到留存。通过在 Mixpanel 中直接捕捉网站活动、广告数据和多触点归因，你可以改进完整用户漏斗的各个方面。Mixpanel 由第一方行为数据驱动，而非第三方 Cookie，其设计比 Google Analytics 更强大且更易于使用。访问 mixpanel.com/friends/lenny 探索适合各种规模团队的方案，看看 Mixpanel 能为你做些什么。顺便提一下，他们也在招聘，请查看 mixpanel.com/friends/lenny。Jeremy，欢迎来到播客。

---

### (00:03:30) Jeremy Henrickson

**English:**
Thank you so much for having me. I'm excited to be here.

**中文翻译:**
非常感谢邀请我。很高兴能来到这里。

---

### (00:03:32) Lenny

**English:**
So I've heard nothing but amazing things about you and I'm excited to learn from what you've learned from your experience at Rippling, at Coinbase, and all of the products and teams that you've built. And so thank you again for being here.

**中文翻译:**
我听到的关于你的评价全都是赞不绝口，我很期待能从你在 Rippling、Coinbase 的经历以及你所建立的所有产品和团队中学到东西。再次感谢你的到来。

---

### (00:03:45) Jeremy Henrickson

**English:**
Yeah, super happy to be here.

**中文翻译:**
是的，非常开心能来这里。

---

### (00:03:46) Lenny

**English:**
So I want to start with your time at Coinbase where you were chief product officer and you were chief product officer during maybe the craziest time in the crypto markets. It was I think 2016, 2018 when I was looking at the Bitcoin prices and it was like it went from a $1000 to $20,000 I think in a matter of months. So I'm curious, what was that experience like, and in particular, what was like leading a product team through that experience?

**中文翻译:**
我想从你在 Coinbase 担任首席产品官的那段时期聊起。你担任 CPO 的时候，可能是加密货币市场最疯狂的时期。我记得是在 2016 年到 2018 年间，我看比特币价格的时候，它在几个月内就从 1000 美元涨到了 20,000 美元。所以我很好奇，那段经历是什么样的？特别是，在那样的环境下领导一个产品团队是什么感觉？

---

### (00:04:11) Jeremy Henrickson

**English:**
The strongest memories for me are during 2017 where crypto, which had kind of been at its nadir in early 2016 and slowly started climbing out, just kind of took off and became a real thing in the public consciousness. And Coinbase, which at the time had an exchange just like on-ramp and off-ramp from fiat to crypto and back experienced over the course of 2017 40 x growth in usage.

**中文翻译:**
我最深刻的记忆是在 2017 年。加密货币在 2016 年初还处于低谷（nadir），然后慢慢开始回升，接着就彻底爆发了，进入了公众视野。Coinbase 当时拥有一个交易所，提供法币到加密货币的出入金通道，在 2017 年这一年里，我们的使用量增长了 40 倍。

---

### (00:04:39) Lenny

**English:**
That's like a dream come true for a lot of people.

**中文翻译:**
这对很多人来说就像梦想成真一样。

---

### (00:04:42) Jeremy Henrickson

**English:**
No, I mean it was both a dream and a nightmare and I was incredibly lucky to be working on it with a team of people that I could really trust and could stand shoulder-to-shoulder within the trenches. And it was a lot of learning about how you can rapidly scale systems over time and people like to trade crypto on Saturday mornings, so a lot of Saturday mornings just some new thing would break on the edges of the system and we need to get in there and work on it. And so it was just a lot of really incredible lessons about who you choose to work with and focus and making sure you have the right people in the room at the right time.

**中文翻译:**
不，我的意思是，它既是梦想也是噩梦。我感到非常幸运，能和一群我真正信任、可以并肩作战的人一起工作。那段时间学到了很多关于如何随时间快速扩展系统的知识。人们喜欢在周六早上交易加密货币，所以很多个周六早上，系统的边缘总会出点新状况，我们需要立刻投入工作。所以，关于选择合作伙伴、保持专注以及确保在正确的时间让正确的人出现在现场，那真的是一段非常不可思议的教训。

---

### (00:05:25) Lenny

**English:**
Okay. So let's actually unpack a couple of those. So focus is really interesting and something people always talk about, but hard to actually do. I guess how did you keep the team focused? I imagine just everyone's getting rich all over the place in crypto. Things are breaking all the time, like how did you maintain focus on your team?

**中文翻译:**
好，让我们来拆解一下其中的几点。专注（Focus）非常有趣，人们总是在谈论它，但实际做起来很难。我想知道你是如何让团队保持专注的？我能想象当时加密货币圈到处都是一夜暴富的人，系统又一直在出故障，你是如何维持团队专注度的？

---

### (00:05:43) Jeremy Henrickson

**English:**
Well, the first thing is you don't talk about people getting rich. It's a very technical, you talk about like its customers, it's their money, and number one, it had to be secure. So there's a guy named Philip Barton, a friend of mine now, and he is just this amazing security leader at Coinbase, and he was able to always put these decisions that we were making extremely quickly in context and say, "Look, these are the kinds of decisions we can make and still have it be secure no matter how fast we need to move." And so security was always the number one thing. And then the second thing is focusing on both the kind of immediate nature of the issue. Hey, site is down or whatever, and resolving that, but also trying to set those in a context of where we need to go over the next six months. What are we actually shooting for? What do we believe the volumes are going to be? What's it going to take to have everything from a user experience to the deep back end of the product that what would actually work for them?

**中文翻译:**
首先，你不能谈论人们变富这件事。这是一个非常技术性的环境，你要谈论的是客户，是他们的钱，而首要任务是必须保证安全。Coinbase 有个叫 Philip Barton 的人，现在是我的朋友，他是位了不起的安全负责人。他总是能把我们那些极其快速的决策放在背景中审视，并说：“看，无论我们需要移动多快，这些是我们可以在保证安全的前提下做出的决策。”所以安全永远是第一位的。第二点是，既要关注问题的紧迫性（比如网站挂了之类的），并解决它，同时也要尝试将这些问题放在未来六个月的发展背景中。我们的目标到底是什么？我们认为交易量会达到多少？从用户体验到产品的深度后端，到底需要什么才能真正满足他们的需求？

---

### (00:06:41) Lenny

**English:**
What was maybe the biggest challenge as a product leader trying to keep people focused and everything on the rails as things were going 40 x?

**中文翻译:**
当业务增长 40 倍时，作为一名产品领导者，在试图让大家保持专注并让一切步入正轨的过程中，最大的挑战是什么？

---

### (00:06:50) Jeremy Henrickson

**English:**
I think the biggest challenge was that in crypto there's just so much uncertainty in general, simple questions like, is Ethereum going to be a thing, are the subject of debate. And no one actually at the time had an answer to that question. Lots of really strong opinions and so you have to be able to have those debates because lots is going on, but then you have to be able to come out of those conversations with a clear kind of company point of view that you're all shooting toward. And while there may still be differing points of views and debates that happen on the margins, you go full speed toward this answer until you decide to go full speed toward a different answer. And I thought we were pretty successful at that at Coinbase and it wasn't always easy.

**中文翻译:**
我认为最大的挑战在于加密货币领域普遍存在巨大的不确定性。像“以太坊会成功吗”这样简单的问题都是争论的焦点。当时实际上没有人能给出答案。有很多非常强烈的观点，所以你必须允许这些辩论发生，因为发生的事情太多了。但随后，你必须能够从这些对话中得出一个清晰的公司观点，作为大家共同努力的目标。虽然边缘地带可能仍有不同观点和辩论，但你会全速朝着这个答案前进，直到你决定全速转向另一个答案。我觉得我们在 Coinbase 做得相当成功，虽然这并不总是那么容易。

---

### (00:07:32) Lenny

**English:**
Maybe just a last question there. Living through a time like that, a lot of people are going through these periods of just intense work and it's like, holy moly, this isn't crazy stressful working, like incredibly long hours, but then you look back at those times, and end up being some most important meaningful periods of your career. I guess one is that, is that your experience too? And then two, I guess is there any advice for someone that's maybe going through something like that of just here's maybe the silver lining of being in a period like that?

**中文翻译:**
关于这一点，最后一个问题。经历那样的时期，很多人都会经历这种高强度工作的阶段，感觉“天哪，这压力也太大了”，工作时间长得惊人。但当你回首往事时，那些时期往往成了你职业生涯中最重要、最有意义的阶段。我想问，第一，你也有这种体会吗？第二，对于正在经历类似阶段的人，你有什么建议吗？这种时期的“一线希望”是什么？

---

### (00:08:03) Jeremy Henrickson

**English:**
So it's hard, right? It wasn't always easy. I had a new daughter who had been born just a few months earlier, really tough to balance those things, but I've always loved the rate of learning. And so it is those experiences I feel that have most sort of accelerated my own personal growth and personal learnings because it's in the crucible of things being hard. And so I think when people are going through those times, it's nice to take a step back and talk with friends or whatever about what's really going on and setting it in the context of, hey, three, four or five years now from now when we look back on this, you realize, wow. A, we did something amazing with that time. And B, we learned a lot and we were able to take that with us into whatever we were doing next after that.

**中文翻译:**
这确实很难，对吧？并不总是轻松的。当时我刚出生几个月的女儿，平衡工作和家庭非常困难。但我一直热爱学习的速度。我觉得正是这些经历最能加速我个人的成长和学习，因为它们是在困难的“熔炉”中锻造出来的。所以，当人们经历这些时刻时，最好能退后一步，和朋友聊聊到底发生了什么，并把它放在一个长远的背景下：嘿，三五年后当我们回首往事，你会意识到，第一，我们用那段时间做了一些了不起的事情；第二，我们学到了很多，并且能够把这些经验带到我们接下来的任何事业中。

---

### (00:08:52) Lenny

**English:**
Before our chat, I'd asked you what people ask you for advice most around, and you said that people often ask you for advice on how to maintain velocity at scale, which is something every founder and product leader is always striving to do. And so what have you learned and what do you tell people about maintaining and maybe even improving velocity as you scale?

**中文翻译:**
在我们聊天之前，我问过你人们最常向你咨询什么建议，你说人们经常问你如何在规模化过程中保持速度（velocity at scale），这是每个创始人和产品领导者都在努力追求的事情。那么，你学到了什么？关于在规模化时保持甚至提高速度，你会告诉人们什么？

---

### (00:09:12) Jeremy Henrickson

**English:**
I think there's a lot of different answers here, and I think a lot of them are very specific to the nature of the business that someone's in, like different businesses can maintain velocity in different ways. I think there's kind of a universal truth that you want small teams with clear missions. Right? If there's 300 people trying to work on one thing, the just sheer communication challenges, Dunbar's number, all of those things come into play and it's really, really hard to act quickly. And so having smaller groups of people breaking down what is always a very, very large problem into sufficiently small bits that small groups can attack wholeheartedly and minimize horizontal communication, I think is the first thing. I think the second thing is that to the extent it's like a technology problem. The more you can bake into a clear platform, it reduces the decision-making complexity for everyone who's working on the domain part of the problem.

**中文翻译:**
我认为这里有很多不同的答案，其中很多取决于业务的性质，不同的业务以不同的方式保持速度。但我认为有一个普遍的真理：你需要拥有明确使命的小型团队。对吧？如果有 300 人试图做同一件事，纯粹的沟通挑战、邓巴数（Dunbar's number）等因素都会起作用，很难快速行动。因此，第一件事是让更小的小组将一个巨大的问题分解成足够小的部分，让小组可以全身心投入，并尽量减少横向沟通。第二点是，在技术层面，你越能将其构建成一个清晰的平台，就能越好地降低每个处理特定领域问题的人的决策复杂度。

---

### (00:10:09) Jeremy Henrickson (Continued)

**English:**
And so a clear like a platform with a clear interface [inaudible 00:10:12] easy to use in all the ways that both engineers and product people want it to be easy to use, simplifies the space in which people have to think about these problems. And that's not always easy. Platforms are not, you can't just write a platform and hope it's going to work for the products. It's very much an iterative thing, but the more one can invest in that and have the right kinds of people who are capable of doing that sort of both systems thinking and product thinking simultaneously, I think is really important. The third thing, just from a leadership point of view is diving deep. Right? It's very, very tempting to float up here as a leader and say, "Hey, you take that hill over there, you guys do this over here." When in fact where you really learn where the challenges are or the problems or the successes is by just being there with the people in the trenches on one of the things, whichever one seems hardest or most complicated.

**中文翻译:**
因此，一个具有清晰接口、易于使用的平台（无论是工程师还是产品人员都希望它易用），可以简化人们思考这些问题的空间。这并不总是容易的。平台不是写出来就能指望它适用于所有产品的，它是一个迭代的过程。但你投入越多，并拥有能够同时进行系统思维和产品思维的人才，我认为这非常重要。第三点，从领导力的角度来看，就是深入钻研（diving deep）。作为领导者，很容易浮在上面说：“嘿，你去攻克那个山头，你们负责这边。”但事实上，你真正了解挑战、问题或成功的地方，是亲自深入第一线，参与到那些看起来最困难或最复杂的事情中。

---

### (00:11:05) Jeremy Henrickson (Continued)

**English:**
And so I try to do that as often as I can. And I found that I always learn a lot by going through that detailed exercise. And I think the last thing is it's just making sure that teams have the right distribution of experience and seniority. Sometimes you get a team started and the team is perhaps doing something that's zero-to-one and they're amazing at all this zero-to-one stuff. And then two or three years later, those same people are trying to scale the product to millions of people and it turns out that A, they don't like that part of the job as much, and B, maybe they're not as good at it. So I think you [inaudible 00:11:40] constantly look at the team and make sure that a people are doing things that they love and if they're not like, Hey, we've tried this other thing instead and recalibrate the team and make sure the right kind of skill sets are there. And I found if you do all of those things and then have product leadership where we're saying this is what we need to do and very, very clear and precise on what needs to be done, then you can usually actually even accelerate over time because you bake more into this platform, it allows your engineers to do more with less, and that's always pretty amazing.

**中文翻译:**
所以我尽可能多地这样做。我发现通过这种详细的练习，我总能学到很多。最后一点是确保团队拥有合理的经验和资历分布。有时你组建了一个团队，他们可能在做“从 0 到 1”的事情，而且非常擅长。但两三年后，同样的一群人试图将产品扩展到数百万人使用，结果发现：第一，他们没那么喜欢这部分工作；第二，他们可能没那么擅长。所以你需要不断观察团队，确保人们在做他们热爱的事情，如果不是，就尝试调整，重新校准团队，确保拥有合适的技能组合。我发现如果你做到了所有这些，再加上产品领导层能够非常清晰、精确地指明目标，那么随着时间的推移，你通常甚至可以加速，因为你把更多东西沉淀到了平台中，让工程师能以更少的资源做更多的事，这总是非常了不起的。

---

### (00:12:07) Lenny

**English:**
Okay, let me dig into a couple of these. These are really great.

**中文翻译:**
好，让我深入探讨其中的几点。这些观点太棒了。

---

### (00:12:12) Lenny

**English:**
So with the small teams with clear missions, is there an example of that at Rippling or Coinbase where that was a really good example of this being true?

**中文翻译:**
关于“使命明确的小型团队”，在 Rippling 或 Coinbase 有没有哪个例子能很好地证明这一点？

---

### (00:12:20) Jeremy Henrickson

**English:**
One example is maybe three years ago when I was just starting at the company, we decided that we needed to build a time and attendance product, lots of market demand for us and that we hadn't built it yet, something that many customers need. And so there were a bunch of ways we could have chosen to do that, but the way we did it was to say, look, let's find one engineer, really talented systems engineer who's actually capable of doing kind of product thinking and have Parker, CEO also spend time on it. And you start there and Sachit brought a few people on with him.

**中文翻译:**
一个例子是大约三年前，我刚加入公司时，我们决定需要构建一个考勤（Time and Attendance）产品。市场需求很大，而我们还没做，这是很多客户需要的。我们本可以有很多种方式来做这件事，但我们的做法是：找一名工程师，一个非常有才华、具备产品思维的系统工程师，并让 CEO Parker 也投入时间。就这样开始，Sachit（该工程师）又带了几个人加入。

---

### (00:12:56) Jeremy Henrickson (Continued)

**English:**
And those four people over the course of maybe nine months or so, built a time and attendance product. It was the only thing they were doing. They didn't have to worry about what was going on with our payroll product except to the extent they had to integrate with them a little bit. They didn't have to worry about what was going on with the benefits team or our IT products. They were monomaniacally focused on this one thing and then identifying the places where yes, you, there's connectivity to the rest of the suite, and that allowed them to move extremely quickly.

**中文翻译:**
这四个人在大约九个月的时间里，构建了一个考勤产品。那是他们唯一在做的事情。他们不需要担心薪酬（payroll）产品的情况，除非涉及到一些必要的集成。他们不需要担心福利团队或 IT 产品。他们近乎偏执地专注于这一件事，同时识别出与套件其他部分的连接点，这让他们行动极其迅速。

---

### (00:13:24) Lenny

**English:**
How much of that was Parker being on the team, helping them unblock everything versus being very small and focused?

**中文翻译:**
这其中有多少归功于 Parker 在团队中帮助他们扫清障碍，又有多少归功于团队规模小且专注？

---

### (00:13:30) Jeremy Henrickson

**English:**
I think it was mostly small and focused. Obviously, Parker can do things and unblock them in the way that only a CEO can and that helps. But the thing is at Rippling, like we've now replicated that a dozen times. That's our model for starting new things. And so it can't just be him unblocking things, though he does unblock things. It's more that this pattern of having these small groups be able to do things and then being able to have go to those people, whether you're Parker or somebody else in the company, and be able to say, Hey, how are things going? Or are we working on the right things? Or let's see the latest designs for that thing and comment on it.

**中文翻译:**
我认为主要是因为规模小且专注。显然，Parker 能以 CEO 特有的方式扫清障碍，这确实有帮助。但在 Rippling，我们已经把这种模式复制了几十次。这是我们启动新事物的标准模式。所以不能只靠他一个人扫清障碍，尽管他确实会这么做。更多的是这种模式：让这些小组能够独立做事，然后无论是 Parker 还是公司的其他人，都可以直接找他们问：“嘿，进展如何？”或者“我们的方向对吗？”或者“看看最新的设计并给点意见”。

---

### (00:14:05) Jeremy Henrickson (Continued)

**English:**
All of those things can happen just at a much greater tempo than if you're trying to go three layers down into the org and do things. I think that's the other, maybe the key point here that everyone is exposed senior leadership, yes, we have a management structure because you have to, but that management structure does not interfere with the ability of anyone anywhere in the organization to look at what's actually happening. And that happens very directly.

**中文翻译:**
所有这些事情的节奏都比你试图穿过组织的三层架构去做事要快得多。我认为这是另一个关键点：每个人都能接触到高级领导层。是的，我们有管理结构，因为必须有，但这种结构不会干扰组织中任何人在任何地方查看实际进展的能力。这种沟通是非常直接的。

---

### (00:14:29) Lenny

**English:**
So let's talk about that model you just described. So what is that model? So this is how you approach new products, and I know within Rippling there's many, many products and features we're going to talk about this. And you're saying that you have kind of an approach to adding a new business unit essentially, or a new product feature. What is that model roughly?

**中文翻译:**
那我们来聊聊你刚才描述的那个模式。那个模式具体是什么样的？这是你们开发新产品的方式，我知道 Rippling 内部有很多很多产品和功能，我们待会会聊到。你是说你们有一套方法来增加一个新的业务单元或新产品功能。这个模式大致是怎样的？

---

### (00:14:45) Jeremy Henrickson

**English:**
Yeah, so the model's quite simple. In the vast majority of cases, we realize we need to build something and we have the one-page view of what that is. And usually, we're lucky enough that the things we're building sort of exist in some form in the industry today, not in the differentiated way that we can build it, but time and attendance is an example. That's a well-known thing in the industry. There's whole companies that do only that, right? So we start there, we find a single engineer who is extremely entrepreneurial, understands what it means to operate at tempo, understands what it means to make decisions with low information, understands how to work very, very quickly with a design partner.

**中文翻译:**
是的，这个模式相当简单。在绝大多数情况下，当我们意识到需要构建某个东西时，我们会先写一个一页纸的愿景。通常我们很幸运，我们要构建的东西在行业中已经以某种形式存在了，虽然不是以我们那种差异化的方式，但比如考勤就是一个例子。这是行业内众所周知的东西，甚至有专门只做这个的公司。所以我们从那里开始，找一名极具创业精神的工程师，他要理解什么是高节奏运作，理解如何在信息不足的情况下做决策，理解如何与设计伙伴快速协作。

---

### (00:15:22) Jeremy Henrickson (Continued)

**English:**
So we have a design partner and we say, "Look, come into Rippling, spend a few months getting to know the platform first of all. So go work on this other team, understand what's easy for them, what's hard for them, how the platform works, how other products have been built on top of this. Go talk with other people who founded products here and understand what their experience is so that you can learn from and iterate on it, get an opinion about your product, and then start building it."

**中文翻译:**
我们会找一个设计伙伴，然后说：“听着，加入 Rippling，先花几个月了解平台。去另一个团队工作，了解对他们来说什么是容易的，什么是困难的，平台是如何运作的，其他产品是如何在上面构建的。去和这里其他的产品创始人聊聊，了解他们的经验，这样你就可以学习并迭代，对你的产品形成见解，然后开始构建。”

---

### (00:15:48) Jeremy Henrickson (Continued)

**English:**
And during this intervening time, they're also recruiting a team of usually 2, 3, 4 other engineers who kind of have that same zero-to-one mentality and they start building. And usually over the course of six to nine months, we can get a product from a blank sheet of paper to something that is launched or at least that we're using internally when we dogfood our stuff really heavily. And then it grows from there. And then sometimes when you launch one of these products, you get close to launch, you realize, hey, actually a team of five or six people can handle this product ad nauseam. Sometimes you have to bump it up. It's like, okay, this thing's about to go to production, there's all these other things to do, the team needs now needs to go from 4 to 15 or something like that. Really depends on the product, but that's the general life cycle and then you keep growing and scaling it.

**中文翻译:**
在这段过渡期，他们通常还会招聘 2 到 4 名具有同样“从 0 到 1”心态的工程师，然后开始构建。通常在六到九个月内，我们可以将一个产品从一张白纸变成发布状态，或者至少是我们内部在重度“吃自家狗粮（dogfooding）”的状态。然后它就开始增长。有时当你接近发布时，你会发现五六个人的团队就能一直搞定这个产品；有时你需要扩招，比如产品要上线了，有很多事要做，团队需要从 4 人增加到 15 人。这取决于产品，但这就是大致的生命周期，然后你继续发展和扩展它。

---

### (00:16:34) Lenny

**English:**
That is fascinating. So just so I understand, you find a founder type to take the lead on a new idea and do you recruit them internally or you sometimes find them externally just to focus on this product?

**中文翻译:**
这太有意思了。所以我的理解是，你找一个创始人类型的人来领导一个新想法，你是从内部选拔，还是有时从外部招聘专门来负责这个产品？

---

### (00:16:34) Jeremy Henrickson

**English:**
Both.

**中文翻译:**
两者都有。

---

### (00:16:46) Lenny

**English:**
Okay. And then you find a design partner for them to work with to figure out what exactly needs to be built. And is it idea pick one design partner or you try to encourage a few?

**中文翻译:**
好。然后你为他们找一个设计伙伴一起工作，确定到底需要构建什么。是只选一个设计伙伴，还是鼓励多找几个？

---

### (00:16:57) Jeremy Henrickson

**English:**
Usually, it's one. So there's a designer, so we have a design-

**中文翻译:**
通常是一个。会有一名设计师，我们有一个设计——

---

### (00:17:00) Lenny

**English:**
Oh, design partner, meaning a designer, not a company that is like their partner in design.

**中文翻译:**
噢，“设计伙伴”是指一名设计师，而不是一家设计外包公司。

---

### (00:17:06) Jeremy Henrickson

**English:**
Oh, no, no, no. Literally, somebody who knows Rippling's products, knows our component library, knows all of that stuff and is skilled and doing UX and interaction and visual design.

**中文翻译:**
噢，不不不。字面意思就是指一个了解 Rippling 产品、了解我们的组件库、了解所有这些东西，并且擅长 UX、交互和视觉设计的人。

---

### (00:17:19) Lenny

**English:**
Got it. Okay, design. Okay, cool. And then they basically with maybe a couple engineers, just that's the team that initiates a new product line and then launches it, and then as it scales, it maybe grows the team, maybe not.

**中文翻译:**
明白了。好，设计。酷。然后他们基本上和几个工程师一起，组成启动新产品线并发布它的团队。随着规模扩大，团队可能会增长，也可能不会。

---

### (00:17:33) Jeremy Henrickson

**English:**
Yep, that's right. And it's pretty ad hoc, but every couple of weeks or something like that, they're meeting with me or with Parker or whichever one of us is the DRI on it and giving feedback on the designs, having a critical life or like "Oh man, if I were using this as a admin, a small company or an admin at a large company, how would I feel about this? Would this interface work for me?" And so we were pressure testing it throughout that cycle and trying to get the balance of speed and comprehensiveness, right.

**中文翻译:**
没错。这非常灵活，大约每隔几周，他们会和我或 Parker（或者我们中负责该项目的 DRI）见面，反馈设计方案。我们会以批判性的眼光来看：“噢，如果我是一家小公司或大公司的管理员，我用这个会有什么感觉？这个界面对我有效吗？”所以我们在整个周期中都在进行压力测试，试图在速度和全面性之间找到平衡。

---

### (00:18:03) Lenny

**English:**
This reminds me you're also, I hear not a big fan of MVPs that you building products to further point. Is that true? And then if so, how do you think about the initial version of a product?

**中文翻译:**
这让我想起，我听说你不太喜欢 MVP（最小可行性产品），你更倾向于把产品做得更深入。是真的吗？如果是这样，你如何看待产品的初始版本？

---

### (00:18:16) Jeremy Henrickson

**English:**
First of all, I don't want to knock on MVPs. I think MVPs have their place extremely useful, particularly if you're literally the zero-to-one company that's never done anything before and you don't have clear market validation. I think in our case specifically for Rippling, a minimum viable product would do a disservice to both our customers and to the very team that was building it. And the reason I believe that is that when you design a minimum viable product, you're optimizing for speed. And in that set of optimizations, you are minimizing the deeper product thinking about what can fully differentiate our product based on not only existing kind of capabilities within our products and platform, but based on what it ought to do in the future.

**中文翻译:**
首先，我不想贬低 MVP。我认为 MVP 有其用武之地，非常有用，特别是如果你真的是一家从零开始、从未做过任何事情且没有明确市场验证的公司。但我认为，具体到 Rippling 的情况，做一个“最小可行性产品”会对我们的客户和构建它的团队都造成损害。我之所以这么认为，是因为当你设计 MVP 时，你是在为速度而优化。在这种优化中，你减少了深层的产品思考，即如何根据我们产品和平台现有的能力以及未来应该具备的能力，来使我们的产品实现完全的差异化。

---

### (00:19:03) Jeremy Henrickson (Continued)

**English:**
And so it sort of limits product creativity, but worse, it leads to building the wrong thing technically, right? So if you're only thinking through the simple cases and you're an engineer and no one's pushing you on saying, "Wait, what about that healthcare hospital administration case where it's mission-critical life," then you're going to make a different set of as architectural assumptions, and then you're going to build on those and you're going to build on those for six months, nine months a year, and you'll have dozens or 100s of assumptions built on top of those.

**中文翻译:**
所以它在某种程度上限制了产品的创造力，但更糟糕的是，它会导致在技术上构建错误的东西。如果你只考虑简单的案例，而你是一名工程师，没有人推着你问：“等等，如果是那种关乎生命的医疗机构管理案例呢？”那么你会做出完全不同的架构假设。然后你会基于这些假设构建六个月、九个月甚至一年，最终会有几十个甚至上百个假设堆叠在上面。

---

### (00:19:38) Jeremy Henrickson (Continued)

**English:**
And it's extremely difficult to unwind those decisions once you've built them into the product. And therefore we believe very deeply it's like, sure, understand those simple cases. Understand if you're a two-person company, you don't need all of these other things. And what is the product going to look like for you to approach it but also understand what it would mean to have 10,000 people globally around the world with this ridiculously hard use case? What's the model that would support that? And let's make sure that as we're doing the technical and product design for this thing, that it accommodates that view, even if we're not going to support it in the first version, even if we make the product decision to say, "Look, we actually don't need to handle that case right now." You still build the product in a way that's not going to prevent you from getting there in the future. And does that take a little more time? Sure, yeah. But does it save you time in the long run? Absolutely. Right. And so that's our approach.

**中文翻译:**
一旦你把这些决策构建进产品，想要撤销它们就极其困难。因此，我们深信：当然要理解那些简单的案例，理解如果你是一家只有两个人的公司，你不需要所有这些复杂的功能。但同时也要理解，如果全球有 1 万人使用这个极其困难的用例，那意味着什么？什么样的模型能支持这一点？我们要确保在进行技术和产品设计时，能够容纳这种愿景，即使我们在第一个版本中不打算支持它，即使我们做出产品决策说：“看，我们现在其实不需要处理那个案例。”你仍然要以一种不会阻碍未来实现该功能的方式来构建产品。这会多花一点时间吗？当然。但从长远来看，它能节省时间吗？绝对能。这就是我们的方法。

---

### (00:20:39) Lenny

**English:**
Is there an example that comes to mind of a product you build at Rippling or Coinbase of just, it could have been this really simple MVP and then ended up being like, no, we did the right thing by building it further along the spectrum.

**中文翻译:**
你能想到在 Rippling 或 Coinbase 构建的某个产品例子吗？它本可以是一个非常简单的 MVP，但最终你们觉得“不，我们把它做得更深入是正确的”。

---

### (00:20:49) Jeremy Henrickson

**English:**
Yeah. So I think a great example of this at Rippling is our global payroll product. We could have said, "Hey, look, we just need to support this one country. We need to support, whatever, the UK," let's say. So we're going to copy all of our US stuff, just replicate it and change all the things to be UK-like. That would've been the fastest thing to do to dramatically oversimplify, but that's not what we did. What we did is we said, look, we need to launch a six countries and these are six super different countries that we want to look at. And they're going to have different requirements from an HRIS standpoint, from an employer of record standpoint, from how you pay global contractors, from how payroll works, and we're going to make a system that works for those countries. And there's lots of downstream implications for that.

**中文翻译:**
是的。我认为 Rippling 的全球薪酬（Global Payroll）产品就是一个极好的例子。我们本可以说：“嘿，看，我们只需要支持这一个国家，比如英国。”然后我们把美国的所有东西复制一遍，改成英国的样式。那是为了极度简化而能做的最快的事情，但我们没那么做。我们的做法是：我们需要在六个国家上线，而且这是六个非常不同的国家。它们在 HRIS（人力资源信息系统）、EOR（名义雇主）、全球承包商支付以及薪酬运作方式上都有不同的要求。我们要建立一个适用于这些国家的系统。这会产生很多下游影响。

---

### (00:21:39) Jeremy Henrickson (Continued)

**English:**
But what it means is that now our global payroll system, adding a country is, it's not easy, but it's a lot easier than it would've been if you had to continue to stamp out and replicate and then of course maintain all of these things that have very little underlying connectivity. And instead, what we have is 80% of the system is baked into our global payroll platform, and then the 20% is country-specific. And most of that specificity can be handled not by engineers who are very, very expensive to change things that are local specific, but instead can be configured by somebody that's in compliance, by somebody that's in legal that needs to get the right documents into the system. And all of that stuff can be handled by the system, which allows us to move much faster sort of going forward.

**中文翻译:**
但这意味着，现在在我们的全球薪酬系统中增加一个国家，虽然不简单，但比你不断地复制、粘贴然后维护一堆底层毫无关联的东西要容易得多。相反，我们现在 80% 的系统都沉淀在全球薪酬平台中，剩下的 20% 是针对特定国家的。而这大部分特定需求不需要昂贵的工程师去修改，而是可以由合规人员或法务人员通过配置来完成，比如把正确的文件录入系统。所有这些都可以由系统处理，这让我们在未来能行动得更快。

---

### (00:22:27) Lenny

**English:**
I've heard you describe this kind of idea as you encourage teams to design for the most complex use case first. Is that kind of the instruction you give these teams?

**中文翻译:**
我听你描述过这种想法，即你鼓励团队“先为最复杂的用例进行设计”。这是你给这些团队的指令吗？

---

### (00:22:35) Jeremy Henrickson

**English:**
100%, many times. And so it is one of these things that until you're here, it's a really difficult thing to kind of grok because A, it's so counterculture to what the background that most people have come from. It's like, no, no, no, don't think about all those things. Just zoom in on this one case, use it as a wedge, and then grow from there. And this is one of the reasons that we have people, especially new people in these kind of founding roles, come in and spend a few months just absorbing the culture to really learn these lessons. And it's one reason that we're extremely high touch with kind of new products in their infancy to make sure that we just don't fall into that trap, right? Especially because simultaneously with doing this, we're like, "Hey, but we need to ship this as fast as possible." Right? And so you want to get the balance of those two things right.

**中文翻译:**
100%，说过很多次。这件事如果你不在我们公司，很难真正理解（grok），因为第一，它与大多数人习惯的背景文化背道而驰。通常的做法是：“不不不，别想那么多，只关注这一个案例，把它当作切入点，然后以此增长。”这就是为什么我们让那些担任“创始人角色”的人（尤其是新人）先花几个月吸收公司文化，真正学习这些教训。这也是为什么我们对处于萌芽阶段的新产品保持极高的关注度，以确保我们不会掉入那个陷阱。尤其是因为在做这些的同时，我们还在强调：“嘿，但我们需要尽快交付。”所以你必须在这两者之间找到平衡。

---

### (00:23:17) Lenny

**English:**
So when I think about Rippling, I think of you got the culture is to do things the hard way and the right way. And an element of that is there's this concept that I've heard that Rippling is this compound startup? What does that term mean? And then how does that approach impact the way you build product and organize teams and all the things you were just talking about of MVPs and build new products?

**中文翻译:**
当我想到 Rippling 时，我觉得你们的文化是“用困难但正确的方式做事”。其中一个元素是我听过的一个概念，即 Rippling 是一个“复合型初创公司（compound startup）”。这个词是什么意思？这种方法如何影响你们构建产品、组织团队以及你刚才提到的关于 MVP 和构建新产品的所有事情？

---

### (00:23:40) Jeremy Henrickson

**English:**
The idea of a compound startup for us is that we're basically a lot of businesses that all work together. If you think about the products we offer, we have payroll, well, there's entire companies built just on payroll, insurance, and benefits, entire companies. That's our entire life. In fact, a fragment of benefits is the entire life cycle of a whole company. Our IT products, device management, and identity management, time and attendance, each of these things are industries into themselves with multi-billion dollar companies serving each of them. The insight Parker had before he founded the company was actually the result you get that when you have that is that there's all this data that gets replicated and copied and as impossible to keep in sync everywhere. The right answer is to have a single system of record, one place, one database where all of that information is resident so that each of these downstream systems can always have the right data at the right time.

**中文翻译:**
对我们来说，“复合型初创公司”的理念是，我们基本上是许多业务的集合，它们协同工作。如果你看我们提供的产品：薪酬管理，有些公司只做薪酬就能做成大公司；保险和福利，也是如此。事实上，福利的一个细分领域就是一家完整公司的全部业务。还有我们的 IT 产品、设备管理、身份管理、考勤，每一项本身都是一个行业，都有价值数十亿美元的公司在其中竞争。Parker 在创立公司前的洞察是：当你拥有这些分散的系统时，数据会被不断复制和拷贝，根本无法保持同步。正确的答案是拥有一个单一的“记录系统（system of record）”，一个地方，一个数据库，存储所有信息，这样每个下游系统都能在正确的时间获得正确的数据。

---

### (00:24:34) Jeremy Henrickson (Continued)

**English:**
And then you can build on top of that things like workflow and reporting and analytics and permissioning and all these kinds of underlying capabilities. So the idea of a compound startup is all of these different businesses benefit from being built on top of one platform. The activation energy for that is extremely high. So before my time at the company, Parker, Prasanna, the technical founder, and others, built all of the first versions of all these products and it was a minor miracle, they were able to do that. But having done it, we then had that platform and we could continue to build new verticals and new startups on top of that foundation.

**中文翻译:**
然后你可以在此基础上构建工作流、报告、分析、权限管理等各种底层能力。所以复合型初创公司的理念是：所有这些不同的业务都受益于构建在同一个平台之上。这需要的“活化能（activation energy）”极高。在我加入公司之前，Parker、技术创始人 Prasanna 和其他人构建了所有这些产品的第一个版本，他们能做到这一点简直是个小奇迹。但在那之后，我们就拥有了那个平台，可以继续在那个基础上构建新的垂直领域和新的“内部创业公司”。

---

### (00:25:16) Lenny

**English:**
This touches on something that comes up a number of times in this podcast, which is the importance of differentiation. And it feels like this is the differentiator for Rippling. It's not going to be just a better one of these vertical solutions like the main differentiators, we're going to do it all and everything's going to be so much better because it's all in one platform. Is that kind of where the original idea came from or is there a different way to think about that?

**中文翻译:**
这触及了本播客多次提到的一个话题，即差异化的重要性。感觉这就是 Rippling 的差异化所在：它不仅仅是做一个更好的垂直解决方案，主要的差异化在于“我们全做”，而且因为都在一个平台上，一切都会变得更好。这是最初想法的来源吗？还是有其他的思考方式？

---

### (00:25:38) Jeremy Henrickson

**English:**
Yeah, I think that's right. So I mean, the fundamental contention is having a single system of record is better for many, many, many reasons, right? The most simple of which is there's a single source of truth and all of these other products can rely on it. But also, unless you start without assumption of everything being in a single system of record, there's a bunch of other things you can't do. You can't build out a, I don't know, a permissioning system that looks at the various attributes across all of these products. You now suddenly have to do an integration and each of these products talks different languages. You can't do simple things, build a product and say, who is this person's manager? Most products, you can't do that.

**中文翻译:**
是的，我认为没错。核心论点是，拥有单一的记录系统在很多方面都更好。最简单的一点是它有单一的数据源（single source of truth），所有其他产品都可以依赖它。而且，除非你从一开始就假设所有东西都在一个记录系统中，否则有很多事情你是做不到的。比如，你无法构建一个能查看所有产品各种属性的权限系统。否则你突然就得做集成，而每个产品说的都是不同的语言。你甚至做不了简单的事，比如在产品里问：“这个人的经理是谁？”大多数产品都做不到这一点。

---

### (00:26:35) Jeremy Henrickson (Continued)

**English:**
Most products you find some system of truth, export everybody's name and email address and a spreadsheet, have another email address or another name, maybe an employee ID of who that person reports to and upload that to another system, which by the way is immediately out of date because organizational structures change all the time. Whereas with Rippling, it's always correct. We are the system of record. So all of our products, they're like, "Hey, who's that person's manager." And the system immediately knows. And that's a very, very simple example of something that you can only do if you start with solve it to come back to an earlier point, like solve the most complex use case first, solve the fact that this data all needs to be in the same place. And so our ability to differentiate boils down to that one fundamental decision, which just allows us to do things that are literally impossible for any other company to do.

**中文翻译:**
在大多数产品中，你需要找到某个数据源，把每个人的姓名和邮箱导出到表格，再加上他们汇报对象的邮箱或姓名，也许还有员工 ID，然后上传到另一个系统。顺便说一下，这东西立刻就会过时，因为组织架构一直在变。而在 Rippling，它永远是正确的。我们就是记录系统。所以我们所有的产品问：“嘿，那个人的经理是谁？”系统立刻就知道。这是一个非常简单的例子，说明了只有当你从“解决最复杂的用例”开始（即解决所有数据必须在同一个地方的问题）才能做到的事情。所以我们的差异化能力归结为那一个根本性的决定，它让我们能做其他公司字面上无法做到的事情。

---

### (00:27:09) Lenny

**English:**
What would you say is one of the most unique things about Ripplings culture that maybe you haven't mentioned yet?

**中文翻译:**
关于 Rippling 的文化，你觉得还有什么是你还没提到过的最独特的地方？

---

### (00:27:15) Jeremy Henrickson

**English:**
I would say it's fundamental, speed of execution. I think in speed of decision-making. It's the thing that is probably the hardest to explain to people before they're here. It's hard to understand until you experience it. It's like let's not schedule a meeting for next week or tomorrow or later today. We're in the middle of a meeting, we need to make a decision. Let's either make the decision or if we can't, let's Slack call in the person that we need in order to make that decision. And we'll be done with the decision today.

**中文翻译:**
我会说是最根本的——执行速度。我认为是决策速度。这可能是最难向没来过这里的人解释的事情。除非你亲身体验，否则很难理解。这就像是：我们不要把会议安排在下周、明天或今天晚些时候。如果我们正在开会，需要做一个决定，我们要么现在就定下来，要么如果定不了，就立刻通过 Slack 呼叫那个能做决定的人。我们今天就要把决定做完。

---

### (00:27:44) Jeremy Henrickson (Continued)

**English:**
And like sure there are irreversible decisions you can't make that way, but for the most part, we really value the tempo of decision-making and the speed of response. And no company I've been at any scale, 5 people, 5,000 people, has ever operated at the tempo this one does. And I think that our ability to continue to operate at that tempo, which is partly due to the fact that we are a compound startup and have these small teams independently operating teams and all the rest of that is a really differentiating thing about the culture of the company.

**中文翻译:**
当然，有些不可逆的决策不能这么做，但在大多数情况下，我们非常看重决策的节奏和响应速度。我待过的任何规模的公司，无论是 5 人还是 5000 人，都没有像这家公司这样以这种节奏运作。我认为我们能够持续保持这种节奏，部分归功于我们是一家复合型初创公司，拥有这些独立运作的小型团队，这是公司文化中一个非常具有差异化的点。

---

### (00:28:14) Lenny

**English:**
I'm reading Kevin Kelly's new book where I don't know if you've seen his new book. It's all these little tidbits of advice and one of his pieces of advice is that usually the best time to do something is right now. And that feels like that resonates with the way you all think. I'm curious just how you create that culture and ability to make decisions fast. Is it purely top-down founder, this is how they behave, or is there something else that you found as effective to create this culture of moving fast, making decisions really quickly?

**中文翻译:**
我正在读凯文·凯利（Kevin Kelly）的新书，不知道你有没有看过。里面全是些建议的小贴士，其中一条是：通常做某事的最佳时机就是现在。这感觉与你们的思维方式非常契合。我很好奇你们是如何创造这种文化和快速决策能力的。这纯粹是创始人自上而下的示范吗？还是说你发现了其他有效的方法来建立这种快速行动、快速决策的文化？

---

### (00:28:43) Jeremy Henrickson

**English:**
Obviously, a huge piece of this is Parker himself. It's an attribute of his personality, he likes making decisions quickly, and it's also a deliberate strategic decision on his part to have a company that makes decisions quickly. And so he models this constantly, right, in Slack, in conversations in person, and in every way possible. And there's an expectation throughout the company. If you kind of look at our leadership principles, this ability to make decisions quickly is something that kind of everybody promulgates. But also I think there's a number of things we've done to bake it in the way that we even do say quarterly planning. And the fact that there's this timeline for decision-making that doesn't leave a lot of room in the way that we expect people to know their domains, especially in product, right?

**中文翻译:**
显然，很大一部分原因在于 Parker 本人。这是他的性格特质，他喜欢快速做决定。同时，这也是他深思熟虑后的战略决定，即建立一家能够快速决策的公司。他在 Slack、面对面交谈以及所有可能的场合中不断地以身作则。全公司对此都有预期。如果你看我们的领导力原则，这种快速决策的能力是每个人都在宣扬的。此外，我认为我们做了一些事情将其固化，比如我们的季度计划方式。决策的时间表非常紧凑，没有留下太多余地，因为我们期望人们精通自己的领域，尤其是在产品方面，对吧？

---

### (00:29:29) Jeremy Henrickson (Continued)

**English:**
In product, you don't own little feature, you own your product and you're expected to be the world's foremost expert in it. And if you are, what that means is instead of having to come back to people three days later with an answer, just off the top of your head, you can be like, "Yes, this is what I think I should do about that or give me 30 minutes, look something up and I can tell you what we need to do about that." And so all of those things in combination just yield an environment in which these decisions happen very quickly.

**中文翻译:**
在产品部门，你负责的不是一个小功能，而是整个产品，你被期望成为该领域的全球顶尖专家。如果你是专家，这意味着你不需要在三天后才给别人答复，而是可以脱口而出：“是的，我认为应该这样做”，或者“给我 30 分钟查一下，我就能告诉你该怎么做”。所有这些因素结合在一起，就产生了一个决策极其迅速的环境。

---

### (00:29:55) Lenny

**English:**
You talked about quarterly planning and you're saying that there's like, here's the timelines we need to make decisions on these dates, and there's a culture of just we stay firm to that. And if you don't, then we're going to move on.

**中文翻译:**
你提到了季度计划，你是说会有明确的时间表，规定必须在这些日期做出决定，而且有一种“坚守时间表”的文化。如果你没做到，我们就直接推进到下一步了。

---

### (00:30:06) Jeremy Henrickson

**English:**
That's right. And it's shocking to people when we actually move on, right, that haven't been here yet. It's like, no, no, that date passed. You don't get to retroactively make everybody react to the fact that you didn't operate quickly enough, right? And it's not a hostile thing, it's just a, people just have to get used to. It's a deep cultural principle. And the fact that everyone stands behind it just means it's gets reinforced on its own, out of its own gravity.

**中文翻译:**
没错。当还没适应这里的人发现我们真的直接推进时，他们会感到震惊。就像是：“不，日期已经过了。你不能因为自己行动不够快，就让所有人事后回过头来配合你。”这并不是一种敌对行为，只是人们必须习惯。这是一个深刻的文化原则。因为每个人都支持它，所以它会产生一种引力，自我强化。

---

### (00:30:34) Lenny

**English:**
Do you have internal values that you've kind of outlined that are a part of this? Or is that not something that you find super valuable?

**中文翻译:**
你们有没有列出一些作为这一原则组成部分的内部价值观？还是说你觉得这并不是特别有价值？

---

### (00:30:42) Jeremy Henrickson

**English:**
No, actually I find them quite valuable. And actually our COO, Matt MacInnis, who joined the company about a year before I did, he has been the one to really drive this and you go to, I can't remember this specific URL, but on Rippling there's a search Rippling leadership principles. There they are. And they are really true to the culture of the company. The way we came up with them was to us a couple years ago, to introspect and to what actually made people successful at the company? Like who's successful, why are they successful? Why do they enjoy being here? Or alternatively the opposite, like why people not worked out, why do some people not enjoy it here? And those are the things that are differentiating and those are the things that we wrote down.

**中文翻译:**
不，实际上我觉得它们非常有价值。我们的 COO Matt MacInnis（比我早一年加入公司）是真正的推动者。你可以去搜一下“Rippling 领导力原则”，它们真实地反映了公司的文化。我们几年前制定这些原则的方法是进行反思：到底是什么让人们在公司取得成功？谁是成功的，为什么？他们为什么喜欢待在这里？反之亦然，为什么有些人不合适，为什么有些人不喜欢这里？这些就是差异化的点，也是我们写下来的东西。

---

### (00:31:23) Lenny (Sponsor Break)

**English:**
Are you hiring or on the flip side, are you looking for a new opportunity? Well, either way, check out lennysjobs.com/talent. If you're a hiring manager, you can sign up and get access to hundreds of hand-curated people who are open to new opportunities. Thousands of people apply to join this collective. And I personally review and accept just about 10% of them. You won't find a better place to hire product managers and growth leaders. Join almost a 100 other companies who are actively hiring through this collective. And if you're looking around for a newer opportunity actively or passively join the collective, it's free. You can be anonymous and you can even hide yourself from specific companies. You can also leave any time and you'll only hear from companies that you want to hear from. Check out lennysjobs.com/talent. For someone listening that's like, we need to move faster. And everyone always feels this, we need to move faster, we make decisions faster. What piece of advice would you give someone for helping them do this at their company?

**中文翻译:**
你是在招聘，还是在寻找新机会？无论哪种情况，请查看 lennysjobs.com/talent。如果你是招聘经理，你可以注册并接触到数百名经过人工筛选、正在寻找新机会的人才。成千上万的人申请加入这个人才库，而我个人只审核并接受其中约 10% 的人。你找不到比这更好的地方来招聘产品经理和增长领导者了。加入近 100 家正在通过这个人才库积极招聘的公司吧。如果你正在主动或被动地寻找新机会，请加入这个人才库，它是免费的。你可以保持匿名，甚至可以对特定公司隐藏自己。你也可以随时退出，并且只会收到你感兴趣的公司的消息。请访问 lennysjobs.com/talent。对于那些听着节目并心想“我们需要行动得更快”的人——每个人都有这种感觉——你会给他们什么建议来帮助他们在公司实现这一点？

---

### (00:32:27) Jeremy Henrickson

**English:**
I think it's really context-dependent, but I think it starts with whoever is in the role of making the top-level product decisions of them being one extremely clear about what those priorities are and more importantly, extremely clear about what all the priorities aren't. Right? There are so many things that could be important or people can make the case for being important or whatever that are fundamentally distracting from the core mission of getting something done.

**中文翻译:**
我认为这非常取决于具体情况，但首先要从负责最高层产品决策的人开始。他们必须第一，极其清楚优先级是什么；更重要的是，极其清楚优先级“不是”什么。有太多事情可能看起来很重要，或者人们可以辩称它们很重要，但它们从根本上分散了完成核心任务的精力。

---

### (00:32:55) Jeremy Henrickson (Continued)

**English:**
But secondly, for that person to go all the way to ground on it, we have one of the leadership principles is go and see. Right? To look at the thing and then walk all the way to ground and talk with the engineer who's writing the code on the thing. Because inevitably this top-level communication is insufficient to get to the detail of what matters and doesn't matter. And you don't have to do that everywhere, but if you do it in enough places, what it does is it creates a clear expectation of that kind of clarity across the board and forces everyone to up their game a little bit and just helps people understand what the expectation is. Right? And I think in the absence of those sort of clear expectations, it's difficult for people to perform at their best. Right? And we try to do that pretty frequently.

**中文翻译:**
其次，那个人必须亲自深入实地。我们的领导力原则之一是“去现场看（go and see）”。去观察那件事，然后一直走到最底层，和正在写代码的工程师交谈。因为不可避免地，高层沟通不足以触及“什么是重要的，什么是不重要的”这些细节。你不需要在每个地方都这么做，但如果你在足够多的地方这么做，它就会建立一种全方位的清晰预期，迫使每个人都提高水平，并帮助人们理解预期是什么。我认为如果没有这些明确的预期，人们很难发挥出最佳水平。我们尝试经常这样做。

---

### (00:33:43) Lenny

**English:**
Okay. I definitely want to spend more time on this, but before we get there, so go and see. I love that. And that actually has come up recently on a number of podcasts, just the importance of people continuing to ask questions and going to the end of what's possible. Recent story was IO talking about building the cash card and going to the warehouse and watching the printings of the cards and things like that. I guess first of all, do you have a sense of where that came from and why that ended up being so important to y'all? And then two is there an example of you doing that or someone you've seen do that and that leading to something really important?

**中文翻译:**
好。我确实想多花点时间聊聊这个，但在那之前，“去现场看”，我非常喜欢这一点。最近在一些播客中也提到了这一点，即人们不断提问并探寻可能性边界的重要性。最近的一个故事是 IO 谈到构建 Cash Card 时，亲自去仓库观察卡片的打印过程。我想问，第一，你知道这个原则是从哪来的吗？为什么它对你们如此重要？第二，有没有你亲自实践或看到别人实践，并最终导致了非常重要结果的例子？

---

### (00:34:16) Jeremy Henrickson

**English:**
In the early days of our global efforts, when we were first trying to figure out what global payroll was, it was really tempting to say, "Oh, well we're going to go into the UK and that's going to be relatively similar to what we're doing in the US." But our kind of head of payroll went in and said, actually, here are the ways in which we knew it was going to be different, but here are the ways in which we didn't anticipate that it was going to be different, which made us realize that we had to completely alter our approach for how we think about learning about each of these countries and going into them and having a fulsome experience.

**中文翻译:**
在我们开展全球业务的早期，当我们第一次试图弄清楚什么是全球薪酬时，很容易说：“噢，我们要进入英国市场，那应该和我们在美国做的差不多。”但我们的薪酬负责人亲自深入研究后说，实际上，有些差异是我们预料到的，但还有些差异是我们完全没想到的。这让我们意识到，我们必须彻底改变学习每个国家、进入每个国家并获得完整体验的方式。

---

### (00:34:50) Jeremy Henrickson (Continued)

**English:**
And that then backs into things like, well, every country does tax filings, every country does them slightly differently, but how are we going to build a tax filing system that's going to allow us to satisfy the needs of every country in which we're going to run payroll? And it was only through that very early on deep look at how one country was actually operating and then doing the same thing with the next country that we were able to set in motion, all of those things. It's not like we knew all the answers at that point, but it allowed us at a much earlier stage to put in motion a bunch of stuff that we need to do that then got subsequently much more clarified and much more precise over time.

**中文翻译:**
这随后涉及到一些事情，比如每个国家都要报税，每个国家的方式都略有不同。那么我们如何构建一个报税系统，使其能够满足我们开展薪酬业务的每个国家的需求？正是通过早期对一个国家实际运作方式的深度观察，然后对下一个国家做同样的事，我们才得以启动所有这些工作。并不是说我们当时就知道所有答案，但它让我们在更早的阶段启动了一系列必要的工作，这些工作随着时间的推移变得更加清晰和精确。

---

### (00:35:30) Lenny

**English:**
And so the leader of that team basically just went and studied the tax laws of each country.

**中文翻译:**
所以那个团队的负责人基本上就是去研究了每个国家的税法。

---

### (00:35:35) Jeremy Henrickson

**English:**
Yeah.

**中文翻译:**
是的。

---

### (00:35:36) Lenny

**English:**
... country.

**中文翻译:**
……每个国家。

---

### (00:35:36) Jeremy Henrickson

**English:**
That's right, went all the way to ground. It's like, okay, let's go and open up the big old, I mean, it's online these days, the big old textbook and look like it's, or you're in the United States, it's like you have to go look at Ohio or Pennsylvania, which have all these little local city or county based taxes. And it's incredibly instructive to look at just a few of those and think, wow, how do I think about configuring these change unannounced? Some city administrator or the city legislature, whatever they call them, they decide to change the tax rate. Well, how are we going to know about that? How are we going to change it? How are we going to change it so it's effective at the right time?

**中文翻译:**
没错，深入到最底层。就像是：“好吧，让我们打开那本厚厚的教科书（虽然现在都在网上），去研究一下。”或者在美国，你得去看俄亥俄州或宾夕法尼亚州，那里有各种细碎的城市或县级税收。观察其中几个就非常有启发性：哇，我该如何配置这些随时可能在不通知的情况下发生的变化？某个城市管理员或立法机构决定更改税率，我们怎么知道？我们怎么修改？我们怎么确保它在正确的时间生效？

---

### (00:36:14) Jeremy Henrickson (Continued)

**English:**
And you don't think about those things until you've gone all the way to ground and looked at how these things are actually worked, how they're communicated, and how they're thought through. And I think the same thing is true of every aspect of every product in different ways. Right? It might be a technical thing, it might be a design thing, it might be a compliance or a regulatory or a governmental thing, but whatever it is, that detail always exists. And unless you're getting down there and seeing it and understanding it firsthand, you don't really understand what your product needs to do.

**中文翻译:**
除非你深入实地，观察这些事情实际上是如何运作的、如何沟通的、如何构思的，否则你根本不会想到这些。我认为对于每个产品的每个方面，情况都是一样的，只是形式不同。它可能是一个技术问题，可能是一个设计问题，也可能是一个合规、监管或政府事务问题。但无论是什么，细节永远存在。除非你亲自下去看、去第一手了解，否则你并不真正理解你的产品需要做什么。

---

### (00:36:42) Lenny

**English:**
And I think an important element of this that's between the lines maybe is don't delegate this to someone. You may have a tax expert on the team, and I imagine many leaders would be like, go figure this out and tell me. And I think what you're saying is you go do that and learn, become the world expert at it.

**中文翻译:**
我认为这里隐含的一个重要元素是：不要把这件事授权给别人。你团队里可能有税务专家，我能想象很多领导会说：“去把这个搞清楚然后告诉我。”但我觉得你的意思是，你要亲自去做，去学习，成为那个领域的全球专家。

---

### (00:36:55) Jeremy Henrickson

**English:**
That's right. That's right. You go do it. You go learn and then we can make the case for hiring the tax expert, which we do have by the way now. That's an incredibly important part of our success is having that specialist but not before somebody with a product mindset. The tax specialist is amazing at tax, right? That's what they're, they love and that's what they do, but that doesn't make them necessarily a great product thinker. So the person with the product thing has to get into those same weeds first to really understand it.

**中文翻译:**
没错。没错。你亲自去做，去学习，然后我们再考虑聘请税务专家（顺便说一下，我们现在确实有税务专家）。拥有专家是我们成功的极其重要的一部分，但在那之前，必须有具备产品思维的人先介入。税务专家精通税务，那是他们的热爱和专长，但这并不一定意味着他们是优秀的产品思考者。所以负责产品的人必须先深入到那些细节（weeds）中去，真正理解它。

---

### (00:37:24) Lenny

**English:**
Do you give any guidance and just how much time to spend on all that stuff versus the regular day-to-day of, say, a product leader on a team, it takes a lot of time to become a world expert on the tax systems of many countries, or is it just there's nothing more important than that, that is your job, and what are you doing not doing that? How do you think about it?

**中文翻译:**
你会给出什么指导吗？比如花多少时间在这些事情上，而不是在产品领导者的日常工作中？要成为许多国家税收系统的全球专家需要花费大量时间。还是说，你认为没有什么比这更重要了，这就是你的工作，如果你没在做这个，你还在做什么？你是怎么考虑的？

---

### (00:37:42) Jeremy Henrickson

**English:**
I think it's equally if a job is 80 hours a week, it's 40 of your hours. I think that you can't really understand a product unless you've gone there. Right? And yes, it takes time and you're right, you can't just ignore the other half of the job of communicating with the engineering team and writing documents or whatever, but what's the point of writing a document if you don't know what you're talking about? And so we very deeply value that. And it's one of the reasons that we keep, at least at Rippling, our product organization really thin. We expect a single leader to be able to know the full scope of the product. In fact, great product leaders can in fact do that because they have this native curiosity and interest and ability to absorb a lot of stuff. And it makes, it's a lot of fun because now I have a group of people around me who are all really good at what they do and really understand what they do and that's kind of just an amazing place to be.

**中文翻译:**
我认为，如果一份工作每周 80 小时，那么其中 40 小时应该花在这上面。我认为除非你亲自深入实地，否则你无法真正理解一个产品。是的，这需要时间，你也没法忽略工作的另一半，比如与工程团队沟通、写文档之类的。但如果你根本不知道自己在说什么，写文档又有什么意义呢？所以我们非常看重这一点。这也是为什么在 Rippling，我们的产品组织非常精简。我们期望一个领导者能够了解产品的全貌。事实上，优秀的产品领导者确实能做到这一点，因为他们天生具有好奇心、兴趣和吸收大量信息的能力。这让工作变得非常有趣，因为我现在身边有一群人，他们都非常擅长自己的工作，并且真正理解自己在做什么，这感觉太棒了。

---

### (00:38:42) Lenny

**English:**
I'm looking at this list and I just want to keep asking questions about it. One of the sure principles that I love is it reminds me of Amazon has the same principle I believe, which is leaders are right a lot. Why do you find that to be important? I know you weren't necessarily design all these principles, but I imagine that something that you guys follow often and comes up a lot.

**中文翻译:**
我看着这张清单，忍不住想继续问下去。我非常喜欢的一个原则是——它让我想起亚马逊也有同样的原则——即“领导者通常是正确的（Leaders are right a lot）”。为什么你觉得这很重要？我知道这些原则不一定是你设计的，但我能想象这是你们经常遵循且经常被提及的东西。

---

### (00:39:01) Jeremy Henrickson

**English:**
I mean, this is one of my favorite ones because I think particularly for a product org, right? Because product leaders have to be right most of the time because their decisions reflect across the entire org and their decisions fundamentally spend time and they spend energy. And if they make good ones, the company does really well. And if they make bad ones, the company doesn't. And one of the things I really value in product leaders are people who can go into an ambiguous information with ambiguous situation, with incomplete information and a complex decision space and can look at that and listen to everybody and read whatever they need to read and say, this is where we need to go.

**中文翻译:**
这是我最喜欢的原则之一，尤其是对于产品组织来说。因为产品领导者必须在大多数时间里是正确的，因为他们的决策会反映在整个组织中，他们的决策从根本上消耗着时间和精力。如果决策做得好，公司就会发展得很好；如果决策做得差，公司就不行。在产品领导者身上，我非常看重的一种能力是：他们能进入一个信息模糊、情况不明、信息不完整且决策空间复杂的境地，观察现状，倾听每个人的意见，阅读必要的资料，然后说：“这就是我们要走的方向。”

---

### (00:39:43) Jeremy Henrickson (Continued)

**English:**
And even if everyone else is like, ah, I don't know, that feels wrong for this reason, this reason if they have the confidence to make that call, and then a year later when you look back on it, for them to have been right, that's extremely valuable. And it's one of these things that it's really hard to test for. You can get it by talking with people and asking, "Hey, was this person usually right in respect?" And people think about it, but in the context of a given company, just you have to take the time and see if those decisions are largely right. And it's the one value we have. It's like you can't really learn it. Either you're really, really good at making those kinds of decisions or you're not, right? It's a very peculiar skill that we really value.

**中文翻译:**
即使其他人都说：“啊，我不知道，因为这个原因或那个原因，这感觉不对”，如果他们有信心做出那个决定，并且一年后回过头来看，证明他们是对的，那是非常有价值的。这是很难测试出来的东西。你可以通过与人交谈并询问“这个人在事后看来通常是正确的吗”来了解。人们会思考这个问题，但在特定公司的背景下，你必须花时间观察这些决策是否大致正确。这是我们拥有的一个价值观：它几乎是学不来的。要么你非常擅长做这类决策，要么你不擅长。这是一种我们非常看重的独特技能。

---

### (00:40:28) Lenny

**English:**
Awesome. Shifting a little bit, I know you all are going through this global expansion. We talked about this a little bit. And so just a few questions along this lines, because a lot of companies start one country, most companies do, and then they decide let's expand to new markets. So I guess first question is just how do you decide which markets to go after? And specifically where to start first and then just prioritizing the list of markets? What's kind of your algorithm for that?

**中文翻译:**
太棒了。稍微换个话题，我知道你们正在进行全球扩张，我们刚才聊到了一点。关于这一点我有几个问题，因为大多数公司都是从一个国家开始，然后决定扩张到新市场。我想问的第一个问题是，你们如何决定去攻克哪些市场？具体来说，先从哪里开始，以及如何对市场列表进行优先级排序？你们的“算法”是什么？

---

### (00:40:55) Jeremy Henrickson

**English:**
So it starts with an assumption that we're going to have to be everywhere ultimately, that you don't actually have to build native global payroll in every country in the world. Just makes sense to do that every country in the world. But you definitely want to be able to pay people in any country in the world and you want to be able to have contractors anywhere in the world and have their information be in your HRS anywhere in the world. And so the decision for us, we were fortunate to, or when we made that decision, to have quite a few customers already, like thousands of customers. And so we knew not only where their kind of US employees were, but by virtue of being an employee system work, we actually knew where they had other employees.

**中文翻译:**
首先，我们假设最终必须无处不在。你并不真的需要在世界上每个国家都构建原生的全球薪酬系统，虽然在每个国家都这样做是有意义的。但你肯定希望能够支付世界上任何国家的人，希望在世界上任何地方都有承包商，并让他们的信息存在于你遍布全球的 HRIS 中。对我们来说，做决定时很幸运，因为我们已经拥有相当多的客户，比如数千家客户。因此，我们不仅知道他们的美国员工在哪里，而且凭借我们作为员工系统的优势，我们实际上知道他们在哪里还有其他员工。

---

### (00:41:35) Jeremy Henrickson (Continued)

**English:**
And so it was quite easy for us to say, focusing on US-based companies, which is incomplete data. But if we just look at our US-based companies, we know that there is immediate demand for those people to pay people in countries X, Y, and Z. And we just listed those out in raw numerical order. And then we kind of looked at, okay, how hard is it to build in these countries and how valuable is it to build in these countries? What is the strategic value of building in the UK or Canada or Germany or India or wherever? And then we had a discussion on where is there risk or where is this hard? Where is there a long pull? Where does this like, in what countries does it take a long time to get approval or whatever? And we just stack-ranked them and then we revisited that decision. The early decisions that we made on exactly which countries. We have subsequently reordered those over time. And as we've dove, dived in the countries, and learned more, we rejigger things like a little bit. But for the most part, that same basic list we started with is still mostly right.

**中文翻译:**
所以对我们来说，专注于总部在美国的公司（虽然数据不完整）是很容易的。如果我们只看这些美国公司，我们就知道他们立即有在 X、Y、Z 国家支付员工的需求。我们只是按原始数量顺序列出了这些国家。然后我们观察：在这些国家构建的难度如何？价值如何？在英国、加拿大、德国、印度等地构建的战略价值是什么？接着我们讨论哪里有风险，哪里比较困难，哪里周期长（比如哪些国家需要很长时间才能获得审批）。我们对它们进行了堆叠排序，然后重新审视那个决定。我们最初对具体国家的决定，随着时间的推移进行了重新排序。随着我们深入这些国家并了解更多信息，我们会稍微调整一下。但大部分情况下，我们最初的那份基本清单仍然是大致正确的。

---

### (00:42:29) Lenny

**English:**
I've other question a lot of founders always struggle with is when is the time to start expanding internationally? Because there's pros and cons. Do you have a sense of what convinced y'all to start going international?

**中文翻译:**
很多创始人一直纠结的另一个问题是：什么时候开始国际扩张？因为这有利有弊。你觉得是什么说服了你们开始走向国际化？

---

### (00:42:41) Jeremy Henrickson

**English:**
I think our case is slightly special, but I think the right answer to that question is always before you think you do before you think you need to because there are, it's harder than everyone if they've never done it before, it's harder than you think it is. It's more specialized than you think it is. People in the UK really, really care if there is a U in color, just as we care if there's not a U in color. There's just all of these subtle lessons that, like cultural lessons for companies that take a really, really long time to absorb. And so my view is you always should do it earlier than you think you should that, than you think you have to.

**中文翻译:**
我认为我们的情况有点特殊，但我认为这个问题的正确答案永远是：在你认为需要之前，在你认为必须做之前。因为对于从未做过的人来说，这比你想象的要难。它比你想象的更专业。英国人非常在意“color”里有没有那个“u”，就像我们在意没有那个“u”一样。公司需要花非常非常长的时间才能吸收这些微妙的文化教训。所以我的观点是，你总是应该比你认为应该做的时候更早开始。

---

### (00:43:35) Jeremy Henrickson (Continued)

**English:**
In our case, it was always something we knew we had to do. In fact, we have a very clear thesis that companies that aren't global, particularly in payroll, but also in kind of insurance and benefits in IT. If you're not global, you're just not going to be around in 10 years because companies were becoming global, and then COVID happened and companies became global much faster. It stopped being the province of 100-person companies plus and started filtering down into very, very small companies. It just became commonplace for small companies to be multi-country. And so that very much accelerated our timetable. And then you saw other people noticed that too, and you saw other companies starting to try to address parts of this problem as well. And so there's this kind of competitive dimension, which is sort of secondary in most ways because we were going to do it anyway, but that also kind of adds a little bit of a fire under the thing.

**中文翻译:**
对我们来说，这是我们一直知道必须要做的事情。事实上，我们有一个非常明确的论点：那些不走向全球化的公司，特别是在薪酬、保险、福利和 IT 领域，如果 10 年内还不走向全球化，就无法生存。因为公司正在变得全球化，接着 COVID 发生了，公司全球化的速度变得更快了。它不再是 100 人以上规模公司的专利，而是开始渗透到非常小的公司。小公司跨国经营变得司空见惯。这大大加快了我们的时间表。然后你看到其他人也注意到了这一点，其他公司也开始尝试解决这个问题的一部分。所以存在竞争维度，虽然在大多数方面它是次要的（因为我们无论如何都会做），但它也确实起到了一定的推动作用。

---

### (00:44:06) Lenny

**English:**
What have you found to be most surprising about expanding internationally to be successful in expansion? For folks that are maybe starting down this road of like, oh shoot, we should think about that.

**中文翻译:**
在国际扩张并取得成功的过程中，你发现最令人惊讶的事情是什么？对于那些可能刚刚开始考虑“噢，天哪，我们也该考虑扩张了”的人，你有什么建议？

---

### (00:44:16) Jeremy Henrickson

**English:**
I think the thing that was most surprising to me the first time I did this back at Guidewire in the [inaudible 00:44:23] and remains the most surprising thing to most people every time I do this again, is that every country is unique. You can't just take your US-based approach and drop it into another country. Other countries find it insulting. It doesn't matter how much success you've had here. Everyone always believes rightly or wrongly that their local context is special. And you have to respect that.

**中文翻译:**
我认为，我第一次在 Guidewire 做这件事时最令我惊讶的，以及现在每次我再做这件事时依然令大多数人最惊讶的，就是每个国家都是独特的。你不能直接把美国的做法搬到另一个国家。其他国家会觉得这是一种冒犯。无论你在美国取得了多大的成功，每个人总是（无论对错）认为他们的当地环境是特殊的。你必须尊重这一点。

---

### (00:45:08) Jeremy Henrickson (Continued)

**English:**
And it comes down to little things like they're being a you in color or not. Or if you ever see a demo delivered to somebody in another country where they see a detailed screen about a person and it includes a social security number, it's like that you immediately lose credibility. Doesn't matter how good all the rest of your stuff is. And I think that that is consistently the thing that I think is most surprising to people is the degree to which that's true, which seems obvious in retrospect. If you took a German system or something and demoed it in the United States with poorly translated stuff, we would think it would suck too. But it's not, it's really hard to adapt to that mindset. And so it takes just a lot of energy to overcome that organizationally.

**中文翻译:**
这归结为一些小事，比如“color”里有没有那个“u”。或者，如果你给另一个国家的人做演示，当他们看到一个人的详细信息屏幕，上面却显示着（美国的）社会安全号码（SSN），你立刻就会失去公信力。无论你的其他东西做得多好都没用。我认为人们始终感到最惊讶的就是这种真实程度，虽然回想起来这似乎显而易见。如果你拿一个德国系统在美国演示，里面全是蹩脚的翻译，我们也会觉得它很烂。但要适应这种思维方式真的很难，需要花费大量的精力在组织层面去克服。

---

### (00:45:32) Lenny

**English:**
Makes tons of sense. I'm going to go in a different direction now. Frameworks. So I know that you're not a huge fan of frameworks. We were chatting about this before we started recording. And so I'm curious just to hear your perspective on why you're maybe not a fan of frameworks and then also just how you crystallize processes and concepts for your team if you're not just like, Hey, here's our framework you should use.

**中文翻译:**
非常有道理。我现在换个方向。聊聊框架（Frameworks）。我知道你不是框架的狂热粉丝，我们在录音前聊过这个。所以我很好奇你的观点，为什么你可能不喜欢框架？如果你不只是说“嘿，这是你应该使用的框架”，那你又是如何为团队固化流程和概念的？

---

### (00:45:54) Jeremy Henrickson

**English:**
Look, I think frameworks are very helpful. So I'm not exactly anti-framework, but I am anti-process as a substitution for deep product thinking, right? So I like to have just enough process to create a frame so that the right decisions can happen and know more. And I think there's a danger, especially as companies scale, that you end up saying, well, if only we categorize everything correctly and Jira, like we will be able to make really good prioritization decisions. So I'm like, sure, extremely helpful to have clear categorization and things that Jira doesn't have like data and analysis and to be able to do all of that stuff. But what you really need to do is decide important to build and then have a way to build it really efficiently.

**中文翻译:**
听着，我认为框架非常有帮助。所以我并不是完全反对框架，但我反对用“流程”来替代“深度的产品思考”。我喜欢用刚好足够的流程来创建一个框架，以便做出正确的决策，仅此而已。我认为存在一种危险，特别是随着公司规模的扩大，你最终会说：“好吧，只要我们在 Jira 里把所有东西都分类正确，我们就能做出非常好的优先级决策。”我会觉得，当然，拥有清晰的分类和 Jira 所没有的数据分析能力是非常有帮助的。但你真正需要做的是决定什么是重要的并去构建它，然后找到一种极其高效的构建方式。

---

### (00:46:47) Jeremy Henrickson (Continued)

**English:**
And so I think the right answer, the right amount of process for any given team is like, or the right framework for any team is really just dependent on their specific life cycle. So you won't see me saying like, oh, we need to use this scrum thing or that combine thing, or whatever the latest, newest thing is. It's like, don't care about any of that. What I care is about something that's going to enable this team in this context at this point in their life cycle to build the right thing as efficiently as possible. And I'm fine if those are different for different teams. And the only place I care about unification is one on the quarterly planning process. And two, everything does need in fact to be in Jira because otherwise, you can't rationalize about what's actually getting done in not.

**中文翻译:**
所以我认为，对于任何特定团队来说，正确的流程量或正确的框架，实际上取决于他们具体的生命周期。所以你不会看到我说：“噢，我们需要使用 Scrum 或 Kanban，或者任何最新的玩意儿。”我根本不在乎那些。我关心的是，在当前的背景下、在他们生命周期的这个阶段，什么能让这个团队尽可能高效地构建正确的东西。如果不同团队的方式不同，我也没意见。我唯一在乎统一的地方有两点：一是季度计划流程；二是所有事情确实都需要录入 Jira，否则你无法合理分析哪些工作真正完成了，哪些没有。

---

### (00:47:18) Lenny

**English:**
Is there a process or framework that you find is counterproductive that you're just stay away from this thing? We've had a lot of trouble with it, or generally, it's like let's just rethink everything ourselves.

**中文翻译:**
有没有什么流程或框架是你觉得适得其反、需要远离的？比如“我们在这上面吃过很多亏”，或者通常你会觉得“让我们自己重新思考一切”？

---

### (00:47:31) Jeremy Henrickson

**English:**
No, I don't find one to be particular, I don't consistently found one to be particularly problematic. So I think any framework sort of has its place, the right place, right time. I think there's danger any one time somebody like dogmatically says, I think we should use process X because that's almost never the right answer in my experience. I think there are places where that can differ. Like you start a company on the basis of process X and everyone's bought into that process and everyone understands it. I think they can be really, really great. And on the engineering side, I think this is hugely valuable. It's like test driven-development, first line of code's going to be a test, not the actual thing. Like fantastic, very supportive of all that. I think it's kind of different in the product world.

**中文翻译:**
没有，我没发现哪个框架是特别有问题的。我认为任何框架都有其适用的地点、时间和场合。我认为危险在于有人教条式地说：“我认为我们应该使用流程 X”，根据我的经验，这几乎永远不是正确的答案。我觉得有些情况可能不同，比如你从一开始就基于流程 X 创立公司，每个人都认同并理解这个流程，那可能会非常棒。在工程方面，我认为这非常有价值，比如测试驱动开发（TDD），第一行代码是测试而不是功能代码，这太棒了，我非常支持。但在产品世界里，情况有点不同。

---

### (00:48:08) Lenny

**English:**
If you had to compare the way Coinbase builds product process-wise or just product development to Rippling, what would you say are the bigger differences?

**中文翻译:**
如果要比较 Coinbase 和 Rippling 在产品构建流程或产品开发方面的差异，你会说最大的不同是什么？

---

### (00:48:17) Jeremy Henrickson

**English:**
I think the differences are largely born of the different domains. So crypto, as we talked about earlier, really hard to predict what's going on. There's all these questions about what's the future of crypto, what's going to matter, what do we even need to build? What's going to survive? And so the process we had at Coinbase run, having those debates and getting to a decision and disagreeing, committing. And then from an execution point of view, being able to move fast. That was the trick at Coinbase. Here we know the things that we need to build at a high level. And the trick is how do we really differentiate it on the basis of these amazing platform capabilities we have? Or how do we have to evolve those platform capabilities in order to continue to build something that's just discontinuously better than everything that's out there? And that yields a different decision-making process. So for me, it's the mental model is actually of how I approach those things with the same, but they just yield different results in the actual making of the software.

**中文翻译:**
我认为差异主要源于不同的领域。正如我们之前聊到的，加密货币很难预测。关于加密货币的未来、什么才是重要的、我们到底需要构建什么、什么能存活下来，存在着各种疑问。所以我们在 Coinbase 的流程是：进行辩论，做出决定，即使有分歧也要执行（disagree and commit）。从执行的角度来看，要能快速行动。那是 Coinbase 的诀窍。而在 Rippling，我们在高层面上知道需要构建什么。诀窍在于：我们如何基于这些惊人的平台能力来实现真正的差异化？或者我们如何演进这些平台能力，以便持续构建出比市面上所有东西都好得多的产品？这产生了一种不同的决策过程。所以对我来说，处理这些问题的心智模型其实是一样的，只是在实际制作软件时产生了不同的结果。

---

### (00:49:12) Lenny

**English:**
What is that actual difference? Do you find day-to-day? Is it timeline differences? Is it how quickly, I don't know the way you structure, how far out you plan, what do you find is the concrete difference as a result?

**中文翻译:**
那具体的差异是什么？在日常工作中，是时间表的差异吗？还是行动的速度？或者是你们组织架构的方式、计划的长短？你发现结果上最具体的差异是什么？

---

### (00:49:25) Jeremy Henrickson

**English:**
I think the difference is in the day-to-day velocity of decision-making, because we can, Rippling, if you're on, I don't know, pick a random team. If you're on the device management team, you know what you got to do, right? There's no ambiguity. You're not debating about whether Mac or Windows is going to exist in the future. There's none of that cognitive dissonance. There is, we need to build this. It's hard to figure out how we need to build this, right? Because there's all these different things that we could leverage, but we need to basically get this done.

**中文翻译:**
我认为差异在于日常决策的速度。因为在 Rippling，如果你在——随便选个团队——比如设备管理团队，你知道自己要做什么，对吧？没有歧义。你不需要争论 Mac 或 Windows 未来是否还会存在。没有那种认知失调。目标就是：我们需要构建这个。虽然弄清楚“如何构建”很难，因为有很多可以利用的东西，但基本上我们就是要完成它。

---

### (00:49:58) Jeremy Henrickson (Continued)

**English:**
And so the kind of total velocity I would say is higher here, which does not say people work harder or less are at Columbia. Columbia was an amazingly fast environment, but it was also subject to the fact that you just don't know what the crypto markets are going to do, and you have to be incredibly reactive to that. And so I think maybe that's the one thing, like the reactivity to the environment and the crypto environment, what's going on, and the uncertainty of the regulatory environment, all that stuff. We got really, really, really good at handling those things really rapidly, which is something that we need to handle somewhat less [inaudible 00:50:34].

**中文翻译:**
所以我认为这里的总速度更高。这并不是说人们工作更努力，或者 Coinbase（Jeremy 误说成了 Columbia）的人工作不努力。Coinbase 是一个极其快速的环境，但它也受限于你不知道加密市场会发生什么，你必须对此做出极快的反应。所以我觉得可能就是这一点：对环境的反应能力。在加密环境中，面对监管环境的不确定性等各种状况，我们变得非常非常擅长快速处理这些事情，而在 Rippling，我们处理这类事情的需求相对少一些。

---

### (00:50:33) Lenny

**English:**
Sounds quite stressful at Coinbase.

**中文翻译:**
听起来在 Coinbase 压力很大。

---

### (00:50:38) Jeremy Henrickson

**English:**
Yeah, I mean it was fun. Yes, it was stressful. I mean, every job I've ever had has been stressful, but in its own unique way. But all of that stress I think is in the shape of a problem, that's in the context of a problem that's really interesting. I mean that's why I stayed at these places. But yeah, it's stressful.

**中文翻译:**
是的，但很有趣。确实很有压力。我做过的每一份工作都有压力，只是方式独特。但我认为所有的压力都源于问题本身，而这些问题都非常有趣。这就是我留在这些地方的原因。但是，是的，压力很大。

---

### (00:51:00) Lenny

**English:**
And looking back, what a joy.

**中文翻译:**
回想起来，也是一种快乐。

---

### (00:51:02) Jeremy Henrickson

**English:**
Yeah. No, there are very good memories. I look back, I don't really, I remember the stress, but I don't like re-experience it, right. I remember foraging these relationships and building these amazing products that I've been so lucky to be a part of. And so I have almost only good memories of the places I've been.

**中文翻译:**
是的。不，那是非常美好的回忆。我回首往事，虽然记得压力，但我不会重新体验那种压力。我记得建立的那些关系，以及我有幸参与构建的那些了不起的产品。所以我对我待过的地方几乎只有美好的回忆。

---

### (00:51:21) Lenny

**English:**
That's what I find too. You go through these hardships and then you look back and you're like, wow, that was so cool. But assuming they go well, assuming the company works out and it feels like it was successful. A lot of times you're at a startup, your life sucks for two years and it doesn't work out and that there is a lot of upside and good memories to that, but it's less glorious.

**中文翻译:**
我也深有同感。你经历了这些艰辛，然后回首往事，你会觉得：“哇，那太酷了。”但前提是事情进展顺利，公司成功了。很多时候你在一家初创公司，生活糟糕了两年，结果还没成，虽然那也有很多收获和美好回忆，但就没那么辉煌了。

---

### (00:51:41) Jeremy Henrickson

**English:**
Yeah, that's fair though. I mean, the first company I was really at out of school's company called Reactivity back in internet one era, and we were trying to figure out how does this internet thing work and how do we start companies on the basis of these tech new technologies and how do we help other companies build stuff and figure it out? And that company fundamentally didn't work out, ultimately got kind of spun itself out and got acquired, which was great, but it was this extraordinary set of people that I was so lucky to work with and I loved all the time I spent there and it was foundational to everything else I ever did. And so even though that effort didn't pay off in the traditional set, the value of the learnings I had there and then the people I had a chance to work with was just really exceptional. So I feel very lucky.

**中文翻译:**
是的，这很公平。我毕业后真正待的第一家公司叫 Reactivity，那是互联网 1.0 时代。我们当时在试图弄清楚互联网是怎么回事，如何基于这些新技术创立公司，以及如何帮助其他公司构建产品。那家公司从根本上说没成功，最终分拆并被收购了，这也很棒。但那是一群非凡的人，我有幸与他们共事，我热爱在那里的每一分钟，那是我后来所做一切的基础。所以即使那次尝试没有在传统意义上获得回报，我在那里学到的价值以及我有机会共事的人都是非常卓越的。所以我感到非常幸运。

---

### (00:52:30) Lenny

**English:**
That's a really good point actually. And I think I should correct even what I said that even when things don't work out, traditionally those experiences end up being incredibly valuable in all these unexpected ways.

**中文翻译:**
这确实是个很好的观点。我想我应该纠正我刚才说的话，即使事情在传统意义上没成，那些经历最终也会以各种意想不到的方式变得极其宝贵。

---

### (00:52:42) Jeremy Henrickson

**English:**
Yeah, 100%.

**中文翻译:**
是的，100%。

---

### (00:52:44) Lenny

**English:**
Yeah. Okay, so final topic. I want to talk about hiring product managers and interviewing. So you've hired a lot of PMs over the years. I'm curious, what's something you've learned about what to look for in product managers and also just in product leaders that other people may not be focused on as enough?

**中文翻译:**
好。最后一个话题，我想聊聊招聘产品经理和面试。这些年来你招了很多 PM。我很想知道，关于在产品经理以及产品领导者身上寻找什么特质，你学到了什么？有哪些是别人可能关注不够的？

---

### (00:53:00) Jeremy Henrickson

**English:**
I mean, I don't know that I have any particularly special insight here. I think there's a couple things that I do ask that maybe are more of an emphasis because it's Rippling than not. But the first of those is when people are going through our process, there's a part where they do this case study and an important part of the case study is that it's actually too complex for people to have all of the answers upfront. There's just the space of the problem is too large to do that, which means that in the interview there's a lot of opportunities or in the case study there's a lot of opportunities. So just ask ad hoc questions or to change one assumption. And seeing how people react to that is really indicative of how deeply they understand a new problem or how quickly or how mentally agile they are.

**中文翻译:**
我不知道我是否有什么特别独特的见解。但有几件事我确实会问，也许是因为在 Rippling，我们会更强调这些。第一点是，在我们的面试流程中，有一个案例研究环节。这个案例研究的一个重要部分是：它实际上太复杂了，以至于人们无法预先准备好所有答案。问题的空间太大了。这意味着在面试或案例研究中有很多机会可以提出即兴问题，或者改变一个假设。观察人们对此的反应，能很好地说明他们对新问题的理解深度，以及他们的反应速度或思维敏捷度。

---

### (00:53:47) Jeremy Henrickson (Continued)

**English:**
And some people are extremely good at that here in assumption and they blink a couple times. They're like, oh, well that has these 400 implications. And they just start rattling them off. And some people get really flummoxed. I mean obviously for our environment, that former is really, really important to us. I think the other thing that really matters to me is the insightfulness of questions that people ask, which is indicative of number one, their actual interest in the job. People tend to ask better questions when they're more excited about working at a place and done their research and are asking people about it. And also the quality of those questions can vary quite dramatically. And that's okay. I don't expect the quality to be the same all the time, but sometimes people ask a question, I'm like, "Oh man, I would've never thought to ask that question. That's such an insightful question." And then I pause and I have to think about my answer a little bit. And so it kind of pushes me to be a little bit better. And when that happens, I know I usually have pretty good candidate on my hands.

**中文翻译:**
有些人非常擅长这个：听到一个假设，眨两下眼，然后说：“噢，那会产生这 400 个影响。”然后就开始滔滔不绝。而有些人则会变得非常慌乱。显然，对于我们的环境来说，前者对我们非常重要。我认为对我来说另一件非常重要的事情是人们提问的深刻程度。这反映了：第一，他们对这份工作的真实兴趣。当人们对在某个地方工作感到兴奋、做了研究并向人请教时，往往会提出更好的问题。此外，这些问题的质量差异可能非常大。这没关系，我不指望质量总是一样，但有时人们问了一个问题，我会想：“天哪，我从来没想过会问这个问题，这太深刻了。”然后我会停下来，思考一下我的答案。这在某种程度上也促使我变得更好。当这种情况发生时，我知道我面前通常是一个非常优秀的候选人。

---

### (00:54:42) Lenny

**English:**
Is there an example of someone asking a really good question that comes to mind that you think back to and like, Oh wow, that was great.

**中文翻译:**
你能想到某个问了非常好问题的人的例子吗？让你回想起来觉得“哇，那太棒了”。

---

### (00:54:49) Jeremy Henrickson

**English:**
I remember about three years ago I was interviewing a guy named Kyle Boston and Kyle is now runs our platform product organization. And I can't remember the specific question he asked, but it had something to do with, wait a minute, if you have all these products and you have this employee system of record thing underneath it, we be thinking about how to create these various pillars of underlying platform technology, things like [inaudible 00:55:22] all this stuff. And this was before we fully formalized the concept of our platform beyond the kind of employee system of record.

**中文翻译:**
我记得大约三年前，我面试了一个叫 Kyle Boston 的人，他现在负责我们的平台产品组织。我不记得他问的具体问题了，但大概是关于：“等一下，如果你有所有这些产品，底层又有这个员工记录系统，我们是否应该考虑如何创建这些各种底层平台技术的支柱……”之类的事情。那是在我们完全正式化“平台”概念（超越单纯的员工记录系统）之前。

---

### (00:55:29) Jeremy Henrickson (Continued)

**English:**
And I remember thinking, yes, we should, and that had entered our minds before, but the fact that somebody which who had almost no context on the company, that's what was impressive about this question. It's like, man, you've been thinking about Rippling for a couple weeks while you're interviewing with a bunch of other companies or whatever. And you've thought about it deeply enough to have this insight into the nature of the platform that we're building immediately gave me a bunch of confidence in his ability to think through the sorts of things we need him to think through.

**中文翻译:**
我记得当时在想：“是的，我们应该这样做。”虽然我们之前也想到过，但一个几乎没有公司背景的人能提出这个问题，这正是令人印象深刻的地方。就像是：“伙计，你在面试其他一堆公司的同时，只思考了 Rippling 几周，你就已经思考得足够深入，对我们正在构建的平台本质有了这种洞察。”这立刻让我对他思考我们需要他思考的事情的能力充满了信心。

---

### (00:55:58) Lenny

**English:**
And I think it touches on PMs need to be business leaders and great questions are often about the business and the future of the business and how to make it run more efficiently and this, and there's a product org element to it. But I find that that's a really underappreciated element of PM interviews, just thinking about the bigger business, not just the PM product.

**中文翻译:**
我认为这触及了 PM 需要成为业务领导者这一点。伟大的问题通常是关于业务、业务的未来以及如何让它运行得更高效。虽然其中有产品组织的元素，但我发现这是 PM 面试中一个非常被低估的元素：思考更大的业务，而不仅仅是 PM 负责的那个产品。

---

### (00:56:19) Jeremy Henrickson

**English:**
For me it's two things. It's thinking about the bigger business and having the context around whether it's revenue questions or strategy questions, but also the detailed questions. It's like, oh wait a minute. The implication of this thing that I'm getting asked or of this thing with Jeremy that you said earlier is all of these things. And their ability to understand that this isn't a simple business, it's really hard, it's really complex. And the ability to have these insights to help them think through those details is really cool.

**中文翻译:**
对我来说是两件事：思考更大的业务，并拥有关于收入或战略问题的背景；同时也要有细节问题。就像是：“噢，等一下，你刚才问我的这件事，或者 Jeremy 你之前说的那件事，其影响是所有这些东西。”他们能够理解这不一个简单的业务，它非常困难、非常复杂。拥有这些洞察力来帮助他们思考这些细节，真的很酷。

---

### (00:56:49) Lenny

**English:**
You talked about this prompt you give product managers not to give away what you actually asked these days, but is there an example of a prompt that you've given in the past or you think is a good example of a type of prompt to give a product manager candidate.

**中文翻译:**
你提到了给产品经理的提示（prompt），为了不泄露你现在实际问的问题，你能举一个你过去给过的例子，或者你认为适合给 PM 候选人的提示类型吗？

---

### (00:57:01) Jeremy Henrickson

**English:**
In terms of a general kind of approach, I think a prompt should always reflect the actual business that they're going to kind of come into. So when we do, so our process overall is actually quite short. It's basically get in contact with us somehow, eventually get connected with a hiring manager, have a conversation with them. Then more or less you have a conversation with me, which is a product discussion. And then we have a case study which follows that. That's the whole process. Modulo, other conversations around the edges. And the questions that matter are around how do people think through that product discussion, which is relevant to our business. How do people think through that case study? That's number one. And the second thing is there's always a part of my interview, which is maybe sounds very simple, but it's just like, Hey, what questions do you have for me?

**中文翻译:**
就一般方法而言，我认为提示应该始终反映他们将要进入的实际业务。我们的整体流程其实很短：基本上是通过某种方式联系我们，最终与招聘经理对接并交谈。然后或多或少会和我谈一次，这是一个产品讨论。接着是一个案例研究。这就是全部流程，除了边缘的一些其他对话。重要的问题在于：人们如何思考那个与我们业务相关的产品讨论？人们如何思考那个案例研究？这是第一点。第二点是，我的面试中总有一个环节，听起来可能很简单，就是：“嘿，你有什么问题想问我吗？”

---

### (00:57:53) Jeremy Henrickson (Continued)

**English:**
We actually do that before we do the product discussion. And that's an incredibly important question because it is again indicative of these things that people have thought through or not thought through or the depth that they're thinking or their interest in engagement in the role. And at that second discussion, it doesn't have to be perfect or anything, but it is a very strong signal when people, whether they've thought through a set of questions they want to ask or just on the fly generating them, you learn a lot about how people think about product, about what they're looking for, about what they like doing and not doing, just through those questions.

**中文翻译:**
我们实际上在进行产品讨论之前就会问这个问题。这是一个极其重要的问题，因为它再次表明了人们是否思考过这些事情、思考的深度，以及他们对这个角色的兴趣和投入程度。在第二次讨论中，不需要表现得完美，但当人们无论是预先想好了一系列问题，还是即兴提出问题，这都是一个非常强烈的信号。通过这些问题，你可以了解到很多关于人们如何思考产品、他们在寻找什么、他们喜欢做什么以及不喜欢做什么的信息。

---

### (00:58:30) Lenny

**English:**
For PMs that are maybe in their early career that are listening to this, what advice would you give them to help them accelerate and advance their career most in the early part of their career?

**中文翻译:**
对于正在听节目的职业生涯早期的 PM，你会给他们什么建议，帮助他们在职业生涯早期最大限度地加速和推进自己的职业发展？

---

### (00:58:41) Jeremy Henrickson

**English:**
Be humble. Being a product person means that by definition you're living in a world where no one knows the right answer yet because if somebody did, they would've already built it. And so having, no matter how smart you are, there's a lot of smart people out there. There's always stuff you don't know. There's always people who are going to know things that you don't know. And it is only through that acknowledgement that you can actually have the humility to say, I'm open to absorbing all of this stuff, I don't know. And open to synthesizing all this stuff and coming to different conclusions.

**中文翻译:**
保持谦逊。作为一名产品人，意味着你定义上就生活在一个还没有人知道正确答案的世界里，因为如果有人知道，他们早就把它造出来了。所以，无论你有多聪明，外面总有很多聪明人。总有你不知道的事情，总有人知道你不知道的事情。只有通过承认这一点，你才能真正拥有谦逊的态度说：“我愿意吸收所有这些我不了解的东西，愿意综合这些信息并得出不同的结论。”

---

### (00:59:12) Jeremy Henrickson (Continued)

**English:**
And so I found that that humility is one of the biggest differentiators in early career leaders who are able to let go of how awesome they were in school or in their first job or whatever. I mean, I had to do this and realize the job is always hard and the job is always about discovery every single day. And if you can maintain that curiosity and elasticity of thought and creativity and light coming solutions could be awesome. But if you close yourself off to that and think you always have the right answer, then there's like no hope.

**中文翻译:**
我发现，谦逊是职业生涯早期领导者最大的差异化特质之一。他们能够放下自己在学校或第一份工作中表现得多么出色。我的意思是，我也必须这样做，并意识到工作总是困难的，工作每天都关乎探索。如果你能保持那种好奇心、思维的弹性和创造力，那么想出的解决方案可能会非常棒。但如果你对自己封闭，认为自己总是有正确答案，那就没希望了。

---

### (00:59:49) Lenny

**English:**
This touches on another principle that I still have sitting on my screen here, which is great leaders change their minds a lot or just change their minds.

**中文翻译:**
这触及了另一个原则，我屏幕上还显示着它，即“伟大的领导者经常改变主意（Great leaders change their minds a lot）”，或者只是“愿意改变主意”。

---

### (00:59:57) Jeremy Henrickson

**English:**
Yeah. Willing to look at new information and say, my mental model is adjusted by that or I was wrong very simply. I mean I think it's also important to be operating in an environment where you're allowed to say that you're wrong, right? Everyone's wrong sometimes. I mean be right a lot, but everyone's wrong sometimes. Right? And being in be able to be an environment where you can just say, yep, I was wrong. Here's the way in which I was wrong. Let's move on, is incredibly powerful.

**中文翻译:**
是的。愿意审视新信息并说：“我的心智模型因此调整了”，或者很简单地说“我错了”。我认为在一个允许你说“我错了”的环境中工作也很重要，对吧？每个人都会犯错。虽然要“经常正确”，但每个人有时都会错。能够在一个你可以直接说“是的，我错了，我错在这些地方，让我们继续前进”的环境中，是非常强大的。

---

### (01:00:19) Lenny

**English:**
The final question you've brought up Parker a number of times and something that is clear about him is that he's a very product-minded founder. He has a lot of strong opinions about what product should be. And as a product leader with a founder like that is often a challenging place to be similar to being the first PM at a startup and the founder has strong opinions about product. So my question is just what have you learned about being successful as a product leader with a founder that has very strong opinions about what the product should be?

**中文翻译:**
最后一个问题，你多次提到了 Parker。关于他很明显的一点是，他是一个非常有产品头脑的创始人。他对产品应该是什么样有很多强烈的见解。作为一名产品领导者，与这样的创始人共事通常很有挑战性，类似于成为初创公司的第一个 PM，而创始人对产品有强烈意见。所以我的问题是，在与一位对产品有极强主见的创始人共事时，关于如何成为一名成功的产品领导者，你学到了什么？

---

### (01:00:47) Jeremy Henrickson

**English:**
Yeah, no, that's a great question. So I think you've got to be adaptable, right? It's like any other relationship, right? You have to understand what the nature of that relationship is, where that person's going to care, where you're going to care, the ways in which you can challenge each other. I think fundamentally you need to make sure that person is willing to be challenged, right? So I've seen product leaders or CEOs who are kind of unwilling to be challenged and I wouldn't be able to work with those people.

**中文翻译:**
是的，这是个好问题。我认为你必须具备适应能力。这就像任何其他关系一样，你必须理解这种关系的本质：那个人会在意什么，你会在意什么，以及你们可以互相挑战的方式。我认为从根本上说，你需要确保那个人愿意接受挑战。我见过一些不愿接受挑战的产品领导者或 CEO，我无法与那样的人共事。

---

### (01:01:17) Jeremy Henrickson (Continued)

**English:**
But yeah, Parker is incredibly strongly opinionated, but he's also incredibly informed, which makes for some really, really great debates. And I've just found that whatever, and it's not even CEO, but whatever a manager's idiosyncrasies are, you have to find a way to work with those. And I think that adaptability, like I'm just sort of, I like being a moldable puzzle piece where I can just fit in. I think that's actually one of my core skills. And so that's worked out for me and Parker and I before I started developing a deep foundation of respect, which is extremely important to building that. And over the years it's just gotten deeper and deeper and we don't always agree, but when we can have a totally reasonable discussion about it, and that's what makes it fun.

**中文翻译:**
但是，是的，Parker 确实非常有主见，但他也非常博学，这促成了一些非常棒的辩论。我发现，无论一个管理者的特质是什么（甚至不一定是 CEO），你都必须找到一种与之合作的方式。我认为那种适应性——我就像是那种可塑的拼图块，可以把自己嵌入进去。我认为这实际上是我的核心技能之一。这对我很有用，在我和 Parker 开始建立深厚的尊重基础之前（这对建立关系极其重要）。多年来，这种尊重越来越深，我们并不总是意见一致，但我们可以进行完全合理的讨论，这正是乐趣所在。

---

### (01:02:06) Lenny

**English:**
Adaptability actually is, I took a strength finder test once of finding my own strengths and that was my number one strength is I'm [inaudible 01:02:14] I think we share that.

**中文翻译:**
适应性实际上也是我的强项。我曾经做过一次优势识别器（Strength Finder）测试，我的第一大优势就是适应性。我想我们有共同点。

---

### (01:02:15) Jeremy Henrickson

**English:**
That's excellent.

**中文翻译:**
太棒了。

---

### (01:02:15) Lenny

**English:**
Yeah, seems like an important attribute for being in a place in. Well with that, we've reached our very exciting lightning round. I've got six questions for you if you're ready.

**中文翻译:**
是的，这似乎是身处那个位置的重要属性。好了，现在进入我们非常令人兴奋的闪电轮环节。如果你准备好了，我有六个问题要问你。

---

### (01:02:25) Jeremy Henrickson

**English:**
All right, I'm ready. Hit me.

**中文翻译:**
好的，准备好了。来吧。

---

### (01:02:27) Lenny

**English:**
Here we go. What are two or three books that you've recommended most to other people?

**中文翻译:**
开始。你向别人推荐最多的两三本书是什么？

---

### (01:02:31) Jeremy Henrickson

**English:**
Well, first is my favorite series of books ever, which is the Baroque Cycle by Neal Stephenson. It's a nine-volume epic or three-volume, nine-book epic depending on how you want to look at it. But it's about the time just before and into the enlightenment, historical fiction, a lot of fun. And I also love the Culture series by Iain Banks, which is just super fun, far-future sort of universe that I've really enjoyed.

**中文翻译:**
首先是我最喜欢的系列丛书，尼尔·斯蒂芬森（Neal Stephenson）的《巴洛克三部曲》（The Baroque Cycle）。这是一部九卷本的史诗（或者说是三卷九册）。它是关于启蒙运动前夕及期间的历史小说，非常有趣。我也很喜欢伊恩·班克斯（Iain Banks）的《文明》（Culture）系列，那是一个非常有趣的远未来宇宙设定，我非常喜欢。

---

### (01:02:59) Lenny

**English:**
What's a favorite recent movie or TV show?

**中文翻译:**
最近最喜欢的电影或电视剧是什么？

---

### (01:03:01) Jeremy Henrickson

**English:**
Watched The Last of Us, was an avid fan of the game and I thought they did a really nice adaptation. Favorite mov, like I guess, recent movie, it's not that recent, but I really like Tenet, which I thought was a, I was impressed with their ability to go there and make that movie and I just really enjoyed it end to end.

**中文翻译:**
看了《最后生还者》（The Last of Us），我是这款游戏的忠实粉丝，我觉得他们改编得非常好。至于电影，虽然不算太新，但我非常喜欢《信条》（Tenet）。我对他们制作那部电影的能力印象深刻，我从头到尾都很享受。

---

### (01:03:23) Lenny

**English:**
It kind of ended, but we had a drinking game anytime someone mentioned Last of Us, which took over White Lotus. I'm going to drink some tea right here.

**中文翻译:**
虽然热度快过了，但我们曾有个喝酒游戏：只要有人提到《最后生还者》（它接替了《白莲花度假村》的热度），我们就喝一杯。我现在就喝口茶。

---

### (01:03:30) Jeremy Henrickson

**English:**
Okay, fair enough. I'll try. I've only got water normally I got tea, but water today.

**中文翻译:**
好吧，公平。我试试。我通常喝茶，但今天只有水。

---

### (01:03:33) Lenny

**English:**
That works. But it's interesting, it hasn't come up often, so I think maybe we end that for now and see what the new pattern emerges. And then Tenant feels like, I was just thinking it feels like a compound movie, compound startup as a movie, a movie is very complicated too to stay-

**中文翻译:**
水也行。很有趣，这个话题最近不常出现，所以我想也许我们可以暂时结束这个游戏，看看会有什么新趋势。我觉得《信条》就像是一部“复合型电影”，就像复合型初创公司一样，电影也非常复杂，需要保持专注……

---

### (01:03:50) Jeremy Henrickson

**English:**
Yeah, That's why I enjoyed it. I like trying to figure out the multi-timeline chart in my head as the movie progressed.

**中文翻译:**
是的，这就是我喜欢它的原因。我喜欢在电影进行时，在脑子里试图理清那个多条时间线的图表。

---

### (01:03:56) Lenny

**English:**
The puzzle piece within you trying to find all the puzzle pieces.

**中文翻译:**
你内心的那个“拼图块”在试图找到所有的拼图。

---

### (01:03:59) Jeremy Henrickson

**English:**
Yeah, for sure.

**中文翻译:**
没错，肯定是的。

---

### (01:04:00) Lenny

**English:**
What is a favorite interview question you like to ask? You already maybe answered this, but anything else come to mind?

**中文翻译:**
你最喜欢的面试问题是什么？你可能已经回答过了，还有别的吗？

---

### (01:04:06) Jeremy Henrickson

**English:**
I think I did, no, my favorite one is What questions do you have for me by far?

**中文翻译:**
我想我已经说过了。到目前为止，我最喜欢的问题就是：“你有什么问题想问我吗？”

---

### (01:04:09) Lenny

**English:**
Great. What are some favorite products you've recently discovered that you love?

**中文翻译:**
太棒了。你最近发现了哪些让你爱不释手的产品？

---

### (01:04:14) Jeremy Henrickson

**English:**
I guess I'll just mention, I don't know if I go as far as I call these favorite products, but there's two that come to mind. My wife's computer broke the other day and I realized it was the CPU cooler that went bad and the Corsair H60 CPU cooler was super easy to use and really adaptable to lots of motherboards. I thought that was great. My other favorite product is the one I'm wearing in my ears right now, which my first pair of nice headphones I ever bought died late last week, and had to do some really quick research into my new favorite pair of headphones. And these Focal Bathys are super nice. I'm a bit of an audio file. I like to listen to classical music and ambient stuff, so we need a lot of dynamic range and noise cancellation and these have been great so far.

**中文翻译:**
我想我会提到两个，虽然不一定称得上“最爱”，但脑子里首先想到了它们。前几天我妻子的电脑坏了，我发现是 CPU 散热器坏了，海盗船（Corsair）H60 散热器超级好用，而且非常适配各种主板，我觉得很棒。另一个我喜欢的产品是我现在耳朵里戴的。我买的第一副好耳机上周末坏了，我不得不快速研究并买了一副新的。这副 Focal Bathys 非常棒。我有点发烧友倾向，喜欢听古典音乐和氛围音乐，所以需要很大的动态范围和降噪功能，目前为止它们表现非常出色。

---

### (01:04:57) Lenny

**English:**
Okay, so what are they called?

**中文翻译:**
好，它们叫什么名字？

---

### (01:04:59) Jeremy Henrickson

**English:**
Focal, I think it's Bathys, B-A-T-H-Y-S. Okay.

**中文翻译:**
Focal，我想是 Bathys，拼写是 B-A-T-H-Y-S。

---

### (01:05:04) Lenny

**English:**
And has there a specific model or there's like that one?

**中文翻译:**
有具体的型号吗？还是就这一款？

---

### (01:05:06) Jeremy Henrickson

**English:**
That's it.

**中文翻译:**
就这一款。

---

### (01:05:06) Lenny

**English:**
Okay.

**中文翻译:**
好的。

---

### (01:05:07) Jeremy Henrickson

**English:**
You'll know it when you see it.

**中文翻译:**
你一看到就会知道的。

---

### (01:05:09) Lenny

**English:**
Okay. We will link to them in show notes, so maybe I'll get one. What's something relatively minor you've changed in the way that you built product that has had a lot of impact on your team's ability to execute?

**中文翻译:**
好的。我们会把链接放在节目介绍里，也许我也会买一副。在构建产品的方式上，你做了哪些相对较小、但对团队执行能力产生重大影响的改变？

---

### (01:05:20) Jeremy Henrickson

**English:**
Maybe the most recent innovation sort of at Rippling was the kind of introduction of what I'm calling imperatives. These things that whether they come bottom up or top down are things that like everybody across the entire product and engineering team needs to do and what's important about that list of things that are not on it. In a world where we could choose to do hundreds of things at once, being able to force rank that list of things, draw a line, say these are the ones everyone has to do, has created a lot more focus and clarity than we had before.

**中文翻译:**
也许 Rippling 最近的一个创新是引入了我称之为“必修课（imperatives）”的东西。这些事情无论是自下而上还是自上而下，都是整个产品和工程团队每个人都必须做的事情。而这份清单最重要的一点在于“哪些事情不在清单上”。在一个我们可以同时选择做几百件事的世界里，能够对清单进行强制排序，划定底线，说“这些是每个人都必须做的”，这比我们以前创造了更多的专注度和清晰度。

---

### (01:05:48) Lenny

**English:**
So imperatives are essentially here's the priorities for the next, say quarter six months here?

**中文翻译:**
所以“必修课”本质上就是未来一个季度或六个月的优先级？

---

### (01:05:53) Jeremy Henrickson

**English:**
Here are the priorities for everybody and now integrate that into your own team's priorities, right? So each team still is building their own priorities, but they have to factor in this set.

**中文翻译:**
这是每个人的优先级，现在请把它们整合进你各团队自己的优先级中。所以每个团队仍然在制定自己的优先级，但他们必须把这一组因素考虑进去。

---

### (01:06:05) Lenny

**English:**
How many of those do you usually have? This is awesome. I like this tip.

**中文翻译:**
通常有多少项？这太棒了，我喜欢这个建议。

---

### (01:06:09) Jeremy Henrickson

**English:**
It depends on what level of granularity you want to talk about them at, like maybe 10, right? It's a lot. We're going through between globalization and large improvements of the platform and a bunch of other large companies. All these things, it creates a bunch of things that just have to be cross-team simultaneously. I think it's pretty natural part of a company's evolution and we're just in that part of the cycle, so used it.

**中文翻译:**
这取决于你想在什么粒度上讨论它们，大概 10 个左右？挺多的。我们正在经历全球化、平台的大幅改进以及服务更多大公司。所有这些事情产生了一堆必须同时跨团队协作的任务。我认为这是公司发展的自然阶段，我们正好处于这个周期，所以就采用了这种方式。

---

### (01:06:33) Lenny

**English:**
Awesome. Final question, what's a question I should have asked you that I didn't ask you?

**中文翻译:**
太棒了。最后一个问题：有什么问题是我应该问你但没问的？

---

### (01:06:38) Jeremy Henrickson

**English:**
I guess, what do I do with my kids maybe? I have two kids, they're nine and six. What do I do with my kids? My son, I'm a big board gamer and while I didn't push it on him, my son, he will play board games morning to night. And so we play a lot of European strategy games together and my daughter's now getting old enough that she's getting into them too. And so we just finished as a family playing Pandemic Legacy and the reward tomorrow night as we get to start playing Gloomhaven. So that's going to be fun.

**中文翻译:**
我想，也许是“我平时和孩子们做些什么”？我有两个孩子，一个九岁，一个六岁。我平时做什么？我是一个资深的桌游玩家，虽然我没强迫他，但我儿子可以从早到晚玩桌游。所以我们一起玩很多德式策略游戏（Eurogames），我女儿现在也大到可以参与进来了。我们全家刚玩完《瘟疫危机：承传》（Pandemic Legacy），明晚的奖励是开始玩《幽港迷城》（Gloomhaven）。那一定会很有趣。

---

### (01:07:12) Lenny

**English:**
I don't know either game, sounds very hard and complicated.

**中文翻译:**
这两个游戏我都不认识，听起来非常难且复杂。

---

### (01:07:15) Jeremy Henrickson

**English:**
They're fun. They're fun.

**中文翻译:**
它们很有趣。真的很有趣。

---

### (01:07:17) Lenny

**English:**
Amazing. Jeremy, we covered a lot of topics. I feel like this is a compound podcast episode and so thank you for spending time with me. Thanks for being here. Two final questions, working folks, finding online if they want to reach out, learn more, and how can listeners be useful to you?

**中文翻译:**
太神奇了。Jeremy，我们涵盖了很多话题。我觉得这是一集“复合型播客节目”，非常感谢你花时间陪我。感谢你的到来。最后两个问题：如果大家想联系你或了解更多信息，可以在哪里找到你？以及听众可以如何帮助你？

---

### (01:07:32) Jeremy Henrickson

**English:**
Awesome. LinkedIn is the easiest way online and if what I've been talking about today sounds interesting to you, we're definitely hiring like senior entrepreneurial PMs. And so if those leadership principles on our website look interesting, I'd love to hear from you.

**中文翻译:**
太好了。LinkedIn 是最简单的在线联系方式。如果我今天谈论的内容听起来让你感兴趣，我们肯定在招聘资深的、具有创业精神的 PM。所以，如果你觉得我们网站上的那些领导力原则很有趣，我很期待收到你的消息。

---

### (01:07:46) Lenny

**English:**
What's the best way to explore those roles and apply?

**中文翻译:**
了解这些职位并申请的最佳途径是什么？

---

### (01:07:49) Jeremy Henrickson

**English:**
The website has by far the best channel. It gets to this right recruiter who will tell me about it right away.

**中文翻译:**
官网是目前为止最好的渠道。它会直接对接到合适的招聘人员，他们会立刻告诉我。

---

### (01:07:55) Lenny

**English:**
Great, rippling.com and there's probably a site for careers.

**中文翻译:**
太好了，rippling.com，上面应该有职业页面。

---

### (01:07:58) Jeremy Henrickson

**English:**
There is a career site on there that you, pretty easy to find.

**中文翻译:**
上面有一个职业站点，很容易找到。

---

### (01:08:00) Lenny

**English:**
Okay. Rolling to that in the show notes. Jeremy, thank you again for being here.

**中文翻译:**
好的。我们会把它放在节目介绍里。Jeremy，再次感谢你的到来。

---

### (01:08:04) Jeremy Henrickson

**English:**
Thanks so much for having me. This was a lot of fun.

**中文翻译:**
非常感谢邀请我。这真的很有趣。

---

### (01:08:06) Lenny

**English:**
Hi everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcast, Spotify, or your favorite podcast app. Also, please consider giving us a rating or a leaving review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
大家好。非常感谢收听。如果你觉得本期节目有价值，可以在 Apple Podcast、Spotify 或你喜欢的播客应用上订阅本节目。此外，请考虑给我们评分或留下评论，这能极大地帮助其他听众发现这个播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目再见。