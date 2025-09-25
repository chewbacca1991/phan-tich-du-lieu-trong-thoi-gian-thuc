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
        checkAndAlert(data, 100); // Assuming 100 is the alert threshold
        res.send(report);
    } else {
        res.status(500).send('Unable to fetch data.'); // Fixed typo in Vietnamese
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});