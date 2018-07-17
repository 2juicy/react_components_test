import React, { Component } from 'react';
import Notes from './components/Notes/Notes'
import Title from './components/Title/Title'
import Login from './components/Login/Login'
import Avatar from './components/Avatar/Avatar'
import './App.css';

class App extends Component {
  


  render() {
    
    return (
      <div>
        <Title>React Component Test</Title>
        
        <Avatar />
        <Login />
        <Notes />     
      </div>
    );
  }
}

export default App;
