window.SL = {
 "built": "2026-10-24",
 "capGroups": [
  {
   "id": "model",
   "label": "Semantic model"
  },
  {
   "id": "enrich",
   "label": "Metadata enrichment"
  },
  {
   "id": "graph",
   "label": "Knowledge and graph"
  },
  {
   "id": "access",
   "label": "AI access"
  },
  {
   "id": "trust",
   "label": "Trust"
  }
 ],
 "caps": [
  {
   "key": "metrics",
   "group": "model",
   "label": "Metrics",
   "long": "Governed metric and measure definitions stored as code or objects"
  },
  {
   "key": "dimensions",
   "group": "model",
   "label": "Dimensions",
   "short": "Dims",
   "long": "Declared dimensions, hierarchies, time grains"
  },
  {
   "key": "relationships",
   "group": "model",
   "label": "Joins",
   "long": "Declared join paths or entity relationships"
  },
  {
   "key": "synonyms",
   "group": "model",
   "label": "Synonyms",
   "long": "Business descriptions, synonyms, AI instructions"
  },
  {
   "key": "verifiedQueries",
   "group": "model",
   "label": "Verified SQL",
   "long": "Verified question-to-SQL pairs or trusted examples"
  },
  {
   "key": "aiDescriptions",
   "group": "enrich",
   "label": "AI descriptions",
   "short": "AI desc",
   "long": "Generates table and column descriptions or business names with AI"
  },
  {
   "key": "bulkMetadata",
   "group": "enrich",
   "label": "Bulk metadata",
   "long": "Writes descriptions, tags, business names in bulk by SQL, API, SDK or import"
  },
  {
   "key": "autoClassify",
   "group": "enrich",
   "label": "Auto classify",
   "long": "Tags PII, semantic types and sensitivity automatically"
  },
  {
   "key": "sampleValues",
   "group": "enrich",
   "label": "Value matching",
   "long": "Samples values or matches literals, so NY maps to New York"
  },
  {
   "key": "queryHistory",
   "group": "enrich",
   "label": "Query mining",
   "long": "Mines query history to suggest joins, metrics or verified queries"
  },
  {
   "key": "lineage",
   "group": "enrich",
   "label": "Lineage",
   "long": "Native column-level lineage"
  },
  {
   "key": "ontology",
   "group": "graph",
   "label": "Ontology",
   "long": "Business entities above tables: objects, links, actions"
  },
  {
   "key": "graph",
   "group": "graph",
   "label": "Graph query",
   "long": "Property graph, SQL/PGQ, GQL, Cypher, SPARQL"
  },
  {
   "key": "vector",
   "group": "graph",
   "label": "Vector",
   "long": "Native vector or semantic search"
  },
  {
   "key": "nl2sql",
   "group": "access",
   "label": "NL to SQL",
   "long": "First-party natural-language-to-SQL or chat analytics"
  },
  {
   "key": "mcp",
   "group": "access",
   "label": "MCP",
   "long": "First-party MCP server for agents"
  },
  {
   "key": "evals",
   "group": "access",
   "label": "Evals",
   "long": "Tests NL-to-SQL accuracy, or turns feedback into verified examples"
  },
  {
   "key": "governance",
   "group": "trust",
   "label": "Governance",
   "short": "Govern",
   "long": "Semantic objects inherit security, lineage, certification"
  },
  {
   "key": "openStandard",
   "group": "trust",
   "label": "Open spec",
   "long": "Portable spec: OSI, open-source format, import or export"
  }
 ],
 "categories": [
  {
   "id": "cloud-dw",
   "label": "Cloud data warehouses",
   "group": "data"
  },
  {
   "id": "lakehouse",
   "label": "Lakehouse platforms",
   "group": "data"
  },
  {
   "id": "mpp",
   "label": "MPP warehouses",
   "group": "data"
  },
  {
   "id": "oltp",
   "label": "Operational databases",
   "group": "data"
  },
  {
   "id": "realtime-olap",
   "label": "Real-time OLAP",
   "group": "data"
  },
  {
   "id": "embedded",
   "label": "Embedded analytics engines",
   "group": "data"
  },
  {
   "id": "virtualization",
   "label": "Federation and virtualization",
   "group": "data"
  },
  {
   "id": "semantic-layer",
   "label": "Standalone semantic layers",
   "group": "semantic"
  },
  {
   "id": "bi",
   "label": "BI and analytics tools",
   "group": "semantic"
  },
  {
   "id": "catalog",
   "label": "Catalogs and context platforms",
   "group": "semantic"
  },
  {
   "id": "knowledge-graph",
   "label": "Knowledge graphs and ontologies",
   "group": "graph"
  }
 ],
 "vendors": [
  {
   "id": "redshift",
   "name": "AWS (Redshift + ecosystem)",
   "category": "cloud-dw",
   "tagline": "AWS cloud data warehouse plus separate AI, BI, catalog and graph services around it.",
   "verdict": "partial",
   "verdictNote": "Redshift has no semantic layer object; context sits in separate AWS features (Q custom context, Bedrock Knowledge Bases, Quick Topics, SageMaker Catalog), each with its own config.",
   "artifacts": [
    {
     "name": "Amazon Q generative SQL (Redshift Query Editor v2)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2024-09",
     "format": "GUI chat in notebooks, admin must enable",
     "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    {
     "name": "Custom context for Amazon Q generative SQL",
     "kind": "annotations",
     "status": "GA",
     "since": "2024-09",
     "format": "JSON file uploaded by admin",
     "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    {
     "name": "Amazon Quick Sight Topics (multi-dataset)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-08",
     "format": "GUI, API (CreateTopic), JSON relationships file",
     "url": "https://docs.aws.amazon.com/quick/latest/userguide/topics.html"
    },
    {
     "name": "Amazon Bedrock Knowledge Bases structured data retrieval (NL-to-SQL on Redshift)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2024-12",
     "format": "Console and API (JSON config)",
     "url": "https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-bedrock-knowledge-bases-structured-data-retrieval"
    },
    {
     "name": "Bedrock query generation context (descriptions, include/exclude, curated queries)",
     "kind": "annotations",
     "status": "GA",
     "since": "2024-12",
     "format": "JSON",
     "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-structured-create.html"
    },
    {
     "name": "SageMaker Catalog business glossary and metadata forms",
     "kind": "glossary",
     "status": "GA",
     "since": "",
     "format": "GUI, CLI, SDK",
     "url": "https://aws.amazon.com/blogs/aws/new-business-metadata-features-in-amazon-sagemaker-catalog-to-improve-discoverability-across-organizations"
    },
    {
     "name": "SageMaker Catalog AI recommendations for names, descriptions and glossary terms",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "GUI, uses Bedrock models",
     "url": "https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/autodoc.html"
    },
    {
     "name": "Amazon SageMaker Data Agent (Unified Studio Query Editor)",
     "kind": "agent",
     "status": "Unverified",
     "since": "2026-03",
     "format": "GUI; announcement gives no GA or preview label",
     "url": "https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sagemaker-data-agent-query-editor"
    },
    {
     "name": "Amazon Neptune (Database)",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "openCypher, Gremlin, SPARQL",
     "url": "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"
    },
    {
     "name": "Amazon Neptune Analytics",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "openCypher, graph algorithms",
     "url": "https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html"
    },
    {
     "name": "Neptune Analytics vector search",
     "kind": "vector",
     "status": "GA",
     "since": "",
     "format": "Vector index inside graph queries",
     "url": "https://docs.aws.amazon.com/neptune-analytics/latest/userguide/vector-similarity.html"
    },
    {
     "name": "Bedrock Knowledge Bases GraphRAG with Neptune Analytics (documents, not Redshift tables)",
     "kind": "knowledge-graph",
     "status": "GA",
     "since": "",
     "format": "Console and API",
     "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-graphs.html"
    },
    {
     "name": "Amazon Redshift MCP Server (AWS Labs, open source)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "uvx package, 7 tools, read-only by default",
     "url": "https://github.com/awslabs/mcp/tree/main/src/redshift-mcp-server"
    },
    {
     "name": "Amazon Neptune MCP Server (AWS Labs, open source)",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-05",
     "format": "uvx package",
     "url": "https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-neptune-mcp-server/"
    },
    {
     "name": "AWS MCP Server (managed) in Agent Toolkit for AWS",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-05",
     "format": "Remote managed MCP server",
     "url": "https://aws.amazon.com/about-aws/whats-new/2026/05/agent-toolkit/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "No metric object in Redshift. Quick Sight calculated fields and Topic instructions hold metric logic, usable only inside Quick.",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/legacy-topics.html"
    },
    "dimensions": {
     "l": 1,
     "n": "Redshift has none. Quick Sight dataset enrichment sets semantic types and descriptions. Topic docs show no hierarchy or time-grain object.",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/topics.html"
    },
    "relationships": {
     "l": 1,
     "n": "Quick Topics declare join keys between up to 12 datasets (GA Aug 2026). Redshift itself has no semantic join object.",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick"
    },
    "synonyms": {
     "l": 3,
     "n": "Q context annotations, CustomDocuments, AppendToPrompt; Bedrock KB table and column descriptions. Synonyms only in Quick datasets.",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "CuratedQueries in Q custom context and curatedQueries in Bedrock KB generation context. Both are question-to-SQL pairs.",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    "nl2sql": {
     "l": 3,
     "n": "Amazon Q generative SQL in Query Editor v2 (GA Sep 2024) and Bedrock Knowledge Bases structured retrieval (GA Dec 2024).",
     "u": "https://aws.amazon.com/es/about-aws/whats-new/2024/09/amazon-q-generative-sql-amazon-redshift/"
    },
    "ontology": {
     "l": 1,
     "n": "No ontology object. SageMaker Catalog holds glossary terms and metadata forms. Teams build graphs in Neptune or add Stardog.",
     "u": "https://aws.amazon.com/blogs/aws/new-business-metadata-features-in-amazon-sagemaker-catalog-to-improve-discoverability-across-organizations"
    },
    "graph": {
     "l": 1,
     "n": "Not in Redshift. Neptune (openCypher, Gremlin, SPARQL) and Neptune Analytics (openCypher) are separate GA services.",
     "u": "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"
    },
    "vector": {
     "l": 1,
     "n": "Redshift's data types page lists no vector type. Neptune Analytics offers vector search inside graph traversals.",
     "u": "https://docs.aws.amazon.com/redshift/latest/dg/c_Supported_data_types.html"
    },
    "mcp": {
     "l": 3,
     "n": "AWS Labs Redshift MCP server: schema discovery and SQL, read-only by default. Exposes structure only, no business definitions.",
     "u": "https://github.com/awslabs/mcp/tree/main/src/redshift-mcp-server"
    },
    "governance": {
     "l": 3,
     "n": "Q generative SQL is limited to each user's data permissions. Quick Topics reuse dataset RLS and CLS. Catalog adds lineage.",
     "u": "https://aws.amazon.com/es/about-aws/whats-new/2024/09/amazon-q-generative-sql-amazon-redshift/"
    },
    "openStandard": {
     "l": 0,
     "n": "No OSI or Apache Ossie support found. Custom context JSON and the Topic API are AWS-specific.",
     "u": "https://github.com/apache/ossie"
    },
    "aiDescriptions": {
     "l": 1,
     "n": "SageMaker Catalog (separate product) drafts descriptions, business names and glossary terms with Bedrock for Glue and Redshift assets. Default quota 10K description runs a month.",
     "u": "https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/autodoc.html"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT ON sets table, column and view comments in SQL. Not supported on external tables or late binding view columns. Q generative SQL also takes admin-uploaded JSON custom context.",
     "u": "https://docs.aws.amazon.com/redshift/latest/dg/r_COMMENT.html"
    },
    "autoClassify": {
     "l": 1,
     "n": "No Redshift-native column classifier found. SageMaker Catalog (separate product) suggests glossary terms, including PII and PHI, from column names and schema at publish time.",
     "u": "https://aws.amazon.com/blogs/big-data/automating-data-classification-in-amazon-sagemaker-catalog-using-an-ai-agent/"
    },
    "sampleValues": {
     "l": 1,
     "n": "Only in Amazon Quick Topics: authors set CellValueSynonyms by hand. No automatic value sampling found for Redshift.",
     "u": "https://raw.githubusercontent.com/boto/botocore/develop/botocore/data/quicksight/2018-04-01/service-2.json"
    },
    "queryHistory": {
     "l": 3,
     "n": "Q generative SQL in Query Editor v2 can use other users' query history to improve SQL. Admin grants SYS:MONITOR. Not documented as suggesting joins or metrics.",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    "lineage": {
     "l": 3,
     "n": "SageMaker Catalog captures column-level lineage from Redshift, Glue and Spark (GA Dec 2024, OpenLineage compatible). Redshift is named as a source.",
     "u": "https://aws.amazon.com/about-aws/whats-new/2024/12/data-lineage-amazon-datazone-next-generation-sagemaker"
    },
    "evals": {
     "l": 1,
     "n": "Query Editor v2 has helpful and not helpful feedback with error categories. No eval set tooling. Curated question and SQL pairs go in custom context by hand.",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html"
    }
   },
   "offers": [
    "Amazon Q generative SQL custom context: JSON with table and column annotations, curated question-SQL pairs, extra documents and prompt guardrails.",
    "Bedrock Knowledge Bases turns questions into SQL on Redshift, with GenerateQuery API, descriptions, include/exclude lists and curated queries.",
    "Amazon Quick Topics (GA Aug 2026): up to 12 datasets, join keys, custom instructions, and generated SQL shown in chat.",
    "SageMaker Catalog: business glossary, metadata forms, and Bedrock-generated names and descriptions for assets and columns.",
    "Open-source Redshift MCP server lists schemas and runs SQL read-only; a Neptune MCP server covers graph queries."
   ],
   "gaps": [
    "No semantic layer object in Redshift: metrics, dimensions and joins are not declared in the warehouse.",
    "Semantic context is split across four products with four config formats; nothing is shared between them.",
    "Q generative SQL is English-only, notebook-bound, and cannot reference external schemas.",
    "Bedrock generation context is non-deterministic and only meant to improve accuracy; AWS says verify generated SQL.",
    "No vector type in Redshift and no OSI or Ossie support found."
   ],
   "fillWith": [
    "AtScale",
    "Denodo",
    "Strategy Mosaic",
    "Stardog",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Start with Bedrock Knowledge Bases structured retrieval or Q generative SQL custom context, and put table and column descriptions and curated question-SQL pairs in the config. Test with the GenerateQuery API and check every generated query. For governed metrics, AWS blog posts show partner semantic layers (AtScale, Denodo, Strategy Mosaic) between the agent and Redshift.",
   "snippet": {
    "lang": "json",
    "title": "Amazon Q generative SQL custom context for a Redshift cluster (trimmed from the official example)",
    "code": "{\n  \"resources\": [{\n    \"ResourceId\": \"mycluster\",\n    \"ResourceType\": \"REDSHIFT_WAREHOUSE\",\n    \"TablesToInclude\": [\"database.schema.table1\"],\n    \"TableAnnotations\": { \"database.schema.table1\": \"table1 refers to Q3 sales\" },\n    \"ColumnAnnotations\": { \"database.schema.table1\": { \"col1\": \"col1 refers to Q3 sale total\" } },\n    \"CuratedQueries\": [\n      { \"Question\": \"what is the sales data for Q3\", \"Answer\": \"SELECT * FROM table1\" }\n    ],\n    \"CustomDocuments\": [\"in manufacturing division total sales is price * revenue\"],\n    \"AppendToPrompt\": \"Apply these guardrails: Queries should never return the secretId field of a user.\"\n  }]\n}",
    "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
   },
   "sources": [
    {
     "t": "Interacting with Amazon Q generative SQL (Redshift docs)",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    {
     "t": "Amazon Q generative SQL GA announcement, 2024-09-16",
     "u": "https://aws.amazon.com/es/about-aws/whats-new/2024/09/amazon-q-generative-sql-amazon-redshift/"
    },
    {
     "t": "Secure generative SQL with Amazon Q (AWS Big Data Blog)",
     "u": "https://aws.amazon.com/blogs/big-data/secure-generative-sql-with-amazon-q"
    },
    {
     "t": "Working with Amazon Quick Sight Topics",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/topics.html"
    },
    {
     "t": "Adding custom instructions to a Topic",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/topics-custom-instructions.html"
    },
    {
     "t": "Using Topics in Amazon Quick chat",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/topics-in-chat.html"
    },
    {
     "t": "Working with legacy Topics",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/legacy-topics.html"
    },
    {
     "t": "Work with Quick Sight Topics using the APIs",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/topics-cli.html"
    },
    {
     "t": "Amazon Quick user guide document history",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/doc-history.html"
    },
    {
     "t": "Introducing Amazon Quick Suite, 2025-10-09",
     "u": "https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-quick-suite-agentic-ai-powered-workspace"
    },
    {
     "t": "Multi-dataset topics generally available, 2026-08-06",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick"
    },
    {
     "t": "Multi-dataset Topics public preview post, 2026-07-07",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-unified-semantic-layer-across-datasets-with-multi-dataset-topics-in-amazon-quick/"
    },
    {
     "t": "Bedrock Knowledge Bases structured data retrieval, 2024-12-04",
     "u": "https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-bedrock-knowledge-bases-structured-data-retrieval"
    },
    {
     "t": "Create a knowledge base with a structured data store",
     "u": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-structured-create.html"
    },
    {
     "t": "GenerateQuery API reference",
     "u": "https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GenerateQuery.html"
    },
    {
     "t": "Bedrock Knowledge Bases GraphRAG with Neptune Analytics",
     "u": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-graphs.html"
    },
    {
     "t": "Amazon SageMaker Catalog product page",
     "u": "https://aws.amazon.com/sagemaker/catalog/"
    },
    {
     "t": "SageMaker Catalog business metadata features, 2025-11-19",
     "u": "https://aws.amazon.com/blogs/aws/new-business-metadata-features-in-amazon-sagemaker-catalog-to-improve-discoverability-across-organizations"
    },
    {
     "t": "SageMaker Unified Studio AI recommendations docs",
     "u": "https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/autodoc.html"
    },
    {
     "t": "SageMaker Data Agent in Query Editor, 2026-03-30",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sagemaker-data-agent-query-editor"
    },
    {
     "t": "What is Amazon SageMaker (next generation)",
     "u": "https://docs.aws.eu/next-generation-sagemaker/latest/userguide/what-is-sagemaker.html"
    },
    {
     "t": "Amazon Neptune introduction",
     "u": "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"
    },
    {
     "t": "What is Neptune Analytics",
     "u": "https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html"
    },
    {
     "t": "AWS Labs MCP servers repository",
     "u": "https://github.com/awslabs/mcp"
    },
    {
     "t": "AWS Labs Redshift MCP server",
     "u": "https://github.com/awslabs/mcp/tree/main/src/redshift-mcp-server"
    },
    {
     "t": "Agent Toolkit for AWS, 2026-05-06",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/05/agent-toolkit/"
    },
    {
     "t": "Redshift supported data types",
     "u": "https://docs.aws.amazon.com/redshift/latest/dg/c_Supported_data_types.html"
    },
    {
     "t": "Amazon Redshift product page",
     "u": "https://aws.amazon.com/redshift/"
    },
    {
     "t": "Semantic layer for agentic AI on AWS with AtScale, 2026-10-20",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-atscale-and-amazon-bedrock-agentcore/"
    },
    {
     "t": "Redshift COMMENT",
     "u": "https://docs.aws.amazon.com/redshift/latest/dg/r_COMMENT.html"
    },
    {
     "t": "Using generative SQL (feedback)",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html"
    },
    {
     "t": "Automating data classification in SageMaker Catalog using an AI agent",
     "u": "https://aws.amazon.com/blogs/big-data/automating-data-classification-in-amazon-sagemaker-catalog-using-an-ai-agent/"
    },
    {
     "t": "AWS CLI: start-metadata-generation-run",
     "u": "https://docs.aws.amazon.com/cli/latest/reference/datazone/start-metadata-generation-run.html"
    },
    {
     "t": "botocore Quick Sight API model (TopicColumn)",
     "u": "https://raw.githubusercontent.com/boto/botocore/develop/botocore/data/quicksight/2018-04-01/service-2.json"
    },
    {
     "t": "Data lineage is GA in Amazon DataZone and next generation SageMaker",
     "u": "https://aws.amazon.com/about-aws/whats-new/2024/12/data-lineage-amazon-datazone-next-generation-sagemaker"
    },
    {
     "t": "Data lineage in Amazon SageMaker Unified Studio",
     "u": "https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/datazone-data-lineage.html"
    },
    {
     "t": "Amazon SageMaker now supports data lineage in IAM-based domains",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-sagemaker-data-lineage-iam-domain"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Write table and column comments in Redshift with COMMENT ON, and add TableAnnotations, ColumnAnnotations and CuratedQueries to the Q generative SQL custom context JSON. To draft descriptions and business names, publish the tables to SageMaker Catalog and run the DataZone StartMetadataGenerationRun API with types BUSINESS_DESCRIPTIONS and BUSINESS_NAMES, then review the drafts. The API takes at most 2 types per call and one asset per call.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "# One asset per call. types accepts at most 2 values.\naws datazone start-metadata-generation-run \\\n  --domain-identifier $DOMAIN_ID \\\n  --owning-project-identifier $PROJECT_ID \\\n  --target type=ASSET,identifier=$ASSET_ID \\\n  --types BUSINESS_DESCRIPTIONS BUSINESS_NAMES",
    "u": "https://docs.aws.amazon.com/cli/latest/reference/datazone/start-metadata-generation-run.html"
   }
  },
  {
   "id": "bigquery",
   "name": "Google BigQuery",
   "category": "cloud-dw",
   "tagline": "Google Cloud serverless data warehouse with built-in Gemini agents, graph, and vector search.",
   "verdict": "partial",
   "verdictNote": "Data agents take descriptions, synonyms, verified queries, and glossary terms, but BigQuery has no general metric or semantic view object; graph measures are Preview.",
   "artifacts": [
    {
     "name": "Data agents (conversational analytics in BigQuery)",
     "kind": "agent",
     "status": "GA",
     "since": "2026-06",
     "format": "Console, API",
     "url": "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
    },
    {
     "name": "Conversational Analytics API",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-06",
     "format": "REST v1, client libraries",
     "url": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/overview"
    },
    {
     "name": "Verified queries (example queries, formerly golden queries)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-06",
     "format": "JSON, Python SDK",
     "url": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/data-agent-authored-context-bq"
    },
    {
     "name": "Authored context: table and column descriptions, synonyms, tags",
     "kind": "annotations",
     "status": "GA",
     "since": "2026-06",
     "format": "JSON, Python SDK",
     "url": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/data-agent-authored-context-bq"
    },
    {
     "name": "Knowledge Catalog business glossary (formerly Dataplex Universal Catalog)",
     "kind": "glossary",
     "status": "Unverified",
     "since": "",
     "format": "Console, API",
     "url": "https://docs.cloud.google.com/dataplex/docs/create-glossary"
    },
    {
     "name": "Knowledge Catalog aspects and aspect types",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "API, console",
     "url": "https://docs.cloud.google.com/knowledge-catalog/docs/catalog-overview"
    },
    {
     "name": "BigQuery Graph (CREATE PROPERTY GRAPH)",
     "kind": "knowledge-graph",
     "status": "GA",
     "since": "2026-08",
     "format": "SQL DDL",
     "url": "https://docs.cloud.google.com/bigquery/docs/graph-create"
    },
    {
     "name": "GQL and GRAPH_TABLE graph queries",
     "kind": "graph-query",
     "status": "GA",
     "since": "2026-08",
     "format": "GQL, SQL",
     "url": "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
    },
    {
     "name": "Graph measures (MEASURE in property graph DDL)",
     "kind": "metric-view",
     "status": "Preview",
     "since": "2026-04",
     "format": "SQL DDL",
     "url": "https://docs.cloud.google.com/bigquery/docs/graph-measures"
    },
    {
     "name": "VECTOR_SEARCH and vector indexes",
     "kind": "vector",
     "status": "GA",
     "since": "",
     "format": "SQL",
     "url": "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
    },
    {
     "name": "Remote BigQuery MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-04",
     "format": "MCP over Streamable HTTP",
     "url": "https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp"
    },
    {
     "name": "MCP Toolbox for Databases (BigQuery tools incl. ask_data_insights)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "Open source server, Apache-2.0",
     "url": "https://docs.cloud.google.com/bigquery/docs/pre-built-tools-with-mcp-toolbox"
    },
    {
     "name": "BigQuery data canvas",
     "kind": "agent",
     "status": "Unverified",
     "since": "",
     "format": "Console",
     "url": "https://docs.cloud.google.com/bigquery/docs/data-canvas"
    }
   ],
   "caps": {
    "metrics": {
     "l": 2,
     "n": "Only MEASURE in property graph DDL, Preview since Apr 2026; no general metric object. Query through GRAPH_EXPAND and AGG.",
     "u": "https://docs.cloud.google.com/bigquery/docs/graph-measures"
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension, hierarchy, or time-grain object. Teams use column descriptions and agent field context, or LookML.",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/data-agent-authored-context-bq"
    },
    "relationships": {
     "l": 3,
     "n": "Property graph edge tables declare links (GA Aug 2026). Agents otherwise read relationships written as YAML in system instructions.",
     "u": "https://docs.cloud.google.com/bigquery/docs/graph-create"
    },
    "synonyms": {
     "l": 3,
     "n": "Data agents accept table and column descriptions, synonyms, tags, and system instructions. Custom glossary terms were Preview in Feb 2026.",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/data-agent-authored-context-bq"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Verified queries (formerly golden queries) pair a question with SQL, support parameters, and return matched_query. GA with agents Jun 2026.",
     "u": "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
    },
    "nl2sql": {
     "l": 3,
     "n": "Conversational analytics and the Conversational Analytics API reached GA on Jun 23, 2026. An agent holds up to 100 sources.",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/release-notes"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object. Closest: property graphs for entities and links, Knowledge Catalog glossary for terms.",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/catalog-overview"
    },
    "graph": {
     "l": 3,
     "n": "GA Aug 31, 2026, with GQL and SQL/PGQ. Standard edition and on-demand billing end for graph processing Apr 26, 2027.",
     "u": "https://docs.cloud.google.com/bigquery/docs/release-notes"
    },
    "vector": {
     "l": 3,
     "n": "VECTOR_SEARCH and vector indexes (IVF, TreeAH) run in SQL. Hybrid search and single-query syntax are Preview.",
     "u": "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions"
    },
    "mcp": {
     "l": 3,
     "n": "GA Apr 20, 2026, with metadata and SQL tools. No conversational analytics tool listed; MCP Toolbox adds ask_data_insights.",
     "u": "https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp"
    },
    "governance": {
     "l": 3,
     "n": "Agents see only data the user can query and cannot run DML. Graph metadata syncs to Knowledge Catalog in Preview.",
     "u": "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
    },
    "openStandard": {
     "l": 1,
     "n": "Graph follows ISO GQL and SQL/PGQ. No OSI or Ossie converter for BigQuery was found in the Ossie converters repo.",
     "u": "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Data insights drafts table and column descriptions with Gemini. Generate without publishing has no preview label. Publishing to Knowledge Catalog is Preview.",
     "u": "https://docs.cloud.google.com/bigquery/docs/generate-table-insights"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "ALTER TABLE ... ALTER COLUMN ... SET OPTIONS (description=...) sets a column description; tables and views are covered. One column per statement, so script it.",
     "u": "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
    },
    "autoClassify": {
     "l": 1,
     "n": "Sensitive Data Protection discovery profiles BigQuery (GA) and can auto-attach sensitivity tags. It is a separate product from BigQuery.",
     "u": "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
    },
    "sampleValues": {
     "l": 1,
     "n": "Agents can match terms to values using existing embeddings of your column values (for example Texas to TX). You must create the embeddings.",
     "u": "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for agent context found. Teams add verified queries (formerly golden queries), glossaries and instructions by hand.",
     "u": "https://docs.cloud.google.com/gemini/data-agents/conversational-analytics/bigquery"
    },
    "lineage": {
     "l": 3,
     "n": "Column-level lineage GA 2025-09-29 for BigQuery jobs, in Knowledge Catalog. Custom sources support table level only.",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/release-notes"
    },
    "evals": {
     "l": 0,
     "n": "No eval runner found. Verified queries guide the agent, and the chat shows the agent's reasoning for each answer.",
     "u": "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
    }
   },
   "offers": [
    "Data agents hold table and column descriptions, synonyms, tags, and parameterized verified queries as context (GA Jun 2026).",
    "Conversational Analytics API v1 lets your own app call the same agents, over BigQuery and Looker sources.",
    "Remote BigQuery MCP server (GA Apr 2026) exposes metadata and SQL tools; MCP Toolbox adds ask_data_insights.",
    "Property graphs (GA Aug 2026) declare entities and relationships over tables and can be a data agent source.",
    "Knowledge Catalog glossary terms can be imported into agents, up to 10 terms per table.",
    "VECTOR_SEARCH and vector indexes give semantic search in SQL."
   ],
   "gaps": [
    "No general metric or semantic view object. Only graph MEASURE inside property graphs, which is Preview.",
    "No declared dimension, hierarchy, or time-grain object. Agents rely on column metadata and instructions.",
    "Relationships and glossary entries in system instructions are free YAML text, not typed fields.",
    "Agent context lives inside each agent. No portable export; no OSI or Ossie converter for BigQuery found.",
    "The BigQuery MCP server doc lists metadata and SQL tools only, with no conversational analytics tool."
   ],
   "fillWith": [
    "Looker (LookML)",
    "dbt Semantic Layer",
    "Cube",
    "MCP Toolbox for Databases"
   ],
   "nl2sqlPath": "Create a data agent with table descriptions, synonyms, parameterized verified queries, and glossary terms, then call it through the Conversational Analytics API. Give other agents access through the BigQuery MCP server or MCP Toolbox ask_data_insights. For governed metrics, keep them as verified queries or define them in a semantic layer such as LookML.",
   "snippet": {
    "lang": "json",
    "title": "Data agent context: table metadata plus one verified example query",
    "code": "\"tableReferences\": [{\n  \"projectId\": \"bigquery-public-data\", \"datasetId\": \"thelook_ecommerce\", \"tableId\": \"orders\",\n  \"schema\": {\n    \"description\": \"Data for orders in The Look, a fictitious ecommerce store.\",\n    \"synonyms\": [\"sales\"],\n    \"tags\": [\"sale\", \"order\", \"sales_order\"],\n    \"fields\": [{\"name\": \"status\", \"description\": \"The current status of the order.\"}]\n  }\n}],\n\"example_queries\": [{\n  \"naturalLanguageQuestion\": \"How many orders are there?\",\n  \"sqlQuery\": \"SELECT COUNT(*) FROM `bigquery-public-data.thelook_ecommerce.orders`\"\n}]",
    "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/data-agent-authored-context-bq"
   },
   "sources": [
    {
     "t": "BigQuery release notes",
     "u": "https://docs.cloud.google.com/bigquery/docs/release-notes"
    },
    {
     "t": "Conversational analytics in BigQuery",
     "u": "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
    },
    {
     "t": "Conversational Analytics API overview",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/overview"
    },
    {
     "t": "Conversational Analytics API release notes",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/release-notes"
    },
    {
     "t": "Define data agent context for BigQuery data sources",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/data-agent-authored-context-bq"
    },
    {
     "t": "Create and query a graph (BigQuery Graph)",
     "u": "https://docs.cloud.google.com/bigquery/docs/graph-create"
    },
    {
     "t": "Graph measures",
     "u": "https://docs.cloud.google.com/bigquery/docs/graph-measures"
    },
    {
     "t": "BigQuery Graph and ISO standards",
     "u": "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
    },
    {
     "t": "Use the BigQuery remote MCP server",
     "u": "https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp"
    },
    {
     "t": "Use BigQuery with MCP Toolbox for Databases",
     "u": "https://docs.cloud.google.com/bigquery/docs/pre-built-tools-with-mcp-toolbox"
    },
    {
     "t": "MCP Toolbox for Databases (GitHub)",
     "u": "https://github.com/googleapis/genai-toolbox"
    },
    {
     "t": "About metadata in Knowledge Catalog",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/catalog-overview"
    },
    {
     "t": "Knowledge Catalog release notes",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/release-notes"
    },
    {
     "t": "Create business glossaries and terms",
     "u": "https://docs.cloud.google.com/dataplex/docs/create-glossary"
    },
    {
     "t": "BigQuery search functions (VECTOR_SEARCH)",
     "u": "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions"
    },
    {
     "t": "Gemini in BigQuery overview",
     "u": "https://docs.cloud.google.com/gemini/docs/bigquery/overview"
    },
    {
     "t": "BigQuery data canvas",
     "u": "https://docs.cloud.google.com/bigquery/docs/data-canvas"
    },
    {
     "t": "Data insights overview",
     "u": "https://docs.cloud.google.com/bigquery/docs/data-insights"
    },
    {
     "t": "Generate table insights",
     "u": "https://docs.cloud.google.com/bigquery/docs/generate-table-insights"
    },
    {
     "t": "DDL statements in GoogleSQL",
     "u": "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
    },
    {
     "t": "Overview of sensitive data discovery",
     "u": "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
    },
    {
     "t": "Conversational analytics in BigQuery (data agents)",
     "u": "https://docs.cloud.google.com/gemini/data-agents/conversational-analytics/bigquery"
    },
    {
     "t": "Conversational Analytics API release notes",
     "u": "https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/release-notes"
    },
    {
     "t": "About data lineage visualization in Knowledge Catalog",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/lineage-views"
    }
   ],
   "verified": "2026-10-24",
   "logo": "googlebigquery",
   "worksWith": [],
   "enrichHowTo": "Run data insights on a table to draft table and column descriptions, edit them, and publish. For scripted writes, run ALTER TABLE ... ALTER COLUMN ... SET OPTIONS (description=...) per column. Then add verified queries and glossary terms to the data agent.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "ALTER TABLE mydataset.mytable\nALTER COLUMN price\nSET OPTIONS (description = 'Price per unit');",
    "u": "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
   }
  },
  {
   "id": "sap",
   "name": "SAP Business Data Cloud / Datasphere",
   "category": "cloud-dw",
   "tagline": "SAP data platform with semantic modeling, data products, and SAP HANA Cloud engines.",
   "verdict": "native",
   "verdictNote": "Analytic models and the Business Builder layer declare measures, dimensions and associations natively, but public docs show little AI access to them beyond Joule tenant help.",
   "artifacts": [
    {
     "name": "SAP Datasphere analytic model",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, CSN/JSON export and import, datasphere CLI",
     "url": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/creating-an-analytic-model-e5fbe9e.md"
    },
    {
     "name": "SAP Datasphere Business Builder (business entities, fact models, consumption models)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/Buisiness-Builder/creating-a-business-entity-c912cdc.md"
    },
    {
     "name": "SAP Datasphere catalog terms, KPIs, tags and data products",
     "kind": "glossary",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Administering/Creating-and-Configuring-Your-Tenant/enable-sap-business-ai-for-sap-datasphere-1b3fe45.md"
    },
    {
     "name": "SAP Datasphere Generate Semantics (AI-assisted semantic types, measures, attributes)",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "GUI, needs AI Units license",
     "url": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/generate-semantic-information-2fc1d26.md"
    },
    {
     "name": "SAP Datasphere Generate SQL with AI (SQL views)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "GUI prompt panel, needs AI Units license",
     "url": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/generate-sql-code-with-ai-d153065.md"
    },
    {
     "name": "Joule in SAP Datasphere",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "Chat in the Datasphere shell bar",
     "url": "https://news.sap.com/2026/04/sap-business-ai-release-highlights-q1-2026/"
    },
    {
     "name": "SAP Business Data Cloud (SAP-managed data products, BDC Connect)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2025-02",
     "format": "Data products in a catalog; zero-copy sharing",
     "url": "https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/"
    },
    {
     "name": "SAP Knowledge Graph / Datasphere knowledge graph (metadata graph)",
     "kind": "knowledge-graph",
     "status": "Unverified",
     "since": "2024-03",
     "format": "Auto-built from Datasphere metadata; ontology editor announced",
     "url": "https://news.sap.com/2024/03/latest-sap-data-and-analytics-innovations-sap-data-unleashed/"
    },
    {
     "name": "SAP HANA Cloud knowledge graph engine (RDF, SPARQL inside SQL)",
     "kind": "knowledge-graph",
     "status": "Unverified",
     "since": "",
     "format": "SPARQL_EXECUTE and SPARQL tables in SQL",
     "url": "https://news.sap.com/2025/07/unifying-ai-workloads-sap-hana-cloud-one-database/"
    },
    {
     "name": "SAP HANA Cloud vector engine",
     "kind": "vector",
     "status": "GA",
     "since": "2024-04",
     "format": "SQL vector functions",
     "url": "https://news.sap.com/2024/04/sap-hana-cloud-vector-engine-ai-with-business-context/"
    },
    {
     "name": "MCP support for SAP HANA Cloud",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-11",
     "format": "MCP access to HANA multi-model engines",
     "url": "https://news.sap.com/2025/11/business-ai-innovation-unveiled-at-sap-teched/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Analytic model measures: fact source, calculated, restricted, count distinct, currency conversion, non-cumulative. Business Builder entities also define measures.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/create-a-measure-in-an-analytic-model-e4cc3e8.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Analytic models have dimensions, hierarchies, filters and variables. Business entities model dimensions with keys and attributes.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/creating-an-analytic-model-e5fbe9e.md"
    },
    "relationships": {
     "l": 3,
     "n": "Associations define semantic relationships between entities in the Data Builder and between business entities for consumption models.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/Buisiness-Builder/creating-a-business-entity-c912cdc.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Asset names, short and long descriptions, semantic types, catalog terms, KPIs and tags. AI drafts descriptions. No synonym field found.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Administering/Creating-and-Configuring-Your-Tenant/enable-sap-business-ai-for-sap-datasphere-1b3fe45.md"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "None found. Datasphere AI SQL generation takes free-text prompts and source objects only.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/generate-sql-code-with-ai-d153065.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "Generate SQL with AI drafts SQL views. Joule in Datasphere is GA; documented uses are tenant help, navigation and actions.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/generate-sql-code-with-ai-d153065.md"
    },
    "ontology": {
     "l": 2,
     "n": "SAP Knowledge Graph exists in BDC and Datasphere, but no GA statement found. It started as a 2024 preview.",
     "u": "https://news.sap.com/2024/03/latest-sap-data-and-analytics-innovations-sap-data-unleashed/"
    },
    "graph": {
     "l": 2,
     "n": "SAP HANA Cloud runs SPARQL on RDF in its knowledge graph engine, inside SQL. Engine GA label not found.",
     "u": "https://news.sap.com/2025/07/unifying-ai-workloads-sap-hana-cloud-one-database/"
    },
    "vector": {
     "l": 3,
     "n": "SAP HANA Cloud vector engine is GA (April 2024) and is queried with SQL functions.",
     "u": "https://news.sap.com/2024/04/sap-hana-cloud-vector-engine-ai-with-business-context/"
    },
    "mcp": {
     "l": 3,
     "n": "MCP support for SAP HANA Cloud is GA (Nov 2025). No MCP server for Datasphere models found.",
     "u": "https://news.sap.com/2025/11/business-ai-innovation-unveiled-at-sap-teched/"
    },
    "governance": {
     "l": 3,
     "n": "Data access controls apply to analytic models; consumption models support authorization scenarios; catalog, data products and lineage views exist.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/apply-a-data-access-control-to-an-analytic-model-8d8e2f9.md"
    },
    "openStandard": {
     "l": 1,
     "n": "CSN/JSON export and import; CSN is defined in SAP's CAP docs. No OSI or Ossie support found.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/creating-an-analytic-model-e5fbe9e.md"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "AI-assisted catalog content generation drafts asset summaries and descriptions and assigns tags. Needs AI Units and tenant enablement. Docs show no status label.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Administering/Creating-and-Configuring-Your-Tenant/enable-sap-business-ai-for-sap-datasphere-1b3fe45.md"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Export and import objects as CSN/JSON files, or use the datasphere CLI. Import can overwrite existing objects; import does not deploy.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Creating-Finding-Sharing-Objects/importing-objects-from-a-csn-json-file-23599e6.md"
    },
    "autoClassify": {
     "l": 3,
     "n": "Catalog auto-tags data products with Personal Data and Sensitive Personal Data. Generate Semantics sets column semantic types. Manual tagging of privacy tags is blocked.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/data-protection-and-privacy-tagging-6c00246.md"
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value or literal-matching feature found. Natural language search filters object metadata only, not data values.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Creating-Finding-Sharing-Objects/natural-language-search-04170c6.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for joins, measures or examples in the docs read. Teams model these by hand.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/generate-sql-code-with-ai-d153065.md"
    },
    "lineage": {
     "l": 3,
     "n": "Impact and Lineage Analysis supports column-level analysis, but only for tables, graphical and SQL views, and analytic models.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/impact-and-lineage-analysis-9da4892.md"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling or feedback loop found. AI SQL view generation takes free-text prompts only.",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/generate-sql-code-with-ai-d153065.md"
    }
   },
   "offers": [
    "Analytic models: measures (calculated, restricted, count distinct), dimensions, hierarchies, filters and variables; exportable as CSN/JSON and manageable by CLI.",
    "Business Builder layers business entities, fact models and consumption models with associations and authorization scenarios.",
    "Catalog with terms, KPIs, tags and data products; AI drafts descriptions and supports natural language search (needs AI Units license).",
    "SAP HANA Cloud combines a vector engine, a knowledge graph engine (SPARQL) and MCP support in one database inside BDC.",
    "BDC Connect shares data products zero-copy with Databricks (GA Oct 2025); BigQuery, Snowflake, Fabric listed as partners; Athena planned."
   ],
   "gaps": [
    "No verified question-to-SQL pairs and no synonym field found for analytic models.",
    "Knowledge graph GA status unclear: Datasphere graph began as a 2024 preview; HANA Cloud auto-build was planned for Q1 2026.",
    "No MCP server for Datasphere or analytic models found; MCP is documented for SAP HANA Cloud only.",
    "Public docs show Joule in Datasphere for tenant help and actions, not question answering over analytic models.",
    "AI features need an AI Units license and tenant enablement; model export is SAP CSN, not an open spec."
   ],
   "fillWith": [
    "SAP Databricks (inside BDC)",
    "SAP Snowflake (inside BDC)",
    "BDC Connect to Google BigQuery, Microsoft Fabric or Amazon Athena"
   ],
   "nl2sqlPath": "Model measures, dimensions and associations in Datasphere analytic models and the Business Builder layer. For AI question answering, SAP's own posts point to sharing data products into Databricks or Snowflake with BDC Connect, or building agents on SAP HANA Cloud through its MCP support. Confirm Joule and SAP Knowledge Graph status with SAP before relying on them.",
   "snippet": null,
   "sources": [
    {
     "t": "SAP Business Data Cloud product page",
     "u": "https://www.sap.com/products/data-cloud.html"
    },
    {
     "t": "SAP Datasphere product page",
     "u": "https://www.sap.com/products/data-cloud/datasphere.html"
    },
    {
     "t": "SAP Debuts Business Data Cloud with Databricks, 2025-02-13",
     "u": "https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/"
    },
    {
     "t": "SAP Datasphere documentation source (SAP-docs on GitHub)",
     "u": "https://github.com/SAP-docs/sap-datasphere"
    },
    {
     "t": "Creating an Analytic Model (Datasphere docs)",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/creating-an-analytic-model-e5fbe9e.md"
    },
    {
     "t": "Create a Measure in an Analytic Model",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/create-a-measure-in-an-analytic-model-e4cc3e8.md"
    },
    {
     "t": "Creating a Business Entity",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/Buisiness-Builder/creating-a-business-entity-c912cdc.md"
    },
    {
     "t": "Creating a Fact Model",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/Buisiness-Builder/creating-a-fact-model-5bbd14a.md"
    },
    {
     "t": "Creating a Consumption Model",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/Buisiness-Builder/creating-a-consumption-model-337fa99.md"
    },
    {
     "t": "Generate Semantic Information",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/generate-semantic-information-2fc1d26.md"
    },
    {
     "t": "Generate SQL Code with AI",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/generate-sql-code-with-ai-d153065.md"
    },
    {
     "t": "Enable SAP Business AI for SAP Datasphere",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Administering/Creating-and-Configuring-Your-Tenant/enable-sap-business-ai-for-sap-datasphere-1b3fe45.md"
    },
    {
     "t": "Standard roles in SAP Datasphere (DW Metadata Graph Consumer)",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Administering/Managing-Users-and-Roles/standard-roles-delivered-with-sap-datasphere-a50a51d.md"
    },
    {
     "t": "Apply a Data Access Control to an Analytic Model",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/apply-a-data-access-control-to-an-analytic-model-8d8e2f9.md"
    },
    {
     "t": "SAP Data Unleashed 2024: Datasphere knowledge graph preview",
     "u": "https://news.sap.com/2024/03/latest-sap-data-and-analytics-innovations-sap-data-unleashed/"
    },
    {
     "t": "SAP HANA Cloud vector engine generally available, 2024-04",
     "u": "https://news.sap.com/2024/04/sap-hana-cloud-vector-engine-ai-with-business-context/"
    },
    {
     "t": "SAP Business Data Cloud intelligent applications, 2025-05-21",
     "u": "https://news.sap.com/2025/05/future-intelligent-applications-sap-business-data-cloud/"
    },
    {
     "t": "SAP Business AI release highlights Q1 2026",
     "u": "https://news.sap.com/2026/04/sap-business-ai-release-highlights-q1-2026/"
    },
    {
     "t": "SAP Business AI release highlights Q3 2025",
     "u": "https://news.sap.com/2025/10/sap-business-ai-release-highlights-q3-2025/"
    },
    {
     "t": "Business AI innovation at SAP TechEd, 2025-11-17",
     "u": "https://news.sap.com/2025/11/business-ai-innovation-unveiled-at-sap-teched/"
    },
    {
     "t": "SAP Snowflake and HANA Cloud data fabric news, 2025-11-05",
     "u": "https://news.sap.com/2025/11/sap-snowflake-new-data-fabric-innovations-sap-bdc-sap-hana-cloud/"
    },
    {
     "t": "SAP and Snowflake, 2025-11-04",
     "u": "https://news.sap.com/2025/11/sap-snowflake-data-enterprise-ai-business-data-fabric/"
    },
    {
     "t": "BDC Connect for Google BigQuery, 2025-10-06",
     "u": "https://news.sap.com/2025/10/sap-google-cloud-redefine-enterprise-ai-zero-copy-data-google-bigquery/"
    },
    {
     "t": "BDC Connect for Databricks GA, 2025-10-08",
     "u": "https://news.sap.com/2025/10/sap-connect-intelligent-applications-sap-bdc/"
    },
    {
     "t": "BDC Connect for Microsoft Fabric, 2025-11-18",
     "u": "https://news.sap.com/2025/11/sap-bdc-connect-for-microsoft-fabric-business-insights-ai-innovation/"
    },
    {
     "t": "SAP and AWS zero-copy sharing, 2026-05-12",
     "u": "https://news.sap.com/2026/05/sap-aws-next-generation-ai-bi-directional-zero-copy-data-sharing-sap-bdc/"
    },
    {
     "t": "Accelerate the Autonomous Enterprise with SAP BDC, 2026-05-13",
     "u": "https://news.sap.com/2026/05/sap-bdc-accelerate-autonomous-enterprise/"
    },
    {
     "t": "SAP to acquire Dremio, 2026-05-04",
     "u": "https://news.sap.com/2026/05/sap-to-acquire-dremio-unify-sap-and-non-sap-data-power-agentic-ai/"
    },
    {
     "t": "SAP AI-native North Star architecture, 2026-06-08",
     "u": "https://news.sap.com/2026/06/sap-ai-native-north-star-architecture-technical-backbone-autonomous-enterprise/"
    },
    {
     "t": "SAP HANA Cloud multi-model post, 2025-07-16",
     "u": "https://news.sap.com/2025/07/unifying-ai-workloads-sap-hana-cloud-one-database/"
    },
    {
     "t": "Data protection and privacy tagging",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/data-protection-and-privacy-tagging-6c00246.md"
    },
    {
     "t": "Impact and lineage analysis",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/impact-and-lineage-analysis-9da4892.md"
    },
    {
     "t": "Visualize column and input parameter lineages in a graphical view",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/visualize-column-and-input-parameter-lineages-in-a-graphical-view-a2426b7.md"
    },
    {
     "t": "Importing objects from a CSN/JSON file",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Creating-Finding-Sharing-Objects/importing-objects-from-a-csn-json-file-23599e6.md"
    },
    {
     "t": "Importing and exporting objects via the command line",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Creating-Finding-Sharing-Objects/importing-and-exporting-objects-via-the-command-line-6494657.md"
    },
    {
     "t": "Natural language search",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Creating-Finding-Sharing-Objects/natural-language-search-04170c6.md"
    },
    {
     "t": "Catalog asset details",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/catalog-asset-details-afccc58.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": "sap",
   "worksWith": [],
   "enrichHowTo": "Turn on SAP Business AI for the tenant, then use AI-assisted catalog content generation to draft summaries and descriptions for catalog assets. In the Data Builder, run Generate > Generate Semantics to set semantic usage, keys and column semantic types. For scripted edits, export objects to CSN/JSON, edit them, and import them back, or use the datasphere command line."
  },
  {
   "id": "snowflake",
   "name": "Snowflake",
   "category": "cloud-dw",
   "tagline": "Cloud data platform with built-in semantic views, Cortex AI agents, and managed MCP.",
   "verdict": "native",
   "verdictNote": "Semantic Views are GA schema-level objects with metrics, dimensions, relationships, synonyms and verified queries that Cortex Agents and the managed MCP server read.",
   "artifacts": [
    {
     "name": "Semantic View",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2025-06",
     "format": "SQL DDL, YAML, GUI",
     "url": "https://docs.snowflake.com/en/sql-reference/sql/create-semantic-view"
    },
    {
     "name": "Semantic View Autopilot",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://docs.snowflake.com/en/user-guide/views-semantic/autopilot"
    },
    {
     "name": "Semantic Studio",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-09",
     "format": "YAML, GUI",
     "url": "https://docs.snowflake.com/en/user-guide/views-semantic/semantic-studio"
    },
    {
     "name": "Semantic model YAML file on a stage (legacy stage API)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://docs.snowflake.com/en/user-guide/views-semantic/semantic-models-vs-views"
    },
    {
     "name": "Verified queries (AI_VERIFIED_QUERIES, Verified Query Repository)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-04",
     "format": "SQL DDL, YAML",
     "url": "https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-repository"
    },
    {
     "name": "Custom instructions (AI_SQL_GENERATION, AI_QUESTION_CATEGORIZATION)",
     "kind": "annotations",
     "status": "GA",
     "since": "2026-01",
     "format": "SQL DDL, YAML",
     "url": "https://docs.snowflake.com/en/user-guide/views-semantic/custom-instructions"
    },
    {
     "name": "Cortex Analyst",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "REST API",
     "url": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst"
    },
    {
     "name": "Cortex Agents",
     "kind": "agent",
     "status": "GA",
     "since": "2025-11",
     "format": "SQL, REST API, GUI",
     "url": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents"
    },
    {
     "name": "Snowflake CoWork (renamed from Snowflake Intelligence in Jun 2026)",
     "kind": "agent",
     "status": "GA",
     "since": "2025-11",
     "format": "GUI",
     "url": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork"
    },
    {
     "name": "Snowflake-managed MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-11",
     "format": "SQL DDL (CREATE MCP SERVER), YAML spec",
     "url": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp"
    },
    {
     "name": "Horizon Catalog",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "GUI, SQL, API",
     "url": "https://docs.snowflake.com/en/user-guide/snowflake-horizon"
    },
    {
     "name": "Horizon Context (external metadata connectors)",
     "kind": "annotations",
     "status": "Preview",
     "since": "2026-10",
     "format": "GUI",
     "url": "https://docs.snowflake.com/en/user-guide/snowflake-horizon/horizon-context"
    },
    {
     "name": "Cortex Search",
     "kind": "vector",
     "status": "GA",
     "since": "2024-10",
     "format": "SQL, REST API",
     "url": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-search/cortex-search-overview"
    },
    {
     "name": "Retrieve Cortex Search (CORTEX_SEARCH_RETRIEVE)",
     "kind": "vector",
     "status": "Preview",
     "since": "2026-10",
     "format": "SQL table function",
     "url": "https://docs.snowflake.com/en/release-notes/2026/other/2026-10-23-cortex-search-retrieve-preview"
    },
    {
     "name": "VECTOR data type and vector functions",
     "kind": "vector",
     "status": "GA",
     "since": "2024-05",
     "format": "SQL",
     "url": "https://docs.snowflake.com/en/sql-reference/data-types-vector"
    },
    {
     "name": "Apache Ossie (formerly OSI) YAML import and export for semantic views",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-06",
     "format": "YAML",
     "url": "https://docs.snowflake.com/en/sql-reference/stored-procedures/system_create_semantic_view_from_ossie_yaml"
    },
    {
     "name": "Power BI ingestion into Semantic View Autopilot",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-08",
     "format": ".pbit or .pbix upload",
     "url": "https://docs.snowflake.com/en/user-guide/views-semantic/power-bi-ingestion"
    },
    {
     "name": "Tableau ingestion into Semantic View Autopilot",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": ".twb, .twbx, .tds, .tdsx upload",
     "url": "https://docs.snowflake.com/en/user-guide/views-semantic/tableau-ingestion"
    },
    {
     "name": "Semantic view export to Tableau data source (SYSTEM$EXPORT_TDS_FROM_SEMANTIC_VIEW)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-03",
     "format": "TDS file via SQL function",
     "url": "https://docs.snowflake.com/en/release-notes/2026/other/2026-03-05-semantic-views-tableau-tds"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "METRICS clause: aggregate, derived, window and semi-additive metrics, with PUBLIC or PRIVATE access modifiers.",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl"
    },
    "dimensions": {
     "l": 3,
     "n": "DIMENSIONS and FACTS with filters, sample values, enum flags. YAML adds time_dimensions. No hierarchy construct in the spec.",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl"
    },
    "relationships": {
     "l": 3,
     "n": "RELATIONSHIPS with primary keys, many-to-one, one-to-one, ASOF, bridge tables. USING relationship path and range joins are Preview.",
     "u": "https://docs.snowflake.com/en/sql-reference/sql/create-semantic-view"
    },
    "synonyms": {
     "l": 3,
     "n": "WITH SYNONYMS, COMMENT, SAMPLE_VALUES, IS_ENUM, plus free-text AI_SQL_GENERATION and AI_QUESTION_CATEGORIZATION instructions.",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/custom-instructions"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "AI_VERIFIED_QUERIES stored in the semantic view; Verified Query Repository. Optimization from verified queries is Preview.",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-repository"
    },
    "nl2sql": {
     "l": 3,
     "n": "Cortex Analyst API, Cortex Agents, CoWork. Since Aug 2026 Snowflake recommends Cortex Agents over standalone Cortex Analyst.",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-08-28-cortex-analyst-transition-cortex-agents"
    },
    "ontology": {
     "l": 0,
     "n": "No object, link or action layer. Semantic views cover tables, relationships, metrics. Ossie has an Ontology working group.",
     "u": "https://ossie.apache.org/updates/ossie-enters-apache-incubator/"
    },
    "graph": {
     "l": 1,
     "n": "No graph query feature in SQL command or function indexes. Partner apps: Neo4j Graph Analytics, RelationalAI.",
     "u": "https://neo4j.com/docs/snowflake-graph-analytics/current/"
    },
    "vector": {
     "l": 3,
     "n": "VECTOR type GA May 2024. Cortex Search (vector plus keyword) GA Oct 2024. Dimensions can bind a Search service.",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-search/cortex-search-overview"
    },
    "mcp": {
     "l": 3,
     "n": "Managed MCP server GA Nov 2025. Tools: Cortex Analyst on a semantic view, Search, Agents, SQL, custom. Limit 50 tools.",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp"
    },
    "governance": {
     "l": 3,
     "n": "RBAC grants, tags, ACCOUNT_USAGE views, agent lineage. Masking and row access policies apply at query time. verified_by is free text.",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-horizon/horizon-context"
    },
    "openStandard": {
     "l": 2,
     "n": "Ossie (formerly OSI) YAML import and export, Preview since Jun 2026. Native YAML, GET_DDL, dbt package and Terraform also exist.",
     "u": "https://docs.snowflake.com/en/sql-reference/stored-procedures/system_create_semantic_view_from_ossie_yaml"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "AI_GENERATE_TABLE_DESC drafts table, view and column descriptions, optionally from sample data. SQL path GA 2025-09-29. Snowsight UI path also exists.",
     "u": "https://docs.snowflake.com/en/user-guide/sql-cortex-descriptions"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "One ALTER TABLE ... ALTER (...) statement sets COMMENT on many columns. COMMENT ON handles one object. No file import tool.",
     "u": "https://docs.snowflake.com/en/sql-reference/sql/alter-table-column"
    },
    "autoClassify": {
     "l": 3,
     "n": "A classification profile set on a database auto-classifies its tables (GA Aug 2025). Semi-structured data support GA 2026-02-05.",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-02-05-sensitive-data-classification-json"
    },
    "sampleValues": {
     "l": 3,
     "n": "Semantic views accept SAMPLE_VALUES and IS_ENUM on dimensions, in both YAML and DDL. The values are authored, not auto-sampled by this setting.",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl"
    },
    "queryHistory": {
     "l": 3,
     "n": "Semantic View Autopilot uses query history visible to the creating role to suggest relationships and verified queries. No preview label on the page.",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/autopilot"
    },
    "lineage": {
     "l": 3,
     "n": "Snowsight Lineage tab shows column lineage. GET_LINEAGE accepts the COLUMN domain, with a default and maximum distance of 5. Enterprise Edition or higher.",
     "u": "https://docs.snowflake.com/en/sql-reference/functions/get_lineage-snowflake-core"
    },
    "evals": {
     "l": 3,
     "n": "Cortex Analyst evaluations run a semantic view against its verified queries and compare results. Snowflake now recommends Cortex Agents.",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst-evaluations"
    }
   },
   "offers": [
    "Semantic Views: schema-level objects with logical tables, relationships, facts, dimensions, metrics and synonyms that agents read as context.",
    "Verified queries and text instructions live inside the semantic view, so they follow its grants and shares.",
    "Cortex Agents and CoWork generate SQL directly from semantic views and run it under Snowflake roles.",
    "Managed MCP server exposes semantic views, Cortex Search, agents and SQL execution to external MCP clients with RBAC.",
    "Autopilot drafts a semantic view from tables, query history, example SQL, Power BI files or Tableau files.",
    "Plain SQL queries on semantic views (SEMANTIC_VIEW clause or AGG) work from any SQL client."
   ],
   "gaps": [
    "No ontology layer (objects, links, actions) and no native graph query. Graph work needs a partner Native App.",
    "Semantic views live inside Snowflake. A metric layer shared with other warehouses needs an external tool.",
    "Ossie spec is pre-1.0 (0.1.1 released, 0.2.0 draft) and Snowflake import and export is Preview.",
    "Several parts are Preview: relationship paths, range joins, materializations, TDS export, Horizon Context, verified-query optimization.",
    "Names and entry points changed in 2026 (Intelligence to CoWork, Analyst to Agents), so older tutorials and response formats lag."
   ],
   "fillWith": [
    "dbt Semantic Layer (MetricFlow)",
    "dbt_semantic_view package",
    "Terraform Snowflake provider",
    "Cube",
    "AtScale",
    "Honeydew",
    "RelationalAI",
    "Neo4j Graph Analytics"
   ],
   "nl2sqlPath": "Model the data as a semantic view with synonyms, sample values, verified queries and instructions, then add it as a tool on a Cortex Agent. Call the agent through the Agents Run API, CoWork or the managed MCP server. Use Autopilot or Semantic Studio to draft the view and keep the definition in Git through dbt or Terraform.",
   "snippet": {
    "lang": "sql",
    "title": "Minimal CREATE SEMANTIC VIEW over TPC-H sample data (adapted from the official example)",
    "code": "CREATE SEMANTIC VIEW tpch_rev_analysis\n  TABLES (\n    orders AS SNOWFLAKE_SAMPLE_DATA.TPCH_SF1.ORDERS PRIMARY KEY (o_orderkey) WITH SYNONYMS ('sales orders'),\n    customers AS SNOWFLAKE_SAMPLE_DATA.TPCH_SF1.CUSTOMER PRIMARY KEY (c_custkey)\n  )\n  RELATIONSHIPS ( orders_to_customers AS orders (o_custkey) REFERENCES customers )\n  DIMENSIONS (\n    customers.customer_name AS customers.c_name WITH SYNONYMS = ('customer name'),\n    orders.order_year AS YEAR(o_orderdate) COMMENT = 'Year when the order was placed'\n  )\n  METRICS (\n    orders.order_average_value AS AVG(orders.o_totalprice) COMMENT = 'Average order value across all orders'\n  )\n  COMMENT = 'Semantic view for revenue analysis';",
    "u": "https://docs.snowflake.com/en/sql-reference/sql/create-semantic-view"
   },
   "sources": [
    {
     "t": "CREATE SEMANTIC VIEW",
     "u": "https://docs.snowflake.com/en/sql-reference/sql/create-semantic-view"
    },
    {
     "t": "Overview of semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/overview"
    },
    {
     "t": "YAML vs DDL authoring for semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl"
    },
    {
     "t": "Migrating from the legacy stage API to semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/semantic-models-vs-views"
    },
    {
     "t": "Cortex Analyst",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst"
    },
    {
     "t": "Cortex Analyst Verified Query Repository",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-repository"
    },
    {
     "t": "Custom instructions in Cortex Analyst",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/custom-instructions"
    },
    {
     "t": "Cortex Agents",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents"
    },
    {
     "t": "Snowflake-managed MCP server",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp"
    },
    {
     "t": "Overview of Snowflake CoWork",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork"
    },
    {
     "t": "Snowflake Horizon Catalog",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-horizon"
    },
    {
     "t": "Horizon Context",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-horizon/horizon-context"
    },
    {
     "t": "Cortex Search",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-search/cortex-search-overview"
    },
    {
     "t": "Vector data types",
     "u": "https://docs.snowflake.com/en/sql-reference/data-types-vector"
    },
    {
     "t": "Preview features list",
     "u": "https://docs.snowflake.com/en/release-notes/preview-features"
    },
    {
     "t": "Release notes 2026",
     "u": "https://docs.snowflake.com/en/release-notes/new-features-2026"
    },
    {
     "t": "Release notes 2025",
     "u": "https://docs.snowflake.com/en/release-notes/new-features-2025"
    },
    {
     "t": "Using SQL to automatically generate object descriptions",
     "u": "https://docs.snowflake.com/en/user-guide/sql-cortex-descriptions"
    },
    {
     "t": "Generate descriptions with Snowflake Cortex",
     "u": "https://docs.snowflake.com/en/user-guide/ui-snowsight-cortex-descriptions"
    },
    {
     "t": "Sep 29, 2025: Cortex Powered Object Descriptions via SQL (GA)",
     "u": "https://docs.snowflake.com/en/release-notes/2025/other/2025-09-29-sql-object-descriptions"
    },
    {
     "t": "ALTER TABLE ... ALTER COLUMN",
     "u": "https://docs.snowflake.com/en/sql-reference/sql/alter-table-column"
    },
    {
     "t": "COMMENT",
     "u": "https://docs.snowflake.com/en/sql-reference/sql/comment"
    },
    {
     "t": "9.25 Release notes (Aug 2025)",
     "u": "https://docs.snowflake.com/en/release-notes/2025/9_25"
    },
    {
     "t": "Feb 05, 2026: Sensitive data classification, semi-structured data (GA)",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-02-05-sensitive-data-classification-json"
    },
    {
     "t": "CREATE CLASSIFICATION_PROFILE",
     "u": "https://docs.snowflake.com/en/sql-reference/classes/classification_profile/commands/create-classification-profile"
    },
    {
     "t": "Semantic View Autopilot",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/autopilot"
    },
    {
     "t": "GET_LINEAGE",
     "u": "https://docs.snowflake.com/en/sql-reference/functions/get_lineage-snowflake-core"
    },
    {
     "t": "Data Lineage",
     "u": "https://docs.snowflake.com/en/user-guide/ui-snowsight-lineage"
    },
    {
     "t": "Cortex Analyst evaluations",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst-evaluations"
    }
   ],
   "verified": "2026-10-24",
   "logo": "snowflake",
   "worksWith": [],
   "enrichHowTo": "Call the AI_GENERATE_TABLE_DESC stored procedure on each table with describe_columns set to true to draft table and column descriptions. Review them, then write the final text with ALTER TABLE ... ALTER (col COMMENT '...', ...), many columns per statement.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "ALTER TABLE t1 ALTER (\n  c1 COMMENT 'Customer key',\n  c5 COMMENT '50 character column'\n);",
    "u": "https://docs.snowflake.com/en/sql-reference/sql/alter-table-column"
   }
  },
  {
   "id": "databricks",
   "name": "Databricks",
   "category": "lakehouse",
   "tagline": "Lakehouse platform with Unity Catalog governance, metric views, Genie conversational analytics, and managed MCP.",
   "verdict": "native",
   "verdictNote": "Metric views, agent metadata, and Genie are GA; Genie Ontology is Public Preview and is inferred context, not a user-modeled schema.",
   "artifacts": [
    {
     "name": "Unity Catalog metric views (part of Unity Catalog Business Semantics)",
     "kind": "metric-view",
     "status": "GA",
     "since": "2026-04",
     "format": "YAML inside SQL DDL (CREATE VIEW ... WITH METRICS LANGUAGE YAML)",
     "url": "https://docs.databricks.com/aws/en/metric-views/"
    },
    {
     "name": "Agent metadata in metric views (comment, display_name, synonyms, format)",
     "kind": "annotations",
     "status": "GA",
     "since": "2026-04",
     "format": "YAML (spec 1.1, DBR 17.3+)",
     "url": "https://docs.databricks.com/aws/en/uc-semantics/agent-metadata"
    },
    {
     "name": "Genie Agents (formerly Genie spaces, originally AI/BI Genie)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-06",
     "format": "GUI and API (instructions, example SQL, SQL expressions, join relationships, benchmarks)",
     "url": "https://docs.databricks.com/aws/en/genie-agents/set-up"
    },
    {
     "name": "Genie One (formerly Databricks One, then Genie)",
     "kind": "agent",
     "status": "GA",
     "since": "2026-06",
     "format": "GUI, mobile apps, MCP",
     "url": "https://docs.databricks.com/aws/en/genie-one/chat"
    },
    {
     "name": "Genie Ontology",
     "kind": "ontology",
     "status": "Preview",
     "since": "2026-06",
     "format": "Automatic extraction plus Unity Catalog semantics; no user-authored schema documented",
     "url": "https://docs.databricks.com/aws/en/genie/genie-ontology"
    },
    {
     "name": "Unity Catalog Domains",
     "kind": "glossary",
     "status": "Preview",
     "since": "2026-06",
     "format": "GUI",
     "url": "https://www.databricks.com/blog/whats-new-unity-catalog-data-ai-summit-2026"
    },
    {
     "name": "Unity Catalog Pages (governed business definitions) and certification/deprecation",
     "kind": "glossary",
     "status": "Unverified",
     "since": "",
     "format": "GUI",
     "url": "https://docs.databricks.com/aws/en/uc-semantics/"
    },
    {
     "name": "Unity Catalog Business Glossary",
     "kind": "glossary",
     "status": "Announced",
     "since": "2026-06",
     "format": "GUI",
     "url": "https://www.databricks.com/blog/whats-new-unity-catalog-data-ai-summit-2026"
    },
    {
     "name": "Governed tags (used by ABAC policies)",
     "kind": "annotations",
     "status": "GA",
     "since": "2026-04",
     "format": "SQL and GUI",
     "url": "https://docs.databricks.com/aws/en/release-notes/product/2026/april"
    },
    {
     "name": "Genie One MCP server (managed, in Unity Gateway)",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-09",
     "format": "MCP over HTTP",
     "url": "https://www.databricks.com/blog/genie-one-mcp-now-generally-available"
    },
    {
     "name": "Other managed MCP servers (dbsql, sandbox, web_search)",
     "kind": "mcp",
     "status": "Preview",
     "since": "",
     "format": "MCP over HTTP; needs Unity Gateway beta enabled by an account admin",
     "url": "https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp"
    },
    {
     "name": "AI Search (formerly Vector Search)",
     "kind": "vector",
     "status": "GA",
     "since": "",
     "format": "Delta Sync and Direct Vector Access indexes; API and SQL",
     "url": "https://docs.databricks.com/aws/en/vector-search/vector-search"
    },
    {
     "name": "Agent Bricks Supervisor Agent (formerly Multi-Agent Supervisor)",
     "kind": "agent",
     "status": "GA",
     "since": "2026-02",
     "format": "GUI and API; GA in select US regions",
     "url": "https://docs.databricks.com/aws/en/release-notes/product/2026/february"
    },
    {
     "name": "Lakebase (managed Postgres, agent state and synced tables)",
     "kind": "agent",
     "status": "Unverified",
     "since": "",
     "format": "Postgres",
     "url": "https://docs.databricks.com/aws/en/oltp/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metric views are GA via Unity Catalog Business Semantics (April 2026). YAML spec 1.1; base support from DBR 16.4.",
     "u": "https://www.databricks.com/blog/redefining-semantics-data-layer-future-bi-and-ai"
    },
    "dimensions": {
     "l": 3,
     "n": "Fields declared in YAML; 'dimensions' is accepted as an alias. Hierarchies and time grains are not documented in pages read.",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/yaml-reference"
    },
    "relationships": {
     "l": 3,
     "n": "Star and snowflake joins in YAML; one-to-many needs DBR 18.1. Genie also stores join relationships in its knowledge store.",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/yaml-reference"
    },
    "synonyms": {
     "l": 3,
     "n": "Agent metadata: comment, display_name, synonyms, format. Needs DBR 17.3 and YAML 1.1. Genie imports synonyms automatically.",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/agent-metadata"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Genie example SQL, parameterized queries, SQL functions as trusted assets, and benchmarks (limit raised to 500 questions in Oct 2025).",
     "u": "https://docs.databricks.com/aws/en/genie-agents/tune-quality"
    },
    "nl2sql": {
     "l": 3,
     "n": "Genie One, Genie Agents, and Genie Code are GA per the June 2026 launch FAQ.",
     "u": "https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents"
    },
    "ontology": {
     "l": 2,
     "n": "Genie Ontology is Public Preview. It is inferred context plus Unity Catalog semantics; no user-defined object or link types documented.",
     "u": "https://docs.databricks.com/aws/en/genie/genie-ontology"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language documented. Genie Ontology docs describe a map of snippets, not a queryable graph.",
     "u": "https://docs.databricks.com/aws/en/genie/genie-ontology"
    },
    "vector": {
     "l": 3,
     "n": "AI Search (formerly Vector Search): hybrid search, reranker GA Dec 2025. Full-text keyword search is Beta.",
     "u": "https://docs.databricks.com/aws/en/vector-search/vector-search"
    },
    "mcp": {
     "l": 3,
     "n": "Genie One MCP server GA Sept 2026, grounded in Genie Ontology. Some managed servers need the Unity Gateway beta.",
     "u": "https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp"
    },
    "governance": {
     "l": 3,
     "n": "Metric views are Unity Catalog securables with standard privileges. Governed tags and ABAC GA April 2026. Certification flags trusted assets.",
     "u": "https://docs.databricks.com/aws/en/release-notes/product/2026/april"
    },
    "openStandard": {
     "l": 2,
     "n": "Metric views open-sourced in Apache Spark (SPARK-54119, fix 4.2.0). Joined Apache Ossie (incubating). Spark 4.2.0 release not checked.",
     "u": "https://issues.apache.org/jira/browse/SPARK-54119"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "AI-generated comments for catalogs, schemas, tables, views, columns and more, in Catalog Explorer. GA 2024-06-27. Review advised. Saving runs ALTER, which can disrupt jobs.",
     "u": "https://docs.databricks.com/aws/en/comments/ai-comments"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "One ALTER TABLE ... ALTER COLUMN statement can set COMMENT on several columns (Runtime 16.3 and above). SET TAGS also works. No file import tool.",
     "u": "https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-alter-table-manage-column"
    },
    "autoClassify": {
     "l": 3,
     "n": "Data Classification GA 2026-04-20, an agentic AI system that tags sensitive data. Scanning views is Beta (2026-09-15). Auto-tag configuration in the API is Public Preview.",
     "u": "https://docs.databricks.com/aws/en/release-notes/data-classification"
    },
    "sampleValues": {
     "l": 3,
     "n": "Genie format assistance samples representative values. Entity matching keeps up to 1,024 values per column, for up to 120 columns. Row filters exclude the table.",
     "u": "https://docs.databricks.com/aws/en/genie-agents/tune-quality"
    },
    "queryHistory": {
     "l": 3,
     "n": "When you add tables, Genie searches popular workspace queries you can view and suggests them as example queries. You accept or reject each one.",
     "u": "https://docs.databricks.com/aws/en/genie-agents/set-up"
    },
    "lineage": {
     "l": 3,
     "n": "system.access.column_lineage table with a rolling 1-year window. Records only when lineage can be inferred.",
     "u": "https://docs.databricks.com/aws/en/admin/system-tables/lineage"
    },
    "evals": {
     "l": 3,
     "n": "Genie benchmarks: up to 500 questions per agent, scored against reference SQL, with an Evaluations tab to track runs. No preview label on the page.",
     "u": "https://docs.databricks.com/aws/en/genie-agents/monitor"
    }
   },
   "offers": [
    "Metric views: governed measures, joins, and filters in YAML, queried with MEASURE() under Unity Catalog privileges.",
    "Agent metadata gives synonyms, display names, and formats that Genie reads automatically.",
    "Genie Agents take up to 50 tables or metric views, example SQL, SQL expressions, join relationships, and benchmarks.",
    "Genie One MCP server exposes governed analytics to outside agents, with Unity Gateway policies and audit logging.",
    "Metric views run in Power BI, Tableau, Sigma, Excel, and Google Sheets through MEASURE() or BI compatibility mode.",
    "AI Search (formerly Vector Search) is GA for retrieval over documents next to structured data."
   ],
   "gaps": [
    "Genie Ontology is Public Preview and inferred; no user-defined object types, link types, or actions are documented.",
    "Business Glossary was announced as coming soon in June 2026; the status of Pages is not stated.",
    "Metric views cannot be joined directly at query time; every measure needs MEASURE(); SELECT * is not allowed.",
    "Genie Agent limits: 50 tables, 100 instructions, 200 knowledge store snippets.",
    "BI integration is thin: Power BI and Tableau need pass-through SQL; Tableau delegated semantics is planned for late 2026."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "Atlan",
    "Collibra"
   ],
   "nl2sqlPath": "Model data in Unity Catalog with table and column comments, then define metric views with synonyms and display names. Add those metric views and key tables to a Genie Agent with example SQL, SQL expressions, and benchmarks. Expose it to outside agents through the Genie One MCP server, and treat Genie Ontology as Preview.",
   "snippet": {
    "lang": "yaml",
    "title": "Metric view YAML body (wrapped in CREATE VIEW ... WITH METRICS LANGUAGE YAML AS $$ ... $$)",
    "code": "version: 1.1\nsource: samples.tpch.orders\njoins:\n  - name: customer\n    source: samples.tpch.customer\n    'on': source.o_custkey = customer.c_custkey\nfields:\n  - name: customer_segment\n    expr: customer.c_mktsegment\n    synonyms: ['segment']\nmeasures:\n  - name: total_revenue\n    expr: SUM(o_totalprice)\n    display_name: 'Total Revenue'\n    synonyms: ['revenue', 'total sales']",
    "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/yaml-reference"
   },
   "sources": [
    {
     "t": "Unity Catalog metric views",
     "u": "https://docs.databricks.com/aws/en/metric-views/"
    },
    {
     "t": "Metric view YAML syntax reference",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/yaml-reference"
    },
    {
     "t": "Agent metadata in metric views",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/agent-metadata"
    },
    {
     "t": "Query metric views",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/query"
    },
    {
     "t": "Use metric views with external BI tools",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/bi-tools"
    },
    {
     "t": "Metric view feature availability",
     "u": "https://docs.databricks.com/aws/en/business-semantics/metric-views/feature-availability"
    },
    {
     "t": "Unity Catalog Business Semantics: Now GA and Open Source (Apr 2, 2026)",
     "u": "https://www.databricks.com/blog/redefining-semantics-data-layer-future-bi-and-ai"
    },
    {
     "t": "Unity Catalog semantics (docs)",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/"
    },
    {
     "t": "What's new with Unity Catalog at Data + AI Summit 2026 (Jun 16, 2026)",
     "u": "https://www.databricks.com/blog/whats-new-unity-catalog-data-ai-summit-2026"
    },
    {
     "t": "Introducing Genie One, Genie Agents, and Genie Ontology (Jun 16, 2026)",
     "u": "https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents"
    },
    {
     "t": "How Genie Ontology powers product development at Databricks (Oct 5, 2026)",
     "u": "https://www.databricks.com/blog/how-genie-ontology-powers-product-development-databricks"
    },
    {
     "t": "Genie Ontology (docs)",
     "u": "https://docs.databricks.com/aws/en/genie/genie-ontology"
    },
    {
     "t": "AI/BI and Genie One release notes 2026",
     "u": "https://docs.databricks.com/gcp/en/ai-bi/release-notes/2026"
    },
    {
     "t": "AI/BI release notes 2025",
     "u": "https://docs.databricks.com/aws/en/ai-bi/release-notes/2025"
    },
    {
     "t": "Create and manage a Genie Agent",
     "u": "https://docs.databricks.com/aws/en/genie-agents/set-up"
    },
    {
     "t": "Tune Genie Agent quality",
     "u": "https://docs.databricks.com/aws/en/genie-agents/tune-quality"
    },
    {
     "t": "Chat in Genie One",
     "u": "https://docs.databricks.com/aws/en/genie-one/chat"
    },
    {
     "t": "The Genie One MCP is now Generally Available (Sep 22, 2026)",
     "u": "https://www.databricks.com/blog/genie-one-mcp-now-generally-available"
    },
    {
     "t": "Managed MCP servers",
     "u": "https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp"
    },
    {
     "t": "AI Search (formerly Vector Search)",
     "u": "https://docs.databricks.com/aws/en/vector-search/vector-search"
    },
    {
     "t": "Agent Bricks",
     "u": "https://docs.databricks.com/aws/en/generative-ai/agent-bricks/"
    },
    {
     "t": "Lakebase Postgres",
     "u": "https://docs.databricks.com/aws/en/oltp/"
    },
    {
     "t": "Databricks platform release notes, April 2026",
     "u": "https://docs.databricks.com/aws/en/release-notes/product/2026/april"
    },
    {
     "t": "Apache Spark SPARK-54119: Metrics & semantic modeling in Spark",
     "u": "https://issues.apache.org/jira/browse/SPARK-54119"
    },
    {
     "t": "AI-generated comments",
     "u": "https://docs.databricks.com/aws/en/comments/ai-comments"
    },
    {
     "t": "Announcing GA of Databricks Assistant and AI-generated comments",
     "u": "https://www.databricks.com/blog/announcing-general-availability-databricks-assistant-and-ai-generated-comments"
    },
    {
     "t": "ALTER TABLE ... COLUMN clause",
     "u": "https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-alter-table-manage-column"
    },
    {
     "t": "Data Classification release notes",
     "u": "https://docs.databricks.com/aws/en/release-notes/data-classification"
    },
    {
     "t": "Data Classification",
     "u": "https://docs.databricks.com/aws/en/data-governance/unity-catalog/data-classification"
    },
    {
     "t": "Lineage system tables",
     "u": "https://docs.databricks.com/aws/en/admin/system-tables/lineage"
    },
    {
     "t": "Test and monitor a Genie Agent",
     "u": "https://docs.databricks.com/aws/en/genie-agents/monitor"
    }
   ],
   "verified": "2026-10-24",
   "logo": "databricks",
   "worksWith": [],
   "enrichHowTo": "Generate comments in Catalog Explorer with AI-generated comments, review each one, then save. For scripted writes, run ALTER TABLE ... ALTER COLUMN with several COMMENT clauses in one statement. Then add a Genie benchmark set and re-run it after each metadata change.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "ALTER TABLE students ALTER COLUMN\n  name COMMENT 'full name',\n  email COMMENT 'primary email';",
    "u": "https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-alter-table-manage-column"
   }
  },
  {
   "id": "fabric",
   "name": "Microsoft Fabric + Power BI",
   "category": "lakehouse",
   "tagline": "Unified analytics platform with OneLake, Power BI semantic models, and AI agents.",
   "verdict": "native",
   "verdictNote": "Power BI semantic models are a native, governed semantic layer that Copilot, data agents and Fabric IQ MCP read, though Prep data for AI and the ontology item are Preview.",
   "artifacts": [
    {
     "name": "Power BI semantic model (TMDL, DAX measures, relationships)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "TMDL (text folder), TMSL/TOM, DAX",
     "url": "https://learn.microsoft.com/en-us/analysis-services/tmdl/tmdl-overview"
    },
    {
     "name": "Prep data for AI: AI instructions",
     "kind": "annotations",
     "status": "Preview",
     "since": "",
     "format": "Free text on the model (10,000 characters), stored in LSDL; GUI in Desktop and service",
     "url": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions"
    },
    {
     "name": "Prep data for AI: AI data schema",
     "kind": "annotations",
     "status": "Preview",
     "since": "",
     "format": "Field subset selection on the model, stored in LSDL; GUI",
     "url": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-data-schema"
    },
    {
     "name": "Prep data for AI: verified answers",
     "kind": "annotations",
     "status": "Preview",
     "since": "",
     "format": "Trigger phrases plus a report visual and up to three filters, saved on the model; GUI",
     "url": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers"
    },
    {
     "name": "Linguistic schema and Q&A synonyms",
     "kind": "annotations",
     "status": "Deprecated",
     "since": "",
     "format": "Synonyms and phrasings in linguistic metadata (cultures/*.tmdl); Q&A setup GUI",
     "url": "https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-tooling-intro"
    },
    {
     "name": "Copilot in Power BI (ask data questions)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "Natural language to DAX over a semantic model",
     "url": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question"
    },
    {
     "name": "Fabric data agent",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "GUI and API; instructions, example queries and sources saved as item definition (Git, deployment pipelines)",
     "url": "https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent"
    },
    {
     "name": "Fabric IQ ontology item",
     "kind": "ontology",
     "status": "Preview",
     "since": "2025-11",
     "format": "GUI and API; import and export RDF, Turtle, OWL; can be generated from a semantic model",
     "url": "https://learn.microsoft.com/en-us/fabric/iq/ontology/overview"
    },
    {
     "name": "Graph in Microsoft Fabric",
     "kind": "graph-query",
     "status": "GA",
     "since": "2026-06",
     "format": "Labeled property graph over OneLake tables; GQL (ISO/IEC 39075)",
     "url": "https://learn.microsoft.com/en-us/fabric/graph/overview"
    },
    {
     "name": "Fabric IQ MCP server (Power BI reports and semantic models)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Remote MCP, read-only; tools: DiscoverArtifacts, GetSemanticModelSchema, ValueSearch, ExecuteQuery (DAX)",
     "url": "https://learn.microsoft.com/en-us/fabric/iq/connectors/fabric-iq-mcp"
    },
    {
     "name": "Power BI Authoring MCP server (hosted)",
     "kind": "mcp",
     "status": "Preview",
     "since": "",
     "format": "Remote MCP, https://api.fabric.microsoft.com/v1/mcp/powerbi/authoring; edits semantic models",
     "url": "https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp"
    },
    {
     "name": "Power BI Authoring MCP server (local)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Local stdio MCP (npm @microsoft/powerbi-modeling-mcp, VS Code extension); works on PBIP and TMDL files; not on macOS",
     "url": "https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp"
    },
    {
     "name": "Ontology MCP server",
     "kind": "mcp",
     "status": "Preview",
     "since": "",
     "format": "Remote MCP per ontology item (api.fabric.microsoft.com/v1/mcp/dataPlane/workspaces/{id}/items/{id}/ontologyEndpoint)",
     "url": "https://learn.microsoft.com/en-us/fabric/iq/ontology/how-to-use-ontology-mcp-server"
    },
    {
     "name": "Data agent as an MCP server",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "Remote MCP, one tool per published data agent (api.fabric.microsoft.com/v1/mcp/workspaces/{id}/dataagents/{id}/agent)",
     "url": "https://learn.microsoft.com/en-us/fabric/data-science/data-agent-mcp-server"
    },
    {
     "name": "Purview Unified Catalog business glossary",
     "kind": "glossary",
     "status": "GA",
     "since": "",
     "format": "Glossary terms under governance domains; link to data products, assets and columns (linking is Preview); GUI and API",
     "url": "https://learn.microsoft.com/en-us/purview/unified-catalog-glossary-terms"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "DAX measures live in the semantic model as TMDL or TOM objects. The ontology item imports them as metrics (Preview).",
     "u": "https://learn.microsoft.com/en-us/analysis-services/tmdl/tmdl-overview"
    },
    "dimensions": {
     "l": 3,
     "n": "Columns, hierarchies, display folders, sort-by-column and perspectives are declared in TMDL.",
     "u": "https://learn.microsoft.com/en-us/analysis-services/tmdl/tmdl-overview"
    },
    "relationships": {
     "l": 3,
     "n": "Declared model relationships (fromColumn, toColumn). Copilot still uses them for fields outside the AI data schema.",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-data-schema"
    },
    "synonyms": {
     "l": 2,
     "n": "AI instructions, synonyms, descriptions read by Copilot and data agent. Prep data for AI is Preview.",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai"
    },
    "verifiedQueries": {
     "l": 2,
     "n": "Verified answers bind phrases to visuals (Preview). Data agent takes question-query pairs for SQL and KQL sources, not semantic models.",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/data-agent-add-datasources"
    },
    "nl2sql": {
     "l": 3,
     "n": "Copilot in Power BI is GA. Data agent does NL2SQL, NL2DAX, NL2KQL; docs conflict on GA or Preview.",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent"
    },
    "ontology": {
     "l": 2,
     "n": "Ontology item: entity types, relationships, rules, metrics, data bindings. Preview since Ignite, November 2025.",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/ontology/overview"
    },
    "graph": {
     "l": 3,
     "n": "GQL over OneLake; GA per a Fabric blog post I could not fetch. Data agent NL2GQL source is Preview.",
     "u": "https://learn.microsoft.com/en-us/fabric/graph/overview"
    },
    "vector": {
     "l": 3,
     "n": "SQL database in Fabric: GA vector type and vector index. Data agent reads Azure AI Search index (Preview).",
     "u": "https://learn.microsoft.com/en-us/sql/sql-server/ai/vectors"
    },
    "mcp": {
     "l": 3,
     "n": "Fabric IQ MCP is GA and read-only. Authoring MCP: local GA, hosted Preview. Ontology MCP is Preview.",
     "u": "https://learn.microsoft.com/en-us/rest/api/fabric/articles/mcp-servers/fabric-mcp-servers-list"
    },
    "governance": {
     "l": 3,
     "n": "RLS and OLS apply via Fabric IQ MCP; RLS and CLS via data agent. Verified answers are no security boundary.",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/connectors/fabric-iq-mcp"
    },
    "openStandard": {
     "l": 2,
     "n": "TMDL is a documented text format. Ossie converter is initial and open source. Ontology imports RDF, OWL (Preview).",
     "u": "https://www.snowflake.com/en/blog/engineering/apache-ossie-microsoft-ecosystem-support/"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Copilot creates measure descriptions from the DAX formula in Power BI Desktop or web modeling (GA). Measures only. Needs Fabric capacity. semantic-link-labs can batch them.",
     "u": "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-measure-copilot-descriptions"
    },
    "bulkMetadata": {
     "l": 2,
     "n": "Data agent Python SDK update_description sets table and column descriptions for a data agent (Preview, preview runtime). semantic-link-labs edits semantic models in code.",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-schema-object-descriptions.md"
    },
    "autoClassify": {
     "l": 1,
     "n": "Microsoft Purview (separate product) classifies and labels. Fabric labels inherit at item level from Azure SQL or Synapse sources. Column-level classification not stated.",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/governance/service-security-sensitivity-label-inheritance-from-data-sources.md"
    },
    "sampleValues": {
     "l": 2,
     "n": "Instance value indexing (Preview runtime) searches semantic model column values to build DAX filters. Needs the Q&A setting, which retires in December 2026.",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/semantic-model-best-practices.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining found. NL2SQL retrieves from your example query library, not from past queries.",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-sql-sources.md"
    },
    "lineage": {
     "l": 0,
     "n": "Fabric lineage view is item level. Purview scans of Fabric items give item-level lineage, and sub-item lineage is not supported.",
     "u": "https://learn.microsoft.com/en-us/purview/data-map-lineage-fabric"
    },
    "evals": {
     "l": 2,
     "n": "Data agent evaluation SDK (Preview): ground truth DataFrame, evaluate_data_agent, results logging. evaluate_few_shots checks example SQL pairs. Feedback in Copilot (Preview) is read with list_feedback.",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/evaluate-data-agent.md"
    }
   },
   "offers": [
    "Power BI semantic models hold DAX measures, relationships, hierarchies, descriptions and synonyms in TMDL text files under Git.",
    "Prep data for AI saves AI instructions, AI data schema and verified answers in the model for Copilot and agents.",
    "Fabric data agent turns questions into SQL, DAX or KQL over up to five sources, with instructions and example queries.",
    "Fabric IQ MCP (GA) is a read-only remote server: schema lookup, value search and DAX execution under the caller's RLS.",
    "Ontology (Preview) models entities, relationships, rules and DAX-backed metrics, and binds them to lakehouse, warehouse and SQL sources.",
    "Graph in Fabric runs GQL over OneLake tables; the data agent can use it as a source (Preview)."
   ],
   "gaps": [
    "Prep data for AI and the ontology item are Preview; Learn pages disagree on some GA labels.",
    "Data agent accepts no example queries for semantic models; verified answers are visual-based, capped at 250 per model.",
    "Q&A retires (February 2027 on most Learn pages, December 2026 on one); Prep data for AI still requires Q&A enabled.",
    "Data agent replies cap at 25 rows and 25 columns, English only, read-only, up to five sources.",
    "Fabric IQ MCP covers reports and semantic models only; it does not support ontologies or data agents."
   ],
   "fillWith": [
    "Semantic Link Labs (Best Practice Analyzer, TMDL edits from notebooks)",
    "Fabric data agent Python SDK (evaluation against question-answer pairs)",
    "Purview Unified Catalog (business glossary)",
    "Apache Ossie converter (semantic model interchange)"
   ],
   "nl2sqlPath": "Publish a Fabric data agent over a Power BI semantic model, and keep AI instructions, AI data schema and verified answers in Prep data for AI, because the DAX tool ignores data agent level instructions for semantic models. For lakehouse or warehouse tables, add data source instructions and example queries to the data agent. Test the generated DAX or SQL with the data agent Python SDK, then expose the agent through its MCP endpoint or use Fabric IQ MCP for read-only DAX access.",
   "snippet": {
    "lang": "other",
    "title": "TMDL table with a description, a DAX measure and a relationship",
    "code": "/// Sales fact table\ntable Sales\n\n    /// Sum of quantity times net price\n    measure 'Sales Amount' = SUMX('Sales', 'Sales'[Quantity] * 'Sales'[Net Price])\n        formatString: $ #,##0\n\n    column 'Product Key'\n        dataType: int64\n        isHidden\n        sourceColumn: ProductKey\n\nrelationship cdb6e6a9-c9d1-42b9-b9e0-484a1bc7e123\n    fromColumn: Sales.'Product Key'\n    toColumn: Product.'Product Key'",
    "u": "https://learn.microsoft.com/en-us/analysis-services/tmdl/tmdl-overview"
   },
   "sources": [
    {
     "t": "TMDL overview",
     "u": "https://learn.microsoft.com/en-us/analysis-services/tmdl/tmdl-overview"
    },
    {
     "t": "Prepare your data for AI (Preview)",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai"
    },
    {
     "t": "Prep data for AI: AI instructions",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions"
    },
    {
     "t": "Prep data for AI: AI data schemas",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-data-schema"
    },
    {
     "t": "Prep data for AI: verified answers",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers"
    },
    {
     "t": "Intro to Q&A tooling (Q&A retirement notice)",
     "u": "https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-tooling-intro"
    },
    {
     "t": "Ask data questions with Copilot and Fabric IQ",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question"
    },
    {
     "t": "Fabric data agent concepts",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent"
    },
    {
     "t": "Add a data source to Data Agent",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/data-agent-add-datasources"
    },
    {
     "t": "Semantic model best practices for data agent",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/semantic-model-best-practices"
    },
    {
     "t": "Data agent as MCP server",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/data-agent-mcp-server"
    },
    {
     "t": "What is Fabric IQ?",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/overview"
    },
    {
     "t": "What is ontology (preview)?",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/ontology/overview"
    },
    {
     "t": "Use Ontology MCP Server (Preview)",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/ontology/how-to-use-ontology-mcp-server"
    },
    {
     "t": "Get started with the Fabric IQ MCP server",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/connectors/fabric-iq-mcp"
    },
    {
     "t": "Overview of the Power BI MCP servers",
     "u": "https://learn.microsoft.com/en-us/power-bi/developer/mcp/mcp-servers-overview"
    },
    {
     "t": "Power BI Authoring MCP server",
     "u": "https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp"
    },
    {
     "t": "Choose a Microsoft Fabric MCP server",
     "u": "https://learn.microsoft.com/en-us/rest/api/fabric/articles/mcp-servers/fabric-mcp-servers-list"
    },
    {
     "t": "What is graph in Microsoft Fabric?",
     "u": "https://learn.microsoft.com/en-us/fabric/graph/overview"
    },
    {
     "t": "Labeled Property Graph in Fabric (RDF not supported)",
     "u": "https://learn.microsoft.com/en-us/fabric/graph/graph-data-models"
    },
    {
     "t": "Overview of Copilot in Fabric",
     "u": "https://learn.microsoft.com/en-us/fabric/fundamentals/copilot-fabric-overview"
    },
    {
     "t": "Release status of AI and Copilot in Fabric",
     "u": "https://learn.microsoft.com/en-us/fabric/fundamentals/copilot-ai-feature-state"
    },
    {
     "t": "Glossary terms in Unified Catalog",
     "u": "https://learn.microsoft.com/en-us/purview/unified-catalog-glossary-terms"
    },
    {
     "t": "Search for and manage data assets in Unified Catalog",
     "u": "https://learn.microsoft.com/en-us/purview/unified-catalog-data-assets-search"
    },
    {
     "t": "Breaking Down Semantic Silos: Microsoft Ecosystem Support Comes to Apache Ossie (Snowflake blog)",
     "u": "https://www.snowflake.com/en/blog/engineering/apache-ossie-microsoft-ecosystem-support/"
    },
    {
     "t": "Fabric IQ: The Semantic Foundation for Enterprise AI (Fabric blog, Ignite 2025)",
     "u": "https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-iq-the-semantic-foundation-for-enterprise-ai/5172473"
    },
    {
     "t": "Graph in Fabric (Generally Available) (Fabric blog)",
     "u": "https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/graph-in-fabric-generally-available/5190748"
    },
    {
     "t": "Fabric IQ: The semantic layer powering trusted AI agents at enterprise scale (Fabric blog, Build 2026)",
     "u": "https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-iq-the-semantic-layer-powering-trusted-ai-agents-at-enterprise-scale/5190739"
    },
    {
     "t": "Release status of AI and Copilot in Fabric",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/fundamentals/copilot-ai-feature-state.md"
    },
    {
     "t": "Use Copilot to create measure descriptions",
     "u": "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-measure-copilot-descriptions"
    },
    {
     "t": "semantic-link-labs code examples",
     "u": "https://raw.githubusercontent.com/wiki/microsoft/semantic-link-labs/Code-Examples.md"
    },
    {
     "t": "Semantic model best practices for data agent",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/semantic-model-best-practices.md"
    },
    {
     "t": "Fabric data agent concepts",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/concept-data-agent.md"
    },
    {
     "t": "Fabric data agent runtime",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-runtime.md"
    },
    {
     "t": "Data agent schema object descriptions",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-schema-object-descriptions.md"
    },
    {
     "t": "Data agent example queries",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-example-queries.md"
    },
    {
     "t": "Evaluate your data agent (preview)",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/evaluate-data-agent.md"
    },
    {
     "t": "Data agent feedback in Microsoft Copilot",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-microsoft-copilot-feedback.md"
    },
    {
     "t": "Data agent SQL sources",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-sql-sources.md"
    },
    {
     "t": "Data agent Python SDK",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/fabric-data-agent-sdk.md"
    },
    {
     "t": "Fabric lineage",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/governance/lineage.md"
    },
    {
     "t": "How to get lineage from Fabric items into Microsoft Purview",
     "u": "https://learn.microsoft.com/en-us/purview/data-map-lineage-fabric"
    },
    {
     "t": "Sensitivity label inheritance from data sources",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/governance/service-security-sensitivity-label-inheritance-from-data-sources.md"
    },
    {
     "t": "Microsoft Purview and Fabric",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/governance/microsoft-purview-fabric.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Add descriptions and synonyms to tables, columns and measures in the semantic model. Draft measure descriptions with Copilot or with generate_measure_descriptions in semantic-link-labs (needs F64 or higher), then review them. For SQL sources, set schema descriptions with update_description and add example queries with add_fewshots in the data agent SDK.",
   "bulkSnippet": {
    "lang": "python",
    "code": "from fabric.dataagent.client import FabricDataAgentManagement\n\nagent = FabricDataAgentManagement(\"<data-agent-name>\")\ndatasource = agent.get_datasources()[0]\ntable_path = (\"Schemas\", \"dbo\", \"Tables\", \"adoptions\")\ndatasource.update_description({\n    table_path: \"Contains one row for each pet adoption transaction.\"\n})",
    "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-schema-object-descriptions.md"
   }
  },
  {
   "id": "teradata",
   "name": "Teradata Vantage / VantageCloud",
   "category": "mpp",
   "tagline": "MPP analytics platform with an open-source MCP server and Enterprise Vector Store.",
   "verdict": "none",
   "verdictNote": "I found no GA native semantic model object; the MCP server lets teams define semantic tools in YAML, and the 2026 knowledge platform claims are not confirmed in docs.",
   "artifacts": [
    {
     "name": "Teradata MCP Server (Community Edition, MIT)",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-07",
     "format": "Python package, YAML tool definitions",
     "url": "https://github.com/Teradata/teradata-mcp-server"
    },
    {
     "name": "MCP server semantic layer tools (YAML tools, prompts, cubes)",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": "YAML",
     "url": "https://github.com/Teradata/teradata-mcp-server"
    },
    {
     "name": "Enterprise Vector Store",
     "kind": "vector",
     "status": "Unverified",
     "since": "2026-03",
     "format": "SQL, API",
     "url": "https://www.teradata.com/platform/enterprise-vector-store"
    },
    {
     "name": "Teradata Autonomous Knowledge Platform",
     "kind": "knowledge-graph",
     "status": "Announced",
     "since": "2026-05",
     "format": "Platform",
     "url": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    },
    {
     "name": "Teradata AI Studio and Tera natural-language workspace",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "2026-05",
     "format": "GUI",
     "url": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "Cubes can be defined in YAML in the community MCP server. No native metric object found.",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    },
    "dimensions": {
     "l": 1,
     "n": "Same YAML cubes in the MCP server. No native dimension or hierarchy object found.",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    },
    "relationships": {
     "l": 0,
     "n": "No declared semantic relationship object found. SQL joins and views are the usual route.",
     "u": ""
    },
    "synonyms": {
     "l": 1,
     "n": "MCP server customization guide mentions glossary terms and prompts in YAML. I did not read that guide.",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "Not found. Teams keep example queries in MCP prompts or external eval sets.",
     "u": ""
    },
    "nl2sql": {
     "l": 1,
     "n": "Natural language access runs through the MCP server and AI agents. Tera workspace is announced; GA and SQL generation not confirmed.",
     "u": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    },
    "ontology": {
     "l": 0,
     "n": "Analysts describe a knowledge graph direction, but Teradata release text I saw does not confirm a shipped ontology feature.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query feature confirmed for Vantage in my sources. Not checked in docs.",
     "u": ""
    },
    "vector": {
     "l": 2,
     "n": "Enterprise Vector Store announced Mar 2026 with hybrid search and multimodal embeddings. GA status not confirmed.",
     "u": "https://www.teradata.com/platform/enterprise-vector-store"
    },
    "mcp": {
     "l": 1,
     "n": "Open-source, community-supported MCP server under MIT. No SLA stated. A commercial version was reported as planned for H1 2026; not confirmed shipped.",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    },
    "governance": {
     "l": 1,
     "n": "Search summary says the server uses Teradata credentials so existing permissions apply. Not checked against docs.",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    },
    "openStandard": {
     "l": 0,
     "n": "No Teradata role found in Apache Ossie (OSI) sources I saw.",
     "u": ""
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No AI description generator for VantageCloud found. Could not search further, so this is not proven.",
     "u": ""
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT statement sets comments on columns and tables by SQL. No bulk API or file import found.",
     "u": "https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/SQL-Data-Manipulation-Language/Statement-Syntax/COMMENT-Comment-Retrieving-Form/COMMENT-Syntax-Comment-Retrieving-Form"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification found in the pages I could check.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No value sampling for NL-to-SQL found. The open-source MCP server has a rag module and tdvs vector store module, not value matching.",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    },
    "queryHistory": {
     "l": 0,
     "n": "No mining of query history for AI suggestions found. Not checked in depth.",
     "u": ""
    },
    "lineage": {
     "l": 1,
     "n": "No native lineage found. DataHub's Teradata source captures table and column lineage; data.world's collector traces view column lineage.",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/teradata.md"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found. The MCP server repo page does not mention evaluation.",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    }
   },
   "offers": [
    "Open-source MCP server with tool groups for queries, RAG, vector store, feature store, data quality and admin.",
    "YAML lets teams define custom tools, prompts and cubes without writing Python.",
    "Enterprise Vector Store for vector and hybrid search, announced Mar 2026.",
    "Existing Teradata permissions apply to MCP tool calls, per search summaries."
   ],
   "gaps": [
    "No confirmed GA native semantic model object with metrics, dimensions and joins.",
    "MCP server is community supported with no formal SLA stated in the repo.",
    "No verified query store or confirmed graph query feature found.",
    "Autonomous Knowledge Platform was due GA on Teradata Cloud in Q3 2026; I did not confirm it shipped."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "AtScale",
    "Custom MCP YAML tools",
    "LangChain"
   ],
   "nl2sqlPath": "Run the Teradata MCP server, define cubes, prompts and glossary terms in YAML, and let an agent call those tools. Keep SQL generation grounded with an external semantic layer if you need governed metrics. Check the Autonomous Knowledge Platform docs before depending on it.",
   "snippet": {
    "lang": "other",
    "title": "Vendor docs not fetched. No snippet given to avoid invented syntax.",
    "code": "",
    "u": "https://github.com/Teradata/teradata-mcp-server"
   },
   "sources": [
    {
     "t": "Teradata MCP Server (GitHub)",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    },
    {
     "t": "Introducing the Teradata Autonomous Knowledge Platform",
     "u": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    },
    {
     "t": "Teradata Enables AI Agents (press release)",
     "u": "https://www.teradata.com/Press-Releases/2026/Teradata-Enables-AI-Agents"
    },
    {
     "t": "Enterprise Vector Store",
     "u": "https://www.teradata.com/platform/enterprise-vector-store"
    },
    {
     "t": "Teradata MCP Server Business Wire release, Jul 2025",
     "u": "https://www.businesswire.com/news/home/20250729435894/en"
    },
    {
     "t": "Teradata Moves From AgentStack to Autonomous Knowledge Platform",
     "u": "https://www.softwarereviews.com/vendor-technology-notes/teradata-moves-from-agentstack-to-autonomous-knowledge-platform"
    },
    {
     "t": "COMMENT retrieving form syntax (Vantage)",
     "u": "https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/SQL-Data-Manipulation-Language/Statement-Syntax/COMMENT-Comment-Retrieving-Form/COMMENT-Syntax-Comment-Retrieving-Form"
    },
    {
     "t": "COMMENT placing form (QueryGrid)",
     "u": "https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.06/Configuring-and-Using-Links/Using-Links/Using-a-Teradata-to-TargetConnector-Link/SQL-Command-Reference-for-the-Teradata-Initiator-Connector/COMMENT-Comment-Placing-Form"
    },
    {
     "t": "DataHub Teradata source",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/teradata.md"
    },
    {
     "t": "data.world Teradata collector",
     "u": "https://docs.data.world/en/210736-about-the-teradata-collector.html"
    }
   ],
   "verified": "2026-10-24",
   "logo": "teradata",
   "worksWith": [],
   "enrichHowTo": "Write column and table comments with the COMMENT statement, one per object, in a script. The Teradata MCP server (MIT, community project) can also load domain tools, prompts and cubes from YAML for an agent. Review all text by hand, because no generator was found.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "-- Placing form: COMMENT [ON] object-kind name IS 'text'\nCOMMENT ON COLUMN sales.orders.status IS 'open, shipped, or cancelled. Exclude cancelled from revenue.';",
    "u": "https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.06/Configuring-and-Using-Links/Using-Links/Using-a-Teradata-to-TargetConnector-Link/SQL-Command-Reference-for-the-Teradata-Initiator-Connector/COMMENT-Comment-Placing-Form"
   }
  },
  {
   "id": "oracle",
   "name": "Oracle Database / Autonomous AI Database",
   "category": "oltp",
   "tagline": "Converged database with analytic views, Select AI, SQL property graphs, vector search and an MCP server.",
   "verdict": "partial",
   "verdictNote": "Analytic Views are a long-standing in-database semantic layer and Select AI reads database metadata, but I could not confirm that Select AI reads analytic view definitions.",
   "artifacts": [
    {
     "name": "Analytic Views",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "SQL DDL (CREATE ANALYTIC VIEW), GUI",
     "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/CREATE-ANALYTIC-VIEW.html"
    },
    {
     "name": "Select AI (natural language to SQL)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "PL/SQL (DBMS_CLOUD_AI), SQL",
     "url": "https://www.oracle.com/autonomous-database/select-ai/natural-language/"
    },
    {
     "name": "Select AI profile comments and annotations as prompt metadata",
     "kind": "annotations",
     "status": "Unverified",
     "since": "",
     "format": "AI profile attributes",
     "url": "https://blogs.oracle.com/machinelearning+selectai/best-practices-to-improve-nl2sql-accuracy-with-oracle-select-ai"
    },
    {
     "name": "Select AI Agent",
     "kind": "agent",
     "status": "Unverified",
     "since": "2025-10",
     "format": "PL/SQL",
     "url": "https://infoworld.com/article/4072128/oracle-targets-agentic-use-cases-with-ai-database-26ai.html"
    },
    {
     "name": "Autonomous AI Database MCP Server",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-05",
     "format": "MCP endpoint, tools defined with Select AI Agent",
     "url": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/about-mcp-server.html"
    },
    {
     "name": "SQL property graphs (SQL/PGQ, GRAPH_TABLE)",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "SQL DDL, SQL",
     "url": "https://docs.oracle.com/en/database/oracle/oracle-database/26/nfcoa/graph.html"
    },
    {
     "name": "Oracle AI Vector Search (VECTOR data type)",
     "kind": "vector",
     "status": "GA",
     "since": "",
     "format": "SQL",
     "url": "https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/overview-ai-vector-search.html"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Analytic views define measures over a fact source. Page checked is the 19c reference; I did not read the 26ai page.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/CREATE-ANALYTIC-VIEW.html"
    },
    "dimensions": {
     "l": 3,
     "n": "Analytic views declare attribute dimensions and hierarchies. Queries use a HIERARCHIES clause instead of joins and GROUP BY.",
     "u": "https://blogs.oracle.com/autonomous-ai-database/querying-oracle-analytic-views-using-power-bi-tableau-and-other-bi-tools"
    },
    "relationships": {
     "l": 3,
     "n": "Joins and aggregation rules live inside the analytic view. Plain foreign key joins are handled by SQL.",
     "u": "https://blogs.oracle.com/autonomous-ai-database/querying-oracle-analytic-views-using-power-bi-tableau-and-other-bi-tools"
    },
    "synonyms": {
     "l": 2,
     "n": "Select AI profile can include comments, annotations and constraints in the prompt. I could not confirm which attributes are GA.",
     "u": "https://blogs.oracle.com/machinelearning+selectai/best-practices-to-improve-nl2sql-accuracy-with-oracle-select-ai"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "Not found in sources I could reach. Teams add few-shot examples in their own prompts or use a separate eval set.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Select AI turns questions into SQL. Conversations keep chat history. Needs an AI profile and an LLM provider.",
     "u": "https://www.oracle.com/autonomous-database/select-ai/natural-language/"
    },
    "ontology": {
     "l": 0,
     "n": "No object, link or action layer found. Teams use analytic views plus property graphs instead.",
     "u": ""
    },
    "graph": {
     "l": 3,
     "n": "26ai supports SQL property graphs and SQL/PGQ with GRAPH_TABLE. PGQL also supported. The graph holds metadata, not copied data.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/nfcoa/graph.html"
    },
    "vector": {
     "l": 3,
     "n": "VECTOR data type with int8, float32, float64 and binary formats. Needs COMPATIBLE 23.4.0 or higher.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/overview-ai-vector-search.html"
    },
    "mcp": {
     "l": 3,
     "n": "Managed MCP server for Autonomous AI Database Serverless. Exposes Select AI Agent tools, including NL2SQL and RAG. OAuth 2.1 identity providers supported.",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/about-mcp-server.html"
    },
    "governance": {
     "l": 3,
     "n": "Oracle says the MCP server respects database roles, auditing and VPD policies. I did not check analytic view specific grants.",
     "u": "https://blogs.oracle.com/machinelearning/announcing-the-oracle-autonomous-ai-database-mcp-server"
    },
    "openStandard": {
     "l": 0,
     "n": "No Oracle role found in Apache Ossie (OSI) sources I saw. Analytic view definitions are Oracle SQL only.",
     "u": ""
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No feature that drafts comments or annotations with an LLM found. Select AI only reads comments and annotations you write.",
     "u": ""
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT ON and ANNOTATIONS DDL, by SQL script. Annotations are 26ai (Oracle blog says backported to 19.28). No bulk API found.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/19/adfns/registering-application-data-usage-database.html"
    },
    "autoClassify": {
     "l": 3,
     "n": "Oracle Data Safe, a separate OCI service, discovers and classifies sensitive data with 150+ predefined types. It does not feed Select AI.",
     "u": "https://www.oracle.com/database/security/data-safe/"
    },
    "sampleValues": {
     "l": 0,
     "n": "No value sampling found. Select AI matches literals case-insensitively by default; profile attribute case_sensitive_values turns that off.",
     "u": "https://blogs.oracle.com/machinelearning/select-ai-enhances-texttosql-support"
    },
    "queryHistory": {
     "l": 0,
     "n": "No mining of query history for joins, metrics or examples found in the pages I could check.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "No native column-level lineage confirmed. OCI Data Catalog has a lineage page, but its column-level scope was not checked.",
     "u": ""
    },
    "evals": {
     "l": 3,
     "n": "Select AI feedback: positive feedback stores prompt and SQL in a per-profile vector index used as hints. 26ai only. No benchmark runner found.",
     "u": "https://docs.oracle.com/iaas/autonomous-database-serverless/doc/select-ai-feedback.html"
    }
   },
   "offers": [
    "Analytic Views: measures, dimensions and hierarchies stored in the database and queried with SQL.",
    "Select AI generates SQL from questions using schema metadata, comments and annotations from an AI profile.",
    "Managed MCP server exposes Select AI Agent tools with database identity and VPD.",
    "SQL property graphs (SQL/PGQ) and AI Vector Search run in the same engine as the data.",
    "BI tools such as Power BI and Tableau can query analytic views, per an Oracle blog."
   ],
   "gaps": [
    "I found no source showing Select AI reads analytic view definitions as semantic context. Treat as unconfirmed.",
    "No verified question-to-SQL store found in the sources I reached.",
    "No ontology layer and no sign of Apache Ossie or other open spec support.",
    "MCP server is for Autonomous AI Database Serverless only, per Oracle docs. On-prem is not covered."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "AtScale",
    "Oracle APEX review step",
    "Custom prompt examples"
   ],
   "nl2sqlPath": "Add descriptive comments and annotations to tables and views, set up a Select AI profile, and limit it to a known object list. Expose tools through Select AI Agent and the Autonomous AI Database MCP server. Test whether your analytic views help generation before relying on them.",
   "snippet": {
    "lang": "other",
    "title": "Oracle docs not fetched. No snippet given to avoid invented syntax.",
    "code": "",
    "u": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/CREATE-ANALYTIC-VIEW.html"
   },
   "sources": [
    {
     "t": "CREATE ANALYTIC VIEW (19c)",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/CREATE-ANALYTIC-VIEW.html"
    },
    {
     "t": "Analytic Views: An In-Database Semantic Layer",
     "u": "https://blogs.oracle.com/autonomous-ai-database/querying-oracle-analytic-views-using-power-bi-tableau-and-other-bi-tools"
    },
    {
     "t": "About MCP Server",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/about-mcp-server.html"
    },
    {
     "t": "Announcing the Oracle Autonomous AI Database MCP Server",
     "u": "https://blogs.oracle.com/machinelearning/announcing-the-oracle-autonomous-ai-database-mcp-server"
    },
    {
     "t": "Best practices to improve NL2SQL accuracy with Oracle Select AI",
     "u": "https://blogs.oracle.com/machinelearning+selectai/best-practices-to-improve-nl2sql-accuracy-with-oracle-select-ai"
    },
    {
     "t": "Select AI natural language",
     "u": "https://www.oracle.com/autonomous-database/select-ai/natural-language/"
    },
    {
     "t": "Oracle AI Vector Search overview",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/overview-ai-vector-search.html"
    },
    {
     "t": "Oracle AI Database 26ai graph",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/nfcoa/graph.html"
    },
    {
     "t": "Select AI feedback",
     "u": "https://docs.oracle.com/iaas/autonomous-database-serverless/doc/select-ai-feedback.html"
    },
    {
     "t": "Registering application data usage (annotation DDL, 19c guide)",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/19/adfns/registering-application-data-usage-database.html"
    },
    {
     "t": "Oracle Data Safe",
     "u": "https://www.oracle.com/database/security/data-safe/"
    },
    {
     "t": "Select AI enhances text-to-SQL support",
     "u": "https://blogs.oracle.com/machinelearning/select-ai-enhances-texttosql-support"
    },
    {
     "t": "Best practices to improve NL2SQL accuracy with Select AI",
     "u": "https://blogs.oracle.com/machinelearning/best-practices-to-improve-nl2sql-accuracy-with-oracle-select-ai"
    },
    {
     "t": "Interact with metadata to improve Select AI SQL query generation (release note)",
     "u": "https://docs.oracle.com/en-us/iaas/releasenotes/autonomous-database-dedicated/adbd-selectai-sqlquerygen.htm"
    },
    {
     "t": "oracle/skills: Select AI (GitHub)",
     "u": "https://github.com/oracle/skills/blob/main/db/features/select-ai.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Write business meaning in table and column COMMENT ON text and in ANNOTATIONS, then set the Select AI profile attributes comments and annotations to true. Add annotations with ALTER TABLE ... ANNOTATIONS (ADD name 'value'). Record good answers with Select AI FEEDBACK so they become hints.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "-- ADD is the default operation; value text is free-form\nALTER TABLE sales.orders ANNOTATIONS (ADD Description 'One row per customer order. Amounts in USD.');\n-- Then turn it on in the Select AI profile: \"annotations\": true",
    "u": "https://docs.oracle.com/en/database/oracle/oracle-database/19/adfns/registering-application-data-usage-database.html"
   }
  },
  {
   "id": "postgres",
   "name": "PostgreSQL",
   "category": "oltp",
   "tagline": "Open-source relational database, the default OLTP store for application data.",
   "verdict": "none",
   "verdictNote": "Core Postgres has only COMMENT ON and views; it has no metric, dimension, or semantic-model object.",
   "artifacts": [
    {
     "name": "COMMENT ON (table and column comments)",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "SQL DDL",
     "url": "https://www.postgresql.org/docs/current/sql-comment.html"
    },
    {
     "name": "pgvector extension",
     "kind": "vector",
     "status": "GA",
     "since": "",
     "format": "SQL extension (HNSW, IVFFlat)",
     "url": "https://github.com/pgvector/pgvector"
    },
    {
     "name": "Apache AGE extension (openCypher)",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "SQL extension plus openCypher",
     "url": "https://github.com/apache/age"
    },
    {
     "name": "AlloyDB AI natural language (alloydb_ai_nl)",
     "kind": "nl2sql",
     "status": "Preview",
     "since": "",
     "format": "SQL functions and config (alloydb_ai_nl.get_sql)",
     "url": "https://docs.cloud.google.com/alloydb/docs/ai/natural-language-overview"
    },
    {
     "name": "AlloyDB QueryData (context sets, query blueprints, facets)",
     "kind": "agent",
     "status": "Preview",
     "since": "2026-04",
     "format": "API, MCP Toolbox",
     "url": "https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview"
    },
    {
     "name": "azure_ai extension (embeddings and Azure AI services; AI functions in Preview)",
     "kind": "vector",
     "status": "GA",
     "since": "2024-05",
     "format": "SQL extension",
     "url": "https://learn.microsoft.com/en-us/azure/postgresql/azure-ai/generative-ai-azure-overview"
    },
    {
     "name": "Supabase Assistant (dashboard AI)",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "2024-12",
     "format": "Dashboard chat panel",
     "url": "https://supabase.com/blog/supabase-ai-assistant-v2"
    },
    {
     "name": "Supabase MCP server (hosted)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP over HTTP, OAuth",
     "url": "https://supabase.com/docs/guides/getting-started/mcp"
    },
    {
     "name": "Neon MCP server (hosted)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP over Streamable HTTP, OAuth or API key",
     "url": "https://neon.com/docs/ai/neon-mcp-server"
    },
    {
     "name": "Postgres MCP Pro (crystaldba, MIT)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Open-source MCP server, restricted or unrestricted mode",
     "url": "https://github.com/crystaldba/postgres-mcp"
    },
    {
     "name": "MCP Toolbox for Databases (Google, open source)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Open-source MCP server, supports PostgreSQL, AlloyDB, Cloud SQL, ClickHouse",
     "url": "https://github.com/googleapis/genai-toolbox"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "No metric objects in core Postgres. Teams define metrics in Cube, dbt MetricFlow, or Wren AI MDL.",
     "u": "https://docs.getdbt.com/docs/build/about-metricflow"
    },
    "dimensions": {
     "l": 1,
     "n": "No dimension or time-grain objects. Cube, MetricFlow, and Wren AI MDL declare them outside the database.",
     "u": "https://docs.cube.dev/docs/data-modeling/overview"
    },
    "relationships": {
     "l": 3,
     "n": "Foreign keys are native and readable through information_schema. Business-level join paths come from Cube or Wren AI MDL.",
     "u": "https://www.postgresql.org/docs/current/ddl-constraints.html"
    },
    "synonyms": {
     "l": 3,
     "n": "COMMENT ON stores free text on tables and columns. No synonym field. Every connected role can read comments.",
     "u": "https://www.postgresql.org/docs/current/sql-comment.html"
    },
    "verifiedQueries": {
     "l": 1,
     "n": "No store in core Postgres. AlloyDB offers query blueprints and templates in Preview.",
     "u": "https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview"
    },
    "nl2sql": {
     "l": 1,
     "n": "None in core. AlloyDB QueryData is Preview (2026-04), alloydb_ai_nl is Pre-GA, Supabase Assistant is dashboard-only.",
     "u": "https://cloud.google.com/blog/products/databases/introducing-querydata-for-near-100-percent-accurate-data-agents"
    },
    "ontology": {
     "l": 0,
     "n": "None. Cube and Wren AI MDL model entities above tables, but these are semantic models, not ontologies.",
     "u": "https://github.com/Canner/WrenAI"
    },
    "graph": {
     "l": 1,
     "n": "Apache AGE adds openCypher. SQL/PGQ was committed 2026-03-16, reverted 2026-09-07, and is absent from PostgreSQL 19.",
     "u": "https://www.postgresql.org/message-id/E1x3f62-00000003sxF-0zQO@gemulon.postgresql.org"
    },
    "vector": {
     "l": 1,
     "n": "pgvector extension: vector, halfvec, bit, and sparsevec types with HNSW and IVFFlat indexes. Not in core.",
     "u": "https://github.com/pgvector/pgvector"
    },
    "mcp": {
     "l": 1,
     "n": "No first-party server. Reference server archived 2025-05-29. Use Postgres MCP Pro, Supabase MCP, Neon MCP, or MCP Toolbox.",
     "u": "https://github.com/modelcontextprotocol/servers-archived"
    },
    "governance": {
     "l": 3,
     "n": "Roles, GRANT, and row-level security apply to the agent role. Comments are visible to every connected role.",
     "u": "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"
    },
    "openStandard": {
     "l": 1,
     "n": "No semantic spec in Postgres. MetricFlow (Apache-2.0) and the Wren AI engine (Apache-2.0) are open-source options.",
     "u": "https://docs.getdbt.com/docs/build/about-metricflow"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "Core Postgres has no description generator. Not checked for Supabase or AlloyDB features.",
     "u": ""
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT ON TABLE and COLUMN by SQL script. No bulk or file-import command; loop over objects. Comments are readable by any role.",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/ref/comment.sgml"
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value or entity-matching feature in core Postgres.",
     "u": ""
    },
    "queryHistory": {
     "l": 0,
     "n": "pg_stat_statements tracks statement statistics. It does not suggest joins, metrics or examples.",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/pgstatstatements.sgml"
    },
    "lineage": {
     "l": 0,
     "n": "No native lineage. pg_depend tracks object dependencies, not column lineage; not checked in docs.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling in core Postgres.",
     "u": ""
    }
   },
   "offers": [
    "COMMENT ON stores free-text descriptions on tables and columns. Any connected role can read them.",
    "Foreign keys, constraints, and information_schema give an agent declared join paths and types.",
    "Roles, GRANT, and row-level security apply to every query an agent runs.",
    "pgvector adds vector columns with HNSW and IVFFlat indexes for retrieval over data or metadata.",
    "Managed services add NL-to-SQL, for example AlloyDB QueryData (Preview, 2026-04) with context sets and query blueprints.",
    "Several MCP servers exist: Postgres MCP Pro, Supabase MCP, Neon MCP, and Google MCP Toolbox for Databases."
   ],
   "gaps": [
    "No metric, dimension, or synonym objects. Business definitions live only in free-text comments.",
    "SQL/PGQ was committed 2026-03-16 and reverted 2026-09-07. PostgreSQL 19 ships without graph queries.",
    "No first-party MCP server. The reference Postgres MCP server was archived on 2025-05-29.",
    "Core has no NL-to-SQL. AlloyDB and Supabase features work only on those services.",
    "Comments are visible to every connected role, so they cannot hold sensitive context."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer (MetricFlow)",
    "Wren AI",
    "Postgres MCP Pro",
    "MCP Toolbox for Databases",
    "Apache AGE",
    "pgvector"
   ],
   "nl2sqlPath": "Put short COMMENT ON text on every table and column, then add a governed layer for metrics and joins: Cube, MetricFlow, or Wren AI MDL. Expose that layer to the agent through its MCP server or API, and run raw SQL only under a read-only role with row-level security. On Google Cloud, evaluate AlloyDB QueryData (Preview) for managed context sets and query blueprints.",
   "snippet": {
    "lang": "sql",
    "title": "COMMENT ON as AI context, and the call that reads it back",
    "code": "COMMENT ON TABLE sales.orders IS 'One row per customer order. Amounts in USD, tax excluded.';\nCOMMENT ON COLUMN sales.orders.status IS 'open, shipped, or cancelled. Exclude cancelled from revenue.';\n\n-- Read the comments back when you build the NL-to-SQL prompt\nSELECT obj_description('sales.orders'::regclass, 'pg_class');\nSELECT col_description('sales.orders'::regclass, a.attnum), a.attname\nFROM pg_attribute a\nWHERE a.attrelid = 'sales.orders'::regclass AND a.attnum > 0;",
    "u": "https://www.postgresql.org/docs/current/sql-comment.html"
   },
   "sources": [
    {
     "t": "PostgreSQL docs: COMMENT",
     "u": "https://www.postgresql.org/docs/current/sql-comment.html"
    },
    {
     "t": "PostgreSQL docs: Foreign keys and constraints",
     "u": "https://www.postgresql.org/docs/current/ddl-constraints.html"
    },
    {
     "t": "PostgreSQL docs: Row security policies",
     "u": "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"
    },
    {
     "t": "Commit: SQL Property Graph Queries (SQL/PGQ), 2026-03-16",
     "u": "https://www.postgresql.org/message-id/E1w247I-0000Tk-2Y%40gemulon.postgresql.org"
    },
    {
     "t": "Commit: Revert SQL/PGQ on REL_19_STABLE, 2026-09-07",
     "u": "https://www.postgresql.org/message-id/E1x3f62-00000003sxF-0zQO@gemulon.postgresql.org"
    },
    {
     "t": "Commit: Revert SQL/PGQ on master, 2026-09-07",
     "u": "https://www.postgresql.org/message-id/E1x3f62-00000003sxD-0vdk@gemulon.postgresql.org"
    },
    {
     "t": "pgsql-hackers: Robert Haas on PGQ revert, 2026-09-03",
     "u": "https://www.postgresql.org/message-id/CA%2BTgmoZdb5%2BOPbZWNGsKL516OjBDaEP9cN5wU2gdzJ8fgJzVRg%40mail.gmail.com"
    },
    {
     "t": "PostgreSQL 19.0 release notes (RC1 docs)",
     "u": "https://www.postgresql.org/docs/release/19.0/"
    },
    {
     "t": "PostgreSQL versioning policy page (RC1 banner)",
     "u": "https://www.postgresql.org/support/versioning/"
    },
    {
     "t": "pgvector README",
     "u": "https://github.com/pgvector/pgvector"
    },
    {
     "t": "Apache AGE README",
     "u": "https://github.com/apache/age"
    },
    {
     "t": "pg_graphql README",
     "u": "https://github.com/supabase/pg_graphql"
    },
    {
     "t": "AlloyDB AI natural language overview",
     "u": "https://docs.cloud.google.com/alloydb/docs/ai/natural-language-overview"
    },
    {
     "t": "AlloyDB QueryData data agent overview",
     "u": "https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview"
    },
    {
     "t": "Google Cloud blog: Introducing QueryData (2026-04)",
     "u": "https://cloud.google.com/blog/products/databases/introducing-querydata-for-near-100-percent-accurate-data-agents"
    },
    {
     "t": "Google Cloud blog: natural language support in AlloyDB (2024-04)",
     "u": "https://cloud.google.com/blog/products/databases/understanding-natural-language-support-in-alloydb/"
    },
    {
     "t": "Azure Database for PostgreSQL: azure_ai extension",
     "u": "https://learn.microsoft.com/en-us/azure/postgresql/azure-ai/generative-ai-azure-overview"
    },
    {
     "t": "Azure Database for PostgreSQL: AI functions (Preview)",
     "u": "https://learn.microsoft.com/en-us/azure/postgresql/azure-ai/generative-ai-azure-ai-functions"
    },
    {
     "t": "Message center: azure_ai extension GA, 2024-05-21",
     "u": "https://mc.merill.net/message/AZ-general-availability-azure-ai-extension-in-azure-database-for-postgresql"
    },
    {
     "t": "Supabase blog: Assistant v2 (2024-12-02)",
     "u": "https://supabase.com/blog/supabase-ai-assistant-v2"
    },
    {
     "t": "Supabase docs: MCP server",
     "u": "https://supabase.com/docs/guides/getting-started/mcp"
    },
    {
     "t": "Neon docs: Neon MCP server",
     "u": "https://neon.com/docs/ai/neon-mcp-server"
    },
    {
     "t": "Postgres MCP Pro README",
     "u": "https://github.com/crystaldba/postgres-mcp"
    },
    {
     "t": "Archived MCP reference servers",
     "u": "https://github.com/modelcontextprotocol/servers-archived"
    },
    {
     "t": "MCP Toolbox for Databases README",
     "u": "https://github.com/googleapis/genai-toolbox"
    },
    {
     "t": "dbt docs: MetricFlow",
     "u": "https://docs.getdbt.com/docs/build/about-metricflow"
    },
    {
     "t": "dbt docs: Semantic Layer",
     "u": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl"
    },
    {
     "t": "Cube docs: supported data sources",
     "u": "https://docs.cube.dev/admin/connect-to-data/data-sources"
    },
    {
     "t": "Wren AI README",
     "u": "https://github.com/Canner/WrenAI"
    },
    {
     "t": "COMMENT reference (postgres/postgres source, GitHub)",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/ref/comment.sgml"
    },
    {
     "t": "pg_stat_statements (postgres/postgres source, GitHub)",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/pgstatstatements.sgml"
    }
   ],
   "verified": "2026-10-24",
   "logo": "postgresql",
   "worksWith": [],
   "enrichHowTo": "Run COMMENT ON TABLE and COMMENT ON COLUMN for each object, from a script that reads descriptions from a file or catalog. Read them back with obj_description and col_description when you build the prompt. Postgres has no AI generator, so draft text with your own LLM job and review it.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "COMMENT ON TABLE my_schema.my_table IS 'Employee Information';\nCOMMENT ON COLUMN my_table.my_column IS 'Employee ID number';\nCOMMENT ON TABLE mytable IS NULL;  -- removes a comment",
    "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/ref/comment.sgml"
   }
  },
  {
   "id": "sqlserver",
   "name": "SQL Server 2025 / Azure SQL",
   "category": "oltp",
   "tagline": "Relational OLTP engine with native vector type, SQL graph tables, and T-SQL AI functions.",
   "verdict": "none",
   "verdictNote": "I found no semantic model, metric or ontology object in the SQL Server 2025 or Azure SQL docs; only text annotations read by one IDE tool and an optional open source MCP layer exist.",
   "artifacts": [
    {
     "name": "vector data type and VECTOR_DISTANCE",
     "kind": "vector",
     "status": "GA",
     "since": "2025-11",
     "format": "T-SQL: VECTOR(n [, float16]); float32 up to 1,998 dimensions, float16 up to 3,996",
     "url": "https://learn.microsoft.com/en-us/sql/t-sql/data-types/vector-data-type"
    },
    {
     "name": "Vector index (DiskANN) and VECTOR_SEARCH, Azure SQL Database and SQL database in Fabric",
     "kind": "vector",
     "status": "GA",
     "since": "",
     "format": "T-SQL: CREATE VECTOR INDEX, SELECT TOP (N) WITH APPROXIMATE ... FROM VECTOR_SEARCH(...)",
     "url": "https://learn.microsoft.com/en-us/sql/t-sql/functions/vector-search-transact-sql"
    },
    {
     "name": "Vector index and VECTOR_SEARCH, SQL Server 2025",
     "kind": "vector",
     "status": "Preview",
     "since": "2025-11",
     "format": "T-SQL; needs ALTER DATABASE SCOPED CONFIGURATION SET PREVIEW_FEATURES = ON",
     "url": "https://learn.microsoft.com/en-us/sql/t-sql/functions/vector-search-transact-sql"
    },
    {
     "name": "AI_GENERATE_EMBEDDINGS, AI_GENERATE_CHUNKS, CREATE EXTERNAL MODEL",
     "kind": "vector",
     "status": "GA",
     "since": "2025-11",
     "format": "T-SQL; MODEL_TYPE accepts only EMBEDDINGS; API formats Azure OpenAI, OpenAI, Ollama, ONNX Runtime (local ONNX needs preview features)",
     "url": "https://learn.microsoft.com/en-us/sql/t-sql/statements/create-external-model-transact-sql"
    },
    {
     "name": "SQL Graph (node and edge tables, MATCH, SHORTEST_PATH)",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "T-SQL: CREATE TABLE ... AS NODE / AS EDGE; MATCH(a-(e)->b); SHORTEST_PATH needs SQL Server 2019 or later",
     "url": "https://learn.microsoft.com/en-us/sql/t-sql/queries/match-sql-graph"
    },
    {
     "name": "GitHub Copilot in SSMS (chat, NL to T-SQL, code completion)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-03",
     "format": "IDE feature in SSMS 22; works against SQL Server 2014 to 2025, Azure SQL Database, Managed Instance, SQL database in Fabric",
     "url": "https://learn.microsoft.com/en-us/ssms/github-copilot/overview"
    },
    {
     "name": "Database instructions (AGENTS.md) and CONSTITUTION.md extended properties",
     "kind": "annotations",
     "status": "GA",
     "since": "2026-03",
     "format": "sp_addextendedproperty with name AGENTS.md on an object, or CONSTITUTION.md on the database; AGENTS.md format",
     "url": "https://learn.microsoft.com/en-us/ssms/github-copilot/database-instructions"
    },
    {
     "name": "SQL Tools MCP server bundled with GitHub Copilot Agent mode in SSMS",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-09",
     "format": "Local MCP client and bundled server inside SSMS 22.7 or later; Agent mode GA in 22.10.2",
     "url": "https://learn.microsoft.com/en-us/ssms/release-notes-22"
    },
    {
     "name": "SQL MCP Server (Data API builder 1.7 and later)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "Open source, self-hosted; dab-config.json entities with descriptions and roles; tools describe_entities, read_records, create_record, update_record, delete_record, execute_entity, aggregate_records",
     "url": "https://learn.microsoft.com/en-us/azure/data-api-builder/mcp/overview"
    },
    {
     "name": "Microsoft Copilot in Azure, Azure SQL Database skills",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "",
     "format": "Azure portal chat; question to T-SQL listed as a developer use case",
     "url": "https://learn.microsoft.com/en-us/azure/azure-sql/copilot/copilot-azure-sql-overview"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No metric or measure object in the T-SQL docs reviewed. Use views or an external semantic layer.",
     "u": ""
    },
    "dimensions": {
     "l": 0,
     "n": "No declared dimensions, hierarchies or time grains. Star schema exists only as table design.",
     "u": ""
    },
    "relationships": {
     "l": 3,
     "n": "Foreign keys and SQL graph edge tables declare joins. Fabric SQL database Copilot reads PK and FK metadata.",
     "u": "https://learn.microsoft.com/en-us/azure/azure-sql/database/ai-artificial-intelligence-intelligent-applications?view=azuresql"
    },
    "synonyms": {
     "l": 3,
     "n": "AGENTS.md extended properties hold business rules per object. I found only GitHub Copilot in SSMS reading them.",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/database-instructions"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-to-SQL store. SQL MCP Server uses configured entities, not example queries.",
     "u": "https://learn.microsoft.com/en-us/azure/data-api-builder/mcp/overview"
    },
    "nl2sql": {
     "l": 3,
     "n": "GitHub Copilot in SSMS is GA (March 2026). It is an IDE tool, not an in-database or embeddable API.",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/overview"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology or class model in the engine. SQL graph tables store nodes and edges as data, not business classes.",
     "u": "https://learn.microsoft.com/en-us/sql/relational-databases/graphs/sql-graph-architecture"
    },
    "graph": {
     "l": 3,
     "n": "SQL Graph node and edge tables with ASCII-art MATCH syntax. SHORTEST_PATH needs SQL Server 2019 or later.",
     "u": "https://learn.microsoft.com/en-us/sql/t-sql/queries/match-sql-graph"
    },
    "vector": {
     "l": 3,
     "n": "Vector type and VECTOR_DISTANCE: GA. Vector index and VECTOR_SEARCH: GA in Azure SQL Database, Preview in SQL Server 2025.",
     "u": "https://learn.microsoft.com/en-us/sql/sql-server/ai/vectors"
    },
    "mcp": {
     "l": 1,
     "n": "SQL MCP Server is part of Data API builder, an open source separate product you host. No NL2SQL by design.",
     "u": "https://learn.microsoft.com/en-us/azure/data-api-builder/mcp/overview"
    },
    "governance": {
     "l": 3,
     "n": "GitHub Copilot in SSMS runs queries under the user's login permissions. SQL MCP Server applies role-based entity permissions.",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/overview"
    },
    "openStandard": {
     "l": 0,
     "n": "No semantic-layer object to export or import. SQL Graph queries use the T-SQL MATCH syntax.",
     "u": ""
    },
    "aiDescriptions": {
     "l": 1,
     "n": "GitHub Copilot in SSMS (separate product, SSMS 22.3+) writes database instructions as T-SQL you run to save as extended properties. No dedicated description generator.",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/database-instructions"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "sp_addextendedproperty writes MS_Description per table or column, value up to 7,500 bytes. Not allowed on memory-optimized tables.",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/relational-databases/system-stored-procedures/sp-addextendedproperty-transact-sql.md"
    },
    "autoClassify": {
     "l": 3,
     "n": "Data Discovery and Classification recommends labels from column names only (SQL Server 2012+). You accept them in SSMS or with ADD SENSITIVITY CLASSIFICATION.",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/relational-databases/security/sql-data-discovery-and-classification.md"
    },
    "sampleValues": {
     "l": 0,
     "n": "No value sampling or literal matching documented. Copilot in SSMS Agent mode can run queries you approve, but that is not a sampling feature.",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/overview"
    },
    "queryHistory": {
     "l": 0,
     "n": "No mining of query history for semantic suggestions documented. Query Store is not described as an AI input.",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/overview"
    },
    "lineage": {
     "l": 0,
     "n": "No built-in column lineage in SQL Server. Mirroring into Fabric gives item-level lineage only.",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/governance/lineage.md"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling for SQL Server or Azure SQL. Fabric data agent evaluation needs Fabric items.",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/overview"
    }
   },
   "offers": [
    "Native vector type (float32 up to 1,998 dimensions, float16 up to 3,996) with VECTOR_DISTANCE for exact search.",
    "AI_GENERATE_EMBEDDINGS calls Azure OpenAI, OpenAI, Ollama or ONNX models registered with CREATE EXTERNAL MODEL; AI_GENERATE_CHUNKS splits text.",
    "SQL Graph node and edge tables with MATCH and SHORTEST_PATH query connected data in T-SQL.",
    "GitHub Copilot in SSMS (GA) writes T-SQL from natural language and reads database instructions stored as AGENTS.md extended properties.",
    "SQL MCP Server (Data API builder) exposes configured entities with descriptions, roles and seven DML tools; no NL2SQL by design."
   ],
   "gaps": [
    "No semantic model, metric, dimension or ontology object found in the SQL Server 2025 or Azure SQL docs.",
    "CREATE EXTERNAL MODEL accepts only MODEL_TYPE = EMBEDDINGS. No NL-to-SQL function appears in the T-SQL docs reviewed.",
    "Copilot in Azure SQL Database status is unclear: one page says preview for early adopters, a blog title says GA.",
    "Vector index and VECTOR_SEARCH are Preview on SQL Server 2025 and need PREVIEW_FEATURES; GA in Azure SQL Database.",
    "SQL Graph does not support cross-database queries, temporal tables or memory-optimized tables."
   ],
   "fillWith": [
    "Power BI semantic model via Fabric mirroring",
    "Fabric data agent",
    "Data API builder (SQL MCP Server)",
    "Azure AI Search",
    "Semantic Kernel",
    "LangChain (langchain-sqlserver)"
   ],
   "nl2sqlPath": "The engine has no built-in NL-to-SQL for applications, so teams either call an LLM from the app with schema and business rules in the prompt, or expose configured entities through SQL MCP Server, which skips NL2SQL on purpose. For interactive work, use GitHub Copilot in SSMS and store business rules as AGENTS.md extended properties. For governed metrics, mirror the data into Fabric and use a Power BI semantic model with a data agent.",
   "snippet": {
    "lang": "sql",
    "title": "Vector column and exact nearest-neighbor query",
    "code": "CREATE TABLE dbo.vectors\n(\n    id INT PRIMARY KEY,\n    v VECTOR(3) NOT NULL\n);\n\nINSERT INTO dbo.vectors VALUES (1, '[0.1, 2, 30]'), (2, '[-100.2, 0.123, 9.876]');\n\nDECLARE @qv VECTOR(3) = '[0.1, 2, 30]';\nSELECT TOP (10) id, VECTOR_DISTANCE('cosine', @qv, v) AS distance\nFROM dbo.vectors\nORDER BY distance;",
    "u": "https://learn.microsoft.com/en-us/sql/t-sql/data-types/vector-data-type"
   },
   "sources": [
    {
     "t": "Vector Search and Vector Index in the SQL Database Engine",
     "u": "https://learn.microsoft.com/en-us/sql/sql-server/ai/vectors"
    },
    {
     "t": "Vector data type",
     "u": "https://learn.microsoft.com/en-us/sql/t-sql/data-types/vector-data-type"
    },
    {
     "t": "VECTOR_SEARCH (Transact-SQL)",
     "u": "https://learn.microsoft.com/en-us/sql/t-sql/functions/vector-search-transact-sql"
    },
    {
     "t": "AI_GENERATE_EMBEDDINGS (Transact-SQL)",
     "u": "https://learn.microsoft.com/en-us/sql/t-sql/functions/ai-generate-embeddings-transact-sql"
    },
    {
     "t": "CREATE EXTERNAL MODEL (Transact-SQL)",
     "u": "https://learn.microsoft.com/en-us/sql/t-sql/statements/create-external-model-transact-sql"
    },
    {
     "t": "SQL Graph Architecture",
     "u": "https://learn.microsoft.com/en-us/sql/relational-databases/graphs/sql-graph-architecture"
    },
    {
     "t": "MATCH (SQL Graph)",
     "u": "https://learn.microsoft.com/en-us/sql/t-sql/queries/match-sql-graph"
    },
    {
     "t": "What Is GitHub Copilot in SQL Server Management Studio?",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/overview"
    },
    {
     "t": "Database Instructions - GitHub Copilot in SSMS",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/database-instructions"
    },
    {
     "t": "MCP Servers - GitHub Copilot in SSMS",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/mcp-servers"
    },
    {
     "t": "Release Notes for SQL Server Management Studio 22",
     "u": "https://learn.microsoft.com/en-us/ssms/release-notes-22"
    },
    {
     "t": "SQL MCP Server overview",
     "u": "https://learn.microsoft.com/en-us/azure/data-api-builder/mcp/overview"
    },
    {
     "t": "Intelligent Applications and AI - Azure SQL Database",
     "u": "https://learn.microsoft.com/en-us/azure/azure-sql/database/ai-artificial-intelligence-intelligent-applications?view=azuresql"
    },
    {
     "t": "Microsoft Copilot in Azure with Azure SQL Database Overview",
     "u": "https://learn.microsoft.com/en-us/azure/azure-sql/copilot/copilot-azure-sql-overview"
    },
    {
     "t": "Announcing General Availability of Azure SQL Database Capabilities for Microsoft Copilot in Azure",
     "u": "https://techcommunity.microsoft.com/blog/azuresqlblog/announcing-general-availability-of-azure-sql-database-capabilities-for-microsoft/4403518"
    },
    {
     "t": "SQL Server 2025 is Now Generally Available",
     "u": "https://techcommunity.microsoft.com/blog/sqlserver/sql-server-2025-is-now-generally-available/4470570"
    },
    {
     "t": "sp_addextendedproperty",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/relational-databases/system-stored-procedures/sp-addextendedproperty-transact-sql.md"
    },
    {
     "t": "sp_updateextendedproperty",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/relational-databases/system-stored-procedures/sp-updateextendedproperty-transact-sql.md"
    },
    {
     "t": "ADD SENSITIVITY CLASSIFICATION",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/t-sql/statements/add-sensitivity-classification-transact-sql.md"
    },
    {
     "t": "SQL Data Discovery and Classification",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/relational-databases/security/sql-data-discovery-and-classification.md"
    },
    {
     "t": "Fabric lineage",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/governance/lineage.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Store business meaning as extended properties with sys.sp_addextendedproperty and the name MS_Description, and loop over a metadata table to write many. Update existing ones with sys.sp_updateextendedproperty. For GitHub Copilot in SSMS, store instructions as extended properties named AGENTS.md per object or CONSTITUTION.md per database. Run Data Discovery and Classification in SSMS to tag sensitive columns.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "EXECUTE sys.sp_addextendedproperty\n    @name = N'MS_Description',\n    @value = N'Postal code for the customer address.',\n    @level0type = 'SCHEMA', @level0name = N'Person',\n    @level1type = 'TABLE', @level1name = N'Address',\n    @level2type = 'COLUMN', @level2name = N'PostalCode';",
    "u": "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/relational-databases/system-stored-procedures/sp-addextendedproperty-transact-sql.md"
   }
  },
  {
   "id": "clickhouse",
   "name": "ClickHouse",
   "category": "realtime-olap",
   "tagline": "Open-source column-oriented database for real-time analytics, also sold as ClickHouse Cloud.",
   "verdict": "none",
   "verdictNote": "No semantic layer object found in ClickHouse docs; context comes from column comments and external layers.",
   "artifacts": [
    {
     "name": "Column COMMENT",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "SQL DDL",
     "url": "https://clickhouse.com/docs/sql-reference/statements/alter/column"
    },
    {
     "name": "ClickHouse Assistant (Cloud console; Agent and Docs AI modes)",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "",
     "format": "Cloud console chat panel",
     "url": "https://clickhouse.com/docs/cloud/features/ai-ml/ask-ai"
    },
    {
     "name": "ClickHouse Agents (Cloud agent builder)",
     "kind": "agent",
     "status": "Preview",
     "since": "2026-06",
     "format": "No-code Agent Builder, MCP tools, skills, memory",
     "url": "https://clickhouse.com/docs/products/cloud/features/ai-ml/agents/index.md"
    },
    {
     "name": "mcp-clickhouse (official open-source MCP server)",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-02",
     "format": "Python MCP server (stdio, Streamable HTTP), Apache-2.0",
     "url": "https://github.com/ClickHouse/mcp-clickhouse"
    },
    {
     "name": "Remote MCP server in ClickHouse Cloud",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "Managed MCP endpoint, OAuth or API key, 13 read-only tools",
     "url": "https://clickhouse.com/docs/cloud/features/ai-ml/remote-mcp"
    },
    {
     "name": "Agentic Data Stack (LibreChat, ClickHouse, Langfuse)",
     "kind": "agent",
     "status": "Unverified",
     "since": "2026-03",
     "format": "Open-source reference architecture",
     "url": "https://clickhouse.com/blog/the-agentic-data-stack"
    },
    {
     "name": "Vector similarity index (HNSW)",
     "kind": "vector",
     "status": "Unverified",
     "since": "2025-08",
     "format": "SQL index, ClickHouse 25.8 and later",
     "url": "https://clickhouse.com/docs/engines/table-engines/mergetree-family/annindexes"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "No metric objects found in ClickHouse docs. Rill metrics views (Apache-2.0) and Cube define them over ClickHouse.",
     "u": "https://docs.rilldata.com/developers/build/metrics-view/what-are-metrics-views"
    },
    "dimensions": {
     "l": 1,
     "n": "No dimension objects found. Rill metrics views declare dimensions and a timeseries column over a ClickHouse model.",
     "u": "https://docs.rilldata.com/developers/build/metrics-view/what-are-metrics-views"
    },
    "relationships": {
     "l": 1,
     "n": "No join-path objects found in docs. Cube and Wren AI MDL declare relationships over ClickHouse.",
     "u": "https://github.com/Canner/WrenAI"
    },
    "synonyms": {
     "l": 3,
     "n": "Column COMMENT is native. Assistant docs list no custom-instruction field; Agents (Beta) take written instructions and memory.",
     "u": "https://clickhouse.com/docs/sql-reference/statements/alter/column"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-to-SQL store found. ClickHouse Agents (Beta) keep a prompt library and memory.",
     "u": "https://clickhouse.com/docs/products/cloud/features/ai-ml/agents/index.md"
    },
    "nl2sql": {
     "l": 2,
     "n": "ClickHouse Agents entered Public Beta on 2026-06-03. The Cloud console Assistant also writes SQL from questions.",
     "u": "https://clickhouse.com/docs/resources/changelogs/cloud/2026.md"
    },
    "ontology": {
     "l": 0,
     "n": "None. Rill, Cube, and Wren AI offer semantic models above tables, which are not ontologies.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found in the docs reviewed. Absence not proven.",
     "u": ""
    },
    "vector": {
     "l": 3,
     "n": "HNSW vector similarity index, available in 25.8 and later. Docs give no beta label; quantized codec is experimental.",
     "u": "https://clickhouse.com/docs/engines/table-engines/mergetree-family/annindexes"
    },
    "mcp": {
     "l": 3,
     "n": "Official mcp-clickhouse (Apache-2.0, read-only by default) and a Cloud remote MCP server with 13 read-only tools.",
     "u": "https://github.com/ClickHouse/mcp-clickhouse"
    },
    "governance": {
     "l": 3,
     "n": "Grants and row policies apply to the agent's ClickHouse user. Comments are the only native semantic object.",
     "u": "https://clickhouse.com/docs/sql-reference/statements/create/row-policy"
    },
    "openStandard": {
     "l": 1,
     "n": "Rill (Apache-2.0), Boring Semantic Layer (MIT), and the Wren AI engine (Apache-2.0) are open-source options.",
     "u": "https://github.com/rilldata/rill"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No description generator found. Not checked for the Cloud console Assistant.",
     "u": ""
    },
    "bulkMetadata": {
     "l": 3,
     "n": "ALTER TABLE ... COMMENT COLUMN and a table COMMENT, by SQL. No bulk API found. Source not re-fetched, taken from background file.",
     "u": "https://clickhouse.com/docs/sql-reference/statements/alter/column"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic classification found.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value feature found. The mcp-clickhouse list_tables tool returns column metadata and the CREATE statement only.",
     "u": "https://github.com/ClickHouse/mcp-clickhouse"
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "No native column-level lineage found in the pages I could check.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found. Agents (Beta) feedback features were not checked.",
     "u": ""
    }
   },
   "offers": [
    "Column comments store descriptions. ClickHouse's agent post grounds LLMs with schema metadata, table comments, and a system prompt.",
    "Official mcp-clickhouse server (Apache-2.0) is read-only by default with list_databases, list_tables, and run_query tools.",
    "Cloud remote MCP server has 13 read-only tools, OAuth or API key access, and is enabled per service.",
    "ClickHouse Agents (Public Beta, 2026-06): no-code builder with MCP tools, skills, memory, and scheduled chats.",
    "HNSW vector similarity index, available in 25.8 and later, with L2, cosine, and dot product distance.",
    "Agentic Data Stack (2026-03) combines LibreChat chat, ClickHouse data, and Langfuse tracing."
   ],
   "gaps": [
    "No native semantic layer found in the docs reviewed: no metric, dimension, or join objects.",
    "No documented store for verified question-to-SQL pairs or business synonyms.",
    "Assistant docs do not describe custom instructions or semantic context inputs.",
    "MetricFlow docs list no ClickHouse support. dbt's v2 adapter table shows ClickHouse as Private beta.",
    "Vector index docs give no status label, and the quantized codec is experimental."
   ],
   "fillWith": [
    "Rill metrics views",
    "Cube",
    "Boring Semantic Layer",
    "Wren AI",
    "dbt (transformations only)"
   ],
   "nl2sqlPath": "Add column and table comments in ClickHouse. Define metrics and dimensions in a layer such as Rill metrics views, Cube, or Wren AI, and point the agent at that layer's MCP server or API. Use mcp-clickhouse with a least-privilege read-only user for direct SQL, or test ClickHouse Agents (Public Beta) with the Cloud remote MCP server.",
   "snippet": {
    "lang": "yaml",
    "title": "Rill metrics view over a ClickHouse model (rill.yaml sets olap_connector: clickhouse)",
    "code": "# rill.yaml:  olap_connector: clickhouse\nversion: 1\ntype: metrics_view\nmodel: example_model\ntimeseries: timestamp_column\ndimensions:\n  - column: category\n    display_name: \"Category\"\n    description: \"Description of the dimension\"\nmeasures:\n  - expression: \"SUM(revenue)\"\n    display_name: \"Total Revenue\"\n    description: \"Total revenue generated\"",
    "u": "https://docs.rilldata.com/developers/build/metrics-view/what-are-metrics-views"
   },
   "sources": [
    {
     "t": "ClickHouse docs: ALTER TABLE ... COMMENT COLUMN",
     "u": "https://clickhouse.com/docs/sql-reference/statements/alter/column"
    },
    {
     "t": "ClickHouse docs: ClickHouse Assistant",
     "u": "https://clickhouse.com/docs/cloud/features/ai-ml/ask-ai"
    },
    {
     "t": "ClickHouse docs: Using the AI chat",
     "u": "https://clickhouse.com/docs/products/cloud/features/ai-ml/aichat/using-ai-chat.md"
    },
    {
     "t": "ClickHouse docs: Cloud AI/ML features overview",
     "u": "https://clickhouse.com/docs/cloud/features/ai-ml"
    },
    {
     "t": "ClickHouse docs: ClickHouse Agents (Beta)",
     "u": "https://clickhouse.com/docs/products/cloud/features/ai-ml/agents/index.md"
    },
    {
     "t": "ClickHouse Cloud changelog 2026",
     "u": "https://clickhouse.com/docs/resources/changelogs/cloud/2026.md"
    },
    {
     "t": "ClickHouse docs: MCP overview",
     "u": "https://clickhouse.com/docs/concepts/features/interfaces/mcp.md"
    },
    {
     "t": "ClickHouse docs: Cloud remote MCP server",
     "u": "https://clickhouse.com/docs/cloud/features/ai-ml/remote-mcp"
    },
    {
     "t": "mcp-clickhouse README",
     "u": "https://github.com/ClickHouse/mcp-clickhouse"
    },
    {
     "t": "mcp-clickhouse on PyPI",
     "u": "https://pypi.org/project/mcp-clickhouse/"
    },
    {
     "t": "ClickHouse blog: The Agentic Data Stack (2026-03-03)",
     "u": "https://clickhouse.com/blog/the-agentic-data-stack"
    },
    {
     "t": "ClickHouse docs: Vector similarity indexes",
     "u": "https://clickhouse.com/docs/engines/table-engines/mergetree-family/annindexes"
    },
    {
     "t": "ClickHouse docs: Row policies",
     "u": "https://clickhouse.com/docs/sql-reference/statements/create/row-policy"
    },
    {
     "t": "ClickHouse docs: dbt integration",
     "u": "https://clickhouse.com/docs/integrations/dbt"
    },
    {
     "t": "dbt docs: supported data platforms and adapter lifecycle",
     "u": "https://docs.getdbt.com/docs/supported-data-platforms"
    },
    {
     "t": "dbt docs: MetricFlow",
     "u": "https://docs.getdbt.com/docs/build/about-metricflow"
    },
    {
     "t": "Rill docs: What are metrics views",
     "u": "https://docs.rilldata.com/developers/build/metrics-view/what-are-metrics-views"
    },
    {
     "t": "Rill docs: ClickHouse connector",
     "u": "https://docs.rilldata.com/developers/build/connectors/olap/clickhouse"
    },
    {
     "t": "Rill README",
     "u": "https://github.com/rilldata/rill"
    },
    {
     "t": "Cube docs: ClickHouse data source",
     "u": "https://docs.cube.dev/admin/connect-to-data/data-sources/clickhouse"
    },
    {
     "t": "Boring Semantic Layer README",
     "u": "https://github.com/boringdata/boring-semantic-layer"
    },
    {
     "t": "Ibis docs: ClickHouse backend",
     "u": "https://ibis-project.org/backends/clickhouse"
    },
    {
     "t": "Wren AI README",
     "u": "https://github.com/Canner/WrenAI"
    }
   ],
   "verified": "2026-10-24",
   "logo": "clickhouse",
   "worksWith": [],
   "enrichHowTo": "Set column text with ALTER TABLE ... COMMENT COLUMN, one statement per column, from a script. Read comments from system.columns when you build the prompt. ClickHouse gives no AI description tool I could confirm, so draft with your own LLM job.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "ALTER TABLE visits COMMENT COLUMN browser 'The browser used to access the site.';",
    "u": "https://clickhouse.com/docs/sql-reference/statements/alter/column"
   }
  },
  {
   "id": "duckdb",
   "name": "DuckDB / MotherDuck",
   "category": "embedded",
   "tagline": "In-process analytical SQL engine, with MotherDuck as its managed cloud service.",
   "verdict": "partial",
   "verdictNote": "No structured semantic layer, but MotherDuck Guides store metric definitions and join rules as markdown that agents read through MCP.",
   "artifacts": [
    {
     "name": "COMMENT ON (table and column comments)",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "SQL DDL",
     "url": "https://duckdb.org/docs/2.0/sql/statements/comment_on.html"
    },
    {
     "name": "MotherDuck Guides",
     "kind": "glossary",
     "status": "Unverified",
     "since": "",
     "format": "Markdown documents, created by agent or MD_CREATE_GUIDE",
     "url": "https://motherduck.com/docs/key-tasks/guides/"
    },
    {
     "name": "MotherDuck SQL assistant (prompt_query, prompt_sql, prompt_schema, prompt_fix_line)",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "",
     "format": "SQL functions",
     "url": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/"
    },
    {
     "name": "MotherDuck remote MCP server",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "Hosted MCP at api.motherduck.com/mcp, OAuth or bearer token",
     "url": "https://motherduck.com/docs/sql-reference/mcp/"
    },
    {
     "name": "mcp-server-motherduck (local MCP server, MIT)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Open-source MCP server, read-only by default",
     "url": "https://github.com/motherduckdb/mcp-server-motherduck"
    },
    {
     "name": "MotherDuck EMBEDDING function",
     "kind": "vector",
     "status": "Unverified",
     "since": "",
     "format": "SQL function",
     "url": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/"
    },
    {
     "name": "DuckPGQ community extension (SQL/PGQ)",
     "kind": "graph-query",
     "status": "Preview",
     "since": "",
     "format": "Community extension, CREATE PROPERTY GRAPH and GRAPH_TABLE",
     "url": "https://duckdb.org/community_extensions/extensions/duckpgq.html"
    },
    {
     "name": "vss extension (HNSW index)",
     "kind": "vector",
     "status": "Preview",
     "since": "",
     "format": "Core extension, experimental persistence",
     "url": "https://duckdb.org/docs/2.0/core_extensions/vss.html"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "No metric objects. Guides hold definitions as markdown. Boring Semantic Layer, Cube, or Rill define metrics as code.",
     "u": "https://motherduck.com/docs/key-tasks/guides/"
    },
    "dimensions": {
     "l": 1,
     "n": "No dimension objects. Cube and Rill list DuckDB and MotherDuck as supported sources.",
     "u": "https://docs.cube.dev/admin/connect-to-data/data-sources"
    },
    "relationships": {
     "l": 1,
     "n": "Join conventions go in Guides as text. Wren AI MDL declares relationships. DuckPGQ declares vertex and edge tables.",
     "u": "https://github.com/Canner/WrenAI"
    },
    "synonyms": {
     "l": 3,
     "n": "COMMENT ON for tables and columns. Guides add user or organization markdown context. No synonym field.",
     "u": "https://motherduck.com/docs/key-tasks/ai-and-motherduck/building-analytics-agents"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified-query store found. Guides can hold trusted tables and join restrictions as text.",
     "u": "https://motherduck.com/docs/key-tasks/ai-and-motherduck/building-analytics-agents"
    },
    "nl2sql": {
     "l": 3,
     "n": "prompt_sql, prompt_query, prompt_schema, prompt_fix_line run through Azure OpenAI. Docs give no status label.",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/"
    },
    "ontology": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "graph": {
     "l": 1,
     "n": "DuckPGQ community extension adds SQL/PGQ. Its docs call it a research project and work in progress.",
     "u": "https://duckdb.org/community_extensions/extensions/duckpgq.html"
    },
    "vector": {
     "l": 1,
     "n": "vss extension has HNSW indexes; on-disk persistence is experimental and not advised for production.",
     "u": "https://duckdb.org/docs/2.0/core_extensions/vss.html"
    },
    "mcp": {
     "l": 3,
     "n": "MotherDuck hosts a remote MCP server. The open-source local server (MIT) reads DuckDB files and MotherDuck.",
     "u": "https://motherduck.com/docs/sql-reference/mcp/"
    },
    "governance": {
     "l": 0,
     "n": "Guides have user or organization visibility. No row or column security or lineage for semantic context found in docs.",
     "u": "https://motherduck.com/docs/key-tasks/guides/"
    },
    "openStandard": {
     "l": 1,
     "n": "Boring Semantic Layer (MIT), Cube, Rill (Apache-2.0), and the Wren AI engine (Apache-2.0) are open-source options.",
     "u": "https://github.com/boringdata/boring-semantic-layer"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No description generator found in DuckDB or MotherDuck.",
     "u": ""
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT ON for tables and columns by SQL. MotherDuck Guides hold markdown context. No bulk import. Source from background file.",
     "u": "https://duckdb.org/docs/2.0/sql/statements/comment_on.html"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic classification found.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value feature found. MotherDuck prompt_sql is a separate product feature; its use of values was not checked.",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/prompt-sql/"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for suggestions found.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "No lineage feature found.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found.",
     "u": ""
    }
   },
   "offers": [
    "COMMENT ON on tables and columns. MotherDuck advises one-sentence comments because agents read them on every schema introspection.",
    "Guides: markdown with metric definitions, join conventions, and domain context, shared per user or per organization.",
    "Remote MCP server at api.motherduck.com/mcp with SQL, schema, catalog search, Guides, Dives, and Flights tools.",
    "SQL functions prompt_sql, prompt_query, prompt_schema, and prompt_fix_line generate, answer, describe, and fix SQL.",
    "Local mcp-server-motherduck (MIT) reads DuckDB files, S3, and MotherDuck, and is read-only by default.",
    "Community DuckPGQ adds SQL/PGQ graph queries. The core vss extension adds HNSW vector indexes (experimental)."
   ],
   "gaps": [
    "No structured metric, dimension, or relationship objects. Guides hold definitions as free text.",
    "DuckPGQ is a research project. vss HNSW persistence is experimental and not advised for production.",
    "Docs for Guides, the remote MCP server, and prompt_* functions give no status label.",
    "Read-only MCP mode alone is not enough for third-party access; the README advises service accounts or SaaS mode."
   ],
   "fillWith": [
    "Boring Semantic Layer",
    "Cube",
    "Rill metrics views",
    "Wren AI"
   ],
   "nl2sqlPath": "Let the agent generate SQL. Add short COMMENT ON text, write Guides for metric definitions and join rules, and connect through the MotherDuck MCP server with a read-scaling token. Add Boring Semantic Layer, Cube, or Rill for governed metrics, and check generated SQL with try_bind() before it runs.",
   "snippet": {
    "lang": "sql",
    "title": "MotherDuck: table and column comments, then generate SQL from a question",
    "code": "COMMENT ON TABLE hn.hacker_news IS 'Hacker News stories and comments, one row per item.';\nCOMMENT ON COLUMN hn.hacker_news.url IS 'Story link. Use the host part as the domain.';\n\n-- Generate SQL over the current database (MotherDuck SQL assistant)\nCALL prompt_sql('what are the top domains being shared on hacker_news?');",
    "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/prompt-sql/"
   },
   "sources": [
    {
     "t": "DuckDB 2.0 docs: COMMENT ON",
     "u": "https://duckdb.org/docs/2.0/sql/statements/comment_on.html"
    },
    {
     "t": "MotherDuck docs: SQL assistant functions",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/"
    },
    {
     "t": "MotherDuck docs: prompt_sql",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/prompt-sql/"
    },
    {
     "t": "MotherDuck docs: AI functions index",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/"
    },
    {
     "t": "MotherDuck docs: PROMPT function",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/prompt/"
    },
    {
     "t": "MotherDuck docs: MCP server reference",
     "u": "https://motherduck.com/docs/sql-reference/mcp/"
    },
    {
     "t": "MotherDuck docs: MCP setup (remote vs local)",
     "u": "https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-setup/"
    },
    {
     "t": "MotherDuck docs: Guides",
     "u": "https://motherduck.com/docs/key-tasks/guides/"
    },
    {
     "t": "MotherDuck docs: Building analytics agents",
     "u": "https://motherduck.com/docs/key-tasks/ai-and-motherduck/building-analytics-agents"
    },
    {
     "t": "mcp-server-motherduck README",
     "u": "https://github.com/motherduckdb/mcp-server-motherduck"
    },
    {
     "t": "DuckDB community extension: duckpgq",
     "u": "https://duckdb.org/community_extensions/extensions/duckpgq.html"
    },
    {
     "t": "DuckPGQ project site",
     "u": "https://duckpgq.org/"
    },
    {
     "t": "DuckDB 2.0 docs: vss extension",
     "u": "https://duckdb.org/docs/2.0/core_extensions/vss.html"
    },
    {
     "t": "Cube docs: supported data sources",
     "u": "https://docs.cube.dev/admin/connect-to-data/data-sources"
    },
    {
     "t": "Rill README",
     "u": "https://github.com/rilldata/rill"
    },
    {
     "t": "Boring Semantic Layer README",
     "u": "https://github.com/boringdata/boring-semantic-layer"
    },
    {
     "t": "Wren AI README",
     "u": "https://github.com/Canner/WrenAI"
    }
   ],
   "verified": "2026-10-24",
   "logo": "duckdb",
   "worksWith": [],
   "enrichHowTo": "Write COMMENT ON TABLE and COMMENT ON COLUMN statements from a script. On MotherDuck, put wider rules in Guides and read the comments through prompt_sql or the MCP server. There is no AI generator, so draft with your own LLM job.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "COMMENT ON TABLE hn.hacker_news IS 'Hacker News stories and comments, one row per item.';\nCOMMENT ON COLUMN hn.hacker_news.url IS 'Story link. Use the host part as the domain.';",
    "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/prompt-sql/"
   }
  },
  {
   "id": "denodo",
   "name": "Denodo Platform",
   "category": "virtualization",
   "tagline": "Logical data management platform with a semantic layer of views, associations, and metric views.",
   "verdict": "native",
   "verdictNote": "Since 9.5 (July 2026), metric views plus associations and view metadata form a semantic layer, and the Data Marketplace assistant queries metric views.",
   "artifacts": [
    {
     "name": "Metric View (CREATE METRIC VIEW)",
     "kind": "metric-view",
     "status": "GA",
     "since": "2026-07",
     "format": "VQL, GUI",
     "url": "https://community.denodo.com/docs/html/accessible/9.5/vdp/vql/defining_a_derived_view/defining_a_metric_view/defining_a_metric_view.html"
    },
    {
     "name": "View and column descriptions, tags, and associations",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "VQL, GUI",
     "url": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    {
     "name": "Denodo Assistant (VQL Shell and Data Marketplace)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_5"
    },
    {
     "name": "Denodo AI SDK (text-to-VQL, metadata search, open source)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    {
     "name": "DeepQuery agent",
     "kind": "agent",
     "status": "GA",
     "since": "2025-09",
     "format": "API",
     "url": "https://www.denodo.com/en/press-release/2025-09-16/denodo-platform-93-now-available-breakthrough-support-ai-innovation"
    },
    {
     "name": "Denodo MCP Server (standalone, read-only)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20MCP%20Server%20-%20User%20Manual"
    },
    {
     "name": "AI SDK MCP endpoint (/mcp)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    {
     "name": "Vector data type and metadata embeddings",
     "kind": "vector",
     "status": "GA",
     "since": "2026-03",
     "format": "VQL",
     "url": "https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_4"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metric views (9.5, July 2026) declare metrics over fact and dimension views, reusable across BI and AI.",
     "u": "https://community.denodo.com/docs/html/accessible/9.5/vdp/vql/defining_a_derived_view/defining_a_metric_view/defining_a_metric_view.html"
    },
    "dimensions": {
     "l": 3,
     "n": "Metric views declare dimensions and dimension groups. No hierarchy or time-grain clause found in the syntax.",
     "u": "https://community.denodo.com/docs/html/accessible/9.5/vdp/vql/defining_a_derived_view/defining_a_metric_view/defining_a_metric_view.html"
    },
    "relationships": {
     "l": 3,
     "n": "Associations declare joins between views. Metric views list them in an ASSOCIATIONS clause with a join type.",
     "u": "https://community.denodo.com/docs/html/accessible/9.5/vdp/vql/defining_a_derived_view/defining_a_metric_view/defining_a_metric_view.html"
    },
    "synonyms": {
     "l": 3,
     "n": "View and column descriptions, tags, logical names, and Assistant custom instructions. No dedicated synonym field found.",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-to-SQL store found in the AI SDK manual or the 9.4 and 9.5 release notes.",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    "nl2sql": {
     "l": 3,
     "n": "Denodo Assistant and metric view assisted query write VQL; open-source AI SDK adds text-to-VQL. You supply the LLM.",
     "u": "https://community.denodo.com/docs/html/browse/9.5/en/vdp/data_catalog/metric_views/assisted_query"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer. Views, associations, and metric views are the modeling objects. 360 Graph maps assets and lineage.",
     "u": "https://itbrief.com.au/story/denodo-9-5-adds-metric-views-for-ai-data-governance"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found. 360 Graph (renamed from Reference Lineage) is a lineage and asset map.",
     "u": "https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_5"
    },
    "vector": {
     "l": 3,
     "n": "Vector data type with distance functions (9.4). Metadata search needs a configured external vector database such as PGVector.",
     "u": "https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_4"
    },
    "mcp": {
     "l": 3,
     "n": "Standalone read-only MCP server and AI SDK MCP endpoint. Tools include run_vql_query, metadata_search, generate_vql.",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20MCP%20Server%20-%20User%20Manual"
    },
    "governance": {
     "l": 3,
     "n": "Denodo privileges are the final filter for MCP. AI SDK retrieves only views the user may access. Tags set visibility.",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20MCP%20Server%20-%20User%20Manual"
    },
    "openStandard": {
     "l": 0,
     "n": "Listed in the Apache Ossie ecosystem and working group, but no converter or Ossie export found.",
     "u": "https://ossie.apache.org/ecosystem/"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Denodo Assistant suggests view and column descriptions from sample data and metadata, in several languages. Added in 9.1 (Nov 2024).",
     "u": "https://www.denodo.com/en/press-release/2024-11-20/denodo-platform-91-brings-new-advanced-ai-capabilities-and-enhanced-data-lakehouse-performance"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Denodo blog says new stored procedures fill empty view and column descriptions in batches. Procedure names not confirmed.",
     "u": "https://www.datamanagementblog.com/welcome-to-the-era-of-denodo-assistant/"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic classification found in Denodo sources reviewed. Third-party catalogs do this.",
     "u": ""
    },
    "sampleValues": {
     "l": 3,
     "n": "AI SDK samples values per view during vectorization. Set examples_per_table = 0 to disable. SDK is a separate download.",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/9.2/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining found. Assistant gives personalized catalog recommendations from past user activity, which is not the same.",
     "u": "https://denodo.com/en/node/28501"
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": 3,
     "n": "AI SDK Evaluator runs questions with ground-truth VQL and scores F1 and overlap. A separate script scores speed.",
     "u": "https://community.denodo.com/kb/view/document/A%20Quick%20Guide%20to%20the%20Denodo%20AI%20SDK%20Evaluator"
    }
   },
   "offers": [
    "Metric views define KPIs once over joined views; the Data Marketplace assistant turns plain-language requests into VQL against them.",
    "Open-source AI SDK provides text-to-VQL, vector metadata search, and a DeepQuery agent for multi-step questions.",
    "Standalone read-only MCP server exposes view metadata, semantic metadata search, and tools to validate and run VQL.",
    "Views carry descriptions, tags, and associations. The AI SDK passes this schema to the LLM and filters by user permission.",
    "One virtual layer reaches many sources, so agents query live data without copying it."
   ],
   "gaps": [
    "Metric views are new (9.5, July 2026). The AI SDK and MCP docs reviewed do not mention them.",
    "No ontology, verified-query store, or graph query language found.",
    "Metadata search and the AI SDK need an external vector database and an LLM that you configure and run.",
    "9.5 docs list AI and Semantics feature packs under Enterprise Plus. Licensing scope was not checked.",
    "The manual says the sample chatbot is not for production, and Chroma is for demos only."
   ],
   "fillWith": [
    "dbt Denodo adapter (DenodoConnect component)",
    "PGVector or OpenSearch as the metadata vector store",
    "Apache Ossie (Denodo is a listed participant, no converter found)"
   ],
   "nl2sqlPath": "Model facts and dimensions as metric views, fill in view and column descriptions, and tag the views. Then run the Denodo AI SDK or MCP server with a vector store you host, so the LLM sees view schemas and descriptions. Use DeepQuery only for multi-step questions, because it needs a thinking model with at least 128k context.",
   "snippet": {
    "lang": "sql",
    "title": "Metric view in VQL (shortened from the 9.5 VQL Guide example)",
    "code": "CREATE OR REPLACE METRIC VIEW sales_view\n  DESCRIPTION = 'Example of metric view'\n  SOURCES (\n    orders AS vdb_tpch.psql_tpch_orders,\n    customer AS vdb_tpch.psql_tpch_customer )\n  ASSOCIATIONS (\n    orders customer vdb_tpch.psql_tpch_customer_psql_tpch_orders INNER )\n  DIMENSIONS (\n    customer_dim( customer_name AS customer.c_name ),\n    order_date AS orders.o_orderdate )\n  METRICS (\n    count_order_keys AS count(orders.o_orderkey),\n    order_average_value AS avg(orders.o_totalprice) );",
    "u": "https://community.denodo.com/docs/html/accessible/9.5/vdp/vql/defining_a_derived_view/defining_a_metric_view/defining_a_metric_view.html"
   },
   "sources": [
    {
     "t": "Defining a Metric View (VQL Guide 9.5)",
     "u": "https://community.denodo.com/docs/html/accessible/9.5/vdp/vql/defining_a_derived_view/defining_a_metric_view/defining_a_metric_view.html"
    },
    {
     "t": "Metric views: assisted query (Data Marketplace Guide 9.5)",
     "u": "https://community.denodo.com/docs/html/browse/9.5/en/vdp/data_catalog/metric_views/assisted_query"
    },
    {
     "t": "What is new in Denodo 9.5",
     "u": "https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_5"
    },
    {
     "t": "What is new in Denodo 9.4",
     "u": "https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_4"
    },
    {
     "t": "Denodo AI SDK user manual (9.5, modified 1 Oct 2026)",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    {
     "t": "Denodo MCP Server user manual (9.5)",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/9.5/Denodo%20MCP%20Server%20-%20User%20Manual"
    },
    {
     "t": "Denodo Platform 9.3 and DeepQuery (Sep 16, 2025)",
     "u": "https://www.denodo.com/en/press-release/2025-09-16/denodo-platform-93-now-available-breakthrough-support-ai-innovation"
    },
    {
     "t": "Denodo Assistant",
     "u": "https://www.denodo.com/en/solutions/by-capability/denodo-assistant.md"
    },
    {
     "t": "Denodo 9.5 adds metric views (IT Brief, Jul 2026)",
     "u": "https://itbrief.com.au/story/denodo-9-5-adds-metric-views-for-ai-data-governance"
    },
    {
     "t": "Denodo Platform 9.4 press release (Mar 2026)",
     "u": "https://www.aap.com.au/aapreleases/globenewswire9668692/"
    },
    {
     "t": "Denodo Platform 9.1 press release",
     "u": "https://www.denodo.com/en/press-release/2024-11-20/denodo-platform-91-brings-new-advanced-ai-capabilities-and-enhanced-data-lakehouse-performance"
    },
    {
     "t": "Welcome to the era of Denodo Assistant",
     "u": "https://www.datamanagementblog.com/welcome-to-the-era-of-denodo-assistant/"
    },
    {
     "t": "Denodo AI SDK User Manual 9.2",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/9.2/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    {
     "t": "A Quick Guide to the Denodo AI SDK Evaluator",
     "u": "https://community.denodo.com/kb/view/document/A%20Quick%20Guide%20to%20the%20Denodo%20AI%20SDK%20Evaluator"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Use Denodo Assistant in the Data Catalog to suggest view and column descriptions, then run the batch stored procedures to fill empty ones. Look up the exact procedure names in the 9.1 or later VQL stored procedure docs. Test changes with the AI SDK Evaluator."
  },
  {
   "id": "dremio",
   "name": "Dremio",
   "category": "virtualization",
   "tagline": "Iceberg lakehouse and query engine; semantic layer is views, wikis, and labels.",
   "verdict": "partial",
   "verdictNote": "Views, wikis, labels, and semantic search give an AI agent business context, but Dremio has no metric, dimension, or relationship objects.",
   "artifacts": [
    {
     "name": "Views in spaces and folders",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "SQL DDL",
     "url": "https://docs.dremio.com/current/reference/sql/commands/create-view"
    },
    {
     "name": "Wikis and labels",
     "kind": "glossary",
     "status": "GA",
     "since": "",
     "format": "GUI, REST API, CLI",
     "url": "https://docs.dremio.com/dremio-cloud/manage-govern/wikis-labels/"
    },
    {
     "name": "AI-generated wikis and labels",
     "kind": "annotations",
     "status": "Preview",
     "since": "",
     "format": "GUI",
     "url": "https://docs.dremio.com/dremio-cloud/manage-govern/wikis-labels/"
    },
    {
     "name": "AI semantic search",
     "kind": "vector",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://docs.dremio.com/dremio-cloud/explore-analyze/discover"
    },
    {
     "name": "AI Agent",
     "kind": "agent",
     "status": "GA",
     "since": "2025-11",
     "format": "GUI",
     "url": "https://docs.dremio.com/dremio-cloud/explore-analyze/ai-agent"
    },
    {
     "name": "Dremio-hosted MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-11",
     "format": "API",
     "url": "https://docs.dremio.com/dremio-cloud/developer/mcp-server/"
    },
    {
     "name": "Open-source MCP server (dremio-mcp, self-hosted)",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-05",
     "format": "API",
     "url": "https://docs.dremio.com/dremio-cloud/developer/mcp-server/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No metric object found in docs. Metric logic lives as SQL expressions inside views.",
     "u": "https://docs.dremio.com/dremio-cloud/about/concepts"
    },
    "dimensions": {
     "l": 0,
     "n": "No declared dimensions or hierarchies found in docs. Views expose plain columns.",
     "u": "https://docs.dremio.com/dremio-cloud/about/concepts"
    },
    "relationships": {
     "l": 0,
     "n": "No declared join paths found in docs. Joins are written inside view SQL.",
     "u": "https://docs.dremio.com/dremio-cloud/help-support/well-architected-framework/self-serve-semantic-layer"
    },
    "synonyms": {
     "l": 3,
     "n": "Markdown wikis and labels on datasets and folders. The AI Agent reads them as context.",
     "u": "https://docs.dremio.com/dremio-cloud/explore-analyze/ai-agent"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified-query or example-SQL store found in the docs reviewed.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Built-in AI Agent writes SQL, charts, and explanations. Needs the CALL MODEL privilege; built-in or external LLM.",
     "u": "https://docs.dremio.com/dremio-cloud/explore-analyze/ai-agent"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer. Spaces, folders, views, wikis, and labels are the modeling objects.",
     "u": "https://docs.dremio.com/dremio-cloud/about/concepts"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found. A lineage graph exists for datasets only.",
     "u": "https://docs.dremio.com/llms-full.txt"
    },
    "vector": {
     "l": 3,
     "n": "AI semantic search over names, wikis, labels, and metadata. English-optimized; index can lag a few hours.",
     "u": "https://docs.dremio.com/dremio-cloud/explore-analyze/discover"
    },
    "mcp": {
     "l": 3,
     "n": "Hosted MCP server with OAuth, plus self-hosted open-source server. Tools include RunSqlQuery and GetSchemaOfTable.",
     "u": "https://docs.dremio.com/dremio-cloud/developer/mcp-server/"
    },
    "governance": {
     "l": 3,
     "n": "Agent acts with the user's privileges. Row-access and column-masking policies apply to views. Lineage is available.",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/row-column-policies"
    },
    "openStandard": {
     "l": 0,
     "n": "Listed in Apache Ossie ecosystem, but no Dremio converter or export found. Catalog follows Iceberg REST on Apache Polaris.",
     "u": "https://ossie.apache.org/ecosystem/"
    },
    "aiDescriptions": {
     "l": 2,
     "n": "Generative AI drafts wikis and labels for datasets, folders and sources. A search summary of older Cloud docs says preview. Check current status.",
     "u": "https://docs.dremio.com/cloud/tutorials/generating-labels-and-wikis"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Catalog REST API sets tags per dataset; the overview says wikis too. Column descriptions: only an old forum post, which says roadmap.",
     "u": "https://docs.dremio.com/dremio-cloud/api/catalog/tag"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic PII or semantic-type classification found in the results reviewed.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No value sampling for NL-to-SQL found. AI wiki generation reads schema and samples data, which is a different use.",
     "u": "https://docs.dremio.com/cloud/sonar/genai"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for suggestions found in the results reviewed.",
     "u": ""
    },
    "lineage": {
     "l": 1,
     "n": "Unverified natively. DataHub docs say its connector reads column-level lineage from Dremio. Dremio's own lineage page was not read.",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/dremio"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found in the results reviewed.",
     "u": ""
    }
   },
   "offers": [
    "Views in spaces and folders, layered as preparation, business, and application, give agents curated tables to query.",
    "Markdown wikis and labels on datasets add descriptions that the AI Agent reads for discovery and SQL generation.",
    "Hosted MCP server with OAuth lets Claude or ChatGPT query governed data under the user's own privileges.",
    "Built-in AI Agent turns questions into SQL and charts, and explains SQL or past jobs inside the console.",
    "Row-access and column-masking policies on tables and views are applied by the query planner at run time.",
    "Semantic search finds tables, views, and folders from natural-language terms using names, wikis, and labels."
   ],
   "gaps": [
    "No metric, dimension, or join-path objects. Business logic stays inside view SQL, so agents must infer joins and metric rules.",
    "AI generation of wikis and labels is Preview. Docs warn that table names, tags, and wikis may reach the model.",
    "No verified question-to-SQL store, no ontology layer, and no graph query language found.",
    "No Dremio converter for Apache Ossie found, so semantic definitions are not portable.",
    "The self-hosted MCP server is open source and outside Dremio support policies."
   ],
   "fillWith": [
    "dbt (dbt-dremio adapter, maintained by Dremio)",
    "Apache Ossie YAML (spec only, no Dremio converter found)"
   ],
   "nl2sqlPath": "Model business logic as business-layer views, then write a wiki and labels for each view and column. Point the AI Agent or the hosted MCP server at that space. Put metric formulas and join rules in the wikis, because Dremio has no object for them.",
   "snippet": {
    "lang": "sql",
    "title": "A view in a space, from the CREATE VIEW reference (wikis and labels are edited in the console, REST API, or CLI)",
    "code": "-- Dremio docs example: a view stored in a space or folder\nCREATE VIEW demo.jobs_view AS SELECT * FROM \"oracle_e2e\".DREMIO.JOBS",
    "u": "https://docs.dremio.com/current/reference/sql/commands/create-view"
   },
   "sources": [
    {
     "t": "Dremio Cloud key concepts",
     "u": "https://docs.dremio.com/dremio-cloud/about/concepts"
    },
    {
     "t": "Wikis and labels",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/wikis-labels/"
    },
    {
     "t": "Discover data (semantic search)",
     "u": "https://docs.dremio.com/dremio-cloud/explore-analyze/discover"
    },
    {
     "t": "Analyze using Dremio's AI Agent",
     "u": "https://docs.dremio.com/dremio-cloud/explore-analyze/ai-agent"
    },
    {
     "t": "Connect AI agents to Dremio with MCP",
     "u": "https://docs.dremio.com/dremio-cloud/developer/mcp-server/"
    },
    {
     "t": "Row and column policies",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/row-column-policies"
    },
    {
     "t": "Self-serve semantic layer (well-architected framework)",
     "u": "https://docs.dremio.com/dremio-cloud/help-support/well-architected-framework/self-serve-semantic-layer"
    },
    {
     "t": "CREATE VIEW (Dremio 26.x docs)",
     "u": "https://docs.dremio.com/current/reference/sql/commands/create-view"
    },
    {
     "t": "Dremio AI features (older cloud docs path, shows Preview label)",
     "u": "https://docs.dremio.com/cloud/sonar/ai"
    },
    {
     "t": "Dremio docs llms-full.txt",
     "u": "https://docs.dremio.com/llms-full.txt"
    },
    {
     "t": "Dremio unveils the agentic lakehouse (Nov 13, 2025)",
     "u": "https://www.dremio.com/press-releases/dremio-unveils-the-agentic-lakehouse-built-for-agents-managed-by-agents/"
    },
    {
     "t": "Dremio launches new MCP server (May 6, 2025)",
     "u": "https://www.dremio.com/press-releases/dremio-launches-new-mcp-server-furthers-its-leadership-in-accelerating-agentic-applications/"
    },
    {
     "t": "Dremio MCP server now hosted (Nov 13, 2025)",
     "u": "https://www.dremio.com/blog/dremio-mcp-server-now-hosted-in-dremios-next-generation-cloud/"
    },
    {
     "t": "dbt-dremio setup (maintained by Dremio)",
     "u": "https://docs.getdbt.com/docs/core/connect-data-platform/dremio-setup"
    },
    {
     "t": "Dremio Generative AI docs",
     "u": "https://docs.dremio.com/cloud/sonar/genai"
    },
    {
     "t": "Generating labels and wikis",
     "u": "https://docs.dremio.com/cloud/tutorials/generating-labels-and-wikis"
    },
    {
     "t": "Dremio Cloud Catalog API: tags",
     "u": "https://docs.dremio.com/dremio-cloud/api/catalog/tag"
    },
    {
     "t": "Dremio community: comments and metadata on columns",
     "u": "https://community.dremio.com/t/comments-and-metadata-on-columns-and-how-it-helps-ai/12487"
    },
    {
     "t": "DataHub Dremio source",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/dremio"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Turn on the Generative AI preference in Project Settings, then generate wikis and labels per dataset. For scripted writes, call the Catalog API tag endpoint POST /v0/projects/{project_id}/catalog/{id}/collaboration/tag for each dataset. Review all AI text, because Dremio warns it can be wrong."
  },
  {
   "id": "starburst",
   "name": "Starburst / Trino",
   "category": "virtualization",
   "tagline": "Trino-based federated query engine with data products, an AI agent, and an MCP server.",
   "verdict": "partial",
   "verdictNote": "Data products (views plus descriptions, tags, sample queries, and business rules) feed the AI agent, but there are no metric, dimension, or relationship objects, and open-source Trino has none of it.",
   "artifacts": [
    {
     "name": "Data product (views and materialized views in a schema)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, REST API",
     "url": "https://docs.starburst.io/latest/data-products/index.html"
    },
    {
     "name": "Data Products as Code",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
    },
    {
     "name": "Data product business rules (businessContext)",
     "kind": "annotations",
     "status": "GA",
     "since": "2026-06",
     "format": "Free text in GUI or YAML",
     "url": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
    },
    {
     "name": "AI Data Assistant (AIDA), powered by the Starburst AI agent",
     "kind": "agent",
     "status": "GA",
     "since": "2025-11",
     "format": "GUI",
     "url": "https://docs.starburst.io/latest/starburst-ai/aida-ai.html"
    },
    {
     "name": "AI agent-based data product enrichment",
     "kind": "annotations",
     "status": "GA",
     "since": "2025-11",
     "format": "GUI",
     "url": "https://docs.starburst.io/latest/starburst-ai/data-product-enrichment-ai.html"
    },
    {
     "name": "Starburst MCP server (Starburst Enterprise)",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-11",
     "format": "API",
     "url": "https://docs.starburst.io/latest/starburst-ai/mcp-server.html"
    },
    {
     "name": "AIDA skills and external MCP servers",
     "kind": "agent",
     "status": "Preview",
     "since": "2026-08",
     "format": "GUI",
     "url": "https://docs.starburst.io/latest/starburst-ai/aida-ai.html"
    },
    {
     "name": "MCP on Starburst Galaxy",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "API",
     "url": "https://docs.starburst.io/starburst-galaxy/starburst-ai/mcp-server.html"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No metric object. Metric rules go in view SQL or in free-text business rules that AIDA reads.",
     "u": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or hierarchy objects. Columns and column descriptions are the only structure.",
     "u": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
    },
    "relationships": {
     "l": 0,
     "n": "No declared join paths. Dataset descriptions can explain relations in free text.",
     "u": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
    },
    "synonyms": {
     "l": 3,
     "n": "Data product and column descriptions, tags, and business rules (up to 60,000 characters) give AIDA context.",
     "u": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "Data products store sample queries, but the docs reviewed do not say AIDA uses them as few-shot context.",
     "u": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
    },
    "nl2sql": {
     "l": 3,
     "n": "AIDA turns questions into SQL over a chosen data product. GA since 477-e; needs AI workflows and agentic-layer licenses.",
     "u": "https://docs.starburst.io/latest/starburst-ai/aida-ai.html"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology. Data products group into domains, but no entity or class model was found.",
     "u": "https://docs.starburst.io/latest/data-products/index.html"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found in the Starburst or Trino docs reviewed.",
     "u": ""
    },
    "vector": {
     "l": 1,
     "n": "AI functions include starburst.ai.generate_embedding(). No native vector index found; data product search is keyword.",
     "u": "https://docs.starburst.io/latest/starburst-ai/mcp-server.html"
    },
    "mcp": {
     "l": 3,
     "n": "Integrated MCP server, GA since 477-e: read-only query tool plus data product search and retrieval. Needs an MCP license.",
     "u": "https://docs.starburst.io/latest/starburst-ai/mcp-server.html"
    },
    "governance": {
     "l": 3,
     "n": "AIDA runs under the user's role and logs agent interactions. Data product privileges grant no table access.",
     "u": "https://docs.starburst.io/latest/starburst-ai/aida-ai.html"
    },
    "openStandard": {
     "l": 0,
     "n": "Data Products as Code is Starburst-specific YAML (sep/v1). Starburst Data is listed in the Ossie ecosystem; no converter found.",
     "u": "https://ossie.apache.org/ecosystem/"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "AI agent enrichment drafts data product and dataset descriptions; Galaxy has Enrich with AIDA. A May 2026 release says Automatic Metadata Enrichment is GA. Link between them unconfirmed.",
     "u": "https://docs.starburst.io/latest/starburst-ai/data-product-enrichment-ai.html"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Trino COMMENT ON TABLE, VIEW, COLUMN sets one object per statement. Support depends on the connector. Python client manages data product tags.",
     "u": "https://trino.io/docs/current/sql/comment.html"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification found. Galaxy attribute tags are applied by hand.",
     "u": "https://docs.starburst.io/starburst-galaxy/security-and-compliance/manage-galaxy-access/manage-users-roles-and-tags/create-and-use-attribute-tags"
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for suggestions found in the results reviewed.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "No Starburst lineage page found. Searches returned unrelated results, so this is not proof of absence.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling or feedback loop found in the results reviewed.",
     "u": ""
    }
   },
   "offers": [
    "Data products bundle views with descriptions, tags, owners, sample queries, and business rules. AIDA reads them as context.",
    "AIDA generates and runs SQL over a chosen data product, with personas and an audit log of agent interactions.",
    "Integrated MCP server (GA since 477-e) offers read-only query plus data product search and retrieval tools.",
    "Agent-based enrichment drafts descriptions for data products, datasets, and columns from schema, SQL, and optional data samples.",
    "Data Products as Code exports and imports data products as YAML, which supports versioning and auditing."
   ],
   "gaps": [
    "No metric, dimension, or join-path objects. Metric logic lives in view SQL or free-text business rules.",
    "Open-source Trino has no semantic layer; views accept only a COMMENT. Data products, AIDA, and MCP are Starburst products.",
    "Data products need a Hive or Iceberg catalog. AIDA and MCP need separate licenses.",
    "AIDA skills, external MCP servers, and data sampling in enrichment are public preview (August 2026).",
    "No documented use of sample queries as AI context, and no native vector search."
   ],
   "fillWith": [
    "dbt (dbt-trino adapter, maintained by Starburst)",
    "Cube (has a Trino connector)",
    "Apache Ossie (Starburst Data is listed, no converter found)"
   ],
   "nl2sqlPath": "Build data products on Hive or Iceberg catalogs, write column descriptions and business rules, then use AIDA or the Starburst MCP server against those products. Put metric formulas in business rules or view SQL, because no metric object exists. On open-source Trino, you must build the semantic context yourself, for example with dbt or Cube.",
   "snippet": {
    "lang": "yaml",
    "title": "Data Products as Code excerpt (shortened; publishing also needs summary and owners)",
    "code": "apiVersion: sep/v1\nkind: DataProduct\nmetadata:\n  name: Comprehensive Data Product\n  catalogName: analytics_catalog\n  dataDomainName: Enterprise Analytics Domain\n  businessContext: Revenue is gross_sales - returns - discounts in USD.\ndatasets:\n  views:\n    - name: sales_summary\n      definitionQuery: SELECT product_id, SUM(amount) AS total_revenue FROM raw.transactions.sales GROUP BY 1\n      columns:\n        - name: total_revenue\n          type: decimal(18,2)\n          description: Total revenue in USD",
    "u": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
   },
   "sources": [
    {
     "t": "Starburst AI overview",
     "u": "https://docs.starburst.io/latest/starburst-ai/index.html"
    },
    {
     "t": "AI Data Assistant (AIDA)",
     "u": "https://docs.starburst.io/latest/starburst-ai/aida-ai.html"
    },
    {
     "t": "Starburst MCP server",
     "u": "https://docs.starburst.io/latest/starburst-ai/mcp-server.html"
    },
    {
     "t": "Data product AI agent-based enrichment",
     "u": "https://docs.starburst.io/latest/starburst-ai/data-product-enrichment-ai.html"
    },
    {
     "t": "Data products overview",
     "u": "https://docs.starburst.io/latest/data-products/index.html"
    },
    {
     "t": "Manage data products (includes Data Products as Code)",
     "u": "https://docs.starburst.io/latest/data-products/manage-data-products.html"
    },
    {
     "t": "Release 477-e LTS (25 Nov 2025): AI Agent, MCP GA",
     "u": "https://docs.starburst.io/latest/release/release-477-e.html"
    },
    {
     "t": "Release 480-e LTS (29 May 2026)",
     "u": "https://docs.starburst.io/latest/release/release-480-e.html"
    },
    {
     "t": "Release 481-e STS (15 Jun 2026): business rules",
     "u": "https://docs.starburst.io/latest/release/release-481-e.html"
    },
    {
     "t": "Release 482-e LTS (11 Sep 2026): public preview items",
     "u": "https://docs.starburst.io/latest/release/release-482-e.html"
    },
    {
     "t": "AIDA on Starburst Galaxy",
     "u": "https://docs.starburst.io/starburst-galaxy/starburst-ai/ai-aida.html"
    },
    {
     "t": "MCP on Starburst Galaxy",
     "u": "https://docs.starburst.io/starburst-galaxy/starburst-ai/mcp-server.html"
    },
    {
     "t": "Trino CREATE VIEW",
     "u": "https://trino.io/docs/current/sql/create-view.html"
    },
    {
     "t": "dbt-trino setup (maintained by Starburst)",
     "u": "https://docs.getdbt.com/docs/core/connect-data-platform/trino-setup"
    },
    {
     "t": "Cube: Trino data source",
     "u": "https://docs.cube.dev/admin/connect-to-data/data-sources/trino"
    },
    {
     "t": "Galaxy: browse and organize data products",
     "u": "https://docs.starburst.io/starburst-galaxy/working-with-data/data-products/browse-organize-data-products.html"
    },
    {
     "t": "Starburst Enterprise Intelligence Platform release",
     "u": "https://www.starburst.io/press-releases/starburst-unveils-enterprise-intelligence-platform-giving-enterprises-a-faster-path-to-trusted-ai/"
    },
    {
     "t": "Trino COMMENT",
     "u": "https://trino.io/docs/current/sql/comment.html"
    },
    {
     "t": "starburst-data-products-client (PyPI)",
     "u": "https://pypi.org/project/starburst-data-products-client/"
    },
    {
     "t": "Galaxy attribute tags",
     "u": "https://docs.starburst.io/starburst-galaxy/security-and-compliance/manage-galaxy-access/manage-users-roles-and-tags/create-and-use-attribute-tags"
    }
   ],
   "verified": "2026-10-24",
   "logo": "trino",
   "worksWith": [],
   "enrichHowTo": "Run the AI agent enrichment on data products, or use Enrich with AIDA in Galaxy, and review the output. For scripted writes, run Trino COMMENT ON COLUMN statements, one per column. Enrichment needs AI workflows and Agentic layer licenses and starburst.agent.enabled=true.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "COMMENT ON TABLE users IS 'master table';\nCOMMENT ON COLUMN users.name IS 'full name';",
    "u": "https://trino.io/docs/current/sql/comment.html"
   }
  },
  {
   "id": "timbr",
   "name": "Timbr.ai",
   "category": "virtualization",
   "tagline": "SQL-native ontology and virtual knowledge graph over existing SQL sources, with data agents and MCP.",
   "verdict": "native",
   "verdictNote": "Concepts, relationships, measures, cubes, and a Knowledge Base of approved examples are first-party objects that Timbr's own agents and MCP server read.",
   "artifacts": [
    {
     "name": "Ontology concept (CREATE CONCEPT)",
     "kind": "ontology",
     "status": "GA",
     "since": "",
     "format": "SQL DDL",
     "url": "https://docs.timbr.ai/doc/docs/sql/sql-ddl"
    },
    {
     "name": "Mapping (CREATE MAPPING) from source tables to concepts",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "SQL DDL",
     "url": "https://docs.timbr.ai/doc/docs/sql/mappings"
    },
    {
     "name": "Measure (CREATE MEASURE) and ontology cube",
     "kind": "metric-view",
     "status": "GA",
     "since": "",
     "format": "SQL DDL",
     "url": "https://docs.timbr.ai/doc/docs/sql/measures"
    },
    {
     "name": "Knowledge Base (CREATE KNOWLEDGEBASE)",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "SQL DDL",
     "url": "https://docs.timbr.ai/doc/docs/sql/knowledge-bases"
    },
    {
     "name": "Virtual knowledge graph and graph algorithms (gtimbr)",
     "kind": "knowledge-graph",
     "status": "GA",
     "since": "",
     "format": "SQL",
     "url": "https://docs.timbr.ai/doc/docs/sql/graph-algorithms"
    },
    {
     "name": "Data agents and Ask Timbr",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://docs.timbr.ai/doc/docs/platform/"
    },
    {
     "name": "LangChain and LangGraph SDK",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "Python SDK",
     "url": "https://docs.timbr.ai/doc/docs/integration/langchain-sdk"
    },
    {
     "name": "Timbr MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://docs.timbr.ai/doc/docs/integration/mcp/overview"
    },
    {
     "name": "Solomon (AI ontology author)",
     "kind": "agent",
     "status": "Preview",
     "since": "2026-07",
     "format": "GUI",
     "url": "https://docs.timbr.ai/doc/docs/general/changelog"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "CREATE MEASURE defines aggregations with filters and temporal variants. Measures feed cubes.",
     "u": "https://docs.timbr.ai/doc/docs/sql/measures"
    },
    "dimensions": {
     "l": 3,
     "n": "Cubes expose properties of a concept and related concepts as dimensions; grouping is chosen at query time.",
     "u": "https://docs.timbr.ai/doc/docs/sql/cubes"
    },
    "relationships": {
     "l": 3,
     "n": "Relationships are foreign-key constraints with inverse names. One-to-many, many-to-many, and transitive forms exist.",
     "u": "https://docs.timbr.ai/doc/docs/sql/sql-ddl"
    },
    "synonyms": {
     "l": 3,
     "n": "Concept descriptions, tags, and Knowledge Base instructions that define business terms. No dedicated synonym field found.",
     "u": "https://docs.timbr.ai/doc/docs/sql/knowledge-bases"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Knowledge Base holds approved question-SQL examples. Agents reuse or follow them before generating SQL.",
     "u": "https://docs.timbr.ai/doc/docs/sql/knowledge-bases"
    },
    "nl2sql": {
     "l": 3,
     "n": "Data agents, Ask Timbr, and the LangChain SDK generate Timbr SQL over the ontology with your LLM.",
     "u": "https://docs.timbr.ai/doc/docs/integration/langchain-sdk"
    },
    "ontology": {
     "l": 3,
     "n": "SQL-native ontology: concepts with inheritance, relationships, and inference, exposed as a virtual schema over JDBC, ODBC, REST.",
     "u": "https://docs.timbr.ai/doc/docs/getting-started/intro-timbr"
    },
    "graph": {
     "l": 3,
     "n": "Graph traversal in SQL and graph algorithms in the gtimbr schema. No SPARQL or Cypher found in the docs.",
     "u": "https://docs.timbr.ai/doc/docs/sql/graph-algorithms"
    },
    "vector": {
     "l": 0,
     "n": "No vector index or embedding search found in the docs. GraphRAG Extract maps entities from unstructured data.",
     "u": "https://docs.timbr.ai/doc/docs/general/changelog"
    },
    "mcp": {
     "l": 3,
     "n": "First-party MCP server with API key or OAuth. Tools include query_data, generate_sql, describe_knowledge_graph, execute_sql.",
     "u": "https://docs.timbr.ai/doc/docs/integration/mcp/overview"
    },
    "governance": {
     "l": 3,
     "n": "RBAC on ontologies, agents, and Knowledge Bases, plus row-level security policies that also cover views.",
     "u": "https://docs.timbr.ai/doc/docs/sql/permissions"
    },
    "openStandard": {
     "l": 0,
     "n": "No Ossie listing found. Intro says ERD and OWL import exists; ontology Git export arrived in 2.69.0 (Oct 2026).",
     "u": "https://docs.timbr.ai/doc/docs/getting-started/intro-timbr"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Ontology of concepts, relationships, and measures over many SQL sources, so agents write short semantic SQL instead of joins.",
    "Knowledge Base stores approved question-SQL examples and rules that agents look up before they generate SQL.",
    "MCP server exposes natural-language tools (query_data, generate_sql) and metadata tools (describe_knowledge_graph, list_ontologies).",
    "Cubes and measures define aggregations once and serve SQL and BI tools over JDBC, ODBC, and REST.",
    "Row-level security policies and RBAC apply to ontologies, agents, and Knowledge Bases."
   ],
   "gaps": [
    "Ontology DDL is Timbr-specific SQL. No Ossie or OSI support found, so models are not portable.",
    "AI features need a customer-provided LLM. MCP docs say outputs are probabilistic and need review.",
    "No vector or embedding search found in the docs.",
    "Docs give no GA or beta label for MCP or Knowledge Base. Solomon is in private preview.",
    "Graph support is SQL traversal and algorithms; no SPARQL or Cypher found."
   ],
   "fillWith": [],
   "nl2sqlPath": "Map your sources to concepts, add relationships and measures, and describe each concept. Create a Knowledge Base of approved examples and bind it to the ontology or to a data agent. Then connect an LLM through a data agent, the LangChain SDK, or the MCP server.",
   "snippet": {
    "lang": "sql",
    "title": "Concept with a relationship (placeholders as written in the Timbr docs)",
    "code": "CREATE OR REPLACE CONCEPT `{concept_name}` (\n  `{property_name}` {property_type},\n  `{property_name2}` {property_type2},\n  PRIMARY KEY(`{property_name}`),\n  LABEL(`{property_name2}`),\n  CONSTRAINT `{relationship_name}`\n    FOREIGN KEY (`{property_name2}`)\n    REFERENCES `{target_concept}` (`{target_concept_property}`)\n    INVERSEOF `{inverse_relationship_name}`\n) INHERITS (`{inherits_from_concept}`)\nDESCRIPTION '{concept_description}';",
    "u": "https://docs.timbr.ai/doc/docs/sql/sql-ddl"
   },
   "sources": [
    {
     "t": "Timbr documentation home",
     "u": "https://docs.timbr.ai/"
    },
    {
     "t": "Introduction to Timbr",
     "u": "https://docs.timbr.ai/doc/docs/getting-started/intro-timbr"
    },
    {
     "t": "The Semantic Graph Platform",
     "u": "https://docs.timbr.ai/doc/docs/platform/"
    },
    {
     "t": "Concepts (SQL DDL)",
     "u": "https://docs.timbr.ai/doc/docs/sql/sql-ddl"
    },
    {
     "t": "Mappings",
     "u": "https://docs.timbr.ai/doc/docs/sql/mappings"
    },
    {
     "t": "Measures",
     "u": "https://docs.timbr.ai/doc/docs/sql/measures"
    },
    {
     "t": "Cubes",
     "u": "https://docs.timbr.ai/doc/docs/sql/cubes"
    },
    {
     "t": "Knowledge Bases",
     "u": "https://docs.timbr.ai/doc/docs/sql/knowledge-bases"
    },
    {
     "t": "Permissions and roles",
     "u": "https://docs.timbr.ai/doc/docs/sql/permissions"
    },
    {
     "t": "Graph algorithms",
     "u": "https://docs.timbr.ai/doc/docs/sql/graph-algorithms"
    },
    {
     "t": "Timbr MCP server overview",
     "u": "https://docs.timbr.ai/doc/docs/integration/mcp/overview"
    },
    {
     "t": "Timbr integrations index",
     "u": "https://docs.timbr.ai/doc/docs/integration/"
    },
    {
     "t": "LangChain SDK",
     "u": "https://docs.timbr.ai/doc/docs/integration/langchain-sdk"
    },
    {
     "t": "Timbr platform changelog",
     "u": "https://docs.timbr.ai/doc/docs/general/changelog"
    },
    {
     "t": "What's new (2.69.0, 11 Oct 2026)",
     "u": "https://docs.timbr.ai/doc/docs/general/whats_new"
    },
    {
     "t": "Timbr.ai home page",
     "u": "https://timbr.ai/"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": []
  },
  {
   "id": "atscale",
   "name": "AtScale",
   "category": "semantic-layer",
   "tagline": "Enterprise semantic layer with an open modeling language (SML) and an MCP server.",
   "verdict": "native",
   "verdictNote": "AtScale serves governed metrics over SQL, DAX, MDX, and MCP, and publishes SML as an open format.",
   "worksWith": [
    "Amazon Redshift",
    "Azure Synapse",
    "Databricks",
    "Google BigQuery",
    "Microsoft SQL Server",
    "PostgreSQL",
    "Snowflake",
    "Db2",
    "Hadoop",
    "InterSystems IRIS"
   ],
   "worksWithUrl": "https://documentation.atscale.com/installer/deploying-and-configuring-atscale/adding-data-warehouses",
   "artifacts": [
    {
     "name": "AtScale semantic models",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, SML YAML",
     "url": "https://www.atscale.com/press/atscale-databricks-mcp-marketplace-semantic-layer/"
    },
    {
     "name": "Semantic Modeling Language (SML), open source",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://github.com/semanticdatalayer/sml"
    },
    {
     "name": "AtScale MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-12",
     "format": "API",
     "url": "https://www.atscale.com/press/atscale-databricks-mcp-marketplace-semantic-layer/"
    },
    {
     "name": "ACE engine inside Snowflake Semantic Views",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-06",
     "format": "SQL",
     "url": "https://atlan.com/know/ai-agent/semantic-layer/atscale-vs-cube-semantic-layer/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Governed metrics and business logic served over SQL, DAX, MDX, and MCP, per the Databricks listing.",
     "u": "https://marketplace.databricks.com/details/39527f4f-9be7-4b53-80f4-8d334175966d/AtScale-Inc_AtScale-MCP"
    },
    "dimensions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "relationships": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "synonyms": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "verifiedQueries": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "nl2sql": {
     "l": 1,
     "n": "AtScale press describes natural language query on its semantic layer. Product status and LLM setup not checked.",
     "u": "https://www.atscale.com/press/new-natural-language-query-capabilities-with-semantic-layer-integration/"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No vector search found.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "MCP server announced available 1 Dec 2025 in the Databricks MCP Marketplace. Customers connect existing models.",
     "u": "https://www.atscale.com/press/atscale-databricks-mcp-marketplace-semantic-layer/"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 3,
     "n": "SML is open source (Apache license per a secondary source). AtScale joined OSI on 27 Jan 2026.",
     "u": "https://snowflake.atscale.com/press/atscale-joins-open-semantic-interchange-open-standards/"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Governed metrics reachable through SQL, DAX, MDX, and MCP.",
    "MCP server in the Databricks MCP Marketplace since Dec 2025.",
    "SML is open source and Git-friendly.",
    "Runs on Snowflake, Databricks, and BigQuery among other warehouses."
   ],
   "gaps": [
    "Dimension, relationship, and synonym detail was not confirmed this session.",
    "The platform is closed source. Only SML is open, per a secondary source.",
    "Snowflake Semantic Views integration is Preview since June 2026, per Atlan (a competitor).",
    "Supported warehouse list comes from versioned installer docs, not a current matrix."
   ],
   "fillWith": [
    "Apache Ossie YAML"
   ],
   "nl2sqlPath": "Model metrics in AtScale and expose them through the MCP server to your agent. Keep the agent on governed metrics instead of raw tables. Check current NLQ product status with AtScale.",
   "snippet": {
    "lang": "yaml",
    "title": "Not retrieved. SML repository could not be fetched this session.",
    "code": "# Snippet not retrieved this session.",
    "u": "https://github.com/semanticdatalayer/sml"
   },
   "sources": [
    {
     "t": "AtScale: adding data warehouses",
     "u": "https://documentation.atscale.com/installer/deploying-and-configuring-atscale/adding-data-warehouses"
    },
    {
     "t": "AtScale supported tools and platforms (2023.4.1)",
     "u": "https://documentation.atscale.com/installer/I2023.4.1/product-requirements/supported-tools-and-platforms"
    },
    {
     "t": "AtScale delivers semantic intelligence to Databricks MCP Marketplace",
     "u": "https://www.atscale.com/press/atscale-databricks-mcp-marketplace-semantic-layer/"
    },
    {
     "t": "AtScale MCP on Databricks Marketplace",
     "u": "https://marketplace.databricks.com/details/39527f4f-9be7-4b53-80f4-8d334175966d/AtScale-Inc_AtScale-MCP"
    },
    {
     "t": "AtScale joins Open Semantic Interchange",
     "u": "https://snowflake.atscale.com/press/atscale-joins-open-semantic-interchange-open-standards/"
    },
    {
     "t": "AtScale NLQ with semantic layer integration",
     "u": "https://www.atscale.com/press/new-natural-language-query-capabilities-with-semantic-layer-integration/"
    },
    {
     "t": "SML GitHub repository",
     "u": "https://github.com/semanticdatalayer/sml"
    },
    {
     "t": "Atlan: AtScale vs Cube (competitor view)",
     "u": "https://atlan.com/know/ai-agent/semantic-layer/atscale-vs-cube-semantic-layer/"
    }
   ],
   "verified": "2026-10-24",
   "logo": null
  },
  {
   "id": "cube",
   "name": "Cube (Core and Cloud, D3)",
   "category": "semantic-layer",
   "tagline": "Semantic layer with cubes and views, plus a Cloud agent platform (D3) and MCP.",
   "verdict": "native",
   "verdictNote": "Cubes, views, access policies, certified queries, a chat API, a hosted MCP server, and Ossie import and export are documented.",
   "worksWith": [
    "Amazon Redshift",
    "Google BigQuery",
    "Snowflake",
    "Databricks",
    "Microsoft Fabric",
    "ClickHouse",
    "SingleStore",
    "Apache Pinot",
    "Firebolt",
    "Vertica",
    "Amazon Athena",
    "DuckDB",
    "MotherDuck",
    "Hive",
    "SparkSQL",
    "Presto",
    "Trino",
    "Postgres",
    "Microsoft SQL Server",
    "MySQL",
    "Oracle",
    "SQLite",
    "QuestDB",
    "ksqlDB",
    "Materialize",
    "RisingWave",
    "Elasticsearch",
    "MongoDB",
    "Druid"
   ],
   "worksWithUrl": "https://docs.cube.dev/admin/connect-to-data/data-sources",
   "artifacts": [
    {
     "name": "Cubes and views (data model)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML, JavaScript",
     "url": "https://docs.cube.dev/reference/data-modeling/cube.md"
    },
    {
     "name": "Cube D3 agentic analytics platform",
     "kind": "agent",
     "status": "Unverified",
     "since": "2025-06",
     "format": "GUI",
     "url": "https://docs.cube.dev/admin/ai"
    },
    {
     "name": "Chat API (AI API) for Cube agents",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "",
     "format": "API",
     "url": "https://docs.cube.dev/embed/chat"
    },
    {
     "name": "Cube Remote MCP server (cubecloud.dev/mcp)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://docs.cube.dev/docs/integrations/mcp-server"
    },
    {
     "name": "Local MCP server (@cube-dev/mcp-server)",
     "kind": "mcp",
     "status": "Deprecated",
     "since": "",
     "format": "API",
     "url": "https://github.com/cubedevinc/cube-mcp-server"
    },
    {
     "name": "Apache Ossie import and export",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-10",
     "format": "CLI, API",
     "url": "https://cube.dev/changelog/2026-10-16-changelog-apache-ossie-integration"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Measures are declared in cubes. Views expose them to consumers.",
     "u": "https://docs.cube.dev/reference/data-modeling/cube.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Dimensions are declared in cubes and included in views.",
     "u": "https://docs.cube.dev/reference/data-modeling/cube.md"
    },
    "relationships": {
     "l": 3,
     "n": "Directed joins such as many_to_one between cubes. Views use join_path.",
     "u": "https://docs.cube.dev/docs/data-modeling/joins.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Agents take rules and accessible views as configuration. A dedicated synonym field was not confirmed.",
     "u": "https://docs.cube.dev/embed/chat"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Agent configuration supports certified queries. Status label not seen.",
     "u": "https://docs.cube.dev/embed/chat"
    },
    "nl2sql": {
     "l": 3,
     "n": "D3 AI Data Analyst and the Chat API answer questions over the semantic layer. Launched June 2025.",
     "u": "https://cube.dev/events/introducing-d3-the-first-agentic-analytics-platform-built-on-a-universal"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found. Cubes and views are the modeling objects.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No vector search found in the pages seen.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Hosted remote MCP server with OAuth, listed as available on all plans in Cube docs. Local server is deprecated.",
     "u": "https://docs.cube.dev/docs/integrations/mcp-server"
    },
    "governance": {
     "l": 3,
     "n": "Row-level security, data access policies, and user attributes are enforced by Cube, not by the agent.",
     "u": "https://docs.cube.dev/embed/chat"
    },
    "openStandard": {
     "l": 3,
     "n": "Export and import Apache Ossie models through the Cube CLI and Platform API (changelog 16 Oct 2026).",
     "u": "https://cube.dev/changelog/2026-10-16-changelog-apache-ossie-integration"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Cubes and views give agents a curated, joined model with measures and dimensions defined once.",
    "Hosted MCP server lets Claude, ChatGPT, and Cursor query governed data.",
    "Chat API runs Cube agents with rules, certified queries, and chosen views.",
    "Access policies and row-level security apply to agent queries.",
    "Ossie import and export moves models in and out of Cube."
   ],
   "gaps": [
    "Cube only reads SQL-queryable sources, per the data sources page.",
    "D3 and the Chat API carry no GA or beta label in the pages seen.",
    "Agent UI configuration is deprecated in favor of code-first setup, per Chat API docs.",
    "No ontology, graph, or vector feature found."
   ],
   "fillWith": [
    "Apache Ossie YAML",
    "dbt for upstream transformations"
   ],
   "nl2sqlPath": "Model cubes and views on your warehouse, then expose a small set of views to an agent. Use the hosted MCP server or the Chat API. Add rules and certified queries in the agent configuration.",
   "snippet": {
    "lang": "yaml",
    "title": "Not retrieved. Docs could not be fetched this session. See the cube reference.",
    "code": "# Snippet not retrieved this session.",
    "u": "https://docs.cube.dev/reference/data-modeling/cube.md"
   },
   "sources": [
    {
     "t": "Cube data sources",
     "u": "https://docs.cube.dev/admin/connect-to-data/data-sources"
    },
    {
     "t": "Cube reference (cube)",
     "u": "https://docs.cube.dev/reference/data-modeling/cube.md"
    },
    {
     "t": "Cube joins",
     "u": "https://docs.cube.dev/docs/data-modeling/joins.md"
    },
    {
     "t": "Cube MCP server",
     "u": "https://docs.cube.dev/docs/integrations/mcp-server"
    },
    {
     "t": "Cube MCP connectors",
     "u": "https://docs.cube.dev/admin/ai/mcp-connectors"
    },
    {
     "t": "Cube Chat API",
     "u": "https://docs.cube.dev/embed/chat"
    },
    {
     "t": "Cube AI docs",
     "u": "https://docs.cube.dev/admin/ai"
    },
    {
     "t": "Cube D3 launch event page",
     "u": "https://cube.dev/events/introducing-d3-the-first-agentic-analytics-platform-built-on-a-universal"
    },
    {
     "t": "Cube changelog: Apache Ossie integration (16 Oct 2026)",
     "u": "https://cube.dev/changelog/2026-10-16-changelog-apache-ossie-integration"
    },
    {
     "t": "Cube MCP server GitHub (deprecated local server)",
     "u": "https://github.com/cubedevinc/cube-mcp-server"
    }
   ],
   "verified": "2026-10-24",
   "logo": null
  },
  {
   "id": "dbt",
   "name": "dbt Semantic Layer (MetricFlow)",
   "category": "semantic-layer",
   "tagline": "Metric definitions in dbt projects, compiled to SQL by the open-source MetricFlow engine.",
   "verdict": "native",
   "verdictNote": "MetricFlow gives governed metrics that agents can query through the dbt MCP server, but serving them to tools needs a paid dbt plan.",
   "worksWith": [
    "Snowflake",
    "BigQuery",
    "Databricks",
    "Redshift",
    "Postgres",
    "Trino"
   ],
   "worksWithUrl": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/sl-faqs",
   "artifacts": [
    {
     "name": "dbt Semantic Layer (semantic models and metrics in YAML)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://docs.getdbt.com/reference/semantic-layer-reference"
    },
    {
     "name": "MetricFlow (open source, Apache 2.0)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2025-10",
     "format": "YAML",
     "url": "https://www.getdbt.com/blog/open-source-metricflow-governed-metrics"
    },
    {
     "name": "dbt MCP server (semantic layer tools, text_to_sql tool)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "API",
     "url": "https://docs.getdbt.com/docs/dbt-ai/about-mcp"
    },
    {
     "name": "dbt Remote MCP server with OAuth",
     "kind": "mcp",
     "status": "Preview",
     "since": "2026-05",
     "format": "API",
     "url": "https://www.getdbt.com/blog/what-s-shipped-in-dbt-may-2026"
    },
    {
     "name": "Apache Ossie converter for dbt",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": "YAML",
     "url": "https://www.dremio.com/blog/apache-ossie-the-open-semantic-interchange-joins-the-apache-incubator"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Governed metrics in YAML. MetricFlow compiles them to dialect-specific SQL. Reference page seen in search only.",
     "u": "https://docs.getdbt.com/reference/semantic-layer-reference"
    },
    "dimensions": {
     "l": 3,
     "n": "Semantic models declare dimensions. Detail page was not read this session.",
     "u": "https://docs.getdbt.com/reference/semantic-layer-reference"
    },
    "relationships": {
     "l": 3,
     "n": "Semantic models declare entities used to join. Detail page was not read this session.",
     "u": "https://docs.getdbt.com/reference/semantic-layer-reference"
    },
    "synonyms": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "verifiedQueries": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "MCP text_to_sql tool generates SQL from project context. Status label not found.",
     "u": "https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found. Teams use semantic models and metrics.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No vector search found in the pages seen.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "dbt MCP server exposes semantic layer, Discovery API, SQL tools. OAuth for remote server was labeled beta in May 2026.",
     "u": "https://docs.getdbt.com/docs/dbt-ai/about-mcp"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 3,
     "n": "MetricFlow is Apache 2.0 since Oct 2025. dbt Labs co-leads Apache Ossie. A dbt converter is reported merged.",
     "u": "https://www.getdbt.com/blog/open-source-metricflow-governed-metrics"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Metrics defined once in YAML and compiled to SQL by MetricFlow, so agents do not write joins or aggregations.",
    "MCP server lets agents list metrics and query the semantic layer.",
    "MetricFlow is open source under Apache 2.0, so definitions are not locked to one tool.",
    "Works with six platforms listed in the official FAQ."
   ],
   "gaps": [
    "Semantic Layer only answers questions inside the modeled scope. dbt's own benchmark states this trade-off.",
    "Serving metrics to BI and AI tools needs a paid dbt plan, per a third-party guide.",
    "No synonym, verified-query, ontology, or vector feature was found in the pages seen.",
    "Product pages were not readable this session, so status labels are partly Unverified."
   ],
   "fillWith": [
    "Apache Ossie YAML",
    "A catalog tool for business glossary"
   ],
   "nl2sqlPath": "Model your core metrics and dimensions in dbt, then connect an agent through the dbt MCP server. Let the agent query metrics for modeled questions. Fall back to text-to-SQL only for questions outside the model.",
   "snippet": {
    "lang": "yaml",
    "title": "Not retrieved. Docs could not be fetched this session. See the reference page.",
    "code": "# Snippet not retrieved this session.",
    "u": "https://docs.getdbt.com/reference/semantic-layer-reference"
   },
   "sources": [
    {
     "t": "dbt Semantic Layer FAQs (supported platforms)",
     "u": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/sl-faqs"
    },
    {
     "t": "Semantic layer reference",
     "u": "https://docs.getdbt.com/reference/semantic-layer-reference"
    },
    {
     "t": "About dbt MCP server",
     "u": "https://docs.getdbt.com/docs/dbt-ai/about-mcp"
    },
    {
     "t": "dbt MCP available tools",
     "u": "https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools"
    },
    {
     "t": "Open source MetricFlow and governed metrics",
     "u": "https://www.getdbt.com/blog/open-source-metricflow-governed-metrics"
    },
    {
     "t": "dbt Labs affirms commitment to OSI by open sourcing MetricFlow",
     "u": "https://www.getdbt.com/blog/dbt-labs-affirms-commitment-to-open-semantic-interchange-by-open-sourcing-metricflow"
    },
    {
     "t": "What's shipped in dbt, May 2026",
     "u": "https://www.getdbt.com/blog/what-s-shipped-in-dbt-may-2026"
    },
    {
     "t": "OSI is now Apache Ossie (dbt)",
     "u": "https://www.getdbt.com/blog/osi-is-now-apache-ossie"
    },
    {
     "t": "Apache Ossie: Realizing Semantic Layer Portability (dbt Summit)",
     "u": "https://www.getdbt.com/dbt-summit/sessions/apache-ossie-realizing-semantic-layer-portability"
    },
    {
     "t": "Dremio: Apache Ossie joins the Apache Incubator",
     "u": "https://www.dremio.com/blog/apache-ossie-the-open-semantic-interchange-joins-the-apache-incubator"
    }
   ],
   "verified": "2026-10-24",
   "logo": null
  },
  {
   "id": "honeydew",
   "name": "Honeydew",
   "category": "semantic-layer",
   "tagline": "Semantic layer defined in YAML with a Snowflake Native App, APIs, and an MCP server.",
   "verdict": "native",
   "verdictNote": "Entities, metrics, and relations are first-party objects, with a Text-to-Data API, an MCP server, and Apache Ossie import and export.",
   "worksWith": [],
   "worksWithUrl": "",
   "artifacts": [
    {
     "name": "Honeydew workspace (entities, attributes, metrics, domains)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://honeydew.ai/docs/yaml-schema"
    },
    {
     "name": "Snowflake Native App with Text-to-Data API",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "",
     "format": "API",
     "url": "https://honeydew.ai/docs/integration/snowflake-native-app"
    },
    {
     "name": "Honeydew MCP server",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "API",
     "url": "https://honeydew.ai/docs/integration/mcp"
    },
    {
     "name": "Apache Ossie import and export",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": "YAML",
     "url": "https://honeydew.ai/docs/integration/apache-ossie-osi"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metrics are aggregations on an entity, tied to its key granularity.",
     "u": "https://honeydew.ai/docs/calculations/metrics"
    },
    "dimensions": {
     "l": 3,
     "n": "Source and calculated attributes on entities. YAML schema lists attributes, datasets, domains, entities.",
     "u": "https://honeydew.ai/docs/yaml-schema"
    },
    "relationships": {
     "l": 3,
     "n": "Relations between entities are declared. Honeydew finds the join path from them.",
     "u": "https://honeydew.ai/docs/tpch-example.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Metrics carry description fields. Whether they feed the AI as context was not confirmed.",
     "u": "https://honeydew.ai/docs/tpch-example.md"
    },
    "verifiedQueries": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Text-to-Data API returns SQL from a question using Snowflake Cortex LLM, inside the Native App.",
     "u": "https://honeydew.ai/docs/integration/snowflake-native-app"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No vector search found.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "MCP server docs exist. Release notes say it now includes documentation tools. Works with Snowflake Cortex Agents.",
     "u": "https://honeydew.ai/docs/integration/mcp"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 3,
     "n": "Docs describe import from and export to Apache Ossie semantic models.",
     "u": "https://honeydew.ai/docs/integration/apache-ossie-osi"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Metrics defined once per entity, with join paths resolved from declared relations.",
    "Text-to-Data API runs inside Snowflake with Cortex LLM.",
    "MCP server for Snowflake Intelligence and Cortex Agents, plus agent plugins.",
    "Import and export with Apache Ossie."
   ],
   "gaps": [
    "Supported platform list not confirmed in official docs this session.",
    "Text-to-Data API is documented for the Snowflake Native App only.",
    "No verified-query store, ontology, or vector feature found.",
    "Honeydew's own accuracy claim is a blog statement, not a published benchmark."
   ],
   "fillWith": [
    "Apache Ossie YAML"
   ],
   "nl2sqlPath": "Define entities, metrics, and relations in a Honeydew workspace. On Snowflake, use the Native App Text-to-Data API or connect Cortex Agents through the MCP server. Elsewhere, connect your agent to the MCP server.",
   "snippet": {
    "lang": "yaml",
    "title": "Not retrieved. Docs could not be fetched this session. See the TPC-H example.",
    "code": "# Snippet not retrieved this session.",
    "u": "https://honeydew.ai/docs/tpch-example.md"
   },
   "sources": [
    {
     "t": "Honeydew YAML schema",
     "u": "https://honeydew.ai/docs/yaml-schema"
    },
    {
     "t": "Honeydew metrics",
     "u": "https://honeydew.ai/docs/calculations/metrics"
    },
    {
     "t": "Honeydew TPC-H example",
     "u": "https://honeydew.ai/docs/tpch-example.md"
    },
    {
     "t": "Honeydew architecture",
     "u": "https://honeydew.ai/docs/architecture"
    },
    {
     "t": "Honeydew Snowflake Native App",
     "u": "https://honeydew.ai/docs/integration/snowflake-native-app"
    },
    {
     "t": "Honeydew MCP server",
     "u": "https://honeydew.ai/docs/integration/mcp"
    },
    {
     "t": "Honeydew Apache Ossie (OSI)",
     "u": "https://honeydew.ai/docs/integration/apache-ossie-osi"
    },
    {
     "t": "Honeydew release notes",
     "u": "https://honeydew.ai/docs/release-notes"
    },
    {
     "t": "Talk to your data: why LLMs need a semantic compiler (Honeydew blog)",
     "u": "https://honeydew.ai/blog/talk-to-your-data-loudly/"
    }
   ],
   "verified": "2026-10-24",
   "logo": null
  },
  {
   "id": "looker",
   "name": "Looker (Google Cloud)",
   "category": "semantic-layer",
   "tagline": "BI platform with LookML, a code-defined semantic layer used by Gemini agents.",
   "verdict": "native",
   "verdictNote": "LookML defines metrics, dimensions, joins, and field context in versioned code, and Looker agents read it directly.",
   "artifacts": [
    {
     "name": "LookML (models, views, Explores, joins, dimensions, measures)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "LookML text files in Git",
     "url": "https://docs.cloud.google.com/looker/docs/what-is-lookml"
    },
    {
     "name": "LookML field description and label",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "LookML",
     "url": "https://docs.cloud.google.com/looker/docs/reference/param-field-description"
    },
    {
     "name": "Conversational Analytics in Looker (Explore data agents)",
     "kind": "agent",
     "status": "GA",
     "since": "2025-11",
     "format": "GUI, API",
     "url": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    },
    {
     "name": "Verified queries (golden queries) for Looker agents",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-08",
     "format": "GUI, JSON via API",
     "url": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/data-agent-authored-context-looker"
    },
    {
     "name": "Conversational Analytics API with Looker sources",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-06",
     "format": "REST v1",
     "url": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/overview"
    },
    {
     "name": "Dashboard data agents",
     "kind": "agent",
     "status": "GA",
     "since": "2026-10",
     "format": "GUI",
     "url": "https://docs.cloud.google.com/looker/docs/release-notes"
    },
    {
     "name": "Agentic workflows (triggered and scheduled)",
     "kind": "agent",
     "status": "Preview",
     "since": "2026-05",
     "format": "GUI, natural language",
     "url": "https://docs.cloud.google.com/looker/docs/release-notes"
    },
    {
     "name": "Looker-managed MCP server",
     "kind": "mcp",
     "status": "Preview",
     "since": "2026-05",
     "format": "MCP, OAuth 2.1",
     "url": "https://docs.cloud.google.com/looker/docs/r/mcp"
    },
    {
     "name": "MCP Toolbox for Databases Looker tools",
     "kind": "mcp",
     "status": "Unverified",
     "since": "2025-07",
     "format": "Open source server",
     "url": "https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox"
    },
    {
     "name": "Looker extension for VS Code (LookML authoring with MCP)",
     "kind": "agent",
     "status": "GA",
     "since": "2026-09",
     "format": "IDE extension",
     "url": "https://docs.cloud.google.com/looker/docs/release-notes"
    },
    {
     "name": "Open SQL Interface with Tableau and Power BI connectors",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2024-08",
     "format": "JDBC",
     "url": "https://docs.cloud.google.com/looker/docs/tableau-connector?hl=en"
    },
    {
     "name": "In-database analytic models (derived_analytic_model to BigQuery Graph or Snowflake semantic view)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-05",
     "format": "LookML, SQL DDL",
     "url": "https://docs.cloud.google.com/looker/docs/analytic-models"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "LookML measures (sum, count, others) are defined once as version-controlled code and reused by every query.",
     "u": "https://docs.cloud.google.com/looker/docs/lookml-terms-and-concepts"
    },
    "dimensions": {
     "l": 3,
     "n": "Dimensions and dimension_group declare fields; one dimension_group creates several time-related dimensions at once.",
     "u": "https://docs.cloud.google.com/looker/docs/lookml-terms-and-concepts"
    },
    "relationships": {
     "l": 3,
     "n": "Explore join declarations with sql_on; Looker generates join SQL when a query uses fields from several views.",
     "u": "https://docs.cloud.google.com/looker/docs/lookml-terms-and-concepts"
    },
    "synonyms": {
     "l": 3,
     "n": "Field description, label, and synonyms parameters plus agent instructions and glossaries feed Conversational Analytics.",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Verified (golden) queries pair questions with Explore queries; GA Aug 28, 2026. Docs advise 30 to 50 pairs at most.",
     "u": "https://docs.cloud.google.com/looker/docs/release-notes"
    },
    "nl2sql": {
     "l": 3,
     "n": "Conversational Analytics GA Nov 12, 2025. Looker composes the SQL from LookML; the agent does not write it.",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object. LookML models views, Explores, and fields. Knowledge Catalog ingests Looker metadata (GA Oct 2026).",
     "u": "https://docs.cloud.google.com/looker/docs/release-notes"
    },
    "graph": {
     "l": 0,
     "n": "No graph query in LookML. derived_analytic_model can generate BigQuery Graph objects (Preview).",
     "u": "https://docs.cloud.google.com/looker/docs/reference/param-view-derived-analytic-model"
    },
    "vector": {
     "l": 0,
     "n": "No vector search on data. Gemini in Looker lists semantic search for saved content, with no stage stated.",
     "u": "https://docs.cloud.google.com/looker/docs/gemini-overview-looker"
    },
    "mcp": {
     "l": 2,
     "n": "Looker-managed MCP server is Preview since May 27, 2026, Looker-hosted instances only. Open-source MCP Toolbox covers customer-hosted.",
     "u": "https://docs.cloud.google.com/looker/docs/r/mcp"
    },
    "governance": {
     "l": 3,
     "n": "Queries apply model permissions, access grants, and user attributes. LookML lives in Git with CI. Catalog sync GA Oct 2026.",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    },
    "openStandard": {
     "l": 1,
     "n": "LookML is Looker-specific. Open SQL Interface, BI connectors, and MCP expose it. No Ossie converter for LookML found.",
     "u": "https://github.com/apache/ossie-converters"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "Gemini LookML assistant (Preview) writes dimensions, dimension groups and measures. No field description or label generation is documented.",
     "u": "https://docs.cloud.google.com/looker/docs/write-lookml-gemini"
    },
    "bulkMetadata": {
     "l": 1,
     "n": "Descriptions, labels and synonyms are LookML text in project files. Bulk edits mean scripting file changes and using Git. No metadata import API.",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices"
    },
    "autoClassify": {
     "l": 0,
     "n": "No classification feature in Looker docs. Teams classify in the warehouse, for example with BigQuery Sensitive Data Protection.",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    },
    "sampleValues": {
     "l": 3,
     "n": "Conversational Analytics can sample field values and fuzzy search them to pick filter values. Conversational Analytics API GA 2026-06-23.",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for LookML or verified queries documented. System Activity only reports usage.",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    },
    "lineage": {
     "l": 0,
     "n": "Knowledge Catalog lineage for Looker (Google Cloud core) is Preview and object level only. Column-level lineage is not supported.",
     "u": "https://docs.cloud.google.com/looker/docs/looker-core-lineage"
    },
    "evals": {
     "l": 0,
     "n": "No eval runner found. Verified queries (golden queries) serve as examples; pivots and custom fields are unsupported. Admins can review user feedback (Preview).",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    }
   },
   "offers": [
    "LookML declares views, dimensions, measures, and Explore joins as version-controlled code, with Looker generating the SQL.",
    "LookML description, label, synonyms, and hidden parameters, plus agent instructions and glossaries, give agents field-level context.",
    "Verified queries (GA Aug 2026) and up to five Explores per agent keep Conversational Analytics answers scoped.",
    "Open SQL Interface, Tableau and Power BI connectors expose governed Explores to other BI tools.",
    "Looker-managed MCP server (Preview) and open-source MCP Toolbox let your own agents query Explores through Looker.",
    "Model permissions, access grants, and user attributes apply when Looker builds each query."
   ],
   "gaps": [
    "LookML is proprietary. The Ossie converters repo lists no LookML converter, so there is no standard export path.",
    "Looker-managed MCP server is Preview, Looker-hosted only, with no fine-grained OAuth scopes or Dynamic Client Registration.",
    "Agents connect to at most five Explores; no custom fields, no pivots, and 50,000 rows per query.",
    "No ontology, graph, or vector search on data in LookML. Forecasting and prediction are not supported in agents."
   ],
   "fillWith": [
    "MCP Toolbox for Databases",
    "Cube",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Model the data in LookML with descriptions, labels, and synonyms, build a curated Explore for each agent, and add instructions and verified queries. Use Conversational Analytics in Looker or the Conversational Analytics API (GA Jun 2026). For your own agents, use the Looker-managed MCP server (Preview) or MCP Toolbox so Looker generates the SQL.",
   "snippet": {
    "lang": "lookml",
    "title": "Minimal view with a dimension (description, synonyms) and a measure",
    "code": "view: orders {\n  dimension: id { primary_key: yes sql: ${TABLE}.id ;; }\n  dimension: amount {\n    type: number\n    description: \"Order amount\"\n    synonyms: [\"sales\"]\n    sql: ${TABLE}.amount ;;\n  }\n  measure: total_amount {\n    type: sum\n    sql: ${amount} ;;\n  }\n}",
    "u": "https://docs.cloud.google.com/looker/docs/lookml-terms-and-concepts"
   },
   "sources": [
    {
     "t": "LookML terms and concepts",
     "u": "https://docs.cloud.google.com/looker/docs/lookml-terms-and-concepts"
    },
    {
     "t": "Introduction to LookML",
     "u": "https://docs.cloud.google.com/looker/docs/what-is-lookml"
    },
    {
     "t": "Looker release notes",
     "u": "https://docs.cloud.google.com/looker/docs/release-notes"
    },
    {
     "t": "Conversational Analytics overview (Looker)",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    },
    {
     "t": "Best practices for configuring Conversational Analytics with Looker",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices"
    },
    {
     "t": "LookML synonyms parameter",
     "u": "https://docs.cloud.google.com/looker/docs/reference/param-field-synonyms"
    },
    {
     "t": "LookML description parameter",
     "u": "https://docs.cloud.google.com/looker/docs/reference/param-field-description"
    },
    {
     "t": "Define data agent context for Looker data sources",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/data-agent-authored-context-looker"
    },
    {
     "t": "Looker-managed MCP server",
     "u": "https://docs.cloud.google.com/looker/docs/r/mcp"
    },
    {
     "t": "Connect an IDE to Looker using MCP Toolbox",
     "u": "https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox"
    },
    {
     "t": "Looker managed MCP server announcement (Google developer forum)",
     "u": "https://discuss.google.dev/t/unlocking-agentic-ai-for-enterprise-bi-announcing-looker-s-managed-mcp-server-in-preview/367431"
    },
    {
     "t": "Looker updates for agentic BI at Next '26",
     "u": "https://cloud.google.com/blog/products/business-intelligence/looker-updates-for-agentic-bi-at-next26"
    },
    {
     "t": "Looker-Tableau BI Connector",
     "u": "https://docs.cloud.google.com/looker/docs/tableau-connector?hl=en"
    },
    {
     "t": "In-database analytic models",
     "u": "https://docs.cloud.google.com/looker/docs/analytic-models"
    },
    {
     "t": "derived_analytic_model parameter",
     "u": "https://docs.cloud.google.com/looker/docs/reference/param-view-derived-analytic-model"
    },
    {
     "t": "Gemini in Looker overview",
     "u": "https://docs.cloud.google.com/looker/docs/gemini-overview-looker"
    },
    {
     "t": "Apache Ossie (formerly Open Semantic Interchange) repo",
     "u": "https://github.com/open-semantic-interchange/OSI"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Conversational Analytics API release notes",
     "u": "https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/release-notes"
    },
    {
     "t": "Write LookML with Gemini assistance",
     "u": "https://docs.cloud.google.com/looker/docs/write-lookml-gemini"
    },
    {
     "t": "Explore summary with Gemini",
     "u": "https://docs.cloud.google.com/looker/docs/explore-summary-gemini"
    },
    {
     "t": "Track data lineage with Knowledge Catalog",
     "u": "https://docs.cloud.google.com/looker/docs/looker-core-lineage"
    }
   ],
   "verified": "2026-10-24",
   "logo": "looker",
   "worksWith": [],
   "enrichHowTo": "Write description, label and synonyms parameters on LookML fields, keep text short and in business words, and hide internal ID fields. Commit the files through the Looker IDE and Git. Add verified queries to the conversational analytics agent as examples."
  },
  {
   "id": "malloy",
   "name": "Malloy (with Publisher)",
   "category": "semantic-layer",
   "tagline": "Open-source semantic modeling and query language; Publisher serves models with an MCP endpoint.",
   "verdict": "native",
   "verdictNote": "Malloy models define sources, joins, and measures in code, and Publisher exposes them to agents through a built-in MCP endpoint.",
   "worksWith": [
    "DuckDB",
    "MotherDuck",
    "BigQuery",
    "Databricks",
    "Snowflake",
    "PostgreSQL",
    "MySQL",
    "Trino",
    "Presto",
    "MSSQL (via DuckDB extension)"
   ],
   "worksWithUrl": "https://docs.malloydata.dev/documentation/setup/database_support",
   "artifacts": [
    {
     "name": "Malloy semantic models (sources, joins, measures)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "Malloy language",
     "url": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    {
     "name": "Malloy Publisher (server, REST API, web UI)",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": "API, GUI",
     "url": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    {
     "name": "Publisher built-in MCP server",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "API",
     "url": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Publisher docs describe measures defined in Malloy. Language reference was not read.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    "dimensions": {
     "l": 3,
     "n": "Dimensions and measures are the building blocks of queries, per a Malloy author's post.",
     "u": "https://lloydtabb.substack.com/p/composing-with-queries"
    },
    "relationships": {
     "l": 3,
     "n": "Joins are defined in the model. Publisher docs list joins among model contents.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    "synonyms": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "verifiedQueries": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "nl2sql": {
     "l": 0,
     "n": "No first-party NL-to-SQL feature found. Agents use the MCP endpoint.",
     "u": ""
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No vector search found.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Publisher runs an MCP server, default localhost:4040/mcp, over packages under server_root.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 0,
     "n": "Language is open source. No Ossie support found.",
     "u": ""
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Models in code with sources, joins, and measures, compiled to each database's SQL.",
    "Publisher serves models over REST, a web UI, and MCP.",
    "Supports DuckDB, BigQuery, Snowflake, Databricks, Postgres, MySQL, Trino, and Presto."
   ],
   "gaps": [
    "No first-party NL-to-SQL, synonym, or verified-query feature found.",
    "Agents must write Malloy, not SQL. A community MCP server notes Malloy-only support.",
    "No Ossie or OSI support found.",
    "Language reference pages were not readable this session."
   ],
   "fillWith": [],
   "nl2sqlPath": "Write Malloy models for your core sources, run Publisher, and point your agent at its MCP endpoint. Test that your LLM writes valid Malloy queries before relying on it.",
   "snippet": {
    "lang": "other",
    "title": "Not retrieved. Malloy docs could not be fetched this session.",
    "code": "// Snippet not retrieved this session.",
    "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
   },
   "sources": [
    {
     "t": "Malloy database support",
     "u": "https://docs.malloydata.dev/documentation/setup/database_support"
    },
    {
     "t": "Malloy Publisher: MCP agents",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    },
    {
     "t": "Malloy Publisher: publishing",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    {
     "t": "Malloy Publisher: connections",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/connections"
    },
    {
     "t": "Composing with Queries (Lloyd Tabb)",
     "u": "https://lloydtabb.substack.com/p/composing-with-queries"
    },
    {
     "t": "Malloy MCP Server (community)",
     "u": "https://glama.ai/mcp/servers/namabile/malloy-mcp-server"
    }
   ],
   "verified": "2026-10-24",
   "logo": null
  },
  {
   "id": "wrenai",
   "name": "Wren AI / Wren Engine",
   "category": "semantic-layer",
   "tagline": "Open-core GenBI agent and context engine with a modeling definition language (MDL).",
   "verdict": "native",
   "verdictNote": "Wren Engine is an open-source semantic engine with MDL models and relationships and an MCP server, but official docs were not readable this session.",
   "worksWith": [],
   "worksWithUrl": "",
   "artifacts": [
    {
     "name": "Modeling Definition Language (MDL) models and relationships",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": "JSON, YAML",
     "url": "https://www.getwren.ai/oss"
    },
    {
     "name": "Wren Engine MCP server (open source tier)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "API",
     "url": "https://www.getwren.ai/oss"
    },
    {
     "name": "Wren AI Cloud (GenBI)",
     "kind": "agent",
     "status": "GA",
     "since": "2024-10",
     "format": "GUI",
     "url": "https://www.getwren.ai/post/wren-ai-2024-year-in-review-a-fruitful-journey-and-exciting-plans-ahead"
    }
   ],
   "caps": {
    "metrics": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "dimensions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "relationships": {
     "l": 3,
     "n": "MDL relationships declare join type and condition. Seen on a third-party skill page.",
     "u": "https://tessl.io/registry/skills/github/Canner/WrenAI/generate-mdl"
    },
    "synonyms": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "verifiedQueries": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Wren AI is an open-source GenBI agent. Cloud launched Oct 2024.",
     "u": "https://www.getwren.ai/post/wren-ai-2024-year-in-review-a-fruitful-journey-and-exciting-plans-ahead"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found.",
     "u": ""
    },
    "vector": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Wren's site lists an MCP server in the free open-source tier, with the context engine, MDL, and CLI.",
     "u": "https://www.getwren.ai/oss"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 0,
     "n": "Engine is Apache 2.0 per a secondary source. No Ossie support found.",
     "u": ""
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Open-source context engine on Apache DataFusion that agents query through MCP.",
    "MDL models and relationships so agents reason over business concepts.",
    "Open-core: the commercial platform runs the same engine."
   ],
   "gaps": [
    "Official docs were not readable this session. Metric and dimension support is unconfirmed.",
    "Connector count differs by source (15+, 18, 20+, 22+). No official list confirmed.",
    "No Ossie or OSI support found.",
    "The open-source tier has no UI, per Wren's own page."
   ],
   "fillWith": [
    "dbt for upstream models"
   ],
   "nl2sqlPath": "Describe tables as MDL models with relationships, then connect your agent through the Wren MCP server. Check the official MDL reference for metrics before relying on them.",
   "snippet": {
    "lang": "json",
    "title": "Not retrieved. Official MDL docs could not be fetched this session.",
    "code": "// Snippet not retrieved this session.",
    "u": "https://www.getwren.ai/oss"
   },
   "sources": [
    {
     "t": "Wren AI open core strategy",
     "u": "https://www.getwren.ai/oss"
    },
    {
     "t": "Wren: building the foundation for MCP clients",
     "u": "https://www.getwren.ai/post/fueling-the-next-wave-of-ai-agents-building-the-foundation-for-future-mcp-clients-and-enterprise-data-access"
    },
    {
     "t": "Wren: semantic SQL for AI agents with Apache DataFusion",
     "u": "https://www.getwren.ai/post/powering-semantic-sql-for-ai-agents-with-apache-datafusion"
    },
    {
     "t": "Wren AI 2024 year in review",
     "u": "https://www.getwren.ai/post/wren-ai-2024-year-in-review-a-fruitful-journey-and-exciting-plans-ahead"
    },
    {
     "t": "generate-mdl skill (third party)",
     "u": "https://tessl.io/registry/skills/github/Canner/WrenAI/generate-mdl"
    },
    {
     "t": "Wren Engine documentation mirror (third party)",
     "u": "https://docsearch.algolia.com/mcp/docs/repo/canner/wren-engine"
    }
   ],
   "verified": "2026-10-24",
   "logo": null
  },
  {
   "id": "superset",
   "name": "Apache Superset",
   "category": "bi",
   "tagline": "Open-source BI with datasets, an MCP service, and a semantic layer feature still behind a flag.",
   "verdict": "partial",
   "verdictNote": "Datasets act as a light semantic layer and an MCP server exists, but external semantic layers are behind a default-off flag and no first-party NL-to-SQL was found.",
   "artifacts": [
    {
     "name": "Datasets (lightweight semantic layer: metrics and dimensions)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://github.com/apache/superset"
    },
    {
     "name": "Semantic Layers (external layers as a datasource type, SIP-182)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-04",
     "format": "Feature flag SEMANTIC_LAYERS",
     "url": "https://superset.apache.org/admin-docs/configuration/feature-flags/"
    },
    {
     "name": "MCP service (superset mcp run)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP, JWT or dev auth",
     "url": "https://github.com/apache/superset/blob/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    {
     "name": "Apache Ossie (formerly OSI) support",
     "kind": "semantic-model",
     "status": "Announced",
     "since": "2026-06",
     "format": "JSON, YAML",
     "url": "https://github.com/apache/superset/issues/35003"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "The Superset README describes a lightweight semantic layer for defining metrics and dimensions on datasets.",
     "u": "https://github.com/apache/superset"
    },
    "dimensions": {
     "l": 3,
     "n": "Same README line covers dimensions. Hierarchy and time-grain objects not confirmed; SIP-182 thread asks for hierarchies.",
     "u": "https://github.com/apache/superset"
    },
    "relationships": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "synonyms": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-SQL pairs found. MCP can save SQL queries.",
     "u": ""
    },
    "nl2sql": {
     "l": 0,
     "n": "No first-party NL-to-SQL found in sources opened. Teams use MCP clients.",
     "u": ""
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No vector search found.",
     "u": ""
    },
    "mcp": {
     "l": 2,
     "n": "MCP docs list tools for datasets, charts, dashboards, and SQL. The page gives no maturity label, so stage is unconfirmed.",
     "u": "https://github.com/apache/superset/blob/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    "governance": {
     "l": 3,
     "n": "MCP RBAC is on by default, so each tool checks the caller Superset permissions. Actions are logged.",
     "u": "https://github.com/apache/superset/blob/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    "openStandard": {
     "l": 1,
     "n": "SIP-182 vote approved Jun 22, 2026. It names Cube, MetricFlow, Snowflake semantic views, and OSI. No Superset converter listed.",
     "u": "https://github.com/apache/superset/issues/35003"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Built-in MCP server (superset mcp run) has tools such as list_datasets, query_dataset, execute_sql, and generate_chart.",
    "MCP supports JWT auth and per-tool RBAC; admins can disable tools.",
    "SIP-182 plans first-class external semantic layers (MetricFlow, Cube, Snowflake semantic views).",
    "Apache-2.0 licence, self-hosted."
   ],
   "gaps": [
    "SEMANTIC_LAYERS defaults to False. Preset says it targets Superset 7.0; the 6.1 docs list it as a flag, so release is unclear.",
    "SIP-182 backends are experimental examples, not a confirmed supported list.",
    "MCP docs give no GA or Preview label. Needs Superset 5.0 or later, Python 3.11 or later, and fastmcp.",
    "No first-party NL-to-SQL, synonym, or verified-query feature was found."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "Snowflake Semantic Views",
    "MetricFlow"
   ],
   "nl2sqlPath": "Define metrics and dimensions on datasets and run the built-in MCP service so your agent calls dataset tools. For governed metrics, wait for the semantic layers flag to settle or keep metrics in Cube or dbt.",
   "snippet": {
    "lang": "other",
    "title": "Start the Superset MCP server (from the MCP server doc)",
    "code": "superset mcp run --host 127.0.0.1 --port 5008\n# endpoint: /mcp\n# MCP_AUTH_ENABLED = True enables JWT auth\n# MCP_RBAC_ENABLED = True is the default",
    "u": "https://github.com/apache/superset/blob/master/docs/admin_docs/configuration/mcp-server.mdx"
   },
   "worksWith": [],
   "worksWithUrl": "",
   "openToOtherTools": {
    "l": 2,
    "n": "MCP service with dataset and SQL tools and JWT auth. Docs show no maturity label. No OSI export.",
    "u": "https://github.com/apache/superset/blob/master/docs/admin_docs/configuration/mcp-server.mdx"
   },
   "sources": [
    {
     "t": "Apache Superset (GitHub)",
     "u": "https://github.com/apache/superset"
    },
    {
     "t": "Superset MCP server doc",
     "u": "https://github.com/apache/superset/blob/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    {
     "t": "SIP-182 Semantic Layer Support in Apache Superset",
     "u": "https://github.com/apache/superset/issues/35003"
    },
    {
     "t": "Feature Flags - Apache Superset",
     "u": "https://superset.apache.org/admin-docs/configuration/feature-flags/"
    },
    {
     "t": "Feature Flags (6.1.0)",
     "u": "https://superset.apache.org/admin-docs/6.1.0/configuration/feature-flags/"
    },
    {
     "t": "Semantic Layers in Apache Superset: SIP-182 and Apache Ossie (Preset)",
     "u": "https://preset.io/blog/semantic-layers-in-superset/"
    },
    {
     "t": "Apache Superset Repo Recap: May 2026 (Preset)",
     "u": "https://preset.io/blog/apache-superset-repo-recap-may-2026/"
    },
    {
     "t": "Apache Superset Repo Recap: April 2026 (Preset)",
     "u": "https://preset.io/blog/apache-superset-repo-recap-april-2026/"
    },
    {
     "t": "superset UPDATING.md",
     "u": "https://github.com/apache/superset/blob/master/UPDATING.md"
    },
    {
     "t": "Apache Superset README",
     "u": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": "apachesuperset",
   "enrichHowTo": "Not verified. Superset README lists a REST API and a lightweight semantic layer; no bulk metadata method was confirmed."
  },
  {
   "id": "domo",
   "name": "Domo",
   "category": "bi",
   "tagline": "Cloud BI and data platform adding a semantic layer, agent builder, and MCP server, mostly in beta.",
   "verdict": "partial",
   "verdictNote": "Domo lists a semantic layer, Data Models, and an MCP server, but its own pages label most of the AI and semantic features Beta (Sep 2026).",
   "artifacts": [
    {
     "name": "Semantic Layer (Metrics framework, Data Models)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-03",
     "format": "GUI",
     "url": "https://www.domo.com/product/new-features/domo-ai-beta-features"
    },
    {
     "name": "Data Models (reusable dataset relationships)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-03",
     "format": "GUI",
     "url": "https://research.isg-one.com/analyst-perspectives/domo-adds-context-to-platform-for-analytics-and-ai"
    },
    {
     "name": "Semantic View Integration (Snowflake Semantic View as Data Model)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-09",
     "format": "GUI",
     "url": "https://www.domo.com/docs/s/article/Current-Release-Notes"
    },
    {
     "name": "Worksheets",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-03",
     "format": "GUI",
     "url": "https://research.isg-one.com/analyst-perspectives/domo-adds-context-to-platform-for-analytics-and-ai"
    },
    {
     "name": "Domo MCP server (AI Library toolkits)",
     "kind": "mcp",
     "status": "Preview",
     "since": "2026-09",
     "format": "MCP, per-instance /mcp/toolkits/ path",
     "url": "https://www.domo.com/docs/s/article/Connect-AI-Tools-to-Domo-Using-MCP"
    },
    {
     "name": "AI Agent Builder / Agent Catalyst",
     "kind": "agent",
     "status": "Preview",
     "since": "2026-03",
     "format": "GUI",
     "url": "https://www.nl2sql.ai/news/domo-september-2026-mcp-toolkits-beta-live-boundary"
    }
   ],
   "caps": {
    "metrics": {
     "l": 2,
     "n": "Domo lists its Semantic Layer, with a Metrics framework, on its Beta Features page.",
     "u": "https://www.domo.com/product/new-features/domo-ai-beta-features"
    },
    "dimensions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "relationships": {
     "l": 2,
     "n": "Data Models hold reusable dataset relationships; ISG lists them as beta.",
     "u": "https://research.isg-one.com/analyst-perspectives/domo-adds-context-to-platform-for-analytics-and-ai"
    },
    "synonyms": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "verifiedQueries": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "nl2sql": {
     "l": 2,
     "n": "AI Agent Builder and most of the agent stack are beta as of Sep 2026, per nl2sql.ai.",
     "u": "https://www.nl2sql.ai/news/domo-september-2026-mcp-toolkits-beta-live-boundary"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query found.",
     "u": ""
    },
    "vector": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "mcp": {
     "l": 2,
     "n": "Every instance exposes AI Library toolkits as MCP servers. Toolkits listed are beta. None is a Metrics or Data Model toolkit.",
     "u": "https://www.domo.com/docs/s/article/Connect-AI-Tools-to-Domo-Using-MCP"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 0,
     "n": "No Domo directory in the Ossie converters repo listing I fetched.",
     "u": ""
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Data Models and Semantic View Integration (beta) let a Snowflake Semantic View act like any Domo Data Model.",
    "Domo MCP exposes AI Library toolkits so outside assistants can query DataSets and manage some content.",
    "Worksheets reached GA at Domopalooza 2026, per ISG.",
    "Agent builder lets teams attach instructions, knowledge, and tools to an agent."
   ],
   "gaps": [
    "Most semantic, agent, and MCP features are labeled Beta as of Sep 2026.",
    "No Metrics or Data Model MCP toolkit was found in the docs listing.",
    "I could not open Domo docs, so dimensions, synonyms, and governance are unconfirmed.",
    "No OSI converter found."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Define Data Models and metrics in Domo and try the beta agent builder. For external agents, use the Domo MCP toolkits, and expect beta limits. If you need a stable semantic layer today, keep it in the warehouse and connect Domo to it.",
   "snippet": {
    "lang": "other",
    "title": "No official syntax example opened",
    "code": "",
    "u": ""
   },
   "worksWith": [],
   "worksWithUrl": "",
   "openToOtherTools": {
    "l": 2,
    "n": "MCP toolkits are beta (Sep 2026). Original May 2026 beta let agents query DataSets and search content.",
    "u": "https://www.domo.com/docs/s/article/Connect-AI-Tools-to-Domo-Using-MCP"
   },
   "sources": [
    {
     "t": "Domo AI - Beta Features",
     "u": "https://www.domo.com/product/new-features/domo-ai-beta-features"
    },
    {
     "t": "Connect AI Tools to Domo Using MCP",
     "u": "https://www.domo.com/docs/s/article/Connect-AI-Tools-to-Domo-Using-MCP"
    },
    {
     "t": "Domo MCP",
     "u": "https://www.domo.com/docs/s/article/Domo-MCP"
    },
    {
     "t": "September 2026 Release Notes",
     "u": "https://www.domo.com/docs/s/article/Current-Release-Notes"
    },
    {
     "t": "Domo Connections 2026 recap",
     "u": "https://www.domo.com/blog/product-announcements-from-domo-connections-2026-recap"
    },
    {
     "t": "Domo Adds Spreadsheet Native Exploration and New Semantic Layer (Business Wire)",
     "u": "https://www.businesswire.com/news/home/20260325367416/en/Domo-Adds-Spreadsheet-Native-Exploration-and-New-Semantic-Layer-to-Its-Agent-Building-Platform"
    },
    {
     "t": "Domo adds context to platform for analytics and AI (ISG)",
     "u": "https://research.isg-one.com/analyst-perspectives/domo-adds-context-to-platform-for-analytics-and-ai"
    },
    {
     "t": "Domo MCP expansion, agent stack still beta (nl2sql.ai)",
     "u": "https://www.nl2sql.ai/news/domo-september-2026-mcp-toolkits-beta-live-boundary"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Metadata through API (Domo forum)",
     "u": "https://community-forums.domo.com/main/discussion/comment/69603"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Not verified. Vendor docs could not be fetched and the search budget ran out, so no supported bulk method is claimed here."
  },
  {
   "id": "cognos",
   "name": "IBM Cognos Analytics",
   "category": "bi",
   "tagline": "IBM enterprise BI suite with data modules and an AI Assistant.",
   "verdict": "partial",
   "verdictNote": "Data modules are a governed model and the AI Assistant answers questions on governed data, but I could not verify synonyms, verified queries, or an official MCP server.",
   "artifacts": [
    {
     "name": "Data modules",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT"
    },
    {
     "name": "AI Assistant",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://www.ibm.com/products/cognos-analytics"
    },
    {
     "name": "Generative AI agents (find, summarize, create reports)",
     "kind": "agent",
     "status": "Preview",
     "since": "2025-10",
     "format": "GUI",
     "url": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT"
    },
    {
     "name": "Third-party Cognos MCP server (Activepieces, not IBM)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "2026-08",
     "format": "Open source, MIT",
     "url": "https://www.activepieces.com/mcp/ibm-cognose"
    }
   ],
   "caps": {
    "metrics": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "dimensions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "relationships": {
     "l": 3,
     "n": "12.1.1 added a relationship expression editor and a Use vs Display value option to data modules.",
     "u": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT"
    },
    "synonyms": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "verifiedQueries": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "AI Assistant takes natural-language questions and builds visualizations from governed data. Per IBM product page; GA date not found.",
     "u": "https://www.ibm.com/products/cognos-analytics"
    },
    "ontology": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "mcp": {
     "l": 1,
     "n": "No IBM MCP server found. A third-party Activepieces wrapper exists; an IBM Ideas request asks for one.",
     "u": "https://www.activepieces.com/mcp/ibm-cognose"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 0,
     "n": "No OSI or open export found for data modules.",
     "u": ""
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Data modules take relationship expressions and display-value settings (12.1.1, Oct 2025).",
    "AI Assistant answers natural-language questions and is available from any Cognos view.",
    "Generative AI agents for finding, summarizing, and creating reports are in Preview in 12.1.1.",
    "IBM markets 12.1.3 as its latest release with conversational data interaction."
   ],
   "gaps": [
    "No official MCP server found. Only a third-party wrapper and an IBM Ideas request.",
    "I could not confirm synonyms, verified queries, or metric objects in data modules from IBM docs.",
    "No 12.1.2 or 12.1.3 release notes were reachable, so recent AI changes are unverified.",
    "GenAI agents are Preview and on-prem availability is unconfirmed."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Model the data in a data module and use the built-in AI Assistant for end users. For your own agents, the only MCP path found is a third-party wrapper, so test it carefully. Check IBM's 12.1.3 notes before you commit.",
   "snippet": {
    "lang": "other",
    "title": "No official data module syntax was fetched. Data modules are built in a web GUI.",
    "code": "",
    "u": ""
   },
   "sources": [
    {
     "t": "IBM Cognos Analytics product page",
     "u": "https://www.ibm.com/products/cognos-analytics"
    },
    {
     "t": "Cognos 12.1.1 smarter reporting, faster dashboards (IBM Community)",
     "u": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT"
    },
    {
     "t": "Cognos Analytics 12: what you may have missed (IBM Community)",
     "u": "https://community.ibm.com/community/user/blogs/zach-king/2025/08/25/cognos-analytics-12-what-you-may-have-missed"
    },
    {
     "t": "MCP server for Cognos Analytics (IBM Ideas request)",
     "u": "https://ibm-data-and-ai.ideas.ibm.com/ideas/CA-I-4846"
    },
    {
     "t": "IBM Cognos MCP (Activepieces, third party)",
     "u": "https://www.activepieces.com/mcp/ibm-cognose"
    }
   ],
   "worksWith": [],
   "worksWithUrl": "",
   "openToOtherTools": {
    "l": 1,
    "n": "Only a third-party MCP wrapper found. REST API and OData for data modules were not researched.",
    "u": "https://www.activepieces.com/mcp/ibm-cognose"
   },
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Not verified. Vendor docs could not be fetched and the search budget ran out, so no supported bulk method is claimed here."
  },
  {
   "id": "metabase",
   "name": "Metabase",
   "category": "bi",
   "tagline": "Open-source BI with a Library semantic layer, Metabot AI, and an official MCP server.",
   "verdict": "partial",
   "verdictNote": "Library metrics, measures, segments, and glossary feed Metabot and a permission-scoped MCP server, but no joins or verified query pairs are documented.",
   "artifacts": [
    {
     "name": "Library (published tables, metrics, SQL snippets, Glossary)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, Git sync",
     "url": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/library.md"
    },
    {
     "name": "Measures (saved aggregations on a table)",
     "kind": "metric-view",
     "status": "GA",
     "since": "",
     "format": "GUI, expression",
     "url": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/measures.md"
    },
    {
     "name": "Segments (saved table filters)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://www.metabase.com/docs/latest/data-modeling/data-studio"
    },
    {
     "name": "Glossary (business terms for people and agents)",
     "kind": "glossary",
     "status": "GA",
     "since": "",
     "format": "GUI, Git sync",
     "url": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/library.md"
    },
    {
     "name": "Metabot (AI assistant)",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "GUI, Slack",
     "url": "https://github.com/metabase/metabase/blob/master/docs/ai/metabot.md"
    },
    {
     "name": "Official MCP server (/api/metabase-mcp)",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-04",
     "format": "MCP over Streamable HTTP, OAuth 2.0",
     "url": "https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Library metrics are standardized calculations that rank first in navigation, search, and the query builder.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/library.md"
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain object found in docs. Segments are saved filters only.",
     "u": ""
    },
    "relationships": {
     "l": 0,
     "n": "Published-tables doc defines no joins. It only says related tables are published together.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/published-tables.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Glossary terms help Metabot understand your terminology. Table and metric descriptions exist; how Metabot uses them is not stated.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/metabot.md"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No question-to-SQL pairs. Metabot can be limited to verified or Library content only.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/library.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "Metabot generates SQL but does not run it. Its search is limited to tables, metrics, questions, models, and dashboards.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/metabot.md"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No vector search on data found in sources opened.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Official server in Metabase 60 (Apr 2026), upgraded in 64 (Oct 2026). Admin enables it. Needs AI features on.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md"
    },
    "governance": {
     "l": 3,
     "n": "MCP and OAuth scopes follow the connecting user permissions. Pro and Enterprise can limit tools per group.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md"
    },
    "openStandard": {
     "l": 1,
     "n": "Library syncs to Git. No Metabase directory in the Ossie converters repo listing I fetched.",
     "u": "https://github.com/apache/ossie-converters"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "You can ask Metabot to write descriptions. It sees only database content, so it cannot supply business context. Plan not stated.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/settings.md"
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": 3,
     "n": "Metabase sends a sampling of field values to the AI, so Metabot can check if a state is stored as WI or Wisconsin.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/privacy.md"
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "Feedback can be sent to Metabase, but no eval tooling or verified-example loop was found.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/privacy.md"
    }
   },
   "offers": [
    "Library holds curated tables, metrics, and SQL snippets; admins can limit Metabot to Library content.",
    "Measures give one official formula per table, for example Net Promoter Score.",
    "Official MCP server needs no AI provider in Metabase. The client supplies the model.",
    "Library, measures, segments, and glossary sync to Git when Library sync is on.",
    "MCP also offers raw SQL, which admins can turn off."
   ],
   "gaps": [
    "Measures only work on questions that query the measure table directly. No joins or nested queries.",
    "Metabot checks only the first 100 tables when no table is named, and may invent tables beyond that.",
    "No synonyms field or verified question-SQL pairs found; the Glossary is the main text context.",
    "Metabot cannot find segments, measures, documents, or collections on its own.",
    "MCP tool access controls and analytics need Pro or Enterprise."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views"
   ],
   "nl2sqlPath": "Publish clean tables to the Library, add metrics, measures, and glossary terms, then set Metabot to curated content only. For your own agent, enable the MCP server and let the client supply the model. Keep a warehouse semantic layer if you need joins or synonyms.",
   "snippet": {
    "lang": "other",
    "title": "Measure formula for Net Promoter Score, from the Measures doc",
    "code": "(CountIf([Score] >= 9) - CountIf([Score] <= 6)) / Count() * 100",
    "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/measures.md"
   },
   "worksWith": [
    "Athena",
    "BigQuery",
    "ClickHouse",
    "Databricks",
    "Druid",
    "MongoDB",
    "MariaDB",
    "MySQL",
    "Oracle",
    "PostgreSQL",
    "Presto",
    "Redshift",
    "Snowflake",
    "SparkSQL",
    "SQL Server",
    "SQLite",
    "Starburst",
    "Vertica"
   ],
   "worksWithUrl": "https://github.com/metabase/metabase/blob/master/docs/databases/connecting.md",
   "openToOtherTools": {
    "l": 3,
    "n": "Official MCP server (Streamable HTTP, OAuth 2.0) searches and queries metrics and tables within user permissions. No OSI export.",
    "u": "https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md"
   },
   "sources": [
    {
     "t": "Metabase MCP docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md"
    },
    {
     "t": "Metabot docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/metabot.md"
    },
    {
     "t": "Library docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/library.md"
    },
    {
     "t": "Measures docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/measures.md"
    },
    {
     "t": "Published tables docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/published-tables.md"
    },
    {
     "t": "Connecting to databases docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/databases/connecting.md"
    },
    {
     "t": "Data Studio",
     "u": "https://www.metabase.com/docs/latest/data-modeling/data-studio"
    },
    {
     "t": "Metabase 60 release notes",
     "u": "https://www.metabase.com/releases/metabase-60"
    },
    {
     "t": "Metabase 59 release notes",
     "u": "https://www.metabase.com/releases/metabase-59"
    },
    {
     "t": "Metabase releases",
     "u": "https://www.metabase.com/releases"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Metabase AI settings (docs source)",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/settings.md"
    },
    {
     "t": "Metabase AI privacy (docs source)",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/privacy.md"
    },
    {
     "t": "Metabase serialization (docs source)",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/installation-and-operation/serialization.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": "metabase",
   "enrichHowTo": "Edit table and field descriptions in the Data Model admin page, or ask Metabot to draft them. Add business meaning by hand. A supported bulk write was not confirmed."
  },
  {
   "id": "oracleanalytics",
   "name": "Oracle Analytics Cloud and Server",
   "category": "bi",
   "tagline": "Oracle BI platform with a code-based semantic model, AI Assistant, and an MCP server in Preview.",
   "verdict": "native",
   "verdictNote": "The semantic model (Semantic Modeler, SMML JSON, Git) feeds the AI Assistant with indexing and synonyms, while the MCP server is still Preview.",
   "artifacts": [
    {
     "name": "Semantic Modeler (SMML JSON, Git)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "JSON files, GUI",
     "url": "https://blogs.oracle.com/analytics/oac-semantic-modeller-github"
    },
    {
     "name": "Model Administration Tool (.rpd)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "Windows tool, .rpd",
     "url": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/semantic-models-architecture.html"
    },
    {
     "name": "Oracle Analytics AI Assistant",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2025-05",
     "format": "GUI",
     "url": "https://blogs.perficient.com/2025/05/09/a-closer-look-at-the-ai-assistant-of-oracle-analytics/"
    },
    {
     "name": "Search Index: AI Assistant indexing and synonyms",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "GUI, CSV",
     "url": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-and-synonyms-using-csv-file.html"
    },
    {
     "name": "Oracle Analytics Cloud MCP server",
     "kind": "mcp",
     "status": "Preview",
     "since": "2025-11",
     "format": "MCP, OAuth 2.0",
     "url": "https://blogs.oracle.com/analytics/oracle-analytics-july-2026-update"
    },
    {
     "name": "Analytic Views support in Semantic Modeler",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "2026-01",
     "format": "GUI",
     "url": "https://blogs.oracle.com/analytics/oracle-analytics-january-2026-update"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "The MCP describe tool returns measures from subject areas. Semantic model measures are defined in the model.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/tools-available-oracle-analytics-cloud-mcp-server.html"
    },
    "dimensions": {
     "l": 3,
     "n": "Describe tool returns tables, columns, and hierarchies from the model.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/tools-available-oracle-analytics-cloud-mcp-server.html"
    },
    "relationships": {
     "l": 3,
     "n": "Semantic models have layered metadata including a physical layer with tables and aliases. Join detail not fetched.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/semantic-models-architecture.html"
    },
    "synonyms": {
     "l": 3,
     "n": "Admins set synonyms and indexing per attribute in the Search Index. CSV export allows bulk edits.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-and-synonyms-using-csv-file.html"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "AI Assistant reuses the data model and metadata. Broadly available from the May 2025 update per a partner blog.",
     "u": "https://blogs.perficient.com/2025/05/09/a-closer-look-at-the-ai-assistant-of-oracle-analytics/"
    },
    "ontology": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "None found for data or metadata search.",
     "u": ""
    },
    "mcp": {
     "l": 2,
     "n": "OAC MCP server tools: discover, describe, execute Logical SQL. Still Preview in the Jul 2026 update.",
     "u": "https://blogs.oracle.com/analytics/oracle-analytics-july-2026-update"
    },
    "governance": {
     "l": 3,
     "n": "MCP tools run with the permissions of the user who gets the OAuth token. Docs warn of data exposure to LLMs.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/access-oracle-analytics-cloud-mcp-server.html"
    },
    "openStandard": {
     "l": 0,
     "n": "Model is JSON (SMML) with Git support. No OSI converter in the Ossie converters repo list.",
     "u": "https://github.com/apache/ossie-converters"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Search Index lets admins choose which attributes the AI Assistant sees, with synonyms and metadata-only or value indexing.",
    "Semantic Modeler stores models as JSON files with Git integration.",
    "MCP server tools discover datasets, describe columns and measures, and run Logical SQL.",
    "Admins can pick the AI model, including managed gpt-oss in OCI Generative AI (Jul 2026).",
    "Semantic Modeler supports Snowflake, BigQuery, Databricks, and Oracle Autonomous databases."
   ],
   "gaps": [
    "MCP server is Preview, and Oracle warns its behavior may change.",
    "No verified-query object found for the AI Assistant.",
    "Oracle Analytic Views are not supported in Semantic Modeler per the support table; a Jan 2026 update says support was added, so the two conflict.",
    "No OSI converter or open export found."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Build the model in Semantic Modeler, then enable attributes and synonyms in the Search Index so the AI Assistant can use them. For outside agents, use the Preview MCP server and keep its permissions narrow. Do not depend on it for production until it is GA.",
   "snippet": {
    "lang": "other",
    "title": "OAC MCP server tool names (from Oracle docs)",
    "code": "oracle_analytics-discoverData\noracle_analytics-describeData\noracle_analytics-executeLogicalSQL",
    "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/tools-available-oracle-analytics-cloud-mcp-server.html"
   },
   "sources": [
    {
     "t": "Oracle Analytics July 2026 update",
     "u": "https://blogs.oracle.com/analytics/oracle-analytics-july-2026-update"
    },
    {
     "t": "Oracle Analytics January 2026 update",
     "u": "https://blogs.oracle.com/analytics/oracle-analytics-january-2026-update"
    },
    {
     "t": "About the Oracle Analytics Cloud MCP server",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/oracle-analytics-cloud-mcp-server.html"
    },
    {
     "t": "Tools available with the OAC MCP server",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/tools-available-oracle-analytics-cloud-mcp-server.html"
    },
    {
     "t": "Access the OAC MCP server",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/access-oracle-analytics-cloud-mcp-server.html"
    },
    {
     "t": "OAC MCP server blog",
     "u": "https://blogs.oracle.com/analytics/oracle-analytics-cloud-mcp-server-bridging-enterprise-analytics-and-ai"
    },
    {
     "t": "About Oracle Analytics AI Assistant",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/oracle-analytics-ai-assistant.html"
    },
    {
     "t": "Managing indexing and synonyms using a CSV file",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-and-synonyms-using-csv-file.html"
    },
    {
     "t": "Data sources supported for semantic models",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/data-sources-supported-semantic-models.html"
    },
    {
     "t": "About a semantic model's architecture",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/semantic-models-architecture.html"
    },
    {
     "t": "OAC Semantic Modeler and GitHub (Oracle blog)",
     "u": "https://blogs.oracle.com/analytics/oac-semantic-modeller-github"
    },
    {
     "t": "A closer look at the AI Assistant of Oracle Analytics (Perficient)",
     "u": "https://blogs.perficient.com/2025/05/09/a-closer-look-at-the-ai-assistant-of-oracle-analytics/"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    }
   ],
   "worksWith": [
    "Databricks",
    "Google BigQuery",
    "Snowflake",
    "Oracle Autonomous Data Warehouse",
    "Oracle Autonomous Transaction Processing",
    "Oracle AI Data Platform"
   ],
   "worksWithUrl": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/data-sources-supported-semantic-models.html",
   "openToOtherTools": {
    "l": 2,
    "n": "OAC MCP server is Preview: AI clients discover datasets, describe them, and run Logical SQL as the token's user.",
    "u": "https://blogs.oracle.com/analytics/oracle-analytics-july-2026-update"
   },
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Not verified. Vendor docs could not be fetched and the search budget ran out, so no supported bulk method is claimed here."
  },
  {
   "id": "qlik",
   "name": "Qlik (Qlik Sense and Qlik Cloud)",
   "category": "bi",
   "tagline": "Associative analytics platform with logical models, Qlik Answers, and an MCP server.",
   "verdict": "native",
   "verdictNote": "Logical models, business logic synonyms, glossary links, and Qlik Answers feed AI, and the Qlik MCP server reached GA in Feb 2026.",
   "artifacts": [
    {
     "name": "Logical model and business logic (vocabulary, synonyms)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business_logic.htm"
    },
    {
     "name": "Qlik Answers over apps (structured data)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-02",
     "format": "GUI, API",
     "url": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikAnswers/working-with-apps-in-qlik-answers.htm"
    },
    {
     "name": "Qlik Answers semantic understanding (generated field and master item descriptions)",
     "kind": "annotations",
     "status": "Unverified",
     "since": "",
     "format": "GUI",
     "url": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikAnswers/BusinessLogicAI/business-logic-semantic-understanding.htm"
    },
    {
     "name": "Qlik MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-02",
     "format": "MCP, tool catalog",
     "url": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server.htm"
    },
    {
     "name": "Fast Mode for Qlik Answers",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "",
     "format": "GUI",
     "url": "https://community.qlik.com/t5/Support-Updates/Introducing-Fast-Mode-A-New-Gear-for-Qlik-Answers/ba-p/2552881"
    },
    {
     "name": "Discovery Agent and Data Products for Analytics",
     "kind": "agent",
     "status": "Announced",
     "since": "2026-02",
     "format": "Planned after Feb 2026 release",
     "url": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Master measures are used by Qlik Answers Fast Mode. Expression syntax docs were not fetched.",
     "u": "https://community.qlik.com/t5/Support-Updates/Introducing-Fast-Mode-A-New-Gear-for-Qlik-Answers/ba-p/2552881"
    },
    "dimensions": {
     "l": 3,
     "n": "Master dimensions are used by Fast Mode. The logical model groups fields and master items.",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business-logic-logical-models.htm"
    },
    "relationships": {
     "l": 3,
     "n": "Logical model groups show conceptual association between fields and master items. Qlik Answers reads Overview and Fields tabs.",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business-logic-logical-models.htm"
    },
    "synonyms": {
     "l": 3,
     "n": "Business logic vocabulary maps alternate terms, for example sales to revenue. Glossary terms linked to master items add context.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business_logic.htm"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Qlik Answers on apps reached GA in Feb 2026 as the conversational interface. Structured-data GA date not separately confirmed.",
     "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    },
    "ontology": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "vector": {
     "l": 3,
     "n": "MCP tool qlik_semantic_search_app is listed. Stage of that tool not stated.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server-tools.htm"
    },
    "mcp": {
     "l": 3,
     "n": "Qlik MCP server GA Feb 2026. Needs the Qlik MCP: Allowed permission. Tools can be enabled per tenant.",
     "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    },
    "governance": {
     "l": 3,
     "n": "Section Access is respected in Qlik Answers, and MCP tools run as the connecting user.",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikAnswers/working-with-apps-in-qlik-answers.htm"
    },
    "openStandard": {
     "l": 0,
     "n": "Qlik joined OSI Jan 2026. No Qlik OSI export found, and no Qlik converter in the Ossie converters repo.",
     "u": "https://ossie.apache.org/updates/qlik-joins-snowflake-to-support-open-semantic-interchange/"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Logical model and vocabulary supply synonyms and custom analyses to Insight Advisor.",
    "Qlik Answers generates field and master item descriptions you can review.",
    "Qlik MCP server lets outside assistants search apps, read fields, and ask questions.",
    "MCP tools cover glossary, data products, lineage, master items, and selections.",
    "Section Access limits what Qlik Answers returns."
   ],
   "gaps": [
    "No verified-query or example-SQL object was found.",
    "Logical model is per app, not a shared governed model across apps.",
    "No Qlik OSI export found, although Qlik joined OSI.",
    "Discovery Agent and Data Products for Analytics were announced as coming after Feb 2026; status unconfirmed.",
    "Master items are not supported by every Insight Advisor feature, per a community post."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Define master measures and dimensions, set up the logical model and vocabulary, then let Qlik Answers index the app. For your own agents, connect to the Qlik MCP server and enable only the tools you need. Keep one logical model per app in mind when you plan reuse.",
   "snippet": {
    "lang": "other",
    "title": "Qlik MCP app discovery tools (names from the tools page)",
    "code": "qlik_search\nqlik_describe_app\nqlik_get_fields\nqlik_list_sheets\nqlik_get_sheet_details\nqlik_semantic_search_app",
    "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server-tools.htm"
   },
   "sources": [
    {
     "t": "Qlik agentic analytics GA and MCP server press release",
     "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    },
    {
     "t": "Qlik MCP server (help)",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server.htm"
    },
    {
     "t": "Qlik MCP server tools (help)",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server-tools.htm"
    },
    {
     "t": "Building logical models for Insight Advisor (help)",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business-logic-logical-models.htm"
    },
    {
     "t": "Customizing logical models for Insight Advisor (help)",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business_logic.htm"
    },
    {
     "t": "Qlik Answers generated descriptions (help)",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikAnswers/BusinessLogicAI/business-logic-semantic-understanding.htm"
    },
    {
     "t": "Working with applications in Qlik Answers (help)",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikAnswers/working-with-apps-in-qlik-answers.htm"
    },
    {
     "t": "Fast Mode for Qlik Answers (Qlik Community)",
     "u": "https://community.qlik.com/t5/Support-Updates/Introducing-Fast-Mode-A-New-Gear-for-Qlik-Answers/ba-p/2552881"
    },
    {
     "t": "Data sources in Qlik Cloud Analytics (help)",
     "u": "https://help.qlik.com/ja-jp/cloud-services/Subsystems/Hub/Content/Sense_Helpsites/Connectors_SaaS.htm"
    },
    {
     "t": "Qlik joins Snowflake to support Open Semantic Interchange",
     "u": "https://ossie.apache.org/updates/qlik-joins-snowflake-to-support-open-semantic-interchange/"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Building logical models for Insight Advisor with Business logic",
     "u": "https://help.qlik.com/en-US/sense/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business-logic-logical-models.htm"
    }
   ],
   "worksWith": [
    "Google BigQuery",
    "Databricks",
    "Amazon Redshift",
    "Azure Synapse Analytics",
    "Azure SQL Database",
    "Apache Spark",
    "Apache Hive"
   ],
   "worksWithUrl": "https://help.qlik.com/ja-jp/cloud-services/Subsystems/Hub/Content/Sense_Helpsites/Connectors_SaaS.htm",
   "openToOtherTools": {
    "l": 3,
    "n": "Qlik MCP server GA Feb 2026 exposes app discovery, fields, and natural-language questions to third-party assistants.",
    "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
   },
   "verified": "2026-10-24",
   "logo": "qlik",
   "enrichHowTo": "Qlik Insight Advisor reads a logical model that you edit by hand under Business logic. Bulk edit by API or file was not verified."
  },
  {
   "id": "businessobjects",
   "name": "SAP BusinessObjects BI",
   "category": "bi",
   "tagline": "SAP's long-running enterprise BI suite with universes as its semantic layer.",
   "verdict": "partial",
   "verdictNote": "Universes (.unx) are a classic semantic layer, but no first-party NL-to-SQL, synonyms, or MCP feature was found, and SAP's AI work is in Business Data Cloud.",
   "artifacts": [
    {
     "name": "Universe (.unx) built in Information Design Tool",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, .unx files",
     "url": "https://learning.sap.com/courses/exploring-the-fundamental-concepts-of-sap-businessobjects-web-intelligence/building-a-query-based-on-a-universe"
    },
    {
     "name": "Universe (.unv) built in Universe Design Tool",
     "kind": "semantic-model",
     "status": "Deprecated",
     "since": "",
     "format": "GUI, .unv files",
     "url": "https://nttdata-solutions.com/uk/blog/preparing-for-the-end-of-life-of-sap-businessobjects-4-3-what-should-your-business-do/"
    },
    {
     "name": "BI platform RESTful web services (/biprws)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "REST, JSON or XML",
     "url": "https://blogs.sap.com/2017/05/10/query-the-businessobjects-repository-using-bi-platform-rest-sdk-rws"
    },
    {
     "name": "SAP BusinessObjects BI 2025 release",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "Product release",
     "url": "https://wiiisdom.com/blog/sap-businessobjects-bi-2025/"
    },
    {
     "name": "SAP Business Data Cloud shared semantic layer and Knowledge Graph",
     "kind": "knowledge-graph",
     "status": "Unverified",
     "since": "",
     "format": "SAP cloud service",
     "url": "https://barc.com/sap-data-analytics-2026/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Universe objects include measures that Web Intelligence queries use. Source is an SAP training page; object syntax was not fetched.",
     "u": "https://learning.sap.com/courses/exploring-the-fundamental-concepts-of-sap-businessobjects-web-intelligence/building-a-query-based-on-a-universe"
    },
    "dimensions": {
     "l": 3,
     "n": "Universe dimension objects are chosen in the Web Intelligence query panel. Hierarchy and time-grain detail not verified.",
     "u": "https://learning.sap.com/courses/exploring-the-fundamental-concepts-of-sap-businessobjects-web-intelligence/building-a-query-based-on-a-universe"
    },
    "relationships": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "synonyms": {
     "l": 0,
     "n": "No synonym or AI context object found for universes. Teams add descriptions in object metadata or use an outside layer.",
     "u": ""
    },
    "verifiedQueries": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "nl2sql": {
     "l": 0,
     "n": "No first-party NL-to-SQL in BusinessObjects found. SAP Joule and agents are tied to Business Data Cloud, not BO.",
     "u": "https://barc.com/sap-data-analytics-2026/"
    },
    "ontology": {
     "l": 0,
     "n": "None found in BO. SAP Knowledge Graph is described as part of Business Data Cloud.",
     "u": "https://barc.com/sap-data-analytics-2026/"
    },
    "graph": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "mcp": {
     "l": 0,
     "n": "No SAP MCP server for BusinessObjects found in search results.",
     "u": ""
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 0,
     "n": "No OSI or open export found. The Talend Data Catalog bridge can read .unx files, which is a partner path.",
     "u": "https://help.qlik.com/talend/en-US/talend-data-catalog/Cloud/Content/Bridges/MIRBoInformationDesignToolUnxExport.htm"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Single-source .unx universes with dimensions and measures stay supported in BI 2025.",
    "Web Intelligence builds queries on a universe, so business users avoid raw SQL.",
    "BI platform REST services expose repository metadata and documents.",
    "BI 4.3 mainstream maintenance runs to Dec 31, 2026, with security fixes to end of 2027."
   ],
   "gaps": [
    "No first-party NL-to-SQL, synonyms, verified queries, or MCP server was found for BusinessObjects.",
    "Universe Design Tool and .unv universes are deprecated in BI 2025. Only .unx from Information Design Tool continues.",
    "Multi-source universes (Data Federator) are on SAP's deprecated list per partner posts, not confirmed by SAP.",
    "SAP puts its AI and semantic investment into Business Data Cloud, not the BO universe."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "SAP Business Data Cloud"
   ],
   "nl2sqlPath": "BusinessObjects has no confirmed native NL-to-SQL. Teams that need an AI agent usually read the warehouse or an outside semantic layer instead of the universe. If the data is in SAP, look at Business Data Cloud and Joule, which are separate products.",
   "snippet": {
    "lang": "other",
    "title": "No official universe syntax was fetched. Universes are built in a GUI and stored as .unx files.",
    "code": "",
    "u": ""
   },
   "sources": [
    {
     "t": "SAP BusinessObjects BI 2025 positioning (SAPinsider)",
     "u": "https://sapinsider.org/articles/saps-strategic-direction-for-analytics-businessobjects-bi-2025/"
    },
    {
     "t": "Preparing for end of life of BO 4.3 (NTT DATA)",
     "u": "https://nttdata-solutions.com/uk/blog/preparing-for-the-end-of-life-of-sap-businessobjects-4-3-what-should-your-business-do/"
    },
    {
     "t": "SAP BusinessObjects BI 2025 (Wiiisdom)",
     "u": "https://wiiisdom.com/blog/sap-businessobjects-bi-2025/"
    },
    {
     "t": "Building a query based on a universe (SAP Learning)",
     "u": "https://learning.sap.com/courses/exploring-the-fundamental-concepts-of-sap-businessobjects-web-intelligence/building-a-query-based-on-a-universe"
    },
    {
     "t": "Query the BO repository using the REST SDK (SAP Blogs, 2017)",
     "u": "https://blogs.sap.com/2017/05/10/query-the-businessobjects-repository-using-bi-platform-rest-sdk-rws"
    },
    {
     "t": "SAP BusinessObjects BI connector (Dataedo docs)",
     "u": "https://docs.dataedo.com/docs/documenting-technology/supported-databases/sap-businessobjects"
    },
    {
     "t": "SAP data and analytics 2026 (BARC)",
     "u": "https://barc.com/sap-data-analytics-2026/"
    },
    {
     "t": "IDT .unx export bridge (Talend Data Catalog help)",
     "u": "https://help.qlik.com/talend/en-US/talend-data-catalog/Cloud/Content/Bridges/MIRBoInformationDesignToolUnxExport.htm"
    }
   ],
   "worksWith": [],
   "worksWithUrl": "",
   "openToOtherTools": {
    "l": 1,
    "n": "REST services reach repository and documents. Ad hoc universe queries over REST appear only in a 2017 blog. No MCP or OSI.",
    "u": "https://blogs.sap.com/2017/05/10/query-the-businessobjects-repository-using-bi-platform-rest-sdk-rws"
   },
   "verified": "2026-10-24",
   "logo": "sap",
   "enrichHowTo": "Not verified. Vendor docs could not be fetched and the search budget ran out, so no supported bulk method is claimed here."
  },
  {
   "id": "sigma",
   "name": "Sigma",
   "category": "bi",
   "tagline": "Cloud analytics workbook tool that queries the warehouse live, with data models and an MCP server.",
   "verdict": "partial",
   "verdictNote": "Data models with metrics feed Sigma Assistant and an MCP server, but I could not open the docs to confirm other semantic objects.",
   "artifacts": [
    {
     "name": "Data models (with metrics)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://help.sigmacomputing.com/docs/data-modeling-best-practices"
    },
    {
     "name": "Sigma Assistant (formerly Ask Sigma)",
     "kind": "agent",
     "status": "GA",
     "since": "2026-04",
     "format": "GUI",
     "url": "https://community.sigmacomputing.com/t/whats-new-in-sigma-april-17-2026/6747"
    },
    {
     "name": "Sigma MCP server (queries connections, data models, workbooks)",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-12",
     "format": "MCP, OAuth",
     "url": "https://help.sigmacomputing.com/docs/use-sigma-mcp-server"
    },
    {
     "name": "Sigma MCP client",
     "kind": "mcp",
     "status": "Unverified",
     "since": "2025-12",
     "format": "MCP",
     "url": "https://sigmacomputing.com/product-launch/december-2025"
    },
    {
     "name": "Documentation MCP server",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP",
     "url": "https://help.sigmacomputing.com/docs/use-documentation-mcp-server"
    },
    {
     "name": "Snowflake Semantic Views integration",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": "Snowflake",
     "url": "https://querio.ai/articles/sigma-computing-ai-natural-language-query-2025-2026"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metrics in a data model are used by Sigma Assistant for aggregate calculations. Docs advise a default timeline and description.",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices"
    },
    "dimensions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "relationships": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "synonyms": {
     "l": 3,
     "n": "April 2026 notes: Sigma Assistant gets AI context for data models. Exact fields not confirmed.",
     "u": "https://community.sigmacomputing.com/t/whats-new-in-sigma-april-17-2026/6747"
    },
    "verifiedQueries": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Ask Sigma was upgraded to Sigma Assistant in April 2026 with semantic search and AI context for data models.",
     "u": "https://community.sigmacomputing.com/t/whats-new-in-sigma-april-17-2026/6747"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query found.",
     "u": ""
    },
    "vector": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Sigma MCP server queries connections, data models, and workbooks without SQL. Needs the Use Sigma MCP with OAuth permission.",
     "u": "https://help.sigmacomputing.com/docs/use-sigma-mcp-server"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 1,
     "n": "Ossie converters repo has a sigma directory. Sigma side of the converter not checked.",
     "u": "https://github.com/apache/ossie-converters"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "Without metadata, the AI search index builds its own descriptions from column names. Not written back. AI columns are a different feature.",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "PUT /v2/dataModels/{id}/spec replaces the pages array of a data model and makes a new version. Descriptions can also import from dbt.",
     "u": "https://help.sigmacomputing.com/docs/update-a-data-model-from-a-code-representation.md"
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "No Sigma lineage doc found. Third parties report warehouse to data model links; DataHub says it does not emit column lineage.",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/sigma.md"
    },
    "evals": {
     "l": 0,
     "n": "Assistant response feedback added in April 2026 release notes. AI context for data models is Beta. No eval runner found.",
     "u": "https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models"
    }
   },
   "offers": [
    "Data model metrics are read by Sigma Assistant for aggregate calculations.",
    "Sigma MCP server (Dec 2025) lets Claude, ChatGPT, and other clients ask about connections, data models, and workbooks.",
    "Sigma can also act as an MCP client (Dec 2025 launch notes).",
    "Warehouse connections include Snowflake, BigQuery, Redshift, Databricks, and PostgreSQL."
   ],
   "gaps": [
    "I could not open Sigma docs, so dimensions, relationships, and governance are unconfirmed.",
    "No SQL interface for outside tools was found.",
    "Snowflake Semantic Views integration rests on a third-party quote.",
    "MCP use needs an OAuth permission on the account type."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Build data models with metrics, descriptions, and a default timeline, then use Sigma Assistant. For external agents, use the Sigma MCP server so questions run against data models. Keep warehouse-level semantics in Snowflake Semantic Views if you need them outside Sigma.",
   "snippet": {
    "lang": "other",
    "title": "No official syntax example opened",
    "code": "",
    "u": ""
   },
   "worksWith": [
    "Snowflake",
    "Google BigQuery",
    "Amazon Redshift",
    "Databricks",
    "PostgreSQL",
    "AlloyDB",
    "Azure SQL Database",
    "MySQL",
    "Starburst Galaxy",
    "SQL Server 2022",
    "Azure SQL Managed Instance"
   ],
   "worksWithUrl": "https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support",
   "openToOtherTools": {
    "l": 3,
    "n": "Hosted Sigma MCP server queries data models and workbooks. Needs OAuth permission. No SQL interface found.",
    "u": "https://help.sigmacomputing.com/docs/use-sigma-mcp-server"
   },
   "sources": [
    {
     "t": "Use the Sigma MCP server",
     "u": "https://help.sigmacomputing.com/docs/use-sigma-mcp-server"
    },
    {
     "t": "Data modeling best practices",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices"
    },
    {
     "t": "What's New in Sigma, April 17, 2026",
     "u": "https://community.sigmacomputing.com/t/whats-new-in-sigma-april-17-2026/6747"
    },
    {
     "t": "Sigma December 2025 launch",
     "u": "https://sigmacomputing.com/product-launch/december-2025"
    },
    {
     "t": "Sigma MCP server blog",
     "u": "https://sigmacomputing.com/blog/sigma-mcp-server-ai-assistants"
    },
    {
     "t": "Supported regions, data platforms, and features",
     "u": "https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support"
    },
    {
     "t": "Access Sigma documentation from AI tools",
     "u": "https://help.sigmacomputing.com/docs/use-documentation-mcp-server"
    },
    {
     "t": "Sigma Computing AI natural language query (Querio)",
     "u": "https://querio.ai/articles/sigma-computing-ai-natural-language-query-2025-2026"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Update a data model from a code representation",
     "u": "https://help.sigmacomputing.com/docs/update-a-data-model-from-a-code-representation.md"
    },
    {
     "t": "Manage AI context for a data model (Beta)",
     "u": "https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models"
    },
    {
     "t": "What's new in Sigma, 2026-04-17",
     "u": "https://help.sigmacomputing.com/changelog/2026-04-17"
    },
    {
     "t": "DataHub Sigma source",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/sigma.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Get the data model with GET /v2/dataModels/{id}/spec, edit descriptions in the JSON or YAML, then send it with PUT /v2/dataModels/{id}/spec. Each update needs schemaVersion. Descriptions can also be inherited from the warehouse or imported from dbt.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "# Edit descriptions in spec.json (keep schemaVersion), then replace the data model pages\ncurl -X PUT \"$SIGMA_API_URL/v2/dataModels/$DATA_MODEL_ID/spec\" \\\n  -H \"Content-Type: application/json\" \\\n  -d @spec.json\n# add your API token header as shown in the Sigma API docs",
    "u": "https://help.sigmacomputing.com/docs/update-a-data-model-from-a-code-representation.md"
   }
  },
  {
   "id": "strategy",
   "name": "Strategy (formerly MicroStrategy)",
   "category": "bi",
   "tagline": "BI vendor whose Mosaic universal semantic layer feeds Auto AI and MCP clients.",
   "verdict": "native",
   "verdictNote": "Mosaic is a GA semantic layer with Auto AI, an MCP server for Mosaic models, and Apache Ossie YAML import and export.",
   "artifacts": [
    {
     "name": "Strategy Mosaic (universal semantic layer)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2025-06",
     "format": "GUI, Git (GitHub)",
     "url": "https://www.strategy.com/press/strategy-announces-general-availability-of-strategy-mosaic-the-ai-powered-universal-intelligence-layer_06-24-2025"
    },
    {
     "name": "Semantic Graph and Auto AI (Auto Answers, Auto SQL, Auto Bot)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://barc.com/de/review/microstrategy-one/"
    },
    {
     "name": "MCP server for Mosaic models",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-03",
     "format": "MCP, endpoint /collaboration/mcp/mosaic",
     "url": "https://www2.strategy.com/producthelp/2021/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
    },
    {
     "name": "Mosaic import and export as Apache Ossie YAML",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "2026-07",
     "format": "YAML",
     "url": "https://software.strategy.com/whats-new/import-and-export-mosaic-models-as-apache-ossie-yaml"
    },
    {
     "name": "Git version control for Mosaic models (GitHub only)",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "2026-03",
     "format": "Git",
     "url": "https://www2.strategy.com/producthelp/2021/Mosaic/en-us/Content/mosaic_github.htm"
    },
    {
     "name": "AI-generated ontologies",
     "kind": "ontology",
     "status": "Announced",
     "since": "",
     "format": "Not released",
     "url": "https://www.strategy.com/software/strategyone/whats-new/direct-mosaic-model-access-via-mcp"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Mosaic is GA since Jun 2025 as a universal semantic layer. Object-level docs were not fetched.",
     "u": "https://www.strategy.com/press/strategy-announces-general-availability-of-strategy-mosaic-the-ai-powered-universal-intelligence-layer_06-24-2025"
    },
    "dimensions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "relationships": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "synonyms": {
     "l": 3,
     "n": "Customers can add their own terms to the Semantic Graph (2024 press release). Current docs not fetched.",
     "u": "https://www.businesswire.com/news/home/20240430392888/en"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Auto AI answers questions over the Semantic Graph. Feb 2026 release keeps AI on across linked Mosaic models.",
     "u": "https://www.strategy.com/software/blog/february-2026-trusted-ai-experiences-faster-voice-reliable-delivery"
    },
    "ontology": {
     "l": 0,
     "n": "AI-generated ontologies are planned, not released, per Strategy World 2026.",
     "u": "https://www.strategy.com/press/strategy-world-2026-declares-a-new-era-for-enterprise-ai-honors-customer-and-partner-innovation_02-25-2026"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found. The Semantic Graph is internal to Auto.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "None found.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Mosaic models are in the MCP server by default from Strategy One March 2026; February 2026 was a preview.",
     "u": "https://www2.strategy.com/producthelp/2021/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 2,
     "n": "Joined OSI Dec 2025. Mosaic YAML import and export to Apache Ossie noted Jul 17, 2026; stage not stated.",
     "u": "https://software.strategy.com/whats-new/import-and-export-mosaic-models-as-apache-ossie-yaml"
    },
    "aiDescriptions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "bulkMetadata": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Mosaic sits over databases and warehouses and serves SQL (JDBC), DAX, MDX, REST, and Python access.",
    "MCP endpoint for Mosaic returns project details, models, semantic metadata, and answers to natural-language questions.",
    "Optimized connectors for Tableau, Power BI, Excel, and Google Sheets.",
    "Models can be exchanged as Apache Ossie YAML and kept in GitHub.",
    "Auto AI uses the Semantic Graph, with custom terms."
   ],
   "gaps": [
    "AI-generated ontologies are announced only.",
    "Git support starts with GitHub only and one integration per environment.",
    "I could not confirm that YAML export and Git work together, or the Ossie export stage.",
    "No verified-query object, vector, or graph query was found."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Build the model in Mosaic, turn on AI for it, and let Auto answer in Strategy tools. For outside agents, connect Claude, ChatGPT, or Copilot to the Mosaic MCP endpoint. Use the Ossie YAML export when you need to move definitions elsewhere.",
   "snippet": {
    "lang": "other",
    "title": "Mosaic MCP endpoint path for a custom connector (from product help)",
    "code": "https://env-domain/collaboration/mcp/mosaic\n// agents use a different path:\n// https://env-domain/collaboration/mcp/agent",
    "u": "https://www2.strategy.com/producthelp/2021/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
   },
   "sources": [
    {
     "t": "Mosaic universal semantic layer (Strategy)",
     "u": "https://www.strategy.com/software/strategymosaic"
    },
    {
     "t": "Mosaic general availability press release, Jun 2025",
     "u": "https://www.strategy.com/press/strategy-announces-general-availability-of-strategy-mosaic-the-ai-powered-universal-intelligence-layer_06-24-2025"
    },
    {
     "t": "Direct Mosaic model access via MCP (Strategy One March 2026)",
     "u": "https://www.strategy.com/software/strategyone/whats-new/direct-mosaic-model-access-via-mcp"
    },
    {
     "t": "Interact with agents and Mosaic models using an MCP server (product help)",
     "u": "https://www2.strategy.com/producthelp/2021/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
    },
    {
     "t": "Strategy World 2026 press release",
     "u": "https://www.strategy.com/press/strategy-world-2026-declares-a-new-era-for-enterprise-ai-honors-customer-and-partner-innovation_02-25-2026"
    },
    {
     "t": "Import and export Mosaic models as Apache Ossie YAML",
     "u": "https://software.strategy.com/whats-new/import-and-export-mosaic-models-as-apache-ossie-yaml"
    },
    {
     "t": "Mosaic model version control with GitHub (product help)",
     "u": "https://www2.strategy.com/producthelp/2021/Mosaic/en-us/Content/mosaic_github.htm"
    },
    {
     "t": "February 2026 release post (Strategy)",
     "u": "https://www.strategy.com/software/blog/february-2026-trusted-ai-experiences-faster-voice-reliable-delivery"
    },
    {
     "t": "Strategy Auto and Semantic Graph press release, Apr 2024",
     "u": "https://www.businesswire.com/news/home/20240430392888/en"
    },
    {
     "t": "Snowflake ecosystem page (Strategy)",
     "u": "https://strategy.com/software/ecosystems/snowflake"
    },
    {
     "t": "Databricks ecosystem page (Strategy)",
     "u": "https://strategy.com/software/ecosystems/databricks"
    },
    {
     "t": "MicroStrategy ONE review (BARC)",
     "u": "https://barc.com/de/review/microstrategy-one/"
    },
    {
     "t": "Strategy One AI analytics (Italian page, seen in search)",
     "u": "https://www.strategy.com/it/software/strategyone/ai-analytics"
    }
   ],
   "worksWith": [
    "Snowflake",
    "Databricks"
   ],
   "worksWithUrl": "https://strategy.com/software/ecosystems/snowflake",
   "openToOtherTools": {
    "l": 3,
    "n": "JDBC, DAX, MDX, REST, Python, and an MCP server for Mosaic models (March 2026). Ossie YAML export noted Jul 2026.",
    "u": "https://www2.strategy.com/producthelp/2021/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
   },
   "verified": "2026-10-24",
   "logo": "microstrategy",
   "enrichHowTo": "Not verified. Vendor docs could not be fetched and the search budget ran out, so no supported bulk method is claimed here."
  },
  {
   "id": "tableau",
   "name": "Tableau (Tableau Semantics, Tableau Next)",
   "category": "bi",
   "tagline": "Salesforce BI with Tableau Semantics, a semantic layer on Data 360, and an MCP server.",
   "verdict": "native",
   "verdictNote": "Tableau Semantics holds governed metrics and definitions in Tableau Next, and agents reach it through a GA MCP server (Apr 2026).",
   "artifacts": [
    {
     "name": "Tableau Semantics (semantic layer in Tableau Next, on Data 360)",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": "GUI, API",
     "url": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "name": "Tableau Next MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-04",
     "format": "MCP",
     "url": "https://help.salesforce.com/s/articleView?id=analytics.tua_data_sdm_mcp.htm&language=en_US&type=5"
    },
    {
     "name": "Tableau MCP (open source, hosted at mcp.tableau.com or self-hosted)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP, OAuth 2.1 or PAT",
     "url": "https://github.com/tableau/tableau-mcp"
    },
    {
     "name": "Concierge / Analytics Agent (Analytics Q&A over semantic models)",
     "kind": "agent",
     "status": "GA",
     "since": "2026-04",
     "format": "GUI, Agentforce",
     "url": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "name": "Semantic Model Scope and Page Filters in Concierge",
     "kind": "agent",
     "status": "GA",
     "since": "2026-04",
     "format": "GUI",
     "url": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "name": "Q&A Calibration and Auto Semantic Model Creation",
     "kind": "nl2sql",
     "status": "Preview",
     "since": "",
     "format": "GUI",
     "url": "https://hex.tech/blog/tableau-next/"
    },
    {
     "name": "Tableau Pulse",
     "kind": "agent",
     "status": "Unverified",
     "since": "",
     "format": "GUI",
     "url": "https://www.tableau.com/2026-1-april-features"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Tableau Semantics centralizes metrics, calculations, and definitions in a governed layer. Exact stage not shown on pages I could open.",
     "u": "https://www.tableau.com/products/tableau-einstein"
    },
    "dimensions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "relationships": {
     "l": 3,
     "n": "Per Tableau MCP docs quoted by Hex, the semantic model defines how tables relate and how KPIs are calculated.",
     "u": "https://hex.tech/blog/tableau-next/"
    },
    "synonyms": {
     "l": 3,
     "n": "Same quoted docs say the model maps business terminology to fields. Field-level synonym settings not confirmed.",
     "u": "https://hex.tech/blog/tableau-next/"
    },
    "verifiedQueries": {
     "l": 2,
     "n": "Q&A Calibration is Beta or Pilot per Hex. Not confirmed as question-to-SQL pairs.",
     "u": "https://hex.tech/blog/tableau-next/"
    },
    "nl2sql": {
     "l": 3,
     "n": "Concierge Analytics Q&A runs natural-language questions over semantic models; April 2026 notes list its scope controls as GA.",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object found. Semantic models sit on Data 360 objects (DMO, DLO, CIO).",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query found.",
     "u": ""
    },
    "vector": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "April 2026 release notes say Tableau Next MCP is GA. The tool reference page is still titled Beta.",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    "governance": {
     "l": 3,
     "n": "April 2026 Concierge update lets admins govern agent data access by defining specific semantic models.",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    "openStandard": {
     "l": 1,
     "n": "Ossie converters repo has a Salesforce directory but no Tableau directory. Tableau appears only as an example export target.",
     "u": "https://github.com/apache/ossie-converters"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "2024 reports say Tableau Agent drafts data source descriptions in Catalog. Column level and current status Unverified.",
     "u": "https://atrium.ai/resources/6-frequently-asked-questions-about-einstein-copilot-for-tableau"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "REST API can update a column description on external assets. Some write methods need the Data Management add-on.",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_metadata.htm"
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": 3,
     "n": "Catalog lineage filters to a selected field or column, up or downstream. No columns for custom SQL tables. Cube sources unsupported.",
     "u": "https://help.tableau.com/current/online/en-us/dm_lineage.htm"
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Tableau Next MCP server (GA Apr 2026) lets agents query semantic models, browse assets, and ask Analytics Agent questions.",
    "Open-source tableau-mcp works with Tableau Cloud and Server, hosted or self-hosted.",
    "Semantic Model Scope in Concierge limits which semantic models an agent may use.",
    "Data layer runs on Data 360 with zero-copy links to Snowflake, BigQuery, Redshift, and Databricks."
   ],
   "gaps": [
    "I could not open Tableau or Salesforce docs, so dimension, synonym, and verified-query features are not confirmed.",
    "Q&A Calibration and Auto Semantic Model Creation are Beta or Pilot.",
    "Semantic layer lives in Salesforce Data 360. Hex argues trust and logic sit inside one vendor cloud.",
    "No Tableau converter in the Ossie repo."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Build a semantic data model in Tableau Next on Data 360, then use Concierge or the Tableau Next MCP server to ask questions. Calls go through the semantic model, so the agent does not write raw SQL. Check the Salesforce MCP docs for the current GA tool list.",
   "snippet": {
    "lang": "other",
    "title": "Hosted Tableau MCP endpoint named in the tableau-mcp README",
    "code": "https://mcp.tableau.com",
    "u": "https://github.com/tableau/tableau-mcp"
   },
   "worksWith": [
    "Snowflake",
    "Google BigQuery",
    "Amazon Redshift",
    "Databricks",
    "PostgreSQL",
    "MySQL"
   ],
   "worksWithUrl": "https://www.salesforce.com/analytics/tableau-next/",
   "openToOtherTools": {
    "l": 3,
    "n": "Tableau Next MCP is GA (Apr 2026). Open-source tableau-mcp is also available. No SQL interface or OSI export found.",
    "u": "https://www.tableau.com/2026-1-april-features"
   },
   "sources": [
    {
     "t": "Tableau April 2026 New Features",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "t": "Tableau November 2025 Release",
     "u": "https://www.tableau.com/2025-2-november-features"
    },
    {
     "t": "Tableau Semantics product page",
     "u": "https://www.tableau.com/products/tableau-einstein"
    },
    {
     "t": "Tableau Next Model Context Protocol (MCP) Server",
     "u": "https://help.salesforce.com/s/articleView?id=analytics.tua_data_sdm_mcp.htm&language=en_US&type=5"
    },
    {
     "t": "Tableau Next MCP Beta Server Tool Reference",
     "u": "https://help.salesforce.com/s/articleView?id=analytics.tua_data_tableau_next_mcp_beta_server_tool_reference.htm&language=en_US&type=5"
    },
    {
     "t": "Tableau Next hosted MCP server (Salesforce developers)",
     "u": "https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/tableau-next.html"
    },
    {
     "t": "Tableau MCP (GitHub)",
     "u": "https://github.com/tableau/tableau-mcp"
    },
    {
     "t": "What You Need to Know About Tableau Next in 2026 (Hex)",
     "u": "https://hex.tech/blog/tableau-next/"
    },
    {
     "t": "Tableau Next (Salesforce)",
     "u": "https://www.salesforce.com/analytics/tableau-next/"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Metadata Methods (REST API)",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_metadata.htm"
    },
    {
     "t": "Use Lineage for Impact Analysis",
     "u": "https://help.tableau.com/current/online/en-us/dm_lineage.htm"
    },
    {
     "t": "Introduction to Tableau Metadata API",
     "u": "https://help.tableau.com/current/api/metadata_api/en-us/index.html"
    },
    {
     "t": "FAQs About Tableau Agent (Atrium)",
     "u": "https://atrium.ai/resources/6-frequently-asked-questions-about-einstein-copilot-for-tableau"
    },
    {
     "t": "Step 4: Enable Tableau Next AI Features",
     "u": "https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Write column descriptions with the Tableau REST API metadata methods, which update a column description on a table. A Data Management license is needed for some of them. The Metadata API (GraphQL) is for reading."
  },
  {
   "id": "thoughtspot",
   "name": "ThoughtSpot",
   "category": "bi",
   "tagline": "Search and AI analytics platform with Models, TML, Spotter agents, and an MCP server.",
   "verdict": "partial",
   "verdictNote": "Models and TML are native and Spotter reads them, but Spotter Semantics (Mar 2026) is only confirmed by press release, not docs I could open.",
   "artifacts": [
    {
     "name": "Models (replaced Worksheets)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2024-11",
     "format": "GUI, TML",
     "url": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    {
     "name": "ThoughtSpot Modeling Language (TML)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "TML text",
     "url": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    {
     "name": "Spotter Semantics (agentic semantic layer, metrics catalog)",
     "kind": "semantic-model",
     "status": "Announced",
     "since": "2026-03",
     "format": "GUI, TML",
     "url": "https://www.thoughtspot.com/press-releases/thoughtspot-introduces-spotter-semantics-to-bring-trust-and-context-to-enterprise-ai"
    },
    {
     "name": "Spotter (AI analyst, replaced Sage and Ask Sage)",
     "kind": "agent",
     "status": "GA",
     "since": "2025-12",
     "format": "GUI",
     "url": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    {
     "name": "Spotter AI Agent APIs",
     "kind": "agent",
     "status": "Unverified",
     "since": "",
     "format": "REST",
     "url": "https://developers.thoughtspot.com/docs/spotter-agent-apis"
    },
    {
     "name": "Spotter MCP server (Spotter 3 tools from 2026-05-01)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "2026-05",
     "format": "MCP",
     "url": "https://developers.thoughtspot.com/docs/mcp-server-changelog"
    },
    {
     "name": "Worksheets",
     "kind": "semantic-model",
     "status": "Deprecated",
     "since": "2025-08",
     "format": "GUI, TML",
     "url": "https://developers.thoughtspot.com/docs/deprecated-features"
    }
   ],
   "caps": {
    "metrics": {
     "l": 2,
     "n": "Spotter Semantics adds a metrics catalog, announced Mar 12, 2026. Stage not confirmed in docs.",
     "u": "https://www.thoughtspot.com/press-releases/thoughtspot-introduces-spotter-semantics-to-bring-trust-and-context-to-enterprise-ai"
    },
    "dimensions": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "relationships": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "synonyms": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "verifiedQueries": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Spotter is the AI analyst. Sage and Ask Sage were removed in 10.15.0.cl (Dec 2025) and replaced by Spotter.",
     "u": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query found.",
     "u": ""
    },
    "vector": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Dated MCP versions. 2026-05-01 release switched to Spotter 3 tools and deprecated older URLs. No Preview label seen.",
     "u": "https://developers.thoughtspot.com/docs/mcp-server-changelog"
    },
    "governance": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "openStandard": {
     "l": 1,
     "n": "Ossie converters repo has a thoughtspot directory (TML Model and Table/SQL View). ThoughtSpot says Spotter Semantics aligns with OSI.",
     "u": "https://github.com/apache/ossie-converters"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Admin-enabled option generates synonyms for model columns, off by default. No description generator found.",
     "u": "https://docs.thoughtspot.com/cloud/latest/data-modeling-visibility"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "TML API exports, validates and imports Model TML in bulk. Models need export_schema_version v2.",
     "u": "https://developers.thoughtspot.com/docs/tml"
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": 3,
     "n": "Readiness guide advises indexing columns. Spotter shows sample values on hover. Data values go to the LLM only if an admin allows.",
     "u": "https://docs.thoughtspot.com/cloud/latest/spotter-worksheet-model"
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": 1,
     "n": "No ThoughtSpot lineage doc found. DataHub says worksheet column sources come from the metadata search API.",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/thoughtspot"
    },
    "evals": {
     "l": 3,
     "n": "Analysts add reference questions and business terms. Users mark answers incorrect and edit the search. No benchmark runner found.",
     "u": "https://docs.thoughtspot.com/cloud/latest/spotter-training-options"
    }
   },
   "offers": [
    "Models and TML give a code form for the semantic layer. Worksheets were migrated to Models by Aug 2025.",
    "Spotter MCP server (2026-05-01 release) gives agents session tools: create_analysis_session, send_session_message, get_session_updates.",
    "Spotter AI Agent APIs let your app start conversations; older converse endpoints are deprecated.",
    "An Ossie converter for TML exists in the Apache repo.",
    "Live connections to Snowflake, Redshift, BigQuery, and Databricks."
   ],
   "gaps": [
    "Spotter Semantics rests on a press release and syndicated copies. I could not open ThoughtSpot docs to check it.",
    "The 2026-05-01 MCP release has breaking changes for existing integrations.",
    "Model-level AI synonym generation was removed in 26.6.0.cl.",
    "Dimension, relationship, and verified-query features are unconfirmed here."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "Databricks Metric Views",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Model data in ThoughtSpot Models (TML), then use Spotter in the UI. For your own agent, call the Spotter MCP server or the Spotter agent APIs. Pin an MCP version date, because the May 2026 change broke older tool names.",
   "snippet": {
    "lang": "other",
    "title": "Legacy MCP URL paths, deprecated as of the 2026-05-01 release",
    "code": "/mcp\n/bearer/mcp\n/openai/mcp",
    "u": "https://developers.thoughtspot.com/docs/deprecated-features"
   },
   "worksWith": [
    "Snowflake",
    "Amazon Redshift",
    "Google BigQuery",
    "Databricks",
    "Azure Synapse",
    "Oracle ADW",
    "Starburst",
    "Teradata"
   ],
   "worksWithUrl": "https://docs.thoughtspot.com/software/7.2/connections-api",
   "openToOtherTools": {
    "l": 3,
    "n": "Spotter MCP server and Spotter agent REST APIs let outside agents query. Converter to OSI exists in repo.",
    "u": "https://developers.thoughtspot.com/docs/mcp-server-changelog"
   },
   "sources": [
    {
     "t": "Deprecation announcements",
     "u": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    {
     "t": "ThoughtSpot Spotter MCP Server changelog",
     "u": "https://developers.thoughtspot.com/docs/mcp-server-changelog"
    },
    {
     "t": "MCP Server with Spotter 3 capabilities",
     "u": "https://developers.thoughtspot.com/docs/mcp-server-spotter3"
    },
    {
     "t": "Spotter AI Agent APIs",
     "u": "https://developers.thoughtspot.com/docs/spotter-agent-apis"
    },
    {
     "t": "ThoughtSpot Introduces Spotter Semantics (press release)",
     "u": "https://www.thoughtspot.com/press-releases/thoughtspot-introduces-spotter-semantics-to-bring-trust-and-context-to-enterprise-ai"
    },
    {
     "t": "Data connection APIs (7.2)",
     "u": "https://docs.thoughtspot.com/software/7.2/connections-api"
    },
    {
     "t": "ThoughtSpot MCP server README (GitHub)",
     "u": "https://github.com/rohitthughtspot/mcp-server"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Hide a column or define a synonym",
     "u": "https://docs.thoughtspot.com/cloud/latest/data-modeling-visibility"
    },
    {
     "t": "Spotter Worksheet/Model readiness",
     "u": "https://docs.thoughtspot.com/cloud/latest/spotter-worksheet-model"
    },
    {
     "t": "Understanding training options for Spotter",
     "u": "https://docs.thoughtspot.com/cloud/latest/spotter-training-options"
    },
    {
     "t": "ThoughtSpot TML API",
     "u": "https://developers.thoughtspot.com/docs/tml"
    },
    {
     "t": "DataHub ThoughtSpot source",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/thoughtspot"
    },
    {
     "t": "Coaching best practices",
     "u": "https://docs.thoughtspot.com/cloud/26.2.0.cl/spotter-coach-not-coach"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Export the Model as TML with the TML API, edit column descriptions, synonyms and AI context in the file, then import it back. Add reference questions only after the model is clean."
  },
  {
   "id": "alation",
   "name": "Alation",
   "category": "catalog",
   "tagline": "Enterprise data catalog with stewardship, lineage and an Agent SDK.",
   "verdict": "partial",
   "verdictNote": "Alation offers descriptions, lineage and an SDK with MCP for agents, but no metric or join objects and no confirmed first-party text-to-SQL.",
   "artifacts": [
    {
     "name": "Alation AI Agent SDK (Core, MCP, LangChain)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "Python SDK; MCP over STDIO or HTTP; release candidate 1.0.0rc3 per package listings",
     "url": "https://www.alation.com/blog/alation-ai-agent-sdk-smarter-ai-models/"
    },
    {
     "name": "Alation Agent Studio",
     "kind": "agent",
     "status": "Unverified",
     "since": "2026-07",
     "format": "SDK or no-code builder; deploy via MCP or REST. Launch date from a third-party article",
     "url": "https://www.alation.com/product/agent-studio/"
    },
    {
     "name": "AI Suggested Descriptions (ALLIE)",
     "kind": "annotations",
     "status": "Unverified",
     "since": "",
     "format": "UI; cloud instances with New User Experience",
     "url": "https://docs.alation.com/en/latest/steward/AISuggestedDescriptions/AISuggestedDescriptions.html"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No governed metric object found in sources reviewed.",
     "u": ""
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects found.",
     "u": ""
    },
    "relationships": {
     "l": 1,
     "n": "Lineage links assets. No declared join paths for AI found.",
     "u": "https://docs.alation.com/en/latest/analyst/Lineage/index.html"
    },
    "synonyms": {
     "l": 3,
     "n": "Titles, descriptions and custom fields are cataloged and returned to agents by the SDK context tool.",
     "u": "https://www.alation.com/blog/alation-ai-agent-sdk-smarter-ai-models/"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-to-SQL pair feature found in sources reviewed.",
     "u": ""
    },
    "nl2sql": {
     "l": 1,
     "n": "Agent Studio lets you build your own agents. A first-party text-to-SQL agent was not confirmed.",
     "u": "https://www.alation.com/product/agent-studio/"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology or class model found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query capability found.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No native vector search confirmed.",
     "u": ""
    },
    "mcp": {
     "l": 2,
     "n": "SDK ships an MCP server. One listing calls it a preview; the SDK was at 1.0.0rc3. Status unverified.",
     "u": "https://www.alation.com/blog/alation-ai-agent-sdk-smarter-ai-models/"
    },
    "governance": {
     "l": 3,
     "n": "Stewardship workbench, bulk custom fields, and lineage live in the catalog.",
     "u": "https://docs.alation.com/en/latest/steward/StewardshipWorkbench/BulkCustomFields.html"
    },
    "openStandard": {
     "l": 0,
     "n": "No open semantic spec found. REST APIs and an open SDK exist.",
     "u": ""
    },
    "aiDescriptions": {
     "l": 3,
     "n": "ALLIE drafts table descriptions from names, columns, linked queries and joins. Steward reviews. Preview label not seen.",
     "u": "https://docs.alation.com/en/latest/steward/AISuggestedDescriptions/AISuggestedDescriptions.html"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Custom Field Value APIs, async above 6000 objects, sync max 10000. They cannot set titles or descriptions on data objects. Upload Logical Metadata is deprecated.",
     "u": "https://developer.alation.com/dev/v2024.1/reference/custom-field-values-overview"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification found in sources reviewed.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value matching for NL-to-SQL found.",
     "u": ""
    },
    "queryHistory": {
     "l": 0,
     "n": "Query log ingestion feeds lineage and usage. No join or metric suggestions from it found.",
     "u": "https://docs.alation.com/en/latest/sources/Lineage"
    },
    "lineage": {
     "l": 3,
     "n": "Auto lineage from query log ingestion and metadata extraction. Column-level depends on the connector.",
     "u": "https://docs.alation.com/en/latest/analyst/Lineage/LineageGlossary.html"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found in sources reviewed.",
     "u": ""
    }
   },
   "offers": [
    "AI-suggested table descriptions with steward review.",
    "Agent SDK with an MCP server exposing catalog context and lineage tools.",
    "Bulk custom field APIs for stewardship at scale.",
    "Lineage built from query log ingestion."
   ],
   "gaps": [
    "No metric, dimension or join objects found.",
    "Agent SDK and MCP at release candidate; status unverified.",
    "Bulk APIs cannot set titles or descriptions on data objects.",
    "No eval tooling or classification found."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Use Alation as the context source for your own agent through the Agent SDK or its MCP server. Keep metric and join logic in a semantic layer tool. Check SDK status before production use.",
   "snippet": {
    "lang": "other",
    "title": "Alation MCP remote URL pattern (from a third-party listing)",
    "code": "# Add to the MCP client after one-time authorization:\n# https://<your_instance>/ai/mcp\n# Tools listed: alation_context, bulk_retrieval, lineage,\n# data_quality_tool, get_data_products",
    "u": "https://mcp.so/servers/alation-ai-agent-sdk"
   },
   "enrichHowTo": "Draft descriptions with ALLIE AI Suggested Descriptions. For bulk writes of custom fields, use the PUT Custom Field Values API. Use the Relational Integration API for titles and descriptions, because custom field APIs cannot set them.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "# Alation bulk rules from developer docs (no payload shown here)\n# Custom Field Values PUT: max 10000 objects per request\n# Use the async endpoint above 6000 objects\n# Titles and descriptions: Relational Integration API instead",
    "u": "https://developer.alation.com/dev/v2024.1/reference/custom-field-values-overview"
   },
   "sources": [
    {
     "t": "Alation AI Agent SDK blog",
     "u": "https://www.alation.com/blog/alation-ai-agent-sdk-smarter-ai-models/"
    },
    {
     "t": "Alation Agent Studio",
     "u": "https://www.alation.com/product/agent-studio/"
    },
    {
     "t": "ALLIE AI Suggested Descriptions",
     "u": "https://docs.alation.com/en/latest/steward/AISuggestedDescriptions/AISuggestedDescriptions.html"
    },
    {
     "t": "Bulk Update Custom Fields",
     "u": "https://docs.alation.com/en/latest/steward/StewardshipWorkbench/BulkCustomFields.html"
    },
    {
     "t": "Custom field values overview",
     "u": "https://developer.alation.com/dev/v2024.1/reference/custom-field-values-overview"
    },
    {
     "t": "Discover Lineage",
     "u": "https://docs.alation.com/en/latest/sources/Lineage"
    },
    {
     "t": "Lineage Glossary",
     "u": "https://docs.alation.com/en/latest/analyst/Lineage/LineageGlossary.html"
    },
    {
     "t": "Alation AI Agent SDK (mcp.so)",
     "u": "https://mcp.so/servers/alation-ai-agent-sdk"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": []
  },
  {
   "id": "atlan",
   "name": "Atlan",
   "category": "catalog",
   "tagline": "Active metadata catalog with AI context agents and an MCP server.",
   "verdict": "partial",
   "verdictNote": "Atlan stores glossary, descriptions and lineage and serves them over MCP, but has no metric or join objects; its context studio is Private Preview.",
   "artifacts": [
    {
     "name": "Atlan MCP server",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP (local bridge or remote)",
     "url": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/implement-the-atlan-mcp-server"
    },
    {
     "name": "Atlan AI (descriptions, data exploration)",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "",
     "format": "UI; Enterprise and Business-Critical editions; enabled by admin under Labs",
     "url": "https://docs.atlan.com/product/capabilities/atlan-ai/concepts/what-is-atlan-ai"
    },
    {
     "name": "Context Agents Studio (Description, README, SQL Intelligence agents)",
     "kind": "agent",
     "status": "Preview",
     "since": "",
     "format": "UI; agent templates labeled Private Preview",
     "url": "https://docs.atlan.com/product/capabilities/governance/context-agents-studio/concepts/agents"
    },
    {
     "name": "Context Engineering Studio",
     "kind": "ontology",
     "status": "Preview",
     "since": "",
     "format": "UI; docs label it Private Preview",
     "url": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio"
    },
    {
     "name": "Business glossary",
     "kind": "glossary",
     "status": "Unverified",
     "since": "",
     "format": "UI, API, SDK",
     "url": "https://docs.atlan.com/product/capabilities/atlan-ai/concepts/what-is-atlan-ai"
    }
   ],
   "caps": {
    "metrics": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects found in sources reviewed.",
     "u": ""
    },
    "relationships": {
     "l": 1,
     "n": "Catalog links assets by lineage. No declared join paths for AI found; Context Studio may add them (Private Preview).",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio"
    },
    "synonyms": {
     "l": 3,
     "n": "Descriptions, READMEs and glossary terms on assets are read by agents through the MCP server.",
     "u": "https://atlan.com/mcp/"
    },
    "verifiedQueries": {
     "l": 2,
     "n": "Context Engineering Studio builds test questions and SQL Intelligence reuses past queries. Studio is Private Preview.",
     "u": "https://atlan.com/context-engineering-studio/"
    },
    "nl2sql": {
     "l": 2,
     "n": "Atlan AI supports data exploration questions. GA status not stated in sources seen; no confirmed first-party SQL agent.",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/how-to-use-atlan-ai-for-data-exploration"
    },
    "ontology": {
     "l": 2,
     "n": "Context Engineering Studio keeps a context repository for agents. Docs label it Private Preview.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/concepts/whats-in-a-context-repository"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found. Teams query lineage through API and MCP.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No native vector search over data or metadata confirmed.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "First-party MCP server searches assets, traces lineage and updates metadata. Docs seen show no preview label; GA date unknown.",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/implement-the-atlan-mcp-server"
    },
    "governance": {
     "l": 3,
     "n": "Tags, certification, access policies and lineage live on assets. Sample data is hashed or redacted by policy.",
     "u": "https://atlan.com/data-asset-360/"
    },
    "openStandard": {
     "l": 0,
     "n": "No open semantic spec found. Open SDKs and REST APIs exist.",
     "u": ""
    },
    "aiDescriptions": {
     "l": 2,
     "n": "Atlan AI drafts descriptions; admin enables it under Labs. Context Agents Description agent is a Private Preview template.",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/concepts/what-is-atlan-ai"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "CSV import app, Google Sheets or Excel sync, and Python SDK batch save in one API call.",
     "u": "https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/bulk-enrich-metadata"
    },
    "autoClassify": {
     "l": 1,
     "n": "Playbooks apply tags by rule. An Atlan article says it does not auto-detect PII. Tag propagation is off by default.",
     "u": "https://atlan.com/know/data-governance/automated-pii-classification/"
    },
    "sampleValues": {
     "l": 1,
     "n": "Sample data preview exists for people. No NL-to-SQL value matching confirmed.",
     "u": "https://atlan.com/data-asset-360/"
    },
    "queryHistory": {
     "l": 2,
     "n": "Context Agents read query history and lineage; SQL Intelligence turns past queries into evals. Status is Private Preview or unclear.",
     "u": "https://atlan.com/demos/context-agents-how-atlan-bootstraps-descriptions-readmes-and-sql-intelligence-across-your-entire-data-estate"
    },
    "lineage": {
     "l": 3,
     "n": "Column-level lineage for Snowflake, Redshift, BigQuery and more, mined from query history. Not all columns are guaranteed.",
     "u": "https://docs.atlan.com/product/capabilities/lineage/faq/sql-dump-lineage-support"
    },
    "evals": {
     "l": 2,
     "n": "Context Engineering Studio simulates questions and reports eval scores with fix suggestions. Private Preview.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/how-tos/build.md"
    }
   },
   "offers": [
    "Descriptions, READMEs, glossary terms and certification that agents read over MCP.",
    "Column-level lineage from warehouse query history.",
    "Bulk metadata writes by CSV, spreadsheet sync and Python SDK.",
    "Context Agents that draft descriptions from query history and lineage.",
    "Private Preview studio to build and test agent context."
   ],
   "gaps": [
    "No metric, dimension or join objects found.",
    "Context Studio and agent templates are Private Preview.",
    "No confirmed first-party text-to-SQL engine.",
    "PII auto-detection is unclear; propagation is off by default."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Use Atlan as the metadata and context source. Serve it to your own SQL agent over the Atlan MCP server. Keep metrics and joins in a warehouse or semantic layer tool.",
   "snippet": {
    "lang": "other",
    "title": "Atlan MCP: Claude Desktop uses a local bridge (needs Node.js 18+)",
    "code": "# No semantic-model syntax. Atlan MCP reads and updates metadata.\n# Updatable per agent toolkit: user descriptions, certificate status,\n# README, glossary term assignments.\n# See the linked setup page for the current client config.",
    "u": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/implement-the-atlan-mcp-server"
   },
   "enrichHowTo": "Batch updates with the Python SDK: build stubs with updater() and send the list to client.asset.save in one call. For people-led edits, use the CSV import app or Google Sheets sync. Description attribute name was not confirmed here.",
   "bulkSnippet": {
    "lang": "python",
    "code": "# Pattern from Atlan docs: one API call for many assets\nassets = []\nfor q, n in rows:\n    a = Table.updater(qualified_name=q, name=n)\n    # set attributes to change here (docs example sets certificate status)\n    assets.append(a)\nclient.asset.save(assets)",
    "u": "https://docs.atlan.com/product/capabilities/build-apps/sdks/python/how-tos/bulk-updates/update-multiple-assets"
   },
   "sources": [
    {
     "t": "Implement Atlan MCP Server",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/implement-the-atlan-mcp-server"
    },
    {
     "t": "What is Atlan AI",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/concepts/what-is-atlan-ai"
    },
    {
     "t": "Context Engineering Studio (Private Preview)",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio"
    },
    {
     "t": "Understand context agents",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-agents-studio/concepts/agents"
    },
    {
     "t": "Bulk enrich metadata with spreadsheets",
     "u": "https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/bulk-enrich-metadata"
    },
    {
     "t": "Batch: update multiple assets at once",
     "u": "https://docs.atlan.com/product/capabilities/build-apps/sdks/python/how-tos/bulk-updates/update-multiple-assets"
    },
    {
     "t": "SQL dump lineage support",
     "u": "https://docs.atlan.com/product/capabilities/lineage/faq/sql-dump-lineage-support"
    },
    {
     "t": "Atlan MCP",
     "u": "https://atlan.com/mcp/"
    },
    {
     "t": "Automated PII classification (Atlan)",
     "u": "https://atlan.com/know/data-governance/automated-pii-classification/"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": []
  },
  {
   "id": "collibra",
   "name": "Collibra",
   "category": "catalog",
   "tagline": "Data governance catalog with AI descriptions, lineage and an MCP server.",
   "verdict": "partial",
   "verdictNote": "Collibra offers glossary, lineage, classification and MCP, but no metric or join objects, and its Copilot is in preview.",
   "artifacts": [
    {
     "name": "Collibra MCP server",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP; product page calls it production-ready; local open-source version is community supported",
     "url": "https://www.collibra.com/products/mcp-server"
    },
    {
     "name": "Collibra AI for asset descriptions",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "UI; cloud only; suggestions never saved automatically",
     "url": "https://docs.collibra.com/Content/CollibraAI/to_auto-descr.htm"
    },
    {
     "name": "Collibra AI Copilot",
     "kind": "agent",
     "status": "Preview",
     "since": "",
     "format": "UI chat to find data; not on Government or Self-Hosted",
     "url": "https://docs.collibra.com/Content/CollibraAI/co_cai-co-pilot.htm"
    },
    {
     "name": "Unified Data Classification",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "UI and REST APIs",
     "url": "https://docs.collibra.com/Content/Catalog/DataClassification/co_about-data-classification.htm"
    },
    {
     "name": "Collibra Data Lineage",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "Cloud only; technical lineage with column assets",
     "url": "https://productresources.collibra.com/docs/collibra/latest/Content/to_data-lineage.htm"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No governed metric object found in sources reviewed.",
     "u": ""
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects found.",
     "u": ""
    },
    "relationships": {
     "l": 1,
     "n": "Asset relations and lineage exist. No declared join paths for AI found.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/to_data-lineage.htm"
    },
    "synonyms": {
     "l": 3,
     "n": "Business glossary and asset descriptions are read by agents. Copilot discovery tools need Copilot preview enabled.",
     "u": "https://marketplace.collibra.com/listings/collibra-mcp-server-local-version/"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-to-SQL pair feature found.",
     "u": ""
    },
    "nl2sql": {
     "l": 0,
     "n": "Copilot helps find data. Docs seen do not describe SQL generation.",
     "u": "https://docs.collibra.com/Content/CollibraAI/co_cai-co-pilot.htm"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology or class model found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No graph query capability found. Lineage is viewed in the UI.",
     "u": ""
    },
    "vector": {
     "l": 0,
     "n": "No native vector search confirmed.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Product page calls the server production-ready. Local version is open source and community supported; some tools use Collibra Units.",
     "u": "https://www.collibra.com/products/mcp-server"
    },
    "governance": {
     "l": 3,
     "n": "Data classification, lineage and governance workflows are core catalog features.",
     "u": "https://docs.collibra.com/Content/Catalog/DataClassification/co_about-data-classification.htm"
    },
    "openStandard": {
     "l": 0,
     "n": "No open semantic spec found. Local MCP server is open source (chip on GitHub).",
     "u": "https://pkg.go.dev/github.com/collibra/chip"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Drafts descriptions for Column, Table, View and Data Set; a Table can draft all columns. Limit 20 requests per minute.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/ta_auto-desc.htm"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Import API v2 takes JSON, CSV and Excel jobs for assets and relations. Bulk import of column classifications has no native path.",
     "u": "https://developer.collibra.com/api/rest/import-api"
    },
    "autoClassify": {
     "l": 3,
     "n": "Automatic classification analyzes a subset of structured data and suggests a data class.",
     "u": "https://docs.collibra.com/Content/Catalog/DataClassification/co_about-data-classification.htm"
    },
    "sampleValues": {
     "l": 1,
     "n": "Sample data is cached on Edge for permitted users. No NL-to-SQL value matching found.",
     "u": "https://docs.collibra.com/Content/Catalog/SampleData/co_sample-data.htm"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for suggestions found in sources reviewed.",
     "u": ""
    },
    "lineage": {
     "l": 3,
     "n": "Cloud-only Collibra Data Lineage shows technical lineage including column assets. Custom lineage by JSON.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/to_data-lineage.htm"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found.",
     "u": ""
    }
   },
   "offers": [
    "AI-drafted descriptions for tables and all their columns.",
    "Glossary and asset metadata served over an MCP server.",
    "Automatic data classification of structured data.",
    "Import API v2 for bulk asset edits by CSV or Excel.",
    "Technical lineage with column assets."
   ],
   "gaps": [
    "No metric, dimension or join objects found.",
    "Copilot is in preview and cloud only.",
    "AI descriptions are suggestions; existing ones must be removed first.",
    "No confirmed text-to-SQL or eval tooling."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Treat Collibra as the governed glossary and lineage source. Feed it to your SQL agent through the Collibra MCP server. Keep metrics and joins in a separate semantic layer.",
   "snippet": {
    "lang": "other",
    "title": "Import API v2 job endpoints (names only, from search results)",
    "code": "# POST /import/json-job\n# POST /import/csv-job\n# POST /import/excel-job\n# Each job needs a file id from a prior file upload.",
    "u": "https://developer.collibra.com/api/rest/import-api"
   },
   "enrichHowTo": "Use Collibra AI for asset descriptions on a Table to draft all column descriptions, then accept each. For bulk writes, send a CSV job to the Import API v2 /import/csv-job endpoint. Mind the 20 requests per minute AI limit.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "# Collibra Import API v2 (endpoints from docs, payload not verified)\n# 1) upload the file, get a file id\n# 2) start the job:\n#    POST /import/csv-job  (file id plus the file)",
    "u": "https://developer.collibra.com/api/rest/import-api"
   },
   "sources": [
    {
     "t": "Collibra MCP server",
     "u": "https://www.collibra.com/products/mcp-server"
    },
    {
     "t": "Collibra MCP server local version (Marketplace)",
     "u": "https://marketplace.collibra.com/listings/collibra-mcp-server-local-version/"
    },
    {
     "t": "Collibra chip on pkg.go.dev",
     "u": "https://pkg.go.dev/github.com/collibra/chip"
    },
    {
     "t": "Collibra AI for asset descriptions",
     "u": "https://docs.collibra.com/Content/CollibraAI/to_auto-descr.htm"
    },
    {
     "t": "Create a description for one asset with Collibra AI",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/ta_auto-desc.htm"
    },
    {
     "t": "About Collibra AI Copilot (in preview)",
     "u": "https://docs.collibra.com/Content/CollibraAI/co_cai-co-pilot.htm"
    },
    {
     "t": "About Data Classification",
     "u": "https://docs.collibra.com/Content/Catalog/DataClassification/co_about-data-classification.htm"
    },
    {
     "t": "Working with the Import API v2",
     "u": "https://developer.collibra.com/api/rest/import-api"
    },
    {
     "t": "About sample data",
     "u": "https://docs.collibra.com/Content/Catalog/SampleData/co_sample-data.htm"
    },
    {
     "t": "About Collibra Data Lineage",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/to_data-lineage.htm"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": []
  },
  {
   "id": "datahub",
   "name": "DataHub",
   "category": "catalog",
   "tagline": "Open-source metadata platform; DataHub Cloud adds Ask DataHub and AI documentation.",
   "verdict": "partial",
   "verdictNote": "DataHub gives an open MCP server, lineage and glossary, but no metric or join objects; its AI features are Cloud only.",
   "artifacts": [
    {
     "name": "DataHub MCP server (open source)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP; Apache-2.0; read tools plus opt-in mutation tools. No maturity label on the repo page",
     "url": "https://github.com/acryldata/mcp-server-datahub"
    },
    {
     "name": "Managed MCP server (DataHub Cloud)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "Cloud v0.3.12 or later per search snippet",
     "url": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    {
     "name": "Ask DataHub",
     "kind": "agent",
     "status": "Unverified",
     "since": "",
     "format": "DataHub Cloud only; chat in UI, Slack, Teams",
     "url": "https://datahub.com/blog/ask-datahub/"
    },
    {
     "name": "AI documentation generation",
     "kind": "annotations",
     "status": "Unverified",
     "since": "",
     "format": "DataHub Cloud. Current docs say closed beta; 1.6.0 archive says GA in Cloud v0.3.17",
     "url": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    {
     "name": "AI glossary term suggestion",
     "kind": "annotations",
     "status": "Preview",
     "since": "",
     "format": "DataHub Cloud; closed beta per 1.5.0 docs",
     "url": "https://archive.docs.datahub.com/docs/1.5.0/automations/ai-term-suggestion"
    },
    {
     "name": "Context Documents",
     "kind": "glossary",
     "status": "Unverified",
     "since": "",
     "format": "DataHub Cloud; runbooks and FAQs that Ask DataHub searches",
     "url": "https://docs.datahub.com/docs/features/feature-guides/context/context-documents"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No governed metric object found in sources reviewed.",
     "u": ""
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects found.",
     "u": ""
    },
    "relationships": {
     "l": 1,
     "n": "Lineage and entity links exist. No declared join paths for AI found.",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    "synonyms": {
     "l": 3,
     "n": "Descriptions, glossary terms, domains and structured properties are returned by MCP tools.",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    "verifiedQueries": {
     "l": 1,
     "n": "MCP get_dataset_queries returns real queries on a dataset as context. No curated question-SQL pairs.",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    "nl2sql": {
     "l": 2,
     "n": "Ask DataHub is Cloud only. Vendor page says it uses glossary, lineage, sample rows and past queries. Status unverified.",
     "u": "https://datahub.com/blog/ask-datahub/"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology model found. Glossary and domains only.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No user graph query language found. Lineage via GraphQL and SDK.",
     "u": "https://docs.datahub.com/docs/api/tutorials/lineage"
    },
    "vector": {
     "l": 0,
     "n": "No native vector search confirmed.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Open-source server for Core, managed server on Cloud. Read tools by default; writes need TOOLS_IS_MUTATION_ENABLED=true.",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    "governance": {
     "l": 3,
     "n": "Tags, terms, owners, domains and lineage are metadata aspects exposed over MCP.",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    "openStandard": {
     "l": 3,
     "n": "DataHub Core and the MCP server are open source (MCP server is Apache-2.0).",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    "aiDescriptions": {
     "l": 2,
     "n": "Cloud Generate button uses name, columns, sample values and lineage. Status conflicts: closed beta in current docs, GA in 1.6.0 docs.",
     "u": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "MCP mutation tools update descriptions, tags, terms, owners; Python SDK and emitters write aspects. Limits not checked.",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    "autoClassify": {
     "l": 3,
     "n": "Opt-in PII detection at ingestion proposes glossary terms by confidence score. Source is a DataHub blog.",
     "u": "https://datahub.com/?p=2693"
    },
    "sampleValues": {
     "l": 2,
     "n": "Vendor page says Ask DataHub uses sample rows; AI docs use sample values. Not confirmed in docs for NL-to-SQL.",
     "u": "https://datahub.com/blog/ask-datahub/"
    },
    "queryHistory": {
     "l": 3,
     "n": "get_dataset_queries returns real SQL for a dataset or column; search sorts by usage. No automatic join or metric suggestions.",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    "lineage": {
     "l": 3,
     "n": "Lineage tool with hop control and column paths; Python SDK adds column lineage.",
     "u": "https://docs.datahub.com/docs/api/tutorials/lineage"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found. Cloud v2.2.0 has Agents in private beta.",
     "u": "https://docs.datahub.com/docs/managed-datahub/release-notes/v_2_2_0"
    }
   },
   "offers": [
    "Open-source MCP server with search, lineage and dataset query tools.",
    "Opt-in MCP write tools for descriptions, tags, terms and owners.",
    "Cloud AI documentation using lineage and sample values.",
    "PII detection at ingestion that proposes glossary terms.",
    "Ask DataHub chat over metadata and context documents (Cloud)."
   ],
   "gaps": [
    "No metric, dimension or join objects found.",
    "AI documentation status conflicts between doc versions.",
    "Ask DataHub and AI docs are Cloud only.",
    "No eval tooling found."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Run the DataHub MCP server next to your SQL agent so it can read descriptions, lineage and past queries. Keep metrics and joins in a semantic layer. Use Cloud for Ask DataHub if you want a hosted chat.",
   "snippet": {
    "lang": "bash",
    "title": "Run the DataHub MCP server with writes enabled (names from the repo page)",
    "code": "export TOOLS_IS_MUTATION_ENABLED=true\n# plus your GMS URL and token variables per the README\nuvx mcp-server-datahub\n# Mutation tools include update_description (update, append, remove)",
    "u": "https://github.com/acryldata/mcp-server-datahub"
   },
   "enrichHowTo": "On Cloud, click Generate on a table or column; admins can add custom instructions under Settings > AI. For scripted writes, enable the MCP mutation tools and call update_description. Status of AI generation is unverified.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "# Mutation tools are off by default\nexport TOOLS_IS_MUTATION_ENABLED=true\nuvx mcp-server-datahub\n# then call the update_description tool from your MCP client",
    "u": "https://github.com/acryldata/mcp-server-datahub"
   },
   "sources": [
    {
     "t": "mcp-server-datahub (GitHub)",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    },
    {
     "t": "DataHub MCP Server docs",
     "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    {
     "t": "AI docs automation",
     "u": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    {
     "t": "AI docs (1.6.0 archive)",
     "u": "https://archive.docs.datahub.com/docs/1.6.0/automations/ai-docs"
    },
    {
     "t": "AI term suggestion (1.5.0 archive)",
     "u": "https://archive.docs.datahub.com/docs/1.5.0/automations/ai-term-suggestion"
    },
    {
     "t": "Context documents",
     "u": "https://docs.datahub.com/docs/features/feature-guides/context/context-documents"
    },
    {
     "t": "Ask DataHub",
     "u": "https://datahub.com/blog/ask-datahub/"
    },
    {
     "t": "DataHub Cloud v2.2.0 release notes",
     "u": "https://docs.datahub.com/docs/managed-datahub/release-notes/v_2_2_0"
    },
    {
     "t": "Data Lineage tutorial",
     "u": "https://docs.datahub.com/docs/api/tutorials/lineage"
    },
    {
     "t": "PII Classification just got easier with DataHub",
     "u": "https://datahub.com/?p=2693"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": []
  },
  {
   "id": "openmetadata",
   "name": "OpenMetadata (and Collate)",
   "category": "catalog",
   "tagline": "Open-source metadata platform; Collate is the managed product with AI agents.",
   "verdict": "partial",
   "verdictNote": "OpenMetadata has an MCP server, lineage and auto classification, but no join or dimension objects; description AI is Collate only.",
   "artifacts": [
    {
     "name": "OpenMetadata MCP server",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "JSON-RPC at POST {OMURL}/mcp; bot JWT; in 1.12, 1.13, 2.0 docs",
     "url": "https://docs.open-metadata.org/v1.13.x/sdk/ai-sdk"
    },
    {
     "name": "Metadata AI SDK (Python, TypeScript, Java)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "SDK wrapping the MCP tools; packages data-ai-sdk and @openmetadata/ai-sdk",
     "url": "https://docs.open-metadata.org/v1.13.x/sdk/ai-sdk"
    },
    {
     "name": "Collate Documentation Agent",
     "kind": "agent",
     "status": "Unverified",
     "since": "",
     "format": "Collate; writes or suggests descriptions; user approves",
     "url": "https://docs.getcollate.io/collate-ai/documentation-agent.md"
    },
    {
     "name": "Collate AI Studio (custom agents and prompts)",
     "kind": "agent",
     "status": "Preview",
     "since": "2026",
     "format": "Collate; release notes label it Beta in 1.12",
     "url": "https://docs.getcollate.io/collateai"
    },
    {
     "name": "Collate AutoPilot agents",
     "kind": "agent",
     "status": "Unverified",
     "since": "",
     "format": "Collate 1.7 per vendor blog; onboarding and operations agents",
     "url": "https://www.getcollate.io/blog/announcing-collate-17"
    },
    {
     "name": "Auto Classification agent",
     "kind": "annotations",
     "status": "Unverified",
     "since": "",
     "format": "OpenMetadata and Collate; PII tags",
     "url": "https://docs.getcollate.io/how-to-guides/data-governance/classification/auto-classification"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "A metric entity exists; MCP has a create-metric tool. It is a catalog object, not a query engine.",
     "u": "https://docs.open-metadata.org/latest/releases/all-releases"
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects found.",
     "u": ""
    },
    "relationships": {
     "l": 1,
     "n": "Lineage and entity links exist. No declared join paths for AI found.",
     "u": "https://docs.open-metadata.org/v1.12.x/developers/contribute/codebase-deep-dives/lineage-ingestion"
    },
    "synonyms": {
     "l": 3,
     "n": "Descriptions, tags and glossary terms are returned by MCP search and entity tools.",
     "u": "https://docs.open-metadata.org/v1.13.x/sdk/ai-sdk"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-to-SQL pair feature found.",
     "u": ""
    },
    "nl2sql": {
     "l": 1,
     "n": "Collate AI Studio lets you build agents; a first-party text-to-SQL agent was not confirmed.",
     "u": "https://docs.getcollate.io/collateai"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology model found. Glossary and classifications only.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "No user graph query language found.",
     "u": ""
    },
    "vector": {
     "l": 3,
     "n": "MCP lists a semantic_search tool and search returns similarityScore. Setup needs were not checked.",
     "u": "https://docs.open-metadata.org/latest/releases/all-releases"
    },
    "mcp": {
     "l": 3,
     "n": "Built-in MCP server with read and write tools. Collate announced MCP in July 2025.",
     "u": "https://www.getcollate.io/blog/introducing-the-model-context-protocol-mcp-in-collate"
    },
    "governance": {
     "l": 3,
     "n": "Tags, owners, glossary, classification and lineage are entities exposed over MCP.",
     "u": "https://docs.open-metadata.org/v1.13.x/sdk/ai-sdk"
    },
    "openStandard": {
     "l": 3,
     "n": "OpenMetadata is open source; metadata is available through REST, SDKs and MCP.",
     "u": "https://docs.open-metadata.org/v1.13.x/sdk/ai-sdk"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Collate Documentation Agent scans schemas and writes or suggests descriptions. Collate only; no open-source equivalent found.",
     "u": "https://docs.getcollate.io/collate-ai/documentation-agent.md"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "MCP patch_entity updates description, tags and owners; glossary CSV import. Table CSV import not confirmed.",
     "u": "https://docs.open-metadata.org/latest/how-to-guides/data-governance/glossary/import"
    },
    "autoClassify": {
     "l": 3,
     "n": "Auto classification uses column-name rules and optional sample-data recognition with a confidence threshold, default 80.",
     "u": "https://docs.getcollate.io/how-to-guides/data-governance/classification/auto-classification"
    },
    "sampleValues": {
     "l": 1,
     "n": "Sample data feeds classification. No NL-to-SQL value matching found.",
     "u": "https://docs.getcollate.io/how-to-guides/data-governance/classification/auto-classification"
    },
    "queryHistory": {
     "l": 1,
     "n": "Query logs feed lineage and usage ingestion. No join or metric suggestions found.",
     "u": "https://docs.open-metadata.org/v1.12.x/developers/contribute/codebase-deep-dives/lineage-ingestion"
    },
    "lineage": {
     "l": 3,
     "n": "Column-level lineage from SQL query logs, views and stored procedures. Edge detail shows SQL.",
     "u": "https://docs.open-metadata.org/v1.12.x/developers/contribute/codebase-deep-dives/lineage-ingestion"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found.",
     "u": ""
    }
   },
   "offers": [
    "MCP server with search, entity, lineage and patch tools.",
    "Metadata AI SDK for Python, TypeScript and Java.",
    "Collate Documentation Agent for descriptions.",
    "Auto classification of PII with confidence threshold.",
    "Column-level lineage from query logs."
   ],
   "gaps": [
    "No dimension or join objects found.",
    "Description AI and AI Studio are Collate only; AI Studio is Beta.",
    "MCP write tools need care; filter to read-only for agents.",
    "No eval tooling found."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Connect your SQL agent to the OpenMetadata MCP server for descriptions, glossary and lineage. Use tool filtering to keep it read-only. Keep metrics and joins in a semantic layer.",
   "snippet": {
    "lang": "json",
    "title": "List MCP tools (JSON-RPC at POST {OMURL}/mcp, bearer JWT)",
    "code": "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/list\"}",
    "u": "https://docs.open-metadata.org/v1.13.x/sdk/ai-sdk"
   },
   "enrichHowTo": "On Collate, run the Documentation Agent and approve its suggestions. On open source, call the MCP patch_entity tool to update descriptions, tags and owners. Glossary terms can be bulk loaded by CSV import.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "# Authorization: Bearer <bot JWT from Settings > Bots>\ncurl -X POST \"$OMURL/mcp\" \\\n  -H \"Authorization: Bearer $JWT\" -H \"Content-Type: application/json\" \\\n  -d '{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/list\"}'\n# patch_entity updates description, tags, owners (arguments not verified)",
    "u": "https://docs.open-metadata.org/v1.13.x/sdk/ai-sdk"
   },
   "sources": [
    {
     "t": "OpenMetadata AI SDK (1.13)",
     "u": "https://docs.open-metadata.org/v1.13.x/sdk/ai-sdk"
    },
    {
     "t": "OpenMetadata all releases",
     "u": "https://docs.open-metadata.org/latest/releases/all-releases"
    },
    {
     "t": "Glossary import",
     "u": "https://docs.open-metadata.org/latest/how-to-guides/data-governance/glossary/import"
    },
    {
     "t": "Lineage ingestion (1.12)",
     "u": "https://docs.open-metadata.org/v1.12.x/developers/contribute/codebase-deep-dives/lineage-ingestion"
    },
    {
     "t": "Collate Documentation Agent",
     "u": "https://docs.getcollate.io/collate-ai/documentation-agent.md"
    },
    {
     "t": "Collate AI",
     "u": "https://docs.getcollate.io/collateai"
    },
    {
     "t": "Collate auto classification",
     "u": "https://docs.getcollate.io/how-to-guides/data-governance/classification/auto-classification"
    },
    {
     "t": "Announcing Collate 1.7",
     "u": "https://www.getcollate.io/blog/announcing-collate-17"
    },
    {
     "t": "Introducing MCP in Collate",
     "u": "https://www.getcollate.io/blog/introducing-the-model-context-protocol-mcp-in-collate"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": []
  },
  {
   "id": "dataworld",
   "name": "data.world (ServiceNow)",
   "category": "knowledge-graph",
   "tagline": "Knowledge-graph-based data catalog and governance platform, owned by ServiceNow since July 2025.",
   "verdict": "partial",
   "verdictNote": "The catalog graph supplies glossary, lineage, and metadata context to AI, but it has no governed metric layer and no warehouse query execution.",
   "worksWith": [
    "snowflake",
    "databricks"
   ],
   "artifacts": [
    {
     "name": "data.world Enterprise data catalog (knowledge graph)",
     "kind": "knowledge-graph",
     "status": "GA",
     "since": "",
     "format": "SaaS catalog",
     "url": "https://data.world/product/"
    },
    {
     "name": "Business glossary",
     "kind": "glossary",
     "status": "GA",
     "since": "",
     "format": "Catalog feature (docs navigation)",
     "url": "https://docs.data.world/"
    },
    {
     "name": "Archie AI Assistant (Archie Chat, Archie Enrich)",
     "kind": "agent",
     "status": "Preview",
     "since": "",
     "format": "Public Preview for Enterprise customers; SQL generation is beta",
     "url": "https://docs.data.world/en/160498-using-archie.html"
    },
    {
     "name": "data.world MCP server for AI assistants",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "Hosted MCP server; no status label in docs",
     "url": "https://docs.data.world/en/413220-data-world-mcp-server-for-ai-assistants.html"
    },
    {
     "name": "SQL and SPARQL queries over the catalog graph",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "SPARQL, SQL",
     "url": "https://docs.data.world/en/114326-sql,-sparql,-and-markdown.html"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No governed business-metric objects found in docs read. Teams use a warehouse semantic layer for metrics.",
     "u": ""
    },
    "dimensions": {
     "l": 0,
     "n": "None found in docs read.",
     "u": ""
    },
    "relationships": {
     "l": 3,
     "n": "The catalog graph stores asset relationships and lineage; docs describe custom relationship types in Eureka Explorer.",
     "u": "https://docs.data.world/"
    },
    "synonyms": {
     "l": 3,
     "n": "Business glossary and metadata enrichment give assets descriptions an AI can read; Archie enrichment is Public Preview.",
     "u": "https://docs.data.world/en/160498-using-archie.html"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "None found in docs read.",
     "u": ""
    },
    "nl2sql": {
     "l": 2,
     "n": "Archie chat is Public Preview for Enterprise customers; SQL generation is a beta feature of Archie.",
     "u": "https://docs.data.world/en/160498-using-archie.html"
    },
    "ontology": {
     "l": 1,
     "n": "Catalog graph is the model; no domain ontology authoring found in docs read.",
     "u": ""
    },
    "graph": {
     "l": 3,
     "n": "Docs describe querying the catalog graph with SQL and SPARQL (only navigation titles were readable).",
     "u": "https://docs.data.world/en/114326-sql,-sparql,-and-markdown.html"
    },
    "vector": {
     "l": 0,
     "n": "Not confirmed. A June 2025 blog title mentions semantic search, but the body was unavailable.",
     "u": ""
    },
    "mcp": {
     "l": 2,
     "n": "Hosted data.world MCP server reads and writes catalog content; docs show no GA label, so counted as Preview-level.",
     "u": "https://docs.data.world/en/413220-data-world-mcp-server-for-ai-assistants.html"
    },
    "governance": {
     "l": 3,
     "n": "The MCP server respects existing data.world permissions. Governance automations, lineage, and glossary are core catalog features.",
     "u": "https://docs.data.world/en/413220-data-world-mcp-server-for-ai-assistants.html"
    },
    "openStandard": {
     "l": 1,
     "n": "SPARQL access to the catalog graph; MCP is an open standard. Not named in OSI partner lists read.",
     "u": "https://ossie.apache.org/updates/"
    },
    "aiDescriptions": {
     "l": 2,
     "n": "Archie Enrich drafts descriptions for tables, columns, glossary terms and collections. Public Preview, Enterprise only.",
     "u": "https://docs.data.world/en/160498-using-archie.html"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "REST bulk endpoints update up to 25 catalog resources per call. Excel bulk upload and MCP updates also exist.",
     "u": "https://developer.data.world/reference/bulkupdate-1.md"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic classification or PII tagging found in the catalog and governance pages reviewed.",
     "u": "https://data.world/product/catalog"
    },
    "sampleValues": {
     "l": 0,
     "n": "No value sampling found. Archie SQL generation is a beta feature.",
     "u": "https://docs.data.world/en/329793-archie-beta-features.html"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining found in the docs reviewed.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "Collectors build lineage from supported systems; manual relationships fill gaps. Column-level lineage not confirmed in docs reviewed.",
     "u": "https://docs.data.world/en/360706-creating-custom-relationships-for-lineage-in-eureka-explorer--ctk-.html"
    },
    "evals": {
     "l": 0,
     "n": "No customer eval tooling found. The vendor tests Archie with in-app feedback and its own benchmark metadata.",
     "u": "https://docs.data.world/en/277381-archie-faq.html"
    }
   },
   "offers": [
    "Catalog built on a knowledge graph; vendor claims answers 4.2x more accurate than a traditional catalog (marketing figure).",
    "Business glossary, governance automations, lineage, and a marketplace appear in the docs navigation.",
    "Hosted MCP server lets Claude, Cursor, and VS Code Copilot search and update the catalog under your permissions.",
    "Archie assistant (Public Preview) chats over catalog metadata and enriches assets; SQL generation is beta.",
    "Integrations listed on the product page include Snowflake, Databricks, dbt, Power BI, Tableau, and Looker."
   ],
   "gaps": [
    "No metric, dimension, or verified-query objects found; the catalog describes data but does not define KPIs.",
    "Archie is Public Preview, SQL generation is beta, and the MCP server shows no GA label.",
    "An 'AI Context Engine' name was not found in docs, product pages, or ServiceNow filings read; treat as unverified.",
    "Public docs seen give little syntax for catalog graph queries or MCP tool lists."
   ],
   "fillWith": [
    "Snowflake semantic views",
    "dbt Semantic Layer",
    "Databricks metric views"
   ],
   "nl2sqlPath": "Use data.world as the business context source: glossary terms, lineage, and asset metadata that an agent reads through the hosted MCP server. Run NL-to-SQL and governed metrics on the warehouse semantic layer. Treat Archie SQL generation as beta.",
   "snippet": null,
   "sources": [
    {
     "t": "data.world home",
     "u": "https://data.world/"
    },
    {
     "t": "data.world product page",
     "u": "https://data.world/product/"
    },
    {
     "t": "data.world docs home",
     "u": "https://docs.data.world/"
    },
    {
     "t": "data.world docs: MCP server for AI assistants",
     "u": "https://docs.data.world/en/413220-data-world-mcp-server-for-ai-assistants.html"
    },
    {
     "t": "data.world docs: Using Archie AI Assistant",
     "u": "https://docs.data.world/en/160498-using-archie.html"
    },
    {
     "t": "data.world docs: SQL, SPARQL, and Markdown",
     "u": "https://docs.data.world/en/114326-sql,-sparql,-and-markdown.html"
    },
    {
     "t": "data.world page on Enterprise continuity and Open Data Community retirement",
     "u": "https://data.world/ai-context-engine/"
    },
    {
     "t": "ServiceNow Form 10-Q, quarter ended Sep 30, 2025 (acquisition completed July 2025)",
     "u": "https://www.sec.gov/Archives/edgar/data/1373715/000137371525000309/now-20250930.htm"
    },
    {
     "t": "NowBen: ServiceNow acquires data.world (May 9, 2025)",
     "u": "https://nowben.com/servicenow-acquires-data-world-just-months-after-logik-ai-and-moveworks-purchases/"
    },
    {
     "t": "data.world GitHub organization (cwd-benchmark-data)",
     "u": "https://github.com/datadotworld"
    },
    {
     "t": "Enriching catalog resources with Archie",
     "u": "https://docs.data.world/en/160499-enriching-catalog-resources-with-archie.html"
    },
    {
     "t": "Enriching catalog resources in bulk using Archie",
     "u": "https://docs.data.world/en/317108-adding-descriptions-in-bulk-to-collection-resources.html"
    },
    {
     "t": "Archie beta features",
     "u": "https://docs.data.world/en/329793-archie-beta-features.html"
    },
    {
     "t": "Archie FAQ",
     "u": "https://docs.data.world/en/277381-archie-faq.html"
    },
    {
     "t": "Bulk uploading collections (CTK)",
     "u": "https://docs.data.world/en/292299-bulk-uploading-collections--ctk-.html"
    },
    {
     "t": "Custom relationships for lineage (CTK)",
     "u": "https://docs.data.world/en/360706-creating-custom-relationships-for-lineage-in-eureka-explorer--ctk-.html"
    },
    {
     "t": "data.world developer docs",
     "u": "https://developer.data.world"
    },
    {
     "t": "Bulk update catalog resources (API)",
     "u": "https://developer.data.world/reference/bulkupdate-1.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Use Archie Enrich to draft descriptions, up to 50 at a time per collection, then review each item marked [Archie suggestion]. For scripted writes, call PATCH /v0/metadata/resources/bulk/{owner}, which updates up to 25 resources per call. Archie needs an Enterprise plan and activation through your Customer Success Director.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "# placeholders: OWNER, resource IRI, description property IRI\ncurl -X PATCH \"https://api.data.world/v0/metadata/resources/bulk/OWNER?updateListBy=ADD\" \\\n  -H \"Authorization: Bearer $DW_TOKEN\" -H \"Content-Type: application/json\" \\\n  -d '{\"resources\":{\"<resource-iri>\":{\"properties\":{\"<description-property-iri>\":\"Updated quarterly sales dataset\"}}}}'",
    "u": "https://developer.data.world/reference/bulkupdate-1.md"
   }
  },
  {
   "id": "neo4j",
   "name": "Neo4j",
   "category": "knowledge-graph",
   "tagline": "Native graph database with GraphRAG libraries, Aura Agent, and MCP servers.",
   "verdict": "partial",
   "verdictNote": "Neo4j gives a graph model, Cypher, vector search, and agents, but no governed metric or dimension objects over warehouse tables.",
   "worksWith": [
    "snowflake",
    "databricks",
    "bigquery",
    "redshift",
    "fabric"
   ],
   "artifacts": [
    {
     "name": "Aura Agent",
     "kind": "agent",
     "status": "GA",
     "since": "2026-02",
     "format": "GUI, REST, MCP",
     "url": "https://neo4j.com/blog/agentic-ai/neo4j-launches-aura-agent/"
    },
    {
     "name": "Neo4j MCP Server (official)",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-12",
     "format": "MCP server (binary, pip, Homebrew)",
     "url": "https://github.com/neo4j/mcp"
    },
    {
     "name": "mcp-neo4j servers (Neo4j Labs: cypher, memory, aura-api, data-modeling)",
     "kind": "mcp",
     "status": "Preview",
     "since": "",
     "format": "MCP servers, MIT, no SLA",
     "url": "https://github.com/neo4j-contrib/mcp-neo4j"
    },
    {
     "name": "neo4j-graphrag (Python): retrievers incl. Text2CypherRetriever, KG builder",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "Python library",
     "url": "https://neo4j.com/docs/neo4j-graphrag-python/current/"
    },
    {
     "name": "Neo4j Virtual Graph (Cypher over Snowflake in place)",
     "kind": "graph-query",
     "status": "Preview",
     "since": "2026-06",
     "format": "GUI mapping, Cypher",
     "url": "https://neo4j.com/blog/developer/zero-copy-graph-reasoning-on-snowflake-getting-started-with-neo4j-virtual-graph/"
    },
    {
     "name": "Neo4j Graph Analytics for Snowflake",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "SQL (Snowpark Container Services, Snowflake Marketplace)",
     "url": "https://neo4j.com/cloud/snowflake/"
    },
    {
     "name": "Neo4j Agent for Snowflake Intelligence",
     "kind": "agent",
     "status": "Preview",
     "since": "2026-03",
     "format": "Snowflake Marketplace listing (public preview)",
     "url": "https://neo4j.com/blog/developer/neo4j-and-the-data-ecosystem/"
    },
    {
     "name": "Neo4j Context Engine (business ontology for agents)",
     "kind": "ontology",
     "status": "Preview",
     "since": "2026-10",
     "format": "Graph model plus Context Studio UI (private preview)",
     "url": "https://neo4j.com/blog/news/neo4j-context-engine/"
    },
    {
     "name": "Neo4j Connector for Unity Catalog",
     "kind": "graph-query",
     "status": "Announced",
     "since": "",
     "format": "JDBC driver with SQL2Cypher; listed as coming soon to Labs",
     "url": "https://neo4j.com/blog/developer/neo4j-and-the-data-ecosystem/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No metric object type. Aggregates are written as Cypher; Aura Agent Cypher templates can pin a parameterized query.",
     "u": "https://neo4j.com/developer/genai-ecosystem/aura-agent/"
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects. Teams model categories as node labels or properties.",
     "u": ""
    },
    "relationships": {
     "l": 3,
     "n": "Relationships are first-class typed edges with properties. Virtual Graph maps foreign keys to relationships (Preview).",
     "u": "https://neo4j.com/blog/developer/zero-copy-graph-reasoning-on-snowflake-getting-started-with-neo4j-virtual-graph/"
    },
    "synonyms": {
     "l": 3,
     "n": "Aura Agent holds agent instructions and tool descriptions that the LLM reads. No synonym object type.",
     "u": "https://neo4j.com/blog/agentic-ai/neo4j-launches-aura-agent/"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Aura Agent Cypher templates are predefined, parameterized queries the agent calls as tools. They are not question-query pairs.",
     "u": "https://neo4j.com/developer/genai-ecosystem/aura-agent/"
    },
    "nl2sql": {
     "l": 3,
     "n": "Aura Agent Text2Cypher tool (GA Feb 2026) writes Cypher, not SQL. Neo4j's EAP guide calls it a fallback to templates.",
     "u": "https://neo4j.com/blog/genai/build-context-aware-graphrag-agent/"
    },
    "ontology": {
     "l": 2,
     "n": "Business ontology is in Neo4j Context Engine, private preview (Oct 2026). Graph schema works as an ontology by convention.",
     "u": "https://neo4j.com/blog/news/neo4j-context-engine/"
    },
    "graph": {
     "l": 3,
     "n": "Cypher property graph queries plus Graph Data Science algorithms. Cypher over Snowflake tables via Virtual Graph (Preview).",
     "u": "https://neo4j.com/docs/cypher-manual/current/introduction/cypher_overview/"
    },
    "vector": {
     "l": 3,
     "n": "Vector indexes and similarity search; the neo4j-graphrag library and Aura Agent both use them.",
     "u": "https://neo4j.com/docs/neo4j-graphrag-python/current/"
    },
    "mcp": {
     "l": 3,
     "n": "Official Neo4j MCP server (GA announced Dec 2025) and Aura Agent hosted MCP endpoints with OAuth.",
     "u": "https://github.com/neo4j/mcp"
    },
    "governance": {
     "l": 2,
     "n": "Virtual Graph runs queries under a read-only Snowflake user, so source RBAC applies (Preview). Context Engine adds governance (private preview).",
     "u": "https://neo4j.com/blog/developer/zero-copy-graph-reasoning-on-snowflake-getting-started-with-neo4j-virtual-graph/"
    },
    "openStandard": {
     "l": 1,
     "n": "No OSI listing found. Labs MCP servers are MIT licensed. Aura Agent exposes standard MCP and REST endpoints.",
     "u": "https://github.com/neo4j-contrib/mcp-neo4j"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No schema or column description generator found. KG Builder (Labs) suggests a schema from pasted text only.",
     "u": "https://neo4j.com/labs/genai-ecosystem/llm-graph-builder-features/"
    },
    "bulkMetadata": {
     "l": 0,
     "n": "No native schema comment or tag store found. Aura Agent tool descriptions are edited in a low-code UI.",
     "u": "https://neo4j.com/docs/aura/aura-agent/"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic classification of properties found in the docs reviewed.",
     "u": ""
    },
    "sampleValues": {
     "l": 1,
     "n": "No native feature. The langchain-neo4j package can scan the database for example values (enhanced_schema, default off).",
     "u": "https://raw.githubusercontent.com/langchain-ai/langchain-neo4j/main/libs/neo4j/langchain_neo4j/graphs/neo4j_graph.py"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for schema, examples or suggestions found in the docs reviewed.",
     "u": ""
    },
    "lineage": {
     "l": 1,
     "n": "No lineage feature. Neo4j pages show lineage as a graph modeling pattern that customers and partners build.",
     "u": "https://neo4j.com/use-cases/master-data-management/"
    },
    "evals": {
     "l": 3,
     "n": "Aura Agent evaluations: datasets of up to 50 questions, five metrics. Docs show no preview label; start date unknown.",
     "u": "https://neo4j.com/docs/aura/aura-agent/"
    }
   },
   "offers": [
    "Aura Agent builds an agent from the graph schema, with Cypher template, similarity search, and Text2Cypher tools (GA Feb 2026).",
    "Hosted MCP and REST endpoints for agents; MCP is read-only. Public agents bill per agent-hour from March 2026.",
    "Official MCP server tools: get-schema, read-cypher, write-cypher, list-gds-procedures. Read-only mode available; latest release v1.6.1 (Oct 2026).",
    "neo4j-graphrag Python library: vector retrieval, Text2CypherRetriever, and a knowledge graph builder pipeline (some parts experimental).",
    "Warehouse links: Graph Analytics for Snowflake (Marketplace), Spark connector for Databricks, Dataflow templates for BigQuery, Aura Data Importer.",
    "Virtual Graph (Preview, Jun 2026) translates Cypher to Snowflake SQL in place, with no copy; the translation is rule-based."
   ],
   "gaps": [
    "No metric, dimension, or time-grain objects, so governed KPIs stay in a warehouse semantic layer.",
    "Text2Cypher writes Cypher, not SQL. Warehouse data must be loaded, mapped through Virtual Graph (Preview), or queried separately.",
    "The Virtual Graph article covers Snowflake only. The Unity Catalog connector for Databricks is listed as coming soon to Labs.",
    "MCP read-only mode relies on EXPLAIN query classification. The README warns misclassified custom procedures may bypass it.",
    "Business ontology (Context Engine) is private preview. Neo4j is not named in OSI partner lists."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake semantic views",
    "Databricks metric views"
   ],
   "nl2sqlPath": "Keep NL-to-SQL on the warehouse semantic layer. Use Neo4j for multi-hop and relationship questions, with Cypher templates first and Text2Cypher as fallback. To reach warehouse data, import with Aura Data Importer or the Spark connector, or try Virtual Graph (Preview) for Snowflake.",
   "snippet": {
    "lang": "other",
    "title": "Cypher: property filter and relationship pattern (Cypher manual overview)",
    "code": "MATCH (movie:Movie)\nWHERE movie.rating > 7\nRETURN movie.title\n\nMATCH (actor:Actor)-[:ACTED_IN]->(movie:Movie {title: 'The Matrix'})\nRETURN actor.name",
    "u": "https://neo4j.com/docs/cypher-manual/current/introduction/cypher_overview/"
   },
   "sources": [
    {
     "t": "Neo4j Aura Agent enters general availability (Feb 3, 2026)",
     "u": "https://neo4j.com/blog/agentic-ai/neo4j-launches-aura-agent/"
    },
    {
     "t": "Aura Agent: create your own GraphRAG agent (Early Access, Oct 1, 2025)",
     "u": "https://neo4j.com/blog/genai/build-context-aware-graphrag-agent/"
    },
    {
     "t": "Aura Agent developer page",
     "u": "https://neo4j.com/developer/genai-ecosystem/aura-agent/"
    },
    {
     "t": "Aura Agent docs (MCP server option)",
     "u": "https://neo4j.com/docs/aura/aura-agent/"
    },
    {
     "t": "Official Neo4j MCP server repository",
     "u": "https://github.com/neo4j/mcp"
    },
    {
     "t": "Neo4j MCP releases (v1.6.1)",
     "u": "https://github.com/neo4j/mcp/releases"
    },
    {
     "t": "Neo4j MCP docs",
     "u": "https://neo4j.com/docs/mcp/current/"
    },
    {
     "t": "This Week in Neo4j, Dec 6, 2025 (MCP server GA)",
     "u": "https://community.neo4j.com/t/this-week-in-neo4j-mcp-deployment-vector-graphrag-and-more/76072"
    },
    {
     "t": "Neo4j Labs MCP servers repository",
     "u": "https://github.com/neo4j-contrib/mcp-neo4j"
    },
    {
     "t": "neo4j-graphrag for Python docs",
     "u": "https://neo4j.com/docs/neo4j-graphrag-python/current/"
    },
    {
     "t": "Effortless RAG with Text2CypherRetriever",
     "u": "https://neo4j.com/blog/developer/effortless-rag-text2cypherretriever/"
    },
    {
     "t": "Google Cloud and Neo4j Text2Cypher models (Apr 9, 2025)",
     "u": "https://neo4j.com/blog/news/text2cypher-vertex-ai/"
    },
    {
     "t": "Zero-copy graph reasoning on Snowflake: Virtual Graph (Jun 22, 2026)",
     "u": "https://neo4j.com/blog/developer/zero-copy-graph-reasoning-on-snowflake-getting-started-with-neo4j-virtual-graph/"
    },
    {
     "t": "Neo4j and the data ecosystem (Mar 12, 2026)",
     "u": "https://neo4j.com/blog/developer/neo4j-and-the-data-ecosystem/"
    },
    {
     "t": "Neo4j Graph Analytics for Snowflake",
     "u": "https://neo4j.com/cloud/snowflake/"
    },
    {
     "t": "Graph-grounded Copilots in Microsoft Fabric (Sep 23, 2026)",
     "u": "https://neo4j.com/blog/knowledge-graph/graph-grounded-copilot-recommendations-microsoft-fabric/"
    },
    {
     "t": "Neo4j Context Engine (Oct 19, 2026)",
     "u": "https://neo4j.com/blog/news/neo4j-context-engine/"
    },
    {
     "t": "Agentic GraphRAG (Oct 2026)",
     "u": "https://neo4j.com/blog/agentic-ai/agentic-graphrag/"
    },
    {
     "t": "Graphs, knowledge graphs, and context graphs (Sep 2026)",
     "u": "https://neo4j.com/blog/agentic-ai/context-graph-vs-knowledge-graph/"
    },
    {
     "t": "Cypher manual overview",
     "u": "https://neo4j.com/docs/cypher-manual/current/introduction/cypher_overview/"
    },
    {
     "t": "Neo4j LLM Knowledge Graph Builder (Labs)",
     "u": "https://neo4j.com/labs/genai-ecosystem/llm-graph-builder/"
    },
    {
     "t": "LLM Knowledge Graph Builder features",
     "u": "https://neo4j.com/labs/genai-ecosystem/llm-graph-builder-features/"
    },
    {
     "t": "neo4j-labs/llm-graph-builder (GitHub)",
     "u": "https://github.com/neo4j-labs/llm-graph-builder"
    },
    {
     "t": "neo4j-labs/text2cypher (GitHub)",
     "u": "https://github.com/neo4j-labs/text2cypher"
    },
    {
     "t": "neo4j/text2cypher-2025v1 (Hugging Face)",
     "u": "https://huggingface.co/datasets/neo4j/text2cypher-2025v1"
    },
    {
     "t": "neo4j-graphrag Python user guide",
     "u": "https://neo4j.com/docs/neo4j-graphrag-python/current/user_guide_rag.html"
    },
    {
     "t": "Neo4j use cases: Metadata Management",
     "u": "https://neo4j.com/use-cases/master-data-management/"
    }
   ],
   "verified": "2026-10-24",
   "logo": "neo4j",
   "enrichHowTo": "Neo4j has no table or column comment object, so there is no bulk description statement. Put business meaning in Aura Agent tool descriptions and in few-shot examples for Text2CypherRetriever. Build an Aura Agent evaluation dataset with expected answers to test changes.",
   "bulkSnippet": {
    "lang": "python",
    "code": "# Few-shot examples for Text2CypherRetriever (not a schema comment; Neo4j has none)\nexamples = [\n  \"USER INPUT: 'Which actors starred in the Matrix?' \"\n  \"QUERY: MATCH (p:Person)-[:ACTED_IN]->(m:Movie) WHERE m.title = 'The Matrix' RETURN p.name\"\n]\nretriever = Text2CypherRetriever(driver=driver, llm=llm,\n  neo4j_schema=neo4j_schema, examples=examples)",
    "u": "https://neo4j.com/docs/neo4j-graphrag-python/current/user_guide_rag.html"
   }
  },
  {
   "id": "palantir",
   "name": "Palantir Foundry and AIP",
   "category": "knowledge-graph",
   "tagline": "Data platform whose Ontology models objects, links, and actions above source data.",
   "verdict": "native",
   "verdictNote": "The Ontology is a native, permissioned object model that AIP agents and external agents use through tools; it is not a SQL metric layer.",
   "artifacts": [
    {
     "name": "Foundry Ontology (object types, properties, link types, interfaces)",
     "kind": "ontology",
     "status": "GA",
     "since": "",
     "format": "GUI (Ontology Manager) and API",
     "url": "https://www.palantir.com/docs/foundry/ontology/overview/"
    },
    {
     "name": "Action types",
     "kind": "ontology",
     "status": "GA",
     "since": "",
     "format": "GUI and API",
     "url": "https://www.palantir.com/docs/foundry/action-types/overview/"
    },
    {
     "name": "Functions (TypeScript and Python)",
     "kind": "ontology",
     "status": "GA",
     "since": "",
     "format": "Code",
     "url": "https://www.palantir.com/docs/foundry/functions/overview/"
    },
    {
     "name": "AIP Logic",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "No-code GUI",
     "url": "https://www.palantir.com/docs/foundry/logic/overview/"
    },
    {
     "name": "AIP Chatbot Studio (formerly AIP Agent Studio)",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://www.palantir.com/docs/foundry/agent-studio/overview/"
    },
    {
     "name": "Ontology MCP (Developer Console)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP tools generated from Ontology resources",
     "url": "https://www.palantir.com/docs/foundry/ontology-mcp/overview/"
    },
    {
     "name": "Ontology SDK (OSDK)",
     "kind": "ontology",
     "status": "GA",
     "since": "",
     "format": "TypeScript, Python, Java, OpenAPI",
     "url": "https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
    },
    {
     "name": "Virtual tables (Databricks, Snowflake, BigQuery, S3, ADLS, GCS)",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "Source connection plus table locator",
     "url": "https://www.palantir.com/docs/foundry/data-integration/virtual-tables/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "No governed metric object found in docs read. Business logic lives in Functions and applications.",
     "u": "https://www.palantir.com/docs/foundry/functions/overview/"
    },
    "dimensions": {
     "l": 1,
     "n": "Properties on object types describe attributes. No hierarchy or time-grain feature found in docs read.",
     "u": "https://www.palantir.com/docs/foundry/ontology/core-concepts/"
    },
    "relationships": {
     "l": 3,
     "n": "Link types define bidirectional relationships between object types; many-to-many links are backed by datasources.",
     "u": "https://www.palantir.com/docs/foundry/object-link-types/link-types-overview/"
    },
    "synonyms": {
     "l": 1,
     "n": "The Ontology adds metadata for fields. A synonym field, and prompt use of it, were not found in docs read.",
     "u": "https://www.palantir.com/docs/foundry/ontology/overview/"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-to-SQL pairs found. AIP Evals tests LLM-based functions and prompts instead.",
     "u": "https://www.palantir.com/docs/foundry/aip/aip-features/"
    },
    "nl2sql": {
     "l": 3,
     "n": "AIP Chatbot Studio and AIP Logic answer over Ontology objects through tools. This is not SQL generation.",
     "u": "https://www.palantir.com/docs/foundry/logic/overview/"
    },
    "ontology": {
     "l": 3,
     "n": "Object types, properties, link types, action types, functions, interfaces. Semantic and kinetic elements.",
     "u": "https://www.palantir.com/docs/foundry/ontology/overview/"
    },
    "graph": {
     "l": 0,
     "n": "Link traversal exists in object sets and Functions. No SQL/PGQ, GQL, Cypher, or SPARQL found in docs read.",
     "u": "https://www.palantir.com/docs/foundry/functions/overview/"
    },
    "vector": {
     "l": 0,
     "n": "Not verified. Docs read do not cover vector or semantic search.",
     "u": ""
    },
    "mcp": {
     "l": 2,
     "n": "Ontology MCP exposes object types, actions, and query functions as MCP tools. Status not stated in docs; treated as Preview.",
     "u": "https://www.palantir.com/docs/foundry/ontology-mcp/overview/"
    },
    "governance": {
     "l": 3,
     "n": "Ontology roles control resource access. In AIP Logic the model only sees data the user may read.",
     "u": "https://www.palantir.com/docs/foundry/logic/overview/"
    },
    "openStandard": {
     "l": 0,
     "n": "Proprietary Ontology. OSDK generates TypeScript, Python, Java clients and an OpenAPI spec; no open semantic spec found.",
     "u": "https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No AI description generator documented. AI FDE edits ontology objects, links and actions by chat; descriptions and status not stated.",
     "u": "https://www.palantir.com/docs/foundry/ai-fde/overview/"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Export, edit and import Ontology schema as JSON. Python transforms set column descriptions in code. JSON format may change.",
     "u": "https://www.palantir.com/docs/foundry/ontology-manager/export-import/"
    },
    "autoClassify": {
     "l": 3,
     "n": "Sensitive Data Scanner matches user-defined conditions, then applies markings, opens issues or obfuscates data. An admin must enable it.",
     "u": "https://www.palantir.com/docs/foundry/sensitive-data-scanner/create-match-actions/"
    },
    "sampleValues": {
     "l": 0,
     "n": "Not documented in the pages reviewed.",
     "u": ""
    },
    "queryHistory": {
     "l": 0,
     "n": "Not documented in the pages reviewed.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "Data Lineage shows dataset graphs, with column search only. Workflow Lineage tracks property usage. Column-level lineage not found.",
     "u": "https://www.palantir.com/docs/foundry/data-lineage/overview/"
    },
    "evals": {
     "l": 3,
     "n": "AIP Evals tests Logic, Chatbot and code functions with built-in, LLM-judge and custom evaluators. Not SQL-specific; no status label.",
     "u": "https://www.palantir.com/docs/foundry/aip-evals/create-suite/"
    }
   },
   "offers": [
    "Object types map datasets, virtual tables, and models to business entities with properties and links.",
    "Action types bundle governed edits and side effects, so agents can write back with permission checks.",
    "AIP Logic LLM blocks read Ontology data through tools such as Query objects; permissions apply at read time.",
    "Ontology MCP and the OSDK expose objects, actions, and query functions to external agents and applications.",
    "Virtual tables point at Databricks, Snowflake, and BigQuery tables without copying data; objects can sit on them."
   ],
   "gaps": [
    "No NL-to-SQL feature found in docs read; AI queries objects through tools, not SQL against the warehouse.",
    "No governed metric definitions, synonyms, or verified-query store found in docs read.",
    "The Ontology is proprietary; access is through OSDK, OpenAPI, or Ontology MCP, not an open semantic spec.",
    "Docs read do not say whether Ontology objects can be queried with SQL; ODBC and JDBC drivers cover datasets.",
    "Warehouse tables become objects only after you model them in Ontology Manager or Pipeline Builder."
   ],
   "fillWith": [
    "Databricks (virtual table source)",
    "Snowflake (virtual table source)",
    "BigQuery (virtual table source)"
   ],
   "nl2sqlPath": "Palantir is not an NL-to-SQL product. Teams map warehouse tables to object types through virtual tables, then let AIP Logic or Chatbot Studio query objects and call actions. For outside agents, enable Ontology MCP or use the OSDK.",
   "snippet": null,
   "sources": [
    {
     "t": "Foundry Ontology overview",
     "u": "https://www.palantir.com/docs/foundry/ontology/overview/"
    },
    {
     "t": "Core Ontology concepts",
     "u": "https://www.palantir.com/docs/foundry/ontology/core-concepts/"
    },
    {
     "t": "Object types overview",
     "u": "https://www.palantir.com/docs/foundry/object-link-types/object-types-overview/"
    },
    {
     "t": "Link types overview",
     "u": "https://www.palantir.com/docs/foundry/object-link-types/link-types-overview/"
    },
    {
     "t": "Action types overview",
     "u": "https://www.palantir.com/docs/foundry/action-types/overview/"
    },
    {
     "t": "Functions overview",
     "u": "https://www.palantir.com/docs/foundry/functions/overview/"
    },
    {
     "t": "AIP overview",
     "u": "https://www.palantir.com/docs/foundry/aip/overview/"
    },
    {
     "t": "AIP features",
     "u": "https://www.palantir.com/docs/foundry/aip/aip-features/"
    },
    {
     "t": "AIP Logic overview",
     "u": "https://www.palantir.com/docs/foundry/logic/overview/"
    },
    {
     "t": "AIP Chatbot Studio overview",
     "u": "https://www.palantir.com/docs/foundry/agent-studio/overview/"
    },
    {
     "t": "Ontology MCP overview",
     "u": "https://www.palantir.com/docs/foundry/ontology-mcp/overview/"
    },
    {
     "t": "Ontology SDK overview",
     "u": "https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
    },
    {
     "t": "Virtual tables",
     "u": "https://www.palantir.com/docs/foundry/data-integration/virtual-tables/"
    },
    {
     "t": "Analytics connectivity overview",
     "u": "https://www.palantir.com/docs/foundry/analytics-connectivity/overview/"
    },
    {
     "t": "AIP Evals overview",
     "u": "https://www.palantir.com/docs/foundry/aip-evals/overview/"
    },
    {
     "t": "AIP Evals: create an evaluation suite",
     "u": "https://www.palantir.com/docs/foundry/aip-evals/create-suite/"
    },
    {
     "t": "AIP Evals: getting started",
     "u": "https://www.palantir.com/docs/foundry/aip-evals/getting-started/"
    },
    {
     "t": "AIP Evals: Ontology edits",
     "u": "https://www.palantir.com/docs/foundry/aip-evals/ontology-edits/"
    },
    {
     "t": "AI FDE overview",
     "u": "https://www.palantir.com/docs/foundry/ai-fde/overview/"
    },
    {
     "t": "AI FDE modes and capabilities",
     "u": "https://www.palantir.com/docs/foundry/ai-fde/modes-and-capabilities/"
    },
    {
     "t": "Data Lineage overview",
     "u": "https://www.palantir.com/docs/foundry/data-lineage/overview/"
    },
    {
     "t": "Data Lineage: find datasets with a given column",
     "u": "https://www.palantir.com/docs/foundry/data-lineage/find-column/"
    },
    {
     "t": "Workflow Lineage",
     "u": "https://www.palantir.com/docs/foundry/workflow-lineage/refactor-and-understand-workflows/"
    },
    {
     "t": "Sensitive Data Scanner overview",
     "u": "https://www.palantir.com/docs/foundry/sensitive-data-scanner/overview/"
    },
    {
     "t": "Sensitive Data Scanner: create match actions",
     "u": "https://www.palantir.com/docs/foundry/sensitive-data-scanner/create-match-actions/"
    },
    {
     "t": "Export, edit, and import an Ontology",
     "u": "https://www.palantir.com/docs/foundry/ontology-manager/export-import/"
    },
    {
     "t": "Python transforms: output column metadata",
     "u": "https://www.palantir.com/docs/foundry/transforms-python/output-column-metadata/"
    }
   ],
   "verified": "2026-10-24",
   "logo": "palantir",
   "worksWith": [],
   "enrichHowTo": "Set descriptions where the data is built: pass column_descriptions to write_dataframe() in a Python transform (800 characters per column). For the Ontology, export it as JSON from Ontology Manager Advanced settings, edit it, and import it. Test agent functions with AIP Evals object-set test cases.",
   "bulkSnippet": {
    "lang": "python",
    "code": "my_output.write_dataframe(\n    my_input.dataframe(),\n    column_descriptions={\n        \"col_1\": \"col 1 description\"\n    }\n)",
    "u": "https://www.palantir.com/docs/foundry/transforms-python/output-column-metadata/"
   }
  },
  {
   "id": "relationalai",
   "name": "RelationalAI",
   "category": "knowledge-graph",
   "tagline": "Decision intelligence platform with Python semantic models and reasoners, built as a Snowflake Native App.",
   "verdict": "partial",
   "verdictNote": "PyRel gives an ontology-style semantic model and reasoners on Snowflake, but no metric layer, MCP server, or other platforms.",
   "worksWith": [
    "snowflake"
   ],
   "artifacts": [
    {
     "name": "RelationalAI Native App (knowledge graph coprocessor)",
     "kind": "knowledge-graph",
     "status": "GA",
     "since": "2024-11",
     "format": "Snowflake Native App",
     "url": "https://www.relational.ai/post/relationalai-knowledge-graph-coprocessor-is-generally-available-as-a-snowflake-native-app"
    },
    {
     "name": "PyRel semantic model",
     "kind": "ontology",
     "status": "GA",
     "since": "",
     "format": "Python SDK (relationalai package)",
     "url": "https://docs.relational.ai/build/guides/modeling/index.md"
    },
    {
     "name": "Prescriptive reasoner",
     "kind": "knowledge-graph",
     "status": "GA",
     "since": "2026-06",
     "format": "PyRel API",
     "url": "https://www.relational.ai/post/relationalai-closes-the-ai-value-gap-with-new-agentic-decision-intelligence-capabilities-for-the-snowflake-ai-data-cloud"
    },
    {
     "name": "Rel App (governed enterprise model with natural-language questions)",
     "kind": "semantic-model",
     "status": "Announced",
     "since": "2026-06",
     "format": "App; availability not stated",
     "url": "https://www.relational.ai/post/relationalai-closes-the-ai-value-gap-with-new-agentic-decision-intelligence-capabilities-for-the-snowflake-ai-data-cloud"
    },
    {
     "name": "Template: Snowflake Intelligence Agent over RelationalAI knowledge graph",
     "kind": "agent",
     "status": "Unverified",
     "since": "",
     "format": "Docs template; contents not read",
     "url": "https://docs.relational.ai/build/templates/index.md"
    },
    {
     "name": "OSI ontology extension (proposal)",
     "kind": "ontology",
     "status": "Announced",
     "since": "2026-05",
     "format": "Spec proposal in OSI working group",
     "url": "https://www.relational.ai/post/bringing-ontological-semantics-to-open-semantic-interchange-osi"
    }
   ],
   "caps": {
    "metrics": {
     "l": 0,
     "n": "No metric object found in docs or posts read. Metrics would sit in Snowflake semantic views.",
     "u": ""
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or hierarchy object found. Concept subtypes cover entity classes only.",
     "u": "https://docs.relational.ai/build/guides/modeling/index.md"
    },
    "relationships": {
     "l": 3,
     "n": "PyRel models concepts, properties, and relationships; the Jun 2026 post adds roles, multiplicity, and constraints.",
     "u": "https://www.relational.ai/post/from-dimensions-to-decisions-what-ontologies-give-ai-agents-and-how-osi-makes-them-portable"
    },
    "synonyms": {
     "l": 0,
     "n": "None found in pages read. Rel App lets users ask questions over the model (announced Jun 2026).",
     "u": ""
    },
    "verifiedQueries": {
     "l": 0,
     "n": "None found in pages read.",
     "u": ""
    },
    "nl2sql": {
     "l": 1,
     "n": "Rel App and Snowflake CoWork take natural-language questions (announced Jun 2026); answers come from reasoners. Availability status not stated.",
     "u": "https://www.relational.ai/post/relationalai-closes-the-ai-value-gap-with-new-agentic-decision-intelligence-capabilities-for-the-snowflake-ai-data-cloud"
    },
    "ontology": {
     "l": 3,
     "n": "PyRel semantic model holds concepts, relationships, and constraints. The Rel App is the governed model UI (announced Jun 2026).",
     "u": "https://docs.relational.ai/build/guides/modeling/index.md"
    },
    "graph": {
     "l": 3,
     "n": "Graph analytics reasoner runs inside Snowflake. No Cypher, SPARQL, or GQL; queries are PyRel Python.",
     "u": "https://docs.relational.ai/"
    },
    "vector": {
     "l": 0,
     "n": "None found in pages read.",
     "u": ""
    },
    "mcp": {
     "l": 0,
     "n": "No MCP server or reference found in docs or posts read. Agents generate PyRel and use coding-agent skills.",
     "u": "https://www.relational.ai/post/answer-questions-beyond-sql"
    },
    "governance": {
     "l": 1,
     "n": "Data stays in the Snowflake account perimeter and admins control app access. Inheritance of row or column policies not confirmed.",
     "u": "https://docs.relational.ai/"
    },
    "openStandard": {
     "l": 2,
     "n": "OSI launch partner (Sep 2025), active in the Ontology Representation working group. Spec support for ontologies is a proposal.",
     "u": "https://www.relational.ai/post/bringing-ontological-semantics-to-open-semantic-interchange-osi"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No LLM description generator found. Verbalizers return model structure and relationship text, not AI-written descriptions.",
     "u": "https://docs.relational.ai/api/python/v1.37/agent/cortex/index.md"
    },
    "bulkMetadata": {
     "l": 0,
     "n": "No metadata import found. Models are PyRel Python code. Description fields on concepts are not documented.",
     "u": "https://docs.relational.ai/build/guides/modeling/index.md"
    },
    "autoClassify": {
     "l": 0,
     "n": "No classification feature found in the docs reviewed.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "Not documented for the Cortex agent tools in the pages reviewed.",
     "u": "https://docs.relational.ai/api/python/v1.37/agent/cortex/index.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining found. Catalog queries are pre-defined by the modeler.",
     "u": "https://docs.relational.ai/api/python/v1.37/agent/cortex/index.md"
    },
    "lineage": {
     "l": 0,
     "n": "No lineage feature found in the RelationalAI docs reviewed.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found. The dynamic query tool RAI_QUERY_MODEL is Preview.",
     "u": "https://docs.relational.ai/api/python/v1.37/agent/cortex/index.md"
    }
   },
   "offers": [
    "PyRel Python SDK builds a semantic model of concepts, relationships, and rules, then queries it with where and select.",
    "Runs as a Snowflake Native App (GA Nov 2024); queries execute against data inside the Snowflake account.",
    "Reasoners cover graph analytics, prescriptive optimization (GA, Jun 2026), and predictive analysis; predictive status not stated.",
    "Docs list 53 templates, including one for a Snowflake Intelligence agent over the RelationalAI knowledge graph.",
    "Coding-agent skills for Snowflake CoCo, Claude Code, OpenAI Codex, and GitHub Copilot help agents extend models (Jun 2026)."
   ],
   "gaps": [
    "No metric, dimension, synonym, or verified-query objects found; it is a reasoning layer, not a BI metric layer.",
    "Snowflake only: a May 2026 post says Snowflake is the currently supported platform.",
    "No MCP server found. Natural-language access is via Rel App or Snowflake CoWork, status not stated.",
    "Positioning moved from knowledge graph coprocessor (Nov 2024) to decision intelligence; Rel now also names the decision agent.",
    "Ontology support in OSI is a proposal, so portability of PyRel models through OSI is not yet standard."
   ],
   "fillWith": [
    "Snowflake semantic views",
    "Cortex Analyst",
    "Snowflake Intelligence"
   ],
   "nl2sqlPath": "For NL-to-SQL on Snowflake, use Snowflake semantic views and Cortex Analyst for metrics. Add RelationalAI when questions need rules, graph analysis, or optimization that SQL does not express; reasoner outputs return as tables that Snowflake Intelligence and agents can read.",
   "snippet": {
    "lang": "other",
    "title": "PyRel (Python): concept, property, subtype rule, query (comments trimmed)",
    "code": "from relationalai.semantics import Integer, Model, String\n\nm = Model(\"PeopleModel\")\nPerson = m.Concept(\"Person\")\nPerson.name = m.Property(f\"{Person} is named {String:name}\")\nPerson.age = m.Property(f\"{Person} is {Integer:age} years old\")\nm.define(Person.new(name=\"Alice\", age=10), Person.new(name=\"Bob\", age=30))\n\n# Adult is a subtype of Person, defined by a rule\nAdult = m.Concept(\"Adult\", extends=[Person])\nm.define(Adult(Person)).where(Person.age >= 18)\n\nq = m.select(Adult.name, Adult.age)\nq.inspect()",
    "u": "https://docs.relational.ai/build/guides/modeling/index.md"
   },
   "sources": [
    {
     "t": "RelationalAI docs home (PyRel 1.37.0, Native App 2026.10.17)",
     "u": "https://docs.relational.ai/"
    },
    {
     "t": "PyRel guide: build a semantic model",
     "u": "https://docs.relational.ai/build/guides/modeling/index.md"
    },
    {
     "t": "PyRel: start building",
     "u": "https://docs.relational.ai/get-started/start-building-with-pyrel/index.md"
    },
    {
     "t": "PyRel templates catalog",
     "u": "https://docs.relational.ai/build/templates/index.md"
    },
    {
     "t": "Knowledge graph coprocessor GA as Snowflake Native App (Nov 2024)",
     "u": "https://www.relational.ai/post/relationalai-knowledge-graph-coprocessor-is-generally-available-as-a-snowflake-native-app"
    },
    {
     "t": "RelationalAI closes the AI value gap (Jun 2, 2026)",
     "u": "https://www.relational.ai/post/relationalai-closes-the-ai-value-gap-with-new-agentic-decision-intelligence-capabilities-for-the-snowflake-ai-data-cloud"
    },
    {
     "t": "Bringing ontological semantics to OSI (May 29, 2026)",
     "u": "https://www.relational.ai/post/bringing-ontological-semantics-to-open-semantic-interchange-osi"
    },
    {
     "t": "From dimensions to decisions: ontologies and OSI (Jun 10, 2026)",
     "u": "https://www.relational.ai/post/from-dimensions-to-decisions-what-ontologies-give-ai-agents-and-how-osi-makes-them-portable"
    },
    {
     "t": "Answer questions beyond SQL (May 4, 2026)",
     "u": "https://www.relational.ai/post/answer-questions-beyond-sql"
    },
    {
     "t": "Beyond context: closing the AI value gap (Apr 15, 2026)",
     "u": "https://www.relational.ai/post/beyond-context-closing-the-ai-value-gap"
    },
    {
     "t": "RelationalAI blog index",
     "u": "https://www.relational.ai/blog"
    },
    {
     "t": "Apache Ossie (OSI) updates",
     "u": "https://ossie.apache.org/updates/"
    },
    {
     "t": "Snowflake: OSI initiative expands partners (Nov 13, 2025)",
     "u": "https://www.snowflake.com/en/blog/osi-initiative-expands-partners/"
    },
    {
     "t": "RelationalAI docs index (llms.txt)",
     "u": "https://docs.relational.ai/llms.txt"
    },
    {
     "t": "RelationalAI Agent Skills",
     "u": "https://docs.relational.ai/build/agents/skills/index.md"
    },
    {
     "t": "Go further with a coding agent (tutorial)",
     "u": "https://docs.relational.ai/build/tutorials/get-started-with-coding-agents/index.md"
    },
    {
     "t": "Cortex agent API (PyRel v1.37)",
     "u": "https://docs.relational.ai/api/python/v1.37/agent/cortex/index.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "RelationalAI keeps meaning in PyRel code, not in table comments. Install RelationalAI Agent Skills in a coding agent and run the rai-ontology skill to draft concepts from Snowflake tables. Review every generated file in model/, because the tutorial says the output needs human review."
  },
  {
   "id": "stardog",
   "name": "Stardog",
   "category": "knowledge-graph",
   "tagline": "Knowledge graph platform with virtual graphs over SQL sources and Voicebox natural-language query.",
   "verdict": "native",
   "verdictNote": "Ontology, mappings, and Voicebox form a semantic layer over SQL sources, but without first-class metric objects.",
   "worksWith": [
    "snowflake",
    "databricks",
    "bigquery",
    "redshift",
    "postgres",
    "oracle",
    "sqlserver",
    "synapse",
    "athena"
   ],
   "artifacts": [
    {
     "name": "Virtual graphs",
     "kind": "knowledge-graph",
     "status": "GA",
     "since": "",
     "format": "SMS, SMS2, or R2RML mapping plus properties file",
     "url": "https://docs.stardog.com/virtual-graphs/"
    },
    {
     "name": "Voicebox",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "Chat UI and API; Stardog Cloud or on-premises",
     "url": "https://docs.stardog.com/voicebox/"
    },
    {
     "name": "Voicebox multi-agent orchestration",
     "kind": "agent",
     "status": "Preview",
     "since": "",
     "format": "Private preview",
     "url": "https://docs.stardog.com/voicebox/"
    },
    {
     "name": "Stardog Cloud MCP server, local mode (stardog-cloud-mcp)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "MCP server; Voicebox API token required; described as stable in AWS post",
     "url": "https://github.com/stardog-union/stardog-cloud-mcp"
    },
    {
     "name": "Stardog Cloud MCP server, remote mode",
     "kind": "mcp",
     "status": "Preview",
     "since": "",
     "format": "HTTP or Docker; marked Beta in the README",
     "url": "https://github.com/stardog-union/stardog-cloud-mcp"
    },
    {
     "name": "Ontologies and Knowledge Kits",
     "kind": "ontology",
     "status": "GA",
     "since": "",
     "format": "RDF models; prebuilt Knowledge Kits ship with Voicebox",
     "url": "https://www.stardog.com/product/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "No metric object found in docs. A Big Spender segment is encoded once in the ontology (AWS post).",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-stardog-and-amazon-bedrock-agentcore/"
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects found in docs. Class hierarchies in the ontology are the closest equivalent.",
     "u": ""
    },
    "relationships": {
     "l": 3,
     "n": "Ontology properties plus mappings define relationships. Shared IRIs let virtual graphs join Aurora and Redshift without ETL (AWS post).",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-stardog-and-amazon-bedrock-agentcore/"
    },
    "synonyms": {
     "l": 3,
     "n": "Voicebox matches question concepts to the ontology by vector search. Dedicated synonym objects not confirmed in docs.",
     "u": "https://docs.stardog.com/voicebox/"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Voicebox uses few-shot examples alongside the ontology as domain context.",
     "u": "https://docs.stardog.com/voicebox/"
    },
    "nl2sql": {
     "l": 3,
     "n": "Voicebox writes SPARQL; Stardog compiles it into a multi-SQL query plan from mappings. SPARQL is the intermediate language.",
     "u": "https://docs.stardog.com/voicebox/"
    },
    "ontology": {
     "l": 3,
     "n": "Ontologies and reasoning are the core product. Pre-configured Knowledge Kits ship with Voicebox.",
     "u": "https://docs.stardog.com/voicebox/"
    },
    "graph": {
     "l": 3,
     "n": "SPARQL over RDF knowledge graphs. Virtual graphs rewrite SPARQL into each source's native query language.",
     "u": "https://docs.stardog.com/virtual-graphs/"
    },
    "vector": {
     "l": 3,
     "n": "Built-in vector store for concept matching and for RAG over PDF and DOCX files indexed by a Spark pipeline.",
     "u": "https://docs.stardog.com/voicebox/"
    },
    "mcp": {
     "l": 3,
     "n": "Official stardog-cloud-mcp exposes Voicebox tools. Local mode stable, remote mode beta; needs a Voicebox API token.",
     "u": "https://github.com/stardog-union/stardog-cloud-mcp"
    },
    "governance": {
     "l": 3,
     "n": "Named-graph security by role, lineage per answer, and exportable audit logs of questions and generated SPARQL.",
     "u": "https://docs.stardog.com/voicebox/"
    },
    "openStandard": {
     "l": 3,
     "n": "RDF, SPARQL, and R2RML supported; SMS2 is Stardog-specific. Stardog is not named in OSI partner lists.",
     "u": "https://docs.stardog.com/virtual-graphs/"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "Voicebox in Designer drafts classes, relationships and mappings. AI-written descriptions are not documented; bulk description edits are manual.",
     "u": "https://docs.stardog.com/stardog-applications/designer/"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Descriptions are rdfs:comment triples. Load Turtle with stardog data add, or upload a data model as Turtle in Designer.",
     "u": "https://docs.stardog.com/operating-stardog/database-administration/adding-data"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic classification of columns or entities found in the docs reviewed.",
     "u": ""
    },
    "sampleValues": {
     "l": 3,
     "n": "Voicebox finds entities in questions by full-text search on labels; stardog:label can match fuzzily. No sample-value feature.",
     "u": "https://docs.stardog.com/voicebox/voicebox-dev-guide/"
    },
    "queryHistory": {
     "l": 0,
     "n": "Voicebox Reporting exports queries and feedback for manual review. No automatic suggestion of joins, metrics or examples found.",
     "u": "https://docs.stardog.com/voicebox/"
    },
    "lineage": {
     "l": 0,
     "n": "Voicebox lineage traces the data behind each answer. No column-level catalog lineage found in the docs reviewed.",
     "u": "https://docs.stardog.com/voicebox/"
    },
    "evals": {
     "l": 1,
     "n": "Thumbs up/down feedback and exportable reporting exist. Stored queries are added by hand; no benchmark runner found.",
     "u": "https://docs.stardog.com/voicebox/"
    }
   },
   "offers": [
    "Virtual graphs query SQL sources in place by rewriting SPARQL to native SQL; optional materialization with virtual import.",
    "Mapping sources include Snowflake, Databricks SQL, BigQuery, Redshift, PostgreSQL, Oracle, SQL Server, and Synapse.",
    "Voicebox: natural language to SPARQL to SQL, with few-shot examples, lineage, answer provenance, and CSV audit reports.",
    "Stardog Cloud MCP server exposes voicebox_ask, voicebox_generate_query, and voicebox_settings to agents.",
    "AWS reference design (Jul 2026) uses Bedrock AgentCore and shared IRIs to join Aurora and Redshift without ETL."
   ],
   "gaps": [
    "No first-party metric or measure object found; metrics must be modeled in the ontology or SPARQL.",
    "The NL path runs through SPARQL, so SQL teams learn mappings (SMS2, R2RML) and ontology modeling.",
    "Docs state External LLM agent answers may contain hallucinations; the product page says hallucination-managed.",
    "MCP needs a Voicebox API token limited to certain accounts; multi-agent orchestration is private preview.",
    "Stardog does not appear in OSI partner lists, and SMS2 mappings are not portable to other tools."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Snowflake semantic views",
    "Databricks metric views",
    "Cube"
   ],
   "nl2sqlPath": "Model the ontology, map warehouse tables with virtual graphs, and ask through Voicebox, which writes SPARQL that Stardog turns into SQL. Agents can reach Voicebox through the Stardog Cloud MCP server, or call SPARQL directly (AWS Bedrock AgentCore reference, Jul 2026). Keep governed metrics in a warehouse semantic layer.",
   "snippet": {
    "lang": "other",
    "title": "SMS2 mapping from Stardog docs (JSON source; trailing comma removed)",
    "code": "PREFIX : <http://stardog.com/movies/>\nMAPPING <urn:movies>\nFROM JSON {\n  \"movie\":{\n    \"_id\":\"?movieId\",\n    \"name\":\"?name\"\n  }\n}\nTO {\n  ?movie a :Movie ;\n    :name ?name .\n}\nWHERE {\n  BIND (template(\"http://stardog.com/movies/Title_{movieId}\") AS ?movie)\n}",
    "u": "https://docs.stardog.com/virtual-graphs/mapping-data-sources"
   },
   "sources": [
    {
     "t": "Stardog docs: virtual graphs",
     "u": "https://docs.stardog.com/virtual-graphs/"
    },
    {
     "t": "Stardog docs: supported data sources",
     "u": "https://docs.stardog.com/virtual-graphs/data-sources/supported-data-sources"
    },
    {
     "t": "Stardog docs: mapping data sources (SMS2)",
     "u": "https://docs.stardog.com/virtual-graphs/mapping-data-sources"
    },
    {
     "t": "Stardog docs: Voicebox",
     "u": "https://docs.stardog.com/voicebox/"
    },
    {
     "t": "Stardog product page",
     "u": "https://www.stardog.com/product/"
    },
    {
     "t": "stardog-cloud-mcp repository",
     "u": "https://github.com/stardog-union/stardog-cloud-mcp"
    },
    {
     "t": "AWS ML blog: semantic layer with Stardog and Bedrock AgentCore (Jul 10, 2026)",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-stardog-and-amazon-bedrock-agentcore/"
    },
    {
     "t": "Stardog blog: The Semantic Control Plane (Jun 15, 2026)",
     "u": "https://www.stardog.com/blog/semantic-control-plane-building-trust-enterprise-ai/"
    },
    {
     "t": "Stardog blog: Why every AI system needs a semantic layer (Jul 17, 2026)",
     "u": "https://www.stardog.com/blog/ai-chessboard-every-ai-system-needs-semantic-layer/"
    },
    {
     "t": "Stardog blog: One year at Stardog, enterprise context layer (Oct 6, 2026)",
     "u": "https://www.stardog.com/blog/stardog-ceo-importance-enterprise-context-layer-ai/"
    },
    {
     "t": "Atlan: Stardog vs Atlan (competitor view, Sep 2026)",
     "u": "https://atlan.com/know/ai-agent/knowledge-graph/stardog-vs-atlan/"
    },
    {
     "t": "Voicebox Developer Guide",
     "u": "https://docs.stardog.com/voicebox/voicebox-dev-guide/"
    },
    {
     "t": "Voicebox: Ontology Maintenance and Data Mapping",
     "u": "https://docs.stardog.com/voicebox/guided-ontology-creation-and-mapping/"
    },
    {
     "t": "Stardog Designer",
     "u": "https://docs.stardog.com/stardog-applications/designer/"
    },
    {
     "t": "Adding Data",
     "u": "https://docs.stardog.com/operating-stardog/database-administration/adding-data"
    },
    {
     "t": "Stardog Platform Release Notes",
     "u": "https://docs.stardog.com/release-notes/stardog-platform"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Write rdfs:label and rdfs:comment on classes and properties, because Voicebox reads them. Load them in bulk with stardog data add and a Turtle file. Add 5 to 50 stored queries, each with a system:voiceboxQuestion field, as few-shot examples.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "# descriptions.ttl holds rdfs:label and rdfs:comment triples for classes and properties\nstardog data add --format turtle myDatabase descriptions.ttl",
    "u": "https://docs.stardog.com/operating-stardog/database-administration/adding-data"
   }
  }
 ],
 "notes": [
  {
   "topic": "Redshift has no native semantic layer object",
   "text": "No metric, dimension, relationship or ontology object appears on the Redshift data types page or the Redshift product page read on 2026-10-24. AWS ML blog posts show partners (AtScale, Denodo, Strategy Mosaic, Stardog) supplying the layer. Absence cannot be proven, so treat this as 'none found'.",
   "sources": [
    {
     "t": "Redshift supported data types",
     "u": "https://docs.aws.amazon.com/redshift/latest/dg/c_Supported_data_types.html"
    },
    {
     "t": "Amazon Redshift product page",
     "u": "https://aws.amazon.com/redshift/"
    },
    {
     "t": "Semantic layer for agentic AI with AtScale (2026-10-20)",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-atscale-and-amazon-bedrock-agentcore/"
    },
    {
     "t": "Semantic layer with Denodo",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-denodo-and-amazon-bedrock-agentcore/"
    },
    {
     "t": "Semantic layer with Strategy Mosaic",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-strategy-mosaic-and-amazon-bedrock-agentcore/"
    },
    {
     "t": "Semantic layer with Stardog",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-stardog-and-amazon-bedrock-agentcore/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "QuickSight to Quick Suite to Quick (renames)",
   "text": "AWS launched Amazon Quick Suite on 2025-10-09 as an agentic workspace. The docs now say Amazon Quick, write the BI part as Quick Sight, and list the rebrand under 2025-10-09; docs URLs moved from quicksuite to quick. A Feb 2026 third-party post found no official rename notice, and AWS posts from Sep 2026 use 'Amazon Quick'.",
   "sources": [
    {
     "t": "Introducing Amazon Quick Suite",
     "u": "https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-quick-suite-agentic-ai-powered-workspace"
    },
    {
     "t": "Amazon Quick user guide document history",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/doc-history.html"
    },
    {
     "t": "Serverworks blog on the Quick Suite to Quick change",
     "u": "https://blog.serverworks.co.jp/amazon-quick-suite-renamed-to-amazon-quick"
    },
    {
     "t": "Amazon Quick desktop app GA, Sep 2026 (seen in search results)",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-quick-desktop-app-generally-available-macos-windows/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "Quick Topics were redesigned in 2026",
   "text": "New Topics are a multi-dataset semantic layer: up to 12 datasets, join keys, custom instructions, runtime joins, with RLS and CLS reused from datasets. An AWS blog dated 2026-07-07 calls it public preview, and GA was announced 2026-08-06; older Topics are now called legacy and stay single-dataset. The preview post says SPICE and Direct Query datasets cannot be mixed in one Topic and lists Redshift among Direct Query sources.",
   "sources": [
    {
     "t": "Multi-dataset topics GA, 2026-08-06",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick"
    },
    {
     "t": "Multi-dataset Topics public preview post",
     "u": "https://aws.amazon.com/blogs/machine-learning/build-a-unified-semantic-layer-across-datasets-with-multi-dataset-topics-in-amazon-quick/"
    },
    {
     "t": "Working with Quick Sight Topics",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/topics.html"
    },
    {
     "t": "Working with legacy Topics",
     "u": "https://docs.aws.amazon.com/quick/latest/userguide/legacy-topics.html"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "Amazon Q generative SQL scope and limits",
   "text": "GA on 2024-09-16 in Redshift Query Editor v2. It is off by default, needs an admin switch, works in notebooks, accepts English only, and cannot reference external schemas. The custom context JSON takes three-part table names and holds annotations, curated queries, documents and prompt text.",
   "sources": [
    {
     "t": "Interacting with Amazon Q generative SQL",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    {
     "t": "GA announcement (Spanish page)",
     "u": "https://aws.amazon.com/es/about-aws/whats-new/2024/09/amazon-q-generative-sql-amazon-redshift/"
    },
    {
     "t": "Secure generative SQL with Amazon Q",
     "u": "https://aws.amazon.com/blogs/big-data/secure-generative-sql-with-amazon-q"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "Bedrock Knowledge Bases structured retrieval",
   "text": "Announced 2024-12-04 for Amazon Redshift and SageMaker Lakehouse in all commercial regions where Bedrock Knowledge Bases runs. The docs say the generation context is non-deterministic and meant only to improve accuracy. Graph retrieval (GraphRAG with Neptune Analytics) works on ingested documents, not on Redshift tables.",
   "sources": [
    {
     "t": "Structured data retrieval announcement",
     "u": "https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-bedrock-knowledge-bases-structured-data-retrieval"
    },
    {
     "t": "Create a knowledge base with a structured data store",
     "u": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-structured-create.html"
    },
    {
     "t": "GraphRAG with Neptune Analytics",
     "u": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-graphs.html"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "SageMaker naming and Data Agent",
   "text": "The next-generation Amazon SageMaker combines Unified Studio and governance; the original service is now SageMaker AI. Unified Studio reached GA on 2025-03-13, and SageMaker Catalog is built on Amazon DataZone. The SageMaker Data Agent (2026-03-30) generates SQL for Redshift and Athena, but the announcement gives no GA or preview label.",
   "sources": [
    {
     "t": "What is Amazon SageMaker (next generation)",
     "u": "https://docs.aws.eu/next-generation-sagemaker/latest/userguide/what-is-sagemaker.html"
    },
    {
     "t": "Unified Studio GA post",
     "u": "https://aws.amazon.com/blogs/aws/collaborate-and-build-faster-with-amazon-sagemaker-unified-studio-now-generally-available"
    },
    {
     "t": "SageMaker Catalog product page",
     "u": "https://aws.amazon.com/sagemaker/catalog/"
    },
    {
     "t": "SageMaker Data Agent announcement",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sagemaker-data-agent-query-editor"
    },
    {
     "t": "AI recommendations for custom assets, 2025-07-01",
     "u": "https://aws.amazon.com/about-aws/whats-new/2025/07/amazon-sagemaker-catalog-adds-ai/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "AWS Labs MCP servers and the Agent Toolkit",
   "text": "The Agent Toolkit for AWS (2026-05-06) is the successor to the AWS Labs MCP servers; the old servers stay available. The Redshift server has 7 tools, is read-only by default, and returns schema metadata only. The AWS Labs README still labels the managed AWS MCP Server 'in preview', while the May 2026 announcement calls it GA.",
   "sources": [
    {
     "t": "AWS Labs MCP repository",
     "u": "https://github.com/awslabs/mcp"
    },
    {
     "t": "Agent Toolkit for AWS announcement",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/05/agent-toolkit/"
    },
    {
     "t": "AWS Labs Redshift MCP server",
     "u": "https://github.com/awslabs/mcp/tree/main/src/redshift-mcp-server"
    },
    {
     "t": "AWS Labs Neptune MCP server",
     "u": "https://github.com/awslabs/mcp/tree/main/src/amazon-neptune-mcp-server"
    },
    {
     "t": "Neptune MCP server announcement, 2025-05-28",
     "u": "https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-neptune-mcp-server/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "Vector support on AWS data stores",
   "text": "The current Redshift data types page lists no vector type, and a mid-2024 re:Post article says Redshift had no vector search. Vector search appears in Neptune Analytics (inside graph traversals) and in SageMaker Catalog semantic search over metadata. Redshift also calls Bedrock models from SQL through CREATE EXTERNAL MODEL (Oct 2024).",
   "sources": [
    {
     "t": "Redshift supported data types",
     "u": "https://docs.aws.amazon.com/redshift/latest/dg/c_Supported_data_types.html"
    },
    {
     "t": "Vector search with Amazon Redshift (re:Post)",
     "u": "https://www.repost.aws/articles/ARPoweQIN2ROOXZiJAtSQvkQ/vector-search-with-amazon-redshift"
    },
    {
     "t": "Neptune Analytics vector similarity",
     "u": "https://docs.aws.amazon.com/neptune-analytics/latest/userguide/vector-similarity.html"
    },
    {
     "t": "SageMaker Catalog product page",
     "u": "https://aws.amazon.com/sagemaker/catalog/"
    },
    {
     "t": "Redshift and Bedrock integration",
     "u": "https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-redshift-integration-bedrock-generative-ai"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "Open Semantic Interchange is now Apache Ossie",
   "text": "The OSI repository README says Apache Ossie (incubating) was formerly known as Open Semantic Interchange. The README names neither AWS nor SAP as participants, and I did not find AWS or SAP support for it elsewhere.",
   "sources": [
    {
     "t": "open-semantic-interchange/OSI repository",
     "u": "https://github.com/open-semantic-interchange/OSI"
    },
    {
     "t": "apache/ossie repository",
     "u": "https://github.com/apache/ossie"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "SAP product naming and structure",
   "text": "SAP Data Warehouse Cloud became SAP Datasphere in 2023. SAP announced Business Data Cloud on 2025-02-13, with Datasphere as a key component; SAP says existing Datasphere and Analytics Cloud customers keep their service and may move over time.",
   "sources": [
    {
     "t": "SAP Datasphere launch post, 2023-03-08 (seen in SAP News search)",
     "u": "https://news.sap.com/2023/03/sap-datasphere-simplify-data-landscape-partnerships-collibra-confluent-databricks-datarobot/"
    },
    {
     "t": "Techzine on Datasphere as DWC successor",
     "u": "https://techzine.eu/blogs/data-management/117331/sap-expands-datasphere-with-knowledge-graph-and-compass"
    },
    {
     "t": "SAP Business Data Cloud product page",
     "u": "https://www.sap.com/products/data-cloud.html"
    },
    {
     "t": "SAP Datasphere product page",
     "u": "https://www.sap.com/products/data-cloud/datasphere.html"
    },
    {
     "t": "BDC launch post",
     "u": "https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "SAP uses 'knowledge graph' for three things",
   "text": "The Datasphere knowledge graph (preview signup in March 2024; a DW Metadata Graph Consumer role exists in current docs), the SAP Knowledge Graph that grounds Joule agents in BDC, and the SAP HANA Cloud knowledge graph engine (RDF and SPARQL). I found no GA statement for any of them in the sources read.",
   "sources": [
    {
     "t": "SAP Data Unleashed 2024",
     "u": "https://news.sap.com/2024/03/latest-sap-data-and-analytics-innovations-sap-data-unleashed/"
    },
    {
     "t": "Datasphere standard roles",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Administering/Managing-Users-and-Roles/standard-roles-delivered-with-sap-datasphere-a50a51d.md"
    },
    {
     "t": "BDC intelligent applications, 2025-05",
     "u": "https://news.sap.com/2025/05/future-intelligent-applications-sap-business-data-cloud/"
    },
    {
     "t": "SAP HANA Cloud multi-model post",
     "u": "https://news.sap.com/2025/07/unifying-ai-workloads-sap-hana-cloud-one-database/"
    },
    {
     "t": "SAP AI-native North Star architecture",
     "u": "https://news.sap.com/2026/06/sap-ai-native-north-star-architecture-technical-backbone-autonomous-enterprise/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "SAP MCP status",
   "text": "SAP's TechEd post (2025-11-17) says MCP support for SAP HANA Cloud is now generally available, while the 2025-11-05 post only says SAP is expanding HANA Cloud with MCP. SAP's June 2026 architecture post lists MCP and A2A as supported open standards. No MCP server for Datasphere analytic models was found.",
   "sources": [
    {
     "t": "Business AI innovation at SAP TechEd",
     "u": "https://news.sap.com/2025/11/business-ai-innovation-unveiled-at-sap-teched/"
    },
    {
     "t": "Data fabric innovations post, 2025-11-05",
     "u": "https://news.sap.com/2025/11/sap-snowflake-new-data-fabric-innovations-sap-bdc-sap-hana-cloud/"
    },
    {
     "t": "SAP AI-native North Star architecture",
     "u": "https://news.sap.com/2026/06/sap-ai-native-north-star-architecture-technical-backbone-autonomous-enterprise/"
    },
    {
     "t": "Sapphire 2026 keynote",
     "u": "https://news.sap.com/2026/05/sap-sapphire-keynote-business-ai-platform-power-autonomous-enterprise/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "SAP openness to Databricks, Snowflake and others",
   "text": "BDC Connect for Databricks was GA by 2025-10-08; BigQuery was in public preview then; Snowflake GA was planned for H1 2026 and Fabric was announced as planned. In May 2026 SAP lists Snowflake, Databricks, BigQuery and Fabric as existing partners and plans BDC Connect for Amazon Athena for H2 2026. SAP also announced it will acquire Dremio (2026-05-04) to make BDC Iceberg-native.",
   "sources": [
    {
     "t": "BDC Connect for Databricks GA",
     "u": "https://news.sap.com/2025/10/sap-connect-intelligent-applications-sap-bdc/"
    },
    {
     "t": "BDC Connect for BigQuery",
     "u": "https://news.sap.com/2025/10/sap-google-cloud-redefine-enterprise-ai-zero-copy-data-google-bigquery/"
    },
    {
     "t": "SAP and Snowflake",
     "u": "https://news.sap.com/2025/11/sap-snowflake-data-enterprise-ai-business-data-fabric/"
    },
    {
     "t": "BDC Connect for Microsoft Fabric",
     "u": "https://news.sap.com/2025/11/sap-bdc-connect-for-microsoft-fabric-business-insights-ai-innovation/"
    },
    {
     "t": "SAP and AWS zero-copy sharing",
     "u": "https://news.sap.com/2026/05/sap-aws-next-generation-ai-bi-directional-zero-copy-data-sharing-sap-bdc/"
    },
    {
     "t": "Accelerate the Autonomous Enterprise with SAP BDC",
     "u": "https://news.sap.com/2026/05/sap-bdc-accelerate-autonomous-enterprise/"
    },
    {
     "t": "SAP to acquire Dremio",
     "u": "https://news.sap.com/2026/05/sap-to-acquire-dremio-unify-sap-and-non-sap-data-power-agentic-ai/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "How SAP Datasphere feature status was set",
   "text": "SAP's Datasphere docs on GitHub print no GA or preview labels. I marked analytic models, Business Builder, catalog, Generate Semantics and Generate SQL as GA because they sit in the current docs (updated 2026-10-20) with no preview note; Joule in Datasphere has an explicit GA statement.",
   "sources": [
    {
     "t": "SAP Datasphere documentation source (SAP-docs on GitHub)",
     "u": "https://github.com/SAP-docs/sap-datasphere"
    },
    {
     "t": "SAP Business AI release highlights Q1 2026",
     "u": "https://news.sap.com/2026/04/sap-business-ai-release-highlights-q1-2026/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "SAP Datasphere AI features need licensing and enablement",
   "text": "Datasphere lists AI features for catalog content, natural language search, semantic generation, SQL view generation and pipeline summaries. An admin enables them per tenant, and users need the Data Warehouse AI Consumer privilege. Joule needs separate activation and a Joule consumption privilege.",
   "sources": [
    {
     "t": "Enable SAP Business AI for SAP Datasphere",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Administering/Creating-and-Configuring-Your-Tenant/enable-sap-business-ai-for-sap-datasphere-1b3fe45.md"
    },
    {
     "t": "Generate Semantic Information",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Modeling-Data-in-the-Data-Builder/generate-semantic-information-2fc1d26.md"
    },
    {
     "t": "Generate SQL Code with AI",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/generate-sql-code-with-ai-d153065.md"
    },
    {
     "t": "SAP Business AI release highlights Q1 2026",
     "u": "https://news.sap.com/2026/04/sap-business-ai-release-highlights-q1-2026/"
    }
   ],
   "from": "aws-sap.json"
  },
  {
   "topic": "Source access limit",
   "text": "WebFetch could not reach vendor sites (docs.oracle.com, help.qlik.com, strategy.com, ibm.com, qlik.com): DNS error and proxy 403. Facts come from WebSearch result summaries and URLs seen there, not from full pages. Treat levels as search-based.",
   "sources": [],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "SAP BusinessObjects roadmap",
   "text": "Partner and press sources say BI 4.3 mainstream maintenance is extended to Dec 31, 2026 with security fixes to end of 2027. BI 2025 keeps .unx universes and deprecates Universe Design Tool and .unv. A BI 2027 release in Q1 2027 was reported but I did not see it on an SAP page.",
   "sources": [
    {
     "t": "SAPinsider",
     "u": "https://sapinsider.org/articles/saps-strategic-direction-for-analytics-businessobjects-bi-2025/"
    },
    {
     "t": "NTT DATA",
     "u": "https://nttdata-solutions.com/uk/blog/preparing-for-the-end-of-life-of-sap-businessobjects-4-3-what-should-your-business-do/"
    },
    {
     "t": "Wiiisdom",
     "u": "https://wiiisdom.com/blog/sap-businessobjects-bi-2025/"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "BusinessObjects .unv end of support",
   "text": "A Wiiisdom post says .unv end of support is scheduled for 2027. I did not confirm it against SAP.",
   "sources": [
    {
     "t": "Wiiisdom",
     "u": "https://wiiisdom.com/blog/sap-businessobjects-bi-2025/"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Cognos latest release",
   "text": "IBM marketing pages call 12.1.3 the latest release. I found no 12.1.2 or 12.1.3 release notes. GenAI agents were Preview in 12.1.1 (Oct 2025).",
   "sources": [
    {
     "t": "IBM Cognos Analytics",
     "u": "https://www.ibm.com/products/cognos-analytics"
    },
    {
     "t": "Cognos 12.1.1 (IBM Community)",
     "u": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Cognos MCP",
   "text": "No IBM MCP server was found. A third-party Activepieces MCP server (updated Aug 2026) and an IBM Ideas request exist.",
   "sources": [
    {
     "t": "Activepieces",
     "u": "https://www.activepieces.com/mcp/ibm-cognose"
    },
    {
     "t": "IBM Ideas",
     "u": "https://ibm-data-and-ai.ideas.ibm.com/ideas/CA-I-4846"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Strategy rename and products",
   "text": "MicroStrategy is now Strategy. Mosaic went GA Jun 24, 2025. Mosaic in the MCP server replaced a Feb 2026 preview in the March 20, 2026 release. Ossie YAML import and export is dated Jul 17, 2026.",
   "sources": [
    {
     "t": "Mosaic GA",
     "u": "https://www.strategy.com/press/strategy-announces-general-availability-of-strategy-mosaic-the-ai-powered-universal-intelligence-layer_06-24-2025"
    },
    {
     "t": "Mosaic MCP",
     "u": "https://www.strategy.com/software/strategyone/whats-new/direct-mosaic-model-access-via-mcp"
    },
    {
     "t": "Ossie YAML",
     "u": "https://software.strategy.com/whats-new/import-and-export-mosaic-models-as-apache-ossie-yaml"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Open Semantic Interchange rename",
   "text": "OSI is now Apache Ossie. Strategy and Qlik joined OSI (Dec 2025 and Jan 2026). The Ossie converters repo lists no Qlik, Strategy, Oracle, Cognos, or BusinessObjects directory.",
   "sources": [
    {
     "t": "Ossie converters",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Qlik joins OSI",
     "u": "https://ossie.apache.org/updates/qlik-joins-snowflake-to-support-open-semantic-interchange/"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Qlik MCP and Answers timeline",
   "text": "Qlik announced GA of its agentic experience, Qlik Answers, and the MCP server on Feb 10, 2026 (press release URL date). Discovery Agent and Data Products for Analytics were to follow. I did not find a separate GA date for Answers on structured data.",
   "sources": [
    {
     "t": "Qlik press release",
     "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Qlik data sources",
   "text": "Search results of Qlik's data source page showed BigQuery, Databricks, Redshift, Azure Synapse, Azure SQL, Spark, and Hive. Snowflake was not visible in the excerpt, so it is not listed in worksWith.",
   "sources": [
    {
     "t": "Data sources in Qlik Cloud Analytics",
     "u": "https://help.qlik.com/ja-jp/cloud-services/Subsystems/Hub/Content/Sense_Helpsites/Connectors_SaaS.htm"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Oracle MCP stage and Analytic Views",
   "text": "The Jul 2026 update still lists the OAC MCP server as Preview; it first appeared in the Nov 2025 update. The Semantic Modeler support table says Analytic Views are not supported, while the Jan 2026 update post mentions Analytic Views support in the Semantic Modeler. I could not resolve this.",
   "sources": [
    {
     "t": "July 2026 update",
     "u": "https://blogs.oracle.com/analytics/oracle-analytics-july-2026-update"
    },
    {
     "t": "January 2026 update",
     "u": "https://blogs.oracle.com/analytics/oracle-analytics-january-2026-update"
    },
    {
     "t": "Semantic model data sources",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/data-sources-supported-semantic-models.html"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Oracle AI Assistant GA date",
   "text": "A Perficient blog says the AI Assistant reached all OAC instances with the May 2025 update. I did not see Oracle release notes with the stage, so the 2025-05 date is from a partner.",
   "sources": [
    {
     "t": "Perficient",
     "u": "https://blogs.perficient.com/2025/05/09/a-closer-look-at-the-ai-assistant-of-oracle-analytics/"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Items not verified",
   "text": "Cognos metric, dimension, synonym, and governance docs. Strategy dimensions, relationships, and governance docs. BusinessObjects joins and universe security. Oracle OAC JDBC or ODBC access for outside BI tools. Cognos and BusinessObjects supported data platform lists from official docs.",
   "sources": [],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Research limits for this file",
   "text": "WebFetch could reach only GitHub pages in this session. Vendor sites (Tableau, Salesforce, ThoughtSpot, Sigma, Domo, Metabase.com, Superset.apache.org) failed to connect, and the search budget ran out. Claims for those vendors come from search result text. Items I could not check are marked Unverified or set to level 0 with a note.",
   "sources": [
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Product renames",
   "text": "ThoughtSpot Worksheets were deprecated Nov 2024 and removed Aug 2025, with content moved to Models. Sage and Ask Sage were removed Dec 2025 and replaced by Spotter. Ask Sigma became Sigma Assistant in Apr 2026.",
   "sources": [
    {
     "t": "Deprecation announcements",
     "u": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    {
     "t": "What's New in Sigma, April 17, 2026",
     "u": "https://community.sigmacomputing.com/t/whats-new-in-sigma-april-17-2026/6747"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Tableau MCP stage",
   "text": "April 2026 release notes say Tableau Next MCP is GA, but the Salesforce tool reference page is titled Beta. Treat the exact GA tool list as unconfirmed.",
   "sources": [
    {
     "t": "Tableau April 2026 New Features",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "t": "Tableau Next MCP Beta Server Tool Reference",
     "u": "https://help.salesforce.com/s/articleView?id=analytics.tua_data_tableau_next_mcp_beta_server_tool_reference.htm&language=en_US&type=5"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "ThoughtSpot Spotter Semantics",
   "text": "Announced Mar 12, 2026 as an agentic semantic layer with a metrics catalog and an OSI alignment claim. Only the press release and reprints were seen. The Ossie converters repo does list a thoughtspot directory.",
   "sources": [
    {
     "t": "Spotter Semantics press release",
     "u": "https://www.thoughtspot.com/press-releases/thoughtspot-introduces-spotter-semantics-to-bring-trust-and-context-to-enterprise-ai"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Domo semantic features are beta",
   "text": "Domo lists its Semantic Layer on a Beta Features page, and the Sep 2026 release notes list Semantic View Integration as beta. Analysts say the AI Library and MCP expansion are beta too.",
   "sources": [
    {
     "t": "Domo AI - Beta Features",
     "u": "https://www.domo.com/product/new-features/domo-ai-beta-features"
    },
    {
     "t": "September 2026 Release Notes",
     "u": "https://www.domo.com/docs/s/article/Current-Release-Notes"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Metabase MCP and Metabot",
   "text": "MCP server arrived in Metabase 60 (Apr 2026) and was upgraded in Metabase 64 (Oct 2026, date from a directory listing, not Metabase). The client supplies the model, so no Metabase AI provider is needed. Metabot and MCP are included in every plan per Metabase AI page snippets.",
   "sources": [
    {
     "t": "Metabase MCP docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md"
    },
    {
     "t": "Metabase releases",
     "u": "https://www.metabase.com/releases"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Superset SEMANTIC_LAYERS release conflict",
   "text": "The 6.1.0 feature flag page lists SEMANTIC_LAYERS, default off. A Preset post says it is on master and targeted at 7.0. I could not settle which release ships it.",
   "sources": [
    {
     "t": "Feature Flags (6.1.0)",
     "u": "https://superset.apache.org/admin-docs/6.1.0/configuration/feature-flags/"
    },
    {
     "t": "Semantic Layers in Apache Superset (Preset)",
     "u": "https://preset.io/blog/semantic-layers-in-superset/"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Items not verified",
   "text": "Tableau Semantics stage and dimensions, Tableau Pulse, ThoughtSpot MCP stage and Models details, Sigma Snowflake Semantic Views integration, Domo and Superset data platform lists, Superset MCP maturity, and Metabase 64 date.",
   "sources": [],
   "from": "bi-modern.json"
  },
  {
   "topic": "Research limits",
   "text": "WebFetch could not reach vendor doc hosts through the proxy and the search budget ran out. Facts come from search-result snippets and one GitHub page fetch, so many statuses are Unverified.",
   "sources": [
    {
     "t": "mcp-server-datahub (GitHub)",
     "u": "https://github.com/acryldata/mcp-server-datahub"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "DataHub AI docs status conflict",
   "text": "Current docs say closed beta. The 1.6.0 archive says GA in Cloud v0.3.17.",
   "sources": [
    {
     "t": "AI docs",
     "u": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    {
     "t": "AI docs 1.6.0",
     "u": "https://archive.docs.datahub.com/docs/1.6.0/automations/ai-docs"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "Atlan benchmark claim",
   "text": "Atlan reports a 38 percent SQL accuracy lift from governed metadata. No independent source found, so it is not used on the page.",
   "sources": [
    {
     "t": "Atlan MCP",
     "u": "https://atlan.com/mcp/"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "Does Databricks have an ontology with Genie? (answer: yes by name, but not a Palantir-style schema)",
   "text": "Databricks announced a product called Genie Ontology on 2026-06-16. Docs mark it Public Preview, enabled by default since 2026-08-06 and open to all customers since 2026-08-13. The docs describe it as a context layer that combines Unity Catalog semantics (metric views, domains, Pages) with snippets Genie infers from dashboards, queries, and Genie Agents. The docs read do not mention object types, link types, or actions.",
   "sources": [
    {
     "t": "Genie Ontology (docs)",
     "u": "https://docs.databricks.com/aws/en/genie/genie-ontology"
    },
    {
     "t": "Introducing Genie One, Genie Agents, and Genie Ontology",
     "u": "https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents"
    },
    {
     "t": "AI/BI and Genie One release notes 2026",
     "u": "https://docs.databricks.com/gcp/en/ai-bi/release-notes/2026"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "How Genie Ontology works",
   "text": "The launch blog says it extracts knowledge from tables, queries, dashboards, pipelines, and connected apps into a 'living graph', and ranks sources with a PageRank-like method (OntoRank). It enforces source permissions. The blog gives no GA or Preview label; the docs do.",
   "sources": [
    {
     "t": "Introducing Genie One, Genie Agents, and Genie Ontology",
     "u": "https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents"
    },
    {
     "t": "How Genie Ontology powers product development at Databricks",
     "u": "https://www.databricks.com/blog/how-genie-ontology-powers-product-development-databricks"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Vendor-run benchmark for Genie Ontology",
   "text": "Databricks reports 84.5% first-attempt accuracy against 52.4% for the strongest coding agent on an internal 28-question benchmark. This is a vendor-run test and has no independent check.",
   "sources": [
    {
     "t": "Introducing Genie One, Genie Agents, and Genie Ontology",
     "u": "https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Databricks product renames in 2026",
   "text": "Databricks One was renamed to Genie on 2026-04-27, and Genie was renamed to Genie One on 2026-06-09. Genie Spaces became Genie Agents on 2026-07-09. Vector Search is now AI Search, and Agent Bricks Multi-Agent Supervisor became Supervisor Agent on 2026-02-05. Metric view 'Dimensions' became 'Fields' in the Genie authoring UI on 2026-05-21; YAML still accepts 'dimensions' as an alias.",
   "sources": [
    {
     "t": "AI/BI and Genie One release notes 2026",
     "u": "https://docs.databricks.com/gcp/en/ai-bi/release-notes/2026"
    },
    {
     "t": "AI Search (formerly Vector Search)",
     "u": "https://docs.databricks.com/aws/en/vector-search/vector-search"
    },
    {
     "t": "Databricks platform release notes, February 2026",
     "u": "https://docs.databricks.com/aws/en/release-notes/product/2026/february"
    },
    {
     "t": "Metric view YAML syntax reference",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/yaml-reference"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Metric view status timeline",
   "text": "Public Preview began 2025-05-29 (needs DBR 16.4 or a Preview-channel warehouse). Databricks announced 'Unity Catalog Business Semantics is now GA' on 2026-04-02, with metric views as the core; the point-and-click UI was Public Preview and materialization was Preview at that time. Later GA items: window measures (Oct 2026), sharing metric views through OpenSharing (Sept 2026), local metric views in dashboards (Aug 2026). Metric view parameters were Public Preview in June 2026. I found no separate 'metric views GA' release note.",
   "sources": [
    {
     "t": "AI/BI release notes 2025",
     "u": "https://docs.databricks.com/aws/en/ai-bi/release-notes/2025"
    },
    {
     "t": "Unity Catalog Business Semantics: Now GA and Open Source",
     "u": "https://www.databricks.com/blog/redefining-semantics-data-layer-future-bi-and-ai"
    },
    {
     "t": "Databricks platform release notes",
     "u": "https://docs.databricks.com/aws/en/release-notes/product"
    },
    {
     "t": "AI/BI and Genie One release notes 2026",
     "u": "https://docs.databricks.com/gcp/en/ai-bi/release-notes/2026"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Metric view YAML and join support",
   "text": "YAML top-level keys: version, comment, source, parameters, filter, joins, fields (alias dimensions), measures, materialization. Joins support star and snowflake schemas; snowflake joins need DBR 17.3 per the feature table, and one-to-many joins need DBR 18.1. Agent metadata (comments, synonyms, display names, formats) needs YAML 1.1 and DBR 17.3. Docs also mention the join option rely.at_most_one_match.",
   "sources": [
    {
     "t": "Metric view YAML syntax reference",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/yaml-reference"
    },
    {
     "t": "Metric view feature availability",
     "u": "https://docs.databricks.com/aws/en/business-semantics/metric-views/feature-availability"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Are metric views queryable from BI tools? (yes, with caveats)",
   "text": "Docs list Power BI, Tableau, Sigma, and other JDBC/ODBC tools, using MEASURE() through custom or native SQL. Tableau can also use BI compatibility mode from the Initial SQL field. The Power BI connector option for BI compatibility mode was removed (release note dated 2026-04-17). The Google Sheets connector (GA 2026-04-16) can query metric views.",
   "sources": [
    {
     "t": "Use metric views with external BI tools",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/bi-tools"
    },
    {
     "t": "Query metric views",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/query"
    },
    {
     "t": "Databricks platform release notes, April 2026",
     "u": "https://docs.databricks.com/aws/en/release-notes/product/2026/april"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Query limits for metric views",
   "text": "Every measure needs the MEASURE aggregate (agg is also allowed on DBR 18.1+). SELECT * is not allowed, and a metric view cannot be joined to other tables at query time; wrap it in a CTE first.",
   "sources": [
    {
     "t": "Query metric views",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/metric-views/query"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Business semantics, tags, and certification",
   "text": "Docs list metric views, domains, Pages, and certification/deprecation as Unity Catalog semantics components. The June 2026 summit blog calls Business Glossary 'Preview coming soon' and Domains Public Preview, and says tag propagation is Private Preview. Governed tags reached GA on 2026-04-02 and ABAC policies on governed tags are GA. The docs read do not say whether Pages is the same thing as the Business Glossary.",
   "sources": [
    {
     "t": "Unity Catalog semantics (docs)",
     "u": "https://docs.databricks.com/aws/en/uc-semantics/"
    },
    {
     "t": "What's new with Unity Catalog at Data + AI Summit 2026",
     "u": "https://www.databricks.com/blog/whats-new-unity-catalog-data-ai-summit-2026"
    },
    {
     "t": "Databricks platform release notes, April 2026",
     "u": "https://docs.databricks.com/aws/en/release-notes/product/2026/april"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Genie Agent curation features and limits",
   "text": "A Genie Agent takes up to 50 tables, views, or metric views. It holds up to 100 instructions (general text block, example SQL queries, SQL functions) and up to 200 knowledge store snippets (table descriptions, join relationships, SQL expressions). Trusted assets are example SQL queries and SQL functions that give verified answers; Benchmark APIs were Beta in March 2026.",
   "sources": [
    {
     "t": "Create and manage a Genie Agent",
     "u": "https://docs.databricks.com/aws/en/genie-agents/set-up"
    },
    {
     "t": "Tune Genie Agent quality",
     "u": "https://docs.databricks.com/aws/en/genie-agents/tune-quality"
    },
    {
     "t": "AI/BI and Genie One release notes 2026",
     "u": "https://docs.databricks.com/gcp/en/ai-bi/release-notes/2026"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Databricks managed MCP servers",
   "text": "Managed MCP servers live in the system.ai schema and run through Unity Gateway, at https://<workspace-hostname>/ai-gateway/mcp-services/<mcp-name>. Genie One MCP is GA (2026-09-22). The dbsql, sandbox, and web_search servers need the Unity Gateway beta. Older /api/2.0/mcp endpoints for AI Search, SQL, and UC functions bypass Unity Gateway.",
   "sources": [
    {
     "t": "Managed MCP servers",
     "u": "https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp"
    },
    {
     "t": "The Genie One MCP is now Generally Available",
     "u": "https://www.databricks.com/blog/genie-one-mcp-now-generally-available"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Agent Bricks, AI Search, Lakebase",
   "text": "Agent Bricks is now an umbrella page for Databricks AI capabilities (2026-03-27); Supervisor Agent is GA in select US regions (2026-02-10). AI Search reranker is GA (2025-12-08) and storage-optimized endpoints are GA (May 2026). Lakebase is described as managed Postgres with Unity Catalog synced tables and pgvector support; I found no GA statement, so its status is Unverified.",
   "sources": [
    {
     "t": "Databricks platform release notes, March 2026",
     "u": "https://docs.databricks.com/aws/en/release-notes/product/2026/march"
    },
    {
     "t": "Databricks platform release notes, February 2026",
     "u": "https://docs.databricks.com/aws/en/release-notes/product/2026/february"
    },
    {
     "t": "Databricks platform release notes, December 2025",
     "u": "https://docs.databricks.com/aws/en/release-notes/product/2025/december"
    },
    {
     "t": "Lakebase Postgres",
     "u": "https://docs.databricks.com/aws/en/oltp/"
    },
    {
     "t": "Lakebase product page",
     "u": "https://www.databricks.com/product/lakebase"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Claims not used",
   "text": "Third-party blogs (for example Atlan and consultancies) call Genie Ontology a 'self-improving knowledge graph' and describe 'gated public preview'. I did not use them; only Databricks docs and blogs are cited. The summit blog heading says 'Open Semantic Interchange' but the body names Apache Ossie (incubating), so I recorded Ossie only.",
   "sources": [
    {
     "t": "Unity Catalog Business Semantics: Now GA and Open Source",
     "u": "https://www.databricks.com/blog/redefining-semantics-data-layer-future-bi-and-ai"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Palantir Ontology structure",
   "text": "The Ontology has semantic elements (objects, properties, links) and kinetic elements (actions, functions, dynamic security). An object type is the schema of a real-world entity; a link type is a bidirectional relationship between two object types; an action type bundles edits and side effects. Interfaces add polymorphism over object types with a shared shape.",
   "sources": [
    {
     "t": "Foundry Ontology overview",
     "u": "https://www.palantir.com/docs/foundry/ontology/overview/"
    },
    {
     "t": "Core Ontology concepts",
     "u": "https://www.palantir.com/docs/foundry/ontology/core-concepts/"
    },
    {
     "t": "Link types overview",
     "u": "https://www.palantir.com/docs/foundry/object-link-types/link-types-overview/"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "How LLMs use the Palantir Ontology",
   "text": "AIP Logic is a no-code place to build LLM-powered functions; its Use LLM block reads Ontology data through tools such as Query objects, and Ontology edits can be applied automatically or staged for human review. AIP Chatbot Studio (previously AIP Agent Studio) builds chatbots on Ontology data and tools. Ontology MCP exposes object types, action types, and query functions to external agents as MCP tools. I did not find a public page on 'Ontology augmented generation'.",
   "sources": [
    {
     "t": "AIP Logic overview",
     "u": "https://www.palantir.com/docs/foundry/logic/overview/"
    },
    {
     "t": "AIP Chatbot Studio overview",
     "u": "https://www.palantir.com/docs/foundry/agent-studio/overview/"
    },
    {
     "t": "AIP features",
     "u": "https://www.palantir.com/docs/foundry/aip/aip-features/"
    },
    {
     "t": "Ontology MCP overview",
     "u": "https://www.palantir.com/docs/foundry/ontology-mcp/overview/"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Palantir Ontology and SQL warehouses",
   "text": "The Ontology sits on datasets, virtual tables, and models. Virtual tables point at tables in Databricks, Snowflake, BigQuery, S3, ADLS, and GCS (GA) without copying data, and objects can be created from them in Ontology Manager and Pipeline Builder. Databricks and Snowflake support compute pushdown in Python and Pipeline Builder. Ontology semantics are not stored in the warehouse.",
   "sources": [
    {
     "t": "Virtual tables",
     "u": "https://www.palantir.com/docs/foundry/data-integration/virtual-tables/"
    },
    {
     "t": "Foundry Ontology overview",
     "u": "https://www.palantir.com/docs/foundry/ontology/overview/"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Palantir syntax and status gaps",
   "text": "I found no public text syntax for defining the Ontology; it is built in Ontology Manager, so the snippet is null. Docs read do not state GA status for Ontology MCP; I marked it Unverified. Core Ontology, AIP Logic, and Chatbot Studio are marked GA because the docs show no preview label, not because a page says GA.",
   "sources": [
    {
     "t": "Ontology MCP overview",
     "u": "https://www.palantir.com/docs/foundry/ontology-mcp/overview/"
    },
    {
     "t": "Foundry Ontology overview",
     "u": "https://www.palantir.com/docs/foundry/ontology/overview/"
    }
   ],
   "from": "databricks.json"
  },
  {
   "topic": "Does BigQuery have a native semantic or metrics object in 2026?",
   "text": "Not found. The closest object is MEASURE inside a property graph (Preview, Apr 22, 2026), queried through GRAPH_EXPAND and AGG, and Looker's derived_analytic_model targets BigQuery Graph (Preview, May 2026). No semantic view or metric view object appears in the BigQuery release notes or docs I fetched.",
   "sources": [
    {
     "t": "Graph measures",
     "u": "https://docs.cloud.google.com/bigquery/docs/graph-measures"
    },
    {
     "t": "BigQuery release notes",
     "u": "https://docs.cloud.google.com/bigquery/docs/release-notes"
    },
    {
     "t": "In-database analytic models",
     "u": "https://docs.cloud.google.com/looker/docs/analytic-models"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Graph measures stage",
   "text": "Release notes label graph measures Preview on Apr 22, 2026. BigQuery Graph itself went GA on Aug 31, 2026, but I found no note that says measures are GA, so treat measures as Preview.",
   "sources": [
    {
     "t": "BigQuery release notes",
     "u": "https://docs.cloud.google.com/bigquery/docs/release-notes"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Product renames",
   "text": "Dataplex Universal Catalog became Knowledge Catalog on Apr 10, 2026 (API, CLI, and IAM names unchanged). Golden queries are now called verified queries. Looker Studio is now Data Studio and BigLake is now Google Cloud Lakehouse (Apr 2026). Gen AI Toolbox for Databases is now MCP Toolbox for Databases (repo mcp-toolbox). Open Semantic Interchange is now Apache Ossie (incubating).",
   "sources": [
    {
     "t": "About metadata in Knowledge Catalog",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/catalog-overview"
    },
    {
     "t": "BigQuery release notes",
     "u": "https://docs.cloud.google.com/bigquery/docs/release-notes"
    },
    {
     "t": "Conversational analytics in BigQuery",
     "u": "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
    },
    {
     "t": "MCP Toolbox for Databases (GitHub)",
     "u": "https://github.com/googleapis/genai-toolbox"
    },
    {
     "t": "Apache Ossie repo",
     "u": "https://github.com/open-semantic-interchange/OSI"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Conversational Analytics API timeline",
   "text": "Private Preview Jun 5, 2025, Public Preview Aug 25, 2025 (BigQuery structured context with example question and SQL pairs), GA for BigQuery and Looker Jun 23, 2026. Database sources (AlloyDB, Cloud SQL, Spanner) were Preview as of Mar 2026. The API release notes list no MCP entry.",
   "sources": [
    {
     "t": "Conversational Analytics API release notes",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/release-notes"
    },
    {
     "t": "Conversational Analytics API overview",
     "u": "https://docs.cloud.google.com/gemini/docs/conversational-analytics-api/overview"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Agent context limits and glossary use",
   "text": "A BigQuery data agent holds up to 100 knowledge sources (tables, views, graphs, UDFs), per the current doc. A Google codelab says 50, so the codelab is older. With a Knowledge Catalog glossary, an agent imports up to 10 terms per table.",
   "sources": [
    {
     "t": "Conversational analytics in BigQuery",
     "u": "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
    },
    {
     "t": "Create business glossaries and terms",
     "u": "https://docs.cloud.google.com/dataplex/docs/create-glossary"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Knowledge Catalog glossary stage is unverified",
   "text": "Release notes list the business glossary as Preview on Jan 30, 2023 and I found no GA entry. The glossary doc page shows no stage label. Custom glossary terms and Knowledge Catalog term import for BigQuery agents were Preview on Feb 24, 2026.",
   "sources": [
    {
     "t": "Knowledge Catalog release notes",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/release-notes"
    },
    {
     "t": "BigQuery release notes",
     "u": "https://docs.cloud.google.com/bigquery/docs/release-notes"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Knowledge Catalog lookupContext",
   "text": "The lookupContext method returns an LLM-ready bundle of context for data assets. It is Preview since Jun 4, 2026. Remote MCP servers for Knowledge Catalog data products and lineage are Preview (May 2026).",
   "sources": [
    {
     "t": "Knowledge Catalog release notes",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/release-notes"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "BigQuery Graph edition change",
   "text": "Core graph processing needs an Enterprise or Enterprise Plus reservation. Existing allowlisted users can keep Standard edition or on-demand billing until Apr 26, 2027. The BigQuery MCP execute_sql_readonly tool does not support GQL.",
   "sources": [
    {
     "t": "BigQuery release notes",
     "u": "https://docs.cloud.google.com/bigquery/docs/release-notes"
    },
    {
     "t": "Use the BigQuery remote MCP server",
     "u": "https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Vector search stage detail",
   "text": "The VECTOR_SEARCH reference marks the single-query syntax and hybrid search as Preview and does not label the batch syntax. Release notes list TreeAH vector indexes GA (May 2025). Hybrid search was disabled on Jul 9, 2026 and restored Aug 3, 2026.",
   "sources": [
    {
     "t": "BigQuery search functions",
     "u": "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions"
    },
    {
     "t": "BigQuery release notes",
     "u": "https://docs.cloud.google.com/bigquery/docs/release-notes"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Looker MCP: managed server versus MCP Toolbox",
   "text": "The Looker-managed MCP server entered Preview on May 27, 2026 for Looker-hosted instances only, with OAuth 2.1 and no fine-grained scopes. For customer-hosted Looker, Google points to the open-source MCP Toolbox, which Google describes as as-is and not a supported Google Cloud product.",
   "sources": [
    {
     "t": "Looker-managed MCP server",
     "u": "https://docs.cloud.google.com/looker/docs/r/mcp"
    },
    {
     "t": "Connect an IDE to Looker using MCP Toolbox",
     "u": "https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox"
    },
    {
     "t": "Looker release notes",
     "u": "https://docs.cloud.google.com/looker/docs/release-notes"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Looker Conversational Analytics timeline",
   "text": "Preview Feb 24, 2025. GA Nov 12, 2025 for Looker 25.18 and later. Verified queries Preview Jul 30, 2026 and GA Aug 28, 2026. Dashboard data agents GA Oct 8, 2026. Agentic workflows (triggered and scheduled) and publishing to Gemini Enterprise are Preview.",
   "sources": [
    {
     "t": "Looker release notes",
     "u": "https://docs.cloud.google.com/looker/docs/release-notes"
    },
    {
     "t": "Conversational Analytics overview (Looker)",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "How Looker agents read LookML",
   "text": "Agents read field labels, descriptions, and synonyms from Explores and ignore hidden fields. Looker, not the model, composes the SQL, and access grants and user attributes apply. The synonyms parameter page shows no stage label and requires the legacy LookML runtime to be off.",
   "sources": [
    {
     "t": "Best practices for configuring Conversational Analytics with Looker",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices"
    },
    {
     "t": "Conversational Analytics overview (Looker)",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    },
    {
     "t": "LookML synonyms parameter",
     "u": "https://docs.cloud.google.com/looker/docs/reference/param-field-synonyms"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Looker semantic layer opened to other tools",
   "text": "The Open SQL Interface was GA on Aug 14, 2024 and backs the Tableau connector (GA Aug 14, 2024; Tableau Cloud Dec 2025). The Power BI connector was GA on Jun 14, 2023. Connected Sheets and Data Studio also read Looker. I could not confirm the current status of Looker Modeler; it does not appear in the Looker release notes or the Next '26 post I fetched.",
   "sources": [
    {
     "t": "Looker release notes",
     "u": "https://docs.cloud.google.com/looker/docs/release-notes"
    },
    {
     "t": "Looker-Tableau BI Connector",
     "u": "https://docs.cloud.google.com/looker/docs/tableau-connector?hl=en"
    },
    {
     "t": "Looker updates for agentic BI at Next '26",
     "u": "https://cloud.google.com/blog/products/business-intelligence/looker-updates-for-agentic-bi-at-next26"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "In-database analytic models link Looker to BigQuery Graph",
   "text": "Since May 27, 2026 (Preview) Looker can reference BigQuery Graph or Snowflake semantic views, or generate them from an Explore with derived_analytic_model. Views become node tables, foreign_key joins become edge tables, and dimensions and measures become node properties. Needs BigQuery or Snowflake, primary keys, and acyclic joins.",
   "sources": [
    {
     "t": "In-database analytic models",
     "u": "https://docs.cloud.google.com/looker/docs/analytic-models"
    },
    {
     "t": "derived_analytic_model parameter",
     "u": "https://docs.cloud.google.com/looker/docs/reference/param-view-derived-analytic-model"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Looker and open semantic standards",
   "text": "The Apache Ossie README does not mention Google, Looker, or LookML, and the apache/ossie-converters directory list has no LookML or BigQuery converter (it lists Cube, Databricks, dbt, Hex, Omni, Salesforce, Snowflake, ThoughtSpot and others). The Next '26 post mentions MCP but not OSI.",
   "sources": [
    {
     "t": "Apache Ossie repo",
     "u": "https://github.com/open-semantic-interchange/OSI"
    },
    {
     "t": "Ossie converters repo",
     "u": "https://github.com/apache/ossie-converters"
    },
    {
     "t": "Looker updates for agentic BI at Next '26",
     "u": "https://cloud.google.com/blog/products/business-intelligence/looker-updates-for-agentic-bi-at-next26"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Looker BI agents and Next '26 announcements",
   "text": "At Next '26 (Apr 23, 2026) Google announced Dashboard Agents, agentic workflows, a managed MCP server, a VS Code extension with a LookML AI agent, and Knowledge Catalog integration. Later release notes show dashboard agents GA (Oct 8, 2026) and the VS Code extension GA (Sep 10, 2026), while agentic workflows and the MCP server are still Preview.",
   "sources": [
    {
     "t": "Looker updates for agentic BI at Next '26",
     "u": "https://cloud.google.com/blog/products/business-intelligence/looker-updates-for-agentic-bi-at-next26"
    },
    {
     "t": "Looker release notes",
     "u": "https://docs.cloud.google.com/looker/docs/release-notes"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "Items not verified",
   "text": "MCP Toolbox for Databases support status (README gives v1.x, Google docs say as-is). BigQuery data canvas stage (page labels only the chat assistant Preview, Apr 2025). Looker Modeler status. The VECTOR_SEARCH original GA date. Web search quota ran out partway, so these were not chased further.",
   "sources": [
    {
     "t": "MCP Toolbox for Databases (GitHub)",
     "u": "https://github.com/googleapis/genai-toolbox"
    },
    {
     "t": "BigQuery data canvas",
     "u": "https://docs.cloud.google.com/bigquery/docs/data-canvas"
    }
   ],
   "from": "google.json"
  },
  {
   "topic": "semantic layer",
   "text": "A business-facing layer over physical data that names tables and columns as business terms; Business Objects filed a patent for the idea in 1991. In 2026 vendors use it for governed metrics, dimensions, and joins (dbt Semantic Layer, Snowflake semantic views), or, at Stardog, for an ontology of concepts, rules, and constraints. It is the broad umbrella; metrics layer, semantic model, and ontology are narrower or alternative parts of it.",
   "sources": [
    {
     "t": "Wikipedia: Semantic layer",
     "u": "https://en.wikipedia.org/wiki/Semantic_layer"
    },
    {
     "t": "dbt docs: dbt Semantic Layer",
     "u": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl"
    },
    {
     "t": "Snowflake docs: semantic views overview",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/overview"
    },
    {
     "t": "Stardog: Why every AI system needs a semantic layer",
     "u": "https://www.stardog.com/blog/ai-chessboard-every-ai-system-needs-semantic-layer/"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "metrics layer (metrics store)",
   "text": "A central definition of how each metric is calculated, placed between the warehouse and BI tools, that returns SQL for a metric request (Benn Stancil, April 2021). It covers measures and the dimensions to slice them, not entities, rules, or glossary terms, so it is narrower than a semantic layer. Today it ships inside products such as dbt MetricFlow and Databricks metric views; I found no primary source that defines the label 'metrics store'.",
   "sources": [
    {
     "t": "Benn Stancil: The metrics layer (Apr 22, 2021)",
     "u": "https://benn.substack.com/p/metrics-layer"
    },
    {
     "t": "dbt docs: dbt Semantic Layer",
     "u": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl"
    },
    {
     "t": "Databricks docs: metric views",
     "u": "https://docs.databricks.com/aws/en/metric-views/"
    },
    {
     "t": "Wikipedia: Semantic layer (lists metrics layer and headless BI as names)",
     "u": "https://en.wikipedia.org/wiki/Semantic_layer"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "ontology",
   "text": "A formal, explicit specification of a shared conceptualization of a domain: classes, properties, relations, and constraints (Gruber, 1993). W3C describes OWL 2 ontologies as formalized vocabularies of terms. It is the schema level, while a knowledge graph is the data that uses it; RelationalAI says ontologies add entity identity, relationships with multiplicity, and constraints beyond the dimensional semantics of metrics.",
   "sources": [
    {
     "t": "Wikipedia: Ontology (information science)",
     "u": "https://en.wikipedia.org/wiki/Ontology_(information_science)"
    },
    {
     "t": "W3C: OWL 2 overview",
     "u": "https://www.w3.org/TR/owl2-overview/"
    },
    {
     "t": "RelationalAI: From dimensions to decisions (Jun 10, 2026)",
     "u": "https://www.relational.ai/post/from-dimensions-to-decisions-what-ontologies-give-ai-agents-and-how-osi-makes-them-portable"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "knowledge graph",
   "text": "A graph of data meant to accumulate and convey knowledge of the real world, with nodes for entities and edges for relations (Hogan et al., ACM Computing Surveys 2021); Google popularized the term in 2012 as 'things, not strings'. Neo4j adds that a knowledge graph is a graph plus meaning and organizing principles such as taxonomies or ontologies. It models entities and facts rather than metric definitions, and it holds instance data where an ontology holds the schema.",
   "sources": [
    {
     "t": "Hogan et al.: Knowledge Graphs (arXiv 2003.02320)",
     "u": "https://arxiv.org/abs/2003.02320"
    },
    {
     "t": "Google: Introducing the Knowledge Graph (May 16, 2012)",
     "u": "https://blog.google/products/search/introducing-knowledge-graph-things-not/"
    },
    {
     "t": "Neo4j: Graphs, knowledge graphs, and context graphs (Sep 2026)",
     "u": "https://neo4j.com/blog/agentic-ai/context-graph-vs-knowledge-graph/"
    },
    {
     "t": "W3C: RDF 1.1 Primer",
     "u": "https://www.w3.org/TR/rdf11-primer/"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "context graph",
   "text": "Current usage comes from the Foundation Capital essay 'AI's trillion-dollar opportunity: Context graphs' by Jaya Gupta and Ashu Garg. It defines a context graph as 'a living record of decision traces stitched across entities and time so precedent becomes searchable', not the model's chain-of-thought, and never mentions knowledge graphs or ontologies. Exact original date is unverified: the page metadata shows Oct 23, 2026, and the essay cites a post whose URL carries 121225, so it was written after mid-December 2025.",
   "sources": [
    {
     "t": "Foundation Capital: AI's trillion-dollar opportunity: Context graphs",
     "u": "https://foundationcapital.com/ideas/context-graphs-ais-trillion-dollar-opportunity"
    },
    {
     "t": "Foundation Capital ideas index (lists authors Jaya Gupta, Ashu Garg)",
     "u": "https://foundationcapital.com/ideas/"
    },
    {
     "t": "Foundation Capital: Jaya Gupta profile",
     "u": "https://foundationcapital.com/member/jaya-gupta/"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "context graph (vendor usage in 2026)",
   "text": "Vendors use the term in different ways. Atlan and Neo4j follow the decision-trace idea (Atlan: 'a specialized knowledge graph that captures decision traces'; Neo4j: a knowledge graph plus the agent's conversations, tool calls, decisions, and outcomes), while Google's Knowledge Catalog (renamed from Dataplex Universal Catalog on 10 Apr 2026) calls its metadata metamodel an 'active context graph'. RelationalAI and Stardog prefer 'context layer'.",
   "sources": [
    {
     "t": "Atlan: context graph",
     "u": "https://atlan.com/context-graph/"
    },
    {
     "t": "Neo4j: Agentic GraphRAG (Oct 2026)",
     "u": "https://neo4j.com/blog/agentic-ai/agentic-graphrag/"
    },
    {
     "t": "Google Cloud docs: Knowledge Catalog (formerly Dataplex Universal Catalog)",
     "u": "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
    },
    {
     "t": "RelationalAI: Beyond context (Apr 15, 2026)",
     "u": "https://www.relational.ai/post/beyond-context-closing-the-ai-value-gap"
    },
    {
     "t": "Stardog: One year at Stardog, enterprise context layer (Oct 6, 2026)",
     "u": "https://www.stardog.com/blog/stardog-ceo-importance-enterprise-context-layer-ai/"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "data catalog",
   "text": "An inventory of an organization's data assets with metadata that helps people find, understand, manage, and access data (IBM). It is a discovery and governance tool: it holds descriptions, lineage, and glossary links, but it does not define queryable metrics like a semantic layer. Catalogs now add AI context; Google renamed Dataplex Universal Catalog to Knowledge Catalog in April 2026, and data.world builds its catalog on a knowledge graph.",
   "sources": [
    {
     "t": "IBM: What is a data catalog",
     "u": "https://www.ibm.com/think/topics/data-catalog"
    },
    {
     "t": "Google Cloud docs: Knowledge Catalog overview",
     "u": "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
    },
    {
     "t": "data.world product page",
     "u": "https://data.world/product/"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "business glossary",
   "text": "A governed vocabulary of business terms, grouped in categories, with owners and relations such as synonym and related term, that can link to data assets and columns (Google Knowledge Catalog docs). It records meaning, not query logic, so it differs from a semantic layer. It is also business-facing, where a data dictionary describes dataset fields, types, and allowed values (IBM).",
   "sources": [
    {
     "t": "Google Cloud docs: create a business glossary",
     "u": "https://docs.cloud.google.com/dataplex/docs/create-glossary"
    },
    {
     "t": "IBM: What is a data catalog (data dictionary comparison)",
     "u": "https://www.ibm.com/think/topics/data-catalog"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "semantic model",
   "text": "The artifact that stores a semantic layer's definitions, and the word has no single meaning. A Power BI semantic model is an Analysis Services tabular model with data preparation queries, relationships, and calculations; Snowflake used 'semantic model' for stage-based YAML files, now called legacy and replaced by schema-level semantic views. Stardog uses 'semantic models (ontologies)'.",
   "sources": [
    {
     "t": "Microsoft Learn: Semantic models in the Power BI service",
     "u": "https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-understand"
    },
    {
     "t": "Snowflake docs: YAML specification for semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/semantic-view-yaml-spec"
    },
    {
     "t": "Stardog: The Semantic Control Plane (Jun 15, 2026)",
     "u": "https://www.stardog.com/blog/semantic-control-plane-building-trust-enterprise-ai/"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "GraphRAG",
   "text": "Retrieval-augmented generation that connects facts in a graph instead of scattering them across isolated text chunks, so answers can follow relationships. Neo4j's agentic variant lets an AI agent choose between vector search, graph traversal, and schema inspection at each step.",
   "sources": [
    {
     "t": "Neo4j: Agentic GraphRAG (Oct 2026)",
     "u": "https://neo4j.com/blog/agentic-ai/agentic-graphrag/"
    },
    {
     "t": "neo4j-graphrag for Python docs",
     "u": "https://neo4j.com/docs/neo4j-graphrag-python/current/"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "Open Semantic Interchange (OSI) / Apache Ossie",
   "text": "A vendor-neutral JSON and YAML spec for semantic layer constructs (datasets, metrics, dimensions, relationships, context), launched by Snowflake and partners on 23 Sep 2025; v0.1 went live under Apache 2.0 on 27 Jan 2026. On 10 Jul 2026 the project was renamed Apache Ossie (incubating). RelationalAI is a launch partner; Stardog, Neo4j, and data.world do not appear on the partner lists I read.",
   "sources": [
    {
     "t": "Apache Ossie (OSI) updates",
     "u": "https://ossie.apache.org/updates/"
    },
    {
     "t": "Snowflake: OSI initiative expands partners (Nov 13, 2025)",
     "u": "https://www.snowflake.com/en/blog/osi-initiative-expands-partners/"
    },
    {
     "t": "Snowflake: OSI specs finalized (Jan 27, 2026)",
     "u": "https://www.snowflake.com/en/blog/open-semantic-interchanges-specs-finalized/"
    },
    {
     "t": "dbt: The OSI spec updates (Jan 29, 2026)",
     "u": "https://www.getdbt.com/blog/the-osi-spec-updates"
    },
    {
     "t": "Ossie repository",
     "u": "https://github.com/open-semantic-interchange/OSI"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "data.world acquisition by ServiceNow",
   "text": "ServiceNow signed a definitive agreement to buy data.world in May 2025 (reported 7 May at Knowledge 2025), and its quarterly filing says it completed the acquisition in July 2025. The exact closing day and price are not disclosed; ServiceNow calls the deal not material. data.world's site says 'data.world is now part of ServiceNow!' and that data.world Enterprise continues unchanged.",
   "sources": [
    {
     "t": "ServiceNow Form 10-Q, quarter ended Sep 30, 2025",
     "u": "https://www.sec.gov/Archives/edgar/data/1373715/000137371525000309/now-20250930.htm"
    },
    {
     "t": "NowBen: ServiceNow acquires data.world (May 9, 2025)",
     "u": "https://nowben.com/servicenow-acquires-data-world-just-months-after-logik-ai-and-moveworks-purchases/"
    },
    {
     "t": "data.world",
     "u": "https://data.world/"
    }
   ],
   "from": "knowledge-graphs.json"
  },
  {
   "topic": "Fabric IQ and ontology: existence, announcement, status",
   "text": "Fabric IQ and its Ontology item were announced at Ignite in November 2025, with ontology in public preview. Microsoft Learn (pages updated 2026-07 to 2026-10) still labels the IQ workload and ontology Preview, and says the old ontology experience retires on 2027-01-31. Microsoft Fabric blog posts from Build (June 2026) describe Fabric IQ, Graph and Operations agents as GA with ontology still in Preview; I could not fetch those posts (HTTP 403) and relied on search snippets.",
   "sources": [
    {
     "t": "What is Fabric IQ?",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/overview"
    },
    {
     "t": "What is ontology (preview)?",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/ontology/overview"
    },
    {
     "t": "Fabric IQ: The Semantic Foundation for Enterprise AI",
     "u": "https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-iq-the-semantic-foundation-for-enterprise-ai/5172473"
    },
    {
     "t": "Fabric IQ: The semantic layer powering trusted AI agents at enterprise scale",
     "u": "https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-iq-the-semantic-layer-powering-trusted-ai-agents-at-enterprise-scale/5190739"
    },
    {
     "t": "Fabric IQ Is GA. Your Ontology Isn't.",
     "u": "https://community.fabric.microsoft.com/blog/fiq_comm_blog/fabric-iq-is-ga-your-ontology-isnt-heres-what-that-actually-means-/5364087"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Ontology details that matter for NL-to-SQL builders",
   "text": "Ontology stores definitions and bindings; it is not a query engine, and the bound source (semantic model, lakehouse, eventhouse, warehouse, SQL database, mirrored database) runs the query. DAX measures from a semantic model appear as metrics, rules are natural-language text, and graph execution is an opt-in materialization. A data agent can mount an ontology (Preview) and then writes source-native SQL, KQL or DAX.",
   "sources": [
    {
     "t": "What is ontology (preview)?",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/ontology/overview"
    },
    {
     "t": "Add a data source to Data Agent",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/data-agent-add-datasources"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Three meanings of Fabric IQ",
   "text": "Fabric IQ names the workload (ontology, semantic model, graph, data agent, operations agent, plan), a remote MCP server for Power BI reports and semantic models, and a Copilot mode in the Power BI report viewer. Fabric IQ MCP does not support ontologies or data agents; a separate Ontology MCP server (Preview) and a data-agent MCP endpoint exist. In the report viewer, Copilot does not return verified answers when Fabric IQ is on.",
   "sources": [
    {
     "t": "Get started with the Fabric IQ MCP server",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/connectors/fabric-iq-mcp"
    },
    {
     "t": "Ask data questions with Copilot and Fabric IQ",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question"
    },
    {
     "t": "Use Ontology MCP Server (Preview)",
     "u": "https://learn.microsoft.com/en-us/fabric/iq/ontology/how-to-use-ontology-mcp-server"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Power BI MCP servers: renames and replacements",
   "text": "Current docs describe one Power BI Authoring MCP server with hosted (Preview) and local (GA) options; earlier coverage called the local server the Power BI Modeling MCP server, and the npm package is still named powerbi-modeling-mcp. The earlier hosted query endpoint (api.fabric.microsoft.com/v1/mcp/powerbi) is now called the Power BI Consumption MCP server and is kept only for existing integrations; Microsoft points consumption to Fabric IQ MCP (https://fabriciq.svc.cloud.microsoft/v1/mcp/fabriciq). Fabric also lists remote MCP servers for Core, Data Warehouse (T-SQL), Eventhouse (KQL), Activator and operations agent, plus local servers for development and Real-Time Intelligence; I did not check the status label of each.",
   "sources": [
    {
     "t": "Overview of the Power BI MCP servers",
     "u": "https://learn.microsoft.com/en-us/power-bi/developer/mcp/mcp-servers-overview"
    },
    {
     "t": "Power BI Authoring MCP server",
     "u": "https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp"
    },
    {
     "t": "Choose a Microsoft Fabric MCP server",
     "u": "https://learn.microsoft.com/en-us/rest/api/fabric/articles/mcp-servers/fabric-mcp-servers-list"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Power BI Q&A retirement and linguistic schema",
   "text": "Learn pages say Q&A experiences go away in February 2027, but the data agent semantic model guide says Q&A retires in December 2026. Prep data for AI and Copilot data questions still require Q&A enabled on the model, and the data agent value-index feature needs the same setting until a replacement ships. Synonyms and linguistic relationships are stored in the model's linguistic metadata (a cultures file in TMDL).",
   "sources": [
    {
     "t": "Intro to Q&A tooling to train Power BI Q&A (preview)",
     "u": "https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-tooling-intro"
    },
    {
     "t": "Semantic model best practices for data agent",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/semantic-model-best-practices"
    },
    {
     "t": "TMDL overview",
     "u": "https://learn.microsoft.com/en-us/analysis-services/tmdl/tmdl-overview"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Fabric data agent: status conflict and what it reads",
   "text": "The data agent concept page (updated 2026-10-21) calls it generally available, but the Release status table (updated 2026-07) lists Data agent under Data Science as Preview; a secondary source puts GA at FabCon in March 2026, which I did not confirm. Sources can be up to five lakehouses, warehouses, KQL databases, semantic models, mirrored databases, ontologies or (Preview) graph and Azure AI Search. For semantic models, the DAX tool uses only model metadata and Prep data for AI settings and ignores data agent level instructions; Topics and schema object descriptions for SQL sources are Preview on the preview runtime.",
   "sources": [
    {
     "t": "Fabric data agent concepts",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent"
    },
    {
     "t": "Release status of AI and Copilot in Fabric",
     "u": "https://learn.microsoft.com/en-us/fabric/fundamentals/copilot-ai-feature-state"
    },
    {
     "t": "Add a data source to Data Agent",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/data-agent-add-datasources"
    },
    {
     "t": "Semantic model best practices for data agent",
     "u": "https://learn.microsoft.com/en-us/fabric/data-science/semantic-model-best-practices"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Copilot in Fabric: NL-to-SQL status by workload",
   "text": "The Release status table lists Copilot for Data Warehouse SQL generation as Preview, Copilot for SQL database in Fabric as GA, and Power BI Copilot items (ask questions about your data, DAX help, suggest linguistic synonyms, measure descriptions) as GA. The Azure SQL AI page still labels Copilot in Fabric SQL database as preview, so the two pages disagree. The Copilot overview also says Fabric data agents are 'formerly known as Data agent'; I could not tell what that rename covers.",
   "sources": [
    {
     "t": "Release status of AI and Copilot in Fabric",
     "u": "https://learn.microsoft.com/en-us/fabric/fundamentals/copilot-ai-feature-state"
    },
    {
     "t": "Overview of Copilot in Fabric",
     "u": "https://learn.microsoft.com/en-us/fabric/fundamentals/copilot-fabric-overview"
    },
    {
     "t": "Intelligent Applications and AI - Azure SQL Database",
     "u": "https://learn.microsoft.com/en-us/azure/azure-sql/database/ai-artificial-intelligence-intelligent-applications?view=azuresql"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Graph in Microsoft Fabric",
   "text": "The Fabric blog post 'Graph in Fabric (Generally Available)' announces GA around Build 2026; I could not fetch it (HTTP 403) and saw it only in search results. Learn describes a labeled property graph over OneLake with GQL (ISO/IEC 39075) and says RDF is not supported. The graph as a data agent source (NL2GQL) is still labeled Preview, and a search snippet of the GQL Query HTTP API page says that API is beta.",
   "sources": [
    {
     "t": "What is graph in Microsoft Fabric?",
     "u": "https://learn.microsoft.com/en-us/fabric/graph/overview"
    },
    {
     "t": "Labeled Property Graph (LPG) in Fabric",
     "u": "https://learn.microsoft.com/en-us/fabric/graph/graph-data-models"
    },
    {
     "t": "Graph in Fabric (Generally Available)",
     "u": "https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/graph-in-fabric-generally-available/5190748"
    },
    {
     "t": "GQL Query HTTP API Reference for graph in Microsoft Fabric",
     "u": "https://learn.microsoft.com/en-us/fabric/graph/gql-query-api"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Purview Unified Catalog business glossary",
   "text": "Unified Catalog glossary terms sit under governance domains, can carry synonyms, acronyms and related terms, and can carry policies that follow the term to data products and assets. Linking terms to assets and columns is labeled preview, and asset curation requires migrating classic terms first. I found no Microsoft doc where Copilot in Power BI, the data agent or the ontology reads Unified Catalog terms, so treat the glossary as governance metadata, not AI context.",
   "sources": [
    {
     "t": "Glossary terms in Unified Catalog",
     "u": "https://learn.microsoft.com/en-us/purview/unified-catalog-glossary-terms"
    },
    {
     "t": "Search for and manage data assets in Unified Catalog",
     "u": "https://learn.microsoft.com/en-us/purview/unified-catalog-data-assets-search"
    },
    {
     "t": "Microsoft Purview Data Governance glossary",
     "u": "https://learn.microsoft.com/en-us/purview/data-governance-glossary"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Open Semantic Interchange renamed Apache Ossie",
   "text": "Search results show the Open Semantic Interchange (OSI) effort now appears as Apache Ossie (incubating). A Snowflake engineering blog dated 2026-09-30 describes an initial open source converter between Power BI/Fabric semantic models and Ossie, with DAX added as a recognized expression language; the post does not state a preview or GA status. A Fabric community post titled 'Microsoft + Snowflake's commitment to Apache Ossie' exists, but I did not open it.",
   "sources": [
    {
     "t": "Breaking Down Semantic Silos: Microsoft Ecosystem Support Comes to Apache Ossie",
     "u": "https://www.snowflake.com/en/blog/engineering/apache-ossie-microsoft-ecosystem-support/"
    },
    {
     "t": "Open Semantic Interchange: A New AI Standard (Apache Ossie site)",
     "u": "https://ossie.apache.org/updates/open-semantic-interchange-a-new-ai-standard/"
    },
    {
     "t": "Microsoft and Google to contribute to the Apache Ossie project (Techzine)",
     "u": "https://www.techzine.eu/news/data-management/144719/microsoft-and-google-to-contribute-to-the-apache-ossie-project/"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "SQL Server 2025: no native semantic layer object",
   "text": "SQL Server 2025 went generally available on 2025-11-18 with the vector type, text chunking, embeddings through CREATE EXTERNAL MODEL, and DiskANN indexing. I found no semantic model, metric, dimension or ontology object in the SQL Server 2025 or Azure SQL docs; this is an absence in what I reviewed, not a proof. The closest native items are the AGENTS.md and CONSTITUTION.md extended properties, which only GitHub Copilot in SSMS is documented to read.",
   "sources": [
    {
     "t": "SQL Server 2025 is Now Generally Available",
     "u": "https://techcommunity.microsoft.com/blog/sqlserver/sql-server-2025-is-now-generally-available/4470570"
    },
    {
     "t": "Database Instructions - GitHub Copilot in SSMS",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/database-instructions"
    },
    {
     "t": "CREATE EXTERNAL MODEL (Transact-SQL)",
     "u": "https://learn.microsoft.com/en-us/sql/t-sql/statements/create-external-model-transact-sql"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "GitHub Copilot in SSMS: name, status and dates",
   "text": "SSMS release notes show GitHub Copilot in SSMS GA in 22.4.1 (2026-03-18), database instructions introduced as Preview in 22.3.0 (2026-02-10), Agent mode Preview in 22.7.0 (2026-06-09) and GA in 22.10.2 (2026-09-28). Doc paths moved from /ssms/copilot/ to /ssms/github-copilot/, and older page titles say 'Copilot in SQL Server Management Studio'. The database instructions page has no preview label now, but no release note states a separate GA for that feature.",
   "sources": [
    {
     "t": "Release Notes for SQL Server Management Studio 22",
     "u": "https://learn.microsoft.com/en-us/ssms/release-notes-22"
    },
    {
     "t": "What Is GitHub Copilot in SQL Server Management Studio?",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/overview"
    },
    {
     "t": "MCP Servers - GitHub Copilot in SSMS",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/mcp-servers"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Copilot in Azure SQL Database: status conflict",
   "text": "The Azure SQL AI page says Copilot skills in Azure SQL Database are in preview for a limited number of early adopters, while a Tech Community post titled 'Announcing General Availability of Azure SQL Database Capabilities for Microsoft Copilot in Azure' exists (I could read only its title). The Copilot in Azure overview lists generating T-SQL from questions as a developer use case without a status label. I could not confirm whether NL-to-T-SQL is available in the portal today.",
   "sources": [
    {
     "t": "Intelligent Applications and AI - Azure SQL Database",
     "u": "https://learn.microsoft.com/en-us/azure/azure-sql/database/ai-artificial-intelligence-intelligent-applications?view=azuresql"
    },
    {
     "t": "Microsoft Copilot in Azure with Azure SQL Database Overview",
     "u": "https://learn.microsoft.com/en-us/azure/azure-sql/copilot/copilot-azure-sql-overview"
    },
    {
     "t": "Announcing General Availability of Azure SQL Database Capabilities for Microsoft Copilot in Azure",
     "u": "https://techcommunity.microsoft.com/blog/azuresqlblog/announcing-general-availability-of-azure-sql-database-capabilities-for-microsoft/4403518"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "SQL MCP Server design choice",
   "text": "SQL MCP Server is part of open source Data API builder (version 1.7 and later; 2.0 is current), is self-hosted, and states that it intentionally does not support NL2SQL. It exposes seven DML tools over configured entities, so entity description text is the only semantic context an agent gets, and it covers data operations rather than schema changes. The docs carry no preview or GA label.",
   "sources": [
    {
     "t": "SQL MCP Server overview",
     "u": "https://learn.microsoft.com/en-us/azure/data-api-builder/mcp/overview"
    }
   ],
   "from": "microsoft.json"
  },
  {
   "topic": "Research limits",
   "text": "WebFetch could not reach oracle.com, docs.oracle.com or teradata.com (DNS failure), so most facts come from search result summaries. Only the Teradata MCP GitHub page was read directly. Treat all rows as lower confidence than the Snowflake file.",
   "sources": [
    {
     "t": "Teradata MCP Server (GitHub)",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    }
   ],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Oracle MCP server GA date",
   "text": "The May 19, 2026 date comes from the Japanese translation of the Oracle announcement blog, as reported by a search summary. I did not read the English post. Oracle docs say it is for Autonomous AI Database, 26ai and 19c.",
   "sources": [
    {
     "t": "Announcing the Oracle Autonomous AI Database MCP Server",
     "u": "https://blogs.oracle.com/machinelearning/announcing-the-oracle-autonomous-ai-database-mcp-server"
    },
    {
     "t": "About MCP Server",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/about-mcp-server.html"
    }
   ],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Oracle rename",
   "text": "Oracle docs now say Autonomous AI Database and Oracle AI Database 26ai. Earlier names were Autonomous Database and Database 23ai. I saw the new names in search results but not a rename announcement.",
   "sources": [
    {
     "t": "Oracle AI Vector Search overview",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/overview-ai-vector-search.html"
    }
   ],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Teradata 2026 platform naming",
   "text": "Teradata announced the Autonomous Knowledge Platform on 2026-05-07, with Teradata AI Studio, Tera and Tera Agents. GA on Teradata Cloud was expected in Q3 2026. An analyst note ties it to the January 2026 Enterprise AgentStack launch; I did not verify AgentStack details.",
   "sources": [
    {
     "t": "Introducing the Teradata Autonomous Knowledge Platform",
     "u": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    },
    {
     "t": "Teradata Moves From AgentStack to Autonomous Knowledge Platform",
     "u": "https://www.softwarereviews.com/vendor-technology-notes/teradata-moves-from-agentstack-to-autonomous-knowledge-platform"
    }
   ],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Claims not verified",
   "text": "Not verified: Select AI use of analytic views, Select AI annotation GA status, Oracle verified queries, Teradata Enterprise Vector Store GA, Teradata commercial MCP server release, Teradata graph features, Teradata governance details.",
   "sources": [],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Status convention used in this file",
   "text": "Unverified in an artifact means the vendor docs give no status label for a hosted feature. Open-source projects with versioned releases and no pre-release marker are marked GA.",
   "sources": [],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "SQL/PGQ is not in PostgreSQL 19",
   "text": "Peter Eisentraut committed SQL/PGQ on 2026-03-16. After a pgsql-hackers thread, he reverted it from master and REL_19_STABLE on 2026-09-07. PostgreSQL 19 RC1 shipped on 2026-10-15 and its release notes do not mention property graphs; third-party posts expect PostgreSQL 20 at the earliest, which is not confirmed by the project.",
   "sources": [
    {
     "t": "Commit: SQL/PGQ, 2026-03-16",
     "u": "https://www.postgresql.org/message-id/E1w247I-0000Tk-2Y%40gemulon.postgresql.org"
    },
    {
     "t": "Commit: Revert SQL/PGQ on REL_19_STABLE",
     "u": "https://www.postgresql.org/message-id/E1x3f62-00000003sxF-0zQO@gemulon.postgresql.org"
    },
    {
     "t": "Robert Haas: needs enough rework to come out of both branches",
     "u": "https://www.postgresql.org/message-id/CA%2BTgmoZdb5%2BOPbZWNGsKL516OjBDaEP9cN5wU2gdzJ8fgJzVRg%40mail.gmail.com"
    },
    {
     "t": "PostgreSQL 19.0 release notes",
     "u": "https://www.postgresql.org/docs/release/19.0/"
    },
    {
     "t": "Neon guide: SQL/PGQ reverted from PostgreSQL 19",
     "u": "https://neon.com/postgresql/postgresql-19/sql-pgq-graph-queries"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "PostgreSQL 19 release state",
   "text": "On 2026-10-24 the PostgreSQL versioning page lists 18 as the newest release and shows a banner for PostgreSQL 19 RC 1 dated 2026-10-15. The beta 1 announcement of 2026-06 had listed SQL/PGQ as a headline feature before the revert.",
   "sources": [
    {
     "t": "PostgreSQL versioning policy page",
     "u": "https://www.postgresql.org/support/versioning/"
    },
    {
     "t": "PostgreSQL 19 Beta 1 announcement",
     "u": "https://postgresql.org/about/news/postgresql-19-beta-1-released-3313/"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "AlloyDB: alloydb_ai_nl versus QueryData",
   "text": "alloydb_ai_nl is labeled Pre-GA, and Google docs now recommend QueryData for new text-to-SQL work. QueryData launched in Preview in April 2026 for AlloyDB, Cloud SQL (MySQL and PostgreSQL), and Spanner; its near-100% accuracy claim is a vendor claim with no published method.",
   "sources": [
    {
     "t": "AlloyDB AI natural language overview",
     "u": "https://docs.cloud.google.com/alloydb/docs/ai/natural-language-overview"
    },
    {
     "t": "AlloyDB QueryData overview",
     "u": "https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview"
    },
    {
     "t": "Google Cloud blog: Introducing QueryData",
     "u": "https://cloud.google.com/blog/products/databases/introducing-querydata-for-near-100-percent-accurate-data-agents"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "Azure Database for PostgreSQL: azure_ai has no NL-to-SQL function",
   "text": "The azure_ai extension went GA on 2024-05-21. Its docs list embeddings, azure_ai.generate, is_true, extract, and rank (marked Preview), plus Azure language and ML calls. No natural-language-to-SQL function appears in the pages reviewed.",
   "sources": [
    {
     "t": "azure_ai extension overview",
     "u": "https://learn.microsoft.com/en-us/azure/postgresql/azure-ai/generative-ai-azure-overview"
    },
    {
     "t": "azure_ai AI functions (Preview)",
     "u": "https://learn.microsoft.com/en-us/azure/postgresql/azure-ai/generative-ai-azure-ai-functions"
    },
    {
     "t": "Message center: GA 2024-05-21",
     "u": "https://mc.merill.net/message/AZ-general-availability-azure-ai-extension-in-azure-database-for-postgresql"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "Postgres MCP landscape",
   "text": "The reference Postgres MCP server was archived on 2025-05-29 with no security guarantees. Common replacements are Postgres MCP Pro (MIT), the hosted Supabase and Neon servers, and Google's MCP Toolbox for Databases (renamed from Gen AI Toolbox for Databases). Supabase and Neon docs both warn about prompt injection and broad permissions, and Neon advises development and testing use only.",
   "sources": [
    {
     "t": "Archived MCP reference servers",
     "u": "https://github.com/modelcontextprotocol/servers-archived"
    },
    {
     "t": "Postgres MCP Pro",
     "u": "https://github.com/crystaldba/postgres-mcp"
    },
    {
     "t": "Supabase MCP docs",
     "u": "https://supabase.com/docs/guides/getting-started/mcp"
    },
    {
     "t": "Neon MCP docs",
     "u": "https://neon.com/docs/ai/neon-mcp-server"
    },
    {
     "t": "MCP Toolbox for Databases",
     "u": "https://github.com/googleapis/genai-toolbox"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "Neon and Databricks",
   "text": "Databricks announced on 2025-05-14 that it would acquire Neon. Whether the deal closed, and the Lakebase product facts, were not checked against Databricks sources. The Neon MCP docs still use the Neon name; they deprecate the /sse endpoint, which stops working on or after 2026-10-01.",
   "sources": [
    {
     "t": "Databricks press release",
     "u": "https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems"
    },
    {
     "t": "Neon MCP docs",
     "u": "https://neon.com/docs/ai/neon-mcp-server"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "pg_graphql is a GraphQL API, not a semantic layer",
   "text": "pg_graphql builds a GraphQL schema from the SQL schema inside Postgres, derives relationships from foreign keys, and reads settings from SQL comment directives. The repo page showed no deprecation notice and no release version.",
   "sources": [
    {
     "t": "pg_graphql README",
     "u": "https://github.com/supabase/pg_graphql"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "Supabase Assistant status",
   "text": "Assistant v2 launched on 2024-12-02. The post says no data is sent to the LLM, only schema structure. The Supabase pages reviewed carry no current status label, so status is Unverified.",
   "sources": [
    {
     "t": "Supabase blog: Assistant v2",
     "u": "https://supabase.com/blog/supabase-ai-assistant-v2"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "External semantic layers with Postgres",
   "text": "Cube lists Postgres, ClickHouse, DuckDB, and MotherDuck as data sources, and MetricFlow (Apache-2.0) lists Postgres among its adapters with a dbt v1 caveat. The hosted dbt Semantic Layer needs a Starter, Enterprise, or Enterprise+ account and offers a dbt MCP server. Wren AI lists PostgreSQL, ClickHouse, and DuckDB; its engine is Apache-2.0 while some features are commercial.",
   "sources": [
    {
     "t": "Cube docs: data sources",
     "u": "https://docs.cube.dev/admin/connect-to-data/data-sources"
    },
    {
     "t": "dbt docs: MetricFlow",
     "u": "https://docs.getdbt.com/docs/build/about-metricflow"
    },
    {
     "t": "dbt docs: Semantic Layer",
     "u": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl"
    },
    {
     "t": "Wren AI README",
     "u": "https://github.com/Canner/WrenAI"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "ClickHouse has no native semantic layer (absence not proven)",
   "text": "The Cloud AI/ML overview lists ClickHouse Agents, ClickHouse Assistant, and the remote MCP server; none is a semantic layer. The Agentic Data Stack post does not mention a semantic layer and says LLMs reach good SQL quality when grounded with schema metadata, table comments, and a system prompt. A negative finding from docs search cannot be fully proven.",
   "sources": [
    {
     "t": "ClickHouse docs: Cloud AI/ML features",
     "u": "https://clickhouse.com/docs/cloud/features/ai-ml"
    },
    {
     "t": "ClickHouse blog: The Agentic Data Stack",
     "u": "https://clickhouse.com/blog/the-agentic-data-stack"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "ClickHouse naming: Ask AI, Assistant, Agents",
   "text": "Current docs call the Cloud console panel ClickHouse Assistant, with Agent mode and Docs AI (Ask) mode. ClickHouse Agents is a separate product in Public Beta since 2026-06-03, with Scheduled Chats added 2026-10-19. A rename from an earlier Ask AI feature is not confirmed in any page reviewed.",
   "sources": [
    {
     "t": "ClickHouse docs: ClickHouse Assistant",
     "u": "https://clickhouse.com/docs/cloud/features/ai-ml/ask-ai"
    },
    {
     "t": "ClickHouse Cloud changelog 2026",
     "u": "https://clickhouse.com/docs/resources/changelogs/cloud/2026.md"
    },
    {
     "t": "ClickHouse docs: ClickHouse Agents",
     "u": "https://clickhouse.com/docs/products/cloud/features/ai-ml/agents/index.md"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "Agentic Data Stack and acquisitions",
   "text": "The post by Dustin Healy (2026-03-03) names LibreChat, ClickHouse with its MCP server, and Langfuse. It states ClickHouse acquired Langfuse in January 2026. A LibreChat acquisition is implied only by a link slug and is not confirmed.",
   "sources": [
    {
     "t": "ClickHouse blog: The Agentic Data Stack",
     "u": "https://clickhouse.com/blog/the-agentic-data-stack"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "ClickHouse MCP servers",
   "text": "mcp-clickhouse 0.7.0 was released on 2026-09-21 (first release 2025-02-12, Apache-2.0). It is read-only by default; write and destructive operations need explicit environment flags, and the README says real enforcement comes from ClickHouse grants. The Cloud remote MCP server is at mcp.clickhouse.cloud/mcp with 13 read-only tools; its docs give no status label.",
   "sources": [
    {
     "t": "mcp-clickhouse README",
     "u": "https://github.com/ClickHouse/mcp-clickhouse"
    },
    {
     "t": "mcp-clickhouse on PyPI",
     "u": "https://pypi.org/project/mcp-clickhouse/"
    },
    {
     "t": "ClickHouse docs: Cloud remote MCP server",
     "u": "https://clickhouse.com/docs/cloud/features/ai-ml/remote-mcp"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "ClickHouse vector search status",
   "text": "Docs state vector similarity indexes are available in 25.8 and later, with HNSW as the only method. The page gives no beta or GA label, and the quantized codec is marked experimental. The 2026 Cloud changelog lists index sharding in private preview (2026-04-25) and names vector search as a main beneficiary.",
   "sources": [
    {
     "t": "ClickHouse docs: Vector similarity indexes",
     "u": "https://clickhouse.com/docs/engines/table-engines/mergetree-family/annindexes"
    },
    {
     "t": "ClickHouse Cloud changelog 2026",
     "u": "https://clickhouse.com/docs/resources/changelogs/cloud/2026.md"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "ClickHouse with dbt, Rill, Cube, Boring Semantic Layer",
   "text": "dbt-clickhouse covers materializations, tests, and docs, but its page mentions no semantic layer; the MetricFlow page lists no ClickHouse adapter and the dbt v2 adapter table shows ClickHouse as Private beta. Rill uses ClickHouse as OLAP engine through a live connector (v22.7 or newer) but says modeling with ClickHouse is not officially supported and sits behind a feature flag. Boring Semantic Layer runs on Ibis, which has a ClickHouse backend, though the BSL README does not name ClickHouse.",
   "sources": [
    {
     "t": "ClickHouse docs: dbt",
     "u": "https://clickhouse.com/docs/integrations/dbt"
    },
    {
     "t": "dbt docs: adapter lifecycle",
     "u": "https://docs.getdbt.com/docs/supported-data-platforms"
    },
    {
     "t": "dbt docs: MetricFlow",
     "u": "https://docs.getdbt.com/docs/build/about-metricflow"
    },
    {
     "t": "Rill docs: ClickHouse connector",
     "u": "https://docs.rilldata.com/developers/build/connectors/olap/clickhouse"
    },
    {
     "t": "Boring Semantic Layer README",
     "u": "https://github.com/boringdata/boring-semantic-layer"
    },
    {
     "t": "Ibis docs: ClickHouse backend",
     "u": "https://ibis-project.org/backends/clickhouse"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "MotherDuck Guides as AI context",
   "text": "Guides are markdown documents with a title, description, optional topic, content, and access level (user or organization). Agents read them through MCP tools such as get_query_guide, get_guide, list_guides, and search_catalog. The docs give no Preview or Beta label.",
   "sources": [
    {
     "t": "MotherDuck docs: Guides",
     "u": "https://motherduck.com/docs/key-tasks/guides/"
    },
    {
     "t": "MotherDuck docs: MCP server reference",
     "u": "https://motherduck.com/docs/sql-reference/mcp/"
    },
    {
     "t": "MotherDuck docs: Building analytics agents",
     "u": "https://motherduck.com/docs/key-tasks/ai-and-motherduck/building-analytics-agents"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "MotherDuck FixIt not confirmed",
   "text": "The docs reviewed document prompt_fix_line for fixing SQL errors but do not mention a feature named FixIt. FixIt status is Unverified. The PROMPT function lists models such as gpt-4o-mini (default) and gpt-5 and has no status label.",
   "sources": [
    {
     "t": "MotherDuck docs: SQL assistant functions",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/"
    },
    {
     "t": "MotherDuck docs: PROMPT function",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/prompt/"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "DuckPGQ and vss maturity",
   "text": "DuckPGQ is a community extension described by its maintainers as a research project and work in progress; from DuckDB v2.0 a grammar setting is also required. The core vss extension is experimental, and the docs advise against on-disk HNSW indexes in production.",
   "sources": [
    {
     "t": "DuckDB community extension: duckpgq",
     "u": "https://duckdb.org/community_extensions/extensions/duckpgq.html"
    },
    {
     "t": "DuckPGQ project site",
     "u": "https://duckpgq.org/"
    },
    {
     "t": "DuckDB 2.0 docs: vss",
     "u": "https://duckdb.org/docs/2.0/core_extensions/vss.html"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "MotherDuck MCP servers",
   "text": "The hosted remote server (api.motherduck.com/mcp) exposes read-only and read-write tools, so it is not read-only by default. The local server is MIT licensed and read-only by default, but its README says read-only mode alone is not enough for third-party access.",
   "sources": [
    {
     "t": "MotherDuck docs: MCP server reference",
     "u": "https://motherduck.com/docs/sql-reference/mcp/"
    },
    {
     "t": "mcp-server-motherduck README",
     "u": "https://github.com/motherduckdb/mcp-server-motherduck"
    }
   ],
   "from": "postgres-clickhouse-duckdb.json"
  },
  {
   "topic": "benchmark: dbt",
   "text": "Vendor-run by dbt Labs. Dataset: ACME Insurance (from data.world), 11 questions run 20 times each, dated 7 Apr 2026 by secondary sources. On modeled questions, Claude Sonnet 4.6 went from 90.0% (text-to-SQL) to 98.2% (semantic layer), and GPT-5.3-Codex from 84.1% to 100.0%. Overall figures for the full question set were reported inconsistently, so they are not given here.",
   "sources": [
    {
     "t": "Semantic Layer vs. Text-to-SQL: 2026 Benchmark Update (dbt)",
     "u": "https://docs.getdbt.com/blog/semantic-layer-vs-text-to-sql-2026"
    },
    {
     "t": "dbt Discourse thread on the benchmark",
     "u": "https://discourse.getdbt.com/t/semantic-layer-vs-text-to-sql-2026-benchmark-update/20721"
    },
    {
     "t": "Bodo: PyDough on dbt's benchmark (Sep 2026)",
     "u": "https://www.bodo.ai/blog/how-pydough-reached-100-accuracy-on-dbts-semantic-layer-benchmark"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "benchmark: cube",
   "text": "Vendor-run by Cube employees (blog and arXiv paper). Dataset: Cleaned Contoso Retail in ClickHouse, 100 questions. Schema only vs schema plus a 4 KB hand-written markdown semantic doc: Opus 4.7 50.5% to 67.7%, Sonnet 4.6 46.5% to 68.7%, GPT-5.4 45.5% to 68.7%. The semantic layer here is a markdown file, not a running Cube deployment. Publication date was not confirmed.",
   "sources": [
    {
     "t": "Cube blog: paired benchmark across three frontier models",
     "u": "https://cube.dev/blog/why-semantic-layers-make-llm-analytics-reliable-a-paired-benchmark-across-three-frontier-models"
    },
    {
     "t": "arXiv 2604.25149",
     "u": "https://arxiv.org/pdf/2604.25149"
    },
    {
     "t": "cubedevinc/semantic-layer-benchmark",
     "u": "https://github.com/cubedevinc/semantic-layer-benchmark"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "benchmark: atscale",
   "text": "Vendor-run by AtScale. White paper announced 8 Aug 2024: Google Gemini Pro 1.5 on TPC-DS, 40 questions, 92.5% with the semantic layer vs 20% on raw schemas with few-shot prompts. A public leaderboard followed on 6 Nov 2024. No independent replication found.",
   "sources": [
    {
     "t": "BigDATAwire: AtScale claims text-to-SQL breakthrough",
     "u": "https://bigdatawire.com/2024/08/15/atscale-claims-text-to-sql-breakthrough-with-semantic-layer"
    },
    {
     "t": "AtScale: natural language prompting with semantic layer and GenAI",
     "u": "https://www.atscale.com/blog/enable-natural-language-prompting-with-semantic-layer-genai/"
    },
    {
     "t": "AtScale public leaderboard press release",
     "u": "https://www.atscale.com/press/first-public-leaderboard-text-to-sql/"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "Apache Ossie status for these vendors",
   "text": "OSI is renamed Apache Ossie (incubating). Cube shipped Ossie import and export on 16 Oct 2026. Honeydew docs describe import and export. AtScale joined OSI on 27 Jan 2026. dbt Labs co-leads, and a dbt converter is reported merged. No Ossie support was found for Wren or Malloy.",
   "sources": [
    {
     "t": "Cube changelog: Apache Ossie integration",
     "u": "https://cube.dev/changelog/2026-10-16-changelog-apache-ossie-integration"
    },
    {
     "t": "Honeydew Apache Ossie docs",
     "u": "https://honeydew.ai/docs/integration/apache-ossie-osi"
    },
    {
     "t": "AtScale joins Open Semantic Interchange",
     "u": "https://snowflake.atscale.com/press/atscale-joins-open-semantic-interchange-open-standards/"
    },
    {
     "t": "Dremio: Apache Ossie joins the Apache Incubator",
     "u": "https://www.dremio.com/blog/apache-ossie-the-open-semantic-interchange-joins-the-apache-incubator"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "Research limits for this file",
   "text": "WebFetch was blocked for docs hosts in this session, so claims come from WebSearch result summaries only. Pages marked Unverified or l=0 with 'not confirmed' were not read. Features with no Preview label in the seen text are marked GA, as in the other research files.",
   "sources": [],
   "from": "semantic-layers.json"
  },
  {
   "topic": "Cube MCP naming",
   "text": "Cube Software (finance product) also has an MCP server, which is a different company. The Cube semantic layer MCP server is the cubecloud.dev one in Cube docs. The local npm server for Cube is deprecated.",
   "sources": [
    {
     "t": "Cube MCP server docs",
     "u": "https://docs.cube.dev/docs/integrations/mcp-server"
    },
    {
     "t": "Cube MCP server GitHub (deprecation notice)",
     "u": "https://github.com/cubedevinc/cube-mcp-server"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "OSI: who started it and when",
   "text": "Snowflake announced Open Semantic Interchange (OSI) on 2025-09-23 as an open source initiative for a vendor-neutral semantic model spec. Snowflake leads it. The press release names Salesforce (with Tableau), BlackRock, dbt Labs and RelationalAI as launch partners.",
   "sources": [
    {
     "t": "Snowflake press release: Open Semantic Interchange Initiative",
     "u": "https://snowflake.com/en/news/press-releases/snowflake-salesforce-dbt-labs-and-more-revolutionize-data-readiness-for-ai-with-open-semantic-interchange-initiative"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "OSI founding and early members",
   "text": "The Sep 2025 coalition also listed Alation, Atlan, Blue Yonder, Cube, Elementum AI, Hex, Honeydew, Mistral AI, Omni, Select Star, Sigma and ThoughtSpot. The Snowflake Jul 2026 post says 17 launch partners but does not name them, and now counts more than 50 organizations. The press release does not use the term founding members.",
   "sources": [
    {
     "t": "Snowflake press release: Open Semantic Interchange Initiative",
     "u": "https://snowflake.com/en/news/press-releases/snowflake-salesforce-dbt-labs-and-more-revolutionize-data-readiness-for-ai-with-open-semantic-interchange-initiative"
    },
    {
     "t": "Snowflake blog: Apache Ossie (Incubating)",
     "u": "https://www.snowflake.com/en/blog/apache-ossie-open-semantic-interchange-incubator/"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "OSI working group growth",
   "text": "Nov 2025 additions: AWS, Collibra, DataHub, Domo, Firebolt, Informatica, Instacart, JPMC, Preset, Starburst Data, Strategy. Jan 2026 additions: AtScale, Coalesce, Collate, Credible, Databricks, JetBrains, Lightdash, Qlik. Denodo joined in Mar 2026 and Kyvos in Aug 2026.",
   "sources": [
    {
     "t": "Snowflake blog: OSI initiative expands partners (2025-11-13)",
     "u": "https://snowflake.com/en/blog/osi-initiative-expands-partners/"
    },
    {
     "t": "Snowflake blog: OSI specs finalized (2026-01-27)",
     "u": "https://www.snowflake.com/en/blog/open-semantic-interchanges-specs-finalized/"
    },
    {
     "t": "Apache Ossie updates 2026",
     "u": "https://ossie.apache.org/updates/archive/2026/"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "OSI spec status, version and license in 2026",
   "text": "The spec is under Apache License 2.0, and the spec file lists release 0.1.1 dated 2025-12-11 (Snowflake announced the first version on 2026-01-27). On 2026-10-24 the main branch shows 0.2.0.dev0, marked draft and unreleased, with osi-0.1.1-rc1 as the only git tag. A v1.0 target was named in Nov 2025 with no date.",
   "sources": [
    {
     "t": "Apache Ossie core spec (spec.md)",
     "u": "https://github.com/apache/ossie/blob/main/core-spec/spec.md"
    },
    {
     "t": "apache/ossie repository",
     "u": "https://github.com/apache/ossie"
    },
    {
     "t": "Snowflake blog: OSI specs finalized",
     "u": "https://www.snowflake.com/en/blog/open-semantic-interchanges-specs-finalized/"
    },
    {
     "t": "Snowflake blog: OSI initiative expands partners",
     "u": "https://snowflake.com/en/blog/osi-initiative-expands-partners/"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "OSI renamed Apache Ossie (incubating)",
   "text": "On 2026-07-10 the project entered the Apache Incubator as Apache Ossie (incubating), renamed to avoid confusion with the Open Source Initiative acronym. Spec, community and mission are unchanged, and the code lives at github.com/apache/ossie. The ASF notes that incubation does not mean the code is complete or stable.",
   "sources": [
    {
     "t": "Apache Ossie enters the Apache Incubator",
     "u": "https://ossie.apache.org/updates/ossie-enters-apache-incubator/"
    },
    {
     "t": "Apache Ossie home",
     "u": "https://ossie.apache.org/"
    },
    {
     "t": "dbt Labs: OSI is now Apache Ossie",
     "u": "https://www.getdbt.com/blog/osi-is-now-apache-ossie"
    },
    {
     "t": "Snowflake blog: Apache Ossie (Incubating)",
     "u": "https://www.snowflake.com/en/blog/apache-ossie-open-semantic-interchange-incubator/"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Snowflake support for Ossie and OSI YAML",
   "text": "Snowflake documents SYSTEM$CREATE_SEMANTIC_VIEW_FROM_OSSIE_YAML and SYSTEM$READ_OSSIE_YAML_FROM_SEMANTIC_VIEW, with Snowflake-only features kept in vendor extensions. The older OSI-named procedure is marked deprecated. The Preview features list shows OSI YAML for semantic views as Preview since Jun 2026, and the docs example uses spec version 0.1.1.",
   "sources": [
    {
     "t": "SYSTEM$CREATE_SEMANTIC_VIEW_FROM_OSSIE_YAML",
     "u": "https://docs.snowflake.com/en/sql-reference/stored-procedures/system_create_semantic_view_from_ossie_yaml"
    },
    {
     "t": "SYSTEM$READ_OSSIE_YAML_FROM_SEMANTIC_VIEW",
     "u": "https://docs.snowflake.com/en/sql-reference/functions/system_read_ossie_yaml_from_semantic_view"
    },
    {
     "t": "SYSTEM$CREATE_SEMANTIC_VIEW_FROM_OSI_YAML (deprecated)",
     "u": "https://docs.snowflake.com/en/sql-reference/stored-procedures/system_create_semantic_view_from_osi_yaml"
    },
    {
     "t": "Preview features list",
     "u": "https://docs.snowflake.com/en/release-notes/preview-features"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Product rename: Snowflake Intelligence to Snowflake CoWork",
   "text": "Snowflake Intelligence became Snowflake CoWork and Cortex Code became CoCo, announced at Snowflake Summit on 2026-06-02 per press coverage. Current Snowflake docs use the CoWork and CoCo names, and the 2025 GA release note for Snowflake Intelligence now points to the CoWork overview. I did not find a Snowflake-authored rename announcement.",
   "sources": [
    {
     "t": "Overview of Snowflake CoWork (docs)",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork"
    },
    {
     "t": "Snowflake Intelligence GA release note, Nov 4 2025",
     "u": "https://docs.snowflake.com/en/release-notes/2025/other/2025-11-04-snowflake-intelligence"
    },
    {
     "t": "IT Brief: Snowflake renames AI tools",
     "u": "https://itbrief.com.au/story/snowflake-renames-ai-tools-amid-broader-platform-push"
    },
    {
     "t": "Flexera: Snowflake Summit 2026 recap",
     "u": "https://www.flexera.com/blog/perspectives/snowflake-summit-2026/"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Is the semantic model YAML file path legacy?",
   "text": "Yes for the stage file. Snowflake calls stage-based semantic model YAML the legacy stage API: it still works with Cortex Analyst, but semantic views are recommended for new work and stage files lack SQL querying and native sharing. YAML is still a valid way to author a semantic view through SYSTEM$CREATE_SEMANTIC_VIEW_FROM_YAML and Semantic Studio.",
   "sources": [
    {
     "t": "Migrating from the legacy stage API to semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/semantic-models-vs-views"
    },
    {
     "t": "Cortex Analyst",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst"
    },
    {
     "t": "YAML vs DDL authoring for semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl"
    },
    {
     "t": "Cortex Analyst REST API",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst/rest-api"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Cortex Analyst versus Cortex Agents",
   "text": "On 2026-08-28 Snowflake recommended moving from Cortex Analyst to Cortex Agents; the Cortex Analyst REST API stays available. Since 2026-04-13 agents generate SQL directly from semantic views, and the response block type changed from cortex_analyst_text_to_sql to system_execute_sql.",
   "sources": [
    {
     "t": "Aug 28 2026 release note: transition to Cortex Agents",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-08-28-cortex-analyst-transition-cortex-agents"
    },
    {
     "t": "Apr 13 2026 release note: improved SQL generation in Cortex Agents",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-04-13-cortex-agents-agentic-analyst"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Semantic view status and dates",
   "text": "Semantic views: Preview 2025-04-17, defining them GA at Summit in June 2025, querying GA in Aug 2025. Standard SQL clauses on semantic views GA 2026-03-02, Semantic Studio GA 2026-09-30, Cortex Agents and managed MCP server GA 2025-11-04. Preview items: USING relationship paths, range joins, materializations, TDS export, Horizon Context (2026-10-12).",
   "sources": [
    {
     "t": "Apr 17 2025 release note: Semantic views (Preview)",
     "u": "https://docs.snowflake.com/en/release-notes/2025/other/2025-04-17-semantic-views"
    },
    {
     "t": "Summit announcements June 2025",
     "u": "https://docs.snowflake.com/en/release-notes/2025/june-summit"
    },
    {
     "t": "Mar 2 2026 release note: standard SQL clauses GA",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-03-02-semantic-views-standard-sql"
    },
    {
     "t": "Sep 30 2026 release note: Semantic Studio GA",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-09-30-semantic-studio-ga"
    },
    {
     "t": "Cortex Agents GA release note",
     "u": "https://docs.snowflake.com/en/release-notes/2025/other/2025-11-04-cortex-agents"
    },
    {
     "t": "Managed MCP server GA release note",
     "u": "https://docs.snowflake.com/en/release-notes/2025/other/2025-11-04-cortex-agents-mcp"
    },
    {
     "t": "Preview features list",
     "u": "https://docs.snowflake.com/en/release-notes/preview-features"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "How semantic views inherit governance",
   "text": "A semantic view is a schema-level object, so you grant SELECT on the view and need no SELECT on its base tables, as with standard views. Snowflake docs say masking and row access policies are enforced at the query engine when agents query data. Tags work on semantic views and their members since May 2026, and lineage links table, semantic view and agent since Sep 2026.",
   "sources": [
    {
     "t": "Querying semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/querying"
    },
    {
     "t": "Horizon Context",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-horizon/horizon-context"
    },
    {
     "t": "May 2026 release note: tagging in semantic views",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-05-05-semantic-views-object-tagging"
    },
    {
     "t": "Sep 2026 release note: lineage for Cortex Agents",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-09-02-cortex-agent-lineage"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "BI tool support for semantic views",
   "text": "Inbound: Autopilot builds a semantic view from a Power BI file (GA 2026-08-18; DAX measures become metrics) or a Tableau file. Outbound: SYSTEM$EXPORT_TDS_FROM_SEMANTIC_VIEW makes a Tableau data source (Preview, Mar 2026). I did not verify native semantic view support inside other BI tools.",
   "sources": [
    {
     "t": "Power BI ingestion feature support",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/power-bi-ingestion"
    },
    {
     "t": "Power BI ingestion GA release note",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-08-18-semantic-views-power-bi-ingestion-ga"
    },
    {
     "t": "Tableau ingestion feature support",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/tableau-ingestion"
    },
    {
     "t": "TDS export release note",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-03-05-semantic-views-tableau-tds"
    },
    {
     "t": "Querying semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/querying"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Graph features",
   "text": "I found no property graph, SQL/PGQ or Cypher feature in the Snowflake SQL command and function indexes. Neo4j documents Graph Analytics for Snowflake (graph algorithms on Snowpark Container Services), and RelationalAI lists a Snowflake Native App with graph reasoning.",
   "sources": [
    {
     "t": "Neo4j Graph Analytics for Snowflake",
     "u": "https://neo4j.com/docs/snowflake-graph-analytics/current/"
    },
    {
     "t": "RelationalAI",
     "u": "https://relational.ai/"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Horizon Catalog and Horizon Context",
   "text": "Horizon Catalog is the catalog layer for descriptions, tags, lineage and access control. Horizon Context (Preview, 2026-10-12) adds metadata connectors to 18 external sources such as Power BI, Tableau, dbt, Databricks and BigQuery. The connectors read metadata from external systems.",
   "sources": [
    {
     "t": "Snowflake Horizon Catalog",
     "u": "https://docs.snowflake.com/en/user-guide/snowflake-horizon"
    },
    {
     "t": "Oct 12 2026 release note: Horizon Context (Preview)",
     "u": "https://docs.snowflake.com/en/release-notes/2026/other/2026-10-12-horizon-context-preview"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Claims not fully verified",
   "text": "Semantic View Autopilot has no Preview label in docs and Power BI ingestion for it is GA, but I found no GA release note; Flexera (third party) says GA since Feb 2026. Tableau ingestion status, Cortex Analyst exact GA date (Preview Aug 2024), and third-party BI tools reading semantic views are unverified.",
   "sources": [
    {
     "t": "Semantic View Autopilot",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/autopilot"
    },
    {
     "t": "Flexera: Snowflake Summit 2026 recap",
     "u": "https://www.flexera.com/blog/perspectives/snowflake-summit-2026/"
    },
    {
     "t": "Release notes 2024",
     "u": "https://docs.snowflake.com/en/release-notes/new-features-2024"
    }
   ],
   "from": "snowflake.json"
  },
  {
   "topic": "Open Semantic Interchange is now Apache Ossie (incubating)",
   "text": "The OSI project is renamed Apache Ossie and is in the Apache Incubator. The Ossie ecosystem page lists Denodo, Dremio, and Starburst Data. It does not list Timbr, and it shows no converter for any of the four.",
   "sources": [
    {
     "t": "Apache Ossie ecosystem",
     "u": "https://ossie.apache.org/ecosystem/"
    },
    {
     "t": "OSI community update (28 Apr 2026)",
     "u": "https://ossie.apache.org/updates/osi-april-2026-community-update/"
    },
    {
     "t": "Dremio: Apache Ossie, the new name for Open Semantic Interchange (13 Jul 2026)",
     "u": "https://www.dremio.com/blog/apache-ossie-incubating-the-new-name-for-open-semantic-interchange/"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Dremio is now part of SAP",
   "text": "SAP announced completion of the Dremio acquisition on 6 July 2026. Dremio docs and press pages still use the Dremio name, and a site banner reads 'Dremio is now part of SAP'. No rename was announced in the pages reviewed.",
   "sources": [
    {
     "t": "SAP completes Dremio acquisition",
     "u": "https://news.sap.com/2026/07/sap-completes-dremio-acquisition/"
    },
    {
     "t": "Dremio unveils the agentic lakehouse",
     "u": "https://www.dremio.com/press-releases/dremio-unveils-the-agentic-lakehouse-built-for-agents-managed-by-agents/"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Dremio docs split and agentic lakehouse timeline",
   "text": "Dremio Cloud (launched 13 Nov 2025 as the agentic lakehouse) and self-managed Dremio have separate doc trees. The current/ tree is the self-managed 26.x docs. The Nov 2025 launch named the AI Semantic Layer, AI Agent, and MCP support but gave no per-feature GA label.",
   "sources": [
    {
     "t": "Dremio unveils the agentic lakehouse (13 Nov 2025)",
     "u": "https://www.dremio.com/press-releases/dremio-unveils-the-agentic-lakehouse-built-for-agents-managed-by-agents/"
    },
    {
     "t": "Dremio docs llms-full.txt",
     "u": "https://docs.dremio.com/llms-full.txt"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Denodo renames",
   "text": "Data Catalog became Data Marketplace in 9.3. Embedded MPP became Lakehouse Accelerator and Cache Engine became Materialization Engine by 9.4. Reference Lineage became 360 Graph in 9.5.",
   "sources": [
    {
     "t": "What is new in Denodo 9.4",
     "u": "https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_4"
    },
    {
     "t": "What is new in Denodo 9.5",
     "u": "https://community.denodo.com/docs/html/browse/9.5/en/platform/new_features/what_is_new_9_5"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Denodo release timeline",
   "text": "9.3 shipped 16 Sep 2025 with DeepQuery. 9.4 (March 2026, vector data type) and 9.5 (July 2026, metric views, LLM-agent Denodo Assistant) dates come from press coverage, not Denodo docs.",
   "sources": [
    {
     "t": "Denodo Platform 9.3 press release",
     "u": "https://www.denodo.com/en/press-release/2025-09-16/denodo-platform-93-now-available-breakthrough-support-ai-innovation"
    },
    {
     "t": "Denodo 9.5 adds metric views (IT Brief)",
     "u": "https://itbrief.com.au/story/denodo-9-5-adds-metric-views-for-ai-data-governance"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Status labels used in this file",
   "text": "Vendors in this set label Preview features in their docs (Dremio wiki generation, Starburst skills, Timbr Solomon). Features with no label in their own doc page are marked GA here. Where a release note or press release states GA, the artifact says so; otherwise treat GA as inferred from the missing Preview label.",
   "sources": [
    {
     "t": "Starburst Enterprise release 477-e (explicit GA list)",
     "u": "https://docs.starburst.io/latest/release/release-477-e.html"
    },
    {
     "t": "Dremio wikis and labels (Preview label on AI generation)",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/wikis-labels/"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Starburst editions",
   "text": "Docs read were mostly Starburst Enterprise 483-e. Starburst Galaxy also documents AIDA, AI data product enrichment, and an MCP server, but its release status was not checked. Open-source Trino views accept a COMMENT clause and nothing else for semantic context.",
   "sources": [
    {
     "t": "Starburst Galaxy: AIDA",
     "u": "https://docs.starburst.io/starburst-galaxy/starburst-ai/ai-aida.html"
    },
    {
     "t": "Trino CREATE VIEW",
     "u": "https://trino.io/docs/current/sql/create-view.html"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Timbr MCP and Knowledge Base timing",
   "text": "The Timbr changelog shows MCP OAuth and Dynamic Client Registration in release 2.55.1 (23 Mar 2026). It shows a new Knowledge Base management page in the 14 Jul 2026 release. The first MCP release date was not found.",
   "sources": [
    {
     "t": "Timbr platform changelog",
     "u": "https://docs.timbr.ai/doc/docs/general/changelog"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Dremio MCP support scope",
   "text": "The Dremio docs say the open-source MCP server is not covered by Dremio Support Policies. The hosted server needs a Dremio Cloud project and, for clients other than Claude.ai and ChatGPT, a Native OAuth application.",
   "sources": [
    {
     "t": "Connect AI agents to Dremio with MCP",
     "u": "https://docs.dremio.com/dremio-cloud/developer/mcp-server/"
    }
   ],
   "from": "virtualization.json"
  },
  {
   "topic": "Redshift enrichment path",
   "text": "Redshift has COMMENT ON for comments, and Amazon Q generative SQL in Query Editor v2 takes an admin-uploaded custom context with table and column annotations and curated queries. AI-drafted descriptions and glossary terms come from SageMaker Catalog, a separate product that supports Redshift assets.",
   "sources": [
    {
     "t": "Redshift COMMENT",
     "u": "https://docs.aws.amazon.com/redshift/latest/dg/r_COMMENT.html"
    },
    {
     "t": "Interacting with Amazon Q generative SQL",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    {
     "t": "SageMaker Unified Studio: autodoc",
     "u": "https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/autodoc.html"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "SageMaker Catalog AI descriptions",
   "text": "The DataZone StartMetadataGenerationRun API takes types BUSINESS_DESCRIPTIONS, BUSINESS_NAMES and BUSINESS_GLOSSARY_ASSOCIATIONS, at most 2 per call. The older single type field is still listed. Default quotas are 10K description runs, 50K business name runs and 10K glossary term runs a month.",
   "sources": [
    {
     "t": "AWS CLI: start-metadata-generation-run",
     "u": "https://docs.aws.amazon.com/cli/latest/reference/datazone/start-metadata-generation-run.html"
    },
    {
     "t": "SageMaker Unified Studio: autodoc",
     "u": "https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/autodoc.html"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "Redshift lineage scope",
   "text": "The Dec 2024 GA announcement says lineage covers columns from Glue, Redshift and Spark. The July 2026 update for IAM-based domains names Spark jobs on EMR and Glue, Visual ETL and notebooks, and does not mention Redshift.",
   "sources": [
    {
     "t": "Data lineage is GA in Amazon DataZone and next generation SageMaker",
     "u": "https://aws.amazon.com/about-aws/whats-new/2024/12/data-lineage-amazon-datazone-next-generation-sagemaker"
    },
    {
     "t": "Amazon SageMaker now supports data lineage in IAM-based domains",
     "u": "https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-sagemaker-data-lineage-iam-domain"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "Redshift query history use",
   "text": "Amazon Q generative SQL can use query history shared across users in the account to improve recommendations. An admin grants SYS:MONITOR to allow it. Free tier allows 1,000 prompts a month per account, Pro tier 1,000 per user.",
   "sources": [
    {
     "t": "Interacting with Amazon Q generative SQL",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html"
    },
    {
     "t": "Updating generative SQL settings",
     "u": "https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-settings.html"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "Fabric data agent status",
   "text": "The data agent concept page calls the feature generally available, and the runtime page says the standard runtime is GA. The release status table (updated 2026-06-19) still lists Data agent as Preview. Features on the preview runtime are Preview: schema object descriptions, topics, Advanced NL2SQL. The evaluation SDK, Python SDK and Copilot feedback pages are labeled Preview.",
   "sources": [
    {
     "t": "Fabric data agent concepts",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/concept-data-agent.md"
    },
    {
     "t": "Fabric data agent runtime",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-runtime.md"
    },
    {
     "t": "Release status of AI and Copilot in Fabric",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/fundamentals/copilot-ai-feature-state.md"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "Power BI Prep data for AI",
   "text": "The Learn article is titled 'Prepare your data for AI to improve Copilot results (preview)'. It covers AI data schema, verified answers and AI instructions, saved to the semantic model.",
   "sources": [
    {
     "t": "Prepare your data for AI (preview)",
     "u": "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "Fabric feedback loop",
   "text": "Users rate data agent answers in Microsoft 365 Copilot (Preview), and the creator reads them with list_feedback in a notebook. The article does not say feedback becomes example queries, so that step is manual.",
   "sources": [
    {
     "t": "Data agent feedback in Microsoft Copilot",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/fabric-docs/main/docs/data-science/data-agent-microsoft-copilot-feedback.md"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "SAP Datasphere AI and CLI status",
   "text": "SAP docs print no GA or Preview labels for the AI services, so these are rated 3 with that caveat. The CLI import and export page only points to the datasphere command line and shows no commands, so bulkSnippet code is empty.",
   "sources": [
    {
     "t": "Enable SAP Business AI for SAP Datasphere",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Administering/Creating-and-Configuring-Your-Tenant/enable-sap-business-ai-for-sap-datasphere-1b3fe45.md"
    },
    {
     "t": "Importing and exporting objects via the command line",
     "u": "https://raw.githubusercontent.com/SAP-docs/sap-datasphere/main/docs/Acquiring-Preparing-Modeling-Data/Creating-Finding-Sharing-Objects/importing-and-exporting-objects-via-the-command-line-6494657.md"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "SQL Server descriptions and Copilot instructions",
   "text": "T-SQL stores descriptions only as extended properties. GitHub Copilot in SSMS 22.3 and later reads instructions from extended properties named AGENTS.md (per object) and CONSTITUTION.md (per database).",
   "sources": [
    {
     "t": "sp_addextendedproperty",
     "u": "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/relational-databases/system-stored-procedures/sp-addextendedproperty-transact-sql.md"
    },
    {
     "t": "Database instructions for GitHub Copilot in SSMS",
     "u": "https://learn.microsoft.com/en-us/ssms/github-copilot/database-instructions"
    }
   ],
   "from": "enrich-aws-sap-microsoft.json"
  },
  {
   "topic": "Method and limits",
   "text": "Most vendor doc hosts were blocked, WebFetch failed with DNS errors, and the search budget ran out. Facts come from search result summaries and a few GitHub raw pages. Caps scored 0 with the note 'Not verified' mean unknown, not absent.",
   "sources": [],
   "from": "enrich-bi.json"
  },
  {
   "topic": "Sigma AI context is Beta",
   "text": "The page for AI context on data models says it describes public beta features that may change. Sigma datasets stop working as a data source on 2026-09-15, so use data models.",
   "sources": [
    {
     "t": "Manage AI context for a data model (Beta)",
     "u": "https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models"
    },
    {
     "t": "Data modeling best practices",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices"
    }
   ],
   "from": "enrich-bi.json"
  },
  {
   "topic": "ThoughtSpot Worksheets",
   "text": "ThoughtSpot developer docs say Worksheets are deprecated and replaced by Models from 10.12.0.cl.",
   "sources": [
    {
     "t": "ThoughtSpot TML API",
     "u": "https://developers.thoughtspot.com/docs/tml"
    }
   ],
   "from": "enrich-bi.json"
  },
  {
   "topic": "Tableau Agent rename",
   "text": "Search results say Einstein Copilot for Tableau was renamed Tableau Agent. Tableau Next uses Agentforce for Analytics, with Concierge and Data Pro.",
   "sources": [
    {
     "t": "FAQs About Tableau Agent (Atrium)",
     "u": "https://atrium.ai/resources/6-frequently-asked-questions-about-einstein-copilot-for-tableau"
    },
    {
     "t": "Step 4: Enable Tableau Next AI Features",
     "u": "https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm"
    }
   ],
   "from": "enrich-bi.json"
  },
  {
   "topic": "Method and limits",
   "text": "The shared WebSearch budget was used up, so no search was possible. All facts come from direct fetches of vendor pages, and only fetched URLs are cited. Some pages were truncated by the fetch tool, so 'not found' means not found in pages reviewed.",
   "sources": [],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Neo4j LLM Knowledge Graph Builder (lead: schema and descriptions from documents)",
   "text": "Partly confirmed. It is a Neo4j Labs project (Apache-2.0, not in the supported product lineup) that extracts an entity graph from documents with LLMs; its 'Get Schema From Text' option suggests a schema from pasted text, RDF ontologies or a Cypher/GQL schema. The pages describe no description generation and no evaluation.",
   "sources": [
    {
     "t": "LLM Knowledge Graph Builder features",
     "u": "https://neo4j.com/labs/genai-ecosystem/llm-graph-builder-features/"
    },
    {
     "t": "neo4j-labs/llm-graph-builder (GitHub)",
     "u": "https://github.com/neo4j-labs/llm-graph-builder"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Neo4j text2cypher evaluation datasets (lead)",
   "text": "Confirmed as an experimental Labs repo with datasets, evaluation notebooks and fine-tuning notebooks (folders: functional_cypher and synthetic_*_demodbs). The Hugging Face dataset neo4j/text2cypher-2025v1 is Apache-2.0 with 10K to 100K rows, and its card gives no source or intended use. These are datasets and notebooks, not an eval service.",
   "sources": [
    {
     "t": "neo4j-labs/text2cypher (GitHub)",
     "u": "https://github.com/neo4j-labs/text2cypher"
    },
    {
     "t": "text2cypher datasets folder",
     "u": "https://github.com/neo4j-labs/text2cypher/tree/main/datasets"
    },
    {
     "t": "neo4j/text2cypher-2025v1 (Hugging Face)",
     "u": "https://huggingface.co/datasets/neo4j/text2cypher-2025v1"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Neo4j lineage use cases (lead)",
   "text": "Refuted as a product feature. The use-case index has no lineage or catalog page. The Metadata Management page mentions lineage only in customer and partner videos (University of Washington, Adaptive), as a modeling pattern.",
   "sources": [
    {
     "t": "Neo4j use cases",
     "u": "https://neo4j.com/use-cases/"
    },
    {
     "t": "Neo4j use cases: Metadata Management",
     "u": "https://neo4j.com/use-cases/master-data-management/"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Neo4j Aura Agent (not in leads, found during check)",
   "text": "Aura Agent was announced generally available on 2026-02-03, with Cypher Template, Similarity Search and Text2Cypher tools, a REST endpoint and a read-only MCP server. The docs describe agent evaluations (datasets up to 50 questions, five metrics) with no preview label; the GA blog does not mention them.",
   "sources": [
    {
     "t": "Aura Agent docs",
     "u": "https://neo4j.com/docs/aura/aura-agent/"
    },
    {
     "t": "Neo4j launches Aura Agent (blog)",
     "u": "https://neo4j.com/blog/agentic-ai/neo4j-launches-aura-agent/"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Stardog Voicebox generating mappings and descriptions (lead)",
   "text": "Partly confirmed. Voicebox for Designer needs a Voicebox-enabled endpoint and lists 'Automated Ontology Generation' that maps data sources to ontology concepts with human review. AI-written descriptions are not documented; the Designer bulk description edit is manual, and the dev guide says Voicebox API access is limited.",
   "sources": [
    {
     "t": "Voicebox: Ontology Maintenance and Data Mapping",
     "u": "https://docs.stardog.com/voicebox/guided-ontology-creation-and-mapping/"
    },
    {
     "t": "Stardog Designer",
     "u": "https://docs.stardog.com/stardog-applications/designer/"
    },
    {
     "t": "Stardog Voicebox",
     "u": "https://docs.stardog.com/voicebox/"
    },
    {
     "t": "Voicebox Developer Guide",
     "u": "https://docs.stardog.com/voicebox/voicebox-dev-guide/"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Stardog virtual graph mapping import (lead)",
   "text": "Refined. 'virtual add' registers a mapping file and 'virtual import' copies mapped data into Stardog; neither imports mapping files as metadata. Relational sources with a built-in schema get automatic R2RML direct mapping, SMS2 is the recommended syntax, and release notes say SMS1 support was removed in 11.0.0 (2025-01-22) although the virtual graphs page still names SMS as the default.",
   "sources": [
    {
     "t": "Virtual Graphs",
     "u": "https://docs.stardog.com/virtual-graphs/"
    },
    {
     "t": "Mapping Data Sources",
     "u": "https://docs.stardog.com/virtual-graphs/mapping-data-sources"
    },
    {
     "t": "Stardog Platform Release Notes",
     "u": "https://docs.stardog.com/release-notes/stardog-platform"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "RelationalAI model generation (lead)",
   "text": "Partly confirmed, through coding agents and not an in-product generator. The 12 RelationalAI Agent Skills include rai-ontology, which builds ontologies from Snowflake tables or local data, and the tutorial tells you to review the generated files in model/. The docs home calls the product a 'decision intelligence platform'; RAI_QUERY_MODEL is Preview and Cortex agent deployment is early access.",
   "sources": [
    {
     "t": "RelationalAI Agent Skills",
     "u": "https://docs.relational.ai/build/agents/skills/index.md"
    },
    {
     "t": "Go further with a coding agent (tutorial)",
     "u": "https://docs.relational.ai/build/tutorials/get-started-with-coding-agents/index.md"
    },
    {
     "t": "Cortex agent API (PyRel v1.37)",
     "u": "https://docs.relational.ai/api/python/v1.37/agent/cortex/index.md"
    },
    {
     "t": "RelationalAI docs home",
     "u": "https://docs.relational.ai/"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "data.world ownership and AI Context Engine (lead)",
   "text": "The data.world home page shows the banner 'data.world is now part of ServiceNow!' with no date. The name 'AI Context Engine' appears nowhere on the data.world pages and docs fetched, so it is Unverified. The docs name the AI assistant Archie.",
   "sources": [
    {
     "t": "data.world home",
     "u": "https://data.world/"
    },
    {
     "t": "Using Archie AI Assistant",
     "u": "https://docs.data.world/en/160498-using-archie.html"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "data.world AI-generated metadata (lead)",
   "text": "Confirmed as Archie Enrich, in Public Preview for Enterprise customers. It drafts descriptions for tables, columns, glossary terms and collections, marks output '[Archie suggestion]', and generates up to 50 descriptions at once in bulk mode. SQL generation and research-question generation are beta, and the FAQ says customer data is not used to train the model.",
   "sources": [
    {
     "t": "Using Archie AI Assistant",
     "u": "https://docs.data.world/en/160498-using-archie.html"
    },
    {
     "t": "Enriching catalog resources with Archie",
     "u": "https://docs.data.world/en/160499-enriching-catalog-resources-with-archie.html"
    },
    {
     "t": "Enriching catalog resources in bulk using Archie",
     "u": "https://docs.data.world/en/317108-adding-descriptions-in-bulk-to-collection-resources.html"
    },
    {
     "t": "Archie beta features",
     "u": "https://docs.data.world/en/329793-archie-beta-features.html"
    },
    {
     "t": "Archie FAQ",
     "u": "https://docs.data.world/en/277381-archie-faq.html"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "data.world bulk import APIs (lead)",
   "text": "Confirmed. PATCH /v0/metadata/resources/bulk/{owner} updates up to 25 resources per call, and the bulk create endpoint has the same limit; the reference lists no rate limits. The MCP server can edit descriptions, tags and custom properties, and Excel bulk upload exists in the Catalog Toolkit.",
   "sources": [
    {
     "t": "data.world developer docs",
     "u": "https://developer.data.world"
    },
    {
     "t": "Bulk update catalog resources (API)",
     "u": "https://developer.data.world/reference/bulkupdate-1.md"
    },
    {
     "t": "data.world MCP server for AI assistants",
     "u": "https://docs.data.world/en/413220-data-world-mcp-server-for-ai-assistants.html"
    },
    {
     "t": "Bulk uploading collections (CTK)",
     "u": "https://docs.data.world/en/292299-bulk-uploading-collections--ctk-.html"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "data.world lineage (lead)",
   "text": "Partly confirmed. The system collects lineage automatically from supported systems through collectors, and users can add manual relationships. The pages reviewed do not say whether lineage is column-level, so the lineage level is 0 under the column-level definition.",
   "sources": [
    {
     "t": "Custom relationships for lineage (CTK)",
     "u": "https://docs.data.world/en/360706-creating-custom-relationships-for-lineage-in-eureka-explorer--ctk-.html"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Palantir AI-assisted ontology creation (lead)",
   "text": "Partly confirmed. AI FDE has an Ontology editing mode for 'creating or updating the objects, links, and actions', needs AIP enabled, and recommends Global Branching. The docs show no beta or GA label and do not name object types or descriptions.",
   "sources": [
    {
     "t": "AI FDE overview",
     "u": "https://www.palantir.com/docs/foundry/ai-fde/overview/"
    },
    {
     "t": "AI FDE modes and capabilities",
     "u": "https://www.palantir.com/docs/foundry/ai-fde/modes-and-capabilities/"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Palantir AIP Evals (lead)",
   "text": "Confirmed. AIP Evals tests AIP Logic, AIP Chatbot and code-authored functions with built-in, LLM-as-judge or custom evaluators, and test cases come from manual entry or Ontology object sets. A 'Generate evals' button exists for eligible Logic functions, and the docs show no status label; AIP Chatbot Studio is the new name of AIP Agent Studio.",
   "sources": [
    {
     "t": "AIP Evals overview",
     "u": "https://www.palantir.com/docs/foundry/aip-evals/overview/"
    },
    {
     "t": "AIP Evals: create an evaluation suite",
     "u": "https://www.palantir.com/docs/foundry/aip-evals/create-suite/"
    },
    {
     "t": "AIP Evals: getting started",
     "u": "https://www.palantir.com/docs/foundry/aip-evals/getting-started/"
    },
    {
     "t": "AIP overview",
     "u": "https://www.palantir.com/docs/foundry/aip/overview/"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Palantir Foundry data lineage (lead)",
   "text": "Partly confirmed. Data Lineage is a dataset graph with ancestors and descendants, and its column feature only finds datasets that share a column name. Workflow Lineage adds property provenance across Ontology objects, functions, actions and apps; I found no column-level lineage in the docs reviewed.",
   "sources": [
    {
     "t": "Data Lineage overview",
     "u": "https://www.palantir.com/docs/foundry/data-lineage/overview/"
    },
    {
     "t": "Data Lineage: find datasets with a given column",
     "u": "https://www.palantir.com/docs/foundry/data-lineage/find-column/"
    },
    {
     "t": "Workflow Lineage",
     "u": "https://www.palantir.com/docs/foundry/workflow-lineage/refactor-and-understand-workflows/"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Palantir Sensitive Data Scanner rename",
   "text": "The page says Sensitive Data Scanner was formerly called Foundry Inference. It may not be enabled by default on an enrollment.",
   "sources": [
    {
     "t": "Sensitive Data Scanner overview",
     "u": "https://www.palantir.com/docs/foundry/sensitive-data-scanner/overview/"
    }
   ],
   "from": "enrich-kg.json"
  },
  {
   "topic": "Method and limits",
   "text": "WebSearch budget ran out mid-task and WebFetch could not reach vendor hosts (docs.oracle.com, postgresql.org, clickhouse.com, duckdb.org, teradata). I used search summaries and GitHub pages only. A level 0 means not found in what I could check, not proven absent.",
   "sources": [],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Postgres, ClickHouse, DuckDB sources",
   "text": "URLs for clickhouse.com, duckdb.org and postgresql.org docs come from research/postgres-clickhouse-duckdb.json. I did not re-fetch them. The Postgres COMMENT syntax was verified from the postgres/postgres GitHub source. The ClickHouse snippet is the documented COMMENT COLUMN form, unverified in this session.",
   "sources": [
    {
     "t": "COMMENT reference (GitHub)",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/ref/comment.sgml"
    }
   ],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Oracle annotations version",
   "text": "Search summaries disagree on version. One Oracle blog says annotations were introduced in 26ai and backported to 19.28; an Autonomous release note says 23ai. The column-level annotation DDL form was not verified, so the snippet shows table level only.",
   "sources": [
    {
     "t": "How to convert object comments to schema annotations",
     "u": "https://blogs.oracle.com/sql/how-to-convert-object-comments-to-schema-annotations"
    },
    {
     "t": "Interact with metadata (release note)",
     "u": "https://docs.oracle.com/en-us/iaas/releasenotes/autonomous-database-dedicated/adbd-selectai-sqlquerygen.htm"
    }
   ],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Oracle Select AI feedback as evals",
   "text": "Docs say feedback works only on 26ai with an NL2SQL profile, and creates a vector index named <profile>_FEEDBACK_VECINDEX. Negative feedback is refined by an LLM and stored as hints. I rated it 3 because no Preview label was seen, but the label was not checked on the page itself.",
   "sources": [
    {
     "t": "Select AI feedback",
     "u": "https://docs.oracle.com/iaas/autonomous-database-serverless/doc/select-ai-feedback.html"
    }
   ],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Teradata VantageCloud",
   "text": "Almost nothing Teradata-specific on AI metadata was confirmed. The Teradata MCP server on GitHub is described as community development under the MIT license and offers YAML semantic layer tools. Enterprise Vector Store and VantageCloud AI features were not verified.",
   "sources": [
    {
     "t": "Teradata MCP Server (GitHub)",
     "u": "https://github.com/Teradata/teradata-mcp-server"
    }
   ],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Databricks Data Classification status",
   "text": "Release notes show GA on 2026-04-20. Scanning views reached Beta on 2026-09-15, the API went GA on 2026-10-14, and auto-tag configuration in the API remains Public Preview.",
   "sources": [
    {
     "t": "Data Classification release notes",
     "u": "https://docs.databricks.com/aws/en/release-notes/data-classification"
    }
   ],
   "from": "enrich-snowflake-databricks-google.json"
  },
  {
   "topic": "Databricks bulk comments",
   "text": "ALTER TABLE ... ALTER COLUMN accepts several column changes in one statement on Runtime 16.3 and above, separated by commas.",
   "sources": [
    {
     "t": "ALTER TABLE ... COLUMN clause",
     "u": "https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-alter-table-manage-column"
    }
   ],
   "from": "enrich-snowflake-databricks-google.json"
  },
  {
   "topic": "Genie naming",
   "text": "Genie Spaces are now called Genie Agents, and docs moved to the genie-agents path. Benchmarks and value sampling pages carry no status label.",
   "sources": [
    {
     "t": "Tune Genie Agent quality",
     "u": "https://docs.databricks.com/aws/en/genie-agents/tune-quality"
    }
   ],
   "from": "enrich-snowflake-databricks-google.json"
  },
  {
   "topic": "BigQuery column descriptions and lineage",
   "text": "ALTER COLUMN SET OPTIONS (description=...) is documented for tables and views. Column-level lineage for BigQuery jobs went GA on 2025-09-29.",
   "sources": [
    {
     "t": "DDL statements in GoogleSQL",
     "u": "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
    },
    {
     "t": "Knowledge Catalog release notes",
     "u": "https://docs.cloud.google.com/knowledge-catalog/docs/release-notes"
    }
   ],
   "from": "enrich-snowflake-databricks-google.json"
  },
  {
   "topic": "BigQuery naming",
   "text": "Dataplex Universal Catalog is now called Knowledge Catalog. Conversational Analytics API is GA for BigQuery and Looker as of 2026-06-23, and verified queries were formerly golden queries.",
   "sources": [
    {
     "t": "Conversational Analytics API release notes",
     "u": "https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/release-notes"
    }
   ],
   "from": "enrich-snowflake-databricks-google.json"
  },
  {
   "topic": "Snowflake sample values",
   "text": "SAMPLE_VALUES and IS_ENUM are supported in semantic view YAML and DDL. IS_ENUM marks the listed values as the full set and is valid on dimensions only.",
   "sources": [
    {
     "t": "YAML vs DDL authoring for semantic views",
     "u": "https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl"
    }
   ],
   "from": "enrich-snowflake-databricks-google.json"
  },
  {
   "topic": "Looker scored none",
   "text": "AI descriptions, auto classification, query history, column lineage and evals were checked against Looker docs and are not offered natively. Descriptions are written as LookML.",
   "sources": [
    {
     "t": "Conversational Analytics in Looker overview",
     "u": "https://docs.cloud.google.com/looker/docs/conversational-analytics-overview"
    },
    {
     "t": "Track data lineage with Knowledge Catalog",
     "u": "https://docs.cloud.google.com/looker/docs/looker-core-lineage"
    }
   ],
   "from": "enrich-snowflake-databricks-google.json"
  },
  {
   "topic": "Method and limits",
   "text": "WebFetch failed on every host (DNS error) and the shared WebSearch budget ran out partway. Facts come from search result summaries only, not from reading full pages. Read each cited page before publishing.",
   "sources": [],
   "from": "enrich-virtualization-semantic.json"
  },
  {
   "topic": "Vendors not covered",
   "text": "timbr, dbt, cube, atscale, wrenai, malloy and honeydew have no entry. Nothing could be verified for them, and a guessed level 0 would read as a claim of absence. They need a rerun.",
   "sources": [],
   "from": "enrich-virtualization-semantic.json"
  },
  {
   "topic": "Dremio AI wiki status",
   "text": "The preview label comes from a search summary of older docs.dremio.com/cloud/sonar pages. Newer dremio-cloud pages may differ. Dremio was described as part of SAP in a search result title.",
   "sources": [
    {
     "t": "Dremio Generative AI docs",
     "u": "https://docs.dremio.com/cloud/sonar/genai"
    }
   ],
   "from": "enrich-virtualization-semantic.json"
  },
  {
   "topic": "Starburst AIDA release",
   "text": "Search summaries say AIDA became GA on Galaxy and SEP in May 2026 and that Data Products as Code is in public preview. One result also dates an AIDA announcement 2026-04-13.",
   "sources": [
    {
     "t": "Starburst Enterprise Intelligence Platform release",
     "u": "https://www.starburst.io/press-releases/starburst-unveils-enterprise-intelligence-platform-giving-enterprises-a-faster-path-to-trusted-ai/"
    }
   ],
   "from": "enrich-virtualization-semantic.json"
  }
 ]
};
