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
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#2d3a3b' }}>Factorial of {number} is: {factorial}</h1>

            <button
                onClick={() => setNumber(number + 1)}
                style={{
                    padding: '10px 20px',
                    margin: '10px 0',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Increase Number
            </button>

            <div style={{ marginTop: '20px', borderTop: '2px solid #ccc', paddingTop: '20px' }}>
                <h3>Other UI Element</h3>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type something"
                    style={{
                        padding: '10px',
                        width: '100%',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
                <p>Input Value: {inputValue}</p>
            </div>

            <div style={{ marginTop: '30px', borderTop: '2px solid #ccc', paddingTop: '20px' }}>
                <h3>Console Logs</h3>
                <pre
                    style={{
                        backgroundColor: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '5px',
                        maxHeight: '200px',
                        overflowY: 'scroll',
                        fontFamily: 'Courier New, Courier, monospace',
                    }}
                >
                    {logMessages.join('\n')}
                </pre>
            </div>
        </div>
    );
};
