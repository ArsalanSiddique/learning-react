function Login(props) {
    return (
        <div>

            <form action="">
                <input type="text" ref={props.ref} placeholder="Name" /> <br />
                <input type="password" ref={props.ref2} placeholder="Password" /> <br />

                <button onClick={props.fn}>Toggle & useRef</button>
            </form>

        </div>
    );
}

export default Login;