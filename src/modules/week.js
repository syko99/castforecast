/**
 * 
 * @param {Array} weekDayArray - from WeatherAPI module, an array of @var {Day}
 * @returns functions to manipulate days
 */

const Week = (weekDayArray) => {
    days = []

    function getDays() {
        return days
    }

    return {
        getDays
    };
};

export default Week;
