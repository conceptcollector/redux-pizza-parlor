import { useState } from 'react';
import axios from 'axios';

function CustomerForm({getPizzas}) {

    const [customer_name, setCustomerName] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    let type = 'delivery';
    let total = 0;
    let pizzas = [];


    const handleInformationSubmission = event => {
        event.preventDefault();
        console.log({customer_name, street_address, city, zip})
        axios({
            method: 'POST',
            url: '/api/order',
            data: {customer_name, street_address, city, zip, type, total, pizzas}
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
                    value={customer_name}
                    onChange={(event) => setCustomerName(event.target.value)}
                />
                <input
                    required
                    placeholder="Street Address"
                    value={street_address}
                    onChange={(event) => setStreetAddress(event.target.value)}
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