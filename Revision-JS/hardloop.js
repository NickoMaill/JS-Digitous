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

for (i = 0; i <= 50; i++) {

    let randomNumbers = Math.floor(Math.random() * (100 - 0 + 1));
    numbers.push(randomNumbers);

    for (i = 0, long = numbers.length; i < long; i++) {

        sum += numbers[i];
    };
};

console.table(numbers);
//console.log(long);
console.log("Somme du tableau", " : ", sum);

//Exo2

let numbers2 = [];
let randomNumbers2 = 0;

for (let i = 1; i <= 50; i++) {
    let numRandom = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    numbers2.push(numRandom);
}

console.table(numbers2);

let numMax = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    let item = numbers2[i];

    if (item > numMax) {
        numMax = item;
    }
}

console.log("Valeur Maximal", " : ", numMax);

//Exo3


let numbers3 = [];
let firstValue = 0;

for (let i = 1; i <= 50; i++) {
    let numRandom2 = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    numbers3.push(numRandom2);


    while (numbers3 > 75 && numbers3 <= 100) {
        firstValue++;
        return firstValue;
    };
    
}
console.table(numbers3);
console.log(firstValue);

//console.log("Valeur recherchée", ":",firstValue);

//palindrome 