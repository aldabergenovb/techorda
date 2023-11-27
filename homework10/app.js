let inputEl1 = document.getElementById("input1");
let inputEl2 = document.getElementById("input2");

let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let divideBtn = document.getElementById("divide");
let increaseBtn = document.getElementById("increase");

let submitEl = document.getElementById("submit");
let resultEl = document.getElementById("result");

let operator;

plusBtn.onclick = function () {
  operator = "+";
};

minusBtn.onclick = function () {
  operator = "-";
};

divideBtn.onclick = function () {
  operator = "/";
};

increaseBtn.onclick = function () {
  operator = "*";
};

submitEl.onclick = function () {
  let x = Number(inputEl1.value);
  let y = Number(inputEl2.value);
  let result = 0;
  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "/":
      result = x / y;
      break;
    case "*":
      result = x * y;
      break;
  }

  resultEl.textContent = result;
};
