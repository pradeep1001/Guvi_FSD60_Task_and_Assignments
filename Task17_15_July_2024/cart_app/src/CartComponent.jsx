import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./Style.css";

const CartComponent = ({ items }) => {
 const { state, dispatch } = useCart();
 const { totalAmount, totalQuantity } = state;
 const [localQuantities, setLocalQuantities] = useState({});

 const handleQuantityChange = (itemId, quantity) => {
  const newQuantity = Math.max(0, Number(quantity));

  setLocalQuantities((prev) => {
   const newState = { ...prev };
   if (newQuantity === 0) {
    delete newState[itemId];
   } else {
    newState[itemId] = newQuantity;
   }
   return newState;
  });

  dispatch({
   type: "UPDATE_QUANTITY",
   payload: { id: itemId, quantity: newQuantity },
  });
 };

 const toggleCheck = (item) => {
  dispatch({ type: "TOGGLE_CHECK", payload: item });
 };

 /* const calculateTotal = () => {
    if (!items) return 0; // or handle this case appropriately
    return Object.entries(localQuantities).reduce((total, [itemId, quantity]) => {
      const item = items.find(i => i.id === Number(itemId));
      if (item) {
        return total + (item.price * quantity);
      } else {
        console.warn(`Item with id ${itemId} not found`);
        return total;                                     
      }                                             
    }, 0);
  }; */
  
  
  
  return (
  <div className="cart-container">
   {state.items.map((item) => (
    <div key={item.id} className="cart-item">
     <div className="image_wrap">
      <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(item)} className="cart-checkbox" />
      <img src={item.image} alt={item.title} className="cart-thumbnail" />
     </div>
     <div className="cart-details">
      <div className="cart-header">
       <h3 className="cart-item-title">{item.title}</h3>
       <div className="cart-price-container">
        <div className="cart-quantity-container">
         <select value={localQuantities[item.id] || item.quantity} onChange={(e) => handleQuantityChange(item.id, e.target.value)} className="cart-quantity">
          {[...Array(11).keys()].map((num) => (
           <option key={num} value={num}>
            {num}
           </option>
          ))}
         </select>
        </div>
        <p className="cart-original-price">${item.price}</p>
        {/*   <p className="cart-discounted-price">
                  ${calculateDiscountedPrice(item.price, item.discountPercentage)}
                </p> */}
       </div>
      </div>
      <p className="cart-category">{item.category}</p>
      <div className="cart-meta">
       <p className="cart-brand">Rating: {item.rating.rate}</p>
       <p className="cart-stock">Stock: {item.rating.count}</p>
      </div>
      <div className="wrap_desc">
       <p className="cart-description">{item.description}</p>
       <p className="free_delivery">Free Delivery</p>
      </div>
     </div>
    </div>
   ))}
   <div className="cart-summary">
    <div className="amount-div">
     <h3>Total Amount:</h3>
     <h3>${totalAmount.toFixed(2)}</h3>
    </div>
    <div className="amount-div">
     <h3>Total quantity:</h3>
     <h3>{totalQuantity}</h3>
    </div>
   </div>
  </div>
 );
};

export default CartComponent;
