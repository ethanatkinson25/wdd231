const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.140076825789784&lon=-112.06430780658653&appid=4529d3124849a34fdee49a25a29734a1&units=imperial";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=41.140076825789784&lon=-112.06430780658653&appid=4529d3124849a34fdee49a25a29734a1&units=imperial";
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
            displayResults(data);
            displayForecast(forecastData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    captionDesc.textContent = `${data.weather[0].description} `;
}

function displayForecast(data) {
    const nextThree = data.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    forecast.innerHTML = '';
    console.log(nextThree);

    for (let i = 0; i < nextThree.length; i++) {
        const item = nextThree[i];
        const date = new Date(item.dt_txt);
        const iconsrc = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        const description = item.weather[0].description;

        const temp = `${item.main.temp.toFixed(0)}&deg;F`;

        forecast.innerHTML += `
            <div class="forecast-day">
                <h3>${date}</h3>
                <figure><img src="${iconsrc}" alt="${description}" width="75" height="75"></figure>
                <figcaption>${description}</figcaption>
                <p>${temp}</p>
            </div>
        `;
    }
}

apiFetch();