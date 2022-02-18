import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { Fragment } from "react";
import Home from "./components/Home/Home";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
