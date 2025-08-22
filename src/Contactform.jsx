import { startTransition, useRef, useTransition } from "react";
import { Button } from "react-bootstrap";
import Login from "./Login";
import { useFormStatus } from "react-dom";

function Contactform() {

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const usernameRef2 = useRef(null);
    const passwordRef2 = useRef(null);


    const handleForm = (event) => {
        event.preventDefault();
        usernameRef.current.placeholder = "TEST";
        if (passwordRef.current.style.display == 'none') {
            passwordRef.current.style.display = 'inline'
        } else {
            passwordRef.current.style.display = 'none'
        }
    }

    const handleForm2 = (event) => {
        console.log('here..');
        event.preventDefault();
        usernameRef2.current.placeholder = "TEST";
        if (passwordRef2.current.style.display == 'none') {
            passwordRef2.current.style.display = 'inline'
        } else {
            passwordRef2.current.style.display = 'none'
        }
    }

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    const handleLoginForm = async () => {
        await wait(2000);
    }

    const CustomerForm = () => {
        const { pending } = useFormStatus();
        return (
            <div>
                <input type="text" /> <br />
                <input type="password" /> <br />
                <button disabled={pending}>{pending ? 'Submiting...' : 'login'}</button>
            </div>
        );
    }

    const [pndng, startTransition] = useTransition();
    const handleUserLoginForm = () => {
        startTransition(async () => {
            await wait(3000);
        });
    }

    return (
        <div>

            <h4>useRef</h4>

            <form>
                <input type="text" ref={usernameRef} className="formControl" name="username" id="username" placeholder="Enter Username" /><br />
                <input type="text" ref={passwordRef} className="formControl" name="password" id="password" placeholder="Enter Password" /><br />
                <Button onClick={handleForm} variant="info">Toggle & useRef</Button>
            </form>

            <hr />

            <h4>useRef with child Component</h4>
            <Login ref={usernameRef2} ref2={passwordRef2} fn={handleForm2} />

            <hr />
            <h4>useFormStatus</h4>
            <form action={handleLoginForm}>
                <CustomerForm />
            </form>

            <hr />
            <h4>useTransition</h4>
            <input type="text" name="" id="" placeholder="Name" /><br />
            <input type="password" name="" id="" placeholder="Password" /><br />
            {
                pndng ?
                    <img style={{ width: "100px" }} src="https://i.pinimg.com/originals/b2/d4/b2/b2d4b2c0f0ff6c95b0d6021a430beda4.gif" alt="" />
                    : null
            }
            <button disabled={pndng} onClick={handleUserLoginForm}>{pndng ? 'Submiting...' : 'login'}</button>
        </div>
    );

}


export default Contactform;