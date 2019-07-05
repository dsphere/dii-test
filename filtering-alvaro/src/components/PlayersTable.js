import React from 'react'
import { Table, Icon, Popup, Input, Dropdown, Button } from 'semantic-ui-react'
import { stateOptions, genderOptions, statusOptions} from "./../misc/DropdownOptions";

const PlayersTable = (props) => {
  return(
    <React.Fragment>
      <Table style={{width: "80%", margin: "0 auto"}} basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>State</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.players.map((player, i) =>
          <Table.Row key={i} player-id={player.id} className="table-row">
              <Table.Cell><Input onChange={props.handleChange} transparent style={{width: "60%", border: "none"}} type="text" disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} value={player.name}/></Table.Cell>
              <Table.Cell><Input transparent style={{width: "60%", border: "none"}} type="number" disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} value={player.age}/></Table.Cell>
              <Table.Cell><Dropdown transparent options={genderOptions} disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} value={player.gender} /></Table.Cell>
              <Table.Cell><Dropdown transparent options={stateOptions} disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} value={player.state} /></Table.Cell>
              <Table.Cell>
              {props.playerToEdit && player.id === props.playerToEdit.id ?
              <Dropdown transparent options={statusOptions} disabled={props.playerToEdit && player.id === props.playerToEdit.id ? false : true} value={player.status} /> :
              <Icon name={player.status === "active" ? "check" : "close"} color={player.status === "active" ? "green" : "red"}/> }
              </Table.Cell>
              {props.playerToEdit && player.id === props.playerToEdit.id ?
              <Table.Cell><Button color="blue">Save</Button></Table.Cell> :
              <Table.Cell><Icon name="edit" onClick={() => {props.editUser(player)}}/></Table.Cell> }
          </Table.Row> )}
        </Table.Body>
      </Table>
  </React.Fragment>
  )
}

export default PlayersTable
