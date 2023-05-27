//npm install prompt-syncjo

const prompt = require('prompt-sync')({sigint: true});
function check(a, b, c){
    if (isNaN(a)){
        console.log('enter only number');
    }else{

    }
}

const getCal = prompt('Enter 1 : Tari. Enter 2 : Max. Enter 3 : dice. Enter 4 : Day. Enter 5 : PrintShop. ');
check(getCal)
if (getCal === "1"){
    let getAmount = prompt('enter your amount ');
    check(getAmount);
    if (getAmount <= 10){
        console.log('you can get a full traiff');
    }else if (getAmount === 8){
        console.log('you can get the reduced tarrif')
    }

}else if (getCal === "2"){
    let number1 = prompt('Enter 1st Number ');
    let number2 = prompt('Enter 2nd Number ');
    let number3 = prompt('Enter 3rd Number ');
    check(number1, number2, number3)
    console.log(`The maximum is: ${Math.max(number1, number2, number3)}`)
}

if (getCal === "3"){
    let stor = [];
    let i = 0;
    let identicalNum = [];
    while (i < 3){
        let roll = Math.floor(Math.random()* 100) + 1;
        stor.push(roll);
        if (i === 0){
            console.log(`throw 1 = ${stor}`);
            
        }else{
            console.log(`throw ${i + 1} = ${stor}`);
        }
        console.log(roll);
        identicalNum.push(stor);
        if (identicalNum[0] === [1] | [0] === [2]){
            console.log('is a match');
        }else if (identicalNum[1] === [2]){
            console.log('is a match');
        }         

        
        stor.pop();
        i++;


    }

    
}

if(getCal === "4"){
    const days = ['Is Monday', 'Is Tuesday', 'Is Wenesday', 'Is Tursday', 'Is Friday', 'Is Saturday', 'Is Sunday']
    let getDay = prompt('Enter number: ');
    check(getDay);
    if(getDay === '1'){
        console.log(days[0]);
    }else if(getDay === '2'){
        console.log(days[1]);
    }else if(getDay === '3'){
        console.log(days[2]);
    }else if(getDay === '4'){
        console.log(days[3]);
    }else if(getDay === '5'){
        console.log(days[4]);
    }else if(getDay === '6'){
        console.log(days[5]);
    }else{
        (getDay === '7');
        console.log(days[6]);
    }


}


if (getCal === '5'){
    let getCopyNum = parseInt(prompt('Enter Number: '));
    check(getCopyNum);
    let makeInt = parseInt(getCopyNum)
    const priceFor9 = makeInt * 0.12;
    const priceFor10 = makeInt * 0.11;
    const priceFor20 = makeInt * 0.10;
    if(getCopyNum <= 9){
        console.log(`price per copy = 0.12 x ${getCopyNum} TOTAL = ${priceFor9}`);
    }
    else if (getCopyNum > 9 && getCopyNum < 20 ){
        console.log(`price per copy = 0.11 x ${getCopyNum} TOTAL = ${priceFor10}`);
    }else{
        (getCopyNum > 19)
        console.log(`price per copy = 0.10 x ${getCopyNum} TOTAL = ${priceFor20}`);

    }
}


