# Research brief, round 3: coverage, ask-your-data, catalogs

Read `BRIEF.md` and `BRIEF-ENRICH.md` in this folder first. Their schema, levels, and rules apply. This brief adds 3 fields and a writing standard.

Today is 2026-10-24.

## How to fetch pages

WebFetch does NOT work in this environment. Use Bash:

    python3 /home/user/fetchtool/fetch.py "<url>" [maxchars]

It prints `STATUS <code> <final url>` and then the page text. Many doc sites have a `.md` version of each page or an `/llms.txt` index. github.com web pages are blocked: use raw.githubusercontent.com for files. Use WebSearch only to find a URL. Then open the URL with fetch.py. Cite only URLs that you opened (STATUS 200) or saw in search results.

## Writing standard: ASD-STE100 Simplified Technical English

All text that shows on the page (notes, offers, gaps, verdictNote, nl2sqlPath, enrichHowTo, tagline, askData.reads) must follow these rules:
- Descriptive sentences have a maximum of 25 words. Instructions have a maximum of 20 words.
- Use the active voice. Write "The agent reads the semantic view", not "The semantic view is read by the agent".
- Use the simple present tense or the simple past tense.
- One idea in each sentence.
- Use simple, common words. Do not use idioms, marketing words, or slang.
- Keep "the", "a", and "an". Do not write in telegraph style.
- Use the same term for the same thing every time.
- No em dashes and no en dashes.
- Do not write about the research process ("I found", "the docs reviewed", "could not fetch").

## New field 1: `aliases`

An array of other names that people search for. Include old names, parent brands, and service names. Examples: `["Azure Synapse", "Synapse SQL", "Synapse Analytics"]`, `["Dataplex", "Dataplex Universal Catalog"]`. Do not include names of other products.

## New field 2: `askData`

The first-party features that let a user ask a question in natural language and get an answer from data (NL-to-SQL, text-to-SQL, conversational analytics, NL-to-KQL, NL-to-MQL). An array with 0 to 3 items:

```json
"askData": [
  {
    "name": "Cortex Analyst",
    "status": "GA | Preview | Announced | Deprecated | Unverified",
    "since": "YYYY-MM or empty",
    "surfaces": ["UI", "REST API", "SQL function", "SDK", "MCP"],
    "output": "SQL | KQL | MQL | DAX | answer only",
    "reads": "max 20 words. The semantic context that the feature reads, for example semantic view, verified queries, column descriptions.",
    "u": "doc url"
  }
]
```

Use an empty array when the product has no first-party feature. Do not list partner features.

## New field 3: `partOf` (catalogs only)

For a catalog that is a part of a data platform, set `partOf` to the vendor id of that platform. Known ids: `snowflake`, `databricks`, `bigquery`, `redshift`, `fabric`, `denodo`, `sap`. A standalone catalog has no `partOf` field.

## Output

Write the vendor objects with the FULL `BRIEF.md` schema, plus all 7 `BRIEF-ENRICH.md` caps in the same `caps` object (19 caps), plus `enrichHowTo`, `bulkSnippet`, `aliases`, and `askData`. Add `partOf` for platform catalogs. Use the categories from `BRIEF.md`, plus `bi` and `catalog`.

Use `l: null` with `n: "Not checked yet."` only when you tried and cannot decide. Use 0 only when you read the relevant docs and the feature is not there.

Validate your file: `node -e "require('<path>')"` must succeed, and `grep -c '[—–]' <path>` must print 0.

Reply in max 150 words: vendors covered, cells still null, the 3 most surprising findings, and every claim you could not verify.
