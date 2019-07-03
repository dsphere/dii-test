import React from 'react';
import '../App.css';
import Nav from './Nav'
import Container from './Container'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      allPlayers: null
    }
  }

  componentDidMount(){
    this.getPlayers()
  }

  getPlayers = () => {
    fetch('https://dii-test.s3.amazonaws.com/players.json')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        allPlayers: json
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Container allPlayers={this.state.allPlayers}/>
      </div>
    );
  }
}

export default App;
