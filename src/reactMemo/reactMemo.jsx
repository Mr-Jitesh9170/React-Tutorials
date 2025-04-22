import React, { memo, useEffect, useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ReactMemo = () => {
    const [count, setCount] = useState(0);

    const codeString = `
import React, { memo, useEffect, useRef, useState } from 'react';

export const ReactMemo = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
                <b>State changes: {count}</b>
                <button onClick={() => setCount(count + 1)}>Click Me</button>
            </div>
            <Child name={"With React-Memo, State changes but no re-render happens!"} />
        </div>
    );
};

const Child = memo(function Child({ name }) {
    const consoleRef = useRef(null);
    console.log("👶 Child rendered");

    useEffect(() => {
        const originalLog = console.log;
        console.log = (...args) => {
            const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ');
            if (consoleRef.current) {
                const logLine = document.createElement('div');
                logLine.textContent = message;
                consoleRef.current.appendChild(logLine);
                consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
            }
            originalLog(...args);
        };
        return () => { console.log = originalLog };
    }, []);

    return (
        <div>
            <div>{name}</div>
            <div ref={consoleRef}>Console Output:</div>
        </div>
    );
});
`.trim();

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-6 bg-gradient-to-br from-yellow-200 to-yellow-400 p-6">
            {/* UI Card */}
            <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-xl space-y-4">
                <div className="flex justify-between items-center">
                    <b className="text-lg">State changes: {count}</b>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 font-semibold"
                    >
                        Click Me
                    </button>
                </div>
                <Child name={`With React-Memo, State changes but no re-render happens!`} />
            </div>

            {/* Code Viewer */}
            <div className="bg-black text-white p-4 rounded-md w-full max-w-xl overflow-auto max-h-[500px]">
                <SyntaxHighlighter language="jsx" style={oneDark} wrapLines wrapLongLines>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

const Child = memo(function Child({ name }) {
    const consoleRef = useRef(null);
    console.log("👶 Child rendered");

    useEffect(() => {
        const originalLog = console.log;
        console.log = (...args) => {
            const message = args.map(arg =>
                typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
            ).join(' ');

            if (consoleRef.current) {
                const logLine = document.createElement('div');
                logLine.textContent = message;
                logLine.className = 'text-green-400';
                consoleRef.current.appendChild(logLine);
                consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
            }

            originalLog(...args);
        };

        return () => {
            console.log = originalLog;
        };
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <div className="text-gray-700 font-medium">{name}</div>
            <div
                ref={consoleRef}
                className="bg-black text-green-400 p-3 rounded-md h-40 overflow-y-auto font-mono text-sm"
            >
                <strong className="text-white block mb-1">Console Output:</strong>
            </div>
        </div>
    );
});
