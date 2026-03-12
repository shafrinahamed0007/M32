import { useState } from "react";

import "./App.css";

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("Click 3");
  };

  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("Click 2");
        }}
      >
        Click Me2
      </button>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={() => alert("Click 4")}>Click 4</button>
      <button onClick={handleClick5(7)}>Click add 5</button>
    </>
  );
}

export default App;
