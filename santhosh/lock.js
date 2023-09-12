const priceData = [
    { date: "2023-01-01", price: 100 },
    { date: "2023-02-01", price: 95 },
    { date: "2023-03-01", price: 110 },
    { date: "2023-04-01", price: 120 },
    // Add more data points as needed
];

// Function to draw the price history chart
function drawPriceHistoryChart() {
    const chartContainer = document.getElementById("price-chart");

    // Create a chart using a charting library (e.g., Chart.js, D3.js, Google Charts)
    // This example uses a simple HTML table for demonstration purposes
    const table = document.createElement("table");
    table.classList.add("price-table");

    // Create table headers
    const headerRow = document.createElement("tr");
    const dateHeader = document.createElement("th");
    const priceHeader = document.createElement("th");
    dateHeader.textContent = "Date";
    priceHeader.textContent = "Price (USD)";
    headerRow.appendChild(dateHeader);
    headerRow.appendChild(priceHeader);
    table.appendChild(headerRow);

    // Populate the table with price data
    priceData.forEach((dataPoint) => {
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        const priceCell = document.createElement("td");
        dateCell.textContent = dataPoint.date;
        priceCell.textContent = `$${dataPoint.price}`;
        row.appendChild(dateCell);
        row.appendChild(priceCell);
        table.appendChild(row);
    });

    // Append the table to the chart container
    chartContainer.appendChild(table);
}

// Call the function to draw the price history chart when the page loads
window.addEventListener("load", drawPriceHistoryChart);