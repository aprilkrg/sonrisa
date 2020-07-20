import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditResourcePage extends Component {
    state = {
        formData: this.props.location.state.clickedOnResource
    };

    handleChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateResource(this.state.formData);
    };

    render() {
        return(
            <>
                <h1>Edit</h1>
                <form onClick={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input
                            className="form-control"
                            name="title"
                            value={this.state.formData.title}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Topic</label>
                        <input
                            className="form-control"
                            name="topic"
                            value={this.state.formData.topic}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Text here:</label>
                        <input
                            className="form-control"
                            name="body"
                            value={this.state.formData.body}
                            onChange={this.handleChange}
                            required
                        />
                    </div><br/>
                    <Link
                        
                        to='/resources'
                        type='submit'
                        className='btn btn-link'
                    >SAVE RESOURCE
                    </Link>&nbsp;&nbsp;
                    <Link to='/resources'
                        className='btn btn-cancel btn-link'
                    >CANCEL</Link>
                </form>
            </>
        );
    }
}

export default EditResourcePage;