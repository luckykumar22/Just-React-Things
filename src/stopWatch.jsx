import { useEffect, useRef, useState } from "react";
import './index.css'

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    handleTime();
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  return (
    <div className="app">
      <h1>{time}</h1>
      <button onClick={() => handleTime()}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Stop</button>
      <button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
