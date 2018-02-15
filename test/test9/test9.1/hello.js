import React from 'react';
import ReactDOM from 'react-dom';

export class Hello extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			msg : 'Hello jfbjdbsjbs', 
			msg2 : 'this is ranjith'
		}
	}
	update(event) {
		var inpMsg = event.target.value;
		
		this.setState(function(prevState, props){
			return {msg : inpMsg}
		});
	}
	render() {
		return  (
			<div>
				<input onKeyUp={this.update.bind(this)} type="text"/>
				<h1>{this.state.msg}</h1>
				<div>{this.state.msg2}</div>
			</div>
		)
	}
}
ReactDOM.render(<Hello/>,document.getElementById('app'))