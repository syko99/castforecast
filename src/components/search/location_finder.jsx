import mapPinSVG from '../../assets/images/map_pin.svg'



const LocationFinder = ({updateForecast}) => {

    function requestLocation(){
        navigator.geolocation.getCurrentPosition(response => {
            updateForecast({'lat':response.coords.latitude, 'long':response.coords.longitude})
        })
    }
    
    return (
        <button className='w-6 h-6' onClick={requestLocation}><img src={mapPinSVG} alt="map pin" /></button>
    )
}

export default LocationFinder