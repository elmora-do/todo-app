import React, { ReactElement } from "react";

export default function Login(): ReactElement {
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
          <button
            id="entrar"
            value="entrar"
            onClick={() => console.log("hola")}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
