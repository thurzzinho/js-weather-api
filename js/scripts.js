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

// Animação do Loader
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

// Função para obter os dados do clima de acordo com a API
const getWeatherData = async (city) => {
  toggleLoader();

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  toggleLoader();

  return data;
};

// Função para exibir a mensagem de erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide");
};

// Função para esconder as informações quando a busca for feita
const hideInformation = () => {
  errorMessageContainer.classList.add("hide");
  weatherContainer.classList.add("hide");

  suggestionButtons.classList.add("hide");
};

// Função para exibir os dados do clima de acordo com a API
const showWeatherData = async (city) => {
  hideInformation();

  const data = await getWeatherData(city);

  if (data.cod === "404") {
    showErrorMessage();
    return;
  }

  // Exibição dos dados do clima de acordo com a API

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descriptionElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute( "src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;



  weatherContainer.classList.remove("hide");
};

// Eventos
searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);
  }
});

// Sugestões
suggestionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("id");

    showWeatherData(city);
  });
});
