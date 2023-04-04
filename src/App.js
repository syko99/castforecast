import WeatherAPI from './modules/weatherAPI'

//components
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import About from './components/about'
import { useEffect, useState } from 'react'
import Forecast from './components/forecast'

function App() {
    const [forecast, setForecast] = useState()
    const [lightMode, setLightMode] = useState(true)
    const [activePage, setActivePage] = useState('forecast')

    async function updateForecast(lat, long, city, territory) {
        WeatherAPI.updateCoords(lat, long, city, territory)
        let week = await WeatherAPI.getForecast()
        setForecast(week)
    }

    function toggleLightMode() {
        lightMode === true ? setLightMode(false) : setLightMode(true)
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

    function changeActivePage(pageName) {
        pageName === 'forecast' ? setActivePage('forecast') : setActivePage('about')
    }

    return (
        <div id='colorTheme' className={lightMode === true ? '' : 'dark'}>
            <div className='flex flex-col bg-sky-200 mx-auto min-h-screen dark:bg-slate-800'>
                <Header toggleLightMode={toggleLightMode} changeActivePage={changeActivePage} />
                <main className='flex-grow p-2 max-w-screen-xl mx-auto md:p-4'>
                    {activePage === 'about' ? (
                        <About changeActivePage={changeActivePage} />
                    ) : (<Forecast forecast={forecast} updateForecast={updateForecast} lightMode={lightMode}/>)}

                </main>
                <Footer />
            </div>
        </div>
    )
}

export default App
