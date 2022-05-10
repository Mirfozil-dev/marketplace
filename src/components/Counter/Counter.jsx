import React, { useState } from 'react';
import './Counter.css';

function Counter({ className }) {
  let [number, setNumber] = useState(0);


  function increment() {
    setNumber(number + 1);
    console.log(number);
  }

  function decrement() {
    if (number > 0) {
      setNumber(number - 1);
    }
    console.log(number);
  }

  return (
    <div className={className}>
      <div className="counter d-flex align-items-center justify-content-between">
        <button onClick={() => decrement()} className="d-flex justify-content-center align-items-center h-100">-
        </button>
        {number}
        <button onClick={() => increment()} className="d-flex justify-content-center align-items-center h-100">+
        </button>
      </div>
    </div>
  );
}

export default Counter;