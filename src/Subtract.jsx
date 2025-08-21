import { useEffect } from "react";

function Subtract({ value }) {

    function testing() {
        console.log("This is updating while passing props.");
    }

    useEffect(
        () => {
            testing();
        },
        []
    );

    return (
        <div>
            <p>Subtract: {value}</p>
        </div>
    );
}

export default Subtract;