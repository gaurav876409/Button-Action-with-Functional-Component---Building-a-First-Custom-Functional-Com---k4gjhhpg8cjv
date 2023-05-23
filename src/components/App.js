import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click
      </button>
      {isClicked && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
}

export default App;




