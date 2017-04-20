import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Menu from './Components/Menu/Menu.jsx';
import Notif from './Components/Notif/Notif.jsx';
import Carousel from './Components/Carousel/Carousel.jsx';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Notif/>
        <Menu/> */}
        <Carousel/>
      </div>
    );
  }
}

export default App;
