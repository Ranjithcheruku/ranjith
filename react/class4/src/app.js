import React from 'react';
import ReactDOM from 'react-dom';
import { Widget } from './Widget';



/*
	stateful component, smart component, class component
	-- when we need state
	-- when we use life cycle methods

	-- we also have access to props 
*/



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
		//console.log(this.refs.myWidget);
		
	}

	removeWidget(event) {
		let widgetNode = ReactDOM.findDOMNode(this.refs.myWidget)
		ReactDOM.unmountComponentAtNode(widgetNode);
	}

	render() {
		return (
			<div>
				<h1>This is app component</h1>
				<input type="text" onKeyUp={this.update} />
				<button onClick={this.removeWidget}>unmount Widget</button>
				<button onClick={this.addWidget}>add Widget</button>
				<Widget ref="myWidget" msg={this.state.message} > </Widget>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('app'))