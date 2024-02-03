import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Utils/UserContext";

function App() {
  const [user, setUser] = useState({
    name: "Bhavya Jain",
    email: "rishikabhavya@gmail.com",
  });
  return (
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
  );
}

export default App;
