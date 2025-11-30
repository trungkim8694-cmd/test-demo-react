import React from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    // destructuring array/ object
    const { listUsers } = this.props; //tương duong với const lisUsers = this.props.listUsers;
    //props => viết tắt của từ property
    // console.log(listUsers);
    // console.table(listUsers);

    //template + logic js

    return (
      <div className="display-info-container">
        {/* <img src={logo} /> */}
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users: "
              : "show list users: "}
          </span>
        </div>
        {this.state.isShowListUser && (
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
                        this.props.handleDeleteUser(user.id);
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
  }
}

export default DisplayInfo;
