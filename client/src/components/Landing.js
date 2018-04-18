import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './components.css';

const Landing = (props) => {
  if (props.isAuthenticated) {
    return <Redirect push to='/dashboard' />;
  }
  return (
    <div className='main'>
      <h1>Welcome to Inventoree</h1>
      Keep track of your stuff!<br />
      <Link to='/signup' className='signup-link link'>
        Sign up
      </Link>
    </div>
  );
};

export default Landing;
