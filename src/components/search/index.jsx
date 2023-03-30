import { useState } from 'react'
import LocationFinder from './location_finder'

const CitySearch = ({ updateForecast }) => {

    const [results, setResults] = useState([])
    
    function updateResults(array) {
        setResults(array)
    }

    async function getCityInfo(event) {
        event.preventDefault()
        let cityName = String(event.target['0'].value).replace(' ', '%20')
        let API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
        let request = await fetch(API_URL)
        let response = await request.json()
        updateResults(response.results)
    }

    function chooseCity(lat, long, city, territory) {
        updateForecast(lat, long, city, territory)
        updateResults([])
    }

    let resultBtns = results.map((result) => {
        return (
            <li key={result.id}>
                <button
                    className='w-full text-start px-2 py-1 flex justify-between hover:backdrop-brightness-95 dark:hover:backdrop-brightness-125'
                    onClick={() => {
                        chooseCity(result.latitude, result.longitude, result.name, result.admin1)
                    }}>
                    <p>{result.name}</p>
                    <p>
                        {result.admin1}, {result.country_code}
                    </p>
                </button>
            </li>
        )
    })

    return (
        <div className='flex items-end gap-2 relative'>
            <form
                className='w-full'
                method='GET'
                onSubmit={getCityInfo}>
                <input
                    type='text'
                    className='w-full bg-transparent p-1 border-b border-slate-400 focus:outline-none focus:border-emerald-500'
                    placeholder='Enter city name...'
                    onKeyUp={() => updateResults([])}
                    required
                />
            </form>
            <LocationFinder updateForecast={updateForecast} />
            <ul className='absolute top-10 left-0 w-full rounded-lg shadow-lg overflow-hidden z-10 bg-white text-sm md:text-base md:w-[200%] dark:bg-slate-600 dark:text-slate-300'>
                {resultBtns}
            </ul>
        </div>
    )
}

export default CitySearch
