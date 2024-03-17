import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p>  ₹{price} </p>
      <h1> {name} </h1>
    </div>
  );
}

export default MenuItem;
