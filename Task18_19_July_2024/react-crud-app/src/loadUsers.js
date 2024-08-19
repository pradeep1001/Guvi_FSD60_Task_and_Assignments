import axios from 'axios';

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/users';
const MOCK_API_URL = 'https://667e43d1297972455f67aca8.mockapi.io/users';

async function loadUsers() {
  try {
    const response = await axios.get(JSON_PLACEHOLDER_URL);
   
    const users = response.data;

    // Post each user to MockAPI
    for (const user of users) {
      // Remove the id as MockAPI will generate its own
      const { id, ...userData } = user;
      
      // Flatten the nested objects (address and company)
      const flatUser = {
        ...userData,
        address_street: userData.address.street,
        address_suite: userData.address.suite,
        address_city: userData.address.city,
        address_zipcode: userData.address.zipcode,
        address_geo_lat: userData.address.geo.lat,
        address_geo_lng: userData.address.geo.lng,
        company_name: userData.company.name,
        company_catchPhrase: userData.company.catchPhrase,
        company_bs: userData.company.bs
      };

      // Delete the original nested objects
      delete flatUser.address;
      delete flatUser.company;

      // Post the user to MockAPI
      await axios.post(MOCK_API_URL, flatUser);
      console.log(`User ${userData.name} added to MockAPI`);
    }

    console.log('All users have been added to MockAPI');
  } catch (error) {
    console.error('Error loading users:', error.message);
  }
}

loadUsers();