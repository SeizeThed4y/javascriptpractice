// Boolean logic: AND, OR & NOT OPERATORS

// (A = true and B = true ) --> True ||||| rest are false
// (A = true or B = false) --> if one of them true --> true


const hasDriverLicense = true; // Variable A 
const hasGoodVision = true; // Variable B


console.log(hasDriverLicense && hasGoodVision); // true
console.log(!hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision);// true
console.log(!hasDriverLicense || hasGoodVision); //true
console.log(!hasDriverLicense || !hasGoodVision)//false


if (!hasDriverLicense && hasGoodVision) {
    console.log('Sara is able to drive')
} else {
    console.log('Someone else should drive')
}

const isTired = false; // Variable C 
console.log(hasDriverLicense || hasGoodVision || isTired);// true
console.log(hasDriverLicense && hasGoodVision && !isTired);// true
console.log(hasDriverLicense && !hasGoodVision && isTired);// true

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sara is able to drive')
} else {
    console.log('Someone else should drive')
}