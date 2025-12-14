import { parseISO, format } from 'date-fns';

const WeeklyForecast = ({ data }) => {

    const glassCard = "rounded-2xl border border-white/30 bg-white/10 p-4 shadow-2xl backdrop-blur-xl flex flex-col min-w-[70px] md:min-w-[100px] text-white";

    return (
        <div className='w-full max-w-200'>
            <h2 className='text-lg md:text-xl font-semibold mb-4 text-white'>Weekly Forecast</h2>
            <div className='rounded-2xl gap-4 pb-4'>

                {data.map((day, index) => {
                    return (
                        <div className={`${glassCard} flex-row justify-between items-center mb-2`}
                            key='index'>

                            <div className='text-sm md_text:sm mb-2'>
                                {format(parseISO(day.date), 'EEE')}
                            </div>

                            <div className='daily-rain'>💧 {day.day.daily_chance_of_rain}%</div>

                            <div className='text-sm md_text:sm mb-2'>
                                <img src={day.day.condition.icon}
                                    alt={day.day.condition.text}
                                    className="text-sm md_text:sm mb-2" />

                                <span className='text-sm md_text:sm mb-2'>{day.day.condition.text}</span>
                            </div>

                            <div className='text-sm md_text:sm mb-2'>
                                {Math.round(day.day.maxtemp_c)}°C / {Math.round(day.day.mintemp_c)}°C
                            </div>

                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default WeeklyForecast