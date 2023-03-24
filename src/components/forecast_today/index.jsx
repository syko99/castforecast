import { useState } from 'react'
import ForecastHour from './forecast_hour'

import arrowLeftIcon from '../../assets/images/arrow_left.svg'
import arrowRightIcon from '../../assets/images/arrow_right.svg'

const ForecastToday = ({ forecastToday, forecastTmrw }) => {
    let currentHour = new Date().getHours()
    let forecast = forecastToday
        .getHourlyForecast()
        .slice(currentHour)
        .concat(forecastTmrw.getHourlyForecast().slice(0, currentHour))
    const [hourlyForecast] = useState(forecast)

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
        <div className='w-full overflow-x-hidden md:col-span-3'>
            <ul className='w-full h-full flex rounded-lg bg-white/75 backdrop-blur-lg shadow-md overflow-x-auto relative
             md:p-0 md:gap-4 md:bg-transparent md:shadow-none dark:bg-white/10 dark:text-slate-300 dark:md:bg-transparent'>
                {hourComponents}
            </ul>
        </div>
    )
}

export default ForecastToday
