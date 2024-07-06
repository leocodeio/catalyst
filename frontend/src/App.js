// App.js
import "./App.css";
import React from "react";
import Start from "./screens/Start";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { UserState } from "./context/UserContext";
function App() {
  return (
    <BrowserRouter>
      <UserState>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserState>
    </BrowserRouter>
  );
}

export default App;
