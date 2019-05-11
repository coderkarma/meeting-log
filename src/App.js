import React, { Component } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Meeting from './Meetings';

import { Router, Link } from '@reach/router';

class App extends Component {
	state = {
		user: null
	};

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
