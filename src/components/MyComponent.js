// class component
// function

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "hoi dan it", age: "16" },
      { id: 2, name: "Eric", age: "26" },
      { id: 3, name: "HaryPhamDev", age: "69" },
    ],
  };
  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
  };

  // JSX cú pháp đặc biết react
  render() {
    return (
      <>
        <div className="a">
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfo listUsers={this.state.listUsers} />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
