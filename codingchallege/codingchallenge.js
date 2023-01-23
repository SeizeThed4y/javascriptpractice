let mass;
let height;

let markMass = 78;
let markHeight = 1.69;

mass = markMass;
height = markHeight;
let BMI = mass / height ** 2;
let markBMI = BMI;
console.log(markBMI);

let johnMass = 92;
let johnHeight = 1.95;
mass = johnMass;
height = johnHeight;
BMI = mass / height ** 2;
let johnBMI = BMI;
console.log(johnBMI);

console.log(markBMI > johnBMI)

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;


console.log(markMass / markHeight ** 2 > johnMass / johnHeight ** 2)
