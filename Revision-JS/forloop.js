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
    if (dice >= 5) {
        console.log(dice);
    };
};

//exo4

/* la console nous affichera (dans l'ordre):
10
5
17
14 */

//Exo 5

/* la console nous affichera (dans l'ordre):
12
21
9*/

//Exo6

/*la console nous affichera (dans l'ordre) : 
-3
0
4
-1
-3 */