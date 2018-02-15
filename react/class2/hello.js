import React from 'react';

export class Hello extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			msg : 'Hello jfbjdbsjbs', 
			msg2 : 'this is content'
		}
	}
	update(event) {
		var inpMsg = event.target.value;
		//console.log(event.target.value);
		//this.setState({msg : event.target.value});
		// this setState will modify other props
		// it only update the properties we needs.
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