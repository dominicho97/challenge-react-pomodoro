import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1500,
      start: 0
    };
    // button functions bind
    this.startBtn = this.startBtn.bind(this);
    this.stopBtn = this.stopBtn.bind(this);
    this.resetBtn = this.resetBtn.bind(this);
  }
  //buttons
  startBtn() {
    this.setState({
      seconds: this.state.seconds,
      start: Date.now()
    });
    this.timer = setInterval(
      () =>
        this.setState({
          seconds: this.state.seconds - 1
        }),
      1000
    );
    console.log("start");
  }

  stopBtn() {
    clearInterval(this.timer);
    console.log("stop");
  }
  resetBtn() {
    this.setState({ seconds: 1500 });
    console.log("reset");
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Pomodoro Timer</div>
        <div>
          <div className="timer2">{this.state.seconds} seconds</div>
        </div>

        <div>
          <button onClick={this.startBtn}>start</button>
          <button onClick={this.stopBtn}>stop</button>
          <button onClick={this.resetBtn}>reset</button>
        </div>
      </div>
    );
  }
}

export default App;
