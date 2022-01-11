console.log("Hello Wolrd!");

const axios = require("axios");

let countriesNames = [];

function getCountries() {
    axios.get("https://restcountries.com/v3.1/all").then(function (res) {

        res.data.map(function (arrayCountry) {
            countriesNames.push(arrayCountry.name.common)
        });

        console.log(countriesNames)

    });


}

getCountries();