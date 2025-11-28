// class component
// function

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "HarryPhamDev",
    address: "hoi dan it",
    age: 26,
  };
  handleClick(event) {
    console.log(">>> Click me my button");
    console.log("my nam is ", this.state.name);
  }

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  // JSX cú pháp đặc biết react
  render() {
    return (
      <div>
        my name is {this.state.name} and I'm from {this.state.address}{" "}
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
