import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/cart/cartslice';

const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
  
  export default store;
  