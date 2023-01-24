// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(''));// false
console.log(Boolean('Faruk')); // true
console.log(Boolean({}));// true

const money = 0;
if(money){
    console.log("Don`t spend it all")
}else{
    console.log('You should get a job!')
}

let height = 0;
if(height){ //this is false in falsy then it will go to else
    console.log('YAY! Height is defined');
}else{
    console.log('Height is Undefined');
}