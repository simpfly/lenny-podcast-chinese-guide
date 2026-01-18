# Jason Droege - 双语对照

# Lenny's Podcast: Jason Droege (CEO of Scale AI) - Bilingual Transcript

---

### (00:00:00) Lenny Rachitsky

**English:**
There's been a lot of talk these days about AI not delivering on the promise that we hear, especially at enterprises.

**中文翻译:**
最近有很多讨论都在说，AI 并没有兑现我们所听到的那些承诺，特别是在企业级应用方面。

---

### (00:00:06) Jason Droege

**English:**
These things take 6 to 12 months to get them truly robust enough where an important process can be automated. Like with any of these major tech revolutions, headlines tell one story and then on the ground, laying broadband means you need to dig up every single road in America to lay it. Someone's got to dig up the road or someone's got to run the undersea cable.

**中文翻译:**
这些东西需要 6 到 12 个月的时间才能变得足够健壮，从而实现重要流程的自动化。就像任何重大技术革命一样，头条新闻讲的是一个故事，而在实际落地时，铺设宽带意味着你需要挖开美国的每一条马路。总得有人去挖路，或者有人去铺设海底电缆。

---

### (00:00:26) Lenny Rachitsky

**English:**
Is there anything you think people don't truly grasp or understand about where AI models are going to be in the next two, three years?

**中文翻译:**
关于 AI 模型在未来两三年内的发展方向，你认为有什么是人们还没有真正领悟或理解的吗？

---

### (00:00:31) Jason Droege

**English:**
The general trend right now is going from models knowing things to models doing things. The next question becomes, what can it do for me? How does the agent make decisions for you?

**中文翻译:**
目前的总体趋势是，模型正在从“知道事情”转向“做事情”。接下来的问题就变成了：它能为我做什么？智能体（Agent）如何为你做决策？

---

### (00:00:39) Lenny Rachitsky

**English:**
Let's talk about Scale and this whole world of AI that you're in, you essentially pioneered data labeling, trading data, creating evals for labs.

**中文翻译:**
让我们聊聊 Scale 以及你所处的整个 AI 世界。你们基本上开创了数据标注、交易数据以及为实验室创建评估系统（Evals）的先河。

---

### (00:00:46) Jason Droege

**English:**
18 months ago, you would get a short story and it would say, "Is this short story better than this short story?" And now you're at a point where one task is building an entire website by one of the world's best web developers, or it is explaining some very nuanced topic on cancer to a model. These tasks now take hours of time and they require PhDs and professionals.

**中文翻译:**
18 个月前，你会拿到一个短篇故事，然后被问到：“这个故事比那个好吗？”而现在，一个任务可能是由世界上最顶尖的网页开发人员构建一个完整的网站，或者是向模型解释关于癌症的某些非常微妙的主题。这些任务现在需要花费数小时，并且需要博士和专业人士来完成。

---

### (00:01:07) Lenny Rachitsky

**English:**
I've talked to a bunch of people that have worked with you over the years, and I heard a lot about just how high of a bar you set for new businesses.

**中文翻译:**
这些年来我采访过很多曾与你共事的人，我听说你对新业务设定的标准非常高。

---

### (00:01:13) Jason Droege

**English:**
From an entrepreneurship standpoint, it truly is about what insight do I have? Why am I so lucky to have this insight? Why in a world of a million entrepreneurs who are thinking, who are smart, who are trying everything, why am I in the position where I likely have an insight that others do not?

**中文翻译:**
从创业的角度来看，核心在于：我拥有什么样的洞察？为什么我如此幸运能拥有这种洞察？在这样一个拥有数百万聪明、爱思考、勇于尝试各种事物的创业者的世界里，为什么我能处于一个可能拥有他人所不具备的洞察力的位置？

---

### (00:01:31) Lenny Rachitsky

**English:**
Today, my guest is Jason Droege. Jason is the new CEO of Scale AI. This is the first interview that he's done since taking over for Alex Wang after the Meta deal. Alex now leads the super intelligence team at Meta. Prior to Scale, Jason co-founded a company with Travis Kalanick. Before, he started Uber, worked at a couple startups. Most famously, Jason launched and led Uber Eats, which went from an idea that he and his team had to what is now a multi-billion dollar run rate business and one that basically saved Uber during the pandemic when nobody was taking rides. This interview is following a theme that I've been following through a bunch of interviews, which is the evolution of how AI models actually gets smarter. Along with scaling, compute and improving the actual model code, much of the improvements we're seeing in ChatGPT and Claude and every frontier AI model is these labs hiring experts to filling gaps in their knowledge and correcting their understanding of how things work, and basically showing them what good looks like in every domain that consumers are using models.

**中文翻译:**
今天的嘉宾是 Jason Droege。Jason 是 Scale AI 的新任 CEO。这是他在 Meta 交易后接替 Alex Wang 以来接受的首次采访。Alex 现在领导 Meta 的超级智能团队。在加入 Scale 之前，Jason 曾与 Travis Kalanick 共同创立了一家公司。在 Travis 创立 Uber 之前，Jason 曾在几家初创公司工作过。最著名的是，Jason 发起并领导了 Uber Eats，这个业务从他和团队的一个想法发展到了现在的百亿美元规模，并且在疫情期间没人打车的时候基本拯救了 Uber。这次采访延续了我最近在一系列采访中探讨的主题，即 AI 模型如何真正变得更聪明的演变过程。除了扩展计算规模和改进模型代码外，我们在 ChatGPT、Claude 和每个前沿 AI 模型中看到的许多改进，都源于这些实验室聘请专家来填补知识空白、纠正模型对事物运作方式的理解，并基本上在消费者使用模型的每个领域向模型展示“什么是优秀的标准”。

---

### (00:02:35) Lenny Rachitsky

**English:**
Scale was the pioneer in this space. They created the category, and in our conversation we talk about what is happening at Scale and just how this deal with Meta worked, what experts like doctors and software engineers are specifically doing to help models get smarter, how the whole market of data labeling and evals and data training has changed from when Scale entered the market to today, and also just how long will we need humans to keep helping AI get smarter. We also get into where Jason sees models going in the next few years because they have such a unique glimpse into the future. We also talk about a ton of really unique and really important product lessons from the course of Jason's career, including a bunch of advice on how to start a new business, both startups and within existing companies, and also a bunch of advice on hiring and leadership and so much more.

**中文翻译:**
Scale 是这个领域的先驱。他们创造了这个品类。在我们的对话中，我们谈到了 Scale 正在发生的事情，以及与 Meta 的这笔交易是如何运作的；像医生和软件工程师这样的专家具体在做什么来帮助模型变得更聪明；数据标注、评估和数据训练的整个市场从 Scale 进入市场之初到今天发生了怎样的变化；以及我们还需要人类帮助 AI 变得更聪明多久。我们还探讨了 Jason 认为未来几年模型的发展方向，因为他们对未来有着独特的洞察。我们还讨论了 Jason 职业生涯中大量独特且重要的产品经验，包括关于如何启动新业务（无论是初创公司还是现有公司内部）的建议，以及关于招聘、领导力等方面的建议。

---

### (00:03:21) Lenny Rachitsky

**English:**
A huge thank you to Allen Penn and Stephen Chau for suggesting topics for this conversation. If you enjoy this podcast, don't forget to subscribe and follow it in your favorite podcasting app or YouTube. It helps tremendously. And if you become an annual subscriber of my newsletter, you get a year free of 15 incredible products including Lovable, Replet, Bolt, n8n, Linear, Superhuman, Descript, Wispr Flow, Gamma, Perflexity, Warp, Granola, Magic Patterns, Raycast, ChatPRD, and Mobbin. Head on over to lennysnewsletter.com and click product pass. With that, I bring you Jason Droege.

**中文翻译:**
非常感谢 Allen Penn 和 Stephen Chau 为本次对话提供的选题建议。如果你喜欢这个播客，请不要忘记在常用的播客应用或 YouTube 上订阅和关注。这对我们帮助很大。如果你成为我时事通讯（Newsletter）的年度订阅者，你将免费获得 15 款不可思议的产品的一年使用权，包括 Lovable、Replit、Bolt、n8n、Linear、Superhuman、Descript、Wispr Flow、Gamma、Perplexity、Warp、Granola、Magic Patterns、Raycast、ChatPRD 和 Mobbin。请访问 lennysnewsletter.com 并点击“Product Pass”。下面，让我们欢迎 Jason Droege。

---

### (00:03:53) Lenny Rachitsky

**English:**
This episode is brought to you by Merge. Product leaders hate building integrations. They're messy, they're slow to build, they're a huge drain on your roadmap, and they're definitely not why you got into product in the first place. Lucky for you, Merge is obsessed with integrations. With a single API, B2B SaaS companies embed merge into their product and ship 220 plus customer facing integrations in weeks, not quarters. Think of Merge like plaid, but for everything B2B SaaS. Companies like Mistral AI, Ramp and Dorada use Merge to connect their customers as accounting, HR, ticketing, CRM, and file storage systems to power everything from automatic onboarding to AI-ready data pipelines. Even better, Merge now supports the secure deployment of connectors to AI agents with a new product so that you can safely power AI workflows with real customer data. If your product needs customer data from dozens of systems, Merge is the fastest, safest way to get it. Book and attend a meeting at merge.dev/lenny and they'll send you a $50 Amazon gift card. That's merge.dev/lenny.

**中文翻译:**
本集节目由 Merge 赞助。产品负责人讨厌构建集成。集成很乱，构建速度慢，会大量消耗你的路线图资源，而且绝对不是你最初进入产品领域的初衷。幸运的是，Merge 对集成非常痴迷。通过单一 API，B2B SaaS 公司可以将 Merge 嵌入到他们的产品中，并在几周内（而不是几个季度）交付 220 多个面向客户的集成。把 Merge 想象成 B2B SaaS 领域的 Plaid。像 Mistral AI、Ramp 和 Dorada 这样的公司使用 Merge 来连接客户的财务、人力资源、工单、CRM 和文件存储系统，以驱动从自动入职到 AI 就绪的数据管道等一切功能。更棒的是，Merge 现在通过新产品支持将连接器安全部署到 AI 智能体，这样你就可以安全地使用真实客户数据来驱动 AI 工作流。如果你的产品需要来自数十个系统的数据，Merge 是最快、最安全的方式。在 merge.dev/lenny 预约并参加会议，他们会送你一张 50 美元的亚马逊礼品卡。

---

### (00:04:59) Lenny Rachitsky

**English:**
This episode is brought to you by Figma, makers of Figma Make. When I was a PM at Airbnb, I still remember when Figma came out and how much it improved how we operated as a team. Suddenly, I could involve my whole team in the design process, give feedback on design concepts really quickly, and it just made the whole product development process so much more fun. But Figma never felt like it was for me. It was great for giving feedback and designs, but as a builder, I wanted to make stuff. That's why Figma built Figma Make. With just a few prompts, you can make any idea or design into a fully functional prototype or app that anyone can iterate on and validate with customers. Figma Make is a different kind of vibe coding tool. Because it's all in Figma, you can use your team's existing design building blocks, making it easy to create outputs that look good and feel real and are connected to how your team builds. Stop spending so much time telling people about your product vision and instead show it to them. Make code-backed prototypes and apps fast with Figma Make. Check it out at figma.com/lenny. Jason, thank you so much for being here and welcome to the podcast.

**中文翻译:**
本集节目由 Figma 赞助，他们是 Figma Make 的创造者。当我在 Airbnb 担任产品经理时，我还记得 Figma 问世的情景，以及它如何极大地改善了我们团队的运作方式。突然间，我可以让整个团队参与到设计过程中，快速对设计概念给出反馈，这让整个产品开发过程变得有趣得多。但 Figma 以前感觉并不完全是为我准备的。它在反馈和设计方面很棒，但作为一个构建者，我想亲手做出东西。这就是为什么 Figma 开发了 Figma Make。只需几个提示词，你就可以将任何想法或设计变成一个功能齐全的原型或应用，任何人都可以对其进行迭代并与客户进行验证。Figma Make 是一种不同风格的“氛围编程”工具。因为它完全集成在 Figma 中，你可以使用团队现有的设计组件，从而轻松创建出美观、真实且与团队构建方式相连的产出。别再花那么多时间向人们描述你的产品愿景了，直接展示给他们看。使用 Figma Make 快速制作由代码支持的原型和应用。请访问 figma.com/lenny 查看。Jason，非常感谢你能来，欢迎来到播客。

---

### (00:06:08) Jason Droege

**English:**
Yeah, thanks for having me. Excited to be here.

**中文翻译:**
好的，谢谢你的邀请。很高兴来到这里。

---

### (00:06:10) Lenny Rachitsky

**English:**
As I was researching your background and prepping for this podcast, I learned a really interesting fun fact about you that I don't think a lot of people know. So Travis Kalanick, he had a startup before Uber. It was called Scour. It was a peer-to-peer file sharing app, and then I think got shut down. You were his co-founder. This was the early part of your career. I'm guessing there are hours of stories we could talk about during this experience. So let me just ask you this one question. What's just a lesson that has stuck with you from that experience that you've taken with you to future places you've worked and built product at?

**中文翻译:**
在我研究你的背景并为这次播客做准备时，我发现了一个关于你的非常有趣的冷知识，我想很多人都不知道。Travis Kalanick 在创立 Uber 之前有一家初创公司，叫 Scour。那是一个点对点（P2P）文件共享应用，后来好像被关停了。你是他的联合创始人。那是你职业生涯的早期。我猜这段经历里有讲不完的故事。所以我只想问你一个问题：从那段经历中，有什么教训让你刻骨铭心，并带到了你后来工作和构建产品的地方？

---

### (00:06:44) Jason Droege

**English:**
I mean, there's so many lessons. I like to pick one. I think that the main lesson is that in business and in startups, everything's negotiable. I think that's the main thing. Because we were 19 at the time, 19, 20 at the time, we built this search engine in a dorm room and we were running it out of the dorm room and our first URL was scour.cs.ucla.edu. These things were not necessarily in fractions at the time, but we were just being practical. It was basically a project that we had started, and so we built the search engine and people started using it and we thought we would get in trouble, but it turned out the computer science department was excited about it even though we had basically parked a domain on their servers and we were using our own computers in the dorms to serve up this website and product.

**中文翻译:**
教训实在太多了。如果非要选一个，我认为主要的教训是：在商业和创业中，一切都是可以谈判的。我觉得这是最核心的一点。因为当时我们才 19、20 岁，我们在宿舍里开发了这个搜索引擎，并在宿舍里运行它，我们的第一个 URL 是 scour.cs.ucla.edu。当时这些事情并不一定算违规，我们只是很务实。这基本上是我们发起的一个项目，我们开发了搜索引擎，人们开始使用它。我们本以为会惹上麻烦，但结果计算机科学系对此感到很兴奋，尽管我们基本上是在他们的服务器上挂了个域名，并用宿舍里的电脑来提供网站和产品服务。

---

### (00:07:46) Jason Droege

**English:**
And then, when we got into financing, the financing process was fascinating, and this is where the everything is negotiable lesson came from, which is, it was Ron Burkle and Mike Ovitz, who are the initial investors in the business. We were in LA, so we were at UCLA, so we were not quite wired into the entire Sand Hill Road scene. And as we were doing the deal, the terms kept changing on us. We thought you went and raised money and it was like, "Oh, we'll get a few million dollars at a $5 million valuation." This is back when that was actually a series A valuation. And then over the course of the deal, it was like, "We're doing the deal. We're not doing the deal. Oh, you should give us 50% of the company. Oh, you should give us 75% of the company. Oh, if you want to sign the document today, this person's going to show up for breakfast and if you don't sign today and give us 80% of the company, the person's not going to show up."

**中文翻译:**
然后，当我们进入融资阶段时，融资过程非常精彩，这就是“一切皆可谈判”这个教训的来源。当时的初始投资者是 Ron Burkle 和 Mike Ovitz。我们在洛杉矶，在加州大学洛杉矶分校（UCLA），所以我们并没有完全融入沙丘路（Sand Hill Road，硅谷风投聚集地）的那套圈子。在谈交易的过程中，条款一直在变。我们本以为融资就是：“哦，我们以 500 万美元的估值拿到几百万美元。”那是 A 轮估值还是这个数的时候。但在交易过程中，情况变成了：“我们要投，我们又不投了。哦，你应该给我们 50% 的股份。哦，你应该给我们 75%。哦，如果你想今天签文件，某某人会来吃早餐；如果你今天不签并给我们 80% 的股份，那人就不出现了。”

---

### (00:08:38) Jason Droege

**English:**
It was just completely wild, the things that we saw from day one of what can happen in business, and we thought there was a way to do things, and at a very young age we realized there is no way to do things. There is just the way that you can negotiate your way through the world, which I actually think influenced Travis heavily and then me later heavily at Uber in terms of if you can imagine it and it makes sense and you can align incentives, then it can happen. But there is no way. And to learn that at 19 or 20 years old I think was highly imprinting.

**中文翻译:**
这简直太疯狂了，我们从第一天起就见识到了商业中可能发生的事情。我们原本以为做事是有固定章法的，但在很年轻的时候我们就意识到，根本没有什么固定章法。有的只是你在这个世界上谈判出的一条路。我认为这极大地影响了 Travis，后来在 Uber 时也极大地影响了我，即：如果你能想象它，它合乎逻辑，并且你能对齐利益，那么它就能实现。但并没有所谓的“唯一正确的方式”。在 19 或 20 岁时学到这一点，我认为留下了非常深刻的烙印。

---

### (00:09:12) Lenny Rachitsky

**English:**
That is an amazing lesson. What happened to Scour? It got shut down, I think. What happened there?

**中文翻译:**
这真是一个了不起的教训。Scour 后来怎么了？我想是被关停了，具体发生了什么？

---

### (00:09:16) Jason Droege

**English:**
Well, yeah, so basically what Scour was was it was a multimedia search engine and then peer-to-peer file sharing network. But what it was used for was finding free content. And at the time, the laws were on this were pretty ambiguous because we weren't, mix tapes were legal, but this was like a hyperversion of that. But we were eventually sued for a quarter of a trillion dollars. So I guess if you're going to experience something that's potentially as life devastating as that, doing it when you're, I think we were 21 or 22 at the time is the time to do it, but it was just this very cold splash of water about how the real world really works, because the MBAA and the RAA were the ones who sued us, the entertainment industry sued us or the associations that represent the entertainment industry, and then they settled it for $1 million.

**中文翻译:**
嗯，是的。基本上 Scour 是一个多媒体搜索引擎，后来变成了点对点文件共享网络。但它主要被用来寻找免费内容。当时相关的法律还很模糊，因为我们并不是……混音带（mix tapes）是合法的，但我们这个像是它的超级增强版。结果我们最终被起诉索赔 2500 亿美元（四分之一万亿）。我想，如果你要经历某种可能毁灭人生的事情，在你 21 或 22 岁的时候经历是最好的时机。但这就像一盆冷水泼在身上，让我们看清了现实世界是如何运作的。因为起诉我们的是美国电影协会（MPAA）和美国唱片业协会（RIAA），也就是娱乐行业或代表娱乐行业的协会，结果他们最后以 100 万美元达成了和解。

---

### (00:10:08) Jason Droege

**English:**
So we're like, "Wait, you wanted a quarter of a trillion dollars and then you settle for $1 million." And of course they were just trying to drive us in a bankruptcy, drive us out of the market, and these are established companies. So we're like, "If these guys don't have a playbook to follow, they just make up numbers, then wow, how should we navigate the rest of our lives?"

**中文翻译:**
所以我们当时想：“等等，你们索赔 2500 亿美元，最后 100 万美元就和解了？”当然，他们只是想把我们逼入破产，把我们赶出市场，而这些都是老牌大公司。所以我们想：“如果这些家伙都没有一套可以遵循的准则，只是随口编数字，那么哇，我们余生该如何应对这个世界？”

---

### (00:10:28) Lenny Rachitsky

**English:**
Let's talk about Scale and this whole world of AI that you're in. This is the first interview that you're doing since taking over CEO at Scale. I'm honored to have you here to talk through this stuff. This is also the first interview you're doing since the whole Meta deal, which is very complicated, confused a lot of people. So I'm just curious to hear the current state of Scale, what people should know. For example, what's your relationship with Meta? What's your relationship with Alex? What is the current state of Scale?

**中文翻译:**
让我们谈谈 Scale 以及你所处的 AI 世界。这是你担任 Scale CEO 以来接受的第一次采访，我很荣幸能邀请你来讨论这些。这也是你在 Meta 交易后的第一次采访，那次交易非常复杂，让很多人感到困惑。所以我很好奇 Scale 的现状，人们应该了解些什么。例如，你们和 Meta 的关系如何？你和 Alex 的关系如何？Scale 的现状是怎样的？

---

### (00:10:55) Jason Droege

**English:**
Yeah, so Scale is a fully independent company. The transaction was Meta invested a little bit over $14 billion to get 49% of the company, non-voting stock, didn't take a new board seat. Alex fills the board seat. So the board is the same, the governance is largely the same. There's no preferential access to anything that Meta has. There's no preferential relationship. I mean, we've had a longstanding relationship with Meta on the data side of the business for a long time and even on some business development related things to maybe working on things in government together, et cetera. And so, those might get bigger just as we're closer now, but there's nothing that prevents us from doing things with other parties and they have no access to anything that they wouldn't have had otherwise. All the privacy still in place, all the data security still in place that was there before.

**中文翻译:**
是的，Scale 是一家完全独立的公司。那次交易的情况是，Meta 投资了 140 多亿美元获得了公司 49% 的股份，是非投票权股，也没有获得新的董事会席位。Alex 占据着董事会席位。所以董事会没变，治理结构也基本没变。Meta 没有任何优先访问权，也没有任何优先关系。我的意思是，我们在数据业务方面与 Meta 有着长期的合作关系，甚至在一些业务开发方面，比如共同处理政府事务等。随着现在关系更近，这些合作可能会扩大，但没有什么能阻止我们与其他方合作，他们也无法访问任何以前无法访问的东西。所有的隐私保护和数据安全措施都和以前一样。

---

### (00:11:47) Jason Droege

**English:**
And in fact, only about 15 people went over in the transaction. So Scale has about 1,100 employees or so now, and we have two major businesses. Each of those businesses, each of them has hundreds of millions of revenue. So we have two unicorns inside the company today that sustains. The business has grown every month since the deal happened, which I've read, the reporting is not consistently reported. We haven't talked about it, so this is part of getting the word out and we're excited to continue to build, deliver data, and do what we did before.

**中文翻译:**
事实上，在那次交易中只有大约 15 个人去了 Meta。Scale 现在大约有 1100 名员工，我们有两大主营业务。这两项业务每一项都有数亿美元的收入。所以我们公司内部现在有两个维持运转的“独角兽”业务。自交易发生以来，业务每个月都在增长，但我读到的一些报道并不一致。我们之前没谈过这个，所以这也是为了传达真实情况，我们很高兴能继续构建、交付数据，并继续做我们以前在做的事情。

---

### (00:12:20) Lenny Rachitsky

**English:**
So the company today, independent, its own company. Alex, just to be clear, he works at Meta now. He's no longer at Scale.

**中文翻译:**
所以公司现在是独立的，是自己的公司。Alex，为了明确起见，他现在在 Meta 工作，不再在 Scale 了。

---

### (00:12:26) Jason Droege

**English:**
Yeah, that's right. Excuse me, I should have talked about that more.

**中文翻译:**
是的，没错。抱歉，我刚才应该多说一点。

---

### (00:12:30) Lenny Rachitsky

**English:**
I think that's really interesting. So basically, it was an investment. Some people left to join Meta, the company continues, you're running the ship. Let's talk about this whole space that you guys essentially pioneered, I don't know best way to call it, data labeling, training data, creating evals for labs. You guys were at this before anyone even knew this was a thing. I know even Scale pivoted into this market from other things. I think there was a bunch of stuff they tried with self-driving cars and all these things, and then it's like, "Oh shit, AI labs need this data." One of the main stories I've been hearing is, and I've had a bunch of CEOs from this space on the podcast, is that there's been this big shift from the way, from what Scale had pioneered and had been doing for a long time, which is generalists, low-cost labor training. From that to now, labs mostly need experts, lawyers, doctors, engineers doing training, writing evals, things like that. I'm curious just what you're seeing, how that's impacting you guys, where you think things are heading, what people should know about this whole market of data training data.

**中文翻译:**
我觉得这很有趣。所以基本上，这是一次投资，一些人离开加入了 Meta，公司继续运行，由你掌舵。让我们谈谈你们开创的这个领域，我不知道怎么称呼它最合适：数据标注、训练数据、为实验室创建评估系统。在大家还没意识到这是个行业之前，你们就在做了。我知道 Scale 也是从其他领域转型进入这个市场的。我想他们尝试过自动驾驶汽车之类的东西，然后发现：“噢天哪，AI 实验室需要这些数据。”我听到的一个主要说法是（我也邀请过几位这个领域的 CEO 来播客），现在发生了一个巨大的转变：从 Scale 长期以来开创的模式——即由普通人、低成本劳动力进行训练，转变为现在实验室主要需要专家（律师、医生、工程师）来进行训练、编写评估等。我很想知道你看到了什么，这对你们有什么影响，你认为未来的走向如何，以及人们应该了解关于数据训练市场的哪些信息。

---

### (00:13:27) Jason Droege

**English:**
Yeah, totally. I think the current positioning out there from competitors is just bogus. So I'll start with that and then maybe talk a little bit about, I'll explain what I mean by that in a second. But I think it's important to just give 30 seconds on what the history of Scale is and what's the thread going back to 2016. So Alex had this insight in very early days that the important thing to models was data. And I think he was 19 or 20 years old at the time as well. And so, he's like, "Okay, well what business would I create around this?" And the business that he created around it was, okay, let's do labeling for autonomous vehicles, because if you label the data that they have, the cars do better. And then, that wave turned into the computer vision wave, which we have a relationship with the Department of Defense where we do labeling for them, and that was in 2020.

**中文翻译:**
是的，完全正确。我认为目前竞争对手的那些定位纯属无稽之谈。我先从这点开始，稍后我会解释我的意思。但我觉得有必要花 30 秒讲讲 Scale 的历史，以及追溯到 2016 年的发展脉络。Alex 在很早期就洞察到，对模型来说最重要的是数据。我想他当时也就 19 或 20 岁。于是他想：“好吧，围绕这个我能创造什么业务？”他创建的业务是：为自动驾驶汽车做标注，因为如果你标注了它们拥有的数据，汽车的表现就会更好。然后，那一波浪潮演变成了计算机视觉浪潮，我们在 2020 年与国防部建立了合作关系，为他们提供标注服务。

---

### (00:14:21) Jason Droege

**English:**
And then, you move forward and the models have gotten better over this period of time. And so, as models get better, they need different types of data. So we've constantly been adapting to the type of data that models need to be successful. And so, then the gen AI wave hit, and this went through the moon or to the moon. And so, as part of that, that industry is changing constantly too. So it is correct that when the models came out two or three years ago, I mean we remember using them, they would hallucinate all the time, they would get basic answers wrong, they didn't know which poem was better, this poem or that poem. And that was the state of labeling a couple years ago. And things have changed quickly and we've changed with it. And now the state for everyone, and we've been at the forefront of all of this, is expert data labeling, more sophisticated tasks.

**中文翻译:**
接着，随着时间的推移，模型变得越来越好。而随着模型变好，它们需要不同类型的数据。因此，我们一直在不断适应模型成功所需的数据类型。随后，生成式 AI（Gen AI）浪潮袭来，行业热度冲上云霄。作为其中的一部分，这个行业也在不断变化。所以，两三年前模型刚出来时，我们记得使用它们时，它们会经常产生幻觉，会答错基础问题，不知道哪首诗更好。那是几年前标注的状态。情况变化很快，我们也随之改变。现在对所有人来说——而我们一直处于这一切的最前沿——核心是专家级数据标注和更复杂的任务。

---

### (00:15:15) Jason Droege

**English:**
So to give you a sense of what the task was 18 months ago, I've been here about 13 months. So I was interviewing and I remember seeing it. You would get a short story and it would say, "Is this short story better than this short story?" And then you would edit it and be like, "Yeah, it would be better if it was this," and you would give some preference ranking to it. It was pretty basic 18 months ago, and you had the rise of some experts, but the models were so far behind that they needed just even the basic stuff they needed. And now, you're at a point where a task is, one task is building an entire website by one of the world's best web developers, or it is explaining some very nuanced topic on cancer to a model. And these tasks now take hours of time and they require PhDs and professionals.

**中文翻译:**
为了让你对 18 个月前的任务有个概念（我在这里工作了大约 13 个月，我记得面试时看到过）：你会得到一个短篇故事，任务是“这个故事比那个好吗？”然后你会编辑它，说“如果是这样写会更好”，并给出偏好排序。18 个月前这还很基础，虽然当时已经有一些专家出现，但模型当时太落后了，它们甚至连基础的东西都需要。而现在，一个任务可能是由世界上最顶尖的网页开发人员构建一个完整的网站，或者是向模型解释癌症领域某些非常微妙的主题。这些任务现在需要花费数小时，并且需要博士和专业人士。

---

### (00:16:01) Jason Droege

**English:**
So to give you a stat to back this up, 80% of the people that we have on our expert network have a bachelor's degree or greater, which is very contrary to some of the positioning that's out there and some of the understanding of this industry. About 15% have a PhD that's greater, and we have PhDs on the network earning significant amounts of money doing labeling, contributing their expertise to these models. So we've been doing expert data labeling ever since the models need it. I mean, this game is keeping in touch with the researchers, knowing what they need, coming up with ideas internally. In some ways, we drove this because we were seeing that the models were not sufficient in more expert ways. And so, we would go to the model builders and say, "Hey, we noticed that this is a problem. If you would like to fix it, this cadre of experts can do that for you." So the counter positioning is out there, but I think that's just what competitors say sometimes. It has nothing to do with reality.

**中文翻译:**
给你一个数据来支持这一点：我们专家网络中 80% 的人拥有学士或更高学位，这与外界的一些定位和对这个行业的理解大相径庭。大约 15% 的人拥有博士或更高学位，我们的网络中有博士通过做标注赚取可观的收入，将他们的专业知识贡献给这些模型。所以，自从模型有需求以来，我们一直在做专家级数据标注。我的意思是，这个行业的玩法就是与研究人员保持联系，了解他们的需求，并在内部提出想法。在某种程度上，是我们推动了这一点，因为我们看到模型在专业领域表现不足。于是我们会去找模型构建者说：“嘿，我们注意到这是个问题。如果你想解决它，这批专家可以为你效劳。”所以，虽然外面有各种竞争性的言论，但我认为那只是竞争对手有时说的话，与事实无关。

---

### (00:17:02) Lenny Rachitsky

**English:**
Okay. That was extremely interesting. So what I'm hearing is yes, there has been a big shift to labs need more expert folks involved in training, labeling, writing evals. You guys are very aware of that and have evolved with that. One of the, I don't know, allegations I guess in the market is that it's hard to find these experts. So all these companies have their proprietary network of experts and how they find them. Is there anything you could share about just how you guys go about that because that feels like the hardest part is finding these experts and keeping them from other companies?

**中文翻译:**
好的，这非常有趣。所以我听到的是，确实发生了一个巨大的转变，实验室需要更多专家参与训练、标注和编写评估。你们对此非常清楚，并随之进化。市场上的一种说法（或者说质疑）是，很难找到这些专家。所以这些公司都有自己专有的专家网络和寻找他们的方法。关于你们是如何寻找专家的，有什么可以分享的吗？因为感觉最难的部分就是找到这些专家并防止他们流向其他公司。

---

### (00:17:33) Jason Droege

**English:**
They are hard to find. You have to have many, many tactics. So we get, as you would expect, there's not one way you do it. The largest way is that they refer each other because when you are enjoying what you're doing and you are using your expertise to contribute to AI, which is pretty cool. If you're a PhD on this pretty specific topic and you're using a model and you're frustrated that, oh, it doesn't interact with me in the way that I want, this is a paid way to have an outlet for that and to make hundreds or thousands of dollars doing that. And so, a lot of times they refer each other.

**中文翻译:**
他们确实很难找。你必须有很多很多策略。如你所料，没有单一的方法。最主要的方式是互相推荐，因为当你享受所做的事情，并利用你的专业知识为 AI 做出贡献时，这其实很酷。如果你是某个非常特定领域的博士，在使用模型时感到沮丧，觉得“它没有按照我想要的方式与我互动”，那么这就是一个有偿的出口，让你在做这件事的同时赚到几百或几千美元。所以，很多时候他们会互相推荐。

---

### (00:18:13) Jason Droege

**English:**
We also have campus programs where we will literally go onto the campus and talk to the professors, talk to the students, ask about who would like to do this type of work. And then, of course, there's the more traditional scaled ways of LinkedIn and places like that. But the best ones come from these grassroots and referral networks. And the only way you get that is providing a great experience to these people, because these people, they're doing it partly for money, but they're also doing it because they think that their contribution to the AI models is important and interesting, and in many times it solves a problem for them.

**中文翻译:**
我们还有校园计划，我们会直接走进校园，与教授和学生交谈，询问谁愿意做这类工作。当然，还有更传统的规模化方式，比如 LinkedIn 等。但最优秀的专家往往来自这些草根阶层和推荐网络。获得这些专家的唯一方法是为他们提供极佳的体验，因为这些人参与其中一部分是为了钱，但也是因为他们认为自己对 AI 模型的贡献很重要且有趣，而且很多时候这能为他们解决问题。

---

### (00:18:48) Lenny Rachitsky

**English:**
So something that I've been seeing on Twitter just this week as I was preparing for this is there's the information headline. This came out and this mirrored something that Brendan from Workhorse said that over time the entire economy is going to move towards just reinforcement learning and everyone's just training AI is basically the jobs that will be left. Thoughts on that? Is that where you think things are going? Is there another perspective?

**中文翻译:**
本周我在准备这次采访时在 Twitter 上看到一条《The Information》的新闻。这呼应了 Workhorse 的 Brendan 说过的话：随着时间的推移，整个经济将转向强化学习（Reinforcement Learning），每个人都在训练 AI，这基本上就是剩下的唯一工作了。你对此有什么看法？你认为事情会这样发展吗？还是有别的视角？

---

### (00:19:12) Jason Droege

**English:**
Reinforcement learning is very important, and I think this is a broader comment about the move to environments. There's these things called RL environments that effectively are sandboxes for AI agents to play in to accomplish a goal so that they can learn how to accomplish that goal. We've been doing this for over a year. So for example, you have a Salesforce instance. How does an AI agent navigate that instance? That instance has data that it needs to recognize, it has configurations. Salesforce is a highly configurable product. It has configurations, it needs to understand how to navigate. You're asking the agent to do a business process that needs very high reliability, and then the agent needs to know, "Hey, if I can't accomplish what I'm going to accomplish, or I think if there's a low accuracy of what I'm about to accomplish, how do I pop it up to a human being for feedback so I can get guidance?"

**中文翻译:**
强化学习非常重要，我认为这是一个关于转向“环境”的更广泛的评论。有一种东西叫 RL 环境（强化学习环境），它实际上是 AI 智能体为了完成目标而进行演练的沙盒，这样它们就能学习如何达成目标。我们做这件事已经一年多了。例如，你有一个 Salesforce 实例。AI 智能体如何在这个实例中导航？该实例有它需要识别的数据，有各种配置。Salesforce 是一个高度可配置的产品。它有各种配置，智能体需要理解如何操作。你要求智能体执行一个需要极高可靠性的业务流程，然后智能体需要知道：“嘿，如果我无法完成我要做的事，或者我觉得我即将完成的事准确率很低，我该如何把它弹给人类反馈，以便获得指导？”

---

### (00:20:08) Jason Droege

**English:**
All of those things need to be trained and there's no alchemy to it. You just have to put the AI agent in an environment that represents what a human being would be doing. And you can imagine the number of environments in the world and the number of goals within each environment is enormous. So the question is, and the research that we have done over the past year to try to be a good partner to our model builders, our model builder customers, is how generalizable is each individual task or each individual environment. So if you imagine the world of environments of software systems, configurations, data types, sizes, user counts, complexities, it's like the permutations are endless. So what you need is you need a strategy that allows a lab to collect data that is generalizable enough across a broad spectrum of use cases so that they don't have to collect 45 trillion combinations of what should the agent do in this particular situation.

**中文翻译:**
所有这些都需要训练，这其中没有什么炼金术。你只需要把 AI 智能体放在一个模拟人类操作的环境中。你可以想象，世界上的环境数量以及每个环境中的目标数量是巨大的。所以问题在于（这也是我们过去一年为了成为模型构建者客户的好伙伴所做的研究）：每个单独的任务或环境的可推广性（Generalizability）如何？如果你想象软件系统、配置、数据类型、规模、用户数量、复杂性的环境世界，排列组合是无穷无尽的。所以你需要的是一种策略，让实验室能够收集在广泛用例中具有足够通用性的数据，这样他们就不必针对“智能体在这种特定情况下该做什么”去收集 45 万亿种组合。

---

### (00:21:20) Jason Droege

**English:**
So sometimes the work and the data is highly generalizable, and by generalizable I mean you have it accomplished in a simple way. The task might be find the meeting on my calendar for my interview with Lenny, and the agent goes and it looks through all my calendar and then it pops it out, very simple example. That needs to be generalizable to any calendar search potentially or potentially any calendar action. And the more generalizable it is, the more valuable the data is. So our job is to provide the most valuable data to model builders that accomplishes the goal of making agents as useful as possible for their end users.

**中文翻译:**
所以有时工作和数据是高度通用的，我说的通用是指你可以用简单的方式完成它。任务可能是“在我的日历上找到与 Lenny 采访的会议”，智能体去查看我所有的日历，然后把它找出来，这是一个非常简单的例子。这需要能够推广到任何日历搜索，或者潜在的任何日历操作。数据越通用，价值就越高。所以我们的工作是为模型构建者提供最有价值的数据，以实现让智能体对最终用户尽可能有用的目标。

---

### (00:22:03) Lenny Rachitsky

**English:**
I love that you've been sharing these examples of what this stuff is specifically that these people are doing, the data you're providing to labs. So just to mirror back a few of the examples you've shared, one is an engineer building a website, sharing the code essentially with the model. And here's how I would do it. And in that example, is it just like here's the code or is it a recording of them building it? What is the data?

**中文翻译:**
我很喜欢你分享的这些具体例子，说明这些人具体在做什么，以及你们为实验室提供的数据。回顾一下你分享的几个例子：一个是工程师构建网站，基本上是向模型分享代码，并展示“我会怎么做”。在那个例子中，数据只是代码吗？还是他们构建过程的录像？数据到底是什么形式？

---

### (00:22:30) Jason Droege

**English:**
It could be both. So in some cases, it's just the website and here's an example, and then they design it. In some cases, it needs to be annotated in such a way that's like, I made this decision for this reason or this decision for that reason, or here's how I would think about it. So it depends on what the model builders are trying to accomplish. And so, it can get quite nuanced in terms of what they're trying to train on.

**中文翻译:**
两者都有可能。在某些情况下，只是网站和一个示例，然后他们进行设计。在某些情况下，需要以某种方式进行标注，比如：“我出于这个原因做了这个决定，或者出于那个原因做了那个决定”，或者“我是这样思考的”。这取决于模型构建者想要实现什么目标。因此，在他们想要训练的内容方面，可能会变得非常细致。

---

### (00:22:54) Jason Droege

**English:**
So it's not like here's a website and then it's created doing websites. It's like, here's a website, here's why I made this decision, here's why I didn't make this decision, or here's a broken website and here's why it's broken if they're trying to accomplish, I don't know, a debugging tool for a website builder or something like that.

**中文翻译:**
所以这不只是“这是一个网站，然后模型就学会做网站了”。而是“这是一个网站，这是我为什么做这个决定的原因，这是我为什么没做那个决定的原因”，或者“这是一个有问题的网站，这是它出问题的原因”——如果他们想开发一个网站构建器的调试工具之类的。

---

### (00:23:09) Lenny Rachitsky

**English:**
Got it.

**中文翻译:**
明白了。

---

### (00:23:33) Jason Droege

**English:**
Absolutely. I can actually give you an example from, so we have two sides of our business. One, we supply data to model builders. We sell the data, and then the other is we actually do solutions. We sell applications and services to healthcare systems, insurance systems, et cetera. I actually think it would paint a more colorful picture if I gave you an example of one of those because it involves data, but it involves the use of data, the manipulation of data for a very, very specific goal. And so, one example there is we work with a healthcare system and health systems have lots of problems. This particular healthcare system has experts that see very rare cases on a regular basis. So you go there only if no one else can figure out your problem, and there's a huge backlog. So there's a productivity element to this implementation tier.

**中文翻译:**
当然。实际上我可以给你举个例子。我们业务有两个板块：一是为模型构建者提供数据，我们卖数据；二是提供解决方案，我们向医疗系统、保险系统等销售应用和服务。我觉得如果我举一个后者的例子，画面感会更强，因为它涉及数据，但更涉及为了一个非常非常具体的目标而使用和处理数据。例如，我们与一个医疗系统合作，医疗系统有很多问题。这个特定的医疗系统拥有经常处理罕见病例的专家。也就是说，只有当别人都解决不了你的问题时，你才会去那里，因此那里有大量的积压病例。所以在这个实施层面存在生产力因素。

---

### (00:24:27) Jason Droege

**English:**
So there's a huge backlog. They want to be able to see more patients, they want to be able to provide better care, and they want to prevent the number of revisits because they want to give the accurate diagnosis day one and what the treatment should be. Well, to do this today without the help of AI, the doctor really needs to read 200 to 300 pages of documentation and it's rolled into one document, but in different formats. And so, if you're a doctor, how are you going to read 200 or 300 pages of everything? So what they do is they do the best they can. They scan it, they ask a nurse to look at it, they ask maybe a more junior doctor to take a look at this case. They want to treat the patient well, obviously this is why they became a doctor. And then, they go into the room and they talk to the person and then they make a diagnosis.

**中文翻译:**
积压很严重。他们希望能看更多病人，提供更好的护理，并减少复诊次数，因为他们想在第一天就给出准确的诊断和治疗方案。在没有 AI 帮助的今天，医生真的需要阅读 200 到 300 页的文档，这些文档被汇总在一起，但格式各异。如果你是医生，你怎么可能读完这 200 或 300 页的所有内容？所以他们只能尽力而为：快速浏览，让护士看一眼，或者让资历较浅的医生看看。他们当然想治好病人，这是他们当医生的初衷。然后他们走进诊室，与病人交谈，最后做出诊断。

---

### (00:25:14) Jason Droege

**English:**
Well, we basically built a tool that will read that document for them and point out the top 5 to 10 things that they should take into consideration, either allergies that might not be obvious is one example where we actually, we picked up on an allergy that a patient had that would not have been obvious from reading the document and that allergy actually would've had a conflict with the medication that they were going to be prescribed. And so, the AI tool basically pulled out this correlation that would've even been hard for a human being to do. To make this tool better and better, you get to a certain limit with the models off the shelf, and actually the people inside of this healthcare system have to do their own labeling.

**中文翻译:**
我们基本上开发了一个工具，可以为他们阅读文档，并指出最需要考虑的 5 到 10 件事。一个例子是那些不明显的过敏反应：我们实际上发现了一个病人的过敏史，这从阅读文档中并不容易发现，而这种过敏实际上会与准备开给他的药物产生冲突。所以，AI 工具基本上找出了这种即使对人类来说也很难发现的关联。为了让这个工具越来越好，使用现成的模型会遇到瓶颈，实际上这个医疗系统内部的人员必须进行他们自己的标注。

---

### (00:25:54) Jason Droege

**English:**
So we talk about labeling for model builders, but we are starting to see the labeling move into enterprises and into governments because you can only get so far with off the shelf plus rag plus some fine-tuning based on recorded data. One thing people often miss about these systems is we assume because you hear these numbers of like, "Oh, this bank in just 200 petabytes of data a year or whatever fantastical number." What we miss is is that the right data? Which of that data is useful to the models? And most of it is not useful. Some of it is, but a lot of what we do when we're talking about knowledge work, when we're talking about making judgment is human judgment based on synthesizing how would this doctor in this case or how would this banker in this case make this decision and how would they make decision in the context of their overall enterprise? And that might be different bank to bank, healthcare system to healthcare system, because of the culture, the objectives, the incentives, et cetera. And so, we're getting to the point now where we see that digitizing judgment, human judgment, true subject matter, deep expertise is becoming a bottleneck that we're unblocking for our customers.

**中文翻译:**
所以我们虽然在谈论为模型构建者做标注，但我们开始看到标注需求进入了企业和政府，因为仅靠现成模型加上 RAG（检索增强生成）以及基于记录数据的一些微调（Fine-tuning），效果是有限的。人们常忽略的一点是，我们听到类似“这家银行每年处理 200 PB 数据”之类的天文数字时，往往会忽略：那是正确的数据吗？其中哪些数据对模型有用？大部分其实都没用。有些有用，但当我们谈论知识工作和做判断时，很多时候是基于综合的人类判断：这位医生或这位银行家在这种情况下会如何做决定？在整个企业背景下他们会如何做决定？由于文化、目标、激励机制等不同，不同的银行或医疗系统之间的情况可能完全不同。所以我们现在发现，将判断力、人类判断力、真正的领域深度专业知识数字化，正成为一个瓶颈，而我们正在为客户打破这个瓶颈。

---

### (00:27:05) Lenny Rachitsky

**English:**
That's really interesting. It's like the spectrum went from just low skill generous labor to experts to now the specific expert at this one company who needs to do this work, this labeling.

**中文翻译:**
这真的很有趣。感觉劳动力光谱从低技能的普通劳动力，演变到专家，现在演变到特定公司的特定专家，他们需要完成这些标注工作。

---

### (00:27:16) Jason Droege

**English:**
Absolutely. I mean understanding what, there's this broad narrative. We have two narratives. We have the AGI, everything is just going to become AGI, and then there's the skeptics, which is like, "Hey, this is all bunk, this is a bubble, et cetera." And of course, my view is most things are kind of like there's truth in between and some of the extreme parts of the extreme probably correct, but the reality is is that it's very hard to get machine critical use cases in agentic systems where agents are talking to agents to a level of accuracy that is necessary to accomplish a goal. And one of the main issues is that a one document, think about the problem of even understanding a document, a document that reads the exact same words in company A will have a different meaning and importance in company B. So how do you have a system that knows that? So this is all got to be built. So if you're going to make good decisions.

**中文翻译:**
绝对是这样。目前有两种宏大叙事：一种是 AGI（通用人工智能），认为一切都将变成 AGI；另一种是怀疑论，认为“嘿，这全是胡扯，是个泡沫”。当然，我的观点是，大多数事情的真相都在中间，而极端观点中的某些部分可能也是正确的。但现实情况是，在智能体与智能体对话的“智能体系统”（Agentic systems）中，要让机器关键用例达到完成目标所需的准确度是非常困难的。其中一个主要问题是，即使是理解一份文档，同样的文字在 A 公司和 B 公司的含义和重要性可能完全不同。那么你如何让系统知道这一点呢？这些都必须构建出来，如果你想让它做出正确的决策。

---

### (00:28:18) Lenny Rachitsky

**English:**
This is a good segue to this question that is always on people's minds when they look at companies like yours and the other folks in the space is just how long do we need people to be doing this? At what point will AI be smart enough to do it themselves? I know your incentives are to say we'll never run out of people because it's aligned with your growth, but just how should we think about just why do we need people, I don't know, in 10 years? How long do we need these experts telling AI things it doesn't know?

**中文翻译:**
这正好引出了一个人们在看待像你们这样的公司时总会想到的问题：我们还需要人类做这件事多久？AI 到什么时候才能聪明到可以自给自足？我知道你的立场肯定是说“我们永远需要人”，因为这符合你们的增长利益，但我们该如何思考这个问题？比如 10 年后，为什么我们还需要人？我们需要这些专家告诉 AI 它不知道的事情还要持续多久？

---

### (00:28:42) Jason Droege

**English:**
First off, the history of data labeling is a history of new beginnings. Autonomous vehicles do not need as much data labeling as they did in the past. I mean, Scale is a company that believes that data will always be important at the point at which you don't need external data, human data in models. I think we've gotten to a level of advancement in the world that is almost like unfathomable because you're effectively saying that no new human skill and no new human knowledge is important enough to put into these models. That feels like pretty far out there. And so, for a business like ours, we're constantly looking at how do you build operations that can constantly find the new needs and then work with the contributor network we call the experts contributors to unearth that data, to unearth that information. And sometimes it's new people, sometimes within our existing base we find that existing people have expertise that we didn't know about that maybe wasn't useful to a model a year ago, but now is useful.

**中文翻译:**
首先，数据标注的历史就是不断开启新篇章的历史。自动驾驶汽车现在需要的数据标注已经不像过去那么多了。Scale 是一家坚信数据永远重要的公司。如果你到了模型不再需要外部数据、不再需要人类数据的地步，我认为世界已经达到了一个几乎无法想象的进步水平，因为你实际上是在说，没有任何新的人类技能或新的人类知识重要到需要输入这些模型。这听起来非常遥远。因此，对于像我们这样的业务，我们一直在研究如何建立一套运营体系，能够不断发现新需求，然后与我们称为“贡献者”的专家网络合作，挖掘出那些数据和信息。有时是新加入的人，有时是在我们现有的基础中，我们发现现有人员拥有我们以前不知道的专业知识，这些知识一年前对模型可能没用，但现在有用了。

---

### (00:29:47) Jason Droege

**English:**
So this is a constant progression of getting more and more data into these models. Yes, we are financially incentivized to believe that humans will always be in the loop, but that's not just a business belief, it is a personal belief. These systems need to work for us, and if these systems work for us, then we will need to be on the loop or in the loop on any of the decisions that these systems make. As to the broader point around labor, which I think comes up around white collar apocalypse and these things that come up, I'm definitely on the more maybe practical side of this, possibly just because of my nature, possibly because I see what's going on on the ground actually in these customers where supposedly this transformation is going to happen in the next one to two years. And I just think that it might happen. The space is moving super fast, but I don't think it's going to happen.

**中文翻译:**
所以这是一个不断将更多数据输入模型的过程。是的，我们在财务上确实有动力相信“人类将永远参与其中”（Human in the loop），但这不仅是商业信念，也是个人信念。这些系统需要为我们服务，如果它们为我们服务，那么在这些系统做出的任何决策中，我们都需要参与其中或进行监督。至于关于劳动力更广泛的观点，比如所谓的“白领末日”之类的讨论，我肯定属于更务实的一方。可能是因为我的天性，也可能是因为我看到了客户现场的实际情况——虽然据说这种变革会在未来一两年内发生。我觉得它可能会发生，这个领域发展极快，但我认为它不会那么快发生。

---

### (00:30:39) Jason Droege

**English:**
It is definitely not going to happen in the next year. The idea that it happens in the next two years I think is very far-fetched, but nothing's impossible here. And long-term, I think that if you go back through, I don't know, pessimist archive or whatever, these accounts that post, the radio was invented and then all of this will be eliminated. There will be change, but the change, I think humans are very good at adapting. So I think what we're underestimating in all of the doom and gloom is we believe in human adaptability. We as a company are highly adaptable and I think the history of technology has shown that people are adaptable.

**中文翻译:**
明年肯定不会发生。认为未来两年内会发生的想法我觉得非常遥远，但这里没有什么是不可能的。从长远来看，如果你翻看那些“悲观者档案”之类的账号，你会发现：收音机发明时，人们说一切都会被消灭。变革会发生，但我认为人类非常擅长适应。所以我觉得在所有的悲观论调中，我们低估了人类的适应能力。我们公司具有高度的适应性，我认为技术史已经证明了人类是具有适应能力的。

---

### (00:31:14) Lenny Rachitsky

**English:**
I really like that takeaway. I'm an optimist as well, so I'm always looking for reasons to be optimistic. I want to follow that thread before I get there, something very tactical I want to ask about is evals seems to be coming up a lot, especially with companies in your space. I'm still learning a lot about just what this all is, especially in your market. How much of what you or experts are providing are evals versus other types of data?

**中文翻译:**
我很喜欢这个观点。我也是个乐观主义者，所以我总是在寻找乐观的理由。在深入探讨之前，我想问一个非常战术性的问题：评估（Evals）这个词似乎经常出现，特别是在你们这个领域的公司中。我还在学习这到底是什么，特别是在你们的市场中。你或专家提供的内容中，评估占多大比例，其他类型的数据又占多少？

---

### (00:31:40) Jason Droege

**English:**
A lot of it's evals, and within enterprise customers and government customers, it's mostly evals because somebody's got to establish the benchmark for what good looks like. That's the simple way to think about evals. What does good look like and do you have a comprehensive set of evals so that the system knows what good looks like? It's as simple as that.

**中文翻译:**
很大一部分是评估。在企业客户和政府客户中，大部分都是评估，因为必须有人为“什么是优秀的标准”建立基准。这是理解评估的简单方法：优秀的标准是什么？你是否有一套全面的评估体系，让系统知道什么是优秀的？就这么简单。

---

### (00:32:00) Lenny Rachitsky

**English:**
So in the case maybe of the healthcare example you shared, essentially this doctor would be sitting there looking at all these reports, creating evals that are like, this is what this should be discovering in this report, in this record. Is that a way to think about it?

**中文翻译:**
所以在你分享的医疗例子中，基本上就是这位医生坐在那里看所有的报告，创建评估，比如：“这份报告、这份记录中应该发现这些内容”。可以这样理解吗？

---

### (00:32:15) Jason Droege

**English:**
Yeah, that's a very big part of it, which is what does good look like?

**中文翻译:**
是的，那是很大一部分，即：优秀的标准是什么？

---

### (00:32:19) Lenny Rachitsky

**English:**
Awesome, okay.

**中文翻译:**
太棒了，好的。

---

### (00:32:20) Jason Droege

**English:**
I have to reduce things down to simple terms.

**中文翻译:**
我必须把事情简化。

---

### (00:32:24) Jason Droege

**English:**
I didn't intentionally use that word, but these are probabilistic systems and so depending upon... Yeah, so I can get into some nuance here about the right types of problems that AI is good at solving. So if you have a human process that is 10 or 20% accurate or 10 or 20% liked, AI is awesome. Because if you get to 50, 60, 70, 80% accurate, you're in the money, you're in the green, everybody's happy. Now, the system then has to know, hey, for the remainder, how do I make sure that humans are involved for the remainder of the decision making? But from a net value add standpoint, the humans are pumped in that scenario.

**中文翻译:**
我不是故意用那个词的，但这些是概率系统，所以取决于……是的，我可以深入探讨一下 AI 擅长解决的问题类型。如果你有一个人类流程，其准确率或满意度只有 10% 或 20%，那么 AI 就太棒了。因为如果你能达到 50%、60%、70%、80% 的准确率，你就赚到了，大家都开心。现在，系统必须知道：嘿，对于剩下的部分，我如何确保人类参与到剩余的决策中？但从净增值的角度来看，人类在那种情况下会非常兴奋。

---

### (00:33:13) Jason Droege

**English:**
If you have a human process, a workflow that is 98% accurate, and you expect an AI system to get you the remaining 2%, not totally there yet. And so, when I say what does good look like? A lot of the processes and a lot of the things that people are asking these systems to do and systems for us to build are making judgments on their behalf. And so, just like we would ask a human being, "Hey, what do you think we should do in this scenario?" What you're looking for is you're looking for the best recommendation or course of action given the current information.

**中文翻译:**
如果你有一个人类流程或工作流，准确率已经达到 98%，而你期望 AI 系统帮你完成剩下的 2%，那目前还做不到。所以当我问“优秀的标准是什么”时，人们要求这些系统（以及要求我们构建的系统）做的很多事情，其实是代表他们做出判断。就像我们会问一个人：“嘿，你觉得在这种情况下我们该怎么办？”你寻找的是基于当前信息给出的最佳建议或行动方案。

---

### (00:33:48) Lenny Rachitsky

**English:**
To you, this is so obvious and to people in your market that I think a lot of people think about AI being trained on just here's a bunch of data, check it out, learn everything you can from all of human history and all of written record. But what's wild is basically people are sitting around teaching AI things it doesn't know, filling gaps. That's how AI is getting smarter now. There's no more real data for it to feed on. It's just like, here's what I don't know, or here's what an expert found you're wrong. I'm going to teach you this. And the fact that it scales and that's keeping models improving is so mind-boggling.

**中文翻译:**
对你和你们市场的人来说，这显而易见，但我认为很多人觉得 AI 训练只是“这里有一堆数据，去学吧，学完人类历史上所有的书面记录”。但疯狂的是，现在基本上是人们坐在一起教 AI 它不知道的事情，填补空白。这就是现在 AI 变聪明的方式。已经没有更多真实数据供它吞噬了。现在是：“这是我不知道的”，或者“这是专家发现你错的地方，我要教你这个”。而这种模式能够规模化并持续改进模型，这简直令人难以置信。

---

### (00:34:21) Jason Droege

**English:**
Yes. No, yeah, I agree. I mean, like with any of these major tech revolutions, the headlines tell one story and then on the ground, laying broadband means you need to dig up every single road in America to lay it. There is the, yeah, it's as simple as that. Someone's got to dig up the road or someone's got to run the undersea cable. There's always some operational chiseling that's going on in all of these industries. I mean, if you think about how magical these models are, they're remarkable that if you've been in technology long enough, it blows my mind even today that they get the punctuation right consistently. I mean, that sounds like almost daft to say at this point in the market, but if you were to go back three years and think about that from a technological standpoint, a lot of things that we think are trivial now are very sophisticated, and it's a combination of, I mean, the real answer is it's a combination of computational power, model improvement, and data, and all three are getting better at once.

**中文翻译:**
是的，我同意。就像任何重大技术革命一样，头条新闻讲的是一个故事，而在实际落地时，铺设宽带意味着你需要挖开美国的每一条马路。就是这么简单：总得有人去挖路，或者有人去铺设海底电缆。在所有这些行业中，总有一些运营层面的“精雕细琢”在进行。如果你想想这些模型有多神奇，它们确实非同寻常。如果你在科技界待得足够久，即使在今天，它们能始终如一地用对标点符号依然让我感到惊讶。在目前的市场阶段，说这话可能听起来有点傻，但如果你回到三年前，从技术角度思考，很多我们现在认为微不足道的事情其实都非常复杂。真正的答案是：这是计算能力、模型改进和数据的结合，而这三者都在同时进步。

---

### (00:35:25) Lenny Rachitsky

**English:**
Let's follow that thread. You've been at Scale for a long time, CEO for, you said, 13 months. I feel like you see a lot more about where things are heading because you work with labs on things they haven't even announced yet. You see more than most people, and I know there's only so much you can share about what companies are doing, but just is there anything you think people don't truly grasp or understand about where AI models are going to be in the next two, three years?

**中文翻译:**
让我们继续这个话题。你在 Scale 待了很久，担任 CEO 13 个月。我觉得你对未来的走向看得更清楚，因为你与实验室合作处理那些尚未公布的事情。你看到的比大多数人都多。我知道关于公司正在做的事情你能分享的有限，但你认为关于未来两三年 AI 模型的发展，有什么是人们还没有真正领悟或理解的吗？

---

### (00:35:47) Jason Droege

**English:**
Look, there's so much talk. I think it depends on how much X or news you consume. So I think it's like what sort of our perspective. The general trend right now is going from models knowing things to models doing things. And we're pushing the boundaries of knowledge, like the benchmarks that we put out and that others put out are showing that the knowledge that these models have is getting, it's quite robust. And then, the next question becomes, well, what can it do for me? And as soon as you get into that world, that's where the environments we were talking about start to come into play. How do you navigate a Salesforce instance? How do you navigate a healthcare system? How do you navigate even a weather app on your phone, and how does the agent make decisions for you?

**中文翻译:**
听着，讨论实在太多了。这取决于你消费了多少 X（推特）或新闻。从我们的视角来看，目前的总体趋势是模型从“知道事情”转向“做事情”。我们正在推开知识的边界，比如我们和其他机构发布的基准测试显示，这些模型拥有的知识正变得非常稳健。接下来的问题就变成了：它能为我做什么？一旦进入那个世界，我们之前谈到的“环境”就开始发挥作用了。你如何操作 Salesforce 实例？你如何操作医疗系统？甚至你如何操作手机上的天气应用，以及智能体如何为你做决策？

---

### (00:36:36) Jason Droege

**English:**
We're just getting into the beginning of that. It'll be very interesting to see how quickly that happens. And I think that's where a lot of the speculation has a wide variance because we're at the beginning of it. People take different trajectories on how that's going to improve. And so, if you take a trajectory of the most aggressive trajectory, which is like, oh, it's actually going to be quite easy to train on these things, and then it's just a change management exercise in the economy, which by the way, change management exercises are not to be underestimated.

**中文翻译:**
我们才刚刚开始。看看这发生得有多快会非常有趣。我认为这就是为什么很多推测存在巨大差异的原因，因为我们正处于起步阶段。人们对改进的速度有着不同的预判。如果你采取最激进的预判，即“训练这些东西其实很容易”，那么剩下的就只是经济中的“变革管理”（Change management）练习了。顺便说一下，变革管理练习是不容小觑的。

---

### (00:37:06) Jason Droege

**English:**
There's still people in the world without an email address. And so, the adoption curve then becomes a human and policy issue, not a technological issue. We're not there from the technology standpoint, but I do think in the next two to three years, if I take the bait and have to make a guess is the technology will get to a point where it will push the change management and policy makers to say like, "Oh, what do we do with this because it's getting pretty close?" That's probably two or three years away.

**中文翻译:**
世界上仍然有人没有电子邮箱地址。因此，采用曲线就变成了一个人类和政策问题，而不是技术问题。从技术角度看，我们还没到那一步，但我确实认为在未来两三年内（如果非要我猜的话），技术将发展到这样一个地步：它会迫使变革管理者和政策制定者说：“噢，我们该拿这东西怎么办？因为它已经非常接近（完全自动化）了。”这大概还需要两三年的时间。

---

### (00:37:35) Lenny Rachitsky

**English:**
There's been a lot of talk these days about AI not delivering on the promise that we hear, especially at enterprises. There's this MIT study that just showed that there's all these pilots that people are excited about and then they don't work and companies aren't adopting these tools. There's data showing engineers are not actually as productive with tools. It actually slows them down sometimes. You work with a ton of companies implementing all kinds of AI. What are you seeing on the ground? What kind of gains are you seeing? Do you feel like it's overhyped, underhyped?

**中文翻译:**
最近有很多关于 AI 没能兑现承诺的讨论，特别是在企业界。麻省理工学院（MIT）的一项研究显示，人们对各种试点项目感到兴奋，但随后它们并不奏效，公司也没有采用这些工具。还有数据表明，工程师使用这些工具后效率并没有提高，有时反而变慢了。你与大量实施各种 AI 的公司合作，你在现场看到了什么？你看到了什么样的收益？你觉得它是被过度炒作了，还是被低估了？

---

### (00:38:03) Jason Droege

**English:**
There's a lot of hype out there, and our job is to actually build products that work, that deliver value for our customers and figure out where the rubber hits the road. And to get a sophisticated, my healthcare example is one, we do other sophisticated workflows, claims management for insurance companies. This is a financial decision that's happening, but it's an automatable process. But basically what happens is the POCs get to 60 or 70% of the way there, and the human mind goes, oh, the rest is no big deal. But it's like uptime in data centers where every nine is an order of magnitude investment in terms of reliability, backups, et cetera. One nine is basically a web server in a dorm room like we had at UCLA, and then five nines is this crazy high bar, but it just seems like a very small movement.

**中文翻译:**
外面确实有很多炒作，而我们的工作是真正构建出有效的产品，为客户提供价值，并找出实际落地的关键点。要实现复杂的流程（比如我举的医疗例子，还有我们做的其他复杂工作流，如保险公司的理赔管理），这涉及财务决策，但它是一个可自动化的过程。基本上发生的情况是：POC（概念验证）完成了 60% 或 70%，人类就会想：“噢，剩下的部分没什么大不了的。”但这就像数据中心的在线率，每一个“9”在可靠性、备份等方面都是一个数量级的投资。一个“9”基本上就是我们在 UCLA 宿舍里的那种 Web 服务器，而“五个 9”则是极高的标准，但看起来只是很小的变动。

---

### (00:38:55) Jason Droege

**English:**
So you have a similar dynamic going on here where you have a bunch of people, one of the reasons why the POCs have failed, one, there's a denominator effect because it's so easy to do, "Hey, I spun up a project, I spun up a project, I spun up a project." So it's really easy for people to try. So I don't necessarily know that the 95% number, I think is a bit of clickbait in a way. It tells the right story, but it is a little bit hyperbolic because if you take the efforts that happen in the company where they actually get a quality partner like we are, or if you do it yourself, if you have engineers who've worked with models before and they put in the time, and I'm talking about months, not like minutes like you see in these videos to actually get legal approval, policy approval, regulatory approval, change managements like an accuracy that everybody's comfortable with. If you actually do that, these things take 6 to 12 months to get them truly robust enough where an important process can be automated.

**中文翻译:**
所以这里也有类似的动态：POC 失败的原因之一是“分母效应”，因为现在太容易启动项目了，“嘿，我开了一个项目，又开了一个项目”。人们尝试起来非常容易。所以我并不确定那个“95% 失败”的数字是否准确，我觉得某种程度上那是标题党。它反映了部分事实，但有点夸张。因为如果你看那些真正投入努力的公司——他们找了像我们这样高质量的合作伙伴，或者自己动手，让有模型经验的工程师投入时间（我说的是几个月，而不是视频里看到的几分钟），去获得法律批准、政策批准、监管批准，进行变革管理，达到大家都满意的准确率。如果你真的这么做了，这些东西需要 6 到 12 个月才能变得足够健壮，从而实现重要流程的自动化。

---

### (00:40:00) Jason Droege

**English:**
So I think that's where the hype is right that when you do it, the impact is like, whoa, I never would've figured that out myself, and I'm one of the most educated doctors in the world as an example. But the time to get there is just longer than what people are selling.

**中文翻译:**
所以我认为炒作的正确之处在于：当你做成时，影响是巨大的，你会觉得“哇，我作为世界上受教育程度最高的医生之一，自己都发现不了这个”。但达到那个目标所需的时间，比人们推销的要长。

---

### (00:40:17) Lenny Rachitsky

**English:**
It's such a good point that it's not only is it easy to try these things, it's just like everyone's doing it so everyone's feeling FOMO like, "I got to try these things. I got to try all these prototyping tools, Cursor, all these things." Just goes, "Everyone's doing it," and then you just rush into it and it doesn't actually work out.

**中文翻译:**
这个观点太棒了。不仅是因为尝试这些东西很容易，还因为每个人都在做，所以大家都有 FOMO（错失恐惧症），觉得“我也得试试这些，试试所有的原型工具、Cursor 之类的”。大家觉得“既然大家都在做”，然后就匆忙投入，结果往往并不理想。

---

### (00:40:31) Jason Droege

**English:**
Easy to learn, hard to master. That's my summary.

**中文翻译:**
易学难精。这就是我的总结。

---

### (00:40:36) Lenny Rachitsky

**English:**
This episode is brought to you by Mercury. I've been banking with Mercury for years, and honestly, I can't imagine banking any other way at this point. I switched from Chase and holy moly, what a difference. Sending wires, tracking spend, giving people on my team access to move money around so freaking easy. Where most traditional banking websites and apps are clunky and hard to use, Mercury is meticulously designed to be an intuitive and simple experience. And Mercury brings all the ways that you use money into a single product, including credit cards, invoicing, bill pay, reimbursements for your teammates and capital. Whether you're a funded tech startup looking for ways to pay contractors and earn yield on your idle cash, or an agency that needs to invoice customers and keep them current, or an e-commerce brand that needs to stay on top of cashflow and access capital, Mercury can be tailored to help your business perform at its highest level. See what over 200,000 entrepreneurs love about Mercury. Visit mercury.com to apply online in 10 minutes. Mercury is a FinTech, not a bank. Banking services provided through Mercury's FDIC-insured partner banks. For more details, check out the show notes.

**中文翻译:**
本集节目由 Mercury 赞助。我使用 Mercury 的银行服务已经很多年了，老实说，我现在无法想象用其他方式处理银行业务。我从大通银行（Chase）转过来，天哪，差别太大了。发汇款、追踪支出、授权团队成员转账，都非常简单。大多数传统银行的网站和应用都很笨重难用，而 Mercury 经过精心设计，提供了直观且简单的体验。Mercury 将你使用资金的所有方式整合到一个产品中，包括信用卡、发票、账单支付、团队报销和资本管理。无论你是寻找支付承包商方式并想赚取闲置现金收益的融资初创公司，还是需要向客户开票并保持现金流的代理机构，亦或是需要掌控现金流并获取资本的电商品牌，Mercury 都能为你量身定制，帮助你的业务发挥最高水平。看看超过 20 万名企业家为什么喜爱 Mercury。访问 mercury.com，10 分钟即可在线申请。Mercury 是一家金融科技公司，不是银行。银行服务由 Mercury 的 FDIC 承保伙伴银行提供。

---

### (00:41:44) Lenny Rachitsky

**English:**
Okay, let's move on from AI. This could be an endless discussion about AI, but you've got a lot more lessons to teach us. You've helped build Uber Eats, you've had a couple startups in the past. We talked about Scour for a bit. I've talked to a bunch of people that have worked with you over the years, and I got a lot of really interesting insights into the stuff that you're extremely good at. So I'm just going to go through a bunch of these. One is your obsession with being close to customers, talking to customers, and I love this topic because it's something everybody thinks they're great at, and they feel like they completely understand how this is important, why this is important. They all feel like I'm doing this, don't worry about... Everyone else is not doing this, but I am. Talk about just what you think maybe people miss about how this looks when you're doing it well, and just why this is so important.

**中文翻译:**
好了，让我们暂时跳过 AI。关于 AI 的讨论可以没完没了，但你还有很多经验可以教给我们。你帮助建立了 Uber Eats，过去也有过几家初创公司。我们刚才聊了一会儿 Scour。我采访过很多这些年来与你共事的人，我得到了很多关于你极其擅长的事情的有趣见解。我将逐一列举。首先是你对贴近客户、与客户交谈的执着。我喜欢这个话题，因为每个人都觉得自己在这方面做得很好，觉得自己完全理解这有多重要、为什么重要。他们都觉得“我在做这件事，别担心……别人没做，但我做了”。谈谈你认为人们在做得好时可能会忽略什么，以及为什么这如此重要。

---

### (00:42:33) Jason Droege

**English:**
I mean, I probably fall in the category of what you just described, which is maybe part of the hubris you need to start anything new. But I mean, I don't think it's a clean process. I think my process is I'm constantly questioning every single thing that I'm hearing at the beginning of anything. I don't take what a customer says literally. And there's been a lot talked about on this topic from a product management standpoint in terms of like, oh, don't do what they say, do what they mean, and look at the real problems and underlying things. I think the way that I look at it that might be additive to the discussion is I look at the underlying incentives of the customer. And the underlying incentives of customers are not always financial. Sometimes it's ego, sometimes it's career growth.

**中文翻译:**
我想我可能也属于你刚才描述的那类人，这也许是开始任何新事物所需的傲慢的一部分。但我的意思是，我不认为这是一个干净利落的过程。我的过程是：在任何事情开始时，我都在不断质疑我听到的每一件事。我不会字面上理解客户说的话。在产品管理领域，关于这个话题已经有很多讨论了，比如“不要照做他们说的，要做他们真正想要的”，以及“看清真实的问题和底层逻辑”。我认为我看待这个问题的方式可能对讨论有所补充，那就是：我观察客户的底层激励机制（Incentives）。客户的底层激励并不总是财务上的，有时是自尊心，有时是职业成长。

---

### (00:43:24) Jason Droege

**English:**
If you're selling enterprise software to someone, there's an executive sponsor as an example, that person needs to trust that you're going to do a good job for them. How do you get them to jump with you on this big project? Well, that's part of the journey of not just the product, but what do they need to hear from us? What do we need to supply them? What do we need to do to actually unlock the opportunity to implement the product? So I think there's an incentives alignment baseline. I'm a big believer that it's cliche, but show me the incentive and I'll show you the outcome. I think that's absolutely true. And even when customers will tell you things, I'll give you an example. I've been out of the game for a while so I can be open about it, Uber Eats.

**中文翻译:**
如果你向某人销售企业软件，比如有一个执行赞助人（Executive sponsor），那个人需要相信你会为他们做好工作。你如何让他们愿意和你一起投身于这个大项目？这不仅是产品的问题，还包括：他们需要从我们这里听到什么？我们需要为他们提供什么？我们需要做什么才能真正开启实施产品的机会？所以我认为有一个利益对齐的基准。我深信那句老话（虽然有点陈词滥调）：“给我看激励机制，我就能给你看结果。”我认为这绝对正确。即使客户告诉你一些事情，我给你举个例子吧，我已经离开那个领域一段时间了，所以可以公开谈谈：Uber Eats。

---

### (00:44:06) Jason Droege

**English:**
So when we launched Uber Eats, I looked at the business in terms of being close to the customer. We actually couldn't get a restaurant tour. I knew nothing about this industry. So at Uber, my job was to figure out what other businesses we should get into. And so, we looked at a billion businesses and Uber Eats, food delivery was the one that we thought was most interesting, which turned out to be right so good for us.

**中文翻译:**
当我们启动 Uber Eats 时，我从贴近客户的角度审视了这项业务。我们当时其实接触不到餐厅老板。我对这个行业一无所知。在 Uber，我的工作是弄清楚我们应该进入哪些其他业务。我们研究了无数个业务，Uber Eats（外卖配送）是我们认为最有趣的，事实证明我们选对了，这对我们很有利。

---

### (00:44:26) Lenny Rachitsky

**English:**
Very right.

**中文翻译:**
非常正确。

---

### (00:44:28) Jason Droege

**English:**
And we couldn't get a restaurant tour to help us understand their unit economics. And they'd say like, "Oh, it'd be this percentage or that percentage, or Why do you want to know?" And then we'd go to a different restaurant tour and they would explain it, but they were a little suspicious of why are these Uber guys talking to me about how much my ham costs? And so, what we did is we ordered just a bunch of food from these places, and then we got a restaurant supplier to give us a base catalog, and we just matched up how much does the ham weigh? How much does the cheese weigh? How much does the bread weigh? How many pieces of lettuce were on there? And we tried to actually just compose our own independent view of what's the ingredients cost versus what's the labor cost? And then, we triangulated what was our ground truth, and then what are we being told by restaurant tours, and then what is the site guys telling us about restaurant economics?

**中文翻译:**
我们当时找不到餐厅老板来帮我们理解他们的单体经济模型（Unit economics）。他们会说：“哦，大概是这个百分比或那个百分比，你为什么要问？”然后我们去找另一个老板，他们会解释一下，但他们有点怀疑：为什么这些 Uber 的家伙要跟我谈我的火腿多少钱？于是，我们做的是：从这些地方订了一大堆食物，然后找了一家餐厅供应商给我们一份基础目录，我们逐一比对：火腿多重？奶酪多重？面包多重？上面有多少片生菜？我们试图构建自己独立的视角：食材成本是多少，人工成本是多少？然后我们将我们的“地面真相”（Ground truth）、餐厅老板告诉我们的内容，以及外界关于餐厅经济学的说法进行三角校对。

---

### (00:45:16) Jason Droege

**English:**
And if those things all overlapped, and we're like, okay, we have an insight about what to do here and how does this relate to Uber Eats? Well, what we found as part of this is that roughly a restaurant pays 20 to 30% of every meal to ingredients, and they pay roughly 20 or 30% to labor, and they pay roughly 10% to real estate and a bunch of other, anyway, so goes down the chain. But the important parts is what's the value of incrementality? And so, we came in and we said, "We're going to charge you 30% of the bill." And they were like, "Oh my God, is this group on all over again? This is way too high. Oh my gosh." And we explained the economics to them and they were like, "Okay, we'll give it a try, but this is way too high." And they were right, the real number, the real clearing prices aren't 25%, but we weren't that far off. And so, when you go to find product market fit or be close to the customers, it's a combination of what's the most valuable thing. Well, in a restaurant tours case, give me incremental demand. Because if you were to take a restaurant location and triple demand based on the same labor but you're just scaling ingredients, you've got a 70, 80% incremental gross margin product.

**中文翻译:**
如果这些东西重合了，我们就觉得：好，我们对于该做什么有了洞察。这和 Uber Eats 有什么关系？我们发现，餐厅每顿饭大约支付 20% 到 30% 的食材费，20% 或 30% 的人工费，10% 的房租等等。但关键在于：增量（Incrementality）的价值是什么？于是我们进去说：“我们要收你账单的 30%。”他们说：“噢天哪，又是 Groupon 那套吗？这太高了。”我们向他们解释了经济模型，他们说：“好吧，我们试试，但这真的太高了。”他们是对的，真实的清算价格并不是 25%，但我们离得也不远。所以，当你寻找产品市场匹配（PMF）或贴近客户时，核心是找到最有价值的东西。对餐厅老板来说，最有价值的是“给我增量需求”。因为如果你能让一个餐厅在人工不变的情况下需求翻三倍，只是增加了食材投入，那么你就获得了一个增量毛利率达到 70%、80% 的产品。

---

### (00:46:27) Jason Droege

**English:**
Restaurant tours would hate when we would say this because it doesn't work out exactly like that in reality. But because we had that insight, we had confidence that we could go to market with, we need to charge you this so that the delivery fee can be that. And then, if the delivery fee is that and we charge you this, then we think the consumers will adopt, and that's what you need to get your incremental demand, and then we could pay the driver this. And so, you fit this whole puzzle together without totally satisfying, in the case of a marketplace, you're not totally satisfying any individuals 100% of their needs. What you're satisfying is is you're getting a clearing rate for them to participate in the market in the case of a marketplace. So that's one example.

**中文翻译:**
餐厅老板讨厌我们这么说，因为现实中并不完全是那样。但正因为有了那个洞察，我们才有信心推向市场：我们需要收你这么多钱，这样配送费才能定在那个水平。如果配送费是那个水平，而我们收你这么多，那么我们认为消费者会采用，这就是你获得增量需求所需的，然后我们可以付给司机这么多钱。所以，你把整个拼图拼在了一起，而没有完全满足（在双边市场的情况下）任何个人 100% 的需求。你满足的是：你为他们提供了一个参与市场的清算率。这就是一个例子。

---

### (00:47:07) Lenny Rachitsky

**English:**
Yeah. I love this example as you almost you figure out how to help them with something they don't even fully themselves know yet. So as you think through their goals for them as if you were them, break down the economics and then here's the solution versus, hey, what can we do for you guys?

**中文翻译:**
是的。我喜欢这个例子，因为你几乎是帮他们弄清楚了一些他们自己还没完全意识到的事情。你站在他们的角度思考他们的目标，拆解经济模型，然后给出解决方案，而不是问“嘿，我们能为你们做点什么？”

---

### (00:47:25) Jason Droege

**English:**
Yeah. I mean, if you walked into a restaurant, they would tell you a bunch of things. They would say, "Oh, labor schedule is an issue." They would say, "My rent is an issue." They would say, "All these, my ingredients prices are an issue, that's 20 or 30%." If you could shave off 3% of that, that would be huge. You might then take that and go, "I'm going to go build a business. It's going to save you 10% of your ingredients costs." Well, but that doesn't actually get into their head on what's truly important day-to-day. That might be important for them on an annual basis, but on a daily basis, what are they doing? They're looking at their numbers, they're looking do people show up. Did I make money yesterday? Am I going to make money tomorrow? So the urgency, I think the biggest thing people miss when they're building new products is the urgency of the buyer part of it. You can build something that provides a lot of value, but if it's not the top thing that the customer is thinking about in their busy days, then you're just going to have a long road to a small town.

**中文翻译:**
是的。如果你走进一家餐厅，他们会告诉你一堆事。他们会说：“哦，排班是个问题。”“房租是个问题。”“食材价格是个问题，占了 20% 到 30%。”如果你能帮他们省下 3%，那将是巨大的。你可能会因此想：“我要去创个业，帮你节省 10% 的食材成本。”但这并没有真正触及他们日常最关心的东西。那可能对年度经营很重要，但每天他们都在做什么？他们在看数字，看有没有人光顾。昨天赚钱了吗？明天能赚钱吗？所以，我认为人们在构建新产品时忽略的最大一点是买家的“紧迫感”。你可以构建一个提供巨大价值的东西，但如果它不是客户在忙碌的一天中最先想到的事情，那么你就是在走一条通往小镇的长路（事倍功半）。

---

### (00:48:19) Lenny Rachitsky

**English:**
This touches on just the theme I heard a lot about, this idea of independent thinking and how much you value that, and this feels like a really good example of that. Is there anything else along those lines of just why this way of thinking is so critical?

**中文翻译:**
这触及了我经常听到的一个主题，即“独立思考”以及你对此的重视程度。这感觉就是一个很好的例子。关于为什么这种思维方式如此关键，还有什么补充吗？

---

### (00:48:30) Jason Droege

**English:**
I think as a founder's job, and I mean I stretched that term because at Uber we had all of the benefits of Uber so I wasn't really a founder. I just started the business there. But there are some elements of founding there is you're looking for alpha in the market. When we started our first company in '97, it wasn't that cool. It might've been cool in Silicon Valley, but it was definitely not cool in LA. Now, it's super cool to start a business. So as a result, everyone's trying everything. So how do you get alpha on that market. If your research is highly influenced by what the world is saying around you, you're not going to have an independent insight. You have to go off and do your own thing.

**中文翻译:**
我认为作为创始人的工作（我扩大了这个词的范畴，因为在 Uber 我们享有 Uber 的所有资源，所以我并不算真正的创始人，我只是在那里启动了业务），但其中确实包含创始人的要素，即你在寻找市场中的“超额收益”（Alpha）。当我们 97 年创办第一家公司时，创业并不酷。在硅谷可能很酷，但在洛杉矶绝对不酷。现在，创业超级酷。结果就是，每个人都在尝试每件事。那么你如何在这个市场获得 Alpha？如果你的研究深受周围世界言论的影响，你就不会有独立的见解。你必须走出去，做你自己的事情。

---

### (00:49:14) Jason Droege

**English:**
And this is why from an entrepreneurship standpoint, I have very strong feelings about what the approach to founding a company should be and is probably very particular to me. But it truly is about what insight do I have, because why am I so lucky to have this insight? Why in a world of a million entrepreneurs who are thinking, who are smart, who are trying everything, why am I in the position where I likely have an insight that others do not? And then, why am I the one to do it?

**中文翻译:**
这就是为什么从创业的角度来看，我对创办公司的方法有着非常强烈的看法，这可能对我来说非常特殊。但这确实关乎：我拥有什么洞察？为什么我如此幸运能拥有这种洞察？在这样一个拥有数百万聪明、爱思考、勇于尝试各种事物的创业者的世界里，为什么我能处于一个可能拥有他人所不具备的洞察力的位置？然后，为什么我是那个去做这件事的人？

---

### (00:49:46) Jason Droege

**English:**
And the answer might be I'm in this narrow, far-flung place. The other answer might be, I am inherently a contrarian personality type, so I'm just constantly looking for the thing that's true that people don't believe is true, which sometimes worked. But then, the second part of that's super important, which is why do I want to work on this problem for 5 to 10 years? And people get this wrong all the time. They go and talk to a customer and they go, "They have a problem. I'm going to go solve it." And it's just not a great way to start a business. You really have to have this burning desire to constantly be questioning yourself.

**中文翻译:**
答案可能是我处于这个狭窄、偏远的地方。另一个答案可能是我天生具有逆向思维（Contrarian）的人格类型，所以我一直在寻找那些真实存在但人们不相信的事情，这有时很奏效。但第二部分超级重要，那就是：为什么我想在这个问题上投入 5 到 10 年？人们总是搞错这一点。他们去和客户谈，然后说：“他们有个问题，我要去解决它。”这并不是创业的好方法。你真的必须有一种强烈的渴望，去不断质疑自己。

---

### (00:50:20) Jason Droege

**English:**
The other thing about independent thinking is is that you can't fall in love with your ideas. And I do not proclaim to be the world's greatest thinker for what it's worth, this is what you've been told, but is just part of that is basically throwing away who you are, who you've been, all your ideas for the mission that you're on, which is trying to accomplish something for our customer.

**中文翻译:**
独立思考的另一面是，你不能爱上自己的想法。我并不自诩为世界上最伟大的思想家，不管别人怎么告诉你，这其中的一部分其实是：为了你所承担的使命（即为客户解决问题），基本上要抛弃你是谁、你过去是谁以及你所有的固有想法。

---

### (00:50:43) Lenny Rachitsky

**English:**
This is great. I'm glad you went here. This touches on the other theme I heard often about you is just how high of a bar you set for new businesses. And I think this advice is useful both for founders, as you said, and also people starting companies within companies, new business lines. So you've talked about this a bit already, but is there anything more there, just how high that bar needs to be for it to likely work out when you're starting something new?

**中文翻译:**
太棒了，很高兴你谈到这里。这触及了我经常听到的关于你的另一个主题，即你对新业务设定的标准非常高。我认为这条建议对创始人（如你所说）以及在公司内部启动新业务线的人都很有用。你已经谈到了一些，但关于“当你开始新事物时，标准需要定得有多高才能更有可能成功”，还有什么补充吗？

---

### (00:51:07) Jason Droege

**English:**
Look, if you want to give yourself the best chance, and this isn't always how it works, but if you're in my position 25 plus years in their career, if you want to give yourself the best chance, I think there's two ways that companies end up working out. And the first way, which is probably the most important, quite frankly, is that the founder is just a force of nature over a long duration of time. Because you're going to have to pivot, you have to have that energy to pivot. You have to go years and years and years with it being hard, and that's probably the most important thing.

**中文翻译:**
听着，如果你想给自己最好的机会（虽然现实并不总是如此，但如果你像我一样处于职业生涯 25 年以上的阶段），我认为公司最终成功有两种方式。第一种方式，坦率地说可能是最重要的，就是创始人本身在很长一段时间内就是一股“自然之力”（Force of nature）。因为你必须转型，你必须有转型的能量。你必须在艰难的环境中坚持一年又一年，这可能是最重要的。

---

### (00:51:36) Jason Droege

**English:**
But the second most important thing is that you can easily educate yourself on what are good business models, what are bad business models, what are good markets, what are bad markets? And even if you're this force of nature, having the knowledge, if you're going to go into a bad market with all your energy, you should at least know, maybe ignorance is bliss because you just throw yourself into it and it just works out with time. But that's not how I would operate, which is marketplaces are good businesses. SaaS, at least historically, we'll see how this changes, but SaaS, historically, great businesses, recurring revenue businesses, sticky businesses, network effect businesses.

**中文翻译:**
但第二重要的事情是，你可以很容易地学习什么是好的商业模式，什么是坏的商业模式，什么是好的市场，什么是坏的市场。即使你是一股自然之力，如果你要全身心投入一个糟糕的市场，你至少应该知道这一点。也许无知是福，因为你直接投身其中，随着时间的推移它就成了。但那不是我的运作方式。我的方式是：双边市场（Marketplaces）是好业务。SaaS（至少从历史上看，虽然情况在变）是伟大的业务，是经常性收入业务、高粘性业务、网络效应业务。

---

### (00:52:12) Jason Droege

**English:**
And if you look at what the top VCs invest in, yes, there is a lot of portfolio building, but there are similarities in terms of the types of business models that they believe could be worth tens of billions of dollars. And they have network effects, they have lock-in. They are more valuable at scale, a big scale than low scale. So if you just take a filter on a new business, this is what I did at Uber, which is like if you just have a filtering mechanism on a new business, it doesn't take that long to eliminate the bad ideas. And then, of what's left, you can pick, oh, I'm very passionate about this, even though it might have more problems than this other thing that on paper looks better. And then, you have to have passionate about it. But I think people just miss a basic understanding of what businesses even have a chance of being worth $100 billion.

**中文翻译:**
如果你看看顶级风投投资的项目，是的，虽然有很多投资组合构建，但在他们认为可能价值数百亿美元的商业模式类型方面是有相似之处的。它们具有网络效应，具有锁定效应。它们在大规模时比小规模时更有价值。所以，如果你对新业务设置一个过滤器（这就是我在 Uber 所做的），排除掉坏主意并不需要很长时间。然后在剩下的主意中，你可以挑选：“哦，我对这个非常有激情，尽管它可能比另一个纸面上看起来更好的东西有更多问题。”然后你必须对它充满激情。但我认为人们只是缺乏对“什么样的业务才有机会价值 1000 亿美元”的基本理解。

---

### (00:53:04) Lenny Rachitsky

**English:**
So you launched Uber Eats, you figured out this is the place to go and bet. As an outsider, feels obvious, of course this is going to be a massive success. Of course, food delivery, such a good idea. I know you looked at a ton of ideas in that process. Can you just talk about what you explored and why you ended up picking Uber Eats?

**中文翻译:**
所以你启动了 Uber Eats，你认定这是值得下注的地方。作为一个局外人，这看起来显而易见：当然这会取得巨大成功，外卖配送是个好主意。我知道你在那个过程中研究了大量的想法。你能谈谈你探索过什么，以及为什么最终选择了 Uber Eats 吗？

---

### (00:53:23) Jason Droege

**English:**
I am definitely not the smartest person in the room when it comes to figuring these things out. And so, I keep a very, very wide aperture on ideas for as long as I can until I'm like, okay, everything is coalescing. And I think there's a bunch of reasons why you have to keep an open aperture on considering ideas that might seem bad at the start, but you just keep digging and see if you're right that they're bad or you're wrong. So just as a general philosophical principle, I'll start there. We looked at, we did some crazy stuff. I went walking around San Francisco one day and I looked down Market Street and there was a CVS, a 7-Eleven, a CVS, a Walgreens, a 7-Eleven, and I'm like, "How many SKUs could possibly be inside one of these things that people want and couldn't you just put that into a van and you hit the button on the van and the van comes around and you get whatever convenience items you have, and they're convenience items, so why would that be a problem?"

**中文翻译:**
在弄清楚这些事情方面，我绝对不是房间里最聪明的人。所以我尽可能长时间地对各种想法保持非常开阔的视野，直到我觉得“好，一切都在汇聚”。我认为有很多理由让你必须保持开放的心态去考虑那些起初看起来很糟糕的想法，你只需不断挖掘，看看你认为它们很糟糕是对还是错。所以作为一个普遍的哲学原则，我先从这里开始。我们研究过一些疯狂的东西。有一天我在旧金山散步，看着市场街（Market Street），那里有一家 CVS、一家 7-Eleven、一家 CVS、一家 Walgreens、一家 7-Eleven。我想：“这些店里到底有多少人们想要的 SKU（库存单位）？能不能把它们放进一辆货车里，你按一下按钮，货车就开过来，你就能拿到你想要的便利品？既然是便利品，这会有什么问题吗？”

---

### (00:54:14) Jason Droege

**English:**
And we launched that in DC. We put 10 of these trucks on the road, we put 250 SKUs in them. And I mean, crickets is an understatement of how bad it was. I mean, we couldn't get an order to save our lives. And what we realized was that we hadn't really done the research on what convenience stores really were. It was if you didn't have cigarettes, you didn't have beer, you didn't have Slurpees, you didn't have these things, for example, you didn't bring people in to sell all the other things. So we didn't know anything about retail. We were clueless. So that's one idea. We looked at grocery, but honestly the unit economics just terrified me of all the pick packing and everything like that. I think Instacart did a remarkably good job at getting the unit economics to a good spot and probably the hardest operational problem you could tackle.

**中文翻译:**
我们在华盛顿特区启动了这个项目。我们让 10 辆这样的货车上路，每辆车放了 250 个 SKU。结果，“无人问津”都不足以形容它有多糟糕。我们简直一单都拿不到。我们意识到，我们并没有真正研究便利店到底是什么。如果你没有香烟、没有啤酒、没有思乐冰（Slurpees），你就无法吸引人们进来，进而卖给他们其他东西。我们对零售一无所知，完全是门外汉。这是其中一个想法。我们也研究过杂货配送（Grocery），但坦率地说，分拣包装之类的单体经济模型让我感到恐惧。我认为 Instacart 在将单体经济模型调整到良好状态方面做得非常出色，这可能是你能应对的最难的运营问题。

---

### (00:54:56) Jason Droege

**English:**
We did generalized delivery, point to point delivery, what's now, I forget what Uber's product is called, but Uber Direct I think it's called, where you have something that needs to go point to point in a city. That was a flop from the beginning because the truth is is how consumers don't really have this need, business sort of have this need, and in 2014 when we were doing this, no one had this need. But we tried 15 versions of all these things before we eventually just said, "Okay, the food delivery thing is just popping off on all signals and we can make the unit economics work. People seem to want it. It's a super cool problem because we can enable independent restaurants with all these tools and allow them to compete with the big guys. We can take the real estate out of the equation. So you can have a real estate location that's non-prime, but if you have prime food, then you get to compete." So we're like, "Oh, this is a very interesting problem and we can really help local economies."

**中文翻译:**
我们还做过通用配送、点对点配送，就是现在 Uber 叫 Uber Direct 的那个产品，即在城市里把东西从 A 点送到 B 点。那从一开始就是个失败，因为事实是消费者并没有这种需求，企业可能有，但在 2014 年我们做这件事时，没人有这种需求。在最终决定做外卖之前，我们尝试了这些东西的 15 个版本。最后我们说：“好吧，外卖配送在所有信号上都在爆发，而且我们可以让单体经济模型跑通。人们似乎想要它。这是一个超级酷的问题，因为我们可以用这些工具赋能独立餐厅，让他们能与大公司竞争。我们可以把地理位置因素排除在外。即使你的店址不是黄金地段，但只要你的食物是一流的，你就能参与竞争。”所以我们觉得：“哦，这是一个非常有趣的问题，我们可以真正帮助当地经济。”

---

### (00:55:49) Lenny Rachitsky

**English:**
And this ended up being, if I remember correctly, this basically saved Uber during COVID. Lyft didn't have something like this. And how big is this business at this point? Anything you share about just how important this turned out to be for Uber?

**中文翻译:**
如果我没记错的话，这最终在疫情期间基本拯救了 Uber。Lyft 就没有这样的业务。这项业务现在规模有多大？关于它对 Uber 的重要性，还有什么可以分享的吗？

---

### (00:56:02) Jason Droege

**English:**
Yeah, of course. Well, we launched it in December of 2015 in Toronto and within two hours we had done $20,000 for the sales. It was crazy how quickly we saw that it was the right idea and the unit economics were good. And then, four and a half years later, I was at Uber for about six years, but it took us about a year and a half to figure this out. Four and a half years later, it was about $20 billion. So it was 0 to 20 billion in four and a half years, which is pretty good. Uber was very good at scaling things, but competitive market. Others did well. We beat a lot of people. Some people beat us. And then, now I think it's pushing 80 billion, and that's been for another four and a half years since I left. I think COVID turned it from 20, I left right before COVID, total coincidence, 20 to 50 in a year. So I mean, ride-sharing went this and food delivery just went to Pluto.

**中文翻译:**
是的，当然。我们在 2015 年 12 月在多伦多启动了它，两小时内销售额就达到了 2 万美元。我们非常快地意识到这是一个正确的主意，而且单体经济模型很好。我在 Uber 待了大约六年，但我们花了一年半才弄清楚这个。四年半后，它的规模达到了约 200 亿美元。所以它是四年半内从 0 增长到 200 亿，这相当不错。Uber 非常擅长规模化，但市场竞争很激烈。其他人也做得很好。我们击败了很多人，也有人击败了我们。现在我想它正逼近 800 亿，这是在我离开后的又一个四年半里实现的。我认为疫情让它在一年内从 200 亿变成了 500 亿。我是在疫情前夕离开的，纯属巧合。总之，网约车业务当时跌入谷底，而外卖配送直接冲向了冥王星。

---

### (00:56:52) Lenny Rachitsky

**English:**
What luck. Well done.

**中文翻译:**
运气真好。做得漂亮。

---

### (00:56:55) Jason Droege

**English:**
Luck is part of the game. That's the other thing that's important to realize. Luck is part of the game, so do not begrudge people for luck. This industry is hard. All these things we're doing are really, really hard. Luck is just part of the game.

**中文翻译:**
运气是游戏的一部分。这是意识到这一点很重要的另一件事。运气是游戏的一部分，所以不要嫉妒别人的好运。这个行业很难，我们做的所有这些事情都非常非常难。运气就是游戏的一部分。

---

### (00:57:08) Lenny Rachitsky

**English:**
Maybe speaking that maybe not. One of your colleagues, Stephen Chau, who I am an investor in his new company, he worked with you at Uber Eats for a long time. He told me to ask you about the McDonald's story. I imagine that was just a big milestone, a big moment enough for you guys. So why'd you decide put McDonald's in Uber Eats and there's apparently a story of how you won that deal.

**中文翻译:**
也许是运气，也许不是。你的一位同事 Stephen Chau（我是他新公司的投资者），他曾在 Uber Eats 与你共事很久。他让我问问你关于麦当劳的故事。我猜那对你们来说是一个巨大的里程碑。为什么你决定把麦当劳引入 Uber Eats？据说关于你们如何赢得那笔交易还有一个故事。

---

### (00:57:27) Jason Droege

**English:**
So it was interesting, and this just goes to maybe where sometimes ignorance leads you to accidentally the right answer. So we had launched Uber Eats and Uber had a global footprint and we were the only food delivery network with a global footprint excluding China. Everything at Uber needed to be launched globally. That was a very big part of the culture, et cetera, which is a lot of work and you can spread yourself too thin and cause other problems. But in this way it was good. My vision was, okay, let's help the little guy compete with all these chains. They have these systematized food systems and food is what makes a city amazing. And no one talks about the chain restaurant that they visited in Paris. They talk about the local place that they found and let's be part of that. That's who we want to be.

**中文翻译:**
这很有趣，这正好说明了有时无知会让你意外地得到正确答案。我们启动了 Uber Eats，而 Uber 拥有全球足迹，我们是除中国以外唯一拥有全球足迹的外卖网络。在 Uber，所有东西都需要在全球范围内推出。那是文化中非常重要的一部分，虽然工作量巨大，可能会让你精力分散并导致其他问题。但在这种情况下，它是件好事。我的愿景是：好吧，让我们帮助小商家与这些连锁店竞争。连锁店有系统化的食品体系，但食物才是让城市变得神奇的原因。没人会谈论他们在巴黎去过的连锁餐厅，他们谈论的是他们发现的当地小店。我们想成为其中的一部分，那是我们的定位。

---

### (00:58:17) Jason Droege

**English:**
And McDonald's actually approached us and they said, "Hey, we'd love to do food delivery with you." And I said, "No." And they're like, "Hold on a second. We have 80 million consumers a day. You don't want to do this together?" I'm like, "It's not really our vibe right now." And so, I pushed them off for four or five months until my team is like, "You're insane. These people are going to put marketing behind it. They really want to do this. They want to lean in." So we actually had, because of that, I think it's hard to correlate these things, we ended up with this exclusive relationship with them, got an insane number of customers of... Chains at this point actually weren't really on food delivery networks because everybody was so worried about the unit economics, because they're so sensitive to the basket size.

**中文翻译:**
麦当劳其实主动找过我们，说：“嘿，我们想和你们合作外卖。”我说：“不。”他们说：“等一下，我们每天有 8000 万消费者，你不想合作吗？”我说：“这不太符合我们现在的调性。”于是我推掉了他们四五个月，直到我的团队说：“你疯了。这些人会投入营销资源，他们真的很想做这个，想全力以赴。”所以实际上，正因为如此（虽然很难说这些事情之间有必然联系），我们最终与他们建立了独家合作关系，获得了惊人数量的客户。当时连锁店其实并没有真正进入外卖网络，因为大家都非常担心单体经济模型，因为连锁店对客单价（Basket size）非常敏感。

---

### (00:59:00) Jason Droege

**English:**
And my approach was like, eh, figure it out, which is a very Uber culture thing. Okay, the basket's $17, it's our job to make that work, reduce the radius on the delivery, figure out the economics, maybe mark up some of the food someplace. There's always a way to figure it out. So we did it and then three months later the business just started hockey sticking again at a different level. And my team is just like, "Dude, you were so stubborn on this point," but I think it actually ended up being in net benefit because we got a great deal with them.

**中文翻译:**
而我的方法是：“额，想办法解决它”，这非常符合 Uber 的文化。好吧，客单价是 17 美元，我们的工作就是让它跑通：缩小配送半径、计算经济账、也许在某些地方提高一点食物价格。总有办法解决的。于是我们做了，三个月后，业务又开始以另一种水平呈“曲棍球棒”式增长。我的团队就说：“伙计，你在这点上太固执了。”但我认为这最终带来了净收益，因为我们和他们谈成了一笔非常棒的交易。

---

### (00:59:34) Lenny Rachitsky

**English:**
So the fact that you pushed him out helped you get a better deal is what I'm hearing. That's amazing.

**中文翻译:**
所以我听到的是，你把他们往外推反而帮你拿到了一笔更好的交易。太神奇了。

---

### (00:59:37) Jason Droege

**English:**
Yeah, I think that's the story he would be referencing. And then, the onboarding of it was crazy because we basically went global with them in six months, and at this point the business was less than two years old. So activating this, I don't even know, an 80-year-old company that expects processes to be in place and we have two of our office managers in New York managing it. It's just mayhem.

**中文翻译:**
是的，我想这就是他指的那个故事。然后，入驻过程非常疯狂，因为我们基本上在六个月内就和他们一起推向了全球，而当时我们的业务还不到两岁。要激活这样一家（我甚至不知道）有着 80 年历史、期望流程完备的公司，而我们当时只有两个在纽约的办公室经理在管理这件事。简直是一团乱麻。

---

### (01:00:04) Lenny Rachitsky

**English:**
I'm still sad In-N-Out is still not on any of these apps.

**中文翻译:**
我还是很遗憾 In-N-Out 还没上任何这些应用。

---

### (01:00:12) Lenny Rachitsky

**English:**
You've touched on this idea of gross margins and margins, how obsessed you are with this. I wanted to spend a little time on here. I've heard just you're obsessed with understanding gross margins before going in on anything. Most founders have no idea what they're doing here. What have you learned about just what people should be paying attention to, what they might be forgetting when they think about just the feasibility of a business?

**中文翻译:**
你提到了毛利率（Gross margins）的概念，以及你对此有多么痴迷。我想在这里多花点时间。我听说你在投入任何事情之前都痴迷于理解毛利率。大多数创始人根本不知道自己在做什么。关于人们应该关注什么，以及在思考业务可行性时可能会遗忘什么，你学到了什么？

---

### (01:00:33) Jason Droege

**English:**
Yeah, look, it's one filter like many filters. There are certainly businesses that have low gross margins that are great businesses. Costco, Walmart, et cetera. Amazon talks about this all the time of there's companies that increase prices and there's companies at lower prices. But I would say that by and large, high gross margins combined with healthy churn curves are a very healthy sign for the business. I mean, think about it. If I were to sell you something and I can't mark it up a lot, how much value am I adding beyond what's in my hand? And if I'm not adding that much value, then what am I in the business of doing? And I'm in business of adding value.

**中文翻译:**
是的，听着，这只是众多过滤器中的一个。当然也有一些毛利率很低但非常伟大的业务，比如 Costco、沃尔玛等。亚马逊也总在谈论：有的公司靠涨价赚钱，有的公司靠降价赚钱。但我会说，总的来说，高毛利率结合健康的流失率（Churn curves）是业务非常健康的信号。我的意思是，想想看：如果我卖给你一个东西，但我不能加价很多，那么除了我手里的实物之外，我还增加了多少价值？如果我没有增加那么多价值，那我是在做什么生意？我的生意应该是增加价值。

---

### (01:01:26) Jason Droege

**English:**
It's not quite that simple. This is just a litmus test of when someone comes to me and they go, especially in a new business, and we deal with this. I dealt with this at Uber, I've dealt with it everywhere. Someone comes up with an idea and they go, "We can get into this business and I think we can charge this and it'll get us to a 40% gross margin." And then, my next question is start at a 60% gross margin. Why does that not work? And they go, "Oh, well, the customer..." And immediately, you short circuit to what the real problem is. Oh, the customer has an alternative. Oh, okay, well who's the alternative? Oh, it's some offshoring company. Well, what's their gross margin? Oh, we don't know. You go find out. It's like 20% and they've been around for a long time and they have scaled operations. And you're like, okay, so your gross margin is going to go from 40 to 20 quicker than you think, and you're going to be in a world of hurt unless you do something to differentiate.

**中文翻译:**
事情没那么简单。这只是一个试金石。当有人带着一个想法来找我（特别是在新业务中，我在 Uber 处理过，在任何地方都处理过），他们说：“我们可以进入这个业务，我觉得我们可以收这么多钱，这能让我们达到 40% 的毛利率。”然后我的下一个问题是：“从 60% 的毛利率开始。为什么行不通？”他们会说：“哦，那个，客户……”然后你立刻就能直达真实的问题所在。哦，客户有替代方案。好，替代方案是谁？哦，是某家离岸外包公司。那他们的毛利率是多少？哦，不知道。你去查查。结果是 20%，而且他们已经存在很久了，有规模化运营。于是你会发现：好吧，你的毛利率会比你想象中更快地从 40% 降到 20%，除非你做一些差异化的事情，否则你会陷入困境。

---

### (01:02:06) Jason Droege

**English:**
So I take gross margin is just a very coarse instrument, not a perfect instrument to think about, am I adding enough value? Am I differentiated? It's not perfect, but it's a very quick short circuit filter to even to see if someone's pitching you an idea, have they thought through this dynamic? Because if the response is gross margin is super low right now, but here's the dynamic I'm going after. And then you're like, "Oh, okay." And sometimes it's like, we'll just make it up with volume and then the gross margin will go negative for a while and you're like, "Wait, this doesn't work."

**中文翻译:**
所以我认为毛利率只是一个非常粗略的工具，不是完美的工具，用来思考：我是否增加了足够的价值？我是否有差异化？它不完美，但它是一个非常快速的短路过滤器，甚至可以用来观察：当有人向你推销一个想法时，他们是否考虑过这种动态？因为如果回答是“现在的毛利率超级低，但我追求的是这样的动态”，那你就会觉得“哦，好吧”。有时回答是“我们会靠销量补回来”，然后毛利率会有一段时间是负的，你就会觉得“等等，这行不通”。

---

### (01:02:35) Lenny Rachitsky

**English:**
So what I love about this is just a lens into is my idea good enough if studying, can I keep a high gross margin? Is there a reason why people in this space haven't been able to have a higher margin?

**中文翻译:**
我喜欢这一点，它提供了一个视角：如果研究一下，我的想法是否足够好到能保持高毛利率？这个领域的其他人无法获得更高利润是有原因的吗？

---

### (01:02:48) Jason Droege

**English:**
Yeah, exactly. And like I said, it's meant to disqualify just you're doing these large for larger companies and everybody has ideas. And so, it's a way to cut through. Do you understand the machine that is going to need to be in place in two or three years? You might have a 70% gross margin now because the next question is why can't someone else do this? And if you have an answer of like, "Well, they can now, but they can't in two years, if we run really fast." Okay, we might have something. If they can now and they will be able to in two years, you're going to have margin compression.

**中文翻译:**
是的，没错。就像我说的，这旨在排除掉那些不靠谱的想法。在大型公司里，每个人都有想法。所以这是一种切入方式：你理解两三年后需要建立起来的那套机制吗？你现在可能有 70% 的毛利率，但下一个问题是：为什么别人不能做这个？如果你回答：“嗯，他们现在能做，但如果我们跑得够快，两年后他们就做不了了。”好吧，那可能有点戏。如果他们现在能做，两年后也能做，那么你就会面临利润压缩。

---

### (01:03:29) Lenny Rachitsky

**English:**
Along these lines I was just listening to, I think it was the a16z podcast. Alex Rampell I think was sharing this story about Costco, how as you said, their strategy is actually to keep margins very, very low because all their revenue comes from their membership. So they have something like 50 million members paying 100 bucks a month and that's their entire business. And so, they don't plan and they don't want to make money off the products.

**中文翻译:**
说到这里，我最近刚听了 a16z 的播客。我想是 Alex Rampell 分享了关于 Costco 的故事。正如你所说，他们的策略实际上是保持极低的利润率，因为他们所有的收入都来自会员费。他们有大约 5000 万会员，每月支付 100 美元，这就是他们的全部业务。所以，他们不打算也不想从产品上赚钱。

---

### (01:03:55) Jason Droege

**English:**
Yeah, that's right. I mean, they're playing a slightly different game, not an expert on Costco, have spent some time with the company, but they use price as a way to get to scale. And so, they're basically saying if we discount, same with Walmart, we will get so much volume that we will just take the air out of the room for all of our competition. And so, then the question of, okay, so if you have a low gross margin today, in two or three years, once you land one of these centers in a market, why won't your margins to get eroded? The answer is because we will have already absorbed all of the demand. You try to go to 8% versus 10% gross margin, which I roughly think is what their gross margin is. That's going to be a really hard business. If you already have a habit with a customer, they have already built their weekly trips around you, you already have relationships with suppliers, you already have general managers that know how to stock inventory, that's not a straightforward exercise. So they're first to scale and then good luck competing with them.

**中文翻译:**
是的，没错。我的意思是，他们在玩一种略有不同的游戏。我不是 Costco 的专家，但花时间研究过这家公司。他们把价格作为达到规模的一种手段。他们基本上是在说：如果我们打折（沃尔玛也是如此），我们将获得巨大的销量，从而让所有竞争对手都无路可走。所以问题变成了：好吧，如果你今天的毛利率很低，两三年后，一旦你在某个市场落地了这些中心，为什么你的利润不会被侵蚀？答案是：因为我们已经吸收了所有的需求。你想尝试 8% 的毛利率去对抗 10% 的毛利率（我大致认为那是他们的毛利率），那将是一门非常艰难的生意。如果你已经让客户养成了习惯，他们已经围绕你建立了每周的行程，你已经与供应商建立了关系，你已经有了知道如何管理库存的总经理，那可不是一个简单的过程。所以他们先达到了规模，然后祝那些想和他们竞争的人好运。

---

### (01:04:49) Lenny Rachitsky

**English:**
Okay. Just a couple more questions. One is there this term that I've heard that you often say and believe in is this idea of not losing is a precursor to winning.

**中文翻译:**
好的，还有最后几个问题。其中一个是，我听说你经常说并坚信的一个观点是：“不输是赢的前提”。

---

### (01:05:03) Jason Droege

**English:**
Yes, yes. Tech is a culture where portfolios are built by investors, and a lot of the narrative is controlled by investors frankly. Founders obviously participate, but this idea that you should just go for it is consensus. Just go for it. Who cares? Well, I don't know, if it's my life and I only have one moment to take a shot, I might want to just not just go for it. I might want to think for a little bit, and I think the best entrepreneurs, I have no data to back this up, but just these are my friend, this is my friend group. I think the best entrepreneurs and the best business owners look at the risk profile of the decisions that they're making and they try to make asymmetrically positive decisions all along the way.

**中文翻译:**
是的，没错。科技界是一种由投资者构建投资组合的文化，坦率地说，很多叙事是由投资者控制的。创始人当然也参与其中，但“你应该放手一搏”这种想法是共识。放手去做吧，谁在乎呢？但我不确定，如果这是我的人生，而我只有一次出手的机会，我可能不想只是“放手一搏”。我可能想思考一下。我认为最好的企业家（我没有数据支持，但这只是我的朋友圈观察），最好的企业家和企业主会审视他们所做决策的风险状况，并尝试在整个过程中做出“非对称正面”（Asymmetrically positive）的决策。

---

### (01:05:51) Jason Droege

**English:**
And so, oftentimes I feel like we forget about the risk of a decision, and there's more to unpack there because I actually think taking highly risky decisions and then having it work out is a weird cultural thing too, because then how do you train people to do that? Because it's a very hard thing to take high risk decisions and be right enough because it creates a lot of volatility. But it goes back to my comment about the most important thing in founders, which is just this ability to persevere through. Survival is just part of the game, and most people just give up before they get their timing right, before they get the right insight with the customer before they get the right product in the market. And life can change quickly in tech. You can go from being a dog to being a hero in a very short period of time, but you're on this very, very long journey, but you have to survive for that condition to be met.

**中文翻译:**
所以，很多时候我觉得我们忘记了决策的风险。这里还有很多可以挖掘的，因为我实际上认为，做出高风险决策然后成功，这也是一种奇怪的文化现象，因为你如何训练人们去做那件事？做出高风险决策并保持足够的正确率是非常难的，因为它会产生巨大的波动。但这又回到了我关于创始人最重要特质的评论，即：坚持到底的能力。生存只是游戏的一部分，大多数人在时机成熟之前、在获得正确的客户洞察之前、在把正确的产品推向市场之前就放弃了。在科技界，生活变化很快。你可以在很短的时间内从丧家之犬变成英雄，但你正处于一段非常、非常漫长的旅程中，你必须生存下来才能等到那个条件的达成。

---

### (01:06:38) Jason Droege

**English:**
And so, then the question is is when you're in a hype cycle, I would argue that we are right now, everyone wants to go for it and then go for it more and then go for it more and go for it more and you don't realize, guys, all of our customers are going to be around in five years. They just want us to solve their problems. We have to be around to solve their problem for them. And so, survival is a precursor to that. So let's not put ourselves in position that could potentially compromise the enterprise along the way. It doesn't mean don't take risks, but think about how you calculate it.

**中文翻译:**
所以，问题在于，当你处于炒作周期中（我认为我们现在就是），每个人都想放手一搏，然后再搏，再搏。但你没意识到，伙计们，我们的客户五年后还会在这里，他们只是想让我们解决他们的问题。我们必须还在，才能为他们解决问题。所以，生存是那一切的前提。所以，不要让我们陷入可能在过程中危及企业的境地。这并不意味着不冒险，而是要思考你如何计算风险。

---

### (01:07:10) Lenny Rachitsky

**English:**
I love how clear it is that this lesson and many of the lessons along these lines have come from just failure and things not working out and things breaking, which is the best outcome.

**中文翻译:**
我喜欢这种清晰感：这个教训以及许多类似的教训都来自于失败、事情进展不顺以及东西坏掉，而这往往是最好的结果。

---

### (01:07:19) Jason Droege

**English:**
If you ever get on the other side of a high reward, high risk decision, it is so painful because you are just cooked. You are done, and often there's no way out.

**中文翻译:**
如果你曾经站在高回报、高风险决策的对立面（失败了），那是极其痛苦的，因为你彻底完了。你玩完了，而且通常没有退路。

---

### (01:07:32) Lenny Rachitsky

**English:**
Is there a story along those lines that comes to mind or an example of that?

**中文翻译:**
有没有什么相关的经历或例子浮现在脑海中？

---

### (01:07:35) Jason Droege

**English:**
Well, this is where it is together on why I try to be so I think you can spend a little bit of time thinking upfront to save yourself a lot of pain downstream. I had this business not worth detailing it, but after the bubble burst in 2001, I'm like, "I'm going to self-fund a business. I'm going to build a profitable business. I want to prove that I can do this." And we had started Scour, which had all the things we talked about. And so, what I did is I'm like, I was a golfer and frankly, there was nothing to do in tech. So I started selling golf clubs on the internet and I was making real money and I might've learned more from this business than any other because I started on eBay and I was 22, and I didn't really understand that my margins would come down because anyone can do this, but I was one of the first ones to do it, so I was making a ton of money and then I built this business and then I just failed to recognize I had a lot of hubris. I was like, "Oh, if I could just buy all the used golf clubs in America, I can be the market maker for prices," and don't people do that?

**中文翻译:**
这就是为什么我努力做到……我认为你可以花一点时间在前期思考，以省去后期大量的痛苦。我曾有过一个业务，不值得细说，但在 2001 年泡沫破裂后，我想：“我要自筹资金做一个业务，我要建立一个盈利的业务，我想证明我能做到。”当时我们已经创办了 Scour，经历了我们谈到的所有事情。于是我做了什么呢？我当时是个高尔夫球手，坦率地说，当时科技界没什么可做的。所以我开始在网上卖高尔夫球杆，我赚到了真金白银。我从这个业务中学到的可能比其他任何业务都多，因为我 22 岁就开始在 eBay 上卖。我当时并不真正理解我的利润率会下降，因为任何人都能做这个，但我由于是第一批做的人之一，所以赚了很多钱。然后我建立了这个业务，但我没意识到我当时非常傲慢。我想：“哦，如果我能买下全美国所有的二手高尔夫球杆，我就能成为价格的做市商（Market maker）。”难道人们不都是这么做的吗？

---

### (01:08:34) Lenny Rachitsky

**English:**
I love this ambition. That's great.

**中文翻译:**
我喜欢这种雄心壮志，太棒了。

---

### (01:08:36) Jason Droege

**English:**
And it's just like it's madness to actually think about the practicality of that. And so, I just didn't spend the time thinking and then I ended up in this business. The business was profitable, it got to a couple million of revenue, whatever, paid me a dividend for a while, but it was painful the entire way.

**中文翻译:**
现在想想，考虑那件事的可行性简直是疯了。所以我当时就是没花时间思考，然后就陷入了这个业务。业务是盈利的，达到了几百万美元的收入，给我发了一段时间的分红，但整个过程都非常痛苦。

---

### (01:08:51) Lenny Rachitsky

**English:**
I love the spectrum of experiences you've had. You've sold golf clubs, you're helping achieve AGI, you could say. There's also a whole part of your career. We haven't talked about where you built tasers and body cams and drones and all these things. Also, peer-to-peer file sharing before anyone else. Final topic I just want to spend a little time on based on this experience is hiring and building teams, something that I know you have a really strong take on. That I've been hearing a lot on this podcast recently is this idea of it's more important to build the right team than find the most optimal top talent. Talk about that, why that's so interesting and important.

**中文翻译:**
我喜欢你丰富的经历光谱。你卖过高尔夫球杆，现在可以说是在帮助实现 AGI。你职业生涯中还有一部分我们没谈到，你做过泰瑟枪（Tasers）、执法记录仪、无人机等等。还有在所有人之前做点对点文件共享。基于这些经验，我想花点时间聊聊最后一个话题：招聘和团队建设。我知道你对此有非常强烈的看法。我最近在播客中经常听到一个观点：建立正确的团队比寻找最顶尖的人才更重要。谈谈这个，为什么这如此有趣且重要？

---

### (01:09:31) Jason Droege

**English:**
As of late, I've developed a more nuanced view of this, which is for certain roles, you absolutely need the right experience in this current market. You see this with researchers, because the market's moving so fast, you don't have time to train up some people, so you actually have to go find people either who have the right relationships with customers that you want to get or you have to, who might not check other boxes but are awesome at that, might not check the classic boxes that I think you're referencing of they're a problem solver, they can grow with the company, they have a high trajectory, et cetera. I would say that's 5% of the roles in the company, but very important whenever speed to market is important.

**中文翻译:**
最近，我对这个问题有了更细致的看法：在当前市场下，对于某些职位，你绝对需要正确的经验。你在研究人员身上就能看到这一点，因为市场变化太快，你没有时间去培训新人。所以你必须去找那些要么拥有你想要的客户关系的人，要么在某些方面极其出色的人，尽管他们可能不符合你提到的那些经典标准（比如解决问题的能力、与公司共同成长的潜力、高成长轨迹等）。我会说这占公司职位的 5%，但在市场速度至关重要时，这非常关键。

---

### (01:10:09) Jason Droege

**English:**
And then, for interviewing, I just interview for three things and I have to interview across all kinds of expertises, which is hard. I can't be an expert in everything. And so, I reduce it down to just three things, which is like, are you a curious problem solver and can you articulate that verbally? Can you work across people? Are you humble enough to work across and are you a good leader? And if you just do those three things, I think you have a pretty high chance of success, at least in an organization that I'm running, because the world's changing. So you do need people that are adaptable. So all the experience is not necessarily one-to-one relevant.

**中文翻译:**
至于面试，我只考察三件事，而且我必须跨越各种专业领域进行面试，这很难，我不可能在所有领域都是专家。所以我把它简化为三点：你是一个好奇的问题解决者吗？你能口头表达清楚吗？你能跨部门协作吗？你是否足够谦逊去协作？你是一个好的领导者吗？如果你能做到这三点，我认为成功的概率很高，至少在我领导的组织中是这样。因为世界在变，你确实需要适应能力强的人，所以所有的经验并不一定是一对一相关的。

---

### (01:10:53) Jason Droege

**English:**
And then, the working across to your team point, this actually came up at Uber Eats. So when I was building the Uber Eats management team, I'm not sure if this was mentioned to you from that group, but whenever I would hire people, I was trying to compose almost like an organism of strengths and then minimize the conflicts. That management team for the most part outside of some of the operations side, but for the most part, that management team was the same management team from day one when we had nothing to $20 billion. I just believed that the team, knowing each other's strengths and weaknesses and being able to compensate for each other was more important than the classic advice you get around, "Well, that person hasn't seen this much scale." And you're like, "Well, yeah, but can they learn it?" I learned it. So you do have to kind of believe in people a little bit, which is my job, not necessarily their job. And so, I mean, these are people systems. They're not straightforward rules-based things you can apply.

**中文翻译:**
关于你提到的团队协作点，这在 Uber Eats 时就出现过。当我组建 Uber Eats 管理团队时（我不确定那个团队的人是否向你提过），每当我招聘时，我都在尝试构建一个像有机体一样的优势组合，并尽量减少冲突。那个管理团队的大部分成员（除了运营端的一些变动），从我们一无所有到做到 200 亿美元规模，基本上是同一批人。我坚信，团队成员了解彼此的优缺点并能互相弥补，比那些经典的建议（比如“那个人没见过这么大的规模”）更重要。你会想：“好吧，但他们能学吗？”我也学到了。所以你必须在某种程度上相信人，那是我的工作，不一定是他们的工作。我的意思是，这些是人的系统，不是你可以套用的简单规则。

---

### (01:11:49) Lenny Rachitsky

**English:**
And I especially love this advice because there's all this talk about what skills will matter in this world of AI doing all our jobs, and it feels like these three buckets are maybe the same thing, just are they good at solving problems? Are they good leaders? Can they collaborate well with other people?

**中文翻译:**
我特别喜欢这条建议，因为现在有很多关于“在 AI 取代我们工作的世界里，哪些技能更重要”的讨论。感觉这三个维度可能就是核心：他们擅长解决问题吗？他们是好的领导者吗？他们能与他人良好协作吗？

---

### (01:12:02) Jason Droege

**English:**
Yeah, I don't think that the core rise of humanity, it will change, and I think that these things are pretty core to how humans have been successful for a long time.

**中文翻译:**
是的，我不认为人类的核心优势会改变，我认为这些东西长期以来一直是人类成功的核心。

---

### (01:12:11) Lenny Rachitsky

**English:**
Speaking of that, I'm going to take us to a recurring segment of this podcast that I call AI Corner, where I ask folks this question, what's some way that you've found a use for AI in your day-to-day life in your work that makes you more effective, get more done, get better stuff done?

**中文翻译:**
说到这，我要进入播客的一个固定环节，我称之为“AI 角落”。我会问嘉宾：在日常生活或工作中，你发现了哪些使用 AI 的方式，能让你更高效、完成更多工作或做出更好的成果？

---

### (01:12:28) Jason Droege

**English:**
Honestly, when I came into Scale, so my history was in consumer and I've done some application level stuff with government, and this space is moving so quickly. AI is my, I use it as a tutor. As these new concepts come up, I have a lot of people in the company who can educate me on the nuances of the technicals of all of, excuse me, the technical nature of the data and the products, but they only have so much time. And honestly, there's new concepts coming up all the time and I need to stay on top of it.

**中文翻译:**
老实说，当我加入 Scale 时（我的背景主要是消费端，也做过一些政府层面的应用），这个领域发展得太快了。AI 是我的……我把它当成导师。当新概念出现时，公司里虽然有很多人可以教我关于数据和产品的技术细节，但他们的时间有限。而且说实话，新概念层出不穷，我需要紧跟形势。

---

### (01:13:01) Jason Droege

**English:**
So it might sound crazy, but a large percentage of my job is not dealing with the engineering issues related to AI. I'm managing an organization, but I love understanding it. It's one of the most enjoyable, rewarding parts of my job is to learn from all these AI researchers, but they don't always have the time to do it, so I use it as a tutor. I turn on voice mode and talk to it on my way into work. So I think that's probably the most impactful thing that I use it for that's also relevant to this topic.

**中文翻译:**
所以这听起来可能很疯狂，但我工作的很大一部分并不是处理与 AI 相关的工程问题，而是在管理一个组织。但我喜欢理解它。向所有这些 AI 研究人员学习是我工作中最高兴、最有成就感的部分之一，但他们并不总是有时间教我，所以我把 AI 当作导师。我在上班路上开启语音模式和它交谈。我认为这可能是我使用 AI 最有影响力的方式，也与这个主题相关。

---

### (01:13:32) Lenny Rachitsky

**English:**
I do exactly the same thing, especially when I'm prepping for this podcast. What exactly is this? I think about when you say this, I did an interview with the founders of Perplexity a few years ago asking about how they work at Perplexity, and the founders said that before, they were ruled, before they ask a question of anyone on the team, they have to ask AI first. And I was just like, "That's crazy." Now, it's so obvious. But back then, I was like, "That's an insane way of working. I've never heard of this before." Just a sign of how ahead of the curve they were.

**中文翻译:**
我也做完全一样的事情，特别是在为播客做准备时。我会问：“这到底是什么？”当你这么说时，我想起几年前我采访 Perplexity 的创始人，问他们在 Perplexity 是如何工作的。创始人说，他们有一条规则：在向团队中的任何人提问之前，必须先问 AI。我当时觉得：“这太疯狂了。”现在看来，这理所当然。但在当时，我觉得：“这是一种疯狂的工作方式，我以前从未听说过。”这正说明了他们当时领先于时代。

---

### (01:14:04) Jason Droege

**English:**
Yeah, I think number two would be I'll take internal documents and I'll ask, what's the most important thing in this document? And I'm shocked, and then I'll read it and just double check, but I'm shocked at how good it is at just pulling out. There's so much in organizations that is like, I don't know what you want me to say and I don't know what I need to know, but we each have our own agendas, and so this matching of, and so then there's this huge broadcast problem where it's like, of all of the information you might want to receive, what's actually important to you? And so, I use it a lot for that too.

**中文翻译:**
是的，我想第二点是：我会把内部文档丢给它，问：“这份文档中最重要的事情是什么？”我很惊讶（然后我会读一遍核对），它在提取重点方面做得非常好。组织内部有太多信息，每个人都有自己的议程，所以存在巨大的“广播问题”：在所有你可能收到的信息中，哪些对你真正重要？所以我也会经常用它来处理这个。

---

### (01:14:39) Lenny Rachitsky

**English:**
Amazing. That's a really good tip. I use it for legal documents, just like what do they know about what they're trying to do here for me or against me? Jason, is there anything else you wanted to share or leave listeners with, maybe double down on a point before we get to a very exciting lightning round?

**中文翻译:**
太棒了，这是一个很好的建议。我用它处理法律文件，比如：“他们在这里想对我做什么有利或不利的事情？”Jason，在进入精彩的闪电轮提问之前，你还有什么想分享或留给听众的吗？或者想再次强调某一点？

---

### (01:14:54) Jason Droege

**English:**
Yeah, absolutely. I mean, I think the really important, the reason why I'm doing this, the reason why want to spend time here outside of wanting to be on the show for a while and being a long-term listener is, our long-time listener, excuse me, is there's a lot of amazing work going on at Scale. The teams are working super hard, we're delivering a ton of value for our customers. The public narrative has not represented the work that the people here are doing and the work that our customers are doing with what we're doing for them. And I just think that deserves the respect and reward that all those people are putting in, and we'd like people to know that.

**中文翻译:**
是的，当然。我想真正重要的一点是（也是我来这里的原因，除了我长期以来一直是这个节目的忠实听众外）：Scale 正在进行大量了不起的工作。团队工作非常努力，我们为客户提供了巨大的价值。公众的叙事并没有真实反映这里的人们所做的工作，以及我们的客户利用我们为他们提供的东西所做的工作。我认为所有这些人的付出值得被尊重和回报，我们希望人们知道这一点。

---

### (01:15:34) Lenny Rachitsky

**English:**
I appreciate you saying all that. With that, we've reached our very exciting lightning round. We've got five questions for you. You ready?

**中文翻译:**
感谢你分享这些。那么，我们进入了非常精彩的闪电轮环节。我有五个问题要问你。准备好了吗？

---

### (01:15:38) Jason Droege

**English:**
Yeah, let's go for it.

**中文翻译:**
好，来吧。

---

### (01:15:39) Lenny Rachitsky

**English:**
What are two or three books that you find yourself recommending most to other people?

**中文翻译:**
你最常向别人推荐的两三本书是什么？

---

### (01:15:44) Jason Droege

**English:**
Some of this is going to sound interesting. The Selfish Gene is one of my favorite books.

**中文翻译:**
有些听起来可能很有趣。《自私的基因》（The Selfish Gene）是我最喜欢的书之一。

---

### (01:15:48) Lenny Rachitsky

**English:**
Love that book. I don't know if anyone's ever mentioned, it was one of the most influential books for me too. So sorry, keep going.

**中文翻译:**
我也喜欢那本书。我不确定是否有人提到过，它对我来说也是最有影响力的书之一。抱歉，请继续。

---

### (01:15:54) Jason Droege

**English:**
Yes. I think Selfish Gene. Road Less Traveled, I've read more than once. I mean, it's just one of the classic human psychology book. And then, I think in business, I think Good to Great. It's not the read that you're going to be most excited to enjoy on a vacation, but it's pretty much right, and I think we should take advice from people who have analyzed these business problems before because not a lot's changed, but we keep acting like everything's changed.

**中文翻译:**
是的，我想是《自私的基因》。还有《少有人走的路》（Road Less Traveled），我读过不止一遍，它是经典的人类心理学书籍。在商业方面，我认为是《从优秀到卓越》（Good to Great）。它不是那种你在度假时会兴奋阅读的书，但它说得基本没错。我认为我们应该听取那些分析过这些商业问题的人的建议，因为很多东西并没变，但我们总表现得好像一切都变了一样。

---

### (01:16:24) Lenny Rachitsky

**English:**
What's crazy about that book, you look at all the companies they talk about, I haven't read in a while, but just the whole book is about companies that last, I believe, or maybe that's the other book, I don't know. But anyway, all the companies that they talk about, I don't know if they're still around. It's so hard for a business to last a long, long time.

**中文翻译:**
那本书疯狂的地方在于，你看看他们谈论的所有公司（我很久没读了，但整本书都在讲长青的公司，或者那是另一本书，我记不清了）。总之，他们谈论的所有公司，我不知道现在还有多少在。一家企业要维持很长很长时间真的太难了。

---

### (01:16:38) Jason Droege

**English:**
I would also recommend Thinking Slow and Fast, that's the... Yes.

**中文翻译:**
我还推荐《思考，快与慢》（Thinking, Fast and Slow），那是……是的。

---

### (01:16:43) Jason Droege

**English:**
Thinking, Fast and Slow. Excuse me, sorry. It's been like a decade since I read it, but just in terms of point there being human biases are very important to understand.

**中文翻译:**
《思考，快与慢》。抱歉，我读它已经是十年前的事了，但核心观点是：理解人类的偏见非常重要。

---

### (01:16:51) Lenny Rachitsky

**English:**
What's really crazy to me about that book and Kahneman in general, someone asked them just, how's your life been impacted by learning all these biases humans have? He's like, "Not much. I have the same biases. Knowing them doesn't really help me avoid them."

**中文翻译:**
关于那本书和卡尼曼（Kahneman），让我觉得疯狂的是，有人问他：了解了人类拥有的所有这些偏见后，你的生活受到了什么影响？他说：“没多大影响。我还是有同样的偏见。知道它们并不能真正帮我避免它们。”

---

### (01:17:05) Jason Droege

**English:**
See, I find myself checking myself. Whenever I get super convicted on something now I will be like, okay, what is the list of things that I'm inclined to do to try to catch myself? Because I think we're most inclined to have these bad decisions impulsively, which is what I think the book is largely about. I mean, it's a long book.

**中文翻译:**
但我发现我会自我检查。每当我非常确信某件事时，我会想：好吧，我倾向于做的那些事情清单是什么，我得试着抓住自己。因为我认为我们最容易冲动地做出错误的决定，我想这就是那本书的主要内容。那是一本很厚的书。

---

### (01:17:28) Lenny Rachitsky

**English:**
So long. Oh, my God. It feels like that's where AI can help us in the future. Just like, "Hey, Jason, are you sure this isn't framing a fact or whatever?"

**中文翻译:**
太长了，天哪。感觉这就是 AI 未来可以帮助我们的地方。就像：“嘿，Jason，你确定这不是在先入为主吗？”

---

### (01:17:38) Lenny Rachitsky

**English:**
Okay. Next question. Do you have a favorite recent movie or TV show that you've really enjoyed?

**中文翻译:**
好，下一个问题。你最近有没有特别喜欢的电影或电视剧？

---

### (01:17:43) Jason Droege

**English:**
Most of the movies I watch are with my kids, so I wish I had something deep and profound.

**中文翻译:**
我看的电影大多是陪孩子看的，所以我希望我能说出一些深刻的东西。

---

### (01:17:50) Lenny Rachitsky

**English:**
No, kids content also is a very acceptable-

**中文翻译:**
不，儿童内容也是非常可以接受的——

---

### (01:17:52) Jason Droege

**English:**
The Formula 1 movie I thought was really good. I mean, it's a classic action movie. I don't think it informs anything in AI or business, but it's good to check out from the craziness of tech once in a while.

**中文翻译:**
我觉得那部 F1 赛车的电影（《极速王牌》之类的）很棒。它是一部经典的动作片。我不认为它能给 AI 或商业带来什么启示，但偶尔从疯狂的科技世界中抽离出来看看也不错。

---

### (01:18:04) Lenny Rachitsky

**English:**
Is there a product you recently discovered that you really love? Could be an app, could be clothing, could be a kitchen gadget, anything along those lines?

**中文翻译:**
你最近有没有发现什么非常喜欢的产品？可以是应用、衣服、厨房小工具，任何这类东西。

---

### (01:18:13) Jason Droege

**English:**
VO3. Not totally new, but when I was in high school, I wanted to be a screenwriter. I actually grew up in the Bay Area and everybody was an engineer, but I wanted be a screenwriter. And so, I went back and I got the first page of one of my old scripts, which not good scripts, but I got the first page. I took a picture of the script and I fed it to VO3, and I said, "Make this scene," and it got it right.

**中文翻译:**
V03（一款 AI 视频生成工具）。虽然不完全是新东西，但我上高中时想当编剧。我在湾区长大，周围全是工程师，但我当时想当编剧。于是我找回了我以前写的一个剧本的第一页（虽然写得不好），我拍了张照片传给 V03，说：“生成这个场景”，它做得非常准确。

---

### (01:18:38) Lenny Rachitsky

**English:**
Wow.

**中文翻译:**
哇。

---

### (01:18:39) Jason Droege

**English:**
I was shocked. I was just absolutely shocked that you could just take a picture of a script. And so, now I'm thinking about that for how do I use these tools for family videos? Some of the grad tools now with making live images more active, I think are really interesting. I think they need one more step of iteration, but I think those are going to be really emotionally life-changing for people because just a little bit of movement in an image from a grandparent or a relative or whatever you haven't seen in a while, it really does make a big emotional impact on you.

**中文翻译:**
我很震惊。我完全被震惊了，你竟然只需要拍一张剧本的照片。所以现在我在想，如何把这些工具用在家庭视频上？现在一些让静态照片动起来的工具非常有趣。我认为它们还需要进一步迭代，但我认为这些工具将从情感上改变人们的生活，因为看到祖父母或很久没见的亲人的照片里有一点点动作，真的会给你带来巨大的情感冲击。

---

### (01:19:20) Lenny Rachitsky

**English:**
I love that when you play with these tools, you probably can think about, oh, here's the people that help train this thing. Here's the people that helped on the problem that it had.

**中文翻译:**
我喜欢这一点：当你玩这些工具时，你可能会想到：“哦，这就是那些帮助训练这玩意儿的人。这就是那些帮助解决它曾有过的问题的人。”

---

### (01:19:26) Jason Droege

**English:**
I was actually talking to someone who was working on VO3, and I told him the script thing and he goes, "Oh, actually scripts. Yeah, no, the way the data is formatted in a script, that would actually be very good." Because they start with set looks dark interior, this character says it in this raspy voice, and so it gives you all the instructions in the script.

**中文翻译:**
我其实和一个开发 V03 的人聊过，我告诉他剧本的事，他说：“哦，其实剧本确实很棒。剧本的数据格式非常适合。”因为剧本开头会写“场景：昏暗的室内”，或者“这个角色用沙哑的声音说”，剧本里已经包含了所有的指令。

---

### (01:19:45) Lenny Rachitsky

**English:**
Oh, man, just unlocked a whole new business unit right there. Two more questions. One is do you have a favorite life motto that you often think about, find useful in work or in life?

**中文翻译:**
天哪，这直接开启了一个全新的业务单元。还有两个问题。一个是，你有没有最喜欢的座右铭，是你经常想到、觉得在工作或生活中很有用的？

---

### (01:19:57) Jason Droege

**English:**
Yeah. The end is never the end. That's my favorite internal saying, and it goes to the comments before about survival being a precursor, surviving being a precursor to thriving. You got to survive before you thrive, which is your brain tells you, and along these entrepreneurial journeys, I think this is most applicable. I mean, this is the hardest journey anyone can go on. If you go on this journey for five years, you are mentally harder than 99.9% of the population. People don't understand the Chinese water torture of having self-doubt and having things go wrong, et cetera.

**中文翻译:**
有的。“终点永远不是终点”（The end is never the end）。这是我最喜欢的内心独白，这呼应了之前说的“生存是繁荣的前提”。你必须先活下来才能发展。在创业旅程中，我认为这最适用。这是任何人都能经历的最艰难的旅程。如果你在这条路上走五年，你的心理素质会比 99.9% 的人都要强。人们不理解那种自我怀疑、事情出错等带来的“滴水穿石”般的折磨。

---

### (01:20:31) Jason Droege

**English:**
And so, more tactically, you get this when you're working out like in a day like, "Oh, I'm too tired. I need to stop." But the truth is is you can keep going and the world's going to keep spinning. So I find in the moments where it's just the hardest or you have this hard decision that seems impassable and your body, you're having this visceral reaction to this is impassable, just to remind yourself that I'm going to wake up tomorrow. This isn't the end. There's another end somewhere. I just find that to unlock me to be like, okay, there might not be a perfect solution, there might be an imperfect solution, but it's a solution so let's just keep going.

**中文翻译:**
更具体地说，当你锻炼时也会有这种感觉：“哦，我太累了，我得停下来。”但事实是你可以继续，世界也会继续转动。所以我发现在最艰难的时刻，或者当你面临一个看似无法逾越的艰难决定，你的身体产生了一种本能的抗拒反应时，只需提醒自己：我明天还会醒来。这不是终点，终点在别处。我发现这能让我释怀：好吧，可能没有完美的解决方案，可能只有不完美的方案，但它是个方案，所以让我们继续前进。

---

### (01:21:06) Lenny Rachitsky

**English:**
Final question. You helped create Uber Eats. I imagine you're still a power user of Uber Eats. You have a favorite restaurant on Uber Eats that maybe people should know about, maybe that you order most from?

**中文翻译:**
最后一个问题。你帮助创建了 Uber Eats。我猜你现在还是 Uber Eats 的重度用户。你在 Uber Eats 上有没有最喜欢的餐厅，或者你点得最多的餐厅？

---

### (01:21:16) Jason Droege

**English:**
I order a shocking amount of McDonald's actually. Despite my original story, it's the family treat in the house. I would say that that's probably the top thing that we order.

**中文翻译:**
实际上，我点的麦当劳数量惊人。尽管有我之前讲的那个故事，但它是我们家的家庭大餐。我会说那可能是我们点得最多的东西。

---

### (01:21:31) Lenny Rachitsky

**English:**
Oh, man, I'm worried for your health, but I love, I haven't had McDonald's so long. This is like, maybe I should give it another-

**中文翻译:**
天哪，我真担心你的健康。但我喜欢，我已经很久没吃麦当劳了。也许我该再试一次……

---

### (01:21:37) Jason Droege

**English:**
I mean, more practically we will order mixed greens or tender greens or something like that on a day-to-day basis, but I think that the more notable, surprising thing is is that despite my initial aversion to working with a global chain, it's a good treat once in a while. You just shouldn't have it all the time.

**中文翻译:**
我的意思是，更务实地说，我们日常会点混合沙拉或 Tender Greens 之类的。但我觉得更值得注意、更令人惊讶的是，尽管我最初反感与全球连锁店合作，但偶尔吃一次确实很棒。只是你不应该一直吃。

---

### (01:21:57) Lenny Rachitsky

**English:**
Jason, this was incredible. I really appreciate you making time for this. I'm really honored to be the first chat you've had since taking over at Scale. Where can folks find you online if they want to maybe reach out, learn more about what you're, I don't know, maybe join Scale. Where do you want to point people to and how can listeners be useful to you?

**中文翻译:**
Jason，这太棒了。非常感谢你抽时间参加。我很荣幸能成为你接管 Scale 后的第一个访谈对象。如果人们想联系你，或者了解更多关于你的信息，或者想加入 Scale，可以在哪里找到你？你想把大家引向哪里？听众能为你提供什么帮助？

---

### (01:22:14) Jason Droege

**English:**
Yeah, absolutely. I'm @jdroege, J-D-R-O-E-G-E on X. That's probably the easiest way to follow me, keep up with things and you can shoot me a DM if you like. And so, I think that's how you would keep in touch and, sorry, what was your other question? Sorry.

**中文翻译:**
好的，当然。我在 X 上的账号是 @jdroege。这可能是关注我、了解动态最简单的方式，如果你愿意也可以给我发私信。我想这就是保持联系的方式。抱歉，你的另一个问题是什么？

---

### (01:22:31) Lenny Rachitsky

**English:**
If you're hiring, I don't know, where should people go check it out if you are, and then also just-

**中文翻译:**
如果你在招聘，人们应该去哪里查看？

---

### (01:22:34) Jason Droege

**English:**
Absolutely. Just go to scale.com, go to our careers page, and we have 250 open roles. To the point about we're in business and we're growing, we're hiring a ton of people. Our data business is growing, our applications and services business is growing like crazy, and so we're going to need a lot of people to help us on that journey.

**中文翻译:**
当然。直接访问 scale.com，去我们的招聘页面，我们有 250 个开放职位。正如我所说，我们的业务正在增长，我们正在大量招人。我们的数据业务在增长，我们的应用和服务业务也在疯狂增长，所以我们需要很多人来帮助我们完成这段旅程。

---

### (01:22:54) Lenny Rachitsky

**English:**
You guys just signed some insanely large contracts with the government I was reading.

**中文翻译:**
我读到你们刚和政府签了一些大得惊人的合同。

---

### (01:22:58) Jason Droege

**English:**
Two $100 million contracts.

**中文翻译:**
两份 1 亿美元的合同。

---

### (01:23:01) Lenny Rachitsky

**English:**
$100 million contracts.

**中文翻译:**
1 亿美元的合同。

---

### (01:23:02) Jason Droege

**English:**
100, yeah. We didn't sign just one. We signed two in one month, so yes, no, our federal business is doing well. Our enterprise business is doing well. Our international government's business is doing well. There's a lot of demand out there.

**中文翻译:**
是的，1 亿。我们不只签了一份，一个月内签了两份。所以，是的，我们的联邦业务做得很好，企业业务做得很好，国际政府业务也做得很好。市场需求非常大。

---

### (01:23:16) Lenny Rachitsky

**English:**
Some salespeople are getting some great commissions. Good job. Jason, thank you so much for being here.

**中文翻译:**
有些销售人员肯定拿到了丰厚的佣金。干得漂亮。Jason，非常感谢你能来。

---

### (01:23:21) Jason Droege

**English:**
Yeah, thank you. Honor to be a guest here. Super excited to be with you, especially so early in the journey, or at least my journey here leading Scale.

**中文翻译:**
谢谢。很荣幸能成为这里的嘉宾。很高兴能和你交流，特别是在我领导 Scale 的旅程如此早期的时候。

---

### (01:23:32) Lenny Rachitsky

**English:**
Appreciate it. Thanks for coming. Thanks for joining us. Bye, everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcasts, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at lennyspodcast.com. See you in the next episode.

**中文翻译:**
非常感谢。谢谢你的到来。谢谢大家的参与。再见，各位。非常感谢收听。如果你觉得这期节目有价值，可以在 Apple Podcasts、Spotify 或你喜欢的播客应用中订阅本节目。此外，请考虑给我们评分或留下评论，这能真正帮助其他听众发现这个播客。你可以在 lennyspodcast.com 找到所有往期节目或了解更多信息。下期节目见。