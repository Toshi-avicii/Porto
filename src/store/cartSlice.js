import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        cartPrice: 0,
        totalItems: 0
    },
    reducers: {
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;