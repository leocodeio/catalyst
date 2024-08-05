// App.js
import "./App.css";
import React from "react";
import Start from "./screens/Start";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { UserState } from "./context/UserContext";
const App = () => {
  return (
    <HashRouter>
      <UserState>
        <Routes>
          <Route path="/start" element={<Start />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserState>
    </HashRouter>
  );
};

export default App;
