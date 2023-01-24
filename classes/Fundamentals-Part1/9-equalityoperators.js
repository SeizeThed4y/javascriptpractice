const age1 = 18;
// in JS === means equal (it is strict and doesnt do coercion)
if(age1 === 18) console.log('You just became an adult (strict)');

// in JS == does coercion
const age2 = '18';
if(age2 == 18) console.log('You just became an adult (loose)');

//prompt is similar to Scanenr but it will ask value from the UI
// const favourite1 = prompt("What is your favorite number?");
// console.log(favourite1);
// console.log(typeof favourite1);

// if(favourite1 == 23){ // '23' == 23
//     console.log("23 is amazing number");
// }

//prompt is similar to Scanner but it will ask value from the UI
// Number function is converting String to Number
const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){ // 23 == 23
    console.log("23 is amazing number")
}else if (favourite === 7){
    console.log('7 is also a cool number')
}else if(favourite === 9){
    console.log("9 is amazingn umber ")
}else{
    console.log('Number is not 23 or 7')
} 

//different operator 

if(favourite !== 23) console.log("why not 23?");