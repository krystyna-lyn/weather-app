
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import HourlyForeCast from './components/HourlyForeCast'
import WeeklyForecast from './components/WeeklyForecast'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { fetchWeatherData as getWeatherData } from './api'

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError('');

            try {
                const data = await getWeatherData(city);
                const [mintemp_c, maxtemp_c] = data.forecast.forecastday[0].day;

                setWeatherData({
                    current: { ...data.current, mintemp_c, maxtemp_c },
                    hourly: data.forecast.forecastday[0].day,
                    weekly: data.forecast.forecastday.slice(1),
                    location: data.location
                })

            } catch (err) {
                setError('Failed to fetch weather data');
            } finally {
                setLoading(false);
            }
        }
        fetchWeather();
    }, [city])


    return (
        <div className="App">
            <div className='container'>
                <SearchBar onSearch={setCity}>
                    {loading && <p>Loading...</p>}
                    {error && <p className="error">{error}</p>}
                    {weatherData && (
                        <>
                            <CurrentWeather data={weatherData.current}
                                location={weatherData.location}
                            />

                            <HourlyForeCast data={weatherData.hourly} />
                            <WeeklyForecast data={weatherData.weekly} />
                        </>
                    )}

                </SearchBar>
            </div>
        </div>
    )
}

export default App;
