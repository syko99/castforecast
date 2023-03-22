import WeatherAPI from "./modules/weatherAPI";

//components
import ForecastNow from "./components/forecast_now";
import ForecastToday from "./components/forecast_day";
import ForecastWeek from "./components/forecast_week";

WeatherAPI.getForecast()

function App() {
  return (
    <main className="flex-grow p-2">
      <div className="grid gap-4">
        <ForecastNow />
        <ForecastToday />
        <ForecastWeek />
      </div>
    </main>
  );
}

export default App;
