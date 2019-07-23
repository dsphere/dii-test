import React, { Component, Fragment } from 'react'
import EditPlayer from '../components/EditPlayer'
import { ButtonToolbar, Button,} from 'react-bootstrap'

class Player extends Component {

    state = {
        clicked: false,
        modalShow: false,
    }

    handleEditButton = (e) => {
        this.setState({
            clicked: true,
            modalShow: true,
        })
    }


    render() {
        let modalClose = () => this.setState({ modalShow: false })
        // console.log(this.props)
        const pointer = {cursor: 'pointer'}
        return (
            <Fragment>
                <tr>
                    <td>{this.props.player.name}</td>
                    <td>{this.props.player.age}</td>
                    <td>{this.props.player.gender}</td>
                    <td>{this.props.player.state}</td>
                    <td>{this.props.player.status}</td>
                    <td>
                        <i className="fa fa-edit" onClick={this.handleEditButton} style={pointer}></i>
                        {this.state.clicked ? 
                        <EditPlayer
                            edit={this.props.editPlayerInfo}
                            show={this.state.modalShow}
                            onHide={modalClose}
                            name={this.props.player.name}
                            age={this.props.player.age}
                            gender={this.props.player.gender}
                            state={this.props.player.state}
                            status={this.props.player.status}
                            id={this.props.player.id}
                        />
                        :null
                        }
                    </td>
                </tr>
            </Fragment>
        )
    }
}

export default Player
