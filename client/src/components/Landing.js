import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './components.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.login = this.login.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  login() {
    this.toggle();
    this.props.login();
    setTimeout(()=>{this.setState({ redirect: true })}, 100);
  }

  render() {

    if (this.props.isAuthenticated) {
      return <Redirect push to='/dashboard' />;
    }

    return (
      <div className='main'>
        <h1>Welcome to Inventoree</h1>
        Keep track of your stuff!<br />
        <button onClick={this.toggle} className='btn btn-sm btn-success' id='signup-link'>
          Sign up
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='signup_modal text-center'>
          <ModalHeader toggle={this.toggle}>Inventoree Signup</ModalHeader>
          <ModalBody>
            <form name='signup'>
              <div className='form-group'><input id='firstName' type='text' placeholder='First Name' /></div>
              <div className='form-group'><input id='lastName' type='text' placeholder='Last Name' /></div>
              <div className='form-group'><input id='email' type='email' placeholder='Email' /></div>
              <div className='form-group'><input id='password' type='password' placeholder='Password' /></div>
            </form>
          </ModalBody>
          <ModalFooter>
            <div id='signup_footer'>

              <div id='signup_buttons'>
                <button form='signup' className='btn btn-success' id='signup_submit' type='submit' onClick={this.toggle}>Create Account</button>
                <button className='btn btn-danger' onClick={this.toggle}>Cancel</button>
              </div>

              <div id='signup_login'>
                <h6>Already have an account?</h6>
                <button className="signup-login" onClick={this.login}>
                  Login
                </button>
              </div>

            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Landing;
