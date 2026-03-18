// src/features/cmd-repo.js
export function cmdRepo(_args) {
  return [
    { text: 'open source / github', class: 'term-strong' },
    { text: '──────────────────────────────────', class: 'term-muted' },
    { text: '', class: '' },
    { text: '  github.com/coveyjorjet', class: 'term-accent' },
    { text: '', class: '' },
    { text: '  most work is proprietary / internal.', class: 'term-muted' },
    { text: '  public repos: dotfiles, tools, experiments.', class: 'term-muted' },
    { text: '', class: '' },
    {
      text: '  <a href="https://github.com/coveyjorjet" target="_blank" rel="noopener" class="term-accent underline">→ view on github</a>',
      class: '',
      html: true,
    },
    { text: '', class: '' },
  ];
}
