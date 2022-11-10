// Values changing upon slider moves

let bonusValue = 3000;
let maxDiscount = 7999;
let itemPrice = 8000;
const currencyValue = bonusValue;

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

function changeItemPrice() {
  const itemPriceInput = document.getElementById("itemPriceInput").value;
  itemPrice = itemPriceInput
}

function changeMaxDiscount() {
  const maxDiscountInput = document.getElementById("maxDiscountInput").value;
  maxDiscount = maxDiscountInput
}

function changeBonusValue() {
  let bonusValueInput = document.getElementById("bonusValueInput").value;
  bonusValue = bonusValueInput
}

