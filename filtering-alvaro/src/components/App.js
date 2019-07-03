import React from 'react';
import '../App.css';
import Nav from './Nav'
import Container from './Container'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      allPlayers: null,
      filteredPlayers: null,
      displayAll: true,
      ageFrom: "",
      ageTo: "",
      gender: "",
      status: "",
      selectedState: "",
      filtersApplied: {},
      isEdit: false
    }
  }

  componentDidMount(){
    this.getPlayers()
  }

  getPlayers = () => {
    let counter = 0
    fetch('https://dii-test.s3.amazonaws.com/players.json')
    .then(response => response.json())
    .then(json => {
      json.map(player => player["id"] = counter++)
      // let states = json.map(players => players.state)
      // let uniqueStates = [...new Set(states)].sort()
      this.setState({
        allPlayers: json,
        filteredPlayers: json
      })
    })
  }

  getAll = () => {
    this.setState({
      displayAll: !this.state.displayAll
    })
  }

  handleChangeAge = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }

  handleCheckBox = (e, {name}) => {
    this.setState({
      [name]: e.target.innerText.toLowerCase()
    })
  }

  getState = (e, {value}) => {
    this.setState({
      selectedState: value
    })
  }

  applyFilters = () => {
    let filteredPlayers = this.state.allPlayers.filter(players => players.gender === this.state.gender || players.state === this.state.selectedState || players.status === this.state.status)
    this.setState({
      filteredPlayers: filteredPlayers
    })
  }

  editUser = (player) => {
    this.setState({
      isEdit: true
    })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Container isEdit={this.state.isEdit} editUser={this.editUser} applyFilters={this.applyFilters} status={this.state.status} getState={this.getState} uniqueStates={this.state.uniqueStates} gender={this.state.gender} handleCheckBox={this.handleCheckBox} handleChangeAge={this.handleChangeAge} displayAll={this.state.displayAll} getAll={this.getAll} filteredPlayers={this.state.filteredPlayers}/>
      </div>
    );
  }
}

export default App;
