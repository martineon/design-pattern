import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu/Menu.jsx';
import Carousel from './Components/Carousel/Carousel.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Carousel/>
      </div>
    );
  }
}

export default App;
