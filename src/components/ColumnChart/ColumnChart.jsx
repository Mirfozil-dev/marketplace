import React from 'react';
import './ColumnChart.css';

function ColumnChart({ className, labels, data }) {
  function convertK(number) {
    if (number.length >= 4) {
      let numberTail = number.substr(number.length - 3, 3);
      return number.replace(numberTail, 'k');
    }
    return number;
  }

  const greatest = Math.max.apply(null, labels);

  function getHeightPercent(number) {
    return String(number * 100 / greatest) + '%';
  }

  return (
    <div className={className}>
      <div className="column_chart d-flex h-100">
        <div className="labels_column d-flex flex-column">
          {
            labels.map((item, index) => <p key={index}>{convertK(item.toString())}</p>)
          }
        </div>
        {
          data.map((item, index) => {
            return <div key={index} className="column_chart_item">
              <div className="column_chart_result">
                <div style={{
                  height: getHeightPercent(item.number),
                }} className="column_chart_progress" />
              </div>
              <p>{item.title}</p>
            </div>;
          })
        }
      </div>
    </div>
  );
}

export default ColumnChart;