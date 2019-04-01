import React from "react";
import ReactDOM from "react-dom";

function Tick() {
  const element = (
    <div>
      <p1> Hello My World!</p1> <br></br>
      <p1> It is {new Date().toLocaleTimeString()}.</p1>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(Tick,1000)
