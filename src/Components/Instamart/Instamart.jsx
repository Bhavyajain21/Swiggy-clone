import React, { useState } from "react";
import "./Instamart.css";

const obj = [
  {
    number: "Can we really order using this app?",
    desc: "No, this app is just a UI clone of a Food Ordering Website.",
  },
  {
    number:
      "I see a payment integration on click of Checkout, if I enter the details for the payment, will the payment be processed?",
    desc: "Yes, It has a Stripe Payment Integration which will help me recieve a payment, so it will be deducted from your account",
  },
];
const AccordianBar = ({ index, show, setInd, setShow, number, desc }) => {
  const handleClick = () => {
    setShow(show);
    setInd(index);
  };
  return (
    <div className="c-1">
      <div className="row">
        <div className="first">{number}</div>
        <div onClick={handleClick} className="second show">
          {show ? "Hide" : "Show"}
        </div>
      </div>
      {show && <div className="p-1">{desc}</div>}
    </div>
  );
};

const Instamart = () => {
  const [show, setShow] = useState(false);
  const [ind, setInd] = useState();

  return (
    <div className="instamart-container">
      {obj.map((e, index) => {
        return (
          <AccordianBar
            index={index}
            show={ind == index ? !show : false}
            number={e.number}
            desc={e.desc}
            setInd={setInd}
            setShow={setShow}
          />
        );
      })}
    </div>
  );
};

export default Instamart;
