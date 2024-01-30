import React, { useState } from "react";

const Test = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiply = () => {
    console.log("**************");
    return add * 10;
  };
  return (
    <div>
      {multiply()}
      <br />
      <button onClick={() => setAdd(add + 1)}>Additon</button>
      {add}
      <br />
      <button onClick={() => setMinus(minus - 1)}>Subtract</button>
      {minus}
      <br />
    </div>
  );
};

export default Test;
