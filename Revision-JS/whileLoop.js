console.log("Hello World!");

let start = 50;

while (start < 200 - 2) {
    
    start += 2;
  console.log(start);
};

//Exo2

let dice = null;
let count = 0; 

while (dice = Math.floor(Math.random() * (6 - 1 + 1) + 1) < 6) {
    count++;    
}
console.log(count);

//Exo3

let ussainBolt = Math.floor(Math.random() * (10 + 1));
let tysonGay = Math.floor(Math.random() * (10 + 1));

while (ussainBolt < 100 && tysonGay < 100){
    ussainBolt++;
    tysonGay++;
    console.log(ussainBolt, tysonGay)
    
    if (ussainBolt === 100 && tysonGay !== 100) {
        console.log("ussain!")

    } else if (tysonGay === 100 && ussainBolt !== 100){
        console.log("tyson!")
    }

}
