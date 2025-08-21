import { useEffect, useState } from "react";
import Subtract from "./Subtract";

function College() {

    const [value, setValue] = useState(0);
    const [multiple, setMultiple] = useState(2);
    const [subtract, setSubtract] = useState(0);

    function test() {
        console.log("I am in useEffect.");
    }

    useEffect(
        () => {
            test();
        },
        [multiple]
    );

    const button = {
        color: 'white',
        backgroundColor: 'grey',
        borderColor: '1px solid grey'
    }

   

    return (
        <div>
            <p>Add: {value}</p>
            <p>Multiple: {multiple}</p>

            <button style={button} onClick={() => { setValue(value + 1) }}>Add</button>
            &nbsp; <button style={button} onClick={() => { setMultiple(multiple * 2) }}>Multiple</button>
            &nbsp; <button style={button} onClick={() => setSubtract(subtract - 1)}>Subtract</button>

            <Subtract value={subtract} />

        </div>
    );

}


export default College;