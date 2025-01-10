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
        <div class = 'whatever'>
          <img src = "https://github.com/camiacquarone/Captain-Shark/blob/main/src/app/images/image.png?raw=trues" />
          <h1 class = 'cap'>Captain Shark</h1>
        </div>
        
        <p>Your AI-powered financial education companion</p>
      </header>
      <nav>
        <button onClick={() => setActiveTab('quiz')} className={activeTab === 'quiz' ? 'active' : ''}>
          Captain Shark's Quiz
        </button>
        <button class = 'button' onClick={() => setActiveTab('chatbot')} className={activeTab === 'chatbot' ? 'active' : ''}>
          Captain Shark
        </button>
      </nav>
      <main>
        {activeTab === 'quiz' ? <QuizGenerator /> : <FinancialChatbot />}
      </main>
    <div class="ocean">
    <div class="bubble bubble--1"></div>
    <div class="bubble bubble--2"></div>
    <div class="bubble bubble--3"></div>
    <div class="bubble bubble--4"></div>
    <div class="bubble bubble--5"></div>
    <div class="bubble bubble--6"></div>
    <div class="bubble bubble--7"></div>
    <div class="bubble bubble--8"></div>
    <div class="bubble bubble--9"></div>
    <div class="bubble bubble--10"></div>
    <div class="bubble bubble--11"></div>
    <div class="bubble bubble--12"></div>
    <div id="octocat"></div>
</div>
    </div>
  );
  

}

export default App;
