import React, { useEffect, useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import store from "../../Utils/store";
import { mapPricetoQuantity } from "../../Utils/cartslice";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../../constants";
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

const CartRow = ({ item }) => {
  const dispatch = useDispatch();
  const { name, description, price, imageId } = item;

  const handleInc = () => {
    setQty(qty + 1);
    dispatch(
      mapPricetoQuantity({
        id: item.id,
        price: item.price ? item.price : 0,
        quantity: qty + 1,
      })
    );
  };

  const handleDec = () => {
    setQty(qty - 1);
    dispatch(
      mapPricetoQuantity({
        id: item.id,
        price: item.price ? item.price : 0,
        quantity: qty - 1,
      })
    );
  };
  const [qty, setQty] = useState(1);

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
            value={qty}
            onChange={(e) => setQty(e.target.value)}
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
    console.log(cartItemsQuantity);
    let init = 0;
    cartItemsQuantity.forEach((element) => {
      init += (element.price * element.quantity) / 100;
    });
    setTotal(init);
  }, [cartItemsQuantity]);

  if (cartItems.length == 0)
    return <h1 className="empty-cart">Cart is Empty!</h1>;

  return (
    <div className="cart-container">
      <h1>Your Cart ({cartItems.length} items)</h1>
      {cartItems.map((item) => {
        return <CartRow item={item} />;
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
    </div>
  );
};

export default Cart;
