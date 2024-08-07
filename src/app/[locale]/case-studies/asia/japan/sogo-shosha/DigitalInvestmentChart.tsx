"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  company: string;
  [key: string]: string | number;
}

const DigitalInvestmentChart: React.FC = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      createChart();
    }
  }, []);

  const createChart = () => {
    const data: DataPoint[] = [
      { company: "Mitsubishi", "2019": 100, "2020": 150, "2021": 200, "2022": 250, "2023": 300 },
      { company: "Mitsui", "2019": 120, "2020": 180, "2021": 220, "2022": 270, "2023": 320 },
      { company: "Itochu", "2019": 150, "2020": 200, "2021": 250, "2022": 300, "2023": 350 },
      { company: "Sumitomo", "2019": 110, "2020": 160, "2021": 210, "2022": 260, "2023": 310 },
      { company: "Marubeni", "2019": 90, "2020": 140, "2021": 190, "2022": 240, "2023": 290 }
    ];

    const years = ["2019", "2020", "2021", "2022", "2023"];
    const companies = data.map(d => d.company);

    const margin = {top: 60, right: 180, bottom: 80, left: 80};
    const width = 1000 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x0 = d3.scaleBand()
      .domain(companies)
      .rangeRound([0, width])
      .paddingInner(0.1);

    const x1 = d3.scaleBand()
      .domain(years)
      .rangeRound([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max(years, y => d[y] as number)) || 0])
      .nice()
      .rangeRound([height, 0]);

    const color = d3.scaleOrdinal()
      .domain(years)
      .range(["#4299e1", "#48bb78", "#ecc94b", "#ed8936", "#ed64a6"]);

    svg.append("g")
      .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(${x0(d.company)},0)`)
      .selectAll("rect")
      .data(d => years.map(key => ({key, value: d[key] as number})))
      .join("rect")
      .attr("x", d => x1(d.key) || 0)
      .attr("y", d => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", d => height - y(d.value))
      .attr("fill", d => color(d.key) as string);

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x0))
      .selectAll("text")
      .attr("y", 10)
      .attr("x", -5)
      .attr("dy", ".35em")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    svg.append("g")
      .call(d3.axisLeft(y).ticks(null, "s"));

    const legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "start")
      .selectAll("g")
      .data(years)
      .join("g")
      .attr("transform", (d, i) => `translate(${width + 20},${i * 20})`);

    legend.append("rect")
      .attr("x", 0)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", color as any);

    legend.append("text")
      .attr("x", 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(d => d);

    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text("Digital Investment Budgets (in billion yen)");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      .text("Budget (billion yen)");

    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "#666")
      .text("© Alpha Digital Group 2024");
  };

  return (
<div className="bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4 text-black">Digital Investment Budgets of Big Five Sōgō Shōsha (2019-2023)</h1>
    <svg ref={chartRef}></svg>
  </div>
</div>
  );
};

export default DigitalInvestmentChart;