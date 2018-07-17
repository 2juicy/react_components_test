import React, { Component } from 'react';
import Notes from './components/Notes/Notes'
import Title from './components/Title/Title'
import './App.css';

class App extends Component {
  


  render() {
    
    return (
      <div>
        <Title>React Component Test</Title>
        <Notes />
      </div>
    );
  }
}

export default App;
