import React from "react";
import './ImageLinkForm.css';
const ImageLinkForm = () => {
  return (
    <div className='iLF'>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
        <input className='f4 pa2' type="text" />
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-silver'>Detect</button>
    </div>
  );
}

export default ImageLinkForm;