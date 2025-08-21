import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Condition 00");

    return (
        <div>
            <h1>Counter: {count}</h1>

            {
                count == 1 ? "Condition 01" :
                    count == 2 ? "Condition 02" :
                        count == 3 ? "Condition 03" :
                            count == 4 ? "Condition 04" :
                                count == 5 ? "Condition 05" :
                                    "Other Condition"
            }

            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default Counter;