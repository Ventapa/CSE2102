import React from 'react';
import { Link, Outlet } from "react-router-dom";
import my_state from './my_state';

class Score extends React.Component {
  render() {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Score Page</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">{this.props.s_prop}</h2>

        <div className="text-center">
          <h3 className="text-xl font-medium text-gray-600">
            Your score so far is: 
            <span className="text-2xl font-semibold text-green-600">
              {my_state.my_score} / {my_state.my_count}
            </span>
          </h3>
        </div>

        <div className="mt-6 text-center">
          <Link
            to='/Quiz'
            className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
            
          >
            Go Back to Quiz
          </Link>
        </div>
      </div>
    );
  }
}

export default Score;
