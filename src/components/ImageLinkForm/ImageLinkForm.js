import React from "react";
import './ImageLinkForm.css';
const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3 tc'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
        <div className='dfr'>
          <div id='inputContainer' className="dfr form pa3 br3 shadow-5">
            <input id='formInput' className='f4 ma2 bn shadow-1 center br3' type="text" />
            <button 
           id='formButton' className=' shadow-1 grow f4 ma2 link dib white br3 bg-dark-gray'>Detect</button>
          </div>
        </div>
    </div>
  );
}

export default ImageLinkForm;