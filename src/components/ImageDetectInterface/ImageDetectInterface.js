import React from 'react';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import FaceRecognition from '../FaceRecognition/FaceRecognition';

const ImageDetectInterface = (props) => {
  return (
        <div>
          <Logo />
          <Rank {...props}/>
          <ImageLinkForm
          {...props}
          className='ImageLinkForm'/>
          <FaceRecognition {...props}/>
          
        </div>
        );
}

export default ImageDetectInterface;