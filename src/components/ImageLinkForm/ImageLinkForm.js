import React from "react";
import './ImageLinkForm.css';
const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3 tc'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
        <div className='dfr'>
          <div className="dfr form pa4 br3 shadow-5">
            <input className='f4 bn shadow-1 w-80 center br3' type="text" />
            <button className='w-20 shadow-1 grow f4 link dib white br3 bg-dark-gray'>Detect</button>
          </div>
        </div>
    </div>
  );
}

export default ImageLinkForm;