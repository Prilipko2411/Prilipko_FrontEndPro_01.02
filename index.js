

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// №1

let filtered = arr.filter(num => num > 0);
let resultSum = filtered.reduce((sum, current) => sum + current);
let length = filtered.length;
alert(`Кількість позитивних елементів: ${length}`)
alert(`Сума позитивних елементів: ${resultSum}`)

//№2

let min = Math.min(...arr);
alert(`Мінімальний елемент масиву: ${min}`);
alert(`Порядковий номер мін. елементу: ${arr.indexOf(min)}`);

//№3

let max = Math.max(...arr);
alert(`Mаксимальний елемент масиву: ${max}`);
alert(`Порядковий номер макс. елементу: ${arr.indexOf(max)}`);

//№4

let filtered1 = arr.filter(num => num < 0)
let length1 = filtered1.length;
alert(`Кількість негативних елементів: ${length1}`)

//№5

let filtered3 = filtered.filter(num => num % 2 !== 0)
let length3 = filtered3.length;
alert(`Кількість непарних позитивних елементів: ${length3}`)

//№6

let filtered2 = filtered.filter(num => num % 2 == 0)
let length2 = filtered2.length;
alert(`Kількість парних позитивних елементів: ${length2}`)

// №7

let resultSum1 = filtered2.reduce((sum, current) => sum + current);
alert(`Cумa парних позитивних елементів: ${resultSum1}`)

// №8

let resultSum2 = filtered3.reduce((sum, current) => sum + current);
alert(`Cумa непарних позитивних елементів: ${resultSum2}`)

// №9

let resultMultiply = filtered.reduce((accumulator, current) => {
    return accumulator * current;
})
alert(`Добуток позитивних елементів: ${resultMultiply}`)

// №10

let maxNum = arr[0]

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max) {
        arr[i] = 0;
    }
}

alert(`Hайбільший серед елементів масиву, остальніgit add . обнулити: ${arr}`)