import React, { Component } from 'react';

class EgForceUpdate extends Component {
	constructor() {
	  	super();
		this.test = '1111';
	  	this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

	};

	forceUpdateHandler() {
		this.forceUpdate()
		this.test = '22222';
	};

	render() {
      	return (
         	<div>
            	<button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            	<h4>Random number: {Math.random()}</h4>
            	<p>{this.test}</p>
         	</div>
      	);
   	}
}
export default EgForceUpdate;