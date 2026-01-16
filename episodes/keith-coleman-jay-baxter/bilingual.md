# Keith Coleman & Jay Baxter - 双语对照

This document provides a bilingual transcript of the key segments from Lenny’s Podcast featuring the creators of Community Notes.

---

### [00:00:00] Lenny Rachitsky

**English:**
The work that you guys do has had such a tremendous impact on the way the world works. I want to start with just giving people a brief understanding of what is Community Notes.

**中文翻译:**
你们所做的工作对世界的运作方式产生了巨大的影响。我想先让大家简单了解一下什么是 Community Notes（社区笔记）。

---

### [00:00:09] Keith Coleman

**English:**
Someone on X can see a post. If they think it's misleading, they can propose a note that they think other people might find informative. Other people can then rate that note.

**中文翻译:**
X 上的用户如果看到一条推文，觉得它有误导性，就可以提议一条他们认为对他人有参考价值的笔记。然后，其他人可以对这条笔记进行评分。

---

### [00:00:18] Jay Baxter

**English:**
We actually look for agreement from people who have disagreed in the past. And what we see is when people actually have that sort of surprising agreement, that's what makes the notes so neutral and accurate and well-written, really, overall.

**中文翻译:**
我们实际上是在寻找那些过去意见不合的人之间达成的共识。我们发现，当人们达成这种“出人意料的共识”时，笔记往往会表现得非常中立、准确且文笔流畅。总的来说，正是这种机制保证了笔记的质量。

---

### [00:00:31] Lenny Rachitsky

**English:**
There's many people that are very polarized. How do you deal with people that are super anti-vax, super Jan 6?

**中文翻译:**
现在很多人都非常两极分化。你们如何处理那些极度反疫苗或极度支持“1月6日国会山事件”的人群？

---

### [00:00:36] Keith Coleman

**English:**
One philosophical thing that's important is that we want all of humanity to participate and sometimes people are surprised by that. We have all of humanity. We then have the data to understand what notes will be helpful to actual humanity. Every post is eligible for notes. We shouldn't exempt Elon. We shouldn't exempt government figures. We should be like everyone... Even advertisers can get notes.

**中文翻译:**
一个重要的哲学观点是，我们希望全人类都能参与进来，有时人们对此感到惊讶。正因为有了全人类的参与，我们才有数据来理解什么样的笔记对真实的人类是有帮助的。每条推文都有资格获得笔记。我们不应该豁免埃隆（Elon Musk），不应该豁免政府官员。我们应该一视同仁……甚至广告商也可能收到笔记。

---

### [00:00:58] Jay Baxter

**English:**
There have been external studies run by people totally independent of us who have found that if you take a post with or without a Community Note, that actually people's agreement with the core claims in the post does change if they see it with a note versus without.

**中文翻译:**
有一些完全独立于我们的外部研究发现，如果你对比同一条推文在有无“社区笔记”情况下的表现，用户对推文核心主张的认同感确实会因为看到笔记而发生改变。

---

### [00:01:13] Lenny Rachitsky

**English:**
Is there anything else along the lines of just working for Elon within an org Elon runs that might surprise people?

**中文翻译:**
在埃隆领导的组织里为他工作，还有什么会让人们感到惊讶的事情吗？

---

### [00:01:18] Keith Coleman

**English:**
If I were to start a company in that company, it would be even leaner than I would've made it before. I've been amazed with just how much the team is able to accomplish with a small group and I think because of a small group-

**中文翻译:**
如果我要在那家公司里创办一家公司，我会让它比我以前设想的还要精简（Lean）。我被这个团队在如此小规模的情况下所能成就的事业惊呆了，而且我认为正是因为团队规模小，才有了这样的成就——

---

### [00:01:33] Lenny Rachitsky

**English:**
Today, my guests are Keith Coleman, Product Lead for Community Notes, and Jay Baxter, Founding ML Engineer and Researcher for Community Notes. This conversation may be my newest favorite podcast episode so far. Community Notes is one of the most impactful and clever and, also, underappreciated products in the world right now. If you ever use X/Twitter and you see a note underneath a tweet correcting the misinformation in that tweet, that is Community Notes. I've never heard a deep dive into the story behind the product and the team that built it and I'm excited to bring you just that. We get into the surprising origin story of the product, how the algorithm actually works, how the algorithm emerged out of an internal contest within Twitter, the principles behind Community Notes, and why staying true to them has been so key to its success. Also, how it survived four different leaders, including Elon and Jack, and why it's now a big part of the solution to solving misinformation on the internet. Including recently being adopted by Meta as their main fact-checking tool.

**中文翻译:**
今天，我的嘉宾是 Community Notes 的产品负责人 Keith Coleman，以及创始机器学习（ML）工程师兼研究员 Jay Baxter。这次对话可能是我目前最喜欢的播客集。Community Notes 是当今世界上最具影响力、最聪明，但也最被低估的产品之一。如果你使用 X/Twitter，看到推文下方有纠正误导信息的笔记，那就是 Community Notes。我从未听过关于这个产品及其背后团队故事的深度访谈，今天很高兴能带大家一探究竟。我们将探讨该产品出人意料的起源、算法的实际运作方式（它是如何从 Twitter 内部竞赛中脱颖而出的）、其背后的原则，以及为什么坚持这些原则是成功的关键。此外，它如何历经四任领导者（包括埃隆和杰克·多西）而生存下来，以及为什么它现在成为解决互联网虚假信息的重要方案——包括最近被 Meta 采纳作为其主要的事实核查工具。

---

### [00:07:22] Jay Baxter (Deep Dive on Algorithm)

**English:**
I think a key misunderstanding a lot of people have if they haven't really dived into details, they just think that maybe someone can write a note and it appears immediately or we're just taking a majority rules vote of who thinks the note's good. I think both of those approaches would probably lead to biased or inaccurate notes. I think the key thing, really, that we do is we actually look for agreement from people who have disagreed in the past. And what we see is when people actually have that sort of surprising agreement, that's what makes the notes so neutral and accurate and well-written, really, overall. It's just that people who are very polarized, overall, often can't find agreement when things aren't accurate, right? I think it also provides some good anti-manipulation properties.

**中文翻译:**
很多人如果不深入了解细节，会产生误解，认为只要有人写了笔记就会立即显示，或者我们只是采取“少数服从多数”的投票机制。我认为这两种方法都会导致偏见或不准确。我们做的核心工作是寻找那些“过去意见不合的人”之间的共识。我们发现，当人们达成这种“出人意料的共识”时，笔记就会变得非常中立和准确。通常情况下，立场极化的人群在事实不准确时是无法达成共识的。此外，这种机制也提供了很好的防操纵特性。

---

### [00:09:40] Keith Coleman (On Open Participation)

**English:**
Initially, some people inside the company were suggesting like, "Hey, why don't you have journalists or some select group be the first participants?" But very specifically we were like, "No. We're trying to move away from the idea of curated editorial decisions being made around this. This is supposed to be open to everyone." So we very intentionally try to allow all humans in. People are randomly selected and that's important to it feeling fair, feeling open, feeling trustable.

**中文翻译:**
最初，公司内部有人建议：“嘿，为什么不让记者或某些特定群体先参与呢？”但我们非常明确地拒绝了。我们想摆脱“由少数人做编辑决策”的模式。这应该是向所有人开放的。我们有意让所有人参与，随机选择参与者，这对于公平感、开放感和可信度至关重要。