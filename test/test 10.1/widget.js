import React from 'react';
let counter = 0;

export class Widget extends React.Component{
	constructor(props) {
		super(props);
		console.log('Widget firstcomponent constructor executed')
	}
	componentWillMount() {
		console.log('Widget secondcomponent componentWillMount executed')
		
	}
	componentDidMount() {
		console.log('Widget thirdcomponent componentDidMount executed');
		
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
		console.log('Widget componentWillUpdate executed')
	}
	componentDidUpdate(prevprops, prevState) {
		console.log('Widget  componentDidUpdate executed')
	}

	render() {
		
		console.log('render will be executed')
		return (
			<div>
				<h2>This is a Widget</h2>
				<div>{this.props.msg}</div>
			</div>
		)
	}
	componentWillUnmount() {
	
		console.log('Widget Component componentWillUnmount executed')
	}

}