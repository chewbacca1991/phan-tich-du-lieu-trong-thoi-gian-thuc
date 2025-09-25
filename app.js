const express = require('express');
const { fetchData } = require('./dataProcessor');
const { generateReport } = require('./reportGenerator');
const { checkAndAlert } = require('./alerts');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/get-data', async (req, res) => {
    const data = await fetchData('http://api.example.com/data');
    if (data) {
        const report = generateReport(data);
        checkAndAlert(data, 100); // Giả định 100 là ngưỡng báo động
        res.send(report);
    } else {
        res.status(500).send('Không thể lấy dữ liệu.'); // Fixed typo in Vietnamese
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
});