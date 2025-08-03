function Wrapper({ children, color="red" }) {


    return (
        <div style={{ color: color, border: "2px solid pink", padding: "10px", margin: "10px" }}>

            {children}

        </div>
    )

}

export default Wrapper;