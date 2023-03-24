import WeatherAPI from './modules/weatherAPI'

//components
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import ForecastNow from './components/forecast_now'
import ForecastToday from './components/forecast_today'
import ForecastWeek from './components/forecast_week'
import { useEffect, useState } from 'react'

function App() {
    const [forecast, setForecast] = useState()
    const [lightMode, setLightMode] = useState(true)

    function toggleLightMode() {
        lightMode == true ? setLightMode(false) : setLightMode(true)
    }

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
        <div id='colorTheme' className={lightMode === true ? '' : 'dark'}>
            <div className='flex flex-col bg-slate-200 mx-auto h-screen dark:bg-slate-800'>
                <Header toggleLightMode={toggleLightMode} />
                <main className='flex-grow p-2 max-w-screen-xl mx-auto md:p-4'>
                    {typeof forecast != 'undefined' ? (
                        <div className='grid gap-2 h-full md:grid-cols-4 md:grid-rows-3 md:gap-4'>
                            <ForecastNow forecast={forecast.getDay(0)} />
                            <ForecastToday
                                forecastToday={forecast.getDay(0)}
                                forecastTmrw={forecast.getDay(1)}
                            />
                            <ForecastWeek forecast={forecast} />{' '}
                            
                        </div>
                    ) : (
                        ''
                    )}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default App
