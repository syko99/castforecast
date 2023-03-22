/** 
 * Module to grab weather data from API: {@link https://open-meteo.com}
 */

import Day from "./day";

const WeatherAPI = (() => {
    let API_URL =
        'https://api.open-meteo.com/v1/forecast?latitude=44.94&longitude=-93.09&hourly=temperature_2m,precipitation_probability,windspeed_10m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch';

    let weekdays = [];

    async function getForecast() {
        try {
            let request = await fetch(API_URL);
            let response = await request.json();

            let responseHours = Array.from(response.hourly.time);
            let responseTemps = Array.from(response.hourly.temperature_2m);
            let responseWinds = Array.from(response.hourly.windspeed_10m);
            let responsePrecips = Array.from(response.hourly.precipitation_probability);

            let numDays = responseHours.length / 24;
            for (let i = 0; i < numDays; i++) {
                let dailyForecast = {date: undefined, data: {}};
                dailyForecast.date = new Date(responseHours.slice(i * 24, i * 24 + 24)[0]);
                dailyForecast.data.hours = responseHours.slice(i * 24, i * 24 + 24);
                dailyForecast.data.temps = responseTemps.slice(i * 24, i * 24 + 24);
                dailyForecast.data.winds = responseWinds.slice(i * 24, i * 24 + 24);
                dailyForecast.data.precips = responsePrecips.slice(i * 24, i * 24 + 24);
                weekdays.push(Day(dailyForecast))
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getForecast,
    };
})();

export default WeatherAPI;
