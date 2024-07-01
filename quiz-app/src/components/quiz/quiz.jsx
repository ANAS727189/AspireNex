import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import logo from "../quiz_app.webp"; 
import "./quiz.css";

const getRandomQuestions = (data, num) => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num).map((question) => ({
    ...question,
    options: [question.option1, question.option2, question.option3, question.option4],
  }));
};

const Quiz = ({ data }) => {
  const location = useLocation();
  const [questions, setQuestions] = useState(location.state?.questions || getRandomQuestions(data, 10));
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [onHomePage, setOnHomePage] = useState(true);

  const optionRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    if (!location.state?.questions) {
      setQuestions(getRandomQuestions(data, 10));
    }
  }, [data, location.state]);

  const checkAns = (e, ans) => {
    setSelectedAnswer(ans);
    setCorrectAnswer(questions[index].answer);

    if (questions[index].answer === ans) {
      e.target.classList.add("right");
      setScore((prevScore) => prevScore + 1);
    } else {
      e.target.classList.add("wrong");
    }
    optionRefs.current[questions[index].answer - 1].current.classList.add("right");
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCorrectAnswer(null);

    if (index >= questions.length - 1) {
      setShowResult(true);
      return;
    }

    setIndex((prevIndex) => prevIndex + 1);
    optionRefs.current.forEach((ref) => {
      ref.current.classList.remove("right", "wrong");
    });

    const form = document.querySelector(".form-quiz");
    if (form) {
      const inputs = form.querySelectorAll('input[type="radio"]');
      inputs.forEach((input) => (input.checked = false));
    }
  };

  const retryQuiz = () => {
    setQuestions(getRandomQuestions(data, 10));
    setIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setScore(0);
    setShowResult(false);
    setOnHomePage(true);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const question = questions[index];

  return (
    <div className="container">
      {onHomePage ? (
        <div className="home-page">
           <img src={logo} alt="QuizWizz Logo" className="logo" />
          <h1>Welcome to <span style={{fontSize: 75}}>Q</span>uizWizz 🧠</h1>
          <p style={{color: "black", fontSize: "15px"}}>Your ultimate quiz creation and attempt platform.</p>
          <button className="button-quiz" onClick={() => setOnHomePage(false)}>
            Attempt Quiz
          </button>
          <button className="button-quiz" onClick={() =>window.location.href = "/create-quiz"}>
            Create Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-page">
          <div className="top-nav">
            <h1><span style={{fontSize: 75}}>Q</span>uizWizz</h1>
            <p style={{ color: "black", padding: "10px 0", fontSize: 20 }}>
              {index + 1} / {questions.length}
            </p>
          </div>

          <div className="card-quiz">
            {showResult ? (
              <div className="result">
                <h2>Congratulations!</h2>
                <p>You scored {score} out of {questions.length} points.</p>
                <div className="meter">
                  <span style={{ width: `${(score / questions.length) * 100}%` }}></span>
                </div>
                <button className="button-quiz" onClick={retryQuiz}>
                  Retry
                </button>
              </div>
            ) : (
              <>
                <div className="ques">
                  <h3>
                    {index + 1}. {question.question}
                  </h3>
                </div>
                <p style={{ color: "grey", padding: "10px 10px" }}>Select the Correct Answer</p>
                <form className="form-quiz">
                  {question.options.map((opt, i) => (
                    <label
                      className={`label-quiz ${
                        selectedAnswer === i + 1 && correctAnswer !== null
                          ? correctAnswer === i + 1
                            ? "right"
                            : "wrong"
                          : ""
                      }`}
                      key={opt}
                      ref={optionRefs.current[i]}
                    >
                      <input
                        onClick={(e) => {
                          checkAns(e, i + 1);
                        }}
                        type="radio"
                        name="question"
                        value={opt}
                        disabled={selectedAnswer !== null}
                      />
                      {opt}
                    </label>
                  ))}
                </form>
              </>
            )}
          </div>

          {!showResult && (
            <button
              className="button-quiz"
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
            >
              {index >= questions.length - 1 ? "Finish" : "Next"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
