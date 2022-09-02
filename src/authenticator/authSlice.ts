import { AnyAction, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: "",
    error: "",
  },
  reducers: {
    authenticate: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    displayError: (state) => {
      state.isAuthenticated = false;
      state.error = "Datos incorrectos";
    },
  },
});

export const { authenticate, displayError } = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const authenticateAsync =
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (user: string, password: string) => (dispatch) => {
    setTimeout(() => {
      if (user === "admin" && password === "admin") {
        dispatch(authenticate("admin"));
      }
      dispatch(displayError());
    }, 1000);
  };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const selectIsAuthenticated = (state) => state.isAuthenticated;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const selectAuthenticatedUser = (state) => state.user;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const selectAuthenticationError = (state) => state.error;

export default authSlice.reducer;
