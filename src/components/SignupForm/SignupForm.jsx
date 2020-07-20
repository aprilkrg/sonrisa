import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <header>Sign Up</header>
        <form onSubmit={this.handleSubmit}
          className='SignupForm'
        >
          <div>
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                value={this.state.name} name="name" 
                onChange={this.handleChange} 
                className='SignupForm-input'
              />
            </div>
          </div>
          <div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                value={this.state.email} name="email" 
                onChange={this.handleChange} 
                className='SignupForm-input'
              />
            </div>
          </div>
          <div>
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                value={this.state.password} name="password" 
                onChange={this.handleChange} 
                className='SignupForm-input'
              />
            </div>
          </div>
          <div >
            <div >
              <input 
                type="password" 
                placeholder="Confirm Password" 
                value={this.state.passwordConf} name="passwordConf" 
                onChange={this.handleChange} 
                className='SignupForm-input'
              />
            </div>
          </div>
          <div >
            <div>
              <button className='btn' disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'
                className='btn btn-cancel'
              >Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;