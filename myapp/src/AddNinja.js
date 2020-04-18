import React, { Component } from 'react';
// import js_dump from './js-dump';

class AddNinja extends Component {
	state = {
		name: null,
		age: null,
		belt: null
	}

	handleChange = (e) => {
		// console.log(e.target.id, e.target.value);
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		document.getElementById("output").innerHTML = JSON.stringify(this.state);
	}
	render() {
		return (
			<div className="form-class">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name:</label>
					&nbsp;<input type="text" id="name" onChange={this.handleChange} />
					&nbsp;<label htmlFor="age">Age:</label>
					&nbsp;<input type="text" id="age" onChange={this.handleChange} />
					&nbsp;<label htmlFor="belt">Belt:</label>
					&nbsp;<input type="text" id="belt" onChange={this.handleChange} />
					&nbsp;<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddNinja