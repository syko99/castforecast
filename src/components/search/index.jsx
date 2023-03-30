import LocationFinder from "./location_finder"


const CitySearch = ({updateForecast}) => {
    return (
        <div className="flex items-end">
            <form action="" className="w-full">
                <input type="text" className="w-full bg-transparent p-1 border-b border-slate-400 focus:outline-none focus:border-emerald-500" placeholder="Enter city name..." required/>
            </form>
            <LocationFinder updateForecast={updateForecast}/>
        </div>
    )
}

export default CitySearch