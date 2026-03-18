// src/features/cmd-sudo.js
export function cmdSudo(args) {
  const cmd = args.join(' ');
  if (cmd.includes('rm -rf') || cmd.includes('rm-rf')) {
    return [
      { text: '', class: '' },
      { text: '  ⚠ nice try.', class: 'term-red' },
      { text: "  [sudo] password for coveyjorjet: ", class: '' },
      { text: '  Sorry, try again.', class: 'term-muted' },
      { text: '  Sorry, try again.', class: 'term-muted' },
      { text: '  sudo: 3 incorrect password attempts.', class: 'term-red' },
      { text: '', class: '' },
    ];
  }
  return [
    { text: '', class: '' },
    { text: "  [sudo] password for coveyjorjet:", class: '' },
    { text: '', class: '' },
    { text: '  This incident will be reported.', class: 'term-orange' },
    {
      text: '  (just kidding. but there is no sudo here.)',
      class: 'term-muted',
    },
    { text: '', class: '' },
  ];
}
