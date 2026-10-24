# Handoff: semantic layer comparison page

## Goal

Muthu plans a public page that compares semantic context across data platforms: semantic layers, metric views, ontologies, knowledge graphs, context graphs, and metadata enrichment. The audience is engineers who build NL-to-SQL and AI analytics agents. The goal is traction.

Deliverables for this phase:
1. Deep research per vendor. Every claim has a source URL and a status (GA, Preview, Announced).
2. A plan (`PLAN.md`) that covers the traction strategy, the build stack, the data pipeline, and the freshness process.
3. Three different HTML designs behind one switcher (`site/index.html`), with an explanation of the tradeoffs and a recommendation.

Not in this phase: the production site.

## Rules from Muthu

- Use Sonnet or Haiku subagents for low-thinking work (research gathering, mechanical edits). Use Opus only for judgment.
- Never invent a feature, a date, or a URL. Muthu was burned before by fabricated claims.
- Write plain, short sentences. No em dashes on the page.
- Cover data platforms, the clouds, Dremio and Denodo, BI tools (Power BI, Tableau, BusinessObjects, and others), data catalogs, and metadata enrichment (AI-generated descriptions, bulk metadata APIs, auto-classify, value matching, query-history mining, lineage, evals).

## Layout

- `research/BRIEF.md` has the vendor JSON schema: 12 caps, levels 0 to 3.
- `research/BRIEF-ENRICH.md` has 7 enrichment caps, merged by vendor id from `enrich-*.json` files.
- `research/*.json` holds the research output, one file per vendor cluster.
- `tools/build-data.mjs` merges research into `site/data.js` and reports shape problems. Run it with `node tools/build-data.mjs`.
- `tools/verify.sh` is a headless browser check. It needs gstack browse and a server: `python3 -m http.server 8791 --bind 127.0.0.1 --directory site`.
- `tools/check-logos.sh` writes `tools/logos.json` (the Simple Icons slugs that resolve).
- `site/shared.js` has the helpers. A cap with `l: null` renders as "Not checked yet", which is a separate state from "None".
- The designs:
  - `site/a-guide.html` is A, "Field guide". An editorial long read, light theme, emerald accent.
  - `site/b-matrix.html` is B, "Can I semantic?". A caniuse-style heatmap, dark theme, blue accent. It has filters, a column sort, a drawer, and deep links.
  - `site/c-map.html` is C, "Stack map". You pick a platform, and it draws your path to NL-to-SQL. Light theme, orange accent.

## Research status

Done (in `research/`): snowflake, databricks (with palantir), google (bigquery, looker), aws-sap, microsoft (fabric, sqlserver), postgres-clickhouse-duckdb, virtualization (dremio, denodo, starburst, timbr), knowledge-graphs (neo4j, stardog, relationalai, dataworld), enrich-kg.

Missing. Re-run these with the same briefs. The output file names are listed in the brief sections of each prompt below.
- `oracle-teradata.json`: oracle, teradata.
- `semantic-layers.json`: dbt, cube, atscale, wrenai, malloy, honeydew. Add `worksWith`, plus benchmark notes on NL-to-SQL accuracy.
- `bi-enterprise.json`: businessobjects, cognos, strategy, qlik, oracleanalytics. Category `bi`. Add `worksWith` and `openToOtherTools`.
- `bi-modern.json`: tableau, thoughtspot, sigma, domo, metabase, superset. Category `bi`.
- `catalogs.json`: atlan, alation, collibra, datahub, openmetadata. Category `catalog`. Full schema plus the 7 enrichment caps.
- `enrich-snowflake-databricks-google.json`, `enrich-aws-sap-microsoft.json`, `enrich-oracle-teradata-postgres-clickhouse.json`, `enrich-virtualization-semantic.json`, `enrich-bi.json`.

## High-risk claims to fact-check

Each of these came from one research agent. Check each against a primary source before it goes on the page.
- OSI (Open Semantic Interchange) entered the Apache Incubator as "Apache Ossie" on 2026-07-10.
- Snowflake Intelligence was renamed Snowflake CoWork (2026-06-02).
- Databricks "Genie Ontology" is in Public Preview (announced 2026-06-16). Databricks One became Genie, then Genie One.
- SAP completed its acquisition of Dremio on 2026-07-06.
- Denodo 9.5 added `CREATE METRIC VIEW`.
- SQL/PGQ was reverted from PostgreSQL 19 (2026-09-07).
- BigQuery Graph went GA on 2026-08-31. Dataplex was renamed Knowledge Catalog.
- Amazon Quick Topics are now a multi-dataset semantic layer (GA 2026-08-06).
- Power BI Q&A retirement date (February 2027 or December 2026; the sources conflict).
- Neo4j Context Engine is in private preview.

## Verify results at handoff (tools/verify.sh)

Passing: B rows and cells, the B filter, the B drawer, B deep links, the B column sort, the C connectors, the C platform switch, the C hover links, the A chapters, and the A ladder.

Failing, to fix:
- A and C overflow horizontally at 390px width.
- A hero headline wraps to 3 lines at 1440px. The limit is 2.
- The script's `errs()` reports a false FAIL. It greps the "no console errors" message itself. Fix the filter.

## Remaining work

1. Run the missing research. Use Sonnet subagents, in parallel.
2. Rebuild data. Fix every "not checked yet" vendor.
3. Fact-check pass. One independent agent checks the claims above, plus a sample of 20 random cells.
4. Link check. Run every URL in `research/urls.txt` and list the non-200 results.
5. Fix the verify failures. Rerun until everything passes. Take desktop and mobile screenshots.
6. Write `PLAN.md`. Cover the traction strategy, the build stack, the data pipeline, freshness, and the recommended design.
7. Reply to Muthu. Cover the 3 designs, the tradeoffs, a recommendation, and the coverage ideas beyond this round.
