import { configureStore } from '@reduxjs/toolkit';

// Create placeholder reducers until the actual slices are implemented
const authReducer = (state = { user: null, session: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_SESSION':
      return { ...state, session: action.payload };
    default:
      return state;
  }
};

const productReducer = (state = { products: [], selectedProduct: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store; 