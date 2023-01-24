'use strict';
// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called 
// 'percentageOfWorld


const percentageOfWorld = (population) => {
    return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld(10);
const percChina1 = percentageOfWorld(1441);
const percUSA1 = percentageOfWorld(332);
console.log(percPortugal1, percChina1, percUSA1);