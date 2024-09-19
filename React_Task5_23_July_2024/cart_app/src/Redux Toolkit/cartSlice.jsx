import { createSlice } from "@reduxjs/toolkit";

const calculateDiscountedPrice = (price, discountPercentage) => {
 return price - price * (discountPercentage / 100);
};

const initialState = {
 items: [],
 totalQuantity: 0,
 totalAmount: 0,
};

const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  setProducts: (state, action) => {
   state.items = action.payload.map((product) => ({
    ...product,
    quantity: 1,
    totalPrice: calculateDiscountedPrice(
     product.price,
     product.discountPercentage
    ),
    checked: false,
   }));
  },
  toggleCheck: (state, action) => {
   const existingItem = state.items.find(
    (item) => item.id === action.payload.id
   );
   if (existingItem) {
    existingItem.checked = !existingItem.checked;
    if (existingItem.checked) {
     state.totalQuantity += existingItem.quantity;
     state.totalAmount = parseFloat(
      (state.totalAmount + existingItem.totalPrice).toFixed(2)
     );
    } else {
     state.totalQuantity -= existingItem.quantity;
     state.totalAmount = parseFloat(
      (state.totalAmount - existingItem.totalPrice).toFixed(2)
     );
    }
   }
  },
  updateQuantity: (state, action) => {
   const { id, quantity } = action.payload;
   const existingItem = state.items.find((item) => item.id === id);
   if (existingItem) {
    const stockAvailable = existingItem.stock;
    if (quantity <= stockAvailable) {
     const oldQuantity = existingItem.quantity;
     const oldTotalPrice = existingItem.totalPrice;

     existingItem.quantity = quantity;
     existingItem.totalPrice =
      calculateDiscountedPrice(
       existingItem.price,
       existingItem.discountPercentage
      ) * quantity;

     if (existingItem.checked) {
      state.totalQuantity = state.totalQuantity - oldQuantity + quantity;
      state.totalAmount = parseFloat(
       (state.totalAmount - oldTotalPrice + existingItem.totalPrice).toFixed(2)
      );
     }
    }
   }
  },
 },
});

export const { setProducts, toggleCheck, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
