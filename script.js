const apiKey = 'your_api_key_here';  // Get your API key from OpenWeatherMap

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found!');
        } else {
            displayWeather(data);
        }
    } catch (error) {
        alert('Error fetching weather data.');
    }
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
