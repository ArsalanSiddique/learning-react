const Card = ({ data }) => {

    return (
        <div
            style={{
                "border": "1px solid white",
                "padding": "10px",
                "margin": "30px 10px",
                "borderRadius": "10px",
                "boxShadow": "1px 2px 4px white"
            }}
        >
            <h3> Name: {data.name}</h3>
            <h3> Email: {data.email}</h3>
            <h3>Age: {data.age}</h3>
        </div>
    );

}


export default Card;