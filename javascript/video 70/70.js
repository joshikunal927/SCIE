console.log("helloworld")
let x= document.getElementsByClassName("box")

console.log(x)

let arr=Array.from(x)
function randomcolor(){
    let val1=Math.floor(Math.random()*256)
    let val2=Math.floor(Math.random()*256)
    let val3=Math.floor(Math.random()*256)
    return `rgb(${val3}, ${val2}, ${val1})`
}

arr.forEach(e => {
    e.style.color=randomcolor();
    e.style.backgroundColor=randomcolor();

});