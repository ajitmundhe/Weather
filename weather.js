function getWeather() {
    const cityInput = document.getElementById('city-input').value;
    const apiKey = 'e7136c6489c70cd77b0b0bf35b6f13ce'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('city-name').innerText = cityName;
            document.getElementById('weather-description').innerText = `Weather: ${weatherDescription}`;
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(error => {
            
            alert('Error fetching weather data. Please try again.');
        });
    }