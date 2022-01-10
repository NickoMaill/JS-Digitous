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

const shortNames = longNames.map(function(longNames){
        return `${(longNames.firstName)} ${(longNames.lastName)}`
})

console.log(shortNames);


//exo4

const array1 = [1, "toto", 34, "javascript", 8];
const numbers = array1.filter(function(filt){
    return filt >= 0;
})

console.log(numbers);

//exo5

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
const even = array2.filter(function(pair){
    return pair % 2 - 1;
})

console.log(even);

//exo4

