import raindropIMG from '../../assets/images/raindrop.svg'

const ForecastDay = ({ date, wind, precip, maxTemp, minTemp }) => {
    return (
        <div className='grid grid-cols-5 place-items-start'>
            <p className='col-span-2'>{date}</p>
            <p className='text-sm'>{wind}mph</p>
            <p className='text-sm flex items-center'>
                <span className='w-3 aspect-square'>
                    <img src={raindropIMG} alt='raindrop' />
                </span>
                {precip}%
            </p>
            <p className=''>
                {maxTemp} / {minTemp}
            </p>
        </div>
    )
}

export default ForecastDay
