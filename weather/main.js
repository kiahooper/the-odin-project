const WeatherApp = (() => {

  // DOM cache
  const img = document.querySelector("img[id='gif']");
  const input_city = document.querySelector("#city");
  const input_country = document.querySelector("#country");
  const btns = document.querySelectorAll("button");

  // Event-listeners
  btns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      getWeather(e);
    })
  );
  
  // Global vars
  const giphy_api_key = "bXDpivwGu3L925Y9HSlcvr85tPr8JvjU";
  const weather_api_key = "94e5076157191dd71ca334e00da37a2b";

  // Functions
  async function getWeather(e) {
    try {
      const location = await getLocation(e);
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?${location}&APPID=${weather_api_key}&units=metric`,
          { mode: "cors" }
      );
      const responseData = await response.json();
      await displayWeather(responseData);
    } catch (err) {
      console.log(err);
      displayError(err);
    }     
  };

  function getLocation(e) {
    if (e.target.id === "btn_geo_location") {
      return getGeoLocation()
    } else {
      return getManLocation();
    }
  }

  function getManLocation() {
    // maybe make promise here for no input, to send error through to catch at 31
      return `q=${input_city.value}, ${input_country.value}`;
  };

  async function getGeoLocation() { 
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
  }


  async function displayWeather(responseData) {
        // Display GIF
        const GIFResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphy_api_key}&s=${responseData.weather[0].description}`, {mode: 'cors'})
        const GIFResponseData = await GIFResponse.json();
        img.src = GIFResponseData.data.images.original.url;

        // Display weather
        document.querySelector("#info_city_country").innerHTML = responseData.name;
        document.querySelector("#info_date").innerHTML = getCurrentTime();
        document.querySelector("#info_description").innerHTML = `${responseData.weather[0].main}, ${responseData.weather[0].description}`;
        document.querySelector("#info_temp").innerHTML = `${responseData.main.temp}°C`;
        document.querySelector("#info_feels").innerHTML = `Feels like: ${responseData.main.feels_like}°C`;
        document.querySelector("#info_min").innerHTML = `Minimum: ${responseData.main.temp_min}°C`;
        document.querySelector("#info_max").innerHTML = `Maximum: ${responseData.main.temp_max}°C`;

        // Show content, hide front page
        document.querySelector("#home_content").style.display = "none";
        document.querySelector("#result_content").style.display = "block";

    } 

async function displayError(err) { 
  // Display gif
  const GIFResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphy_api_key}&s=error`, {mode: 'cors'})
  const GIFResponseData = await GIFResponse.json();
  img.src = GIFResponseData.data.images.original.url;

  // Portray error
  document.querySelector("#in_case_of_error_wrapper").innerHTML = `ERROR! ${err.message}`;

  // Show content, hide front page
  document.querySelector("#home_content").style.display = "none";
  document.querySelector("#result_content").style.display = "block";

  setTimeout(() => location.reload(), 4000);
}

function getCurrentTime() {
    const t = Date.now();
    const d = new Date(t);
    return d.toDateString();
}

})();