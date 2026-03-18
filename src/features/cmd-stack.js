// src/features/cmd-stack.js
export function cmdStack(_args) {
  return [
    { text: 'stack', class: 'term-strong' },
    { text: '──────────────────────────────────', class: 'term-muted' },
    { text: '', class: '' },
    { text: '  systems & embedded:', class: 'term-accent' },
    { text: '    C  C++  Bash  Python  Lua', class: 'term-strong' },
    { text: '', class: '' },
    { text: '  platforms:', class: 'term-accent' },
    { text: '    Linux  OpenWRT  RDK-B  Yocto  POSIX', class: 'term-strong' },
    { text: '', class: '' },
    { text: '  networking:', class: 'term-accent' },
    { text: '    TR-069  CWMP  SNMP  DHCP  iptables  tc', class: 'term-strong' },
    { text: '', class: '' },
    { text: '  tools:', class: 'term-accent' },
    { text: '    GDB  Valgrind  Buildroot  Make  CMake', class: 'term-strong' },
    { text: '    Git  Docker  QEMU  Wireshark  tcpdump', class: 'term-strong' },
    { text: '', class: '' },
    { text: '  learning:', class: 'term-accent' },
    { text: '    Rust  eBPF  Zephyr RTOS', class: 'term-yellow' },
    { text: '', class: '' },
  ];
}
