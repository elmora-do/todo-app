import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import todosReducer from "../slices/todosSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});
