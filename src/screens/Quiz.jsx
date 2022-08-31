import React from "react";
import quiz from "../quiz.json";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../styles/quiz.css";

const Quiz = (props) => {
  const location = useLocation();
  let { id } = useParams();
  const navigate = useNavigate();
  const selectedQuiz = quiz[id - 1];
  const [selectedAns, setSelectedAns] = React.useState([]);
  const [score, setScore] = React.useState(0);

  console.log(location, id, selectedQuiz.answer);

  // const getScore = () => {
  //   if (selectedQuiz) {
  //     setScore((prev) => prev + 1);
  //   }
  // };

  const handleClick = (e) => {
    // setSelectedAns(e.currentTarget.innerText);
    const ans = e?.currentTarget.innerText;
    const correctAns = selectedQuiz.answer === ans;
    if (correctAns) {
      setScore((prev) => prev + 1);
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

  return (
    <div className="quiz">
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
            if (id < 5) {
              navigate(`/quiz-test/${++id}`);
            }

            handleClick();
            if (id === 5) {
              console.log("/Hello");
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
