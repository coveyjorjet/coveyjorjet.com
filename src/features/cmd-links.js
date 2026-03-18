// src/features/cmd-links.js
export function cmdLinks(_args) {
  return [
    { text: 'links', class: 'term-strong' },
    { text: '──────────────────────────────────', class: 'term-muted' },
    { text: '', class: '' },
    { text: '  github      github.com/coveyjorjet', class: 'term-accent', html: false },
    { text: '  linkedin    linkedin.com/in/coveyjorjet', class: 'term-accent', html: false },
    { text: '  email       hey@coveyjorjet.com', class: 'term-accent', html: false },
    { text: '  twitter/x   x.com/coveyjorjet', class: 'term-accent', html: false },
    { text: '  wakatime    wakatime.com/@coveyjorjet', class: 'term-accent', html: false },
    { text: '  facebook    fb.com/coveyjorjet', class: 'term-accent', html: false },
    { text: '  portfolio   portfolio.coveyjorjet.com', class: 'term-accent2', html: false },
    { text: '', class: '' },
    {
      text: '  <a href="https://github.com/coveyjorjet" target="_blank" rel="noopener" class="term-accent underline">→ open github</a>',
      class: '',
      html: true,
    },
    { text: '', class: '' },
  ];
}
