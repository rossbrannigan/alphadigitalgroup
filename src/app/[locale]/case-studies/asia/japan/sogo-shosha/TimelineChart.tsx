"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TimelineChart: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const events = [
        {year: 1858, event: "Establishment of Mitsui & Co.", type: "establishment"},
        {year: 1870, event: "Establishment of Itochu Corporation", type: "establishment"},
        {year: 1871, event: "Establishment of Mitsubishi Corporation", type: "establishment"},
        {year: 1858, event: "Establishment of Marubeni Corporation", type: "establishment"},
        {year: 1945, event: "Post-World War II Dissolution", type: "economic"},
        {year: 1950, event: "Rebuilding and Re-establishment", type: "economic"},
        {year: 1960, event: "Rapid Growth Period", type: "economic"},
        {year: 1973, event: "Oil Crisis", type: "economic"},
        {year: 1980, event: "Bubble Economy in Japan", type: "economic"},
        {year: 1990, event: "Burst of Bubble Economy and Restructuring", type: "economic"},
        {year: 2000, event: "Global Expansion and Diversification", type: "milestone"},
        {year: 2010, event: "Digital Transformation Begins", type: "digital"},
        {year: 2015, event: "Itochu surpasses Mitsubishi as most profitable sōgō shōsha", type: "milestone"},
        {year: 2018, event: "Itochu announces 'Reinvention of Business' strategy", type: "digital"},
        {year: 2020, event: "COVID-19 Pandemic", type: "economic"}
      ];

      const width = 800;
      const height = 1200;
      const margin = {top: 50, right: 200, bottom: 50, left: 50};

      const svg = d3.select(ref.current)
        .attr("width", width)
        .attr("height", height);

      const yScale = d3.scaleLinear()
        .domain([d3.min(events, d => d.year) || 0, d3.max(events, d => d.year) || 0])
        .range([margin.top, height - margin.bottom]);

      const yAxis = d3.axisLeft(yScale)
        .tickFormat(d3.format("d"))
        .ticks(10);

      svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis)
        .selectAll("text")
        .attr("fill", "#811c9e");

      // Draw vertical line
      svg.append("line")
        .attr("x1", margin.left)
        .attr("y1", margin.top)
        .attr("x2", margin.left)
        .attr("y2", height - margin.bottom)
        .attr("stroke", "#811c9e")
        .attr("stroke-width", 1);

      const colorScale = d3.scaleOrdinal()
        .domain(["establishment", "economic", "digital", "milestone"])
        .range(["#3b82f6", "#ef4444", "#22c55e", "#f97316"]);

      svg.selectAll("circle")
        .data(events)
        .enter()
        .append("circle")
        .attr("cx", margin.left)
        .attr("cy", d => yScale(d.year))
        .attr("r", 5)
        .attr("fill", d => colorScale(d.type));

      // Calculate initial text positions
      let textPositions = events.map((event, index) => {
        const baseX = margin.left + 15;
        const baseY = yScale(event.year);
        return { x: baseX, y: baseY };
      });

      // Adjust positions to handle overlaps
      textPositions = textPositions.map((pos, index) => {
        let x = pos.x;
        let y = pos.y;

        for (let i = 0; i < index; i++) {
          const prevY = textPositions[i].y;
          if (Math.abs(y - prevY) < 20) {
            y += 20;
          }
        }

        return { x, y };
      });

      svg.selectAll(".event-text")
        .data(events)
        .enter()
        .append("text")
        .attr("class", "event-text")
        .attr("x", (d, i) => textPositions[i].x)
        .attr("y", (d, i) => textPositions[i].y)
        .attr("text-anchor", "start")
        .attr("font-size", "12px")
        .attr("fill", "#811c9e")
        .text(d => `${d.year}: ${d.event}`);

      svg.append("text")
        .attr("x", width / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "#666")
        .text("© Alpha Digital Group 2024");
    }
  }, []);

  return <svg ref={ref}></svg>;
};

export default TimelineChart;
