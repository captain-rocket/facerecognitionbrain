import React from "react";
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './artificial-intelligence.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt .br5 " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner icon"><img src={brain} alt="brain" /> </div>
      </Tilt>
    </div>
  );
}

/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

export default Logo;