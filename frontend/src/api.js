export const fetchWeatherData = async (cityName) => {
    const response = await fetch(
        `localhost:5000/api/weather?city=${cityName}`
    )
    return response.json();
}