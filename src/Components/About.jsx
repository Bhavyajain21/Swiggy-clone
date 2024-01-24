import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import food from "../Images/burger-image.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="about-profile-container">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="about-profile-button"
                onClick={() => setShow(false)}>
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(true)}>
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;

// class About2 extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log("in constructor");
//     this.state = {
//       count: 0,
//     };
//   }

//   // triggers after the initial render
//   async componentDidMount() {
//     const data = await fetch("https://api.github.com/users/bhavyajain21");
//     const json = await data.json();
//     // console.log(json);
//     this.setState({ count: 1 });
//   }

//   // triggers after the state is update or on each render
//   componentDidUpdate(prevProps, prevState) {
//     // console.log(this.state.count);
//     // console.log(prevState);
//   }

//   // triggers when the component is no longer rendered
//   componentWillUnmount() {
//     console.log("Bhavya");
//   }
//   render() {
//     return (
//       <div className="about-container">
//         <div className="about-left">
//           <h1>
//             Welcome to <br /> The world of <br />{" "}
//             <span>Tasty & Fresh Food</span>
//           </h1>
//           <h4>
//             "Better you will feel if you eat a Food<span>Fire</span> healthy
//             meal"
//           </h4>
//         </div>
//         <div className="about-right">
//           <img src={food} alt="Food Image" />
//         </div>
//       </div>
//     );
//   }
// }

// export default About;
