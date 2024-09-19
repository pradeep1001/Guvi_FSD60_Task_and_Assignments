import { configureStore } from '@reduxjs/toolkit';
import productsData from './Data/products.json';
import cartReducer,{setProducts} from './Redux Toolkit/cartSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
store.dispatch(setProducts(productsData.products));
