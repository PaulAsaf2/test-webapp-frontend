'use strict'

const sliderEl = document.querySelector("#range")

sliderEl.addEventListener("input", (event) => {
  let sliderValue = event.target.value;
  let percent = (sliderValue == 2) ? 25
              : (sliderValue == 3) ? 50
              : (sliderValue == 4) ? 75
              : (sliderValue == 5) ? 100
              : 0;

  sliderEl.style.background = `
    linear-gradient(to right, #5C52C0 ${percent}%, #F1F0F2 ${percent}%)`;
})
