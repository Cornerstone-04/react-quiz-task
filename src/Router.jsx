import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";

const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
