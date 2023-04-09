
//#1

function solution(arr) {
  let repeats = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (repeats[num]) {
      repeats[num]++;
    } else {
      repeats[num] = 1;
    }
  }
  let result = [];

  for (let num in repeats) {
    if(repeats[num] % 2 !== 0) {
      result.push(Number(num))
    }
  }
    return result;
  }

  console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));
  console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]));
  console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));
  console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
  console.log(solution([2, 2, 44, 44]));

  //#2
  document.addEventListener('DOMContentLoaded', function() {
  function ezjQuery(description) {
    this.htmlType = `<${description}></${description}>`;
  
    this.add = function(description, text = '') {
       this.htmlType = this.htmlType.replace(`</${description}>`, `<${description}>${text}</${description}>`) 
       return this;
    }
  
    this.render = function() {
      return this.htmlType;
    }
  
    return this;
  }

  
  let helloList = new ezjQuery('body')
    .add('div')
    .add('ul')
    .add('li', 'Hello')
    .render();
  
  console.log(helloList);
  
  let bodyDiv = new ezjQuery('body')
    .add('div')
    .render();
  
  console.log(bodyDiv);
});

// Ничего не выводит кроме боди, постаралась в интернете найти что-то и нашлось это 
//document.addEventListener('DOMContentLoaded', function() {} - но и это не помогло.
// пробовала и другие варианты, но ничего не помогает