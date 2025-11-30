// class component
// function

import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "hoi dan it", age: "16" },
//       { id: 2, name: "Eric", age: "26" },
//       { id: 3, name: "HaryPhamDev", age: "69" },
//     ],
//   };
//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   // JSX cú pháp đặc biết react
//   render() {
//     return (
//       <>
//         <div className="a">
//           <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <br />
//           <DisplayInfo
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUser] = useState([
    { id: 1, name: "hoi dan it", age: "16" },
    { id: 2, name: "Eric", age: "26" },
    { id: 3, name: "HaryPhamDev", age: "69" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUser([userObj, ...listUsers]);

    // this.setState({
    //   listUsers: [userObj, ...this.state.listUsers],
    // });
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUser(listUsersClone);

    // this.setState({
    //   listUsers: listUsersClone,
    // });
  };
  return (
    <>
      <div className="a">
        <AddUserInfo handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
