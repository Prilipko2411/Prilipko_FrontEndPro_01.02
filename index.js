//№1

class PrefixFinder {
    constructor(str) {
      this.str = str;
    }
  
    findPrefix() {
      if (!this.str || this.str.length === 0) {
        return "";
      }
  
      const firstStr = this.str[0];
      let prefix = "";
  
      for (let i = 0; i < firstStr.length; i++) {
        const char = firstStr.charAt(i);
  
        for (let j = 1; j < this.str.length; j++) {
          const str = this.str[j];
  
          if (i >= str.length || str.charAt(i) !== char) {
            return prefix;
          }
        }
  
        prefix += char;
      }
  
      return prefix;
    }
  }
  
  const str = ["programming", "product", "procrastination"];
  const prefixFinder = new PrefixFinder(str);
  const Prefix = prefixFinder.findPrefix();
  console.log(Prefix); 


  //№2


function to3DArray(arr) {
    const result = [];
    for (let i = 0; i < arr[0].length; i++) {
      const temp = [];
      for (let j = 0; j < arr.length; j++) {
        temp.push(arr[j][i]);
      }
      result.push(temp);
    }
    return result;
  }
  
  function to2DArray(arr) {
    const result = [];
    const maxLength = Math.max(...arr3D.map((subArr) => subArr.length));
  
    for (let i = 0; i < maxLength; i++) {
      result.push([]);
      for (let j = 0; j < arr3D.length; j++) {
        if (i < arr3D[j].length) {
          result[i].push(arr3D[j][i]);
        } else {
          result[i].push(undefined);
        }
      }
    }
  
    return result;
  }
  const arr2D = [[1,2], [3,4], [5,6]];
  const arr3D = to3DArray(arr2D);
  console.log(arr3D);

  const arr2D1 = [[1,2], [3,4], [5,6], [7]];
  const arr3D1 = to3DArray(arr2D1);
  console.log(arr3D1);

  const arr3D2 = [[1,2,3], [4,5,6]];
  const arr2D2 = to2DArray(arr3D2);
  console.log(arr3D2);

// не выходит второе задание особо((