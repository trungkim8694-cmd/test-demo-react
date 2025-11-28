// class component
// function

import React from "react";

class MyComponent extends React.Component {
  // JSX cú pháp đặc biết react
  render() {
    return (
      <div>
        my first component
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;
