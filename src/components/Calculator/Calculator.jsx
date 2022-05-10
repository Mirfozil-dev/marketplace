import React, { useState } from 'react';
import './Calculator.css';
import backspaceIcon from '../../images/backspaceIcon.svg';

function Calculator({ className }) {

  const [data, setData] = useState('');

  const calcButtons = ['(', ')', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '+', 0, '.'];

  function setCharAt(str, startPoint, endPoint, chr) {
    return str.substring(0, startPoint) + chr + str.substring(endPoint + 1);
  }

  function calculatePercent() {
    let endPoint = data.length;
    let startPoint = 0;
    for (let i = endPoint; i >= 0; i--) {
      if (data[i] === '+' || data[i] === '-' || data[i] === '*' || data[i] === '/' || data[i] === '(' || data[i] === ')') {
        startPoint = i + 1;
        break;
      }
    }
    let number = Number(data.substr(startPoint, endPoint));
    setData(setCharAt(data, startPoint, endPoint, number / 100));
  }

  return (
    <div className={className}>
      <div className="w-100 h-100 calculator">
        <div className="w-100 d-flex justify-content-between align-items-center calculator_header">
          <h5>Calculator</h5>
          <button onClick={() => setData(data.substr(0, data.length - 1))}
                  className="d-flex justify-content-center align-items-center">
            <img className="w-100 h-100" src={backspaceIcon} alt="" />
          </button>
        </div>
        <input value={data} readOnly
               className="calculator_result w-100 d-flex align-items-center justify-content-center"
               type="text" />
        <div className="calculator_body">
          <button onClick={() => setData('')} className="calculator_btn">C</button>
          <button onClick={() => calculatePercent()} className="calculator_btn">%</button>
          {
            calcButtons.map((item) => {
              return <button
                value={item}
                onClick={(e) => setData(data + e.target.value)}
                key={item}
                className="calculator_btn">{item}</button>;
            })
          }
          <button onClick={(e) => {
            try {
              setData(
                String(eval(data)),
              );
            } catch (err) {
              console.log(err);
            }
          }} className="calculator_btn">=
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;