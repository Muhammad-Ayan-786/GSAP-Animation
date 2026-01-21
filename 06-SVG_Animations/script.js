let initialPath = `M 10 120 Q 650 120 1290 120`;

let finalPath = `M 10 120 Q 650 120 1290 120`;

let string = document.querySelector(".string");

string.addEventListener("mousemove", (dets) => {
  initialPath = `M 10 120 Q ${dets.x} ${dets.y} 1290 120`;

  gsap.to("svg path", {
    attr: { // attr can be used to change any attribute of the element. (In here elem is svg path)
      d: initialPath
    },
    duration: 0.2,
    ease: "power3.out",
  })
})

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  })
})