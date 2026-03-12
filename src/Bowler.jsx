import React, { useState } from "react";

const Bowler = () => {
  const [bowler, setBowler] = useState(0);
  const incrementBall = () => {
    const newBall = bowler + 1;
    setBowler(newBall);
  };
  const decrementBall = () => {
    const newBall = bowler - 1;
    setBowler(newBall);
  };
  return (
    <div>
      <h2>Total Ball {bowler}</h2>
      <button onClick={incrementBall}>1</button>
      <button onClick={decrementBall}>No Ball</button>
      <p>{bowler >= 6 && "It's One Over Complete"}</p>
    </div>
  );
};

export default Bowler;
