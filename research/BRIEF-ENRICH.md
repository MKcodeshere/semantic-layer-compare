# Research brief, wave 2: metadata enrichment

Read `BRIEF.md` in this folder first. Its goal, rules, level values, and reply format all apply here. This brief adds 7 capability keys about metadata enrichment and AI-readiness tooling.

## Why this matters

An NL-to-SQL agent is only as good as the metadata it reads. Teams spend most of their effort on descriptions, business names, sample values, and tested examples. The page answers: "What does each platform give me to create, bulk-update, and test that metadata?"

## The 7 keys

| key | meaning | examples of what counts |
|---|---|---|
| aiDescriptions | The product generates table and column descriptions or business names with AI, in the UI or by a function. | A "Generate description" button on a table page. A SQL function that drafts comments. |
| bulkMetadata | You can write descriptions, comments, tags, or business names in bulk through SQL, a REST API, an SDK, or file import. | `COMMENT ON` / `ALTER ... SET OPTIONS(description=...)`, a REST endpoint, a CSV import, dbt `persist_docs`. Note any rate limits or gaps. |
| autoClassify | Automatic classification or tagging of columns: PII, semantic types, sensitivity. | A classify function, auto tagging jobs. |
| sampleValues | The NL-to-SQL feature samples column values or matches literals to real values, so "NY" maps to "New York". | Sample values in a semantic model, entity matching, value indexes, literal search. |
| queryHistory | The product mines query history or usage to suggest joins, metrics, verified queries, or semantic models. | "Generate semantic model from query history", suggested joins, popular queries. |
| lineage | Column-level lineage is available natively. | Lineage graph in the catalog, lineage system tables or API. |
| evals | Tooling to test NL-to-SQL accuracy (benchmarks, eval sets, SDK) or a feedback loop that turns user ratings into verified examples. | Benchmarks tab, evaluation SDK, thumbs-up feedback that becomes a verified query. |

Level values are the same as `BRIEF.md`: 3 native GA, 2 native preview, 1 partner or DIY or separate product, 0 none.

## Output file

Write JSON to the path your task names:

```json
{
  "vendors": [
    {
      "id": "snowflake",
      "caps": {
        "aiDescriptions": { "l": 0, "n": "max 20 words", "u": "source url" },
        "bulkMetadata":   { "l": 0, "n": "", "u": "" },
        "autoClassify":   { "l": 0, "n": "", "u": "" },
        "sampleValues":   { "l": 0, "n": "", "u": "" },
        "queryHistory":   { "l": 0, "n": "", "u": "" },
        "lineage":        { "l": 0, "n": "", "u": "" },
        "evals":          { "l": 0, "n": "", "u": "" }
      },
      "enrichHowTo": "2-3 plain sentences. The fastest real way to give this platform's tables good descriptions and business names at scale today, including the exact SQL statement or API name.",
      "bulkSnippet": { "lang": "sql | bash | python | json", "code": "max 8 lines. A real bulk metadata write, adapted from docs.", "u": "doc url" },
      "sources": [ { "t": "title", "u": "url" } ]
    }
  ],
  "notes": [ { "topic": "string", "text": "1-3 plain sentences", "sources": [ { "t": "title", "u": "url" } ] } ]
}
```

Use the exact vendor ids your task lists. Do not add vendors that your task does not list, unless your task says to.
