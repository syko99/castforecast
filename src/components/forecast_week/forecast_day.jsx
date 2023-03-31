import raindropIMG from '../../assets/images/raindrop.svg'
import WeatherIcon from '../weather_icon'

const ForecastDay = ({ date, wind, precip, clouds, maxTemp, minTemp }) => {
    return (
        <div
            className='grid grid-cols-6 place-items-start items-center rounded-lg 
        md:p-4 md:flex-shrink-0 md:flex md:flex-col md:justify-between md:w-28 md:gap-4 md:bg-white/75 dark:md:bg-white/10'>
            <p className='col-span-2 md:text-lg md:font-medium'>{date}</p>
            <div className='w-6 md:w-16 my-auto'>
                <WeatherIcon hour={11} precip={precip} cloudCover={clouds} />
            </div>
            <p className='text-sm md:text-base'>{wind}mph</p>
            <p className='text-sm flex items-center md:text-base'>
                <span className='w-3 aspect-square'>
                    <img src={raindropIMG} alt='raindrop' />
                </span>
                {precip}%
            </p>
            <p className='mb-auto'>
                {maxTemp} / {minTemp}
            </p>
        </div>
    )
}

export default ForecastDay
