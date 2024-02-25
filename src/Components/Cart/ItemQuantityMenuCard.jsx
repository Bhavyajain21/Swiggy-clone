import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { mapPricetoQuantity, removeItem } from "../../Utils/cartslice";
import "./ItemQuantity.css";
import store from "../../Utils/store";

const ItemQuantityMenuCard = ({ item }) => {
  const dispatch = useDispatch();

  const val = useSelector((store) => store.cart.itemQuantity);
  const cartItems = useSelector((store) => store.cart.items);

  const handleInc = () => {
    dispatch(
      mapPricetoQuantity({
        id: item.id,
        price: item.price ? item.price : 0,
        quantity:
          val[cartItems.findIndex((obj) => obj.id === item.id)]?.quantity + 1,
      })
    );
  };

  const handleDec = () => {
    if (
      val[cartItems.findIndex((obj) => obj.id === item.id)]?.quantity - 1 ==
      0
    ) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(
        mapPricetoQuantity({
          id: item.id,
          price: item.price ? item.price : 0,
          quantity:
            val[cartItems.findIndex((obj) => obj.id === item.id)]?.quantity - 1,
        })
      );
    }
  };

  const handleInputChange = (e) => {
    dispatch(
      mapPricetoQuantity({
        id: item.id,
        price: item.price ? item.price : 0,
        quantity: e.target.value,
      })
    );
  };

  return (
    <div className="qty-menu-item">
      <button onClick={handleDec} className="cart-add-btn-menu-item">
        -
      </button>
      <input
        className="items-number-menu-item"
        type="text"
        value={val[cartItems.findIndex((obj) => obj.id === item.id)]?.quantity}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={handleInc} className="cart-add-btn-menu-item">
        +
      </button>
    </div>
  );
};

export default ItemQuantityMenuCard;
