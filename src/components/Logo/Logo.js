import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
  return(
    <div className='mt0 center'>
      <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 175, width: 175 }} >
        <div className="Tilt-inner pa3">
          <img style={{height: 130, width: 130}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;