---
name: lenny-researcher
description: Expert on Lenny's Podcast, capable of retrieving and synthesizing product management, growth, and career advice from the local knowledge base.
---

# Lenny Podcast Researcher Skill

This skill helps you extract insights from the local `lenny-podcast-chinese` repository. It contains 297+ episodes with deep analysis and bilingual transcripts.

## Capability

- **Topic Search**: Find episodes related to specific topics (e.g., PLG, Hiring, retention).
- **Guest Insight**: Retrieve specific views from a guest (e.g., "What does Brian Chesky say about culture?").
- **Comparison**: Compare and contrast views from multiple guests.
- **Synthesis**: Combine insights from multiple episodes to answer complex questions.

## Workflow

### 1. Topic Identification & Index Lookup

First, determine the topic of the user's query. Check if it matches one of the high-level indexes in `lenny/index/`:

- `product-management.md` (Topics: Strategy, Discovery, Roadmap, Big Tech PM)
- `growth-marketing.md` (Topics: PLG, B2B, SEO, Branding)
- `leadership.md` (Topics: Management, Culture, Org Design)
- `ai-technology.md` (Topics: AI, Engineering, Data)
- `founders-ceos.md` (Topics: Fundraising, PMF, Zero to One)
- `career.md` (Topics: Promotion, Transition, Burnout)

**Action**: If a match is found, **read the index file** first to find the most relevant guests/episodes.

### 2. Search Strategy

If the topic is specific or not in the index, use `grep_search`.

#### A. Keyword Search

Search in `analysis.md` (English content is often better for technical terms).

```bash
grep -r "KEYWORD" lenny/episodes/ --include="analysis.md"
```

#### B. Synonym Expansion

If initial search yields few results, expand to synonyms.

- "Hiring" -> "Recruiting", "Talent", "Interview"
- "Firing" -> "Letting go", "Termination", "Performance management"
- "PMF" -> "Product Market Fit", "Matching"
- "Growth" -> "Acquisition", "Retention", "Scale"

#### C. Filename Filter

If the user asks about a specific person or company, filter by path.

```bash
# Find episodes by guest name or company
find lenny/episodes -name "*guest-name*"
# OR
grep -r "Company Name" lenny/episodes/ --include="analysis.md"
```

### 3. Deep Read & Retrieval

Once you have identified 1-3 relevant episodes, use `view_file` to read their `analysis.md` files.
**Path Structure:** `lenny/episodes/[guest-name]/analysis.md`

### 4. Special Workflows

#### Workflow: Compare & Contrast

**Trigger**: User asks "Compare X and Y" or "Difference between X and Y's view".

1.  **Identify Subjects**: Find the episode paths for both guests.
2.  **Retrieve Both**: Read `analysis.md` for both.
3.  **Synthesize**: Use the **Comparison Template** below.

### 5. Response Templates

Please strictly follow these templates for your final output.

#### Template A: Topic Summary

> Used for general "How to..." or "What is..." questions.

**核心观点 (Core Thesis)**
[1-2 sentences summarizing the consensus advice]

**关键策略 (Key Strategies)**

- **[Strategy 1]**: [Explanation] (Source: [Guest Name])
- **[Strategy 2]**: [Explanation] (Source: [Guest Name])
- **[Strategy 3]**: [Explanation] (Source: [Guest Name])

**行动建议 (Actionable Advice)**

1.  [Action Item 1]
2.  [Action Item 2]

---

#### Template B: Guest Insight

> Used for specific guest questions.

**[Guest Name] on [Topic]**

**核心洞察 (Key Insight)**
[Summary of their unique perspective]

**具体建议 (Specific Advice)**

- [Point 1]
- [Point 2]

**金句 (Quote)**

> "[Quote from analysis.md]"

---

#### Template C: Comparison

> Used for "A vs B" questions.

| Feature/Topic        | [Guest A]               | [Guest B]               |
| :------------------- | :---------------------- | :---------------------- |
| **[Dimension 1]**    | [Viewpoint A]           | [Viewpoint B]           |
| **[Dimension 2]**    | [Viewpoint A]           | [Viewpoint B]           |
| **[Key Difference]** | [Summary of difference] | [Summary of difference] |

**结论 (Conclusion)**
[Synthesis of which approach is better for which context]

## Example Scenarios

**User:** "Compare Brian Chesky and Toby Lutke on culture."
**Action:**

1.  Find `episodes/brian-chesky` and `episodes/tobi-lutke`.
2.  Read both `analysis.md`.
3.  Extraction: Brian focuses on "Community/Design", Tobi focuses on "Crafters/Systems".
4.  Output using **Template C**.

**User:** "How to fire someone?"
**Action:**

1.  Search `grep -r "firing" lenny/episodes/ --include="analysis.md"` -> Hits on specific episodes.
2.  Search `grep -r "letting go" lenny/episodes/ --include="analysis.md"` -> More hits (e.g. Matt Mochary).
3.  Read best 2 files.
4.  Output using **Template A**.
