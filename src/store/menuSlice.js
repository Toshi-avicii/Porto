import { createSlice } from '@reduxjs/toolkit';

const mobileMenuSlice = createSlice({
    name: 'menuSlice',
    initialState: {
        menuSidebar: false,
        shopSidebar: false,
        cartSidebar: false,
        wishlistSidebar: false,
        searchDisplay: false
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
        },

        displaySearchResults(state, action) {
            if (action.payload === 'display') {
                state.searchDisplay = true;
            } 

            if(action.payload === 'not-display') {
                state.searchDisplay = false;
            }
        }
    }
});

export const mobileMenuActions = mobileMenuSlice.actions;

export default mobileMenuSlice;