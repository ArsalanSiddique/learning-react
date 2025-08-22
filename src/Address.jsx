import { useState } from "react";

function Address() {

    const [address, setAddress] = useState({
        name: 'Arsalan',
        city: 'Karachi',
        state: 'Sindh',
        phone: {
            first: '03411126905',
            second: '03411126900'
        }
    });

    function updateName(name) {
        setAddress({ ...address, name: name });
    }

    function updatePhone(phone) {
        setAddress({
            ...address,
            phone: {
                ...address.phone,
                first: phone
            }
        })
    }

    return (
        <div>

            <h4 className="mt-5">Updating Object</h4>

            <input className="form-control" type="text" onChange={(event) => { updateName(event.target.value) }} placeholder="Name" />
            <br />
            <input className="form-control" type="text" onChange={(event) => { updatePhone(event.target.value) }} placeholder="First Phone" />

            <hr />

            <h4>Name: {address.name}</h4>
            <h4>City: {address.city}</h4>
            <h4>State: {address.state}</h4>
            <h4>First Phone: {address.phone.first}</h4>
            <h4>Second Phone: {address.phone.second}</h4>

            <hr />
            <br /><br />

            <h4>Updating Array</h4>
        </div>
    );
}

export default Address;