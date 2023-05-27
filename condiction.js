
const prompt = require('prompt-sync')({ sigint: true });

const operationType = prompt('Enter 1 : for aritimtic cal. Enter 2 : for vat cal. Enter 3 : for circle. Enter 4 : for Time ');
let input1
let input2

if (operationType === '1') {
    input1 = prompt('please enter first number: ');
    if (isNaN(input1)) {
        input2 = prompt('please enter second text: ');
        console.log(input1 + input2); 
    } else {
        console.log(calculate(input1));

    }
    
   

}
if (operationType === "2"){
    let getVat = prompt('enter price ');
    if (isNaN(getVat)){
        console.log(`${getVat} is not a number`)
    }else{
        function vat(a){
            calvat = a * (21/100);
            return `total ${calvat} `;
        }
      
    }
    console.log(vat(getVat));
}
if (operationType === "3"){
    let getRadius = prompt('Enter Radius ')
    if (isNaN(getRadius)){
        console.log(`${getRadius} is not a number`);
    }else{

        radius = getRadius * getRadius; 
        console.log(Math.PI * radius);
    }

}

if (operationType === "4"){
    let getSec = prompt('Enter second ');
    let getMins = prompt('Enter minute ');
    let gethr = prompt('Enter hour ');
    const store = [];
    store[0] = getSec;
    store[1] = getMins;
    store[2] = gethr;
    if (isNaN(store[0] | store[1] | store[2])){
        console.log('Enter only numbers');
    }else{
        let secs = getSec;
        let mins = 60 * getMins;
        let hrs = (60 * 60) * gethr;
        let total = secs + mins + hrs;
        console.log(`Total = ${secs + mins + hrs}`);
        console.log(total)
    }

}

function calculate(input1) {  
    const getOperator = prompt('Enter operation Eg. +, -, x, /, %, ');
    input2 = prompt('please enter second number: ');
    input2 = parseInt(input2);
    input1 = parseInt(input1);
    if (getOperator === '+') {
        return input1 + input2;
    }
    else if (getOperator === '-') {
        return input1 - input2;
    }
    if (getOperator === 'x') {
        return input1 + input2;
    }
    if (getOperator === '/') {
        return input1 / input2;
    }
    if (getOperator === '%') {
        return input1 % input2;
    }
}



