import React, { useState, useMemo } from 'react';

export const WithUseMemo = () => {
    const [number, setNumber] = useState(5);
    const [inputValue, setInputValue] = useState('');
    const [logMessages, setLogMessages] = useState([]);

    const factorial = useMemo(() => {
        const calculateFactorial = (n) => {
            const logMessage = `Calculating factorial of ${n}...`;
            setLogMessages((prevLogs) => [...prevLogs, logMessage]);  // Capture log message

            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i; 
            }
            return result;
        };
        console.time('Factorial Calculation Time');
        const result = calculateFactorial(number);
        console.timeEnd('Factorial Calculation Time');
        return result;
    }, [number]);

    return (
        <div className='min-h-screen' >
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
