function generateReport(data) {
    // Process data and generate report
    const report = `Báo cáo dữ liệu: ${JSON.stringify(data)}`;
    return report;
}

module.exports = { generateReport };