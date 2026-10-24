# Research brief (shared by all research agents)

## Goal

Produce accurate, cited facts for a public comparison page. The page answers one question per data platform:
"If I want to build natural-language-to-SQL or an AI analytics agent on this platform, what semantic context does the platform give me natively, what is missing, and how do teams fill the gap?"

Readers are engineers who build NL-to-SQL, text-to-SQL, and AI analytics agents. Accuracy matters more than coverage. The page owner was burned before by fabricated claims. A wrong claim is worse than a missing claim.

## Rules

- Today is 2026-10-24. Your training data may be stale. Use WebSearch and WebFetch to check the latest official docs, release notes, and announcements from 2025 and 2026.
- Prefer primary sources: vendor docs, release notes, official engineering blogs, spec repos. Use news and third-party blogs only to find primary sources.
- Never invent a URL. Cite only URLs you fetched or saw in search results in this session.
- Give each feature a status: `GA`, `Preview`, `Announced`, `Deprecated`, or `Unverified`. Add month and year when you know them. Use `Unverified` when you cannot confirm, and say why in the note.
- Record product renames (for example, a product renamed in 2025 or 2026).
- Write notes short and plain. No marketing words. No em dashes. No "seamless", "robust", "powerful", "cutting-edge".
- Do not spawn subagents. Do not write any file other than your own output file.

## Output file

Write JSON to the path your task names. Shape:

```json
{
  "vendors": [ /* one object per vendor id, schema below */ ],
  "notes": [ { "topic": "string", "text": "1-3 plain sentences", "sources": [ { "t": "title", "u": "url" } ] } ]
}
```

### Vendor object

```json
{
  "id": "snowflake",
  "name": "Snowflake",
  "category": "cloud-dw | lakehouse | oltp | mpp | realtime-olap | embedded | virtualization | semantic-layer | knowledge-graph",
  "tagline": "max 15 words, plain, what the platform is",
  "verdict": "native | partial | none",
  "verdictNote": "one sentence. Why this verdict for a native semantic layer usable by AI.",
  "artifacts": [
    { "name": "Semantic View", "kind": "semantic-model | metric-view | ontology | knowledge-graph | glossary | annotations | nl2sql | agent | mcp | graph-query | vector",
      "status": "GA | Preview | Announced | Deprecated | Unverified", "since": "YYYY-MM or empty",
      "format": "SQL DDL | YAML | JSON | GUI | API | ...", "url": "doc url" }
  ],
  "caps": {
    "metrics":        { "l": 0, "n": "note, max 20 words", "u": "source url or empty" },
    "dimensions":     { "l": 0, "n": "", "u": "" },
    "relationships":  { "l": 0, "n": "", "u": "" },
    "synonyms":       { "l": 0, "n": "", "u": "" },
    "verifiedQueries":{ "l": 0, "n": "", "u": "" },
    "nl2sql":         { "l": 0, "n": "", "u": "" },
    "ontology":       { "l": 0, "n": "", "u": "" },
    "graph":          { "l": 0, "n": "", "u": "" },
    "vector":         { "l": 0, "n": "", "u": "" },
    "mcp":            { "l": 0, "n": "", "u": "" },
    "governance":     { "l": 0, "n": "", "u": "" },
    "openStandard":   { "l": 0, "n": "", "u": "" }
  },
  "offers": [ "3-6 items, max 20 words each. What the platform gives an NL-to-SQL builder." ],
  "gaps":   [ "2-5 items, max 20 words each. What is missing or weak." ],
  "fillWith": [ "names of external tools teams use to fill the gaps, e.g. Cube, dbt Semantic Layer" ],
  "nl2sqlPath": "2-3 plain sentences. The recommended path for a team that builds NL-to-SQL on this platform today.",
  "snippet": { "lang": "sql | yaml | json | dax | lookml | other", "title": "what this shows",
               "code": "max 15 lines. A minimal real example of the platform's semantic artifact syntax, adapted from the official docs.",
               "u": "doc url the syntax comes from" },
  "sources": [ { "t": "title", "u": "url" } ],
  "verified": "2026-10-24"
}
```

### Capability keys

| key | meaning |
|---|---|
| metrics | Governed metric or measure definitions stored as code or objects (not ad hoc SQL). |
| dimensions | Declared dimensions, hierarchies, time grains. |
| relationships | Declared join paths or entity relationships the engine or AI can use. |
| synonyms | Business descriptions, synonyms, custom instructions that an AI reads as context. |
| verifiedQueries | Verified question-to-SQL pairs, example queries, or trusted assets used as few-shot context. |
| nl2sql | A first-party natural-language-to-SQL or conversational analytics feature. |
| ontology | Business entities modeled above tables: objects, links, actions, classes. Beyond plain views. |
| graph | Graph query capability: property graph, SQL/PGQ, GQL, Cypher, RDF/SPARQL. |
| vector | Native vector or semantic search on data or metadata. |
| mcp | A first-party MCP server so agents can reach the platform or its semantic layer. |
| governance | Semantic objects inherit row and column security, lineage, certification. |
| openStandard | Portable or open spec: Open Semantic Interchange (OSI), open-source format, export or import. |

### Level values

- `3` native and GA
- `2` native but Preview or Beta
- `1` only through a partner, extension, separate product, or do-it-yourself
- `0` none

Set `n` to explain the level. If `l` is 0, `n` says what teams use instead, when known.

## Reply to the coordinator

After you write the file, reply in max 150 words: vendors covered, the 3 most surprising findings, and every claim you could not verify.
