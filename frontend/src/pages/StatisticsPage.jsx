import React, { useRef } from 'react';
import Chart from 'react-apexcharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const regionData = [
    { region: 'UZB', deliveries: 120 },
    { region: 'KAZ', deliveries: 95 },
    { region: 'GEO', deliveries: 80 },
    { region: 'UKR', deliveries: 70 },
    { region: 'CHN', deliveries: 65 },
];

const monthlyData = [
    { month: 'January', sales: 200 },
    { month: 'February', sales: 180 },
    { month: 'March', sales: 220 },
    { month: 'April', sales: 240 },
    { month: 'May', sales: 260 },
    { month: 'June', sales: 300 },
    { month: 'July', sales: 300 },
    { month: 'August', sales: 300 },
    { month: 'September', sales: 300 },
    { month: 'October', sales: 300 },
    { month: 'November', sales: 300 },
    { month: 'December', sales: 300 },
];

const StatisticsPage = () => {
    const regionChartRef = useRef(null);
    const monthlyChartRef = useRef(null);

    const exportPDF = async () => {
        const doc = new jsPDF('p', 'mm', 'a4');

        const addChartToPDF = async (chartRef, yOffset) => {
            const chartElement = chartRef.current;
            if (chartElement) {
                const canvas = await html2canvas(chartElement);
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 190;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                doc.addImage(imgData, 'PNG', 10, yOffset, imgWidth, imgHeight);
                return yOffset + imgHeight + 10;
            }
            return yOffset;
        };

        let yOffset = 10;
        yOffset = await addChartToPDF(regionChartRef, yOffset);
        doc.addPage();
        await addChartToPDF(monthlyChartRef, 10);

        doc.save('statistics.pdf');
    };

    const regionChartOptions = {
        chart: { type: 'bar', height: 350 },
        plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
        dataLabels: { enabled: false },
        xaxis: { categories: regionData.map((item) => item.region) },
        yaxis: { title: { text: 'Steaks Sold by Region' } },
        grid: { borderColor: '#dddddd', strokeDashArray: 5 },
        fill: { opacity: 1 },
        colors: ['#FF5733'],
    };

    const regionChartSeries = [{ name: 'Sold', data: regionData.map((item) => item.deliveries) }];

    const monthlyChartOptions = {
        chart: { type: 'bar', height: 350 },
        plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
        dataLabels: { enabled: false },
        xaxis: { categories: monthlyData.map((item) => item.month) },
        yaxis: { title: { text: 'Steaks Sold by Month' } },
        grid: { borderColor: '#dddddd', strokeDashArray: 5 },
        fill: { opacity: 1 },
        colors: ['#2c8cff'],
    };

    const monthlyChartSeries = [{ name: 'Sales', data: monthlyData.map((item) => item.sales) }];

    return (
        <div className="p-8">
            <h1 className="text-4xl my-10 font-bold text-center">Statistics</h1>
            <button
                className="px-6 py-2 bg-blue-600 text-white rounded mb-6"
                onClick={exportPDF}
            >
                Export PDF
            </button>

            <div className="flex gap-10 justify-between">
                <div className="w-[45%] border">
                    <h2 className="text-xl text-center font-bold p-3 text-gray-800">Sales Data by Region</h2>
                    <div className="overflow-hidden border-gray-100">
                        <table className="min-w-full border-collapse bg-white">
                            <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Region
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Sold
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {regionData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                                >
                                    <td className="px-6 border-r py-4 text-sm font-medium text-gray-800">
                                        {item.region}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.deliveries}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-[45%]" ref={regionChartRef}>
                    <Chart options={regionChartOptions} series={regionChartSeries} type="bar" height={500} />
                </div>
            </div>

            <div className="mt-10 relative flex gap-10">
                <div className="w-[45%] border">
                    <h2 className="text-xl text-center font-bold p-3 text-gray-800">Sales Data by Month</h2>
                    <div className="overflow-hidden border-gray-100">
                        <table className="min-w-full border-collapse bg-white">
                            <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Month
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Sales
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {monthlyData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                                >
                                    <td className="px-6 border-r py-4 text-sm font-medium text-gray-800">
                                        {item.month}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.sales}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-[45%]" ref={monthlyChartRef}>
                    <Chart options={monthlyChartOptions} series={monthlyChartSeries} type="bar" height={500} />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
