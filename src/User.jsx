import { useState } from "react";

function User({ user }) {
    const [show, setShow] = useState(1);

    return (
        <div>
            <button onClick={() => { setShow(!show) }}>Toggle</button>
            {
                show ? <h1>Name: {user.name}</h1> : ""
            }
        </div>
    );

}



export default User;