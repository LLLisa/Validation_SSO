import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        if (!email.length || !phoneNumber.length) {
        }
        axios.post('/user/email', { email: email });
        axios.post('/user/text', { phoneNumber: phoneNumber });
        setEmail('');
        setPhoneNumber('');
    };

    return (
        <>
            <h1>SignUp</h1>
            Enter Your Information
            <form onSubmit={(ev) => handleSubmit(ev)}>
                <input
                    type='text'
                    value={email}
                    placeholder='email'
                    onChange={(ev) => setEmail(ev.target.value)}
                />
                <input
                    type='text'
                    value={phoneNumber}
                    placeholder='phone number'
                    onChange={(ev) => setPhoneNumber(ev.target.value)}
                />
                <button disabled={!email || !phoneNumber}>submit</button>
            </form>
        </>
    );
};

export default SignUp;
