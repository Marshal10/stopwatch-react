import { useState } from "react";
import "./Stopwatch.css";
import Title from "./Title";
import ActionBtns from "./ActionBtns";
import Timer from "./Timer";

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

  function resetTimer() {
    stopTimer();
    setMinutes(0);
    setSeconds(0);
    setMSeconds(0);
  }

  return (
    <div className="stopwatch">
      <Title />
      <Timer minutes={minutes} seconds={seconds} mSeconds={mSeconds} />
      <ActionBtns
        isActive={isActive}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default Stopwatch;
