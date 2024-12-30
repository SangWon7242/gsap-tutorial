gsap.registerPlugin(ScrollTrigger);
// gsap code here!

gsap.to(
  ".box-1",
  {
    duration: 2,
    x: 300,
  },
  1
);

gsap.to(
  ".box-1",
  {
    duration: 2,
    y: 300,
  },
  3
);

gsap.to(
  ".box-1",
  {
    duration: 2,
    x: 0,
  },
  5
);

gsap.to(
  ".box-1",
  {
    duration: 2,
    y: 0,
  },
  7
);
