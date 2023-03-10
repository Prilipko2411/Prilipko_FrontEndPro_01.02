
let name = prompt ('What is your name?')
let surname = prompt ('What is your surname?')
let age = prompt ('How old are you?')
let num = Number(age)
let city = prompt ('What city are you from?')

result = confirm ('Do you give permission to use your data?')

result ? alert (`Name: ${name}; Surname: ${surname}; Age: ${age}; City: ${city}.`) : 
alert ('A user has forbidden to use his data.')

