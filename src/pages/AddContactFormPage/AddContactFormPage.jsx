import React, { Component } from 'react';
import * as contactService from '../../utils/contactFormsService';
import './AddContactFormPage.css';


class ContactFormPage extends Component {
    state = {
        formData: {
            name: '',
            email: '',
            question: ''
        }
    }

    handleChange = e => {
        const formDataAsUserTypes = {
            ...this.state.formData,
            [e.target.name]: e.target.value
        }

        this.setState({
            formData: formDataAsUserTypes
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await contactService.createContactFormAPI(this.state);
            // Let <App> know a user has signed up!
            this.props.handleFormSubmit();
            // Successfully signed up - show GamePage
            this.props.history.push('/');
        } catch (err) {
            // Invalid user data (probably duplicate email)
            alert(err.message);
        }
    }

    render() {
        return (
            <>
                <h3>You can contact me at ewebster@highlandbehavioral.org, or send me any questions or concerns!</h3>
                <div className='ContactForm'>
                <img 
                    src="https://i.imgur.com/4ojZU90.jpeg" 
                    alt="A person sits facing the camera and looks up and away, behind them are pink clouds and a blue sky"
                    width="300rem"
                    className='ContactForm-img'
                /> 
                <form id='ContactForm' onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                        placeholder='name' 
                        name='name'
                        className='ContactForm-input'>
                    </input><br></br>
                    <input 
                        type='email' 
                        value={this.state.formData.email}
                        onChange={this.handleChange}
                        required
                        placeholder='email' 
                        name='email'
                        className='ContactForm-input'>
                    </input><br></br>
                    <textarea 
                        value={this.state.formData.question}
                        onChange={this.handleChange}
                        required
                        placeholder='questions?' 
                        name='question'
                        className='ContactForm-input ContactForm-question'>
                    </textarea><br></br>
                    <input 
                        type='submit' 
                        value='Submit'
                        className='btn'>
                    </input>
                    {/* <input 
                        type='reset'>
                    </input> */}
                </form>
        
            </div>
            </>
        )
    }
}

export default ContactFormPage;