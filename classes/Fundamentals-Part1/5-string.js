const fristName = 'faruk';
const job = "sqa";
const birthYear = 1994;
const year = 2023;


const faruk = "I'm " +fristName + ' , a ' + (year - birthYear) + ' years old' + '!'

console.log(faruk);

//Template String litteral  
//${} --> place holder

const farukNew = `I'am ${fristName}, a ${year - birthYear} year old  ${job}`;
console.log(farukNew);

// back tick (developers are start using)---
console.log(`Just a regular string....`)


// \n == new line
console.log('String with \n\
multiple \n\
lines');

//with template string
console.log(`string
multiple
string`);