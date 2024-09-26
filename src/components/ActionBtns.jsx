/* eslint-disable react/prop-types */
function ActionBtns({ isActive, startTimer, stopTimer }) {
  return (
    <div className="action-btns">
      <button
        className={`${isActive ? "stop" : "start"}`}
        onClick={isActive ? stopTimer : startTimer}
      >
        {isActive ? "Stop" : "Start"}
      </button>
      <button className="reset">Reset</button>
    </div>
  );
}

export default ActionBtns;
