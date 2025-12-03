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
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=7`);

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
