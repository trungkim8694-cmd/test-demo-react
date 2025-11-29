import React from "react";

class UserInfo extends React.Component {
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

  handleOnchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnchangeAge = (event) => {
    // bad code
    // this.state.age = event.target.value
    this.setState({
      age: event.target.value,
    });
  };
  render() {
    return (
      <div>
        my name is {this.state.name} and I'm from {this.state.age}{" "}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name} // giá trị mặc định của name:
            type="text"
            onChange={(event) => {
              this.handleOnchangeInput(event);
            }}
          />
          <label>Your age: </label>
          <input
            value={this.state.age} // giá trị mặc định của name:
            type="text"
            onChange={(event) => {
              this.handleOnchangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
