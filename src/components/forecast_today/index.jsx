import { useState } from 'react'
import ForecastHour from './forecast_hour'


const ForecastToday = ({forecast}) => {
    const [hourlyForecast] = useState(forecast.getHourlyForecast())

    const hourComponents = hourlyForecast.map((hour) => {
        return (
            <ForecastHour
                hour={hour.hour}
                temp={hour.temp}
                wind={hour.wind}
                precip={hour.precip}
                key={hour.hour}
            />
        )
    })

    return (
        <ul className='w-full max-w-sm p-4 flex gap-4 rounded-lg bg-white/50 backdrop-blur-lg shadow-md overflow-x-auto dark:bg-white/10 dark:text-slate-300'>
            {hourComponents}
        </ul>
    )
}

export default ForecastToday
