import React from 'react';

expoert class Hello extends React.component {
	constructor (props) {
		     super(props);
		     this.state = {
		     	msg : 'Hello Every one'
		     	msg2 : 'this is content'
		     
	         }
    }
    update (event)  {
    	var inpMsg = event.target.value;
    	this.setState(function (prevState,props){
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





    