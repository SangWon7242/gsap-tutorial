gsap.registerPlugin(ScrollTrigger);
// gsap code here!

gsap.to(".box-1, .box-2", {
  x: 300,
});

gsap.to(
  ".box-2",
  {
    x: 600,
    duration: 2,
  },
  1
);
