/* #1 
let animals = ["cat", "mouse", "dog"];
console.log(animals);
console.log("--------");

animals.push("elephants");
console.log(animals);
console.log("--------");

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]); //undefined
console.log("--------");

console.log(animals[animals.length - 1]);
console.log("--------");
*/

/* #2 
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
numbers.push(100);
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
*/

/* #3 
let names = ["Balabay", "Saule", "Aidarhkan", "Madina", "Bibigul"];
for (let i = 0; i < names.length; i++) {
  if (names[i] == "Saule") {
    console.log(`Учитель: ${names[i]}`);
  } else {
    console.log(`Ученик: ${names[i]}`);
  }
}*/

/* #4 
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i + 1);
}
console.log(numbers);*/

/* #5 
let numbers = [1, 1, 1, 1, 0, 0, 0, 1, 1];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    numbers[i] = 1;
  }
}
console.log(numbers); */

/* #6 
let numbers = [];
numbers.push(1, 2, 3, 4, 5);
console.log(numbers); */

/* #7 
let text = [
  "Murat Nurassyl",
  "Aбдыраимова Бибигуль",
  "Асубаева Еркежан",
  "Курманов Талгат",
  "Дакеева Мадина",
  "Матенов Нургазы Асенбаевич",
  "Ахметжанов Айдархан",
  "Алдабергенов Балабай",
];
for (let i in text) {
  if (text[i].includes("Балабай")) {
    console.log(true);
    break;
  }
}*/

/* #8 
let firstName = "Balabay";
console.log(firstName.indexOf("bay"));
console.log(firstName.slice(4));
*/
