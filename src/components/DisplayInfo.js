import React from "react";
import "./DisplayInfor.scss";

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
    const { listUsers } = this.props; //tương dudong với const lisUsers = this.props.listUsers;
    //props => viết tắt của từ property
    // console.log(listUsers);
    // console.table(listUsers);
    return (
      <div className="display-info-container">
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
          <div>
            {listUsers.map((user, index) => {
              return (
                <div
                  key={user.id}
                  className={parseFloat(user.age) > 18 ? "green" : "red"}
                >
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
