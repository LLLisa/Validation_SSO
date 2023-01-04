import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        console.log(email);
        axios.post('/user/email', { email: email });
        setEmail('');
    };

    return (
        <>
            <h1>SignUp</h1>
            <form onSubmit={(ev) => handleSubmit(ev)}>
                <label>
                    Enter Your Information
                    <input
                        type='text'
                        value={email}
                        placeholder='email'
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                </label>
            </form>
        </>
    );
};

export default SignUp;
