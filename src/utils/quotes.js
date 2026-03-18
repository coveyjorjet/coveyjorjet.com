// src/utils/quotes.js
export const QUOTES = [
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "The most dangerous kind of waste is the waste we do not recognize.",
    author: "Shigeo Shingo",
  },
  {
    text: "Debugging is twice as hard as writing the code in the first place.",
    author: "Brian Kernighan",
  },
  {
    text: "The art of programming is the art of organizing complexity.",
    author: "Edsger W. Dijkstra",
  },
  {
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  {
    text: "Simple things should be simple, complex things should be possible.",
    author: "Alan Kay",
  },
  {
    text: "The computer is incredibly fast, accurate, and stupid. Man is unbelievably slow, inaccurate, and brilliant.",
    author: "Leo Cherne",
  },
  {
    text: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: "Edsger W. Dijkstra",
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    text: "A program that produces incorrect results twice as fast is infinitely slower.",
    author: "John Osterhout",
  },
  {
    text: "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements.",
    author: "Brian Kernighan",
  },
  {
    text: "Every system is perfectly designed to get the results it gets.",
    author: "W. Edwards Deming",
  },
  {
    text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
  },
  {
    text: "Real programmers don't comment their code. It was hard to write, it should be hard to understand.",
    author: "Anonymous",
  },
  {
    text: "Hardware eventually fails. Software eventually works.",
    author: "Michael Hartung",
  },
  {
    text: "The kernel is not the product. The kernel is the means by which you ship the product.",
    author: "Linus Torvalds",
  },
  {
    text: "Complexity is the enemy of reliability.",
    author: "Werner Vogels",
  },
  {
    text: "The best code is no code at all.",
    author: "Jeff Atwood",
  },
  {
    text: "It is not enough for code to work.",
    author: "Robert C. Martin",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "In the embedded world, every byte is sacred and every cycle is precious.",
    author: "Unknown",
  },
  {
    text: "The network is the computer.",
    author: "John Gage",
  },
  {
    text: "Given enough eyeballs, all bugs are shallow.",
    author: "Linus Torvalds",
  },
];

export function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
