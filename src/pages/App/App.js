import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="NavBar">
              <Switch>
                <Route>
                  <NavBar />
                </Route>
              </Switch>
          </nav>
        </header>
        <main>
          <p>
            Sonrisa LLC
          </p>

        </main>
      </div>
    );
  }
}

export default App;
