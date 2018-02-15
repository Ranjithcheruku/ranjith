import React from 'react';
import PropTypes from 'prop-types';
let counter = 0;

export class Widget extends React.Component{
	static get defaultProps() {
	    return {
	    	num : 40
	    }
	}
	constructor(props) {
		super(props);
		console.log('Widget Component constructor executed')
	}
	componentWillMount() {
		console.log('Widget Component componentWillMount executed')
		// before the render method is executed if you want make any changes in state
	}
	componentDidMount() {
		console.log('Widget Component componentDidMount executed');
		// after the render method is executed
		// ajax calls
		// timers
		// web socket connections
	}

	componentWillReceiveProps(nextProps) {
		// when we receive a new set of props from the parent component
		console.log('Widget Component componentWillReceiveProps executed', this.props, nextProps);
	}

	shouldComponentUpdate(nextProps, nextState){
		// when we receive a new set of props or update in state 
		// return false -- there will be no update (render method will not be executed)
		// return true -- there will be an update
		//console.log('state in shouldComponentUpdate : current and next state respectively : ',this.state, nextState)
		//console.log('state in shouldComponentUpdate : current and next props respectively : ',this.props, nextProps)
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
		// in mouting render method is called once
		// in updating every time there is an update in state or props it will be invoked
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
		// after the render method is executed
		// timeout ajax calls
		// remove timers
		// closr connections web socket connections
		console.log('Widget Component componentWillUnmount executed')
	}

}

Widget.propTypes = {
	msg : PropTypes.string,
	num : PropTypes.number
}

/*Widget.defaultProps = {
	num : 20
}*/

