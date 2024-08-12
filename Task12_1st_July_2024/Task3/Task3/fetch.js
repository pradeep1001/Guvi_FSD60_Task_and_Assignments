// Constants
const API_KEY = '0c4e13e06c4a2412f228c7b697539ec3';
const CURRENCIES = 'USD,CNY,EUR,JPY,INR,GBP,BRL,CAD,RUB,SGD';
const API_URL = `https://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=${CURRENCIES}&format=1`;

// DOM Elements
const currencySelect = document.getElementById('currencySelect');
const displayButton = document.getElementById('displayButton');
const selectedCurrencyInfo = document.getElementById('selectedCurrencyInfo');

// State
let exchangeRates = {};

// Currency data
const currencyData = [
    { code: 'USD', name: 'United States Dollar', country: 'United States' },
    { code: 'CNY', name: 'Chinese Yuan Renminbi', country: 'China' },
    { code: 'EUR', name: 'Euro', country: 'Germany' },
    { code: 'JPY', name: 'Japanese Yen', country: 'Japan' },
    { code: 'INR', name: 'Indian Rupee', country: 'India' },
    { code: 'GBP', name: 'British Pound Sterling', country: 'United Kingdom' },
    { code: 'EUR', name: 'Euro', country: 'France' },
    { code: 'BRL', name: 'Brazilian Real', country: 'Brazil' },
    { code: 'EUR', name: 'Euro', country: 'Italy' },
    { code: 'CAD', name: 'Canadian Dollar', country: 'Canada' },
    { code: 'RUB', name: 'Russian Ruble', country: 'Russia' },
    { code: 'SGD', name: 'Singapore Dollar', country: 'Singapore' }
];

// Fetch exchange rates from API
async function fetchExchangeRates() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.success) {
            exchangeRates = data.rates;
            populateCurrencyDropdown();
        } else {
            throw new Error(data.error.type);
        }
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        selectedCurrencyInfo.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
        selectedCurrencyInfo.classList.remove('hidden');
    }
}

// Populate currency dropdown
function populateCurrencyDropdown() {
    currencySelect.innerHTML = '<option value="">Select a currency</option>';
    currencyData.forEach(currency => {
        if (exchangeRates[currency.code]) {
            const option = document.createElement('option');
            option.value = currency.code;
            option.textContent = `${currency.country} - ${currency.code} (${currency.name})`;
            currencySelect.appendChild(option);
        }
    });
}

// Display exchange rate
function displayExchangeRate() {
    const selectedCurrency = currencySelect.value;
    if (selectedCurrency) {
        const rate = exchangeRates[selectedCurrency];
        const currencyInfo = currencyData.find(c => c.code === selectedCurrency);
        selectedCurrencyInfo.innerHTML = `
            <h2 class="text-xl font-bold mb-2">Exchange Rate</h2>
            <p class="text-2xl">1 EUR = ${rate.toFixed(4)} ${selectedCurrency}</p>
            <p class="text-lg mt-2">${currencyInfo.country} - ${currencyInfo.name}</p>
        `;
        selectedCurrencyInfo.classList.remove('hidden');
    } else {
        alert('Please select a currency');
    }
}

// Event Listeners
window.addEventListener('load', fetchExchangeRates);
displayButton.addEventListener('click', displayExchangeRate);

// Initial setup
fetchExchangeRates();