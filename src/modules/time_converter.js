/**
 * Module to convert military time to standard time
 *
 * @function standardTimeStr
 * @param {Number} hour
 * @returns {String} - standard time hour with 'am' or 'pm' suffix
 */

const TimeConverter = (() => {
    function dayOfWeekStr(day) {
        let dayOfWeek
        day === 0
            ? (dayOfWeek = 'sunday')
            : day === 1
            ? (dayOfWeek = 'monday')
            : day === 2
            ? (dayOfWeek = 'tuesday')
            : day === 3
            ? (dayOfWeek = 'wednesday')
            : day === 4
            ? (dayOfWeek = 'thursday')
            : day === 5
            ? (dayOfWeek = 'friday')
            : day === 6
            ? (dayOfWeek = 'saturday')
            : (dayOfWeek = '')
        return dayOfWeek
    }

    function standardTimeStr(hour) {
        hour = Number(hour)
        ++hour
        let suffix = 'am'
        if (hour === 12) {
            suffix = 'pm'
        } else if (hour === 24) {
            hour -= 12
        } else if (hour > 12) {
            hour -= 12
            suffix = 'pm'
        }
        return String(hour + suffix)
    }

    return {
        standardTimeStr,
        dayOfWeekStr,
    }
})()

export default TimeConverter
