import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import About from '../../components/About/About';
import ServicesPage from '../ServicesPage/ServicesPage';

import ResourceListPage from '../ResourceListPage/ResourceListPage';
import AddResourcePage from '../AddResourcePage/AddResourcePage';
import EditResourcePage from '../EditResourcePage/EditResourcePage';

import ContactFormListPage from '../ContactFormListPage/ContactFormListPage';
import AddContactFormPage from '../AddContactFormPage/AddContactFormPage';

import userService from '../../utils/userService';
import * as resourceService from '../../utils/resourcesService';
import * as contactFormsService from '../../utils/contactFormsService';

class App extends Component {
  state = {
    contactForms: [],
    resources: [],
    user: userService.getUser(),
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

  handleAddResource = async newResourceData => {
    await resourceService.createResourceAPI(newResourceData);
    this.getAllResources(true);
  }

  handleDeleteResource = async idOfResourceToDelete => {
    await resourceService.deleteResourceAPI(idOfResourceToDelete);
    this.setState(state => ({
      resources: state.resources.filter(resource => resource._id !== idOfResourceToDelete)
    }), () => this.props.history.push('/resources'));
  }

  handleUpdateResource = async updatedResourceData => {
    await resourceService.updateResourceAPI(updatedResourceData);
    this.getAllResources(true);
  }

  getAllResources = async () => {
    const resources = await resourceService.getAllResourcesAPI();
    this.setState({
      resources
    });
  }

  handleAddContactForm = async newContactFormData => {
    await contactFormsService.createContactFormAPI(newContactFormData);
    this.getAllContactForms(true);
  }

  handleDeleteContactForm = async idOfContactFormToDelete => {
    await contactFormsService.deleteContactFormAPI(idOfContactFormToDelete);
    this.setState(state => ({
      contactForms: state.contactForms.filter(contactForm => contactForm._id !== idOfContactFormToDelete)
    }), () => this.props.history.push('/contacts'));
  }

  getAllContactForms = async () => {
    const contactForms = await contactFormsService.getAllContactFormsAPI();
    this.setState({
      contactForms
    });
  }

  async componentDidMount() {
    this.getAllResources();
    this.getAllContactForms();
    // this.setState({
    //   user
    // })
    console.log('component did mount')
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
              <AddContactFormPage 
                // history={history}
                handleAddContactForm={this.handleAddContactForm}
                // contactFormsFromParent={this.state.contacts}
              />
            } />
            <Route path='/about' render={({ history }) =>
              <About 
              />
            } />
            <Route path='/services' render={({ history }) =>
              <ServicesPage 
              />
            } />
            <Route path='/resources' render={({ history }) =>
              <ResourceListPage 
                resourcesFromParent={this.state.resources}
                handleDeleteResource={this.handleDeleteResource}
              />
            } />
            <Route path='/contacts' render={({ history }) =>
              userService.isAdmin() ?
              <ContactFormListPage 
              handleDeleteContactForm={this.handleDeleteContactForm}
                contactFormsFromParent={this.state.contactForms}
              />
              :
              <Redirect to='/' />
            } />
            <Route path='/add' render={() =>
              userService.isAdmin() ? 
                <AddResourcePage 
                  handleAddResource={this.handleAddResource} />
                :
                <Redirect to='/' />
              } />
            <Route path='/edit' render={({ history, location }) =>
              userService.isAdmin() ?
                <EditResourcePage 
                  handleUpdateResource={this.handleUpdateResource} 
                  location={location}
                  history={history} />
                :
                <Redirect to='/' />
            } />

          <>
          <div className='App-home-section div-section'
            style={{
              float:'left'}}
          >
          <img 
            src="https://i.imgur.com/Y74nRmV.jpg"
            alt="A person dancing on a boardwalk joyously, the sky behind them shows a rainbow"
            width="300rem"
            style={{
              float:'right',
              borderRadius:'1.5rem',
              margin:'1rem',
            }}
            />
          <h1>Why Therapy?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet. Facilisi etiam dignissim diam quis enim.</p>
          <br/>
          <h1>Sonrisa Counseling LLC</h1> 
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
