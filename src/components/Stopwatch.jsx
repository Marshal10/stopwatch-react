import "./Stopwatch.css";

function Stopwatch() {
  return (
    <div className="stopwatch">
      <h1 className="title">Stopwatch</h1>
      <div className="timer">
        <span className="hours">00:</span>
        <span className="minutes">00:</span>
        <span className="seconds">00</span>
      </div>
      <div className="action-btns">
        <button className="stop">Stop</button>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
