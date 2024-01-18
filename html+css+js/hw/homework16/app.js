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
