// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import { isPangram } from './utils';

const App: React.FC = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState<boolean | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const checkPangram = () => {
        setResult(isPangram(text));
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pangram Checker</h1>
                <input type="text" value={text} onChange={handleChange} placeholder="Enter a sentence" />
                <button onClick={checkPangram}>Check</button>
                {result !== null && (
                    <p>{result ? 'The sentence is a pangram!' : 'The sentence is not a pangram.'}</p>
                )}
            </header>
        </div>
    );
};

export default App;
