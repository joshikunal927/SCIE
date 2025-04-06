let str1="kunal"
let str2='joshi'
let str3=`kunal'and"jOSHIi`

console.log(`the third char in string1 is ${str1[2]} `)
console.log(`slicing of string2 from start to 4 is ${str2.slice(0,4)}`)
console.log(`this is use of \nescape \t\t\tcharacters`)
console.log(`string3 to lowercase is ${str3.toLowerCase()}`)
console.log(`string3 to Uppercase is ${str3.toUpperCase()}`)
console.log(`lets concatinate string1 and string2 is ${str1.concat(str2, "and")}`)
console.log(`lets update or replace my name in str1 ${str1.replace("kunal","kunjos")}`)
console.log(`as strings are immutable so the orignal strings are ${str1} and ${str2} and ${str3}`)