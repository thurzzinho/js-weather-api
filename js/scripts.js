//APIs
const apiKey = "e994a336092581a7c52f6aa007b924e9";
const apiCountryURL = "https://flagfeed.com/country/";

const cityInput = document.querySelector("#city-input"); //campo de input
const searchBtn = document.querySelector("#search"); // ícone/botão de pesquisa


// Elementos
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descriptionElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#weather-data");

//Elementos de tratamento de erro
const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#loader");

//Sugestões de cidades
const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");