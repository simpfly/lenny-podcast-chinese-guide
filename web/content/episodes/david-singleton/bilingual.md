# David Singleton - 双语对照

This is the complete bilingual transcript for **Lenny's Podcast** featuring **David Singleton**, CTO of Stripe.

---

### [00:00:00] David Singleton

**English:**
The way we think about product development at Stripe, it really is to find the correct set of early users to kind of co-create the product with. Maybe the best example of that is Stripe billing. When we got to starting the Stripe billing product, we realized that there were a number of our existing users, these were companies like Figma and Slack, were already using Stripe for payments, but had these subscriptions business models. And we figured that there were going to be many more of these kind of companies into the future. And we could see that they were really kind of pushing the boundaries of what was possible here.

**中文翻译:**
在 Stripe，我们对产品开发的思考方式实际上是寻找合适的一组早期用户，与他们共同创造（co-create）产品。这方面最好的例子也许就是 Stripe Billing。当我们开始开发 Stripe Billing 产品时，我们意识到许多现有用户（如 Figma 和 Slack 等公司）已经在通过 Stripe 处理支付，但他们拥有订阅制的商业模式。我们预见到未来会有更多这类公司出现，而且我们可以看到他们当时正在挑战现有技术的极限。

---

### [00:00:32] David Singleton

**English:**
So we decided to co-create the product with them. So we had shared Slack channels, we'd actually show them product on a very regular basis, get their feedback on it. And only when that original kind of Alpha group was super, super happy with the product did we then think it might be ready to go to a broader audience. So that is just how we build product at Stripe. And that means that every engineer building product at Stripe really has many of the kind of attributes and will exercise many of the attributes that'll you often find in PMs in other companies.

**中文翻译:**
因此，我们决定与他们共同创造这款产品。我们建立了共享的 Slack 频道，定期向他们展示产品并获取反馈。只有当最初的 Alpha 测试小组对产品感到非常非常满意时，我们才会考虑将其推向更广泛的受众。这就是 Stripe 构建产品的方式。这意味着在 Stripe 开发产品的每一位工程师，实际上都具备并运用着许多在其他公司通常只有产品经理（PM）才具备的特质。

---

### [00:01:04] Lenny

**English:**
Welcome to Lenny's podcast where I interview world-class product leaders and growth experts to learn from their hard experiences building and growing today's most successful product. Today my guest is David Singleton. David is chief technology officer at Stripe where he's responsible for guiding its engineering and design teams, a role he's had for over five years. Prior to Stripe, David was VP of engineering at Google where he spent over a decade. And in hearing from David, you'll quickly be able to tell how passionate he is about the craft of building great products and building great teams. We dig into Stripe's unique approach to hiring, how they built a very product oriented engineering team, which allowed them to hold off on hiring their first product manager for many, many years, how they operationalize their operating principle of be meticulous in your craft, including a number of fascinating internal processes like engineer occasions, walking the store and something called friction logging.

**中文翻译:**
欢迎来到 Lenny 的播客。在这里，我采访世界级的产品领导者和增长专家，学习他们在构建和发展当今最成功产品过程中的宝贵经验。今天的嘉宾是 David Singleton。David 是 Stripe 的首席技术官（CTO），负责领导工程和设计团队，他担任这一职位已超过五年。在加入 Stripe 之前，David 在 Google 工作了十多年，担任工程副总裁。听完 David 的分享，你很快就能感受到他对打造卓越产品和卓越团队的热情。我们将深入探讨 Stripe 独特的招聘方式；他们如何建立一支极具产品导向的工程团队，从而在很多年里都不需要聘请第一位产品经理；以及他们如何落实“精益求精（be meticulous in your craft）”这一经营原则，包括一些有趣的内部流程，如“工程师假期（engineerications）”、“巡店（walking the store）”以及所谓的“摩擦日志（friction logging）”。

---

### [00:01:59] Lenny

**English:**
David also shares what it takes to run an engineering culture with the uptime and scale requirements of Stripe, plus how AI is already impacting how they work and lessons around leadership management and planning. I'm so thankful David carved out time to come on the podcast and I know that you'll learn something valuable from it. With that, I bring you David Singleton after a short word from our sponsors.

**中文翻译:**
David 还分享了在满足 Stripe 极高的正常运行时间（uptime）和规模要求下，运营工程文化需要具备哪些要素，以及人工智能（AI）如何影响他们的工作方式，还有关于领导力、管理和规划的经验。非常感谢 David 抽时间参加本期播客，我相信你们会从中获益匪浅。在听完赞助商的简短介绍后，让我们欢迎 David Singleton。

---

### [00:02:22] Lenny

**English:**
This episode is brought to you by Mixpanel offering powerful self-serve product analytics... [Sponsor message for Mixpanel and Eppo omitted for brevity in translation as per standard practice, but keeping the intro/outro to David] ... David, welcome to the podcast.

**中文翻译:**
本期节目由 Mixpanel 赞助，提供强大的自助式产品分析服务……（赞助商 Mixpanel 和 Eppo 广告略）……David，欢迎来到播客。

---

### [00:04:25] David Singleton

**English:**
Thanks for having me, Lenny. It's great to be here.

**中文翻译:**
谢谢你的邀请，Lenny。很高兴来到这里。

---

### [00:04:27] Lenny

**English:**
I know Stripes Sessions is coming around the corner in later next week and I imagine it's a pretty hectic time for you. And so I just want to extra appreciate you making time for this in the middle of all that.

**中文翻译:**
我知道 Stripe Sessions 年度大会下周就要举行了，我猜你现在一定非常忙。所以特别感谢你在百忙之中抽时间参加节目。

---

### [00:04:38] David Singleton

**English:**
Thank you. Well, it's a pleasure. It's a lot of fun. Stripe Sessions is our annual user conference, so we get together a bunch of folks from businesses building on Stripe and it's a great opportunity both to share what we've been up to over the last year, but also just learned a lot from them about what they would like to see us doing. And so I find it very energizing. It is of course a lot of work to put it together. In particular, I'm spending a bunch of time getting some demos together today, which I love building demos so, but it's a real pleasure to join you today.

**中文翻译:**
谢谢。这是我的荣幸，也非常有趣。Stripe Sessions 是我们的年度用户大会，我们会聚集许多在 Stripe 上构建业务的人。这既是一个分享我们过去一年成果的好机会，也是一个向他们学习、了解他们希望我们做什么的好机会。我觉得这非常令人振奋。当然，筹备工作非常繁重。特别是今天我花了很多时间准备演示（demo），我非常喜欢做 demo，所以今天能加入你的节目真的很开心。

---

### [00:05:05] Lenny

**English:**
So as I was preparing for this conversation, I kind of realized that the Stripe alumni are just killing it on this podcast, both in terms of the number of people that have come from Stripe and also just in terms of the quality and the popularity of some of the episodes. So folks like Claire Hughes Johnson, and Shreyas Doshi and Eeke. And my first question essentially, what is it that you all do that allows you to attract hire, close, keep people of that caliber? And I'm not going to accept just we keep a high bar or we just spend a lot of time on hiring. I'm curious just like what is it that you all do that other companies don't do that's maybe unique to the way Stripe finds and hires?

**中文翻译:**
在准备这次对话时，我意识到 Stripe 的校友们在我的播客上表现得非常出色，无论是从嘉宾人数还是从节目的质量和受欢迎程度来看都是如此。比如 Claire Hughes Johnson、Shreyas Doshi 和 Eeke。我的第一个问题是：你们到底做了什么，能够吸引、招聘、签下并留住这种高水平的人才？我不接受“我们标准很高”或“我们在招聘上花了很多时间”这种简单的回答。我很好奇，Stripe 在寻找和招聘人才方面，有哪些是其他公司没做、而你们独有的做法？

---

### [00:05:44] David Singleton

**English:**
Well, yeah, I'd love to tell you more about how we find and hire people. I think it makes sense to kind of zoom out for a second because it's material here. So think about what Stripe is doing. Our core thesis is that the internet economy is going to be much bigger and more important in the future than it is today. And that's certainly played out over the last 10 years. And so we are really a business full of product minded builders who are seeking to make it easier for businesses to get started and to operate against that backdrop. And so we got started building a credit card payments API. Before Stripe came along, accepting credit card payments online was way too hard. You had to go talk to your bank, you had to maybe sign a contract with Visa, MasterCard. You then had to kind of string together all this very complicated infrastructure and it then put a bunch of kind of restrictions and requirements on the business.

**中文翻译:**
我很乐意分享更多关于我们如何寻找和招聘人才的信息。我觉得有必要先宏观地看一下，因为这很重要。想想 Stripe 正在做的事情：我们的核心论点是，互联网经济在未来会比今天规模更大、更重要。过去 10 年的情况确实印证了这一点。因此，我们公司充满了具有产品思维的建设者，他们致力于让企业在这样的背景下更容易起步和运营。我们最初是构建信用卡支付 API。在 Stripe 出现之前，在线接受信用卡支付太难了。你得去和银行谈，可能还得和 Visa、MasterCard 签合同。然后你得把所有这些非常复杂的基础设施串联起来，这给业务带来了很多限制和要求。

---

### [00:06:37] David Singleton

**English:**
And John and Patrick are our co-founders at a previous business and they tell this funny story actually, which is while they were building that company, they assumed, it was an internet company, they assumed the hardest thing was going to be putting together hardware in a data center. But it turned out because there were services like AWS around by then, that that was actually quite easy. However, when it came to accepting payments in that business, it was just as hard as they had expected building hardware to be. They had to actually deploy some physical hardware, they had to do a whole bunch of these partnerships and it was very difficult, especially as an upstart, folks that didn't have any reputation yet to kind of be taken seriously and be able to correct into that. And so that's kind of the inspiration behind Stripe. So we started out solving a really kind of important and profound problem for these businesses getting started and scaling and obviously taking a very developer-centric approach to that in the early days.

**中文翻译:**
我们的联合创始人 John 和 Patrick 在创办上一家公司时讲过一个有趣的故事：当时他们觉得，作为一家互联网公司，最难的事情应该是组装数据中心的硬件。但事实证明，因为当时已经有了 AWS 之类的服务，硬件其实挺容易的。然而，当涉及到在那家公司接受付款时，难度却和他们预想的构建硬件一样大。他们实际上不得不部署一些物理硬件，进行大量的合作伙伴洽谈，这非常困难，尤其是作为一家还没有声誉的初创公司，很难被认真对待。这就是 Stripe 背后的灵感。所以我们从一开始就致力于为这些起步和扩张中的企业解决一个非常重要且深刻的问题，并且在早期采取了非常以开发者为中心的方法。

---

### [00:07:24] David Singleton

**English:**
I think what's exciting to know about and important to know about next is as we've scaled, we really kind of figure out what to do based on paying really close attention to our users. Those are the businesses building on Stripe. What are they getting out of the products as they are today and what are the problems adjacent to the ones that we're already solving that they have to put a lot of their own energy into but really feel like they shouldn't and they'd like us to help. And when we find that confluence of kind of need and then adjacency to what we're already doing, that's usually our invitation to go and build the next layer of our economic infrastructure. So we think about what we do today is building economic infrastructure for the internet and beyond.

**中文翻译:**
接下来很重要的一点是，随着规模的扩大，我们通过密切关注用户来决定下一步该做什么。这些用户就是在 Stripe 上构建业务的企业。他们从现有产品中得到了什么？在我们要解决的问题周边，还有哪些问题是他们不得不投入大量精力、但又觉得不应该由他们处理、希望我们能提供帮助的？当我们发现这种需求与我们现有业务的交集时，通常就是我们受邀去构建下一层经济基础设施的时候。所以我们认为，我们今天所做的是为互联网及更广阔的领域构建经济基础设施。

---

### [00:08:03] David Singleton

**English:**
So to bring this back to how do we attract the right talent and why does this matter? First of all, a lot of people, most people I think come to Stripe because they see that there is this great opportunity to help businesses at scale. So it really is about taking part in a mission that matters and are really motivated by that idea that we spend a lot of time with our users, the folks that actually need our help and are guided by them. And that mindset I think attracts a certain kind of person who wants to take a lot of agency, wants to understand the problems deeply and come up with their own ideas about how to solve for them. Because we're building infrastructure, it's also our approach that we really do think that we can do the best work kind of behind the scenes. We don't have to be out having the splashy launch, but hopefully all of our users can and we are quietly working behind the scenes to make their businesses better and more effective over time.

**中文翻译:**
回到我们如何吸引合适的人才以及为什么这很重要。首先，很多人，我想大多数人来到 Stripe 是因为他们看到了一个大规模帮助企业的绝佳机会。这实际上是参与一个有意义的使命，并被“花大量时间与真正需要帮助的用户在一起并受其引导”这一理念所激励。我认为这种心态会吸引特定类型的人：他们想要拥有极大的自主权，想要深入理解问题，并提出自己的解决方案。因为我们构建的是基础设施，我们的理念是，我们相信最好的工作是在幕后完成的。我们不需要大张旗鼓地发布产品，但我们希望我们的用户可以，而我们在幕后默默工作，让他们的业务随着时间的推移变得更好、更高效。

---

### [00:09:02] David Singleton

**English:**
And I think that attracts folks with a certain kind of mindset, which is the interest and kind of tenacity to dig into difficult problems that may not be obvious and obviously kind of attractive to everyone in the world then really plug away at them until we've made a tremendous amount of progress. And so it attracts folks that are long-term thinkers, that care about building and also actually want to work very collaboratively together. So when I think about what makes Stripe different to other companies, it really is this singularity of purpose. Our mission is increasing the GDP of the internet and building this financial infrastructure to do that and a tremendous amount of teamwork and collaboration to get that done. And so that attracts a certain kind of person. When we find those people, we don't hide any of that. You have to care about that in order to, I think be excited about working at Stripe.

**中文翻译:**
我认为这吸引了具有某种心态的人，即有兴趣且有韧性去钻研那些可能并不显眼、也不一定能立刻吸引全世界目光的难题，然后坚持不懈地努力，直到取得巨大进展。因此，它吸引了那些长期主义者、热爱构建产品、并且真正愿意紧密协作的人。所以当我思考 Stripe 与其他公司的不同之处时，核心在于目标的单一性。我们的使命是增加互联网的 GDP，并为此构建金融基础设施，这需要大量的团队合作和协作。这吸引了特定的人群。当我们寻找这些人时，我们从不隐瞒这些。我认为你必须认同这些，才会对在 Stripe 工作感到兴奋。

---

### [00:09:55] David Singleton

**English:**
And so we work very hard to make it very clearer as we're bringing people in that that's what this is about. And to that end, we're often very patient when we're hiring. So especially for critical roles, leadership hiring in particular, we're happy to take our time and meet tens or hundreds of people. And then in particular, sometimes we'll meet someone that we think is a really good fit for a given role, but they're not available right now. And then we'll be patient. We'll keep building the personal relationship with them and oftentimes the moment in time comes when it makes sense for them to join. And in order to pull that off, it's also the case that hiring at Stripe is a very personal activity. So look, there are lots of other companies where recruiting is kind of like this machine. And by the way, we have an awesome recruiting team, but folks across the rest of the company partner very closely with our recruiting team.

**中文翻译:**
因此，我们在引入人才时会非常明确地告知，这就是我们的核心。为此，我们在招聘时通常非常有耐心。特别是对于关键职位，尤其是领导层招聘，我们愿意花时间去见几十个甚至上百个人。有时我们会遇到一个非常适合某个职位的人，但他们目前还没法入职。我们会保持耐心，继续与他们建立个人关系，通常时机成熟时，他们就会加入。为了实现这一点，Stripe 的招聘也是一项非常个性化的活动。你看，很多其他公司的招聘就像一台机器。顺便说一下，我们有一支很棒的招聘团队，但公司其他部门的同事会与招聘团队紧密合作。

---

### [00:10:47] David Singleton

**English:**
So it's not like it's a machine that delivers new hires, then you're like, oh, well maybe this person is here and I can put them to use on that thing. Our managers spend a lot of time identifying exactly what they need for the various roles that we have and then getting to know the potential candidates, the people out there in the world that could do these jobs actually really go quite deep with them on why it might make sense for them to feel like number one, they can feel very personally fulfilled against that mission here. And then also why it represents a bigger opportunity for them than maybe anything else they can spend their time and attention on. And to that end, another thing that I think Stripe has definitely delivered for many, many people who join here is just, and I care about preserving this in the culture, is just tremendous learning opportunities.

**中文翻译:**
所以这不像是一台交付新员工的机器，然后你心想：“哦，既然这人来了，我就让他去做那件事吧。”我们的经理会花大量时间明确各个职位到底需要什么样的人，然后去了解潜在的候选人，深入探讨为什么加入 Stripe 对他们有意义——首先，他们能在这里通过实现使命获得个人成就感；其次，为什么这比他们能投入时间和精力的其他任何事情都代表着更大的机会。此外，我认为 Stripe 为许多加入的人提供的另一件东西是巨大的学习机会，我也非常注重在文化中保留这一点。

---

### [00:11:35] David Singleton

**English:**
Very, very many people at Stripe today are doing a quite different job to the one that they join for. In order to do that they've often had to learn a lot and stretch themselves into new areas. It's also the case that when you think about that financial infrastructure we're building, the space really rewards people who want to go and learn a ton of detail in how these systems that are not that popular or well understood in the broader world, how they actually work and assimilate just a lot of context. And then in particular, you can build better stuff. Right. You're sharing that context with each other and helping other people learn. And so I think that all ladders up to this kind of group of folks that you mentioned. And all the folks you mentioned are wonderful Stripes or former Stripes that come together in service of our users.

**中文翻译:**
今天在 Stripe，非常多的人所做的工作与他们入职时完全不同。为了做到这一点，他们通常必须学习很多东西，并向新领域拓展。此外，当你思考我们正在构建的金融基础设施时，这个领域真的会奖励那些愿意深入学习大量细节的人——去了解这些在外界并不普及或不被理解的系统是如何运作的，并吸收大量的背景信息。这样你就能做出更好的东西。大家互相分享背景信息，帮助他人学习。我认为所有这些因素共同造就了你提到的那群优秀人才。你提到的所有人都是出色的“Stripes”（Stripe 员工）或前员工，他们为了服务用户而聚在一起。

---

### [00:12:22] Lenny

**English:**
I always love to hear what people call their people internally. So Stripes. Good to know.

**中文翻译:**
我一直很喜欢听人们在内部如何称呼自己的员工。原来是 Stripes，记住了。

---

### [00:12:26] David Singleton

**English:**
That's right.

**中文翻译:**
没错。

---

### [00:12:28] Lenny

**English:**
So just to summarize what you shared, which I was just writing as you were talking about the things that essentially help Stripe build this incredible team. A strong mission and a mission that draws people in that are incredible and people may be hearing that and be like, yeah, yo, sure. But in my experience, having invested in a bunch of companies and working with a lot of founders, there's such a dichotomy between how hard it is for companies to hire when they don't have a mission people really care about versus a mission that's really meaningful. So there's something so powerful there and so it's 100%, I could see how that works so well. And then the other things you mentioned, patients, personal connections between the hiring manager and the people they're hiring. And I see that on Twitter, a lot of PMs are just doing things, like basically it's like they're writing on a little startup on Twitter like Jeff Weinstein, Atlas.

**中文翻译:**
总结一下你分享的内容，也就是我刚才记下的那些帮助 Stripe 建立这支不可思议团队的要素：一个强大的使命，一个能吸引优秀人才的使命。人们听到这可能会觉得：“切，当然啦。”但在我的经验中，投资过很多公司并与许多创始人合作后，我发现如果公司没有一个人们真正关心的使命，招聘难度会非常大；而如果有一个真正有意义的使命，情况就完全不同。这其中蕴含着巨大的力量，我完全能理解它为何如此有效。此外你提到的其他因素：耐心、招聘经理与候选人之间的个人联系。我在 Twitter 上看到很多 PM 都在做类似的事情，基本上就像在 Twitter 上运营一家小创业公司，比如 Jeff Weinstein 负责 Atlas。

---

### [00:13:13] David Singleton

**English:**
Jeff is the PM for our Atlas product, and he's a great example of someone who cares a lot about learning exactly how the world works. So I mean for instance, one of the things that that team and Jeff really has driven this himself have done recently is recognizing that when you're starting a new business in the US, one of the most frustrating steps is that you have to apply for this Employer Identification Number from the IRS. And it used to have an extremely long backlog and it's really hard. You can't start running your business until you have it. And Jeff dug into the details, the team dug into the details and we're just like kept asking, does it have to be this way? Does it have to be this way? And eventually we work with the IRS to make it possible for us to issue those numbers much, much more quickly, like instantly as you sign up. And I think that's exactly a great example of how being curious, having this relentless passion to solve problems for users and then just keep plugging away at a problem delivers this great result and in a environment where you can learn a lot from each other.

**中文翻译:**
Jeff 是我们 Atlas 产品的 PM，他是一个非常关注世界运作细节的绝佳例子。例如，Jeff 和他的团队最近推动的一件事是：他们意识到在美国创办新公司时，最令人沮丧的步骤之一是必须向 IRS（美国国税局）申请雇主识别号码（EIN）。过去这个申请积压非常严重，而且很难办，没拿到它你就没法开始经营业务。Jeff 和团队深入研究了细节，不断追问：“一定要这样吗？一定要这样吗？”最终，我们与 IRS 合作，实现了在用户注册时几乎瞬间就能发放这些号码。我认为这就是一个完美的例子：保持好奇心，拥有解决用户问题的持久热情，然后不断钻研，最终在互相学习的环境中取得伟大的成果。

---

### [00:14:11] Lenny

**English:**
I hope he got a big promotion for getting the IRS to do something that he needed. That's incredible. I'm going to ask, try to go one layer deeper on the hiring piece and then move on to a different topic, but, what is just the interview process like? I don't know how involved you are with the product management hiring process, but just I'm curious what that is like, high level and engineering hiring process, however you can share.

**中文翻译:**
我希望他因为让 IRS 配合工作而得到了大幅晋升，这太不可思议了。关于招聘，我想再深入问一层，然后转到另一个话题。面试流程大概是什么样的？我不确定你参与产品经理招聘的程度有多深，但我很好奇高层面试和工程招聘流程是怎样的，只要能分享的都可以。

---

### [00:14:32] David Singleton

**English:**
Yeah, there are a couple things that are very common across hiring for all roles at Stripe and in particular engineers and PMs. One of the things is we do have structured hiring loops. So we put everyone through a very consistent process, so very personal as we help folks figure out why they might want to be here. But then we have a consistent way of evaluating talent. And I think that's important because it means that you can, as an interviewer, as a hiring manager, you can actually really start to understand what is the broad spectrum of responses you might get here and what do I actually learn about individual candidates when I'm asking similar questions. The other thing that these loops have in common is nothing is a trick question. We try to put people into an environment which is as close to doing the actual work together as we possibly can.

**中文翻译:**
Stripe 所有职位的招聘，尤其是工程师和 PM，都有一些共同点。首先，我们有结构化的招聘环（hiring loops）。我们会让每个人都经历一个非常一致的流程，在帮助候选人了解为什么要加入的同时，我们也有一套一致的人才评估方式。我认为这很重要，因为作为面试官或招聘经理，你可以开始理解不同候选人对相似问题的反应光谱，从而真正了解每个人的特点。这些招聘环的另一个共同点是：没有脑筋急转弯或陷阱题。我们尽量让候选人处于一个尽可能接近实际工作的环境中。

---

### [00:15:18] David Singleton

**English:**
So I mean for engineers for instance, we've got several different coding exercises that they do. They share their screen with the interviewer. It's actually kind of pair programming welcome to use Google to search for Stack Overflow to search for answers. We don't care. We just want to see the outcome. We're happy for you to ask your interviewer questions as you go along. And we've created these exercises that is close to real problems as we need to solve at Stripe as possible. The same is true on the PM side. One of the things, for instance we do with PMs is we have a written exercise, we've got obviously a variety of different problems and we find that very valuable for actually just seeing how does someone attack a real problem that they would be solving at work and will they want to do that in a way that is curious, digging into the details, collaborative with their interviewer and so forth. So that's the point. Structured loops that are consistent. And then questions that are as close to the real job as we possibly can.

**中文翻译:**
比如对于工程师，我们有几个不同的编程练习。他们会与面试官共享屏幕，这实际上有点像结对编程（pair programming）。我们欢迎你使用 Google 或 Stack Overflow 搜索答案，我们不在乎，我们只想看结果。我们也欢迎你在过程中向面试官提问。我们设计的这些练习尽可能接近 Stripe 需要解决的真实问题。PM 招聘也是如此。例如，我们会给 PM 安排一项书面练习，涉及各种不同的问题。我们发现这对于观察一个人如何应对工作中可能遇到的真实问题非常有价值——他们是否好奇、是否深入细节、是否愿意与面试官协作等等。所以重点就是：一致的结构化招聘环，以及尽可能贴近实际工作的题目。

---

### [00:16:13] Lenny

**English:**
And for the questions on the PM side, do you have them do it at home or do them do it in the office?

**中文翻译:**
对于 PM 的题目，是让他们在家里做还是在办公室做？

---

### [00:16:18] David Singleton

**English:**
It's a variety. Right now at Stripe, we're very much in a hybrid mode, so a lot of our interviews are still happening over Zoom, although we have plenty of great activity going on in our offices as well. The written exercises tend to be something that you do in your own time. We suggest a time bind so it's not an unreasonable demand in the rest of your life. And then the other exercises are with an interviewer on Zoom.

**中文翻译:**
各种情况都有。目前 Stripe 处于混合办公模式，所以很多面试仍然通过 Zoom 进行，尽管办公室里也有很多活动。书面练习通常是在你自己的时间完成。我们会建议一个时间限制，以免对你的生活造成不合理的负担。其他的练习则是通过 Zoom 与面试官一起完成。

---

### [00:16:40] Lenny

**English:**
Okay. So speaking of product managers at Stripe, Stripe is kind of famous slash infamous for waiting a long time to hire your first product manager. From what I understand, it was like around the 200th employee and maybe five years in, which to me tells me that you're really good at building product minded engineers and or hiring and building a product minded engineering culture. How do you do that? How do you go about doing that? And then I'm also just curious what PMs ended up bringing to the table and how they kind of collaborate now.

**中文翻译:**
好。说到 Stripe 的产品经理，Stripe 有个很有名（或者说“臭名昭著”）的特点，就是等了很久才招第一个 PM。据我所知，大概是在第 200 名员工、公司成立五年左右的时候。这对我来说意味着你们非常擅长培养具有产品思维的工程师，或者擅长招聘和构建具有产品思维的工程文化。你们是怎么做到的？另外我也很好奇，PM 最终为团队带来了什么，以及他们现在是如何协作的。

---

### [00:17:06] David Singleton

**English:**
Yeah, so I mean at Stripe today, we have lots of product managers, lots of engineers, product management's an extremely valuable and important job family. I'll talk more about what folks do today. It is true that our original team, and I think we hire our first PM a little bit earlier than you said, but our original team was really an engineering team. However, they were extremely product minded. And I would honestly say that of all of the very early team that I've worked closely with and know well over time, every single one of them could also have been and essentially also was acting as a PM. If you think about the nature of the first Stripe product, and again today we solve problems for businesses from the very small to the very large across a whole range of financial infrastructure. But the initial product was very developer focused and we still have a developer focused at the core of many things that we do.

**中文翻译:**
是的，现在的 Stripe 有很多产品经理和工程师，产品管理是一个极其宝贵且重要的职位序列。我稍后会详细谈谈大家现在的工作。确实，我们最初的团队——虽然我觉得招第一个 PM 的时间比你说的要早一点——但最初确实主要是工程团队。然而，他们极具产品思维。坦率地说，在我密切合作并长期了解的所有早期团队成员中，每一个人其实都可以胜任 PM，而且本质上也在履行 PM 的职责。想想 Stripe 第一款产品的性质，虽然今天我们为从小到大的各种企业提供全方位的金融基础设施，但最初的产品是非常以开发者为中心的，而开发者导向至今仍是我们许多工作的核心。

---

### [00:17:56] David Singleton

**English:**
The best PMs for developer focused products I think are usually very technical. They're mostly former engineers themselves or maybe kind of current engineers still tinkering on the side, but bringing a lot of user insight and strategy to the problem. And every single early member of the team at Stripe had to act like that in order to work the way that we do and that we want to. So remember, again, that is to get to know our users very well and then bring those kind of personal insights into our product development loop. So I mean, in fact, the way we think about product development at Stripe, it really is to find the correct set of early users to kind of co-create the product with. So maybe the best example of that, or at least an example of that is Stripe billing. So it's our solution for subscriptions and invoicing.

**中文翻译:**
我认为，针对开发者产品的最佳 PM 通常技术背景深厚。他们大多本身就是前工程师，或者可能是仍在业余时间钻研技术的现任工程师，但他们能为问题带来大量的用户洞察和策略。Stripe 团队的每一位早期成员都必须这样行事，才能按照我们想要的方式工作。记住，我们的方式是深入了解用户，然后将这些个人见解带入产品开发循环。事实上，我们在 Stripe 思考产品开发的方式，就是寻找合适的早期用户来“共同创造”产品。最好的例子（或者说其中一个例子）就是 Stripe Billing，这是我们的订阅和发票解决方案。

---

### [00:18:43] David Singleton

**English:**
And when we got to starting the Stripe billing product, we realized that there were a number of our existing users. These were companies like Figma and Slack. We were already using Stripe for payments, but had these subscriptions, business models, and we figured that there were going to be many more of these kind of companies into the future, and we could see that they were really kind of pushing the boundaries of what was possible here. So we decided to co-create the product with them. The early team working on billing got a bunch of those companies included Slack and Figma, but a bunch more as well, got to know them. But the individuals who were operating those systems at those companies personally understood exactly what their challenges and hopes and dreams for the future were, and then brought them into a kind of shared product development loop.

**中文翻译:**
当我们开始开发 Stripe Billing 时，我们意识到一些现有用户（如 Figma 和 Slack）已经在使用 Stripe 支付，但他们有订阅制的商业模式。我们预见到未来会有更多这类公司，而且能看到他们正在挑战技术的极限。于是我们决定与他们共同创造。负责 Billing 的早期团队找了一批这样的公司，包括 Slack、Figma 等等，去深入了解他们。那些在这些公司操作系统的个人，非常清楚他们的挑战、希望和对未来的愿景。我们将他们带入了一个共享的产品开发循环。

---

### [00:19:28] David Singleton

**English:**
So we had shared Slack channels, we'd actually show them product on a very regular basis, get their feedback on it. And only when that original kind of Alpha group was super, super happy with the product did we then think it might be ready to go to a broader audience. So that is just how we build product at Stripe. And that means that every engineer building product at Stripe really has many of the kind of attributes and will exercise many of the attributes that you'll often find in PMs in other companies. Now, that doesn't mean that there isn't a really important job for PMs to do here as well. So something else that I think is worth knowing about Stripe and is somewhat unique is building products is also a much more kind of team sport at Stripe across functions.

**中文翻译:**
我们建立了共享的 Slack 频道，定期向他们展示产品并获取反馈。只有当最初的 Alpha 小组非常满意时，我们才觉得可以推向更广泛的受众。这就是我们在 Stripe 构建产品的方式。这意味着在 Stripe 开发产品的每一位工程师，实际上都具备并运用着许多在其他公司通常只有 PM 才具备的特质。当然，这并不意味着 PM 在这里没有重要的工作。关于 Stripe 还有一点值得了解，而且比较独特，那就是在 Stripe，构建产品更像是一项跨职能的“团队运动”。

---

### [00:20:31] David Singleton

**English:**
So there are the obvious functions that most companies have, engineers, engineering managers, product managers, designers, and those folks all get involved throughout the entire lifecycle of product development at Stripe. But also, if you think about the nature of our products, it turns out that a lot of our products are about abstracting over what the financial system does at large. So sometimes there's a capability in a certain country and there's a different one in another country, and we want to make it all work consistently. So our financial partnerships matter. So sometimes folks from our partnerships team are part of the kind of early development phase of a product. Similarly, when you think about product legal and many of the other functions around risk and compliance and so forth, we actually need their creative thinking in order to build the right stuff for our users. So the point is it's a way more cross-functionally collaborative process than I've seen in a lot of other companies. And PMs play just this absolute linchpin role across a lot of that.

**中文翻译:**
除了大多数公司都有的工程师、工程经理、产品经理、设计师，这些人会参与 Stripe 产品开发的整个生命周期。此外，考虑到我们产品的性质，很多产品实际上是对庞大金融系统的抽象。有时某个国家有某种功能，而另一个国家则不同，我们希望让它们表现一致。因此，我们的金融合作伙伴关系非常重要。有时，合作伙伴团队的成员也会参与产品的早期开发阶段。同样，产品法务、风险合规等职能部门也需要参与，我们需要他们的创造性思维来为用户构建正确的东西。重点是，这比我在许多其他公司看到的跨职能协作要深入得多。而 PM 在其中扮演着绝对的灵魂人物（linchpin）角色。

---

### [00:21:19] David Singleton

**English:**
So PMs are very frequently the ones that are providing the kind of look motion to bring all of that partnership together. They're very frequently the folks that are synthesizing what we're learning from our users. Not everyone is talking to users across all those job families, but the PM is probably the person talking to folks the very most and probably the one who's synthesizing the very best. They often and usually also bring a lot of the product strategy, okay, this is what we're doing today, but what does it ladder up to and therefore how do we make the right choices to make sure that we're taking the right longer term path. And so it's a super important and valuable role. And I mean, you've mentioned a couple of great ones on the call here already, but I think that the PMs at Stripe embodying a lot of the culture I talked about in our operating principles just contributed a tremendous amount to what we get done.

**中文翻译:**
PM 经常是那个把所有合作伙伴关系整合在一起的人。他们经常负责综合我们从用户那里学到的东西。虽然不是每个职位的员工都会直接与用户交流，但 PM 可能是交流最多、总结得最好的人。他们通常还会带来产品策略：我们今天在做什么，它最终指向什么目标，以及我们如何做出正确选择以确保走在正确的长期道路上。所以这是一个极其重要且宝贵的角色。你刚才已经提到了几位优秀的 PM，我认为 Stripe 的 PM 们体现了我提到的经营原则中的许多文化，为我们的成就做出了巨大贡献。

---

### [00:21:56] Lenny

**English:**
Perfect segue to where I was going to go with the next question, which is, one of your operating principles is to be meticulous with your craft. And I know this is something that you focus on a lot. What I'm curious about is that sounds great. Everyone would love for that to be a focus of theirs and a core value in the way they operate. But there's always this trade off of we just got to ship stuff. How do we wait until it's perfect? So what I want to ask is just how do you operationalize this principle, first of all? And then I'm going to have a few follow up questions.

**中文翻译:**
这完美地引出了我的下一个问题。你们的经营原则之一是“精益求精（be meticulous with your craft）”。我知道这是你非常关注的一点。我好奇的是，这听起来很棒，每个人都希望这能成为自己的核心价值观。但现实中总有权衡：我们得赶紧发货。我们怎么能等到完美呢？所以我想问，首先，你们是如何将这一原则付诸实践的？然后我还有几个后续问题。

---

### [00:22:30] David Singleton

**English:**
Yeah, great question. Before I talk about this one operating principle, let me just set a little bit of context of what are our operating principles at all. So at Stripe we have operating principles and they're kind of like corporate values, but they're not just values, they're much less abstract than that. So actually, we were just talking about the early Stripe team. I think one of the best things that they did, I mean they did a bunch of great stuff, finding early product market fit, but one of the most foresighted things that they did was to kind of take a little detour and think about what is it about how we've been working so far that we think has made us successful and is going to be important as we continue to scale. And we capture those as a set of operating principles.

**中文翻译:**
好问题。在谈论这一条原则之前，我先介绍一下背景：Stripe 的经营原则到底是什么。在 Stripe，我们有经营原则，它们有点像公司价值观，但不仅仅是价值观，它们没那么抽象。实际上，正如我们刚才聊到的早期团队，除了找到早期的产品市场契合点（PMF），他们做的最有远见的事情之一就是停下来思考：到目前为止，我们的工作方式中哪些是成功的关键，并且在持续扩张中依然重要？我们将这些总结为一套经营原则。

---

### [00:23:00] David Singleton

**English:**
So their behavior is distilled from the most effective Stripes and we really care about them. So we talk about our operating principles a lot internally. I'll often see individual Stripes kind of celebrating each other's work in terms of which operating principle is kind of best represented. We frame a lot of our feedback processes and so forth around them, although not exclusively. The very first operating principle we have by the way, is users first. So we've already on this call, touched a bunch on how we put our users at the center of understanding what we should be doing at all. And that idea that we've formed these deep personal relationships with our users to guide everything really comes from and is captured by that operating principle. We also have operating principles. They're kind of segmented into how we work, who we are, and then a bunch that leaders must execute.

**中文翻译:**
这些行为准则是从最高效的 Stripe 员工身上提炼出来的，我们非常看重它们。我们在内部经常讨论这些原则。我经常看到员工们互相称赞对方的工作体现了哪条原则。我们的很多反馈流程也是围绕它们展开的。顺便说一下，我们的第一条经营原则是“用户至上（Users First）”。我们刚才已经聊了很多关于如何以用户为中心来决定该做什么。我们与用户建立深厚的个人关系来引导一切，这种理念正是源于这条原则。我们的原则分为“我们如何工作”、“我们是谁”以及“领导者必须执行的准则”。

---

### [00:23:52] David Singleton

**English:**
So I mean another example of one of how we work ones is move with urgency and focus. We really believe that even though we're building infrastructure that will persist for decades, it is important that we solve the needs our users just have right now, relatively rapidly so that it actually makes sense, is delivering value for them. So anyway, there there's a range of them. You asked about being meticulous in our craft. So this is another highway work principle and it is very important at Stripe and you also call it Lenny, a challenge of being meticulous, which is, well, there's so much to get done. So where can I be meticulous? Because well, if you do it across everything, maybe a lot of progress would grind to a halt. Well first of all, let me tell a couple of stories.

**中文翻译:**
另一个关于“我们如何工作”的例子是“迅速行动并保持专注（Move with urgency and focus）”。我们坚信，尽管我们构建的是将持续数十年的基础设施，但相对快速地解决用户当下的需求也非常重要，这样才能产生实际意义并为他们创造价值。总之，原则有很多。你问到“精益求精”，这是另一条工作原则，在 Stripe 非常重要。Lenny 你也提到了精益求精的挑战：有那么多事情要做，我该在哪里精益求精？因为如果你在所有事情上都追求极致，进度可能会停滞不前。首先，让我讲几个故事。

---

### [00:24:37] David Singleton

**English:**
So before I joined Stripe, I spent some time and it's a big part of deciding to join, playing with the product. And something that really delighted me was that when I started integrating the product, there were parts of the experience where I was stuck. So I made a mistake with how it integrated API. I was getting an error message back, but I wasn't stuck for very long because something that the team at Stripe had done was we made the error messages coming out of our API link to the piece of the docs that told you how to solve the problem.

**中文翻译:**
在我加入 Stripe 之前，我花了一些时间试用产品，这也是我决定加入的重要原因。令我非常惊喜的是，当我开始集成产品时，有些地方我卡住了。我在集成 API 时犯了个错，收到了一个错误消息，但我并没有被困扰太久，因为 Stripe 团队做了一件事：我们将 API 返回的错误消息直接链接到了文档中告诉如何解决该问题的具体章节。

---

### [00:25:12] Lenny

**English:**
Genius.

**中文翻译:**
天才的想法。

---

### [00:25:12] David Singleton

**English:**
And that is a really good example of being meticulous in the craft. So it's pretty uncommon, it's certainly very uncommon back then for companies to do this, like your error messages or your API, who's ever going to look at them? Well, turns out developers while they're building and if they're running into problems, they will look at them. It's actually a really high stakes moment because it's a time that matters. So that is an example of where we've been meticulous in the product. And the way that we kind of figure out where to be meticulous, where to really sweat the details and go above and beyond is again, we try to be as user first as we possibly can. So we have a process that is widely used across product teams that even like folks building stuff internally for Stripes to use, which we call friction logging.

**中文翻译:**
这就是“精益求精”的一个极好例子。这在当时非常少见，公司通常会想：谁会去看错误消息或 API 返回值啊？事实证明，开发者在构建过程中如果遇到问题，一定会看。这实际上是一个非常关键的时刻。这就是我们在产品中追求极致的一个例子。而我们决定在哪里精益求精、在哪里死磕细节的方式，依然是尽可能做到“用户至上”。我们有一套在产品团队中广泛使用的流程，甚至内部工具团队也在用，我们称之为“摩擦日志（friction logging）”。

---

### [00:26:09] David Singleton

**English:**
The way this works is you need to put yourself in a particular user's shoes. It's actually important to have a very clear idea of who is the person I am kind of modeling the friction for right now. So for instance, I might be integrating the Stripe billing API and I might put myself in the shoes of an engineer at, I don't know, let's say Atlassian, which is one of the world's largest SaaS platforms and using actively Stripe billing for automating all the revenue today, I might put myself in the mindset of that person. I might have met them recently and kind of understood a little bit better than otherwise doing this particular thing.

**中文翻译:**
它的运作方式是：你需要设身处地为特定用户着想。非常重要的一点是，要清楚地知道你现在是在为“谁”模拟这种摩擦。例如，我可能正在集成 Stripe Billing API，我会把自己想象成 Atlassian 的一名工程师（Atlassian 是全球最大的 SaaS 平台之一，目前正活跃地使用 Stripe Billing 来实现收入自动化）。我可能会代入那个人的心态，也许我最近见过他们，比平时更了解他们在做这件事时的感受。

---

### [00:26:35] David Singleton

**English:**
And then I will go through the process of actually using the product, starting off in the dashboard, hopping over to the particular page in the docs that I need to follow, starting to write code and so forth in order to do my integration and make really careful and meticulous notes of what the experience is. So stream of consciousness notes, but paying particular attention to the places where I ran into friction that I think that particular user mental modeling would find difficult. And then those are the places where we will tend to go and invest a tremendous amount in really thinking how could we solve this problem? And then putting a lot of attention into detail into making it right.

**中文翻译:**
然后我会亲自体验使用产品的全过程：从控制面板（dashboard）开始，跳转到需要参考的特定文档页面，开始编写代码等等，以此完成集成。我会非常仔细地记录下整个体验，就像意识流笔记一样，但特别关注那些我觉得该特定用户会感到困难的“摩擦点”。这些地方就是我们会投入巨大精力去思考“如何解决这个问题”的地方，然后我们会投入大量精力去打磨细节，直到把它做对。

---

### [00:27:16] David Singleton

**English:**
And by the way, the example I gave you on the error message is there's actually more code in the jobs that serve the Stripe API to handle those edge cases than in the actual main flow. And I think that's quite remarkable. Most people wouldn't do that, but it turns out not only was it something I was impressed with, but when I talk to Stripe users, this is very frequently something they tell me and delights them about the product. It's a reason that they can adopt it more quickly and it's a reason that they keep adopting other Stripe products because they know that it's going to be easier than doing anything else. So it really matters. So the point is like we are intentional about where the places where being particularly meticulous matters and then when we are, try to do it in quite a systematic way. It's great business as well.

**中文翻译:**
顺便说一下，我刚才举的错误消息的例子，在处理 Stripe API 的任务中，处理这些边缘情况的代码实际上比主流程的代码还要多。我觉得这非常了不起。大多数人不会这么做，但事实证明，这不仅让我印象深刻，当我与 Stripe 用户交流时，他们也经常提到这一点，并为此感到惊喜。这是他们能更快采用产品的原因，也是他们不断采用其他 Stripe 产品的原因，因为他们知道这会比做其他任何事情都容易。所以这真的很重要。重点是：我们会刻意选择那些精益求精能产生重大影响的地方，然后以非常系统化的方式去执行。这在商业上也是非常成功的。

---

### [00:27:57] David Singleton

**English:**
So for instance, we actually just earlier today put a blog post up that explains we've been tuning both what we call our payment element, which is our kind of morph kind of batteries included UI for putting payment integrations directly on your website. You can style it to fit with the rest of your page, but it has a lot of powerful features. And we also have a set of hosted services called Stripe Checkout. And the point here is we've gone and scarred a whole bunch of checkout flows on the internet over the course of many years and we look out for all of the little broken edges and we've been working hard on these products to tune those and then not, we don't just stop there. We've also been really obsessing about what are the things that we can do in the flows that we've already built that will remove latency or remove a click or whatever.

**中文翻译:**
例如，就在今天早些时候，我们发布了一篇博客，解释了我们一直在优化所谓的“支付组件（Payment Element）”——这是一种功能完备的 UI，可以直接放在你的网站上进行支付集成。你可以调整它的样式以匹配你的页面，但它内置了许多强大功能。我们还有一套托管服务叫 Stripe Checkout。重点是，多年来我们研究了互联网上大量的结账流程，寻找所有细微的缺陷，并努力在这些产品中进行优化。而且我们不止于此，我们还非常痴迷于在已有的流程中减少延迟、减少点击次数等等。

---

### [00:28:48] David Singleton

**English:**
And what we found, we've recently measured the difference between, so with a bunch of actual users who've migrated from a fairly vanilla integration where they built their own checkout flow to one of these surfaces to our payment element or to Stripe Checkout, it turns out that it increases the average user's revenue by 10.5%. And that's huge. So this is an industry where little changes that you might go about making or even big changes that you pour blood, sweat, and tears into will typically deliver uplifts in that you measure in basis points that's hundreds of a percentage point and this set of small changes compounding over time ladders up to 10.5%, it's huge. And the point is you only get there by knowing that this is a thing that might ultimately matter and being meticulous in every single step along the way and that it compounds to a dramatic impact in the end. So I think that that particular set of experiences is one where this operating principle has really mattered.

**中文翻译:**
我们最近测量了一组真实用户的差异：他们从自己构建的普通结账流程迁移到了我们的支付组件或 Stripe Checkout。结果显示，这使平均用户的收入增加了 10.5%。这太惊人了。在这个行业里，你投入心血做出的微小改变甚至重大改变，通常带来的提升是以基点（万分之一）来衡量的，而这一系列微小改变随时间累积，最终达到了 10.5%，这是巨大的。重点在于，你只有意识到这些细节最终可能至关重要，并在每一步都精益求精，才能获得这样的结果，最终产生戏剧性的影响。我认为这组体验正是这一经营原则发挥重要作用的体现。

---

### [00:29:49] David Singleton

**English:**
Thinking about those kind of flows is what led us to build Link, which is our product for making one click checkout available. And that has had a tremendous impact both on convenience for customers of our users and also on their conversion rate and so forth. So it really matters. And then one final other area, if I may, I think Stripe is relatively well known for putting a lot of care and attention into our website, a lot of our marketing or product explanation pages. And I think for a business like ours, it's not immediately obvious that it makes a tremendous amount of sense to be super meticulous in building those experiences. But we are, and again, I think it really matters for us and for our users. So the way that we got into this mode was we recognized that we are building a lot of infrastructure.

**中文翻译:**
对这些流程的思考促使我们构建了 Link，这是我们实现一键结账的产品。它对我们用户的客户的便利性以及转化率等方面都产生了巨大影响。所以这真的很重要。如果可以的话，最后再说一个领域：Stripe 以对网站、营销页面和产品说明页面的精心打磨而闻名。对于像我们这样的业务，在构建这些体验时追求极致的意义可能并不直观，但我们确实这么做了。同样，我认为这对我们和用户都很重要。我们进入这种模式的原因是，我们意识到我们正在构建大量的基础设施。

---

### [00:30:42] David Singleton

**English:**
So we build what we call our global payments and treasury network. It is literally our product infrastructure for moving money into Stripe, holding balances on behalf of our users, moving money out, all of the automation between moving money between different businesses and all of the kind of regulatory stuff we have to handle, all handle in this big payment engine. But as a user, it's very hard for you to come in and inspect that and say, well, is it good? I mean hopefully you can go and talk to a bunch of other Stripe users, but it's very hard to know from the outside. So if we put a lot of care for detail and attention into the experiences that we use to explain the value and the power of that, it actually helps our users understand exactly how it is that we are trying to operate for them.

**中文翻译:**
我们构建了所谓的“全球支付和资金网络”。这实际上是我们的产品基础设施，用于将资金转入 Stripe、代表用户持有余额、转出资金、处理不同业务间的资金自动化，以及所有必须处理的监管事务，全部在这个庞大的支付引擎中处理。但作为用户，你很难进来检查并说：“嗯，这东西好吗？”虽然你可以去问其他 Stripe 用户，但从外部很难了解。因此，如果我们投入大量精力去打磨那些解释其价值和能力的体验细节，实际上能帮助用户准确理解我们是如何为他们运作的。

---

### [00:31:24] David Singleton

**English:**
And that's where all the meticulousness that we put into our site have come from. There are lots of features like we have a spinning globe on our page that shows you what payment methods you can use in different countries and we have this kind of big animated wave on our homepage. And in general, Stripe is kind of known for these great internet moments when we launched products. And so we did it because we wanted our users to be able to see the care and attention that we were taking. It's turned like to have this wonderful kind of side benefit to some extent because those experiences tend to get shared a lot on Twitter and LinkedIn and elsewhere because they're worth looking at just because they're beautiful and they often push the web platform forward. And that then means that folks are likely, folks who themselves want to push internet business forward, are likely to know about Stripe and know about our capabilities.

**中文翻译:**
这就是我们对网站精雕细琢的原因。有很多功能，比如页面上有一个旋转的地球，显示不同国家可以使用的支付方式；主页上还有那种大型的动画波浪。总的来说，Stripe 以产品发布时的那些“精彩互联网时刻”而闻名。我们这样做是因为我们希望用户能看到我们的用心。这在某种程度上也带来了一个美妙的副作用：这些体验往往会在 Twitter、LinkedIn 等地方被大量分享，因为它们非常漂亮，值得一看，而且往往推动了 Web 平台技术的发展。这意味着那些想要推动互联网业务发展的人，更有可能了解 Stripe 及其能力。

---

### [00:32:11] David Singleton

**English:**
So meticulousness plays out with impact in so many different ways at Stripe and I enjoy working that way in many different areas.

**中文翻译:**
所以，“精益求精”在 Stripe 以多种方式产生影响，我也非常享受在不同领域以这种方式工作。

---

### [00:32:22] Lenny

**English:**
I have a few follow up questions along those lines, but before we do that I want to double click on this friction logging process. Just understand how you actually do that. So maybe two questions there. Is this a regular task people have on their plate say or is executives or just PMs in general? And is there a template that you share just like you talked about who we are, what company are you working for, what problem are you trying to solve? How do you actually kind of tactically operationalize that?

**中文翻译:**
关于这一点我有几个后续问题，但在那之前，我想深入探讨一下“摩擦日志”流程。我想了解你们具体是怎么做的。有两个小问题：这是一项常规任务吗？是高管在做，还是 PM 们普遍在做？有没有共享的模板？就像你提到的，明确“我们是谁”、“你在为哪家公司工作”、“你想解决什么问题”。你们在战术上是如何落实它的？

---

### [00:32:50] David Singleton

**English:**
Yeah, great question. So it's a practice that is quite valuable generically. There are many places where you can apply friction logging in order to really shine a light on what is the most effective place to invest time and effort. So we use the practice across lots of different functions and in lots of different ways at Stripe, but it is the case that almost every product team has someone, it's often the PM, sometimes it's the engineering manager who has a regular repeating loop of going through the end-to-end flow of the product and writing a friction log. For years and years, I have gone through the process of onboarding [inaudible 00:33:28] user to Stripe once a month, writing a friction log and then tagging in the right people across the company that might need to take action on some of the things that we're observing.

**中文翻译:**
好问题。这是一种通用的、非常有价值的实践。在很多地方你都可以应用摩擦日志，从而明确哪里是投入时间和精力最有效的地方。我们在 Stripe 的许多不同职能部门以多种方式使用这种方法。通常每个产品团队都会有人（通常是 PM，有时是工程经理）定期循环体验产品的端到端流程并编写摩擦日志。多年来，我每个月都会亲自体验一次新用户入职 Stripe 的过程，写一份摩擦日志，然后标记公司内部相关的人员，让他们对我们观察到的问题采取行动。

---

### [00:33:37] David Singleton

**English:**
And one of the reasons that that kind of process of taking a big step back is useful is at this stage we have many people, we have thousands of engineers who are working in parallel. And while everyone cares a lot about being meticulous, paying attention to detail, getting the details can have to end up with experiences that diverge and going through this process of looking at it all together on a regular rhythm with friction logging really helps us maintain a cohesive whole while we all operate in parallel. And so therefore senior leaders, executives, I guess of our larger areas will often do this as a practice themselves in order to make sure that everything that they're responsible for is coming together well. So it happens kind of recursively at different layers.

**中文翻译:**
这种“退后一步看全局”的流程之所以有用，是因为在目前这个阶段，我们有成千上万名工程师在并行工作。虽然每个人都很注重细节，但如果只关注局部，最终的体验可能会产生分歧。通过摩擦日志定期审视整体，能帮助我们在并行运作的同时保持整体的一致性。因此，高级领导、大部门的高管通常也会亲自实践，以确保他们负责的所有内容都能很好地融合在一起。所以这是一个在不同层级递归发生的过程。

---

### [00:34:20] David Singleton

**English:**
To your question about is there a template, so relatively simple process. So yes, there is a template and in fact there's a Stripe talk dev article that maybe we can put into the show notes that has the template, but it literally is say what you want to do, be very explicit about the user that you are trying to have a mental model for because that helps you make the right choices as you go through the flow. And then really just keep a very clear stream of consciousness log of what you're finding as you build. By the way, also really important, praise the stuff that's good. So I'll often send these docs around to a lot of folks inside of the company. It's a great opportunity to recognize great work done. So if I ran into that error message that links to the documentation, that's a great example where I'd be like, this is awesome. Nice work.

**中文翻译:**
关于是否有模板，流程其实相对简单。是的，有模板。实际上有一篇 Stripe 的技术文章（Talk Dev）包含了这个模板，我们可以放在节目介绍里。它基本上就是：说明你想做什么，明确你要代入的用户的心理模型（这能帮你做出正确选择），然后记录下你在构建/体验过程中的意识流日志。顺便说一下，非常重要的一点是：也要表扬做得好的地方。我经常把这些文档发给公司内部的很多人，这是一个认可优秀工作的好机会。如果我遇到了那个链接到文档的错误消息，我就会写道：“这太棒了，干得好。”

---

### [00:35:02] Lenny

**English:**
Being a PM that has received emails from the CEOs of companies with all the problems they ran into and they're trying to book, it's often like, oh God, I have so many goals I got to hit and I have this timeline, I have these things I'm working on. What is the culture like slash how do you give teams space to do these things that are just like, we're just going to make the experience better? How do you actually do that so that PMs aren't stressed out when they get these things?

**中文翻译:**
作为一个曾收到过 CEO 邮件列举各种产品问题的 PM，那种感觉通常是：“天哪，我有这么多目标要达成，有时间表，有正在做的项目。”你们的文化是怎样的？或者说，你们如何给团队空间去做这些“仅仅是为了让体验更好”的事情？你们如何确保 PM 在收到这些反馈时不会感到压力山大？

---

### [00:35:26] David Singleton

**English:**
It starts with our operating principles. So because we have operating principles of users first and being meticulous in our craft, we actually tend, all of our ways of building plans tend to be wired quite well around this idea that we're going to reserve enough time to really make the experience good. Maybe the most pronounced version of that is not even the issues we identify in friction logs. Maybe in a bit we can talk about how we invest in reliability and so forth, but things go wrong. And one of the things that's very important to me is that we are a learning organization. We need to understand why they went wrong and then take action to stop the same thing going wrong in future. And so that means that we identify instant remediations, that's what we call those and we prioritize those carefully and most of them, the ones that matter actually get prioritized before other work on the roadmap.

**中文翻译:**
这始于我们的经营原则。因为我们有“用户至上”和“精益求精”的原则，我们所有的规划方式往往都围绕着“预留足够时间来打造良好体验”这一理念。最明显的例子甚至不是摩擦日志中发现的问题。稍后我们可以聊聊我们在可靠性等方面的投入，但总之，事情总会出错。对我来说非常重要的一点是，我们是一个学习型组织。我们需要理解为什么出错，并采取行动防止未来再次出错。这意味着我们会确定“即时修复（instant remediations）”，我们会仔细排列优先级，其中重要的修复实际上会排在路线图上的其他工作之前。

---

### [00:36:30] David Singleton

**English:**
Which means that as a PM when you're building your roadmap and your plans, you do have to think about, well approximately how much bandwidth do I need to reserve in this area in order to address and polish stuff that might come up through friction logging and also to take care of those kind of operational things as well? It varies by team and varies by stage of product. So there is no Stripe kind of like we will reserve 50% of our time to do this stuff. That wouldn't make any sense. But we do encourage and ask every team to think hard about how much should they be setting aside for those kind of activities. Does that make sense?

**中文翻译:**
这意味着作为 PM，在制定路线图和计划时，你必须思考：我需要在这个领域预留大约多少带宽，以处理摩擦日志中可能出现的打磨工作，以及处理那些运营类事务？这因团队和产品阶段而异。Stripe 并没有“预留 50% 时间做这些事”之类的硬性规定，那没意义。但我们确实鼓励并要求每个团队认真思考应该为这类活动留出多少空间。这能理解吗？

---

### [00:36:47] Lenny

**English:**
Absolutely. I was going to ask you if there's a percentage and basically you trust the teams to set aside the right amount of time.

**中文翻译:**
完全理解。我本来想问有没有固定百分比，看来你基本上是信任团队会留出合适的时间。

---

### [00:36:52] David Singleton

**English:**
That's right.

**中文翻译:**
没错。

---

### [00:36:53] Lenny

**English:**
Awesome. Okay, so along the same lines, I actually asked Shreyas Doshi what I should ask you. You had no idea I was going to do this. And what he said is I should ask you how you did UX reviews pre shipping right after you joined Stripe and you just said you were very good at this. And so what is that like and how should people learn from your experience?

**中文翻译:**
太棒了。顺着这个思路，我其实问了 Shreyas Doshi 我该问你什么。你肯定不知道我会这么做。他说我应该问问你，在你刚加入 Stripe 时，你是如何在发布前做 UX 评审的，他说你非常擅长这个。那是什么样的流程？大家能从你的经验中学到什么？

---

### [00:37:20] David Singleton

**English:**
The way that I did UX reviews very early on in my time at Stripe and the way that every group at Stripe does these reviews is employing some of the techniques we talked about already. So that act of friction logging, it's very often done asynchronously. So someone will sit down and reserve an afternoon and go through the product and make meticulous notes and that's super useful. We also find it very valuable to go through that process together. So we will bring together both the team that built the product that we're looking at, but also a lot of their cross-functional partners. So things like the support folks that are going to be handling or are building the process to handle questions from users about it. Executives in the org that they're a part of to do these walkthroughs where we're taking exactly the same approach as I described with friction logging so imagining we're a particular user and experiencing the product together.

**中文翻译:**
我在 Stripe 早期做 UX 评审的方式，以及现在 Stripe 各个小组做评审的方式，都运用了我们已经讨论过的一些技术。比如摩擦日志，它通常是异步完成的：某人会坐下来，留出一个下午的时间体验产品并做详细笔记，这非常有用。我们也发现共同完成这个过程非常有价值。我们会召集构建该产品的团队，以及许多跨职能合作伙伴，比如负责处理用户相关问题的支持团队成员，还有该部门的高管。我们一起进行“走查（walkthroughs）”，采用与摩擦日志完全相同的方法：想象我们是特定用户，共同体验产品。

---

### [00:38:36] David Singleton

**English:**
And then just discussing very openly actually the way that we do this today is we have a log of issues that we want to talk about that anyone can type into while the PM usually is walking us through the flow. And then we'll get together at the end and actually talk about each issue and does this need to be addressed? What do we really think about it? So that that's the approach both that I took early on and that we take in at general at scale today. There's a lot of benefit to doing this together. So someone once described this to me as if you were a chef, you're going to taste the soup and you're going to talk to your kitchen staff about what went into the soup when it was good and wasn't so good. If you run a movie studio, you're going to sit down and watch a lot of movies together.

**中文翻译:**
然后进行非常公开的讨论。我们现在的做法是：当 PM 演示流程时，任何人都可以向一个问题日志中输入他们想讨论的问题。最后我们会聚在一起讨论每一个问题：这需要解决吗？我们到底怎么看？这就是我早期采取的方法，也是我们现在大规模采用的方法。共同完成这件事有很多好处。有人曾向我这样描述：如果你是厨师，你会品尝汤，并与厨房员工讨论汤里放了什么，什么时候好喝，什么时候不好喝。如果你经营电影制片厂，你会坐下来一起看很多电影。

---

### [00:39:10] David Singleton

**English:**
And so actually kind of looking at product together I find extremely energizing and also really valuable in actually teaching some of the kind of bar for craft and values around how we want the product to interoperate for our users at scale across the company. And building on that, there's something that we do occasionally and I've done occasionally a Stripe called Walk the Store where we'll actually do that process of looking at the product together with the whole company. So we have a weekly meeting called Friday Fireside where you don't have to attend, but the majority of the company does attend and we've done a few series where we'll actually go through some really, really interesting critical product flows together and talk about how this is reflecting various priorities that we have and shifts that we're trying to make, but in particular with the user experience and a particular user at the core.

**中文翻译:**
所以，一起审视产品让我感到非常有活力，而且在全公司范围内传授工艺标准和价值观（关于我们希望产品如何为用户协作）方面非常有价值。在此基础上，我们偶尔会做一件叫“巡店（Walk the Store）”的事，即全公司一起审视产品。我们每周有一个叫“周五炉边谈话（Friday Fireside）”的会议，不强制参加，但大多数人都会参加。我们做过几个系列，一起走查一些非常有趣且关键的产品流程，讨论这如何反映了我们的优先级和转型目标，特别是以用户体验和特定用户为核心。

---

### [00:39:58] David Singleton

**English:**
And that turns out to have a tremendous amount of benefit and value in helping just everyone have a shared language, we're talking about things and get on the same page about everything. So yeah, those are some of the techniques that Shreyas might have been thinking of.

**中文翻译:**
事实证明，这在帮助大家建立共同语言、达成共识方面具有巨大的益处和价值。所以，是的，这些可能就是 Shreyas 提到的那些技术。

---

### [00:40:02] Lenny

**English:**
It's amazing how many directions you all come at to create this high quality end product walking the store, friction logging these entire company meetings, looking at the product, UX reviews, this is how it's possible to build something so high quality. It's not just we have this value and we're going to be building great stuff. It's like you have to come at it from so many places.

**中文翻译:**
令人惊叹的是，你们从这么多维度出发来创造高质量的最终产品：巡店、摩擦日志、全公司会议审视产品、UX 评审。这就是构建高质量产品的秘诀。这不仅仅是说“我们有这个价值观，我们要做出好东西”，而是必须从这么多方面共同发力。

---

### [00:40:24] David Singleton

**English:**
Yeah, that's an interesting observation. I think almost anything that you talk about is a value. I mean, being a value matters, but you need to have a practice behind that. That means that the value becomes real for everyone. So we very frequently find that for any product development team, so long as they identify the right metrics that actually represent the experience that they want to deliver for their users and then get together frequently like predictably to look at how the team is doing against those metrics. But then everything else just happens naturally because you understand what you're trying to move and every little micro decision you're making within your own time prioritization and then in terms of the actual work you're doing will ladder up to that. And so why do I say that? It is like you have to have the predictable and regular thing that ladders up to the value you're trying to deliver in order to make it happen.

**中文翻译:**
是的，这是一个有趣的观察。我认为你谈论的几乎任何东西都是一种价值观。价值观固然重要，但你背后需要有一套实践。这意味着价值观对每个人来说都变得真实可感。我们经常发现，对于任何产品开发团队，只要他们找到了能代表他们想为用户提供的体验的正确指标，并定期、可预测地聚在一起查看团队在这些指标上的表现，那么其他一切都会自然而然地发生。因为你明白你想推动什么，你在时间优先级和实际工作中做出的每一个微小决策都会指向那个目标。所以，你必须有可预测的、常规的行动来支撑你想交付的价值，才能最终实现它。

---

### [00:41:17] Lenny

**English:**
Coming back to the UX review, just a question there. Presenting to the CTOs often very stressful in a review like that. What advice would you give PMs and designers and just leads of a team for how to prepare for a meeting like that, whether it's Stripe or anywhere?

**中文翻译:**
回到 UX 评审，我有个问题。在这样的评审中向 CTO 汇报通常压力很大。你会给 PM、设计师或团队负责人什么建议，告诉他们如何准备这样的会议（无论是在 Stripe 还是其他地方）？

---

### [00:41:33] David Singleton

**English:**
I personally try to be as friendly and unscary as possible, but I know that no matter how much I do that, these can't be high stakes meetings. At Stripe, and I think it's probably goes for most companies, but at Stripe, the main answer here is put your user's hat on and if you understand your user well and what they're seeking to get out of the experience and anchor any questions you get asked or wobbles you may feel of like, oh that was an out of the blue question back to well here's, remember what we're trying to do for our users, that usually makes any meeting like that go really well. And so that would be my main piece of advice.

**中文翻译:**
我个人尽量表现得友好、不吓人，但我知道无论我怎么做，这些会议的压力依然很大。在 Stripe（我想大多数公司也一样），核心答案是：戴上用户的帽子。如果你非常了解你的用户以及他们想从体验中获得什么，并将你被问到的任何问题或感到的不安（比如“哦，那个问题太突然了”）重新锚定回“记住我们正在为用户做什么”，那么这类会议通常会进行得很顺利。这就是我的主要建议。

---

### [00:42:12] David Singleton

**English:**
So I mean a risk that exists in any company as you get to run a bigger team or whatever is that individual contributors, individuals will have a very small amount of time with you in general. So there's always a risk that you might make a kind of fairly unimportant remark and it will be taken out of context to be something very important. So I personally also try very hard to anchor feedback I'm giving in what's the user experience we're trying to deliver? Does this actually matter? Recognizing that that is a risk and yeah, it definitely takes constant practice.

**中文翻译:**
在任何公司，当你领导一个大团队时，风险在于个人贡献者（IC）与你相处的时间通常很少。所以总有一种风险：你可能随口说了一句并不重要的话，却被断章取义地当成了非常重要的指示。所以我个人也努力将我给出的反馈锚定在“我们想要交付什么样的用户体验？这真的重要吗？”上。意识到这是一种风险，确实需要不断的练习。

---

### [00:42:51] Lenny

**English:**
You've touched on a couple of these things, but just if someone's trying to get better at building product, either a PM, designer, engineer, what kind of advice do you often give for helping people just build better product?

**中文翻译:**
你已经提到了一些，但如果有人（无论是 PM、设计师还是工程师）想要提高构建产品的能力，你通常会给什么建议来帮助他们做出更好的产品？

---

### [00:43:03] David Singleton

**English:**
Almost always goes back to things we've already talked about here. So remember at the very top I talked about iterating very closely with users? If you have a mechanism to listen to users, get something in their hands quite quickly and then get their feedback on it to run it back through a feedback loop, you're very unlikely to go wrong. Especially if you put a lot of thought into these being the right users whose needs you want to focus on because they ladder up to your strategy. It's actually very hard to go wrong if you have that feedback loop working really well. So if you don't have that feedback loop, and actually it's remarkable as I talk to folks across the industry and so forth, it's remarkable how frequently that feedback loop doesn't exist in product development cycles. So if you don't have that, go figure out how to create it and if you do have it, but you can't get something into user's hands very rapidly from you having the idea that this might matter to getting their feedback on it, figure out how to make that go faster as well.

**中文翻译:**
几乎总是回到我们讨论过的内容。还记得开头我提到的“与用户紧密迭代”吗？如果你有一套机制能倾听用户，快速把东西交到他们手上，获取反馈并跑通反馈循环，你就不太可能出错。特别是如果你仔细思考过这些用户是否是你的战略目标用户。如果反馈循环运作良好，真的很难出错。令人惊讶的是，当我与行业内的人交流时，发现这种反馈循环在产品开发周期中缺失的情况非常普遍。所以，如果你没有，就去想办法建立它；如果你有了，但从产生想法到获取用户反馈的速度不够快，那就想办法让它变快。

---

### [00:44:10] Lenny

**English:**
This episode is brought to you by Braintrust... [Sponsor message for Braintrust omitted] ... Something that I've heard about you is that you get into the weeds, you get really deep as a CTO of a company at the scale of Stripe and I came across this term engineerications, which I think connects to this. Can you talk about that and how you think about just getting in the weeds?

**中文翻译:**
本期节目由 Braintrust 赞助……（赞助商广告略）……我听说你作为 Stripe 这种规模公司的 CTO，依然会深入一线（get into the weeds）。我看到了“工程师假期（engineerications）”这个词，我觉得这与此有关。你能谈谈这个词，以及你对深入一线的看法吗？

---

### [00:45:44] David Singleton

**English:**
First of all, in terms of how much getting in the weeds matters. At Stripe, we find that it's very important for engineering managers in particular, but really all managers to really have a very detailed understanding of whether their teams are kind of on the right track and where they're getting stuck in order to make sure that we make the most progress in unit time for our users.

**中文翻译:**
首先，关于深入一线的重要性。在 Stripe，我们发现工程经理（特别是他们，但实际上是所有经理）对团队是否走在正确轨道上、在哪里卡住了有非常详尽的了解是非常重要的，这样才能确保我们在单位时间内为用户取得最大的进展。

---

### [00:46:00] David Singleton

**English:**
We're getting stuck in order to make sure that we make the most progress in unit time for our users. So we find that, again, the nature of the problems we're solving, really reward domain expertise, like assimilating a deep understanding. And we ask all of our managers to be kind of the editors in chief of their teams plans. And I think the only way to do that is to get the right loop for yourself to understand what is actually going on the ground. Now, it would be really damaging if I was only doing work at the IC engineering level every day. That doesn't ladder up to someone who's able to help guide the team or whatever. So it's important to just judiciously but done on the right cadence. I think it's very, very valuable. So engineer occasion is something that I personally do. So it's obviously a port man of engineer and vacation, but it's not a vacation.

**中文翻译:**
我们发现，我们所解决问题的性质非常奖励领域专长，即吸收深度的理解。我们要求所有经理担任团队计划的“总编辑”。我认为做到这一点的唯一方法是建立自己的循环，了解基层的实际情况。当然，如果我每天只做 IC（个人贡献者）级别的工程工作，那是有害的，因为那无法支撑我引导团队。所以，审慎地、以正确的节奏去做这件事非常重要。我认为这非常有价值。“工程师假期（engineerications）”就是我个人会做的事。这显然是“工程师（engineer）”和“假期（vacation）”的合成词，但它不是真的度假。

---

### [00:46:47] David Singleton

**English:**
The way we get to the name of the tower, at least the way I think about it is what you do on engineer occasion is I'll clear, other people track do this as well. I'll clear several days in a road, three or four days actually join a team, pick up a small task, hopefully a small feature that we can get all the way from start to finish in production and do that going through the exact experience the team has. So you get to understand the developer tools, the build infrastructure, how you get stuff reviewed, how good is the documentation, how long did I have to wait in order to actually see my thing live in order to start that feedback loop that I talked about with users. So you're actually going and joining a team and doing some work.

**中文翻译:**
这个名字的由来，至少我的理解是：在“工程师假期”期间，我会清空日程（其他人也会这么做）。我会连续空出三四天时间，真正加入一个团队，接手一个小任务，最好是一个能从头到尾完成并上线生产环境的小功能。我会完整体验团队所经历的一切：了解开发工具、构建基础设施、代码评审流程、文档质量，以及我需要等多久才能看到功能上线并开始我提到的用户反馈循环。所以你实际上是加入一个团队并动手干活。

---

### [00:47:26] David Singleton

**English:**
While one does that, it's really valuable and important to keep a friction log because then what you want to do is write up the experience both as an aid memoir for yourself because it then helps you go and for all of the next year's worth of conversations I might be involved in around making trade offs and helping set priorities, that context really helps. So I actually reread these reports periodically and it's also really valuable to actually share them work with the team, which then demonstrates, well I understand what it's actually like and here's how we're going to make sure that we're carrying that information through prioritization. So that's what you do. The name is, it's the often the hardest thing about these is finding the time to clear your calendar for that many days. So the reason I think about it is a vacation is of course people go on vacation.

**中文翻译:**
在做这些事时，记录摩擦日志非常有价值。你会把这段经历写下来，作为自己的备忘录，因为这对我未来一年参与的权衡决策和优先级设定非常有帮助，这些背景信息太关键了。我会定期重读这些报告。此外，与团队分享这些内容也很有价值，这表明我理解实际情况，并展示我们将如何把这些信息带入优先级讨论中。这就是它的做法。最难的部分通常是找时间清空好几天的日程。我之所以把它想成“假期”，是因为人们去度假时，世界照样运转，一切都好。

---

### [00:48:12] David Singleton

**English:**
By the way, I work very hard to use all my vacation days every year. I think that taking a break and recharging your creative juices is valuable. So the point is when you're on vacation, the world goes on and it's all fine. So I treat it like I'll decline every meeting in order to clear my schedule and have a maker schedule in order to do that. And so I've done this many times at Stripe. I advise engineering managers at Stripe that they should do an engineer occasion sometime in their first quarter to six months at the company. It gives you a tremendous amount of context for what your teams are actually experiencing and then for folks who do it once a year on an ongoing basis and it provides a tremendous amount of context.

**中文翻译:**
顺便说一下，我每年都努力休完所有的年假。我认为休息和充电对保持创造力很有价值。重点是，当你度假时，世界照样转。所以我对待“工程师假期”也是如此：我会拒绝所有会议，清空日程，切换到“创造者模式（maker schedule）”。我在 Stripe 已经做过很多次了。我建议 Stripe 的工程经理在入职后的前三个月到半年内做一次“工程师假期”。这能让你对团队的真实体验有极深的了解。对于那些每年坚持做一次的人来说，它提供了海量的背景信息。

---

### [00:48:50] Lenny

**English:**
That is insane. I've never heard of that process. How do you stay knowledgeable and up to date on the infrastructure and the code that you have to code and all of a sudden things move so fast?

**中文翻译:**
这太疯狂了，我从未听说过这种流程。你怎么能保持对基础设施和代码的了解，从而能直接上手写代码？毕竟技术发展得这么快。

---

### [00:49:00] David Singleton

**English:**
The process is literally to help you do that. I guess maybe something I left out in explaining it is we'll often identify a buddy on the team who's going to help you through. So for what it's worth at Stripe, we write a lot of code in Ruby, we write a lot of code in other just Java type script as well. But our kind of core infrastructure is mostly implemented, core product infrastructure mostly implemented in Ruby. When I started I had never written a line of Ruby in my life and I knew I wanted to do this thing and actually done something like it before joining and I was really scared. How much credibility might I lose if I show up and I can't write a line of Ruby. But my first buddy was a guy called Ajhja who's still at Stripe doing great stuff and he helped me learn Ruby during these three days and they [inaudible 00:49:48] me a little bit, but ultimately everyone really appreciated that I've done it.

**中文翻译:**
这个流程本身就是为了帮你做到这一点。我可能漏掉了一点：我们通常会在团队中指定一个“伙伴（buddy）”来协助你。在 Stripe，我们写很多 Ruby 代码，也写 Java 和 TypeScript。但我们的核心产品基础设施主要是用 Ruby 实现的。我刚开始时，这辈子没写过一行 Ruby。我知道我想做这件事，而且加入前也做过类似的事，但我当时很害怕：如果我去了却一行 Ruby 都写不出来，我会损失多少威信？但我的第一个伙伴叫 Ajhja，他现在还在 Stripe 做得很棒。他在那三天里教我 Ruby，虽然大家可能会稍微调侃我一下，但最终每个人都很感激我这么做了。

---

### [00:49:52] Lenny

**English:**
Imagine being the engineer has to review your PR.

**中文翻译:**
想象一下那个要评审你 PR（拉取请求）的工程师。

---

### [00:49:55] David Singleton

**English:**
I tell them this is an important part of the process. Please don't treat me any different to anyone else. And obviously to make this work well you have to set the expectation that you're not going to take me action if something isn't exactly the way you want it to be. It is a moral kind of longitudinal process.

**中文翻译:**
我会告诉他们这是流程的重要组成部分，请不要对我特殊对待。显然，为了让这行得通，你必须设定预期：如果某些地方做得不完全符合要求，你不会对我采取什么行动。这更多是一个长期的、精神层面的过程。

---

### [00:50:11] Lenny

**English:**
Is there something that you found in this process that comes to mind that was really surprising or interesting or just kind of lasting in the past set of couple years?

**中文翻译:**
在过去几年的这个过程中，有没有什么让你感到特别惊讶、有趣或印象深刻的事情？

---

### [00:50:19] David Singleton

**English:**
One of the most interesting things that I think I've run into is there are a lot of places that as we scale, we know that it makes a lot of sense to invest in automation and there were a bunch of places in our development process where while we've done that, we were working hard to help each other out and actually saying, hey, please come talk to this other team if you want to use this thing. And if you're working for instance, a different time zone from someone else, it's often the case that actually it would be much better just to document it well and automate it and then maybe make the consultation available. And so running into those kind of pieces of friction and then having a good conversation about it has really helped. But one good thing about Stripe I think is that kind of change doesn't depend on me doing anything.

**中文翻译:**
我遇到的最有趣的事情之一是：随着规模扩大，我们知道投资自动化非常有意义。但在我们的开发流程中，有些地方虽然我们做了自动化，但大家还是习惯于互相帮助，比如会说：“嘿，如果你想用这个，请去咨询那个团队。”如果你和别人在不同的时区工作，通常情况下，更好的做法是把它记录清楚并完全自动化，然后把咨询作为可选。发现这类摩擦点并进行深入讨论非常有帮助。但 Stripe 的一个优点是，这类改进并不依赖于我亲自去做什么。

---

### [00:51:02] David Singleton

**English:**
So we really care about making Stripe a place where engineers can do some of the best work of their careers and that means being enabled with good tools and good developer productivity. So we invest a lot in developer productivity. We have a team who work on our dev tools and they actually run exactly the same product development process that I just described for our external users internally. So understand your users really well. Talk to them a lot, as so for instance, we do a monthly survey. We operate in enough scale where we can ping enough people once a month that we get a statistically significant sample of the entire organization without having to get everyone to respond. Every individual respond once every six months. And we ask very directly, what's the experience you're having? And then we use that to prioritize the roadmap of our developer productivity team. We also measure everything so we know where people are getting stuck and when we compare both the kind of free responses and the data, it helps us invest in the best places to make everyone else more productive.

**中文翻译:**
我们非常在意让 Stripe 成为工程师能成就事业巅峰的地方，这意味着要提供优秀的工具和极高的开发效率。所以我们在开发者生产力（developer productivity）上投入巨大。我们有一个专门负责开发工具的团队，他们在内部运行的正是刚才我描述的针对外部用户的那套产品开发流程：深入了解用户，大量交流。例如，我们每月进行一次调查。我们的规模足够大，每月只需联系一部分人就能获得具有统计学意义的样本，而不需要每个人都回复。每个人每六个月回复一次。我们会直接问：“你的体验如何？”然后根据反馈来确定开发工具团队的路线图优先级。我们也会测量一切数据，知道大家在哪里卡住了。通过对比主观反馈和客观数据，我们能把资源投在最能提高大家效率的地方。

---

### [00:52:03] Lenny

**English:**
Okay, that's exactly where I was hoping to go next. And let me set this question up. So I saw a tweet of yours recently where I have some notes here I'm going to read that you deploy changes to your core, API 16.4 times a day on average. Your uptime has been 99.999% and one in 10 people in the world have transacted with a business powered by Stripe at this point. And so my question is just what does it take to achieve something like this, especially in terms of tooling and culture and everything else you're just talking about?

**中文翻译:**
好，这正是我接下来想聊的话题。我最近看到你发的一条推文，我记了些笔记：你们平均每天向核心 API 部署 16.4 次变更；正常运行时间（uptime）达到了 99.999%；全球每 10 个人中就有 1 人曾与 Stripe 支持的业务进行过交易。我的问题是：要实现这样的成就需要什么？特别是在工具、文化以及你刚才提到的所有方面。

---

### [00:52:33] David Singleton

**English:**
Well I think it's worth saying at Stripe we are trying to do something I think relatively unique, which is what we power for the businesses to build on Stripe our users, it's really business critical to them. We're literally talking about money coming into your business to help you run your operations or make it even possible for you to run your operations and maybe pay your employees and so forth. All the revenue automation that we do around billing subscriptions, our financial automation products, helping you close your books, this stuff matters. You cannot get it wrong. And we also operate, Stripe today, we move as much money as all of e-commerce was when Stripe got started. So we operate very significant scale and so business critical significant scale, we just have a tremendous duty to our users to get this right and be extremely reliable and available for them.

**中文翻译:**
我想说的是，Stripe 正在尝试做一些我认为相对独特的事情：我们为用户（即在 Stripe 上构建业务的企业）提供的服务对他们来说是业务关键（business critical）的。我们谈论的是进入你公司的资金，这些资金帮你维持运营、支付员工工资等等。我们围绕账单订阅、财务自动化产品、结账等所做的一切都至关重要。你绝不能出错。而且我们现在的规模非常庞大，Stripe 目前处理的资金量相当于 Stripe 刚成立时全球电子商务的总量。在如此庞大的规模下处理如此关键的业务，我们对用户负有巨大的责任，必须做到极高的可靠性和可用性。

---

### [00:53:23] David Singleton

**English:**
So we do think about that a lot. Now there's one way to be very reliable, which is to try to change things as infrequently as possible. Never change anything than you have many fewer opportunities for things to break. But we don't take that approach. The needs of our users are evolving so rapidly, the number of ways that we want to serve them and can serve them is evolving rapidly enough that it matters a lot that we can operate in a kind of constantly changing environment. Hopefully I've explained why that matters like that type feedback because it's only possible if you can actually get something in their hands. So we choose to design the way we work to hold those two things true at the same time and it does take a lot of care and attention and it takes a lot of systems. So maybe just kind of build this up.

**中文翻译:**
所以我们经常思考这个问题。有一种保持可靠的方法是：尽量减少变更。永远不改东西，出错的机会就少得多。但我们不采取这种方法。用户的需求进化得太快了，我们服务他们的方式也在飞速演变，因此在不断变化的环境中运作至关重要。我之前解释过为什么快速反馈很重要，因为只有把东西交到用户手里才行。所以我们选择设计一种工作方式，同时兼顾这两点。这需要大量的细心、关注和系统支持。让我展开说一下。

---

### [00:54:12] David Singleton

**English:**
First of all, there a lot in our development process and the ways that we take changes into our product that makes this possible. One of those is we really care a lot about having really good test suites. So we believe in automated testing. We don't have manual testers because manual testers couldn't possibly cover the vast array of API endpoint and configurations that we offer but automated test can. So we work hard to have a lot of automated test coverage and then every single change that an engineer produces gets run through this battery of tests before it can even possibly go towards production. And then we work very hard as changes end up in production to put them through increasingly realistic and then more broadly exposed environments. So we have a bunch of staging environments where we'll send a battery of more realistic end-to-end tests. Then finally when something actually goes to production, it starts at very small percentage of the traffic and then wraps up to the hole.

**中文翻译:**
首先，我们的开发流程和将变更引入产品的方式使这成为可能。其中之一是我们非常看重优秀的测试套件。我们坚信自动化测试。我们没有手动测试员，因为手动测试员不可能覆盖我们提供的海量 API 端点和配置，但自动化测试可以。所以我们努力实现极高的自动化测试覆盖率，工程师产生的每一个变更在进入生产环境前都必须通过这一系列测试。当变更进入生产环境时，我们会让它经历越来越真实、暴露范围越来越广的环境。我们有一系列分级环境（staging），在那里运行更真实的端到端测试。最后，当东西真正上线时，它先从极小比例的流量开始，然后逐步扩大到全部。

---

### [00:55:10] David Singleton

**English:**
So we can detect problems before they become huge problems. There's a number of things that we had to do to make that all possible. So for instance, every change that Strip engineer submits [inaudible 00:55:23] test, it actually ends up in production automatically over the course of the next 45 minutes or so. And I don't think there are a lot of financial services companies, at least not until maybe the last few years that have operated that way. And so that takes a certain mind shift. You actually have to assume that that's going to happen and put the right systems and processes in place. And then the other thing that's important is to recognize that we have to obsess about getting very systematically good at addressing anything that can go wrong. So I mentioned earlier it's really important to me that we are a continuously learning organization.

**中文翻译:**
这样我们就能在问题变大之前发现它。为了实现这一切，我们做了很多工作。例如，Stripe 工程师提交的每一个通过测试的变更，实际上会在接下来的 45 分钟左右自动进入生产环境。我认为在过去几年之前，很少有金融服务公司是这样运作的。这需要一种心态转变：你必须假设这会发生，并建立正确的系统和流程。另一件重要的事情是，我们必须痴迷于系统化地处理任何可能出错的情况。正如我之前提到的，对我来说，成为一个持续学习的组织非常重要。

---

### [00:55:59] David Singleton

**English:**
And I mean something else that matters of course is things will go wrong. Sometimes there is a downstream partner where something breaks, other times there is a particular kind of network outage side of our control or whatever. So things will go wrong. So it's important that we have the right systems in place that minimize the damage that any individual thing going wrong can cause. And we work hard on that. We have redundant systems in a bunch of places. We think hard about how something that breaks for one user wouldn't kind of carry over into other users and then we actually very actively work hard to put things right when they are wrong. So that's called instant response at most companies including Stripe. I actually think Stripe is very, very good at instant response. We've got very good tools for both declaring incidents and then pulling the right people together to put them right.

**中文翻译:**
当然，事情总会出错。有时是下游合作伙伴出了问题，有时是我们无法控制的网络中断。所以出错是必然的。重要的是我们要有正确的系统来最小化任何单点故障造成的损害。我们在这方面下了很大功夫：我们在很多地方都有冗余系统；我们深入思考如何防止一个用户的故障波及其他用户；当出错时，我们会非常积极地纠正。这在包括 Stripe 在内的大多数公司被称为“事件响应（incident response）”。我认为 Stripe 的事件响应做得非常好。我们有非常棒的工具来宣布事件，并迅速召集正确的人员来解决问题。

---

### [00:56:45] David Singleton

**English:**
But we don't stop there. We really obsess about reviewing them carefully and identifying not only what would've stopped this thing happening, but how could we prevent this whole class of issues in the future. And as I said earlier, we prioritize working on that stuff ahead of anything else on the roadmap that's because of remember what it is we're trying to do, how important it is and how if we don't do that well, we can't move quickly for our users. So that's how we do it. By the way, I don't want to come across here and sound like we've got it all figured out. Of course all of this is always entirely influx. We're always anxious to figure out how we can make it go better. For instance, in recent years we realize that we could get a lot of benefit from what we call chaos testing. That's like injecting errors and making sure that the systems respond in such a way that it doesn't cause any impact on users. So it's constantly evolving and we really enjoy learning from other companies and learning from our users as well. But it's something we care about and think very rigorously and systematically alone.

**中文翻译:**
但我们不止于此。我们非常痴迷于仔细审查这些事件，不仅要找出什么能阻止这次事件发生，还要找出如何防止未来发生“这一类”问题。正如我之前说的，我们会把这些工作排在路线图上其他任何事情之前。因为记住我们的目标、它的重要性，如果我们做不好这一点，我们就无法为用户快速行动。这就是我们的做法。顺便说一下，我不想表现得好像我们已经解决了一切。当然，所有这些都一直在变动中。我们总是在焦虑如何做得更好。例如，近年来我们意识到可以从“混沌测试（chaos testing）”中获益匪浅——即注入错误并确保系统响应方式不会对用户产生任何影响。所以它在不断进化，我们也喜欢向其他公司和用户学习。这是我们非常在意并进行严谨、系统思考的事情。

---

### [00:57:40] Lenny

**English:**
Did you say that it takes only 45 minutes from pushing code to it going into production?

**中文翻译:**
你刚才说从推送代码到上线生产环境只需要 45 分钟？

---

### [00:57:45] David Singleton

**English:**
Typically yes. So that battery of tests that I described, that gets run on every change, that gets run in parallel to when you send it for review by another human. So it's run once, typically takes about 15 minutes and then once the changes merged into our code base, we run that same test suite one more time. So another 15 minutes then typically takes about 30 minutes for the systems to automatically deployed in production. That's how we run and think about establishing that tight feedback loop with users, that means you can get feedback from a user in the morning, you can figure out how to address it and you can actually put something back in their hands by the end of the day. And that loop running inside of 24 hours I think is pretty important.

**中文翻译:**
通常是的。我描述的那一系列测试会在每个变更上运行，且与你发送给同事评审（review）并行。它运行一次通常需要 15 分钟。一旦变更合并到代码库，我们会再次运行同样的测试套件，又是 15 分钟。然后系统自动部署到生产环境通常需要 30 分钟。这就是我们运行和思考建立紧密用户反馈循环的方式：这意味着你早上收到用户反馈，想出解决办法，到当天结束时就能把新东西交回他们手中。我认为这种在 24 小时内完成的循环非常重要。

---

### [00:58:26] Lenny

**English:**
That's incredible. I remember times that Airbnb where took hours for tests to finish because there's a lot of them and they fix that over time. But I'm used to more on that scale.

**中文翻译:**
太不可思议了。我记得在 Airbnb 时，测试要花好几个小时才能跑完，因为测试太多了，后来他们慢慢优化了。但我习惯的是那种规模的时间。

---

### [00:58:37] David Singleton

**English:**
It takes constant effort to hold. Those numbers by the way are important. Those are about the right numbers I think for a company operating our kind of scale. Of course as you add more stuff, you add more tests. So we've had to work on, we had to invent mechanisms to make it run more in parallel, we now have a thing called selective test execution where we figure out for not the battery that runs before it goes into production that we run everything and just run it in more machines to make it parallelize. But for the changes or the tests that we run for individual changes, we actually have systems that figure out, well which tests are the ones that might be material for this particular thing? And that's been a real source of innovation. In fact, our distributed change and test environment at Stripe is the biggest distributed system that we actually run. And so running that requires just as much energy and effort and rigor and craft as everything else.

**中文翻译:**
保持这个速度需要持续的努力。顺便说一下，这些数字很重要。我认为对于我们这种规模的公司来说，这些数字是比较合理的。当然，随着功能增加，测试也会增加。所以我们必须发明一些机制让它更并行地运行。我们现在有一种叫“选择性测试执行（selective test execution）”的技术：对于上线前的最终测试，我们会跑全部测试，只是用更多机器来并行；但对于单个变更的测试，我们的系统会判断哪些测试与这个特定变更相关。这成了创新的源泉。事实上，Stripe 的分布式变更和测试环境是我们运行的最大的分布式系统。运行它所需要的精力、努力、严谨和工艺，不亚于其他任何事情。

---

### [00:59:29] Lenny

**English:**
What are some of the things you've done that have had the most impact on developer productivity?

**中文翻译:**
在提高开发者生产力方面，哪些举措的影响最大？

---

### [00:59:34] David Singleton

**English:**
We've touched on a couple of these already. That auto deploy mechanism definitely had a very significant individual impact. So before we introduced that, sometime within the last five years each deployed to production required an engineer to actually babysit it, to watch it as it, make sure all the charts look good. And it was a bit of kind of game of roulette because you always wish that your change would get bundled in with someone else's so that they were paying attention to it for you. So literally being able to be fingers on keyboard on something else while your change is going live and it's going to automatically monitored, that was a big improvement in our productivity. Also, very small things. This is just like optimizing checkout, very small changes really compounded in a big way. So for instance, by eight months ago we made it possible, we use a tool for code review.

**中文翻译:**
我们已经提到了一些。自动部署机制肯定产生了非常显著的影响。在引入它之前（大约是过去五年内的某个时间），每次部署到生产环境都需要一名工程师全程“陪护”，盯着图表确保一切正常。这有点像玩轮盘赌，因为你总希望自己的变更能和别人的打包在一起，这样别人就能帮你盯着。现在，当你的变更上线并被自动监控时，你可以继续敲代码做别的事，这极大地提高了生产力。此外，还有一些微小的改进。就像优化结账流程一样，微小的变化会产生巨大的复利效应。例如，大约八个月前，我们优化了代码评审工具。

---

### [01:00:24] David Singleton

**English:**
It's quite popular, it's GitHub enterprise, but we've built a bunch of our own experiences and controls around that and we have a little tick box that you can tick on your pool request. That's what you call an individual change that an engineer produces that is auto merge, which means once the reviewer says this is good, I don't need to come back and look at it again, the system should just take over and that just cuts out one whole kind of human distraction step and that laddered up to a big change in productivity as well. So these very small changes can if you're deliberate with them, ladder up to a big impact.

**中文翻译:**
我们使用的是很流行的 GitHub Enterprise，但我们在其基础上构建了很多自己的体验和控制。我们在 PR（拉取请求）上加了一个小复选框，叫“自动合并（auto merge）”。这意味着一旦评审员说“没问题”，我就不需要再回来查看，系统会自动接管。这省去了一个完整的人为干扰步骤，也带来了生产力的巨大提升。所以，如果你有意识地去做，这些微小的改变可以累积成巨大的影响。

---

### [01:00:55] Lenny

**English:**
I'm going to go in a different direction now. AI very hot right now. Has AI impacted the way you all build product yet? And if not, where do you think it starts to go in the next few years?

**中文翻译:**
现在换个方向。AI 现在非常火。AI 已经影响到你们构建产品的方式了吗？如果没有，你认为未来几年它会如何发展？

---

### [01:01:06] David Singleton

**English:**
Yeah, we're very excited about AI. Now to just take one step back, Stripe has been using machine learning and advanced machine learning techniques at the heart of our products since the very early days. Radar is our solutions for payment fraud and it has used, I mean this is the very core of our products and has used machine learning since we introduced it. We also, if you think about the nature of Stripe, we operate in an environment where we have to do a lot of work to kind of catch bad actors in the system, fraudsters or fraudulent businesses. So we've been employing a lot of machine learning techniques there again for years and we couldn't operate the company without them. So the difference between ML and AI, I think when we think about AI today we're mostly talking about the applications of large language models, but those are really based on this new technology called Transformers.

**中文翻译:**
是的，我们对 AI 非常兴奋。先退一步说，Stripe 从早期开始就在产品核心中使用机器学习（ML）和高级 ML 技术。Radar 是我们的支付欺诈解决方案，它是我们产品的核心，从推出起就一直在使用机器学习。考虑到 Stripe 的性质，我们必须做大量工作来捕捉系统中的坏人、诈骗者或欺诈企业。多年来我们一直在那里应用大量的机器学习技术，没有它们我们根本无法运营公司。至于 ML 和 AI 的区别，我认为今天我们谈论 AI 时，主要是在谈论大语言模型（LLM）的应用，而这些模型实际上是基于一种叫 Transformer 的新技术。

---

### [01:01:55] David Singleton

**English:**
It was a paper that came out of Google a while back about four years ago, five years ago. And we put transformer technology into those systems at some point more than a year ago. And it's proved to have a very profound impact on our ability to solve those problems for our users, which is great. But we are also excited about the applications of large language models. I mean there's really two dimensions to this. Number one, we feel privileged to be able to help serve and power a lot of businesses getting started in this space. One big difference between AI startups and others is it's actually quite expensive to operate an AI startup in terms of the compute resources. Like running this stuff in these GPU machines is quite expensive. So typically these companies need to have a monetization model from day one. And I'm really excited to say most of the AI on these is running on Stripe and we're working very hard to make sure we serve all their needs.

**中文翻译:**
那是几年前 Google 发表的一篇论文。一年多前，我们就把 Transformer 技术引入了这些系统。事实证明，这对我们为用户解决问题的能力产生了深远影响，这很棒。但我们也对大语言模型的应用感到兴奋。这主要有两个维度：第一，我们很荣幸能为这个领域起步的许多企业提供服务。AI 创业公司与其他公司的一个大区别是，由于计算资源的原因，运营成本非常高。在 GPU 机器上运行这些东西很贵。因此，这些公司通常从第一天起就需要有变现模式。我非常激动地看到，大多数这类 AI 公司都在 Stripe 上运行，我们正努力满足他们的所有需求。

---

### [01:02:51] David Singleton

**English:**
Open AI, for instance, using us for monetizing chat GPT plus and all their other products. But they don't just stop there. We're actually helping power all of their subscriptions and revenue tracking and financial operations around the business. And the point about that is we've been putting very large engineering teams on this stuff for years and that means anyone who wants to build a reconciliation product and a subscriptions business model, if you want to do that yourself, you have to put big engineering teams on them. But if you can use Stripe instead, you can actually focus those really precious engineering resources on keeping up with the rate of breakneck innovation in this space. So we're excited about that, but we're also really excited about the applications of these AI techniques on our own ability to serve our users better. And so for instance, at sessions we'll be talking about a few of these.

**中文翻译:**
例如，OpenAI 使用我们来为 ChatGPT Plus 和他们的其他产品变现。不仅如此，我们还支持他们所有的订阅、收入追踪和业务周边的财务运营。重点是，多年来我们一直投入庞大的工程团队来做这些事。这意味着，如果你想自己构建对账产品和订阅商业模式，你必须投入巨大的工程力量。但如果你使用 Stripe，你就可以把这些极其宝贵的工程资源集中在跟上这个领域惊人的创新速度上。所以我们对此感到兴奋，同时也对应用这些 AI 技术来更好地服务用户感到兴奋。例如，在 Sessions 大会上我们会讨论其中的一些。

---

### [01:03:44] David Singleton

**English:**
We started working with OpenAI when they had the beta. It was a kind of private beta of GPT four available at the beginning of this year. The first thing we thought of was we've got a lot of documentation on Stripe and we put a lot of care attention into making it good. But if you want to achieve something with your Stripe integration, you're typically going to spend quite a lot of time reading docs and kind of synthesizing them as an end user. We realized we can have GPT four read all of our docs, store them as embeddings and then answer questions for developers. And so we now have that available in kind of early stage release inside of our documentation. It's turning out to be pretty valuable. We've also been able to apply these techniques to other areas of our products. So something that we're going to show an early version of IT sessions is we have a really powerful product as part of our revenue and financial automation suite, which we call Sigma.

**中文翻译:**
当 OpenAI 在今年年初推出 GPT-4 的私测版时，我们就开始与他们合作了。我们想到的第一件事是：Stripe 有大量的文档，我们花了很多心思把它们做好。但如果你想完成 Stripe 集成，作为最终用户，你通常要花很多时间阅读和综合文档。我们意识到可以让 GPT-4 阅读我们所有的文档，将它们存储为嵌入向量（embeddings），然后为开发者回答问题。现在我们已经在文档中推出了这个功能的早期版本。事实证明它非常有价值。我们还将这些技术应用到了产品的其他领域。例如，在 Sessions 大会上我们将展示 Sigma 的早期版本，它是我们收入和财务自动化套件中非常强大的产品。

---

### [01:04:36] David Singleton

**English:**
It allows you to write sequel queries across all of your Stripe data so you can interrogate your Stripe data to understand your business and really fine grain detail. Which country has the fastest growing sales, which segment in which country has particular attributes to it? Very powerful product, but it's one that is potentially challenging for non-developers to adopt. You do have to know how to write sequel queries unless you just use the ones in the menu in order to get the full value out of the product. Well it turns out with large language models, we can apply this technology where you can ask questions in natural language and our engine will actually write the sequel query for you. And we've had to do a lot of work to kind of tune that to make sure that it's reliable and understandable and it's going really well. And we also see great applications in actually applying these technologies to make us more efficient internally, answer users questions faster, help each other out more quickly.

**中文翻译:**
Sigma 允许你对所有 Stripe 数据编写 SQL 查询，从而以极细的粒度了解你的业务：哪个国家的销售额增长最快？哪个国家的哪个细分市场具有特定属性？这是一个非常强大的产品，但对非开发人员来说可能有挑战，因为除非你只用菜单里的预设查询，否则你必须懂 SQL 才能发挥它的全部价值。事实证明，利用大语言模型，我们可以应用这项技术，让你用自然语言提问，我们的引擎会为你编写 SQL 查询。我们做了大量调优工作以确保其可靠和易懂，目前进展顺利。我们还看到了这些技术在提高内部效率、更快回答用户问题、更快互相帮助方面的巨大应用潜力。

---

### [01:05:45] David Singleton

**English:**
And so we're doing those things as well. One concrete thing that we did, which I'm pretty excited about is not long after we saw chat GPT come out, we realized it would be really awesome if we could apply that to many use cases inside of Stripe. But as you can imagine, a lot of the data that we are dealing with on a daily basis is very sensitive to our business, to our users and we care a lot and we have a lot of governance around this, but we wanted to make that technology bill. We couldn't say, Hey Stripes, go and use chat GPT. So we stood up an integration to GPT four and an internal UI to use models like that. But here's the thing that I want to kind of relate to all of your viewers. We find that we built presets into that.

**中文翻译:**
所以我们也在做这些事。我们做的一件让我很兴奋的具体事情是：在 ChatGPT 出现后不久，我们意识到如果能将其应用于 Stripe 内部的许多场景，那将非常棒。但你可以想象，我们每天处理的大量数据对我们的业务和用户来说都非常敏感，我们对此非常重视并有严格的治理。我们不能直接说：“嘿，Stripes，去用 ChatGPT 吧。”所以我们建立了一个 GPT-4 的集成和内部 UI 来使用这类模型。我想告诉大家的是：我们在其中构建了“预设（presets）”。

---

### [01:06:12] David Singleton

**English:**
So when you work with large language models, you want to write a prompt that then helps get the model into a state where it's going to be able to solve the particular problem at hand. And we find that writing prompts is something that's accessible to folks across lots of different job families, not just engineers. Folks in our marketing team, folks in our user support team have been able to use this as well. But you can put a lot of care and attention to getting a prompt that works really well and we not make it possible for those to be shared across the company. So I can grab the preset to help me write a blog post with the right kind of tone and I find it extremely valuable in helping me and many other people across the company. So I think there's a lot of innovation in high companies serve their users and operate is possible right now and we are working hard to employ all of that on behalf of our users.

**中文翻译:**
当你使用大语言模型时，你需要编写提示词（prompt）来引导模型进入能解决特定问题的状态。我们发现，编写提示词不仅是工程师的专利，营销团队、用户支持团队的同事也能做到。你可以花很多心思写出一个效果极佳的提示词，然后我们让这些提示词在全公司共享。比如我可以抓取一个预设，帮我用正确的语气写博客。我发现这对我和公司里的许多人都非常有价值。我认为目前在公司服务用户和运营方式上有很多创新空间，我们正努力代表用户去应用这一切。

---

### [01:07:03] Lenny

**English:**
What about as engineers? Are pro co-pilot, is there some along those lines that you find useful weary of? How do you think about that?

**中文翻译:**
那作为工程师呢？比如 GitHub Copilot 之类的工具，你觉得有用吗？还是有所顾虑？你怎么看？

---

### [01:07:12] David Singleton

**English:**
We're excited about co-pilot. We've made co-pilot available to our engineers internally. We ran a fairly rigorous trial to make sure that we felt good about its actual impact on our ability to write code and the code it was actually generating and find that it was very effective for us. Both in productivity but also just in helping our engineers feel like they could direct their energy towards some of the bigger problems. How should this stuff fit together rather than some of the micro problems. So because we had such great feedback on that, we've made it available very broadly internally and we'll be very excited to see where that space develops over time.

**中文翻译:**
我们对 Copilot 感到兴奋。我们已经在内部向工程师开放了 Copilot。我们进行了一次相当严格的测试，以确保它对我们编写代码的能力和生成的代码质量有积极影响，结果发现它非常有效。不仅提高了生产力，还帮助工程师将精力集中在更大的问题上（比如系统如何整合），而不是纠结于微观问题。由于反馈非常好，我们已经在内部广泛推广，并非常期待看到这个领域随时间的发展。

---

### [01:07:56] Lenny

**English:**
Do you have a sense of the productivity gain that say imagine you have a lot of 10X engineers, the gains that an amazing engineer gets out of a co-pilot versus a newer engineer?

**中文翻译:**
你对生产力的提升有具体感觉吗？比如对于那些“10 倍效率工程师”，一个顶尖工程师从 Copilot 中获得的收益与一个新手工程师相比如何？

---

### [01:08:07] David Singleton

**English:**
It's honestly too early to tell because we've only recently made it available at scale. What we're typically seeing is that the kind of tasks that it accelerates are, remember I mentioned how much energy we put into having comprehensive test suites. It's actually using co-pilot to generate your test cases, turns out to be extremely valuable. There's a reasonable amount of boiler plate that is kind of like repeated code and concepts that goes into writing good tests. But you also have to reason very carefully about is this actually testing is exactly what I want? So co-pilot takes a lot of that boiler plate generation out of the way. So you're actually thinking about the stuff that really matters. And I think that is going to have a profound impact on quality of code that we write as well. But it's a little too early to say, because we literally just folded out what kind of actual measurable impact is having.

**中文翻译:**
老实说，现在下结论还太早，因为我们最近才大规模开放。我们通常看到它加速的任务是——还记得我提到过我们投入巨大精力建立全面的测试套件吗？事实证明，使用 Copilot 生成测试用例极其有价值。编写好的测试需要相当数量的样板代码（boilerplate），即重复的代码和概念。但你仍需仔细思考：这是否准确测试了我想要的东西？Copilot 帮我们处理了大量的样板代码生成，让你能真正思考核心逻辑。我认为这也会对我们编写的代码质量产生深远影响。但现在说具体的、可衡量的影响还为时过早，因为我们才刚刚铺开。

---

### [01:08:54] Lenny

**English:**
I was talking to an engineer and he's just like, I like the active writing code and it makes me sad that this is doing this for me. So he turns it off. I think over time people will be like, "Eh, that's true. I never really enjoyed this part of it."

**中文翻译:**
我之前和一个工程师聊天，他说：“我喜欢写代码的过程，看到 AI 帮我写让我感到难过。”所以他把它关了。我觉得随着时间的推移，人们会发现：“嗯，确实，我其实从来没真正喜欢过写样板代码那部分。”

---

### [01:09:07] David Singleton

**English:**
Yeah, I'll speak from personal experience. I love writing code. I really love writing code. It's pretty much what I do for fun. I also love writing code with Copilot, because as I said, it means that I can focus on the parts that really matter. I think that's been a fairly consistent experience across Stripe as well.

**中文翻译:**
是的，从我个人经验来说，我热爱写代码，这几乎是我唯一的娱乐。我也喜欢用 Copilot 写代码，因为正如我所说，这意味着我可以专注于真正重要的部分。我认为这也是 Stripe 内部相当普遍的体验。

---

### [01:09:24] Lenny

**English:**
You run a massive engineering team. I don't know if you shared the numbers of engineers, but I know there are many. What are, and this is a broad question, just what are some lessons you've learned about managing people and/or managing engineers, whichever direction you want to go?

**中文翻译:**
你领导着一支庞大的工程团队。我不知道你是否公开过工程师的具体人数，但我知道有很多。这是一个很宽泛的问题：在管理人员或管理工程师方面，你学到了哪些经验？

---

### [01:09:41] David Singleton

**English:**
Wow, big question. There are so many different directions we could take that. I'll share a few observations. They don't necessarily all have a particular theme to them. I think as I've been responsible for bigger and bigger teams over time, one of the things that just I repeatedly learn is I personally will not be involved in really any of the decisions that matter and happen. There are thousands of decisions that an organization of any skill is making every single day, every individual engineer or PM is making hundreds of small decisions and some big ones every day that affect the kind of general trajectory.

**中文翻译:**
哇，大问题。我们可以从很多方向来谈。我分享几点观察，它们不一定有一个统一的主题。随着我负责的团队越来越大，我反复学到的一点是：我个人实际上不会参与到任何真正重要的决策中。任何规模的组织每天都会做出成千上万个决策，每个工程师或 PM 每天都会做出数百个微小决策和一些重大决策，这些决策共同影响着整体轨迹。

---

### [01:10:17] David Singleton

**English:**
The most important thing is to really focus on hiring the right people, and that means hiring people that you can trust with a tremendous amount of autonomy. If I try to get involved in lots of decisions, everything will grind to a halt. How do you do that? It is important, obviously, to be rigorous. We've described already what our hiring process is. I really lean into getting to know folks in very, very well as we're hiring them. By the way, something I didn't mention earlier that is I think important here is we pay a lot of attention at Stripe during the hiring process to references.

**中文翻译:**
最重要的事情是专注于招聘正确的人，这意味着招聘那些你可以给予极大自主权并信任的人。如果我试图参与很多决策，一切都会陷入停滞。如何做到这一点？显然，严谨很重要。我们已经描述了我们的招聘流程。在招聘时，我非常倾向于深入了解候选人。顺便说一下，我之前没提到但很重要的一点是：Stripe 在招聘过程中非常看重背景调查（references）。

---

### [01:10:49] David Singleton

**English:**
This is typically later in the process, but if you put someone through an interview process, you've probably spent what, eight hours total with them? If you talk to people that actually have worked with them before, you're probably benefiting from thousands of hours of direct experience. We take this very seriously, and we try to ask smart questions that will help get real signal out of that. I certainly find when it comes to hiring folks that have then gone on to really make a transformative impact, that references are often the time that you get the best conviction on the hire or not.

**中文翻译:**
这通常是在流程后期，但如果你让某人参加面试，你总共可能只和他们相处了 8 个小时？如果你去和那些真正与他们共事过的人聊聊，你就能从数千小时的直接经验中获益。我们非常认真地对待这件事，并尝试提出聪明的问题，从中获取真实的信号。我发现，在招聘那些后来产生变革性影响的人才时，背景调查往往是让你最终确定是否录用的关键时刻。

---

### [01:11:22] David Singleton

**English:**
Hire the right people, and then you have to trust them. Now, trust is interesting. Is actually quite challenging to trust people that you've just hired, right? Well, you've got no stake really on you yet. What I find is you do actually just have to be generous in giving trust and assuming trust by default at the beginning. Then you do need to hold people accountable enough that they are proving that they can handle that trust. Sometimes, that means hiring someone who you think quite plausibly can end up in a very big role into a smaller role to begin with. Other times, you just have the big role that you need to fill, in which case, it's important to be quite conscious about really trusting and delegating to them with a lot of support.

**中文翻译:**
招到对的人，然后你必须信任他们。信任很有趣，信任刚招进来的人其实挺难的，对吧？因为你们之间还没有建立起深厚的联系。我发现，你必须慷慨地给予信任，并在开始时默认信任。然后，你需要让人们承担足够的责任，让他们证明自己能处理这份信任。有时，这意味着先让一个你认为最终能胜任大角色的人从较小的角色做起；有时，你必须填补一个大角色的空缺，在这种情况下，有意识地给予充分信任、授权并提供大量支持就非常重要。

---

### [01:12:02] David Singleton

**English:**
I'm always working hard to delegate sometimes a little bit more than I'm comfortable with, because that's the only way to really operate at significant scale. I think something else, and sorry, this is really a smorgasboard is what a lot of differences. Something else I've realized as the organizations I work with and been responsible for have grown is that you have to be extremely conscious about managing your own time. There are hundreds or thousands of people who, quite legitimately, might want to get some time with you. If you just let the places that you spend your time and energy be controlled by the stuff that comes into your inbox, or the stuff that gets put on your calendar, that's going to be random. It's quite likely that that's not laddering up to the biggest impact.

**中文翻译:**
我总是努力去授权，有时甚至授权到让我感到有点不安的程度，因为这是在大规模运作下唯一的办法。另一件事（抱歉，这真的是一盘大杂烩，有很多不同点）是我意识到，随着我负责的组织不断壮大，你必须非常有意识地管理自己的时间。有成百上千的人可能有正当理由想占用你的时间。如果你任由收件箱里的邮件或日历上的邀约来控制你的时间和精力，那将是随机的，很可能无法产生最大的影响。

---

### [01:12:59] David Singleton

**English:**
I personally have been running a loop for, I don't know, maybe 10 years, where on Sunday evenings, and usually, well, it usually starts on Sunday afternoons, I read a lot of what happened last week. Then on Sunday evenings, I actually write a list for myself of, you asked me a question at this podcast, which is like, what would be great success for this podcast from your perspective? I basically think about that for my week every Sunday night. I make a list of if we got these things done this week, that is a good week, but obviously, we need to be dynamic. Things will surprise you through the week. Honestly, then, that drives a lot of just where I decide to spend my time. I try to encourage everyone to think that way throughout the organization. I think it does ladder up to more impact over time.

**中文翻译:**
我个人坚持一个习惯大概 10 年了：周日下午我会阅读大量上周发生的事情，周日晚上我会为自己写一份清单。就像你问我这期播客成功的标准是什么一样，我每周日晚上都会思考我这一周的目标。我会列出：如果这周完成了这些事，那就是成功的一周。当然，我们需要保持动态，周中总会有意外。坦白说，这决定了我大部分时间的分配。我努力鼓励全公司的人都这样思考。我认为随着时间的推移，这确实会带来更大的影响。

---

### [01:13:50] David Singleton

**English:**
I think the final thing I'll say here is I mentioned how important operating principles are to the culture. I think for any manager and any leaders, that includes ICPMs as well, but for any manager, any leader, how you show up really does set the culture that is around you. I try very hard to show up very consistently every day, even though there will very frequently be things that are going wrong and are bad and are hard. It's actually very important to show up quite consistently. Certainly, in line with all the values that we have and the culture that we want to set, in order to really kind of model that at scale. Different days, that can be easier and harder. The final thing is, I think it's quite important to manage your own energy. There are some tasks that I do that are maybe not the most important thing, but I know that I get a lot of joy and energy from them, and then that carries over into the other stuff that also needs to get done.

**中文翻译:**
最后我想说的是，我提到过经营原则对文化有多重要。对于任何经理和领导者（包括 IC 级别的 PM），你的表现方式真正决定了你周围的文化。我努力每天都表现得非常一致，尽管经常会有事情出错、变糟或变得困难。保持一致的表现非常重要，要符合我们拥有的价值观和想要建立的文化，从而在大规模范围内起到模范作用。有些日子容易些，有些日子难些。最后一点，我认为管理自己的能量非常重要。有些任务可能不是最重要的，但我知道我能从中获得很多快乐和能量，这种能量会延续到其他必须完成的工作中。

---

### [01:14:30] Lenny

**English:**
Just two more questions before we get to our very exciting lightning round. One is just I feel like Stripe is incredibly good at planning and organizing, prioritizing. I know every inside, it's always not as beautiful as it may seem on the outside, but what have you learned? What has Stripe learned about planning and prioritizing that you think other companies might be missing?

**中文翻译:**
在进入精彩的闪电轮环节之前，还有两个问题。一个是，我觉得 Stripe 在规划、组织和优先级排序方面做得非常好。我知道内部情况可能不像外面看起来那么完美，但你学到了什么？Stripe 在规划和优先级排序方面有哪些经验是其他公司可能忽略的？

---

### [01:14:50] David Singleton

**English:**
Yeah. Well it's funny you say that. I would say planning inside of Stripe does not get the highest net promoter score that you might imagine. I do think it is actually quite effective. By the way, the reason I think that planning, the way we do planning at Stripe doesn't always get the best internal rep is we have grown very rapidly. That means that almost every time we come back around to planning, we actually, and this is kind of a theme at Stripe, we think about a lot of the ways that we work internally from First principles. We will tend not to by default just pick a system off of the shelf that some other company has run or that we've used before. We'll think hard, considering what we are doing for our users. How should we do this?

**中文翻译:**
哈哈，你这么说很有趣。我会说 Stripe 内部的规划流程可能并没有你想象中那么高的净推荐值（NPS）。但我确实认为它非常有效。顺便说一下，我认为 Stripe 的规划方式在内部评价不一的原因是我们增长太快了。这意味着几乎每次重新开始规划时，我们都会从第一性原理（First principles）出发重新思考我们的内部工作方式——这是 Stripe 的一个主题。我们通常不会默认直接套用其他公司运行过的或我们以前用过的现成系统。我们会根据我们为用户所做的事情，认真思考：我们“应该”如何做这件事？

---

### [01:15:38] David Singleton

**English:**
When we're thinking even first principles, we'll often go out and talk to a lot of other companies, and try to learn from their experience. It's actually something I've really appreciated and enjoyed at Stripe. A lot of the learning I've done here has come not only from folks that are at the company, but also talking to a bunch of folks that we have the privilege to work closely with because their business is building on Stripe, or they're a similar stage of scale to us. A good example of this is Amazon. Amazon is a Stripe user. Because we work with them, in my first couple of weeks at Stripe, I was actually able to meet with Charlie Bell, who then ran operations at Amazon. A lot of the things that we actually now do at Stripe have come from learning from that experience. It wasn't just, oh yeah, we'll take this thing cause Amazon did it, talk to him. Lots of other companies hard to learn. The point is we care about learning from others and then we apply it.

**中文翻译:**
即使在思考第一性原理时，我们也会经常去咨询很多其他公司，尝试从他们的经验中学习。这是我在 Stripe 非常欣赏和享受的一点。我在这里学到的很多东西不仅来自公司内部，还来自与我们密切合作的伙伴，因为他们的业务建立在 Stripe 之上，或者他们的规模与我们相似。一个很好的例子是 Amazon。Amazon 是 Stripe 的用户。因为这种合作关系，在我加入 Stripe 的头几周，我得以见到当时负责 Amazon 运营的 Charlie Bell。我们现在在 Stripe 做的很多事情都源于那次学习。这不仅仅是“哦，Amazon 这么做，我们也这么做”，而是深入交流。我们非常看重向他人学习并付诸实践。

---

### [01:16:35] David Singleton

**English:**
Bringing this back to planning, because we tend to think a lot from first principles and we've been growing rapidly. The right planning process for us as a company has actually changed quite dramatically and quite significantly over the years. We do planning in a relatively deep way once a year, and then in a slightly lighter way halfway through the year. If you imagine doing someone once a year and you're growing rapidly, you're going to want to revisit exactly how you do it. I think for anyone who has the privilege of running the same planning process again and again, you can really iterate it and tune it. We've had to make more deliberate and more sweeping changes as we've gone along. There are a couple things at the core of how we do this. One is it's really important to focus on who are the users that we are seeking to serve for any given product area that we're working in? Kind of holding their needs front and center in your plans is important.

**中文翻译:**
回到规划上，因为我们倾向于从第一性原理思考且增长迅速，适合我们公司的规划流程多年来发生了巨大变化。我们每年进行一次深度规划，年中进行一次较轻量的规划。如果你每年只做一次且增长迅速，你肯定想重新审视具体的做法。我认为对于那些能反复运行同一套规划流程的人来说，你可以不断迭代和微调。而我们不得不随着发展做出更刻意、更彻底的改变。我们做法的核心有几点：一是专注于我们在特定产品领域想要服务的用户是谁？在计划中将他们的需求放在核心位置至关重要。

---

### [01:17:20] David Singleton

**English:**
Again, at Stripe, we do something that is, it's not unconventional, but it's not the most common practice in the industry, which is we work very hard to serve companies from the very, very small. The folks that are literally just starting their company on Stripe, with Stripe Atlas, all the way up to multinational, 10 Fortune five companies, fortune one companies, I guess. There's a very different set of user needs across those businesses. For any given area, it's very important for each team to be clear about who are they serving. Then we run a kind of inverted W process. We typically have teams surface what their immediate thoughts are on the most important things to do. We'll then have a group of product leaders get together and try to synthesize the most important parts of that into a kind of draft overall company strategy, and then take that back down to teams to figure out, "Well, if that's where we're making a big push, should that tweak my plans at all?" We bring it back up for synthesis, and then back down for everyone to really distribute with a lot of context within their orgs. We find that at our current scale, very, very effective.

**中文翻译:**
在 Stripe，我们做了一些虽然不是非主流、但在行业内并不普遍的事情：我们努力服务从极小到极大的所有公司。从刚通过 Stripe Atlas 创办公司的个人，到跨国巨头、财富 500 强甚至财富 1 强公司。这些企业的用户需求截然不同。对于任何领域，每个团队都必须明确他们在为谁服务。然后我们运行一种“倒 W 型（inverted W）”流程：通常先由团队提出他们认为最重要的工作；然后一组产品领导者聚在一起，将其综合成一份公司整体战略草案；接着再下发给团队，让他们思考：“如果这是我们要发力的大方向，我的计划是否需要调整？”最后再汇总综合，再下发给所有人，带着丰富的背景信息在组织内推行。我们发现这在目前的规模下非常有效。

---

### [01:18:24] Lenny

**English:**
I haven't mentioned this yet, but I actually, Stripe for my newsletter, I check the app many times a day, so I'm probably in the Fortune 1 million, somewhere in that.

**中文翻译:**
我还没提过，我的时事通讯（newsletter）其实也在用 Stripe，我每天看好几次 App，所以我大概属于“财富 100 万强”之类的。

---

### [01:18:32] David Singleton

**English:**
Do you have any feedback? Genuinely, I'd love to hear your Stripe feedback.

**中文翻译:**
你有什么反馈吗？真心想听听你对 Stripe 的反馈。

---

### [01:18:36] Lenny

**English:**
It's great. The app tells me that I'm ...

**中文翻译:**
它很棒。App 告诉我……

---

### [01:18:36] David Singleton

**English:**
No, no, don't tell us it's great. What bugs you?

**中文翻译:**
不，不，别说它很棒。有什么让你烦恼的地方？

---

### [01:18:40] Lenny

**English:**
Well, it's interesting for churn, for cohort retention, which I care a lot about for the newsletter, I actually use a different tool that feels like gives me better, a table of per cohort, how many people are still around? There's an opportunity to have better cohort retention metrics.

**中文翻译:**
嗯，很有趣的一点是关于流失率和留存分析（cohort retention），这对我这种 newsletter 业务非常重要。我实际上在用另一个工具，因为它能给我更好的表格，显示每个月加入的人里还有多少人在。我觉得 Stripe 在留存指标方面还有提升空间。

---

### [01:18:57] David Singleton

**English:**
Cool. Okay. Well, maybe we can email about that. Quite genuinely at Stripe, anytime we talk to a Stripe user, we are always looking for feedback that goes for any occasion. We often bring users into the beginning of our Friday fireside I already mentioned, and we're always asking them for their feedback and we really, really want to act on it.

**中文翻译:**
太好了。也许我们可以就此发邮件聊聊。在 Stripe，无论在什么场合，只要我们与用户交流，我们总是在寻求反馈。我们经常在“周五炉边谈话”开始时邀请用户参加，不断询问他们的反馈，而且我们真的非常想根据反馈采取行动。

---

### [01:19:15] Lenny

**English:**
Well, I wish I had more. It's works great. Final question, Stripe Session's coming up, it's going to happen before this comes out. What should folks be watching for? What's next for Stripe?

**中文翻译:**
我希望我有更多槽点，但它确实用得很好。最后一个问题，Stripe Sessions 就要到了（虽然节目播出时可能已经开过了）。大家应该关注什么？Stripe 的下一步是什么？

---

### [01:19:26] David Singleton

**English:**
We've touched on a few of the things that we're sharing broadly for the first time at Stripe Sessions on this call already. Per our development process, these have been in the hands of some Stripe users for a significant amount of time and we've really kind of crafted them with them. I'm super excited about a number of the things that we're going to be talking about next week. One is I've mentioned our revenue and financial automation suite. We've really been crafting the features there for some time, and really nice example actually of how building closely with users really, really helps build things at scale.

**中文翻译:**
我们在这次对话中已经触及了一些将在 Stripe Sessions 上首次公开分享的内容。按照我们的开发流程，这些功能已经在部分 Stripe 用户手中试用了一段时间，我们是与他们共同打磨的。我对下周要谈的很多事情都感到超级兴奋。一个是刚才提到的收入和财务自动化套件。我们打磨这些功能已经有一段时间了，这是一个“与用户紧密合作有助于构建大规模产品”的极好例子。

---

### [01:20:05] David Singleton

**English:**
We've a set of features that we work with companies like Atlassian and CloudFlare to enable their businesses on Stripe Billing. They have relatively complex models. For instance, you might sign a deal where it has a discount in the first year, and then there's another product that's being used in the second year, and then something else happens in the third year. You can now model all of that in Stripe Billing, and we're going to be showing how you can do that in the dashboard at Stripe Sessions next week. It's now going into general availability for all Stripe users. It's giving all of our users from the very small to the very large, the same power that the world's best SAS platform might have.

**中文翻译:**
我们有一系列功能是与 Atlassian 和 Cloudflare 等公司合作开发的，用于支持他们在 Stripe Billing 上的业务。他们的模式非常复杂。例如，你签的合同可能第一年有折扣，第二年使用了另一个产品，第三年又发生了别的变化。现在你可以在 Stripe Billing 中对所有这些进行建模，下周我们将在 Sessions 大会上展示如何在控制面板中操作。现在它将向所有 Stripe 用户开放。这让所有用户（无论大小）都能拥有与世界顶级 SaaS 平台同等的强大能力。

---

### [01:20:45] David Singleton

**English:**
Excited about that. It's also the case that we didn't talk about it in this call, Stripe Connect is our product for platforms of marketplaces. If I may actually just take one second, it's a really good example of how focusing on the needs of our users in one area took us into a really valuable space to solve for many users in other areas. The ideas behind Stripe Connect came from working with companies like Lyft and Shopify. In the very early days, they were using Stripe for pay-ins, but we realized, "Oh, these companies are operating these multi-sided marketplaces, and there's a ton of heavy lifting you have to do to make that work really well."

**中文翻译:**
我很期待。另外，我们在这次谈话中没提到 Stripe Connect，这是我们面向平台和市场的支付产品。如果可以耽误一秒钟的话，我想说这是一个很好的例子：专注于一个领域的用户需求，如何带我们进入一个极具价值的新领域去解决更多用户的问题。Stripe Connect 的想法源于与 Lyft 和 Shopify 等公司的合作。早期他们用 Stripe 收款，但我们意识到：“哦，这些公司在运营多边市场，要让它运作良好，需要处理大量的繁重工作。”

---

### [01:21:18] David Singleton

**English:**
We have to have a bunch of regulatory licenses in place, but also there's a lot that you need to do to actually make the money move and kind of account for it in the right way. Connect is our product for platforms and marketplaces. One of the things that we've done over the course of the last year or so is actually taken a lot of the features that we've built in the Stripe Dashboard to help folks manage things like gathering the right documents from their users, or handling refunds and so forth. We've actually made them available as embed-able UI components that are also completely customizable, which these platforms can take and put inside their own dashboards so they can present a lot of the power that Stripe is enabling to their customers, without having to do a ton of engineering work themselves.

**中文翻译:**
我们必须拥有各种监管牌照，而且在资金流动和正确记账方面也有很多工作要做。Connect 就是为此而生的。在过去一年左右的时间里，我们做的一件事是：把 Stripe 控制面板中用于帮助用户管理文档收集、处理退款等功能，转化成了可嵌入的 UI 组件，而且是完全可定制的。平台可以将这些组件放入自己的控制面板中，从而向他们的客户展示 Stripe 提供的强大功能，而无需自己投入大量的工程开发。

---

### [01:21:53] David Singleton

**English:**
Look, generating engineering leverage for our customers is just very frequently the main thing that we can do to help their businesses. We're going to show a bunch of that stuff next week, which I'm excited about. Then finally, we touched on it already, but it'll be great to show some of the innovation we've had around AI and large language models. Again, I think it's going to make a big impact over the coming years.

**中文翻译:**
你看，为我们的客户创造“工程杠杆（engineering leverage）”通常是我们能为他们的业务提供的最大帮助。下周我们将展示很多这类内容。最后，虽然已经提到了，但展示我们在 AI 和大语言模型方面的创新也会非常棒。我再次认为，这将在未来几年产生巨大影响。

---

### [01:22:10] Lenny

**English:**
Well, with that, we've reached our very exciting lightning round. First question, what are two or three books that you've recommended most to other people?

**中文翻译:**
好，现在进入我们非常精彩的闪电轮环节。第一个问题：你向别人推荐最多的两三本书是什么？

---

### [01:22:17] David Singleton

**English:**
Most means that you have to integrate under the curve, so I'd say High Output Management by Andy Grove is definitely the book that I've recommended the most. It was a book that really opened my eyes to how to get the most out of teams over the whole course of my career. Definitely check that out if you haven't read it already. Recently, we talked about being meticulous in our craft. I've really enjoyed Build by Tony Fidel. Tony worked on the iPod, and then the iPhone, and then was the founder of Nest. He puts a tremendous amount of thought into his users and how to build really great crafted experiences. I had the privilege of working with him very briefly at Google, but I thought the book was excellent in terms of helping provide some practical pointers there. Then I would be remiss if I did not mention Claire Hughes Johnson's book, Skilling People. Even though it only just came out, I've recommended it a lot.

**中文翻译:**
“推荐最多”意味着要看累积量，所以我认为安迪·格鲁夫的《高产出管理》（High Output Management）绝对是我推荐次数最多的书。在我的整个职业生涯中，这本书让我大开眼界，教会了我如何发挥团队的最大效能。如果你还没读过，一定要去看看。最近，既然聊到了精益求精，我很喜欢托尼·法德尔的《创造》（Build）。托尼曾参与开发 iPod 和 iPhone，后来创办了 Nest。他对他用户以及如何构建极致体验投入了巨大的思考。我有幸在 Google 与他短暂共事过，我觉得这本书在提供实用建议方面非常出色。最后，如果不提到 Claire Hughes Johnson 的新书《管理人类》（Scaling People），那就是我的失职。虽然它刚出版不久，但我已经推荐过很多次了。

---

### [01:23:17] Lenny

**English:**
Here's my copy. It supports my laptop on here, and ...

**中文翻译:**
这是我的那一本。它现在正垫着我的笔记本电脑……

---

### [01:23:18] David Singleton

**English:**
Amazing. I hope you've read it.

**中文翻译:**
太棒了，希望你读过它。

---

### [01:23:22] Lenny

**English:**
I've had her on the podcast. I've read, I've skimmed it as much as I can. I'm not building a business right now. She was in the top 10 bestseller list on the Wall Street Journal, I saw.

**中文翻译:**
我请她上过播客。我读过，尽可能地浏览了一遍。我现在没在创业。我看到她登上了《华尔街日报》畅销书排行榜前十。

---

### [01:23:31] David Singleton

**English:**
That's right, that's right. It has a ton of very practical advice, so I recommend that one a lot.

**中文翻译:**
没错，没错。它有很多非常实用的建议，所以我非常推荐。

---

### [01:23:36] Lenny

**English:**
What's a favorite recent movie or TV show?

**中文翻译:**
最近最喜欢的电影或电视节目是什么？

---

### [01:23:39] David Singleton

**English:**
Okay, I'm going to cheat here because I'm going to interpret that as what's the best video content you've seen recently? I have fallen in love with YouTube for learning about the really fast moving AI space. It has been remarkably valuable, and Andre Carpassi has a bunch of really good seminars, but not just that. Across the whole spectrum, I think there's just so much gold on YouTube if you want to learn a new skill these days.

**中文翻译:**
好，我要耍个赖，我把它理解为“你最近看过的最好的视频内容是什么”。我爱上了通过 YouTube 学习飞速发展的 AI 领域。它非常有价值，Andrej Karpathy 有很多非常棒的讲座。不仅如此，如果你现在想学习任何新技能，YouTube 上简直到处是宝藏。

---

### [01:24:06] Lenny

**English:**
Is that the channel you recommend, Andre Carpassi's channel?

**中文翻译:**
你推荐的是 Andrej Karpathy 的频道吗？

---

### [01:24:09] David Singleton

**English:**
His channel is awesome if you want to learn about AI.

**中文翻译:**
如果你想了解 AI，他的频道非常棒。

---

### [01:24:12] Lenny

**English:**
He's the ex-Tesla AI?

**中文翻译:**
他是前特斯拉 AI 负责人？

---

### [01:24:15] David Singleton

**English:**
That's right. I believe recently, gone to OpenAI, but was doing this kind of on his own for a few months and has produced a bunch of great YouTube content.

**中文翻译:**
没错。我相信他最近去了 OpenAI，但之前他独立做了几个月，产出了很多高质量的 YouTube 内容。

---

### [01:24:23] Lenny

**English:**
Great pick. Most people pick White Lotus or something like that and you go with a AI YouTube channel. I love it. What's a favorite interview question you like to ask?

**中文翻译:**
选得好。大多数人会选《白莲花度假村》之类的，而你选了一个 AI YouTube 频道。我喜欢。你最喜欢的面试问题是什么？

---

### [01:24:32] David Singleton

**English:**
Okay, well, actually, you will find some recommended interview questions from me in this book. One I really like actually, because it sounds like a softball and then it's not, is I often ask people, especially for leadership hiring, which leader that they've worked with they admire most and why. It sounds like a softball, but it actually tells you a lot about what this person really cares about in leadership. Sometimes, I'll follow up and ask, "How does that manifest in your own leadership style?" Then, and this I think is really quite telling, I always ask folks, I'm going to spoil my interview question, I'm revealing it in your podcast, but I always ask folks, "Okay, so imagine you were their manager. Tell me the performance review or the development feedback you'd give them to help them be more effective." I think everyone always has things that they could improve, certainly myself included. Folks' ability to think critically about someone that they kind of admire or lionize, and how they could actually be more effective, I find quite telling.

**中文翻译:**
好，其实在那本书里你能找到我推荐的一些面试题。我非常喜欢的一个问题，听起来像个送分题，但其实不是：我经常问候选人（特别是领导层招聘），在他们合作过的领导者中，他们最钦佩谁，为什么？这听起来很简单，但它能告诉你这个人真正看重领导力的哪些方面。有时我会追问：“这在你的领导风格中是如何体现的？”然后，我觉得最有杀伤力的一点是（我要在你的播客里剧透我的面试题了）：我会问，“好，想象你是他们的经理。请告诉我，你会给他们什么样的绩效评估或发展建议，来帮助他们变得更高效？”我认为每个人都有可以改进的地方，包括我自己。一个人批判性地思考他们钦佩或崇拜的人，并思考如何让他们更高效，这种能力非常能说明问题。

---

### [01:25:30] Lenny

**English:**
What are some favorite products you've recently discovered that you love?

**中文翻译:**
你最近发现了哪些让你喜爱的产品？

---

### [01:25:33] David Singleton

**English:**
The products that I have recently discovered and definitely love is Mid-Journey, also building the business side of their business on Stripe. For folks who don't know, Mid-Journey is an AI tool for generating images using stable diffusion, but it's really pretty awesome. I've been using it a lot with my daughter. We'll come up with stories and we'll generate beautiful looking images with Mid-Journey, and then she'll drop them into books and she'll write the pros. The reason I think it's pretty cool is I was very surprised and skeptical at its UI to begin with, because its UI is Discord. They drop you into Discord and you are in a channel where you have to prompt the artificial intelligence. I find it very confusing at the beginning. It's like, this is not the right interface for this tool, but actually, it's very smart because you learn from other people on Discord, how they're prompting the AI in order to get the kind of results that they're looking for. I find that made it possible for me to get a lot more power and value out of the tool. I definitely subscribe to Mid-Journey and have had a lot of fun playing with it.

**中文翻译:**
我最近发现并非常喜欢的产品是 Midjourney（顺便说一下，他们的商业端也是建立在 Stripe 上的）。对于不知道的人，Midjourney 是一款使用稳定扩散技术生成图像的 AI 工具，它真的很棒。我经常和女儿一起用它：我们会编故事，用 Midjourney 生成精美的图片，然后她把图片放进书里并写下文字。我觉得它很酷的原因是，起初我对它的 UI 感到非常惊讶和怀疑，因为它的 UI 竟然是 Discord。它把你扔进 Discord 频道，让你在那里输入提示词。刚开始我觉得很困惑，觉得这不是这类工具该有的界面。但实际上它非常聪明，因为你可以在 Discord 上向别人学习他们是如何编写提示词来获得想要的效果的。这让我能更好地发挥这个工具的威力。我订阅了 Midjourney，玩得非常开心。

---

### [01:26:36] Lenny

**English:**
What's your favorite image that you've created, if there's one that comes to mind?

**中文翻译:**
你创作过的最喜欢的图片是什么？如果能想到的话。

---

### [01:26:39] David Singleton

**English:**
We made a cover for a book that my daughter is writing. My daughter is nine years old by the way, so we're talking here, good children's stories. She made an image of a wolf wearing a purple velvet cloak, sitting in front of a campfire with a shack in a forest and a nebula behind. It's beautiful. We actually built that with by combining two images, the wolf and the shack. Actually getting the wolf out of one image and putting it onto the other, we used the new Apple image segmentation copy and paste thing, which worked great. It's also fun combining these AI tools, but that one has been pretty good.

**中文翻译:**
我们为我女儿正在写的一本书做了一个封面。顺便说一下，我女儿九岁，所以是那种童话故事。她生成了一张图片：一只穿着紫色天鹅绒斗篷的狼，坐在一座森林小屋前的营火旁，背景是星云。非常漂亮。我们实际上是通过结合两张图片（狼和小屋）来完成的。为了把狼从一张图里抠出来放到另一张图上，我们用了 Apple 新出的图像分割复制粘贴功能，效果很好。结合这些 AI 工具很有趣，那张图真的很棒。

---

### [01:27:17] Lenny

**English:**
What a world. Two final questions. What's something relatively minor you've changed in your product development process that has had a tremendous impact on your ability to execute as a team?

**中文翻译:**
真是个奇妙的世界。最后两个问题。在产品开发流程中，你做过的哪些相对微小的改变，却对团队的执行力产生了巨大影响？

---

### [01:27:27] David Singleton

**English:**
We talked a bit or about this already, auto deploys and that auto merge feature, but probably the most profound thing is we put a little button in every single developer tool at Stripe. It is an emoji of an octopus that is crying. If you click it, it makes it possible to just type in what's gone wrong. Then we have our developer productivity team read all of those and use them to prioritize what they're up to. Just like frictionless problem recording turned out to be really valuable. We call those paper cuts.

**中文翻译:**
我们已经聊过一些了，比如自动部署和自动合并功能。但可能影响最深远的是：我们在 Stripe 的每一个开发工具里都放了一个小按钮，图标是一个“哭泣的章鱼”表情。如果你点击它，就可以直接输入哪里出了问题。然后我们的开发效率团队会阅读所有这些反馈，并据此排列工作优先级。这种“无摩擦的问题反馈”被证明非常有价值。我们称之为“纸张割伤（paper cuts，意指微小但令人不适的问题）”。

---

### [01:27:56] Lenny

**English:**
Crying octopus. I love that.

**中文翻译:**
哭泣的章鱼，我喜欢这个。

---

### [01:27:58] David Singleton

**English:**
Yeah.

**中文翻译:**
是的。

---

### [01:27:59] Lenny

**English:**
Who else from Stripe or Former Stripe should I have on the podcast is my final lightning round question?

**中文翻译:**
闪电轮的最后一个问题：我该请哪位 Stripe 员工或前员工上播客？

---

### [01:28:05] David Singleton

**English:**
I see how this works. Two Stripes I think you should have on. Emily Sands is our chief economist and leads our information org. I think includes data science, but also the teams that build all of our, a lot of our internal tools. I think Emily just has great frameworks for thinking about how to translate what's really going on for users into great sets of metrics that you can then use to get the right action happening. As I described before, that's super important. The second person would be Michelle Boo. Michelle joins Stripe as an engineer in the very, very early days, and has been with us for obviously a long time. She's really our principal product design architect in terms of the actual abstractions that we use to model our users' businesses on Stripe. I think she has very deep insight into how to think about getting those things right. I think you would enjoy talking.

**中文翻译:**
我明白这套路了。我觉得你应该请两位 Stripes。一位是 Emily Sands，她是我们的首席经济学家，领导着我们的信息部门。这包括数据科学，也包括构建我们许多内部工具的团队。Emily 拥有一套极佳的框架，能将用户的真实情况转化为优秀的指标体系，从而引导正确的行动。正如我之前描述的，这非常重要。第二个人是 Michelle Bu。Michelle 在非常早期就以工程师身份加入了 Stripe，已经在公司很久了。她是我们的首席产品设计架构师，负责我们在 Stripe 上为用户业务建模时所使用的核心抽象。我认为她在如何正确处理这些事情方面有非常深刻的见解。我想你会喜欢和她聊天的。

---

### [01:28:55] Lenny

**English:**
David, I so appreciate you making time for this, especially during this hectic period ahead of sessions. Two final questions. Where can folks find me online if they want to reach out, maybe learn more about what you're up to you, and then how can listeners be useful to you?

**中文翻译:**
David，非常感谢你抽时间参加节目，尤其是在 Sessions 大会前的忙碌时期。最后两个问题：如果大家想联系你或了解你的近况，可以在哪里找到你？另外，听众们能为你做点什么？

---

### [01:29:08] David Singleton

**English:**
Cool. Okay. Well, I am @DPS on Twitter. That is definitely the best place to get hold of me, but you can also check right my personal blog at blog.singleton.io. Useful, honestly, please send me Stripe feedback. You can discover my email address on my blog as well. I would love to hear how we could serve you better.

**中文翻译:**
好。我的 Twitter 账号是 @DPS，那是联系我最好的地方。你也可以看我的个人博客 blog.singleton.io。至于听众能帮我什么，坦白说，请给我发送关于 Stripe 的反馈。你可以在我的博客上找到我的邮箱。我很想听听我们如何能更好地为你服务。

---

### [01:29:28] Lenny

**English:**
David, thank you again for being here.

**中文翻译:**
David，再次感谢你的到来。

---

### [01:29:31] David Singleton

**English:**
Thank you. It was a lot of fun, Lenny.

**中文翻译:**
谢谢，Lenny，这很有趣。

---

### [01:29:33] Lenny

**English:**
Same. Bye, everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on Apple Podcast, Spotify, or your favorite podcast app. Also, please consider giving us a rating or leaving a review, as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at LennysPodcast.com. See you in the next episode.

**中文翻译:**
我也是。大家再见。非常感谢收听。如果你觉得本期节目有价值，可以在 Apple Podcast、Spotify 或你喜欢的播客应用上订阅。此外，请考虑给我们评分或留下评论，这能帮助其他听众发现这个播客。你可以在 LennysPodcast.com 找到所有往期节目或了解更多信息。下期节目见。