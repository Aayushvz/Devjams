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
        checkAuth(state) {
            if (localStorage.getItem("user")) {
                state.user = JSON.parse(localStorage.getItem("user"));
            }
        }
    },
});


const store = configureStore({
    reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;
export default store;
