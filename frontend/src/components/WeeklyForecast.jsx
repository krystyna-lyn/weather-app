import { parseISO, format } from 'date-fns';
import './WeeklyForecast.css';

const WeeklyForecast = ({ data }) => {
    return (
        <div className='weekly-container'>
            <h2>Weekly Forecast</h2>
            {data.map((day, index) => {
                return (
                    <div className='daily-row card' key='index'>
                        <div className='daily-name'>
                            {format(parseISO(day.date), 'EEE')}
                        </div>

                        <div className='daily-rain'>💧 {day.day.daily_chance_of_rain}%</div>

                        <div className='daily-condition'>
                            <img src={day.day.condition.icon}
                                alt={day.day.condition.text}
                                className="daily-icon" />

                            <span className='daily-text'>{day.day.condition.text}</span>
                        </div>

                        <div className='daily-temp'>
                            {Math.round(day.day.maxtemp_c)}°C / {Math.round(day.day.mintemp_c)}°C
                        </div>

                    </div>
                )
            }
            )}
        </div>
    )
}

export default WeeklyForecast