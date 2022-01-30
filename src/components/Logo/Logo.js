import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './artificial-intelligence.png';

const Logo = () => {
  return (
    <Tilt
      className="parallax-effect-glare-scale tilt shadow-5"
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

export default Logo;