import React, { Component } from 'react';
import {Link } from '@reach/router'

class Register extends Component {
	render() {
		const { user } = this.props;
		return (
			<div className="text-center mt-4">
				<span className="text-secondary font-weight-bold pl-1">
					Welcome {user}
					<Link to="/" className="font-weight-bold pl-1">
						<h1>Register</h1>
					</Link>
				</span>
			</div>
		);
	}
}
export default Register;
