import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/AboutUs/About";
import Contact from "./Components/ContactUs/Contact";
import Error from "./Components/HelperComponents/Error";
import Body from "./Components/Home/Body";
import Login from "./Components/AuthPages/Login";
import RestaurantMenu from "./Components/RestaurantPages/RestaurantMenu";
import ProfileClass from "./Components/AboutUs/ProfileClass";
import Shimmer from "./Components/HelperComponents/Shimmer";
import Cart from "./Components/Cart/Cart";
import ThankYou from "./Components/HelperComponents/ThankYou";

const Instamart = lazy(() => import("./Components/Instamart/Instamart"));
//Upon On Demand loading -> upon render -> suspend loading

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "thankyou",
        element: <ThankYou />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
