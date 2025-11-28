// class component
// function

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "HarryPhamDev",
    address: "hoi dan it",
    age: 26,
  };
  // JSX cú pháp đặc biết react
  render() {
    return (
      <div>
        my name is {this.state.name} and I'm from {this.state.address}{" "}
      </div>
    );
  }
}

export default MyComponent;
