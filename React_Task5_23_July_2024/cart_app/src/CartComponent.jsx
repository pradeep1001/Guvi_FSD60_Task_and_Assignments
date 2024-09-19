import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, toggleCheck } from "./Redux Toolkit/cartSlice";
import "./Style.css";

const CartComponent = () => {
 const dispatch = useDispatch();
 const cart = useSelector((state) => state.cart);

 const handleQuantityChange = (itemId, quantity) => {
  dispatch(updateQuantity({ id: itemId, quantity: Number(quantity) }));
 };

 return (
  <div className="cart-container">
   {cart.items.map((item) => (
    <div key={item.id} className="cart-item">
     <div className="image_wrap">
      <input
       type="checkbox"
       checked={item.checked}
       onChange={() => dispatch(toggleCheck(item))}
       className="cart-checkbox"
      />
      <img src={item.thumbnail} alt={item.title} className="cart-thumbnail" />
     </div>
     <div className="cart-details">
      <div className="cart-header">
       <h3 className="cart-item-title">{item.title}</h3>
       <div className="cart-price-container">
        <div className="cart-quantity-container">
         <select
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
          className="cart-quantity"
         >
          {[...Array(11).keys()].map((num) => (
           <option key={num} value={num}>
            {num}
           </option>
          ))}
         </select>
        </div>
        <p className="cart-original-price">${item.price}</p>
        <p className="cart-discounted-price">
         ${calculateDiscountedPrice(item.price, item.discountPercentage)}
        </p>
       </div>
      </div>
      <p className="cart-category">{item.category}</p>

      <div className="cart-meta">
       <p className="cart-brand">Brand: {item.brand}</p>
       <p className="cart-stock">Stock: {item.stock}</p>
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
     <h3>${cart.totalAmount}</h3>
    </div>
    <div className="amount-div">
     <h3>Total quantity:</h3>
     <h3>{cart.totalQuantity}</h3>
    </div>
   </div>
  </div>
 );
};

const calculateDiscountedPrice = (price, discountPercentage) => {
 return parseFloat((price - price * (discountPercentage / 100)).toFixed(2));
};

export default CartComponent;
