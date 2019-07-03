import React from 'react';
import '../App.css';
import Nav from './Nav'
import Container from './Container'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      allPlayers: null,
      displayAll: true,
      ageFrom: "",
      ageTo: "",
      gender: "",
      status: "",
      selectedState: ""
    }
  }

  componentDidMount(){
    this.getPlayers()
  }

  getPlayers = () => {
    fetch('https://dii-test.s3.amazonaws.com/players.json')
    .then(response => response.json())
    .then(json => {
      // let states = json.map(players => players.state)
      // let uniqueStates = [...new Set(states)].sort()
      this.setState({
        allPlayers: json
      })
    })
  }

  getAll = () => {
    let allPlayers = [...this.state.allPlayers]
    this.setState({
      displayAll: !this.state.displayAll,
      allPlayers: allPlayers
    })
  }

  handleChangeAge = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }

  handleCheckBox = (e, {name}) => {
    this.setState({
      [name]: e.target.innerText
    })
  }

  getState = (e, {value}) => {
    this.setState({
      selectedState: value
    })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Container getState={this.getState} uniqueStates={this.state.uniqueStates} gender={this.state.gender} handleCheckBox={this.handleCheckBox} handleChangeAge={this.handleChangeAge} displayAll={this.state.displayAll} getAll={this.getAll} allPlayers={this.state.allPlayers}/>
      </div>
    );
  }
}

export default App;
