console.log("Hello World!");

function multiply(wholeNum) {

    if (wholeNum === undefined) {
        return "error"
    }

    for (let i = 1; i <= 10; i++) {
        let result = wholeNum * i;
        
        console.log(result);
    }
}

function addition(wholeNum2) {

    if (wholeNum2 === undefined) {
        return "error"
    }

    for (let i = 1; i <= 10; i++) {
        let result2 = wholeNum2 + i;
        
        console.log(result2);
    }
}