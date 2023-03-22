/**
 * Represents a week of days
 * 
 * @typedef {Object} Week - holds an array containing Days
 * @typedef {Object} Day - {@link ./day.js}
 */

const Week = () => {
    let days = []

    function addDay(Day) {
        days.push(Day)
    }

    function getDays() {
        return days
    }

    function getDay(index) {
        return days[index]
    }

    return { addDay, getDays, getDay }
}

export default Week
