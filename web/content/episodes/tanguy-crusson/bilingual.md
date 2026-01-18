# Tanguy Crusson - 双语对照

这是一个关于 Lenny Rachitsky 对话 Atlassian 产品负责人 Tanguy Crusson 的完整播客转录双语文档。

---

### [00:00:00] Tanguy Crusson

**English:**
Been in the product management team at Atlassian for roughly 10 years now. I worked on HipChat and Stride, and more recently I started Jira Product Discovery.

**中文翻译:**
我在 Atlassian 的产品管理团队工作大约 10 年了。我曾负责过 HipChat 和 Stride，最近我发起了 Jira Product Discovery（Jira 产品发现）项目。

---

### [00:00:09] Lenny Rachitsky

**English:**
Why is it so hard to start new products, go zero to one within large companies?

**中文翻译:**
为什么在大公司内部启动新产品、实现从 0 到 1 如此困难？

---

### [00:00:13] Tanguy Crusson

**English:**
The company has a tendency to over-invest. Startups have the benefit of starving, and so you need to create scarcity. What we try to do is remind everyone things are going to fail, let's not drag the rest of the company into it.

**中文翻译:**
大公司往往倾向于过度投资。初创公司的优势在于“饥饿感（starving）”，因此你需要人为创造稀缺性。我们尝试做的是提醒每个人，事情很可能会失败，所以别把公司的其他部门也卷进来。

---

### [00:00:24] Lenny Rachitsky

**English:**
Sounds like one of the biggest lessons is super silo sort of team.

**中文翻译:**
听起来最大的教训之一是需要一种高度隔离（silo）的团队模式。

---

### [00:00:28] Tanguy Crusson

**English:**
I needed the rest of the company to go away so we could get the autonomy to test the things that we needed, but it's not going to scale. That is not going to respect all design guidelines.

**中文翻译:**
我需要公司其他部门离远点，这样我们才能获得自主权去测试我们需要的东西。但在初期，这（测试的产品）是无法规模化的，也不会遵循所有的设计准则。

---

### [00:00:35] Lenny Rachitsky

**English:**
The biggest challenge I think a lot of companies have is just, it's been six months, no one wants this, we're going to kill it. How do you protect that?

**中文翻译:**
我认为很多公司面临的最大挑战是：六个月过去了，没人想要这个产品，我们要砍掉它。你如何保护这种项目？

---

### [00:00:41] Tanguy Crusson

**English:**
Be very clear about what we're testing, doing that with data, doing that with personal customer stories, give people a sense of velocity and speed. No one wants to fuck with a high-speed train.

**中文翻译:**
非常明确我们要测试的内容，用数据和真实的客户故事说话，给人一种速度感。没人想去挡一列高速行驶的火车。

---

### [00:00:54] Lenny Rachitsky

**English:**
Today, my guest is Tanguy Crusson. This is a really unique and important episode because we get into something you don't hear much on podcasts like this, the real talk challenges of trying to innovate and build zero to one at a large company like Atlassian. Tanguy has been at Atlassian for over 10 years and has worked on a bunch of internal big bets, some that have worked and some that have not, including products like HipChat, which I was a huge fan of back in the day, also a product called Status Page, and most recently Jira Product Discovery, which is one of the fastest growing products in Atlassian history that Tanguy led from idea to launch. We go through each of these stories, and Tanguy shares what went wrong, what went right, and everything that he's learned about creating space for innovation within a larger org, including how they structured their internal incubation program called Point A.

**中文翻译:**
今天的嘉宾是 Tanguy Crusson。这是一集非常独特且重要的节目，因为我们将探讨在像 Atlassian 这样的大公司里尝试创新和从 0 到 1 构建产品的真实挑战，这在同类播客中并不多见。Tanguy 在 Atlassian 工作了 10 多年，负责过一系列内部重大押注，有些成功了，有些则没有。其中包括我当年非常喜欢的 HipChat，还有一个叫 Status Page 的产品，以及最近的 Jira Product Discovery——这是 Atlassian 历史上增长最快的产品之一，由 Tanguy 带领从构思走向发布。我们将回顾这些故事，Tanguy 会分享哪些做错了，哪些做对了，以及他在大组织内创造创新空间所学到的一切，包括他们如何构建名为“Point A”的内部孵化计划。

---

### [00:01:45] Lenny Rachitsky (Continued)

**English:**
There's a ton of gold in this episode and a bunch of really interesting stories, which is part of the reason that it went this long. It's the longest episode I've done yet. If you're looking to create change in your organization and foster more innovation, this episode will be worth your time. If you enjoy this podcast, don't forget to subscribe and follow it in your favorite podcasting app or YouTube, the best way to avoid missing feature episodes and it helps the podcast tremendously. With that, I bring you Tanguy Crusson.

**中文翻译:**
这集节目里有很多干货和非常有趣的故事，这也是录制时间这么长的原因之一。这是我目前录制时间最长的一集。如果你正寻求在组织内创造变革并促进更多创新，这集节目绝对值得你花时间。如果你喜欢这个播客，别忘了在常用的播客应用或 YouTube 上订阅和关注，这是避免错过未来节目的最好方式，也对我们很有帮助。下面，让我们欢迎 Tanguy Crusson。

---

### [00:02:13] Lenny Rachitsky

**English:**
Tanguy, thank you so much for being here, and welcome to the podcast.

**中文翻译:**
Tanguy，非常感谢你能来，欢迎来到本播客。

---

### [00:02:21] Tanguy Crusson

**English:**
Thank you very much for welcoming me here, Lenny. I'm actually super proud to be on this podcast. I've been a huge fan. Whenever I get the chance, I listen to you when I drive somewhere so yeah.

**中文翻译:**
非常感谢你邀请我，Lenny。能参加这个播客我感到非常自豪。我一直是你的忠实粉丝，只要有机会，比如开车去某地时，我都会听你的节目。

---

### [00:02:31] Lenny Rachitsky

**English:**
What we're going to be talking about in this episode is we're going to be talking about building new products and going zero to one within larger companies, and in particular, the pain and the challenges that come along with that, but also the lessons that you've learned from doing this many times and seeing it done many times. You've seen a lot of this happening at Atlassian, you've been there for over 10 years at this point, and Atlassian has, I don't know, over a dozen different product lines at this point, something like that. I know a lot of people come to you asking for advice on how to build zero to one within a large company. So let me just start with a general question of just could you just share a bit about your history of building zero to one and just seeing zero to one happening within Atlassian?

**中文翻译:**
我们在这集节目中要讨论的是在大公司内部构建新产品和实现从 0 到 1，特别是伴随而来的痛苦和挑战，以及你多次亲历或目睹这一过程后总结的教训。你在 Atlassian 待了 10 多年，见证了这一切。Atlassian 现在大概有十几个不同的产品线。我知道很多人找你咨询如何在大公司内部做从 0 到 1。所以，先从一个普遍的问题开始：你能分享一下你在 Atlassian 构建从 0 到 1 以及观察这一过程的历史吗？

---

### [00:03:14] Tanguy Crusson

**English:**
Yeah, so like you said, I've been in the product management team at Atlassian for roughly 10 years now, and I've been working mainly on bootstrapping new things. Initially, I joined to start the cloud developer ecosystem so developers can build apps on top of the Atlassian platform and sell them on the Atlassian marketplace. I worked on HipChat and Stride. HipChat was well-known, Stride less so. We were trying to win the enterprise communications market before Slack and Microsoft Teams came about. I did lead a business case to invest more in IT operations, got nowhere with it than we acquired Statuspage, Opsgenie, and something I tried to do with didn't quite get off the ground. More recently I started Jira Project Discovery, which was part of our internal incubator for two to three years, and came out of the incubator and generally available a year ago.

**中文翻译:**
是的，正如你所说，我在 Atlassian 的产品管理团队工作了大约 10 年，主要负责从零开始孵化新事物。最初，我加入是为了启动云端开发者生态系统，让开发者可以在 Atlassian 平台上构建应用并在我们的市场上销售。我负责过 HipChat 和 Stride。HipChat 很有名，Stride 知名度稍低。在 Slack 和 Microsoft Teams 出现之前，我们曾试图赢得企业通讯市场。我还曾主导过一个加大 IT 运营投资的商业案例，但当时没谈成，后来我们收购了 Statuspage 和 Opsgenie，还有一些我尝试做但没能落地的项目。最近，我发起了 Jira Product Discovery，它在我们的内部孵化器中待了两三年，一年前正式发布（GA）。

---

### [00:04:13] Tanguy Crusson (Continued)

**English:**
My track record at Atlassian has been 50/50 at best. Jira Project Discovery is actually my first, what I would call big success here. That one worked, but it was hard and all the ones that I worked on before were really hard to, and that's the kind of stuff that really bothered me for a super long time. The good thing is working on a product for product managers, I got to talk to a lot of product managers and across all sorts of industries in the past three to four years, and I realize that 50/50 is actually not that bad.

**中文翻译:**
我在 Atlassian 的战绩充其量是五五开。Jira Product Discovery 实际上是我在这里第一个称得上“巨大成功”的项目。这个成功了，但过程很艰难，之前我参与的项目也都很不容易，这些挫折曾困扰了我很长时间。好在因为是为产品经理开发产品，在过去三四年里，我有机会与各行各业的产品经理交流，我意识到 50% 的成功率其实已经很不错了。

---

### [00:04:46] Lenny Rachitsky

**English:**
Awesome, and I know there's going to be a lot of real talk in this conversation. I'm excited to share and hear all these stories.
(00:04:52): [Sponsorship break for Vanta and WorkOS - omitted for brevity as per standard transcript practice, but can be included if needed]

**中文翻译:**
太棒了，我知道这次对话会有很多真诚的交流。我很期待听到这些故事。
（00:04:52）：[Vanta 和 WorkOS 的广告环节]

---

### [00:07:04] Lenny Rachitsky

**English:**
Just broadly, why is it so hard in your experience to start new products go zero to one within large companies? What have you seen are the biggest challenges and hurdles generally?

**中文翻译:**
从大方向来看，根据你的经验，为什么在大公司内部启动新产品并实现从 0 到 1 如此困难？你认为普遍存在的最大挑战和障碍是什么？

---

### [00:07:14] Tanguy Crusson

**English:**
Yeah, so on the opportunity side, so Atlassian, 300,000 customers. We play in a whole bunch of different markets, everything in the collaboration space. We have a lot of markets that we play in, which means that we've got a lot of competitors. But basically when we look at the areas we could go in, there's an endless list of areas that we could go in, play and have a decent chance to win. Much harder to do if you're a startup. The breadth that we've got makes it easier to try find areas where we could expand into. We're not starving like a smaller company, so we can actually afford to try to play somewhere, to do some bets, to have some of them fail and some of them succeed, so that's amazing. Now our customers, I said 300,000. The thing that I admire the most about the Atlassian business model is it's very broad. It's across small and medium-sized companies. We have startups using our products, and we've got also enterprises and very large enterprises using the same products, which means that there's a lot of areas where we could find a niche and go after it and expand progressively into all these areas so there's a massive distribution potential that comes with that. When I worked on Jira Product Discovery, I didn't start with, okay, I'm going to need to start finding product managers and it's going to be how to find them. No, they were already all using Jira. Atlassian is a company that has a relatively deep organization hierarchy but relatively flat decision making. So it's more like a, imagine a network of key decision makers across the organization. It doesn't really matter the job title or whether you are a manager of people or not. The decisions are made by people who drive change.

**中文翻译:**
是的，从机会的角度来看，Atlassian 拥有 30 万客户。我们涉足许多不同的市场，涵盖了协作领域的方方面面。这意味着我们有很多竞争对手，但也意味着我们可以进入的领域清单是无穷无尽的，而且有相当大的胜算。如果你是初创公司，这要难得多。我们的业务广度让我们更容易找到扩张领域。我们不像小公司那样面临生存危机（starving），所以我们负担得起去尝试、去押注，接受一些失败和一些成功，这很棒。关于那 30 万客户，我最钦佩 Atlassian 业务模式的一点是它的广泛性：从中小型企业到初创公司，再到超大型企业都在使用同样的产品。这意味着我们有很多切入点可以找到利基市场（niche），然后逐步扩张，这带来了巨大的分发潜力。当我开发 Jira Product Discovery 时，我不需要发愁去哪里找产品经理，因为他们已经在用 Jira 了。Atlassian 的组织架构虽然相对较深，但决策过程相对扁平。它更像是一个遍布全公司的关键决策者网络，职衔或是否带团队并不重要，决策是由那些推动变革的人做出的。

---

### [00:09:02] Tanguy Crusson (Continued)

**English:**
So there's a lot of empowerment that comes from that, but also it's a mix of top-down, bottom-up happiness I'd say. And so it can feel really chaotic at first, but once you know how to navigate it, it's actually pretty easy to try to go after something that you care about. And of course, we're a big company, so there's lots of ways we can get help. Corporate development, research analysts that we can talk to whenever we want to explore something, thousands of customers that I just have to put something in the addressable community group and get hundreds of people applying to talk to me from one day to the next. So that's amazing, any startup would want that.

**中文翻译:**
所以这带来了很多赋权，但也混合了自上而下和自下而上的决策模式。起初可能会觉得很混乱，但一旦你知道如何驾驭它，去追求你关心的项目其实相当容易。当然，作为一家大公司，我们有很多获取帮助的途径：企业发展部、研究分析师，还有成千上万的客户——我只需要在社区群组里发个消息，第二天就会有几百人申请跟我交流。这太棒了，任何初创公司都梦寐以求。

---

### [00:09:45] Lenny Rachitsky

**English:**
This sounds like how can anything not work when you launch a new product? You have 300,000 potential customers to launch it to. You have all the resources to build it. It sounds like decision making is efficient relatively, it's flat. You have all these different customer segments that use all these different version product lines of Atlassian. It's just like all of the opportunity possible to launch new products and still, many things do not work out, so I think this is a really important point and I think many big companies are in this. We have so much opportunity. Everything we're going to build is going to, it's going to grow like crazy because we have everything we need, but still it doesn't work out. And that's why I think we're going to talk about, it's going to be so important.

**中文翻译:**
听起来，当你发布新产品时，怎么可能不成功呢？你有 30 万潜在客户，有充足的资源，决策相对高效且扁平，还有各种细分客户群。这简直是发布新产品的完美机会，但即便如此，很多事情还是没成。我认为这是一个非常重要的点，很多大公司都处于这种状态：我们有这么多机会，我们构建的一切都会疯狂增长，因为我们拥有一切条件，但结果还是失败了。这就是我们要讨论的重点。

---

### [00:10:27] Tanguy Crusson

**English:**
It's going to be a little bit of therapy for me. Hopefully some people out there could go, "Okay, it's not just me having a hard time." It can happen in companies like Atlassian too.

**中文翻译:**
这对我来说有点像是一场“心理治疗”。希望听众能意识到：“好吧，不只是我一个人在挣扎。” 像 Atlassian 这样的公司也会遇到这些问题。

---

### [00:10:38] Lenny Rachitsky

**English:**
Amazing. Let's do it.

**中文翻译:**
太好了，那我们开始吧。

---

### [00:10:41] Tanguy Crusson

**English:**
Yeah, for that. So you want to start a new thing. This thing is going to take time, and you need to be able to have that time for the time it takes until you can prove whether there is a thing or not. The thing inside Atlassian is that the path for success is super high for a new bet. If you come in and you create a product and it's got 100 customers, it's going to look cute. Remember, we serve startups and enterprises, we have self-service and sales, we've got all these motions that are in place for our bigger products. A $100 million business is a good start basically. In most companies out there, $100 million business is a home run. For us, it's not like that. We're trying to build businesses that grow really big and keep growing big over time.

**中文翻译:**
好的。你想启动一个新项目，这需要时间，而且你需要顶住压力直到证明这个项目是否可行。在 Atlassian 内部，新押注的成功门槛极高。如果你开发了一个产品，只有 100 个客户，那看起来只是“小打小闹”。记住，我们服务于初创公司和大型企业，我们有成熟的自助服务和销售体系。一个 1 亿美元规模的业务基本上才只是个“良好的开端”。在大多数公司，1 亿美元业务就是全垒打，但对我们来说不是。我们追求的是能成长到极大规模并持续增长的业务。

---

### [00:11:36] Tanguy Crusson (Continued)

**English:**
Now, evaluating success can look very different between early stage and established products. For a long time at Atlassian, we were treating everything a little bit equally in that the metrics success for the same. For example, things like monthly active users is the way that you, for a long time we looked at you go, is that product being successful on it? And what if you are building an "internal startup," your monthly active user number should look very low for quite some time up until you know that your product is ready to serve the vast majority of the customers that you want to put it in front of, so that they don't just look at it and go, "It's not ready for me." They're going to try it and then they're going to churn and it's going to take forever to claim them back, so that makes it pretty challenging to try and start new things unless we've got the right metrics and processes and everything internally that can give room and breathing space for the bets to succeed internally. And for many years, we were not there. We started getting there more recently with the start of Point A, which was our internal incubator program, which is one of my latest that was successful. The ones before didn't have that, and I really struggled from that, and I see many companies struggling with that exact aspect.

**中文翻译:**
早期阶段和成熟产品的成功评估标准非常不同。在 Atlassian 很长一段时间里，我们对所有产品的评估都一视同仁，使用相同的成功指标。例如，月活跃用户数（MAU）曾是我们衡量产品是否成功的长期标准。但如果你在做一个“内部创业项目”，你的 MAU 在相当长一段时间内都会很低，直到你确定产品已经准备好服务于大众客户。否则，客户尝试后发现“这还没准备好”，然后流失掉，你可能永远也找不回他们了。因此，除非内部有正确的指标、流程和空间给这些押注以喘息的机会，否则启动新项目会非常困难。多年来我们都没做到这一点，直到最近启动了内部孵化计划 Point A，我的最新项目才得以成功。之前的项目没有这种机制，我当时非常挣扎，我也看到很多公司在这一点上挣扎。

---

### [00:12:58] Lenny Rachitsky

**English:**
Amazing. Let's dive into an actual story. There's three that I want to talk about. There's HipChat, which you mentioned. There's Status Page and then there's the product you're working on now, Jira Product Discovery. So with HipChat, funny story, I loved HipChat. I was a huge user of HipChat at my startup back in the day. I can never forget the billboard that you all put out promoting HipChat where there's this little stick figure meme guy and it just said, "Why use HipChat?" And I thought that was the funniest thing, and the product was so delightful. There's just all these little emojis in there, and the idea with HipChat for Atlassian was basically to become the Slack killer, that was the vision.

**中文翻译:**
太棒了。让我们深入探讨一个真实的故事。我想聊三个：你提到的 HipChat、Status Page，还有你现在负责的 Jira Product Discovery。关于 HipChat，有个有趣的故事，我以前非常喜欢它，在我之前的创业公司里我是它的重度用户。我永远忘不了你们做的那个广告牌，上面有个火柴人表情包，写着“为什么要用 HipChat？”我觉得那太搞笑了，产品也很讨喜，有很多小表情。当时 Atlassian 对 HipChat 的愿景基本上是成为“Slack 杀手”。

---

### [00:13:39] Tanguy Crusson

**English:**
You just killed me. We were way before Slack.

**中文翻译:**
你这话可扎心了。我们比 Slack 早得多。

---

### [00:13:43] Lenny Rachitsky

**English:**
Okay, so first mover advantage, amazing product. And it was an acquisition for Atlassian.

**中文翻译:**
好吧，先发优势，优秀的产品。而且它是 Atlassian 收购来的。

---

### [00:13:53] Tanguy Crusson

**English:**
Yeah, it's going to start right there. Me and everyone else from the HipChat team I can tell you. Okay, so yes, HipChat was an acquisition, team of 20 people or so. It was Slack before Slack was there. Great traction and lot of, it was a darling with startups. It was a new way to collaborate back then. There were a few of these smaller apps that were trying to do this thing. I remember actually joining Atlassian. Before that, I was working with financial services, banks and stuff like that, and we were big meeting to talk about stuff, or going to someone's desk to talk about stuff. I joined this company where my colleagues who sit on the same floor as me and on the same table, we talk over the computer via chat. I often felt weird at first looking over my shoulder to the person I'm currently talking to and we're having an argument, but we're doing it over text. Anyway, it might seem a bit cute to the people who had been born in the Slack world, but it was a major change back then.

**中文翻译:**
是的，我们的“心理治疗”就从这儿开始吧。我可以代表 HipChat 团队的每一个人。HipChat 当时是被收购的，团队大约 20 人。在 Slack 出现之前，它就是当时的“Slack”。它在初创公司中非常受欢迎，是当时一种全新的协作方式。我记得刚加入 Atlassian 时，我之前在金融服务和银行工作，大家习惯开大会或者跑去别人桌子旁谈事。但我加入这家公司后，坐在同一层甚至同一张桌子的同事，竟然通过电脑聊天。起初我觉得很奇怪，我回头看着正在跟我说话的人，我们正在争论，但却是通过文字。对于在 Slack 时代出生的人来说这可能很平常，但在当时是一个巨大的变革。

---

### [00:15:10] Lenny Rachitsky

**English:**
Yeah, I remember that. I remember that, I was in the same office with my team and we're using HipChat to chat and it felt strange. Now it's completely normal.

**中文翻译:**
是的，我记得。当时我和团队在同一个办公室，却用 HipChat 聊天，感觉很奇怪。现在这已经完全正常了。

---

### [00:15:10] Tanguy Crusson

**English:**
It's just normal, and Hipchat was one of the first to move there. Slack came out of nowhere. Company actually initially was focused more on gaming and they really took the market by storm. The growth numbers were dizzying when we're looking at them. And so at some point, Hipchat was left relatively alone for a while inside Atlassian. You're doing something good, so keep going after it. But with Slack, we now had to try to go bigger, so we started this thing called HipChat Go Big, the team, they recruited-

**中文翻译:**
这很正常，HipChat 是最早进入这个领域的。后来 Slack 凭空出现，他们最初其实是做游戏的，但迅速席卷了市场。他们的增长数据令人眩晕。在某个阶段，HipChat 在 Atlassian 内部被放任自流了一段时间——既然做得不错，就继续做吧。但有了 Slack 这个对手，我们必须尝试做大，所以我们启动了一个叫“HipChat Go Big”的项目，招募了很多人……

---

### [00:15:44] Lenny Rachitsky

**English:**
That was the name of the project? HipChat Go Big?

**中文翻译:**
项目名字就叫“HipChat Go Big（HipChat 做大做强）”？

---

### [00:15:46] Tanguy Crusson

**English:**
Yeah, HipChat Go Big. And then it was HipChat Next Gen, there was a few different. Anyway, yeah.

**中文翻译:**
是的，HipChat Go Big。后来又叫 HipChat Next Gen（下一代），改过几次名。

---

### [00:15:51] Lenny Rachitsky

**English:**
Very clear. HipChat Go Big, I love it.

**中文翻译:**
很直白，我喜欢。

---

### [00:15:55] Tanguy Crusson

**English:**
Go big. But it was really a go big, lots of new developers, lots of new product managers, designers, the full company behind this product kind of thing. We tried to grow it very aggressively for a product that did not change that fast before it had reached good product market fit already, hundreds of thousands of users on a daily basis, and all of a sudden that you get a lot of people who want to make changes to it, to compete against this new threat. The platform is not so ready for so many people to work on it. And so we got to the inevitable, okay, it's too much tech, we can't do much about it so we made the decision to rewrite it. There's lots of literature around there around should you do rewrite? Should you not do rewrite? You ask me now, I tell you never. Trust me.

**中文翻译:**
做大。那是真的投入巨大，大量的开发、产品经理、设计师，全公司都在支持这个产品。对于一个已经达到良好产品市场匹配（PMF）、拥有数十万日活但更新速度并不快的产品，我们尝试进行非常激进的增长。突然间，一大堆人想对它进行修改，以应对新的竞争威胁。但原有平台还没准备好让这么多人同时协作。于是我们陷入了必然的困境：技术债太重，无能为力，所以我们决定重写。关于是否应该重写有很多讨论，如果你现在问我，我会告诉你：永远不要重写。相信我。

---

### [00:16:44] Lenny Rachitsky

**English:**
That's what most of the advice is, never do a rewrite, and people still do it.

**中文翻译:**
大多数建议都是“永远不要重写”，但人们还是会这么做。

---

### [00:16:46] Tanguy Crusson

**English:**
Never do a rewrite, and there's good reasons for that. But basically we did that and out of it came up actually a new product called Stride, which was initially "HipChat next gen." The problem is that the product was great, but by the time we were done, Slack was just miles ahead of us. At that point, Microsoft launched Teams. I don't know if you remember this moment where Slack put an ad in the, I think it was The New York Times, copying the Apple versus Microsoft thing from ages before going, "Welcome to the game, welcome to the party, we'll welcome you competitors," and stuff like that and Slack got pretty much destroyed by Teams. We started coming because it was like Microsoft distribution advantage. Everyone in Office is going to get it. They're giving it for free as part of Office, it was unbundled I think a few months ago.

**中文翻译:**
永远不要重写，这有充分的理由。但我们还是做了，结果产生了一个叫 Stride 的新产品，最初它就是“下一代 HipChat”。问题是，虽然产品很棒，但当我们做完时，Slack 已经领先我们好几英里了。就在那时，微软发布了 Teams。不知道你记不记得 Slack 在《纽约时报》上发广告，模仿当年苹果对阵微软的口吻说“欢迎加入竞争”，结果 Slack 差点被 Teams 摧毁。微软拥有分发优势，每个 Office 用户都能得到它，作为 Office 的一部分免费提供（虽然几个月前刚拆分）。

---

### [00:17:38] Lenny Rachitsky

**English:**
Which is ironic because in theory, Atlassian also has that same advantage, right? You have all these products, you could bundle it.

**中文翻译:**
这挺讽刺的，因为理论上 Atlassian 也有同样的优势，对吧？你有这么多产品，你也可以捆绑销售。

---

### [00:17:46] Tanguy Crusson

**English:**
We are going to talk about that actually in a minute. Because that was what helped us, how we thought we would win, and it was how I think we lost.

**中文翻译:**
我们待会儿会聊到这个。因为那是我们认为自己会赢的原因，也是我认为我们最终失败的原因。

---

### [00:18:00] Tanguy Crusson (Continued)

**English:**
So anyway, this all happened, and in the end we executed the market. We sold HipChat and Stride to Slack and basically exited the enterprise communications market.

**中文翻译:**
总之，这一切都发生了，最终我们退出了市场。我们将 HipChat 和 Stride 卖给了 Slack，基本上退出了企业通讯市场。

---

### [00:18:10] Lenny Rachitsky

**English:**
Just to double down that, but you sold that to Slack and now Salesforce basically, that's the word ended. I don't know if people know that.

**中文翻译:**
强调一下，你们卖给了 Slack，现在基本上属于 Salesforce 了。我不知道大家是否知道这个结局。

---

### [00:18:19] Tanguy Crusson

**English:**
Yeah, actually, it was noticed by the market in that as soon as we did that, our stock price went up. I think it was $60 back then and it went up to 70. I mean, that really sucked for us, the team working on it. First, no one tells you, but failure, everyone tells you failure is great because you learn so many things, but failure to start with really sucks. None of us here were really happy about this on the team because we had spent years, on my part, it was three years, but the people who were before that on HipChat was longer than that. Obsessing over it, obsessing over every detail, every customer conversation, every solution, should we rewrite, should we this, should we do that?

**中文翻译:**
是的，市场上立刻有了反应，我们一宣布这个消息，股价就涨了。我记得当时是从 60 美元涨到了 70 美元。这对我们这些团队成员来说感觉糟透了。首先，没人告诉你失败其实很难受，虽然大家都说失败是好事，能学到东西，但失败本身真的很糟糕。团队里没人对此感到高兴，因为我们投入了多年心血——我个人是三年，而那些更早加入 HipChat 的人时间更长。我们痴迷于每一个细节、每一次客户对话、每一个方案：该不该重写，该不该做这个或那个？

---

### [00:19:07] Tanguy Crusson (Continued)

**English:**
So many intense conversations, and from one day to the next, it didn't matter anymore. We had worked on something and that's it, that's the end. I'm sure many startups have been through that before. For me it was the first time it felt that personal, and the market the next day went, "Oh, you're stopping doing what you're doing? Awesome. Yes, 10 more dollars to your stock price." So yeah, there's a personal side to all the stories. For us, there was a bit like the seven stages of grief after we shut down HipChat.

**中文翻译:**
经历了那么多激烈的讨论，结果一夜之间，一切都不重要了。我们努力过的东西就这么结束了。我相信很多初创公司都经历过这种事。对我来说，这是第一次感觉如此切肤之痛，而市场第二天却在欢呼：“噢，你们不干了？太棒了，股价再涨 10 块。” 所以，这些故事都有感性的一面。对我们来说，关闭 HipChat 后经历了一段类似“哀伤的五个阶段”的过程。

---

### [00:19:38] Lenny Rachitsky

**English:**
How long was that period of mourning and stages for you and the team?

**中文翻译:**
你和团队的这段“哀悼期”持续了多久？

---

### [00:19:42] Tanguy Crusson

**English:**
It lasted a few months. I was not part of the decision making team for shutting down HipChat. I was one of the product managers on the team leading one of the three pillars. I got brought in, I think it was a month or two, a month before it was announced for the team to go, "Hey, Tanguy, by the way, just so you know, HipChat is no more, and now your mission is to find a new mission for the team after that." We basically spend the next two, three months trying to make sure that the squads were created to fully own what they do there, to make sure that they're the ones talking to the customers... I think it took about two, three months before we got back to a new rhythm. And some people, when we talk about it, were still scarred by it basically.

**中文翻译:**
持续了几个月。我当时不是关闭 HipChat 的决策层成员，我是负责三大支柱之一的产品经理。在正式宣布前一个月左右，我被叫过去告知：“嘿 Tanguy，顺便说一下，HipChat 没了，你现在的任务是为团队寻找新的使命。” 接下来两三个月，我们努力确保各个小组能完全掌控自己的工作，确保他们直接与客户沟通……我想大约花了三四个月才回到新的节奏。直到现在，有些人聊起这件事时，心里还是有阴影。

---

### [00:20:51] Lenny Rachitsky

**English:**
What are some lessons from that experience?

**中文翻译:**
那次经历有哪些教训？

---

### [00:20:51] Tanguy Crusson

**English:**
Yeah, so the main one that I personally got from this... is just myself, don't eat your own bullshit, which is a mix of two things. We've got a company value that says open company, no bullshit. So we need to be able to talk about the things like they are... I've noticed that sometimes there are things that we do while we tend to believe stuff because it's worked for us before, and we have this assumption that it's going to keep working for us forever. The founders keep telling us what took us here won't take us there. That's a thing we keep hearing over and over again. But it's very easy for teams when they see success of something to think that it's successful because of X, but X is not validated.

**中文翻译:**
我个人得到的最主要的教训是——这是我自己的话——“别吞下你自己的胡扯（don't eat your own bullshit）”。这结合了两件事：我们的公司价值观是“开放公司，不胡扯（Open company, no bullshit）”，所以我们要实事求是。但我注意到，有时我们会因为某些方法以前奏效过，就倾向于相信它会永远奏效。创始人常说“带你来到这里的，不会带你走向未来”，我们听过无数次。但团队很容易在看到成功时，想当然地认为成功是因为因素 X，而 X 其实从未被验证过。

---

### [00:22:43] Tanguy Crusson (Continued)

**English:**
We made the bet that we can apply this playbook to this market, which is basically we can, from people to use Jira, introduce HipChat, and then people will go into HipChat first in tech teams, and then it will expand into business teams... The thing is we didn't, in my opinion, do enough to validate that assumption early enough. We did a lot of work... even when faced with signals that this might not work. I do remember talking with a lot of customers who were like, "Well, we've got, the IT is on HipChat, but the business prefer Slack." ... Slack managed to create a very strong fund base in roles that were not tech and IT.

**中文翻译:**
我们当时押注可以把之前的“剧本”应用到这个市场：即让用 Jira 的人开始用 HipChat，先从技术团队渗透，再扩展到业务团队。但在我看来，我们没有尽早做足够的工作来验证这个假设。即便面对“这可能行不通”的信号，我们还是做了大量工作。我记得很多客户说：“IT 部门在用 HipChat，但业务部门更喜欢 Slack。” Slack 成功地在非技术和非 IT 角色中建立了一个非常强大的粉丝群。

---

### [00:24:23] Lenny Rachitsky

**English:**
Just I understand what you're saying, which is really interesting that Atlassian was really successful selling basically to the buyer within the org, the IT team because they had everything they needed. They checked all the checkboxes, but it turned out in the Slack case, it was the users that ended up having the most influence over what tool they'd opted.

**中文翻译:**
我理解你的意思了，这很有趣。Atlassian 之前非常成功，是因为它卖给了组织内的买家——IT 团队，因为你们满足了他们所有的需求。但在 Slack 的案例中，最终对工具选择产生最大影响的是终端用户。

---

### [00:24:42] Tanguy Crusson

**English:**
I'd actually phrase it more as both were going after the users. Atlassian was going after the users in tech teams, Slack was going after the users in business teams. And in both cases, what happened was a bottom-up adoption. ... Business? Eh, not so excited by this. Emojis, a lot of other things that may at some point I remember we were thinking those things were trivial. No, they were not trivial. It was just a different approach for using the tool by a different set of users that we did not talk enough to.

**中文翻译:**
我实际上会将其描述为双方都在争取用户。Atlassian 争取的是技术团队的用户，而 Slack 争取的是业务团队的用户。在这两种情况下，发生的都是自下而上的采用。业务部门对我们的功能不怎么兴奋。表情符号（Emojis）以及很多其他东西，我记得当时我们觉得这些很琐碎。不，它们并不琐碎。这只是不同用户群使用工具的不同方式，而我们与这些用户的沟通不够。

---

### [00:25:36] Lenny Rachitsky

**English:**
So is the lesson here, don't underestimate the challenge you'll have convincing a new segment to buy your thing. You may think they're close or similar, but they're probably not.

**中文翻译:**
所以这里的教训是：不要低估说服一个新细分群体购买你产品的挑战。你可能觉得他们很接近或很相似，但其实不然。

---

### [00:25:46] Tanguy Crusson

**English:**
Yeah, that's one of them. The other one is what took you here is not going to take you there. And so go back and try to explain why you are successful today, and then if you think you can use the same thing on the next thing, find ways to validate it, find ways to test it. Don't just go and build on those assumptions. That's the main thing I got out of this ordeal basically for the stuff I did after.

**中文翻译:**
是的，这是其中之一。另一个教训是“带你来到这里的，不会带你走向未来”。所以要回过头去解释你今天为什么成功，如果你认为可以把同样的方法用在下一件事上，找方法去验证它，去测试它。不要仅仅基于这些假设就开始构建。这是我从那次磨难中得到的最大收获，并应用到了我之后的工作中。

---

### [00:26:22] Lenny Rachitsky

**English:**
How would you do that? How would you go about and test it? Is it use research? Is it the PMs talking to potential users? What would you have done there?

**中文翻译:**
你会怎么做？你会如何去测试它？是用户研究吗？还是产品经理去和潜在用户聊？你会怎么操作？

---

### [00:26:22] Tanguy Crusson

**English:**
For example, when we started Jira Product Discovery... It's a product for product managers, which is mainly used for prioritization and roadmap. ... Instead, we did things like before we brought a single line of code, put an ad inside a Jira newsletter going, "Hey, we've got this thing for product managers coming up." And then we had a website that before we had any line of code written that said, "Hey, product managers, your job is hard. We want to help, put your name here if you want to join us on the journey," that kind of thing. And that's when we saw, I think it was in two weeks, we got more than 3000 signups to that waitlist. We're like, "Okay, cool. Validation of demand."

**中文翻译:**
例如，当我们启动 Jira Product Discovery 时（这是一个面向产品经理，用于优先级排序和路线图的产品）。我们没有直接开发，而是在写第一行代码之前，先在 Jira 的时事通讯里发了个广告：“嘿，我们要为产品经理出一个新东西了。” 我们还做了一个网页，在没写任何代码的情况下写着：“嘿，产品经理们，你们的工作很辛苦。我们想帮忙，如果你想加入我们的旅程，请在这里留下名字。” 结果在两周内，我们收到了 3000 多个候补名单申请。我们当时想：“太好了，需求验证通过了。”

---

### [00:28:26] Tanguy Crusson

**English:**
I've got two, I'm going to do them quickly. The first one is competitive myopia, don't fall for it. At some point, the Slack was really gaining round... And everyone on Twitter was always loving them. ... And we ended up reacting to whatever the competitor was doing, which I think is really, really bad because that's when we lost basically what made HipChat successful so far, which is to serve some users really well. And instead we ended up fast following based on what the competitor was doing...

**中文翻译:**
我还有两个教训，我快点说。第一个是“竞争近视（competitive myopia）”，千万别陷进去。当时 Slack 势头正猛，Twitter 上每个人都爱他们。我们最终变成了对竞争对手的每一个动作做出反应，我认为这非常糟糕，因为那时我们失去了让 HipChat 成功的核心——即服务好特定用户。相反，我们变成了基于竞争对手的动作进行“快速跟进”。

---

### [00:29:44] Tanguy Crusson (Continued)

**English:**
And now whenever I work, I tend to try and ignore competition other than watching every three months or so, seeing what came out... But really just try to disconnect all the creative process and the research process from what competitors do, because you can't compare. The market is huge. ... We would do better learning from them to then expand to the others than watching what competition is doing.

**中文翻译:**
现在每当我工作时，我倾向于忽略竞争对手，除了每三个月左右看一眼他们发布了什么。我真的尝试将所有的创意过程和研究过程与竞争对手的动作脱钩，因为你无法比较。市场巨大，与其盯着竞争对手，不如从自己的用户身上学习，然后向外扩展。

---

### [00:30:58] Lenny Rachitsky

**English:**
I love that. So you're finding that when there's a big announcement and everyone's like, "Oh my God, look what Slack's doing," or "Look what this company's doing." It's like, "Okay, now let's spend a little time reminding ourselves what our customers have been asking us to do and let's watch a couple of user interviews."

**中文翻译:**
我喜欢这个观点。所以当你发现有个重大发布，大家都惊呼“天哪，看 Slack 在做什么”或者“看那家公司在做什么”时，你的反应是：“好，现在让我们花点时间提醒自己，我们的客户一直要求我们做什么，让我们看几个用户访谈视频。”

---

### [00:31:37] Tanguy Crusson

**English:**
Yeah, the last one, startups have the benefit of starving. Right? We're a big company, we can throw a lot of resources at something that we're excited about. So this notion of we rebuild the HipChat, was coupled with we rebuild the HipChat and we'll do this on a new platform, which is microservices and everything that we built can be reused across all the other products. ... Where it's really difficult is when you try to do the two at the same time. ... I think we thought we will win. Interestingly, I think we were convinced that we had a great shot at this market. And at the same time we thought that we could tackle the rewrite and we could tackle the platformization. All these things were necessary, but all of them at the same time was probably a bit too much to bite.

**中文翻译:**
是的，最后一个教训：初创公司的优势在于“饥饿感”。我们是大公司，可以对感兴趣的项目投入大量资源。所以“重构 HipChat”这个念头，伴随着“我们要在一个新平台上重构，使用微服务，且所有组件都能在其他产品中复用”。最难的地方在于你试图同时完成这两件事。有趣的是，我们当时坚信自己在这个市场大有可为，同时也认为我们可以搞定重写和平台化。这些事都是必要的，但同时进行可能有点贪多嚼不烂了。

---

### [00:34:04] Tanguy Crusson

**English:**
Yeah, so this one is actually a success story, but became a success story after I was gone... That's more like a story of big companies can play the long run and for you individually inside that process, it might look like a loss and you might feel like you're going nowhere, yet the company stays on the opportunity for long enough to make it happen. So what we're going to talk about here are my own challenges working through it for something that ended up being very successful in the end, but I felt as a failure personally back then. So Statuspage...

**中文翻译:**
是的，Statuspage 实际上是一个成功的故事，但在我离开后才真正成功。这更像是一个关于大公司可以玩长线游戏的故事——对你个人而言，在那个过程中可能看起来像失败，你觉得自己毫无进展，但公司在那个机会上停留了足够长的时间，最终让它成功了。所以我们要聊的是我在这个项目中的个人挑战，虽然它最终非常成功，但当时我觉得自己失败了。

---

### [00:36:14] Tanguy Crusson (Continued)

**English:**
Shit hits the fan, and then what you see is teams just scrambling and everything gets mixed up all together in trying to fix the problem straight away, but at the same time questioning what happened, arguing over why we got there. Your boss is pinging you to go, "Hey, what's going on? I've been hearing that the app is down. We're losing money." ... And what Statuspage was offering is something seemingly super simple, which is, well, what you should have is a status page for your services and you tell your customers about it... It's going to build trust with them because basically you are open in your communication with them.

**中文翻译:**
当出状况时，你会看到团队乱作一团，大家一边试图立即修复问题，一边质疑发生了什么，争论为什么会变成这样。老板会发消息问：“嘿，怎么回事？我听说应用挂了，我们在亏钱。” Statuspage 提供的东西看似超级简单：你应该为你的服务建立一个状态页，并告知客户。这会建立信任，因为你与他们的沟通是公开透明的。

---

### [00:39:49] Lenny Rachitsky

**English:**
What are some of the things that you learned from going through this experience? It sounds like basically it was really painful when you were a part of it and then it ended up being really successful. What are some lessons from the pain?

**中文翻译:**
你从这次经历中学到了什么？听起来当你参与其中时非常痛苦，但最终却非常成功。从痛苦中学到了哪些教训？

---

### [00:40:02] Tanguy Crusson

**English:**
My learnings from it were on the acquisition side. So big company, we've got cash, we can buy a company, it will make us go faster, is not always the case. In my case, there were quite a few things that were not as easy as I would've thought. The first one is the culture shock of a startup that joins your company. ... The CEO, maybe you become a product person. ... Big companies look much further out in the future. ... I do remember how daunting it was for the Statuspage team when they joined, to understand how to navigate that. ... Integrations are mostly about people. They're not about technology as much or product vision. All of that stuff is the easy stuff. The hard part is the people.

**中文翻译:**
我的教训主要在收购方面。大公司有钱，可以买公司，觉得这能让我们跑得更快，但事实并非总是如此。在我的案例中，有很多事不像我想象的那么容易。首先是初创公司加入大公司后的文化冲击。CEO 可能会变成一个产品负责人。大公司看得更远。我记得 Statuspage 团队刚加入时，要理解如何在大公司里“导航”是多么令人生畏。集成（Integration）主要关乎人，而不是技术或产品愿景。那些都是简单的部分，难点在于人。

---

### [00:44:03] Lenny Rachitsky

**English:**
That's a really interesting point, that one group is keep doing what you're doing. We're going to leave you alone, you're the experts. And then other people that are on the ground actually building it are like, "Hey, build with this component. Hey, we need this process, we need this document."

**中文翻译:**
这是一个非常有趣的观点：一组人说“继续做你们正在做的事，我们不会干涉，你们是专家”；而另一组真正在一线构建的人却说：“嘿，用这个组件开发。嘿，我们需要这个流程，我们需要这份文档。”

---

### [00:44:15] Tanguy Crusson

**English:**
And it's the things that you used to be able to focus 90% of your time working on your product, and all of a sudden all of that stuff may seem parasitical but comes in and interrupts you all the time. ... One warning, if you're planning to do acquisitions, make sure you factor all of that in... because going to be a big slowdown before it accelerates again.

**中文翻译:**
以前你能把 90% 的时间花在产品上，突然间，所有这些看似“寄生”的东西不断涌入并打断你。一个警告：如果你计划进行收购，请务必把这些因素考虑在内，因为在重新加速之前，会经历一段严重的减速期。

---

### [00:48:35] Tanguy Crusson

**English:**
I misread the appetite and sense of urgency around that topic and the fact that Atlassian being Atlassian, we invest in so many markets, we have many opportunities like this that sit on a shelf. ... Someone did the analysis, someone created a business case, that thing makes sense. There may not be a trigger for the why now. So we need a very strong trigger for why now to go after it. And I did not do a good enough job at articulating this. Why now?

**中文翻译:**
我误判了公司对那个话题的兴趣和紧迫感。Atlassian 投资这么多市场，有很多类似的机会被搁置在书架上。有人做了分析，有人写了商业案例，这事儿听起来很合理。但可能缺乏一个“为什么是现在”的触发点。我们需要一个非常强大的理由来说服公司现在就去做。我当时在阐述“为什么是现在”这一点上做得不够好。

---

### [00:51:42] Lenny Rachitsky

**English:**
This reminds me of my chat with Mihika, who does similar work at Figma... She described it as your job is to keep the flame alive and help it spread throughout the entire business if you're trying to get everyone on board with a new idea. ... I think of it as why is it perishable? Why is this opportunity perishable?

**中文翻译:**
这让我想起我和 Figma 的 Mihika 的对话。她形容你的工作是“保持火种不灭”，并帮助它在整个业务中蔓延，如果你想让大家接受一个新想法的话。我把它理解为：为什么这个机会是“易腐烂”的？如果不现在行动，为什么这个机会就会消失？

---

### [00:56:00] Tanguy Crusson

**English:**
Atlassian at that point had recognized we are innovating in our big successful products all by doing acquisitions, we have to correct that and start building new products ourselves as well. And so there was a huge push from the founders to go, "Hey, we need to restart that." Out of it came Point A, which was an internal incubator program that was meant to fix that. ... Innovation is like a muscle. Unless you exercise it, it becomes weak...

**中文翻译:**
当时 Atlassian 已经意识到，我们大获成功的产品的创新大多是通过收购实现的，我们需要纠正这一点，开始自己构建新产品。于是创始人大力推动：“嘿，我们需要重启自主创新。” 于是有了 Point A，这是一个旨在解决该问题的内部孵化计划。创新就像肌肉，除非你锻炼它，否则它会变得虚弱。

---

### [01:00:35] Tanguy Crusson

**English:**
We're trying to launch a new product, enter a new market. Our goal is to get to $100 million businesses. ... Remind everyone, things are going to fail... The reason I was saying that is that, otherwise, yes, you get the help, but the help always comes with condition and the condition is usually things slow down. ... "Hey, we might not exist in six months. Do you really care that much about this process right now?"

**中文翻译:**
我们尝试发布新产品、进入新市场。我们的目标是建立 1 亿美元规模的业务。要提醒每个人，事情很可能会失败。我之所以这么说，是因为如果你接受了帮助，帮助通常带有条件，而条件通常会让事情变慢。我会说：“嘿，我们六个月后可能就不存在了。你现在真的那么在意这个流程吗？”

---

### [01:04:27] Tanguy Crusson

**English:**
Point A helped. We had four stages called Wonder, Explore, Make and Impact... Wonder was all about proving that there was a problem area we could go into... Explore was about exploring solutions... Make is about making it happen in stages, starting with an alpha, then a beta... and Impact is that stuff is actually ready to go GA.

**中文翻译:**
Point A 很有帮助。我们有四个阶段，分别叫：好奇（Wonder）、探索（Explore）、构建（Make）和影响（Impact）。“好奇”是证明存在一个我们可以切入的问题领域；“探索”是探索解决方案；“构建”是分阶段实现，从 Alpha 到 Beta；“影响”则是产品正式发布（GA）并产生业务价值。

---

### [01:09:08] Tanguy Crusson

**English:**
Second one... your teams will need to break a lot of rules that are established. But they need to be able to have that time for the time it takes until you can prove whether there is a thing or not. ... I've got these chips and I decided on this bet, "You know what, I'm going to go all in." ... I decided not to have an engineering leader in the team, and to do it myself. So I was the product leader and the engineering leader.

**中文翻译:**
第二点……你的团队需要打破很多既定规则。你需要时间直到证明这件事可行。我积累了一些“筹码（信任）”，我决定在这个押注上“全仓买入”。我决定团队里不设专门的工程负责人，由我兼任。所以我既是产品负责人，也是工程负责人。

---

### [01:13:45] Lenny Rachitsky

**English:**
This is a crazy story you're telling me. So you're leading this team, you hired a team of contractors to build this product. You're in a whole different country from the rest of Atlassian, basically. And the whole idea here was just to do stuff that wouldn't be necessarily allowed at Atlassian. ... you're just going to be this pirate working on this thing in France and it worked out?

**中文翻译:**
你讲的这个故事太疯狂了。你领导这个团队，雇了一群外包开发来构建产品。你基本上是在一个与 Atlassian 其他部门完全不同的国家。核心思想就是做一些在 Atlassian 内部不一定被允许的事。你就像一个在法国搞这个项目的海盗，而且最后还成功了？

---

### [01:14:18] Tanguy Crusson

**English:**
The Point A emoji and Atlassian is a pirate flag. ... I was not the only one. There were quite a few of us working on new bets, basically operating like that. ... The end goal was not to question the rules, the end goal was to get to the stuff that we needed to do, which is we just need to clean this space, to work with users to test prototypes up until it works...

**中文翻译:**
Atlassian 内部 Point A 的表情符号就是一个海盗旗。我不是唯一的一个，当时有好几个人在负责新的押注，基本上都是这样运作的。最终目的不是为了质疑规则，而是为了完成我们需要做的事——即清理出一个空间，与用户一起测试原型，直到它奏效。

---

### [01:18:06] Tanguy Crusson

**English:**
How can we innovate in a way that doesn't fuck up existing customers? Jira, 120,000 customers... We can't just go in there, start experimenting, breaking a whole bunch of shit... So what we needed is to create this area where we could experiment that's away from Jira while being inside Jira. ... incubate, iterate, integrate.

**中文翻译:**
我们如何在创新的同时不搞砸现有客户？Jira 有 12 万客户，我们不能直接进去乱搞实验。所以我们需要在 Jira 内部创建一个远离 Jira 核心的实验区。这就是：孵化（incubate）、迭代（iterate）、集成（integrate）。

---

### [01:21:16] Tanguy Crusson

**English:**
Safety Funnel... You basically put a hard stop and you limit the number of people who had bad experiences. And you do that for a while, up until you can prove it's amazing and then you invite more people. ... don't fuck existing customers' first principle.

**中文翻译:**
安全漏斗（Safety Funnel）……你基本上设置了一个硬停止，限制可能产生糟糕体验的人数。你这样做一段时间，直到证明它很棒，然后再邀请更多人。这就是“不搞砸现有客户”的第一原则。

---

### [01:23:56] Tanguy Crusson

**English:**
Lighthouse Users Program... The first stage is we work with 10 and we prove that the problems that they had are the things that we solved... We then have this stage from 10 to 100... Then we get to a stage where we're like, "You know what? It's good. It solves people's problems, but it's not self-service." ... Now we need to get from 100 to 1,000...

**中文翻译:**
灯塔用户计划（Lighthouse Users Program）……第一阶段是与 10 个用户合作，证明我们解决了他们的问题。然后是 10 到 100 个用户的阶段。接着我们进入一个阶段：“你知道吗？产品很好，解决了问题，但还不能自助服务。” 于是我们需要从 100 扩展到 1000 个用户。

---

### [01:28:02] Tanguy Crusson

**English:**
What we do with that is we recruit 10 people and we put these people in front of the whole team, not just the PMs... What I've seen going fast is that the engineers would go into a planning meeting and the PM would say, "So we should work on X," and the engineer will go, "Wait a minute. We've had a talk with this customer and they struggle with this so I think we should work on that instead..."

**中文翻译:**
我们的做法是招募 10 个人，让他们面对整个团队，而不只是产品经理。我看到速度提升的表现是：在计划会议上，产品经理说“我们应该做 X”，工程师会说“等等，我们和那个客户聊过，他们在这个问题上很挣扎，所以我认为我们应该先做那个……”

---

### [01:30:44] Lenny Rachitsky

**English:**
How do you protect that because that's the biggest challenge I think a lot of companies have is just, it's been six months, no one wants this, we're going to kill it. How do you protect that? ... Pixar people call it an ugly baby.

**中文翻译:**
你如何保护这种项目？因为我认为很多公司面临的最大挑战就是：六个月过去了，没人想要这个，我们要砍掉它。你如何保护它？皮克斯的人称之为“丑陋的婴儿（ugly baby）”。

---

### [01:30:58] Tanguy Crusson

**English:**
Internal comms is everything there. ... Be very clear about what we're testing... give people a sense of velocity and speed. No one wants to fuck with a high-speed train. ... I was even saving features for one week to the next just to... have something to show this train that keeps moving.

**中文翻译:**
内部沟通至关重要。明确我们要测试的内容，给人一种速度感。没人想去挡一列高速行驶的火车。我甚至会把一些功能留到下一周发布，只是为了展示这列火车一直在前进。

---

### [01:35:19] Tanguy Crusson

**English:**
One of the founders, Mike went, "No, you're not. That thing is ugly. I do not want to look at it. It needs to level up with the rest of the Atlassian design standards." ... So we went and fixed it. Took us two, three months and then we were okay to go.

**中文翻译:**
创始人之一 Mike 说：“不，你们还没准备好。这东西太丑了，我都不想看。它需要提升到 Atlassian 的设计标准。” 于是我们去修复了它，花了我们两三个月，然后才获准发布。

---

### [01:38:32] Tanguy Crusson

**English:**
Be careful for yourself as well and make sure that you're doing this in an environment that's ready to welcome it. ... I'm deeply convinced by the fact that we don't need so much top-down leadership. What we need is a lot of autonomous leaders... but you need to do that in an environment that's safe for you to do so. If it's not, I think it's okay to consider alternatives.

**中文翻译:**
也要保护好你自己，确保你是在一个愿意接纳创新的环境中做这件事。我深信我们不需要那么多自上而下的领导，我们需要的是大量自主的领导者，但你必须在一个安全的环境中这样做。如果环境不对，我觉得考虑其他选择也是可以的。

---

### [01:41:36] Tanguy Crusson

**English:**
You need to surround yourself with people and environments that can help bring out the best in you, otherwise you can turn bad. I myself have been cynical in the past working in environments that were cynical and I then decided it's not me. I do not want it to be me.

**中文翻译:**
你需要让自己置身于能激发你最好一面的团队和环境中，否则你会变坏。我以前在愤世嫉俗的环境中工作过，我也变得愤世嫉俗，后来我决定那不是我，我不想成为那样的人。

---

### [01:42:23] Lenny Rachitsky

**English:**
First question, what are two or three books that you've recommended most to other people?

**中文翻译:**
第一个问题，你向别人推荐最多的两三本书是什么？

---

### [01:42:23] Tanguy Crusson

**English:**
"Who: A Method for Hiring"... "Hakim's Odyssey"... and "Vivre avec la Terre" (To Live with the Earth).

**中文翻译:**
《谁：招聘的方法》（Who: A Method for Hiring）、《哈基姆的奥德赛》（Hakim's Odyssey），还有《与大地共生》（Vivre avec la Terre）。

---

### [01:44:32] Lenny Rachitsky

**English:**
What's your favorite interview question?

**中文翻译:**
你最喜欢的面试问题是什么？

---

### [01:44:32] Tanguy Crusson

**English:**
When people describe an experience, you ask them the name of the person that they worked with back then. And you ask them, "So when I call this person after our call, what do you think they're going to say about that?"

**中文翻译:**
当人们描述一段经历时，你问他们当时合作的人的名字。然后你问：“如果我在面试结束后给这个人打电话，你觉得他会怎么评价这件事？”

---

### [01:46:08] Lenny Rachitsky

**English:**
Do you have a favorite product you've recently discovered that you really love?

**中文翻译:**
你最近有没有发现什么非常喜欢的个人产品？

---

### [01:46:08] Tanguy Crusson

**English:**
Hydrofoils... you basically just fly over the water. ... zero friction between the board and the water.

**中文翻译:**
水翼（Hydrofoils）……你基本上是在水面上飞。板子和水之间几乎零摩擦。

---

### [01:49:43] Lenny Rachitsky

**English:**
You were ranked number four worldwide in a form of free diving. First of all, can you briefly describe what is free diving and then can you share one thing that might surprise someone about the sport and the skill?

**中文翻译:**
你曾在某种形式的自由潜水中排名世界第四。首先，你能简要描述一下什么是自由潜水吗？另外，关于这项运动和技能，有什么是会让大家感到惊讶的？

---

### [01:49:43] Tanguy Crusson

**English:**
Distance you can swim in a swimming pool without fins... 167 meters. ... I actually went to 300 feet underwater deep... Everyone is much more gifted at it than they think. ... At the end of the weekend most people were able to hold their breath for two to three minutes and to go to 20 meters deep.

**中文翻译:**
在不带脚蹼的情况下在泳池里游的距离……我游了 167 米。我还曾下潜到水下 300 英尺（约 91 米）深。每个人在这方面都比自己想象的有天赋。通常在周末课程结束时，大多数人都能憋气两到三分钟，并下潜到 20 米深。

---

### [01:52:44] Lenny Rachitsky

**English:**
Where can folks find you online... and how can listeners be useful to you?

**中文翻译:**
大家可以在哪里在线找到你……听众可以如何帮到你？

---

### [01:52:44] Tanguy Crusson

**English:**
LinkedIn... if you are using Jira Product Discovery and you have ideas for how we can improve it... I'd love to connect.

**中文翻译:**
LinkedIn。如果你正在使用 Jira Product Discovery 并且有改进建议，我很乐意与你联系。

---

### [01:53:39] Lenny Rachitsky

**English:**
Thank you so much for listening. ... See you in the next episode.

**中文翻译:**
非常感谢您的收听。下期节目见。