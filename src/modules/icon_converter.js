import SunIcon from '../assets/images/weather_icons/sunny.svg'
import MoonIcon from '../assets/images/weather_icons/moon.svg'
import CloudIcon from '../assets/images/weather_icons/cloud.svg'
import CloudRainIcon from '../assets/images/weather_icons/cloud_rain.svg'
import PartialCloudDayIcon from '../assets/images/weather_icons/partial_cloud_day.svg'
import PartialCloudNightIcon from '../assets/images/weather_icons/partial_cloud_night.svg'
import PartialCloudRainDayIcon from '../assets/images/weather_icons/partial_cloud_rain_day.svg'
import PartialCloudRainNightIcon from '../assets/images/weather_icons/partial_cloud_rain_night.svg'

const IconConverter = (() => {
    function setIcon(hour, precip, cloudCover) {
        let icon = SunIcon
        if (hour > 5 && hour <= 18) {
            if (cloudCover > 35) {icon = PartialCloudDayIcon}
            if (cloudCover > 35 && precip >= 50) {icon = PartialCloudRainDayIcon}
            if (cloudCover > 75) {icon = CloudIcon}
            if (cloudCover > 75 && precip >= 50) {icon = CloudRainIcon}
        }
        if (hour <= 5 || hour > 18) {
            icon = MoonIcon
            if (cloudCover > 35) {icon = PartialCloudNightIcon}
            if (cloudCover > 35 && precip >= 50) {icon = PartialCloudRainNightIcon}
            if (cloudCover > 75) {icon = CloudIcon}
            if (cloudCover > 75 && precip >= 50) {icon = CloudRainIcon}
        }
        return icon
    }

    return {
        setIcon,
    }
})()

export default IconConverter
