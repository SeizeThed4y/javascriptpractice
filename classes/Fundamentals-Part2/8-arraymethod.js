'use strict'

const friends = ['Micheal', 'Steven', 'Peter'];


// Adds the element end of the array
friends.push('Jay');
console.log(friends);

// Adds the element front of the array 
friends.unshift('Josh');
console.log(friends);

//Remove the element end of the array
friends.pop();
console.log(friends);

// Remove the element front of the array
friends.shift();
console.log(friends);

// Return the index of the element
console.log(friends.indexOf('Steven'));


// If the element includes ( contain ) --> true 
console.log(friends.includes('Steven'));

if (friends.includes('Steven')){
    console.log('You have a friend called Peter ');
}