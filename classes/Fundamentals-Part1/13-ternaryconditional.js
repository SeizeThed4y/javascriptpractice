const age = prompt(`Enter your age`);

//THIS IS NOT REPLACEMENT OF IF / ELSE IF / ELSE STATEMENT 

// ? --> if 
// : --> else
age >= 18 ? console.log('I like to drink wine🍷') :
    console.log('I like to drink water💧');

const drink = age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink);

let drink2;

if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water💧';
}
console.log(`if else --> ${drink2}`);

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);