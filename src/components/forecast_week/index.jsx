import TimeConverter from '../../modules/time_converter'
import ForecastDay from './forecast_day'

const ForecastWeek = ({ forecast }) => {
    let dailyForecast = forecast.getDays()

    const dayComponents = dailyForecast.map((day) => {
        let date = TimeConverter.dayOfWeekStr(day.getDate().getDay())
        let wind = Math.round(day.getWindAvg())
        let precip = Math.round(day.getPrecipAvg())
        let clouds = Math.round(day.getCloudCoverAvg())
        let maxTemp = Math.round(day.getMaxTemp())
        let minTemp = Math.round(day.getMinTemp())

        return (
            <ForecastDay
                date={date}
                precip={precip}
                wind={wind}
                clouds={clouds}
                maxTemp={maxTemp}
                minTemp={minTemp}
                key={date}
            />
        )
    })

    return (
        <div className='w-full p-4 flex flex-col gap-4 justify-start capitalize rounded-lg bg-white/75 backdrop-blur-lg
        md:col-span-3 md:row-span-1 md:flex-row md:row-wrap md:overflow-x-auto md:justify-between
        scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-transparent dark:text-slate-300 dark:bg-white/10'>
            {dayComponents}
        </div>
    )
}

export default ForecastWeek
