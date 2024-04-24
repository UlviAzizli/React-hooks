import React, { useState, useEffect } from "react";

function TimerThree() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("Cleanup - Component Unmounting");
      clearInterval(id);
    };
  }, []);

  return (
    <div className="Timer">
      <h2>Timer Three</h2>
      <p>{count}</p>
    </div>
  );
}

export default TimerThree;
