import React from 'react';
import ReactDOM from 'react-dom';
import ./app.js;

class Hello extends React.Component {
    constructor(props) {
         super(props) 
    }
    render () {
    	return  (
			<div>
				<h1>Hello World</h1>
				<div>This content</div>
			</div>
		)
	}
}

ReactDOM.render(<Hello />, document.getElementById('app'))
