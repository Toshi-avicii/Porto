import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import mobileMenuSlice from './menuSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        mobileMenu: mobileMenuSlice.reducer,
        cart: cartSlice.reducer,
        auth: authReducer
    }
});

export default store;