import React from 'react';
import { Link, Outlet } from "react-router-dom";

import '../index.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="w-full mt-4 flex justify-center h-auto bg-gray-100">
                    <div className="w-5/6 md:w-[80%] lg:w-[60%] bg-white rounded-xl shadow-lg p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-3">Welcome to the Home Page</h1>
                        <nav className="flex flex-row justify-center mb-3">
                            <Link
                                to="/Quiz"
                                className="block text-lg font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 py-2 px-4 rounded transition"
                            >
                                Quiz
                            </Link>
                            <Link
                                to="/Score"
                                className="block text-lg font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 py-2 px-4 rounded transition"
                            >
                                Score
                            </Link>
                            <Link
                                to="/Contact"
                                className="block text-lg font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 py-2 px-4 rounded transition"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/TabExample"
                                className="block text-lg font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 py-2 px-4 rounded transition"
                            >
                                Tab Example
                            </Link>
                            <Link
                                to="/Newpage"
                                className="block text-lg font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 py-2 px-4 rounded transition"
                            >
                                New Page
                            </Link>
                            <Link
                                to="/TimedQuiz"
                                className="block text-lg font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 py-2 px-4 rounded transition"
                            >
                                Timed Quiz
                            </Link>
                        </nav>
                        <Outlet />
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
