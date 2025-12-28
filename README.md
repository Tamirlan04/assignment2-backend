Weather & Currency App

A simple full-stack web application that displays current weather information for a selected city and shows the corresponding currency exchange rate based on the country.

Features

- Search weather by city name
- Displays:
  - Temperature
  - Feels like temperature
  - Weather description
  - Wind speed
  - Coordinates
- Shows currency exchange rate (USD → local currency)
- Backend API with secure API key handling
- Clean and responsive UI

Technologies Used

Backend
- Node.js
- Express.js
- Axios
- dotenv

Frontend
- HTML
- CSS
- JavaScript (Fetch API)

External APIs
- OpenWeather API (weather data)
- ExchangeRate API (currency exchange rates)

Project Structure

assignment2-backend/
├── server.js
├── package.json
├── .env
├── .gitignore
└── public/
├── index.html
├── style.css
└── script.js

Environment Variables

Create a `.env` file in the project root:

OPENWEATHER_KEY=my_key
CURRENCY_API_KEY=my_key

The `.env` file is ignored by GitHub for security reasons.

How to Run the Project

1. Install dependencies:


2. Start the server:

or

3. Open in browser:

Notes

- API calls are handled on the backend to keep keys secure
- Loading delay depends on external API response time
- Loading indicators are used to improve user experience

Author

Tamirlan Kyzylov backend assignment project.
