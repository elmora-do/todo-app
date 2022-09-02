import React, { ReactElement, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateAsync, selectIsAuthenticated } from "./authSlice";

export default function Login(): ReactElement {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  useState(false);

  function login() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(authenticateAsync("", ""));
  }

  return (
    <div>
      <h2>Login</h2>
      <div className="Form">
        <div>
          <label id="usuario">Usuario:</label>
          <input type="text" />
        </div>
        <div>
          <label id="clave">Clave:</label>
          <input type="password" />
        </div>
        <div>
          <button id="entrar" value="entrar" onClick={login}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
