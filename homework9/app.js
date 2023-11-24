/* homework #1 */
let inputEl = document.getElementById("number1");
let inputEl2 = document.getElementById("number2");
let buttonEl = document.getElementById("my-button");
let resultEl = document.getElementById("result");
buttonEl.onclick = function () {
  resultEl.textContent = +inputEl.value + +inputEl2.value;
};

/* homework #2 */
let inputCheck = document.getElementById("numberCheck");
let buttonCheck = document.getElementById("buttonCheck");
let resultCheck = document.getElementById("resultCheck");
buttonCheck.onclick = function () {
  if (+inputCheck.value > 0) {
    resultCheck.textContent = "Positive";
  } else if (+inputCheck.value == 0) {
    resultCheck.textContent = "Zero";
  } else {
    resultCheck.textContent = "Negative";
  }
};

/* homework #3 */
let inputEvenCheck = document.getElementById("numberEvenCheck");
let buttonEvenCheck = document.getElementById("buttonEvenCheck");
let resultEvenCheck = document.getElementById("resultEvenCheck");
buttonEvenCheck.onclick = function () {
  if (+inputEvenCheck.value % 2 == 0) resultEvenCheck.textContent = "Yes";
  else resultEvenCheck.textContent = +inputEvenCheck.value + 1;
};

/* homework #4 */
let inputCalc1 = document.getElementById("numberCalc1");
let inputCalc2 = document.getElementById("numberCalc2");
let buttonCalc = document.getElementById("buttonCalc");
let resultCalc = document.getElementById("resultCalc");
buttonCalc.onclick = function () {
  resultCalc.textContent = calc(+inputCalc1.value, +inputCalc2.value);
};

function calc(a, b) {
  let plus = a + b;
  let minus = a - b;
  let umnojit = a * b;
  let delit = a / b;
  return plus + " " + minus + " " + umnojit + " " + delit;
}

/* homework #5 */
let lenght = document.getElementById("lenght");
let circumference = document.getElementById("circumference");
let gender = document.getElementById("gender");
let button = document.getElementById("getFat");
let resultGender = document.getElementById("resultGender");

button.onclick = function () {
  if (gender.value == "male") {
    resultGender.textContent = 64 - (20 * +lenght.value) / +circumference.value;
  } else {
    resultGender.textContent = 76 - (20 * +lenght.value) / +circumference.value;
  }
};
