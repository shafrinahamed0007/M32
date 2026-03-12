import React, { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [four, setFour] = useState(0);
  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleFour = () => {
    const updateRuns = runs + 4;
    const updateFour = four + 1;
    setFour(updateFour);
    setRuns(updateRuns);
  };

  const handleSix = () => {
    const updateRuns = runs + 6;
    const updatedSixs = sixes + 1;
    setSixes(updatedSixs);
    setRuns(updateRuns);
  };
  return (
    <div>
      <h3>Player: Bangladesh Batsman</h3>
      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>1 </button>
      <button onClick={handleFour}>4</button>
      <button onClick={handleSix}>6</button>
      <p>
        <small>Total Six: {sixes}</small>
        <small>Total Four: {four}</small>
      </p>
      {runs > 50 && <p>Your Score : 50</p>}
    </div>
  );
}
