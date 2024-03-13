import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@mui/material';

const PieChart = ({ data, width, height }) => {
  const theme = useTheme();
  const colors = d3.scaleOrdinal().range(theme.palette.mode === 'dark' ? d3.schemeDark2 : d3.schemeCategory10);
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const radius = Math.min(width, height) / 2;
    const arc = d3.arc().innerRadius(0).outerRadius(radius);
    const pie = d3.pie().value(d => d.value);

    const svg = d3.select(svgRef.current);

    svg.selectAll('*').remove();

    const arcs = pie(data);

    svg
      .selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (d, i) => colors(i))
      .attr('d', arc)
      .append('title')
      .text(d => `${d.data.label}: ${d.data.value}`);
  }, [data, width, height, colors]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g transform={`translate(${width / 2},${height / 2})`} />
    </svg>
  );
};

export default PieChart;
