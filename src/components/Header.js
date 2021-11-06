import React from "react";

export default function Header(props) {
  return (
    <>
      <div className="header d-flex justify-content-around bg-secondary mt-3 p-3 rounded">
        <h3>Shop App</h3>
        <div className="d-flex">
          <h3>Cart</h3>
          <h3>SignIn</h3>
        </div>
      </div>
    </>
  );
}
