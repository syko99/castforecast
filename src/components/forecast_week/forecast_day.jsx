const ForecastDay = ({ date, wind, precip, maxTemp, minTemp}) => {
    return (
        <div className='flex justify-between items-center gap-2'>
            <p className='w-1/3'>{date}</p>
            <p className="text-sm">{wind}mph</p>
            <p className="text-sm">{precip}%</p>
            <p>{maxTemp} / {minTemp}</p>
        </div>
    )
}

export default ForecastDay
