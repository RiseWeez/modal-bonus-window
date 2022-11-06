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

function rangeSlide(value) {

    document.getElementById('rangeValue').innerHTML = value;
    document.getElementById('rangeValue1').innerHTML = value;
    document.getElementById('finalPrice').innerHTML = 10000 - value;

    // console.log(value);
}

// Input range limit

const input = document.querySelector("input");
const sliderLimit = 1000;


input.addEventListener("change", () => {
  if (input.value > sliderLimit)
    input.value = sliderLimit;
})



// Background 

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

