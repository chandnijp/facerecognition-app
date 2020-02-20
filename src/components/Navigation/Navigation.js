import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f4 link dim black pa3 mt0 mr4 pointer'>Sign Out</p>
      </nav>
    );
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f4 link dim black pa3 mt0 pointer'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='f4 link dim black pa3 mt0 mr4 pointer'>Register</p>
      </nav>
    );  
  }
}

export default Navigation;