function page1Animation() {
  const tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.7,
    delay: 1,
    stagger: 0.15
  })

  tl.from(".center_part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5
  }, "-=0.3")

  tl.from(".center_part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4
  })

  tl.from(".center_part1 button", {
    opacity: 0,
    duration: 0.4
  })

  tl.from(".center_part2 img", {
    x: 50,
    opacity: 0,
    duration: 0.5
  }, "-=0.3") // -=0.1 means this run_togetheration will start 0.1 second before the previous run_togetheration

  // tl.from(".img_cont img", {
  //   opacity: 0,
  //   y: 30,
  //   stagger: 0.2,
  //   duration: 0.6,
  // })
}

function page2Animation() {
  /*
    // ====================
    DON'T USE SCROLLTRIGGER
    FOR MULTIPLE run_togetherATIONS

    DO THIS
    AFTER THIS
    COMMENTED CODE
    ==================== //


    gsap.from(".services h3", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".services h3",
        scroller: "body",
        start: "top 50%",
        markers: true,
      }
    })

    gsap.from(".services p", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".services p",
        scroller: "body",
        start: "top 50%",
        markers: true,
      }
    })
  */

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      // markers: true,
      start: "top 30%",
      scrub: 2,
      end: "top 0%",
    }
  });

  tl2.from(".services", {
    opacity: 0,
    y: 30,
    duration: 0.5,
  })

  // Line 1
  tl2.from(".elem.line1.left", { // Target the element that which has the class of "elem line1 left"
    opacity: 0,
    x: -300,
    duration: 1,
  }, "run_together")

  tl2.from(".elem.line1.right", { // Target the element that which has the class of "elem line1 right"
    opacity: 0,
    x: 300,
    duration: 1,
  }, "run_together")

  // Line 2
  tl2.from(".elem.line2.left", { // Target the element that which has the class of "elem line2 left"
    opacity: 0,
    x: -300,
    duration: 1,
  }, "anim2")

  tl2.from(".elem.line2.right", { // Target the element that which has the class of "elem line2 right"
    opacity: 0,
    x: 300,
    duration: 1,
  }, "anim2")

  // Line 3
  tl2.from(".elem.line3.left", { // Target the element that which has the class of "elem line2 left"
    opacity: 0,
    x: -300,
    duration: 1,
  }, "anim3")

  tl2.from(".elem.line3.right", { // Target the element that which has the class of "elem line2 right"
    opacity: 0,
    x: 300,
    duration: 1,
  }, "anim3")

  // Line 4
  tl2.from(".elem.line4.left", { // Target the element that which has the class of "elem line2 left"
    opacity: 0,
    x: -300,
    duration: 1,
  }, "anim4")

  tl2.from(".elem.line4.right", { // Target the element that which has the class of "elem line2 right"
    opacity: 0,
    x: 300,
    duration: 1,
  }, "anim4")
}

page1Animation();
page2Animation();