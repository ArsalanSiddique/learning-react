import { Alert } from "react-bootstrap";


function DissmissableAlert({ onClose, variant, message }) {

    return (
        <Alert variant={variant} onClose={onClose} dismissible>
            {message}
        </Alert>
    );

}


export default DissmissableAlert;