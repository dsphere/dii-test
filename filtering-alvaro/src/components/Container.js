import React from 'react'
import Filters from './Filters'
import PlayersTable from './PlayersTable'
import EditUser from './EditUser'

const Container = (props) => {
  return(
    <React.Fragment>
      <Filters displayAll={props.displayAll} all={props.all} handleFilterChange={props.handleFilterChange} getAll={props.getAll}/>
      <PlayersTable playerToEdit={props.playerToEdit} isEdit={props.isEdit} editUser={props.editUser} players={props.players} />
    </React.Fragment>
  )
}

export default Container
