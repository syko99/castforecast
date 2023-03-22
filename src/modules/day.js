/**
 * Represents Day object
 * @typedef {object} forecast - {time, temp, wind, precip}
 * @param {forecast} - from WeatherAPI module, contains forecast data
 * @returns functions to grab data from the Day
 */

const Day = (forecast) => {
    let date = forecast.date
    let hours = forecast.data.hours
    let temps = forecast.data.temps
    let winds = forecast.data.winds
    let precips = forecast.data.precips //precipitation chance %

    function getHourlyForecast() {
        let hourlyForecast = []
        for (let i = 0; i < hours.length; i++) {
            let hour = new Date(hours[i]).getHours()
            let temp = temps[i]
            let wind = winds[i]
            let precip = precips[i]
            hourlyForecast.push({
                hour: hour,
                temp: temp,
                wind: wind,
                precip: precip,
            })
        }
        return hourlyForecast
    }

    function getCurrentTemp() {
        let currentHour = new Date().getHours()
        return temps[currentHour]
    }

    function getDate() {
        return date
    }

    function getHours() {
        return hours
    }

    function getTemps() {
        return temps
    }

    function getWinds() {
        return winds
    }

    function getPrecips() {
        return precips
    }

    return {
        getHourlyForecast,
        getCurrentTemp,
        getDate,
        getHours,
        getTemps,
        getWinds,
        getPrecips,
    }
}

export default Day
