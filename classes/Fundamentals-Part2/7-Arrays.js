'use strict';
const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends)

const years1 = new Array(1991, 1992, 1993, 1994); // the index starts from 0
console.log(years1[0])
console.log(friends[1]);

console.log(friends.length); // length it is a property (it is giving size of the Array)
console.log(friends[friends.length - 1]) // it returns last element of the Array


friends[2] = 'Jay';
console.log(friends);

const firstName = 'Faruk'
const faruk = [firstName, 'jxkn', 2023 - 1994, 'SE', friends];

console.log(faruk);
console.log(faruk.length);


//// Exercise


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const myage1 = calcAge(years[2]);
const myage2 = calcAge(years[years.length -1]);
console.log(myage2);

const ages = [calcAge(years[2]), calcAge(years[years.length -1 ])];
console.log(ages);