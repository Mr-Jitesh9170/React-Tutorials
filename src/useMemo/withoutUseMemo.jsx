import React, { useState, useEffect } from 'react';

export const WithoutUseMemo = () => {
    const [number, setNumber] = useState(5);
    const [factorial, setFactorial] = useState(1);
    const [logMessages, setLogMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const calculateFactorial = (n) => {
            const logMessage = `Calculating factorial of ${n}...`;
            setLogMessages((prevLogs) => [...prevLogs, logMessage]);

            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        };

        console.time('Factorial Calculation Time');
        const result = calculateFactorial(number);
        setFactorial(result);
        console.timeEnd('Factorial Calculation Time');
    }, [number]);

    return (
        <div  >
            <h1  >Factorial of {number} is: {factorial}</h1>

            <button
                onClick={() => setNumber(number + 1)} 
            >
                Increase Number
            </button>

            <div  >
                <h3>Other UI Element</h3>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type something" 
                />
                <p>Input Value: {inputValue}</p>
            </div>

            <div  >
                <h3>Console Logs</h3>
                <pre
                   
                >
                    {logMessages.join('\n')}
                </pre>
            </div>
        </div>
    );
};
