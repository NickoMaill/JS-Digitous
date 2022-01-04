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
//console.log(long);
console.log("Somme du tableau"," : ",sum);

//Exo2

var array = [];
var min = 50;
var max = 200;
var numRandom = 0;

for (var i = 1; i <= 50; i++) {
    let numRandom = Math.floor(Math.random() * (200 - 50 + 1)+ 50);
    array.push(numRandom);
}

console.table(array);

var numMax = array[0]; 

for (var i = 1; i < array.length; i++) {
    var item = array[i];

    if (item > numMax) {
        numMax = item;
    }
}

console.log("Valeur Maximal"," : ",numMax);

//Exo3



