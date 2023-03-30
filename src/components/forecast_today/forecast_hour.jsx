import TimeConverter from '../../modules/time_converter'
import raindropIMG from '../../assets/images/raindrop.svg'
import WeatherIcon from '../weather_icon'



const ForecastHour = ({ hourForecast }) => {
    let hour = TimeConverter.standardTimeStr(hourForecast.hour)
    let temp = Math.round(hourForecast.temp)
    let wind = Math.round(hourForecast.wind)
    let precip = hourForecast.precip
    return (
        <li className='flex flex-col flex-shrink-0 items-center justify-center gap-1 text-sm p-4 md:w-24 md:bg-white/75 md:shadow-md md:rounded-lg dark:md:bg-white/10'>
            <p>{hour}</p>
            <div className='w-8 h-8'><WeatherIcon hour={hourForecast.hour} precip={precip} cloudCover={hourForecast.cloudCover}/></div>
            <p className='text-2xl relative md:text-3xl'>{temp}<span className='absolute'>&deg;</span></p>
            <p>{wind}mph</p>
            <p className='flex justify-center items-center'>
                <span className='w-3 aspect-square'>
                    <img src={raindropIMG} alt='raindrop' />
                </span>
                {precip}%
            </p>
        </li>
    )
}

export default ForecastHour
