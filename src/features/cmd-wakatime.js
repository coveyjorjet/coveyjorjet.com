// src/features/cmd-wakatime.js
export function cmdWakatime(_args) {
  return [
    { text: 'wakatime stats', class: 'term-strong' },
    { text: '──────────────────────────────────', class: 'term-muted' },
    { text: '', class: '' },
    {
      text: '  <a href="https://wakatime.com/@coveyjorjet" target="_blank" rel="noopener"><img src="https://wakatime.com/badge/user/coveyjorjet.svg" alt="wakatime stats" style="height:20px;vertical-align:middle;" /></a>',
      class: '',
      html: true,
    },
    { text: '', class: '' },
    { text: '  → wakatime.com/@coveyjorjet', class: 'term-accent' },
    { text: '', class: '' },
  ];
}
