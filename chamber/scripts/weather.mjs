const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.140076825789784&lon=-112.06430780658653&appid=4529d3124849a34fdee49a25a29734a1&units=imperial";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=41.140076825789784&lon=-112.06430780658653&appid=4529d3124849a34fdee49a25a29734a1&units=imperial";
//https://api.openweathermap.org/data/2.5/forecast?lat=41.140076825789784&lon=-112.06430780658653&appid=4529d3124849a34fdee49a25a29734a1&units=imperial
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');

async function apiFetch() {
    try {
        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            const forecastData = await forecastResponse.json();
            console.log(data);
            console.log(forecastData);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log("hello");
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    captionDesc.textContent = `${data.weather[0].description} `;

    // forecast.innerHTML = nextThree.map(day => { })
}

apiFetch();