const fetch = require('node-fetch');
const fs = require('fs');

async function insertProductsIntoMockAPI(products, apiEndpoint) {
    for (const product of products) {
        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log(`Successfully inserted product: ${result.id}`);
        } catch (error) {
            console.error(`Failed to insert product: ${product.id}`, error);
        }
    }
}

// Read products from the JSON file
const productsData = fs.readFileSync('products.json', 'utf8');
const products = JSON.parse(productsData);

// Your MockAPI endpoint
const apiEndpoint = 'https://66d5ba37f5859a7042673bac.mockapi.io/products';

// Call the function to insert products
insertProductsIntoMockAPI(products, apiEndpoint)
    .then(() => console.log('All products processed'))
    .catch(error => console.error('An error occurred:', error));