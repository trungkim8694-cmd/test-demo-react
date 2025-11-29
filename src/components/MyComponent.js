// class component
// function

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  // JSX cú pháp đặc biết react
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name="Hoi dan IT" age="30" />
        <hr />
        <DisplayInfo name="Eric" age="26" />
      </div>
    );
  }
}

export default MyComponent;
