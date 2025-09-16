const name = "hitesh"
const age = 22
console.log(`the name of the tutor is ${name} and he is ${age} years old`) // this is commonly known as in javascript called string interpolation
const game_name = new String("Alok bhuyan") // this is another way to define a string

console.log(game_name);
console.log(game_name.__proto__);
console.log(game_name.length) // to access the length of the string
console.log(game_name.toUpperCase()) // to covert the string into uppercase
console.log(game_name.charAt(2)) // to find the character at a single index
console.log(game_name.indexOf('o'))

const new_string = game_name.substring(0,4) // generate the substring of a string and dont include last character which is passed in method
console.log(new_string)

const another_string = game_name.slice(0,4) // it is same as substring but here we pass the -ve value to get the character
console.log(another_string)

const with_space_string = "    hitesh   "
console.log(with_space_string.trim()) // to erase the spaces in the string 

const url = "http://localhost:3000/hitesh%20choudhary"
console.log(url.replace('%20','@')) // this method is use to replace the character of a string
console.log(url.includes('hitesh')) // to find the common things in a string
const array_string = game_name.split(' ') // to convert the string into array with specified character like " " , _ , etc
console.log(array_string)