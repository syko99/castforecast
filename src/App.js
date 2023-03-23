import WeatherAPI from './modules/weatherAPI'

//components
import ForecastNow from './components/forecast_now'
import ForecastToday from './components/forecast_today'
import ForecastWeek from './components/forecast_week'
import { useEffect, useState } from 'react'

function App() {
    const [forecast, setForecast] = useState()

    useEffect(() => {
        async function getForecast() {
            try {
                let week = await WeatherAPI.getForecast()
                setForecast(week)
            } catch (error) {
                console.error(error)
            }
        }
        getForecast()
    }, [])
    return (
        <main className='flex-grow p-2'>
            {typeof forecast != 'undefined' ? (
                <div className='grid gap-2'>
                    <ForecastNow forecast={forecast.getDay(0)} />
                    <ForecastToday forecast={forecast.getDay(0)} />
                    <ForecastWeek forecast={forecast} />{' '}
                </div>
            ) : (
                ''
            )}
        </main>
    )
}

export default App
