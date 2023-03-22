const ForecastHour = ({time, temp, wind, precip,}) => {
    return (
        <li className='flex flex-col items-center'>
            <p className="text-sm mb-2">{time}pm</p>
            <p className="text-3xl">{temp}&deg;</p>
            <p className="text-base">{wind}mph</p>
            <p className="text-sm mt-2">{precip}%</p>
        </li>
    )
}

export default ForecastHour
