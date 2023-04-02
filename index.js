// #1

const yourFunc = (arr) => {
    return Array.from(new Set(arr))
};

const arr1 = [1,2,3,4,5,1,2,3,4,5]
console.log(yourFunc(arr1));

// #2

function findRepeatNum(arr) {
    const repeat = arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    let maxRepeat = 0;
    let mostRepeat = arr[0];

    for (const num in repeat) {
        if (repeat[num] > maxRepeat){
            maxRepeat = repeat[num];
           mostRepeat = num;
        }
    }
    return Number(mostRepeat);
}
const arr = [1,1,2,2,3,3,4]
const result = findRepeatNum(arr);
console.log(result);


let y = 5;
let x = () => y;
let z = t => {
  let y = 5;
  t();
}
// будет андевайнд, ведь у х нет никаких данных;

//#4

const debounce = (fn, ms) => {
   return function () {
    setTimeout(() =>  fn.apply(this, arguments), ms);
    };
}

let f = debounce(alert, 1000);
f(1);
f(2);

//Не понимаю вообще как работать с дебаунс, видео на ютубе чуть вроде помогли, но правильно ли это не знаю, 
//так же хотелось бы на занятии еще уделить время редьюс сложновато дается. Но ютуб, лернджес и другие источники помогают. 
//Без них бы вообще было бы невозможно.