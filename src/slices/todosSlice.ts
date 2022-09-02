import { AnyAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  todos: any[];
  error: string;
  loading: boolean;
}

const initialState: InitialState = {
  todos: [],
  error: "",
  loading: false,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.loading = true;
      state.todos = [action.payload, ...state.todos];
      state.loading = false;
    },
    displayError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addTodo, displayError } = todosSlice.actions;

export default todosSlice.reducer;
