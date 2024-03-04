'use strict'

const input = document.getElementById('range')

input.addEventListener('input', (event) => {
  let curValue = event.target.value;
  let progress = (curValue / input.max) * 100;

  input.style.background = `linear-gradient(to right, black ${progress}%, white ${progress}%)`

})