import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        cartPrice: 0,
        totalItems: 0,

        wishlistItems: [],
        wishlistPrice: 0,
        totalWishlistItems: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingProduct = state.items.find(item => item.id === newItem.id);

            if(!existingProduct) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    description: newItem.description,
                    price: newItem.price,
                    orders: Number(newItem.quantity),
                    orderPrice: newItem.price * Number(newItem.quantity)
                })

                state.cartPrice = state.cartPrice + (Number(newItem.price) * Number(newItem.quantity));
                state.totalItems++;
                Math.round(Number(state.cartPrice));
            } 

            if(existingProduct) {
                existingProduct.orders = existingProduct.orders + Number(newItem.quantity);
                existingProduct.orderPrice = existingProduct.orderPrice + (Number(newItem.price) * Number(newItem.quantity));

                const newItemOrderPrice = newItem.price * newItem.quantity;

                state.cartPrice += newItemOrderPrice;

                Math.round(Number(state.cartPrice));
                Math.round(existingProduct.orderPrice);
            }
        },

        addToWishlist(state, action) {
            const newItem = action.payload;
            const existingProduct = state.wishlistItems.find(item => item.id === newItem.id);

            if(!existingProduct) {
                state.wishlistItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    description: newItem.description,
                    price: newItem.price,
                    orders: Number(newItem.quantity),
                    orderPrice: newItem.price * Number(newItem.quantity)
                })

                state.wishlistPrice = state.wishlistPrice + (Number(newItem.price) * Number(newItem.quantity));
                state.totalWishlistItems++;

                Math.round(state.wishlistPrice);
            } 
            if(existingProduct) {
                existingProduct.orders = existingProduct.orders + Number(newItem.quantity);
                existingProduct.orderPrice = existingProduct.orderPrice + (Number(newItem.price) * Number(newItem.quantity));

                const newItemOrderPrice = newItem.price * newItem.quantity;

                state.wishlistPrice += newItemOrderPrice;

                Math.round(Number(state.wishlisttPrice));
                Math.round(existingProduct.orderPrice);
            }
        },

        removeFromCart(state, action) {
            const newItem = action.payload;
            const restProducts = state.items.filter(item => {
                return item.id !== newItem.id
            })
            state.cartPrice = state.cartPrice - (newItem.orders * newItem.price);
            state.totalItems = state.totalItems - 1;
            Math.round(state.cartPrice);
            Math.round(state.totalItems);
            state.items = restProducts;
        },

        removeFromWishlist(state, action) {
            const newItem = action.payload;
            const restProducts = state.wishlistItems.filter(item => {
                return item.id !== newItem.id
            })
            state.wishlistPrice = state.wishlistPrice - (newItem.orders * newItem.price);
            state.totalWishlistItems = state.totalWishlistItems - 1;
            Math.round(state.wishlistPrice);
            Math.round(state.totalWishlistItems);
            state.wishlistItems = restProducts;
        },

        removeOneFromCart(state, action) {
            const newItem = action.payload;
            const existingProduct = state.items.find(item => item.id === newItem.id);

            existingProduct.orders = existingProduct.orders - 1;
            existingProduct.orderPrice = existingProduct.orderPrice - (Number(newItem.price) * 1);

            const newItemOrderPrice = newItem.price * 1;

            state.cartPrice -= newItemOrderPrice;

            Math.round(Number(state.cartPrice));
            Math.round(existingProduct.orderPrice);
        
        },

        removeOneFromWishlist(state, action) {
            const newItem = action.payload;
            const existingProduct = state.wishlistItems.find(item => item.id === newItem.id);

            existingProduct.orders = existingProduct.orders - 1;
            existingProduct.orderPrice = existingProduct.orderPrice - (Number(newItem.price) * 1);

            const newItemOrderPrice = newItem.price * 1;

            state.wishlistPrice -= newItemOrderPrice;

            Math.round(Number(state.wishlistPrice));
            Math.round(existingProduct.orderPrice);
        
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;