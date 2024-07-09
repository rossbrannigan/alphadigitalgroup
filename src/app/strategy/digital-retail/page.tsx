
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Impact of Personalization on Conversion and Ancillary Attachment</title>
  <script src="https://d3js.org/d3.v6.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-white">
  <div class="container mx-auto my-8">
    <img src="https://alphadigitalgroup.co/company-logo.svg" alt="Alpha Digital Group Logo" class="mb-4" style="max-width: 200px;">
    <h1 class="text-3xl font-bold mb-4 text-gray-800">The Impact of Personalization on Conversion and Ancillary Attachment</h1>
    <div class="w-full bg-white shadow-lg rounded-lg p-6">
      <div id="chart-container"></div>
      <p class="text-gray-600 mt-4">
        According to a recent study by McKinsey & Company, airlines that leverage customer and pricing APIs to deliver personalized offers can see a significant uplift in conversion rates and ancillary attachment compared to generic, one-size-fits-all experiences.
      </p>
      <p class="text-gray-600 mt-2">
        The chart below illustrates the potential impact of personalization, showing a 39% increase in conversion rates and a 41% increase in ancillary attachment when personalized offers are provided.
      </p>
      <p class="text-gray-600 mt-2">
        These findings are consistent with industry research, which has consistently shown that personalization can drive substantial improvements in key performance metrics for airlines. By leveraging customer data and advanced pricing algorithms, carriers can deliver highly relevant and compelling offers that resonate with individual travelers.
      </p>
      <p class="text-gray-600 mt-2">
        Sources:
        <ul class="list-disc list-inside">
          <li>McKinsey & Company, "Understanding the Pandemic’s Impact on the Aviation Value Chain" (2023)</li>
          <li>IATA, "Modern Airline Retailing: Insights on Customer Personalization" (2023)</li>
        </ul>
      </p>
    </div>
    <p class="text-gray-600 mt-4 text-center">&copy; Alpha Digital Group 2024</p>
  </div>

  <script>
    // Set up the chart dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Create the SVG container
    const svg = d3.select("#chart-container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add a light grey background
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#f0f0f0");

    // Define the data
    const data = [
      { metric: "Conversion Rate", personalizedValue: 0.25, genericValue: 0.18, uplift: 0.07 },
      { metric: "Ancillary Attachment", personalizedValue: 0.45, genericValue: 0.32, uplift: 0.13 }
    ];

    // Set up the scales
    const x = d3.scaleBand()
      .domain(data.map(d => d.metric))
      .range([0, width])
      .padding(0.4);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.personalizedValue) * 1.2])
      .nice()
      .range([height, 0]);

    // Add the axes
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));

    // Create the bars
    svg.selectAll(".bar")
      .data(data)
      .enter().append("g")
      .attr("transform", d => `translate(${x(d.metric)},0)`)
      .selectAll("rect")
      .data(d => [{value: d.personalizedValue, color: "#bdfe02"}, {value: d.genericValue, color: "#9232ea"}])
      .enter().append("rect")
      .attr("x", (d, i) => i * (x.bandwidth() / 2))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth() / 2)
      .attr("height", d => height - y(d.value))
      .attr("fill", d => d.color);

    // Add the labels
    svg.selectAll(".bar")
      .data(data)
      .enter().append("g")
      .attr("transform", d => `translate(${x(d.metric)},0)`)
      .selectAll("text")
      .data(d => [{value: d.personalizedValue, color: "#5a5a00", xPos: x.bandwidth() / 4}, {value: d.genericValue, color: "#9232ea", xPos: 3 * x.bandwidth() / 4}])
      .enter().append("text")
      .text(d => d.value.toFixed(2))
      .attr("x", d => d.xPos)
      .attr("y", d => y(d.value) - 5)
      .attr("fill", d => d.color)
      .attr("text-anchor", "middle")
      .attr("font-size", 14);

    // Add the uplift labels
    svg.selectAll(".bar")
      .data(data)
      .enter().append("g")
      .attr("transform", d => `translate(${x(d.metric)},0)`)
      .append("text")
      .text(d => `+${(d.uplift * 100).toFixed(0)}%`)
      .attr("x", x.bandwidth() / 2)
      .attr("y", d => y(d.genericValue) - 15)
      .attr("fill", "#0072C6")
      .attr("text-anchor", "middle")
      .attr("font-size", 14)
      .attr("font-weight", "bold");

    // Add the x-axis label
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 10)
      .attr("text-anchor", "middle")
      .attr("fill", "#6b7280")
      .attr("font-size", 16)
      .text("Metric");

    // Add the y-axis label
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 15)
      .attr("text-anchor", "middle")
      .attr("fill", "#6b7280")
      .attr("font-size", 16)
      .text("Value");
  </script>
</body>
</html>
