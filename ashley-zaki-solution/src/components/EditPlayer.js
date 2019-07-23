import React, { Component, Fragment } from 'react'
import { Modal, Button, Form, Col, } from 'react-bootstrap'


class EditPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            name: this.props.name,
            age: this.props.age,
            gender: this.props.gender,
            state: this.props.state,
            status: this.props.status,
        }
    }

    onTypingChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSaveButton = (e) => {
        e.preventDefault()
        this.props.edit(this.state)
        e.target.reset()
        this.props.onHide()
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form onChange={this.onTypingChange} onSubmit={this.handleSaveButton}>

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Player Information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="Name" defaultValue={this.state.name} name="name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" defaultValue={this.state.age} name="age" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Label>Gender</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Male"
                                id="gender"
                                name="gender"
                                value='male'
                                defaultChecked={this.state.gender === 'male'}

                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                id="gender"
                                name="gender"
                                value="female"
                                defaultChecked={this.state.gender === 'female'}

                            />
                            <Form.Check
                                type="radio"
                                label="Other"
                                id="gender"
                                name="gender"
                                value="other"
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group sm={6} as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" name="state" defaultValue={this.state.state}>
                                    <option></option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group sm={6} as={Col} controlId="formGridState">
                                <Form.Label>Status</Form.Label>
                                <Form.Control as="select" name="status" defaultValue={this.state.status}>
                                    <option></option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" value="submit">
                            Save
                    </Button>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Form>

            </Modal>
        )
    }
}

export default EditPlayer
