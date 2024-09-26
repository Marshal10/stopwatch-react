/* eslint-disable react/prop-types */
function Timer({ minutes, seconds, mSeconds }) {
  return (
    <div className="timer">
      <span className="minutes">{minutes.toString().padStart(2, "0")}:</span>
      <span className="seconds">{seconds.toString().padStart(2, "0")}.</span>
      <span className="m-seconds">{mSeconds.toString().padStart(2, "0")}</span>
    </div>
  );
}

export default Timer;
