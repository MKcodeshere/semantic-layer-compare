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
   "verdict": "partial",
   "verdictNote": "Vantage has no native semantic model object, but Teradata's open-source MCP server adds YAML cubes, a glossary and predefined SQL tools that an agent can call.",
   "artifacts": [
    {
     "name": "Teradata MCP Server (MIT license)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "2025-08",
     "format": "Python package (PyPI, v0.2.8 in Sept 2026), YAML tool definitions",
     "url": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/README.md"
    },
    {
     "name": "MCP server semantic layer objects (cubes, glossary, prompts, tools in YAML)",
     "kind": "semantic-model",
     "status": "Unverified",
     "since": "",
     "format": "YAML (*_objects.yml)",
     "url": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/CUSTOMIZING.md"
    },
    {
     "name": "Teradata Enterprise Vector Store",
     "kind": "vector",
     "status": "GA",
     "since": "2026-04",
     "format": "SQL, API",
     "url": "https://www.teradata.com/press-releases/2026/teradata-enables-ai-agents"
    },
    {
     "name": "Teradata Autonomous Knowledge Platform (Teradata Cloud on AWS, Teradata Factory)",
     "kind": "agent",
     "status": "GA",
     "since": "2026-07",
     "format": "Platform",
     "url": "https://www.teradata.com/press-releases/2026/teradata-autonomous-knowledge-platform-availability"
    },
    {
     "name": "Teradata AI Studio",
     "kind": "agent",
     "status": "GA",
     "since": "2026-07",
     "format": "GUI, platform",
     "url": "https://www.teradata.com/press-releases/2026/teradata-autonomous-knowledge-platform-availability"
    },
    {
     "name": "Tera natural-language workspace (Tera Analyze, Tera Code, Tera Claw)",
     "kind": "nl2sql",
     "status": "Announced",
     "since": "2026-05",
     "format": "GUI",
     "url": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "MCP server cubes declare measures with SQL expressions in YAML. Open-source add-on, not a Vantage object.",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/CUSTOMIZING.md"
    },
    "dimensions": {
     "l": 1,
     "n": "MCP server cubes declare named dimensions with descriptions and SQL expressions. No hierarchy or time grain object.",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/CUSTOMIZING.md"
    },
    "relationships": {
     "l": 1,
     "n": "Cube joins declare join conditions and join type. Optional joins are added only when a requested dimension or filter needs them.",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/CUSTOMIZING.md"
    },
    "synonyms": {
     "l": 1,
     "n": "MCP server glossary terms hold definitions and synonyms. Cubes, dimensions and tools carry descriptions.",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/CUSTOMIZING.md"
    },
    "verifiedQueries": {
     "l": 1,
     "n": "Custom tools are predefined parameterized SQL exposed to agents. There is no question-to-SQL pair store.",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/CUSTOMIZING.md"
    },
    "nl2sql": {
     "l": 1,
     "n": "Teradata lists natural-language agentic analytics for AI Studio (GA Jul 2026) and announced Tera. No SQL generation docs found; MCP server route available.",
     "u": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology or entity-model object in the MCP server docs or the 2026 platform releases.",
     "u": ""
    },
    "graph": {
     "l": 1,
     "n": "PageRank and shortest-path functions run in the separate Machine Learning Engine (SQL-GR). Function-based, not a graph query language.",
     "u": "https://docs.teradata.com/r/Machine-Learning-Engine-Analytic-Function-Reference/February-2022/Graph-Analysis"
    },
    "vector": {
     "l": 3,
     "n": "Enterprise Vector Store adds hybrid search, multimodal embeddings and up to 8K dimensions. Generally available from April 2026.",
     "u": "https://www.teradata.com/press-releases/2026/teradata-enables-ai-agents"
    },
    "mcp": {
     "l": 2,
     "n": "First-party open-source MCP server (MIT). Versions are 0.x on PyPI and the repo states no GA or SLA.",
     "u": "https://pypi.org/pypi/teradata-mcp-server/json"
    },
    "governance": {
     "l": 2,
     "n": "MCP server can run queries under each user's own database credentials, keeping existing RBAC and row-level security.",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/SECURITY.md"
    },
    "openStandard": {
     "l": 0,
     "n": "Cube YAML is specific to the Teradata MCP server. Teradata is not named on the Apache Ossie pages read.",
     "u": "https://ossie.apache.org/updates/osi-april-2026-community-update/"
    },
    "aiDescriptions": {
     "l": 1,
     "n": "AI Studio Enterprise MCP ships prompts for table and database descriptions. An agent drafts text, then COMMENT writes it.",
     "u": "https://docs.teradata.com/r/Teradata-AI-Studio-Release-Notes/AI-Studio-Release-Notes/New-Features"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT ON object AS or IS 'text' sets comments on columns, tables and views by SQL. Comment text is limited to 255 characters. No bulk import found.",
     "u": "https://docs.teradata.com/r/SQL-Data-Definition-Language-Syntax-and-Examples/July-2021/Comment-Help-and-Show-Statements/COMMENT-Comment-Placing-Form/COMMENT-Syntax-Elements-Comment-Placing-Form"
    },
    "autoClassify": {
     "l": 1,
     "n": "Teradata Package for Generative AI offers recognize_pii_entities and mask_pii to detect PII in a DataFrame column, called from Python.",
     "u": "https://docs.teradata.com/r/VMware/Teradata-Package-for-Generative-AI-Function-Reference/text_analytics/teradatagenai.TextAnalyticsAI.recognize_pii_entities.html"
    },
    "sampleValues": {
     "l": 1,
     "n": "MCP server tool qlty_distinctCategories lists distinct values of a column for an agent. No automatic literal matching.",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/src/teradata_mcp_server/tools/qlty/README.md"
    },
    "queryHistory": {
     "l": 1,
     "n": "DBQL logs queries with SQL text and objects once BEGIN QUERY LOGGING is set. Teams mine it themselves.",
     "u": "https://docs.teradata.com/r/Lake-Database-Reference/Database-Administration/Setting-Up-Database-Query-Logging"
    },
    "lineage": {
     "l": 1,
     "n": "Platform releases mention lineage but no docs page was found. DataHub's Teradata source extracts table and column lineage from query logs.",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/teradata.md"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL evaluation tooling in the MCP server README or docs index.",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/README.md"
    }
   },
   "offers": [
    "Open-source MCP server with tool groups for queries, data quality, RAG, vector store, feature store and admin.",
    "YAML defines cubes (measures, dimensions, joins), glossary terms, prompts and tools without Python code.",
    "Cubes compile to SQL at run time and reject unknown dimension or measure names before the query is sent.",
    "Enterprise Vector Store for vector and hybrid search, generally available from April 2026.",
    "Per-user database credentials can be passed through, so existing permissions apply to tool calls."
   ],
   "gaps": [
    "No native semantic model object in Vantage with metrics, dimensions and joins. Cubes live in the MCP server only.",
    "MCP server is 0.x software; the repo gives no SLA or GA statement.",
    "No verified question-to-SQL store. Predefined tools and prompts are the nearest thing.",
    "Tera natural-language workspace is not in the July 2026 availability list, and SQL generation docs were not found."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "AtScale",
    "Custom MCP YAML tools",
    "LangChain"
   ],
   "nl2sqlPath": "Run the Teradata MCP server, define cubes, glossary terms and prompts in YAML, and let an agent call those tools instead of writing free SQL. Use an external semantic layer if you need governed metrics across many tools. Check Tera and AI Studio docs for your deployment before depending on them.",
   "snippet": {
    "lang": "yaml",
    "title": "Cube with a dimension and a measure in Teradata MCP server YAML",
    "code": "sales_by_region:\n  type: cube\n  description: Sales metrics by region and product\n  sql: |\n    SELECT region, product, amount AS total_sales FROM sales_data\n  dimensions:\n    region:\n      description: Sales region\n      expression: region\n  measures:\n    total_sales:\n      description: Total sales amount\n      expression: SUM(amount)",
    "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/CUSTOMIZING.md"
   },
   "sources": [
    {
     "t": "Teradata MCP Server README",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/README.md"
    },
    {
     "t": "Teradata MCP Server: customizing semantic layers",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/CUSTOMIZING.md"
    },
    {
     "t": "Teradata MCP Server: security",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/server_guide/SECURITY.md"
    },
    {
     "t": "teradata-mcp-server on PyPI",
     "u": "https://pypi.org/pypi/teradata-mcp-server/json"
    },
    {
     "t": "Introducing the Teradata Autonomous Knowledge Platform (May 2026)",
     "u": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    },
    {
     "t": "Autonomous Knowledge Platform reaches general availability (Jul 2026)",
     "u": "https://www.teradata.com/press-releases/2026/teradata-autonomous-knowledge-platform-availability"
    },
    {
     "t": "Teradata Enterprise Vector Store release (Mar 2026)",
     "u": "https://www.teradata.com/press-releases/2026/teradata-enables-ai-agents"
    },
    {
     "t": "Enterprise Vector Store",
     "u": "https://www.teradata.com/platform/enterprise-vector-store"
    },
    {
     "t": "Open Semantic Interchange community update, April 2026",
     "u": "https://ossie.apache.org/updates/osi-april-2026-community-update/"
    },
    {
     "t": "Machine Learning Engine: Graph Analysis (Feb 2022)",
     "u": "https://docs.teradata.com/r/Machine-Learning-Engine-Analytic-Function-Reference/February-2022/Graph-Analysis"
    },
    {
     "t": "COMMENT syntax, placing form",
     "u": "https://docs.teradata.com/r/SQL-Data-Definition-Language-Syntax-and-Examples/July-2021/Comment-Help-and-Show-Statements/COMMENT-Comment-Placing-Form/COMMENT-Syntax-Comment-Placing-Form"
    },
    {
     "t": "COMMENT syntax elements, placing form",
     "u": "https://docs.teradata.com/r/SQL-Data-Definition-Language-Syntax-and-Examples/July-2021/Comment-Help-and-Show-Statements/COMMENT-Comment-Placing-Form/COMMENT-Syntax-Elements-Comment-Placing-Form"
    },
    {
     "t": "Teradata MCP Server: qlty tools",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/src/teradata_mcp_server/tools/qlty/README.md"
    },
    {
     "t": "Teradata MCP Server docs index",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/docs/README.md"
    },
    {
     "t": "DataHub Teradata source",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/teradata.md"
    },
    {
     "t": "Teradata AI Studio release notes: New Features",
     "u": "https://docs.teradata.com/r/Teradata-AI-Studio-Release-Notes/AI-Studio-Release-Notes/New-Features"
    },
    {
     "t": "Teradata Package for Generative AI: recognize_pii_entities",
     "u": "https://docs.teradata.com/r/VMware/Teradata-Package-for-Generative-AI-Function-Reference/text_analytics/teradatagenai.TextAnalyticsAI.recognize_pii_entities.html"
    },
    {
     "t": "Setting Up Database Query Logging (DBQL)",
     "u": "https://docs.teradata.com/r/Lake-Database-Reference/Database-Administration/Setting-Up-Database-Query-Logging"
    }
   ],
   "verified": "2026-10-24",
   "logo": "teradata",
   "worksWith": [],
   "enrichHowTo": "Write column and table comments with the COMMENT statement, one statement per object, from a script. Comment text is capped at 255 characters. The Teradata MCP server can also load descriptions, glossary terms and cubes from YAML for an agent. Draft text with your own LLM job and review it by hand.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "COMMENT ON COLUMN sales.orders.status IS 'open, shipped, or cancelled. Exclude cancelled from revenue.';",
    "u": "https://docs.teradata.com/r/SQL-Data-Definition-Language-Syntax-and-Examples/July-2021/Comment-Help-and-Show-Statements/COMMENT-Comment-Placing-Form/COMMENT-Syntax-Comment-Placing-Form"
   }
  },
  {
   "id": "oracle",
   "name": "Oracle Database / Autonomous AI Database",
   "category": "oltp",
   "tagline": "Converged database with analytic views, Select AI, SQL property graphs, vector search and an MCP server.",
   "verdict": "partial",
   "verdictNote": "Analytic Views are an in-database semantic layer and Select AI reads comments, annotations and constraints, but Oracle docs do not show Select AI reading analytic view definitions.",
   "artifacts": [
    {
     "name": "Analytic Views",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "SQL DDL (CREATE ANALYTIC VIEW)",
     "url": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-ANALYTIC-VIEW.html"
    },
    {
     "name": "Select AI (natural language to SQL)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "PL/SQL (DBMS_CLOUD_AI), SQL",
     "url": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai.html"
    },
    {
     "name": "Select AI profile attributes: comments, annotations, constraints",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "AI profile JSON attributes; annotations need Oracle AI Database 26ai",
     "url": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/dbms-cloud-ai-package.html"
    },
    {
     "name": "Select AI feedback (stored corrected SQL used as hints)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2025-09",
     "format": "DBMS_CLOUD_AI.FEEDBACK, 26ai only",
     "url": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-feedback.html"
    },
    {
     "name": "Select AI Agent framework",
     "kind": "agent",
     "status": "GA",
     "since": "2025-10",
     "format": "PL/SQL (DBMS_CLOUD_AI_AGENT)",
     "url": "https://www.oracle.com/autonomous-database/select-ai/"
    },
    {
     "name": "Autonomous AI Database MCP Server",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-12",
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
     "n": "Analytic views define base measures over fact columns and calculated measures, for example LAG over a hierarchy.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-ANALYTIC-VIEW.html"
    },
    "dimensions": {
     "l": 3,
     "n": "DIMENSION BY lists attribute dimensions with hierarchies. CAPTION and DESCRIPTION classifications attach text to views and components.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-ANALYTIC-VIEW.html"
    },
    "relationships": {
     "l": 3,
     "n": "KEY ... REFERENCES maps fact columns to dimension keys. Select AI can also send foreign key constraints when the constraints attribute is true.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-ANALYTIC-VIEW.html"
    },
    "synonyms": {
     "l": 3,
     "n": "Profile attributes comments and annotations add table and column text to the prompt. Annotations need 26ai. No synonym list object.",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/dbms-cloud-ai-package.html"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "DBMS_CLOUD_AI.FEEDBACK stores confirmed or corrected SQL in a per-profile vector index and sends similar ones as hints. 26ai only.",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-feedback.html"
    },
    "nl2sql": {
     "l": 3,
     "n": "Select AI generates, runs and explains SQL from a prompt (runsql, showsql, explainsql). Needs an AI profile and an LLM provider.",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai.html"
    },
    "ontology": {
     "l": 0,
     "n": "No object, link or action layer in the Select AI or analytic view docs. Teams combine analytic views with property graphs.",
     "u": ""
    },
    "graph": {
     "l": 3,
     "n": "Oracle AI Database 26ai supports SQL property graphs and the SQL/PGQ standard, with GraphRAG and graph algorithm packages.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/nfcoa/graph.html"
    },
    "vector": {
     "l": 3,
     "n": "VECTOR data type introduced with 26ai. COMPATIBLE must be 23.4.0 or higher. ONNX embedding models can run in the database.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/overview-ai-vector-search.html"
    },
    "mcp": {
     "l": 3,
     "n": "Managed MCP server for Autonomous AI Database (Serverless, Dedicated Region, multicloud). Exposes custom and built-in Select AI Agent tools.",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/about-mcp-server.html"
    },
    "governance": {
     "l": 3,
     "n": "Oracle says MCP access honors RBAC, auditing, VPD and redaction. Grants on analytic views specifically are not covered by that page.",
     "u": "https://www.oracle.com/autonomous-database/mcp-server/"
    },
    "openStandard": {
     "l": 0,
     "n": "Analytic view DDL is Oracle SQL. Oracle is listed as a participant in the Apache Ossie (OSI) working groups, but no Oracle converter is shown.",
     "u": "https://ossie.apache.org/updates/osi-april-2026-community-update/"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No DBMS_CLOUD_AI procedure or console feature drafts comments or annotations. Select AI reads text you write. Teams draft with their own LLM job.",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/dbms-cloud-ai-package.html"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT ON and annotation DDL (CREATE or ALTER TABLE ... ANNOTATIONS) by SQL script. Annotations apply to tables, views, columns and indexes. No bulk API.",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/annotations_clause.html"
    },
    "autoClassify": {
     "l": 1,
     "n": "Oracle Data Safe, a separate OCI service, discovers and classifies sensitive data with 150+ predefined types. It does not feed Select AI.",
     "u": "https://www.oracle.com/security/database-security/data-safe/"
    },
    "sampleValues": {
     "l": 0,
     "n": "No value sampling. Profile attribute case_sensitive_values only tells the LLM whether to generate case-insensitive string comparisons.",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/dbms-cloud-ai-package.html"
    },
    "queryHistory": {
     "l": 0,
     "n": "Select AI logs generated SQL in V$CLOUD_AI_SQL. Nothing mines that history to suggest joins, metrics or examples.",
     "u": "https://raw.githubusercontent.com/oracle/skills/main/db/features/select-ai.md"
    },
    "lineage": {
     "l": 1,
     "n": "OCI Data Catalog, a separate service, shows table and column lineage for Data Integration and Data Flow jobs. No lineage view inside the database.",
     "u": "https://docs.oracle.com/en-us/iaas/Content/data-catalog/using/view-data-lineage-dis.htm"
    },
    "evals": {
     "l": 3,
     "n": "DBMS_CLOUD_AI.FEEDBACK stores confirmed or corrected SQL per profile and reuses it as hints. 26ai only. No benchmark runner.",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-feedback.html"
    }
   },
   "offers": [
    "Analytic Views: measures, dimensions and hierarchies stored in the database and queried with SQL.",
    "Select AI generates SQL from questions using table metadata, comments, annotations and foreign key constraints from an AI profile.",
    "Select AI feedback stores corrected SQL and reuses it as hints for similar prompts (26ai).",
    "Managed MCP server exposes Select AI Agent tools under database roles, VPD and auditing.",
    "SQL property graphs (SQL/PGQ) and AI Vector Search run in the same engine as the data."
   ],
   "gaps": [
    "Oracle docs do not show Select AI reading analytic view definitions as semantic context.",
    "Annotations, feedback and several profile options need 26ai.",
    "No ontology layer. Analytic view DDL is Oracle specific, with no Oracle converter listed for Apache Ossie.",
    "The built-in MCP server is a feature of Autonomous AI Database, not of self-managed databases."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "AtScale",
    "Oracle APEX review step",
    "Custom prompt examples"
   ],
   "nl2sqlPath": "Add comments and annotations to tables and columns, create a Select AI profile with comments, annotations and constraints set to true, and limit it to a known object list. Record corrected SQL with DBMS_CLOUD_AI.FEEDBACK and expose tools through Select AI Agent and the MCP server. Test whether analytic views help generation before relying on them.",
   "snippet": {
    "lang": "sql",
    "title": "Analytic view over a fact table with one time dimension, two measures and one calculated measure",
    "code": "CREATE OR REPLACE ANALYTIC VIEW sales_av\nUSING sales_fact\nDIMENSION BY\n (time_attr_dim\n  KEY month_id REFERENCES month_id\n  HIERARCHIES (\n   time_hier DEFAULT))\nMEASURES\n (sales FACT sales,\n  units FACT units,\n  sales_prior_period AS\n   (LAG(sales) OVER (HIERARCHY time_hier OFFSET 1)))\nDEFAULT MEASURE SALES;",
    "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-ANALYTIC-VIEW.html"
   },
   "sources": [
    {
     "t": "CREATE ANALYTIC VIEW (26ai)",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-ANALYTIC-VIEW.html"
    },
    {
     "t": "Use Select AI for natural language interaction",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai.html"
    },
    {
     "t": "DBMS_CLOUD_AI package (profiles, attributes, feedback)",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/dbms-cloud-ai-package.html"
    },
    {
     "t": "Select AI feedback",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-feedback.html"
    },
    {
     "t": "Select AI examples (comments, annotations, constraints)",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-examples.html"
    },
    {
     "t": "About MCP Server",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/about-mcp-server.html"
    },
    {
     "t": "Autonomous AI Database MCP Server (product page)",
     "u": "https://www.oracle.com/autonomous-database/mcp-server/"
    },
    {
     "t": "Select AI product page",
     "u": "https://www.oracle.com/autonomous-database/select-ai/"
    },
    {
     "t": "Oracle AI Database 26ai graph",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/nfcoa/graph.html"
    },
    {
     "t": "Oracle AI Vector Search overview",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/overview-ai-vector-search.html"
    },
    {
     "t": "Open Semantic Interchange community update, April 2026",
     "u": "https://ossie.apache.org/updates/osi-april-2026-community-update/"
    },
    {
     "t": "Annotations clause (26ai SQL reference)",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/annotations_clause.html"
    },
    {
     "t": "Registering application data usage, schema annotations (19c)",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/19/adfns/registering-application-data-usage-database.html"
    },
    {
     "t": "Select AI release note: comments, annotations, constraints",
     "u": "https://docs.oracle.com/en-us/iaas/releasenotes/autonomous-database-dedicated/adbd-selectai-sqlquerygen.htm"
    },
    {
     "t": "oracle/skills: Select AI",
     "u": "https://raw.githubusercontent.com/oracle/skills/main/db/features/select-ai.md"
    },
    {
     "t": "Oracle Data Safe",
     "u": "https://www.oracle.com/security/database-security/data-safe/"
    },
    {
     "t": "Data Catalog lineage overview",
     "u": "https://docs.oracle.com/en-us/iaas/Content/data-catalog/using/view-data-lineage-dis.htm"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Write business meaning into table and column annotations and COMMENT ON text, then set comments and annotations to true in the Select AI profile. Add annotations with ALTER TABLE ... ANNOTATIONS (ADD name 'value'), and column ones with ALTER TABLE ... MODIFY col ANNOTATIONS (ADD name 'value'). Record good answers with DBMS_CLOUD_AI.FEEDBACK.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "ALTER TABLE Table1 ANNOTATIONS(ADD JoinOperations 'Join');\nALTER TABLE Table1 MODIFY T ANNOTATIONS(ADD Label, DROP Identity);\n-- then in the Select AI profile attributes: \"annotations\": \"true\"",
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
     "n": "Core PostgreSQL has no description generator. Hosted variants may differ.",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/ref/comment.sgml"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT ON TABLE and COLUMN by SQL script. No bulk or file-import command. Any user connected to the database can read all comments.",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/ref/comment.sgml"
    },
    "autoClassify": {
     "l": 1,
     "n": "The postgresql_anonymizer extension has an anon.detect() function that flags identifier columns from a name dictionary. Early stage, heuristic.",
     "u": "https://postgresql-anonymizer.readthedocs.io/en/latest/detection/"
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value or entity-matching feature in core PostgreSQL.",
     "u": ""
    },
    "queryHistory": {
     "l": 0,
     "n": "pg_stat_statements tracks statement statistics. It does not suggest joins, metrics or examples.",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/pgstatstatements.sgml"
    },
    "lineage": {
     "l": 0,
     "n": "No lineage feature. pg_depend records dependencies between database objects, which is not data lineage.",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/catalogs.sgml"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL evaluation tooling in core PostgreSQL.",
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
     "t": "COMMENT reference (postgres/postgres source)",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/ref/comment.sgml"
    },
    {
     "t": "pg_stat_statements (postgres/postgres source)",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/pgstatstatements.sgml"
    },
    {
     "t": "System catalogs, pg_depend (postgres/postgres source)",
     "u": "https://raw.githubusercontent.com/postgres/postgres/master/doc/src/sgml/catalogs.sgml"
    },
    {
     "t": "PostgreSQL Anonymizer: detecting identifiers",
     "u": "https://postgresql-anonymizer.readthedocs.io/en/latest/detection/"
    }
   ],
   "verified": "2026-10-24",
   "logo": "postgresql",
   "worksWith": [],
   "enrichHowTo": "Run COMMENT ON TABLE and COMMENT ON COLUMN for each object from a script that reads descriptions from a file or catalog. Read them back with obj_description and col_description when you build the prompt. Postgres has no AI generator, so draft text with your own LLM job and review it.",
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
     "n": "ClickHouse Assistant in Cloud generates queries, charts and summaries. No feature drafts column or table descriptions.",
     "u": "https://clickhouse.com/docs/products/cloud/features/ai-ml/aichat/using-ai-chat.md"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "ALTER TABLE ... COMMENT COLUMN and ALTER TABLE ... MODIFY COMMENT by SQL. Comments show in system.columns. No bulk API.",
     "u": "https://clickhouse.com/docs/reference/statements/alter/column.md"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification in the SQL reference or Cloud Assistant docs read.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value feature. The mcp-clickhouse list_tables tool returns column metadata and the CREATE statement only.",
     "u": "https://raw.githubusercontent.com/ClickHouse/mcp-clickhouse/main/README.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "system.query_log records executed queries with tables and columns used. Nothing turns it into join, metric or example suggestions.",
     "u": "https://clickhouse.com/docs/reference/system-tables/query_log.md"
    },
    "lineage": {
     "l": 0,
     "n": "No lineage feature. system.query_log lists tables, columns and views per query, which is not a lineage graph.",
     "u": "https://clickhouse.com/docs/reference/system-tables/query_log.md"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL evaluation tooling in the Assistant or MCP server docs read.",
     "u": "https://clickhouse.com/docs/products/cloud/features/ai-ml/aichat/using-ai-chat.md"
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
    },
    {
     "t": "ALTER TABLE column statements",
     "u": "https://clickhouse.com/docs/reference/statements/alter/column.md"
    },
    {
     "t": "ALTER TABLE ... MODIFY COMMENT",
     "u": "https://clickhouse.com/docs/reference/statements/alter/comment.md"
    },
    {
     "t": "system.columns",
     "u": "https://clickhouse.com/docs/reference/system-tables/columns.md"
    },
    {
     "t": "system.query_log",
     "u": "https://clickhouse.com/docs/reference/system-tables/query_log.md"
    },
    {
     "t": "mcp-clickhouse (GitHub)",
     "u": "https://raw.githubusercontent.com/ClickHouse/mcp-clickhouse/main/README.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": "clickhouse",
   "worksWith": [],
   "enrichHowTo": "Set column text with ALTER TABLE ... COMMENT COLUMN, one statement per column, and table text with ALTER TABLE ... MODIFY COMMENT, from a script. Read comments from system.columns when you build the prompt. ClickHouse has no description generator, so draft with your own LLM job.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "ALTER TABLE visits COMMENT COLUMN browser 'This column shows the browser used for accessing the site.'",
    "u": "https://clickhouse.com/docs/reference/statements/alter/column.md"
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
     "n": "No function drafts descriptions into the catalog. MotherDuck prompt() can draft text in SQL, but you must write it back yourself.",
     "u": ""
    },
    "bulkMetadata": {
     "l": 3,
     "n": "COMMENT ON for tables, columns, views and more by SQL, readable from duckdb_tables() and similar functions. No schema or database comments. No bulk import.",
     "u": "https://duckdb.org/docs/2.0/sql/statements/comment_on.html"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification. MotherDuck prompt_jev classifies text values, not columns.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value feature. MotherDuck prompt_sql reads schema and lets you limit tables and columns with include_tables.",
     "u": "https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/prompt-sql/"
    },
    "queryHistory": {
     "l": 0,
     "n": "MotherDuck QUERY_HISTORY (Business plan) records org queries for usage and cost. It does not suggest joins, metrics or examples.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "No lineage feature found in DuckDB or MotherDuck docs read.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL evaluation tooling found in DuckDB or MotherDuck docs read.",
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
   "enrichHowTo": "Write COMMENT ON TABLE and COMMENT ON COLUMN statements from a script, and read them back through duckdb_tables() or duckdb_columns() when you build the prompt. There is no AI generator, so draft with your own LLM job. Comments cannot be set on schemas or databases.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "COMMENT ON TABLE test_table IS 'very nice table';\nCOMMENT ON COLUMN test_table.test_table_column IS 'very nice column';\nCOMMENT ON TABLE test_table IS NULL;",
    "u": "https://duckdb.org/docs/2.0/sql/statements/comment_on.html"
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
     "n": "Denodo Assistant suggests view and column descriptions from sample data and metadata. Added in 9.1 (Nov 2024). Needs the AI & Denodo Assistant FeaturePack.",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/platform/administration/denodo_platform_feature_packs/denodo_platform_feature_packs"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "VQL DESCRIPTION clause sets view descriptions. Stored procedures DENODO_ASSISTANT_GENERATE_VIEW_DESCRIPTION and _FIELDS_DESCRIPTION draft text per view.",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/vdp/vql/language_for_defining_and_processing_data_vql/object_descriptions/object_descriptions"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification in the feature pack list. Tags are applied by hand and drive Global Security Policies.",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/platform/administration/denodo_platform_feature_packs/denodo_platform_feature_packs"
    },
    "sampleValues": {
     "l": 3,
     "n": "AI SDK samples values per view when it vectorizes metadata. Set examples_per_table = 0 to turn it off. SDK is a separate download.",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/latest/en/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    "queryHistory": {
     "l": 3,
     "n": "Assistant suggests filters, derived fields and cached summaries from past query activity. Needs the AI & Denodo Assistant FeaturePack (Enterprise Plus).",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/platform/administration/denodo_platform_feature_packs/denodo_platform_feature_packs"
    },
    "lineage": {
     "l": 3,
     "n": "COLUMN_DEPENDENCIES returns column-level lineage for derived views, the same data as the Data Lineage dialog in Design Studio.",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/vdp/vql/stored_procedures/predefined_stored_procedures/column_dependencies"
    },
    "evals": {
     "l": 3,
     "n": "AI SDK Evaluator runs questions against ground-truth VQL and reports F1, overlap and efficiency score in an Excel report.",
     "u": "https://community.denodo.com/kb/en/view/document/A%20Quick%20Guide%20to%20the%20Denodo%20AI%20SDK%20Evaluator"
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
     "t": "Denodo Platform feature packs",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/platform/administration/denodo_platform_feature_packs/denodo_platform_feature_packs"
    },
    {
     "t": "Object Descriptions (VQL Guide)",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/vdp/vql/language_for_defining_and_processing_data_vql/object_descriptions/object_descriptions"
    },
    {
     "t": "DENODO_ASSISTANT_GENERATE_VIEW_DESCRIPTION",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/vdp/vql/stored_procedures/predefined_stored_procedures/denodo_assistant_generate_view_description"
    },
    {
     "t": "DENODO_ASSISTANT_GENERATE_FIELDS_DESCRIPTION",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/vdp/vql/stored_procedures/predefined_stored_procedures/denodo_assistant_generate_fields_description"
    },
    {
     "t": "COLUMN_DEPENDENCIES",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/vdp/vql/stored_procedures/predefined_stored_procedures/column_dependencies"
    },
    {
     "t": "Denodo AI SDK User Manual",
     "u": "https://community.denodo.com/docs/html/document/denodoconnects/latest/en/Denodo%20AI%20SDK%20-%20User%20Manual"
    },
    {
     "t": "A Quick Guide to the Denodo AI SDK Evaluator",
     "u": "https://community.denodo.com/kb/en/view/document/A%20Quick%20Guide%20to%20the%20Denodo%20AI%20SDK%20Evaluator"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Configure Denodo Assistant, then call DENODO_ASSISTANT_GENERATE_VIEW_DESCRIPTION and DENODO_ASSISTANT_GENERATE_FIELDS_DESCRIPTION for each view, or use the Assistant in Design Studio. Review the text and write it back with the VQL DESCRIPTION clause. Maximum description length is 4,000 characters.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "CREATE OR REPLACE VIEW customer360\n DESCRIPTION = 'This is the view that business users need to use to obtain all the information of the customer'\nAS SELECT ...",
    "u": "https://community.denodo.com/docs/html/browse/latest/en/vdp/vql/language_for_defining_and_processing_data_vql/object_descriptions/object_descriptions"
   }
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
     "n": "Generate wiki and Generate labels buttons on a dataset draft text from schema and data. Docs mark the feature Preview.",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/wikis-labels"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Catalog REST API creates wikis and tags per dataset. Wikis cover sources, folders and datasets. No SQL COMMENT or column descriptions found.",
     "u": "https://docs.dremio.com/dremio-cloud/api/catalog/wiki"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic PII classification found. Labels such as PII are added by hand or drafted by the AI label generator.",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/wikis-labels"
    },
    "sampleValues": {
     "l": 0,
     "n": "Docs say the AI agent uses wikis, labels and sampling to judge relevance. No value matching or stored sample values documented.",
     "u": "https://docs.dremio.com/dremio-cloud/explore-analyze/ai-agent"
    },
    "queryHistory": {
     "l": 0,
     "n": "No mining of query history to suggest joins, metrics or examples documented. The AI agent keeps per-user chat history only.",
     "u": "https://docs.dremio.com/dremio-cloud/explore-analyze/ai-agent"
    },
    "lineage": {
     "l": 0,
     "n": "Lineage graph shows source, parent and child datasets. Docs describe no column-level lineage.",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/lineage"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling documented. The AI agent has a feedback dialog that sends chat data to Dremio.",
     "u": "https://docs.dremio.com/dremio-cloud/explore-analyze/ai-agent"
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
     "t": "Wikis and Labels",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/wikis-labels"
    },
    {
     "t": "Generating Labels and Wikis",
     "u": "https://docs.dremio.com/cloud/tutorials/generating-labels-and-wikis"
    },
    {
     "t": "Catalog API: Tag",
     "u": "https://docs.dremio.com/dremio-cloud/api/catalog/tag"
    },
    {
     "t": "Catalog API: Wiki",
     "u": "https://docs.dremio.com/dremio-cloud/api/catalog/wiki"
    },
    {
     "t": "Lineage",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/lineage"
    },
    {
     "t": "SQL commands",
     "u": "https://docs.dremio.com/dremio-cloud/sql/commands/"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Turn on AI under Admin > Project > AI, then use Generate wiki and Generate labels on each dataset and review the text. For scripted writes, call the Catalog API: POST /v0/projects/{project_id}/catalog/{id}/collaboration/wiki for wikis and .../collaboration/tag for labels, one dataset per call.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "curl -X POST \"https://api.dremio.cloud/v0/projects/$PROJECT_ID/catalog/$DATASET_ID/collaboration/tag\" \\\n-H \"Authorization: Bearer $DREMIO_TOKEN\" \\\n-H 'Content-Type: application/json' \\\n--data-raw '{\"tags\": [\"NYC\", \"taxi\", \"2023\"]}'",
    "u": "https://docs.dremio.com/dremio-cloud/api/catalog/tag"
   }
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
     "n": "AI agent enrichment drafts data product, dataset and column descriptions. Automatic Metadata Enrichment announced GA May 2026. Galaxy has Enrich with AIDA.",
     "u": "https://docs.starburst.io/latest/starburst-ai/data-product-enrichment-ai.html"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Trino COMMENT ON TABLE, VIEW, MATERIALIZED VIEW, COLUMN sets one object per statement. Connector support is not covered on that page.",
     "u": "https://trino.io/docs/current/sql/comment.html"
    },
    "autoClassify": {
     "l": 3,
     "n": "Galaxy data classifier jobs scan catalogs, schemas and tables, then propose attribute tags for PII and location columns. Admins accept or reject.",
     "u": "https://docs.starburst.io/starburst-galaxy/security-and-compliance/manage-galaxy-access/manage-users-roles-and-tags/data-classifier-jobs.html"
    },
    "sampleValues": {
     "l": 2,
     "n": "Enrichment can sample rows and column stats into descriptions (public preview). AIDA runs exploratory LIMIT queries before final SQL.",
     "u": "https://docs.starburst.io/latest/starburst-ai/data-product-enrichment-ai.html"
    },
    "queryHistory": {
     "l": 0,
     "n": "AIDA keeps chat history and audit logs. Docs describe no mining of query history for suggestions. Enrichment infers joins from dataset SQL.",
     "u": "https://docs.starburst.io/latest/starburst-ai/aida-ai.html"
    },
    "lineage": {
     "l": 2,
     "n": "Galaxy data lineage shows table and column lineage, one hop each way. Public preview, Galaxy only.",
     "u": "https://docs.starburst.io/starburst-galaxy/working-with-data/explore-data/data-lineage.html"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling or rating loop found in AIDA docs. Business rules and skills steer answers.",
     "u": "https://docs.starburst.io/latest/starburst-ai/aida-ai.html"
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
     "t": "Galaxy: data classifier jobs",
     "u": "https://docs.starburst.io/starburst-galaxy/security-and-compliance/manage-galaxy-access/manage-users-roles-and-tags/data-classifier-jobs.html"
    },
    {
     "t": "Galaxy: data lineage",
     "u": "https://docs.starburst.io/starburst-galaxy/working-with-data/explore-data/data-lineage.html"
    },
    {
     "t": "Starburst Enterprise Intelligence Platform release",
     "u": "https://www.starburst.io/press-releases/starburst-unveils-enterprise-intelligence-platform-giving-enterprises-a-faster-path-to-trusted-ai/"
    },
    {
     "t": "Trino COMMENT",
     "u": "https://trino.io/docs/current/sql/comment.html"
    }
   ],
   "verified": "2026-10-24",
   "logo": "trino",
   "worksWith": [],
   "enrichHowTo": "In the Data products tab, select a data product and click Enrich with AI (Enrich with AIDA in Galaxy), enable data sampling if allowed, then review and save. For scripted writes, run Trino COMMENT ON COLUMN statements, one per column. Enrichment needs AI workflows and Agentic layer licenses and starburst.agent.enabled=true.",
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
     "l": 3,
     "n": "Auto-generated descriptions for concepts, properties, relationships, measures, views and cubes (release 2.52.0, Jan 2026). Bulk generation in Ontology Explorer.",
     "u": "https://docs.timbr.ai/doc/docs/general/changelog/"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "SQL DDL sets concept descriptions, relationship descriptions and tags. Property-level description DDL not found. UI bulk description editor exists.",
     "u": "https://docs.timbr.ai/doc/docs/sql/sql-ddl/"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic PII or semantic-type classification found in docs or changelog. Tags are set by hand with ALTER CONCEPT ... TAG.",
     "u": "https://docs.timbr.ai/doc/docs/sql/sql-ddl/"
    },
    "sampleValues": {
     "l": 0,
     "n": "Ontology Explorer fetches 50 sample rows for people. Knowledge Base instructions map business terms to measures. No value matching for NL-to-SQL found.",
     "u": "https://docs.timbr.ai/doc/docs/platform/modeling/ontology-explorer/"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-log mining. Benchmarks import questions from agent conversation history, and Knowledge Base suggestions come from user feedback.",
     "u": "https://docs.timbr.ai/doc/docs/platform/managing/benchmarks/"
    },
    "lineage": {
     "l": 3,
     "n": "Data Lineage view and SYS_LINEAGE table cover datasources, tables, mappings, concepts, views and properties. Source-column depth not stated.",
     "u": "https://docs.timbr.ai/doc/docs/platform/visualizing/data-lineage/"
    },
    "evals": {
     "l": 3,
     "n": "Benchmarks run question sets with known answers against agents. Knowledge Base can turn user feedback into suggested examples.",
     "u": "https://docs.timbr.ai/doc/docs/platform/managing/benchmarks/"
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
    },
    {
     "t": "Timbr changelog",
     "u": "https://docs.timbr.ai/doc/docs/general/changelog/"
    },
    {
     "t": "Timbr concepts DDL",
     "u": "https://docs.timbr.ai/doc/docs/sql/sql-ddl/"
    },
    {
     "t": "Timbr ontology system tables",
     "u": "https://docs.timbr.ai/doc/docs/getting-started/systables/"
    },
    {
     "t": "Timbr Data Lineage",
     "u": "https://docs.timbr.ai/doc/docs/platform/visualizing/data-lineage/"
    },
    {
     "t": "Timbr Benchmarks",
     "u": "https://docs.timbr.ai/doc/docs/platform/managing/benchmarks/"
    },
    {
     "t": "Timbr Knowledge Bases",
     "u": "https://docs.timbr.ai/doc/docs/sql/knowledge-bases/"
    },
    {
     "t": "Timbr Ontology Explorer",
     "u": "https://docs.timbr.ai/doc/docs/platform/modeling/ontology-explorer/"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "worksWith": [],
   "enrichHowTo": "Use Ontology Explorer to generate descriptions for concepts, properties and measures with the active LLM, then review them. For scripted writes, use SQL DDL: CREATE OR REPLACE CONCEPT ... DESCRIPTION, ALTER CONSTRAINT ... SET DESCRIPTION for relationships, and ALTER CONCEPT ... UPDATE TAG for tags.",
   "bulkSnippet": {
    "lang": "sql",
    "code": "ALTER CONSTRAINT `{relationship_name}` SET DESCRIPTION = '{description value}';\nALTER CONCEPT `{concept_name}` UPDATE TAG `{tag_name}` = '{tag_value}';",
    "u": "https://docs.timbr.ai/doc/docs/sql/sql-ddl/"
   }
  },
  {
   "id": "atscale",
   "name": "AtScale",
   "category": "semantic-layer",
   "tagline": "Enterprise semantic layer with an open modeling language (SML) and an MCP server.",
   "verdict": "native",
   "verdictNote": "AtScale models governed metrics in SML, an open YAML format, and serves them to agents through an MCP server.",
   "worksWith": [
    "Databricks SQL",
    "Google BigQuery",
    "Snowflake",
    "InterSystems IRIS",
    "PostgreSQL",
    "Amazon Redshift"
   ],
   "worksWithUrl": "https://documentation.atscale.com/container/product-requirements/supported-tools-and-platforms",
   "artifacts": [
    {
     "name": "Semantic models in Semantic Modeling Language (SML), Apache open source",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/README.md"
    },
    {
     "name": "AtScale MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-12",
     "format": "API",
     "url": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    {
     "name": "Natural Language Query (NLQ), announced as private preview",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "2024-09",
     "format": "GUI",
     "url": "https://www.atscale.com/press/new-natural-language-query-capabilities-with-semantic-layer-integration/"
    },
    {
     "name": "AtScale for Snowflake Semantic Views (XMLA endpoint, private preview coming soon)",
     "kind": "semantic-model",
     "status": "Announced",
     "since": "",
     "format": "API",
     "url": "https://snowflake.atscale.com/"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metric and calculation objects in SML define aggregated and derived values, including semi-additive and non-additive metrics.",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/metric.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Dimension objects declare attributes and hierarchies for drill-down. SML also covers time-based levels.",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/dimension.md"
    },
    "relationships": {
     "l": 3,
     "n": "Model files declare relationships between fact datasets and dimensions, including role-playing relationships.",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/model.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Models, dimensions, and metrics have description and label fields. MCP column tools return descriptions. No synonyms field found.",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No stored question-to-SQL examples in the SML reference or MCP tools. The MCP get_sml_skills tool serves query guidance.",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    "nl2sql": {
     "l": 1,
     "n": "External agents write SQL through MCP run_query. A first-party NLQ feature was announced as private preview in Sept 2024.",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer in the SML object list. Objects are models, dimensions, metrics, calculations, and datasets.",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/README.md"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found in the SML reference or MCP tools.",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    "vector": {
     "l": 0,
     "n": "No vector search found in the MCP tools or SML reference.",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    "mcp": {
     "l": 3,
     "n": "MCP server tools: list_models, explore_columns, focus_columns, run_query, get_outbound_queries. Enabled through Helm values.",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    "governance": {
     "l": 3,
     "n": "Row security objects restrict rows by user or group. MCP outbound query audit needs the queries_view role.",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/row-security.md"
    },
    "openStandard": {
     "l": 3,
     "n": "SML is Apache open source with converters and a CLI. AtScale joined the Open Semantic Interchange on 27 Jan 2026.",
     "u": "https://snowflake.atscale.com/press/atscale-joins-open-semantic-interchange-open-standards/"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No description generator found in AtScale docs. One-Click Modeling (2025) proposes metrics, dimensions and relationships, not descriptions.",
     "u": "https://www.atscale.com/press/atscale-2025-semantic-layer-summit-innovations/"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "SML objects carry description and label in YAML kept in Git. The open-source SML SDK reads and writes them in code.",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/metric.md"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification found in AtScale docs.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "Designer shows dataset sample rows for modelers. MCP explore_columns returns names and descriptions, not values.",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    "queryHistory": {
     "l": 0,
     "n": "No mining of query history to suggest metrics or examples found in the docs reviewed.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "Lineage panel shows dependencies between SML objects, not source columns. Alation and Collibra connectors export model metadata.",
     "u": "https://documentation.atscale.com/container/creating-and-sharing-cubes/navigating-the-cube-designer-canvas/lineage"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found in AtScale or AI-Link docs.",
     "u": ""
    }
   },
   "offers": [
    "Metrics, dimensions with hierarchies, and relationships modeled in SML, a YAML format kept in Git.",
    "MCP run_query checks agent SQL against the model before it reaches the warehouse.",
    "MCP column tools return descriptions and sampled values for each column.",
    "Row security objects restrict data by user or group.",
    "MCP server listed in the Databricks MCP Marketplace since Dec 2025."
   ],
   "gaps": [
    "No stored question-to-SQL examples and no synonyms field found in the docs.",
    "First-party NLQ was announced as a private preview in Sept 2024. Current docs describe MCP access for external agents.",
    "MCP queries must be SELECT only, one model per query, with no CTEs or subqueries.",
    "Current docs list six warehouses. The Snowflake Semantic Views endpoint is announced, not shipped.",
    "Only SML is open source. The engine is a commercial product."
   ],
   "fillWith": [
    "Apache Ossie YAML"
   ],
   "nl2sqlPath": "Model metrics in AtScale and enable the MCP server in your Helm values. Point your agent at list_models, explore_columns, and run_query so it stays on governed metrics instead of raw tables.",
   "snippet": {
    "lang": "yaml",
    "title": "An SML metric object",
    "code": "unique_name: m_catalog_sales_coupon_amount_avg\nobject_type: metric\nlabel: Catalog Sales Average Coupon Amount\ncalculation_method: average\ndataset: catalog_sales\ncolumn: cs_sales_price",
    "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/metric.md"
   },
   "sources": [
    {
     "t": "AtScale supported tools and platforms",
     "u": "https://documentation.atscale.com/container/product-requirements/supported-tools-and-platforms"
    },
    {
     "t": "SML README",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/README.md"
    },
    {
     "t": "SML metric reference",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/metric.md"
    },
    {
     "t": "SML dimension reference",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/dimension.md"
    },
    {
     "t": "SML model reference",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/model.md"
    },
    {
     "t": "SML row security reference",
     "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/row-security.md"
    },
    {
     "t": "AtScale MCP server tools reference",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/mcp-tools-reference"
    },
    {
     "t": "Enabling the AtScale MCP server",
     "u": "https://documentation.atscale.com/container/connect-integrate/connecting-with-ai/manage-mcp-server/enable-mcp-server"
    },
    {
     "t": "AtScale delivers semantic intelligence to Databricks MCP Marketplace",
     "u": "https://www.atscale.com/press/atscale-databricks-mcp-marketplace-semantic-layer/"
    },
    {
     "t": "AtScale joins Open Semantic Interchange",
     "u": "https://snowflake.atscale.com/press/atscale-joins-open-semantic-interchange-open-standards/"
    },
    {
     "t": "AtScale NLQ private preview announcement",
     "u": "https://www.atscale.com/press/new-natural-language-query-capabilities-with-semantic-layer-integration/"
    },
    {
     "t": "AtScale and Snowflake Semantic Views",
     "u": "https://snowflake.atscale.com/"
    },
    {
     "t": "AtScale Lineage panel",
     "u": "https://documentation.atscale.com/container/creating-and-sharing-cubes/navigating-the-cube-designer-canvas/lineage"
    },
    {
     "t": "AtScale Collibra connector",
     "u": "https://documentation.atscale.com/container/connect-integrate/data-catalog-connectors/collibra"
    },
    {
     "t": "AtScale 2025 Summit announcements",
     "u": "https://www.atscale.com/press/atscale-2025-semantic-layer-summit-innovations/"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Add description and label to each SML object (model, dimension, metric) in the Git repository and deploy. For many objects, script the edits with the open-source SML SDK or CLI, or convert an existing model with the SML converters. Review changes in pull requests.",
   "bulkSnippet": {
    "lang": "yaml",
    "code": "unique_name: m_catalog_sales_coupon_amount_avg\nobject_type: metric\nlabel: Catalog Sales Average Coupon Amount\ndescription: Average coupon amount per catalog sale\ncalculation_method: average\ndataset: catalog_sales\ncolumn: cs_sales_price",
    "u": "https://raw.githubusercontent.com/semanticdatalayer/sml/main/sml-reference/metric.md"
   }
  },
  {
   "id": "cube",
   "name": "Cube (Core and Cloud)",
   "category": "semantic-layer",
   "tagline": "Semantic layer with cubes and views, plus Cloud agents, Analytics Chat, and MCP.",
   "verdict": "native",
   "verdictNote": "Cubes, views, access policies, AI context, certified queries, a Chat API, a hosted MCP server, and Ossie conversion (Preview) are documented.",
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
     "name": "Analytics Chat (Cube agent)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://docs.cube.dev/docs/explore-analyze/analytics-chat.md"
    },
    {
     "name": "Chat API for Cube agents (Premium and Enterprise plans)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://docs.cube.dev/reference/embed-apis/chat-api.md"
    },
    {
     "name": "AI context and certified queries (code-first agent config)",
     "kind": "annotations",
     "status": "GA",
     "since": "2026-04",
     "format": "YAML, Markdown",
     "url": "https://docs.cube.dev/admin/ai"
    },
    {
     "name": "Evals (agent accuracy benchmarks)",
     "kind": "nl2sql",
     "status": "Preview",
     "since": "",
     "format": "YAML",
     "url": "https://docs.cube.dev/admin/ai/evals.md"
    },
    {
     "name": "Remote MCP server (cubecloud.dev/mcp)",
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
     "url": "https://raw.githubusercontent.com/cubedevinc/cube-mcp-server/main/README.md"
    },
    {
     "name": "Apache Ossie conversion (import and export)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-10",
     "format": "CLI, API",
     "url": "https://docs.cube.dev/docs/integrations/apache-ossie.md"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Measures are declared in cubes (count, sum, filtered measures). Views expose them to consumers.",
     "u": "https://docs.cube.dev/reference/data-modeling/cube.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Dimensions, hierarchies, and time dimensions are declared in cubes and included in views.",
     "u": "https://docs.cube.dev/reference/data-modeling/cube.md"
    },
    "relationships": {
     "l": 3,
     "n": "Joins between cubes declare relationship (such as many_to_one). Views use join_path to pick the route.",
     "u": "https://docs.cube.dev/docs/data-modeling/joins.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Descriptions are read by the agent. ai_context in meta on views and members is agent-only, up to 2,000 characters.",
     "u": "https://docs.cube.dev/docs/data-modeling/ai-context.md"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Certified queries are Markdown files with a user_request and SQL. The agent uses them as trusted examples.",
     "u": "https://docs.cube.dev/admin/ai/certified-queries.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "Analytics Chat and the Chat API answer questions over the semantic layer. Chat API needs a Premium or Enterprise plan.",
     "u": "https://docs.cube.dev/docs/explore-analyze/analytics-chat.md"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found in the docs. Cubes and views are the modeling objects.",
     "u": "https://docs.cube.dev/docs/data-modeling/overview.md"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found in the docs.",
     "u": "https://docs.cube.dev/docs/data-modeling/overview.md"
    },
    "vector": {
     "l": 0,
     "n": "No vector or semantic search feature found in the docs index.",
     "u": "https://docs.cube.dev/llms.txt"
    },
    "mcp": {
     "l": 3,
     "n": "Hosted MCP server with OAuth, available on all plans. The earlier local npm server is deprecated.",
     "u": "https://docs.cube.dev/docs/integrations/mcp-server"
    },
    "governance": {
     "l": 3,
     "n": "Access policies combine member access, row filters, and masking by group. Analytics Chat honors the active security context.",
     "u": "https://docs.cube.dev/docs/data-modeling/data-access-policies.md"
    },
    "openStandard": {
     "l": 2,
     "n": "Apache Ossie export and import through the Cube CLI and Platform API. Docs label it Preview; contact support to enable.",
     "u": "https://docs.cube.dev/docs/integrations/apache-ossie.md"
    },
    "aiDescriptions": {
     "l": 1,
     "n": "No dedicated generate-description action found. The Cube Cloud IDE agent edits data model files on request.",
     "u": "https://docs.cube.dev/docs/getting-started/develop-in-ide"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "description and meta.ai_context sit in YAML model files in Git. cube_dbt renders cubes from dbt manifest.json with dbt descriptions.",
     "u": "https://docs.cube.dev/docs/data-modeling/ai-context"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification found in Cube docs. Teams tag by hand in meta or use a catalog.",
     "u": ""
    },
    "sampleValues": {
     "l": 0,
     "n": "No automatic value sampling found. Docs suggest listing allowed values in description or ai_context text.",
     "u": "https://docs.cube.dev/docs/data-modeling/ai-context"
    },
    "queryHistory": {
     "l": 0,
     "n": "Query History and Chats History are monitoring views. No mining of history to suggest metrics or examples found.",
     "u": "https://docs.cube.dev/admin/monitoring/query-history"
    },
    "lineage": {
     "l": 0,
     "n": "No lineage feature found in Cube docs index. Pre-aggregation and query monitoring exist, not column lineage.",
     "u": ""
    },
    "evals": {
     "l": 3,
     "n": "Evals tab benchmarks the agent against questions with ground-truth SQL or certified queries and reports accuracy per run.",
     "u": "https://docs.cube.dev/admin/ai/evals"
    }
   },
   "offers": [
    "Cubes and views give agents a curated, joined model with measures and dimensions defined once.",
    "Hosted MCP server lets Claude, ChatGPT, and Cursor query governed data over OAuth.",
    "Agent configuration lives in the repo: rules, certified queries, and accessible views.",
    "Descriptions and agent-only ai_context in meta guide the agent.",
    "Access policies with row filters and masking apply to agent queries."
   ],
   "gaps": [
    "Cube reads only SQL-queryable sources, not files or REST APIs directly.",
    "Chat API needs a Premium or Enterprise plan.",
    "Configuring the agent in the UI is deprecated in favor of code-first setup.",
    "Ossie conversion and Evals are Preview, and Ossie conversion is activated by Cube support.",
    "No ontology, graph, or vector feature found."
   ],
   "fillWith": [
    "Apache Ossie YAML",
    "dbt for upstream transformations"
   ],
   "nl2sqlPath": "Model cubes and views on your warehouse, then expose a small set of views to an agent. Use the hosted MCP server or the Chat API. Add rules, ai_context, and certified queries under the agents directory.",
   "snippet": {
    "lang": "yaml",
    "title": "A cube with a join, a measure, and a dimension",
    "code": "cubes:\n  - name: users\n    sql_table: users\n\n    joins:\n      - name: organizations\n        relationship: many_to_one\n        sql: \"{CUBE.organization_id} = {organizations.id}\"\n\n    measures:\n      - name: count\n        type: count\n        sql: id\n\n    dimensions:\n      - name: country\n        sql: country\n        type: string",
    "u": "https://docs.cube.dev/reference/data-modeling/cube.md"
   },
   "sources": [
    {
     "t": "Cube data sources",
     "u": "https://docs.cube.dev/admin/connect-to-data/data-sources"
    },
    {
     "t": "Cubes reference",
     "u": "https://docs.cube.dev/reference/data-modeling/cube.md"
    },
    {
     "t": "Cube joins",
     "u": "https://docs.cube.dev/docs/data-modeling/joins.md"
    },
    {
     "t": "AI context",
     "u": "https://docs.cube.dev/docs/data-modeling/ai-context.md"
    },
    {
     "t": "Access policies",
     "u": "https://docs.cube.dev/docs/data-modeling/data-access-policies.md"
    },
    {
     "t": "Agent overview",
     "u": "https://docs.cube.dev/admin/ai"
    },
    {
     "t": "Certified queries",
     "u": "https://docs.cube.dev/admin/ai/certified-queries.md"
    },
    {
     "t": "Evals",
     "u": "https://docs.cube.dev/admin/ai/evals.md"
    },
    {
     "t": "Analytics Chat",
     "u": "https://docs.cube.dev/docs/explore-analyze/analytics-chat.md"
    },
    {
     "t": "Chat API",
     "u": "https://docs.cube.dev/reference/embed-apis/chat-api.md"
    },
    {
     "t": "Cube MCP server",
     "u": "https://docs.cube.dev/docs/integrations/mcp-server"
    },
    {
     "t": "Cube Apache Ossie integration",
     "u": "https://docs.cube.dev/docs/integrations/apache-ossie.md"
    },
    {
     "t": "Cube changelog: Apache Ossie integration (16 Oct 2026)",
     "u": "https://cube.dev/changelog/2026-10-16-changelog-apache-ossie-integration"
    },
    {
     "t": "Cube MCP server GitHub (deprecation notice)",
     "u": "https://raw.githubusercontent.com/cubedevinc/cube-mcp-server/main/README.md"
    },
    {
     "t": "AI context",
     "u": "https://docs.cube.dev/docs/data-modeling/ai-context"
    },
    {
     "t": "Evals",
     "u": "https://docs.cube.dev/admin/ai/evals"
    },
    {
     "t": "Certified queries",
     "u": "https://docs.cube.dev/admin/ai/certified-queries"
    },
    {
     "t": "cube_dbt package",
     "u": "https://docs.cube.dev/reference/data-modeling/cube_dbt.md"
    },
    {
     "t": "Develop in IDE",
     "u": "https://docs.cube.dev/docs/getting-started/develop-in-ide"
    },
    {
     "t": "Query History",
     "u": "https://docs.cube.dev/admin/monitoring/query-history"
    },
    {
     "t": "Cube docs index",
     "u": "https://docs.cube.dev/llms.txt"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Write description on every cube, view, measure and dimension, and add meta.ai_context on views and members for agent-only hints such as synonyms. If you use dbt, cube_dbt can render cubes from manifest.json including model descriptions. Commit the YAML to Git and review changes there.",
   "bulkSnippet": {
    "lang": "python",
    "code": "from cube_dbt import Dbt\n\ndbt = Dbt.from_url(manifest_url)\nmodel = dbt.model('orders')\nprint(model.as_cube())  # name, description, sql_table",
    "u": "https://docs.cube.dev/reference/data-modeling/cube_dbt.md"
   }
  },
  {
   "id": "dbt",
   "name": "dbt Semantic Layer (MetricFlow)",
   "category": "semantic-layer",
   "tagline": "Metric definitions in dbt projects, compiled to SQL by the open-source MetricFlow engine.",
   "verdict": "native",
   "verdictNote": "MetricFlow gives governed metrics that agents query through the dbt MCP server, but the Semantic Layer APIs need a dbt Starter or higher plan.",
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
     "url": "https://docs.getdbt.com/docs/build/semantic-models"
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
     "name": "dbt MCP server (self-hosted and remote)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://docs.getdbt.com/docs/dbt-ai/about-mcp"
    },
    {
     "name": "dbt MCP server OAuth for AI tools (labeled Beta)",
     "kind": "mcp",
     "status": "Preview",
     "since": "2026-05",
     "format": "API",
     "url": "https://www.getdbt.com/blog/what-s-shipped-in-dbt-may-2026"
    },
    {
     "name": "Apache Ossie semantic layer documents (dbt v1.12 and later)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "JSON",
     "url": "https://docs.getdbt.com/docs/build/ossie-semantic-models.md"
    },
    {
     "name": "Saved queries",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://docs.getdbt.com/docs/build/saved-queries.md"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metrics are defined in YAML (simple, ratio, derived, cumulative, conversion). MetricFlow compiles them to SQL for each warehouse.",
     "u": "https://docs.getdbt.com/docs/build/metrics-overview.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Categorical and time dimensions are declared on model columns, with time granularity. MetricFlow adds joins at query time.",
     "u": "https://docs.getdbt.com/docs/build/semantic-models"
    },
    "relationships": {
     "l": 3,
     "n": "Entities (primary, foreign, unique, natural) mark join keys. MetricFlow builds joins across semantic models from them.",
     "u": "https://docs.getdbt.com/docs/build/semantic-models"
    },
    "synonyms": {
     "l": 3,
     "n": "Description and label fields on semantic models, dimensions, and metrics. No synonyms field in the docs read.",
     "u": "https://docs.getdbt.com/reference/dimension-properties.md"
    },
    "verifiedQueries": {
     "l": 1,
     "n": "No question-to-SQL store. Saved queries (GA) group metrics, dimensions, and filters, and the MCP list_saved_queries tool returns them.",
     "u": "https://docs.getdbt.com/docs/build/saved-queries.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "MCP text_to_sql tool generates SQL from project context. It uses dbt Copilot actions and is off when AI is disabled.",
     "u": "https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools"
    },
    "ontology": {
     "l": 0,
     "n": "No separate ontology layer. Teams model entities, dimensions, and metrics in semantic models.",
     "u": "https://docs.getdbt.com/docs/build/semantic-models"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language. Semantic models form a join graph that MetricFlow uses internally.",
     "u": "https://docs.getdbt.com/docs/build/semantic-models"
    },
    "vector": {
     "l": 2,
     "n": "The MCP get_related_models tool finds similar models with semantic search. The broader search tool is labeled Alpha.",
     "u": "https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools"
    },
    "mcp": {
     "l": 3,
     "n": "MCP server exposes Semantic Layer, Discovery, SQL, and Admin API tools. Remote server is on all plans; tools vary.",
     "u": "https://docs.getdbt.com/docs/dbt-ai/about-mcp"
    },
    "governance": {
     "l": 3,
     "n": "Queries run under a warehouse credential, so platform access policies apply. Discovery API and MCP expose lineage. Plan limits apply.",
     "u": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/setup-sl.md"
    },
    "openStandard": {
     "l": 3,
     "n": "MetricFlow is Apache 2.0. dbt v1.12 and later also read Apache Ossie JSON documents as semantic models.",
     "u": "https://docs.getdbt.com/docs/build/ossie-semantic-models.md"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "dbt Copilot and dbt Wizard generate documentation, tests and semantic models. Copilot in Insights is Beta; Wizard is the recommended agent.",
     "u": "https://docs.getdbt.com/docs/dbt-ai/copilot-overview"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Descriptions live in YAML. persist_docs writes them as database comments on supported adapters. dbt-codegen generates model YAML for many models.",
     "u": "https://docs.getdbt.com/reference/resource-configs/persist_docs"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification in dbt docs. Teams set tags and meta in YAML by hand or use a catalog tool.",
     "u": ""
    },
    "sampleValues": {
     "l": 3,
     "n": "dbt MCP get_dimension_values returns distinct values for a Semantic Layer dimension, so agents can match literals.",
     "u": "https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools"
    },
    "queryHistory": {
     "l": 0,
     "n": "No mining of query history to suggest metrics or examples found in dbt docs.",
     "u": ""
    },
    "lineage": {
     "l": 3,
     "n": "Column-level lineage in dbt Catalog (Enterprise plans) and locally with dbt v2 and the VS Code extension.",
     "u": "https://docs.getdbt.com/docs/explore/column-level-lineage"
    },
    "evals": {
     "l": 0,
     "n": "dbt data tests check models, not NL-to-SQL accuracy. No eval set tooling for the text_to_sql tool found.",
     "u": "https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools"
    }
   },
   "offers": [
    "Metrics, entities, and dimensions defined once in YAML and compiled to SQL by MetricFlow, so agents do not write joins.",
    "MCP server tools list metrics, get dimensions, query metrics, and run text_to_sql.",
    "Saved queries group common metric and dimension combinations and are listed over MCP.",
    "MetricFlow is Apache 2.0, and dbt v1.12 reads Apache Ossie documents.",
    "Works with Snowflake, BigQuery, Databricks, Redshift, Postgres, and Trino."
   ],
   "gaps": [
    "Answers only modeled questions. In dbt's April 2026 benchmark, questions needing too many entity hops got no answer.",
    "Semantic Layer APIs and integrations need a dbt Starter, Enterprise, or Enterprise+ plan.",
    "No synonyms field. Only description and label carry business wording.",
    "No stored question-to-SQL pairs and no ontology layer."
   ],
   "fillWith": [
    "Data catalog for glossary terms",
    "Text-to-SQL for questions outside the model"
   ],
   "nl2sqlPath": "Model your core metrics and dimensions in dbt, then connect an agent through the dbt MCP server. Let the agent query metrics for modeled questions. Fall back to text-to-SQL only for questions outside the model.",
   "snippet": {
    "lang": "yaml",
    "title": "Semantic model on a dbt model (dbt v1.12 and later)",
    "code": "models:\n  - name: fact_transactions\n    semantic_model:\n      enabled: true\n    agg_time_dimension: transaction_date\n    columns:\n      - name: transaction_date\n        granularity: day\n        dimension:\n          type: time\n    metrics:\n      - name: transaction_total\n        type: simple\n        agg: sum\n        expr: transaction_total",
    "u": "https://docs.getdbt.com/docs/build/semantic-models"
   },
   "sources": [
    {
     "t": "dbt Semantic Layer FAQs (supported platforms, plans)",
     "u": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/sl-faqs"
    },
    {
     "t": "Semantic models",
     "u": "https://docs.getdbt.com/docs/build/semantic-models"
    },
    {
     "t": "Semantic layer reference",
     "u": "https://docs.getdbt.com/reference/semantic-layer-reference"
    },
    {
     "t": "Metrics overview",
     "u": "https://docs.getdbt.com/docs/build/metrics-overview.md"
    },
    {
     "t": "Dimension properties",
     "u": "https://docs.getdbt.com/reference/dimension-properties.md"
    },
    {
     "t": "Saved queries",
     "u": "https://docs.getdbt.com/docs/build/saved-queries.md"
    },
    {
     "t": "Administer the Semantic Layer",
     "u": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/setup-sl.md"
    },
    {
     "t": "Apache Ossie semantic layer documents",
     "u": "https://docs.getdbt.com/docs/build/ossie-semantic-models.md"
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
     "t": "What's shipped in dbt, May 2026",
     "u": "https://www.getdbt.com/blog/what-s-shipped-in-dbt-may-2026"
    },
    {
     "t": "dbt Copilot",
     "u": "https://docs.getdbt.com/docs/dbt-ai/copilot-overview"
    },
    {
     "t": "dbt AI FAQs",
     "u": "https://docs.getdbt.com/docs/dbt-ai/dbt-ai-faqs"
    },
    {
     "t": "persist_docs",
     "u": "https://docs.getdbt.com/reference/resource-configs/persist_docs"
    },
    {
     "t": "dbt-codegen README",
     "u": "https://raw.githubusercontent.com/dbt-labs/dbt-codegen/main/README.md"
    },
    {
     "t": "Column-level lineage",
     "u": "https://docs.getdbt.com/docs/explore/column-level-lineage"
    },
    {
     "t": "Apache Ossie semantic layer documents",
     "u": "https://docs.getdbt.com/docs/build/ossie-semantic-models"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Generate model YAML with the dbt-codegen macro generate_model_yaml (upstream_descriptions copies matching column descriptions), fill in descriptions with dbt Wizard or by hand, then set persist_docs for relation and columns so dbt writes them as database comments on each run.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "dbt run-operation generate_model_yaml --args '{\"model_names\": [\"customers\"], \"upstream_descriptions\": true}'",
    "u": "https://raw.githubusercontent.com/dbt-labs/dbt-codegen/main/README.md"
   }
  },
  {
   "id": "honeydew",
   "name": "Honeydew",
   "category": "semantic-layer",
   "tagline": "Semantic layer defined in YAML, with an AI analyst, APIs, and an MCP server.",
   "verdict": "native",
   "verdictNote": "Entities, attributes, metrics, and relations are first-party objects, with Deep Analysis, an MCP server, row-level security, and Apache Ossie import and export.",
   "worksWith": [
    "Snowflake",
    "Databricks (Beta)",
    "Google BigQuery (Beta)"
   ],
   "worksWithUrl": "https://honeydew.ai/docs/integration/data-sources/snowflake",
   "artifacts": [
    {
     "name": "Honeydew workspace (entities, attributes, metrics, domains)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://honeydew.ai/docs/tpch-example.md"
    },
    {
     "name": "Deep Analysis and agents (AI analyst)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2025-12",
     "format": "GUI, API",
     "url": "https://honeydew.ai/docs/integration/context-layer/deep-analysis.md"
    },
    {
     "name": "Context layer (instructions, skills, external knowledge, memory)",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://honeydew.ai/docs/integration/context-layer/context-management.md"
    },
    {
     "name": "Honeydew MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://honeydew.ai/docs/integration/mcp.md"
    },
    {
     "name": "Snowflake Native App (semantic query and model update API)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "SQL",
     "url": "https://honeydew.ai/docs/integration/snowflake-native-app.md"
    },
    {
     "name": "Apache Ossie converter (import and export, tracks draft spec)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://honeydew.ai/docs/integration/apache-ossie-osi.md"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metrics are aggregations defined once at an entity granularity and recomputed for any slice or join.",
     "u": "https://honeydew.ai/docs/calculations/metrics.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Source and calculated attributes on entities. Domains choose which fields are exposed.",
     "u": "https://honeydew.ai/docs/tpch-example.md"
    },
    "relationships": {
     "l": 3,
     "n": "Entities declare relations with rel_type and key fields. Honeydew finds the join path from them.",
     "u": "https://honeydew.ai/docs/tpch-example.md"
    },
    "synonyms": {
     "l": 3,
     "n": "AI metadata on domains, entities, attributes, and metrics holds descriptions, synonyms, and allowed values.",
     "u": "https://honeydew.ai/docs/integration/context-layer/ai-metadata.md"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-to-SQL store in the docs. Agents take sample questions for routing, and context items hold instructions and skills.",
     "u": "https://honeydew.ai/docs/integration/context-layer/agents.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "Deep Analysis runs multi-step analysis. The semantic compiler writes the SQL, not the LLM. Also reachable from Slack, Teams, MCP.",
     "u": "https://honeydew.ai/docs/integration/context-layer/deep-analysis.md"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found. Entities, relations, and domains are the modeling objects.",
     "u": "https://honeydew.ai/docs/architecture.md"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language found. GraphQL API exposes the platform, not graph queries.",
     "u": "https://honeydew.ai/docs/integration/graphql-api.md"
    },
    "vector": {
     "l": 0,
     "n": "No vector search found in the docs.",
     "u": "https://honeydew.ai/docs/integration/context-layer/context-management.md"
    },
    "mcp": {
     "l": 3,
     "n": "MCP server at mcp.honeydew.cloud with OAuth. Tools cover analysis, model browsing, warehouse discovery, and model editing.",
     "u": "https://honeydew.ai/docs/integration/mcp.md"
    },
    "governance": {
     "l": 3,
     "n": "Row-level security via domain filters or warehouse policies, user access control, Git change approval, and CI/CD.",
     "u": "https://honeydew.ai/docs/security/row-level-security.md"
    },
    "openStandard": {
     "l": 3,
     "n": "Bidirectional Apache Ossie converter kept in the Ossie repository. It tracks a draft spec that may change.",
     "u": "https://honeydew.ai/docs/integration/apache-ossie-osi.md"
    },
    "aiDescriptions": {
     "l": 1,
     "n": "AI-specific descriptions are written in Studio or YAML. An AI coding agent connected through the Honeydew MCP server can add and refine them.",
     "u": "https://honeydew.ai/docs/integration/context-layer/building-with-ai.md"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Metadata (description, synonyms, values, labels) is YAML in Git. GraphQL API can import metadata from another system.",
     "u": "https://honeydew.ai/docs/integration/context-layer/ai-metadata.md"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification found in Honeydew docs. Labels are set by hand for lightweight governance.",
     "u": "https://honeydew.ai/docs/governance/metadata.md"
    },
    "sampleValues": {
     "l": 3,
     "n": "AI metadata has a values list per field. Studio page for semantic context loads sample values (release note, Jan 2026).",
     "u": "https://honeydew.ai/docs/integration/context-layer/ai-metadata.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "Query history (14 days) and question history are monitoring views. No mining of them to suggest metrics or examples found.",
     "u": "https://honeydew.ai/docs/monitoring/question-history.md"
    },
    "lineage": {
     "l": 1,
     "n": "Honeydew publishes lineage from attributes and metrics to warehouse columns into Atlan. The integration is Beta.",
     "u": "https://honeydew.ai/docs/integration/catalogs/atlan.md"
    },
    "evals": {
     "l": 0,
     "n": "Deep Analysis answers can be rated and commented on. Feedback is stored for the team to review, not turned into examples.",
     "u": "https://honeydew.ai/docs/integration/context-layer/deep-analysis.md"
    }
   },
   "offers": [
    "Metrics defined once per entity, with join paths resolved from declared relations.",
    "AI metadata holds descriptions, synonyms, and allowed values on entities, attributes, and metrics.",
    "Deep Analysis and agents answer questions, with SQL compiled by the semantic compiler.",
    "MCP server works with Claude, Cursor, Snowflake Intelligence, and other clients.",
    "Row-level security, user access control, and Git workflows for model changes.",
    "Import and export with Apache Ossie."
   ],
   "gaps": [
    "Snowflake is the GA platform. Databricks and BigQuery support are Beta and need support to enable.",
    "No stored question-to-SQL pairs. Sample questions only route questions to agents.",
    "The Apache Ossie spec is an early draft, so the converter may change.",
    "No ontology, graph, or vector feature found in the docs."
   ],
   "fillWith": [
    "Apache Ossie YAML"
   ],
   "nl2sqlPath": "Define entities, relations, and metrics in a Honeydew workspace, expose a domain to an agent, and add AI metadata with synonyms. Use Deep Analysis, or connect your own agent or Snowflake Cortex Agents through the MCP server.",
   "snippet": {
    "lang": "yaml",
    "title": "A metric defined on an entity",
    "code": "type: metric\nentity: lineitem\nname: revenue\ndescription: revenue, as defined in TPC-H Q3, Q5 and others\ndatatype: number\nsql: |-\n  sum(lineitem.l_extendedprice * (1 - lineitem.l_discount))",
    "u": "https://honeydew.ai/docs/tpch-example.md"
   },
   "sources": [
    {
     "t": "Honeydew introduction",
     "u": "https://honeydew.ai/docs/introduction.md"
    },
    {
     "t": "Honeydew TPC-H walkthrough",
     "u": "https://honeydew.ai/docs/tpch-example.md"
    },
    {
     "t": "Honeydew metrics",
     "u": "https://honeydew.ai/docs/calculations/metrics.md"
    },
    {
     "t": "Honeydew AI metadata",
     "u": "https://honeydew.ai/docs/integration/context-layer/ai-metadata.md"
    },
    {
     "t": "Honeydew context management",
     "u": "https://honeydew.ai/docs/integration/context-layer/context-management.md"
    },
    {
     "t": "Honeydew agents",
     "u": "https://honeydew.ai/docs/integration/context-layer/agents.md"
    },
    {
     "t": "Honeydew Deep Analysis",
     "u": "https://honeydew.ai/docs/integration/context-layer/deep-analysis.md"
    },
    {
     "t": "Honeydew MCP server",
     "u": "https://honeydew.ai/docs/integration/mcp.md"
    },
    {
     "t": "Honeydew Snowflake Native App",
     "u": "https://honeydew.ai/docs/integration/snowflake-native-app.md"
    },
    {
     "t": "Honeydew Snowflake setup",
     "u": "https://honeydew.ai/docs/integration/data-sources/snowflake.md"
    },
    {
     "t": "Honeydew Databricks setup",
     "u": "https://honeydew.ai/docs/integration/data-sources/databricks.md"
    },
    {
     "t": "Honeydew BigQuery setup",
     "u": "https://honeydew.ai/docs/integration/data-sources/bigquery.md"
    },
    {
     "t": "Honeydew row-level security",
     "u": "https://honeydew.ai/docs/security/row-level-security.md"
    },
    {
     "t": "Honeydew Apache Ossie (OSI)",
     "u": "https://honeydew.ai/docs/integration/apache-ossie-osi.md"
    },
    {
     "t": "Honeydew release notes",
     "u": "https://honeydew.ai/docs/release-notes.md"
    },
    {
     "t": "Honeydew Building with AI",
     "u": "https://honeydew.ai/docs/integration/context-layer/building-with-ai.md"
    },
    {
     "t": "Honeydew Metadata",
     "u": "https://honeydew.ai/docs/governance/metadata.md"
    },
    {
     "t": "Honeydew Question history",
     "u": "https://honeydew.ai/docs/monitoring/question-history.md"
    },
    {
     "t": "Honeydew Atlan integration",
     "u": "https://honeydew.ai/docs/integration/catalogs/atlan.md"
    },
    {
     "t": "Honeydew GraphQL API",
     "u": "https://honeydew.ai/docs/integration/graphql-api.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Put an AI-specific description, synonyms and allowed values in the honeydew_ai metadata block of each attribute, metric and entity, in Studio or in the YAML files. Use an AI coding agent through the Honeydew MCP server to draft them, then review in Git. Descriptive object names matter most.",
   "bulkSnippet": {
    "lang": "yaml",
    "code": "metadata:\n  - name: honeydew_ai\n    metadata:\n      - name: description\n        value: This is an AI-specific description for the attribute\n      - name: synonyms\n        value: synonym1, synonym2",
    "u": "https://honeydew.ai/docs/integration/context-layer/ai-metadata.md"
   }
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
   "verdictNote": "Malloy models define sources, joins, and measures in code, and Publisher serves them to agents through an MCP endpoint.",
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
     "name": "Malloy semantic models (sources, joins, dimensions, measures, views)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "Malloy language",
     "url": "https://docs.malloydata.dev/documentation/language/statement"
    },
    {
     "name": "Malloy Publisher (server, REST API, web UI)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "API, GUI",
     "url": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    {
     "name": "Publisher built-in MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Measures are declared on sources with aggregate expressions and saved with the model.",
     "u": "https://docs.malloydata.dev/documentation/language/statement"
    },
    "dimensions": {
     "l": 3,
     "n": "Dimensions and views are declared on sources. Views are saved queries that agents can reuse.",
     "u": "https://docs.malloydata.dev/documentation/language/statement"
    },
    "relationships": {
     "l": 3,
     "n": "join_one, join_many, and join_cross declare joins on a source. Primary keys enable the with shortcut.",
     "u": "https://docs.malloydata.dev/documentation/language/join"
    },
    "synonyms": {
     "l": 3,
     "n": "Annotations on fields and sources carry descriptions that agents read through Publisher. No synonyms field found.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    },
    "verifiedQueries": {
     "l": 1,
     "n": "No question-to-query store. Named views and queries are returned by malloy_getContext to guide agents.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    },
    "nl2sql": {
     "l": 0,
     "n": "No first-party NL-to-query generation. malloy_getContext retrieves relevant fields for a question, and the agent writes the Malloy.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer found in the language reference or Publisher docs.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language. Joins are modeled as a data graph for correct aggregation, but queries are not graph queries.",
     "u": "https://docs.malloydata.dev/documentation/language/join"
    },
    "vector": {
     "l": 0,
     "n": "No vector search found in the Malloy or Publisher docs.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    "mcp": {
     "l": 3,
     "n": "Publisher serves MCP at localhost:4040/mcp with discovery, query, compile, reload, and docs search tools.",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    },
    "governance": {
     "l": 2,
     "n": "Givens, #(authorize), and #(access_filter) gate sources and rows. Givens are behind an experimental flag. Publisher has no built-in authentication.",
     "u": "https://raw.githubusercontent.com/malloydata/publisher/main/docs/authorize.md"
    },
    "openStandard": {
     "l": 3,
     "n": "Malloy is MIT-licensed open source. No Apache Ossie import or export found in the docs.",
     "u": "https://raw.githubusercontent.com/malloydata/malloy/main/LICENSE"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No AI description generation found in Malloy docs. Descriptions are written by hand as #\" annotations.",
     "u": "https://docs.malloydata.dev/documentation/language/tags"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Descriptions and tags are #\" and # annotations in .malloy text files, so scripts and Git can edit them in bulk. No metadata API.",
     "u": "https://docs.malloydata.dev/documentation/language/tags"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification found in Malloy docs.",
     "u": ""
    },
    "sampleValues": {
     "l": 3,
     "n": "The index query operator builds fieldName, fieldValue and weight tables. Docs say LLMs can use it for term-to-column mapping. Run manually.",
     "u": "https://docs.malloydata.dev/documentation/patterns/dim_index"
    },
    "queryHistory": {
     "l": 0,
     "n": "No mining of query history found in Malloy or Publisher docs.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "No lineage feature found in Malloy or Publisher docs.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found in Malloy or Publisher docs.",
     "u": ""
    }
   },
   "offers": [
    "Models in code with sources, joins, dimensions, and measures, compiled to each database dialect.",
    "Publisher serves models over REST, a web UI, and MCP.",
    "malloy_getContext finds relevant sources, views, and fields for a plain-English question.",
    "malloy_compile checks agent-written Malloy and returns diagnostics without running a query.",
    "Supports DuckDB, BigQuery, Snowflake, Databricks, Postgres, MySQL, Trino, and Presto."
   ],
   "gaps": [
    "No first-party NL-to-SQL, verified-query store, or synonyms field. The agent writes Malloy.",
    "Publisher has no built-in authentication and its MCP port is open. Put a gateway in front.",
    "Row-level access relies on givens, which sit behind an experimental flag.",
    "No Apache Ossie import or export found."
   ],
   "fillWith": [],
   "nl2sqlPath": "Write Malloy models for your core sources, run Publisher, and point your agent at its MCP endpoint. Add annotations and named views so the agent finds the right fields, and test that your LLM writes valid Malloy.",
   "snippet": {
    "lang": "other",
    "title": "Malloy sources with a primary key, a measure, and a join",
    "code": "source: carriers is duckdb.table('../data/carriers.parquet') extend {\n  primary_key: code\n  measure: carrier_count is count()\n}\n\nsource: flights is duckdb.table('../data/flights.parquet') extend {\n  join_one: carriers with carrier\n}",
    "u": "https://docs.malloydata.dev/documentation/language/join"
   },
   "sources": [
    {
     "t": "Malloy database support",
     "u": "https://docs.malloydata.dev/documentation/setup/database_support"
    },
    {
     "t": "Malloy models",
     "u": "https://docs.malloydata.dev/documentation/language/statement"
    },
    {
     "t": "Malloy joins",
     "u": "https://docs.malloydata.dev/documentation/language/join"
    },
    {
     "t": "Malloy Publisher: publishing",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/publishing"
    },
    {
     "t": "Malloy Publisher: MCP agents",
     "u": "https://docs.malloydata.dev/documentation/user_guides/publishing/mcp_agents"
    },
    {
     "t": "Publisher README",
     "u": "https://raw.githubusercontent.com/malloydata/publisher/main/README.md"
    },
    {
     "t": "Publisher authorize and access_filter",
     "u": "https://raw.githubusercontent.com/malloydata/publisher/main/docs/authorize.md"
    },
    {
     "t": "Publisher row-level access",
     "u": "https://raw.githubusercontent.com/malloydata/publisher/main/docs/row-level-access.md"
    },
    {
     "t": "Malloy license",
     "u": "https://raw.githubusercontent.com/malloydata/malloy/main/LICENSE"
    },
    {
     "t": "Malloy annotations (tags)",
     "u": "https://docs.malloydata.dev/documentation/language/tags"
    },
    {
     "t": "Malloy dimensional indexes",
     "u": "https://docs.malloydata.dev/documentation/patterns/dim_index"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Write a #\" annotation above each source and field you want described; the explorer renders it as Markdown. Edit the .malloy files in bulk with scripts or an AI coding agent and review in Git. Malloy does not have a metadata API.",
   "bulkSnippet": {
    "lang": "other",
    "code": "#\" Flights fact table\nsource: flights is duckdb.table('flights.parquet') extend {\n  #\" Airline name\n  dimension: carrier_name is carrier\n}",
    "u": "https://docs.malloydata.dev/documentation/language/tags"
   }
  },
  {
   "id": "wrenai",
   "name": "Wren AI / Wren Engine",
   "category": "semantic-layer",
   "tagline": "Open-core GenBI engine and context layer with a modeling definition language (MDL).",
   "verdict": "native",
   "verdictNote": "Wren is an open-source semantic engine with MDL models, relationships, cubes, NL-to-SQL pairs, an MCP server, and Apache Ossie import and export.",
   "worksWith": [
    "DuckDB",
    "PostgreSQL",
    "MySQL",
    "Doris",
    "StarRocks",
    "BigQuery",
    "Snowflake",
    "ClickHouse",
    "Trino",
    "Presto",
    "SQL Server",
    "Databricks",
    "Redshift",
    "Oracle",
    "Athena",
    "Spark"
   ],
   "worksWithUrl": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/connect.md",
   "artifacts": [
    {
     "name": "Modeling Definition Language (MDL) project: models, relationships, views, cubes",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML, compiled to JSON",
     "url": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    {
     "name": "Knowledge base: rules and NL-to-SQL pairs with memory index",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "Markdown, YAML",
     "url": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    {
     "name": "Wren MCP server (wren serve mcp)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "API",
     "url": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/cli.md"
    },
    {
     "name": "Apache Ossie import and export",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "YAML",
     "url": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/ossie.md"
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
     "l": 3,
     "n": "Cubes declare measures as expression plus type on a base model or view. Queried with wren cube query.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Cubes declare dimensions, time dimensions with query-time granularity, and hierarchies. Models declare typed columns.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    "relationships": {
     "l": 3,
     "n": "relationships.yml declares join type (such as MANY_TO_ONE) and an equality condition between two models.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    "synonyms": {
     "l": 3,
     "n": "properties.description on models and columns, plus Markdown rules and glossary files under knowledge/ that agents retrieve.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "NL-to-SQL pairs are Markdown files under knowledge/sql/. The wren memory store command writes them.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "Agents generate governed SQL through wren query and wren ask. Wren AI Cloud adds a GenBI UI.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/README.md"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology layer in the MDL reference. Models, relationships, views, and cubes are the objects.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language in the MDL reference or CLI.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    "vector": {
     "l": 3,
     "n": "A local LanceDB memory index gives hybrid retrieval over schema and stored pairs. Needs the memory extra.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/README.md"
    },
    "mcp": {
     "l": 3,
     "n": "wren serve mcp exposes query, dry-run, schema, and knowledge tools over stdio or HTTP. Needs the mcp extra.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/cli.md"
    },
    "governance": {
     "l": 3,
     "n": "Row and column security is in Wren AI Cloud and Enterprise Plus, not open source. OSS can omit model columns.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/README.md"
    },
    "openStandard": {
     "l": 3,
     "n": "Engine, SDK, and skills are Apache 2.0. Reads and writes Apache Ossie 0.1.1 and the 0.2.0.dev0 draft.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/ossie.md"
    },
    "aiDescriptions": {
     "l": 1,
     "n": "The enrich-context skill has your own coding agent write definitions and examples into project files. AI-assisted context preparation is a commercial Cloud feature.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/README.md"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Metadata is YAML and Markdown files in Git. wren context import brings dbt, OpenMetadata and Ossie metadata, including descriptions, into a project.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/cli.md"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification found in the README or CLI reference.",
     "u": ""
    },
    "sampleValues": {
     "l": 1,
     "n": "dbt import carries accepted_values tests as filter values. Docs list value profiling as upcoming, so no sampling today.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/dbt-integration.md"
    },
    "queryHistory": {
     "l": 1,
     "n": "wren memory store saves NL-SQL pairs by hand. Docs list the behavioral layer as in active development. No mining of warehouse query history.",
     "u": "https://docs.getwren.ai/oss/concepts/what_is_context"
    },
    "lineage": {
     "l": 0,
     "n": "No lineage feature found in the README or CLI reference. dbt import reads refs and tests, not column lineage.",
     "u": ""
    },
    "evals": {
     "l": 0,
     "n": "Golden eval runner is listed under what is next, not shipped. Docs list evaluation as part of the planned context layer.",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/README.md"
    }
   },
   "offers": [
    "MDL models, relationships, views, and cubes kept as YAML in Git.",
    "NL-to-SQL pairs and business rules stored under knowledge/ and recalled by agents.",
    "Local MCP server with query, dry-run, schema, and knowledge tools.",
    "Imports from dbt, OpenMetadata, and Apache Ossie, and exports to Ossie.",
    "Connects to the data sources in the connect guide on one Apache DataFusion engine."
   ],
   "gaps": [
    "Row and column security, the GenBI UI, and dashboards are commercial (Wren AI Cloud or Enterprise Plus).",
    "Traversing a relationship handle directly in a query is not supported yet (issue 2688).",
    "The golden NL-SQL eval runner is listed as in development.",
    "The connect guide lists fewer data sources than the README figure of 22+.",
    "No ontology or graph feature."
   ],
   "fillWith": [
    "dbt for upstream models"
   ],
   "nl2sqlPath": "Install the CLI with pip install wrenai, generate or import an MDL project, and add rules and NL-to-SQL pairs under knowledge/. Connect your agent through wren serve mcp or the Wren skills, and query with wren query.",
   "snippet": {
    "lang": "yaml",
    "title": "MDL model on a physical table",
    "code": "name: customers\ntable_reference:\n  catalog: jaffle_shop\n  schema: main\n  table: customers\nprimary_key: customer_id\ncolumns:\n  - name: customer_id\n    type: INTEGER\n    is_primary_key: true\n    not_null: true\n  - name: first_name\n    type: VARCHAR",
    "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
   },
   "sources": [
    {
     "t": "WrenAI README",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/README.md"
    },
    {
     "t": "MDL schema reference",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
    },
    {
     "t": "Wren CLI reference",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/cli.md"
    },
    {
     "t": "Connect your database",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/connect.md"
    },
    {
     "t": "Apache Ossie guide",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/ossie.md"
    },
    {
     "t": "Wren AI open core",
     "u": "https://www.getwren.ai/oss"
    },
    {
     "t": "Wren AI 2024 year in review",
     "u": "https://www.getwren.ai/post/wren-ai-2024-year-in-review-a-fruitful-journey-and-exciting-plans-ahead"
    },
    {
     "t": "Wren dbt integration guide",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/dbt-integration.md"
    },
    {
     "t": "What is context (Wren docs)",
     "u": "https://docs.getwren.ai/oss/concepts/what_is_context"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "If you use dbt, run wren context import dbt to carry model and column descriptions and tests into the project. Then add definitions, enums and example NL-SQL pairs with the enrich-context skill or by editing instructions.md and knowledge/ files, and review them in Git.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "wren context import dbt --project-dir ./jaffle_shop --path ./wren-jaffle",
    "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/cli.md"
   }
  },
  {
   "id": "superset",
   "name": "Apache Superset",
   "category": "bi",
   "tagline": "Open-source BI with datasets, an MCP service, and a semantic layer feature still behind a flag.",
   "verdict": "partial",
   "verdictNote": "Datasets act as a light semantic layer and an MCP server exists, but external semantic layers sit behind the default-off SEMANTIC_LAYERS flag and no first-party NL-to-SQL was found.",
   "artifacts": [
    {
     "name": "Datasets (lightweight semantic layer: metrics and dimensions)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    },
    {
     "name": "Semantic Layers (external layers as a datasource type, SIP-182)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-04",
     "format": "Feature flag SEMANTIC_LAYERS, extensions",
     "url": "https://superset.apache.org/admin-docs/configuration/feature-flags/"
    },
    {
     "name": "MCP service (superset mcp run)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "",
     "format": "MCP, JWT or dev auth",
     "url": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "The Superset README describes a lightweight semantic layer for defining custom metrics and dimensions on datasets.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Same README line covers dimensions. Hierarchy and time-grain objects not confirmed.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    },
    "relationships": {
     "l": 0,
     "n": "No declared joins or relationships between datasets. Teams join tables in a SQL virtual dataset.",
     "u": "https://preset.io/blog/understanding-superset-semantic-layer/"
    },
    "synonyms": {
     "l": 3,
     "n": "Datasets, columns and metrics carry verbose_name and description fields. No separate synonym field.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/superset/datasets/schemas.py"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question-SQL pairs in the README or MCP docs. Teams use MCP clients with their own prompts.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    "nl2sql": {
     "l": 0,
     "n": "No first-party NL-to-SQL in the README feature list or MCP docs. Teams use MCP clients.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object in the README feature list.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    },
    "graph": {
     "l": 0,
     "n": "No graph query in the README feature list.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    },
    "vector": {
     "l": 0,
     "n": "No vector search in the README feature list.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    },
    "mcp": {
     "l": 2,
     "n": "MCP docs list tools for datasets, charts, and SQL, and need Superset 5.0 or later. The page gives no stage label.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    "governance": {
     "l": 3,
     "n": "MCP_RBAC_ENABLED is True by default, so each tool checks the caller's Superset permissions. Calls are audited.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    "openStandard": {
     "l": 0,
     "n": "No Ossie import or export documented. Preset's Aug 2026 post discusses Apache Ossie alongside SIP-182.",
     "u": "https://preset.io/blog/semantic-layers-in-superset/"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No built-in AI description feature found. The MCP service added in 6.1 lets an external agent work with Superset.",
     "u": "https://preset.io/blog/apache-superset-6-1-release/"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "superset export_datasources and import_datasources move datasets as YAML, with column and metric descriptions. Docs are for Superset Next.",
     "u": "https://superset.apache.org/admin-docs/configuration/importing-exporting-datasources"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification in the README feature list.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    },
    "sampleValues": {
     "l": 0,
     "n": "No built-in NL-to-SQL found in the docs or 6.1 notes, so no value matching. MCP clients bring their own model.",
     "u": "https://preset.io/blog/apache-superset-6-1-release/"
    },
    "queryHistory": {
     "l": 0,
     "n": "No feature mines query history to suggest joins, metrics or examples in the README or MCP docs.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
    },
    "lineage": {
     "l": 0,
     "n": "Dataset related-objects lists the charts and dashboards that use a dataset. No column-level lineage found.",
     "u": "https://raw.githubusercontent.com/apache/superset/master/superset/datasets/schemas.py"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL feature, so no eval tooling found.",
     "u": "https://preset.io/blog/apache-superset-6-1-release/"
    }
   },
   "offers": [
    "Built-in MCP server (superset mcp run) has tools such as list_datasets, query_dataset, execute_sql, and generate_chart.",
    "MCP supports JWT auth and RBAC checks on every tool call.",
    "SEMANTIC_LAYERS lets Snowflake semantic views and dbt MetricFlow appear as chartable datasources, delivered as extensions.",
    "Apache Software Foundation project, self-hosted."
   ],
   "gaps": [
    "SEMANTIC_LAYERS defaults to False and sits in the Development (experimental) section of the feature flag docs.",
    "The docs read do not say which release will ship the semantic layers stable.",
    "MCP docs give no GA or Preview label. Needs Superset 5.0 or later, Python 3.11 or later, and fastmcp.",
    "No first-party NL-to-SQL, synonym, or verified-query feature was found."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "Snowflake Semantic Views",
    "MetricFlow"
   ],
   "nl2sqlPath": "Define metrics and dimensions on datasets and run the built-in MCP service so your agent calls dataset tools. For governed metrics, keep them in Cube or dbt, or try the semantic layers flag in a test environment.",
   "snippet": {
    "lang": "other",
    "title": "Start the Superset MCP server (from the MCP server doc)",
    "code": "superset mcp run --host 127.0.0.1 --port 5008\n# endpoint: /mcp\n# MCP_AUTH_ENABLED = True enables JWT auth\n# MCP_RBAC_ENABLED = True is the default",
    "u": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
   },
   "worksWith": [
    "Snowflake",
    "Google BigQuery",
    "Amazon Redshift",
    "Databricks",
    "Amazon Athena",
    "ClickHouse",
    "Trino",
    "Presto",
    "Microsoft SQL Server",
    "Oracle",
    "MariaDB",
    "Apache Druid",
    "Azure Synapse",
    "StarRocks",
    "Teradata"
   ],
   "worksWithUrl": "https://superset.apache.org/docs/databases/",
   "openToOtherTools": {
    "l": 2,
    "n": "MCP service with dataset and SQL tools and JWT auth. Docs show no stage label. No Ossie export documented.",
    "u": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
   },
   "sources": [
    {
     "t": "Apache Superset README",
     "u": "https://raw.githubusercontent.com/apache/superset/master/README.md"
    },
    {
     "t": "Superset MCP server doc",
     "u": "https://raw.githubusercontent.com/apache/superset/master/docs/admin_docs/configuration/mcp-server.mdx"
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
     "t": "Supported databases",
     "u": "https://superset.apache.org/docs/databases/"
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
     "u": "https://raw.githubusercontent.com/apache/superset/master/UPDATING.md"
    },
    {
     "t": "Preset: Understanding the Superset Semantic Layer",
     "u": "https://preset.io/blog/understanding-superset-semantic-layer/"
    },
    {
     "t": "Superset datasets schemas.py",
     "u": "https://raw.githubusercontent.com/apache/superset/master/superset/datasets/schemas.py"
    },
    {
     "t": "Importing and Exporting Datasources",
     "u": "https://superset.apache.org/admin-docs/configuration/importing-exporting-datasources"
    },
    {
     "t": "Apache Superset 6.1 Release",
     "u": "https://preset.io/blog/apache-superset-6-1-release/"
    },
    {
     "t": "Apache Superset docs index",
     "u": "https://superset.apache.org/llms.txt"
    }
   ],
   "verified": "2026-10-24",
   "logo": "apachesuperset",
   "enrichHowTo": "Export datasets with superset export_datasources, edit the column and metric description fields in the YAML, and import them back with superset import_datasources. The same data model is available over the REST API. Superset has no AI description feature, so draft descriptions elsewhere and load them this way.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "superset export_datasources -f datasources.zip\n# edit column descriptions in the exported YAML, then rezip\nsuperset import_datasources -p datasources.zip",
    "u": "https://superset.apache.org/admin-docs/configuration/importing-exporting-datasources"
   }
  },
  {
   "id": "domo",
   "name": "Domo",
   "category": "bi",
   "tagline": "Cloud BI and data platform with Data Models, AI Chat, an agent builder, and MCP toolkits, many in beta.",
   "verdict": "partial",
   "verdictNote": "Domo has Data Models with relationships, AI synonyms, and an MCP server, but its Sep 2026 release notes list the modeling integration, Snowflake Semantic View import, and new MCP toolkits as Beta.",
   "artifacts": [
    {
     "name": "Data Models (relationships between DataSets, with Domo Schema)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "",
     "format": "GUI",
     "url": "https://www.domo.com/docs/s/article/Create-and-Use-Data-Models"
    },
    {
     "name": "Domo Schema (AI Enabled, AI Synonyms, AI Context per field)",
     "kind": "annotations",
     "status": "Unverified",
     "since": "",
     "format": "GUI",
     "url": "https://www.domo.com/docs/s/article/Create-and-Use-Data-Models"
    },
    {
     "name": "Data Modeling Builder and Visualization Integration",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-09",
     "format": "GUI",
     "url": "https://www.domo.com/docs/s/article/Current-Release-Notes"
    },
    {
     "name": "Semantic View Integration (Snowflake semantic view as read-only Data Model)",
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
     "url": "https://www.domo.com/docs/s/article/March-2026-Release.md"
    },
    {
     "name": "Domo Essentials MCP (AI Library toolkit at /mcp/toolkits/)",
     "kind": "mcp",
     "status": "Preview",
     "since": "2026-05",
     "format": "MCP, OAuth",
     "url": "https://www.domo.com/docs/s/article/May-2026-Release.md"
    },
    {
     "name": "MCP Toolkits (Alerts, Workspaces, Automation, Sandbox)",
     "kind": "mcp",
     "status": "Preview",
     "since": "2026-09",
     "format": "MCP",
     "url": "https://www.domo.com/docs/s/article/Current-Release-Notes"
    },
    {
     "name": "AI Library and AI Agent Builder",
     "kind": "agent",
     "status": "Preview",
     "since": "2026-05",
     "format": "GUI",
     "url": "https://www.domo.com/docs/s/article/May-2026-Release.md"
    },
    {
     "name": "AI Chat (multi-DataSet questions)",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2026-09",
     "format": "GUI",
     "url": "https://www.domo.com/docs/s/article/Current-Release-Notes"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Beast Mode calculations can be saved to a DataSet and managed in Beast Mode Manager. AI Readiness lists them as columns for AI.",
     "u": "https://www.domo.com/docs/s/article/360042925474.md"
    },
    "dimensions": {
     "l": 1,
     "n": "No declared dimension or hierarchy object in Data Models. Teams build date and bucket fields with Beast Mode calculated fields.",
     "u": "https://www.domo.com/docs/s/article/360043429913.md"
    },
    "relationships": {
     "l": 2,
     "n": "Data Model editor sets relationship keys and cardinality. Sep 2026 notes list the modeling integration as Beta.",
     "u": "https://www.domo.com/docs/s/article/Create-and-Use-Data-Models"
    },
    "synonyms": {
     "l": 2,
     "n": "Domo Schema has AI Enabled, AI Synonyms, and AI Context per field. Data Model docs carry no stage label.",
     "u": "https://www.domo.com/docs/s/article/Create-and-Use-Data-Models"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No saved question-SQL pairs. AI Readiness takes DataSet context, synonyms and column context instead.",
     "u": "https://www.domo.com/docs/s/article/000005561.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "AI Chat answers over DataSets and queries each one separately. Cross-DataSet joins and unions are not supported (Sep 2026).",
     "u": "https://www.domo.com/docs/s/article/Current-Release-Notes"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object in the docs read. ISG reports ontologies are planned under Project Ambience with no date.",
     "u": "https://research.isg-one.com/analyst-perspectives/domo-adds-context-to-platform-for-analytics-and-ai"
    },
    "graph": {
     "l": 0,
     "n": "No graph query feature in the Domo Knowledge Base index.",
     "u": "https://www.domo.com/docs/_llms/en/knowledge-base.txt"
    },
    "vector": {
     "l": 0,
     "n": "No vector search feature in the Domo Knowledge Base index.",
     "u": "https://www.domo.com/docs/_llms/en/knowledge-base.txt"
    },
    "mcp": {
     "l": 2,
     "n": "Domo Essentials MCP was listed under Beta Features in May 2026. New toolkits in Sep 2026 are Beta too.",
     "u": "https://www.domo.com/docs/s/article/May-2026-Release.md"
    },
    "governance": {
     "l": 3,
     "n": "Company and department certification badges for cards and DataSets. AI Chat keeps the same security settings as the rest of Domo.",
     "u": "https://www.domo.com/docs/s/article/360043430613.md"
    },
    "openStandard": {
     "l": 0,
     "n": "Domo is not in the vendor list of the Apache Ossie converters repo. Domo can import Snowflake semantic views instead.",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No AI description generator found. Synonyms, column context and DataSet context in AI Readiness are written by hand.",
     "u": "https://www.domo.com/docs/s/article/000005561.md"
    },
    "bulkMetadata": {
     "l": 1,
     "n": "API sets DataSet description and tags. Column descriptions are edited per DataSet in the UI or synced from Snowflake.",
     "u": "https://www.domo.com/docs/s/article/6814561223959.md"
    },
    "autoClassify": {
     "l": 0,
     "n": "No column classification found. PII Vault, a partner product with Anonomatic, redacts PII at upload.",
     "u": "https://www.domo.com/docs/s/article/4409199658263.md"
    },
    "sampleValues": {
     "l": 0,
     "n": "AI Readiness uses descriptions, synonyms and column context you write. No value sampling documented; the Beast Mode assistant sends only schema.",
     "u": "https://www.domo.com/docs/s/article/000005561.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "Activity Log records usage for admins. No feature mines it to suggest models or examples.",
     "u": "https://www.domo.com/docs/s/article/360042934574.md"
    },
    "lineage": {
     "l": 1,
     "n": "Native lineage is DataSet, DataFlow, card and alert level. A column-level lineage agent app is listed on Domo's site.",
     "u": "https://www.domo.com/ai/apps/lineage-impact-analysis-agent"
    },
    "evals": {
     "l": 0,
     "n": "No eval set tooling found. AI Playground tests prompts against a DataSet, and AI Chat has a feedback option.",
     "u": "https://www.domo.com/docs/s/article/000005236.md"
    }
   },
   "offers": [
    "Data Models define relationships between DataSets once and reuse them in Analyzer and App Studio.",
    "Snowflake semantic views register as read-only Data Models with their relationships and metrics (Beta).",
    "Domo MCP exposes DataSet queries, document queries, and search to outside assistants.",
    "Schema tab holds field descriptions, AI synonyms, and AI context; Snowflake column descriptions can sync in."
   ],
   "gaps": [
    "Modeling integration, Semantic View Integration, and new MCP toolkits are Beta as of Sep 2026.",
    "AI Chat does not join or union DataSets. It queries each one and combines the results.",
    "No metric, dimension, or verified-query object confirmed in the docs read.",
    "Domo is not in the Ossie converters repo."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Define Data Models with relationships, fill in the Domo Schema with descriptions, AI synonyms, and AI context, then use AI Chat. For external agents, use the Domo MCP toolkits and expect beta limits. If you need a stable semantic layer today, keep it in the warehouse and connect Domo to it.",
   "snippet": {
    "lang": "other",
    "title": "",
    "code": "",
    "u": ""
   },
   "worksWith": [
    "Snowflake",
    "Databricks",
    "Google BigQuery",
    "Amazon Redshift",
    "Amazon Athena",
    "Azure SQL Database",
    "Dremio",
    "Lakebase",
    "MySQL",
    "Oracle ADW",
    "Oracle NetSuite",
    "PostgreSQL"
   ],
   "worksWithUrl": "https://www.domo.com/docs/s/article/4412849158167",
   "openToOtherTools": {
    "l": 2,
    "n": "Domo Essentials MCP queries DataSets and documents, and was Beta in May 2026. New toolkits in Sep 2026 are Beta.",
    "u": "https://www.domo.com/docs/s/article/May-2026-Release.md"
   },
   "sources": [
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
     "t": "2026 Release 3 (May)",
     "u": "https://www.domo.com/docs/s/article/May-2026-Release.md"
    },
    {
     "t": "2026 Release 2 (March)",
     "u": "https://www.domo.com/docs/s/article/March-2026-Release.md"
    },
    {
     "t": "Create and Use Data Models",
     "u": "https://www.domo.com/docs/s/article/Create-and-Use-Data-Models"
    },
    {
     "t": "Cloud Integrations Overview",
     "u": "https://www.domo.com/docs/s/article/4412849158167"
    },
    {
     "t": "Domo AI - Beta Features (March 2025)",
     "u": "https://www.domo.com/product/new-features/domo-ai-beta-features"
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
     "t": "Apache Ossie converters repo",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    {
     "t": "Domo: Beast Mode Manager",
     "u": "https://www.domo.com/docs/s/article/360042925474.md"
    },
    {
     "t": "Domo: Create a Beast Mode Calculation",
     "u": "https://www.domo.com/docs/s/article/360043429913.md"
    },
    {
     "t": "Domo: AI Readiness",
     "u": "https://www.domo.com/docs/s/article/000005561.md"
    },
    {
     "t": "Domo: Certify Cards and DataSets",
     "u": "https://www.domo.com/docs/s/article/360043430613.md"
    },
    {
     "t": "Domo: AI Chat",
     "u": "https://www.domo.com/docs/s/article/AI-Chat-v2.md"
    },
    {
     "t": "Domo Knowledge Base index",
     "u": "https://www.domo.com/docs/_llms/en/knowledge-base.txt"
    },
    {
     "t": "Schema Management",
     "u": "https://www.domo.com/docs/s/article/6814561223959.md"
    },
    {
     "t": "Tag Management",
     "u": "https://www.domo.com/docs/s/article/4415839139863.md"
    },
    {
     "t": "September 2026 Release Notes",
     "u": "https://www.domo.com/docs/s/article/Current-Release-Notes.md"
    },
    {
     "t": "Domo AI Playground",
     "u": "https://www.domo.com/docs/s/article/000005236.md"
    },
    {
     "t": "PII Vault Protection and Compliance",
     "u": "https://www.domo.com/docs/s/article/4409199658263.md"
    },
    {
     "t": "Viewing the Impact of Changes to DataSets",
     "u": "https://www.domo.com/docs/s/article/360042926234.md"
    },
    {
     "t": "Viewing the Lineage of a DataSet in Analyzer",
     "u": "https://www.domo.com/docs/s/article/360043428853.md"
    },
    {
     "t": "Map Column-Level Lineage and Flag Breakage Before Deployment",
     "u": "https://www.domo.com/ai/apps/lineage-impact-analysis-agent"
    },
    {
     "t": "DataSet API",
     "u": "https://www.domo.com/docs/portal/3b1e3a7d5f420-data-set-api.md"
    },
    {
     "t": "Alter Dataset Schema",
     "u": "https://www.domo.com/docs/api-reference/datasets-api/alter-dataset-schema.md"
    },
    {
     "t": "Domo: Activity Log",
     "u": "https://www.domo.com/docs/s/article/360042934574.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Open the AI Readiness tab on each DataSet, add DataSet context, synonyms and column context, and switch on AI Enabled for the columns Domo AI should use. If column descriptions live in Snowflake, ask your Domo account team to turn on Schema tab metadata sync. Governance Toolkit Tag Management jobs apply tags to many DataSets at once."
  },
  {
   "id": "cognos",
   "name": "IBM Cognos Analytics",
   "category": "bi",
   "tagline": "IBM enterprise BI suite with data modules and an AI Assistant.",
   "verdict": "partial",
   "verdictNote": "Data modules are a governed model and the AI Assistant answers questions on them, but IBM offers no verified queries and no official MCP server.",
   "artifacts": [
    {
     "name": "Data modules",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://community.ibm.com/community/user/blogs/ian-henderson1/2024/08/23/multi-modeler-multi-module-techniques"
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
     "name": "Reporting agents (find, summarize, create reports)",
     "kind": "agent",
     "status": "Unverified",
     "since": "2025-10",
     "format": "GUI",
     "url": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT"
    },
    {
     "name": "Third-party Cognos MCP server (Activepieces, not IBM)",
     "kind": "mcp",
     "status": "Unverified",
     "since": "2026-09",
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
     "l": 3,
     "n": "Dimensions are modeled as tables or views with column dependency to define grains and hierarchies.",
     "u": "https://community.ibm.com/community/user/blogs/ian-henderson1/2024/08/23/multi-modeler-multi-module-techniques"
    },
    "relationships": {
     "l": 3,
     "n": "Relationships carry cardinality. 12.1.1 added a relationship expression editor and a Use vs Display value option.",
     "u": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT"
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
     "n": "The AI Assistant answers natural-language questions and builds visualizations and dashboards from governed data.",
     "u": "https://www.ibm.com/products/cognos-analytics"
    },
    "ontology": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "graph": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "vector": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "mcp": {
     "l": 1,
     "n": "No IBM MCP server. A third-party Activepieces server manages data sources and content objects. An IBM Ideas request asks for an official one.",
     "u": "https://www.activepieces.com/mcp/ibm-cognose"
    },
    "governance": {
     "l": 3,
     "n": "IBM lists certified data models, fine-grained access controls and audit trails, and the assistant answers from governed data.",
     "u": "https://www.ibm.com/products/cognos-analytics"
    },
    "openStandard": {
     "l": 0,
     "n": "No open semantic export. Cognos does not appear on the Apache Ossie ecosystem page.",
     "u": "https://ossie.apache.org/ecosystem/"
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
     "l": 3,
     "n": "Right-click a report data item to trace it back through the package to data sources, in Business or Technical view. Data module coverage not confirmed.",
     "u": "https://gateway.maine.gov/cognos/documentation/en/ug_cra_t_viewadataitemslineage.html"
    },
    "evals": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    }
   },
   "offers": [
    "Data modules take relationship expressions and display-value settings (12.1.1, Oct 2025).",
    "The AI Assistant answers natural-language questions from any Cognos view.",
    "Modules can be built from reusable dimension and fact modules, with aliases for role-playing tables.",
    "IBM names 12.1.3 as its latest release, with conversational data interaction and reporting agents."
   ],
   "gaps": [
    "No official MCP server. Only a third-party wrapper and an IBM Ideas request.",
    "Teams on 11.2 and 12.0 reported weak Assistant results on large models with similar column names.",
    "Synonyms are set per model, and sharing them across modules was reported as unsupported in 11.2.3.",
    "Reporting agents were Preview in 12.1.1, and their stage in 12.1.3 is not stated by IBM."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Model the data in a data module, define unique item names and synonyms, and use the built-in AI Assistant for end users. For your own agents, the only MCP path is a third-party wrapper, so test it carefully. Check IBM's 12.1.3 notes before you commit.",
   "snippet": {
    "lang": "other",
    "title": "",
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
     "t": "Multi-modeler, multi-module techniques (IBM Community)",
     "u": "https://community.ibm.com/community/user/blogs/ian-henderson1/2024/08/23/multi-modeler-multi-module-techniques"
    },
    {
     "t": "Your experiences with Cognos Analytics AI Assistant (IBM Community)",
     "u": "https://community.ibm.com/community/user/discussion/your-experiences-with-cognos-analytics-ai-assistant"
    },
    {
     "t": "Relative time logic in data modules (IBM Community)",
     "u": "https://community.ibm.com/community/user/discussion/relative-time-logic-lookup-reference-generated-measures-in-enterprise-model-1"
    },
    {
     "t": "Using the REST API with Cognos Analytics on Cloud (IBM Community)",
     "u": "https://community.ibm.com/community/user/blogs/patrick-neveu/2026/05/07/using-rest-api-with-cognos-analytics-on-cloud"
    },
    {
     "t": "MCP server for Cognos Analytics (IBM Ideas request)",
     "u": "https://ibm-data-and-ai.ideas.ibm.com/ideas/CA-I-4846"
    },
    {
     "t": "IBM Cognos MCP (Activepieces, third party)",
     "u": "https://www.activepieces.com/mcp/ibm-cognose"
    },
    {
     "t": "How to set up a Snowflake data source in Cognos Analytics (IBM Support)",
     "u": "https://www.ibm.com/support/pages/node/6326069"
    },
    {
     "t": "Cognos Analytics on Cloud On-Demand supported environments (IBM Support)",
     "u": "https://www.ibm.com/support/pages/node/737555"
    },
    {
     "t": "Apache Ossie ecosystem",
     "u": "https://ossie.apache.org/ecosystem/"
    },
    {
     "t": "View Lineage Information for a Data Item (IBM Cognos docs, older release, hosted by State of Maine)",
     "u": "https://gateway.maine.gov/cognos/documentation/en/ug_cra_t_viewadataitemslineage.html"
    },
    {
     "t": "Configuring the lineage solution (IBM Cognos docs, older release, hosted by State of Maine)",
     "u": "https://gateway.maine.gov/cognos/documentation/en/ug_cra_t_configure_lineage.html"
    }
   ],
   "worksWith": [
    "SAP BW/4HANA",
    "Microsoft Fabric"
   ],
   "worksWithUrl": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT",
   "openToOtherTools": {
    "l": 1,
    "n": "A REST API covers content and data sources. The only MCP path is a third-party wrapper. No SQL or OSI route to data modules.",
    "u": "https://community.ibm.com/community/user/blogs/patrick-neveu/2026/05/07/using-rest-api-with-cognos-analytics-on-cloud"
   },
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "No supported bulk method for descriptions is confirmed for this product yet."
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
     "url": "https://raw.githubusercontent.com/metabase/metabase/master/docs/data-modeling/semantic-layer/segments.md"
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
     "n": "Published-tables doc defines no joins. Related tables are published together.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/published-tables.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Glossary terms help Metabot understand your terminology. No separate synonym field found.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/metabot.md"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No question-to-SQL pairs. Metabot can be limited to verified, official, or Library content.",
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
     "n": "No vector search on data found in the Metabase AI docs.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Official server arrived in Metabase 60 (Apr 16, 2026) and was improved in Metabase 64 (Oct 2026). Admin enables it.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md"
    },
    "governance": {
     "l": 3,
     "n": "MCP and OAuth scopes follow the connecting user permissions. Pro and Enterprise can limit tools per group.",
     "u": "https://github.com/metabase/metabase/blob/master/docs/ai/mcp.md"
    },
    "openStandard": {
     "l": 1,
     "n": "Library syncs to Git. Metabase is not in the vendor list of the Apache Ossie converters repo.",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Ask Metabot in chat to write descriptions. It only sees database content, so it cannot supply business context.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/settings.md"
    },
    "bulkMetadata": {
     "l": 1,
     "n": "No native bulk edit. Scripts call PUT /api/table/{id} and PUT /api/field/{id}; the community dbt-metabase package does this from dbt.",
     "u": "https://www.metabase.com/articles/metabase-on-dbt"
    },
    "autoClassify": {
     "l": 3,
     "n": "Sync and fingerprinting assign semantic types to columns automatically. No PII or sensitivity tagging found.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/databases/sync-scan.md"
    },
    "sampleValues": {
     "l": 3,
     "n": "Metabase sends sampled field values to the AI, so Metabot can check if a state is WI or Wisconsin.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/privacy.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "Metabot keeps only the current conversation. Nothing mines past queries to suggest models or examples.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/metabot.md"
    },
    "lineage": {
     "l": 0,
     "n": "Dependency graph links questions, models, metrics, dashboards, transforms and their source tables. No column-level lineage is described.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/data-modeling/tools/graph.md"
    },
    "evals": {
     "l": 0,
     "n": "Thumbs feedback on Metabot answers goes to Metabase, not into verified examples. No eval set tooling found.",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/metabot.md"
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
     "t": "Metabase 64 release notes",
     "u": "https://www.metabase.com/releases/metabase-64"
    },
    {
     "t": "Segments docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/segments.md"
    },
    {
     "t": "Glossary docs (GitHub)",
     "u": "https://github.com/metabase/metabase/blob/master/docs/data-modeling/semantic-layer/glossary.md"
    },
    {
     "t": "Apache Ossie converters repo",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    {
     "t": "Metabase on a dbt project",
     "u": "https://www.metabase.com/articles/metabase-on-dbt"
    },
    {
     "t": "Metabase AI settings",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/settings.md"
    },
    {
     "t": "Metabase AI privacy",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/privacy.md"
    },
    {
     "t": "Metabot",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/ai/metabot.md"
    },
    {
     "t": "Syncing and scanning databases",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/databases/sync-scan.md"
    },
    {
     "t": "Table metadata editing",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/data-modeling/metadata/metadata-editing.md"
    },
    {
     "t": "Dependency graph",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/data-modeling/tools/graph.md"
    },
    {
     "t": "Data modeling overview",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/data-modeling/start.md"
    },
    {
     "t": "Metabase serialization",
     "u": "https://raw.githubusercontent.com/metabase/metabase/master/docs/installation-and-operation/serialization.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": "metabase",
   "enrichHowTo": "Edit table and field descriptions in Data Studio, Connected data, and ask Metabot to draft them. To write descriptions at scale, run a script or the dbt-metabase package after each dbt run, calling PUT /api/table/{id} and PUT /api/field/{id}. Define business terms in the Glossary, which Metabot reads.",
   "bulkSnippet": {
    "lang": "python",
    "code": "for column in node[\"columns\"].values():\n    field_id = fields.get(column[\"name\"].lower())\n    if field_id and column.get(\"description\"):\n        requests.put(\n            f\"{MB_URL}/api/field/{field_id}\",\n            json={\"description\": column[\"description\"]},\n            headers=HEADERS,\n        ).raise_for_status()",
    "u": "https://www.metabase.com/articles/metabase-on-dbt"
   }
  },
  {
   "id": "oracleanalytics",
   "name": "Oracle Analytics Cloud and Server",
   "category": "bi",
   "tagline": "Oracle BI platform with a code-based semantic model, AI Assistant, and an MCP server in Preview.",
   "verdict": "native",
   "verdictNote": "The semantic model (Semantic Modeler, SMML JSON, Git) feeds the AI Assistant through indexing, synonyms and AI Descriptions, while the MCP server is still Preview.",
   "artifacts": [
    {
     "name": "Semantic Modeler (SMML JSON, Git)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "JSON files, GUI",
     "url": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/what-is-oracle-analytics-semantic-modeler.html"
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
     "since": "",
     "format": "GUI",
     "url": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/oracle-analytics-ai-assistant.html"
    },
    {
     "name": "Search Index: AI Assistant indexing, synonyms and AI Descriptions",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "GUI, CSV",
     "url": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-synonyms-ai-descriptions-using-csv-file.html"
    },
    {
     "name": "Oracle Analytics Cloud MCP server",
     "kind": "mcp",
     "status": "Preview",
     "since": "2025-11",
     "format": "MCP, OAuth 2.0",
     "url": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/access-oracle-analytics-cloud-mcp-server-preview.html"
    },
    {
     "name": "Analytic Views support in Semantic Modeler",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-01",
     "format": "GUI",
     "url": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/data-sources-supported-semantic-models.html"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Logical columns carry aggregation rules, and the logical layer holds measures, level-based measures and calculations.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsmm/smml-elements-logical-table.html"
    },
    "dimensions": {
     "l": 3,
     "n": "Logical levels, level-based and parent-child hierarchies and drill paths are part of the model.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsmm/smml-elements-logical-table.html"
    },
    "relationships": {
     "l": 3,
     "n": "The physical layer holds joins and aliases, and logical tables carry joins with mapped table sources.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/semantic-models-architecture.html"
    },
    "synonyms": {
     "l": 3,
     "n": "Admins set synonyms, indexing and AI Descriptions per column in the Search Index. CSV export allows bulk edits.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-synonyms-ai-descriptions-using-csv-file.html"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified-query object. AI Descriptions add business context per column instead.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-synonyms-ai-descriptions-using-csv-file.html"
    },
    "nl2sql": {
     "l": 3,
     "n": "The AI Assistant reuses indexed datasets and subject areas and answers in natural language.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/oracle-analytics-ai-assistant.html"
    },
    "ontology": {
     "l": 0,
     "n": "None in the semantic model.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/semantic-models-architecture.html"
    },
    "graph": {
     "l": 0,
     "n": "None in the semantic model.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/semantic-models-architecture.html"
    },
    "vector": {
     "l": 0,
     "n": "No vector search documented. The AI Assistant uses a metadata and value index.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-synonyms-ai-descriptions-using-csv-file.html"
    },
    "mcp": {
     "l": 2,
     "n": "OAC MCP server is Preview, with tools to search the catalog, describe data and run ANSI or Logical SQL. First listed Nov 2025.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/access-oracle-analytics-cloud-mcp-server-preview.html"
    },
    "governance": {
     "l": 3,
     "n": "MCP tools run with the permissions of the token's user. Sensitive Data indexing limits values to users with column access.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/access-oracle-analytics-cloud-mcp-server-preview.html"
    },
    "openStandard": {
     "l": 0,
     "n": "The model is JSON (SMML) with Git support. No Ossie or OSI export from Semantic Modeler.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/what-is-oracle-analytics-semantic-modeler.html"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Catalog Descriptions drafts dataset descriptions. Semantic Modeler Assistant suggests names and writes presentation table and column descriptions.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/oracle-analytics-ai-assistants-features.html"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Export the data model index to CSV in Console, edit synonyms, AI Descriptions and index type, and import it. Last import wins per column.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/export-import-csv-file-containing-synonyms-ai-descriptions-data-model-columns.html"
    },
    "autoClassify": {
     "l": 3,
     "n": "Dataset profiling detects semantic types and recommends enrichments. Sensitive columns are flagged by hand with the DataSecurity setting.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/tutorial-apply-custom-semantic-types-to-data/index.html"
    },
    "sampleValues": {
     "l": 3,
     "n": "Index type Index covers metadata and data values for dimension columns. Index Metadata Only keeps values out, for sensitive columns.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-synonyms-ai-descriptions-using-csv-file.html"
    },
    "queryHistory": {
     "l": 1,
     "n": "Usage Tracking logs logical and physical queries to a database you specify. Analyzing it is up to the team.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/usage-tracking-database.html"
    },
    "lineage": {
     "l": 3,
     "n": "Semantic Modeler lineage viewer and Export Lineage CSV map presentation columns to logical and physical columns. Scope is the semantic model.",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/generate-document-repository-mappings.html"
    },
    "evals": {
     "l": 1,
     "n": "AI Assistant feedback is written to OCI logs with category and details. Docs do not say it improves future answers.",
     "u": "https://docs.oracle.com/en-us/iaas/analytics-cloud/doc/audit-and-diagnostic-logs-oracle-analytics-cloud.html"
    }
   },
   "offers": [
    "The Search Index lets admins choose which attributes the AI Assistant sees, with synonyms, AI Descriptions and metadata-only or value indexing.",
    "Semantic Modeler stores models as JSON (SMML) files with Git integration.",
    "MCP tools search the catalog, find matching data sources for a question, describe columns and run ANSI SQL or Logical SQL.",
    "AI Descriptions state units, formats and aggregation rules for the assistant (Sep 2026).",
    "Semantic Modeler supports Snowflake, BigQuery, Redshift, Oracle databases and Analytic Views."
   ],
   "gaps": [
    "The MCP server is Preview, Oracle warns its behavior may change, and a tool (discover_data) is already deprecated.",
    "No verified-query object for the AI Assistant.",
    "Databricks is not in the Semantic Modeler data source table.",
    "No Ossie or OSI converter or open export."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Build the model in Semantic Modeler, then enable attributes, synonyms and AI Descriptions in the Search Index so the AI Assistant can use them. For outside agents, use the Preview MCP server and keep its permissions narrow. Do not depend on it for production until it is GA.",
   "snippet": {
    "lang": "json",
    "title": "OAC MCP tools/call arguments for oracle_analytics-search_catalog (from Oracle docs)",
    "code": "{\n  \"name\": \"oracle_analytics-search_catalog\",\n  \"arguments\": {\n    \"query\": \"sales\",\n    \"types\": [\"datasets\", \"subjectAreas\"],\n    \"limit\": 20\n  }\n}",
    "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/deprecated-mcp-server-tools-preview.html"
   },
   "sources": [
    {
     "t": "Get started with Oracle Analytics Cloud MCP tools (Preview)",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/access-oracle-analytics-cloud-mcp-server-preview.html"
    },
    {
     "t": "Available Oracle Analytics Cloud MCP tools (Preview)",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/available-oracle-analytics-cloud-mcp-tools-preview.html"
    },
    {
     "t": "Visible MCP tool metadata (Preview)",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/visible-mcp-tool-metadata-preview.html"
    },
    {
     "t": "Deprecated MCP server tools (Preview)",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/deprecated-mcp-server-tools-preview.html"
    },
    {
     "t": "MCP quick reference (Preview)",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/quick-reference-preview.html"
    },
    {
     "t": "What's New for Oracle Analytics Cloud",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acswn/index.html"
    },
    {
     "t": "About Oracle Analytics AI Assistant",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/oracle-analytics-ai-assistant.html"
    },
    {
     "t": "Managing indexing, synonyms and AI Descriptions using a CSV file",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-synonyms-ai-descriptions-using-csv-file.html"
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
     "t": "What is Oracle Analytics Semantic Modeler?",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/what-is-oracle-analytics-semantic-modeler.html"
    },
    {
     "t": "SMML elements: logical table",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsmm/smml-elements-logical-table.html"
    },
    {
     "t": "About Oracle Analytics AI Assistants",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/oracle-analytics-ai-assistants-features.html"
    },
    {
     "t": "Export and Import a CSV File Containing Synonyms and AI Descriptions for Data Model Columns",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/export-import-csv-file-containing-synonyms-ai-descriptions-data-model-columns.html"
    },
    {
     "t": "Add Metadata for a Dataset Using AI Assistant",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/add-metadata-dataset-using-ai.html"
    },
    {
     "t": "Apply Custom Semantic Types to Your Data",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/tutorial-apply-custom-semantic-types-to-data/index.html"
    },
    {
     "t": "What's New for Oracle Analytics Cloud",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acswn/"
    },
    {
     "t": "About the Usage Tracking Database",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/usage-tracking-database.html"
    },
    {
     "t": "Generate a Document of Semantic Model Mappings",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/generate-document-repository-mappings.html"
    },
    {
     "t": "Audit and diagnostic logs for Oracle Analytics Cloud",
     "u": "https://docs.oracle.com/en-us/iaas/analytics-cloud/doc/audit-and-diagnostic-logs-oracle-analytics-cloud.html"
    }
   ],
   "worksWith": [
    "Snowflake",
    "Google BigQuery",
    "Amazon Redshift",
    "PostgreSQL",
    "Teradata",
    "Oracle Autonomous AI Lakehouse",
    "Oracle AI Data Platform",
    "Oracle Database"
   ],
   "worksWithUrl": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/data-sources-supported-semantic-models.html",
   "openToOtherTools": {
    "l": 2,
    "n": "OAC MCP server is Preview: AI clients search the catalog, describe data and run ANSI SQL or Logical SQL as the token's user.",
    "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/access-oracle-analytics-cloud-mcp-server-preview.html"
   },
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "In Console, open Search Index, select the data model and Export a CSV. Fill the Synonyms and AI Description columns, then Import it. Indexing restarts on import, and the file also moves AI-ready metadata between environments."
  },
  {
   "id": "qlik",
   "name": "Qlik (Qlik Sense and Qlik Cloud)",
   "category": "bi",
   "tagline": "Associative analytics platform with logical models, Qlik Answers, and an MCP server.",
   "verdict": "native",
   "verdictNote": "Logical models, business logic synonyms, glossary links and Qlik Answers feed AI, and the Qlik MCP server reached GA in Feb 2026.",
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
     "name": "Qlik Answers generated field and master item descriptions (semantic understanding)",
     "kind": "annotations",
     "status": "GA",
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
     "status": "GA",
     "since": "2026-06",
     "format": "GUI",
     "url": "https://community.qlik.com/t5/Support-Updates/Introducing-Fast-Mode-A-New-Gear-for-Qlik-Answers/ba-p/2552881"
    },
    {
     "name": "Discovery Agent and Data Products for Analytics",
     "kind": "agent",
     "status": "Announced",
     "since": "2026-02",
     "format": "Planned after the Feb 2026 release",
     "url": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Master measures are indexed first by Qlik Answers and used by Fast Mode. MCP tools create and update them.",
     "u": "https://community.qlik.com/t5/Support-Updates/Introducing-Fast-Mode-A-New-Gear-for-Qlik-Answers/ba-p/2552881"
    },
    "dimensions": {
     "l": 3,
     "n": "Master dimensions are used by Fast Mode. The logical model adds groups, hierarchies and calendar periods.",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business-logic-logical-models.htm"
    },
    "relationships": {
     "l": 3,
     "n": "Logical model groups show conceptual association between fields and master items. Qlik Answers reads the Overview and Fields tabs.",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business-logic-logical-models.htm"
    },
    "synonyms": {
     "l": 3,
     "n": "Business logic vocabulary maps alternate terms, and Answers generates field descriptions you can edit. Glossary terms link to master items.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business_logic.htm"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified-query store. Vocabulary custom analyses and example questions are the closest match.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business_logic.htm"
    },
    "nl2sql": {
     "l": 3,
     "n": "Qlik Answers on apps reached GA in Feb 2026. Fast Mode for simple lookups went live in Jun 2026.",
     "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    },
    "ontology": {
     "l": 0,
     "n": "None. Business glossary terms and data products exist, but no ontology layer.",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server.htm"
    },
    "graph": {
     "l": 0,
     "n": "None.",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server.htm"
    },
    "vector": {
     "l": 0,
     "n": "Knowledge base search exists for documents. No vector search over app data or metadata is documented.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server-tools.htm"
    },
    "mcp": {
     "l": 3,
     "n": "Qlik MCP server GA Feb 2026. Needs the Qlik MCP: Allowed permission, and tools can be enabled per tenant.",
     "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    },
    "governance": {
     "l": 3,
     "n": "Qlik Answers respects Section Access, and MCP tools run as the connecting user with a lineage tool.",
     "u": "https://help.qlik.com/en-us/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikAnswers/working-with-apps-in-qlik-answers.htm"
    },
    "openStandard": {
     "l": 0,
     "n": "Qlik joined the Open Semantic Interchange effort. No Qlik export of the logical model is documented.",
     "u": "https://ossie.apache.org/updates/qlik-joins-snowflake-to-support-open-semantic-interchange/"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Generates descriptions for a data product, its datasets and fields from names and native types. Premium tiers, English only, editable.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/DataIntegration/DataProducts/Generating-AI-based-description.htm"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Data sets API PATCH /api/v1/data-sets/{id} updates dataset metadata. Glossaries API can import terms. No API for vocabulary or logical model.",
     "u": "https://qlik.dev/apis/rest/data-sets/"
    },
    "autoClassify": {
     "l": 3,
     "n": "Each field gets a semantic type when over 40% of values match. Detected types such as email or national ID can flag sensitive data.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/DataIntegration/DataProducts/Managing-semantic-types.htm"
    },
    "sampleValues": {
     "l": 3,
     "n": "Business logic vocabulary adds alternative names for fields and values and names for coded values. Logical model sets which fields are value searchable.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Insights/InsightAdvisorBestPractices/best-practice-create-business-logic.htm"
    },
    "queryHistory": {
     "l": 3,
     "n": "Default logical model learns from charts users add or edit. Precedents are per user and unavailable once business logic is on.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Insights/insight-advisor-create-visualizations.htm"
    },
    "lineage": {
     "l": 3,
     "n": "Field-level lineage and impact analysis for cataloged data across apps, scripts and datasets. Also available through the Lineage graphs API.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Catalog/lineage.htm"
    },
    "evals": {
     "l": 1,
     "n": "Feedback and questions are logged for audit admins via the Natural Language API; docs point to manual model fixes.",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Insights/insight-advisor-usage-metrics.htm"
    }
   },
   "offers": [
    "Logical model and vocabulary supply synonyms and custom analyses to Insight Advisor.",
    "Qlik Answers generates field and master item descriptions you can review and edit.",
    "The Qlik MCP server lets outside assistants search apps, read fields, apply selections and run ad hoc calculations.",
    "MCP tools cover glossary, data products, lineage, master items and selections.",
    "Section Access limits what Qlik Answers returns."
   ],
   "gaps": [
    "No verified-query or example-SQL object.",
    "Each app has a single logical model, so it is not a shared governed model across apps.",
    "No Qlik export of the logical model to Ossie, although Qlik joined the standard.",
    "Discovery Agent and Data Products for Analytics were announced for after Feb 2026, and their current status is not confirmed."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Define master measures and dimensions, set up the logical model and vocabulary, then let Qlik Answers index the app. For your own agents, connect to the Qlik MCP server and enable only the tools you need. Plan for one logical model per app when you think about reuse.",
   "snippet": {
    "lang": "other",
    "title": "Qlik MCP app discovery tools (names from the tools page)",
    "code": "qlik_search\nqlik_describe_app\nqlik_get_fields\nqlik_list_sheets\nqlik_get_sheet_details",
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
     "t": "Qlik MCP tools (help)",
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
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Helpsites/Connectors_SaaS.htm"
    },
    {
     "t": "Qlik joins Snowflake to support Open Semantic Interchange",
     "u": "https://ossie.apache.org/updates/qlik-joins-snowflake-to-support-open-semantic-interchange/"
    },
    {
     "t": "Generating an AI-based description",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/DataIntegration/DataProducts/Generating-AI-based-description.htm"
    },
    {
     "t": "Data sets REST API",
     "u": "https://qlik.dev/apis/rest/data-sets/"
    },
    {
     "t": "Glossaries REST API",
     "u": "https://qlik.dev/apis/rest/glossaries/"
    },
    {
     "t": "Managing semantic types",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/DataIntegration/DataProducts/Managing-semantic-types.htm"
    },
    {
     "t": "Best practices for business logic",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Insights/InsightAdvisorBestPractices/best-practice-create-business-logic.htm"
    },
    {
     "t": "Analyzing lineage for apps, scripts, and datasets",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Catalog/lineage.htm"
    },
    {
     "t": "Working with lineage and impact analysis in Data Integration",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Catalog/work-with-lineage-impact-analysis-di.htm"
    },
    {
     "t": "Lineage graphs REST API",
     "u": "https://qlik.dev/apis/rest/lineage-graphs/"
    },
    {
     "t": "Building logical models for Insight Advisor with Business logic",
     "u": "https://help.qlik.com/en-US/sense/May2026/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business-logic-logical-models.htm"
    },
    {
     "t": "Creating visualizations with Insight Advisor",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Insights/insight-advisor-create-visualizations.htm"
    },
    {
     "t": "Using feedback and usage metrics to improve application usability",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Insights/insight-advisor-usage-metrics.htm"
    }
   ],
   "worksWith": [
    "Snowflake",
    "Databricks",
    "Google BigQuery",
    "Amazon Redshift",
    "Azure Synapse Analytics",
    "Azure SQL Database",
    "Apache Spark",
    "Apache Hive"
   ],
   "worksWithUrl": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Helpsites/Connectors_SaaS.htm",
   "openToOtherTools": {
    "l": 3,
    "n": "Qlik MCP server GA Feb 2026 exposes app discovery, fields, ad hoc calculations and glossary to third-party assistants.",
    "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
   },
   "verified": "2026-10-24",
   "logo": "qlik",
   "enrichHowTo": "Write dataset descriptions and tags with PATCH /api/v1/data-sets/{id} in the Data sets API, and load business terms with the Glossaries API import. Insight Advisor synonyms are edited by hand in each app's Vocabulary, because the REST API list has no vocabulary or logical model endpoint."
  },
  {
   "id": "businessobjects",
   "name": "SAP BusinessObjects BI",
   "category": "bi",
   "tagline": "SAP's long-running enterprise BI suite with universes as its semantic layer.",
   "verdict": "partial",
   "verdictNote": "Universes (.unx) are a classic governed semantic layer, but BusinessObjects has no first-party NL-to-SQL, synonym or MCP feature, and SAP puts its AI work into Business Data Cloud.",
   "artifacts": [
    {
     "name": "Universe (.unx) built in Information Design Tool",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, .unx files",
     "url": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    {
     "name": "Universe (.unv) built in Universe Design Tool",
     "kind": "semantic-model",
     "status": "Deprecated",
     "since": "",
     "format": "GUI, .unv files",
     "url": "https://nbs-us.com/hubfs/SAP%20Analytics%20Business%20Intelligence%20Statement%20of%20Direction.pdf"
    },
    {
     "name": "BI platform RESTful web services (/biprws)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "REST, JSON or XML",
     "url": "https://hackernoon.com/how-to-fetch-sap-business-objects-universes-using-python"
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
     "name": "SAP Business Data Cloud shared semantic layer and HANA Cloud knowledge graph",
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
     "n": "The business layer of a universe holds measures that map to SQL expressions on the data foundation.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "dimensions": {
     "l": 3,
     "n": "The business layer holds dimensions, hierarchies and attributes. Web Intelligence queries pick these objects.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "relationships": {
     "l": 3,
     "n": "Joins are declared in the data foundation, and the tool can detect or set join cardinality.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "synonyms": {
     "l": 0,
     "n": "No synonym or AI context object exists for universes. Teams use object descriptions or an outside layer.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No example query or trusted question store in universes. Teams keep curated Web Intelligence documents instead.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "nl2sql": {
     "l": 0,
     "n": "No first-party NL-to-SQL in BusinessObjects. SAP's Joule agents are tied to Business Data Cloud.",
     "u": "https://barc.com/sap-data-analytics-2026/"
    },
    "ontology": {
     "l": 0,
     "n": "None in BusinessObjects. SAP's knowledge graph engine sits in HANA Cloud and Business Data Cloud.",
     "u": "https://barc.com/sap-data-analytics-2026/"
    },
    "graph": {
     "l": 0,
     "n": "None in BusinessObjects.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "vector": {
     "l": 0,
     "n": "None in BusinessObjects.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "mcp": {
     "l": 1,
     "n": "No SAP MCP server. CData sells a third-party MCP server for BusinessObjects BI built on its JDBC driver.",
     "u": "https://cdn.cdata.com/help/GJN/mcp"
    },
    "governance": {
     "l": 3,
     "n": "Universes can be secured with data and business security profiles set in the Information Design Tool.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "openStandard": {
     "l": 0,
     "n": "No OSI or Ossie export. Universes are .unx files that only SAP tools write.",
     "u": ""
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No AI description generation. Universe object descriptions are written by hand in the Information Design Tool.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "bulkMetadata": {
     "l": 1,
     "n": "The Semantic Layer Java SDK ships with the BI client tools. Third-party catalog bridges use it to read and write .unx universes. No first-party bulk tool seen.",
     "u": "https://help.qlik.com/talend/en-US/talend-data-catalog/8.0/Content/MIRBoInformationDesignToolUnxExport.htm"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic classification or PII tagging. Sensitivity is handled with manual security profiles.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "sampleValues": {
     "l": 0,
     "n": "No NL-to-SQL literal matching. Universe objects have lists of values for query prompts only.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    "queryHistory": {
     "l": 1,
     "n": "Data Federation Administration Tool browses executed queries for monitoring. Any mining for joins or metrics is DIY.",
     "u": "https://help.sap.com/docs/SAP_BUSINESSOBJECTS_BUSINESS_INTELLIGENCE_PLATFORM/f43f4d90c5ee4858ac5c8817d6aff803/459f99766e041014910aba7db0e91070.html?locale=en-US&state=PRODUCTION&version=2025"
    },
    "lineage": {
     "l": 1,
     "n": "No lineage view inside BI found. Talend Data Catalog, a separate product, imports universes (.unx) with transformation lineage.",
     "u": "https://help.qlik.com/talend/en-US/talend-data-catalog/8.1/Content/Bridges/MIRBoInformationDesignToolUnxImport.htm"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL, so no accuracy tests or feedback loop.",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    }
   },
   "offers": [
    "Single-source .unx universes with dimensions, measures and joins stay supported in BI 2025.",
    "Web Intelligence builds queries on a universe, so business users avoid raw SQL.",
    "Security profiles restrict universe data and objects per user or group.",
    "BI platform REST services list universes and Web Intelligence documents.",
    "BI 4.3 mainstream maintenance ends in 2026, then Customer Specific Maintenance starts."
   ],
   "gaps": [
    "No first-party NL-to-SQL, synonyms, verified queries or MCP server for BusinessObjects.",
    "Universe Design Tool and .unv universes are not delivered in BI 2025. Only .unx from Information Design Tool continues.",
    "Multi-source universes are also not delivered in BI 2025, per SAP's statement of direction.",
    "SAP puts its AI and semantic investment into Business Data Cloud, not the BusinessObjects universe."
   ],
   "fillWith": [
    "Cube",
    "dbt Semantic Layer",
    "SAP Business Data Cloud"
   ],
   "nl2sqlPath": "BusinessObjects has no native NL-to-SQL. Teams that need an AI agent usually read the warehouse or an outside semantic layer instead of the universe. If the data is in SAP, look at Business Data Cloud and Joule, which are separate products.",
   "snippet": {
    "lang": "other",
    "title": "List universes over the BI platform REST API (third-party tutorial)",
    "code": "GET http://{host}:6405/biprws/raylight/v1/universes/",
    "u": "https://hackernoon.com/how-to-fetch-sap-business-objects-universes-using-python"
   },
   "sources": [
    {
     "t": "SAP Business Intelligence Statement of Direction, May 2024 (SAP)",
     "u": "https://nbs-us.com/hubfs/SAP%20Analytics%20Business%20Intelligence%20Statement%20of%20Direction.pdf"
    },
    {
     "t": "SAP BusinessObjects Addendum to BI Statement of Direction, June 2021 (SAP)",
     "u": "https://www.axians.nl/app/uploads/sites/71/2021/12/SAP-BusinessObjects-Addendum-to-BI-SoD_June-2021.pdf"
    },
    {
     "t": "Information Design Tool User Guide, BI 4.3 SP4 (SAP Help)",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    },
    {
     "t": "SAP BusinessObjects BI 2025 (Wiiisdom)",
     "u": "https://wiiisdom.com/blog/sap-businessobjects-bi-2025/"
    },
    {
     "t": "SAP BusinessObjects BI 2025 positioning (SAPinsider)",
     "u": "https://sapinsider.org/articles/saps-strategic-direction-for-analytics-businessobjects-bi-2025/"
    },
    {
     "t": "Building a query based on a universe (SAP Learning)",
     "u": "https://learning.sap.com/courses/exploring-the-fundamental-concepts-of-sap-businessobjects-web-intelligence/building-a-query-based-on-a-universe"
    },
    {
     "t": "Fetch BusinessObjects universes over REST with Python (Hackernoon)",
     "u": "https://hackernoon.com/how-to-fetch-sap-business-objects-universes-using-python"
    },
    {
     "t": "Web Intelligence REST workflow (Redwood docs)",
     "u": "https://documentation.redwood.com/extensions/Content/SAPConnector/BusinessObjects/SAPBobjWebIntelligenceAdvanced.htm"
    },
    {
     "t": "SAP data and analytics 2026 (BARC)",
     "u": "https://barc.com/sap-data-analytics-2026/"
    },
    {
     "t": "Code Assist MCP for SAP BusinessObjects BI (CData)",
     "u": "https://cdn.cdata.com/help/GJN/mcp"
    },
    {
     "t": "Talend Data Catalog: SAP BusinessObjects IDT (File) import",
     "u": "https://help.qlik.com/talend/en-US/talend-data-catalog/8.1/Content/Bridges/MIRBoInformationDesignToolUnxImport.htm"
    },
    {
     "t": "Talend Data Catalog: SAP BusinessObjects IDT (File) export",
     "u": "https://help.qlik.com/talend/en-US/talend-data-catalog/8.0/Content/MIRBoInformationDesignToolUnxExport.htm"
    },
    {
     "t": "Browsing the query history (SAP Help, BI platform 2025)",
     "u": "https://help.sap.com/docs/SAP_BUSINESSOBJECTS_BUSINESS_INTELLIGENCE_PLATFORM/f43f4d90c5ee4858ac5c8817d6aff803/459f99766e041014910aba7db0e91070.html?locale=en-US&state=PRODUCTION&version=2025"
    }
   ],
   "worksWith": [
    "Snowflake",
    "Google BigQuery",
    "Azure Synapse Analytics",
    "Azure SQL Database",
    "SAP HANA"
   ],
   "worksWithUrl": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf",
   "openToOtherTools": {
    "l": 1,
    "n": "REST services list universes and documents. A third-party MCP server exists. No SAP MCP or OSI export.",
    "u": "https://hackernoon.com/how-to-fetch-sap-business-objects-universes-using-python"
   },
   "verified": "2026-10-24",
   "logo": "sap",
   "enrichHowTo": "The Semantic Layer Java SDK ships with the BI client tools and reads universes (.unx). Third-party catalog bridges use it to import and export universe metadata."
  },
  {
   "id": "sigma",
   "name": "Sigma",
   "category": "bi",
   "tagline": "Cloud analytics workbook tool that queries the warehouse live, with data models and an MCP server.",
   "verdict": "native",
   "verdictNote": "Data models hold relationships, metrics, descriptions, and row-level security, and feed Sigma Assistant and a GA MCP server; AI context for data models is Beta.",
   "artifacts": [
    {
     "name": "Data models (tables, relationships, metrics)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, JSON or YAML via API",
     "url": "https://help.sigmacomputing.com/docs/get-started-with-data-modeling.md"
    },
    {
     "name": "Data model code representation (JSON or YAML via API)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "JSON, YAML",
     "url": "https://help.sigmacomputing.com/docs/manage-data-models-as-code.md"
    },
    {
     "name": "AI context for data models",
     "kind": "annotations",
     "status": "Preview",
     "since": "",
     "format": "GUI, Markdown text",
     "url": "https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models.md"
    },
    {
     "name": "Sigma Assistant (formerly Ask Sigma)",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant.md"
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
     "name": "Sigma MCP client (connectors for Sigma agents)",
     "kind": "mcp",
     "status": "GA",
     "since": "2025-12",
     "format": "MCP",
     "url": "https://help.sigmacomputing.com/docs/configure-mcp-connectors.md"
    },
    {
     "name": "Documentation MCP server",
     "kind": "mcp",
     "status": "Preview",
     "since": "",
     "format": "MCP",
     "url": "https://help.sigmacomputing.com/docs/use-documentation-mcp-server.md"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metrics in a data model are used by Sigma Assistant for aggregate calculations. Docs advise a default timeline and description.",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices"
    },
    "dimensions": {
     "l": 3,
     "n": "Data model metrics set a default timeline with a date column and truncation. Hierarchies exist only in workbooks, not data models.",
     "u": "https://help.sigmacomputing.com/docs/create-and-manage-metrics.md"
    },
    "relationships": {
     "l": 3,
     "n": "Relationships define join logic between data model tables. Many-to-one or one-to-one only. Not created automatically.",
     "u": "https://help.sigmacomputing.com/docs/define-relationships-in-data-models.md"
    },
    "synonyms": {
     "l": 2,
     "n": "AI context (Beta) lets you define aliases for columns and metrics. Descriptions and generated synonyms feed a search index.",
     "u": "https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models.md"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No saved question-SQL pairs found in the docs. Teams use AI context text, metric definitions and endorsed badges.",
     "u": "https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "Sigma Assistant answers natural-language questions on data models using relationships, metrics, descriptions, and AI context.",
     "u": "https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant.md"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object in the Sigma docs index. Teams use data models with relationships and AI context.",
     "u": "https://help.sigmacomputing.com/docs/get-started-with-data-modeling.md"
    },
    "graph": {
     "l": 0,
     "n": "No graph query feature in the Sigma docs index.",
     "u": ""
    },
    "vector": {
     "l": 3,
     "n": "Assistant uses a semantic search index over data model metadata to pick sources. No vector search on row data found.",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices"
    },
    "mcp": {
     "l": 3,
     "n": "Sigma MCP server queries connections, data models, and workbooks without SQL. Needs the Use Sigma MCP with OAuth permission.",
     "u": "https://help.sigmacomputing.com/docs/use-sigma-mcp-server"
    },
    "governance": {
     "l": 3,
     "n": "Row-level and column-level security on data model tables, certification badges, and lineage for data models.",
     "u": "https://help.sigmacomputing.com/docs/set-up-row-level-security.md"
    },
    "openStandard": {
     "l": 1,
     "n": "Apache Ossie converters repo has a Sigma directory. Data models also export as JSON or YAML through the API.",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    "aiDescriptions": {
     "l": 0,
     "n": "No description generator found. The Assistant index builds its own descriptions from column names and does not write them back.",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices.md"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Data model spec API replaces whole models as JSON or YAML, with column descriptions. dbt persist_docs also feeds them.",
     "u": "https://help.sigmacomputing.com/reference/update-data-model-spec.md"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic column classification in the docs. Column-level security rules are set by hand.",
     "u": "https://help.sigmacomputing.com/docs/column-level-security.md"
    },
    "sampleValues": {
     "l": 0,
     "n": "Docs describe the Assistant index as built from names, descriptions and generated synonyms. No sampled values documented.",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "Usage dashboards report query statistics for admins. No feature turns them into models or examples.",
     "u": "https://help.sigmacomputing.com/docs/usage-overview.md"
    },
    "lineage": {
     "l": 0,
     "n": "Lineage graph and lineage API are element level: tables, joins, charts, controls. Column-level lineage is not described in the docs.",
     "u": "https://help.sigmacomputing.com/docs/workbook-data-lineage.md"
    },
    "evals": {
     "l": 3,
     "n": "Agent evaluation suites run from input tables or the REST API, using AI_USAGE records. Assistant has response feedback.",
     "u": "https://help.sigmacomputing.com/docs/build-agent-evaluation-suite.md"
    }
   },
   "offers": [
    "Data model metrics, relationships, and descriptions are read by Sigma Assistant.",
    "Data models can be created and updated as JSON or YAML through the API, with an example library.",
    "Sigma MCP server (Dec 2025) lets Claude, ChatGPT, Cursor, and other clients query data models and workbooks.",
    "Sigma agents can call other MCP servers through MCP connectors.",
    "Warehouse connections include Snowflake, BigQuery, Redshift, Databricks, and PostgreSQL."
   ],
   "gaps": [
    "AI context for data models is Beta, and it is the main place for aliases and usage rules.",
    "Relationships must be created by hand and support only many-to-one or one-to-one joins.",
    "No SQL interface for outside tools found.",
    "MCP use needs an OAuth permission on the account type."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Build data models with relationships, metrics, descriptions, and a default timeline, add AI context, then use Sigma Assistant. For external agents, use the Sigma MCP server so questions run against data models. Keep warehouse-level semantics in the warehouse if you need them outside Sigma.",
   "snippet": {
    "lang": "json",
    "title": "Metric in the code representation of a data model (Sigma API example)",
    "code": "\"metrics\": [\n  {\n    \"id\": \"1ka0apXiVj\",\n    \"formula\": \"CountDistinct([Sku Number])\",\n    \"name\": \"Unique Products\"\n  }\n]",
    "u": "https://help.sigmacomputing.com/docs/example-representation-data-model-with-a-table-and-a-metric.md"
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
   "worksWithUrl": "https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support.md",
   "openToOtherTools": {
    "l": 3,
    "n": "Hosted Sigma MCP server queries data models and workbooks. Needs OAuth permission. Data models export as JSON or YAML by API.",
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
     "t": "Get started with data modeling",
     "u": "https://help.sigmacomputing.com/docs/get-started-with-data-modeling.md"
    },
    {
     "t": "Define relationships in data models",
     "u": "https://help.sigmacomputing.com/docs/define-relationships-in-data-models.md"
    },
    {
     "t": "Manage AI context for a data model (Beta)",
     "u": "https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models.md"
    },
    {
     "t": "Ask natural language queries with Sigma Assistant",
     "u": "https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant.md"
    },
    {
     "t": "Manage data models as code",
     "u": "https://help.sigmacomputing.com/docs/manage-data-models-as-code.md"
    },
    {
     "t": "Example representation: data model with a table and metric",
     "u": "https://help.sigmacomputing.com/docs/example-representation-data-model-with-a-table-and-a-metric.md"
    },
    {
     "t": "Set up row-level security",
     "u": "https://help.sigmacomputing.com/docs/set-up-row-level-security.md"
    },
    {
     "t": "Add MCP connectors to Sigma",
     "u": "https://help.sigmacomputing.com/docs/configure-mcp-connectors.md"
    },
    {
     "t": "Access Sigma documentation from AI tools",
     "u": "https://help.sigmacomputing.com/docs/use-documentation-mcp-server.md"
    },
    {
     "t": "Supported regions, data platforms, and features",
     "u": "https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support.md"
    },
    {
     "t": "Sigma December 2025 launch",
     "u": "https://www.sigmacomputing.com/product-launch/december-2025"
    },
    {
     "t": "What's New in Sigma, April 17, 2026",
     "u": "https://community.sigmacomputing.com/t/whats-new-in-sigma-april-17-2026/6747"
    },
    {
     "t": "Apache Ossie converters repo",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    {
     "t": "Sigma: Create and manage metrics",
     "u": "https://help.sigmacomputing.com/docs/create-and-manage-metrics.md"
    },
    {
     "t": "Sigma: Work with hierarchies",
     "u": "https://help.sigmacomputing.com/docs/hierarchies.md"
    },
    {
     "t": "Update a data model from a code representation",
     "u": "https://help.sigmacomputing.com/docs/update-a-data-model-from-a-code-representation.md"
    },
    {
     "t": "Update a data model spec (API reference)",
     "u": "https://help.sigmacomputing.com/reference/update-data-model-spec.md"
    },
    {
     "t": "Data modeling best practices",
     "u": "https://help.sigmacomputing.com/docs/data-modeling-best-practices.md"
    },
    {
     "t": "Review and manage your data catalog",
     "u": "https://help.sigmacomputing.com/docs/manage-data-catalog.md"
    },
    {
     "t": "Manage dbt integration",
     "u": "https://help.sigmacomputing.com/docs/manage-dbt-integration.md"
    },
    {
     "t": "View workbook and data model data lineage",
     "u": "https://help.sigmacomputing.com/docs/workbook-data-lineage.md"
    },
    {
     "t": "List lineage for a data model (API)",
     "u": "https://help.sigmacomputing.com/reference/list-data-model-lineage-tree.md"
    },
    {
     "t": "Build an evaluation suite for your agents",
     "u": "https://help.sigmacomputing.com/docs/build-agent-evaluation-suite.md"
    },
    {
     "t": "Create and manage datasets (Deprecated)",
     "u": "https://help.sigmacomputing.com/docs/create-and-manage-datasets.md"
    },
    {
     "t": "Sigma: Configure column-level security",
     "u": "https://help.sigmacomputing.com/docs/column-level-security.md"
    },
    {
     "t": "Sigma: Usage overview",
     "u": "https://help.sigmacomputing.com/docs/usage-overview.md"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Get the data model with GET /v2/dataModels/{id}/spec, edit table, column and metric descriptions in the JSON or YAML, then send the full spec back with PUT /v2/dataModels/{id}/spec, since partial updates are not supported. Descriptions can also come from warehouse comments or dbt with persist_docs. Add AI context (Beta) for Assistant instructions.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "curl --request PUT \\\n --url <base_url>/v2/dataModels/<dataModelId>/spec \\\n --header 'Authorization: Bearer <access_token>' \\\n --header 'content-type:application/json' \\\n --data '<json_representation>'",
    "u": "https://help.sigmacomputing.com/docs/update-a-data-model-from-a-code-representation.md"
   }
  },
  {
   "id": "strategy",
   "name": "Strategy (formerly MicroStrategy)",
   "category": "bi",
   "tagline": "BI vendor whose Mosaic universal semantic layer feeds agents and MCP clients.",
   "verdict": "native",
   "verdictNote": "Mosaic is a GA semantic layer with agents, an MCP server for Mosaic models, and Apache Ossie YAML import and export.",
   "artifacts": [
    {
     "name": "Strategy Mosaic (universal semantic layer)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2025-06",
     "format": "GUI, YAML, Git (GitHub)",
     "url": "https://www.strategy.com/press/strategy-announces-general-availability-of-strategy-mosaic-the-ai-powered-universal-intelligence-layer_06-24-2025"
    },
    {
     "name": "Agents on AI-enabled Mosaic models",
     "kind": "nl2sql",
     "status": "GA",
     "since": "2025-12",
     "format": "GUI",
     "url": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/auto_agent_from_model.htm"
    },
    {
     "name": "MCP server for Mosaic models",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-03",
     "format": "MCP, endpoint /collaboration/mcp/mosaic",
     "url": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
    },
    {
     "name": "Mosaic import and export as Apache Ossie YAML",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-07",
     "format": "YAML",
     "url": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_osi_import.htm"
    },
    {
     "name": "Git version control for Mosaic models (GitHub only)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-03",
     "format": "Git, YAML",
     "url": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_github.htm"
    },
    {
     "name": "AI-generated ontologies",
     "kind": "ontology",
     "status": "Announced",
     "since": "2026-02",
     "format": "Not released",
     "url": "https://www.strategy.com/press/strategy-world-2026-declares-a-new-era-for-enterprise-ai-honors-customer-and-partner-innovation_02-25-2026"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Mosaic YAML defines fact metrics and derived metrics with aggregation, formulas and formatting.",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_yaml_overview.htm"
    },
    "dimensions": {
     "l": 3,
     "n": "Attributes, hierarchies and relationships between attributes define grouping and roll-up.",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_yaml_overview.htm"
    },
    "relationships": {
     "l": 3,
     "n": "Hierarchy and relationship definitions are part of the model, and Mosaic models can be linked to each other.",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_yaml_overview.htm"
    },
    "synonyms": {
     "l": 3,
     "n": "Agent column descriptions hold aliases and business logic. Auto knowledge assets take glossaries, acronyms and synonyms.",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/agent_bestpractices.htm"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified-query object. Agents use custom instructions with SQL examples and column descriptions instead.",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/agent_bestpractices.htm"
    },
    "nl2sql": {
     "l": 3,
     "n": "Agents answer questions on AI-enabled Mosaic models from the metrics and relationships in the model. GA since Dec 2025.",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/auto_agent_from_model.htm"
    },
    "ontology": {
     "l": 0,
     "n": "AI-generated ontologies were announced at Strategy World in Feb 2026 and are not released.",
     "u": "https://www.strategy.com/press/strategy-world-2026-declares-a-new-era-for-enterprise-ai-honors-customer-and-partner-innovation_02-25-2026"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language in Mosaic or agent docs.",
     "u": "https://www2.strategy.com/producthelp/current/readme/en-us/content/whats_new.htm"
    },
    "vector": {
     "l": 0,
     "n": "No vector search over data or metadata in the release notes.",
     "u": "https://www2.strategy.com/producthelp/current/readme/en-us/content/whats_new.htm"
    },
    "mcp": {
     "l": 3,
     "n": "Mosaic models are in the MCP server out of the box from March 2026, replacing a Feb 2026 preview. Models must be certified.",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
    },
    "governance": {
     "l": 3,
     "n": "Mosaic YAML carries security filters and ACLs, and MCP queries use only published, certified models the user can view.",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_yaml_overview.htm"
    },
    "openStandard": {
     "l": 3,
     "n": "Mosaic imports and exports Apache Ossie YAML. Preview in Jun 2026, available out of the box from Jul 2026.",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_osi_import.htm"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Enable for AI generates a dataset description and a description per column from column name and sample values. Editable. Since March 2025.",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/auto_bots_new_data.htm"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Since June 2026, download an agent's tuning file (JSON) with column descriptions and custom instructions, and upload it to another agent.",
     "u": "https://www2.strategy.com/producthelp/2021/NextGenAI/en-us/Content/agent_tuning.htm"
    },
    "autoClassify": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "sampleValues": {
     "l": 3,
     "n": "Agent auto complete lists matching columns and attribute elements as users type, so a typed value picks the exact element.",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/auto_bots_new_general.htm"
    },
    "queryHistory": {
     "l": null,
     "n": "Not checked yet.",
     "u": ""
    },
    "lineage": {
     "l": 0,
     "n": "Components and Dependents views show object-level links between reports, attributes, metrics and tables. No column-level lineage view documented.",
     "u": "https://www2.strategy.com/producthelp/Current/Workstation/en-us/Content/view_component_dependent_objects.htm"
    },
    "evals": {
     "l": 1,
     "n": "Thumbs feedback and reasons are stored in Platform Analytics tables. Clarifications become per-user learnings. No eval runner or shared verified examples seen.",
     "u": "https://www2.strategy.com/producthelp/Current/PlatformAnalytics/en-us/Content/auto_assistant_schema.htm"
    }
   },
   "offers": [
    "Mosaic serves JDBC, XMLA and DAX for Power BI, REST and Python, with a Tableau connector.",
    "The Mosaic MCP endpoint returns projects, models, semantic definitions and read-only SQL results (Trino dialect).",
    "Models can be exchanged as Apache Ossie YAML and versioned in GitHub.",
    "Agents read column descriptions and custom instructions, with tuning files that can be reused across agents.",
    "Mosaic Studio can import Databricks Unity Catalog and BigQuery descriptions and generate business-friendly names."
   ],
   "gaps": [
    "AI-generated ontologies are announced only.",
    "Git support starts with GitHub only and one integration per environment.",
    "Ossie import keeps only ANSI SQL expressions, assumes one-to-many relationships and loses time granularity on round trips.",
    "No verified-query object. Agent tuning versions that test custom instructions are Preview."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Build the model in Mosaic, certify it, turn on AI for it, and let agents answer in Strategy tools. For outside agents, connect Claude, ChatGPT or Copilot to the Mosaic MCP endpoint. Use the Ossie YAML export when you need to move definitions elsewhere.",
   "snippet": {
    "lang": "other",
    "title": "MCP endpoint paths for a custom connector (from product help)",
    "code": "https://env-domain/collaboration/mcp/mosaic\n// agents use a different path:\n// https://env-domain/collaboration/mcp/agent",
    "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
   },
   "sources": [
    {
     "t": "Interact with agents, Mosaic models and cubes using an MCP server (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
    },
    {
     "t": "Import and export data from an Apache Ossie YAML file (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_osi_import.htm"
    },
    {
     "t": "Import and export Mosaic models as Apache Ossie YAML (release note)",
     "u": "https://employee.microstrategy.com/whats-new/import-and-export-mosaic-models-as-apache-ossie-yaml"
    },
    {
     "t": "Direct Mosaic model access via MCP (release note)",
     "u": "https://employee.microstrategy.com/whats-new/direct-mosaic-model-access-via-mcp"
    },
    {
     "t": "Mosaic model version control with GitHub (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_github.htm"
    },
    {
     "t": "Mosaic YAML format overview (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_yaml_overview.htm"
    },
    {
     "t": "Mosaic Universal Semantic Layer connectors (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_connector.htm"
    },
    {
     "t": "Create an agent from a data model (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/auto_agent_from_model.htm"
    },
    {
     "t": "Best practices: working with agents (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/agent_bestpractices.htm"
    },
    {
     "t": "What's New in Strategy (product help)",
     "u": "https://www2.strategy.com/producthelp/current/readme/en-us/content/whats_new.htm"
    },
    {
     "t": "Import data from a database (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_import_database.htm"
    },
    {
     "t": "Mosaic general availability press release, Jun 2025",
     "u": "https://www.strategy.com/press/strategy-announces-general-availability-of-strategy-mosaic-the-ai-powered-universal-intelligence-layer_06-24-2025"
    },
    {
     "t": "Strategy World 2026 press release",
     "u": "https://www.strategy.com/press/strategy-world-2026-declares-a-new-era-for-enterprise-ai-honors-customer-and-partner-innovation_02-25-2026"
    },
    {
     "t": "Apache Ossie ecosystem",
     "u": "https://ossie.apache.org/ecosystem/"
    },
    {
     "t": "Enable a Dataset for Agents",
     "u": "https://www2.microstrategy.com/producthelp/Current/Workstation/en-us/Content/enable_ai_dataset.htm"
    },
    {
     "t": "Manage Agent Data Using the Data Panel",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/auto_bots_new_data.htm"
    },
    {
     "t": "Reuse and Share Custom Instructions and Column Descriptions Among Agents",
     "u": "https://www2.strategy.com/producthelp/2021/NextGenAI/en-us/Content/agent_tuning.htm"
    },
    {
     "t": "View Component and Dependent Objects",
     "u": "https://www2.strategy.com/producthelp/Current/Workstation/en-us/Content/view_component_dependent_objects.htm"
    },
    {
     "t": "Auto Telemetry",
     "u": "https://www2.strategy.com/producthelp/Current/PlatformAnalytics/en-us/Content/auto_assistant_schema.htm"
    },
    {
     "t": "Use Suggestions",
     "u": "https://www2.strategy.com/producthelp/Current/Library/en-us/Content/auto_answers_use_suggestions.htm"
    },
    {
     "t": "Customize Agent Display Using the General Panel",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/auto_bots_new_general.htm"
    }
   ],
   "worksWith": [
    "Snowflake",
    "Databricks",
    "Google BigQuery",
    "Amazon Redshift"
   ],
   "worksWithUrl": "https://www2.strategy.com/producthelp/current/readme/en-us/content/whats_new.htm",
   "openToOtherTools": {
    "l": 3,
    "n": "JDBC, XMLA and DAX, REST, Python, an MCP server for Mosaic models (Mar 2026) and Ossie YAML export (Jul 2026).",
    "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_connector.htm"
   },
   "verified": "2026-10-24",
   "logo": "microstrategy",
   "enrichHowTo": "Enable the dataset for AI in Workstation or Library to generate dataset and column descriptions. Edit them in the agent data panel, then download the agent tuning file (JSON) to reuse column descriptions in other agents."
  },
  {
   "id": "tableau",
   "name": "Tableau (Tableau Semantics, Tableau Next)",
   "category": "bi",
   "tagline": "Salesforce BI with Tableau Semantics, a semantic layer on Data 360, and an MCP server.",
   "verdict": "native",
   "verdictNote": "Tableau Semantics holds metrics, calculated fields, and relationships in Tableau Next and Data 360, and agents reach it through a GA MCP server (Apr 2026).",
   "artifacts": [
    {
     "name": "Tableau Semantics (semantic layer in Tableau Next, on Data 360)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, Salesforce Semantic Model JSON",
     "url": "https://trailhead.salesforce.com/content/learn/modules/tableau-semantics/learn-the-basics-of-tableau-semantics"
    },
    {
     "name": "Tableau Next MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-04",
     "format": "MCP",
     "url": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "name": "Tableau MCP (open source, hosted at mcp.tableau.com or self-hosted)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "MCP, OAuth 2.1 or PAT",
     "url": "https://tableau.github.io/tableau-mcp/"
    },
    {
     "name": "Concierge (conversational analytics agent in Tableau Next)",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "GUI, Agentforce",
     "url": "https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm"
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
     "name": "Q&A Calibration and Data Pro auto-generated semantic models",
     "kind": "nl2sql",
     "status": "Preview",
     "since": "2026-04",
     "format": "GUI",
     "url": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "name": "Tableau Pulse (metrics and insights)",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://www.tableau.com/2026-1-april-features"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Semantic Model Builder defines metrics and calculated fields. Metrics carry filters and a time dimension that agents reuse.",
     "u": "https://trailhead.salesforce.com/content/learn/modules/semantic-models-in-tableau-next-quick-look/design-your-semantic-model-for-analysis"
    },
    "dimensions": {
     "l": 3,
     "n": "Calculated dimensions and measures are built in the model. Hierarchies and time grains not described in the pages read.",
     "u": "https://trailhead.salesforce.com/content/learn/modules/tableau-semantics/create-calculated-fields-and-metrics"
    },
    "relationships": {
     "l": 3,
     "n": "Canvas shows relationships between data objects. Einstein can suggest relationships when the toggle is on.",
     "u": "https://trailhead.salesforce.com/content/learn/modules/tableau-semantics/learn-the-basics-of-tableau-semantics"
    },
    "synonyms": {
     "l": 3,
     "n": "Agents read field labels and descriptions (255 characters). Docs also name Business Preferences. No synonym field found.",
     "u": "https://trailhead.salesforce.com/content/learn/modules/semantic-models-in-tableau-next-quick-look/design-your-semantic-model-for-analysis"
    },
    "verifiedQueries": {
     "l": 2,
     "n": "Q&A Calibration is Beta in the April 2026 notes and still Beta in June 2026. Not shown as question-SQL pairs.",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    "nl2sql": {
     "l": 3,
     "n": "Concierge answers natural-language questions over semantic models; its scope controls are GA in April 2026 notes.",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    "ontology": {
     "l": 0,
     "n": "Semantic Model Builder elements are metrics, calculated fields, parameters, logical views, and data objects. No ontology object.",
     "u": "https://trailhead.salesforce.com/content/learn/modules/tableau-semantics/learn-the-basics-of-tableau-semantics"
    },
    "graph": {
     "l": 3,
     "n": "Tableau Knowledge Graph REST API (Cloud+, Sept 2026): nodes, edges, lineage and impact calls. No Cypher, GQL or SPARQL query language.",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_knowledge_graph.htm"
    },
    "vector": {
     "l": 3,
     "n": "Tableau Knowledge Graph API has a natural-language semantic search over graph nodes. Cloud+ only, not on Tableau Server.",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_knowledge_graph.htm"
    },
    "mcp": {
     "l": 3,
     "n": "April 2026 notes: Tableau Next MCP is generally available. Open-source Tableau MCP covers Cloud and Server.",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    "governance": {
     "l": 3,
     "n": "Admins set which semantic models an agent may use. Hosted Tableau MCP enforces each user's existing permissions.",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    "openStandard": {
     "l": 1,
     "n": "Apache Ossie converters repo has a two-way Salesforce converter, described as the Salesforce / Tableau semantic layer.",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Tableau Agent drafts descriptions for data sources, workbooks and tables in Catalog (Cloud). Tableau Next has a Beta generator.",
     "u": "https://help.tableau.com/current/tableau/en-us/tableau_gai_solutions.htm"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "REST: Update Column, Batch Add Tags, and from API 3.30 field descriptions on a work copy. Needs Data Management.",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_data_sources.htm"
    },
    "autoClassify": {
     "l": 0,
     "n": "Sensitivity labels and tags are set by hand or via REST. No automatic column classification found.",
     "u": "https://help.tableau.com/current/server/en-us/dm_labels.htm"
    },
    "sampleValues": {
     "l": 3,
     "n": "Tableau Agent sends up to 1000 unique sampled values from the data source to the model when authoring vizzes.",
     "u": "https://help.tableau.com/current/tableau/en-us/tableau_gai_data.htm"
    },
    "queryHistory": {
     "l": 0,
     "n": "No feature mines usage or query logs to suggest models or metrics. Tableau Agent drafts descriptions from the data source.",
     "u": "https://help.tableau.com/current/tableau/en-us/tableau_gai_solutions.htm"
    },
    "lineage": {
     "l": 3,
     "n": "Catalog lineage filters to a selected field or column, upstream or downstream. No columns for custom SQL tables. Cubes unsupported.",
     "u": "https://help.tableau.com/current/online/en-us/dm_lineage.htm"
    },
    "evals": {
     "l": 2,
     "n": "Q&A Calibration (Beta) in Tableau Next tests questions in Concierge, then lets you verify and calibrate results.",
     "u": "https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm"
    }
   },
   "offers": [
    "Tableau Next MCP server (GA Apr 2026) lets agents query Tableau's analytics engine with semantic context.",
    "Open-source tableau-mcp works with Tableau Cloud and Server, hosted at mcp.tableau.com or self-hosted.",
    "Semantic Model Scope in Concierge limits which semantic models an agent may use.",
    "Data 360 connectors cover Snowflake, BigQuery, Redshift, Databricks, PostgreSQL, and MySQL."
   ],
   "gaps": [
    "Q&A Calibration and auto-generated semantic models are Beta.",
    "The semantic layer lives in Salesforce Data 360, so definitions sit inside one vendor cloud.",
    "No synonym field found. Descriptions and Business Preferences carry business wording.",
    "Salesforce lists opening the semantic layer to other semantic layers as roadmap work, not shipped."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Build a semantic model in Tableau Next on Data 360, then use Concierge or the Tableau Next MCP server to ask questions. Calls go through the semantic model, so the agent does not write raw SQL. Write clear field labels and descriptions first.",
   "snippet": {
    "lang": "other",
    "title": "Hosted Tableau MCP endpoint named in the tableau-mcp README",
    "code": "https://mcp.tableau.com",
    "u": "https://raw.githubusercontent.com/tableau/tableau-mcp/main/README.md"
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
    "n": "Tableau Next MCP is GA (Apr 2026) and open-source tableau-mcp is available. No SQL interface found. Ossie converter exists.",
    "u": "https://www.tableau.com/2026-1-april-features"
   },
   "sources": [
    {
     "t": "Tableau April 2026 New Features",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "t": "Tableau Next (Salesforce)",
     "u": "https://www.salesforce.com/analytics/tableau-next/"
    },
    {
     "t": "Tableau MCP docs",
     "u": "https://tableau.github.io/tableau-mcp/"
    },
    {
     "t": "Tableau MCP README",
     "u": "https://raw.githubusercontent.com/tableau/tableau-mcp/main/README.md"
    },
    {
     "t": "Trailhead: Learn the Basics of Tableau Semantics",
     "u": "https://trailhead.salesforce.com/content/learn/modules/tableau-semantics/learn-the-basics-of-tableau-semantics"
    },
    {
     "t": "Trailhead: Create Calculated Fields and Metrics",
     "u": "https://trailhead.salesforce.com/content/learn/modules/tableau-semantics/create-calculated-fields-and-metrics"
    },
    {
     "t": "Trailhead: Design a Semantic Model for Effective AI Analytics",
     "u": "https://trailhead.salesforce.com/content/learn/modules/semantic-models-in-tableau-next-quick-look/design-your-semantic-model-for-analysis"
    },
    {
     "t": "Apache Ossie converters repo",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    {
     "t": "Tableau Next MCP Server (Salesforce Help)",
     "u": "https://help.salesforce.com/s/articleView?id=analytics.tua_data_sdm_mcp.htm&language=en_US&type=5"
    },
    {
     "t": "Tableau Help: Step 4, Enable Tableau Next AI Features",
     "u": "https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm"
    },
    {
     "t": "Tableau Help: Tableau Knowledge Graph Methods",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_knowledge_graph.htm"
    },
    {
     "t": "Metadata Methods (REST API)",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_metadata.htm"
    },
    {
     "t": "Data Sources Methods (REST API)",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_data_sources.htm"
    },
    {
     "t": "What's New in the REST API",
     "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_whats_new.htm"
    },
    {
     "t": "Use Lineage for Impact Analysis",
     "u": "https://help.tableau.com/current/online/en-us/dm_lineage.htm"
    },
    {
     "t": "Data Labels",
     "u": "https://help.tableau.com/current/server/en-us/dm_labels.htm"
    },
    {
     "t": "AI in Tableau Features",
     "u": "https://help.tableau.com/current/tableau/en-us/tableau_gai_solutions.htm"
    },
    {
     "t": "AI in Tableau and Data Usage",
     "u": "https://help.tableau.com/current/tableau/en-us/tableau_gai_data.htm"
    },
    {
     "t": "Introduction to Tableau Metadata API",
     "u": "https://help.tableau.com/current/api/metadata_api/en-us/index.html"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "With a Data Management license, call Update Column to set one column description at a time, or use the REST API 3.30 data source methods to create a work copy, add FieldDescription and TableDescription elements, then publish it. Batch Add Tags tags many assets in one call. In Tableau Next, turn on the Semantic Description Generator (Beta) and review each draft.",
   "bulkSnippet": {
    "lang": "json",
    "code": "{\n \"tdsElementList\": [\n {\"elementType\": \"FieldDescription\", \"name\": \"Sales\", \"description\": \"Total sales amount.\"},\n {\"elementType\": \"TableDescription\", \"name\": \"Orders\", \"description\": \"Order line items.\"}\n ]\n}",
    "u": "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_data_sources.htm"
   }
  },
  {
   "id": "thoughtspot",
   "name": "ThoughtSpot",
   "category": "bi",
   "tagline": "Search and AI analytics platform with Models, TML, Spotter agents, and an MCP server.",
   "verdict": "native",
   "verdictNote": "Models with joins, formulas, synonyms, coaching, and TML are GA and feed Spotter, which agents reach through a dated-version MCP server.",
   "artifacts": [
    {
     "name": "Models (replaced Worksheets)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "GUI, TML",
     "url": "https://docs.thoughtspot.com/cloud/26.10.0.cl/models.md"
    },
    {
     "name": "ThoughtSpot Modeling Language (TML)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "TML text",
     "url": "https://docs.thoughtspot.com/cloud/26.10.0.cl/tml.md"
    },
    {
     "name": "Spotter Semantics (governed semantic layer built on Models and AI context)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "2026-03",
     "format": "GUI, TML",
     "url": "https://docs.thoughtspot.com/cloud/26.6.0.cl/semantic-layer"
    },
    {
     "name": "Spotter (AI analyst, replaced Sage and Ask Sage)",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "GUI",
     "url": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    {
     "name": "Spotter agent conversation APIs",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "REST",
     "url": "https://developers.thoughtspot.com/docs/spotter-agent-apis"
    },
    {
     "name": "Spotter MCP server (Spotter 3 tools from the 2026-05-01 version)",
     "kind": "mcp",
     "status": "GA",
     "since": "2026-04",
     "format": "MCP",
     "url": "https://developers.thoughtspot.com/docs/mcp-server-changelog"
    },
    {
     "name": "SpotterModel (autonomous Model generation)",
     "kind": "nl2sql",
     "status": "Preview",
     "since": "",
     "format": "GUI",
     "url": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-model-create.md"
    },
    {
     "name": "Snowflake Semantic Views integration (import as Models)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "2026-05",
     "format": "GUI, YAML upload",
     "url": "https://docs.thoughtspot.com/cloud/26.6.0.cl/26-5-0-cl"
    },
    {
     "name": "Worksheets",
     "kind": "semantic-model",
     "status": "Deprecated",
     "since": "2024-11",
     "format": "GUI, TML",
     "url": "https://developers.thoughtspot.com/docs/deprecated-features"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Models hold formulas and measures. Spotter Semantics docs describe metrics defined once and applied everywhere.",
     "u": "https://docs.thoughtspot.com/cloud/26.6.0.cl/semantic-layer"
    },
    "dimensions": {
     "l": 3,
     "n": "Model columns are typed ATTRIBUTE or MEASURE. Docs also cover custom calendars and a default metric time grain; no hierarchy object found.",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/data-modeling-column-basics.md"
    },
    "relationships": {
     "l": 3,
     "n": "Model editor creates joins between tables. SpotterModel suggests joins (Beta).",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/models.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Column synonyms, descriptions, and Spotter instructions are read by Spotter. Model-level AI synonym generation was removed in 26.6.0.cl.",
     "u": "https://docs.thoughtspot.com/cloud/26.9.0.cl/deprecation"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Reference questions train Spotter. Coaching access and coaching TML export went GA in 26.3.0.cl.",
     "u": "https://docs.thoughtspot.com/cloud/26.9.0.cl/26-3-0-cl"
    },
    "nl2sql": {
     "l": 3,
     "n": "Spotter is the AI analyst. Sage and Ask Sage were removed in December 2025 and replaced by Spotter.",
     "u": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology object in the documentation index. Teams use Models with column descriptions, synonyms and Spotter instructions.",
     "u": "https://docs.thoughtspot.com/llms-full.txt"
    },
    "graph": {
     "l": 0,
     "n": "No graph query feature in the documentation index.",
     "u": "https://docs.thoughtspot.com/llms-full.txt"
    },
    "vector": {
     "l": 0,
     "n": "No vector search feature in the documentation index. Spotter uses a value index for column values.",
     "u": "https://docs.thoughtspot.com/llms-full.txt"
    },
    "mcp": {
     "l": 3,
     "n": "Dated MCP versions. The 2026-05-01 version switched to Spotter 3 session tools and deprecated the old URLs.",
     "u": "https://developers.thoughtspot.com/docs/mcp-server-changelog"
    },
    "governance": {
     "l": 3,
     "n": "Row-level security rules on tables apply to Models and Answers. Docs say RLS and CLS apply during query generation.",
     "u": "https://docs.thoughtspot.com/cloud/26.9.0.cl/security-rls"
    },
    "openStandard": {
     "l": 1,
     "n": "Apache Ossie converters repo has a ThoughtSpot converter (TML Model and Table/SQL View). Snowflake Semantic Views import is Early Access.",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    "aiDescriptions": {
     "l": 2,
     "n": "SpotterModel drafts column descriptions from a chat prompt; autonomous build is Beta. AI synonyms are Early Access.",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-model-create.md"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "TML API exports and imports Model TML in bulk, with column descriptions and synonyms. Column property sync is Early Access.",
     "u": "https://developers.thoughtspot.com/docs/tml"
    },
    "autoClassify": {
     "l": 0,
     "n": "No automatic PII tagging found. Docs advise excluding PII columns from indexing by hand.",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-make-ai-ready.md"
    },
    "sampleValues": {
     "l": 3,
     "n": "Indexing samples 1,000 values per column and powers Spotter value suggestions and column sample values. Secure suggestions fetch values live.",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/data-modeling-index.md"
    },
    "queryHistory": {
     "l": 0,
     "n": "No feature builds models or examples from warehouse query logs. Memory comes from Liveboards and conversations (Early Access).",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-liveboard-learn.md"
    },
    "lineage": {
     "l": 1,
     "n": "Tables list dependent Models, Liveboards and Answers and the columns they use. DataHub builds column lineage.",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/thoughtspot.md"
    },
    "evals": {
     "l": 3,
     "n": "Add to Coaching saves verified question and answer pairs. The Spotter Conversations Liveboard shows feedback. No benchmark runner found.",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-reference-questions.md"
    }
   },
   "offers": [
    "Models and TML give a code form for the semantic layer. Worksheets were migrated to Models.",
    "Spotter MCP server (2026-05-01 version) gives agents session tools: create_analysis_session, send_session_message, get_session_updates.",
    "Spotter agent conversation APIs let your app start and continue conversations; the older converse endpoints are deprecated.",
    "An Ossie converter for TML exists in the Apache repo.",
    "Live connections to Snowflake, Redshift, BigQuery, Databricks, and more."
   ],
   "gaps": [
    "The metrics catalog named in the March 2026 launch release is not described in the product docs.",
    "The 2026-05-01 MCP version replaced the legacy tools. Older integrations must migrate or pin an earlier version date.",
    "Model-level Generate AI Synonyms was removed in 26.6.0.cl. Spotter Model (Early Access) is the named replacement.",
    "Snowflake Semantic Views import is Early Access and SpotterModel Model generation is Beta."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "Databricks Metric Views",
    "dbt Semantic Layer"
   ],
   "nl2sqlPath": "Model data in ThoughtSpot Models (TML), add synonyms, descriptions, and reference questions, then use Spotter in the UI. For your own agent, call the Spotter MCP server or the Spotter agent APIs. Pin an MCP version date, because the May 2026 change replaced older tool names.",
   "snippet": {
    "lang": "other",
    "title": "Pin the Spotter MCP server version in the URL (query parameter)",
    "code": "?api-version=2026-05-01",
    "u": "https://developers.thoughtspot.com/docs/mcp-server-changelog"
   },
   "worksWith": [
    "Snowflake",
    "Amazon Redshift",
    "Google BigQuery",
    "Databricks",
    "Azure Synapse",
    "Oracle",
    "PostgreSQL",
    "SQL Server",
    "Starburst",
    "Teradata",
    "Trino"
   ],
   "worksWithUrl": "https://docs.thoughtspot.com/cloud/26.10.0.cl/connections.md",
   "openToOtherTools": {
    "l": 3,
    "n": "Spotter MCP server and Spotter agent REST APIs let outside agents query. An Ossie converter for TML exists in the Apache repo.",
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
     "t": "Semantic layer (Spotter Semantics) docs",
     "u": "https://docs.thoughtspot.com/cloud/26.6.0.cl/semantic-layer"
    },
    {
     "t": "Deprecated and removed features (26.9.0.cl)",
     "u": "https://docs.thoughtspot.com/cloud/26.9.0.cl/deprecation"
    },
    {
     "t": "Create Models",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/models.md"
    },
    {
     "t": "Connections in ThoughtSpot Cloud",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/connections.md"
    },
    {
     "t": "Spotter FAQ",
     "u": "https://docs.thoughtspot.com/cloud/26.9.0.cl/spotter-faq"
    },
    {
     "t": "About row-level security",
     "u": "https://docs.thoughtspot.com/cloud/26.9.0.cl/security-rls"
    },
    {
     "t": "26.3.0.cl release notes",
     "u": "https://docs.thoughtspot.com/cloud/26.9.0.cl/26-3-0-cl"
    },
    {
     "t": "26.5.0.cl release notes (May 2026)",
     "u": "https://docs.thoughtspot.com/cloud/26.6.0.cl/26-5-0-cl"
    },
    {
     "t": "26.6.0.cl release notes (June 2026)",
     "u": "https://docs.thoughtspot.com/cloud/26.8.0.cl/26-6-0-cl"
    },
    {
     "t": "ThoughtSpot Introduces Spotter Semantics (press release)",
     "u": "https://www.thoughtspot.com/press-releases/thoughtspot-introduces-spotter-semantics-to-bring-trust-and-context-to-enterprise-ai"
    },
    {
     "t": "Apache Ossie converters repo",
     "u": "https://raw.githubusercontent.com/apache/ossie-converters/main/README.md"
    },
    {
     "t": "ThoughtSpot: Set column name, description, and type",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/data-modeling-column-basics.md"
    },
    {
     "t": "ThoughtSpot documentation index (llms-full)",
     "u": "https://docs.thoughtspot.com/llms-full.txt"
    },
    {
     "t": "ThoughtSpot TML API",
     "u": "https://developers.thoughtspot.com/docs/tml"
    },
    {
     "t": "TML for Models",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/tml-models.md"
    },
    {
     "t": "Hide a column or define a synonym",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/data-modeling-visibility.md"
    },
    {
     "t": "Manage suggestion indexing",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/data-modeling-index.md"
    },
    {
     "t": "SpotterModel",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-model-create.md"
    },
    {
     "t": "AI Context",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-ai-context.md"
    },
    {
     "t": "Make your data model AI-ready",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-make-ai-ready.md"
    },
    {
     "t": "Diagnose problems with Spotter",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-diagnose.md"
    },
    {
     "t": "Reference questions",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-reference-questions.md"
    },
    {
     "t": "Spotter Conversations Liveboard",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-conversations-liveboard.md"
    },
    {
     "t": "Add memory from Liveboards",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/spotter-liveboard-learn.md"
    },
    {
     "t": "Delete a table with dependent objects (Snowflake)",
     "u": "https://docs.thoughtspot.com/cloud/26.10.0.cl/connections-snowflake-delete-table-dependencies.md"
    },
    {
     "t": "DataHub ThoughtSpot source",
     "u": "https://docs.datahub.com/docs/generated/ingestion/sources/thoughtspot.md"
    },
    {
     "t": "Deprecated and removed features",
     "u": "https://docs.thoughtspot.com/cloud/latest/deprecation"
    }
   ],
   "verified": "2026-10-24",
   "logo": null,
   "enrichHowTo": "Export the Model as TML with the TML API, edit column descriptions, synonyms and AI context in the file, then import it back with the import API. Use Generate under Spotter optimization to draft AI context per column, review it, and use the Spotter diagnose prompts to find confusing columns.",
   "bulkSnippet": {
    "lang": "json",
    "code": "{\n \"metadata_tmls\": [\n \"guid: <model_guid>\\nmodel:\\n  name: <model_name>\\n  columns:\\n  - name: <column_name_1>\\n    description: <column_description>\\n    properties:\\n      synonyms:\\n      - <synonym>\\n\"\n ],\n \"import_policy\": \"PARTIAL\",\n \"create_new\": false\n}",
    "u": "https://developers.thoughtspot.com/docs/tml"
   }
  },
  {
   "id": "alation",
   "name": "Alation",
   "category": "catalog",
   "tagline": "Enterprise data catalog with data products, Agent Studio and a remote MCP server.",
   "verdict": "native",
   "verdictNote": "Alation data products hold metrics, dimensions, joins, synonyms and verified queries, with chat, evaluations and OSI export, on Alation Cloud Service only.",
   "artifacts": [
    {
     "name": "Data product semantic model (YAML)",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "Data product YAML; imports Snowflake semantic views, Databricks metric views or OSI YAML; exports back to the source; Alation Cloud Service",
     "url": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ExportDataProductsToSource.md"
    },
    {
     "name": "Chat with Data Product",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "Natural-language SQL over a data product using the user's own warehouse credentials; metered in ACUs",
     "url": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ChatWithDataProduct.md"
    },
    {
     "name": "Alation MCP server (Agent Studio)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Remote MCP at <tenant>/ai/mcp/; built-in and published agent tools; custom curated servers",
     "url": "https://documentation.alation.com/en/latest/agentstudio/integrations/mcp/using-the-mcp-server.md"
    },
    {
     "name": "Agent Studio",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "SDK or no-code builder; deploy through MCP or REST; metered in ACUs",
     "url": "https://documentation.alation.com/en/latest/welcome/About/AlationAIFeatures.md"
    },
    {
     "name": "Create data products from query logs (Beta)",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "",
     "format": "UI; needs query log ingestion; suggests co-queried tables",
     "url": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/CreateDataProductsFromQueryLogs.md"
    },
    {
     "name": "ALLIE AI Suggested Descriptions",
     "kind": "annotations",
     "status": "GA",
     "since": "2024-06",
     "format": "UI; drafts table descriptions; steward reviews",
     "url": "https://docs.alation.com/en/latest/steward/AISuggestedDescriptions/AISuggestedDescriptions.html"
    },
    {
     "name": "Curation Automation",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "Rules that fill titles, descriptions and custom fields at scale; AI or fixed values; metered in ACUs",
     "url": "https://documentation.alation.com/en/latest/governance/OutcomeBasedGovernance/CurationAutomation/index.md"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Data products hold metrics as aggregate expressions and sync with Snowflake semantic views and Databricks metric views.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ExportDataProductsToSource.md"
    },
    "dimensions": {
     "l": 3,
     "n": "Dimensions, time dimensions and facts are imported from semantic views and exported back.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/CreateDataProductsFromSemanticModel.md"
    },
    "relationships": {
     "l": 3,
     "n": "Joins are declared per data product, with join recommendations. They feed AI chat answers.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/AddJoinsToDataProduct.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Synonyms are imported from semantic views. Linked Document Hubs content gives chat definitions and rules.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/CreateDataProductsFromSemanticModel.md"
    },
    "verifiedQueries": {
     "l": 3,
     "n": "Verified question and SQL pairs are kept as evaluation cases and exported to Snowflake semantic views.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/CreateDataProductsFromSemanticModel.md"
    },
    "nl2sql": {
     "l": 3,
     "n": "Chat with Data Product writes and runs SQL under the user's credentials and shows the generated SQL.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ChatWithDataProduct.md"
    },
    "ontology": {
     "l": 0,
     "n": "No ontology or class model in the docs index. Teams use glossary terms and data products.",
     "u": "https://documentation.alation.com/llms.txt"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language in the docs index.",
     "u": "https://documentation.alation.com/llms.txt"
    },
    "vector": {
     "l": 3,
     "n": "The Data Products Marketplace includes AI-powered semantic search.",
     "u": "https://documentation.alation.com/en/latest/welcome/About/AlationAIFeatures.md"
    },
    "mcp": {
     "l": 3,
     "n": "Remote MCP server on Alation Cloud Service exposes catalog search, context, SQL execution, lineage and data quality tools.",
     "u": "https://documentation.alation.com/en/latest/agentstudio/integrations/mcp/using-the-mcp-server.md"
    },
    "governance": {
     "l": 3,
     "n": "Chat runs under the user's own warehouse credentials. Agents inherit catalog access controls and lineage.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ChatWithDataProduct.md"
    },
    "openStandard": {
     "l": 3,
     "n": "Data products import and export OSI spec YAML, and sync with Snowflake semantic views and Databricks metric views.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ExportDataProductsToSource.md"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "ALLIE drafts table descriptions, generally available since June 2024. Curation Automation fills titles and descriptions by rule.",
     "u": "https://docs.alation.com/en/latest/steward/AISuggestedDescriptions/AISuggestedDescriptions.html"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Custom Field Values API: 10000 objects per request, async for more. Titles and descriptions of tables need the Relational Integration API.",
     "u": "https://documentation.alation.com/api-reference/alation-cloud-service-latest/custom-field-values-api/custom-field-value/putcustomfieldvalues.md"
    },
    "autoClassify": {
     "l": 1,
     "n": "Curation Automation can fill custom fields by rule. No built-in PII detector found in the docs index.",
     "u": "https://documentation.alation.com/en/latest/governance/OutcomeBasedGovernance/CurationAutomation/index.md"
    },
    "sampleValues": {
     "l": 0,
     "n": "No sample-value matching is described for Chat with Data Product. Linked Document Hubs content supplies definitions instead.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ChatWithDataProduct.md"
    },
    "queryHistory": {
     "l": 2,
     "n": "Beta flow suggests data products from query logs. Evaluation questions can be generated from query log data.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/CreateDataProductsFromQueryLogs.md"
    },
    "lineage": {
     "l": 3,
     "n": "Auto lineage from query log ingestion and metadata extraction. Column level depends on the source.",
     "u": "https://docs.alation.com/en/latest/analyst/Lineage/LineageGlossary.html"
    },
    "evals": {
     "l": 3,
     "n": "Evaluate Data Product Chat runs questions against expected SQL in bulk. Thumbs feedback is reviewed by admins.",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/EvaluateDataProduct.md"
    }
   },
   "offers": [
    "Data product semantic model with metrics, dimensions, joins, synonyms and verified queries.",
    "Chat with Data Product that writes SQL and runs it under the user's credentials.",
    "Evaluation of chat accuracy against expected SQL, plus a feedback tab.",
    "OSI import and export, and sync with Snowflake semantic views and Databricks metric views.",
    "Remote MCP server and Agent Studio for custom agents.",
    "ALLIE and Curation Automation for descriptions at scale."
   ],
   "gaps": [
    "Data products, chat and MCP are Alation Cloud Service features; customer-managed instances differ.",
    "AI features are metered in Alation Consumption Units.",
    "Export to a source overwrites changes made directly on the semantic view.",
    "Custom field APIs cannot set titles or descriptions on tables and columns.",
    "No built-in PII classification found."
   ],
   "fillWith": [
    "Snowflake Semantic Views",
    "Databricks Metric Views",
    "dbt Semantic Layer",
    "Cube"
   ],
   "nl2sqlPath": "Build a data product for the tables an agent needs, add joins, metrics and verified queries, then run Evaluate Data Product Chat before enabling chat. Use the remote MCP server to give outside agents the same catalog context. Sync the model to Snowflake or Databricks if you also use their native tools.",
   "snippet": {
    "lang": "other",
    "title": "Alation remote MCP server URL",
    "code": "https://<your-tenant>.alationcloud.com/ai/mcp/",
    "u": "https://documentation.alation.com/en/latest/agentstudio/integrations/mcp/using-the-mcp-server.md"
   },
   "enrichHowTo": "Use ALLIE or Curation Automation to draft descriptions. For scripted writes of table titles and descriptions, call PATCH /integration/v2/table/ in the Relational Integration API with ds_id. The Custom Field Values API cannot set titles or descriptions on data objects, and the older Upload Logical Metadata API carries a deprecation notice.",
   "bulkSnippet": {
    "lang": "bash",
    "code": "curl -X PATCH \"https://<base_url>/integration/v2/table/?ds_id=7\" \\\n  -H \"TOKEN: $API_TOKEN\" -H \"Content-Type: application/json\" \\\n  -d '[{\"key\":\"7.Human_Resources.Employees\",\"title\":\"Employees\",\"description\":\"One row per employee.\"}]'\n# returns 202 with a job_id; poll GET /api/v1/bulk_metadata/job/?id={job_id}",
    "u": "https://documentation.alation.com/api-reference/alation-cloud-service-latest/relational-integration-api/table/patchtables.md"
   },
   "sources": [
    {
     "t": "Export Data Products to the Source System",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ExportDataProductsToSource.md"
    },
    {
     "t": "Create Data Products from a Semantic Model",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/CreateDataProductsFromSemanticModel.md"
    },
    {
     "t": "Add Joins to Data Products",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/AddJoinsToDataProduct.md"
    },
    {
     "t": "Configure Chat with Data Product",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ChatWithDataProduct.md"
    },
    {
     "t": "Evaluate Data Product Chat",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/EvaluateDataProduct.md"
    },
    {
     "t": "Create Data Products from Query Logs",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/CreateDataProductsFromQueryLogs.md"
    },
    {
     "t": "Manage Chat Feedback",
     "u": "https://documentation.alation.com/en/latest/DataProductsandMarketplace/ManageDataProducts/ManageChatFeedback.md"
    },
    {
     "t": "Using the MCP Server",
     "u": "https://documentation.alation.com/en/latest/agentstudio/integrations/mcp/using-the-mcp-server.md"
    },
    {
     "t": "Agent Studio release notes",
     "u": "https://documentation.alation.com/en/latest/agentstudio/releases/overview.md"
    },
    {
     "t": "AI Features overview",
     "u": "https://documentation.alation.com/en/latest/welcome/About/AlationAIFeatures.md"
    },
    {
     "t": "Curation Automation",
     "u": "https://documentation.alation.com/en/latest/governance/OutcomeBasedGovernance/CurationAutomation/index.md"
    },
    {
     "t": "ALLIE AI Suggested Descriptions",
     "u": "https://docs.alation.com/en/latest/steward/AISuggestedDescriptions/AISuggestedDescriptions.html"
    },
    {
     "t": "PUT multiple Custom Field Values",
     "u": "https://documentation.alation.com/api-reference/alation-cloud-service-latest/custom-field-values-api/custom-field-value/putcustomfieldvalues.md"
    },
    {
     "t": "Update tables (Relational Integration API)",
     "u": "https://documentation.alation.com/api-reference/alation-cloud-service-latest/relational-integration-api/table/patchtables.md"
    },
    {
     "t": "ULM Overview (deprecation notice)",
     "u": "https://documentation.alation.com/api-reference/alation-cloud-service-latest/upload-logical-metadata-api/upload-logical-metadata.md"
    },
    {
     "t": "Lineage Glossary",
     "u": "https://docs.alation.com/en/latest/analyst/Lineage/LineageGlossary.html"
    },
    {
     "t": "Alation documentation index",
     "u": "https://documentation.alation.com/llms.txt"
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
   "tagline": "Active metadata catalog with context agents, a hosted MCP server and a context studio.",
   "verdict": "partial",
   "verdictNote": "Atlan serves glossary, descriptions and lineage over a hosted MCP server, and its Context Engineering Studio models metrics and joins, but that studio is enabled on request and still gated.",
   "artifacts": [
    {
     "name": "Atlan MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Hosted remote MCP on every tenant; OAuth or API key; 41 tools in nine categories",
     "url": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview"
    },
    {
     "name": "Atlan AI and conversational AI",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "",
     "format": "UI; admin turns it on under Labs; conversational AI access can need Atlan support. No stage label in docs",
     "url": "https://docs.atlan.com/product/capabilities/atlan-ai/concepts/what-is-atlan-ai"
    },
    {
     "name": "Context Agents Studio (Description, README, SQL Intelligence agents)",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "UI; billed in Flexi Credits; agents fill only assets that lack the attribute",
     "url": "https://docs.atlan.com/product/capabilities/governance/context-agents-studio/concepts/agents"
    },
    {
     "name": "Context agent templates (Asset to Term Linker)",
     "kind": "agent",
     "status": "Preview",
     "since": "",
     "format": "UI; docs state private preview, enabled per tenant on request",
     "url": "https://docs.atlan.com/llms/platform/context-agents-studio/faq-agent-templates/llms.txt"
    },
    {
     "name": "Context Engineering Studio",
     "kind": "semantic-model",
     "status": "Preview",
     "since": "",
     "format": "UI; enabled in Labs through the Atlan account team (not self-serve); deploys to Snowflake Cortex Analyst and Databricks Genie, renders dbt MetricFlow",
     "url": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/concepts/what-is-context-engineering-studio.md"
    },
    {
     "name": "Business glossary",
     "kind": "glossary",
     "status": "GA",
     "since": "",
     "format": "UI, API, SDK; AI-generated overviews and completeness checks",
     "url": "https://docs.atlan.com/product/capabilities/atlan-ai/concepts/what-is-atlan-ai"
    }
   ],
   "caps": {
    "metrics": {
     "l": 2,
     "n": "Context Engineering Studio keeps derived metrics in a context repository. Studio is gated; engines may not accept every metric.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/concepts/whats-in-a-context-repository.md"
    },
    "dimensions": {
     "l": 2,
     "n": "Repository model lists dimensions, time dimensions and facts per table. Same gated studio.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/concepts/whats-in-a-context-repository.md"
    },
    "relationships": {
     "l": 2,
     "n": "Studio model holds table relationships. SQL Intelligence mines joins and foreign keys from query history.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/concepts/whats-in-a-context-repository.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Descriptions, READMEs and glossary terms are returned to agents through the MCP server.",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview"
    },
    "verifiedQueries": {
     "l": 2,
     "n": "Studio repositories hold verified question and SQL pairs. Studio is gated.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/concepts/whats-in-a-context-repository.md"
    },
    "nl2sql": {
     "l": 2,
     "n": "Conversational AI can write SQL grounded in catalog metadata. Access is per tenant; no stage label in docs.",
     "u": "https://docs.atlan.com/llms/platform/conversational-ai/use-conversational-ai/llms.txt"
    },
    "ontology": {
     "l": 1,
     "n": "Glossary terms, domains and linked assets. No object, link or action model found.",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/concepts/what-is-atlan-ai"
    },
    "graph": {
     "l": 0,
     "n": "No graph query language in the docs reviewed. Agents reach lineage and metadata through MCP search and lineage tools.",
     "u": "https://docs.atlan.com/llms/platform/atlan-mcp-overview/mcp-tools/llms.txt"
    },
    "vector": {
     "l": 0,
     "n": "No vector search feature documented. Docs position context repositories as distinct from vector databases.",
     "u": "https://docs.atlan.com/llms/platform/agents/memory-layer/llms.txt"
    },
    "mcp": {
     "l": 3,
     "n": "Hosted MCP server on every tenant with search, lineage, glossary, metadata and data quality tools.",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview"
    },
    "governance": {
     "l": 3,
     "n": "MCP calls use the caller's personas and policies. Write tools show a preview and wait for approval.",
     "u": "https://docs.atlan.com/llms/platform/atlan-mcp-overview/mcp-security/llms.txt"
    },
    "openStandard": {
     "l": 2,
     "n": "Studio renders Snowflake semantic views, Databricks metric views and dbt MetricFlow models. No OSI support found.",
     "u": "https://docs.atlan.com/llms/platform/context-engineering-studio/portability-targets/llms.txt"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Description and README agents draft from lineage, query history and glossary. They skip assets that already have a description.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-agents-studio/concepts/agents"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Spreadsheet export and sync, CSV import, and Python SDK batch save in one API call.",
     "u": "https://docs.atlan.com/product/capabilities/build-apps/sdks/python/how-tos/bulk-updates/update-multiple-assets"
    },
    "autoClassify": {
     "l": 1,
     "n": "Playbooks apply tags by rule. Cyera and ALTR integrations import classification results. No built-in PII detector found.",
     "u": "https://docs.atlan.com/llms/governance/playbooks/llms.txt"
    },
    "sampleValues": {
     "l": 2,
     "n": "Studio takes sample values from column top values written by a profiling playbook. Studio is gated.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/how-tos/get-started.md"
    },
    "queryHistory": {
     "l": 3,
     "n": "SQL Intelligence agent derives common joins, filters, business questions and foreign keys from warehouse query history.",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-agents-studio/concepts/agents"
    },
    "lineage": {
     "l": 3,
     "n": "Column-level lineage for Snowflake, Redshift, BigQuery and others, mined from query history.",
     "u": "https://docs.atlan.com/product/capabilities/lineage/faq/sql-dump-lineage-support"
    },
    "evals": {
     "l": 2,
     "n": "Atlan's product page describes auto-generated eval suites and a feedback loop for the studio. The docs pages do not cover it.",
     "u": "https://atlan.com/context-engineering-studio/"
    }
   },
   "offers": [
    "Hosted MCP server with 41 tools for search, lineage, glossary and metadata.",
    "Description and README agents that draft from lineage, query history and glossary.",
    "SQL Intelligence that mines joins, filters and foreign keys from query history.",
    "Context Engineering Studio that builds a semantic model and deploys it to Cortex Analyst or Genie.",
    "Bulk metadata writes by spreadsheet, CSV and Python SDK."
   ],
   "gaps": [
    "Context Engineering Studio is not self-serve; access goes through the Atlan account team.",
    "Context agent templates are private preview.",
    "Agents never overwrite an existing description, including a crawled source comment.",
    "No built-in PII detector found; classification relies on playbooks or partner integrations."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Use Atlan as the metadata and context source and serve it to your own SQL agent over the Atlan MCP server. If you have studio access, build a context repository and deploy it to Cortex Analyst or Genie. Otherwise keep metrics and joins in a warehouse or semantic layer tool.",
   "snippet": {
    "lang": "other",
    "title": "",
    "code": "",
    "u": ""
   },
   "enrichHowTo": "Run the Description agent from Context Agents Studio on a collection of assets, then review the drafts. For scripted writes, build objects with updater() in pyatlan and send the list with client.asset.save in one call. Agents skip assets that already hold a description, so clear crawled source comments first if you want them replaced.",
   "bulkSnippet": {
    "lang": "python",
    "code": "from pyatlan.client.atlan import AtlanClient\nfrom pyatlan.model.assets import AtlasGlossaryTerm\nfrom pyatlan.model.enums import CertificateStatus\nclient = AtlanClient()\nterm_1 = AtlasGlossaryTerm.updater(qualified_name=\"z9mfCRg6tItxcEyaJRNB3@reqKq68ZTSzuf7ezoZoGS\", name=\"Example Term\", glossary_guid=\"37e50bf7-abcb-4509-8155-c4894c05c9b9\")\nterm_1.certificate_status = CertificateStatus.DEPRECATED\nresponse = client.asset.save([term_1])  # one call for the whole list",
    "u": "https://docs.atlan.com/product/capabilities/build-apps/sdks/python/how-tos/bulk-updates/update-multiple-assets"
   },
   "sources": [
    {
     "t": "Atlan MCP",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview"
    },
    {
     "t": "Atlan MCP tools",
     "u": "https://docs.atlan.com/llms/platform/atlan-mcp-overview/mcp-tools/llms.txt"
    },
    {
     "t": "Atlan MCP security",
     "u": "https://docs.atlan.com/llms/platform/atlan-mcp-overview/mcp-security/llms.txt"
    },
    {
     "t": "Atlan AI",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/concepts/what-is-atlan-ai"
    },
    {
     "t": "Understand context agents",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-agents-studio/concepts/agents"
    },
    {
     "t": "FAQ agent templates",
     "u": "https://docs.atlan.com/llms/platform/context-agents-studio/faq-agent-templates/llms.txt"
    },
    {
     "t": "What is Context Engineering Studio?",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/concepts/what-is-context-engineering-studio.md"
    },
    {
     "t": "What's in a context repository",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/concepts/whats-in-a-context-repository.md"
    },
    {
     "t": "Enable Context Engineering Studio",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/how-tos/get-started.md"
    },
    {
     "t": "Portability targets",
     "u": "https://docs.atlan.com/llms/platform/context-engineering-studio/portability-targets/llms.txt"
    },
    {
     "t": "Product release stages",
     "u": "https://docs.atlan.com/llms/platform/get-started/product-release-stages/llms.txt"
    },
    {
     "t": "Example conversational AI prompts",
     "u": "https://docs.atlan.com/llms/platform/conversational-ai/use-conversational-ai/llms.txt"
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
     "t": "Playbooks",
     "u": "https://docs.atlan.com/llms/governance/playbooks/llms.txt"
    },
    {
     "t": "Context Engineering Studio product page",
     "u": "https://atlan.com/context-engineering-studio/"
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
   "tagline": "Data governance catalog with AI descriptions, classification, lineage and an MCP server.",
   "verdict": "partial",
   "verdictNote": "Collibra offers glossary, measure and attribute assets, lineage, classification and an MCP server, but no queryable metric or join objects and no SQL generation; its assistant is moving to Maestro in preview.",
   "artifacts": [
    {
     "name": "Collibra MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Product page calls it production-ready; 25+ tools; local open-source version is community supported",
     "url": "https://www.collibra.com/products/mcp-server"
    },
    {
     "name": "Collibra AI for asset descriptions",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "UI; cloud only; suggestions need review; metered in Collibra Units",
     "url": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/ta_auto-desc.htm"
    },
    {
     "name": "Collibra AI Copilot",
     "kind": "agent",
     "status": "Deprecated",
     "since": "",
     "format": "Docs title says Deprecated; upgraded to Maestro with the 2026.10 release",
     "url": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/co_cai-co-pilot.htm"
    },
    {
     "name": "Collibra Maestro (Studio and Assistant)",
     "kind": "agent",
     "status": "Preview",
     "since": "",
     "format": "Cloud only; custom agents with search and action tools; metered in Collibra Units",
     "url": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/maestro/co_maestro.htm"
    },
    {
     "name": "Unified Data Classification",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "UI and REST APIs; assigns data classes to Column assets",
     "url": "https://productresources.collibra.com/docs/collibra/latest/Content/Catalog/DataClassification/co_about-data-classification.htm"
    },
    {
     "name": "Collibra Data Lineage",
     "kind": "graph-query",
     "status": "GA",
     "since": "",
     "format": "Cloud only; technical and business lineage",
     "url": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraDataLineage/co_collibra-data-lineage.htm"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Measure assets link to columns, and MCP tools trace a measure to its tables. Catalog objects, not query definitions.",
     "u": "https://marketplace.collibra.com/listings/collibra-mcp-server-local-version/"
    },
    "dimensions": {
     "l": 0,
     "n": "Data attribute assets exist. No dimension or time-grain objects found.",
     "u": "https://marketplace.collibra.com/listings/collibra-mcp-server-local-version/"
    },
    "relationships": {
     "l": 1,
     "n": "Asset relations and lineage link assets. No declared join paths for AI found.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraDataLineage/co_collibra-data-lineage.htm"
    },
    "synonyms": {
     "l": 3,
     "n": "Business terms, definitions and asset descriptions are returned by MCP read tools such as get_table_semantics.",
     "u": "https://marketplace.collibra.com/listings/collibra-mcp-server-local-version/"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question and SQL pair feature found in the docs reviewed.",
     "u": ""
    },
    "nl2sql": {
     "l": 0,
     "n": "Copilot and Maestro find data and answer questions. SQL generation is not described.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/maestro/co_maestro.htm"
    },
    "ontology": {
     "l": 0,
     "n": "Business glossary and asset types only. No ontology model found.",
     "u": ""
    },
    "graph": {
     "l": 0,
     "n": "Knowledge Graph API is GraphQL over assets, not a graph query language.",
     "u": "https://developer.collibra.com/llms.txt"
    },
    "vector": {
     "l": 0,
     "n": "No vector search feature found in the docs reviewed.",
     "u": ""
    },
    "mcp": {
     "l": 3,
     "n": "Production-ready MCP server with 25+ tools for search, lineage, classification and asset edits. Some tools use Collibra Units.",
     "u": "https://www.collibra.com/products/mcp-server"
    },
    "governance": {
     "l": 3,
     "n": "Data classification, lineage and role-based permissions apply to catalog assets and MCP writes.",
     "u": "https://www.collibra.com/products/mcp-server"
    },
    "openStandard": {
     "l": 2,
     "n": "MCP write tool can push data contract manifests in Open Data Contract Standard format (Data Contracts private preview). No semantic spec.",
     "u": "https://marketplace.collibra.com/listings/collibra-mcp-server-local-version/"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Drafts descriptions for Column, Table, Database View and Data Set assets; a Table can draft all its columns. Existing descriptions are kept.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/ta_auto-desc.htm"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "Import API v2 takes JSON, CSV and Excel jobs for assets, attributes and relations.",
     "u": "https://developer.collibra.com/api/guides/import-api.md"
    },
    "autoClassify": {
     "l": 3,
     "n": "Unified Data Classification assigns data classes to columns. Guided Stewardship links columns to data categories such as PII.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/Catalog/DataClassification/co_about-data-classification.htm"
    },
    "sampleValues": {
     "l": 1,
     "n": "Sample data is shown to permitted users on asset pages. No NL-to-SQL value matching found.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/Catalog/SampleData/co_sample-data.htm"
    },
    "queryHistory": {
     "l": 0,
     "n": "No query-history mining for join or metric suggestions found in the docs reviewed.",
     "u": ""
    },
    "lineage": {
     "l": 3,
     "n": "Cloud-only Collibra Data Lineage shows technical lineage down to column assets, plus business lineage.",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraDataLineage/co_collibra-data-lineage.htm"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found in the docs reviewed.",
     "u": ""
    }
   },
   "offers": [
    "AI-drafted descriptions for tables and all their columns, with review before saving.",
    "Glossary, measure and attribute assets served over an MCP server.",
    "Data classification of columns with data classes.",
    "Import API v2 for bulk asset edits by JSON, CSV or Excel.",
    "Technical and business lineage with column assets."
   ],
   "gaps": [
    "No queryable metric, dimension or join objects.",
    "Copilot is deprecated and its replacement, Maestro, is in preview and cloud only.",
    "AI descriptions are suggestions; an existing description must be removed first.",
    "No SQL generation, query-history mining or eval tooling found."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Treat Collibra as the governed glossary and lineage source and feed it to your SQL agent through the Collibra MCP server. Keep metrics and joins in a separate semantic layer. Use Maestro agents only after checking the preview limits.",
   "snippet": {
    "lang": "other",
    "title": "Import API v2 job endpoints",
    "code": "POST /import/json-job\nPOST /import/csv-job\nPOST /import/excel-job\n# send either fileId (a file uploaded earlier) or file\n# CSV and Excel also need a JSON template",
    "u": "https://developer.collibra.com/api/guides/import-api.md"
   },
   "enrichHowTo": "Open a Table asset and use Collibra AI to draft all column descriptions, then accept each one. For bulk writes, send a JSON, CSV or Excel job to the Import API v2 (/import/json-job). Existing descriptions are not replaced by AI, so remove them first if you want new drafts.",
   "bulkSnippet": {
    "lang": "json",
    "code": "[{\n  \"resourceType\": \"Asset\",\n  \"identifier\": {\"name\": \"Asset 1\", \"domain\": {\"name\": \"Business Data Domain 1\", \"community\": {\"name\": \"Data Community\"}}},\n  \"attributes\": {\"<attributeTypeId>\": [{\"value\": \"New description text\"}]}\n}]\n// POST to /import/json-job; replace <attributeTypeId> with your Description attribute type name or id",
    "u": "https://developer.collibra.com/api/guides/import-api/import-commands/importing-assets.md"
   },
   "sources": [
    {
     "t": "Collibra MCP server",
     "u": "https://www.collibra.com/products/mcp-server"
    },
    {
     "t": "Collibra MCP Server local version (Marketplace)",
     "u": "https://marketplace.collibra.com/listings/collibra-mcp-server-local-version/"
    },
    {
     "t": "Create a description with Collibra AI",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/ta_auto-desc.htm"
    },
    {
     "t": "About Collibra AI Copilot (Deprecated)",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/co_cai-co-pilot.htm"
    },
    {
     "t": "About Collibra Maestro (in preview)",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/maestro/co_maestro.htm"
    },
    {
     "t": "About Data Classification",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/Catalog/DataClassification/co_about-data-classification.htm"
    },
    {
     "t": "About sample data",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/Catalog/SampleData/co_sample-data.htm"
    },
    {
     "t": "About Collibra Data Lineage",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraDataLineage/co_collibra-data-lineage.htm"
    },
    {
     "t": "Working with the Import API v2",
     "u": "https://developer.collibra.com/api/guides/import-api.md"
    },
    {
     "t": "Importing assets",
     "u": "https://developer.collibra.com/api/guides/import-api/import-commands/importing-assets.md"
    },
    {
     "t": "Collibra developer portal index",
     "u": "https://developer.collibra.com/llms.txt"
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
   "verdictNote": "DataHub gives an open MCP server, an open-source analytics agent, lineage and query context, but no metric or join authoring; Ask DataHub and AI documentation are Cloud only.",
   "artifacts": [
    {
     "name": "DataHub MCP server (open source)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Self-hosted; read tools plus opt-in mutation tools (TOOLS_IS_MUTATION_ENABLED); no maturity label in the README",
     "url": "https://raw.githubusercontent.com/acryldata/mcp-server-datahub/main/README.md"
    },
    {
     "name": "Managed MCP server (DataHub Cloud)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Cloud v0.3.12 or later; OAuth with dynamic client registration from v1.0.2; scoped custom servers are private beta",
     "url": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    {
     "name": "Ask DataHub",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "DataHub Cloud only; chat in UI, Slack and Teams; drafts SQL. Feature page says Public Beta, v2.2.0 notes say GA",
     "url": "https://docs.datahub.com/docs/features/feature-guides/ask-datahub"
    },
    {
     "name": "Analytics Agent",
     "kind": "nl2sql",
     "status": "Unverified",
     "since": "2026-04",
     "format": "Open source, Apache 2.0, bring your own LLM; question to SQL, results and chart grounded in the catalog; no maturity label in docs",
     "url": "https://docs.datahub.com/docs/features/feature-guides/analytics-agent"
    },
    {
     "name": "AI documentation generation",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "DataHub Cloud; GA as of Cloud v0.3.17 per current docs and the 1.6.0 archive; custom instructions since v0.3.15",
     "url": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    {
     "name": "Context documents and Context Generation",
     "kind": "glossary",
     "status": "Unverified",
     "since": "",
     "format": "Context documents for Ask DataHub; Context Generation from query history and BI is DataHub Cloud",
     "url": "https://docs.datahub.com/docs/features/feature-guides/context/context-documents"
    },
    {
     "name": "Classification at ingestion",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "Open source; opt-in per source recipe; predicts info types and applies glossary terms",
     "url": "https://docs.datahub.com/docs/metadata-ingestion/docs/dev_guides/classification"
    }
   ],
   "caps": {
    "metrics": {
     "l": 1,
     "n": "Semantic Model and metric entities can be ingested, for example from Snowflake semantic views, with metric lineage. DataHub does not author metrics.",
     "u": "https://docs.datahub.com/docs/managed-datahub/release-notes/v_2_2_0"
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects found in the docs reviewed.",
     "u": ""
    },
    "relationships": {
     "l": 1,
     "n": "Lineage and entity relationships exist. v2.2 adds relationship APIs. No declared join paths for AI found.",
     "u": "https://docs.datahub.com/docs/managed-datahub/release-notes/v_2_2_0"
    },
    "synonyms": {
     "l": 3,
     "n": "Descriptions, glossary terms, domains and structured properties are returned by MCP tools. Glossary terms can link related terms.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    "verifiedQueries": {
     "l": 1,
     "n": "MCP get_dataset_queries and find_sql_context return real queries as context. No curated question and SQL pairs.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    "nl2sql": {
     "l": 3,
     "n": "Ask DataHub drafts SQL on Cloud. The open-source Analytics Agent turns questions into SQL grounded in the catalog.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/analytics-agent"
    },
    "ontology": {
     "l": 2,
     "n": "Ontology Explorer shows how glossary terms relate, with custom relationships. Custom relationships and SPARQL are private beta.",
     "u": "https://docs.datahub.com/docs/managed-datahub/release-notes/v_2_2_0"
    },
    "graph": {
     "l": 2,
     "n": "Cloud v2.2 adds relationship traversal and SPARQL endpoints. The SPARQL engine is private beta.",
     "u": "https://docs.datahub.com/docs/managed-datahub/release-notes/v_2_2_0"
    },
    "vector": {
     "l": 3,
     "n": "Opt-in semantic search embeds documents via a configured embedding provider on OpenSearch or Elasticsearch. Documents are the default vectorized type.",
     "u": "https://docs.datahub.com/docs/how/updating-datahub"
    },
    "mcp": {
     "l": 3,
     "n": "Open-source server for Core and managed server on Cloud. Writes need TOOLS_IS_MUTATION_ENABLED=true.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    "governance": {
     "l": 3,
     "n": "Tags, terms, owners, domains and lineage are metadata aspects. MCP can submit proposals for review instead of writing directly.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    "openStandard": {
     "l": 3,
     "n": "DataHub Core and the MCP server are open source under Apache 2.0.",
     "u": "https://raw.githubusercontent.com/acryldata/mcp-server-datahub/main/README.md"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Cloud Generate button uses name, columns, sample values and lineage. GA as of Cloud v0.3.17. Tables over 3000 columns are skipped.",
     "u": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "MCP tools add tags, terms, owners and descriptions in bulk; Python SDK and GraphQL write descriptions. Limits not documented.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    "autoClassify": {
     "l": 3,
     "n": "Opt-in classification at ingestion predicts info types and applies them as glossary terms. Open source.",
     "u": "https://docs.datahub.com/docs/metadata-ingestion/docs/dev_guides/classification"
    },
    "sampleValues": {
     "l": 1,
     "n": "AI documentation reads column sample values. Use for NL-to-SQL value matching is not documented.",
     "u": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    "queryHistory": {
     "l": 3,
     "n": "get_dataset_queries returns real SQL per dataset or column. Cloud Context Generation writes documents from query history.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/context/context-documents"
    },
    "lineage": {
     "l": 3,
     "n": "Lineage with column-level paths in the UI; Python SDK and GraphQL add and read column lineage.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/lineage"
    },
    "evals": {
     "l": 1,
     "n": "Analytics Agent shows a context quality score per answer and /improve-context suggests doc fixes. No eval set tooling found.",
     "u": "https://docs.datahub.com/docs/features/feature-guides/analytics-agent"
    }
   },
   "offers": [
    "Open-source MCP server with search, lineage, dataset query and SQL drafting tools.",
    "Opt-in MCP write tools for descriptions, tags, terms, owners and proposals.",
    "Open-source Analytics Agent for question to SQL to chart, grounded in the catalog.",
    "Cloud AI documentation using lineage and sample values, with custom instructions.",
    "Classification at ingestion that proposes glossary terms.",
    "Ask DataHub chat over metadata and context documents (Cloud)."
   ],
   "gaps": [
    "No metric, dimension or join authoring; semantic models are ingested, not defined.",
    "Ask DataHub and AI documentation are Cloud only.",
    "Ask DataHub is labeled Public Beta on its feature page and GA in v2.2.0 notes.",
    "SPARQL, custom relationships and Agents are private beta in Cloud v2.2.",
    "No NL-to-SQL eval set tooling found."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Run the DataHub MCP server or the Analytics Agent next to your warehouse so the agent reads descriptions, lineage and past queries. Keep metrics and joins in a semantic layer. Use DataHub Cloud for Ask DataHub and AI documentation if you want hosted features.",
   "snippet": {
    "lang": "bash",
    "title": "Add the DataHub Cloud MCP server to Claude Code",
    "code": "claude mcp add --transport http datahub https://mcp.datahub.com/mcp\n# then run /mcp in Claude Code and choose Authenticate",
    "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
   },
   "enrichHowTo": "On Cloud, click Generate on a table or column, and add custom instructions under Settings > AI. For scripted writes, use the Python SDK set_description call, or enable the MCP mutation tools and call update_description. Review AI-generated text, which carries a sparkle icon until a person confirms it.",
   "bulkSnippet": {
    "lang": "python",
    "code": "from datahub.sdk import DataHubClient, DatasetUrn\nclient = DataHubClient.from_env()\ndataset = client.entities.get(DatasetUrn(platform=\"hive\", name=\"realestate_db.sales\"))\ndataset.set_description(\"## The Real Estate Sales Dataset\\nSales organized by address.\")\nclient.entities.update(dataset)",
    "u": "https://docs.datahub.com/docs/api/tutorials/descriptions"
   },
   "sources": [
    {
     "t": "DataHub MCP Server README",
     "u": "https://raw.githubusercontent.com/acryldata/mcp-server-datahub/main/README.md"
    },
    {
     "t": "DataHub MCP Server docs",
     "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    {
     "t": "AI documentation",
     "u": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    {
     "t": "AI documentation (1.6.0 archive)",
     "u": "https://archive.docs.datahub.com/docs/1.6.0/automations/ai-docs"
    },
    {
     "t": "Ask DataHub",
     "u": "https://docs.datahub.com/docs/features/feature-guides/ask-datahub"
    },
    {
     "t": "Analytics Agent",
     "u": "https://docs.datahub.com/docs/features/feature-guides/analytics-agent"
    },
    {
     "t": "Context documents",
     "u": "https://docs.datahub.com/docs/features/feature-guides/context/context-documents"
    },
    {
     "t": "DataHub Cloud v2.2.0 release notes",
     "u": "https://docs.datahub.com/docs/managed-datahub/release-notes/v_2_2_0"
    },
    {
     "t": "Classification",
     "u": "https://docs.datahub.com/docs/metadata-ingestion/docs/dev_guides/classification"
    },
    {
     "t": "Lineage feature guide",
     "u": "https://docs.datahub.com/docs/features/feature-guides/lineage"
    },
    {
     "t": "Descriptions API tutorial",
     "u": "https://docs.datahub.com/docs/api/tutorials/descriptions"
    },
    {
     "t": "DataHub docs index",
     "u": "https://docs.datahub.com/llms.txt"
    },
    {
     "t": "DataHub updating notes (semantic search and embeddings)",
     "u": "https://docs.datahub.com/docs/how/updating-datahub"
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
   "tagline": "Open-source metadata platform; Collate is the managed product with AI chat and automations.",
   "verdict": "partial",
   "verdictNote": "OpenMetadata has an MCP server with semantic search, a metric entity, lineage, auto classification and a beta RDF graph, but no dimension or join objects; description AI and chat are Collate only.",
   "artifacts": [
    {
     "name": "OpenMetadata MCP server",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "Installed and enabled by default; OAuth 2.0 or personal access token; read and write tools",
     "url": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp.md"
    },
    {
     "name": "Semantic search MCP tool",
     "kind": "vector",
     "status": "GA",
     "since": "",
     "format": "Needs OpenSearch or Elasticsearch with semantic search enabled and an embedding provider",
     "url": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp/semantic-search.md"
    },
    {
     "name": "AI SDK (Python, TypeScript, Java)",
     "kind": "mcp",
     "status": "GA",
     "since": "",
     "format": "SDK wrapping the MCP tools; Collate adds AI Studio agents",
     "url": "https://docs.open-metadata.org/v1.13.x/api-reference/sdk/ai-sdk"
    },
    {
     "name": "Metrics",
     "kind": "semantic-model",
     "status": "GA",
     "since": "",
     "format": "Metric entity with expression, granularity, type and unit; shown in lineage",
     "url": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/metrics.md"
    },
    {
     "name": "Ontology Explorer and OWL/SKOS import",
     "kind": "ontology",
     "status": "Preview",
     "since": "",
     "format": "Docs label Ontology Explorer Beta; imports OWL or SKOS ontologies into a glossary",
     "url": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/ontology/index.md"
    },
    {
     "name": "RDF Knowledge Graph (SPARQL)",
     "kind": "graph-query",
     "status": "Preview",
     "since": "",
     "format": "Beta in deployment docs; needs Apache Jena Fuseki",
     "url": "https://docs.open-metadata.org/v2.0.x/deployment/rdf-knowledge-graph.md"
    },
    {
     "name": "Collate AI Chat",
     "kind": "nl2sql",
     "status": "GA",
     "since": "",
     "format": "Collate only; runs read-only SQL on connected sources and answers with charts",
     "url": "https://docs.getcollate.io/ai-2-0/collate-ai/collate-ai-chat.md"
    },
    {
     "name": "Collate AI Automations (Documentation, Quality, Governance templates)",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "Collate 2.0; replaced the Documentation, Tier and Quality agent apps",
     "url": "https://docs.getcollate.io/ai-2-0/collate-ai/ai-automations.md"
    },
    {
     "name": "Collate AI Studio",
     "kind": "agent",
     "status": "GA",
     "since": "",
     "format": "Collate only; agents, workers, plugins and skills",
     "url": "https://docs.getcollate.io/ai-2-0/collate-ai/ai-studio/index.md"
    },
    {
     "name": "Auto Classification agent",
     "kind": "annotations",
     "status": "GA",
     "since": "",
     "format": "Open source and Collate; column name rules plus optional sample-data recognition",
     "url": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/classification/auto-classification.md"
    }
   ],
   "caps": {
    "metrics": {
     "l": 3,
     "n": "Metric entity stores expression, granularity, type and unit, with lineage. It is a catalog object, not a query engine.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/metrics.md"
    },
    "dimensions": {
     "l": 0,
     "n": "No dimension or time-grain objects found in the docs reviewed.",
     "u": ""
    },
    "relationships": {
     "l": 1,
     "n": "Lineage and entity links exist. No declared join paths for AI found.",
     "u": "https://docs.open-metadata.org/v2.0.x/developers/contribute/codebase-deep-dives/lineage-ingestion.md"
    },
    "synonyms": {
     "l": 3,
     "n": "Glossary terms carry definitions and synonyms. MCP search and entity tools return descriptions, tags and terms.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/glossary/import.md"
    },
    "verifiedQueries": {
     "l": 0,
     "n": "No verified question and SQL pair feature found in the docs reviewed.",
     "u": ""
    },
    "nl2sql": {
     "l": 3,
     "n": "Collate AI Chat runs read-only SQL on connected sources, grounded in the knowledge graph. Collate only.",
     "u": "https://docs.getcollate.io/ai-2-0/collate-ai/collate-ai-chat.md"
    },
    "ontology": {
     "l": 2,
     "n": "Ontology Explorer is Beta and OWL or SKOS ontologies import into glossaries.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/ontology/index.md"
    },
    "graph": {
     "l": 2,
     "n": "Beta RDF knowledge graph with a SPARQL endpoint, backed by Apache Jena Fuseki.",
     "u": "https://docs.getcollate.io/ai-2-0/admin-guide/applications/rdf-indexing-overview.md"
    },
    "vector": {
     "l": 3,
     "n": "Semantic search tool uses embeddings and kNN search. Needs OpenSearch or Elasticsearch and an embedding provider.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp/semantic-search.md"
    },
    "mcp": {
     "l": 3,
     "n": "Built-in MCP server with read and write tools, installed by default. Collate announced MCP in July 2025.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp.md"
    },
    "governance": {
     "l": 3,
     "n": "Tags, owners, glossary, classification and lineage are entities. MCP uses OAuth 2.0 with your existing SSO.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp.md"
    },
    "openStandard": {
     "l": 3,
     "n": "Open source. OpenMetadata Standards publish JSON Schemas and RDF/OWL models.",
     "u": "https://docs.open-metadata.org/v2.0.x/api-reference/sdk/openmetadata-standards.md"
    },
    "aiDescriptions": {
     "l": 3,
     "n": "Collate AI Automations documentation template drafts or writes descriptions. No open-source equivalent found.",
     "u": "https://docs.getcollate.io/ai-2-0/collate-ai/ai-automations.md"
    },
    "bulkMetadata": {
     "l": 3,
     "n": "MCP patch_entity; CSV import for databases, schemas and tables; glossary CSV import; Column Bulk Operations across same-named columns.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/column-bulk-operations.md"
    },
    "autoClassify": {
     "l": 3,
     "n": "Auto classification uses column-name rules and optional sample-data recognition. Confidence threshold defaults to 80.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/classification/auto-classification.md"
    },
    "sampleValues": {
     "l": 1,
     "n": "Sample data feeds classification. No NL-to-SQL value matching found.",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/classification/auto-classification.md"
    },
    "queryHistory": {
     "l": 1,
     "n": "Query logs feed lineage and usage counts. No join or metric suggestions found.",
     "u": "https://docs.open-metadata.org/v2.0.x/developers/contribute/codebase-deep-dives/usage-ingestion.md"
    },
    "lineage": {
     "l": 3,
     "n": "Column-level lineage from query logs, view definitions and stored procedures.",
     "u": "https://docs.open-metadata.org/v2.0.x/developers/contribute/codebase-deep-dives/lineage-ingestion.md"
    },
    "evals": {
     "l": 0,
     "n": "No NL-to-SQL eval tooling found in OpenMetadata or Collate docs indexes.",
     "u": ""
    }
   },
   "offers": [
    "MCP server with search, semantic search, entity details, lineage and patch tools.",
    "Metric entity with expression and lineage, and glossary terms with synonyms.",
    "Collate AI Chat for question to SQL to chart, and AI Automations for descriptions.",
    "Auto classification of PII with a confidence threshold.",
    "Column-level lineage from query logs.",
    "CSV bulk import and Column Bulk Operations."
   ],
   "gaps": [
    "No dimension, join or verified query objects.",
    "AI chat, description automations and AI Studio are Collate only.",
    "Ontology Explorer and the RDF knowledge graph are Beta.",
    "MCP write tools can change metadata; limit agents to read tools.",
    "No NL-to-SQL eval tooling found."
   ],
   "fillWith": [
    "dbt Semantic Layer",
    "Cube",
    "Snowflake Semantic Views",
    "Databricks Metric Views"
   ],
   "nl2sqlPath": "Connect your SQL agent to the OpenMetadata MCP server for descriptions, glossary, metrics and lineage, and turn on semantic search if you need concept lookup. Use tool filtering to keep the agent read-only. Keep dimensions and joins in a semantic layer, or use Collate AI Chat for hosted question answering.",
   "snippet": {
    "lang": "json",
    "title": "MCP search_metadata call (semantic search)",
    "code": "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/call\",\"params\":{\"name\":\"search_metadata\",\"arguments\":{\"query\":\"customer purchase behavior and transaction history\",\"entity_type\":\"table\"}}}",
    "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp/semantic-search.md"
   },
   "enrichHowTo": "On Collate, create an AI Automation from the Documentation template and review the output. On open source, call the MCP patch_entity tool with a JSON Patch, or use CSV import for tables and Column Bulk Operations for repeated column names. Glossary terms load by CSV import.",
   "bulkSnippet": {
    "lang": "json",
    "code": "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/call\",\"params\":{\"name\":\"patch_entity\",\"arguments\":{\"entityType\":\"table\",\"fqn\":\"mysql_prod.ecommerce.public.customer_orders\",\"patch\":\"[{\\\"op\\\":\\\"replace\\\",\\\"path\\\":\\\"/description\\\",\\\"value\\\":\\\"Updated description for customer orders table.\\\"}]\"}}}",
    "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp/reference.md"
   },
   "sources": [
    {
     "t": "MCP Server",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp.md"
    },
    {
     "t": "MCP Tools Reference",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp/reference.md"
    },
    {
     "t": "Semantic Search MCP Tool",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp/semantic-search.md"
    },
    {
     "t": "AI SDK",
     "u": "https://docs.open-metadata.org/v1.13.x/api-reference/sdk/ai-sdk"
    },
    {
     "t": "Metrics",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/metrics.md"
    },
    {
     "t": "Column Bulk Operations",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/column-bulk-operations.md"
    },
    {
     "t": "Bulk Upload Data Assets with CSV",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-discovery/bulk-upload.md"
    },
    {
     "t": "Glossary import",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/glossary/import.md"
    },
    {
     "t": "Auto-Classification",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/classification/auto-classification.md"
    },
    {
     "t": "Ontology Explorer",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/data-governance/ontology/index.md"
    },
    {
     "t": "OpenMetadata Standards",
     "u": "https://docs.open-metadata.org/v2.0.x/api-reference/sdk/openmetadata-standards.md"
    },
    {
     "t": "Lineage ingestion",
     "u": "https://docs.open-metadata.org/v2.0.x/developers/contribute/codebase-deep-dives/lineage-ingestion.md"
    },
    {
     "t": "Usage ingestion",
     "u": "https://docs.open-metadata.org/v2.0.x/developers/contribute/codebase-deep-dives/usage-ingestion.md"
    },
    {
     "t": "OpenMetadata v2.0.x documentation index",
     "u": "https://docs.open-metadata.org/_llms/v2-0-x.txt"
    },
    {
     "t": "Enable RDF Knowledge Graph (deployment docs index)",
     "u": "https://docs.open-metadata.org/_llms/v2-0-x/deployment.txt"
    },
    {
     "t": "Collate AI Chat",
     "u": "https://docs.getcollate.io/ai-2-0/collate-ai/collate-ai-chat.md"
    },
    {
     "t": "Collate AI Automations",
     "u": "https://docs.getcollate.io/ai-2-0/collate-ai/ai-automations.md"
    },
    {
     "t": "Collate AI Studio",
     "u": "https://docs.getcollate.io/ai-2-0/collate-ai/ai-studio/index.md"
    },
    {
     "t": "Collate RDF Knowledge Graph Indexing",
     "u": "https://docs.getcollate.io/ai-2-0/admin-guide/applications/rdf-indexing-overview.md"
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
   "topic": "SAP BusinessObjects roadmap",
   "text": "SAP's May 2024 statement of direction says BI 2025 does not deliver Universe Design Tool, .unv universes or multi-source universes, and planned BI 2027 for Q4 2026. Wiiisdom (Feb 2026) says BI 4.3 mainstream maintenance ends in 2026, followed by Customer Specific Maintenance with security fixes in the first 12 months. The status of BI 2027 is not confirmed.",
   "sources": [
    {
     "t": "SAP statement of direction, May 2024",
     "u": "https://nbs-us.com/hubfs/SAP%20Analytics%20Business%20Intelligence%20Statement%20of%20Direction.pdf"
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
   "text": "SAP's 2021 addendum tied the end of .unv and Universe Design Tool support to the end of BI 4.3 maintenance, end of 2027. SAP's 2024 direction says .unx universes cover all .unv use cases and that SAP tools support migration to .unx. Wiiisdom says .unv is not supported after BI 4.3.",
   "sources": [
    {
     "t": "SAP 2021 addendum",
     "u": "https://www.axians.nl/app/uploads/sites/71/2021/12/SAP-BusinessObjects-Addendum-to-BI-SoD_June-2021.pdf"
    },
    {
     "t": "SAP statement of direction, May 2024",
     "u": "https://nbs-us.com/hubfs/SAP%20Analytics%20Business%20Intelligence%20Statement%20of%20Direction.pdf"
    },
    {
     "t": "Wiiisdom",
     "u": "https://wiiisdom.com/blog/sap-businessobjects-bi-2025/"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "BusinessObjects data platforms",
   "text": "The list shown comes from the connections named in SAP's Information Design Tool guide. SAP's full list is in its Product Availability Matrix, which needs an SAP login.",
   "sources": [
    {
     "t": "Information Design Tool User Guide",
     "u": "https://help.sap.com/doc/4667b9486e041014910aba7db0e91070/4.3.4/en-US/sbo43sp2_info_design_tool_en.pdf"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Cognos latest release",
   "text": "IBM's product page calls 12.1.3 the latest release and says reporting agents and conversational data interaction arrive with it. GenAI agents were Preview in 12.1.1 (Oct 2025). IBM docs pages were not readable, so several data module details rely on IBM Community posts.",
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
   "text": "No IBM MCP server exists. A third-party Activepieces MCP server (updated Sep 2026) exposes data source and content object actions, and an IBM Ideas request from Jun 2026 asks for an official server.",
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
   "topic": "Cognos data platforms",
   "text": "IBM publishes its supported data source list as compatibility reports. The list shown is limited to the SAP BW/4HANA and Microsoft Fabric connectors named in the 12.1.1 release post. IBM also documents a Snowflake data source setup.",
   "sources": [
    {
     "t": "Cognos 12.1.1 (IBM Community)",
     "u": "https://community.ibm.com:443/community/user/blogs/shaveta-srivastava/2025/10/30/cognos-1211-smarter-reporting-faster-dashboards-an?hlmlt=VT"
    },
    {
     "t": "Snowflake setup (IBM Support)",
     "u": "https://www.ibm.com/support/pages/node/6326069"
    },
    {
     "t": "Supported environments (IBM Support)",
     "u": "https://www.ibm.com/support/pages/node/737555"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Strategy rename and Mosaic timeline",
   "text": "MicroStrategy is now Strategy. Mosaic went GA Jun 24, 2025. Mosaic in the MCP server shipped out of the box on Mar 20, 2026, replacing a Feb 2026 preview, and the MCP server itself is enabled once per environment by an admin. From Sep 2026 separate privileges control the Agent and Mosaic MCP servers, and Use Mosaic MCP Server is off by default after an upgrade.",
   "sources": [
    {
     "t": "MCP server (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/NextGenAI/en-us/Content/agent_mcpserverintegration.htm"
    },
    {
     "t": "Mosaic MCP release note",
     "u": "https://employee.microstrategy.com/whats-new/direct-mosaic-model-access-via-mcp"
    },
    {
     "t": "Mosaic GA",
     "u": "https://www.strategy.com/press/strategy-announces-general-availability-of-strategy-mosaic-the-ai-powered-universal-intelligence-layer_06-24-2025"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Strategy Ossie import and export",
   "text": "Import and export of Apache Ossie YAML was a Preview in Strategy One June 2026 and is available out of the box from the July 2026 release (release note dated Jul 17, 2026). Limits: only ANSI SQL expressions import, relationships import as one-to-many, and time granularity is lost on a round trip. October 2026 converts unknown database functions to pass-through expressions.",
   "sources": [
    {
     "t": "Ossie import and export (product help)",
     "u": "https://www2.strategy.com/producthelp/Current/Mosaic/en-us/Content/mosaic_osi_import.htm"
    },
    {
     "t": "Release note",
     "u": "https://employee.microstrategy.com/whats-new/import-and-export-mosaic-models-as-apache-ossie-yaml"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Open Semantic Interchange rename",
   "text": "OSI is now Apache Ossie (Incubating). The Ossie ecosystem page describes Strategy's Mosaic import and export, and also lists Qlik and Oracle among participants. No Qlik or Oracle export was found in their docs.",
   "sources": [
    {
     "t": "Apache Ossie ecosystem",
     "u": "https://ossie.apache.org/ecosystem/"
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
   "text": "Qlik announced GA of its agentic experience, Qlik Answers and the MCP server in Feb 2026. Discovery Agent and Data Products for Analytics were to follow. Fast Mode for Qlik Answers on structured data went live Jun 7, 2026. Qlik MCP tools now include lineage, glossary, data product and master item tools.",
   "sources": [
    {
     "t": "Qlik press release",
     "u": "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-brings-agentic-analytics-to-general-availability-and-launches-mcp-server-for-third-party-assistants"
    },
    {
     "t": "Fast Mode",
     "u": "https://community.qlik.com/t5/Support-Updates/Introducing-Fast-Mode-A-New-Gear-for-Qlik-Answers/ba-p/2552881"
    },
    {
     "t": "Qlik MCP tools",
     "u": "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikMCP/Qlik-MCP-server-tools.htm"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Oracle MCP stage and tool names",
   "text": "Oracle's Sep 2026 developer guide still labels the OAC MCP server Preview. It first appeared in the Nov 2025 update. Tool names changed: oracle_analytics-discover_data is deprecated in favor of search_catalog, and ANSI SQL execution was added.",
   "sources": [
    {
     "t": "MCP tools (Preview)",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/access-oracle-analytics-cloud-mcp-server-preview.html"
    },
    {
     "t": "Deprecated tools",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsdv/deprecated-mcp-server-tools-preview.html"
    },
    {
     "t": "What's New",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acswn/index.html"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Oracle Analytic Views in Semantic Modeler",
   "text": "The Jan 2026 update added Analytic Views to Semantic Modeler, and the supported data source table now lists Oracle Analytic Views as supported in both Semantic Modeler and the Model Administration Tool.",
   "sources": [
    {
     "t": "What's New",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acswn/index.html"
    },
    {
     "t": "Data sources supported",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acmdg/data-sources-supported-semantic-models.html"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Oracle AI Assistant and AI Descriptions",
   "text": "The AI Assistant docs carry no preview label. AI Descriptions for datasets and subject area columns appear in the Sep 2026 What's New. Oracle's docs list Databricks as a remote data source through Data Gateway but not in the Semantic Modeler table.",
   "sources": [
    {
     "t": "About Oracle Analytics AI Assistant",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/oracle-analytics-ai-assistant.html"
    },
    {
     "t": "What's New",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acswn/index.html"
    }
   ],
   "from": "bi-enterprise.json"
  },
  {
   "topic": "Product renames",
   "text": "ThoughtSpot Worksheets were deprecated in Nov 2024 and replaced by Models. Sage and Ask Sage were removed in Dec 2025 and replaced by Spotter. Sigma's Ask Sigma is now Sigma Assistant.",
   "sources": [
    {
     "t": "Deprecation announcements",
     "u": "https://developers.thoughtspot.com/docs/deprecated-features"
    },
    {
     "t": "Ask natural language queries with Sigma Assistant",
     "u": "https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant.md"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Tableau MCP stage",
   "text": "Tableau's April 2026 notes say Tableau Next MCP is generally available with Tableau Next. Q&A Calibration and Data Pro auto-generated semantic models are Beta in the same notes. The open-source Tableau MCP is a separate project.",
   "sources": [
    {
     "t": "Tableau April 2026 New Features",
     "u": "https://www.tableau.com/2026-1-april-features"
    },
    {
     "t": "Tableau MCP README",
     "u": "https://raw.githubusercontent.com/tableau/tableau-mcp/main/README.md"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "ThoughtSpot MCP May 2026 release",
   "text": "The 2026-05-01 MCP version moved the main URL to Spotter 3 tools and replaced the legacy tools, which is a breaking change. Pin an earlier api-version date to keep old tools. August 2026 added search_objects.",
   "sources": [
    {
     "t": "ThoughtSpot Spotter MCP Server changelog",
     "u": "https://developers.thoughtspot.com/docs/mcp-server-changelog"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "ThoughtSpot AI synonyms removed",
   "text": "Generate AI Synonyms at the model level was removed in 26.6.0.cl. Synonyms already generated stay in place. Spotter Model (Early Access) is the named replacement.",
   "sources": [
    {
     "t": "Deprecated and removed features (26.9.0.cl)",
     "u": "https://docs.thoughtspot.com/cloud/26.9.0.cl/deprecation"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "ThoughtSpot Spotter Semantics",
   "text": "Announced Mar 12, 2026. Product docs describe it as the governed semantic foundation built on Models and AI context. The metrics catalog from the press release is not described in the docs.",
   "sources": [
    {
     "t": "Semantic layer docs",
     "u": "https://docs.thoughtspot.com/cloud/26.6.0.cl/semantic-layer"
    },
    {
     "t": "Spotter Semantics press release",
     "u": "https://www.thoughtspot.com/press-releases/thoughtspot-introduces-spotter-semantics-to-bring-trust-and-context-to-enterprise-ai"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Domo semantic and MCP status",
   "text": "Domo's Sep 2026 notes list Data Modeling Builder integration, Semantic View Integration, and new MCP toolkits under Beta Features. The May 2026 notes list Domo Essentials MCP and the AI Library as Beta. Domo's Beta Features page dates from March 2025 and does not list a semantic layer.",
   "sources": [
    {
     "t": "September 2026 Release Notes",
     "u": "https://www.domo.com/docs/s/article/Current-Release-Notes"
    },
    {
     "t": "2026 Release 3 (May)",
     "u": "https://www.domo.com/docs/s/article/May-2026-Release.md"
    },
    {
     "t": "Domo AI - Beta Features",
     "u": "https://www.domo.com/product/new-features/domo-ai-beta-features"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "Metabase MCP and Metabot",
   "text": "The official MCP server arrived in Metabase 60 (Apr 16, 2026) and was improved in Metabase 64 (Oct 2026). The client supplies the model, so no Metabase AI provider is needed for MCP.",
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
   "topic": "Superset SEMANTIC_LAYERS flag",
   "text": "SEMANTIC_LAYERS defaults to False and is listed in the Development stage of the feature flag docs, in both the current and 6.1.0 pages. The docs read do not name a release that makes it stable.",
   "sources": [
    {
     "t": "Feature Flags - Apache Superset",
     "u": "https://superset.apache.org/admin-docs/configuration/feature-flags/"
    },
    {
     "t": "Feature Flags (6.1.0)",
     "u": "https://superset.apache.org/admin-docs/6.1.0/configuration/feature-flags/"
    }
   ],
   "from": "bi-modern.json"
  },
  {
   "topic": "DataHub AI documentation status",
   "text": "Current docs and the 1.6.0 archive both say AI documentation is GA as of Cloud v0.3.17. The closed beta wording now appears only in the 1.5.0 archive for glossary term suggestion, which is gone from current docs.",
   "sources": [
    {
     "t": "AI documentation",
     "u": "https://docs.datahub.com/docs/automations/ai-docs"
    },
    {
     "t": "AI documentation 1.6.0",
     "u": "https://archive.docs.datahub.com/docs/1.6.0/automations/ai-docs"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "DataHub Ask DataHub status",
   "text": "The Ask DataHub feature page says Public Beta in the UI. Cloud v2.2.0 release notes say Ask DataHub is GA and remove the beta label setting. The page is listed as GA here.",
   "sources": [
    {
     "t": "Ask DataHub",
     "u": "https://docs.datahub.com/docs/features/feature-guides/ask-datahub"
    },
    {
     "t": "DataHub Cloud v2.2.0",
     "u": "https://docs.datahub.com/docs/managed-datahub/release-notes/v_2_2_0"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "Atlan Context Engineering Studio stage",
   "text": "Current docs no longer show a Private Preview label. They say the studio is not self-serve and is enabled from Labs through the Atlan account team. Context agent templates are still labeled private preview.",
   "sources": [
    {
     "t": "Enable Context Engineering Studio",
     "u": "https://docs.atlan.com/product/capabilities/governance/context-engineering-studio/how-tos/get-started.md"
    },
    {
     "t": "FAQ agent templates",
     "u": "https://docs.atlan.com/llms/platform/context-agents-studio/faq-agent-templates/llms.txt"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "Alation Upload Logical Metadata API",
   "text": "The Upload Logical Metadata API page carries a deprecation notice. The Custom Field Values API cannot set title or description (field ids 3 and 4) on data, schema, table or attribute objects, so the Relational Integration API covers those.",
   "sources": [
    {
     "t": "ULM Overview",
     "u": "https://documentation.alation.com/api-reference/alation-cloud-service-latest/upload-logical-metadata-api/upload-logical-metadata.md"
    },
    {
     "t": "PUT multiple Custom Field Values",
     "u": "https://documentation.alation.com/api-reference/alation-cloud-service-latest/custom-field-values-api/custom-field-value/putcustomfieldvalues.md"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "MCP server status",
   "text": "Atlan, Alation, Collibra, DataHub and OpenMetadata all ship a first-party MCP server. Atlan, Alation and OpenMetadata host it for customers; DataHub has an open-source and a managed one; Collibra has a hosted product and an open-source local version.",
   "sources": [
    {
     "t": "Atlan MCP",
     "u": "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview"
    },
    {
     "t": "Alation MCP",
     "u": "https://documentation.alation.com/en/latest/agentstudio/integrations/mcp/using-the-mcp-server.md"
    },
    {
     "t": "Collibra MCP",
     "u": "https://www.collibra.com/products/mcp-server"
    },
    {
     "t": "DataHub MCP",
     "u": "https://docs.datahub.com/docs/features/feature-guides/mcp"
    },
    {
     "t": "OpenMetadata MCP",
     "u": "https://docs.open-metadata.org/v2.0.x/how-to-guides/mcp.md"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "Collibra Copilot replaced by Maestro",
   "text": "Collibra AI Copilot is marked Deprecated and is upgraded to Collibra Maestro with the 2026.10 release. Maestro is labeled in preview.",
   "sources": [
    {
     "t": "About Collibra AI Copilot",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/co_cai-co-pilot.htm"
    },
    {
     "t": "About Collibra Maestro",
     "u": "https://productresources.collibra.com/docs/collibra/latest/Content/CollibraAI/maestro/co_maestro.htm"
    }
   ],
   "from": "catalogs.json"
  },
  {
   "topic": "How stages were read",
   "text": "A feature is listed GA when vendor docs present it without a preview or beta label. Labeled or request-gated features are Preview.",
   "sources": [
    {
     "t": "Atlan release stages",
     "u": "https://docs.atlan.com/llms/platform/get-started/product-release-stages/llms.txt"
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
   "topic": "Oracle and analytic views in Select AI",
   "text": "Select AI docs list comments, annotations and constraints as prompt metadata. They do not mention analytic views, so whether Select AI uses analytic view definitions is unconfirmed.",
   "sources": [
    {
     "t": "DBMS_CLOUD_AI package",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/dbms-cloud-ai-package.html"
    },
    {
     "t": "Select AI examples",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-examples.html"
    }
   ],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Oracle MCP server date",
   "text": "Oracle's product page lists the MCP server GA announcement under December 2025. Docs cover Autonomous AI Database 26ai and 19c on Serverless, Dedicated Region and multicloud.",
   "sources": [
    {
     "t": "Autonomous AI Database MCP Server",
     "u": "https://www.oracle.com/autonomous-database/mcp-server/"
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
   "text": "Oracle docs now say Autonomous AI Database and Oracle AI Database 26ai. Earlier names were Autonomous Database and Database 23ai.",
   "sources": [
    {
     "t": "Oracle AI Vector Search overview",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/overview-ai-vector-search.html"
    }
   ],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Teradata platform GA",
   "text": "Teradata announced the Autonomous Knowledge Platform on 2026-05-07 and general availability on 2026-07-15. Teradata Cloud is on AWS, AI Studio is on AWS and Teradata Factory, and Tera is not in the availability list.",
   "sources": [
    {
     "t": "Introducing the Autonomous Knowledge Platform",
     "u": "https://www.teradata.com/press-releases/2026/introducing-the-autonomous-knowledge-platform"
    },
    {
     "t": "Platform general availability",
     "u": "https://www.teradata.com/press-releases/2026/teradata-autonomous-knowledge-platform-availability"
    }
   ],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Teradata MCP server status",
   "text": "The repo is under the Teradata GitHub organization with an MIT license and 0.x PyPI releases starting August 2025. The pages read do not state GA, support terms or an SLA.",
   "sources": [
    {
     "t": "teradata-mcp-server on PyPI",
     "u": "https://pypi.org/pypi/teradata-mcp-server/json"
    },
    {
     "t": "Teradata MCP Server README",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/README.md"
    }
   ],
   "from": "oracle-teradata.json"
  },
  {
   "topic": "Apache Ossie",
   "text": "Oracle appears in the April 2026 list of new Ossie working group participants. Ossie reference converters listed in its README cover dbt, GoodData, Polaris and Salesforce, not Oracle or Teradata.",
   "sources": [
    {
     "t": "Open Semantic Interchange community update",
     "u": "https://ossie.apache.org/updates/osi-april-2026-community-update/"
    },
    {
     "t": "Apache Ossie README",
     "u": "https://raw.githubusercontent.com/apache/ossie/main/README.md"
    }
   ],
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
   "text": "Vendor-run by dbt Labs, blog dated 7 Apr 2026. Dataset: ACME Insurance (from data.world), 11 questions run 20 times each. On the original schema, text-to-SQL scored 64.5% and the Semantic Layer 72.7% for both Sonnet 4.6 and GPT-5.3 Codex; after 3 added models, Sonnet 4.6 went from 90.0% to 98.2% and GPT-5.3 Codex from 84.1% to 100.0%. Bodo (Sep 2026) reported 220 of 220 correct with its own PyDough pipeline on a local SQLite replica, which is not the dbt setup.",
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
   "text": "Vendor-run by Cube staff, blog and arXiv paper dated 28 Apr 2026. Dataset: Cleaned Contoso Retail in ClickHouse, 100 questions, single-shot. Adding a 4 KB hand-written markdown semantic document to the schema raised accuracy: Opus 4.7 50.5% to 67.7%, Sonnet 4.6 46.5% to 68.7%, GPT-5.4 45.5% to 68.7%. The semantic layer in this test was the markdown file, not a running Cube deployment.",
   "sources": [
    {
     "t": "Cube blog: paired benchmark across three frontier models",
     "u": "https://cube.dev/blog/why-semantic-layers-make-llm-analytics-reliable-a-paired-benchmark-across-three-frontier-models"
    },
    {
     "t": "arXiv 2604.25149",
     "u": "https://arxiv.org/abs/2604.25149"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "benchmark: atscale",
   "text": "Vendor-run by AtScale, white paper blog dated 8 Aug 2024. Dataset: TPC-DS, 40 questions, with 3 retries allowed on SQL syntax errors. A control given only table schemas and primary and foreign keys scored 20%, and the AtScale semantic layer with its query engine scored 92.5%. The blog does not name the LLM. AtScale launched a public text-to-SQL leaderboard on 6 Nov 2024.",
   "sources": [
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
   "text": "OSI is renamed Apache Ossie (incubating). dbt v1.12 reads Ossie JSON documents, Wren and Honeydew document import and export, and Cube documents conversion as Preview (changelog 16 Oct 2026). AtScale joined OSI on 27 Jan 2026. No Ossie support was found in the Malloy docs.",
   "sources": [
    {
     "t": "dbt: Apache Ossie semantic layer documents",
     "u": "https://docs.getdbt.com/docs/build/ossie-semantic-models.md"
    },
    {
     "t": "Wren: Apache Ossie guide",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/guides/ossie.md"
    },
    {
     "t": "Honeydew Apache Ossie docs",
     "u": "https://honeydew.ai/docs/integration/apache-ossie-osi.md"
    },
    {
     "t": "Cube Apache Ossie integration",
     "u": "https://docs.cube.dev/docs/integrations/apache-ossie.md"
    },
    {
     "t": "Cube changelog: Apache Ossie integration",
     "u": "https://cube.dev/changelog/2026-10-16-changelog-apache-ossie-integration"
    },
    {
     "t": "AtScale joins Open Semantic Interchange",
     "u": "https://snowflake.atscale.com/press/atscale-joins-open-semantic-interchange-open-standards/"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "Cube MCP naming",
   "text": "Cube hosts a remote MCP server at cubecloud.dev/mcp with OAuth. The earlier local npm package is deprecated in favor of it, per its README.",
   "sources": [
    {
     "t": "Cube MCP server docs",
     "u": "https://docs.cube.dev/docs/integrations/mcp-server"
    },
    {
     "t": "Cube MCP server GitHub (deprecation notice)",
     "u": "https://raw.githubusercontent.com/cubedevinc/cube-mcp-server/main/README.md"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "Honeydew data platform support",
   "text": "Honeydew docs mark Snowflake as the supported platform and label Databricks and Google BigQuery support as Beta, available through support.",
   "sources": [
    {
     "t": "Honeydew Databricks setup",
     "u": "https://honeydew.ai/docs/integration/data-sources/databricks.md"
    },
    {
     "t": "Honeydew BigQuery setup",
     "u": "https://honeydew.ai/docs/integration/data-sources/bigquery.md"
    }
   ],
   "from": "semantic-layers.json"
  },
  {
   "topic": "Wren docs moved to YAML",
   "text": "Current Wren docs define MDL as YAML files that compile to target/mdl.json. Older material shows MDL as JSON.",
   "sources": [
    {
     "t": "MDL schema reference",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/docs/core/reference/mdl.md"
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
   "topic": "Strategy bots are now agents",
   "text": "Strategy One renamed enhanced bots to agents in September 2025. A dataset must be enabled for AI before an agent can use it, which generates the dataset and column descriptions.",
   "sources": [
    {
     "t": "Enable a Dataset for Agents",
     "u": "https://www2.microstrategy.com/producthelp/Current/Workstation/en-us/Content/enable_ai_dataset.htm"
    }
   ],
   "from": "enrich-bi-enterprise.json"
  },
  {
   "topic": "Oracle AI Descriptions are written by hand",
   "text": "In Oracle Analytics, an AI Description is a column field that you write to give the AI Assistant business context such as units or scale. It is separate from the generative features that draft dataset and presentation descriptions.",
   "sources": [
    {
     "t": "About Managing Data Model Indexing, Synonyms, and AI Descriptions Using a CSV File",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/managing-data-model-indexing-synonyms-ai-descriptions-using-csv-file.html"
    },
    {
     "t": "About Oracle Analytics AI Assistants",
     "u": "https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/oracle-analytics-ai-assistants-features.html"
    }
   ],
   "from": "enrich-bi-enterprise.json"
  },
  {
   "topic": "Qlik business logic turns off precedent learning",
   "text": "When business logic is enabled in a Qlik app, precedent-based learning is disabled for that app, so Insight Advisor relies on the logical model and vocabulary you maintain.",
   "sources": [
    {
     "t": "Building logical models for Insight Advisor with Business logic",
     "u": "https://help.qlik.com/en-US/sense/May2026/Subsystems/Hub/Content/Sense_Hub/BusinessLogic/business-logic-logical-models.htm"
    }
   ],
   "from": "enrich-bi-enterprise.json"
  },
  {
   "topic": "Sigma AI context is Beta",
   "text": "The page for AI context on data models says it describes public beta features that may change. Sigma datasets can no longer be used as a data source since 2026-09-15, so use data models.",
   "sources": [
    {
     "t": "Manage AI context for a data model (Beta)",
     "u": "https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models.md"
    },
    {
     "t": "Create and manage datasets (Deprecated)",
     "u": "https://help.sigmacomputing.com/docs/create-and-manage-datasets.md"
    }
   ],
   "from": "enrich-bi-modern.json"
  },
  {
   "topic": "ThoughtSpot Worksheets",
   "text": "ThoughtSpot deprecated Worksheets in 10.4.0.cl (Nov 2024) and removed them in 10.12.0.cl (Aug 2025). Existing Worksheets were migrated to Models, so edit Model TML.",
   "sources": [
    {
     "t": "Deprecated and removed features",
     "u": "https://docs.thoughtspot.com/cloud/latest/deprecation"
    }
   ],
   "from": "enrich-bi-modern.json"
  },
  {
   "topic": "Tableau AI names",
   "text": "Tableau Cloud help calls the assistant Tableau Agent. Tableau Next setup pages still use Agentforce for Analytics, with Concierge, Data Pro and Semantic Model Curation.",
   "sources": [
    {
     "t": "AI in Tableau Features",
     "u": "https://help.tableau.com/current/tableau/en-us/tableau_gai_solutions.htm"
    },
    {
     "t": "Step 4: Enable Tableau Next AI Features",
     "u": "https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm"
    }
   ],
   "from": "enrich-bi-modern.json"
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
   "topic": "What level 0 means here",
   "text": "A level 0 means the docs pages listed for that vendor do not show the feature. Pages without a source URL were searched but returned nothing.",
   "sources": [],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Oracle annotations version",
   "text": "The 26ai SQL reference documents the annotations clause, and the 19c application development guide has a schema annotations chapter with the same DDL. The Select AI annotations profile attribute is described as a 26ai feature.",
   "sources": [
    {
     "t": "Annotations clause (26ai)",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/annotations_clause.html"
    },
    {
     "t": "Schema annotations (19c)",
     "u": "https://docs.oracle.com/en/database/oracle/oracle-database/19/adfns/registering-application-data-usage-database.html"
    },
    {
     "t": "DBMS_CLOUD_AI package",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/dbms-cloud-ai-package.html"
    }
   ],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Oracle Select AI feedback as evals",
   "text": "The docs say feedback works only on 26ai with an NL2SQL profile and creates a vector index named <profile>_FEEDBACK_VECINDEX. Positive feedback stores the confirmed SQL. Negative feedback is refined by an LLM and stored as a hint. The page carries no preview label.",
   "sources": [
    {
     "t": "Select AI feedback",
     "u": "https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-feedback.html"
    }
   ],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Teradata comment limits",
   "text": "The Teradata COMMENT statement stores up to 255 characters per object and replaces any existing comment. Teradata items marked not checked have no confirmed answer yet.",
   "sources": [
    {
     "t": "COMMENT syntax elements",
     "u": "https://docs.teradata.com/r/SQL-Data-Definition-Language-Syntax-and-Examples/July-2021/Comment-Help-and-Show-Statements/COMMENT-Comment-Placing-Form/COMMENT-Syntax-Elements-Comment-Placing-Form"
    }
   ],
   "from": "enrich-oracle-teradata-postgres-clickhouse.json"
  },
  {
   "topic": "Teradata MCP server",
   "text": "The Teradata MCP server is MIT licensed and loads tools, prompts, cubes and glossary terms from YAML. It is a separate open-source project, not a Vantage feature.",
   "sources": [
    {
     "t": "Teradata MCP Server README",
     "u": "https://raw.githubusercontent.com/Teradata/teradata-mcp-server/main/README.md"
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
   "topic": "Dremio AI wiki and label status",
   "text": "Dremio docs mark Generate wiki and Generate labels as Preview. The Catalog API manages wikis and tags per dataset; column descriptions have no documented API.",
   "sources": [
    {
     "t": "Wikis and Labels",
     "u": "https://docs.dremio.com/dremio-cloud/manage-govern/wikis-labels"
    }
   ],
   "from": "enrich-virtualization-semantic.json"
  },
  {
   "topic": "Starburst enrichment and AIDA",
   "text": "A May 2026 release announces AIDA and Automatic Metadata Enrichment as GA. Data sampling inside enrichment and Galaxy column lineage are public preview.",
   "sources": [
    {
     "t": "Starburst Enterprise Intelligence Platform release",
     "u": "https://www.starburst.io/press-releases/starburst-unveils-enterprise-intelligence-platform-giving-enterprises-a-faster-path-to-trusted-ai/"
    },
    {
     "t": "Starburst AI agent-based data product enrichment",
     "u": "https://docs.starburst.io/latest/starburst-ai/data-product-enrichment-ai.html"
    }
   ],
   "from": "enrich-virtualization-semantic.json"
  },
  {
   "topic": "Denodo licensing",
   "text": "Denodo Assistant features sit in the AI & Denodo Assistant FeaturePack, which is a separately licensed add-on to the Enterprise Plus bundle.",
   "sources": [
    {
     "t": "Denodo Platform feature packs",
     "u": "https://community.denodo.com/docs/html/browse/latest/en/platform/administration/denodo_platform_feature_packs/denodo_platform_feature_packs"
    }
   ],
   "from": "enrich-virtualization-semantic.json"
  },
  {
   "topic": "dbt AI products",
   "text": "dbt Labs now recommends dbt Wizard over dbt Copilot. Copilot remains in Canvas and Insights, and Copilot in Insights is Beta.",
   "sources": [
    {
     "t": "dbt AI FAQs",
     "u": "https://docs.getdbt.com/docs/dbt-ai/dbt-ai-faqs"
    },
    {
     "t": "dbt Copilot",
     "u": "https://docs.getdbt.com/docs/dbt-ai/copilot-overview"
    }
   ],
   "from": "enrich-virtualization-semantic.json"
  },
  {
   "topic": "Wren AI roadmap items",
   "text": "Wren docs list the operational and behavioral context layers as in active development, and value profiling and a golden eval runner as next. Treat them as not shipped.",
   "sources": [
    {
     "t": "What is context (Wren docs)",
     "u": "https://docs.getwren.ai/oss/concepts/what_is_context"
    },
    {
     "t": "WrenAI README",
     "u": "https://raw.githubusercontent.com/Canner/WrenAI/main/README.md"
    }
   ],
   "from": "enrich-virtualization-semantic.json"
  },
  {
   "topic": "Cube Apache Ossie status",
   "text": "Cube's Apache Ossie conversion page says it is in preview and needs activation by support.",
   "sources": [
    {
     "t": "Cube Apache Ossie",
     "u": "https://docs.cube.dev/docs/integrations/apache-ossie.md"
    }
   ],
   "from": "enrich-virtualization-semantic.json"
  }
 ]
};
