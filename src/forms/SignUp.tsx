import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [firstName, setFirsName] = useState('');

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        console.log(firstName);
        axios.get('/user/email');
        setFirsName('');
    };

    return (
        <>
            <h1>SignUp</h1>
            <form onSubmit={(ev) => handleSubmit(ev)}>
                <label>
                    Enter Your Information
                    <input
                        type='text'
                        value={firstName}
                        placeholder='first name'
                        onChange={(ev) => setFirsName(ev.target.value)}
                    />
                </label>
            </form>
        </>
    );
};

export default SignUp;
