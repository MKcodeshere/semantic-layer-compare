# Fact-check report (2026-10-24)

Every URL below was opened with fetch.py (STATUS 200) unless noted. No repo file was edited.

Summary: Part A: 10 CONFIRMED, 5 CORRECTED, 0 UNCONFIRMED. Part B: 14 CONFIRMED, 5 CORRECTED, 1 UNCONFIRMED.

---

## Part A: high-risk claims

### A1. OSI entered the Apache Incubator as "Apache Ossie" on 2026-07-10
**Verdict: CORRECTED** (wrong date for incubator entry)
- https://incubator.apache.org/projects/ossie.html : "News: 2026-06-22 Project enters incubation." "Apache Ossie comes from Open Semantic Interchange."
- https://www.snowflake.com/en/blog/apache-ossie-open-semantic-interchange-incubator/ (dated "Jul 8, 2026"): "The project has been accepted into the Apache Incubator under a new name: Apache Ossie (Incubating)."
- https://ossie.apache.org/updates/ lists the same post on "July 10, 2026".
- https://raw.githubusercontent.com/apache/ossie/main/README.md : "Apache Ossie was formerly known as Open Semantic Interchange (OSI)."
- Where: research/snowflake.json line ~127 (`"On 2026-07-10 the project entered the Apache Incubator..."`). research/knowledge-graphs.json line ~1049 ("On 10 Jul 2026 the project was renamed") is acceptable but should use the same wording.
- Corrected wording: "Open Semantic Interchange entered the Apache Incubator on 2026-06-22 and was renamed Apache Ossie (incubating). The rename was announced on 2026-07-08 (Snowflake blog) and 2026-07-10 (ossie.apache.org)." Status: incubating podling.

### A2. Snowflake Intelligence renamed Snowflake CoWork (2026-06-02)
**Verdict: CONFIRMED**
- https://www.snowflake.com/en/news/press-releases/snowflake-cowork-powers-the-agentic-enterprise-as-the-personal-agent-for-knowledge-workers-to-work-smarter/ : "SNOWFLAKE SUMMIT 26 - June 2, 2026 ... The latest enhancements to Snowflake CoWork (formerly Snowflake Intelligence)".
- https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork : "Overview of Snowflake CoWork".
- Note: research/snowflake.json line ~147 says "per press coverage" and "I did not find a Snowflake-authored..." That is now out of date: the Snowflake press release above is the primary source. Replace the press-coverage source with it.

### A3. Databricks Genie Ontology Public Preview (announced 2026-06-16); Databricks One became Genie, then Genie One
**Verdict: CONFIRMED**
- https://docs.databricks.com/aws/en/genie/genie-ontology : "Genie Ontology. Preview. This feature is in Public Preview."
- https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents : dated "June 16, 2026", title "Introducing Genie One, Genie Agents, and Genie Ontology".
- https://docs.databricks.com/aws/en/ai-bi/release-notes/2026 : "Databricks One renamed to Genie. April 27, 2026. Databricks One, the simplified Databricks interface, has been renamed to Genie." and "Genie renamed to Genie One. June 9, 2026. Genie ... has been renamed to Genie One."
- https://docs.databricks.com/aws/en/genie-one/ : "Genie One was previously known as Databricks One."
- Optional precision: the rename dates are 2026-04-27 (to Genie) and 2026-06-09 (to Genie One).

### A4. SAP completed its acquisition of Dremio on 2026-07-06
**Verdict: CONFIRMED**
- https://news.sap.com/2026/07/sap-completes-dremio-acquisition/ : "July 6, 2026. WALLDORF and AUSTIN - SAP SE ... today announced it has completed the acquisition of Dremio".
- Note: research/aws-sap.json line ~926 still says "SAP also announced it will acquire Dremio (2026-05-04)". That is true but out of date. Add "completed 2026-07-06".

### A5. Denodo 9.5 added `CREATE METRIC VIEW`
**Verdict: CONFIRMED**
- https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_5 : "Denodo 9.5 introduces Metric Views ... New type of view called Metric View."
- https://community.denodo.com/docs/html/accessible/9.5/vdp/vql/defining_a_derived_view/defining_a_metric_view/defining_a_metric_view.html : "Metric views are created with the statement CREATE METRIC VIEW." The repo snippet in virtualization.json line ~131 matches this page's example.
- The same page under /9.4/ returns 404, which is consistent with "added in 9.5". The release month (2026-07) comes from trade coverage dated 22 to 24 July 2026. I did not open a Denodo-dated release page.

### A6. SQL/PGQ reverted from PostgreSQL 19 (2026-09-07)
**Verdict: CONFIRMED**
- https://www.postgresql.org/message-id/E1x3f62-00000003sxF-0zQO@gemulon.postgresql.org : "pgsql: Revert SQL Property Graph Queries (SQL/PGQ)", "Date: 2026-09-07 19:33:39", "Branch: REL_19_STABLE".
- https://www.postgresql.org/message-id/E1x3f62-00000003sxD-0vdk@gemulon.postgresql.org : same revert, "Branch: master".
- https://www.postgresql.org/docs/release/19.0/ : no PGQ, "property graph" or GRAPH_TABLE entries.

### A7. BigQuery Graph GA 2026-08-31; Dataplex renamed Knowledge Catalog
**Verdict: CONFIRMED**
- https://docs.cloud.google.com/bigquery/docs/release-notes : under "August 31, 2026": "BigQuery Graph is generally available (GA)."
- https://docs.cloud.google.com/knowledge-catalog/docs/release-notes : "As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged."
- Also note the 2026-08-27 entry: core graph processing needs an Enterprise or Enterprise Plus reservation.

### A8. Amazon Quick Topics are now a multi-dataset semantic layer (GA 2026-08-06)
**Verdict: CONFIRMED**
- https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick/ : "Posted on: Aug 6, 2026 ... Multi-dataset topics are now generally available in all AWS Regions where Amazon Quick is available." and "support row-level and column-level security (RLS/CLS)".
- https://aws.amazon.com/blogs/machine-learning/build-a-unified-semantic-layer-across-datasets-with-multi-dataset-topics-in-amazon-quick/ : "With multi-dataset Topics (public preview), you can now add up to 12 datasets". The 12-dataset limit is stated for preview only; the GA post gives no limit.

### A9. Power BI Q&A retirement date
**Verdict: CORRECTED.** The authoritative date is February 2027.
- https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-intro and https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-tooling-intro (both updated 2026-06-02): "Q&A experiences are going away in February 2027."
- Microsoft's "Deprecating Power BI Q&A" link (https://go.microsoft.com/fwlink/?LinkId=2379220) redirects to a Fabric community post with the slug `power-bi-qa-retirement-reminder-february-2027-timeline-update`. The page itself returned 403 (Cloudflare), but the slug shows a timeline update to February 2027.
- The December 2026 date comes from https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/semantic-model-best-practices.md (ms.date 01/21/2026): "Since Q&A retires in December 2026". That page predates the timeline update and is stale.
- Where: research/enrich-aws-sap-microsoft.json, microsoft (Power BI) `sampleValues.n` ("...which retires in December 2026"). research/microsoft.json gaps line ~205 and notes line ~495.
- Corrected wording: "Q&A experiences retire in February 2027 (Power BI Learn, updated 2026-06-02). One Fabric data agent page, dated January 2026, still says December 2026."

### A10. Neo4j Context Engine is in private preview
**Verdict: CONFIRMED**
- https://neo4j.com/blog/news/neo4j-context-engine/ (October 19, 2026): "Neo4j Context Engine is currently in private preview. Contact us here to become a design partner."

### A11. Strategy Mosaic imports and exports Apache Ossie YAML (Preview June 2026, out of the box July 2026)
**Verdict: CONFIRMED**
- https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_osi_import.htm : "Starting in Strategy One (June 2026), you can import your Apache Ossie YAML files ... You can also export"; "If you are using Strategy One (June 2026) ... is a preview feature"; "Starting in Strategy (July 2026), importing and exporting data using an Apache Ossie YAML file is available out-of-the-box."
- Possible addition: October 2026 converts unrecognized functions to pass-through expressions.

### A12. Cube shipped Apache Ossie import and export (2026-10-16), Preview
**Verdict: CONFIRMED**
- https://cube.dev/changelog/2026-10-16-changelog-apache-ossie-integration : "October 16, 2026. Apache Ossie Integration ... Both directions work through the Cube CLI and Platform API."
- https://docs.cube.dev/docs/integrations/apache-ossie.md : "Apache Ossie conversion is currently in preview. Reach out to the Cube support team to activate it."

### A13. Tableau Knowledge Graph REST API (Tableau Cloud+, September 2026) gives graph and vector capabilities
**Verdict: CORRECTED.** The API's existence, date and license are confirmed. The graph level is overstated.
- https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_knowledge_graph.htm : "Available in Tableau Cloud September 2026 and later. Not available for Tableau Server." "License: Tableau Cloud+". The methods are "Get the lineage of a node", "Get the downstream impact of a node", "Get a node by ID", and "Search graph nodes using natural-language semantic search."
- `vector` (l 3): supported. BRIEF defines vector as "native vector or semantic search on data or metadata", and the semantic node search fits that.
- `graph` (l 3): not supported at level 3. BRIEF defines graph as "Graph query capability: property graph, SQL/PGQ, GQL, Cypher, RDF/SPARQL". This API looks up nodes, lineage and impact over Tableau's own content-metadata graph. It has no graph query language and no graph over customer data. The repo note itself says "No Cypher, GQL or SPARQL".
- Where: research/bi-modern.json, tableau `caps.graph` (line ~106).
- Correction: set `graph.l` to 0 with the note "No graph query language. The Tableau Knowledge Graph REST API (Cloud+, Sept 2026) returns nodes, lineage and impact over Tableau content metadata only." If the owner wants credit for the metadata graph, show it under lineage, not graph.

### A14. dbt benchmark: Semantic Layer 72.7% on the raw schema; 98.2% / 100% on modeled questions
**Verdict: CORRECTED.** The numbers are right, but the repo text pairs them wrongly.
- https://docs.getdbt.com/blog/semantic-layer-vs-text-to-sql-2026 (April 7, 2026): "11 questions, each run 20 times". Original schema, all questions: Text-to-SQL 64.5% for both models, Semantic Layer 72.7% for both. After 3 added models: "claude-sonnet-4-6 Text-to-SQL 90.0%, claude-sonnet-4-6 Semantic Layer 98.2%, gpt-5.3-codex Text-to-SQL 84.1%, gpt-5.3-codex Semantic Layer 100.0%".
- Error: research/semantic-layers.json notes, topic "benchmark: dbt" (line ~1219) says "after 3 added models, Sonnet 4.6 went from 90.0% to 98.2% and GPT-5.3 Codex from 84.1% to 100.0%". In the source, 90.0% and 84.1% are the text-to-SQL scores after modeling, not "before" values for the Semantic Layer. Also, 98.2% and 100% cover all 11 questions after 3 dbt models were added, not just "modeled questions" in the original setup.
- Corrected wording: "On the original schema (all 11 questions), text-to-SQL scored 64.5% and the Semantic Layer 72.7% with both Sonnet 4.6 and GPT-5.3 Codex. After 3 dbt models were added, the Semantic Layer scored 98.2% (Sonnet 4.6) and 100.0% (GPT-5.3 Codex), and text-to-SQL scored 90.0% and 84.1%." The Bodo sentence was not checked.

### A15. Cognos lineage cites a State of Maine mirror
**Verdict: CORRECTED.** An IBM primary source exists.
- https://www.ibm.com/docs/en/SSEP7J_12.1.0/pdf/ug_cr_rptstd.pdf ("IBM Cognos Analytics - Reporting Version 12.1.x User Guide", section "View lineage information for a data item", p. 48 to 49): "Lineage information traces the metadata of an item back through the package and the data sources used by the package." "The IBM Cognos Analytics lineage tool includes two views: the business view and the technical view." "lineage is not supported in reports that are not linked to packages." "your administrator must configure lineage in IBM Cognos Administration."
- The HTML topic https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=report-view-lineage-information-data-item returned 403 to the fetcher, so use the PDF.
- Where: research/enrich-bi-enterprise.json, cognos `caps.lineage.u` and sources at lines ~99, ~116 and ~120 (gateway.maine.gov).
- Correction: replace the Maine URLs with the IBM PDF. Level 3 stays. Replace "Data module coverage not confirmed." with "Not supported in reports that are not linked to packages; an administrator must configure it."

---

## Part B: 20 sampled cells

### B1. wrenai verifiedQueries l3
**CONFIRMED.** https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md : "Confirmed natural-language-to-SQL pairs, one markdown file per pair under knowledge/sql/" and "`wren memory store` writes these files".

### B2. redshift synonyms l3
**CONFIRMED.** https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html : "A custom context provides domain knowledge ...", with TableAnnotations, ColumnAnnotations, CustomDocuments and AppendToPrompt. The Bedrock KB and Quick synonyms parts of the note are not on this page. They are minor, but add a source or trim them.

### B3. denodo sampleValues l3
**CONFIRMED** (note). The Denodo AI SDK User Manual (u) says: "Cache is needed to retrieve data samples of each view. You can disable this ... by setting examples_per_table = 0". Level caveat: the note says the SDK is a separate download. Under the scale ("1 = separate product"), the owner may want l 1 or 2. That is a judgment call, not a factual error.

### B4. dremio governance l3
**CONFIRMED.** u: "Row-access and column-masking policies may be applied to tables, views, and columns". The agent part is on https://docs.dremio.com/dremio-cloud/explore-analyze/ai-agent/ : "The AI agent only operates on data and entities that you have the privileges to access or modify." Lineage is on https://docs.dremio.com/dremio-cloud/manage-govern/lineage/ (dataset-level). Add those two URLs to sources.

### B5. qlik verifiedQueries l0
**CONFIRMED.** u: "Vocabulary: Add synonyms, custom analyses, and example questions to expand user options when using natural language questions with Insight Advisor." The page has no verified question-to-SQL store. A search for a Qlik Answers verified-question feature found nothing.

### B6. honeydew relationships l3
**CONFIRMED.** https://honeydew.ai/docs/tpch-example.md : "relations ... tell Honeydew how entities JOIN, in which direction"; "rel_type: many-to-one"; "Once the relations are declared, Honeydew handles the JOINs".

### B7. postgres nl2sql l1
**CONFIRMED.** u (April 10, 2026): "QueryData launches in preview today ... across AlloyDB, Cloud SQL (for MySQL and PostgreSQL), and Spanner". https://docs.cloud.google.com/alloydb/docs/ai/natural-language-landing : "alloydb_ai_nl AI extension. Note: This experimental launch is a Pre-GA offering." The Supabase claim was not checked.

### B8. metabase mcp l3
**CONFIRMED.** https://www.metabase.com/releases/metabase-60 ("Apr 16, 2026"): "The official Metabase MCP server". https://www.metabase.com/releases/metabase-64 ("Oct 15, 2026"): "MCP gets a major upgrade". The u is a github.com/blob URL, which is blocked here. Its raw version, https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/mcp.md, says "Once an admin has turned on the MCP server". Consider pointing u to a metabase.com page.

### B9. starburst verifiedQueries l0
**CONFIRMED.** u lists "Multiple sample queries" on data products. https://docs.starburst.io/latest/starburst-ai/aida-ai.html : "Suggested prompts ... are inherited from the Description field provided in any usage examples". So AIDA uses only the description as a suggested prompt, not the SQL as few-shot context. Also remove the process wording "the docs reviewed".

### B10. oracleanalytics openStandard l0
**CONFIRMED.** u: "Transparently generates Semantic Model Markup Language (SMML), which uses Javascript Object Notation (JSON)"; "Integrates with any Git-based platform". The Ossie converters README (https://raw.githubusercontent.com/apache/ossie-converters/main/README.md) has no Oracle converter, and a search of Oracle docs found no Ossie or OSI support.

### B11. businessobjects openStandard l0 (no u)
**CORRECTED** (note wording and missing URL). No Ossie or OSI support was found: there is no BO converter in ossie-converters, and searches found nothing. The note "Universes are .unx files that only SAP tools write" is false. https://help.qlik.com/talend/en-US/talend-data-catalog/Cloud/Content/Bridges/MIRBoInformationDesignToolUnxExport.htm : "This export bridge relies on the SAP BusinessObjects Semantic Layer Java SDK in order to export metadata to a UNX Universe."
- File: research/bi-enterprise.json, businessobjects `caps.openStandard`.
- Corrected note (l 0): "No OSI or Ossie export. Universes (.unx) are a proprietary format; third-party tools write them only through SAP's Semantic Layer Java SDK." u: the ossie-converters README or the Talend bridge page.

### B12. wrenai lineage l0 (no u)
**CONFIRMED.** https://raw.githubusercontent.com/Canner/WrenAI/main/README.md and .../docs/core/reference/cli.md contain no "lineage". https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/dbt-integration.md : the import covers "model and column descriptions, refs, source definitions, test metadata", and "`relationships` tests -> relationships.yml". Set u to the dbt-integration page.

### B13. collibra metrics l3
**CONFIRMED** (with caveat). u lists MCP tools "get_measure_data | Trace a measure back to its underlying physical columns and tables" and "get_table_semantics | ... connected measures". The listing is the "Local Version" MCP server. The page does not state a GA or support status, and the note correctly says measures are catalog objects, not query definitions.

### B14. timbr bulkMetadata l3
**CORRECTED** (one clause). u supports `DESCRIPTION '{concept_description}'`, `ALTER CONCEPT ... ADD/UPDATE/DROP TAG` and "Add / Update relationship description". I found no evidence of a "UI bulk description editor". The closest primary source is https://timbr.ai/news/announcing-active-llm-management-and-accelerated-ontology-generation/ (March 9, 2026): "improved bulk description generation".
- File: research/enrich-virtualization-semantic.json (timbr `caps.bulkMetadata.n`).
- Corrected note: "SQL DDL sets concept descriptions, relationship descriptions and tags. Property-level description DDL not found. Timbr announced bulk AI description generation in March 2026." Level 3 stays.

### B15. alation verifiedQueries l3
**CONFIRMED.** u: "Verified queries | Question and SQL pairs are preserved for sync-back and for use with Cortex Analyst. These are added as evaluations on the data product." The same page links "Export Data Products to the Source System ... as a semantic view or metric view, or ... as a vendor-neutral OSI spec."

### B16. oracle governance l3
**CONFIRMED.** https://www.oracle.com/autonomous-database/mcp-server/ : "Honors core database security mechanisms, including RBAC, auditing, VPD, and redaction, when accessing database features through MCP endpoints".

### B17. clickhouse metrics l1
**CONFIRMED.** u: "Rill metrics views are analogous to the semantic layer and metrics layer concepts". https://docs.rilldata.com/developers/build/connectors/olap/clickhouse shows the ClickHouse connector. https://raw.githubusercontent.com/rilldata/rill/main/LICENSE.md : "Apache License Version 2.0". A search found no native ClickHouse metric object; ClickHouse's own blog shows a third-party (MooseStack) metrics layer.

### B18. wrenai sampleValues l1
**CORRECTED** (note overstates). The dbt guide (u) confirms "`accepted_values` tests -> Model and column metadata ... useful filter values". But the Wren README contradicts itself. Under "Why agent builders pick WrenAI" it lists "value profiling" as a current guardrail, and under "What's next" it lists "End-to-end correctness primitives: value profiling". So "no sampling today" cannot be asserted.
- File: research/enrich-virtualization-semantic.json, wrenai `caps.sampleValues.n`.
- Corrected note (l 1): "dbt import carries accepted_values tests as filter values. The README lists value profiling both as a feature and under What's next; the CLI reference documents no sampling command." Add https://raw.githubusercontent.com/Canner/WrenAI/main/README.md to sources.

### B19. tableau sampleValues l3
**CONFIRMED.** https://help.tableau.com/current/tableau/en-us/tableau_gai_data.htm : under "Tableau Agent-assisted viz authoring": "A sampling of data (1000 unique values or less) from the data source used with Tableau Agent."

### B20. tableau nl2sql l3
**UNCONFIRMED** for the cited date. The level is supported by another page.
- The u https://www.tableau.com/2026-1-april-features returned 403 (Cloudflare) every time; so did /en-gb/ and /new-features. Only a search snippet says "Semantic model scope and page filters in Concierge are generally available with Tableau Next".
- https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (200): "Concierge: Analytics Q&A lets you ask questions to explore your data in the Agentforce panel". On that page, Q&A Calibration is marked "(Beta)" and Concierge is not.
- Field: research/bi-modern.json, tableau `caps.nl2sql`. The artifacts "Semantic Model Scope and Page Filters in Concierge" (GA, 2026-04) and "Tableau Next MCP server" (GA, 2026-04) also rely only on the 403 page.
- Recommendation: switch u to the help.tableau.com setup page and keep l 3 with the note "Concierge answers natural-language questions over Tableau Semantics models in Tableau Next." Drop "GA in April 2026 notes" until someone opens the April page in a browser.

---

## Other inconsistencies found in passing
- research/virtualization.json `dremio.caps.governance` says "Lineage is available", while research/enrich-virtualization-semantic.json `dremio.caps.lineage` is l 0 because lineage is dataset-level only. Both are true, but the page may read as a contradiction. Consider "dataset-level lineage" in the governance note.
- research/aws-sap.json still describes the Dremio deal as pending (see A4).
