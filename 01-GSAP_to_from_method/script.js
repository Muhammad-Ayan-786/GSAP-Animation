gsap.to(".box1", {
  x: 500,
  duration: 2, // Duration means the animation will run for 2s
  delay: 1, // Delay means the animation will start after 1s
  rotate: 360, // U can also write CSS props but in CamelCase
  borderRadius: "50%"
})

gsap.from(".box2", {
  x: 500,
  duration: 1,
  delay: 1,
  borderRadius: "50%",
})


/*
Animation is just an element moving from it's initial position to it's final position

gsap.to - Going from initial to final position
gsap.from - Coming from final to initial position
*/