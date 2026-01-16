# Shreyas Doshi - 双语对照

This is the complete bilingual transcript of Lenny's Podcast featuring Shreyas Doshi.

---

### (00:00:03) Lenny

**English:**
There's no one out there today who shares more wisdom, more consistently on the art of product management than Shreyas Doshi. Shreyas came out of nowhere a few years ago and started tweeting gems of insight about building product and the role of product management, and rightfully so, has built a huge following on Twitter. What I love about Shreyas is that his insights are often framed in really memorable and interesting ways and they're often contrarian and not ideas that you've heard elsewhere. Shreyas has worked at some of today's most important tech companies, including Yahoo, Twitter, Google, and most recently Stripe, both as an IC and a manager. And his advice is always rooted in his real life experiences at these companies.

**中文翻译:**
如今在产品管理艺术方面，没有人能比 Shreyas Doshi 更持续地分享更多的智慧了。几年前，Shreyas 突然声名鹊起，开始在 Twitter 上发布关于打造产品和产品经理角色的真知灼见，并理所当然地积累了大量的粉丝。我最欣赏 Shreyas 的一点是，他的见解通常以非常令人难忘且有趣的方式呈现，而且往往是反直觉的，不是你在其他地方能听到的陈词滥调。Shreyas 曾在当今一些最重要的科技公司工作过，包括 Yahoo、Twitter、Google，以及最近的 Stripe，既担任过 IC（个人贡献者）也担任过管理者。他的建议总是植根于他在这些公司的真实经历。

---

### (00:00:48) Lenny

**English:**
In our chat, we focus on five topics and go deep on them. We talk about the power of pre-mortems. We talk about how to best use your time as a product manager. We look into the three levels of product work and how getting them wrong often leads to tension on your team. We dig into why most execution problems are really strategy problems. And we talk about a common pitfall in prioritization. And if you listen to the end, we actually throw in a bonus topic. I really appreciate that Shreyas made the time for our chat and I cannot wait for you to hear it.

**中文翻译:**
在我们的对话中，我们重点深入探讨了五个话题。我们讨论了“事前剖析”（pre-mortems）的力量；讨论了作为产品经理如何最好地利用时间；研究了产品工作的三个层面，以及搞错这些层面如何导致团队紧张；我们深入探讨了为什么大多数执行问题实际上是策略问题；还讨论了优先级排序中的一个常见陷阱。如果你听到最后，我们实际上还增加了一个额外的话题。我非常感谢 Shreyas 能抽时间来聊天，我迫不及待想让你们听到这段对话。

---

### (00:01:29) Lenny

**English:**
This episode is brought to you by Coda. Coda is an all in one doc that combines the best documents, spreadsheets, and apps in one place. I actually use Coda every single day. It's my home base for organizing my newsletter writing, it's where I plan my content calendar, capture my research and write the first drafts of each and every post. It's also where I curate my private knowledge repository for paid newsletter subscribers. And it's also how I manage the workflow for this very podcast. Over the years, I've seen Coda evolve from being a tool that makes teams more productive to one that also helps bring the best practices across the tech industry to life with an incredibly rich collection of templates and guides in the Coda Doc Gallery, including resources for many guests on this podcast, including Shreyas, Gokul, and Shishir, the CEO of Coda. Some of the best teams out there like Pinterest, Spotify, Square, and Uber use Coda to run effectively and have published their templates for anyone to use.

**中文翻译:**
本期节目由 Coda 赞助。Coda 是一款多合一文档工具，它将文档、表格和应用程序的最佳功能整合在一起。实际上我每天都在使用 Coda。它是我组织时事通讯写作的大本营，我在这里规划内容日历、记录研究资料并撰写每篇文章的初稿。它也是我为付费订阅者建立私人知识库的地方。我甚至用它来管理这个播客的工作流。多年来，我看到 Coda 从一个提高团队生产力的工具，进化为一个通过 Coda Doc Gallery 中极其丰富的模板和指南，将科技行业最佳实践变为现实的平台，其中包括本播客许多嘉宾（如 Shreyas、Gokul 和 Coda CEO Shishir）提供的资源。Pinterest、Spotify、Square 和 Uber 等顶尖团队都在使用 Coda 高效运行，并发布了供任何人使用的模板。

---

### (00:02:23) Lenny

**English:**
If you're ping ponging between lots of documents and spreadsheets, make your life better and start using Coda. You can take advantage of a special limited time offer just for startups, head over to coda.io/lenny to sign up and get a thousand dollars credit on your first statement. That's C-O-D-A.io/lenny to sign up and get $1,000 in credit on your account.

**中文翻译:**
如果你总是在大量的文档和表格之间来回切换，那就让你的生活变得更轻松，开始使用 Coda 吧。你可以享受专门针对初创公司的限时优惠，前往 coda.io/lenny 注册，即可在首张账单中获得 1000 美元的抵扣额度。地址是 C-O-D-A.io/lenny，注册即可获得 1000 美元账户额度。

---

### (00:02:49) Lenny

**English:**
This episode is brought to you by Productboard. Product leaders trust Productboard to help their teams build products that matter, from startups to Industry Titans. Over 6,000 companies rely on Productboard to get the right products to market faster, including companies like Zoom, Volkswagen, UiPath and Vanguard. Productboard can help you create a scalable, transparent and standardized process so your PMs understand what their customers really need and then prioritize the right features to build next. Stakeholders feel the left too with an easy to view roadmap that automatically updates so everyone knows what you're building and why. Make data-driven product decisions that result in higher revenue and user adoption and empower your product teams to create delightful customer experiences. Visit productboard.com to learn more.

**中文翻译:**
本期节目由 Productboard 赞助。从初创公司到行业巨头，产品领导者都信任 Productboard 能帮助他们的团队打造真正有意义的产品。超过 6000 家公司依靠 Productboard 更快地将正确的产品推向市场，包括 Zoom、大众汽车、UiPath 和先锋集团（Vanguard）。Productboard 可以帮助你创建可扩展、透明且标准化的流程，让你的产品经理了解客户的真实需求，从而优先开发正确的后续功能。利益相关者也能通过自动更新、易于查看的路线图感受到支持，让每个人都知道你们在做什么以及为什么做。做出能带来更高收入和用户采用率的数据驱动型产品决策，并赋能你的产品团队创造令人愉悦的客户体验。访问 productboard.com 了解更多信息。

---

### (00:03:42) Lenny

**English:**
Shreyas, the man, the myth, the legend, thank you so much for joining me and for having this conversation.

**中文翻译:**
Shreyas，这位充满传奇色彩的人物，非常感谢你加入我并进行这次对话。

---

### (00:03:48) Shreyas Doshi

**English:**
It's great to be here, Lenny.

**中文翻译:**
很高兴来到这里，Lenny。

---

### (00:03:49) Lenny

**English:**
So we strategized about how to make this podcast as concretely useful and actionable for as many people as possible. And so, we decided to do is instead of a regular interview where we talk about a lot of stuff, instead we're going to go deep on five of your ideas, teachings, lessons that you've shared on Twitter that have stuck with me, and I know have resonated with a lot of other people and we're going to call it the five big ideas from Shreyas Doshi. Does that sound about right?

**中文翻译:**
我们策划了如何让这期播客对尽可能多的人产生具体且可操作的帮助。因此，我们决定不进行那种泛泛而谈的常规采访，而是深入探讨你在 Twitter 上分享过的、令我印象深刻且引起许多人共鸣的五个观点、教诲和教训。我们将其称为“Shreyas Doshi 的五个大想法”。这听起来可以吗？

---

### (00:04:14) Shreyas Doshi

**English:**
Sounds great.

**中文翻译:**
听起来很棒。

---

### (00:04:15) Lenny

**English:**
Okay, cool. So before we get into that, before we get into the meat of all this stuff, you share a lot of wisdom on Twitter, but you don't share a ton of about yourself and your background, where you grew up, where you're born and things like that. So I'd love to learn a little bit more about the human that is Shreyas. And so, maybe we start there, where were you born, where'd you grow up, what'd your parents do for work, what did you want to be when you grew up?

**中文翻译:**
太好了。在我们进入正题之前，你在 Twitter 上分享了很多智慧，但你很少分享关于你自己和你的背景，比如你在哪里长大、出生地等等。所以我很想多了解一下作为“人”的 Shreyas。也许我们可以从那里开始：你出生在哪里？在哪里长大？你父母是做什么工作的？你小时候想成为什么样的人？

---

### (00:04:36) Shreyas Doshi

**English:**
So I was born in Mumbai, Bombay, India, and I lived there for the first 21 years of my life. I actually did not really even get to see many parts of India while I grew up in India and basically just was in Mumbai the whole time. And then I moved here to the United States for graduate studies at age 21. My parents, my father was a businessman, and so, he started his own business. He manufactured spices and marketed them. So growing up, I saw him work on packaging and pricing. And when he was short on staff, I used to be packaging the spices into the little box or creating some marketing material for him, not the creative part, but the grunt work. So I grew up in that environment where the lines between what was my dad's business and our personal lives were very blurred.

**中文翻译:**
我出生在印度孟买，在那里度过了人生最初的 21 年。实际上，我在印度长大期间甚至没去过印度的很多地方，基本上一直待在孟买。21 岁时，我来到美国攻读研究生。我的父母，我父亲是个商人，他白手起家。他生产香料并进行销售。所以在我成长过程中，我看着他研究包装和定价。当他缺人手时，我就会去帮忙把香料装进小盒子，或者帮他制作一些营销材料——不是创意部分，而是那些苦力活。所以我是在那种环境下长大的，我父亲的生意和我们的个人生活之间的界限非常模糊。

---

### (00:05:32) Shreyas Doshi

**English:**
My mother just growing up as a homemaker, and so, my dad was largely just busy and all consumed in his business. And I ended up spending a lot of time growing up with my mother. And so, both of them have had a pretty significant influence in different ways, but both significant influence on who I am. When I grew up, I changed that a lot. I think when I was very young, one of my uncle is a doctor, so I saw him and I was like, "Oh, maybe I should be a doctor." And at some point later, I changed that. In high school, I took French and I ended up being really good at it, surprisingly good at it, and I was very passionate about it.

**中文翻译:**
我母亲一直是一位家庭主妇。我父亲大部分时间都忙于生意，全身心投入其中。所以我成长过程中大部分时间是和母亲在一起的。他们两人以不同的方式对我产生了深远的影响，共同塑造了今天的我。关于长大后想做什么，我变过很多次。记得很小的时候，我的一位叔叔是医生，我看到他就想：“哦，也许我应该当医生。”后来在某个时刻我改变了主意。高中时我选修了法语，结果学得非常好，好得令人惊讶，而且我对此非常有热情。

---

### (00:06:10) Shreyas Doshi

**English:**
So for a while, I was thinking, "Oh, I'll maybe teach French after graduate from college. Maybe I'll go to France, learn the language a little more. And maybe I'll teach French." That lasted for a few years and turned out that I ended up not pursuing that, and instead, got a degree in computer engineering. Partly, I think because in India back then, if you were good at science and mathematics, you would usually take up engineering. And so, that's what I ended up doing. I was also quite passionate about computers, so maybe that was part of it. But once I started on that path, it became much clearer what I wanted to do.

**中文翻译:**
所以有一段时间我想：“也许大学毕业后我可以教法语。也许我会去法国，再深造一下语言，然后回来教书。”这种想法持续了几年，但结果我并没有走那条路，而是拿到了计算机工程学位。部分原因我想是因为当时的印度，如果你擅长科学和数学，通常就会去读工程。所以我最终就这么做了。我也对计算机非常着迷，所以这可能也是原因之一。但一旦我踏上这条路，我想做的事情就变得清晰多了。

---

### (00:06:50) Lenny

**English:**
How's your French these days?

**中文翻译:**
你现在的法语水平怎么样？

---

### (00:06:51) Shreyas Doshi

**English:**
Very bad. Sad to say, my son is now taking French and I am just embarrassed at my inability to assist him in any way, other than to point out some conjugation errors.

**中文翻译:**
非常糟糕。遗憾的是，我儿子现在正在学法语，而我除了能指出一些动词变位错误外，完全无法提供任何帮助，这让我感到很尴尬。

---

### (00:07:04) Lenny

**English:**
So you said you studied computer engineering, that's what you moved to the US for, how did you move from that to product?

**中文翻译:**
你说你学的是计算机工程，这也是你来美国的原因，那么你是如何从工程转向产品领域的呢？

---

### (00:07:11) Shreyas Doshi

**English:**
So, I started my career as an engineer, or well, backtracking, so I completed my undergrad in India, came here to the United States to pursue a PhD in computer science. About one month in, I realized that PhD in academia wasn't for me, so I decided that I was going to drop out of the PhD program. And once I dropped out, this was like 2001, 2002 so the climate was very different, there were basically no jobs for tech people. Certainly there were no jobs for people who required a visa, which I did. So it was very difficult, but I ended up working as an engineer at a couple of startups and that started my career in tech. I was an engineer for about four or five years. And when I moved here to the San Francisco Bay Area, I got a little taste of product management.

**中文翻译:**
我最初是以工程师的身份开始职业生涯的。回顾一下，我在印度完成了本科，来到美国攻读计算机科学博士学位。入学大约一个月后，我意识到学术界的博士生活不适合我，于是决定退学。退学后，那是 2001、2002 年左右，大环境非常不同，科技行业基本没有工作。当然，对于像我这样需要签证的人来说，工作更是难找。所以当时非常困难，但我最终在几家初创公司找到了工程师的工作，开启了我的科技生涯。我做了大约四五年的工程师。当我搬到旧金山湾区时，我初次接触到了产品管理。

---

### (00:08:00) Shreyas Doshi

**English:**
So, I was part of this team that used to be Loudcloud, and they were acquired by a larger company EDS at that time, so it was a startup team within a larger organization. And I was an engineer there and I just started doing some product work. And I found that my managers over the time would send me to customer meetings. We had an internal product, so these were internal customers. And I thought it was a little surprising because I was fairly junior and I was an engineer, but I was like, "Okay, I'll just go to the customer meetings." And I really enjoyed that. I really enjoyed understanding what our customers were trying to do, helping them out. I also enjoyed thinking about creative ways to solve their needs and whatnot. So, that was my taste of product management.

**中文翻译:**
当时我在 Loudcloud 团队工作，那家公司后来被大公司 EDS 收购了，所以那是大组织内部的一个创业团队。我在那里做工程师，并开始承担一些产品工作。我发现我的经理们开始派我去参加客户会议。我们做的是内部产品，所以客户也是内部的。我觉得有点惊讶，因为我资历很浅，而且是个工程师，但我心想：“好吧，那我就去参加客户会议吧。”结果我非常喜欢。我非常喜欢去理解客户想要实现什么，并帮助他们。我也喜欢思考解决他们需求的创意方法等等。那就是我对产品管理的初体验。

---

### (00:08:40) Shreyas Doshi

**English:**
For about a year, I was doing the product job without having the title and I was also the engineer. So I was in this great state where I'd figure out what needed to be built and I would just build it myself. So, that's how I started. And at some point during that one year, I realized that while I was a good engineer, I was perhaps a top 20% engineer. I realized that I would never be a great engineer, that I would never be a top 10% engineer because I saw those engineers, the fortune of working with them, and I just could tell that I couldn't be that. And I increasingly got interested in this product thing, so I said, "Okay, let's try out this product thing." And so, that's really what started my product career. And I think what I have to be really thankful and grateful for there is the people who gave me a chance to do the product work and there were many people involved. And so, I think without their support, it would've been much harder for me to become a product manager.

**中文翻译:**
大约有一年的时间，我在没有正式头衔的情况下做着产品经理的工作，同时还是工程师。所以我处于一种很棒的状态：我决定需要构建什么，然后亲手把它构建出来。这就是我的起步。在那一年里的某个时刻，我意识到虽然我是一个不错的工程师，大概能排进前 20%，但我永远无法成为一名伟大的工程师，永远进不了前 10%。因为我见过那些顶尖工程师，有幸与他们共事，我能感觉到自己达不到那个水平。与此同时，我对产品这块越来越感兴趣，于是我说：“好吧，让我们试试产品这条路吧。”这就是我产品生涯的真正开端。我非常感激那些给我机会尝试产品工作的人，这中间有很多人帮忙。我想如果没有他们的支持，我成为产品经理的道路会艰难得多。

---

### (00:09:34) Lenny

**English:**
I didn't know that you moved from engineering to product and your journey is very similar to mine where I was also an engineer. And once I got to Airbnb, I was like, "Okay, I am not good. And I will not last as an engineer at a company like this. And I should think about what other options exist." And it worked out great. And so, I wonder how often that happens of PMs moving into PM because they aren't going to make it as an engineer.

**中文翻译:**
我以前不知道你也是从工程转到产品的，你的经历和我非常相似。我也曾是工程师，当我进入 Airbnb 后，我心想：“好吧，我不够优秀，在这样的公司里我做不长久工程师。我应该考虑一下还有什么其他选择。”结果证明这个决定非常正确。我在想，有多少产品经理是因为觉得自己无法在工程领域出类拔萃才转行的。

---

### (00:09:57) Shreyas Doshi

**English:**
I think it might be a common occurrence because engineering is a really great job, particularly on empowered teams, as an engineer, you can do a lot. You don't have to just write code, but you can do a lot. And so, I also think it's a great place for people to start their career if they have a technical background and if they enjoy the part about building software. Because sometimes people will ask me, "Hey, I'm doing this technical degree, whether it's computer science or something else, but I want my first job to be product management." And I often respond with, "Tryout engineering because, again, in many companies, fortunately these days you can do a lot more than just the core engineering job. And so you get exposure to many different things. And once you do that, you can decide what path to pick."

**中文翻译:**
我认为这可能很普遍，因为工程是一份非常棒的工作，特别是在那些赋能型团队（empowered teams）中，作为工程师你可以做很多事情。你不只是写代码，你可以参与很多环节。所以我也认为，如果有人有技术背景并且喜欢构建软件，工程是职业生涯的一个极佳起点。有时人们会问我：“嘿，我正在读技术学位，不管是计算机科学还是别的，但我希望第一份工作是产品管理。”我通常会回答：“先试试工程吧，因为幸运的是，现在很多公司里，你能做的远不止核心工程工作。你会接触到很多不同的事物。一旦你有了这些经历，你就能更好地决定选择哪条路。”

---

### (00:10:44) Lenny

**English:**
It's such a bonus to have that background as a PM. I wanted to go back, so you mentioned that you worked at Loudcloud. I had no idea. That was Marc Andreessen's second company, right?

**中文翻译:**
作为产品经理，拥有那样的背景确实是一个巨大的加分项。我想回到刚才的话题，你提到你在 Loudcloud 工作过。我完全不知道。那是 Marc Andreessen 的第二家公司，对吧？

---

### (00:10:53) Shreyas Doshi

**English:**
Yes. I joined that team. Again, this was a time when there were very scared jobs in the valley and I was interviewing with them for nine months or something like that, and they had just been acquired by EDS. So they split into two companies. One got acquired by EDS and the other became Opsware, which was the product company. And so, I joined the Loudcloud part of that organization.

**中文翻译:**
是的。我加入了那个团队。再说一次，那是硅谷工作岗位非常稀缺的时期，我面试了他们大概九个月。当时他们刚被 EDS 收购，分拆成了两家公司：一家被 EDS 收购，另一家变成了 Opsware（那是一家产品公司）。我加入了被收购的 Loudcloud 那部分组织。

---

### (00:11:17) Lenny

**English:**
Got it. Is there something that you took away from that company? Was Marc Andreessen still working there? And I think Ben Horowitz also.

**中文翻译:**
明白了。你在那家公司有什么收获吗？Marc Andreessen 当时还在那里工作吗？我想 Ben Horowitz 应该也在。

---

### (00:11:24) Shreyas Doshi

**English:**
Yeah, they were still there, they were working on the Opsware side. Again, because even though I was hired as an engineer, the non-engineer task I was given was to manage a relationship with Opsware because the way that split worked is EDS would use Opswares data center automation technology, and my team was responsible for deploying and supporting that technology for EDS. And so, I was given this role of managing the vendor relationship and I have no idea. I'm in my early 20s, I have no idea how to manage vendor relationships, but I ended up doing that.

**中文翻译:**
是的，他们还在，不过是在 Opsware 那边。虽然我是作为工程师被录用的，但我被分配了一个非工程任务：管理与 Opsware 的关系。因为分拆后的运作方式是 EDS 使用 Opsware 的数据中心自动化技术，而我的团队负责为 EDS 部署和支持该技术。所以我被赋予了管理供应商关系的角色，而我当时才 20 出头，完全不知道该怎么管理供应商关系，但我最终还是承担了下来。

---

### (00:11:59) Shreyas Doshi

**English:**
And as part of that, I got an opportunity to work with many folks over at Opsware, including folks on the leadership team there. And that was my first experience of what a really highly talented and energetic team looks like, both on the Opsware side, like I said, I worked with a number of people there, but also on the former Loudcloud side who were my team members. And that magic, a very high caliber team, people who really great at their job and brought high degree of energy and collaboration to their work. I was just lucky to have been part of that team early on.

**中文翻译:**
作为那份工作的一部分，我有机会与 Opsware 的许多人合作，包括那里的领导团队成员。那是我第一次体验到一支真正高才干、充满活力的团队是什么样子的——无论是 Opsware 那边，还是我所在的 Loudcloud 这边。那种魔力，那种高素质的团队，每个人都极其擅长自己的工作，并为工作注入了高度的热情和协作精神。我很幸运能在职业生涯早期成为那支团队的一员。

---

### (00:12:32) Lenny

**English:**
And then following that, you worked at a bunch of really important well run successful companies, Stripe, Twitter, Google, Yahoo, what's one thing you took away from each of these companies that you've worked at that has stuck with me? You share a lot of this on Twitter, but if you just think about somebody took away from each of these companies or even the founders that ran these companies, what might those be?

**中文翻译:**
在那之后，你在许多非常重要、运营成功且的公司工作过，比如 Stripe、Twitter、Google、Yahoo。从你工作过的这些公司中，有哪些让你印象深刻的收获？你在 Twitter 上分享了很多，但如果你回想一下从每家公司，甚至是经营这些公司的创始人身上学到的东西，会是什么？

---

### (00:12:53) Shreyas Doshi

**English:**
Yeah, let's do this rapid fire style because you know me, I could spend an hour just talking about this topic. But just starting with Yahoo, I think I learned the importance of building multiple services under a single account. I think that was the one Yahoo ID was such a powerful thing. It wasn't easy to pull off back in the day and Yahoo was perhaps the first company that pulled it off really well. And so, that idea of bundling under a single account, which then Google really did extremely well later on was something that I got to experience very first hand because I was working on the identity team at Yahoo. Google taught me the.

**中文翻译:**
好，我们用“快问快答”的方式来聊，因为你知道我能就这个话题聊上一个小时。先从 Yahoo 开始，我学到了在单一账户下构建多种服务的重要性。我认为那个“Yahoo ID”是一个非常强大的东西。在当时要实现这一点并不容易，Yahoo 可能是第一家做得非常出色的公司。这种在单一账户下进行捆绑（bundling）的想法，后来 Google 做得极其出色，而我当时在 Yahoo 的身份团队工作，所以有非常直接的体验。Google 教会了我……

---

### (00:13:33) Lenny

**English:**
Real quick on Yahoo because it makes me think about it. I remember they tried to do that with Flickr and they had a bunch of trouble with that, people on Flickr didn't want to log in with Yahoo, is that right?

**中文翻译:**
关于 Yahoo 我插一句，这让我想起了一件事。我记得他们曾尝试在 Flickr 上推行这个方案，结果遇到了很多麻烦，Flickr 的用户不想用 Yahoo 账号登录，是这样吗？

---

### (00:13:42) Shreyas Doshi

**English:**
Yes. That's the story of every acquisition that are some raving fans of the service that are perhaps not entirely happy about their beloved service being acquired by a large company. In fact, we encountered this at Google as well. If you remember YouTube accounts used to be separate from Google accounts or Gmail accounts. And at some point, Google decided that you should be able to use your Google account to log into YouTube, and also over time, that everybody who uses YouTube should have a Google account. So they went through a multi-year migration of accounts, and they had similar backlash. The interesting part though, is nobody remembers that now, people happily use YouTube. So this is one of those things where sometimes it's painful in the short-term, even though it might actually be the right answer over the long-term.

**中文翻译:**
是的。这是每个收购案都会发生的故事：某些服务的狂热粉丝可能对他们心爱的服务被大公司收购感到不太愉快。事实上，我们在 Google 也遇到过这种情况。如果你还记得，YouTube 账号以前是独立于 Google 账号或 Gmail 账号的。后来 Google 决定你应该能用 Google 账号登录 YouTube，并且随着时间推移，要求每个使用 YouTube 的人都必须拥有 Google 账号。他们经历了几年的账号迁移，也遭到了类似的抵制。但有趣的是，现在没人记得那件事了，大家都在愉快地使用 YouTube。所以这就是那种短期内可能很痛苦，但从长远来看实际上是正确答案的事情之一。

---

### (00:14:36) Lenny

**English:**
Great advice. Okay. Sorry I cut you off. Google.

**中文翻译:**
很有见地的建议。好的，抱歉打断你。接着说 Google。

---

### (00:14:38) Shreyas Doshi

**English:**
Yes. Google, I think the main thing I learned was the power of thinking really big. And I know it sounds like a platitude, but really big. And I only actually realized that when I left Google and I started working with the other teams and these were all capable teams and I was struck by how many teams just limited the potential of what they could achieve. And I think Google helped people think big by default. And so, I think the six years I spent at Google really helped me understand that really well and just make it a normal part of how I operated. So that was really useful for me.

**中文翻译:**
是的。在 Google，我想我学到的最主要的一点就是“宏大思考”（thinking really big）的力量。我知道这听起来像陈词滥调，但真的是非常宏大。我直到离开 Google 开始与其他团队合作时才真正意识到这一点。那些团队都很能干，但我惊讶于有多少团队限制了自己所能成就的潜力。我认为 Google 帮助人们默认就往大处想。我在 Google 待了六年，这真的帮我深刻理解了这一点，并让它成为我运作方式中极其自然的一部分。这对我有很大帮助。

---

### (00:15:18) Lenny

**English:**
Is there an example at Google that some of you worked on that was like, "Holy shit. This was going to be big or let's think bigger about this"?

**中文翻译:**
在 Google 有没有什么例子，是你参与过的，让你觉得“天哪，这会变得非常大”或者“让我们想得更远大一点”？

---

### (00:15:25) Shreyas Doshi

**English:**
Well, as with anything, there's pluses and minuses. So I worked on the ads team at Google for a number of years and there was this unwritten rule of thumb that, hey, if it's not going to generate more than $100 million in revenue, it's not worth talking about it. Because the ads business was growing so fast and was so large that we would regularly not pursue opportunities that were just quote $100 million. So why do that? That's because Google had access to billion dollar opportunities for it as business. So they were very clear on pursuing the big opportunities. And in some cases, these opportunities were not obvious, so we had to create those opportunities. If you think about some of the innovations Google brought over the years in monetization, including things like video ads and whatnot, those were not obvious opportunities, but Google decided that it wanted to pursue those big opportunities.

**中文翻译:**
凡事都有利弊。我在 Google 的广告团队工作了几年，当时有一个不成文的经验法则：嘿，如果这东西不能产生超过 1 亿美元的收入，那就不值得讨论。因为广告业务增长太快、规模太大，我们经常会放弃那些“仅仅”价值 1 亿美元的机会。为什么要这么做？因为 Google 的广告业务触手可及的是十亿美元级的机会。所以他们非常明确要追求大机会。在某些情况下，这些机会并不明显，所以我们必须创造这些机会。如果你想想 Google 多年来在变现方面带来的创新，比如视频广告之类的，那些最初并不是显而易见的机会，但 Google 决定要追求那些大的可能性。

---

### (00:16:22) Shreyas Doshi

**English:**
And in order to do that, it had to sometimes just let go of these seemingly smaller opportunities. So that tendency to think about, well, yes, there is $10 million business here, but can we make it $100 million business? Or there is a $1 million business here, can we make it a $10 million business? What does it take to make it bigger is a habit, I think, that got ingrained for me at Google. Now, of course, there's the other side of it, which is, I think, Google missed out on some trends simply because of this filter or this high bar where sometimes it's not clear if something is $100 million opportunity or $1 billion opportunity. So that is a downside of this. What I mainly took away is for instance, even at Stripe, when I joined, I was just thinking a lot bigger about the business. I was responsible for Stripe Connect and that helped us make different decisions about what to prioritize and at what pace to go after it. So, that was Google.

**中文翻译:**
为了做到这一点，它有时不得不放弃这些看似较小的机会。所以，这种思考倾向——“是的，这里有一个 1000 万美元的业务，但我们能把它做成 1 亿美元吗？”或者“这里有一个 100 万美元的业务，我们能把它做成 1000 万美元吗？”——这种“如何做大”的习惯在 Google 深深植入了我的脑海。当然，这也有另一面，我认为 Google 仅仅因为这个过滤器或高门槛而错过了一些趋势，因为有时你并不清楚某个东西到底是 1 亿美元的机会还是 10 亿美元的机会。这是它的弊端。我学到的主要一点是，例如在 Stripe，当我加入时，我对业务的思考规模要大得多。我负责 Stripe Connect，这帮助我们在优先级排序和推进节奏上做出了不同的决策。这就是 Google 的部分。

---

### (00:17:21) Shreyas Doshi

**English:**
Moving on to Twitter. I think at Twitter, the main thing that struck me with all the challenges, they had infrastructure challenges and also some challenges around leadership and culture is just the stickiness that comes with combining network effects with core product differentiation, because Twitter had both. We talk about network effects all the time and I don't have much more interesting things to add beyond what's already added. But this combination of core product differentiation, because if you think about it, there's still no product like Twitter, despite now being a long time since the product was launched. And that core product differentiation combined with network effects has what enabled Twitter to have the staying power it's had. And I think unless something terrible happens, I think Twitter will be around for a really long time. So, that's something I got to observe very closely when I worked at Twitter.

**中文翻译:**
接下来是 Twitter。我想在 Twitter，尽管面临各种挑战——基础设施挑战、领导层和文化挑战——最令我震撼的是将网络效应与核心产品差异化结合所带来的粘性，因为 Twitter 两者兼备。我们总是在谈论网络效应，我没什么更有趣的新观点可以补充。但这种核心产品差异化的结合——因为如果你仔细想想，尽管产品发布已经很久了，现在仍然没有像 Twitter 这样的产品——这种核心差异化结合网络效应，正是 Twitter 拥有如此持久生命力的原因。我认为除非发生什么极其糟糕的事情，否则 Twitter 会存在很长一段时间。这是我在 Twitter 工作时近距离观察到的。

---

### (00:18:13) Shreyas Doshi

**English:**
And then at Stripe, I think the main thing I took away was that when you combine high energy sound judgment, low ego and small teams, you just get magic. And so, Stripe wasn't by any means flawless, but I saw that combination of high energy sound judgment, low ego and small teams more at Stripe than any other place I've been at. And so, that was very impactful and my growth and thinking as a leader. And I can go on with the founders, because I know you had asked that question.

**中文翻译:**
然后在 Stripe，我想我学到的最主要的一点是，当你把高能量、明智的判断、低自尊（low ego）和小团队结合在一起时，奇迹就会发生。Stripe 绝非完美无瑕，但在 Stripe，我比在任何其他地方都更频繁地看到这种高能量、明智判断、低自尊和小团队的结合。这对作为领导者的我的成长和思维产生了深远影响。我还可以继续聊聊创始人，因为我知道你问过那个问题。

---

### (00:18:45) Lenny

**English:**
Let's do it.

**中文翻译:**
开始吧。

---

### (00:18:46) Shreyas Doshi

**English:**
Okay. With regards to the founders and what I learned from the founders, Yahoo, I didn't work much with the founders. At Google, I had some interactions. I was in meetings with Larry, Sergey, Eric Schmidt. And I think particularly if I were to pick one thing, I really appreciated Larry's strategic insight and particularly his ability to simulate the future to make better decisions. And so Twitter, I just overlapped very briefly with Jack's comeback as CEO back when he came back. And I think I was struck by his ability to listen and ask great questions in a few meetings that I was with him. And so, I was really impressed like he would just listen a lot more than you would expect, say, the CEO to listen. And then he would just ask one vital question and that's something I've tried to use in my leadership style ever since I saw that.

**中文翻译:**
好的。关于创始人以及我从他们身上学到的东西：在 Yahoo，我没怎么和创始人共事。在 Google，我有一些互动，曾和 Larry（佩奇）、Sergey（布林）、Eric Schmidt（施密特）一起开会。如果非要选一点，我非常欣赏 Larry 的战略洞察力，特别是他通过模拟未来做出更好决策的能力。在 Twitter，我刚好赶上 Jack（多西）回归担任 CEO 的那段短暂重叠期。在和他一起参加的几次会议中，他倾听和提出精彩问题的能力令我震撼。我印象非常深刻，他倾听的时间远比你预期的 CEO 倾听的时间要长。然后他会提出一个至关重要的问题，自从看到这一点后，我就一直尝试在自己的领导风格中使用这种方法。

---

### (00:19:38) Lenny

**English:**
Is there an example of that or a story of that happening that you think about?

**中文翻译:**
有没有具体的例子或故事让你记忆犹新？

---

### (00:19:42) Shreyas Doshi

**English:**
I forget the details and they're not that important anyway. But there was a time when we were discussing a potential acquisition and I was on the fence on that acquisition, it would be something that my team would acquire, Jack was in the room. And I remember we went through as is common in many corporate settings. We went through all the pros and cons and all the intellectual arguments and the strategic arguments and the metrics arguments and all of that. And Jack was just listening through all of that. And then I remember very distinctly, he asked me one question which was something to the effect of, how does this make our users love Twitter more? Simple question. But then at that point I realized, yeah, we never really talked about that because we were so engrossed in all the other stuff. And we talked about it as a proxy because we were talking about metrics and impact and integration and those sorts of things.

**中文翻译:**
细节我记不清了，反正也不太重要。有一次我们在讨论一项潜在的收购，我当时对这项收购持观望态度，那是我团队要收购的项目，Jack 也在场。我记得我们像在许多公司环境里一样，讨论了所有的优缺点、理性的论据、战略论据、指标论据等等。Jack 就一直在听。然后我记得非常清楚，他问了我一个问题，大意是：“这如何让我们的用户更爱 Twitter？”一个简单的问题。但就在那一刻我意识到，是的，我们从未真正讨论过这一点，因为我们太沉迷于其他事情了。我们只是把那些当作代理指标在谈，比如指标、影响、集成之类的。

---

### (00:20:40) Shreyas Doshi

**English:**
So I still remember that. I still remember him asking a simple question. Frankly at the time I did not have a good answer to that question. So that was a lesson for me to get more rigorous about my own thinking.

**中文翻译:**
所以我至今还记得。记得他问了那个简单的问题。坦白说，当时我并没有一个好的答案。所以那对我来说是一个教训，让我对自己的思考变得更加严谨。

---

### (00:20:52) Lenny

**English:**
That's a question that a lot of PMs would hear and be like, "Oh my God. Come on, man. We're trying to move some metrics here." But I love that you took that as like, okay, I really find this really important. And this is a really important question to think about and as a lesson of how to approach this kind of stuff. So I love that. I think you were going to talk about Stripe too, right?

**中文翻译:**
很多产品经理听到这种问题可能会想：“天哪，别逗了，我们是在努力提升指标呢。”但我很喜欢你把它看作是非常重要的事情。这是一个非常值得思考的问题，也是关于如何处理这类事情的一课。我很喜欢这一点。我想你还要聊聊 Stripe，对吧？

---

### (00:21:08) Shreyas Doshi

**English:**
Yes. Stripe, I worked a lot with Patrick and John. John was my manager for a while. And from John, I learned a lot about marketing. John is a master marketer. Among many other things that he's absolutely great at, he's just a great marketer. And I just learned a lot about how to think about talking about the product in terms that, again, obvious stuff, but talking about product in terms that customers really understand. And then sometimes emphasizing things that we as product people might not think are really important, because maybe we didn't spend much time on building it, and we want to talk about things that we spent a lot of time that are truly innovative, etc., etc. And John would often make, again, these observations about, well, if we just talked about the product in this manner, that will likely resonate a lot more with customers.

**中文翻译:**
是的。在 Stripe，我和 Patrick 以及 John（Collison 兄弟）有很多合作。John 曾担任过我一段时间的经理。从 John 那里，我学到了很多关于营销的知识。John 是个营销大师。在他擅长的众多领域中，他绝对是个伟大的营销者。我学到了如何用客户真正能理解的语言来谈论产品——这听起来很显而易见，但很重要。有时他会强调一些我们产品人认为不那么重要的东西，因为也许我们没花太多时间去构建它，而我们总想谈论那些花了大量时间、真正具有创新性的东西。John 经常会观察并指出：如果我们以这种方式谈论产品，可能会引起客户更多的共鸣。

---

### (00:22:00) Shreyas Doshi

**English:**
And that got me thinking a lot about how I need to reframe my approach to basically separate the effort involved in building something with the effort you want to put behind talking about said thing. And that doesn't have to be the same features that you talk about. So, that's something I learned a lot working with John. From Patrick, I think the main thing I learned was just how to think and communicate more clearly. Patrick did that extremely well. And then overall from both, I learned the importance of setting the culture you want, simply by consistently being an example of the behaviors you want to replicate in the organization. So instead of talking about values, I saw both of them just live the values that they wanted the company to replicate, especially as the company was scaling. So, whether it's a culture of being user centric or it's a value around humility, they just lived those values so consistently. And I think that consistency spoke louder than anything that you might write on a poster on the office walls.

**中文翻译:**
这让我开始思考如何重构我的方法，基本上就是将“构建某物的投入”与“宣传某物的投入”分开。你宣传的功能不一定非得是你投入最多的功能。这是我从 John 那里学到的。从 Patrick 那里，我学到的主要是如何更清晰地思考和沟通。Patrick 做得极其出色。总的来说，从他们两人身上，我学到了设定理想文化的重要性，方法就是持续地以身作则，展示你希望在组织中复制的行为。与其空谈价值观，我看到他们两人都在践行他们希望公司复制的价值观，尤其是在公司扩张时期。无论是“以用户为中心”的文化，还是关于“谦逊”的价值观，他们都始终如一地践行着。我认为这种一致性比你写在办公室墙上任何海报上的东西都更有力量。

---

### (00:23:08) Lenny

**English:**
It's just hearing you describe all these companies and all these founders that you've worked with, it's pretty incredible to set of experiences that you've had and the primordial soup in which you became a PM. And it explains a lot about how you're able to squeeze so much wisdom and insights about the role of product management and the art and skill of product management, because you've seen so many ways of doing it and so many companies that have done in different ways. And so, it's a good segue to shifting to talk about the five big ideas. The first is around this concept of pre-mortems, this is something that stuck with me when you tweeted it. I think it was a couple years ago at this point and I see it come up occasionally in your tweets and amongst people chatting your super follower threads. And so, I also like that there's something you can actually implement and act on pretty quickly and see impact. And so, curious to hear your thoughts on this idea of pre-mortem just unpack this idea for folks.

**中文翻译:**
听你描述这些公司和创始人，你所拥有的经历以及你成长为产品经理的“原始汤”环境真是令人难以置信。这解释了为什么你能提炼出这么多关于产品经理角色以及产品管理艺术和技能的智慧和见解，因为你见过这么多不同的做法，见过这么多以不同方式运作的公司。这是一个很好的过渡，让我们开始讨论那五个大想法。第一个是关于“事前剖析”（pre-mortems）的概念。当你发布关于它的推文时，我就记住了。我想那是几年前的事了，我偶尔会在你的推文和超级粉丝群聊里看到它。我也很喜欢它的一点是，你可以非常快速地实施并看到效果。所以，很想听听你对“事前剖析”的看法，请为观众拆解一下这个概念。

---

### (00:23:58) Shreyas Doshi

**English:**
We're all familiar with a post-mortem or as they call it in the military, I think, after action reviews. So every company I've worked at, we've had some form of post-mortem when a launch had problems or an initiative did not go as planned or we suffered an unacceptable system downtime. Somebody would say, "Oh, we need to post-mortem that." And over the years, I really saw the effectiveness of a post-mortem. Some really great insights came out of a post-mortem about what went wrong and what we could have done better. And as I saw the effectiveness of a post-mortem, that's what made me wonder, why do we need to wait until after things go wrong? Because why can't we extract some of these insights before they go wrong? And it was around that time that I discovered the idea of a pre-mortem. I learned about it from an Harvard business review article written by Gary Klein.

**中文翻译:**
我们都熟悉“事后剖析”（post-mortem），或者像军方称呼的那样，“行动后检讨”（after action reviews）。在我工作过的每家公司，当发布出现问题、计划未按预期进行或系统出现不可接受的停机时，我们都会进行某种形式的事后剖析。有人会说：“哦，我们需要对此进行事后剖析。”多年来，我确实看到了事后剖析的有效性。关于哪里出了错以及我们可以做得更好的地方，事后剖析能产生一些非常棒的见解。当我看到事后剖析的效果时，我不禁在想：为什么我们要等到事情出错后才去做呢？为什么我们不能在出错之前就提取出这些见解呢？就在那时，我发现了“事前剖析”这个想法。我是从 Gary Klein 在《哈佛商业评论》上发表的一篇文章中学到的。

---

### (00:24:50) Shreyas Doshi

**English:**
And the idea is simple, which is when you are working on an important project or initiative, you get together with your team early on in the products or the projects' life to see in advance what could go wrong. And the way I describe a pre-mortem is that if you do a pre-mortem right, you will not have to do an ugly post-mortem. You might still do a post-mortem to learn, but odds are very high that it is not going to be a bad post-mortem. And the genius of the pre-mortem ritual is the initial prompt. So it's not just about like, well, what could go wrong? The initial prompt is the genius, which is the prompt starts with, imagine this project that we are working on has failed six months from now, or this launch we are doing has miserably failed. Let's just all imagine that. Now, let's work backwards from there and ask ourselves what went wrong, what could have contributed to this utter failure.

**中文翻译:**
这个想法很简单：当你正在进行一个重要的项目或计划时，在产品或项目的早期阶段，召集你的团队一起预见可能出现的问题。我对事前剖析的描述是：如果你做好了事前剖析，你就不用去做那种难看的事后剖析了。你可能仍会为了学习而做总结，但极大概率不会是一个糟糕的事后剖析。事前剖析仪式的天才之处在于它的“初始提示词”。它不仅仅是问“可能会出什么错？”，它的提示词是精髓，即：想象我们正在做的这个项目在六个月后失败了，或者我们正在进行的这次发布惨败。让我们都想象一下那个场景。现在，让我们从那个结果倒推，问问自己：到底出了什么问题？是什么导致了这次彻底的失败？

---

### (00:25:47) Shreyas Doshi

**English:**
And that's how a pre-mortem meeting will start. The leader will start with this prompt. And then the way the meeting goes is you ask your team members to share what could have caused this utter failure, and the magic of this type of approach where you work backwards from a failed outcome. A hypothetical failed outcome is that it just somehow enables two things. One is much greater psychological safety for team members to talk about things they're concerned about, but that they were just hesitant to bring up because nobody likes to be negative in modern organizations, everybody wants to be optimistic and positive. So a pre-mortem setting gives everybody the license to actually think about what can go wrong. So, that psychological safety is a big, big factor in why a pre-mortem works.

**中文翻译:**
这就是事前剖析会议的开始方式。领导者会给出这个提示。然后会议的进行方式是，你让团队成员分享可能导致这次彻底失败的原因。这种从假设的失败结果倒推的方法，其魔力在于它能实现两件事：一是为团队成员提供了更大的“心理安全感”（psychological safety），让他们敢于谈论那些他们担心但犹豫要不要提出的事情。因为在现代组织中，没人喜欢表现得消极，大家都想保持乐观积极。所以，事前剖析的设定给了每个人“执照”去思考可能出错的地方。心理安全感是事前剖析之所以有效的关键因素。

---

### (00:26:40) Shreyas Doshi

**English:**
And what I've found is at Stripe, I did this regularly with launches that my team was involved in. Sometimes some teams or some people were just surprised or skeptical like, how is it really going to work? And then we go through the pre-mortem meeting and there's a whole process that we can talk about. But as we complete the meeting, I ask everybody, so how did that go? And just everybody is smiling, even though we've spent say 30 minutes or an hour, just talking about terrible scenarios of things that could go wrong, but everybody's feeling a little lighter because its great catharsis for them. So that becomes really important.

**中文翻译:**
我发现在 Stripe，我会定期针对我团队参与的发布活动进行这种剖析。有时有些团队或个人会感到惊讶或怀疑：这真的有用吗？然后我们进行事前剖析会议，这有一套完整的流程。当会议结束时，我问大家：感觉如何？结果每个人都在微笑，尽管我们花了 30 分钟或一个小时讨论各种可能出错的可怕场景，但每个人都觉得轻松了一些，因为这对他们来说是一种极大的宣泄（catharsis）。所以这一点变得非常重要。

---

### (00:27:14) Shreyas Doshi

**English:**
And the last kind of thing I found with pre-mortems now that I've done them with various other companies as well, that I advise and whatnot is the shared vocabulary and the shared vocabulary that you get about being able to talk about things that will fail. So I have a specific approach, which is I ask the team to talk about three things. Each member on the team should bring up three things. One is a tiger. So you can bring up tigers in the shared doc that we create. And a tiger is a threat that will actually kill us, just like a tiger would. So these are actual problematic things that could be really harmful to the product or the project. So, that's a tiger.

**中文翻译:**
我发现事前剖析的最后一个好处——现在我也在为其他公司提供咨询时使用它——是它建立了一种“共同词汇”，一种能够谈论失败可能性的词汇。我有一套特定的方法，即要求团队讨论三件事。每个成员都要提出三样东西。第一种是“老虎”（Tiger）。你可以在我们创建的共享文档中提出“老虎”。“老虎”是指那些真的会置我们于死地的威胁，就像真正的老虎一样。这些是可能对产品或项目造成严重伤害的实际问题。这就是“老虎”。

---

### (00:27:51) Shreyas Doshi

**English:**
The other is paper tiger. So this is a seeming threat that others might be worried about, but you're not worried about. So that's the paper tiger. And then the last one, and I think this one was also used at Airbnb in other ways is elephant. And the elephant in the room that nobody is talking about. So it might not be a tiger, it won't kill us, but you're still worried that we are not seeing reality as it is that. And so, an elephant could be like, well, we are assuming that just because we launch this and do a bunch of PR that we'll get users, but are we sure we're going to get users? That's the elephant in the room that nobody is talking about that, again, this gives you that psychological safety to bring it up.

**中文翻译:**
第二种是“纸老虎”（Paper Tiger）。这是一种看似威胁、别人可能在担心但你并不担心的东西。这就是“纸老虎”。最后一种——我想 Airbnb 也以其他方式使用过这个词——是“大象”（Elephant），即房间里没人谈论的大象。它可能不是“老虎”，不会杀掉我们，但你仍然担心我们没有看清现实。例如，“大象”可能是：我们假设只要发布产品并做一堆公关就能获得用户，但我们确定真的能获得用户吗？这就是没人谈论的“房间里的大象”，事前剖析再次给了你心理安全感去把它提出来。

---

### (00:28:28) Shreyas Doshi

**English:**
And then what I noticed as I ran pre-mortems is that in future meetings that the team had where I wasn't even present, people started talking about, "Oh, I have this tiger. Can I bring up this tiger?" And all of a sudden it became okay for people to bring those things up, which I think is perhaps the best part about a pre-mortem is that shared vocabulary.

**中文翻译:**
我注意到，在我主持过事前剖析后，在团队未来的会议中（甚至我不在场时），人们开始说：“哦，我发现了一只‘老虎’，我能提一下这只‘老虎’吗？”突然之间，提出这些问题变得理所当然了。我认为事前剖析最棒的地方就在于这种“共同词汇”。

---

### (00:28:45) Lenny

**English:**
Such a simple idea that is clearly going to benefit you and your team. And it's interesting that people don't often do this, or haven't even thought about doing this. And so, just to get a little bit deeper, how do you actually execute this meeting? Who do you invite? What are the questions you ask? When exactly do you do this, that kind of stuff?

**中文翻译:**
这是一个非常简单但显然会让团队受益的想法。有趣的是，人们通常不做这件事，甚至没想过要做。为了更深入一点，你具体是怎么执行这个会议的？你邀请谁参加？你会问什么问题？具体在什么时候做？

---

### (00:29:02) Shreyas Doshi

**English:**
And so, as I started doing pre-mortem, they got more and more popular at Stripe, other teams started doing them, and then afterwards I helped some startups also do pre-mortems. And at some point, I decided I should just write down my template for pre-mortems. So I worked with the folks at Coda to create a Coda doc, which you can find, and we can put in the show notes if possible, basically that's an entire template for how to run pre-mortems using this method that I talked about, including tigers, paper tigers, elephants, all of that. The main thing about a pre-mortem is to include people from every function that is going to be involved in, say, if you're doing a launch. And so, if it's a really large launch, sometimes I will separate it into two groups. One is everything related to the engineering side of things. Usually the engineering team is fairly large, so you can bring in every engineer. So, that's really important. Every engineer needs to be in the meeting, and so, it might be a meeting of 10, 15, 20, whatever engineers, and maybe a PM, maybe a design counterpart, and so on.

**中文翻译:**
当我开始做事前剖析时，它们在 Stripe 变得越来越流行，其他团队也开始效仿，后来我也帮助一些初创公司做。在某个时刻，我决定写下我的事前剖析模板。我与 Coda 的团队合作创建了一个 Coda 文档，你们可以找到它（如果可能的话我们可以放在节目介绍里），那是一个完整的模板，教你如何使用我提到的方法（包括老虎、纸老虎、大象等）来运行事前剖析。事前剖析的关键在于邀请涉及该项目的每个职能部门的人员，比如你要进行一次发布。如果是非常大规模的发布，有时我会把它分成两组。一组是与工程相关的所有事务。通常工程团队比较大，所以你可以召集每位工程师。这很重要，每位工程师都需要参加，会议可能有 10、15 或 20 人，再加上产品经理、设计人员等。

---

### (00:30:07) Shreyas Doshi

**English:**
That's just focused on the product engineering side of things like what could go wrong. And then again, for a large launch, I like doing a separate pre-mortem for the go-to-market side. And so that will involve sales team, support team, marketing team, involve design team. Some of the core engineering leads will also need to be at that meeting. Over there, we'll talk about more of the go-to-market risks. So that's what I like to do for a very large launch.

**中文翻译:**
那一组只关注产品工程方面可能出现的问题。然后，对于大型发布，我喜欢为“进入市场”（go-to-market）端单独做一个事前剖析。这会涉及销售团队、支持团队、营销团队和设计团队。一些核心工程负责人也需要参加。在那个会上，我们会讨论更多关于进入市场的风险。这就是我在面对大型发布时的做法。

---

### (00:30:35) Shreyas Doshi

**English:**
For a smaller launch, I just like to do one meeting where everybody is present. And like I said, start with the prompt of, imagine this has failed. So as the pre-mortem meeting leader, it's my responsibility to share the prompt. And then I like doing these pre-mortems where we alternate between speaking and quiet time. So I'll share the prompt and then I'll say, okay, now the next five minutes or the next 10 minutes is quiet time where I already have that template, like the quarter doc where people start entering their own tigers and paper tigers, and elephants in a way that nobody else sees. And so, people do that, and then we go around the room and share.

**中文翻译:**
对于较小规模的发布，我喜欢只开一个所有人都在场的会。正如我所说，以“想象这已经失败了”作为提示开始。作为会议领导者，我有责任分享这个提示。然后我喜欢在会议中交替进行发言和安静思考。我会分享提示，然后说：好，接下来的 5 到 10 分钟是安静时间。我会准备好那个模板（比如 Coda 文档），让大家开始输入自己的老虎、纸老虎和大象，且其他人暂时看不见。大家写完后，我们再轮流分享。

---

### (00:31:11) Shreyas Doshi

**English:**
And the one other innovation I added as I did this often was also, after people shared, I ask people to pick the tiger that they find more scary, but that somebody else mentioned, so not their own tiger, but some other tiger that somebody else mentioned that they found more scary. So, that ends up being people basically are voting. And then as the pre-mortem leader, it's my responsibility to take all of that output that the team has generated in this document and then prioritize. Because again, the point is not to solve every problem, the point is to identify threats that we are not talking about openly or that we might just be missing, or we might be assuming that somebody else is going to deal with it only to find nobody was thinking about it. So then I like to create a pre-mortem action plan and then share that with the team and keep myself as the leader accountable for actually making progress on it.

**中文翻译:**
我经常做的另一个创新是：在大家分享完之后，我让每个人选出一个他们觉得最可怕的“老虎”，但必须是别人提到的，而不是他们自己写的。这实际上变成了一种投票。作为领导者，我的责任是收集团队在文档中生成的所有产出，然后进行优先级排序。因为事前剖析的目的不是解决所有问题，而是识别那些我们没有公开讨论、可能遗漏，或者我们假设别人会处理但实际上没人考虑的威胁。然后我会制定一个事前剖析行动计划，分享给团队，并作为领导者负责推动其实际进展。

---

### (00:32:04) Lenny

**English:**
Having started doing this, have you noticed a less need for post-mortems, basically projects failing less than having less problems? What impact have you seen executing on this idea?

**中文翻译:**
自从开始这样做以后，你是否注意到对事后剖析的需求减少了？也就是说项目失败更少了，问题也更少了？执行这个想法后你看到了什么影响？

---

### (00:32:13) Shreyas Doshi

**English:**
Absolutely, I've seen us identify certain issues that just wouldn't have come up and likely you can't really run a simulation and see what that actually looked like in real life. But those likely would have resulted in a problematic situation afterwards. A great example is sometimes you'll see a company announce something and they have massive backlash. And then one reasonable observer might say, "Well, how did this company miss this?" because what happens is they have the backlash, then the company realizes, "Oh, we have this backlash." Then they start doing damage control. They sometimes might even backtrack and undo whatever they did. They'll say, "Sorry, we didn't think about these issues. Give us some more time and we'll come back, and we'll perhaps relaunch the feature, but in a better way."

**中文翻译:**
绝对的。我看到我们识别出了一些原本根本不会被提出的问题，虽然你无法在现实中运行模拟来对比，但那些问题很可能在事后导致麻烦。一个很好的例子是，有时你会看到一家公司宣布了某件事，结果遭到了巨大的抵制。理性的观察者可能会问：“这家公司怎么会漏掉这一点？”因为发生的情况通常是：先有抵制，公司才意识到“哦，我们被抵制了”，然后开始公关危机处理。有时他们甚至会撤回并取消之前的行动，说：“抱歉，我们没考虑到这些问题，再给我们一点时间，我们会以更好的方式重新发布这个功能。”

---

### (00:33:00) Shreyas Doshi

**English:**
To the casual observer, it may seem like that it should have been obvious and sometimes it's not, but oftentimes I agree, it should be obvious to these teams what issues these things are going to cause. In fact, it is obvious to some team members, but the problem is that they perhaps haven't created that psychological safety and that vocabulary to be able to talk about it in an objective way and to decide with intent, are we going to solve for this or not? So I do see a lot of those scenarios in our industry, which end up just actually wasting a lot of time. Whereas pre-mortem is a very inexpensive way to see these things because all it is is one meeting followed by some work that the leader needs to do to prioritize, followed by some mitigating actions, which you would've had to take anyway. So that's why I'm a huge fan of pre-mortems is, it's one of those very low downside, but very high upside things that I've experienced.

**中文翻译:**
对于普通观察者来说，这些问题似乎显而易见，虽然有时并非如此，但我同意，很多时候这些团队本该预见到会产生什么问题。事实上，某些团队成员确实预见到了，但问题在于他们可能没有建立起那种心理安全感和词汇量，无法以客观的方式讨论它，并有意识地决定“我们要不要解决这个问题”。我在行业中看到很多这类场景，最终只是在浪费大量时间。而事前剖析是一种成本极低的方法，因为它只需要开一个会，然后由领导者进行优先级排序，再采取一些本来就得采取的缓解措施。这就是为什么我是事前剖析的忠实粉丝，它是我经历过的风险极低但收益极高的事情之一。

---

### (00:33:54) Lenny

**English:**
I'm excited to see those template, I haven't seen yet. I don't know that you put one together, so that's awesome. And we'll link it in the notes of this episode. I want to move to our second big idea, which is about something you've called LNO framework, which is all around prioritizing your finite time as a PM and as a team. And so, I'll just kind of turn that over to you to share what that's all about.

**中文翻译:**
我很期待看到那个模板，我还没见过。我不知道你已经做了一个，太棒了。我们会把它链接到本期节目的介绍中。我想转向我们的第二个大想法，那是你称之为“LNO 框架”的东西，它是关于作为产品经理和团队如何优先分配有限时间的。我把它交给你，请分享一下那是怎么回事。

---

### (00:34:15) Shreyas Doshi

**English:**
Yes. And so, I'm going to share a short personal anecdote related to the LNO framework, which is that when I just joined Google as a relatively new PM, this is back in 2008, for the first three years, I was overwhelmed and stressed. And that was because, one, I was a new PM in this really high performance environment. I was working on some important products and launches and I just had too much to do. And I looked back at that time and it was perhaps the most stressful time of my career, where I would long hours, etc. But even at the end of the day, I'd feel highly dissatisfied because my to-do list was endless and I wasn't able to make a dent on it, and I was also a little bit of a perfectionist, so I was like, "No, no, no, I need to do this well."

**中文翻译:**
好的。我要分享一个与 LNO 框架相关的简短个人轶事。2008 年我刚加入 Google 成为一名相对资浅的产品经理时，头三年我感到不知所措且压力巨大。原因有二：第一，我在一个极高绩效的环境中担任新 PM；第二，我负责一些重要的产品和发布，要做的事情实在太多了。回首往事，那可能是我职业生涯中最具压力的时期，工作时间极长。但即便到了深夜，我仍感到极度不满，因为待办事项清单没完没了，我根本无法取得实质性进展。而且我还有点完美主义，总觉得“不，不，不，我必须把这件事做好”。

---

### (00:35:02) Shreyas Doshi

**English:**
It was just constantly I would come home and talk to my wife and basically just complained to her about how I'm not able to make progress or as much progress as I want, then that was accompanied with not being able to sleep very well because I was concerned about how much output I was producing and whatnot. And so, again, very stressful time in my career. And then things changed when I discovered the ideas related to this LNO framework in a block post. Unfortunately, I can't even find that block post somewhere, but it had some ideas that I took and then created this LNO framework on myself, which is essentially that as a product manager or as anybody in a creative high impact high leverage role, all your tasks are not created equal, there are actually three type of tasks that you end up doing in such a role.

**中文翻译:**
我经常回到家就向妻子抱怨，说我无法取得进展，或者进展不如预期。随之而来的是睡眠质量变差，因为我总在担心产出够不够。再次强调，那是我职业生涯中压力非常大的时期。后来，当我在一篇博文中发现与 LNO 框架相关的想法时，情况发生了变化。不幸的是，我现在都找不到那篇博文了，但我吸收了其中的一些想法，并创建了自己的 LNO 框架。其核心在于：作为产品经理或任何处于创意型、高影响力、高杠杆角色的人，你所有的任务并非生而平等。在这种角色中，你最终会处理三种类型的任务。

---

### (00:35:56) Shreyas Doshi

**English:**
So there are L tasks which are leverage tasks. And the L tasks are such that when you put in a certain amount of effort, you get 10X or 100X in return in terms of impact. So those are L task, leverage tasks. Then there are neutral tasks, so that's N. And those are tasks where you basically get what you put in, or just a little more than that. So you put in 1X and you get 1.1 X, those are neutral tasks. And then there are overhead tasks where, again, in terms of impact, you get back a lot less than you actually put in. And it turns out that many people who are ambitious or are perfectionists like myself by default treat each of these types of tasks the same way, and therein lies the problem. So this was the epiphany for me back at Google when I discovered some of these ideas.

**中文翻译:**
第一种是 **L 任务**，即“杠杆任务”（Leverage tasks）。L 任务的特点是，当你投入一定量的努力时，你会获得 10 倍甚至 100 倍的影响力回报。第二种是 **N 任务**，即“中性任务”（Neutral tasks）。在这些任务中，你的产出基本上等于你的投入，或者只多一点点。你投入 1，得到 1.1，这就是中性任务。第三种是 **O 任务**，即“开销任务”（Overhead tasks）。在影响力方面，你的回报远低于你的实际投入。事实证明，许多像我一样有抱负或完美主义倾向的人，默认会以同样的方式对待这三类任务，这就是问题所在。这就是我在 Google 发现这些想法时的顿悟。

---

### (00:36:47) Shreyas Doshi

**English:**
And what I realized is that among the things in my to-do list that are actually only very few L tasks, and so, it made sense for me to focus a lot on those L tasks, to take on those L tasks when I was feeling most productive, most energetic during a certain time of the day.And for the L tasks, let my inner perfectionist shine because I'm going to get so much more in return. It makes sense for me to spend that time on that PRD, for instance, related to an important feature that will meaningfully impact our revenue. I'm going to spend more time on that than I ordinarily would. So now, where does that more time come from because it cannot come from just working more hours? Well, it comes from spending less time on N tasks and O tasks. And so, there are some tasks that you do. Classic example of an O task is say an expense report. Sounds silly, but I used to try to make my expense report really good.

**中文翻译:**
我意识到，在我的待办事项清单中，真正的 L 任务其实很少。因此，我应该把精力集中在这些 L 任务上，在一天中我最高效、最有活力的时间段去处理它们。对于 L 任务，我可以让内在的完美主义尽情发挥，因为回报会非常丰厚。例如，花更多时间写一份关乎收入的重要功能的 PRD（产品需求文档）是值得的。那么，这些额外的时间从哪里来呢？总不能靠无限加班吧。答案是：从减少 N 任务和 O 任务的时间中来。有些任务你必须做，比如 O 任务的一个典型例子是报销单。听起来很傻，但我以前甚至想把报销单做得非常完美。

---

### (00:37:47) Shreyas Doshi

**English:**
And sometimes that made no sense like, "No, no, no. I need to do that." And again, this is the silliest example, but there are many examples. And something I realized is that the same type of activity can actually be either an L task or an N task or an O task. So what's an example? So say a classic PM task activity of filing a bug report. And so, many companies have these bug templates, etc., etc. that you use to file a bug report. Well, it turns out that filing a bug report depending on the situation, depending on what type of bug it is can actually be an L task high leverage task, and over there you want to file a very detailed explicit bug report. And in other cases, might actually be an O task where you don't fill out the template that diligently and you don't add 15 screenshots with annotations, instead, you just have one screenshot and you hit submit on the bug report.

**中文翻译:**
有时那毫无意义，但我当时觉得“不，我必须做好它”。这虽然是最傻的例子，但生活中有很多类似的例子。我意识到，同一种类型的活动实际上既可以是 L 任务，也可以是 N 任务或 O 任务。举个例子：提交 Bug 报告是 PM 的经典工作。很多公司都有 Bug 模板。事实证明，提交 Bug 报告根据情况和 Bug 类型，可能是一个 L 任务（高杠杆任务），这时你需要提交一份非常详细、明确的报告。但在其他情况下，它可能只是一个 O 任务，你不需要那么勤奋地填写模板，不需要加 15 张带注释的截图，你只需要一张截图然后点击提交即可。

---

### (00:38:43) Shreyas Doshi

**English:**
So that shift. Usually for the same type of activity, we provide the same type of engagement. The last example I'll use to illustrate this is taking notes. It turns out even taking notes, taking notes synthesizing them, and then sharing them can actually be an L task, an N task or an O task, depending on what type of notes they are. So, after I understood this, previously, I would just send all notes. I tried to make them really good, which took a lot of time. But then I realized, well, this is a meeting where, yes, I need to send notes, but again, it's like, it's just standard stuff, I just need to quickly list out. People need to really know is the three action items that came out of the meetings who owns them, that's it.

**中文翻译:**
这就是转变。通常对于同类型的活动，我们会投入同等程度的精力。最后一个例子是做会议记录。事实证明，记录、整理并分享会议纪要也可以是 L、N 或 O 任务，取决于会议的性质。理解这一点之前，我会把所有会议纪要都做得非常精美，这很耗时。后来我意识到，有些会议虽然需要发纪要，但内容很常规，我只需要快速列出大家真正关心的三项行动计划及其负责人就行了。

---

### (00:39:23) Shreyas Doshi

**English:**
And it is not about something highly strategic or controversial. Well, in that case, I'm just going to send the notes out the moment the meeting is over, I'm just going to hit send because I've already taken the action item. I'm not going to try to make my notes look great so that others can appreciate, "Oh, Shreyas always sends great notes." On the other hand, if it was a product review with the CEO about a very contentious topic that you have gone back and forth multiple times, and now you made a decision about something, you want to perfect those notes before you send them out, you want to get the language right, you want to be very clear on what the decision is, so there's no room for misinterpretation, so you don't backtrack afterwards or people say, "Well, but I thought we'd said this." That's a case where it's an L task. And I would say just spend an hour or even two hours perfecting those notes because it's an L task. So, hopefully that helps illustrate some of the ideas behind the LNO framework.

**中文翻译:**
如果会议不涉及高度战略性或争议性的内容，我会在会议结束那一刻就点击发送，因为我已经记下了行动项。我不会为了让别人夸奖“哦，Shreyas 的纪要总是写得真棒”而浪费时间去美化它。另一方面，如果是与 CEO 进行的关于某个极具争议话题的产品评审，大家反复拉锯后终于做出了决定，那么你就需要把这份纪要打磨完美。你需要措辞精准，明确决策内容，不留任何误解的空间，以免日后有人反悔或说“我以为我们当时是这么说的”。在这种情况下，它就是一个 L 任务。我会说，哪怕花一两个小时去完善这份纪要也是值得的，因为它具有高杠杆效应。希望这能帮助说明 LNO 框架背后的一些想法。

---

### (00:40:18) Lenny

**English:**
Yeah. And that last piece is a really good segue to the next big idea around optics and the important optics.

**中文翻译:**
是的。最后一点很好地过渡到了下一个大想法，即关于“职场观感”（optics）及其重要性。

---

### (00:40:25) Lenny

**English:**
This episode is brought to you by Sprig. If you've been a member of my community for a while, you know my user fan and investor in Sprig. Sprig is a user research platform that makes getting user insights from your product as easy and fast as getting analytics. The best product and research teams at companies like Loom, Opendoor and Dropbox use Sprig's in product surveys to target specific users, start collecting insights and identify issues and opportunities related to activation, onboarding, engagement [inaudible 00:40:54]. Talk about a platform that pays for itself. But I'm perhaps most excited about Sprig's newest launch, which extends the power of the platform pre-launch and makes it possible to test mockups and prototypes with your own users in minutes.

**中文翻译:**
本期节目由 Sprig 赞助。如果你加入我的社区有一段时间了，你就会知道我是 Sprig 的忠实用户、粉丝和投资者。Sprig 是一个用户研究平台，它让从产品中获取用户洞察变得像获取分析数据一样简单快捷。Loom、Opendoor 和 Dropbox 等公司的顶尖产品和研究团队都在使用 Sprig 的产品内调查来针对特定用户，开始收集洞察并识别与激活、入职、参与度等相关的各种问题和机会。这是一个真正能“值回票价”的平台。但我最兴奋的可能是 Sprig 最新发布的功能，它将平台的能力扩展到了发布前阶段，让你可以在几分钟内与真实用户一起测试模型和原型。

---

### (00:41:06) Lenny

**English:**
The testing interface is super slick and doesn't require any of the typical plugins that make testing with your own users an appealing. And with unlimited seats, you're able to invite anyone from your company to view and use insights generated by Sprig. If you want to get started, head over to sprig.com/lenny and mention that I sent.

**中文翻译:**
测试界面非常流畅，不需要任何那些会让用户测试变得索然无味的典型插件。而且由于席位不限，你可以邀请公司里的任何人查看和使用 Sprig 生成的洞察。如果你想开始使用，请前往 sprig.com/lenny 并提到是我推荐的。

---

### (00:41:26) Lenny

**English:**
But before we get to that, I wanted to have one follow-up question. What are some classic examples of high leverage tasks that PM should try to do more often and think about? What's in that bucket, generally? Even though you pointed out a lot of times they could be in any of the buckets, depending on how you execute them. Are there things that are just like, you should probably spend a lot of your time doing X, Y, Z?

**中文翻译:**
但在聊那个之前，我想追问一个问题。有哪些经典的高杠杆任务（L 任务）是 PM 应该尝试更频繁去做并思考的？通常这个“桶”里装的是什么？尽管你指出很多时候任务属于哪个桶取决于你如何执行，但有没有哪些事情是“你应该花大量时间去做 X、Y、Z”的？

---

### (00:41:43) Shreyas Doshi

**English:**
Yeah. So, turns out that the L tasks, PMs implicitly just deep down they know what their L tasks are, because those are the tasks that are bothering them the most because they are not doing them or because they're not doing them as well as they know they should. So, the classic example of this is the case where a PM will say, "I know I need to work on getting our strategy right, but I don't have time because I'm busy firefighting. I'm busy just dealing with all these execution issues. And I just don't have time to work on the strategy piece." Sometimes we console ourselves by saying, "Yeah. That's because we have all these things going on this month, but trust me, next month, we're going to have ample time and I'm going to just spend a whole week working on strategy." Well, the next month rolls around and it's the same thing, you've got other issues.

**中文翻译:**
是的。事实证明，PM 们内心深处其实知道什么是 L 任务，因为那些正是最让他们困扰的任务——要么是因为他们没去做，要么是因为他们知道自己做得不够好。一个经典的例子是 PM 会说：“我知道我需要把策略搞对，但我没时间，因为我正忙着‘救火’。我正忙着处理所有的执行问题，根本没时间研究策略。”有时我们会安慰自己说：“是的，那是因为这个月事情太多了，但相信我，下个月我们会有充足的时间，我会花整整一周来研究策略。”结果下个月到了，情况还是一样，你又有了新的问题。

---

### (00:42:38) Shreyas Doshi

**English:**
The reason we procrastinate on these tasks are, one, because we know that they're L tasks, we know the impact they'll have, and we are a little scared. That's one. The second is they require dedicated attention. And again, we are afraid about whether we'll have anything interesting to say. That's the deep fear. Why many people procrastinate on strategy? Because deep down, they don't know if they can formulate a good strategy. So time becomes a convenient excuse for us where we say, "Well, it's not me. It's just, I don't have time to work on it." And by the way, everything I say here, I have been that person. So I have been that person who's procrastinated on an L task, whether it's the strategy or whether it's writing the PRD for this really difficult feature, or it is working on aligning two teams where that alignment would create a lot of impact, but it's hard, it's an L task, but I don't do it because I don't want to deal with this other person, this manager I love to collaborate with to make it happen.

**中文翻译:**
我们拖延这些任务的原因，一是我们知道它们是 L 任务，知道它们的影响力，所以我们感到有点害怕。二是因为它们需要专注的投入。而且，我们担心自己说不出什么有见地的话。这就是深层的恐惧。为什么很多人在策略上拖延？因为内心深处，他们不知道自己能否制定出一个好的策略。于是，“时间”成了我们方便的借口，我们会说：“不是我的问题，只是我没时间去弄。”顺便说一句，我在这里说的每一句话，我都曾亲身经历过。我也曾拖延 L 任务，无论是策略，还是为某个极难的功能写 PRD，或者是协调两个团队的对齐（这种对齐会产生巨大影响，但很难）。虽然它是 L 任务，但我没去做，因为我不想和另一个人打交道，或者不想和那个我并不太想合作的经理去沟通。

---

### (00:43:46) Shreyas Doshi

**English:**
And perhaps, I don't know if we'll get along. I don't know if I can have that tough conversation. And so again, it's an L task, but I'll try to apply bandaids instead of just tackling it head on. So, this stuff is tough. And what I've found useful there is two things, two tactics make a huge difference in helping us target L tasks better. One is the idea of placebo productivity. So, what I do is before I have to tackle an L task, that couple of days leading up to it, I do all these placebo productivity tasks. Basically, I intentionally do N tasks and O tasks. I fill up my day with N and O tasks.

**中文翻译:**
也许我不确定我们是否合得来，不确定我能否进行那场艰难的对话。所以，尽管它是 L 任务，我却尝试用“创可贴”式的临时方案，而不是正面解决它。这些事确实很难。我发现有两个策略在帮助我们更好地处理 L 任务方面非常有效。一个是“安慰剂式生产力”（placebo productivity）的想法。在处理 L 任务之前的几天里，我会做很多这种任务。基本上，我是有意识地去做 N 任务和 O 任务，把日程填满。

---

### (00:44:26) Shreyas Doshi

**English:**
And I keep reminding myself, "Yeah, you're just doing neutral and overhead tasks." Because then that just tricks me into thinking, "Okay, if I've been doing this placebo productivity task for the last two days, now, it's the right time for me to do this L task." So that's one tactic. The other is change of location. Nothing, for me, at least fights my procrastination for L tasks better than changing the place from which I'm working. So if I normally work from this desk, the appointed day I did my couple of days of placebo productivity tasks, and on that appointed day, when I'm slated to do an L task, I will actually go out and work from somewhere else, whether it's a coffee shop or a co-working space or some other space. And I find that change of place just forces a focus and a shift in mindset that helps me bang out that L task very quickly and do it really well.

**中文翻译:**
我会不断提醒自己：“是的，你现在只是在做中性任务和开销任务。”这会欺骗我的大脑去想：“好吧，既然我已经做了两天的‘安慰剂任务’，现在是时候处理这个 L 任务了。”这是第一个策略。第二个是“更换地点”。对我来说，没有什么比更换工作地点更能对抗处理 L 任务时的拖延症了。如果我平时在这个桌子上工作，在做了几天安慰剂任务后的预定日子里，当我准备处理 L 任务时，我会出门去别的地方工作，不管是咖啡馆、共享办公空间还是其他地方。我发现环境的改变会强迫我集中注意力并转变心态，帮助我快速且高质量地完成那个 L 任务。

---

### (00:45:16) Lenny

**English:**
That are some great advice. There's so many layers of advice in that answer. Your point about the high leverage tasks being the task that you know you should do, but don't want to do, makes me think of a quote that I always come back to that the cave you fear contains the treasure that you seek. And I often find that to be true. And it's this reminder to just wherever the compass is pointing where it's most difficult, it's probably where the biggest opportunity lies. And so, that's a really good reminder of all that.

**中文翻译:**
这些建议太棒了，答案里包含了很多层面的智慧。你关于“高杠杆任务就是那些你知道该做但不想做的任务”的观点，让我想起了一句我经常回味的话：“你所恐惧的山洞里，藏着你所寻找的宝藏。”我经常发现这是真的。这提醒我们，指南针指向的最困难的地方，往往就是最大机会所在的地方。这是一个非常好的提醒。

---

### (00:45:40) Shreyas Doshi

**English:**
So wise. Yeah, pay attention to your fears because they're telling you something.

**中文翻译:**
太睿智了。是的，关注你的恐惧，因为它们在向你传递信息。

---

### (00:45:44) Lenny

**English:**
Speaking of fears, our third big idea is around the three levels of product work. Basically the three things that a PM should be focused on and how often when you're not aligned on what is most important to you and your team, it often leads to conflict. And so, I'm excited for you to unpack this idea of these three levels of product. We can all share what they are impact, execution and optics. And when I saw this for the first time, I always come back to these three things, because it's so simple and so accurate. And so, I'm excited for you to unpack all this.

**中文翻译:**
说到恐惧，我们的第三个大想法是关于产品工作的三个层面。基本上是 PM 应该关注的三件事，以及当你和团队在“什么最重要”上没有达成一致时，往往会导致冲突。我很期待你拆解这三个层面：影响力（Impact）、执行（Execution）和职场观感（Optics）。当我第一次看到这个理论时，我总是会回想起这三件事，因为它们如此简单又如此准确。

---

### (00:46:12) Shreyas Doshi

**English:**
This idea that there are three levels of product work, impact, execution, and optics. Once you understand it, it explains a lot of what you see on product teams and organizations in general. And so, perhaps start with an example that most product people, product leaders and founders are used to seeing, and something I've seen dozens of times in my career that there's a product review, say, where you as a PM are presenting to the CEO. And as you're presenting what the plan is, obviously since this is a real world product, there's going to be some compromises that you're taking. And so, the CEO perhaps asks about, "Okay, well, why is our customer service response time going to be so high in this case?" And you've thought about it, it's like you did not think about that issue, but that is a good reason why. You talk to the VP of customer support and they don't have the funding this quarter to support your product fully, which will then result in a poor customer service experience for this kind of new product that you're launching.

**中文翻译:**
产品工作有三个层面：影响力、执行和职场观感。一旦你理解了这一点，就能解释你在产品团队和组织中看到的很多现象。也许可以从一个大多数产品人、产品领导者和创始人都见过的例子开始，这也是我在职业生涯中见过几十次的场景：在产品评审会上，你作为 PM 向 CEO 做汇报。当你展示计划时，显然因为这是现实世界的产品，你必须做出一些妥协。CEO 可能会问：“好吧，为什么在这种情况下我们的客户服务响应时间会这么长？”你考虑过这个问题，或者你没考虑到，但其实是有正当理由的。你和客户支持副总裁聊过，他们这季度没有足够的预算来完全支持你的产品，这会导致你即将发布的新产品客户服务体验较差。

---

### (00:47:16) Shreyas Doshi

**English:**
But then you've agreed. You've used your skills of influence to agree that, okay, next quarter, they're going to allocate a lot more people to your product so that the customer service experience will get better next quarter. And so, the CEO asks, "Why is the customer service experience going to be poor here? Or they make a remark like that." And then you reply with all these good reasons. Again, good reasons. And needless to say the rest of the product review doesn't go as well. And after the product review, you wonder what happened. Maybe you ask your manager what happened and particularly you're wondering why couldn't the CEO see a very rational argument about why you can't do this at launch.

**中文翻译:**
但你已经达成了共识。你利用影响力让他们同意下个季度为你的产品分配更多人手，这样下季度体验就会好转。于是，当 CEO 问“为什么这里的客户服务体验会很差？”或者发表类似的评论时，你回答了一堆正当理由。再次强调，确实是正当理由。不用说，接下来的评审进行得并不顺利。评审结束后，你纳闷到底发生了什么。你可能会问经理，尤其是你很不解：为什么 CEO 看不到那个关于“为什么发布时做不到这一点”的极其理性的论据呢？

---

### (00:47:57) Lenny

**English:**
Never happened to me. Never happened.

**中文翻译:**
（开玩笑）我从来没遇到过这种事。从来没有。

---

### (00:47:58) Shreyas Doshi

**English:**
And so, it's like, why doesn't he or she see that? And the reason is that you are thinking at different levels. So you as a PM perhaps are fixated as you are dealing with this launch or this project, you are fixated on the execution level, which is what does it take to get something done? And how can I do it? How can I hit the next milestone? Those are all the things we tend to think about when we are thinking at the execution level. The CEO on the other hand is approaching it from the impact level. And particularly perhaps in this case, what is the impact to the customer experience? And often CEOs are the ones, or founders are the ones that are thinking about, what is the impact to our brand? And so the CEO is thinking at the impact level, you're thinking at the execution level, there is that mismatch.

**中文翻译:**
所以你会想，为什么他/她看不出来？原因在于你们处于不同的层面思考。作为 PM，当你处理发布或项目时，你可能专注于“执行层面”，即：把事情做成需要什么？我该怎么做？我如何达到下一个里程碑？这些都是我们在执行层面思考时倾向于考虑的事情。而 CEO 则是从“影响力层面”切入。特别是在这个例子中，他关注的是对客户体验的影响。通常 CEO 或创始人会思考：这对我们的品牌有什么影响？所以 CEO 在影响力层面思考，你在执行层面思考，这就产生了错位。

---

### (00:48:46) Shreyas Doshi

**English:**
We litigate the minutiae of whatever issue we are discussing, but we never really recognize that it's because we are default thinking at different levels. And so, this realization helped me better understand why there were conflicts between two very smart and well intentioned people or groups within a company. I was myself guilty of this as well earlier on in my career, time and again, I noticed that we can, again, keep litigating the specific issue without understanding that, "Oh no, there's actually just a fundamental mismatch." And it's not like people are stuck at one level and can never think at a different level, it's just that we tend to default to certain levels, and that's like sometimes our preferred level. We can switch levels, but that requires a nudge sometimes. And so, that observation helped explain a lot of things, including what kind of people an organization will promote? Does it promote people who default operate at the impact level? Does it promote people more who default operate at the execution level or at the optics level? So, it has very wide ranging impacts on just overall how an organization functions.

**中文翻译:**
我们纠结于讨论问题的细节，却从未真正意识到这是因为我们默认处于不同的层面。这种认知帮助我更好地理解了为什么公司里两个非常聪明且出发点很好的人或团队之间会产生冲突。我职业生涯早期也犯过这种错误。我一次又一次地注意到，我们可以不断争论具体问题，却没意识到“哦不，这其实只是根本性的错位”。这并不是说人们被困在某个层面永远无法切换，只是我们倾向于默认处于某个层面，那是我们偏好的层面。我们可以切换，但有时需要提醒。这一观察解释了很多事情，包括组织会提拔什么样的人？是提拔那些默认在影响力层面运作的人，还是更多提拔那些默认在执行层面或职场观感层面运作的人？这对组织的整体运作方式有着非常广泛的影响。

---

### (00:49:59) Lenny

**English:**
What's an example of optics? And when optics matters, when you might not be thinking about the importance of that? Just impacting that one a little bit.

**中文翻译:**
能不能举个关于“职场观感”（Optics）的例子？什么时候它很重要，而你可能还没意识到它的重要性？稍微展开讲讲这个。

---

### (00:50:06) Shreyas Doshi

**English:**
Yes. So, optics is about creating awareness of the impact and the execution that you're doing or your team is doing. That is the most compact definition I can come up with for optics. And optics is a good thing. So I'm not saying don't think about optics whatsoever, I think it's actually important to think about optics. And now I'm talking about just internal optics. External optics is an entirely different thing and that's like marketing PR and that's definitely highly important. But even when we talk about simply we limit scope to internal optics, I'll make the observation that you should be spending some time on internal optics because it creates energy, it creates awareness, it creates excitement, it creates opportunities for feedback. Those are all really great things and they will enable greater impact and better execution for you.

**中文翻译:**
好的。职场观感（Optics）就是让别人意识到你或你的团队正在产生的影响力和正在进行的执行。这是我能给出的最简洁的定义。职场观感是一件好事。我并不是说完全不要考虑它，我认为考虑它其实很重要。我现在说的是“内部观感”。“外部观感”是另一回事，那是营销和公关，当然极其重要。但即使我们将范围限制在内部观感，我也会观察到，你应该花一些时间在上面，因为它能创造能量、提高知名度、激发兴奋感并创造反馈机会。这些都是非常棒的事情，它们会为你带来更大的影响力和更好的执行力。

---

### (00:50:57) Shreyas Doshi

**English:**
The challenge with optics is that in certain organizations that balance gets thrown off, where optics sometimes becomes the goal where somehow implicitly the organization or its culture has indicated to it's people that as long as you do the optics well, you are going to be fine, you are going to be appreciated here, you're going to be rewarded here as long as you do the optics fine.

**中文翻译:**
职场观感的挑战在于，在某些组织中，这种平衡被打破了。观感有时变成了目标，组织或其文化在某种程度上暗示员工：只要你把表面功夫（optics）做好，你就会过得很好，你会在这里受到赏识，只要观感没问题，你就会得到奖励。

---

### (00:51:22) Shreyas Doshi

**English:**
And it's not like the organization woke up in the morning and said, 'This is the culture we want to create." It just happens again through little actions that occur every day, it happens through who you hire, who you fire, who you promote and what kinds of things do you appreciate at all hands as the CEO or the founder. Do you appreciate a launch? Do you appreciate results? Do you appreciate, I don't know, an awesome status update that somebody sent? So a status update doesn't on its own accomplish anything. I mean, they are important, but a status update is an optics activity. Now, it is a necessary optics activity, but if you start appreciating the necessary optics activities, constantly, the signal you are sending to people is, 'Oh, you got to focus on this optics activity." So then, that becomes the goal and that can be really harmful.

**中文翻译:**
这并不是说组织某天早上醒来决定“这就是我们要创造的文化”。它是通过每天发生的微小行动形成的：通过你雇佣谁、解雇谁、提拔谁，以及作为 CEO 或创始人在全体会议上表扬什么样的事情。你是表扬一次发布？表扬结果？还是表扬某人发的一份“超赞的状态更新”？状态更新本身并不成就任何事。我的意思是，它们很重要，但状态更新是一种观感活动。虽然它是必要的观感活动，但如果你开始不断地表扬这些必要的观感活动，你向人们发出的信号就是：“哦，你得专注于这种观感活动。”于是，这变成了目标，而这可能非常有危害。

---

### (00:52:09) Lenny

**English:**
So there's these three levels of product work. Do you have advice for, should I just default to one of these normally based on just as a PM, I should always be thinking about impact or is it more, just make sure you're aligned with your leader with your team? Is that the more important takeaway?

**中文翻译:**
既然有这三个层面的产品工作，你有什么建议吗？作为 PM，我是应该默认专注于其中某一个（比如始终思考影响力），还是说更重要的是确保与领导和团队保持一致？哪一个是更重要的收获？

---

### (00:52:23) Shreyas Doshi

**English:**
Yes. I think that's the more important takeaway is again, it's about now we have a vocabulary that we can talk about in an objective manner without pointing fingers. It's like, 'Oh, you tend to be fixated on all these execution details and that's not the right thing." That's the type of feedback sometimes that gets shared. So now you have vocabulary to talk about this and once you have that, you can, as a team, decide what is most important given your context. I'll give you an example. For early stage teams, of course, they need to be thinking about the eventual impact, but what they should actually, I think, most early stage teams should actually optimize for execution. Assuming that they have come up with a reasonable hypothesis about what's going to win, their main emphasis needs to be on execution because you will not see impact readily on a one week horizon or a one month horizon or perhaps even on a quarterly horizon.

**中文翻译:**
是的。我认为更重要的收获是，我们现在有了一套词汇，可以客观地讨论问题而不用指责。以前的反馈可能是：“哦，你总是纠结于这些执行细节，这不对。”现在你有了词汇来讨论它。一旦有了这些，你们作为一个团队，就可以根据具体情况决定什么最重要。举个例子：对于早期团队，他们当然需要思考最终的影响力，但我认为大多数早期团队实际上应该优化“执行”。假设他们已经提出了一个关于如何获胜的合理假设，那么他们的重点需要放在执行上，因为在短短一周、一个月甚至一个季度内，你很难立即看到巨大的影响力。

---

### (00:53:20) Shreyas Doshi

**English:**
So that's an example of a situation where let's be explicit, we need to get great at execution. We have a set of core insights that were informed by our desire to make an impact. But now that we are responsible for converting these insights into a product, let's be largely operating at the execution level, as an example. Say there is a platform team and that platform team has had some issues lately with availability that has disrupted some other teams within the company and their products. Perhaps that platform team should have a conversation that, 'You know what, yes, we need to focus on impact obviously to avoid this negative impact, but also let's pay some more attention to optics because we haven't been communicating with teams as much teams that rely on us. So let's create a better communication channel with them. Let's create better status updates for them," and whatnot. So again, the point is not so much like, "Oh, this is the right level and all other levels are wrong," it's about being sensitive to what's right in this situation.

**中文翻译:**
在这种情况下，我们要明确：我们需要擅长执行。我们有一系列基于影响力目标的内核洞察，但既然我们负责将这些洞察转化为产品，那就让我们主要在执行层面运作。再举个例子，假设有一个平台团队，最近出现了可用性问题，干扰了公司内其他团队及其产品。也许这个平台团队应该进行一次对话：“你知道吗，是的，我们显然需要关注影响力以避免这种负面影响，但我们也需要多关注一下‘观感’，因为我们与依赖我们的团队沟通不够。让我们建立更好的沟通渠道，为他们提供更好的状态更新。”所以，重点不在于“这个层面是对的，其他层面是错的”，而在于对当前情况下的正确选择保持敏感。

---

### (00:54:21) Lenny

**English:**
So you talked about execution and how maybe for early stage startups that might be default the most important type of work to be focused on. And that's actually a really good lead way to our fourth big idea, which is a provocative tweet that you put out a while ago that you said, "The most execution problems are actually strategy problems or culture problems." And so, I'm excited to hear a little bit more about how you discovered that and what that means and maybe how to address those problems.

**中文翻译:**
你谈到了执行，以及对于早期初创公司来说，执行可能是默认最重要的工作类型。这实际上很好地引出了我们的第四个大想法，那是你不久前发布的一条颇具挑衅性的推文，你说：“大多数执行问题实际上是策略问题或文化问题。”我很想听听你是如何发现这一点的，它意味着什么，以及如何解决这些问题。

---

### (00:54:49) Shreyas Doshi

**English:**
And so, I realized this somewhat late in my career as a leader, most execution problems that I encounter in a high performing environment where everybody has the right intentions are actually not execution problems, they are either strategy problems or interpersonal problems or cultural problems. And so, just to illustrate it, I'll make the observation that many leaders are extremely busy in such environments, whether it's a fast growth startup or a fast growth larger company, they're extremely busy, they're usually overwhelmed. Like I said earlier, I was one of those people. Take a deeper look at what they're engaged in. And I got a chance to look at it with my peers that I was mentoring or coaching or people on my team, PMs or PM leaders were extremely busy and usually overwhelmed.

**中文翻译:**
这是我在作为领导者的职业生涯后期才意识到的。在每个人都出发点良好的高绩效环境中，我遇到的大多数执行问题实际上并不是执行问题，它们要么是策略问题，要么是人际关系问题，或者是文化问题。为了说明这一点，我观察到在这些环境中（无论是快速增长的初创公司还是大公司），许多领导者都极其忙碌，通常处于崩溃边缘。正如我之前所说，我也曾是其中之一。深入观察一下他们在忙什么。我有机会观察我指导或教练的同行，或者我团队中的 PM 和 PM 领导者，他们都极其忙碌且不堪重负。

---

### (00:55:36) Shreyas Doshi

**English:**
I noticed two things, that what made them busy is two things. One is that somehow the organization had imposed very high optics requirements. So they had to do a lot of optics related work, show up at certain status meetings and blah, blah, blah. So we talked about that. So let's leave that aside. But the other reason they're so overwhelmed is that they're constantly solving execution problems. So they solve the most important ones, the new ones come up and they solve those. And then there are two new ones to solve and on and on, it's a classic guacamole. And as I noticed that, and I'll share a concrete example of where this might happen, where an execution, a seemingly execution problem surfaces, so say two teams are misaligned. They need to work together where they're misaligned. Everybody knows it. And that is affecting our execution. That misalignment is affecting our execution. It's affecting our ability to hit our OKRs, it's affecting their ability to hit their OKRs.

**中文翻译:**
我注意到让他们忙碌的原因有两点。一是组织施加了极高的“观感”要求，所以他们必须做大量与观感相关的工作，参加各种状态会议等等。这点我们已经聊过了，先放一边。另一个让他们不堪重负的原因是，他们一直在解决“执行问题”。他们解决了一个最重要的，新的又冒出来；解决了那个，又有两个新的要解决，没完没了，就像经典的“打地鼠”游戏。我举个具体的例子：一个看似执行问题的现象浮出水面，比如两个团队不一致（misaligned）。他们需要合作但步调不一。大家都知道这一点，这影响了我们的执行，影响了我们达成 OKR 的能力，也影响了他们达成 OKR 的能力。

---

### (00:56:32) Shreyas Doshi

**English:**
So as a leader or say, you are a director of product or VP of product responsible for one of these teams, you now charge with fixing this execution problem so we can move faster. So you do a dozen meetings to figure out what's going on, you try to diagnose the issue, how to better align. And then you talk to your peers on the other side, and then you decide, "Okay, here's what we're going to do to solve this execution problem. We are going to create a new review process." And so, we are going to create this process and we are going to review priorities on a regular basis across these two teams. And then we are going to also as the managers of these individual teams to do regular one-on-ones so they can stay in sync. So this type of scenario is extremely common, again, especially in high growth organizations that want to accomplish a lot.

**中文翻译:**
作为领导者，比如你是负责其中一个团队的产品总监或副总裁，你现在的任务是修复这个执行问题，以便我们能跑得更快。于是你开了十几次会来弄清楚发生了什么，尝试诊断问题，研究如何更好地对齐。然后你和对方的同行沟通，最后决定：“好吧，为了解决这个执行问题，我们要建立一个新的评审流程。”于是你们建立了一个流程，定期跨团队评审优先级。你们还要求这些团队的经理进行定期的 1 对 1 沟通以保持同步。这种场景极其常见，尤其是在追求高产出的高速增长组织中。

---

### (00:57:19) Shreyas Doshi

**English:**
You'll come up with this solution after many meetings and a lot of work, a lot of conversation. And so, as I grew as a leader, I got increasingly curious about this type of situation. And when I looked at it more closely, I started realizing that what looked like an execution problem, this misalignment and this causing execution issues wasn't usually an execution problem. Instead, it was a strategy problem in some cases, because the reason we are misaligned is because we are pursuing different strategies or that is more often the cases, the reason we are misaligned is because we don't know what the strategy is. So, we don't know what the strategy is. We craft some OKRs based on what makes sense. The OKRs are not very well aligned. We don't have a sense of priorities, and we also don't have a sense of what we do when reality changes.

**中文翻译:**
在经过多次会议、大量工作和沟通后，你提出了这个解决方案。随着我作为领导者的成长，我对这种情况越来越好奇。当我更仔细地观察时，我开始意识到，这种看起来像执行问题的“不一致”，通常并不是执行问题。在某些情况下，它其实是策略问题。因为我们之所以不一致，是因为我们在追求不同的策略；或者更常见的情况是，我们根本不知道策略是什么。因为不知道策略，我们只能根据直觉制定一些 OKR，而这些 OKR 并没有很好地对齐。我们没有优先级感，也不知道当现实发生变化时该怎么办。

---

### (00:58:09) Shreyas Doshi

**English:**
This is all stuff that a clear correct strategy should help inform. But actually this lack of strategy is what's causing this misalignment, it's not because they're not meeting regularly. And what happens in these meetings is, again, you're arguing the minutiae of like, "Well, are you going to work on this feature? I depend on this. Or can you swap two engineers from this team?" All of this stuff that PMs are very familiar with. You're talking about all the small stuff, but nobody recognizes that like, "Can we fix that?" So, as I started seeing this often was a strategy problem, sometimes it was not a strategy problem, it was a culture problem. So, what is a culture problem in this situation where two teams are misaligned?

**中文翻译:**
这些本该由清晰正确的策略来指导。但实际上，正是策略的缺失导致了不一致，而不是因为他们没定期开会。在这些会议中，大家又在争论细节：“你会做这个功能吗？我依赖它。”或者“你能从这个团队调两个工程师过来吗？”这些都是 PM 非常熟悉的琐事。大家都在谈论小事，却没人意识到根本问题。我发现这通常是策略问题，有时则是文化问题。在这种两个团队不一致的情况下，什么是文化问题？

---

### (00:58:49) Shreyas Doshi

**English:**
It's basically that you have a problem where you have set a culture that you are supposed to mainly optimize for your OKRs. In a culture like that, it becomes really hard to allow two teams to work better together because if one of the teams doesn't hit their OKRs, because they were helping rightly for the sake of the company, they were helping this other team that team's manager is going to get his or her wrist lap at the next performance review.

**中文翻译:**
基本上，如果你设定的文化是“每个人都应该主要优化自己的 OKR”，那么在这样的文化中，两个团队很难更好地协作。因为如果其中一个团队为了公司利益去帮助另一个团队，导致自己没能达成 OKR，那么该团队的经理在下次绩效评估时就会受到惩罚。

---

### (00:59:17) Shreyas Doshi

**English:**
So, that is a culture problem. Now, you can set up the meeting and you can request all the syncs you want between these people, it's not going to solve the culture problem, the execution problem is going to manifest in different ways a month down the road. So that's like an example of a culture problem or it could be an interpersonal problem, and this is actually quite common. It's simply that these two people cannot get along. The two team managers do not get along and they just constantly might be creating friction. And so, as a leader, it is important for you to spot that and then coach them through their differences, coach one or both of them through that so that they can better work together. When you solve that, you won't need that monthly review meeting and all these things and 50 other things, because they're not going to work anyway. So that's just one concrete example of team misalignment, which is often viewed as an execution problem, but is not an execution problem.

**中文翻译:**
这就是文化问题。现在，你可以安排会议，要求这些人进行各种同步，但这解决不了文化问题。一个月后，执行问题会以不同的方式再次显现。这就是文化问题的例子。或者它可能是人际关系问题，这其实很常见：单纯就是这两个人合不来。两个团队经理关系不好，不断产生摩擦。作为领导者，识别这一点并辅导他们化解分歧、学会协作至关重要。当你解决了这个问题，你就不再需要那个月度评审会以及其他 50 种乱七八糟的手段了，因为那些手段本来也没用。这只是团队不一致的一个具体例子，它常被视为执行问题，但本质并非如此。

---

### (01:00:10) Lenny

**English:**
Are there signs that tell you where dates are slipping, people are surprised? Of execution problems that you have, are there signs that maybe it's one of these other factors? Or is your experience like it's almost always one of these other things?

**中文翻译:**
有没有什么迹象能告诉你，比如日期延后、大家感到意外？在你遇到的执行问题中，有没有迹象表明它可能是其他因素导致的？或者根据你的经验，它几乎总是其他因素导致的？

---

### (01:00:23) Shreyas Doshi

**English:**
So there are some problems that are truly execution problems. So, an example of that is say you have infrastructure issues, your infrastructure is just old and it can no longer sustain all the usage that you're getting, that will cause execution problems where you'll move slower or you will have outages or high latencies or whatever the case is. That's an execution problem. Another such example of what is really an execution problem is you have a skills' gap. You have say engineers who are not particularly skilled in a certain technology or a certain type of scale that happen to be working in that area, well that is going to create execution issues or you have a PM who is more of a zero to one person, but now you made them responsible for this scale mature initiative, so that's a skill gap and that can cause execution problems.

**中文翻译:**
确实有一些问题是真正的执行问题。例如，基础设施问题：你的基础设施太旧了，无法支撑现有的使用量，这会导致执行问题，比如进度变慢、停机或高延迟。这就是执行问题。另一个真正的执行问题例子是“技能差距”：比如负责某个领域的工程师并不擅长该技术或该规模的开发，这会产生执行问题；或者你让一个擅长“从 0 到 1”的 PM 去负责一个成熟业务的规模化扩张，这种技能错配也会导致执行问题。

---

### (01:01:18) Shreyas Doshi

**English:**
So, there are very concrete instances where there is a real execution problem. It's just that in high performing organizations that are growing really fast, we ignore the other factors that might be at play. And so, now what tells me if something is seemingly an execution problem but not actually an execution problem, a sure far way of identifying those is when you put on a bandaid and the bandaid falls. So, many organizations that are constantly just solving the same problem over and over again like, "Oh, we can never get along. We can never get these two teams to work together.

**中文翻译:**
所以，确实存在真正的执行问题。只是在快速增长的高绩效组织中，我们往往忽略了其他可能起作用的因素。那么，如何判断一个看似执行问题的事情其实不是执行问题呢？一个万无一失的方法是看“创可贴是否会脱落”。许多组织总是在一遍又一遍地解决同一个问题，比如：“哦，我们总是合不来。我们总是没法让这两个团队协作。”

---

### (01:01:49) Shreyas Doshi

**English:**
This team is always slow." And so you put the bandaid, but the bandaid doesn't work. So an organizational memories tend to be surprisingly short. So we forget three months ago we put this bandaid and it's no longer working, we just approach it as, "Oh, let's create a new solution." So voila, there's a new meeting. And so that's where that honesty is important. And memory is important, that no, no, no, this is a bandaid we put, but the problem still exists. So it's probably not an execution issue.

**中文翻译:**
“这个团队总是很慢。”于是你贴上创可贴，但创可贴没用。组织的记忆往往短得惊人。我们忘了三个月前刚贴过这个创可贴，现在它失效了，我们却只是想：“哦，让我们想个新方案吧。”于是，瞧，又多了一个新会议。这就是为什么诚实和记忆力很重要：不，不，不，这是我们贴过的创可贴，但问题依然存在。所以，这很可能不是执行问题。

---

### (01:02:15) Lenny

**English:**
Love that visual of a bandaid falling off. Okay. So, this it's segue to our fifth and final big idea, maybe the most mind bending of all your ideas that I want to talk about. And it's about prioritization and you make this really interesting point that instead of thinking about the highest ROI work you should be doing, which is how I've always thought about it, how I think most PMs think about prioritization. Your point is you should think about it from a minimizing opportunity cost perspective versus an ROI perspective. And so, I'm excited to hear your take on this and where this idea came from.

**中文翻译:**
我很喜欢“创可贴脱落”这个视觉比喻。好的，这引出了我们的第五个也是最后一个大想法，这可能是我最想聊的、最烧脑的一个观点。关于优先级排序，你提出了一个非常有趣的观点：与其思考你应该做的“最高 ROI（投资回报率）”的工作（这是我一直以来的想法，也是大多数 PM 的想法），你认为应该从“最小化机会成本”的角度来思考。我很期待听听你对这一点的看法，以及这个想法是从哪里来的。

---

### (01:02:47) Shreyas Doshi

**English:**
Yeah. I think I learned this by just observing Patrick at Stripe, particularly over the last couple of years that I was there. And then I encapsulated what I learned and observed in this tweet, which is when you are in a high leverage role, you should stop doing work that simply provides a positive return on investment, ROI. And you should start focusing on work that minimizes opportunity cost and what drives that is the observation that in a high leverage role, so product management is good example of a high leverage role, founders by definition are in a high leverage role, engineering leaders, design leaders, designers, these are all fairly high leverage roles. And in a high leverage role, there will be hundreds of things that you can do that will provide a positive ROI. And what is positive ROI? It's simply that the value created is greater than the value of your time that essentially will ensure positive ROI more than zero.

**中文翻译:**
是的。我想我是通过在 Stripe 观察 Patrick 学到这一点的，特别是在我那里的最后几年。我把所学所见浓缩在那条推文中：当你处于高杠杆角色时，你应该停止做那些仅仅提供“正向投资回报率（ROI）”的工作，而应该开始专注于“最小化机会成本”的工作。这一观点的驱动力在于：在高杠杆角色中（产品管理就是一个很好的例子，创始人、工程领导者、设计领导者、设计师也都是高杠杆角色），会有成百上千件事能提供正向 ROI。什么是正向 ROI？简单来说就是创造的价值大于你投入的时间价值，只要大于零就是正向的。

---

### (01:03:48) Shreyas Doshi

**English:**
So, the problem is you should not be doing most of these things. And the reason this ROI mindset is suboptimal and perhaps even harmful in high leverage roles, the formula for ROIs value created minus cost of your time divided by the cost of your time. So, the cost of your time is in the denominator. And just for the sake of simplicity, let's just call it time taken. So when the time taken to do something is in the denominator and whether it's at an individual level or at a team level, what we end up doing to get high ROI on our work is we end up trying to decrease the denominator. So when it's a ratio and you decrease the denominator, the value of the ratio grows. And so, how do you decrease the denominator in this case where time is the denominator is you start working on things that take less time.

**中文翻译:**
问题在于，你不应该做其中的大部分事情。在高度杠杆化的角色中，这种 ROI 思维是次优的，甚至是有害的。ROI 的公式是：（创造的价值 - 时间成本）/ 时间成本。时间成本在分母上。为了简单起见，我们就叫它“耗时”。当耗时在分母上时，无论是在个人层面还是团队层面，为了获得高 ROI，我们最终会尝试“减小分母”。当分母减小时，比值就会增大。那么在这种情况下如何减小分母呢？就是开始做那些耗时更短的事情。

---

### (01:04:36) Shreyas Doshi

**English:**
So you start working on the low hanging fruit. You start prioritizing the quick wins. And the quick wins are very popular. Any team meeting or sprint meeting, "Oh, that's a quick win. Yeah, let's do it." And I don't have anything against quick wins. The problem is we just fill up our plate with quick wins. And while that may be fine, in most cases, in most situations in high leverage roles, you miss the upside and you miss the opportunity that you could have gained by focusing on other things. Let's take opportunity costs now like, how do you calculate opportunity costs? Opportunity cost is simply the value of the optimal option minus the value of the chosen option. So the difference between what could have been the optimal option to pick and the option you did pick is the opportunity cost. So you need to minimize the opportunity cost, meaning you need to be working on the optimal things.

**中文翻译:**
于是你开始做那些“低垂的果实”，开始优先处理“快速见效的小事”（quick wins）。快速见效的小事非常受欢迎，任何团队会议或冲刺会议都会说：“哦，那是件小事，很快就能见效，咱们做吧。”我并不反对快速见效的小事，问题是我们往往把盘子塞满了这些小事。虽然这在大多数情况下可能没问题，但在高杠杆角色中，你会错过巨大的上行空间，错过通过专注于其他事情本可以获得的机会。现在来看看机会成本：如何计算机会成本？机会成本就是“最优选项的价值”减去“所选选项的价值”。你本可以选择的最优项与你实际选择项之间的差额就是机会成本。所以你需要最小化机会成本，这意味着你需要去做那些“最优”的事情。

---

### (01:05:27) Shreyas Doshi

**English:**
So when we reprogram ourselves to think in terms of opportunity cost, we are no longer thinking, "Oh, is this a good use of my time?" Instead, you are thinking, "Is this the best use of my time?" And it's a subtle but profound shift in our thinking. Because when we think about opportunity cost, we will pick certain things that we would've never picked if we just had it the ROI mindset. And again, this applies equally at the level of individuals of the work we decide to do as individuals on a day-to-day basis and the work we do with our teams, the things we prioritize. So that's the basis of this statement that you should try to minimize opportunity costs and focus on those things rather than simply chasing positive ROI.

**中文翻译:**
当我们重新编程自己的思维，从机会成本的角度思考时，我们不再想“哦，这是否是对我时间的合理利用？”，而是想“这是对我时间的最优利用吗？”这是思维上一个微妙但深刻的转变。因为当我们考虑机会成本时，我们会选择一些如果仅凭 ROI 思维绝不会选择的事情。同样，这既适用于个人日常工作的决策，也适用于团队层面的优先级排序。这就是为什么你应该尝试最小化机会成本并专注于那些事，而不是仅仅追求正向 ROI。

---

### (01:06:09) Lenny

**English:**
Is there an example that comes to mind when you did this or maybe did it the wrong way that helped inspire this idea? Or is this just more of a broad lesson that you've learned over time?

**中文翻译:**
有没有什么例子让你印象深刻，比如你做对了或者做错了，从而启发了这个想法？或者这只是你随时间推移总结出的一个广泛教训？

---

### (01:06:18) Shreyas Doshi

**English:**
Oh, I mean, I saw that all the time, the work I did at pretty much every company. And again, I've been guilty of this myself where I think typically the type of situation where I have seen this as an example is you are trying to prioritize the next quarter. There are five sure things you can do that will have small to medium impact, and it's very clear. And then there are two ambiguous things that perhaps deep down you know you should pursue them, but you don't end up picking them because it's, again, you're satisfying yourself by observing, "Oh, each of these is positive ROI. Each of these five things that we can do that are very well defined as positive ROI." And so you don't touch those two things. Now, it could be that one of those things could meaningfully change the trajectory of your business, but doing that requires more work to figure that out, to flesh it out.

**中文翻译:**
哦，我的意思是，我在几乎每家公司的工作中都能看到这一点。我自己也曾犯过这个错。我见过的一个典型例子是：你在规划下个季度的优先级。有五个“板上钉钉”的事情可以做，它们会有中小程度的影响，而且非常明确。另外还有两件模糊的事情，也许内心深处你知道应该追求它们，但你最终没有选择它们。因为你通过观察“哦，这五件事每一件都有正向 ROI，而且定义非常清晰”来满足自己。于是你没碰那两件事。然而，那两件事中的一件可能就有意义地改变你业务的轨迹，但要做那件事需要更多的工作去摸索和充实。

---

### (01:07:11) Shreyas Doshi

**English:**
But we convince ourselves that positive ROI is great. And so we make ourselves busy and this is what I have seen myself do, I've seen other teams do. And certainly when I sit down with PMs often or even founders, I find that there is this gravitation towards these types of tasks, which are simply providing positive ROI. So it shows up most often in our planning, essentially. And again, I'm not against things that are quick wins or things that provide positive ROI, but I always want to check what are some big opportunities that we are not paying attention to by default and under what scenarios can we start chasing that.

**中文翻译:**
但我们说服自己正向 ROI 就很棒了。于是我们让自己忙碌起来，这是我见过自己做过、也见过其他团队做过的事。当然，当我经常与 PM 甚至创始人坐下来聊时，我发现大家总是倾向于这类仅仅提供正向 ROI 的任务。这最常出现在我们的规划中。再次声明，我不反对快速见效或正向 ROI 的事，但我总是想检查一下：有哪些我们默认没有关注的重大机会？在什么情况下我们可以开始追求它们？

---

### (01:07:50) Shreyas Doshi

**English:**
So when I started working on Stripe Connect, which is a major, major product for Stripe and a large business for Stripe, there was a time when I noticed when I just started working on it, I noticed the team was working on a lot of positive ROI things. And I came in and it just simply instigated that like, "Hey, how about we work on this big scary project? Because I was hearing from customers that there is some need and that the instinct that this need is going to grow over time of being able to manage marketplace payments in a more flexible way." And we wouldn't have looked at it if we were just focused on positive ROI, but as we started looking at it, we realized, "Oh yes, this is a huge opportunity." And we were able to then pursue it because we were of shifting the mindset from just positive ROI to minimizing opportunity cost.

**中文翻译:**
当我开始负责 Stripe Connect（这是 Stripe 的核心产品和重大业务）时，我注意到团队当时正在做很多正向 ROI 的事情。我加入后提议：“嘿，我们要不要试试这个‘大而可怕’的项目？因为我从客户那里听说他们有某种需求，而且直觉告诉我，这种以更灵活方式管理平台支付的需求会随时间增长。”如果我们只关注正向 ROI，我们根本不会去看它。但当我们开始研究时，我们意识到：“哦是的，这是一个巨大的机会。”我们之所以能够追求它，是因为我们将心态从单纯追求正向 ROI 转向了最小化机会成本。

---

### (01:08:35) Lenny

**English:**
One more question along this line, just tactically, every PM ends up with a spreadsheet of their ideas and ROI and cost and benefit and all that stuff. Do you recommend folks create a column for opportunity cost or is this more of a broad thought process you go through when you're looking through your list of ideas?

**中文翻译:**
关于这一点我再问一个战术性的问题：每个 PM 最终都会有一个包含想法、ROI、成本、收益等信息的表格。你建议大家专门为“机会成本”建一列吗？还是说这更多是你审视想法列表时的一种宏观思考过程？

---

### (01:08:51) Shreyas Doshi

**English:**
Yeah, it's more the latter. I do not recommend trying to quantify opportunity costs because it's a lost cost. Instead, what teams need is just sometimes the freedom and sometimes just permission to explore and attack these things that minimize opportunity costs. And so, as leaders, that's the best thing we can do is to give the teams that freedom or the permission to pursue these things and the way it manifests. And the way I've tried to do it is when we are planning, I often give guidance to the team around what percentage of our time we want to spend on what type of activity. I learned this from Google's classic 70-20-10%, where during its fast growth years, Google had the 70% search and ads, 20% apps, which was things like Gmail and whatnot, and 10% on other big bets.

**中文翻译:**
是的，更多是后者。我不建议尝试量化机会成本，因为那是徒劳的。相反，团队有时需要的是探索和攻克那些能最小化机会成本的事情的自由和许可。作为领导者，我们能做的最好的事情就是给团队这种自由或许可去追求这些事情。我尝试的做法是：在规划时，我经常给团队一个关于“我们希望在不同类型活动上花费的时间比例”的指导。我是从 Google 经典的 70-20-10% 原则中学到的：在高速增长时期，Google 将 70% 的精力放在搜索和广告，20% 放在应用（如 Gmail 等），10% 放在其他重大赌注上。

---

### (01:09:45) Shreyas Doshi

**English:**
So, I have found that approach very useful during planning. Again, depends on the context, but when the team is starting to plan the next quarter or the next half or the next year, my role as a leader is hopefully I've already clarified the strategy so they have that as an input. But the other thing that I see in my role as a leader is to clarify the rough allocation. So what I'll share as a guidance with the team is given our situation and given our strategy and given what's going on in the market, I would like us to target about 60% of our time on incrementals. And by that, I mean incremental features that improve users' lives on a day-to-day basis. So these are actually high ROI things that we do, and again, these numbers are whatever they are, pick whatever is right for you, but 60% I want to go towards incrementals. 30% I want to allocate towards big new initiatives.

**中文翻译:**
我发现这种方法在规划时非常有用。当然，这取决于具体情况，但当团队开始规划下个季度、半年或一年时，作为领导者，我的角色是（希望已经）阐明了策略，让他们以此为输入。我角色的另一部分是明确大致的资源分配。我会给团队一个指导建议：考虑到我们的现状、策略和市场情况，我希望我们将大约 60% 的时间花在“增量式改进”（incrementals）上。我指的是那些能改善用户日常生活的增量功能，这些其实是高 ROI 的事情。数字可以根据你的情况调整，但假设 60% 用于增量改进，30% 我想分配给“重大新计划”。

---

### (01:10:43) Shreyas Doshi

**English:**
And because it's 30%, it can't be five big new initiatives, it's probably one or two. And then 10% I'd like us to allocate towards stability and infrastructure. So this is the guidance I'll share with the team. And then I will ask the teams to create their plans and proposals based on this guidance. So, this gives people the space to say, "Okay, we do have this 30%, so there's no sense putting in more high ROI tasks in there or quick wins in there." And I think just the simple guidance enables the team to just do the right thing. And I often get surprised with all the awesome stuff they come back with.

**中文翻译:**
因为只有 30%，所以不可能同时做五个重大新计划，可能只有一两个。剩下的 10% 我希望分配给稳定性和基础设施。这就是我会分享给团队的指导意见。然后我会要求团队根据这个指导制定计划和提案。这给了大家空间去思考：“好吧，我们确实有这 30% 的空间，所以没必要再往里塞更多高 ROI 任务或快速见效的小事了。”我认为这种简单的指导能让团队去做正确的事。他们带回来的那些超棒的想法经常让我感到惊喜。

---

### (01:11:18) Lenny

**English:**
I really like that rule of thumb, what an excellent nugget to include along with this big idea. I'm realizing we're going for an hour and a half now, and I don't want to suck up all your time. So there's this idea that I think it might be a really good one to end on. It'll be a bonus sixth big idea around high agency and the importance of PMs being high agency. And the reason that it stuck out to me is this, I found to be really important in my career. And I think led a lot of the success that I saw along the way is just always feeling like I have agency and feeling ownership of what I was doing and where I was going. And so, I'm curious to hear your take on this and to dive into this trade of high agency and how important that is for PMs.

**中文翻译:**
我很喜欢这个经验法则，这真是一个极好的干货。我意识到我们已经聊了一个半小时了，我不想占用你太多时间。所以有一个想法我觉得很适合作为结尾，那就是额外的第六个大想法：关于“高度自主性”（High Agency）以及 PM 具备高度自主性的重要性。它之所以吸引我，是因为我发现这在我的职业生涯中非常重要。我认为我取得的很多成功都归功于始终觉得自己拥有自主权，并对自己所做的事和前进的方向有主人翁感。我很想听听你对“高度自主性”这一特质的看法，以及它对 PM 有多重要。

---

### (01:11:55) Shreyas Doshi

**English:**
I think Eric Weinstein coined this term high agency, which once I discovered it resonated a lot and aligned with some of my ideas and the way I had defined this concept in my head for many years, that high agency is about finding a way to get what you want without waiting for conditions to be perfect or otherwise blaming the circumstances. And so, we've all seen such people, they just either push through in the face of adverse conditions or often they manage to reverse the adverse conditions to achieve their goals. And so, while this is an important trait for many areas in endeavors, I think this is particularly important for product managers because as product managers, we are constantly fighting adverse conditions, not enough resources, challenges with legacy infrastructure, staffing issues, customer problems, and on and on. There's no dirt of problems to solve as a product manager.

**中文翻译:**
我想是 Eric Weinstein 创造了“高度自主性”（High Agency）这个词。我发现它后产生了强烈的共鸣，因为它与我脑海中多年来对这个概念的定义非常吻合。高度自主性是指：找到一种方法去得到你想要的，而不是等待条件完美，或者抱怨环境。我们都见过这样的人，他们要么在逆境中强行推进，要么往往能扭转不利局面以实现目标。虽然这是许多领域都很重要的特质，但我认为对产品经理来说尤为重要。因为作为 PM，我们不断在与不利条件作斗争：资源不足、旧系统的挑战、人员问题、客户问题等等。作为 PM，永远不缺需要解决的问题。

---

### (01:12:55) Shreyas Doshi

**English:**
And I noticed consistently over the years that as I started thinking about what differentiates the PMs who've had just a large impact and even more important than just impact to the company or to the team, PMs who've surprised me in a positive way, PMs who've really exceeded expectations, exceeded perhaps their own capabilities on paper. You see somebody's credentials on paper and then you see their work and their impact. And there's a big difference between what you might assume on paper and the impact they're achieving. And also, the reverse of that, which is sometimes you have PMs who just have tremendous potential. They look great on paper and you know when you're working with them or you're managing them that they're not achieving that potential, they're nowhere close to achieving that potential. And as I look at both of those situations, it became clear to me that high agency was a big contributor, which is the PMs in this first category were despite all the disadvantages and other things, they just took strong ownership.

**中文翻译:**
多年来我一直注意到，当我思考是什么区分了那些产生巨大影响力的 PM 时——甚至比对公司或团队的影响更重要的是，那些以积极方式让我感到惊讶、真正超出预期、甚至超出了他们纸面能力的 PM。你看到某人的简历，然后看到他们的工作和影响力，你会发现纸面实力与实际成就之间有巨大差异。反之亦然，有时有些 PM 潜力巨大，简历漂亮，但当你与他们共事或管理他们时，你会发现他们远未发挥出潜力。当我审视这两种情况时，我清楚地意识到“高度自主性”是一个重要因素。第一类 PM 尽管面临种种劣势，但他们拥有极强的主人翁意识（ownership）。

---

### (01:13:56) Shreyas Doshi

**English:**
So ownership is one component. Ownership mindset is one component of high agency. They took strong ownership and then they creatively executed through the challenges. So a creative execution is another aspect of high agency and they did that with a high degree of resilience, which is a third aspect of high agency. And so, as I realized that it became very clear as to why this was happening. And then it's one of those things that once you see it, you start seeing it in people much more clearly. And so, that's when I wrote about the PM version of high agency, I think that's why it resonated with a lot of people because, again, it gave vocabulary to people for what they already understood and they had seen it, but did not have the words for.

**中文翻译:**
主人翁意识是高度自主性的一个组成部分。他们承担起责任，然后创造性地执行以克服挑战。所以，“创造性执行”是高度自主性的另一个方面。而且他们是以高度的韧性（resilience）来完成的，这是第三个方面。当我意识到这一点时，一切都变得清晰了。这就是那种一旦你理解了，你就会在人身上看得非常清楚的事情。所以我写了关于 PM 版高度自主性的文章，我想这就是为什么它引起了这么多人的共鸣，因为它再次为人们已经理解并见过、但却无法用言语表达的现象提供了词汇。

---

### (01:14:38) Lenny

**English:**
I think that's a really good way to wrap this up, just leaving people at that point of just the empowerment, basically taking responsibility, feeling high agency resiliency. Shreyas, this has been incredibly illuminating. I suspect this is going to be helpful to a lot of product managers and even non-product managers. And so, just two last questions, where can folks find you online if they want to reach out or learn more and then how can listeners be useful to you?

**中文翻译:**
我认为这是一个非常好的结尾，让大家停留在这种赋能感上——承担责任、感受高度自主性和韧性。Shreyas，这次对话非常有启发性。我猜这对很多产品经理甚至非产品经理都会很有帮助。最后两个问题：如果大家想联系你或了解更多信息，可以在哪里找到你？以及听众可以为你做些什么？

---

### (01:15:00) Shreyas Doshi

**English:**
Yeah. So follow me on Twitter and just @shreyas. If you don't have a Twitter account, follow me on LinkedIn, you can just find me there Shreyas Doshi. If you really enjoy the tweets and want to see more, then you can super follow me on Twitter. So this is a smaller community that I'm really enjoying of product managers, founders, product people, designers, engineers, etc. where we go much deeper into these types of topics and more. And if you'd like to learn more about my views on various things related to product, super following me perhaps is a great way to do that.

**中文翻译:**
好的。可以在 Twitter 上关注我，账号是 @shreyas。如果你没有 Twitter，可以在 LinkedIn 上关注我，搜 Shreyas Doshi 就能找到。如果你真的很喜欢我的推文并想看更多，可以在 Twitter 上“超级关注”（super follow）我。那是一个我非常喜欢的更小的社区，成员包括 PM、创始人、产品人、设计师、工程师等，我们会更深入地探讨这类话题。如果你想了解我对产品相关各种事物的更多看法，超级关注可能是一个很好的方式。

---

### (01:15:36) Shreyas Doshi

**English:**
And in terms of other things I'm working on, I am going to be launching a course on product sense and product management later this year, so be on the lookout for that, if that's of interest. And then lastly, I think the best help I can ask for from listeners is just if any of these ideas resonated with you, share them with others. And of course, if there are questions, feel free to ask. But I think my mission here is to really help perhaps bring greater clarity on what is going on around us when we are working in teams and working on projects and products. And so, I really like it when people share the ideas, whether it's on Twitter or publicly, or even with others privately. So that is perhaps the best thing you can do, help me in my mission.

**中文翻译:**
至于我正在做的其他事情，我将在今年晚些时候推出一门关于“产品感”（product sense）和产品管理的课程，如果感兴趣的话可以留意一下。最后，我想向听众寻求的最好帮助就是：如果这些想法中的任何一个引起了你的共鸣，请分享给他人。当然，如果有问题，随时欢迎提问。我认为我的使命是帮助大家更清晰地理解当我们团队协作、处理项目和产品时，周围到底发生了什么。所以我非常喜欢看到人们分享这些想法，无论是在 Twitter 上公开分享，还是私下分享给他人。这可能就是你能做的最好的事，帮助我完成我的使命。

---

### (01:16:22) Lenny

**English:**
Amazing. What a beautiful way to end it. Shreyas, thank you so much for this conversation.

**中文翻译:**
太棒了。多么完美的结尾。Shreyas，非常感谢这次对话。

---

### (01:16:27) Shreyas Doshi

**English:**
Thanks, Lenny. This was a blast. Thanks for having me. It's really a privilege and I am looking forward to another conversation sometime in the future.

**中文翻译:**
谢谢 Lenny。这次聊得很开心。感谢邀请我。这真的是一种荣幸，我期待未来能再次交流。

---

### (01:16:35) Lenny

**English:**
10 big ideas by Shreyas Doshi coming up. I'm really excited about that, too. Thank you again.

**中文翻译:**
下次可能就是“Shreyas Doshi 的十个大想法”了。我也非常期待。再次感谢。

---

### (01:16:39) Shreyas Doshi

**English:**
Great. Bye.

**中文翻译:**
太好了。再见。

---

### (01:16:41) Lenny

**English:**
That was awesome. Thank you for listening. If you enjoy the chat, don't forget to subscribe to the podcast. You can also learn more at lennyspodcast.com. I'll see you in the next episode.

**中文翻译:**
太棒了。感谢大家的收听。如果你喜欢这次对话，别忘了订阅本播客。你也可以在 lennyspodcast.com 了解更多信息。下期节目再见。