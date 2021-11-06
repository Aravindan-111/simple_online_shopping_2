import React from "react";
import "./css/products.css";

export default function Products(props) {
  const { product, incCart } = props;

  return (
    <>
      <div className="">
        <div className="me-4 d-flex flex-column align-items-center">
          <img className="img mb-3" src={product.image} alt="" />
          <h5>{product.name}</h5>
          <h4>{product.price}</h4>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => incCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
