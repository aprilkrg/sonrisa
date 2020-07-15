import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    // handleChange = (e) => {
    //     this.props.updateMessage('');
    //     this.setState({
    //         // Using ES2015 Computed Property Names
    //         [e.target.name]: e.target.value
    //     });
    // }

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await userService.signup(this.state);
    //         // Let <App> know a user has signed up!
    //         this.props.handleSignupOrLogin();
    //         // Successfully signed up - show GamePage
    //         this.props.history.push('/');
    //     } catch (err) {
    //         // Invalid user data (probably duplicate email)
    //         this.props.updateMessage(err.message);
    //     }
    // }

    render() {
        return (
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