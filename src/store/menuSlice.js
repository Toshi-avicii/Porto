import { createSlice } from '@reduxjs/toolkit';

const mobileMenuSlice = createSlice({
    name: 'menuSlice',
    initialState: {
        menuSidebar: false,
        shopSidebar: false,
        cartSidebar: false,
        wishlistSidebar: false
    },
    reducers: {
        openMenuSidebar(state) {
            state.menuSidebar = true;
        },

        closeMenuSidebar(state) {
            state.menuSidebar = false;
        },

        openCategoriesSidebar(state) {
            state.shopSidebar = true; 
        },

        closeCategoriesSidebar(state) {
            state.shopSidebar = false;
        }
    }
});

export const mobileMenuActions = mobileMenuSlice.actions;

export default mobileMenuSlice;