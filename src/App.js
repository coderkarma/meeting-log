import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Firebase';

import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Meeting from './Meetings';

class App extends Component {
	state = {
		user        : null,
		displayName : null,
		userID      : null
	};

	// check the database when component is mounting
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged((FBUser) => {
			if (FBUser) {
				this.setState({
					user        : FBUser,
					displayName : FBUser.displayName,
					userID      : FBUser.uid
				});
			}
		});
	};

	registerUser = (userName) => {
		// check to see if the event has been triggered
		firebase.auth().onAuthStateChanged((FBUser) => {
			FBUser.updateProfile({
				displayName : userName
			}).then(() => {
				this.setState({
					user        : FBUser,
					displayName : FBUser.displayName,
					userID      : FBUser.uid
				});
				navigate('/meetings');
			});
		});
	};

	logoutUser = (e) => {
		e.preventDefault();
		this.setState({
			displayName : null,
			userID      : null,
			user        : null
		});

		firebase.auth().signOut().then(() => {
			navigate('/login');
		});
	};

	addMeeting = (meetingName) => {
		const ref = firebase.database().ref(`meetings/${this.state.user.uid}`);
		ref.push({ meetingName: meetingName });
	};

	render() {
		return (
			<div>
				<Navigation
					user={this.state.user}
					logoutUser={this.logoutUser}
				/>
				{this.state.user && (
					<Welcome
						userName={this.state.displayName}
						logoutUser={this.logoutUser}
					/>
				)}

				<Router>
					<Home path='/' user={this.state.user} />
					<Login path='/login' user={this.state.user} />

					<Register
						path='/register'
						user={this.state.user}
						registerUser={this.registerUser}
					/>

					<Meeting
						path='/meetings'
						user={this.state.user}
						addMeeting={this.addMeeting}
					/>
				</Router>
			</div>
		);
	}
}
export default App;
