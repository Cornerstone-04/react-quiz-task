import React from "react";
import quiz from "../quiz.json";
import { useParams, useLocation } from "react-router-dom";
import "../styles/quiz.css";

const Quiz = () => {
  const location = useLocation();
  const {id} = useParams()

  console.log(location, id);

  return (
    <div className="quiz">
      {quiz &&
        quiz.map((item) => (
          <div key={id}>
            <p className="tag">
              <span>{item.id}. </span>
              {item.question}
            </p>
            <ul className="options">
              <li>
                <span>a.</span> <button>{item.choices.a}</button>
              </li>
              <li>
                <span>b.</span> <button>{item.choices.b}</button>
              </li>
              <li>
                <span>c.</span> <button>{item.choices.c}</button>
              </li>
              <li>
                <span>d.</span> <button>{item.choices.d}</button>
              </li>
            </ul>
            <button className="start">Next</button>
          </div>
        ))}
    </div>
  );
};

export default Quiz;
