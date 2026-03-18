// src/features/cmd-status.js
export function cmdStatus(_args) {
  const hour = new Date().getHours();
  const online = hour >= 7 && hour < 24;
  return [
    { text: 'status', class: 'term-strong' },
    { text: '──────────────────────────────────', class: 'term-muted' },
    { text: '', class: '' },
    {
      text: online
        ? '  ● online  — probably staring at dmesg output'
        : '  ○ offline — probably asleep (or debugging a segfault)',
      class: online ? 'term-green' : 'term-muted',
    },
    { text: '', class: '' },
    { text: '  availability: open to conversations', class: 'term-accent2' },
    { text: '  response time: within 48h', class: 'term-muted' },
    { text: '', class: '' },
  ];
}
