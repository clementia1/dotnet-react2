import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';

export default function UserRegistrationForm({setParticipantData, setIsRegistered}) {
    const [firstname,
        setFirstname] = useState('');
    const [lastname,
        setLastname] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        setParticipantData({firstname, lastname, id: nanoid(10)});
        setIsRegistered(true);
    }

    return (
        <form className="registration-form" onSubmit={handleRegister}>
            <h3>Registration User</h3>
            <label>
                First name:
                <input
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}/>
            </label>
            <label>
                Last name:
                <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}/>
            </label>
            <button type="submit">Register participant</button>
        </form>
    )
}