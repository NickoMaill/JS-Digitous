//exo1

const integer = 102;
const float = 13.9;
console.log(integer, float);

//exo2

const basic = 34;
const stringifield = basic.toString();
console.log(stringifield);

//exo3

const num = 1.5;
const rounded = Math.round(num);
console.log(rounded);

//exo4

const test = 12;
const bis = 5;
console.log(test + bis);

//exo5

const teest = 143;
const biis = 219;

if(teest > biis){
} else(console.log(false));

if(teest < biis){
} else(console.log(true));

//exo6

let limit = 50;
let score = 44;

if(limit <= score){
    console.log("OK Good!");
} else(console.log("Oh Noooooo...."));

//exo7

let password = "az";
password = password.length;

if(password > 5){
    console.log("The Password is secure");
} else(console.log("The Password is not secure"));

//exo8

if ((limit <= score) && (password > 5)) {
    console.log("Everything is good!");
} else if (((limit >= score) && (password > 5))||((limit <= score) && (password < 5))) {
    console.log("Something is good");
} else {console.log("Nothing is good")};

//BONUS1

let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(random);
if (random === 6) {
    console.log("Yes I Win!!");
} else(console.log("So Close..."));

//

