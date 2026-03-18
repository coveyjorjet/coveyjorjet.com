// src/features/cmd-theme.js
export function cmdTheme(args) {
  const arg = args[0];
  if (arg === 'dark') {
    return [{ text: '  theme set to: dark (solarized dark)', class: 'term-accent' }];
  }
  if (arg === 'light') {
    return [{ text: '  theme set to: light (solarized light)', class: 'term-yellow' }];
  }
  return [
    { text: '  theme toggled.', class: 'term-accent2' },
    { text: "  usage: theme [dark|light]", class: 'term-muted' },
  ];
}
