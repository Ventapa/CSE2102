// import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewPage from './pages/NewPage.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
            <Routes>
                <Route path="/" element={<Quiz />} />
                <Route path="/newpage" element={<NewPage />} />
            </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
