const prompt = require('prompt-sync')({ sigint: true });
function check(a) {
    if (isNaN(a)) {
        console.log('Enter only Number');

    } else {
        a = parseInt(a)
    }
}

let getOrder = prompt('press 1 for 1 to n. press 2 for 1 to n decendingorder. press 3 -n to n. press. 4 for 1 to n Odd. press 5 random number. press 6 integers n and prints. press 7 for dice. press 8 for all the even numbers : ');

check(getOrder);

// 1 for 1 to n
if (getOrder === '1') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber)
    for (i = 0; i < getNumber; i++) {
        console.log(i + 1);
    }
}

// for 1 to n decendingorder
let nums = [];
if (getOrder === '2') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber)
    for (i = 0; i < getNumber; i++) {
        nums.push(i);
    }
    console.log(nums.reverse());
}

if (getOrder === '3') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber)

    for (i = - getNumber; i < getNumber; i++) {
        console.log(i);
    }
}

// Odd numbers

if (getOrder === '4') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber)

    for (i = 1; i <= getNumber; i += 2) {
        console.log(i);
    }
}
if (getOrder === '5') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber)
    let random = Math.floor(Math.random() * getNumber)
    console.log(random);
}

if (getOrder === '6') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber);
    for (i = 0; i <= getNumber; i++) {
        console.log(i);
    }
}

// Dice

if (getOrder === '7') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber);
    const numDice = prompt('Enter Number of throw: ');
    check(numDice)
    for(i = 0; i <= numDice; i++){
        let dice = Math.floor(Math.random()*numDice);
        let stage = [];
        stage.push(dice);
        for(i = 0; i <= stage; i++){

        }
        console.log(dice)
    }
}

// Even Numbers
if (getOrder === '8') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber)

    for (i = 0; i <= getNumber; i+=2) {
        console.log(i);
    }
}

// Perfect Number

if (getOrder === '9') {
    const getNumber = prompt('Enter Number: ');
    check(getNumber);
    let divid = getNumber / 2;
    if(Number.isInteger(divid)){
        console.log(`${getNumber} is a perfect number`);
    }else{
        console.log(`${getNumber} is a float`)
    }
}
/*

III - throw dices

Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received.
IV - even numbers


    conventions

    loops


*/