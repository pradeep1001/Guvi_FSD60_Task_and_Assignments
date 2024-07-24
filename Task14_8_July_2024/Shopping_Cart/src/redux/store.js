import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'

 //  Store for state management
const store = configureStore({
    reducer: {
        cart: cartReducer   //  Cart state    
    }
});

export default store;
