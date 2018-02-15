import React from 'react';
import {Widget} from './Widget';
  
  export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message : 'default state value'
		};
		this.update = this.update.bind(this);
	}

	update(event) {
		var inpMsg = event.target.value;
		this.setState(function(prevState, props){
			return {message: inpMsg};
		})
	}

	render() {
		return (
			<div>
				<h1>this is app component</h1>
				<div> The below are Widget component </div>
				<input type="text" onKeyUp={this.update}/>
				<Widget msg={this.state.message} />
				<Widget msg={this.state.message} />
				<Widget msg={this.state.message} />
				<Widget msg={this.state.message} />
				<Widget msg={this.state.message} />
			</div>
		)
	}

}