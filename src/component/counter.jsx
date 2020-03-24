import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class COUNTERSTATE extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
      spinSpeed: 20
    };

    this.incrementClicks = async () => {
      await this.setState({ clicks: this.state.clicks + 1 });
      await this.checkClicks();
    };

    this.decrementClicks = async () => {
      await this.setState({ clicks: this.state.clicks - 10 });
      await this.checkClicks();
    };

    this.displayDecrement = props => {
      const option = props.count;
      if (option >= 10) {
        return (
          <h1>
            <button onClick={this.decrementClicks}>
              Click to Decrement by 1
            </button>
          </h1>
        );
      } else {
        return null;
      }
    };

    this.checkClicks = () => {
      switch (this.state.clicks) {
        case 0:
          this.setState({ spinSpeed: 20 });
          break;
        case 8:
          this.setState({ spinSpeed: 5 });
          break;
        case 10:
          this.setState({ spinSpeed: 1 });
          break;
        default:
        // code block
      }
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementClicks}>
          <img
            style={{
              animation: `App-logo-spin infinite ${this.state.spinSpeed}s linear`
            }}
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </button>
        <p>Number of clicks is: {this.state.clicks}</p>
        <button onClick={this.incrementClicks}>Click to Increment by 1</button>
        <this.displayDecrement count={this.state.clicks} />
      </div>
    );
  }
}

export default COUNTERSTATE;
