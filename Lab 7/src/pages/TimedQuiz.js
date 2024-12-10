import React from 'react';
import my_state from './my_state';  // Assuming you have the global state for score tracking
import "../index.css";  // Import Tailwind CSS or your custom styles if needed

// Sample Questions
const my_questions = [
  {
    id: 1,
    question: "What is the capital of Connecticut?",
    answers: [
      { answer: "Stamford", isCorrect: false },
      { answer: "Storrs", isCorrect: false },
      { answer: "Hartford", isCorrect: true },
    ],
  },
  {
    id: 2,
    question: "What is the square root of 16?",
    answers: [
      { answer: "4", isCorrect: true },
      { answer: "8", isCorrect: false },
      { answer: "16", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What type of number is 101?",
    answers: [
      { answer: "prime", isCorrect: true },
      { answer: "composite", isCorrect: false },
      { answer: "neither", isCorrect: false },
      { answer: "both", isCorrect: false },
    ],
  },
];

class TimedQuiz extends React.Component {
  state = {
    score: 0,
    count: 0,
    timeLeft: 60,
    quizEnded: false,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }));
      } else {
        this.endQuiz();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
      count: prevState.count + 1,
    }));
    alert("You are correct!");
  };

  dontIncrementScore = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    alert("Sorry - not correct");
  };

  handleSubmit = () => {
    this.endQuiz();
  };

  endQuiz = () => {
    clearInterval(this.timer);
    this.setState({ quizEnded: true });
    my_state.my_score = this.state.score;
    my_state.my_count = this.state.count;
    alert("Total score: " + this.state.score + "/" + this.state.count);
  };

  render() {
    const { timeLeft, quizEnded } = this.state;

    if (quizEnded) {
      return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Ended</h1>
          <p className="text-xl text-gray-700 mb-2">Your score: {this.state.score} / {this.state.count}</p>
          <p className="text-lg text-gray-500">You attempted {this.state.count} questions.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 mt-4 transition"
          >
            Retry Quiz
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">{this.props.q_prop}</h1>
        <h2 className="text-xl font-semibold text-center mb-4">Time Left: {timeLeft} seconds</h2>

        <div className="space-y-6">
          {my_questions.map((quest) => (
            <div key={quest.id} className="space-y-4">
              <h3 className="text-xl font-medium">{quest.question}</h3>
              {quest.answers.map((ans, index) => (
                <div key={index} className="flex items-center mb-3">
                  <input
                    type="radio"
                    name={quest.id}
                    id={`question-${quest.id}-answer-${index}`}
                    className="mr-2"
                    onClick={() => ans.isCorrect ? this.incrementScore() : this.dontIncrementScore()}
                  />
                  <label
                    htmlFor={`question-${quest.id}-answer-${index}`}
                    className="text-lg"
                  >
                    {ans.answer}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={this.handleSubmit}
            className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default TimedQuiz;
    