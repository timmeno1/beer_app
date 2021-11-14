import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";

export const MyRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  </Router>
)