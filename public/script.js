btn.addEventListener("click", async () => {
    const city = input.value.trim();
    if (!city) return alert("Enter city");

    const weatherRes = await fetch(`/api/weather?city=${city}`);
    const weather = await weatherRes.json();
    const loading = document.getElementById("loading");

    loading.classList.remove("hidden");

    loading.classList.add("hidden");

    if (weather.error) {
        alert(weather.error);
        return;
    }

    document.getElementById("cityName").textContent =
        `${city} (${weather.country})`;

    document.getElementById("description").textContent =
        weather.description.charAt(0).toUpperCase() +
        weather.description.slice(1);

    document.getElementById("temp").textContent = weather.temperature;
    document.getElementById("feels").textContent = weather.feels_like;
    document.getElementById("wind").textContent = weather.wind_speed;
    document.getElementById("coords").textContent =
        `${weather.coordinates.lat}, ${weather.coordinates.lon}`;
    document.getElementById("rain").textContent =
        weather.rain === 0 ? "No rain" : weather.rain;

    weatherCard.classList.remove("hidden");

    const currencyRes = await fetch(`/api/extra?country=${weather.country}`);
    const currency = await currencyRes.json();

    document.getElementById("currencyText").textContent = currency.info;
    currencyCard.classList.remove("hidden");
});
