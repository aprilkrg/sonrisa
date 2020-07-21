import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddContactFormPage.css';


class AddContactFormPage extends Component {
    state = {
        formData: {
            name: '',
            email: '',
            question: '',
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

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddContactForm(this.state.formData);
    };

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
                    <form id='ContactForm' onClick={this.handleSubmit}>
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
                        <Link
                            to='/'
                            type='submit'
                            value='Submit'
                            className='btn'
                        >SEND</Link>
                        {/* <input 
                        type='reset'>
                    </input> */}
                    </form>
                </div>
            </>
        )
    }
}

export default AddContactFormPage;