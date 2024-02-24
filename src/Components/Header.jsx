import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import useAuth from "../Hooks/useAuth";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useEffect, useContext } from "react";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import store from "../Utils/store";
import { FaShoppingCart } from "react-icons/fa";

// Title component for display logo
const Title = () => (
  <Link to="/">
    <img
      data-testid="logo"
      className="logo"
      src={FoodFireLogo}
      alt="Food Fire"
      title="Food Fire"
    />
  </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");
  // call custom hook useAuth for user is loggedin or not
  const [isLoggedin, setIsLoggedin] = useAuth();

  // accessing the redux store in the app
  // we are subscribing the store.cart.items, which means eveytime store.cart.items the compoenent will render
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    // if value of getLocalStorage is equal to null setIsLoggedin to false
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage]);

  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      {/* if user is logged in then display userName */}
      {isLoggedin && (
        <div className="user-name">Hi {getLocalStorage?.userName}!</div>
      )}

      <div className="nav-items">
        <ul>
          <Link to="/" className="nav-items-li">
            <li>Home</li>
          </Link>
          <Link to="/about" className="nav-items-li">
            <li>About</li>
          </Link>

          <Link to="/contact" className="nav-items-li">
            <li>Contact</li>
          </Link>
          <Link to="/instamart" className="nav-items-li">
            <li>Instamart</li>
          </Link>
          {/* <li>{user.name}</li> */}
          <Link to="/cart" className="nav-items-li" data-testid="cart">
            <li className="inside">
              <FaShoppingCart className="enlarge-cart" />
              {cartItems.length > 0 ? (
                <>&nbsp; - &nbsp;{cartItems.length}</>
              ) : null}
            </li>
          </Link>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage();
                  setIsLoggedin(false);
                  navigate("/login");
                }}>
                Logout
                <span
                  data-testid="online-status"
                  className={isOnline ? "login-btn-green" : "login-btn-red"}>
                  {" "}
                  ●
                </span>
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
                <span
                  data-testid="online-status"
                  className={isOnline ? "login-btn-green" : "login-btn-red"}>
                  {" "}
                  ●
                </span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
