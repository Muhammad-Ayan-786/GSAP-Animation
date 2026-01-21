/*
  PIN IN REAL LIFE (Beginner Explanation)

  Goal: As you scroll, the <h1> inside .page2 moves horizontally.
  Also, .page2 gets "pinned" (stays fixed) for some scroll distance,
  so it feels like the section is stuck while the animation happens.
*/

// gsap.to() means: animate FROM the current state TO the values we give.
gsap.to(".page2 h1", {
  // Move the heading to the left.
  // Using transform keeps it smooth and fast in the browser.
  transform: "translateX(-64%)",

  // ScrollTrigger controls WHEN and HOW this animation runs on scroll.
  scrollTrigger: {
    // trigger = the element whose position in the viewport controls the start/end.
    // Tip: When using pin, it's best to pin/trigger the SECTION (parent),
    // not the moving child element (like the h1), so layout stays stable.
    // trigger: ".page2 h1",
    trigger: ".page2",

    // scroller = which element is actually scrolling.
    // For normal pages, it's usually "body".
    scroller: "body",

    // markers = shows start/end markers on screen (debugging helper).
    // Turn this off later by setting it to false or removing it.
    markers: true,

    // start = when to start the effect.
    // "top 0%" means: when the TOP of .page2 hits the TOP of the viewport.
    start: "top 0%",

    // end = when to finish the effect.
    // "top -200%" means: keep going until the TOP of .page2 has moved
    // 200% ABOVE the top of the viewport (a longer scroll distance).
    end: "top -200%",

    // scrub = connect animation progress to scroll position.
    // Number value adds smoothness (higher = smoother/slower catching up).
    scrub: 2,

    // pin = keep the trigger element fixed in place during start -> end.
    // This creates the "pinned section" effect.
    pin: true,
  },
});