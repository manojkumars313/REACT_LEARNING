import React, { useState, useEffect } from "react";

function CleanUp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        console.log(prev);
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default CleanUp;
