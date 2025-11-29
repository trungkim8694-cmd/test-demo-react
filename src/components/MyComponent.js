// class component
// function

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "HarryPhamDev",
    address: "hoi dan it",
    age: 26,
  };
  handleClick = (event) => {
    console.log(">>> Click me my button");
    console.log("my nam is ", this.state.name);

    this.setState({
      name: "Eric",
    });
  };

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  handleOnchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  // JSX cú pháp đặc biết react
  render() {
    return (
      <div>
        my name is {this.state.name} and I'm from {this.state.age}{" "}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnchangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
