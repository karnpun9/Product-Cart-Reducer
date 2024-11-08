import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/Product";
import CartReducer from "../reducer/CartReducer";

//สร้างโกดังเก็บของ คลังข้อมูล
const CartContext = createContext();

//ค่าตั้งต้นของ State
const initState = {
  products: products,
  total: 0,
  amount: 0,
};

//ตัวกระจายข้อมูล ตัวกระจายของในโกดัง
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function addQuantity (id) {
    dispatch({type:"ADD", payload: id})

  }

  function subtractQuantity(id) {
    dispatch({type:"SUBTRACT", payload:id})
    

  }

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.products]);

  return (
    <CartContext.Provider value={{ ...state, formatMoney, removeItem, addQuantity, subtractQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

//เอาของในโกดังไปใช้งานข้างนอก
export const useCart = () => {
  return useContext(CartContext);
};
