import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers'

export default function Contact() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [errorCheck, setErrorCheck] = useState('')

    // Updates variable through set function based on what is being inputed
    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleContactSubmit = (event) => {
        event.preventDefault();

        if(!validateEmail(email)){
            setErrorCheck('Email is not in a valid format');
            return;
        }
        if( !name || !message ) {
            setErrorCheck('Name and Message cannot be empty, please fill out');
            return;
        }
        setEmail('')
        setName('')
        setMessage('')
        setErrorCheck('')
    }

    return(
        <div className="">

        </div>
    )


}