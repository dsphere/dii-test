import React, { Component, Fragment } from 'react'
import EditPlayer from '../components/EditPlayer'
import Player from '../components/Player'
import { Table } from 'react-bootstrap'

class PlayerList extends Component {

    render() {
    // console.log(this.props)
        return (
            <Fragment>
                <EditPlayer />
                <h1>Showing {this.props.allPlayers.length} results</h1>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>State</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allPlayers.map(player =>
                            <Player
                                player={player}
                                key={player.id}
                                editPlayerInfo={this.props.editPlayerInfo}
                            />)
                        }
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}

export default PlayerList