import React, { Component } from 'react';
// import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

class App extends Component {
  render () {
  return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm className='ImageLinkForm'/>
        {/* <FaceRocognition /> */}

      </div>
    );
  }
}

export default App;
