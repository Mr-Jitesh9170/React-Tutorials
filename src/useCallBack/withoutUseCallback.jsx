
import React, { useState } from 'react';


export const WithoutUseCallBack = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>No useCallback</h2>
            <p>Count: {count}</p>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '10px',
                    width: '100%'
                }}
            />

            <Button handleClick={increment} label="Increment Count" />
        </div>
    );
};
 
const Button = React.memo(({ handleClick, label }) => {
    console.log(`Rendering button: ${label}`);
    return (
        <button
            onClick={handleClick}
            style={{
                padding: '10px 20px',
                margin: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                cursor: 'pointer'
            }}
        >
            {label}
        </button>
    );
});
