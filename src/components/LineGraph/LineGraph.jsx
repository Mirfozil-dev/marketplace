import React, { useState } from 'react';
import './LineGraph.css';
import Chart from 'react-apexcharts';

function LineGraph({ className }) {
  const [options, setOptions] = useState({
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: [0, 6, 12, 18, 24, 30],

  });
  const [series, setSeries] = useState([{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  }]);


  return (
    <div className={className}>
      <Chart
        height={170}
        options={options}
        series={series}
        type="area"
      />
    </div>
  );
}

export default LineGraph;