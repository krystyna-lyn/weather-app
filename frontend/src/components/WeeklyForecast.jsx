import { parseISO, format } from 'date-fns';

const WeeklyForecast = ({ data }) => {
    return (
        <div className='weekly-forecast-container'>
            <h2>Weekly Forecast</h2>
            {data.map((day, index) => {
                return (
                    <div className='card-weekly' key='index'>
                        <div className='day-name'>
                            {format(parseISO(day.date), 'EEE')}
                        </div>
                        <img src={day.day.condition.icon} className='day-icon' alt='icon' />
                        <span className='day-text'>{day.day.condition.text}</span>

                        <div className='hour-temp'>
                            {Math.round(day.day.maxtemp_c)}°C
                            {Math.round(day.day.mintemp_c)}°C
                        </div>
                        <div className='day-rain'>💧 {day.day.daily_chance_of_rain}%

                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default WeeklyForecast