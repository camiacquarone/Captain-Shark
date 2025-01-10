"use client"
import React, { useState } from 'react';
import QuizGenerator from '../components/QuizGenerator';
import FinancialChatbot from '../components/FinancialChatbot';
import './App.css';
import './images.css';
import './images/background.css';

const logo = require("./images/image.png")
function App() {
  const [activeTab, setActiveTab] = useState('quiz');

  
  return (
    <div className="App">
      <header>
        <div className = 'whatever'>
          <img src = "https://github.com/camiacquarone/Captain-Shark/blob/main/src/app/images/image.png?raw=trues" />
          <h1 className = 'cap'>Captain Shark</h1>
        </div>
        
        <p>Your AI-powered financial education companion</p>
      </header>
      <nav>
        <button onClick={() => setActiveTab('quiz')} className={activeTab === 'quiz' ? 'active' : ''}>
          Captain Shark's Quiz
        </button>
        <button className = 'button' onClick={() => setActiveTab('chatbot')} className={activeTab === 'chatbot' ? 'active' : ''}>
          Captain Shark
        </button>
      </nav>
      <main>
        {activeTab === 'quiz' ? <QuizGenerator /> : <FinancialChatbot />}
      </main>
      /*
    <div className="ocean">
    <div id="octocat"></div>

</div>
    </div>
  );
  

}

export default App;
