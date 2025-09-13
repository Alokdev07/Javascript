//variables
const  user_id = 1234 //const is used to declare a constant which is not mutable
let user_email = "alokbhuyan162@gmail.com" //let is declared to mutable variables but block level scope which is discuss later
var account_password = "password" // generally not used and not usefule
account_city = "chandbali" // default assignment but not used

//user_id = 1234 -> not allowed because of assignment in constant

user_email = "alokbhuyan163@gmail.com" // -> this is allowed to change
account_password = "new_password" // -> also this is allowed to change

console.log(user_id,user_email,account_password,account_city)
console.table([user_id,user_email,account_password,account_city])