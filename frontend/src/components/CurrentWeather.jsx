import { parse, format } from 'date-fns';

const getDayandHour = (rawdate) => {
    const date = parse(rawdate, 'yyyy-MM-dd HH:mm', new Date());
    return format(date, 'EEEE, h a');
};

const getWindDescription = (wind_kph) => {
    if (wind_kph < 10) return 'Calm';
    if (wind_kph < 20) return 'Light breeze';
    if (wind_kph < 30) return 'Moderate breeze';
    if (wind_kph < 40) return 'Windy';
    return 'Strong wind';
};

const getHumDescription = (humidity) => {
    if (humidity < 30) return 'Dry';
    if (humidity < 60) return 'Comfortable';
    return 'Humid';
};

const getUvDescription = (uv) => {
    if (uv < 3) return 'Low';
    if (uv < 6) return 'Moderate';
    if (uv < 8) return 'High';
    if (uv < 11) return 'Very high';
    return 'Extreme';
};

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

    // general class for glassmorphism cards

    const glassCard = "rounded-2xl border border-white/30 bg-white/10 p-8 shadow-2xl backdrop-blur-xl";

    return (
        <div className="mt-8 mb-8 flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4">

            {/* Left card */}
            <div className={`${glassCard} flex flex-col md:flex-row gap-8 w-full md:w-2/3`}>


                <div className="flex flex-col items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-white">{location.name}</h2>
                        <h1 className="text-6xl md:text-7xl font-bold text-white mt-4">
                            {Math.round(temp_c)}°
                        </h1>
                        <p className="text-lg text-white/90 mt-4">
                            ↑{Math.round(maxtemp_c)}° / ↓{Math.round(mintemp_c)}°
                        </p>
                        <p className="text-lg text-white/90">Feels like {feelslike_c}°</p>
                    </div>
                    <p className="text-lg text-white/80 mt-4 md:mt-0">
                        {getDayandHour(location.localtime)}
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg"
                        src={condition.icon}
                        alt={condition.text}
                    />
                    <h2 className="text-xl text-center text-white mt-4">{condition.text}</h2>
                </div>
            </div>

            {/* Right card */}
            <div className={`${glassCard} w-60 md:w-110 flex flex-col justify-center space-y-4`}>

                {/* Wind */}
                <div className="flex justify-between items-center">

                    <span className="font-bold text-white">🌬️ Wind</span>


                    <div className="text-right leading-tight">
                        <div className="text-white">{wind_kph} km/h</div>
                        <small className="text-sm text-white/70">{getWindDescription(wind_kph)}</small>
                    </div>
                </div>

                {/* Humidity */}
                <div className="flex justify-between items-center">
                    <span className="font-bold text-white">💧 Humidity</span>
                    <div className="text-right leading-tight">
                        <div className="text-white">{humidity}%</div>
                        <small className="text-sm text-white/70">{getHumDescription(humidity)}</small>
                    </div>
                </div>

                {/* UV Index */}
                <div className="flex justify-between items-center">
                    <span className="font-bold text-white">🔆 UV Index</span>
                    <div className="text-right leading-tight">
                        <div className="text-white">{uv}</div>
                        <small className="text-sm text-white/70">{getUvDescription(uv)}</small>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CurrentWeather;