import WeatherConverter from '../../modules/weather_converter'
import CitySearch from '../search'
import WeatherIcon from '../weather_icon'

const ForecastNow = ({ forecast, updateForecast, locationName }) => {
    let city = locationName.city
    let territory = locationName.territory
    let currentHour = new Date().getHours()
    let currentForecast = forecast.getHourlyForecast()[currentHour]
    let temp = Math.round(currentForecast.temp)
    let maxTemp = Math.round(forecast.getMaxTemp())
    let minTemp = Math.round(forecast.getMinTemp())
    let cloudCover = WeatherConverter.skyStatus(currentHour, currentForecast.cloudCover)

    return (
        <div className='p-4 flex flex-col justify-center items-center capitalize rounded-lg 
        md:bg-white/75 md:shadow-md md:col-span-1 md:row-span-3 md:justify-start dark:text-slate-300 
        dark:md:bg-white/10'>
        <CitySearch updateForecast={updateForecast} />
        <div className='w-32 mt-8'><WeatherIcon hour={currentHour} precip={currentForecast.precip} cloudCover={currentForecast.cloudCover}/></div>
            <p className='text-7xl relative md:text-8xl'>{temp}<span className="absolute">&deg;</span></p>
            <p className='mb-4'>{cloudCover}</p>
            <p>{city}, {territory}</p>
            <p>
                <span>{maxTemp}&deg;</span> / <span>{minTemp}&deg;</span>
            </p>
        </div>
    )
}

export default ForecastNow
