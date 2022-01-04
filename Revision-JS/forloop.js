console.log("Hello World!");

//Exo1

let num = 0;

for (let i = 5 ; i <= 10; i++) {
    num += i * i;
}
console.log(num);

//Exo2

let count = 0;

for (let i = 100 ; i <= 1000; i++) {
    if (i % 7 === 0) {
        count++; // qui veut dire multi + 1 pour a ajouter le nombre de multiple de 7
    };
};

console.log(count);


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

