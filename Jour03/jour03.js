//exo1

const fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

//exo2

const ingredients = ["eggs", "milk", "butter"];

console.table(ingredients[1]);

console.table(ingredients.indexOf("butter"));

//exo3

const objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.table(objects);

objects.pop();
console.table(objects);

objects.push("laptop");
console.table(objects);

objects.shift();
console.table(objects);

//exo4

let numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.table(numbers);

numbers.sort((a, b) => a - b);
console.table(numbers);

//exo5

let total = 0;
let limit = 10;

for (let i = 0; i <= limit; i++) {
    total += i;
}
    console.log(total);

// exo6

let sentence = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
let result = "";
 
for (let i = sentence.length - 1; i >= 0; i--) {
   result += sentence[i];
   
}
console.log(result);
