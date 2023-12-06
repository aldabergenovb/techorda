/* #1 */
let button = document.getElementById("buttonCheck");
let number = document.getElementById("numberCheck");
let result = document.getElementById("resultCheck");

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

/* #2 */
let button2_1 = document.getElementById("button2_1");
let number2_1 = document.getElementById("number2_1");
let result2_1 = document.getElementById("result2_1");
let res = 2;

button2_1.onclick = function () {
  result2_1.textContent = null;
  for (let i = 1; i < +number2_1.value; i++) {
    2 *= 2;
    result2_1.textContent = res;
  }
};
