import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_API_User, Github_UserName, options } from "../constants";
import UserContext from "../Utils/UserContext";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
    console.log("Profile-Parent constructor");
  }

  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName); // access the props `name` from parent class `ProfileClass`
    const json = await response.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const { userInfo } = this.state; // object destructuring for json data
    // console.log("Profile-Parent - render");
    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <ProfileUserClass data={userInfo} />
          {/* Passing props data (full json data) from parent to child */}
        </div>
      </div>
    );
  }
}

export default Profile;
