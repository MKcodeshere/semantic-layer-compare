# Semantic Context Index

A capability matrix for 65 data products. It shows the semantic context that each product supplies to AI agents, and the natural language query (NLQ) features of each product.

**Live site:** https://mkcodeshere.github.io/semantic-layer-compare/

## What the index covers

- 65 products: cloud data warehouses, lakehouses, operational databases, real-time OLAP, federation engines, standalone semantic layers, BI tools, data catalogs, and knowledge graphs.
- 19 capabilities in 5 groups: semantic model, metadata enrichment, knowledge and graph, AI access, and trust.
- NLQ features: release status, output type (SQL, KQL, MQL, DAX, or answer only), and programmatic access.

Each cell has a level, a short finding, and a link to the vendor source.

| Level | Meaning |
|---|---|
| Native, GA | The vendor supplies the feature, and the documentation shows no preview label. |
| Native, preview | The documentation shows a preview or beta label. |
| Partner or custom build | The feature needs a different product or custom code. |
| Not available | The documentation does not include the feature. |
| Not verified | No primary source was found. |

## Method

Research agents read vendor documentation, release notes, and official engineering blogs. An independent agent verified the high-risk claims and a random sample of cells against primary sources. See `research/FACTCHECK-2026-10-24.md` and `research/LINKCHECK-2026-10-24.md`.

## Report an error

Open an issue. Name the product and the capability, and attach the primary source (vendor documentation or release notes). Corrections with a source are applied in the next update.

## Repository layout

- `research/*.json`: research data, one file per product group. `BRIEF*.md` define the schema and the writing standard.
- `tools/build-data.mjs`: merges the research into `site/data.js` and reports shape problems.
- `tools/verify.mjs`: headless browser checks for every view on desktop and mobile.
- `tools/make-og.mjs`: renders the social preview image `site/og.png`.
- `site/index.html`: the published page. `site/prototypes.html` holds the earlier design prototypes.

## Build

```sh
node tools/build-data.mjs
node tools/make-og.mjs
node tools/verify.mjs shots
python3 -m http.server 8791 --directory site
```
