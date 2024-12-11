import React from 'react';
import quizPageStyle from '../QuizPageStyle';

import my_state from './my_state';
import my_questions from '../model/basic_questions.json';
import ScoreController from '../controllers/ScoreController';

class Quiz extends React.Component {
    handleSubmit = () => {
        const { score, count } = ScoreController.getScore();
        my_state.my_score = score;
        my_state.my_count = count;

        alert("Total score: " + score + "/" + count);
    };

    render() {
        return (
            <div style={quizPageStyle}>
                <h1>My Questions</h1>
                {my_questions.map((quest) => (
                    <div key={quest["id"]}>
                        <h2>{quest["question"]}</h2>
                        {quest["answers"].map((ans, index) => (
                            <div key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name={quest["id"]}
                                        onClick={
                                            ans["isCorrect"]
                                                ? ScoreController.incrementScore.bind(ScoreController)
                                                : ScoreController.dontIncrementScore.bind(ScoreController)
                                        }
                                        value={ans["isCorrect"]}
                                    />
                                    {ans["answer"]}
                                </label>
                                <br />
                            </div>
                        ))}
                    </div>
                ))}
                <br />
                <button onClick={this.handleSubmit}>Done</button>
            </div>
        );
    }
}

export default Quiz;
