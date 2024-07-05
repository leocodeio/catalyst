// App.js
import "./App.css"
import React from "react";
import Start from "./screens/Start";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
