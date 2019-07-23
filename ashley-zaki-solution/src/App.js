import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import SearchContainer from './containers/SearchContainer'
import Results from './containers/Results'
import './App.css';

class App extends Component {
  state = {
    allPlayers: [],
    filteredPlayers: [],
    searchTerm: "",
  }

  componentDidMount() {
    fetch(`https://dii-test.s3.amazonaws.com/players.json`)
      .then(res => res.json())
      .then(playerData => {
        for (let i = 0; i < playerData.length; i++) {
          playerData[i].id = i + 1
        }
        this.setState({
          allPlayers: playerData,
          filteredPlayers: playerData,
        })
      })
  }

  handleSearch = (e, { age, gender, state, status }) => {
    this.setState({
      filteredPlayers: this.state.allPlayers.filter(player => {
        let result = true
        if (age) {
          result = (() => {
            if(age.indexOf('-') > -1) { // interval
              const [left, right] = age.split('-')
              console.log(left, right)
              if(parseInt(right) >= parseInt(left)) {
                return player.age >= left && player.age <= right
              } else {
                return false
              }
            } else {
              return player.age == age
            }
          })()
        }
        if (gender)
          result = result && (player.gender === gender)
        if (state)
          result = result && (player.state === state)
        if (status)
          result = result && (player.status === status)
        return result
      })
    })
  }

  editPlayerInfo = (playerInfo) => {
    const playerIndex = this.state.allPlayers.findIndex(player => player.id === playerInfo.id)
    const allPlayersCopy = [...this.state.allPlayers]
    allPlayersCopy[playerIndex] = playerInfo
    this.setState({
      allPlayers: allPlayersCopy,
      filteredPlayers: allPlayersCopy,
    })
  }

  render() {
    return (
      <Container>
        <SearchContainer
          handleSearch={this.handleSearch}
        />
        <Results
          allPlayers={this.state.filteredPlayers}
          editPlayerInfo={this.editPlayerInfo}
        />
      </Container>
    )
  }
}

export default App
