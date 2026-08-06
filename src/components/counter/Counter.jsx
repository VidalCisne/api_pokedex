import { useState } from 'react';

export const Counter = ()=>{
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter">
            <span className="counter-value">{counter}</span>
            <button
                className="counter-button"
                onClick={() => setCounter((current) => current + 1)}
            >+</button>
        </div>
    );
}

