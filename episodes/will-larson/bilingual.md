# Will Larson - 双语对照

This is the complete bilingual transcript for Lenny's Podcast featuring Will Larson.

---

### [00:00:00] Will Larson

**English:**
I think that we often treat engineers a little bit like children instead of giving them the responsibilities and ability to actually thrive as adults. And so like, "Oh, the engineers won't want to do that work." Well, that's actually not good for the engineers to be sheltered from what is important. And so actually one of the, I think, highlights is that I think we're coming back this moment where we can actually treat engineers like our peers and put them into really senior leadership roles and not have this kind of baseline assumption of like, "Oh, we have to coddle them or hide them from the real problems." And this is how they're going to get the opportunity to grow as well.

**中文翻译:**
我认为我们经常把工程师当成孩子对待，而不是赋予他们责任和能力，让他们像成年人一样真正茁壮成长。比如我们会说：“噢，工程师不会想做那项工作的。” 事实上，让工程师远离那些重要的事情对他们并没有好处。所以我认为现在的亮点之一是，我们正在回到这样一个时刻：我们可以真正把工程师视为同僚，让他们担任高级领导职务，而不再有那种“噢，我们必须溺爱他们或向他们隐瞒真实问题”的底层假设。这也是他们获得成长机会的方式。

---

### [00:00:35] Lenny

**English:**
Today, my guest is Will Larson, one of the most requested guests I've had on this podcast. Will is currently CTO at Carta. He's been a software engineering leader at Stripe, Uber, and Calm. He's the author of two essential books for all engineers, An Elegant Puzzle and Staff Engineer, and he's releasing his newest book The Engineering Executive's Primer in February of next year. He also publishes regularly on his blog at lethain.com, which is a must read for every engineer and eng leader.

**中文翻译:**
今天，我的嘉宾是 Will Larson，他是本播客呼声最高的嘉宾之一。Will 目前担任 Carta 的首席技术官（CTO）。他曾在 Stripe、Uber 和 Calm 担任软件工程领导者。他是所有工程师必读的两本书——《优雅的解题》（An Elegant Puzzle）和《参谋工程师》（Staff Engineer）的作者，他将于明年二月发布新书《工程主管入门》（The Engineering Executive's Primer）。他还在自己的博客 lethain.com 上定期发表文章，这是每位工程师和工程领导者的必读之作。

---

### [00:01:05] Lenny

**English:**
In our conversation, Will shares advice on developing your engineering strategy and strategy in general, how to improve the relationship between an eng manager and a PM, how he finds time to write, while also working an intense full-time job, how he recommends approaching measuring engineering productivity, how to develop your company values, an amazing story about his time at Digg and so much more. Will is such a gem of a human and leader and I'm excited to bring you this episode. With that, I bring you Will Larson after a short word from our sponsor.

**中文翻译:**
在我们的对话中，Will 分享了关于制定工程策略以及通用策略的建议，如何改善工程经理（EM）与产品经理（PM）之间的关系，他是如何在从事高强度全职工作的同时抽出时间写作的，他推荐的衡量工程生产力的方法，如何制定公司价值观，还有一个关于他在 Digg 时期的精彩故事，以及更多内容。Will 是一位非常优秀的领导者，我很高兴能为大家带来这一集。在听完赞助商的简短介绍后，我们将正式请出 Will Larson。

---

### [00:01:39] Lenny

**English:**
Today's episode is brought to you by DX, a platform for measuring and improving developer productivity. DX is designed by the researchers behind frameworks such as Dora, Space and DevEx. If you've tried measuring developer productivity, you know that there are a lot of basic metrics out there and a lot of ways to do this wrong. And getting that full view of productivity is still really hard. DX tackles this problem by combining qualitative and quantitative insights, giving you full clarity into how your developers are doing.

**中文翻译:**
本集节目由 DX 赞助，这是一个衡量和提高开发者生产力的平台。DX 由 Dora、Space 和 DevEx 等框架背后的研究人员设计。如果你尝试过衡量开发者的生产力，你就会知道市面上有很多基础指标，也有很多错误的做法。要获得生产力的全貌仍然非常困难。DX 通过结合定性和定量的见解来解决这个问题，让你清晰地了解开发者的工作状态。

---

### [00:02:07] Lenny

**English:**
DX is used by both startups and Fortune 500 companies, including companies like Twilio, Amplitude, eBay, Brex, Toast, Pfizer, and Proctor and Gamble. To learn more about DX and get a demo of their product, visit their website at getdx.com/lenny. That's getdx.com/lenny.

**中文翻译:**
初创公司和财富 500 强公司都在使用 DX，包括 Twilio、Amplitude、eBay、Brex、Toast、辉瑞（Pfizer）和宝洁（P&G）等公司。要了解更多关于 DX 的信息并获取产品演示，请访问他们的网站 getdx.com/lenny。

---

### [00:02:28] Lenny

**English:**
Today's episode is brought to you by OneSchema, the embeddable CSV importer for SaaS. Customers always seem to want to give you their data in the messiest possible CSV file. And building a spreadsheet importer becomes a never ending sync for your engineering and support resources. You keep adding features to your spreadsheet importer, but customers keep running into issues. Six months later, you're fixing it. Another date conversion edge-case bug. Most tools aren't built for handling messy data, but OneSchema is. Companies like Scale AI and Pave are using OneSchema to make it fast and easy to launch delightful spreadsheet import experiences.

**中文翻译:**
本集节目由 OneSchema 赞助，它是面向 SaaS 的可嵌入式 CSV 导入工具。客户似乎总是想把数据放在最混乱的 CSV 文件里交给你。构建一个电子表格导入器会变成工程和支持资源的无底洞。你不断为导入器添加功能，但客户总会遇到问题。六个月后，你还在修复另一个日期转换的边缘案例 Bug。大多数工具并不是为了处理混乱数据而设计的，但 OneSchema 是。Scale AI 和 Pave 等公司正在使用 OneSchema，快速轻松地推出令人愉悦的表格导入体验。

---

### [00:03:02] Lenny

**English:**
From embeddable CSV import to importing CSVs from an SFTP folder on a recurring basis. Spreadsheet import is such an awful experience in so many products. Customers get frustrated by useless messages like error online 53 and never end up getting started with your product. OneSchema intelligently corrects messy data so that your customers don't have to spend hours in Excel just to get started with your product. For listeners of this podcast, OneSchema is offering a $1,000 discount. Learn more at oneschema.co/lenny.

**中文翻译:**
从可嵌入的 CSV 导入到定期从 SFTP 文件夹导入 CSV。在许多产品中，表格导入体验都非常糟糕。客户会被“第 53 行错误”这种无用的信息搞得心烦意乱，最终根本没法开始使用你的产品。OneSchema 能智能地纠正混乱的数据，这样你的客户就不必为了开始使用你的产品而在 Excel 中耗费数小时。对于本播客的听众，OneSchema 提供 1000 美元的折扣。更多信息请访问 oneschema.co/lenny。

---

### [00:03:36] Lenny

**English:**
Will, thank you so much for being here and welcome to the podcast.

**中文翻译:**
Will，非常感谢你能来，欢迎来到本播客。

---

### [00:03:40] Will Larson

**English:**
Thank you so much. Super, super excited to be here.

**中文翻译:**
非常感谢。非常非常激动能来到这里。

---

### [00:03:42] Lenny

**English:**
So many people have suggested that I bring you on this podcast. You have a lot of fans out there and I am excited to be digging into engineering topics, which we don't do enough of on this podcast. So thank you for making time for this.

**中文翻译:**
有很多人建议我邀请你来。你有很多粉丝，我也很高兴能深入探讨工程话题，我们在本播客中讨论这类话题还不够多。所以感谢你抽时间参加。

---

### [00:03:54] Will Larson

**English:**
No, thanks. I hope to be a good early engineering guest before you pivot entirely to engineering at some point in the future.

**中文翻译:**
不客气。我希望能在你未来某天完全转向工程领域之前，做一个优秀的早期工程嘉宾。

---

### [00:04:04] Lenny

**English:**
Wow, I love that. How cool would that be? I was an engineer actually when I started my career. How interesting would that be if we come full circle? Anyway, I thought it'd be fun to start with just what is changing in engineering? It feels like there's been a lot that has changed over the past few years, especially from kind of the ZIRP zero interest rate era to today's market, which is very different. What have you seen most change from an engineer's perspective and then just also what are you telling eng leaders about how to handle all this change?

**中文翻译:**
哇，我喜欢这个想法。那该多酷啊？其实我职业生涯刚开始时就是一名工程师。如果我们能回到原点，那该多有趣。言归正传，我想先聊聊工程领域正在发生什么变化？感觉过去几年发生了很大变化，尤其是从 ZIRP（零利率政策）时代到今天的市场，情况大不相同。从工程师的角度来看，你观察到的最大变化是什么？你又是如何建议工程领导者应对这些变化的？

---

### [00:04:32] Will Larson

**English:**
I think it's a pretty strange time in the market. So I think that I started working and right before the 2008 kind of crash. And so the first two years there were not so good. When I joined Yahoo, there was a layoff basically every four months. There was a layoff of some sort. It's pretty chaotic. But then we got into the last decade and it was just smooth. So numbers went up, revenue went up, headcount went up and people started learning how to build really large teams.

**中文翻译:**
我认为现在市场处于一个相当奇怪的时期。我是在 2008 年经济崩盘前夕开始工作的。所以头两年情况并不好。当我加入雅虎（Yahoo）时，基本上每四个月就有一次某种形式的裁员。当时非常混乱。但随后我们进入了过去的十年，一切都非常顺利。数字在增长，收入在增长，员工人数在增长，人们开始学习如何组建超大规模的团队。

---

### [00:05:02] Will Larson

**English:**
People started learning how to hire a lot. When I was at Uber, some days I would do six interviews back to back. I would just be in a conference room and at some point you can't even remember who you're talking to because you talk to so many people, one after another after another. You just have some scrambled notes you're trying to decode afterwards.

**中文翻译:**
人们开始学习如何大规模招聘。我在 Uber 的时候，有些日子我会连续做六场面试。我就待在会议室里，到最后你甚至记不清在和谁说话，因为你一个接一个地面试了太多人。你手里只有一些凌乱的笔记，事后还得努力解读。

---

### [00:05:20] Will Larson

**English:**
Pretty different now. A lot of engineering managers are spending half their time or more hiring 18 months ago and now they're doing two interviews a month or less. Maybe zero interviews a month. So there's a real shift in just the amount of time people are putting into hiring. Instead, all these different competencies that have become more critical or a really great engineering director might've just been spending their time hiring really well and that could be a top performer and now that person can't actually demonstrate what they're great at.

**中文翻译:**
现在完全不同了。18 个月前，许多工程经理会花一半甚至更多的时间在招聘上，而现在他们一个月可能只做两次面试，甚至零面试。所以人们投入在招聘上的时间发生了真正的转变。相反，其他各种能力变得更加关键。以前，一个优秀的工程总监可能只需把招聘做得很好就能成为顶尖绩效者，而现在那个人无法再通过招聘来展示自己的卓越。

---

### [00:05:51] Will Larson

**English:**
So that person might be perceived as a low performer if they're not also figuring out how to lead the team, getting deeper into the details and also sometimes getting into the figuring out what is the right allocation, what is the right sizing of the engineering teams, this is stuff that we weren't talking about much or maybe if you really pissed off the CEO, maybe an infrastructure you just grew a little bit slower next year, but different ballgame at this point where teams are actually disappearing, teams are getting cut down, teams are getting consolidated. And that's just something that we've avoided for that ZIRP era that now we become a core part of a lot of the job.

**中文翻译:**
因此，如果那个人不学习如何领导团队、深入细节，或者弄清楚如何进行正确的资源分配和团队规模调整，他可能会被视为绩效不佳。在过去，我们不怎么谈论这些，或者除非你真的惹恼了 CEO，否则基础设施团队明年可能只是增长慢一点。但现在情况完全不同了，团队正在消失、缩减或合并。这是我们在 ZIRP 时代避开的问题，而现在它已成为工作的核心部分。

---

### [00:06:27] Lenny

**English:**
It feels like also engineers... They used to have a lot of leverage over companies, inside companies. I imagine that's also changing in a big way.

**中文翻译:**
感觉工程师们……过去在公司内部拥有很大的话语权（杠杆）。我猜这也在发生巨大的变化。

---

### [00:06:37] Will Larson

**English:**
I think that's true. I think this actually has been bad for engineers in some way. One of my hobby horses is that I think that we often treat engineers a little bit like children instead of giving them the responsibilities and ability to actually thrive as adults. And so like, "Oh, the engineers won't want to do that work."

**中文翻译:**
我认为确实如此。从某种程度上说，这对工程师其实是不利的。我经常挂在嘴边的一个观点是，我们经常把工程师当成孩子，而不是赋予他们责任和能力让他们像成年人一样成长。比如会说：“噢，工程师不会想做那项工作的。”

---

### [00:06:53] Will Larson

**English:**
Well, that's actually not good for the engineers to be sheltered from what is important. Actually one of the, I think ,highlights is that I think we're coming back this moment where we can actually treat engineers like our peers and put them into really senior leadership roles and not have this baseline assumption of like, "Oh, we have to coddle them or hide them from the real problems." And this is how they're going to get the opportunity to grow as well. That's a highlight for me and the shift recently.

**中文翻译:**
让工程师远离重要的事情对他们并没有好处。事实上，我认为现在的亮点之一是，我们正在回到一个可以真正把工程师视为同僚、让他们担任高级领导职务的时刻，不再假设必须“娇惯”他们或让他们避开真实问题。这也是他们获得成长机会的方式。对我来说，这是近期转变中的一个亮点。

---

### [00:07:18] Lenny

**English:**
I have definitely worked with that and experienced that where you don't want to piss off engineers. And so are you saying that because that's changing, leaders maybe don't have to worry as much about upsetting engineers plus you just generally think we shouldn't treat engineers that way?

**中文翻译:**
我确实经历过那种情况，就是你不想惹恼工程师。所以你的意思是，因为情况在变，领导者可能不必那么担心让工程师不高兴，而且你通常认为我们本来就不该那样对待工程师？

---

### [00:07:33] Will Larson

**English:**
Yeah, I think a little bit of both, but I think there's been, in this previous era, where hiring and retention were one of the biggest ways you evaluated middle management. Losing team members was huge, huge issue. And so you started to coddle a little bit, which is actually bad, again, bad for the engineers, bad for the teams, bad for everyone, bad for efficiency of the organization. But now something that I love is we get to give engineers real hard problems and we get to actually hold them accountable. And that means we can put them in senior roles.

**中文翻译:**
是的，我觉得两者兼而有之。在之前的时代，招聘和留存是考核中层管理人员最重要的指标之一。流失团队成员是一个巨大的问题。所以你开始有点“娇惯”他们，这其实很糟糕——对工程师不好，对团队不好，对所有人都不好，对组织效率也不利。但现在我喜欢的一点是，我们可以给工程师真正的难题，并让他们承担责任。这意味着我们可以让他们担任更高级的角色。

---

### [00:08:07] Will Larson

**English:**
One of the things that I've been pushing on, I wrote my last book, Staff Engineer about what is the career path for senior engineers. One of the challenges is if we aren't comfortable holding engineers accountable because we just want to retain all the engineers, then we can't put them in senior roles. And so I think we're actually seeing a bit of a shift where we can actually hold them accountable, which means we can put them in senior roles, which means the engineers can actually get what they've been trying to get the entire time, but we haven't been able to because we've been coddling them a little bit too much.

**中文翻译:**
我一直在推动的一件事是——我在上一本书《参谋工程师》中写过——关于资深工程师的职业路径。其中一个挑战是，如果我们因为只想留住所有工程师而不愿意让他们承担责任，那么我们就无法让他们担任高级职位。所以我认为我们正看到一种转变：我们可以让他们承担责任，这意味着我们可以让他们担任高级职位，这意味着工程师终于可以得到他们一直想要的东西，而之前因为我们太过于“娇惯”他们而无法实现。

---

### [00:08:33] Lenny

**English:**
Okay. So there's a few directions I want to go and I'm just going to poke around and see where we go. The first is you're a big advocate of systems thinking. We were chatting about this before. I think a lot of people have heard this term systems thinking and there's books about it. It's sounds great. I want to be a systems thinker. What does that actually mean? How do you find you apply it in your work? How do people get better at this way of thinking?

**中文翻译:**
好的。我想从几个方向展开讨论。首先，你是“系统思维”（Systems Thinking）的坚定倡导者。我们之前聊过这个。我想很多人都听过这个词，也有相关的书籍。听起来很棒，我也想成为一个系统思维者。但这到底意味着什么？你在工作中是如何应用它的？人们该如何提高这种思维方式？

---

### [00:08:57] Will Larson

**English:**
A lot of the least successful but smartest people I've worked with were really strong systems thinking advocates. And so I do want to say every kind of framework has a lot of downsides. There's no framework that people can apply consistently, universally, and get good results. And so briefly on this one, what I see is often people will find a spot where their system and reality are in conflict and they'll be like, "Reality is wrong." And so what's a concrete example?

**中文翻译:**
我合作过的一些最不成功但最聪明的人，往往是系统思维的狂热倡导者。所以我想说，每种框架都有很多弊端。没有哪种框架是人们可以一贯地、普遍地应用并获得好结果的。简而言之，我经常看到人们发现他们的系统模型与现实发生冲突时，会说：“现实错了。” 举个具体的例子吧。

---

### [00:09:28] Will Larson

**English:**
At Stripe, we worked on incident management. And so Stripe pretty important company where our API is available. If the API is down, you lose money and if you lose a lot of money, you leave Stripe because you're pretty upset about that. The number one thing businesses need to do is to collect money successfully for the service that they're selling, right? Stripe is super important.

**中文翻译:**
在 Stripe 时，我们负责故障管理（Incident Management）。Stripe 是一家非常重要的公司，API 的可用性至关重要。如果 API 挂了，客户就会赔钱；如果赔了很多钱，客户就会因为愤怒而离开 Stripe。企业最核心的需求就是成功地为他们销售的服务收钱，对吧？所以 Stripe 非常重要。

---

### [00:09:49] Will Larson

**English:**
And so we did a lot of analysis on incidents trying to understand why things weren't working, what we could do better, but we got so caught up in the analysis that we lost track of whether we're actually improving things. And it took us a while to figure that out because we were so stuck in the systems thinking model and it's not like, "Oh, the team was wrong." It's like, "I was wrong." I was caught up in that model myself, to realize like, "Hey, we weren't actually prioritizing improvements, we were just prioritizing measurement." And you can't keep measuring. There's measure twice, cut once. Sure, but you don't measure infinite times and never get to cut.

**中文翻译:**
我们对故障做了大量分析，试图理解为什么出问题，以及如何改进。但我们太沉迷于分析，以至于忽略了我们是否真的在改进。我们花了很长时间才意识到这一点，因为我们太执着于系统思维模型了。这不只是“团队错了”，而是“我错了”。我自己也陷入了那个模型，才意识到：“嘿，我们其实并没有优先考虑改进，我们只是在优先考虑衡量。” 你不能一直衡量下去。俗话说“三思而后行”（量两次，剪一次），但你不能量无数次却永远不动剪刀。

---

### [00:10:25] Will Larson

**English:**
And you do have to cut at some point to actually make impact. But we just got caught a little bit there. I think a lot of people who get too far in systems thinking make the same mistake where they think reality is wrong and reality is never wrong. Reality is always right. Your model is always wrong if it's in conflict with reality. But that conflict, that gap is really interesting and that's where you can learn.

**中文翻译:**
你必须在某个时刻真正动手去做，才能产生影响。但我们当时被困住了。我认为很多在系统思维上走得太远的人都会犯同样的错误，即认为现实是错误的。但现实永远不会错，现实永远是对的。如果你的模型与现实冲突，那么错的永远是你的模型。但这种冲突和差距非常有趣，这正是你可以学习的地方。

---

### [00:10:49] Will Larson

**English:**
And so I had this model. It's really clean. It represents your hiring pipeline that moving through different steps. It represents your incidents and how you remediate incidents. It can model almost anything pretty quickly when you get good at it. And then understanding how reality is in conflict with that, you start to understand where your mental model is wrong and then you can go educate yourself and improve the model and just keep doing that.

**中文翻译:**
我曾有过这样一个模型，非常简洁。它代表了招聘流程中移动的不同步骤，代表了故障以及如何修复故障。当你擅长此道时，它几乎可以快速建模任何事物。然后通过理解现实如何与模型冲突，你开始明白自己的心理模型哪里错了，接着你可以去学习并改进模型，如此循环。

---

### [00:11:12] Will Larson

**English:**
At some point the model is close enough and you can stop doing that and go actually do the work. So that the biggest thing I tell people is this is a great way to learn, but you also have to do things. You can't just learn. That's not our entire job.

**中文翻译:**
在某个时刻，模型已经足够接近现实，你就可以停止建模，去真正开展工作了。所以我告诉人们最重要的一点是：这是一种很好的学习方式，但你必须付诸行动。你不能只学习，那不是我们工作的全部。

---

### [00:11:25] Lenny

**English:**
To make it a little more concrete, how would you best describe this idea of systems thinking? What's a good way to just like, "Okay. I get what you're talking about?"

**中文翻译:**
为了更具体一点，你会如何描述“系统思维”这个概念？有没有什么好方法能让人一听就明白：“噢，我懂你在说什么了”？

---

### [00:11:32] Will Larson

**English:**
This is probably a better place to start versus a rambling anecdote about using it.

**中文翻译:**
这确实是一个更好的切入点，比我刚才漫谈轶事要好。

---

### [00:11:38] Lenny

**English:**
We can go backwards. It'll be great.

**中文翻译:**
我们可以倒回去讲，这样挺好。

---

### [00:11:41] Will Larson

**English:**
Systems thinking is basically you try to think about stocks and flows. So stocks are things that accumulate and flows are kind of the movement from a stock to another thing. So what's a simple example of a stock? A stock could be the number of fish in a lake. A stock could be the number of people fishing in a lake. And so a flow between those two could be the number of fish in a lake will decrease at some rate based on the number of people fishing in that lake.

**中文翻译:**
系统思维基本上就是尝试思考“存量”（Stocks）和“流量”（Flows）。存量是积累的东西，流量是从一个存量到另一个东西的移动。举个简单的例子：存量可以是湖里鱼的数量，也可以是湖边钓鱼人的数量。两者之间的流量可以是：湖里鱼的数量会根据钓鱼人的数量以一定的速率减少。

---

### [00:12:08] Will Larson

**English:**
So if there's a ton of fishers, the stock of fish will go down faster. There's only a couple of fish, IT will go down slower. But also then there's these flows which kind of dictate that where if we've got much more efficient fishermen, the flow of fish out might go down, but also the fish do reproduce. So then there's another flow going back. So based on the current number of fish and the reproduction rate, the current number of fishers and their fishing rate, you start to see how these can evolve over time. And a lot of this.

**中文翻译:**
如果有很多渔夫，鱼的存量下降得就快。如果只有几个渔夫，下降得就慢。但同时还有一些流量在起作用，比如如果我们有更高效的渔夫，鱼流出的速度可能加快；但鱼也会繁殖，所以还有另一个流回来的流量。因此，基于当前的鱼量和繁殖率，以及当前的渔夫数量和捕鱼率，你开始看到这些因素如何随时间演变。

---

### [00:12:38] Will Larson

**English:**
So first always recommend Thinking In Systems by Donella Meadows. Really phenomenal book. And a lot of her work is also kind of referencing the work in Silent Spring by Rachel Carson, which talks about how small amount of carcinogens or something low in the ecosystem or the food chain rather as they get consumed by predators further and further up get concentrated. And that's a kind of a classic systems thinking problem to think about where you wouldn't think a small amount of carcinogens and a small fish actually matter. But as they go up the food chain, they start to concentrate it and an unexpected change can happen.

**中文翻译:**
首先，我总是推荐 Donella Meadows 的《系统之美》（Thinking In Systems）。这是一本非常了不起的书。她的很多工作也参考了 Rachel Carson 的《寂静的春天》（Silent Spring），书中谈到了生态系统或食物链底层的微量致癌物，随着被更高级的捕食者摄入，浓度会不断富集。这是一个经典的系统思维问题：你可能觉得小鱼体内的微量致癌物无关紧要，但随着食物链向上，它们开始浓缩，最终可能发生意想不到的变化。

---

### [00:13:14] Lenny

**English:**
So then going back to your example of the hiring pipeline, let's come back to that to help connect this definition, which I've never heard, which is awesome, very clear to how you actually implemented say in hiring.

**中文翻译:**
那么回到你刚才提到的招聘流程的例子，让我们把这个定义（我以前没听过，但非常清晰）和你实际在招聘中的应用联系起来。

---

### [00:13:23] Will Larson

**English:**
The first thing to do is to get a model out there of any sort. And so you think about your stocks. And so in a hiring pipeline you might have potential candidates and this could be basically infinite, and then you have a couple of inflows. So you could have sourced, you could have outreach, you could have referrals, and then you have the candidates and those... How many people get sourced. There's probably a function of number of sources you have dedicated to a role. So you'd have another stock of how many sources you have and then that would impact the rate going from potential candidates to actual candidates you've sourced.

**中文翻译:**
第一步是建立某种模型。你会思考你的“存量”。在招聘流程中，你可能有“潜在候选人”，这基本上是无限的。然后你有几个“流入量”：主动搜寻（Sourced）、外联（Outreach）、推荐（Referrals）。然后你有了实际候选人。有多少人被搜寻到，这可能是你为该职位配备的招聘人员（Sourcers）数量的函数。所以你有了另一个存量——招聘人员的数量，这会影响从“潜在候选人”到“已搜寻候选人”的转化率。

---

### [00:13:59] Will Larson

**English:**
And then from candidates that you have in that box, you'd have a conversion rate for people who pass the first recruiter screen and that would move into step two of your process. And then from step two you have maybe a hiring manager screen and that would be another conversion rate. So you can see over time how the candidates of the infinite potential candidates like wandering around LinkedIn, posting about their deep thoughts, convert into actual people, your first, your second, your third.

**中文翻译:**
接着，在那个框里的候选人中，会有一个通过第一轮招聘人员筛选的转化率，然后进入流程的第二步。第二步可能是招聘经理面试，这又是另一个转化率。所以你可以看到，随着时间的推移，那些在 LinkedIn 上闲逛、发表深刻见解的无限潜在候选人，是如何转化为实际的人选，进入第一轮、第二轮、第三轮的。

---

### [00:14:26] Will Larson

**English:**
But then as you get deeper into it, you start to actually see interesting things. And so for a lot of candidate or a lot of pipelines, the biggest issue is hiring managers don't want to extend any offers because the hiring managers can't get to confidence on any candidate. And you'll see in this pipeline, you'll see a ton of candidates getting to offer stage, but almost none of them converting from a potential offer to actually offer. And then you can say, "Hey, here's the problem. You need to go work with the recruiter and the hiring managers on getting conviction about who they should hire.

**中文翻译:**
但当你深入研究时，你会发现有趣的事情。对于很多招聘流程来说，最大的问题是招聘经理不想发 Offer，因为他们对任何候选人都没信心。在模型中，你会看到大量候选人到达 Offer 阶段，但几乎没有人从“潜在 Offer”转化为“实际 Offer”。这时你就可以说：“嘿，问题在这。你需要和招聘人员及招聘经理沟通，让他们对该雇佣谁建立信心。”

---

### [00:14:56] Will Larson

**English:**
Classic problem with early managers, right? Here's a second problem. Manager wants to extend a ton of offers. They do extend them and none of them actually accept. And so that focuses you on the second problem. But there's a third potential world where actually you're just not getting enough candidates in. You're actually doing a great job of making decisions, great job of closing candidates. There's just not enough candidates coming in. And so by looking at this and you can build this model, then you can go to your applicant tracking system, a greenhouse or whatever and pull the historicals and you can just see how the historicals work versus how you'd expect it to work.

**中文翻译:**
这是初级经理的典型问题，对吧？第二个问题是：经理想要发大量 Offer，发了之后却没人接受。这会让你关注第二个问题。还有第三种可能：其实你只是没有足够的候选人进来。你在做决定和谈 Offer 方面做得很好，但源头不足。通过建立这个模型，你可以去你的候选人跟踪系统（如 Greenhouse）提取历史数据，对比实际情况与预期。

---

### [00:15:32] Will Larson

**English:**
You can see the drop-offs and this helps you figure out where should you go try to fix things first. I think we've all worked in companies where you roll out big changes with no data behind them because like, "Oh, it feels like we're not hard enough in how we evaluate candidates or something." You go change a bunch of stuff. But often the real problem might be that the hiring managers making offer extensions to people who never passed the loop anyway. It's just the managers are issuing too many offers because they're panicking. And man, less true now, but a decade... Or not a decade, two years ago, hiring managers panicking to get offers out, that was a real thing that happened a lot. And this just helps you take a complex kind of abstract problem and turn it into something you can actually work in a systematic way.

**中文翻译:**
你可以看到流失点，这能帮你弄清楚应该先修复哪里。我想我们都在这样的公司待过：在没有任何数据支持的情况下推行重大变革，理由是“噢，感觉我们评估候选人不够严格”。然后你改了一堆东西。但通常真正的问题可能是招聘经理在给那些根本没通过面试环的人发 Offer，只是因为他们感到恐慌。两年前（现在没那么严重了），招聘经理恐慌性地发 Offer 是常有的事。系统思维能帮你把复杂抽象的问题转化为可以系统化处理的任务。

---

### [00:16:17] Lenny

**English:**
I feel like product managers will either naturally do it things this way already because a lot of them think in funnels. And it's interesting to hear this version of it of this idea of just following the stock through the flow of the different steps. Awesome. Another thing that I know that you are very passionate about and spend a lot of time thinking about is engineering strategy. I think you have this kind of feeling like engineers don't think enough about the end strategy. Every other function has a strategy and engineers often don't. Talk about what you find there and what your advice is around that.

**中文翻译:**
我觉得产品经理可能天生就会这么做，因为很多人习惯用“漏斗”思维。听到这种“追踪存量在不同步骤中流动”的版本很有趣。太棒了。我知道你非常热衷并花大量时间思考的另一件事是“工程策略”。我觉得你有一种感觉，就是工程师对最终策略思考得不够。其他职能部门都有策略，而工程师往往没有。谈谈你的发现以及相关建议。

---

### [00:16:52] Will Larson

**English:**
First, I start to question whether any function has a strategy at most companies. My general experience is that there's very rarely a written strategy for any company. Sometimes it's a value statement. It's like we build the highest quality products and you're like, "Good. Okay. What do I do with that?" You're like, "Build a high quality product." You're like, "Okay. I don't don't know what that means."

**中文翻译:**
首先，我开始怀疑大多数公司的任何职能部门是否真的有策略。我的普遍经验是，很少有公司会有书面策略。有时它只是一句价值观陈述，比如“我们打造最高质量的产品”，然后你会想：“好吧，那我该怎么做？” 得到的回答是：“打造高质量产品。” 你会觉得：“好吧，我还是不知道这意味着什么。”

---

### [00:17:15] Will Larson

**English:**
Engineering often has this problem where I think people will make comments in their culture amp or their quarterly surveys or whatever. It's like, "Hey, the strategy is not clear or where's the engineering strategy?" And the biggest thing I tell people when they complain and then engineers complain about the product strategy. The PMs don't have any strategy or the business has no strategy. And the reality is product eng and business always have a strategy. It's just often not written down.

**中文翻译:**
工程部门经常遇到这个问题，人们会在季度调查中反馈：“嘿，策略不清晰”或者“工程策略在哪？” 当工程师抱怨产品经理没策略或业务没策略时，我告诉他们最重要的事实是：产品、工程和业务**总是有**策略的，只是通常没有写下来。

---

### [00:17:45] Will Larson

**English:**
And so the first thing I want to do is I push people not to get caught up on the fact that there's no template out there, which is product strategy that someone has forked and filled in. It doesn't mean you don't have a strategy. You do have a strategy. It's maybe a little bit hard to articulate and maybe it's applied inconsistently across different layers of the product reporting chain because it's not written down. But it's never true that there's no product strategy. There's always a product strategy. Sometimes it's bad, but there's always one. And true for engineering as well. There's always an engineering strategy. Just sometimes it's bad.

**中文翻译:**
所以我首先会推动人们不要纠结于没有现成的模板（比如某人 Fork 过来填好的产品策略模板）。没有模板并不代表没有策略。你确实有策略，只是可能很难表达清楚，或者因为没写下来，在产品汇报链的不同层级应用得不一致。但“没有产品策略”绝对是假象，策略总是在那里的，有时很烂，但总归有一个。工程也是如此，总有工程策略，只是有时很烂。

---

### [00:18:21] Will Larson

**English:**
The first rule of strategy is that if you write it down, then you can improve it. If it's not written down, it's hard to say if this PM is just not a good PM or if they're trying to apply the strategy that they've misunderstood or if they actually are correctly applying the strategy from the head of product that's just not appropriate to the problems they're working on, how do you debug any of that?

**中文翻译:**
策略的第一条规则是：如果你把它写下来，你就能改进它。如果没写下来，你就很难判断：是这个 PM 不行，还是他误解了策略，或者是他正确执行了产品负责人的策略但该策略不适合他正在处理的问题？你根本没法调试（Debug）这些问题。

---

### [00:18:43] Will Larson

**English:**
If you have a written document, even if it's not a super compelling strategy, at least you can start debugging. It's like, "Hey, the head of product should improve the clarity of this document. Hey, this DM actually isn't applying it correctly. Hey, the strategy actually isn't appropriate for this one business unit where it makes sense for the others."

**中文翻译:**
如果你有一份书面文件，即使它不是一个非常吸引人的策略，至少你可以开始调试。比如：“嘿，产品负责人应该提高这份文档的清晰度。嘿，这个经理其实没正确执行。嘿，这个策略对这个业务单元不合适，虽然对其他单元很有效。”

---

### [00:19:02] Will Larson

**English:**
So that's the first thing I think about. But the second big theme on strategy I think about is that often good strategy is so boring. It's hard to talk about. For example, on the engineering side of thing, a common strategy that's really good but very boring is we only use the tools we have today. So a lot of times you'll get engineers that want to introduce new programming languages, new databases, new cloud providers. And a really good strategy for almost all companies is like we just use the standard kit we already have today.

**中文翻译:**
这是我考虑的第一点。关于策略的第二个大主题是：好的策略通常非常枯燥，枯燥到很难拿出来谈论。例如，在工程方面，一个非常有效但极其枯燥的策略是：“我们只使用现有的工具。” 很多时候，工程师想引入新的编程语言、新的数据库、新的云服务商。但对于几乎所有公司来说，一个非常好的策略就是：“我们只使用现有的标准工具集（Standard Kit）。”

---

### [00:19:39] Will Larson

**English:**
At Carta, when I joined one of the engineers, Eric Vogel wrote the standard kit and that is our strategy of the tools we use. And you know what? Some people are really frustrated by that and I feel for them. It feels like they're losing control, but the power of these boring strategies is that it focuses people's energy on the problems that we value as a company. And so it is painful coming into alignment if you're kind of slightly misaligned over time, but boring strategies that tell you what actually matters and aligns you with what the company actually caress about are really good for you even if they're a little bit annoying at a time. And I can expand on this idea a lot, but I won't ramble indefinitely on it.

**中文翻译:**
在 Carta，我加入时，一位名叫 Eric Vogel 的工程师编写了“标准工具集”，这就是我们使用工具的策略。你知道吗？有些人对此感到非常沮丧，我能理解他们，感觉像是失去了控制权。但这些枯燥策略的力量在于，它能让人们的精力集中在公司真正看重的问题上。虽然在对齐的过程中可能会有阵痛，但那些告诉你什么才重要、并将你与公司核心关注点对齐的枯燥策略，对你非常有好处，即使它们有时让人心烦。关于这一点我可以展开说很多，但我不想一直啰嗦下去。

---

### [00:20:21] Lenny

**English:**
Well, maybe what might be helpful is what are some other examples of engineering strategies that you've seen just to give people even more just like, "Oh yeah, maybe this should be part of our strategy."

**中文翻译:**
也许更有帮助的是，你还见过哪些其他的工程策略例子？给人们一些启发，比如：“噢对，也许这也应该是我们策略的一部分。”

---

### [00:20:31] Will Larson

**English:**
So first, what is a definition of strategy? And the best one I've ever seen is from Richard Rumelt. He wrote Good Strategy, Bad Strategy.

**中文翻译:**
首先，策略的定义是什么？我见过最好的定义来自 Richard Rumelt，他写了《好战略，坏战略》（Good Strategy, Bad Strategy）。

---

### [00:20:40] Lenny

**English:**
He's coming on the podcast.

**中文翻译:**
他也要来参加这个播客了。

---

### [00:20:42] Will Larson

**English:**
Amazing. He also wrote, The Crux I think came out this year sometime, which I also read. I think both great and just a phenomenal thinker who has so much depth. I think one of the challenges of writing about strategy is you're like, I've seen two things and I write the book, but I think the thing that's impressive about Richard Rumelt is he's seen so many different scenarios that he's able to really operate from both the particular but also the general and dataset in a really interesting way. Another book with similar characteristics is How Big Things Get Done by... I forget the authors, but really amazing dataset of how mega projects kind of succeed and fail.

**中文翻译:**
太棒了。他还写了《关键点》（The Crux），应该是今年出的，我也读了。两本书都很棒，他是一位非常有深度的思想家。写策略书的一个挑战是，有些人只见过两件事就敢写书，但 Richard Rumelt 令人印象深刻的地方在于他见过太多不同的场景，能够以一种非常有趣的方式从具体案例上升到普遍规律。另一本具有类似特质的书是《大功告成》（How Big Things Get Done），作者我忘了，但它拥有关于大型项目成败的惊人数据集。

---

### [00:21:21] Will Larson

**English:**
But anyway, Richard Rumelt, definition of strategy is basically three components. There's a diagnosis. What is the current status quo? What are the things that are real today? There are guiding policies which are basically based on the diagnoses, how do you want to address them? And there's actions. And actions are how are we going to implement these guiding policies. He talks a lot about actions because concerned about this idea of inert strategy where you have like, "We're going to deprecate our old product features we don't use, but no one deprecates any of them."

**中文翻译:**
言归正传，Richard Rumelt 对策略的定义基本上包含三个部分：一是“诊断”（Diagnosis），即现状是什么？今天真实的情况是什么？二是“指导方针”（Guiding Policies），即基于诊断，你打算如何应对？三是“行动”（Actions），即我们如何执行这些指导方针。他非常强调行动，因为他担心那种“无效策略”，比如你说“我们要弃用不旧的产品功能”，但实际上没人去弃用。

---

### [00:21:52] Will Larson

**English:**
So he's really concerned about this non implementation kind of useless strategy that doesn't do anything. On engineering, I'm a little bit less worried about that. I think strategy is more interesting on engineering in terms of clarifying how we make future decisions. And so what are a few examples of that? At Uber, we only used our own data centers. We didn't use the cloud. And this has changed since the era I was there, but in the 2014 era, no cloud, and we had a strict no cloud policy. And this was annoying because we had to indent everything ourselves or run copies of everything ourselves.

**中文翻译:**
他非常担心这种不执行、没用处的策略。在工程领域，我倒没那么担心这个。我认为工程策略更有趣的地方在于明确我们未来如何做决策。举几个例子：在 Uber 时，我们只使用自己的数据中心，不用云服务。虽然在我离开后情况变了，但在 2014 年那个时代，我们有严格的“禁止使用云”政策。这很烦人，因为我们必须自己处理所有事情，或者自己运行所有副本。

---

### [00:22:28] Will Larson

**English:**
But it also meant that we were able to spin up in China in literally three months and some surreal stories from that. We couldn't fit our racks into the data centers, so they had to take the roof off the data center and lift the racks in with the crane.

**中文翻译:**
但这也意味着我们能在短短三个月内就在中国上线，期间发生了一些超现实的故事。比如我们的机架塞不进数据中心，他们不得不拆掉数据中心的屋顶，用起重机把机架吊进去。

---

### [00:22:43] Lenny

**English:**
Holy shit.

**中文翻译:**
天哪。

---

### [00:22:43] Will Larson

**English:**
Just tons of stories and all this had done in three months and truly phenomenal. And Uber wasn't in China for very long, so in some ways you're like, we did all that just a leave? But they left with a nice stake of Didi Kuaidi and not a bad outcome overall. But I think that strategy, we run everything in data centers. We don't use the cloud, meant we were able to move in and out of different geopolitical constraints and companies that relied on cloud presence simply can't. There are fully constrained by where AWS or Google Cloud or Azure have built out. So that's one good example.

**中文翻译:**
故事太多了，所有这些都在三个月内完成，简直是奇迹。虽然 Uber 在中国待的时间不长，某种程度上你会觉得“费这么大劲就为了撤出？”，但他们离开时换取了滴滴出行的股份，结果还不赖。但那个策略——“我们在数据中心运行一切，不用云”——意味着我们能灵活应对不同的地缘政治约束，而依赖云服务的公司则做不到，他们完全受限于 AWS、谷歌云或 Azure 的布局。这是一个好例子。

---

### [00:23:21] Will Larson

**English:**
Another good example at Stripe was this idea of we run a Ruby monolith and that's what we did and that's evolved a bit since then. There's more Java and the Stripe of 2023 than there was in the stripe of 2016 or the 2012 or whatnot. But that policy really focused the engineers on building innovative features for our users rather than building different tooling to support different programming languages. And so in both cases, both the Uber policy around running our own data centers and the Stripe policy around Ruby monoliths, a lot of engineers hated these.

**中文翻译:**
Stripe 的另一个好例子是“运行 Ruby 单体应用”（Ruby Monolith）。虽然现在已经演进了很多，2023 年的 Stripe 比 2016 年或 2012 年有了更多的 Java，但当时的政策确实让工程师专注于为用户构建创新功能，而不是去构建支持不同编程语言的各种工具。在这两个案例中，无论是 Uber 的自建数据中心政策，还是 Stripe 的 Ruby 单体政策，很多工程师都讨厌它们。

---

### [00:24:02] Will Larson

**English:**
But the goal of good strategy is not to appease everyone. The goal of good strategy is to dictate how we invest the limited capacities we have or the limited capabilities we have into the problems we care about. And I think both of them were really effective towards that end.

**中文翻译:**
但好策略的目标不是取悦所有人。好策略的目标是规定我们如何将有限的精力或能力投入到我们关心的问题上。我认为这两个策略在这方面都非常有效。

---

### [00:24:17] Lenny

**English:**
A common theme across all these examples is essentially constraint, deciding we will constrain our options to move faster and focus on the things that really matter.

**中文翻译:**
这些例子的共同主题本质上是“约束”——决定限制我们的选择，以便移动得更快，并专注于真正重要的事情。

---

### [00:24:28] Will Larson

**English:**
In solving the constraints is to me, I think the most interesting thing that strategy really does, and I think when we talk about bad strategy usually is because the diagnosis is bad and it's usually because people are exerting what they want to be true on constraints where it's like, "Hey, we can do all of these projects at once." And often that's just not true, but it's hard to convince people that when they're the CEO or they are really committed to believing it, but almost all bad strategies basically come down from a willful disbelief of what an accurate diagnosis is, which means then your guiding policies are kind of incoherent to begin with.

**中文翻译:**
对我来说，解决约束是策略最有趣的地方。我认为当我们谈论坏策略时，通常是因为“诊断”出了问题，往往是因为人们把自己的主观愿望强加于约束之上，比如：“嘿，我们可以同时做所有这些项目。” 事实往往并非如此，但如果对方是 CEO 或者他们坚信这一点，就很难说服他们。几乎所有坏策略基本上都源于对准确诊断的刻意不信，这意味着你的指导方针从一开始就是不连贯的。

---

### [00:25:08] Lenny

**English:**
Awesome. I'm excited for that episode of Richard where we're going to go real deep into strategy, but maybe just as a lasting topic around there, if someone listening wanted to get better at say end strategy specifically or a strategy in general, is there anything you recommend they do? Is it read these books? Is there anything else?

**中文翻译:**
太棒了。我很期待 Richard 那一集，我们会深入探讨策略。但作为这个话题的结尾，如果听众想提高制定工程策略或通用策略的能力，你有什么建议？是读这些书吗？还有别的吗？

---

### [00:25:26] Will Larson

**English:**
If people want to get good at strategy, there's a lot of different types of strategy, but here are some things I'd really recommend. First, I think the Richard Rumelt book, I think Good Strategy, Bad Strategy is probably the right starting point. I think The Crux also quite good, but maybe I would read that one second. Great overview of how to think about strategy. Also Thinking in Systems, I mentioned that before related to systems thinking, a big part of strategy is being able to model the reality so we can improve your diagnosis.

**中文翻译:**
如果人们想擅长策略，策略有很多种类型，但我会推荐以下几点：首先，Richard Rumelt 的《好战略，坏战略》可能是最好的起点。他的《关键点》也很棒，但可以放在第二本读。它们提供了关于如何思考策略的极佳概览。还有我之前提到的《系统之美》，策略的一个重要部分就是能够对现实建模，从而改进你的诊断。

---

### [00:25:56] Will Larson

**English:**
So I think that one is really quite good as well. If you get into the engineering side of things, there's a lot of interesting books here. There's Technology Strategy Patterns by Evan Hewitt. There's The Value Flywheel effect by Anderson, McCann and O'Reilly. The Phoenix Project by Kim, Behr, Spafford, which is a modern rewrite of The Goal by Goldratt. But I think there's still the missing canonical book is kind of missing on this one. So I took a stab at strategy and my upcoming book, which is coming out the Engineering Executives Primer coming out early next year.

**中文翻译:**
所以那本书也非常好。如果你进入工程领域，有很多有趣的读物：Evan Hewitt 的《技术战略模式》（Technology Strategy Patterns），Anderson 等人的《价值飞轮效应》（The Value Flywheel effect），Kim 等人的《凤凰项目》（The Phoenix Project）——这是 Goldratt 的《目标》的现代重写版。但我认为这个领域仍然缺少一本“典范之作”。所以我在我即将于明年初出版的新书《工程主管入门》中尝试探讨了策略。

---

### [00:26:33] Will Larson

**English:**
Also, took a stab at it. In staff engineer my previous book, but I still think there's a missing book here. So I am dreaming of writing an engineering strategy book for my next project, although we'll see if that actually comes together.

**中文翻译:**
在我的上一本书《参谋工程师》中也尝试过，但我仍然觉得还缺一本书。所以我梦想着下一个项目写一本专门讨论工程策略的书，不过还得看能不能成。

---

### [00:26:48] Lenny

**English:**
Well, let's actually follow that thread of writing something I was definitely hoping to chat about. You write a lot. You've written two, three, four-ish. You're writing a new book. How many books you've published? Two books and there's a third one coming up.

**中文翻译:**
那我们就顺着“写作”这个话题聊聊吧，这也是我非常想谈的。你写了很多东西。你已经写了三四本了吧？你正在写新书。你一共出版了几本？两本，第三本即将出版。

---

### [00:27:00] Will Larson

**English:**
So I have two books. First one with Stripe Press, the second one, self-published and the third one with the Riley coming out in two months effectively.

**中文翻译:**
我有两本书。第一本由 Stripe Press 出版，第二本是自出版，第三本由 O'Reilly 出版，大概两个月后面世。

---

### [00:27:08] Will Larson

**English:**
Okay. And then also many, many blog posts for many, many years. I asked a few people what to ask you, and this came up a lot, Gergely Orosz and Alex Xu from ‎ByteByteGo both asked just this question of just, "How do you make time to write as much as you do?" And then I also, I'll ask this too and just answer it either first or second, just what impact has writing had on your career? Why do you keep doing it?

**中文翻译:**
好的。而且多年来你写了非常多的博客文章。我问了一些人该向你请教什么，这个问题出现得最多。Gergely Orosz 和 ByteByteGo 的 Alex Xu 都问了同一个问题：“你是如何抽出时间写这么多东西的？” 另外我也想问，写作对你的职业生涯产生了什么影响？你为什么坚持写作？

---

### [00:27:37] Will Larson

**English:**
I feel really strongly that you can write a lot more if you write what you want to write. And so this is one of the reasons I don't write for financial gain and I don't write very much on a schedule, so I've done a few pieces for magazines, et cetera, but I find that actually really draining to be you have a topic, you have to agree on the topic. If a topic starts missing what you want to write about, you can't fix it a lot of the time and you're also on this deadline. You're like, "Ah, I'm screwing up. I need to ship this. It needs to be done tomorrow."

**中文翻译:**
我强烈感觉到，如果你写的是你想写的东西，你能写得更多。这也是我不为了经济利益而写，也不怎么按计划写作的原因之一。我为杂志写过几篇稿子，但我发现那非常消耗精力，因为你必须确定一个主题，并达成一致。如果主题偏离了你想写的内容，你往往无法修正，而且还有截止日期。你会觉得：“啊，我要搞砸了，我得交稿，明天就是最后期限。”

---

### [00:28:12] Will Larson

**English:**
I just find that really draining. Conversely, when I own the schedule, when I get to write about, "Hey, I'm writing out something." So I started writing this infrastructure engineering book a couple of years ago. It just wasn't there. I just couldn't get it to come together and so I just stopped. I'm not writing it anymore. Maybe I'll come back to it at some point, but probably not.

**中文翻译:**
我发现那真的很累。相反，当我掌控进度时，我可以写我想写的。比如几年前我开始写一本关于基础设施工程的书，但感觉不对，写不下去，于是我就停下来了，不再写了。也许以后会回来写，但大概率不会。

---

### [00:28:34] Will Larson

**English:**
To me, the biggest strength of writing what you want is you get to write where there's energy and you don't have to write where there's no energy, which takes you really, really negative. And this also ties into how I write books, which is that I basically write the entire thing before I start working with a publisher. And if you are, I think diligent and good at anticipating what their concerns are going to be, you can mostly reuse the content that you're trying to write. This is also easier in the sorts of books I write.

**中文翻译:**
对我来说，写你想写的东西最大的优势在于，你可以在有能量的时候写，而不需要在没有能量的时候强迫自己，那样会让你变得非常消极。这也关系到我写书的方式：我基本上会在开始与出版商合作之前就把整本书写完。如果你足够勤奋并能预见到他们的顾虑，你基本上可以复用你想写的内容。在我写的这类书中，这比较容易实现。

---

### [00:29:05] Will Larson

**English:**
I think harder to do in a really technical introduction to MySQL or something, you can't just resequence those chapters and pretend it's going to work. Those chapters build in a different way than the sort of business book that I write does. Writing the stuff that's energizing and just giving up on the stuff that's not energizing, that's how I write a lot and how I've been writing for 16 some years. And the way I keep doing it is just by writing what's energizing and what I'm thinking about now.

**中文翻译:**
如果是写一本关于 MySQL 的纯技术入门书，可能很难做到这一点，你不能随便调整章节顺序。那些章节的构建方式与我写的这类商业书籍不同。写那些能带给你能量的东西，放弃那些让你没劲的东西，这就是我能写这么多的原因，也是我坚持了 16 年的原因。我保持写作的方式就是只写那些让我兴奋、以及我当下正在思考的事情。

---

### [00:29:38] Will Larson

**English:**
I don't write what I'm not thinking about and I don't write for any audience, I just write what is interesting to me. And that means some people don't like it and that's great. That's totally fine. It's not really for them, it's for people who want to follow the ride and that's where I focus.

**中文翻译:**
我不写我没在思考的东西，我也不为特定的受众而写，我只写我觉得有趣的东西。这意味着有些人可能不喜欢，但这没关系。这本来就不是写给他们的，而是写给那些愿意跟随我的思路一起探索的人，那才是我的关注点。

---

### [00:29:57] Lenny

**English:**
Today's episode is brought to you by Vanta, helping you streamline your security compliance to accelerate your growth. Thousands of fast-growing companies like Gusto, Qom, Quora, and Modern Treasury trust Vanta to help build scale, manage and demonstrate their security and compliance programs and get ready for audits in weeks, not months. By offering the most in-demand, security and privacy frameworks such as SOC 2, ISO 27001, GDPR, HIPAA and many more, Vanta helps companies obtain the reports they need to accelerate growth, build efficient compliance processes, mitigate risks to their businesses, and build trust with external stakeholders.

**中文翻译:**
本集节目由 Vanta 赞助，帮助你简化安全合规流程，加速业务增长。数千家快速成长的公司，如 Gusto、Qom、Quora 和 Modern Treasury，都信任 Vanta 来帮助构建、扩展、管理和展示其安全与合规计划，并在数周而非数月内做好审计准备。通过提供最热门的安全和隐私框架（如 SOC 2、ISO 27001、GDPR、HIPAA 等），Vanta 帮助公司获得加速增长所需的报告，建立高效的合规流程，降低业务风险，并与外部利益相关者建立信任。

---

### [00:30:34] Lenny

**English:**
Over 5,000 fast-growing companies use Vanta to automate up to 90% of the work involved with SOC 2 and these other frameworks. For a limited time Lenny's podcast listeners get $1,000 off of Vanta. Go to vanta.com/lenny. That's vanta.com/lenny to learn more and to claim your discounts. Get started today.

**中文翻译:**
超过 5000 家快速成长的公司使用 Vanta 来自动完成 SOC 2 和其他框架中高达 90% 的工作。在限定时间内，Lenny 播客的听众可以享受 1000 美元的 Vanta 优惠。请访问 vanta.com/lenny 了解更多信息并领取折扣。今天就开始吧。

---

### [00:31:00] Will Larson

**English:**
I would guess about a thousand. That would roughly be my assumption. I think there are a few years where I wrote hundreds of posts, and so if you do that like three years, it's not that hard to get to a thousand from there.

**中文翻译:**
我猜大概有一千篇。这是我的大致估算。我想有那么几年我写了几百篇博文，如果你坚持这么写三年，达到一千篇并不难。

---

### [00:31:16] Lenny

**English:**
That's incredible, especially because you've had intense jobs for all of those years or most of those years. Very high pressure, fast growing hypergrowth companies. Somehow you find time to work. So first, let me just double click slash co-sign your advice here around paying attention to what gives you energy and working on things that you're actually curious about. This is exactly the advice I give to people. A lot of people start this full-time writer, creator life, and they're like, "What do people want? What do people want me to write about? What's popular? What's going to inspire go viral?"

**中文翻译:**
这太不可思议了，尤其是这些年来你一直从事着高强度的工作。那些高压、快速增长的超速成长公司。你居然还能抽出时间。首先，我想强调并完全赞同你关于“关注能带给你能量的事物”以及“研究你真正好奇的事物”的建议。这正是我给别人的建议。很多人开始全职写作或创作生活时会想：“人们想要什么？人们想让我写什么？什么东西流行？什么东西能疯传？”

---

### [00:32:13] Will Larson

**English:**
Yeah. I just a hundred percent agree with that. I think the other thing is that everyone converges on the same thing that they think people want. So it's crypto two years ago. It's like AI right now or it's counter AI. AI is going to ruin the world. It's hard to say something very novel because, one, everyone is trying to say something about it. Two, it's almost certainly not what you're that knowledgeable about where if you just stick in your lane, I think the biggest risk to writers is quitting.

**中文翻译:**
是的，我百分之百同意。另一件事是，每个人都会涌向他们认为“人们想要”的同一个东西。两年前是加密货币，现在是 AI，或者是反 AI（AI 将毁灭世界）。很难说出新意，因为第一，每个人都在谈论它；第二，那几乎肯定不是你最擅长的领域。如果你只待在自己的赛道上，我认为作家面临的最大风险是“放弃”。

---

### [00:32:43] Will Larson

**English:**
A little bit like the 40-year career idea. The biggest risk to content creation of any sort is quitting soon because you get burned out. The biggest risk is not that you grow too slow initially. There's always this sense that you've missed the wave. It's too late to join Substack. The top writers are already there. You'll never be a top writer. It's too late to podcast. There's too many podcasts. You'll never make it. It's too late to join Medium. You'll never make it. There's too many Medium writers.

**中文翻译:**
这有点像“40 年职业生涯”的概念。任何形式的内容创作，最大的风险都是因为倦怠而过早放弃。最大的风险不是起步太慢。人们总觉得错过了浪潮：加入 Substack 太晚了，顶尖作家已经在那了，你永远成不了顶尖作家；做播客太晚了，播客太多了，你永远不会成功；加入 Medium 太晚了，作家太多了。

---

### [00:33:11] Will Larson

**English:**
But it is just not true. If you just keep writing good stuff, you'll build an audience over time and you can take that audience from platform to platform. What really matters is finding something you can actually keep doing for the next decade. That's way harder than doing it for one year.

**中文翻译:**
但这根本不是真的。如果你坚持写好东西，随着时间的推移，你会建立起自己的受众，并且你可以带着这些受众在不同平台间迁移。真正重要的是找到一件你能坚持做十年的事情。这比坚持做一年要难得多。

---

### [00:33:25] Lenny

**English:**
We have the same exact advice on this. This is exactly the things I tell everyone. When I joined Substack, I thought it was too late. I was like, "Man, it's over." And when I started this podcast like, "Oh man, there's a billion podcasts. How is it ever going to work?" So I so agree, and I also so agree on the fact that this whole thing is such a... It's a long game. There's a lot of people. I always say it's easy to start a newsletter, hard to keep it up. Nobody actually keeps it up because people are going to come and go. The thing that really separates success from failure is just people that can keep at it. There's not an end game to this. It's an infinite game and it's about being able to sustain that over the long term.

**中文翻译:**
我们在这一点上的建议完全一致。这正是我告诉每个人的话。当我加入 Substack 时，我也觉得太晚了，心想：“天哪，已经结束了。” 当我开始做这个播客时，我也想：“天哪，已经有十亿个播客了，这怎么可能成功？” 所以我非常同意，而且我也非常认同这是一个长线游戏。我常说，开始写一份 Newsletter 很容易，难的是坚持下去。实际上没人能坚持下去，因为人们总是来来去去。真正区分成功与失败的是那些能坚持下去的人。这没有终点，这是一个“无限游戏”，关键在于能否长期维持。

---

### [00:34:04] Will Larson

**English:**
You're not competing with other content creators. If you think of it as an infinite game, you're all working together. You can all help each other grow. There's no maximum number of product writers or thinkers who can be doing something. You're not less successful because [inaudible 00:34:22] exists or something like that. There's no competition there. It's like a false, false dichotomy.

**中文翻译:**
你并不是在与其他内容创作者竞争。如果你把它看作一个无限游戏，你们其实是在共同努力。你们可以互相帮助成长。产品领域的作家或思想家并没有数量上限。你不会因为某人的存在而变得不那么成功。那里没有竞争，那是一种虚假的二元对立。

---

### [00:34:27] Lenny

**English:**
Yeah. I totally agree with that. Unless there's so many and then all of a sudden what happens is the bar just gets higher, which is good because then people get better stuff and that's fine. That's happening anyway. Just the bar continues to increase because there's more and more content out there. And to me that's the ultimate thing you got to get right is just the bar. You just got to be at a high bar for anyone to care about anything you're writing about. And to your point, to do that well, you have to actually be excited about writing about it and have background and have something to contribute.

**中文翻译:**
是的，我完全同意。除非创作者太多，导致门槛突然变高，但这其实是好事，因为人们能得到更好的内容。反正这种情况正在发生，随着内容越来越多，门槛也在不断提高。对我来说，你必须做对的最核心的一件事就是“门槛”。你必须达到很高的水准，别人才会关心你写的东西。正如你所说，要做到这一点，你必须对所写的内容感到兴奋，有背景知识，并且能贡献一些价值。

---

### [00:34:59] Lenny

**English:**
I'm just ranting here, but the way I think about this is you need to add something new to the conversation for anyone to pay attention because there's so much fluffy, superficial stuff. And to get anyone to care is you need to say something new that no one's heard before or share new information they haven't seen anywhere else.

**中文翻译:**
我只是在发牢骚，但我认为你必须为对话增加一些新东西，别人才会关注，因为现在有太多空洞、肤浅的东西了。要让别人在意，你需要说一些别人没听过的新东西，或者分享一些他们在别处没见过的新信息。

---

### [00:35:15] Will Larson

**English:**
I totally agree. I could keep ranting about this for the entire time. I don't want to derail on this, but I totally agree.

**中文翻译:**
我完全同意。我可以就这个话题一直聊下去。我不想跑题，但我完全赞同。

---

### [00:35:23] Lenny

**English:**
We'll control ourselves. So then getting very tactical, I think this is what a lot of people are always wondering, how do you make time? What's your workflow? How do you make time for writing so that you keep at it with knowing you have an intense full-time job?

**中文翻译:**
我们会克制一下。那么谈谈具体的战术层面，我想这是很多人一直好奇的：你是如何抽出时间的？你的工作流是怎样的？在有一份高强度全职工作的情况下，你是如何为写作腾出时间并坚持下去的？

---

### [00:35:34] Will Larson

**English:**
I used to do things differently before I had a kid, so I have a three and a half year old and just timing your life just really shifts a lot once you have kids. But the biggest thing that I found is finding things to write about that also directly relate to what I'm working on. And this is where I can do something that helps me at work and helps me write at the same time because I think it's incredibly hard to find time to write about stuff that has nothing to do with your work.

**中文翻译:**
在有孩子之前，我的做法不同。我现在有一个三岁半的孩子，一旦有了孩子，你的生活节奏会发生巨大变化。但我发现最重要的一点是：寻找那些与我正在做的工作直接相关的主题来写。这样我做的一件事既能帮助我的工作，又能同时完成写作。因为我认为要抽出时间写那些与工作完全无关的东西是非常困难的。

---

### [00:36:05] Will Larson

**English:**
And this distracts you from your work because these... Particularly if you're in a senior role, these can be pretty demanding jobs, but they're not demanding because you're responding to an urgent DM on Slack every five or six minutes. They're demanding because you need to make some really difficult decisions really well. And I think writing about related topics is a great way to refine your thinking and improve your performance. It's not like a conflict or you do one.

**中文翻译:**
写无关的东西会分散你的工作精力，因为——特别是如果你处于高级职位——这些工作非常繁重。这种繁重并不是因为你每隔五六分钟就要回复一条 Slack 紧急私信，而是因为你需要做出一些非常艰难且正确的决策。我认为撰写相关主题是提炼思维和提高绩效的绝佳方式。这并不是冲突，也不是二选一。

---

### [00:36:34] Will Larson

**English:**
You either write or you do your job well. I think you can find a way to align. And so a lot of podcast folks do interviews with folks who are related to what they're thinking about at work, and that's a great way for them to learn, build their network, to refine their thinking, to test their thinking against experts in the field. It's not like in conflict with the work, it's in alignment. So that's one piece. But yeah, I've played around with my schedule a lot.

**中文翻译:**
并不是说你要么写作，要么做好工作。我认为你可以找到一种对齐的方式。很多播客主会采访那些与他们工作中思考的问题相关的人，这是他们学习、建立网络、提炼思维以及向领域专家验证想法的好方法。这与工作并不冲突，而是高度一致的。这是一方面。另外，我也尝试过很多不同的时间表。

---

### [00:36:58] Will Larson

**English:**
Before I had a kid, often Saturdays would be the writing day and so morning and early afternoon would just be writing. I can't do that anymore, so now I mostly write at night, which is tricky from an energy management perspective. But the biggest thing I would say is just if you're actually excited about something, you will find time and energy for it. If you're not excited about it and it's 9:00 PM, you're just going to get asleep. And so I really think that this is where you have to schedule a little bit deliberately, but the first thing we talked about around energy management, they really come together. When your schedule gets tight, if you're not energized, you just won't get it done. And why would you? It just doesn't make sense.

**中文翻译:**
在有孩子之前，周六通常是我的写作日，整个上午和下午早些时候都在写作。现在不行了，所以我现在大多在晚上写，从能量管理的角度来看这挺难的。但我想说的是，如果你真的对某件事感到兴奋，你总能找到时间和精力。如果你不兴奋，到了晚上 9 点，你只想睡觉。所以我认为你需要刻意安排时间，但这与我们之前谈到的能量管理是相辅相成的。当你的日程很紧时，如果你没有能量，你就无法完成。而且为什么要强迫自己呢？那没意义。

---

### [00:37:41] Lenny

**English:**
Just to close out this thread for someone that wants to do more writing knows that it's going to be valuable, but just hasn't any one tip that you would leave them with to get on this train?

**中文翻译:**
为了结束这个话题，对于那些想多写点东西、知道写作有价值但还没开始的人，你有什么建议能让他们“上车”吗？

---

### [00:37:51] Will Larson

**English:**
It depends why people want to write. I tell people, if you just want to write something that is going to help advance your career, you should really focus on writing two or three really good things and spend a ton of time drafting, revising, getting feedback. You just focus on making one great artifact or two or three great artifacts. You don't need to create a long-running blog where you publish every week. There's really no need to do that if your goal is just to create some artifacts that show you're a deep thinker, that help position you in the industry.

**中文翻译:**
这取决于人们为什么要写。我告诉人们，如果你只是想写点东西来帮助职业晋升，你应该专注于写两三篇真正高质量的文章，花大量时间打磨草稿、修改和获取反馈。你只需专注于打造一两个伟大的“作品”。你不需要创建一个每周更新的长期博客。如果你的目标只是展示你是一个深度思考者，并在行业中定位自己，那完全没必要。

---

### [00:38:21] Will Larson

**English:**
Don't start a newsletter if you just want to advance yourself in the industry a little bit. Just write two or three really good things. So that's the first thing I'd say. But if your goal is to write a lot consistently over time, my biggest advice would be just publish. And so there's a lot of people out there with stuff that hundreds of drafts and they've not published anything. And my thing is I publish almost everything I write. If there's something that I'm not going to publish, I don't start writing it because I have a quick check in my head like is this something I can write and publish?

**中文翻译:**
如果你只是想在行业内提升一点知名度，不要开始写 Newsletter。写两三篇精品就够了。这是我要说的第一点。但如果你的目标是长期持续地大量写作，我最大的建议就是：直接发布。有很多人手里攒了几百个草稿却从未发布。而我的做法是，我几乎发布我写的所有东西。如果有些东西我不打算发布，我就根本不会动笔，因为我会先在脑子里快速检查一下：这是我可以写出来并发布的东西吗？

---

### [00:38:56] Will Larson

**English:**
And if my answer was like, "No, I just don't even start." And my accuracy has gotten higher over time as I've written more, but I published pretty much everything I write. That's why some of it is not that good. And that's okay. Again, I want to write. I want to get these ideas out. I want to show what I'm focused on and my evolution as a thinker trying to learn how to operate in these different roles in these different companies. I'm not writing trying to create a polished perfect thing, and also I'm not writing to maximize a reader's experience of reading it.

**中文翻译:**
如果答案是否定的，我就连开始都不会开始。随着写的越来越多，我的判断也越来越准。我几乎发布我写的所有东西，这就是为什么有些文章质量一般。但这没关系。再说一次，我想写，我想把这些想法表达出来。我想展示我的关注点，以及作为一个试图学习如何在不同公司、不同角色中运作的思想者的进化过程。我写作不是为了创造一个完美无瑕的作品，也不是为了最大化读者的阅读体验。

---

### [00:39:27] Will Larson

**English:**
Some people don't like that, and I think that's a totally reasonable thing not to, but I think what I can bring you is my experience as an operator who's actively learning and thinking through. I think that's really valuable to other operators in the industry. In terms of giving you the perfect writing, I try to do that, closer to that. I don't know if I ever hit perfect writing, but that's where my books are. The books are taking a collection of thoughts over a couple of years, cleaning them up a little bit, packaging them. They're way higher quality than my typical writing.

**中文翻译:**
有些人不喜欢这样，我觉得这完全合情合理。但我认为我能带给你的是我作为一个正在积极学习和思考的执行者（Operator）的经验。我认为这对行业内的其他执行者非常有价值。至于提供完美的文字，我尽量往那个方向靠。我不知道我是否达到过完美，但那是我的书该做的事。书是把几年的思想集合起来，进行清理和包装。它们的质量比我平时的写作要高得多。

---

### [00:39:56] Will Larson

**English:**
But yeah, I would just publish a lot. Don't worry about the quality. Sometimes people will send you silly feedback and I just don't respond to that stuff anymore. You never know why people send you something like that. I think trying to debug people you don't know is a bad use of time. It's just kind of like, "Thank you. Move on to the next. Don't even spend time worrying about it."

**中文翻译:**
所以，尽管大量发布吧。别担心质量。有时人们会给你发一些愚蠢的反馈，我现在根本不回应那些东西。你永远不知道别人为什么要发那种东西。我认为试图去“调试”（Debug）你不认识的人是在浪费时间。只需说声“谢谢”，然后继续下一件事，甚至不要花时间去担心它。

---

### [00:40:19] Lenny

**English:**
I like that term debug people. I think people way overestimate how much anyone cares about what you put out. Most people are going to look at it for three seconds and be like, "Eh." That's the worst case scenario basically is just like, "I don't care about this." Not like, "Oh, Will is such a fool." What a dumb thing to say. Right? No one has time for that.

**中文翻译:**
我喜欢“调试人”这个词。我觉得人们大大高估了别人对你发布内容的在意程度。大多数人只会看三秒钟，然后心想：“额。” 最坏的情况基本上就是“我不在乎这个”，而不是“噢，Will 真是个傻瓜，说的话真蠢”。对吧？没人有那个闲工夫。

---

### [00:40:38] Will Larson

**English:**
And if they do, that's a them problem, right? The internet is a big place with a lot of people and there are people who are going to be having a really bad day when they encounter something you do and they're going to channel that anger at you or that frustration at you, but that's not about you. That's just like you happen to be there when they engage with it. You don't have to take that on. That's not your situation. It's okay.

**中文翻译:**
如果他们真的那么想，那是他们的问题，对吧？互联网很大，人很多，总有人在遇到你发布的东西时正处于糟糕的一天，他们会把愤怒或挫败感发泄在你身上，但这与你无关。只是当他们接触到它时，你恰好在那儿。你不需要承担这些，那不是你的处境。没关系的。

---

### [00:41:03] Lenny

**English:**
Also, when you're just starting out, that's going to be the least stressful time to write because nobody knows it or sees it, so that's when it's like "Take all the crazy... Just do stuff." It only gets more stressful as you build an audience over time.

**中文翻译:**
而且，当你刚开始的时候，那是写作压力最小的时候，因为没人认识你，也没人看。所以那时候你可以尽情尝试各种疯狂的想法。随着受众的积累，压力只会越来越大。

---

### [00:41:15] Will Larson

**English:**
Yeah, absolutely. Absolutely true.

**中文翻译:**
是的，绝对如此。千真万确。

---

### [00:41:18] Lenny

**English:**
Okay. Shifting topics. There's a lot of product managers that listen to this. Something PMs often wonder is how to have better relationships with their engineers, their eng managers. What advice could you give to product managers to build more productive happy relationships with their engineers and eng managers?

**中文翻译:**
好的，换个话题。有很多产品经理在听这个节目。PM 经常想知道如何与他们的工程师和工程经理（EM）建立更好的关系。对于 PM 如何与工程师和 EM 建立更高效、更愉快的工作关系，你有什么建议？

---

### [00:41:37] Will Larson

**English:**
So the core problem, and most of the EM PM peers that I've worked on... There's two core problems. So one, sometimes the incentives are misaligned and that's hard to navigate, but if you can just be honest with each other and understand the incentives, sometimes you can find a compromise, but sometimes the EMs and PMs will be misaligned because just their incentives are so far apart that there's no way to get to the bottom of it. And so this might be timeline related or saying yes to sales related. Or the engineer is like, "Hey, we definitely can't say yes to that." And the PMs are like, "Actually, we're going to say yes to it because really important for me getting promoted," or something like that.

**中文翻译:**
核心问题，以及我合作过的大多数 EM/PM 搭档中存在的问题……有两个核心问题。第一，有时激励机制（Incentives）是不一致的，这很难处理。但如果你们能坦诚相待并理解彼此的激励机制，有时可以找到折中方案。但有时 EM 和 PM 的分歧是因为激励机制相差太远，根本无法调和。这可能与时间表有关，或者与答应销售的要求有关。工程师会说：“嘿，我们绝对不能答应那个。” 而 PM 会想：“实际上，我们要答应，因为这对我的晋升非常重要。”

---

### [00:42:19] Will Larson

**English:**
Is it ever this simple? It's really never that simple. People create simplistic narratives to find villains that they work with. There are no villains in the workplace. They're just people with complex incentives that are doing complex things. But sometimes I talk to EMs who think, "Oh, the product manager is just saying yes because they want to get promoted because the salesperson will review their promotion or something."

**中文翻译:**
事情真的有这么简单吗？其实从来没那么简单。人们习惯编造简单的叙事来在同事中寻找“反派”。职场中没有反派，只有带着复杂激励机制去做复杂事情的人。但有时我听 EM 说：“噢，产品经理答应只是因为想晋升，因为销售人员会参与他们的晋升评审之类的。”

---

### [00:42:40] Will Larson

**English:**
The reality is never as simple. The reality is the business needs to sell stuff to remain functioning. You can't just say no and have the business succeed. That doesn't work either. So one, understanding the incentives. The other piece though, and I think this is the more common case or just that the EM or the PM just don't understand the other person's needs and they start arguing before understanding. So my biggest advice to both the EMs and the PMs, is before you try to solve the conflict, it's like pushing to ship this feature, pushing to change the approach. Just make sure you actually understand what they care about.

**中文翻译:**
现实从来没那么简单。现实是业务需要销售产品才能维持运转。你不能只说“不”就指望业务成功，那也行不通。所以第一是理解激励机制。第二点，我认为这更常见，就是 EM 或 PM 根本不理解对方的需求，在理解之前就开始争论。所以我对 EM 和 PM 最大的建议是：在你试图解决冲突（比如强推某个功能或改变方法）之前，先确保你真正理解了对方在意的是什么。

---

### [00:43:17] Will Larson

**English:**
There is this idea that you have to make trade-offs and that there are tons of hard trade-offs to be made in the field, but my experience is if you really deeply understand what everyone wants, there's usually a compromised solution that gives everyone exactly what they want. That doesn't take more time. You just have to be willing to dig deeper into it and understand the true needs for each party, which is often not what they're saying by the way, which is part of the confusion.

**中文翻译:**
人们总认为必须做权衡，这个领域有无数艰难的权衡。但我的经验是，如果你真的深入理解了每个人的需求，通常会有一个折中方案，能让每个人都得到他们想要的，而且不需要更多时间。你只需要愿意深入挖掘并理解各方的真实需求——顺便说一句，真实需求往往不是他们嘴上说的那些，这也是困惑的来源之一。

---

### [00:43:45] Lenny

**English:**
On the incentives piece, is there anything you've seen work to fix that problem? Because if PM performance reviews are based on impact engineering, performance reviews are based on interesting projects or uptime, do you just work to change those ladder definitions? What actually can help that situation?

**中文翻译:**
关于激励机制，你见过什么有效的方法来解决这个问题吗？因为如果 PM 的绩效评估基于影响力，而工程部门的绩效评估基于有趣的项目或在线率（Uptime），你是去修改职级定义吗？到底什么能改善这种情况？

---

### [00:44:05] Will Larson

**English:**
So my biggest thing has been trying to force this idea that EM/PM pairs are peers and they generally have the same performance rating. And there's exceptions here. It could be the EM is clearly not performing and then it's not the PM's fault if the EM is can't show up to work. The team doesn't respect them. Sometimes there's clear non-performance, but generally hard situations are not situations where one person is obviously terrible. Those are easy to diagnose, those are the easy ones. But in cases where there's two folks who seem to be pretty good, but just the overall execution is not working out, I think this idea that same perf rating for both drives a level of one pain, but the right perspective.

**中文翻译:**
我最主要的做法是强推这样一个理念：EM/PM 搭档是同僚，他们通常应该得到相同的绩效评级。当然也有例外，比如 EM 明显表现不佳，如果 EM 根本不上班或者团队不尊重他，那不是 PM 的错。有时会有明显的绩效问题，但通常棘手的情况并不是其中一人明显很烂。那种情况很容易诊断。但在两个人都很优秀、但整体执行效果不佳的情况下，我认为“两人评级相同”的做法虽然会带来痛苦，但能引导正确的视角。

---

### [00:44:56] Will Larson

**English:**
Also, something that I think Carta has experimented a little bit with over time. Henry, our CEO has a blog post about trifectas in doing that, but not just for EM and for PM, but also for that business leadership as well where you all get graded the same score based on your ability to evaluate and solve for the entire set of constraints, not just your functional constraints.

**中文翻译:**
这也是 Carta 一直在尝试的事情。我们的 CEO Henry 写过一篇关于“三位一体”（Trifectas）的博客，不仅针对 EM 和 PM，还包括业务领导者。你们都会根据评估和解决整套约束条件（而不仅仅是你所属职能部门的约束）的能力，被评定为相同的分数。

---

### [00:45:20] Lenny

**English:**
Wow. That's so interesting. So your recommendation, something you're doing, it sounds like is the engineer manager and the PM get the same performance review rating? And so they're discussed in the same meeting.

**中文翻译:**
哇，太有意思了。所以你的建议，以及你正在做的，听起来就是让工程经理和产品经理得到相同的绩效评级？并且他们在同一个会议上被讨论。

---

### [00:45:33] Will Larson

**English:**
Our chief product officer, Vrushali and I spend a fair amount of time calibrating together and making sure... Again, there's cases where there's an exception because there's clear issues happening for someone. But on average that is what's happening. And I think people know that's what's happening because we told them that. And I think that's pretty powerful.

**中文翻译:**
我们的首席产品官 Vrushali 和我会花相当多的时间一起进行校准（Calibration），确保……再次强调，如果某人有明显问题，会有例外。但平均而言，情况就是这样。我认为大家也知道这一点，因为我们告诉过他们。我觉得这非常有力量。

---

### [00:45:55] Lenny

**English:**
That is so interesting. I've never heard of that approach. That is definitely solving that problem of EM/PM or...

**中文翻译:**
这太有趣了。我从未听说过这种方法。这绝对解决了 EM/PM 之间的问题……

---

### [00:46:01] Will Larson

**English:**
Yeah, the incentives are shared now, which isn't perfect. It's still hard to balance them. They can still make the wrong trade-offs, but at least they understand the incentives are shared, which I think is a pretty powerful idea.

**中文翻译:**
是的，现在激励机制是共享的。虽然这并不完美，平衡它们依然很难，他们仍可能做出错误的权衡，但至少他们明白激励是共享的，我认为这是一个非常强大的想法。

---

### [00:46:15] Lenny

**English:**
That is really interesting. I imagine some companies might even want to include design managers in that, take another step.

**中文翻译:**
这确实很有趣。我想有些公司甚至可能想把设计经理也纳入其中，再往前走一步。

---

### [00:46:23] Will Larson

**English:**
The role and the primacy of different functions in different companies varies so much that it's hard to have a one size. You could also imagine where you want a staff engineer in that or not. And so I think very company specific. But yeah, I think design could absolutely be involved particularly for a design led company like an Airbnb or something like that.

**中文翻译:**
不同公司中不同职能的角色和重要性差异很大，很难一概而论。你也可以想象是否要把参谋工程师（Staff Engineer）也包含进来。所以我认为这非常取决于公司具体情况。但是，设计经理绝对可以参与进来，特别是对于像 Airbnb 这样设计驱动的公司。

---

### [00:46:43] Lenny

**English:**
Wow. So interesting. Maybe just as a final thought there, if a PM is having challenges with their EM, what do you think PMs maybe don't realize their engineering managers are finding important or maybe are stressed about that they're just like, "Oh wow, I never thought about that."

**中文翻译:**
哇，太有意思了。关于这个话题的最后一点思考：如果一个 PM 与他们的 EM 沟通困难，你认为 PM 可能没意识到哪些 EM 觉得重要或感到压力的事情？哪些是 PM 会惊呼“噢哇，我从没想过那个”的事情？

---

### [00:46:43] Will Larson

**English:**
I think one of the biggest challenges I've historically seen, particularly in the last decade is this idea that engineering managers have the job of giving their team interesting work. I think that that can put... You often see this in growth teams where the growth team is like, "Hey, we just need to do a ton of experiments." An engineer is like, "I want to build something brand new." And the eng managers in between those try to figure out, "Need to ship 50 experiments that are pretty boring and they want to do something brand new. I don't know how to do solve this."

**中文翻译:**
我认为我见过的最大挑战之一，特别是在过去十年里，是工程经理认为自己的职责是给团队提供“有趣的工作”。这会带来麻烦……你经常在增长团队中看到这种情况：增长团队说“嘿，我们只需要做大量的实验”，而工程师说“我想构建一些全新的东西”。夹在中间的工程经理会很纠结：“需要交付 50 个相当枯燥的实验，但他们想做全新的东西。我不知道该怎么解决。”

---

### [00:47:30] Will Larson

**English:**
So it's a tricky moment. And good EMs find the way to balance, but that's the biggest source of ongoing friction where the EMs have been told by their teams they need to do something that the PMs just have no visibility into. And it makes the EM seem totally unreliable partners because they're trying to solve these little bit of these invisible constraints. And that's where I think pushing further to understand, "Hey, you keep prioritizing this rewrite into a new programming language."

**中文翻译:**
这是一个棘手的时刻。优秀的 EM 会找到平衡的方法，但这是持续摩擦的最大来源：团队告诉 EM 他们需要做某些事情，而 PM 对此完全不知情。这让 EM 看起来像是一个完全不可靠的合作伙伴，因为他们正试图解决这些“隐形约束”。这就是为什么我认为需要进一步沟通：“嘿，你一直在优先考虑用新语言重写。”

---

### [00:48:00] Will Larson

**English:**
To me that seems like completely idiotic thing to be doing. What's going on? And then once you understand, you might not agree with them, but at least you can have an honest conversation about how to navigate those constraints versus just like, "Man, you won't believe what my EM partner did today. This bozo did blah, blah, blah." And having this victim villain mindset about your peers.

**中文翻译:**
“在我看来，这简直是愚蠢至极。到底发生了什么？” 一旦你理解了，你可能仍然不同意他们，但至少你们可以就如何处理这些约束进行坦诚的对话，而不是仅仅抱怨：“天哪，你简直不敢相信我的 EM 搭档今天做了什么。那个笨蛋做了某某事。” 从而避免对同僚产生这种“受害者与反派”的心理。

---

### [00:48:24] Lenny

**English:**
An adjacent topic that I wanted to spend some time on is measuring engineering velocity productivity. I think it's probably one of the most common and also maybe the most annoying questions eng leaders get is just how do I know if my engineers are moving as quickly as they can? How do we help them move faster? What advice do you give to eng leaders for eng teams just for how to measure productivity well?

**中文翻译:**
我想花点时间讨论一个相关话题：衡量工程速度和生产力。我认为这可能是工程领导者收到的最常见、也可能是最烦人的问题：我怎么知道我的工程师是否已经尽力快了？我们如何帮助他们跑得更快？对于工程领导者如何衡量团队生产力，你有什么建议？

---

### [00:48:44] Will Larson

**English:**
This is a question that's coming up even more in a moment when we're reducing a lot of the size of teams from the industry when the venture capitalists that are on the board for these venture-backed companies are pushing on the efficiency of engineering. Engineers are trying to figure out how do we represent this? How do we prove that we're appropriately productive for the amount of headcount and funding that we have as an organization?

**中文翻译:**
在当前这个行业大规模缩减团队规模的时刻，这个问题出现得更加频繁。风投支持的公司的董事会成员正在推动提高工程效率。工程师们也在思考：我们该如何表现这一点？我们如何证明，相对于组织的员工人数和资金投入，我们的生产力是合理的？

---

### [00:49:09] Will Larson

**English:**
And man, that's hard. So the first way that people focus on trying to answer these questions is just benchmarking by the amount of funding that you have. And that's pretty straightforward to do is a mechanical exercise. You get a data set from your venture capital funds or whatnot, and you figure out, "Okay. How much should we be spending in R&D? How much should we be spending in engineering? How much should we be sending on infrastructure engineering in R&D?" And you can benchmark this all out and figure out what the correct numbers are there.

**中文翻译:**
天哪，这太难了。人们尝试回答这些问题的第一个方法就是根据融资额进行基准测试（Benchmarking）。这作为一个机械化的练习非常直接。你从风投基金或其他地方获取数据集，然后计算出：“好吧，我们的研发投入应该是多少？工程投入应该是多少？研发中的基础设施工程投入应该是多少？” 你可以把这些都做基准测试，算出正确的数字。

---

### [00:49:40] Will Larson

**English:**
The problem is this is a very mechanical and not very insightful, driven way. It'll get you a defensible answer. It's like the old, no one gets fired for buying IBM, which definitely hasn't been true in my career ever. But this idea that if you just have the right benchmarks, DCs won't judge you for spending too much in engineering, but this doesn't actually help you get to the right place. It just helps you get your board to be less angry at you, which is useful because it's hard to do good work when your board is angry at you.

**中文翻译:**
问题在于，这是一种非常机械、缺乏洞察力的方法。它能给你一个“站得住脚”的答案。就像那句老话，“没人会因为买了 IBM 的产品而被解雇”，虽然在我的职业生涯中这从未成真。但这种想法是：只要你有正确的基准，风投就不会因为你在工程上花太多钱而指责你。但这并不能真正帮你到达正确的目的地，它只是让董事会对你没那么生气。这很有用，因为如果董事会很生气，你很难做好工作。

---

### [00:50:13] Will Larson

**English:**
But it's not useful in the sense that it doesn't actually help you run your organization effectively. So then there's the much harder mediator problem of how do you actually know if your R&D team or engineering team is effective? What I find is a couple of things. First, if you're a good leader and you talk to engineers, they will tell you... The engineers know if their teams are effective or not. And if they're not, they'll also tell you why not. And their diagnosis can be wrong, but there's a crumb you can start picking up and you can trace the crumbs to figure out what's wrong.

**中文翻译:**
但从实际有效运行组织的角度来看，这并无用处。接下来的难题是：你如何真正知道你的研发团队或工程团队是否高效？我发现了两点。首先，如果你是一个优秀的领导者并与工程师交谈，他们会告诉你……工程师知道他们的团队是否高效。如果不高效，他们也会告诉你原因。他们的诊断可能不对，但你可以顺着这些蛛丝马迹去查明真相。

---

### [00:50:49] Will Larson

**English:**
Often you'll have more experience to analyze the complaints to figure out what kind of the contributing causes are to them. But yeah, if you just go talk to the team on an ongoing basis, you'll know if they're effective or not and you can go work to solve those specific problems. But again, you can't tell your board, "Oh, it's fine. I talked to the teams that they're good." My intuition's spot on because how do they know if your intuition is good or not?

**中文翻译:**
通常你会有更丰富的经验来分析这些抱怨，找出背后的根本原因。是的，如果你持续与团队沟通，你就会知道他们是否高效，并着手解决具体问题。但同样，你不能告诉董事会：“噢，没问题，我跟团队聊过了，他们挺好的。” 或者说“我的直觉很准”，因为他们怎么知道你的直觉准不准？

---

### [00:51:17] Will Larson

**English:**
They're dealing with a huge portfolio and some of their leaders are talking to are good, and some of them have terrible intuition. How do they actually assess? I think it's tricky. What I've tried to do is basically two things. One, aligning engineering evaluation to the business and product goals. So I want us to be wholly accountable with the product goals. Well, we did a good job products like screwing up over there. Obviously, a lot of companies find comfort in doing that, but really we're here to support the product, to support our customers in doing something interesting. We're not here to build novel systems unless it supports the customer and the product.

**中文翻译:**
董事会面对的是庞大的投资组合，他们接触的领导者中，有的直觉敏锐，有的直觉糟糕。他们该如何评估？这很棘手。我尝试做的基本上有两点：第一，将工程评估与业务和产品目标对齐。我希望我们对产品目标负全部责任。虽然很多公司喜欢推卸责任说“我们做得很好，是产品那边搞砸了”，但实际上我们的存在是为了支持产品，支持客户完成有趣的事情。我们不是为了构建新颖的系统而存在的，除非它能支持客户和产品。

---

### [00:51:59] Will Larson

**English:**
So first try to align heavily there. Second, I think just showing the roadmap of the valuable things we've done in the last six months is really powerful. I think sometimes people are like, "I don't have anything to put there." And you're like, "Yeah, that's a real issue." Or if you have the ton of stuff to put there, that's great. I really find that if you just commit, show the number of meaningful, meaty things that have impact that you're doing and you can explain the impact, people will step back and give you space. If you can't populate that list, people will have concerns and rightly so, they should be concerned about that.

**中文翻译:**
所以首先要高度对齐。第二，我认为展示过去六个月我们所做的有价值的事情的路线图（Roadmap）非常有说服力。有时人们会说：“我没什么可写的。” 那你就会意识到：“是的，这确实是个大问题。” 如果你有一堆东西可以写，那就太棒了。我发现，只要你展示出你正在做的那些有意义、有分量且有影响力的工作，并能解释其影响，人们就会退后一步，给你空间。如果你列不出清单，人们就会担心，而且这种担心是合理的。

---

### [00:52:36] Lenny

**English:**
Is there any metrics or tools or anything like that that you find useful too? Because these are all awesome piece of advice, but I imagine everyone is always just like, "Give us this number we're tracking, give us this dashboard, see what engineers doing."

**中文翻译:**
有没有什么指标或工具是你觉得有用的？因为这些建议都很棒，但我猜大家总是想问：“给我们一个正在追踪的数字，给我们一个仪表盘，看看工程师在做什么。”

---

### [00:52:49] Will Larson

**English:**
So one of the most influential books in the last decade in software engineering leadership and infrastructure is Accelerate by Nicole Forsgren, Gene Kim, and I believe there's a third author on that one, but I'm forgetting right now. Really phenomenal book and it comes up with these four metrics. It comes up with lead time. It comes up with incident remediation time. It comes up with failure rate. And the fourth one of some sort. There's at least 50 different startups out there that are selling you dashboards that instrument these pieces of data and they want you to just evaluate your team on them.

**中文翻译:**
过去十年软件工程领导力和基础设施领域最有影响力的书之一是 Nicole Forsgren 和 Gene Kim 等人写的《加速》（Accelerate）。这是一本非常了不起的书，它提出了四个指标：交付周期（Lead Time）、故障修复时间、变更失败率，还有第四个。现在至少有 50 家初创公司在向你推销仪表盘，用来测量这些数据，并希望你根据这些数据来评估团队。

---

### [00:53:30] Will Larson

**English:**
The challenge is these are really good diagnosis metrics. And so hey, our deployments are slow. Why is that? How do we speed them up? But your deployments being slow doesn't make you a good company or a bad company, it just tells you where you should focus on improving. It doesn't actually change how you are. And similarly, if your lead time is quick or slow, it tells you where you should invest or it doesn't actually tell you if you should fire your engineers or something like that. That's way, way more details specific.

**中文翻译:**
挑战在于，这些是非常好的“诊断”指标。比如：“嘿，我们的部署很慢。为什么？我们如何加速？” 但部署慢并不能说明你是一家好公司还是坏公司，它只是告诉你应该专注于改进哪里。它并不能真正改变你的本质。同样，交付周期快慢只是告诉你应该在哪里投入，它并不能告诉你是否应该解雇工程师。那需要更具体、更深入的细节。

---

### [00:54:00] Will Larson

**English:**
So people do like to see these metrics just like they see uptime metrics. A lot of engineers report on sprint points or stuff like that to their board, which are just totally, totally fake thing to be reporting on. But people get some comfort on it. So my biggest thing here is when people measure things, this isn't an engineering only problem, but when people measure, they take on the perspective of an expert and they can tell you why not to measure everything. They can tell you why every measure is wrong or inaccurate and they rule everything out and so they measure nothing and they go to someone who's not an expert and well actually there's no accurate measure to give.

**中文翻译:**
人们确实喜欢看这些指标，就像看在线率指标一样。很多工程师向董事会汇报 Sprint 点数之类的东西，那完全是虚假的汇报内容。但人们能从中获得安慰。我在这里最大的感触是，当人们衡量事物时（这不只是工程问题），专家往往会告诉你为什么不该衡量一切，为什么每个衡量标准都是错误或不准确的，最后他们排除了所有标准，导致什么都不衡量。然后他们告诉非专家：“其实没有什么准确的衡量标准可以提供。”

---

### [00:54:37] Will Larson

**English:**
They're not an expert is like you don't know what you're doing. And so you just have to get comfortable measuring something that's not perfect, but you can actually measure and reporting on it and then the measure that's imperfect as people ask questions, that's an opportunity to educate people on why the measure is imperfect. What are some things that misses or kind of the lies from the conversation.

**中文翻译:**
对于非专家来说，这听起来就像你不知道自己在做什么。所以你必须习惯去衡量一些不完美但确实可以衡量并汇报的东西。当人们对这些不完美的衡量标准提出疑问时，这正是一个教育他们的机会，告诉他们为什么这个标准不完美，它遗漏了什么，或者对话中存在哪些误区。

---

### [00:54:59] Will Larson

**English:**
Metrics are about educating the people consuming the metrics about the reality of the rich data underneath. They're not about this perfect data set that shows everything starting with something mediocre and the Dora metrics are really helpful for diagnosis, but if you have to, they can also be a good enough starting place to start reporting to your board or your CEO or to the other executives and then you're like, "Oh, there's all these problems with them."

**中文翻译:**
指标的意义在于教育那些使用指标的人，让他们了解底层丰富数据的真实情况。指标并不是为了展示一个完美的、涵盖一切的数据集。你可以从一些普通的指标开始，DORA 指标对诊断非常有帮助。如果必须的话，它们也是向董事会、CEO 或其他高管汇报的一个足够好的起点。然后你可以解释：“噢，这些指标存在这些问题。”

---

### [00:55:22] Will Larson

**English:**
Yes. There are all those problems with them, but that's this place you start and you educate people up from there to help them understand the nuances and that's how they become more sophisticated, understanding engineering, not by refusing to give them anything they can possibly measure.

**中文翻译:**
是的，它们确实有问题，但那是你的起点。你从那里开始教育人们，帮助他们理解其中的细微差别。这就是他们变得更专业、更理解工程的方式，而不是通过拒绝提供任何可衡量的东西。

---

### [00:55:36] Lenny

**English:**
Awesome. I'm glad that was your answer because we had Nicole on the podcast and she talked through Dora and all the frameworks that she recommends. And she even actually shared some benchmarks that she points people to that give you some sense of just like, "Are you in a good place roughly or not?" So we'll point people to that episode to dig deeper. Awesome. I'm glad that you're a fan.

**中文翻译:**
太棒了。我很高兴你这么回答，因为我们之前邀请过 Nicole 参加播客，她详细讲解了 DORA 和她推荐的所有框架。她甚至分享了一些基准，让人们大致了解“自己是否处于良好状态”。所以我们会引导大家去听那一集以深入了解。很高兴你也是她的粉丝。

---

### [00:55:55] Lenny

**English:**
Okay. Just a couple more questions before we get to our very exciting lightning round. One is around values, company values, org values. Do you have some really good advice for people for how to think about coming up with values? What do you share? What do you recommend to people that are trying to figure out what values they should define for their org and their company?

**中文翻译:**
好的。在进入令人兴奋的闪电轮环节之前，还有几个问题。一个是关于价值观——公司价值观、组织价值观。对于如何思考和制定价值观，你有什么好的建议吗？你会向那些试图为组织和公司定义价值观的人推荐什么？

---

### [00:56:14] Will Larson

**English:**
I mean, values are really interesting, right? And different companies talk about values in different ways. I once worked at a company where the execs went to visit the Facebook campus. They saw the values written up on the wall and they took the Facebook values and wrote them up in our walls and that didn't do a whole lot. It maybe undermined people's confidence in the critical thinking of the executive team that just took these written up on Facebook walls and replicated it.

**中文翻译:**
价值观真的很有趣，对吧？不同的公司以不同的方式谈论价值观。我曾在一家公司工作，高管们去参观了 Facebook 园区，看到墙上写着的价值观，于是就把 Facebook 的价值观搬到了我们公司的墙上。这并没起什么作用，反而可能削弱了员工对高管团队批判性思维的信心——因为他们只是照搬了 Facebook 墙上的东西。

---

### [00:56:39] Will Larson

**English:**
But I think those values did work well for Facebook and those values were meaningful for Facebook. And so first you can't do is just steal values. Value cargo culting. Users first. Great Amazon value. A lot of companies aren't users first and that's okay, but what's not okay is when you put, "Hey, we're users first," and then you actually show the decisions you're making and you clearly aren't users first.

**中文翻译:**
但我认为那些价值观对 Facebook 确实有效，对 Facebook 很有意义。所以首先你不能只是窃取价值观，搞“价值观货运崇拜”（Value Cargo Culting）。比如“用户至上”是亚马逊伟大的价值观。很多公司并不是用户至上的，这没关系；但如果你标榜“我们用户至上”，而实际决策却显然并非如此，那就有问题了。

---

### [00:57:06] Will Larson

**English:**
So one of the things I think about is just honesty. And so good values have to be honest and so any value can be honest or there's no universally honest values. You can say something like, "We're thrifty." Or we can say something like we spend as much as we need to get the best value. Those are totally different and good companies are run both ways. So the first rule I think about a lot is honesty. You actually do what you claim you do and the value. The second one is applicability. You have to have value that you can actually figure out how to apply to your work.

**中文翻译:**
所以我考虑的一点就是“诚实”。好的价值观必须是诚实的。任何价值观都可以是诚实的，但没有放之四海而皆准的诚实价值观。你可以说“我们很节俭”，也可以说“为了获得最佳价值，我们不惜重金”。这是完全不同的，而优秀的公司在这两种模式下都能运行。所以我经常想到的第一条规则是诚实：你确实在做你声称在做的事情。第二条是“适用性”：你必须拥有能够真正应用到工作中的价值观。

---

### [00:57:39] Will Larson

**English:**
And so one of Stripe's values was no longer a value I believe, but it's optimized globally. And so optimized globally is a really interesting problem because sometimes you'll have something you wanted for interesting value. Sometimes you want to do something and you're like, "Hey, I want to introduce a new programming language that's better for my team." For the organization overall, this is actually much worse for the organization so I'm not going to do it.

**中文翻译:**
Stripe 曾经有一个价值观（我想现在已经不是了），叫做“全局优化”（Optimize Globally）。这是一个非常有趣的问题，因为有时你想做一些对你的团队有好处的事情，比如：“嘿，我想引入一种对我的团队更好的新编程语言。” 但对于整个组织来说，这实际上更糟，所以我不会去做。

---

### [00:58:03] Will Larson

**English:**
Uber didn't have this as a written value, but implicitly Uber's value was do what's good for your team and ignore everyone else because that will slow us down. So the two different companies had opposite values, but they're both very applicable. It's like how should we navigate decisions? Should I optimize for my team or for the organization? So those are applicable to real problems and they were honest where Uber was just like, "Don't worry about other people." Make it work for your team. And that's how they moved so fast because they just didn't worry.

**中文翻译:**
Uber 虽然没有把这写成书面价值观，但隐含的价值观是：做对你团队有利的事，忽略其他人，因为那会拖慢我们的速度。这两家公司拥有截然相反的价值观，但它们都非常具有适用性。它指导你如何做决策：我应该为我的团队优化还是为整个组织优化？这些都适用于真实问题，而且它们是诚实的。Uber 当时就是：“别担心其他人，让它在你的团队里跑通。” 这就是他们移动得如此之快的原因，因为他们根本不担心。

---

### [00:58:32] Lenny

**English:**
Wasn't their value of toe-stepping, encouraging toe-stepping, something like that?

**中文翻译:**
他们的价值观里不是有一条叫“踩脚趾”（Toe-stepping），鼓励互相挑战吗？

---

### [00:58:36] Will Larson

**English:**
Let builders build toe stepping. There were a number of values that could be interpreted in different ways and sometimes they got weaponized in various ways as all values do. But these are both interesting in different ways. And so number one is honest and two is applicable. Three is I think the last thing for a good value is this idea of reversibility. So there's some values that aren't actually usable. And so here's a good example. We build good software. Okay. But why would you ever not build good software? That doesn't make sense or we solve customer problems that matter. Good.

**中文翻译:**
“让建设者去建设”、“踩脚趾”。有很多价值观可以有不同的解读，有时它们会像所有价值观一样被武器化。但这些在不同方面都很有趣。所以，第一是诚实，第二是适用。第三，我认为好价值观的最后一点是“可逆性”（Reversibility）。有些价值观其实是不可用的。举个例子：“我们构建优秀的软件。” 好吧，但你为什么要构建糟糕的软件呢？这没意义。或者“我们解决重要的客户问题”。很好，但哪家公司会认为自己在解决不重要的客户问题呢？

---

### [00:59:22] Will Larson

**English:**
What company doesn't think they're solving customer problems that matter? And so there's certain values that just you can't apply. And so I think of these as identity values. These are really just you describing who you want to be or we care about our customers. Great. But who would say they don't care about that? There's certain values that I think of as just identity values and they're not wrong to have identity values, they just aren't very useful.

**中文翻译:**
哪家公司不觉得自己是在解决重要的客户问题？所以有些价值观是无法应用的。我把这些称为“身份价值观”（Identity Values）。这些其实只是在描述你想成为谁，比如“我们关心客户”。太棒了，但谁会说他们不关心呢？我认为这些只是身份价值观，拥有它们没有错，但它们并不是很有用。

---

### [00:59:51] Will Larson

**English:**
You can't actually use them for anything. And so I just always push people not to spend too much time on these because they feel good when you're an executive team debating what are these identity values? It's like we're kind to other people or sure that sounds good. We're a family. Sure, that sounds good. That one I guess is a little bit reversible. There's Netflix, which is like, "We're a team like a sports team. We're not a family." And so a little bit reversible, but not perfectly.

**中文翻译:**
你无法用它们来做任何决策。所以我总是敦促人们不要在这些上面花太多时间，虽然当高管团队辩论这些身份价值观时感觉很好。比如“我们待人友善”，听起来不错。“我们是一个大家庭”，听起来也不错。这一条我觉得稍微有点可逆性，比如 Netflix 会说：“我们是一个像运动队一样的团队，不是家庭。” 所以它有一点可逆性，但不完美。

---

### [01:00:20] Will Larson

**English:**
But yeah, these are the three that I found really useful for any value. Is it honest? Is it applicable? And can you reverse it? And if not, it's probably actually not helping the team make decisions.

**中文翻译:**
是的，这就是我发现对任何价值观都非常有用的三点：它诚实吗？它适用吗？它是可逆的吗？如果不是，它可能并不能真正帮助团队做决策。

---

### [01:00:30] Lenny

**English:**
These are great. It reminds me a lot of... I was there during Airbnb's period of coming up with values. Something that I would maybe add and maybe fits into one of these buckets is it needs to be clear who doesn't? There needs to be a group that doesn't quite fit because if everyone fits, you're not doing anything useful. What's the point? Which feels weird to say, why would not everyone fit in our big group of awesome company? But it's clear who is not a good fit, who doesn't belong basically. It's kind of like a cult a little bit like, "Who's not in our cult? Who doesn't belong?"

**中文翻译:**
这些建议太棒了。这让我想起……我经历了 Airbnb 制定价值观的时期。我想补充一点，也许它属于其中一个范畴：必须明确谁“不”适合。必须有一群人不完全契合，因为如果每个人都契合，那这个价值观就没起作用。有什么意义呢？虽然说“为什么不是每个人都适合我们这个伟大的公司”听起来很奇怪，但必须明确谁不是好的选择，谁基本上不属于这里。这有点像邪教，“谁不在我们的圈子里？谁不属于这里？”

---

### [01:00:59] Will Larson

**English:**
But I agree. If it doesn't apply to anyone, then why bother saying it? It doesn't mean anything. And you could say it's actually the hiring filter where there are people who you've explicitly chosen not to hire because this wouldn't apply to them. Then I think it's useful because it helps you actually figure out who to bring in. But if it doesn't apply to anyone you're hiring or anyone that you have in the company, then it's just isn't worth having because you already have too many values. You are already trying to get rid of values because you have 17 and you need to get down to four where people can remember them. So if it doesn't apply to anyone, why bother having it at all?

**中文翻译:**
我同意。如果它不排除任何人，那为什么要费力去说它呢？它没有任何意义。你可以说它实际上是一个招聘过滤器，有些是你明确选择不雇佣的人，因为这个价值观不适用于他们。这样它就有用了，因为它能帮你弄清楚该招谁。但如果它对你雇佣的任何人或公司里的任何人都没区别，那就不值得拥有，因为你的价值观已经太多了。你可能正试图把 17 条价值观缩减到 4 条，好让大家能记住。所以如果它不排除任何人，为什么要留着它？

---

### [01:01:32] Lenny

**English:**
Yeah. Integrity is a common one. Integrity. Everyone has that. Nobody wouldn't want integrity. What is unique?

**中文翻译:**
是的，“诚信”（Integrity）就是一个常见的例子。每个人都有诚信，没人会不想要诚信。那有什么独特的呢？

---

### [01:01:38] Will Larson

**English:**
We're a non-integrity company. We're the company that thinks integrity is bad. That's not a real thing.

**中文翻译:**
“我们是一家不讲诚信的公司，我们认为诚信很糟糕。” 现实中根本不存在这种公司。

---

### [01:01:45] Lenny

**English:**
The other one I'll add to is honest. So Airbnb, we had six values initially. One of them was simplify and a year or two later everyone just realized we're not actually good at this. We want to simplify, but we're not great at this skill and values should describe who you are not who you want to be and aspire to be. So they cut two values including that one, and they're just like, "Let's just do these four because this is actually who we are. Let's be honest with ourselves."

**中文翻译:**
我还要补充的一点是“诚实”。在 Airbnb，我们最初有六条价值观，其中一条是“简化”（Simplify）。一两年后，大家意识到我们其实并不擅长这个。我们想简化，但我们并不精通这项技能。价值观应该描述“你是谁”，而不是“你想成为谁”或“你渴望成为谁”。所以他们删掉了包括这一条在内的两条价值观，然后说：“我们就保留这四条吧，因为这才是真实的我们。让我们对自己诚实一点。”

---

### [01:02:11] Lenny

**English:**
Okay, final question. I wanted to visit Failure Corner, something that I've added recently to this podcast where people share a story of failure. And you have this amazing post about your experience with Digg and the rewrite that you all went through. I think it was the version four of Digg. Can you just tell that story and what happened? How much of a mess it ended up being?

**中文翻译:**
好的，最后一个问题。我想进入“失败角落”（Failure Corner），这是我最近在播客中增加的一个环节，让大家分享失败的故事。你有一篇关于你在 Digg 经历的精彩文章，讲的是你们经历的那次重写。我想那是 Digg 的第四版。你能讲讲那个故事吗？发生了什么？最后搞得有多乱？

---

### [01:02:33] Will Larson

**English:**
Yeah, Dig V4 is... I mean, it's still something I have a lot of fond memories for. There's one picture that I've kept and there's a picture of a lot of the engineers around this table in the middle of this giant office and they're serving sushi. We had waiters, caterers come in that day. They're serving sushi. They have plates with champagne flutes on it. There was a full bar and we're all around this table because the site is not up.

**中文翻译:**
是的，Digg V4……我对它仍有很多美好的回忆。我保留了一张照片，照片里很多工程师围坐在巨大办公室中间的一张桌子旁，服务员正在上寿司。那天我们请了餐饮服务人员，他们端着寿司，盘子里放着香槟杯。还有一个完整的吧台。我们围坐在桌旁，是因为网站挂了。

---

### [01:03:03] Will Larson

**English:**
And so Digg before essentially what Kevin Rose or the board or some combination there realized is that Digg was losing to the social networks and that this idea of aggregated news was going to be outcompeted by the Twitters, the Facebooks, et cetera, if we didn't find a way to move to have a social component for it. It even outcompeted by Reddit longterm was kind of the fear. Although at the time that that was far from obvious. And so we needed to move to support social functionality and the previous version we simply couldn't get it to work.

**中文翻译:**
在 Digg 之前，Kevin Rose 或董事会意识到 Digg 正在输给社交网络。如果我们不设法增加社交元素，这种“聚合新闻”的模式将被 Twitter、Facebook 等击败。当时的担忧是长期来看甚至会被 Reddit 击败，尽管在那时这还远不明显。所以我们需要转向支持社交功能，而之前的版本我们根本无法让它跑通。

---

### [01:03:39] Will Larson

**English:**
So the decision that was done, I think two and a half years before I joined, and the shift about six months after I joined was they needed to do a complete rewrite in order to get there. This is a decision that never works out for anyone. So I think as someone with more experience, I could have predicted this wasn't going to work out. But I was earlier in my career. My PM counterpart at Yahoo, Das Kofinovsky. He went to Yahoo and he's like, "Come to Digg."

**中文翻译:**
所以在我加入前两年半就做出了决定，并在我加入约六个月后开始转型：他们需要进行彻底的重写才能实现目标。这是一个对谁都没好结果的决定。作为一个更有经验的人，我现在本可以预见到这行不通。但当时我正处于职业生涯早期。我在雅虎的 PM 搭档 Das Kofinovsky 去了 Digg，他说：“来 Digg 吧。”

---

### [01:04:10] Will Larson

**English:**
Worst case you'll make a couple hundred thousand in a year. Worst case. Probably really great outcome. Anyway, that's not what happened. The worst case was a little bit optimistic. So we go and the CEO got fired two days before I joined. So the current CEO left and then Kevin Rose came back for about six months, something like that. And we're just on the death march trying to get this thing out.

**中文翻译:**
“最坏的情况是你一年能赚几十万美元。最坏的情况。大概率会有很好的结果。” 结果并非如此。那个“最坏情况”还是太乐观了。我加入前两天，CEO 被解雇了。当时的 CEO 离开了，然后 Kevin Rose 回来接手了大约六个月。我们就在这种“死亡行军”中努力把东西做出来。

---

### [01:04:37] Will Larson

**English:**
So we pushed really hard. This was before the cloud for the most part. So we wiped pretty much all of our existing servers to re-image them to the new software. We try to bring the site up and just keeps crashing. And so it basically takes us a month to get it fully functional again. And so that day sitting around that table with champagne and sushi, that's just like day one. And by 30 days in, most people aren't even trying to get the site back up anymore.

**中文翻译:**
我们拼命推进。那时大部分还没用上云。所以我们清空了几乎所有现有的服务器，重新镜像安装新软件。我们尝试启动网站，但它一直崩溃。我们基本上花了一个月的时间才让它恢复完全功能。那天围坐在桌旁喝香槟吃寿司，只是第一天。到了第 30 天，大多数人甚至都不再尝试让网站恢复了。

---

### [01:05:08] Will Larson

**English:**
There's maybe five of us who are still trying. And we did. I think that was a really powerful moment for me. I think in the first two days myself and Rich Schumacher, one of the other engineers, we had to write a caching system from scratch, which got us half the way up. Really a terrible way to do software on a side note. I'm not recommending this to anyone. This was a series of anti-patterns kludged into a launch. But we got it partially up, but we had to restart it every 12 months.

**中文翻译:**
大概只有我们五个人还在坚持。我们做到了。我认为那对我来说是一个非常有力量的时刻。在头两天，我和另一位工程师 Rich Schumacher 不得不从头写一个缓存系统，这让我们恢复了一半。顺便说一句，这真的是一种糟糕的软件开发方式，我不向任何人推荐。这是一系列凑合出来的反模式（Anti-patterns）。虽然恢复了一部分，但我们必须每 12 小时重启一次。

---

### [01:05:41] Will Larson

**English:**
Every 12 hours, every server had to be restarted even with the caching mechanism. And then about three weeks after that, I finally figured out what the core bug was, that was bringing us down every 12 hours. It was this incredibly simple issue that had just been hard to debug, basically related to the way that Python initiates variables used as default parameters. It's something super silly and we just had someone who hadn't written Python before who was working on the API code, so they didn't realize it's gotcha.

**中文翻译:**
即使有了缓存机制，每 12 小时每台服务器都得重启。大约三周后，我终于找到了导致我们每 12 小时崩溃一次的核心 Bug。这是一个极其简单但很难调试的问题，基本上与 Python 初始化用作默认参数的变量的方式有关。这非常愚蠢，我们当时有个没写过 Python 的人在写 API 代码，所以他们没意识到这个陷阱。

---

### [01:06:15] Will Larson

**English:**
Then no one else caught it when it was reviewed and it just took a long time to debug. It was such a non-obvious. It didn't break anything, it was just doing a lot of extra load on the servers. We finally figured it out and it was just really remarkable experience pulling through. And you know what? The company still went to zero. So we had this at launch. I think we did this heroic, heroic stretch to get it working.

**中文翻译:**
代码审查时也没人发现，调试花了很长时间。它非常不明显，没有破坏任何功能，只是给服务器增加了巨大的额外负载。我们最终解决了它，那真是一次非凡的挺过来的经历。但你知道吗？公司最终还是归零了。我们在发布时做了这种英雄式的冲刺来让它运转。

---

### [01:06:43] Will Larson

**English:**
A couple weeks after that, a new CEO came in, did a round of layoffs. This is back I think 2012. The team nine months after I started was down to 30 people from about a hundred and it went downhill from there, from a business perspective. But we launched a lot of functionality, has really learned just a tremendous amount. And it kind of shaped what I think about in terms of early in your career, getting learning and going into a company that is maybe having a rough time.

**中文翻译:**
几周后，新 CEO 上任，进行了一轮裁员。那是 2012 年。在我加入九个月后，团队从大约 100 人减少到 30 人，从业务角度看，公司从此走下坡路。但我们发布了很多功能，也学到了巨大的知识。这塑造了我对职业生涯早期的看法：去学习，甚至去一家可能正处于困境的公司。

---

### [01:07:15] Will Larson

**English:**
I became a manager two and a half years into my career. Basically running the entire engineering team there because everyone who had a lick of sense quit or got laid off, and it was just complete idiot me trying to be the manager for the engineering org, wasn't qualified and no one would've given me that job, but I was the only one dumb enough to take it at that point. I learned so much and I really the kernel that turned into my entire career where it was that opportunity, even though at the time it was pretty grim.

**中文翻译:**
我在职业生涯开始两年半后就成了经理。基本上管理着整个工程团队，因为每个稍微有点头脑的人要么辞职了，要么被裁了。只有我这个彻头彻尾的傻瓜试图管理整个工程组织。我并不合格，没人会给我那份工作，但我是当时唯一一个傻到愿意接手的人。我学到了太多，那次机会成了我整个职业生涯的核心，尽管当时情况非常惨淡。

---

### [01:07:49] Lenny

**English:**
That's an amazing story. I feel like a lot of these experiences were in the moment, it's just like, "What is going on? This is so bad and hard," end up being the most interesting and looking back end up being the most biggest teaching experiences. The ones you like bond over with people you work with like Apple. It always comes to mind where it's just like Steve Jobs's joke, people like crazy and then they look back and that was the best moment in my career.

**中文翻译:**
这是一个了不起的故事。我觉得很多这类经历在当时都是：“到底发生了什么？这太糟糕、太难了。” 但回过头看，它们成了最有趣、最有教育意义的经历。你会和同事因此建立深厚的纽带。就像苹果公司，人们总会想到史蒂夫·乔布斯的笑话，他把人逼疯，但后来人们回首往事会说：“那是我的职业生涯中最美好的时刻。”

---

### [01:08:12] Will Larson

**English:**
You would never voluntarily take on a lot of these really challenging things, but sometimes when they show up, you're with a group of people you really respect, you love working with and you want to overcome together. And that's really powerful experience. Even if Uber China was similar where if someone had been like, "Hey, do you want to go work on this Uber China migration?" I would've been like, "Absolutely not." But no one asked. They're just like, "Get this done," and so we did. I think these things are pretty remarkable.

**中文翻译:**
你永远不会自愿承担很多这些极具挑战性的事情，但有时当它们出现时，你正和一群你真正尊敬、热爱共事的人在一起，你们想共同克服困难。那是极其强大的体验。Uber 中国的经历也类似，如果有人问：“嘿，你想去负责 Uber 中国的迁移吗？” 我肯定会说：“绝对不想。” 但没人问，他们只是说：“把它搞定。” 于是我们就做了。我认为这些事情非常了不起。

---

### [01:08:39] Lenny

**English:**
And just to be clear, so Digg was down for a month basically during this period? Is that...

**中文翻译:**
澄清一下，所以 Digg 在那段时间基本上停机了一个月？是吗……

---

### [01:08:43] Will Larson

**English:**
So it basically didn't work properly for much of the month. It was like read only was back up in about three days, but the vast majority of the actual user functionality just wasn't working properly for pretty much an entire month and it was not that good. I mean not great, but that wasn't the biggest problem Digg had at that point. But it was one of the biggest problems that had at that point and it wasn't a real sign of things likely to go well for us. But like I said, you learn from those and I'm really proud that we and the team got it working, got it running even if ultimately we still went to zero and ran out of money and kind of sold for parts.

**中文翻译:**
基本上那个月的大部分时间它都无法正常工作。大约三天后恢复了只读模式，但绝大多数实际的用户功能在整整一个月里都无法正常运行，情况非常糟糕。我的意思是，这很不妙，但这还不是 Digg 当时最大的问题。不过它是大问题之一，预示着情况不太可能好转。但正如我所说，你从中学习，我为我们团队让它跑起来感到自豪，即使最终我们还是归零、耗尽资金并被拆分出售了。

---

### [01:09:32] Lenny

**English:**
Do you think Digg could have made it? There was a world where Digg would've been a hugely successful business or do you think it was just way too late and it's the wrong product?

**中文翻译:**
你认为 Digg 本可以成功吗？是否存在一种可能，Digg 会成为一家巨大的成功企业？还是你认为当时已经太晚了，产品方向也错了？

---

### [01:09:39] Will Larson

**English:**
The thing that really killed Digg is the change. It wasn't SEO driven. So monetization was from ads. Well, many companies including Digg claimed that it was the first in kind of stream, in feed like advertising company where Twitter has ads within the tweets or Facebook does. But Digg did that before Facebook or Twitter really innovated the ad format. But the vast majority of monetization was on these... We call them permalink pages, which is page 40. Then article we crawled and the vast majority of traffic for that was driven by Google search. And so there was an SEO change, which really is the thing that started creating the urgency for us to launch this migration.

**中文翻译:**
真正杀死 Digg 的是变化。它不是 SEO 驱动的。变现主要靠广告。包括 Digg 在内的许多公司都声称自己是第一家做信息流（In-feed）广告的公司，就像 Twitter 或 Facebook 在推文或动态中插广告一样。Digg 在 Facebook 或 Twitter 真正创新广告格式之前就这么做了。但绝大多数变现来自于我们称之为“固定链接页面”的地方。绝大多数流量是由谷歌搜索驱动的。后来 SEO 规则变了，这正是促使我们紧急启动迁移的原因。

---

### [01:10:20] Will Larson

**English:**
SEO changed, traffic started going down, monetization was driven by that. And so we were already on fire by the time we tried to launch this. But I do think that I still want something like what Digg was trying to become today. Social news based on like what my friends are actually reading and liking merged with a global index of similar users who are interested in similar topics. It's still a product that I think Google Reader has some kind of similar components to it.

**中文翻译:**
SEO 变了，流量开始下降，变现也随之受挫。所以当我们尝试启动迁移时，公司已经火烧眉毛了。但我确实认为，我今天仍然想要一个像 Digg 当时试图成为的那种产品：基于我朋友真实阅读和点赞的社交新闻，并结合对相似话题感兴趣的全球相似用户的索引。我认为 Google Reader 也有类似的元素。

---

### [01:10:49] Will Larson

**English:**
These are both interesting products solving interesting problems that have not for whatever reason been successful as businesses. And I do think there's a gap there still, but there's a lot of people trying unsuccessfully to fill it and there must be a reason why people struggle to fill it despite so many people trying.

**中文翻译:**
这些都是有趣的产品，解决的是有趣的问题，但由于某种原因在商业上并未成功。我确实认为那里仍然存在空白，但很多人尝试填补却都失败了。尽管有这么多人尝试，却依然难以填补，这背后一定有原因。

---

### [01:11:06] Lenny

**English:**
Awesome. Will, is there anything else you want to share or leave people with before we get to our very fast lightning round because I know you have to run in about five minutes?

**中文翻译:**
太棒了。Will，在进入快速闪电轮之前，你还有什么想分享或留给大家的吗？我知道你大约五分钟后得走。

---

### [01:11:16] Will Larson

**English:**
I think we've covered a lot of it. New book coming out. New book coming out in February, Engineering Executive's Primer, O'Reilly. But that's probably it.

**中文翻译:**
我想我们已经涵盖了很多内容。新书将于二月出版，《工程主管入门》（Engineering Executive's Primer），由 O'Reilly 出版。大概就是这些。

---

### [01:11:25] Lenny

**English:**
Where do people find that? I know it's on O'Reilly. You can look at a preview of it even today, right?

**中文翻译:**
大家在哪里可以找到？我知道在 O'Reilly 上。今天甚至就可以看到预览版，对吧？

---

### [01:11:29] Will Larson

**English:**
Yeah. O'Reilly, you can see the early copy. You can order it on Amazon as well, but it won't be shipping until February.

**中文翻译:**
是的。在 O'Reilly 上可以看到早期副本。你也可以在亚马逊上预订，但要到二月才发货。

---

### [01:11:37] Lenny

**English:**
Okay. And then just to be clear, who's this for? It's for engineering executives by the sound of it.

**中文翻译:**
好的。澄清一下，这本书是写给谁的？听起来是给工程主管的。

---

### [01:11:42] Will Larson

**English:**
It's for engineering executives, but more so like anyone who wants to be one, anyone who's trying to figure out how to work with an engineering executive. So I think if you are struggling to understand why your CTO keeps doing boneheaded things, or if you want to side manage them, you're the head of product and you can't get the CTO to stop complaining about the engineers need more interesting projects to work on, this might be useful for you too.

**中文翻译:**
它是写给工程主管的，但更多是写给任何想成为主管的人，以及任何试图弄清楚如何与工程主管合作的人。所以，如果你正苦于理解为什么你的 CTO 总做蠢事，或者你想向上管理他们，或者你是产品负责人，却无法让 CTO 停止抱怨工程师需要更有趣的项目，那么这本书对你也会很有用。

---

### [01:12:04] Lenny

**English:**
Amazing. Okay. Ready for the lightning round?

**中文翻译:**
太棒了。准备好进入闪电轮了吗？

---

### [01:12:07] Will Larson

**English:**
Let's do it.

**中文翻译:**
开始吧。

---

### [01:12:08] Lenny

**English:**
What are two or three books you've recommended most to other people?

**中文翻译:**
你向别人推荐最多的两三本书是什么？

---

### [01:12:11] Will Larson

**English:**
So I talked about Thinking in Systems and Primer. I talked about Good Strategy, Bad Strategy, but I'll give you a third one, which is Don't Think of an Elephant by George Lakoff. It's a really interesting book about framing things in conversations that has really changed how I communicate.

**中文翻译:**
我提到了《系统之美》和《入门》。我提到了《好战略，坏战略》，但我再给你推荐第三本：George Lakoff 的《别想那只大象》（Don't Think of an Elephant）。这是一本关于对话中“框架效应”的非常有趣的书，它真正改变了我的沟通方式。

---

### [01:12:24] Lenny

**English:**
Amazing. Favorite recent movie or TV show you've really enjoyed?

**中文翻译:**
太棒了。最近有什么非常喜欢的电影或电视节目吗？

---

### [01:12:28] Will Larson

**English:**
I don't watch much TV or many movies anymore, but something I do still watch is Top Chef with my wife. She's a Top Chef, super fan. And there's something just very relaxing from these formulaic structured shows where you kind of know what's going to happen. There's no real consequences that matter too much and just escaping from real life to these formulas can be pretty peaceful.

**中文翻译:**
我不怎么看电视或电影了，但我仍然会和妻子一起看《顶级大厨》（Top Chef）。她是《顶级大厨》的超级粉丝。这种公式化的结构性节目非常让人放松，你大致知道会发生什么，没有什么太严重的后果，从现实生活逃离到这些公式中感觉很平静。

---

### [01:12:50] Lenny

**English:**
No one has ever mentioned Top Chef before, so that's fun. Do you have a favorite interview question that you like to ask candidates that you're interviewing for a job?

**中文翻译:**
以前没人提过《顶级大厨》，真有意思。在面试候选人时，你最喜欢问的问题是什么？

---

### [01:12:58] Will Larson

**English:**
A lot of my interviews now are trying to help people decide if they actually want to join a company. And so my favorite question I ask now is like, "Hey, we've really loved you. You're going to come through. I think you're going to get a lot of offers from other companies too. I bet you'll have three or four really compelling offers because you're a fantastic candidate. How are you going to figure out really specifically which of those options are right for you?"

**中文翻译:**
我现在的大部分面试都是在帮助人们决定是否真的想加入公司。所以我现在最喜欢问的问题是：“嘿，我们非常欣赏你。我想你也会收到很多其他公司的 Offer。我敢打赌你会有三四个非常有吸引力的选择，因为你是个优秀的候选人。你打算如何具体判断哪一个选择最适合你？”

---

### [01:13:22] Will Larson

**English:**
I think it forces people to tell you what they want and then you tell them why you have that more than anyone else, and then you can actually pitch them on what matters versus pitching on things that don't.

**中文翻译:**
我认为这会迫使人们告诉你他们想要什么，然后你可以告诉他们为什么你比别人更能提供这些，这样你就可以针对他们真正看重的东西进行“推销”，而不是在无关紧要的事情上浪费口舌。

---

### [01:13:31] Lenny

**English:**
Love that. Do you have a favorite life motto that you often come back to share with friends, find useful either in work or in life?

**中文翻译:**
太棒了。你有什么喜欢的座右铭吗？经常分享给朋友，或者在工作生活中觉得很有用的？

---

### [01:13:40] Will Larson

**English:**
No mottos, but I can think of two things I thought about a lot. At Uber is something I talk to people a lot because it was a challenging time for much of it. It was there's no way around, just through.And that was like, "Hey, we're not going to dodge around this. We're going to gut through it and we're going to get to the other side and then we're going to be there." What I think about a lot more now is, will anyone remember what we decided in six months? Because I think people stress out about a lot of decisions, but I increasingly believe most decisions people stress out about just aren't that important.

**中文翻译:**
没有座右铭，但我能想到两件我经常思考的事。在 Uber 时，我经常和人聊起一句话，因为那段时间大部分都很艰难：那就是“没有捷径，唯有穿行”（There's no way around, just through）。意思是：“嘿，我们不打算躲避，我们要硬扛过去，到达彼岸。” 而我现在想得更多的是：“六个月后还有人记得我们现在的决定吗？” 因为我觉得人们对很多决定感到压力巨大，但我越来越相信，大多数让人感到压力的决定其实并没那么重要。

---

### [01:14:11] Lenny

**English:**
So I'm like, "Will anyone care in six months what we did here?" And the answer is no. Just do something reasonable and let's move on to the next more important thing.

**中文翻译:**
所以我会想：“六个月后还有人在乎我们在这里做了什么吗？” 答案通常是否定的。那就做一个合理的决定，然后继续处理下一件更重要的事。

---

### [01:14:17] Lenny

**English:**
I love that. You've done a lot of writing. Is there a piece that you've written that you feel like is underappreciated that no one really totally got and hasn't spread and you're like, "Ah, I'm so proud of that one"?

**中文翻译:**
我喜欢这个。你写了很多东西。有没有哪篇你写的文章，你觉得被低估了，没人真正理解或者没传开，但你却觉得“啊，我为那一篇感到自豪”？

---

### [01:14:30] Will Larson

**English:**
Maybe the piece I'm most proud of from last year was Hard To Work With. So Hard To Work With is basically I see a lot of people who are incredibly talented, but they try to hold their peers to a high standard and then they're viewed as combative or difficult to work with. And this one comes from a core struggle of my early career where I kept trying. I thought I was holding people accountable and people were just like, "You suck to work with."

**中文翻译:**
去年我最自豪的一篇可能是《难以共事》（Hard To Work With）。这篇文章基本上是说，我看到很多极具天赋的人，他们试图对同僚保持高标准，结果却被视为好斗或难以共事。这源于我职业生涯早期的一个核心挣扎：我一直尝试，我以为我是在让人承担责任，但大家却觉得“跟你共事太差劲了”。

---

### [01:14:58] Will Larson

**English:**
And I was like, "But I'm just trying to have a high standard. Isn't that what we want?" And talk about honest values. Every company is like, "We have high standards," and you're like, "Well, let's do it." And then they're like, "We don't have high standards here. You suck." So that one is one that really is so transformational to me, and I think it really hits some people hard because I think a lot of people really go their entire career without figuring this one out.

**中文翻译:**
我会想：“但我只是想保持高标准，这不正是我们想要的吗？” 谈到诚实的价值观，每家公司都说“我们有高标准”，然后你说“那我们就执行吧”，结果他们却说“我们这儿没那么高标准，你真烦”。所以那篇文章对我来说具有转折意义，我认为它也触动了一些人，因为很多人可能整个职业生涯都没弄明白这一点。

---

### [01:15:20] Will Larson

**English:**
And they're some of the most talented, hardest working people you'll ever work with and can't quite land this one idea that's holding them back. And they care so much and they are often despised because they care so much. I think this is one that I hope more people will read over times and there's a really important lesson for me in there.

**中文翻译:**
他们是你合作过的最有才华、最努力的人，却无法理解这个阻碍他们的念头。他们太在意了，却往往因为太在意而被鄙视。我希望随着时间的推移，更多的人能读到这篇文章，那对我来说是一个非常重要的教训。

---

### [01:15:42] Lenny

**English:**
Well, we will link to it in the show notes and help more people discover it. Two last questions. Where can folks find you online if they want to reach out and maybe follow up on questions? And how can listeners be useful to you?

**中文翻译:**
好的，我们会把链接放在节目笔记里，帮助更多人发现它。最后两个问题：如果大家想联系你或跟进问题，可以在哪里找到你？听众能为你做些什么？

---

### [01:15:51] Will Larson

**English:**
So find me online, lethain.com, lethain.com. All my writing, my books, everything links linked there. And the biggest thing that I'm thinking about right now is just strategy. So really curious for folks who are thinking about strategy, who think they've done product, business, or engineering strategy well. Would love to hear from folks what they're thinking about, what's actually worked and maybe what are the lies that have not turned out to work that they thought might work earlier in their journey.

**中文翻译:**
可以在网上找到我，lethain.com。我所有的文章、书籍和链接都在那里。我现在思考最多的就是“策略”。所以我非常好奇那些正在思考策略、或者认为自己在产品、业务或工程策略方面做得很好的人。我很想听听大家的想法，什么真正有效，以及在他们的历程中，有哪些他们早期认为有效但最后证明是谎言的东西。

---

### [01:16:19] Lenny

**English:**
Amazing. Will, thank you so much for being here.

**中文翻译:**
太棒了。Will，非常感谢你能来。

---

### [01:16:23] Will Larson

**English:**
Thank you so much. This is really fantastic.

**中文翻译:**
非常感谢。这真的很棒。

---

### [01:16:25] Lenny

**English:**
Same for me. Bye, everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
我也是。再见，各位。非常感谢收听。如果你觉得这期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用上订阅。另外，请考虑给我们评分或留下评论，这能真正帮助其他听众发现本播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目再见。