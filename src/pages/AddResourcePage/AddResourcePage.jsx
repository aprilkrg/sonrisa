import React, { Component } from 'react';

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
                <h1> Add Resource </h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input 
                            name='title'
                            value={this.state.formData.title}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Topic</label>
                        <input 
                            name='topic'
                            value={this.state.formData.topic}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Type here ... 
                        <input 
                            name='body'
                            value={this.state.formData.body}
                            onChange={this.handleChange}
                            required
                        />
                        </label>
                    </div>
                    <button
                        type='submit'
                        className='btn'
                    >
                        ADD RESOURCE
                    </button>
                </form>
            </>
        );
    }
}

export default AddResourcePage;