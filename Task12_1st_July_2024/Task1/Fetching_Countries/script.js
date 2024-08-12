// https://api.openweathermap.org/data/2.5/weather?q=${inputcityName}&appid=e107eabd4a4e1847a2b006fd626907a5
//http://api.weatherstack.com/current?access_key=6956abe4e2068aa7f0f3002a8222bfc3&query=${capitalCity}
let req=fetch('https://restcountries.com/v3.1/all')
        console.log(req)

        req.then((data)=>data.json()).then((res)=>console.log(res)).catch((err)=>console.log(err))


        // Using fetch method
        let req1=fetch('https://restcountries.com/v3.1/all')
        console.log(req)

        req1.then((data)=>data.json()).then((res)=>displayCountries(res)).catch((err)=>console.log(err))
        
        function displayCountries(countryDetails) {
          document.body.style.backgroundColor = "#f0f0f0";
          console.log(countryDetails);
      
          let countryContainer = document.getElementById('countryContainer');
          countryContainer.innerHTML = ''; // Clear existing content
      
          countryDetails.forEach((element) => {
              let colDiv = document.createElement('div');
              colDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
      
              let cardDiv = document.createElement('div');
              cardDiv.classList.add('card', 'h-100');
              cardDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      
              cardDiv.innerHTML = `
                  <div class="card-header bg-dark text-white">
                      <h5 class="card-title mb-0" style="text-align: center !important; width: 100% !important; display: block !important; margin: 0 auto !important;">${element.name.common}</h5>
                  </div>
                  <div style="padding: 15px; background: linear-gradient(to right, #DDCAA2, #415352);">
                     <img src="${element.flags.png}" alt="${element.name.common} Flag" style="width: 100%; height: 160px; object-fit: cover;">
                  </div>
                  <div class="card-body text-align: center" style="background: linear-gradient(to right, #DDCAA2, #415352);border-bottom:none;text-align: center">
                      <p class="card-text mb-1" style="color: #FFFFFF;"><strong>Capital:</strong><strong> ${element.capital ? element.capital[0] : 'N/A'}</strong></p>
                      <p class="card-text mb-1" style="color: #FFFFFF;"><strong>Region:</strong><strong> ${element.region}</strong></p>
                      <p class="card-text mb-1" style="color: #FFFFFF;"><strong>Country Code:</strong><strong> ${element.cca2}</strong></p>
                  </div>
                  <div class="card-footer" style="background: linear-gradient(to right, #DDCAA2, #415352); border-top:none;">
                <button onclick="getWeatherData('${element.name.common}')" class="btn btn-sm w-100" style="background: linear-gradient(to right, #DDCAA2, #415352);border: 2px solid white;color: #FFFFFF;">Click for Weather</button>
                  </div>
              `;
      
              colDiv.appendChild(cardDiv);
              countryContainer.appendChild(colDiv);
          });
      }

async function getWeatherData(countryName) {
  try {
    const countryResponse = await fetch(`https://restcountries.com/v2/name/${countryName}`);
    const countryData = await countryResponse.json();
    const countryNAME = countryData[0].name;
    const countryWithCapital = countryData.find(country => country.capital);

    if (countryWithCapital) {
      const capitalCity = countryWithCapital.capital;
      const lat = countryWithCapital.latlng[0];
      const lon = countryWithCapital.latlng[1];

      // const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=e107eabd4a4e1847a2b006fd626907a5`);
      const weatherResponse = await fetch(`http://api.weatherstack.com/current?access_key=6956abe4e2068aa7f0f3002a8222bfc3&query=${capitalCity}`);
      const weatherData = await weatherResponse.json();
      
      if (weatherData.error) {
        console.error('Weather API Error:', weatherData.error);
        // Display an error message to the user
        alert(`Error fetching weather data: ${weatherData.error.info}`);
        return;
      }

      console.log(`Weather in ${countryName}:`, weatherData);

      // Open the weather information in a new tab
      const newTab = window.open('', '_blank');
      newTab.document.write(`
        <html>
          <head>
            <title>Weather in ${countryName} ${countryNAME}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
          </head>
          <body>
            <div class="container">
              <div id="weatherContainer"></div>
            </div>
            <script>
              const weatherData = ${JSON.stringify(weatherData)};
              const weatherContainer = document.getElementById('weatherContainer');
              weatherContainer.innerHTML = \`
                <div class="card mb-3" style="max-width: 540px;">
                  <div class="row g-0">
                    <div class="col-md-4">   
                      <img src="pexels-andre-furtado-43594-1162251.jpg" class="img-fluid rounded-start h-100" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
  <div>   
    <h5 class="card-title">${capitalCity.toUpperCase()}
     <img src="${weatherData.current.weather_icons[0]}" alt="Weather Icon">
    </h5>
  </div>
  <p class="card-text p-0 m-0">Temperature: ${weatherData.current.temperature}°C</p>
  <p class="card-text m-0">Feels like: ${weatherData.current.feelslike}°C</p>
  <p class="card-text p-0 m-0">Weather Description: ${weatherData.current.weather_descriptions[0]}</p>
  <p class="card-text">Humidity: ${weatherData.current.humidity}%</p>
</div>
                    </div>
                  </div>
                </div>
              \`;
            </script>
          </body>
        </html>
      `);

      return weatherData;
    } else {
      console.log('No country found with a capital city.');
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}