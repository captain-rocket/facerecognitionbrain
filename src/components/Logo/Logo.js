import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './artificial-intelligence.png';

const Logo = () => {
  return (
    <Tilt
      className="parallax-effect-glare-scale test tilt"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={1.0}
      scale={1.05}
        >
      <div className="inner-element icon">
        <img src={brain} alt="brain" />
      </div>
    </Tilt>
 );
};

/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

export default Logo;