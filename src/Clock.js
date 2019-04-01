import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <p1> Hello My World!</p1> <br />
        <p1> It is {this.state.date.toLocaleTimeString()}.</p1>
      </div>
    );
  }
}

export default Clock;
