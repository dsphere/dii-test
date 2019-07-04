import React from 'react'
import { Table, Icon, Popup, Input } from 'semantic-ui-react'

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
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.players.map((player, i) =>
          <Table.Row key={i} player-id={player.id} className="table-row">
            {props.playerToEdit && player.id === props.playerToEdit.id ? <Input style={{width: "60%"}} size="tiny" type='text' value={player.name}/> : <Table.Cell>{player.name}</Table.Cell> }
            {props.playerToEdit && player.id === props.playerToEdit.id ? <Input style={{width: "60%"}} size="tiny" type='text' value={player.age}/> :  <Table.Cell>{player.age}</Table.Cell> }
            {props.playerToEdit && player.id === props.playerToEdit.id ? <Input style={{width: "60%"}} size="tiny" type='text' value={player.gender.charAt(0).toUpperCase() + player.gender.slice(1)}/> : <Table.Cell>{player.gender.charAt(0).toUpperCase() + player.gender.slice(1)}</Table.Cell> }
            {props.playerToEdit && player.id === props.playerToEdit.id ? <Input style={{width: "60%"}} size="tiny" type='text' value={player.state}/> :  <Table.Cell>{player.state}</Table.Cell> }
            <Popup
            content={player.status === "active" ? "Active" : "Inactive"}
            trigger={
            <Table.Cell>
              <Icon name={player.status === "active" ? "check" : "close"} color={player.status === "active" ? "green" : "red"}/>
            </Table.Cell>} />
            <Popup content="Edit" trigger={<Table.Cell><Icon name="edit" onClick={() => {props.editUser(player)}}/></Table.Cell>} />
          </Table.Row>)}
        </Table.Body>
      </Table>
  </React.Fragment>
  )
}

export default PlayersTable
