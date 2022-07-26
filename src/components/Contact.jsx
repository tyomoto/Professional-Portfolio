import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers'
import '../styles/Contact.css'

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

    const handleFormSubmit = (event) => {
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
        <div className = "contact">
        <h1>Contact</h1>
            <form className = "contact-form">
                <p>Name</p>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your name..."
                />
                <p>Email</p>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your email..."
                />
                <p>Message</p>
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Write me a message..."
                />
                <button type="button" onClick={handleFormSubmit}>Send Message</button>
            </form>
            {errorCheck && (
            <div>
                <p className = "error-text">{errorCheck}</p>
            </div>
             )}
      </div>
    )
}