import React from 'react';
import ReactDOM from 'react-dom';
import { Widget } from './Widget';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message : 'default value for message '
		}
		this.update = this.update.bind(this);	
	}
	update(event) {
		let inpMsg = event.target.value;
		this.setState(function(prevState, props){
			return { message : inpMsg }
		})
	}

	render() {
		return (
			<div>
				<h1>This is app component</h1>
				<input type="text" onKeyUp={this.update} />
				<Widget msg={this.state.message}> </Widget>
			</div>
		)
	}

}


ReactDOM.render(<App />, document.getElementById('app'))