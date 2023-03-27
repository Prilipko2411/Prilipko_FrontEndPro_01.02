// №1

const array = [1, 2, 3, 4, 5, 6, 7];

const askNumToDel = parseInt(prompt('Яке число треба видалити з масиву?'))

const deleteArray  = array.indexOf(askNumToDel);

if(deleteArray !== -1) {
    array.splice(deleteArray, 1);
}

console.log(array);

// №2

function generateKey(length, characters) {
    let password = '';

    for (let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const password = generateKey(7, characters);
console.log(password); ;

// №3

function deleteLetters(phrase, letters) {
    let newPhrase = '';

    for (let i = 0; i < phrase.length; i++) {
       if (letters.indexOf(phrase[i]) === -1) {
        newPhrase += phrase[i];
       }
    }

  return newPhrase;
}

const phrase = 'Hello World';
const letters = ['l','d'];
console.log(deleteLetters(phrase, letters));

// №4

function createSum() {
    let sum = 0; 

    function add(num) { 
        sum += num;
      console.log(sum);
    }

    return add; 
  }
  
const sum = createSum();
console.log(sum(3));
console.log(sum(3));
console.log(sum(3));
