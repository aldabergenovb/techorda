/* #1 */
let inputEl = document.getElementById("age");
let buttonEl = document.getElementById("check");
let resultEl = document.getElementById("result");
let today = new Date();
let birthDay = new Date(inputEl.value);
buttonEl.onclick = function () {
  debugger;
  let age = today.getFullYear() - birthDay.getFullYear();
  resultEl.textContent = age;
};

/* #2 */
let inputBred = document.getElementById("bred");
let inputwater = document.getElementById("water");
let buttonRes = document.getElementById("sum");
let resultCalc = document.getElementById("resultCalc");
const bredSum = 500;
const waterSum = 300;
buttonRes.onclick = function () {
  resultCalc.textContent =
    +inputBred.value * bredSum + +inputwater.value * waterSum;
};

/* #3 */
function numberToWords(number) {
  const ones = [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
  ];
  const teens = [
    "",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];
  const tens = [
    "",
    "десять",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];
  const hundreds = [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ];
  const thousands = ["", "тысяча", "тысячи", "тысяч"];

  function convertToWords(num) {
    if (num < 10) {
      return ones[num];
    } else if (num < 20) {
      return teens[num - 10];
    } else if (num < 100) {
      return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    } else if (num < 1000) {
      return hundreds[Math.floor(num / 100)] + " " + convertToWords(num % 100);
    } else if (num < 1000000) {
      return (
        convertToWords(Math.floor(num / 1000)) +
        " " +
        thousands[getThousandsIndex(num)] +
        " " +
        convertToWords(num % 1000)
      );
    }
  }

  function getThousandsIndex(num) {
    const lastDigit = num % 10;
    if (lastDigit === 1 && num % 100 !== 11) {
      return 1; // тысяча
    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      (num % 100 < 10 || num % 100 >= 20)
    ) {
      return 2; // тысячи
    } else {
      return 3; // тысяч
    }
  }

  if (number === 0) {
    return "ноль";
  } else {
    return convertToWords(number);
  }
}

const sum = 55;
const sumInWords = numberToWords(sum);
console.log(`${sum} прописью: ${sumInWords}`);
