import React, { Component } from 'react';
import { Redirect } from 'react-router';

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
      <div>
        <form>
          <input id='firstName' type='text' placeholder='First Name' />
          <input id='lastName' type='text' placeholder='Last Name' />
          <input id='email' type='email' placeholder='Email' />
          <input id='password' type='password' placeholder='Password' />
          <button id='signup_submit' type='submit'>Create Account</button>
        </form>
        <h4>Already have an account?</h4><button className="signup-login" onClick={this.login}>
              Login
            </button>
      </div>
    );
  }
}

export default Signup;
