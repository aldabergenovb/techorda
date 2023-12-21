/* 1 
let me = {
  firstName: "Balabay",
  lastName: "Aldabergenov",
  age: 29,
  gender: "male",
  national: "kazakh",
  proffession: "developer",
  languages: ["kaz", "rus", "eng"],
  func: function () {
    console.log(`My Name is ${this.firstName}`);
  },
};

console.log(me);
me.isStudent = true;
console.log(me.firstName + " " + me.lastName);
me.func();
*/

/* 2 
const studentOne = createStudent("Balabay", "P-10-21");
const studentTwo = createStudent("Moldir", "D-22-5");
const studentThird = createStudent("Askar", "C-10-10");
function createStudent(name, group) {
  let data = {
    name: name,
    group: group,
    groupFunc: function () {
      console.log(`Меня зовут ${name}, я учусь в группе: ${group}`);
    },
  };
  return data;
}
studentOne.groupFunc();
studentTwo.groupFunc();
studentThird.groupFunc();
*/

/* 3 */
function ConstuctorStudent(name, group) {
  (this.name = name),
    (this.group = group),
    (this.groupFunc = function () {
      console.log(`Меня зовут ${name}, я учусь в группе: ${group}`);
    });
}

const studentOne = new ConstuctorStudent("Balabay", "P-10-21");
const studentTwo = new ConstuctorStudent("Moldir", "D-22-5");
const studentThird = new ConstuctorStudent("Askar", "C-10-10");

studentOne.groupFunc();
studentTwo.groupFunc();
studentThird.groupFunc();
