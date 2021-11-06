import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import Data from "../src/Data";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const incCart = (data) => {
    const exist = cart.find((x) => x.id === data.id);
    if (!exist) {
      setCart([...cart, { ...data, qty: 1 }]);
      // console.log(cart);
    } else {
      setCart(
        cart.map((x) => {
          return x.id === data.id ? { ...exist, qty: exist.qty + 1 } : x;
        })
      );
    }
  };
  const decCart = (data) => {
    const exist = cart.find((x) => x.id === data.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== data.id));
    } else {
      setCart(
        cart.map((x) => {
          return x.id === data.id ? { ...exist, qty: exist.qty - 1 } : x;
        })
      );
    }
  };
  return (
    <div className="App container">
      <Header />
      <div className="d-flex my-3">
        <Main data={Data} incCart={incCart} />
        <Basket cartItems={cart} incCart={incCart} decCart={decCart} />
      </div>
    </div>
  );
}

export default App;
