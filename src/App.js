import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component {
  c = 'John';
  render() {
    return (
      <div className=''>
        <Navbar></Navbar>
        <News></News>
      </div>
    );
  }
}

export default App;