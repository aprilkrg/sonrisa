import React, { Component } from 'react';
import './AddResourcePage.css';

class AddResourcePage extends Component {
    state = {
        formData: {
            title: '',
            body: '',
            topic: '',
            user: '',
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
        this.props.handleAddResource(this.state.formData);
    }

    render() {
        return(
            <>
                <h1 className='AddResource-h1'> Add Resource</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='AddResource-form'>
                        {/* <label className='AddResource-label'>Title</label> */}
                        <input 
                            placeholder='Title'
                            name='title'
                            value={this.state.formData.title}
                            onChange={this.handleChange}
                            required
                            className='AddResource-input'
                            /> <br />
                        {/* <label className='AddResource-label'>Topic</label> */}
                        <input 
                            placeholder='Topic'
                            name='topic'
                            value={this.state.formData.topic}
                            onChange={this.handleChange}
                            required
                            className='AddResource-input'
                            /> <br />
                        {/* <label className='AddResource-label'>Type here ...  */}
                        <input 
                            placeholder='Type here...'
                            name='body'
                            value={this.state.formData.body}
                            onChange={this.handleChange}
                            height='400vh'
                            required
                            className='AddResource-input'
                        />
                        {/* </label> */}
                    </div>
                    <button
                        type='submit'
                        className='btn'
                    >
                        SAVE
                    </button>
                </form>
            </>
        );
    }
}

export default AddResourcePage;