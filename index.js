//#1
let str0 = '';

for (let i = 10; i <= 20; i++ ) {
        str0 += i + ',';
    }
    str0 = str0.slice(0,-1)
    console.log(str0)

 //#2

 let str1 = '';

 for (let a = 10; a <= 20; a++ ) {
    str1 += a*a + ',';
 }
     str1 = str1.slice(0,-1)
     console.log(str1)

//#3
let sum1 = 1;

for (let b = 15; b <= 35; b++ ) {
    sum1 *= b
}
console.log(sum1)

//#4
let sum2 = 0;
let amountNum = 0;

for (let d = 1; d <= 500; d++) {
    sum2 += d;
    amountNum++
}
let average = sum2 / amountNum
console.log(average)

//5
let sum3 = 0
for (let e = 30; e <= 80; e++) {
   if (e % 2 == 0 ) {
    sum3 += e;
   }
}
console.log(sum3)

//6
let str2 = ''

for (let f = 100; f <= 200; f++) {
   if (f % 3 == 0) {
    str2 += f + ',';
   }
}
str2 = str2.slice(0,-1)
console.log(str2)

//7 
