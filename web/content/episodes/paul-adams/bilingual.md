# Paul Adams - 双语对照

This is the complete bilingual transcript for Lenny's Podcast featuring Paul Adams (CPO of Intercom).

---

### [00:00:00] Paul Adams

**English:**
This is a meteor coming towards you. This is going to radically transform society. And I think if people don't explore AI properly, it will leave them behind. I'd start with the thing your product does. "What's the core premise behind it? Why do people use it? What problem does it solve for them?" That kind of thing. So, go back to basics. And then ask, "Can AI do that?" And for a lot, the answer is going to be, "Yes, it can." For some it might be, "It can partially do it." And then, maybe for others, "It can't do that, at least not yet." And then, for some of it'll be replacement, AI would replace, it'll just do it. And, in other places, it'll be augmentation. It'll augment. It'll help people. But yeah, I think that you've got to match your product, and what AI can do, and what it will be able to do, and then ask yourself, "Okay, what are we going to do?"

**中文翻译:**
这就像是一颗正向你冲来的陨石。它将彻底改变社会。我认为如果人们不正确地探索 AI，就会被时代抛弃。我会从你的产品所做的事情开始。“它的核心前提是什么？人们为什么要用它？它为他们解决了什么问题？”诸如此类。所以，回归本质。然后问：“AI 能做那件事吗？”对于很多产品来说，答案将是：“是的，它可以。”对于某些产品，可能是：“它可以部分完成。”而对于另一些，可能是：“它做不到，至少现在还不行。”接着，在某些领域，AI 将会是替代性的，它会直接取代人工完成任务。而在其他地方，它将是增强性的。它会辅助并帮助人类。但总之，我认为你必须将你的产品与 AI 的现状及未来能力相匹配，然后问自己：“好，我们该怎么做？”

---

### [00:00:52] Lenny

**English:**
Today my guest is Paul Adams. Paul is chief product officer at Intercom, a role that he's held for over 10 years. Prior to this role, he was global head of brand design at Facebook, a user researcher at Google, a product designer at Dyson, and his first job was an automotive interior designer. In our conversation, Paul shares some amazing stories of failure, including the story of him giving a huge presentation where he froze on stage and had to walk off. And what he learned from these experiences of failure. We then get deep into how to think about AI as a part of your product strategy, including a ton of great examples from Intercom's experience going all in on AI. Paul also shares some of his favorite frameworks, and product lessons, and so much more.

**中文翻译:**
今天的嘉宾是 Paul Adams。Paul 是 Intercom 的首席产品官（CPO），他担任这一职位已超过 10 年。在此之前，他曾任 Facebook 的全球品牌设计负责人、Google 的用户研究员、Dyson 的产品设计师，而他的第一份工作是汽车内饰设计师。在我们的对话中，Paul 分享了一些精彩的失败故事，包括他在一次大型演讲中在台上忘词断片，不得不走下台的经历，以及他从这些失败经验中学到了什么。随后，我们深入探讨了如何将 AI 视为产品战略的一部分，包括 Intercom 全力投入 AI 过程中的大量精彩案例。Paul 还分享了他最喜欢的一些框架、产品教训等等。

---

### [00:01:34] Lenny (Continued)

**English:**
This is the first recording I've ever done not from my home studio, instead from a hotel room. So, this is a fun experiment for us all. With that, I bring you Paul Adams after a short word from our sponsors. This episode is brought to you by Eppo. Eppo is a next generation A/B testing and feature management platform built by alums of Airbnb and Snowflake for modern growth teams. Companies like Twitch, Miro, ClickUp and DraftKings rely on Eppo to power their experiments. Experimentation is increasingly essential for driving growth and for understanding the performance of new features. And Eppo helps you increase experimentation velocity while unlocking rigorous deep analysis in a way that no other commercial tool does. When I was at Airbnb, one of the things that I loved most was our experimentation platform, where I could set up experiments easily, troubleshoot issues, and analyze performance all on my own. Eppo does all that and more with advanced statistical methods that can help you shave weeks off experiment time and accessible UI for diving deeper into performance and out-of-the box reporting that helps you avoid annoying prolonged analytic cycles.

**中文翻译:**
这是我第一次不在家里的工作室，而是在酒店房间里进行的录音。所以，这对我们所有人来说都是一次有趣的实验。在听取赞助商的简短介绍后，我将为您带来 Paul Adams 的访谈。本集节目由 Eppo 赞助。Eppo 是由 Airbnb 和 Snowflake 的校友为现代增长团队打造的下一代 A/B 测试和功能管理平台。Twitch、Miro、ClickUp 和 DraftKings 等公司都依赖 Eppo 来驱动他们的实验。实验对于驱动增长和了解新功能的表现变得越来越重要。Eppo 能够帮助你提高实验速度，同时解锁其他商业工具无法提供的严谨深度分析。当我在 Airbnb 时，我最喜欢的事情之一就是我们的实验平台，在那里我可以轻松地设置实验、排除故障并独立分析表现。Eppo 实现了这一切，并结合了先进的统计方法，可以帮你缩短数周的实验时间，其易用的 UI 方便深入研究表现，开箱即用的报告能帮你避免烦人且漫长的分析周期。

---

### [00:02:40] Lenny (Continued)

**English:**
Eppo also makes it easy for you to share experiment insights with your team, sparking new ideas for the A/B testing flywheel. Eppo powers experimentation across every use case, including product, growth, machine learning, monetization, and email marketing. Check out Eppo at geteppo.com/lenny and 10X your experiment velocity. That's getE-P-P-O.com/lenny. This episode is brought to you by Hex. If you're a data person, you probably have to jump between different tools to run queries, build visualizations, write Python, and send around a lot of screenshots and CSV files. Hex brings everything together. Its powerful notebook UI lets you analyze data in SQL, Python, or no-code in any combination and work together with live multiplayer and version control.

**中文翻译:**
Eppo 还让你能轻松地与团队分享实验洞察，为 A/B 测试飞轮激发新灵感。Eppo 支持各种用例的实验，包括产品、增长、机器学习、变现和邮件营销。请访问 geteppo.com/lenny 查看 Eppo，让你的实验速度提升 10 倍。网址是 getE-P-P-O.com/lenny。本集节目由 Hex 赞助。如果你是数据从业者，你可能需要在不同工具之间切换来运行查询、构建可视化、编写 Python，并发送大量的截图和 CSV 文件。Hex 将一切整合在一起。其强大的笔记本 UI 允许你以任何组合方式使用 SQL、Python 或无代码分析数据，并通过实时多人协作和版本控制进行工作。

---

### [00:03:29] Lenny (Continued)

**English:**
And now, Hex's AI tools can generate queries and code, create visualizations, and even kickstart a whole analysis for you all from natural language prompts. It's like having an analytics copilot built right into where you're already doing your work. Then, when you're ready to share, you can use Hex's drag and drop app builder to configure beautiful reports or dashboards that anyone can use. Join the hundreds of data teams like Notion, AllTrails, Loom, Mixpanel, and Algolia using Hex every day to make their work more impactful. Sign up today at hex.tech/lenny to get a 60-day free trial of the Hex team plan. That's hex.tech/lenny. Paul, thank you so much for being here and welcome to the podcast.

**中文翻译:**
现在，Hex 的 AI 工具可以根据自然语言提示生成查询和代码、创建可视化，甚至为你启动整个分析。这就像在你的工作流程中内置了一个分析副驾驶（Copilot）。当你准备好分享时，可以使用 Hex 的拖拽式应用构建器来配置任何人都能使用的精美报告或仪表板。加入 Notion、AllTrails、Loom、Mixpanel 和 Algolia 等数百个数据团队，每天使用 Hex 让工作更具影响力。立即在 hex.tech/lenny 注册，即可获得 Hex 团队计划的 60 天免费试用。网址是 hex.tech/lenny。Paul，非常感谢你能来到这里，欢迎参加本播客。

---

### [00:04:14] Paul Adams

**English:**
Thanks, Lenny. Nice to be here.

**中文翻译:**
谢谢，Lenny。很高兴来到这里。

---

### [00:04:15] Lenny

**English:**
It's nice to have you here. I've heard so many good things about you from so many different people, so I'm really happy that we're finally doing this. Also, you have an Irish accent, which is always a boost for ratings in my experience, so thank you for bringing that with you here.

**中文翻译:**
很高兴你能来。我从很多人那里听到了关于你的好评，所以很高兴我们终于能做这期节目。另外，你带着爱尔兰口音，根据我的经验，这总是能提高收听率，所以感谢你把它带到这里。

---

### [00:04:26] Paul Adams

**English:**
Yeah, that's nice to hear.

**中文翻译:**
是的，听你这么说真好。

---

### [00:04:28] Lenny

**English:**
I wanted to start with a couple stories. So the first is your story of giving a keynote at Cannes. Can you share what happened there?

**中文翻译:**
我想从几个故事开始。第一个是你在戛纳（Cannes）做主旨演讲的故事。你能分享一下当时发生了什么吗？

---

### [00:04:38] Paul Adams

**English:**
Yeah, some things that happened in work are very memorable at the time and they don't really scar you. This goes in the book that have scarred for life. Yeah, it's good. Long story short, I was at Facebook just over a decade ago. Loved it at the time. I think it was a great place to be at the time. And, basically San Francisco, I did a lot of talks for Facebook internally and externally. Facebook had a keynote slot, always had a keynote slot at Cannes, the world's biggest advertising festival. And, the year prior, Zuck had been interviewed. He was the speaker, he'd been interviewed. He'd gotten a hard time on privacy. It didn't go well as well as they'd hoped.

**中文翻译:**
是的，工作中发生的一些事情在当时非常难忘，但并不会真的让你留下阴影。而这件事属于“终身阴影”系列。长话短说，十多年前我在 Facebook 工作。当时我很喜欢那里，那是一个非常棒的地方。当时我在旧金山，为 Facebook 做了很多对内和对外的演讲。Facebook 在戛纳——全球最大的广告节——一直有一个主旨演讲席位。前一年，扎克伯格接受了采访，他是演讲嘉宾。他在隐私问题上遇到了很大的麻烦，表现不如预期。

---

### [00:05:14] Paul Adams (Continued)

**English:**
So, the next year they asked me to do it. Maybe it was the Irish accent that made the offer come my way. And, yeah, I got out and spun a stage, the world's biggest advertising stage. And, I'd say, I was three, four minutes into the talk, a very similar talk when I'd given lots of times. And, I just froze. I couldn't remember what I was supposed to say. It was the first ever time in my life I'd rehearsed the talk word for word. Usually, I have talking points, and things get mixed around, and it's informal. This was media trained, "Do not say the wrong thing." Kind of talk. And I just could not remember what to say. I had some version of a panic attack, walked off-stage, I was still mic'd up, cursed. Everyone started laughing. I was like, "Geez, are they laughing at me? Oh my God, this is..."

**中文翻译:**
所以，第二年他们让我去。也许是因为爱尔兰口音，这个机会落到了我头上。于是，我走上了那个舞台，那是全球最大的广告舞台。演讲开始大概三四分钟，内容和我之前讲过很多次的非常相似。然后，我突然断片了。我完全记不起该说什么。那是我人生中第一次逐字逐句地排练演讲。通常我只有谈话要点，内容比较随意且非正式。但这次是经过媒体应对训练的，“千万不能说错话”的那种演讲。我就是想不起来词了。我当时有点恐慌发作，走下了台，身上还挂着麦克风，嘴里还骂了一句。全场都笑了起来。我心想：“天哪，他们是在笑我吗？噢我的天，这太……”

---

### [00:06:06] Paul Adams (Continued)

**English:**
But, I managed to turn it around, I walked back out. I'd been disarmed internally in my head. And, the most of it went well. And I was famous that night. Out in Cannes afterwards on whatever the sea front, it's just like rose everywhere. And yeah, I was famous and infamous for my performance.

**中文翻译:**
但我设法扭转了局面，又走了回去。我脑子里的那种紧绷感消失了。剩下的部分进行得很顺利。那天晚上我出名了。之后在戛纳的海滨大道上，到处都是玫瑰色（指派对氛围）。是的，因为那次表现，我既出了名，也留下了“恶名”。

---

### [00:06:26] Lenny

**English:**
I feel like you lived the worst nightmare that everybody has when they're thinking about giving a talk. And, I think what's interesting is you survived. And, I think that's a really interesting lesson is you could freeze in front of thousands of people, walk off-stage, and then it works out okay.

**中文翻译:**
我觉得你经历了每个人在想到演讲时都会有的最可怕的噩梦。有趣的是你挺过来了。这是一个非常有意义的教训：你可能在数千人面前断片，走下台，但最后结果依然还不错。

---

### [00:06:43] Paul Adams

**English:**
Yeah. And it all happened organically, I guess, or very naturally. But yeah, ever since then, every time I walk out onto a conference talk stage, still today, I have this tiny doubt in the back of my head. It's never happened since. But yeah, I think you have to go with it with these things, when life throws you these, whatever, curveballs you have got to adapt and it's not that big a deal. None of these things are that big a deal, at the end of the day. You move on and live and learn. So yeah, but I still hope it doesn't happen again.

**中文翻译:**
是的。我想这一切发生得很自然。但从那以后，直到今天，每当我走上会议演讲台，脑海深处总会有一丝小小的疑虑。虽然之后再也没发生过类似的事。但我觉得你必须顺其自然，当生活向你抛出这些“变化球”时，你必须去适应，这没什么大不了的。归根结底，这些事都没那么严重。你继续生活，边活边学。不过，我还是希望别再发生了。

---

### [00:07:15] Lenny

**English:**
I also hate public speaking and I always fear this is exactly what's going to happen to me. And so, I think this is nice to hear, that even when the worst possible thing basically happens, things can survive.

**中文翻译:**
我也讨厌公开演讲，我总担心这种事会发生在我身上。所以，听到即使发生了最糟糕的情况，事情依然能有转机，这感觉很好。

---

### [00:07:27] Paul Adams

**English:**
You can turn it around. Yeah.

**中文翻译:**
你可以扭转局面的。是的。

---

### [00:07:29] Lenny

**English:**
A second area I wanted to hear from is your time at Google. And, there's a couple products you worked on at Google. Both of them were not what you'd call big successes. And then, there's a transition to Facebook, which was also messy. Can you just share a couple stories from that time?

**中文翻译:**
我想听的第二个领域是你在 Google 的时光。你在 Google 参与了几个产品，它们都算不上巨大的成功。然后你跳槽到了 Facebook，那个过程也很混乱。你能分享几个那段时间的故事吗？

---

### [00:07:45] Paul Adams

**English:**
Yeah. Similar to the walking on stage thing, you live and learn. And, I was at Google for four years now and I was at Facebook for two and a half years or so. And, in both of those companies, this is at the height of... The social tech wave was at its peak. Google were very afraid of the existential threat posed by Facebook. Facebook were very confident they could pull off some new social advertising unit that would be an AdWords or something like that, that would destroy Google's revenue, eat them from the inside out. And so, being there at the time was fascinating and moving to the new companies. At Google, I worked on a lot of failed social projects, like you mentioned. Google Buzz, Google Ventilator, Google Plus. I think, a lot of the motivation for those projects came from a place of fear. It didn't come from a place of, "Let's make a great product for people. Let's really understand the things people struggle with when communicating with family and friends. Let's really, really try and create something wonderful." It came from a place of fear.

**中文翻译:**
是的。就像台上断片那件事一样，边活边学。我在 Google 待了四年，在 Facebook 待了大约两年半。在这两家公司工作时，正值社交技术浪潮的巅峰。Google 非常害怕 Facebook 带来的生存威胁。而 Facebook 则非常有信心，认为他们能推出某种新型社交广告单元，就像 AdWords 那样，从而摧毁 Google 的收入，从内部蚕食他们。所以，当时身处其中并跳槽到新公司是非常奇妙的经历。在 Google，我参与了许多失败的社交项目，正如你提到的：Google Buzz、Google Ventilator、Google Plus。我认为，这些项目的很多动力源于恐惧。它不是源于“让我们为人们做一个伟大的产品，让我们真正理解人们在与家人朋友沟通时的困扰，让我们努力创造一些美妙的东西”，而是源于恐惧。

---

### [00:08:47] Paul Adams (Continued)

**English:**
And so, during those times, I learned I think how not to lead in places. And by the way, I should say, at the time in Google, there was other things happening that were amazing, like Google were building Google Maps, an incredible product. One of my favorite products. I think one of the best products ever made. They were building Android. I was in the mobile team and the mobile apps team at the time, the Android came out. So, they can make an incredibly good product. So, I just happened to be in the social side, which wasn't as good. And, yeah, Google Buzz is a privacy disaster, and Google Plus is similar.

**中文翻译:**
所以，在那段时间里，我学会了在某些情况下“不该如何领导”。顺便说一下，当时在 Google 还有其他非常了不起的事情在发生，比如他们在开发 Google Maps，那是一个不可思议的产品，我最喜欢的产品之一，也是有史以来最伟大的产品之一。他们还在开发 Android。当时我在移动团队和移动应用团队，Android 刚好发布。所以，他们是有能力做出极好产品的。我只是碰巧在社交部门，那里做得没那么好。是的，Google Buzz 是个隐私灾难，Google Plus 也差不多。

---

### [00:09:24] Paul Adams (Continued)

**English:**
And so, halfway through I'd published research about groups and I'd done a ton of research. An interesting side note there is, at the time, I was working in the UX team as a researcher, I was been asked to do a lot of tactical research, like usability study type stuff, like can people use these products? And, I ended up doing a lot of formative research as well in the same session. So, I'd say to the team, "Hey, I'll do the research. I'll answer your questions. But also, I'm going to do this other thing, and I'm going to take 20 minutes doing that." And so, what we used to do is, what I used to do with people was map out their social network, all the people in it, their family, their friends, how they communicate. We'd map on all the channels, we'd talk about what worked well, what didn't. And, we did this with dozens and dozens of people over the course of maybe 18 months. And the same pattern emerged every single time, which was, people need way better ways to communicate with small groups of family and friends.

**中文翻译:**
在那期间，我发表了关于“群组”的研究，我做了大量的调研。一个有趣的插曲是，当时我在 UX 团队担任研究员，我被要求做很多战术性研究，比如可用性测试，看看人们会不会用这些产品。但我最终在同一环节中也做了很多形成性研究（formative research）。我会对团队说：“嘿，我会做你们要的研究，回答你们的问题。但同时，我还要做另一件事，我会花 20 分钟做那个。”我当时做的是让人们画出他们的社交网络，包括其中的所有人、家人、朋友以及他们的沟通方式。我们会标出所有渠道，讨论哪些好用，哪些不好用。在大概 18 个月的时间里，我们对几十个人做了这样的调研。每次都会出现同样的模式：人们需要更好的方式与小规模的家人和朋友群组进行沟通。

---

### [00:10:17] Paul Adams (Continued)

**English:**
And I look back now and go like, "WhatsApp." Or it may be iMessage if everyone's on Apple. But, really obvious in hindsight. But at the time, not obvious. And so, we tried to build a product around that called Google Plus. But, again, it came from the wrong place. And so, halfway through, the research that I've done, all this research had been made public through a conference talk. And, Facebook noticed, got in touch, one thing led to another, and I left and joined Facebook, which was an amazing thing for me, personally. Facebook was an amazing place at the time and exciting. And they were trying to do things for the other reasons, the good reasons. "Okay, let's build an amazing product for people."

**中文翻译:**
现在回想起来，那就是“WhatsApp”，或者如果大家都在用苹果，那就是 iMessage。事后看来显而易见，但当时并非如此。于是我们尝试围绕这一点打造一个名为 Google Plus 的产品。但是，它再次源于错误的出发点。进行到一半时，我所做的所有这些研究通过一次会议演讲公开了。Facebook 注意到了，联系了我，随后顺理成章地，我离开并加入了 Facebook，这对个人来说是一件很棒的事。当时的 Facebook 是一个令人兴奋的地方，他们是为了正确的理由在做事：“好，让我们为人们打造一个惊人的产品。”

---

### [00:11:01] Lenny

**English:**
And this was during Google Plus being built, you basically shifted.

**中文翻译:**
所以是在 Google Plus 还在开发的过程中，你基本上就跳槽了。

---

### [00:11:04] Paul Adams

**English:**
Yeah, midway, I'm stressed to even tell you about it. The project hadn't been launched, it was still under wraps. It was highly confidential. Google had done a lot of things at the time that were the first for them. I don't know if they've done them since. But things like, everyone worked in Google Plus was sent to a different building. That building had a different key card. If you didn't work in Google Plus you could not get in. All sorts of counter-cultural things at the time. And, as a result, there was a lot of antagonism internally for Google Plus. And so, when I left in the middle of the project, leaving with all of the plans in my head to the enemy, some people saw me as a traitor, understandably. Other people thought I was enlightened, too fancy you talked to. But it was the right thing for me to do. But at the time, it was a hard thing to do.

**中文翻译:**
是的，进行到一半时。跟你说这些我都觉得有压力。当时项目还没发布，还在保密阶段，属于高度机密。Google 当时做了很多前所未有的尝试，我不知道他们后来还做没做过。比如，所有参与 Google Plus 的人都被派往另一栋大楼。那栋楼有专门的门禁卡，如果你不在这个项目组，你就进不去。这在当时非常反文化。结果，公司内部对 Google Plus 产生了很多抵触情绪。所以当我中途离开，带着脑子里所有的计划投奔“敌人”时，有些人把我当成叛徒，这可以理解。另一些人则觉得我觉醒了。但对我来说，那是正确的决定，尽管在当时非常艰难。

---

### [00:11:56] Lenny

**English:**
I know there's also a lot of scrutiny in what you took with you and the process.

**中文翻译:**
我知道当时对于你带走了什么以及整个过程，也有很多审查。

---

### [00:12:01] Paul Adams

**English:**
Yeah, when I left, Google assumed that I was one of the spies. I was quarantined. I told them I was leaving. They forensically analyzed my laptop, all sorts of stuff like that. So, it was pretty intense. Looking back, I can understand why that happened. But the root cause for me is that the project has been run from a place of competitive fear, which I don't think leads to good things.

**中文翻译:**
是的，当我离开时，Google 假设我是间谍之一。我被隔离了。我告诉他们我要走，他们对我的笔记本电脑进行了取证分析，诸如此类。所以当时气氛非常紧张。回想起来，我能理解为什么会那样。但对我来说，根本原因在于那个项目是基于竞争恐惧而运作的，我认为这不会带来好结果。

---

### [00:12:32] Lenny

**English:**
So one of the themes through the stories you just shared is, let's say, failure is... I don't want to make it that harsh, but just things not working out. And, I'm curious as a product leader, how important you think that is for people to go through, if you think that's something that is almost a good thing? And, I guess just is there anything there that you find helpful as a coach, as a mentor, as two people that are trying to become basically you?

**中文翻译:**
你刚才分享的故事中有一个主题，那就是失败，或者说事情进展不顺。作为一名产品领导者，我很好奇你认为经历这些对人们来说有多重要？你是否认为这几乎是一件好事？作为教练或导师，对于那些想要成为像你这样的人，你有什么有用的建议吗？

---

### [00:12:58] Paul Adams

**English:**
Very, very. It still is. It still is. I've personally failed so many times. There are two stories and the Google one is long deep tentacles. They're two stories. I failed a ton of times. I remember, when I was at Facebook I was very happy. And, I knew Eoghan and Des, the co-founders of Intercom. And, they were trying to persuade me to join Intercom. We were like, it was a 10-person company at the time. But, Eoghan said something to me at that time which has stuck with me ever since. He said, "At Facebook, you can design the product. But at Intercom, you can design the company." And, that was extremely appealing to me, a great pitch. He's like, "Just design the company with us that you want to work in."

**中文翻译:**
非常重要，至今依然如此。我个人失败过很多次。刚才那是两个故事，Google 的那个影响深远。我失败过无数次。记得我在 Facebook 时过得很开心。我认识 Intercom 的联合创始人 Eoghan 和 Des。他们当时试图说服我加入 Intercom，那时公司只有 10 个人。Eoghan 当时对我说了一句话，一直影响我至今。他说：“在 Facebook，你可以设计产品；但在 Intercom，你可以设计公司。”这对我极具吸引力，是一个绝佳的推销词。他说：“就和我们一起设计一家你想在其中工作的公司吧。”

---

### [00:13:41] Paul Adams (Continued)

**English:**
And so, part of that was a company that embraces failure, that says it's okay to try things. I'm a big believer in big bets, high risk, high reward. I don't get as excited about incremental things. No, I haven't said that. There's of course a place for that too, especially as companies get bigger. But, I get excited about big bets. And if you make big bets, you're going to get a lot of it wrong. So a lot of the principles that we built here at Intercom are in building software.

**中文翻译:**
所以，其中的一部分就是建立一个拥抱失败的公司，一个认为尝试新事物是可以的公司。我非常相信“大赌注、高风险、高回报”。我对渐进式的改进没那么兴奋。当然，我也不是说那不重要，尤其是当公司变大时，渐进式改进也有其地位。但我对大赌注感到兴奋。如果你下大赌注，你就会犯很多错误。所以我们在 Intercom 建立的很多原则都体现在软件开发中。

---

### [00:14:09] Paul Adams (Continued)

**English:**
We have a principle called Ship to Learn. And, we've actually changed it since. It's over on the wall here. Ship fast, ship early, ship often is what it says now. You say Ship to Learn. Ship fast, ship early, ship often. So, in that idea is the idea of failure. It's not going to go right. And, it's going to go wrong more often than not. But if you ship early, and fast, and learn fast, you can change fast, and you can improve fast. And, that's the culture that we, as much as possible, try to embrace and teach people. But it's much easier said than done.

**中文翻译:**
我们有一个原则叫“以出货促学习”（Ship to Learn）。后来我们改了，就在那边的墙上写着。现在写的是“快速出货、尽早出货、频繁出货”。这个理念中就包含了失败的可能性。事情不会总是一帆风顺，而且往往会出错。但如果你出货早、出货快、学习快，你就能快速改变并快速改进。这就是我们尽可能尝试拥抱并教给员工的文化。但知易行难。

---

### [00:14:43] Lenny

**English:**
Yeah. Especially when you're in the moment like, "God dammit. Everything's going to fall apart. I really messed this one up."

**中文翻译:**
是的。尤其是当你身处其中，心想：“该死，一切都要崩盘了，我真的搞砸了。”

---

### [00:14:48] Paul Adams

**English:**
Yeah. And there's a trade-off with quality that people really struggle with. We've high standards of ourselves. A lot of Intercom comes from a design founder background. We value the craft a lot. We never want to be embarrassed by what we ship. So there's a real tension there, a real trade-off, where people have these high standards, which we encourage. We encourage them to ship fast, and learn, and make mistakes. It's a constant tension that we're navigating.

**中文翻译:**
是的。而且在质量上存在权衡，这让人们很纠结。我们对自己有很高的标准。Intercom 的很多基因源于设计师创始人的背景。我们非常看重工艺。我们绝不想为自己发布的东西感到尴尬。所以这里存在一种真实的张力，一种权衡：人们有这些高标准（我们鼓励这一点），同时我们也鼓励他们快速发布、学习并犯错。这是我们一直在处理的一种持续的张力。

---

### [00:15:17] Lenny

**English:**
Speaking of taking big bets and going all in, I know there's been a huge shift at Intercom to move towards AI and embrace AI. And so, maybe just to start broadly, I'm curious just what are some of your broader insights or surprises so far in how you've thought about AI and how you think AI will integrate into product and product strategy?

**中文翻译:**
说到下大赌注和全力投入，我知道 Intercom 已经发生了巨大的转向，全面拥抱 AI。所以，先从大方向聊起，我很想知道到目前为止，关于你如何思考 AI 以及你认为 AI 将如何融入产品和产品战略，你有哪些宏观的见解或感到惊讶的地方？

---

### [00:15:39] Paul Adams

**English:**
What day that ChatGPT launch? November 29th, I think, last year. Ever since that day, I literally wake up every day thinking about AI pretty much. And, I read as much as possible and still feel like I'm way behind in it. I think, for me, when I talk to you about AI, people typically fall into one of two camps. You're either all in, really truly all in. This is a meteor coming towards you. This is bigger than mobile as a technology shift, as big as the internet. Maybe it's bigger than the internet itself as a technology shift, the way it'll shape society. So I'm all in. I've gone over the hill or whatever. I'm over the other side. And so, there's people in that camp.

**中文翻译:**
ChatGPT 是哪天发布的？我想是去年 11 月 29 日。从那天起，我几乎每天醒来都在思考 AI。我尽可能多地阅读相关资料，但仍觉得自己落后很多。对我来说，当我谈论 AI 时，人们通常分为两个阵营。要么你全力投入，真正地全力投入。这就像一颗正向你冲来的陨石。作为技术变革，它比移动互联网更重大，和互联网本身一样重大。甚至在塑造社会的方式上，它可能比互联网本身还要重大。所以我全力投入，我已经翻过了那座山，站在了另一边。这是其中一个阵营。

---

### [00:16:23] Paul Adams (Continued)

**English:**
And then, I think there's people in another camp, which is, "I've heard this before. It's hype. Last year was crypto. It was Web3. None of those things worked out. There was the metaverse." So, there's definitely I think a lot of skepticism or maybe cynicism around it. And I don't understand why. The other things didn't really pan out. The metaverse is coming back. And, I'm trying to remember, there's the law where you have the hype, and then the trough of disillusionment, and then you come out the other side.

**中文翻译:**
然后，我认为还有另一个阵营的人，他们觉得：“我以前听过这种说法，这只是炒作。去年是加密货币，是 Web3，结果都没成。还有元宇宙。”所以，我认为肯定存在很多怀疑甚至愤世嫉俗的情绪。我不明白为什么。其他那些东西确实没怎么实现。元宇宙正在回归。我试着回想一下，那个定律叫什么来着，就是先有炒作，然后是幻灭的低谷（trough of disillusionment），最后从另一边走出来。

---

### [00:16:54] Lenny

**English:**
Yeah, that little curve.

**中文翻译:**
是的，那条小曲线（指技术成熟度曲线）。

---

### [00:16:55] Paul Adams

**English:**
Yeah. And I think that's where a lot of people might be, where there was so much hype, it was so noisy, and still is a little bit so noisy that you tune it out a little bit. And, I think, some people have fallen into that camp. I'm all in in the other camp. This is going to radically transform society and it blows my mind even seeing new types of things that come out, like ChatGPT Vision just came out recently, and just seeing the things that people can do with it. And we're just scratching the surface still. So, we're all in, for sure.

**中文翻译:**
是的。我认为很多人可能正处于那个阶段，因为之前的炒作太多、太嘈杂了，现在依然有点嘈杂，以至于你会下意识地屏蔽它。我觉得有些人就掉进了那个阵营。而我完全属于另一个阵营。AI 将彻底改变社会，看到新事物的出现让我大开眼界，比如最近发布的 ChatGPT Vision，看到人们用它能做的事情，简直不可思议。而我们现在还只是触及了皮毛。所以，我们肯定会全力以赴。

---

### [00:17:31] Lenny

**English:**
Awesome. I want to unpack that. But, I think there's also this camp of people that like, "Yes, something big is happening. I just don't have the time to understand, to build, to play around." What have you found and/or what advice would you share to people that are just like, "I want to go deeper down this rabbit hole. I just don't know where to start, because I have so much work to do already and this isn't a side thing."

**中文翻译:**
太棒了。我想深入探讨一下。但我也觉得还有一类人，他们觉得：“是的，大事正在发生，但我就是没时间去理解、去构建、去尝试。”你发现了什么，或者你会给那些想说“我想深入研究，但我不知道从哪里开始，因为我已经有很多工作要做，而这又不是一件可以兼职的小事”的人什么建议？

---

### [00:17:53] Paul Adams

**English:**
The advice I have for people, and the advice I have for myself, I'm in that too, I wake up every day to too many emails, and Slack chats, and people knocking on my door, and my desk, and all things. So, this is a challenge for me too. You just have to take the time. There's just no other way for me. And that to me doesn't mean... It's about priorities. It doesn't mean that you need to work crazy hours. I don't believe in working crazy hours. I don't know what hours I work. I don't know, 50 hours a week maybe. I think, beyond that, you start to make bad decisions and things like that. You get tired. And you need to live the rest of your life. You got to put it into your day. Whether that's setting aside dedicated time to read.

**中文翻译:**
我给别人的建议，也是给我自己的建议（我也面临同样的问题），我每天醒来都要面对太多的邮件、Slack 聊天、敲门声、办公桌上的琐事等等。所以，这对我来说也是个挑战。你必须挤出时间。对我来说没有别的办法。这并不意味着……这关乎优先级。这并不意味着你需要疯狂加班。我不相信疯狂加班那一套。我不知道我每周工作多少小时，大概 50 小时吧。我认为超过这个限度，你就会开始做出错误的决定。你会疲倦。你还需要过好剩下的生活。你必须把它融入到你的日常中，比如拨出专门的时间来阅读。

---

### [00:18:33] Paul Adams (Continued)

**English:**
Reading is the thing. You got to read. You got to stay up to date, and you got to play with things, and try things. If you don't have ChatGPT... If you don't have a... I can't remember if it's a pro licenser, whatever, but if you haven't upgraded to get access to things like GPT for Vision, where you can take photos and you have the mobile app. And I was going out for dinner last Friday night with my wife. I try not to take work to dinner with my wife. But, I wanted to try it. And, I took some photos of her food. And, you can do all sorts of crazy stuff, like tell you how healthy the meal is or whatever.

**中文翻译:**
阅读是关键。你必须阅读，必须保持与时俱进，必须去把玩、去尝试。如果你还没有 ChatGPT……如果你还没有升级（我不记得是叫 Pro 还是什么），如果你还没能用上 GPT Vision，就是那种你可以拍照的功能，而且你还有手机 App。上周五晚上我和妻子出去吃晚饭，我尽量不在和妻子吃饭时谈工作，但我很想试试。我拍了几张她点的食物的照片。你可以做各种疯狂的事，比如让它告诉你这顿饭有多健康之类的。

---

### [00:19:07] Lenny

**English:**
Oh, wow.

**中文翻译:**
噢，哇。

---

### [00:19:07] Paul Adams

**English:**
Anyway. You got to try it. You just got to try it. So, my advice people is, you've got to try it. You've got to set aside the time, or it'll pass you by. It does remind me the mobile wave about a decade ago. Again, I was at Google at the time, I was working on the mobile team. So I guess, it was my job to stay on top of things. But, at that time, some companies like Facebook went all in on it, maybe a bit late, but they eventually made the brave decision. I think if people don't explore AI properly, it will leave them behind.

**中文翻译:**
总之，你得去尝试。你必须亲自尝试。所以我的建议是，你必须去试，必须拨出时间，否则它会与你擦肩而过。这让我想起了十年前的移动浪潮。当时我在 Google 的移动团队工作，所以保持领先是我的职责。但那时，像 Facebook 这样的公司全力投入了移动端，虽然可能晚了一点，但他们最终做出了勇敢的决定。我认为如果人们不正确地探索 AI，它就会把他们甩在身后。

---

### [00:19:38] Lenny

**English:**
It reminds me, I think, at Facebook, Zuck, and also Airbnb, Brian did this, is he said, "Any mocks you show me for new product designs have to be in a mobile app or on a mobile web. They can no longer be desktop for now."

**中文翻译:**
这让我想起，在 Facebook，扎克伯格，还有 Airbnb 的 Brian 也这么做过，他说：“你给我看的任何新产品设计原型（mocks）都必须是在移动 App 或移动网页上的，暂时不能再用桌面端原型了。”

---

### [00:19:50] Paul Adams

**English:**
Right. Yeah. Same with Facebook. Yeah, that's right.

**中文翻译:**
对，Facebook 也是这样。没错。

---

### [00:19:54] Lenny

**English:**
I guess, do you think that that's the way to approach this is as a leader, just, "Everything you bring me needs to have some AI component." That sounds probably not like a good idea, but is there something that you're thinking about, or have done of just convincing people this is where you want to spend your time?

**中文翻译:**
我想，你认为作为领导者，这是处理这件事的方式吗？比如要求“你带给我的任何东西都必须包含 AI 组件”。这听起来可能不是个好主意，但你有没有考虑过，或者已经做过什么，来让人们相信这就是你应该投入时间的地方？

---

### [00:20:05] Paul Adams

**English:**
Yeah, it's harder, for sure. It's harder, because-

**中文翻译:**
是的，这肯定更难。更难是因为——

---

### [00:20:08] Lenny

**English:**
You don't want to force it.

**中文翻译:**
你不想强迫。

---

### [00:20:09] Paul Adams

**English:**
... Yeah, a lot of the tech is invisible. We have a machine learning team we've had on here for a long time, so we've been working in this space for quite some time. But, it's funny, even if you go back 18 months, I think if I was on your podcast 18 months ago and you said to me like, "Hey, what do you think about AI?" I would've said something like, "It's not real. Machine learning's real, let's talk about that." So, things change, and my perception of it's changed. But a lot of the improvements are behind the scenes. They're with large language models or different types of things people are building in the background of infrastructure.

**中文翻译:**
……是的，很多技术是不可见的。我们很早就有机器学习团队了，所以在这个领域已经耕耘了相当长的时间。但有趣的是，即使回到 18 个月前，如果当时我参加你的播客，你问我：“嘿，你怎么看 AI？”我可能会说：“那不是真的，机器学习才是真的，我们聊聊那个吧。”所以，情况在变，我的认知也在变。但很多改进是在幕后的，涉及大语言模型（LLM）或人们在基础设施后台构建的各种东西。

---

### [00:20:43] Paul Adams (Continued)

**English:**
So I don't know what it looks like to design mobile mock-ups that are AI mock-ups. But I do think that people need to start really thinking strategically. Maybe it's just not a mock-up stage, but start to think really strategically about their product and whether it's in the line of the media, or it's coming or not. It's not everything is. And if so, for some I think they require a foundational strategic change. Others, it might be less so. But, I think that's actually the head space that I think people need to be in.

**中文翻译:**
所以我不知道所谓的“AI 原型”长什么样。但我确实认为人们需要开始进行真正的战略思考。也许不只是在原型阶段，而是开始从战略高度思考他们的产品，思考它是否处于那颗“陨石”的撞击路线上。并不是所有东西都在撞击路线上。如果是的话，我认为对于某些产品，它们需要基础性的战略变革；对于另一些，可能程度轻一些。但我认为这才是人们需要进入的思考状态。

---

### [00:21:17] Lenny

**English:**
Can you impact that further? What does that look like to really think deeply about whether your product is in the way of the meteor?

**中文翻译:**
你能进一步展开吗？深入思考你的产品是否挡在陨石的路上，具体是什么样的？

---

### [00:21:25] Paul Adams

**English:**
You can get sidetracked by the technology, for sure. And I do. I just mentioned, hey, going out for dinner and taking a photo of my food. You can get sidetracked by the tech and some of it's really cool. I wouldn't start there. I'd start with the thing your product does. What's the core premise behind it? Why do people use it? What problem does it solve for them? That kind of thing. And then, ask the question. So go back to basics. "Okay, what is my product for? And why do people love it?' And then ask, "Can AI do that?" And for a lot the answer's going to be, "Yes, it can." For some, it might be, "It can partially do it." And then, maybe for others, "It can't do that, at least not yet."

**中文翻译:**
你肯定会被技术带偏。我也会。就像我刚才提到的，出去吃晚饭拍食物照片。你会被技术吸引，有些确实很酷。但我不会从那里开始。我会从你的产品所做的事情开始。它的核心前提是什么？人们为什么要用它？它解决了什么问题？诸如此类。然后问那个问题。回归本质：“好，我的产品是干什么的？为什么人们喜欢它？”然后问：“AI 能做那件事吗？”对于很多产品，答案会是：“是的，它可以。”对于某些产品，可能是：“它可以部分完成。”对于另一些，可能是：“它做不到，至少现在还不行。”

---

### [00:22:07] Paul Adams (Continued)

**English:**
So you're going to need to map what your product does against what AI can do. And AI can do a lot. It can write. I'll give you a list. It can write, it can summarize, it can summarize text, it can write text, it can answer queries, it can find facts, it can scan text, it can scan images. It can listen to your voice and repeat it. It can take actions. That's the next big thing coming. It can take actions, actually do things. It could like, I mean, "Hey AI. Whatever the AI is called. "Change my flight to Tuesday." Right? It can do things like that.

**中文翻译:**
所以你需要将你的产品功能与 AI 的能力进行映射。AI 能做很多事。它可以写作。我给你列个清单：它可以写作、可以总结、可以总结文本、可以撰写文本、可以回答查询、可以查找事实、可以扫描文本、可以扫描图像。它可以听你的声音并重复。它可以采取行动。这是接下来的重头戏。它可以采取行动，真正去做事。比如，“嘿 AI（不管它叫什么），把我的航班改到周二。”对吧？它可以做这类事情。

---

### [00:22:46] Paul Adams (Continued)

**English:**
And so, it can do a lot of things. It can build rules. So, I think any product that has any workflow in it, which is almost all B2B SaaS products, any product that has multimedia in it, they're in the media line or whatever. I don't don't know if this metaphor is working. But, the media is coming and they're in its path. And so, for a lot of these products that you just need to look at what AI can do. And then, for some of it'll be replacement. AI would replace, it'll just do it. And, in other places it'll be augmentation. It'll augment. It'll help people as the copilot ideas that are going around. But yeah, I think that you've got to map your product, and what AI can do, and what it will be able to do, and then ask yourself, "Okay, what are we going to do?"

**中文翻译:**
所以，它能做很多事。它可以构建规则。因此，我认为任何包含工作流的产品（几乎所有的 B2B SaaS 产品都是如此），任何包含多媒体的产品，它们都在陨石的撞击路线上。我不知道这个比喻是否恰当，但陨石正在袭来，而它们就在路径上。对于这些产品，你只需要看看 AI 能做什么。然后，对于其中一部分，它将是替代性的。AI 会取代人工，直接完成任务。而在其他地方，它将是增强性的。它会起到增强作用，像现在流行的“副驾驶”（Copilot）理念那样帮助人类。但总之，我认为你必须映射你的产品、AI 现在的能力以及未来的潜力，然后问自己：“好，我们打算怎么做？”

---

### [00:23:33] Lenny

**English:**
Is there an example of that at Intercom or a different company of, "Here's a problem we're trying to solve? Oh, AI can actually do this fully for us."

**中文翻译:**
在 Intercom 或其他公司有没有这样的例子，比如“这是我们要解决的问题，噢，AI 实际上可以完全替我们完成”？

---

### [00:23:40] Paul Adams

**English:**
Oh, yeah. I'll give you Intercom first. Again, this date, I think it was November 29th, etched in our head. We have Fergal who was our head of machine learning. And, Fergal just turns around that day and he's like... Okay, I think he tweeted something actually. He had a tweet that day that was like, "This is it. This is the time. This is the moment. This is the before after." I actually often talk about people... because this is a framework I have, before, after moments. This is a before after moment. That was before. And that is after. And everything has changed. So, we literally ripped up our strategy almost entirely, and started again, from first principles and said, "Okay, why do people use Intercom?" Intercom is a customer support product. And then, very soon after that, Sam Altman, who's the founder and head of OpenAI, said, "Hey, one of the first industries that's going to be disrupted is customer service." We're like, "Yep."

**中文翻译:**
噢，有的。我先拿 Intercom 举例。再次强调，11 月 29 日这个日子深深印在我们的脑海里。我们的机器学习负责人 Fergal 那天转过身来说……我想他那天其实发了条推特，大意是：“就是现在。这就是那个时刻。这就是‘之前’与‘之后’的分水岭。”我经常谈论这个……因为这是我的一个框架，“之前/之后”时刻。这就是一个分水岭。那是“之前”，这是“之后”，一切都变了。所以，我们几乎完全撕毁了原有的战略，从第一性原理出发重新开始，问自己：“好，人们为什么要用 Intercom？”Intercom 是一个客户支持产品。紧接着，OpenAI 的创始人兼负责人 Sam Altman 说：“嘿，首批将被颠覆的行业之一就是客户服务。”我们心想：“没错。”

---

### [00:24:35] Paul Adams (Continued)

**English:**
So we did. We totally changed how we think, how we work, and we just went heads down and built a product called Fin. We built other things first actually. Fin came later, now that I think about it. But we went all in on it. It was a little bit of a bet the farm mindset. So we've done it. I think other companies like Google and Bard have to do it, and maybe they're a little bit slow, but it's so early in this tech cycle that, I think, they're fine. So yeah, we did. It was hard, but we had to do it.

**中文翻译:**
所以我们行动了。我们彻底改变了思考方式和工作方式，埋头苦干，打造了一个名为 Fin 的产品。其实我们先做了别的东西，现在回想起来，Fin 是后来才有的。但我们全力以赴了。这有点像“孤注一掷”的心态。我们做到了。我认为像 Google 和 Bard 这样的公司也必须这样做，也许他们慢了一点，但在这个技术周期中现在还很早，我认为他们没问题。所以是的，我们做了。这很难，但我们必须做。

---

### [00:25:13] Lenny

**English:**
Can you share briefly what Finn is just for folks that aren't familiar?

**中文翻译:**
你能为不熟悉的听众简单介绍一下 Fin 是什么吗？

---

### [00:25:16] Paul Adams

**English:**
Fin, first and foremost, is an AI chatbot. So, if you think about customer service, people have questions for a business, and historically, that was mostly email, and phone, and mostly ticketing based. You'd file a ticket, a lot of do not reply email, and so on. And then, came along conversational customer support, which is just basic messaging, like WhatsApp or iMessage, like I mentioned earlier. Now, there's bot first experiences and Fin is an AI chatbot, AI first, chatbot first. So the first line of defense for a customer support team is Finn, not a person. And so, it fundamentally changes. The results we've seen with Fin are mind blowing. Our biggest challenge is actually trying to help customer support teams think about organizational change.

**中文翻译:**
Fin 首先是一个 AI 聊天机器人。如果你思考一下客户服务，人们对企业会有疑问，历史上这主要是通过邮件、电话，且大多基于工单系统。你会提交一个工单，收到很多“请勿回复”的邮件等等。然后出现了对话式客户支持，也就是基础的消息传递，像我之前提到的 WhatsApp 或 iMessage。现在，出现了“机器人优先”的体验，而 Fin 就是一个 AI 聊天机器人，AI 优先，机器人优先。因此，客户支持团队的第一道防线是 Fin，而不是人。这发生了根本性的变化。我们在 Fin 上看到的结果令人震惊。我们最大的挑战实际上是尝试帮助客户支持团队思考组织变革。

---

### [00:26:05] Paul Adams (Continued)

**English:**
The tech is way ahead. It's actually people wrapping their heads around what this means for the role, the teams, loads of cool stuff, like new types of jobs for people, like conversation designers, a job we have where you design the conversations that Fin does or managers. So anyway, that's what Fin is. Fin has expanded. So, Fin is now also in our Intercom inbox. They've placed a people answer queries, customers support queries, and now Fin's in there too, helping the support reps. Suggesting answers for them to use, or helping them rephrase things. So, it's now augmenting people as well as answering questions by itself.

**中文翻译:**
技术已经遥遥领先。现在的关键是人们如何理解这对角色、团队意味着什么，这其中有很多酷炫的东西，比如人们的新型工作岗位——对话设计师（我们就有这个职位，负责设计 Fin 进行的对话）或管理员。总之，这就是 Fin。Fin 已经扩展了。现在 Fin 也出现在我们的 Intercom 收件箱中。那是人工回答查询、客户支持查询的地方，现在 Fin 也在那里，帮助支持代表。它会建议他们使用的答案，或帮助他们重新组织措辞。所以，它现在既能独立回答问题，也能增强人工的能力。

---

### [00:26:46] Lenny

**English:**
I think you're one of the few companies that has pivoted fully into AI. And, I think there's a lot of lessons here about how team structures might change, product strategy, priorities, things like that. So I'm curious just to unpack a couple more things here. First of all, what impact have you seen after going all in and going in this direction?

**中文翻译:**
我认为你们是少数几家完全转向 AI 的公司之一。我认为这里有很多关于团队结构可能如何变化、产品战略、优先级等方面的教训。所以我很好奇想在这里多挖掘几件事。首先，在全力投入并朝着这个方向发展后，你看到了什么影响？

---

### [00:27:05] Paul Adams

**English:**
It's very early, honestly, to be able to answer that properly. And it depends what you measure as success. So, again, there's a lot of hype and buzz with AI. So, if you're measuring it by interest, it's a huge success. Our target customer is customer support. Our customer support manager leader. And so, they're very curious. They're like, "Does it actually work?" Again, back to the earlier thing of there's so much hype, there's a bit of skepticism around it. "Does it actually work? Is it as good as a person?" And in customer support, people who tend to work in that role are typically very high empathy, care a lot about people. And so, they're like, "But is it as good as a person? Is it nice, friendly? Does it understand humanity?" And so, a lot of curiosity, and a lot of interests, and a lot of people trying it.

**中文翻译:**
老实说，现在要给出确切答案还为时过早。这取决于你如何衡量成功。AI 领域有很多炒作和热度。如果你用“关注度”来衡量，那是巨大的成功。我们的目标客户是客户支持部门，即客户支持经理和领导者。他们非常好奇。他们会问：“它真的有效吗？”再次回到之前说的，因为炒作太多，人们会有些怀疑。“它真的有用吗？它和人一样好吗？”在客户支持领域，从事这类工作的人通常具有极高的同理心，非常关心人。所以他们会问：“但它和人一样好吗？它亲切友好吗？它理解人性吗？”所以现在有很多好奇心、很多兴趣，也有很多人在尝试。

---

### [00:27:57] Paul Adams (Continued)

**English:**
We have some customers who are hugely successful with it. They can answer up to 50, 60, 70% of their inbound questions with Fin. So we've some customers who see huge success. But it's early. And so, has it transformed our business financially? Not yet. I think, all fast-growing startups... If you think of AI Intercom as, I guess, a new startup, even though we're 900 people, the growth curve, you're looking for this exponential curve, as opposed to big public company linear growth curve. With the exponential one, it takes a while. The first year or two years is the bottom of that. And so, I think we're still in the trying to figure out exactly what's going on, trying to talk to educate people. But, we have enough evidence to believe it's the future for sure.

**中文翻译:**
我们有一些客户使用它非常成功。他们可以用 Fin 回答高达 50%、60% 甚至 70% 的入站问题。所以我们看到了一些获得巨大成功的客户。但现在还很早。那么，它在财务上改变了我们的业务吗？还没有。我认为，对于所有快速增长的初创公司……如果你把 AI 时代的 Intercom 看作一家新的初创公司（尽管我们有 900 人），你会追求指数级增长曲线，而不是大型上市公司的线性增长曲线。指数曲线需要一段时间，前一两年处于底部。所以，我认为我们仍处于摸索阶段，试图弄清楚到底发生了什么，并努力教育市场。但是，我们有足够的证据相信这绝对是未来。

---

### [00:28:53] Lenny

**English:**
Are there any examples of either this product or other instances of AI just blowing your mind where you're just like, "Wow, I never imagined it would be this good"?

**中文翻译:**
有没有关于这个产品或其他 AI 实例让你大吃一惊的例子，让你觉得“哇，我从未想象过它会这么好”？

---

### [00:29:02] Paul Adams

**English:**
I go back to that before after thing. So, the first version of ChatGPT was a before, after, where we we've been working, like I said, in this space, we've had a machine learning team for a long time. The way our machine learning thing worked before ChatGPT was that there was not a manual setup. A customer support manager would have to orchestrate the bot, and teach it what to say, and just a lot of orchestration, a lot of teaching it. And then, ChatGPT showed up and it's like, "Oh, it can do it by itself." It gets it wrong sometimes. So, do people get the question wrong too? It's as good as a person nearly for a lot of these basic things. So that blew my mind. And then, that was, "Oh, it can answer questions." But then, you're like, it can reason.

**中文翻译:**
我还是回到那个“之前/之后”的说法。ChatGPT 的第一个版本就是一个分水岭。正如我所说，我们在这个领域深耕已久，很早就有机器学习团队。在 ChatGPT 出现之前，我们的机器学习运作方式需要大量人工设置。客户支持经理必须编排机器人，教它说什么，需要大量的编排和教学。然后 ChatGPT 出现了，就像是：“噢，它可以自己完成。”它有时会出错，但人类不也会答错问题吗？在很多基础事务上，它几乎和人一样好。这让我大为震撼。当时觉得：“噢，它可以回答问题。”但接着你会发现，它还能推理。

---

### [00:29:45] Paul Adams (Continued)

**English:**
There's actually a debate about whether is this reasoning or deduction. But, it can work things out. And, I'm not one for going down into these really philosophical things. I'm like, "We just need to build. Let's go back, build the product." Or whatever. But it can work things out. And that blew my mind. And, we fed ChatGPT and other companies too, we played with other LLMs, like Entropik and so on, it can work things out. And that was mind-blowing. Then you can see it doing things, like writing code. And I was like, "Wow, it's really good at writing code. What does that mean?" And then, you start thinking, here at Intercom we have a one to five ratio. So a PM has about five engineers on a team. And you're looking at this thing writing code and you're like, "What happens next? Do we need as many engineers or will their role change? And they'll start doing different types of things like reviewing code instead of writing code?"

**中文翻译:**
实际上关于这是“推理”还是“演绎”存在争论。但它可以解决问题。我不是那种喜欢钻研哲学命题的人，我觉得：“我们只需要构建，让我们回去做产品吧。”但它确实能解决问题，这让我很惊讶。我们测试了 ChatGPT 以及其他公司的模型，我们尝试了其他 LLM，比如 Anthropic 等等，它能解决问题。这太不可思议了。然后你看到它做一些事，比如写代码。我心想：“哇，它写代码真的很厉害。这意味着什么？”然后你开始思考，在 Intercom，我们的比例是 1 比 5，即一个 PM 对应团队里大约 5 个工程师。当你看到这玩意儿在写代码，你会想：“接下来会发生什么？我们还需要这么多工程师吗？还是说他们的角色会改变？他们会开始做不同的事情，比如审查代码而不是编写代码？”

---

### [00:30:41] Paul Adams (Continued)

**English:**
So that blew my mind. And then, the visual stuff, like I mentioned earlier, I think the visual thing was bigger than the original one. It can parse imagery, and it can help you see the world. You take a photo of your bike and say, "Hey, what's wrong?" And It'll tell you what's wrong, how to fix it. You can be traveling, take photos of stuff. It's in a different language. It's etched in stone on a 12th century cathedral. You're like, "What does that say?" And it'll tell you what it says. It's just like how to do that. This is what I'm actually repeating most to people these days, here in Ireland, if you want to be a radiologist, so study X-rays and tell people what's wrong, and so on, and forth, it's seven years training to learn that skill. So, seven years to be a radiologist, and then you're just into the job. AI, it seems it's already better at it. So, it's already better at it, and it can ingest every X-ray ever made. No human can ever read, and think about, and synthesize every X-ray ever made.

**中文翻译:**
这让我大开眼界。然后是视觉方面的功能，就像我之前提到的，我认为视觉功能的意义比最初的版本还要重大。它可以解析图像，帮助你观察世界。你拍一张自行车的照片问：“嘿，哪里坏了？”它会告诉你哪里有问题，以及如何修理。你在旅行时拍一些东西的照片，那是另一种语言，刻在 12 世纪大教堂的石头上。你问：“这上面写了什么？”它就能告诉你。这简直神了。这是我最近对人们说得最多的话：在爱尔兰，如果你想成为一名放射科医生，学习看 X 光片并告诉人们哪里出了问题，需要经过七年的培训才能掌握这项技能。七年才能成为放射科医生，然后才开始工作。而 AI 似乎已经做得更好了。它已经更出色了，而且它可以摄取有史以来拍摄的每一张 X 光片。没有任何人类能阅读、思考并综合有史以来所有的 X 光片。

---

### [00:31:45] Paul Adams (Continued)

**English:**
So, of course it's better. And then, you're like, "Okay, what happens now?" I guess, the whole job changes. Radiologists will not take x-ray. Well, I guess they might take them. But, they won't analyze them, for sure. They'll look at what AI says, check that it's right, and then it's bedside manner time. Tell the patient, maybe tell them what course. So the job just fundamentally changes. And by the way, that could be amazing. Here in Ireland, we have long queues for hospitals, epic waiting lists for people getting X-rays. So, this is a really good thing possibly for people. Here's the craziest one I have. AI can listen to your voice and copy it, so it can say things and it sounds exactly like you and it's really, really good. Almost in distinguishable. You're like, "That sounds like Paul." And so, I mentioned the Metaverse earlier. I don't know if you saw Zuck talks to Lex [inaudible 00:32:35]. See that?

**中文翻译:**
所以，它当然更强。然后你会想：“好，现在会发生什么？”我想，整个职业都会改变。放射科医生将不再拍摄 X 光片——好吧，也许他们还会拍，但他们肯定不会再去分析了。他们会查看 AI 的结论，检查是否正确，然后把精力花在“床边关怀”上：告诉患者情况，告诉他们治疗方案。所以这份工作发生了根本性的变化。顺便说一句，这可能是一件好事。在爱尔兰，医院排队很长，人们等候拍 X 光片的名单长得惊人。所以这对人们来说可能是一件非常好的事情。我还有一个最疯狂的例子：AI 可以听你的声音并复制它，它说出的话听起来和你一模一样，而且效果非常非常好，几乎无法分辨。你会觉得：“那听起来就是 Paul。”我之前提到了元宇宙，不知道你有没有看扎克伯格和 Lex 的对话？看到了吗？

---

### [00:32:35] Lenny

**English:**
Yep.

**中文翻译:**
看到了。

---

### [00:32:35] Paul Adams

**English:**
So that was my first, "Oh." For people who haven't seen it, they met in the Metaverse, I think, or some virtual world.

**中文翻译:**
那是我第一次感到“噢（震惊）”。对于没看过的人，他们是在元宇宙，或者说某种虚拟世界里见面的。

---

### [00:32:42] Lenny

**English:**
It was a black room.

**中文翻译:**
是在一个黑色的房间里。

---

### [00:32:44] Paul Adams

**English:**
In a black room. Yeah. And, the tech has come on so they can analyze your face and build a 3D model. It's really good, really, really close. So, you can imagine, that's going to get better. Based on the trajectory of that technology, it's going to get better. And so, the voice thing and the face thing means both of those things are almost indistinguishable from a real person. And, AI will be able to ingest all the things people say and do. And, when people die, it'll be able to replicate that person. And so, there's an afterlife, hey, your parent dies and you can still talk to them. And, that could be the weirdest thing. Maybe it's not good for people. I don't know. But, that tech is just around the corner. And the AI can answer your questions, mind-blowing. It's mind-blowing.

**中文翻译:**
在一个黑色的房间里。是的。技术已经进步到可以分析你的脸并建立 3D 模型。效果非常好，非常逼真。你可以想象，这还会变得更好。根据这项技术的发展轨迹，它会越来越强。所以，声音和面部技术意味着这两者几乎与真人无异。AI 将能够摄取人们所说所做的一切。当人们去世时，它将能够复制那个人。所以就有了“来世”——嘿，你的父母去世了，你仍然可以和他们交谈。这可能是最诡异的事情，也许对人类并不好，我不知道。但那项技术就在眼前。AI 还能回答你的问题，太震撼了。

---

### [00:33:35] Lenny

**English:**
There's actually a Black Mirror episode with that same premise, where-

**中文翻译:**
实际上有一集《黑镜》（Black Mirror）就是这个前提，在那集里——

---

### [00:33:38] Paul Adams

**English:**
That's right.

**中文翻译:**
没错。

---

### [00:33:39] Lenny

**English:**
... Yeah. And I don't think it ended well.

**中文翻译:**
……是的。而且我觉得结局并不好。

---

### [00:33:41] Paul Adams

**English:**
No.

**中文翻译:**
确实不好。

---

### [00:33:43] Lenny

**English:**
Be careful.

**中文翻译:**
要小心。

---

### [00:33:44] Paul Adams

**English:**
For sure. For sure. Yeah, I think, the [inaudible 00:33:48] and the voice translation thing is another one. I can't remember. Maybe it's in Mission Impossible, where it can take a voice, translate it, and translate it in real-time. And this tech is, again, just here, where if I was a native Spanish speaker and couldn't speak English, you and I could still have this podcast. Your voice would be translated in Spanish in real-time for me. It's, again, mind-blowing.

**中文翻译:**
当然。是的，我认为语音翻译是另一个重点。我不记得了，也许是在《碟中谍》里，它可以获取一段声音，然后实时翻译出来。这项技术现在也已经实现了，如果我母语是西班牙语且不会说英语，你和我仍然可以做这期播客。你的声音会实时为我翻译成西班牙语。这再次让人感到震撼。

---

### [00:34:10] Lenny

**English:**
We're actually working on dubbing/translating podcast episodes, which is all done through AI, where it figures out what you're saying, makes it Spanish, and then also changes your lips to match. And, we're trying to launch a couple of those. And that's actually very AI-based. Yeah.

**中文翻译:**
我们实际上正在研究播客节目的配音和翻译，全部通过 AI 完成：它识别你在说什么，将其变成西班牙语，然后还改变你的口型来匹配。我们正尝试发布几集这样的节目。这确实是非常基于 AI 的。

---

### [00:34:25] Paul Adams

**English:**
That's cool. That's really cool.

**中文翻译:**
那太酷了。真的非常酷。

---

### [00:34:27] Lenny

**English:**
You mentioned that your ENG team might change your thinking, because AI can make them much more efficient and work differently. I'm curious what you've seen actually change on your team, either using AI-ish tools, or just building AI products. What do you think is most different? And I'm curious from the perspective of a team that's trying to think about integrating AI and starting to lean into AI, what have you seen most change and should change?

**中文翻译:**
你提到你的工程团队可能会改变你的想法，因为 AI 可以让他们效率更高，工作方式也不同。我很好奇在你的团队中，无论是使用 AI 类工具还是构建 AI 产品，你看到了哪些实际的变化？你认为最大的不同是什么？从一个试图整合 AI 并开始向 AI 倾斜的团队的角度来看，你看到的变化最大的是什么，以及应该改变的是什么？

---

### [00:34:52] Paul Adams

**English:**
Ultimately, you need really great machine learning engineers. That's where it starts. And if you don't have that, then you're going to find it hard to build truly, really, truly great things. So, what OpenAI provide, and what Entropik provide, and Claude, they provide an amazing technology, but you got to build on top of it. If you really want something brilliant, you got to build on top of it. So, we adapted what they build for customer support. Maybe someday we need to go build our own LLM that's just for customer support. Maybe. I don't know where that will all go. And maybe everyone will have their own LLM for every single business. I don't really know, to be honest. Maybe these companies will provide specialized LLMs. But anyway, that's the first thing. And, of course, these people are in high demand. So, you need to invest in building out that function, I think. Really invest in building out the function.

**中文翻译:**
归根结底，你需要非常优秀的机器学习工程师。这是一切的起点。如果你没有这样的人才，你就很难做出真正伟大的东西。OpenAI、Anthropic 和 Claude 提供了惊人的技术，但你必须在它们之上进行构建。如果你真的想要出类拔萃的东西，就必须进行二次开发。所以，我们将他们构建的东西适配到了客户支持领域。也许有一天我们需要构建一个专门用于客户支持的自有 LLM。也许吧，我不知道未来会怎样。老实说，也许每个企业都会有自己的 LLM。也许这些大公司会提供专门的 LLM。但无论如何，这是第一点。当然，这类人才需求量很大。所以，我认为你需要投资建立这个职能部门，真正投入资源去建设。

---

### [00:35:46] Paul Adams (Continued)

**English:**
So that's what we've been doing. Our ML team's way bigger than it was and way bigger than it ever has been at Intercom. And then, it forks. So, some projects are very heavy on that ML team and it needs them. But other projects are more front end, like the inbox stuff I mentioned earlier, where we have Fin and Fin is working, we've built the underlying technology. Now it's a question of if you have a human support person answering questions in the inbox, that's a natural chat conversational interface, pretty straightforward. What happens when there's now an AI assistant in there? How do they talk? And what do they do? And when do they interject? And how do you represent that in the user experience that feels natural? So that's a really hard design problem.

**中文翻译:**
这就是我们一直在做的。我们的机器学习（ML）团队比以前大得多，是 Intercom 历史上规模最大的。然后它分成了两个方向。有些项目非常依赖 ML 团队，必须由他们主导。但其他项目更偏向前端，比如我之前提到的收件箱功能。Fin 正在运行，我们已经构建了底层技术。现在的问题是，如果你有一个人工支持人员在收件箱里回答问题，那是一个自然的聊天对话界面，非常直观。但如果现在里面加入了一个 AI 助手呢？它们如何对话？它们做什么？它们什么时候插话？你如何在用户体验中以一种自然的方式呈现这一点？这是一个非常困难的设计问题。

---

### [00:36:32] Paul Adams (Continued)

**English:**
So, saying back into like, okay, we've a product team that's a product manager, a product designer, maybe three, four, maybe five engineers, and they're getting help from the machine learning team. So, we now have both setups. And increasingly, we can do more with the latter, more teams who can build on the foundational technology that we've been building over the last 12 months or so. So that's one thing. I think a second thing that comes to mind is not to think about it as bolted on. I think some people are still in that camp.

**中文翻译:**
所以，回到团队构成：我们有一个产品团队，包括一名产品经理、一名产品设计师，可能还有三四名、甚至五名工程师，他们得到机器学习团队的帮助。所以我们现在有两种模式。而且越来越多地，我们可以通过后者做更多事情，让更多团队能够在我们过去 12 个月左右构建的基础技术之上进行开发。这是其一。我想到的第二点是，不要把它看作是“外挂”上去的东西。我认为有些人仍然持有这种观念。

---

### [00:37:08] Paul Adams (Continued)

**English:**
Again, I'll go back to the mobile thing. There's just so many direct parallels with it. Like I said earlier, at Google, I worked in the mobile apps team. I worked on mobile Gmail, mobile docs, and it was the mobile team. And we were in London. We're like, "Hey, we're the mobile team in London." And meanwhile, over in Mountainview in California, no one cared. It's was like, "You're 20 people. We're 200. No one uses this stuff on a phone." And again, a lot of skepticism. "No one's going to write docs on the phone. Seriously? They're going to write a full document on a phone, are you crazy?" So, don't do that. We're trying not to do that. Don't bolt it on. Don't be like, "Oh, we'll have a bunch of AI people..." And we do have some specialists. But generally speaking, we're trying to have everyone learn about it.

**中文翻译:**
我再次回到移动互联网那个例子。两者之间有太多直接的相似之处。正如我之前所说，在 Google 时，我在移动应用团队工作，负责移动版 Gmail、移动版文档，那就是当时的“移动团队”。我们在伦敦，我们觉得：“嘿，我们是伦敦的移动团队。”与此同时，在加州山景城总部，没人关心我们。他们觉得：“你们才 20 个人，我们有 200 人。没人会在手机上用这些东西。”同样有很多怀疑：“没人会在手机上写文档。认真的吗？在手机上写一整份文档，你疯了吗？”所以，不要那样做。我们正努力避免那样。不要把它当成外挂。不要说：“噢，我们会有一群 AI 专家……”虽然我们确实有一些专家，但总的来说，我们正努力让每个人都去学习它。

---

### [00:37:57] Lenny

**English:**
Interesting. So, I'm curious just specifically what that looks like, don't bolt it on. The idea there is don't just have a site team that's like, "They're the AI team. They're going to add AI to all this stuff." You're finding and lesson is integrated into every product team.

**中文翻译:**
很有趣。我很好奇“不要外挂”具体是什么样子的。你的意思是不要只设立一个边缘团队，说“他们是 AI 团队，他们负责给所有东西加 AI”。你发现的教训是应该将其整合到每一个产品团队中。

---

### [00:38:10] Paul Adams

**English:**
And we're still early there. We're still early. So, what we're trying not to do is have the AI inbox team, and they're the only people who work on AI features in the inbox. I think it's much better to have everyone learn about it. By the way, I'm a big believer in generalists, a big, big believer in... I guess, my background is jack of all trades master of none. That's probably how I describe myself. I've worked as a researcher, designer, PM. And so, I believe in generalists, and so I believe in setting teams up that way. And, yes, specialists matters at times. Machine learning for sure is a deep specialism. And in Intercom, we generally, in engineering too, much prefer people who learn new things, whether it's a new coding language, or framework, or how to design AI interfaces, or whatever, get more people being able to do it.

**中文翻译:**
我们在这方面还处于早期阶段。我们努力避免的是设立一个“AI 收件箱团队”，然后只有他们负责收件箱里的 AI 功能。我认为让每个人都去学习它要好得多。顺便说一下，我非常推崇“通用型人才”（generalists），非常非常推崇。我想我的背景就是“杂而不精”，我大概会这样描述自己。我做过研究员、设计师、PM。所以我相信通用型人才，也相信应该以这种方式组建团队。当然，专家在某些时候也很重要，机器学习肯定是一个深奥的专业领域。但在 Intercom，包括在工程部门，我们通常更喜欢那些愿意学习新事物的人，无论是新的编程语言、框架，还是如何设计 AI 界面等等，让更多的人具备这种能力。

---

### [00:39:05] Lenny

**English:**
I feel like, again, your company is a little bit of living in the future, where a lot of companies are going to get to once they realize, "Oh shit. We really need to get big here." Or they're already working on it. I'm curious if there's other maybe pitfalls you ran into that you think people should try to avoid and something you could share there, or just any other lessons about making this transition that you think might be useful to other people.

**中文翻译:**
我觉得你们公司有点像是生活在未来，很多公司在意识到“糟糕，我们真的需要在这里大干一场”之后，或者已经在着手做这件事时，都会达到你们现在的状态。我很好奇你是否还遇到了其他一些你认为人们应该尽量避免的陷阱？或者关于这种转型，你有什么认为对他人有用的其他教训吗？

---

### [00:39:27] Paul Adams

**English:**
Yeah, what I've mentioned so far, don't bolt it on. Stay up-to-date. I mentioned earlier, read, read. I feel like I'm behind all the time. It's moving so fast.

**中文翻译:**
是的，就是我目前提到的：不要把它当成外挂。保持与时俱进。我之前提到了，阅读，不断阅读。我感觉自己一直处于落后状态，因为它发展得太快了。

---

### [00:39:36] Lenny

**English:**
What are you reading? What do you find is most interesting and informative for reading about what's happening in AI?

**中文翻译:**
你都在读什么？你觉得关于 AI 动态的阅读材料中，哪些最有趣、信息量最大？

---

### [00:39:42] Paul Adams

**English:**
I'd love to tell you that it's incredibly structured. I have a great reading list that I got to read every Sunday morning. It's pretty random. I'm on Twitter, which is now called X, of course, a lot. I follow some people on Twitter. I actually use the recommended feed in Twitter a lot. I think, because I interact and look at a lot of AI, I get to see a lot more. So I do that and I do it deliberately to try and generate more stuff. I'll search Twitter as well. There's loads of cool stuff there. There's some newsletters as well and some people I follow.

**中文翻译:**
我很想告诉你我的阅读非常有条理，我有一份很棒的阅读清单，每周日早上都会读。但其实挺随机的。我经常上 Twitter（当然现在叫 X）。我在 Twitter 上关注了一些人。实际上我经常使用 Twitter 的推荐信息流。我想是因为我经常互动并查看很多 AI 内容，所以我能看到更多相关信息。我是故意这么做的，为了触发更多内容的推荐。我也会在 Twitter 上搜索，那里有很多酷炫的东西。还有一些时事通讯（newsletters）和我关注的人。

---

### [00:40:12] Lenny

**English:**
Any newsletters you could call out that you think are most interesting?

**中文翻译:**
有没有哪份时事通讯是你觉得最有趣、值得推荐的？

---

### [00:40:16] Paul Adams

**English:**
Yeah, Matt Rickard is one guy who talks a lot about AI. The blogs of companies too. OpenAI have a pretty good blog, and they write papers, and summarize them.

**中文翻译:**
有的，Matt Rickard 是一个经常谈论 AI 的人。还有各大公司的博客。OpenAI 的博客写得很好，他们会写论文并进行总结。

---

### [00:40:27] Lenny

**English:**
Cool. If there's any other ones you think of, either people on Twitter to follow or newsletters, email me after, and then we'll add them to the show notes.

**中文翻译:**
太好了。如果你还想到其他的，无论是 Twitter 上值得关注的人还是时事通讯，事后发邮件给我，我们会把它们添加到节目介绍（show notes）里。

---

### [00:40:34] Paul Adams

**English:**
Yeah, perfect. Yeah, yeah, there definitely is. I'll dig them out. Your question earlier, how do you do it? You just try. Try book out half an hour and just go deep for half an hour, and then bookmark a few things, come back to them. Like everyone, you could be so busy, so many distractions, you just got to have to set aside time.

**中文翻译:**
没问题。肯定还有其他的，我会找出来。关于你之前的问题“怎么做”，就是去尝试。试着预留半小时，深入研究半小时，然后收藏一些东西，回头再看。和所有人一样，你可能非常忙，有很多干扰，但你必须拨出时间。

---

### [00:40:50] Lenny

**English:**
Are there any other tools or apps that you find really helpful? Sounds like ChatGPT is at the center of how you play around with it. Is there anything else that you find really interesting?

**中文翻译:**
还有其他你觉得非常有用的工具或 App 吗？听起来 ChatGPT 是你探索的核心。还有其他让你觉得非常有趣的东西吗？

---

### [00:40:59] Paul Adams

**English:**
I'll try other things like Bard. For example, Bard is Google's AI search engine. Rewind is another fascinating company. I think it's rewind.ai. Rewind is basically augmented AI for your memory. So, install it on your local machine, and it captures everything, and remembers everything. It's all local, so there's no privacy issues. And, you got to try these things to understand whether it's any good, or useful, or where's the boundaries, and how does it work, and so on. So, I'm a believer in that type of thing.

**中文翻译:**
我会尝试其他的，比如 Bard。Bard 是 Google 的 AI 搜索引擎。Rewind 是另一家迷人的公司，网址应该是 rewind.ai。Rewind 基本上是为你记忆提供的增强 AI。你把它安装在本地机器上，它会捕捉并记住一切。所有数据都在本地，所以没有隐私问题。你必须尝试这些东西，才能理解它是否好用、是否有用，以及它的边界在哪里、它是如何运作的等等。我非常相信这种亲身实践。

---

### [00:41:35] Lenny

**English:**
This episode is brought to you by HelpBar by Chameleon, the free in-app universal search solution built for SaaS. Your help content lives outside your app and is scattered in many places forcing users to waste time hunting for answers. HelpBar solves this, it delivers answers directly inside your app and eliminates context switching. Users can search or ask questions to get AI generated answers and lists of the most relevant documentation from all of your help sources, including your knowledge base, docs, blog, and video libraries. You can also use HelpBar to navigate your app and launch actions, such as scheduling a meeting or viewing an interactive demo.

**中文翻译:**
本集节目由 Chameleon 的 HelpBar 赞助。HelpBar 是为 SaaS 打造的免费应用内通用搜索解决方案。你的帮助内容通常存在于应用之外，且散布在许多地方，迫使用户浪费时间寻找答案。HelpBar 解决了这个问题，它直接在应用内提供答案，消除了上下文切换。用户可以搜索或提问，从你的所有帮助源（包括知识库、文档、博客和视频库）中获取 AI 生成的答案和最相关的文档列表。你还可以使用 HelpBar 在应用中导航并启动操作，例如安排会议或查看交互式演示。

---

### [00:42:13] Lenny (Continued)

**English:**
The best products today use Command K for in-app search and navigation. HelpBar makes that readily available within your app without engineering or new code. Give users a faster and more delightful self-serve experience that reduces friction and increases in-app engagement. Upgrade your user experience with this modern component and supercharge your product-LED motion. Sign up for HelpBar today. It's free and easy to set up in minutes. Check it out at helpbar.ai/lenny, that's helpbar.ai/lenny. When you started rolling out AI and leaning into this direction, did you run into any big challenges or hurdles organizationally, or personal interests, or opinions? I don't know. Is there anything you ran into that was a big stumbling block and something you had to get over?

**中文翻译:**
如今最好的产品都使用 Command K 进行应用内搜索和导航。HelpBar 让你的应用无需工程开发或新代码即可轻松实现这一功能。为用户提供更快、更愉悦的自服务体验，减少摩擦并增加应用内参与度。通过这一现代组件升级你的用户体验，并为你的产品驱动增长（PLG）提供动力。立即注册 HelpBar，免费且可在几分钟内完成设置。请访问 helpbar.ai/lenny 查看。当你开始推出 AI 并向这个方向倾斜时，你在组织上、个人利益或观点上遇到过什么重大挑战或障碍吗？有没有什么大的绊脚石是你必须克服的？

---

### [00:43:00] Paul Adams

**English:**
Yeah, Intercom is full of diverse opinions about things. And, I think with AI, I'm all in. I'm leaning forward. The media is coming. I'm sold. I'm way past that point. Also, no one knows. No one knows. And so, a lot of the time, when we talk internally, the strong buy-in from Eoghan, our co-founder and CEO, Des co-founder, like me, like a lot of the senior leadership team we're in all in camp. And so, that helps a lot. Of course, if you're senior leadership team in the company are all in, of course, then it trickles down. But equally, some of the hurdles have been like, "Why are you all in?" And I'm like, "An educated guess. A hunch."

**中文翻译:**
是的，Intercom 内部对各种事物都有很多不同的意见。对于 AI，我是全力投入的。我正身体前倾迎接它。陨石要来了，我深信不疑，早已过了犹豫阶段。而且，没人知道未来会怎样。所以很多时候，当我们内部讨论时，我们的联合创始人兼 CEO Eoghan、联合创始人 Des，还有我以及很多高级领导团队成员，我们都属于“全力投入”阵营。这很有帮助。当然，如果公司的高层领导都全力以赴，这种态度就会向下渗透。但同样，一些障碍在于有人会问：“你为什么全力投入？”我会回答：“基于知识的猜测，一种直觉。”

---

### [00:43:51] Paul Adams (Continued)

**English:**
The part of business strategy and product strategy that, it's just hard. It's like taste. People talk about product taste, "Who has product taste?" And a lot of it is, it's judgment based on experience. That's all I can say. I don't know. For me, personally, I don't know, I lived through the mobile thing pretty closely, having worked at Google on mobile. I lived through that phase. So, I can see the same type of thing happening now with bigger. So I'm using that experience to go all in.

**中文翻译:**
商业战略和产品战略中有些部分就是很难解释。这就像品味。人们谈论“产品品味”，谁有产品品味？很大程度上，这是一种基于经验的判断。我只能这么说。对我个人而言，因为我在 Google 移动团队工作过，近距离经历了移动浪潮。我经历过那个阶段。所以我能看到现在正在发生类似的事情，而且规模更大。所以我利用那段经验选择了全力投入。

---

### [00:44:23] Paul Adams (Continued)

**English:**
But it's a challenge for some people, because they don't have that context, or they disagree with it. We have a lot of debate here about the future. Fergal, I mentioned earlier, gave myself and a few other product leaders and Des he gave us a... I don't know, is it a pitch or what? A play? I don't know, about how maybe all of our roadmap with AI is wrong. I don't know if you are familiar with the Horizons framework of Horizon 1, 2, and 3.

**中文翻译:**
但对某些人来说这是一个挑战，因为他们没有那样的背景，或者他们不同意这种看法。我们这里关于未来有很多争论。我之前提到的 Fergal，他给我、其他几位产品领导者以及 Des 做了一个……我不知道该叫它推销还是什么，关于也许我们所有的 AI 路线图都是错误的。我不知道你是否熟悉 Horizon 1、2、3（三阶段增长）框架。

---

### [00:44:54] Lenny

**English:**
Mm-hmm. Yeah. Amazon.

**中文翻译:**
嗯，知道。亚马逊常用的那个。

---

### [00:44:56] Paul Adams

**English:**
Yeah. So, Horizon 1 is the medium short to medium term, next 12 months, 12 to 18 months. Horizon 2 being like, "Hey, what's happening?" Whatever, 18 to 36 months out. Or, I think, people use different timeframes, different Horizons. Anyway. We're in Horizon 1 land. We're like, "Yeah, and the next year we're going to do this." And he's like, "Yeah, but two years from now, if this path plays out, everything we're doing now is going to be irrelevant and useless." And you're like, "Oh, okay." And so, those discussions happen. And, the level of ambiguity is off the charts. So, a lot of the challenges have been navigating that ambiguity and helping people get the conviction I have without drying out voices of alternative voices and opinions, which are often valid too.

**中文翻译:**
是的。Horizon 1 是中短期，即未来 12 到 18 个月。Horizon 2 则是未来 18 到 36 个月。不同的人可能使用不同的时间跨度。总之，我们当时处于 Horizon 1 的思维中，觉得：“对，明年我们要干这个。”而他会说：“是的，但两年后，如果这条路径成真，我们现在做的一切都将变得无关紧要且毫无用处。”你会觉得：“噢，好吧。”这类讨论经常发生。模糊性（ambiguity）极高。所以，很多挑战在于如何在这种模糊性中航行，并帮助人们获得像我一样的信念，同时又不压制那些往往也很有道理的不同声音和意见。

---

### [00:45:53] Lenny

**English:**
What does help people get that conviction? Is it just showing them examples of, "Here's something." "Wow, look at this thing. This is unreal." And, I think, partly what helps, I imagine, is the market you're in seems like such a clear opportunity for AI, feels like an easier pitch than maybe a lot of other markets.

**中文翻译:**
什么能帮助人们获得那种信念？是向他们展示例子吗，比如“看这个，哇，这太不可思议了”？而且我想，部分原因在于你所处的市场对于 AI 来说是一个非常明确的机会，这可能比其他很多市场更容易说服人。

---

### [00:46:09] Paul Adams

**English:**
Yeah, that's true. For sure. That's true. Yeah, showing people is definitely the easiest way. I think customer support is definitely... Like I said, [inaudible 00:46:20], number one, customer support. So you're like, "Okay, I guess we should adapt." Adapt or die is our mantra. Adapt or die. I think that there are other industries where they're on the same journey, it's just not as obvious. So for example, reporting software, Tableau or any reporting product, how do they work? Well, they're the typical read, write app, build dashboards, filtering, querying, hardcore querying, query database, get some numbers, show it in a UI. A lot of thought and care goes into how you present that data to people. The different types of charts that are appropriate help people make good decisions ultimately.

**中文翻译:**
是的，没错。展示给人们看绝对是最简单的方法。我认为客户支持绝对是……就像我说的，排名第一的就是客户支持。所以你会觉得：“好吧，我想我们应该适应。”“适应或死亡”是我们的座右铭。我认为其他行业也在经历同样的旅程，只是没那么明显。例如，报表软件，像 Tableau 或任何报表产品，它们是如何运作的？它们是典型的读写应用，构建仪表板、过滤、查询、硬核查询数据库、获取数据并在 UI 中展示。在如何向人们展示数据方面投入了大量的思考和精力。合适的图表类型最终能帮助人们做出正确的决策。

---

### [00:47:04] Paul Adams (Continued)

**English:**
I think, again, this is hand wave, who knows. Maybe that's all done dead now. And, the reporting product of the future is just a box, and the box just goes to the database, and the box is just, "Who was our best salesman last year January? Okay. Who was our top performing representative in January? Lenny." The report product to the future might look like that. And so, project management tools is another one. There's a bunch of products that I think are just outside the most obvious customer support one. And yet, equally ripe for a newcomer to come with a completely different paradigm and potentially take over.

**中文翻译:**
我想，这只是我的推测，谁知道呢。也许那套东西现在已经过时了。未来的报表产品可能只是一个对话框，对话框直接连接数据库，你只需要问：“去年一月谁是我们表现最好的销售员？好，一月份表现最好的代表是谁？Lenny。”未来的报表产品可能长这样。项目管理工具也是如此。我认为有一系列产品就在最显眼的客户支持领域之外，它们同样时机成熟，等待着新来者带着完全不同的范式出现并可能取而代之。

---

### [00:47:45] Lenny

**English:**
I like that this connects back to your very first point about trying to think about where AI integrates is. Think about what problem are you solving as a company. For example, Tableau, helping people visualize data. And then, the question is, can AI just do this for you? And in that case, oh, and maybe you can. And that gives you basically a whole strategy of like, "Okay, how do we actually do that with AI?"

**中文翻译:**
我喜欢这一点，它回到了你最初的观点：思考 AI 应该整合在哪里。思考你作为一家公司正在解决什么问题。例如 Tableau，帮助人们可视化数据。然后问题是，AI 能直接为你做这件事吗？在这种情况下，噢，也许它可以。这基本上就为你提供了一整套战略：“好，我们如何实际利用 AI 来实现这一点？”

---

### [00:48:06] Paul Adams

**English:**
Yeah. And, I don't know if the reporting thing will play out that way. But, if you're a Tableau type company, you've tons of designers who design dashboards, and filters, and querying type workflow. What do they do? The UI is the box. So, it's really hard to get into your head like, "We must..." If you have conviction that we must change really hard.

**中文翻译:**
是的。我不知道报表领域是否会那样发展。但如果你是 Tableau 类型的公司，你拥有成吨的设计师在设计仪表板、过滤器和查询工作流。如果 UI 变成了一个对话框，他们该做什么？所以，要让你脑子里接受“我们必须改变”这种信念是非常困难的。

---

### [00:48:33] Lenny

**English:**
Maybe one last question here. For team members learning and starting to work within this realm, is there anything you find helpful to get them ramped up, other than the advice you've already shared, which is just read a lot of stuff, watch Twitter/X, subscribe to these newsletters, and then just try it?

**中文翻译:**
关于这个话题最后一个问题。对于那些正在学习并开始在这个领域工作的团队成员，除了你已经分享的建议（多阅读、关注 Twitter/X、订阅时事通讯、亲身尝试）之外，你觉得还有什么能帮助他们快速上手？

---

### [00:48:49] Paul Adams

**English:**
I also try and read things that say it's all a load of crap. So, it's very easy... I've been guilty of this many times. Back to the mistakes you've made. I've been guilty of this many times, where I've jumped on a bandwagon and it was all wrong. And the older I get... The Web3 thing, I'm like, "I don't even know what Web3 is." Crypto, I never bought crypto. Maybe I'm wrong about that. But, I'm not a bandwagon jumper. But, maybe might've been when I was earlier. And I try these days to read the alternative opinion. People who are skeptical or think it's bad. A lot of people think this is terrible for humanity. This technology is going to eat us alive. So, I try and balance my optimism. I'm a delusively optimistic thinker, so I try and balance that with a negativity, I guess.

**中文翻译:**
我也会试着读一些说“这全是扯淡”的文章。因为人很容易……我以前多次犯过这种错。回到你犯过的错误：我多次盲目跟风，结果全错了。随着年龄增长……比如 Web3，我觉得：“我甚至不知道 Web3 是什么。”加密货币，我从未买过。也许我错了，但我不是那种盲目跟风的人。不过年轻时可能是。现在我试着去读一些反面意见，读那些持怀疑态度或认为这很糟糕的人的观点。很多人认为这对人类来说太可怕了，这项技术会把我们生吞活剥。所以我试着平衡我的乐观情绪。我是一个近乎妄想的乐观主义者，所以我试着用一些负面观点来平衡它。

---

### [00:49:50] Lenny

**English:**
That's really good advice.

**中文翻译:**
这真的是很好的建议。

---

### [00:49:51] Paul Adams

**English:**
Yeah.

**中文翻译:**
是的。

---

### [00:49:52] Lenny

**English:**
Is there anything else in this realm that you think might be useful to share before we shift to a different topic?

**中文翻译:**
在转向另一个话题之前，在这个领域还有什么你认为值得分享的吗？

---

### [00:49:58] Paul Adams

**English:**
Oh, yeah. The other thing is, don't be afraid. I think people are a bit afraid of it. And, for example, if I started walking around our office here saying, "Hey, I think we need two engineers per team going forward." That's probably not really a good idea to do that. And I think in reality that's not going to be how it plays out. I just feel like there's loads of great studies over the years about how people don't end up losing jobs, the jobs get moved around. And also, for customer support, for example, it's a high attrition job. So, people saying, "Hey, everyone's going to lose their job. A bot's going to take over." It's like, maybe some of that will happen. But probably to attrition, as in someone quit and just didn't get back-filled. So, the doomsday scenarios that I don't think would play out as much. But, for sure, it's easy to be afraid of it. And, I think you have to lean into it.

**中文翻译:**
噢，有的。另一件事是：不要害怕。我认为人们对它有点恐惧。例如，如果我开始在办公室里走来走去说：“嘿，我认为以后每个团队只需要两个工程师。”这样做可能不太好。而且我认为现实中情况不会那样发展。我只是觉得多年来有很多伟大的研究表明，人们最终并不会失去工作，只是工作岗位发生了转移。此外，以客户支持为例，这是一个高流失率的工作。所以，人们说：“嘿，所有人都要失业了，机器人要接管了。”也许会发生一部分，但可能更多是通过自然流失实现的，比如有人辞职了，然后不再补招。所以我认为末日场景不会发生得那么多。但确实，人很容易感到害怕。我认为你必须积极拥抱它。

---

### [00:50:54] Lenny

**English:**
I love that. Okay, I want to chat about frameworks. You have a lot of interesting frameworks you've put out there. So, maybe we do a rapid fire through a number of frameworks that you've worked with and find useful. And, you actually mentioned this before and after, which I hadn't heard about. What's the general idea to that concept?

**中文翻译:**
我喜欢这个观点。好，我想聊聊框架。你提出过很多有趣的框架。所以，也许我们可以快速过一下你使用过并觉得有用的几个框架。你刚才提到了“之前/之后”，我还没听说过。这个概念的大致思路是什么？

---

### [00:51:14] Paul Adams

**English:**
Before, after is literally that simple, I think. We've a rebrand at the moment happening, and that'll be a before, after moment. We're redesigning our pricing. And then, the day that pricing goes live, that would be a before, after, because nothing's the same. And so, we need to go back out and talk to people again. I'm a big believer in talking. You got to talk to customers, it's the only way. You've got to talk, talk, talk, learn, learn, learn. Don't take with the safe face value, go deeper. And so, a lot of these before, after moments, once you've passed, yeah, into the after you got to start learning, "Were we right? Were we wrong? What happened? What do people think?"

**中文翻译:**
我认为“之前/之后”字面上就那么简单。我们目前正在进行品牌重塑，那将是一个“之前/之后”时刻。我们正在重新设计定价，定价上线的那天就是一个“之前/之后”时刻，因为一切都不一样了。所以，我们需要重新走出去与人们交谈。我非常相信“交谈”。你必须与客户交谈，这是唯一的途径。你必须不停地谈、不停地学。不要只看表面价值，要深入挖掘。所以，在经历了这些“之前/之后”时刻进入“之后”阶段后，你必须开始学习：“我们对了吗？我们错了吗？发生了什么？人们怎么想？”

---

### [00:51:54] Lenny

**English:**
Can you talk more about this pricing learning/mistake you shared? What do you think you did wrong? What happened there?

**中文翻译:**
你能多谈谈你分享的这个定价方面的教训或错误吗？你觉得哪里做错了？当时发生了什么？

---

### [00:52:00] Paul Adams

**English:**
We had a principle called align price to value. By the way, I think, pricing is incredibly difficult. A lot of the design team who work in pricing here, I say to them, it's one of the hardest design problems I know. I think onboarding is another one. Onboarding people into a product is also. People are like, "Oh hey, you just design a few steps and it's pretty easy. People will follow the steps." Again, deceptively difficult to design great onboarding.

**中文翻译:**
我们有一个原则叫“价格与价值对齐”。顺便说一下，我认为定价极其困难。我对这里负责定价的设计团队说，这是我所知道的最难的设计问题之一。我认为“新手引导”（onboarding）是另一个。引导人们进入产品也是如此。人们觉得：“噢嘿，你只需要设计几个步骤，很简单，人们会照做的。”再次强调，设计出色的新手引导是极具欺骗性的困难。

---

### [00:52:30] Paul Adams (Continued)

**English:**
So, I think pricing is deceptively difficult. But we had a principle around allowing price to value. People should pay based on the amount of value they get in the product, easy to say and incredibly hard to do. Value is subjective. The price, for some person they get 10 units of value. I think that's about $5. Someone else is like, "I'd pay $5,000 for those 10 units of value." So, the biggest mistake was a lot of mistakes compounded. And, this is an area where I think we were risk averse. We've ended up with too many pricing models. We've built on top of old competitive mistakes. And, it took a brave decision to say, "We're going to start again."

**中文翻译:**
所以，我认为定价也是极具欺骗性的困难。但我们有一个关于价格与价值对齐的原则：人们应该根据他们在产品中获得的价值量来付费。这说起来容易，做起来极难。价值是主观的。对于某些人，他们获得了 10 个单位的价值，我觉得那值 5 美元；而另一个人可能会说：“我愿意为那 10 个单位的价值支付 5000 美元。”所以，最大的错误是许多错误的叠加。在这个领域，我认为我们过去过于规避风险。结果我们搞出了太多的定价模型。我们在旧的竞争错误之上进行构建。最终，我们做出了一个勇敢的决定：“我们要重新开始。”

---

### [00:53:18] Lenny

**English:**
Wow, this feels like it could be a solo episode, just talking through your pricing lessons and journey. Maybe just is there a nugget of wisdom you could share for someone that's trying to think about pricing right now based on your experience?

**中文翻译:**
哇，这感觉可以单独做一集节目，专门讲你的定价教训和历程。根据你的经验，对于现在正在思考定价的人，你有什么可以分享的智慧结晶吗？

---

### [00:53:31] Paul Adams

**English:**
Number one thing I would say is keep it simple. Keep it simple. It's so tempting to... With us, for example, a lot of SaaS products have add-ons, where you're like, "Hey, we built X and that's 10 bucks." Or 100,000, depends on what product you're selling. "We built X and that's the price of X. Hey, we've just built Y. Y is awesome and it's a new thing you can do, and it unlocks all these new capabilities. People shouldn't get that for free, because it's a new thing that didn't have. So let's charge more for Y, but that doesn't really work with the other... Okay, let's look at an add-on. Oh yeah, cool. People just add on." But then, later, now you've got people who have the add-on, and people who don't, and then you're like, "Add another thing." And so, we've added tiers, with products, tears, add-ons, tearing in the add-on. Oh my god. People can't understand their bill. So, my advice is keep it simple. Fight so hard to resist the temptation to add extra ways in which you price.

**中文翻译:**
我要说的第一点是：保持简单。保持简单。诱惑实在太大了……以我们为例，很多 SaaS 产品都有插件（add-ons），你会觉得：“嘿，我们做了功能 X，卖 10 美元。”或者 10 万美元，取决于你卖什么。“我们做了 X，这是 X 的价格。嘿，我们刚做了 Y，Y 太棒了，是一个新功能，解锁了所有这些新能力。人们不应该免费得到它，因为这是他们以前没有的新东西。所以让我们为 Y 多收点钱，但这和之前的定价不太搭……好吧，让我们把它做成插件。噢耶，太酷了，人们直接加购就行。”但随后，你就会面临有的用户有插件，有的没有，然后你又想：“再加个东西。”于是我们增加了层级（tiers）、产品层级、插件、插件里的层级。天哪，人们根本看不懂账单。所以，我的建议是保持简单。拼命抵制增加额外计费方式的诱惑。

---

### [00:54:43] Lenny

**English:**
Amazing. I didn't think about going into this topic, but I'm glad that we touched on it.

**中文翻译:**
太棒了。我没想过会聊到这个话题，但我很高兴我们谈到了它。

---

### [00:54:49] Paul Adams

**English:**
Think I was talking about scars for life earlier. That's another scar for life.

**中文翻译:**
我想我之前提到了“终身阴影”，这就是另一个。

---

### [00:54:54] Lenny

**English:**
All right. Let's keep talking about some frameworks. Another that I found that I loved is something that you call differentiation versus table stakes. What's that about?

**中文翻译:**
好。让我们继续聊聊框架。我发现并喜欢的另一个框架是你称之为“差异化 vs. 基本门槛”（differentiation versus table stakes）的东西。那是关于什么的？

---

### [00:55:03] Paul Adams

**English:**
It's like the Kano model, if you're familiar with that. But, it's very simple. I guess, we took the Kano model and just tried to make this really crazy simple version of it. Again, I'm a little bit allergic to things like this. I even hate myself for bringing up the Kano model. I'm allergic to people over intellectualizing frameworks. And like, "Oh, well if you've seen the new different law..." Of whatever. I'm like, "Keep things simple, practical, and pragmatic. And then, let's all, again, go back to work and start building the product, so that customers can benefit, because that's actually all that matters." And so, difference versus table stakes, very simple. I think people who adopt a product, or buy a product, or switch to a product, there's two driving forces. One is the attraction of the new solution, and that's basically differentiation. So what's different and better? But critically, what's different and better in ways that customers care about?

**中文翻译:**
如果你熟悉卡诺模型（Kano model）的话，它有点像那个。但它非常简单。我想我们借鉴了卡诺模型，并试图把它做成一个极其简单的版本。再次强调，我对这类东西有点过敏。我甚至讨厌自己提到卡诺模型。我反感人们过度将框架知识化。比如：“噢，如果你看过那个新的定律……”之类的。我觉得：“保持简单、实用、务实。然后让我们所有人回到工作中开始构建产品，让客户受益，因为这才是唯一重要的事情。”所以，“差异化 vs. 基本门槛”非常简单。我认为人们采用、购买或切换产品时，有两种驱动力。一是新解决方案的吸引力，这基本上就是差异化。即什么是不同且更好的？但关键是，在客户关心的方面，什么是不同且更好的？

---

### [00:56:00] Paul Adams (Continued)

**English:**
Again, back to all the failed projects, my lesson for a lot of these was, we were different and better in these Google projects in ways people didn't care about. All sorts of Google projects, like Google Wave was an amazingly innovative product that no one really cared about. So, be different and better in ways people care about. So that's the attraction that's like, "Oh, I want to check out that. That looks cool. I want to check that out. That looks better than what I have today." But, on the other side, there's a entry requirement or table stakes. To play the game, you got to have a certain amount of things. And so, they're table stake features. They're often very boring. They're real basic stuff, boring stuff, and easy to ignore, and easy to not build.

**中文翻译:**
再次回到那些失败的项目，我从中得到的教训是：在那些 Google 项目中，我们在人们根本不在乎的地方做到了不同且更好。各种 Google 项目，比如 Google Wave，是一个惊人的创新产品，但没人真的在乎。所以，要在人们关心的方面做到不同且更好。这就是吸引力，让人觉得：“噢，我想试试那个，看起来很酷。我想试试那个，看起来比我现在用的好。”但另一方面，还有准入要求或基本门槛（table stakes）。要参与竞争，你必须具备一定数量的基础功能。这些就是基本门槛功能。它们通常很无聊，是真正的基础性、枯燥的东西，很容易被忽视，也很容易被跳过不建。

---

### [00:56:44] Paul Adams (Continued)

**English:**
And again, a mistake with Intercom maybe over the years is that we were much more attracted to the differentiation and built a lot of that. So we went through different iterations of our roadmap, sometimes changing over the course of a year or two, where we were all the differentiation to realize that everyone loved it and really wanted to buy, but they couldn't, because we didn't have the basic report that they needed or we didn't have the basic permission feature that they needed. And then, the robot is built based on those... Trading off why do we need more differentiation or trading off why do we need to invest more table stakes? And so, these days, the basic Intercom today is we're 50/50 probably in terms of resources, but it has swung 70/30 in both directions at times.

**中文翻译:**
同样，Intercom 多年来的一个错误可能是我们过度被差异化所吸引，并构建了大量这类功能。我们的路线图经历了几次迭代，有时在一两年间发生变化，我们全力投入差异化，结果发现大家都喜欢它，真的很想买，但他们买不了，因为我们没有他们需要的基础报表功能，或者没有他们需要的基础权限功能。然后，路线图就基于这些进行构建……在“为什么我们需要更多差异化”和“为什么我们需要投入更多基本门槛”之间进行权衡。所以，如今 Intercom 的基础资源分配大概是 50/50，但有时也会向任何一个方向摆动到 70/30。

---

### [00:57:26] Paul Adams (Continued)

**English:**
The last piece about it is, I think it's really powerful to look at a roadmap or look at a proposed roadmap and ask yourself, which of these do things matters more to us, not to us actually to our customers right now? The other thing that we've talked a lot about here internally is if you're a startup and you're entering any established category, customer support for us, big established category, massive, a lot of table stakes, built up over years, decades. ServiceNow, Service Cloud, Salesforce, Zendesk, decades of table stake feature building. So to play the game, you need a lot of the table stakes, unless you have incredible differentiation. So from the early years of Intercom, people just buy us alongside Service Cloud or Zendesk. They just buy us alongside. They're like, "This Intercom thing..." We were like first modern messaging and modern UX. They were like, "We want that for our customers, alongside the big giant bag of table stakes." Because Intercom doesn't have any of those.

**中文翻译:**
最后一点是，我认为审视路线图或拟议的路线图并问自己“现在对我们的客户（而不是对我们）来说，哪一类更重要”是非常有力的。我们内部经常讨论的另一件事是：如果你是一家初创公司，进入任何一个成熟的领域（对我们来说是客户支持，这是一个巨大的成熟领域，拥有数十年积累的大量基本门槛功能）。ServiceNow、Service Cloud、Salesforce、Zendesk，它们有几十年的基础功能建设。所以要参与竞争，你需要大量的基础功能，除非你有惊人的差异化。所以在 Intercom 早期，人们只是把我们和 Service Cloud 或 Zendesk 一起买。他们会说：“这个 Intercom 玩意儿……”我们当时是首创现代消息传递和现代 UX。他们觉得：“我们想让客户用上这个，同时也保留那一整袋基础功能。”因为当时的 Intercom 还没有那些基础功能。

---

### [00:58:26] Paul Adams (Continued)

**English:**
Then over the years, we've built the table stakes to a point where, okay, now we can fully play the game and people can switch, so they can swap Zendesk for Intercom. But it took us years to get there. And hence, if you're a startup, you need to invest a lot more in differentiation. And then, over the years, I think you start to balance the books a bit.

**中文翻译:**
后来经过多年努力，我们将基础功能构建到了一个水平，使得我们可以完全参与竞争，人们可以进行切换，比如把 Zendesk 换成 Intercom。但我们花了好几年才达到那个水平。因此，如果你是一家初创公司，你需要更多地投资于差异化。然后随着时间的推移，我认为你会开始平衡这两者。

---

### [00:58:47] Lenny

**English:**
I think what's interesting about this is one, it just gives you a way to think about looking at your roadmap. How much are we actually doing? And are we doing too much table stakes? Are we doing too much differentiation? So it gives you a awareness of what's happening. And I think, it's an interesting strategy as a startup like, "Do we spend years doing table stakes and then launch? Or is it go the way Intercom went, like differentiate first we'll build everything else later?" Wonder when it makes sense to go one or the other.

**中文翻译:**
我觉得有趣的一点是，它为你提供了一种审视路线图的方式。我们实际上做了多少？我们是不是做了太多的基础功能？还是做了太多的差异化？它让你意识到现状。我认为作为初创公司，这是一个有趣的战略选择：“我们是花几年时间做基础功能然后再发布？还是像 Intercom 那样，先做差异化，以后再补齐其他东西？”我想知道什么时候选择其中一种更有意义。

---

### [00:59:13] Paul Adams

**English:**
Yeah. And it probably depends on the market, different categories, and all sorts of things. Yeah.

**中文翻译:**
是的。这可能取决于市场、不同的类别以及各种因素。

---

### [00:59:20] Lenny

**English:**
Yeah. Awesome. Okay. The next framework is something that you call swinging the pendulum. What is that about?

**中文翻译:**
好的，太棒了。下一个框架是你称之为“摆动钟摆”（swinging the pendulum）的东西。那是关于什么的？

---

### [00:59:28] Paul Adams

**English:**
I actually mentioned an example a bit earlier. Differentiation in table stakes was swinging the pendulum. So, swinging the pendulum means, you take a step back from everyday work life, and you make the observation that something's in an undesirable state. So, maybe it's, "Whoa, we've all the differentiation in the world, but people can't adopt the product, because we've never built any of these table stakes. It's undesirable." Or, "Oh, we've now built all these table stakes and we've not been investing in differentiation. And actually, we're not that attractive to people, because switching product is a pain. And we're not just attractive to people. Okay, so this undesirable state."

**中文翻译:**
我刚才其实提到了一个例子。“差异化与基本门槛”就是一种摆动钟摆。摆动钟摆意味着，你从日常工作中退后一步，观察到某种事物处于一种不理想的状态。比如：“哇，我们拥有世界上所有的差异化，但人们无法采用这个产品，因为我们从未构建过任何基础功能。这是不理想的。”或者：“噢，我们现在构建了所有这些基础功能，但一直没有投资于差异化。实际上，我们对人们没那么有吸引力，因为切换产品很痛苦，而我们又不够吸引人。好，这也是不理想的状态。”

---

### [01:00:08] Paul Adams (Continued)

**English:**
And then, so you go and fix it, but the temptation is that you over-correct. And we've done this so many times in so many domains, everything from, "Okay, we don't have enough differentiation." A year later, "Oh, wait a minute, we're missing all the table stakes. Okay, we're over there." So, product building is one, people is another one. Building out teams and people. Another big one was, I don't know, maybe five years into Intercom, we were on this high growth trajectory, really good classic startup before our pricing problems. And, we looked around and said, "None of us have done this before. I don't think that's good. Undesirable state. Do we even know what we're doing? We're just a bunch of random people. Do we know what we're doing? We need to hire some experts. We need to hire some experts. If we're going up market, we need market people who've done it before."

**中文翻译:**
然后，你去修复它，但诱惑在于你会过度修正。我们在很多领域都这样做过无数次，从“好，我们差异化不够”，一年后变成“噢，等一下，我们缺少所有的基础功能。好，我们又摆到那边去了”。产品构建是一个方面，人才也是另一个方面。组建团队和人才培养。另一个大例子是，大概在 Intercom 成立五年时，我们正处于高速增长轨道上，在定价问题出现之前是一家非常经典的优秀初创公司。我们环顾四周说：“我们中没人以前做过这个。我觉得这不好。不理想的状态。我们到底知道自己在做什么吗？我们只是一群随机凑在一起的人。我们需要雇佣一些专家。如果我们要做高端市场，我们需要有经验的市场人员。”

---

### [01:01:07] Paul Adams (Continued)

**English:**
So, that was undesirable state, fix it by hiring people who've done it before. And then, we hired loads of people who've done it before, and what they did was brought the culture and ways of working of their prior company to Intercom. And so, we totally over-corrected, didn't work out in a lot of cases. In most cases, it didn't work out. Because, we weren't trying to be a bigger company, that already exists. We're trying to be us. So, I think, hiring and building teams is another where we really over-corrected to find out, "Okay, it's a balance here."

**中文翻译:**
所以，那是当时不理想的状态，我们通过雇佣有经验的人来修复它。然后，我们雇佣了大量有经验的人，结果他们把前公司的文化和工作方式带到了 Intercom。于是我们完全过度修正了，在很多情况下都没奏效。在大多数情况下，它都失败了。因为我们并不是想成为另一家已经存在的大公司，我们是想做我们自己。所以，我认为招聘和组建团队是另一个我们严重过度修正的领域，最后才发现：“好吧，这里需要一种平衡。”

---

### [01:01:43] Paul Adams (Continued)

**English:**
Related to hiring, one is generalists and specialists, similar theme. People who've done it before, or people who are specialized. And, we hired a bunch of specialists only to realize that they're not adaptable. And, in Intercom, we have a lot of ambiguity, and we lean into the ambiguity, and people who are highly specialized can thrive in big companies, really thrive. They're invaluable employees. But in a fluid startup-y culture with a lot of ambiguity, they can really drown, really struggle. Maybe the middle of this pendulum, landing in the middle is, "Let's hire someone who has done a bit of it and have a bit of specialism, not much, but enough to try and figure it out." So, we hire a lot of those people today.

**中文翻译:**
与招聘相关的还有“通用型人才”与“专家型人才”，主题类似。是雇佣以前做过的人，还是雇佣专业人士？我们雇佣了一群专家，结果发现他们适应能力不强。在 Intercom，我们有很多模糊性，我们拥抱模糊性。高度专业化的人在大型公司可以如鱼得水，真的非常出色，是无价的员工。但在一个充满模糊性的、流动的初创文化中，他们可能会感到不知所措，非常挣扎。也许钟摆的中间位置，即落脚点应该是：“让我们雇佣一些既有一定经验又有一点专业特长的人，不需要太深，但足以尝试解决问题。”所以我们现在雇佣了很多这样的人。

---

### [01:02:34] Lenny

**English:**
First of all, I love all these stories of things that don't work out, because a lot of people don't like sharing these. And, this is what people want to hear, like, "Here's not everything was perfect. Here's a lot of mistakes that are made along the way." And, it feels like this framework is a result of just doing this too many times. Is the main lesson here generally avoid swinging the pendulum too far? Because sometimes, it's worth it, like in this case of AI, is like, "No, we're going all in." Or in mobile, it was worth going all in. I guess, yeah, what do you think of when I say that?

**中文翻译:**
首先，我非常喜欢这些关于失败的故事，因为很多人不喜欢分享这些。而这正是人们想听的，比如“并不是一切都完美，一路上犯了很多错误”。感觉这个框架就是因为做了太多次这种尝试而总结出来的。这里的主要教训是通常要避免钟摆摆动得太远吗？因为有时是值得的，比如在 AI 这个案例中，就是“不，我们要全力投入”。或者在移动端，全力投入是值得的。我想知道，当我这么说时，你怎么看？

---

### [01:03:04] Paul Adams

**English:**
In talking to people about this before, sometimes the conclusion of the conversation is something like, it's the only way to do it. You actually can't do it a different way." And so, maybe the question is really, how high does the pendulum go? Versus, you got to swing it, and then it's like, how far do you swing it? And for sure, you're right. With AI, we are swinging it pretty high. Maybe I overestimated earlier, if AI is in the differentiation camp to mix the frameworks, we're still building a lot of table stakes features too, building depth into the product. And that's 50/50, I think I mentioned 50/50 earlier, so that's 50/50. So, we're not totally swinging it. It's swung, but we're also doing the other thing and balancing things out. So, I think you probably have to swing it. It reminds me to know where the boundary is, is what I was going to say.

**中文翻译:**
以前和人聊到这个时，有时对话的结论是：“这是唯一的办法，你实际上没法用别的方式做。”所以，也许问题实际上是：钟摆摆得有多高？而不是你要不要摆动它，关键是摆动多远。你当然是对的。对于 AI，我们摆动得相当高。也许我之前高估了，如果把框架混合起来看，如果 AI 属于差异化阵营，我们其实也在构建大量的基础功能，增加产品的深度。那是 50/50，我想我之前提到过 50/50。所以我们并没有完全倒向一边。钟摆摆动了，但我们也同时在做另一件事来平衡。所以，我认为你可能必须摆动它。我想说的是，这能让你知道边界在哪里。

---

### [01:04:01] Paul Adams (Continued)

**English:**
It reminds me back to the olden days stories. I remember, at Google, privacy was really top of mind, to the point that it would block decisions, block product progress, just privacy circular conversations, so many circular conversations, and nothing ever got built or shipped. I worked on a project for a year at Google and we shipped nothing in the year, just circular conversations, which killed me at the time. So, when I went to Facebook, I realized they have a different approach to privacy. And again, I'm not advocating it's necessarily good, it certainly didn't help their brand. But, there was an idea that to know where the boundary is, you got to across it. And crossing it is painful. But, if you don't cross it, you'll never know. So if you think you're going up to the boundary and you stop before it, turns out it's actually miles over there.

**中文翻译:**
这让我想起了以前的故事。我记得在 Google，隐私问题非常受重视，以至于它会阻碍决策、阻碍产品进度，全是关于隐私的循环讨论，没完没了的循环讨论，结果什么也没做出来，什么也没发布。我在 Google 的一个项目组待了一年，那一年我们什么也没发布，全是循环讨论，当时简直要把我逼疯了。所以当我去了 Facebook，我发现他们处理隐私的方式完全不同。再次声明，我并不是说那一定好，那肯定对他们的品牌没好处。但有一种观点是：要了解边界在哪里，你必须跨过它。跨过它是痛苦的，但如果你不跨过去，你永远不会知道。如果你以为自己快到边界了并提前停下，结果可能发现边界其实还在几英里外。

---

### [01:04:54] Paul Adams (Continued)

**English:**
So I think with a lot of this stuff, you don't really have a choice. You got to cross the boundary, feel the pain, be humble enough to realize you didn't get it right, and go again or whatever the corrective course is.

**中文翻译:**
所以我认为在很多事情上，你其实别无选择。你必须跨越边界，感受痛苦，保持谦逊并意识到自己没做对，然后重新开始，或者采取任何纠正措施。

---

### [01:05:12] Lenny

**English:**
Yeah, get that pendulum off the even pivot thing that it's on. And then, let's fix that pendulum. Let's put it back.

**中文翻译:**
是的，让钟摆离开那个平衡点，然后修复它，把它放回去。

---

### [01:05:18] Paul Adams

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:05:20] Lenny

**English:**
Okay. Another framework that I read about briefly, and I love the general idea of it already, which is something that I think you call product market story fit.

**中文翻译:**
好。另一个我简要读过的框架，我已经非常喜欢它的核心理念了，我想你称之为“产品-市场-故事契合度”（product market story fit）。

---

### [01:05:31] Paul Adams

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:05:31] Lenny

**English:**
What is that?

**中文翻译:**
那是什么？

---

### [01:05:33] Paul Adams

**English:**
So yeah, with product market fit, pretty basic, well understood, very important. The way I describe product market fit is, you've got to build the right product for the right market. I think, by the way, as an aside, not enough people think about the market side of that equation. A lot of product people don't think about the market side. But for me, it's very simple. The market is the people, the problems they have, and how important the problems are to them. To have a good market, you need a lot of people with the same problem, and they need to care a lot about it. Going back to the Google social stuff, we found a lot of people with the same problem, but they didn't really care. They didn't really care. What they had was fine. So a lot of people with the same problem and a lot of energy around the problem and the product is the solution to that. The market's the who, the product's the what.

**中文翻译:**
关于产品市场契合度（PMF），这是非常基础、广为人知且非常重要的。我描述 PMF 的方式是：你必须为正确的市场构建正确的产品。顺便说一句，我认为没有足够的人去思考这个等式中的“市场”端。很多产品人不去想市场。但对我来说，这很简单：市场就是人、他们面临的问题，以及这些问题对他们的重要程度。要有一个好的市场，你需要很多面临同样问题的人，而且他们必须非常在意这个问题。回到 Google 的社交项目，我们发现很多人有同样的问题，但他们并不真的在意。他们觉得现状还可以。所以，需要很多人面临同样的问题，并且对该问题有很强的解决动力，而产品就是那个解决方案。市场是“谁”，产品是“什么”。

---

### [01:06:21] Paul Adams (Continued)

**English:**
And, I don't know, in my career again, so a bunch of products that were built, there were good products in good markets, and they failed and I couldn't work it out. And eventually, I came back to this idea that... And maybe someone might say, "Paul, it's marketing. You're talking about marketing." But story, the story's wrong or the story's missing. And so, sometimes, it would be a great product in a great market explained in a convoluted way. I see that a lot. I used to see that a lot at Google again, just explained in a very complicated way over intellectualized. And, as a result, people are like, "What? What are you talking about?" You don't get their attention. And so, the story is really important, as important. And actually, sometimes you'll see not great products, certainly worse on paper... I'm trying to remember the Spotify competitor back in the day, people were like... What was the name of it?

**中文翻译:**
在我的职业生涯中，我见过一堆产品，它们是好市场里的好产品，但它们失败了，我当时百思不得其解。最终，我回到了这个想法……也许有人会说：“Paul，那是营销，你在谈论营销。”但其实是“故事”，故事错了或者故事缺失了。所以，有时一个好市场里的好产品被解释得非常晦涩。我经常见到这种情况。在 Google 时我也经常见到，解释得非常复杂、过度知识化。结果，人们会觉得：“什么？你在说什么？”你无法吸引他们的注意力。所以故事非常重要，同样重要。实际上，有时你会看到一些并不出色的产品，至少在纸面上更差……我试着回想当年的 Spotify 竞争对手，人们当时觉得……它叫什么名字来着？

---

### [01:07:19] Lenny

**English:**
Ordio?

**中文翻译:**
Rdio?

---

### [01:07:20] Paul Adams

**English:**
Yeah, Ordio. Ordio was one of these where-

**中文翻译:**
对，Rdio。Rdio 就是其中之一——

---

### [01:07:20] Lenny

**English:**
I like Ordio a lot.

**中文翻译:**
我很喜欢 Rdio。

---

### [01:07:26] Paul Adams

**English:**
... Yeah, all I've ever heard about Ordio was, "Amazing product."

**中文翻译:**
……是的，我听到的关于 Rdio 的评价全是“惊人的产品”。

---

### [01:07:29] Lenny

**English:**
Mm-hmm.

**中文翻译:**
嗯。

---

### [01:07:30] Paul Adams

**English:**
It's failed. And why did it fail? Spotify and Ordio had the same market. They were solving the same set of problems. Ordio was arguably the better product at the time. I don't know if that's true, but arguably the better. I also think Spotify's an incredible product. But, they got the story wrong. And so, again, I think, all product people, whether you're a designer, product manager, people in research, data science, need to think about the story all the time. Work of marketing, work of product marketing, and learn about how to explain the product, as much as how to build the product.

**中文翻译:**
但它失败了。为什么失败？Spotify 和 Rdio 拥有相同的市场，解决同样的问题。Rdio 在当时可以说是一款更好的产品。我不知道这是否属实，但可以说更好。我也认为 Spotify 是一款不可思议的产品。但是，Rdio 的故事讲错了。所以，再次强调，我认为所有的产品人，无论你是设计师、产品经理，还是研究人员、数据科学家，都需要时刻思考故事。与营销部门、产品营销部门合作，学习如何解释产品，这和学习如何构建产品一样重要。

---

### [01:08:03] Lenny

**English:**
Mm-hmm. Makes me think about positioning and how important that is. And, we had April Dunford on the podcast very recently talking a lot about that.

**中文翻译:**
嗯。这让我想到了定位（positioning）及其重要性。我们最近刚请 April Dunford 上过播客，专门聊了这个。

---

### [01:08:12] Paul Adams

**English:**
Yeah. Yeah, she's excellent. Yeah, it is really, "Why are you better and can you explain why you're better?"

**中文翻译:**
是的。她非常出色。这确实关乎：“你为什么更好，以及你能不能解释清楚你为什么更好？”

---

### [01:08:21] Lenny

**English:**
That's such an important point. A final area I wanted to touch on is jobs to be done. So we had the co-creator of Jobs to be Done on the podcast. We had Shyam Krishnan on the podcast. They very much disagree about how effective Jobs to be Done is. I know you guys are big on Jobs to be Done. So, what are your just general thoughts on the Jobs to be Done framework? How effective was it for you all? How do you use it? What do you find work? Doesn't work? Whatever comes up.

**中文翻译:**
这是一个非常重要的点。我想触及的最后一个领域是“待办任务”（Jobs to be Done, JTBD）。我们曾请过 JTBD 的共同创立者上节目，也请过 Shyam Krishnan。他们对于 JTBD 的有效性有很大分歧。我知道你们非常推崇 JTBD。那么，你对 JTBD 框架的总体看法是什么？它对你们有多大效果？你们是如何使用它的？你发现哪些有效，哪些无效？

---

### [01:08:47] Paul Adams

**English:**
Yeah. I'll be totally honest, at the risk of finding people do this, we worked with Bob West years ago. I think Bob's a great guy. And we followed that model of Jobs to be Done more than the ODI, I think, is the other skill of thought. Anyway. I'll try say this in a simple way. We found Jobs to be Done really good. Very, very useful. But, in a very simple way... Again, back to this idea of simple frameworks, in a simple way, separately, there's so many people who spend so much of their energy debating the nuances and peculiarities of one version. Who cares? No one cares. Oh well, I don't care. They care obviously. But your customers don't care. People you're trying to build a product for don't care,. No one cares. That's a cool intellectual debate. But, for me, maybe this is too extreme. It doesn't really have any place in the work we do. We're just trying to build a great product.

**中文翻译:**
好。我会非常坦诚。冒着被同行诟病的风险，我们多年前曾与 Bob Moesta 合作过。我认为 Bob 是个很棒的人。我们遵循的是他的 JTBD 模型，而不是 ODI（Outcome-Driven Innovation），那是另一派思想。总之，我试着用简单的方式来说。我们发现 JTBD 非常好，非常有用。但它是以一种非常简单的方式……再次回到简单框架的理念，在简单应用之外，有太多人花费大量精力争论某个版本的细微差别和独特性。谁在乎呢？没人关心。好吧，我不关心。他们显然关心，但你的客户不关心，你为之构建产品的人不关心。没人关心。那是一个很酷的学术辩论。但对我来说，也许这太极端了，它在我们的实际工作中没有位置。我们只是想做一个伟大的产品。

---

### [01:09:50] Paul Adams (Continued)

**English:**
And so, for us with Jobs to be Done, it was a really good way of us centering on the customer problem, focusing on not getting distracted, basing it in good solid research informed insight, that told us the thing people are trying to do. What is the thing people are trying to do? Again, energy. Do they have a lot of energy around it? Maybe the energy thing might've come from talking to Bob actually, now that I think about it. I think it did actually. I think, the idea of this idea that you need people who have a lot of energy around the problem. And you have to interview them for that most of the time to feel the energy they have. It's very easy to see if someone's apathetic versus into it.

**中文翻译:**
所以，对我们来说，JTBD 是一个非常好的方式，让我们以客户问题为中心，专注于不分心，并将其建立在扎实的研究洞察之上，告诉我们人们想要完成的事情。人们想要完成的事情是什么？再次强调，“动力”（energy）。他们对此有很强的动力吗？现在回想起来，这个“动力”的概念可能确实是来自与 Bob 的交谈。我认为确实如此。你需要那些对解决问题有极强动力的人。大多数时候你必须通过访谈来感受他们的动力。很容易看出一个人是无动于衷还是全情投入。

---

### [01:10:30] Paul Adams (Continued)

**English:**
So, we've had it pretty good. And, we invented this job stories thing by accident. I can't remember exactly what happened. But, I wrote out this way of writing a job story basically. Well, we didn't call it job stories, someone else called it that. We just, at the time, were like... I can't even remember. It was a trigger. And, anyway, we didn't even give it the thing a name, someone else named it, I think. And, I'm just like, "We're just trying to build a great product." So, we've had it really good in that way, really simple. And then, the other one that we use a lot still here is the four forces, which is this framework of Jobs to be Done. The four forces being... There's different forces when people try and switch product. And some of it's the differentiation, table stake stuff, like the attraction of the new solution, the reasons that you might not adopt it. Habits. People have anxieties.

**中文翻译:**
所以，我们用得很好。我们还偶然发明了“任务故事”（job stories）这个东西。我不记得具体是怎么发生的了，但我写出了一种编写任务故事的方式。好吧，我们当时没叫它任务故事，是别人这么叫的。我们当时只是觉得……我都不记得了，它是一个触发点。总之，我们甚至没给它起名字，我想是别人起的。我当时想：“我们只是想做一个伟大的产品。”所以，我们在那方面做得很好，非常简单。另一个我们至今仍经常使用的是“四种力量”（four forces），这是 JTBD 的一个框架。四种力量是指……当人们尝试切换产品时，存在不同的力量。其中一些是差异化、基础功能之类的，比如新解决方案的吸引力，以及你可能不采用它的原因。还有习惯，以及人们的焦虑。

---

### [01:11:26] Paul Adams (Continued)

**English:**
Here's another funny story to tell you how much... The four forces is really good. Here's a funny story, I was saying earlier that Eoghan and Des were trying to convince me to leave Facebook, which I loved at the time, join and to come. They wrote out the four forces for me to join. And then, secretly, over a few beers, talked to me and fed me my anxieties. And basically worked me on the four forces. And I was like, "That is genius. That is ingenious. Maybe it's a bit... But it's ingenious." And so, the four forces is incredibly good at helping understand why people make decisions.

**中文翻译:**
这里还有一个有趣的故事，告诉你“四种力量”有多好用。我之前说 Eoghan 和 Des 试图说服我离开当时我很喜欢的 Facebook 加入 Intercom。他们为我的加入写出了“四种力量”。然后，在喝了几杯啤酒后，他们秘密地跟我聊天，喂养我的焦虑。基本上就是利用四种力量来“对付”我。我当时想：“这太天才了，太巧妙了。也许有点……但确实很巧妙。”所以，四种力量在帮助理解人们为什么做决定方面非常有效。

---

### [01:12:07] Lenny

**English:**
I love that a lot of your advice just continues to come back to, keep it simple, cut away anything that isn't necessary. And, I find the same exact thing with Jobs to be Done. I find it really useful as a framework for the podcast, the newsletter, but I think there's this endless set of processes and ways of optimizing that gets people distracted. And, often just slows everything down.

**中文翻译:**
我喜欢你的建议总是回到“保持简单，砍掉任何不必要的东西”。我在 JTBD 上也有同样的感受。我发现它作为播客和时事通讯的框架非常有用，但我认为存在无穷无尽的流程和优化方法，会让人们分心，而且往往只会拖慢一切。

---

### [01:12:28] Paul Adams

**English:**
Yeah, yeah. And it's interesting and fun to talk about sometimes, really fascinating, unless you're an academic. But if you're working in a company that you're trying to build a software product for people to improve their lives in some small meaningful way, it doesn't matter. Just use the thing that helps you do that. That's the goal. And use the thing that helps you do that. And that's it.

**中文翻译:**
是的。有时谈论这些很有趣，非常迷人，除非你是学术界人士。但如果你在一家公司工作，试图构建一个软件产品，以某种微小但有意义的方式改善人们的生活，那就不重要了。只要使用能帮助你实现这一目标的工具就行。这就是目标。使用能帮到你的东西，仅此而已。

---

### [01:12:55] Lenny

**English:**
With that, we've reached our very exciting lightning round. Are you ready?

**中文翻译:**
说到这，我们进入了非常令人兴奋的闪电问答环节。准备好了吗？

---

### [01:12:58] Paul Adams

**English:**
I'm ready, yeah.

**中文翻译:**
准备好了。

---

### [01:13:00] Lenny

**English:**
What are two or three books that you've recommended most to other people?

**中文翻译:**
你向别人推荐最多的两三本书是什么？

---

### [01:13:04] Paul Adams

**English:**
Yeah, the two books I recommend to everyone always, I have copies in my office here, It's Not How Good You Are, It's How Good You Want to Be. It's a book by Paul Arden who worked in advertising a long time ago. It's an excellent book. It shows people that you feel an unlimited potential if you think about it the right way, everyone does. The second book I recommend to everyone and buy for people and give to them is Principles by Ray Dalio. I'm a big fan of Ray Dalio. I think he's incredible. I'm a big believer in principles. A lot of us at Intercom are... I always get those two books. And they're totally different. The Paul Arden book, you can read it in 20 minutes. Principles is that thick.

**中文翻译:**
是的，我总是向所有人推荐两本书，我的办公室里就有：一本是《不在于你有多好，而在于你想有多好》（It's Not How Good You Are, It's How Good You Want to Be），作者是很久以前从事广告业的 Paul Arden。这是一本极好的书，它向人们展示了如果你以正确的方式思考，你会感受到无限的潜力，每个人都是如此。我推荐给所有人、并买来送人的第二本书是瑞·达利欧（Ray Dalio）的《原则》（Principles）。我是瑞·达利欧的忠实粉丝，我觉得他很了不起。我非常相信原则，Intercom 的很多人也是。我总是推荐这两本书，它们完全不同。Paul Arden 的那本 20 分钟就能读完，《原则》则有那么厚。

---

### [01:13:38] Lenny

**English:**
What is a favorite recent movie or TV show that you really enjoyed?

**中文翻译:**
最近你非常喜欢的电影或电视剧是什么？

---

### [01:13:42] Paul Adams

**English:**
Most recent is The Bear, which I came to late. The reason I love the show is because I think it somewhat celebrates the grind. And I think that's important. I worked in coffee shops a lot when I was younger, when I put myself through college and stuff. And, the grind is part of life, and the grind is a necessity to get things done, and make great things happen sometimes. And I like that about it. I really like that about it.

**中文翻译:**
最近看的是《大熊餐厅》（The Bear），我看晚了。我喜欢这部剧的原因是，我认为它在某种程度上歌颂了“磨练”（the grind）。我认为这很重要。我年轻时在咖啡店工作过很久，靠那份工作读完大学。磨练是生活的一部分，磨练是完成任务、有时是成就伟业的必要条件。我喜欢这一点，非常喜欢。

---

### [01:14:09] Lenny

**English:**
What is a favorite interview question you'd like to ask candidates?

**中文翻译:**
你最喜欢问应聘者的面试问题是什么？

---

### [01:14:13] Paul Adams

**English:**
Yeah, I'll give you a slightly different answer. I don't really have certain few questions for candidates. And I don't like answer question diversity. I don't like questions that rely on memory. Like, "Tell me about the last time you did X." Here's an amazing question I got given recently by Alyssa who used to work here. I had to do referral calls. So, you're interviewing someone, you want to give them the job and they've got referees, and of course, the referees they have are the best people that they've ever worked with and their favorite managers. So this question is, "What feedback will I be giving this person in their first performance review?" It's an amazing question, because the person can't dodge it. There's an answer. And, it's incredibly enlightening.

**中文翻译:**
好，我给你一个稍微不同的答案。我并没有针对应聘者的固定问题。我不喜欢依赖记忆的问题，比如“告诉我你上次做某事的情况”。这里有一个我最近从曾在我们这工作的 Alyssa 那里学到的绝妙问题。我当时需要做背景调查电话（referral calls）。当你面试某人并想录用他时，他会提供推荐人，当然，这些推荐人通常是他们合作过的最优秀的人和他们最喜欢的经理。所以这个问题是：“在第一次绩效评估中，我会给这个人什么样的反馈？”这是一个了不起的问题，因为对方无法回避，一定会有答案，而且非常有启发性。

---

### [01:14:55] Lenny

**English:**
And that's a question you ask on reference calls?

**中文翻译:**
那是你在背景调查电话中问的问题？

---

### [01:14:57] Paul Adams

**English:**
Yeah, on reference calls.

**中文翻译:**
是的，在背景调查电话里。

---

### [01:14:58] Lenny

**English:**
That is such a good question. I love it.

**中文翻译:**
那真是个好问题。我喜欢。

---

### [01:15:00] Paul Adams

**English:**
Yeah, it's a amazing question. Yeah.

**中文翻译:**
是的，一个很棒的问题。

---

### [01:15:02] Lenny

**English:**
All right, what a gem. Thank you for sharing that. What is a favorite product you've recently discovered that you really love?

**中文翻译:**
太棒了，真是个宝藏建议。谢谢分享。你最近发现并非常喜欢的电子产品或应用是什么？

---

### [01:15:09] Paul Adams

**English:**
This is maybe cheating, but I go back to a lot of the AI products. I think ChatGPT Vision is mind-blowing. I've been playing with Rewind lately. I was a bit late to it. Des, and Kiran, and a bunch of people here, founders of Intercom, love Rewind, use it and love it. Thing's amazing. So I'm a bit late to that. But, it's just augmented memory. It's mind-blowing. So, Rewind's been fun.

**中文翻译:**
这可能有点耍赖，但我还是会回到 AI 产品。我认为 ChatGPT Vision 令人震撼。我最近一直在玩 Rewind，我用得有点晚了。Des、Kiran 和这里的很多 Intercom 创始人都在用 Rewind，而且非常喜欢。这东西太神奇了。虽然我起步晚了点，但它简直就是增强记忆，太震撼了。所以 Rewind 很有趣。

---

### [01:15:32] Lenny

**English:**
And they just came out with a little audio thing that can record your actual day.

**中文翻译:**
他们最近还出了一个小型的音频设备，可以记录你真实的一天。

---

### [01:15:36] Paul Adams

**English:**
Yeah, I'm not so sure about that.

**中文翻译:**
是的，我对那个不太确定。

---

### [01:15:39] Lenny

**English:**
Yeah, got some flack.

**中文翻译:**
是的，受到了一些批评。

---

### [01:15:42] Paul Adams

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:15:43] Lenny

**English:**
I'm not so sure. I don't know. I don't know if it's real. It looked like not a real product when they launched in, but I think it's real.

**中文翻译:**
我也不太确定。我不知道它是不是真的。发布时看起来不像个真实的产品，但我认为它是真的。

---

### [01:15:47] Paul Adams

**English:**
And it tippy-toes into what's okay and not okay with AI. And, yeah. Yeah, it's a cool theory though, for sure.

**中文翻译:**
它触及了 AI 的道德边界，即什么是可以接受的，什么是不可以的。不过，这确实是一个很酷的理论。

---

### [01:15:57] Lenny

**English:**
What is a favorite life motto that you often come back to share with people, find helpful for yourself?

**中文翻译:**
你最喜欢的、经常分享给别人或觉得自己受益匪浅的人生格言是什么？

---

### [01:16:04] Paul Adams

**English:**
Yeah, I have a post-it on my monitor that says, "Only work on what matters most." It's on my monitor, a post-it. And it sometimes falls off, and I have to write it again. Only work on what matters most. And, it's amazing. I go into work, someone emails me, and I'm like, "Oh, God." I'm like, "Only work on what matters most." The second one related is, stop worrying about things you can't control. And so, I have two of those. And so, only working what matters most. Stop worrying about things you can't control. It just reduces the temperature. Again, life lessons learned. I sent a lot of dumb emails in my past, like, "Red Energy, oh my God, what are they thinking?" You wake up in Dublin to a San Francisco email. And you're like, "Oh god. Keyboard." And, if your monitor says these two things, you just don't do that. You just take a breath, get a coffee, come back. Does it really matter?

**中文翻译:**
是的，我的显示器上贴着一张便签，上面写着：“只做最重要的事情。”就在我的显示器上。它有时会掉下来，我就得重写一遍。只做最重要的事情。这很神奇。我去上班，有人给我发邮件，我心想：“噢天哪。”然后我看到：“只做最重要的事情。”第二个相关的格言是：“停止担心你无法控制的事情。”所以我有这两条。只做最重要的事情，停止担心无法控制的事情。这能让你冷静下来。这也是人生教训。我过去发过很多愚蠢的邮件，比如带着怒火心想：“天哪，他们在想什么？”你在都柏林醒来，看到一封来自旧金山的邮件，然后你就想敲键盘回击。如果你的显示器上写着这两句话，你就不会那么做了。你会深呼吸，喝杯咖啡，再回来。这真的重要吗？

---

### [01:17:02] Lenny

**English:**
Beautiful. The second one, I think, I learned first from Seven Habits of Highly Effective People. Have you read that?

**中文翻译:**
太棒了。第二个格言，我想我最早是从《高效能人士的七个习惯》中学到的。你读过吗？

---

### [01:17:02] Paul Adams

**English:**
Oh, yeah.

**中文翻译:**
噢，读过。

---

### [01:17:10] Lenny

**English:**
Just think about the focus, the circle of things you can control, and then there's the circle of things you can influence, and then there's the things you have no control over. And, I find that really helpful myself. I love that you have it as a post-its. I feel like, I need to make post-its of all these lessons people share as their little mottos.

**中文翻译:**
想想关注点：你有一个可以控制的圈子，一个可以影响的圈子，还有一个你完全无法控制的圈子。我觉得这对我非常有帮助。我喜欢你把它做成便签。我觉得我需要把人们分享的所有这些教训都做成便签，当作座右铭。

---

### [01:17:26] Paul Adams

**English:**
Yeah, the post-it on the monitor is a real life hack, I found a few years ago. Because it's dumb in a way. The posts on the monitor, it's in the way.

**中文翻译:**
是的，在显示器上贴便签是我几年前发现的一个生活黑科技。因为某种程度上它挺傻的，贴在显示器上会挡事。

---

### [01:17:34] Lenny

**English:**
Wait, you actually put it on the monitor in the way of your screen?

**中文翻译:**
等等，你真的把它贴在显示器上，挡住了屏幕？

---

### [01:17:34] Paul Adams

**English:**
Yeah, yeah.

**中文翻译:**
是的，没错。

---

### [01:17:34] Lenny

**English:**
Oh, wow.

**中文翻译:**
噢，哇。

---

### [01:17:38] Paul Adams

**English:**
It's in the bottom left, just covering the bottom. Because otherwise, if it wasn't there, I wouldn't look at. I make myself look at it.

**中文翻译:**
就在左下角，遮住了一点底部。因为如果不贴在那，我就不会去看它。我强迫自己去看。

---

### [01:17:47] Lenny

**English:**
Yeah. Wow. I haven't heard of people putting it over precious real estate on their monitor.

**中文翻译:**
是的。哇。我还没听说过有人把它贴在显示器那么宝贵的位置上。

---

### [01:17:53] Paul Adams

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:17:53] Lenny

**English:**
What's the most valuable lesson your mom or your dad taught you?

**中文翻译:**
你父母教给你的最宝贵的教训是什么？

---

### [01:17:58] Paul Adams

**English:**
The biggest one, again, so reductive and simple is to be nice to people. I think, being nice goes way further than people really realize. One thing that I've learned, again, the hard way through life is you have no idea what's going on in people's lives. You've no idea. People could have all sorts of really stressful, all sorts of personal stuff going on, and the reason they did the thing at work that you didn't like is because of that. And so, I try and think, "Be nice. You don't know what's going on. You might learn later. Don't act in a way you would regret." I think, being nice in life goes far further than most people give a credit for, because it's too much of a, I don't know, fluffy truism or whatever.

**中文翻译:**
最大的一个教训，再次强调，非常简单直接：待人友善。我认为友善的作用远超人们的想象。我从生活中（再次通过惨痛教训）学到的一件事是：你根本不知道别人的生活中正在发生什么。你完全不知道。人们可能正面临各种压力、各种私事，他们在工作中做了让你不爽的事，可能正是因为那些。所以我试着去想：“友善一点。你不知道发生了什么，以后你可能会知道。不要做出让你后悔的行为。”我认为在生活中，友善的作用比大多数人认为的要大得多，因为它听起来太像是一句空洞的陈词滥调了。

---

### [01:18:54] Lenny

**English:**
I 1000% resonate with that. I've been told I'm too nice and I had to become a little less nice. But, I still can't lose that. So I fully buy into that. My parents taught me a similar lesson.

**中文翻译:**
我百分之千地产生共鸣。有人说我太友善了，我不得不变得没那么友善一点。但我仍然无法丢掉它。所以我完全认同。我父母也教过我类似的道理。

---

### [01:19:08] Paul Adams

**English:**
Yeah. And sometimes it's hard. I'd never fired anyone before I joined Intercom, for example. I really did not like doing it. And, since then, I've done it quite a few times in a bunch of different circumstances, and realized it always works out for both sides. And the nicest thing to do is to do the harder thing. It's actually the nicer thing to do. People are relieved in this example. It's a nicer thing to do. So, it can be a complicated one.

**中文翻译:**
是的。有时这很难。例如，在加入 Intercom 之前，我从未解雇过任何人。我真的很不喜欢那样做。从那以后，我在各种不同的情况下做过好几次，我意识到这对双方都有好处。最友善的做法往往是做那件更难的事。实际上那才是更友善的。在这个例子中，人们会感到解脱。所以，这可能是一个复杂的问题。

---

### [01:19:37] Lenny

**English:**
I love it. Final question. You're Irish, you're based in Ireland. What is an Irish food you think people should definitely try out if they ever visit Ireland?

**中文翻译:**
太棒了。最后一个问题。你是爱尔兰人，也住在爱尔兰。你认为人们如果去爱尔兰旅游，一定要尝试的爱尔兰食物是什么？

---

### [01:19:50] Paul Adams

**English:**
Can I cheat and say Guinness? Is that food?

**中文翻译:**
我可以耍赖说健力士（Guinness）黑啤吗？那算食物吗？

---

### [01:19:54] Lenny

**English:**
Absolutely.

**中文翻译:**
当然算。

---

### [01:19:56] Paul Adams

**English:**
The Guinness in Ireland. People talk about this and it's true. The Guinness in Ireland is much, much better for a whole bunch of reasons. It's basically a fresh product and it's brewed here. It's the way they think about, it's like milk. Milk goes off, Guinness goes off. Guinness is older than a few days old, tends to start deteriorating. So, Guinness Ireland is amazing, because it's made here. The other thing I think that Ireland does really well is fish. Ireland has not had, by the way, the greatest reputation for culinary excellence over the years. I think Irish food in the States in particular is not good. But, the fish here is incredible. You can get incredible fish. And Ireland's obviously an island, so there's a lot of fish.

**中文翻译:**
爱尔兰的健力士。人们常说这一点，而且是真的。爱尔兰的健力士要好得多，原因有很多。它基本上是一种新鲜产品，是在这里酿造的。他们看待它的方式就像看待牛奶。牛奶会变质，健力士也会。如果健力士出厂超过几天，就开始变味了。所以爱尔兰的健力士很棒，因为它是本地产的。另一件我认为爱尔兰做得非常出色的是鱼。顺便说一下，多年来爱尔兰在烹饪卓越方面名声一般。我认为美国的爱尔兰食物尤其不好吃。但这里的鱼非常棒，你可以吃到不可思议的鱼。爱尔兰显然是个岛国，所以有很多鱼。

---

### [01:20:37] Lenny

**English:**
On the Guinness front, is there any way to get the good stuff not in Ireland? Or is that just you got to go?

**中文翻译:**
关于健力士，有没有办法在爱尔兰以外的地方喝到好的？还是说必须亲自去一趟？

---

### [01:20:43] Paul Adams

**English:**
No, there is actually. You just need to be near a brewery. So Guinness is brewed in Nigeria. There's a huge Guinness market in Nigeria.

**中文翻译:**
不，其实有办法。你只需要靠近酿酒厂。健力士在尼日利亚也有酿造，那里有一个巨大的健力士市场。

---

### [01:20:43] Lenny

**English:**
I did not know that.

**中文翻译:**
我以前不知道这个。

---

### [01:20:53] Paul Adams

**English:**
I think they actually use a different recipe, but it's brewed there. I think the brewery in the U.S. is somewhere in the east coast between New York and Eastern Canada. So, it's somewhere there. So, often, the Guinness in New York can be actually pretty good. The Guinness in San Francisco tends to be really bad. I remember talking to someone about this that works in Guinness. One of my friends, does a lot of work in Guinness. I think the boat carried the Guinness goes down through the Panama Canal back up to San Francisco. So, it's 12-weeks-old or something.

**中文翻译:**
我想他们实际上使用了不同的配方，但确实是在那里酿造的。我想美国的酿酒厂在东海岸，位于纽约和加拿大东部之间。所以，纽约的健力士通常其实挺不错的。旧金山的健力士往往很糟糕。我记得和健力士的一位工作人员聊过这个，我的一个朋友在健力士做了很多工作。我想运送健力士的船要穿过巴拿马运河再回到旧金山，所以到那儿时已经出厂 12 周了。

---

### [01:21:25] Lenny

**English:**
Wow. Did not think we would be learning about the travel path of Guinness from-

**中文翻译:**
哇。没想到我们会从你这学到健力士的运输路线——

---

### [01:21:31] Paul Adams

**English:**
At least this is what I've heard. The Guinness has so many myths, you just don't really know what's true. But, these are the stories I've been told.

**中文翻译:**
至少我是这么听说的。关于健力士有太多的传说，你根本不知道什么是真的。但这些是我听到的故事。

---

### [01:21:38] Lenny

**English:**
... Amazing. Paul, you are awesome. Thank you so much for being here. Two final questions. Where can folks find you online if they want to reach out? And how can listeners be useful to you?

**中文翻译:**
……太棒了。Paul，你太出色了。非常感谢你能来。最后两个问题：如果大家想联系你，可以在哪里找到你？听众们能为你提供什么帮助？

---

### [01:21:46] Paul Adams

**English:**
I have a handle, it's everywhere. Basically, P-A-D-D-A-Y. It's Paddy with an extra A. So, P-A-D-D-A-Y. That's everywhere. So, paddy@gmail, @Paddy. It's my handle everywhere. So, that's where you can find me. I'd love people to reach out to me, right, genuinely learn. I'd love to hear from people who think my AI talk is nonsense and it's more a crypto Web3. Or, I'd love to hear people who have alternative opinions and challenge mine. That's how I like to learn and get better. So, if people have those opinions, I'd love to hear them. I'd love to talk to them.

**中文翻译:**
我有一个 ID，到处都在用：P-A-D-D-A-Y。就是 Paddy 多加一个 A。在 Gmail、Twitter 上都是这个。这就是你可以找到我的地方。我真心希望人们能联系我，共同学习。我很想听听那些认为我关于 AI 的谈论全是废话、觉得它更像加密货币或 Web3 的人的看法。或者，我很想听听那些有不同意见并挑战我观点的人的想法。这就是我学习和进步的方式。所以，如果人们有这些想法，我很想听听，也很想和他们交流。

---

### [01:22:25] Lenny

**English:**
Be careful what you wish for. The YouTube comments are always a spicy place. We'll see what we see. Awesome, Paul. Thank you again so much for being here.

**中文翻译:**
小心你的愿望成真。YouTube 的评论区总是言辞犀利。我们拭目以待。太棒了，Paul。再次感谢你能来到这里。

---

### [01:22:33] Paul Adams

**English:**
Yeah, thanks Lenny. I really appreciate it.

**中文翻译:**
好的，谢谢 Lenny。非常感谢。

---

### [01:22:35] Lenny

**English:**
Bye, everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
再见，各位。非常感谢收听。如果你觉得这期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客 App 上订阅本节目。此外，请考虑给我们评分或留下评论，这能极大地帮助其他听众发现本播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目再见。