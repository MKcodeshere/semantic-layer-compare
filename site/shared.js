window.SLX = (() => {
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const initials = (name) =>
    name.replace(/\(.*?\)/g, '').split(/[\s/+.-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  // The monogram sits under the image, so a failed logo load still shows something.
  const logo = (v, color = '') =>
    `<span class="logo"><b>${esc(initials(v.name))}</b>${
      v.logo ? `<img src="https://cdn.simpleicons.org/${v.logo}${color ? '/' + color : ''}" alt="" loading="lazy" onerror="this.remove()">` : ''
    }</span>`;
  const LEVELS = [
    { l: 0, label: 'None', glyph: '' },
    { l: 1, label: 'Partner or DIY', glyph: '○' },
    { l: 2, label: 'Native, preview', glyph: '◐' },
    { l: 3, label: 'Native, GA', glyph: '●' },
  ];
  const UNKNOWN = { l: 'x', label: 'Not checked yet', glyph: '?' };
  const lvl = (c) => LEVELS[c?.l] ?? UNKNOWN;
  const VERDICT = { native: 'Native semantic layer', partial: 'Partial', none: 'Bring your own' };
  const host = (u) => {
    try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; }
  };
  const cat = (id) => SL.categories.find((c) => c.id === id) ?? { id, label: id, group: 'data' };
  const vendor = (id) => SL.vendors.find((v) => v.id === id);
  const note = (re) => SL.notes.find((n) => re.test(n.topic ?? ''));
  const notesWhere = (re) => SL.notes.filter((n) => re.test(n.topic ?? ''));
  const score = (v) => SL.caps.reduce((s, c) => s + (v.caps[c.key]?.l ?? 0), 0);
  // Layers and graphs that list this platform in worksWith, plus fillWith names that match a known vendor.
  const helpersFor = (p) => {
    const named = new Set(
      (p.fillWith ?? []).flatMap((name) =>
        SL.vendors.filter((v) => v.id !== p.id && name.toLowerCase().includes(v.name.split(/[\s(]/)[0].toLowerCase())).map((v) => v.id),
      ),
    );
    return SL.vendors.filter((v) => cat(v.category).group !== 'data' && v.id !== p.id && ((v.worksWith ?? []).includes(p.id) || named.has(v.id)));
  };
  return { esc, logo, LEVELS, lvl, VERDICT, host, cat, vendor, note, notesWhere, score, helpersFor };
})();
