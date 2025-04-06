console.log("kunal")

// by class
console.log(document.getElementsByClassName("box"));

let y=document.getElementsByClassName("box");
y[0].style.backgroundColor="red";

//by id
document.getElementById("thirdbox").style.backgroundColor="olive";

//queryselector
document.querySelector("#fourthbox").style.backgroundColor="hotpink";

document.querySelector(".boxes").style.backgroundColor="black";

//queryselecttor all
let x=document.querySelectorAll(".boxes")
console.log(x);
x.forEach(e =>{
    e.style.backgroundColor="pink";
})

//by tagname
console.log(document.getElementsByTagName("div"))
let m=document.getElementsByTagName("div")
//matches
console.log(m[3].matches("#thirdbox"))
console.log(m[3].matches(".box"))
console.log(m[3].matches("#fourthbox"))

//closest
console.log(m[3].closest(".container"))
console.log(m[3].closest("body"))
console.log(m[3].closest("#thirdbox"))

//contains
console.log(document.body.contains(document.body))
console.log(document.body.contains(document.querySelector("#thirdbox")))
console.log(document.body.querySelector(".container").contains(document.querySelector("html")))
console.log(document.body.querySelector(".container").contains(document.querySelector("html")))