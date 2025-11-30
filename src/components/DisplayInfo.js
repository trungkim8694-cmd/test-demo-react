import React from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

// stateless vs stateful
// class DisplayInfo extends React.Component {}

const DisplayInfo = (props) => {
  const { listUsers } = props; //tương duong với const lisUsers = props.listUsers;
  return (
    <div className="display-info-container">
      {true && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div
                key={user.id}
                className={parseFloat(user.age) > 18 ? "green" : "red"}
              >
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
