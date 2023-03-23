import { useState } from "react"
import TimeConverter from "../../modules/time_converter"
import ForecastDay from "./forecast_day"

const ForecastWeek = ({forecast}) => {
    
    const [dailyForecast] = useState(forecast.getDays())

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
        <div className='w-full max-w-sm p-4 flex flex-col gap-2 justify-start capitalize rounded-lg bg-white/50 backdrop-blur-lg shadow-md'>
            {dayComponents}
        </div>
    )
}

export default ForecastWeek
