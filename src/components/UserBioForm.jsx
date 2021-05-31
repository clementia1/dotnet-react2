import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import Button from './Button';
import Input from './Input';

export default function UserRegistrationForm({setParticipantData, setIsRegistered}) {
    const [firstname,
        setFirstname] = useState('');
    const [lastname,
        setLastname] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (firstname.length == 0 || lastname.length == 0) return;

        setParticipantData({firstname, lastname, id: nanoid(10)});
        setIsRegistered(true);
    }

    return (
        <form className="registration-form" onSubmit={handleRegister}>
            <h3>Participant Registration</h3>
            <label htmlFor="firstname" className="form-label">First name:</label>
            <Input
                type="text"
                id="firstname"
                value={firstname}             
                onChange={(e) => setFirstname(e.target.value)}/>
            <label htmlFor="lastname" className="form-label">Last name:</label>
            <Input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}/>
            <Button 
                type="submit"
                text="Register"/>
        </form>
    )
}