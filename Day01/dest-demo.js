//array
var arr = [10,20,25,15];
// destructuring
var [a,b]=arr; //=> a=10, b=20
console.log("a=",a);
console.log("b=",b);

[a,b,c] = arr;

console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

//object
const student = {
    name:"The Binh",
    age:20,
    phone: "0978381287",
    email: "binhtranthe2005@gmail.com"
}

var{name,phone} = student;
// =>name:"The Binh"; phone:"0978381287"
console.log("name:",name);
console.log("phone:",phone);