// src/features/cmd-now.js
export function cmdNow(_args) {
  return [
    { text: 'now', class: 'term-strong' },
    { text: '──────────────────────────────────', class: 'term-muted' },
    { text: '', class: '' },
    { text: '  current work:', class: 'term-strong' },
    { text: '    Deep in RDK-B middleware & TR-069 stack.', class: '' },
    { text: '    Debugging CWMP sessions on a custom CPE build.', class: '' },
    { text: '', class: '' },
    { text: '  learning:', class: 'term-strong' },
    { text: '    · Rust (systems programming, memory model)', class: 'term-accent2' },
    { text: '    · eBPF — kernel tracing & observability', class: 'term-accent2' },
    { text: '    · Yocto Project for custom embedded Linux images', class: 'term-accent2' },
    { text: '', class: '' },
    { text: '  reading:', class: 'term-strong' },
    { text: '    "Computer Systems: A Programmer\'s Perspective"', class: 'term-yellow' },
    { text: '', class: '' },
    { text: '  status:', class: 'term-strong' },
    { text: '    ✓ available for collaboration & interesting problems', class: 'term-green' },
    { text: '', class: '' },
    { text: '  last updated: 2025-Q4', class: 'term-muted' },
    { text: '', class: '' },
  ];
}
