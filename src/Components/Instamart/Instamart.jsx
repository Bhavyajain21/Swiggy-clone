import React, { useState } from "react";
import "./Instamart.css";

const obj = [
  { number: "1st", desc: "Bhavya" },
  { number: "2nd", desc: "Pandey" },
  { number: "3rd", desc: "Naveen" },
];
const AccordianBar = ({ index, show, setInd, number, desc }) => {
  const handleClick = () => {
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
  const show = false;
  const [ind, setInd] = useState();

  return (
    <div className="instamart-container">
      {obj.map((e, index) => {
        return (
          <AccordianBar
            index={index}
            show={ind == index ? true : false}
            number={e.number}
            desc={e.desc}
            setInd={setInd}
          />
        );
      })}
    </div>
  );
};

export default Instamart;
