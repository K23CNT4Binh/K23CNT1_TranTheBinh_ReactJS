class Person{
    constructor()
    {
        this.name =" Tran The Binh";
        this.age = 20;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}
var person = new Person();
person.setAge = (20);
console.log("Ten nguoi: "+person.getName());
console.log("Tuoi:"+person.getAge());