function Mobile({ data }) {
    return (
        <div style={{
            border: "2px solid red",
            borderRadius: "10px",
            margin: "10px",
            padding: "20px"
        }}>
            <h2>Id: {data.id}</h2>
            <h2>Name: {data.name}</h2>
            <h2>Price: {data.price}</h2>
        </div>
    )
}


export default Mobile;