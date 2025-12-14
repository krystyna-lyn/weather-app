import { parse, format } from 'date-fns';


const HourlyForeCast = ({ data }) => {

    const glassCard = "rounded-2xl border border-white/30 bg-white/10 p-4 shadow-2xl backdrop-blur-xl flex flex-col min-w-[70px] md:min-w-[100px] text-white";

    return (
        <div className='w-full max-w-200'>
            <h2 className='text-lg md:text-xl font-semibold mb-4 text-white'>Hourly Forecast</h2>
            <div className='flex overflow-x-auto rounded-2xl gap-4 pb-4'>

                {data.map((hour, index) => {

                    return (
                        <div className={glassCard} key={index}>
                            <div className='text-sm md:text-sm mb-2'>
                                {format(parse(hour.time, 'yyyy-MM-dd HH:mm', new Date()), 'ha')}
                            </div>
                            <img src={hour.condition.icon} className='w-10 h-10 md:h-12 my-2' alt='icon' />
                            <div className='text-xs md:text-base font-medium'>{Math.round(hour.temp_c)}°C</div>

                            <div className='text-xs md: mt-1'>💧 {hour.chance_of_rain}%</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default HourlyForeCast