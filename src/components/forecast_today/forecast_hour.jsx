import TimeConverter from '../../modules/time_converter'
import raindropIMG from '../../assets/images/raindrop.svg'

const ForecastHour = ({ hour, temp, wind, precip }) => {
    hour = TimeConverter.standardTimeStr(hour)
    temp = Math.round(temp)
    wind = Math.round(wind)
    return (
        <li className='flex flex-col flex-shrink-0 items-center justify-center text-sm px-4 md:w-24 md:bg-white/75 md:shadow-md md:rounded-lg dark:md:bg-white/10'>
            <p className='mb-2'>{hour}</p>
            <p className='text-2xl relative md:text-3xl'>{temp}<span className='absolute'>&deg;</span></p>
            <p>{wind}mph</p>
            <p className='mt-2 flex justify-center items-center'>
                <span className='w-3 aspect-square'>
                    <img src={raindropIMG} alt='raindrop' />
                </span>
                {precip}%
            </p>
        </li>
    )
}

export default ForecastHour
