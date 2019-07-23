import React, { Component, Fragment } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

class SearchFilter extends Component {
    constructor() {
        super()
        this.state = {
            age: '',
            gender: '',
            state: '',
            status: '',
        }
    }

    onFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        }, () => {
            this.props.handleSearch(e, this.state)
            e.persist()
        })
    }

    render() {

        return (
            <Fragment>
                <h1>Search</h1>
                <Form onChange={this.onFormChange}>
                    <Form.Row>
                        <Form.Group sm={3} as={Col} controlId="formGridAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter age or range" name="age" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group id="formGridCheckbox">
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Male"
                            id="gender"
                            name="gender"
                            value="male"
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            id="gender"
                            name="gender"
                            value="female"
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
                        <Form.Group sm={3} as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" name="state">
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
                    </Form.Row>

                    <Form.Row>
                        <Form.Group sm={3} as={Col} controlId="formGridState">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" name="status">
                                <option></option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Fragment>
        )
    }
}

export default SearchFilter