    import React from 'react';

    const Questions = () => {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center items-center">


    <div className="bg-white shadow-lg rounded-lg w-80">
    <div className="px-4 py-2">
    <h2 className="text-gray-800 text-xl font-bold">What is the difference between props and state in React development?</h2>
    </div>
    <div className="px-4 py-2">
    <p className="text-gray-600 text-sm">In React development, props and state are both used to manage data. However, props are used to pass data from parent components to child components, while state is used to manage data within a single component. Additionally, props are read-only, meaning they cannot be modified within a component, while state can be changed using the setState method.</p>
    </div>
    </div>


    <div className="bg-white shadow-lg rounded-lg w-80">
    <div className="px-4 py-2">
    <h2 className="text-gray-800 text-xl font-bold">How does the useState hook work in React?</h2>
    </div>
    <div className="px-4 py-2">
    <p className="text-gray-600 text-sm">The useState hook is a built-in function in React that allows you to add state to functional components. It works by accepting an initial state value as a parameter and returning an array that contains the current state value and a function to update the state. The function returned by the useState hook is used to modify the state value and trigger a re-render of the component.</p>
    </div>
    </div>


    <div className="bg-white shadow-lg rounded-lg w-80">
    <div className="px-4 py-2">
    <h2 className="text-gray-800 text-xl font-bold">What are the additional use cases for the useEffect hook in React?</h2>
    </div>
    <div className="px-4 py-2">
    <p className="text-gray-600 text-sm">Besides data retrieval, the useEffect hook in React can be used for a variety of other use cases, such as DOM manipulation, event handling, and managing component lifecycle methods. For example, you can use the useEffect hook to listen for changes in a component's props or state, or to perform cleanup operations before a component unmounts.</p>
    </div>
    </div>


    <div className="bg-white shadow-lg rounded-lg w-80">
    <div className="px-4 py-2">
    <h2 className="text-gray-800 text-xl font-bold">How does React actually work behind the scenes?</h2>
    </div>
    <div className="px-4 py-2">
    <p className="text-gray-600 text-sm">React creates a virtual UI representation, updates the actual DOM only when needed. On a state/props change, React re-renders the component, compares the new and previous virtual UI representations, updates only the parts of the DOM that have changed. React uses a unidirectional data flow, making it easy to manage state and data in large applications.</p>
    </div>
    </div>

    </div>
    );
    };

    export default Questions;