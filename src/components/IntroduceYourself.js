import React, { Component } from 'react';
import logo from '../logo.svg';
import avartar_1 from '../anh_1.JPG';
import avartar_2 from '../anh_2.JPG';
import '../App.css'
import '../bootstrap.css'

class IntroduceYourself extends Component {
	constructor() {
	  	super();
		
	  	this.state = {
	    	data: {
	    		name: 'duong duc anh',
	    		age: 28,
	    		sex: 'male',
	    		country: 'Ha Tinh',
	    		companny: 'Shopstack'		
	    	},
	    	dataimg: {
	    		avartar: avartar_1
	    	}
	  	}
	  	this.nextImageHandler = this.nextImageHandler.bind(this);
	};

	nextImageHandler() {
		var updateAvarta = (this.state.dataimg.avartar === avartar_1) ? avartar_2 : avartar_1;
	  	this.setState({dataimg: {avartar: updateAvarta}});
	}

	render() {
	  	return (
	     	<div>
	        	<div className="container">
				  <div className="row">
				  	<div><h1 style={{textAlign: 'center'}}>Introduce Yourself</h1></div>
				    <div className="col-md-4">
				     	<div className="logo">
				     	  	<img src={this.state.dataimg.avartar} className="avartar" style={{maxWidth:200}} alt="avartar" />
				     	  	<div className="nextimg"><button onClick = {this.nextImageHandler}>Change Image</button></div>
				     	</div>
				    </div>
				    <div className="col-md-8">
				      	<table className="table table-bordered table-striped">
					      	 <tbody>
					      	 	<tr>
							        <td>Name</td>
							        <td>{this.state.data.name}</td>
							    </tr>
							    <tr>
							        <td>Age</td>
							        <td>{this.state.data.age}</td>
							    </tr>
							    <tr>
							        <td>Sex</td>
							        <td>{this.state.data.sex}</td>
							    </tr>
							    <tr>
							        <td>Country</td>
							        <td>{this.state.data.country}</td>
							    </tr>
							    <tr>
							        <td>Company</td>
							        <td>{this.state.data.companny}</td>
							    </tr>
					      	 </tbody>
				      	</table>
				    </div>
				  </div>
				</div>
	     	</div>
	  	);
	}
}

export default IntroduceYourself;