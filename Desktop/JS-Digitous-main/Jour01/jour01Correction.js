//exo 1

console.log("Hello World!");

//exo 2

// var test = "My name is Nicolas"; ------> ceci est un string, considéré comme une valeur primitive
// let test = "My name is Nicolas";
const test = "My name is Nicolas"; //--------> utiliser celle-ci si la variable ne change pas, cela évite les problêmes. 

console.log(test);

//exo 3

let firstname = "Nicolas";

console.log("Nice to meet you " + firstname);
// console.log(`nice to meet you ${firstname}`); -----> template string

//exo 4

let testLength = "I'm very long !";

console.log(testLength);

//exo5

let food = "croissant is meh";

food = food.replace("meh", "so good"); // ici on fait une mutation de donnée, on peut aussi parler de réassignation
//entre les parenthèses ce sont des paramètres 

console.log(food);

//exo6

let basic = "This is cool ";
let basicUp = basic.toUpperCase(); //---------> ne pas oublié les parenthèse même si elles sont vides.
let basicDown = basic.toLowerCase();

console.log(basic + basicUp + basicDown);

//exo7

let word = "banana";
let letters = word.split("");
console.log(letters);

//exo8

let age = 26;
let template = (`I'm ${age} years old`);
console.log(template);

//Bonus

let changed = "Bonjour";
let sel = changed.replace(/o/g, "a");

console.log(sel);
