export const getWeatherData = async (cityName) => {
    const response = await fetch(
        `http://localhost:3001/api/weather?city=${cityName}`
    );
    return response.json();
};