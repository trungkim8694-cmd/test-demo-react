import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     address: "hoi dan it",
//     age: "",
//   };

//   handleClick = (event) => {
//     console.log(">>> Click me my button");
//     console.log("my nam is ", this.state.name);

//     this.setState({
//       name: "Eric",
//     });
//   };

//   handleOnchangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnchangeAge = (event) => {
//     // bad code
//     // this.state.age = event.target.value
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);

//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         my name is {this.state.name} and I'm from {this.state.age}{" "}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name} // giá trị mặc định của name:
//             type="text"
//             onChange={(event) => {
//               this.handleOnchangeInput(event);
//             }}
//           />
//           <label>Your age: </label>
//           <input
//             value={this.state.age} // giá trị mặc định của name:
//             type="text"
//             onChange={(event) => {
//               this.handleOnchangeAge(event);
//             }}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  // state = {
  //   name: "",
  //   address: "hoi dan it",
  //   age: "",
  // };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("Hỏi Dân IT");
  const [age, setAge] = useState("");

  const handleOnchangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value);
  };
  const handleOnchangeAge = (event) => {
    // bad code
    // this.state.age = event.target.value
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      my name is {name} and I'm from {age}{" "}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={name} // giá trị mặc định của name:
          type="text"
          onChange={(event) => {
            handleOnchangeInput(event);
          }}
        />
        <label>Your age: </label>
        <input
          value={age} // giá trị mặc định của name:
          type="text"
          onChange={(event) => {
            handleOnchangeAge(event);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfo;
