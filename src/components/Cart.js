import React, { createContext, useContext, useEffect, useReducer } from "react";
import "./cart.css";
import { products } from "./Products";
import ContextCart from "./ContextCart";
import {reducer} from "./reducer";

// create a context
export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 1,
  totalItem: 0,

};

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(()=>{
    dispatch({type:"GET_TOTAL"});
  },[state.item]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem,clearCart, increment, decrement }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

// custom Hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default Cart;