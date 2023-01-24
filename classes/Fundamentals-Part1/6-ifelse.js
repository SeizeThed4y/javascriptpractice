// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah cannot start driving license 🚫 too young ${yearsLeft} years left`);
// }

//when if block get == false, JS moves to next line of the code (else block is not necessary depends on the logic)


//control if / else structor
// if(){
// }else(
// )

/*
checking the if the person born in 20th or 21th century
*/
const birthYear = 1994;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);