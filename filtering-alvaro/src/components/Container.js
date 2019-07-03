import React from 'react'
import Filters from './Filters'
import PlayersTable from './PlayersTable'

const Container = (props) => {
  return(
    <React.Fragment>
      <Filters applyFilters={props.applyFilters} status={props.status} getState={props.getState} uniqueStates={props.uniqueStates} gender={props.gender} handleCheckBox={props.handleCheckBox} handleChangeAge={props.handleChangeAge} displayAll={props.displayAll} getAll={props.getAll}/>
      {props.filteredPlayers ? <PlayersTable isEdit={props.isEdit} editUser={props.editUser} filteredPlayers={props.filteredPlayers}/> : null}
    </React.Fragment>
  )
}

export default Container
