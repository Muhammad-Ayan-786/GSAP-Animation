function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let textArr = h1Text.split('');
  let clutter = '';
  let halfValue = Math.floor(textArr.length / 2);

  textArr.forEach((char, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="firstHalf">${char}</span>` // Same as: clutter = clutter + char
    } else {
      clutter += `<span class="secondHalf">${char}</span>` // Same as: clutter = clutter + char
    }
  })

  h1.innerHTML = clutter
}

breakTheText();

gsap.from("h1 .firstHalf", {
  y: 50,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: 0.15,
})

gsap.from("h1 .secondHalf", {
  y: 50,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: -0.15,
})