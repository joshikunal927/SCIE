/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

//random number generate:  let randomNumber = Math.floor(Math.random() * 100) + 1;

let a= Number(prompt("enter the first number: "))
let b= Number(prompt("enter the second number: "))

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
console.log(a);
console.log(b);

if((randomNumber<=10)){
    console.log("Addition is: ",a-b);
    console.log("Multiplication is: ",a+b);
    console.log("Subtraction is: ",a/b);
    console.log("Division is is: ",a**b);

}
else{
    console.log("Addition is: ",a+b);
    console.log("Multiplication is: ",a*b);
    console.log("Subtraction is: ",a-b);
    console.log("Division is is: ",a/b);

}