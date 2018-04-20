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
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  if (this.props.isAuthenticated) {
    return <Redirect push to='/dashboard' />;
  }
  render() {
    return (
      <div className='main'>
        <h1>Welcome to Inventoree</h1>
        Keep track of your stuff!<br />
        <button onClick={this.toggle} className='btn btn-sm' id='signup-link'>
          Sign up
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='signup_modal'>
          <ModalHeader toggle={this.toggle}>Inventoree Signup</ModalHeader>
          <ModalBody>
            <form>
              <div className='form-group'><input id='firstName' type='text' placeholder='First Name' /></div>
              <div className='form-group'><input id='lastName' type='text' placeholder='Last Name' /></div>
              <div className='form-group'><input id='email' type='email' placeholder='Email' /></div>
              <div className='form-group'><input id='password' type='password' placeholder='Password' /></div>
              <button id='signup_submit' type='submit'>Create Account</button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <h4>Already have an account?</h4>
            <button className="signup-login" onClick={this.login}>
              Login
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Landing;
