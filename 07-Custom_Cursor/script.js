let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let imgCont = document.querySelector(".img_cont");

// On Main Page ...
main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.6,
    ease: "back.out(1.7)",
  })
})


// On Image Container ...
imgCont.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More"

  gsap.to(cursor, {
    scale: 2,
    background: "#ffffff8a",
  })
})

imgCont.addEventListener("mouseleave", () => {
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale: 1,
    background: "#fff",
  })
})