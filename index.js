// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

window.onload = function () {
  gsap.to(".visit .leftImg", {
    x: -800,
    scale: 1.2,
    ease: "none",
    scrollTrigger: {
      trigger: ".page3",
      start: "-120px top",
      end: "bottom bottom",
      pin: true,
      scrub: 2.3,
    },
  });
  gsap.to(".visit .rightImg", {
    x: 400,
    scale: 1.2,
    ease: "none",
    scrollTrigger: {
      trigger: ".page3",
      start: "-120px top",
      end: "bottom bottom ",
      pin: true,
      scrub: 2.3,
    },
  });

  gsap.to(".visit .leftImg-1", {
    x: -800,
    scale: 1.2,
    ease: "none",
    duration: 1,
    scrollTrigger: {
      trigger: ".page4",
      start: "-120px top",
      end: "120px bottom",
      pin: true,
      scrub: 2.3,
    },
  });
  gsap.to(".visit .rightImg-1", {
    x: 400,
    scale: 1.2,
    ease: "none",
    scrollTrigger: {
      trigger: ".page4",
      start: "-120px   top",
      end: "bottom bottom ",
      pin: true,
      scrub: 2.3,
    },
  });
};
