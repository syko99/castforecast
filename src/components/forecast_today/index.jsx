
import ForecastHour from './forecast_hour'

const ForecastToday = ({ forecastToday, forecastTmrw }) => {
    let currentHour = new Date().getHours()
    let hourlyForecast = forecastToday
        .getHourlyForecast()
        .slice(currentHour)
        .concat(forecastTmrw.getHourlyForecast().slice(0, currentHour))

    const hourComponents = hourlyForecast.map((hourForecast) => {
        return (
            <ForecastHour
                hourForecast = {hourForecast}
                key={hourForecast.hour}
            />
        )
    })

    return (
        <div className='w-full overflow-x-hidden md:col-span-3'>
            <ul className='w-full h-full flex rounded-lg bg-white/75 backdrop-blur-lg shadow-md overflow-x-auto relative
             scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-400
             md:p-0 md:gap-4 md:bg-transparent md:shadow-none dark:bg-white/10 dark:text-slate-300 dark:md:bg-transparent'>
                {hourComponents}
            </ul>
        </div>
    )
}

export default ForecastToday
