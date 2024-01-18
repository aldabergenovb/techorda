console.log("Hello World!");
/* Переменные вызов перед обьявлением */
/* переназначение значения переменным var let const
var a = 1;
let b = 2;
const c = 3;

console.log(a);
console.log(b);
console.log(c);

a = 10;
b = 20;
// TYPE ERROR:
c = 30;

console.log(a);
console.log(b);
console.log(c);
*/

/*Обращение до обьявления
// ReferenceError
console.log(a)
let a = 10
console.log(a)

console.log(a)
const a = 10
console.log(a)
*/

/* undefined - нет значения но существует, var имеет большую видимость, его видно даже до самой инициализация
console.log(a)
var a = 10
console.log(a)
*/

/* Пример найти число четное или нечетное 

// ВВОД: 11 ВЫВОД: 12
// ВВОД: 4 - ВЫВОД: OK
let a = 11;

if (a % 2 == 0) {
  console.log("OK");
} else {
    console.log(++a)
}
*/

/* Increment Decrement 
a = 100

// a+1
// ++a
// a++

// --a
// a--

// console.log(++a)
// console.log(a)
*/

/* html */

/* Задание посчитать возраст человека от года рождения 
// 2000 23
let inputEl = document.getElementById('input')
let buttonEl = document.getElementById('submit')
let resultEl = document.getElementById('result')

const currentYear = 2023

buttonEl.onclick = function(){
    let birthYear = Number(inputEl.value)
    const age = currentYear - birthYear

    resultEl.textContent = age
}
*/

/* хлеб - 500, вода - 300, количество, найти к оплате
let inputEl1 = document.getElementById('input1')
let inputEl2 = document.getElementById('input2')

let buttonEl = document.getElementById('submit')
let resultEl = document.getElementById('result')

const priceX = 500
const priceY = 300

buttonEl.onclick = function(){

    let x = Number(inputEl1.value)
    let y = Number(inputEl2.value)
    
    const result = x*priceX + y*priceY

    resultEl.textContent = result
}
*/

/* Пример дается три числа надо найти результат по формуле x² + y - z:2 

let x = 3;
let y = 2;
let z = 4;

let result = x * x + (y - z) / 2;

console.log(result);
*/

/* != не равно ли 

// let num = 11;

// if (num % 2 != 0) {
//   console.log("Не Четное");
// }

// let num1 = 13
// let num2 = 9

// if(num1 != num2){
//     console.log("Цифры разные")
// }

*/

/* math operators in short */
/* Тернарный Оператор */
/* += -= *= /= (a = a + b)*/
/* == != > < && || >= <= === */

/* Задание найти среднее из двух чисел 
ВВОД: 5 9 ВЫВОД: 7
ВВОД: 3 4 ВЫВОД: 3.5
*/

/*  Задание посчитать остаток при делении 
    и вытащить сколько нужно добавить к первому числу(если надо) чтобы делилось без остатка
    
ВВОД: 10 7 ВЫВОД: 3
ВВОД: 10 10 ВЫВОД: OK
ВВОД: 7 10 ВЫВОД: 7 3

Подсказка: если первое число больше то не надо прибавлять
*/
