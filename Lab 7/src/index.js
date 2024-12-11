
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import HeaderData from "./data/HeaderData";

import './index.css';
import NewPage from './pages/NewPage';
import TimedQuiz from './pages/TimedQuiz';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {

  const header_data = new HeaderData();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Quiz" element={<Quiz q_prop={"Hello"} />} />
          <Route path="Score" element={<Score s_prop={"Score"} />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Newpage" element={<NewPage />} />
          <Route path="TimedQuiz" element={<TimedQuiz />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
