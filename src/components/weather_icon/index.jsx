import IconConverter from '../../modules/icon_converter'

const WeatherIcon = ({ hour, precip, cloudCover }) => {
    let icon = IconConverter.setIcon(hour, precip, cloudCover)

    return <img src={icon} alt='weather icon' />
}

export default WeatherIcon
