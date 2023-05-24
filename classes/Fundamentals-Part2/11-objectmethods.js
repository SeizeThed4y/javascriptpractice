''//creating object ''
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Micheal', 'Steven', 'Peter'],
    hasDriverLicense: false,

    // calcAge: function (birthYear) 
    //     return 2037 - birthYear;
    // 

    //this keyword reference to the object 
    //   calcAge: function () {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // 


    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`
    }
};

console.log(jonas.getSummary());

// console.log(jonas.calcAge());
// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge(jonas.birthYear));


// Challenge 

// "Jonas is 46-years old teacher, and he has driver license`s  "



