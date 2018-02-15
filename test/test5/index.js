import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
	render() {
		    return   ( 
		    	    <div>
		    	         <h1>Hello World</h1>
		    	         <div>This content</div>
		    	    </div>
		   )

    }
}


ReactDOM.render(<Hello/>,
document.getElementById('app'))


