//Type conversion is manually conver string to int etc.

const inputYear = '1991';
//Number --> it is NumberConversion and convert string to number
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

//String to Number
console.log(Number('Faruk')); //--> returns NaN (Not a Number);
console.log(typeof NaN); // --> NaN is a number but it is invalid

//Number to String
console.log(String(23), 23);

//*you cannot convert to undefined*


// Type Coercion

/*
+ operation will conver the type 
*/


console.log('I am ' + 23 + ' year old');
console.log('23' - '10' + 3);

let n = '1' + 1; //--> 11 
n = n -1;
console.log(n)

// '10'-'4'-'3'-2+'5' // 10 - 4 = 6 
// '15'

/*
10 - 4 = 6 
6-3 = 3 
3-2 = 1
1 + '5' = 15
*/