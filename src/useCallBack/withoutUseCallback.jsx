
import React, { useState } from 'react';


export const WithoutUseCallBack = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div  >
            <h2>No useCallback</h2>
            <p>Count: {count}</p>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
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
        >
            {label}
        </button>
    );
});
