import React from 'react'
import Filters from './Filters'
import PlayersTable from './PlayersTable'

const Container = (props) => {
  return(
    <React.Fragment>
      <Filters />
      {props.allPlayers ? <PlayersTable allPlayers={props.allPlayers}/> : null}
    </React.Fragment>
  )
}

export default Container
