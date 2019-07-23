import React, {Component, Fragment} from 'react'
import PlayerList from '../components/PlayerList'

class Result extends Component {

  render() {
   
    return (
      <Fragment>
          <PlayerList 
            allPlayers={this.props.allPlayers}
            editPlayerInfo={this.props.editPlayerInfo}
          />
      </Fragment>
    )
  }
}

export default Result