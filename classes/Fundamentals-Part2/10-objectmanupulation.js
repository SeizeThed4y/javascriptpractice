'use strict';


//creating object 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Micheal', 'Steven', 'Peter']
}

console.log(jonas);


// Getting specific data from object using Dot (.)//
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

// we can pass some function in bracked
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName, lastName, age, job, friends');

console.log(jonas[interestedIn])


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
}else{
    console.log('Wrong Request! Choose between firstName, lastName, age, job, friends');

}

// adding value to the object 
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';

console.log(jonas)





//Challlange 

// Jonas has 3 friends, and his best friend is called Micheal


console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called 
${jonas.friends[0]}`);















