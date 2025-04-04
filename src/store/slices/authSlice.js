import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  session: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.session = null;
      state.error = null;
    },
  },
});

export const { setUser, setSession, setLoading, setError, clearAuth } = authSlice.actions;
export default authSlice.reducer; 