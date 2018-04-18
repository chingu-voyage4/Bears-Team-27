import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const Landing = (props) => {
  if (props.isAuthenticated) {
    return <Redirect push to='/dashboard' />;
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Inventoree</h1>
      Keep track of your stuff!<br />
      <Link to='/signup' className='signup-link'>
        Sign up
      </Link>
    </div>
  );
};

export default Landing;
