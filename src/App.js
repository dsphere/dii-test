import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			players: [],
			filteredPlayers: [],
			status: 'All',
			gender: 'All',
			state: 'All',
			age: ''
		};
		this.handleInput = this.handleInput.bind(this);
		// this.filterPlayers = this.filterPlayers.bind(this);
	}

	handleInput(evt) {
		let target = evt.target;
		let value = target.value;
		let name = target.name;
		this.setState({ [name]: value });
	}

	componentDidMount() {
		console.log('componentDidMount');
		axios.get('https://dii-test.s3.amazonaws.com/players.json', { crossDomain: true }).then((players) => {
			console.log(players);
			this.setState({ players: players.data });
		});
	}

	render() {
		console.log('view all players');
		if (this.state.players) {
			return (
				<div>
					Status
					<select name="status" className="select" onChange={this.handleInput}>
						<option value="All">All</option>
						<option value="Active">Active</option>
						<option value="Inactive">Inactive</option>
					</select>
					Gender:
					<select name="gender" className="select" onChange={this.handleInput}>
						<option value="All">All</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					State:
					<select name="state" className="select" onChange={this.handleInput}>
						<option value="All">All</option>
						<option value="AL">AL</option>
						<option value="AK">AK</option>
						<option value="AR">AR</option>
						<option value="AZ">AZ</option>
						<option value="CA">CA</option>
						<option value="CO">CO</option>
						<option value="CT">CT</option>
						<option value="DC">DC</option>
						<option value="DE">DE</option>
						<option value="FL">FL</option>
						<option value="GA">GA</option>
						<option value="HI">HI</option>
						<option value="IA">IA</option>
						<option value="ID">ID</option>
						<option value="IL">IL</option>
						<option value="IN">IN</option>
						<option value="KS">KS</option>
						<option value="KY">KY</option>
						<option value="LA">LA</option>
						<option value="MA">MA</option>
						<option value="MD">MD</option>
						<option value="ME">ME</option>
						<option value="MI">MI</option>
						<option value="MN">MN</option>
						<option value="MO">MO</option>
						<option value="MS">MS</option>
						<option value="MT">MT</option>
						<option value="NC">NC</option>
						<option value="NE">NE</option>
						<option value="NH">NH</option>
						<option value="NJ">NJ</option>
						<option value="NM">NM</option>
						<option value="NV">NV</option>
						<option value="NY">NY</option>
						<option value="ND">ND</option>
						<option value="OH">OH</option>
						<option value="OK">OK</option>
						<option value="OR">OR</option>
						<option value="PA">PA</option>
						<option value="RI">RI</option>
						<option value="SC">SC</option>
						<option value="SD">SD</option>
						<option value="TN">TN</option>
						<option value="TX">TX</option>
						<option value="UT">UT</option>
						<option value="VT">VT</option>
						<option value="VA">VA</option>
						<option value="WA">WA</option>
						<option value="WI">WI</option>
						<option value="WV">WV</option>
						<option value="WY">WY</option>
					</select>
					Age:
					<input name="age" type="number" onChange={this.handleInput} />
					<div>
						<h3>Players</h3>
						{this.state.players.map((player, i) => {
							return (
								<div>
									<h3>Name: {player.name}</h3>
									<h3>Age: {player.age}</h3>
									<h3>State:{player.state}</h3>
									<h3>
										Gender: {player.gender}
										Status: {player.status}
									</h3>
								</div>
							);
						})}
					</div>
				</div>
			);
		} else {
			return <h3>Players</h3>;
		}
	}
}

export default App;
