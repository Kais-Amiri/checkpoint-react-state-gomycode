import React, { Component } from "react";
import "./App.css";
import Profile from "./Profile";
import TimerComp from "./TimerComp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Kais",
        lastName: "Amiri",
        profession: "full stack developer",
        phoneNumber: "99999999",
        adress: "Ben Arous, Tunisie",
        bio: "I am student in gomycode",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWCEGpuakGVhwczoA5D93q1m3iUQ4vaYAc07uvcvBJfAzAT9XBQzlg_l47jY03KG5xvQ&usqp=CAU",
      },
      bool: true,
      time: 0,
    };
  }
  toggleProfile = () => {
    this.setState({ bool: !this.state.bool });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          diplay: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {this.state.bool ? <Profile myinfo={this.state.person} /> : null}
        <button
          onClick={() => this.toggleProfile()}
          style={{
            backgroundColor: "white",
            border: "1px solid green",
            borderRadius: "1rem",
            padding: "1% 3%",
            cursor: "pointer",
            color: "#00468B",
          }}
        >
          Toggle Profile
        </button>
        <TimerComp />
      </div>
    );
  }
}

export default App;
