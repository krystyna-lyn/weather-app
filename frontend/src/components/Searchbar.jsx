import React from 'react'

const Searchbar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = () => {
        e.preventDefault();
        if (city) {
            onSearch(city);
            setCity('');
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <span className='searchbar-icon'>🔎</span>
            <input
                type='text'
                className='search-input'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Sydney"
                required
            />
        </form>

    )
}

export default Searchbar