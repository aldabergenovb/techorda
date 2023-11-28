/* #1 */
let input1_1 = document.getElementById("number1_1");
let input1_2 = document.getElementById("number1_2");
let button1_1 = document.getElementById("check1_1");
let result1_1 = document.getElementById("result1_1");
button1_1.onclick = function () {
  result1_1.textContent = (+input1_1.value + +input1_2.value) / 2;
};

/* #2 */
let input2_1 = document.getElementById("number2_1");
let input2_2 = document.getElementById("number2_2");
let button2_1 = document.getElementById("check2_1");
let result2_1 = document.getElementById("result2_1");
button2_1.onclick = function () {
  result2_1.textContent = +input2_1.value % +input2_2.value;
};

/* #3 */
let input3_1 = document.getElementById("number3_1");
let input3_2 = document.getElementById("number3_2");
let button3_1 = document.getElementById("check3_1");
let result3_1 = document.getElementById("result3_1");
let formatTime = document.getElementById("formatTime");
button3_1.onclick = function () {
  if (formatTime.value == "pm") {
    result3_1.textContent = +input3_1.value + 12 + " " + +input3_2.value;
  } else {
    result3_1.textContent = input3_1.value + ":" + input3_2.value;
  }
};

/* #4 */
let input4_1 = document.getElementById("number4_1");
let button4_1 = document.getElementById("check4_1");
let result4_1 = document.getElementById("result4_1");
button4_1.onclick = function () {
  let date = new Date(+input4_1.value, 1, 29).getDate();
  if (date == 29) {
    result4_1.textContent = "Yes";
  } else {
    result4_1.textContent = "No";
  }
};

/* #5 */
let input5_1 = document.getElementById("number5_1");
let input5_2 = document.getElementById("number5_2");
let input5_3 = document.getElementById("number5_3");
let input5_4 = document.getElementById("number5_4");
let button5_1 = document.getElementById("check5_1");
let result5_1 = document.getElementById("result5_1");
button5_1.onclick = function () {
  result5_1.textContent =
    +input5_3.value -
    +input5_1.value +
    " рублей " +
    (+input5_4.value - +input5_2.value) +
    " копеек";
};

/* #6 */
let input6_1 = document.getElementById("number6_1");
let button6_1 = document.getElementById("check6_1");
let result6_1 = document.getElementById("result6_1");
button6_1.onclick = function () {
  if (+input6_1.value == "3" || +input6_1.value == "5") {
    result6_1.textContent = "Yes";
  } else {
    result6_1.textContent = "No";
  }
};

/* #7 */
let input7_1 = document.getElementById("number7_1");
let input7_2 = document.getElementById("number7_2");
let button7_1 = document.getElementById("check7_1");
let result7_1 = document.getElementById("result7_1");
button7_1.onclick = function () {
  result7_1.textContent = Math.max(+input7_1.value, +input7_2.value);
};

/* #8 */
let input8_1 = document.getElementById("number8_1");
let input8_2 = document.getElementById("number8_2");
let input8_3 = document.getElementById("number8_3");
let button8_1 = document.getElementById("check8_1");
let result8_1 = document.getElementById("result8_1");
button8_1.onclick = function () {
  result8_1.textContent = Math.max(
    +input8_1.value,
    +input8_2.value,
    +input8_3.value
  );
};

/* #9 */
let input9_1 = document.getElementById("number9_1");
let input9_2 = document.getElementById("number9_2");
let input9_3 = document.getElementById("number9_3");
let button9_1 = document.getElementById("check9_1");
let result9_1 = document.getElementById("result9_1");
button9_1.onclick = function () {
  result9_1.textContent = Math.min(
    +input9_1.value,
    +input9_2.value,
    +input9_3.value
  );
};
