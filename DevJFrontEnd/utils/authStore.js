import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        
    },
    reducers: {
        login(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
        storeID(state, action) {
            state.user = action.payload
        }
        
    },
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload);
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});



const store = configureStore({
    reducer: authSlice.reducer,
});


export const cartActions = cartSlice.actions;

export const authActions = authSlice.actions;

export default store;
