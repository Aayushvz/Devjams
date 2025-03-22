import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: "",
  cart: [],

  // cart: [
  //   {
  //     id: 12,
  //     ProductName: 'Mediterranean',
  //     Rate: 16,
  //     RentType: 'daily',
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    
    clearCart(state) {
      state.cart = [];
    },

    setUser(state, action) {
      state.user = action.payload;
    }
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
    setUser,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;



// 'reselect'
