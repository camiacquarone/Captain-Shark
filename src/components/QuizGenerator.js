// src/components/QuizGenerator.js
import React, { useState, useEffect } from 'react';
import { getOpenAIResponse } from '../openAiService';

const QuizGenerator = () => {
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    generateQuiz();
  }, []);

  const generateQuestion = async (topic) => {
    const prompt = `Generate a financial quiz question on the topic of ${topic}. Format the response as a JSON object with the following structure: {"question": "The question text", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "correctAnswer": "The correct option (a, b, c, or d)"}. Ensure the JSON is properly formatted. Do not start with $'''json`;
    
    try {
      const response = await getOpenAIResponse(prompt);
      console.log(`Raw API response for ${topic}:`, response);
      return JSON.parse(response);
    } catch (error) {
      console.error(`Error generating question for ${topic}:`, error);
      return null;
    }
  };

  const generateQuiz = async () => {
    setIsLoading(true);
    const topics = ["budgeting", "investing", "taxes", "credit", "saving"];
    const newQuiz = [];

    for (const topic of topics) {
      const question = await generateQuestion(topic);
      if (question) {
        newQuiz.push(question);
      }
    }

    setQuiz(newQuiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setIsLoading(false);
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
  if (quiz.length === 0) return <div>No quiz available. Please try again.</div>;

  return (
    <div className="quiz-container">
      <h2>Financial Quiz</h2>
      {!showResult ? (
        <div className="question-container">
          <h3>Question {currentQuestion + 1}</h3>
          <p>{quiz[currentQuestion].question}</p>
          <div className="answers">
            {quiz[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option.charAt(0))}>
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
