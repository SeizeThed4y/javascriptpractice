'use strict';

// Arrow Functions (it doesnt take the this keyword)
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetirement(1994, 'faruk'));
console.log(yearsUntilRetirement(1980, 'bob'));