import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  state = {
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
    }, () => this.getAllResources());
  }

  async componentDidMount() {
    // this.getAllResources();
    this.setState(
      console.log('set state here')
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sonrisa LLC
          &nbsp;&nbsp;&nbsp;
          <nav className="NavBar">
            <NavBar />
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
            } />

          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
