console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.children[0]);
console.log(document.body.children[1]);

console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].children);
console.log(document.body.childNodes[1].children[2]);

let x=document.body.childNodes[1];
console.log(x.children)
console.log(x.firstChild)
console.log(x.firstElementChild)
console.log(x.lastChild)
console.log(x.lastElementChild)

//accessing for changing css styles:
x.firstElementChild.style.backgroundColor="red";
x.lastElementChild.style.backgroundColor="olive"

let y=document.body.children[0];
y.children[1].style.backgroundColor="hotpink"

console.log(y.parentElement)
console.log(y.nextSibling)
console.log(y.nextElementSibling)
console.log(y.previousSibling)
console.log(y.previousElementSibling)

console.log(document.head)
console.log(document.childNodes)
console.log(document.children)
console.log(document.title)
console.log(document.documentElement)

document.title="okayyy";