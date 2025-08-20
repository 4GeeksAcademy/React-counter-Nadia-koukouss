import { useEffect, useState } from "react";
import "./App.css";
import SecondsCounter from "./SecondsCounter";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);
  const [mode, setMode] = useState("normal");
  const [time, setTime] = useState("");

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

  useEffect(() => {
    if (time === seconds) {
      alert("Has llegado al tiempo establecido");
    }
  }, [time, seconds]);

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
  const handleChange = (e) => {
    setTime(parseInt(e.target.value));
    console.log(e.target.value);
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
        handleChange={handleChange}
      ></SecondsCounter>
    </>
  );
}

export default App;
