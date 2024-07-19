// App.js
import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { AppContext, defaultUser, defaultLogOut } from './AppContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: defaultUser,
    });
  }

  render() {
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <div className="App">
          <Notifications 
            displayDrawer={this.state.displayDrawer} 
            handleDisplayDrawer={this.handleDisplayDrawer} 
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          {this.state.user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

