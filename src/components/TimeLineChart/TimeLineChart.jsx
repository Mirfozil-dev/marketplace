import React, { useState } from 'react';
import './TimeLineChart.css';
import Chart from 'react-apexcharts';


function TimeLineChart({ className }) {
  const [series, setSeries] = useState([
    {
      data: [
        {
          x: 'Jacob Marie',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime(),
          ],
          fillColor: '#008FFB',
        },
        {
          x: 'Selena Gomes',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime(),
          ],
          fillColor: '#00E396',
        },
        {
          x: 'Susan Sue',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime(),
          ],
          fillColor: '#775DD0',
        },
        {
          x: 'Elon Musk',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime(),
          ],
          fillColor: '#FEB019',
        },
        {
          x: 'Abdul Bari',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime(),
          ],
          fillColor: '#FF4560',
        },
      ],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      type: 'rangeBar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: true,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.globals.labels[opts.dataPointIndex];
      },
      style: {
        fontSize: '8px',
        colors: ['#00313D'],
      },
    },
    xaxis: {
      position: 'top',
      type: 'datetime',
    },
    yaxis: {
      show: false,
    },
    grid: {
      row: {
        colors: ['#f3f4f5', '#fff'],
        opacity: 1,
      },
    },
  });

  return (
    <div className={className}>
      <Chart width="100%" height="100%" options={options} series={series} type="rangeBar" />
    </div>
  );
}

export default TimeLineChart;