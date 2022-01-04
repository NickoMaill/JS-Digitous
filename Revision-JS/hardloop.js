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

for (i = 0 ; i <= 100; i++) {

    let randomNumbers = Math.floor(Math.random() * (100 - 0 + 1));
    number.push(randomNumbers);

    for( i = 0, len = number.length; i < len; i++) {

        sum += number[i];
    };
};


console.log(number);
console.log(sum);

//exo2 

let number2 = [];
let max = [];

for (i = 0 ; i <= 200; i++) {

    let randomNumbers2 = Math.floor(Math.random() * (200 - 50 + 1));
    number2.push(randomNumbers2);

    for( i = 0, len = number2.length; i < len; i++) {

        max += number[i];
    };
};
