import React from 'react';
import ReactDOM from 'react-dom';
import { Widget } from './Widget';
import {Button} from './Button';
import axios from 'axios';


/*
	stateful component, smart component, class component
	-- when we need state
	-- when we use life cycle methods

	-- we also have access to props 
*/

//let arr = ['Jhon', 'Bob', 'Mary', 'Ram']

class App extends React.Component {
	constructor(props) {
		super(props);
		this. state = {
			message : 'default value for message property',
			items : []
		}
		this.update = this.update.bind(this);
		this.removeWidget = this.removeWidget.bind(this);	
	}
	componentWillMount() {
		axios
			.get('http://swapi.co/api/people/?format=json')
			.then((data)=>{
				this.setState(function(prevState, props){
					return {items : data.data.results}
				})
				console.log(data)
			})
			.catch(function(err){
				console.log(err)
			})
	}
	update(event) {
		let inpMsg = event.target.value;
		this.setState(function(prevState, props){
			return { message : inpMsg }
		})
		//console.log(this.refs.myWidget);
		
	}

	filter(event) {
		// every time input changes 
		// we are setting the value of filter
		this.setState({filter:event.target.value})
	}

	addWidget(event) {
		ReactDOM.render(<Widget />, document.getElementById('a'))
	}

	removeWidget(event) {
		//let widgetNode = ReactDOM.findDOMNode(this.refs.myWidget)
		ReactDOM.unmountComponentAtNode(document.getElementById('a'));
	}

	render() {
		let arr = this.state.items; // items from ajax
		if(this.state.filter) { // verifying if the filter is there or not
			arr = arr.filter((item)=>{// reduce only the matching items
				// returning trueif there is a match in the name or not
				return item.name.toLowerCase().includes(this.state.filter.toLowerCase())
			})
		}
		return (
			<div>
				<input type="text" onChange={this.filter.bind(this)} />
				{
					arr.map(function(item){
						return <h3 key={item.name}>{item.name}</h3>
					})
				}
				<Widget><Button>Hi every one</Button><h4>This is heading tag in Widget</h4></Widget>
				<button onClick={this.removeWidget}>unmount Widget</button>
				<button onClick={this.addWidget}>add Widget</button>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('app'))