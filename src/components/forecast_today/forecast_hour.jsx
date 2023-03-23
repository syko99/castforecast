import TimeConverter from '../../modules/time_converter'

const ForecastHour = ({ hour, temp, wind, precip }) => {
    hour = TimeConverter.standardTimeStr(hour)

    return (
        <li className='flex flex-col items-center'>
            <p className='text-sm mb-2'>{hour}</p>
            <p className='text-3xl'>{temp}&deg;</p>
            <p className='text-base'>{wind}mph</p>
            <p className='text-sm mt-2'>{precip}%</p>
        </li>
    )
}

export default ForecastHour
