import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import store from "../../Utils/store";
import { IMG_CDN_URL } from "../../constants";
const CartCard = ({ imageId, name, category, price }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} />
      <h2>{name}</h2>
      <h6>{category}</h6>
      <span>
        <h4>{price / 100}</h4>
      </span>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <CartCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
