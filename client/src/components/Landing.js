import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

// class Landing extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       redirect: false
//     };

//     this.login = this.login.bind(this);
//   }


//   render() {

//     if (this.props.isAuthenticated) {
//       return <Redirect push to='/dashboard' />;
//     }
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <h1>Welcome to Inventoree</h1>
//         Keep track of your stuff!<br />
//         <Link to='/signup' className='signup-link'>
//           Sign up
//         </Link>
//       </div>
//     );
//   }
// };

//export default Landing;

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
