import React from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log(">>> call constructor: 1");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>> call me component did mount");
    setTimeout(() => {
      document.title = "Eric & hỏi Dân it";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>> call me component did update", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("you got 5 users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log(">>> call me render ");
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
