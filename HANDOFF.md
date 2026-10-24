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

## Round 2 status (2026-10-24, cloud session)

All 7 items from the old "Remaining work" list are done. Branch: `claude/research-round-2`.

1. Research: the 10 missing files were written, then re-verified against opened vendor pages. `enrich-bi.json` was split into `enrich-bi-enterprise.json` and `enrich-bi-modern.json`.
2. Data: 44 vendors, 836 cells. 15 cells are still "Not checked yet": 12 for Cognos (ibm.com refuses automated fetches), 2 for Strategy, 1 for Fabric graph (no Learn page states its release status).
3. Fact-check: `research/FACTCHECK-2026-10-24.md`. 35 items: 24 confirmed, 10 corrected, 1 unconfirmed date. All corrections applied.
4. Link check: `research/LINKCHECK-2026-10-24.md`. 1,040 URLs, 988 return 200, no 404s. 35 github.com links are blocked in the cloud session but confirmed with git. 17 sites refuse bots; open them in a browser.
5. Verify: all 27 checks pass with `node tools/verify.mjs shots` (Playwright port of verify.sh). Screenshots are in `shots/`. verify.sh also has the console filter fix.
6. `PLAN.md` written.

Tooling notes for cloud sessions:
- Set the environment's Network access to Full, or vendor docs are blocked.
- WebFetch cannot resolve vendor hosts here, but curl can. Agents should fetch pages with curl (a small HTML-to-text helper worked well).
- gstack browse is not installed in the cloud; use `tools/verify.mjs`.

## Remaining work

1. Open the 17 bot-blocked URLs in `research/LINKCHECK-2026-10-24.md` in a browser. Fix any that are dead.
2. Fill the 15 "Not checked yet" cells by hand from a browser (IBM Cognos docs, Strategy docs, Fabric graph status).
3. Confirm the Tableau April 2026 feature page (tableau.com/2026-1-april-features), which refuses bots. Three Tableau artifacts are marked Unverified until then.
4. Pick the design (PLAN.md recommends B with A's ladder and C's path) and start the production build.
