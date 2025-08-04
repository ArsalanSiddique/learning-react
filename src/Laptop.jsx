function Laptop() {
    const laptopData = [
        {
            id: "1",
            name: "Toshiba",
            price: 1700
        },
        {
            id: "2",
            name: "HP",
            price: 2000
        },
        {
            id: "3",
            name: "Dell",
            price: 3000
        }
    ];

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        laptopData.map((laptop) => (
                            <tr key={laptop.id}>
                                <td>{laptop.id}</td>
                                <td>{laptop.name}</td>
                                <td>{laptop.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Laptop;