# Plan: semantic layer comparison page

Status on 2026-10-24: research for 44 products and 836 cells (15 still "Not checked yet"), fact-checked and link-checked, one shared `site/data.js`, three design prototypes behind `site/index.html` that pass all verify checks. This plan covers what to ship, how to build it, how to keep it true, and how to get it read.

## 1. Recommended design

Ship **B, "Can I semantic?"**, as the home page. Fold the best parts of A and C into it.

Why B:
- It answers the reader's real question in one screen: "what does my platform give my agent?" Engineers scan a grid faster than they read chapters.
- Every cell is a deep link (`#snowflake/synonyms`). People paste links to a single cell in Slack, issues and posts. That is the main sharing unit for a reference page.
- The format is familiar. caniuse.com taught engineers how to read a support grid. No onboarding.
- It handles growth. 44 rows today, 100 later, with filters and sort. A gets longer and C gets denser as vendors grow.
- "Not checked yet" is visible as its own state. That honesty is the brand.

What to take from the others:
- From A: the five-rung ladder and the benchmark evidence section, as a short intro above the grid. A's per-vendor chapter becomes the vendor page (see section 3).
- From C: the "path to NL-to-SQL" diagram, inside the B drawer and on each vendor page. It is the best "what do I do next" answer of the three.

What not to ship: A as the home page (too long for a reference), and C as the home page (one platform at a time hides the comparison).

## 2. Traction strategy

The goal is to become the page people link when someone asks "does X have a semantic layer?"

**Be the most trusted, not the biggest.**
- Every cell has a source URL and a status (GA, Preview, Announced). "Not checked yet" stays visible.
- Publish a corrections log. Each fix shows the date, the old claim and the source.
- Mark vendor-run benchmarks as vendor-run.

**Make vendors and practitioners do the distribution.**
- Each vendor row has "Suggest an edit", which opens a prefilled GitHub issue. Vendors fix their own rows with sources, and they share the page when their row improves.
- At launch, send each vendor's DevRel team a link to their row. Ask for corrections, not promotion.
- Data is open (JSON in the repo, CC BY 4.0). Others can embed or cite it. Every reuse is a backlink.

**Give people a reason to come back.**
- A monthly "What changed" post: renames, GA dates, new MCP servers. It doubles as the newsletter and RSS feed.
- Pages per vendor and per pair ("Snowflake semantic views vs Databricks metric views") match how people search.

**Publish original data.** This is the strongest lever. Run one small, public NL-to-SQL eval: the same questions on the same dataset, with and without each platform's semantic layer. Publish the harness. Original numbers get cited. Opinions do not.

**Launch sequence**
1. Soft launch to 10 to 20 practitioners for corrections (one week).
2. LinkedIn post with one striking finding and a deep link to the cell that proves it.
3. Show HN and r/dataengineering, same day, framed as "an open dataset", not "my site".
4. Vendor DevRel outreach (above).
5. Monthly "What changed" posts after that.

**Measure:** weekly visitors, deep-link visits (hash routes), issues opened by people outside the project, and backlinks. Use a privacy-friendly counter (Plausible or GoatCounter). No cookie banner.

## 3. Build stack

Keep it static. No backend.

| Part | Choice | Why |
|---|---|---|
| Site generator | Astro, static output | Builds one page per vendor and per comparison from JSON. Ships zero JS by default. |
| Interactive grid | The current B vanilla JS, as one island | Already works and passes verify. No framework needed. |
| Data | `research/*.json` merged by `tools/build-data.mjs` | Already in place. Adds per-vendor JSON for the vendor pages. |
| Validation | JSON Schema plus a node check in CI | Catches bad levels, missing sources and dashes before deploy. |
| Social images | Generated at build (Satori) per vendor and per cell | Makes shared links look good. |
| Hosting | Cloudflare Pages or GitHub Pages | Free, fast, deploy on merge. |
| Edits | GitHub issue forms plus PRs | Public history and a review step. |
| Analytics | Plausible or GoatCounter | Privacy-friendly. |

Pages:
- `/`: the grid (B) with the ladder intro.
- `/v/<vendor>/`: the A chapter plus the C path diagram plus every cited source.
- `/compare/<a>-vs-<b>/`: generated for common pairs.
- `/changes/`: the corrections log and the monthly posts.
- `/data/`: the JSON download and the license.

## 4. Data pipeline

```
research briefs ──► research agents (Sonnet) ──► research/*.json
                                                      │
                     verify agents (Sonnet) ◄─────────┤  open every cited page, fix or null
                                                      │
              independent fact-check (Opus) ◄─────────┤  high-risk claims plus random cells
                                                      ▼
        tools/build-data.mjs ──► schema check, dash scrub, "not checked yet" report
                                                      │
              link check (every URL) ◄────────────────┤  non-200 goes to an issue
                                                      ▼
                 site/data.js ──► tools/verify.mjs (Playwright) ──► deploy
```

Rules the pipeline enforces:
- A cell with level 1 to 3 must have a source URL that returned 200 at build time.
- A level 0 means "checked, and not there", never "could not check". Unknown is `null`, shown as "Not checked yet".
- No em or en dashes in page text. The build scrubs them; verify fails if any slip through.
- Every vendor has a `verified` date. Next step: a date per cell.

Lessons from this round:
- The cloud environment needs Network access set to Full. Vendor docs are blocked otherwise.
- The built-in page fetch tool could not resolve vendor hosts, but `curl` could. Research agents should fetch pages with `curl` (the helper in this run converts HTML to text).
- Web search has a shared budget. Agents should search to find a URL, then open the page, not research from snippets.

## 5. Freshness process

The space changes monthly: renames, GA dates, new MCP servers. Freshness is the product.

**Weekly, automatic (scheduled CI)**
- Link check on every URL. Broken links open an issue.
- Watch each vendor's release notes or changelog page. When the page hash changes, open an issue: "Snowflake release notes changed."

**On each change issue (agent plus human)**
- A Sonnet agent re-verifies that vendor with the verify brief and opens a PR with the diff.
- Muthu reviews and merges. Every merged change lands in the corrections log.

**Monthly**
- Re-verify the 10 most visited vendors in full.
- An Opus agent fact-checks 20 random cells and every claim marked high-risk that month.
- Publish "What changed".

**Quarterly**
- Re-verify every vendor. Flag cells older than 90 days as stale on the page.
- Review coverage: which vendors to add, which caps to split or merge.

**Model policy:** Haiku for link checks and format fixes. Sonnet for research and verification. Opus only for judgment: the fact-check, editorial choices and this plan.
