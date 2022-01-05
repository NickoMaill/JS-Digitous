console.log("Hello World!");

function calculate(n1, op, n2) {
    if (process.argv.length < 5 || process.argv.length > 5) {
        return "error"
    }

    if (op === "+") {
        return parseInt(n1) + parseInt(n2);

    } else if (op === "-") {
        return parseInt(n1) - parseInt(n2);

    } else if (op === "x") {
        return parseInt(n1) * parseInt(n2);

    } else if (op === "/") {
        return parseInt(n1) / parseInt(n2);

    } else if (op === "%") {
        return parseInt(n1) % parseInt(n2);
    }
};

console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));


//exo2

function multiply(wholeNum) {

    if (wholeNum === undefined) {
        return "error"
    }

    for (let i = 1; i <= 10; i++) {
        let result = wholeNum * i;
        
        console.log(result);
    }
}

multiply(process.argv[2]);

//exo3

