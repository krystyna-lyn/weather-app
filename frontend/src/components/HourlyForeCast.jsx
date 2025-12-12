import { parse, format } from 'date-fns';
import './HourlyForecast.css';

const HourlyForeCast = ({ data }) => {
    return (
        <div className="hourly-forecast-container">
            <h2>Hourly Forecast</h2>
            {data.map((hour, index) => {
                return (
                    <div className="hourly-card" key={index}>
                        <div className='hour-time'>
                            {format(parse(hour.time, 'yyyy-MM-dd HH:mm', new Date()), 'ha')}
                        </div>
                        <img src={hour.condition.icon} className='hour-icon' alt='icon' />
                        <div className='hour-temp'>{Math.round(hour.temp_c)}°C</div>

                        <div className='hour-rain'>💧 {hour.chance_of_rain}%</div>
                    </div>
                )
            })}
        </div>
    )
}

export default HourlyForeCast