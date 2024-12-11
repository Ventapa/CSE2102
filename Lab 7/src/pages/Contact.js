import React from 'react';
import "../index.css";  // Import your custom styles if needed
import MyComponent from './MyComponent';

class Contact extends React.Component {
  
    greeting(name) {
        alert(`Greeting ${name}`);
    }

    hello(name) {
        alert(`Hello ${name}`);
    }

    render() {
        return (
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-4 underline">
                    Greetings!
                </h1>

                <div className="text-center mb-6">
                    <p className="text-lg text-gray-700 mb-4">We are excited to have you here! Feel free to say hello.</p>
                    <button
                        onClick={() => this.greeting('CSE 2102 Class')}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                    >
                        Say Hello
                    </button>
                </div>

                <MyComponent />

                <div className="text-center mt-6 text-gray-500">
                    <p>Thanks for visiting our Contact Page.</p>
                </div>
            </div>
        );
    }
}

export default Contact;
