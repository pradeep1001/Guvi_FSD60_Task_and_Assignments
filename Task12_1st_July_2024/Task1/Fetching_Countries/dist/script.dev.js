"use strict";

// https://api.openweathermap.org/data/2.5/weather?q=${inputcityName}&appid=e107eabd4a4e1847a2b006fd626907a5
//http://api.weatherstack.com/current?access_key=6956abe4e2068aa7f0f3002a8222bfc3&query=${capitalCity}
var req = fetch('https://restcountries.com/v3.1/all');
console.log(req);
req.then(function (data) {
  return data.json();
}).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
}); // Using fetch method

var req1 = fetch('https://restcountries.com/v3.1/all');
console.log(req);
req1.then(function (data) {
  return data.json();
}).then(function (res) {
  return displayCountries(res);
})["catch"](function (err) {
  return console.log(err);
});

function displayCountries(countryDetails) {
  document.body.style.backgroundColor = "#f0f0f0";
  console.log(countryDetails);
  var countryContainer = document.getElementById('countryContainer');
  countryContainer.innerHTML = ''; // Clear existing content

  countryDetails.forEach(function (element) {
    var colDiv = document.createElement('div');
    colDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'h-100');
    cardDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    cardDiv.innerHTML = "\n                  <div class=\"card-header bg-dark text-white\">\n                      <h5 class=\"card-title mb-0\" style=\"text-align: center !important; width: 100% !important; display: block !important; margin: 0 auto !important;\">".concat(element.name.common, "</h5>\n                  </div>\n                  <div style=\"padding: 15px; background: linear-gradient(to right, #DDCAA2, #415352);\">\n                     <img src=\"").concat(element.flags.png, "\" alt=\"").concat(element.name.common, " Flag\" style=\"width: 100%; height: 160px; object-fit: cover;\">\n                  </div>\n                  <div class=\"card-body text-align: center\" style=\"background: linear-gradient(to right, #DDCAA2, #415352);border-bottom:none;text-align: center\">\n                      <p class=\"card-text mb-1\" style=\"color: #FFFFFF;\"><strong>Capital:</strong><strong> ").concat(element.capital ? element.capital[0] : 'N/A', "</strong></p>\n                      <p class=\"card-text mb-1\" style=\"color: #FFFFFF;\"><strong>Region:</strong><strong> ").concat(element.region, "</strong></p>\n                      <p class=\"card-text mb-1\" style=\"color: #FFFFFF;\"><strong>Country Code:</strong><strong> ").concat(element.cca2, "</strong></p>\n                  </div>\n                  <div class=\"card-footer\" style=\"background: linear-gradient(to right, #DDCAA2, #415352); border-top:none;\">\n                <button onclick=\"getWeatherData('").concat(element.name.common, "')\" class=\"btn btn-sm w-100\" style=\"background: linear-gradient(to right, #DDCAA2, #415352);border: 2px solid white;color: #FFFFFF;\">Click for Weather</button>\n                  </div>\n              ");
    colDiv.appendChild(cardDiv);
    countryContainer.appendChild(colDiv);
  });
}

function getWeatherData(countryName) {
  var countryResponse, countryData, countryNAME, countryWithCapital, capitalCity, lat, lon, weatherResponse, weatherData, newTab;
  return regeneratorRuntime.async(function getWeatherData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://restcountries.com/v2/name/".concat(countryName)));

        case 3:
          countryResponse = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(countryResponse.json());

        case 6:
          countryData = _context.sent;
          countryNAME = countryData[0].name;
          countryWithCapital = countryData.find(function (country) {
            return country.capital;
          });

          if (!countryWithCapital) {
            _context.next = 29;
            break;
          }

          capitalCity = countryWithCapital.capital;
          lat = countryWithCapital.latlng[0];
          lon = countryWithCapital.latlng[1]; // const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=e107eabd4a4e1847a2b006fd626907a5`);

          _context.next = 15;
          return regeneratorRuntime.awrap(fetch("http://api.weatherstack.com/current?access_key=6956abe4e2068aa7f0f3002a8222bfc3&query=".concat(capitalCity)));

        case 15:
          weatherResponse = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(weatherResponse.json());

        case 18:
          weatherData = _context.sent;

          if (!weatherData.error) {
            _context.next = 23;
            break;
          }

          console.error('Weather API Error:', weatherData.error); // Display an error message to the user

          alert("Error fetching weather data: ".concat(weatherData.error.info));
          return _context.abrupt("return");

        case 23:
          console.log("Weather in ".concat(countryName, ":"), weatherData); // Open the weather information in a new tab

          newTab = window.open('', '_blank');
          newTab.document.write("\n        <html>\n          <head>\n            <title>Weather in ".concat(countryName, " ").concat(countryNAME, "</title>\n            <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n          </head>\n          <body>\n            <div class=\"container\">\n              <div id=\"weatherContainer\"></div>\n            </div>\n            <script>\n              const weatherData = ").concat(JSON.stringify(weatherData), ";\n              const weatherContainer = document.getElementById('weatherContainer');\n              weatherContainer.innerHTML = `\n                <div class=\"card mb-3\" style=\"max-width: 540px;\">\n                  <div class=\"row g-0\">\n                    <div class=\"col-md-4\">   \n                      <img src=\"pexels-andre-furtado-43594-1162251.jpg\" class=\"img-fluid rounded-start h-100\" alt=\"...\">\n                    </div>\n                    <div class=\"col-md-8\">\n                      <div class=\"card-body\">\n  <div>   \n    <h5 class=\"card-title\">").concat(capitalCity.toUpperCase(), "\n     <img src=\"").concat(weatherData.current.weather_icons[0], "\" alt=\"Weather Icon\">\n    </h5>\n  </div>\n  <p class=\"card-text p-0 m-0\">Temperature: ").concat(weatherData.current.temperature, "\xB0C</p>\n  <p class=\"card-text m-0\">Feels like: ").concat(weatherData.current.feelslike, "\xB0C</p>\n  <p class=\"card-text p-0 m-0\">Weather Description: ").concat(weatherData.current.weather_descriptions[0], "</p>\n  <p class=\"card-text\">Humidity: ").concat(weatherData.current.humidity, "%</p>\n</div>\n                    </div>\n                  </div>\n                </div>\n              `;\n            </script>\n          </body>\n        </html>\n      "));
          return _context.abrupt("return", weatherData);

        case 29:
          console.log('No country found with a capital city.');
          return _context.abrupt("return", null);

        case 31:
          _context.next = 36;
          break;

        case 33:
          _context.prev = 33;
          _context.t0 = _context["catch"](0);
          console.error('Error:', _context.t0);

        case 36:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 33]]);
}