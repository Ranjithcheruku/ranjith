import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.js';

class Hello extends React.Component {
    constructor(props) {
         super(props) 
    }
    render () {
    	return  (
			<div>
				<h1>federal soft</h1>
				<div>This is ranjith</div>
			</div>
		)
	}
}

ReactDOM.render(<Hello />, document.getElementById('app'))
