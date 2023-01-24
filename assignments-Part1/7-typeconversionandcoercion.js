// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:

// '9' - '5'; 4
// '19' - '13' + '17'; 617
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;


// 2. Execute the operations to check if you were right

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2);// 5 +6 = 11 + '4' = '114' --> 9 - 4 - 2 = 3 --> '114' + '3' = 1143