import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz.css";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: 1 },
  ]);

  const handleChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === "question") {
      newQuestions[index].question = value;
    } else if (field.startsWith("option")) {
      const optionIndex = parseInt(field.split("option")[1]) - 1;
      newQuestions[index].options[optionIndex] = value;
    } else if (field === "answer") {
      newQuestions[index].answer = parseInt(value);
    }
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], answer: 1 },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/attempt-quiz", { state: { questions } });
  };

  return (
    <div className="container">
      <div className="create-quiz-nav">
      <h1>Create Your Own Quiz</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} className="card-quiz">
            <div className="ques">
              <input
                type="text"
                placeholder="Enter question"
                value={q.question}
                onChange={(e) => handleChange(index, "question", e.target.value)}
              />
            </div>
            <p style={{color: "grey", padding: "5px 0 5px 5px", fontSize: "15px"}}>Enter the options : </p>
            {q.options.map((opt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Option ${i + 1}`}
                value={opt}
                onChange={(e) =>
                  handleChange(index, `option${i + 1}`, e.target.value)
                }
              />
            ))}
            <select
              value={q.answer}
              onChange={(e) => handleChange(index, "answer", e.target.value)}
            >
              {q.options.map((_, i) => (
                <option key={i} value={i + 1}>
                  Option {i + 1}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="button" className="button-quiz" onClick={addQuestion}>
            Add Question
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" className="button-quiz">
            Save Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
