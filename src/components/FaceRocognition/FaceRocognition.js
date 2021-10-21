import React from 'react';

const FaceRocognition = ({ imageUrl }) => {
  return (
    <div className="center">
      <div className="absolute mt2">
      <img alt='' src={imageUrl} width='50%' height='auto'/>
      </div>
    </div> 
  );
}

export default FaceRocognition;