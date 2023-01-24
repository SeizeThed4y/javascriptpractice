// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax

const country = 'The United States';
const continent = 'America';
const language = 'English';
let population = 331900000;
let findlandPopulation = 6000000;
let avaragePopulation = 33000000;


const description = `${country} is in ${continent}, and its ${population} million
 people speak ${language}`
 console.log(description);