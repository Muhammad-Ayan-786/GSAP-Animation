gsap.from("h1", { // All h1 will get sellected
  duration: 1,
  delay: 1,
  opacity: 0,
  y: 20,
  stagger: 0.3, // Delay between each element
})

gsap.to(".box", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: 1, // Repeat animation (READ THE NOTE BELOW)
  // repeat: -1, // Repeat animation infinite times
  yoyo: true, // (READ THE NOTE BELOW)
})

/*
<----- Stagger ----->
Stagger means run animation one by one on bunch of elements. Ex: h1, p, .btns etc

stagger: 1 -> // Run from top to bottom
stagger: -1 -> // Run from bottom to top


<----- Repeat ----->
Minimum Animation always run once, but the repeat value runs the animation multiple times.

Animation on .box = Animation run once
repeat = 2 -> Animation run twice

TOTAL ANIMATION = animation (1) + repeat (2) = 3

repeat: -1 -> Animation run infinite times


<----- Yoyo ----->
Yoyo means run animation from initial position to final position and then run animation from final position to initial position.
*/