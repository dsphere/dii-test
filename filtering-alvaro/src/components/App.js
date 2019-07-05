import React from 'react';
import '../App.css';
import Nav from './Nav'
import Container from './Container'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      allPlayers: [],
      filteredPlayers: [],
      filters: {
        allFilter: "noFilter",
        ageFilter: "noFilter",
        genderFilter: "noFilter",
        stateFilter: "noFilter",
        statusFilter: "noFilter"
      },
      playerToEdit: null,
      all: true,
      disabled: true
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
      this.setState({
        allPlayers: json,
        filteredPlayers: json
      });
    })
  }

  handleFilterChange = (newValue, filter) => {
    console.log(newValue, filter)
    let filters = {...this.state.filters}
    filters[filter] = newValue
    this.setState({
      filters: filters
    });
  };

  displayAll = () => {
    this.setState({
      all: !this.state.displayAll
    });
  }

  filteredPlayers = () => {
    const {
      allFilter,
      ageFilter,
      genderFilter,
      stateFilter,
      statusFilter
    } = this.state.filters

    let players = [...this.state.filteredPlayers];

    if(allFilter !== "noFilter"){
      this.setState({
        filters: {
          allFilter: "noFilter",
          ageFilter: "noFilter",
          genderFilter: "noFilter",
          stateFilter: "noFilter",
          statusFilter: "noFilter"
        }
      });
      return players;
    }

    if(genderFilter !== "noFilter"){
      let allFilter = "noFilter"
      players = players.filter(player => {
        return player.gender === genderFilter;
      });
    }

    if(stateFilter !== "noFilter"){
      players = players.filter(player => {
        return player.state === stateFilter;
      });
    }

    if(statusFilter !== "noFilter"){
      players = players.filter(player => {
        return player.status === statusFilter;
      });
    }

    if(statusFilter !== "noFilter"){
      players = players.filter(player => {
        return player.status === statusFilter;
      });
    }

    return players;
  };

  editUser = (playerObj) => {
    this.setState({
      playerToEdit: playerObj,
      disabled: !this.state.disabled
    });
  }

  handleChangeDropdownEdit = (value, fieldName) => {
    let playerId = this.state.playerToEdit.id
    let allPlayers = [...this.state.allPlayers]
    allPlayers.find(player => player.id === playerId)[fieldName] = value
    this.setState({
      allPlayers: allPlayers
    });
  }

  handleChangeInputEdit = (e, playerId) => {
    let allPlayers = [...this.state.allPlayers]
    allPlayers.find(player => player.id === playerId)[e.target.name] = e.target.value
    this.setState({
      allPlayers: allPlayers
    })
  }

  savePlayer = () => {
    this.setState({
      playerToEdit: null
    })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Container savePlayer={this.savePlayer} handleChangeInputEdit={this.handleChangeInputEdit} handleChangeDropdownEdit={this.handleChangeDropdownEdit} disabled={this.state.disabled} displayAll={this.displayAll} all={this.state.all} playerToEdit={this.state.playerToEdit} isEdit={this.state.isEdit} editUser={this.editUser} players={this.filteredPlayers()} handleFilterChange={this.handleFilterChange} getAll={this.getAll} />
      </div>
    );
  }
}

export default App;
