import { useState } from "react";
import Time from './Time';

function Dropdown() {
    const [color, setColor] = useState("green");

    return (
        <div>
            <select onChange={(event) => setColor(event.target.value)}>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
            </select>
            <Time color={color} />
        </div>

    );

}

export default Dropdown;