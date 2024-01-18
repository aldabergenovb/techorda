let a = 0;
// for (var i = 0; i < 10; i++) {
//   a++;
//   console.log(a);
// }

// for (var i = 1; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let num = +prompt("Введите число");
// for (var i = 0; i < num; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

/*
 *
 *
 *
 *
 *
 */
// let s = [];
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     if (j == i) {
//       s.push("*");
//     } else {
//       s.push("");
//     }
//   }
// }

// console.log(s.join("\n"));

// function greation() {
//   const name = `Ваше имя: ${prompt("Как вас зовут?")}`;
//   const lastname = `Ваше фамилия: ${prompt("Ваша фамилия")}`;
//   const proffession = `Ваша профессия: ${prompt("Ваша проффессия")}`;
//   console.log(name + "\n" + lastname + "\n" + proffession);
// }
// greation();

let element = document.getElementById("clickme");
element.addEventListener("click", myClick());

function myClick() {
  for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
