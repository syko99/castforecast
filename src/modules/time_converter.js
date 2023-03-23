/**
 * Module to convert military time to standard time
 *
 * @function standardTimeStr
 * @param {Number} hour
 * @returns {String} - standard time hour with 'am' or 'pm' suffix
 */

const TimeConverter = (() => {
    function standardTimeStr(hour) {
        ++hour
        let suffix = 'am'
        if (hour == 12) {
            suffix = 'pm'
        }
        else if (hour == 24) {
            hour -= 12
        }
        else if (hour > 12) {
            hour -= 12
            suffix = 'pm'
        }
        return String(hour + suffix)
    }

    return {
        standardTimeStr,
    }
})()

export default TimeConverter
