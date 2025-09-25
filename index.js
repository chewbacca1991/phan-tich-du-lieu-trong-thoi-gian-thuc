const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng phân tích dữ liệu trong thời gian thực!');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
