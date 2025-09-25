function generateReport(data) {
    // Process data and generate report
    const report = `Báo cáo dữ liệu (${data.length} entries): ${JSON.stringify(data, null, 2)}`;
    return report;
}

module.exports = { generateReport };