class Person{
    constructor(){
        this.name = "Tran The Binh";
        this.age = 20;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}  
class Student extends Person{
    constructor(name,age,studentId){
        super(name,age)
        this.studentId="SV001";
    }
    getStudentInfo(){
        return "Ten: "+this.getName()+"-Tuoi: "+this.getAge()+"-Ma SV: "+this.studentId;
    }
}
var student = new Student();
console.log(student.getStudentInfo());




