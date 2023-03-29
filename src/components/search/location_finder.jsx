import mapPinSVG from '../../assets/images/map_pin.svg'

function requestLocation(){
    navigator.geolocation.getCurrentPosition(response => {
        console.log(response.coords.latitude);
        console.log(response.coords.longitude);
    })
}


const LocationFinder = () => {


    return (
        <button className='w-6 h-6' onClick={requestLocation}><img src={mapPinSVG} alt="map pin" /></button>
    )
}

export default LocationFinder