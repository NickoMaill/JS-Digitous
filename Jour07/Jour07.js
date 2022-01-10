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
const double = array.map (function(num){
    return num * 2;
});

console.log(double);

//exo3

