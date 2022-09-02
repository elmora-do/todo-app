import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import List from "./components/TodoList/TodoList";

export default function App(): ReactElement {
  return (
    <div className="App">
      <Title />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          {/* <Route path="/new" element={<New />} />
          <Route path="/details" element={<Details />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

function Title() {
  return <h1>TODO List 2</h1>;
}

function NotFound() {
  return <h1>Elemento no encontrado</h1>;
}
