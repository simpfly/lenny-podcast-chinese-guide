# Katie Dill - 双语对照

以下是 Lenny's Podcast 访谈 Katie Dill（Stripe 设计负责人）的完整中英双语对照文档。

---

### (00:00:00) Katie Dill

**English:**
The use of the word beauty in books that have been digitized by Google has decreased, like pretty dramatically. And it's aligned with this idea of, "Well, functionality is king. Functionality is what matters." As if people think about functionality and beauty as like two opposite things. No, they're not two opposite things. Functionality is important. And actually beauty enhances functionality because it does make things easier to use, more approachable, more compelling to use.
And the other piece of it that is not talked about in business as often is just the importance of how people feel. Things that are more beautiful, increase trust. You see that we've put painstaking detail into this, and we care about the details of how something works, and that gives you assurance that we care about other details that you can't see too.

**中文翻译:**
在 Google 数字化后的书籍中，“美”（beauty）这个词的使用频率大幅下降，下降得非常剧烈。这与一种观念是一致的，即：“功能至上，功能才是最重要的。” 仿佛人们认为功能和美是两个对立的东西。不，它们不是对立的。功能固然重要，但实际上，美能增强功能，因为它让事物变得更易用、更亲切、更具吸引力。
另一个在商业领域不常被谈及的方面是：人们的感受有多重要。更美的东西能增加信任感。当你看到我们在某件事上投入了不遗余力的细节，看到我们关注产品运作的每一个微小之处，这会让你确信，对于那些你看不见的细节，我们也同样用心。

---

### (00:00:55) Lenny

**English:**
Today my guest is Katie Dill. Katie is Head of Design at Stripe, where she oversees product design, brand and marketing creative, web presence, user research, content strategy, and design ops. Katie was previously Head of Design at Lyft, and Head of Experience Design at Airbnb. She's built and led design teams at three different hypergrowth companies, seen the teams scale at least 10x, and two of which, Airbnb and Stripe, are some of the biggest and fastest growing companies in the world and also the best designed products.
In our conversation Katie shares stories of trials and tribulations of leading large design teams, processes she's put in place for operationalizing quality, how she thinks about quality and beauty very practically, how design can directly lead to growth, and examples of this that led to a big lift in conversion at Stripe, plus a math formula she uses to increase team performance, how she suggests organizing your design and product teams, what to look for in design hires, and so much more. I was really lucky to get to work with Katie while at Airbnb, and I am so excited to have her on this podcast. With that, I bring you Katie Dill after a short word from our sponsors.

**中文翻译:**
今天的嘉宾是 Katie Dill。Katie 是 Stripe 的设计负责人，负责监督产品设计、品牌与营销创意、网络形象、用户研究、内容策略以及设计运营（Design Ops）。此前，她曾担任 Lyft 的设计负责人和 Airbnb 的体验设计负责人。她在三家不同的高速增长公司建立并领导过设计团队，见证了团队规模至少扩大了 10 倍，其中 Airbnb 和 Stripe 是全球规模最大、增长最快的公司，同时也是设计最出色的产品。
在我们的对话中，Katie 分享了领导大型设计团队的艰辛故事、她为实现“质量运营化”而建立的流程、她如何务实地思考质量与美感、设计如何直接带动增长（并举例说明了这如何显著提升了 Stripe 的转化率），此外还有她用来提高团队绩效的数学公式、她对设计和产品团队组织架构的建议、招聘设计师时该看重什么，等等。我很幸运在 Airbnb 工作期间曾与 Katie 共事，非常激动能邀请她来到节目。在听完赞助商的简短介绍后，我们将请出 Katie Dill。

---

### (00:02:05) Lenny (Sponsor Break)

**English:**
This episode is brought to you by Sidebar. Are you looking to land your next big career move or start your own thing? One of the most effective ways to create a big leap in your career, and something that worked really well for me a few years ago, is to create a personal board of directors, a trusted peer group where you can discuss challenges you're having, get career advice, and just kind of gut check how you're thinking about your work, your career, and your life.
This has been a big trajectory changer for me. But it's hard to build this trusted group. With Sidebar, senior leaders are matched with highly-vetted, private, supportive peer groups to lean on for unbiased opinions, diverse perspectives, and raw feedback. Everyone has their own zone of genius, so together we're better prepared to navigate professional pitfalls, leading to more responsibility, faster promotions, and bigger impact.
Guided by world-class programming and facilitation, Sidebar enables you to get focused, tactical feedback at every step of your journey. If you're a listener of this podcast you're likely already driven and committed to growth. A Sidebar personal board of directors is the missing piece to catalyze that journey. Why spend a decade finding your people when you can meet them at Sidebar today?
Jump the growing waitlist of thousands of leaders from top tech companies by visiting sidebar.com/lenny to learn more. That's sidebar.com/lenny. You fell in love with building products for a reason, but sometimes the day-to-day reality is a little different than you imagined. Instead of dreaming up big ideas, talking to customers, and crafting a strategy, you're drowning in spreadsheets and roadmap updates, and you're spending your days basically putting out fires.
A better way is possible. Introducing Jira Product Discovery, the new prioritization and road mapping tool built for product teams by Atlassian. With Jira Product Discovery you can gather all your product ideas and insights in one place and prioritize confidently, finally replacing those endless spreadsheets. Create and share custom product roadmaps with any stakeholder in seconds.
And it's all built on Jira where your engineering team's already working, so true collaboration is finally possible. Great products are built by great teams, not just engineers. Sales, Support, Leadership, even Greg from Finance, anyone that you want can contribute ideas, feedback, and insights in Jira Product Discovery for free. No catch. And it's only $10 a month for you.
Say goodbye to your spreadsheets and the never-ending alignment efforts. The old way of doing product management is over. Rediscover what's possible with Jira Product Discovery. Try it for free at atlassian.com/lenny. That's atlassian.com/lenny. Katie, thank you so much for being here. Welcome to the podcast.

**中文翻译:**
本期节目由 Sidebar 赞助。你是否正在寻求职业生涯的下一次重大飞跃，或者准备自主创业？实现职业跨越最有效的方法之一（也是几年前对我非常有用的方法），就是建立一个“个人董事会”——一个值得信赖的同行群体，在这里你可以讨论面临的挑战，获取职业建议，并对你的工作、事业和生活想法进行“直觉检查”。
这对我来说是职业轨迹的重大转折点。但建立这样一个信任群体很难。通过 Sidebar，资深领导者会被匹配到经过严格筛选、私密且相互支持的同行小组中，依靠他们获得公正的意见、多元的视角和原始的反馈。每个人都有自己的天才领域，因此大家在一起能更好地应对职业陷阱，从而承担更多责任，获得更快的晋升和更大的影响力。
在世界级项目和引导下，Sidebar 让你在旅程的每一步都能获得专注且具战术性的反馈。如果你是本播客的听众，你可能已经非常有动力并致力于成长。Sidebar 的个人董事会是催化这一旅程的最后一块拼图。为什么要花十年时间去寻找志同道合的人，而现在就可以在 Sidebar 遇见他们呢？
访问 sidebar.com/lenny 了解更多信息，跳过数千名来自顶尖科技公司领导者的等待名单。地址是 sidebar.com/lenny。你爱上打造产品是有原因的，但有时日常现实与想象略有不同。你没有在构思伟大的创意、与客户交谈或制定战略，而是淹没在电子表格和路线图更新中，整天忙于“救火”。
现在有了更好的选择。介绍 Jira Product Discovery，这是 Atlassian 为产品团队打造的新型优先级排序和路线图工具。通过 Jira Product Discovery，你可以将所有产品创意和见解汇集一处，自信地确定优先级，最终取代那些没完没了的电子表格。几秒钟内即可创建并与任何利益相关者分享自定义产品路线图。
它完全构建在你的工程团队已经在使用的 Jira 之上，因此真正的协作终于成为可能。伟大的产品是由伟大的团队打造的，而不仅仅是工程师。销售、支持、领导层，甚至是财务部的 Greg，任何你想要的人都可以免费在 Jira Product Discovery 中贡献创意、反馈和见解。没有陷阱。对你来说每月只需 10 美元。
告别电子表格和永无止境的对齐工作。旧的产品管理方式已经结束。通过 Jira Product Discovery 重新发现可能性。在 atlassian.com/lenny 免费试用。Katie，非常感谢你能来。欢迎来到本播客。

---

### (00:04:52) Katie Dill

**English:**
Thanks for having me. Good to be here.

**中文翻译:**
谢谢邀请。很高兴来到这里。

---

### (00:04:54) Lenny

**English:**
It's absolutely my pleasure. So as we were preparing for this podcast, you hinted at a story that you had from your time at Airbnb where the design team staged an intervention with you which I had no idea about. Because I was there during this time and I did not know this was happening. I am so curious to hear the story. Can you share what happened?

**中文翻译:**
这是我的荣幸。在我们准备这次播客时，你暗示了一个你在 Airbnb 时期的故事：设计团队对你进行了一次“干预”（intervention），而我对此一无所知。因为我当时也在公司，却不知道发生了这种事。我非常好奇想听听这个故事。你能分享一下发生了什么吗？

---

### (00:05:15) Katie Dill

**English:**
Ah, starting with the easy questions I see. All right.

**中文翻译:**
啊，看来你是从“简单”的问题开始问起啊。好吧。

---

### (00:05:18) Lenny

**English:**
Right into it.

**中文翻译:**
直接进入正题。

---

### (00:05:20) Katie Dill

**English:**
Yeah. No, I'm happy to talk about it because, frankly, it was the biggest learning experience of my leadership career, or at least that happened in one moment. It happened in my early days at Airbnb. I was hired to take on the Design Organization, or the Experience Design Organization. That's basically the Product Design team, which was 10 people at the time. They had been reporting directly to one of the founders and they were going to start reporting to me.
During my interview process I learned a lot about what was working, and what wasn't working, and some of the trials and tribulations with the Design Organization and its collaboration with others. So it seemed like there was room for improvement in how Engineering, and Product Management, and Design all worked together. There was also really low engagement scores in the Design team.
So I kind of came in ready to go and excited to try to help make some change based on all the things that I had learned from various leaders and people across the company. I came in swinging, ready to go. And then about a month into my time there, I got a meeting on my calendar, Thursday 8:30 AM, it was an hour and a half with half of the Design team, so that was five people, and our HR partner.

**中文翻译:**
是的。不，我很乐意谈谈这件事，因为坦白说，这是我领导生涯中最大的学习经历，至少是在那一瞬间发生的。那是在我加入 Airbnb 的早期。我被聘请去接管设计组织，或者叫体验设计组织。那基本上就是产品设计团队，当时只有 10 个人。他们之前直接向其中一位创始人汇报，现在要开始向我汇报。
在面试过程中，我了解了很多关于哪些行得通、哪些行不通的情况，以及设计组织在与其他部门协作中的一些磨难。看起来工程、产品管理和设计之间的协作方式还有改进空间。此外，设计团队的员工敬业度得分也非常低。
所以我进来时信心满满，迫不及待地想根据我从公司各级领导和员工那里学到的东西来推动变革。我大刀阔斧地准备干一番事业。然后，在我入职大约一个月后，我的日历上出现了一个会议：周四早上 8:30，一个半小时，参会者包括一半的设计团队成员（也就是 5 个人）以及我们的 HR 合作伙伴。

---

### (00:06:38) Lenny

**English:**
Oh, no.

**中文翻译:**
噢，不。

---

### (00:06:38) Katie Dill

**English:**
Usually not a good sign.

**中文翻译:**
通常这不是个好兆头。

---

### (00:06:38) Lenny

**English:**
That's never a good sign.

**中文翻译:**
这绝对不是好兆头。

---

### (00:06:40) Katie Dill

**English:**
Yeah. And I remember this so vividly. I remember walking into the office, and all the rooms in Airbnb's office are very unique spaces that look like Airbnb's. But of course this was the one room with all white walls and just a gray flat rectangle table. I walked into the room and there were five of them seated around the table. They had a pack of papers in front of them and they went on taking turns quietly reading from the papers all the things that they saw that I was doing wrong and all the things that they didn't like about me.
It was a really hard moment there. I went through all the usual kind of like stages of grief when one hears feedback, which is just like an immediate want to respond to be like, "Yeah." Like, "Well there was a good reason for that." And like, "That's not how it actually was." And, "This is why I did that." But luckily, thank goodness I had the sense to just listen and not respond in that way. I mean, clearly what they were telling me is that that was one of the things that was missing.
So I heard them out and took it all in. And regardless of each individual saying, what was very clear was that the missing piece, the theme that was across all of that, is that I hadn't earned their trust. So whether how right or how wrong what I was doing was, is the key piece is that I wasn't bringing the team along with me. They had no idea that they could trust in what I was trying to build, and what I was trying to shape, and that I cared about them, and that I had their best interests and shared goals at heart. And that was absolutely my fault.
In retrospect, as hard as that was, I'm very grateful and very amazed that they could come together and share that with me. It can be hard to bring feedback forward like that. So it was an extremely valuable learning experience. I took from that to then immediately shift how I was operating. And really a key part in building trust was to listen, to hear out what the individuals on the team were setting out to do, what they cared about, what motivated them.
So I started to make pretty fast change and still moving in the direction that was necessary for the org to make the really large impact in how we were operating, but bringing folks along with me. You can inflict change on people, but if you want to do it with them trust is the key element there. And then a couple months later, we had the best engagement scores in the company.
So it did objectively improve the situation, and since then taken that on into next steps in other companies that I've joined. And just think about instead of coming in swinging, come in listening, so that you can really set out to make change that actually has true, positive impact on the folks around you and that you bring along with you.

**中文翻译:**
是的。我记忆犹新。我记得走进办公室，Airbnb 的所有房间都非常独特，看起来就像 Airbnb 的房源。但偏偏这间房全是白墙，只有一张灰色的长方形平桌。我走进房间，他们五个人围坐在桌旁。他们面前放着一叠纸，然后轮流安静地读着纸上的内容，列举了所有他们认为我做错的事，以及所有他们不喜欢我的地方。
那真是一个艰难的时刻。我经历了听到负面反馈时通常会有的“悲伤五阶段”，第一反应就是想立刻反驳：“是的，但那是有原因的”，“事实并非如此”，“我之所以那样做是因为……”。但幸运的是，谢天谢地，我有理智让自己只是倾听而不去那样回应。我的意思是，显然他们告诉我的正是缺失的东西之一。
所以我听完了他们的发言，全盘接受。抛开每个人具体说了什么，非常明确的一点是，缺失的那块拼图、贯穿始终的主题是：我还没有赢得他们的信任。所以，无论我做的事情是对是错，关键在于我没有带着团队一起前进。他们不知道是否可以信任我想要构建和塑造的东西，不知道我是否关心他们，不知道我是否把他们的利益和共同目标放在心上。这绝对是我的错。
回想起来，尽管当时很难受，但我非常感激也很惊讶他们能聚在一起向我分享这些。提出这样的反馈是很困难的。所以这是一次极其宝贵的学习经历。我从中吸取教训，立即转变了我的运作方式。建立信任的关键部分在于倾听，去听取团队成员想要做什么、他们关心什么、什么能激励他们。
于是我开始进行相当快速的变革，依然朝着组织所需的、能对运作方式产生重大影响的方向前进，但这次我带着大家一起走。你可以把变革强加于人，但如果你想和他们一起完成变革，信任就是关键要素。几个月后，我们的敬业度得分成了全公司最高的。
所以这在客观上改善了局面，从那以后，我也把这一经验带到了我加入的其他公司。与其一进来就大刀阔斧（swinging），不如先倾听（listening），这样你才能真正着手进行那些对周围人产生真实、积极影响的变革，并让他们与你同行。

---

### (00:09:42) Lenny

**English:**
Wow, I was there during this. I did not know this was happening. Is this the time when all the designers were all always in one room together in Thayer? Is that that period?

**中文翻译:**
哇，我当时就在公司，却不知道发生了这事。那是所有设计师都一直待在 Thayer 大楼同一个房间里的那个时期吗？

---

### (00:09:52) Katie Dill

**English:**
Before I got there I think there was a little of like, "Design is just going to sit with Design and not necessarily work in close proximity with engineers and product managers, et cetera." And one of the things that I believe as a necessary part of building a high-functioning organization is that, one, building together is important. So having engineers, and product managers, and designers be together, have shared goals, and align on that and be able to just look over each other's shoulder and talk about things, is important. So sitting together is important.
However, that Thayer thing that you're talking about actually was like something that I was very devoted to, which is bringing Design together at key moments multiple times throughout the week to also build a community in Design. Like Joebot at Airbnb once said, "It's like, well, what T-shirt do you wear? What team are you on?" And I was like, "You have two T-shirts. You have the Design T-shirt and you have the Marketplace T-shirt, or whatever cross-disciplinary team that you work on. Because both are really important communities to build for slightly different reasons." So yeah, Thayer was a good spot for that.

**中文翻译:**
在我去那里之前，确实有点“设计只和设计坐在一起，不一定和工程师、产品经理等近距离工作”的情况。而我认为建立高效组织的一个必要部分是：第一，共同构建很重要。让工程师、产品经理和设计师待在一起，拥有共同目标并达成一致，能够互相交流，这很重要。所以坐在一起很重要。
然而，你提到的 Thayer 那件事实际上是我非常投入的一项工作，即在每周的几个关键时刻把设计团队召集在一起，以建立设计社区。就像 Airbnb 的 Joebot 曾经说过的：“这就像是，你穿哪件 T 恤？你在哪个团队？”我的看法是：“你有两件 T 恤。你有‘设计’T 恤，也有‘市场’（Marketplace）T 恤，或者任何你所在的跨学科团队的 T 恤。因为出于略有不同的原因，这两个社区都非常重要。”所以是的，Thayer 是个进行这种交流的好地方。

---

### (00:10:56) Lenny

**English:**
Zooming out a little bit, I think the elephant in the room a lot of times with design is this idea that I'd say most PMs, most founders, intellectually understand the value of design, understand the value of high quality. But day-to-day it's often not actually prioritized versus new features, new product launches, partly because the ROI is just really unclear.
If we spend another month making this more awesome and making this even more amazing design-wise, experience-wise, what is that going to get us? Clearly, at Airbnb design was highly prioritized. At Stripe, from an outsider's perspective, it clearly is. I'm just curious what you've learned about how to make the case for the ROI of design and just how Stripe, and Airbnb, and Lyft have done that.

**中文翻译:**
稍微放大一点来看，我认为设计领域经常存在一个“房间里的大象”：大多数产品经理和创始人理智上都理解设计的价值，理解高质量的价值。但在日常工作中，设计往往不会比新功能、新产品发布更受重视，部分原因是投资回报率（ROI）非常不明确。
“如果我们再花一个月时间让这个东西在设计和体验上变得更棒、更惊艳，我们能得到什么？”显然，在 Airbnb，设计是高度优先的。在 Stripe，从局外人的角度看，显然也是如此。我很好奇你学到了如何论证设计的 ROI，以及 Stripe、Airbnb 和 Lyft 是如何做到这一点的。

---

### (00:11:39) Katie Dill

**English:**
It's a great question, and I think this is like an age-old question that I don't know if will ever go away, and probably because the quality bar keeps evolving, keeps rising. But I think first to kind of level set before we dive into that I would say that there are levels of quality. There is the, does the thing work? Does it provide some sort of value proposition? It like executes on its job. That's baseline quality.
Next is that, does it do it exceedingly well? Is it error-free? Actually, maybe that's not even exceedingly well but just error-free and it actually works in a well-rounded way. Then beyond that, like level three, level four, level five, does it exceed expectations and it does something that you weren't even seeking for as a user? And I do think the levels of quality should be based on user expectations. I don't believe that there are disciplines that just don't care about quality.
I think it's more about that prioritization and kind of like what you talked about is just like, is it really worth getting something to that exceedingly well state or is it, what about just like another feature and being seduced by the chase of another feature versus actually taking your features to a level of being great? That is hard. And I get it when you look at your user base and they're all shouting from the rooftops for this additional feature.
Of course you're going to want to prioritize that over something they never asked for. Then the other thing would be you end up with like you've got three things that you could possibly do to make perhaps the next stage in your product development. Two of them you know you can measure and they're going to line up to business goals, and one of them you can't.
Of course that's going to be enchanting to want to go after the things that you can actually measure, you know that they're going to have that impact. But the companies that know that quality is non-negotiable, it is a long-term necessary aspect of what they build, don't play that numbers game. Or what they do is they recognize that it is absolutely functionality, but the quality of those features that is actually going to get to great usability, desirability in their product.
Actually, I think it's kind of like an analogy for going to the gym or working out. I don't know about you, but literally every time I think to do this, there's a fight in my head of like, "Ah, do I really need to work out today? Is this one day going to give me six-pack abs?" Like, "Of course not." So like, "Why go? Why not just skip it today?" But of course then at some point, hopefully, I realize that it's like, "Well, if I skip it today, what's to stop me from skipping it another day?"
And really in the belief of that these things, it really does add up to a better outcome in the end, and so a longer, healthier life. So hopefully I can get myself together and go to the gym. I do think some of the best companies on the planet think that way. I recognize that customers don't always ask for it. I mean, you might see it in support cases for example. Like clearly they don't know how to use this next step and that is probably a quality issue and that they might be asking for in more improved features.
But some of the levels of quality, the level two, and three, and four, you might not get direct asked for. But I guess I'll give you another analogy. If you don't have competition, that's fine. Right? If you think about the first car, I am sure that wheel was really hard to turn, and I'm sure that seat was not comfortable, and you could have any color you want as long as it's black. Right? But there was no competition. The competition was a horse, so no big deal. For cars today it's like the stitching, the choice of the leather, the sound of the door.
These distinguish a, hmm, okay car to a high-end special car with higher value. This is very much by understanding how the details matter and how execution of quality will take it to the next level. Lastly, I'll just say that I know there's this saying of it's growth versus quality, but quality is growth. And if you think about how you can make your product easier to use and more understandable, that will of course drive people to use it, and use more of it, and have a better experience with it that they'll want to talk about with others.
In fact, at Stripe our Growth team I would say is pretty much maniacally focused on building better experiences because we've seen it tied directly to our business metrics. We have things that we've improved on in our onboarding flow, for example, to make it easier to understand the products, understand how they work for your different use cases such that then we have seen activations increase because we've made these quality improvements that are just directly tied to growth.
One of the biggest examples that I've seen of business impact through quality is actually in the checkout experience. We've done research on the checkout experience in some of the top e-commerce sites. We found that 99% of the top e-commerce sites have errors in their checkout flow that actually hinder more impactful, more seamless, quicker checkout, and therefore higher conversion with their customers. These small things, really they're quality issues.
They're just that if you really understand what a consumer is trying to get out of the experience, then you can make it better. So we have been maniacally focused on that over many years, trying to make the checkout experience so much better for businesses and their consumers. So by improving the quality of the checkout experience through details small and large, we have seen a 10.5% increase in business' revenue from an older form of checkout to a newer form of checkout. And those little details matter to have such a material impact on one's revenue.

**中文翻译:**
这是一个非常棒的问题。我认为这是一个古老的问题，我不知道它是否会消失，大概是因为质量的标准在不断演变、不断提高。但在深入探讨之前，我想先统一一下认识：质量是有层次的。第一层是：这东西能用吗？它是否提供了某种价值主张？它完成了它的工作。这是基准质量。
下一层是：它做得特别好吗？它没有错误吗？实际上，也许这还算不上“特别好”，只是“无错”且运行全面。再往上，第三层、第四层、第五层：它是否超出了预期？它是否做了一些用户甚至没有主动寻求的事情？我认为质量的层次应该基于用户的期望。我不相信有哪个专业领域会完全不在乎质量。
我认为更多的是关于优先级排序，就像你提到的：真的值得把某样东西做到“特别好”的状态吗？还是说，再加一个新功能更有吸引力？人们往往会被追逐新功能的诱惑所吸引，而不是把现有的功能做到极致。这很难。我理解，当你看到用户群都在大声疾呼要求增加某个功能时，你当然会想优先考虑那个，而不是他们从未要求过的东西。
另一种情况是，你可能有三件事可以做来推动产品的下一阶段发展。其中两件你知道是可以衡量的，并且符合业务目标；而另一件则无法衡量。
追求那些可以衡量、知道会有影响的事情当然很有诱惑力。但那些深知质量是不可逾越的底线、是产品长期必要属性的公司，不会玩这种数字游戏。或者说，他们意识到，虽然功能性绝对重要，但正是这些功能的质量才真正决定了产品的易用性和吸引力。
实际上，这有点像去健身房锻炼。我不知道你怎么想，但每次我想去锻炼时，脑子里都会打架：“啊，我今天真的需要锻炼吗？这一天能让我练出六块腹肌吗？”答案当然是“不能”。那为什么还要去？为什么不今天就算了？但随后在某个时刻，希望我能意识到：“如果我今天不去，那有什么能阻止我另一天也不去呢？”
关键在于相信这些点滴的积累最终会带来更好的结果，让你拥有更长久、更健康的生活。所以希望我能振作起来去健身房。我认为世界上一些最优秀的公司也是这么想的。我承认客户并不总是直接要求质量。你可能会在支持案例中看到，比如用户显然不知道如何进行下一步，这可能是一个质量问题，而他们可能会要求“改进功能”。
但某些层次的质量（第二、三、四层），你可能不会得到直接的要求。我再给你打个比方。如果你没有竞争对手，那没问题。对吧？想想第一辆汽车，我敢肯定方向盘很难转动，座椅不舒服，而且你可以选择任何颜色，只要它是黑色的。对吧？但当时没有竞争，竞争对手是马，所以没关系。而对于今天的汽车，缝线、皮革的选择、关门的声音都很重要。
这些细节区分了一辆“还凑合”的车和一辆具有更高价值的高端特种车。这正是通过理解细节的重要性以及质量的执行如何将其提升到新高度来实现的。最后，我想说，虽然有“增长 vs 质量”的说法，但质量就是增长。如果你能让你的产品更易用、更易懂，这自然会驱动人们去使用它，使用得更多，并拥有更好的体验，从而愿意向他人推荐。
事实上，在 Stripe，我们的增长团队几乎是近乎疯狂地专注于打造更好的体验，因为我们看到这直接关系到我们的业务指标。例如，我们改进了入职流程，使其更容易理解产品以及它们如何适用于不同的用例，从而我们看到激活率增加了，因为我们做了这些直接与增长挂钩的质量改进。
我见过的通过质量产生业务影响的最大例子之一是在结账体验中。我们对一些顶级电商网站的结账体验进行了研究。我们发现 99% 的顶级电商网站在结账流程中都存在错误，这些错误阻碍了更具影响力、更无缝、更快速的结账，从而降低了客户的转化率。这些小事，实际上都是质量问题。
如果你真的理解消费者想要从体验中获得什么，你就能做得更好。因此，多年来我们一直专注于此，努力为企业及其消费者提供更好的结账体验。通过改进结账体验的大小细节，我们看到从旧版结账形式转变为新版结账形式后，企业的收入增加了 10.5%。这些小细节对收入产生了如此重大的影响。

---

### (00:17:51) Lenny

**English:**
You mentioned this before we started recording, but you guys power the checkout flow for some very big sites. Can you mention a few of these because they'll give people a sense of like holy moly.

**中文翻译:**
我们在录音前提到过，你们为一些非常大的网站提供结账流程支持。你能提几个名字吗？这会让大家感觉到“天呐，这么厉害”。

---

### (00:18:00) Katie Dill

**English:**
Yeah. Stripe is used by millions of businesses globally, small and large, from early stage startups, to SMBs, larger organizations and enterprises like Amazon and Hertz, Shopify, Spotify, X, which I believe you use. The work that we do, it ranges.
We have checkout flows, so when someone's paying online, or in person, or we also provide a suite of financial automation tools so that you can run your subscriptions business, and recognize your revenue, and receive tax, and essentially manage the complexity of the financial space through powerful tools that hope to make your job easier so you don't have to sweat the details of how these things work.

**中文翻译:**
是的。全球有数百万家企业在使用 Stripe，规模不一，从早期初创公司到中小企业，再到像亚马逊（Amazon）、赫兹（Hertz）、Shopify、Spotify 以及 X（我相信你也在用）这样的大型组织和企业。我们的工作范围很广。
我们有结账流程（无论是线上支付还是线下支付），我们也提供一套财务自动化工具，让你能够运行订阅业务、确认收入、处理税务，本质上是通过强大的工具来管理金融领域的复杂性，希望能让你的工作更轻松，这样你就不必为这些事情运作的细节而烦恼。

---

### (00:18:46) Lenny

**English:**
I just want to follow this thread a little bit. You talked about these opportunities to improve the checkout flow through a design lens. You could also think of it from like as a product manager I'd be like, "Oh wow. Let's just find all the things that people get stuck on and fix them." How is it that you see that from the quality design perspective versus like, "Oh, let's just move this metric and here's all the things that are stopping people." What would you say is the designer's lens on that, if there's anything there?

**中文翻译:**
我想顺着这个话题再聊聊。你谈到了通过设计视角改进结账流程的机会。如果从产品经理的角度来看，我可能会想：“哇，让我们找出所有让用户卡住的地方并修复它们。”你是如何从“质量设计”的角度来看待这件事，而不是仅仅从“让我们提升这个指标，这里有所有阻碍用户的东西”的角度来看待的？你会说设计师的视角有什么不同吗？

---

### (00:19:13) Katie Dill

**English:**
Honestly, a pet peeve of mine is this way of talking about things as there's business goals and there's design goals. Because I think maybe the first conversation one should have is that, "What are we trying to build towards?" And I would think that folks that want to create really impactful products, they want to create quality products, and that they want to create things that actually serve their customers in a positive and beneficial way because they know that will build a stronger business in the long run.
So yes, there may be slight prioritization details different through the process where a designer might be thinking more about the emotional experience and how somebody feels, because that's oftentimes how they're wired, and that is an important lens to bring on it. Whereas somebody else might just be like, "Well, just make the button bigger and they'll click it more often, and that's the outcome that we seek."
So this is, again, why I was talking about how important it is to have multidisciplinary teams that work closely together because sometimes we are the checks and balances in the conversation. But I do think if we can align on what are we trying to build? Are we trying to build something great, then we can recognize the fact that it isn't just that utility is an incredible important part of that, but so is usability and so is desirability because these things together make something truly great.
So beauty is an important part of that because it does make things more useful, it does make things more accessible, and that with these things kind of coming together you can build towards something better. I think that beauty on its own or just craft on its own without utility, I mean that's like, I don't know, that's like Blu-ray or PATH. Right? That does not lead to a high-quality product. So it is the combination of these things, and so it's like stepping towards that.
But if you really want your product, those features, to be utilized for all that they're worth and to actually gain such esteem, and respect, and reuse, taking it to that next level and thinking about, "How do I make this actually an enjoyable use and that it really feels like it's meant for me and it maps my mental model," that craft and that quality of the execution of those details is going to be paramount.

**中文翻译:**
老实说，我最反感的一种说法就是把事情分为“业务目标”和“设计目标”。因为我认为首先应该讨论的是：“我们想要构建什么？”我认为那些想要创造真正有影响力的产品的人，他们想要创造高质量的产品，想要创造真正以积极有益的方式服务客户的东西，因为他们知道从长远来看，这将建立一个更强大的业务。
所以，是的，在过程中可能会有细微的优先级差异，设计师可能会更多地考虑情感体验和人的感受，因为他们通常就是这样思考的，这是一个重要的视角。而其他人可能只是觉得：“把按钮做大一点，他们就会点得更勤，这就是我们要的结果。”
所以，这再次回到了我之前说的，拥有紧密合作的多学科团队是多么重要，因为有时我们在对话中起到了制衡的作用。但我确实认为，如果我们能就“我们要构建什么”达成一致——如果我们是想构建伟大的东西，那么我们就能意识到，不仅实用性（utility）是极其重要的一部分，易用性（usability）和吸引力（desirability）也同样重要，因为这些因素结合在一起才能成就真正的伟大。
因此，“美”是其中的重要组成部分，因为它确实让事物变得更有用、更易获取，随着这些因素的结合，你可以朝着更好的方向迈进。我认为，如果没有实用性，单纯的美感或工艺，那就像……我不知道，就像 Blu-ray 或 PATH（注：指设计精美但未获成功的社交应用）。对吧？那不会产生高质量的产品。所以它是这些因素的结合，是朝着那个方向迈进。
但如果你真的希望你的产品和功能发挥出全部价值，并真正获得尊重、赞誉和重复使用，那么将其提升到下一个层次，思考“我如何让这成为一种愉悦的使用体验，让它感觉真的是为我设计的，并且符合我的心理模型”，那么工艺和细节执行的质量将是至关重要的。

---

### (00:21:40) Lenny

**English:**
You mentioned this word beauty, and I wanted to follow on this a little bit of just ... This is a big question, but just what is great design? What is beauty? Is there like a objective definition where if a designer is like, "This is great design," is there just like, "Yes, that is true." Or is it just an opinion? How do you think about what is great design? What is beauty, Katie Dill?

**中文翻译:**
你提到了“美”这个词，我想顺着这个聊聊……这是一个宏大的问题，但究竟什么是伟大的设计？什么是美？是否存在一个客观的定义，当一个设计师说“这是伟大的设计”时，大家会觉得“是的，确实如此”？还是说这仅仅是一种主观意见？Katie Dill，你是如何看待什么是伟大的设计、什么是美的？

---

### (00:21:59) Katie Dill

**English:**
I love that we're talking about this because I feel like there's probably some people listening that are squirming in their seats. Of like, "Beauty? We're talking about business here." Which is great. Actually, there's a fun fact. Stefan Sagmeister and Jessica Walsh have a book called Beauty. I would highly recommend it. Very, very worth the read. But one of the first things they talk about in the book is that from the 1800s to the 2000s the use of the word beauty in books that have been digitized by Google has decreased pretty dramatically.
It's aligned with this idea of like, "Well, functionality is king. Functionality is what matters," as if people think about functionality and beauty as like two opposite things. But what the whole book talks about is that like, "No, they're not two opposite things." Functionality is important, and actually beauty enhances functionality because it does make things easier to use, more approachable, more compelling to use. And there is actually some objectivity to whether or not beauty enhances things.
But if you ask a wide audience what color do they like more or what version of things do they like more, they tend to say the same thing because there is this shared understanding. The other piece of it that yes I can imagine is not talked about in business as often is just the importance of how people feel. A good example of how something looks, and how something is structured, and how that can translate to that, also from the book Beauty, they mentioned that they studied the tweets that came from people that were traveling through Penn Station versus Grand Central.
If you've been to those places I'm sure where I'm going with this, which is just like the people tweeting from Penn Station, it was just like more negative than the people that were tweeting from Grand Central Station that tended to be much more positive and optimistic. So the things that you create have this impact. And if you're thinking about like, "I want people to enjoy using my-

**中文翻译:**
我很喜欢我们讨论这个话题，因为我觉得可能有些听众现在正坐立难安，心想：“美？我们在这里谈论的是生意。”这很好。实际上，有一个趣闻：Stefan Sagmeister 和 Jessica Walsh 写过一本叫《美》（Beauty）的书。我强烈推荐，非常值得一读。书中提到的第一件事就是，从 19 世纪到 21 世纪，Google 数字化书籍中“美”这个词的使用频率大幅下降。
这与“功能至上，功能才是最重要的”这一观念相吻合，仿佛人们认为功能和美是两个对立的东西。但整本书都在讨论：“不，它们不是对立的。”功能很重要，而美实际上增强了功能，因为它让事物更易用、更亲切、更具吸引力。关于美是否能增强事物，实际上是有一定客观性的。
如果你问广大受众他们更喜欢哪种颜色或哪个版本的东西，他们往往会给出相同的答案，因为存在一种共同的理解。另一部分（我可以想象在商业中不常被谈及）就是人们感受的重要性。关于外观和结构如何转化为感受，一个很好的例子也来自《美》这本书：他们研究了从宾夕法尼亚车站（Penn Station）出发的人与从大中央车站（Grand Central）出发的人发布的推文。
如果你去过这两个地方，你肯定知道我要说什么：从宾夕法尼亚车站发推的人情绪更负面，而从大中央车站发推的人则往往更积极、更乐观。所以，你创造的东西具有这种影响力。如果你在想：“我希望人们喜欢使用我的产品……”

---

### (00:24:00) Katie Dill

**English:**
... have this impact. If you're thinking about, "I want people to enjoy using my product, I want them to feel at home in our product." Of course, beauty is a part of it, and this matters deeply to us, and I know, as a financial infrastructure company in the B2B space, some may assume that that doesn't matter as much, but it's actually a key priority for us. Because, number one, things that are more beautiful, increase trust. You see that we've put painstaking detail into this and we care about the details of how something works, and that gives you assurance that we care about other details that you can't see too.
Then, secondly, it is easier to use, as I've mentioned, it gives better user outcomes. What we're trying to do is we're trying to equip businesses to make the right decisions to be more successful at what they do. By bringing a interface or our invoices, or whatever it might be, to be more beautiful, and more easy to use, and more trustworthy, that will lead them to better outcomes. Thirdly, I strongly believe beauty begets beauty. When our business users or the consumers see the beauty and the care and the creativity that we put into things we deliver, then that again reassures them of just the care that we put into them. Actually, a perfect example of this, have you seen the show The Bear?

**中文翻译:**
……具有这种影响力。如果你在想：“我希望人们喜欢使用我的产品，我希望他们在我们的产品中感到宾至如归。”那么美当然是其中的一部分。这对我们来说至关重要。我知道，作为一家 B2B 领域的金融基础设施公司，有些人可能认为这并不重要，但它实际上是我们的首要任务。因为，第一，更美的东西能增加信任感。当你看到我们在某件事上投入了不遗余力的细节，看到我们关注产品运作的每一个微小之处，这会让你确信，对于那些你看不见的细节，我们也同样用心。
第二，正如我提到的，它更易于使用，能带来更好的用户结果。我们努力做的是为企业赋能，让他们做出正确的决定，在业务上取得更大的成功。通过让界面、发票或其他任何东西变得更美、更易用、更值得信赖，这将引导他们获得更好的结果。第三，我坚信“美孕育美”（beauty begets beauty）。当我们的企业用户或消费者看到我们在交付的产品中投入的美感、用心和创意时，这会再次让他们确信我们的投入。实际上，关于这一点有一个完美的例子，你看过美剧《大熊餐厅》（The Bear）吗？

---

### (00:25:23) Lenny

**English:**
I have, yes. Great example. Yeah.

**中文翻译:**
看过，是的。很棒的例子。

---

### (00:25:25) Katie Dill

**English:**
All right. Okay. All right. No spoilers, but all I have to say is peeling mushrooms. Do you know what I mean?

**中文翻译:**
好吧。不剧透，但我只想说“剥蘑菇”那个情节。你知道我的意思吗？

---

### (00:25:30) Lenny

**English:**
Yeah.

**中文翻译:**
知道。

---

### (00:25:30) Katie Dill

**English:**
Yeah. Such a good example. Such a good example.

**中文翻译:**
是的。太棒的例子了。

---

### (00:25:33) Lenny

**English:**
Someone just mentioned that same episode on a recent podcast episode.

**中文翻译:**
最近有人在另一期播客里也提到了那一集。

---

### (00:25:36) Katie Dill

**English:**
Okay. All right. Well, it's that good. It's that good. I wish I could remember which episode that was, but it was seven? I forget. But anyway.

**中文翻译:**
好吧，那一集确实很棒。我不记得是哪一集了，是第七集吗？忘了。但不管怎样。

---

### (00:25:44) Lenny

**English:**
Yeah, that's exactly right. That's exactly right.

**中文翻译:**
没错，就是那一集。

---

### (00:25:45) Katie Dill

**English:**
Oh, nice. Okay. All right. Well, and then lastly, quality is a matter of pride, beauty is a matter of pride. If we put that care into our work, more people will want to work with us, because they want to see their time spent and the care for their craft recognized and utilized and see that that can be put together into something really impactful. We really put that on the pedestal, because we know how much it matters to our users and then how much it matters to the people that work with us. Beauty is an important part of it all.

**中文翻译:**
好的。最后，质量关乎自豪感，美也关乎自豪感。如果我们对工作投入这种用心，就会有更多人想和我们一起工作，因为他们希望看到自己的时间和对工艺的追求得到认可和利用，并看到这些能汇聚成真正有影响力的东西。我们真的非常看重这一点，因为我们知道这对我们的用户有多重要，对与我们共事的人有多重要。美是这一切的重要组成部分。

---

### (00:26:20) Lenny

**English:**
Amazing. Speaking of beauty, when I think of Stripe and beautiful, I think of your website, and some of the specific landing pages you have, which are just incredibly nice. I'm just curious how you decide it's time to redesign your website and how much time and thought you put into a new website. Because that feels like a common question founders have, "Should we redo our website?" And it feels like you guys really think deeply about that. So, I guess is there anything there that you can share?

**中文翻译:**
太棒了。说到美，当我想到 Stripe 和“美”时，我会想到你们的网站，以及你们那些非常精美的特定落地页。我很好奇你们是如何决定什么时候该重新设计网站的，以及你们在制作新网站上投入了多少时间和心思。因为这似乎是创始人们常有的一个问题：“我们该重做网站吗？”感觉你们对此思考得非常深入。有什么可以分享的吗？

---

### (00:26:45) Katie Dill

**English:**
Yeah, there's definitely a couple of things we could talk about in terms of operationalizing quality. Because the gravitational pull is to mediocrity. It is very easy to fall into a path of a baseline, where what is required to go to that next level where something feels truly great is certainly a lot of effort, and it's a concerted effort. I will definitely say we are a work in progress and we have not nailed all the things and it is an ongoing pursuit of excellence.
The way that we build the website is that we certainly do put a lot of care into what we're putting out into the world, and we view it as a articulation of how we care about our users in all that we provide for them. So, we take that very seriously. We try to meld art and science. So, it's the creativity of the work, but it's also just the technical power of the way that we show it.
How we've actually operationalized the way we do that is that we have design and engineering and our product partners and product marketing work really, really closely on this. Actually, it's one of the few teams where all of these things report, well, not all of them, but most of those functions report into one place. So, engineering and design actually all report up into the design organization when they work on the website. Together, quite literally, as we were talking about earlier, if we were physically together, they would be sitting side by side and they're batting ideas back and forth, because the engineer on the team has a great idea for how we could go about executing on it. And the designer on the team has another idea how to push that a little further. So, that rapid cycle of iteration is really, really powerful, especially when we're trying to move quickly, but at an extremely high standard.

**中文翻译:**
是的，关于“质量运营化”（operationalizing quality），确实有几点可以聊聊。因为事物往往有一种“趋向平庸的引力”。很容易陷入一种只求达标的状态，而要达到“真正伟大”的下一个层次，确实需要付出巨大的努力，而且是齐心协力的努力。我必须说，我们仍在不断完善中，并没有搞定所有事情，这是一个持续追求卓越的过程。
我们构建网站的方式是：我们确实对向世界展示的内容投入了大量的精力，我们将其视为对用户关怀的一种表达。所以，我们非常认真地对待这件事。我们试图融合艺术与科学——既有工作的创意，也有展示方式的技术力量。
在实际操作层面，我们让设计、工程、产品合作伙伴和产品营销人员紧密合作。实际上，这是少数几个这些职能部门（虽然不是全部，但大部分）都向同一个地方汇报的团队之一。在开发网站时，工程和设计实际上都向设计组织汇报。正如我们之前讨论的，如果我们在物理空间上在一起，他们会并排坐着，互相交流想法，因为团队中的工程师可能对如何执行有很棒的主意，而设计师则有另一个主意能将其推向极致。这种快速迭代的循环非常强大，尤其是当我们试图在保持极高标准的同时快速行动时。

---

### (00:28:54) Lenny

**English:**
That's super interesting. Is there anything else that you've found to be really helpful in just operationalizing great design, craft, beauty, any processes, systems, frameworks?

**中文翻译:**
这非常有趣。在实现伟大设计、工艺和美感的运营化方面，你还发现有哪些非常有帮助的东西吗？比如流程、系统或框架？

---

### (00:29:02) Katie Dill

**English:**
Yeah, I would love to tell you about something that we've actually rolled out pretty recently that I'm extremely excited about the positive impact on.

**中文翻译:**
是的，我很想告诉你一些我们最近推出的东西，我对其产生的积极影响感到非常兴奋。

---

### (00:29:02) Lenny

**English:**
Awesome.

**中文翻译:**
太好了。

---

### (00:29:02) Katie Dill

**English:**
But before I get into that, one of the things that has been driving a little bit of this process and the way that I've been thinking about how we can build better things at Stripe is actually I've been just talking to people, talking to different design leaders, product leaders, engineer leaders at different organizations and trying to understand how they go about it. There are a couple of themes that are clearly coming through.
Number one is that quality is definitely a group effort. You're sunk if you think that you can just hire some incredibly talented person and they'll do it, that'll be fine. The rest of us will do what we're doing and they'll do it, or that it's just one organization that's going to look out for quality or QA is going to solve it all for you. It really does need to be an organizational and a group effort. If you think about the way that you run the internal functions is going to show up in the outside and how clear you all are and how you're talking about it and the standards that you set inside and you're constantly reminding people of in the way that you communicate inside will then eventually show up outside. So, of course, keeping your talent bar high and then thinking about how those things really need to be cared for, that shared care across the organization is number one.
Number two is that there needs to be some amount of vision and alignment. So, if you hire all the best people in the world and you just set them out to go and do their thing, what are the chances that they're all going to end up with something that actually aligns pretty well? Even if they all have incredible taste and they're very good at what they do, there is subjectivity to every decision in some part. So, that they might end up with some things that are really great but don't fit together as a really nice whole.
The perfect example would be building a house. You have the person that works on the roof and the person that works on the deck and the person that does the siding, et cetera, et cetera, et cetera. A house is arguably far less complex than most of the technical products that we all know. Yet, there is painstaking effort put into having the plans and having a drawing of what the final thing is going to look like. There's a GC, there's an architect. And these people are helping to make sure that all those pieces fit together, and we should have that same care when we're trying to build products together.
I think a big pair on that is then the next piece, which is editing. And you might call that your GC or your architect or somebody that sees how all these things fit together, and then has an ability to help narrow and reduce and remove the things that don't fit. At Airbnb, Brian Chesky is the editor of all the things that come together. At the Economist, there's a chief editor. But other organizations, they might decentralize that approach, which is certainly possible, but challenging, because you do need somebody to help see these things come together.
That pairs with the next piece, which is about courage, the ability to actually say, "No, this isn't good enough." To have the resolve to just be like, "Almost, but no." Which is one of the hardest decisions I think leaders can make and certainly I've had to ever make in my career, too, is just a team puts all this care and effort into something and then you're going to say, "Actually, unfortunately we're just not there yet. Let's try again." That is, I think, incredibly important part of getting there and building the fitness of what you do.
Then, lastly, the thing that I've learned that will lead me to the example that you were asking about is that, in order to build quality, you really do need to understand it also from the user perspective, which gets me into my fixation with journeys, because that is how a user sees it. The user very, very, very rarely just deals with any aspect of what you build in isolation. There has to be a moment where they learn about it. There has to be a moment where they get to know it, and then there's a moment where they actually decide to use it, and then something just changed and now they need to use that product in some other way. You have to understand it from that point of view to really understand whether or not the quality is there. I think that's a critical piece of building teams that have empathy for their users.
So, we have been operationalizing that. All the things that I just mentioned, but one of the key pieces is to bring that approach to understanding the quality of the product. So, our goal was to set out to try to solve the fact that products can be shipped and they could be at their highest game when you ship them, they go through all the processes internally to be a high quality thing, and then it gets out into the world and then, over time, the quality regresses. Some of the reasons for that is that other things are being shipped. It's kind of like, again, back to an analogy of a house, imagine you have one room where you redo the molding and you paint the little aspects and you've put new plates on the lights, now all of a sudden that room is great, but it makes everything else look worse and the whole composite is worse.
That is something that can happen to products is actually they get worse over time. Then you organize a company oftentimes and parts to be able to focus on their key business areas. That's a very good thing because they get focused and they know what they're building towards and they get expertise and they're laser focused on that. So, ideally, they move faster. But what also happens is that they get so focused on that they forget about that piece of the journey, and how it all fits together, and not recognizing that part of their product experience is intimately tied to another.
So, what we did was we set out to, number one, increase the kind of awareness and accountability of leaders to own their journeys. What we have established are we started with 15 of our most important user journeys. 15 is somewhat of an arbitrary number. It's a number that we can kind of keep track of, but also has pretty good breadth, but is certainly not comprehensive of all the most important things. But 15 of our critical user journeys, the things that we know matter so deeply to our users, and we must get right at the highest level of quality possible.
Those 15 things then each have engineering, product and design leaders that are responsible for the quality of those products. They review these journeys, what we call walk the store, where they review them as if they're walking the floor of their store on a regular cadence, and they friction log what they experience, which I know David Singleton talked about on your podcast. They will write what they have seen, what's working, what's not working. They're viewing this from, they're trying to put themselves in the shoes of their user. This of course doesn't replace user research, but it substitutes it and it adds to that.
So, they go through the experience and noting what's working and what's not working. And very critically, it's a journey, so a lot of times it starts from internet search, it starts on Google trying to understand something, goes to the website, they end up on Docs, they end up in the dashboard, and they're seeing it as a user might. With that, they're able to find the entailments of the experience that may or may not be working. They jot that down, they file bugs, they reach out to the teams that may own the different parts of this experience, and then they score it. Then on, again, a regular cadence, we come together in almost like a calibration, where we meet and we talk about the score of their work.
It relates to performance reviews. Performance reviews, managers are assessing an individual's performance, which is hard. There's some subjectivity to it, just like understanding quality can be. But what we do as managers is we calibrate. We come together and we talk about, "Okay, how well is our interpretation of our ladders document? And how well does that performance align? And are we doing it consistently across the rest of the organization?" So, we do something very similar. We calibrate these scores because what we're really trying to do is not just the 15 essential journeys and the owners of those, we want to actually uplevel and bring more shared understanding of our quality bar across the company. These moments of calibration start that. Then having leaders do this creates this, number one, it cascades this idea of the importance of owning your journey and then also has upstream impact.
Because when people see the state of products in the wild as a user would, they learn a lot about what are some of the bigger opportunities that we can make to make the product better? What are some of the things that maybe we want to change in our process to make sure that we have even better things coming into the wild? One of the best parts of this is, since then we've learned that folks have seen that like, "Oh my goodness, our SEO for this particular product or the way we're articulating it doesn't align to actually how we want people to understand it later on in the journey. So if we improve this over here, we're going to improve outcomes later on." They're seeing that and they're now able to make that happen even faster to make some of the changes there.
Then my real favorite part is that we're hearing from folks that maybe at first didn't see this as necessary, that maybe in different functions that are just like, "Oh, I was so very focused on executing the technical ability of what I do on this thing, but I hadn't seen it from this lens before." Now there're actually converts of like, "Yes, this is a really important part of it." That goes back to the point of it's a group effort. You don't want just one function looking out for the quality of the product. So, having engineers and product managers and people of different disciplines walking the store, seeing the experience, feeling it firsthand, I think will lead to better care in all of the details that will aligned to better craft in the end.

**中文翻译:**
但在深入探讨之前，我想说，驱动这一流程以及我在 Stripe 思考如何构建更好产品的方式，实际上是我一直在与人交谈——与不同组织的设计领导者、产品领导者、工程领导者交谈，试图了解他们是如何做的。这里有几个非常明确的主题。
第一，质量绝对是团队努力的结果。如果你认为只要雇一个天才，让他去搞定质量就行了，那你就输了。其他人照旧工作，只靠一个人或一个部门（比如 QA）来解决所有质量问题是行不通的。它必须是组织和团队的共同努力。内部职能的运作方式最终会体现在外部。你们内部沟通的清晰度、谈论标准的方式以及不断提醒人们这些标准的方式，最终都会呈现在产品中。所以，保持高人才门槛，并确保全组织共同关注质量，这是第一位的。
第二，需要一定程度的愿景和对齐。如果你雇了世界上最优秀的人，却让他们各行其是，他们最终能做出一个协调一致的产品吗？几率很小。即使他们都有极佳的品味且擅长自己的工作，每个决定在某种程度上都有主观性。他们可能会做出一些很棒的东西，但无法拼凑成一个完美的整体。
完美的例子是盖房子。你有负责屋顶的人、负责露台的人、负责外墙的人等等。房子的复杂程度远低于我们熟知的技术产品。然而，为了让最终成品符合预期，人们在图纸和计划上投入了巨大的心力。有总承包商（GC），有建筑师。这些人确保所有部件都能完美契合。我们在共同构建产品时也应该有同样的用心。
与此相关的下一部分是“编辑”（editing）。你可以称之为你的总承包商或建筑师，或者某个能看到全局如何契合的人，他有能力帮助缩小范围、精简并移除不合适的东西。在 Airbnb，Brian Chesky 是所有事物的总编辑。在《经济学人》，有总编辑。其他组织可能会采取去中心化的方式，这当然可能，但极具挑战性，因为你确实需要有人来帮助审视这些东西是如何汇聚在一起的。
这引出了下一部分：勇气。敢于说“不，这还不够好”的能力。要有那种“接近了，但还不行”的决心。我认为这是领导者能做的最难的决定之一，也是我在职业生涯中不得不做的决定：团队投入了所有的心血和努力，而你却要说：“不幸的是，我们还没达到那个水平，再试一次吧。”我认为这是达到目标并建立卓越能力极其重要的一部分。
最后，我学到的一点（这也将引出你问的那个例子）是：为了构建质量，你真的需要从用户的角度去理解它。这让我对“旅程”（journeys）产生了执念，因为那是用户看产品的方式。用户极少孤立地处理你构建的某个方面。他们会经历了解产品、熟悉产品、决定使用产品，然后情况发生变化，他们需要以另一种方式使用产品的过程。你必须从这个角度去理解，才能真正明白质量是否存在。我认为这是建立对用户有同理心的团队的关键。
所以，我们一直在将这一点运营化。除了我刚才提到的所有内容，关键之一是采用这种方法来理解产品质量。我们的目标是解决一个问题：产品在发布时可能处于巅峰状态，经过了内部所有流程成为高质量的东西，但随着时间的推移，质量会退化。原因之一是其他东西也在发布。这就像盖房子，你重新装修了一个房间，换了踢脚线，刷了漆，换了灯座，突然间那个房间很棒，但它让其他房间看起来更糟了，整体反而不协调了。
产品也会发生这种情况，随着时间的推移，它们实际上会变差。此外，公司通常按职能划分，以便专注于关键业务领域。这很好，因为他们能专注、有专长、行动快。但随之而来的是，他们可能会过于专注自己的部分，而忘记了整个旅程，忘记了他们的产品体验是与另一部分紧密相连的。
所以，我们做了几件事：第一，提高领导者对自己负责的“旅程”的意识和责任感。我们确定了 15 个最重要的用户旅程。15 是个相对随意的数字，既能跟踪，又有足够的覆盖面。这 15 个关键用户旅程是我们知道对用户至关重要的，必须达到最高质量水平。
这 15 个旅程中的每一个都有工程、产品和设计领导者负责其质量。他们会定期审查这些旅程，我们称之为“巡店”（walk the store），就像定期巡视店面一样。他们会记录“摩擦日志”（friction log），记录他们的体验（我知道 David Singleton 在你的播客中提到过）。他们会写下所见所闻、哪些有效、哪些无效。他们试图站在用户的角度思考。这当然不能取代用户研究，但它是对用户研究的补充。
他们体验整个过程，记录优缺点。非常关键的是，这是一个完整的旅程：通常从 Google 搜索开始，到进入网站，再到查看文档，最后进入仪表盘，像用户一样去观察。通过这种方式，他们能发现体验中可能存在问题的地方。他们记录下来，提交 Bug，联系负责该部分体验的团队，然后打分。接着，我们会定期聚在一起进行“校准”（calibration），讨论他们的工作得分。
这有点像绩效评估。经理评估个人绩效很难，具有主观性，理解质量也是如此。但我们作为经理会进行校准：聚在一起讨论我们对标准的理解是否一致，绩效是否对齐，全公司是否保持一致。我们对这些旅程的评分也做同样的事情。我们不仅是为了这 15 个核心旅程，更是为了提升全公司对质量标准的共同理解。这种校准时刻就是开始。领导者这样做会产生级联效应，让大家意识到拥有自己旅程的重要性，并产生上游影响。
因为当人们像用户一样看到产品在实际环境中的状态时，他们会学到很多：有哪些更大的机会可以让产品变得更好？我们的流程中有什么需要改变，以确保发布的东西更优秀？最棒的一点是，我们发现有人意识到：“天呐，我们这个产品的 SEO 或者我们的表达方式，与我们希望用户在旅程后期理解的方式不一致。如果我们改进这里，后期的结果就会更好。”他们看到了这一点，并能更快地做出改变。
我最喜欢的部分是，我们听到一些起初认为这没必要的人（可能来自不同职能部门）说：“噢，我以前太专注于执行我这部分的技能了，从未从这个视角看过产品。”现在他们成了坚定的支持者。这回到了“质量是团队努力”的观点。你不希望只有一个职能部门在关注质量。让工程师、产品经理和不同学科的人去“巡店”，亲身体验产品，我认为这会带来对细节的更多关注，最终实现更好的工艺。

---

### (00:39:12) Lenny

**English:**
Oh man, what an awesome process. I have a million questions I want to ask to better understand how you operationalize this. I'll try to ask just a few. But one thing that stood out about this process is I think people kind of don't trust their own judgment when they're looking at their own product. They kind of, especially product managers, almost have to feel like they have to rely on user research or data to know a thing versus like, "I just see this and it feels bad to me." I think I've learned over time more and more that you should really trust that, because you're spending your energy trying to use this thing, you're not that different from a potential user. So, I love that this actually relies on your personal judgment trying to use a thing, which I think people undervalue.

**中文翻译:**
天呐，这套流程太棒了。我有无数个问题想问，以更好地理解你们是如何运营这一点的。我试着只问几个。这个流程中让我印象深刻的一点是，我觉得人们在审视自己的产品时，往往不太相信自己的判断。尤其是产品经理，总觉得必须依赖用户研究或数据才能确定某件事，而不是直接说“我看到这个，我觉得它很糟糕”。随着时间的推移，我越来越意识到你应该真正信任这种直觉，因为当你花精力去使用这个东西时，你与潜在用户的差别并不大。所以我很喜欢这种依赖个人使用判断的做法，我认为人们低估了这一点。

---

### (00:39:53) Katie Dill

**English:**
Yeah.

**中文翻译:**
是的。

---

### (00:39:54) Lenny

**English:**
A couple of just very tactical questions, how often roughly does this happen? Is it once a quarter?

**中文翻译:**
几个非常战术性的问题：这大约多久发生一次？每季度一次吗？

---

### (00:40:00) Katie Dill

**English:**
To your first point, 100%, they're all just forms of input. I'm definitely not saying do this instead of user research, do this instead of data. It's like these things in additional sense. I do think what's so powerful about doing it firsthand is that, although I am the biggest supporter of user research, even hearing somebody talk about an experience, while that is really, really powerful, feeling the pain firsthand is just this next level of visceral understanding of like, "Oh, this could be better." Your users, they might not always say what's missing or what's wrong, or maybe they don't know that certain aspects of it could be better. Yeah, having your point of view on that in addition to the user research and what you've heard from them directly is really, really important.
But you asked about how often. We have, as I've mentioned, we are constantly looking at our processes and trying to figure out how we can make them better and better as an organization, as we've grown, things need to adjust. We today are doing it quarterly. The quarterly aspect of walking the stores by no means meant to be like that's the only time people do it. But that is the time where we're looking for update your scorecard and share the information in a dashboard where everybody can see. That is feeling right now to be the right cadence because that's enough time that there can be material differences made. You can see the scores evolve over time. But also frequently enough that you're not missing that perhaps there's been a setback since. But, of course, my real hope is that they're happening weekly, just perhaps in different parts of the organization.

**中文翻译:**
关于你说的第一点，百分之百同意，这些都是不同形式的输入。我绝对不是说用这个取代用户研究或数据，而是作为补充。我认为亲身体验之所以强大，是因为尽管我是用户研究的坚定支持者，但听别人谈论体验虽然有力，亲身感受到那种“痛点”则是另一种层次的直观理解：“噢，这里可以做得更好。”你的用户可能并不总是能说出缺失了什么或哪里错了，或者他们根本不知道某些方面可以更好。所以，在用户研究之外拥有自己的观点是非常重要的。
关于频率：正如我提到的，我们一直在审视流程并努力改进。随着组织的发展，事情需要调整。目前我们是每季度进行一次。每季度“巡店”绝不意味着人们只在那时候做这件事。但那是我们要求更新评分卡并在仪表盘中共享信息的时间点，以便所有人都能看到。目前看来这是一个合适的节奏，因为这段时间足以产生实质性的变化，你可以看到分数随时间的演变。同时，这个频率也足够高，不至于让你错过可能出现的退步。当然，我真正的希望是各部门每周都在进行这种体验。

---

### (00:41:46) Lenny

**English:**
I want to ask a couple more questions so that folks can try this at home. I was just thinking this podcast is the opposite of don't try this at home. It's like, "Here, try this at home?"

**中文翻译:**
我想再问几个问题，以便大家可以“在家里尝试”。我刚才在想，这个播客与“请勿在家模仿”恰恰相反，它是“来，请务必在家试试”。

---

### (00:41:54) Katie Dill

**English:**
Try it at home.

**中文翻译:**
在家试试吧。

---

### (00:41:55) Lenny

**English:**
Yeah. So, I want to try to give people a few more answers to questions when they're probably going to try to do this themselves. Who's in these meetings? Do you join these walkthroughs? Does David join? What do you suggest there?

**中文翻译:**
是的。所以当人们尝试自己动手时，我想给他们更多答案。谁参加这些会议？你会参加这些流程走访吗？David 会参加吗？你有什么建议？

---

### (00:42:07) Katie Dill

**English:**
Yeah. For what we're doing for each team is they do them themselves together. At bare minimum, it should be the engineer, product manager and designer doing it together. The reason why we like to see it happen together is, again, as we've talked about before, is that people bring a different perspective to something. Let's say somebody in the room might be like, "Oh my goodness, the load time didn't feel really good there." And like, "Oh, whoa, the way we're stating this is not consistent per page. And that's not on our design system."
So, it is really powerful to have folks come together and do it. In fact, David Singleton, who you mentioned, he and I do these things very regularly, too. This is outside the essential journeys program, but he and I walk the store and we'll just pick random flows and go through it together. I can't code, but he can. So, he'll do the code part and I'll be sitting there being, "What? Do they really do that? How can we make that better for them?"
I really love the multidisciplinary approach, but then when we do the calibration after the team has done these walkthroughs and they've gotten their own perspective and they fill out the scorecard based on our rubric for quality, we will come together in what we call PQR, product quality review. And they will take us through what they have experienced, and then they'll talk about, "So, this is why we've scored this, a yellow or a yellow green." Then we might have a conversation about that.
It's like, "Well, actually, that felt a little worse than you've described it. Actually, I think that we probably need to put more urgency on solving that." Or in some cases it's like, "Actually, that was pretty great. If you think about what we're trying to help somebody achieve at this moment that actually is really hitting the mark."
We will debate that there. In those meetings you'll have, yes, myself, David Singleton, Will Gaybrick, who leads product and business, and then various leaders from the organization that might be relevant to that area. We are trying to give people insight to what's happening across. Again, it's a multidisciplinary room. I'm trying to keep it not too large, because obviously it can be hard to have discussion, but it is very valuable to make sure, again, that we have the perspective of product marketing and the perspective of engineering, the expected product in the room as we discuss what our quality bar is.

**中文翻译:**
是的。我们现在的做法是每个团队自己聚在一起做。最起码，应该是工程师、产品经理和设计师一起做。我们希望他们一起做的原因是，正如之前讨论的，每个人带来的视角不同。比如房间里有人可能会说：“天呐，这里的加载时间感觉不太对。”另一个人可能会说：“噢，哇，我们这里的表述在各页面间不一致，而且这不符合我们的设计系统。”
所以，大家聚在一起做是非常有力量的。事实上，你提到的 David Singleton，我和他也经常做这些事。这不属于“核心旅程”计划，但我和他会随机挑选一些流程一起“巡店”。我不会写代码，但他会。所以他负责代码部分，我坐在旁边说：“什么？他们真的要那样操作吗？我们怎么能让他们更方便一点？”
我非常喜欢这种多学科的方法。当团队完成走访、形成自己的观点并根据我们的质量准则填写完评分卡后，我们会进行“校准”，也就是我们所说的 PQR（产品质量评审，Product Quality Review）。团队会带我们回顾他们的体验，然后解释：“这就是为什么我们给这一项打了黄色或黄绿色。”接着我们会展开讨论。
有时我们会说：“嗯，实际上那个地方的感觉比你描述的还要糟一点。我认为我们需要更紧迫地解决这个问题。”或者在某些情况下：“实际上，那部分非常棒。考虑到我们此时想帮助用户实现的目标，这确实做得很到位。”
我们会在会上进行辩论。参加会议的人包括我、David Singleton、负责产品和业务的 Will Gaybrick，以及来自该领域相关的各种组织领导者。我们试图让大家了解全局。再次强调，这是一个多学科的房间。我尽量不让参会人数过多，因为人多很难讨论，但确保房间里有产品营销、工程和产品的视角是非常有价值的，这样我们才能共同讨论我们的质量标准是什么。

---

### (00:44:36) Lenny

**English:**
Awesome. Okay. That makes a lot of sense. In terms of scoring, are you scoring individual steps of these journeys or is it yellow for segments? What are you scoring?

**中文翻译:**
太棒了。这很有道理。关于评分，你们是对这些旅程的每个步骤评分，还是对整个片段打个“黄色”？你们具体在评什么？

---

### (00:44:44) Katie Dill

**English:**
The way the rubric works is so that, and we have a template for the friction log. So, people fill out a friction log and it'll be screenshots and then what they experienced. Then there is a tool to tag for each moment. It's like, "Oh, that was a nice touch." Or, "Ooh, that is not great. We should consider a fix." Or different levels of severity of like, "Oh my gosh, P0 bug, we need to fix this right now." So, they'll tag for different moments in the journey.
Then there is a summary score at the end, which is based on a rubric that we have that talks about the importance of quality from the point of view of usability, utility, desirability, and actually going to that next level of surprisingly great. Then we'll ask them to score on a whole what they felt of these things. Then that adds up to a summary score. Which we have also talked about the different ways of scoring. Is it a number-based system? Is it a letter-based system? Like A-minus and B?

**中文翻译:**
评分准则的运作方式是这样的：我们有一个摩擦日志模板。人们填写日志，附上截图和他们的体验。然后有一个工具可以为每个瞬间打标签。比如：“噢，这个细节很赞。”或者：“呃，这不太好，我们应该考虑修复。”或者不同严重程度的标签，比如：“天呐，P0 级 Bug，必须立刻修复。”他们会为旅程中的不同时刻打标签。
最后会有一个总结评分，这是基于我们的准则，从易用性（usability）、实用性（utility）、吸引力（desirability）以及是否达到了“令人惊喜的伟大”这一更高层次来衡量质量的重要性。我们会要求他们对整体感受打分。最后汇总成一个总结分。我们也讨论过不同的评分方式：是基于数字的系统？还是基于字母的系统（比如 A- 或 B）？

---

### (00:45:42) Lenny

**English:**
[inaudible 00:45:42].

**中文翻译:**
（听不清）

---

### (00:45:42) Katie Dill

**English:**
Yeah. So far we have landed on a color system because, honestly, I think people can get a little tied around the axle on how you're measuring it, and to your point, especially in subjective things, and it's just like, "Oh, it's like, well, is it really a six or is it a seven?" We didn't want people to get a little too worried about how does... It's not meant to be an objective quantitative score. It is qualitative, it is judgment. We hire people for judgment, so we want them to bring that to the conversation. That's how we chose the score, because we felt that would actually lead to quicker but straightforward opinions and decisions.

**中文翻译:**
是的。到目前为止，我们采用了颜色系统。因为老实说，我认为人们在衡量方式上很容易陷入纠结，尤其是像你说的，在主观事物上，大家会纠结“这到底是 6 分还是 7 分？”我们不希望人们过于担心……这并不是为了得出一个客观的定量分数。它是定性的，是判断。我们雇佣员工是为了他们的判断力，所以我们希望他们把这种判断力带到对话中。这就是我们选择这种评分方式的原因，因为我们觉得这能带来更快速、更直接的意见和决策。

---

### (00:46:25) Lenny

**English:**
At a lot of companies, you have these reviews and the founders share all this like, "Oh, this is broken, this is busted." And as a product team, you're like, "Goddammit, we have these goals we got to hit. We have this roadmap. And now we're going to get a hundred things that the founder's like, 'Got to fix this.'" I'm curious just how you tell teams to take this stuff and prioritize it amongst all the other things they're going to do. Is it just up to them, is they're like, "Need to fix this"? Anything you can share there, but just how to actually operationalize taking this feedback and doing something with it?

**中文翻译:**
在很多公司，会有这种评审会，创始人会分享一堆意见，比如“噢，这个坏了，那个不行”。作为产品团队，你会觉得：“该死，我们有目标要达成，有路线图要走。现在创始人又塞过来一百件事说‘必须修好这个’。”我很好奇你是如何让团队接受这些东西，并在所有其他任务中确定优先级的？是完全由他们决定吗？关于如何将这些反馈转化为实际行动，你有什么可以分享的吗？

---

### (00:46:54) Katie Dill

**English:**
Yes. Yeah. I've seen some organizations talk about when they're doing planning, you do your OKRs quarterly or half year or year, whatever, recommendations of like, 10% of your time should be spent on fixing things, and 20% on growing things, and the rest on keeping the lights on, whatever it might be. Yes, I've seen different companies build a recommendation based on certain percentages of how they think teams should be spending their time.
We at Stripe think that, first and foremost, is that we have to make sure that folks are, number one, hired with the fact that they have great judgment and care for what they build, and they take pride in it. That's number one. Then, you can give a lot of trust to people based on that commitment to building great things that they will use that in their decision-making. Then, of course, it needs to be very clearly advocated for at the highest levels of the...

**中文翻译:**
是的。我见过一些组织在做规划时（无论是季度、半年还是年度 OKR），会建议比如：10% 的时间用于修复问题，20% 用于增长，剩下的用于维持运营等等。是的，我见过不同的公司根据他们认为团队应该如何分配时间的百分比来给出建议。
在 Stripe，我们认为首先要确保的是：第一，招聘的人必须具备出色的判断力，关心自己构建的东西，并以此为荣。这是第一位的。然后，基于这种对打造伟大产品的承诺，你可以给予人们极大的信任，相信他们会在决策中使用这种判断力。当然，这还需要在公司的最高层得到非常明确的倡导……

---

### (00:48:01) Katie Dill

**English:**
... Advocated for at the highest levels of the company. And with that, I think that fuels people's thinking as they're building their plans, but there is iteration in the plans and we do have multidisciplinary people making the plans together. So it's like, "Oh, okay, are we advancing these features? Are we going to be building growth? And is that improving the quality as well?" And so I think that's how we together get to it, but there's no formula that we ask people to.

**中文翻译:**
……在公司的最高层得到倡导。有了这一点，我认为这会在人们制定计划时激发他们的思考。计划是不断迭代的，我们有跨学科的人员共同制定计划。所以大家会想：“噢，好吧，我们在推进这些功能吗？我们要实现增长吗？这是否同时也提高了质量？”我认为这就是我们共同达成目标的方式，但我们并没有要求人们遵循某种固定的公式。

---

### (00:48:30) Lenny

**English:**
So basically what I'm hearing is it's the cultural just people are hired with this expectation we are going to focus on quality and we'll prioritize things even though they may not move metrics because we know that this will generally improve and grow the business.

**中文翻译:**
所以基本上我听到的是，这是一种文化：人们在被雇佣时就带着“我们将专注于质量”的预期，我们会优先处理某些事情，即使它们可能不会立刻改变指标，因为我们知道这从长远来看会改善并增长业务。

---

### (00:48:43) Katie Dill

**English:**
Part of it though is showing how it moves metrics, because I think that is a dangerous belief that is absolutely out there, as we talked about earlier, but that actual quality improvements do increase growth, they do improve the bottom line. For example, we saw that folks were reaching out to support because they didn't know the state of how one of their invoices was performing. And when we dig in, we realized it's, well, we had a button that looked nice, but it wasn't super clear, and so they didn't know how to access the thing that they were trying to do. And so by improving that, we decrease the need for them to have to reach out, which is clearly not their want to have to call somebody to find the answer to their problem. And so with that, we've made an improvement and we, of course, improve the bottom line because of that.
So I actually think that maybe one of the steps that somebody should consider in their organization is just you have those examples, every company does, where quality leads to better business outcomes and to talk about those and make them known, because I think it's actually a false belief that it's one or the other, it's like, "Are we going to work on quality and it doesn't move the metrics? And where we do." Some of them are longer term and so you have to look out for a while to see that change and the beliefs of your customers or how often they're sharing your product or how often they're succeeding in what they're trying to do, but some of them are short-term impacts and that is an important thing for people to be aware of because it will give them ideas of, oh, we could do this in our team too, we could have a higher quality product and actually move the business metrics.

**中文翻译:**
不过，其中一部分也是要展示质量是如何影响指标的。因为正如我们之前讨论的，那种“质量不影响指标”的观念确实存在且很危险。但实际上，质量的提升确实能增加增长，改善底线。例如，我们发现有人联系支持团队，因为他们不知道某张发票的状态。当我们深入研究时，发现我们有一个看起来很漂亮的按钮，但它不够清晰，所以他们不知道如何操作。通过改进这一点，我们减少了他们联系支持的需求——显然用户也不想为了找答案而给别人打电话。通过这种改进，我们当然也改善了公司的底线。
所以我认为，组织中应该考虑的一个步骤是：找出那些质量带来更好业务结果的例子（每个公司都有），谈论它们并让大家知道。因为我认为“二选一”是一个错误的信念，即“我们要么做质量但不影响指标，要么做指标”。有些影响是长期的，你需要观察一段时间才能看到客户信念的改变、分享频率的增加或成功率的提升；但有些影响是短期的。让人们意识到这一点很重要，因为这会给他们启发：“噢，我们团队也可以这样做，我们可以拥有更高质量的产品，并实际推动业务指标。”

---

### (00:50:28) Lenny

**English:**
Is there anything you do in how you evaluate performance of teams that helps prioritize this sort of thing? So generally it's just, cool, this team moved this metric by a ton, they're doing great. Is there anything that you bake into performance evaluations at Stripe, especially for product teams that help them understand and prioritize some of these things that may not obviously move metrics other than just broadly we believe great experiences are going to improve growth?

**中文翻译:**
在评估团队绩效时，你们有没有做什么来帮助优先考虑这类事情？通常情况下，大家会觉得“酷，这个团队大幅提升了这个指标，他们做得很好”。在 Stripe 的绩效评估中，特别是针对产品团队，有没有什么机制能帮助他们理解并优先考虑那些可能不会明显改变指标的事情，而不仅仅是泛泛而谈“我们相信伟大的体验会促进增长”？

---

### (00:50:54) Katie Dill

**English:**
Well, I think one part is being clear on what impact means, because I do think that in some companies impact is just, okay, what business metric did I move and how much? And there are certainly really important impact projects that folks can have that maybe they're multi-quarter, multi-year, and so maybe you didn't move this incredibly important business metric in one quarter, but actually the work that you are doing is instrumental to the success of the business. So there's that. And then, like you said, there are perhaps quality efforts that are harder to measure or they're longer term, but they're still impactful. So I think number one is that when you're thinking about how to come up with the rubric for how you're going to judge performance, it's just really honing in on what does impact mean, and then a lot comes from that and being able to and celebrate and recognize great work happening even when it's not necessarily materially moving that number.
The other part of it is we have a ladder system. So it's a document that's not meant to lay out here's the checklist of all the things you need to do, but it's a guide for this is what is expected in your role and at this level, and in these documents we talk about the importance of things like quality in that what we pursue is building these things that are great. And another part of that is also the operating principles, which is the thing that we align on underneath all of these levels and ladders systems that we have. And our operating principles include meticulous craft. It is one of the things that is really important to us as an organization is just having that meticulous care for all that you do, whether it's you're designing the space that we work within or that you're creating the API or that you're building the interface or that you're talking to people on support calls, the meticulous craft is something that is actually expected of everybody.

**中文翻译:**
我认为一部分是要明确“影响力”（impact）意味着什么。因为在某些公司，影响力仅仅意味着“我改变了哪个业务指标，改变了多少？”但确实有一些非常重要的影响力项目，它们可能是跨季度、跨年度的，也许你没有在一个季度内改变某个极其重要的业务指标，但你所做的工作对业务的成功至关重要。这是一方面。另一方面，就像你说的，有些质量方面的努力更难衡量或者是长期的，但它们依然具有影响力。所以第一点是，当你制定绩效评判准则时，要真正深入思考“影响力”意味着什么，很多东西都源于此，从而能够庆祝和认可那些即使没有实质性改变数字但依然伟大的工作。
另一部分是我们的“职级阶梯”（ladder system）。这并不是一份“待办事项清单”，而是一份指南，说明在你的角色和职级上被期望做到什么。在这些文档中，我们谈到了质量的重要性，即我们追求的是构建伟大的东西。此外还有我们的“运营原则”（operating principles），这是我们所有职级系统底层的共识。我们的运营原则包括“精益求精的工艺”（meticulous craft）。作为一家组织，这对我们非常重要——对你所做的每一件事都保持精益求精的态度，无论是在设计办公空间、创建 API、构建界面，还是在接听支持电话，这种精益求精的工艺实际上是对每个人的期望。

---

### (00:53:04) Lenny (Sponsor Break)

**English:**
Today's episode is brought to you by OneSchema, the embeddable CSV importer for SaaS. Customers always seem to want to give you their data in the messiest possible CSV file, and building a spreadsheet importer becomes a never ending sink for your engineering and support resources. You keep adding features to your spreadsheet importer, but customers keep running into issues. Six months later, you're fixing yet another date conversion edge case bug. Most tools aren't built for handling messy data, but OneSchema is. Companies like Scale AI and Pave are using OneSchema to make it fast and easy to launch delightful spreadsheet import experiences from embeddable CSV import to importing CSVs from an SFTP folder on a recurring basis. Spreadsheet import is such an awful experience in so many products, customers get frustrated by useless messages like error on line 53 and never end up getting started with your product.
OneSchema intelligently corrects messy data so that your customers don't have to spend hours in Excel just to get started with your product. For listeners of this podcast, OneSchema is offering a $1,000 discount. Learn more at oneschema.co/lenny.

**中文翻译:**
本期节目由 OneSchema 赞助，它是面向 SaaS 的可嵌入式 CSV 导入器。客户似乎总是想用最混乱的 CSV 文件给你数据，而构建一个电子表格导入器会成为工程和支持资源的无底洞。你不断为导入器添加功能，但客户还是会遇到问题。六个月后，你还在修复另一个日期转换的边缘案例 Bug。大多数工具不是为处理混乱数据而设计的，但 OneSchema 是。Scale AI 和 Pave 等公司正在使用 OneSchema，快速轻松地推出令人愉悦的电子表格导入体验，从可嵌入的 CSV 导入到定期从 SFTP 文件夹导入 CSV。在许多产品中，电子表格导入体验非常糟糕，客户会被“第 53 行错误”这种无用的消息搞得心烦意乱，最终甚至没开始使用你的产品就放弃了。
OneSchema 能智能纠正混乱数据，让你的客户不必为了开始使用你的产品而在 Excel 中耗费数小时。对于本播客的听众，OneSchema 提供 1000 美元的折扣。欲了解更多信息，请访问 oneschema.co/lenny。

---

### (00:54:09) Lenny

**English:**
I'm going to shift to a different topic and this is just the last area I want to spend some time on, which is team building leadership, that sort of thing. So you've led design at three hypergrowth companies, two of them, Airbnb and Stripe, are two of the biggest companies in the world, and also just known for great design. And I'm just going to ask a broad question, what have you learned about building, leading, managing, scaling large teams, are there lessons that stick with you? Anything come to mind when I ask that broad question?

**中文翻译:**
我要转向另一个话题，这也是我想花点时间讨论的最后一个领域，即团队建设、领导力之类的事情。你在三家高速增长的公司领导过设计，其中 Airbnb 和 Stripe 是全球最大的两家公司，也以卓越的设计著称。我想问一个宽泛的问题：关于建立、领导、管理和扩展大型团队，你学到了什么？有哪些让你刻骨铭心的教训吗？当我问这个宽泛的问题时，你脑海中浮现了什么？

---

### (00:54:40) Katie Dill

**English:**
One of the things that has stuck with me through all the trials and tribulations of leading, and as I've already laid out for you in the very beginning of this call, haven't always got it right, but one of the things that has been a clarifying force as I think about growing and leading teams, it's actually something I learned at Airbnb when we were there together, it's a formula sort of. So performance equals potential minus interference.

**中文翻译:**
在领导团队的种种磨难中（正如我在通话开始时告诉你的，我并不总是能做对），有一件事在我思考如何发展和领导团队时起到了拨云见日的作用。这实际上是我在 Airbnb 工作期间学到的，它像是一个公式：表现 = 潜力 - 干扰（Performance = Potential - Interference）。

---

### (00:55:10) Lenny

**English:**
I love that.

**中文翻译:**
我喜欢这个。

---

### (00:55:10) Katie Dill

**English:**
And I really like this, it's pretty simple, but it's a good reminder that, as a leader, one of the things that you are of course driving towards is trying to get better performance so that your team feels more purpose and motivation and is excited about their work and that you're building greater things for your customers and you're having more business effect, and, of course, performance. But the key pieces of that, of course, is potential, so thinking about how you increase potential, which would be, of course, hiring really well, developing the talent and helping them grow and increase their own potential to do better and greater things. And then paired to that though of course is decreasing the interferences, which could be that lead weight on top of great talent, because you can hire the best people in the world, but like a muscle atrophying underneath a cast, if there are interferences that are holding them back from doing great work, they're going to burn out, they're not going to enjoy the work, they're not going to be as successful, and you will not get as strong of performance from it.
And so I really do think of this constantly as to how can I increase potential, how can I decrease interferences? And over time, especially as your company grows, you're going to have to keep doing that. The design work is never done in designing a team, because the more people you bring in, the more it puts your processes in a faulty state. I have intentionally run teams where you get to a point where it's like running hot, it's just like, "Okay, we've outgrown our processes." And that's okay because then you can learn as to, okay, this is how people are actually trying to work and this is how we actually can improve it. So making those changes as needed helps to make them more sought after and more informed in terms of as you improve the processes.
One of the things that I've been working on since I worked back at Airbnb was this idea of improving awareness of the things that are happening. What happens at a lot of companies, especially as they grow, is people lose touch with what's happening in different parts of the organization, and everybody's got a doc, their PRD, where they've written down what they've done and it's got tons of words that nobody really understands and keywords for the different projects, and that isn't the best way to lead to clarity. And I'm a strong believer that a picture tells a thousand words and a prototype saves a thousand meetings. What we do, and I've been doing it for the last decade or more, is having people within the design team share as a screenshot or a prototype of what they're working on in a shared deck.
And so they add this to a slide, in Google Slides decks every couple of weeks, and we get to see what's happening across the design team. And this is really important for all the designers because they could see, whether or not they're a team of 10 or 170 or whatever it might be, what is happening, and they can say, "Oh my gosh, you're working on that surface, so am I. And let's talk about it. Or Oh, that's an interesting pattern, maybe we could use this in more places." And we send it to the product managers and the engineer leaders and the leaders in the company because it is also a really great way for them to understand what's happening and what are we building together. Because going earlier, as I talked about, the importance of thinking about things as a journey, so what's happening in the marketing side, what's happening in this aspect of the product and seeing how all these pieces really fit together, that has been absolutely one of the things I will take wherever I go, whatever I do, because it has just been a very, very useful tool.

**中文翻译:**
我非常喜欢这个公式，它很简单，但它很好地提醒了我们：作为领导者，你当然在追求更好的表现，这样你的团队才会感到更有目标感和动力，对工作充满热情，为客户打造更伟大的产品，并产生更大的业务影响。但其中的关键部分当然是“潜力”——思考如何增加潜力，这包括招聘优秀人才、培养人才、帮助他们成长并提高他们做大事的潜力。与此同时，同样重要的是减少“干扰”。干扰就像压在优秀人才身上的铅块。你可以雇佣世界上最优秀的人，但就像打着石膏的肌肉会萎缩一样，如果有干扰阻碍他们开展伟大的工作，他们就会精疲力竭，不再享受工作，不再那么成功，你也无法从中获得强大的表现。
所以我一直在思考：我如何增加潜力？我如何减少干扰？随着时间的推移，特别是随着公司的发展，你必须不断这样做。团队设计的工作永远不会结束，因为你带进来的人越多，你的流程就越容易陷入故障状态。我曾有意让团队运行到某种“过热”的状态，即“好吧，我们的流程已经跟不上规模了”。这没关系，因为这样你就能了解到人们实际上是如何尝试工作的，以及我们实际上可以如何改进。根据需要进行这些更改，有助于使流程更受欢迎，并在改进流程时获得更多信息。
自从在 Airbnb 工作以来，我一直致力于提高对正在发生的事情的“感知度”（awareness）。在很多公司，尤其是随着规模扩大，人们会失去对组织其他部门动态的了解。每个人都有文档、PRD，上面写满了没人真正理解的文字和各种项目的关键词，这并不是通往清晰的最佳路径。我坚信“一张图胜过千言万语，一个原型能省掉一千个会议”。我们所做的（我已经做了十多年了）是让设计团队的成员在共享幻灯片中分享他们正在做的工作的截图或原型。
他们每隔几周向 Google Slides 幻灯片添加一页，我们就能看到整个设计团队正在发生的事情。这对所有设计师都很重要，因为无论团队是 10 个人还是 170 个人，他们都能看到动态，并说：“天呐，你也在做那个界面，我也是。让我们聊聊吧。”或者“噢，那个模式很有趣，也许我们可以在更多地方使用它。”我们还会把它发给产品经理、工程领导和公司领导，因为这也是让他们了解我们在共同构建什么的绝佳方式。回到我之前说的“旅程”的重要性：营销端在发生什么，产品的这一面在发生什么，看看所有这些碎片是如何拼凑在一起的。无论我走到哪里，无论我做什么，这绝对是我会带走的东西之一，因为它是一个非常非常有用的工具。

---

### (00:58:51) Lenny

**English:**
I remember that at Airbnb, and there's nothing more fun than just looking through a bunch of awesome designs and products that are in motion and in a deck form is so handy, just flip through what's going on around the company, I'm like, "Oh wow, look at this thing. That's amazing." And it's interesting that ends up in a deck, it feels like Figma would be really good for that too, but somehow decks are still really handy for simple things like that.

**中文翻译:**
我记得在 Airbnb 时的那个环节，没有什么比翻阅一堆正在进行的精彩设计和产品更有趣的了。幻灯片的形式非常方便，只需翻一翻就能了解公司各处的动态，我会想：“哇，看看这个，太棒了。”有趣的是它最终呈现在幻灯片里，感觉 Figma 应该也很适合做这个，但不知为何，幻灯片在处理这类简单事情时依然非常顺手。

---

### (00:59:11) Katie Dill

**English:**
One of the key pieces is just keeping it really low maintenance. Yes, the design team would definitely prefer that it would be in Figma, but critically I want all functions to be able to look at it. And if not everybody is on Figma, if they were, that would be great too, but if they're not, it's just flipping through really easy, touch of a button, you can just send it off, it's behaviors that people are really used to and commenting. But maybe one day Figma.

**中文翻译:**
关键之一是保持极低的维护成本。是的，设计团队肯定更希望在 Figma 里做，但关键是我希望所有职能部门都能看到。并不是所有人都在用 Figma，如果大家都在用当然好，但如果不是，幻灯片翻起来非常容易，点一下按钮就能发出去，这是人们非常习惯的行为和评论方式。不过也许有一天会用 Figma。

---

### (00:59:42) Lenny

**English:**
And the way you do that is it's just like a scheduled call for all designers, add your stuff to this deck and then you email it out every two weeks I think you said?

**中文翻译:**
你做这件事的方式是，就像给所有设计师定一个时间，把东西加到幻灯片里，然后每两周（我记得你说是两周）通过邮件发出去？

---

### (00:59:48) Katie Dill

**English:**
Yeah, and we experiment with how often we ask folks to share and also the granularity of what they're doing. It is not meant to be a status check. We're not asking everyone, "Show us what you're doing." It's more of what are the projects that are happening? And we might ask, "Show us the medium and large projects," if there's such, it's too much going on and all of a sudden it's a 200-page deck and no one's going to flip through it. So we have experimented and evolved that depending on the team size, and I think right now we're at monthly sharing of it, and that seems to be working pretty well. It used to be biweekly, which I loved because I really love looking through, but if it's feels like it's a arduous task then it's not succeeding.

**中文翻译:**
是的，我们会尝试要求大家分享的频率以及内容的颗粒度。这并不是为了“状态检查”，我们不是在问每个人“展示一下你在做什么”。更多的是“正在进行哪些项目？”如果内容太多，突然变成 200 页的幻灯片，没人会去翻，我们可能会要求“只展示中大型项目”。所以我们根据团队规模进行了实验和演变，目前是每月分享一次，效果看起来不错。以前是每两周一次，我很喜欢，因为我真的很爱看，但如果这让大家觉得是一项艰巨的任务，那就没法成功。

---

### (01:00:31) Lenny

**English:**
And especially knowing designers, they'd want to make sure it's the best version of what they've done, and it takes all this extra time to, okay, we got to make this beautiful mock to show [inaudible 01:00:39] working on.

**中文翻译:**
特别是考虑到设计师的性格，他们会想确保展示的是作品的最佳版本，这会花费额外的精力，比如“好吧，我们得做一个精美的模型来展示正在做的工作”。

---

### (01:00:39) Katie Dill

**English:**
And actually another part of it that is another benefit of opening up the curtain a little bit of certainly we have to take things seriously in terms of confidential work, it's work in progress, it's not ready to go live, we're not ready to critique all the details about this. We do need to make it very clear to folks that this is work in progress, but also that it is really beneficial to bring the work out because what isn't great is that you get to the end of the project and people have worked tirelessly on it for some long stretch of time and then find out that, oh my gosh, this is the same project that we're doing over here and this can be completely redundant, or these two things are on a path to collide.
So we want to know that sooner because it, absolutely, in the end of the day, will make the work better, save time. And so opening up that curtain and showing the work in progress, it can feel hard at first, but I think people have started to see the benefits in doing that and then usually that will lead to better outcomes in the long run in the culture too.

**中文翻译:**
实际上，稍微揭开一点“帘子”的另一个好处是——当然，我们必须认真对待保密工作，这是正在进行的工作，还没准备好上线，也没准备好接受所有细节的评判。我们确实需要向大家明确这是“半成品”，但把工作展示出来是非常有益的。因为最糟糕的情况是，项目快结束了，大家辛苦工作了很长时间，才发现：“天呐，我们这边也在做同样的项目，这完全是重复劳动”，或者“这两个东西注定会产生冲突”。
所以我们希望尽早知道，因为归根结底，这绝对会让工作变得更好，节省时间。揭开帘子展示半成品起初可能感觉很难，但我认为人们已经开始看到这样做的好处，从长远来看，这通常也会在文化上带来更好的结果。

---

### (01:01:46) Lenny

**English:**
Going back to this formula you shared, which I love, performance equals potential minus interference, is there an example that comes to mind of helping with the interference where you found that, oh, wow, this is really slowing things down and you change something?

**中文翻译:**
回到你分享的那个我非常喜欢的公式：表现 = 潜力 - 干扰。你脑海中是否有一个关于“减少干扰”的例子？比如你发现“哇，这个东西真的拖慢了进度”，然后你改变了它？

---

### (01:01:59) Katie Dill

**English:**
It actually goes back to org design that we talked about earlier and where people sit. So when I joined Lyft, as I mentioned to you earlier, I was like, oh, I had learned from the experience that I had at Airbnb and I came in needing to transform the organization, and was hopefully much better at it because I had learned so much. What actually was going on there is that the way that the team was organized before I got there was that actually physically the design team sat separately. They sat in a room that was just beautifully designed, separated from engineering and product and all the other functions by a locked door. And that was really interesting to see because of course there were a lot of benefits to it, which is that design had this very safe space for creative discovery and exploration and communication, there was work all over the walls, it was wall to wall whiteboards, and it was just absolutely a place where creativity could thrive.

**中文翻译:**
这实际上回到了我们之前谈到的组织设计和办公座位。当我加入 Lyft 时，正如我之前提到的，我吸取了在 Airbnb 的经验，带着转型组织的需求进来的，而且希望能做得更好，因为我学到了很多。当时的情况是，在我加入之前，设计团队在物理空间上是独立坐着的。他们坐在一个设计精美的房间里，通过一扇锁着的门与工程、产品和其他职能部门隔开。这很有趣，因为这样做当然有很多好处：设计团队拥有一个非常安全的空间进行创意发现、探索和交流，墙上到处是作品，满墙都是白板，绝对是一个创意可以蓬勃发展的地方。

---

### (01:02:58) Lenny

**English:**
It sounds exactly like the Airbnb situation, by the way.

**中文翻译:**
顺便说一句，这听起来和 Airbnb 当时的情况一模一样。

---

### (01:03:02) Katie Dill

**English:**
The current Airbnb situation or the past?

**中文翻译:**
是现在的 Airbnb 还是过去的？

---

### (01:03:05) Lenny

**English:**
The original, the [inaudible 01:03:05] times.

**中文翻译:**
最初的，（听不清）那个时期。

---

### (01:03:07) Katie Dill

**English:**
Yeah. And absolutely there are a lot of tie-ins to what I had seen. And the interesting part about how actually teams were working is that you would see that there was a lot of wasted work and there was a lot of misalignment in what we were trying to do because there was product managers and engineers that were sitting alongside each other making decisions and talking about the work and deciding things, and then designers were sitting over here in this other room and they were working on something, and then they'd meet up and it's like, "That's not aligned. No, that doesn't fit the goal. And you went that way, we were supposed to go over this way." And so interference in the sense that it was wasted work, it wasn't actually aligned to the goals, it was slower. And there were definitely benefits, there was real reasons for doing this, and I know there are companies including Apple that have separation of these things.
But I think if you're going into that way of working, there's probably a lot of other decisions you need to make too in terms of the way the teams work. And so what I was seeing there was just the composite of all these aspects coming together that was not leading to more efficient and less interference. And so what we did was to evolve the way we were working and bring better alignment to the different functions.
And, again, had done it with an approach about listening and came into that with a better understanding of getting to know the team and getting to know engineering and product and see what our goals were together so that when we were making changes we were making the changes together and we actually were aligned so that on the day that we opened the doors and brought design and product together and had spaces for folks to work together and they actually sat with each other, we still kept the creative space for this is where we'll do grits, this is where we'll do working sessions, this is where the folks that don't work in an embedded fashion we'll sit, but we had the best of both worlds in that way. And so with that alignment of the way that the teams were working together, there was much faster iteration cycles, better clarity on how the work was working, and we still kept and protected that room for creative space, literally the room in terms of figuratively speaking for allowing for creative exploration, but more aligned.

**中文翻译:**
是的。这和我见过的很多情况都有关联。团队实际运作中一个有趣的部分是，你会看到大量的无效劳动，以及目标的不一致。因为产品经理和工程师坐在一起做决定、讨论工作、定事情，而设计师坐在另一个房间里做别的事情。当他们碰头时，发现：“这不对齐。不，这不符合目标。你们往那边走了，我们本该往这边走的。”所以这种“干扰”体现在：它是无效的工作，没有与目标对齐，速度更慢。当然，这样做肯定有好处，也有真正的理由，我知道包括苹果在内的一些公司也会将这些职能分开。
但我认为，如果你选择那种工作方式，在团队运作方面可能还需要做很多其他决定。我当时看到的是所有这些因素交织在一起，并没有带来更高的效率和更少的干扰。所以我们做的是演进我们的工作方式，让不同职能部门更好地对齐。
再次强调，我是通过倾听的方式来做的，在进入状态时更好地了解团队、了解工程和产品，看看我们的共同目标是什么。这样当我们做出改变时，我们是共同改变的，并且实际上是对齐的。所以当我们打开那扇门，让设计和产品坐在一起，为人们提供共同工作的空间时，我们依然保留了创意空间——这里是我们进行评审、工作会议的地方，也是那些非嵌入式工作的人坐的地方。我们通过这种方式兼顾了两者的优点。随着团队协作方式的对齐，迭代周期变得更快，工作的清晰度更高，同时我们依然保留并保护了那个创意空间（无论是物理上的房间还是比喻意义上的空间），允许创意探索，但更加对齐。

---

### (01:05:23) Lenny

**English:**
And just so I understand, essentially you reorged the teams and not just physically moved people, but you changed the way the product and design and eng team was even organized?

**中文翻译:**
为了确认我的理解，本质上你重新组织了团队，不仅是物理上搬动了座位，还改变了产品、设计和工程团队的组织架构？

---

### (01:05:35) Katie Dill

**English:**
Yes, literally and figuratively we broke down the wall and brought the teams physically together so that they would work together, and then we had an org chart where it's like, okay, these designers are working on driver, these designers are working on rider, these designers are working on the safety team, and then they would sit with their respective engineers and product managers. And then as I talked about earlier, we would come together at key moments to make sure that we as a design function, we're still aligning on shared goals about the overall experience, but also making sure that we could work well with our partners.

**中文翻译:**
是的，无论是在字面上还是比喻上，我们都打破了那堵墙，让团队在物理上聚在一起工作。然后我们有了一个组织架构图，比如：这些设计师负责司机端，这些设计师负责乘客端，这些设计师负责安全团队，然后他们与各自的工程师和产品经理坐在一起。正如我之前提到的，我们会在关键时刻聚在一起，确保我们作为一个设计职能部门，在整体体验的共同目标上依然保持一致，同时也确保我们能与合作伙伴良好协作。

---

### (01:06:11) Lenny

**English:**
So interesting that that was a recurring pattern at the places you went. I imagine Stripe was not like that, there was not all designers sitting in that locked room.

**中文翻译:**
很有趣，这在你去过的地方是一个反复出现的模式。我猜 Stripe 应该不是那样的，不会所有设计师都坐在那个锁着的房间里。

---

### (01:06:18) Katie Dill

**English:**
Not in a locked room. When I joined Stripe, it was a Zoom universe, so it's a little bit different, but even today we have a studio space where we have all the great tools of craft, and when you do go into the offices, we do have places where designers sit together, especially in the functions that aren't embedded. For example, we have brand and marketing creative, we have the website team, and we have folks that work across all of the things that we do. And so for sure there usually is some sort of creative space, which I actually think having a physical space for creative discovery and exploration and having that up on the wall, I love that so much. And I go into the office about halftime now, and I think over time we'll probably build that out more and more, because it is really powerful in addition to having teams sit by the disciplines that they work with every day.

**中文翻译:**
不在锁着的房间里。我加入 Stripe 时正处于“Zoom 宇宙”时期（疫情期间），所以有点不同。但即使是今天，我们也有一个工作室空间，那里有各种精良的工艺工具。当你进入办公室时，我们确实有设计师坐在一起的地方，特别是那些非嵌入式的职能部门。例如，我们有品牌和营销创意团队、网站团队，以及负责跨产品工作的人员。所以通常肯定会有某种创意空间。我其实非常喜欢拥有一个用于创意发现和探索的物理空间，并把作品挂在墙上。我现在大约有一半时间在办公室工作，我想随着时间的推移，我们会越来越多地建设这种空间，因为除了让团队按日常合作的学科坐在一起外，这种空间也非常强大。

---

### (01:07:17) Lenny

**English:**
It reminds me of a quote I have on my wall that I think I found in the Rick Rubin book, but it's by someone else, so I don't know exactly where I found it, but it's the object isn't to make art, it's to be in that wonderful state which makes art inevitable.

**中文翻译:**
这让我想起我墙上的一句话，我想是在 Rick Rubin 的书里看到的，但那是别人说的，所以我不知道确切出处。那句话是：“目的不是为了创作艺术，而是为了进入那种让艺术变得不可避免的奇妙状态。”

---

### (01:07:32) Katie Dill

**English:**
Ooh, that's good. I like that very much.

**中文翻译:**
噢，这句很棒。我很喜欢。

---

### (01:07:34) Lenny

**English:**
By Robert Henri. That's what I try to do in this little podcast studio that we got here.

**中文翻译:**
是罗伯特·亨利（Robert Henri）说的。这也是我在这个小小的播客工作室里努力尝试做到的。

---

### (01:07:39) Katie Dill

**English:**
That's awesome.

**中文翻译:**
太棒了。

---

### (01:07:41) Lenny

**English:**
Is there anything else that you think would be useful to share either from scaling design teams or broadly?

**中文翻译:**
关于扩展设计团队或更广泛的领域，你觉得还有什么有用的东西可以分享吗？

---

### (01:07:50) Katie Dill

**English:**
I think one of the other tendencies I see of companies in different stages of their growth is a fear of bold ideas. What happens is that... It can happen at small sizes and then it can happen at large sizes actually, it's just that a fear of shaking things up too much or big ideas with lots of things changing at once are really hard to measure. And so actually if we just make an incremental approach, it's very measured and we know what the outcome is going to be, it feels safer, I can get it done in the quarter, and depending on how your performance is managed, that might be more attractive. And so that is a dangerous tendency, because I think if we go back to what quality means, and you think about it as, well, quality is really your users are the judge of that, and the way that they experience things oftentimes across products, across surface, across time, if you just think about these incremental approaches to the scope of whatever that is that you own, you are very likely not to make the whole thing better.
So I think we have to fight against that. And the way I look at it is, the way I talk about it is reach for the stars and land on the moon. And what I mean by that is that vision work is really important, and I think sometimes you can get a bad name because you can end up with some folks that are doing vision work that goes nowhere, and they make a beautiful deck and then it gets seated on a shelf and nobody ever builds it. That is not what I'm talking about here, that is not what I recommend, but actually vision work that absolutely does look at the entirety of the experience, a comprehensive approach, a journey approach, and thinks about how these various things may come together to be better, and sketch out the ideal version. And I think Brian Chesky talks about it, I think it was the 11-star experience I think he once said.

**中文翻译:**
我认为我在不同增长阶段的公司中看到的另一种倾向是“对大胆想法的恐惧”。这种情况……实际上在小规模和大规模公司都会发生。只是害怕把事情搞得太乱，或者一次改变太多的宏大想法很难衡量。所以，如果我们只是采取渐进式的方法，它是非常可控的，我们知道结果会是什么，感觉更安全，我可以在一个季度内完成。根据绩效管理的方式，这可能更有吸引力。但这是一种危险的倾向。因为如果我们回到质量的定义，质量是由用户评判的，而他们体验事物的方式往往是跨产品、跨界面、跨时间的。如果你只考虑对自己负责范围的渐进式改进，你很可能无法让整体变得更好。
所以我们必须反抗这种倾向。我看待它的方式，或者说我谈论它的方式是：“志在星辰，着陆月球”（reach for the stars and land on the moon）。我的意思是，愿景工作非常重要。我认为有时愿景工作名声不好，是因为有些人在做毫无进展的愿景工作，他们做了一个精美的幻灯片，然后就被束之高阁，没人去构建它。我说的不是那种，我也不推荐那种。我指的是真正审视整体体验、采用综合方法、旅程方法的愿景工作，思考这些不同的事物如何结合在一起变得更好，并勾勒出理想版本。我想 Brian Chesky 谈过这个，他曾说过“11 星级体验”。

---

### (01:09:45) Lenny

**English:**
[inaudible 01:09:45] stuff. That's what we talked about a couple of times in this podcast.

**中文翻译:**
（听不清）那些东西。我们在本播客中讨论过好几次。

---

### (01:09:47) Katie Dill

**English:**
Exactly. Looking at it as a journey. It's not the five-star approach, it's not the six-star approach, but the 11-star approach, but show what that ideal version is, because if you don't know what that is, what are the chances that you're going to increment yourself to the right outcome in the end? And as I talked about before, building the house, you want to see what that picture looks like and how all these pieces come together, and I strongly recommend you want to see what it looks like in an ideal form, because you can always work back from that.
And so it's like, "Okay, if this is what we want to get to, this is what our product is going to look like in two years, how do we get there?" And what very likely is it's a team effort and various parts of your organization are going to have to own various parts, and maybe we ship this piece first so that we can study it and learn and make sure that the data is good before we move to the next piece, I'm not suggesting you have to ship the whole thing at once, but that North Star lays out the process in a way that I think allows for big risk taking in a way that is measured and thoughtful and actually also feels like progress as you step towards that versus trying to get their day one and likely end up giving up.

**中文翻译:**
没错。把它看作一个旅程。不是 5 星级的方法，也不是 6 星级的方法，而是 11 星级的方法。展示出那个理想版本是什么。因为如果你不知道理想是什么，你最终靠一点点增量达到正确结果的几率有多大？正如我之前说的盖房子，你想看到那张图纸长什么样，所有部件如何拼凑。我强烈建议你看看理想状态下的样子，因为你总是可以从中倒推。
所以这就像是：“好吧，如果这是我们想要达到的目标，这是我们的产品在两年后的样子，我们该如何到达那里？”这很可能是一项团队努力，组织的各个部分需要负责不同的部分。也许我们先发布这一块，以便研究、学习并确保数据良好，然后再进行下一块。我不是建议你一次性发布所有东西，但那个“北极星”以一种我认为允许承担重大风险的方式规划了流程，这种方式是经过衡量和深思熟虑的。当你朝着它迈进时，实际上也会感到进步，而不是试图在第一天就到达那里，结果很可能半途而废。

---

### (01:11:02) Lenny

**English:**
I love that, reach for the stars, land on the moon. That could be a metaphor for so many things. Let me try to squeeze in one more tactical tip for people listening. If someone's hiring a designer, so someone that's not a designer, just a founder of product team, what should you look for that may be a red flag or something that you want to look for to feel good that they're going to be a good fit?

**中文翻译:**
我喜欢这个，“志在星辰，着陆月球”。这可以成为很多事情的隐喻。让我试着为听众挤出一个战术性的建议。如果有人在招聘设计师（比如一个非设计师、只是产品团队的创始人），你应该寻找什么？什么是危险信号？或者你应该看重什么，才能确信他们会是一个合适的人选？

---

### (01:11:23) Katie Dill

**English:**
The key, I think, to keep in mind is it's easier to teach tools and process than it is taste and character, so I would certainly pay a lot of attention to that. Their hit rate for great judgment and great taste, and how they've honed that, even if they're not very experienced, just to see do they have that natural inclination for great things. The other piece of it is that certainly you want to find somebody with great talent, for sure, and high craft, but you...

**中文翻译:**
我认为要记住的关键是：教工具和流程比教品味和性格容易得多。所以我肯定会非常关注这两点。他们拥有出色判断力和品味的“命中率”，以及他们是如何磨练这些的。即使他们经验不丰富，也要看他们是否对美好的事物有天生的倾向。另一部分是，你当然想找一个有天赋、有高超工艺的人，但是……

---

### (01:12:00) Katie Dill

**English:**
Talent, for sure, and high craft, but you also want to find somebody that's humble. Folks that are really good at what they do aren't always, but humility is a really important part. I think it's a really important part for anybody on a team because if you're working on a team, you need to work together. And it is important that they have that respect and empathy and understanding and enthusiasm for the folks around them, but also the users. Humility means that they're going to pay more attention to what the users are saying and hopefully be curious about what's working and what's not, and strive to navigate these things to make it better. The last piece would just be hustle or chutzpah. I'm not sure exactly what's the right way to put it, but the design and the creative functions is the act of creation.
And it's scary. To take a blank piece of paper and propose something that you think is better, is scary. To have the courage to say, "This is not good enough and we should do it again," is scary. Having somebody that has that courage inside them to fight for great is pretty important. And that hustle to try to execute on that rapidly is, of course, essential as you're hiring at any stage company.
Lastly, I think you were asking in particular, especially with younger companies or with startups, I think one thing that can be hard, it's like do you hire a more junior doer or a more senior thinker/operator? It's like if you had all the money in the world, all of it. But I do think in your early stages you probably do need a doer, but it is important to also have that lens of how do you build an organization that's user-focused and the way that they operate and the way that they work together, and bringing a strategy that will help to be user-focused from the start. Maybe a great way of doing that is having a more senior leader, design advisor, and then a kind of executor or doer full-time on the team.

**中文翻译:**
天赋和高超工艺固然重要，但你也要找谦逊（humble）的人。那些在专业领域非常优秀的人并不总是谦逊，但谦逊是极其重要的一部分。我认为这对团队中的任何人来说都很重要，因为如果你在团队中工作，你就需要协作。重要的是他们对周围的人以及用户持有尊重、同理心、理解和热情。谦逊意味着他们会更多地关注用户在说什么，并对哪些有效、哪些无效保持好奇，努力引导这些事情变得更好。最后一点就是“拼劲”或“胆识”（hustle or chutzpah）。我不确定确切的说法，但设计和创意职能本质上是创造的行为。
这是很吓人的。拿出一张白纸，提出一个你认为更好的方案，这很吓人。有勇气说“这还不够好，我们应该重做”，这很吓人。找一个内心有这种勇气去为“伟大”而战的人非常重要。当然，在任何阶段的公司招聘时，快速执行的拼劲都是必不可少的。
最后，我想你特别问到了初创公司。我认为有一件事很难抉择：是雇佣一个更初级的执行者（doer），还是一个更资深的思考者/运营者（thinker/operator）？如果你有花不完的钱当然全都要。但我确实认为在早期阶段，你可能更需要一个执行者，但同时拥有“如何建立一个以用户为中心的组织”的视角也很重要，包括运作方式、协作方式，以及从一开始就引入有助于以用户为中心的战略。也许一个很好的折中方案是：请一位资深领导者担任设计顾问，然后在团队中配备一名全职的执行者。

---

### (01:14:10) Lenny

**English:**
That's a really cool tip. On the craft and taste piece, a lot of times people don't have that themselves necessarily. Any tip for how to measure that? Is there a book you'd recommend or trick? Or is it just trust your judgment and does this feel great to you?

**中文翻译:**
这是一个非常酷的建议。关于工艺和品味，很多时候招聘者自己可能并不具备。有什么衡量它的建议吗？有没有推荐的书或者小技巧？还是说只需相信自己的判断，看这东西是否让你感觉很棒？

---

### (01:14:28) Katie Dill

**English:**
It's contingent on what is the thing, what is the user need? Something that is really great, we do a lot of tools that we strive to make them power tools for our users. And a lot of times that means dense information that is still easily accessible, but will definitely feel different than perhaps a consumer product that is meant to be extremely light and sparse and directive to one individual thing at a time. So it really depends on the context of the product sometimes. That's why it's hard to kind of quote an individual book. But yeah, I can think on it and we can put it in the show notes. There are definitely books that talk about the principles of great design and we can look at that.

**中文翻译:**
这取决于那是什么东西，用户的需求是什么。有些东西非常棒，我们努力为用户打造很多“生产力工具”（power tools）。很多时候这意味着密集的信息依然易于获取，但这与那些追求极简、稀疏、一次只引导做一件事的消费级产品感觉完全不同。所以有时这真的取决于产品的语境。这就是为什么很难推荐一本特定的书。不过我可以再想想，我们可以把它放在节目介绍里。确实有一些讨论伟大设计原则的书，我们可以参考一下。

---

### (01:15:12) Lenny

**English:**
Amazing. We'll link to extra books that come to mind after. One other question I wanted to ask is, what's a favorite project that y'all have worked on at Stripe?

**中文翻译:**
太棒了。我们之后会链接到你想到的其他书籍。我还想问一个问题：你们在 Stripe 参与过的最喜欢的项目是什么？

---

### (01:15:21) Katie Dill

**English:**
Oh yeah, we got a good one that I'm so excited about. First off, I don't know if everybody knows this, but Stripe prints books. Stripe Press, we print books that are, we consider, ideas of progress. It's our intention of bringing great ideas out there. Most of them don't have anything to do with financial infrastructure. It might be any number of interesting problems and opportunities of things and ideas that people have talked about.

**中文翻译:**
噢，是的，我们有一个让我非常兴奋的项目。首先，我不知道是不是所有人都知道，Stripe 会印书。Stripe Press，我们印那些我们认为是“进步思想”的书。我们的初衷是传播伟大的思想。其中大多数与金融基础设施无关。它们可能是人们讨论过的任何有趣的科学问题、机会或想法。

---

### (01:15:50) Lenny

**English:**
I have many of them in my background here. I'm a huge fan of Stripe Press.

**中文翻译:**
我的背景墙里就有好几本。我是 Stripe Press 的忠实粉丝。

---

### (01:15:55) Katie Dill

**English:**
Nice. And we take great care to deliver these ideas of progress and books that hopefully feel beautiful. We have a new book coming up that you can pre-order now, and it is Poor Charlie's Almanack. It's actually-

**中文翻译:**
太好了。我们非常用心地交付这些进步思想，并希望这些书摸起来很美。我们即将推出一本新书，现在就可以预订，那就是《穷查理宝典》（Poor Charlie's Almanack）。它实际上是……

---

### (01:15:55) Lenny

**English:**
Already pre-ordered.

**中文翻译:**
已经预订了。

---

### (01:15:55) Katie Dill

**English:**
You did? I actually excited to hear that.

**中文翻译:**
你订了？听到这个我真的很兴奋。

---

### (01:15:55) Lenny

**English:**
I'm really excited for it.

**中文翻译:**
我非常期待。

---

### (01:16:12) Katie Dill

**English:**
It's a fascinating book. It's 20 years old. It's actually Charlie Munger's words, but Peter Kaufman, a friend and a colleague of his, assembled all of these documents over the years of things that Charlie had written and said and put it into this kind of anthology. And so this book is really fascinating and it's not really a linear story so much. We have reprinted this book. We created a teaser site that I strongly recommend you all check out. It's really, really fun.

**中文翻译:**
这是一本迷人的书。它已经出版 20 年了。它实际上是查理·芒格（Charlie Munger）的话语，但他的朋友兼同事彼得·考夫曼（Peter Kaufman）多年来收集了查理写过和说过的话，并将其汇编成这本选集。所以这本书非常引人入胜，它并不是一个线性的故事。我们重印了这本书。我们还制作了一个预告网站，我强烈建议大家都去看看。非常非常有趣。

---

### (01:16:41) Lenny

**English:**
Oh, man, it's unreal. I remember when you launched that. I was like, "It just keeps going and gets crazier and wilder and amazing." I don't even know how that's possible on a website.

**中文翻译:**
天呐，那简直不可思议。我记得你们发布那个网站的时候。我想：“它一直在滚动，变得越来越疯狂、越来越野性、越来越惊人。”我甚至不知道在网页上是怎么实现那种效果的。

---

### (01:16:49) Katie Dill

**English:**
It's pretty awesome. Our website team is... We talked about the importance of design and engineering working super closely together. It's just like that. That art and science coming together into something that hopefully is fun and engaging and people want to pursue it. So the book will be coming out soon and we're working on an update to the site that we're really, really thrilled about, so you can read the book online in a special way. So yeah, very big fan of this.

**中文翻译:**
确实很棒。我们的网站团队……我们谈过设计和工程紧密合作的重要性。这就是一个例子。艺术与科学结合在一起，创造出有趣、吸引人且让人想去探索的东西。所以这本书很快就会面世，我们正在对网站进行更新，我们对此非常兴奋，届时你可以以一种特殊的方式在线阅读这本书。所以，是的，我是这个项目的超级粉丝。

---

### (01:17:17) Lenny

**English:**
What's the website for folks? Do you happen to have the URL? Otherwise, we'll link to it in the show notes for

**中文翻译:**
网站地址是什么？你手头有 URL 吗？如果没有，我们会把它放在节目介绍里。

---

### (01:17:21) Katie Dill

**English:**
The book. Yeah, yeah. It is press.stripe.com will be where you can see all the books that we have at Stripe Press. And I believe the first one in the line... And actually what you'll see in the website is that we originally had a typical buying model of the squares outlined. One of the things that we sought to do with the website is to consider what would be a great experience for understanding different books. And when you go into a bookstore and you see the spines of the books and you pick them up and you turn them around and you look at them. And so that's actually what you will... I should stop describing it. Just go and check it out and you'll see we sought to deliver this work in a way that would be aligned with what a reader would want to pursue.

**中文翻译:**
关于书的网站。是的，press.stripe.com，你可以在那里看到 Stripe Press 的所有书籍。我想第一本……实际上你在网站上会看到，我们最初采用的是典型的方块排列购买模式。我们在设计网站时寻求的一件事是：思考什么是了解不同书籍的最佳体验？当你走进书店，你看到书脊，你拿起书，翻转它，观察它。所以这实际上就是你会……我不描述了，大家去看看就知道了。我们力求以一种符合读者追求的方式来呈现这些作品。

---

### (01:18:07) Lenny

**English:**
I can't help but ask, but how did that even come together? Was it just like this passion project of like, "This book's coming out, I just want to invest a bunch of time resources into this?" Or how does that happen at Stripe?

**中文翻译:**
我忍不住想问，这到底是怎么促成的？是像一个“激情项目”一样，觉得“这本书要出了，我只想投入大量时间和资源去做它”？还是说在 Stripe 这种事是怎么发生的？

---

### (01:18:19) Katie Dill

**English:**
Stripe's mission is to increase the GDP of the internet. We strive to build global economic prosperity because that's greater access across the globe. But there's more ways to do that than financial infrastructure. Financial infrastructure is absolutely a major part of that. It is like the lifeblood of businesses, and it enables them to accomplish more. But this notion of ideas of progress is another angle into that. While it might not be our core business, it is very much aligned with our mission. And so yes, it takes time, but we feel that it's important for what we're setting out to do. And it also relates to the pursuit of creativity and excellence. It is a part of our identity. It is a part of who we feel we are or we strive to be, and we're excited to share that with people. It's in some ways how they get to know us and they get to see the care that we put into any number of things.

**中文翻译:**
Stripe 的使命是增加互联网的 GDP。我们努力建设全球经济繁荣，因为这意味着全球范围内更广泛的准入。但除了金融基础设施，还有更多方法可以实现这一目标。金融基础设施绝对是其中的主要部分，它是企业的命脉，让企业能成就更多。但“进步思想”这个概念是另一个切入点。虽然它可能不是我们的核心业务，但它与我们的使命高度一致。所以，是的，这需要时间，但我们觉得这对我们的目标很重要。这也与追求创意和卓越有关。它是我们身份的一部分，是我们对自己定位或追求目标的体现。我们很高兴能与人们分享这些，这在某种程度上也是人们了解我们、看到我们在各种事情上投入的心血的方式。

---

### (01:19:19) Lenny

**English:**
Katie, is there anything else you want to share or touch on before we get to our very exciting lightning round?

**中文翻译:**
Katie，在进入我们非常精彩的闪电轮问答之前，你还有什么想分享或提及的吗？

---

### (01:19:24) Katie Dill

**English:**
We talked a little bit about the importance of different disciplines and the importance of quality being a group effort. I hope this doesn't insult my function, as I say, but at the core, design is simply intention. You're bringing intentionality to the decisions that you make in thinking about who is this thing for. If you're designing a doorknob, let's say, and it's like, "Does the doorknob speak to whether or not I'm going to push or pull or turn? Is it comfortable in the hand? Is it easy to manufacture? Is it easy to put on and remove?" These are some of the intentional decisions one could make, whether or not they're a designer, an engineer, the product person, any old function can put that intentionality.
If you think about who is impacted by this, who is using this? And that literally could be anything from designing a doorknob to designing your org structure to designing your strategy. Obviously, great design is also creative, and it also is demonstrated with great taste for what is beauty. Of course, that's where I would say that design expertise with people that have these creative skills and this great taste is an incredible important thing to bring into the organization. Day one, everybody can bring more care and intentionality, and I think that will result in better outcomes, internally and externally, in the long run.
I think your podcast is a great example of great craft and great quality. I was just saying this to my husband the other day, as I was talking about doing this. It's just like, your podcasts... There's more usable learning per minute than most. I don't know if that's a metric that you're measuring, but I love how you don't have your guests tell about their background. Because when someone tells about their background, that is interesting, but it's not really usable information. It's like, "I can take this information and run with it and then bring it to my own team and make my work better." You have clearly thought about that. Well, I don't know if that's why you made that decision.

**中文翻译:**
我们谈到了不同学科的重要性，以及质量是团队努力的结果。我希望接下来的话不会冒犯我的职能，但从核心上讲，设计仅仅是“意图”（intention）。你在做决定时带着意图，思考这个东西是为谁设计的。比如你设计一个门把手，你会想：“这个门把手是否传达了我是该推、拉还是转？握感舒服吗？容易制造吗？容易安装和拆卸吗？”这些是一个人可以做出的有意图的决定，无论他是设计师、工程师还是产品人员，任何职能都可以注入这种意图。
如果你思考谁会受到影响，谁在使用它？这可以是从设计门把手到设计组织架构，再到设计战略的任何事情。显然，伟大的设计也是有创意的，并且体现了对美的极佳品味。当然，这就是为什么我会说，将具有创意技能和极佳品味的设计专业知识引入组织是极其重要的。从第一天起，每个人都可以投入更多的关怀和意图，我认为从长远来看，这会在内部和外部都带来更好的结果。
我认为你的播客就是“出色工艺”和“高质量”的典范。前几天我还在跟我丈夫说这件事。你的播客……每分钟可用的学习内容比大多数播客都多。我不知道你是否在衡量这个指标，但我很喜欢你没有让嘉宾介绍他们的背景。因为当有人讲述背景时，虽然有趣，但并不是真正可用的信息。而你的节目是：“我可以带着这些信息去行动，带回我的团队，让我的工作变得更好。”你显然考虑过这一点。我不知道这是否就是你做那个决定的原因。

---

### (01:21:38) Lenny

**English:**
Absolutely. That is exactly [inaudible 01:21:40]

**中文翻译:**
绝对是。这正是（听不清）……

---

### (01:21:41) Katie Dill

**English:**
Okay, great. I also love the way that you set these things up. You had said to me, in the thing that you set me, it's just like, "If it's not good, we're not going to ship it." And you set it in very nice ways, by the way. But at first I had this like, "Oh gosh, what if it's not good?" But I also had this moment of like, "Well, that's pretty great because if it's not good, he's not going to embarrass me to the rest of the world, hopefully." And I love that because that was that courage that I was talking about earlier, too, of that you're not going to let bad go out, because you know that each one of these little things will end up leading to a belief of the level of quality of what somebody can rely on getting when they listen to your podcast. Again, one workout isn't going to be a six-pack, but every one of those things will end up leading to better quality overall. I don't know, kudos to you. You're nailing it. So great.

**中文翻译:**
好的，太棒了。我也很喜欢你设置这些事情的方式。你在发给我的东西里对我说：“如果内容不好，我们就不会发布它。”顺便说一句，你表达得很委婉。但起初我还是想：“噢天呐，如果讲得不好怎么办？”但随后我也想到：“嗯，那挺好的，因为如果讲得不好，他（希望）不会让我在全世界面前丢脸。”我很喜欢这一点，因为这就是我之前提到的那种勇气——你不会让糟糕的东西流出去，因为你知道每一件小事最终都会让听众建立起一种信念，即他们在听你的播客时可以依赖的质量水平。再次强调，一次锻炼不会练出六块腹肌，但每一件事最终都会提升整体质量。为你点赞，你做得非常出色。太棒了。

---

### (01:22:36) Lenny

**English:**
Katie, what a nice way to end it. I really appreciate that. That's exactly how I think about it, actually. You cracked my whole strategy of just making it as concretely useful as possible. I was actually on David Perell's podcast recently and he had this really good way of describing this, which is exactly what I've tried to do, but I haven't put my words into it of make it as useful as possible per minute without removing the humanity. And I realized that's what I do, is I could cut all the stories of everyone's backgrounds, but that sucks. It's optimize for value and concrete, tactical advice, but also make it fun and human and interesting.
So thank you for the kind words. And with that, we've reached our very exciting lightning round. I've got a number of questions for you. Are you ready?

**中文翻译:**
Katie，这真是一个完美的结尾。我非常感激。实际上，我确实是这么想的。你识破了我的整个策略：尽可能具体地提供有用的信息。我最近参加了 David Perell 的播客，他有一种非常好的描述方式，正是我一直努力尝试但没能用语言表达出来的：在不抹杀人性化（humanity）的前提下，让每分钟的内容尽可能有用。我意识到我做的就是：我可以剪掉所有人的背景故事，但那太糟糕了。我的做法是优化价值和具体的战术建议，但同时也让它变得有趣、有人情味且引人入胜。
谢谢你的赞美。那么，我们进入了非常精彩的闪电轮问答。我有一系列问题要问你。准备好了吗？

---

### (01:23:24) Katie Dill

**English:**
I'm ready.

**中文翻译:**
准备好了。

---

### (01:23:25) Lenny

**English:**
Okay, let's do it. What are two or three books that you've recommended most to other people?

**中文翻译:**
好，开始吧。你向别人推荐最多的两三本书是什么？

---

### (01:23:30) Katie Dill

**English:**
One, How to Win Friends and Influence People. It's an oldie but a goodie. I forget how many years old it is, but many, many decades. I think it was in the 1930s? The cover is funny. You might be embarrassed to read it on a bus, I don't know. But the learnings from it are timeless, and I've actually read it four times and I can always do for another because it is a great reminder of just how important the way you articulate things are. And not in a negative or gross kind of way, but people care first and foremost about themselves. That's the body that they're within, that is the context that they're within. Recognizing that can be really powerful as you think about leading teams, as you think about working with other people, as you think about being a good spouse, whatever it might be. I'm a big fan of that one.
The other one is a newer book, I think actually still a couple of years old. It's about the Wright Brothers by David McCullough, I think. I've been learning how to fly, and so I'm very obsessed with this, but I think it's a book that's relevant to everybody. Especially even entrepreneurs, because it just talks about the impossible challenge of nobody thought it could be done. Even the American Institute of Science didn't think it could be done. And these individuals that had the resolve and the commitment to make it happen. I think also the power of this beautiful partnership. Of course, they're brothers. That doesn't always mean you get along, but they're brothers and they did, and it's a beautiful story. Big, big, big fan of that.
And then third book, I would just say is... Actually, I brought it over because I knew you were going to ask me this question. I don't know if you could read that, but The Boy, the Mole, the Fox, and the Horse. This book was given to me by Jenny Yarden, which I think you may know. It's wonderful. It's a beautiful story. It makes you laugh, it teaches you a thing or two, and one of the best quotes in it is, "One of our greatest freedoms is how we react to things."

**中文翻译:**
第一本，《人性的弱点》（How to Win Friends and Influence People）。经典之作。我不记得它出版多少年了，但肯定有好几十年了，我想是 1930 年代？封面很有趣，你可能会觉得在公交车上读它有点尴尬。但其中的教训是永恒的，我实际上读了四遍，而且随时可以再读一遍，因为它很好地提醒了你表达方式有多重要。这并不是以一种负面或粗俗的方式，而是意识到人们首先关心的是他们自己。那是他们所处的身体，是他们所处的语境。当你思考领导团队、与人合作或做一个好配偶时，意识到这一点会非常强大。我是这本书的超级粉丝。
第二本是一本较新的书，我想大概出版了几年。是戴维·麦卡洛（David McCullough）写的关于莱特兄弟（Wright Brothers）的书。我一直在学习飞行，所以我对此非常着迷，但我认为这本书与每个人都有关。特别是对创业者，因为它讲述了一个没人认为能完成的“不可能的挑战”。甚至美国科学学会都不认为这能成功。而这些人拥有决心和承诺去实现它。我认为还有这种美丽的伙伴关系的力量。当然，他们是兄弟，兄弟并不总是相处得好，但他们做到了，这是一个美丽的故事。非常非常喜欢。
第三本书……实际上我把它带过来了，因为我知道你会问这个问题。我不知道你能不能看到，是《男孩、鼹鼠、狐狸和马》（The Boy, the Mole, the Fox, and the Horse）。这本书是 Jenny Yarden 送给我的，你可能认识她。它太棒了，是一个美丽的故事。它让你开怀大笑，也能教你一两件事。其中最经典的一句话是：“我们最大的自由之一，就是我们对事物的反应方式。”

---

### (01:25:32) Lenny

**English:**
Very Buddhist.

**中文翻译:**
非常有禅意。

---

### (01:25:33) Katie Dill

**English:**
Yes.

**中文翻译:**
是的。

---

### (01:25:35) Lenny

**English:**
What is a recent favorite movie or TV show that you really enjoyed?

**中文翻译:**
最近有什么非常喜欢的电影或电视剧吗？

---

### (01:25:39) Katie Dill

**English:**
Oppenheimer was amazing. And TV show? Shrinking. And that one was really good, and it actually really surprised me how funny and positive it was, because the trailer for it does not give that impression. But it was really good.

**中文翻译:**
《奥本海默》（Oppenheimer）太棒了。电视剧的话，《诚实诊疗室》（Shrinking）。那部剧非常好，它的幽默和积极程度真的让我感到惊讶，因为预告片并没有给人那种印象。但它真的很棒。

---

### (01:25:55) Lenny

**English:**
I've not seen that. What is a favorite interview question that you like to ask candidates?

**中文翻译:**
我还没看过那部。你最喜欢问应聘者的面试问题是什么？

---

### (01:26:01) Katie Dill

**English:**
Tell me what work you are most proud of. And the reason I ask that is because it helps me understand their taste and their judgment, what motivates them, what work they view as good and as a good outcome. It also helps me understand a little bit about what they like to do and where their gravity pulls them.

**中文翻译:**
“告诉我你最引以为豪的作品是什么。”我问这个问题的原因是，它能帮助我了解他们的品味和判断力、什么能激励他们、他们认为什么样的作品是优秀的、什么样的结果是好的。它也能帮助我了解他们喜欢做什么，以及他们的兴趣重心在哪里。

---

### (01:26:28) Lenny

**English:**
Is there a favorite product you recently discovered, be it an app or physical thing? Anything?

**中文翻译:**
最近有没有发现什么心头好产品？无论是 App 还是实物？

---

### (01:26:32) Katie Dill

**English:**
Yeah. As a parent, you should definitely know the Toniebox.

**中文翻译:**
有的。作为父母，你绝对应该知道 Toniebox。

---

### (01:26:37) Lenny

**English:**
Ooh, I don't don't know this. The Toniebox?

**中文翻译:**
噢，我不知道这个。Toniebox 是什么？

---

### (01:26:40) Katie Dill

**English:**
It's so good. The Toniebox. I should have brought it over, too. So it's like a squishy box, but it's a speaker. And your kids can control it. And the way they control it is these little figurines. This is also a brilliant product because you want to buy all these figurines. But the little figurines, it could be like Belle from Beauty and the Beast or Elsa from Frozen, and they place the figurine on top and that activates the stories that the thing reads to you or the songs that it plays for you. You can record your own voice so that you're telling stories to your child. And they control it all by themselves and they can drop it on the floor and it's all good. But the Toniebox, pretty awesome.

**中文翻译:**
它太棒了。Toniebox。我也该把它带过来的。它像一个软软的盒子，但其实是一个扬声器。你的孩子可以控制它。控制方式是这些小人偶。这也是一个天才产品，因为你会想买所有的人偶。这些人偶可以是《美女与野兽》里的贝儿，或者是《冰雪奇缘》里的艾莎。把人偶放在盒子顶上，就会激活它为你读故事或放音乐。你还可以录制自己的声音，给孩子讲故事。孩子可以完全自主控制，掉在地上也没事。Toniebox 真的很赞。

---

### (01:27:20) Lenny

**English:**
I just texted my wife to check this out so I don't forget. Amazing. Great. Very handy and timely. Do you have a favorite life motto that you'd like to share, come back to, find meaningful?

**中文翻译:**
我刚给我妻子发了短信让她看看，免得我忘了。太棒了，非常实用且及时。你有没有什么喜欢的座右铭想分享？或者你经常回味、觉得很有意义的话？

---

### (01:27:31) Katie Dill

**English:**
I don't say this out loud, but I've had it as a Post-It in my jewelry box and that I see regularly. Tomorrow is today. And what I mean by that is that so often I will in my head be like, "I'll do that tomorrow. I'll eat better tomorrow. I'll think about that vision tomorrow. I'll communicate better expectations tomorrow." And it's like those joke signs that "Free beer tomorrow." Because very easily, tomorrow just always moves on. And I needed to remind myself that it's actually, it is now today. Tomorrow is now today.

**中文翻译:**
我不会大声说出来，但我把它写在便利贴上贴在首饰盒里，经常能看到。那就是：“明天就是今天”（Tomorrow is today）。我的意思是，我经常在脑子里想：“我明天再做那件事”，“我明天再吃得健康点”，“我明天再思考那个愿景”，“我明天再沟通更好的预期”。这就像那些开玩笑的招牌写着“明天免费喝啤酒”一样，因为“明天”总是会往后移。我需要提醒自己，实际上，现在就是今天。明天已经变成了今天。

---

### (01:28:14) Lenny

**English:**
I love that one. I feel like I need to take all these mottoes, which are amazing. I love this question that I just invented. And just put them all on my wall here in this office.

**中文翻译:**
我喜欢这个。我觉得我需要把这些超赞的座右铭都记下来。我爱死这个我刚发明的问题了。我要把它们都贴在我办公室的墙上。

---

### (01:28:22) Katie Dill

**English:**
Yes, that's a great idea. You should make a book. Book of Lenny Mottoes.

**中文翻译:**
是的，好主意。你应该出一本书，叫《莱尼座右铭集》。

---

### (01:28:26) Lenny

**English:**
Oh, man. The Tribe of Mentors version of Lenny's podcast.

**中文翻译:**
天呐，那简直是莱尼播客版的《导师部落》（Tribe of Mentors）。

---

### (01:28:29) Katie Dill

**English:**
That's awesome.

**中文翻译:**
太棒了。

---

### (01:28:30) Lenny

**English:**
Is there a lesson that your mom or dad taught you that has really stuck with you, especially as a newish parent?

**中文翻译:**
有没有什么你父母教给你的教训让你刻骨铭心？特别是作为一名新手父母？

---

### (01:28:39) Katie Dill

**English:**
I think about this a lot. I am a mom of twin girls, and I feel so lucky that my parents raised me to see that accomplishment is based on merit and hard work. They never made me feel like because I was small and that I was not as strong as somebody, whatever it might be, that I wasn't able. My dad had me chopping wood and mixing cement as a young kid, and that certainly led me in one part to be a designer, but also to be able to pursue leadership. Even though sometimes I'm comfortable willing to be in the room where I am vastly outnumbered by people that don't look like me or just not letting that hold me back.
And actually, I thought about that the other day because I was riding in a Lyft to the airport. This was also at 4:00 AM, so it was a really hard time to be in a Lyft to gone to the airport. The driver was telling me about his kids, and actually he had twins. It was one boy and one girl, and so we were talking about twins. He's like, "Yeah, yeah, yeah, my girl, she's my princess. My son doesn't understand why I don't let her take out the garbage and why her job is to sweep and that's his job." He's like, "I'm not going to let her take out the garbage." I was sitting in the back of the car wondering, "Should I tell him, you're screwing it up?"
Just because she's a female doesn't mean that she's not able to do the jobs, even the hard ones and even the bad ones taking off the trash. I really do think that I'm so fortunate that that was never the way that my parents were looking at it. Now, today, I feel like that is very much a part of a little bit of my chutzpah and willingness to step out there because I hadn't been held back from those hard jobs earlier.

**中文翻译:**
我经常思考这个问题。我是两个双胞胎女儿的妈妈。我觉得很幸运，我的父母从小教育我，成就取决于功绩和努力。他们从未让我觉得因为我个子小或者不如别人强壮，我就不行。我爸爸在我很小的时候就让我劈柴、拌水泥，这在某种程度上引导我成为了一名设计师，也让我能够追求领导力。即使有时在房间里，周围的人看起来都和我完全不同，我也能泰然处之，不让这些因素阻碍我。
实际上，前几天我坐 Lyft 去机场时还想到了这件事。那是凌晨 4 点，坐车去机场很辛苦。司机跟我聊起他的孩子，他刚好也有一对双胞胎，一男一女。他说：“是啊，我女儿是我的小公主。我儿子不明白为什么我不让她去倒垃圾，为什么她的工作是扫地，而倒垃圾是他的工作。”他说：“我绝不会让她去倒垃圾的。”我坐在后座心想：“我该告诉他，你把事情搞砸了吗？”
仅仅因为她是女性，并不意味着她不能做那些工作，即使是辛苦的工作，甚至是倒垃圾这种脏活。我真的觉得自己很幸运，我的父母从未那样看待问题。现在，我觉得我身上那点“胆识”和勇于尝试的意愿，很大程度上源于我从小就没有被那些辛苦活儿拒之门外。

---

### (01:30:39) Lenny

**English:**
Final question. You mentioned that you fly planes, and this is actually related to my last question. I guess one that I was going to ask if that's true, you mentioned it is true. Is there a lesson that you've taken from learning to fly and flying that you've brought into product, leadership, design? Anything come to mind?

**中文翻译:**
最后一个问题。你提到你会开飞机，这实际上与我的上一个问题有关。我本来想问这是不是真的，你已经确认是真的了。在学习飞行和驾驶飞机的过程中，有没有什么教训是你带入到产品、领导力或设计中的？

---

### (01:30:57) Katie Dill

**English:**
First of all, learning to fly has been such an amazing experience because there haven't many things in my adult life where you feel like yourself going from knowing nothing about something and being able to do something, and what an incredible journey that is. Whether it's learning a language or whatever, that is awesome and highly recommended. But one of the key things that has definitely sat with me from the experience of learning how to fly that I definitely thought about how to bring it into my work is that when I was getting to the stage of being able to do things myself... My instructor is sitting there next to me and usually is right there at the controls with me, so if something goes wrong when I'm flying, he's right there.
I remember one of the first times when I was learning how to land where he moved his seat back. A lot. And so he was now out of touch with the controls. He could jump there if he needed to, but he really pulled back. And it was such an incredible visceral experience. I was like, "He trusts me. Right now, he is showing his faith in me to take this and take this challenge on." And I think about that all the time. It's just like, "How can I show my team, people I work with, my support and trust in them to take that challenge on?" I can't always move my seat back, but what might be the way? And so that's been a pretty great example of something I want to pull forward.

**中文翻译:**
首先，学习飞行是一次非常奇妙的经历，因为在我的成年生活中，很少有事情能让你感觉到自己从一无所知到能够驾驭，这是一个不可思议的旅程。无论是学习语言还是别的什么，这种感觉都很棒，强烈推荐。但在学习飞行的过程中，有一件关键的事情一直伴随着我，我也思考过如何将其带入工作：当我达到可以独立操作的阶段时……我的教练坐在我旁边，通常他会把手放在控制装置上，如果我飞的时候出了错，他就在那儿。
我记得有一次学习降落时，他把座椅往后挪了很多。这样他就够不到控制装置了。如果需要，他可以扑过来，但他真的退后了。那是一种极其深刻的直观体验。我想：“他信任我。现在，他正在展示他对我的信心，让我去迎接这个挑战。”我一直在思考这件事：我该如何向我的团队、我的同事展示我对他们的支持和信任，让他们去迎接挑战？我不能总是“把座椅后移”，但有什么类似的方法吗？这是一个我想一直发扬光大的绝佳例子。

---

### (01:32:35) Lenny

**English:**
That is an awesome metaphor. I feel like this whole episode is just full of beautiful metaphors. Also, just full of beauty. Katie, thank you so much for being here. Two final questions. Where can folks find online if they want to reach out and maybe ask some questions? And how can listeners be useful to you?

**中文翻译:**
这是一个很棒的隐喻。我觉得这一整集都充满了美丽的隐喻，也充满了美感。Katie，非常感谢你能来。最后两个问题：如果大家想联系你或问问题，可以在哪里找到你？听众们能为你做点什么？

---

### (01:32:50) Katie Dill

**English:**
First off, please do find me online because, as I talked about, we are in the pursuit of trying to build excellent things and it's always a work in progress, and so I'm always interested to learn how others do it and see how we can improve our own methods. I am Lil_Dill on Twitter, and then I think that name was taken on Threads, so I'm Lil_Dilly, with a Y, on Threads, and then I'm on LinkedIn and find me there. We're hiring, so definitely reach out at our job board, too. Stripe.com/jobs. Definitely check us out. We definitely would love to hear from you.

**中文翻译:**
首先，请务必在网上找我。因为正如我所说的，我们一直在追求打造卓越的东西，这永远是一个进行时。所以我总是很有兴趣了解别人是怎么做的，看看我们如何改进自己的方法。我的 Twitter 账号是 Lil_Dill，Threads 上这个名字被占用了，所以我是 Lil_Dilly（带个 Y）。我也在 LinkedIn 上。另外，我们正在招聘，所以也请关注我们的招聘页面：Stripe.com/jobs。一定要来看看，我们非常期待听到大家的声音。

---

### (01:33:30) Lenny

**English:**
Katie. Again, thank you so much for being here.

**中文翻译:**
Katie，再次感谢你的到来。

---

### (01:33:33) Katie Dill

**English:**
Thank you, Lenny.

**中文翻译:**
谢谢你，Lenny。

---

### (01:33:34) Lenny

**English:**
Bye, everyone.
Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at LennysPodcast.com. See you in the next episode.

**中文翻译:**
大家再见。
非常感谢收听。如果你觉得本期内容有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用中订阅本节目。此外，请考虑给我们评分或留下评论，这能极大地帮助其他听众发现这个播客。你可以在 LennysPodcast.com 找到所有往期节目或了解更多信息。下期节目再见。