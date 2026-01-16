# Kevin Weil - 双语对照

This is the complete bilingual transcript of **Lenny’s Podcast** featuring **Kevin Weil**, Chief Product Officer at OpenAI.

---

### [00:00:00] Kevin Weil

**English:**
The AI models that you're using today is the worst AI model you will ever use for the rest of your life, and when you actually get that in your head, it's kind of wild. Everywhere I've ever worked before this, you kind of know what technology you're building on, but that's not true at all with AI. Every two months, computers can do something they've never been able to do before and you need to completely think differently about what you're doing.

**中文翻译:**
你今天使用的 AI 模型将是你余生中使用过的最差的模型。当你真正意识到这一点时，会觉得这很疯狂。在我之前工作过的所有地方，你基本上知道自己是在什么样的技术基础上进行构建的，但在 AI 领域完全不是这样。每隔两个月，计算机就能做到一些以前从未实现过的事情，你必须完全改变对所做工作的思考方式。

---

### [00:00:21] Lenny Rachitsky

**English:**
You're chief product officer of maybe the most important company in the world right now. I want to chat about what it's just like to be inside the center of the storm.

**中文翻译:**
你是目前世界上也许是最重要的公司的首席产品官。我想聊聊处在风暴中心到底是什么样的感觉。

---

### [00:00:29] Kevin Weil

**English:**
Our general mindset is in two months, there's going to be a better model and it's going to blow away whatever the current set of limitations are. And we say this to developers too. If you're building and the product that you're building is kind of right on the edge of the capabilities of the models, keep going because you're doing something right. Give it another couple months and the models are going to be great, and suddenly the product that you have that just barely worked is really going to sing.

**中文翻译:**
我们的普遍心态是：两个月后，就会出现一个更好的模型，它将彻底打破目前的种种限制。我们也对开发者这么说：如果你正在构建的产品恰好处于模型能力的边缘，请坚持下去，因为你的方向是对的。再过几个月，模型就会变得非常出色，到那时，你那个现在勉强能运行的产品将会表现得非常惊艳。

---

### [00:00:51] Lenny Rachitsky

**English:**
Famously, you led this project at Facebook called Libra.

**中文翻译:**
众所周知，你曾在 Facebook 领导过一个名为 Libra 的项目。

---

### [00:00:56] Kevin Weil

**English:**
Libra is probably the biggest disappointment of my career. It fundamentally disappoints me that this doesn't exist in the world today because the world would be a better place if we'd been able to ship that product. We tried to launch a new blockchain. It was a basket of currencies originally. It was integration into WhatsApp and Messenger. I would be able to send you 50 cents in WhatsApp for free. It should exist. To be honest, the current administration is super friendly to crypto. Facebook's reputation is in a very different place. Maybe they should go build it now.

**中文翻译:**
Libra 也许是我职业生涯中最大的遗憾。让我深感失望的是，这个产品至今仍未在世界上存在，因为如果我们当时能发布它，世界会变得更美好。我们尝试推出一条新的区块链，最初它挂钩一篮子货币，并整合进 WhatsApp 和 Messenger。我本可以像发消息一样在 WhatsApp 上免费给你转账 50 美分。它理应存在。坦白说，现在的政府对加密货币非常友好，Facebook 的名声也处在完全不同的阶段。也许他们现在应该重新去把它做出来。

---

### [00:01:27] Lenny Rachitsky

**English:**
Today my guest is Kevin Weil. Kevin is chief product officer at OpenAI, which is maybe the most important and most impactful company in the world right now, being at the forefront of AI and AGI and maybe someday super intelligence. He was previously head of product at Instagram and Twitter. He was co-creator of the Libra Cryptocurrency at Facebook, which we chat about. He's also on the boards of Planet and Strava and the Black Product Managers Network and the Nature Conservancy. He's also just a really good guy and he has so much wisdom to share. We chat about how OpenAI operates, implications of AI and how we will all work and build product, which markets within the AI ecosystem, companies like OpenAI won't likely go after and thus are good places for startups to own. Also, why learning the craft of writing evals is quickly becoming a core skill for product builders, what skills will matter most in an AI era and what he's teaching his kids to focus on and so much more.

**中文翻译:**
今天的嘉宾是 Kevin Weil。Kevin 是 OpenAI 的首席产品官，这可能是目前世界上最重要、最具影响力的公司，处于 AI、AGI（通用人工智能）以及未来可能实现的超级智能的最前沿。他曾担任 Instagram 和 Twitter 的产品负责人，也是 Facebook Libra 加密货币的联合创始人，我们稍后会聊到这一点。他还是 Planet、Strava、黑人产品经理网络（Black Product Managers Network）和自然保护协会（Nature Conservancy）的董事会成员。他是一个非常棒的人，有很多智慧可以分享。我们将探讨 OpenAI 的运作方式、AI 对我们工作和构建产品的影响、AI 生态系统中哪些市场是 OpenAI 这类公司不太可能涉足的（因此是初创公司的机会）、为什么学习编写 Evals（评估集）正迅速成为产品构建者的核心技能、AI 时代哪些技能最重要、他教导孩子关注什么，以及更多内容。

---

### [00:02:24] Lenny Rachitsky (Intro & Ads)

**English:**
This is a very special episode and I am so excited to bring it to you. If you enjoy this podcast, don't forget to subscribe and follow it in your favorite podcasting app or YouTube. If you become an annual subscriber of my newsletter, you get a year free of Perplexity Pro, Linear, Notion Superhuman and Granola. Check it out at lennysnewsletter.com and click bundle. With that, I bring you Kevin Weil. This episode is brought to you by Eppo. Eppo is a next-generation A/B testing and feature management platform built by alums of Airbnb and Snowflake for modern growth teams... [Ad content omitted for brevity but translated in full below]

**中文翻译:**
这是一个非常特别的章节，我很高兴能呈现给大家。如果你喜欢这个播客，请不要忘记在订阅并关注。如果你成为我时事通讯的年度订阅者，你将免费获得一年的 Perplexity Pro、Linear、Notion、Superhuman 和 Granola。请访问 lennysnewsletter.com 并点击 bundle 查看。现在，让我们欢迎 Kevin Weil。本期节目由 Eppo 赞助。Eppo 是由 Airbnb 和 Snowflake 的校友为现代增长团队打造的下一代 A/B 测试和功能管理平台。Twitch、Miro、ClickUp 和 DraftKings 等公司都依赖 Eppo 来驱动他们的实验。实验对于推动增长和理解新功能表现越来越重要，Eppo 帮助你提高实验速度，同时解锁严谨的深度分析，这是其他商业工具无法做到的。

---

### [00:03:18] Lenny Rachitsky (Ads continued)

**English:**
When I was at Airbnb, one of the things that I loved most was our experimentation platform where I could set up experiments easily, troubleshoot issues, and analyze performance all on my own. Eppo does all that and more with advanced statistical methods that can help you shave weeks off experiment time and accessible UI for diving deeper into performance and out-of-the-box reporting that helps you avoid annoying prolonged analytic cycles. Eppo also makes it easy for you to share experiment insight with your team, sparking new ideas for the A/B testing flywheel. Eppo powers experimentation across every use case, including product, growth, machine learning, monetization, and email marketing. Check out Eppo at geteppo.com/lenny and 10X your experiment velocity. That's geteppo.com/lenny.

**中文翻译:**
当我在 Airbnb 时，我最喜欢的事情之一就是我们的实验平台，在那里我可以轻松地设置实验、排除故障并独立分析表现。Eppo 不仅能做到这些，还拥有先进的统计方法，可以帮你缩短数周的实验时间，其易用的 UI 可以深入挖掘表现，开箱即用的报告能帮你避免烦人的漫长分析周期。Eppo 还让你能轻松与团队分享实验洞察，激发 A/B 测试飞轮的新想法。Eppo 支持各种用例的实验，包括产品、增长、机器学习、商业化和邮件营销。请访问 geteppo.com/lenny 查看 Eppo，让你的实验速度提升 10 倍。

---

### [00:04:06] Lenny Rachitsky (Ads continued)

**English:**
This episode is brought to you by Persona, the adaptable identity platform that helps businesses fight fraud, meet compliance requirements, and build trust. While you're listening to this right now, how do you know that you're really listening to me, Lenny? These days, it's easier than ever for fraudsters to steal PII, faces and identities. That's where Persona comes in. Persona helps leading companies like LinkedIn, Etsy, and Twilio securely verify individuals and businesses across the world. What sets Persona apart is its configurability. Every company has different needs depending on its industry, use cases, risk tolerance and user demographics. That's why Persona offers flexible building blocks that allow you to build tailored collection and verification flows that maximize conversion while minimizing risks. Plus Persona's orchestration tools automate your identity process so that you can fight rapidly shifting fraud and meet new waves of regulation. Whether you're a startup or an enterprise business, Persona has a plan for you. Learn more at withpersona.com/lenny. Again, that's withpersona.com/lenny. Kevin, thank you so much for being here and welcome to the podcast.

**中文翻译:**
本期节目由 Persona 赞助，这是一个灵活的身份平台，帮助企业打击欺诈、满足合规要求并建立信任。当你现在听这段音频时，你怎么知道真的是我 Lenny 在说话？如今，诈骗者比以往任何时候都更容易窃取个人身份信息（PII）、面部信息和身份。这就是 Persona 发挥作用的地方。Persona 帮助 LinkedIn、Etsy 和 Twilio 等领先公司安全地验证全球范围内的个人和企业。Persona 的独特之处在于其可配置性。每家公司根据行业、用例、风险承受能力和用户特征都有不同的需求。这就是为什么 Persona 提供灵活的构建模块，允许你构建定制的收集和验证流程，在最小化风险的同时最大化转化率。此外，Persona 的编排工具可以自动化你的身份流程，以便你应对快速变化的欺诈并满足新的监管浪潮。无论你是初创公司还是企业，Persona 都有适合你的方案。请访问 withpersona.com/lenny 了解更多。Kevin，非常感谢你来到这里，欢迎来到播客。

---

### [00:05:23] Kevin Weil

**English:**
Thank you so much for having me. We've been talking about doing this forever and we made it happen.

**中文翻译:**
非常感谢邀请我。我们一直说要录一期，现在终于实现了。

---

### [00:05:27] Lenny Rachitsky

**English:**
We did it. I can't imagine how insane your life is, so I really appreciate that you made time for this and we're actually recording this the week that you guys launched your new image model, which is a happy coincidence. My entire social feed is filled with ghiblifications of everyone's life and family photos and everything, so good job.

**中文翻译:**
我们做到了。我无法想象你的生活有多疯狂，所以我非常感谢你抽时间。巧合的是，我们录音的这周你们正好发布了新的图像模型。我的整个社交媒体动态都被大家生活和家庭照片的“吉卜力化”（ghiblifications）刷屏了，干得漂亮。

---

### [00:05:45] Kevin Weil

**English:**
Yep, mine too. My wife, Elizabeth, sent me one of hers, so I'm right there with you.

**中文翻译:**
是的，我的也是。我妻子 Elizabeth 也给我发了一张她的，所以我感同身受。

---

### [00:05:51] Lenny Rachitsky

**English:**
Let me just ask, did you guys expect this kind of reaction? It feels like this is the most viral thing that's happened in AI, which a high bar since, I don't know, ChatGPT launched. Just like, did you guys expect it to go this well? What does it feel like internally?

**中文翻译:**
我想问一下，你们预料到会有这种反应吗？这感觉像是 AI 领域自 ChatGPT 发布以来最火爆的病毒式传播事件。你们预料到会进展得这么顺利吗？公司内部感觉如何？

---

### [00:06:04] Kevin Weil

**English:**
There have been a handful of times in my career when you're working on a product internally and the internal usage just explodes. This was true by the way when we were building stories at Instagram. More than anything else in my career, we could feel it was going to work because we were all using it internally and we'd go away for a weekend. Before it launched we were all using it and we'd come back after a weekend and we would know what was going on and be like, "Oh, hey, I saw you were at that camping trip, how was that?" You were like, "Man, this thing really works." ImageGen was definitely one of those, so we'd been playing with it for, I don't know, a couple months and when it first went live internally to the company, there was kind of a little gallery where you could generate your own, you could also see what everyone else was generating and it was just nonstop buzz. So yeah, we had a sense that this was going to be a lot of fun for people to play with.

**中文翻译:**
在我的职业生涯中，有几次当你在内部开发一个产品时，内部使用量会突然爆炸。顺便说一下，我们在 Instagram 开发 Stories 时也是这样。那是我职业生涯中最强烈的一次预感，觉得它肯定会成功，因为我们内部都在用。周末大家出去玩，周一回来大家会说：“嘿，我看到你去露营了，怎么样？”那时你就知道：“天哪，这东西真的行。”ImageGen 绝对也是其中之一。我们已经玩了大概几个月了，当它第一次在公司内部上线时，有一个小画廊，你可以生成自己的图片，也可以看到别人生成的，内部讨论简直停不下来。所以，是的，我们预感到这会让人们玩得很开心。

---

### [00:06:58] Lenny Rachitsky

**English:**
That's really cool. That should be a measure of just confidence into something going well that you're launching is internally everyone's going crazy for it.

**中文翻译:**
这真的很酷。内部员工都为之疯狂，这应该是对即将发布的产品充满信心的衡量标准。

---

### [00:07:05] Kevin Weil

**English:**
Yeah. Especially social things because you have a very tight network as a company socially, so you know each other and you're experts in your product hopefully. And so there's some sense in which if you're doing something social and it's not taking off internally, you might question what you're doing.

**中文翻译:**
是的。尤其是社交类产品，因为公司内部是一个非常紧密的社交网络，大家互相认识，而且希望大家都是自己产品的专家。所以从某种意义上说，如果你在做一个社交产品，而它在内部都没火起来，你可能得反思一下自己在做什么了。

---

### [00:07:23] Lenny Rachitsky

**English:**
Yeah, and by the way, the Ghibli thing, is that something you guys seeded or how did that even start? Was that an intentional example?

**中文翻译:**
对了，那个吉卜力风格的东西，是你们引导的吗？还是怎么开始的？那是你们刻意准备的示例吗？

---

### [00:07:29] Kevin Weil

**English:**
I think it's just the style people love and the model is really capable at emulating style or understanding what... It's very good at instruction following. That's actually something that I think people... I'm starting to see people discover with it, but you can do very complex things. You can give it two images, one is your living room and the other is a whole bunch of photos or memorabilia or things you want and you say, "Tell me how you would arrange these things." Or you can say, "I'd like you to show me what this will look like if you put this over here and this thing to the right of that and this one to the left of this, but under that one." And the model actually will understand all of that and do it. It's incredibly powerful. So I'm just excited about all the different things people are going to figure out.

**中文翻译:**
我觉得那纯粹是因为人们喜欢这种风格，而且模型在模仿风格或理解指令方面非常出色。它非常擅长遵循指令。我开始看到人们发现它的这种能力，你可以做非常复杂的事情。比如给它两张图，一张是你的客厅，另一张是一堆照片或纪念品，然后说：“告诉我你会如何摆放这些东西。”或者你可以说：“我想让你展示一下，如果我把这个放在这，那个放在右边，这个放在左边但在那个下面，会是什么样子。”模型真的能理解并做到。它非常强大。所以我很期待人们还会挖掘出哪些不同的玩法。

---

### [00:08:11] Lenny Rachitsky

**English:**
Yeah. All right. Well, good job. Good job team OpenAI. Let's get serious here and let's zoom out a little bit. The way I see it is you're chief product officer of maybe the most important company in the world right now. Just not to set the bar too high, but you guys are ushering in AI, AGI at some point, super intelligence at some point. No big deal. I have more questions for you than I've had for any other guest. Actually put out a call-out on Twitter and LinkedIn and my community just like what would you want to ask Kevin? And I had over 300 well-formed questions and we're going to go through every single one. So let's just get started. I'm just joking.

**中文翻译:**
好的，干得漂亮，OpenAI 团队。现在让我们严肃一点，把视野放大。在我看来，你是目前世界上最重要的公司的首席产品官。不是要故意抬高门槛，但你们正在开启 AI 时代，未来还会有 AGI，甚至超级智能。这可不是小事。我为你准备的问题比以往任何嘉宾都多。实际上我在 Twitter、LinkedIn 和我的社区发了征集，问大家想问 Kevin 什么，结果收到了 300 多个高质量的问题。我们要逐一过一遍。开玩笑的。

---

### [00:08:45] Kevin Weil

**English:**
Cool.

**中文翻译:**
好啊。

---

### [00:08:46] Lenny Rachitsky

**English:**
I picked out the best and there's a lot of stuff I'm really curious about.

**中文翻译:**
我挑选了最好的，有很多我非常好奇的内容。

---

### [00:08:48] Kevin Weil

**English:**
Well, it's 1 PM here. It doesn't get dark for a while, so let's do it.

**中文翻译:**
现在是下午 1 点，离天黑还早，开始吧。

---

### [00:08:53] Lenny Rachitsky

**English:**
Okay, here we go. Okay, so first of all, I'm just going to take notes here. When is AGI launching? When in December?

**中文翻译:**
好，开始。首先，我先记一下：AGI 什么时候发布？12 月哪天？

---

### [00:08:58] Kevin Weil

**English:**
I mean, we just launched a good ImageGen model. Does that count?

**中文翻译:**
额，我们刚发布了一个很棒的图像生成模型，那算吗？

---

### [00:09:03] Lenny Rachitsky

**English:**
It's getting there. It's getting there.

**中文翻译:**
快了，快了。

---

### [00:09:05] Kevin Weil

**English:**
There's this quote I love, which is "AI is whatever hasn't been done yet" because once it's been done, when it kind of works, then you call it machine learning, and once it's kind of ubiquitous and it's everywhere, then it's just an algorithm. So I've always loved that we call things AI when they still don't quite work and then by the time it's like an AI algorithm that's recommending you follow, oh, that's just an algorithm, but this new thing, like self-driving cars, that's it. I think to some degree we're always going to be there and the next thing is always going to be AI and the current thing that we use every day and is just a part of our lives, that's an algorithm.

**中文翻译:**
我非常喜欢一句话：“AI 就是那些尚未实现的事情。”因为一旦它实现了，能用了，你就管它叫“机器学习”；一旦它变得无处不在，它就只是“算法”了。所以我一直觉得很有趣，当某些东西还不太好用时，我们称之为 AI，而当它变成推荐你关注谁的 AI 算法时，哦，那只是个算法。但像自动驾驶汽车这种新事物，就是 AI。我觉得在某种程度上，我们永远处于这个过程中：下一件事永远是 AI，而我们每天都在用、已经成为生活一部分的当前事物，就是算法。

---

### [00:09:46] Lenny Rachitsky

**English:**
It's so interesting because in the Bay Area you see self-driving cars driving around and it's so normal now when four years ago and three years ago, you would've seen this and you'd be like, "Holy shit, what is... We're in the future." And now we're just so take it for granted.

**中文翻译:**
这很有趣，因为在湾区，你看到自动驾驶汽车到处跑，现在觉得很正常。但在三四年前，你看到这个会惊呼：“天哪，我们在未来吗？”而现在我们已经习以为常了。

---

### [00:10:01] Kevin Weil

**English:**
I mean there's something like that with everything. If I showed you... When GPT-3 launched, I wasn't at OpenAI then. I was just a user, but it was mind-blowing. And if I gave you GPT-3 now I just plugged that into ChatGPT for you and you started using it, you'd be like, "What is this thing?" It's like mess.

**中文翻译:**
所有事物都是这样。如果我给你看……GPT-3 发布时，我还没在 OpenAI，只是个用户，但当时觉得太震撼了。如果我现在把 GPT-3 接入你的 ChatGPT 让你用，你会觉得：“这是什么破玩意？”简直是一团糟。

---

### [00:10:22] Lenny Rachitsky

**English:**
Flop, flop.

**中文翻译:**
太拉胯了。

---

### [00:10:24] Kevin Weil

**English:**
I had the same experience when I first got into a Waymo, your very first ride, at least my very first ride, my first 10 seconds in a Waymo, it starts driving and you're like, "Oh my God, watch out for that bike." You're holding onto whatever you can. And then five minutes in, you've calmed down and you realize that you're getting driven around the city without a driver and it's working. You're just like, "Oh my God, I am living in the future right now." And then another 10 minutes, you're bored, you're doing email on your phone, answering Slack messages, and suddenly this miracle of human invention is just an expected part of your life from then on. And there is really something in the way that we all are adapting to AI that's kind of like that. These miraculous things happen and computers can do something they've never been able to do before and it blows our mind collectively for a week and then we're like, oh, yeah. Oh, now it's just machine learning on its way to being an algorithm.

**中文翻译:**
我第一次坐 Waymo 时也有同样的经历。至少对我来说，头 10 秒钟，车开始开动，你会喊：“天哪，小心那辆自行车！”你紧紧抓着能抓的一切。五分钟后，你冷静下来，意识到自己正坐在没有司机的车里在城里转悠，而且它运行良好。你会想：“天哪，我正生活在未来。”再过 10 分钟，你就无聊了，开始在手机上回邮件、回 Slack 消息。突然间，这个人类发明的奇迹就成了你生活中理所当然的一部分。我们适应 AI 的方式真的很像这样。奇迹发生了，计算机做到了前所未有的事情，让我们集体震惊了一周，然后我们就觉得：“哦，好吧，现在它只是通往算法之路上的机器学习而已。”

---

### [00:11:23] Lenny Rachitsky

**English:**
The craziest thing about what you just shared actually is, I don't know, ChatGPT, which is now feels terrible. 3.5 was a couple years ago, and imagine what life will be like in a couple years from now. We're going to get to that, where things are going, what you think is going to be the next big leap. But I want to start with the beginning of your journey at OpenAI. So you worked at Twitter, you worked at Facebook, you worked at Planet, Instagram. At some point you got recruited to go and come work at OpenAI. I'm curious just what that story was like of the recruiting process of joining OpenAI as CPO. Is there any fun stories there?

**中文翻译:**
你刚才分享的最疯狂的一点是，现在的 ChatGPT 感觉已经很糟糕了。3.5 只是几年前的事，想象一下几年后生活会是什么样子。我们稍后会聊到未来的走向，以及你认为下一个重大飞跃是什么。但我先从你加入 OpenAI 的旅程开始。你曾在 Twitter、Facebook、Planet、Instagram 工作过。在某个时刻，你被招募到 OpenAI 担任 CPO。我很好奇加入 OpenAI 的招聘过程是怎样的？有什么有趣的故事吗？

---

### [00:12:01] Kevin Weil

**English:**
If I'm remembering the timeline right, we communicated at Planet I was leaving and I was planning to just go take some time. I wasn't going to stop working, but I was also happy to take the summer. This was maybe April or something. I was like, cool, I'm going to have the summer with my kids. We're going to go to Tahoe or something and I'll actually get to hang out rather than what I usually do going up and down and all that. And then Sam and I had known each other lightly for a bunch of years and he's always involved in so many interesting things like companies building fusion and all these things. So he'd always been somebody that I would call occasionally if I was starting to think about my next thing because I like working on big tech forward, sort of next wave kind of things.
(00:12:49):
And so I called him and I think Vinod also helped to put us in touch again. And this time it wasn't like, "Oh, you should go talk to these guys working on fusion." He said, "Actually, we're thinking about something, you should come talk to us." I was like, "Okay, that sounds amazing. Let's do it." And it goes really fast, really, really fast. I met most of the management team in a brief period of time, a few days, and they were telling me, 'Look, we're basically going to move as fast as we want to move. And if you talk to everyone, everyone likes you, you're ready to go." Sam came over for dinner and we had a great evening together just talking about OpenAI in the future and getting to know each other better. And at the end I was like, I was going to go in the next day for a bigger round of interviews and Sam was saying, "Hey, it's going really well. We're really excited."
(00:13:52):
And I said, "Cool. So how do I think about tomorrow?" And he said, "Oh, you'll be fine. Don't worry about it. And if it goes well, we're basically there." And so I go in the next day, meet a bunch of people, have a great time. I really enjoyed everybody I met with. In any interview, you can always second guess yourself like, oh, I shouldn't have said that thing or that thing I gave a bad answer on I wish I could redo, but I came away feeling like I think that went pretty well. And I was expecting to hear that weekend basically because they sort of set expectations as soon as if this goes well, we're ready to go. And I didn't hear anything. And then it was like Monday, Tuesday, Wednesday, I still didn't hear anything and I reached out to folks on the OpenAI side a couple of times, still nothing.
(00:14:45):
And I was like, "Oh my God, I screwed it up. I don't know where I screwed it up, but I totally screwed it up. I can't believe it." And I was going back to Elizabeth, my wife and being like, "What did I do? Where do you think I..." Getting all crazy about it and then it's still nothing. And finally it was like nine days later, they finally got back to me and it turned out there was a bunch of stuff happening internally and this, that and the other thing, and there's just a million things happening. And they finally were like, "Oh yeah, that went well. Let's do this." And I was like, "Oh, okay, cool, let's do it." But it was nine days of agony and they were just super busy on some internal stuff and there I was fretting every single day and re-going over every line of our interview process.

**中文翻译:**
如果我没记错时间线的话，当时我告诉 Planet 我要离开了，打算休息一段时间。我没打算停止工作，但很乐意过个暑假。那是四月左右，我想，太好了，我可以陪孩子过暑假，去塔霍湖（Tahoe）转转，真正放松一下，而不是像平时那样忙得不可开交。我和 Sam 认识很多年了，交情不算深，但他总是参与很多有趣的事情，比如搞核聚变的公司之类的。所以当我开始考虑下一步计划时，偶尔会给他打电话，因为我喜欢研究前沿科技和下一波浪潮。

于是我给他打了电话，我想 Vinod 也帮我们重新牵了线。这次他没说“你应该去和那帮搞核聚变的人聊聊”，而是说：“实际上，我们正在考虑一件事，你应该来和我们聊聊。”我说：“好啊，听起来很棒。”进展得非常快，真的非常快。我在几天内就见到了大部分管理层，他们告诉我：“听着，我们基本上想跑多快就跑多快。如果你和大家都聊得来，大家也喜欢你，那就准备好入职吧。”Sam 来我家吃晚饭，我们聊得很愉快，谈论了 OpenAI 的未来，也加深了了解。最后我说，我第二天要去参加更大规模的面试，Sam 说：“嘿，进展很顺利，我们很兴奋。”

我问：“那我该怎么准备明天？”他说：“哦，你会没事的，别担心。如果顺利，我们基本上就定下来了。”第二天我去了，见了一群人，聊得很开心。我真的很喜欢我见到的每一个人。在任何面试中，你总会自我怀疑，比如“我不该说那句话”或者“那个问题我回答得不好”。但我离开时感觉表现得还不错。我本以为那个周末就能收到消息，因为他们给我的预期是“只要顺利就定下来”。结果我什么也没听到。然后是周一、周二、周三，还是没消息。我联系了 OpenAI 的人几次，依然没回音。

我想：“天哪，我搞砸了。我不知道哪儿搞砸了，但我肯定彻底搞砸了。简直不敢相信。”我回去跟我妻子 Elizabeth 说：“我到底做了什么？你觉得我哪儿……”我整个人都快疯了，但还是没消息。最后，直到九天后，他们终于回复我了。原来内部发生了一堆事，各种状况，有成千上万的事情在处理。他们终于说：“哦对了，面试很顺利，我们开始吧。”我说：“哦，好，太好了，开始吧。”但那九天简直是煎熬，他们只是忙于内部事务，而我每天都在焦虑，反复回想面试中的每一句话。

---

### [00:15:33] Lenny Rachitsky

**English:**
It makes me think about when you're dating someone and you've texted them and you're not hearing anything back, you assume something is wrong.

**中文翻译:**
这让我想起约会的时候，你给对方发了信息却没收到回复，你就会假设出事了。

---

### [00:15:40] Kevin Weil

**English:**
Yeah, totally.

**中文翻译:**
是的，完全一样。

---

### [00:15:41] Lenny Rachitsky

**English:**
They might just be busy.

**中文翻译:**
他们可能只是太忙了。

---

### [00:15:42] Kevin Weil

**English:**
I have a hard time about it still.

**中文翻译:**
我现在想起来还是觉得很难受。

---

### [00:15:47] Lenny Rachitsky

**English:**
That's wild. I love that it worked out. And I guess the lesson there is don't jump to conclusions.

**中文翻译:**
太疯狂了。很高兴最后成功了。我想这里的教训是不要过早下结论。

---

### [00:15:55] Kevin Weil

**English:**
Yeah. Have a little bit of chill.

**中文翻译:**
是的，淡定一点。

---

### [00:15:59] Lenny Rachitsky

**English:**
Speaking of that, I want to chat about what it's just like to be inside the center of the storm. Again, you work at a lot of, let's say traditional companies even though they're not that traditional, Twitter and Instagram and Facebook and Planet, and now you work at OpenAI. I'm curious, what is most different about how things work in your day-to-day life at OpenAI?

**中文翻译:**
说到这个，我想聊聊处在风暴中心是什么感觉。你曾在很多所谓的“传统”公司工作过（虽然它们也不算传统），比如 Twitter、Instagram、Facebook 和 Planet，现在你在 OpenAI。我很好奇，在 OpenAI 的日常工作中，最不同的地方是什么？

---

### [00:16:19] Kevin Weil

**English:**
I think it's probably the pace. Maybe it's two things. One is it's the pace. The second is everywhere I've ever worked before this, you kind of know what technology you're building on. So you spend your time thinking about what problems are you solving? Who are you building for? How are you going to make their lives better? How are you going to... Is this a big enough problem that you're going to be able to change habits? Do people care about this problem being solved? All those good product things. But the stuff that you're building on is kind of fixed. You're talking about databases and things and I bet the database you used this year is probably 5% better than the database you used two years ago, but that's not true at all with AI. It's like every two months computers can do something they've never been able to do before and you need to completely think differently about what you're doing.
(00:17:10):
There's something fundamentally interesting about that makes life fun here. There's also something we will maybe talk about evals later, but it also really, in this world of... Everything we're used to with computers is about giving a computer very defined inputs. If you look at Instagram for example, there are buttons that do specific things and you know what they do. And then when you give a computer defined inputs, you get very defined outputs. You're confident that if you do the same thing three times, you're going to get the same output three times. LLMs are completely different than that. They're good at fuzzy subtle inputs. Then all the nuances of human language and communication, they're pretty good at. And also they don't really give you the same answer. You probably get spiritually the same answer for the same question, but it's certainly not the same set of words every time. And so you're much more, it's fuzzier inputs and fuzzier outputs. And when you're building products, it really matters whether there's some use case that you're trying to build around.
(00:18:16):
If the model gets it right 60% of the time, you build a very different product than if the model gets it right 95% of the time versus if the model gets it right 99.5% of the time. And so there's also something that you have to get really into the weeds on your use case and the evals and things like that in order to understand the right kind of product to build. So that is just fundamentally different. If your database works once, it works every time. And that's not true in this world.

**中文翻译:**
我觉得主要是节奏。也许有两点：一是节奏；二是，在我之前工作过的所有地方，你基本上知道你所依赖的技术基础。所以你把时间花在思考：你在解决什么问题？为谁构建？如何改善他们的生活？这是否是一个大到足以改变习惯的问题？人们关心这个问题是否被解决吗？这些都是传统的产品思考。但你构建的基础是相对固定的。比如数据库，我敢打赌你今年用的数据库可能只比两年前的好 5%。但在 AI 领域完全不是这样。每隔两个月，计算机就能做到以前从未做到的事，你必须完全重新思考你的工作。

这让这里的生活变得非常有趣。还有一点，我们稍后可能会谈到 Evals（评估集），但在 AI 世界里……我们习惯的计算机操作是给它非常明确的输入。比如 Instagram，按钮的功能是确定的。当你给计算机明确的输入，你会得到非常明确的输出。你确信做三次同样的操作，会得到三次同样的结果。LLM（大语言模型）完全不同。它们擅长处理模糊、微妙的输入，擅长处理人类语言和沟通中的细微差别。而且它们不会给你完全相同的答案。同一个问题，你得到的答案在精神上是一致的，但措辞肯定每次都不同。所以输入和输出都更模糊。当你构建产品时，这非常关键。

如果模型在某个用例上的准确率是 60%，你构建产品的方式会与准确率 95% 或 99.5% 时完全不同。因此，你必须深入研究你的用例和 Evals，才能理解该构建什么样的产品。这与传统软件有本质区别：如果数据库运行成功一次，它每次都会成功；但在 AI 世界里，并非如此。

---

### [00:18:45] Lenny Rachitsky

**English:**
Let's actually follow this thread on evals. I definitely wanted to talk about this. We had this legendary panel at the Lenny & Friends Summit. It was you and Mike Krieger and Sarah Guo moderating.

**中文翻译:**
让我们顺着 Evals 这个话题聊下去。我非常想聊这个。我们在 Lenny & Friends 峰会上有一个传奇的小组讨论，成员是你、Mike Krieger，由 Sarah Guo 主持。

---

### [00:18:58] Kevin Weil

**English:**
That was fun.

**中文翻译:**
那次很有趣。

---

### [00:18:58] Lenny Rachitsky

**English:**
So fun. The thing that I heard that kind of stuck with people from that panel was a comment you made where you said that writing evals is going to become a core skill for product managers, and I feel like that probably applies further than just product managers. A lot of people know what evals are. A lot of people have no idea what I'm talking about. So could you just briefly explain what is an eval and then just why do you think this is going to be so important for people building products in the future?

**中文翻译:**
太有趣了。那次讨论中让大家印象最深的一句话是你说“编写 Evals 将成为产品经理的核心技能”，我觉得这不仅适用于产品经理。很多人知道 Evals 是什么，但也有很多人完全不知道我在说什么。你能简要解释一下什么是 Eval，以及为什么你认为这对未来的产品构建者如此重要吗？

---

### [00:19:23] Kevin Weil

**English:**
Yeah, sure. I think the easiest way to think about it is almost like a quiz for a model, a test to gauge how well it knows a certain set of subject material or how good it is at responding to a certain set of questions. So in the same way you take a calculus class and then you have calculus tests that see if you've learned what you're supposed to learn. You have evals that test how good is the model at creative writing? How good is the model at graduate level science? How good is the model at competitive coding? And so you have these set of evals that basically perform as benchmarks for how smart or capable the model is.

**中文翻译:**
好的。我觉得最简单的理解方式就是把它看作是给模型做的“测验”，用来衡量它对某类知识的掌握程度，或者它回答某类问题的能力。就像你上微积分课，然后通过微积分考试来检查你是否学到了该学的知识。Evals 就是测试：模型在创意写作方面表现如何？在研究生水平的科学问题上表现如何？在竞赛级编程上表现如何？所以，这一套 Evals 基本上就是衡量模型聪明程度或能力的基准（Benchmarks）。

---

### [00:20:04] Lenny Rachitsky

**English:**
Is it a simple way to think about it, like unit tests for model?

**中文翻译:**
简单来说，是不是可以理解为模型的“单元测试”？

---

### [00:20:07] Kevin Weil

**English:**
Yeah, unit tests, tests in general for models. Totally.

**中文翻译:**
是的，单元测试，或者说是模型的通用测试。完全正确。

---

### [00:20:10] Lenny Rachitsky

**English:**
Great, great. Okay. And then why is this so important for people that don't totally understand what the hell's going on here with evals? Why is this so key to building AI products?

**中文翻译:**
太好了。那么，对于那些还不完全理解 Evals 到底是怎么回事的人来说，为什么这如此重要？为什么它是构建 AI 产品的关键？

---

### [00:20:20] Kevin Weil

**English:**
Well, it gets back to what I was saying. You need to know whether your model is going to... There are certain things that models will get right. 99.95% of the time and you can just be confident. There are things that they're going to be 95% right on and things they're going to be 60% right on. If the model's 60% right on something, you're going to need to build your product totally differently. And by the way, these things aren't static either. So a big part of evals is if you know you're building for some use case. So let's take our deep research product, which is one of my favorite things that we've released maybe ever. The idea is with deep research for people who haven't used it, you can give ChatGPT now an arbitrarily complex query. It's not about returning you an answer from a search query, which we can also do.
(00:21:10):
It's here's a thing that if you were going to answer it yourself, you'd go off and do two hours of reading on the web and then you might need to read some papers and then you would come back and start writing up your thoughts and realize you had some gaps in your thinking. So you go out and do more research. It might take you a week to write some 20 page answer to this question. You can let ChatGPT just like chug for you for 25, 30 minutes. It's not the immediate answers you're used to, but it might go work for 25, 30 minutes and do work that would've taken you a week. So as we were building that product, we were designing evals at the same time as we were thinking about how this product was going to work and we were trying to go through hero use cases.
(00:21:57):
Here's a question you want to be able to ask. Here's an amazing answer for that question. And then turning those into evals and then hill climbing on those evals. So it's not just that the model is static and we hope it does okay on a certain set of things, you can teach the model. You can make this a continuous learning process. And so as we were fine-tuning our model for deep research to be able to answer these things, we were able to test is it getting better on these evals that we said were important measures of how the product was working? And it's when you start seeing that and you start seeing performance on evals going up, you start saying, "Okay, I think we have a product here."

**中文翻译:**
这又回到了我刚才说的。你需要知道你的模型表现如何。有些事情模型能做到 99.95% 的准确率，你可以完全放心；有些事只有 95%，有些只有 60%。如果准确率只有 60%，你构建产品的方式必须完全不同。而且，这些指标不是静态的。Evals 的很大一部分作用在于，如果你知道自己在为某个特定用例构建产品，比如我们的“深度研究”（Deep Research）产品——这是我最喜欢的发布之一。对于没用过的人来说，深度研究的意思是你可以给 ChatGPT 一个极其复杂的查询。它不只是返回一个搜索结果。

如果你自己去回答这个问题，你可能需要上网读两个小时资料，读一些论文，然后回来写下想法，发现思维有漏洞，再去研究。写出一份 20 页的答案可能需要一周。现在你可以让 ChatGPT 跑 25 到 30 分钟。这不是你习惯的那种秒回，但它在 30 分钟内完成的工作量相当于你的一周。在构建这个产品时，我们一边思考产品逻辑，一边设计 Evals。我们设定了一些“英雄用例”（Hero Use Cases）：这是一个你想问的问题，这是一个完美的答案。然后把这些变成 Evals，并针对这些 Evals 进行“爬坡”（Hill Climbing，即不断优化）。所以模型不是静态的，你可以教导模型，让它成为一个持续学习的过程。当我们为深度研究微调模型时，我们可以测试：它在这些衡量产品表现的关键 Evals 上进步了吗？当你看到 Evals 的表现上升时，你才会说：“好，我觉得我们做出了一个真正的产品。”

---

### [00:22:35] Lenny Rachitsky

**English:**
You made a kind of a comment along these same lines around evals that AI is almost capped in how amazing it can be by how good we are at evals. Does that resonate? Any more thoughts along those lines?

**中文翻译:**
你曾就 Evals 发表过类似的评论，说 AI 的上限几乎取决于我们编写 Evals 的水平。你现在还这么认为吗？还有什么进一步的想法吗？

---

### [00:22:48] Kevin Weil

**English:**
I mean, these models are their intelligences and intelligence is so fundamentally multidimensional so you can talk about a model being amazing at competitive coding, which may not be the same as that model being great at front-end coding-

**中文翻译:**
我的意思是，这些模型本身就是智能体，而智能本质上是多维度的。你可以说一个模型在竞赛编程上很棒，但这并不等同于它在前端开发上也很出色——

---

### [00:23:00] Kevin Weil (continued)

**English:**
... may not be the same as that model being great at front-end coding or back-end coding or taking a whole bunch of code that's written in COBOL and turning it into Python. And that's just within the software engineering world. So I think there's a sense in which you can think of these models as incredibly smart, very factually aware intelligences, but still most of the world's data, knowledge, process is not public. It's behind the walls of companies or governments or other things. And same way, if you were going to join a company, you would spend your first two weeks onboarding. You'd be learning the company-specific processes. You'd get access to company-specific data. The models are smart enough, you can teach them anything, but they need to have the raw data to learn from.
(00:23:58):
So there's a sense in which I think the future is really going to be incredibly smart, broad-based models that are fine-tuned and tailored with company-specific or use case-specific data so that they perform really well on company-specific, or use case-specific things. And you're going to measure that with custom evals. So what I was referring to is just like these models are really smart, you need to still teach them things if the data's not in their training set, and there's a huge amount of use cases that are not going to be in their training set because they're relevant to one industry or one company.

**中文翻译:**
……也不等同于它擅长后端开发，或者把一堆 COBOL 代码转换成 Python。这还仅仅是在软件工程领域。所以，你可以把这些模型看作是非常聪明、掌握大量事实的智能体，但世界上大部分的数据、知识和流程并不是公开的。它们存在于公司、政府或其他机构的围墙之内。就像你加入一家新公司，前两周要参加入职培训，学习公司特定的流程，获取公司特定的数据。模型足够聪明，你可以教它们任何东西，但它们需要原始数据来学习。

因此，我认为未来将是极其聪明的通用大模型，结合公司特定或用例特定的数据进行微调和定制，从而在特定领域表现出色。而你将通过自定义的 Evals 来衡量这种表现。所以我指的是：模型虽然聪明，但如果数据不在训练集中，你仍需教导它们。而大量的用例是不会出现在通用训练集里的，因为它们只与某个特定行业或公司相关。

---

### [00:24:40] Lenny Rachitsky

**English:**
I'm just going to keep following the thread that you're leading us down, but I'm going to come back because I have more questions around some of these things. So you came to a space that I think a lot of AI founders are thinking about is just, where's OpenAI not going to come squash me in the future? Or one of the other foundational models. So it's unclear to a lot of people just like, "Should I build a startup in this space or not?" Is there any advice you have or any guidance for where you think OpenAI, or just foundational models in general likely won't go and where you have an opportunity to build a company?

**中文翻译:**
我会顺着你的思路继续，但我稍后会回来问更多细节。你提到了一个很多 AI 创业者都在思考的问题：未来 OpenAI（或其他大模型公司）会在哪里“碾压”我？很多人不确定：“我该不该在这个领域创业？”你有什么建议或指导吗？你认为 OpenAI 或通用大模型通常不会涉足哪些领域，从而给初创公司留下了机会？

---

### [00:25:10] Kevin Weil

**English:**
So this is something that Ev Williams used to say back at Twitter that's always stuck with me, which is, "No matter how big your company gets, no matter how incredible the people are, there are way more smart people outside your walls than there are inside your walls." And that's why we are so focused on building a great API. We have 3 million developers using our API. No matter how ambitious we are, how big we grow, by the way, we don't want to grow super big, there are so many use cases, places in the world where AI can fundamentally make our lives better. We're not going to have the people. We're not going to have the know-how to build most of these things.
(00:25:55):
And I think, like I was saying, the data is industry-specific, use case-specific, behind certain company walls, things like that. And there are immense opportunities in every industry and every vertical in the world to go build AI-based products that improve upon the state of the art. And there's just no way we could ever do that ourselves. We don't want to. We if we did want to, and we're really excited to power that for 3 million-plus developers and way more in the future.

**中文翻译:**
这是 Ev Williams 以前在 Twitter 时常说的一句话，我一直铭记在心：“无论你的公司变得多大，无论人才多么出众，围墙外的聪明人永远比围墙内的多。”这就是为什么我们如此专注于构建一个强大的 API。我们有 300 万开发者在使用我们的 API。无论我们多么有野心，无论我们长到多大（顺便说一下，我们并不想变得超级庞大），世界上有太多的用例和场景可以让 AI 改善生活。我们没有足够的人手，也没有足够的专业知识去构建其中的大部分东西。

正如我所说，数据是特定于行业、特定于用例的，隐藏在公司内部。在世界的每一个行业、每一个垂直领域，都有巨大的机会去构建基于 AI 的产品来提升现状。我们绝不可能靠自己完成所有这些工作，我们也不想这么做。我们非常兴奋能为这 300 多万开发者以及未来更多的开发者提供动力。

---

### [00:26:24] Lenny Rachitsky

**English:**
Coming back to your earlier point about the tech changing constantly and getting faster, not exactly knowing what you'll have by the time you launch something in terms of the power, the model. I'm curious what allows you to ship quickly and consistently in such great stuff? And it sounds like one answer is bottoms-up empowered teams versus a very top-down roadmap that's planned out for a quarter. What are some of those things that allow you to ship such great stuff so often, so quickly?

**中文翻译:**
回到你之前提到的观点：技术在不断变化且速度越来越快，你甚至不知道在发布某个产品时，模型的能力会进化到什么程度。我很好奇，是什么让你们能够如此快速且持续地发布这么棒的产品？听起来答案之一是“自下而上”的授权团队，而不是一个规划好整个季度的“自上而下”的路线图。还有哪些因素让你们能如此频繁、如此迅速地发布好产品？

---

### [00:26:53] Kevin Weil

**English:**
Yeah. I mean, we try and have a sense of where we're trying to go, point ourselves in a direction so that we have some rough sense of alignment. Thematically, I don't for second, and we do quarterly roadmapping. We laid out a year-long strategy. I don't for a second believe that what we write down in these documents is what we're going to actually ship three months from now, let alone six or nine. But that's okay. I think it's like an Eisenhower quote, "Plans are useless. Planning is helpful," which I totally subscribe to, especially in this world. It's really valuable. If you think about quarterly road roadmapping for example, it's really valuable to have a moment where you stop and go, "Okay. What did we do? What worked? What went well? What didn't go well? What did we learn and now what do we think we're going to do next?"
(00:27:44):
And by the way, everybody has some dependencies. You need the infrastructure team to do the following things, partnership with research here. So you want to have a second to check your dependencies, make sure you're good to go and then start executing. We try and keep that really lightweight because it's not going to be right. We're going to throw it out halfway because we will have learned new things. So the moment of planning is helpful even if it's only partially.
(00:28:12):
So I think just expecting that you're going to be super agile and that there's no sense writing a three month roadmap, let alone a year long roadmap because the technology's changing underneath you so quickly. We really do try and go very strongly bottoms up, subject to our overall directional alignment. We have great people. We have engineers and PMs and designers and researchers who are passionate about the products they're building and have strong opinions about them and are also the ones building them. So they have a real sense of what the capabilities are too, which is super important.
(00:28:49):
So I think you want to be more bottoms up in this way. So we operate that way. We are happy making mistakes. We make mistakes all the time. It's one of the things I really appreciate about Sam. He pushes us really hard to move fast, but he also understands that with moving fast comes, we didn't quite get this right or that we launched this thing, it didn't work. We'll roll it back. Look at our naming. Our naming is horrible.

**中文翻译:**
是的。我们的做法是，先确定一个大致的前进方向，这样大家在整体上能保持一致。我们会做季度路线图，也制定了一年的战略。但我压根不相信我们在这些文档里写下的东西，就是三个月后实际会发布的东西，更别说六个月或九个月后了。但这没关系。就像艾森豪威尔说的：“计划是无用的，但计划的过程是有益的。”我非常认同这一点，尤其是在 AI 领域。这非常有价值。以季度路线图为例，它的价值在于让你停下来思考：“我们做了什么？什么奏效了？什么进展顺利？什么不顺利？我们学到了什么？接下来打算做什么？”

此外，每个人都有依赖项。你需要基建团队做某些事，需要和研究团队合作。所以你需要一点时间检查依赖项，确保万事俱备，然后开始执行。我们尽量保持这个过程非常轻量，因为计划肯定会出错。到一半的时候我们就会把它扔掉，因为我们学到了新东西。所以，即使计划只能部分实现，规划的过程依然有帮助。

因此，你必须预期自己会非常敏捷，写三个月的路线图甚至一年的路线图都没什么意义，因为底层的技术变化太快了。在保持整体方向一致的前提下，我们确实在尝试非常强力的“自下而上”模式。我们有优秀的人才——工程师、PM、设计师和研究员，他们对自己构建的产品充满热情，有强烈的见解，而且他们就是实际动手构建的人。所以他们对模型的能力有最真实的感知，这至关重要。

我们就是这样运作的。我们乐于犯错，也一直在犯错。这是我非常欣赏 Sam 的一点：他极力推动我们快跑，但他也理解，快跑意味着可能会出错，或者发布的东西没效果。没关系，撤回就行。看看我们的命名，我们的命名简直糟糕透顶。

---

### [00:29:14] Lenny Rachitsky

**English:**
That was a lot of questions people had for you. Model names, yeah.

**中文翻译:**
很多人问过我这个问题。模型命名，确实。

---

### [00:29:18] Kevin Weil

**English:**
It's absolutely atrocious and we know it, and we will get around to fixing it at some point, but it's not the most important thing and so we don't spend a lot of time on it.

**中文翻译:**
简直惨不忍睹，我们自己也知道。我们总有一天会去解决它的，但它不是最重要的事，所以我们没花太多时间在上面。

---

### [00:29:27] Lenny Rachitsky

**English:**
But it also shows you how it doesn't matter. Again, ChatGPT the most popular, fastest growing product in history, it's the number one AI, API and model. So clearly it doesn't matter that much.

**中文翻译:**
但这恰恰说明了命名并不重要。ChatGPT 是历史上最受欢迎、增长最快的产品，它是排名第一的 AI、API 和模型。显然，名字没那么重要。

---

### [00:29:39] Kevin Weil

**English:**
And we name things like o3 mini high.

**中文翻译:**
而我们给东西起名叫 o3 mini high。

---

### [00:29:46] Lenny Rachitsky

**English:**
Man, I love it. Okay. So you talked about roadmapping and bottoms up and I'm really curious, is there a cadence or a ritual of aligning with you or Sam or you review everything that's going out? Is there a meeting every week or every month where you guys see what's happening?

**中文翻译:**
天哪，我太喜欢这个了。你谈到了路线图和自下而上，我很好奇，你们有没有某种节奏或仪式来和你或 Sam 保持对齐？或者你会审查所有要发布的东西吗？有没有每周或每月的会议让你们了解进展？

---

### [00:30:03] Kevin Weil

**English:**
On key projects. So we do product reviews and things like that, like you would expect. There isn't a ritual because there isn't... I would never want us to be blocked on launching something, waiting for a review with me or Sam, if we can't get there. If I'm traveling or Sam's busy or whatever, that's a bad reason for us not to ship. So obviously for the biggest, most high priority stuff, we have a pretty close beat on it, but we really try not to, frankly. We want to empower teams to move quickly, and I think it's more important to ship and iterate.
(00:30:42):
So we have this philosophy, we call iterative deployment, and the idea is we're all learning about these models together. So there's a real sense in which it's way better to ship something even when you don't know the full set of capabilities and iterate together in public. And we co-evolve together with the rest of society as we learn about these things and where they're different and where they're good and bad and weird. I really like that philosophy.
(00:31:12):
I think the other thing that ends up being a part of our product philosophy is the sense of model maximalism. The models are not perfect. They're going to make mistakes. You could spend a lot of time building all kinds of different scaffolding around them. And by the way, sometimes we do because sometimes there are kinds of errors that you just don't want to make, but we don't spend that much time building scaffolding around the parts that don't match that because our general mindset is in two months there's going to be a better model and it's going to blow away whatever the current set of limitations are.
(00:31:52):
So if you're building, and we say this to developers too, if you're building and the product that you're building is right on the edge of the capabilities of the models, keep going, because you're doing something right because you give it another couple months and the models are going to be great, and suddenly the product that you have that just barely worked is really going to sing. And that's how you make sure that you're really pushing the envelope and building new things.

**中文翻译:**
对于关键项目，我们会做产品评审之类的，正如你所预料的那样。但并没有固定的“仪式”，因为我不希望任何发布因为等待我和 Sam 的评审而被卡住。如果我在出差或者 Sam 很忙，这不应该成为我们不发布的理由。显然，对于最重大、优先级最高的事情，我们会保持密切关注，但坦白说，我们尽量不干预。我们希望授权团队快速行动，我认为发布和迭代更重要。

我们有一种哲学，叫做“迭代部署”（Iterative Deployment）。核心理念是：我们都在和大家一起学习这些模型。所以，即使你还不完全了解模型的全部能力，先发布出来并在公众面前共同迭代，效果会好得多。随着我们对这些事物的了解——它们哪里不同、哪里好、哪里坏、哪里奇怪——我们与整个社会共同进化。我非常喜欢这种哲学。

产品哲学的另一部分是“模型至上主义”（Model Maximalism）。模型并不完美，它们会犯错。你可以花大量时间在模型周围构建各种“脚手架”（Scaffolding，指外部约束代码）。顺便说一下，有时我们确实会这么做，因为有些错误是绝对不能犯的。但我们不会花太多时间去修补那些不完美的地方，因为我们的普遍心态是：两个月后就会有更好的模型，它会彻底解决目前的局限。

所以，如果你正在构建的产品恰好处于模型能力的边缘，请继续，因为你做对了。再过几个月，模型就会变得强大，你那个现在勉强能用的产品就会表现得非常出色。这就是确保你始终在突破极限、构建新事物的方法。

---

### [00:32:19] Lenny Rachitsky

**English:**
I had the founder of Bolt on the podcast, StackBlitz is the company name, and he shared this story that they've been working on this product for seven years behind the scenes and it was failing. Nothing was happening. And then all of a sudden it was, sorry to mention a competitor, but Claude came out or a Sonnet 3.5 came out and all of a sudden everything worked and they've been building all this time and finally it worked. And I hear that a lot with YC, just like things that never were possible now are just becoming possible every few months with the updates to the models.

**中文翻译:**
我曾邀请过 StackBlitz（公司名）的创始人，他分享了一个故事：他们闭门研发一个产品长达七年，一直失败，毫无进展。然后突然间——抱歉提到竞争对手——Claude 发布了，或者说 Sonnet 3.5 发布了，突然间一切都跑通了。他们坚持了这么久，终于成功了。我在 YC 也经常听到这种故事：以前不可能的事，随着模型每隔几个月的更新，突然就变得可能了。

---

### [00:32:48] Kevin Weil

**English:**
Yeah, absolutely.

**中文翻译:**
是的，绝对如此。

---

### [00:32:50] Lenny Rachitsky

**English:**
Let me actually ask this, I wasn't planning to ask this, but I'm curious if you have any quick thoughts just why is Sonnet so good at coding, and thoughts on your stuff getting as good and better at actual coding?

**中文翻译:**
我想顺便问一下（虽然没在计划内）：你对 Sonnet 为什么在编程方面这么强有什么看法？以及你们的产品在实际编程能力上追赶并超越它们的想法？

---

### [00:33:01] Kevin Weil

**English:**
Yeah. I mean, kudos to Anthropic. They've built very good coding models. No doubt. We think that we can do the same. Maybe by the time this podcast has shipped, we'll have more to say, but either way, all credit to them. I think intelligence is really multi-dimensional and so I think the model providers... It used to be that OpenAI had this massive model lead, 12 months or something ahead of everybody else. That's not true anymore. I like to think we still have a lead. I'd argue that we do, but it's certainly not a massive one. And that means that there are going to be different places where the Google models are really good or where Anthropic models are really good, or where we're really good and our competitors are like, "We got to get better at that." And it actually is easier to get better at a certain thing once someone's proved it possible than it is to forge a path through the jungle and doing something brand new.
(00:34:03):
So I just think as an example, it was like nobody could break 4 minutes in the mile, and then finally somebody did and the next year 12 more people did it. I think there's that all over the place and it just means that competition is really intense, and consumers are going to win and developers are going to win and businesses are going to win in a big way from that. It's part of why the industry moves so fast, but all respect to the other big model providers. Models are getting really good. We're going to move as fast as we can and I think we've got some good stuff coming.

**中文翻译:**
是的。向 Anthropic 致敬，他们确实构建了非常出色的编程模型。毫无疑问。我们认为我们也能做到。也许在这个播客发布时，我们会有更多消息要宣布，但无论如何，功劳归于他们。我认为智能是多维度的，所以不同的模型提供商……以前 OpenAI 拥有巨大的领先优势，领先别人 12 个月左右。现在不是这样了。我倾向于认为我们仍保持领先，我也能证明这一点，但绝对不再是巨大的差距。这意味着在某些方面 Google 的模型很强，某些方面 Anthropic 很强，而某些方面我们很强，竞争对手会说：“我们也得在那方面加强。”实际上，一旦有人证明了某件事是可能的，追赶起来要比在丛林中开辟一条全新的道路容易得多。

就像跑一英里，以前没人能跑进 4 分钟，直到有人突破了，第二年就有 12 个人做到了。我觉得这种现象随处可见，这意味着竞争非常激烈。消费者、开发者和企业都将从中受益。这也是行业发展如此之快的原因之一。对其他大模型提供商保持尊重，模型都在变得越来越好。我们会尽可能快地行动，我想我们会有一些好东西即将推出。

---

### [00:34:36] Lenny Rachitsky

**English:**
Exciting. This makes me also think about, in many ways other models are better at certain things, but somehow ChatGPT is the... If you look at all the awareness numbers and usage numbers, it's like no matter where you guys are in the rankings, people seem to just think of AI ChatGPT almost as the same. What do you think you did right to win in the consumer mindset, at least at this point and awareness in the world?

**中文翻译:**
令人兴奋。这让我想起，虽然其他模型在某些方面更好，但不知为何 ChatGPT 依然是……如果你看知名度和使用数据，无论你们在排名中处于什么位置，人们似乎把 AI 和 ChatGPT 看作是同义词。你认为你们做对了什么，从而在消费者心智和全球知名度上赢得了这一局？

---

### [00:35:02] Kevin Weil

**English:**
I think being first helps, which is one of the reasons why we're so focused on moving quickly. We like being the first to launch new capabilities. Things like deep research. Our models, they can do a lot of things. So they can take real-time video input, you have speech to speech, you can do speech to text and text to speech. They can do deep research. They can operate on a canvas, they can write code. So ChatGPT can be this one- stop-shop where all the things that you want to do are possible. And as we go forward in it, we have more agentic tools like Operator where it's browsing for you and doing things for you on the web, more and more you're going to be able to come to this one place to ChatGPT, give it instructions and have it accomplish real things for you in the world. There's something fundamentally valuable in that. So we think a lot about that. We try to move really fast so that we are always the most useful place for people to come to.

**中文翻译:**
我认为“先发优势”很有帮助，这也是我们如此专注于快速行动的原因之一。我们喜欢率先推出新功能，比如深度研究。我们的模型能做很多事：实时视频输入、语音对语音、语音转文字、文字转语音。它们能做深度研究，能在画布（Canvas）上操作，能写代码。ChatGPT 可以成为一个“一站式商店”，你想做的所有事情都可以在这里实现。随着我们继续推进，我们有了更多 Agent（智能体）工具，比如 Operator，它可以帮你浏览网页、在网上替你办事。越来越多的人会来到 ChatGPT 这一个地方，下达指令，让它在现实世界中为你完成真实的任务。这具有根本性的价值。所以我们花了很多心思，努力跑得飞快，确保我们始终是人们心中最有用、最首选的地方。

---

### [00:36:04] Lenny Rachitsky

**English:**
What would you say is the most counterintuitive thing that you've learned after building AI products or working at OpenAI, something that's just like, "I did not expect that?"

**中文翻译:**
在构建 AI 产品或在 OpenAI 工作期间，你学到的最反直觉的事情是什么？那种让你觉得“我完全没料到会这样”的事。

---

### [00:36:14] Kevin Weil

**English:**
I don't know, maybe I should have expected this, but one of the things that's been funny for me is the extent to which you're trying to figure out how some product should work with AI, or even why some AI thing happens to be true, you can often reason about it the way you would reason about another human and it works. So maybe a couple examples. When we were first launching our reasoning model, we were the first to build a model that could reason, that could, instead of giving you just a quick system one answer right away to every question you asked, it was the third Emperor of the Holy Roman Empire, here's an answer.
(00:36:59):
You could ask it hard questions and it would reason. The same way that if I asked you to do a crossword puzzle, you couldn't just snap fill in everything. You would be, "Well, okay. On this one across, I think it could be one of these two, but that means there's an A here. So that one has to be this, away, back track, step-by-step build up from where you are." Same way you answer any difficult logistical problem, any scientific problem. So this reasoning breakthrough was big, but it was also the first time that a model needed to sit and think. And that's a weird paradigm for a consumer product. You don't normally have something where you might need to hang out for 25 seconds after you ask a question.
(00:37:40):
So we were trying to figure out what's the UI for this? With deep research where the model's going to go and think for 25 minutes sometimes, it's actually not that hard because you're not going to sit and watch it for 25 minutes. You're going to go do something else. You're going to go to another tab or go get lunch or whatever, and then you'll come back and it's done when it's like 20, 25 seconds or 10 seconds, it's a long time to wait, but it's not long enough to go to do something else.
(00:38:09):
So you can think, if you asked me something that I needed to think for 20 seconds to answer, what would I do? I wouldn't just go mute and not say anything and shut down for 20 seconds and then come back. So we shouldn't do that. We shouldn't just have a slider sitting there. That's annoying. But I also wouldn't just start babbling every single thought that I had. So we probably shouldn't just expose the whole chain of thought as the model's thinking, but I might go like, "That's a good question. All right." I might approach it like that and then think. You're maybe giving little updates and that's actually what we ended up shipping.
(00:38:49):
You have similar things where you can find situations where you get better thinking sometimes out of a group of models that all try and attack the same problem, and then you have a model that's looking at all their outputs and integrating it and then giving you a single answer at the end. I mean, sounds a little bit like brainstorming. I certainly have better ideas when I get in a room and brainstorm with other people because they think differently than me. So anyways, there's just all these situations where you can actually reason about it like a group of humans or an individual human and it works, which I don't know, maybe I shouldn't have been surprised but I was.

**中文翻译:**
我不知道，也许我本该预料到，但对我来说最有趣的一点是：当你试图弄清楚某个 AI 产品应该如何运作，或者为什么 AI 会表现出某种特性时，你往往可以像思考“人”一样去思考它，而且非常管用。举几个例子：当我们第一次发布推理模型（Reasoning Model）时，我们是第一个做出能推理的模型的。它不再只是给你一个快速的“系统 1”式回答（比如问神圣罗马帝国第三任皇帝是谁，它秒回）。

你可以问它难题，它会去推理。就像我让你做填字游戏，你不能瞬间填满，你会想：“嗯，横向第一行，可能是这两个词之一，但这意味着这里有个 A，所以那个词必须是这个……”你会反复推敲、回溯、一步步构建。解决任何复杂的物流问题或科学问题都是如此。推理能力的突破很大，但这也是第一次模型需要“坐下来思考”。对于消费级产品来说，这是一个奇怪的范式。你通常不会遇到问个问题要等 25 秒的情况。

所以我们在想：UI 应该怎么做？对于深度研究，模型可能要思考 25 分钟，这反而不难，因为你不会盯着看 25 分钟，你会去干别的，回头再看。但如果是 10 到 25 秒，这段时间很长，但又没长到让你能去干别的事。

于是你可以想：如果你问我一个问题，我需要思考 20 秒才能回答，我会怎么做？我不会突然变哑巴，沉默 20 秒再开口。所以我们不应该只放一个进度条，那很烦人。但我也不可能把脑子里的每一个念头都嘟囔出来。所以我们不应该展示完整的思维链。但我可能会说：“这是个好问题，让我想想。”我会给出一些小的更新提示，这就是我们最终发布的形式。

类似的情况还有：有时候一组模型共同攻克一个问题，然后由一个模型整合它们的输出，效果会更好。这听起来就像头脑风暴。当我和别人在一个房间里头脑风暴时，我的主意会更好，因为大家的思维方式不同。总之，在很多情况下，你可以把模型看作一群人或一个人来推理，这种方法非常有效。我不知道为什么我会感到惊讶，但我确实被惊到了。

---

### [00:39:27] Lenny Rachitsky

**English:**
That is so interesting because when I see these models operate, I never even thought about you guys designing that experience. To me, it just feels like this is what the LLM does. It just sits there and tells me what it's thinking. And I love this point you're making of let's make it feel like a human operating and well, how does a human operate? Well, they just talk aloud. They think, here's the thing I should explore. And I love that deep sequence to the extreme of that where they're just like, "Here's everything I'm doing and thinking." And people actually like that too, I guess. Was that surprising to you, "Maybe that could work too. People seem to like everything?"

**中文翻译:**
这太有趣了，因为当我看到这些模型运行时，我从未想过是你们设计了这种体验。对我来说，感觉就像 LLM 本来就是这样，坐在那告诉我它在想什么。我喜欢你说的“让它感觉像人在操作”这一点。人是怎么操作的？大声说出来，思考接下来该探索什么。我也喜欢 DeepSeek 那种极端的做法，展示“这是我正在做和想的一切”。我想人们其实也挺喜欢那样的。这让你感到惊讶吗？“也许那样也行，人们似乎什么都喜欢？”

---

### [00:40:02] Kevin Weil

**English:**
Yeah. We learned from that actually because when we first launched it, we gave you the subheadings of what the model was thinking about, but not much more. And then deep seek launched and it was a lot and we went, I don't know if everyone wants that. There's some novelty effect to seeing what the model's really thinking about. We felt that too when we were looking at it internally. It's interesting to see the model's chain of thought, but it's not... I think at the scale of 400 million people, you don't want to see the model babble a bunch of things.
(00:40:34):
So what we ended up doing was summarizing it in interesting ways. So instead of just getting the subheadings, you're getting one or two sentences about how it's thinking about it and you can learn from that. So we tried to find a middle ground that we thought was an experience would be meaningful for most people, but showing everybody three paragraphs is probably not the right answer.

**中文翻译:**
是的，我们确实从中学习到了。当我们最初发布时，只给出了模型思考的小标题。后来 DeepSeek 发布了，展示了非常多内容。我们当时想，不知道是不是所有人都想要那么多。看到模型到底在想什么确实有某种新鲜感，我们在内部测试时也有这种感觉。看到思维链很有趣，但……我觉得在 4 亿用户的规模下，你并不想看到模型在那胡言乱语一大堆。

所以我们最终的做法是以有趣的方式进行总结。你不仅能看到小标题，还能看到一两句关于它如何思考的描述，你可以从中学习。我们试图找到一个折中方案，既能让大多数人觉得有意义，又不会让每个人都去读三大段文字。

---

### [00:40:57] Lenny Rachitsky

**English:**
This reminds me of something else you said at the summit that has really stuck with me, this idea that chat, people always make fun of chat is not the future interface for how we interact with AI, but you made this really interesting point that may argue the other side, which is, as humans we interface by talking and the IQ of a human can span from really low to really high and it all works talking to them and chat is the same thing and it can work on all kinds of intelligence levels. Maybe I just shared it, but I guess anything there about just why chat actually ends up being such an interesting interface for LLMs?

**中文翻译:**
这让我想起你在峰会上说的另一件事，我一直记着。人们总嘲笑说“对话框”（Chat）不是未来 AI 交互的界面，但你提出了一个非常有趣的观点：作为人类，我们通过交谈来交互，而人的 IQ 跨度很大，无论高低，通过交谈都能行得通。Chat 也是一样，它可以适应各种智能水平。也许我已经替你说了，但关于为什么 Chat 最终成为 LLM 如此有趣的界面，你还有什么补充吗？

---

### [00:41:30] Kevin Weil

**English:**
Yeah. I don't know, maybe this is one of those things I believe that most people don't believe, but I actually think chat is an amazing interface because it's so versatile. People tend to go, "Chat. Yeah. We'll figure out something better." And I think it's incredibly universal because it is the way we talk. I can talk to you verbally like we're talking now. We can see each other and interact. We can talk on WhatsApp and be texting each other, but all of these things is this unstructured method of communication and that's how we operate.
(00:42:12):
If I had some more rigid interface that I was allowed to use when we spoke, I would be able to speak to you about far fewer things and it would actually get in the way of us having maximum communication bandwidth. So there's something magical. And by the way, in the past it never worked because there wasn't a model that was good at understanding all of the complexity and nuances of human speech, and that's the magic of LLMs. So to me, it's like an interface that's exactly fit to the power of these things. And that doesn't mean that it always has to be just like I don't necessarily always want to type, but you do want that very open-ended, flexible communication medium, it may be that we're speaking and the model's speaking back to me, but you still want the very lowest common denominator, no restrictions way of interacting.

**中文翻译:**
是的。这可能是我坚信但大多数人不信的事情之一：我认为 Chat 是一个了不起的界面，因为它非常通用。人们总说：“Chat 嘛，我们以后会找到更好的。”但我认为它极其普适，因为这就是我们交流的方式。我可以像现在这样和你口头交谈，我们可以互相看见并互动；我们也可以在 WhatsApp 上发短信。所有这些都是非结构化的沟通方式，这就是我们的运作方式。

如果我说话时必须使用某种死板的界面，我能和你聊的话题就会少得多，这实际上会阻碍我们获得最大的沟通带宽。所以这里面有一种魔力。顺便说一下，过去这行不通是因为没有一个模型能很好地理解人类语言的所有复杂性和细微差别，而这正是 LLM 的魔力所在。所以对我来说，Chat 这种界面完美契合了这些模型的能力。这并不意味着它必须一直是打字，但我确实想要那种非常开放、灵活的沟通媒介。也许是我们对谈，模型回话，但你仍然需要那种“最小公分母”、无限制的交互方式。

---

### [00:43:04] Lenny Rachitsky

**English:**
That is so interesting. That's really changed the way I think about this stuff is that point that chat is just so good for this very specific problem of talking to superintelligence basically.

**中文翻译:**
太有趣了。这真的改变了我对这件事的看法：Chat 完美解决了“与超级智能对话”这个特定问题。

---

### [00:43:13] Kevin Weil

**English:**
By the way, I think it's not that it's only chat either. If you have high volume use cases where they're more prescribed and you don't actually need the full generality, there are many use cases where it's better to have something that's less flexible, more prescribed, faster to specific task, and those are great too, and you can build all sorts of those. But you still want chat as this baseline for anything that falls out of whatever vertical you happen to be building for. It's like a catch-all for every possible thing you'd ever want to express to a model.

**中文翻译:**
顺便说一下，我也不是说只能用 Chat。如果你有高频、流程固定的用例，不需要完全的通用性，那么使用灵活性较低、更规范、针对特定任务更快的界面会更好，这些也很棒，你可以构建各种各样的界面。但你仍然需要 Chat 作为底座，来处理任何超出你所构建的垂直领域之外的事情。它就像是一个“全能接收器”，可以承载你想要对模型表达的任何可能的事情。

---

### [00:43:51] Lenny Rachitsky (Ad: OneSchema)

**English:**
I'm excited to chat with Christina Gilbert, the founder of OneSchema, one of our long-time podcast sponsors. Hi, Christina. [Ad content omitted for brevity but translated below]

**中文翻译:**
很高兴能与 OneSchema 的创始人 Christina Gilbert 交谈，她是我们的长期赞助商。OneSchema 最近推出了 FileFeeds，允许你在 15 分钟内构建与任何系统的集成，只要能导出 CSV 到 SFTP 文件夹即可。这让产品团队无需工程团队介入即可提供数千种集成，避免了因系统太难集成而拒绝客户的情况。

---

### [00:45:23] Lenny Rachitsky

**English:**
I want to come back to that you talked about researchers and their relationship with product teams. I imagine a lot of innovation comes from researchers just like having an inkling and then building something amazing and then releasing it, and some ideas come from PMs and engineers. How do those teams collaborate? Does every team have a PM? Is it a lot of research-led stuff? Give us a sense of just where ideas and products come from mostly.

**中文翻译:**
我想回到你提到的研究员（Researchers）与产品团队的关系。我猜很多创新来自于研究员的一个灵感，然后做出了惊人的东西并发布；有些想法则来自 PM 和工程师。这些团队是如何协作的？每个团队都有 PM 吗？是研究主导的吗？请告诉我们想法和产品主要源自哪里。

---

### [00:45:49] Kevin Weil

**English:**
It's an area where we're evolving a lot. I'm really excited about it, frankly. I think if you go back a couple of years when ChatGPT was just getting started, obviously, I wasn't in OpenAI, but... We were more of a pure research company at the time. Chat GPT, if you remember, was a low-key research preview.

**中文翻译:**
这是一个我们正在不断进化的领域。坦白说，我对此非常兴奋。如果你回到几年前 ChatGPT 刚开始的时候（显然我当时不在 OpenAI），我们当时更像是一家纯研究公司。如果你还记得，ChatGPT 当时只是一个低调的“研究预览版”（Research Preview）。

---

### [00:46:14] Lenny Rachitsky

**English:**
For many years.

**中文翻译:**
持续了很多年。

---

### [00:46:15] Kevin Weil

**English:**
Yeah. It wasn't a thing that the team launched thinking it was going to be this massive product.

**中文翻译:**
是的。团队发布它时，并没指望它会成为一个如此巨大的产品。

---

### [00:46:19] Lenny Rachitsky

**English:**
Oh, Chat GPT. Yeah.

**中文翻译:**
噢，ChatGPT，是的。

---

### [00:46:21] Kevin Weil

**English:**
And it was just a way that we were going to let people play with and iterate on the models. So we were primarily a research company, a world-class research company, and as ChatGPT has grown and as we've built our B-to-B products and our APIs and other things, now we're more of a product company than we were. I still think we can't... Open AI should never be a pure product company. We need to be both a world-class research company and a world-class product company, and the two need to really work together, and that's the thing that I think we've been getting much better at over the last six months. If you treat those things separately and the researchers go do amazing things and build models and then they get to some state and then the product and engineering teams go take them and do something with them, we're effectively just an API consumer of our own models.
(00:47:17):
The best products though are going to be, it's like I was talking about with deep research, it's a lot of iterative feedback. It's understanding the products you're trying to sell or the problems you're trying to solve, building evals for them, using those evals to go gather data and fine-tune models to get them to be better at these use cases that you're looking to solve. It's a huge amount of back and forth to do it well. And I think the best products are going to be ENG product design and research working together as a single team to build novel things. So that's actually how we're trying to operate with basically anything that we build. It's a new muscle for us because we're kind of new as a product company, but it's one that people are really excited about because we've seen every time we do it, we build something awesome, and so now every product starts like that.

**中文翻译:**
那只是我们让人们体验和迭代模型的一种方式。所以我们最初主要是一家研究公司，一家世界级的。随着 ChatGPT 的成长，以及我们构建了 B2B 产品、API 等，现在我们比以前更像一家产品公司。但我仍然认为，OpenAI 永远不应该成为一家纯粹的产品公司。我们需要既是世界级的研究公司，又是世界级的产品公司，两者必须紧密结合。这是我认为过去六个月里我们做得越来越好的地方。如果你把这两者分开，研究员去做惊人的模型，模型成型后交给产品和工程团队去处理，那我们实际上只是自己模型的“API 消费者”而已。

最好的产品应该是——就像我提到的深度研究——需要大量的迭代反馈。理解你要卖的产品或要解决的问题，为它们构建 Evals，利用这些 Evals 收集数据并微调模型，使其在这些用例上表现更好。要做好这一点，需要大量的反复沟通。我认为最好的产品将是工程、产品、设计和研究作为一个整体团队共同构建的新奇事物。这正是我们现在构建几乎所有东西的方式。这对我们来说是一块“新肌肉”，因为作为产品公司我们还很年轻，但大家对此非常兴奋，因为我们看到每次这样做都能做出很棒的东西。现在，每个产品都是这样开始的。

---

### [00:48:07] Lenny Rachitsky

**English:**
How many product managers do you have at Open AI? I don't know if you share that number, but if you do.

**中文翻译:**
OpenAI 有多少名产品经理？我不确定你是否方便透露这个数字。

---

### [00:48:11] Kevin Weil

**English:**
Not that many, actually. I don't know, 25. Maybe it's a little more than that. My personal belief is that you want to be pretty PM light as an organization just in general. I say this with love because I am a PM, but too many PMs causes problems. We'll fill the world with decks and ideas versus execution. So I think it's a good thing when you have a PM that is working with maybe slightly too many engineers because it means they're not going to get in and micromanage. You're going to leave a lot of influence and responsibility with the engineers to make decisions. It means you want to have really product-focused engineers, which we're fortunate to have. We have an amazingly product focused, high agency engineering team. But when you have something like that, you have a team that feels super empowered, you have a PM that's trying to really understand the problems and gently guide the team a little bit but has too much going on to get too far into the details, and you end up being able to move really fast. So that's kind of the philosophy we take.
(00:49:23):
We want Product ENG leads and product engineers all the way through. We want not too many PMs, but really awesome, high quality ones, and so far that seems to be working pretty well.

**中文翻译:**
其实不多。大概 25 个，也许稍微多一点。我个人的信念是，组织整体上应该保持“轻 PM”化。我这么说是因为我深爱这个职业，但 PM 太多会出问题。我们会让世界充斥着 PPT 和想法，而不是执行。所以我认为，当一个 PM 带着稍微有点多的工程师时是一件好事，因为这意味着他们没精力去搞微观管理。你会把大量的决策权和责任留给工程师。这意味着你需要非常关注产品的工程师，而我们很幸运拥有这样一支极具产品意识、高能动性（High Agency）的工程团队。在这种情况下，团队会感到被充分授权，PM 负责深入理解问题并提供方向性引导，但因为太忙而无法陷入细节，最终结果就是大家跑得飞快。这就是我们的哲学。

我们希望从头到尾都是产品导向的工程负责人和工程师。我们不需要太多 PM，但需要极其出色、高质量的 PM。目前来看，这种模式运作得非常好。

---

### [00:49:36] Lenny Rachitsky

**English:**
I imagine being a PM at Open AI is a dream come true for a lot of people. At the same time, I imagine it's not a fit for a lot of people. There's researchers involved, very product minded engineers. What do you look for in the PMs that you hire there for folks that are like, "Maybe I shouldn't go work there. I shouldn't even think about that."

**中文翻译:**
我能想象在 OpenAI 当 PM 是很多人的梦想。但同时，我也觉得这并不适合所有人。这里有研究员，有非常有产品头脑的工程师。你在招聘 PM 时看重什么？对于那些可能在想“也许我不该去那儿工作”的人，你有什么建议？

---

### [00:49:54] Kevin Weil

**English:**
I think, I've said this a few times, but high agency is something that we really look for, people that are not going to come in and wait for everyone else to allow them to do something, they're just going to see a problem and go do it. It's just a core part of how we work. I think people that are happy with ambiguity, because there is a massive amount of ambiguity here, it is not the kind of place, and we have trouble sometimes with more junior PMs because of this, because it's just not the place where someone is going to come in and say, "Okay, here's the landscape, here's your area, I want you to go do this thing." And that's what you want as an early career PM. I mean, no one here has time and the problems are too ill-formed and we're figuring them all out as we go. And so high agency, very comfortable with ambiguity, ready to come in and help execute and move really quickly. That's kind of our recipe.
(00:50:55):
And I think also happy leading through influence because... I mean it's usual as a PM, people don't report to you, your team doesn't report to you, et cetera, but you also have the complexity of a research function, which is even more sort of self-directed and it's really important to build a good rapport with the research team. I think the EQ side of things is also super important for us.

**中文翻译:**
我已经说过好几次了，“高能动性”（High Agency）是我们非常看重的。我们需要那种不会坐等别人授权才去干活的人，他们看到问题就会直接动手解决。这是我们工作方式的核心。其次，要能适应模糊性（Ambiguity），因为这里有大量的模糊性。我们有时在招聘初级 PM 时会遇到困难，因为这里不是那种会有人告诉你“这是现状，这是你的领地，去把这件事做了”的地方。作为职业生涯早期的 PM，你可能渴望这种明确性，但在 OpenAI，没人有时间，问题也还没成型，我们都是边走边摸索。所以，高能动性、极度适应模糊性、随时准备进来执行并快速行动，这就是我们的秘诀。

另外，要擅长通过影响力来领导。作为 PM，通常没人直接向你汇报，但在这里你还要面对研究职能的复杂性，他们更加自我驱动。与研究团队建立良好的关系至关重要。我认为情商（EQ）对我们来说也非常重要。

---

### [00:51:24] Lenny Rachitsky

**English:**
I know at most companies, a PM comes in and they're just like, "Why do we need you?" And as a PM you have to earn trust and help people see the value, and I feel like at Open AI it's probably a very extreme version of that where they're like, "Why do we need this person? We have researchers, engineers, what are you going to do here?"

**中文翻译:**
我知道在大多数公司，PM 刚进来时，别人会想：“我们为什么需要你？”PM 必须赢得信任并证明价值。我觉得在 OpenAI，这种情况可能更极端，大家会想：“我们有研究员、有工程师，要你干嘛？”

---

### [00:51:40] Kevin Weil

**English:**
Yeah, I think people appreciate it done right, but you bring people along. I think one of the most important things a PM can do well is be decisive. So there's a real fine line. You don't want to be making... I mean it's kind of like, I don't love the PM as the CEO of the product illusion all the time, but just like Sam in his role would be making mistakes if he made every single decision in every meeting that he was in. And he would also be making mistakes if he made no decisions in any meetings that he was in, right? It's understanding when to defer to your team and to let people innovate. And when there is a decision to be made that people either don't feel comfortable with or don't feel empowered to make, or a decision that has too many different disparate pros and cons that are spread out across a big group and someone needs to be decisive and make a call, it's a really important trait of a CEO.
(00:52:41):
It's something Sam does well, and it's also a really important trait of a PM kind of at a more microscopic level. So because there's so much ambiguity, it's not obvious what the answer is in a lot of cases, and so having a PM that can come in and... And by the way, this doesn't need to be a PM, I'm perfectly happy if it's anybody else, but I kind of look to the PM to say, if there's ambiguity and no one's making a call, you better make sure that we get a call made and we move forward.

**中文翻译:**
是的，如果做得对，大家会很感激。你需要带着大家一起走。我认为 PM 能做的最重要的事之一就是果断（Decisive）。这有一条微妙的界线。我不完全认同“PM 是产品的 CEO”这种说法，但就像 Sam，如果他在每个会议上都做每一个决定，那是错的；如果他在所有会议上都不做决定，那也是错的。关键在于理解什么时候该听取团队意见并让大家创新，而什么时候当大家感到不安、不敢授权或面对利弊交织的复杂局面时，需要有人站出来拍板。这是 CEO 的重要特质。

Sam 做得很好，这也是 PM 在微观层面上非常重要的特质。因为有太多的模糊性，很多时候答案并不显而易见。所以需要一个 PM 站出来——顺便说一下，不一定非得是 PM，任何人都可以——但我倾向于指望 PM 确保：如果存在模糊性且没人做决定，你必须确保最终有人拍板，让我们继续前进。

---

### [00:53:07] Lenny Rachitsky

**English:**
This touches on a few posts I've done of just, where is AI going to take over work that we do versus help us with various work? So let me come at this question from a different direction of just how AI impacts product teams and hiring, things like that. So first of all, there's all this talk of LM's doing our coding for us, and 90% of code is going to be written by AI in a year. Dario at Anthropic said that. At the same time, you guys are all hiring engineers like crazy, PM's like crazy. Every function is dead, but you're still hiring every single one. I guess just, first of all, let me just ask this, how do you and the team, say engineers, PMs, use AI in your work? Is there anything that's really interesting or things that you think people are sleeping on in how you use AI in your day-to-day work?

**中文翻译:**
这涉及到了我写过的一些文章：AI 会在哪些方面取代我们的工作，又会在哪些方面辅助我们？让我换个角度问：AI 如何影响产品团队和招聘？首先，到处都在传 LLM 会替我们写代码，一年内 90% 的代码将由 AI 编写（Anthropic 的 Dario 这么说过）。但与此同时，你们还在疯狂招聘工程师和 PM。虽然说各种职能都“死”了，但你们每个岗位都在招。我想问，你和你的团队（工程师、PM）在工作中是如何使用 AI 的？有没有什么特别有趣、或者你觉得大家还没意识到的用法？

---

### [00:53:52] Kevin Weil

**English:**
We use it a lot. I mean, every one of us is in Chat GPT all the time summarizing docs, using it to help write docs with GPTs that write product specs and things like that, all the stuff that you would imagine. I mean talk about writing evals, you can actually use models to help you write evals and they're pretty good at it. That all said, I'm still sort of disappointed by us, and I really mean me, in, if I were to just teleport my five-year-old self leading product at some other company into my day job, I would recognize it still. And I think we should be in a world, certainly a year from now, probably even more now, where I almost wouldn't recognize it because the workflows are so different and I'm using AI so heavily, and I'd still recognize it today. So I think in some sense, I'm not doing a good enough job of that.
(00:54:46):
Just to give an example, why shouldn't we be vibe coding demos right, left and center? Instead of showing stuff in Figma, we should be showing prototypes that people are vibe coding over the course of 30 minutes to illustrate proofs of concept and to explore ideas. That's totally possible today, and we're not doing it enough. Actually, our chief people officer, Julia, was telling me the other day, she vibe coded an internal tool that she had at a previous job that she really wanted to have here at Open AI and she opened, I don't know, Windsurf or something, and vibe coded it. How cool is that? And if our chief people officer is doing it, we have no excuse to not be doing it more.

**中文翻译:**
我们用得非常多。每个人都在不停地用 ChatGPT 总结文档、用专门写产品规格（Specs）的 GPT 辅助写作等等，这些你都能想到。说到编写 Evals，你其实可以让模型帮你写，它们干得不错。尽管如此，我对自己（也包括团队）还是有点失望。如果把五年前在其他公司领导产品的我传送到现在的岗位上，我仍然能认出这个工作。我认为在一年后，甚至现在，我们应该处于一个我几乎认不出这个工作的世界，因为工作流应该完全不同，AI 的参与度应该极高。但今天我仍然能认出它。所以从某种意义上说，我觉得我做得还不够好。

举个例子，为什么我们不应该到处进行“氛围编程”（Vibe Coding）演示呢？与其在 Figma 里展示东西，我们应该展示人们在 30 分钟内通过“氛围编程”搞出来的原型，用它来展示概念验证（PoC）和探索想法。这在今天完全可行，但我们做得还不够。事实上，我们的首席人力官 Julia 前几天告诉我，她用“氛围编程”做了一个她在前公司用过、现在也想在 OpenAI 用的内部工具。她打开了 Windsurf 之类的工具，直接“氛围编程”搞定了。这多酷啊！如果我们的首席人力官都在这么做，我们没有理由不做得更多。

---

### [00:55:34] Lenny Rachitsky

**English:**
That's an awesome story. And some people may not have heard this term vibe coding. Can you describe what that means?

**中文翻译:**
这个故事太棒了。有些人可能还没听过“氛围编程”（Vibe Coding）这个词。你能描述一下它是什么意思吗？

---

### [00:55:40] Kevin Weil

**English:**
Yeah, I think this was Andrej's term.

**中文翻译:**
是的，我想这是 Andrej (Karpathy) 发明的词。

---

### [00:55:45] Lenny Rachitsky

**English:**
Andrej Karpathy. Yeah.

**中文翻译:**
Andrej Karpathy，没错。

---

### [00:55:46] Kevin Weil

**English:**
Andrej Karpathy. Yeah. So you have these tools like Cursor and Windsurf and GitHub Copilot that are very good at suggesting what code you might want to write. So you can give them a prompt and they'll write code and then as you go to edit it, it's suggesting what you might want to do. And the way that everyone started using that stuff was, give it a prompt, have it do stuff, you go edit it, give it a prompt, and you're kind of really going back and forth with the model the whole time. As the models are getting better and as people are getting more used to it, you can kind of just let go of the wheel a little bit. And when the model's suggesting stuff, it's just like, tap, tap, tap, tap, tap. Keep going. Yes, yes, yes, yes, yes.
(00:56:29):
And of course the model makes mistakes or it does something that doesn't compile, but when it doesn't compile, you paste the error in and you say, go, go, go, go, go. And then you test it out and it does one thing that you don't want it to do, so you enter in an instruction and say, go, go, go, go, go, and you just let the model do its thing. And it's not that you would do that for production code that needed to be super tight today yet, but for so many things, you're trying to get to a proof of concept, you're getting to a demo and you can really take your hands off the wheel and the model will do an amazing job, and that's vibe coding.

**中文翻译:**
是的。你有 Cursor、Windsurf 和 GitHub Copilot 这些工具，它们非常擅长建议代码。你可以给它们一个提示词，它们写出代码，当你去修改时，它们会建议下一步。最初大家的使用方式是：给提示词，让它写，你去改，再给提示词，全程和模型反复拉锯。随着模型变强，大家也习惯了，你可以稍微“松开方向盘”。当模型建议代码时，你就一直按 Tab 键：对，对，继续，对。

当然模型会犯错，或者代码编译不通过。但如果不通过，你就把错误贴回去，说“继续，修好它”。然后你测试一下，发现有个地方不是你想要的，你就输入一条指令，然后继续让它跑。虽然你现在可能还不会用这种方式写需要极其严谨的生产环境代码，但对于很多事情——比如搞 PoC、做 Demo——你完全可以放手让模型去干，它会完成得很出色。这就是“氛围编程”。

---

### [00:57:05] Lenny Rachitsky

**English:**
That's an awesome explanation. I think the pro version of that, which is, I think, the way Andre even described it as you talk, there's a step like whisper or super whisper or something like that where you're talking to the model, not even typing.

**中文翻译:**
解释得太棒了。我想这还有个“专业版”，就像 Andrej 描述的那样，你甚至不用打字，而是通过 Whisper 之类的工具直接和模型对话。

---

### [00:57:17] Kevin Weil

**English:**
Yeah, totally.

**中文翻译:**
是的，完全正确。

---

### [00:57:19] Lenny Rachitsky

**English:**
Oh man. So let me just ask, I guess, when you look at product teams in the future, you talked about how you guys should be doing this more, instead of designs, having prototypes, what do you think might be the biggest changes in how product teams are structured or built? Where do you think things are going in the next few years?

**中文翻译:**
天哪。那么我想问，当你展望未来的产品团队时，你提到你们应该更多地用原型代替设计，你认为产品团队的结构或构建方式最大的变化会是什么？未来几年会走向何方？

---

### [00:57:36] Kevin Weil

**English:**
I think you're definitely going to live in a world where you have researchers built into every product team. And I don't even mean just at foundation model companies because I think the future... Actually, frankly one thing that I'm sort of surprised about about our industry in general is that there's not a greater use of fine-tuned models. A lot of people... These models are very good, so our API does a lot of things really well, but when you have particular use cases, you can always make the model perform better on a particular use case by fine-tuning it. It's probably just a matter of time. Folks aren't quite comfortable yet with doing that in every case. But to me, there's no question that that's the future. Models are going to be everywhere just like transistors are everywhere, AI is going to be just a part of the fabric of everything we do, but I think there are going to be a lot of fine-tuned models because why would you not want to more specifically customize a model against a particular use case?
(00:58:37):
And so I think you're going to want sort of quasi researcher machine learning engineer types as part of pretty much every team because fine-tuning a model is just going to be part of the core workflow for building most products. So that's one change that maybe you're starting to see at foundation model companies that will propagate out to more teams over time.

**中文翻译:**
我认为你肯定会看到研究员被整合进每一个产品团队。我指的不只是大模型公司。坦白说，我对整个行业感到惊讶的一点是，微调模型（Fine-tuned models）的使用还不够广泛。虽然通用模型已经很好了，我们的 API 表现也很棒，但针对特定用例，你总是可以通过微调让模型表现得更好。这可能只是时间问题，大家现在还没习惯在所有情况下都这么做。但对我来说，未来毫无疑问是这样的：模型将像晶体管一样无处不在，AI 将成为我们所做一切的基础。而且会有大量的微调模型，因为你没理由不针对特定用例去定制模型。

因此，我认为几乎每个团队都需要那种“准研究员”或“机器学习工程师”类型的人才，因为微调模型将成为构建大多数产品的核心工作流。这是你目前在大模型公司能看到的趋势，随着时间推移，它会扩展到更多团队。

---

### [00:58:57] Lenny Rachitsky

**English:**
I'm curious if there a concrete example that makes that real, and I'll share one that comes to mind as you talk, which is, when you look at Cursor and Windsurf, something I learned from those founders is that they use a Sonnet, but then they also have a bunch of custom models that help along the edges that make the specific experience that's not just generating code even better like auto-complete and looking ahead to where things are going. So is that one or any other examples of which you... What is a fine-tuned model? Do you think teams will be building with these researchers on their teams?

**中文翻译:**
我很好奇有没有具体的例子。我想到一个：Cursor 和 Windsurf。我从那些创始人那里了解到，他们虽然使用 Sonnet，但也有很多自定义模型来处理边缘任务，让特定体验（不只是生成代码）变得更好，比如自动补全和预测下一步。这是其中一个例子吗？你认为团队会和这些研究员一起构建什么样的微调模型？

---

### [00:59:29] Kevin Weil

**English:**
Yeah. I mean, so when you're a model, you're basically giving the model a bunch of examples of the kinds of things you want it to be better at. So it's, "Here's a problem, here's a good answer. Here's a problem, here's a good answer," Or, "Here's a question, here's a good answer times a thousand or 10,000." And suddenly you're teaching the model to be much better than it was out of the gate at that particular thing. We use it everywhere internally. We use ensembles of models much more internally than people might think. So it's not, "I have 10 different problems. I'll just ask baseline GPT four oh about a bunch of these things." If we have 10 different problems, we might solve them using 20 different model calls, some of which are using specialized fine-tuned models, they're using models of different sizes because maybe you have different latency requirements or cost requirements for different questions.
(01:00:32):
They are probably using custom prompts for each one. Basically you want to teach the model to be really good at... You want to break the problem down into more specific tasks versus some broader set of high level tasks. And then you can use models very specifically to get very good at each individual thing. And then you have an ensemble that tackles the whole thing. I think a lot of good companies are doing that today. I still see a lot of companies giving the model single, generic, broad problems versus breaking the problem down, and I think there will be more breaking the problem down using specific models for specific things, including fine tuning.

**中文翻译:**
是的。微调基本上就是给模型一大堆例子，告诉它你想让它在哪些方面变强。比如：“这是问题，这是好答案”，重复一千次或一万次。突然间，你就教会了模型在特定任务上比初始状态强得多。我们在内部到处都在用。我们内部使用的“模型集成”（Ensembles of models）比人们想象的要多得多。我们不会说“我有 10 个问题，全丢给原生的 GPT-4o”。如果我们有 10 个问题，我们可能会调用 20 次模型，其中一些是专门微调过的模型，有些是不同尺寸的模型，因为不同问题对延迟或成本的要求不同。

我们可能为每个调用都定制了提示词。基本上，你会想把问题分解成更具体的任务，而不是一个宽泛的高级任务。然后针对每个具体环节使用特定的模型。最后用一个集成系统来处理整个流程。我认为很多优秀的公司已经在这么做了。但我仍然看到很多公司只是给模型一个单一、通用、宽泛的问题，而不是去拆解它。我认为未来会有更多这种拆解，并针对特定环节使用特定模型（包括微调模型）。

---

### [01:01:24] Lenny Rachitsky

**English:**
And so in your case, because this is really interesting, is that you're using different levels of Chat GPT, like a 1 0 3 and stuff that's earlier because it's cheaper.

**中文翻译:**
所以对你们来说（这很有趣），你们会使用不同级别的 ChatGPT，比如 o1、o3 或者更早期的版本，因为它们更便宜。

---

### [01:01:24] Kevin Weil

**English:**
There'll be parts of our internal stack. I'll give you an example. Customer support, with 400 plus million weekly active users, we get a lot of inbound tickets. I don't know how many customer support folks we have, but it's not very many, 30, 40, I'm not sure, way smaller than you would have at any comparable company, and it's because we've automated a lot of our flows. We've got most questions using our internal resources, knowledge base, guidelines for how we answer questions, what kind of personality, et cetera. You can teach the model those things and then have it do a lot of its answers automatically, or where it doesn't have the full confidence to answer a particular question, it can still suggest an answer, request a human to look at it and then that human's answer actually is its own sort of fine tuning data for the model. You're telling it the right answer in a particular case.
(01:02:29):
We're using... At various places. Some of these places, you want a little bit more reasoning, is not super latency sensitive, so you want a little more reasoning, and we'll use one of our O series models. In other places, you want a quick check on something and so you're fine to use four oh mini, which is super fast and super cheap. In general, it's like specific models for specific purposes and then you ensemble them together to solve problems. By the way, again, not unlike how we as humans solve problems, a company is arguably an ensemble of models that have all been fine tuned based on what we studied in college and what we have learned over the course of our careers. We've all been fine tuned to have different sets of skills and you group them together in different configurations and the output of the ensemble is much better than the output of any one individual.

**中文翻译:**
这构成了我们内部技术栈的一部分。举个例子：客户支持。我们有超过 4 亿周活用户，每天有海量的工单。我不知道我们具体有多少客服人员，但非常少，大概 30 到 40 人，远少于同等规模的公司。这是因为我们自动化了大部分流程。我们利用内部资源、知识库、回答准则和语气指南来训练模型。你可以教模型这些东西，让它自动回答大部分问题。如果它对某个问题没把握，它会生成一个建议答案并请求人工审核，而人工的修改又成了模型的微调数据——你在告诉它特定情况下的正确答案。

我们在不同场景使用不同模型。有些场景需要更多推理，且对延迟不敏感，我们就用 o 系列模型。有些场景只需要快速检查，我们就用 4o mini，它极快且极便宜。总的来说，就是针对特定目的使用特定模型，然后集成起来解决问题。顺便说一下，这和人类解决问题的方式非常相似。一家公司其实就是一个“模型集成”，每个人都根据大学所学和职业生涯所获进行了“微调”。我们都被微调成了拥有不同技能的人，把我们以不同配置组合在一起，集成的产出远比任何个人都要好。

---

### [01:03:20] Lenny Rachitsky

**English:**
Kevin, you're blowing my mind. That sounds exactly correct. And also, different people, you pay them less, they cost less to talk to, some people take a long time to answer, some people hallucinating. This is...

**中文翻译:**
Kevin，你震撼到我了。这听起来完全正确。而且，不同的人薪水不同（成本不同），有些人回答得慢，有些人会产生幻觉。这简直是……

---

### [01:03:38] Kevin Weil

**English:**
I'm telling you. This is a mental model but really does work in thinking...

**中文翻译:**
我告诉你，这是一个非常有用的思维模型……

---

### [01:03:41] Lenny Rachitsky

**English:**
Oh, right. Yeah. This is great. Some people are visual, they want to dry out their thinking, some people want to talk word cell. Wow, this is a really good metaphor. So again, coming back to your advice here because I love that we circled back to it, you're finding a really good way to think about how to design great AI experiences and LMs, I guess, specifically is think about how a person would do this.

**中文翻译:**
没错。这太棒了。有些人是视觉型的，有些人是文字型的。哇，这个比喻太妙了。回到你的建议，你找到了一种设计优秀 AI 体验和 LLM 的绝佳思考方式：想象一个“人”会如何处理这件事。

---

### [01:04:01] Kevin Weil

**English:**
Well, it's maybe not always the answer is to think about how a person would do it, but sometimes to gain intuition for how you might solve a problem, you think about what an equivalent human would do in those situations and use that to at least gain a different perspective on the problem.

**中文翻译:**
嗯，也许这并不总是标准答案，但为了获得解决问题的直觉，你可以思考一个对等的人在那种情况下会怎么做，并以此获得看待问题的不同视角。

---

### [01:04:18] Lenny Rachitsky

**English:**
Wow, this is great.

**中文翻译:**
哇，太棒了。

---

### [01:04:22] Kevin Weil

**English:**
Because some of this really is talking to a model. There's a lot of prior art because we talk to other humans all the time and encounter them in all sorts of different situations, and so there's a lot to learn from that.

**中文翻译:**
因为这本质上是在和模型对话。我们有大量的“先验知识”，因为我们一直在和人打交道，在各种情况下遇到他们，所以有很多可以借鉴的地方。

---

### [01:04:34] Lenny Rachitsky

**English:**
Okay, so speaking of humans, I want to chat about the future a little bit. So you have three kids, and a community member asked me this hilarious question that I think it's something a lot of people are thinking about. So this is Patrick [inaudible 01:04:47]. I worked with him at Airbnb. He says ask what he's encouraging his kids to learn to prepare for the future. I'm worried my 6-year-old by the year 2036 will face a lot of competition trying to get into the top roofing or plumbing programs and need a backup plan.

**中文翻译:**
好，说到人，我想聊聊未来。你有三个孩子，一位社区成员问了一个很有趣的问题，我觉得很多人都在想。这是 Patrick 问的，我以前在 Airbnb 的同事。他说：问问 Kevin 他在鼓励孩子学习什么来应对未来？我担心我 6 岁的孩子到 2036 年会面临激烈的竞争，甚至进不去顶尖的屋顶修缮或管道维修培训项目，需要个备选计划。

---

### [01:05:02] Kevin Weil

**English:**
That's funny. So our kids, we have a 10 year old and eight year old twins, so they're still pretty young. It's amazing how AI native they are. It's completely normal to them that there are self-driving cars. That they can talk to AI all day long. They have full conversations with Chat GPT and Alexa and everything else. I don't know, who knows what the future holds? I think things like coding skills are going to be relevant for a long time, who knows? But I think if you teach your kids to be curious, to be independent, to be self-confident, you teach them how to think, I don't know what the future holds, but I think that those are going to be skills that are going to be important in any configuration of the future. And so it's not like we have all the answers, but that's how Elizabeth and I think about our kids.

**中文翻译:**
这很有趣。我们的孩子一个 10 岁，还有一对 8 岁的双胞胎，都很小。他们是真正的“AI 原住民”，这太神奇了。对他们来说，自动驾驶汽车是理所当然的，整天和 AI 说话也是理所当然的。他们会和 ChatGPT、Alexa 深入交谈。我不知道未来会怎样，也许编程技能在很长一段时间内仍然相关，谁知道呢？但我认为，如果你教孩子保持好奇心、独立性、自信心，教他们如何思考，无论未来如何演变，这些技能都将至关重要。我们并没有所有答案，但这就是我和 Elizabeth 教育孩子的方式。

---

### [01:06:02] Lenny Rachitsky

**English:**
And do you find that AI... There's a lot of talk about AI tutoring. Is that something you guys are doing? I know they're using Chat GPT, I love all the photos you post where they're playing with prompts and stuff, but I guess is there anything there you're experimenting with or you think is going to become really important?

**中文翻译:**
你觉得 AI……现在有很多关于 AI 辅导（Tutoring）的讨论。你们在做这方面的事吗？我知道他们在用 ChatGPT，我喜欢你发的那些他们玩提示词的照片，但你觉得有什么正在实验的、或者未来会变得非常重要的东西吗？

---

### [01:06:16] Kevin Weil

**English:**
This is something that... It's maybe the most important thing that AI could do. Maybe that's a grand statement. There are lots of important things that AI can do, including speeding up the pace of fundamental science research and discovery, which maybe is actually the most important thing AI can do. But one of the most important things would be personalized tutoring. And it kind of blows my mind that there is still... I know there are a bunch of good products out there. Khan Academy does great things. They're a wonderful partner of ours. Vinod Khosla has a non-profit that's doing some really interesting stuff in this space and is making an impact. But I'm kind of surprised that there isn't a 2 billion kid AI personalized tutoring thing because the models are good enough to do it now, and every study out there that's ever been done seems to show that when you have... Like, education is still important, but when you combine that with personalized tutoring, you get multiple standard deviation improvements in learning speed.
(01:07:31):
And so it's uncontroversial, it's good for kids, it's free. Chat GPT is free, you don't need to pay, and the models are good enough. It still just kind of blows my mind that there isn't something amazing out there that our kids are using and your future kids are using, and people in all sorts of places around the world that aren't as lucky as our kids to be able to have this sort of built-in, solid education. Again, Chat GPT is free. People have Android devices everywhere. I really just think this could change the world and I'm surprised it doesn't exist and I want it to exist.

**中文翻译:**
这可能是 AI 能做的最重要的事情。也许这个说法有点宏大，AI 能做很多重要的事，包括加速基础科学研究和发现，那可能才是最重要的。但个性化辅导绝对是其中之一。让我惊讶的是，虽然现在有一些好产品，比如可汗学院（Khan Academy）——他们是我们的优秀合作伙伴；Vinod Khosla 的非营利组织也在做有趣且有影响力的事。但我很惊讶为什么还没有一个覆盖 20 亿儿童的 AI 个性化辅导产品。

现在的模型已经足够强大了。每一项研究都表明，虽然基础教育很重要，但如果结合个性化辅导，学习速度会有几个标准差的提升。这是毫无争议的，对孩子有好处，而且是免费的。ChatGPT 是免费的，模型也够好。我仍然觉得不可思议，为什么还没有一个让全世界孩子（包括那些不像我们的孩子这么幸运、没有良好教育资源的孩子）都能使用的惊人产品。ChatGPT 免费，安卓设备到处都是。我真的认为这能改变世界，我很惊讶它还没大规模出现，我希望它出现。

---

### [01:08:08] Lenny Rachitsky

**English:**
This kind of touches on something I want to spend a little time on, which is a lot of people also worry a lot about AI, where it's going, they worry about jobs it's going to take, they worry about the super intelligence squashing humanity in the future. What's your perspective on that and just the optimistic case that I think people need to hear?

**中文翻译:**
这触及了我想要多花点时间聊的话题：很多人非常担心 AI 的走向，担心它抢走工作，担心未来的超级智能会毁灭人类。你对此有什么看法？你认为人们需要听到的乐观案例是什么？

---

### [01:08:27] Kevin Weil

**English:**
I mean, I'm a big technology optimist. I think if you look over the last 200 years, maybe more, technology has driven a lot of the advancements that have made us the world and the society that we are today. It drives economic advancements, it drives geopolitical advancements, quality of life, longevity advancement. I mean, technology's at the root of just about everything, so I think there are very few examples where this is anything but a great thing over the longer term. That doesn't mean that there aren't...

**中文翻译:**
我是一个坚定的技术乐观主义者。如果你看过去 200 年甚至更久，技术驱动了大量的进步，造就了今天的世界和社会。它驱动了经济、地缘政治、生活质量和寿命的提升。技术是几乎一切事物的根源。所以我认为，从长远来看，几乎没有例子能证明技术不是一件好事。但这并不意味着没有……

---

### [01:09:00] Kevin Weil (continued)

**English:**
... a great thing over the longer term. That doesn't mean that there aren't temporary dislocations or where there aren't individuals that are impacted, and that matters too. So it can't just be that the average is good. You've got to also think about how you take care of each individual person as best you can.
(01:09:18):
It is something that we think a lot about and as we work with the administration, as we work with policy, we try and help wherever we can. We do a lot with education. One of the benefits here is that ChatGPT is also perhaps the best reskilling app you could possibly want. It knows a lot of things. It can teach you a lot of things if you're interested in learning new things.
(01:09:43):
These are very real issues. I'm super optimistic about the long run, and we're going to need to do everything we can as a society to ensure that we make this transition as graceful and as well-supported as we can.

**中文翻译:**
……从长远来看是好事。但这并不意味着不会出现暂时的错位，或者某些个人不会受到影响，这些也很重要。不能只说平均水平是好的，你还必须考虑如何尽可能照顾到每一个个体。

这是我们经常思考的问题。在与政府和政策制定者合作时，我们尽力提供帮助。我们在教育方面做了很多工作。ChatGPT 的一个优势是，它可能是你能找到的最好的“技能再培训”应用。它博学多才，如果你想学新东西，它可以教你。

这些都是非常现实的问题。我对长远发展非常乐观，但作为一个社会，我们需要竭尽全力确保这一转型尽可能平稳，并提供充足的支持。

---

### [01:09:59] Lenny Rachitsky

**English:**
To give people a sense of where things might be going. That's a big question in a lot of people's minds. So someone asked this question that I love, which is, "AI is already changing, creative work in a lot of different ways, writing and design and coding, what do you think is the next big leap? What should we be thinking is the next big leap in AI-assisted creativity specifically, and then just broadly, where do you think things are going to be going in the next few years?"

**中文翻译:**
为了让大家对未来的走向有个概念（这是很多人心中的大疑问），有人问了一个我很喜欢的问题：“AI 已经在写作、设计和编程等创意工作中带来了很多改变。你认为下一个重大飞跃是什么？特别是在 AI 辅助创意方面，我们应该期待什么？广义上说，你认为未来几年会发生什么？”

---

### [01:10:23] Kevin Weil

**English:**
Yeah. This is also an area where I'm a big optimist. If you look at Sora, for example. I mean we talked about ImageGen earlier and the absolute fount of creativity that people are putting across Twitter and Instagram and other places. I am the world's worst artist like the worst. Maybe the only thing I'm worse at than art is singing. Give me a pencil and a pad of paper and I can't draw better than our eight-year-old. But give me ImageGen and I can think some creative thoughts and put something into the model and suddenly have output that I couldn't have possibly done myself. That's pretty cool.
(01:11:09):
Even you look at folks that are really talented. I was talking to a director recently about Sora, someone who's directed films that we would all know, and he was saying, for a film that he's doing, take the example of some sort of sci-fi-ish, think of Star Wars, and you've got some scene where there's a plane zooming into some Death Star-like thing. And so you've got the plane looking at the whole planet, and then you want to cut to a scene where the plane's kind of at the ground level, and all of a sudden you see the city and everything else. How are we going to manage that cut scene? And that transition?
(01:11:51):
And he was saying, "In the world of two years ago, I would have paid a 3D effects company a hundred grand and they would've taken a month, and they would've produced two versions of this cut scene for me. And I would've evaluated them. We would've chosen one, because what are you going to do? Pay another 50 grand and wait another month. And we would've just gone with it. And it would be fine. Movies are great. I love them. And there've been..."
(01:12:25):
Obviously, we can do great things with the technology that we've had, but you now look at what you can do with Sora. And his point was, "Now, I can use Sora, our video model, and I can get 50 different variations of this cut scene just me brainstorming into a prompt and the model brainstorming a little bit with me. I've got 50 different versions. And then of course, I can iterate off of those and refine them and take different ideas. And now I'm still going to go to that 3D effects studio to produce the final one, but I'm going to go having brainstormed and had a much more creative approach with an outcome that's much better. And I did that assisted by AI."
(01:13:08):
My personal view on creativity in general is that it's no one's going to... You don't type into Sora like, "Make me a great movie." It requires creativity and ingenuity, and all these things, but it can help you explore more. It can help you get to a better final result. So, again, I tend to be an optimist in most things, but actually, I think there's a very good story here.

**中文翻译:**
是的，这又是我非常乐观的一个领域。以 Sora 为例。我们之前聊过 ImageGen，以及人们在 Twitter 和 Instagram 上展现出的无穷创意。我是世界上最差的艺术家，真的最差。也许唯一比画画更差的就是唱歌。给我一支笔和一张纸，我画得还不如我 8 岁的孩子。但有了 ImageGen，我可以把创意想法输入模型，突然间就得到了我靠自己绝对做不出来的产出。这太酷了。

即使是那些极具天赋的人也是如此。我最近和一位执导过家喻户晓电影的导演聊到 Sora。他说，假设他正在拍一部类似《星球大战》的科幻片，有一个镜头是飞船冲向类似“死星”的物体。你先看到飞船俯瞰整个星球，然后想切换到飞船降落到地面、看到城市和一切的场景。如何处理这个过场动画和过渡？

他说：“在两年前，我会付给 3D 特效公司 10 万美元，等一个月，他们会给我两个版本的过场动画。我会评估一下，选一个。因为你还能怎么办？再付 5 万美元再等一个月吗？我们就那样拍了，电影也很棒。显然，利用现有技术我们已经能做出伟大的作品。”

但现在看 Sora 能做什么。他的观点是：“现在，我可以用 Sora 这个视频模型，通过提示词进行头脑风暴，模型也会反馈给我。我可以得到 50 个不同版本的过场动画。然后我可以基于这些进行迭代、完善，汲取不同的灵感。最后我还是会去找 3D 特效工作室制作最终版本，但我去的时候已经经过了充分的头脑风暴，有了更具创意的方案，结果也会好得多。而这一切都是在 AI 辅助下完成的。”

我个人对创意的看法是：没人能直接对 Sora 说“给我拍部大片”。它仍然需要人类的创意、才智和所有这些东西，但它可以帮你探索更多可能性，帮你达到更好的最终结果。所以，我依然保持乐观，我认为这是一个非常棒的故事。

---

### [01:13:31] Lenny Rachitsky

**English:**
I know Sam Altman, I think it was him who tweeted recently, the creative writing piece that you guys are working on where it's... He is very bad at writing creative stuff, and he shared an example where it's actually really good. I imagine that's another area of investment.

**中文翻译:**
我知道 Sam Altman 最近发了推文，关于你们正在开发的创意写作部分。他说他很不擅长写创意内容，但他分享了一个例子，写得真的很好。我猜那是另一个重点投入的领域。

---

### [01:13:43] Kevin Weil

**English:**
Yeah, there's some exciting stuff happening internally with some new research techniques. We'll have more to say about that at some point. But yeah, Sam sometimes likes to show off some of the stuff that's coming, which is smart. By the way, it's very indicative of this iterative deployment philosophy. We don't have some breakthrough and keep it to ourselves forever, and then bestow it upon the world someday. We kind of just talk about the things we're working on and share when we can and launch early and often, and then iterate in public. I really like that philosophy.

**中文翻译:**
是的，内部有一些基于新研究技术的令人兴奋的进展。我们会在某个时候透露更多。Sam 有时喜欢展示一些即将到来的东西，这很聪明。顺便说一下，这非常符合“迭代部署”的哲学。我们不会在取得突破后永远藏着掖着，然后某天突然“恩赐”给世界。我们只是谈论正在做的事，尽可能分享，尽早且频繁地发布，然后在公众面前迭代。我非常喜欢这种哲学。

---

### [01:14:22] Lenny Rachitsky

**English:**
I love all these hints that a few things coming. I know you can't say too much. You talked about how there might be a coding leap coming in the near future maybe by the time this comes out. Is there anything else people should be thinking about, might be coming in the near future? Any things you can tease that are interesting? Exciting?

**中文翻译:**
我喜欢这些关于即将到来的新事物的暗示。我知道你不能说太多。你提到在不久的将来（也许在这个播客发布时）会有编程能力的飞跃。还有什么人们应该关注的、近期可能出现的东西吗？有什么有趣或令人兴奋的消息可以透露吗？

---

### [01:14:38] Kevin Weil

**English:**
Man, this hasn't been enough for you?

**中文翻译:**
伙计，这些还不够吗？

---

### [01:14:41] Lenny Rachitsky

**English:**
Only everything is getting better every day.

**中文翻译:**
毕竟现在每天一切都在变得更好。

---

### [01:14:44] Kevin Weil

**English:**
Yeah. I'm like, man, I hope we get some of this stuff out before the episode launches so-

**中文翻译:**
是啊。我在想，希望在这一集发布前我们能把其中一些东西发出来，这样——

---

### [01:14:49] Lenny Rachitsky

**English:**
This is your new timebox.

**中文翻译:**
这就是你新的时间限制了。

---

### [01:14:50] Kevin Weil

**English:**
... I don't piss people off. The amazing thing to me is we were talking earlier about how far models have come in just a couple of years. If you went back to GPT-3, you'd be disgusted by how bad it was, even though Lenny of two years ago was mind-blown by how good these were. And for a long time, we were iterating every six to nine months on a new GPT model. It was like GPT-3, GPT-3.5, 4, and now with this o-series of reasoning models, we're moving even faster. Every roughly three months, maybe four months, there's a new o-series model, and each of them is a step up in capability.
(01:15:41):
And so the capabilities of these models are increasing at a massive pace. They're also getting cheaper as they scale. You look at where we were even a couple of years ago. I think the original, I don't know, what was it, GPT-3.5 or something was like 100 x the cost of GPT-4o mini today in the API. A couple of years, you've gone down two orders of magnitude in cost for much more intelligence. And so I don't know where there's another series of trends like that in the world. Models are getting smarter, they're getting faster, they're getting cheaper, and they're getting safer too. They hallucinate less every iteration.
(01:16:27):
And so the Morse Law and transistors becoming ubiquitous. That was a law around doubling the number of transistors on a chip every 18 months. If you're talking about something where you're getting 10 x every year, that's a massively steeper exponential. And it tells us that the future is going to be very different than today. The thing I try and remind myself is, the AI models that you're using today is the worst AI model you will ever use for the rest of your life. And when you actually get that in your head, it's kind of wild.

**中文翻译:**
……我就不会惹恼大家了。让我觉得神奇的是，我们之前聊到模型在短短几年内走了多远。如果你回到 GPT-3，你会因为它太烂而感到厌恶，尽管两年前的 Lenny 曾被它的强大所震撼。很长一段时间，我们每 6 到 9 个月迭代一个新的 GPT 模型：GPT-3, 3.5, 4。而现在有了 o 系列推理模型，我们的速度更快了。大约每三个月，最多四个月，就会有一个新的 o 系列模型，每一个都在能力上有质的飞跃。

所以模型能力的增长速度是惊人的。而且随着规模扩大，它们也变得越来越便宜。看看几年前，最初的 GPT-3.5 在 API 里的成本大概是今天 GPT-4o mini 的 100 倍。短短几年，成本下降了两个数量级，智能却大幅提升。我不知道世界上还有哪种趋势能与之相比。模型变得更聪明、更快、更便宜，也更安全——每一代迭代的幻觉都在减少。

摩尔定律是关于每 18 个月晶体管数量翻倍。而如果你谈论的是每年提升 10 倍的东西，那是一个斜率大得多的指数曲线。这告诉我们，未来将与今天截然不同。我经常提醒自己：你今天使用的 AI 模型，将是你余生中使用过的最差的模型。当你真正理解这一点时，会觉得非常震撼。

---

### [01:17:08] Lenny Rachitsky

**English:**
I was going to actually say the same thing, and that's the thing that always sticks with me when I watch this thing. You're talking about Sora, and I imagine many people hearing that are like, "No, no. It's not actually ready. It's not good enough. It's not going to be as good as a movie I see in the theater." But the point is what you just made that this is the worst it's going to be. It will only get better.

**中文翻译:**
我正想说同样的话。每当我观察这个行业时，这一点总是萦绕在心。你提到 Sora，我能想象很多人听了会说：“不，它还没准备好，不够好，比不上电影院里的电影。”但重点正是你刚才说的：这是它最差的时候，它只会变得更好。

---

### [01:17:25] Kevin Weil

**English:**
Yeah, model maximalism. Just keep building for the capabilities that are almost there, and the model's going to catch up and be amazing.

**中文翻译:**
是的，模型至上主义。只需针对那些“即将实现”的能力进行构建，模型很快就会赶上并让你惊艳。

---

### [01:17:35] Lenny Rachitsky

**English:**
Escape to where the puck is going to be.

**中文翻译:**
滑向冰球即将到达的位置（引用格雷茨基的名言）。

---

### [01:17:36] Kevin Weil

**English:**
Yeah.

**中文翻译:**
没错。

---

### [01:17:38] Lenny Rachitsky

**English:**
This reminds me, I was just using... I was duplifying everything the other day and I was just like, "What is taking so long."

**中文翻译:**
这让我想起，我前几天在用你们的模型把所有东西都“吉卜力化”，我当时还在想：“怎么这么慢。”

---

### [01:17:38] Kevin Weil

**English:**
As one does.

**中文翻译:**
大家都会这么想。

---

### [01:17:43] Lenny Rachitsky

**English:**
Just like cut... What was that?

**中文翻译:**
就像……你说什么？

---

### [01:17:45] Kevin Weil

**English:**
I said, as one does.

**中文翻译:**
我说，大家现在都会这么干。

---

### [01:17:46] Lenny Rachitsky

**English:**
As one does these days. I was just like, "It's taking a minute to generate this image of my family in this amazing way." Come on, what's taking so long. You just get so used to magic happening in front of you.

**中文翻译:**
是啊，现在大家都这么干。我当时想：“生成这张超赞的家庭合影居然要一分钟。”拜托，怎么这么久。你已经习惯了奇迹就在眼前发生。

---

### [01:17:57] Kevin Weil

**English:**
Yeah, totally.

**中文翻译:**
是的，完全正确。

---

### [01:17:59] Lenny Rachitsky

**English:**
Okay, final question. This is going to go in a completely different direction. A lot of people asked about this. So famously, you led this project at Facebook called Libra, which is now called Novi. A lot of people always wondered, "What happened there? That was a really cool idea." I know some people have a sense there's regulation challenges, things like that. I don't know if you've talked about this much. So I guess, could you just give people a brief summary of just what is Libra? This project you working on, and just what happened, and how you feel about it?

**中文翻译:**
好，最后一个问题。这会转向一个完全不同的方向。很多人问过这个。众所周知，你曾在 Facebook 领导过 Libra 项目（后来叫 Novi）。很多人一直好奇：“那到底发生了什么？那是个很酷的主意。”我知道有人觉得是监管挑战之类的。我不知道你是否深入谈过这个。你能简要总结一下 Libra 是什么，你们当时在做什么，后来发生了什么，以及你现在的感受吗？

---

### [01:18:26] Kevin Weil

**English:**
Yeah. I mean, David Marcus led it, and I happily work for him and with him. I think he's a visionary and also a mentor and a friend. Honestly, Libra is probably the biggest disappointment of my career. When I think about the problems we were solving, which are very real problems. If you look at, for example, the remittance space, people sending money to family members in other countries, it is maybe... I mean it's incredibly regressive, right? People that don't have the money to spend are having to pay 20% to send money home to their family. So outrageous fees, it takes multiple days, you have to go then pick up cash from... It's all bad.
(01:19:11):
And here we are with 3 billion people using WhatsApp all over the world, talking to each other every day, especially friends and family, and exactly the kind of people who'd send money to each other. Why can't you send money as immediately, as cheaply, as simply as you send a text message? It is one of those things when you sit back and think about it, that should just exist. And that was what we set out to try and do.
(01:19:41):
Now, I don't think we played all of our cards perfectly. If I could go back and do things, there are a bunch of things I would do differently.
(01:19:50):
We tried to get it all at once. We tried to launch a new blockchain. It was a basket of currencies originally. It was integration into WhatsApp and Messenger, and I think the whole world kind of went like, "Oh my God, that's a lot of change at once." And it happened also to be at the time that Facebook was at the absolute nadir of its reputation. And so that didn't help. It was also not the Messenger that people wanted for this kind of change. We knew all that going in, but we went for it.
(01:20:21):
I think there are a bunch of ways that we could do that that would've introduced the change a little bit more gently, maybe still gotten to that same outcome, but fewer new things at once and introduced the new things one at a time. Who knows? Those were decisions we made together. So we all own them. Certainly, I own them. But it fundamentally disappoints me that this doesn't exist in the world today because the world would be a better place if we'd been able to ship that product. I would be able to send you 50 cents in WhatsApp for free. It would settle instantly. Everybody would have a balance in their WhatsApp account. We'd be transact... I mean, it should exist.
(01:21:03):
I don't know. To be honest, the current administration is super friendly to crypto. Facebook's reputation, Meta's reputation is in a very different place. Maybe they should go build it now.

**中文翻译:**
是的。David Marcus 领导了这个项目，我很愉快地与他共事。他是个远见卓识的人，也是我的导师和朋友。坦白说，Libra 也许是我职业生涯中最大的失望。当我们思考我们要解决的问题时，那些是非常现实的问题。比如跨境汇款，人们给国外的家人寄钱，这可能是……我是说，这极其不合理。那些最没钱的人却要支付 20% 的手续费才能把钱寄回家。高昂的费用、耗时数天、还得去线下取现……一切都很糟糕。

而我们拥有全球 30 亿 WhatsApp 用户，大家每天都在交流，尤其是亲友之间，正是那些会互相转账的人。为什么转账不能像发短信一样即时、便宜、简单？当你坐下来思考时，你会觉得这东西理应存在。这就是我们当时的目标。

现在回想，我觉得我们当时并没有把牌打好。如果能重来，有很多事我会做得不同。我们当时想一次性完成所有目标：推出新区块链、挂钩一篮子货币、整合进 WhatsApp 和 Messenger。全世界的反应大概是：“天哪，这变化也太大了。”而且当时恰逢 Facebook 声誉的最低谷，这毫无帮助。Facebook 也不是人们希望引领这种变革的载体。我们当时知道这些，但还是冲了。

我想有很多方式可以更温和地引入这种变化，也许最终能达到同样的结果，但一次少做点新东西，一件一件来。谁知道呢？那是我们共同做的决定，我们共同承担。但让我感到根本性失望的是，这个产品今天仍不存在，因为如果它能发布，世界会变得更好。我本可以免费在 WhatsApp 上给你转 50 美分，瞬间到账。每个人在 WhatsApp 里都有余额，我们可以直接交易……它理应存在。

我不知道。老实说，现在的政府对加密货币非常友好，Facebook（Meta）的名声也大不相同了。也许他们现在应该重新把它做出来。

---

### [01:21:13] Lenny Rachitsky

**English:**
I was looking at the history of it, and apparently, they sold the tech to some private equity company for 200 million bucks.

**中文翻译:**
我看过它的历史，显然他们后来把技术以 2 亿美元卖给了一家私募股权公司。

---

### [01:21:19] Kevin Weil

**English:**
Yeah, yeah, and-

**中文翻译:**
是的，没错，而且——

---

### [01:21:21] Lenny Rachitsky

**English:**
They had to buy it back.

**中文翻译:**
他们还得买回来。

---

### [01:21:23] Kevin Weil

**English:**
There are a couple of current blockchains that are built on the tech because the tech was open-sourced from the beginning. Aptos and Mistin are two companies that are built off of this tech. So at least all of the work that we did, did not die and lives on in these two companies, and they're both doing really well. But still, we should be able to send each other money in WhatsApp, and we can't today.

**中文翻译:**
目前有几条区块链是基于那项技术构建的，因为那项技术从一开始就是开源的。Aptos 和 Mysten (Sui) 这两家公司就是基于这项技术建立的。所以至少我们所做的工作没有白费，在这些公司里延续了下来，而且它们发展得都很好。但即便如此，我们今天还是不能在 WhatsApp 上互相转账。

---

### [01:21:49] Lenny Rachitsky

**English:**
Hear, hear. Well, thanks for sharing that story, Kevin. Is there anything else you want to share or maybe a last negative advice or insight before we get to our very exciting lightning round?

**中文翻译:**
说得对。谢谢分享这个故事，Kevin。在进入激动人心的闪电轮提问之前，你还有什么想分享的，或者最后的一点建议或洞察吗？

---

### [01:21:58] Kevin Weil

**English:**
Ooh, the lightning round. Let's just go do that.

**中文翻译:**
噢，闪电轮。直接开始吧。

---

### [01:22:01] Lenny Rachitsky

**English:**
Let's do it. With that, Kevin, we reached our very exciting lightning round. Are you ready?

**中文翻译:**
开始。Kevin，我们进入了激动人心的闪电轮。准备好了吗？

---

### [01:22:05] Kevin Weil

**English:**
Yeah.

**中文翻译:**
准备好了。

---

### [01:22:06] Lenny Rachitsky

**English:**
Let's do it. Okay. What are two or three books that you find yourself recommending most to other people?

**中文翻译:**
好。你最常向别人推荐的两三本书是什么？

---

### [01:22:12] Kevin Weil

**English:**
Co-Intelligence by Ethan Mollick, a really good book about AI and how to use it in your daily life as a student, as a teacher. He's super thoughtful. Also, by the way, a very good follow on Twitter. The Accidental Superpower by Peter Zion. Very good if you're interested in geopolitics and the forces that sort of shape the dynamics happening. And then I really enjoyed Cable Cowboy, I don't know who the author is, but the biography of John Malone. Just fascinating. If you like business, especially if you want to get into... I mean the man was an incredible dealmaker and shaped a lot of the modern cable industry. So that was a good biography.

**中文翻译:**
Ethan Mollick 的《共智》（Co-Intelligence），这是一本关于 AI 以及学生、老师如何在日常生活中使用 AI 的好书。他非常有见地，在 Twitter 上也很值得关注。Peter Zeihan 的《意外的超级大国》（The Accidental Superpower），如果你对地缘政治和塑造局势的力量感兴趣，这本书很棒。还有我非常喜欢的《有线电视牛仔》（Cable Cowboy），作者我不记得了，是 John Malone 的传记。非常精彩。如果你喜欢商业，尤其是想了解交易撮合——他是一个不可思议的交易撮合者，塑造了现代有线电视行业。那是一本很棒的传记。

---

### [01:22:53] Lenny Rachitsky

**English:**
These are all first-time mentions, which is always a great,

**中文翻译:**
这些都是第一次被提到，太棒了。

---

### [01:22:56] Kevin Weil

**English:**
Oh, good.

**中文翻译:**
噢，太好了。

---

### [01:22:56] Lenny Rachitsky

**English:**
Next question. Do you have a favorite recent movie or TV show that you really enjoyed?

**中文翻译:**
下一个问题。最近有没有什么你非常喜欢的电影或电视节目？

---

### [01:23:02] Kevin Weil

**English:**
I wish I had time to watch a TV show, so I'm-

**中文翻译:**
我倒希望我有时间看电视，所以我——

---

### [01:23:06] Lenny Rachitsky

**English:**
Just Sora videos.

**中文翻译:**
只看 Sora 视频。

---

### [01:23:07] Kevin Weil

**English:**
Yeah, right. I don't know. When I was a kid, I read the Wheel of Time series and now Amazon has it as they're in the third season of it, so I want to watch that. I haven't yet. Top Gun 2 was an awesome movie. I think that's no longer new.

**中文翻译:**
没错。我不知道。我小时候读过《时光之轮》（Wheel of Time）系列，现在 Amazon 出了剧集，已经第三季了，我想看但还没看。《壮志凌云 2》（Top Gun 2）是一部很棒的电影，虽然已经不新了。

---

### [01:23:28] Lenny Rachitsky

**English:**
That shows when the last time you watched a movie was.

**中文翻译:**
这说明你上次看电影是什么时候了。

---

### [01:23:31] Kevin Weil

**English:**
But I like the idea. I want more Americana. I want more being proud of being strong. And I thought Top Gun 2 did a really good job of that. Pride and patriotism, I think the US could use more of that.

**中文翻译:**
但我喜欢那种感觉。我想要更多“美国精神”，更多为强大而自豪的感觉。我觉得《壮志凌云 2》在这方面做得很好。自豪感和爱国主义，我认为美国现在需要更多这些。

---

### [01:23:48] Lenny Rachitsky

**English:**
Is there a favorite product that you've recently discovered that you really love, other than your super intelligence internal tool that you all have access to? I'm just joking.

**中文翻译:**
除了你们内部那个超级智能工具，最近有没有什么你发现并非常喜欢的产品？开个玩笑。

---

### [01:23:56] Kevin Weil

**English:**
That's right. Internal AGR.

**中文翻译:**
没错，内部 AGI。

---

### [01:23:57] Lenny Rachitsky

**English:**
Yeah, that's right.

**中文翻译:**
是的，没错。

---

### [01:24:01] Kevin Weil

**English:**
Well, I think vibe coding with products like Windsurf is just super fun. I'm having a great time doing that. I still just love that our chief people officer vibe coded some tools. Maybe the other one is Waymo. Every chance I get, I'll take a Waymo. It's just a better way of riding, and it still feels like the future. So they've done an amazing job.

**中文翻译:**
嗯，我觉得用 Windsurf 之类的产品进行“氛围编程”超级有趣。我玩得很开心。我仍然很喜欢我们首席人力官用它写工具那个故事。另一个是 Waymo。只要有机会，我就会坐 Waymo。这是一种更好的出行方式，而且仍然感觉像是在未来。他们做得非常出色。

---

### [01:24:24] Lenny Rachitsky

**English:**
That's awesome. By the way, I had the founder of Windsurf on the podcast. It might come out before this or after this. And also Cursor's CEO is coming on the podcast either before or after this.

**中文翻译:**
太棒了。顺便说一下，我邀请了 Windsurf 的创始人，可能会在这一集之前或之后发布。Cursor 的 CEO 也会来。

---

### [01:24:32] Kevin Weil

**English:**
Oh, cool. I have a ton of respect for what those guys are doing. Those are awesome products.

**中文翻译:**
噢，太酷了。我非常尊重他们所做的工作，那些都是很棒的产品。

---

### [01:24:36] Lenny Rachitsky

**English:**
Just changing the way everyone builds product. No big deal.

**中文翻译:**
只是改变了每个人构建产品的方式而已，没什么大不了的。

---

### [01:24:38] Kevin Weil

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:24:40] Lenny Rachitsky

**English:**
A couple more questions. Do you have a favorite life motto that you often repeat yourself, find really useful in work or in life?

**中文翻译:**
还有两个问题。你有没有什么经常对自己重复、在工作或生活中非常有用的座右铭？

---

### [01:24:47] Kevin Weil

**English:**
Yeah. So actually, this is interestingly enough, it is more of a philosophy, but then I thought Zuck encapsulated it one time on a Facebook earnings call. So I actually had this made into a poster. It sits in my room. But somebody was asking Mark. This is literally on an earnings call, so it's like an analyst on an earnings call asking him. It was some quarter when Facebook had grown a lot. This was back in the 20 teens sometime, I think. But he's like, "So what did you do? What was it that you launched? What was the one thing that drove all this growth for you?" And he said something to the effect of, "Sometimes it's not any one thing, it's just good work consistently over a long period of time." And that's always stuck with me.
(01:25:33):
And I think it is. I mean I run ultra marathons. It's like it's just about grinding. I think people too often look for the silver bullet when a lot of life and a lot of excellence is actually showing up day in and day out, doing good work, getting a little bit better every single day, and you may not notice it over a week or even a month. And a lot of people then kind of get dismayed and stop. But actually, you keep doing it. The gains keep compounding. And over the course of a year, two years, five years, it adds up like crazy. So good work consistently over a long period of time.

**中文翻译:**
有的。这很有趣，它更像是一种哲学。我觉得扎克伯格有一次在 Facebook 财报电话会议上总结得非常好。我甚至把它印成了海报挂在房间里。当时有个分析师问马克，那是 Facebook 增长非常快的一个季度，大概是 2010 年代中期。他问：“你到底做了什么？你发布了什么？哪一件事驱动了所有这些增长？”马克回答的大意是：“有时并不是因为某一件特定的事，而只是长期持续地做好工作（Good work consistently over a long period of time）。”这句话一直影响着我。

我认为确实如此。我跑超长马拉松，那本质上就是磨练。我觉得人们太常寻找“银弹”了，而生活中的大部分卓越其实源于日复一日的坚持，做好工作，每天进步一点点。你可能在一周甚至一个月内察觉不到变化，很多人因此感到沮丧并放弃。但实际上，只要你坚持下去，收益就会不断复利。经过一年、两年、五年，它会累积成惊人的成果。所以：长期持续地做好工作。

---

### [01:26:13] Lenny Rachitsky

**English:**
I love that. I got to make a poster of this now. That is-

**中文翻译:**
我太喜欢这个了。我也得去做张海报。

---

### [01:26:15] Kevin Weil

**English:**
We'll get you one.

**中文翻译:**
我们会送你一张。

---

### [01:26:15] Lenny Rachitsky

**English:**
I so resonate with that. Okay, I'll take it. That is so good. Okay, final question. I'm going to ask if you have any prompting tricks, and I'm going to set it up first. But think about if you have a trick that you could recommend to people for prompting LLMs better. I had a guest, Alex Komorowski, come on the podcast. He's from Stripe and writes his weekly reflections on what's happening in the world. A lot of them are AI-related.
(01:26:36):
And he once described an LLM as a zip file of all human knowledge. All the answers are in there, and you just need to figure out the right question to ask to get the answer to every problem basically. And so it just reminded me how important prompt engineering is and knowing how to prompt well. You're constantly prompting ChatGPT. What's one tip, one trick that you found to be helpful in helping you get what you want?

**中文翻译:**
我非常有共鸣。太棒了。好，最后一个问题。我想问问你有没有什么提示词（Prompting）技巧。我先做个铺垫：我曾请过 Alex Komorowski，他在 Stripe 工作，每周写关于世界动态的思考，很多与 AI 相关。他曾把 LLM 描述为“全人类知识的压缩包”。所有的答案都在里面，你只需要找到正确的问题，就能得到几乎任何问题的答案。这提醒了我提示词工程和掌握提示技巧有多重要。你一直在用 ChatGPT，有没有什么你觉得特别有用的技巧能帮大家得到想要的结果？

---

### [01:27:00] Kevin Weil

**English:**
Well, I'll say, first of all, I want to kill the idea that you have to be a good prompt engineer. I think if we do our jobs, that stops being true. It's just one of those sharp edges of models that experts can learn. But then, just over time, you shouldn't need to know all that. The same way you used to have to get deep into, "What's your storage engine in MySQL? Are you using InnoDB 4.1?" There's still use cases for that if you're at the deep edge of MySQL performance. But most people don't need to care. And you shouldn't need to care about minute details of prompting if AI is really going to become broadly adopted.
(01:27:39):
But today, we're not totally there. I think by the way, we are making progress there. I think there is less prompt engineering than there had to be before. But in line with some of the fine-tuning stuff I was talking about and the importance of giving examples, you can do effectively poor man's fine-tuning by including examples in your prompt of the kinds of things that you might want and a good answer. So like, "Here's an example and here's a good answer. Here's an example, and here's a good answer. Now, go solve this problem for me." And the model really will listen and learn from that.
(01:28:15):
Not as well as if you do a full fine-tune, but much more than if you don't provide any examples. And I think people don't do that often enough.

**中文翻译:**
首先，我想打破“你必须成为优秀的提示词工程师”这个观念。我认为如果我们做好了本职工作，这就不再是必须的了。这只是模型目前的一些“棱角”，专家可以去钻研，但随着时间推移，你不应该需要了解这些。就像以前你必须深入研究 MySQL 的存储引擎是 InnoDB 4.1 还是别的，如果你在追求极致性能，这仍然有用，但大多数人不需要关心。如果 AI 真的要被广泛采用，你不应该需要关心提示词的细枝末节。

但今天我们还没完全达到那个阶段。顺便说一下，我们正在取得进展，现在的提示词工程已经比以前少多了。不过，结合我之前提到的微调以及提供例子的重要性，你可以通过在提示词中加入例子来进行“穷人的微调”。比如：“这是一个例子，这是一个好答案；这是另一个例子，这是另一个好答案。现在，帮我解决这个问题。”模型真的会听从并从中学习。虽然效果不如完整的微调，但比不提供任何例子要好得多。我觉得大家用这一招用得还不够多。

---

### [01:28:24] Lenny Rachitsky

**English:**
That's awesome. One tip that I heard, I'm curious if this works is you tell it, "This is very, very important to my career." Make it really understand like, "Someone will die if you don't answer me correctly." Does that work?

**中文翻译:**
太棒了。我听过一个技巧，好奇管不管用：你告诉它“这对我的职业生涯非常非常重要”，或者让它意识到“如果你回答错了，会有人死掉”。这有用吗？

---

### [01:28:36] Kevin Weil

**English:**
It's really weird. There's probably a good explanation for this. But you can also say things. So, yes, I think there is some validity to that. You can also say things like, "I want you to be Einstein. Now, answer this physics problem for me," or, "You are the world's greatest marketer, the world's greatest brand marketer. Now here's a naming question." And there is something where it sort of shifts the model into a certain mindset that can actually be really positive.

**中文翻译:**
这真的很奇怪，可能有一个科学的解释。但是，是的，我认为这确实有一定的有效性。你还可以说：“我希望你扮演爱因斯坦，现在帮我解决这个物理题”，或者“你是世界上最伟大的品牌营销专家，现在有个命名问题”。这种方式会让模型进入某种特定的“心态”，这确实会产生积极的影响。

---

### [01:29:10] Lenny Rachitsky

**English:**
I use that tip all the time actually. I always... When I'm coming up with questions for interviews and I use it occasionally to come up with things I haven't thought of, I actually type, "You're the world's best podcast interviewer."

**中文翻译:**
我其实一直在用这个技巧。当我准备采访问题，或者想找点灵感时，我会输入：“你是世界上最好的播客主持人。”

---

### [01:29:21] Kevin Weil

**English:**
Right.

**中文翻译:**
没错。

---

### [01:29:21] Lenny Rachitsky

**English:**
I have Kevin Weil coming on the pod... Yeah, it actually works.

**中文翻译:**
“我要采访 Kevin Weil……”是的，它真的管用。

---

### [01:29:25] Kevin Weil

**English:**
By the way, back to our other point that we made a few times. You do do that sometimes with people. You sort of put them... You frame things, you get them into a certain mindset, and the answer is completely different. So I think there are human analogs of this one more time.

**中文翻译:**
顺便说一下，回到我们提过好几次的观点：你有时也会对人这么做。你设定框架，让他们进入某种心态，得到的答案就会完全不同。这再次证明了模型与人类的相似性。

---

### [01:29:42] Lenny Rachitsky

**English:**
Kevin, this was incredible. I was just thinking about a way to end this. The way I feel like... I feel like not only are you at the cutting edge of the future. You and the team are kind of actually the edge that is creating the future. And so it's a real honor to have you on here and to talk to you and to hear where you think things are going and what we need to be thinking about, so thank you for being here, Kevin.

**中文翻译:**
Kevin，这太精彩了。我在想该如何结束。我感觉……你不仅处于未来的最前沿，你和你的团队实际上就是正在创造未来的那个“前沿”。能邀请你来这里，听你谈论未来的走向以及我们需要思考的问题，真是莫大的荣幸。谢谢你，Kevin。

---

### [01:30:07] Kevin Weil

**English:**
Oh, thank you so much for having me. I get to work with the world's best team, and all credit to them, but really appreciate you having me on. It's been super fun.

**中文翻译:**
噢，非常感谢邀请我。我有幸与世界上最好的团队共事，功劳全归于他们。非常感谢你邀请我，这一集非常有趣。

---

### [01:30:17] Lenny Rachitsky

**English:**
I forgot to ask you the two final questions. Where can folks find you if they want to reach out, and how can listeners be useful to you?

**中文翻译:**
我忘了问最后两个问题。如果大家想联系你，可以在哪里找到你？听众可以如何帮到你？

---

### [01:30:24] Kevin Weil

**English:**
I am @kevinweil, K-E-V-I-N-W-E-I-L on pretty much every platform. I'm still a Twitter DAU after all these years. I guess an X DAU, LinkedIn, wherever. And I think the thing I would love from people, give me feedback. People are using ChatGPT. Tell me where it's working really well for you and where you want us to double down. Tell me where it's failing. I'm very active and engaged on Twitter. I love hearing from people, what's working and what's not, so don't be shy.

**中文翻译:**
我在几乎所有平台上的账号都是 @kevinweil。这么多年了我仍然是 Twitter（现在叫 X）的日活用户，还有 LinkedIn 等等。我最希望大家做的是：给我反馈。大家都在用 ChatGPT，告诉我它在哪些方面对你特别有用，你希望我们在哪里加倍投入；也告诉我它在哪些方面表现不佳。我在 Twitter 上非常活跃，我喜欢听大家反馈什么行得通、什么行不通，所以别害羞。

---

### [01:30:56] Lenny Rachitsky

**English:**
And I learned following you helps you figure out all the stuff that you're launching. You share all the things that are going out every day, or week, month, so that's also a benefit. And by the way, 400 million weekly active users all emailing you feedback. Here we go.

**中文翻译:**
我也发现关注你可以了解你们发布的所有新东西。你每天、每周、每月都会分享新动态，这也是个福利。顺便说一下，4 亿周活用户都要给你发邮件反馈了，准备好迎接吧。

---

### [01:31:08] Kevin Weil

**English:**
Yes, let's do it.

**中文翻译:**
没问题，来吧。

---

### [01:31:09] Lenny Rachitsky

**English:**
It's going to work out great. Okay. Well, thank you, Kevin. Thanks for being here.

**中文翻译:**
一定会很棒的。好，谢谢 Kevin，谢谢你来到这里。

---

### [01:31:12] Kevin Weil

**English:**
All right, man, thanks so much. See you soon.

**中文翻译:**
好的，伙计，非常感谢。再见。

---

### [01:31:13] Lenny Rachitsky (Outro)

**English:**
Bye, everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
再见，各位。非常感谢收听。如果你觉得本期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用中订阅。此外，请考虑给我们评分或留下评论，这能帮助更多听众发现这个播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期见。