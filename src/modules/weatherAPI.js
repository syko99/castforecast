const WeatherAPI = (() => {
  async function getForecast() {
    let request = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=44.94&longitude=-93.09&hourly=temperature_2m&temperature_unit=fahrenheit"
    );
    let response = await request.json();
    console.log(response);
  }

  return {
    getForecast,
  };
})();

export default WeatherAPI;
