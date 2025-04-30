import React, { useState, useCallback } from 'react';


export const WithUseCallBack = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">useCallback Demo</h2>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Type something:</label>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <p className="mt-2 text-sm text-gray-600">Input: {input}</p>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <p className="text-lg font-medium">Count: {count}</p>
                    <Button handleClick={increment} label="Increment" />
                </div>
            </div>
        </div>
    );
};


const Button = React.memo(({ handleClick, label }) => {
    console.log(`Rendering button: ${label}`);
    return (
        <button
            onClick={handleClick}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
            {label}
        </button>
    );
});
