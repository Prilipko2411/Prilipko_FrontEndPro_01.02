//№1


function findFactorial(array) {
    let num = array;
    while (Array.isArray(num)) {
      num = num[num.length - 1]; 
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
  const arr = [ [ [ [8] ] ] ];
  const factorial = findFactorial(arr);
  console.log(factorial);

  //№2

  function Calculator () {

    this.read = function () {
        this.a = parseFloat(prompt('Напиши число a', 0));
        this.b = parseFloat(prompt('Напиши число b', 0));
    };
    this.sum = function () {
        sum = parseFloat(this.a + this.b);
        return sum;
    }
    this.mul = function () {
        mul = parseFloat(this.a * this.b);
        return mul;
    };
  }

  let calculator = new Calculator;

  calculator.read(3,3);
  alert( calculator.sum() );
  alert( calculator.mul() );