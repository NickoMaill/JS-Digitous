console.log("Hello World!")

//exo1

let cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
};

console.log(cat);
console.log(cat.age);

// console.log(cat["age"])

if (cat.isCute === true){
    console.log("So Cute!");
};


//exo2

let cat2 = {
    name: "Felix",
    age: 7,
    isCute: false,
};

let cats = [cat, cat2];

console.log(cats[0].age);
console.log(cats[0]["age"]);

console.log(cats[1].isCute);
console.log(cats[1]["isCute"]);

//exo3

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even");
} else {console.log("odd")};

};

checkIfEven(1);
checkIfEven(2);
checkIfEven(3);
checkIfEven(4);
checkIfEven(5);
checkIfEven(6);
checkIfEven(7);
checkIfEven(8);
checkIfEven(9);
checkIfEven(1000000000);

//exo4

function compare(num1, num2){
    if (num1 > num2){
        console.log(num1 + " Is BIGGER");
    } else if(num2 > num1) {
        console.log(num2 + " Is BIGGER");
    } else {console.log("Both are the same");} 
};

compare(10, 45);
compare(34, 8);
compare(3, 3);


//exo5

function addUp(num){

    let total = 0;

    for (let i = 1; i <= num; i++) {
        total += i;
    };
    console.log(total);
};

addUp(12.1);

//exo6

function format(num) {

    let hrs = Math.floor(num / 3600); // Math.floor pour arrondir car, il y a de grandes de tomber sur un nombre a virgule
    let hrsRest = num - (hrs * 3600); // ici on prend le reste de notre division
    let min = Math.floor(hrsRest / 60); // on applique la même opération que hrs en remplaçant le num par le reste hrsRest
    let sec = hrsRest - (min * 60); // ici le reste de notre précédente division qui donne donc des secondes 

    console.log(`${hrs} : ${min} : ${sec}`);
};

format(3700);
format(5600);
format(9000);
format(345678);




