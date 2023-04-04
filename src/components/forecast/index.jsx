import ForecastNow from '../forecast_now'
import ForecastToday from '../forecast_today'
import ForecastWeek from '../forecast_week'

const Forecast = ({ forecast, updateForecast, lightMode }) => {
    return (
        <div>
            {typeof forecast != 'undefined' ? (
                <div className='grid gap-2 md:grid-cols-4 md:grid-rows-3 md:gap-4'>
                    <ForecastNow
                        forecast={forecast.getDay(0)}
                        updateForecast={updateForecast}
                        locationName={forecast.getLocation()}
                    />
                    <ForecastToday
                        forecastToday={forecast.getDay(0)}
                        forecastTmrw={forecast.getDay(1)}
                        lightMode={lightMode}
                    />
                    <ForecastWeek forecast={forecast} />{' '}
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Forecast
