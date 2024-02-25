import React, { useEffect, useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../Utils/store";
import { mapPricetoQuantity, removeItem } from "../../Utils/cartslice";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../../constants";

const CartRow = ({ item }) => {
  const dispatch = useDispatch();
  const { name, description, price, imageId } = item;

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
    <div className="cartRow">
      <div className="left">
        <div className="cart-img-container">
          {imageId && (
            <img
              className="img-cart"
              src={ITEM_IMG_CDN_URL + imageId}
              alt={name}
            />
          )}
        </div>
        <div className="cart-item-desc">
          <div className="foodName">{name}</div>
          <div className="foodDesc">{description}</div>
        </div>
        <div className="amount">
          {price > 0
            ? new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(price / 100)
            : " "}
        </div>
        <div className="qty">
          <button onClick={handleDec} className="cart-add-btn">
            -
          </button>
          <input
            className="items-number"
            type="text"
            value={
              val[cartItems.findIndex((obj) => obj.id === item.id)]?.quantity
            }
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={handleInc} className="cart-add-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsQuantity = useSelector((store) => store.cart.itemQuantity);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let init = 0;
    cartItemsQuantity.forEach((element) => {
      init += (element.price * element.quantity) / 100;
    });
    setTotal(init);
  }, [cartItems, cartItemsQuantity]);

  if (cartItems.length == 0)
    return <h1 className="empty-cart">Cart is Empty!</h1>;

  return (
    <div className="cart-container">
      <h1>Your Cart ({cartItems.length} items)</h1>
      {cartItems.map((item) => {
        return <CartRow key={item.id} item={item} />;
      })}
      <div className="total">
        <div className="subtotal">Total:</div>
        <div className="money">
          {" "}
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(total)}
        </div>
      </div>
      <Link to="/thankyou">
        <div className="checkout">Checkout</div>
      </Link>
    </div>
  );
};

export default Cart;
