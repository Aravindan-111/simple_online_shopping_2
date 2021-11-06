import React from "react";
import "./css/basket.css";

export default function Basket(props) {
  const { cartItems, incCart, decCart } = props;
  console.log(cartItems);
  return (
    <div className="basket rounded">
      <div className="p-3">
        <div className="bg-danger p-3 mb-3 rounded">
          <h2>Cart Items</h2>
        </div>
        <div>
          {cartItems.length === 0 && (
            <div>
              <h2>Cart is Empty</h2>
            </div>
          )}
        </div>
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>{item.name}</div>
              <div className="">
                <button
                  className="add btn btn-success m-1"
                  onClick={() => incCart(item)}
                >
                  +
                </button>
                <button
                  className="add btn btn-success m-1"
                  onClick={() => decCart(item)}
                >
                  -
                </button>
              </div>
              <div>
                {item.qty}x{item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
