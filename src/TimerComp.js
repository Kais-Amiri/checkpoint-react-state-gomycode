import React, { Component } from "react";

export default class TimerComp extends Component {
  state = {
    time: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h4>{this.state.time}</h4>
      </div>
    );
  }
}
