import { useActionState, useId } from "react";
import useToggle from "./useToggle";

function Register() {
    const [visible, setVisible] = useToggle(true);

    async function handleRegisterationData(previousData, formData) {

        let name = formData.get('name');
        let email = formData.get('email');
        let password = formData.get('password');

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (name && email && password) {
            return { "message": "Registration Successfully.", name, email, password }
        } else {
            return { "error": "All fields are required.", name, email, password }
        }
    }

    const [data, action, pending] = useActionState(handleRegisterationData, undefined);


    return (
        <div>

            <h4 className="mt-4 mb-4">Registration Form</h4>

            <Form action={action} pending={pending} data={data} />

            {
                data?.error && <span className="text-danger">  {data?.error} </span>
            }

            {
                data?.message && <span className="text-success"> {data?.message} </span>
            }

            <hr />
            <button onClick={() => { setVisible(true) }}>Show Details</button>
            <button onClick={() => { setVisible(false) }}>Hide Details</button>
            <button onClick={setVisible}>Toggle Details</button>
            {
                visible ? (
                    <div>
                        <h4>Name: {data?.name}</h4>
                        <h4>Email: {data?.email}</h4>
                        <h4>Password: {data?.password}</h4>
                    </div>
                ) : null
            }


        </div >
    );
}


function Form({ action, data, pending }) {

    const uniqueId = useId();

    return (
        <div>

            <form action={action}>
                <label htmlFor={uniqueId + "name"}>Name</label>
                <input defaultValue={data?.name} type="text" id={uniqueId + "name"} name="name" className="mb-2 form-control" placeholder="Enter Name" />

                <label htmlFor={uniqueId + "email"}>Email</label>
                <input defaultValue={data?.email} type="email" id={uniqueId + "email"} name="email" className="mb-2 form-control" placeholder="Enter Email" />

                <label htmlFor={uniqueId + "password"}>Password</label>
                <input defaultValue={data?.password} type="password" id={uniqueId + "password"} name="password" className="mb-2 form-control" placeholder="Enter Password" />

                <button className="btn btn-primary" disabled={pending}>Register</button>
            </form>

        </div>
    );
}

export default Register;