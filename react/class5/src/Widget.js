import React from 'react';
import PropTypes from 'prop-types';
let counter = 0;
let timer;

export class Widget extends React.Component{
	static get defaultProps() {
	    return {
	    	msg : 'new message',
	    	num : 40
	    }
}
	constructor(props) {
		super(props);
		console.log(' Avinash player 1')
}
	
	componentDidMount() {
		console.log('Sumanth player 3');
	
		var self = this;
		timer = setInterval(function(){
			console.log(self.props.msg)
		},1000)
}

	componentWillReceiveProps(nextProps) {
		
		console.log('Component componentWillReceiveProps executed', this.props, nextProps);
	}

	shouldComponentUpdate(nextProps, nextState){
		
		counter++;
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
		
		console.log('render method executed')
		return (
			<div>
				<h2>This is a Widget</h2>
				<div>{this.props.msg}</div>
				<div>The number is : {this.props.num}</div>
			</div>
		)
	}
	componentWillUnmount() {
		
		clearInterval(timer);
		console.log('Widget Component componentWillUnmount executed')
	}
	componentWillMount() {
		console.log('Ranjith player 2')
		
}

}

Widget.propTypes = {
	msg : PropTypes.string,
	num : PropTypes.number

}



