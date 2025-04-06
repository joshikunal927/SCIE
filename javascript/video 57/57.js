//for loop
for(let i=0;i<=10;i++){
    console.log(i)
}


//for in loop= traverse keys of an object
let obj={
    "namr":"hello",
    age:"18",
    "takka":"not done"
}
for(const k in obj){
    const val=obj[k] //storing the value of key
    console.log(k,val);
}

//for of
namez ="kunal";
for(const k of namez){
    console.log(k)
}