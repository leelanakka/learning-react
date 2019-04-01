import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component{

    render(){
      return (<div>
      <p1> Hello My World!</p1> <br></br>
      <p1> It is {this.props.date.toLocaleTimeString()}.</p1>
    </div>)
    }
}


export default Clock;