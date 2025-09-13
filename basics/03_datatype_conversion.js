let score = "33"
console.log(typeof score)
let score_in_numbers = Number(score)
console.log(typeof score_in_numbers)

// -> the error part

let string_number = "alok"
let converted_string_number = Number(string_number)
console.log(typeof converted_string_number) // -> the output of the type is number but that is not a number
console.log(converted_string_number) // -> output is nan which is also a number

// -> second conversion

let null_value = null
let null_value_number = Number(null_value)
console.log(typeof  null_value_number) // -> output : number which is expected
console.log(null_value_number) // -> output : but here is the value is 0 it means when null is converted to number it's value is 0

// -> third conversion

let undefined_value = undefined
let converted_undefined_value = Number(undefined_value)
console.log(typeof converted_undefined_value) // -> output : number which is expected
console.log(converted_undefined_value) // -> output : NaN which is not a number

// in this type true is converted is 1 and false is converted in 0

/*
 *  so in this type we use conversion for number = Number() , boolean = Boolean() , string = String() etc..
 */

// -> Operation in javascript

let value = 120
let negetive_value = -value
console.log(negetive_value)

let first_string = "Alok "
let second_string = "bhuyan"
console.log(first_string+second_string)

let another_number = 1
let another_string = "2"
console.log(another_number+another_string)

let new_string = "1"
let new_number = 2
console.log(new_string+new_number)

// output:error part
console.log(1+2+"2") // -> output : first considered as sumation and second is considered is string -> 32