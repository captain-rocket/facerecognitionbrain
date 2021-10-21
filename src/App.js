import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRocognition from './components/FaceRocognition/FaceRocognition';

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
      imageUrl: ''
    }
  }

onInputChange = (event) => {
  this.setState({input: event.target.value});  
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then( function(response) {
    console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    
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
        <FaceRocognition imageUrl={this.state.imageUrl}/>

      </div>
    );
  }
}

export default App;
