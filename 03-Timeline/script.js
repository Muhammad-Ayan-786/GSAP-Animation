/*
<---------------- PROBLEM ----------------->

// CODE
gsap.to(".box1", {
  x: 1100,
  rotate: 360,
  duration: 1.5,
  delay: 1,
})

gsap.to(".box2", {
  x: 1100,
  duration: 1.5,
  delay: 2.5,
  background: 'yellow'
})

gsap.to(".box3", {
  x: 1100,
  scale: 0.5,
  borderRadus: '50%',
  duration: 1.5,
  delay: 4,
  background: 'brown'
})


// PROBLEM
To run animation one by one, u have to wait for the previous animation to finish. And how to do that?

To do that, u have to :
Calculate the delay & duration of the previous animation

Eg:

1st animation (box1) - x: 1100, duration: 1.5, delay: 1
[ deray: 1 + duration: 1.5 = 2.5 ]

2nd animation (box2) - x: 1100, duration: 1.5, delay: 2.5
[ deray: 2.5 + duration: 1.5 = 4 ]

3rd animation (box3) - x: 1100, duration: 1.5, delay: 4

and so on ...

To do things like this, in GSAP, u have to use Timeline
*/

// Solution (Animated Boxes)
let gsap_timeline = gsap.timeline()

gsap_timeline.to(".box1", {
  x: 1100,
  rotate: 360,
  duration: 1.5,
  delay: 1,
})

gsap_timeline.to(".box2", {
  x: 1100,
  duration: 1.5,
  background: 'yellow'
})

gsap_timeline.to(".box3", {
  x: 1100,
  scale: 0.5,
  borderRadus: '50%',
  duration: 1.5,
  background: 'maroon'
})



// <---------------- Another Example ----------------->

// Animated Navbar with Timeline
let tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5
})

tl.from("h4", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3
})

tl.from("p", {
  fontSize: 0,
  opacity: 0,
  rotate: 360,
  duration: 1,
  delay: 0.5,
  stagger: 0.3
})