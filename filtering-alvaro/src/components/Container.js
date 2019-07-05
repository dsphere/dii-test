import React from 'react'
import Filters from './Filters'
import PlayersTable from './PlayersTable'

const Container = (props) => {
  return(
    <React.Fragment>
      <Filters displayAll={props.displayAll} all={props.all} handleFilterChange={props.handleFilterChange} getAll={props.getAll}/>
      <PlayersTable handleChangeInputEdit={props.handleChangeInputEdit} savePlayer={props.savePlayer} handleChangeDropdownEdit={props.handleChangeDropdownEdit} disabled={props.disabled} playerToEdit={props.playerToEdit} editUser={props.editUser} players={props.players} />
    </React.Fragment>
  )
}

export default Container
