console.log("Hello Wolrd!");

const axios = require("axios");

let countriesNames = [];

function getCountries() {
    axios.get("https://restcountries.com/v3.1/all").then(function (res) {

        countriesNames = res.data.map(function (arrayCountry) {
            return arrayCountry.name.common;
        });

        console.log(countriesNames.join(" - "));

    });


}

//getCountries();

//exo2

function getFact() {
    axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
        console.log(res.data.value);
    });

};

//getFact()

//exo3

function catchPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function (res) {
        console.log("Id :", id);
        console.log("Name :", res.data.forms[0].name);

    });

};

catchPokemon(151);