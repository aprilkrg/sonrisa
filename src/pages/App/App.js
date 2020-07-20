import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ResourceListPage from '../ResourceListPage/ResourceListPage';
import AddResourcePage from '../AddResourcePage/AddResourcePage';
import EditResourcePage from '../EditResourcePage/EditResourcePage';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About';
import ContactForm from '../../components/Contact/ContactForm';
import userService from '../../utils/userService';
import * as contactService from '../../utils/contactService';
import * as resourceService from '../../utils/resourcesService';
import ServicesPage from '../ServicesPage/ServicesPage';


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

  handleAddResource = async newResourceData => {
    await resourceService.createResourceAPI(newResourceData);
    this.getAllResources();
  }

  handleDeleteResource = async idOfResourceToDelete => {
    await resourceService.deleteResourceAPI(idOfResourceToDelete);
    this.setState(state => ({
      resources: state.resources.filter(resource => resource._id !== idOfResourceToDelete)
    }), () => this.props.history.push('/resources'));
    console.log('pushing from handleDeleteResources > App.js');
  }

  handleUpdateResource = async updatedResourceData => {
    await resourceService.updateResourceAPI(updatedResourceData);
    this.getAllResources();
  }

  getAllResources = async () => {
    const resources = await resourceService.getAllResourcesAPI();
    this.setState({
      resources
    }, () => this.props.history.push('/resources'));
    console.log('pushing from getAllResources > App.js');
  }

  async componentDidMount() {
    this.getAllResources();
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
            <Route path='/add' render={() =>
              userService.getUser() ? 
                <AddResourcePage 
                  handleAddResource={this.handleAddResource} />
                :
                <Redirect to='/' />
              } />
            <Route path='/edit' render={({ history, location }) =>
              userService.getUser() ?
                <EditResourcePage 
                  handleUpdateResource={this.handleUpdateResource} 
                  location={location}/>
                :
                <Redirect to='/' />
            } />

          <>
          <div className='App-home-section'
            style={{
              float:'left'}}
          >
            <h1>Why Therapy?</h1>
          <img 
            src="https://i.imgur.com/Y74nRmV.jpg"
            alt="A person dancing on a boardwalk joyously, the sky behind them shows a rainbow"
            width="300rem"
            style={{
              float:'right'}}
          />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet. Facilisi etiam dignissim diam quis enim.</p>
          </div> <br></br>
          <div className='App-home-section'>
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
