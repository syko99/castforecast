const ForecastNow = ({ forecast }) => {
    let currentHour = new Date().getHours()
    let currentForecast = forecast.getHourlyForecast()[currentHour]
    let temp = Math.round(currentForecast.temp)
    let maxTemp = Math.round(forecast.getMaxTemp())
    let minTemp = Math.round(forecast.getMinTemp())

    return (
        <div className='p-4 flex flex-col justify-center items-center capitalize rounded-lg 
        md:bg-white/75 md:shadow-md md:col-span-1 md:row-span-3 md:justify-start dark:text-slate-300 
        dark:md:bg-white/10'>
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
