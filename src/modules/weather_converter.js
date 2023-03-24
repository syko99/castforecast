/**
 * Converts weather variables to readable english
 */

const WeatherConverter = (() => {
    function skyStatus(currentHour, cloudCoverPercentage) {
        console.log(currentHour);
        let status;
        (currentHour > 5 && currentHour < 18)
            ? (status = 'sunny')
            : (status = cloudStatus(cloudCoverPercentage))
        return status
    }

    function cloudStatus(cloudCoverPercentage) {
        let status = ''
        cloudCoverPercentage > 25
            ? (status = 'partially cloudy')
            : cloudCoverPercentage > 50
            ? (status = 'mostly cloudy')
            : cloudCoverPercentage > 75
            ? (status = 'cloudy')
            : (status = 'clear skies')
        return status
    }

    return {
        skyStatus,
    }
})()

export default WeatherConverter
