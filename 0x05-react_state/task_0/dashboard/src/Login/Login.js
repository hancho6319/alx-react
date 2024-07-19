// Login.js
import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.updateSubmitButtonState);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.updateSubmitButtonState);
  }

  updateSubmitButtonState() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email.length > 0 && password.length > 0 });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleLoginSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleChangeEmail} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handleChangePassword} 
          />
          <input 
            type="submit" 
            value="Submit" 
            disabled={!this.state.enableSubmit} 
          />
        </form>
      </div>
    );
  }
}

export default Login;

