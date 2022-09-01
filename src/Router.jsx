import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";

const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-test/:id" element={<Quiz />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
