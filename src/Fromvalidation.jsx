import { useContext, useRef, useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { ThemeData } from "./ContextTheme";
function Fromvalidation() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState({});

    const cardTheme = useContext(ThemeData);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let allErrors = {};

        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        if (!name) allErrors.name = "Name field is required.";
        if (!email) allErrors.email = "Email field is required.";
        if (!password) allErrors.password = "Password field is required";
        else if (password.length < 8) allErrors.password = "Password field must be greater then eight characters.";


        if (Object.keys(allErrors).length > 0) {
            setError(allErrors)
            return;
        }

        setError({});
        console.log(name, email, password);

        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";

        alert("Registertaion Successfully.");

    }
    return (
        <>
            <Card className={cardTheme}>
                <Card.Body>
                    <Card.Title>Form with validation</Card.Title>

                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label> Name </Form.Label>
                            <Form.Control ref={nameRef} type="text" name="name" placeholder="Enter Name" isInvalid={!!error.name}></Form.Control>
                            <Form.Control.Feedback type="invalid">{error.name}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter Email" isInvalid={!!error.email}></Form.Control>
                            <Form.Control.Feedback type="invalid">{error.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" name="password" placeholder="Enter Password" isInvalid={!!error.password}></Form.Control>
                            <Form.Control.Feedback type="invalid">{error.password}</Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" variant="success" size="sm"> Save </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )

}


export default Fromvalidation;