const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/api/weather', async (req, res) => {
    const { city } = req.query;

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`);

        if (!response.ok) {
            console.error('weather API response not ok: ', response.statusText);
        }

    } catch (e) {
        console.error('weather API error: ', e);
        res.status(500).json({ error: 'Error fetching the data' })

    }
})

app.listen(port, () => {
    console.log('Server running on port', port);
})
