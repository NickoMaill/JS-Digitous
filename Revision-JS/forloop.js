console.log("Hello World!");

//Exo1

let num = 5;

for (let i = num ; i <=10; i++) {
    num += (Math.pow(i, 2));
}
console.log(num);

//Exo2

let multi = 0;

for (let i = 100 ; i <= 1000; i++) {
    if (i % 7) {
        result = multi + 1;
    };
};
console.log(multi + 1);


// Exo3


for (i = 1 ; i <= 20; i++) {
    let dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(dice)
    if (dice >= 5) {
        console.log(dice);
    };
};