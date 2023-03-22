/**
 * Represents Day object
 * @param {Object{}} forecast - from WeatherAPI module, contains forecast data
 * @returns functions to grab data from the Day
 */

const Day = (forecast) => {
    let date = forecast.date;
    let hours = forecast.data.hours;
    let temps = forecast.data.temps;

    function getCurrentTemp() {
        let currentHour = new Date().getHours()
        return temps[currentHour];
    }

    function getHourlyTemps() {
        let hourlyTemps = [];
        for (let i = 0; i < hours.length; i++) {
            let hour = new Date(hours[i]).getHours();
            let temp = temps[i];
            hourlyTemps.push({ hour: hour, temp: temp });
        }
        return hourlyTemps;
    }

    function getDate() {
        return date;
    }

    function getHours() {
        return hours;
    }

    function getTemps() {
        return temps;
    }

    return { getCurrentTemp, getHourlyTemps, getDate, getHours, getTemps };
};

export default Day;
