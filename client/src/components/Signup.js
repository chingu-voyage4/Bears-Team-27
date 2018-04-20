import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './components.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.login = this.login.bind(this);
  }

  login() {
    this.props.login();
    setTimeout(()=>{this.setState({ redirect: true })}, 100);
  }
  render() {
    if (this.state.redirect || this.props.isAuthenticated) {
      return <Redirect push to='/dashboard' />;
    }

    return (
      <div className='main'>
        <form>
          <div className='form-group'><input id='firstName' type='text' placeholder='First Name' /></div>
          <div className='form-group'><input id='lastName' type='text' placeholder='Last Name' /></div>
          <div className='form-group'><input id='email' type='email' placeholder='Email' /></div>
          <div className='form-group'><input id='password' type='password' placeholder='Password' /></div>
          <button id='signup_submit' type='submit'>Create Account</button>
        </form>
        <h4>Already have an account?</h4>
        <button className="signup-login" onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}

export default Signup;
