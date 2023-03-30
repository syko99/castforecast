/**
 * Converts weather variables to readable english
 */

const WeatherConverter = (() => {
    function skyStatus(currentHour, cloudCoverPercentage) {
        let status
        if (currentHour > 5 && currentHour < 18 && cloudCoverPercentage < 25) {
            status = 'sunny'
        } else {
            status = cloudStatus(cloudCoverPercentage)
        }
        return status
    }

    function cloudStatus(cloudCoverPercentage) {
        let status = 'clear skies'
        if (cloudCoverPercentage > 25) {
            status = 'partially cloudy'
        }
        if (cloudCoverPercentage > 50) {
            status = 'mostly cloudy'
        }
        if (cloudCoverPercentage > 75) {
            status = 'cloudy'
        }
        return status
    }

    return {
        skyStatus,
    }
})()

export default WeatherConverter
