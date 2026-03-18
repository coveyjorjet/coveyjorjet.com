// src/features/cmd-help.js
import { COMMANDS } from '../core/registry.js';

export function cmdHelp(_args) {
  const lines = [
    { text: 'available commands:', class: 'term-strong' },
    { text: '', class: '' },
  ];

  for (const [name, entry] of Object.entries(COMMANDS)) {
    const pad = name.padEnd(12, ' ');
    lines.push({
      text: `  ${pad}${entry.desc}`,
      class: name === 'sudo' || name === 'hack' ? 'term-muted' : 'term-accent2',
    });
  }

  lines.push({ text: '', class: '' });
  lines.push({ text: "press ↑/↓ to navigate command history.", class: 'term-muted' });
  return lines;
}
