import React from 'react'
import { Table, Icon, Input, Dropdown, Button } from 'semantic-ui-react'
import { stateOptions, genderOptions, statusOptions} from "./../misc/DropdownOptions";

const PlayersTable = (props) => {
  return(
    <React.Fragment>
      { props.players.length === 1 ? <p>{props.players.length} result</p> : <p>{props.players.length} results</p> }
      <Table style={{width: "80%", margin: "0 auto"}} basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{width: "300px"}}>Name</Table.HeaderCell>
            <Table.HeaderCell style={{width: "50px"}}>Age</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>State</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.players.map((player, i) =>
          <Table.Row key={i} player-id={player.id} className="table-row">
              <Table.Cell><Input onChange={(e) => {props.handleChangeInputEdit(e, player.id)}} transparent={true} style={{width: "60%", border: "none"}} type="text" disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} name="name" value={player.name}/></Table.Cell>
              <Table.Cell><Input onChange={(e) => {props.handleChangeInputEdit(e, player.id)}} transparent={true} style={{width: "60%", border: "none"}} type="number" disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} name="age" value={player.age}/></Table.Cell>
              <Table.Cell><Dropdown onChange={(_, data) => {props.handleChangeDropdownEdit(data.value, "gender")}} transparent="true" options={genderOptions} disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} value={player.gender} /></Table.Cell>
              <Table.Cell><Dropdown onChange={(_, data) => {props.handleChangeDropdownEdit(data.value, "state")}} transparent="true" options={stateOptions} disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} value={player.state} /></Table.Cell>
              <Table.Cell>
                {props.playerToEdit && player.id === props.playerToEdit.id ?
                <Dropdown onChange={(_, data) => {props.handleChangeDropdownEdit(data.value, "status")}} transparent="true" options={statusOptions} disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} value={player.status} /> :
                <Icon name={player.status === "active" ? "check" : "close"} color={player.status === "active" ? "green" : "red"}/> }
              </Table.Cell>
              {props.playerToEdit && player.id === props.playerToEdit.id ?
              <Table.Cell><Button onClick={props.savePlayer} color="blue">Save</Button></Table.Cell> :
              <Table.Cell><Icon name="edit" onClick={() => {props.editUser(player)}}/></Table.Cell> }
          </Table.Row> )}
        </Table.Body>
      </Table>
  </React.Fragment>
  )
}

export default PlayersTable
