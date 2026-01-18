# Jackson Shuttleworth - 双语对照

This is the complete bilingual (English-Chinese) transcript for Lenny’s Podcast featuring Jackson Shuttleworth from Duolingo.

---

### [00:00:00] Jackson Shuttleworth

**English:**
... Duolingo is a $14 billion company, it's hitting all-time highs too, it just keeps going up, but I think it doubled in value in the past six months. Streaks is the most impactful feature. We have, right now, over 9 million users with a year plus streak. If you look at the numbers, I think it's been our biggest growth lever. What Duolingo really focuses on is, how do we help users build habits around language learning? Getting user come back the next day is the biggest problem to solve.

**中文翻译:**
……多邻国（Duolingo）现在是一家市值 140 亿美元的公司，股价也一直在创历史新高，过去六个月里价值翻了一倍。而“连胜”（Streaks）是我们影响力最大的功能。目前，我们有超过 900 万名用户的连胜记录超过了一年。从数据上看，我认为它是我们最大的增长杠杆。多邻国真正关注的是：我们如何帮助用户养成语言学习的习惯？让用户第二天愿意再回来，是我们要解决的最核心问题。

---

### [00:00:25] Lenny Rachitsky

**English:**
Let's get into the motherload of learnings from the journey of streaks, talk about the key lessons, insights, and also wrong turns along the way.

**中文翻译:**
让我们深入探讨一下“连胜”功能演进过程中的那些“干货”经验，聊聊关键的教训、洞察，以及一路上走过的弯路。

---

### [00:00:30] Jackson Shuttleworth

**English:**
I'd say test everything, we've run in the last four years over 600 experiments on the streaks, so every other day. We've actually set up really good infrastructure for copy testing. We used to say continue, our standard CTA is continue, and we changed that to commit to my goal, and it was a massive win.

**中文翻译:**
我想说的是，测试一切。在过去的四年里，我们在“连胜”功能上运行了 600 多个实验，相当于每隔一天就有一个。我们还为文案测试（Copy Testing）搭建了非常完善的基础设施。我们以前用“继续”，这是我们标准的 CTA（行动召唤按钮），后来我们把它改成了“承诺完成我的目标”，结果这是一个巨大的成功。

---

### [00:00:48] Lenny Rachitsky

**English:**
There's so much human psychology that you all learn through all these experiments of just how to motivate people, what motivates, what demotivates.

**中文翻译:**
通过这些实验，你们学到了太多的行为心理学知识，关于如何激励人们，什么能产生动力，什么又会让人丧失动力。

---

### [00:00:55] Jackson Shuttleworth

**English:**
Say that you played a mobile game, or that you've done it for 3,000 days in a row, I don't know, maybe that hits a little bit different than you've learned Spanish for 3,000 days in a row.

**中文翻译:**
如果你说你玩了某个手游，或者连续玩了 3000 天，我不确定，但这给人的感觉可能和“你连续学习了 3000 天西班牙语”完全不同。

---

### [00:01:07] Lenny Rachitsky

**English:**
Today, my guest is Jackson Shuttleworth. Jackson is a group product manager at Duolingo, leading the retention team. This is a different kind of episode that I'm experimenting with, where we spent the entire conversation focused on the journey and lessons of a single feature, in this case, Duolingo streaks. Duolingo is a $14 billion business, just over the past six months, they doubled in value, they're hitting all time highs in usage and market cap, they're also one of the very few successful and also the single biggest consumer app business in the world. And as you'll hear from Jackson, the streaks feature is the single most impactful feature that most contributed to this growth and success. In other words, you could argue this one feature created billions of dollars of value, which to me means it is worth studying in depth.

**中文翻译:**
今天的嘉宾是 Jackson Shuttleworth。Jackson 是多邻国的团队产品经理（Group PM），负责留存团队。这是我正在尝试的一种新形式，我们将整场对话聚焦于单一功能的演进历程和经验教训，这次的主角是“多邻国连胜”。多邻国是一家市值 140 亿美元的企业，仅在过去六个月里，其价值就翻了一番，用户量和市值都处于历史最高点。他们也是世界上极少数成功的、且规模最大的消费级应用公司之一。正如你将从 Jackson 那里听到的，“连胜”功能是促成这种增长和成功的最具影响力的单一功能。换句话说，你可以认为这一个功能就创造了数十亿美元的价值，对我而言，这非常值得深入研究。

(00:01:59):
In our conversation, Jackson shares the history of the streaks feature, all of the biggest wins and wrong turns they've taken along the way, what he and his team have learned about what works and doesn't work with a streaks mechanic, and also how they set up their teams to operate in a way that allows them to run over 600 experiments on this product and continue to find big wins. I hope to do more episodes like this on features and products that you'd love to hear more about, so leave a comment either on YouTube or on Substack, and tell me which product or feature you'd love to see me cover. And if you enjoy this podcast, don't forget to subscribe and follow it in your favorite podcasting app or YouTube, it's the best way to avoid missing future episodes, and it helps the podcast tremendously. With that, I bring you Jackson Shuttleworth.

**中文翻译:**
在我们的对话中，Jackson 分享了“连胜”功能的历史，包括一路上取得的重大胜利和走过的弯路，他和他的团队学到了哪些关于“连胜机制”有效或无效的经验，以及他们如何组建团队，使其能够在这个产品上运行超过 600 个实验并持续发现增长点。我希望以后能做更多这类关于大家感兴趣的功能或产品的专题，所以请在 YouTube 或 Substack 上留言，告诉我你希望我覆盖哪个产品或功能。如果你喜欢这个播客，别忘了在你的播客应用或 YouTube 上订阅和关注，这是避免错过未来节目的最好方式，也对本播客有巨大帮助。下面，让我们欢迎 Jackson Shuttleworth。

---

### [00:02:44] Lenny Rachitsky

**English:**
Jackson, thank you so much for being here and welcome to the podcast.

**中文翻译:**
Jackson，非常感谢你能来，欢迎来到本播客。

---

### [00:02:48] Jackson Shuttleworth

**English:**
Yeah, thank you. Long time listener, first time caller.

**中文翻译:**
谢谢。我是老听众了，这还是第一次“连线”。

---

### [00:02:52] Lenny Rachitsky

**English:**
I appreciate it. So, this is going to be a really interesting conversation, I've never done an episode like this before, where we basically spent an hour, an hour and a half going into one feature of one product, but this is a very special feature, it's a very special product. Have you ever spent an hour, an hour and a half just talking about this one feature with anyone?

**中文翻译:**
非常感谢。这将是一场非常有趣的对话，我以前从未做过这样的节目——花一个到一个半小时专门研究一个产品的某一个功能。但这是一个非常特殊的功能，也是一个非常特殊的产品。你以前和别人花过这么长时间只聊这一个功能吗？

---

### [00:03:13] Jackson Shuttleworth

**English:**
Well, internally, so when we onboard new folks to the team, we'll do, I actually just did this with somebody that joined the team recently, where we spent, yeah, I was like, hey, let's spend an hour just talking about the streak. We got through an hour and I got through about 30% of what I wanted to share, there's just so much, we'll talk about this, but there's so much that we've learned over the years, but never anything externally like this. I think we've shared bits and pieces of learnings, but this will be the motherload of learnings hopefully-

**中文翻译:**
在公司内部是有的。当我们有新成员加入团队时，我们会进行入职培训。我最近刚和一位新同事聊过，我说：“嘿，咱们花一个小时专门聊聊‘连胜’吧。”结果一个小时过去了，我才讲了我想分享内容的 30%。这里面有太多的东西了，我们待会会细聊。这些年我们积累了大量的经验，但在外部从未像这样系统地分享过。我想我们以前分享过一些零散的经验，但希望这次能成为最全的“干货集锦”——

---

### [00:03:41] Lenny Rachitsky

**English:**
Here we go.

**中文翻译:**
那我们开始吧。

---

### [00:03:41] Jackson Shuttleworth

**English:**
... of how Duolingo built the streak.

**中文翻译:**
……关于多邻国是如何打造“连胜”功能的。

---

### [00:03:42] Lenny Rachitsky (Ad Segment)

**English:**
This episode is brought to you by Pendo, the only all-in-one product experience platform for any type of application. Tired of bouncing around multiple tools to uncover what's really happening inside your product? With all the tools you need in one simple-to-use platform, Pendo makes it easy to answer critical questions about how users are engaging with your product, and then turn those insights into action. Also, you can get your users to do what you actually want them to do. First, Pendo is built around product analytics, seeing what your users are actually doing in your apps so that you can optimize their experience. Next, Pendo lets you deploy in-app guides that lead users through the actions that matter most. Then, Pendo integrates user feedback so that you can capture and analyze what people actually want. And the new thing in Pendo, session replays, a very cool way to visualize user sessions.

**中文翻译:**
本期节目由 Pendo 赞助。Pendo 是唯一一款适用于任何类型应用程序的全方位产品体验平台。厌倦了在多个工具之间跳来跳去，只为弄清楚产品内部到底发生了什么吗？Pendo 将你所需的所有工具整合在一个简单易用的平台中，让你轻松回答关于用户如何与产品互动的关键问题，并将这些洞察转化为行动。此外，你还可以引导用户完成你希望他们执行的操作。首先，Pendo 以产品分析为核心，观察用户在应用中的实际行为，以便优化他们的体验。其次，Pendo 允许你部署应用内指南，引导用户完成最重要的操作。接着，Pendo 整合了用户反馈，以便你收集并分析用户的真实需求。Pendo 的新功能“会话重播”（session replays）则是一种非常酷的可视化用户会话的方式。

(00:04:37):
I'm not surprised at all that over 10,000 companies use it today. Visit pendo.io/Lenny to create your free Pendo account today and start building better experiences across every corner of your product. P.S. Do you want to take your product-led know-how a step further? Check out Pendo's lineup of free certification courses, led by talk product experts, and designed to help you grow in advance in your career. Learn more and experience the power of the Pendo platform today at pendo.io/Lenny.

**中文翻译:**
目前有超过 10,000 家公司在使用它，我一点也不意外。访问 pendo.io/Lenny 立即创建你的免费 Pendo 账户，开始在产品的每个角落构建更好的体验。另外，想进一步提升你的“产品驱动”（product-led）知识吗？查看 Pendo 的一系列免费认证课程，由顶级产品专家授课，旨在帮助你在职业生涯中成长和进步。立即访问 pendo.io/Lenny 了解更多并体验 Pendo 平台的强大功能。

---

### [00:05:05] Speaker 3

**English:**
Pendo.

**中文翻译:**
Pendo。

---

### [00:05:10] Lenny Rachitsky (Ad Segment)

**English:**
This episode is brought to you by Vanta. When it comes to ensuring your company has top-notch security practices, things get complicated fast. Now, you can assess risk, secure the trust of your customers, and automate compliance for SOC 2, ISO 27001, HIPAA, and more, with a single platform, Vanta. Vanta's market-leading trust management platform helps you continuously monitor compliance, alongside reporting and tracking risk. Plus, you can save hours by security questionnaires with Vanta AI. Join thousands of global companies that use Vanta to automate evidence collection, unify risk management, and streamline security reviews. Get $1,000 off Vanta when you go to vanta.com/Lenny. That's V-A-N-T-A.com/Lenny.

**中文翻译:**
本期节目由 Vanta 赞助。在确保公司拥有顶尖安全实践方面，事情很快就会变得复杂。现在，你可以通过 Vanta 这一个平台来评估风险、赢得客户信任，并自动完成 SOC 2、ISO 27001、HIPAA 等合规认证。Vanta 市场领先的信任管理平台可帮助你持续监控合规性，同时报告和跟踪风险。此外，你还可以通过 Vanta AI 自动填写安全问卷，节省数小时的时间。加入全球数千家使用 Vanta 自动收集证据、统一风险管理并简化安全审查的公司行列。访问 vanta.com/Lenny 即可享受 1000 美元的折扣。

(00:06:03):
Okay, so for people that don't know anything about what Duolingo streaks are, can you just first give a brief explanation of what is Duolingo streaks? What is this feature all about?

**中文翻译:**
好了，对于那些完全不了解“多邻国连胜”的人，你能先简要解释一下什么是“连胜”吗？这个功能到底是干什么的？

---

### [00:06:10] Jackson Shuttleworth

**English:**
Well, presumably people know, Duolingo is a language learning app, the Duolingo streak tracks, currently anyway, how many days in a row you've done a lesson. So, you come to Duolingo, you do a lesson, your first lesson you'll start a streak, and then every consecutive day that you come use the app, you'll extend your streak. And I should actually put an asterisk around how many days in a row because we also have built flexibility into the feature. So, we have these things called streak freezes, it's like insurance for your streaks. So, it's a pretty simple feature, in theory, but over time we've layered on challenges, and goal setting, and rewards, and social features... A lot of our notifications are tied to the streak. So, pretty simple feature to understand, but it's been a really rich feature for us to build on top of.

**中文翻译:**
大家应该都知道，多邻国是一款语言学习应用。目前，“连胜”功能追踪的是你连续多少天完成了课程。你来到多邻国，完成一课，第一课就会开启连胜记录，之后你每天连续使用应用，连胜天数就会增加。不过，关于“连续多少天”，我得打个星号说明一下，因为我们在功能中加入了一些灵活性。我们有种东西叫“连胜激冻”（streak freezes），就像是给你的连胜买的保险。理论上这是一个很简单的功能，但随着时间的推移，我们叠加了挑战、目标设定、奖励和社交功能……我们的很多通知也是与连胜挂钩的。所以，它理解起来很简单，但对我们来说，它是一个非常丰富的、可以不断在其基础上构建的功能。

---

### [00:06:58] Lenny Rachitsky

**English:**
Some people might be hearing this and be like, Duolingo streaks, what's the big deal? There's other people that are like, holy, I want to learn everything I can possibly learn about Duolingo streaks, so many companies are trying to copy what you've learned from this. Give people a sense of the impact that this one feature has had on Duolingo's success and growth.

**中文翻译:**
有些人听到这可能会觉得：“多邻国连胜，有什么大不了的？”但另一些人会觉得：“天哪，我想学习关于它的一切！”现在有很多公司都在试图模仿你们从中总结出的经验。请让大家感受一下，这一个功能对多邻国的成功和增长产生了多大的影响。

---

### [00:07:15] Jackson Shuttleworth

**English:**
And this is not just the subjective retention PM talking, I think this is our biggest feature, with the exception of the lessons. And I think it's actually [inaudible 00:07:24] start that. Streaks are a great engagement hack. I'm of the opinion that any team, any app out there can introduce a streak, and if you figure it out, it probably works to retain users, but at the core, you have to have an app that people want to use, and people really like using Duolingo. It's fun, it's delightful, you learn something. And so, it allows us to layer an engagement mechanic on top of that the streak is really powerful. So, it ships a disgusting amount of DAUs, again, it is one of our golden geese. And again, what's cool is that, you look at notifications, notifications for Duolingo is massive. Us sending better, whether it's copy or timing, so many of our notifications work because they reference the streak, because users care about the streak.

**中文翻译:**
这不仅仅是我作为一个负责留存的 PM 的主观臆断，我认为除了课程本身，这是我们最大的功能。连胜是一个极佳的参与度黑客（engagement hack）。我的观点是，任何团队、任何应用都可以引入连胜机制，只要你搞清楚了其中的门道，它很可能对留存用户有效。但核心前提是，你必须有一个人们愿意使用的应用，而人们真的很喜欢用多邻国。它很有趣、令人愉悦，而且你能学到东西。因此，这让我们可以叠加一个参与机制，而连胜机制非常强大。它带来了惊人的日活（DAU），它是我们的“金母鸡”之一。而且很酷的一点是，你看我们的通知系统，多邻国的通知规模非常庞大。无论是文案还是时机的优化，很多通知之所以奏效，是因为它们提到了连胜，因为用户在意连胜。

(00:08:10):
And so, not only is it itself, us iterating on the streak a huge driver of DAUs, but it's also something that enables other really high valuable features. I was looking up some stats before I came on, and it's pretty crazy. So, we have right now over 9 million users with a year plus streak.

**中文翻译:**
所以，不仅是我们对连胜功能的迭代本身是 DAU 的巨大驱动力，它还赋能了其他非常有价值的功能。我来之前查了一些数据，非常疯狂：我们现在有超过 900 万用户的连胜记录超过了一年。

---

### [00:08:30] Lenny Rachitsky

**English:**
Wow.

**中文翻译:**
哇。

---

### [00:08:30] Jackson Shuttleworth

**English:**
So, 9 million of our users have used Duolingo every year, almost every day, for well over a year. Which is pretty... I don't know, I like to imagine things in terms of like, okay, well, if you put all these people in a city, or in a place, where would it be? I'm like, ah, it's like a very large city, 9 million people.

**中文翻译:**
也就是说，有 900 万用户在一年多的时间里，几乎每天都在使用多邻国。这相当……我不知道该怎么形容，我喜欢想象一下，如果你把这些人放在一个城市或一个地方，那会是什么规模？我想，那就像一个特大城市，900 万人。

---

### [00:08:53] Lenny Rachitsky

**English:**
For a year, have a year long streak.

**中文翻译:**
持续一年，拥有一整年的连胜记录。

---

### [00:08:53] Jackson Shuttleworth

**English:**
For a year.

**中文翻译:**
整整一年。

---

### [00:08:56] Lenny Rachitsky

**English:**
That's incredible. I was just looking at the stock of Duolingo, so Duolingo is a $14 billion company at the time we're recording this. It's hitting all-time highs too, it just keeps going up. I think it doubled in value in the past six months, something like that. And what I'm hearing from you is streaks is, other than just the core learning feature, which is just the product of Duolingo, this is the most feature in terms of growth, and in that retention specifically.

**中文翻译:**
太不可思议了。我刚才看了下多邻国的股票，在我们录制时，它是一家市值 140 亿美元的公司。股价也在创历史新高，一直在涨。我想过去六个月里它的价值翻了一倍左右。我从你这里听到的是，除了核心的学习功能（即多邻国的产品本身）之外，连胜是增长方面最重要的功能，特别是针对留存。

---

### [00:09:24] Jackson Shuttleworth

**English:**
If you look at the numbers, I think pretty objectively has been our biggest growth lever for driving DAUs, and also say a lot of it's just related to how we think about growth at Duolingo. And a lot of what we try to do is organic growth. We think about growth just as much as bringing new users onto the platform is not losing them. If you're just bringing people onto the platform, then they churn, that's not going to be sustainable. And so, as much as we can do to keep our users coming back and actually retaining as users, it's going to give us a much easier base to continue growing DAUs off of.

**中文翻译:**
从数据上看，我认为客观地说，它是我们驱动 DAU 增长的最大杠杆。这也与我们在多邻国思考增长的方式有关。我们尝试做的很多事情都是有机增长。我们认为增长不仅是把新用户带到平台上，更重要的是不失去他们。如果你只是把人拉进来，然后他们就流失了，那是不可持续的。因此，我们越能让用户回来并真正留存下来，我们就越能拥有一个更稳固的基础来持续增长 DAU。

---

### [00:09:57] Lenny Rachitsky

**English:**
Perfect. Okay. Talk about how this feature originally came to be. What was the original version of it? What was the original insight that led to [inaudible 00:10:05]-

**中文翻译:**
太棒了。好，聊聊这个功能最初是怎么产生的。最初的版本是什么样的？导致这个功能的最初洞察是什么？

---

### [00:10:04] Jackson Shuttleworth

**English:**
Yeah, so the oldest streaks or as old as Duolingo itself. When we launched Duolingo, we launched with a streak... And I say we, I was just graduating undergrad when Duolingo launched. So, this is well before my time. But we launched with a streak feature. Initially how the feature worked was you'd come to Duolingo and you'd set a goal for yourself, and it was an XP based goal. So, Duolingo, a little bit of nomenclature, we have an experience point based system that drives a lot of our features in the app. And the way you'd set it is you'd say, based on what your language learning goal was, maybe you have a 10 experience point goal versus a 50 experience point goal. And so, extending your streak would be, hey, can you hit 50 experience points? If that's what you set your goal to be.

**中文翻译:**
是的，连胜功能几乎和多邻国本身一样老。多邻国发布时就带有连胜功能……我说“我们”，其实多邻国发布时我才刚本科毕业，所以这远在我加入之前。但我们发布时确实就有连胜功能。最初这个功能的运作方式是：你来到多邻国，为自己设定一个目标，这是一个基于 XP（经验值）的目标。多邻国有一个经验值系统，驱动着应用中的很多功能。设定方式是，根据你的语言学习目标，你可能会设定一个 10 XP 的目标或 50 XP 的目标。那么，延续连胜的条件就是：嘿，你能达到 50 XP 吗？如果你设定的目标是 50 的话。

(00:10:50):
And this worked well, I think this also speaks to how Duolingo initially grew. Luis launched it with a TEDTalk, we probably had a more tech-forward user base initially, and so this whole idea of an experience points based streak system made sense. But what that also meant is that you could have a user come and use the app, do multiple lessons a day, and maybe they just set too hard of a goal for themselves, and then lose their streak. Which, you don't need to be an expert in streaks to understand that's probably not good. The nice thing with how we initially set it up though is it really did connect with what your goal was. So, if you were serious, let's track how good you are at being a serious language learner.

**中文翻译:**
这在当时效果很好，这也反映了多邻国最初的增长方式。Luis（创始人）是通过一场 TED 演讲发布它的，我们最初的用户群可能更偏向科技前沿，所以这种基于经验值的连胜系统是合理的。但这也意味着，一个用户可能每天来用应用，上好几课，但也许他们给自己设定的目标太难了，结果没达到，就失去了连胜记录。你不需要成为连胜专家也能明白，这可能不太好。不过，最初设定的好处是，它确实与你的目标挂钩。如果你是认真的，我们就追踪你作为一个认真的语言学习者表现得有多好。

(00:11:28):
But I'd say one of the most impactful experiments we ran was about, this was actually as I was joining, or just after I joined we had run this experiment, was to move it from a XP based streak to just do one lesson a day, and you'd extend your streak. And the risk that you can sort of imagine is, well, then users kind of care less about it because it's not connected with their goal. And we saw none of that. This was a huge driver of DAUs, just making it easier to extend your streak, but I think really importantly it's still meaningful. The unit of use, and as you're thinking about building a streak, I think it's really important to think about what the unit of use of your app is. The unit of use for Duolingo is doing a lesson. And so, if what we care about is users coming back every day and doing a lesson, because it shows that they're actually engaging with the app, then it doesn't hurt us to make our streak focus on just do one unit versus multiple.

**中文翻译:**
但我认为我们运行过的最具影响力的实验之一，大约是在我加入前后，就是将它从“基于 XP 的连胜”改为“每天只需完成一课”即可延续连胜。你可以想象其中的风险：用户可能会变得不那么在意它，因为它不再与他们的具体目标挂钩。但我们完全没有看到这种情况。这成了 DAU 的巨大驱动力——仅仅是让延续连胜变得更容易。但非常重要的一点是，它仍然是有意义的。关于“使用单位”（unit of use），当你考虑构建连胜机制时，思考应用的“使用单位”是什么非常重要。多邻国的使用单位就是“完成一课”。所以，如果我们关心的是用户每天回来完成一课（因为这表明他们确实在参与应用），那么将连胜重点放在完成“一个单位”而不是“多个单位”上，对我们并没有坏处。

(00:12:23):
And so, that was probably the big [inaudible 00:12:25] change experiment that we ran at the time was moving from an XP-based streak to a one lesson streak. It's also simple, and I think that's one of the things to think about with streaks. It's always easy as a PM to have a million goals or objectives for what you want your feature to be and potentially build a more complex feature, and a one lesson streak, it's just easy for more users to understand.

**中文翻译:**
所以，那可能是我们当时运行的一个重大变革实验：从基于 XP 的连胜转向“一课连胜”。它也很简单，我认为这是设计连胜机制时需要考虑的一点。作为 PM，很容易为功能设定一百万个目标，从而构建出一个更复杂的功能，但“一课连胜”对更多用户来说更容易理解。

---

### [00:12:46] Lenny Rachitsky

**English:**
Yeah, that's exactly what I was going to say. And just for folks that aren't super familiar with XP, it's basically experience points and you get them from doing things, it's like a [inaudible 00:12:53]-

**中文翻译:**
是的，这正是我准备说的。对于那些不太熟悉 XP 的人，它基本上就是经验值，你通过完成任务获得，就像是——

---

### [00:12:53] Jackson Shuttleworth

**English:**
Yeah, you do stuff on Duolingo, and then based on what you did and how well you did it, we give you experience points, this actually drives a number of our features in our apps. So, leaderboards is the big one, we have a leaderboard system, where you try over the course of the week, you battle with 29 other people, and you want to win, that's all driven by XP. So, we do have other features in the app that really benefit from this XP system-

**中文翻译:**
是的，你在多邻国上做事，根据你做了什么以及做得多好，我们会给你经验值。这实际上驱动了我们应用中的许多功能。其中最主要的是排行榜（Leaderboards），我们有一个排行榜系统，在一周的时间里，你与另外 29 个人竞争，你想赢，这全是由 XP 驱动的。所以，应用中确实有其他功能从这个 XP 系统中受益——

---

### [00:13:16] Lenny Rachitsky

**English:**
Cool.

**中文翻译:**
酷。

---

### [00:13:16] Jackson Shuttleworth

**English:**
... the streak is just no longer one of them.

**中文翻译:**
……只是“连胜”不再是其中之一了。

---

### [00:13:18] Lenny Rachitsky

**English:**
Awesome. Okay, so I want to talk about the journey from that point to what it is today, but a quick tangent, I saw Luis tweet just this week, someone asked him, "How do you decide whether to optimize for learning or engagement?" And he's like, "No question, everything we do is focused on engagement because you won't learn anything if you're not coming back to the app."

**中文翻译:**
太棒了。好，我想聊聊从那时到现在的演进历程。不过先插一句，我这周刚看到 Luis 发推特，有人问他：“你如何决定是优化学习效果还是优化参与度？”他说：“毫无疑问，我们所做的一切都专注于参与度，因为如果你不回到应用中，你什么也学不到。”

---

### [00:13:39] Jackson Shuttleworth

**English:**
As an engagement PM, that was the coolest thing he could have ever said. It's, well, again, very much as subjectively I guess as an engagement PM, that's how I've... I am sure the learning folks at Duolingo will cringe when they hear it, I see myself as a learning PM as much as an engagement PM, because the easiest way not to learn on Duolingo is not to come back the next day. And so, if we don't make the app retentive, you will have no opportunity to engage with our learning features. Now, I do think that there is a long tail of learning, where, if you start to dumb down, and honestly this is something we wrestle with the streak as well, you start to dumb down the experience, and your users aren't actually learning, they're not going to care.

**中文翻译:**
作为一个负责参与度的 PM，这是他能说的最酷的话了。当然，这可能是我作为参与度 PM 的主观想法……我敢肯定多邻国负责学习效果的同事听到这话会感到不适。但我认为自己既是学习 PM 也是参与度 PM，因为在多邻国上不学习的最简单方法就是第二天不回来。所以，如果我们不让应用具有留存力，你就没有机会接触我们的学习功能。当然，我也认为学习有一个长尾效应，如果你开始简化体验（坦白说，我们在连胜功能上也面临这个问题），如果你把体验降级到用户实际上学不到东西的程度，他们也就不会在意了。

(00:14:20):
Streaks work best when they're sitting on top of an app that users care about. But yeah, if you don't come learn on Duolingo.... If you don't come back to Duolingo, then you're not learning. We track a lot of this with, the work that we do, we make sure that as we're making changes to the streak, we're not hurting the learning experience and we don't have a ton of interaction with it. So, we're constantly thinking about this, but thank you Luis for saying that.

**中文翻译:**
连胜机制在建立于用户真正关心的应用之上时效果最好。但是，如果你不来多邻国学习……如果你不回来，你就学不到东西。我们在工作中会追踪很多相关数据，确保在对连胜功能进行更改时，不会损害学习体验。我们一直在思考这个问题，但还是要感谢 Luis 这么说。

---

### [00:14:48] Lenny Rachitsky

**English:**
It makes sense to me. Okay, so lets get into the motherload of learnings from the journey of streaks. So, the first version went from XP to one lesson, talk about the key lessons, insights, and also wrong turns along the way to what we see today.

**中文翻译:**
这对我来说很有道理。好，让我们进入“连胜”演进历程中的干货分享。第一个版本从 XP 转向了“一课连胜”，请谈谈这一路走来直到今天的关键教训、洞察，以及那些走错的路。

---

### [00:15:03] Jackson Shuttleworth

**English:**
Duolingo has very much, has a strong test it philosophy, we're willing to test a lot of different... Honestly, we'd much rather test it than debate it for days and days. So, we actually followed up this experiment with, and this is a little bit later, with hey, what if we make it even easier to extend your streak? And so, we actually tested, hey, if you do one exercise, just one exercise in a lesson will extend your streak. A lot of the insight was good, you look at the funnel, hey, there's a lot of users who are starting but not finishing lessons, they're not extending your streak, the loss aversion doesn't kick in, they don't come back... So, this followed that train of thought. What we realized when we ran this experiment is DAUs moved not one bit. And what we were doing by... And if we go back to unit of measure, we had dumbed down the unit of... Nobody thinks about, oh, I just want to come do one question on Duolingo, nobody thinks about that.

**中文翻译:**
多邻国非常推崇“测试文化”，我们愿意测试很多不同的想法……坦白说，我们宁愿去测试，也不愿争论好几天。所以，在这个实验之后，稍晚一点，我们想：“嘿，如果我们让延续连胜变得更简单呢？”于是我们测试了：如果你只做一个练习，课程中的一个练习就能延续连胜。很多洞察听起来不错，你看漏斗：有很多用户开始但没完成课程，他们没能延续连胜，损失厌恶（loss aversion）没有起作用，他们就不回来了……所以这个实验遵循了那个思路。但当我们运行这个实验时，我们发现 DAU 纹丝不动。我们所做的是……回到“衡量单位”，我们把单位降级到了……没有人会想：“哦，我只想去多邻国做一个题”，没人会这么想。

(00:16:05):
So, we had a less clear unit of measure that we were basing our streak around, and the users that we were capturing with our streak, you come, you do one or two questions on Duolingo, then you leave, were the least engaged users imaginable. And so, I think that's something also to think about as you're building your streak, is like what is the user that you're solving for? So, not only what is the habit that you're building for, but what is the level of commitment, and that was an example where we over indexed on a type of user who we honestly just weren't going to keep, that was a very easy shutdown decision.

**中文翻译:**
所以，我们基于连胜的衡量单位变得不清晰了。而我们通过这种方式留住的用户——那些来多邻国做一两个题就走的人——是你能想象到的参与度最低的用户。所以，我认为在构建连胜机制时，你也需要思考：你是在为哪类用户解决问题？不仅是你为哪种习惯而构建，还有用户的承诺程度（level of commitment）是多少。那是一个我们过度关注了那些我们根本留不住的用户类型的例子，所以那是一个很容易做出的关停决定。

---

### [00:16:39] Lenny Rachitsky

**English:**
That's an awesome story, just to comment in that real quick. Just you went, let's just go to the extreme and make it just like streaks, yeah, get everyone going streaks forever, and then... I love that it turned out and it's not bringing users that you want, and it's dumbing down experience. It makes me think of Farmville, where you have to go and harvest your crops every, whatever, hour, that lasts for a bit and then eventually people are like, what the hell am I doing with my life?

**中文翻译:**
这是一个很棒的故事。我简单评论一下。你们走到了极端，想让连胜变得极其容易，让每个人都能永远连胜下去，结果……我喜欢这个结果，它证明了这并不能带来你想要的用户，而且降低了体验。这让我想起了《开心农场》（Farmville），你必须每小时去收割庄稼，这能持续一阵子，但最终人们会想：“我到底在过什么样的生活啊？”

---

### [00:17:04] Jackson Shuttleworth

**English:**
Yeah, exactly. We test every, I was looking at the numbers as well, we've run in the last four years, over 600 experiments on the streaks. So, every other day effectively-

**中文翻译:**
没错。我们测试每一个想法。我也看了数据，过去四年里，我们在连胜功能上运行了 600 多个实验。实际上相当于每隔一天——

---

### [00:17:14] Lenny Rachitsky

**English:**
600, wow.

**中文翻译:**
600 个，哇。

---

### [00:17:15] Jackson Shuttleworth

**English:**
... we're running an experiment. And they range from big, like this, changing how the mechanic works, to let's swap a string with another string and see if that copy is better for users. So, we're constantly testing on everything. I do think that, I'd be more careful running that experiment now, at some point your streak gets big enough that, again, I got 9 million users on the streak, I got to be really careful... Those are our best retaining users, you got to be careful. But in the early days of the streak, I'd say test everything. See what... Don't get super caught up in it has to be like this, just test a bunch of stuff and see what speaks most to users. Because I think, again, you will constantly be surprised by the insights that you get from whether you... We shut down about half of our experiments, so half of our experiments lose, we still learned a ton by virtue of running them. So, super, super valuable.

**中文翻译:**
……我们就在运行一个实验。它们的范围很广，从像这样改变机制运作方式的大实验，到更换一个字符串看看文案是否对用户更好。所以，我们一直在测试一切。我认为，我现在运行这类实验会更谨慎，因为在某种程度上，连胜规模已经足够大，我有 900 万连胜用户，我必须非常小心……他们是我们留存最好的用户。但在连胜功能的早期，我会说：测试一切。看看什么有效……不要纠结于“必须是这样”，多测试一些东西，看看什么最能引起用户共鸣。因为你会不断被那些洞察所惊讶。我们关停了大约一半的实验，也就是说一半的实验失败了，但通过运行它们，我们仍然学到了很多。所以，非常有价值。

---

### [00:18:08] Lenny Rachitsky

**English:**
That's actually a good success rate, a lot of companies have only 20% of experiments be positive. What's your policy on if it's neutral, do you ship it, or do you kill it?

**中文翻译:**
这其实是一个很高的成功率了，很多公司的实验只有 20% 是正向的。如果实验结果是中性的（Neutral），你们的政策是发布它，还是毙掉它？

---

### [00:18:18] Jackson Shuttleworth

**English:**
It really depends. If we're adding something and it's neutral, we tend to shut it down because it's just more cognitive load, it's something that we're going to have to start building around, a new UI element that we have to figure out how it fits into our system. I'd say when we do ship a neutral experiment is, something that we have real conviction around, okay, yeah, maybe this was neutral but it's going to give us a new platform to then build on top of, so that experience might be neutral, but now we can build these DAU positive experiments. My general take there is though, in that case, build that in as part of your V1 so that you make sure that at least your hypothesis around this roadmap has play should probably be the case, but in general, shutting down a neutral experiment so you don't introduce more complexity to the app is the way we tend to go.

**中文翻译:**
这取决于具体情况。如果我们是在增加新东西，而结果是中性的，我们倾向于关掉它，因为这会增加认知负荷，而且是我们以后必须维护的东西，比如一个新的 UI 元素，我们得考虑它如何融入系统。我会说，我们发布中性实验的情况是：我们对它有真正的信念，觉得“好吧，虽然现在是中性的，但它为我们提供了一个可以继续构建的新平台”，所以虽然这个体验目前是中性的，但现在我们可以基于它构建那些能带来正向 DAU 的实验。不过我的总体看法是，在这种情况下，应该把它作为 V1 的一部分来构建，以确保你关于这个路线图的假设至少是有发挥空间的。但总的来说，为了不增加应用的复杂性，关掉中性实验是我们通常的做法。

---

### [00:19:10] Lenny Rachitsky

**English:**
Makes sense. All right, what else? What else have you learned along the journey?

**中文翻译:**
有道理。好，还有什么？这一路上你们还学到了什么？

---

### [00:19:13] Jackson Shuttleworth

**English:**
Well, maybe I can talk about a few different ways that we structure, a few different themes that I think we lean on. So, the first is focusing on the zero to seven day user experience. And I would say this is, if you look at whatever our breakdown of experiments are, we run definitely more than average number of experiments on getting users to go from a zero to seven day streak. And a lot of this is because we've looked at the data for our retention curves, and what we found is that once you get to seven days, loss aversion kicks in, and you retain. So, going from a one to a two-day streak, huge jump in retention, two to three day streak, slightly less but still huge and it's up until day seven. Once you hit day seven, it flans out. And it's not to say that if you have a 30-day streak, you're way more attentive than day seven, but not in the order of magnitude that it is from day one through seven.

**中文翻译:**
也许我可以聊聊我们构建的几种不同方式，或者说我们依赖的几个主题。首先是专注于“0 到 7 天”的用户体验。如果你看我们的实验分类，我们在“引导用户从 0 天连胜到 7 天连胜”上运行的实验数量绝对超过平均水平。这很大程度上是因为我们研究了留存曲线的数据，发现一旦你达到 7 天，损失厌恶就会起作用，你就会留下来。所以，从 1 天到 2 天连胜，留存率会大幅跃升；2 天到 3 天，增幅略小但依然巨大，这种情况一直持续到第 7 天。一旦到了第 7 天，曲线就变平缓了。并不是说 30 天连胜的用户不比 7 天的更留存，但那种增长的数量级远不如 1 到 7 天那么明显。

(00:20:05):
So, we do a ton of work to get users to that point where loss aversion kicks in, and then they don't want to lead the app. One of the fun ones that we did, and it's honestly as much about process as it is about the feature itself, was we have a feature called streak goal, and it is... Again, so much of this stuff seems so obvious in retrospect, but it was really novel at the time. We had this idea of like, hey, maybe we'll just goal users to hitting a certain streak length. As you can imagine, this is pretty powerful user psychology, and we started with the simplest version of this. And this is how Duolingo does a lot of our testing. Rather than design the big complex feature for V1, just do the simplest encapsulation of what that feature can be, see if it has legs, and then just add to it iteratively over time, this is partially how we get to 600+ experiments on streaks, they're not all big ones.

**中文翻译:**
所以我们做了大量工作，让用户达到那个损失厌恶起作用的临界点，然后他们就不想离开应用了。我们做过的一个有趣的实验（这其实既关乎流程也关乎功能本身）是一个叫“连胜目标”的功能。同样，很多东西回过头看显而易见，但在当时很新颖。我们当时想：“嘿，也许我们可以给用户设定一个达到特定连胜长度的目标。”你可以想象，这是一种非常强大的用户心理暗示。我们从最简单的版本开始。这就是多邻国做测试的方式：与其为 V1 设计一个庞大复杂的功能，不如只做该功能最简单的封装，看看它是否可行，然后随着时间的推移迭代增加内容。这也是为什么我们在连胜上能做 600 多个实验的原因之一，它们并不全是大型实验。

(00:21:01):
But we started... And it was funny, we actually took a learning from our monetization win teams. One of the strings that they had, the pieces of copy that they had, worked really, really well was, I think it was your 5.6 x more likely to finish the course if you subscribe to Plus. Now, it's Super, our subscription. It was a really good hook that if you really cared, you'd sign up. And so, we had a similar thought, where it's like, oh, let's just tell you how much more likely you are to finish the course if you get a 30-day streak.

**中文翻译:**
我们开始……有趣的是，我们其实是从变现团队（Monetization team）那里学到的。他们有一段文案效果非常好，大意是：“如果你订阅 Plus（现在叫 Super，我们的订阅服务），你完成课程的可能性会提高 5.6 倍。”这是一个非常好的钩子，如果你真的在意学习，你就会订阅。所以我们也有了类似的想法：“哦，让我们告诉用户，如果你达到 30 天连胜，你完成课程的可能性会提高多少。”

(00:21:34):
And so, we started with that, and I think it was like you're seven times more likely to finish the course if you have a 30-day streak, and just that message when you started your streak, I telling you that, was awesome. Huge win. Indicating an outcome... And Duolingo doesn't have, we have a gem economy but we don't actually have, it's all you learning. But being able to actually talk about it in terms of the outcomes that a user would think about, in this case, trying to finish the course, was a huge win. So, this is where we started and we're like, ah, goal setting, all right, we should go much harder on this.

**中文翻译:**
于是我们从那开始，我想当时的信息是“如果你有 30 天连胜，你完成课程的可能性会提高 7 倍”。就在你开始连胜时告诉你这个消息，效果太棒了。巨大的成功。指明一个结果……多邻国虽然有宝石经济，但本质上还是关于学习。能够以用户关心的结果（在这种情况下是完成课程）来谈论它，是一个巨大的胜利。所以我们从这里开始，然后觉得：“啊，目标设定，好，我们应该加大力度。”

---

### [00:22:06] Lenny Rachitsky

**English:**
Found a-

**中文翻译:**
找到了一个——

---

### [00:22:06] Jackson Shuttleworth

**English:**
Yeah, we found our thing, and now let's just beat the heck out of it. So, we followed that up with another experiment, where we tested different lengths. So, we test 14 days and 50 days, and we found that they were all good, but they appealed to different users. And so, we started to realize, all right, well, we probably need to be more thoughtful about who we give these different options to. And so, then we followed that experiment up with, all right, let's start with 30 days, and then we're going to let you opt out, we'll say, no, I don't think I can hit it. And our thinking was, and then if you say no, we'll hit you with an easier goal. Because we just wanted to get you to commit to a goal. And this was a fascinating one because it was a good win to give users that easier goal, to try to capture them before they said no, but it was almost just as big a win to add that opt out button.

**中文翻译:**
是的，我们找到了突破口，现在我们要把它发挥到极致。接着我们做了另一个实验，测试了不同的长度。我们测试了 14 天和 50 天，发现它们都有效，但吸引的是不同的用户。于是我们意识到，好吧，我们可能需要更周全地考虑把这些选项给谁。接着我们又做了一个实验：先从 30 天开始，然后允许你选择退出（opt out），你可以说“不，我觉得我达不到”。我们的想法是，如果你说不，我们就给你一个更简单的目标。因为我们只是想让你承诺一个目标。这是一个非常迷人的实验，因为给用户更简单的目标是一个不错的胜利，可以在他们拒绝前抓住他们，但增加那个“退出”按钮几乎带来了同样大的胜利。

(00:22:58):
So, we tested separately, and I'm a huge fan of testing way too many arms for an experiment, just to be able to isolate your hypotheses, but we captured just what happens if we add an opt-out button, and adding an opt-out button... And you would think, as a PM, oh, now users might not engage with my feature, that's a bad thing, but it was a huge win to let them do that. And the learning here was that this intentionality of saying, no, I want it... Previously it was just a continue button, but now it's like, no, I want to hit 30 days, and having that be an intentional decision for them, yes or no, even though again, this had no impact, or no impact past this screen. Everything that I'm talking about now was just that screen that day, and then was all thrown out. So, that optionality was a huge insight, and so because of that, we built a goal setting feature where you could choose between different goals, giving users that optionality was likewise a huge win.

**中文翻译:**
所以我们进行了单独测试。我非常喜欢在一个实验中测试过多的变量（arms），以便隔离假设。我们捕捉到了如果增加一个退出按钮会发生什么。作为 PM，你可能会想：“哦，现在用户可能不参与我的功能了，这是件坏事。”但允许他们退出其实是一个巨大的胜利。这里的经验是：这种“意向性”（intentionality）。以前只是一个“继续”按钮，但现在变成了“不，我想达到 30 天”，让他们做一个有意识的决定（是或否）。尽管这个决定除了在这个屏幕上之外没有任何实际影响，我说的这一切都只是在那一天的那个屏幕上，之后就没了。但这种“选择权”是一个巨大的洞察。因此，我们构建了一个目标设定功能，你可以选择不同的目标，给用户这种选择权同样是一个巨大的胜利。

(00:23:57):
I'll say one final learning on this, again, you talk about friction, and good and bad friction, we thought once we built a goal picker screen, where you could pick between different streak lengths, we were like, oh, well, let's recommend that users do a harder goal, thinking that okay, well, a harder goal is going to be better retention, and we'll the preselect harder goal for them. And based on all the learnings that I just shared with you, you probably imagine lost pretty significantly, we realized that yes, we could speed users through the screen more by virtue of picking a goal for them, but that act of selecting, I think it's 30 days, I think it's 14 days, was where we were getting so much of the engagement from this feature.

**中文翻译:**
关于这一点，我再说最后一个教训。你谈到摩擦力（friction），有好的摩擦和坏的摩擦。我们想，既然做了一个目标选择屏幕，可以选不同的连胜长度，那我们就推荐用户选一个更难的目标吧，因为更难的目标意味着更好的留存，所以我们为他们预选了更难的目标。根据我刚才分享的所有经验，你大概能猜到，这个实验输得很惨。我们意识到，虽然通过帮用户选好目标可以让他们更快地跳过这个屏幕，但正是那种“亲自选择”（我觉得是 30 天，我觉得是 14 天）的行为，才是这个功能产生如此高参与度的原因。

---

### [00:24:39] Lenny Rachitsky

**English:**
There's so much human psychology that you all learn through all these experiments of just how to motivate people, what motivates, what demotivates, it feels like you guys should write a book on human psychology and motivation.

**中文翻译:**
通过这些实验，你们学到了太多的行为心理学——关于如何激励人们，什么有效，什么无效。感觉你们应该写一本关于人类心理学和动机的书。

---

### [00:24:51] Jackson Shuttleworth

**English:**
I feel very much like a amateur armchair psychologist with everything that, at least as far as people who want to learn languages on their phone go, I really understand those folks.

**中文翻译:**
我觉得自己就像个“业余心理学家”。至少在那些想在手机上学外语的人群中，我真的很了解他们。

---

### [00:25:03] Lenny Rachitsky

**English:**
Right. So, one theme I'm hearing here so far is you guys are basically just mining for gold, just looking for a vein in some mine, and once you hit it you're like, ooh, this worked, you just go crazy on just testing all kinds of things to see how far you can take that one little thread.

**中文翻译:**
明白。所以到目前为止我听到的一个主题是，你们基本上是在“淘金”，在矿山里寻找矿脉，一旦挖到了，你们就会说：“噢，这个有效！”然后就开始疯狂测试各种东西，看看这个小线索能挖掘到多深。

---

### [00:25:22] Jackson Shuttleworth

**English:**
Yeah, and I think, I shared how this idea came partially from a monetization win that they had, I think there's a lot of, because Duolingo runs... I don't know what percentile we're in, but it's got to be a very high percentile of per capita experiments run for a company, based on company size. We're just constantly learning so many things and there's a really great cross-sharing of monetization say, hey, this thing worked for us, is that something you can use? So, I'd say it's rare that we go into something where it's just like, let's just try something. Typically, we have some insight because of all of these experiments that we've run, that hey, if we do this, I don't know, it's one here, or it's worked here, it's driven this user engagement, if we massage that and try in this scenario, or a different screen, we come in at least with a strong hypothesis of this will work.

**中文翻译:**
是的。我刚才分享了这个想法部分源于变现团队的一次成功。多邻国运行的实验数量……我不知道我们在什么分位，但按公司规模计算，人均实验运行量肯定处于极高水平。我们一直在学习很多东西，而且跨团队分享做得很好，变现团队会说：“嘿，这个对我们有效，你们能用吗？”所以，我们很少会在毫无头绪的情况下说“咱们随便试个东西吧”。通常，因为我们运行了这么多实验，我们已经有了一些洞察，比如：“嘿，如果我们这样做，它在这里赢过，或者它驱动了这种用户参与度，如果我们把它调整一下，在这个场景或不同的屏幕上尝试，我们至少带着一个‘这会奏效’的强假设进入。”

(00:26:17):
A lot of times we do look, and we're like, a lot of the apps that we look at actually are games themselves, so it's like, all right, you're playing Royal Match, or there's the new Pokemon trading card game that I'm spending way too much time on, you look at these games and see what they're doing, and it's really good fodder for what we can do. But a lot of times you're at least going in with a strong hypothesis based on what you've seen work elsewhere.

**中文翻译:**
很多时候我们会观察，我们看的很多应用其实本身就是游戏。比如你在玩《Royal Match》，或者我最近花太多时间玩的新的宝可梦卡牌游戏，你看这些游戏在做什么，这对我们能做的事情是很好的素材。但大多数时候，你至少是带着一个基于其他地方成功经验的强假设开始的。

---

### [00:26:39] Lenny Rachitsky

**English:**
Got it. So, just to double down on that point, it's not just random experiments, it's here's a hypothesis we're fairly confident, or has a chance to be true, let's try it. It's not just let's just try everything?

**中文翻译:**
明白了。所以再强调一下这一点：这不只是随机实验，而是“这里有一个我们相当有信心、或者有很大机会成真的假设，让我们试试看”。而不是“让我们随便试一切”？

---

### [00:26:49] Jackson Shuttleworth

**English:**
Yeah. And I think that how strongly you feel about the hypothesis directly ties to how hard that experiment is. With copy, for instance, we've actually set up really good infrastructure for copy testing. I'm of the opinion that companies should run, as long as you have the user base to do it, copy test constantly. The amount of copy tests that we've had that have won, and I don't know, you just try things and you figure out what wins is definitely legion, and [inaudible 00:27:15] massive wins from little copy changes.

**中文翻译:**
是的。我认为你对假设的信心程度直接关系到实验的难度。以文案为例，我们为文案测试搭建了非常好的基础设施。我的观点是，只要你有足够的用户群，公司就应该不断进行文案测试。我们成功的文案测试数量多得数不清，你只需尝试不同的东西，找出哪个能赢。微小的文案改动往往能带来巨大的胜利。

---

### [00:27:18] Lenny Rachitsky

**English:**
Is there an example of that, of just the impact?

**中文翻译:**
有没有具体的例子，能体现这种影响力的？

---

### [00:27:20] Jackson Shuttleworth

**English:**
Going back to that goal screen, we used to say Continue, our standard CTA is Continue, and we changed that to Commit To My Goal, and it was a massive win. And again, it was like, okay, users tapping on that, what are we asking them to do? Commit to the goal, what is that going to lead them to do? Commit, not churn. Just that little copy change, that one time, right there, led to huge wins. And copy changes are so cheap, it's just you translate, for us, we have a lot of users all over the world, and a lot of UI languages, but just come up with a bunch of ideas, translate some strings... This is one where the feedback that you'll typically get from Luis. So, all of our changes at Duolingo go through product review that are reviewed by Luis, so Luis reviews every single change that we propose, every experiment that we run.

**中文翻译:**
回到那个目标屏幕。我们以前用“继续”，这是我们标准的 CTA。后来我们把它改成了“承诺完成我的目标”，结果大获全胜。同样，当用户点击它时，我们在要求他们做什么？承诺目标。这会引导他们做什么？承诺，而不是流失。仅仅是那一次、在那里的一个小文案改动，就带来了巨大的胜利。而且文案改动的成本非常低，你只需要翻译一下——对我们来说，我们有很多全球用户和多种 UI 语言——只需想出一堆点子，翻译一些字符串……这是 Luis 通常会给反馈的地方。多邻国所有的改动都要经过产品评审，由 Luis 亲自把关。Luis 会审查我们提出的每一个改动、运行的每一个实验。

(00:28:12):
Typically with copy, he's just like, I don't know, test it, there's nothing better than be told by Luis, I don't think this is going to win, but sure, if you want to. And a lot of times, to his credit, he's right, and a lot of times our intuition was right, but it's just so cheap to do it. I think when the lift is smaller, it's great to have a hypothesis, but you don't need to beat it up too much.

**中文翻译:**
通常对于文案，他会说：“我不知道，测一下吧。”没有什么比 Luis 告诉你“我不觉得这能赢，但如果你想测就测吧”更棒的了。很多时候，他是对的；但也有很多时候，我们的直觉是对的。关键是这样做成本太低了。我认为当预期的提升较小时，有一个假设很好，但不需要过度纠结。

---

### [00:28:36] Lenny Rachitsky

**English:**
So, on this thread, I didn't realize Louis reviews everything you're planning to change, and this may be the answer to the question I was going to ask, which is, one of the criticisms of running a product and company this way, of just experimenting constantly with all these micro improvements and changes, is it can lead to something, like a monstrosity of a product and experience that isn't consistent and cohesive, and just that often happens. Is the solution to that having the founder basically review all the changes? Is there anything else y'all do to avoid it becoming Farmville or whatever, is a good example of that?

**中文翻译:**
关于这一点，我之前没意识到 Luis 会审查你们计划改动的每一件事。这可能就是我要问的问题的答案：这种运行产品和公司的方式（不断进行微小的改进和实验）常被批评的一点是，它可能导致产品变成一个“怪物”，体验不一致、不连贯。这种情况经常发生。解决办法就是让创始人审查所有改动吗？你们还有什么其他方法来避免它变成像《开心农场》那样（过度游戏化）的东西吗？

---

### [00:29:06] Jackson Shuttleworth

**English:**
Yeah, our product review structure where we've got our head of product design, one of the lead, the product management leaders, and then Luis, NPR. And because they see everything, and they have a really high product bar, and so that helps. I think over time we just, as PMs, have to look at, okay, where is our feature headed? And so, we do this with the streak at least on a quarterly basis, to look at, okay, well, what have we learned, how has our streak developed, and how do we imagine this going in near future? It's easy to do, and in some sort of awful local maxima, if you're not constantly looking at your roadmap and you don't have a clear strategy. For me it's like, if you have a clear strategy where your feature is going, hopefully all of those A/B tests are not just done to get some cheap gain, they're done with a long-term goal in mind.

**中文翻译:**
是的，我们的产品评审结构包括产品设计负责人、一位主要的产品管理领导，然后是 Luis。因为他们能看到全局，并且有非常高的产品标准，这很有帮助。我认为随着时间的推移，作为 PM，我们必须审视：我们的功能走向何方？对于连胜功能，我们至少每季度进行一次回顾，看看我们学到了什么，连胜功能是如何演进的，以及我们设想它在不久的将来会如何发展。如果你不经常审视路线图，没有清晰的策略，很容易陷入某种糟糕的“局部最优解”（local maxima）。对我来说，如果你对功能的走向有清晰的策略，那么所有的 A/B 测试就不只是为了获得一些廉价的收益，而是为了一个长期目标。

(00:30:03):
I do think though, and we do this every now and then with the streak, eventually you just hit a local maxima, and you say, you talked about launching neutral experiments, this is a great example, where it's like all right, cool, now we need to throw a bunch of this stuff out, based on all the learnings, can we reset this real estate, can we reset this UI, reset this feature, in such a way that is just as good as what we have now but is way more plain or simple, that we can, again, start to layer on? Those are really hard experiments to get to win obviously, because they are so optimized, but they're really important to do, otherwise, yeah, you just end up with a kitchen sink of a feature.

**中文翻译:**
但我确实认为（我们对连胜功能也会偶尔这样做），最终你会遇到局部最优解。这时你会说（就像你提到的发布中性实验），这是一个很好的例子，我们会觉得：“好吧，现在我们需要根据所有的经验教训，扔掉其中的一堆东西。我们能不能重置这块区域，重置这个 UI，重置这个功能，让它在保持现有效果的同时变得更加简洁明了，以便我们再次开始叠加新东西？”显然，这些实验很难赢，因为现有的已经非常优化了，但这样做非常重要，否则，你的功能最终会变成一个什么都往里塞的“大杂烩”。

---

### [00:30:39] Lenny Rachitsky

**English:**
One other tidbit I just want to mention, an advantage you all have that other companies don't have is people want to learn a language, and so getting pushed to come back to an app for something that they want to do, it's not an advantage a lot of products have. So, anything you want to add there, of just like this is why Duolingo might be a little different from what you're working on.

**中文翻译:**
我还想提一点，你们拥有一个其他公司没有的优势：人们本身就想学习一门语言。所以，被推着回到一个他们本来就想做的应用中，这不是很多产品都有的优势。关于这一点你有什么想补充的吗？比如为什么多邻国可能与大家正在做的产品有些不同。

---

### [00:31:03] Jackson Shuttleworth

**English:**
That is definitely a benefit, if I had an app... And that this is actually why I think a lot of mobile games do streaks differently, because to say that you played a mobile game, and as somebody who plays a lot of mobile games, that you've done it for 3000 days in a row, I don't know, maybe that hits a little bit different than you've learned Spanish for 3000 days in a row. I think the comparison set is much larger though, than a lot of companies give themselves credit for, and I think that there's... There's a lot of ways that companies think about their... There are very few companies I imagine out there in the world saying, oh, we don't do some degree of good for our users... Even if it's like a game, it's like, I don't know, you're giving somebody a moment away from the craziness of their lives.

**中文翻译:**
这确实是一个优势。如果我有一个应用……这其实也是为什么我认为很多手游做连胜的方式不同。因为作为一个玩很多手游的人，如果你说你连续玩了 3000 天游戏，那种感觉可能和“你连续学习了 3000 天西班牙语”不太一样。但我认为可比的范围比很多公司想象的要大。我想世界上很少有公司会说：“哦，我们完全没给用户带来任何好处。”即使是游戏，你也是在给人们提供一个逃离疯狂生活的片刻。

(00:31:47):
And so, I do think though that is contingent on companies who are going to figure out if a streak works for them, to figure out how can you frame the streak in such a way that a user does feel good about it. And it's easier for a Duolingo, but I think there's creative ways to phrase this for users. The other thing maybe just on that that I'll say is, the streak works really well for Duolingo because with language learning it's really hard to see day-to-day progress in becoming more fluent. And fluency is not even the right word, it's like becoming better at Spanish or whatever, it is a years long process for someone to get better at a language.

**中文翻译:**
所以我认为，这取决于公司是否能搞清楚连胜机制是否适合他们，以及如何构建连胜，让用户对此感到自豪。对多邻国来说这更容易，但我认为有创意的方法可以向用户传达这一点。另一件我想说的是，连胜在多邻国效果极好，是因为在语言学习中，你很难看到每天在流利度上的进步。“流利度”甚至不是最准确的词，应该是“西班牙语变得更好了”，一个人要提高语言水平是一个长达数年的过程。

(00:32:25):
Duolingo makes it easier, but you still got to put in thousands of hours if you're going to reach C1 or C2 fluency, and that is really hard to track on a day-to-day, and so the streak works really well for us because we might not be able to tell you, hey, you now know 0.01% more Spanish, but we can show you, hey, you've gotten your streak a little bit higher. And so, I think this works particularly well when you're an app that is doing something that's going to be sensed or felt over a longer term to help contextualize that progress in a way that makes more sense, or at least feels more tangible to a user.

**中文翻译:**
多邻国让这变得更容易，但如果你想达到 C1 或 C2 的流利水平，你仍然需要投入数千小时，而这在日常中很难追踪。所以连胜对我们非常有效，因为我们可能无法告诉你：“嘿，你现在的西班牙语水平提高了 0.01%”，但我们可以向你展示：“嘿，你的连胜天数又增加了一点。”因此，我认为当你的应用所做的事情需要长期才能感知到效果时，连胜机制特别有效，它能以一种更有意义、或者至少对用户来说更真实可感的方式，将这种进步具象化。

---

### [00:33:02] Lenny Rachitsky

**English:**
Great, that was a great context. Empowering to a lot of companies that aren't necessarily doing language learning. Okay. So, it took us on a long tangent away from lessons and experiments you ran along the journey of iterating on the streak. So, a few things you've shared so far is just, it started with this XP idea, and then went to a lesson, then you iterated on ways to make it simpler, maybe harder, you added streak goals, where you commit to I'm going to hit a certain goal of streak. What else? What else have you found that has worked, didn't work, lessons learned?

**中文翻译:**
太棒了，这个背景介绍得很好。对很多不一定做语言学习的公司来说很有启发。好，刚才我们扯远了，回过头来聊聊你们在迭代连胜功能过程中的经验和实验。到目前为止你分享了几点：从 XP 概念开始，转向“一课连胜”，然后迭代了让它更简单或更难的方法，增加了“连胜目标”，让用户承诺达到某个目标。还有什么？还有什么你发现有效、无效或学到的教训？

---

### [00:33:32] Jackson Shuttleworth

**English:**
Again, sticking with this one to seven day streak, the idea of a streak, particularly probably to this audience, is obvious. Like, oh, it's a streak, it just counts how many days. We've realized over time that a lot of users do not understand how a streak works, and it can be as small as, well, I don't understand how streak freezes work, or I don't... Like my mom the other day was talking to you about it, she's like, "Oh, I didn't use Duolingo and I come back and my streak's still there." So, there's certain elements of the feature that we can do better at explaining, but even what a streak is, it's tracking how many days that I've used the app, yeah, the more that we can make the feature easily comprehensible to users, the more retentive it is. And we've run a number of experiments to do this.

**中文翻译:**
再次回到“1 到 7 天连胜”。“连胜”这个概念，特别是对这个播客的听众来说，是显而易见的。就像：“哦，连胜嘛，就是数天数。”但随着时间的推移，我们意识到很多用户并不理解连胜是如何运作的。可能小到“我不明白连胜激冻是怎么回事”，或者像我妈前几天跟我说的：“哦，我没用多邻国，但我回来发现连胜记录还在。”所以，这个功能的某些元素我们可以解释得更好。甚至连“什么是连胜”（追踪我使用了多少天应用）这一点，我们越能让它易于理解，它的留存效果就越好。我们为此运行了许多实验。

(00:34:23):
You asked about early easy copy changes that we made. Actually, this is my first win experiment when I joined Duolingo was, when you start a streak, we have little copy at the bottom of the screen that just, I don't know, it's like flavor copy, we use it to celebrate you, or give you context, and I ran some tests that just tried to in eight words explained what a streak was, that was it. And it was a massive win because it really dumbed down here is exactly how the streak worked, and it really helped users just understand what they needed to do. And I think this is something that's like, you constantly got to remind yourself, particularly if you work in tech and you're building cool tech features, but your user base is not a bunch of tech workers, to think about, all right, who is my audience? And for us it's not just tech workers, it's not people in America, it's people all over the world of all ages of all cultures, and so making sure that your feature is even something as simple as the streak is understandable is critical.

**中文翻译:**
你问到早期简单的文案改动。实际上，我加入多邻国后的第一个成功的实验就是：当你开启连胜时，屏幕底部有一小段文案，类似于点缀性的文案，用来庆祝或提供背景。我运行了一些测试，尝试用 8 个单词解释什么是连胜，仅此而已。结果大获全胜，因为它非常直白地说明了连胜到底是怎么回事，真正帮助用户理解了他们需要做什么。我认为这是你需要不断提醒自己的：特别是如果你在科技行业工作，构建酷炫的功能，但你的用户群并不是科技工作者。要思考：“我的受众是谁？”对我们来说，受众不仅是科技工作者，也不仅是美国人，而是全世界、各个年龄段、各种文化背景的人。所以，确保即使是像连胜这样简单的功能也是易于理解的，这一点至关重要。

---

### [00:35:27] Lenny Rachitsky

**English:**
What was the actual copy, do you remember?

**中文翻译:**
具体的文案是什么，你还记得吗？

---

### [00:35:29] Jackson Shuttleworth

**English:**
It was... I think it's still on the app, it's like, "Start a day to extend your streak, but miss a day and it resets," something like that.

**中文翻译:**
是……我想现在应用里还在用，大概是：“开启新的一天来延续连胜，错过一天则会重置。”类似这样。

---

### [00:35:38] Lenny Rachitsky

**English:**
That makes sense to me. Very clear.

**中文翻译:**
很有道理，非常清晰。

---

### [00:35:40] Jackson Shuttleworth

**English:**
Yeah.

**中文翻译:**
是的。

---

### [00:35:41] Lenny Rachitsky

**English:**
In eight words, I love that. Okay. And then, when you say massive win by the way, just to give people a reference point, what does that look like? What is a massive win in this scale?

**中文翻译:**
8 个单词，我喜欢。顺便问一下，当你提到“巨大的胜利”时，为了给大家一个参考，那是什么样子的？在这种规模下，什么样的结果算巨大胜利？

---

### [00:35:50] Jackson Shuttleworth

**English:**
Well, and it's funny, and this was four years ago, but I think it was in the order of magnitude of over 10,000 DAUs for us, and actually, maybe a small bit of context. So, Duolingo really cares about the metric CURR current user retention rate, and actually our first ever Duolingo post with Lenny was the newsletter that our former head of product wrote, Jorge.

**中文翻译:**
很有趣，那是四年前的事了，但我想对我们来说，那是超过 10,000 个 DAU 的增长量级。其实可以补充一点背景：多邻国非常看重 CURR（当前用户留存率）这个指标。实际上，我们在 Lenny 这里的第一个多邻国专题，就是我们前产品负责人 Jorge 写的通讯文章。

---

### [00:36:11] Lenny Rachitsky

**English:**
Still the single most popular newsletter post of all time in my newsletter, across 300 plus-

**中文翻译:**
那仍然是我通讯历史上最受欢迎的一篇文章，在 300 多篇里排名第一——

---

### [00:36:15] Jackson Shuttleworth

**English:**
I would highly recommend that if you were interested in this, give it a read. To summarize, basically, what we found is that, if we wanted to drive DAUs, and Duolingo cares, our growth North Star is DAUs, the metric that is most effective, where a percentage change in that metric is most effective at driving DAUs is current user retention rate. And this is just users who are not new or resurrected, getting them to come back tomorrow. And so, most of the work that our teams do, our retention-based teams do is focused on CURR. And so, the retention team that I lead focused on CURR, it just so happens the streak is the best feature at driving CURR. And so, this experiment was the biggest CURR win that we had had, and it was like a top three CURR win, anyway for us. Just this little copy. And that's why I say, test copy 1000 different ways, sometimes it's not the big beautiful feature that's going to drive the huge gains, sometimes it's just something simple as a few words.

**中文翻译:**
如果你对此感兴趣，我强烈建议读一下。总结来说，我们发现：如果我们想驱动 DAU（多邻国的增长北极星指标是 DAU），最有效的指标——即该指标的百分比变化对驱动 DAU 最有效的——就是“当前用户留存率”（CURR）。这指的是那些既不是新用户也不是回流用户，而是让他们明天继续回来的用户。因此，我们留存团队的大部分工作都聚焦于 CURR。而我领导的留存团队专注于 CURR，恰好“连胜”是驱动 CURR 最好的功能。所以，这个实验是我们取得过的最大的 CURR 胜利，至少是前三名。仅仅是这一小段文案。这就是为什么我说，要用 1000 种方式测试文案，有时驱动巨大收益的不是什么华丽的大功能，而只是几个简单的单词。

---

### [00:37:15] Lenny Rachitsky

**English:**
I love this. Okay, so you said 10,000 DAUs, I think that references you guys measure incremental impact and absolute numbers of new daily users you're going to drive attributed to that experiment, is what it sounds like.

**中文翻译:**
我喜欢这个。好，你提到了 10,000 个 DAU，听起来你们衡量的是该实验带来的增量影响和归因于该实验的每日新增活跃用户的绝对数量。

---

### [00:37:28] Jackson Shuttleworth

**English:**
Yeah, and we do both. We'll also look at, a lot of times I'll look at, for retention, day one versus day seven versus day 14, a lot of what I'm looking for is for us to have a better day 14 impact than better day one impact because it means that users are retaining better over time. This is particularly for users that would see a feature multiple times. I just like absolute DAU numbers because as long as you're controlling for different biases, like a recency bias or a novelty bias, it's a really easy way to just have an absolute comparison. You start to look at percentage changes and then it's influenced by who your treatment, how many users saw the experiment, but at least an absolute number is easier, in my mind, to start comparing.. Again, there are pitfalls with it, but we find that that's a pretty useful way.

**中文翻译:**
是的，我们两者都看。对于留存，我经常会看第 1 天、第 7 天和第 14 天的对比。我追求的是第 14 天的影响优于第 1 天，因为这意味着用户随时间推移留存得更好。特别是对于那些会多次看到某个功能的用户。我喜欢绝对 DAU 数字，因为只要你控制了各种偏差（比如近因偏差或新奇偏差），它就是一种非常简单的进行绝对对比的方式。如果你看百分比变化，它会受到实验组规模、有多少用户看到实验等因素的影响，但在我看来，绝对数字更容易进行比较。当然，这也有陷阱，但我们发现这是一种非常有用的方式。

---

### [00:38:20] Lenny Rachitsky

**English:**
That lesson comes up a lot on this podcast, and that approach to experiment.

**中文翻译:**
这个教训和这种实验方法在本播客中经常被提到。

---

### [00:38:25] Jackson Shuttleworth

**English:**
[inaudible 00:38:25].

**中文翻译:**
（听不清）。

---

### [00:38:25] Lenny Rachitsky

**English:**
So, yeah, you're in good company. Quick tangent, if there's not an answer to this, no problem, coming back to the idea of just experimenting like crazy and not creating a product that nobody wants to use anymore, is there an example of an experiment that was positive that you all decided, no, we don't actually think this is what we want in the product, they ended up not shipping?

**中文翻译:**
所以，你并不孤单。插一句，如果没有答案也没关系。回到“疯狂实验”但又不把产品做烂的话题，有没有哪个实验结果是正向的，但你们最终决定：“不，我们不认为这是我们想要的产品方向”，最后没有发布的例子？

---

### [00:38:47] Jackson Shuttleworth

**English:**
Retention doesn't only work on the streak, although you would think... Most of our work is the streak. We've touched a lot of different surfaces over the years and there was one experiment that we launched that, we talked about XP earlier, in the lesson, the only UI elements are a progress bar at the top, and then how many hearts you have. So, we keep it really simple, and this very much speaks to the design philosophy of Duolingo, which is simpler UI is better, and we decided, hey, let's add XP in there. And so let's show your XP ticking up as you're going through a lesson, that's going to make the user feel good, it's going to show you what you've earned, you're going to be less likely to quit, all of these good reasons to do it. And then you finish the lesson and then we'll show you've collected all this XP.

**中文翻译:**
留存工作不只针对连胜，虽然你可能会这么想……我们大部分工作确实是连胜。这些年我们触及了很多不同的界面。有一个实验，我们之前提到了 XP，在课程界面中，唯一的 UI 元素是顶部的进度条和你的体力（心心）数量。我们保持得非常简洁，这非常符合多邻国“UI 越简单越好”的设计哲学。后来我们决定：“嘿，咱们把 XP 加进去吧。”让我们在用户上课时显示 XP 实时增长，这会让用户感觉很好，展示你赚到了什么，让你更不容易中途退出，这些都是很好的理由。当你完成课程时，我们会显示你收集了所有这些 XP。

(00:39:29):
And it won, the hypothesis was a good one. But we realized, and I remember having this conversation with Luis, is like, cool, this is our most important screen in the app, it is our lesson, it is where users learn, and the focus here is on learning. And now you've added this other thing up there that could be distracting for users. And I think the question, we talked about roadmaps and strategy here, the question that he had for me, and I didn't have a good answer for at the time, was like, so what else are you going to do with this? What's your iteration ideas? Where's this going to go? Is this going to make the lesson experience more gamified? And what we realized is that, honestly, it was just an easy engagement win idea, but we had touched our most sacred space in the app to do that.

**中文翻译:**
实验赢了，假设是正确的。但我们意识到（我记得和 Luis 聊过这件事）：“酷，这是应用中最重要的屏幕，这是我们的课程，是用户学习的地方，这里的重点应该是学习。”而现在你加了另一个东西，可能会分散用户的注意力。关于路线图和策略，他当时问了我一个问题，我当时给不出好的答案，他说：“那你接下来打算怎么做？你的迭代想法是什么？这会走向何方？这会让课程体验变得过度游戏化吗？”我们意识到，坦白说，这只是一个容易获得的参与度提升点，但我们为了这个点动用了应用中最神圣的空间。

(00:40:16):
And so, that was a case where it's like, yeah, it was a nice win, but we'd added that UI element, and at least at the time it was less clear what we would do with it and we realized that long term it was just going to get in the way, and we'd rather, for simplicity's sake, pause that, shut it down, and keep the lesson to be a little bit of learning sanctuary it was. Now, it's funny, nowadays I think we actually have enough XP based mechanics and fun things that we can do, that I think actually a lot of the beliefs about the in-lesson experience have changed, such as something like that could work, but at the time didn't feel good to keep that around.

**中文翻译:**
所以，那是一个虽然赢了但我们没发布的例子。我们增加了那个 UI 元素，但至少在当时，不清楚后续该怎么做。我们意识到从长远来看，它只会碍事。为了简洁起见，我们宁愿暂停它、关掉它，让课程保持它应有的“学习圣地”的样子。有趣的是，现在我认为我们已经有了足够的基于 XP 的机制和有趣的东西，关于课程内体验的很多观念也发生了变化，比如现在这种做法可能行得通，但在当时，保留它感觉并不好。

---

### [00:40:56] Lenny Rachitsky

**English:**
That is an awesome example. Hopefully we have time to talk about how the team operates, where my mind goes is like, oh, but you have all these PMs and teams that want to show impact, and the performance reviews, and all that stuff, and you're not shipping something, they're like, oh look, we did a win. So, I want to chat about that later, but let's keep going on things you've learned and things that didn't work along the journey.

**中文翻译:**
这是一个非常棒的例子。希望我们有时间聊聊团队是如何运作的。我想到的是：你有这么多 PM 和团队想要展示影响力，还有绩效评估之类的，如果你不发布某个东西，他们会觉得：“看，我们明明赢了。”我想稍后聊聊这个，但现在让我们继续聊聊你们学到的东西和那些无效的尝试。

---

### [00:41:15] Jackson Shuttleworth

**English:**
The other thing that I'll call out with the streak, it's like we have the... The image of the streak is this flame. And we have the streak flame, and it's very much core to our iconography. It's important to acknowledge that that's a metaphor for a retention mechanic. The idea of keeping a flame lit. And again, I think we've established the flame is for a lot of users as sort of their understanding of a streak, which is great, but there's a lot of people in different cultural context and different stages of life, where the idea of keeping a flame lit to show your commitment to something makes less sense. We did some UXR in India many years ago, and this was something that just did not resonate at all there, which was a really interesting learning. And that's something it's like, again, depending upon what your user base is, the more global UXR you can do to understand how users are actually understanding and experience your feature, the better, because you just, again, encounter insights like this.

**中文翻译:**
关于连胜，我想提到的另一件事是我们的图标。连胜的形象是一个火焰。连胜火焰是我们图标设计的核心。必须承认，那是留存机制的一个隐喻——“保持火焰燃烧”。我想我们已经确定了火焰是很多用户对连胜的理解方式，这很好。但在不同的文化背景和人生阶段，通过“保持火焰燃烧”来展示对某事的承诺，可能并不那么容易理解。多年前我们在印度做过一些用户研究（UXR），发现这个概念在那里完全没有引起共鸣，这是一个非常有趣的发现。所以，取决于你的用户群，你做的全球用户研究越多，越能理解用户是如何理解和体验你的功能的，这非常重要，因为你会遇到这样的洞察。

(00:42:12):
And so, even our screen design, we used to have a flame, it was mostly this flame that would light up every day. But again, it was like an indication of a metaphor for a mechanic, and when we redesigned it, we did this, Kurt, one of our animators, did this awesome odometer animation where it's like your number would tick every day... It looked good, but from a product perspective, what was cool is we actually focused the design on the screen to show your number going up, and then it would say seven day streak, eight day streak. And I think that as you're thinking about designing around a streak, don't get too caught up into what is this the beautiful story that you're trying to tell, at the expense of it being a really comprehensible feature. And so, as you're thinking about product design, making that product design a clear distillation of this is what we's actually tracking, form should follow a function here, was a learning for us. And you'll see that now in a lot of places where we're showing streak, we're really leading with the number, not necessarily the flame.

**中文翻译:**
所以，甚至在我们的屏幕设计上，我们以前主要显示一个每天点亮的火焰。但同样，这只是一个机制的隐喻。当我们重新设计它时，我们的动画师 Kurt 做了一个很棒的“里程表”动画，数字每天都会跳动……它看起来很棒。但从产品角度来看，酷的地方在于我们将设计重点放在显示数字增长上，它会显示“7 天连胜”、“8 天连胜”。我认为当你围绕连胜进行设计时，不要过度沉溺于你想讲的那个“美丽故事”，而牺牲了功能的易理解性。所以，在产品设计中，让设计成为“我们实际追踪的内容”的清晰提炼，即“形式追随功能”，这是我们学到的一课。现在你会看到，在很多显示连胜的地方，我们真正突出的是数字，而不一定是火焰。

---

### [00:43:18] Lenny Rachitsky

**English:**
That's a theme that I'm hearing again and again is clarity, don't obsess with making it too clever, and don't ever think it, just clarity has a big impact.

**中文翻译:**
这是我反复听到的一个主题：清晰。不要痴迷于把它做得太聪明，不要想太多，清晰本身就有巨大的影响力。

---

### [00:43:29] Jackson Shuttleworth

**English:**
Clarity also doesn't have to come at the expense of delight. And this is something where you hit a milestone and Duo gets, it becomes, we call him a Phoenix Duo, and he becomes awesome, and lights on fire, and I think there are things that you can do to still make the experience really exciting and delightful and celebratory, and I would not lose that, but just don't do it at the expense... And I think it's also about figuring out, you can get away with doing more of this for users who are deeper into their streak experience than users who are starting, where it's like your goal for the one-day streak user is just to make sure, do they understand how this feature works?

**中文翻译:**
清晰也不必以牺牲愉悦感为代价。比如当你达到一个里程碑时，小多（Duo）会变身，我们叫它“凤凰小多”，它会变得很酷并全身着火。我认为你可以做一些事情让体验变得令人兴奋、愉悦且具有庆祝感，我不建议丢掉这些，但不要以牺牲清晰度为代价。而且我认为还要分情况：对于那些连胜很久的用户，你可以多做一些这类设计；但对于刚开始的用户，你的目标只是确保他们理解这个功能是如何运作的。

(00:44:06):
Even something... Again, just another random experiment. At the bottom of the streak screen we have a calendar, and over the years it just looks more and more calendar-like, and that is simply because we find that the more we make it look like a calendar, days on top, little circles, the check... The more we make it look like calendar, the more that people realize, hey, this is a daily mechanic. And so, think about the screen holistically, but every single thing that you're doing on the screen, how can you use it to communicate what is the point of this feature? How does it work?

**中文翻译:**
甚至还有……再举一个随机实验的例子。在连胜屏幕的底部我们有一个日历，这些年来它看起来越来越像日历。这仅仅是因为我们发现，我们越让它看起来像日历（顶部显示日期，下面是小圆圈和打钩），人们就越能意识到：“嘿，这是一个每日机制。”所以，要从整体上考虑屏幕，但屏幕上的每一件事，你都要思考如何利用它来传达：这个功能的意义是什么？它是如何运作的？

---

### [00:44:37] Lenny Rachitsky (Ad Segment)

**English:**
This episode is brought to you by Coda. I use Coda every day to coordinate my podcasting and newsletter workflows. From collecting questions for guests to storing all my research to managing my newsletter content calendar, Coda is my go-to app and has been for years. Coda combines the best of documents, spreadsheets, and apps to help me get more done, and Coda can help your team to stay aligned and ship faster by managing your planning cycle in just one location, set and measure OKRs with full visibility across teams and stakeholders, map dependencies, create progress visualizations, and identify risk areas.

**中文翻译:**
本期节目由 Coda 赞助。我每天都使用 Coda 来协调我的播客和通讯工作流。从收集嘉宾问题到存储我的所有研究资料，再到管理我的通讯内容日历，Coda 多年来一直是我的首选应用。Coda 结合了文档、电子表格和应用的优点，帮助我完成更多工作。Coda 还可以通过在一个地方管理你的规划周期，帮助你的团队保持一致并加快发布速度：设定并衡量 OKR，让团队和利益相关者拥有完全的可见性，映射依赖关系，创建进度可视化，并识别风险区域。

(00:45:12):
You can also access hundreds of pressure-tested templates for everything from roadmap strategy to final decision-making frameworks. See for yourself why companies like DoorDash, Figma, and Qualtrics run on Coda. Take advantage of this special limited-time offer just for startups, head over to coda.io/Lenny and sign up to get six free months of the team plan. That's coda.io/Lenny to sign up and get six months of the team plan. Coda.io/Lenny.

**中文翻译:**
你还可以访问数百个经过压力测试的模板，涵盖从路线图策略到最终决策框架的所有内容。亲眼看看为什么像 DoorDash、Figma 和 Qualtrics 这样的公司都在 Coda 上运行。利用这个专门针对初创公司的限时特别优惠，前往 coda.io/Lenny 注册即可免费获得 6 个月的团队计划。

(00:45:43):
I imagine one of the biggest wins was just giving people flexibility along the journey, like streak freezes and all these things, is that a big vein of opportunity discovery?

**中文翻译:**
我猜最大的胜利之一就是在一路上给人们灵活性，比如连胜激冻之类的。这是一个巨大的机会发现点吗？

---

### [00:45:52] Jackson Shuttleworth

**English:**
It is. Actually, I'm going to show you one of the most thoughtful gifts that anybody has ever given to me, this is our Duolingo Serenity, or Streak Serenity Prayer, my co-lead, Antonia-

**中文翻译:**
是的。事实上，我要给你看一件别人送给我的最用心的礼物。这是我们的“多邻国宁静祷文”，或者叫“连胜宁静祷文”，我的搭档 Antonia——

---

### [00:45:52] Lenny Rachitsky

**English:**
It's like knitted, right?

**中文翻译:**
是编织的，对吧？

---

### [00:46:05] Jackson Shuttleworth

**English:**
... [inaudible 00:46:05] this for me. It's amazing.

**中文翻译:**
……为我绣的。太棒了。

---

### [00:46:06] Lenny Rachitsky

**English:**
Wow.

**中文翻译:**
哇。

---

### [00:46:06] Jackson Shuttleworth

**English:**
And so it says, "Luis, grant me the serenity to accept the flexibility I need, the courage to reach perfection when I can, and the wisdom to celebrate regardless."

**中文翻译:**
上面写着：“Luis，请赐予我宁静，去接受我需要的灵活性；赐予我勇气，在可以时追求完美；并赐予我智慧，无论如何都去庆祝。”

---

### [00:46:14] Lenny Rachitsky

**English:**
Aw.

**中文翻译:**
噢。

---

### [00:46:15] Jackson Shuttleworth

**English:**
And that actually is kind of our strategy with the streaks.

**中文翻译:**
这实际上就是我们对连胜功能的策略。

---

### [00:46:19] Lenny Rachitsky

**English:**
I love the show and tell by the way, that was great.

**中文翻译:**
顺便说一下，我喜欢这个展示环节，太棒了。

---

### [00:46:20] Jackson Shuttleworth

**English:**
Yeah. Well, I guess for podcast listeners, we'll have to get an image somewhere. This idea of flexibility versus perfection, and then regardless, celebration, is core to how we think about the streak. Because I think for the streak for us, it's very much a bend not break. If you're going to miss a day, I'd rather you come back, having missed that day, to an intact streak, but if you don't have to miss a day, I'd much rather you don't, I'd much rather you come back and use the app every day. So, that thing on flexibility though, that's almost certainly been the biggest, from a mechanic perspective, the biggest DAU driver. One of the earliest experiments we ran was going from you used to only be able to have one streak freeze and then we let you have either two or three. So, we tested two different arms. It was, again, another huge DAU win.

**中文翻译:**
是的。我想对于播客听众，我们得在某个地方放张照片。这种“灵活性 vs 完美”，以及“无论如何都要庆祝”的想法，是我们思考连胜的核心。因为我认为对我们来说，连胜机制应该是“可弯曲但不可折断”。如果你要错过一天，我宁愿你错过后回来时连胜记录依然完整；但如果你不必错过，我当然更希望你别错过，更希望你每天都回来用应用。关于灵活性，从机制角度来看，这几乎肯定是我们最大的 DAU 驱动力。我们最早运行的实验之一是：以前你只能拥有一个连胜激冻，后来我们让你拥有两个或三个。我们测试了两个不同的方案，这又是一个巨大的 DAU 胜利。

(00:47:12):
This actually is funny, it was something that... And this is, again, a callback to that growth model post from Jorge. It actually was really bad for CURR because we were basically saying, hey, you can take a day off, and that's okay, but it was really good for, this is going to be like Alphabet Soup, [inaudible 00:47:31], a weekly active user return rate. So, basically, users who had taken a day off, we were getting them to come back more at higher rates, and so it made up for our losses in CURR. But effectively, what this meant is that, why two streak freezes work better than one was, I don't know, sometimes people just need a little bit more flexibility than one day. But again, the really interesting insight of this experiment was that three streak freezes was actually no better than two streak freezes. And there were two competing things here, and I think this is important if you're going to build a streak to figure out what your flexibility mechanic is.

**中文翻译:**
这其实很有趣，这又要回溯到 Jorge 那篇关于增长模型的文章。这其实对 CURR（当前用户留存率）很不利，因为我们基本上是在说：“嘿，你可以休息一天，没关系。”但它对 WAU（周活用户）回访率非常好。基本上，对于那些休息了一天的用户，我们让他们以更高的比例回来，从而弥补了 CURR 的损失。实际上，这意味着两个连胜激冻比一个效果好，是因为有时候人们确实需要超过一天的灵活性。但这个实验真正有趣的洞察是：三个连胜激冻其实并不比两个好。这里有两个相互竞争的因素，我认为如果你要构建连胜机制，搞清楚你的灵活性机制是什么非常重要。

(00:48:03):
We were getting more users to return after longer times away to an intact streak. But if you start taking three days off from any habit, it's just going to be less likely that you return even four days later. And so, we had these competing things where more users might be returning to a streak, but a lot of users were also just not coming back, we were training them to take more time off. So, that flexibility, what's the right amount of... We've again, this is another area we've run hundreds of experiments on, what is the right amount of flexibility? And we are constantly surprised here. I still don't have the answer for at every point in your streak journey how much flexibility you need. One thing that I can say with certainty though is, give more flexibility when a user is starting their streak. Again, one of our biggest streak freeze experiment wins... I feel like I'm constantly saying this, one of our biggest wins, but they all were really, really big.

**中文翻译:**
虽然我们让更多离开较长时间的用户回到了完整的连胜中，但如果你对任何习惯连续休息三天，那么你在第四天回来的可能性就会大大降低。所以我们面临这种竞争：虽然更多用户可能回到了连胜，但很多用户也干脆不回来了，因为我们“训练”了他们休息更长时间。所以，关于灵活性，合适的度是多少？这是另一个我们运行了数百个实验的领域。我们在这里不断感到惊讶。我仍然没有一个确切的答案，告诉你连胜旅程的每个阶段需要多少灵活性。但我可以肯定的一点是：在用户开始连胜时，给予更多的灵活性。同样，这是我们最大的连胜激冻实验胜利之一……我觉得我一直在说“最大的胜利”，但它们确实都非常大。

(00:48:59):
One of our biggest streak freeze wins was when you start a new streak, we give you two streak freezes. And again, it's so funny to think back, it's like how are we not doing this to begin with? But at the time, the streak freeze was an overly gamified mechanic, you had to buy them with gems, that's our in-app currency, because we wanted the whole idea of this to feel like it was really something you earned, that there was a little bit of pain to getting that streak freeze. And so, we tested though, what if we just give users when they start off their streak two streak freezes, and holy smokes to that win.

**中文翻译:**
我们最大的胜利之一是：当你开启一段新的连胜时，我们直接送你两个连胜激冻。回想起来很有趣，我们当初怎么没这么做呢？但在当时，连胜激冻是一个过度游戏化的机制，你必须用宝石（我们的应用内货币）购买，因为我们希望这感觉像是你真正赚来的，获得它应该有一点点“痛感”。后来我们测试了：如果我们在用户开始连胜时直接送两个激冻会怎样？天哪，那个实验赢疯了。

(00:49:33):
And it sort of obvious now, in retrospect, but if you have a one or a two or a three-day streak, it's really easy just to let it die and restart, again, you need to get to seven days, what we've seen in the data, for it to really lock in. And so, giving users more flexibility so that it's harder to lose their streak initially, and then conversely, and this is what we keep learning, eventually, once people get on long streaks, you don't want to give them as much flexibility. Because there's a lot of times where, yeah, users don't... And I'm like this, I've got a 400-day streak. Note that that is a lot less time than I've been at Duolingo, I have lost and restarted streaks a lot of times at my time at Duolingo.

**中文翻译:**
回过头看这很显而易见：如果你只有一两天的连胜，很容易就让它断掉然后重开。正如我们在数据中看到的，你需要达到 7 天才能真正锁定用户。所以，在初期给予更多灵活性，让连胜更难断掉；反之（这也是我们不断学到的），一旦人们进入长连胜，你就不想给他们那么多灵活性了。因为很多时候，用户并不……我也是这样，我有 400 天的连胜。注意，这比我加入多邻国的时间短得多，我在多邻国期间断过很多次连胜，也重开过很多次。

(00:50:14):
But you start getting on long streaks, and you really care about this feature, you really care about your streak. And most people, as long as you're not backpacking through, I don't know, the back country of Utah, you'll be in a place where you can get service. And so, figuring out who is the user that actually could use Duolingo, and not conditioning them to start taking days off that they didn't otherwise need to do is important to figure out where that line is for your feature.

**中文翻译:**
但当你进入长连胜，你真的会在意这个功能，在意你的连胜记录。大多数人，只要不是在犹他州的荒野徒步，总能找到有信号的地方。所以，搞清楚哪些用户实际上是可以上课的，不要诱导他们开始休那些本来不需要休的假，这对于找准功能的界限非常重要。

---

### [00:50:46] Lenny Rachitsky

**English:**
This is fascinating. You can also buy a streak, right? With money. That's a feature, right?

**中文翻译:**
太有意思了。你也可以买连胜，对吧？用钱买。这也是一个功能，对吗？

---

### [00:50:51] Jackson Shuttleworth

**English:**
Yeah. And it's funny, this is also something that we [inaudible 00:50:54]-

**中文翻译:**
是的。有趣的是，这也是我们——

---

### [00:50:53] Lenny Rachitsky

**English:**
You can buy a freeze, sorry, not a streak.

**中文翻译:**
你可以买激冻，抱歉，不是买连胜。

---

### [00:50:56] Jackson Shuttleworth

**English:**
Yeah. So, you can buy a streak freeze, and the way it works is you can buy gems, and then you can use those gems to buy a streak... And this is something we wrestle with. We're actively working on an experiment, right now that's having a small hit to revenue, but it's a really nice win for retention, and I think it's actually worth thinking about from day one, as you're building a streak, do you see this more as a monetization feature, or do you see this more as a retention feature? What's the role of monetization in this? What's the role of retention? And I think for us it started out much more organically, and so we have a lot of monetization hooks, that again, is the retention PM, I would love to get rid of. But again, it's sort of part of how the streak works right now. And so, we always have this tension of, hey, if we start to make it harder to buy streak freezes, then fewer people buy them, buy gems to buy them, and so there's this more convoluted series of impacts that happen.

**中文翻译:**
是的。你可以买连胜激冻，方式是买宝石，然后用宝石买激冻……这是我们一直在纠结的事情。我们现在正在做一个实验，虽然对收入有一点小影响，但对留存是一个很好的提升。我认为从第一天开始构建连胜机制时就值得思考：你更多地把它看作一个变现功能，还是留存功能？变现的角色是什么？留存的角色又是什么？对我们来说，它开始得非常自然，所以我们有很多变现钩子。作为留存 PM，我其实很想去掉它们。但目前它们是连胜机制的一部分。所以我们总是有这种张力：如果我们让购买连胜激冻变得更难，买的人就少了，买宝石的人也就少了，这会产生一系列复杂的连锁反应。

---

### [00:51:49] Lenny Rachitsky

**English:**
Yeah, no, I love that people wanting to buy streak freeze is like the ultimate sign of how much streaks matter.

**中文翻译:**
是的，我明白。人们愿意花钱买连胜激冻，这本身就是连胜功能有多重要的终极证明。

---

### [00:51:57] Jackson Shuttleworth

**English:**
Yeah, streak freeze is the other big one that we've recently demonetized, or introduced a free option for, is getting back a lost streak. So, used to lose a streak, we had a feature, in the day, back in the day, called Streak Repair, we'd give you your streak back, you had to pay gems. But what we found that worked way better was a feature called Earn Back, and this is basically where you would have to do a certain number of lessons, as long as you came back within a window soon after losing your streak, do a few lessons and we just give you your streak back. And that was such a retention winner. And again, what we thought about was it feels like you've earned it so much more when you've done... You deserve to have your streak back, we haven't cheapen the streak because you've done something.

**中文翻译:**
是的。连胜激冻是另一个大项。我们最近取消了变现，或者说为“找回丢失的连胜”引入了免费选项。以前如果你断了连胜，我们有一个叫“连胜修复”（Streak Repair）的功能，你得付宝石才能找回。但我们发现效果好得多的是一个叫“赢回”（Earn Back）的功能。基本上是：只要你在断了连胜后的短时间内回来，完成一定数量的课程，我们就把连胜还给你。这在留存上大获全胜。同样，我们的想法是：当你通过努力找回它时，你会觉得这更像是你应得的。我们没有让连胜贬值，因为你为此付出了行动。

(00:52:44):
And in this sense, this idea of cheapening the streak is something, like from a philosophical... Philosophy of the streak. From a philosophical level, we wrestle with all the time, of, cool, we're giving out more streak freezes, at what point do we cross the line and users start to realize their streak means nothing? Now, everything that we've seen, users are totally cool with using streak freezes and still thinking about their streak is this meaningful thing, but my co-lead, Antonia, who made that awesome cross-stitch for me, she is the keeper for us of the sanctity of the streak. And a lot of times as we... And I think this is really important to have, as you're thinking about building your streak. You can almost always get engagement wins, up to a certain point, by just cheapening the streak, making it easier to extend, letting users have more flexibility, but you kind of got to hold the line at some point.

**中文翻译:**
从哲学层面来说，关于“让连胜贬值”这个想法，我们一直在纠结：好吧，我们送出了更多的连胜激冻，但在什么点上我们会越界，让用户觉得他们的连胜记录毫无意义？目前我们看到的是，用户完全接受使用激冻，并依然认为连胜是有意义的。但我的搭档 Antonia（就是给我绣那个十字绣的人），她是“连胜神圣性”的守护者。我认为在构建连胜机制时，拥有这样一个人非常重要。你几乎总是可以通过让连胜“贬值”（让它更容易延续、给用户更多灵活性）来获得参与度的提升，但在某个点上，你必须守住底线。

(00:53:30):
And it's not clear where that line is. And once you... You talk about one-way doors or two-way doors, there's a point where you go too far and it's a one-way door, and all of a sudden those users, those 9 million users on one-year streaks don't care about their streak anymore. And that is, I don't know, again, retention PM perspective, that'd be an extinction level event for us. I don't want all of these users to stop caring about their streak. And so, to have somebody who is invested in the sanctity of this streak, and for us it's Antonia and Luis, he's very good about this, is really important, just so you make sure you don't go too far.

**中文翻译:**
那条底线在哪里并不清晰。一旦你……就像你说的“单向门”或“双向门”，如果你走得太远，那就是一扇单向门，突然之间那 900 万连胜一年的用户就不再在意他们的连胜了。从留存 PM 的角度来看，那将是我们的“灭绝级事件”。我不希望这些用户不再关心连胜。所以，拥有像 Antonia 和 Luis 这样致力于维护连胜神圣性的人非常重要，这能确保你不会走得太远。

---

### [00:54:06] Lenny Rachitsky

**English:**
That's an awesome insight. So, to protect... And push notifications I think are another example of this in general for companies, how much is too much? Because everyone is just like, let's just send another push, it's fine, just one more. And so, your solution to that is a person is like the keeper, and almost the gatekeeper, plus the founder, of how far is too far.

**中文翻译:**
这是一个很棒的洞察。为了保护……我想推送通知对很多公司来说也是一个例子：发多少算太多？因为每个人都会想：“咱们再发一条推送吧，没事的，就再多一条。”所以，你们的解决方案是让一个人担任守护者，甚至是守门员，再加上创始人，来把控这个度。

---

### [00:54:26] Jackson Shuttleworth

**English:**
It's good if you can have that. I think push notifications are also easier because there's a lot of things you can do around, all right, we'll send a budget cap for how many notifications we'll send, you can-

**中文翻译:**
如果能做到这一点很好。我认为推送通知其实更容易处理，因为你可以做很多事情，比如设定发送通知的数量上限，你可以——

---

### [00:54:36] Lenny Rachitsky

**English:**
It's like [inaudible 00:54:38] policy.

**中文翻译:**
就像是某种政策。

---

### [00:54:38] Jackson Shuttleworth

**English:**
Yeah, policies. But I think with a lot of things, at least for the streak, it's harder to create policies for in the same way, a lot of it has to be done based on feel, and so you just got to use your best judgment at times.

**中文翻译:**
是的，政策。但我认为对于很多事情，至少对于连胜功能，很难建立同样的政策，很多时候必须凭感觉，所以你有时必须运用你的最佳判断。

---

### [00:54:49] Lenny Rachitsky

**English:**
Sweet. Okay. Any other, maybe one or two more lessons from this journey of what streaks has become today.

**中文翻译:**
太棒了。好，关于连胜演变到今天，还有没有一两个其他的教训？

---

### [00:54:56] Jackson Shuttleworth

**English:**
You mentioned notifications, and I've mentioned this a few times. One... It's funny, you tend to think of, exactly as you say, you can just always send another notification, it's going to be some win, and at some point it'll be a bad experience, but it's tough to see that. There's actually a notification that we... So, we send two notifications related to your core streak each day, the first is a practice reminder, we send it, this is actually an interesting insight, 23 and a half hours after you practice the day before. Whoa, that is a lot.

**中文翻译:**
你提到了通知，我也提过几次。正如你所说，人们往往认为多发一条通知总会有收益，虽然最终会导致糟糕的体验，但很难察觉到那个临界点。实际上我们有一种通知……我们每天发送两条与核心连胜相关的通知。第一条是练习提醒，我们发送的时间（这是一个有趣的洞察）是在你前一天练习后的 23.5 小时。哇，这很有讲究。

---

### [00:55:21] Lenny Rachitsky

**English:**
23 and a half. Okay,

**中文翻译:**
23.5 小时，好的。

---

### [00:55:23] Jackson Shuttleworth

**English:**
So, basically, if you practice at noon today, we'll send it to you at 11:30 AM tomorrow, and we have done-

**中文翻译:**
所以，基本上如果你今天中午练习，我们明天上午 11:30 会发给你。我们做过——

---

### [00:55:31] Lenny Rachitsky

**English:**
And it, because it's like assuming they are free in that time the day before, maybe they'll be free at the same time?

**中文翻译:**
这是因为假设他们前一天的那个时间有空，那么第二天同一时间可能也有空？

---

### [00:55:36] Jackson Shuttleworth

**English:**
And we actually moved, we used to let users set this practice reminder time, and our thinking was, cool, you're going to say 7:00 PM, that's when I really want to extend my streak each day, and then you know what? I say this to somebody with two kids, life gets in the way, life always gets in the way, and when you think you're going to practice will change, your life will change, whatever. And what we realize is the best indicator of when you should practice was when did you practice the day before. We could almost certainly get more detailed, we have tried a bunch of ways to have much more complex logic, and what always wins is 23 and a half hours.

**中文翻译:**
我们实际上做过调整。以前我们允许用户自己设定练习提醒时间，我们的想法是：“酷，你会说晚上 7 点，那是我每天最想延续连胜的时间。”但你知道吗？作为一个有两个孩子的人，生活总会出岔子，生活总会干扰你。你以为你会练习的时间会变，你的生活会变。我们意识到，预测你什么时候该练习的最佳指标，就是你前一天什么时候练习的。我们几乎肯定可以做得更细致，我们也尝试过很多更复杂的逻辑，但最终胜出的总是“23.5 小时”。

---

### [00:56:07] Lenny Rachitsky

**English:**
That's so interesting. Revealed behavior versus stated.

**中文翻译:**
太有意思了。这是“表现出来的行为” vs “口头表达的意愿”。

---

### [00:56:10] Jackson Shuttleworth

**English:**
Yeah, exactly. So, again, we send this practice reminder 23 and a half hours later, the other thing that we'll do though is we'll send a, what we call a streak saver, and this is at 10:00 at night, if you have not extended your streak, we'll send you a message saying, hey, it's your last chance, this is it, if you don't extend your streak. And you would think that, that's kind of spammy, that's kind of annoying, to get a notification from an app at 10:00 PM, but what we found is because people care about their streak, their streak is this good thing that they attach positive emotions, that they don't really want to lose, that notification reminding them, hey, come back and... People see this by and large as a positive notification and not a negative notification.

**中文翻译:**
没错。所以，我们在 23.5 小时后发送练习提醒。另一件我们会做的事是发送我们所谓的“连胜拯救者”（streak saver）。这是在晚上 10 点，如果你还没延续连胜，我们会发消息说：“嘿，这是最后的机会了，如果你不延续，连胜就没了。”你可能会觉得这有点像垃圾邮件，晚上 10 点收到应用通知很烦人。但我们发现，因为人们在意连胜，连胜是他们寄托了积极情感、不想失去的好东西，所以那个提醒他们回来的通知，绝大多数人认为它是积极的，而不是消极的。

(00:56:53):
Obviously, it serves our purpose as well of getting users to come back and not lose their streaks, but again, I think if you can think about your notification strategy related to what is the feature that it's tied to, how do users perceive that? You can almost certainly, not get away with more, but you can be thoughtful about notification load, and when to send notifications, and again, for us, this late night message, that's also highly impactful, super good, is actually something that could be perceived as spammy, but a lot of our users really do... Somebody who, it's often late at night, and I work here, and I'm like, oh, forgot to do my... I was think about Duolingo all day, here it is, 11:15, and I still haven't done it, that message is really powerful.

**中文翻译:**
显然，它也达到了我们的目的，即让用户回来且不丢失连胜。但我认为，如果你能根据通知所关联的功能以及用户的感知来思考通知策略，你就能更周全地考虑通知负荷和发送时机。对我们来说，这条深夜消息非常有影响力，效果极佳。虽然它可能被视为垃圾信息，但很多用户真的很需要它。比如我，经常到深夜才想起来：“噢，忘了做功课了……”我整天都在想多邻国，结果到了 11:15 还没做，那条消息就非常强大。

---

### [00:57:36] Lenny Rachitsky

**English:**
Yeah. It has saved me many times, I totally know that message, and I love that it's a late night message from an app, very rarely do you actually, are happy about that, and I love that this actually is a good example where-

**中文翻译:**
是的，它救了我很多次，我太熟悉那条消息了。我喜欢这种来自应用的深夜消息，很少有应用发这种消息还能让人高兴的。这是一个很好的例子——

---

### [00:57:51] Jackson Shuttleworth

**English:**
It's really funny, all of the stories that you hear about people extending their streak, if you look around a Duolingo party, where it's like 11:30, 11:45, all the Duolingo employees, they're are doing their lesson at the last minute. You always see these pictures of people in the club doing, or at a concert doing Duolingo, and yeah, because it's like otherwise you're going to use a streak freezer, or God forbid you will lose your streak.

**中文翻译:**
真的很有趣。你听到的所有关于人们延续连胜的故事，如果你去参加多邻国的派对，到了 11:30 或 11:45，你会看到所有的多邻国员工都在最后一刻赶着做功课。你总能看到人们在夜店或音乐会上做多邻国的照片。是的，因为如果不做，你就得用激冻，或者更糟——失去连胜。

---

### [00:58:14] Lenny Rachitsky

**English:**
That's so funny. Okay, anything else? And if there's more than one more, definitely share, but any other really interesting lessons or wrong turns or insights?

**中文翻译:**
太搞笑了。好，还有别的吗？如果还有不止一个，请务必分享。还有什么有趣的教训、弯路或洞察？

---

### [00:58:23] Jackson Shuttleworth

**English:**
I talked about streak freezes, and we've done a lot with streak freeze, but I think if you're going to make flexibility a thing, it's probably also useful thinking about how do you celebrate perfection. And so, we have a feature that we have, it is the simplest thing in the world, it's called Perfect Streak. And it's just, if you don't use the streak freeze for a few days, we make your streak look gold, and we make your little progress bar on the calendar just look a little bit nicer. There's no reward for doing it, you don't get anything other than this nice little indication, and it is awesome. It is a simple feature, it is ultra not complex, and it is really powerful, not only for getting users to, as a bit of a reward, they'd be hey, get to seven days without using a streak freeze and your streak becomes perfect, but it's also a really nice indication of users who aren't using streak freezes.

**中文翻译:**
我谈到了连胜激冻，我们围绕它做了很多工作。但我想，如果你要提供灵活性，那么思考“如何庆祝完美”可能也很有用。我们有一个功能，它是世界上最简单的东西，叫“完美连胜”（Perfect Streak）。它就是：如果你连续几天没用激冻，我们会让你的连胜图标变成金色，让日历上的进度条看起来更漂亮一点。这样做没有物质奖励，除了这个漂亮的小标识你什么也得不到，但它太棒了。这是一个极其简单的功能，一点也不复杂，但非常强大。它不仅能作为一种奖励（嘿，连续 7 天不用激冻，你的连胜就变完美了），也是对那些不用激冻的用户的一种很好的认可。

(00:59:14):
Here is the thing that if you don't use a streak freeze, which, again candidly, I would love for you never to use a streak freeze, if you don't use a streak freeze, your streak will stay perfect. It's funny, we actually just, we're constantly responding to bug reports about the streak. It is... I swear to God, we have the best infrastructure around this feature because it is so important. We had an employee who lost her, I think a four-month perfect streak, and it was a big deal for her because she did her lesson, and she was crossing international dateline, there was a bunch of stuff going on that was like, it was just kind of weird in our backend. But people start to care about perfection as much as they do their streak, and for that person it was a big deal when they lost their perfect streak. And so, this is just an example of, look, if you're going to go after flexibility, which is good, finding a way to pull users back into perfection is a really important counterweight to have.

**中文翻译:**
这就是关键：如果你不用激冻（坦白说，我希望你永远不用），你的连胜就会保持完美。有趣的是，我们经常收到关于连胜的 Bug 报告。我敢发誓，我们为这个功能搭建了最好的基础设施，因为它太重要了。我们有一位员工丢了她四个月的完美连胜，这对她来说是件大事。她做了功课，但因为跨越了国际日期变更线，后台出了一些奇怪的问题。人们开始像在意连胜一样在意“完美”，对那个人来说，失去完美连胜是件大事。所以这只是一个例子：如果你追求灵活性（这很好），那么找到一种方法引导用户回归“完美”，是一个非常重要的平衡点。

---

### [01:00:13] Lenny Rachitsky

**English:**
What I'm imagining is you guys need a Amazon style chatbot that just gives you the streak back, it's just like, okay, here you go.

**中文翻译:**
我在想，你们需要一个亚马逊风格的聊天机器人，直接把连胜还给用户，就像：“好吧，还给你。”

---

### [01:00:20] Jackson Shuttleworth

**English:**
We have very much... So, we have, if people lose their streak, there's ways to get in contact with us, but we've actually thought about that, where it's like, okay, we should just build a self-service feature, and if we think that your excuse is good enough, whatever, we'll just [inaudible 01:00:34].

**中文翻译:**
我们确实有……如果人们丢了连胜，有办法联系我们。但我们确实考虑过，比如建立一个自助服务功能，如果我们觉得你的理由足够充分，就还给你。

---

### [01:00:34] Lenny Rachitsky

**English:**
Yeah, yeah. [inaudible 01:00:35].

**中文翻译:**
是的，没错。

---

### [01:00:36] Jackson Shuttleworth

**English:**
Because again, I'd much rather you be on a streak than have lost it, particularly [inaudible 01:00:41].

**中文翻译:**
因为同样，我宁愿你保持连胜，也不愿你失去它。

---

### [01:00:41] Lenny Rachitsky

**English:**
Right. But it also can feel that easy. I love this, I also love this point about just the power of the animation and user experience having impact, that's really interesting. Is that something you find often, just celebrating and making it feel really amazing without copy or any feature is just like, holy, you're awesome?

**中文翻译:**
对。但它也可能让人觉得太容易了。我喜欢这个，我也喜欢你提到的关于动画和用户体验产生影响力的观点，这很有趣。你是否经常发现，仅仅通过庆祝和让体验感觉很棒（不需要文案或新功能），就能让用户觉得“天哪，我太棒了”？

---

### [01:01:02] Jackson Shuttleworth

**English:**
This is another thing where it's like when users care about the feature, using not only animation, haptics, sound effects, using... And it's funny, we don't have sound effects on the streak, this is probably something we'll look at in the not too distant in future, but haptics are something we have done a lot of testing on-

**中文翻译:**
这是另一件事：当用户在意某个功能时，不仅要使用动画，还要使用触觉反馈（haptics）、音效……有趣的是，我们在连胜上还没有音效，这可能是我们不久后会研究的方向。但触觉反馈是我们做过大量测试的——

---

### [01:01:18] Lenny Rachitsky

**English:**
Like the phone vibrating in various ways.

**中文翻译:**
比如手机以各种方式振动。

---

### [01:01:20] Jackson Shuttleworth

**English:**
Yeah, exactly, your phone, there being a really cool haptic pattern as you extend your streak, all of this stuff wins. And it's cool because I think it wins... There's a few reasons. One is it just makes you feel good, you get some cool moment in your streak, and we celebrate you, and we celebrate you in this visual way, and your phone's buzzing, it just feels awesome. The other thing it does is it causes you to pause on that screen, and I think there's this desire, as you think through a lot of, as PMs think through, oh, how can I get users through this funnel as painlessly as possible? I talked about [inaudible 01:01:52]. There's a lot of times where I don't, I want you to stop. I want you to stop and land on the screen.

**中文翻译:**
是的，没错。当你延续连胜时，手机会发出一种很酷的触觉模式，这些都能赢。这很酷，因为它之所以奏效有几个原因：一是它让你感觉很好，你在连胜中获得了一个很酷的时刻，我们以视觉方式庆祝你，手机还在振动，感觉太棒了。另一件事是它会让你在那个屏幕上停顿。作为 PM，我们经常想：“哦，我该如何让用户尽可能无痛地通过这个漏斗？”但很多时候，我不希望你快，我希望你停下来，停留在那个屏幕上。

(01:01:56):
You got to be careful not to do this for too many screens, but the one big ones, sometimes I just want you to pause there and enjoy the moment. If I can get you to enjoy the moment more, you're going to care more about your streak, and you're going to be coming back tomorrow. And so, animations that are cool, and that cause you to really soak it in, haptics that feel good, all of that comes together to make you really focus on that moment, all of that just gets users more connected to their streak. So, animation in the right times works well and it's something we've had win quite a lot.

**中文翻译:**
你必须小心不要在太多屏幕上这样做，但在那些重大的时刻，有时我只想让你停在那里享受那一刻。如果我能让你更享受那一刻，你就会更在意你的连胜，明天就会再回来。所以，酷炫的、让你沉浸其中的动画，感觉良好的触觉反馈，所有这些结合在一起，让你真正专注于那一刻，让用户与他们的连胜建立更深的联系。所以，在合适的时机使用动画效果很好，我们在这方面赢过很多次。

---

### [01:02:29] Lenny Rachitsky

**English:**
Who designs the haptic stuff? Is there a haptic designer?

**中文翻译:**
谁来设计触觉反馈？有专门的触觉设计师吗？

---

### [01:02:33] Jackson Shuttleworth

**English:**
For the longest time it would be a product designer, or actually, it initially started as the engineer would be like, all right, would cobble together haptics, based on what they felt good, then it became a product design role, where they would use their best judgment. We actually just recently required an animation studio, Hobbs in Detroit, and now they are the sort of keepers of, they do a lot of motion design work, haptics very close to that, and so they do a lot of that. I do remember trying to hire for a while a haptics contractor, like haptics design, and it was the saddest hiring I've ever done, because it was just, I don't know, it was such a specific... I don't know. I just went through a lot of people who, it's just a really tricky space of kind of sound effects, kind of motion design, sort of technical...

**中文翻译:**
很长一段时间里是产品设计师在做。或者实际上，最初是工程师根据自己的感觉拼凑出来的。后来变成了产品设计师的角色，由他们运用判断力。最近我们收购了一家动画工作室，底特律的 Hobbs，现在他们是这方面的守护者。他们做很多动效设计，触觉反馈与此非常接近，所以他们承担了很多这类工作。我记得有一阵子我想招一个触觉反馈承包商，那是我经历过的最难的招聘，因为这太具体了……我面试了很多人，这真的是一个很微妙的领域，介于音效、动效设计和技术实现之间……

---

### [01:03:22] Lenny Rachitsky

**English:**
Yeah, such a unique role.

**中文翻译:**
是的，非常独特的角色。

---

### [01:03:25] Jackson Shuttleworth

**English:**
Very unique specific skill set.

**中文翻译:**
非常独特且具体的技能组合。

---

### [01:03:27] Lenny Rachitsky

**English:**
Right. And there's very few apps that really need this this deeply, so you're almost creating this person.

**中文翻译:**
对。而且很少有应用需要如此深度的设计，所以你们几乎是在创造这个职位。

---

### [01:03:32] Jackson Shuttleworth

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:03:33] Lenny Rachitsky

**English:**
That is fascinating. That's like a whole podcast on its own. By the way, I was going to say as you're talking about this, I love that it's a win to celebrate people that don't lose their streak, you introduce this way to make it flexible, and that's a big win, and then you go the opposite direction of, if you don't use this feature, you also feel even better.

**中文翻译:**
太迷人了，这本身就能做一期播客。顺便说一下，当你聊到这些时，我喜欢这种逻辑：庆祝那些没有断掉连胜的人是一种胜利；你引入了灵活性，这又是一个巨大的胜利；然后你又走向反方向——如果你不用这个灵活性功能，你会感觉更棒。

---

### [01:03:51] Jackson Shuttleworth

**English:**
Well, and it's funny, you talked about the danger of feature bloat, or we sort of talked about the danger of feature bloat, this is actually something I'm constantly thinking about with this. We have the streak, but then we also have the perfect streak, and we count how many weeks you've had a perfect streak. Well, all of a sudden we have two streak numbers that are competing with each other. It's funny, we actually don't introduce the concept of a perfect streak until after you've hit seven days, and some of this is just because the cognitive load of additional streak features. A lot of our cooler streak features, you got to get on a long enough streak. And not to say we haven't tested it because we have, because we test everything, introducing these features earlier, but what we've found is that pretty universally they lose when we introduce too many things, too many concepts to users too early in the experience, it's just hard for them to manage.

**中文翻译:**
是的。你谈到了功能膨胀的危险，我也一直在思考这个问题。我们有连胜，然后又有完美连胜，我们还计算你保持了多少周的完美连胜。突然之间，我们有了两个相互竞争的连胜数字。有趣的是，我们实际上直到你达到 7 天后才会引入“完美连胜”的概念，部分原因就是为了减轻额外功能的认知负荷。我们很多更酷的连胜功能，你必须达到足够长的连胜天数才能看到。并不是说我们没测试过更早引入（因为我们测试一切），但我们发现，如果太早向用户介绍太多东西、太多概念，实验几乎无一例外都会输，因为用户很难处理。

---

### [01:04:39] Lenny Rachitsky

**English:**
Okay, sweet. I know that we can go down this track for hours and hours, there's endless learnings about all the things you all have done along the journey. I want to shift to talking about how your team operates. So, there's a lot of threads you touched on of just how a team can do this so well, shift 600 experiments, as you said, continue to find opportunity. What are some maybe lessons or advice you'd have for folks that are like, oh wow, I want to work more like this, from your team's experience, how does your team to operate that folks can learn from?

**中文翻译:**
好，太棒了。我知道我们可以就这个话题聊上好几个小时，你们在这一路上有无穷无尽的经验。我想转向聊聊你们团队是如何运作的。你刚才触及了很多线索，关于一个团队如何能做得这么好，运行 600 个实验并持续发现机会。对于那些想学习这种工作方式的人，根据你团队的经验，你们是如何运作的？有什么教训或建议吗？

---

### [01:05:13] Jackson Shuttleworth

**English:**
Yeah, maybe just a little bit of context. Duolingo cares a lot about... So, most of our teams are metric-based teams. So, we do the most work with streak, but the metric, what we really care about at the end of the day is CURR, and DAUs, because we see that DAUs hit CURR. And so, when you can be really laser focused on, my goal each quarter is to make this metric go up, I think it's much easier to make sure that you're working on the highest ROI thing. I think when you think more about like, oh, I want to make this feature better, I think it's easier to get lost in what better means, and how you think about better. And so, I do think that having a really strong degree of focus as a team on what is the metric that I'm caring about, and how is that directing my efforts is-

**中文翻译:**
好，先补充一点背景。多邻国非常看重……我们的大多数团队都是“基于指标”的团队。虽然我们在连胜上投入最多，但归根结底，我们真正关心的指标是 CURR 和 DAU，因为我们看到 DAU 受 CURR 驱动。当你能像激光一样聚焦于“我每季度的目标就是让这个指标上升”时，我认为更容易确保你在做投资回报率（ROI）最高的事情。如果你更多地想“哦，我想让这个功能变得更好”，很容易迷失在“更好”意味着什么以及如何定义“更好”中。所以，我认为作为一个团队，对所关注的指标保持高度专注，并以此指导工作，是非常关键的——

---

### [01:05:59] Lenny Rachitsky

**English:**
Versus feature-oriented. So, basically your teams are structured around a metric/a goal/outcome versus we own this feature, or this product.

**中文翻译:**
而不是以功能为导向。所以，基本上你们的团队是围绕指标、目标或结果组建的，而不是“我们拥有这个功能”或“这个产品”。

---

### [01:06:07] Jackson Shuttleworth

**English:**
So, retention owns streak, I guess, but that's only because we've seen streak drive CURR better than any feature. But we are not, we have this IAP hook with our streak freeze purchases, there are other teams that work on, that can and have worked on the streak, because it's not ours to say, no, no, no, we do all the iterations here, we just know that it drives our metric better. In the same way that leaderboards, we have a team that focuses on how much time you spent, we want users to spend more time on Duolingo so they're learning more. Leaderboards is the best vector for doing it, so that team does a lot of leaderboards work, but every now and then I have an idea that I think will be highly retentive, and I will go in, and I'll pitch to them, and then we'll do some change to the leaderboard to make it more retentive.

**中文翻译:**
留存团队“拥有”连胜功能，但这只是因为我们看到连胜比任何其他功能都能更好地驱动 CURR。但我们并不是唯一的，比如连胜激冻的购买涉及应用内购买（IAP），其他团队也可以、并且确实参与过连胜功能的开发。我们不会说：“不不不，所有的迭代都得我们做。”我们只是知道它最能驱动我们的指标。同样，排行榜团队专注于用户时长，我们希望用户在多邻国上花更多时间以便学到更多。排行榜是实现这一目标的最佳载体，所以那个团队做很多排行榜的工作。但偶尔我也有一个我认为能提高留存的想法，我会去找他们提案，然后我们对排行榜做一些改动来提高留存。

(01:06:53):
But I do think having that clear metric of we're trying to drive CURR not we're trying to just make this feature better, helps at least make sure, give the team clear marching orders, and that focus I think is really good for prioritizing backlog.

**中文翻译:**
但我确实认为，拥有“我们要驱动 CURR”而不是“我们要让这个功能更好”的清晰指标，有助于确保团队有明确的行动指令。这种专注对于排列待办事项（backlog）的优先级非常有好处。

---

### [01:07:07] Lenny Rachitsky

**English:**
Cool. This is a really important point, this is the same way Airbnb worked, when I worked there for a long time, is it's, here's a goal that we want your team to be responsible for, you can work on any product you need to hit this goal, as you said, often various products are most connected to what you're doing, but what you're describing is, even though a team's kind of... I imagine you own it from a [inaudible 01:07:29] perspective, and you're like are the shepherd of this part of the feature because it hits your goal, helps your goal most. But any other team can come in and be like, hey Jackson, we need to work on some streak stuff to help with learning, you're like, go for it. Just a tangent there. Do they work really closely with your team if they want to do some work in the code? How does that work logistically?

**中文翻译:**
酷。这是一个非常重要的点。我在 Airbnb 工作时也是这样的：公司给团队一个负责的目标，你可以为了达成目标去改动任何产品。正如你所说，通常某些产品与你的目标联系最紧密。你描述的是，虽然你的团队在某种程度上是这个功能的“牧羊人”，因为它最能帮到你的目标，但其他团队也可以过来说：“嘿 Jackson，我们需要改动一些连胜的东西来帮助学习。”你会说：“去吧。”顺便问一下，如果他们想改代码，会和你们团队密切合作吗？物流/流程上是怎么运作的？

---

### [01:07:49] Jackson Shuttleworth

**English:**
Yeah. If you are, again, this is where I say there's soft ownership, we're not against teams doing things to the streak, but if we're going to do something given we probably have multiple quarters worth of a roadmap around the streak... I say probably, we do. Multiple quarters of roadmap for what we can do to the streak, if other teams want to come and mess with it, okay, we got to just figure out how is that going to work with what our plans for the streak were, how do we make sure a lot of times when teams are coming in thinking, hey, let's do this to the streak, they're in context that we might have, and so there's as much of a much simpler version of what we're doing now, a bit of a knowledge sharing, of saying, all right, well, this is what we think about the streak, this is what we've seen work, hasn't worked, how does that influence some of the hypothesis that you have. And so, I think getting that really... Making sure the juice is worth the squeeze.

**中文翻译:**
是的。这就是我说的“软所有权”。我们不反对其他团队改动连胜功能，但考虑到我们可能有好几个季度的连胜路线图（实际上确实有），如果其他团队想来改动，我们必须搞清楚这如何与我们的计划协调。很多时候，当其他团队想做某事时，我们会进行知识分享，告诉他们：“好吧，这是我们对连胜的看法，这是我们见过的有效和无效的做法，这如何影响你的假设？”所以，关键是确保“投入产出比”是值得的。

---

### [01:08:32] Lenny Rachitsky

**English:**
Good old-fashioned product management work right there.

**中文翻译:**
这就是老派但扎实的产品管理工作。

---

### [01:08:34] Jackson Shuttleworth

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:08:35] Lenny Rachitsky

**English:**
Cool. What else is interesting about how you all operate and how you all work to achieve this sort of success?

**中文翻译:**
酷。关于你们的运作方式以及如何取得这种成功，还有什么有趣的吗？

---

### [01:08:41] Jackson Shuttleworth

**English:**
Again, my team lead runs, Antonia runs the most... A really process, if you're going to run this experiments, you have to be really process-oriented and really thoughtful about which experiments am I going to run when, how is that going to set up the next one, there's heavy Jira automation, I think sometimes the Atlassian suite makes my eyes bleed, but there's a lot of times where that degree of process helps the team unblock engineers and make them move really fast. And so, making sure that you have really good process around how are you going to run so many experiments, it's worth investing in.

**中文翻译:**
同样，我的团队负责人 Antonia 运行着一套非常严谨的流程。如果你要运行这么多实验，你必须非常注重流程，深思熟虑什么时候运行哪个实验，以及它如何为下一个实验做铺垫。我们有大量的 Jira 自动化。虽然有时 Atlassian 套件让我看得眼花缭乱，但这种程度的流程确实能帮助团队为工程师扫清障碍，让他们跑得飞快。所以，为了运行这么多实验，建立一套非常好的流程是值得投资的。

---

### [01:09:17] Lenny Rachitsky

**English:**
Can you follow that thread actually? Just when you say that, what does that look like? What are some elements of that process to make this work efficiently?

**中文翻译:**
你能顺着这个话题细说吗？你说的流程具体是什么样的？为了让工作高效运行，这个流程包含哪些要素？

---

### [01:09:25] Jackson Shuttleworth

**English:**
All the way down to, really detailed roadmaps around, all right, we're running this experiment is based on the results of this experiment, or might hook into an element of this feature, how do we make sure that we're lining up implementation on this so that as soon as this thing runs and we're ready to go, we can start rolling out the next one. I hate features just sitting around and us not, again, continuing that thread. So, it's not just thinking about what's our engineering bandwidth, but also what's the design bandwidth to make sure that we have the next iteration of this feature ready to go. We're planning months out, as we think about these feature iterations, even small ones, feature iterations, because when you lose cycles, not pushing on a feature, it's just sort of lost opportunity. And so, everything from being thoughtful about engineering roadmaps to design roadmaps to product roadmaps, all of that needs to come together in a system.

**中文翻译:**
一直细化到非常详尽的路线图：好吧，我们运行这个实验是基于那个实验的结果，或者可能涉及这个功能的某个元素。我们如何确保开发进度衔接得当，以便一个实验刚跑完，我们就能立即开始发布下一个。我讨厌功能闲置在那里而我们没有继续推进。所以，不仅要考虑工程带宽，还要考虑设计带宽，以确保功能的下一次迭代已经准备就绪。我们会提前几个月规划这些功能迭代，即使是微小的迭代。因为当你浪费周期而不推进功能时，那就是在浪费机会。所以，从周密的工程路线图到设计路线图再到产品路线图，所有这些都需要整合到一个系统中。

---

### [01:10:19] Lenny Rachitsky

**English:**
So, essentially, mapping dependencies across function, and you're saying in Jira you can do this.

**中文翻译:**
所以，本质上是映射跨职能的依赖关系，你说在 Jira 里可以做到这一点。

---

### [01:10:25] Jackson Shuttleworth

**English:**
You can do a lot of it in Jira, there is a non-zero amount of Google Docs that we have, that sometimes does things a little bit... I don't know, sometimes it just looks a little bit nicer, it's a little more flexible.

**中文翻译:**
在 Jira 里可以做很多，但我们也用了不少 Google Docs，有时它处理事情会……我不知道，有时它看起来更漂亮、更灵活一点。

---

### [01:10:36] Lenny Rachitsky

**English:**
Yeah. [inaudible 01:10:38].

**中文翻译:**
是的。

---

### [01:10:37] Jackson Shuttleworth

**English:**
But Jira is our, it is where the motherload of process is.

**中文翻译:**
但 Jira 是我们的核心，是流程最集中的地方。

---

### [01:10:42] Lenny Rachitsky

**English:**
Great. Okay. What else?

**中文翻译:**
太好了。好，还有吗？

---

### [01:10:44] Jackson Shuttleworth

**English:**
Another thing that I'll just say is, we really resist the urge to do the big V1. And I think this is, I shared the streak goal example, where, a lot of times when we're exploring something we will say, okay, well, that's cool, how do we strip away a bunch of stuff and figure out what our core hypothesis is? And then, just ship that thing first as a V1. Because it's easy, and I've found this time and time again, it's easy to add things, features that make them win, I've worked in retention engagement long enough, I can add, I know enough things to pull, and bells to add, and whistles to make something win, but there's a lot of times where it's like cool, t [inaudible 01:11:27] because all the whistles you added, not because of what your core hypothesis was, and a lot of times if you can just really simplify what the feature is, it's also much easier to ship, it's easier to design.

**中文翻译:**
我想说的另一件事是，我们非常抵制做“庞大的 V1”的冲动。我之前分享过“连胜目标”的例子。很多时候当我们探索某事时，我们会说：“好吧，这很酷，但我们如何剥离掉一堆东西，找出我们的核心假设是什么？”然后，先作为 V1 发布那个核心的东西。因为增加功能让实验赢很容易，我在留存和参与度领域工作够久了，我知道该拉动哪些杠杆、增加哪些花哨的功能来让某个东西赢。但很多时候，实验赢了是因为你加的那些花哨功能，而不是因为你的核心假设。如果你能真正简化功能，它也会更容易发布、更容易设计。

(01:11:37):
You're not designing for a whole system, you're designing for something much simpler. And so, getting everybody to think that way, allows us to end up shipping faster, shipping simpler, designing faster, getting faster approval, getting insight, and then doing what I talked about with streak goal, being able to run iteration after iteration after iteration, add these things iteratively. And then not only by doing this are you able to move faster, but you get confidence at each step of the way, that, hey, my series of hypotheses is actually born out. Or if it's not, cool, then we're going to drop that part of the feature, and then just ship what actually matters.

**中文翻译:**
你不是在为整个系统设计，而是在为更简单的东西设计。让每个人都这样思考，能让我们发布得更快、更简洁，设计得更快，获得审批更快，获取洞察也更快。然后就像我说的“连胜目标”那样，能够进行一轮又一轮的迭代，迭代地增加内容。这样做不仅能让你跑得更快，还能让你在每一步都获得信心，确认你的假设系列确实得到了验证。如果没验证，那好，我们就砍掉那部分功能，只发布真正起作用的部分。

---

### [01:12:18] Lenny Rachitsky

**English:**
If I can try to summarize the broad lesson so far that I'm hearing, and maybe you would've shared this, but I'm just thinking, if I were to try to design a company to operate, that we all operate, you essentially map all the levers that drive the business. So, you have this mapping of all the metrics that drive up to growth and daily active users. CURR ended up being the biggest specific metric to drive growth long term, so there's imagining a tree of all the opportunities you could work on, you found this is what is most connected to our growth. You basically just start mining, I don't know if mining is the right metaphor, but just looking for things that move that specific metric.

**中文翻译:**
如果我尝试总结一下到目前为止我听到的核心经验（也许你本来也想分享）：如果我要设计一家公司的运作方式，基本上就是映射出驱动业务的所有杠杆。你拥有所有驱动增长和 DAU 的指标映射。CURR 最终成为了驱动长期增长的最关键指标。想象一棵包含所有工作机会的树，你发现这个指标与增长联系最紧密。然后你基本上就开始“挖掘”（我不确定挖掘是不是最好的比喻），寻找能推动该特定指标的东西。

(01:13:04):
You just look and poke and explore, and then once you find one, you just go real deep on trying a lot of different... You come up with a hypothesis, and a strategy of here's how we think we can do this, and how we can move this, and then you just try a bunch of stuff. There's also this element of the Arrested Development quote, "There's always money in the banana stand," comes to mind, where it's just keep working on, see there's more, there's going to be more opportunity at this.

**中文翻译:**
你不断观察、试探和探索，一旦发现一个有效的点，你就深入挖掘，尝试很多不同的方案。你提出假设和策略：“我们认为可以这样做，以此推动指标。”然后你就尝试一堆东西。这让我想起《发展受阻》（Arrested Development）里的那句名言：“香蕉摊里总是有钱的。”意思就是持续深挖，你会发现总有更多的机会。

---

### [01:13:29] Jackson Shuttleworth

**English:**
When I joined Duolingo, the PM that I took over for, Anton, who used to lead the retention team, I remember saying, "Dude, the streak, it just counts up, you guys have been testing on it for years, how much more work can we do on the streak?" And he was like, Jackson, you child... He didn't say exactly this, but this is how I felt it. Like, Jackson, you child, we're not even 30% of the way optimized. And four years later, I say that with such conviction, we are so far away from... We've made a ton of strides, but we are still so far away, and every quarter where we ship a ton of wins and improvements to the streak, it just continues to prove to me that there is so much more to be done.

**中文翻译:**
当我加入多邻国时，我接替的 PM Anton（他以前领导留存团队），我记得我说过：“哥们，连胜不就是个数数的功能吗，你们都测了这么多年了，还能玩出什么花样？”他当时就像在看一个孩子（他没明说，但我感觉到了），他说：“Jackson，你太天真了，我们连 30% 的优化都没达到。”四年后的今天，我可以非常坚定地说：我们离终点还远得很……虽然我们取得了巨大的进步，但依然有巨大的空间。每个季度当我们发布大量的连胜功能改进和胜利时，它都在不断向我证明：还有太多的工作可以做。

(01:14:11):
So, I think your framing of it is... And I would say there's a lot of thought that goes into, again, I talk about the strength of the hypothesis that you have to have as you start to build out larger feature strategy, I do think it's really important to not just do a bunch of random stuff but do it with intent, with a goal in mind, otherwise, you do end up in these local maximas. But yeah, there's still a bunch of stuff that we haven't tried that I think we have high confidence in working out and so we'll keep doing that.

**中文翻译:**
所以，我认为你的总结很到位。我想说，在构建更大的功能策略时，需要投入大量的思考来建立强有力的假设。不只是做一堆随机的事情，而是要有意图、有目标地去做，这一点非常重要，否则你最终会陷入局部最优解。但是，确实还有一堆我们还没尝试过的东西，我对它们很有信心，所以我们会继续做下去。

---

### [01:14:45] Lenny Rachitsky

**English:**
Are there any other, say, lasting lessons from this journey that if someone were to try to operate this way, build streaks into their product, anything you'd recommend?

**中文翻译:**
关于这段历程，还有什么持久的教训吗？如果有人想以这种方式运作，或者在他们的产品中加入连胜机制，你有什么建议吗？

---

### [01:14:55] Jackson Shuttleworth

**English:**
Yeah, I really do think it starts with... Streaks are an engagement hack. You can make your app more retentive, I'm almost positive, almost every app out there can make it more retentive. It is loss aversion, that is, again, armchair psychologist Jackson, it's just a thing that works on humans. But if your app is not something that users want to use every day, or whatever cadence you want your app to be, to work on, it's going to be, you're only going to get so much from that streak, and honestly, it's probably going to distract you from what really should matter, which is making your app something that people want to use every day.

**中文翻译:**
是的，我真的认为首先要明确：连胜是一个参与度黑客。你可以让你的应用更具留存力，我几乎可以肯定，市面上几乎每个应用都可以做到这一点。这就是损失厌恶，作为“业余心理学家” Jackson，我知道这在人类身上非常奏效。但如果你的应用本身不是用户想每天（或以任何你期望的频率）使用的东西，那么连胜机制能带给你的收益是有限的。坦白说，它甚至可能会分散你的注意力，让你忽略了真正重要的事情——即把应用做成人们每天都想用的东西。

(01:15:35):
And so, if you start focusing on the streak but you haven't made that an enjoyable experience, you're just going to waste a lot of time, honestly. And so, I think making sure that you have your core loop of your app figured out, that it is giving value to users, it is something that they want to come back to every day, that really sets the stage for something to layer a streak on. So, resist the temptation, if you don't think you've reached that point, to go too hard down the path of streak.

**中文翻译:**
所以，如果你开始专注于连胜，但还没把核心体验做得令人愉悦，你只是在浪费时间。我认为，确保你已经搞清楚了应用的核心循环（core loop），确保它能给用户提供价值，是他们每天都想回来的东西，这才是叠加连胜机制的基础。所以，如果你觉得还没达到那个阶段，请抵制住过度投入连胜机制的诱惑。

---

### [01:16:03] Lenny Rachitsky

**English:**
That's a really good point. Just like a streak is not going to solve your problems if people don't actually care about the core value you're providing.

**中文翻译:**
非常有道理。如果人们根本不在乎你提供的核心价值，连胜机制也解决不了你的问题。

---

### [01:16:09] Jackson Shuttleworth

**English:**
No, and honestly, it'll probably cause more problems if what you end up focusing on is how do I make the streak highly engaging, but your app is... You're wasting time that could otherwise be better spent on solving more critical problems. So, that's one learning, the other thing that I'll say is, we met with one of our board members, Bing, Bing Gordon, a few weeks, or a few months ago rather, and he had this comment where he was just like, "The reason why users care about your streak so much is because you care about your streaks much." You being Duolingo. The reason why users care about our streak so much is because Duolingo cares about the streaks so much. And we're like, what do you mean? Well, he's like, well, after every session you see a big streak screen, and it's animated cooler than almost any other screen in the app, and then sometimes you see some other screens, and there's all these other... You don't let a user forget it, you talk about them in messages.

**中文翻译:**
没错。坦白说，如果你最终专注于如何让连胜极具吸引力，而你的应用本身有问题，那可能会导致更多问题。你在浪费本可以用来解决更关键问题的时间。这是第一个教训。另一件事是，几个月前我们见了一位董事会成员 Bing Gordon，他评论说：“用户之所以这么在意连胜，是因为你们（多邻国）非常在意连胜。”我们问：“你什么意思？”他说：“你看，每次练习结束后，用户都会看到一个巨大的连胜屏幕，它的动画比应用中几乎任何其他屏幕都酷。你们不让用户忘记它，你们在消息里不断提到它。”

(01:17:01):
And so, I think it's worth thinking about, look, if you're going to build a streak, and then you're going to [inaudible 01:17:06] it off into the corner of your app, where users aren't going to see it, they're probably not going to care about it as much, which might be fine, because there might be other levers that you think are more important to pull on, but there's a reason why we focus as much on the streak as we do, and that's because we want it to be top of mind for users. And that's not by accident then that users start to care about it. And so, I think just as you're thinking about building the streak, making sure that you're giving it the visibility it deserves, if you want it to have the kind of impact that Duolingo has, it's sort of an important hierarchy principle to think about as you design things.

**中文翻译:**
所以，我认为值得思考的是：如果你构建了连胜机制，却把它藏在应用的某个角落，用户看不到它，他们可能也就不会那么在意。这也许没问题，因为你可能觉得有其他更重要的杠杆。但我们之所以如此关注连胜，是因为我们希望它成为用户首先想到的东西。用户开始在意它并不是偶然的。所以，当你考虑构建连胜机制时，如果你希望它产生像多邻国那样的影响力，确保给予它应有的可见性，这是设计时需要考虑的一个重要的优先级原则。

---

### [01:17:42] Lenny Rachitsky

**English:**
That's such a good point. You look for cues to the app of tell me what I should pay attention to, what's important? If you're just like fire, explosions, you made a streak, oh, maybe I should pay attention to this feature. And then the push notifications obviously encourage you there too. Anything else along those lines?

**中文翻译:**
非常有道理。用户会寻找应用的暗示：“告诉我该关注什么？什么是重要的？”如果你展示火焰、爆炸效果，庆祝连胜，用户就会想：“哦，也许我该关注这个功能。”推送通知显然也在朝这个方向引导。还有什么类似的吗？

---

### [01:17:58] Jackson Shuttleworth

**English:**
Maybe final thing is, look, we ran so many tests on our Duolingo streak to figure out what worked. We have a philosophy at Duolingo, of test it first. We are a lot of times willing to test things. I really think that if you're going to try to introduce a streak, or you want to improve on the streak you have, don't get too caught up in the philosophy of everything, make sure your hypotheses feel like they're good, but my recommendation is just try things. And this is, again, you said it earlier, it's like this is as much human psychology as anything, and as soon as that becomes the case, you kind of just got to understand what users respond to. And the easiest way to do that is to stop spending time batting around ideas in a conference room and just try some stuff. So, huge recommendation to if you're going to invest in a streak, try and figure out what works through testing with users rather than trying to get it perfect on the first try.

**中文翻译:**
最后一点是：我们在多邻国连胜上运行了无数测试来找出有效的方法。多邻国有一种“先测试再说”的哲学。我们很多时候都愿意去测试。我真的认为，如果你要引入连胜机制，或者想改进现有的连胜，不要太纠结于各种理论，确保你的假设看起来不错，然后我的建议就是：去尝试。正如你之前说的，这很大程度上是人类心理学，一旦涉及心理学，你就必须了解用户对什么有反应。最简单的方法就是停止在会议室里反复讨论想法，直接去试。所以，如果你要投入连胜机制，我强烈建议通过用户测试来找出有效的方法，而不是试图在第一次尝试时就做到完美。

---

### [01:18:57] Lenny Rachitsky

**English:**
Say someone's listening and they're like, should we do streak, is this worth doing? What's your take on just the chances that a streak feature would be helpful to another consumer?

**中文翻译:**
假设有人在听，他们在想：“我们该做连胜吗？这值得做吗？”你认为连胜功能对其他消费级应用有帮助的机会有多大？

---

### [01:19:07] Jackson Shuttleworth

**English:**
I am well known for saying in the company that I think every team, every app could benefit from a streak. Now, how you implement it is very different, and I think you got to, what is your user's use case? If they're going to come use, I don't know, tax software... Okay, you know what? Now that I say this, tax software would be a hard one, but maybe it's all about you need users to come back every day, during the tax season, or how many times... I don't know. Now, that I say this out loud-

**中文翻译:**
我在公司里是出了名的爱说这句话：我认为每个团队、每个应用都能从连胜机制中受益。当然，实现方式会非常不同。你必须考虑：用户的用例是什么？如果他们用的是，我不知道，报税软件……好吧，既然我提到了报税软件，那确实挺难的。但也许在报税季，你需要用户每天回来，或者多少次……我不知道。既然我大声说出来了——

---

### [01:19:35] Lenny Rachitsky

**English:**
Times you upload your [inaudible 01:19:37] forms.

**中文翻译:**
比如你上传表格的次数。

---

### [01:19:37] Jackson Shuttleworth

**English:**
Yeah, that is a hard use case. But the vast majority of companies I think have a good idea of like, all right, here is my ideal use case, I want users to come here three times a month, that would be ideal. Or four times a month. You can build a streak to work. Peloton has weekly streaks because the idea of doing a Peloton workout every single day was hard for this user during COVID. It was just like every now and then you get on the Peloton, that was great, but the idea of a weekly streak was something that I could keep up. And so, I think figure out what your usage pattern is, as a user, and then build your streak around it. But as long as you're not a really, again, the tax example is probably a good counterfactual, but as long as you have some degree of frequency in your use, I think almost anything can have a streak.

**中文翻译:**
是的，那是个很难的用例。但绝大多数公司应该对“理想用例”有清晰的认识，比如：“我希望用户每月来三次，那是理想状态。”或者每月四次。你可以构建一个行得通的连胜机制。Peloton 就有“周连胜”，因为在疫情期间，让用户每天都进行 Peloton 锻炼太难了。偶尔上一次 Peloton 挺好，而“周连胜”是用户可以坚持下去的。所以，找出你的用户使用模式，然后围绕它构建连胜。只要不是像报税那种极端例子，只要有一定的频率，我认为几乎任何东西都可以有连胜机制。

---

### [01:20:29] Lenny Rachitsky

**English:**
So, Duolingo, it's, again, a $14 billion company, this feature, possibly the most contributing factor, other than the core product, to that level of success in market cap, and it's hard to imagine another just feature of a product that has had this much impact on growth and revenue and building this sort of business. So, I love that we spent this much time on it, the motherload, the motherload of advice and insights. So, thank you again for putting-

**中文翻译:**
所以，多邻国是一家市值 140 亿美元的公司，而这个功能可能是除了核心产品之外，对这种市值规模贡献最大的因素。很难想象还有哪个产品的单一功能对增长、收入和构建这种规模的业务产生了如此大的影响。所以我很高兴我们花了这么多时间来讨论它，这真是干货满满的建议和洞察。再次感谢你——

---

### [01:20:59] Jackson Shuttleworth

**English:**
Of course. Very fun.

**中文翻译:**
不客气，非常有趣。

---

### [01:21:00] Lenny Rachitsky

**English:**
With that, we've reached our very exciting lightning round. Are you ready?

**中文翻译:**
接下来进入我们非常激动人心的闪电轮问答。准备好了吗？

---

### [01:21:05] Jackson Shuttleworth

**English:**
I'm ready.

**中文翻译:**
准备好了。

---

### [01:21:06] Lenny Rachitsky

**English:**
First question, what are two or three books you've recommended most to other people?

**中文翻译:**
第一个问题：你向别人推荐最多的两三本书是什么？

---

### [01:21:10] Jackson Shuttleworth

**English:**
All right, I'll start with A Guide to Midwest Conversation. So, I'm based in Kansas City, I'm a proud Midwesterner, and us Midwesterners talk in a certain way. I think you hear about Minnesota nice, but we tend not to say what we mean, and it is a very funny primer into what Midwesterners actually mean when they say what they say. So, highly recommend reading that.

**中文翻译:**
好，我先推荐《中西部对话指南》（A Guide to Midwest Conversation）。我住在堪萨斯城，是一个自豪的中西部人，我们中西部人说话有特定的方式。你可能听说过“明尼苏达式的友善”，但我们往往不直说我们的意思。这是一本非常有趣的入门书，告诉你中西部人说话时的真实含义。强烈推荐阅读。

---

### [01:21:33] Lenny Rachitsky

**English:**
I like that you give that to people, just like, here's what I might be telling you, which you may not read.

**中文翻译:**
我喜欢你把这本书送给别人，就像在说：“这是我可能会对你说的话，但你可能读不懂。”

---

### [01:21:38] Jackson Shuttleworth

**English:**
My wife is German, and I gave it to her so she could better understand.

**中文翻译:**
我妻子是德国人，我把这本书给了她，好让她能更好地理解我。

---

### [01:21:40] Lenny Rachitsky

**English:**
I see German being the opposite of that, okay.

**中文翻译:**
我明白，德国人正好相反，好的。

---

### [01:21:44] Jackson Shuttleworth

**English:**
Very different. Another book, this is a good one, Fate is the Hunter. This is a really cool book, it's a memoir of one of the early commercial airline pilots, and it is wild to hear the stories about what flying was back in the day. I'm a former management consultant, I flew every week for almost six years, and I never once had to worry about, am I going to make it to the other end of this flight alive? That was not the case back then, and so some of the stories about what it used to be like to be a pilot on some of these planes, before modern aviation technology, is fascinating, and makes you really appreciate what we have.

**中文翻译:**
非常不同。另一本书是《命运是猎人》（Fate is the Hunter），这本很棒。这是一本非常酷的书，是一位早期商业航空公司飞行员的回忆录。听那些关于当年飞行的故事真的很疯狂。我以前是管理顾问，在将近六年的时间里每周都飞，但我从未担心过我能不能活着飞到终点。但在那个年代情况并非如此。在现代航空技术出现之前，作为那些飞机的飞行员是什么感觉，这些故事非常迷人，会让你真正珍惜我们现在拥有的一切。

---

### [01:22:20] Lenny Rachitsky

**English:**
It feels good to read a book like that, being a software PM or engineer or whatever, how different that life is.

**中文翻译:**
作为一个软件 PM 或工程师，读这样一本书感觉很好，能感受到那种生活是多么不同。

---

### [01:22:28] Jackson Shuttleworth

**English:**
Hardware is hard.

**中文翻译:**
硬件很难。

---

### [01:22:28] Lenny Rachitsky

**English:**
Hardware. Oh man, it's not haptic design. Okay. Next, unless there's any other books you're going to share? No, okay, great. What's a favorite recent movie or TV show you've really enjoyed?

**中文翻译:**
硬件，天哪，那可不是触觉设计。好，下一个，除非你还有其他书要分享？没有了，好。最近你非常喜欢的电影或电视节目是什么？

---

### [01:22:40] Jackson Shuttleworth

**English:**
So, I have two kids, I watch a lot of Bluey, it's really good, I swear, it brings me no shortage of joy. But adult show or show not meant for four-year-olds that I have watched, I just finished the latest season of Emily in Paris, man, wonderful. I realize it's not the highest brow of television, but just beautiful people in beautiful cities, solving problems that are not earth-shattering, sometimes it is nice to just tune out. Also, I'm learning French on Duolingo, slight plug for the app, I can understand a lot of the French that is being spoken, and there is no better joy than having invested as much time as I have in French, and actually being able to use it. So, huge fan of Emily.

**中文翻译:**
我有两个孩子，所以我看了很多《布鲁伊》（Bluey），它真的很棒，我发誓，它带给我无穷的快乐。但说到成人节目，或者说不是给四岁小孩看的节目，我刚看完最新一季的《艾米丽在巴黎》（Emily in Paris），天哪，太精彩了。我知道它不是那种高雅的电视剧，但看着漂亮的人在美丽的城市里解决一些非全球性的问题，有时这种“放空”的感觉很好。而且，我正在多邻国上学法语（顺便给应用打个广告），我能听懂剧里说的很多法语。没有什么比投入了这么多时间学法语后，发现真的能用上更让人快乐的了。所以，我是艾米丽的超级粉丝。

---

### [01:23:21] Lenny Rachitsky

**English:**
That is so funny, what a fun Venn diagram of interests. My mother-in loves Emily in Paris, I saw someone tweeting about what Visa is she on? How is she still in Paris?

**中文翻译:**
太有趣了，多么奇妙的兴趣交集。我岳母也爱《艾米丽在巴黎》。我看到有人发推特问：“她拿的是什么签证？她怎么还在巴黎？”

---

### [01:23:33] Jackson Shuttleworth

**English:**
Yeah. You best just not ask questions, there's a lot of questions for this show that are better left unasked.

**中文翻译:**
是的，你最好别问。这部剧里有很多问题最好别深究。

---

### [01:23:40] Lenny Rachitsky

**English:**
[inaudible 01:23:40] Okay. Do you have a favorite product you recently discovered that you really like? Other than Duolingo.

**中文翻译:**
好。除了多邻国，你最近有没有发现什么非常喜欢的其他产品？

---

### [01:23:44] Jackson Shuttleworth

**English:**
Last week I went to Home Depot, and I bought a new ladder, and ladder innovations, you don't think of often, but you can make one of the legs go a little bit further than the other leg. And as somebody like myself who has a house that is built on a slight slope, every time I go up on my ladder, I take my life in my hands, but with this ladder, I'm always even. I cleaned my gutters twice last week just because of how awesome this ladder has... How much this ladder has changed my life. So, ladder innovation, I don't think it gets talked enough about and so I'm happy to give it the spotlight it deserves.

**中文翻译:**
上周我去家得宝（Home Depot）买了一把新梯子。你可能不常想到梯子也有创新，但这把梯子可以让其中一条腿比另一条腿伸得更长一点。像我这样房子建在斜坡上的人，每次爬梯子都像是在玩命，但有了这把梯子，我总能保持平衡。上周我清理了两次排水沟，就因为这把梯子太棒了……它改变了我的生活。所以，梯子创新，我觉得这方面讨论得不够多，我很乐意给它应有的关注。

---

### [01:24:18] Lenny Rachitsky

**English:**
I appreciate you doing that, and it's the first ladder recommendation we've had on the podcast. Two more questions. Do you have a favorite life motto that you really find useful in work or in life they share with folks?

**中文翻译:**
感谢你的分享，这是我们播客历史上第一个关于梯子的推荐。还有两个问题。你有没有什么觉得在工作或生活中非常有用的座右铭？

---

### [01:24:26] Jackson Shuttleworth

**English:**
This probably will not be much of a surprise based on how I've talked about our willingness to test things, but you miss 100% of the shots that you don't take. I'm a big fan of just trying things, even if your possibility of success is not 100, because you learn a lot along the way.

**中文翻译:**
基于我之前谈到的对测试的热衷，这可能并不令人意外：如果你不出手，你的命中率就是零（You miss 100% of the shots you don't take）。我非常推崇“去尝试”，即使成功的可能性不是 100%，因为一路上你会学到很多。

---

### [01:24:44] Lenny Rachitsky

**English:**
Final question, do you have any fun traditions at Duolingo, amongst either the PM team or the company in general that might be delightful to share?

**中文翻译:**
最后一个问题：在多邻国，无论是 PM 团队还是整个公司，有没有什么有趣的传统可以分享？

---

### [01:24:53] Jackson Shuttleworth

**English:**
We have way too many traditions to count. I will share the weird tradition that we do at every retention standup, and this started during the pandemic, we obviously used to stand up in person, and then when we went remote, we did this thing where whoever's the last person to go would count down 3, 2, 1, and then we'd all try to clap at the same time, which was kind of fun and dorky, but we fell in love with it, and four years later we're still doing it. Recently we've added, we all say yee-haw in unison afterwards, I can't tell you why. But trying to synchronize a clap via Zoom, and then all shouting yee-haw... I did this in a phone booth the other day and after I came out someone told me, "You know that those aren't as soundproof as you think," but when you get a good opportunity to give a yee-haw, you can't pass up on it, so.

**中文翻译:**
我们的传统多得数不清。我分享一个我们在每次留存团队站会（standup）上做的奇怪传统。这始于疫情期间，以前我们是面对面站会，远程办公后，我们规定最后一个发言的人会倒数 3、2、1，然后我们所有人尝试同时鼓掌。这有点傻但很有趣，我们爱上了这个环节，四年后还在做。最近我们又加了一项：鼓掌后大家齐声喊“yee-haw”（呀呼），我也不知道为什么。但在 Zoom 上同步鼓掌，然后一起大喊“yee-haw”……前几天我在电话亭里这么干，出来后有人告诉我：“你知道这些电话亭并不像你想象的那么隔音吧。”但当你有一个大喊“yee-haw”的好机会时，你绝对不能错过。

---

### [01:25:47] Lenny Rachitsky

**English:**
I love these little things, they sound so minor, but they're such important elements of team culture and tradition, and so important for PMs to find ways to just have fun and do something ridiculous.

**中文翻译:**
我喜欢这些小细节。它们听起来微不足道，却是团队文化和传统中非常重要的元素。对于 PM 来说，找到找乐子和做些荒唐事的方法非常重要。

---

### [01:25:58] Jackson Shuttleworth

**English:**
I will say, it took a while to get people behind shouting yee-haw, but now that we have people doing it, you can't take it away [inaudible 01:26:08], we all love it.

**中文翻译:**
我想说，让大家接受大喊“yee-haw”花了一点时间，但现在大家都这么做了，你已经没法取消它了，我们都爱死它了。

---

### [01:26:09] Lenny Rachitsky

**English:**
Oh man, I called our all hands for a while, y'all hands, feel free to steal that.

**中文翻译:**
天哪，我曾有一阵子把我们的全员大会（all hands）叫做“y'all hands”（你们所有人大会），欢迎拿去用。

---

### [01:26:14] Jackson Shuttleworth

**English:**
You get it, you get it Lenny. Yeah.

**中文翻译:**
你懂的，Lenny，你懂的。

---

### [01:26:17] Lenny Rachitsky

**English:**
I get it. Jackson, this is incredible, I feel like people are going to listen to this with notebooks, and just like, okay, here's a bunch of ideas we should try with whatever we're working on, whether it's streaks or not. Thank you so much for being here. Two final questions, where can folks find you online if they want to reach out, learn more, learn more about Duolingo? I know you're hiring product managers, so share more there, and finally, how can listeners be useful to you?

**中文翻译:**
我懂。Jackson，这太精彩了。我觉得人们会带着笔记本听这一集，然后记下：“好，这里有一堆我们可以尝试的想法，不管我们是在做连胜还是别的。”非常感谢你能来。最后两个问题：如果大家想联系你、了解更多信息或了解多邻国，可以在哪里找到你？我知道你们正在招聘产品经理，请分享一下相关信息。最后，听众可以如何帮到你？

---

### [01:26:37] Jackson Shuttleworth

**English:**
Yes, you can find me on LinkedIn, that is where most of my online social media is, so Jackson Shuttleworth, and then how people can be useful to me, yes, as you said, we are hiring. We're actually hiring for my team. Are you interested in thinking about streaks as much as we do? We might be the right home for you, so please, you can apply on our website. We're also hiring from a number of other product management roles, and they're all as thrilling as this work is.

**中文翻译:**
是的，你可以在 LinkedIn 上找到我，那是我的主要社交媒体，搜 Jackson Shuttleworth 即可。至于大家如何帮到我，正如你所说，我们正在招聘。我的团队就在招人。你对思考“连胜”感兴趣吗？我们可能是你的理想归宿，请在我们的官网申请。我们还在招聘许多其他产品管理职位，它们都像这项工作一样令人兴奋。

(01:27:05):
And then, I'm always interested about how other companies have implemented streaks and what they've learned, and so what I'd say is if you're a company who's implemented a streak maybe in a different way than Duolingo has, or you found a whole ton of success and another vector, another element of the feature that we didn't talk about today, I would love to know more. I used to catalog basically every streak I found out there, and as it's become more of a popular feature, it's just been hard to keep up on. So, if you have interesting streak insights to send my way, I would love to hear them.

**中文翻译:**
另外，我一直对其他公司如何实现连胜机制以及他们学到了什么非常感兴趣。所以我想说，如果你所在的公司实现了连胜机制，也许方式与多邻国不同，或者你在我们今天没聊到的另一个维度、另一个元素上取得了巨大成功，我很想了解。我以前会记录我发现的几乎每一个连胜机制，但随着它变得越来越流行，现在很难跟上了。所以，如果你有有趣的连胜洞察想分享给我，我很乐意倾听。

---

### [01:27:41] Lenny Rachitsky

**English:**
I love that, a collection of all the best ways of doing streaks. Jackson, just I want to say congrats to your team and you for having so much impact. This is like the dream of a lot of PMs and teams, is to see this much impact and continue to ship wins, and so congrats, nice work.

**中文翻译:**
我喜欢这个，一个关于连胜最佳实践的合集。Jackson，我想祝贺你和你的团队产生了如此大的影响力。这是很多 PM 和团队的梦想——看到如此大的影响力并持续发布成功的迭代。祝贺你们，干得漂亮。

---

### [01:27:57] Jackson Shuttleworth

**English:**
Thank you very much.

**中文翻译:**
非常感谢。

---

### [01:27:58] Lenny Rachitsky

**English:**
Thanks for [inaudible 01:27:59]. And with that, Jackson, thanks so much for being here.

**中文翻译:**
感谢。Jackson，非常感谢你能来。

---

### [01:28:02] Jackson Shuttleworth

**English:**
Yeah, thank you Lenny, this was a lot of fun.

**中文翻译:**
谢谢 Lenny，这非常有趣。

---

### [01:28:04] Lenny Rachitsky

**English:**
Same. Bye everyone.

**中文翻译:**
我也是。大家再见。

(01:28:07):
Thank you so much for listening, if you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review, as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at Lenny'sPodcasts.com. See you in the next episode.

**中文翻译:**
非常感谢您的收听。如果您觉得这期节目有价值，可以在 Apple Podcasts、Spotify 或您喜欢的播客应用中订阅。此外，请考虑给我们评分或留下评论，这能真正帮助其他听众发现本播客。您可以在 LennysPodcasts.com 找到所有往期节目或了解更多信息。下期节目见。