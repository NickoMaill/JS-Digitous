console.log("Hello Wolrd!");

const axios = require("axios");

let countriesNames = [];

function getCountries() {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
    countriesNames = res.data.map((arrayCountry) => {
      return arrayCountry.name.common;
    });

    console.log(countriesNames.join(" - "));
  });
}

//getCountries();

//exo2

function getFact() {
  axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
    console.log(res.data.value);
  });
}

//getFact()

//exo3

function catchPokemon(id) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      console.log(`Id : ${id} \nName : ${res.data.forms[0].name}`);
      
    })
    .catch((err) => {
      console.log(err);
    });
}

catchPokemon(898);
