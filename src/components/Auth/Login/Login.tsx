import React, { ReactElement, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateAsync } from "../../../actions/authActions";
import { IAuthInitialState } from "../../../slices/authSlice";

export default function Login(): ReactElement {
  const [formValues, setFormValues] = useState({ usuario: "", password: "" });
  const dispatch = useDispatch();

  const { isAuthenticated, user, loading, error } = useSelector((state) => ({
    ...state.auth,
  }));

  const handleLogin = () =>
    dispatch(authenticateAsync(formValues.usuario, formValues.password));

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="Form">
        <div>
          <label id="usuario">Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={formValues.usuario}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label id="clave">Clave:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <button id="entrar" value="entrar" onClick={handleLogin}>
            {loading ? "Cargando..." : "Login"}
          </button>
          {error !== "" && <label>Credenciales incorrectas</label>}
        </div>
      </div>
    </div>
  );
}
