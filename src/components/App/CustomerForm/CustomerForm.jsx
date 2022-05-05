import { useState } from 'react';
import axios from 'axios';

function CustomerForm({getPizzas}) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const handleInformationSubmission = event => {
        event.preventDefault();
        console.log({name, address, city, zip})
        axios({
            method: 'POST',
            url: '/api/order',
            data: {name, address, city, zip}
        }).then((response) => {
            console.log('this is the response of the post route in customer form', response)
            getPizzas(); //will recieve on merge
        }).catch((err) => {
            console.log('oops', err)
        })
    }

    return (
        <section>
            <h2>Enter Information</h2>
            <form onSubmit={handleInformationSubmission} className="">
                <input
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    required
                    placeholder="Street Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <input
                    required
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <input
                    required
                    placeholder="Zip"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                />

                <button type="submit">
                    Next
                </button>
            </form>
        </section>
    )
}

export default CustomerForm;