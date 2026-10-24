// Merges research/*.json into site/data.js and reports shape problems.
// Usage: node tools/build-data.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const researchDir = join(root, 'research');

const CAP_GROUPS = [
  { id: 'model', label: 'Semantic model' },
  { id: 'enrich', label: 'Metadata enrichment' },
  { id: 'graph', label: 'Knowledge and graph' },
  { id: 'access', label: 'AI access' },
  { id: 'trust', label: 'Trust' },
];

const CAPS = [
  { key: 'metrics', group: 'model', label: 'Metrics', long: 'Governed metric and measure definitions stored as code or objects' },
  { key: 'dimensions', group: 'model', label: 'Dimensions', long: 'Declared dimensions, hierarchies, time grains' },
  { key: 'relationships', group: 'model', label: 'Joins', long: 'Declared join paths or entity relationships' },
  { key: 'synonyms', group: 'model', label: 'Synonyms', long: 'Business descriptions, synonyms, AI instructions' },
  { key: 'verifiedQueries', group: 'model', label: 'Verified SQL', long: 'Verified question-to-SQL pairs or trusted examples' },
  { key: 'aiDescriptions', group: 'enrich', label: 'AI descriptions', long: 'Generates table and column descriptions or business names with AI' },
  { key: 'bulkMetadata', group: 'enrich', label: 'Bulk metadata', long: 'Writes descriptions, tags, business names in bulk by SQL, API, SDK or import' },
  { key: 'autoClassify', group: 'enrich', label: 'Auto classify', long: 'Tags PII, semantic types and sensitivity automatically' },
  { key: 'sampleValues', group: 'enrich', label: 'Value matching', long: 'Samples values or matches literals, so NY maps to New York' },
  { key: 'queryHistory', group: 'enrich', label: 'Query mining', long: 'Mines query history to suggest joins, metrics or verified queries' },
  { key: 'lineage', group: 'enrich', label: 'Lineage', long: 'Native column-level lineage' },
  { key: 'ontology', group: 'graph', label: 'Ontology', long: 'Business entities above tables: objects, links, actions' },
  { key: 'graph', group: 'graph', label: 'Graph query', long: 'Property graph, SQL/PGQ, GQL, Cypher, SPARQL' },
  { key: 'vector', group: 'graph', label: 'Vector', long: 'Native vector or semantic search' },
  { key: 'nl2sql', group: 'access', label: 'NL to SQL', long: 'First-party natural-language-to-SQL or chat analytics' },
  { key: 'mcp', group: 'access', label: 'MCP', long: 'First-party MCP server for agents' },
  { key: 'evals', group: 'access', label: 'Evals', long: 'Tests NL-to-SQL accuracy, or turns feedback into verified examples' },
  { key: 'governance', group: 'trust', label: 'Governance', long: 'Semantic objects inherit security, lineage, certification' },
  { key: 'openStandard', group: 'trust', label: 'Open spec', long: 'Portable spec: OSI, open-source format, import or export' },
];

const CATEGORIES = [
  { id: 'cloud-dw', label: 'Cloud data warehouses', group: 'data' },
  { id: 'lakehouse', label: 'Lakehouse platforms', group: 'data' },
  { id: 'mpp', label: 'MPP warehouses', group: 'data' },
  { id: 'oltp', label: 'Operational databases', group: 'data' },
  { id: 'realtime-olap', label: 'Real-time OLAP', group: 'data' },
  { id: 'embedded', label: 'Embedded analytics engines', group: 'data' },
  { id: 'virtualization', label: 'Federation and virtualization', group: 'data' },
  { id: 'semantic-layer', label: 'Standalone semantic layers', group: 'semantic' },
  { id: 'bi', label: 'BI and analytics tools', group: 'semantic' },
  { id: 'catalog', label: 'Catalogs and context platforms', group: 'semantic' },
  { id: 'knowledge-graph', label: 'Knowledge graphs and ontologies', group: 'graph' },
];

const LOGOS = JSON.parse(existsSync(join(root, 'tools/logos.json')) ? readFileSync(join(root, 'tools/logos.json'), 'utf8') : '{}');

const scrubDashes = (s) => s.replace(/(\d)\s*[–—]\s*(\d)/g, '$1-$2').replace(/\s*[—–]\s*/g, ', ');
const deepScrub = (v) =>
  typeof v === 'string' ? scrubDashes(v)
  : Array.isArray(v) ? v.map(deepScrub)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === 'code' ? x : deepScrub(x)]))
  : v;

const problems = [];
const vendors = [];
const notes = [];
const all = readdirSync(researchDir).filter((f) => f.endsWith('.json')).sort();
const files = all.filter((f) => !f.startsWith('enrich-'));
const enrichFiles = all.filter((f) => f.startsWith('enrich-'));
const catIds = new Set(CATEGORIES.map((c) => c.id));

for (const file of files) {
  let doc;
  try {
    doc = JSON.parse(readFileSync(join(researchDir, file), 'utf8'));
  } catch (e) {
    problems.push(`${file}: invalid JSON (${e.message})`);
    continue;
  }
  for (const n of doc.notes ?? []) notes.push({ ...deepScrub(n), from: file });
  for (const raw of doc.vendors ?? []) {
    const v = deepScrub(raw);
    const where = `${file}:${v.id}`;
    if (!catIds.has(v.category)) problems.push(`${where}: unknown category "${v.category}"`);
    if (!['native', 'partial', 'none'].includes(v.verdict)) problems.push(`${where}: bad verdict "${v.verdict}"`);
    v.caps ??= {};
    for (const { key } of CAPS) {
      const c = v.caps[key];
      if (c && ![0, 1, 2, 3].includes(c.l)) problems.push(`${where}: cap ${key} level not 0-3`);
      if (!c || ![0, 1, 2, 3].includes(c.l)) v.caps[key] = { l: null, n: 'Not checked yet.', u: '' };
    }
    if (!v.sources?.length) problems.push(`${where}: no sources`);
    if (vendors.some((x) => x.id === v.id)) problems.push(`${where}: duplicate id`);
    v.logo = LOGOS[v.id] ?? null;
    v.sources ??= [];
    v.worksWith ??= [];
    v.artifacts ??= [];
    v.offers ??= [];
    v.gaps ??= [];
    v.fillWith ??= [];
    vendors.push(v);
  }
}

for (const file of enrichFiles) {
  let doc;
  try {
    doc = JSON.parse(readFileSync(join(researchDir, file), 'utf8'));
  } catch (e) {
    problems.push(`${file}: invalid JSON (${e.message})`);
    continue;
  }
  for (const n of doc.notes ?? []) notes.push({ ...deepScrub(n), from: file });
  for (const raw of doc.vendors ?? []) {
    const e = deepScrub(raw);
    const v = vendors.find((x) => x.id === e.id);
    if (!v) { problems.push(`${file}:${e.id}: no base vendor with this id`); continue; }
    for (const [k, c] of Object.entries(e.caps ?? {})) {
      if (!CAPS.some((x) => x.key === k)) { problems.push(`${file}:${e.id}: unknown cap ${k}`); continue; }
      if ([0, 1, 2, 3].includes(c?.l)) v.caps[k] = c;
      else problems.push(`${file}:${e.id}: cap ${k} level not 0-3`);
    }
    if (e.enrichHowTo) v.enrichHowTo = e.enrichHowTo;
    if (e.bulkSnippet?.code) v.bulkSnippet = e.bulkSnippet;
    const seen = new Set(v.sources.map((s) => s.u));
    for (const s of e.sources ?? []) if (!seen.has(s.u)) { v.sources.push(s); seen.add(s.u); }
  }
}
const unchecked = vendors.filter((v) => CAPS.some((c) => v.caps[c.key].l === null)).map((v) => v.id);
if (unchecked.length) problems.push(`not checked yet (some caps): ${unchecked.join(', ')}`);

const catOrder = Object.fromEntries(CATEGORIES.map((c, i) => [c.id, i]));
vendors.sort((a, b) => (catOrder[a.category] ?? 99) - (catOrder[b.category] ?? 99) || a.name.localeCompare(b.name));

const urls = new Set();
for (const v of vendors) {
  for (const s of v.sources ?? []) s.u && urls.add(s.u);
  for (const a of v.artifacts) a.url && urls.add(a.url);
  for (const c of Object.values(v.caps)) c.u && urls.add(c.u);
  v.snippet?.u && urls.add(v.snippet.u);
  v.bulkSnippet?.u && urls.add(v.bulkSnippet.u);
}
for (const n of notes) for (const s of n.sources ?? []) s.u && urls.add(s.u);
writeFileSync(join(root, 'research/urls.txt'), [...urls].sort().join('\n') + '\n');

const SL = { built: new Date().toISOString().slice(0, 10), capGroups: CAP_GROUPS, caps: CAPS, categories: CATEGORIES, vendors, notes };
writeFileSync(join(root, 'site/data.js'), `window.SL = ${JSON.stringify(SL, null, 1)};\n`);

const byCat = CATEGORIES.map((c) => `${c.id}=${vendors.filter((v) => v.category === c.id).length}`).join(' ');
console.log(`files=${files.length}+${enrichFiles.length} enrich vendors=${vendors.length} notes=${notes.length} urls=${urls.size}`);
console.log(byCat);
console.log(problems.length ? `PROBLEMS (${problems.length}):\n  ${problems.join('\n  ')}` : 'no shape problems');
