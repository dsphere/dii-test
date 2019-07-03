import React from 'react';
import '../App.css';
import Nav from './Nav'
import Container from './Container'

class App extends React.Component {
  constructor() {
    super()
    this.state={

    }
  }
  
  render(){
    return (
      <div className="App">
        <Nav />
        <Container />
      </div>
    );
  }
}

export default App;
