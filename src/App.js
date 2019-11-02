import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorCard from "./components/ColorCard";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    colors
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Colors</h1>
        {this.state.colors.map(friend => (
          <ColorCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
