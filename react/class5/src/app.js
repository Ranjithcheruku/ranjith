import React from 'react';
import ReactDOM from 'react-dom';
import { Widget } from './Widget';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		message : 'default value for message property'
		}
		this.update = this.update.bind(this);
		this.removeWidget = this.removeWidget.bind(this);	
	}
	update(event) {
		let inpMsg = event.target.value;
		this.setState(function(prevState, props){
		return { message : inpMsg }
	})
		}
     addWidget(event) {
		ReactDOM.render(<Widget />, document.getElementById('a'))
	}

	removeWidget(event) {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'));
	}

	render() {
	return (
			<div>
			<button onClick={this.removeWidget}>unmount Widget</button>
			<button onClick={this.addWidget}>add Widget</button>
			</div>
	)
}

}

ReactDOM.render(<App />, document.getElementById('app'))