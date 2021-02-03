import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  }
  const clearNumber = () => setCount(0);

    return (
      <div>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <div>
          <button onClick={clearNumber}>Clear</button>
        </div>
      </div>
    );
  }

