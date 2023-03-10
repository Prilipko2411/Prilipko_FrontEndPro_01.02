// Ex.1 ( написала два вариант перевода в число )

let firstNumber = parseInt(prompt('Enter the first number')) || 0
let secondNumber = +prompt('Enter the second number') || 22

// Ex.2

let thirdNumber

if (firstNumber == true && secondNumber == true) {
    thirdNumber = 80
} else {
    thirdNumber = 40
}

// Ex.3

let numberSize = {};

// Ex.4

if (firstNumber >= 90) {
    numberSize = (size = 'big')
} else if (firstNumber <= 40){
    numberSize = (size = 'small')
} else {
    numberSize = (size = 'medium')
}

//Ex.5

let volue 

//Ex.6

switch (size) {
    case 'big':
        volue = 1000
        break;
    case 'medium':
        volue = 100
        break;
    case 'small':
        volue = 10
        break;

}

let result;

result = firstNumber + secondNumber + thirdNumber + volue;

if ((result/2) !== 0) {
    alert('Ohhhh thank God!')
} else if (secondNumber > 50) {
    alert(secondNumber)
}