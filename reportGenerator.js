function generateReport(data) {
    // Xử lý dữ liệu và tạo báo cáo
    const report = `Báo cáo dữ liệu: ${JSON.stringify(data)}`;
    return report;
}

module.exports = { generateReport };
