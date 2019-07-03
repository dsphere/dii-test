import React from 'react'
import Filters from './Filters'
import PlayersTable from './PlayersTable'

const Container = (props) => {
  return(
    <React.Fragment>
      <Filters getState={props.getState} uniqueStates={props.uniqueStates} gender={props.gender} handleCheckBox={props.handleCheckBox} handleChangeAge={props.handleChangeAge} displayAll={props.displayAll} getAll={props.getAll}/>
      {props.allPlayers ?
      <PlayersTable allPlayers={props.allPlayers}/> : null}
    </React.Fragment>
  )
}

export default Container
