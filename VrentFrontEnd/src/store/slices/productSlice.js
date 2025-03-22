import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearProducts: (state) => {
      state.products = [];
      state.selectedProduct = null;
      state.error = null;
    },
  },
});

export const { setProducts, setSelectedProduct, setLoading, setError, clearProducts } = productSlice.actions;
export default productSlice.reducer; 