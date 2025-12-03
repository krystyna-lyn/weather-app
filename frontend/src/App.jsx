import { useState } from 'react'
import './App.css'

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {

            } catch (err) {
                setError('Failed to fetch weather data');
            } finally {
                setLoading(false);
            }
        }
    }, [city])

}


return (
    <div className="App">
        <div className='container'>
            <SearchBar onSearch={setCity}>
                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}
                {weatherData && (
                    <>
                        <CurrentWeather />
                        <HourlyForeCast />
                        <WeeklyForecast />
                    </>
                )}

            </SearchBar>
        </div>
    </div>
)

export default App;
