// let arr=[1,2,3,4,5,6,7];
// console.log(arr);
// console.log(arr.length)
// arr[2]=3000;
// console.log(arr);

// //methods:
// console.log(arr.toString()) //not orignal array change
// console.log(arr)

// console.log(arr.join("fuck"))

// console.log(arr.pop());
// console.log(arr)

// console.log(arr.push(99))
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(88)
// console.log(arr)

// delete arr[4]
// console.log(arr)

// let arr2 =[ 91,82,73,64,55]
// console.log(arr.concat([66,77,44,33],arr2))

// console.log(arr.sort())

// arr.splice(0,2)
// console.log(arr)

// console.log(arr.slice(2,4))
// console.log(arr)

// console.log(arr.reverse())


//loops

//map
let orgarr=[5,6,7,8,9];

let square= (e)=>{
    return e**2;
}

const newarr=orgarr.map(square);

console.log(newarr);

//filter
let greaterThan6= (e)=>{
    return e>=6;
}

let greaterarr= orgarr.filter(greaterThan6);
console.log(greaterarr);


//reduce
let arry=[1,2,3,4,5,6,8,9]
let factorial= (first,second)=>{
    return first*second;
}

let factorialnum= arry.reduce(factorial);
console.log(factorialnum);