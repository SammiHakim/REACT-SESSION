import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../reactReduxCounter/actions/indext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const products = [
  { name: "Shoes", price: "$60", discount: "50%", id: 0 },
  { name: "Tshirt", price: "$60", discount: "50%", id: 1 },
  { name: "Shirt", price: "$60", discount: "50%", id: 2 },
  { name: "Bag", price: "$60", discount: "50%", id: 3 },
  { name: "Cap", price: "$60", discount: "50%", id: 4 },
  { name: "Phone", price: "$60", discount: "50%", id: 5 },
  { name: "Bottle", price: "$60", discount: "50%", id: 6 },
];
const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state);
    return state.changeCartCountReducer.products;
  });
  return (
    <>
      <div>
        <Link to="/cart">Checkout</Link>
      </div>
      <div>
        {products.map((item) => {
          let flag = false;
          data.length &&
            data.map((ele) => {
              if (ele.id === item.id) flag = true;
            });
          return (
            <div key={item.id}>
              <div>
                Product - {item.name} <span>Discount -{item.discount}</span>{" "}
                <span>Price - {item.price}</span>
              </div>
              {flag ? (
                <button disabled={true}>Add to Cart</button>
              ) : (
                <button onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
