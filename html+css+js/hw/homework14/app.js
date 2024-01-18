let button = document.getElementById("check");
let buttonRemove = document.getElementById("remove");
let innerText = document.getElementById("input");

let list = [
  "Murat Nurassyl",
  "Aбдыраимова Бибигуль",
  "Асубаева Еркежан",
  "Курманов Талгат",
  "Дакеева Мадина",
  "Матенов Нургазы Асенбаевич",
  "Ахметжанов Айдархан",
  "Алдабергенов Балабай",
];
let paragraph = document.createElement("p");
paragraph.textContent = `Список людей: ${list}`;
paragraph.style.background = "beige";
document.body.append(paragraph);

/* push */
button.addEventListener("click", myFunction);
function myFunction() {
  list.push(innerText.value);
  paragraph.textContent = `Список людей: ${list}`;
}

/* pop */
buttonRemove.addEventListener("click", functionRemove);
function functionRemove() {
  list.pop();
  paragraph.textContent = `Список людей: ${list}`;
}

/* concat */
var countries = ["Россия", "США", "Китай"];
var cities = ["Астана", "Алматы", "Шымкент"];
let paragraphCountries = document.createElement("p");
paragraphCountries.textContent = `Список стран: ${countries}`;
document.body.append(paragraphCountries);
let paragraphCities = document.createElement("p");
paragraphCities.textContent = `Список стран: ${cities}`;
document.body.append(paragraphCities);
let buttonJoin = document.getElementById("join");
buttonJoin.addEventListener("click", functionConcat);
function functionConcat() {
  let all = countries.concat(cities);
  let paragraphJoined = document.createElement("p");
  paragraphJoined.textContent = `Список стран и городов: ${all}`;
  document.body.append(paragraphJoined);
}

/* reverse */
let buttonReverse = document.getElementById("checkReverse");
let innerTextReverse = document.getElementById("inputReverse");
buttonReverse.addEventListener("click", functionReverse);
function functionReverse() {
  let split = innerTextReverse.value.split(" ");
  split.reverse();
  let reversedText = split.join(" ");
  let paragraphReverse = document.createElement("p");
  paragraphReverse.textContent = `Перевернутый текст: ${reversedText}`;
  document.body.append(paragraphReverse);
}

/* map */
var names = ["Balabay", "Moldir", "Temirlan", "Sayan"];
let paragraphMapList = document.createElement("p");
paragraphMapList.textContent = `Изначальный текст ${names}`;
document.body.append(paragraphMapList);
var nameLengths = names.map(function (name) {
  return name.length;
});
let paragraphMap = document.createElement("p");
paragraphMap.textContent = `Преобразование текста в количество символов: ${nameLengths}`;
document.body.append(paragraphMap);

/* slice */
let paragraphSlice = document.createElement("p");
paragraphSlice.textContent = `метод slice: ${names.slice(2)}`;
document.body.append(paragraphSlice);

/* shift */
let shifted = names.shift();
let paragraphShifted = document.createElement("p");
paragraphShifted.textContent = `метод shifted: ${names}`;
document.body.append(paragraphShifted);
let paragraphShiftedDeleted = document.createElement("p");
paragraphShiftedDeleted.textContent = `Удаленный элемент: ${shifted}`;
document.body.append(paragraphShiftedDeleted);
