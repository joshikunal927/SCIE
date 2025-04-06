let number= Number(prompt("enter the number for getting factorial"));
let arrayforfact=[];

if(number>0){
    for(let i=1;i<=number; i++){
        arrayforfact.push(i);
    }
    
    let factorialfxn = (first,second) =>{
        return first*second;
    }
    let fact= arrayforfact.reduce(factorialfxn);
    
    
    
    console.log("factorial is", fact)
}
else{
    console.log(1);
}