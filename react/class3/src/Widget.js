import React from 'react';
let counter = 0;

export class Widget extends React.Component{
	constructor(props) {
		super(props);
		console.log('Widget Component constructor executed')
	}
	componentWillMount() {
		console.log('Widget Component componentWillMount executed')
		
	}
	componentDidMount() {
		console.log('Widget Component componentDidMount executed');
		
	}

	componentWillReceiveProps(nextProps) {
		
		console.log('Widget Component componentWillReceiveProps executed', this.props, nextProps);
	}

	shouldComponentUpdate(nextProps, nextState){
		
		console.log(counter)
		if(counter%5===0) {
			return true;
		}
		else {
			return false;
		}
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('Widget Component componentWillUpdate executed')
	}
	componentDidUpdate(prevprops, prevState) {
		console.log('Widget Component componentDidUpdate executed')
	}

	render() {
		// in mouting render method is called once
		// in updating every time there is an update in state or props it will be invoked
		console.log('render method executed')
		return (
			<div>
				<h2>This is a Widget</h2>
				<div>{this.props.msg}</div>
			</div>
		)
	}
	componentWillUnmount() {
		// after the render method is executed
		// timeout ajax calls
		// remove timers
		// closr connections web socket connections
		console.log('Widget Component componentWillUnmount executed')
	}

}