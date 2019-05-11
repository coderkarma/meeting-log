import React, { Component } from 'react';
import { Link } from '@reach/router';

class Welcome extends Component {
	render() {
        const { user } = this.props;
        
		return (
			<div className="text-center mt-4">
            <span className="text-secondary font-weight-bold pl-1">
				Welcome {user}
				<Link to="/" className="font-weight-bold pl-1">
                Logout
                </Link>
                </span> 
			</div>
		);
	}
}
export default Welcome;
