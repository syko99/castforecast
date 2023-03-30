/**
 * Represents a week of days
 *
 * @typedef {Object} Week - holds an array containing Days
 * @typedef {Object} Day - {@link ./day.js}
 */

const Week = () => {
    let days = []
    let location = { city: null, territory: null }

    function addDay(Day) {
        days.push(Day)
    }

    function getDays() {
        return days
    }

    function getDay(index) {
        return days[index]
    }

    function setLocation(_location) {
        location.city = _location.city
        location.territory = _location.territory
    }

    function getLocation() {
        return location
    }

    return { addDay, getDays, getDay, getLocation, setLocation }
}

export default Week
