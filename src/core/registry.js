// src/core/registry.js
// Command registry — maps command names to handler functions.
// Each handler receives (args: string[]) and returns OutputLine[].
// OutputLine: { text: string, class?: string, html?: boolean }

import { cmdHelp }    from '../features/cmd-help.js';
import { cmdAbout }   from '../features/cmd-about.js';
import { cmdLinks }   from '../features/cmd-links.js';
import { cmdNow }     from '../features/cmd-now.js';
import { cmdStack }   from '../features/cmd-stack.js';
import { cmdContact } from '../features/cmd-contact.js';
import { cmdStatus }  from '../features/cmd-status.js';
import { cmdWakatime }from '../features/cmd-wakatime.js';
import { cmdRepo }    from '../features/cmd-repo.js';
import { cmdSudo }    from '../features/cmd-sudo.js';
import { cmdHack }    from '../features/cmd-hack.js';
import { cmdTheme }   from '../features/cmd-theme.js';

export const COMMANDS = {
  help:     { fn: cmdHelp,     desc: 'List available commands' },
  about:    { fn: cmdAbout,    desc: 'Who is coveyjorjet?' },
  links:    { fn: cmdLinks,    desc: 'Social & profile links' },
  now:      { fn: cmdNow,      desc: 'What I\'m doing right now' },
  stack:    { fn: cmdStack,    desc: 'Tools & technologies I use' },
  contact:  { fn: cmdContact,  desc: 'How to reach me' },
  status:   { fn: cmdStatus,   desc: 'Current availability status' },
  wakatime: { fn: cmdWakatime, desc: 'Coding activity stats' },
  repo:     { fn: cmdRepo,     desc: 'Open source / GitHub' },
  theme:    { fn: cmdTheme,    desc: 'Toggle dark/light mode' },
  sudo:     { fn: cmdSudo,     desc: '...' },
  hack:     { fn: cmdHack,     desc: '...' },
  clear:    { fn: null,        desc: 'Clear the terminal' },
};

export function parse(input) {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const parts = trimmed.split(/\s+/);
  return { cmd: parts[0].toLowerCase(), args: parts.slice(1) };
}

export function execute(cmd, args) {
  if (!(cmd in COMMANDS)) {
    return [
      { text: `command not found: ${cmd}`, class: 'term-red' },
      { text: `type 'help' to list available commands.`, class: 'term-muted' },
    ];
  }
  const entry = COMMANDS[cmd];
  if (!entry.fn) return []; // handled externally (e.g. clear)
  return entry.fn(args);
}
