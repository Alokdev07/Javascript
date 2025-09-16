const score = 100.3873
console.log(score) // consoles in number
const balance = new Number(400)
console.log(balance) // console with prototype when console in browser or give a object  mark
console.log(balance.toString()) // to covert the number to string
console.log(score.toFixed(2))
console.log(score.toPrecision(3))
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))

// math - decision
console.log(Math.abs(-88)) // to convert the value into absolute value
console.log(Math.round(4.7)) // round the value
console.log(Math.ceil(4.2)) // round the value with upper entities
console.log(Math.floor(4.3)) // round the value with lower entities
console.log(Math.min(5,6)) // to find the value with minimum
console.log(Math.max(4,5)) // to find the maximum value

const random_value = Math.random()*10 // to find the random value
console.log(random_value)