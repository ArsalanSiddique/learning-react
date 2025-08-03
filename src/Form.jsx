import { useState } from "react";

function Form() {

    const [name, setName] = useState("");

    return (
        <div>
            <h1>Form</h1>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
            <h2>{name}</h2>

            <button onClick={() => setName("")}>Clear Form</button>
        </div>
    );

}

export default Form;