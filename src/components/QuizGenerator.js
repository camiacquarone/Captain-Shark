// src/components/QuizGenerator.js
import React, { useState, useEffect } from 'react';
import { getOpenAIResponse } from '../openAiService';

const QuizGenerator = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    generateQuiz();
  }, []);

  const generateQuiz = async () => {
    setIsLoading(true);
    try {
      const prompt = `Generate a financial quiz with 5 multiple-choice questions. Each question should have 4 options (a, b, c, d) and indicate the correct answer. Cover topics like budgeting, investing, taxes, and credit. Format the response as a JSON array of objects, each containing 'question', 'options', and 'correctAnswer' fields.`;
      const response = await getOpenAIResponse(prompt);
      const parsedQuiz = JSON.parse(response);
      setQuiz(parsedQuiz);
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
    } catch (error) {
      console.error('Error generating quiz:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (isLoading) return <div>Generating quiz...</div>;
  if (!quiz) return <div>No quiz available. Please try again.</div>;

  return (
    <div className="quiz-container">
      <h2>Financial Quiz</h2>
      {!showResult ? (
        <div className="question-container">
          <h3>Question {currentQuestion + 1}</h3>
          <p>{quiz[currentQuestion].question}</p>
          <div className="answers">
            {quiz[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h3>Quiz Completed!</h3>
          <p>Your score: {score} out of {quiz.length}</p>
          <button onClick={generateQuiz}>Take Another Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;
