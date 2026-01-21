/*
 * ============================================
 * SCROLLTRIGGER BASICS
 * ============================================
 * 
 * ScrollTrigger is a GSAP plugin that lets you trigger animations
 * based on scroll position. Instead of animations playing immediately,
 * they wait until the user scrolls to a specific element or position.
 * 
 * Think of it like: "When the user scrolls to THIS element, THEN play THIS animation"
 */

// <---------------- PAGE 1 ----------------->
// This animation plays immediately when the page loads (no ScrollTrigger)
// The box starts invisible and scaled down, then animates in
gsap.from(".page1 .box", {
  scale: 0,        // Start at 0% size
  rotate: 360,     // Start rotated 360 degrees
  opacity: 0,      // Start invisible
  duration: 2,     // Animation takes 2 seconds
  delay: 1,        // Wait 1 second before starting
})

// <---------------- PAGE 2 ----------------->
// This animation uses ScrollTrigger - it only plays when you scroll to the element
gsap.from(".page2 .box", {
  scale: 0,
  rotate: 360,
  opacity: 0,
  duration: 2,
  
  // ScrollTrigger configuration object
  // This tells GSAP WHEN to trigger the animation based on scroll position
  scrollTrigger: {
    // trigger: The element that "triggers" the animation
    // When this element enters the viewport, the animation starts
    // Format: CSS selector string (like ".page2 .box")
    trigger: ".page2 .box",
    
    // scroller: Which element is being scrolled
    // Usually "body" for normal page scroll, or a container element
    // This is the scrollable container you want to watch
    scroller: "body",
    
    // markers: Shows visual markers on the page (for debugging)
    // true = show markers, false/undefined = hide markers
    // Markers help you see exactly where the animation starts/ends
    // markers: true, // Uncomment to see the trigger points
    
    // start: When the animation should START
    // Format: "triggerPosition viewportPosition"
    // "top 60%" means: "When the TOP of the trigger element reaches 60% from the TOP of the viewport"
    // Other examples:
    //   "top center" = when top of trigger hits center of viewport
    //   "bottom top" = when bottom of trigger hits top of viewport
    //   "center 80%" = when center of trigger hits 80% down the viewport
    start: "top 60%",
  }
})



// <---------------- PAGE 3 ----------------->
// Animating heading: slides in from the RIGHT
gsap.from(".page3 h1", {
  opacity: 0,      // Start invisible
  duration: 2,     // Animation duration: 2 seconds
  x: 300,          // Start 300px to the RIGHT (positive = right, negative = left)
  
  scrollTrigger: {
    trigger: ".page3 h1",  // Trigger when h1 enters viewport
    scroller: "body",      // Watch body scroll
    start: "top 50%",      // Start when top of h1 reaches middle of viewport
    // markers: true,       // Uncomment to see trigger point
  }
})

// Animating paragraph: slides in from the LEFT
gsap.from(".page3 p", {
  opacity: 0,      // Start invisible
  duration: 2,     // Animation duration: 2 seconds
  x: -300,         // Start 300px to the LEFT (negative = left)
  
  scrollTrigger: {
    trigger: ".page3 p",   // Trigger when paragraph enters viewport
    scroller: "body",      // Watch body scroll
    start: "top 50%",      // Start when top of paragraph reaches middle of viewport
    // markers: true,       // Uncomment to see trigger point
  }
})



// <---------------- PAGE 4 ----------------->
// Advanced ScrollTrigger example with scrubbing and pinning
gsap.from(".page4 .box", {
  scale: 0,        // Start at 0% size
  rotate: 720,     // Start rotated 720 degrees (2 full rotations)
  opacity: 0,      // Start invisible
  duration: 2,     // Animation duration: 2 seconds
  
  scrollTrigger: {
    trigger: ".page4 .box",  // Element that triggers the animation
    scroller: "body",    // Element being scrolled
    
    // markers: Shows visual indicators on the page
    // Green = start point, Red = end point, Purple = trigger element
    // Very helpful for debugging and understanding scroll positions!
    markers: true,
    
    // start: When the animation STARTS
    // "top 60%" = when top of trigger element reaches 60% down the viewport
    start: "top 60%",
    
    // end: When the animation ENDS (only used with scrub)
    // "top 20%" = when top of trigger element reaches 20% down the viewport
    // The animation will play over the scroll distance between start and end
    end: "top 20%",
    
    // scrub: Links animation progress directly to scroll position
    // Without scrub: Animation plays once when you reach the trigger
    // With scrub: Animation progress = scroll progress (smoothly follows scroll)
    // 
    // Values:
    //   scrub: true  = animation follows scroll (rough, immediate)
    //   scrub: 1-5   = animation follows scroll with smoothing (higher = smoother)
    //   scrub: 2     = smooth scrubbing with 2-second lag (recommended)
    //   No scrub     = animation plays once when trigger is reached
    //
    // Think of it like: "As I scroll, the animation plays forward/backward"
    scrub: 2,  // Smooth scrubbing (2-second smoothing)
    // scrub: true,  // Rough scrubbing (no smoothing)
    
    // pin: "Pins" or locks the trigger element in place while scrolling
    // true = pin the trigger element itself
    // CSS selector = pin a different element
    // 
    // What happens: The element stays fixed in the viewport while you scroll
    // through the start-to-end range, then releases when you reach the end
    // 
    // Visual effect: Element appears to "stick" to the screen while scrolling
    pin: true,
  }
})

/*
 * ============================================
 * SCROLLTRIGGER PROPERTIES SUMMARY
 * ============================================
 * 
 * trigger:     Element that triggers the animation (CSS selector)
 * scroller:    Element being scrolled (usually "body")
 * start:       When animation starts ("triggerPosition viewportPosition")
 * end:         When animation ends (used with scrub)
 * markers:     Show/hide debug markers (true/false)
 * scrub:       Link animation to scroll (true or 1-5 for smoothness)
 * pin:         Pin element during scroll (true or CSS selector)
 * 
 * Common start/end formats:
 *   "top center"    = top of trigger hits center of viewport
 *   "top 60%"       = top of trigger hits 60% down viewport
 *   "bottom top"    = bottom of trigger hits top of viewport
 *   "center 80%"    = center of trigger hits 80% down viewport
 */