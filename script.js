// Values changing upon slider moves

let bonusValue = 2000;
let maxDiscount = 9999;
let itemPrice = 10000;
let currencyValue = bonusValue;

document.getElementById('bonusValue').innerHTML = bonusValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('currencyValue').innerHTML = currencyValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('maxDiscount').innerHTML = maxDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('itemPrice').innerHTML = itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

itemPriceInput.oninput = function changeItemPrice() {
  let itemPriceInput = document.getElementById('itemPriceInput').value;
  document.getElementById('itemPrice').innerHTML = itemPriceInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  itemPrice = itemPriceInput;
  console.log(isNaN(itemPriceInput));
};

maxDiscountInput.onchange = function changeMaxDiscount() {
  let maxDiscountInput = (document.getElementById('maxDiscountInput').value / 100) * itemPrice;
  document.getElementById('maxDiscount').innerHTML = Math.floor(maxDiscountInput)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  let target = document.querySelectorAll('input[type="range"]')[0];
  target.value = bonusValue;
  let min = target.min;
  target.max = maxDiscountInput;

  target.style.backgroundSize = ((bonusValue - min) * 100) / (maxDiscountInput - min) + '% 100%';
};

bonusValueInput.onchange = function changeBonusValue() {
  let bonusValueInput = document.getElementById('bonusValueInput').value;
  document.getElementById('bonusValue').innerHTML = bonusValueInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('currencyValue').innerHTML = bonusValueInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  currencyValue = bonusValue;
  bonusValue = +bonusValueInput;

  let target = document.querySelectorAll('input[type="range"]')[0];
  target.value = bonusValueInput;
  let min = target.min;
  target.max = maxDiscount;

  target.style.backgroundSize = ((bonusValueInput - min) * 100) / (maxDiscount - min) + '% 100%';
};

function rangeSlide(value) {
  const priceDiff = itemPrice - value;
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

// Input range limit

const input = document.querySelector('.range');

input.addEventListener('change', () => {
  if (input.value > bonusValue) input.value = bonusValue;
});

// Background
window.onload = function setSliderRange() {
  let target = document.querySelectorAll('input[type="range"]')[0];
  target.value = bonusValue;
  let min = target.min;
  target.max = maxDiscount;

  target.style.backgroundSize = ((bonusValue - min) * 100) / (maxDiscount - min) + '% 100%';
};
