import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component{
    render() {
        return(
            <div>
                <h2>Contact Form</h2>
                <form id='ContactForm' method='POST'>
                    <input type='text' placeholder='name' className='ContactForm-name'></input><br></br>
                    <input type='email' placeholder='email' className='ContactForm-email'></input><br></br>
                    <textarea placeholder='questions?' className='ContactForm-question'></textarea><br></br>
                    <input type='submit' value='Submit'></input>
                    <input type='reset'></input>
                </form>
            </div>
        )
    }
}

export default ContactForm;