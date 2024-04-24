// src/components/03-use-effect-mounting/TimerTwo.jsx

import React, { useState, useEffect } from "react"; // <== IMPORT

function TimerTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");

    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {};
  }, []);
  return (
    <div className="Timer">
      <h2>Timer Two</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerTwo;
