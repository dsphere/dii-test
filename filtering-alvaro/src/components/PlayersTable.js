import React from 'react'
import { Table, Icon, Popup } from 'semantic-ui-react'

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
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.allPlayers.map((player, i) =>
          <Table.Row key={i} className="table-row">
            <Table.Cell>{player.name}</Table.Cell>
            <Table.Cell>{player.age}</Table.Cell>
            <Table.Cell>{player.gender}</Table.Cell>
            <Table.Cell>{player.state}</Table.Cell>
            <Popup
            content={player.status === "active" ? "Active" : "Inactive"}
            trigger={
            <Table.Cell>
              <Icon name={player.status === "active" ? "check" : "close"} color={player.status === "active" ? "green" : "red"} size="medium"/>
            </Table.Cell>} />

          </Table.Row> )}
        </Table.Body>
      </Table>
  </React.Fragment>
  )
}

export default PlayersTable
