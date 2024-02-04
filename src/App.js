import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";

function App() {
  const [user, setUser] = useState({
    name: "Bhavya Jain",
    email: "rishikabhavya@gmail.com",
  });
  return (
    <Provider store={store}>
      <div className="App">
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </div>
    </Provider>
  );
}

export default App;
