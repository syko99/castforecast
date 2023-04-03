import ForecastHour from './forecast_hour'
import LineChart from './chart_line_hour'
import { useState } from 'react'

import TimeConverter from '../../modules/time_converter'

const ForecastToday = ({ forecastToday, forecastTmrw }) => {
    let currentHour = new Date().getHours()
    let hourlyForecast = forecastToday
        .getHourlyForecast()
        .slice(currentHour)
        .concat(forecastTmrw.getHourlyForecast().slice(0, currentHour))

    const [chartData] = useState({
        labels: hourlyForecast.map((hour) => {
            return TimeConverter.standardTimeStr(hour.hour)
        }),
        datasets: [
            {
                label: 'Temperature',
                data: hourlyForecast.map((hour) => {
                    return hour.temp
                }),
            },
        ]
    })

    const hourComponents = hourlyForecast.map((hourForecast) => {
        return <ForecastHour hourForecast={hourForecast} key={hourForecast.hour} />
    })
    return (
        <div className='w-full overflow-x-hidden flex flex-col grid-cols-1 md:col-span-3 md:row-span-2'>
            <ul
                className='h-1/2 flex rounded-lg bg-white/75 backdrop-blur-lg shadow-md overflow-x-auto relative
             scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-400
             md:p-0 md:gap-4 md:bg-transparent md:shadow-none dark:bg-white/10 dark:text-slate-300 dark:md:bg-transparent'>
                {hourComponents}
            </ul>
            <LineChart forecastData={chartData} />
        </div>
    )
}

export default ForecastToday
