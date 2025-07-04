const apiKey = 'd1d0d967c4924903917123943243107';
const getWeatherBtn = document.getElementById('getWeatherBtn');
const locationInput = document.getElementById('locationInput');
const weatherDisplay = document.getElementById('weatherDisplay');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const errorElement = document.getElementById('error');


getWeatherBtn.addEventListener('click', async () => {
    const location = locationInput.value.trim();
    if (!location) {
        showError('Please enter a location');
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
        const data = await response.json();

        if (data.error) {
            showError(data.error.message);
            return;
        }

        // Update UI with weather data
        weatherDisplay.classList.add('show');
        errorElement.classList.remove('show');
        locationElement.textContent = `Weather in ${data.location.name}, ${data.location.country}`;
        temperatureElement.textContent = `Temperature: ${data.current.temp_c}°C`;
        descriptionElement.textContent = `Condition: ${data.current.condition.text}`;
        humidityElement.textContent = `Humidity: ${data.current.humidity}%`;
        windElement.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
    } catch (error) {
        showError('Unable to connect to weather service');
    }
});

function showError(message) {
    weatherDisplay.classList.remove('show');
    errorElement.classList.add('show');
    errorElement.textContent = message;
}