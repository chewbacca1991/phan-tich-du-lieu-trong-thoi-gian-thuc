const axios = require('axios');

async function fetchData(source) {
    try {
        const response = await axios.get(source);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        return null;
    }
}

module.exports = { fetchData };
