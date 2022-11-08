// const span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// Values changing upon slider moves

const bonusValue = 6000;
const currencyValue = bonusValue;

function rangeSlide(value) {
  document.getElementById('rangeValue').innerHTML = value;
  document.getElementById('rangeValue1').innerHTML = value;
  document.getElementById('finalPrice').innerHTML = 10000 - value;

  document.getElementById('rangeValue').style.color = '#00a93e';
  document.getElementById('rangeValue1').style.color = '#00a93e';

  if (value > bonusValue) {
    document.getElementById('rangeValue').style.color = 'red';
    document.getElementById('rangeValue1').style.color = 'red';
  }

  // console.log(value);
}

document.getElementById('bonusValue').innerHTML = bonusValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('currencyValue').innerHTML = currencyValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// Input range limit

const input = document.querySelector('input');

input.addEventListener('change', () => {
  if (input.value > bonusValue) input.value = bonusValue;
});

// Background
// const bonusValue = document.getElementById("bonusValue").innerText
const target = document.querySelectorAll('input[type="range"]')[0];
target.value = bonusValue;
const min = target.min;
const max = target.max;
// const val = Number(bonusValue.split(' ').join(''))

target.style.backgroundSize = ((bonusValue - min) * 100) / (max - min) + '% 100%';

console.log(bonusValue);

// const rangeInputs = document.querySelectorAll('input[type="range"]')
// const numberInput = document.querySelector('input[type="number"]')
// function handleInputChange(e) {
//   let target = e.target
//   if (e.target.type !== 'range') {
//     target = document.getElementById('range')
//   }
//   const min = target.min
//   const max = target.max
//   const val = target.value

//   target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
// }

// rangeInputs.forEach(input => {
//   input.addEventListener('input', handleInputChange)
// })

// numberInput.addEventListener('input', handleInputChange)
