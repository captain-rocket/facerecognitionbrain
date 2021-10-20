import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
 apiKey: '4c689cfbfe1c4a27b7faebaa29fef359'
});

const particlesOptions = {
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

onInputChange = (event) => {
  console.log(event.target.value);  
}

onButtonSubmit = () => {
  app.models.predict(Clarifai.FACE_DETECT_MODEL, 'https://www.getolympus.com/media/wysiwyg/cms_pages/black-and-white-street-photography/OLY.B-W_Tips_6.jpg').then( function(response) {

  },
  function(err) {
    
  }
  );
}

  render () {
  return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        className='ImageLinkForm'/>
        {/* <FaceRocognition /> */}

      </div>
    );
  }
}

export default App;
