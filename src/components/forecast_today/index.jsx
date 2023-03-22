import ForecastHour from './forecast_hour'

let hourlyForecast = []

function populateHourlyForecast(Day) {

}

const ForecastToday = ({forecast}) => {

    console.log(forecast);

    const hourComponents = hourlyForecast.map((hour) => {
        return (
            <ForecastHour
                time={hour.time}
                temp={hour.temp}
                wind={hour.wind}
                precip={hour.precip}
                key={hour.time}
            />
        )
    })

    return (
        <ul className='w-full max-w-sm p-4 flex gap-4 rounded-lg bg-white backdrop-blur-lg overflow-x-auto'>
            {hourComponents}
        </ul>
    )
}

export default ForecastToday
