import { useState } from "react";
import "./Stopwatch.css";

let timer;
function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [mSeconds, setMSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  function startTimer() {
    if (!isActive) {
      setIsActive(true);
      timer = setInterval(function () {
        setMSeconds((prevSeconds) => {
          if (prevSeconds < 99) {
            return prevSeconds + 1;
          } else {
            handleSeconds();
            return 0;
          }
        });
      }, 10);
    }
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
    setIsActive(false);
  }

  function handleSeconds() {
    setSeconds((prevSeconds) => {
      if (prevSeconds < 59) {
        return prevSeconds + 1;
      } else {
        handleMinutes();
        return 0;
      }
    });
  }

  function handleMinutes() {
    setMinutes((prevMins) => {
      if (prevMins < 59) {
        return prevMins + 1;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className="stopwatch">
      <h1 className="title">Stopwatch</h1>
      <div className="timer">
        <span className="minutes">{minutes.toString().padStart(2, "0")}:</span>
        <span className="seconds">{seconds.toString().padStart(2, "0")}.</span>
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
