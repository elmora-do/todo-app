import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authenticator/authSlice";

export default configureStore({
  reducer: {
    authenticator: authReducer,
  },
});
