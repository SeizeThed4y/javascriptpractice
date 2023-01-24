// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portuguese


const country = 'The United States';
const continent = 'America';
const language = 'English';
let population = 331900000;
let findlandPopulation = 6000000;
let avaragePopulation = 33000000;
const halfPopulation = population / 2;
console.log(halfPopulation);
population++
console.log(population)

population > findlandPopulation ? console.log(`${country} population ${population} is higher than findland population ${findlandPopulation}`) :
    console.log(`${country} population is smaller than Findlan population ${findlandPopulation}`)
population > findlandPopulation ? console.log(`${country} population ${population} is higher than average population ${avaragePopulation}`) :
    console.log(`${country} population is smaller than avarage population ${avaragePopulation}`)

const description = country + ' is in ' + continent + ' , and its ' + population + ' million people speak ' + language
console.log(description);

// const description = `${country} is in ${continent}, and its ${population} million
//  people speak ${language}`
//  console.log(description);