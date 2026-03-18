// src/features/cmd-contact.js
export function cmdContact(_args) {
  return [
    { text: 'contact', class: 'term-strong' },
    { text: '──────────────────────────────────', class: 'term-muted' },
    { text: '', class: '' },
    { text: '  preferred: email', class: '' },
    { text: '  hey@coveyjorjet.com', class: 'term-accent' },
    { text: '', class: '' },
    { text: '  open to:', class: 'term-strong' },
    { text: '    · interesting embedded / systems work', class: '' },
    { text: '    · open source collaboration', class: '' },
    { text: '    · technical discussion & mentorship', class: '' },
    { text: '', class: '' },
    { text: '  not open to:', class: 'term-red' },
    { text: '    · cold recruiter outreach without context', class: 'term-muted' },
    { text: '', class: '' },
  ];
}
