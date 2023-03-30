import IconConverter from '../../modules/icon_converter'

const WeatherIcon = ({ forecast }) => {
    let icon = IconConverter.setIcon(forecast.hour, forecast.precip, forecast.cloudCover)

    return <img src={icon} alt='weather icon' />
}

export default WeatherIcon
