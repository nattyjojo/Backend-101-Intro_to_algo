
const prompt = require('prompt-sync')({ sigint: true });

let getOrder = prompt('press 1 to print an array. press 2 to print min Num. press 3 to print min. press 4 for minimum position. press 5 random number. press 6 integers n and prints. press 7 for dice. press 8 for all the even numbers : ');
check(getOrder);
function check(a) {
    if (isNaN(a)) {
        console.log('Enter only Number');

    } else {
        getOrder = parseInt(a)
    }
}



let max = null;
let min = null;
let arr = [98,2,3,4,20,5,1,7,90,8,];
// I print an array
if (getOrder === 1){
    console.log(arr)
   
}

// II - maximum
if(getOrder === 2){
    for(let number of arr){
        if(max === null){
            max = number;
        }else if (number > max){
            max = number;
        }
    }
    console.log(max)
}

 // III - min
if (getOrder === 3){
    for(let number of arr){
        if(min === null){
            min = number;
        }else if (number < min){
            min = number;
        }
    }   
    console.log(min) 
}
 
    
// IV - minimum position

if (getOrder === 4){
    for(let number of arr){
        if(min === null){
            min = number;
        }else if (number < min){
            min = number;
        }
    }   
    console.log([min]) 
}
if (getOrder === 1){
    
}

//console.log(Math.max(stage)); 
/*
IV - minimum position

Write an algorithm which receives an array of integers and prints the position of its minimum.
V - ordered array

Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.

*/