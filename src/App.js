import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

class App extends Component {
  render () {
  return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {/* <FaceRocognition /> */}

      </div>
    );
  }
}

export default App;
