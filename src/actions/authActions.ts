/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { authenticate, displayError, isLoading } from "../slices/authSlice";

// code can then be executed and other actions can be dispatched
export const authenticateAsync =
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (user: string, password: string) => (dispatch) => {
    dispatch(isLoading());
    setTimeout(() => {
      if (user === "admin" && password === "admin") {
        dispatch(authenticate("admin"));
      }
      dispatch(displayError());
    }, 2000);
  };
