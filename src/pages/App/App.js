import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import About from '../../components/About/About';
import ContactForm from '../../components/Contact/ContactForm';
import Resources from '../../components/Resources/Resources';
import * as contactService from '../../utils/contactService';

class App extends Component {
  state = {
    contactForms: [],
    resources: [],
    user: userService.getUser(),
  }

  handleFormSubmit = async newContactForm => {
    await contactService.createContactFormAPI(newContactForm);
    this.getAllContactForms();
  }

  getAllContactForms = async () => {
    const forms = await contactService.getAllContactFormsAPI();
    this.setState({
      forms
    });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    }, () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    })
  }

  async componentDidMount() {
    this.setState(
      console.log('set state here')
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="NavBar">
            <NavBar 
             handleLogout={this.handleLogout}
             
            />
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage 
                history={history} 
                handleSignupOrLogin={this.handleSignupOrLogin} 
              />
            } />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage 
                history={history} 
                handleSignupOrLogin={this.handleSignupOrLogin} 
              />
            } />  
            <Route path='/contact' render={({ history }) =>
              <ContactForm 
                history={history}
              />
            } />
            <Route path='/about' render={({ history }) =>
              <About 
              />
            } />
            <Route path='/resources' render={({ history }) =>
              <Resources 
              />
            } />
          <>
          <div className='App-home-section'>
            <h1>Why Therapy?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet. Facilisi etiam dignissim diam quis enim.</p>
          </div>
          <div className='App-home-section'>
            <h1>Brand Statement</h1> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet. Facilisi etiam dignissim diam quis enim.</p>
          </div>
          </>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
