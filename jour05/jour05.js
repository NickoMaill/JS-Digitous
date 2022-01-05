console.log("Hello World!");

function calculate(n1, op, n2) {

    if (op === "+") {
        return parseInt(n1) + parseInt(n2);
        
    } else if (op === "-") {
        return parseInt(n1) - parseInt(n2);
        
    }  else if (op === "*") {
        return parseInt(n1) * parseInt(n2);
        
    }  else if (op === "/") {
        return parseInt(n1) / parseInt(n2);
        
    }   else if (op === "%") {
        return parseInt(n1) % parseInt(n2);
    }
};

//console.log(process.argv[2]);
console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
