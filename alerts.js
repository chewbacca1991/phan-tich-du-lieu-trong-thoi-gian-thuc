function checkAndAlert(data, threshold) {
    if (data.value > threshold) {
        console.log('Cảnh báo: Giá trị đã vượt quá ngưỡng!');
    }
}

module.exports = { checkAndAlert };
