import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import List from "./components/List";
import New from "./components/New";
import Details from "./components/Details";

export default function App(): ReactElement {
  return (
    <div className="App">
      <Router>
        <Title />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/new" element={<New />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

function Title() {
  return <h1>TODO List</h1>;
}
