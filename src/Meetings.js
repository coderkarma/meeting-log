import React, { Component } from 'react';

class Meetings extends Component {
	render() {
		const { user } = this.props;
		return (
			<div className="text-center mt-4">
				<span className="text-secondary font-weight-bold pl-1">
					Welcome {user}
					<a href="/" className="font-weight-bold pl-1">
						Meetings
					</a>
				</span>
			</div>
		);
	}
}
export default Meetings;
