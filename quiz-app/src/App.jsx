import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Quiz from "./components/quiz/quiz.jsx";
import CreateQuiz from "./components/quiz/CreateQuiz.jsx";
import { data } from "./assets/data.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/attempt-quiz" element={<Quiz data={data} />} />
      </Routes>
    </Router>
  );
};

export default App;
