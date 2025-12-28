require("dotenv").config();
console.log("KEY =", process.env.OPENWEATHER_KEY);

const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/weather", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.json({ error: "City not provided" });
    }

    try {
        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    units: "metric",
                    appid: process.env.OPENWEATHER_KEY
                }
            }
        );

        const d = response.data;

        res.json({
            temperature: d.main.temp,
            feels_like: d.main.feels_like,
            description: d.weather[0].description,
            wind_speed: d.wind.speed,
            country: d.sys.country,
            coordinates: {
                lat: d.coord.lat,
                lon: d.coord.lon
            },
            rain: d.rain ? d.rain["3h"] : 0
        });

    } catch (err) {
        console.log("OPENWEATHER RESPONSE:", err.response?.data);
        res.json({ error: "Weather unavailable" });
    }
});



app.get("/api/extra", async (req, res) => {
    const country = req.query.country;

    try {
        const currencyMap = {
            KZ: "KZT",
            GB: "GBP",
            US: "USD",
            RU: "RUB",
            EU: "EUR"
        };

        const currency = currencyMap[country] || "USD";

        const currencyRes = await axios.get(
            `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_API_KEY}/latest/USD`
        );

        const rate = currencyRes.data.conversion_rates[currency];

        res.json({
            info: `1 USD = ${rate} ${currency}`
        });

    } catch {
        res.json({ info: "Currency unavailable" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
