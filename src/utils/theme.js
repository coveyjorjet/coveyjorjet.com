// src/utils/theme.js
// Injected inline in <head> to prevent FOUC.
// Do not import Alpine here — this runs before any framework.

export const themeInitScript = `
(function () {
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = stored ? stored === 'dark' : prefersDark;
  if (isDark) document.documentElement.classList.add('dark');
})();
`;
