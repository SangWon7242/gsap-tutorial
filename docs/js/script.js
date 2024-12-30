gsap.registerPlugin(ScrollTrigger);
// gsap code here!

const t1 = gsap.timeline();
t1.to(".box-1", { duration: 2, x: 300 }, 1) // 2초 동안 x축으로 300px 이동
  .to(".box-1", { duration: 2, y: 300 }, 3) // 2초 동안 y축으로 300px 이동
  .to(".box-1", { duration: 2, x: 0 }, 5)
  .to(".box-1", { duration: 2, y: 0 }, 7);

const t2 = gsap.timeline();

// 애니메이션 추가
t2.to(".box-2", { x: 200, duration: 1 }) // 1초 동안 x축으로 200px 이동
  .to(".box-2", { y: 200, duration: 1 }) // 1초 동안 y축으로 200px 이동
  .to(".box-2", { rotation: 360, duration: 1 }) // 1초 동안 360도 회전
  .to(".box-2", { scale: 0.5, duration: 1 }); // 1초 동안 크기를 50%로 축소

// 타임라인 제어
document.querySelector(".box-2").addEventListener("click", () => {
  t2.reverse(); // 클릭 시 타임라인을 되감기
});
