import React from "react";
import Products from "./Products";
import "./css/main.css";

export default function Main(props) {
  const { data, incCart } = props;
  return (
    <>
      <div className="main me-3 rounded p-5">
        <h5>Products</h5>
        <div className="d-flex flex-row justify-content-between">
          {data.map((x) => {
            return <Products key={x.id} product={x} incCart={incCart} />;
          })}
        </div>
      </div>
    </>
  );
}
