import React, { Component } from 'react';
import Home from './Home';
class App extends Component {
 state = {
   user: null
 }

	render() {
		return <Home user={this.state.user}/>;
	}
}
export default App;
