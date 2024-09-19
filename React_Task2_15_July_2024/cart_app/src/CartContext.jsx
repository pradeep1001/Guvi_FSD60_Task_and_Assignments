import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
 items: [],
 totalQuantity: 0,
 totalAmount: 0,
};

const cartReducer = (state, action) => {
 let updatedItems;
 switch (action.type) {
  case "SET_PRODUCTS":
   updatedItems = action.payload.map((product) => ({
    ...product,
    quantity: 1, // Initial quantity is set to 1
    checked: false, // Initial checked state is set to false
   }));
   return calculateTotals({ ...state, items: updatedItems });

  case "TOGGLE_CHECK":
   updatedItems = state.items.map((item) => (item.id === action.payload.id ? { ...item, checked: !item.checked } : item));
   return calculateTotals({ ...state, items: updatedItems });

  case "UPDATE_QUANTITY": // the issue of total price and quantity not being updated was here
   updatedItems = state.items.map((item) => (item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item));
   return calculateTotals({ ...state, items: updatedItems });

  default:
   return state;
 }
};

const calculateTotals = (state) => {
 // Initialize totals
 let totalQuantity = 0;
 let totalAmount = 0;

 // Calculate totals for items that are checked
 state.items.forEach((item) => {
  if (item.checked) {
   const itemQuantity = parseInt(item.quantity) || 0;
   const itemPrice = parseFloat(item.price) || 0;

   totalQuantity += itemQuantity; // Accumulate total quantity
   totalAmount += itemQuantity * itemPrice; // Accumulate total amount
  }
 });

 return {
  ...state,
  totalQuantity,
  totalAmount: parseFloat(totalAmount.toFixed(2)), // Round to 2 decimal places
 };
};

export const CartProvider = ({ children }) => {
 const [state, dispatch] = useReducer(cartReducer, initialState);

 return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
 const context = useContext(CartContext);
 if (!context) {
  throw new Error("useCart must be used within a CartProvider");
 }
 return context;
};
