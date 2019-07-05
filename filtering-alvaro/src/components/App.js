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

    // let allPlayers = [...this.state.allPlayers]
    let players = [...this.state.filteredPlayers];

    // if(allFilter === "all"){
    //
    //   players = allPlayers.filter(player => {
    //     return player;
    //   });
    // }

    if(genderFilter !== "noFilter"){
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
    })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Container disabled={this.state.disabled} displayAll={this.displayAll} all={this.state.all} playerToEdit={this.state.playerToEdit} isEdit={this.state.isEdit} editUser={this.editUser} players={this.filteredPlayers()} handleFilterChange={this.handleFilterChange} getAll={this.getAll} />
      </div>
    );
  }
}

export default App;
