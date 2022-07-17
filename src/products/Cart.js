import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../reactReduxCounter/actions/indext";
export const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state);
    return state.changeCartCountReducer.products;
  });
  return (
    <>
      <div>Cart</div>
      <div>
        {data?.length
          ? data.map((item) => {
              return (
                <>
                  <div>
                    Product - {item.name} <span>Discount -{item.discount}</span>{" "}
                    <span>Price - {item.price}</span>
                  </div>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </>
              );
            })
          : "No Product selected"}
      </div>
      <Link to="/">Back to home</Link>
    </>
  );
};
