console.log("Hello World!");

//exo1 

// let number = [];
// let sum = (previousValue, currentValue) => previousValue + currentValue; // --> exemple avec callback


// for (i = 0 ; i <= 100; i++) {
//     let randomNumbers = Math.floor(Math.random() * (100 - 0 + 1));
//     number.push(randomNumbers);
    
// }
// console.log(number.reduce(sum));

let numbers = [];
let sum = 0;

for (i = 0 ; i <= 50; i++) {

    let randomNumbers = Math.floor(Math.random() * (100 - 0 + 1));
    numbers.push(randomNumbers);

    for(i = 0, long = numbers.length; i < long; i++) {

        sum += numbers[i];
    };
};

console.table(numbers);
//console.log(long);
console.log("Somme du tableau"," : ",sum);

//Exo2

var numbers2 = [];
var randomNumbers2 = 0;

for (var i = 1; i <= 50; i++) {
    let numRandom = Math.floor(Math.random() * (200 - 50 + 1)+ 50);
    numbers2.push(numRandom);
}

console.table(numbers2);

var numMax = numbers2[0]; 

for (var i = 1; i < numbers2.length; i++) {
    var item = numbers2[i];

    if (item > numMax) {
        numMax = item;
    }
}

console.log("Valeur Maximal"," : ",numMax);

//Exo3



