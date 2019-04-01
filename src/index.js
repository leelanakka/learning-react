import React from "react";
import ReactDOM from "react-dom";


function Clock(props){
  return (
    <div>
      <p1> Hello My World!</p1> <br></br>
      <p1> It is {props.date.toLocaleTimeString()}.</p1>
    </div>
  )
}

function Tick() {
  ReactDOM.render(<Clock date={new Date()}  />, document.getElementById("root"));
}

setInterval(Tick,1000)
