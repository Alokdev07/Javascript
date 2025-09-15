console.log("2" > 1)  // automatically convert this string to number
console.log("02" > 1) // same here

console.log(null > 0) // treated null as 1 here
console.log(null == 0) // treated null as 1 here
console.log(null >= 0) // treated null as 0 here

console.log(null === 0) // strict check , check the datatype also with value