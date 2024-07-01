import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./quiz_app.webp"; 
import "./homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <img src={logo} alt="QuizWizz Logo" className="logo" />
      <h1>Welcome to QuizWizz</h1>
      <p>Your ultimate quiz creation and attempt platform.</p>
      <div className="button-group">
        <button className="homepage-button" onClick={() => navigate("/create-quiz")}>
          Create Your Own Quiz
        </button>
        <button className="homepage-button" onClick={() => navigate("/attempt-quiz")}>
          Attempt a Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
