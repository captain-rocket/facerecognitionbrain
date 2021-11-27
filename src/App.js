import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ImageDetectInterface from './components/ImageDetectInterface/ImageDetectInterface';
import Profile from './components/Profile/Profile';
// import Logo from './components/Logo/Logo';
// import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import Rank from './components/Rank/Rank';
// import FaceRecognition from './components/FaceRecognition/FaceRecognition';




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

const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      user: {
     id: '',
     name: '',
     email: '',
     entries: 0,
     joined: '',
     },
      isSignedIn: false
    }
  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }
loadUser = (data) => {
  this.setState({user: {
     id: data.id,
     name: data.name,
     email: data.email,
     entries: data.entries,
     joined: data.joined
  }}) 
}

//  componentDidMount() {
//    fetch('http://localhost:3000/')
//    .then(response => response.json())
//    .then(console.log)
//  }

calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }  
}



 displayFaceBox = (box) => {
   this.setState({box: box})
 }

onInputChange = (event) => {
  this.setState({input: event.target.value});  
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
    fetch('http://localhost:3000/imageUrl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      input: this.state.input
    })
  })
    .then(response => response.json())
    .then(response => {
    if (response) {
      fetch('http://localhost:3000/image', {
     method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: this.state.user.id
    })
  })
  .then(response => response.json())
  .then(count => {
    this.setState(Object.assign(this.state.user, { entries: count }))
  })
  .catch(console.log)
}
  this.displayFaceBox(this.calculateFaceLocation(response))
})
  .catch(err => console.log(err));
}

onRouteChangeOld = (route) => {
  if (route === 'signout') {
    this.setState(initialState)
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route})
} 

onRouteChange = (route) => {
  switch (route) {
    case 'signout':
      this.setState(initialState)
      break;
    case 'home':
      this.setState({isSignedIn: true})
      setTimeout(() => {
        document.getElementById('homeLink').style.display = 'none';
      }, 0);
      break;
      case 'profile':
        this.setState({route: 'profile'})
        document.getElementById('homeLink').style.display = 'block';
        break;
    default:
      
      break;
  }
  this.setState({route: route})
}


  render () {
   const { isSignedIn, imageUrl, route, box } = this.state;
  return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <div>
        { 
          route === 'home' 
            ? 
              <ImageDetectInterface {...this.state.user}
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                box={box}
                imageUrl={imageUrl}
                />
            :
          route === 'profile'
            ?
              <Profile {...this.state.user}/>
            : 
          route === 'signin' 
            ? 
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : 
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        }
        </div>
      </div>
    );
  }
}

export default App;
