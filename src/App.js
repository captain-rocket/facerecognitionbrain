import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ImageDetectInterface from './components/ImageDetectInterface/ImageDetectInterface';
import Profile from './components/Profile/Profile';

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
    fetch('https://agile-coast-50768.herokuapp.com/imageUrl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      input: this.state.input
    })
  })
    .then(response => response.json())
    .then(response => {
    if (response) {
      fetch('https://agile-coast-50768.herokuapp.com/image', {
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

onRouteChange = (route) => {
  switch (route) {
    case 'signout':
      this.setState(initialState)
      break;
    case 'home':
      this.setState({isSignedIn: true})
      document.getElementById('profileLink').style.display = 'block';
        document.getElementById('homeLink').style.display = 'none';
      break;
      case 'profile':
        this.setState({route: 'profile'})
        document.getElementById('homeLink').style.display = 'block';
        document.getElementById('profileLink').style.display = 'none';
        break;
    default: 
      break;
  }
  route === 'signout'
  ?
    this.setState({route: 'signin'})
  :  
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