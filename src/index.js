import React from "react";
import ReactDOM from "react-dom";

function Welcome(props) {
  return (
    <div>
      <h1>Welcome {props.name}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Nakka" />
      <Welcome name="Leela" />
      <Welcome name="prasanth" />
      <Welcome name="It does Work" />
      <img
        src="./images/image-4f5952b3351e98e47db3ac011017000a.png"
        alt="something"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
