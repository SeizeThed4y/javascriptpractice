const day = 'Saturday';

switch (day) {
    case 'Monday': // day === Monday if its true 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // This break will stop the execution of the code for the this case
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wendnesday':
    case 'Thursday':
        console.log('Write code examples');
        break; // it will execute Wendnesday and Thursday together since Wendnesday doesnt have break;
    case 'Friday':
        console.log('Record Videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default: // this is same with Else statement 
        console.log('Not a valid day');
}


if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wendnesday' || day === 'Thursday') {
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('Record Videos');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not valid day')
}


