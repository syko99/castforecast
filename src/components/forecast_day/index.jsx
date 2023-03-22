import ForecastHour from './forecast_hour'

let hours = [
    { time: 0, temp: 37, wind: 8, precip: 2 },
    { time: 1, temp: 37, wind: 8, precip: 2 },
    { time: 2, temp: 37, wind: 8, precip: 2 },
    { time: 3, temp: 37, wind: 8, precip: 2 },
    { time: 5, temp: 37, wind: 8, precip: 2 },
    { time: 6, temp: 37, wind: 8, precip: 2 },
    { time: 7, temp: 37, wind: 8, precip: 2 },
    { time: 8, temp: 37, wind: 8, precip: 2 },
    { time: 9, temp: 37, wind: 8, precip: 2 },
    { time: 10, temp: 37, wind: 8, precip: 2 },
]

const hourComponents = hours.map(hour => {
    return <ForecastHour time={hour.time} temp={hour.temp} wind={hour.wind} precip={hour.precip} key={hour.time}/>
})

const ForecastToday = () => {
    return (
        <ul className='w-full max-w-sm p-4 flex gap-4 rounded-lg bg-white backdrop-blur-lg overflow-x-scroll'>
            {hourComponents}
        </ul>
    )
}

export default ForecastToday
