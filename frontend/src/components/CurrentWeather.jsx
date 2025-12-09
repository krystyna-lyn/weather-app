import { parse, format } from 'date-fns';
import './CurrentWeather.css';

const getDayandHour = (rawdate) => {
    const date = parse(
        rawdate,
        'yyyy-MM-dd HH:mm',
        new Date()
    );
    return format(date, 'EEEE, h a');
}

const getWindDescription = (wind_kph) => {
    if (wind_kph < 10) return 'Calm'
    if (wind_kph < 20) return 'Light breeze'
    if (wind_kph < 30) return 'Moderate breeze'
    if (wind_kph < 40) return 'Windy'
    return 'Strong wind'
}
const getHumDescription = (humidity) => {
    if (humidity < 30) return 'Dry'
    if (humidity < 60) return 'Comfortable'
    return 'Humid'
}
const getUvDescription = (uv) => {
    if (uv < 3) return 'Low'
    if (uv < 6) return 'Moderate'
    if (uv < 8) return 'High'
    if (uv < 11) return 'Very high'
    return 'Extreme'
}


const CurrentWeather = ({ data, location }) => {

    const {
        temp_c,
        condition,
        feelslike_c,
        maxtemp_c,
        mintemp_c,
        wind_kph,
        humidity,
        uv,
    } = data;

    return (
        <div className='current-weather'>
            <div className='card left-card'>
                <div className='details'>
                    <h2>{location.name}</h2>
                    <h1 className='temp'>{Math.round(temp_c)}</h1>
                    <p>↑{Math.round(maxtemp_c)}°/ ↓{Math.round(mintemp_c)}°</p>
                    <p>Feels like {feelslike_c}°</p>
                    <p>{getDayandHour(location.localtime)}</p>
                </div>
                <div className='condition'>
                    <img className='condition-icon' src={condition.icon} alt={condition.text} />
                    <h2 className='condition-text' >{condition.text}</h2>
                </div>
            </div>

            <div className='card right-card'>
                <div className="detail-item">
                    <span className='item-label'>🌬️ Wind</span>
                    <span className='item-value'>{wind_kph} km/h</span>
                    <small>{getWindDescription(wind_kph)}</small>
                </div>
                <div className="detail-item">
                    <span className='item-label'>💧 Humidity</span>
                    <span className='item-value'>{humidity}</span>
                    <small>{getHumDescription(humidity)}</small>
                </div>
                <div className="detail-item">
                    <span className='item-label'>🔆 UV Index</span>
                    <span className='item-value'>{uv}</span>
                    <small>{getUvDescription(uv)}</small>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather