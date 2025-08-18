import { useEffect, useState } from "react";
import "./App.css";
import SecondsCounter from "./SecondsCounter";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);
  const [mode, setMode] = useState("normal");

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        if (mode === "normal") {
          setSeconds((second) => second + 1);
        } else if (mode === "countDown") {
          setSeconds((second) => {
            if (second <= 1) {
              setRunning(false);
              return 0;
            }
            return second - 1;
          });
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [running, mode]);

  const handleStop = () => {
    setRunning(false);
  };

  const handleResume = () => {
    setRunning(true);
  };

  const handleReset = () => {
    setSeconds(0);
  };
  const handleCountDown = () => {
    setMode("countDown");
    setSeconds(10);
    setRunning(true);
  };

  return (
    <>
      <SecondsCounter
        seconds={seconds}
        handleStop={handleStop}
        handleResume={handleResume}
        handleReset={handleReset}
        handleCountDown={handleCountDown}
        mode={mode}
      ></SecondsCounter>
    </>
  );
}

export default App;
