# Link check, 2026-10-24

Checked every URL in research/urls.txt (1040 URLs) with curl, following redirects, with one retry.

- 200: 988
- Not 200: 52 (35 on github.com, 17 elsewhere)
- 404 or other hard failures: 0

## github.com (403 to this environment, not broken)

The cloud session blocks github.com web pages. Each repo was confirmed with `git ls-remote`, and each file or folder link through raw.githubusercontent.com. All exist, except the `datadotworld` organization page, which cannot be checked this way.

- https://github.com/Canner/WrenAI
- https://github.com/ClickHouse/mcp-clickhouse
- https://github.com/SAP-docs/sap-datasphere
- https://github.com/apache/age
- https://github.com/apache/ossie
- https://github.com/apache/ossie-converters
- https://github.com/apache/ossie/blob/main/core-spec/spec.md
- https://github.com/awslabs/mcp
- https://github.com/awslabs/mcp/tree/main/src/amazon-neptune-mcp-server
- https://github.com/awslabs/mcp/tree/main/src/redshift-mcp-server
- https://github.com/boringdata/boring-semantic-layer
- https://github.com/crystaldba/postgres-mcp
- https://github.com/datadotworld
- https://github.com/googleapis/genai-toolbox
- https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md
- https://github.com/metabase/metabase/blob/master/docs/ai/metabot.md
- https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/glossary.md
- https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/library.md
- https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/measures.md
- https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/published-tables.md
- https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/segments.md
- https://github.com/metabase/metabase/blob/master/docs/databases/connecting.md
- https://github.com/modelcontextprotocol/servers-archived
- https://github.com/motherduckdb/mcp-server-motherduck
- https://github.com/neo4j-contrib/mcp-neo4j
- https://github.com/neo4j-labs/llm-graph-builder
- https://github.com/neo4j-labs/text2cypher
- https://github.com/neo4j-labs/text2cypher/tree/main/datasets
- https://github.com/neo4j/mcp
- https://github.com/neo4j/mcp/releases
- https://github.com/open-semantic-interchange/OSI
- https://github.com/pgvector/pgvector
- https://github.com/rilldata/rill
- https://github.com/stardog-union/stardog-cloud-mcp
- https://github.com/supabase/pg_graphql

## Other non-200 results

These sites refuse automated clients (bot protection or rate limits). None returned 404. Open them in a browser before launch.

| Code | URL |
|---|---|
| 403 | https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-iq-the-semantic-foundation-for-enterprise-ai/5172473 |
| 403 | https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-iq-the-semantic-layer-powering-trusted-ai-agents-at-enterprise-scale/5190739 |
| 403 | https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/graph-in-fabric-generally-available/5190748 |
| 403 | https://community.fabric.microsoft.com/blog/fiq_comm_blog/fabric-iq-is-ga-your-ontology-isnt-heres-what-that-actually-means-/5364087 |
| 429 | https://nowben.com/servicenow-acquires-data-world-just-months-after-logik-ai-and-moveworks-purchases/ |
| 403 | https://techzine.eu/blogs/data-management/117331/sap-expands-datasphere-with-knowledge-graph-and-compass |
| 403 | https://www.aap.com.au/aapreleases/globenewswire9668692/ |
| 403 | https://www.ibm.com/docs/en/SSEP7J_12.1.0/pdf/ug_cr_rptstd.pdf |
| 403 | https://www.sap.com/products/data-cloud.html |
| 403 | https://www.sap.com/products/data-cloud/datasphere.html |
| 403 | https://www.sec.gov/Archives/edgar/data/1373715/000137371525000309/now-20250930.htm |
| 403 | https://www.strategy.com/press/strategy-announces-general-availability-of-strategy-mosaic-the-ai-powered-universal-intelligence-layer_06-24-2025 |
| 403 | https://www.strategy.com/press/strategy-world-2026-declares-a-new-era-for-enterprise-ai-honors-customer-and-partner-innovation_02-25-2026 |
| 403 | https://www.tableau.com/2026-1-april-features |
| 403 | https://www.techzine.eu/news/data-management/144719/microsoft-and-google-to-contribute-to-the-apache-ossie-project/ |
| 403 | https://www.w3.org/TR/owl2-overview/ |
| 403 | https://www.w3.org/TR/rdf11-primer/ |
