import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log('item added', action.payload.title);
            state.items.push(action.payload);    //  Push item in cart   
        },
        removeItem: (state, action) => {
            console.log('item removed', action.payload.title);
            state.items = state.items.filter(item => item.id !== action.payload);   //  Remove items from cart   
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
