const luckyone = document.getElementById("one");
const luckytwo = document.getElementById("two");
const luckythree = document.getElementById("three");
const luckyfour = document.getElementById("four");
const luckyfive = document.getElementById("five");
const luckysix = document.getElementById("six");
const luckyseven = document.getElementById("seven");
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  numberone();
  numbertwo();
  numberthree();
  numberfour();
  numberfive();
  numbersix();
  numberseven();
});

function numberone() {
  luckyone.value = Math.floor(Math.random() * 39) + 1;
  luckyone.innerText = luckyone.value
}
function numbertwo() {
  luckytwo.value = Math.floor(Math.random() * 39)+ 1;
  luckytwo.innerText = luckytwo.value
}
function numberthree() {
  luckythree.value = Math.floor(Math.random() * 39)+ 1;
  luckythree.innerText = luckythree.value
}
function numberfour() {
  luckyfour.value = Math.floor(Math.random() * 39 )+ 1;
  luckyfour.innerText = luckyfour.value
}
function numberfive() {
  luckyfive.value = Math.floor(Math.random() * 39) + 1;
  luckyfive.innerText = luckyfive.value
}
function numbersix() {
  luckysix.value = Math.floor(Math.random() * 39) + 1;
  luckysix.innerText = luckysix.value
}
function numberseven() {
  luckyseven.value = Math.floor(Math.random() * 39) + 1;
  luckyseven.innerText = luckyseven.value
}
