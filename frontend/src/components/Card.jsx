

function Card({ data }) {
    return (
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <p className="font-semibold text-lg mb-2">{data.time}</p>
            <img
                src={data.condition.icon}
                alt={data.condition.text}
                className="w-12 h-12 mb-2"
            />
            <p className="text-white">{data.temp_c}°C</p>
            <p className="text-gray-200 text-sm">{data.condition.text}</p>
        </div>
    );
}

export default Card;
