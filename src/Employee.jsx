import { useContext } from "react";
import { SubjectData } from "./ContextData";

function Employee() {

    const subject = useContext(SubjectData)

    return (
        <div style={{ backgroundColor: "green", padding: 10 }}>
            This is employee component.

            Subject is: {subject ? subject : 'No value passed'}


        </div>
    );
}

export default Employee;