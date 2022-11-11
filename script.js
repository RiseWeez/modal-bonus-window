// Values changing upon slider moves

let bonusValue = 2000;
let maxDiscount = 9999;
let itemPrice = 10000;
let currencyValue = bonusValue;

itemPriceInput.oninput = function changeItemPrice() {
  let itemPriceInput = document.getElementById("itemPriceInput").value;
  document.getElementById('itemPrice').innerHTML = itemPriceInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  console.log(isNaN(itemPriceInput));
}

maxDiscountInput.oninput = function changeMaxDiscount() {
  let maxDiscountInput = document.getElementById("maxDiscountInput").value;
  document.getElementById('maxDiscount').innerHTML = maxDiscountInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

bonusValueInput.oninput = function changeBonusValue() {
  let bonusValueInput = document.getElementById("bonusValueInput").value;
  document.getElementById('bonusValue').innerHTML = bonusValueInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  bonusValue = currencyValue
  console.log(isNaN(bonusValueInput));
}

function rangeSlide(value) {
  const priceDiff = itemPrice - value
  document.getElementById('selectedDiscount').innerHTML = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('discountBonusValue').innerHTML = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('finalPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  document.getElementById('selectedDiscount').style.color = '#00a93e';
  document.getElementById('discountBonusValue').style.color = '#00a93e';

  if (value > bonusValue) {
    document.getElementById('selectedDiscount').style.color = 'red';
    document.getElementById('discountBonusValue').style.color = 'red';
  }
  // console.log(typeof itemPriceInput);
}

document.getElementById('bonusValue').innerHTML = bonusValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('currencyValue').innerHTML = currencyValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('maxDiscount').innerHTML = maxDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('itemPrice').innerHTML = itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');


// Input range limit

const input = document.querySelector('.range');

input.addEventListener('change', () => {
  if (input.value > bonusValue) input.value = bonusValue;
});

// Background
const target = document.querySelectorAll('input[type="range"]')[0];
target.value = bonusValue;
const min = target.min;
target.max = maxDiscount;

target.style.backgroundSize = ((bonusValue - min) * 100) / (maxDiscount - min) + '% 100%';






