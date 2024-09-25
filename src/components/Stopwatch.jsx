import { useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [mSeconds, setMSeconds] = useState(0);
  let timer;

  function startTimer() {
    setIsActive(true);
    timer = setInterval(function () {
      setMSeconds((prevSeconds) => {
        if (prevSeconds < 59) {
          return prevSeconds + 1;
        } else {
          return 0;
        }
      });
    }, 1);
  }

  function stopTimer() {
    setIsActive(false);
    clearInterval(timer);
    timer = null;
  }

  return (
    <div className="stopwatch">
      <h1 className="title">Stopwatch</h1>
      <div className="timer">
        <span className="minutes">00:</span>
        <span className="seconds">00.</span>
        <span className="m-seconds">
          {mSeconds.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="action-btns">
        <button
          className={`${isActive ? "stop" : "start"}`}
          onClick={isActive ? stopTimer : startTimer}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
