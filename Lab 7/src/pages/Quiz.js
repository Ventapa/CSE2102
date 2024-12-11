import React from 'react';
import my_state from './my_state';

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

class Quiz extends React.Component {
  state = {
    score: 0,
    count: 0,
    selectedAnswers: {}, 
    feedback: "", 
  };

  handleAnswerChange = (questionId, isCorrect) => {
    this.setState((prevState) => {
      const selectedAnswers = { ...prevState.selectedAnswers, [questionId]: isCorrect };
      const updatedScore = isCorrect ? prevState.score + 1 : prevState.score; 
      const updatedCount = prevState.count + 1; 

      return {
        selectedAnswers,
        score: updatedScore,
        count: updatedCount,
        feedback: isCorrect ? "Correct!" : "Sorry, not correct.",
      };
    });
  };

  handleSubmit = () => {
    const { score, count } = this.state;

    // Store the score and count in the global state
    my_state.my_score = score;
    my_state.my_count = count;

    // Display the final score
    alert(`Your total score is: ${score} / ${count}`);
  };

  render() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-3">{this.props.q_prop} this is a Quiz</h1>

        {my_questions.map((quest) => (
          <div key={quest.id} className="mb-6">
            <h3 className="text-xl font-medium mb-2">{quest.question}</h3>
            {quest.answers.map((ans, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`question-${quest.id}-answer-${index}`}
                  name={`question-${quest.id}`}
                  onClick={() => this.handleAnswerChange(quest.id, ans.isCorrect)}
                  value={ans.answer}
                  className="mr-2"
                />
                <label htmlFor={`question-${quest.id}-answer-${index}`} className="text-lg">
                  {ans.answer}
                </label>
              </div>
            ))}
          </div>
        ))}

        {this.state.feedback && (
          <p className={`text-xl font-semibold mt-4 ${this.state.feedback === "Correct!" ? 'text-green-500' : 'text-red-500'}`}>
            {this.state.feedback}
          </p>
        )}

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

export default Quiz;
