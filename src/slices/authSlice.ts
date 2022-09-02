import { AnyAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthInitialState {
  isAuthenticated: boolean;
  user: string;
  error: string;
  loading: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: "",
    error: "",
    loading: false,
  },
  reducers: {
    authenticate: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    isLoading: (state) => {
      state.loading = true;
    },
    displayError: (state) => {
      state.isAuthenticated = false;
      state.error = "Datos incorrectos";
      state.loading = false;
    },
  },
});

export const { authenticate, displayError, isLoading } = authSlice.actions;

export default authSlice.reducer;
