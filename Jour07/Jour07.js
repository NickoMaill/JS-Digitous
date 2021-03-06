console.log("Hello World!");

//exo01

const fs = require("fs")

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
        return console.log("ERROR!!!", err);
    }

    console.log("Contenu du fichier :", data.toString());
});

//exo2

const array = [1, 2, 3, 4, 5];
const double = array.map(function (num) {
    return num * 2;
});

console.log(double);

//exo3

const longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
];

const shortNames = longNames.map(function (name) { //declaration d'une variable pur l'utilisation de .map
    return { 
        name: `${(name.firstName)} ${(name.lastName)}` 
    }; // declaration d'une variable pour crée un nouvel objet qui stockera le format voulus

});

console.log(shortNames);


//exo4

const array1 = [1, "toto", 34, "javascript", 8];
const numbers = array1.filter(function (filt) {
    return filt >= 0;
});

console.log(numbers);

//exo5

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
const even = array2.filter(function (pair) {
    return pair % 2 - 1;
});

console.log(even);

//exo6

const cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
];

const cakesFilt = cakes.filter(function (cake) {
    return cake.flavor === "chocolate"
});

//console.log(cakesFilt);

const soldOut = cakesFilt.map(function (sold) {
    if (sold.status === "available") {
        return `${(sold.name)} ${(sold.flavor)} ${(sold.status = "sold out !")}`;
    }

});
console.log(soldOut);

