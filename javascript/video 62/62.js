/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let adj={
    "1":"Crazy",
    "2":"Amazing",
    "3":"Fire"
}
let shop={
    "1":"Engine",
    "2":"Foods",
    "3":"Garments"
}
let word={
    "1":"Bros",
    "2":"Limited",
    "3":"Hub"
}

let adjnum=Math.floor(Math.random()*3)+1;
let shopnum=Math.floor(Math.random()*3)+1;
let wordnum=Math.floor(Math.random()*3)+1;

console.log(` your bussiness name would be ${adj[adjnum]}${shop[shopnum]}${word[wordnum]}`)