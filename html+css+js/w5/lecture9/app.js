// alert("Hello World")

// console.log("Hello World")

// let a = +prompt("First number");
// let b = +prompt("Second number");
// let c = +prompt("third number");
// alert(a + b + c);
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// let firstName = "Balabay";
// let lastName = "Aldabergenov";
// console.log(firstName + " " + lastName);

// let text = prompt("What is your Last Name?");
// let text1 = prompt("What is your FirstName?");
// alert("Hello" + " " + text + " " + text1);

// let a = "10";
// let b = 10;
// console.log(typeof a);
// console.log(typeof b);
// switch{
//     case
// }
// let a = +prompt("Введите Ваш возраст");
// if (a >= 18) alert("Вам есть 18");
// else alert("Вам нет 18");

// let a = +prompt("First number");
// let b = +prompt("Second number");
// console.log(sum(a, b));
// function sum(a, b) {
//   let plus = a + b;
//   let minus = a - b;
//   let umnojit = a * b;
//   let delit = a / b;
//   return (
//     "Результат + " +
//     plus +
//     " " +
//     "Результат - " +
//     minus +
//     " " +
//     "Результат * " +
//     umnojit +
//     " " +
//     "Результат / " +
//     delit
//   );
// }

let inputEl = document.getElementById("my-input");
let buttonEl = document.getElementById("my-button");
let resultEl = document.getElementById("result");
buttonEl.onclick = function () {
  if (inputEl.value >= 18) {
    resultEl.textContent = "Вам есть 18";
  } else {
    resultEl.textContent = "Вам нет 18";
  }
};
