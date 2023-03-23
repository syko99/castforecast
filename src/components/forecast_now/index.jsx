const ForecastNow = ({ forecast }) => {
    let currentHour = new Date().getHours()
    let currentForecast = forecast.getHourlyForecast()[currentHour]
    let temp = Math.round(currentForecast.temp)
    let maxTemp = Math.round(forecast.getMaxTemp())
    let minTemp = Math.round(forecast.getMinTemp())

    return (
        <div className='p-4 flex flex-col justify-center items-center capitalize rounded-lg dark:text-slate-300'>
            <p className='text-7xl relative md:text-8xl'>{temp}<span className="absolute">&deg;</span></p>
            <p className='mb-4'>cloudy</p>
            <p>City Name</p>
            <p>
                <span>{maxTemp}&deg;</span> / <span>{minTemp}&deg;</span>
            </p>
        </div>
    )
}

export default ForecastNow
