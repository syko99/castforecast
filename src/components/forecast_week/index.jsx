import TimeConverter from "../../modules/time_converter"
import ForecastDay from "./forecast_day"

const ForecastWeek = ({forecast}) => {
    
    let dailyForecast = forecast.getDays()

    const dayComponents = dailyForecast.map((day) => {
        let date = TimeConverter.dayOfWeekStr(day.getDate().getDay())
        let wind = Math.round(day.getWindAvg())
        let precip = Math.round(day.getPrecipAvg())
        let maxTemp = Math.round(day.getMaxTemp())
        let minTemp = Math.round(day.getMinTemp())

        return (
            <ForecastDay
                date={date}
                precip={precip}
                wind={wind}
                maxTemp={maxTemp}
                minTemp={minTemp}
                key={date}
            />
        )
    })

    return (
        <div className='w-full p-4 flex flex-col gap-2 justify-start capitalize rounded-lg bg-white/75 backdrop-blur-lg shadow-md md:col-span-3 md:row-span-2 dark:bg-white/10 dark:text-slate-300'>
            {dayComponents}
        </div>
    )
}

export default ForecastWeek
