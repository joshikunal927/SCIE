let a=90;  //global
var b=80;  //global
{
    let b=70; //local
    console.log(b)
}
console.log(b)

{
    //var a=40; //cant be redifined
    console.log(a)
}
console.log(a)

console.log(a+b+60)

console.log("hello","8")

let ob={
    "name":"kunal",
    "job title":"sde1",
    "salary":70000,
}
console.log(ob)

ob.salary=7000000;
ob.age=23;
console.log(ob)