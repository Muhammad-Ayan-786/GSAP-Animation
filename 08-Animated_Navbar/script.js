// const tl = gsap.timeline({ pause: true }); // By writing paused: true, we tell GSAP to not run the animation automatically
const tl = gsap.timeline();

tl.to(".full", {
  right: "0",
  duration: 0.5,
});

tl.from(".full h4", {
  x: 150,
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
});

tl.from(".full i", {
  opacity: 0,
  rotate: 145,
  duration: 0.3,
});

tl.pause();


const menu = document.querySelector(".nav i");
const close = document.querySelector(".full i");

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
})