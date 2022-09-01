import React from "react";
import quiz from "../quiz.json";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../styles/quiz.css";

const Quiz = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const selectedQuiz = quiz[id - 1];

  const [selectedAns, setSelectedAns] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [minute, setMinute] = React.useState(0);

  const handleClick = (e) => {
    const ans = e?.currentTarget.innerText;
    const correctAns = selectedQuiz.answer === ans;
    if (correctAns) {
      setScore((prev) => prev + 1);
      localStorage.setItem("score", JSON.stringify(score));
      let store = JSON.parse(localStorage.getItem("stor")) || [];
      store.push(score);
      localStorage.setItem("store", JSON.stringify(store));
    }
    const ansObj = { ans, correctAns };
    setSelectedAns((prev) => [...prev, ansObj]);
    console.log(correctAns, ans);
  };

  let select = document.querySelectorAll(".select");

  select.forEach((option, i) => {
    option.addEventListener("click", () => {
      removeActiveClass();
      select[i].classList.add("active");
    });
  });

  const removeActiveClass = () => {
    select.forEach((option) => {
      option.classList.remove("active");
    });
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinute(minute + 1);
        setSeconds(0);
      }
      if (seconds === 30 && minute === 1) {
        navigate("/result");
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="quiz">
      <h1>
        {minute}:{seconds}
      </h1>
      <div key={id}>
        <p className="tag">
          <span>{selectedQuiz.id}. </span>
          {selectedQuiz.question}
        </p>
        <ul className="options">
          <li>
            <span>a.</span>{" "}
            <button className="select" onClick={handleClick}>
              {selectedQuiz.choices.a}
            </button>
          </li>
          <li>
            <span>b.</span>{" "}
            <button className="select" onClick={handleClick}>
              {selectedQuiz.choices.b}
            </button>
          </li>
          <li>
            <span>c.</span>{" "}
            <button className="select" onClick={handleClick}>
              {selectedQuiz.choices.c}
            </button>
          </li>
          <li>
            <span>d.</span>{" "}
            <button className="select" onClick={handleClick}>
              {selectedQuiz.choices.d}
            </button>
          </li>
        </ul>
        <button
          className="start"
          onClick={() => {
            handleClick();
            console.log("id", typeof id);
            if (id === "5") {
              navigate("/result");
            }
            if (id < 5) {
              navigate(`/quiz-test/${++id}`);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
