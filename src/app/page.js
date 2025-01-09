"use client"
import React, { useState } from 'react';
import QuizGenerator from '../components/QuizGenerator';
import FinancialChatbot from '../components/FinancialChatbot';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('quiz');

  return (
    <div className="App">
      <header>
        <h1>Captain Shark</h1>
        <p>Your AI-powered financial education companion</p>
      </header>
      <nav>
        <button onClick={() => setActiveTab('quiz')} className={activeTab === 'quiz' ? 'active' : ''}>
          Financial Quiz
        </button>
        <button onClick={() => setActiveTab('chatbot')} className={activeTab === 'chatbot' ? 'active' : ''}>
          Financial Assistant
        </button>
      </nav>
      <main>
        {activeTab === 'quiz' ? <QuizGenerator /> : <FinancialChatbot />}
      </main>
    </div>
  );
}

export default App;
