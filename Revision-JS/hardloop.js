console.log("Hello World!");

//exo1 

// let number = [];
// let sum = (previousValue, currentValue) => previousValue + currentValue; // --> exemple avec callback


// for (i = 0 ; i <= 100; i++) {
//     let randomNumbers = Math.floor(Math.random() * (100 - 0 + 1));
//     number.push(randomNumbers);
    
// }
// console.log(number.reduce(sum));

let number = [];
let sum = 0;

for (i = 0 ; i <= 50; i++) {

    let randomNumbers = Math.floor(Math.random() * (100 - 0 + 1));
    number.push(randomNumbers);

    for(i = 0, long = number.length; i < long; i++) {

        sum += number[i];
    };
};

console.table(number);
console.log(long);
console.log(sum);

//exo2 

// let numbers2 = [];
// let max = 0;

// for (i = 0 ; i <= 50; i++) {

//     let randomNumbers2 = Math.floor(Math.random() * (200 - 50 + 1) + 50);
//     numbers2.push(randomNumbers2);

//     for (i = 0 ; i === 200 ; i++) {
//         let maxNum = Math.max.apply(null, numbers2);
//         max += maxNum;
//     };
    
// };

//console.log(numbers2);
//let maxNum = Math.max.apply(null, number2);

var array = [];
var min = 50;
var max = 200;
var numRandom = 0;

for (var i = 1; i <= 50; i++) {
    numRandom = Math.floor(Math.random() * (max - min + 1));

    // console.log(numRandom);

    if (array.indexOf(numRandom) === -1) {
        array.push(numRandom);
    } else {
        i--;
    }
}

console.table(array);

var numMax = array[0]; 

for (var i = 1; i < array.length; i++) {
    var item = array[i];

    if (item > numMax) {
        numMax = item;
    }
}

console.log(numMax);

