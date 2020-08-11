// empty object

class Student{

}
const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);


class Student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "Big School";
        this.nationality = "Bangladeshi";
    }
}
const student1 = new Student(12, "Sami");
const student2 = new Student(22, "Mahi");
const student3 = new Student(87, "Dim");
console.log(student1, student2, student3);
console.log(student2.name, student1.name);