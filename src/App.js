import WeatherAPI from "./modules/weatherAPI";

//components
import ForecastNow from "./components/forecast_now";

WeatherAPI.getForecast()

function App() {
  return (
    <main className="flex-grow">
      <ForecastNow />
    </main>
  );
}

export default App;
