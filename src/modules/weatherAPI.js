/**
 * Module to grab weather data from API: {@link https://open-meteo.com}
 * Default coordinates to Minneapolis, MN
 * 
 * @function getForecast()
 * @returns {Week}
 */

import Day from './day'
import Week from './week'

const WeatherAPI = (() => {
    let latitude = '44.98'
    let longitude = '-93.26'

    function getAPI() {
        let API_URL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
            `&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min` +
            `&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago`

        return API_URL
    }

    async function getForecast() {
        let week = Week()
        try {
            let request = await fetch(getAPI())
            let response = await request.json()

            let responseHours = Array.from(response.hourly.time)
            let responseTemps = Array.from(response.hourly.temperature_2m)
            let responseWinds = Array.from(response.hourly.windspeed_10m)
            let responsePrecips = Array.from(response.hourly.precipitation_probability)
            let responseClouds = Array.from(response.hourly.cloudcover)
            let responseMaxTemp = Array.from(response.daily.temperature_2m_max)
            let responseMinTemp = Array.from(response.daily.temperature_2m_min)

            let numDays = responseHours.length / 24
            for (let i = 0; i < numDays; i++) {
                let dailyForecast = { date: undefined, data: {} }
                //split forecast array into 7 parts, each with 24 hour length.
                dailyForecast.date = new Date(responseHours.slice(i * 24, i * 24 + 24)[0])
                dailyForecast.data.hours = responseHours.slice(i * 24, i * 24 + 24)
                dailyForecast.data.temps = responseTemps.slice(i * 24, i * 24 + 24)
                dailyForecast.data.winds = responseWinds.slice(i * 24, i * 24 + 24)
                dailyForecast.data.precips = responsePrecips.slice(i * 24, i * 24 + 24)
                dailyForecast.data.clouds = responseClouds.slice(i * 24, i * 24 + 24)
                dailyForecast.data.maxTemp = responseMaxTemp.slice(i, i + 1)
                dailyForecast.data.minTemp = responseMinTemp.slice(i, i + 1)
                week.addDay(Day(dailyForecast))
            }
        } catch (error) {
            console.error(error)
        }
        return week
    }

    function updateCoords(lat, long) {
        latitude = lat
        longitude = long
    }

    return {
        updateCoords,
        getForecast,
    }
})()

export default WeatherAPI
