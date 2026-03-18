// src/core/cli-engine.js
// Alpine.js x-data factory for the terminal component.
// Imported as a module in the page's <script> tag.

import { parse, execute, COMMANDS } from './registry.js';

export function terminalData() {
  return {
    input: '',
    history: [],        // { cmd, output: OutputLine[] }[]
    historyIndex: -1,
    cmdHistory: [],     // raw string history for up/down nav
    booted: false,

    init() {
      this.boot();
      this.$nextTick(() => this.$refs.input?.focus());

      // Konami code easter egg
      const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
      let ki = 0;
      window.addEventListener('keydown', (e) => {
        if (e.key === konami[ki]) {
          ki++;
          if (ki === konami.length) {
            ki = 0;
            this.pushOutput('KONAMI', [
              { text: '↑↑↓↓←→←→BA — cheat code accepted.', class: 'term-yellow' },
              { text: 'You have unlocked: absolutely nothing.', class: 'term-muted' },
              { text: 'But respect for knowing the sequence. 🎮', class: 'term-accent2' },
            ]);
            this.scrollBottom();
          }
        } else { ki = 0; }
      });
    },

    boot() {
      this.history = [{
        cmd: null,
        output: [
          { text: '┌─────────────────────────────────────┐', class: 'term-muted' },
          { text: '│  coveyjorjet.com  —  v1.0.0          │', class: 'term-accent' },
          { text: '└─────────────────────────────────────┘', class: 'term-muted' },
          { text: '', class: '' },
          { text: "type 'help' to see available commands.", class: 'term-muted' },
          { text: '', class: '' },
        ],
      }];
      this.booted = true;
    },

    submit() {
      const raw = this.input.trim();
      if (!raw) return;

      // push to cmd history
      this.cmdHistory.unshift(raw);
      if (this.cmdHistory.length > 50) this.cmdHistory.pop();
      this.historyIndex = -1;
      this.input = '';

      const parsed = parse(raw);
      if (!parsed) return;

      if (parsed.cmd === 'clear') {
        this.history = [];
        return;
      }

      if (parsed.cmd === 'theme') {
        const output = execute('theme', parsed.args);
        const newTheme = parsed.args[0];
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else if (newTheme === 'light') {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          const isDark = document.documentElement.classList.toggle('dark');
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
        this.pushOutput(raw, output);
        this.scrollBottom();
        return;
      }

      const output = execute(parsed.cmd, parsed.args);
      this.pushOutput(raw, output);
      this.scrollBottom();
    },

    pushOutput(cmd, lines) {
      this.history.push({ cmd, output: lines });
    },

    historyUp() {
      if (this.historyIndex < this.cmdHistory.length - 1) {
        this.historyIndex++;
        this.input = this.cmdHistory[this.historyIndex];
      }
    },

    historyDown() {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.input = this.cmdHistory[this.historyIndex];
      } else {
        this.historyIndex = -1;
        this.input = '';
      }
    },

    scrollBottom() {
      this.$nextTick(() => {
        const body = this.$refs.termBody;
        if (body) body.scrollTop = body.scrollHeight;
      });
    },

    focusInput() {
      this.$refs.input?.focus();
    },
  };
}

// Expose globally for Alpine
window.__terminalData = terminalData;
