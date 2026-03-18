// src/features/cmd-about.js
export function cmdAbout(_args) {
  return [
    { text: 'about coveyjorjet', class: 'term-strong' },
    { text: '──────────────────────────────────', class: 'term-muted' },
    { text: '', class: '' },
    { text: '  Embedded Software Engineer', class: 'term-accent' },
    { text: '', class: '' },
    { text: '  I work at the intersection of hardware and OS,', class: '' },
    { text: '  building software that runs close to the metal.', class: '' },
    { text: '', class: '' },
    { text: '  Focus areas:', class: 'term-strong' },
    { text: '    · RDK-B (Reference Design Kit — Broadband)', class: 'term-accent2' },
    { text: '    · OpenWRT — router firmware & networking', class: 'term-accent2' },
    { text: '    · Linux kernel modules & board bring-up', class: 'term-accent2' },
    { text: '    · Network protocols: TR-069, CWMP, SNMP', class: 'term-accent2' },
    { text: '    · Systems programming in C / C++ / Bash', class: 'term-accent2' },
    { text: '', class: '' },
    { text: '  Not a portfolio. Just a place to exist online.', class: 'term-muted' },
    { text: "  For work, see: portfolio.coveyjorjet.com", class: 'term-muted' },
    { text: '', class: '' },
  ];
}
