const ForecastNow = ({ forecast }) => {
    let currentHour = new Date().getHours()
    let currentForecast = forecast.getHourlyForecast()[currentHour]
    let temp = Math.round(currentForecast.temp)

    return (
        <div className='p-4 flex flex-col justify-start capitalize rounded-lg bg-white shadow-md'>
            <p className='text-6xl'>{temp}&deg;</p>
            <p className='mb-4'>cloudy</p>
            <p>City Name</p>
            <p>
                <span>41&deg;</span> / <span>31&deg;</span>
            </p>
        </div>
    )
}

export default ForecastNow
