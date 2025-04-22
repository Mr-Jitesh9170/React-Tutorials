import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const WithoutReactMemo = () => {
    const [count, setCount] = useState(0);

    const codeString = `
import { useState } from "react";

export const WithoutReactMemo = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <div>
                <span>State changes - {count}</span>
                <Child name="Without React-Memo" />
            </div>
        </>
    );
}

function Child({ name }) {
    console.log("Child re-rendered");
    return <div>{name}</div>;
}
`.trim();

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-6 bg-gradient-to-br from-red-100 to-orange-200 p-6">
            <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-xl space-y-4">
                <div className="flex justify-between items-center">
                    <b className="text-lg">State changes: {count}</b>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 font-semibold"
                    >
                        Click Me
                    </button>
                </div>
                <Child name="Without React-Memo, State changes and every time re-render happens!" />
            </div>
            <div className="bg-black text-white p-4 rounded-md w-full max-w-xl overflow-auto max-h-[500px]">
                <SyntaxHighlighter language="jsx" style={oneDark} wrapLines={true} wrapLongLines={true}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

function Child({ name }) {
    const consoleRef = useRef(null);
    console.log("✅ Child re-rendered");
    useEffect(() => {
        const originalLog = console.log;
        console.log = (...args) => {
            const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ');

            if (consoleRef.current) {
                const logLine = document.createElement('div');
                logLine.textContent = message;
                logLine.className = 'text-red-400';
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
                className="bg-black text-red-400 p-3 rounded-md h-40 overflow-y-auto font-mono text-sm"
            >
                <strong className="text-white block mb-1">Console Output:</strong>
            </div>
        </div>
    );
}
