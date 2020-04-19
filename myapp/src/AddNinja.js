import React, { Component } from 'react'

class AddNinja extends Component {
	state = {
		name: null,
		age: null,
		belt: null
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addNinja(this.state);
	}
	render() {
		return (
			<div>
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