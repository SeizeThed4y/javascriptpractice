'use strict';

//Function declaration
function calcAge1(currentYear, birthYear) {
    return currentYear - birthYear;

}
const age1 = calcAge1(2023, 1994);
console.log(age1);
console.log(calcAge1(2023, 1994));

// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1994);

console.log(age1, age2)