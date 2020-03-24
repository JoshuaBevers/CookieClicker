import React from "react";
import COUNTERSTATE from "./component/counter.jsx";
import Timer from "./component/timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <COUNTERSTATE />
          <Timer />
        </div>
      </header>
    </div>
  );
}

export default App;
