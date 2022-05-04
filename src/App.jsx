import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

function App() {
  <div className="app">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Shop />} />
      <Route path="/about" element={<Contact />} />
    </Routes>
  </div>;
}

export default App;
