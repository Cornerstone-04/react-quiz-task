import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/results.css";

const Results = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const score = localStorage.getItem("score");
  const name = localStorage.getItem("fullName");

  return (
    <div className="result">
      <h1>Hi {name}</h1>
      <p>Your score is {score} out of 5</p>
      <button className="start" onClick={handleNavigate}>
        Restart
      </button>
    </div>
  );
};

export default Results;
