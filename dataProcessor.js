const axios = require('axios');

async function fetchData(source) {
    try {
        const response = await axios.get(source);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from the source:', source, 'Error details:', error);
        return null;
    }
}

module.exports = { fetchData };