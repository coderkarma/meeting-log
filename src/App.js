import React, { Component } from 'react';
import { Router } from '@reach/router';
import firebase from './Firebase';

import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Meeting from './Meetings';

class App extends Component {
	state = {
		user: null
	};

	// check the database when component is mounting
	componentDidMount() {
		const ref = firebase.database().ref('user');

		ref.on('value', snapshot => {
			let FBUser = snapshot.val();
			this.setState({
				user: FBUser
			});
		});
	}

	render() {
		return (
			<div>
				<Navigation user={this.state.user} />
				{this.state.user && <Welcome user={this.state.user} />}

				<Router>
					<Home path="/" user={this.state.user} />
					<Login path="/login" user={this.state.user} />
					<Register path="/register" user={this.state.user} />
					<Meeting path="/meetings" user={this.state.user} />
				</Router>
			</div>
		);
	}
}
export default App;
